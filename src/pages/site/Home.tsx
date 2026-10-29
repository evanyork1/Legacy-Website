import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Boxes,
  Building2,
  Diamond,
  Droplets,
  Grid3X3,
  HardHat,
  Layers,
  MapPin,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
  Car,
  Paintbrush,
  CloudRain,
} from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import {
  InlineBookCTA,
  SectionHeading,
  StarRating,
  Eyebrow,
  ProofBar,
  ClientStrip,
  ProcessPreview,
  CommercialTestimonials,
  FeaturedCaseStudies,
  CapabilityPacketBand,
} from "@/components/site/sections";
import { StructuredData } from "@/components/seo/StructuredData";
import { scrollToRequestInfo } from "@/lib/requestInfo";
import { ALL_INDUSTRIES, BUSINESS } from "@/data/site/nav";
import { INDUSTRY_PAGES } from "@/data/site/industries";
import { SERVICE_AREA_CITIES } from "@/data/serviceAreaCities";

import imgDataCenter from "@/assets/industries/data-center-1.jpg";
// TODO Evan: replace with the crew photo uploaded in the Lovable draft (about-legacy-team.webp).
import aboutImage from "@/assets/polishing-warehouse.jpg";

/* Commercial homepage FAQs (rendered below and emitted as FAQPage schema). */
const homepageFaqs = [
  {
    question: "Which commercial floor systems do you install?",
    answer:
      "Epoxy and self-leveling resin, urethane cement, quartz broadcast, static-control (ESD) floors, secondary containment linings, deck and traffic coatings, integral cove base, moisture mitigation, line striping and mechanically polished or sealed concrete — plus carpet tile, LVP/LVT, VCT and sheet vinyl, so one contractor can cover every floor finish in the building.",
  },
  {
    question: "How long will a commercial resin floor last?",
    answer:
      "With proper slab prep and the right system for the traffic, most resin floors deliver 10–20 years of service. Heavy forklift or thermal-shock areas may need a periodic topcoat to stay at that range; polished concrete can last for the life of the slab with routine maintenance.",
  },
  {
    question: "How long does an install take?",
    answer:
      "It depends on square footage, prep and cure times. Small rooms are often finished in a few days; large facilities are phased zone by zone over nights and weekends. You get a written schedule with cure and return-to-service times before we mobilize.",
  },
  {
    question: "Do you work with general contractors on new construction?",
    answer:
      "Yes. We bid from plans within 24 hours of receiving them, submit product data and samples on your schedule, moisture-test the slab, coordinate with the surrounding trades and deliver a closeout package with warranty documents. $5M bonding capacity is available.",
  },
  {
    question: "Can you install in a facility that stays open?",
    answer:
      "Yes. We stage work in zones, run night and weekend shifts, contain dust and odor, and pick fast-cure systems where downtime is tight so production, tenants or customers keep moving.",
  },
  {
    question: "What parts of DFW do you serve?",
    answer:
      "The full Dallas–Fort Worth Metroplex from our Plano office — including Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Richardson, Irving, Arlington, Garland, Carrollton, Lewisville and Denton — plus North Texas. We also travel for multi-site and national programs, so retail, food-service and industrial clients can use one flooring partner across their locations.",
  },
];

/** Short card copy per industry (keyed by route). */
const INDUSTRY_CARD_DESC: Record<string, string> = {
  "/data-center-flooring": "ESD white space, battery rooms, fuel containment and generator yards — every room of the campus.",
  "/electronics-manufacturing-flooring": "Static-control resin floors to ANSI/ESD S20.20 for electronics and semiconductor lines.",
  "/aerospace-hangar-flooring": "Clean, high-gloss resin floors for hangars, MRO shops, and assembly bays.",
  "/warehouse-flooring": "Heavy-duty epoxy, joint fill and striping built for forklift traffic and hard use.",
  "/manufacturing-floor-coating": "Chemical-resistant resin floors for plants and production lines.",
  "/food-processing-flooring": "Urethane cement for hot wash-down, thermal shock and sanitary production floors.",
  "/pharmaceutical-flooring": "Seamless, cleanable floors that hold up to sanitation chemistry and audits.",
  "/agriculture-facility-flooring": "Sanitary, wash-down resin floors for barns, plants, and processing spaces.",
  "/healthcare-flooring": "Seamless, easy-to-clean resin floors for hospitals, labs, and clinics.",
  "/pharmacy-cleanroom-flooring": "Monolithic resin with integral cove base for compounding rooms and cleanrooms.",
  "/restaurant-kitchen-flooring": "Slip-resistant urethane cement and cove base for kitchens and walk-ins.",
  "/retail-flooring": "Durable resin and polished concrete floors that hold up to foot traffic.",
  "/office-flooring": "Polished concrete and decorative resin for modern workspaces and lobbies.",
  "/hotel-flooring": "Polished concrete and decorative resin floors for back-of-house and public spaces.",
  "/school-flooring": "Long-lasting epoxy and polished concrete for schools, labs, and gyms.",
  "/multifamily-flooring": "Epoxy and polished concrete for garages, breezeways, and amenity spaces.",
  "/auto-dealership-flooring": "Showroom polish and chemical-resistant service bays built for lifts and fluids.",
  "/parking-garage-coatings": "Vehicular traffic membranes and striping for parking decks and ramps.",
};

