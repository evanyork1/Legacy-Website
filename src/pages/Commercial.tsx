import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import {
  ClientStrip,
  CommercialTestimonials,
  Eyebrow,
  FaqBlock,
  PageHero,
  ProcessPreview,
  ProofBar,
} from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";

/**
 * /commercial — the page that targets "commercial epoxy flooring" and
 * "commercial floor coatings". Other pages link here with that anchor text;
 * no other page uses these phrases in its title or H1.
 */

const PATH = "/commercial";
const TITLE = "Commercial Epoxy Flooring & Floor Coatings | DFW & Nationwide | Legacy Industrial Coatings";
const DESCRIPTION =
  "Commercial epoxy flooring and floor coatings for retail, restaurants, offices, healthcare, schools and dealerships. Testing-first installs, nights and weekends, bids in 24 hours. DFW based, nationwide.";
const HERO_IMG = "/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf-960.webp";

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";

const SPACES = [
  {
    label: "Retail & showrooms",
    url: "/retail-flooring",
    text: "Decorative flake, quartz or polished concrete that looks sharp on day one and holds up to carts and foot traffic, installed overnight so the store opens on time.",
  },
  {
    label: "Restaurants & commercial kitchens",
    url: "/restaurant-kitchen-flooring",
    text: "Slip-resistant, sanitary floors with integral cove. Urethane cement or KitchenGard where hot water, grease and thermal shock would break down standard epoxy.",
  },
  {
    label: "Offices & lobbies",
    url: "/office-flooring",
    text: "Polished concrete and resinous floors for lobbies, break rooms and back-of-house, alongside carpet tile and LVT for the office floor.",
  },
  {
    label: "Healthcare & clinics",
    url: "/healthcare-flooring",
    text: "Seamless, cleanable floors with integral cove, specified against your disinfectant list and phased around patient areas.",
  },
  {
    label: "Schools & universities",
    url: "/school-flooring",
    text: "Durable corridors, kitchens, locker rooms and labs, scheduled around the academic calendar.",
  },
  {
    label: "Auto dealerships & service",
    url: "/auto-dealership-flooring",
    text: "Showroom finishes up front, and chemical- and hot-tire-resistant coatings in the service drive and shop.",
  },
  {
    label: "Warehouses & distribution",
    url: "/warehouse-flooring",
    text: "Industrial epoxy or polished concrete with joint repair and aisle striping, phased around live racking.",
  },
];

const SYSTEMS = [
  {
    label: "Industrial epoxy flooring",
    url: "/industrial-epoxy",
    text: "Neogard CG Series epoxy from a 16-mil thin film to a 1/4\" troweled mortar: the workhorse for warehouses, back-of-house and production floors.",
  },
  {
    label: "Decorative flake floors",
    url: "/flake-floors",
    text: "Epoxy or fast-cure polyaspartic with color flake broadcast, for retail, restaurants, locker rooms and showrooms.",
  },
  {
    label: "Quartz flooring",
    url: "/quartz-flooring",
    text: "NeoQuartz broadcast and trowel systems: textured, colorful and slip-resistant for restrooms, kitchens and corridors.",
  },
  {
    label: "Urethane cement flooring",
    url: "/urethane-cement-flooring",
    text: "Neocrete for kitchens, food production, washdown and freezer areas where heat and thermal shock are part of the job.",
  },
  {
    label: "MMA flooring",
    url: "/mma-flooring",
    text: "Fast-cure methyl methacrylate systems for businesses that can only close for a night or a weekend.",
  },
  {
    label: "Polished concrete",
    url: "/concrete-polishing",
    text: "Commercial concrete polishing that turns the existing slab into a durable, low-maintenance finished floor.",
  },
  {
    label: "Carpet tile, LVT & resilient",
    url: "/resilient-flooring",
    text: "Carpet tile, LVP/LVT, VCT and sheet vinyl from the same contractor, so one crew covers every finish in the building.",
  },
  {
    label: "Systems library",
    url: "/materials",
    text: "Every system we install, with coat-by-coat build-ups, thickness and where each one is used.",
  },
];

const OPEN_BUSINESS = [
  "Night and weekend crews, so the store, restaurant or clinic opens on schedule",
  "Zone-by-zone phasing that keeps the rest of the building in use",
  "Low-odor and fast-cure options for occupied buildings",
  "Dust control during grinding, and protection of finished areas and adjacent trades",
  "One point of contact who coordinates with your GC, property manager or facility team",
];

const COST_FACTORS = [
  "Square footage and how the space is divided",
  "Removal of existing flooring, coatings or adhesives",
  "Moisture test results and whether a moisture-mitigating primer is needed",
  "The system and thickness (sealed concrete, thin-film epoxy, flake, quartz or urethane cement)",
  "Crack, joint and substrate repair, and integral cove base",
  "Phasing, after-hours and weekend work",
];

