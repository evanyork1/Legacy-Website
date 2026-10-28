import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import {
  Breadcrumbs,
  ClientStrip,
  CommercialTestimonials,
  PageHero,
  ProofBar,
} from "@/components/site/sections";
import { StructuredData } from "@/components/seo/StructuredData";
import imgHero from "@/assets/industries/industrial-warehouse-1.jpg";
// TODO Evan: replace with the crew photo uploaded in the Lovable draft (about-legacy-team.webp).
import imgCrew from "@/assets/polishing-warehouse.jpg";

const STANDARDS = [
  {
    title: "Moisture testing before every coating",
    text: "ASTM F2170 in-situ relative humidity and ASTM F1869 MVER testing tell us what the slab is doing before we specify a system — not after it fails.",
  },
  {
    title: "Surface profile matched to the system",
    text: "We prep to the ICRI 310.2R concrete surface profile (CSP) the manufacturer specifies, verified on site — not whatever the grinder happened to leave.",
  },
  {
    title: "Mockups with pull-off adhesion testing",
    text: "On critical work we install mockups and run ASTM D7234 pull-off adhesion tests so the system is proven on your slab before full installation.",
  },
  {
    title: "Photo documentation, prep through closeout",
    text: "Daily photo logs from surface prep to final coat. You get a complete closeout package — what went down, where, and when.",
  },
  {
    title: "Written safety program",
    text: "Safety & Health Program LIC-SAF-001 governs every crew, with SDS packages delivered before mobilization.",
  },
  {
    title: "Ambient conditions monitored",
    text: "Temperature, relative humidity and dew point are monitored during installation and cure — because resin doesn't care about your schedule.",
  },
];

const About = () => (
  <>
    <Helmet>
      <title>About Legacy Industrial Coatings - Professional Floor Coating Experts</title>
      <meta
        name="description"
        content="Legacy Industrial Coatings has delivered commercial and industrial flooring for almost a decade. DFW based, nationwide: testing-first installations, documented prep and dedicated project management."
      />
      <link rel="canonical" href="https://legacyindustrialcoatings.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Legacy Industrial Coatings - Professional Floor Coating Experts" />
      <meta property="og:description" content="Commercial and industrial flooring for almost a decade. DFW based, nationwide. Testing-first, spec-driven installations." />
      <meta property="og:url" content="https://legacyindustrialcoatings.com/about" />
    </Helmet>
    <StructuredData
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
      ]}
    />

    <div className="lcf min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      <PageHero
        eyebrow="About Legacy"
        title="Why Legacy is your true professional"
        subhead="For almost a decade, Legacy Industrial Coatings has delivered resin floors, polished concrete, containment and traffic coatings for owners, GCs and facility teams. DFW based, nationwide."
        image={imgHero}
        imageAlt="Legacy Industrial Coatings warehouse flooring project in Dallas-Fort Worth"
        rating
        compact
      />

      <ProofBar />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Our story
            </p>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-5">
              Built in Dallas–Fort Worth, one spec at a time
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For almost a decade, Legacy Industrial Coatings has taken on the work that punishes shortcuts
              from our Dallas–Fort Worth base, serving projects nationwide: active warehouses,
              food plants, pharmaceutical manufacturing, data centers and parking structures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today our typical project runs 25,000–400,000 square feet, with a range from 10,000
              to over 1,000,000 square feet and typical values of $80,000 to $1,000,000+. We run
              multi-year, phased and multi-site programs for owners who need a flooring partner,
              not a one-off crew.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are not the right fit for every project, nor do we strive to be the lowest-priced
              contractor in the room. We partner with owners, developers and contractors who value
              doing it right the first time.
            </p>
          </div>
          <div className="overflow-hidden bg-muted">
            <img
              src={imgCrew}
              alt="Polished concrete warehouse floor with safety striping installed by Legacy Industrial Coatings"
              width={1170}
              height={970}
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Our standards
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-10">
            The unglamorous work that makes floors last
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STANDARDS.map((s) => (
              <div key={s.title} className="bg-background border border-border p-6">
                <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers + insurance */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-5">
              Manufacturer relationships
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              We install to the basis-of-design product or approved equal. Our crews are trained on
              systems from:
            </p>
            <ul className="space-y-2">
              {["Neogard (a Hempel company)", "Sherwin-Williams", "Sika", "Polymer Nation", "Floor Guard"].map(
                (m) => (
                  <li key={m} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                    <span className="font-medium">{m}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-5">
              Insurance & bonding
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />$5,000,000 bonding capacity</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />General Liability, Commercial Auto, Umbrella and Workers' Compensation</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Additional insured, waiver of subrogation, and primary &amp; non-contributory endorsements available</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Certificates issued quickly through our broker for prequalification</li>
            </ul>
            <a
              href="/capability-packet"
              className="inline-block mt-6 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              See the full capability packet →
            </a>
          </div>
        </div>
      </section>

      <ClientStrip />
      <CommercialTestimonials />
      <SiteFooter cta={{ title: "Talk to a flooring professional", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
    </div>
  </>
);

export default About;
