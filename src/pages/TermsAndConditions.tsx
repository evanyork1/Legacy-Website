import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow } from "@/components/site/sections";

const WRAP = "max-w-3xl mx-auto px-6 md:px-8 lg:px-12";
const INLINE = "text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground break-words";

const TERMS: { title: string; body: React.ReactNode }[] = [
  { title: "Deposit Policy", body: "If a job is not completed within 30 days of deposit, 50% becomes non-refundable." },
  { title: "Card on File", body: "Customer agrees to save a card on file. Remaining balance will be charged upon job completion after final confirmation." },
  { title: "Cancellations", body: "Jobs cancelled less than 7 days before installation will incur a 20% fee. Financed job deposits are non-refundable." },
  { title: "Surface Slip Warning", body: "Epoxy/polyurea coatings can be slippery when wet. Slip-resistant additives available at additional cost. Legacy is not responsible for slips or falls." },
  { title: "Cracks & Substrate", body: "Cracks may return due to settling or stress. Crack repairs and substrate failures are not covered under warranty." },
  { title: "Expansion Joints", body: "Filling expansion joints is not recommended and may show post installation." },
  { title: "Dust Notice", body: "Industrial vacuums are used but some dust may escape. Customer must protect or remove valuable items before install." },
  {
    title: "Warranty",
    body: (
      <>
        See <a href="/warranty" className={INLINE}>warranty</a> on our website. By proceeding, you agree to those terms.
      </>
    ),
  },
  { title: "Floor Imperfections", body: "Our coating may not cover or fix existing imperfections. No guarantee of surface perfection." },
  { title: "Day of Install", body: "Customer must clear all belongings. $500 fee applies if crew must wait/return. Property access must be available." },
  { title: "Weather", body: "We may reschedule due to weather conditions without penalty." },
  { title: "Return to Use", body: "12 hrs: Light traffic. 24 hrs: Full use. Customer is liable for damage if used earlier." },
  {
    title: "SMS Terms of Service",
    body: (
      <>
        By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from Legacy Industrial
        Coatings. This includes SMS messages for conversations (external). Message frequency varies. Message and data rates
        may apply. See privacy policy at{" "}
        <a href="/privacy" className={INLINE}>https://legacyindustrialcoatings.com/privacy</a>. Message HELP for help. Reply
        STOP to any message to opt out.
      </>
    ),
  },
];

const TermsAndConditions = () => {
  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Terms & Conditions - Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Legacy Industrial Coatings Terms & Conditions. Read our terms for deposits, cancellations, installation, and warranties."
        />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/terms" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/terms" />
      </Helmet>
      <SiteHeader />

      <header className="border-b border-border bg-secondary">
        <div className={`${WRAP} pt-16 md:pt-24 pb-12 md:pb-16`}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] text-balance">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Effective August 2025</p>
        </div>
      </header>

      <main className="py-16 md:py-20">
        <article className={WRAP}>
          <p className="font-heading font-semibold text-[16px] text-foreground mb-2">Legacy Industrial Coatings - Terms &amp; Conditions</p>
          <ol className="divide-y divide-border border-y border-border mt-8">
            {TERMS.map((t, i) => (
              <li key={t.title} className="py-8 grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] gap-x-2">
                <span className="font-heading text-[13px] font-bold text-muted-foreground pt-1" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-[1.2] mb-3">
                    <span className="sr-only">{i + 1}. </span>
                    {t.title}
                  </h2>
                  <p className="text-muted-foreground text-[16px] leading-[1.85]">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TermsAndConditions;
