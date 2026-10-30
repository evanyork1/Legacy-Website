import SimplePage from "@/components/site/SimplePage";
import { JOB } from "@/data/site/jobPhotos";
import { SIMPLE_INDUSTRIES } from "@/data/site/simple/industries";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { HQ_LINE, TrustStrip } from "@/components/site/catalog";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  Breadcrumbs,
  FaqBlock,
  PageHero,
} from "@/components/site/sections";
import imgHero from "@/assets/industries/data-center-1.jpg";
import img2 from "@/assets/industries/data-center-2.jpg";
import img3 from "@/assets/industries/data-center-3.jpg";

type Hotspot = {
  id: string;
  label: string;
  x: number; // SVG viewBox coords (640x360)
  y: number;
  w: number;
  h: number;
  lines: string;
  system: string;
  link: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "substation",
    label: "Substation / Transformers",
    x: 20, y: 20, w: 130, h: 80,
    lines: "Concrete containment pits that must hold 110% of the transformer's oil without soaking in.",
    system: "Oil-resistant pit lining",
    link: "/secondary-containment-coatings#oil-containment-pits",
  },
  {
    id: "generator",
    label: "Generator Yard",
    x: 170, y: 20, w: 130, h: 80,
    lines: "Diesel- and oil-resistant, slip-resistant floors around generators and day tanks.",
    system: "Chemical-resistant epoxy or urethane cement",
    link: "/urethane-cement-flooring",
  },
  {
    id: "fuel",
    label: "Bulk Fuel Tanks",
    x: 320, y: 20, w: 130, h: 80,
    lines: "Lined dikes and berms around bulk diesel storage — EPA SPCC secondary containment.",
    system: "Secondary containment lining",
    link: "/secondary-containment-coatings",
  },
  {
    id: "battery",
    label: "Battery / UPS Rooms",
    x: 470, y: 20, w: 150, h: 80,
    lines: "Acid-resistant floor with integral cove and coated curbs that hold a spill; code-required spill control for lead-acid batteries.",
    system: "Chemical-resistant novolac epoxy",
    link: "/novolac-epoxy-flooring",
  },
  {
    id: "electrical",
    label: "Electrical Rooms",
    x: 20, y: 130, w: 130, h: 90,
    lines: "Static control around switchgear and inverters — ESD/static-dissipative epoxy to ANSI/ESD S20.20 where specified.",
    system: "ESD epoxy",
    link: "/esd-static-control-flooring",
  },
  {
    id: "datahall",
    label: "Data Hall",
    x: 170, y: 130, w: 280, h: 90,
    lines: "Dust-proof, flat, cleanable floors under heavy racks; hyperscale and AI halls are now slab-on-grade.",
    system: "Densify + seal with polyurea joint fill, or thin static-dissipative epoxy",
    link: "/concrete-sealing",
  },
  {
    id: "cooling",
    label: "Cooling / CDU Plant",
    x: 470, y: 130, w: 150, h: 90,
    lines: "Seamless waterproof floor with integral cove and curbs, glycol resistant — growing fast with AI liquid cooling.",
    system: "Urethane cement or epoxy with cove",
    link: "/urethane-cement-flooring",
  },
  {
    id: "dock",
    label: "Loading Dock & Build Rooms",
    x: 20, y: 250, w: 200, h: 90,
    lines: "Rack carts and pallet jacks — abrasion-resistant floors that take point loads.",
    system: "Urethane cement, epoxy mortar or polished concrete",
    link: "/concrete-polishing",
  },
  {
    id: "offices",
    label: "Offices / NOC",
    x: 240, y: 250, w: 210, h: 90,
    lines: "Polished concrete, carpet tile, LVT or decorative quartz for the people spaces.",
    system: "Polished concrete & resilient",
    link: "/resilient-flooring",
  },
  {
    id: "roof",
    label: "Stairs & decks",
    x: 470, y: 250, w: 150, h: 90,
    lines: "Pedestrian traffic coatings for stairs, mezzanines and elevated slabs.",
    system: "Deck coatings",
    link: "/deck-coatings",
  },
];

