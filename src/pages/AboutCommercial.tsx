import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import {
  ClientStrip,
  CommercialTestimonials,
  PageHero,
  ProofBar,
} from "@/components/site/sections";
import imgHero from "@/assets/industries/industrial-warehouse-2.jpg";

const GC_POINTS = [
  {
    title: "We bid the divisions you actually need",
    text: "Div 09 67 fluid-applied flooring, 03 35 43 polished concrete, 07 18 traffic coatings, 07 92 joint sealants and fillers — scoped from your drawings, not a square-foot guess.",
  },
  {
    title: "Submittals that pass the first time",
    text: "Product data sheets, system build-up, thickness, cure times and phasing — assembled the way your PM wants to see them.",
  },
  {
    title: "Testing before we coat",
    text: "ASTM F2170 in-situ RH, ASTM F1869 MVER, ICRI 310.2R CSP matched to the system, and ASTM D7234 pull-off adhesion on mockups.",
  },
  {
    title: "Crews when your schedule needs them",
    text: "Night and weekend mobilization is standard for us. We phase around other trades and keep your turnover date honest.",
  },
  {
    title: "Paperwork that prequalifies",
    text: "$5M bonding capacity, full GL / Auto / Umbrella / Workers' Comp, additional insured and waiver of subrogation endorsements, and written Safety & Health Program LIC-SAF-001.",
  },
  {
    title: "Closeout you can hand over",
    text: "Daily photo documentation from prep through final coat, punch walk, warranty and a complete closeout package.",
  },
];

const AboutCommercial = () => (
  <div className="lcf min-h-screen bg-background">
    <Seo
      title="About Legacy Industrial Coatings — Commercial Concrete & Polishing Partner for GCs"
      description="Tech consultants for general contractors. Millions of square feet of commercial concrete polishing and industrial coatings delivered to spec for ITBs across Texas."
      path="/about-commercial"
    />
    <StructuredData
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Commercial", url: "/commercialfloors" },
        { name: "About", url: "/about-commercial" },
      ]}
    />
    <SiteHeader />
    <PageBreadcrumbs
      items={[
        { name: "Home", url: "/" },
        { name: "Commercial", url: "/commercialfloors" },
        { name: "About", url: "/about-commercial" },
      ]}
    />

    <PageHero
      eyebrow="About Legacy — Commercial"
      title="A flooring partner built for general contractors"
      subhead="We act as tech consultants on your flooring scope: we read the drawings, flag the substrate risks, and deliver a bidable, buildable system — then we install it to spec."
      image={imgHero}
      imageAlt="Commercial concrete polishing crew on a DFW project"
      compact
    />

    <ProofBar />

    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
          How we work with GCs
        </p>
        <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-10">
          Millions of square feet delivered to spec
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GC_POINTS.map((p) => (
            <div key={p.title} className="border border-border bg-background p-6">
              <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-5">
          Who we fit — and who we don't
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We are not the right fit for every project, nor do we strive to be the lowest-priced
          contractor in the room. We partner with owners, developers and contractors who value
          doing it right the first time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If your ITB needs a flooring sub who shows up with a testing protocol, a safety program
          and a closeout package — that's us. If it needs the cheapest number on the spreadsheet,
          we're probably not your low bid, and we're comfortable saying so early.
        </p>
      </div>
    </section>

    <ClientStrip />
    <CommercialTestimonials />
    <SiteFooter cta={{ title: "Send us your ITB", text: "Full bid within 24 hours of receiving plans. Site walk within 1–3 business days." }} />
  </div>
);

export default AboutCommercial;
