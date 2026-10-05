// Sends a saved DFW/PHX quote to Zapier from the server, once per lead.
// Loads the real row by id (never trusts the body) and skips blank leads.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const HOOKS: Record<string, string> = {
  DFW: "https://hooks.zapier.com/hooks/catch/18144828/u21rmpg/",
  PHX: "https://hooks.zapier.com/hooks/catch/18144828/22zccye/",
};

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => ({}));
    const id = String(body?.id || "");
    const region = String(body?.region || "").toUpperCase();
    if (!/^[0-9a-f-]{36}$/i.test(id) || !HOOKS[region]) return json({ error: "Invalid request" }, 400);

    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: row } = await admin.from("dfwquotes").select("*").eq("id", id).maybeSingle();
    if (!row || !String(row.name || "").trim() || !String(row.email || "").trim() || !String(row.phone || "").trim()) {
      console.warn("Skipping blank/missing quote", id);
      return json({ skipped: true });
    }

    // Claim the send first; unique (source, lead_id) guarantees one send per lead.
    const source = `${region.toLowerCase()}-quote`;
    const { error: claimErr } = await admin.from("webhook_send_log").insert({
      source, lead_id: id, page: req.headers.get("referer") || null,
    });
    if (claimErr) {
      console.warn("Already sent", id, claimErr.message);
      return json({ skipped: true, reason: "already_sent" });
    }

    const res = await fetch(HOOKS[region], {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: row.id, name: row.name, email: row.email, phone: row.phone, zip_code: row.zip_code,
        garage_type: row.garage_type, custom_sqft: row.custom_sqft, space_type: row.space_type,
        other_space_type: row.other_space_type, color_choice: row.color_choice,
        estimated_price: row.estimated_price, lead_source: row.lead_source, created_at: row.created_at,
      }),
    });
    await admin.from("webhook_send_log").update({ status: res.status }).eq("source", source).eq("lead_id", id);
    return json({ ok: res.ok, status: res.status });
  } catch (e) {
    console.error(e);
    return json({ error: String(e) }, 500);
  }
});
