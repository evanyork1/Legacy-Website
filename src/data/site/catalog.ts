/**
 * Legacy Systems library — every system we install, named as a Legacy
 * system and described in generic terms (resin type, coat, coverage,
 * thickness). Build-ups, coverage rates, thickness and test values come from
 * the manufacturer's published system data; the matching manufacturer
 * product is listed in our submittal package, not on the site. Never
 * estimate a missing value: leave the cell out. No manufacturer URLs.
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
  /** Anchor id on the system page, e.g. "legacy-epoxy-32". */
  id: string;
  name: string;
  family: Family;
  /** Primary system page. */
  page: string;
  /** Other pages that show the same block. */
  alsoOn?: string[];
  chemistry: string;
  thickness?: string;
  /** Published return-to-service / cure times. */
  returnToService?: string;
  /** Present → layer table + stack diagram. Absent → summary card. */
  layers?: CatalogLayer[];
  summary?: string;
  bestFor?: string;
  properties?: string[];
  /** Card grouping on pages that list many systems (e.g. roof type). */
  group?: string;
  /** Label shown above the block, e.g. "Low-odor option". */
  tag?: string;
};

const L = (coat: string, product: string, coverage?: string, dft?: string): CatalogLayer => ({ coat, product, coverage, dft });

export const CATALOG_NOTE =
  "Values from the manufacturer's published system data. The final build-up, thickness and cure schedule are confirmed in our submittal for your project.";

/* ------------------------------------------------------------------ */
/* Generic material descriptions (manufacturer products in submittals) */
/* ------------------------------------------------------------------ */
const EPOXY = "100% solids epoxy";
const EPOXY_SEAL = "100% solids epoxy seal coat";
const NOVOLAC = "Novolac epoxy";
const CRU = "Chemical- and UV-resistant urethane (CRU)";
const PA = "High-performance polyaspartic";
const PA_BASE = "Polyaspartic base coat";
const UC_SL = "Self-leveling urethane cement";
const SAND = "silica sand";
const SPHERES = "anti-slip spheres";
const FILLER = "epoxy filler";

/* Published properties, described without product numbers */
const P_EPOXY = "Body epoxy: compressive strength 25,300 psi (ASTM D695); tensile strength 3,700 psi (ASTM D638); Shore D 78 (ASTM D2240); adhesion 350 psi (ASTM D4541).";
const P_CRU = "Urethane topcoat: Shore D 70 (ASTM D2240); Taber abrasion 23 mg loss per 1,000 cycles, CS-17 wheel (ASTM D4060); passes the JIS Z 2801 anti-microbial test.";
const P_NOVOLAC = "Novolac epoxy: compressive strength 10,000 psi (ASTM D695); tensile strength 8,500 psi (ASTM D638); Shore D 84. Published 7-day spot tests show no effect from motor oil, diesel, gasoline, jet fuel or hydraulic fluid; not for concentrated oxidizing acids such as nitric or chromic.";
const P_SEAL = "Epoxy seal coat (low-yellowing): compressive strength 11,000 psi (ASTM D695); Shore D 82; adhesion 400 psi.";
const P_PA = "Polyaspartic: Taber abrasion 55 mg loss per 1,000 cycles, CS-17 wheel; passes the JIS Z 2801 anti-microbial test.";
const P_UC = [
  "Compressive strength 7,700 psi (ASTM C579).",
  "Modulus of elasticity 446,700 psi (ASTM C580).",
  "Shore D 84 (ASTM D2240).",
  "Does not support fungal growth (ASTM G21).",
];
const P_HANGAR = [P_EPOXY, "Urethane topcoat: Shore D 70; Taber abrasion 23 mg.", "Resistant to aviation hydraulic fluid (Skydrol); UV stable and light reflective."];
const MOISTURE_80 = "Not recommended above 80% RH (ASTM F2170) without a moisture-mitigating primer. Prep CSP 3.";

const CRU_OPT = (cov: string, dft: string) => L("Optional", CRU, cov, dft);
const TEXTURE = (product = `${EPOXY} or ${CRU} + ${SPHERES}`) => L("Optional texture", product, "400 sf/gal", "4");
const SAND_BASE = (label: string, resin = EPOXY) => L(label, `${resin} + ${SAND} broadcast`, "80 sf/gal & 50 lb/100 sf", "20");

const RTS_EPOXY = "Foot traffic 24 hrs, heavy loads 48 hrs at 75°F; full cure 7 days.";
const RTS_PA = "Foot traffic in about 11–14 hrs, heavy loads 24 hrs at 75°F.";
const RTS_UC = "Foot traffic in 6–10 hrs at 70°F; heavy traffic after at least 18 hrs at 75°F.";

const EPOXY_BEST = "Warehouses, production areas, forklift and foot traffic, offices, common areas. Surface prep CSP 3.";
const UC_BEST = "Commercial kitchens, pharmaceutical, food processing, freezers and areas with high thermal cycling. Prep CSP 3–4.";
const FLAKE_BEST = "Auto showrooms and service areas, retail, restaurants, locker rooms, sports venues, manufacturing break and common areas.";
const QUARTZ_BEST = "Restrooms, locker rooms, commercial kitchens, corridors, showrooms, stadium concourses, pedestrian walkways. Prep CSP 3.";
const HANGAR_BEST = "Hangars, aircraft maintenance and supply, tug areas, vehicle maintenance.";
const MMA_BEST = "Commercial kitchens, food processing and packaging, pharmaceutical production, hotels, vivariums, and facilities with only an overnight or weekend shutdown window (including data center support spaces).";

