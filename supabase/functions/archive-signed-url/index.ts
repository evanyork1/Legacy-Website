import { z } from "npm:zod@3";
import { admin, audit, cors, json, rateLimited, recordAttempt, requireArchiveUser } from "../_shared/archive.ts";

const Body = z.object({
  path: z.string().min(1).max(500).refine((p) => !p.includes("..")),
  record_id: z.string().max(200).optional(),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const caller = await requireArchiveUser(req);
  if (caller instanceof Response) return caller;

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid request" }, 400);

  // 120 links per user per minute
  if (await rateLimited("signed_url", caller.userId, 120, 60)) {
    return json({ error: "Too many requests" }, 429);
  }
  await recordAttempt("signed_url", caller.userId, true);

  const { data, error } = await admin().storage.from("jobber-archive").createSignedUrl(parsed.data.path, 300);
  if (error || !data) return json({ error: "File not found" }, 404);

  await audit(
    {
      user_id: caller.userId,
      user_email: caller.email,
      action: "view_file",
      record_type: "attachment",
      record_id: parsed.data.record_id ?? parsed.data.path,
    },
    req,
  );
  return json({ url: data.signedUrl, expires_in: 300 });
});
