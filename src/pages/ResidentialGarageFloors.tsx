import { ArrowRight, Calendar } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BTN, DataTable, Eyebrow, FaqBlock, PageHero, StarRating } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { openCalBooking } from "@/lib/calBooking";
import { BUSINESS } from "@/data/site/nav";

/**
 * /garagefloors — the one residential page (footer: Residential → Garage
 * Floors). Homeowners book an in-person estimate through Cal.com only; the
 * commercial Request Information form is not shown here.
 */

const PATH = "/garagefloors";
const TITLE = "Garage Floor Coatings in Dallas–Fort Worth | Polyurea Flake | Legacy Industrial Coatings";
const DESCRIPTION =
  "Polyurea and polyaspartic flake garage floor coatings in Dallas–Fort Worth. Diamond-ground prep, one-day install, park in 24–48 hours, lifetime warranty. Set up an in-person estimate.";
const U = (id: string) => `/lovable-uploads/${id}-960.webp`;
const HERO = U("b4732a11-b0eb-48f7-9950-d9c8e186ab97");

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const P = "text-muted-foreground font-body text-[16px] leading-[1.85] mb-6";
const A = "text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground";

const EstimateCalButton = ({ light = false, label = "Set Up an In-Person Estimate" }: { light?: boolean; label?: string }) => (
  <button
    type="button"
    onClick={openCalBooking}
    className={`${BTN} ${
      light
        ? "bg-background text-foreground border border-background hover:bg-transparent hover:text-background"
        : "bg-foreground text-background border border-foreground hover:bg-foreground/90"
    }`}
  >
    <Calendar size={14} />
    {label}
    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
  </button>
);

const PROOF = [
  { v: "5.0 ★", l: "201+ Google reviews" },
  { v: "1 day", l: "Typical install" },
  { v: "24–48 hrs", l: "Park on it" },
  { v: "Lifetime", l: "Limited warranty" },
];

const STEPS = [
  { t: "In-person estimate", d: "We measure the garage, check the slab for cracks, pitting, oil and moisture, show you flake samples and give you a written price." },
  { t: "Diamond grinding", d: "Dust-controlled diamond grinders open up the concrete so the coating bonds into it instead of sitting on top. This step is why our floors don't peel." },
  { t: "Crack and pit repair", d: "Cracks, spalls and pitting are filled and ground flush so they don't telegraph through the finished floor." },
  { t: "Polyurea base coat", d: "A fast-curing polyurea base coat soaks into the ground concrete and locks on, with a little flexibility for Texas temperature swings." },
  { t: "Full flake broadcast", d: "Decorative flake is broadcast to full coverage while the base is wet, then the excess is scraped and vacuumed for a uniform texture." },
  { t: "Polyaspartic topcoat", d: "A clear, UV-stable polyaspartic topcoat seals the flake. It won't yellow in the sun and resists hot tires, oil, salt and household chemicals." },
];

const COMPARE = {
  columns: ["Polyurea + polyaspartic (ours)", "DIY epoxy kit / garage floor paint"],
  rows: [
    { label: "Surface prep", values: ["Diamond-ground concrete", "Acid etch or scrub only"] },
    { label: "Install time", values: ["Usually one day", "Several days with cure time"] },
    { label: "Hot tire pickup", values: ["Built to resist it", "Common in Texas summers"] },
    { label: "Sunlight", values: ["UV-stable, won't yellow", "Yellows and fades"] },
    { label: "Thickness", values: ["Full-broadcast, multi-coat system", "One or two thin coats"] },
    { label: "Warranty", values: ["Limited lifetime", "Usually none"] },
  ],
};

const GALLERY = [
  { before: "64f61c96-ce73-4ef1-adb6-6e3d1644de30", after: "303d5679-dcda-4e82-b1da-4e309d1fb5dd", title: "From stained to finished", text: "A stained, cracked two-car garage ground, repaired and coated with a full-broadcast polyurea flake floor." },
  { before: "f57a3511-7157-4235-ba23-509e1df21d59", after: "002da108-5855-41da-aaea-3e1d1a9de98e", title: "Complete garage makeover", text: "An ordinary concrete floor turned into a seamless, easy-clean flake finish." },
  { before: "c499e5d5-764f-4feb-b2be-635e5b67ea69", after: "e98aa310-42f2-46db-ac00-8502f2d71097", title: "Large garage and workshop", text: "Bigger garages and shops get the same grind, repair and polyurea system." },
  { before: "1e76caef-6851-4869-9f2e-df3b59bf64ef", after: "ef50769f-f8f0-4bd8-9f4c-5238689c933b", title: "Prep you can see", text: "Every floor starts with diamond grinding and repair, which is what keeps it from peeling." },
];

