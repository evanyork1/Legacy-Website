/**
 * Systems library — every named system we install, with coat-by-coat
 * build-ups. Values come ONLY from docs/site-pass-oct-2026.md (Part 2) and
 * previously verified build-ups. Never estimate a missing value: leave the
 * cell out. No manufacturer URLs anywhere.
 *
 * Each entry renders as an anchored block on its system page (and any
 * `alsoOn` pages) and as a card on /materials.
 */

export type Family =
  | "Epoxy"
  | "Novolac"
  | "Urethane Cement"
  | "MMA"
  | "Polyaspartic & Fast Cure"
  | "Flake & Quartz"
  | "ESD"
  | "Traffic Coatings"
  | "Roof Coatings"
  | "Cove Base";

export const FAMILIES: Family[] = [
  "Epoxy",
  "Novolac",
  "Urethane Cement",
  "MMA",
  "Polyaspartic & Fast Cure",
  "Flake & Quartz",
  "ESD",
  "Traffic Coatings",
  "Roof Coatings",
  "Cove Base",
];

export type CatalogLayer = { coat: string; product: string; coverage?: string; dft?: string };

export type CatalogSystem = {
  /** Anchor id on the system page, e.g. "cg-32". */
  id: string;
  name: string;
  maker: "Neogard" | "Sherwin-Williams";
  family: Family;
  /** Primary system page. */
  page: string;
  /** Other pages that show the same block. */
  alsoOn?: string[];
  chemistry: string;
  thickness?: string;
  /** Present → layer table + stack diagram. Absent → summary card. */
  layers?: CatalogLayer[];
  summary?: string;
  bestFor?: string;
  properties?: string[];
  /** Card grouping on pages that list many systems (e.g. roof type). */
  group?: string;
  /** Label shown above the block, e.g. "Sherwin-Williams option". */
  tag?: string;
};

const L = (coat: string, product: string, coverage?: string, dft?: string): CatalogLayer => ({ coat, product, coverage, dft });

export const catalogNote = (maker: CatalogSystem["maker"]) =>
  `Values from ${maker === "Neogard" ? "Neogard's" : "Sherwin-Williams'"} published system data. Final build-up, thickness and cure are confirmed in our submittal for your project.`;

/* ------------------------------------------------------------------ */
/* Shared published properties                                         */
/* ------------------------------------------------------------------ */
const P_70714 = "70714/70715 epoxy: compressive strength 25,300 psi (ASTM D695).";
const P_CRU = "70817/70818 CRU: Shore D 70 (ASTM D2240); Taber abrasion 23 mg/1,000 cycles CS-17 (ASTM D4060); passes anti-microbial test JIS Z 2801-2010.";
const P_NOVOLAC = "70704/70705 novolac: compressive strength 10,000 psi (ASTM D695); Shore D 84.";
const P_70734 = "70734/70735 epoxy: compressive strength 11,000 psi (ASTM D695).";
const P_57051 = "57051 polyaspartic: Taber abrasion 55 mg/1,000 cycles CS-17; passes JIS Z 2801-2010 anti-microbial.";
const P_NEOCRETE = [
  "Compressive strength 7,700 psi (ASTM C579).",
  "Modulus of elasticity 446,700 psi (ASTM C580).",
  "Shore D 84 (ASTM D2240).",
  "No support of fungal growth (ASTM G21).",
];

const CG_BEST = "Warehouses, production areas, forklift and foot traffic, offices, common areas. Surface prep CSP 3.";
const CRU_OPT = (cov: string, dft: string) => L("Optional", "Chem/UV-resistant 70817/70818 CRU", cov, dft);
const TEXTURE = (product = "70714/70715 or 70817/70818 + 86500 Neogrip Spheres") => L("Optional texture", product, "400 sf/gal", "4");
const SAND_BASE = (label: string, resin = "70714/70715") => L(label, `${resin} + 86364 sand`, "80 sf/gal & 50 lb/100 sf", "20");

const NEOCRETE_BEST = "Commercial kitchens, pharmaceutical, food processing, freezers and areas with high thermal cycling. Prep CSP 3–4.";
const NEOFLAKE_BEST = "Auto showrooms and service areas, retail, restaurants, locker rooms, sports venues, stadiums, manufacturing break and common areas.";
const NEOQUARTZ_BEST = "Restrooms, locker rooms, commercial kitchens, corridors, showrooms, stadium concourses, pedestrian walkways. Prep CSP 3.";
const SKY_BEST = "Hangars, aircraft maintenance and supply, tug areas, auto maintenance.";
const FTS_BEST = "Commercial kitchens, food processing and packaging, pharmaceutical production, hotels and casinos, vivariums, and facilities with an overnight or weekend shutdown window (including data center support spaces).";