const SCOPE_CARDS = [
  {
    name: "1. Data halls (white space)",
    text: "Dust-proof, flat, cleanable floors under heavy rack loads; hyperscale and AI halls are now slab-on-grade, so the slab is the floor.",
    system: "Densify + seal with polyurea joint fill, or thin static-dissipative epoxy",
    links: [
      { label: "Concrete sealing", path: "/concrete-sealing" },
      { label: "Joint fill & crack repair", path: "/joint-filling-crack-repair" },
      { label: "ESD flooring", path: "/esd-static-control-flooring" },
    ],
  },
  {
    name: "2. Electrical, UPS, MDF/MMR rooms",
    text: "Static control around switchgear and inverters, where a discharge can take down equipment.",
    system: "ESD/static-dissipative epoxy to ANSI/ESD S20.20 where specified",
    links: [{ label: "ESD / static-control flooring", path: "/esd-static-control-flooring" }],
  },
  {
    name: "3. Battery rooms (lead-acid or lithium)",
    text: "Acid-resistant floor with integral cove and coated curbs that hold a spill; building and fire codes require spill control for lead-acid batteries.",
    system: "Acid-resistant novolac epoxy",
    links: [
      { label: "Novolac epoxy flooring", path: "/novolac-epoxy-flooring" },
      { label: "Battery room flooring", path: "/battery-room-flooring" },
    ],
  },
  {
    name: "4. Generator rooms & day-tank areas",
    text: "Diesel- and oil-resistant, slip-resistant floors that clean up after service work.",
    system: "Chemical-resistant epoxy or urethane cement",
    links: [
      { label: "Urethane cement", path: "/urethane-cement-flooring" },
      { label: "Secondary containment", path: "/secondary-containment-coatings" },
    ],
  },
  {
    name: "5. Bulk diesel secondary containment",
    text: "Lined dikes and berms around fuel tanks, sized and detailed to EPA SPCC requirements.",
    system: "Secondary containment lining",
    links: [{ label: "Secondary containment coatings", path: "/secondary-containment-coatings" }],
  },
  {
    name: "6. Transformer oil containment pits",
    text: "Concrete pits that must hold 110% of the transformer's oil without soaking in — including private campus substations.",
    system: "Oil-resistant pit lining",
    links: [{ label: "Oil containment pits", path: "/secondary-containment-coatings#oil-containment-pits" }],
  },
  {
    name: "7. Mechanical, chiller & liquid-cooling (CDU) rooms",
    text: "Seamless waterproof floor with integral cove and curbs, glycol resistant; growing fast with AI liquid cooling.",
    system: "Urethane cement or epoxy with cove",
    links: [
      { label: "Urethane cement", path: "/urethane-cement-flooring" },
      { label: "Epoxy cove base", path: "/epoxy-cove-base" },
    ],
  },
  {
    name: "8. Loading docks, build rooms, corridors",
    text: "Rack carts and pallet jacks demand abrasion resistance and flat, joint-free rolling surfaces.",
    system: "Urethane cement, epoxy mortar or polished concrete",
    links: [
      { label: "Urethane cement", path: "/urethane-cement-flooring" },
      { label: "Polished concrete", path: "/concrete-polishing" },
    ],
  },
  {
    name: "9. Offices, NOC, lobbies, restrooms",
    text: "The customer-facing side of the campus — finished to office standards.",
    system: "Polished concrete, carpet tile, LVT, decorative quartz",
    links: [
      { label: "Resilient flooring", path: "/resilient-flooring" },
      { label: "Quartz flooring", path: "/quartz-flooring" },
    ],
  },
  {
    name: "10. Stairs, mezzanines, elevated slabs",
    text: "Pedestrian traffic coatings that protect the structure below.",
    system: "Deck coatings",
    links: [{ label: "Deck coatings", path: "/deck-coatings" }],
  },
];

