import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow, FaqBlock, PageHero, ProofBar } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { getCityBySlug, SERVICE_AREA_CITIES, type ServiceAreaCity } from "@/data/serviceAreaCities";
import { isPriorityCity, PRIORITY_CITY_CONTENT } from "@/data/site/cityContent";
import { caseStudies } from "@/data/caseStudies";
import heroImg from "@/assets/case-studies/pharmaceutical-polished-concrete/after-1-960.webp";

/**
 * /epoxy-flooring/:city — commercial city pages. The eight largest markets
 * (PRIORITY_CITY_SLUGS in cityContent.ts) get unique content; every page
 * links the three money pages with their target anchor text.
 */

const SITE_URL = "https://legacyindustrialcoatings.com";
// Real job photo: 21,000 SF polished concrete, pharmaceutical plant, Dallas.
const HERO_IMG = heroImg;

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";
const A = "text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground";
const PILL =
  "inline-flex items-center gap-2 border border-border bg-background px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-foreground transition-colors";

const LinkCards = ({ items }: { items: { label: string; url: string; text: string }[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((l) => (
      <a key={l.url} href={l.url} className="group block border border-border bg-background p-6 hover:border-foreground transition-colors">
        <span className="flex items-center justify-between gap-3 font-heading font-semibold text-[15px] text-foreground">
          {l.label}
          <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
        </span>
        <span className="block mt-2 text-[14px] text-muted-foreground leading-[1.7]">{l.text}</span>
      </a>
    ))}
  </div>
);

const WHY = [
  "Testing first: moisture and surface-profile testing before a system is chosen",
  "Night, weekend and phased work in occupied buildings",
  "Diamond grinding, shot blasting, crack and joint repair",
  "General liability and workers' comp on every job; OSHA-compliant crews",
  "Spec-grade, manufacturer-warranted Legacy systems, installed to the basis of design",
  "Site walk within 1–3 business days; full bid within 24 hours of receiving plans",
];

/** Nearest of the eight hub cities, for non-priority pages. */
const nearestHub = (city: ServiceAreaCity): ServiceAreaCity | undefined => {
  const slug = city.nearbyCities.find((s) => isPriorityCity(s)) ?? "plano";
  return SERVICE_AREA_CITIES.find((c) => c.slug === slug);
};

const EpoxyFlooringCity = () => {
  const { city: slug } = useParams<{ city: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) {
    return <Navigate to="/service-areas" replace />;
  }

  const priority = PRIORITY_CITY_CONTENT[city.slug];
  const path = `/epoxy-flooring/${city.slug}`;
  const h1 = `Commercial Epoxy Flooring & Polished Concrete in ${city.name}, TX`;
  const title = `Epoxy Flooring ${city.name}, TX | Commercial & Industrial Floors | Legacy Industrial Coatings`;
  const description = `Epoxy flooring, industrial floor coatings and polished concrete in ${city.name}, TX for warehouses, plants, restaurants, retail and healthcare. Site walk in 1–3 days, bids in 24 hours.`;

  const neighbors = city.nearbyCities
    .map((s) => SERVICE_AREA_CITIES.find((c) => c.slug === s))
    .filter((c): c is ServiceAreaCity => !!c);
  const hub = priority ? undefined : nearestHub(city);
  const localProjects = caseStudies.filter(
    (cs) => cs.category === "commercial" && cs.location.toLowerCase().startsWith(`${city.name.toLowerCase()},`),
  );
  const faqs = [...(priority?.faqs ?? []), ...city.faqs];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: city.name, url: path },
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}${path}#business`,
    name: "Legacy Industrial Coatings",
    image: `${SITE_URL}/lovable-uploads/e90dc902-382c-49a1-92b3-46b9b06b6a4b.png`,
    url: `${SITE_URL}${path}`,
    telephone: "+1-214-305-6516",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6010 W Spring Creek Pkwy",
      addressLocality: "Plano",
      addressRegion: "TX",
      postalCode: "75024",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${city.name}, TX` },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial epoxy flooring", url: `${SITE_URL}/commercial` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial epoxy flooring", url: `${SITE_URL}/industrial-epoxy` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete polishing", url: `${SITE_URL}/concrete-polishing` } },
    ],
  };

  const services = [
    {
      label: "Commercial epoxy flooring",
      url: "/commercial",
      text: `Epoxy, flake, quartz and urethane cement floors for ${city.name} retail, restaurants, offices, healthcare and schools.`,
    },
    {
      label: "Industrial epoxy flooring",
      url: "/industrial-epoxy",
      text: `High-build epoxy and industrial floor coatings for ${city.name} warehouses, manufacturing and production floors.`,
    },
    {
      label: "Polished concrete",
      url: "/concrete-polishing",
      text: `Commercial concrete polishing for ${city.name} showrooms, lobbies, offices and distribution floors.`,
    },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={title} description={description} path={path} ogImage={HERO_IMG} />
      <StructuredData
        includeLocalBusiness={false}
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={crumbs}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <SiteHeader />

      <PageHero
        eyebrow={`${city.name}, TX · ${city.county}`}
        title={h1}
        subhead={`Commercial epoxy flooring, industrial floor coatings and polished concrete for ${city.name} warehouses, manufacturing plants, retail, restaurants and healthcare facilities, installed by crews from our Plano office.`}
        image={HERO_IMG}
        imageAlt="Polished concrete floor installed by Legacy Industrial Coatings in a Dallas pharmaceutical manufacturing plant"
        crumbs={crumbs}
        compact
      />

      <ProofBar />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>{city.name}</Eyebrow>
          <h2 className={H2}>Commercial Flooring Contractor in {city.name}</h2>
          <p className={P}>{priority?.intro ?? city.localHook}</p>
          <p className={P}>{city.commercialAngle}</p>
          {hub && (
            <p className={P}>
              {city.name} projects are run by the same crews that handle{" "}
              <a href={`/epoxy-flooring/${hub.slug}`} className={A}>
                commercial epoxy flooring in {hub.name}
              </a>
              , mobilizing from our Plano office.
            </p>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Services</Eyebrow>
          <h2 className={H2}>What We Install in {city.name}</h2>
          <p className={`${P} max-w-3xl`}>
            Every floor starts with testing the slab. From there we recommend the system that fits how the space is used,
            built on spec-grade, manufacturer-warranted materials.
          </p>
          <LinkCards items={services} />
        </div>
      </section>

      {priority && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Facilities</Eyebrow>
            <h2 className={H2}>{city.name} Facilities We Work In</h2>
            <LinkCards items={priority.facilities} />
          </div>
        </section>
      )}

      {priority?.polished && (
        <section className="py-20 md:py-28 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Polished Concrete</Eyebrow>
            <h2 className={H2}>Polished Concrete in {city.name}</h2>
            <p className={P}>{priority.polished}</p>
            <a href="/concrete-polishing" className={PILL}>
              Commercial concrete polishing <ArrowRight size={12} />
            </a>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Why Legacy</Eyebrow>
          <h2 className={H2}>Why {city.name} GCs &amp; Facility Managers Call Us</h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground font-body text-[16px] leading-[1.75]">
            {WHY.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>

      {priority && (
        <section className="py-20 md:py-24 bg-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Projects</Eyebrow>
            <h2 className={H2}>Commercial Projects in {city.name}</h2>
            {localProjects.length > 0 ? (
              <ul className="space-y-3 mb-8 font-body text-[16px]">
                {localProjects.map((cs) => (
                  <li key={cs.slug}>
                    <a href={`/commercial-case-studies/${cs.slug}`} className={A}>
                      {cs.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={P}>See the problem, the system we chose and the result on recent commercial floors across DFW.</p>
            )}
            {/* TODO Evan: approve named projects/clients in this city to feature here. */}
            <a href="/commercial-case-studies" className={PILL}>
              All commercial case studies <ArrowRight size={12} />
            </a>
          </div>
        </section>
      )}

      <FaqBlock heading={`${city.name} Commercial Flooring Questions`} faqs={faqs} />

      {neighbors.length > 0 && (
        <section className="lcf py-16 md:py-20 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Nearby</Eyebrow>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Nearby Cities We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {neighbors.map((n) => (
                <a key={n.slug} href={`/epoxy-flooring/${n.slug}`} className={PILL}>
                  {n.name}
                </a>
              ))}
              <a href="/service-areas" className={PILL}>
                All service areas
              </a>
            </div>
          </div>
        </section>
      )}

      <SiteFooter
        cta={{
          title: `Get a bid on your ${city.name} project`,
          text: "Send drawings or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
        }}
      />
    </div>
  );
};

export default EpoxyFlooringCity;
