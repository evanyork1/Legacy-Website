import { z } from "npm:zod@3";
import { admin, audit, cors, json, requireArchiveUser } from "../_shared/archive.ts";

// Resumable, re-runnable full export of Jobber into jobber_* tables + private bucket.
// Each invocation works ~110s, checkpoints cursors in jobber_sync_runs, then re-invokes itself.

const API = "https://api.getjobber.com/api/graphql";
const TOKEN_URL = "https://api.getjobber.com/api/oauth/token";
const SELF = `${Deno.env.get("SUPABASE_URL")}/functions/v1/jobber-archive-sync`;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const BUCKET = "jobber-archive";
const BUDGET_MS = 110_000;
const sb = admin();

const Body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("status") }),
  z.object({ action: z.literal("start") }),
  z.object({ action: z.literal("resume") }),
  z.object({ action: z.literal("stop") }),
  z.object({ action: z.literal("retry_errors"), ids: z.array(z.string().uuid()).max(200).optional() }),
  z.object({ action: z.literal("continue"), run_id: z.string().uuid() }),
]);

// ---------- Jobber auth + GraphQL with throttling ----------
async function token(): Promise<string> {
  const { data } = await sb.from("jobber_tokens").select("*").order("created_at", { ascending: false }).limit(1);
  const row = data?.[0];
  if (!row) throw new Error("Jobber is not connected");
  if (new Date(row.expires_at).getTime() > Date.now() + 5 * 60_000) return row.access_token;
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: Deno.env.get("JOBBER_CLIENT_ID")!, client_secret: Deno.env.get("JOBBER_CLIENT_SECRET")!, grant_type: "refresh_token", refresh_token: row.refresh_token }),
  });
  if (!res.ok) throw new Error("Jobber token refresh failed — reconnect Jobber");
  const t = await res.json();
  await sb.from("jobber_tokens").update({ access_token: t.access_token, refresh_token: t.refresh_token || row.refresh_token, expires_at: new Date(Date.now() + (Number(t.expires_in) || 3600) * 1000).toISOString() }).eq("id", row.id);
  return t.access_token;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function gql(query: string, variables: Record<string, unknown> = {}): Promise<any> {
  for (let attempt = 0; attempt < 6; attempt++) {
    const r = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await token()}`, "X-JOBBER-GRAPHQL-VERSION": "2025-01-20" },
      body: JSON.stringify({ query, variables }),
    });
    if (r.status === 429 || r.status >= 500) { await sleep(2000 * 2 ** attempt); continue; }
    const b = await r.json().catch(() => ({}));
    const throttled = b?.errors?.some((e: any) => e?.extensions?.code === "THROTTLED" || /throttl/i.test(e?.message ?? ""));
    const ts = b?.extensions?.cost?.throttleStatus;
    if (throttled) {
      const need = b?.extensions?.cost?.requestedQueryCost ?? 2000;
      const wait = ts ? Math.max(1, (need - ts.currentlyAvailable) / (ts.restoreRate || 500)) * 1000 : 5000;
      await sleep(Math.min(wait + 500, 20_000)); continue;
    }
    if (b?.errors?.length) throw new Error(b.errors.map((e: any) => e.message).join("; ").slice(0, 900));
    // Stay ahead of the cost bucket
    if (ts && ts.currentlyAvailable < 2500) await sleep(Math.min(((2500 - ts.currentlyAvailable) / (ts.restoreRate || 500)) * 1000, 10_000));
    return b.data;
  }
  throw new Error("Jobber kept throttling / failing after retries");
}

// ---------- Runtime introspection: build fragments from real field names ----------
let fragCache: Record<string, string> | null = null;
async function fragments() {
  if (fragCache) return fragCache;
  const types = ["CustomFieldArea", "CustomFieldDropdown", "CustomFieldLink", "CustomFieldNumeric", "CustomFieldText", "CustomFieldTrueFalse", "NoteFileInterface"];
  const out: Record<string, string> = {};
  for (const t of types) {
    const d = await gql(`{ __type(name:"${t}"){ fields{ name args{name} type{ kind ofType{ kind ofType{ kind } } } } } }`);
    const scalars = (d?.__type?.fields ?? []).filter((f: any) => {
      if (f.args?.length) return false;
      let k = f.type; while (k && (k.kind === "NON_NULL" || k.kind === "LIST") && k.ofType) k = k.ofType;
      return k && (k.kind === "SCALAR" || k.kind === "ENUM");
    }).map((f: any) => f.name);
    out[t] = scalars.join(" ");
  }
  fragCache = out;
  return out;
}

const customFieldsSel = (f: Record<string, string>) =>
  `customFields { __typename ${["CustomFieldArea", "CustomFieldDropdown", "CustomFieldLink", "CustomFieldNumeric", "CustomFieldText", "CustomFieldTrueFalse"].filter((t) => f[t]).map((t) => `... on ${t} { ${f[t]} }`).join(" ")} }`;

const noteFields = (f: Record<string, string>) =>
  `id message createdAt pinned createdBy { __typename ... on User { name { full } } } fileAttachments(first: 50) { totalCount nodes { ${f.NoteFileInterface || "id fileName contentType fileSize url"} } }`;
const notesSel = (f: Record<string, string>, union: string[]) =>
  `notes(first: 50) { totalCount nodes { __typename ${union.map((u) => `... on ${u} { ${noteFields(f)} }`).join(" ")} } }`;

// ---------- helpers ----------
const MONEY = /(amount|total|price|cost|balance|deposit|markup|tax|discount|payment|tip|invoiceNet|jobCosting)/i;
function strip(v: any): any {
  if (Array.isArray(v)) return v.map(strip);
  if (v && typeof v === "object") {
    const o: any = {};
    for (const [k, x] of Object.entries(v)) if (!MONEY.test(k)) o[k] = strip(x);
    return o;
  }
  return v;
}
async function upsert(table: string, rows: any[], onConflict = "id") {
  if (!rows.length) return;
  const { error } = await sb.from(table).upsert(rows.map((r) => ({ ...r, synced_at: new Date().toISOString() })), { onConflict });
  if (error) throw new Error(`${table}: ${error.message}`);
}
const addr = (a: any) => a ? [a.street ?? a.street1, a.city, a.province, a.postalCode].filter(Boolean).join(", ") : null;

async function logError(run_id: string | null, entity: string, record_id: string | null, message: string, context: any = null) {
  const { data: open } = await sb.from("jobber_sync_errors").select("id, attempts").eq("entity", entity).eq("record_id", record_id ?? "").eq("resolved", false).maybeSingle();
  if (open) await sb.from("jobber_sync_errors").update({ message, context, run_id, attempts: open.attempts + 1 }).eq("id", open.id);
  else await sb.from("jobber_sync_errors").insert({ run_id, entity, record_id: record_id ?? "", message, context });
}

async function saveNotes(run_id: string | null, parent_type: string, parent_id: string, client_id: string | null, notes: any) {
  const nodes = (notes?.nodes ?? []).filter((n: any) => n?.id);
  if (notes?.totalCount > nodes.length) await logError(run_id, "notes_overflow", `${parent_type}:${parent_id}`, `Only ${nodes.length} of ${notes.totalCount} notes fetched`, { parent_type, parent_id });
  await upsert("jobber_notes", nodes.map((n: any) => ({
    id: n.id, parent_type, parent_id, client_id, message: n.message, created_by: n.createdBy?.name?.full ?? null, created_at_jobber: n.createdAt, raw: strip({ ...n, fileAttachments: undefined }),
  })));
  for (const n of nodes) {
    const files = n.fileAttachments?.nodes ?? [];
    if (n.fileAttachments?.totalCount > files.length) await logError(run_id, "files_overflow", n.id, `Only ${files.length} of ${n.fileAttachments.totalCount} files fetched`, { parent_type, parent_id });
    for (const f of files) await saveFile(run_id, f, n.id, parent_type, parent_id, client_id);
  }
}

async function saveFile(run_id: string | null, f: any, note_id: string, parent_type: string, parent_id: string, client_id: string | null) {
  const { data: existing } = await sb.from("jobber_attachments").select("downloaded").eq("id", f.id).maybeSingle();
  const base = { id: f.id, note_id, parent_type, parent_id, client_id, file_name: f.fileName, content_type: f.contentType, size_bytes: f.fileSize, raw: { ...f, url: undefined, downloadUrl: undefined, thumbnailUrl: undefined, previewUrl: undefined } };
  if (existing?.downloaded) { await upsert("jobber_attachments", [{ ...base, downloaded: true }]); return; }
  await upsert("jobber_attachments", [{ ...base, downloaded: false }]);
  const url = f.downloadUrl || f.url;
  try {
    if (!url) throw new Error("No download URL from Jobber");
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Download HTTP ${r.status}`);
    const buf = new Uint8Array(await r.arrayBuffer());
    const safe = String(f.fileName || "file").replace(/[^\w.\-]+/g, "_").slice(-120);
    const path = `${client_id ?? "no-client"}/${parent_type}/${parent_id}/${f.id}-${safe}`;
    const { error } = await sb.storage.from(BUCKET).upload(path, buf, { contentType: f.contentType || r.headers.get("content-type") || "application/octet-stream", upsert: true });
    if (error) throw new Error(`Storage: ${error.message}`);
    await sb.from("jobber_attachments").update({ downloaded: true, storage_path: path, size_bytes: f.fileSize ?? buf.byteLength }).eq("id", f.id);
    await sb.from("jobber_sync_errors").update({ resolved: true }).eq("entity", "attachment").eq("record_id", f.id).eq("resolved", false);
  } catch (e) {
    await logError(run_id, "attachment", f.id, (e as Error).message, { parent_type, parent_id, file_name: f.fileName });
  }
}