export const CATALOG: CatalogSystem[] = [
  /* ---------------- 1. CG Series — /industrial-epoxy ---------------- */
  {
    id: "cg-16", name: "CG-16", maker: "Neogard", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy", thickness: "Thin film (CG Series spans thin film to 1/4\")",
    layers: [L("1 Primer", "70714/70715", "260 sf/gal", "6"), L("2 Topcoat", "70714/70715", "160 sf/gal", "10"), CRU_OPT("200 sf/gal", "8"), TEXTURE()],
    bestFor: `Light traffic and recoats. ${CG_BEST}`, properties: [P_70714, P_CRU],
  },
  {
    id: "cg-32", name: "CG-32", maker: "Neogard", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy",
    layers: [L("1 Primer", "70714/70715", "200 sf/gal", "8"), L("2 Base", "70714/70715", "130 sf/gal", "12"), L("3 Topcoat", "70714/70715", "130 sf/gal", "12"), CRU_OPT("200 sf/gal", "8"), TEXTURE()],
    bestFor: `General commercial and light industrial. ${CG_BEST}`, properties: [P_70714, P_CRU],
  },
  {
    id: "cg-65", name: "CG-65", maker: "Neogard", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, sand broadcast",
    layers: [SAND_BASE("1 Base"), L("2 1st Seal", "70714/70715", "160 sf/gal", "10"), L("3 2nd Seal", "70714/70715", "200 sf/gal", "8"), CRU_OPT("400 sf/gal", "4")],
    bestFor: `Textured finish for heavier traffic. ${CG_BEST}`, properties: [P_70714, P_CRU],
  },
  {
    id: "cg-125", name: "CG-125", maker: "Neogard", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, double sand broadcast",
    layers: [SAND_BASE("1 1st Base"), SAND_BASE("2 2nd Base"), L("3 1st Seal", "70714/70715", "160 sf/gal", "10"), L("4 2nd Seal", "70714/70715", "200 sf/gal", "8"), CRU_OPT("400 sf/gal", "4")],
    bestFor: `Heavy forklift and production traffic. ${CG_BEST}`, properties: [P_70714, P_CRU],
  },
  {
    id: "cg-250-trowel", name: "CG-250 Trowel", maker: "Neogard", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy mortar", thickness: "1/4\" mortar",
    layers: [
      L("1 Primer", "70714/70715 + CG Epoxy Mortar Blend", "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", "70714/70715 + CG Epoxy Mortar Blend", "At specified thickness"),
      L("3 Grout", "70714/70715", "200 sf/gal", "8"),
      L("4 1st Seal", "70714/70715", "200 sf/gal", "8"),
      L("5 2nd Seal", "70714/70715", "200 sf/gal", "8"),
      CRU_OPT("400 sf/gal", "4"),
    ],
    bestFor: `Heaviest impact service. ${CG_BEST}`, properties: [P_70714, P_CRU],
  },
  {
    id: "resuflor-performance-hps", name: "Resuflor Performance HPS", maker: "Sherwin-Williams", family: "Epoxy", page: "/industrial-epoxy",
    tag: "Sherwin-Williams option", chemistry: "Epoxy with aliphatic urethane gloss topcoat",
    layers: [L("1 Primer", "Resuflor MPE"), L("2 Self-leveling build", "Resuflor MPE"), L("3 Gloss topcoat", "Resutile HPS 100 aliphatic urethane")],
    bestFor: "Occupied buildings that need a low-odor, low-VOC option, subject to ventilation and work-area controls.",
  },

  /* ---------------- 2. Novolac — /novolac-epoxy-flooring ---------------- */
  {
    id: "novolac-32", name: "Novolac 32", maker: "Neogard", family: "Novolac", page: "/novolac-epoxy-flooring",
    alsoOn: ["/secondary-containment-coatings", "/battery-room-flooring"],
    chemistry: "Novolac epoxy over epoxy primer",
    layers: [L("1 Primer", "70714/70715", "200 sf/gal", "8"), L("2 Base", "70704/70705", "100 sf/gal", "16"), L("3 Topcoat", "70704/70705", "200 sf/gal", "8"), TEXTURE("70704/70705 + 86500")],
    bestFor: "Chemical storage, battery charging rooms, secondary containment, bakeries, food processing, animal research.",
    properties: [P_NOVOLAC, "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas."],
  },
  {
    id: "novolac-125", name: "Novolac 125", maker: "Neogard", family: "Novolac", page: "/novolac-epoxy-flooring",
    alsoOn: ["/secondary-containment-coatings", "/battery-room-flooring"],
    chemistry: "Novolac epoxy, double sand broadcast",
    layers: [SAND_BASE("1 1st Base"), L("2 2nd Base", "70704/70705 + 86364 sand", undefined, "20"), L("3 1st Seal", "70704/70705", "160 sf/gal", "10"), L("4 2nd Seal", "70704/70705", "200 sf/gal", "8")],
    bestFor: "Chemical storage, battery charging rooms, secondary containment, bakeries, food processing, animal research.",
    properties: [P_NOVOLAC, "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas."],
  },

  /* ---------------- 3. NeoQuartz — /quartz-flooring ---------------- */
  {
    id: "neoquartz-broadcast", name: "NeoQuartz Broadcast", maker: "Neogard", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "100% solids epoxy with color quartz", thickness: "1/16\" per base coat with aggregate",
    layers: [
      L("1 1st Base", "70714/70715 + color quartz", "80 sf/gal & 50 lb/100 sf", "20"),
      L("2 2nd Base", "70714/70715 + color quartz", "80 sf/gal & 50 lb/100 sf", "20"),
      L("3 1st Seal", "70734/70735 epoxy (interior) or 70817/70818 CRU (exterior)", "160 sf/gal", "10"),
      L("4 2nd Seal", "70734/70735 epoxy (interior) or 70817/70818 CRU (exterior)", "200 sf/gal", "8"),
    ],
    bestFor: NEOQUARTZ_BEST, properties: [P_70734, P_CRU],
  },
  {
    id: "neoquartz-hd", name: "NeoQuartz HD", maker: "Neogard", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "Epoxy mortar with color quartz broadcast",
    layers: [
      L("1 Primer", "70714/70715 + CG mortar", "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", "70714/70715 + CG mortar", "At specified thickness"),
      L("3 Broadcast", "70714/70715 + color quartz", "80 sf/gal & 50 lb/100 sf", "20"),
      L("4 1st Seal", "70734/70735 or 57051", "200 sf/gal", "8"),
      L("5 2nd Seal", "70734/70735 or 57051", "200 sf/gal", "8"),
    ],
    bestFor: NEOQUARTZ_BEST, properties: [P_70734, P_57051],
  },
  {
    id: "neoquartz-trowel", name: "NeoQuartz Trowel", maker: "Neogard", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "Troweled epoxy and color quartz mortar",
    layers: [
      L("1 Primer", "70714/70715 + 86364 sand", "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", "70714/70715 + color quartz", "At specified thickness"),
      L("3 Grout", "70734/70735", "200 sf/gal", "8"),
      L("4 1st Seal", "70734/70735 or 70817/70818", "200 sf/gal", "8"),
      L("5 2nd Seal", "70734/70735 or 70817/70818", "200 sf/gal", "8"),
    ],
    bestFor: NEOQUARTZ_BEST, properties: [P_70734, P_CRU],
  },
  {
    id: "neoquartz-broadcast-rts", name: "NeoQuartz Broadcast RTS", maker: "Neogard", family: "Polyaspartic & Fast Cure", page: "/quartz-flooring",
    chemistry: "All polyaspartic with color quartz (fast return to service)",
    layers: [
      L("1 1st Base", "57051 High Performance Polyaspartic + color quartz", "80 sf/gal & 50 lb/100 sf", "20"),
      L("2 2nd Base", "57051 + color quartz", "80 sf/gal & 50 lb/100 sf", "20"),
      L("3 1st Seal", "57051", "160 sf/gal", "10"),
      L("4 2nd Seal", "57051", "200 sf/gal", "8"),
    ],
    bestFor: NEOQUARTZ_BEST, properties: [P_57051],
  },

  /* ---------------- 4. Flake — /flake-floors ---------------- */
  {
    id: "neoflake", name: "Neoflake", maker: "Neogard", family: "Flake & Quartz", page: "/flake-floors",
    chemistry: "Epoxy flake",
    layers: [
      L("1 Primer", "70714/70715", "200 sf/gal", "8"),
      L("2 Base", "70714/70715", "100 sf/gal"),
      L("3 Broadcast", "Color flake to full rejection", undefined, "16"),
      L("4 1st Seal", "70734/70735 epoxy, 70817/70818 CRU or 70902/70910 urethane", "200 sf/gal", "8"),
      L("5 2nd Seal", "Same as 1st seal", "200 sf/gal", "8"),
      TEXTURE("Seal resin + 86500 Neogrip Spheres"),
    ],
    bestFor: NEOFLAKE_BEST,
    properties: [P_70734, P_CRU, "Not recommended above 80% RH without a moisture-mitigating primer. Prep CSP 3."],
  },
  {
    id: "neoflake-rts-series-1", name: "Neoflake RTS Series 1", maker: "Neogard", family: "Polyaspartic & Fast Cure", page: "/flake-floors",
    chemistry: "Epoxy base with polyaspartic seals",
    layers: [
      L("1 Primer", "70714/70715", "200 sf/gal", "8"),
      L("2 Base", "70714/70715", "100 sf/gal"),
      L("3 Broadcast", "Color flake", undefined, "16"),
      L("4 1st Seal", "57051 High Performance Polyaspartic", "200 sf/gal", "8"),
      L("5 2nd Seal", "57051", "200 sf/gal", "8"),
      TEXTURE("57051 + 86500"),
    ],
    bestFor: NEOFLAKE_BEST,
    properties: [P_57051, "Not recommended above 80% RH without a moisture-mitigating primer. Prep CSP 3."],
  },
  {
    id: "neoflake-rts-series-2", name: "Neoflake RTS Series 2", maker: "Neogard", family: "Polyaspartic & Fast Cure", page: "/flake-floors",
    chemistry: "All polyaspartic (fastest return to service)",
    layers: [
      L("1 Base", "70869/70819 Polyaspartic", "100 sf/gal"),
      L("2 Broadcast", "Color flake to full rejection", undefined, "16"),
      L("3 1st Seal", "57051", "200 sf/gal", "8"),
      L("4 2nd Seal", "57051", "200 sf/gal", "8"),
      L("Optional texture", "Seal resin + 86500", "400 sf/gal"),
    ],
    bestFor: NEOFLAKE_BEST,
    properties: [P_57051, "Not recommended above 80% RH without a moisture-mitigating primer. Prep CSP 3."],
  },
  {
    id: "resuflor-deco-flake-bc", name: "Resuflor Deco Flake BC", maker: "Sherwin-Williams", family: "Flake & Quartz", page: "/flake-floors",
    tag: "Sherwin-Williams option", chemistry: "Epoxy flake with aliphatic urethane topcoat",
    // TODO Evan: add mils/coverage from the Sherwin-Williams PDS
    layers: [
      L("1 Primer", "Resuprime 3579 — two-component, high-solids clear epoxy primer"),
      L("2 Body coat", "Resuflor 3746 — two-component recoatable epoxy binder resin"),
      L("3 Broadcast", "Decorative vinyl color flakes, broadcast to rejection"),
      L("4 Topcoat", "Resutile HTS 100 — low-odor, low-VOC aliphatic urethane"),
    ],
    bestFor: "Interiors that need chemical resistance: schools, healthcare corridors, restaurant front-of-house.",
  },

  /* ---------------- 5. Neocrete + Hybri-Gard — /urethane-cement-flooring ---------------- */
  {
    id: "neocrete-sl", name: "Neocrete SL", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Cementitious polyurethane (urethane cement), self-leveling", thickness: "3/16\" (187 mils)",
    layers: [L("1 Body", "70800 + 70801 + 70804", "32 sf per mixed unit", "187 (3/16\")"), L("Optional topcoat", "Topcoat", undefined, "16")],
    bestFor: NEOCRETE_BEST, properties: [...P_NEOCRETE, "Moisture vapor tolerance up to 25 lb MVER (calcium chloride test)."],
  },
  {
    id: "neocrete-sl-broadcast", name: "Neocrete SL Broadcast", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement with sand broadcast", thickness: "3/16\" body",
    layers: [
      L("1 Body", "Neocrete SL mix (70800 + 70801 + 70804)", "32 sf per mixed unit", "187 (3/16\")"),
      L("2 Broadcast", "86364 sand", "40 lb/100 sf"),
      L("3 Topcoat", "Polyurethane 70800/70801/70804 (100 sf/gal, 16 mils) or Novolac 70704/70705 (130 sf/gal, 12 mils)"),
    ],
    bestFor: NEOCRETE_BEST, properties: [...P_NEOCRETE],
  },
  {
    id: "neocrete-rt", name: "Neocrete RT", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement, rake & trowel", thickness: "3/16\"",
    layers: [
      L("1 Body", "70800 + 70801 + 70806", "36 sf per mixed unit", "187 (3/16\")"),
      L("2 Broadcast", "86364 sand", "40 lb/100 sf"),
      L("RT Broadcast topcoat", "Polyurethane topcoat (16 mils) or Novolac 70704/70705 (12 mils)"),
    ],
    bestFor: NEOCRETE_BEST, properties: [...P_NEOCRETE],
  },
  {
    id: "neocrete-trowel", name: "Neocrete Trowel", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement, trowel grade", thickness: "1/4\" (250 mils)",
    layers: [L("1 Body", "70800 + 70801 + 70802", "44 sf per mixed unit", "250 (1/4\")"), L("Optional topcoat", "Topcoat", undefined, "16")],
    bestFor: NEOCRETE_BEST,
  },
  {
    id: "neocrete-sl-flake", name: "Neocrete SL Flake", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Decorative urethane cement with flake", thickness: "3/16\" body",
    layers: [L("1 Body", "Neocrete SL mix", undefined, "187 (3/16\")"), L("2 Broadcast", "Decorative flake"), L("3 Topcoat", "70817/70818 or 70869/70819", "125 sf/gal", "12")],
    bestFor: NEOCRETE_BEST,
  },
  {
    id: "neocrete-sl-quartz", name: "Neocrete SL Quartz", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Decorative urethane cement with quartz", thickness: "3/16\" body",
    layers: [
      L("1 Body", "Neocrete SL mix", undefined, "187 (3/16\")"),
      L("2 Broadcast", "Decorative quartz"),
      L("3 1st Seal", "70869/70819 polyaspartic or 70817/70818 CRU", "160 sf/gal", "10"),
      L("4 2nd Seal", "70869/70819 polyaspartic or 70817/70818 CRU", "200 sf/gal", "8"),
    ],
    bestFor: NEOCRETE_BEST,
  },
  {
    id: "neocrete-v", name: "Neocrete V", maker: "Neogard", family: "Cove Base", page: "/urethane-cement-flooring",
    alsoOn: ["/epoxy-cove-base"],
    chemistry: "Urethane-cement integral cove base", thickness: "1/8\" thick, 4\" high",
    layers: [L("1 Primer", "70800/70801/70804", "100 sf/gal"), L("2 Cove mix", "70800 + 70801 + 70803", "84 LF per mixed unit", "1/8\"")],
    bestFor: "Integral cove with Neocrete floors in kitchens and food and beverage plants.",
  },
  {
    id: "hybri-gard", name: "Hybri-Gard", maker: "Neogard", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Hybrid: urethane-cement base with epoxy, polyaspartic or MMA grout and topcoat",
    layers: [
      L("1 Base", "Neocrete SL urethane cement", "32 sf at 3/16\" or 45 sf at 1/8\" per mixed unit"),
      L("2 Broadcast", "Decorative flake (15–20 lb/100 sf), decorative quartz or 86364 sand (40 lb/100 sf)"),
      L("3 Grout & topcoat", "E-Series epoxy (70734/70735), P-Series polyaspartic (57051) or M-Series MMA (FTS 450, fastest cure)"),
      L("Optional finish", "Hybri-Gard HTU", "475–500 sf/gal"),
    ],
    bestFor: "Food and beverage, commercial kitchens, production areas, warehouses, cold storage, schools and healthcare.",
  },
  {
    id: "polycrete-sl", name: "Polycrete SL", maker: "Sherwin-Williams", family: "Urethane Cement", page: "/urethane-cement-flooring",
    tag: "Sherwin-Williams option", chemistry: "Urethane cement", thickness: "3/16\" nominal plus topcoat",
    layers: [L("1 Body coat", "Polycrete SL urethane cement", undefined, "3/16\""), L("2 Topcoat", "Pigmented Polycrete TF"), L("Cove", "6\" Polycrete cove (where specified)")],
    bestFor: "Food and beverage plants and commercial kitchens.",
  },

  /* ---------------- 6. FTS MMA — /mma-flooring (cards) ---------------- */
  ...[
    ["fts-hd-sl-roll-coat", "FTS HD Self-Leveling Roll Coat"],
    ["fts-sl-heavy-duty-membrane", "FTS Self-Leveling Heavy Duty Membrane"],
    ["fts-sl-heavy-flex-coat", "FTS SL Heavy Flex Coat"],
    ["fts-sl-heavy-duty-solid-color", "FTS SL Heavy Duty Solid Color", "1/8\""],
    ["fts-neoflake-sl", "FTS Neoflake SL"],
    ["fts-neoquartz-sl", "FTS NeoQuartz SL"],
    ["fts-neoquartz-trowel", "FTS NeoQuartz Trowel", "1/8\""],
    ["fts-cove-bases", "FTS Solid Color, Neoflake and NeoQuartz cove bases", "4\" cove"],
  ].map(([id, name, thickness]): CatalogSystem => ({
    id, name, maker: "Neogard", family: id === "fts-cove-bases" ? "Cove Base" : "MMA", page: "/mma-flooring",
    alsoOn: id === "fts-cove-bases" ? ["/epoxy-cove-base"] : undefined,
    chemistry: "Acrylic MMA (methyl methacrylate)", thickness: thickness ?? "FTS systems: 1/8\" to 3/8\"",
    summary: "FTS 100/FTS 101 primer and adhesion promoter; FTS 200 (flex) or FTS 300 body resin; FTS 400 or FTS 450 topcoat. One-hour cure.",
    bestFor: FTS_BEST, properties: ["Tensile strength 3,850 psi (ASTM D638).", "Meets South Coast AQMD VOC requirements."],
  })),

  /* ---------------- 7. KitchenGard ---------------- */
  {
    id: "kitchengard", name: "KitchenGard 3/16\"", maker: "Neogard", family: "Epoxy", page: "/restaurant-kitchen-flooring",
    alsoOn: ["/food-processing-flooring"],
    chemistry: "100% solids epoxy slurry broadcast with novolac seal", thickness: "3/16\"",
    layers: [
      L("1 1st Slurry Base", "70714/70715 + 86468 flour + 86364 sand", "40 sf/gal & 100 lb/100 sf", "40"),
      L("2 2nd Slurry Base", "70714/70715 + 86468 flour + 86364 sand", "40 sf/gal & 100 lb/100 sf", "40"),
      L("3 1st Seal", "70704/70705 novolac", "200 sf/gal", "8"),
      L("4 2nd Seal", "70704/70705 novolac", "200 sf/gal", "8"),
    ],
    bestFor: "Restaurants, commercial kitchens, wineries and grocery stores without heavy thermal shock. Smooth, stipple or texture finish. Where there is hot washdown or thermal shock, specify Neocrete instead.",
    properties: [P_NOVOLAC],
  },

  /* ---------------- 8. SkyGard — /aerospace-hangar-flooring ---------------- */
  {
    id: "skygard-ld", name: "SkyGard LD", maker: "Neogard", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system", thickness: "SkyGard series: 16–56 mils",
    layers: [L("1 Primer", "70714/70715", "200 sf/gal", "8"), L("2 Topcoat", "70817/70818", "200 sf/gal", "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: SKY_BEST, properties: [P_70714, "70817/70818: Shore D 70; Taber 23 mg.", "Skydrol resistant, UV stable, light reflective."],
  },
  {
    id: "skygard-md", name: "SkyGard MD", maker: "Neogard", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system", thickness: "SkyGard series: 16–56 mils",
    layers: [L("1 Primer", "70714/70715", undefined, "8"), L("2 Base", "70714/70715", "80 sf/gal", "20"), L("3 Topcoat", "70817/70818", undefined, "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: SKY_BEST, properties: [P_70714, "70817/70818: Shore D 70; Taber 23 mg.", "Skydrol resistant, UV stable, light reflective."],
  },
  {
    id: "skygard-hd", name: "SkyGard HD", maker: "Neogard", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system", thickness: "SkyGard series: 16–56 mils",
    layers: [L("1 Primer", "70714/70715", undefined, "8"), L("2 Slurry base", "70714/70715 + 86468 flour", "40 sf/gal", "40"), L("3 Topcoat", "70817/70818", undefined, "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: SKY_BEST, properties: [P_70714, "70817/70818: Shore D 70; Taber 23 mg.", "Skydrol resistant, UV stable, light reflective."],
  },
  {
    id: "skygard-mro", name: "SkyGard MRO", maker: "Neogard", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system", thickness: "SkyGard series: 16–56 mils",
    layers: [
      L("1 Slurry base", "70714/70715 + 86468 flour; 86364 sand broadcast @ 100 lb/100 sf", "40 sf/gal", "40"),
      L("2 1st Seal", "70714/70715", "200 sf/gal", "8"),
      L("3 2nd Seal", "70817/70818 (285 sf/gal, 5 mils) or 70714/70715 (200 sf/gal, 8 mils)"),
    ],
    bestFor: SKY_BEST, properties: [P_70714, "70817/70818: Shore D 70; Taber 23 mg.", "Skydrol resistant, UV stable, light reflective."],
  },

  /* ---------------- 9. Epoxy Cove Base UV ---------------- */
  {
    id: "epoxy-cove-base-uv", name: "Epoxy Cove Base UV", maker: "Neogard", family: "Cove Base", page: "/epoxy-cove-base",
    chemistry: "Epoxy integral cove base", thickness: "1/8\" thick, 4\" high (height adjustable)",
    layers: [
      L("1 Primer", "70714/70715 + 86364 sand (light broadcast)", "250 sf/gal", "8"),
      L("2 Cove mix", "70714/70715 + P1934 fumed silica + 86364 sand or colored quartz", "40–50 LF", "1/8\""),
      L("3 Topcoat", "70704/70705 novolac, 70734/70735 epoxy, 70817/70818 CRU or 57051 polyaspartic"),
    ],
    bestFor: "Over drywall, green board, concrete or CMU in kitchens, food plants, pharmaceutical and healthcare spaces.",
    properties: ["Shore D by topcoat: novolac 84, epoxy 82, CRU 70, polyaspartic 70.", "CRU and polyaspartic topcoats pass JIS Z 2801-2010."],
  },

  /* ---------------- 10. Pedestrian traffic — /deck-coatings ---------------- */
  {
    id: "peda-gard", name: "Peda-Gard", maker: "Neogard", family: "Traffic Coatings", page: "/deck-coatings",
    chemistry: "Urethane pedestrian traffic membrane", thickness: "32 dry mils",
    layers: [L("1 Base", "70410 urethane", "66 sf/gal", "18"), L("2 Wear", "7430", "200 sf/gal", "6"), L("3 Broadcast", "16/30 quartz", "10 lb/100 sf"), L("4 Topcoat", "7430", "150 sf/gal", "8")],
    bestFor: "Balconies, walkways, plazas, stairs and mezzanines.",
  },
  {
    id: "traffictuff", name: "TrafficTuff", maker: "Neogard", family: "Traffic Coatings", page: "/deck-coatings",
    chemistry: "Non-waterproof textured epoxy/urethane overlay",
    layers: [
      L("1 Base", "70714/70715-09 + 7992-U aggregate", "100 sf/gal & 15 lb/100 sf", "16"),
      L("2 Topcoat", "FC7540/FC7964 urethane (exterior, UV)", "120 sf/gal", "12"),
      L("2 Alt. topcoat", "FC7510/FC7961", "133 sf/gal", "12"),
      L("2 Alt. topcoat", "70714/70715", "133 sf/gal", "12"),
    ],
    bestFor: "Textured pedestrian and light vehicular surfaces where waterproofing is not required. Vehicular traffic typically 24 hours after install (36–48 hours in cold weather); minimum application temperature 50°F and rising.",
  },
  ...[
    ["peda-gard-aliphatic", "Peda-Gard Aliphatic"],
    ["peda-gard-fc", "Peda-Gard FC", "Fast cure"],
    ["peda-gard-fc-recreational", "Peda-Gard FC Recreational Deck"],
    ["peda-gard-fr", "Peda-Gard FR", "For plywood decks"],
    ["peda-gard-m", "Peda-Gard M", "For mechanical rooms"],
    ["peda-gard-ts", "Peda-Gard TS"],
    ["decorative-peda-gard", "Decorative Peda-Gard", "Including Flake and FC Flake"],
    ["rts-pedestrian", "RTS Pedestrian", "PMMA/PUMA fast cure"],
    ["peda-gard-sc", "Peda-Gard SC", "Moisture containment"],
    ["epoxy-broadcast-overlay", "Epoxy Broadcast Overlay", "Non-waterproof"],
  ].map(([id, name, summary]): CatalogSystem => ({
    id, name, maker: "Neogard", family: "Traffic Coatings", page: "/deck-coatings",
    alsoOn: id === "epoxy-broadcast-overlay" ? ["/parking-garage-coatings"] : id === "peda-gard-sc" ? ["/roof-deck-waterproofing"] : undefined,
    group: id === "epoxy-broadcast-overlay" ? "Non-waterproof options" : "Pedestrian traffic membranes",
    chemistry: "Pedestrian traffic coating", summary,
  })),

  /* ---------------- 11. Vehicular — /parking-garage-coatings ---------------- */
  {
    id: "auto-gard", name: "Auto-Gard", maker: "Neogard", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Urethane vehicular traffic membrane", thickness: "40 dry mils standard / 52 heavy-duty, excluding primer and aggregate",
    layers: [
      L("1 Primer", "Specified primer", "300 sf/gal"),
      L("2 Base", "70410 urethane", "60 sf/gal", "20"),
      L("3 Wear", "7430", "150 sf/gal", "8"),
      L("4 Wear aggregate", "7992 quartz", "15 lb/100 sf"),
      L("5 Heavy-duty wear", "7430", "100 sf/gal", "12"),
      L("6 Heavy-duty aggregate", "7992 quartz", "10 lb/100 sf"),
      L("7 Topcoat", "7430", "100 sf/gal", "12"),
    ],
    bestFor: "Parking structures, ramps and drive aisles. Traffic at 72 hrs at 75°F/50% RH.",
  },
  {
    id: "auto-gard-fc", name: "Auto-Gard FC", maker: "Neogard", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Fast-cure vehicular traffic membrane", thickness: "40 dry mils standard / 52 heavy-duty",
    layers: [
      L("1 Base", "FC7500/FC7960", "80 sf/gal", "20"),
      L("2 Wear", "FC7510/FC7961", "200 sf/gal", "8"),
      L("3 Wear aggregate", "7992-U", "15 lb/100 sf"),
      L("4 Heavy-duty wear", "FC7510/FC7961", "133 sf/gal", "12"),
      L("5 Topcoat", "FC7510 interior or FC7540/FC7964 aliphatic UV", undefined, "12"),
    ],
    bestFor: "Parking structures that need traffic back in 24–36 hrs.",
  },
  {
    id: "auto-gard-fc-t", name: "Auto-Gard FC T", maker: "Neogard", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Integrally textured fast-cure vehicular membrane", thickness: "40 dry mils standard / 52 heavy-duty; no broadcast aggregate",
    layers: [L("1 Base", "FC7500", undefined, "20"), L("2 Textured topcoat", "FC7545/FC7964", undefined, "20"), L("3 Heavy-area texture", "Double-texture application", undefined, "12")],
    bestFor: "Decks where broadcast aggregate is not wanted. Traffic in 24–36 hrs.",
  },
  ...[
    ["auto-gard-aliphatic", "Auto-Gard Aliphatic"],
    ["auto-gard-aliphatic-t", "Auto-Gard Aliphatic T"],
    ["auto-gard-e", "Auto-Gard E", "46 dry mils standard / 50 heavy-duty"],
    ["auto-gard-f", "Auto-Gard F"],
    ["auto-gard-fc-aliphatic", "Auto-Gard FC Aliphatic"],
    ["auto-gard-t", "Auto-Gard T"],
    ["rts-vehicular", "RTS Vehicular System", "PMMA/PUMA fast cure; 135 dry mils garage/ramps, 175 extreme service; 1-hour return to service"],
    ["rts-helipad", "RTS Helipad System", "PMMA/PUMA fast cure"],
  ].map(([id, name, summary]): CatalogSystem => ({
    id, name, maker: "Neogard", family: id.startsWith("rts") ? "Polyaspartic & Fast Cure" : "Traffic Coatings", page: "/parking-garage-coatings",
    group: "Vehicular traffic membranes", chemistry: id.startsWith("rts") ? "PMMA/PUMA fast-cure membrane" : "Vehicular traffic coating", summary,
  })),

  /* ---------------- 12. Roof & below-grade — /roof-deck-waterproofing ---------------- */
  ...([
    ["Built-up & modified bitumen", ["Elasta-Gard BUR/MB Aliphatic", "Elasta-Gard Emulsion", "Elastacryl BUR/MB", "Silicone MB", "Silicone HS MB"]],
    ["Concrete roofs", ["Elasta-Gard C Aliphatic", "Silicone C", "Silicone HS C"]],
    ["Metal roofs", ["Elasta-Gard M Aliphatic", "Elastacryl M", "Metal Roof Coating", "Silicone M", "Silicone HS M"]],
    ["Single-ply", ["Elasta-Gard SP Aliphatic", "Elastacryl SP", "Silicone SP", "Silicone HS SP"]],
    ["Spray polyurethane foam", ["Permathane Aliphatic II", "Elastacryl FR", "Silicone FR", "Silicone HS SPF"]],
    ["Below tile & buried", ["RTS Under Tile System", "RTS Buried Waterproofing System"]],
    ["Water features", ["RTS Water Feature System"]],
  ] as [string, string[]][]).flatMap(([group, names]) =>
    names.map((name): CatalogSystem => ({
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name, maker: "Neogard", family: "Roof Coatings", page: "/roof-deck-waterproofing", group,
      chemistry: name.startsWith("Silicone") ? "Silicone roof coating" : name.startsWith("Elastacryl") ? "Acrylic roof coating" : name.startsWith("RTS") ? "PMMA/PUMA fast-cure membrane" : "Fluid-applied roof coating",
    })),
  ),
  {
    id: "perma-gard-iii", name: "Perma-Gard III", maker: "Neogard", family: "Roof Coatings", page: "/roof-deck-waterproofing",
    group: "Below tile & buried", chemistry: "Cold fluid-applied membrane", thickness: "60 dry mils",
    layers: [L("1 Membrane", "Perma-Gard III cold fluid-applied membrane", undefined, "60")],
    bestFor: "Below-tile and buried waterproofing; flood-tested per ASTM D5957.",
  },

  /* ---------------- 13. ESD — Sherwin-Williams ---------------- */
  {
    id: "resuflor-topcoat-sde", name: "Resuflor Topcoat SDE", maker: "Sherwin-Williams", family: "ESD", page: "/esd-static-control-flooring",
    chemistry: "Electrostatic-dissipative epoxy", thickness: "35 mils nominal",
    layers: [L("1 Insulating coat", "Electrically insulating epoxy coat"), L("2 ESD topcoat", "Resuflor Topcoat SDE — three-component, high-solids epoxy with conductive filler", undefined, "15–20")],
    bestFor: "Electronics manufacturing, data center electrical, UPS and MDF rooms.",
    properties: ["Floor resistance 1×10^5 to 1×10^9 ohms.", "Body voltage generation under 100 volts.", "ANSI/ESD S20.20-2014."],
  },
  {
    id: "resuflor-topcoat-sd", name: "Resuflor Topcoat SD", maker: "Sherwin-Williams", family: "ESD", page: "/esd-static-control-flooring",
    chemistry: "Stipple-finish epoxy topcoat (conductive or static-dissipative)",
    layers: [
      L("1 Primer", "Resuflor Aqua 3424 conductive primer (conductive floor) or Resuprime 3579 epoxy primer (static-dissipative floor)"),
      L("2 Topcoat", "Resuflor Topcoat SD, stipple finish"),
    ],
    bestFor: "Rooms where the ESD specification calls for a conductive or static-dissipative floor.",
  },
];

export const catalogForPage = (path: string) =>
  CATALOG.filter((s) => s.page === path || s.alsoOn?.includes(path));

export const catalogHref = (s: CatalogSystem) => `${s.page}#${s.id}`;
