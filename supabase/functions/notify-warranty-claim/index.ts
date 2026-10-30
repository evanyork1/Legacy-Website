import { createClient } from "npm:@supabase/supabase-js@2";

/**
 * Sends a new warranty claim to the team through the same Zapier webhook the
 * Request Information form uses (ZAPIER_REQUEST_INFO_HOOK), labeled as a
 * WARRANTY CLAIM. Called by the /warranties form after the claim is saved.
 * Each claim is sent once: the row is claimed by setting notified_at first.
 * Intended recipients: support@legacyindustrialcoatings.com, evan@licoat.com, sam@licoat.com.
 */
const RECIPIENTS = "support@legacyindustrialcoatings.com, evan@licoat.com, sam@licoat.com";
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

    const url = Deno.env.get("SUPABASE_URL"), key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), hook = Deno.env.get("ZAPIER_REQUEST_INFO_HOOK");
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

    const lines = [
      "WARRANTY CLAIM (from the /warranties page). Reach out within 5 business days.",
      "",
      `Address: ${row.address}`,
      `Previous customer: ${row.previous_customer}`,
      `Floor installed: ${row.install_date}`,
      "",
      "Issue:",
      row.description,
      "",
      photos.length ? `Photos (links work for 30 days):\n${photos.map((p) => `${p.name}: ${p.url}`).join("\n")}` : "Photos: none attached",
      "",
      `Send to: ${RECIPIENTS}`,
    ];
    const payload = {
      id: row.id,
      type: "warranty_claim",
      source: "warranty-claim-form",
      subject: `WARRANTY CLAIM: ${row.name} – ${row.address}`.slice(0, 200),
      name: row.name,
      email: row.email ?? "",
      phone: row.phone,
      company: "WARRANTY CLAIM",
      square_footage: null,
      job_site_address: row.address,
      previous_customer: row.previous_customer,
      install_date: row.install_date,
      issue_description: row.description,
      project_description: lines.join("\n"),
      landing_page: row.landing_page,
      referrer: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      created_at: row.created_at,
      files: photos.map((p) => ({ name: p.name, url: p.url, size: 0 })),
      recipients: RECIPIENTS,
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
