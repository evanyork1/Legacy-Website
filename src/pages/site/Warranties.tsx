import { useRef, useState } from "react";
import { ArrowRight, Check, ImagePlus, X } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow, PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { supabase } from "@/integrations/supabase/client";
import { BUSINESS } from "@/data/site/nav";
import { JOB } from "@/data/site/jobPhotos";

/**
 * /warranties — footer-only page where customers submit a warranty claim.
 * Claims save to public.warranty_submissions (photos in the private
 * warranty-uploads bucket); the notify-warranty-claim edge function emails
 * support@, Evan and Sam. No confirmation email goes to the customer.
 */

const PATH = "/warranties";
const MAX_PHOTOS = 10;
const MAX_BYTES = 25 * 1024 * 1024;
const TYPES: Record<string, string> = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", heic: "image/heic", heif: "image/heif" };

const STEPS = [
  { title: "Tell us what's going on", text: "Fill out the form below with your details, when the floor was installed and what you're seeing. Photos help us the most." },
  { title: "We reach out within 5 business days", text: "Someone from our team reviews your claim and contacts you within 5 business days." },
  { title: "We look at it and plan next steps", text: "If needed, we schedule a visit to see the floor in person and walk you through what's covered under your warranty." },
];

const LABEL = "block font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2";
const INPUT =
  "w-full border border-border bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground";

const safeName = (name: string) => name.replace(/[^A-Za-z0-9_.-]+/g, "-").replace(/-+/g, "-").slice(-80) || "photo";
const extOf = (name: string) => name.split(".").pop()?.toLowerCase() ?? "";

type Form = { name: string; phone: string; email: string; address: string; previous: string; installed: string; description: string };
const EMPTY: Form = { name: "", phone: "", email: "", address: "", previous: "", installed: "", description: "" };

