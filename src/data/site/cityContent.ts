/**
 * Unique commercial content for the ten largest DFW commercial markets.
 * City pages for these slugs render this content in place of the shared
 * template copy. Landmarks and corridors come from serviceAreaCities.ts;
 * nothing here names a client or project that isn't in caseStudies.ts.
 */

import type { CityFaq } from "@/data/serviceAreaCities";

export type CityLink = { label: string; url: string; text: string };

export interface PriorityCityContent {
  /** Replaces localHook: commercial-only intro paragraph. */
  intro: string;
  /** Facility types common in this city, each linking to its industry page. */
  facilities: CityLink[];
  /** Optional "Polished Concrete in {City}" paragraph. */
  polished?: string;
  /** Three city-specific FAQs, shown before the shared ones. */
  faqs: CityFaq[];
}

export const PRIORITY_CITY_SLUGS = [
  "dallas",
  "fort-worth",
  "plano",
  "frisco",
  "mckinney",
  "allen",
  "lewisville",
  "carrollton",
  "irving",
  "arlington",
] as const;

export const isPriorityCity = (slug: string) =>
  (PRIORITY_CITY_SLUGS as readonly string[]).includes(slug);

const WAREHOUSE: CityLink = {
  label: "Warehouses & distribution",
  url: "/warehouse-flooring",
  text: "Industrial epoxy or polished concrete with joint repair and aisle striping, phased around live racking.",
};
const MANUFACTURING: CityLink = {
  label: "Manufacturing",
  url: "/manufacturing-floor-coating",
  text: "Chemical- and impact-resistant epoxy and urethane cement for production floors, with safety striping.",
};
const RETAIL: CityLink = {
  label: "Retail & showrooms",
  url: "/retail-flooring",
  text: "Polished concrete, flake or quartz for tenant-improvement work, installed overnight to hit opening dates.",
};
const RESTAURANT: CityLink = {
  label: "Restaurants & kitchens",
  url: "/restaurant-kitchen-flooring",
  text: "Slip-resistant urethane cement with integral cove for kitchens that see hot water, grease and daily washdown.",
};
const HEALTHCARE: CityLink = {
  label: "Healthcare & medical office",
  url: "/healthcare-flooring",
  text: "Seamless, cleanable floors with integral cove, phased around patient areas.",
};
const OFFICE: CityLink = {
  label: "Offices & corporate campuses",
  url: "/office-flooring",
  text: "Polished concrete lobbies, resinous back-of-house and resilient flooring for the office floor.",
};
const DATA_CENTER: CityLink = {
  label: "Data centers & electronics",
  url: "/data-center-flooring",
  text: "Static-dissipative and conductive epoxy for data halls, labs and electronics assembly.",
};
const CONTAINMENT: CityLink = {
  label: "Transformer & secondary containment",
  url: "/secondary-containment-coatings",
  text: "Seamless, watertight coatings for transformer pits, fuel containment and chemical areas, carried up walls and curbs.",
};
const HOTEL: CityLink = {
  label: "Hotels & hospitality",
  url: "/hotel-flooring",
  text: "Kitchen, laundry and back-of-house floors plus polished concrete in public areas, phased so the property stays open.",
};
const SCHOOL: CityLink = {
  label: "Schools & campuses",
  url: "/school-flooring",
  text: "Labs, shops, kitchens and corridors, scheduled around the academic calendar.",
};

