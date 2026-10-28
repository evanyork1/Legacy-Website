import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { PROCESS_STEPS } from "@/data/site/nav";

const sections = [
  {
    title: "At a Glance",
    items: [
      "Legacy Industrial Coatings LLC — commercial flooring for almost a decade, DFW based and nationwide.",
      "Office: 6010 W Spring Creek Pkwy, Plano, TX 75024.",
      "5.0/5 across 201+ Google reviews.",
      "Typical project: 25,000–400,000 SF; project range: 10,000–1,000,000 SF.",
      "Typical project value: $80,000–$1,000,000+.",
      "Multi-year, phased and multi-site programs.",
    ],
  },
  {
    title: "What We Install",
    items: [
      "Resinous flooring: epoxy, quartz, urethane cement and ESD systems.",
      "Polished concrete, sealed concrete and substrate repair.",
      "Secondary containment and chemical-resistant linings.",
      "Deck waterproofing and vehicular traffic coatings.",
      "Resilient flooring: carpet tile, LVP/LVT, sheet vinyl, rubber and VCT.",
      "Line striping and industrial floor marking.",
    ],
  },
  {
    title: "Manufacturers",
    items: [
      "Spec-grade resinous, polished concrete and resilient flooring materials from major U.S. manufacturers, with manufacturer product data and warranties in every submittal.",
      "We install to the basis-of-design product or approved equal. Product selection is confirmed through the project submittal.",
    ],
  },
  {
    title: "Industries",
    items: [
      "Data centers, semiconductor and electronics facilities.",
      "Warehouses, manufacturing plants and aerospace hangars.",
      "Food and beverage, pharmaceutical and medical manufacturing.",
      "Healthcare, laboratories and cleanrooms.",
      "Retail, offices, education, hospitality and multifamily.",
      "Auto dealerships, service facilities and parking structures.",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "ASTM F2170 in-situ relative humidity testing.",
      "ASTM F1869 moisture vapor emission rate testing.",
      "ASTM F710 substrate compliance.",
      "ICRI 310.2R concrete surface profile matched to the selected system.",
      "ASTM D7234 pull-off adhesion testing on mockups.",
      "Ambient temperature, relative humidity and dew-point monitoring.",
      "Photo documentation from preparation through final closeout.",
    ],
  },
  {
    title: "Compliance & Coverage",
    items: [
      "$5,000,000 bonding capacity.",
      "General Liability, Commercial Auto, Umbrella and Workers Compensation coverage.",
      "Additional insured, waiver of subrogation, and primary & non-contributory available.",
      "Written Safety & Health Program LIC-SAF-001.",
      "SDS package supplied before mobilization.",
    ],
  },
];

export default function CapabilityPacket() {
  return (
    <div className="lcf min-h-screen bg-background text-foreground">
      <Seo
        title="Capability Packet | Legacy Industrial Coatings"
        description="Review Legacy's commercial flooring capabilities, project scale, manufacturers, ASTM testing, $5M bonding capacity and maintenance programs. PDF sent on request."
        path="/capability-packet"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Capability Packet", url: "/capability-packet" },
        ]}
      />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Qualifications & capabilities"
          title="Capability Packet"
          subhead="A practical overview for prequalification, project planning and your next flooring bid."
          compact
        />
        <section className="border-b border-slate-200 bg-secondary py-10">
          <div className="container mx-auto max-w-6xl px-4">
            <a
              href="/legacy-capability-packet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wide text-background hover:bg-foreground/90"
            >
              Download the PDF
            </a>
            <p className="mt-3 text-sm text-slate-600">
              Opens in a new tab. Need something specific for your vendor file? Use the form below.
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <section key={section.title} className="min-w-0 border-t-2 border-foreground pt-6">
                <h2 className="mb-5 text-2xl font-bold">{section.title}</h2>
                <ul className="list-disc space-y-3 pl-5 leading-relaxed text-slate-600">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="mb-6 text-2xl font-bold">How We Work</h2>
            <ol className="grid gap-6 md:grid-cols-2">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.title} className="border border-slate-200 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Step {index + 1}
                  </p>
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="mb-4 text-2xl font-bold">Maintenance Programs</h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              Keep your flooring serviceable with planned inspections, cleaning
              guidance, localized repairs and scheduled recoating. We scope
              maintenance around your traffic, chemical exposure and operating
              windows, including phased and multi-site programs.
            </p>
            <a className="mt-4 inline-block font-semibold text-muted-foreground underline" href="/commercial-floor-maintenance">
              Explore maintenance programs
            </a>
          </section>

          <section className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="mb-4 text-2xl font-bold">Featured Projects</h2>
            <p className="mb-4 max-w-3xl leading-relaxed text-slate-600">
              See real project scopes, preparation decisions and installation
              approaches in our commercial flooring case studies.
            </p>
            <a href="/case-studies" className="font-semibold text-muted-foreground underline">
              View case studies
            </a>
          </section>
        </div>
      </main>
      <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
    </div>
  );
}