// ---------- Entities ----------
type Entity = { key: string; root: string; page: number; nodes: (f: Record<string, string>) => string; save: (run: string | null, nodes: any[]) => Promise<void>; byId?: string };

const ENTITIES: Entity[] = [
  {
    key: "clients", root: "clients", page: 15, byId: "client",
    nodes: (f) => `id name firstName lastName companyName title isCompany isLead isArchived leadSource createdAt updatedAt jobberWebUri
      emails { address description primary } phones { number description primary }
      billingAddress { street city province postalCode country }
      tags(first: 50) { nodes { label } } ${customFieldsSel(f)} ${notesSel(f, ["ClientNote"])}`,
    save: async (run, nodes) => {
      await upsert("jobber_clients", nodes.map((c) => ({
        id: c.id, name: c.name, company_name: c.companyName, first_name: c.firstName, last_name: c.lastName,
        emails: (c.emails ?? []).map((e: any) => e.address).join(", "), phones: (c.phones ?? []).map((p: any) => p.number).join(", "),
        is_lead: c.isLead, is_archived: c.isArchived, tags: (c.tags?.nodes ?? []).map((t: any) => t.label), jobber_url: c.jobberWebUri,
        created_at_jobber: c.createdAt, updated_at_jobber: c.updatedAt, raw: strip({ ...c, notes: undefined }),
      })));
      for (const c of nodes) await saveNotes(run, "client", c.id, c.id, c.notes);
    },
  },
  {
    key: "properties", root: "properties", page: 50,
    nodes: (f) => `id name createdAt jobberWebUri isBillingAddress client { id } address { street street1 street2 city province postalCode country } ${customFieldsSel(f)}`,
    save: async (_r, nodes) => upsert("jobber_properties", nodes.map((p) => ({
      id: p.id, client_id: p.client?.id ?? null, street: p.address?.street, city: p.address?.city, province: p.address?.province,
      postal_code: p.address?.postalCode, country: p.address?.country, address: addr(p.address), raw: strip(p),
    }))),
  },
  {
    key: "requests", root: "requests", page: 15, byId: "request",
    nodes: (f) => `id title requestStatus source companyName contactName email phone createdAt updatedAt jobberWebUri client { id } property { id } ${notesSel(f, ["RequestNote"])}`,
    save: async (run, nodes) => {
      await upsert("jobber_requests", nodes.map((q) => ({
        id: q.id, client_id: q.client?.id, property_id: q.property?.id, title: q.title, status: q.requestStatus,
        jobber_url: q.jobberWebUri, created_at_jobber: q.createdAt, raw: strip({ ...q, notes: undefined }),
      })));
      for (const q of nodes) await saveNotes(run, "request", q.id, q.client?.id ?? null, q.notes);
    },
  },
  {
    key: "quotes", root: "quotes", page: 10, byId: "quote",
    nodes: (f) => `id quoteNumber title quoteStatus message createdAt jobberWebUri clientHubUri client { id } property { id } request { id }
      amounts { depositAmount discountAmount nonTaxAmount outstandingDepositAmount subtotal taxAmount total }
      lineItems(first: 100) { totalCount nodes { id name description quantity unitPrice totalPrice unitCost totalCost markup taxable optional textOnly sortOrder createdAt } }
      ${notesSel(f, ["QuoteNote"])}`,
    save: async (run, nodes) => {
      await upsert("jobber_quotes", nodes.map((q) => ({
        id: q.id, client_id: q.client?.id, property_id: q.property?.id, request_id: q.request?.id, quote_number: q.quoteNumber,
        title: q.title, status: q.quoteStatus, client_message: q.message, jobber_url: q.jobberWebUri, created_at_jobber: q.createdAt,
        raw: strip({ ...q, notes: undefined, lineItems: undefined }),
      })));
      await saveLines(run, "quote", nodes);
      await upsert("jobber_financials", nodes.map((q) => ({ record_type: "quote", record_id: q.id, total: q.amounts?.total, subtotal: q.amounts?.subtotal, deposit: q.amounts?.depositAmount, raw: { amounts: q.amounts, lineItems: q.lineItems?.nodes } })), "record_type,record_id");
      for (const q of nodes) await saveNotes(run, "quote", q.id, q.client?.id ?? null, q.notes);
    },
  },
  {
    key: "jobs", root: "jobs", page: 10, byId: "job",
    nodes: (f) => `id jobNumber title jobStatus jobType instructions startAt endAt completedAt createdAt updatedAt jobberWebUri
      total invoicedTotal uninvoicedTotal client { id } property { id } quote { id } request { id } ${customFieldsSel(f)}
      lineItems(first: 100) { totalCount nodes { id name description quantity unitPrice totalPrice unitCost totalCost taxable createdAt } }
      ${notesSel(f, ["JobNote", "ClientNote", "QuoteNote", "RequestNote"])}`,
    save: async (run, nodes) => {
      await upsert("jobber_jobs", nodes.map((j) => ({
        id: j.id, client_id: j.client?.id, property_id: j.property?.id, quote_id: j.quote?.id, job_number: String(j.jobNumber),
        title: j.title, status: j.jobStatus, instructions: j.instructions, start_at: j.startAt, end_at: j.endAt,
        jobber_url: j.jobberWebUri, created_at_jobber: j.createdAt, raw: strip({ ...j, notes: undefined, lineItems: undefined }),
      })));
      await saveLines(run, "job", nodes);
      await upsert("jobber_financials", nodes.map((j) => ({ record_type: "job", record_id: j.id, total: j.total, raw: { total: j.total, invoicedTotal: j.invoicedTotal, uninvoicedTotal: j.uninvoicedTotal, lineItems: j.lineItems?.nodes } })), "record_type,record_id");
      for (const j of nodes) await saveNotes(run, "job", j.id, j.client?.id ?? null, j.notes);
    },
  },
  {
    key: "visits", root: "visits", page: 50,
    nodes: () => `id title instructions startAt endAt createdAt visitStatus job { id } client { id } property { id }`,
    save: async (_r, nodes) => upsert("jobber_visits", nodes.map((v) => ({
      id: v.id, job_id: v.job?.id, client_id: v.client?.id, property_id: v.property?.id, title: v.title, status: v.visitStatus,
      instructions: v.instructions, start_at: v.startAt, end_at: v.endAt, raw: strip(v),
    }))),
  },
  {
    key: "invoices", root: "invoices", page: 10, byId: "invoice",
    nodes: (f) => `id invoiceNumber subject invoiceStatus message issuedDate dueDate receivedDate createdAt jobberWebUri client { id } jobs(first: 20) { nodes { id } }
      amounts { depositAmount discountAmount invoiceBalance nonTaxAmount paymentsTotal subtotal taxAmount tipsTotal total }
      lineItems(first: 100) { totalCount nodes { id name description quantity unitPrice totalPrice taxable date createdAt } } ${customFieldsSel(f)}`,
    save: async (run, nodes) => {
      await upsert("jobber_invoices", nodes.map((i) => ({
        id: i.id, client_id: i.client?.id, invoice_number: i.invoiceNumber, subject: i.subject, status: i.invoiceStatus, message: i.message,
        issued_date: i.issuedDate, due_date: i.dueDate, job_ids: (i.jobs?.nodes ?? []).map((j: any) => j.id), jobber_url: i.jobberWebUri,
        created_at_jobber: i.createdAt, raw: strip({ ...i, lineItems: undefined }),
      })));
      await saveLines(run, "invoice", nodes);
      await upsert("jobber_financials", nodes.map((i) => ({ record_type: "invoice", record_id: i.id, total: i.amounts?.total, subtotal: i.amounts?.subtotal, balance: i.amounts?.invoiceBalance, deposit: i.amounts?.depositAmount, raw: { amounts: i.amounts, lineItems: i.lineItems?.nodes } })), "record_type,record_id");
    },
  },
  {
    key: "payments", root: "paymentRecords", page: 50,
    nodes: () => `__typename id amount rawAmount entryDate details adjustmentType sentAt client { id } invoice { id } quote { id }`,
    save: async (_r, nodes) => upsert("jobber_payments", nodes.map((p) => ({
      id: p.id, invoice_id: p.invoice?.id, client_id: p.client?.id, amount: p.amount, paid_at: p.entryDate, payment_type: p.adjustmentType, raw: p,
    }))),
  },
];

