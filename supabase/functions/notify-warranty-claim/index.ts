import { createClient } from "npm:@supabase/supabase-js@2";

/**
 * Sends a new warranty claim to the TEAM ONLY through its own Zapier workflow
 * ("Website Warranty Claim → Team Email"). That
 * workflow emails support@legacyindustrialcoatings.com, evan@licoat.com and
 * sam@licoat.com from "Legacy Warranty". Warranty claims are NOT leads: this
 * never uses the Request Information lead hook, never creates a JobTread job
 * and never emails the customer.
 * Each claim is sent once: the row is claimed by setting notified_at first.
 */
// Catch hook of the "Website Warranty Claim → Team Email" Zapier workflow (team-only email),
// kept out of the repo. Set it as the ZAPIER_WARRANTY_HOOK edge function secret.
// Never the Request Information lead hook.
const WARRANTY_HOOK = "";
const LINK_SECONDS = 30 * 24 * 60 * 60;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  try {
    const body = await req.json().catch(() => null);
    const id = body?.submission_id;
    if (typeof id !== "string" || !UUID.test(id)) return json({ error: "A valid submission_id is required" }, 400);

    const url = Deno.env.get("SUPABASE_URL"), key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), hook = Deno.env.get("ZAPIER_WARRANTY_HOOK") || WARRANTY_HOOK;
    if (!url || !key || !hook) return json({ error: "Notification configuration unavailable" }, 503);
    const admin = createClient(url, key);

    // Claim the row (only recent, never-notified claims) so each claim is emailed once.
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: row, error } = await admin
      .from("warranty_submissions")
      .update({ notified_at: new Date().toISOString() })
      .eq("id", id)
      .is("notified_at", null)
      .gte("created_at", since)
      .select("*")
      .maybeSingle();
    if (error) throw new Error("Unable to load claim");
    if (!row) return json({ skipped: true });

    const photos: { name: string; url: string }[] = [];
    for (const p of (row.photos ?? []) as { path: string; name: string }[]) {
      const { data: signed } = await admin.storage.from("warranty-uploads").createSignedUrl(p.path, LINK_SECONDS);
      if (signed?.signedUrl) photos.push({ name: p.name, url: signed.signedUrl });
    }

    const payload = {
      claim_id: row.id,
      name: row.name,
      phone: row.phone,
      email: row.email ?? "",
      address: row.address,
      previous_customer: row.previous_customer,
      install_date: row.install_date,
      description: row.description,
      submitted_at: row.created_at,
      page: row.landing_page,
      photos,
    };
    const response = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
    const ok = response.ok;
    await admin.from("warranty_submissions").update({ notify_status: response.status }).eq("id", id);
    if (!ok) {
      console.error("Zapier hook error", response.status);
      // Release the claim so a retry can send it.
      await admin.from("warranty_submissions").update({ notified_at: null }).eq("id", id);
      throw new Error("Send failed");
    }
    return json({ sent: true });
  } catch {
    console.error("Warranty claim notification failed");
    return json({ error: "Notification failed" }, 500);
  }
});