export const PRIORITY_CITY_CONTENT: Record<string, PriorityCityContent> = {
  dallas: {
    intro:
      "Dallas is our largest commercial market. We work from Design District showrooms to the industrial parks along I-35 and Stemmons, and in healthcare buildings around the Medical District. Most Dallas projects are tenant-improvement or occupied-building work, so we plan the floor around the GC's schedule and the building's hours.",
    facilities: [WAREHOUSE, MANUFACTURING, HEALTHCARE, RETAIL, RESTAURANT],
    polished:
      "Polished concrete is one of the most requested floors in Dallas, especially for showrooms, offices and warehouses where the existing slab is sound. We grind, densify, fill joints and polish to the aggregate exposure and sheen approved on a mockup. Our pharmaceutical manufacturing project in Dallas was a 21,000 sq ft polished concrete floor.",
    faqs: [
      {
        q: "Do you do commercial floor coatings in Dallas industrial parks along I-35 and Stemmons?",
        a: "Yes. Warehouses and light-industrial buildings along I-35 and Stemmons are a large share of our Dallas work: industrial epoxy, urethane cement and polished concrete, with joint repair and line striping.",
      },
      {
        q: "Can you work in an occupied Dallas building without shutting it down?",
        a: "Yes. We phase the floor zone by zone and run nights and weekends so tenants, patients or customers keep using the building. Grinding is dust-controlled and finished areas are protected.",
      },
      {
        q: "Do you work with GCs on Dallas tenant-improvement projects?",
        a: "Yes. We bid from drawings for GCs and return a full bid within 24 hours of receiving plans, with the system, thickness and phasing spelled out.",
      },
    ],
  },
  "fort-worth": {
    intro:
      "Fort Worth's Alliance corridor and the industrial belt along I-35W make it a heavy commercial market for us: distribution centers, manufacturing floors and warehouses where the floor has to outlast constant forklift traffic. We also handle retail and restaurant buildouts closer to downtown.",
    facilities: [WAREHOUSE, MANUFACTURING, RETAIL, RESTAURANT],
    polished:
      "For Fort Worth distribution and retail buildings with a sound slab, polished concrete is often the lowest-maintenance floor available. We assess the slab first, then grind, densify, fill joints and polish to the finish approved on a mockup, with dust-controlled equipment so adjacent areas stay in use.",
    faqs: [
      {
        q: "Do you install industrial floor coatings in AllianceTexas distribution centers?",
        a: "Yes. Distribution and manufacturing floors in the Alliance corridor are core work for us: high-build industrial epoxy, urethane cement where heat or washdown is involved, and polished concrete, plus aisle and safety striping.",
      },
      {
        q: "Do you mobilize crews to Fort Worth from your Plano office?",
        a: "Yes. Our crews work across the full Metroplex from our Plano office, including Tarrant County. Site walks are typically scheduled within 1–3 business days.",
      },
      {
        q: "What floor holds up best to forklift traffic in a Fort Worth warehouse?",
        a: "It depends on the slab and the operation. Polished concrete works well on a sound slab; high-build epoxy or urethane cement makes sense where you need chemical resistance, a sealed surface or color-coded zones. We recommend after testing the slab.",
      },
    ],
  },
  plano: {
    intro:
      "Legacy Industrial Coatings is headquartered in Plano at 6010 W Spring Creek Parkway, so Plano projects get the shortest mobilization of anywhere we work. Plano's corporate campuses along Legacy West, Granite Park and the Tollway corridor drive demand for polished concrete lobbies, static-control floors in data and lab spaces, and urethane cement in medical-office back-of-house.",
    facilities: [OFFICE, DATA_CENTER, HEALTHCARE, RESTAURANT, RETAIL],
    faqs: [
      {
        q: "Where is your office in Plano?",
        a: "Our office is at 6010 W Spring Creek Parkway, Plano, TX 75024. It is our only office; crews mobilize from here across DFW and to projects nationwide.",
      },
      {
        q: "Do you work on Plano corporate campuses and office buildings?",
        a: "Yes. We install polished concrete in lobbies, resinous floors in break rooms and back-of-house, and static-dissipative floors in data and lab spaces, often after hours so the building stays open.",
      },
      {
        q: "Have you completed commercial projects in Plano?",
        a: "Yes. Our Plano case studies include a fast-casual restaurant sealant restoration and a full tear-out and flake floor for a dog training and grooming facility.",
      },
    ],
  },
  frisco: {
    intro:
      "Frisco's corporate relocations and constant new commercial construction make it one of our busiest markets. We coat retail, restaurant and medical-office floors around The Star, Frisco Station and Stonebriar, and install industrial epoxy and polished concrete in warehouses and corporate buildings along the Dallas North Tollway.",
    facilities: [RETAIL, RESTAURANT, HEALTHCARE, OFFICE, WAREHOUSE],
    faqs: [
      {
        q: "Can you meet tight tenant-improvement schedules in Frisco?",
        a: "Yes. Frisco TI schedules are fast, so we mobilize quickly, work overnight and choose fast-cure systems when a space has to open on a fixed date.",
      },
      {
        q: "What floor do you recommend for a new Frisco restaurant?",
        a: "Kitchens usually get urethane cement with integral cove for heat, grease and washdown. Dining rooms often get polished concrete or a decorative flake or quartz floor.",
      },
      {
        q: "Do you work on new construction in Frisco?",
        a: "Yes. On new slabs we coordinate with the GC on cure time, moisture testing and sequencing so the floor goes down at the right point in the schedule.",
      },
    ],
  },
  mckinney: {
    intro:
      "McKinney's commercial growth along US-75 and SH-121 keeps our crews busy in medical-office back-of-house, restaurant kitchens, retail buildouts and light-industrial floors, including Craig Ranch, the business park around McKinney National Airport and the Custer Road corridor.",
    facilities: [HEALTHCARE, RESTAURANT, RETAIL, WAREHOUSE],
    faqs: [
      {
        q: "Do you install floors in McKinney medical-office buildings?",
        a: "Yes. We install seamless, cleanable floors with integral cove in exam rooms, labs and back-of-house, phased around patient areas.",
      },
      {
        q: "Do you work in the light-industrial buildings near McKinney National Airport?",
        a: "Yes. Light-industrial and flex buildings get industrial epoxy, urethane cement or polished concrete depending on the operation and the slab.",
      },
      {
        q: "How quickly can you walk a McKinney site?",
        a: "Site walks are typically scheduled within 1–3 business days, and we return a full bid within 24 hours of receiving plans.",
      },
    ],
  },
  allen: {
    intro:
      "Allen's commercial work centers on retail and restaurant tenant improvements around Watters Creek and Allen Premium Outlets, showroom and lobby floors along US-75, and light-industrial space in the Twin Creeks business district.",
    facilities: [RETAIL, RESTAURANT, OFFICE, WAREHOUSE],
    faqs: [
      {
        q: "Do you handle retail tenant-improvement flooring in Allen?",
        a: "Yes. We install polished concrete, flake and quartz floors for retail and restaurant buildouts and coordinate directly with the GC's schedule, including overnight work.",
      },
      {
        q: "What floor works for a light-industrial space in Twin Creeks?",
        a: "Industrial epoxy is the usual choice where you need a sealed, cleanable, color-coded floor; polished concrete works well on a sound slab with lighter chemical exposure.",
      },
      {
        q: "Can you work around store hours in Allen?",
        a: "Yes. Most retail work is done nights and weekends with dust-controlled grinding and fast-cure options so the store opens on schedule.",
      },
    ],
  },
  lewisville: {
    intro:
      "Lewisville's I-35E corridor holds a dense mix of warehouses and light manufacturing, and Old Town redevelopment and the SH-121 corridor bring steady retail, restaurant, medical and office buildouts.",
    facilities: [WAREHOUSE, MANUFACTURING, RETAIL, HEALTHCARE],
    faqs: [
      {
        q: "Do you coat warehouse floors along I-35E in Lewisville?",
        a: "Yes. We install industrial epoxy and urethane cement in warehouses and light-manufacturing buildings along I-35E, with joint repair and aisle striping.",
      },
      {
        q: "Do you install polished concrete for Old Town Lewisville buildouts?",
        a: "Yes. Polished concrete is a common choice for retail and restaurant buildouts with a sound slab; we approve the finish on a mockup first.",
      },
      {
        q: "Do you do medical and office flooring along SH-121?",
        a: "Yes. We install resinous floors in medical back-of-house and polished concrete or resilient flooring in office space, scheduled around occupancy.",
      },
    ],
  },
  carrollton: {
    intro:
      "Carrollton's industrial and light-manufacturing belt along I-35E and Belt Line is one of the strongest commercial coating markets in DFW. We also install polished concrete in office and showroom space and floors for restaurants and medical office along Josey Lane and Hebron Parkway.",
    facilities: [MANUFACTURING, WAREHOUSE, OFFICE, RESTAURANT],
    faqs: [
      {
        q: "What floor coating do you recommend for a Carrollton manufacturing plant?",
        a: "It depends on the chemicals, heat and traffic. Urethane cement handles heat and washdown; high-build or novolac epoxy handles chemical exposure. We test the slab and review your process before recommending a system.",
      },
      {
        q: "Can you coat a production floor in Carrollton without stopping the line?",
        a: "Usually, yes. We phase the work by zone and schedule it for nights, weekends or planned shutdowns, using fast-cure systems where return-to-service time is tight.",
      },
      {
        q: "Do you add safety striping to Carrollton warehouse floors?",
        a: "Yes. Line striping and floor marking for aisles, walkways and equipment zones can be added as part of the floor project.",
      },
    ],
  },
  irving: {
    intro:
      "Irving is where we do some of our most specialized work. At a data center substation in Irving we took transformer oil containment pits, each about 1,500 square feet of coatable space, from cracked bare concrete to a seamless, watertight coating across the floor, walls, curbs and equipment pads. The rest of the city keeps us busy too: Las Colinas office towers and corporate campuses, logistics and distribution buildings around DFW Airport, and hospitals and hotels that have to stay open while the floor goes down.",
    facilities: [DATA_CENTER, CONTAINMENT, OFFICE, WAREHOUSE, HEALTHCARE, HOTEL],
    polished:
      "Las Colinas lobbies, corporate amenity spaces and airport-area showrooms are good candidates for polished concrete when the slab is sound. Because these buildings are usually occupied, we grind with dust-controlled equipment, work after hours, densify, fill joints and polish to the aggregate exposure and sheen approved on a mockup.",
    faqs: [
      {
        q: "Do you coat transformer containment pits at Irving data centers?",
        a: "Yes. At an Irving data center substation we prepped cracked, stained bare-concrete transformer pits, repaired the cracks and installed a seamless, watertight coating across the floor, walls, curbs and pads so transformer oil stays contained. Each pit was about 1,500 square feet of coatable space.",
      },
      {
        q: "What else do you install in Irving data centers besides containment?",
        a: "Static-dissipative or conductive floors in electrical and UPS rooms, chemical-resistant novolac in battery rooms, and durable epoxy in loading docks, corridors and mechanical spaces. We match the system to each room rather than using one coating everywhere.",
      },
      {
        q: "Can you work in an occupied Las Colinas office building or an Irving hotel?",
        a: "Yes. We phase the work by floor or zone, run nights and weekends, and use dust-controlled grinding so tenants, guests and staff keep using the building.",
      },
    ],
  },
  arlington: {
    intro:
      "Arlington sits between Dallas and Fort Worth, and its commercial floors are mostly industrial. The Great Southwest Industrial District is one of the largest industrial parks in the region, the area around the GM Arlington Assembly plant is full of automotive supplier and manufacturing buildings, and distribution warehouses line I-20, I-30 and SH-360. Those floors take forklifts, pallet jacks, oil and fluids every shift, so we test the slab and look at the operation before recommending a system.",
    facilities: [WAREHOUSE, MANUFACTURING, RESTAURANT, SCHOOL, RETAIL],
    polished:
      "For Arlington distribution buildings with a sound slab and light chemical exposure, polished concrete is often the lowest-maintenance floor available: no coating to wear through under forklift traffic and nothing to recoat. We assess the slab, repair joints and cracks, then grind, densify and polish to the finish approved on a mockup.",
    faqs: [
      {
        q: "Do you coat warehouse and manufacturing floors in the Great Southwest Industrial District?",
        a: "Yes. Warehouses, light-manufacturing and flex buildings in the Great Southwest Industrial District are typical Arlington work for us: high-build industrial epoxy, urethane cement where heat or washdown is involved, or polished concrete, plus joint repair and aisle striping.",
      },
      {
        q: "What floor works for an Arlington automotive supplier or parts plant?",
        a: "Floors that see oil, coolant, hydraulic fluid and steel-wheeled carts usually need a chemical- and impact-resistant system: high-build or novolac epoxy, or urethane cement where there is heat or hot-water washdown. We review the process and test the slab before recommending one.",
      },
      {
        q: "Do you work on stadium, venue and campus floors in Arlington?",
        a: "Yes. Concourses, commissary kitchens, restrooms and back-of-house areas in Entertainment District venues, and labs, shops and corridors on university campuses, get seamless, cleanable floors scheduled around event calendars and the academic year.",
      },
    ],
  },
};
