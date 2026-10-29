import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero, FaqBlock } from "@/components/site/sections";
import SimplePage from "@/components/site/SimplePage";
import { SIMPLE_SYSTEMS } from "@/data/site/simple/systems";
import { PAGE_PHOTOS } from "@/data/site/jobPhotos";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import warehouseImage from "@/assets/industries/industrial-warehouse-2.jpg";

const faqs = [
  {
    q: "Can you design the layout from our racking plan?",
    a: "Yes. We can develop aisle, pedestrian, forklift and staging markings from your racking plan, then confirm dimensions, clearances and emergency-equipment access on site before installation.",
  },
  {
    q: "Which striping option holds up best under forklifts?",
    a: "Our Best option uses shot-blasted or ground lines with two-part epoxy or polyurea striping. It is the most durable option in our lineup under forklifts. Actual service life depends on traffic, turning, substrate condition and cleaning.",
  },
  {
    q: "Can you stripe after hours?",
    a: "Yes. We coordinate night and weekend installation around access, production and product cure requirements. Return-to-service timing is confirmed for the selected material and site conditions.",
  },
  {
    q: "Do you stripe parking lots and coated garages?",
    a: "Yes. We handle new layouts and restriping, ADA stalls and access aisles, fire lanes, arrows, stencils and wheel stops. Garage striping is selected for compatibility with the installed traffic coating.",
  },
  {
    q: "Can markings be temporary while we test a layout?",
    a: "Yes. Durable floor-marking tape is an option for temporary layouts. We review the floor condition, traffic and removal needs before recommending tape or a permanent coating.",
  },
];

const options = [
  {
    name: "Good",
    title: "Striping paint",
    text: "Striping paint over light preparation for lower-demand areas and layouts where periodic refreshing is acceptable.",
  },
  {
    name: "Better",
    title: "Epoxy striping",
    text: "Epoxy striping over mechanically prepared lines for a stronger bond and improved wear performance.",
  },
  {
    name: "Best",
    title: "Prepared lines + two-part system",
    text: "Shot-blasted or ground lines with two-part epoxy or polyurea striping. Our most durable option under forklift traffic.",
  },
];

