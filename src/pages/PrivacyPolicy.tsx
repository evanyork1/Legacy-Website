import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow } from "@/components/site/sections";

const WRAP = "max-w-3xl mx-auto px-6 md:px-8 lg:px-12";

const POLICY = [
  { title: "Communication", body: "By providing your phone number, you consent to receive text messages about scheduling, job updates, and follow-ups." },
  { title: "Data Collection", body: "We collect names, contact information, addresses, and payment information to provide and manage our services." },
  { title: "Data Storage", body: "Your data is securely stored and only accessible to authorized staff. We do not sell your information." },
  { title: "Payments", body: "We store a card on file for post-installation balance. All transactions are encrypted." },
  { title: "Third Parties", body: "We do not share your personal information with outside parties except as necessary to fulfill our service." },
  { title: "Opt-Out", body: "To stop receiving texts, reply STOP at any time. For email, click unsubscribe or contact us." },
  { title: "Your Rights", body: "You may request access, correction, or deletion of your data by contacting us directly." },
];

const PrivacyPolicy = () => {
  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Legacy Industrial Coatings Privacy Policy. Learn how we collect, use, and safeguard your information."
        />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/privacy" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/privacy" />
      </Helmet>
      <SiteHeader />

      <header className="border-b border-border bg-secondary">
        <div className={`${WRAP} pt-16 md:pt-24 pb-12 md:pb-16`}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] text-balance">Privacy Policy</h1>
          <p className="mt-5 font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Effective August 2025</p>
        </div>
      </header>

      <main className="py-16 md:py-20">
        <article className={WRAP}>
          <p className="text-muted-foreground text-[16px] leading-[1.85]">
            <strong className="font-heading font-semibold text-foreground">Legacy Industrial Coatings - Privacy Policy</strong>{" "}
            This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>
          <ol className="divide-y divide-border border-y border-border mt-10">
            {POLICY.map((t, i) => (
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

export default PrivacyPolicy;
