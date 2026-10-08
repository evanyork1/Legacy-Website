import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, ArrowLeft, FileText } from "lucide-react";
import { archiveCall, useArchive } from "./archiveSession";

const db = supabase as any;
const clean = (q: string) => q.replace(/[%,()*\\]/g, " ").trim();
const fmtDate = (d?: string | null) => (d ? new Date(d).toLocaleDateString() : "");
const money = (n?: number | null) => (n == null ? "" : n.toLocaleString(undefined, { style: "currency", currency: "USD" }));

type Hit = { client_id: string; why: string };

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-background border border-border mb-6">
      <div className="px-5 py-3 border-b border-border"><h2 className="font-semibold text-foreground">{title}</h2></div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function ArchiveSearch() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState<any[] | null>(null);
  const [why, setWhy] = useState<Record<string, string[]>>({});

  const run = async (raw: string) => {
    const term = clean(raw);
    if (term.length < 2) { setClients(null); return; }
    setLoading(true);
    const like = `%${term}%`;
    const digits = term.replace(/\D/g, "");
    try {
      const clientOr = [`name.ilike.${like}`, `company_name.ilike.${like}`, `emails.ilike.${like}`, `phones.ilike.${like}`];
      if (digits.length >= 4) clientOr.push(`phones.ilike.%${digits.slice(-4)}%`);
      const [c, p, qu, j, inv, rq, n] = await Promise.all([
        db.from("jobber_clients").select("id").or(clientOr.join(",")).limit(100),
        db.from("jobber_properties").select("client_id").or(`address.ilike.${like},street.ilike.${like},city.ilike.${like},postal_code.ilike.${like}`).limit(100),
        db.from("jobber_quotes").select("client_id").or(`quote_number.ilike.${like},title.ilike.${like},client_message.ilike.${like}`).limit(100),
        db.from("jobber_jobs").select("client_id").or(`job_number.ilike.${like},title.ilike.${like},instructions.ilike.${like}`).limit(100),
        db.from("jobber_invoices").select("client_id").or(`invoice_number.ilike.${like},subject.ilike.${like}`).limit(100),
        db.from("jobber_requests").select("client_id").ilike("title", like).limit(100),
        db.from("jobber_notes").select("client_id").ilike("message", like).limit(100),
      ]);
      const hits: Hit[] = [];
      const add = (rows: any[] | null, key: string, label: string) => (rows ?? []).forEach((r) => r[key] && hits.push({ client_id: r[key], why: label }));
      add(c.data, "id", "Name / contact");
      add(p.data, "client_id", "Address");
      add(qu.data, "client_id", "Quote");
      add(j.data, "client_id", "Job");
      add(inv.data, "client_id", "Invoice");
      add(rq.data, "client_id", "Request");
      add(n.data, "client_id", "Note");
      const w: Record<string, string[]> = {};
      hits.forEach((h) => { w[h.client_id] = Array.from(new Set([...(w[h.client_id] ?? []), h.why])); });
      const ids = Object.keys(w).slice(0, 150);
      const { data } = ids.length
        ? await db.from("jobber_clients").select("id,name,company_name,emails,phones,is_lead,is_archived").in("id", ids)
        : { data: [] };
      const props = ids.length ? (await db.from("jobber_properties").select("client_id,address").in("client_id", ids)).data ?? [] : [];
      const addr: Record<string, string> = {};
      props.forEach((r: any) => { if (!addr[r.client_id]) addr[r.client_id] = r.address; });
      setWhy(w);
      setClients((data ?? []).map((x: any) => ({ ...x, address: addr[x.id] })).sort((a: any, b: any) => (w[b.id].length - w[a.id].length) || (a.name ?? "").localeCompare(b.name ?? "")));
      archiveCall({ action: "log", event: "search", metadata: { q: term } }).catch(() => {});
    } finally { setLoading(false); }
  };

  useEffect(() => { const t = setTimeout(() => { setParams(q ? { q } : {}, { replace: true }); run(q); }, 350); return () => clearTimeout(t); }, [q]);

  return (
    <>
      <h1 className="text-2xl font-semibold text-foreground mb-4">Search</h1>
      <div className="relative mb-6 max-w-2xl">
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input autoFocus value={q} onChange={(e) => setQ(e.target.value)} className="pl-9 rounded-none h-11"
          placeholder="Name, company, phone, email, address, ZIP, quote/job/invoice #, or words from notes" />
      </div>
      {loading && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}
      {!loading && clients && (
        <section className="bg-background border border-border">
          <div className="px-5 py-3 border-b border-border text-sm text-muted-foreground">{clients.length} client{clients.length === 1 ? "" : "s"} found</div>
          {clients.length === 0 ? <p className="p-5 text-sm text-muted-foreground">No matches.</p> : (
            <ul className="divide-y divide-border">
              {clients.map((c) => (
                <li key={c.id}>
                  <Link to={`/jobberdetails/client/${encodeURIComponent(c.id)}`} className="block px-5 py-3 hover:bg-muted">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-foreground">{c.name || c.company_name || "Unnamed client"}</span>
                      {c.company_name && c.name && <span className="text-sm text-muted-foreground">· {c.company_name}</span>}
                      {c.is_lead && <Badge variant="secondary" className="rounded-none">Lead</Badge>}
                      {c.is_archived && <Badge variant="outline" className="rounded-none">Archived</Badge>}
                      <span className="ml-auto flex gap-1">{why[c.id]?.map((w) => <Badge key={w} variant="outline" className="rounded-none text-xs">{w}</Badge>)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{[c.address, c.phones, c.emails].filter(Boolean).join(" · ")}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
}

function Photo({ a }: { a: any }) {
  const [url, setUrl] = useState<string | null>(null);
  const isImg = (a.content_type ?? "").startsWith("image/");
  const open = async () => {
    const { data } = await supabase.functions.invoke("archive-signed-url", { body: { path: a.storage_path, record_id: a.id } });
    if (data?.url) window.open(data.url, "_blank", "noopener");
  };
  useEffect(() => {
    if (!isImg || !a.storage_path) return;
    supabase.functions.invoke("archive-signed-url", { body: { path: a.storage_path, record_id: a.id } }).then(({ data }) => setUrl(data?.url ?? null));
  }, [a.storage_path]);
  return (
    <button onClick={open} className="block border border-border bg-muted aspect-square overflow-hidden text-left" title={a.file_name}>
      {url ? <img src={url} alt={a.file_name ?? "photo"} className="w-full h-full object-cover" loading="lazy" />
        : <div className="w-full h-full flex flex-col items-center justify-center p-2 text-xs text-muted-foreground"><FileText className="h-5 w-5 mb-1" /><span className="truncate w-full text-center">{a.file_name}</span></div>}
    </button>
  );
}

export function ArchiveClient() {
  const { id = "" } = useParams();
  const { role } = useArchive();
  const [d, setD] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const by = (t: string, cols = "*") => db.from(t).select(cols).eq("client_id", id);
      const [c, props, reqs, quotes, jobs, visits, invs, notes, files] = await Promise.all([
        db.from("jobber_clients").select("*").eq("id", id).maybeSingle(),
        by("jobber_properties"), by("jobber_requests").order("created_at_jobber", { ascending: false }),
        by("jobber_quotes").order("created_at_jobber", { ascending: false }), by("jobber_jobs").order("created_at_jobber", { ascending: false }),
        by("jobber_visits").order("start_at", { ascending: false }), by("jobber_invoices").order("issued_date", { ascending: false }),
        by("jobber_notes").order("created_at_jobber", { ascending: false }),
        by("jobber_attachments").eq("downloaded", true).limit(500),
      ]);
      const parentIds = [...(quotes.data ?? []), ...(jobs.data ?? []), ...(invs.data ?? [])].map((r: any) => r.id);
      const lines = parentIds.length ? (await db.from("jobber_line_items").select("*").in("parent_id", parentIds)).data ?? [] : [];
      let fin: Record<string, any> = {};
      let pays: any[] = [];
      if (role === "admin" && parentIds.length) {
        const f = (await db.from("jobber_financials").select("record_id,total,balance,deposit").in("record_id", parentIds)).data ?? [];
        f.forEach((r: any) => { fin[r.record_id] = r; });
        pays = (await db.from("jobber_payments").select("*").eq("client_id", id).order("paid_at", { ascending: false })).data ?? [];
      }
      setD({ c: c.data, props: props.data ?? [], reqs: reqs.data ?? [], quotes: quotes.data ?? [], jobs: jobs.data ?? [], visits: visits.data ?? [], invs: invs.data ?? [], notes: notes.data ?? [], files: files.data ?? [], lines, fin, pays });
      archiveCall({ action: "log", event: "view_record", record_type: "client", record_id: id }).catch(() => {});
    })();
  }, [id, role]);

  if (!d) return <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />;
  if (!d.c) return <p className="text-sm text-muted-foreground">Client not found.</p>;
  const c = d.c;
  const linesFor = (pid: string) => d.lines.filter((l: any) => l.parent_id === pid);

  const Record = ({ r, num, title, status, date, url }: any) => (
    <div className="border border-border p-3 mb-3">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-medium text-foreground">{num ? `#${num}` : ""} {title}</span>
        {status && <Badge variant="outline" className="rounded-none text-xs">{status}</Badge>}
        <span className="text-muted-foreground text-xs">{fmtDate(date)}</span>
        {d.fin[r.id]?.total != null && <span className="ml-auto text-sm tabular-nums">{money(d.fin[r.id].total)}{d.fin[r.id].balance ? ` · balance ${money(d.fin[r.id].balance)}` : ""}</span>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary underline">Jobber</a>}
      </div>
      {linesFor(r.id).length > 0 && (
        <ul className="mt-2 text-xs text-muted-foreground space-y-0.5">
          {linesFor(r.id).map((l: any) => <li key={l.id}>{l.quantity != null ? `${l.quantity} × ` : ""}<span className="text-foreground">{l.name}</span>{l.description ? ` — ${l.description}` : ""}</li>)}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <Link to="/jobberdetails/search" className="inline-flex items-center text-sm text-muted-foreground mb-4 hover:text-foreground"><ArrowLeft className="h-4 w-4 mr-1" />Back to search</Link>
      <h1 className="text-2xl font-semibold text-foreground">{c.name || c.company_name}</h1>
      <p className="text-sm text-muted-foreground mb-6">{[c.company_name !== c.name && c.company_name, c.phones, c.emails].filter(Boolean).join(" · ")}{c.jobber_url && <> · <a className="text-primary underline" href={c.jobber_url} target="_blank" rel="noopener noreferrer">Open in Jobber</a></>}</p>

      {d.props.length > 0 && <Panel title={`Properties (${d.props.length})`}><ul className="text-sm space-y-1">{d.props.map((p: any) => <li key={p.id}>{p.address}</li>)}</ul></Panel>}
      {d.files.length > 0 && <Panel title={`Photos & files (${d.files.length})`}><div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">{d.files.map((a: any) => <Photo key={a.id} a={a} />)}</div></Panel>}
      {d.reqs.length > 0 && <Panel title={`Requests (${d.reqs.length})`}>{d.reqs.map((r: any) => <Record key={r.id} r={r} title={r.title} status={r.status} date={r.created_at_jobber} url={r.jobber_url} />)}</Panel>}
      {d.quotes.length > 0 && <Panel title={`Quotes (${d.quotes.length})`}>{d.quotes.map((r: any) => <Record key={r.id} r={r} num={r.quote_number} title={r.title} status={r.status} date={r.created_at_jobber} url={r.jobber_url} />)}</Panel>}
      {d.jobs.length > 0 && <Panel title={`Jobs (${d.jobs.length})`}>{d.jobs.map((r: any) => <Record key={r.id} r={r} num={r.job_number} title={r.title} status={r.status} date={r.start_at ?? r.created_at_jobber} url={r.jobber_url} />)}</Panel>}
      {d.visits.length > 0 && <Panel title={`Visits (${d.visits.length})`}><ul className="text-sm space-y-1">{d.visits.map((v: any) => <li key={v.id}>{fmtDate(v.start_at)} — {v.title} <span className="text-muted-foreground">{v.status}</span></li>)}</ul></Panel>}
      {d.invs.length > 0 && <Panel title={`Invoices (${d.invs.length})`}>{d.invs.map((r: any) => <Record key={r.id} r={r} num={r.invoice_number} title={r.subject} status={r.status} date={r.issued_date} url={r.jobber_url} />)}</Panel>}
      {d.pays.length > 0 && <Panel title={`Payments (${d.pays.length})`}><ul className="text-sm space-y-1">{d.pays.map((p: any) => <li key={p.id}>{fmtDate(p.paid_at)} — {money(p.amount)} <span className="text-muted-foreground">{p.payment_type}</span></li>)}</ul></Panel>}
      {d.notes.length > 0 && <Panel title={`Notes (${d.notes.length})`}><div className="space-y-3">{d.notes.map((n: any) => (
        <div key={n.id} className="border-l-2 border-border pl-3 text-sm"><div className="text-xs text-muted-foreground mb-1">{fmtDate(n.created_at_jobber)} · {n.parent_type}{n.created_by ? ` · ${n.created_by}` : ""}</div><p className="whitespace-pre-wrap text-foreground">{n.message}</p></div>
      ))}</div></Panel>}
    </>
  );
}