export default function LineStriping() {
  const simple = SIMPLE_SYSTEMS["/line-striping"];
  if (simple) {
    return (
      <SimplePage
        path="/line-striping"
        metaTitle="Line Striping & Floor Marking DFW | Legacy Industrial Coatings"
        metaDescription="Warehouse floor marking, forklift lanes, pedestrian walkways and parking garage striping in DFW. Layout design, epoxy striping and after-hours installation."
        h1="Line Striping & Floor Marking"
        eyebrow="Safety & Marking"
        heroImage={PAGE_PHOTOS["/line-striping"].hero!.src}
        heroAlt={PAGE_PHOTOS["/line-striping"].hero!.alt}
        photos={PAGE_PHOTOS["/line-striping"].photos}
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Commercial Flooring", url: "/commercial" },
          { name: "Line Striping", url: "/line-striping" },
        ]}
        serviceName="Line Striping"
        content={simple}
        related={{
          title: "Where It's Used",
          links: [
            { label: "Warehouses & distribution", path: "/warehouse-flooring" },
            { label: "Manufacturing", path: "/manufacturing-floor-coating" },
            { label: "Parking structures", path: "/parking-garage-coatings" },
            { label: "Industrial epoxy flooring", path: "/industrial-epoxy" },
          ],
        }}
        closing={{ title: "Get a bid on your floor marking", text: "Send a layout or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans." }}
      />
    );
  }
  return (
    <div className="lcf min-h-screen bg-background text-foreground">
      <Seo
        title="Line Striping & Floor Marking DFW | Legacy Industrial Coatings"
        description="Warehouse floor marking, forklift lanes, pedestrian walkways, parking lot and garage striping in DFW. Layout design, epoxy striping and after-hours installation."
        path="/line-striping"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Line Striping & Floor Marking", url: "/line-striping" },
        ]}
        services={[
          {
            name: "Warehouse Line Striping & Floor Marking",
            description:
              "Warehouse aisle, pedestrian, forklift, staging and hazard markings with layout design and after-hours installation in DFW.",
            url: "/line-striping",
          },
          {
            name: "Parking Lot & Garage Striping",
            description:
              "New construction layout, restriping, ADA stalls and access aisles, fire lanes, arrows, stencils and wheel stops.",
            url: "/line-striping",
          },
        ]}
        faqs={faqs.map(({ q, a }) => ({ question: q, answer: a }))}
      />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Safety & marking / DFW"
          title="Line Striping & Floor Marking"
          subhead="Define traffic, protect clear routes and organize your floor—from warehouse aisles to parking structures."
          image={warehouseImage}
          imageAlt="Industrial warehouse interior with floor marking"
        />

        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Warehouse floor marking
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl text-background">
            Give every movement a clear path
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-slate-600">
            Mark aisles, pedestrian walkways, forklift lanes, staging areas,
            hazards and emergency equipment. We design from your racking plan,
            confirm field conditions and coordinate the layout with your
            facility team. Stenciling, directional arrows and location numbering
            make the plan readable on the floor.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="min-w-0 border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold">Clear aisles first</h3>
              <p className="leading-relaxed text-slate-600">
                OSHA 1910.22 and 1910.176 address walking-working surfaces,
                clear passageways and material-handling aisles. Markings support
                that plan; they do not replace required clearances, housekeeping
                or your facility's safety review.
              </p>
            </article>
            <article className="min-w-0 border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-bold">A consistent color plan</h3>
              <p className="mb-4 leading-relaxed text-slate-600">
                Coordinate ANSI Z535 safety colors with your facility's marking
                standard. A typical layout uses:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-600">
                <li>Yellow: aisles and traffic routes.</li>
                <li>Red: fire equipment.</li>
                <li>Green: safety and first aid.</li>
                <li>White: staging areas.</li>
                <li>Black-and-yellow: hazards.</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                Final colors and placement are confirmed with your safety team;
                not every facility convention is prescribed by ANSI Z535.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Good / Better / Best
            </h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-slate-600">
              Match preparation and material to the traffic—not just the color.
              Forklift turns, cleaning and slab condition all affect wear.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {options.map((option) => (
                <article key={option.name} className="min-w-0 border border-slate-200 bg-background p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {option.name}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{option.title}</h3>
                  <p className="leading-relaxed text-slate-600">{option.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-slate-600">
              Testing a new layout? Durable floor-marking tape provides a
              temporary option before committing to permanent lines. We also
              schedule after-hours installs to fit your operating windows.
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="mb-5 text-2xl font-bold md:text-3xl text-background">
            Parking lot & garage striping
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="min-w-0">
              <p className="mb-5 leading-relaxed text-slate-600">
                From new-construction layout to restriping, we coordinate
                parking geometry, traffic flow and marking details with your
                approved plan.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-600">
                <li>ADA stalls and access aisles.</li>
                <li>Fire lanes and traffic arrows.</li>
                <li>Stencils, numbering and wheel stops.</li>
                <li>New layouts and refreshed existing markings.</li>
              </ul>
            </div>
            <div className="min-w-0 space-y-4 leading-relaxed text-slate-600">
              <p>
                Waterborne traffic paint is an option for routine lot marking.
                Thermoplastic can suit durable pavement markings where the
                substrate and application permit it. Epoxy is considered where
                adhesion and wear demands call for a compatible two-part system.
              </p>
              <p>
                In garages, material compatibility comes first. We select
                striping compatible with Legacy High Traffic Urethane traffic coatings and confirm
                preparation, application windows and cure requirements with the
                specified coating system.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-foreground py-16 text-background">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-background/70">
              One coordinated scope
            </p>
            <h2 className="mb-5 text-2xl font-bold md:text-3xl text-background">
              Coating + striping in one mobilization
            </h2>
            <p className="max-w-3xl leading-relaxed text-background/70">
              Plan the floor system and markings together. We coordinate
              preparation, coating cure, layout and striping so the finished
              floor returns to service as one complete installation. One team
              manages the interfaces, schedule and closeout documentation.
            </p>
          </div>
        </section>

        <FaqBlock heading="Line striping questions" faqs={faqs} />
      </main>
      <SiteFooter cta={{ title: "Put a clear plan on your floor", text: "Send your racking plan, parking layout or marking scope. We'll review preparation, materials and installation windows with you." }} />
    </div>
  );
}