const FAQS = [
  {
    q: "Do data halls need ESD flooring?",
    a: "Not always. Most white space does fine with densified and sealed concrete plus polyurea joint fill. Static-dissipative epoxy to ANSI/ESD S20.20 is typically specified in electrical, UPS and MDF/MMR rooms, and in halls where the operator's standards call for it. We install both and test to the spec.",
  },
  {
    q: "Sealed concrete or epoxy in the white space?",
    a: "For hyperscale and AI halls that are slab-on-grade, densify-and-seal is the common choice: dust-proof, flat, cleanable, and nothing to delaminate under racks. Thin static-dissipative epoxy makes sense where the spec requires ESD control or a uniform appearance.",
  },
  {
    q: "What does a lead-acid battery room require?",
    a: "Building and fire codes require spill control for lead-acid batteries. We install acid-resistant novolac epoxy with an integral cove and coated curbs so the floor itself contains an electrolyte spill, with an ESD option where the spec calls for it.",
  },
  {
    q: "Can you coat containment pits that hold transformer oil?",
    a: "Yes. Transformer pits must hold 110% of the unit's oil volume without the oil soaking into the concrete. We line pits with oil- and water-resistant coating systems, including private campus substations.",
  },
  {
    q: "Can you work around an energized/live facility?",
    a: "Yes. We phase work zone by zone, run night and weekend crews, and coordinate with your operations team so critical rooms stay online. Our written safety program (LIC-SAF-001) and SDS package are part of every mobilization.",
  },
];


/* Illustrated campus layout (viewBox 640x400) and simple line art per area. */
type Box = { x: number; y: number; w: number; h: number };
const CAMPUS_LAYOUT: Record<string, Box> = {
  substation: { x: 16, y: 16, w: 144, h: 94 },
  generator: { x: 172, y: 16, w: 160, h: 94 },
  fuel: { x: 338, y: 16, w: 122, h: 94 },
  cooling: { x: 472, y: 16, w: 152, h: 94 },
  battery: { x: 16, y: 122, w: 144, h: 74 },
  electrical: { x: 16, y: 204, w: 144, h: 74 },
  datahall: { x: 172, y: 122, w: 288, h: 156 },
  roof: { x: 472, y: 122, w: 152, h: 74 },
  dock: { x: 472, y: 204, w: 152, h: 74 },
  offices: { x: 172, y: 290, w: 288, h: 94 },
};

