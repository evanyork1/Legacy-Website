/**
 * Phase 2 system page data. Spec numbers come ONLY from the verified data in
 * docs/commercial-redesign-phase-2.md section E — never invent values; omit
 * cells that aren't listed there.
 */
import type { SpecLayer } from "@/components/site/sections";
import { nationalize } from "@/data/site/nationwide";
import uc1 from "@/assets/industries/manufacturing-1.jpg";
import uc2 from "@/assets/industries/manufacturing-2.jpg";
import uc3 from "@/assets/industries/manufacturing-3.jpg";

export type SystemBuildup = {
  title: string;
  layers: SpecLayer[];
  total?: string;
};

export type SystemPageData = {
  slug: string;
  path: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  whatItIs: string[];
  whereUsed: { label: string; path: string }[];
  buildups: SystemBuildup[];
  cure?: string;
  performance: string[];
  chemicalResistance?: string[];
  prep: string[];
  faqs: { q: string; a: string }[];
  photos: { src: string; alt: string }[];
  /** Optional overrides / extra content blocks rendered after the overview. */
  crumbName?: string;
  serviceName?: string;
  /** Extra content blocks. Links are internal only — never a manufacturer site. */
  sections?: {
    /** Optional anchor id for deep links (e.g. "oil-containment-pits"). */
    id?: string;
    title: string;
    paragraphs: string[];
    link?: { label: string; url: string };
    /** Bulleted (or numbered, with ordered: true) list rendered after the paragraphs. */
    items?: string[];
    ordered?: boolean;
    /** Card links rendered as a grid (internal paths only). */
    links?: { label: string; url: string; text?: string }[];
    /** HTML comparison table. */
    table?: { columns: string[]; rows: { label: string; values: string[] }[] };
    /** Keep DFW/city wording as written (skips nationalize()). */
    keepLocal?: boolean;
  }[];
  comparison?: { title: string; columns: string[]; rows: { label: string; values: string[] }[] };
  /** Overrides the "What It Is" heading with a keyword-specific H2. */
  overviewTitle?: string;
  /** Page-specific heading + line for the single closing CTA section. */
  closing?: { title: string; text: string };
};

export const SYSTEM_PAGES: SystemPageData[] = [
  {
    slug: "urethane-cement",
    path: "/urethane-cement-flooring",
    name: "Urethane Cement",
    metaTitle: "Urethane Cement Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "Urethane cement flooring for food processing, commercial kitchens and industrial facilities across Dallas-Fort Worth. Thermal-shock and chemical resistant.",
    h1: "Urethane Cement Flooring in Dallas–Fort Worth",
    heroImage: uc1,
    heroAlt: "Urethane cement floor in a DFW food processing facility",
    intro:
      "Urethane cement is a cementitious urethane mortar installed at a nominal 3/16 to 1/4 inch that resists thermal shock, hot oil, steam cleaning and aggressive chemicals. It is used in commercial kitchens, food and beverage plants, washdown areas and heavy industrial spaces where thin-film epoxy will not hold up.",
    whatItIs: [
      "Urethane cement (cementitious urethane) is a trowel- or self-leveling-applied mortar that bonds tenaciously to concrete and shrugs off thermal shock, hot oil, steam cleaning and aggressive chemicals.",
      "We install Legacy Urethane Cement, a self-priming, thermal-shock-resistant cementitious polyurethane installed from 1/8\" to 3/8\", and Legacy Hybrid Urethane, which pairs a urethane cement base with an epoxy, polyaspartic or MMA topcoat. Legacy Urethane Cement tolerates moisture vapor up to 25 lb MVER (ASTM F1869 calcium chloride test).",
    ],
    whereUsed: [
      { label: "Food & beverage processing", path: "/food-processing-flooring" },
      { label: "Restaurants & commercial kitchens", path: "/restaurant-kitchen-flooring" },
      { label: "Manufacturing", path: "/manufacturing-floor-coating" },
      { label: "Data center mechanical & CDU rooms", path: "/data-center-flooring" },
      { label: "Warehouse docks & staging", path: "/warehouse-flooring" },
    ],
    buildups: [],
    cure: "Foot traffic typically overnight; full chemical resistance develops over 7 days. Saw-cut anchor keyways at edges, drains and doorways.",
    performance: [
      "Withstands thermal shock from steam cleaning and hot washdowns",
      "Handles hot oil, grease and food acids without softening",
      "Slip-resistant quartz broadcast texture, adjustable to the space",
      "Moisture-tolerant — suitable for slabs with elevated moisture vapor",
    ],
    chemicalResistance: [
      "Hot cooking oils and animal fats",
      "Citric, acetic and lactic acids common in food plants",
      "Caustic washdown and CIP detergents",
      "Diesel, hydraulic fluid and cutting oils",
    ],
    prep: [
      "Shot-blast or diamond-grind to ICRI CSP 3–4 minimum",
      "ASTM F2170 in-situ RH and ASTM F1869 MVER moisture testing before install",
      "Saw-cut anchor keyways at termination points, drains and thresholds",
      "Ambient temperature, RH and dew-point monitoring during install and cure",
    ],
    faqs: [
      {
        q: "Why urethane cement instead of epoxy in a kitchen or food plant?",
        a: "Thermal shock. Epoxy is rigid; urethane cement expands and contracts closer to concrete, so steam cleaning, hot oil and washdowns don't crack or delaminate it. It's the standard spec for food and beverage processing.",
      },
      {
        q: "How thick is a urethane cement floor?",
        a: 'Our standard build is 3/16" self-leveling body with a quartz broadcast and novolac topcoat — about 1/4" total. Heavier service can go thicker.',
      },
      {
        q: "Can it be installed over an existing coating?",
        a: "Only after the existing coating is removed or fully profiled. We mechanically prep to the specified CSP and verify adhesion with pull-off testing on mockups.",
      },
      {
        q: "Does it meet USDA requirements?",
        a: "The systems we install are USDA-acceptable for incidental food contact and are standard in food and beverage processing environments.",
      },
    ],
    photos: [
      { src: uc1, alt: "Urethane cement floor installation in a DFW facility" },
      { src: uc2, alt: "Seamless urethane cement flooring with cove base" },
      { src: uc3, alt: "Industrial urethane cement floor in production area" },
    ],
  },
];

import { products as legacyProducts } from "@/data/commercialSystems";
import warehouse1 from "@/assets/industries/industrial-warehouse-1.jpg";
import warehouse2 from "@/assets/industries/industrial-warehouse-2.jpg";
import warehouse3 from "@/assets/industries/industrial-warehouse-3.jpg";
import healthcare1 from "@/assets/industries/healthcare-1.jpg";
import healthcare2 from "@/assets/industries/healthcare-2.jpg";
import healthcare3 from "@/assets/industries/healthcare-3.jpg";
import dataCenter1 from "@/assets/industries/data-center-1.jpg";
import dataCenter2 from "@/assets/industries/data-center-2.jpg";
import dataCenter3 from "@/assets/industries/data-center-3.jpg";
import hotel1 from "@/assets/industries/hotel-hospitality-1.jpg";
import hotel2 from "@/assets/industries/hotel-hospitality-2.jpg";
import hotel3 from "@/assets/industries/hotel-hospitality-3.jpg";
import office1 from "@/assets/industries/office-corporate-1.jpg";
import office2 from "@/assets/industries/office-corporate-2.jpg";
import office3 from "@/assets/industries/office-corporate-3.jpg";
import polished1 from "@/assets/polished-concrete-showroom.jpg";
import polished2 from "@/assets/polishing-gallery-showroom.jpg";
import polished3 from "@/assets/polishing-showroom-cars.jpg";
import flake1 from "@/assets/case-studies/swim-school-flake/after-1.jpg";
import flake2 from "@/assets/case-studies/swim-school-flake/after-2.jpg";
import flake3 from "@/assets/case-studies/swim-school-flake/after-3.jpg";
import cove1 from "@/assets/case-studies/restaurant-pump-room-cove-base/after-1.jpg";
import cove2 from "@/assets/case-studies/restaurant-pump-room-cove-base/after-2.jpg";
import cove3 from "@/assets/case-studies/restaurant-pump-room-cove-base/after-3.jpg";
import pharma1 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-1.jpg";
import pharma2 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-2.jpg";
import pharma3 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-3.jpg";

const industryLinks = {
  data: { label: "Data centers", path: "/data-center-flooring" },
  electronics: { label: "Electronics manufacturing", path: "/electronics-manufacturing-flooring" },
  aerospace: { label: "Aerospace & hangars", path: "/aerospace-hangar-flooring" },
  warehouse: { label: "Warehouses & distribution", path: "/warehouse-flooring" },
  manufacturing: { label: "Manufacturing", path: "/manufacturing-floor-coating" },
  food: { label: "Food processing", path: "/food-processing-flooring" },
  pharma: { label: "Pharmaceutical manufacturing", path: "/pharmaceutical-flooring" },
  healthcare: { label: "Healthcare", path: "/healthcare-flooring" },
  pharmacy: { label: "Pharmacies & cleanrooms", path: "/pharmacy-cleanroom-flooring" },
  kitchen: { label: "Restaurants & commercial kitchens", path: "/restaurant-kitchen-flooring" },
  retail: { label: "Retail", path: "/retail-flooring" },
  office: { label: "Offices", path: "/office-flooring" },
  hotel: { label: "Hotels", path: "/hotel-flooring" },
  school: { label: "Schools", path: "/school-flooring" },
  multifamily: { label: "Multifamily", path: "/multifamily-flooring" },
  auto: { label: "Auto dealerships & service", path: "/auto-dealership-flooring" },
  parking: { label: "Parking structures", path: "/parking-garage-coatings" },
};

const photoSets = {
  industrial: [
    { src: uc1, alt: "Manufacturing facility floor and production environment" },
    { src: uc2, alt: "Industrial production area showing concrete floor conditions" },
    { src: uc3, alt: "Manufacturing interior with industrial flooring" },
  ],
  warehouse: [
    { src: warehouse1, alt: "Industrial warehouse floor and circulation area" },
    { src: warehouse2, alt: "Warehouse interior showing concrete floor surface" },
    { src: warehouse3, alt: "Distribution facility flooring and work area" },
  ],
  healthcare: [
    { src: healthcare1, alt: "Healthcare interior showing cleanable floor surfaces" },
    { src: healthcare2, alt: "Healthcare facility floor and circulation space" },
    { src: healthcare3, alt: "Healthcare environment with continuous floor finishes" },
  ],
  data: [
    { src: dataCenter1, alt: "Data center interior and equipment environment" },
    { src: dataCenter2, alt: "Data center infrastructure and facility flooring" },
    { src: dataCenter3, alt: "Mission-critical facility interior" },
  ],
  hospitality: [
    { src: hotel1, alt: "Hotel property and hospitality environment" },
    { src: hotel2, alt: "Hospitality facility and guest circulation setting" },
    { src: hotel3, alt: "Hotel facility illustrating pedestrian-use spaces" },
  ],
  office: [
    { src: office1, alt: "Corporate office interior and floor finishes" },
    { src: office2, alt: "Office circulation area and commercial flooring" },
    { src: office3, alt: "Corporate workplace flooring environment" },
  ],
  polished: [
    { src: polished1, alt: "Polished concrete showroom floor" },
    { src: polished2, alt: "Showroom interior with reflective polished concrete" },
    { src: polished3, alt: "Vehicle showroom with polished concrete flooring" },
  ],
  flake: [
    { src: flake1, alt: "Commercial epoxy flake floor in a DFW swim school lobby" },
    { src: flake2, alt: "Color-blended commercial flake flooring in a swim school corridor" },
    { src: flake3, alt: "Finished commercial flake floor with clear urethane topcoat" },
  ],
  cove: [
    { src: cove1, alt: "Completed restaurant pump-room floor and cove-base project" },
    { src: cove2, alt: "Restaurant pump-room cove-base installation after completion" },
    { src: cove3, alt: "Finished pump-room flooring and wall-to-floor transition" },
  ],
  pharma: [
    { src: pharma1, alt: "Completed pharmaceutical facility polished concrete floor" },
    { src: pharma2, alt: "Pharmaceutical floor restoration after completion" },
    { src: pharma3, alt: "Restored concrete floor in the pharmaceutical project" },
  ],
} satisfies Record<string, SystemPageData["photos"]>;

const standardPrep = [
  "Survey concrete condition, existing coatings, contamination, cracks and joint movement before selecting the preparation method.",
  "Use ASTM F2170 in-situ RH and ASTM F1869 MVER testing where required by the specified floor system.",
  "Mechanically prepare to the selected manufacturer's profile; document repairs and verify adhesion on representative mockups.",
  "Monitor ambient temperature, humidity and dew point throughout application and cure.",
];

const publishedValuesNote =
  "Values per the manufacturer's published application data. Final build-up is confirmed on your submittal.";

const legacyMetadata = (slug: string) => {
  const product = legacyProducts.find((item) => item.slug === slug);
  if (!product) throw new Error(`Missing legacy system metadata: ${slug}`);
  return {
    metaTitle: product.metaTitle,
    metaDescription: product.metaDescription,
  };
};

type SystemDraft = Omit<
  SystemPageData,
  "slug" | "h1" | "heroImage" | "heroAlt" | "metaTitle" | "buildups" | "prep"
> & {
  slug?: string;
  h1?: string;
  metaTitle?: string;
  buildups?: SystemBuildup[];
  prep?: string[];
};

const makeSystem = (draft: SystemDraft): SystemPageData => ({
  ...draft,
  slug: draft.slug ?? draft.path.slice(1),
  metaTitle: draft.metaTitle ?? `${draft.name} DFW | Legacy Industrial Coatings`,
  h1: draft.h1 ?? `${draft.name} in Dallas–Fort Worth`,
  heroImage: draft.photos[0].src,
  heroAlt: draft.photos[0].alt,
  buildups: draft.buildups ?? [],
  prep: [
    ...(draft.prep ?? standardPrep),
    ...(draft.buildups?.length ? [publishedValuesNote] : []),
  ],
});

