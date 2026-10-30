/**
 * Commercial redesign site model — navigation, business facts, clients and
 * testimonials. Source of truth: docs/commercial-redesign-brief.md.
 */

export const BUSINESS = {
  name: "Legacy Industrial Coatings",
  legalName: "Legacy Industrial Coatings LLC",
  founded: "September 2019",
  phone: "214-305-6516",
  phoneDisplay: "(214) 305-6516",
  phoneHref: "tel:214-305-6516",
  email: "support@legacyindustrialcoatings.com",
  address1: "6010 W Spring Creek Pkwy",
  address2: "Plano, TX 75024",
  reviews: "5.0 / 5 · 201+ Google Reviews",
  googleReviewsUrl: "https://maps.app.goo.gl/2idbg4BFnZVKvLNK9",
} as const;

export type NavLink = { label: string; path: string };
export type NavGroup = { title: string; items: NavLink[] };

export const ABOUT_ITEMS: NavLink[] = [
  { label: "Company", path: "/about" },
  { label: "Our Process", path: "/our-process" },
  { label: "Capability Packet", path: "/capability-packet" },
  { label: "Careers", path: "/careers" },
  { label: "Reviews", path: "/reviews" },
  { label: "DFW & Nationwide", path: "/service-areas#nationwide" },
];

export const INDUSTRY_GROUPS: NavGroup[] = [
  {
    title: "Mission-Critical & Tech",
    items: [
      { label: "Data Centers", path: "/data-center-flooring" },
      { label: "Semiconductor & Electronics", path: "/electronics-manufacturing-flooring" },
      { label: "Aerospace & Hangars", path: "/aerospace-hangar-flooring" },
    ],
  },
  {
    title: "Industrial",
    items: [
      { label: "Warehouse & Tilt-Up", path: "/warehouse-flooring" },
      { label: "Manufacturing", path: "/manufacturing-floor-coating" },
      { label: "Food & Beverage Processing", path: "/food-processing-flooring" },
      { label: "Pharmaceutical & Medical Mfg.", path: "/pharmaceutical-flooring" },
      { label: "Agriculture", path: "/agriculture-facility-flooring" },
    ],
  },
  {
    title: "Healthcare & Labs",
    items: [
      { label: "Healthcare", path: "/healthcare-flooring" },
      { label: "Pharmacy & Cleanrooms", path: "/pharmacy-cleanroom-flooring" },
    ],
  },
  {
    title: "Commercial",
    items: [
      { label: "Restaurants & Kitchens", path: "/restaurant-kitchen-flooring" },
      { label: "Retail", path: "/retail-flooring" },
      { label: "Office & Corporate", path: "/office-flooring" },
      { label: "Hotel & Hospitality", path: "/hotel-flooring" },
      { label: "Education", path: "/school-flooring" },
      { label: "Multifamily", path: "/multifamily-flooring" },
      { label: "Auto Dealerships & Service", path: "/auto-dealership-flooring" },
      { label: "Parking Structures", path: "/parking-garage-coatings" },
    ],
  },
];

export const SYSTEM_GROUPS: NavGroup[] = [
  {
    title: "Resinous",
    items: [
      { label: "Epoxy Flooring", path: "/commercial" },
      { label: "Novolac Epoxy", path: "/novolac-epoxy-flooring" },
      { label: "MMA (Fast Cure)", path: "/mma-flooring" },
      { label: "Resinous Flooring", path: "/resinous-flooring" },
      { label: "Quartz", path: "/quartz-flooring" },
      { label: "Urethane Cement", path: "/urethane-cement-flooring" },
      { label: "ESD / Static-Control", path: "/esd-static-control-flooring" },
      { label: "Integral Cove Base", path: "/epoxy-cove-base" },
      { label: "Flake", path: "/flake-floors" },
    ],
  },
  {
    title: "Concrete",
    items: [
      { label: "Polished Concrete", path: "/concrete-polishing" },
      { label: "Sealed & Densified Concrete", path: "/concrete-sealing" },
      { label: "Joint Fill & Crack Repair", path: "/joint-filling-crack-repair" },
      { label: "Moisture Mitigation", path: "/moisture-mitigation" },
    ],
  },
  {
    title: "Containment & Waterproofing",
    items: [
      { label: "Secondary Containment", path: "/secondary-containment-coatings" },
      { label: "Battery Room Flooring", path: "/battery-room-flooring" },
      { label: "Deck & Traffic Coatings", path: "/deck-coatings" },
    ],
  },
  {
    title: "Safety, Resilient & Care",
    items: [
      { label: "Line Striping & Floor Marking", path: "/line-striping" },
      { label: "Commercial Carpet Tile", path: "/commercial-carpet-tile" },
      { label: "Commercial LVT & LVP", path: "/commercial-lvt-flooring" },
      { label: "Resilient Flooring", path: "/resilient-flooring" },
      { label: "Maintenance Programs", path: "/commercial-floor-maintenance" },
    ],
  },
];

