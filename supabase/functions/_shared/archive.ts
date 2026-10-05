import { createClient, SupabaseClient } from "npm:@supabase/supabase-js@2";

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

export function admin(): SupabaseClient {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
}

export function clientIp(req: Request) {
  return (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
}

function decodePayload(token: string): Record<string, unknown> | null {
  try {
    const p = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(p + "=".repeat((4 - (p.length % 4)) % 4)));
  } catch {
    return null;
  }
}

export interface ArchiveCaller {
  userId: string;
  email: string;
  role: "admin" | "viewer";
}

/** Verifies JWT (signature via auth server), aal2, and active archive membership. */
export async function requireArchiveUser(
  req: Request,
  needAdmin = false,
): Promise<ArchiveCaller | Response> {
  const auth = req.headers.get("Authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token) return json({ error: "Not signed in" }, 401);

  const sb = admin();
  const { data: userData, error } = await sb.auth.getUser(token);
  if (error || !userData?.user) return json({ error: "Invalid session" }, 401);

  const payload = decodePayload(token);
  if (payload?.aal !== "aal2") return json({ error: "MFA required" }, 403);

  const { data: row } = await sb
    .from("archive_users")
    .select("role, active, email")
    .eq("user_id", userData.user.id)
    .maybeSingle();
  if (!row || !row.active) return json({ error: "Not authorized" }, 403);
  if (needAdmin && row.role !== "admin") return json({ error: "Admin only" }, 403);

  return { userId: userData.user.id, email: row.email, role: row.role };
}

/** Returns true when the caller is over the limit. Records the attempt. */
export async function rateLimited(
  bucket: string,
  key: string,
  max: number,
  windowSeconds: number,
  countOnlyFailures = false,
): Promise<boolean> {
  const sb = admin();
  const since = new Date(Date.now() - windowSeconds * 1000).toISOString();
  let q = sb
    .from("archive_rate_limits")
    .select("id", { count: "exact", head: true })
    .eq("bucket", bucket)
    .eq("key", key)
    .gte("created_at", since);
  if (countOnlyFailures) q = q.eq("success", false);
  const { count } = await q;
  return (count ?? 0) >= max;
}

export async function recordAttempt(bucket: string, key: string, success: boolean) {
  await admin().from("archive_rate_limits").insert({ bucket, key, success });
}

export async function audit(
  entry: {
    user_id?: string | null;
    user_email?: string | null;
    action: string;
    record_type?: string | null;
    record_id?: string | null;
    metadata?: Record<string, unknown> | null;
  },
  req?: Request,
) {
  await admin().from("audit_log").insert({ ...entry, ip: req ? clientIp(req) : null });
}
