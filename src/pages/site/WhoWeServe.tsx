import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero, ClientStrip } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";

const audiences = [
  {
    title: "Owners & Developers",
    intro:
      "Make the flooring decision with the full project in view: service life, operating demands, construction schedule and long-term upkeep.",
    details: [
      "System recommendations matched to traffic, chemical exposure and appearance.",
      "Clear scope, phasing and cure windows before work begins.",
      "Multi-year and multi-site programs with documented closeout for each phase.",
    ],
  },
  {
    title: "General Contractors",
    intro:
      "A defined flooring scope, coordinated submittals and an installation plan that fits the construction schedule.",
    details: [
      "Spec sections we bid: Div 09 67 (fluid-applied flooring), 03 35 43 (polished concrete), 07 18 (traffic coatings), and 07 92 (joint sealants/fillers).",
      "Submittal package with product data, system build-up, thickness, cure requirements and phasing.",
      "Moisture testing and substrate review before installation.",
      "Night/weekend crews coordinated around access, adjacent trades and turnover.",
      "$5M bonding capacity and written Safety & Health Program LIC-SAF-001.",
      "Full bid within 24 hours of receiving plans; photo documentation through closeout.",
    ],
  },
  {
    title: "End Users / Facility Teams",
    intro:
      "Your floor has to support the operation—not become another interruption. We plan around how your facility actually runs.",
    details: [
      "Site walk within 1–3 business days to review traffic, cleaning, wear and failure areas.",
      "Phased work and after-hours installation coordinated with production and access.",
      "Clear return-to-service requirements, maintenance guidance and repair planning.",
      "Floor markings and coating work coordinated in one scope where practical.",
    ],
  },
  {
    title: "Architects & Specifiers",
    intro:
      "Turn the design intent into a buildable flooring assembly with a documented basis for product selection and preparation.",
    details: [
      "Install to the basis-of-design product or approved equal.",
      "Product data sheets and submittals describing build-up, thickness and cure requirements.",
      "Mockups to review appearance, texture and installation details.",
      "ASTM testing documentation, including moisture testing and pull-off adhesion on mockups.",
      "Concrete surface profile matched to the specified system using ICRI 310.2R guidance.",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <div className="lcf min-h-screen bg-background text-foreground">
      <Seo
        title="Who We Serve | Legacy Industrial Coatings"
        description="Commercial flooring support for owners, developers, general contractors, facility teams and architects: coordinated submittals, testing, phasing and $5M bonding."
        path="/who-we-serve"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Who We Serve", url: "/who-we-serve" },
        ]}
      />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Built around your responsibilities"
          title="Who We Serve"
          subhead="Owners, contractors, facility teams and designers need different answers. We bring the scope, documentation and field coordination each role needs."
          compact
        />
        <ClientStrip />
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          {audiences.map((audience, index) => (
            <section
              key={audience.title}
              className="grid gap-6 border-t border-slate-200 py-10 first:pt-0 first:border-t-0 md:grid-cols-2 md:gap-12"
            >
              <div className="min-w-0">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Partnership {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{audience.title}</h2>
                <p className="leading-relaxed text-slate-600">{audience.intro}</p>
              </div>
              <ul className="min-w-0 list-disc space-y-3 pl-5 leading-relaxed text-slate-600">
                {audience.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
    </div>
  );
}