/** Main menu: a short list per dropdown. Every page stays linked from /services, /who-we-serve and the footer. */
export const SERVICES_NAV: NavLink[] = [
  { label: "Epoxy Flooring", path: "/commercial" },
  { label: "Polished Concrete", path: "/concrete-polishing" },
  { label: "Carpet Tile & LVT", path: "/services#resilient" },
  { label: "Urethane Cement", path: "/urethane-cement-flooring" },
  { label: "Specialty Coatings", path: "/services#specialty" },
  { label: "Repairs & Prep", path: "/services#repairs" },
  { label: "Line Striping", path: "/line-striping" },
  { label: "All Services", path: "/services" },
];

export const INDUSTRIES_NAV: NavLink[] = [
  { label: "Warehousing & Distribution", path: "/warehouse-flooring" },
  { label: "Manufacturing", path: "/manufacturing-floor-coating" },
  { label: "Food Processing", path: "/food-processing-flooring" },
  { label: "Aviation & Hangars", path: "/aerospace-hangar-flooring" },
  { label: "Data Centers", path: "/data-center-flooring" },
  { label: "Healthcare", path: "/healthcare-flooring" },
  { label: "All Industries", path: "/industries" },
];

export const RESOURCES_NAV: NavLink[] = [
  { label: "Resource Center", path: "/resources" },
  { label: "Blog", path: "/blog" },
  { label: "Pricing Guides", path: "/resources#pricing" },
  { label: "Floor Comparisons", path: "/resources#comparisons" },
  { label: "Capability Packet", path: "/capability-packet" },
];

export const ABOUT_NAV: NavLink[] = [
  { label: "Company", path: "/about" },
  { label: "Our Process", path: "/our-process" },
  { label: "Capabilities", path: "/capability-packet" },
  { label: "Reviews", path: "/reviews" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export const ALL_INDUSTRIES: NavLink[] = INDUSTRY_GROUPS.flatMap((g) => g.items);
export const ALL_SYSTEMS: NavLink[] = SYSTEM_GROUPS.flatMap((g) => g.items);

export const RESIDENTIAL_LINKS: NavLink[] = [
  { label: "Garage Floors", path: "/garagefloors" },
  { label: "Patio Coatings", path: "/residential-patio" },
  { label: "Flake Floors", path: "/flake-floors" },
  { label: "Residential Case Studies", path: "/residential-case-studies" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About", path: "/about" },
  { label: "Our Process", path: "/our-process" },
  { label: "Capability Packet", path: "/capability-packet" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Reviews", path: "/reviews" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

/** Client wordmarks — text only until official logo files are uploaded. */
export const CLIENTS = [
  "Chipotle",
  "ASSA ABLOY",
  "Aqua Tots Swim Schools",
  "Gordon Food Service",
  "FocusRx",
  "Apex Imaging Services",
] as const;

export const CLIENTS_NOTE =
  "And more — pharmaceutical manufacturers, GCs and property managers across DFW and nationwide.";

/**
 * Verbatim Google reviews already shown on this site. Only reviews whose
 * wording does not mention garages, homes or residential work are eligible
 * for commercial pages. Do not edit the text.
 */
export const COMMERCIAL_REVIEWS = [
  {
    name: "Bharat Arimilli",
    text: "Excellent experience from start to finish. Got a quote quickly and at a very reasonable price. The office was very communicative throughout and the crew did an amazing job with the final result. This team is full of people who are professional, friendly and great at what they do.",
  },
  {
    name: "Scott Cleland",
    text: "Totally exceeded my expectations. Crew was experienced and professional. They worked with me on how to address existing cracks in my floor, and they worked around some challenging weather. Finished floor is amazing.",
  },
  {
    name: "Chris C",
    text: "Great company to work with. Competent, genuinely helpful staff. From the original quote to the completion of the job, the representatives were always thorough and professional. Would highly recommend Legacy Industrial Epoxy Floor Coating to anyone seeking this service.",
  },
] as const;

/** The five process steps (also rendered on /our-process). */
export const PROCESS_STEPS = [
  {
    title: "Site Walk or Remote Plan Review",
    text: "We walk your site within 1–3 business days, or review drawings remotely. Moisture readings and photos documented on site.",
  },
  {
    title: "Fit Meeting",
    text: "We learn your operation, schedule, budget and standards — and decide together whether we're the right partner.",
  },
  {
    title: "Estimate & Spec",
    text: "Full bid within 24 hours of receiving plans: system recommendation with product data sheets, thickness, cure times and a phasing plan.",
  },
  {
    title: "Scheduling",
    text: "We lock in crew dates, order your materials and build the phasing plan around your operation.",
  },
  {
    title: "Install, Inspect, Close Out",
    text: "Prep to spec, testing, daily photo log, punch walk, warranty and a complete closeout package.",
  },
] as const;