const CITIES = ["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Prosper", "Celina", "Little Elm", "The Colony", "Lewisville", "Flower Mound", "Coppell", "Carrollton", "Richardson", "Fort Worth", "Argyle"];

const FAQS = [
  { q: "How long does a garage floor coating take?", a: "Most residential garages are ground, repaired and coated in one day. You can walk on the floor that evening in most cases and park on it in 24–48 hours." },
  { q: "How much does a garage floor coating cost in Dallas–Fort Worth?", a: "A typical 2–3 car garage with our polyurea flake system runs $2,800–$4,500. Size, crack and pit repair, removal of an old coating and options like stem walls or extra grip change the price, so we give you an exact written number at the in-person estimate." },
  { q: "Is polyurea better than epoxy for a garage floor?", a: "For most Texas garages, yes. Polyurea cures fast and bonds deep into diamond-ground concrete, and a polyaspartic topcoat is UV-stable, so it won't yellow or soften the way many epoxy kits do in summer heat. Epoxy still has a place, but DIY epoxy and garage floor paint are the floors we most often tear out." },
  { q: "Will hot tires lift the coating?", a: "Hot tire pickup happens when a thin coating is rolled onto poorly prepared concrete. Our floors are diamond ground and built as a full multi-coat system, which is designed to resist hot tires." },
  { q: "Is a flake garage floor slippery?", a: "The flake gives the surface texture on its own. If you want more grip near the door or where cars drip water, we add anti-slip aggregate to the topcoat and show you a sample first." },
  { q: "Can you coat over my existing epoxy or painted floor?", a: "Failed coatings are ground off so the new system bonds to clean concrete. That is included in your estimate if your garage needs it." },
  { q: "How do I clean and maintain it?", a: "Sweep as needed and mop with a mild household cleaner. No waxing or special products." },
  { q: "Do you offer a warranty and financing?", a: "Yes. Residential garage floors come with our limited lifetime warranty against peeling, discoloration and cracking under normal home use, and financing is available with as little as $99 down and 0% options." },
];

