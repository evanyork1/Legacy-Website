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
import { ProjectCards, projectsFor } from "@/components/site/SimplePage";
import { JOB } from "@/data/site/jobPhotos";
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
const HERO_IMG = JOB.mfgEpoxy.src;

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";

const GALLERY = [
  { ...JOB.hangar, caption: "Aircraft hangar" },
  { ...JOB.aeroMfg, caption: "Aerospace manufacturing" },
  { ...JOB.battery, caption: "Forklift battery charging area" },
  { ...JOB.quartzCove, caption: "Quartz floor with integral cove" },
  { ...JOB.foodPlant, caption: "Food plant, slip-resistant epoxy" },
  { ...JOB.shinyAfter, caption: "High-gloss warehouse epoxy" },
  { ...JOB.containAfter, caption: "Data center transformer containment" },
  { ...JOB.batteryArea, caption: "Distribution center epoxy" },
];

const CITIES = [
  ["Dallas", "dallas"], ["Fort Worth", "fort-worth"], ["Plano", "plano"], ["Frisco", "frisco"],
  ["McKinney", "mckinney"], ["Allen", "allen"], ["Richardson", "richardson"], ["Carrollton", "carrollton"],
  ["Lewisville", "lewisville"], ["Garland", "garland"], ["Coppell", "coppell"], ["Farmers Branch", "farmers-branch"],
] as const;

const SPACES = [
  {
    label: "Manufacturing & food plants",
    url: "/manufacturing-floor-coating",
    text: "Chemical-resistant epoxy and urethane cement for production floors, wash rooms and washdown areas.",
  },
  {
    label: "Retail & showrooms",
    url: "/retail-flooring",
    text: "Decorative flake, quartz or polished concrete that looks sharp on day one and holds up to carts and foot traffic, installed overnight so the store opens on time.",
  },
  {
    label: "Restaurants & commercial kitchens",
    url: "/restaurant-kitchen-flooring",
    text: "Slip-resistant, sanitary floors with integral cove. Urethane cement or epoxy slurry where hot water, grease and thermal shock would break down standard epoxy.",
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
    text: "The workhorse floor for warehouses, distribution centers and production, with a high-traffic urethane finish where forklifts run.",
  },
  {
    label: "Decorative flake floors",
    url: "/flake-floors",
    text: "Color flake floors with a polyurea base coat and polyaspartic topcoat, or epoxy flake, for retail, locker rooms and showrooms.",
  },
  {
    label: "Quartz flooring",
    url: "/quartz-flooring",
    text: "Quartz floors: textured, colorful and slip-resistant for restrooms, kitchens and corridors.",
  },
  {
    label: "Urethane cement flooring",
    url: "/urethane-cement-flooring",
    text: "Urethane cement for kitchens, food production, washdown and freezer areas where heat and thermal shock are part of the job.",
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
    label: "Commercial carpet tile",
    url: "/commercial-carpet-tile",
    text: "Carpet tile and planks for offices, schools, healthcare and hotels, with removal, floor prep and after-hours installs.",
  },
  {
    label: "Commercial LVT & LVP",
    url: "/commercial-lvt-flooring",
    text: "Glue-down and rigid-core luxury vinyl tile and plank, plus sheet vinyl and VCT, from the same crew.",
  },
];

const OPEN_BUSINESS = [
  "Night and weekend crews, so the store, restaurant or clinic opens on schedule",
  "Zone-by-zone phasing that keeps the rest of the building in use",
  "Low-odor and fast-cure options for occupied buildings",
  "Dust control during grinding, and protection of finished areas and adjacent trades",
  "One point of contact who coordinates with your GC, property manager or facility team",
];