const FAQS = [
  {
    q: "How much does commercial epoxy flooring cost per square foot?",
    a: "Cost per square foot depends on preparation, moisture mitigation, the system and thickness, square footage, repairs and phasing. Send plans or request a site walk and we return a full bid within 24 hours of receiving plans.",
  },
  {
    q: "How much downtime does a commercial floor coating require?",
    a: "It depends on the system and the size of the space. We phase work zone by zone, work nights and weekends, and choose fast-cure systems such as polyaspartic or MMA when a business can only close briefly. Return-to-service times are confirmed against the product data before the schedule is set.",
  },
  {
    q: "Can you work after hours so we can stay open?",
    a: "Yes. Most of our commercial work happens around open businesses, with night and weekend crews, dust control and phasing planned with your team or GC.",
  },
  {
    q: "How long does commercial epoxy flooring last?",
    a: "Service life depends on the system thickness, the traffic and how the floor is maintained. A correctly specified, professionally prepared epoxy floor lasts for years, and renewing the topcoat in high-wear areas extends it further. We size the system to your traffic so it isn't under-built.",
  },
  {
    q: "Epoxy or polished concrete for a retail store?",
    a: "Polished concrete is a great fit when the slab is sound and you want a clean, low-maintenance look. Epoxy, flake or quartz make more sense when you need color, a branded look, extra slip resistance or a sealed surface over a damaged slab.",
  },
  {
    q: "Are commercial epoxy floors slippery?",
    a: "They don't have to be. We add traction aggregate or textured topcoats in wet areas, entrances and kitchens, and choose finishes such as flake or quartz where slip resistance matters most.",
  },
  {
    q: "Can you install over existing VCT or tile?",
    a: "Usually the existing VCT, tile or failed coating is removed so the new system bonds to sound concrete. We assess each floor first; sound existing coatings can sometimes be prepared and recoated.",
  },
  {
    q: "How do we maintain a commercial epoxy floor?",
    a: "Sweep or dust-mop daily and clean with a neutral cleaner and an auto-scrubber. Avoid harsh solvents unless the topcoat is rated for them. We provide maintenance guidance for your specific system at closeout.",
  },
];

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

const Commercial = () => {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Commercial Epoxy Flooring", url: PATH },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} ogImage={HERO_IMG} />
      <StructuredData
        services={[
          {
            name: "Commercial Epoxy Flooring",
            description:
              "Commercial epoxy flooring and floor coatings for retail, restaurants, offices, healthcare, schools, dealerships and warehouses.",
            url: PATH,
          },
        ]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={crumbs}
      />
      <SiteHeader />

      <PageHero
        eyebrow="Commercial Flooring Contractor"
        title="Commercial Epoxy Flooring & Floor Coatings"
        subhead="Commercial epoxy flooring is a seamless resin floor bonded to your concrete, built to handle foot traffic, carts, spills and daily cleaning. We install it, along with flake, quartz, urethane cement and polished concrete, for retail, restaurants, offices, healthcare, schools and dealerships, often after hours so you stay open."
        image={HERO_IMG}
        imageAlt="Commercial epoxy flooring installed by Legacy Industrial Coatings"
        crumbs={crumbs}
        rating
      />

      <ProofBar />
      <ClientStrip light />

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>By Space</Eyebrow>
          <h2 className={H2}>Commercial Floor Coatings for Every Space</h2>
          <p className={`${P} max-w-3xl`}>
            A restaurant kitchen, a showroom and a clinic corridor all need a commercial floor coating, but not the same
            one. We specify the system around how each space is used and cleaned.
          </p>
          <LinkCards items={SPACES} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Systems</Eyebrow>
          <h2 className={H2}>Commercial Epoxy Flooring Systems We Install</h2>
          <p className={`${P} max-w-3xl`}>
            We build on Neogard and Sherwin-Williams systems and install to the basis-of-design product or an approved
            equal. Every system page lists its coat-by-coat build-up.
          </p>
          <LinkCards items={SYSTEMS} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Open Businesses</Eyebrow>
          <h2 className={H2}>Commercial Floor Coating Without Closing Your Doors</h2>
          <p className={P}>
            Most of our commercial projects happen in buildings that are open for business. We plan the work around
            your hours, your customers and your other trades.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground font-body text-[16px] leading-[1.75]">
            {OPEN_BUSINESS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessPreview />

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Cost</Eyebrow>
          <h2 className={H2}>What Commercial Epoxy Flooring Costs</h2>
          <p className={P}>
            Commercial epoxy flooring is priced per square foot, but the slab and the schedule move the number more than
            the resin does. These are the factors that drive a commercial floor coating bid:
          </p>
          {/* TODO Evan: add typical $/SF ranges by system (thin-film epoxy, flake, quartz, urethane cement). */}
          <ul className="list-disc pl-6 space-y-3 mb-8 text-muted-foreground font-body text-[16px] leading-[1.75]">
            {COST_FACTORS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className={P}>
            Send drawings or request a site walk and we return a full bid within 24 hours of receiving plans, with the
            system, thickness and phasing spelled out line by line.
          </p>
          <a
            href="/blog/commercial-epoxy-flooring-cost-per-square-foot-dfw"
            className="inline-flex items-center gap-2 border border-border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-foreground transition-colors"
          >
            Commercial epoxy flooring cost guide <ArrowRight size={12} />
          </a>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Proof</Eyebrow>
          <h2 className={H2}>Recent Commercial Projects</h2>
          <p className={P}>
            See the problem, the system we chose and the result on recent commercial floors, from swim schools and
            restaurants to pharmaceutical manufacturing.
          </p>
          {/* TODO Evan: approve named commercial projects to feature here. */}
          <a
            href="/commercial-case-studies"
            className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-foreground transition-colors"
          >
            Commercial case studies <ArrowRight size={12} />
          </a>
        </div>
      </section>

      <CommercialTestimonials />

      <FaqBlock heading="Commercial Epoxy Flooring Questions" faqs={FAQS} />

      <SiteFooter
        cta={{
          title: "Get a bid on your commercial floor",
          text: "Send drawings or a scope and we'll return a system recommendation and full bid within 24 hours of receiving plans.",
        }}
      />
    </div>
  );
};

export default Commercial;
