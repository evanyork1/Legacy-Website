import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow, FaqBlock, PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreaCities";
import { isPriorityCity, PRIORITY_CITY_SLUGS } from "@/data/site/cityContent";

const PATH = "/service-areas";
const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";
const HERO_IMG = "/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf-960.webp";

const MONEY_PAGES = [
  { label: "Commercial & industrial epoxy flooring", url: "/commercial" },
  { label: "Polished concrete", url: "/concrete-polishing" },
  { label: "Urethane cement", url: "/urethane-cement-flooring" },
  { label: "Warehouse floor repair", url: "/warehouse-floor-repair" },
];

const AREA_FAQS = [
  {
    q: "Where is Legacy Industrial Coatings located?",
    a: "Our office is in Plano, Texas. We install commercial and industrial flooring across Dallas–Fort Worth, all of Texas and nationwide.",
  },
  {
    q: "Do you work outside Dallas–Fort Worth?",
    a: "Yes. We take projects across Texas, including Houston, Austin and San Antonio, and travel for commercial and industrial jobs nationwide, from a single building to multi-site programs.",
  },
  {
    q: "How fast can you walk my site?",
    a: "In Dallas–Fort Worth we usually walk the site within 1–3 business days. Send plans and we return a full bid within 24 hours of receiving them.",
  },
];

const ServiceAreas = () => {
  const hubs = PRIORITY_CITY_SLUGS.map((s) => SERVICE_AREA_CITIES.find((c) => c.slug === s)).filter(
    (c): c is NonNullable<typeof c> => !!c,
  );
  const others = SERVICE_AREA_CITIES.filter((c) => !isPriorityCity(c.slug));
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: PATH },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Service Areas: DFW, Texas & Nationwide Commercial Flooring"
        description="Commercial epoxy flooring, floor coatings and polished concrete across Dallas–Fort Worth, all of Texas and nationwide, from our office in Plano, TX."
        path={PATH}
        ogImage={HERO_IMG}
      />
      <StructuredData breadcrumbs={crumbs} faqs={AREA_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <SiteHeader />

      <PageHero
        eyebrow="DFW Based, Nationwide"
        title="Service Areas"
        subhead="Our Plano office runs commercial flooring projects across Dallas–Fort Worth and all of Texas, and mobilizes crews to facilities nationwide, from a single building to phased, multi-site programs."
        image={HERO_IMG}
        imageAlt="Commercial epoxy floor installation in a DFW warehouse"
        crumbs={crumbs}
        compact
      />

      <section id="nationwide" className="py-20 md:py-28 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Nationwide</Eyebrow>
          <h2 className={H2}>Do You Work Outside Dallas–Fort Worth?</h2>
          <p className={P}>
            Yes. Dallas–Fort Worth is our home base, not our service limit. We take commercial and industrial flooring
            projects across Texas, including Houston, Austin and San Antonio, and nationwide.
          </p>
          <p className={P}>
            Dedicated project managers and crews handle testing, preparation, installation and closeout at every
            location. Multi-site owners get one point of contact and the same system, specified the same way, at every
            building.
          </p>
          {/* TODO Evan: list the states you've completed projects in. */}
          <div className="flex flex-wrap gap-2">
            {MONEY_PAGES.map((m) => (
              <a
                key={m.url}
                href={m.url}
                className="inline-flex items-center gap-2 border border-border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-foreground transition-colors"
              >
                {m.label} <ArrowRight size={12} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Major Markets</Eyebrow>
          <h2 className={H2}>Commercial Flooring in DFW's Largest Markets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((c) => (
              <a
                key={c.slug}
                href={`/epoxy-flooring/${c.slug}`}
                className="group block border border-border bg-background p-6 hover:border-foreground transition-colors"
              >
                <span className="flex items-center justify-between gap-3 font-heading font-semibold text-[15px] text-foreground">
                  {c.name}, TX
                  <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                </span>
                <span className="block mt-2 text-[13px] text-muted-foreground">{c.county}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>All Cities</Eyebrow>
          <h2 className={H2}>More DFW Cities We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border border border-border">
            {others.map((c) => (
              <a
                key={c.slug}
                href={`/epoxy-flooring/${c.slug}`}
                className="bg-background px-4 py-4 font-heading text-[13px] text-foreground hover:bg-secondary transition-colors"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock heading="Service Area Questions" faqs={AREA_FAQS} />

      <SiteFooter
        cta={{
          title: "Get a bid on your project, wherever it is",
          text: "Send drawings or a scope. Site walk within 1–3 business days in DFW; full bid within 24 hours of receiving plans.",
        }}
      />
    </div>
  );
};

export default ServiceAreas;