const PRICES = [
  ["High-traffic epoxy", "$3.50–$10 / SF"],
  ["Polished concrete", "$2.25–$8 / SF"],
  ["Flake floors", "$7.50–$9 / SF"],
  ["Quartz flooring", "about $15 / SF"],
  ["Urethane cement", "about $21 / SF"],
  ["Integral cove base", "about $15 / LF"],
] as const;

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
    q: "What is commercial epoxy flooring?",
    a: "Commercial epoxy flooring is a seamless resin coating bonded to a prepared concrete slab. It creates a hard, easy-to-clean surface that stands up to foot traffic, carts, forklifts, spills and daily cleaning, and it can be finished in solid colors, flake or quartz with a slip-resistant texture.",
  },
  {
    q: "Is epoxy good for warehouse floors with forklift traffic?",
    a: "Yes. A properly prepared epoxy floor with a high-traffic urethane finish holds up to forklifts and pallet jacks and makes aisle and walkway striping last. We recently replaced failed striping in a 40,000 square foot Plano distribution center with exactly that system.",
  },
  {
    q: "How much does commercial epoxy flooring cost per square foot?",
    a: "Our standard high-traffic epoxy floors typically run about $3.50 to $10 per square foot, depending mostly on the size of the job: large open floors land near the low end and small rooms near the high end. Flake runs about $7.50 to $9, quartz about $15 and urethane cement about $21 per square foot, with integral cove base about $15 per linear foot. Prep, moisture, repairs and after-hours phasing confirm the final number.",
  },
  {
    q: "Do you install epoxy flooring near me?",
    a: "We are based in Plano, Texas and install epoxy floors across Dallas–Fort Worth, including Dallas, Fort Worth, Plano, Frisco, McKinney, Allen and Richardson, and across all of Texas, including Houston, Austin and San Antonio. We also travel for commercial and industrial projects nationwide.",
  },
  {
    q: "Can you work after hours so we can stay open?",
    a: "Yes. Most of our commercial work happens around open businesses, with night and weekend crews, dust control and phasing planned with your team or GC. Fast-cure systems are available when you can only close briefly.",
  },
  {
    q: "How long does commercial epoxy flooring last?",
    a: "Service life depends on the system, the traffic and how the floor is maintained. A correctly prepared commercial epoxy floor lasts for years, and renewing the topcoat in high-wear areas extends it further. We size the system to your traffic so it isn't under-built.",
  },
  {
    q: "Epoxy or polished concrete?",
    a: "Polished concrete is a great fit when the slab is sound and you want a clean, low-maintenance look. Epoxy makes more sense when you need color, safety striping, chemical resistance, a sealed surface for wet cleaning or a fix for a damaged slab.",
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
        eyebrow="Commercial & Industrial Epoxy Flooring"
        title="Commercial Epoxy Flooring & Floor Coatings"
        subhead="Commercial epoxy flooring is a seamless resin floor bonded to your concrete, built for foot traffic, forklifts, spills and daily cleaning. We install epoxy floors for warehouses, manufacturing plants, restaurants, retail, healthcare and schools across Dallas–Fort Worth, all of Texas and nationwide, often nights and weekends so you stay open."
        image={HERO_IMG}
        imageAlt={JOB.mfgEpoxy.alt}
        crumbs={crumbs}
        rating
      />

      <ProofBar />
      <ClientStrip light />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className={H2}>Epoxy Floors We've Installed</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((g) => (
              <figure key={g.src} className="m-0">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={g.src} alt={g.alt} loading="lazy" decoding="async" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-2 text-[13px] text-muted-foreground">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>By Space</Eyebrow>
          <h2 className={H2}>Epoxy Flooring and Floor Coatings for Every Building</h2>
          <p className={`${P} max-w-3xl`}>
            A warehouse aisle, a restaurant kitchen and a clinic corridor all need a commercial floor coating, but not the
            same one. We choose the system around how each space is used and cleaned.
          </p>
          <LinkCards items={SPACES} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Systems</Eyebrow>
          <h2 className={H2}>Types of Commercial Epoxy Floors We Install</h2>
          <p className={`${P} max-w-3xl`}>
            We install manufacturer-warranted materials and size each floor to your traffic, chemicals and cleaning, so
            it isn't under-built.
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
            Commercial epoxy flooring is priced per square foot, and the size of the job moves the price the most. These
            are our typical ranges:
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border mb-8">
            {PRICES.map(([name, price]) => (
              <div key={name} className="bg-background px-5 py-4 flex items-center justify-between gap-4">
                <span className="font-heading text-[14px] text-foreground">{name}</span>
                <span className="font-heading text-[14px] font-semibold text-foreground whitespace-nowrap">{price}</span>
              </div>
            ))}
          </div>
          <p className={P}>Within those ranges, these are the factors that set your number:</p>
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

      <ProjectCards items={projectsFor(PATH)} title="Recent Commercial Epoxy Projects" />

      <section className="py-20 md:py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Service Area</Eyebrow>
          <h2 className={H2}>Epoxy Flooring Near You</h2>
          <p className={`${P} max-w-3xl`}>
            Legacy Industrial Coatings is based in Plano, Texas and installs commercial and industrial epoxy floors across
            Dallas–Fort Worth and all of Texas, including Houston, Austin and San Antonio, with crews that travel for
            projects nationwide.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border mb-6">
            {CITIES.map(([name, slug]) => (
              <a key={slug} href={`/epoxy-flooring/${slug}`} className="group bg-background px-5 py-4 flex items-center justify-between hover:bg-secondary transition-colors">
                <span className="font-heading text-[14px] text-foreground group-hover:underline">Epoxy flooring {name}</span>
                <ArrowRight size={14} className="text-muted-foreground flex-shrink-0" />
              </a>
            ))}
          </div>
          <a href="/service-areas" className="inline-flex items-center gap-2 font-heading text-[12px] tracking-[0.2em] uppercase text-foreground hover:underline">
            All service areas <ArrowRight size={12} />
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