const industryImage = (path: string) =>
  path === "/data-center-flooring" ? imgDataCenter : INDUSTRY_PAGES.find((p) => p.path === path)?.heroImage;

const SYSTEM_CARDS = [
  { name: "Epoxy", desc: "Seamless high-build epoxy and self-leveling systems for tough commercial spaces.", path: "/industrial-epoxy", icon: Droplets },
  { name: "Urethane Cement", desc: "Cementitious urethane systems built for heat, chemicals, and wet processing.", path: "/urethane-cement-flooring", icon: Layers },
  { name: "Quartz Flooring", desc: "Colored quartz broadcast into resin for a sanitary, non-slip commercial surface.", path: "/quartz-flooring", icon: Grid3X3 },
  { name: "Polished Concrete", desc: "Diamond-ground and densified polished concrete for a low-maintenance, high-gloss finish.", path: "/concrete-polishing", icon: Diamond },
  { name: "Static-Control (ESD)", desc: "Grounded ESD and static-dissipative resin systems for electronics, aerospace, and data centers.", path: "/esd-static-control-flooring", icon: Zap },
  { name: "Secondary Containment", desc: "Lined dikes, berms, and pits for fuel, chemical, and transformer oil containment.", path: "/secondary-containment-coatings", icon: ShieldCheck },
  { name: "Deck Coatings", desc: "Waterproof pedestrian and vehicular deck coatings for parking decks, balconies, and rooftops.", path: "/deck-coatings", icon: Car },
  { name: "Sealed Concrete", desc: "Densified and sealed concrete for a clean, low-cost, low-maintenance commercial floor.", path: "/concrete-sealing", icon: Boxes },
  { name: "Moisture Mitigation", desc: "Vapor-control primers that protect resin and resilient floors on high-moisture slabs.", path: "/moisture-mitigation", icon: CloudRain },
  { name: "Line Striping", desc: "Warehouse aisle marking, safety zones, and parking striping in one mobilization.", path: "/line-striping", icon: Paintbrush },
  { name: "Integral Cove Base", desc: "Seamless resin cove base for sanitary wash-down rooms and kitchens.", path: "/epoxy-cove-base", icon: Building2 },
  { name: "Carpet Tile & LVP", desc: "Carpet tile, LVP/LVT, VCT and sheet vinyl for offices, retail, healthcare and multifamily — alongside your resin and polished floors.", path: "/resilient-flooring", icon: Grid3X3 },
  { name: "Maintenance", desc: "Manufacturer-trained cleaning, resealing, repairs, and recoat programs.", path: "/commercial-floor-maintenance", icon: Wrench },
];

const WHO_WE_SERVE = [
  {
    icon: Building2,
    title: "Owners & Developers",
    desc: "Your floor is part of the asset. We match the system to the use, the budget and the hold period, then own it from submittal through warranty.",
  },
  {
    icon: HardHat,
    title: "General Contractors",
    desc: "Bids inside 24 hours of plans, submittals when you need them, and a crew that sequences around the other trades so your punch list stays short.",
  },
  {
    icon: Users,
    title: "Facility Teams",
    desc: "Repairs, recoats and complete replacements scheduled around production — nights, weekends and zone-by-zone phasing included.",
  },
];

const FEATURED_CITIES = [
  "dallas", "fort-worth", "plano", "frisco", "mckinney", "allen",
  "richardson", "lewisville", "carrollton", "garland", "coppell", "flower-mound",
];

