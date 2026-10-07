import { json } from "../_shared/archive.ts";
// TEMPORARY: asks the sync function to dry-run each export query (1 record) and returns only ok/error text.
Deno.serve(async () => {
  const r = await fetch(`${Deno.env.get("SUPABASE_URL")}/functions/v1/jobber-archive-sync`, { method: "POST", headers: { Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`, "Content-Type": "application/json" }, body: JSON.stringify({ action: "validate" }) });
  return json(await r.json().catch(() => ({ status: r.status })));
});