const Warranties = () => {
  const [form, setForm] = useState<Form>(EMPTY);
  const [photos, setPhotos] = useState<{ key: string; file: File }[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const idRef = useRef<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const addPhotos = (list: FileList | null) => {
    if (!list) return;
    const files = Array.from(list);
    const ok = files.filter((f) => TYPES[extOf(f.name)] && f.size <= MAX_BYTES);
    if (ok.length !== files.length) setError("Photos must be JPG, PNG, WEBP or HEIC, up to 25 MB each.");
    else setError("");
    setPhotos((prev) => [...prev, ...ok.map((file) => ({ key: crypto.randomUUID(), file }))].slice(0, MAX_PHOTOS));
    if (inputRef.current) inputRef.current.value = "";
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.previous || !form.installed.trim() || !form.description.trim()) {
      setError("Please fill in every required field.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const id = idRef.current ?? crypto.randomUUID();
      idRef.current = id;
      const uploaded: { path: string; name: string; size: number }[] = [];
      for (const { key, file } of photos) {
        const path = `${id}/${key.slice(0, 8)}-${safeName(file.name)}`;
        const { error: upErr } = await supabase.storage
          .from("warranty-uploads")
          .upload(path, file, { contentType: TYPES[extOf(file.name)], upsert: false });
        if (upErr && !/exists/i.test(upErr.message)) throw upErr;
        uploaded.push({ path, name: file.name.slice(0, 255), size: file.size });
      }
      // The table isn't in the generated client types yet.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error: insErr } = await (supabase as any).from("warranty_submissions").insert({
        id,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        address: form.address.trim(),
        previous_customer: form.previous,
        install_date: form.installed.trim(),
        description: form.description.trim(),
        photos: uploaded,
        landing_page: window.location.href.slice(0, 2000),
      });
      if (insErr && insErr.code !== "23505") throw insErr;
      // Email the team; the claim is already saved even if this fails.
      supabase.functions.invoke("notify-warranty-claim", { body: { submission_id: id } }).catch(() => undefined);
      setDone(true);
    } catch {
      setError(`Something went wrong sending your claim. Please try again, or call us at ${BUSINESS.phoneDisplay}.`);
    } finally {
      setBusy(false);
    }
  };

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Warranties", url: PATH },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Warranty Claims | Legacy Industrial Coatings"
        description="Submit a warranty claim for a floor installed by Legacy Industrial Coatings. Send your details and photos, and our team will reach out within 5 business days."
        path={PATH}
        ogImage={JOB.mfgEpoxy.src}
      />
      <StructuredData breadcrumbs={crumbs} />
      <SiteHeader />

      <PageHero
        eyebrow="Warranties"
        title="Submit a Warranty Claim"
        subhead="Something not right with a floor we installed? Tell us what's going on and send a few photos. Someone from our team will reach out within 5 business days."
        image={JOB.mfgEpoxy.src}
        imageAlt={JOB.mfgEpoxy.alt}
        crumbs={crumbs}
        action={
          <a
            href="#warranty-claim"
            className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-3 md:px-8 md:py-4 font-heading text-[11px] md:text-[12px] tracking-[0.2em] uppercase hover:bg-background/90 transition-colors"
          >
            Start a Claim <ArrowRight size={14} />
          </a>
        }
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-10">The Warranty Claim Process</h2>
          <ol className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-background p-6 md:p-8">
                <span className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading font-semibold text-[18px] text-foreground mt-3 mb-2">{s.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-[14px] text-muted-foreground mt-6">
            Want the details of your coverage first? Read our{" "}
            <a href="/warranty" className="text-foreground underline underline-offset-4">warranty terms</a>.
          </p>
        </div>
      </section>

      <section id="warranty-claim" className="py-16 md:py-24 bg-secondary border-t border-border scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Eyebrow>Claim Form</Eyebrow>
          <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-4">Tell Us About the Issue</h2>
          <p className="text-muted-foreground text-[16px] leading-[1.8] mb-10">
            Fields marked * are required. We'll reach out within 5 business days.
          </p>

          {done ? (
            <div className="border border-border bg-background p-8" role="status">
              <p className="flex items-center gap-3 font-heading text-xl font-semibold text-foreground mb-3">
                <Check size={20} /> Thanks, we've got your claim.
              </p>
              <p className="text-muted-foreground text-[16px] leading-[1.8]">
                Someone from our team will reach out within 5 business days. If it's urgent, call us at{" "}
                <a href={BUSINESS.phoneHref} className="text-foreground underline underline-offset-4">{BUSINESS.phoneDisplay}</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="border border-border bg-background p-6 md:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="w-name" className={LABEL}>Name *</label>
                  <input id="w-name" className={INPUT} value={form.name} onChange={set("name")} autoComplete="name" maxLength={100} required />
                </div>
                <div>
                  <label htmlFor="w-phone" className={LABEL}>Phone *</label>
                  <input id="w-phone" type="tel" className={INPUT} value={form.phone} onChange={set("phone")} autoComplete="tel" maxLength={40} required />
                </div>
              </div>
              <div>
                <label htmlFor="w-email" className={LABEL}>Email (optional)</label>
                <input id="w-email" type="email" className={INPUT} value={form.email} onChange={set("email")} autoComplete="email" maxLength={255} />
              </div>
              <div>
                <label htmlFor="w-address" className={LABEL}>Address of the floor *</label>
                <input id="w-address" className={INPUT} value={form.address} onChange={set("address")} autoComplete="street-address" placeholder="Street, city, state" maxLength={300} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="w-previous" className={LABEL}>Previous Legacy customer? *</label>
                  <select id="w-previous" className={INPUT} value={form.previous} onChange={set("previous")} required>
                    <option value="">Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="w-installed" className={LABEL}>When was the floor installed? *</label>
                  <input id="w-installed" className={INPUT} value={form.installed} onChange={set("installed")} placeholder="Month and year, or best guess" maxLength={60} required />
                </div>
              </div>
              <div>
                <label htmlFor="w-desc" className={LABEL}>Describe the issue *</label>
                <textarea
                  id="w-desc"
                  rows={6}
                  className={INPUT}
                  value={form.description}
                  onChange={set("description")}
                  placeholder="What are you seeing, where on the floor, and when did you first notice it?"
                  maxLength={5000}
                  required
                />
              </div>
              <div>
                <span className={LABEL}>Photos (up to 10)</span>
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  disabled={busy || photos.length >= MAX_PHOTOS}
                  className="w-full border border-dashed border-border px-4 py-6 flex flex-col items-center gap-2 text-[14px] text-foreground hover:border-foreground transition-colors disabled:opacity-50"
                >
                  <ImagePlus size={20} />
                  Add photos
                  <span className="text-[12px] text-muted-foreground">JPG, PNG, WEBP or HEIC · up to 25 MB each</span>
                </button>
                <input ref={inputRef} type="file" accept="image/*,.heic,.heif" multiple className="hidden" onChange={(e) => addPhotos(e.target.files)} />
                {photos.length > 0 && (
                  <ul className="mt-3 divide-y divide-border border border-border">
                    {photos.map((p) => (
                      <li key={p.key} className="flex items-center justify-between gap-3 px-4 py-2 text-[13px]">
                        <span className="truncate text-foreground">{p.file.name}</span>
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => setPhotos((prev) => prev.filter((x) => x.key !== p.key))}
                          className="text-muted-foreground hover:text-foreground flex-shrink-0"
                          aria-label={`Remove ${p.file.name}`}
                        >
                          <X size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {error && <p className="text-[14px] text-destructive" role="alert">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-heading text-[12px] tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors disabled:opacity-60"
              >
                {busy ? "Sending…" : "Submit Warranty Claim"} {!busy && <ArrowRight size={14} />}
              </button>
              <p className="text-[13px] text-muted-foreground">Someone from our team will reach out within 5 business days.</p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter requestInfo={false} />
    </div>
  );
};

export default Warranties;
