import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import { audit, clientIp, cors, json, rateLimited, recordAttempt, admin } from "../_shared/archive.ts";

const Body = z.object({
  action: z.enum(["login", "log_mfa"]),
  email: z.string().email().max(255).optional(),
  password: z.string().min(1).max(200).optional(),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid request" }, 400);
  const { action } = parsed.data;
  const ip = clientIp(req);

  if (action === "log_mfa") {
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    const { data } = await admin().auth.getUser(token);
    if (data?.user) {
      await audit({ user_id: data.user.id, user_email: data.user.email, action: "login_mfa_verified" }, req);
    }
    return json({ ok: true });
  }

  const email = (parsed.data.email || "").toLowerCase();
  const password = parsed.data.password || "";
  if (!email || !password) return json({ error: "Email and password required" }, 400);

  // 5 failed attempts per email / 20 per IP in 15 minutes
  if (
    (await rateLimited("login_email", email, 5, 900, true)) ||
    (await rateLimited("login_ip", ip, 20, 900, true))
  ) {
    await audit({ user_email: email, action: "login_rate_limited" }, req);
    return json({ error: "Too many attempts. Try again in 15 minutes." }, 429);
  }

  // Must be an active archive user before we even try
  const { data: au } = await admin()
    .from("archive_users")
    .select("user_id, active")
    .eq("email", email)
    .maybeSingle();

  const anon = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    auth: { persistSession: false },
  });
  const { data, error } = au?.active
    ? await anon.auth.signInWithPassword({ email, password })
    : { data: null, error: new Error("denied") };

  if (error || !data?.session) {
    await recordAttempt("login_email", email, false);
    await recordAttempt("login_ip", ip, false);
    await audit({ user_email: email, action: "login_failed" }, req);
    return json({ error: "Invalid email or password" }, 401);
  }

  await recordAttempt("login_email", email, true);
  await audit({ user_id: data.user.id, user_email: email, action: "login_password_ok" }, req);
  return json({
    access_token: data.session.access_token,
    refresh_token: data.session.refresh_token,
  });
});