async function saveLines(run: string | null, parent_type: string, nodes: any[]) {
  const rows: any[] = [];
  for (const n of nodes) {
    if (n.lineItems?.totalCount > (n.lineItems?.nodes?.length ?? 0)) await logError(run, "lines_overflow", `${parent_type}:${n.id}`, `Only ${n.lineItems.nodes.length} of ${n.lineItems.totalCount} line items fetched`);
    for (const l of n.lineItems?.nodes ?? []) rows.push({ id: l.id, parent_type, parent_id: n.id, name: l.name, description: l.description, quantity: l.quantity, raw: strip(l) });
  }
  await upsert("jobber_line_items", rows);
}

// ---------- Run loop ----------
async function kick(run_id: string) {
  // Fire-and-forget continuation (server-to-server, service key never leaves the backend)
  const p = fetch(SELF, { method: "POST", headers: { Authorization: `Bearer ${SERVICE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ action: "continue", run_id }) }).catch(() => {});
  // @ts-ignore EdgeRuntime exists in Supabase
  if (typeof EdgeRuntime !== "undefined") EdgeRuntime.waitUntil(p); else await sleep(200);
}

async function work(run_id: string) {
  const t0 = Date.now();
  const { data: run } = await sb.from("jobber_sync_runs").select("*").eq("id", run_id).single();
  if (!run || run.status !== "running") return;
  const state: Record<string, any> = run.entity_state ?? {};
  const f = await fragments();
  try {
    for (const e of ENTITIES) {
      const s = state[e.key] ?? (state[e.key] = { cursor: null, done: false, fetched: 0, total: null });
      if (s.done) continue;
      while (Date.now() - t0 < BUDGET_MS) {
        const { data: cur } = await sb.from("jobber_sync_runs").select("status").eq("id", run_id).single();
        if (cur?.status !== "running") return;
        const d = await gql(`query($after: String) { ${e.root}(first: ${e.page}, after: $after) { totalCount pageInfo { hasNextPage endCursor } nodes { ${e.nodes(f)} } } }`, { after: s.cursor });
        const conn = d[e.root];
        await e.save(run_id, conn.nodes ?? []);
        s.total = conn.totalCount ?? s.total; s.fetched += conn.nodes?.length ?? 0; s.cursor = conn.pageInfo?.endCursor ?? s.cursor;
        if (!conn.pageInfo?.hasNextPage) s.done = true;
        await sb.from("jobber_sync_runs").update({ entity_state: state, current_entity: e.key, heartbeat_at: new Date().toISOString(), last_error: null }).eq("id", run_id);
        if (s.done) break;
      }
      if (!s.done) { await kick(run_id); return; }
    }
    await sb.from("jobber_sync_runs").update({ status: "completed", finished_at: new Date().toISOString(), current_entity: null, entity_state: state }).eq("id", run_id);
  } catch (err) {
    const msg = (err as Error).message;
    await logError(run_id, "sync", run_id, msg);
    // Transient problems: pause; admin can resume from the same checkpoint.
    await sb.from("jobber_sync_runs").update({ status: "paused", last_error: msg, entity_state: state }).eq("id", run_id);
  }
}

async function retry(ids?: string[]) {
  let q = sb.from("jobber_sync_errors").select("*").eq("resolved", false).limit(100);
  if (ids?.length) q = q.in("id", ids);
  const { data: errs } = await q;
  const f = await fragments();
  let fixed = 0;
  for (const er of errs ?? []) {
    try {
      let type: string | undefined, id: string | undefined;
      if (er.entity === "attachment") { type = er.context?.parent_type; id = er.context?.parent_id; }
      else if (er.entity === "sync") { await sb.from("jobber_sync_errors").update({ resolved: true }).eq("id", er.id); fixed++; continue; }
      else if (er.record_id?.includes(":")) [type, id] = er.record_id.split(":");
      const e = ENTITIES.find((x) => x.byId === type);
      if (!e || !id) continue;
      const d = await gql(`query($id: EncodedId!) { ${e.byId}(id: $id) { ${e.nodes(f)} } }`, { id });
      if (d[e.byId!]) await e.save(null, [d[e.byId!]]);
      if (er.entity !== "attachment") await sb.from("jobber_sync_errors").update({ resolved: true }).eq("id", er.id);
      const { data: still } = await sb.from("jobber_sync_errors").select("resolved").eq("id", er.id).single();
      if (still?.resolved) fixed++;
    } catch (e) {
      await sb.from("jobber_sync_errors").update({ message: (e as Error).message, attempts: er.attempts + 1 }).eq("id", er.id);
    }
  }
  return { tried: errs?.length ?? 0, fixed };
}

async function counts() {
  const tables: Record<string, string> = { clients: "jobber_clients", properties: "jobber_properties", requests: "jobber_requests", quotes: "jobber_quotes", jobs: "jobber_jobs", visits: "jobber_visits", invoices: "jobber_invoices", payments: "jobber_payments", notes: "jobber_notes", line_items: "jobber_line_items", attachments: "jobber_attachments" };
  const out: Record<string, number> = {};
  for (const [k, t] of Object.entries(tables)) out[k] = (await sb.from(t).select("id", { count: "exact", head: true })).count ?? 0;
  out.attachments_downloaded = (await sb.from("jobber_attachments").select("id", { count: "exact", head: true }).eq("downloaded", true)).count ?? 0;
  out.open_errors = (await sb.from("jobber_sync_errors").select("id", { count: "exact", head: true }).eq("resolved", false)).count ?? 0;
  return out;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid request" }, 400);
  const body = parsed.data;

  if (body.action === "continue") {
    if ((req.headers.get("Authorization") || "") !== `Bearer ${SERVICE_KEY}`) return json({ error: "Forbidden" }, 403);
    // @ts-ignore
    if (typeof EdgeRuntime !== "undefined") EdgeRuntime.waitUntil(work(body.run_id)); else await work(body.run_id);
    return json({ ok: true });
  }

  const caller = await requireArchiveUser(req, true);
  if (caller instanceof Response) return caller;
  const { data: latest } = await sb.from("jobber_sync_runs").select("*").order("started_at", { ascending: false }).limit(1).maybeSingle();
  const alive = latest?.status === "running" && Date.now() - new Date(latest.heartbeat_at).getTime() < 4 * 60_000;

  switch (body.action) {
    case "status": {
      const { data: errors } = await sb.from("jobber_sync_errors").select("*").eq("resolved", false).order("updated_at", { ascending: false }).limit(100);
      return json({ run: latest, alive, counts: await counts(), errors: errors ?? [] });
    }
    case "start": {
      if (alive) return json({ error: "A sync is already running" }, 409);
      if (latest?.status === "running") await sb.from("jobber_sync_runs").update({ status: "paused" }).eq("id", latest.id);
      const { data: run, error } = await sb.from("jobber_sync_runs").insert({ started_by: caller.email }).select().single();
      if (error) return json({ error: error.message }, 500);
      await audit({ user_id: caller.userId, user_email: caller.email, action: "sync_start", record_type: "sync_run", record_id: run.id }, req);
      await kick(run.id);
      return json({ ok: true, run_id: run.id });
    }
    case "resume": {
      if (!latest || latest.status === "completed") return json({ error: "Nothing to resume — start a new sync" }, 400);
      if (alive) return json({ ok: true, run_id: latest.id });
      await sb.from("jobber_sync_runs").update({ status: "running", heartbeat_at: new Date().toISOString(), last_error: null }).eq("id", latest.id);
      await audit({ user_id: caller.userId, user_email: caller.email, action: "sync_resume", record_type: "sync_run", record_id: latest.id }, req);
      await kick(latest.id);
      return json({ ok: true, run_id: latest.id });
    }
    case "stop": {
      if (latest?.status === "running") await sb.from("jobber_sync_runs").update({ status: "paused", last_error: "Stopped by admin" }).eq("id", latest.id);
      return json({ ok: true });
    }
    case "retry_errors": {
      const r = await retry(body.ids);
      await audit({ user_id: caller.userId, user_email: caller.email, action: "sync_retry_errors", metadata: r }, req);
      return json(r);
    }
  }
  return json({ error: "Unknown" }, 400);
});