SYSTEM_PAGES.push(
  makeSystem({
    path: "/industrial-epoxy",
    name: "Industrial Epoxy Flooring",
    metaTitle: "Industrial Epoxy Flooring Dallas-Fort Worth | Legacy Industrial Coatings",
    metaDescription: "Industrial epoxy flooring and floor coatings for warehouses, manufacturing, food and aerospace facilities. Legacy Epoxy Series from 16 mils to 1/4\". DFW based, nationwide. Bids in 24 hours.",
    h1: "Industrial Epoxy Flooring & Floor Coatings",
    overviewTitle: "What Industrial Epoxy Flooring Is",
    serviceName: "Industrial Epoxy Flooring",
    intro: "Industrial epoxy is a 100% solids resin floor installed from a thin film up to a 1/4\" troweled mortar, built for forklifts, foot traffic and production work. We install the Legacy Epoxy Series, choosing the build-up by traffic and impact, with a low-odor option for occupied buildings.",
    comparison: {
      title: "Choose a Legacy Epoxy System",
      columns: ["Typical service"],
      rows: [
        { label: "Legacy Epoxy 16", values: ["Light traffic, recoats"] },
        { label: "Legacy Epoxy 32", values: ["General commercial / light industrial"] },
        { label: "Legacy Epoxy 65", values: ["Textured, heavier traffic"] },
        { label: "Legacy Epoxy 125", values: ["Heavy forklift and production"] },
        { label: "Legacy Epoxy Mortar 250", values: ["Heaviest impact, 1/4\" mortar"] },
      ],
    },
    whatItIs: [
      "We install self-leveling epoxy, high-build epoxy mortar and decorative broadcast systems. Mechanical preparation, concrete repair and moisture evaluation establish the bond before the finish is selected.",
      "The Legacy Epoxy Series runs from Legacy Epoxy 16 for light traffic and recoats to Legacy Epoxy Mortar 250 for the heaviest impact; the number is the system's nominal thickness in mils. An optional chemical- and UV-resistant urethane (CRU) topcoat adds chemical and UV resistance, and anti-slip spheres add texture. Legacy Low-Odor Epoxy is a low-odor, low-VOC option for occupied buildings, subject to ventilation and work-area controls.",
      "Colors, traction aggregate, safety zoning and integral cove are specified around the operation. We distinguish routine cleaning exposure from immersion or aggressive chemical service rather than treating every epoxy as interchangeable.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.manufacturing, industryLinks.aerospace, industryLinks.pharmacy, industryLinks.auto],
    buildups: [],
    cure: "Confirm walking, equipment and chemical-service release separately against the approved product data and actual site conditions.",
    performance: [
      "Seamless, cleanable finish with a project-specific wear surface.",
      "Body epoxy compressive strength: 25,300 psi (ASTM D695).",
      "Legacy Low-Odor Epoxy offers a low-odor, low-VOC occupied-building option.",
    ],
    chemicalResistance: [
      "Select the resin and topcoat against the actual oils, cleaners and process chemicals.",
      "Confirm Decon-Quat and Peridox cleaning compatibility for pharmacy scopes on the approved submittal.",
    ],
    sections: [
      {
        title: "Industrial Floor Coatings We Install",
        paragraphs: [
          "Industrial epoxy flooring is the right answer for most warehouses and production floors, but not every one. Heat, hot washdown, aggressive chemicals and tight shutdown windows each call for a different chemistry. We install the full range and match the system to the floor's actual service instead of forcing one product onto every slab.",
        ],
        links: [
          { label: "Legacy Epoxy Series", url: "/industrial-epoxy", text: "100% solids epoxy from a 16-mil thin film to a 1/4\" troweled mortar for forklifts, carts and foot traffic." },
          { label: "Novolac epoxy flooring", url: "/novolac-epoxy-flooring", text: "Higher chemical and temperature resistance for battery rooms, chemical storage and containment." },
          { label: "Urethane cement flooring", url: "/urethane-cement-flooring", text: "Legacy Urethane Cement for hot washdown, thermal shock, freezers and food and beverage production." },
          { label: "MMA flooring", url: "/mma-flooring", text: "Fast-cure Legacy MMA systems for facilities that can only shut down overnight or over a weekend." },
          { label: "Aircraft hangar flooring", url: "/aerospace-hangar-flooring", text: "Legacy Hangar epoxy/urethane systems built to resist Skydrol and reflect light in hangars." },
          { label: "Polished concrete", url: "/concrete-polishing", text: "When the slab itself can be the floor: ground, densified and polished, with no coating to wear through." },
        ],
      },
      {
        title: "Industrial Epoxy Flooring by Facility",
        paragraphs: [
          "The same epoxy behaves very differently under a reach truck, a washdown hose and a tug full of aircraft parts. These are the facility types we coat most often, and what each one usually needs.",
        ],
        links: [
          { label: "Warehouses & distribution", url: "/warehouse-flooring", text: "Abrasion-resistant epoxy or polished concrete, joint repair and aisle striping, phased around live racking and shipping schedules." },
          { label: "Manufacturing", url: "/manufacturing-floor-coating", text: "Impact- and chemical-resistant builds such as Legacy Epoxy 65 and Legacy Epoxy 125, with cove and safety zoning around production lines." },
          { label: "Food & beverage processing", url: "/food-processing-flooring", text: "Sanitary, slip-resistant floors; urethane cement where hot water and thermal shock rule out standard epoxy." },
          { label: "Aerospace & hangars", url: "/aerospace-hangar-flooring", text: "Skydrol-resistant, light-reflective hangar systems from 16 to 56 mils." },
          { label: "Data centers", url: "/data-center-flooring", text: "Epoxy for support spaces, static-control floors for electrical rooms and novolac in battery rooms." },
          { label: "Pharmaceutical manufacturing", url: "/pharmaceutical-flooring", text: "Seamless, cleanable floors with integral cove, specified against your disinfectant program." },
        ],
      },
      {
        title: "How We Install Industrial Epoxy",
        paragraphs: [
          "Most epoxy failures start before the first coat goes down. Our installs follow the same sequence on every project, documented with photos from preparation through closeout.",
        ],
        ordered: true,
        items: [
          "Moisture testing: in-situ relative humidity (ASTM F2170) and moisture vapor emission (ASTM F1869) so the primer matches the slab.",
          "Surface preparation: shot-blast or diamond-grind to the concrete surface profile (CSP) the system requires, with dust control.",
          "Repairs: cracks, spalls and joints filled or rebuilt so they don't telegraph through the new floor.",
          "Primer: the standard epoxy primer, or a moisture-mitigating primer when testing calls for it.",
          "Body and topcoat: the specified Legacy Epoxy build (or other approved system), with traction aggregate where needed and a chemical/UV-resistant urethane topcoat where specified.",
          "Details: integral cove base, transitions, safety zones and line striping in the same mobilization.",
          "Punch walk and closeout: walk-through, touch-ups, cure and return-to-service instructions, and the full photo log.",
        ],
      },
      {
        title: "Industrial Epoxy vs. Polished Concrete vs. Urethane Cement",
        paragraphs: [
          "Owners often ask which floor is best. The honest answer depends on what the floor has to survive. This comparison is a starting point; testing and a site walk settle it.",
        ],
        table: {
          columns: ["Industrial epoxy", "Polished concrete", "Urethane cement"],
          rows: [
            { label: "Best for", values: ["Warehouses, manufacturing, light-to-heavy forklift traffic, color and safety zoning", "Distribution centers, retail and showrooms where the slab is sound", "Food and beverage, commercial kitchens, washdown and freezer areas"] },
            { label: "Chemical resistance", values: ["Good to very good; novolac or urethane topcoats raise it", "Limited; not a chemical-resistant lining", "Very good, including many food acids and hot oils"] },
            { label: "Heat and hot washdown", values: ["Limited", "Not affected by heat", "Built for thermal shock and steam cleaning"] },
            { label: "Downtime", values: ["Typically several days for full cure", "Can often be phased with no cure time", "Fast return to service; MMA is faster still"] },
            { label: "Maintenance", values: ["Routine cleaning; periodic topcoat renewal in heavy traffic", "Routine cleaning and periodic burnishing or guard renewal", "Routine cleaning; very durable"] },
          ],
        },
        link: { label: "Polished concrete vs. epoxy for warehouses", url: "/blog/polished-concrete-vs-epoxy-dfw-warehouses" },
      },
      {
        title: "What Industrial Epoxy Flooring Costs",
        paragraphs: [
          "Industrial epoxy pricing is driven far more by the slab and the schedule than by the resin. Two 50,000 SF warehouses can price very differently once preparation, moisture and phasing are accounted for. These are the factors that move the number:",
          // TODO Evan: add typical $/SF ranges for Legacy Epoxy 32, Legacy Epoxy 65 and Legacy Epoxy 125 here.
          "Send drawings or request a site walk and we return a full bid within 24 hours of receiving plans, with the system, thickness and phasing spelled out line by line.",
        ],
        items: [
          "Square footage and layout (open floor vs. many small rooms)",
          "Removal of existing coatings, adhesives or sealers",
          "Moisture test results and whether a moisture-mitigating primer is required",
          "System thickness, from a Legacy Epoxy 16 thin film to a Legacy Epoxy Mortar 250 troweled mortar",
          "Crack, joint and spall repair",
          "Cove base, striping and safety zoning",
          "Phasing, night and weekend work around a running operation",
        ],
        link: { label: "Commercial epoxy flooring cost guide", url: "/blog/commercial-epoxy-flooring-cost-per-square-foot-dfw" },
      },
      {
        title: "Recent Industrial Projects",
        paragraphs: [
          "We document every job from preparation to closeout. A few recent examples of industrial and commercial work:",
          // TODO Evan: approve the Plano warehouse (Assa Abloy) and other industrial projects to feature by name.
        ],
        links: [
          { label: "Restaurant pump room with integral cove base", url: "/commercial-case-studies/restaurant-pump-room-integrated-cove-base", text: "Seamless resin floor and cove in a wet mechanical space." },
          { label: "Pharmaceutical manufacturing floor restoration", url: "/commercial-case-studies/pharmaceutical-manufacturing-polished-concrete", text: "Polished concrete with polyurea crack and divot repair in an operating facility." },
          { label: "Weekend warehouse floor coating", url: "/blog/warehouse-floor-coating-case-study-weekend-install", text: "A warehouse coated over a weekend so shipping never stopped." },
          { label: "All commercial case studies", url: "/commercial-case-studies", text: "Problems, systems and results from recent commercial projects." },
        ],
      },
    ],
    faqs: [
      { q: "What is the best industrial floor coating?", a: "There is no single best coating; the right one depends on traffic, chemicals, heat and downtime. For most warehouses and production floors, a 100% solids epoxy such as the Legacy Epoxy Series is the workhorse. Novolac epoxy handles harsher chemicals, urethane cement handles hot washdown and thermal shock, and MMA handles the tightest shutdown windows." },
      { q: "How long does industrial epoxy flooring last?", a: "Service life depends on the system thickness, the traffic and how the floor is maintained. Thicker builds such as Legacy Epoxy 65 and Legacy Epoxy 125 hold up longer under forklifts, and renewing the topcoat in high-wear areas extends the life of the whole floor. We recommend a build based on your traffic so the floor isn't under-specified." },
      { q: "Can forklifts drive on an epoxy floor?", a: "Yes. Industrial epoxy is designed for forklift and cart traffic, provided the system thickness matches the load and wheel type. Heavier traffic calls for thicker, aggregate-filled builds like Legacy Epoxy 65 or Legacy Epoxy 125 rather than a thin-film coating." },
      { q: "How long does installation take, and how much downtime is there?", a: "It depends on square footage, preparation and the system. We phase large floors zone by zone so the rest of the building keeps running, and we confirm walking, equipment and vehicle return-to-service times against the product data before the schedule is set. When downtime has to be measured in hours, we look at MMA." },
      { q: "Epoxy or polished concrete for a warehouse?", a: "Polished concrete works well on sound slabs in distribution space and needs no cure time. Epoxy is better when you need color, safety zoning, chemical resistance or a cleanable sealed surface, or when the slab is too damaged to polish well. We often see both in the same building." },
      { q: "Do you work nights and weekends in operating facilities?", a: "Yes. Most of our industrial work happens around live operations, with night and weekend crews, zone-by-zone phasing, dust control and coordination with your operations team." },
      { q: "Do you test for moisture before installing epoxy?", a: "Yes, on every project. We run ASTM F2170 in-situ relative humidity and ASTM F1869 moisture vapor emission tests, because excess slab moisture is one of the most common causes of epoxy failure. When readings are high, we use a moisture-mitigating primer." },
      { q: "How much does industrial epoxy flooring cost per square foot?", a: "Cost per square foot depends on preparation, moisture mitigation, system thickness, square footage, repairs and phasing. Send plans or request a site walk and we return a full bid within 24 hours of receiving plans." },
    ],
    photos: photoSets.industrial,
  }),

  makeSystem({
    path: "/resinous-flooring",
    name: "Resinous Flooring",
    ...legacyMetadata("epoxy-flooring"),
    intro: "Resinous flooring is a seamless floor built from liquid resins — epoxy, novolac, urethane cement, MMA or polyaspartic — applied over prepared concrete. Each chemistry trades off cost, chemical and heat resistance, and how fast the floor returns to service.",
    comparison: {
      title: "What Is Resinous Flooring? Choose by Chemistry",
      columns: ["Best for", "Return to service", "Thickness range", "System page"],
      rows: [
        { label: "Epoxy (Legacy Epoxy Series)", values: ["Warehouses, production, offices, common areas", "Standard", "Thin film to 1/4\"", "/industrial-epoxy"] },
        { label: "Novolac epoxy", values: ["Chemical storage, battery rooms, containment", "Standard", "Novolac 32 to Novolac 125", "/novolac-epoxy-flooring"] },
        { label: "Urethane cement (Legacy Urethane Cement)", values: ["Kitchens, food processing, freezers, thermal cycling", "Standard", "1/8\" to 3/8\"", "/urethane-cement-flooring"] },
        { label: "Hybrid urethane cement (Legacy Hybrid Urethane)", values: ["Food and beverage, cold storage, schools, healthcare", "Standard to fast (by topcoat series)", "1/8\" or 3/16\" base", "/urethane-cement-flooring#legacy-hybrid-urethane"] },
        { label: "MMA (Legacy MMA)", values: ["Overnight or weekend shutdown windows", "Same day", "1/8\" to 3/8\"", "/mma-flooring"] },
        { label: "Polyaspartic (fast-cure systems)", values: ["Fast turnarounds, sunlit spaces", "Fast", "By system", "/flake-floors#legacy-flake-one-day"] },
        { label: "Decorative flake (Legacy Flake)", values: ["Showrooms, retail, locker rooms, break areas", "Standard to fast", "By system", "/flake-floors"] },
        { label: "Decorative quartz (Legacy Quartz)", values: ["Restrooms, kitchens, corridors, concourses", "Standard to fast", "By system", "/quartz-flooring"] },
        { label: "ESD (Legacy ESD)", values: ["Electronics, electrical and UPS rooms", "Standard", "35 mils nominal (Legacy ESD 35)", "/esd-static-control-flooring"] },
      ],
    },
    sections: [
      {
        title: "Full Systems Library",
        paragraphs: ["Every system we install — chemistry, nominal thickness, coat-by-coat build-up and published properties — is listed in one place."],
        link: { label: "Open the Systems Library", url: "/materials" },
      },
    ],
    whatItIs: [
      "A resinous floor combines a prepared substrate with compatible primers, body coats, aggregates and finish coats. The assembly can prioritize chemical resistance, sanitation, appearance or traffic durability.",
      "Epoxy suits most production and circulation areas; novolac handles harsher chemicals and heat; urethane cement handles hot, wet and thermal-shock environments; MMA and polyaspartic systems reopen fastest. Different rooms can use different systems with coordinated transitions.",
      "Our submittal identifies the selected assembly rather than presenting all resin floors as equivalent. The examples below are separate systems, not layers to combine into a single installation.",
    ],
    whereUsed: [industryLinks.manufacturing, industryLinks.food, industryLinks.pharma, industryLinks.healthcare, industryLinks.retail],
    buildups: [],
    cure: "Return-to-service requirements depend on the selected assembly and are confirmed in the submittal for your project.",
    performance: [
      "Continuous finishes with coordinated cove, drains and transitions.",
      "Texture and topcoat selected for cleaning, traction and wear.",
      "System selection distinguishes thermal, chemical and mechanical demands.",
    ],
    chemicalResistance: [
      "Match the selected chemistry to process exposure and cleaning protocols.",
      "Request written confirmation for concentrated chemicals, immersion or elevated-temperature exposure.",
    ],
    faqs: [
      { q: "Is resinous flooring the same as epoxy?", a: "Epoxy is one resinous flooring chemistry. The broader category also includes novolac, urethane cement, MMA and polyaspartic systems." },
      { q: "Should every room receive the same system?", a: "Not necessarily. Washdown rooms, cleanrooms and forklift aisles can require different bodies, textures and topcoats." },
      { q: "How do you choose the surface texture?", a: "We balance traction, cleaning equipment, footwear and expected contamination using a representative finish sample." },
      { q: "Can the floor include sanitary details?", a: "Yes. Integral cove, drain transitions and compatible curb coatings can be included in the approved assembly." },
    ],
    photos: photoSets.industrial,
  }),

  makeSystem({
    path: "/quartz-flooring",
    name: "Quartz Flooring",
    ...legacyMetadata("quartz-flooring"),
    intro: "Quartz flooring broadcasts or trowels colored quartz into a 100% solids epoxy or polyaspartic binder for a durable, sanitary, textured surface. We install Legacy Quartz in four build-ups, from a broadcast floor to a troweled mortar and an all-polyaspartic fast-return system.",
    whatItIs: [
      "Colored quartz is broadcast into successive resin coats and sealed to create a decorative, continuous floor. The aggregate blend and finish texture are selected together so the surface supports both traction and practical cleaning.",
      "Legacy Quartz Broadcast, Legacy Quartz HD, Legacy Quartz Trowel and Legacy Quartz Fast-Cure cover interior and exterior use, heavier impact and fast return to service. Integral cove and detailed transitions extend the cleanable assembly to the room perimeter.",
    ],
    whereUsed: [industryLinks.pharma, industryLinks.pharmacy, industryLinks.healthcare, industryLinks.kitchen, industryLinks.food],
    buildups: [],
    cure: "Release times depend on the selected Legacy Quartz build-up and site conditions and are confirmed in the submittal.",
    performance: [
      "70734/70735 epoxy compressive strength: 11,000 psi (ASTM D695).",
      "Urethane topcoat: Taber abrasion 23 mg; polyaspartic: Taber abrasion 55 mg per 1,000 cycles, CS-17 wheel (ASTM D4060).",
      "CRU and polyaspartic seals pass JIS Z 2801-2010 anti-microbial testing; this is not a substitute for facility sanitation.",
    ],
    chemicalResistance: [
      "Review IPA, quaternary disinfectants, sporicides, CIP detergents and passivation acids against the current CRU chemical-resistance data.",
      "Confirm concentration, contact time, temperature and rinse practices before approving the cleaning protocol.",
    ],
    faqs: [
      { q: "What does double broadcast mean?", a: "Quartz is broadcast into two successive base coats before the floor receives its seal coats, as in Legacy Quartz Broadcast." },
      { q: "Is the surface slip resistant?", a: "Quartz provides texture, but the selected aggregate and seal schedule must balance traction with cleanability. Review a sample for the actual use." },
      { q: "What does the antimicrobial result establish?", a: "The specified CRU topcoat has a published JIS Z 2801 pass. It does not replace cleaning, disinfection or infection-control procedures." },
      { q: "Can quartz continue into cove base?", a: "We coordinate the floor with compatible integral cove and transitions so the perimeter remains cleanable." },
    ],
    photos: photoSets.healthcare,
  }),

  makeSystem({
    path: "/esd-static-control-flooring",
    name: "ESD / Static-Control Flooring",
    ...legacyMetadata("static-control-flooring"),
    intro: "Static-control flooring is a grounded epoxy floor that bleeds static charge away from people and equipment before it can damage sensitive electronics. We install Legacy ESD systems and test resistance on site before turnover.",
    whatItIs: [
      "Legacy ESD 35 is a nominal 35-mil electrostatic-dissipative epoxy system: a three-component, high-solids epoxy topcoat with conductive filler, applied at 15–20 mils over an electrically insulating epoxy coat. Published floor resistance is 1×10^5 to 1×10^9 ohms, with body voltage generation under 100 volts, referenced to ANSI/ESD S20.20-2014.",
      "Legacy ESD Stipple is a stipple-finish epoxy topcoat. Over a conductive primer it forms a conductive floor; over a standard epoxy primer it forms a static-dissipative floor.",
      "We test resistance on site to the project's ESD specification before turnover. Cleaning products and later recoats must preserve the floor's electrical characteristics.",
    ],
    whereUsed: [industryLinks.electronics, industryLinks.data, industryLinks.aerospace, industryLinks.pharma, industryLinks.pharmacy],
    cure: "Release the floor only after the selected resin has cured and the specified electrical acceptance tests are complete.",
    performance: [
      "Topcoat SDE: floor resistance 1×10^5 to 1×10^9 ohms; body voltage under 100 volts.",
      "Conductive or static-dissipative options selected to the project ESD-control plan.",
      "Resistance-to-ground and personnel-grounding verification as specified.",
      "Documented grounding coordination and maintainable surface finish.",
    ],
    chemicalResistance: [
      "Confirm process chemicals and ESD-safe cleaning agents against the selected Legacy ESD system.",
      "Do not apply ordinary waxes, sealers or topcoats without confirming electrical compatibility.",
    ],
    prep: [...standardPrep, "Coordinate grounding provisions with the electrical scope and document the specified acceptance-test locations."],
    faqs: [
      { q: "Does an ESD floor make a facility compliant with ANSI/ESD S20.20?", a: "No. Flooring is one component of an ESD-control program that also addresses personnel grounding, procedures and verification." },
      { q: "Can you provide a conductive system?", a: "Yes. Legacy ESD Stipple over a conductive primer forms a conductive floor, subject to the approved electrical and flooring requirements." },
      { q: "How do you verify the floor before turnover?", a: "We test resistance on site to the project's ESD specification before turnover." },
      { q: "Do all data halls require ESD resin flooring?", a: "No. The owner and design team establish the requirement according to equipment, operations and the facility's ESD-control strategy." },
      { q: "Can normal floor wax be used?", a: "Only if the manufacturer confirms compatibility. An insulating maintenance film can compromise the intended electrical performance." },
    ],
    photos: photoSets.data,
  }),

  makeSystem({
    path: "/flake-floors",
    name: "Commercial Flake Flooring",
    crumbName: "Flake Flooring",
    serviceName: "Commercial Flake Flooring",
    metaTitle: "Flake Epoxy Floor Coating DFW | Legacy Industrial Coatings",
    metaDescription: "Commercial flake epoxy, polyurea and polyaspartic floor systems for showrooms, dealerships, retail, schools, restaurants and service areas across Dallas-Fort Worth.",
    h1: "Commercial Flake Flooring",
    intro: "A commercial flake floor is a resin system with decorative vinyl flakes broadcast into the body coat and sealed under a clear topcoat. It gives a durable, textured, color-blended finish for showrooms, dealerships, retail, schools, restaurants and service areas.",
    whatItIs: [
      "The resin body and clear topcoat carry the protection; the flake blend sets the color and adds texture underfoot. Because the finish is seamless, there are no grout lines to trap dirt in high-traffic commercial spaces.",
      "We install flake floors at every level, from a standard epoxy flake to polyurea and polyaspartic one-day systems and heavy-duty builds with a urethane topcoat or a 3/16\" urethane cement body.",
    ],
    sections: [
      {
        title: "Flake Floor Levels: From Standard to Heavy-Duty",
        paragraphs: [
          "Not every flake floor is the same floor. The resin under the flake and the topcoat over it decide how the floor handles traffic, chemicals, sunlight and downtime. Here is how our flake systems step up, from the most economical to the most substantial.",
        ],
        table: {
          columns: ["System", "What it is", "Best for"],
          rows: [
            { label: "1 · Standard", values: ["Legacy Flake Epoxy", "Epoxy primer and body, full flake broadcast, two clear seal coats", "Break rooms, locker rooms, back-of-house on a normal schedule"] },
            { label: "2 · Fast return", values: ["Legacy Flake Fast-Cure", "Epoxy body with UV-stable polyaspartic seal coats", "Retail and showrooms that need to reopen sooner or get sunlight"] },
            { label: "3 · One-day polyurea", values: ["Legacy Flake Polyurea", "Polyurea base coat, full flake broadcast, polyaspartic topcoat", "Wet areas, entries and tight one-day shutdowns"] },
            { label: "3 · One-day polyaspartic", values: ["Legacy Flake One-Day", "All-polyaspartic base and seals", "The shortest shutdown windows, sunlit spaces"] },
            { label: "4 · Heavy-duty", values: ["Legacy Flake UT", "High-solids epoxy primer, recoatable epoxy body broadcast to rejection, low-odor aliphatic urethane topcoat", "Schools, healthcare corridors and restaurants that clean hard every day"] },
            { label: "5 · Most substantial", values: ["Legacy Urethane Cement Flake", "3/16\" urethane cement body with decorative flake and a urethane or polyaspartic topcoat", "Commercial kitchens and food areas with hot water and thermal shock"] },
            { label: "Overnight", values: ["Legacy MMA Flake", "Self-leveling MMA with flake, one-hour cure", "Facilities that can only close for a night"] },
          ],
        },
        links: [
          { label: "Polyurea flake case study", url: "/commercial-case-studies/swim-school-flake-floor-multi-location", text: "Six swim school locations: mold-trapping VCT removed, polyurea flake floor with heavy grip installed." },
          { label: "Urethane cement flooring", url: "/urethane-cement-flooring", text: "The heaviest flake option, for kitchens and thermal shock." },
          { label: "MMA flooring", url: "/mma-flooring", text: "Flake and quartz floors that cure in about an hour." },
        ],
      },
      {
        title: "Polyurea and Polyaspartic Flake Floors",
        paragraphs: [
          "Polyurea and polyaspartic are fast-curing coatings. A polyurea base coat penetrates and bonds aggressively to properly ground concrete and stays slightly flexible, and a polyaspartic topcoat is UV-stable, so it will not yellow in sunlit showrooms and storefronts. Together they let us grind, coat, broadcast and seal a floor in a single day in many spaces.",
          "Fast cure also means a short working time, so these floors need experienced crews and careful slab preparation. We grind to the specified profile, repair cracks and joints, and test moisture first; flake systems are not recommended above 80% RH (ASTM F2170) without a moisture-mitigating primer.",
          "Grip matters. Wet entries, pool decks, locker rooms and service drives get extra anti-slip aggregate in the topcoat, and we confirm the texture on a sample before installation.",
        ],
      },
      {
        title: "Legacy Flake Systems",
        paragraphs: [
          "Legacy Flake Epoxy is our epoxy flake floor; Legacy Flake Fast-Cure keeps the epoxy base and adds polyaspartic seals, Legacy Flake One-Day is all polyaspartic, and Legacy Flake Polyurea pairs a polyurea base with a polyaspartic topcoat for the fastest return to service. Build-ups are listed below.",
          "Polyaspartic seals are UV-stable, so they suit sunlit showrooms and storefronts. Flake systems are not recommended above 80% RH without a moisture-mitigating primer.",
        ],
      },
      {
        title: "Legacy Flake UT",
        paragraphs: [
          "Legacy Flake UT is an epoxy flake system specified under CSI 09 67 23 resinous flooring. Vinyl chips are broadcast into a clear or pigmented epoxy and sealed with a clear urethane finish.",
          "The epoxy base gives the floor its chemical-resistant protection, while the urethane topcoat stands up to foot traffic, carts and routine cleaning.",
        ],
      },
    ],
    comparison: {
      title: "Compare Commercial Flake Systems",
      columns: ["Legacy Flake (epoxy)", "Legacy Flake Fast-Cure", "Legacy Flake Polyurea", "Legacy Flake One-Day", "Legacy Flake UT"],
      rows: [
        { label: "Chemistry", values: ["Epoxy base and seals", "Epoxy base, polyaspartic seals", "Polyurea base, polyaspartic topcoat", "All polyaspartic", "Epoxy base, urethane topcoat"] },
        { label: "Return to service", values: ["Standard", "Fast", "Fastest", "Fastest", "Standard"] },
        { label: "UV-stable topcoat option", values: ["CRU or urethane seal", "Polyaspartic", "Polyaspartic", "Polyaspartic", "Urethane topcoat"] },
        { label: "Best for", values: ["Interiors on a standard schedule", "Faster reopening over an epoxy base", "Wet areas and one-day installs", "Shortest shutdown windows", "Chemical-resistant interiors"] },
      ],
    },
    whereUsed: [
      { label: "Auto dealerships & service drives", path: "/auto-dealership-flooring" },
      { label: "Retail and showrooms", path: "/retail-flooring" },
      { label: "Schools", path: "/school-flooring" },
      { label: "Restaurants & front-of-house", path: "/restaurant-kitchen-flooring" },
      { label: "Healthcare corridors", path: "/healthcare-flooring" },
      { label: "Multifamily amenity spaces", path: "/multifamily-flooring" },
    ],
    buildups: [],
    cure: "Return-to-service times are confirmed in the submittal for the selected system; the polyaspartic systems reopen faster than epoxy.",
    performance: [
      "Seamless, color-blended finish with no grout lines.",
      "Texture and topcoat selected for the facility's traction and cleaning needs.",
      "Integral cove and transition details available within the approved assembly.",
    ],
    chemicalResistance: [
      "The epoxy body provides chemical-resistant protection in Legacy Flake Epoxy and Legacy Flake UT.",
      "Cleaners, vehicle fluids and disinfectants are reviewed against the selected topcoat's resistance data.",
    ],
    faqs: [
      { q: "Epoxy vs polyaspartic flake — which is right for my facility?", a: "Epoxy flake (Legacy Flake Epoxy) suits interiors that can allow a standard cure. Legacy Flake Fast-Cure and Legacy Flake One-Day suit spaces that must reopen quickly or see direct sunlight, because the polyaspartic seals are UV-stable. We recommend a system after reviewing traffic, chemicals, schedule and slab conditions." },
      { q: "What is the difference between polyurea, polyaspartic and epoxy flake floors?", a: "Epoxy is the standard: strong, chemical resistant and economical, with a normal cure. Polyurea cures very fast and bonds aggressively to ground concrete with some flexibility, so it is often used as the base coat on one-day floors. Polyaspartic is a fast-curing, UV-stable topcoat that will not yellow in sunlight. Many of our fastest flake floors use a polyurea base under a polyaspartic topcoat." },
      { q: "How fast can a commercial flake floor go back into service?", a: "Legacy Flake One-Day is the fastest, Legacy Flake Fast-Cure is fast, and Legacy Flake Epoxy follows a standard cure. Exact walk-on and equipment release times are confirmed in your submittal." },
      { q: "Can flake floors handle forklifts, carts or vehicle traffic?", a: "Flake floors handle foot traffic, carts and vehicle traffic in showrooms and service drives when the assembly is specified for it. Heavy forklift traffic usually calls for a higher-build epoxy or urethane cement system, which we can recommend instead." },
      { q: "How slip-resistant is a flake floor, and can texture be added?", a: "The flake broadcast adds some texture on its own, and an aggregate can be added to the topcoat where more traction is needed — for example at entries, wet areas and service drives. We confirm the texture on a sample before installation." },
      { q: "Can you install over an existing coating or VCT?", a: "VCT and failed coatings are removed so the new system bonds to sound, prepared concrete. A sound existing coating may accept a compatible system after testing and mechanical preparation." },
      { q: "How do I clean and maintain a commercial flake floor?", a: "Daily sweeping or dust mopping and regular cleaning with a neutral cleaner keep the finish looking new. We provide manufacturer-compatible care guidance at closeout and can recoat the topcoat as part of a maintenance program." },
      { q: "How much does commercial flake flooring cost in DFW?", a: "Cost is driven by surface preparation, moisture testing and any mitigation, square footage, the system selected (epoxy or polyaspartic) and how the work is phased around your operations. Send plans or request a site walk and we will return a firm bid within 24 hours of receiving plans." },
    ],
    photos: photoSets.flake,
  }),

  makeSystem({
    path: "/concrete-polishing",
    name: "Polished Concrete",
    metaTitle: "Concrete Polishing Dallas-Fort Worth | Legacy Industrial Coatings",
    metaDescription: "Commercial and industrial polished concrete for warehouses, retail, showrooms and offices in Dallas–Fort Worth and nationwide. Mockup-approved finishes, dust-controlled grinding, bids in 24 hours.",
    h1: "Commercial & Industrial Polished Concrete",
    overviewTitle: "What Polished Concrete Is",
    serviceName: "Concrete Polishing",
    intro: "Concrete polishing grinds the existing slab through progressively finer diamond tooling, densifies it and refines it to a chosen sheen, so the slab itself becomes the finished floor. It suits warehouses, retail, showrooms and offices that want a durable, low-maintenance surface without a coating.",
    whatItIs: [
      "The slab is mechanically ground through progressive tooling, densified and refined to the approved finish. Cream, fine aggregate and more exposed aggregate produce different appearances, all influenced by the original concrete.",
      "A showroom floor and a working warehouse may need different finish priorities. Mockups establish realistic expectations for color variation, existing repairs and visible cracks rather than promising a uniform manufactured surface.",
    ],
    whereUsed: [industryLinks.auto, industryLinks.retail, industryLinks.warehouse, industryLinks.office, industryLinks.school, industryLinks.pharma],
    cure: "Coordinate access around repairs, densifier and protective treatments. Mechanical polishing does not eliminate cure requirements for materials introduced during the work.",
    performance: [
      "Uses the existing slab as the finished wearing surface.",
      "Aggregate exposure and sheen selected through a representative mockup.",
      "Routine cleaning and appropriate protection help control dust and preserve appearance.",
    ],
    chemicalResistance: [
      "Polished concrete is not an acid-resistant lining or a substitute for secondary containment.",
      "Use compatible neutral cleaning products and address spills promptly.",
    ],
    prep: [
      "Assess slab hardness, flatness, contamination and existing coating removal requirements.",
      "Document cracks, joint conditions and patches that may remain visible in the finished floor.",
      "Approve aggregate exposure and sheen on representative concrete before proceeding.",
      "Coordinate compatible joint fill, repairs and protection from following trades.",
    ],
    sections: [
      {
        title: "Choose Your Polished Concrete Finish",
        paragraphs: [
          "Polished concrete finishes are described two ways: how much aggregate (stone) shows, and how much the floor shines. The Concrete Polishing Council of the American Society of Concrete Contractors (ASCC) uses aggregate exposure classes and gloss levels so owners, designers and installers mean the same thing. The existing slab always shapes the result, so we set the standard with a mockup on your concrete before the full floor is polished.",
        ],
        table: {
          columns: ["What you see", "Where it fits"],
          rows: [
            { label: "Cream (Class A)", values: ["Little or no aggregate; the smooth top paste of the slab", "Offices, showrooms and retail where a uniform look matters"] },
            { label: "Salt-and-pepper (Class B)", values: ["Fine aggregate speckled across the surface", "Retail, lobbies, schools and many warehouses"] },
            { label: "Exposed aggregate (Classes C–D)", values: ["Medium to large stone exposed for a terrazzo-like look", "Architectural spaces; requires deeper grinding"] },
            { label: "Sheen: matte to high gloss (Levels 1–4)", values: ["From a flat ground finish to a highly reflective polish", "Higher gloss brightens a space; matte hides wear in heavy traffic"] },
          ],
        },
      },
      {
        title: "Polished Concrete by Facility",
        paragraphs: [
          "Commercial concrete polishing is popular because it turns a slab you already own into a durable, low-maintenance floor. How we polish it depends on the building.",
        ],
        links: [
          { label: "Warehouses & distribution centers", url: "/warehouse-flooring", text: "Dust-proofed, densified floors that stand up to forklifts, with joint filling and aisle striping." },
          { label: "Retail & showrooms", url: "/retail-flooring", text: "Higher-gloss finishes that brighten the sales floor; we phase around store hours." },
          { label: "Offices & lobbies", url: "/office-flooring", text: "Cream or salt-and-pepper finishes alongside carpet tile and LVT." },
          { label: "Schools", url: "/school-flooring", text: "Low-maintenance corridors and commons scheduled around the academic calendar." },
          { label: "Auto dealerships & service", url: "/auto-dealership-flooring", text: "Showroom polish up front, sealed or coated service drives in back." },
          { label: "Pharmaceutical manufacturing", url: "/pharmaceutical-flooring", text: "Floor restoration with crack and divot repair in an operating plant." },
        ],
      },
      {
        title: "Polished Concrete vs. Epoxy vs. Sealed Concrete",
        paragraphs: [
          "All three start with the same slab. The difference is what ends up on top, and what the floor has to survive.",
        ],
        table: {
          columns: ["Polished concrete", "Epoxy coating", "Sealed & densified"],
          rows: [
            { label: "What it is", values: ["The slab ground, densified and polished; no coating", "A resin layer bonded to the slab", "A densifier and sealer on the existing surface"] },
            { label: "Best for", values: ["Sound slabs in distribution, retail, offices and showrooms", "Color, safety zoning, chemical exposure and damaged slabs", "Back-of-house and budget-driven spaces"] },
            { label: "Chemical resistance", values: ["Limited", "Good to very good", "Limited"] },
            { label: "Downtime", values: ["Often none beyond the work zone", "Several days for full cure", "Short"] },
            { label: "Maintenance", values: ["Routine cleaning and periodic burnishing", "Routine cleaning; periodic topcoat renewal", "Periodic resealing"] },
          ],
        },
        link: { label: "Compare with industrial epoxy flooring", url: "/industrial-epoxy" },
      },
      {
        title: "Our Polishing Process",
        paragraphs: [
          "A good polish is mostly preparation and patience. Every project follows the same sequence:",
        ],
        ordered: true,
        items: [
          "Assess the slab: hardness, flatness, contamination, existing coatings and visible repairs.",
          "Remove existing coatings, adhesives or sealers where present.",
          "Grind through a progressive sequence of diamond tooling to the approved aggregate exposure, with dust control.",
          "Densify the slab to harden the surface and reduce dusting.",
          "Fill joints and repair cracks with a compatible filler.",
          "Polish to the approved sheen, confirmed against the mockup.",
          "Apply a protective guard where specified, and hand over a maintenance plan.",
        ],
      },
      {
        title: "Polished Concrete in Dallas–Fort Worth",
        keepLocal: true,
        paragraphs: [
          "Our Plano headquarters keeps us close to polished concrete projects across Dallas–Fort Worth, so site walks happen within 1–3 business days and crews can phase work around retail hours or a running warehouse. We polish floors throughout the Metroplex, including Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Lewisville and Carrollton, and travel for multi-site and national programs.",
        ],
        links: [
          { label: "Polished concrete in Dallas", url: "/epoxy-flooring/dallas" },
          { label: "Polished concrete in Fort Worth", url: "/epoxy-flooring/fort-worth" },
          { label: "Polished concrete in Plano", url: "/epoxy-flooring/plano" },
          { label: "All service areas", url: "/service-areas" },
        ],
      },
      {
        title: "What Polished Concrete Costs",
        paragraphs: [
          "Polished concrete pricing depends mostly on the condition of the slab and the finish you choose. Deeper aggregate exposure and higher gloss take more grinding and polishing passes. The main factors:",
          // TODO Evan: add typical $/SF ranges by finish level (cream, salt-and-pepper, exposed aggregate).
          "Send drawings or request a site walk and we return a full bid within 24 hours of receiving plans.",
        ],
        items: [
          "Square footage, layout and access",
          "Removal of existing coatings, adhesives or sealers",
          "Slab hardness, flatness and the amount of crack and joint repair",
          "Aggregate exposure (cream, salt-and-pepper or exposed aggregate)",
          "Target sheen and any guard or dye",
          "Phasing, nights and weekends",
        ],
      },
      {
        title: "Recent Polishing Projects",
        paragraphs: [
          "Examples of recent concrete polishing and sealing work:",
          // TODO Evan: approve additional polishing projects to feature by name.
        ],
        links: [
          { label: "Pharmaceutical manufacturing polished concrete", url: "/commercial-case-studies/pharmaceutical-manufacturing-polished-concrete", text: "Floor restoration with polyurea crack and divot repair in an operating facility." },
          { label: "Fast-casual restaurant concrete sealing", url: "/commercial-case-studies/fast-casual-restaurant-concrete-sealing", text: "Sealed concrete for a restaurant that needed to reopen fast." },
        ],
      },
    ],
    faqs: [
      { q: "Can you polish an existing slab?", a: "Often, yes. Contamination, previous coatings, repairs and the condition of the concrete all affect the result, so we assess the slab and set expectations with a mockup before the full floor is polished." },
      { q: "Will polishing hide cracks?", a: "No. Cracks can be repaired and filled so they're serviceable, but polished concrete keeps visible evidence of the original slab. That character is part of the look." },
      { q: "How long does polished concrete last?", a: "The polished slab is the wearing surface, so there is no coating to peel or wear through. With routine cleaning and periodic burnishing or guard renewal in high-traffic areas, the finish keeps its appearance for many years." },
      { q: "Is polished concrete slippery?", a: "Clean, dry polished concrete generally provides good traction, and sheen level does not by itself make a floor slippery. Water, oil and dust are what reduce traction, so entrances and wet areas need matting and a cleaning plan. We can recommend a lower sheen or a different system where floors stay wet." },
      { q: "Polished concrete or epoxy for a high-traffic distribution center?", a: "For a sound slab in dry distribution space, polished concrete is durable, low maintenance and has no coating to wear off under forklifts. Epoxy makes more sense where you need color and safety zoning, chemical resistance, or a sealed surface over a damaged slab." },
      { q: "How much downtime does polishing require?", a: "Usually only the area being worked on is out of service, because there is no coating to cure. We phase large floors zone by zone and can work nights and weekends." },
      { q: "How do we maintain polished concrete?", a: "Dust-mop daily, clean with a neutral cleaner and an auto-scrubber, and burnish periodically in high-traffic areas. Avoid acidic cleaners. We hand over a maintenance plan at closeout." },
      { q: "How much does polished concrete cost per square foot?", a: "Cost depends on slab condition, coating removal, repairs, the finish and sheen you choose, square footage and phasing. Send plans or request a site walk and we return a full bid within 24 hours of receiving plans." },
    ],
    photos: photoSets.polished,
  }),

  makeSystem({
    path: "/concrete-sealing",
    name: "Sealed & Densified Concrete",
    metaTitle: "Commercial Concrete Sealing Dallas-Fort Worth | Restaurants, Breweries & Warehouses",
    metaDescription: "Professional commercial concrete sealing across DFW. Stain-resistant, easy-clean sealed concrete floors for restaurants, breweries, commercial kitchens, and warehouses. Reseal every 2–5 years.",
    h1: "Commercial Concrete Sealing",
    intro: "Sealed and densified concrete is a lithium-silicate densifier with a penetrating or film-forming sealer applied to the existing slab, with no added coating thickness. It is used in warehouses, back-of-house areas and parking levels that need easier cleaning and less surface dust without a full polished-concrete process.",
    whatItIs: [
      "A densifier reacts within the concrete surface; a sealer or coating provides a separate form of protection. We select those treatments according to slab condition, cleaning practices and expected exposure.",
      "Legacy Sealed Concrete 1K is a single-component high-performance floor coating and a specified sealed-concrete finish option. It is not interchangeable with a penetrating densifier, and the approved scope should state which treatment is being installed.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.data, industryLinks.retail, industryLinks.office, industryLinks.manufacturing],
    buildups: [{
      title: "Legacy Sealed Concrete 1K — sealed-concrete finish option",
      layers: [{ layer: "Finish", product: "Single-component high-performance floor coating" }],
    }],
    cure: "Follow the selected densifier, sealer or coating instructions. Release criteria differ between penetrating treatments and film-forming finishes.",
    performance: [
      "Concrete-focused finish for dust control and practical maintenance.",
      "Penetrating and film-forming options selected for the actual service.",
      "Retains visible slab character rather than concealing existing variation.",
    ],
    chemicalResistance: [
      "Stain protection varies with the selected finish and is not equivalent to containment-grade chemical resistance.",
      "Confirm oils, cleaners and other expected exposures before selecting the treatment.",
    ],
    faqs: [
      { q: "Are densifier and sealer the same material?", a: "No. A densifier reacts with the concrete; a sealer or coating provides a different protective function." },
      { q: "Is Legacy Sealed Concrete 1K a penetrating densifier?", a: "No. It is a single-component high-performance floor coating offered as a sealed-concrete finish option." },
      { q: "Can you finish an existing warehouse slab?", a: "Yes, subject to contamination removal, repairs and compatibility checks. Existing finishes may need removal before treatment." },
      { q: "Will sealed concrete look like polished concrete?", a: "Not necessarily. Sealing does not include the progressive mechanical refinement that establishes a polished finish." },
    ],
    photos: photoSets.warehouse,
  }),

  makeSystem({
    path: "/deck-coatings",
    name: "Deck & Traffic Coatings",
    ...legacyMetadata("deck-coatings"),
    intro: "Traffic-bearing deck coatings protect elevated concrete while providing the wearing surface for vehicles or pedestrians. We detail the membrane, wear zones and transitions as a complete assembly.",
    whatItIs: [
      "Vehicular systems must address tire wear, turning forces, ramps and weather exposure. Pedestrian systems balance waterproofing, traction, appearance and maintenance in walkways, balconies and plazas.",
      "For pedestrian decks we install the Legacy Pedestrian Deck family — standard, aliphatic, fast cure, plywood, mechanical-room, decorative and moisture-containment versions — plus Legacy PMMA Pedestrian for fast cure. Legacy Textured Traffic Overlay and Legacy Epoxy Broadcast Overlay are textured, non-waterproof options. Legacy High Traffic Urethane vehicular systems are covered on the parking structures page.",
      "Drain interfaces, cracks, expansion joints and terminations are as important as the field coating. Heavy-duty wear areas are identified on the layout rather than left to an unspecified field adjustment.",
    ],
    whereUsed: [industryLinks.parking, industryLinks.multifamily, industryLinks.hotel, industryLinks.auto, industryLinks.office],
    buildups: [],
    cure: "Legacy High Traffic Urethane: traffic at 72 hrs at 75°F/50% RH. Legacy High Traffic Urethane FC and FC Textured: 24–36 hrs. Legacy Pedestrian Deck: 48 hrs. Legacy PMMA Vehicular: 1-hour return to service. Confirm the applicable assembly and actual conditions before release.",
    performance: [
      "Standard and heavy-duty vehicular assemblies address different wear demands.",
      "Legacy High Traffic Urethane FC Textured provides integral texture without broadcast aggregate.",
      "UV-exposed work requires the specified exterior-compatible finish.",
      "Traffic-bearing coatings require maintained details, drains and wear surfaces.",
    ],
    chemicalResistance: [
      "Review fuel, oil, deicing products and cleaning chemicals with the selected manufacturer.",
      "A traffic coating is not automatically suitable for prolonged fuel immersion or chemical containment.",
    ],
    prep: [
      "Concrete substrate: 3,000 psi for pedestrian use; 4,000 psi for vehicular use.",
      "Concrete cure: 28 days; shot-blast to ICRI CSP 3–4.",
      "Survey deck movement, existing coatings, drainage, cracks and joint details before application.",
      "Coordinate waterproofing terminations, mockups, adhesion checks and environmental monitoring.",
    ],
    faqs: [
      { q: "Can pedestrian coating be used on a parking ramp?", a: "Only if specifically approved for that use. Vehicular turning and ramp loads require the appropriate traffic-bearing assembly." },
      { q: "Where is heavy-duty wear protection needed?", a: "Typical candidates include turns, ramps and ticket-spitter areas. The approved layout establishes where additional wear layers apply." },
      { q: "Does the FC Textured system need broadcast aggregate?", a: "The verified Legacy High Traffic Urethane FC Textured assembly is integrally textured and does not use broadcast aggregate." },
      { q: "Can an existing deck coating be recoated?", a: "Potentially. We assess adhesion, moisture, deterioration and compatibility before deciding whether to retain or remove it." },
      { q: "What controls reopening?", a: "The selected system, site conditions and completed detail work control release. Fast-cure and conventional assemblies have different schedules." },
    ],
    photos: photoSets.hospitality,
  }),

  makeSystem({
    path: "/commercial-floor-maintenance",
    name: "Commercial Floor Maintenance",
    metaTitle: "Commercial Floor Cleaning & Maintenance in DFW | Legacy",
    metaDescription: "Manufacturer-trained commercial floor cleaning and maintenance in Dallas-Fort Worth. Deep cleaning, degreasing, repairs, resealing, and VCT strip and wax.",
    h1: "Commercial Floor Cleaning & Maintenance",
    intro: "Commercial floor maintenance is a scheduled program of cleaning, degreasing, repairs and resealing matched to the floor that is actually installed. We plan it around your operating hours so the floor lasts longer without incompatible products covering it.",
    whatItIs: [
      "Commercial maintenance includes condition surveys, cleaning, degreasing, localized repairs, compatible resealing and wear-surface renewal. Resinous floors, polished concrete and resilient finishes require different products and methods.",
      "Carpet tile, LVT and VCT need their own care strategies. Strip-and-wax belongs to compatible finish programs, not to every resilient or resinous floor. We document the existing finish before recommending treatment.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.retail, industryLinks.office, industryLinks.school, industryLinks.healthcare, industryLinks.hotel],
    cure: "Set access restrictions around the actual cleaner, repair material, finish or recoat; maintenance is not automatically an immediate-return operation.",
    performance: [
      "Condition-based repairs and renewal rather than unnecessary complete replacement.",
      "Cleaning methods matched to traction, appearance and finish chemistry.",
      "Documented product compatibility and phased access planning.",
    ],
    chemicalResistance: [
      "Use cleaning products approved for the installed floor.",
      "Avoid incompatible solvents, aggressive stripping agents and insulating waxes on specialty floors.",
    ],
    prep: [
      "Identify the installed floor and any existing maintenance film.",
      "Survey wear, contamination, damage and adhesion before recommending renewal.",
      "Test the proposed cleaning or coating method in a representative area.",
      "Coordinate dry access, furniture movement and protection during reopening.",
    ],
    faqs: [
      { q: "Can one cleaner be used throughout the building?", a: "Only if it is compatible with every affected finish. Specialty floors and maintenance films may require separate care products." },
      { q: "Do all floors need wax?", a: "No. Wax can be inappropriate for resinous, polished, ESD and some resilient systems. We follow the installed manufacturer's care guidance." },
      { q: "When is recoating better than replacement?", a: "A compatible recoat can be appropriate when the underlying assembly remains well bonded and damage is repairable." },
      { q: "Can maintenance be phased?", a: "Yes. We coordinate work areas, drying or curing requirements and protected routes with the facility team." },
    ],
    photos: photoSets.office,
  }),

  makeSystem({
    path: "/secondary-containment-coatings",
    name: "Transformer Oil & Secondary Containment Coatings",
    crumbName: "Secondary Containment",
    serviceName: "Transformer Oil Containment Coatings",
    metaTitle: "Transformer Oil Containment & Secondary Containment Coatings | Legacy Industrial Coatings",
    metaDescription: "Coatings and linings for transformer oil containment pits, curbs and basins at substations, power plants and data centers, plus generator fuel and chemical containment. Crack repair, joint detailing and inspection-ready linings.",
    h1: "Transformer Oil Containment & Secondary Containment Coatings",
    overviewTitle: "What Transformer Oil Containment Is",
    intro: "Transformer oil containment is the concrete pit, curb or basin under an oil-filled transformer that catches the insulating oil if the tank leaks or ruptures, so it can't reach soil, storm drains or nearby equipment. We line those structures with crack-bridging, oil-resistant coatings at substations, power plants and data center campuses, and line generator fuel and chemical containment the same way.",
    whatItIs: [
      "A large power transformer is filled with insulating oil that cools the windings. Depending on its size, a single unit can hold hundreds to many thousands of gallons, typically mineral oil or a natural ester fluid. A slow leak, a failed gasket or a tank rupture during an electrical fault can release that oil quickly, along with any water used to fight a fire.",
      "Containment is the plan for that day. The structure under the transformer — a concrete pit, often filled with washed stone, a curbed pad or a basin draining to a collection system — has to hold the oil until it is cleaned up. Bare concrete is not enough on its own: concrete cracks, shrinks and has joints and penetrations, and oil and water find every one of them. A properly detailed lining seals the floor, walls, joints and penetrations into one continuous, inspectable surface.",
    ],
    sections: [
      {
        id: "oil-containment-pits",
        title: "Transformer Oil Containment Pits, Curbs and Basins",
        paragraphs: [
          "We line the containment structures that sit under and around oil-filled transformers, reactors and other oil-filled electrical equipment:",
        ],
        items: [
          "Below-grade concrete pits and moats, including pits that are backfilled with washed stone for fire quenching",
          "Curbed transformer pads and perimeter curbs with curb-and-trench collection",
          "Shared collection basins and sumps fed by multiple transformers",
          "Indoor transformer vaults and curbed rooms that need a liquid confinement area",
          "Penetrations for conduit, grounding and drains, and the interface with oil-stop valves, separators and pumps",
        ],
      },
      {
        title: "Where Transformer Containment Is Needed",
        paragraphs: [
          "Utility substations and switchyards, power generation plants, solar and battery energy storage interconnections, and the on-site substations and transformer yards that feed data center campuses. Data center campuses usually have two containment needs side by side: transformer oil and the diesel fuel that runs the backup generators.",
        ],
        links: [
          { label: "Data center flooring", url: "/data-center-flooring", text: "Transformer yards, generator fuel containment and the white space inside." },
          { label: "Battery room flooring", url: "/battery-room-flooring", text: "Acid-resistant floors and curbs for lead-acid and other battery rooms." },
          { label: "Novolac epoxy flooring", url: "/novolac-epoxy-flooring", text: "Chemical-resistant linings for indoor chemical and fuel containment." },
        ],
      },
      {
        title: "The Rules Behind Containment (In Plain English)",
        paragraphs: [
          "Containment is designed by the owner's engineer and documented in the facility's spill plan. Our job is to make the structure hold oil. These are the references that usually shape the design:",
        ],
        table: {
          columns: ["What it covers", "What it means for the lining"],
          rows: [
            { label: "EPA SPCC (40 CFR 112)", values: ["Facilities with more than 1,320 gallons of aboveground oil storage that could reach waters of the U.S. Transformers are 'oil-filled operational equipment'; fuel tanks are bulk storage.", "The containment system, walls and floor, must be capable of containing oil until cleanup. Cracked concrete and coatings are inspection items."] },
            { label: "IEEE 980", values: ["The industry guide for containment and control of oil spills in substations: pit, curb and basin designs, stone fill and drainage.", "Sets the design intent the engineer sizes to; the lining must keep the pit oil-tight for that design."] },
            { label: "FM Global Data Sheet 5-4", values: ["Insurer guidance for transformers: when containment is needed for fire protection, how far it extends and removal of rainwater.", "Often drives curb extents and fire-water capacity at insured facilities."] },
            { label: "NFPA 70 (NEC) 450.27", values: ["Outdoor oil-insulated transformers near combustible buildings; oil enclosures may be fire-resistant dikes, curbed areas or basins.", "The enclosure has to be continuous and durable outdoors."] },
            { label: "Generator fuel (SPCC 112.8)", values: ["Bulk fuel containment sized for the largest tank plus freeboard for precipitation, set by the certifying engineer.", "Diked areas must be sufficiently impervious to the stored fuel."] },
          ],
        },
      },
      {
        title: "What the Lining Has to Do",
        paragraphs: [
          "A transformer pit is outdoors, wet much of the time, exposed to sun and temperature swings, and may sit for years before it ever sees a spill. The lining has to be ready on that day:",
        ],
        items: [
          "Resist the insulating fluid on site: mineral oil or natural ester. We require the manufacturer's chemical-resistance data for the specific fluid, including immersion",
          "Bridge cracks and move with the concrete. Rigid coatings can crack along with the slab; outdoor pits usually call for a flexible, crack-bridging membrane over a primer",
          "Stand up to UV and weather where exposed, with a UV-stable topcoat on curbs and walls",
          "Seal joints, corners, cold joints and every penetration as part of the same continuous lining",
          "Stay inspectable: a light, uniform surface makes cracks, oil staining and damage easy to spot on routine SPCC inspections",
          "Stay bonded under standing rainwater and the weight and abrasion of stone fill",
        ],
      },
      {
        title: "Legacy Containment Systems",
        paragraphs: [
          "Legacy Containment Membrane 42 is a flexible, waterproof polyurethane membrane, 42 dry mils excluding primer and aggregate, finished with two coats of a chemical-resistant aliphatic urethane. The flexible body bridges hairline cracks and moves with the concrete, and the aliphatic finish holds up to sun on exposed curbs and walls.",
          "Where the floor also has to resist harsher chemicals, the Legacy Containment Rider puts a crack-bridging urethane membrane under a novolac or epoxy floor of at least 32 dry mils, so the top resists chemicals and the membrane below keeps the room liquid-tight if the slab cracks.",
          "In the manufacturer's published 7-day spot tests, the novolac and chemical-resistant urethane topcoats show no effect from motor oil, diesel, gasoline or jet fuel. Transformer fluids are confirmed for the specific mineral oil or natural ester on site before we select the system. Full build-ups are listed below.",
        ],
      },
      {
        title: "How We Line a Containment Pit",
        paragraphs: [],
        ordered: true,
        items: [
          "Review the containment drawings, fluid type, drainage and any oil-stop valves, separators or pumps",
          "Remove stone if present, pump out water and clean oil-contaminated concrete; contaminated concrete is removed where cleaning cannot restore adhesion",
          "Prepare the concrete to the coating manufacturer's profile per SSPC-SP 13/NACE No. 6 and ICRI 310.2R",
          "Repair spalls and cracks, rout and fill active cracks, and detail joints and penetrations with compatible sealants and reinforcement",
          "Apply primer, the crack-bridging lining at the specified thickness, and a UV-stable topcoat where exposed",
          "Verify thickness, inspect for pinholes and holidays, and run any specified flood or hydrostatic test before stone goes back in",
          "Closeout photos and documentation for the facility's SPCC records",
        ],
      },
      {
        title: "Fuel and Chemical Containment",
        paragraphs: [
          "The same discipline applies to generator day tanks and fuel storage dikes, chemical storage curbs and process containment. Indoors, where chemicals are aggressive or temperatures are higher, we use Legacy Novolac 32 or Legacy Novolac 125 Broadcast, alone or over the Legacy Containment Rider, checked against the manufacturer's chemical-resistance chart for each stored chemical.",
        ],
        link: { label: "Novolac epoxy flooring", url: "/novolac-epoxy-flooring" },
      },
    ],
    whereUsed: [industryLinks.data, industryLinks.manufacturing, industryLinks.electronics, industryLinks.aerospace],
    buildups: [],
    cure: "No oil, fuel or chemical goes into the containment until the lining reaches its specified chemical-service cure and any specified inspection or flood test is complete. Stone fill goes back only after the lining passes inspection.",
    performance: [
      "Continuous lining across pit floors, walls, curbs, joints and penetrations.",
      "Crack-bridging membrane options for outdoor pits that see weather and movement.",
      "UV-stable topcoats for exposed curbs and walls.",
      "Novolac epoxy for indoor chemical containment: compressive strength 10,000 psi (ASTM D695); Shore D 84.",
    ],
    chemicalResistance: [
      "Mineral oil and natural ester transformer fluids, diesel fuel, battery electrolyte and process chemicals are each confirmed individually against the manufacturer's resistance data, including immersion.",
      "Written compatibility is required for the complete lining assembly; thickness alone does not establish resistance.",
    ],
    prep: [
      "Plan ASTM F2170 / F1869 moisture testing where the lining will be applied over interior slabs.",
      "Clean and assess oil-contaminated concrete; remove contaminated concrete where cleaning cannot restore adhesion.",
      "Prepare concrete per SSPC-SP 13/NACE No. 6 to the manufacturer's ICRI CSP profile.",
      "Detail joints, cold joints, corners, curbs and penetrations before the field lining.",
      "Coordinate inspections and any specified flood testing before stone fill, concealment or service.",
    ],
    faqs: [
      { q: "Does a coating make my facility SPCC compliant?", a: "No coating does that on its own. Compliance comes from the facility's SPCC plan and the containment design certified by the engineer. The lining makes the containment structure capable of holding oil, which is what the plan relies on." },
      { q: "Does SPCC require 110% containment for transformers?", a: "Not for transformers. EPA treats transformers as oil-filled operational equipment under the general containment rule, sized for the most likely discharge, or the alternative inspection-and-contingency approach. The 110%-style sizing people quote comes from bulk storage tanks such as generator fuel. The engineer sets the volume." },
      { q: "Why isn't bare concrete good enough for a transformer pit?", a: "Concrete cracks, shrinks and has joints and penetrations. Oil and water move through them, and EPA lists cracked concrete as an inspection item. A continuous, crack-bridging lining keeps the pit oil-tight." },
      { q: "Can you line a pit that already has stone and old oil in it?", a: "Yes. We remove the stone, pump out water, clean or remove oil-contaminated concrete, repair cracks, line the pit and verify it before the stone goes back." },
      { q: "Do you line containment for natural ester (FR3-type) fluids?", a: "Yes. Natural ester fluids behave differently from mineral oil and can harden into a film over time, so we confirm the lining's resistance data for the specific fluid before selecting a system." },
      { q: "Can you work in an energized substation or an operating data center?", a: "We work under the owner's safety program, outage plan and escort requirements, and schedule pits and curbs around outages and access windows set by the owner." },
      { q: "Do you also coat generator fuel containment and battery rooms?", a: "Yes. Generator day tank and fuel dikes, battery room floors and curbs, and chemical containment are all part of our containment work." },
    ],
    photos: photoSets.data,
  }),

  makeSystem({
    path: "/battery-room-flooring",
    name: "Battery Room Flooring",
    metaDescription: "Acid-resistant flooring for DFW UPS, BESS and battery rooms, with novolac options, integral cove, coated curbs and coordinated spill-control details.",
    intro: "Battery-room flooring should follow the battery chemistry and spill-control design. We coordinate resistant resin, integral cove and coated curbs for UPS, BESS and charging environments.",
    whatItIs: [
      "Lead-acid battery areas typically get Legacy Novolac 32 or Legacy Novolac 125 Broadcast, carried continuously through cove and curb details. The floor is selected for the electrolyte and expected contact conditions, not simply labeled industrial epoxy.",
      "Lithium-based BESS rooms have a different hazard profile. Flooring does not replace fire protection, ventilation or electrical safeguards. Where an ESD option is specified, electrical performance must be coordinated with chemical resistance and the room's safety requirements.",
    ],
    whereUsed: [industryLinks.data, industryLinks.warehouse, industryLinks.manufacturing, industryLinks.electronics],
    sections: [{ title: "Novolac Epoxy for Battery Rooms", paragraphs: ["Both build-ups and published novolac properties are on the novolac epoxy page."], link: { label: "Novolac epoxy flooring", url: "/novolac-epoxy-flooring" } }],
    cure: "Keep batteries, electrolyte exposure and cleaning chemicals off the floor until the selected system reaches its specified service cure.",
    performance: [
      "Integral cove and coated curbs support a continuous spill-control finish.",
      "Novolac and other acid-resistant options selected by actual battery chemistry.",
      "ESD options require a coordinated, tested specialty assembly.",
    ],
    chemicalResistance: [
      "Verify electrolyte type, concentration, temperature and contact duration with the lining manufacturer.",
      "Confirm resistance to neutralizing agents and maintenance cleaners as well as the spill itself.",
    ],
    prep: [...standardPrep, "Identify existing electrolyte contamination and remediate affected concrete before coating.", "Coordinate curbs, penetrations, terminations and spill-control details with the design team."],
    faqs: [
      { q: "Do all battery rooms need the same floor?", a: "No. Lead-acid, lithium-based BESS and other battery installations have different chemical and safety requirements." },
      { q: "Why specify novolac?", a: "Novolac can provide a suitable option for aggressive chemical exposure, but the precise formulation must be checked against the electrolyte and service conditions." },
      { q: "Can you coat curbs and cove?", a: "Yes. We coordinate the floor with compatible integral cove, curb faces and penetration details." },
      { q: "Can an acid-resistant floor also provide ESD control?", a: "Potentially, through an approved specialty assembly. Electrical and chemical requirements must be verified together." },
    ],
    photos: photoSets.data,
  }),

  makeSystem({
    path: "/joint-filling-crack-repair",
    name: "Joint Filling & Crack Repair",
    metaDescription: "DFW concrete joint filling, crack and divot repair, and spall restoration for warehouses and production facilities. Semi-rigid polyurea and flush-finished repairs.",
    intro: "Unprotected joint edges and damaged concrete interrupt cart travel, trap debris and deteriorate under repeated wheel loads. We repair the defect and select the filler around how the slab moves.",
    whatItIs: [
      "Semi-rigid polyurea supports control-joint edges under hard-wheel traffic. Referencing ACI 302 guidance, we coordinate filling with slab shrinkage, joint condition and the project's occupancy sequence, then fill to the specified depth and shave flush.",
      "Cracks, divots and spalls require different repair decisions. We remove unsound concrete, restore the affected profile and distinguish dormant damage from active movement that needs a movement-accommodating detail.",
      "Our pharmaceutical polished-concrete case study includes polyurea crack and divot repair integrated with floor restoration. The repair remains part of a coordinated floor process rather than a promise to make existing concrete visually uniform.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.manufacturing, industryLinks.pharma, industryLinks.data, industryLinks.retail],
    cure: "Coordinate joint-filling timing with slab shrinkage and the approved repair material. Reopen to wheel traffic only after the specified cure and flush finishing.",
    performance: [
      "Semi-rigid control-joint fill supports joint edges under traffic.",
      "Full-depth filling as specified, followed by flush shaving.",
      "Spall and divot repairs restore practical floor continuity.",
    ],
    prep: [
      "Map control joints, construction joints, expansion joints, cracks and spalls before selecting details.",
      "Remove debris, failed filler and unsound concrete; prepare clean, dry joint faces as required.",
      "Confirm joint depth and repair geometry against the approved material instructions.",
      "Maintain movement joints as movement joints; do not rigidly bridge active movement.",
    ],
    faqs: [
      { q: "Is joint filler the same as joint sealant?", a: "No. Semi-rigid filler supports traffic-bearing joint edges; a movement sealant accommodates movement. They are not interchangeable." },
      { q: "When should new joints be filled?", a: "Coordinate the timing with slab shrinkage, ACI 302 guidance and the project specification rather than automatically filling immediately after placement." },
      { q: "Why shave the filler flush?", a: "A flush finish supports smoother wheel travel and avoids a raised bead at the joint." },
      { q: "Can you repair divots during polishing?", a: "Yes. The pharmaceutical case study includes polyurea crack and divot repair coordinated with polished-concrete restoration." },
    ],
    photos: photoSets.pharma,
  }),

  makeSystem({
    path: "/moisture-mitigation",
    name: "Concrete Moisture Mitigation",
    metaDescription: "Concrete moisture testing and mitigation in DFW using ASTM F2170 and F1869, moisture-mitigating epoxy primers and approved vapor-barrier systems.",
    intro: "Moisture mitigation starts with documented slab conditions. We test, compare results with the proposed finish and select an approved mitigation assembly before the finished floor is installed.",
    whatItIs: [
      "ASTM F2170 in-situ RH and ASTM F1869 MVER testing describe different aspects of slab moisture conditions. Results must be reviewed with the receiving floor system's requirements rather than treated as interchangeable pass-or-fail numbers.",
      "Epoxy, novolac, flake, quartz and hangar systems are limited by high moisture vapor transmission, so we install them over a moisture-mitigating epoxy primer when testing calls for it. Legacy Urethane Cement tolerates up to 25 lb MVER (calcium chloride test) and is often the better choice on a damp slab.",
      "Other projects require a full vapor-barrier system coordinated with patching, adhesive and finish materials. Neither approach is a repair for active leaks or unresolved hydrostatic pressure.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.healthcare, industryLinks.school, industryLinks.office, industryLinks.manufacturing],
    buildups: [{
      title: "Legacy Moisture Barrier Primer",
      layers: [
        { layer: "Alternate primer", product: "Moisture-mitigating epoxy primer", dft: "25 mils" },
      ],
    }],
    cure: "Observe the approved mitigation system's cure and overcoat windows before applying patches, adhesives or floor finishes.",
    performance: [
      "Documented testing before system selection.",
      "Primer and full vapor-barrier options coordinated with the receiving floor.",
      "Compatibility review across mitigation, repair and finish materials.",
    ],
    prep: [
      "Plan and document ASTM F2170 and ASTM F1869 testing under the required service conditions.",
      "Investigate leaks, drainage, slab history and existing vapor-retarder information.",
      "Remove incompatible coatings and prepare the concrete to the selected mitigation system's instructions.",
      "Coordinate cracks, joints, repairs, environmental monitoring and subsequent installation windows.",
    ],
    faqs: [
      { q: "Are ASTM F2170 and F1869 interchangeable?", a: "No. They use different methods and report different conditions. Apply the receiving system's specified test requirements." },
      { q: "Does every floor need a full vapor barrier?", a: "No. The slab results, exposure and receiving finish determine whether a compatible primer or a separate mitigation assembly is required." },
      { q: "Will an epoxy primer fix an active leak?", a: "No. Water entry and hydrostatic conditions must be investigated and addressed separately." },
      { q: "Can mitigation be used below resilient flooring?", a: "Yes, where the mitigation, patch, adhesive and resilient finish are approved as a compatible assembly." },
    ],
    photos: photoSets.warehouse,
  }),

  makeSystem({
    path: "/roof-deck-waterproofing",
    name: "Roof & Deck Waterproofing",
    metaDescription: "DFW fluid-applied roof coatings and deck waterproofing for equipment platforms, walkways, plazas and balconies, including Legacy membrane and pedestrian options.",
    intro: "Roof and deck waterproofing must address drainage, movement and penetrations as well as the field membrane. We separate roof-coating scopes from pedestrian wearing surfaces and buried waterproofing.",
    whatItIs: [
      "We organize Legacy roof systems by roof type: built-up and modified bitumen, concrete, metal, single-ply and spray polyurethane foam, each with aliphatic urethane, acrylic or silicone options. Rooftop equipment platforms and walkways get compatible protection rather than assuming the roof membrane can take unrestricted traffic.",
      "Legacy Cold Fluid-Applied Membrane 60 is a cold fluid-applied membrane for below-tile or buried waterproofing. Legacy Pedestrian Deck provides a pedestrian traffic-bearing assembly for appropriate exposed decks. Plazas and balconies require details that coordinate the selected membrane with drains, thresholds and adjoining construction.",
    ],
    whereUsed: [industryLinks.data, industryLinks.office, industryLinks.hotel, industryLinks.multifamily, industryLinks.parking],
    buildups: [],
    sections: [{ title: "Data Center Roofs", paragraphs: ["Data center roofs carry chillers, condensers and cable trays that need protected walkways and coatings matched to the existing roof type. We coordinate roof work with the floor and containment scopes inside the building."], link: { label: "Data center solutions", url: "/data-center-flooring" } }],
    cure: "Legacy Pedestrian Deck: traffic at 48 hrs. Coordinate membrane cure, ASTM D5957 flood testing and protection before concealment against the approved application requirements.",
    performance: [
      "Cold fluid-applied membrane: 60 dry mils; flood-tested per ASTM D5957.",
      "Legacy Pedestrian Deck assembly: 32 dry mils.",
      "Separate selection for roof coatings, exposed traffic and buried waterproofing.",
    ],
    chemicalResistance: [
      "Identify equipment oils, maintenance products and other rooftop exposures before selecting the membrane.",
      "Do not assume waterproofing approval establishes oil or chemical immersion resistance.",
    ],
    prep: [
      "Survey drainage, ponding, substrate condition, existing roof materials and termination heights.",
      "For the verified concrete pedestrian assembly: 3,000 psi concrete, 28-day cure and ICRI CSP 3–4 preparation.",
      "Coordinate drains, penetrations, thresholds, movement joints and equipment supports.",
      "Schedule specified flood testing and protect completed membrane from following trades.",
    ],
    faqs: [
      { q: "Are roof coating and traffic coating the same?", a: "No. Roof coatings and pedestrian wearing surfaces have different service requirements and must be selected accordingly." },
      { q: "Where is the cold fluid-applied membrane used?", a: "The verified assembly is intended for below-tile or buried waterproofing, with the specified protection and testing." },
      { q: "Can you waterproof rooftop equipment walkways?", a: "Yes, through a compatible assembly coordinated with the roof membrane, equipment access and expected traffic." },
      { q: "Does coating solve poor drainage?", a: "Not by itself. Drainage and ponding conditions must be reviewed before the membrane is selected." },
    ],
    photos: photoSets.hospitality,
  }),

  makeSystem({
    path: "/epoxy-cove-base",
    name: "Integral Epoxy Cove Base",
    metaDescription: "Integral epoxy cove base for DFW kitchens, cleanrooms and processing facilities. Monolithic floor-to-wall transitions with verified Legacy Epoxy Cove data.",
    intro: "Integral cove removes the sharp floor-to-wall corner that traps residue and complicates cleaning. We connect the floor and perimeter with a trowel-applied, monolithic resin detail.",
    whatItIs: [
      "A sanitary cove curves the floor finish up the wall or curb using compatible resin mortar. It can address a deficient base detail identified during a health inspection, but acceptance depends on the applicable requirements and the complete installation.",
      "Legacy Epoxy Cove is troweled 1/8\" thick and 4\" high (adjustable) over drywall, green board, concrete or CMU, with a novolac, epoxy, CRU or polyaspartic topcoat. Legacy Urethane Cement Cove and Legacy MMA Cove match those floor systems.",
    ],
    whereUsed: [industryLinks.kitchen, industryLinks.food, industryLinks.pharma, industryLinks.pharmacy, industryLinks.healthcare],
    buildups: [],
    cure: "Coordinate cleaning and chemical-service release with both the cove material and adjoining floor system.",
    performance: [
      "Shore D by topcoat: novolac 84, epoxy 82, CRU 70, polyaspartic 70.",
      "CRU and polyaspartic topcoats pass JIS Z 2801-2010.",
      "Cove height describes how far the cove runs up the wall, not coating thickness.",
    ],
    chemicalResistance: [
      "Verify disinfectants, food-service cleaners and process chemicals against the cove and floor materials.",
      "Confirm the complete perimeter assembly where washdown or aggressive cleaning is expected.",
    ],
    prep: [
      "Remove failed base and prepare sound wall and floor substrates for a compatible bond.",
      "Coordinate backing, terminations and movement at dissimilar construction.",
      "Detail inside corners, outside corners, door returns and equipment interruptions.",
      "Approve a sample cove profile and coordinate installation with the field floor.",
    ],
    faqs: [
      { q: "Can cove base address a health-inspection issue?", a: "It can correct an unsuitable floor-to-wall detail, but the authority having jurisdiction determines acceptance of the complete work." },
      { q: "Is integral cove the same as glued-on base?", a: "No. Integral cove is formed with compatible resin material to create a continuous transition with the floor." },
      { q: "Does the cove height describe coating thickness?", a: "No. The stated height describes how far the cove extends up the wall." },
      { q: "Can you repair an existing kitchen perimeter?", a: "Yes, after assessing the wall, existing floor bond, moisture and termination details. The pump-room case study illustrates a completed cove-base scope." },
    ],
    photos: photoSets.cove,
  }),

  makeSystem({
    path: "/resilient-flooring",
    name: "Resilient & Soft-Surface Flooring",
    metaDescription: "Commercial carpet tile, LVP/LVT, heat-welded sheet vinyl, rubber and VCT for DFW facilities, with substrate preparation and compatible maintenance planning.",
    intro: "Commercial resilient flooring covers carpet tile, LVT and LVP, sheet vinyl, rubber and VCT. We remove the old floor, prepare and test the slab, and install the finish that fits each room, alongside our resinous and polished concrete floors.",
    sections: [
      {
        title: "Commercial Carpet Tile and LVT Installation",
        paragraphs: ["Our two most-requested resilient floors each have their own page with specs, installation details and FAQs:"],
        links: [
          { label: "Commercial carpet tile installation", url: "/commercial-carpet-tile", text: "Modular carpet for offices, schools, healthcare, hotels and multifamily, including removal, floor prep and after-hours installs." },
          { label: "Commercial LVT & LVP flooring", url: "/commercial-lvt-flooring", text: "Glue-down and rigid-core luxury vinyl tile and plank for healthcare, offices, schools, retail, hotels and multifamily." },
        ],
      },
    ],
    whatItIs: [
      "Carpet tile supports replaceable modular soft-surface layouts in offices and hospitality spaces. LVP/LVT provides modular resilient finishes, while rubber can address specific circulation, comfort and use requirements.",
      "Heat-welded sheet vinyl can provide coordinated seams and coved details where the selected system and facility protocols require them. VCT is a separate finish strategy, commonly paired with an approved maintenance-film program.",
      "Strip-and-wax is a care process for compatible floors, not a universal treatment for all resilient materials. We confirm the actual product, adhesive and manufacturer's maintenance guidance before recommending it.",
    ],
    whereUsed: [industryLinks.office, industryLinks.healthcare, industryLinks.school, industryLinks.hotel, industryLinks.retail, industryLinks.multifamily],
    cure: "Coordinate adhesive cure, seam welding and maintenance-finish drying with the selected floor manufacturer's installation requirements.",
    performance: [
      "Carpet tile, LVP/LVT, sheet vinyl, rubber and VCT selected by room function.",
      "Substrate flatness, adhesive compatibility and transitions are part of the scope.",
      "Maintenance plans distinguish no-wax products from compatible strip-and-wax programs.",
    ],
    chemicalResistance: [
      "Confirm disinfectants, cleaners and finish-removal products with the flooring manufacturer.",
      "Do not assume resilient finishes are appropriate for aggressive process chemicals or battery electrolyte.",
    ],
    prep: [
      "Evaluate substrate compliance using ASTM F710 where applicable.",
      "Perform the required ASTM F2170 and ASTM F1869 moisture testing and coordinate any mitigation.",
      "Correct substrate defects and verify compatibility of patching, mitigation, adhesive and floor finish.",
      "Review seam layouts, welded details, transitions and protection from following trades.",
    ],
    faqs: [
      { q: "How do you choose between LVT, sheet vinyl and rubber?", a: "We review room use, cleaning, seam requirements, traffic, comfort and the manufacturer's intended application." },
      { q: "Does every resilient floor need strip-and-wax?", a: "No. Some products use different care methods. Apply a maintenance film only where the product manufacturer permits it." },
      { q: "Can sheet vinyl include welded seams?", a: "Yes, when heat welding is part of the specified product and installation method. Cove and perimeter details must be coordinated as well." },
      { q: "Why test moisture below resilient flooring?", a: "Moisture can affect adhesives, patches and finishes. Testing informs whether a compatible mitigation assembly is required." },
    ],
    photos: photoSets.office,
  }),

  makeSystem({
    path: "/novolac-epoxy-flooring",
    name: "Novolac Epoxy Flooring",
    metaTitle: "Novolac Epoxy Flooring | DFW & Nationwide | Legacy Industrial Coatings",
    metaDescription: "Legacy Novolac 32 and 125 chemical-resistant epoxy floors for chemical storage, battery rooms, containment and food plants. Headquartered in Dallas-Fort Worth, working nationwide.",
    h1: "Novolac Epoxy Flooring for Chemical Resistance",
    intro: "Novolac epoxy is a more heavily cross-linked epoxy that resists stronger chemicals and higher operating temperatures than standard epoxy. We install Legacy Novolac 32 and Legacy Novolac 125 Broadcast in chemical storage, battery charging rooms, secondary containment and food plants.",
    whatItIs: [
      "Legacy Novolac 32 is a primed, two-coat novolac floor; Legacy Novolac 125 Broadcast builds two sand-broadcast base coats before two novolac seals for more body and texture. Both use a novolac epoxy with a published compressive strength of 10,000 psi and Shore D 84.",
      "Chemical resistance is checked against the manufacturer's novolac chemical resistance chart for your specific chemicals, concentrations and contact times before we recommend a build-up.",
    ],
    whereUsed: [
      { label: "Secondary containment", path: "/secondary-containment-coatings" },
      { label: "Battery rooms", path: "/battery-room-flooring" },
      industryLinks.food,
      industryLinks.data,
      industryLinks.manufacturing,
    ],
    cure: "Chemical-service release is confirmed in the submittal for the selected build-up and site conditions.",
    performance: [
      "Novolac epoxy: compressive strength 10,000 psi (ASTM D695); Shore D 84.",
      "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas.",
    ],
    chemicalResistance: [
      "Checked against the manufacturer's novolac chemical resistance chart for your specific chemicals.",
      "Confirm concentration, temperature and contact duration, including spills of neutralizing agents.",
    ],
    faqs: [
      { q: "When do I need novolac instead of standard epoxy?", a: "When the floor sees concentrated acids, solvents or constant heat that standard epoxy will not tolerate. We check your chemicals against the novolac resistance chart first." },
      { q: "What is the difference between Novolac 32 and Novolac 125?", a: "Novolac 32 is a primed, smooth or lightly textured floor. Novolac 125 adds two sand-broadcast base coats for more body and texture." },
      { q: "Can novolac run up curbs and cove?", a: "Yes. We carry the lining through cove, curbs and penetrations so containment is continuous." },
      { q: "Does novolac handle heat?", a: "It has a higher operating temperature than standard epoxies and suits areas around ovens and constant heat." },
    ],
    photos: photoSets.industrial,
  }),

  makeSystem({
    path: "/mma-flooring",
    name: "MMA Flooring",
    metaTitle: "MMA Flooring (Fast-Cure Methyl Methacrylate) | DFW & Nationwide | Legacy Industrial Coatings",
    metaDescription: "Legacy MMA floors cure in about an hour — for kitchens, food plants, pharmaceutical and any overnight shutdown. Headquartered in Dallas-Fort Worth, working nationwide.",
    h1: "MMA Flooring — Back in Service the Same Day",
    intro: "MMA (methyl methacrylate) flooring is an acrylic resin floor installed 1/8\" to 3/8\" thick that cures in about one hour. We install Legacy MMA systems when a facility can only give us an overnight or weekend shutdown.",
    whatItIs: [
      "Legacy MMA systems are non-porous and waterproof, UV stable for indoor or outdoor use, and can be installed over quarry tile and across a wide range of temperatures. Matching seamless cove base is available, and the floor needs no waxing.",
      "Every Legacy MMA system starts with an MMA primer and adhesion promoter, then a flexible or standard MMA body resin and an MMA topcoat. The systems meet South Coast AQMD VOC requirements and have a published tensile strength of 3,850 psi (ASTM D638).",
    ],
    whereUsed: [industryLinks.kitchen, industryLinks.food, industryLinks.pharma, industryLinks.hotel, industryLinks.data],
    cure: "One-hour cure; final release is confirmed in the submittal for site temperature and the selected Legacy MMA system.",
    performance: [
      "Tensile strength 3,850 psi (ASTM D638).",
      "Non-porous, waterproof and UV stable.",
      "Meets South Coast AQMD VOC requirements.",
    ],
    chemicalResistance: ["Confirm process chemicals and cleaners against the selected MMA topcoat."],
    faqs: [
      { q: "How fast can an MMA floor go back into service?", a: "Each MMA coat cures in about an hour, even in cold rooms, so the whole floor can be installed in one overnight or weekend shutdown. The return-to-traffic time depends on the system and temperature and is confirmed in your submittal." },
      { q: "Can MMA go over quarry tile?", a: "Yes. Legacy MMA systems can be installed over quarry tile after preparation, which avoids demolition in many kitchens." },
      { q: "Is MMA odorous during install?", a: "MMA has a strong odor while curing, so we plan ventilation and schedule work in shutdown windows." },
      { q: "Is there a matching cove base?", a: "Yes. Solid-color, flake and quartz Legacy MMA cove bases match the floor." },
    ],
    photos: photoSets.industrial,
  }),
);

/* ------------------------------------------------------------------ */
/* Commercial carpet tile and commercial LVT/LVP — dedicated search and */
/* ad landing pages. /resilient-flooring stays the overview hub.        */
/* ------------------------------------------------------------------ */
SYSTEM_PAGES.push(
  makeSystem({
    path: "/commercial-carpet-tile",
    name: "Commercial Carpet Tile Installation",
    crumbName: "Commercial Carpet Tile",
    serviceName: "Commercial Carpet Tile Installation",
    metaTitle: "Commercial Carpet Tile Installation | Legacy Industrial Coatings",
    metaDescription:
      "Commercial carpet tile installation for offices, schools, healthcare, hotels and multifamily. Old flooring removal, floor prep, moisture testing, furniture moves and after-hours installs. Bids in 24 hours.",
    h1: "Commercial Carpet Tile Installation",
    overviewTitle: "What Commercial Carpet Tile Is",
    intro:
      "Commercial carpet tile is modular carpet, usually 24\" × 24\" squares or planks, glued down with a releasable adhesive so damaged tiles can be swapped instead of replacing the whole floor. We remove the old floor, prepare and test the slab, and install carpet tile for offices, schools, healthcare, hotels and multifamily, often at night or over a weekend so the building stays open.",
    whatItIs: [
      "Carpet tile is the default soft floor for commercial interiors because it is easy to replace, easy to lay around furniture and access floors, and comes in patterns that hide wear. A broadloom carpet is one continuous roll; carpet tile breaks the floor into units that can be rotated, replaced from attic stock, or lifted to reach cabling under access floor.",
      "Most of the work that decides how long a carpet tile floor lasts happens before the first tile goes down: removing the old flooring and adhesive, patching and leveling the slab, testing moisture and pH, and choosing the adhesive the manufacturer requires. We handle all of it, so the floor carries the manufacturer's warranty.",
    ],
    sections: [
      {
        title: "Carpet Tile Installation We Handle",
        paragraphs: ["One crew, start to finish, so there is no gap between the demo contractor, the floor prep and the installer."],
        items: [
          "Removal of existing carpet, carpet tile, VCT, LVT or sheet goods, including old adhesive",
          "Floor prep: grinding, crack repair, skim coat and self-leveling underlayment to the manufacturer's flatness requirement",
          "Moisture and pH testing (ASTM F2170 relative humidity, ASTM F1869 calcium chloride, surface pH) before adhesive goes down",
          "Carpet tile, carpet planks and broadloom, installed to the manufacturer's layout (monolithic, quarter-turn, ashlar, brick or herringbone)",
          "Releasable pressure-sensitive adhesive or adhesive-free installation systems where the product allows",
          "Rubber wall base, transitions and reducers to LVT, polished concrete or resinous floors",
          "Furniture lifts and moves, phased installs in occupied offices, and night and weekend work",
          "Attic stock left on site per the specification, plus care and maintenance guidance at closeout",
        ],
      },
      {
        title: "Where We Install Carpet Tile",
        paragraphs: ["Carpet tile shows up in most commercial buildings. The spec changes with how the room is used:"],
        links: [
          { label: "Offices & corporate", url: "/office-flooring", text: "Open office, private offices and conference rooms, including installs over raised access floor." },
          { label: "Schools & universities", url: "/school-flooring", text: "Classrooms, libraries and admin areas, scheduled around the academic calendar." },
          { label: "Healthcare & clinics", url: "/healthcare-flooring", text: "Waiting rooms, offices and corridors where the facility allows soft flooring." },
          { label: "Hotels & hospitality", url: "/hotel-flooring", text: "Corridors, meeting rooms and amenity spaces, phased floor by floor." },
          { label: "Multifamily", url: "/multifamily-flooring", text: "Corridors, leasing offices and amenity spaces, with unit turns coordinated around residents." },
          { label: "Retail", url: "/retail-flooring", text: "Back offices, fitting rooms and branded retail spaces." },
        ],
      },
      {
        title: "What the Spec Should Cover",
        paragraphs: [
          "For GCs, architects and facility managers, these are the items that decide whether a carpet tile floor performs. We confirm each one in the submittal:",
        ],
        table: {
          columns: ["What it means", "Typical reference"],
          rows: [
            { label: "Installation standard", values: ["How the carpet is installed, from substrate to seams", "CRI 104 and the carpet manufacturer's installation guide"] },
            { label: "Substrate moisture", values: ["Moisture in the slab is the No. 1 cause of adhesive failure", "ASTM F2170 (in-situ RH) and ASTM F1869 (MVER), against the adhesive's limits"] },
            { label: "Flammability", values: ["Commercial carpet must meet fire codes for the occupancy", "ASTM E648 critical radiant flux (Class I or II) and the DOC FF 1-70 pill test"] },
            { label: "Static", values: ["Matters in offices with electronics", "AATCC 134 body voltage, per the product data"] },
            { label: "Acoustics", values: ["Carpet tile reduces impact noise between floors", "Impact insulation (IIC) ratings per ASTM E492/E989 where the design requires them"] },
            { label: "Section", values: ["Where carpet tile lives in the project manual", "CSI 09 68 13 Tile Carpeting"] },
          ],
        },
      },
      {
        title: "How a Commercial Carpet Tile Project Runs",
        paragraphs: [],
        ordered: true,
        items: [
          "Site walk within 1–3 business days: measure, check the existing floor and slab, note furniture and phasing",
          "Full bid within 24 hours of receiving plans, with removal, prep, product, adhesive and phasing as separate lines",
          "Submittals: product data, adhesive, installation method and attic stock quantity",
          "Moisture and pH testing, then floor prep to the manufacturer's flatness requirement",
          "Install by zone, with furniture lifts and moves as needed, and transitions to adjacent floors",
          "Punch walk, closeout photos, attic stock and maintenance guidance",
        ],
      },
      {
        title: "Commercial Carpet Tile Installation in Dallas–Fort Worth",
        keepLocal: true,
        paragraphs: [
          "Our office is in Plano, and our crews install commercial carpet tile across Dallas–Fort Worth, from corporate offices in Plano, Frisco and Dallas to schools, clinics and multifamily properties throughout the Metroplex. We also take on multi-site programs nationwide.",
        ],
        links: [
          { label: "Dallas", url: "/epoxy-flooring/dallas", text: "Commercial flooring in Dallas." },
          { label: "Plano", url: "/epoxy-flooring/plano", text: "Our home office market." },
          { label: "Fort Worth", url: "/epoxy-flooring/fort-worth", text: "Commercial flooring in Fort Worth." },
        ],
      },
    ],
    comparison: {
      title: "Carpet Tile vs. Broadloom vs. LVT",
      columns: ["Carpet tile", "Broadloom carpet", "LVT / LVP"],
      rows: [
        { label: "Replace a damaged area", values: ["Swap individual tiles", "Patch or replace the roll", "Replace individual planks or tiles"] },
        { label: "Acoustics", values: ["Excellent", "Excellent", "Needs an acoustic underlayment or backing"] },
        { label: "Spills and wet cleaning", values: ["Fair", "Fair", "Excellent"] },
        { label: "Best for", values: ["Offices, classrooms, corridors", "Hotels, executive suites", "Lobbies, break rooms, healthcare, retail"] },
        { label: "Learn more", values: ["—", "—", "/commercial-lvt-flooring"] },
      ],
    },
    whereUsed: [industryLinks.office, industryLinks.school, industryLinks.healthcare, industryLinks.hotel, industryLinks.multifamily, industryLinks.retail],
    cure: "Most carpet tile adhesives need a short tack time before tiles go down, and the floor can usually take foot traffic the same day. Rolling loads and furniture follow the adhesive manufacturer's timing.",
    performance: [
      "Modular replacement from attic stock instead of re-carpeting a whole room.",
      "Strong acoustic performance for offices, classrooms and multi-story buildings.",
      "Patterns and installation methods that hide wear and soiling in high-traffic paths.",
      "Manufacturer warranty protected by documented testing, prep and approved adhesive.",
    ],
    chemicalResistance: [
      "Carpet tile is not a fit for wet process areas, kitchens or chemical exposure; those rooms get resilient or resinous floors.",
      "Spot cleaners and extraction chemistry follow the carpet manufacturer's maintenance guide.",
    ],
    prep: [
      "Remove existing flooring and adhesive to a clean, sound substrate.",
      "Test moisture (ASTM F2170 / ASTM F1869) and surface pH against the adhesive's published limits.",
      "Patch, skim and level to the carpet manufacturer's flatness requirement.",
      "Acclimate product and keep the space within the manufacturer's temperature and humidity range.",
    ],
    faqs: [
      { q: "How long does commercial carpet tile last?", a: "It depends on the product, the traffic and maintenance. Commercial carpet tile in a well-maintained office commonly lasts many years, and because it is modular, worn or stained tiles can be replaced from attic stock without redoing the room." },
      { q: "Can you install carpet tile over existing VCT or carpet?", a: "Carpet must come out. Carpet tile can sometimes go over well-bonded VCT if the carpet manufacturer allows it and the old adhesive won't react with the new one. Most of the time we remove it, prep the slab and test moisture so the warranty is protected." },
      { q: "Can you install carpet tile in an occupied office?", a: "Yes. We work nights and weekends, move or lift furniture in zones, and phase the floor so the office keeps working." },
      { q: "Do you install carpet tile on raised access floors?", a: "Yes. Carpet tile is the usual finish over access floor because tiles can be lifted with the panels for cabling access. We set the layout so tile seams and panel joints work together." },
      { q: "Do you test the slab before installing carpet tile?", a: "Yes. Moisture and alkalinity are the most common causes of adhesive failure, so we test relative humidity (ASTM F2170), moisture emission (ASTM F1869) and pH before any adhesive goes down, and recommend a mitigation primer when results are over the adhesive's limits." },
      { q: "What is attic stock?", a: "Extra carpet tiles from the same dye lot left with the owner so damaged tiles can be replaced with an exact match later. The quantity is set by the specification." },
      { q: "Do you also install the wall base and transitions?", a: "Yes. Rubber wall base, reducers and transitions to LVT, tile, polished concrete or resinous floors are part of our scope." },
      { q: "How much does commercial carpet tile installation cost?", a: "It depends on the product, square footage, removal of the existing floor, how much floor prep the slab needs, furniture moves and after-hours work. Send plans or request a site walk and we will return a full bid within 24 hours of receiving plans." },
    ],
    photos: photoSets.office,
    closing: {
      title: "Get a bid on your carpet tile project",
      text: "Send plans or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
    },
  }),

  makeSystem({
    path: "/commercial-lvt-flooring",
    name: "Commercial LVT & LVP Flooring",
    crumbName: "Commercial LVT & LVP",
    serviceName: "Commercial LVT & LVP Flooring Installation",
    metaTitle: "Commercial LVT & LVP Flooring Installation | Legacy Industrial Coatings",
    metaDescription:
      "Commercial luxury vinyl tile (LVT) and luxury vinyl plank (LVP) installation for offices, healthcare, schools, retail, hotels and multifamily. Glue-down and rigid core, floor prep and moisture testing. Bids in 24 hours.",
    h1: "Commercial LVT & LVP Flooring Installation",
    overviewTitle: "What Commercial LVT and LVP Are",
    intro:
      "Commercial LVT (luxury vinyl tile) and LVP (luxury vinyl plank) are layered vinyl floors with a printed design and a clear wear layer, made to look like wood or stone while standing up to commercial traffic and wet cleaning. We remove the old floor, prepare and test the slab, and install glue-down and rigid-core LVT and LVP for offices, healthcare, schools, retail, hotels and multifamily.",
    whatItIs: [
      "LVT and LVP are the same family of product; LVT usually means square or rectangular tiles and LVP means wood-look planks. Commercial products have thicker wear layers and are installed differently from what you see in a home: most commercial LVT is glued down so it holds up to rolling loads, carts and furniture, while rigid-core click products are used where a floating floor is allowed.",
      "The wear layer is the clear top film that takes the traffic, measured in mils. Commercial specs commonly call for heavier wear layers than residential products, and the adhesive, substrate flatness and moisture limits come from the flooring manufacturer. We follow them so the floor keeps its warranty.",
    ],
    sections: [
      {
        title: "LVT and LVP Installation We Handle",
        paragraphs: ["One crew handles removal, prep, installation and trim, so the schedule doesn't depend on three trades."],
        items: [
          "Removal of existing carpet, VCT, sheet vinyl, ceramic tile or old LVT and adhesive",
          "Floor prep: grinding, crack and joint repair, skim coat and self-leveling underlayment to the manufacturer's flatness tolerance",
          "Moisture and pH testing (ASTM F2170, ASTM F1869, surface pH) and moisture-mitigation primers when results call for them",
          "Glue-down LVT and LVP with pressure-sensitive, wet-set or two-part adhesives chosen for traffic and rolling loads",
          "Rigid-core (SPC/WPC) click LVP where a floating installation is approved",
          "Patterns: herringbone, chevron, ashlar, mixed-width plank and inlaid borders",
          "Rubber wall base, stair treads and nosings, transitions to carpet tile, polished concrete and resinous floors",
          "Night, weekend and phased installs in occupied buildings; unit turns in multifamily",
        ],
      },
      {
        title: "Glue-Down vs. Rigid-Core (Click) LVP",
        paragraphs: [
          "Both are luxury vinyl, but they are installed differently and belong in different places. We recommend one after looking at traffic, rolling loads, the slab and the schedule.",
        ],
        table: {
          columns: ["Glue-down LVT / LVP", "Rigid-core click LVP"],
          rows: [
            { label: "How it's installed", values: ["Fully adhered to the prepared substrate", "Floats over the substrate on a click joint"] },
            { label: "Rolling loads and carts", values: ["Best choice", "Check the product's rolling-load rating"] },
            { label: "Large open areas", values: ["Best choice", "Needs expansion space and transitions"] },
            { label: "Subfloor tolerance", values: ["Needs a flat, smooth slab", "More forgiving of minor irregularities"] },
            { label: "Typical use", values: ["Healthcare, schools, retail, corridors, lobbies", "Multifamily units, smaller offices, fast renovations"] },
          ],
        },
      },
      {
        title: "Where We Install Commercial LVT and LVP",
        paragraphs: ["Luxury vinyl is the most common hard-surface floor in commercial interiors. Where it fits best:"],
        links: [
          { label: "Healthcare & clinics", url: "/healthcare-flooring", text: "Exam rooms, corridors and waiting areas that need easy wet cleaning." },
          { label: "Offices & corporate", url: "/office-flooring", text: "Break rooms, lobbies and open office alongside carpet tile." },
          { label: "Schools & universities", url: "/school-flooring", text: "Corridors, classrooms and cafeterias, installed over breaks." },
          { label: "Retail", url: "/retail-flooring", text: "Wood- and stone-look sales floors installed overnight to hit opening dates." },
          { label: "Hotels & hospitality", url: "/hotel-flooring", text: "Guest rooms, corridors and amenity spaces." },
          { label: "Multifamily", url: "/multifamily-flooring", text: "Unit turns, clubhouses and leasing offices." },
        ],
      },
      {
        title: "What the Spec Should Cover",
        paragraphs: ["These items decide whether an LVT floor performs and keeps its warranty. We confirm each one in the submittal:"],
        table: {
          columns: ["What it means", "Typical reference"],
          rows: [
            { label: "Product standard", values: ["Defines construction and performance of the vinyl", "ASTM F1700 (solid vinyl tile); ASTM F3261 (rigid core)"] },
            { label: "Wear layer", values: ["Clear top layer that takes the traffic, in mils", "Per the specification and the product data"] },
            { label: "Substrate prep", values: ["Flatness, smoothness and soundness of the slab", "ASTM F710 and the manufacturer's flatness tolerance"] },
            { label: "Moisture and pH", values: ["Controls adhesive bond and prevents failures", "ASTM F2170 and ASTM F1869, against the adhesive's limits"] },
            { label: "Fire", values: ["Required for corridors and exits by code", "ASTM E648 critical radiant flux classification"] },
            { label: "Slip resistance", values: ["Traction for the space and cleaning method", "Per the product data, commonly ASTM D2047"] },
            { label: "Section", values: ["Where LVT lives in the project manual", "CSI 09 65 19 Resilient Tile Flooring"] },
          ],
        },
      },
      {
        title: "Commercial LVT and LVP Installation in Dallas–Fort Worth",
        keepLocal: true,
        paragraphs: [
          "Our office is in Plano, and our crews install commercial LVT and LVP across Dallas–Fort Worth for offices, clinics, schools, retail, hotels and multifamily, and on multi-site programs nationwide.",
        ],
        links: [
          { label: "Dallas", url: "/epoxy-flooring/dallas", text: "Commercial flooring in Dallas." },
          { label: "Plano", url: "/epoxy-flooring/plano", text: "Our home office market." },
          { label: "Frisco", url: "/epoxy-flooring/frisco", text: "Fast tenant-improvement work in Frisco." },
        ],
      },
    ],
    comparison: {
      title: "LVT vs. VCT vs. Sheet Vinyl",
      columns: ["LVT / LVP", "VCT", "Sheet vinyl"],
      rows: [
        { label: "Look", values: ["Wood and stone visuals", "Solid and speckled colors", "Solid, speckled or wood visuals"] },
        { label: "Maintenance", values: ["Typically no wax", "Strip, wax and buff program", "Typically no wax; seams heat welded"] },
        { label: "Seams", values: ["Tight-fitting planks or tiles", "Many seams", "Few seams, welded where specified"] },
        { label: "Best for", values: ["Offices, retail, hotels, multifamily, healthcare", "Budget back-of-house, schools", "Healthcare and labs that need welded seams"] },
        { label: "Learn more", values: ["—", "/resilient-flooring", "/resilient-flooring"] },
      ],
    },
    whereUsed: [industryLinks.healthcare, industryLinks.office, industryLinks.school, industryLinks.retail, industryLinks.hotel, industryLinks.multifamily],
    cure: "Glue-down floors are usually open to foot traffic the same day; heavy rolling loads and furniture wait for the adhesive manufacturer's timing. Floating floors are walkable immediately.",
    performance: [
      "Wood and stone looks with a wear layer built for commercial traffic.",
      "Wet cleanable and typically no wax, which lowers maintenance costs compared with VCT.",
      "Individual planks or tiles can be replaced if damaged.",
      "Manufacturer warranty protected by documented testing, prep and approved adhesive.",
    ],
    chemicalResistance: [
      "Confirm disinfectants and cleaners against the LVT manufacturer's maintenance guide, especially in healthcare.",
      "Process chemicals, hot water and heavy industrial traffic call for resinous floors instead.",
    ],
    prep: [
      "Remove existing flooring and adhesive to a clean, sound substrate.",
      "Test moisture (ASTM F2170 / ASTM F1869) and pH; apply a mitigation primer when results exceed the adhesive's limits.",
      "Patch and level to the manufacturer's flatness tolerance per ASTM F710.",
      "Acclimate product and keep the space within the manufacturer's temperature range before, during and after install.",
    ],
    faqs: [
      { q: "What is the difference between LVT and LVP?", a: "They are the same type of floor. LVT (luxury vinyl tile) usually refers to square or rectangular stone- and tile-look pieces; LVP (luxury vinyl plank) refers to wood-look planks." },
      { q: "Is glue-down or click LVP better for a commercial building?", a: "Glue-down is the standard for commercial spaces with rolling loads, carts, large open areas and heavy traffic. Rigid-core click LVP works well in multifamily units and smaller spaces where a floating floor is approved." },
      { q: "What wear layer do I need for commercial LVT?", a: "Commercial specifications commonly call for a heavier wear layer than residential products. We match the wear layer to your traffic and the specification, and confirm it in the submittal." },
      { q: "Can LVT go over existing tile or VCT?", a: "Sometimes. Well-bonded VCT or tile can be acceptable if it is flat and the manufacturer allows it, often with a skim coat. Otherwise we remove it and prep the slab." },
      { q: "Why do LVT floors fail?", a: "Most failures come from moisture in the slab, high pH, the wrong adhesive or an uneven substrate, not from the vinyl itself. That is why we test moisture and pH and prep to the manufacturer's tolerance before installing." },
      { q: "Can you install LVT in an occupied building?", a: "Yes. We phase the work, run nights and weekends, and move furniture by zone so the building keeps operating." },
      { q: "Does LVT need waxing?", a: "Most commercial LVT does not need wax. It is cleaned with a neutral cleaner and an auto-scrubber; some products accept an optional factory-approved finish. We provide the manufacturer's maintenance guide at closeout." },
      { q: "How much does commercial LVT installation cost?", a: "It depends on the product, square footage, removal of the existing floor, floor prep, the installation method and after-hours work. Send plans or request a site walk and we will return a full bid within 24 hours of receiving plans." },
    ],
    photos: photoSets.office,
    closing: {
      title: "Get a bid on your LVT or LVP project",
      text: "Send plans or a scope. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
    },
  }),
);

nationalize(SYSTEM_PAGES);

export const getSystemPage = (path: string) => SYSTEM_PAGES.find((s) => s.path === path);
