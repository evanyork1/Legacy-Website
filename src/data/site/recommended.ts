/**
 * Recommended systems per industry page — each links to its system anchor
 * in the systems library. Source: docs/site-pass-oct-2026.md Part 2, item 17.
 */
export type Rec = { label: string; href: string; note?: string };

const CG = { label: "Legacy Epoxy Series", href: "/industrial-epoxy#systems" };
const ESD = { label: "Legacy ESD 35 / ESD Stipple", href: "/esd-static-control-flooring#systems" };
const NOVOLAC = { label: "Legacy Novolac 32 / 125", href: "/novolac-epoxy-flooring#systems" };
const NEOCRETE = { label: "Legacy Urethane Cement", href: "/urethane-cement-flooring#legacy-urethane-cement-sl" };
const HYBRI = { label: "Legacy Hybrid Urethane", href: "/urethane-cement-flooring#legacy-hybrid-urethane" };
const FTS = { label: "Legacy MMA", href: "/mma-flooring#systems" };
const COVE = { label: "Legacy Epoxy Cove", href: "/epoxy-cove-base#legacy-epoxy-cove" };
const NEOQUARTZ = { label: "Legacy Quartz", href: "/quartz-flooring#systems" };
const NEOFLAKE = { label: "Legacy Flake", href: "/flake-floors#legacy-flake-epoxy" };
const POLISHED = { label: "Polished concrete", href: "/concrete-polishing" };
const RESILIENT = { label: "Resilient flooring (carpet tile, LVP/LVT)", href: "/resilient-flooring" };
const KITCHENGARD = { label: "Legacy Kitchen Slurry 3/16\"", href: "/restaurant-kitchen-flooring#legacy-kitchen-slurry" };
const PEDA = { label: "Legacy Pedestrian Deck", href: "/deck-coatings#legacy-pedestrian-deck" };

const FOOD_PHARMA: Rec[] = [NEOCRETE, HYBRI, FTS, NOVOLAC, COVE];
const HEALTH: Rec[] = [NEOQUARTZ, { ...NEOFLAKE, note: "anti-microbial CRU or polyaspartic seals" }, COVE, { ...NEOCRETE, note: "kitchens" }];
const RETAIL_OFFICE: Rec[] = [POLISHED, NEOQUARTZ, NEOFLAKE, RESILIENT];

export const RECOMMENDED: Record<string, Rec[]> = {
  "/data-center-flooring": [
    { ...CG, note: "support spaces" },
    { ...ESD, note: "electrical, UPS and MDF rooms" },
    { ...NOVOLAC, note: "battery rooms, containment" },
    { label: "Legacy Urethane Cement or Legacy Hybrid Urethane", href: "/urethane-cement-flooring#systems", note: "CDU and mechanical rooms" },
    { ...FTS, note: "shutdown windows" },
    { label: "Legacy roof coatings", href: "/roof-deck-waterproofing#systems" },
    { ...PEDA, note: "stairs, mezzanines" },
  ],
  "/warehouse-flooring": [
    { label: "Legacy Epoxy 32", href: "/industrial-epoxy#legacy-epoxy-32" },
    { label: "Legacy Epoxy 65", href: "/industrial-epoxy#legacy-epoxy-65" },
    { label: "Legacy Epoxy 125", href: "/industrial-epoxy#legacy-epoxy-125" },
    { label: "Legacy Epoxy Mortar 250", href: "/industrial-epoxy#legacy-epoxy-mortar-250" },
    POLISHED,
  ],
  "/manufacturing-floor-coating": [
    { label: "Legacy Epoxy 32", href: "/industrial-epoxy#legacy-epoxy-32" },
    { label: "Legacy Epoxy 65", href: "/industrial-epoxy#legacy-epoxy-65" },
    { label: "Legacy Epoxy 125", href: "/industrial-epoxy#legacy-epoxy-125" },
    { label: "Legacy Epoxy Mortar 250", href: "/industrial-epoxy#legacy-epoxy-mortar-250" },
    POLISHED,
  ],
  "/food-processing-flooring": FOOD_PHARMA,
  "/pharmaceutical-flooring": FOOD_PHARMA,
  "/restaurant-kitchen-flooring": [KITCHENGARD, NEOCRETE, FTS, { ...NEOQUARTZ, note: "front of house" }],
  "/healthcare-flooring": HEALTH,
  "/school-flooring": HEALTH,
  "/pharmacy-cleanroom-flooring": HEALTH,
  "/aerospace-hangar-flooring": [
    { label: "Legacy Hangar LD", href: "/aerospace-hangar-flooring#legacy-hangar-ld" },
    { label: "Legacy Hangar MD", href: "/aerospace-hangar-flooring#legacy-hangar-md" },
    { label: "Legacy Hangar HD", href: "/aerospace-hangar-flooring#legacy-hangar-hd" },
    { label: "Legacy Hangar MRO", href: "/aerospace-hangar-flooring#legacy-hangar-mro" },
  ],
  "/auto-dealership-flooring": [
    NEOFLAKE,
    NEOQUARTZ,
    { label: "Legacy Epoxy Series with CRU topcoat", href: "/industrial-epoxy#systems" },
    { label: "Legacy Hangar", href: "/aerospace-hangar-flooring#systems", note: "service bays" },
  ],
  "/parking-garage-coatings": [
    { label: "Legacy High Traffic Urethane family", href: "/parking-garage-coatings#legacy-high-traffic-urethane" },
    { label: "Legacy PMMA Vehicular", href: "/parking-garage-coatings#legacy-pmma-vehicular" },
  ],
  "/multifamily-flooring": [
    { ...PEDA, note: "decks, balconies" },
    { label: "Legacy Decorative Deck", href: "/deck-coatings#legacy-decorative-deck" },
    NEOFLAKE,
  ],
  "/retail-flooring": RETAIL_OFFICE,
  "/office-flooring": RETAIL_OFFICE,
  "/hotel-flooring": RETAIL_OFFICE,
  "/electronics-manufacturing-flooring": [ESD, CG],
  "/agriculture-facility-flooring": [NEOCRETE, NOVOLAC, { label: "Legacy Epoxy 125", href: "/industrial-epoxy#legacy-epoxy-125" }],
};