const Home = () => {
  const cities = FEATURED_CITIES.map((s) => SERVICE_AREA_CITIES.find((c) => c.slug === s)).filter(
    (c): c is (typeof SERVICE_AREA_CITIES)[number] => Boolean(c),
  );

  return (
    <>
      <Helmet>
        <title>Legacy Industrial Coatings | Commercial & Industrial Epoxy Flooring in Dallas & All of Texas</title>
        <meta
          name="description"
          content="Commercial and industrial epoxy flooring, polished concrete, urethane cement and line striping for Dallas–Fort Worth, all of Texas and nationwide. Bids within 24 hours of plans."
        />
        <meta name="author" content="Legacy Industrial Coatings" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas-Fort Worth Metroplex" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legacy Industrial Coatings | Commercial & Industrial Epoxy Flooring in Dallas & All of Texas" />
        <meta
          property="og:description"
          content="Commercial and industrial epoxy flooring, polished concrete, urethane cement and line striping for Dallas–Fort Worth, all of Texas and nationwide. Bids within 24 hours of plans."
        />
        <meta property="og:image" content="https://legacyindustrialcoatings.com/og/legacy-commercial-industrial-flooring.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Seamless commercial resin floor in an aircraft hangar installed by Legacy Industrial Coatings" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com" />
        <meta property="og:site_name" content="Legacy Industrial Coatings" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legacy Industrial Coatings | Commercial & Industrial Epoxy Flooring in Dallas & All of Texas" />
        <meta name="twitter:description" content="Commercial and industrial epoxy flooring, polished concrete, urethane cement and line striping for Dallas–Fort Worth, all of Texas and nationwide. Bids within 24 hours of plans." />
        <meta name="twitter:image" content="https://legacyindustrialcoatings.com/og/legacy-commercial-industrial-flooring.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0f2440" />
        <link rel="canonical" href="https://legacyindustrialcoatings.com" />
        <link
          rel="preload"
          as="image"
          href="/lovable-uploads/701db69b-4439-4779-9115-583d175298af-960.webp"
          imageSrcSet="/lovable-uploads/701db69b-4439-4779-9115-583d175298af-960.webp 960w, /lovable-uploads/701db69b-4439-4779-9115-583d175298af-1600.webp 1600w"
          imageSizes="100vw"
        />
      </Helmet>

      <StructuredData
        services={[
          { name: "Mechanical Polished Concrete", description: "Diamond-ground, densified, and burnished polished concrete floors for DFW commercial, retail, and warehouse facilities.", url: "/concrete-polishing" },
          { name: "Industrial Epoxy Flooring", description: "High-traffic epoxy and industrial floor coatings for warehouses, manufacturing, and aviation hangars.", url: "/industrial-epoxy" },
          { name: "Commercial Epoxy Flooring", description: "Commercial epoxy flooring and floor coatings for retail, restaurants, offices, healthcare, schools and dealerships.", url: "/commercial" },
        ]}
        faqs={homepageFaqs}
      />

      <div className="lcf min-h-screen bg-background overflow-x-hidden">
        <SiteHeader />
        <main>
          {/* Hero */}
          <section className="relative h-[calc(100svh-4rem)] md:h-[calc(100vh-5rem)] min-h-[560px] flex items-end pb-12 md:pb-28">
            <div className="absolute inset-0">
              <img
                src="/lovable-uploads/701db69b-4439-4779-9115-583d175298af-960.webp"
                srcSet="/lovable-uploads/701db69b-4439-4779-9115-583d175298af-960.webp 960w, /lovable-uploads/701db69b-4439-4779-9115-583d175298af-1600.webp 1600w"
                sizes="100vw"
                alt="Seamless commercial resin floor in a DFW aircraft hangar installed by Legacy Industrial Coatings"
                className="w-full h-full object-cover"
                width={1600}
                height={940}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
              <p className="font-heading text-[12px] md:text-[13px] font-medium tracking-[0.3em] uppercase text-background/70 mb-4">
                Dallas–Fort Worth · All of Texas · Nationwide
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[0.95] mb-6 md:mb-8 max-w-5xl text-balance">
                Commercial &amp; Industrial Flooring
              </h1>
              <div className="mb-8">
                <StarRating />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
                <p className="text-background/60 text-base md:text-xl font-body max-w-xl leading-relaxed">
                  Commercial epoxy flooring, polished concrete, urethane cement and specialty floor coatings for
                  warehouses, manufacturing facilities, data centers and commercial properties across Dallas, Fort Worth,
                  all of Texas and nationwide.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#request-info"
                    onClick={scrollToRequestInfo}
                    className="group inline-flex items-center gap-3 bg-background text-foreground border border-background px-6 py-3 md:px-8 md:py-4 font-heading text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-transparent hover:text-background transition-all duration-500 flex-shrink-0"
                  >
                    Request an Estimate
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-3 border border-background/30 text-background px-6 py-3 md:px-8 md:py-4 font-heading text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-all duration-500 flex-shrink-0"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <ProofBar />

          <ClientStrip />

          {/* Systems */}
          <section id="systems" className="py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <SectionHeading
                eyebrow="What We Install"
                title="Flooring Solutions"
                text="Epoxy, polished concrete, urethane cement, carpet tile and LVP, matched to the job, across DFW, all of Texas and nationwide."
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SYSTEM_CARDS.map((s) => (
                  <a key={s.path} href={s.path} className="block h-full">
                    <div className="bg-background border border-border p-10 md:p-12 group hover:bg-secondary transition-colors duration-500 h-full">
                      <s.icon
                        size={24}
                        className="text-foreground/30 mb-8 group-hover:text-foreground transition-colors duration-500"
                        strokeWidth={1.5}
                      />
                      <h3 className="font-heading font-semibold text-[15px] uppercase tracking-[0.15em] text-foreground mb-4 group-hover:underline">
                        {s.name}
                      </h3>
                      <p className="text-muted-foreground text-[14px] leading-[1.7] mb-6">{s.desc}</p>
                      <span className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground">
                        Learn More <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="/commercial"
                className="inline-flex items-center gap-2 mt-10 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline"
              >
                See all commercial flooring <ArrowRight size={12} />
              </a>
            </div>
          </section>

          <InlineBookCTA />

          {/* Industries */}
          <section id="industries" className="py-24 md:py-40 bg-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <SectionHeading
                eyebrow="Where We Work"
                title="Industries We Serve"
                text="Each sector loads a slab differently. We pick the system around your traffic, chemicals and cleaning."
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ALL_INDUSTRIES.map((ind) => (
                  <a key={ind.path} href={ind.path} className="group h-full block">
                    <div className="relative overflow-hidden h-full flex flex-col">
                      <div className="aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={industryImage(ind.path)}
                          alt={`${ind.label} commercial flooring installation in DFW`}
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6 bg-background border border-border border-t-0 flex-1">
                        <h3 className="font-heading font-semibold text-[15px] text-foreground mb-2 group-hover:underline">
                          {ind.label}
                        </h3>
                        <p className="text-muted-foreground text-[13px] leading-relaxed">
                          {INDUSTRY_CARD_DESC[ind.path]}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Featured: data centers */}
          <section className="relative bg-foreground text-background overflow-hidden">
            <img
              src={imgDataCenter}
              alt="Data center hall with sealed resin floor and server racks"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28">
              <Eyebrow light>Featured Industry</Eyebrow>
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold leading-[1.1] mb-6 max-w-3xl text-balance">
                Data Center Solutions
              </h2>
              <p className="text-background/70 font-body text-[16px] leading-[1.8] max-w-2xl mb-10">
                Static-control floors, battery and electrical rooms, fuel and transformer containment, and finished
                office space — flooring for every part of a data center campus, in DFW and beyond.
              </p>
              <a
                href="/data-center-flooring"
                className="group inline-flex items-center gap-3 bg-background text-foreground border border-background px-8 py-4 font-heading text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-transparent hover:text-background transition-all duration-500"
              >
                Explore Data Center Flooring
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </section>

          <InlineBookCTA />

          {/* Why Legacy */}
          <section id="about-services" className="py-24 md:py-36 bg-background border-t border-border">
            <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
              <Eyebrow>Why Legacy</Eyebrow>
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-10 text-balance">
                How Legacy Approaches a Commercial Floor
              </h2>
              <p className="text-muted-foreground font-body text-[16px] leading-[1.8] mb-12">
                Every floor we install starts with the slab: moisture readings, profile, joints and cracks. From
                there we specify the resin, cementitious or polished system that suits the traffic, chemicals and
                sanitation the room will see — then install it to the manufacturer's data sheet with documented
                thickness and cure times. Plants, warehouses, hangars, data centers and labs across DFW run on
                floors our crews put down.
              </p>
              <h3 className="font-heading font-semibold text-[18px] text-foreground mb-3">For Owners &amp; Developers</h3>
              <p className="text-muted-foreground font-body text-[15px] leading-[1.85] mb-10">
                Picking the wrong system is the costliest flooring mistake. We weigh life-cycle cost against first
                cost — urethane cement where hot wash-down happens, high-build epoxy under forklifts, polished
                concrete in lobbies — and give you one accountable contact from spec to closeout.
              </p>
              <h3 className="font-heading font-semibold text-[18px] text-foreground mb-3">For General Contractors</h3>
              <p className="text-muted-foreground font-body text-[15px] leading-[1.85] mb-10">
                Flooring lands late in the schedule, where every lost day threatens turnover. Send plans and the full
                bid comes back within 24 hours; submittals, slab moisture testing and trade coordination follow on
                your calendar. Prequal is simple — $5M bonding capacity and a ready capability packet.
              </p>
              <h3 className="font-heading font-semibold text-[18px] text-foreground mb-3">For Facility &amp; Plant Teams</h3>
              <p className="text-muted-foreground font-body text-[15px] leading-[1.85]">
                When a floor fails mid-operation, you need a crew that can work around the line. We mask and protect
                equipment, phase the job in zones and schedule nights or weekends so shipping and production don't
                stop.
              </p>
            </div>
          </section>

          {/* Who we serve */}
          <section id="who-we-serve" className="py-24 md:py-36 bg-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <Eyebrow>Our Clients</Eyebrow>
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-12 md:mb-16">
                Who We Serve
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {WHO_WE_SERVE.map((item) => (
                  <div key={item.title} className="bg-background p-10 md:p-12 border border-border h-full">
                    <item.icon size={28} className="text-foreground/30 mb-8" strokeWidth={1.5} />
                    <h3 className="font-heading font-semibold text-[17px] text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-[15px] leading-[1.8]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ProcessPreview />
          <FeaturedCaseStudies />
          <CommercialTestimonials />
          <CapabilityPacketBand />

          {/* About */}
          <section id="about" className="py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-6">
                  <div className="relative">
                    <img
                      src={aboutImage}
                      alt="Polished concrete warehouse floor with safety striping installed by Legacy Industrial Coatings"
                      loading="lazy"
                      decoding="async"
                      width={1170}
                      height={970}
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-foreground/10 hidden lg:block" />
                  </div>
                </div>
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="font-heading text-[12px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
                    About Us
                  </p>
                  <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-8 text-balance">
                    DFW Based, Nationwide.
                  </h2>
                  <p className="text-muted-foreground font-body text-[16px] leading-[1.8] mb-8">
                    For almost a decade: our own crews, our own grinders and a project manager on every job. We run commercial resin and
                    polishing work from our Plano office across DFW and on projects nationwide, with a daily photo log from first
                    pass to final coat.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/about"
                      className="group inline-flex items-center gap-3 border border-foreground text-foreground px-8 py-4 font-heading text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
                    >
                      Our Company
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#request-info"
                      onClick={scrollToRequestInfo}
                      className="group inline-flex items-center gap-3 bg-foreground text-background border border-foreground px-8 py-4 font-heading text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-all duration-500"
                    >
                      Request an Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Locations */}
          <section id="locations" className="py-24 md:py-36 bg-secondary border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <div className="mb-12 md:mb-16 max-w-3xl">
                <Eyebrow>Nationwide Coverage</Eyebrow>
                <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-6">DFW Based. Built for Nationwide Work.</h2>
                <p className="text-muted-foreground font-body text-[16px] leading-[1.8]">We mobilize our crews for commercial projects and multi-site programs across the country. A dedicated project manager coordinates the schedule, testing, installation and closeout — with the same standards at every location.</p>
              </div>
              <SectionHeading
                eyebrow="Where We Work"
                title="DFW Locations We Serve"
                text="Commercial epoxy and polished concrete flooring across the Dallas–Fort Worth Metroplex."
              />
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
                {cities.map((c) => (
                  <a
                    key={c.slug}
                    href={`/epoxy-flooring/${c.slug}`}
                    className="group flex items-start gap-3 bg-background p-6 h-full hover:bg-foreground transition-colors duration-300"
                  >
                    <MapPin size={16} className="mt-1 text-muted-foreground group-hover:text-background/70 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-[15px] text-foreground group-hover:text-background">
                        {c.name}
                      </h3>
                      <p className="text-[12px] text-muted-foreground group-hover:text-background/60 mt-0.5">
                        {c.county}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="/service-areas"
                className="inline-flex items-center gap-2 mt-10 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline"
              >
                All service areas <ArrowRight size={12} />
              </a>
            </div>
          </section>

          <InlineBookCTA />

          {/* FAQ */}
          <section id="faq" className="py-24 md:py-40 bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] mb-16">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-border border-t border-border">
                {homepageFaqs.map((item) => (
                  <div key={item.question} className="py-8 md:py-10">
                    <h3 className="font-heading font-semibold text-[18px] md:text-[20px] text-foreground mb-3 leading-snug">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground font-body text-[15px] leading-[1.8]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Home;
