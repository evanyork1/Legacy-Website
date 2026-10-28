/**
 * Recommended systems per industry page — each links to its system anchor
 * in the systems library. Source: docs/site-pass-oct-2026.md Part 2, item 17.
 */
export type Rec = { label: string; href: string; note?: string };

const CG = { label: "Neogard CG Series", href: "/industrial-epoxy#systems" };
const ESD = { label: "Sherwin-Williams ESD (Resuflor Topcoat SDE / SD)", href: "/esd-static-control-flooring#systems" };
const NOVOLAC = { label: "Neogard Novolac 32 / 125", href: "/novolac-epoxy-flooring#systems" };
const NEOCRETE = { label: "Neogard Neocrete", href: "/urethane-cement-flooring#neocrete-sl" };
const HYBRI = { label: "Neogard Hybri-Gard", href: "/urethane-cement-flooring#hybri-gard" };
const FTS = { label: "Neogard FTS MMA", href: "/mma-flooring#systems" };
const COVE = { label: "Neogard Epoxy Cove Base UV", href: "/epoxy-cove-base#epoxy-cove-base-uv" };
const NEOQUARTZ = { label: "Neogard NeoQuartz", href: "/quartz-flooring#systems" };
const NEOFLAKE = { label: "Neogard Neoflake", href: "/flake-floors#neoflake" };
const POLISHED = { label: "Polished concrete", href: "/concrete-polishing" };
const RESILIENT = { label: "Resilient flooring (carpet tile, LVP/LVT)", href: "/resilient-flooring" };
const KITCHENGARD = { label: "Neogard KitchenGard 3/16\"", href: "/restaurant-kitchen-flooring#kitchengard" };
const PEDA = { label: "Neogard Peda-Gard", href: "/deck-coatings#peda-gard" };

const FOOD_PHARMA: Rec[] = [NEOCRETE, HYBRI, FTS, NOVOLAC, COVE];
const HEALTH: Rec[] = [NEOQUARTZ, { ...NEOFLAKE, note: "anti-microbial CRU or polyaspartic seals" }, COVE, { ...NEOCRETE, note: "kitchens" }];
const RETAIL_OFFICE: Rec[] = [POLISHED, NEOQUARTZ, NEOFLAKE, RESILIENT];

export const RECOMMENDED: Record<string, Rec[]> = {
  "/data-center-flooring": [
    { ...CG, note: "support spaces" },
    { ...ESD, note: "electrical, UPS and MDF rooms" },
    { ...NOVOLAC, note: "battery rooms, containment" },
    { label: "Neogard Neocrete or Hybri-Gard", href: "/urethane-cement-flooring#systems", note: "CDU and mechanical rooms" },
    { ...FTS, note: "shutdown windows" },
    { label: "Neogard roof coatings", href: "/roof-deck-waterproofing#systems" },
    { ...PEDA, note: "stairs, mezzanines" },
  ],
  "/warehouse-flooring": [
    { label: "CG-32", href: "/industrial-epoxy#cg-32" },
    { label: "CG-65", href: "/industrial-epoxy#cg-65" },
    { label: "CG-125", href: "/industrial-epoxy#cg-125" },
    { label: "CG-250 Trowel", href: "/industrial-epoxy#cg-250-trowel" },
    POLISHED,
  ],
  "/manufacturing-floor-coating": [
    { label: "CG-32", href: "/industrial-epoxy#cg-32" },
    { label: "CG-65", href: "/industrial-epoxy#cg-65" },
    { label: "CG-125", href: "/industrial-epoxy#cg-125" },
    { label: "CG-250 Trowel", href: "/industrial-epoxy#cg-250-trowel" },
    POLISHED,
  ],
  "/food-processing-flooring": FOOD_PHARMA,
  "/pharmaceutical-flooring": FOOD_PHARMA,
  "/restaurant-kitchen-flooring": [KITCHENGARD, NEOCRETE, FTS, { ...NEOQUARTZ, note: "front of house" }],
  "/healthcare-flooring": HEALTH,
  "/school-flooring": HEALTH,
  "/pharmacy-cleanroom-flooring": HEALTH,
  "/aerospace-hangar-flooring": [
    { label: "SkyGard LD", href: "/aerospace-hangar-flooring#skygard-ld" },
    { label: "SkyGard MD", href: "/aerospace-hangar-flooring#skygard-md" },
    { label: "SkyGard HD", href: "/aerospace-hangar-flooring#skygard-hd" },
    { label: "SkyGard MRO", href: "/aerospace-hangar-flooring#skygard-mro" },
  ],
  "/auto-dealership-flooring": [
    NEOFLAKE,
    NEOQUARTZ,
    { label: "Neogard CG Series with CRU topcoat", href: "/industrial-epoxy#systems" },
    { label: "Neogard SkyGard", href: "/aerospace-hangar-flooring#systems", note: "service bays" },
  ],
  "/parking-garage-coatings": [
    { label: "Neogard Auto-Gard family", href: "/parking-garage-coatings#auto-gard" },
    { label: "Neogard RTS Vehicular", href: "/parking-garage-coatings#rts-vehicular" },
  ],
  "/multifamily-flooring": [
    { ...PEDA, note: "decks, balconies" },
    { label: "Neogard Decorative Peda-Gard", href: "/deck-coatings#decorative-peda-gard" },
    NEOFLAKE,
  ],
  "/retail-flooring": RETAIL_OFFICE,
  "/office-flooring": RETAIL_OFFICE,
  "/hotel-flooring": RETAIL_OFFICE,
  "/electronics-manufacturing-flooring": [ESD, CG],
  "/agriculture-facility-flooring": [NEOCRETE, NOVOLAC, { label: "CG-125", href: "/industrial-epoxy#cg-125" }],
};
