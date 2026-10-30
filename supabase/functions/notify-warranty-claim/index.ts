import { createClient } from "npm:@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

/**
 * Emails a new warranty claim to the Legacy team. Called by the /warranties
 * form after the claim is saved. Each claim is emailed once: the row is
 * claimed by setting notified_at before sending, so replays are ignored.
 */
const TO = ["support@legacyindustrialcoatings.com", "evan@licoat.com", "sam@licoat.com"];
const FROM = "Legacy Industrial Coatings <support@legacyindustrialcoatings.com>";
const LINK_SECONDS = 30 * 24 * 60 * 60;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  try {
    const body = await req.json().catch(() => null);
    const id = body?.submission_id;
    if (typeof id !== "string" || !UUID.test(id)) return json({ error: "A valid submission_id is required" }, 400);

    const url = Deno.env.get("SUPABASE_URL"), key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), resendKey = Deno.env.get("RESEND_API_KEY");
    if (!url || !key || !resendKey) return json({ error: "Notification configuration unavailable" }, 503);
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

    const rows: [string, unknown][] = [
      ["Name", row.name],
      ["Phone", row.phone],
      ["Email", row.email || "Not provided"],
      ["Address", row.address],
      ["Previous customer", row.previous_customer],
      ["Floor installed", row.install_date],
      ["Submitted", new Date(row.created_at).toLocaleString("en-US", { timeZone: "America/Chicago" }) + " CT"],
    ];
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0f2440">
<h2 style="margin:0 0 12px">New warranty claim</h2>
<p style="margin:0 0 16px">Reach out within 5 business days.</p>
<table cellpadding="6" style="border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="color:#555;padding-right:16px;vertical-align:top">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`)
      .join("")}</table>
<h3 style="margin:20px 0 8px">Issue</h3>
<p style="white-space:pre-wrap;margin:0">${esc(row.description)}</p>
<h3 style="margin:20px 0 8px">Photos (${photos.length})</h3>
${photos.length ? `<ul>${photos.map((p) => `<li><a href="${esc(p.url)}">${esc(p.name)}</a></li>`).join("")}</ul><p style="color:#777;font-size:12px">Photo links work for 30 days. Claims are saved in the warranty_submissions table.</p>` : "<p>No photos attached.</p>"}
</div>`;

    const resend = new Resend(resendKey);
    const sent = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Warranty claim: ${row.name} – ${row.address}`.slice(0, 200),
      html,
      ...(row.email ? { reply_to: row.email } : {}),
    });
    const ok = !sent.error;
    await admin.from("warranty_submissions").update({ notify_status: ok ? 200 : 500 }).eq("id", id);
    if (!ok) {
      console.error("Resend error", JSON.stringify(sent.error));
      // Release the claim so a retry can send it.
      await admin.from("warranty_submissions").update({ notified_at: null }).eq("id", id);
      throw new Error("Email failed");
    }
    return json({ sent: true });
  } catch {
    console.error("Warranty claim notification failed");
    return json({ error: "Notification failed" }, 500);
  }
});