export const CATALOG: CatalogSystem[] = [
  /* ---------------- 1. Legacy Epoxy Series — /industrial-epoxy ---------------- */
  {
    id: "legacy-epoxy-16", name: "Legacy Epoxy 16", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, thin film", thickness: "16 dry mils (required coats)", returnToService: RTS_EPOXY,
    layers: [L("1 Primer", EPOXY, "260 sf/gal", "6"), L("2 Topcoat", EPOXY, "160 sf/gal", "10"), CRU_OPT("200 sf/gal", "8"), TEXTURE()],
    bestFor: `Light traffic and recoats. ${EPOXY_BEST}`, properties: [P_EPOXY, P_CRU],
  },
  {
    id: "legacy-epoxy-32", name: "Legacy Epoxy 32", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, high build", thickness: "32 dry mils (required coats)", returnToService: RTS_EPOXY,
    layers: [L("1 Primer", EPOXY, "200 sf/gal", "8"), L("2 Base", EPOXY, "130 sf/gal", "12"), L("3 Topcoat", EPOXY, "130 sf/gal", "12"), CRU_OPT("200 sf/gal", "8"), TEXTURE()],
    bestFor: `General commercial and light industrial. ${EPOXY_BEST}`, properties: [P_EPOXY, P_CRU],
  },
  {
    id: "legacy-epoxy-65", name: "Legacy Epoxy 65 Broadcast", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, sand broadcast", thickness: "65 dry mils (1/16\")", returnToService: RTS_EPOXY,
    layers: [SAND_BASE("1 Base"), L("2 1st Seal", EPOXY, "160 sf/gal", "10"), L("3 2nd Seal", EPOXY, "200 sf/gal", "8"), CRU_OPT("400 sf/gal", "4")],
    bestFor: `Textured finish for heavier traffic. ${EPOXY_BEST}`, properties: [P_EPOXY, P_CRU],
  },
  {
    id: "legacy-epoxy-125", name: "Legacy Epoxy 125 Broadcast", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy, double sand broadcast", thickness: "125 dry mils (1/8\")", returnToService: RTS_EPOXY,
    layers: [SAND_BASE("1 1st Base"), SAND_BASE("2 2nd Base"), L("3 1st Seal", EPOXY, "160 sf/gal", "10"), L("4 2nd Seal", EPOXY, "200 sf/gal", "8"), CRU_OPT("400 sf/gal", "4")],
    bestFor: `Heavy forklift and production traffic. ${EPOXY_BEST}`, properties: [P_EPOXY, P_CRU],
  },
  {
    id: "legacy-epoxy-mortar-250", name: "Legacy Epoxy Mortar 250", family: "Epoxy", page: "/industrial-epoxy",
    chemistry: "100% solids epoxy mortar, troweled", thickness: "Troweled mortar to the specified thickness, typically 1/4\"", returnToService: RTS_EPOXY,
    layers: [
      L("1 Primer", `${EPOXY} + epoxy mortar aggregate`, "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", `${EPOXY} + epoxy mortar aggregate`, "At specified thickness"),
      L("3 Grout", EPOXY, "200 sf/gal", "8"),
      L("4 1st Seal", EPOXY, "200 sf/gal", "8"),
      L("5 2nd Seal", EPOXY, "200 sf/gal", "8"),
      CRU_OPT("400 sf/gal", "4"),
    ],
    bestFor: `Heaviest impact service, carts with hard wheels and dropped parts. ${EPOXY_BEST}`, properties: [P_EPOXY, P_CRU],
  },
  {
    id: "legacy-low-odor-epoxy", name: "Legacy Low-Odor Epoxy", family: "Epoxy", page: "/industrial-epoxy",
    tag: "Low-odor option", chemistry: "Self-leveling epoxy with aliphatic urethane gloss topcoat",
    layers: [L("1 Primer", "Self-leveling epoxy"), L("2 Self-leveling build", "Self-leveling epoxy"), L("3 Gloss topcoat", "Aliphatic urethane, low odor")],
    bestFor: "Occupied buildings that need a low-odor, low-VOC option, subject to ventilation and work-area controls.",
  },

  /* ---------------- 2. Legacy Novolac — /novolac-epoxy-flooring ---------------- */
  {
    id: "legacy-novolac-32", name: "Legacy Novolac 32", family: "Novolac", page: "/novolac-epoxy-flooring",
    alsoOn: ["/secondary-containment-coatings", "/battery-room-flooring"],
    chemistry: "Novolac epoxy over epoxy primer", returnToService: "Foot traffic 24 hrs at 75°F; heavy loads 48 hrs; full cure 7 days.",
    layers: [L("1 Primer", EPOXY, "200 sf/gal", "8"), L("2 Base", NOVOLAC, "100 sf/gal", "16"), L("3 Topcoat", NOVOLAC, "200 sf/gal", "8"), TEXTURE(`${NOVOLAC} + ${SPHERES}`)],
    bestFor: "Chemical storage, battery charging rooms, secondary containment, bakeries, food processing, animal research.",
    properties: [P_NOVOLAC, "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas."],
  },
  {
    id: "legacy-novolac-125", name: "Legacy Novolac 125 Broadcast", family: "Novolac", page: "/novolac-epoxy-flooring",
    alsoOn: ["/secondary-containment-coatings", "/battery-room-flooring"],
    chemistry: "Novolac epoxy, double sand broadcast", thickness: "1/8\" nominal", returnToService: "Foot traffic 24 hrs at 75°F; heavy loads 48 hrs; full cure 7 days.",
    layers: [SAND_BASE("1 1st Base"), L("2 2nd Base", `${NOVOLAC} + ${SAND} broadcast`, undefined, "20"), L("3 1st Seal", NOVOLAC, "160 sf/gal", "10"), L("4 2nd Seal", NOVOLAC, "200 sf/gal", "8")],
    bestFor: "Chemical storage, battery charging rooms, secondary containment, bakeries, food processing, animal research.",
    properties: [P_NOVOLAC, "Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas."],
  },

  /* ---------------- 3. Legacy Quartz — /quartz-flooring ---------------- */
  {
    id: "legacy-quartz-broadcast", name: "Legacy Quartz Broadcast", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "100% solids epoxy with color quartz", thickness: "1/8\" minimum nominal (1/16\" per base coat and broadcast)", returnToService: RTS_EPOXY,
    layers: [
      L("1 1st Base", `${EPOXY} + color quartz`, "80 sf/gal & 50 lb/100 sf", "20"),
      L("2 2nd Base", `${EPOXY} + color quartz`, "80 sf/gal & 50 lb/100 sf", "20"),
      L("3 1st Seal", `${EPOXY_SEAL} (interior) or ${CRU} (exterior)`, "160 sf/gal", "10"),
      L("4 2nd Seal", `${EPOXY_SEAL} (interior) or ${CRU} (exterior)`, "200 sf/gal", "8"),
    ],
    bestFor: QUARTZ_BEST, properties: [P_SEAL, P_CRU],
  },
  {
    id: "legacy-quartz-hd", name: "Legacy Quartz HD", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "Epoxy mortar with color quartz broadcast",
    layers: [
      L("1 Primer", `${EPOXY} + epoxy mortar aggregate`, "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", `${EPOXY} + epoxy mortar aggregate`, "At specified thickness"),
      L("3 Broadcast", `${EPOXY} + color quartz`, "80 sf/gal & 50 lb/100 sf", "20"),
      L("4 1st Seal", `${EPOXY_SEAL} or ${PA.toLowerCase()}`, "200 sf/gal", "8"),
      L("5 2nd Seal", `${EPOXY_SEAL} or ${PA.toLowerCase()}`, "200 sf/gal", "8"),
    ],
    bestFor: QUARTZ_BEST, properties: [P_SEAL, P_PA],
  },
  {
    id: "legacy-quartz-trowel", name: "Legacy Quartz Trowel", family: "Flake & Quartz", page: "/quartz-flooring",
    chemistry: "Troweled epoxy and color quartz mortar", thickness: "1/8\" nominal",
    layers: [
      L("1 Primer", `${EPOXY} + ${SAND}`, "200 sf/gal & 20 lb/100 sf", "8"),
      L("2 Mortar", `${EPOXY} + color quartz`, "At specified thickness"),
      L("3 Grout", EPOXY_SEAL, "200 sf/gal", "8"),
      L("4 1st Seal", `${EPOXY_SEAL} or ${CRU}`, "200 sf/gal", "8"),
      L("5 2nd Seal", `${EPOXY_SEAL} or ${CRU}`, "200 sf/gal", "8"),
    ],
    bestFor: QUARTZ_BEST, properties: [P_SEAL, P_CRU],
  },
  {
    id: "legacy-quartz-fast-cure", name: "Legacy Quartz Fast-Cure", family: "Polyaspartic & Fast Cure", page: "/quartz-flooring",
    chemistry: "All polyaspartic with color quartz (fast return to service)", thickness: "1/8\" minimum nominal", returnToService: "Foot traffic 11 hrs, heavy loads 24 hrs at 75°F.",
    layers: [
      L("1 1st Base", `${PA} + color quartz`, "80 sf/gal & 50 lb/100 sf", "20"),
      L("2 2nd Base", `${PA} + color quartz`, "80 sf/gal & 50 lb/100 sf", "20"),
      L("3 1st Seal", PA, "160 sf/gal", "10"),
      L("4 2nd Seal", PA, "200 sf/gal", "8"),
    ],
    bestFor: QUARTZ_BEST, properties: [P_PA],
  },

  /* ---------------- 4. Legacy Flake — /flake-floors ---------------- */
  {
    id: "legacy-flake-epoxy", name: "Legacy Flake Epoxy", family: "Flake & Quartz", page: "/flake-floors",
    chemistry: "Epoxy with full-broadcast color flake", returnToService: RTS_EPOXY,
    layers: [
      L("1 Primer", EPOXY, "200 sf/gal", "8"),
      L("2 Base", EPOXY, "100 sf/gal"),
      L("3 Broadcast", "Color flake to full rejection", undefined, "16"),
      L("4 1st Seal", `${EPOXY_SEAL}, ${CRU} or aliphatic urethane`, "200 sf/gal", "8"),
      L("5 2nd Seal", "Same as 1st seal", "200 sf/gal", "8"),
      TEXTURE(`Seal resin + ${SPHERES}`),
    ],
    bestFor: FLAKE_BEST,
    properties: [P_SEAL, P_CRU, MOISTURE_80],
  },
  {
    id: "legacy-flake-fast-cure", name: "Legacy Flake Fast-Cure", family: "Polyaspartic & Fast Cure", page: "/flake-floors",
    chemistry: "Epoxy base with polyaspartic seal coats", returnToService: RTS_PA,
    layers: [
      L("1 Primer", EPOXY, "200 sf/gal", "8"),
      L("2 Base", EPOXY, "100 sf/gal"),
      L("3 Broadcast", "Color flake", undefined, "16"),
      L("4 1st Seal", PA, "200 sf/gal", "8"),
      L("5 2nd Seal", PA, "200 sf/gal", "8"),
      TEXTURE(`${PA} + ${SPHERES}`),
    ],
    bestFor: FLAKE_BEST,
    properties: [P_PA, MOISTURE_80],
  },
  {
    id: "legacy-flake-one-day", name: "Legacy Flake One-Day", family: "Polyaspartic & Fast Cure", page: "/flake-floors",
    chemistry: "All polyaspartic (fastest return to service)", returnToService: RTS_PA,
    layers: [
      L("1 Base", PA_BASE, "100 sf/gal"),
      L("2 Broadcast", "Color flake to full rejection", undefined, "16"),
      L("3 1st Seal", PA, "200 sf/gal", "8"),
      L("4 2nd Seal", PA, "200 sf/gal", "8"),
      L("Optional texture", `Seal resin + ${SPHERES}`, "400 sf/gal"),
    ],
    bestFor: FLAKE_BEST,
    properties: [P_PA, MOISTURE_80],
  },
  {
    id: "legacy-flake-polyurea", name: "Legacy Flake Polyurea", family: "Polyaspartic & Fast Cure", page: "/flake-floors",
    tag: "One-day system", chemistry: "Polyurea base coat with full flake broadcast and polyaspartic topcoat",
    summary:
      "Diamond-ground concrete, crack and joint repair, a polyurea base coat for deep bond, full broadcast of decorative flake, and a UV-stable polyaspartic topcoat with anti-slip aggregate where needed. Most areas are ground, coated and sealed in a day.",
    bestFor: "Wet areas, entries, locker rooms, swim schools and spaces with a one-day shutdown window.",
  },
  {
    id: "legacy-flake-ut", name: "Legacy Flake UT", family: "Flake & Quartz", page: "/flake-floors",
    tag: "Low-odor urethane topcoat", chemistry: "Epoxy flake with low-odor aliphatic urethane topcoat",
    summary:
      "High-solids clear epoxy primer, recoatable epoxy body coat broadcast to rejection with decorative vinyl flake, and a low-odor, low-VOC aliphatic urethane topcoat for chemical and stain resistance.",
    bestFor: "Interiors that need chemical resistance with low odor during install: schools, healthcare corridors, restaurant front-of-house.",
  },

  /* ---------------- 5. Legacy Urethane Cement — /urethane-cement-flooring ---------------- */
  {
    id: "legacy-urethane-cement-sl", name: "Legacy Urethane Cement SL", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Cementitious polyurethane (urethane cement), self-leveling", thickness: "3/16\" (187 mils)", returnToService: RTS_UC,
    layers: [L("1 Body", UC_SL, "32 sf per mixed unit", "187 (3/16\")"), L("Optional topcoat", "Urethane topcoat", undefined, "16")],
    bestFor: UC_BEST, properties: [...P_UC, "Moisture vapor tolerance up to 25 lb MVER (ASTM F1869 calcium chloride test)."],
  },
  {
    id: "legacy-urethane-cement-sl-broadcast", name: "Legacy Urethane Cement SL Broadcast", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement with sand broadcast (slip resistant)", thickness: "3/16\" body", returnToService: RTS_UC,
    layers: [
      L("1 Body", UC_SL, "32 sf per mixed unit", "187 (3/16\")"),
      L("2 Broadcast", SAND, "40 lb/100 sf"),
      L("3 Topcoat", "Urethane cement topcoat (100 sf/gal, 16 mils) or novolac epoxy (130 sf/gal, 12 mils)"),
    ],
    bestFor: UC_BEST, properties: [...P_UC],
  },
  {
    id: "legacy-urethane-cement-rt", name: "Legacy Urethane Cement RT", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement, rake & trowel", thickness: "3/16\"", returnToService: RTS_UC,
    layers: [
      L("1 Body", "Rake-and-trowel urethane cement", "36 sf per mixed unit", "187 (3/16\")"),
      L("2 Broadcast", SAND, "40 lb/100 sf"),
      L("3 Topcoat", "Urethane topcoat (16 mils) or novolac epoxy (12 mils)"),
    ],
    bestFor: UC_BEST, properties: [...P_UC],
  },
  {
    id: "legacy-urethane-cement-trowel", name: "Legacy Urethane Cement Trowel", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Urethane cement, trowel grade", thickness: "1/4\" (250 mils)", returnToService: "Foot traffic after 18 hrs at 75°F.",
    layers: [L("1 Body", "Trowel-grade urethane cement", "44 sf per mixed unit", "250 (1/4\")"), L("Optional topcoat", "Urethane topcoat", undefined, "16")],
    bestFor: `${UC_BEST} Heaviest impact and thermal shock.`,
    properties: ["Compressive strength 6,800 psi; Shore D 80.", "Service temperature −120°F to 210°F; resists hot-water and steam-cleaning thermal shock."],
  },
  {
    id: "legacy-urethane-cement-flake", name: "Legacy Urethane Cement Flake", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Decorative urethane cement with flake", thickness: "3/16\" body",
    layers: [L("1 Body", UC_SL, undefined, "187 (3/16\")"), L("2 Broadcast", "Decorative flake"), L("3 Topcoat", `${CRU} or polyaspartic`, "125 sf/gal", "12")],
    bestFor: UC_BEST,
  },
  {
    id: "legacy-urethane-cement-quartz", name: "Legacy Urethane Cement Quartz", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Decorative urethane cement with quartz", thickness: "3/16\" body",
    layers: [
      L("1 Body", UC_SL, undefined, "187 (3/16\")"),
      L("2 Broadcast", "Decorative quartz"),
      L("3 1st Seal", `Polyaspartic or ${CRU}`, "160 sf/gal", "10"),
      L("4 2nd Seal", `Polyaspartic or ${CRU}`, "200 sf/gal", "8"),
    ],
    bestFor: UC_BEST,
  },
  {
    id: "legacy-urethane-cement-cove", name: "Legacy Urethane Cement Cove", family: "Cove Base", page: "/urethane-cement-flooring",
    alsoOn: ["/epoxy-cove-base"],
    chemistry: "Urethane-cement integral cove base", thickness: "1/8\" thick, 4\" high",
    layers: [L("1 Primer", "Urethane cement primer", "100 sf/gal"), L("2 Cove mix", "Urethane cement cove mortar", "84 LF per mixed unit", "1/8\"")],
    bestFor: "Integral cove with Legacy Urethane Cement floors in kitchens and food and beverage plants.",
  },
  {
    id: "legacy-hybrid-urethane", name: "Legacy Hybrid Urethane", family: "Urethane Cement", page: "/urethane-cement-flooring",
    chemistry: "Hybrid: urethane-cement base with epoxy, polyaspartic or MMA grout and topcoat", thickness: "1/4\" nominal", returnToService: "With the high-traffic urethane finish: light foot traffic 24 hrs, medium duty 3 days, full service 7 days at 75°F.",
    layers: [
      L("1 Base", "Self-leveling urethane cement", "32 sf at 3/16\" or 45 sf at 1/8\" per mixed unit"),
      L("2 Broadcast", `Decorative flake (15–20 lb/100 sf), decorative quartz or ${SAND} (40 lb/100 sf)`),
      L("3 Grout & topcoat", "Epoxy, polyaspartic or MMA (fastest cure)"),
      L("Optional finish", "High-traffic urethane finish", "475–500 sf/gal"),
    ],
    bestFor: "Food and beverage, commercial kitchens, production areas, warehouses, cold storage, schools and healthcare.",
  },

  /* ---------------- 6. Legacy MMA — /mma-flooring (cards) ---------------- */
  ...[
    ["legacy-mma-roll-coat", "Legacy MMA Roll Coat", "Heavy-duty MMA roll coat.", "45–70 mils nominal"],
    ["legacy-mma-membrane", "Legacy MMA Membrane", "Self-leveling heavy-duty MMA with a flexible membrane layer.", "3/16\"–1/4\" nominal"],
    ["legacy-mma-flex", "Legacy MMA Flex", "Self-leveling MMA with a flexible body coat for substrates that move.", "3/16\" nominal"],
    ["legacy-mma-solid-color", "Legacy MMA Solid Color", "Self-leveling heavy-duty solid-color MMA.", "3/16\" nominal"],
    ["legacy-mma-flake", "Legacy MMA Flake", "Self-leveling MMA with decorative flake broadcast.", "3/16\" nominal"],
    ["legacy-mma-quartz", "Legacy MMA Quartz", "Self-leveling MMA with color quartz broadcast.", "3/16\" nominal"],
    ["legacy-mma-quartz-trowel", "Legacy MMA Quartz Trowel", "Troweled MMA and color quartz mortar.", "1/4\" minimum nominal"],
    ["legacy-mma-cove", "Legacy MMA Cove", "Solid-color, flake and quartz integral MMA cove bases.", "4\" cove"],
  ].map(([id, name, summary, thickness]): CatalogSystem => ({
    id, name, family: id === "legacy-mma-cove" ? "Cove Base" : "MMA", page: "/mma-flooring",
    alsoOn: id === "legacy-mma-cove" ? ["/epoxy-cove-base"] : undefined,
    chemistry: "Acrylic MMA (methyl methacrylate)", thickness: thickness ?? "MMA systems: 1/8\" to 3/8\"",
    summary: `${summary} MMA primer and adhesion promoter, body resin, and UV-stable topcoat; each coat cures in about an hour, so the full floor goes down in one overnight or weekend shutdown.`,
    returnToService: "Each coat recoats in about 1 hr at 75°F and cures down to −15°F; return to traffic is set in the submittal (the guide specification calls for at least 24 hrs).",
    bestFor: MMA_BEST, properties: ["Tensile strength 3,850 psi (ASTM D638); compressive strength 8,000 psi (ASTM C109).", "Meets South Coast AQMD VOC requirements."],
  })),

  /* ---------------- 7. Legacy Kitchen Slurry ---------------- */
  {
    id: "legacy-kitchen-slurry", name: "Legacy Kitchen Slurry 3/16\"", family: "Epoxy", page: "/restaurant-kitchen-flooring",
    alsoOn: ["/food-processing-flooring"],
    chemistry: "100% solids epoxy slurry broadcast with novolac seal", thickness: "3/16\"", returnToService: "Foot traffic 24 hrs, heavy loads 48 hrs at 75°F.",
    layers: [
      L("1 1st Slurry Base", `${EPOXY} + ${FILLER} + ${SAND}`, "40 sf/gal & 100 lb/100 sf", "40"),
      L("2 2nd Slurry Base", `${EPOXY} + ${FILLER} + ${SAND}`, "40 sf/gal & 100 lb/100 sf", "40"),
      L("3 1st Seal", NOVOLAC, "200 sf/gal", "8"),
      L("4 2nd Seal", NOVOLAC, "200 sf/gal", "8"),
    ],
    bestFor: "Restaurants, commercial kitchens, wineries and grocery stores without heavy thermal shock. Smooth, stipple or texture finish. Where there is hot washdown or thermal shock, specify Legacy Urethane Cement instead.",
    properties: [P_NOVOLAC],
  },

  /* ---------------- 8. Legacy Hangar — /aerospace-hangar-flooring ---------------- */
  {
    id: "legacy-hangar-ld", name: "Legacy Hangar LD", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system, light duty", thickness: "Hangar series: 16–56 mils", returnToService: "Foot traffic 24 hrs, heavy traffic 48 hrs, full chemical cure 7 days at 75°F.",
    layers: [L("1 Primer", EPOXY, "200 sf/gal", "8"), L("2 Topcoat", CRU, "200 sf/gal", "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: HANGAR_BEST, properties: P_HANGAR,
  },
  {
    id: "legacy-hangar-md", name: "Legacy Hangar MD", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system, medium duty", thickness: "Hangar series: 16–56 mils", returnToService: "Foot traffic 24 hrs, heavy traffic 48 hrs, full chemical cure 7 days at 75°F.",
    layers: [L("1 Primer", EPOXY, undefined, "8"), L("2 Base", EPOXY, "80 sf/gal", "20"), L("3 Topcoat", CRU, undefined, "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: HANGAR_BEST, properties: P_HANGAR,
  },
  {
    id: "legacy-hangar-hd", name: "Legacy Hangar HD", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane hangar system, heavy duty", thickness: "Hangar series: 16–56 mils", returnToService: "Foot traffic 24 hrs, heavy traffic 48 hrs, full chemical cure 7 days at 75°F.",
    layers: [L("1 Primer", EPOXY, undefined, "8"), L("2 Slurry base", `${EPOXY} + ${FILLER}`, "40 sf/gal", "40"), L("3 Topcoat", CRU, undefined, "8"), L("Optional texture", "Texture", undefined, "4")],
    bestFor: HANGAR_BEST, properties: P_HANGAR,
  },
  {
    id: "legacy-hangar-mro", name: "Legacy Hangar MRO", family: "Epoxy", page: "/aerospace-hangar-flooring",
    chemistry: "Epoxy / polyurethane system for maintenance, repair and overhaul bays", thickness: "Hangar series: 16–56 mils", returnToService: "Foot traffic 24 hrs, heavy traffic 48 hrs, full chemical cure 7 days at 75°F.",
    layers: [
      L("1 Slurry base", `${EPOXY} + ${FILLER}; ${SAND} broadcast @ 100 lb/100 sf`, "40 sf/gal", "40"),
      L("2 1st Seal", EPOXY, "200 sf/gal", "8"),
      L("3 2nd Seal", `${CRU} (285 sf/gal, 5 mils) or ${EPOXY.toLowerCase()} (200 sf/gal, 8 mils)`),
    ],
    bestFor: HANGAR_BEST, properties: P_HANGAR,
  },

  /* ---------------- 9. Legacy Epoxy Cove ---------------- */
  {
    id: "legacy-epoxy-cove", name: "Legacy Epoxy Cove", family: "Cove Base", page: "/epoxy-cove-base",
    chemistry: "Epoxy integral cove base", thickness: "1/8\" thick, 4\" high (height adjustable)",
    layers: [
      L("1 Primer", `${EPOXY} + ${SAND} (light broadcast)`, "250 sf/gal", "8"),
      L("2 Cove mix", `${EPOXY} + thickening filler + ${SAND} or colored quartz`, "40–50 LF", "1/8\""),
      L("3 Topcoat", `Novolac, epoxy, ${CRU} or polyaspartic`),
    ],
    bestFor: "Over drywall, green board, concrete or CMU in kitchens, food plants, pharmaceutical and healthcare spaces.",
    properties: ["Shore D by topcoat: novolac 84, epoxy 82, urethane 70, polyaspartic 70.", "Urethane and polyaspartic topcoats pass the JIS Z 2801 anti-microbial test."],
  },

  /* ---------------- 10. Pedestrian traffic — /deck-coatings ---------------- */
  {
    id: "legacy-pedestrian-deck", name: "Legacy Pedestrian Deck", family: "Traffic Coatings", page: "/deck-coatings",
    chemistry: "Waterproof urethane pedestrian traffic membrane", thickness: "32 dry mils, excluding primer and aggregate", returnToService: "Pedestrian traffic after 48 hrs at 75°F (72 hrs in cool weather).",
    layers: [L("1 Base", "Urethane base membrane", "66 sf/gal", "18"), L("2 Wear", "Urethane wear coat", "200 sf/gal", "6"), L("3 Broadcast", "16/30 quartz", "10 lb/100 sf"), L("4 Topcoat", "Urethane wear coat", "150 sf/gal", "8")],
    bestFor: "Balconies, walkways, plazas, stairs and mezzanines.",
    properties: ["Meets ASTM C957 for liquid-applied waterproofing with an integral wearing surface; ASTM E108 Class A.", "Dynamic coefficient of friction 0.78 dry / 0.54 wet."],
  },
  {
    id: "legacy-textured-overlay", name: "Legacy Textured Traffic Overlay", family: "Traffic Coatings", page: "/deck-coatings",
    chemistry: "Non-waterproof textured epoxy/urethane overlay",
    layers: [
      L("1 Base", `${EPOXY} + texture aggregate`, "100 sf/gal & 15 lb/100 sf", "16"),
      L("2 Topcoat", "Fast-cure aliphatic urethane (exterior, UV stable)", "120 sf/gal", "12"),
      L("2 Alt. topcoat", "Fast-cure urethane (interior)", "133 sf/gal", "12"),
      L("2 Alt. topcoat", EPOXY, "133 sf/gal", "12"),
    ],
    bestFor: "Textured pedestrian and light vehicular surfaces where waterproofing is not required. Vehicular traffic typically 24 hours after install (36–48 hours in cold weather); minimum application temperature 50°F and rising.",
  },
  ...[
    ["legacy-pedestrian-deck-aliphatic", "Legacy Pedestrian Deck Aliphatic", "Aliphatic urethane topcoat: UV stable, color holds outdoors."],
    ["legacy-pedestrian-deck-fc", "Legacy Pedestrian Deck FC", "Fast-cure urethane for quicker return to service."],
    ["legacy-pedestrian-deck-recreational", "Legacy Recreational Deck", "Fast-cure membrane for pool decks and amenity areas."],
    ["legacy-pedestrian-deck-plywood", "Legacy Pedestrian Deck for Plywood", "Membrane detailed for plywood substrates."],
    ["legacy-pedestrian-deck-mechanical", "Legacy Mechanical Room Membrane", "Waterproof membrane for mechanical rooms above occupied space."],
    ["legacy-decorative-deck", "Legacy Decorative Deck", "Pedestrian membrane with decorative flake, including a fast-cure flake version."],
    ["legacy-pmma-pedestrian", "Legacy PMMA Pedestrian", "PMMA/PUMA fast-cure membrane."],
    ["legacy-epoxy-broadcast-overlay", "Legacy Epoxy Broadcast Overlay", "Non-waterproof epoxy broadcast overlay."],
  ].map(([id, name, summary]): CatalogSystem => ({
    id, name, family: "Traffic Coatings", page: "/deck-coatings",
    alsoOn: id === "legacy-epoxy-broadcast-overlay" ? ["/parking-garage-coatings"] : undefined,
    group: id === "legacy-epoxy-broadcast-overlay" ? "Non-waterproof options" : "Pedestrian traffic membranes",
    chemistry: "Pedestrian traffic coating", summary,
  })),

  /* ---------------- Containment membranes — /secondary-containment-coatings ---------------- */
  {
    id: "legacy-containment-membrane-42", name: "Legacy Containment Membrane 42", family: "Traffic Coatings", page: "/secondary-containment-coatings",
    alsoOn: ["/deck-coatings", "/roof-deck-waterproofing"],
    chemistry: "Flexible, waterproof polyurethane containment membrane with chemical-resistant aliphatic urethane finish",
    thickness: "42 dry mils, excluding primer and aggregate",
    returnToService: "Traffic after at least 24 hrs at 75°F and 50% RH (48–72 hrs in cool weather).",
    layers: [
      L("1 Primer", "100% solids epoxy primer"),
      L("2 Base", "Flexible polyurethane membrane", "60 sf/gal", "20"),
      L("3 Wear", `Polyurethane wear coat + ${SAND}`, "200 sf/gal & 15 lb/100 sf", "6"),
      L("4 Topcoat", "Polyurethane topcoat", "150 sf/gal", "8"),
      L("5 Finish (2 coats)", "Chemical-resistant aliphatic urethane", "250 sf/gal per coat", "8 total"),
    ],
    bestFor: "Outdoor and indoor containment curbs, pits and pads that need a crack-bridging, waterproof, traffic-bearing lining with light chemical exposure, such as transformer pads and mechanical areas. Concrete substrates only. Each stored fluid is confirmed with the manufacturer.",
    properties: ["Polyurethane body: 400% elongation for crack bridging.", "Chemical-resistant aliphatic finish: tensile strength 4,000 psi; Taber abrasion 40 mg; UV stable."],
  },
  {
    id: "legacy-containment-rider", name: "Legacy Containment Rider", family: "Traffic Coatings", page: "/secondary-containment-coatings",
    alsoOn: ["/novolac-epoxy-flooring"],
    tag: "Membrane under a floor system",
    chemistry: "Flexible waterproofing membrane installed beneath an epoxy or novolac floor system to contain water, chemicals or other fluids",
    summary:
      "Epoxy primer, then a flexible urethane membrane, with cracks and joints pre-treated to 30 dry mils. A resinous floor system of at least 32 dry mils goes over it. The membrane bridges cracks the rigid floor can't, so a chemical-resistant novolac topside can be paired with crack-bridging containment below.",
    bestFor: "Chemical storage rooms, battery rooms, process containment and indoor transformer vaults where the floor must both resist chemicals and stay liquid-tight over moving cracks.",
  },

  /* ---------------- 11. Legacy High Traffic Urethane — /parking-garage-coatings ---------------- */
  {
    id: "legacy-high-traffic-urethane", name: "Legacy High Traffic Urethane", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Waterproof urethane vehicular traffic membrane", thickness: "40 dry mils standard / 52 heavy-duty, excluding primer and aggregate", returnToService: "Traffic after at least 72 hrs at 75°F and 50% RH.",
    layers: [
      L("1 Primer", "Primer selected for the substrate", "300 sf/gal"),
      L("2 Base", "Urethane base membrane", "60 sf/gal", "20"),
      L("3 Wear", "Urethane wear coat", "150 sf/gal", "8"),
      L("4 Wear aggregate", "Quartz aggregate", "15 lb/100 sf"),
      L("5 Heavy-duty wear", "Urethane wear coat", "100 sf/gal", "12"),
      L("6 Heavy-duty aggregate", "Quartz aggregate", "10 lb/100 sf"),
      L("7 Topcoat", "Urethane wear coat", "100 sf/gal", "12"),
    ],
    bestFor: "Parking structures, ramps and drive aisles.",
    properties: ["Meets ASTM C957; ASTM E108 Class A.", "Dynamic coefficient of friction 0.78 dry / 0.54 wet.", "Urethane wear coat: 400% elongation; Taber abrasion 25 mg."],
  },
  {
    id: "legacy-high-traffic-urethane-fc", name: "Legacy High Traffic Urethane FC", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Fast-cure waterproof vehicular traffic membrane", thickness: "40 dry mils standard / 52 heavy-duty", returnToService: "Traffic in 24–36 hrs at 75°F and 50% RH.",
    layers: [
      L("1 Base", "Fast-cure urethane base membrane", "80 sf/gal", "20"),
      L("2 Wear", "Fast-cure urethane wear coat", "200 sf/gal", "8"),
      L("3 Wear aggregate", "Quartz aggregate", "15 lb/100 sf"),
      L("4 Heavy-duty wear", "Fast-cure urethane wear coat", "133 sf/gal", "12"),
      L("5 Topcoat", "Fast-cure urethane (interior) or aliphatic urethane (UV exposed)", undefined, "12"),
    ],
    bestFor: "Parking structures that need traffic back in 24–36 hours.",
  },
  {
    id: "legacy-high-traffic-urethane-fc-t", name: "Legacy High Traffic Urethane FC Textured", family: "Traffic Coatings", page: "/parking-garage-coatings",
    chemistry: "Integrally textured fast-cure vehicular membrane", thickness: "40 dry mils standard / 52 heavy-duty; no broadcast aggregate",
    layers: [L("1 Base", "Fast-cure urethane base membrane", undefined, "20"), L("2 Textured topcoat", "Textured aliphatic urethane", undefined, "20"), L("3 Heavy-area texture", "Double-texture application", undefined, "12")],
    bestFor: "Decks where broadcast aggregate is not wanted. Traffic in 24–36 hours.",
  },
  ...[
    ["legacy-high-traffic-urethane-aliphatic", "Legacy High Traffic Urethane Aliphatic", "UV-stable aliphatic topcoat for top decks."],
    ["legacy-high-traffic-urethane-aliphatic-t", "Legacy High Traffic Urethane Aliphatic Textured", "UV-stable, integrally textured topcoat."],
    ["legacy-high-traffic-urethane-t", "Legacy High Traffic Urethane Textured", "Integrally textured wear surface."],
    ["legacy-high-traffic-urethane-fc-aliphatic", "Legacy High Traffic Urethane FC Aliphatic", "Fast cure with a UV-stable aliphatic topcoat."],
    ["legacy-pmma-vehicular", "Legacy PMMA Vehicular", "PMMA/PUMA fast cure; 135 dry mils for garages and ramps, 175 for extreme service; 1-hour return to service."],
    ["legacy-pmma-helipad", "Legacy PMMA Helipad", "PMMA/PUMA fast-cure helipad system."],
  ].map(([id, name, summary]): CatalogSystem => ({
    id, name, family: id.startsWith("legacy-pmma") ? "Polyaspartic & Fast Cure" : "Traffic Coatings", page: "/parking-garage-coatings",
    group: "Vehicular traffic membranes", chemistry: id.startsWith("legacy-pmma") ? "PMMA/PUMA fast-cure membrane" : "Vehicular traffic coating", summary,
  })),

  /* ---------------- 12. Roof & below-grade — /roof-deck-waterproofing ---------------- */
  ...([
    ["legacy-roof-bur-mb", "Built-up & Modified Bitumen Roofs", "Aliphatic urethane, emulsion, acrylic, silicone and high-solids silicone restoration coatings."],
    ["legacy-roof-concrete", "Concrete Roofs", "Aliphatic urethane, silicone and high-solids silicone coatings."],
    ["legacy-roof-metal", "Metal Roofs", "Aliphatic urethane, acrylic, metal roof coating, silicone and high-solids silicone systems."],
    ["legacy-roof-single-ply", "Single-Ply Roofs", "Aliphatic urethane, acrylic, silicone and high-solids silicone coatings."],
    ["legacy-roof-spf", "Spray Polyurethane Foam Roofs", "Aliphatic urethane, acrylic, silicone and high-solids silicone topcoats over SPF."],
    ["legacy-pmma-under-tile", "Legacy PMMA Under-Tile", "PMMA/PUMA fast-cure waterproofing below tile."],
    ["legacy-pmma-buried", "Legacy PMMA Buried Waterproofing", "PMMA/PUMA fast-cure membrane for buried and below-grade waterproofing."],
    ["legacy-pmma-water-feature", "Legacy PMMA Water Feature", "PMMA/PUMA fast-cure membrane for fountains and water features."],
  ] as [string, string, string][]).map(([id, name, summary]): CatalogSystem => ({
    id,
    name: id.startsWith("legacy-roof") ? `Legacy Roof Coatings: ${name}` : name,
    family: "Roof Coatings", page: "/roof-deck-waterproofing",
    group: id.startsWith("legacy-roof") ? "Roof restoration coatings" : id === "legacy-pmma-water-feature" ? "Water features" : "Below tile & buried",
    chemistry: id.startsWith("legacy-roof") ? "Fluid-applied roof coating" : "PMMA/PUMA fast-cure membrane",
    summary,
  })),
  {
    id: "legacy-cold-fluid-membrane", name: "Legacy Cold Fluid-Applied Membrane 60", family: "Roof Coatings", page: "/roof-deck-waterproofing",
    group: "Below tile & buried", chemistry: "Cold fluid-applied membrane", thickness: "60 dry mils",
    layers: [L("1 Membrane", "Cold fluid-applied waterproofing membrane", undefined, "60")],
    bestFor: "Below-tile and buried waterproofing; flood-tested per ASTM D5957.",
  },

  /* ---------------- 13. Legacy ESD ---------------- */
  {
    id: "legacy-esd-35", name: "Legacy ESD 35", family: "ESD", page: "/esd-static-control-flooring",
    chemistry: "Electrostatic-dissipative epoxy", thickness: "35 mils nominal",
    layers: [L("1 Insulating coat", "Electrically insulating epoxy coat"), L("2 ESD topcoat", "Three-component, high-solids epoxy with conductive filler", undefined, "15–20")],
    bestFor: "Electronics manufacturing, data center electrical, UPS and MDF rooms.",
    properties: ["Floor resistance 1×10^5 to 1×10^9 ohms.", "Body voltage generation under 100 volts.", "Supports ANSI/ESD S20.20 programs."],
  },
  {
    id: "legacy-esd-stipple", name: "Legacy ESD Stipple", family: "ESD", page: "/esd-static-control-flooring",
    chemistry: "Stipple-finish epoxy topcoat (conductive or static-dissipative)",
    layers: [
      L("1 Primer", "Conductive primer (conductive floor) or epoxy primer (static-dissipative floor)"),
      L("2 Topcoat", "Conductive or static-dissipative epoxy, stipple finish"),
    ],
    bestFor: "Rooms where the ESD specification calls for a conductive or static-dissipative floor.",
  },
];

export const catalogForPage = (path: string) =>
  CATALOG.filter((s) => s.page === path || s.alsoOn?.includes(path));

export const catalogHref = (s: CatalogSystem) => `${s.page}#${s.id}`;
