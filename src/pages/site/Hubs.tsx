import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { ClientStrip, PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { INDUSTRY_GROUPS, type NavLink } from "@/data/site/nav";
import { JOB } from "@/data/site/jobPhotos";
import { ARTICLES } from "@/data/articles";

/** Hub pages that keep every service, industry and guide one click from the menu. */

type Group = { id?: string; title: string; text?: string; items: (NavLink & { text?: string })[] };

const GroupGrid = ({ groups }: { groups: Group[] }) => (
  <>
    {groups.map((g, i) => (
      <section key={g.title} id={g.id} className={`py-16 md:py-20 scroll-mt-24 ${i % 2 ? "bg-secondary border-y border-border" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-3">{g.title}</h2>
          {g.text && <p className="text-muted-foreground text-[16px] leading-[1.8] mb-8 max-w-3xl">{g.text}</p>}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ${g.text ? "" : "mt-8"}`}>
            {g.items.map((l) => (
              <a key={l.path} href={l.path} className="group block border border-border bg-background p-6 hover:border-foreground transition-colors">
                <span className="flex items-center justify-between gap-3 font-heading font-semibold text-[15px] text-foreground">
                  {l.label}
                  <ArrowRight size={14} className="text-muted-foreground flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
                {l.text && <span className="block mt-2 text-[14px] text-muted-foreground leading-[1.7]">{l.text}</span>}
              </a>
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);

const SERVICE_GROUPS: Group[] = [
  {
    id: "epoxy",
    title: "Epoxy & Resinous Floors",
    text: "Seamless floors bonded to your concrete, chosen for the traffic, chemicals and cleaning in each space.",
    items: [
      { label: "Commercial & Industrial Epoxy Flooring", path: "/commercial" },
      { label: "Urethane Cement", path: "/urethane-cement-flooring" },
      { label: "Resinous Flooring", path: "/resinous-flooring" },
      { label: "Flake Floors", path: "/flake-floors" },
      { label: "Quartz Flooring", path: "/quartz-flooring" },
      { label: "MMA (Fast Cure)", path: "/mma-flooring" },
      { label: "Integral Cove Base", path: "/epoxy-cove-base" },
    ],
  },
  {
    id: "concrete",
    title: "Polished & Sealed Concrete",
    text: "When the slab itself can be the floor.",
    items: [
      { label: "Polished Concrete", path: "/concrete-polishing" },
      { label: "Concrete Sealing", path: "/concrete-sealing" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Coatings",
    text: "Chemical-resistant, static-control and containment coatings for demanding spaces.",
    items: [
      { label: "Novolac Epoxy", path: "/novolac-epoxy-flooring" },
      { label: "ESD / Static-Control Flooring", path: "/esd-static-control-flooring" },
      { label: "Battery Room Flooring", path: "/battery-room-flooring" },
      { label: "Secondary Containment", path: "/secondary-containment-coatings" },
      { label: "Deck & Traffic Coatings", path: "/deck-coatings" },
      { label: "Parking Garage Coatings", path: "/parking-garage-coatings" },
    ],
  },
  {
    id: "repairs",
    title: "Repairs & Prep",
    text: "The work under the floor that decides how long it lasts.",
    items: [
      { label: "Joint Filling & Crack Repair", path: "/joint-filling-crack-repair" },
      { label: "Moisture Mitigation", path: "/moisture-mitigation" },
      { label: "Line Striping & Floor Marking", path: "/line-striping" },
      { label: "Floor Cleaning & Maintenance", path: "/commercial-floor-maintenance" },
    ],
  },
  {
    id: "resilient",
    title: "Carpet Tile & LVT",
    items: [
      { label: "Commercial Carpet Tile", path: "/commercial-carpet-tile" },
      { label: "Commercial LVT & LVP", path: "/commercial-lvt-flooring" },
      { label: "Resilient Flooring", path: "/resilient-flooring" },
    ],
  },
];

export const ServicesHub = () => {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];
  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title="Services" description="" path="/services" ogImage={JOB.mfgEpoxy.src} />
      <StructuredData breadcrumbs={crumbs} />
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Commercial & Industrial Flooring Services"
        subhead="Epoxy flooring, polished concrete, urethane cement, specialty coatings and the repairs that go under them, for Dallas–Fort Worth, all of Texas and nationwide."
        image={JOB.mfgEpoxy.src}
        imageAlt={JOB.mfgEpoxy.alt}
        crumbs={crumbs}
      />
      <GroupGrid groups={SERVICE_GROUPS} />
      <ClientStrip light />
      <SiteFooter cta={{ title: "Not sure which floor you need?", text: "Tell us about the space and how it's used. We'll walk it and recommend the right system." }} />
    </div>
  );
};

export const IndustriesHub = () => {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ];
  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title="Industries" description="" path="/industries" ogImage={JOB.aeroMfg.src} />
      <StructuredData breadcrumbs={crumbs} />
      <SiteHeader />
      <PageHero
        eyebrow="Industries"
        title="Flooring for Every Industry We Serve"
        subhead="Warehouses, manufacturing plants, food processing, aviation, data centers, healthcare and commercial buildings, across Dallas–Fort Worth, all of Texas and nationwide."
        image={JOB.aeroMfg.src}
        imageAlt={JOB.aeroMfg.alt}
        crumbs={crumbs}
      />
      <GroupGrid groups={INDUSTRY_GROUPS.map((g) => ({ title: g.title, items: g.items }))} />
      <ClientStrip light />
      <SiteFooter cta={{ title: "Get a bid on your facility", text: "Send plans or a scope, or schedule a site walk." }} />
    </div>
  );
};

const PRICING = ["commercial-epoxy-flooring-cost-per-square-foot-dfw", "polished-concrete-cost-per-square-foot"];
const COMPARISONS = ["polished-concrete-vs-epoxy-dfw-warehouses", "urethane-cement-vs-epoxy-flooring", "novolac-vs-standard-epoxy", "sealed-vs-polished-concrete"];
const PLANNING = ["best-flooring-for-forklift-traffic", "best-flooring-for-commercial-kitchens", "esd-flooring-requirements-and-testing", "how-long-does-commercial-epoxy-installation-take"];

const pick = (slugs: string[]) =>
  slugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is (typeof ARTICLES)[number] => !!a)
    .map((a) => ({ label: a.title, path: `/blog/${a.slug}`, text: a.excerpt }));

export const ResourcesHub = () => {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ];
  const groups: Group[] = [
    { id: "pricing", title: "Pricing Guides", text: "What drives the cost of a commercial floor, and how to get a number you can trust.", items: pick(PRICING) },
    { id: "comparisons", title: "Floor Comparisons", text: "Side-by-side answers for the choices facility teams ask about most.", items: pick(COMPARISONS) },
    { id: "planning", title: "Planning & Selection", text: "Choosing the right floor for the space, and planning the install around your operation.", items: pick(PLANNING) },
    {
      id: "more",
      title: "More Resources",
      items: [
        { label: "Blog", path: "/blog", text: "All articles and project write-ups." },
        { label: "Commercial Case Studies", path: "/commercial-case-studies", text: "Real projects: the problem, the floor we chose and the result." },
        { label: "Capability Packet", path: "/capability-packet", text: "Company overview, capabilities and safety program for GCs and owners." },
        { label: "Our Process", path: "/our-process", text: "How a project runs from site walk to closeout." },
        { label: "All Services", path: "/services", text: "Every floor and coating we install." },
      ],
    },
  ];
  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title="Resources" description="" path="/resources" ogImage={JOB.hangar.src} />
      <StructuredData breadcrumbs={crumbs} />
      <SiteHeader />
      <PageHero
        eyebrow="Resource Center"
        title="Commercial Flooring Resource Center"
        subhead="Straight answers on what commercial floors cost, how the systems compare and how to plan an install, from the team that puts them down."
        image={JOB.hangar.src}
        imageAlt={JOB.hangar.alt}
        crumbs={crumbs}
      />
      <GroupGrid groups={groups.filter((g) => g.items.length > 0)} />
      <SiteFooter cta={{ title: "Have a question about your floor?", text: "Send us a few photos or plans and we'll give you a straight answer." }} />
    </div>
  );
};