const CampusArt = ({ id, b }: { id: string; b: Box }) => {
  const { x, y, w } = b;
  switch (id) {
    case "substation":
      return (
        <>
          <rect x={x + 8} y={y + 8} width={w - 16} height={58} strokeDasharray="3 3" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={x + 18 + i * 42} y={y + 20} width={26} height={22} />
              <path d={`M${x + 22 + i * 42} ${y + 20} v-6 M${x + 31 + i * 42} ${y + 20} v-6 M${x + 40 + i * 42} ${y + 20} v-6`} />
              <rect x={x + 14 + i * 42} y={y + 16} width={34} height={30} strokeDasharray="1 2" />
            </g>
          ))}
          <path d={`M${x + 12} ${y + 56} H${x + w - 12}`} />
        </>
      );
    case "generator":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={x + 10 + i * 37} y={y + 12} width={30} height={46} />
              <circle cx={x + 25 + i * 37} cy={y + 24} r={6} />
              <path d={`M${x + 14 + i * 37} ${y + 40} h22 M${x + 14 + i * 37} ${y + 46} h22`} />
            </g>
          ))}
          <path d={`M${x + 8} ${y + 66} H${x + w - 8}`} strokeDasharray="4 3" />
        </>
      );
    case "fuel":
      return (
        <>
          <rect x={x + 8} y={y + 8} width={w - 16} height={58} />
          {[0, 1].map((i) => (
            <g key={i}>
              <circle cx={x + 36 + i * 50} cy={y + 37} r={19} />
              <circle cx={x + 36 + i * 50} cy={y + 37} r={12} />
            </g>
          ))}
        </>
      );
    case "cooling":
      return (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={x + 10 + i * 46} y={y + 12} width={40} height={50} />
              <circle cx={x + 30 + i * 46} cy={y + 27} r={9} />
              <circle cx={x + 30 + i * 46} cy={y + 48} r={9} />
              <path d={`M${x + 21 + i * 46} ${y + 27} h18 M${x + 21 + i * 46} ${y + 48} h18`} />
            </g>
          ))}
        </>
      );
    case "battery":
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={x + 10 + i * 21} y={y + 12} width={16} height={36} />
          ))}
          <path d={`M${x + 10} ${y + 30} H${x + w - 10}`} strokeDasharray="1 3" />
        </>
      );
    case "electrical":
      return (
        <>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={x + 10 + i * 32} y={y + 12} width={26} height={36} />
              <path d={`M${x + 16 + i * 32} ${y + 20} h14 M${x + 16 + i * 32} ${y + 28} h14 M${x + 16 + i * 32} ${y + 36} h14`} />
            </g>
          ))}
        </>
      );
    case "datahall":
      return (
        <>
          <path d={`M${x + 144} ${y + 8} V${y + 132}`} />
          {[0, 1].map((hall) =>
            [0, 1, 2, 3, 4, 5].map((r) => (
              <rect
                key={`${hall}-${r}`}
                x={x + 14 + hall * 144}
                y={y + 14 + r * 18}
                width={116}
                height={8}
              />
            )),
          )}
          <path d={`M${x + 14} ${y + 126} H${x + 274}`} strokeDasharray="2 3" />
        </>
      );
    case "roof":
      return (
        <>
          <path d={`M${x + 10} ${y + 12} H${x + w - 10} V${y + 50} H${x + 10} Z`} strokeDasharray="5 3" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={x + 18 + i * 32} y={y + 20} width={18} height={14} />
          ))}
        </>
      );
    case "dock":
      return (
        <>
          <path d={`M${x + 10} ${y + 14} H${x + w - 10}`} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={x + 14 + i * 34} y={y + 14} width={24} height={8} />
              <rect x={x + 16 + i * 34} y={y + 26} width={20} height={24} strokeDasharray="2 2" />
            </g>
          ))}
        </>
      );
    case "offices":
      return (
        <>
          <rect x={x + 12} y={y + 12} width={w - 24} height={50} />
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={x + 22 + i * 21} y={y + 22} width={12} height={10} />
          ))}
          <path d={`M${x + w / 2 - 14} ${y + 62} v-14 h28 v14`} />
        </>
      );
    default:
      return null;
  }
};

const SimpleDataCenter = () => (
  <SimplePage
    path="/data-center-flooring"
    metaTitle="Data Center Flooring | DFW & Nationwide | Legacy Industrial Coatings"
    metaDescription="Floors, linings and coatings for data centers, from the data hall to the generator yard: sealed concrete, ESD epoxy, battery rooms and transformer and fuel containment. Headquartered in Dallas-Fort Worth, working nationwide."
    h1="Data Center Flooring"
    eyebrow="Mission-Critical & Tech"
    heroImage={JOB.indDataCenter.src}
    heroAlt={JOB.indDataCenter.alt}
    crumbs={[
      { name: "Home", url: "/" },
      { name: "Industries", url: "/industries" },
      { name: "Data Center Flooring", url: "/data-center-flooring" },
    ]}
    serviceName="Data Center Flooring"
    content={SIMPLE_INDUSTRIES["/data-center-flooring"]}
    photos={[JOB.containAfter, JOB.dcSiteWalk, JOB.dcTruck]}
    related={{
      title: "Floors We Install Here",
      links: [
        { label: "ESD / static-control flooring", path: "/esd-static-control-flooring" },
        { label: "Battery room flooring", path: "/battery-room-flooring" },
        { label: "Transformer & fuel containment", path: "/secondary-containment-coatings" },
        { label: "Urethane cement flooring", path: "/urethane-cement-flooring" },
        { label: "Sealed concrete", path: "/concrete-sealing" },
      ],
    }}
    closing={{
      title: "Get a bid on your data center floors",
      text: "Send plans or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
    }}
  />
);

