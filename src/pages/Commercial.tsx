import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import {
  ClientStrip,
  CommercialTestimonials,
  ProcessPreview,
  ProofBar,
} from "@/components/site/sections";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { ALL_INDUSTRIES, ALL_SYSTEMS } from "@/data/site/nav";

const HERO_IMG = {
  src: "/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf-960.webp",
  srcSet:
    "/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf-480.webp 480w, /lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf-960.webp 960w",
};

const COMMERCIAL_FAQS = [
  {
    question: "What size commercial projects do you take on?",
    answer:
      "Our typical project runs 25,000–400,000 square feet, with a range from 10,000 SF to over 1,000,000 SF. We also run multi-year, phased and multi-site programs across DFW.",
  },
  {
    question: "Can you work nights and weekends?",
    answer:
      "Yes. Our commercial crews routinely mobilize at night and on weekends so your operation keeps running. Phasing plans are built around your production or tenant schedule.",
  },
  {
    question: "How fast can we get a bid?",
    answer:
      "We walk your site within 1–3 business days of a request, and deliver a full bid within 24 hours of receiving plans.",
  },
  {
    question: "Are you bonded and insured for large commercial work?",
    answer:
      "Yes. We carry $5,000,000 bonding capacity with GL, Commercial Auto, Umbrella and Workers' Comp. Additional insured, waiver of subrogation, and primary & non-contributory endorsements are available.",
  },
];

const Commercial = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Epoxy Flooring DFW | Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Large-scale commercial epoxy flooring in Dallas-Fort Worth. Warehouses, dealerships, industrial facilities. Heavy-duty floor systems built to last."
        />
        <meta
          name="keywords"
          content="commercial flooring Dallas, industrial epoxy DFW, concrete polishing Dallas, warehouse flooring, retail store flooring, restaurant flooring"
        />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commercial Epoxy Flooring DFW | Legacy Industrial Coatings" />
        <meta
          property="og:description"
          content="Large-scale commercial epoxy flooring in Dallas-Fort Worth. Warehouses, dealerships, industrial facilities. Heavy-duty floor systems built to last."
        />
        <meta property="og:image" content="https://legacyindustrialcoatings.com/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf.png" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0f2440" />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/commercial" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/commercial" />
        <link rel="preload" as="image" href={HERO_IMG.src} imageSrcSet={HERO_IMG.srcSet} imageSizes="100vw" fetchPriority="high" />
      </Helmet>

      <StructuredData
        includeLocalBusiness={false}
        includeOrganization={false}
        services={[
          { name: "Concrete Polishing", description: "Mechanically polished concrete for commercial showrooms, retail, restaurants, and industrial facilities across Dallas-Fort Worth.", url: "/concrete-polishing" },
          { name: "Industrial Epoxy", description: "Heavy-duty epoxy and urethane cement systems for warehouses, manufacturing plants, and industrial facilities in DFW.", url: "/industrial-epoxy" },
          { name: "Flake Floors", description: "Decorative flake broadcast flooring for commercial retail, showrooms, kennels, and food-service back-of-house.", url: "/flake-floors" },
        ]}
        faqs={COMMERCIAL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <div className="lcf min-h-screen bg-background">
        <SiteHeader />
        <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Commercial", url: "/commercial" }]} />

        {/* Hero */}
        <section className="relative bg-foreground text-background">
          <img
            src={HERO_IMG.src}
            srcSet={HERO_IMG.srcSet}
            sizes="100vw"
            alt="Large-scale commercial epoxy flooring project in Dallas-Fort Worth"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            width={960}
            height={640}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
          <div className="relative container mx-auto px-4 max-w-5xl py-24 md:py-32">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background/70 mb-4">
              Commercial Flooring Contractor
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
              Commercial Epoxy Flooring in Dallas–Fort Worth
            </h1>
            <p className="text-base md:text-lg text-background/70 max-w-3xl">
              Warehouses, dealerships, industrial facilities and retail — heavy-duty floor systems
              built to last, installed by crews that work around your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="#request-info"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-secondary transition-colors"
              >
                Request a Bid <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:214-305-6516"
                className="inline-flex items-center justify-center gap-2 border border-background/70 text-background px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-background/10 transition-colors"
              >
                Call 214-305-6516
              </a>
            </div>
          </div>
        </section>

        <ProofBar />
        <ClientStrip light />

        {/* Systems */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Systems
            </p>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-8">
              Every commercial system, one accountable crew
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_SYSTEMS.map((s) => (
                <a
                  key={s.path}
                  href={s.path}
                  className="border border-border px-5 py-4 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors flex items-center justify-between gap-2"
                >
                  {s.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 md:py-28 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Industries
            </p>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-8">
              Specified for the way your facility operates
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_INDUSTRIES.map((i) => (
                <a
                  key={i.path}
                  href={i.path}
                  className="border border-border bg-background px-5 py-4 text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors flex items-center justify-between gap-2"
                >
                  {i.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <ProcessPreview />
        <CommercialTestimonials />

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-8">
              Commercial flooring FAQ
            </h2>
            <div className="space-y-6">
              {COMMERCIAL_FAQS.map((f) => (
                <div key={f.question}>
                  <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
      </div>
    </>
  );
};

export default Commercial;