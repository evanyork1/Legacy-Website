import { Navigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BTN, Eyebrow, PageHero } from "@/components/site/sections";
import Seo from "@/components/seo/Seo";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { getCareerMarket } from "@/data/careersMarkets";
import { JOB } from "@/data/site/jobPhotos";

const SITE_URL = "https://legacyindustrialcoatings.com";
const APPLY_EMAIL = "careers@legacyindustrialcoatings.com";

const WRAP = "max-w-4xl mx-auto px-6 md:px-8 lg:px-12";
const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85]";
const H3 = "font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4";

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((t) => (
      <li key={t} className="flex gap-3 text-muted-foreground font-body text-[16px] leading-[1.75]">
        <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 bg-foreground shrink-0" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const CareerMarketPage = () => {
  const { city } = useParams();
  const market = getCareerMarket(city);

  if (!market) return <Navigate to="/careers" replace />;

  const path = `/careers/${market.slug}`;
  const title = `Commercial Flooring Sales Rep — ${market.city}, ${market.state} | Legacy Industrial Coatings`;
  const description = `${market.headline}. Commission-only commercial flooring sales seat in ${market.city}, ${market.state}. $2,000 to $50,000 per deal, no cap, no split territories.`;

  const datePosted = "2026-01-01";
  const validThrough = "2027-01-01";

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Commercial Flooring Sales Rep",
    description: `${market.headline}. ${market.intro} Commission only, $2,000 to $50,000 per deal, no cap and no split territories. This is an experience job: commercial finish-out sales background and prior commission-only experience required.`,
    datePosted,
    validThrough,
    employmentType: "FULL_TIME",
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "Legacy Industrial Coatings",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/lovable-uploads/31a07739-2d1a-4e04-afcf-284435670519.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: market.city,
        addressRegion: market.stateAbbr,
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: 80000,
        maxValue: 250000,
        unitText: "YEAR",
      },
    },
    url: `${SITE_URL}${path}`,
  };

  const mailto = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
    `Sales Rep — ${market.city}`,
  )}`;

  const sellingWith = [
    {
      h: "Commission paid in thirds",
      p: "A third at signed contract, a third at first draw, the balance at final collection. Every competitor you've worked for made you wait until the job collected. We don't.",
    },
    {
      h: "Recoverable draw available",
      p: "If you need to bridge the first ninety days, we'll advance against commission. It's a bridge, not a base.",
    },
    {
      h: "Crews that finish clean",
      p: "Subcontractor model, no capacity ceiling, over 200 five-star reviews. Your referrals compound instead of dying on a bad install.",
    },
    {
      h: "Pricing in hours",
      p: "Direct access to the owner. You're not waiting a week on a number while the GC moves on.",
    },
    {
      h: "No cap, no split territories",
      p: "You close it, you get paid on it.",
    },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={title} description={description} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jobPosting)}</script>
      </Helmet>
      <PageBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
          { name: `${market.city}, ${market.state}`, url: path },
        ]}
      />
      <SiteHeader />

      <main>
        {/* 1. Header */}
        <PageHero
          eyebrow={`${market.city}, ${market.state} — ${market.seats} ${market.seats === 1 ? "seat" : "seats"}`}
          title="Commercial Flooring Sales Rep."
          subhead={market.headline}
          image={JOB.dcSiteWalk.src}
          imageAlt={JOB.dcSiteWalk.alt}
          compact
          action={
            <>
              <a
                href="#apply"
                className={`${BTN} bg-background text-foreground border border-background hover:bg-transparent hover:text-background`}
              >
                Apply
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/careers"
                className={`${BTN} border border-background/30 text-background hover:bg-background hover:text-foreground`}
              >
                All open markets
              </Link>
            </>
          }
        />

        {/* 2. Compensation */}
        <section className="py-16 md:py-24">
          <div className={WRAP}>
            <Eyebrow>Compensation</Eyebrow>
            <h2 className={`${H2} mb-6`}>Compensation</h2>
            <p className={P}>
              This is a commission-only role. Contracts typically range from
              $20,000 to $500,000, with commission of $2,000 to $50,000 per
              deal. There is no cap and no split territories.
            </p>
          </div>
        </section>

        {/* 3. Why city */}
        <section className="py-16 md:py-24 bg-secondary border-y border-border">
          <div className={WRAP}>
            <Eyebrow>The market</Eyebrow>
            <h2 className={`${H2} mb-6`}>Why {market.city}</h2>
            <p className={P}>{market.intro}</p>
            <div className="grid md:grid-cols-2 gap-px bg-border border border-border mt-10">
              <div className="bg-background p-6 md:p-8">
                <h3 className={H3}>Where the work is</h3>
                <Bullets items={market.corridors} />
              </div>
              <div className="bg-background p-6 md:p-8">
                <h3 className={H3}>Who buys</h3>
                <Bullets items={market.industries} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Who this is for */}
        <section className="py-16 md:py-24">
          <div className={WRAP}>
            <Eyebrow>Fit</Eyebrow>
            <h2 className={`${H2} mb-6`}>Who this is for</h2>
            <p className="font-heading text-[18px] md:text-xl font-semibold text-foreground">
              This is an experience job. Full stop.
            </p>
            <div className="mt-6">
              <Bullets
                items={[
                  "You've sold commercial finish-out. Flooring is ideal: resinous systems, polished concrete, VCT, carpet tile, LVT. Close-adjacent trades count too, including coatings, roofing, glazing, drywall and acoustical, and mechanical.",
                  "You've worked commission-only before. Not open to it. Done it.",
                  "You can read plans and specs, walk a facility, read the substrate, and build the bid yourself.",
                  `You already know facility managers, plant managers, GCs, or industrial brokers in your market.`,
                ]}
              />
            </div>
          </div>
        </section>

        {/* 5. Who this is not for */}
        <section className="py-16 md:py-24 bg-secondary border-y border-border">
          <div className={WRAP}>
            <Eyebrow>Not a fit</Eyebrow>
            <h2 className={`${H2} mb-6`}>Who this is not for</h2>
            <Bullets
              items={[
                "Anyone who needs a base or a draw to bridge the ramp",
                "Residential sales reps stepping up into commercial",
                "Order takers waiting on a lead sheet",
                "First sales job",
              ]}
            />
            <p className="mt-8 font-heading text-[17px] font-semibold text-foreground leading-snug">
              We're not going to be the ones who teach you this trade. Come in
              already knowing it.
            </p>
          </div>
        </section>

        {/* 6. What you're selling with */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Support</Eyebrow>
            <h2 className={`${H2} mb-10`}>What you're selling with</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {sellingWith.map((item) => (
                <div key={item.h} className="bg-background p-6 md:p-8">
                  <h3 className="font-heading font-semibold text-[17px] text-foreground">{item.h}</h3>
                  <p className="mt-2 text-[15px] text-muted-foreground leading-[1.75]">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Apply */}
        <section id="apply" className="py-16 md:py-24 bg-foreground text-background scroll-mt-24">
          <div className={WRAP}>
            <Eyebrow light>{market.city}, {market.stateAbbr}</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.1] text-background">Apply</h2>
            <p className="mt-6 font-body text-[16px] leading-[1.85] text-background/75">
              Send your resume and answer three questions:
            </p>
            <ol className="mt-4 space-y-3 font-body text-[16px] leading-[1.75] text-background/75 list-decimal pl-5 marker:font-heading marker:text-background">
              <li>
                The last three commercial jobs you closed. What they were and
                what they were worth.
              </li>
              <li>
                Where you've worked commission-only, and what you earned doing
                it.
              </li>
              <li>
                Who you already know in {market.city} that buys flooring.
              </li>
            </ol>
            <p className="mt-4 font-body text-[16px] leading-[1.85] text-background/75">
              Short answers are fine. Specific answers get a call.
            </p>
            <a
              href={mailto}
              className={`${BTN} mt-10 max-w-full bg-background text-foreground border border-background hover:bg-transparent hover:text-background normal-case tracking-[0.05em] break-all`}
            >
              <Mail size={14} className="shrink-0" />
              <span>Email {APPLY_EMAIL}</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter requestInfo={false} />
    </div>
  );
};

export default CareerMarketPage;