const DataCenterFlooring = () => {
  if (SIMPLE_INDUSTRIES["/data-center-flooring"]) return <SimpleDataCenter />;
  return <DataCenterFlooringFull />;
};

const DataCenterFlooringFull = () => {
  const [active, setActive] = useState<Hotspot>(HOTSPOTS[5]); // Data Hall default

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Data Center Flooring | DFW & Nationwide | Legacy Industrial Coatings"
        description="Floors, linings and coatings for data centers — data hall to generator yard: ESD epoxy, battery room containment, SPCC fuel dikes. Headquartered in Dallas-Fort Worth, working nationwide."
        path="/data-center-flooring"
        ogImage={imgHero}
      />
      <StructuredData
        services={[
          { name: "Data Center Flooring", description: "Floors, linings and coatings for data centers — from data hall to generator yard.", url: "/data-center-flooring" },
          { name: "Battery Room Containment", description: "Acid-resistant flooring with integral cove for lead-acid and lithium battery rooms.", url: "/battery-room-flooring" },
          { name: "Secondary Containment", description: "EPA SPCC fuel tank dikes and transformer oil containment pit linings.", url: "/secondary-containment-coatings" },
        ]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/who-we-serve" },
          { name: "Data Center Flooring", url: "/data-center-flooring" },
        ]}
      />
      <SiteHeader />
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/who-we-serve" },
          { name: "Data Centers", url: "/data-center-flooring" },
        ]}
      />

      <PageHero
        eyebrow="Mission-Critical & Tech"
        title="Floors, linings and coatings for data centers — from data hall to generator yard"
        subhead="One contractor for the white space, the battery rooms, the fuel yard and the transformer pads. Site walk within 1–3 business days; full bid within 24 hours of receiving plans."
        image={imgHero}
        imageAlt="Data center flooring and containment coatings"
        compact
      />

      {/* Context band */}
      <section className="bg-secondary border-b border-border py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-muted-foreground leading-relaxed">
            We're based in DFW, ranked the world's top data center market, with 765+ MW under
            construction and 95% of it pre-leased. Every campus — here and nationwide — needs floors,
            linings and coatings that pass inspection the first time.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Sources: Cushman &amp; Wakefield, Global Data Center Market Comparison 2026; CBRE via{" "}
            <a
              href="https://dallasinnovates.com/?p=292481"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Dallas Innovates
            </a>
            , 2026.
          </p>
          <p className="text-foreground text-sm mt-4 font-medium">{HQ_LINE}</p>
        </div>
      </section>

      {/* Interactive campus map */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Campus map
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-3">
            Every area of the campus, one flooring partner
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Illustrative campus layout — select an area to see what we install there.
          </p>

          {/* Desktop: SVG map */}
          <div className="hidden md:grid md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3">
              <svg
                viewBox="0 0 640 400"
                className="w-full border border-border bg-background"
                role="group"
                aria-label="Illustrated top-down data center campus — select an area"
              >
                {/* Site boundary, perimeter road and fence (decorative) */}
                <g aria-hidden="true" className="fill-none stroke-foreground/25" strokeWidth={1}>
                  <rect x={6} y={6} width={628} height={388} strokeDasharray="6 4" />
                  <path d="M166 10 V390 M466 10 V390 M10 116 H630 M166 284 H466" strokeDasharray="2 6" />
                </g>
                {HOTSPOTS.map((h) => {
                  const b = CAMPUS_LAYOUT[h.id];
                  if (!b) return null;
                  const on = active.id === h.id;
                  return (
                    <g
                      key={h.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${h.label}: ${h.system}`}
                      aria-pressed={on}
                      onClick={() => setActive(h)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActive(h);
                        }
                      }}
                      className="group cursor-pointer outline-none"
                    >
                      <rect
                        x={b.x}
                        y={b.y}
                        width={b.w}
                        height={b.h}
                        className={`transition-colors ${
                          on
                            ? "fill-foreground/10 stroke-foreground"
                            : "fill-background stroke-foreground/60 group-hover:fill-foreground/5 group-focus-visible:stroke-foreground"
                        }`}
                        strokeWidth={on ? 2 : 1.25}
                      />
                      <g
                        aria-hidden="true"
                        className={`fill-none pointer-events-none ${on ? "stroke-foreground" : "stroke-foreground/55"}`}
                        strokeWidth={1}
                      >
                        <CampusArt id={h.id} b={b} />
                      </g>
                      <text
                        x={b.x + 6}
                        y={b.y + b.h - 7}
                        className="pointer-events-none select-none fill-foreground"
                        fontSize={9.5}
                        fontWeight={600}
                        style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        {h.label.split(/ \/ | & /)[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="md:col-span-2 border border-border bg-background p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{active.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{active.lines}</p>
              <div className="text-sm font-semibold text-foreground mb-3">{active.system}</div>
              <a
                href={active.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                View system <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile: stacked list */}
          <div className="md:hidden space-y-2">
            {HOTSPOTS.map((h) => (
              <details key={h.id} className="border border-border bg-background">
                <summary className="px-4 py-3 text-sm font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {h.label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{h.lines}</p>
                  <div className="text-sm font-semibold text-foreground mb-2">{h.system}</div>
                  <a href={h.link} className="text-sm font-semibold text-muted-foreground">
                    View system →
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Room-by-room scope */}
      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-8">
            Room-by-room scope
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCOPE_CARDS.map((card) => (
              <div key={card.name} className="bg-background border border-border p-6 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-2">{card.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.text}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-foreground mb-2">{card.system}</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {card.links.map((l) => (
                      <a
                        key={l.path}
                        href={l.path}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label} <ArrowRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For GCs & estimators */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
            For GCs & estimators
          </p>
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight mb-6">
            Spec sections we bid
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { code: "09 67", name: "Fluid-applied flooring" },
              { code: "03 35 43", name: "Polished concrete" },
              { code: "07 18", name: "Traffic coatings" },
              { code: "07 92", name: "Joint sealants & fillers" },
            ].map((s) => (
              <div key={s.code} className="border border-border p-5 text-center">
                <div className="text-xl font-bold text-foreground">{s.code}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.name}</div>
              </div>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-muted-foreground">
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Complete submittal package with product data sheets</li>
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />ASTM F2170 / F1869 moisture testing before coating</li>
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Night and weekend crews for live facilities</li>
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />$5M bonding capacity</li>
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Written Safety &amp; Health Program LIC-SAF-001</li>
            <li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />Photo documentation from prep through closeout</li>
          </ul>
        </div>
      </section>

      <TrustStrip />

      {/* Photos */}
      <section className="py-14 md:py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { src: imgHero, alt: "Data hall sealed concrete floor in a data center" },
              { src: img2, alt: "ESD flooring in a data center electrical room" },
              { src: img3, alt: "Mechanical room urethane cement floor with cove" },
            ].map((p, i) => (
              <div key={i} className="overflow-hidden bg-muted">
                <img src={p.src} alt={p.alt} className="w-full h-60 object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqBlock heading="Data center flooring FAQ" faqs={FAQS} bg={false} />

      <SiteFooter
        cta={{
          title: "Send us your drawings",
          text: "Upload plans and we'll return a full bid within 24 hours of receiving them — or request an estimate and we'll walk the campus with you.",
        }}
      />
    </div>
  );
};

export default DataCenterFlooring;
