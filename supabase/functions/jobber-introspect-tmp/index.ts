import { admin, json } from "../_shared/archive.ts";

// TEMPORARY: snapshots Jobber's GraphQL type layout into an admin-only table. Returns nothing sensitive.
const TYPES = ["Query","Client","Property","Request","Quote","Job","Visit","Invoice","Payment","PaymentRecord","ClientNote","JobNote","QuoteNote","RequestNote","InvoiceNote","NoteFile","ClientNoteFile","JobNoteFile","QuoteNoteFile","RequestNoteFile","QuoteLineItem","JobLineItem","InvoiceLineItem","Amounts","QuoteAmounts","InvoiceAmounts","Tag","Email","PhoneNumber","Address","PropertyAddress","ClientEmail","ClientPhoneNumber","User","InvoiceTotals","CustomFieldUnion","RequestDetails","PaymentRecordInterface","ClientNoteUnion","JobNoteUnion","NoteUnion","Note","NoteInterface","ProperyAddress","Assessment"];

Deno.serve(async () => {
  const sb = admin();
  const { data } = await sb.from("jobber_tokens").select("access_token").order("created_at", { ascending: false }).limit(1);
  const token = data?.[0]?.access_token;
  if (!token) return json({ ok: false });
  const out: Record<string, unknown> = {};
  for (const t of TYPES) {
    const r = await fetch("https://api.getjobber.com/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, "X-JOBBER-GRAPHQL-VERSION": "2025-01-20" },
      body: JSON.stringify({ query: `{ __type(name:"${t}"){ kind possibleTypes{name} interfaces{name} fields{ name args{name} type{ kind name ofType{ kind name ofType{ kind name ofType{name} } } } } } }` }),
    });
    const b = await r.json().catch(() => ({}));
    const ty = b?.data?.__type;
    if (!ty) continue;
    const unwrap = (x: any): string => x ? (x.name ?? (x.kind === "LIST" ? `[${unwrap(x.ofType)}]` : x.kind === "NON_NULL" ? `${unwrap(x.ofType)}!` : unwrap(x.ofType))) : "?";
    out[t] = { kind: ty.kind, possible: ty.possibleTypes?.map((p: any) => p.name), ifaces: ty.interfaces?.map((p: any) => p.name),
      fields: ty.fields?.map((f: any) => `${f.name}${f.args?.length ? "(" + f.args.map((a: any) => a.name).join(",") + ")" : ""}: ${unwrap(f.type)}`) };
  }
  await sb.from("jobber_schema_snapshot").insert({ data: out });
  return json({ ok: true, types: Object.keys(out).length });
});