const GarageFloors = () => {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Residential", url: PATH },
    { name: "Garage Floors", url: PATH },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={TITLE} description={DESCRIPTION} path={PATH} ogImage={HERO} />
      <StructuredData
        services={[
          {
            name: "Garage Floor Coatings",
            description:
              "Polyurea and polyaspartic flake garage floor coatings for homes across Dallas–Fort Worth: diamond-ground prep, one-day install, limited lifetime warranty.",
            url: PATH,
          },
        ]}
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={crumbs}
      />
      <SiteHeader />

      <PageHero
        eyebrow="Residential · Dallas–Fort Worth"
        title="Garage Floor Coatings in Dallas–Fort Worth"
        subhead="Polyurea and polyaspartic flake garage floors, diamond-ground and installed in one day. Park on it in 24–48 hours, backed by a limited lifetime warranty."
        image={HERO}
        imageAlt="Finished polyurea flake garage floor coating in a Dallas–Fort Worth home"
        rating
        action={<EstimateCalButton light />}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Video</Eyebrow>
          <h2 className={H2}>See a Garage Floor Install</h2>
          <div className="relative aspect-video bg-foreground">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/LIHMnK4rbyc"
              title="Legacy Industrial Coatings garage floor coating installation"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {PROOF.map((s) => (
              <div key={s.l} className="bg-background py-8 px-4 text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.v}</div>
                <div className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Garage Floors</Eyebrow>
          <h2 className={H2}>A Garage Floor Coating Built for Texas</h2>
          <p className={P}>
            A garage floor coating is a resin system bonded to your concrete that seals out oil, water and road grime and
            turns a dusty, stained slab into a clean, finished floor. Ours is a full-broadcast polyurea flake system with a
            polyaspartic topcoat: the same fast-curing chemistry we use in commercial showrooms and service drives, sized
            for your home.
          </p>
          <p className={P}>
            Dallas–Fort Worth garages see 100°F summers, hot tires, freezes and humid swings. Thin epoxy kits and garage
            floor paint can peel, yellow and lift under those conditions. A diamond-ground, multi-coat polyurea and
            polyaspartic floor is built to hold up to them, and it goes in fast: most garages are done in a day.
          </p>
          <div className="mt-8">
            <EstimateCalButton />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Process</Eyebrow>
          <h2 className={H2}>How We Install Your Garage Floor</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="border border-border bg-background p-6">
                <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Step {i + 1}</p>
                <h3 className="font-heading font-semibold text-[17px] text-foreground mb-2">{s.t}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.7]">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Compare</Eyebrow>
          <h2 className={H2}>Polyurea vs. Epoxy Garage Floors and Garage Floor Paint</h2>
          <p className={P}>
            Many of the garages we coat start with tearing out a failed epoxy kit or peeling garage floor paint. The
            difference is mostly preparation and chemistry:
          </p>
          <DataTable columns={COMPARE.columns} rows={COMPARE.rows} labelHeader="Feature" />
          <p className={P}>
            Want the details? Read{" "}
            <a href="/blog/epoxy-vs-polyaspartic-garage-coatings-dfw" className={A}>epoxy vs. polyaspartic garage coatings</a> and{" "}
            <a href="/blog/best-garage-floor-coatings-texas-heat-dfw-guide" className={A}>the best garage floor coatings for Texas heat</a>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Before & After</Eyebrow>
          <h2 className={H2}>Real Dallas–Fort Worth Garage Floors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {GALLERY.map((g) => (
              <figure key={g.title} className="bg-background border border-border">
                <div className="grid grid-cols-2 gap-px bg-border">
                  {[
                    { id: g.before, tag: "Before" },
                    { id: g.after, tag: "After" },
                  ].map((p) => (
                    <div key={p.id} className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={U(p.id)}
                        alt={`${p.tag}: ${g.title.toLowerCase()} — garage floor coating`}
                        loading="lazy"
                        decoding="async"
                        width={720}
                        height={960}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-foreground/80 text-background px-2 py-1 font-heading text-[10px] uppercase tracking-[0.2em]">
                        {p.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <figcaption className="p-5">
                  <p className="font-heading font-semibold text-[16px] text-foreground">{g.title}</p>
                  <p className="text-[14px] text-muted-foreground leading-[1.7] mt-1">{g.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-[15px] text-muted-foreground">
            More projects:{" "}
            <a href="/residential-case-studies" className={A}>residential case studies</a>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Cost</Eyebrow>
          <h2 className={H2}>What a Garage Floor Coating Costs</h2>
          <p className={P}>
            A typical 2–3 car garage with our polyurea flake system runs $2,800–$4,500. What moves the price:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-muted-foreground font-body text-[16px] leading-[1.75]">
            <li>Garage size, including storage rooms, workshops and stem walls</li>
            <li>Cracks, pitting and spalling that need repair</li>
            <li>Removing an old epoxy or painted coating</li>
            <li>Flake blend and any added anti-slip texture</li>
          </ul>
          <p className={P}>
            You get an exact written price at the in-person estimate, and financing is available with as little as $99 down
            and 0% options.
          </p>
          <EstimateCalButton />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Service Area</Eyebrow>
          <h2 className={H2}>Garage Floor Coatings Across Dallas–Fort Worth</h2>
          <p className={P}>
            Our crews work out of our Plano office at {BUSINESS.address1} and install residential garage floors across the
            Metroplex, including {CITIES.slice(0, -1).join(", ")} and {CITIES[CITIES.length - 1]}.
          </p>
          <div className="flex items-center gap-4">
            <StarRating light={false} />
          </div>
        </div>
      </section>

      <FaqBlock heading="Garage Floor Coating Questions" faqs={FAQS} />

      <section className="lcf py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.15] mb-6 text-balance text-background">
            Ready for a New Garage Floor?
          </h2>
          <p className="text-background/70 font-body text-[16px] leading-[1.8] mb-10 max-w-2xl mx-auto">
            Pick a time that works for you. We'll come out, look at your slab, show you colors and give you a written price.
          </p>
          <EstimateCalButton light />
          <a
            href={BUSINESS.phoneHref}
            className="block mt-8 font-heading text-[12px] tracking-[0.2em] uppercase text-background/70 hover:text-background"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <SiteFooter requestInfo={false} />
    </div>
  );
};

export default GarageFloors;
