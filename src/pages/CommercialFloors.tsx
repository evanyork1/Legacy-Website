import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CommercialContactModal } from "@/components/commercial/CommercialContactModal";
import {
  ClientStrip,
  PageHero,
  ProofBar,
} from "@/components/site/sections";
import imgHero from "@/assets/commercial-polishing-work.jpg";
import imgDatacenter from "@/assets/commercial-datacenter.jpg";
import imgWarehouse from "@/assets/commercial-warehouse.jpg";
import imgRetail from "@/assets/commercial-retail.jpg";
import imgManufacturing from "@/assets/commercial-manufacturing.jpg";

const SERVICES = [
  { title: "Concrete Polishing", description: "Multi-step diamond polishing process to achieve mirror-like finishes. From 100-grit to 3000-grit, we deliver the exact sheen level your project demands.", path: "/concrete-polishing" },
  { title: "Polishable Overlays", description: "Micro-topping and cementitious overlay systems applied over existing substrates to create a polishable surface — ideal for renovation and retrofit projects.", path: "/concrete-polishing" },
  { title: "Concrete Restoration", description: "Joint filling, crack repair, and surface prep to bring damaged or aged concrete back to spec before polishing or coating.", path: "/joint-filling-crack-repair" },
  { title: "Grind & Seal", description: "A cost-effective alternative to full polishing — grinding the surface and applying a topical sealer for a clean, durable finish.", path: "/concrete-sealing" },
  { title: "Specialty Waterproofing", description: "Containment tanks, traffic coatings, and other specialized spaces which require specific materials and durable sealers to protect against moisture and chemical exposure.", path: "/secondary-containment-coatings" },
  { title: "Epoxy Floor Coatings", description: "High-performance epoxy and polyurea systems for chemical resistance, anti-slip finishes, and decorative applications in demanding commercial environments.", path: "/industrial-epoxy" },
];

const INDUSTRIES = [
  { title: "Data Centers", description: "Mission-critical facilities requiring floors that meet strict cleanliness, flatness, and static-control standards.", image: imgDatacenter, path: "/data-center-flooring" },
  { title: "Warehouses & Distribution", description: "Durable, dust-free floors built to handle heavy forklift traffic, racking loads, and 24/7 operations.", image: imgWarehouse, path: "/warehouse-flooring" },
  { title: "Retail & Commercial", description: "High-gloss, easy-to-maintain floors that reflect light beautifully and resist staining in high-traffic environments.", image: imgRetail, path: "/retail-flooring" },
  { title: "Manufacturing", description: "Seamless, chemical-resistant flooring for production facilities, assembly lines, and clean rooms.", image: imgManufacturing, path: "/manufacturing-floor-coating" },
];

const CommercialFloors = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Commercial Concrete Polishing & Industrial Flooring | Legacy Industrial Coatings"
        description="Spec-grade commercial concrete polishing, polishable overlays, grind & seal, and industrial epoxy systems. Texas-based crews, ASCC/ACI/ICRI standards, night and weekend mobilization."
        path="/commercialfloors"
      />
      <StructuredData
        services={[{ name: "Commercial Concrete Polishing & Industrial Flooring", description: "Spec-grade commercial concrete polishing, polishable overlays, grind & seal, and industrial epoxy systems built to ASCC/ACI/ICRI standards across Dallas-Fort Worth, with night and weekend mobilization.", url: "/commercialfloors" }]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Commercial Flooring", url: "/commercialfloors" },
        ]}
      />
      <SiteHeader />
      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Commercial Flooring", url: "/commercialfloors" }]} />

      <PageHero
        eyebrow="Commercial Flooring"
        title="Spec-grade commercial concrete polishing & industrial flooring"
        subhead="Polishing, overlays, grind & seal and industrial epoxy systems built to ASCC/ACI/ICRI standards — with night and weekend mobilization across Texas."
        image={imgHero}
        imageAlt="Commercial concrete polishing crew working on a DFW project"
        compact
      />

      <ProofBar />

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
            What we install
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-10">
            Commercial systems, built to spec
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <a key={s.title} href={s.path} className="border border-border bg-background p-6 hover:border-foreground transition-colors group">
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-foreground transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground mt-3">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Where we work
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-10">
            Facilities that can't afford a failed floor
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((i) => (
              <a key={i.title} href={i.path} className="group border border-border bg-background overflow-hidden">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={i.image}
                    alt={`${i.title} flooring in Dallas-Fort Worth`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-foreground mb-2">{i.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{i.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Standards + case study */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-5">
              Industry-leading standards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We follow and exceed ASCC, ACI, and ICRI specifications on every project. No
              shortcuts, no compromises. Moisture testing, surface profiles and adhesion testing
              are documented before and during the work.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />ASTM F2170 / F1869 moisture testing</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />ICRI 310.2R surface profile matched to system</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />ASTM D7234 pull-off adhesion on mockups</li>
              <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Photo documentation from prep through closeout</li>
            </ul>
          </div>
          <div className="border border-border bg-secondary p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Featured project
            </p>
            <h3 className="text-xl font-bold text-foreground mb-3">
              50,000 SF aloe vera processing plant
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Mechanical polished concrete across an active processing facility — phased around
              production, documented from prep to final burnish.
            </p>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              See our case studies <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* Contact modal CTA preserved from the original page */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
            Talk to our commercial team
          </h2>
          <p className="text-muted-foreground mb-7">
            Send your drawings or scope — full bid within 24 hours of receiving plans.
          </p>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-foreground/90 transition-colors"
          >
            Contact the commercial team <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
      <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
      <CommercialContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default CommercialFloors;
