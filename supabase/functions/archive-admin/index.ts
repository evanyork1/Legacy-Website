import { z } from "npm:zod@3";
import { admin, audit, cors, json, requireArchiveUser } from "../_shared/archive.ts";

const JOBBER_API = "https://api.getjobber.com/api/graphql";
const JOBBER_TOKEN_URL = "https://api.getjobber.com/api/oauth/token";
const REDIRECT_URI = "https://byvazfrvoanojfayvsaz.supabase.co/functions/v1/jobber-oauth-callback";

const Body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("whoami") }),
  z.object({ action: z.literal("log"), event: z.enum(["search", "view_record", "logout", "idle_logout"]), record_type: z.string().max(50).optional(), record_id: z.string().max(200).optional(), metadata: z.record(z.unknown()).optional() }),
  z.object({ action: z.literal("list_users") }),
  z.object({ action: z.literal("invite_user"), email: z.string().email().max(255), role: z.enum(["admin", "viewer"]) }),
  z.object({ action: z.literal("update_user"), user_id: z.string().uuid(), role: z.enum(["admin", "viewer"]).optional(), active: z.boolean().optional() }),
  z.object({ action: z.literal("jobber_status") }),
  z.object({ action: z.literal("jobber_connect_url") }),
  z.object({ action: z.literal("jobber_scope_check") }),
]);

async function getJobberToken(): Promise<{ token: string; row: any } | null> {
  const sb = admin();
  const { data } = await sb.from("jobber_tokens").select("*").order("created_at", { ascending: false }).limit(1);
  const row = data?.[0];
  if (!row) return null;
  if (new Date(row.expires_at).getTime() > Date.now() + 5 * 60 * 1000) return { token: row.access_token, row };

  // Refresh — Jobber rotates refresh tokens, always persist the new one.
  const res = await fetch(JOBBER_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: Deno.env.get("JOBBER_CLIENT_ID")!,
      client_secret: Deno.env.get("JOBBER_CLIENT_SECRET")!,
      grant_type: "refresh_token",
      refresh_token: row.refresh_token,
    }),
  });
  if (!res.ok) return null;
  const t = await res.json();
  const expires_at = new Date(Date.now() + (Number(t.expires_in) || 3600) * 1000).toISOString();
  await sb.from("jobber_tokens").update({
    access_token: t.access_token,
    refresh_token: t.refresh_token || row.refresh_token,
    expires_at,
  }).eq("id", row.id);
  return { token: t.access_token, row: { ...row, expires_at, updated_at: new Date().toISOString() } };
}

async function gql(token: string, query: string) {
  const r = await fetch(JOBBER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, "X-JOBBER-GRAPHQL-VERSION": "2025-01-20" },
    body: JSON.stringify({ query }),
  });
  return { status: r.status, body: await r.json().catch(() => ({})) };
}

const SCOPE_TESTS: Record<string, string> = {
  clients: "{ clients(first:1){ totalCount } }",
  properties: "{ properties(first:1){ totalCount } }",
  requests: "{ requests(first:1){ totalCount } }",
  quotes: "{ quotes(first:1){ totalCount } }",
  jobs: "{ jobs(first:1){ totalCount } }",
  visits: "{ visits(first:1){ totalCount } }",
  invoices: "{ invoices(first:1){ totalCount } }",
  notes: "{ clients(first:1){ nodes { id notes(first:1){ totalCount } } } }",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid request" }, 400);
  const body = parsed.data;

  const needAdmin = !["whoami", "log"].includes(body.action);
  const caller = await requireArchiveUser(req, needAdmin);
  if (caller instanceof Response) return caller;
  const sb = admin();

  switch (body.action) {
    case "whoami":
      return json(caller);

    case "log":
      await audit({ user_id: caller.userId, user_email: caller.email, action: body.event, record_type: body.record_type, record_id: body.record_id, metadata: body.metadata ?? null }, req);
      return json({ ok: true });

    case "list_users": {
      const { data } = await sb.from("archive_users").select("*").order("created_at");
      return json({ users: data ?? [] });
    }

    case "invite_user": {
      const email = body.email.toLowerCase();
      const redirectTo = `${req.headers.get("origin") || "https://legacyindustrialcoatings.com"}/jobberdetails/set-password`;
      let userId: string | undefined;
      const { data: inv, error } = await sb.auth.admin.inviteUserByEmail(email, { redirectTo });
      if (error) {
        // Already exists in auth — find them
        const { data: list } = await sb.auth.admin.listUsers({ page: 1, perPage: 1000 });
        userId = list?.users.find((u) => u.email?.toLowerCase() === email)?.id;
        if (!userId) return json({ error: error.message }, 400);
      } else {
        userId = inv.user?.id;
      }
      await sb.from("archive_users").upsert({ user_id: userId, email, role: body.role, active: true, invited_by: caller.userId });
      await audit({ user_id: caller.userId, user_email: caller.email, action: "invite_user", record_type: "archive_user", record_id: userId, metadata: { email, role: body.role } }, req);
      return json({ ok: true, existing: !!error });
    }

    case "update_user": {
      if (body.user_id === caller.userId && (body.active === false || body.role === "viewer")) {
        return json({ error: "You cannot demote or deactivate yourself" }, 400);
      }
      const patch: Record<string, unknown> = {};
      if (body.role) patch.role = body.role;
      if (body.active !== undefined) patch.active = body.active;
      await sb.from("archive_users").update(patch).eq("user_id", body.user_id);
      if (body.active === false) await sb.auth.admin.signOut(body.user_id).catch(() => {});
      await audit({ user_id: caller.userId, user_email: caller.email, action: "update_user", record_type: "archive_user", record_id: body.user_id, metadata: patch }, req);
      return json({ ok: true });
    }

    case "jobber_status": {
      const { data } = await sb.from("jobber_tokens").select("expires_at, created_at, updated_at").order("created_at", { ascending: false }).limit(1);
      const row = data?.[0];
      if (!row) return json({ state: "disconnected" });
      const t = await getJobberToken();
      if (!t) return json({ state: "expired", last_refreshed: row.updated_at, connected_at: row.created_at });
      return json({ state: "connected", expires_at: t.row.expires_at, last_refreshed: t.row.updated_at, connected_at: t.row.created_at });
    }

    case "jobber_connect_url": {
      const url = new URL("https://api.getjobber.com/api/oauth/authorize");
      url.searchParams.set("response_type", "code");
      url.searchParams.set("client_id", Deno.env.get("JOBBER_CLIENT_ID")!);
      url.searchParams.set("redirect_uri", REDIRECT_URI);
      url.searchParams.set("state", "archive");
      await audit({ user_id: caller.userId, user_email: caller.email, action: "jobber_connect_started" }, req);
      return json({ url: url.toString() });
    }

    case "jobber_scope_check": {
      const t = await getJobberToken();
      if (!t) return json({ error: "Jobber is not connected" }, 400);
      const results: Record<string, { ok: boolean; detail?: string; count?: number }> = {};
      for (const [name, q] of Object.entries(SCOPE_TESTS)) {
        const r = await gql(t.token, q);
        const err = r.body?.errors?.[0]?.message;
        if (r.status !== 200 || err) {
          results[name] = { ok: false, detail: err || `HTTP ${r.status}` };
        } else {
          const root = Object.values(r.body.data ?? {})[0] as any;
          results[name] = { ok: true, count: root?.totalCount };
        }
      }
      return json({ results });
    }
  }
});
