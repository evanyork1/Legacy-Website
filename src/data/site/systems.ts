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
  sections?: { title: string; paragraphs: string[]; link?: { label: string; url: string } }[];
  comparison?: { title: string; columns: string[]; rows: { label: string; values: string[] }[] };
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
      "We build on Neogard Neocrete, a self-priming, thermal-shock-resistant cementitious polyurethane installed from 1/8\" to 3/8\", and Hybri-Gard, which pairs a Neocrete base with an epoxy, polyaspartic or MMA topcoat. Neocrete tolerates moisture vapor up to 25 lb MVER (calcium chloride test). Sherwin-Williams Polycrete SL is available where it is specified.",
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
    metaDescription: "Heavy-duty industrial epoxy floor coatings for warehouses, manufacturing, and high-traffic facilities across DFW.",
    h1: "Heavy-Duty Industrial Epoxy Flooring",
    intro: "Industrial epoxy is a 100% solids resin floor installed from a thin film up to a 1/4\" troweled mortar, built for forklifts, foot traffic and production work. We install Neogard's CG Series, choosing the build-up by traffic and impact, with a Sherwin-Williams option where it is specified.",
    comparison: {
      title: "Choose a CG Series System",
      columns: ["Typical service"],
      rows: [
        { label: "CG-16", values: ["Light traffic, recoats"] },
        { label: "CG-32", values: ["General commercial / light industrial"] },
        { label: "CG-65", values: ["Textured, heavier traffic"] },
        { label: "CG-125", values: ["Heavy forklift and production"] },
        { label: "CG-250 Trowel", values: ["Heaviest impact, 1/4\" mortar"] },
      ],
    },
    whatItIs: [
      "We install self-leveling epoxy, high-build epoxy mortar and decorative broadcast systems. Mechanical preparation, concrete repair and moisture evaluation establish the bond before the finish is selected.",
      "Neogard's CG Series runs from CG-16 for light traffic and recoats to CG-250 Trowel for the heaviest impact. An optional 70817/70818 CRU topcoat adds chemical and UV resistance, and Neogrip Spheres add texture. Sherwin-Williams Resuflor Performance HPS is a low-odor, low-VOC option for occupied buildings, subject to ventilation and work-area controls.",
      "Colors, traction aggregate, safety zoning and integral cove are specified around the operation. We distinguish routine cleaning exposure from immersion or aggressive chemical service rather than treating every epoxy as interchangeable.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.manufacturing, industryLinks.aerospace, industryLinks.pharmacy, industryLinks.auto],
    buildups: [],
    cure: "Confirm walking, equipment and chemical-service release separately against the approved product data and actual site conditions.",
    performance: [
      "Seamless, cleanable finish with a project-specific wear surface.",
      "70714/70715 epoxy compressive strength: 25,300 psi (ASTM D695).",
      "Resuflor Performance HPS offers a low-odor, low-VOC occupied-building option.",
    ],
    chemicalResistance: [
      "Select the resin and topcoat against the actual oils, cleaners and process chemicals.",
      "Confirm Decon-Quat and Peridox cleaning compatibility for pharmacy scopes on the approved submittal.",
    ],
    faqs: [
      { q: "Which epoxy system is appropriate for my facility?", a: "We review wheel loads, abrasion, cleaning chemistry, moisture and shutdown limits before recommending a primer, body and topcoat." },
      { q: "Can you work in an occupied building?", a: "Low-odor options such as Resuflor Performance HPS can support phased work. Occupant separation, ventilation and access controls remain part of the installation plan." },
      { q: "Does every slab need a moisture-mitigating primer?", a: "No. Testing and the selected system's limits determine whether the standard primer or an approved moisture-mitigating alternative is appropriate." },
      { q: "Can you include cove and striping?", a: "Yes. We coordinate integral cove, traction zones and compatible floor markings within the same flooring scope." },
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
        { label: "Epoxy (CG Series)", values: ["Warehouses, production, offices, common areas", "Standard", "Thin film to 1/4\"", "/industrial-epoxy"] },
        { label: "Novolac epoxy", values: ["Chemical storage, battery rooms, containment", "Standard", "Novolac 32 to Novolac 125", "/novolac-epoxy-flooring"] },
        { label: "Urethane cement (Neocrete)", values: ["Kitchens, food processing, freezers, thermal cycling", "Standard", "1/8\" to 3/8\"", "/urethane-cement-flooring"] },
        { label: "Hybrid urethane cement (Hybri-Gard)", values: ["Food and beverage, cold storage, schools, healthcare", "Standard to fast (by topcoat series)", "1/8\" or 3/16\" base", "/urethane-cement-flooring#hybri-gard"] },
        { label: "MMA (FTS)", values: ["Overnight or weekend shutdown windows", "Same day", "1/8\" to 3/8\"", "/mma-flooring"] },
        { label: "Polyaspartic (RTS systems)", values: ["Fast turnarounds, sunlit spaces", "Fast", "By system", "/flake-floors#neoflake-rts-series-2"] },
        { label: "Decorative flake (Neoflake)", values: ["Showrooms, retail, locker rooms, break areas", "Standard to fast", "By system", "/flake-floors"] },
        { label: "Decorative quartz (NeoQuartz)", values: ["Restrooms, kitchens, corridors, concourses", "Standard to fast", "By system", "/quartz-flooring"] },
        { label: "ESD (Sherwin-Williams)", values: ["Electronics, electrical and UPS rooms", "Standard", "35 mils nominal (Topcoat SDE)", "/esd-static-control-flooring"] },
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
    intro: "Quartz flooring broadcasts or trowels colored quartz into a 100% solids epoxy or polyaspartic binder for a durable, sanitary, textured surface. We install Neogard NeoQuartz in four build-ups, from a broadcast floor to a troweled mortar and an all-polyaspartic fast-return system.",
    whatItIs: [
      "Colored quartz is broadcast into successive resin coats and sealed to create a decorative, continuous floor. The aggregate blend and finish texture are selected together so the surface supports both traction and practical cleaning.",
      "NeoQuartz Broadcast, NeoQuartz HD, NeoQuartz Trowel and NeoQuartz Broadcast RTS cover interior and exterior use, heavier impact and fast return to service. Integral cove and detailed transitions extend the cleanable assembly to the room perimeter.",
    ],
    whereUsed: [industryLinks.pharma, industryLinks.pharmacy, industryLinks.healthcare, industryLinks.kitchen, industryLinks.food],
    buildups: [],
    cure: "Release times depend on the selected NeoQuartz build-up and site conditions and are confirmed in the submittal.",
    performance: [
      "70734/70735 epoxy compressive strength: 11,000 psi (ASTM D695).",
      "70817/70818 CRU: Taber abrasion 23 mg; 57051 polyaspartic: Taber 55 mg/1,000 cycles CS-17.",
      "CRU and polyaspartic seals pass JIS Z 2801-2010 anti-microbial testing; this is not a substitute for facility sanitation.",
    ],
    chemicalResistance: [
      "Review IPA, quaternary disinfectants, sporicides, CIP detergents and passivation acids against the current CRU chemical-resistance data.",
      "Confirm concentration, contact time, temperature and rinse practices before approving the cleaning protocol.",
    ],
    faqs: [
      { q: "What does double broadcast mean?", a: "Quartz is broadcast into two successive base coats before the floor receives its seal coats, as in NeoQuartz Broadcast." },
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
    intro: "Static-control flooring is a grounded epoxy floor that bleeds static charge away from people and equipment before it can damage sensitive electronics. We install Sherwin-Williams Resuflor ESD systems — Neogard does not make an ESD floor — and test resistance on site before turnover.",
    whatItIs: [
      "Resuflor Topcoat SDE is a nominal 35-mil electrostatic-dissipative epoxy system: a three-component, high-solids epoxy topcoat with conductive filler, applied at 15–20 mils over an electrically insulating epoxy coat. Published floor resistance is 1×10^5 to 1×10^9 ohms, with body voltage generation under 100 volts, referenced to ANSI/ESD S20.20-2014.",
      "Resuflor Topcoat SD is a stipple-finish epoxy topcoat. Over Resuflor Aqua 3424 conductive primer it forms a conductive floor; over a standard epoxy primer (Resuprime 3579) it forms a static-dissipative floor.",
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
      "Confirm process chemicals and ESD-safe cleaning agents against the selected Resuflor system.",
      "Do not apply ordinary waxes, sealers or topcoats without confirming electrical compatibility.",
    ],
    prep: [...standardPrep, "Coordinate grounding provisions with the electrical scope and document the specified acceptance-test locations."],
    faqs: [
      { q: "Does an ESD floor make a facility compliant with ANSI/ESD S20.20?", a: "No. Flooring is one component of an ESD-control program that also addresses personnel grounding, procedures and verification." },
      { q: "Can you provide a conductive system?", a: "Yes. Resuflor Topcoat SD over Resuflor Aqua 3424 conductive primer forms a conductive floor, subject to the approved electrical and flooring requirements." },
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
      "We install Neogard's Neoflake family — epoxy, epoxy with polyaspartic seals, and all polyaspartic — plus Sherwin-Williams Resuflor Deco Flake BC where an epoxy flake with urethane topcoat is specified.",
    ],
    sections: [
      {
        title: "Neogard Neoflake Systems",
        paragraphs: [
          "Neoflake is Neogard's epoxy flake floor; Neoflake RTS Series 1 keeps the epoxy base and adds polyaspartic seals, and Neoflake RTS Series 2 is all polyaspartic for the fastest return to service. Build-ups for all three are listed below.",
          "Polyaspartic seals are UV-stable, so they suit sunlit showrooms and storefronts. Flake systems are not recommended above 80% RH without a moisture-mitigating primer.",
        ],
      },
      {
        title: "Sherwin-Williams Resuflor Deco Flake BC",
        paragraphs: [
          "Resuflor Deco Flake BC (formerly called Decorative Mosaic) is an epoxy flake system specified under CSI 09 67 23 resinous flooring. Vinyl chips are broadcast into a clear or pigmented epoxy and sealed with a clear urethane finish.",
          "The epoxy base gives the floor its chemical-resistant protection, while the urethane topcoat stands up to foot traffic, carts and routine cleaning.",
        ],
      },
    ],
    comparison: {
      title: "Compare Commercial Flake Systems",
      columns: ["Neoflake (epoxy)", "Neoflake RTS Series 1", "Neoflake RTS Series 2", "Sherwin-Williams Resuflor Deco Flake BC"],
      rows: [
        { label: "Chemistry", values: ["Epoxy base and seals", "Epoxy base, polyaspartic seals", "All polyaspartic", "Epoxy base, urethane topcoat"] },
        { label: "Return to service", values: ["Standard", "Fast", "Fastest", "Standard"] },
        { label: "UV-stable topcoat option", values: ["CRU or urethane seal", "Polyaspartic", "Polyaspartic", "Urethane topcoat"] },
        { label: "Best for", values: ["Interiors on a standard schedule", "Faster reopening over an epoxy base", "Shortest shutdown windows", "Chemical-resistant interiors"] },
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
    cure: "Return-to-service times are confirmed in the submittal for the selected system; the RTS polyaspartic systems reopen faster than epoxy.",
    performance: [
      "Seamless, color-blended finish with no grout lines.",
      "Texture and topcoat selected for the facility's traction and cleaning needs.",
      "Integral cove and transition details available within the approved assembly.",
    ],
    chemicalResistance: [
      "The epoxy body provides chemical-resistant protection in Neoflake and Resuflor Deco Flake BC.",
      "Cleaners, vehicle fluids and disinfectants are reviewed against the selected topcoat's resistance data.",
    ],
    faqs: [
      { q: "Epoxy vs polyaspartic flake — which is right for my facility?", a: "Epoxy flake (Neoflake) suits interiors that can allow a standard cure. Neoflake RTS Series 1 and 2 suit spaces that must reopen quickly or see direct sunlight, because the polyaspartic seals are UV-stable. We recommend a system after reviewing traffic, chemicals, schedule and slab conditions." },
      { q: "How fast can a commercial flake floor go back into service?", a: "Neoflake RTS Series 2 is the fastest, Series 1 is fast, and epoxy Neoflake follows a standard cure. Exact walk-on and equipment release times are confirmed in your submittal." },
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
    metaDescription: "Professional concrete polishing for commercial and industrial spaces across DFW. Durable, low-maintenance polished floors.",
    h1: "Professional Concrete Polishing Services",
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
    faqs: [
      { q: "Can you polish an existing slab?", a: "Often, but contamination, previous coatings, repairs and concrete condition influence the result. We assess these before setting finish expectations." },
      { q: "Will polishing hide cracks?", a: "No. Repairs can make cracks serviceable, but polished concrete generally retains visible evidence of the original slab." },
      { q: "How is polished concrete different from sealed concrete?", a: "Polishing mechanically refines the concrete to a selected appearance. Sealing protects a prepared slab without the same progressive refinement." },
      { q: "Is polished concrete appropriate around chemicals?", a: "Not for every exposure. Acidic or aggressive service may require a resinous chemical-resistant system instead." },
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
      "ArmorSeal 1K is a single-component high-performance floor coating and a specified sealed-concrete finish option. It is not interchangeable with a penetrating densifier, and the approved scope should state which treatment is being installed.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.data, industryLinks.retail, industryLinks.office, industryLinks.manufacturing],
    buildups: [{
      title: "Sherwin-Williams ArmorSeal 1K — sealed-concrete finish option",
      layers: [{ layer: "Finish", product: "ArmorSeal 1K single-component high-performance floor coating" }],
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
      { q: "Is ArmorSeal 1K a penetrating densifier?", a: "No. It is a single-component high-performance floor coating offered as a sealed-concrete finish option." },
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
      "For pedestrian decks we install Neogard's Peda-Gard family — standard, aliphatic, fast cure, plywood, mechanical-room, decorative and moisture-containment versions — plus RTS Pedestrian for fast cure. TrafficTuff and Epoxy Broadcast Overlay are textured, non-waterproof options. Vehicular Auto-Gard systems are covered on the parking structures page.",
      "Drain interfaces, cracks, expansion joints and terminations are as important as the field coating. Heavy-duty wear areas are identified on the layout rather than left to an unspecified field adjustment.",
    ],
    whereUsed: [industryLinks.parking, industryLinks.multifamily, industryLinks.hotel, industryLinks.auto, industryLinks.office],
    buildups: [],
    cure: "Auto-Gard: traffic at 72 hrs at 75°F/50% RH. Auto-Gard FC and FC T: 24–36 hrs. Peda-Gard: 48 hrs. RTS PMMA/PUMA vehicular: 1-hour return to service. Confirm the applicable assembly and actual conditions before release.",
    performance: [
      "Standard and heavy-duty vehicular assemblies address different wear demands.",
      "Auto-Gard FC T provides integral texture without broadcast aggregate.",
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
      { q: "Does FC T need broadcast aggregate?", a: "The verified Auto-Gard FC T assembly is integrally textured and does not use broadcast aggregate." },
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
    name: "Secondary Containment Coatings",
    metaDescription: "Secondary containment linings for DFW fuel dikes, chemical areas, battery curbs and transformer oil pits. Detailed substrate, membrane and spill-control scopes.",
    intro: "Containment requires a continuous lining across the floor, walls, curbs and penetrations. We coordinate the coating with the engineer's containment design and the specific liquid being retained.",
    whatItIs: [
      "Fuel tank dikes and berms may form part of an EPA SPCC plan; chemical containment and battery curbs present different exposure requirements. The coating protects the substrate, while the design team establishes capacity, drainage and regulatory obligations.",
      "Oil containment pits: transformer pits need an oil- and water-resistant lining carried continuously through corners, penetrations and termination details. Confirm usable containment capacity and drainage controls with the electrical and civil design teams.",
      "Our containment build-ups are Neogard Novolac 32 and Novolac 125. Chemical resistance is checked against Neogard's novolac chemical resistance chart for the specific chemicals being stored.",
    ],
    whereUsed: [industryLinks.data, industryLinks.manufacturing, industryLinks.electronics, industryLinks.aerospace],
    buildups: [],
    sections: [{ title: "Novolac Epoxy for Containment", paragraphs: ["Novolac has a higher operating temperature and chemical resistance than standard epoxy. See the full novolac page for both build-ups and published properties."], link: { label: "Novolac epoxy flooring", url: "/novolac-epoxy-flooring" } }],
    cure: "Do not introduce stored liquids until the approved lining has reached its specified chemical-service cure and inspection requirements are complete.",
    performance: [
      "Continuous lining details across slabs, curbs, walls and penetrations.",
      "70704/70705 novolac: compressive strength 10,000 psi (ASTM D695); Shore D 84.",
    ],
    chemicalResistance: [
      "Confirm transformer oil, diesel, battery electrolyte or process chemicals individually, including immersion conditions.",
      "Require written compatibility for the complete lining assembly; thickness alone does not establish resistance.",
    ],
    prep: [...standardPrep, "Evaluate oil penetration and contaminated concrete; detail joints, corners, curbs and penetrations before field application.", "Coordinate lining inspections and any specified flood testing before concealment or service."],
    faqs: [
      { q: "Does a lining establish SPCC compliance?", a: "No. The lining supports a containment design, but the owner's engineer and SPCC plan establish capacity, drainage and other requirements." },
      { q: "Can you line transformer oil pits?", a: "Yes, subject to an approved oil- and water-resistant assembly, substrate condition and coordinated details." },
      { q: "Which novolac build-up do you use?", a: "Novolac 32 for most curbs and dikes and Novolac 125, a double sand broadcast, where the lining needs more body. Both are checked against the stored chemicals." },
      { q: "Can you coat oil-contaminated concrete?", a: "Only after assessment and appropriate remediation. Surface cleaning alone may not remove contamination that would compromise adhesion." },
      { q: "Can curbs and penetrations be included?", a: "Yes. They should be detailed within the same containment scope rather than treated as incidental finish work." },
    ],
    photos: photoSets.data,
  }),

  makeSystem({
    path: "/battery-room-flooring",
    name: "Battery Room Flooring",
    metaDescription: "Acid-resistant flooring for DFW UPS, BESS and battery rooms, with novolac options, integral cove, coated curbs and coordinated spill-control details.",
    intro: "Battery-room flooring should follow the battery chemistry and spill-control design. We coordinate resistant resin, integral cove and coated curbs for UPS, BESS and charging environments.",
    whatItIs: [
      "Lead-acid battery areas typically get Neogard Novolac 32 or Novolac 125, carried continuously through cove and curb details. The floor is selected for the electrolyte and expected contact conditions, not simply labeled industrial epoxy.",
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
      "Neogard epoxy, novolac, flake, quartz and hangar systems are limited by high moisture vapor transmission, so we install them over a Neogard moisture-mitigating primer when testing calls for it. Neocrete urethane cement tolerates up to 25 lb MVER (calcium chloride test) and is often the better choice on a damp slab.",
      "Other projects require a full vapor-barrier system coordinated with patching, adhesive and finish materials. Neither approach is a repair for active leaks or unresolved hydrostatic pressure.",
    ],
    whereUsed: [industryLinks.warehouse, industryLinks.healthcare, industryLinks.school, industryLinks.office, industryLinks.manufacturing],
    buildups: [{
      title: "Neogard moisture-mitigating epoxy primer",
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
    metaDescription: "DFW fluid-applied roof coatings and deck waterproofing for equipment platforms, walkways, plazas and balconies, including Neogard membrane and pedestrian options.",
    intro: "Roof and deck waterproofing must address drainage, movement and penetrations as well as the field membrane. We separate roof-coating scopes from pedestrian wearing surfaces and buried waterproofing.",
    whatItIs: [
      "We organize Neogard roof systems by roof type: built-up and modified bitumen, concrete, metal, single-ply and spray polyurethane foam, each with Elasta-Gard, Elastacryl or silicone options. Rooftop equipment platforms and walkways get compatible protection rather than assuming the roof membrane can take unrestricted traffic.",
      "Perma-Gard III is a cold fluid-applied membrane for below-tile or buried waterproofing. Peda-Gard provides a pedestrian traffic-bearing assembly for appropriate exposed decks. Plazas and balconies require details that coordinate the selected membrane with drains, thresholds and adjoining construction.",
    ],
    whereUsed: [industryLinks.data, industryLinks.office, industryLinks.hotel, industryLinks.multifamily, industryLinks.parking],
    buildups: [],
    sections: [{ title: "Data Center Roofs", paragraphs: ["Data center roofs carry chillers, condensers and cable trays that need protected walkways and coatings matched to the existing roof type. We coordinate roof work with the floor and containment scopes inside the building."], link: { label: "Data center solutions", url: "/data-center-flooring" } }],
    cure: "Peda-Gard: traffic at 48 hrs. Coordinate Perma-Gard III cure, ASTM D5957 flood testing and protection before concealment against the approved application requirements.",
    performance: [
      "Perma-Gard III membrane: 60 dry mils; flood-tested per ASTM D5957.",
      "Peda-Gard pedestrian assembly: 32 dry mils.",
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
      { q: "Where is Perma-Gard III used?", a: "The verified assembly is intended for below-tile or buried waterproofing, with the specified protection and testing." },
      { q: "Can you waterproof rooftop equipment walkways?", a: "Yes, through a compatible assembly coordinated with the roof membrane, equipment access and expected traffic." },
      { q: "Does coating solve poor drainage?", a: "Not by itself. Drainage and ponding conditions must be reviewed before the membrane is selected." },
    ],
    photos: photoSets.hospitality,
  }),

  makeSystem({
    path: "/epoxy-cove-base",
    name: "Integral Epoxy Cove Base",
    metaDescription: "Integral epoxy cove base for DFW kitchens, cleanrooms and processing facilities. Monolithic floor-to-wall transitions with verified Neogard Cove Base UV data.",
    intro: "Integral cove removes the sharp floor-to-wall corner that traps residue and complicates cleaning. We connect the floor and perimeter with a trowel-applied, monolithic resin detail.",
    whatItIs: [
      "A sanitary cove curves the floor finish up the wall or curb using compatible resin mortar. It can address a deficient base detail identified during a health inspection, but acceptance depends on the applicable requirements and the complete installation.",
      "Neogard Epoxy Cove Base UV is troweled 1/8\" thick and 4\" high (adjustable) over drywall, green board, concrete or CMU, with a novolac, epoxy, CRU or polyaspartic topcoat. Neocrete V (urethane cement) and FTS MMA cove bases match those floor systems.",
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
    intro: "Commercial interiors often need more than resinous flooring. We coordinate resilient and soft-surface finishes with substrate preparation, transitions and the maintenance program.",
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
    metaDescription: "Neogard Novolac 32 and Novolac 125 chemical-resistant epoxy floors for chemical storage, battery rooms, containment and food plants. Headquartered in Dallas-Fort Worth, working nationwide.",
    h1: "Novolac Epoxy Flooring for Chemical Resistance",
    intro: "Novolac epoxy is a more heavily cross-linked epoxy that resists stronger chemicals and higher operating temperatures than standard epoxy. We install Neogard Novolac 32 and Novolac 125 in chemical storage, battery charging rooms, secondary containment and food plants.",
    whatItIs: [
      "Novolac 32 is a primed, two-coat novolac floor; Novolac 125 builds two sand-broadcast base coats before two novolac seals for more body and texture. Both use Neogard 70704/70705 novolac, with a published compressive strength of 10,000 psi and Shore D 84.",
      "Chemical resistance is checked against Neogard's novolac chemical resistance chart for your specific chemicals, concentrations and contact times before we recommend a build-up.",
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
      "70704/70705 novolac: compressive strength 10,000 psi (ASTM D695); Shore D 84.",
      "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas.",
    ],
    chemicalResistance: [
      "Checked against Neogard's novolac chemical resistance chart for your specific chemicals.",
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
    metaDescription: "Neogard FTS MMA floors cure in about an hour — for kitchens, food plants, pharmaceutical and any overnight shutdown. Headquartered in Dallas-Fort Worth, working nationwide.",
    h1: "MMA Flooring — Back in Service the Same Day",
    intro: "MMA (methyl methacrylate) flooring is an acrylic resin floor installed 1/8\" to 3/8\" thick that cures in about one hour. We install Neogard FTS MMA systems when a facility can only give us an overnight or weekend shutdown.",
    whatItIs: [
      "FTS systems are non-porous and waterproof, UV stable for indoor or outdoor use, and can be installed over quarry tile and across a wide range of temperatures. Matching seamless cove base is available, and the floor needs no waxing.",
      "Every FTS system starts with FTS 100/FTS 101 primer and adhesion promoter, then an FTS 200 (flex) or FTS 300 body resin and an FTS 400 or FTS 450 topcoat. The systems meet South Coast AQMD VOC requirements and have a published tensile strength of 3,850 psi (ASTM D638).",
    ],
    whereUsed: [industryLinks.kitchen, industryLinks.food, industryLinks.pharma, industryLinks.hotel, industryLinks.data],
    cure: "One-hour cure; final release is confirmed in the submittal for site temperature and the selected FTS system.",
    performance: [
      "Tensile strength 3,850 psi (ASTM D638).",
      "Non-porous, waterproof and UV stable.",
      "Meets South Coast AQMD VOC requirements.",
    ],
    chemicalResistance: ["Confirm process chemicals and cleaners against the selected FTS topcoat."],
    faqs: [
      { q: "How fast can an MMA floor go back into service?", a: "FTS systems cure in about one hour, so a kitchen or production line can usually reopen the same day." },
      { q: "Can MMA go over quarry tile?", a: "Yes. FTS systems can be installed over quarry tile after preparation, which avoids demolition in many kitchens." },
      { q: "Is MMA odorous during install?", a: "MMA has a strong odor while curing, so we plan ventilation and schedule work in shutdown windows." },
      { q: "Is there a matching cove base?", a: "Yes. Solid color, Neoflake and NeoQuartz FTS cove bases match the floor." },
    ],
    photos: photoSets.industrial,
  }),
);

nationalize(SYSTEM_PAGES);

export const getSystemPage = (path: string) => SYSTEM_PAGES.find((s) => s.path === path);
