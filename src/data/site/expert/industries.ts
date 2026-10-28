/**
 * Expert notes for industry pages, keyed by page path. Every value here
 * agrees with the page data in src/data/site/industries.ts (or the special
 * page file) and the build-ups in src/data/site/catalog.ts. No manufacturer
 * names, no invented numbers; standards are cited only for what they cover.
 */
import type { ExpertNotes } from "./types";

export const EXPERT_INDUSTRIES: Record<string, ExpertNotes> = {
  "/aerospace-hangar-flooring": {
    heading: "Aircraft Hangar Flooring: What Experts Check Before Coating",
    plain: [
      "Pick the hangar system by duty. Legacy Hangar LD, MD, HD and MRO step up in build from light storage to heavy maintenance bays.",
      "Judge color and sheen under your own hangar lights. A white floor helps crews spot dropped hardware, but glare under high-bay fixtures is real.",
      "Hand us your fluid list: hydraulic fluid, jet fuel, lubricants and degreasers. Resistance has to be confirmed for the whole system, not just the topcoat name.",
      "Keep the hangar earning while we work. Phase positions so aircraft can move to open bays while one is down.",
    ],
    spec: [
      { label: "Fire protection", value: "Coordinate trench drains, floor grades and fire-protection features designed to NFPA 409; the coating must not change them." },
      { label: "Fluid resistance", value: "Phosphate-ester hydraulic fluid and jet fuel resistance confirmed for the complete assembly in the submittal." },
      { label: "Topcoat data", value: "Hangar series urethane topcoat: Shore D 70 (ASTM D2240) and Taber abrasion 23 mg loss (ASTM D4060)." },
      { label: "Surface prep", value: "Profile per ICRI 310.2R with SSPC-SP 13/NACE No. 6 prep; old coatings removed where bond is in doubt." },
      { label: "Moisture testing", value: "ASTM F2170 RH probes across the slab before the primer is chosen, judged against the manufacturer's published limit." },
      { label: "Mockup", value: "ASTM D7234 pull-off test on a mockup placed in a tug turning area, not a quiet corner." },
      { label: "Build range", value: "Hangar series 16–56 mils; final build per position confirmed in the submittal." },
    ],
    mistakes: [
      "Assuming any urethane topcoat resists phosphate-ester hydraulic fluid, then watching it soften at the service positions.",
      "Running an interior coating past the hangar door line into weather exposure it was never selected for.",
      "Releasing a bay to tugs on the walk-on date, before the system can take turning tire loads.",
    ],
  },

  "/agriculture-facility-flooring": {
    heading: "Agriculture Facility Flooring: Expert Notes on Washdown and Chemicals",
    plain: [
      "Map wet, dry and chemical zones before you price. Dry storage may only need sealing, while washdown rooms need urethane cement.",
      "Share your sanitation plan. The sanitizers, water temperature and cleaning tools tell us the right texture and topcoat.",
      "Fix drainage first. Standing water is a slope problem, and a coating follows the slab it sits on.",
      "Plan around the season. Work backward from the day the room must take hot water or chemicals again.",
    ],
    spec: [
      { label: "Sanitary design", value: "Smooth, durable, nonabsorbent, cleanable floors consistent with FDA Food Code principles and general USDA/FSMA sanitary design, confirmed by the owner." },
      { label: "Wet rooms", value: "Legacy Urethane Cement SL at 3/16 inch or Legacy Urethane Cement Trowel at 1/4 inch where washdown and thermal cycling are present." },
      { label: "Surface prep", value: "CSP 3–4 per ICRI 310.2R for urethane cement, with organic contamination removed before profiling." },
      { label: "Chemical storage", value: "Legacy Novolac 32 or 125 Broadcast where exposure data supports it, with curbs, trenches and sumps inside the lining boundary." },
      { label: "Cove", value: "Legacy Urethane Cement Cove, 1/8 inch thick by 4 inches high, installed with the urethane cement floor." },
      { label: "Adhesion check", value: "ASTM D7234 pull-off on mockups where old coatings or residue are present." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with cove and containment lining in the same section." },
    ],
    mistakes: [
      "Using one floor for dry storage and the washdown room, overspending in one and failing in the other.",
      "Choosing the most aggressive texture so residue packs in and sanitation crews cannot get it out.",
      "Lining only the slab of a chemical area and leaving curbs, sumps and pipe penetrations bare.",
    ],
  },

  "/auto-dealership-flooring": {
    heading: "Car Dealership Flooring: Expert Notes from Showroom to Service Bay",
    plain: [
      "Treat the showroom and service drive as two different floors. Presentation on one side of the door, hot tires and fluids on the other.",
      "Hot-tire pickup is usually a system or prep problem. Ask how the bid fixes the cause, not just which topcoat it uses.",
      "Compare bids by prep scope. Old coating removal and slab repairs are where dealership bids differ the most.",
      "Phase the shop so service keeps running, and reopen each bay only when it is ready for lifts and vehicles.",
    ],
    spec: [
      { label: "Hot-tire resistance", value: "Manufacturer data for hot-tire and fluid resistance of the full system; Legacy Epoxy Series with CRU topcoat or Legacy Hangar systems in service bays." },
      { label: "Polished showroom", value: "ASCC Concrete Polishing Council aggregate class and gloss level agreed on a mockup under showroom lighting; gloss read per ASTM D523." },
      { label: "Coated showroom", value: "Legacy Flake or Legacy Quartz with polyaspartic or CRU seal; Legacy Flake is not recommended above 80% RH (ASTM F2170) without a moisture-mitigating primer." },
      { label: "Surface prep", value: "Existing coating removal priced as its own line; profile per ICRI 310.2R and SSPC-SP 13/NACE No. 6." },
      { label: "Mockup", value: "ASTM D7234 pull-off at a service-drive stopping point where tires turn under load." },
      { label: "Shop marking", value: "Pedestrian and vehicle lanes per OSHA 1910.176, with ANSI Z535 safety colors." },
      { label: "CSI section", value: "03 35 43 Polished Concrete Finishing; 09 67 23 Resinous Flooring or 09 67 26 Quartz Flooring." },
    ],
    mistakes: [
      "Re-topcoating a service drive that failed from hot-tire pickup without fixing the prep underneath.",
      "Polishing a heavily patched showroom slab and expecting a uniform, new-concrete look.",
      "Opening service bays to lifts and vehicles on the walk-on date instead of the vehicle release point.",
    ],
  },

  "/electronics-manufacturing-flooring": {
    heading: "ESD Flooring for Electronics Manufacturing: What Engineers Check",
    plain: [
      "Start from your ESD control program. The floor is one part of it, alongside footwear, grounding and routine verification.",
      "Decide conductive or static-dissipative with your ESD coordinator before we price, since it changes the primer and the test plan.",
      "Separate assembly, cleanroom and wet-process areas. Each one needs its own system and its own acceptance test.",
      "Plan tool moves around the floor's release points so a new floor is not damaged before electrical testing.",
    ],
    spec: [
      { label: "ESD program", value: "ANSI/ESD S20.20 program owned by the facility; floor acceptance criteria written into the spec before materials are ordered." },
      { label: "Test methods", value: "ANSI/ESD STM7.1 floor resistance and STM97.1/STM97.2 floor-footwear resistance and body voltage, as the program requires." },
      { label: "System data", value: "Legacy ESD 35 publishes 1×10^5 to 1×10^9 ohms floor resistance and body voltage under 100 volts; Legacy ESD Stipple covers conductive or dissipative specs." },
      { label: "Grounding", value: "Ground connection locations shown on the drawings and verified at turnover." },
      { label: "Resilient ESD", value: "Where ESD tile is specified instead of resin, ASTM F150 resistance data for the resilient product." },
      { label: "Substrate", value: "ASTM F2170 RH testing and ICRI 310.2R profile per the ESD system's published requirements." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with ESD performance and test methods stated in the section." },
    ],
    mistakes: [
      "Buying an ESD floor with no ground connections or footwear program, so it never tests in range.",
      "Maintaining an ESD floor with an insulating floor finish that defeats its resistance.",
      "Carrying a thin floor topcoat into an acid sump instead of specifying an immersion-rated lining.",
    ],
  },

  "/food-processing-flooring": {
    heading: "Food Processing Flooring: Expert Checks for Washdown and Thermal Shock",
    plain: [
      "Tell us your hottest and coldest conditions. Hot washdown beside a cooler is why urethane cement is the default in wet rooms.",
      "Fix slope and drains in the same project. Ponding water is a substrate problem, not a coating problem.",
      "Bring sanitation and QA to the mockup so the texture is approved by the people who clean it.",
      "Release each room for its first real exposure, not for the moment the floor is walkable.",
    ],
    spec: [
      { label: "Sanitary criteria", value: "FDA Food Code floor criteria (smooth, durable, nonabsorbent, easily cleanable) and general USDA/FSMA sanitary design reviewed with QA." },
      { label: "System", value: "Legacy Urethane Cement SL (3/16 inch) or Trowel (1/4 inch) in wet and thermal-shock rooms; Legacy Kitchen Slurry only where there is no hot washdown or thermal shock." },
      { label: "Moisture", value: "Legacy Urethane Cement SL publishes moisture vapor tolerance up to 25 lb MVER by ASTM F1869; confirm slab conditions with ASTM F2170 RH data." },
      { label: "Physical data", value: "Urethane cement compressive strength 7,700 psi (ASTM C579) and Shore D 84 (ASTM D2240) per the system data." },
      { label: "Terminations", value: "Anchored terminations at drains, doors and slab edges, with profile per ICRI 310.2R CSP 3–4." },
      { label: "Cove", value: "Legacy Urethane Cement Cove, 1/8 inch thick by 4 inches high, installed with the floor." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with cove, slope correction and drain interfaces in the same section." },
    ],
    mistakes: [
      "Installing standard epoxy in a hot washdown room and watching it disbond around the drains.",
      "Feathering the system thin at drains and doors instead of anchoring the edge in a termination.",
      "Reopening for hot sanitation on the walk-on time instead of the full-service release.",
    ],
  },

  "/healthcare-flooring": {
    heading: "Healthcare Flooring: Expert Notes for Facilities and Design Teams",
    plain: [
      "Send us your disinfectant list early. The products and dilutions your environmental services team uses decide the topcoat.",
      "Match the floor to the room. Resin and cove for wet and service spaces, resilient for patient rooms, quartz for busy corridors.",
      "Plan the infection-control permit with us. Barriers, air handling and patient routes belong in the floor schedule from day one.",
      "Ask what happens at every doorway. Transitions between resin, vinyl and tile are where carts catch and cleaning fails.",
    ],
    spec: [
      { label: "Design basis", value: "FGI Guidelines and the owner's infection-control risk assessment set room requirements; submittals reference the room finish schedule." },
      { label: "Moisture testing", value: "ASTM F2170 RH on every slab; ASTM F710 prep for resilient areas; ACI 302.2R on new slabs receiving moisture-sensitive flooring." },
      { label: "Chemical check", value: "ASTM D1308 spot tests of the facility's actual disinfectants on a cured sample before approval." },
      { label: "Fire classification", value: "ASTM E648 critical radiant flux data for resilient flooring in corridors and exits where the code official requires it." },
      { label: "Cove", value: "Legacy Epoxy Cove, 1/8 inch thick and 4 inches high (adjustable), over drywall, green board, concrete or CMU." },
      { label: "CSI section", value: "09 67 26 Quartz Flooring, 09 67 23 Resinous Flooring, 09 65 19 Resilient Tile Flooring and 09 65 13 base on one finish schedule." },
    ],
    mistakes: [
      "Approving a topcoat that was never checked against the hospital's disinfectant, then blaming the floor when it dulls.",
      "Running rigid resin cove across a building movement joint and getting a crack along the base.",
      "Skipping moisture tests under sheet vinyl because the slab is getting covered anyway.",
    ],
  },

  "/hotel-flooring": {
    heading: "Hotel Flooring: Expert Checks for Front and Back of House",
    plain: [
      "Split the project in two: guest-facing finishes and back-of-house performance. They need different systems and different schedules.",
      "Book grinding for windows the general manager approves, and keep coating cure off every guest route.",
      "Carpet tile and LVT in corridors and guest rooms, polished concrete in the lobby and urethane cement in kitchens each have their own prep standard.",
      "Give housekeeping a cleaning card for each floor type so a lobby chemical never ends up on a resin floor it can damage.",
    ],
    spec: [
      { label: "Kitchen floors", value: "FDA Food Code criteria (smooth, durable, nonabsorbent, easily cleanable); the local health authority makes the final call." },
      { label: "Kitchen system", value: "Urethane cement at a typical 1/4 inch where hot water and grease are present; final build tied to temperature and chemical exposure." },
      { label: "Carpet tile", value: "CRI 104 installation for corridors and meeting rooms, with ASTM E648 radiant panel data where the code official requires it." },
      { label: "Moisture testing", value: "ASTM F2170 RH before carpet tile, LVT or resin, judged against the adhesive or system manufacturer's published limit." },
      { label: "Slip resistance", value: "ANSI A326.3 DCOF data for hard surfaces at entries and wet guest areas." },
      { label: "Lobby polish", value: "ASCC aggregate class and gloss level set by a mockup under the lobby's actual lighting." },
      { label: "CSI section", value: "03 35 43, 09 67 23, 09 68 13 Tile Carpeting and 09 65 19 Resilient Tile Flooring." },
    ],
    mistakes: [
      "Routing guests past a work zone because the coating was labeled low odor.",
      "Extending a decorative lobby coating behind the cook line, where hot water and grease break it down.",
      "Rolling laundry equipment back onto a floor before the system can carry the load.",
    ],
  },

  "/manufacturing-floor-coating": {
    heading: "Manufacturing Floor Coatings: Spec Notes from the Field",
    plain: [
      "Bring your chemical list to the first walk. Cutting fluids, cleaners and process chemicals decide the system far more than color does.",
      "Expect more than one system in one plant. Dry assembly, hot wash stations and plating lines usually each need a different build-up.",
      "Tell us which equipment truly cannot move, so the phasing plan is built around it instead of discovered on day one.",
      "Treat oil-soaked concrete as a repair item. Budget for testing and possible removal where oil has gone deep.",
    ],
    spec: [
      { label: "Exposure schedule", value: "Chemical name, concentration, temperature and contact time for each zone, checked against the manufacturer's resistance data." },
      { label: "Slab strength", value: "ASTM C1583 surface tensile test where oil contamination or old coatings raise doubt about the concrete." },
      { label: "Mockup", value: "ASTM D7234 pull-off on mockups in contaminated or repaired areas before production install." },
      { label: "Build by duty", value: "Legacy Epoxy 125 Broadcast for heavy production traffic, Legacy Epoxy Mortar 250 for hard wheels and dropped parts, Legacy Urethane Cement for hot wash." },
      { label: "Performance data", value: "Compare published Taber abrasion (ASTM D4060) and hardness (ASTM D2240) for the actual system, not a resin-family claim." },
      { label: "Walking surfaces", value: "Texture chosen so the plant can keep floors clean and dry per OSHA 1910.22 with its own scrubbers." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with containment linings and cove called out in the same section." },
    ],
    mistakes: [
      "Choosing one industrial epoxy for the whole plant and watching it fail first at the hot wash station.",
      "Coating over oil-saturated concrete and expecting the primer to lock the oil in.",
      "Letting forklifts back onto a phase because the next shift arrived, not because the system reached its release point.",
    ],
  },

  "/multifamily-flooring": {
    heading: "Multifamily Flooring: Expert Notes for Owners and Property Teams",
    plain: [
      "Know which slabs sit over living space. Elevated breezeways and garages over units need a waterproof traffic membrane, not a decorative floor.",
      "Find the leak before you coat. Drains, joints and penetrations are where most water gets in.",
      "Corridor and unit-turn carpet tile and LVT/LVP are separate scopes with their own moisture and flatness checks.",
      "Write down your portfolio standard: system, color, texture and maintenance, so every building gets the same finish.",
    ],
    spec: [
      { label: "Traffic coatings", value: "ASTM C957 membranes with integral wearing surface: Legacy Pedestrian Deck at 32 dry mils, Legacy High Traffic Urethane at 40 or 52 dry mils excluding primer and aggregate." },
      { label: "Flood test", value: "ASTM D5957 flood testing on elevated walkways over occupied space where the spec calls for it." },
      { label: "Prep and adhesion", value: "ICRI 310.2R profile and ASTM D7234 pull-off on the mockup before the full deck." },
      { label: "Joints", value: "Moving joints and cracks detailed with compatible sealants under 07 92 00, not bridged with rigid coating." },
      { label: "Interiors", value: "ASTM F710 prep with ASTM F1700 or ASTM F3261 product data for LVT/LVP; CRI 104 for corridor carpet tile." },
      { label: "CSI section", value: "07 18 13 Pedestrian Traffic Coatings, 07 18 16 Vehicular Traffic Coatings, 09 65 19 and 09 68 13 for interiors." },
    ],
    mistakes: [
      "Putting flake epoxy on a breezeway over apartments and calling it waterproofing.",
      "Coating garage ramps and turns at the same build as parking stalls, so they wear through first.",
      "Laying LVP on a slab with no RH test and fighting cupped planks and adhesive failure later.",
    ],
  },

  "/office-flooring": {
    heading: "Office Flooring: Spec Notes for Tenant Improvements",
    plain: [
      "Decide early which areas stay exposed concrete and which get carpet tile or LVT. That choice changes demo, patching and moisture testing.",
      "See a polished concrete mockup on your actual slab before you sign. Old adhesive and patches can show through.",
      "Give the GC firm dates for flooring handoff, furniture and IT. Cure and acclimation need room in that schedule.",
      "Ask for a care sheet for each finish so your janitorial vendor uses the right pads and cleaners.",
    ],
    spec: [
      { label: "Moisture testing", value: "ASTM F2170 RH, with ASTM F1869 where specified, read against adhesive and system limits; ACI 302.2R guides new slabs receiving moisture-sensitive flooring." },
      { label: "Resilient prep", value: "ASTM F710 flatness, patching and cleanliness before carpet tile and LVT." },
      { label: "Carpet tile", value: "CRI 104 installation, with ASTM E648 radiant panel data in corridors and exits where code requires it." },
      { label: "LVT", value: "ASTM F1700 or ASTM F3261 product compliance, with transitions and base under 09 65 13." },
      { label: "Polished concrete", value: "ASCC aggregate class and gloss level, ASTM D523 gloss readings and ASTM D2047 friction data where specified." },
      { label: "CSI section", value: "03 35 43, 09 65 19, 09 68 13 and 09 67 23 for decorative resin areas." },
    ],
    mistakes: [
      "Gluing carpet tile over a slab that was never RH tested, then watching the adhesive fail under new furniture.",
      "Leaving old mastic and patch outlines for the polisher to grind out with no mockup agreed.",
      "Letting movers roll heavy furniture across LVT before the adhesive has cured.",
    ],
  },

  "/parking-garage-coatings": {
    heading: "Parking Garage Coatings: Spec Notes and Common Mistakes",
    plain: [
      "A traffic coating is waterproofing. If water reaches the level below, joints, cracks and drains must be part of the scope.",
      "Ramps and turns get the heavy-duty build. Ask the bid to show those zones on a plan.",
      "Plan reopening by temperature and cure, not just the day the last coat goes down.",
      "Restripe from an approved layout after cure, not by tracing the old worn lines.",
    ],
    spec: [
      { label: "Standard", value: "ASTM C957 for liquid-applied waterproofing membranes with an integral wearing surface." },
      { label: "Build", value: "Legacy High Traffic Urethane 40 dry mils standard, 52 heavy-duty, excluding primer and aggregate; Legacy Pedestrian Deck 32 dry mils for stairs and plazas." },
      { label: "Return to traffic", value: "Standard system at 72 hours at 75°F and 50% RH; FC variants 24–36 hours under the manufacturer's stated conditions." },
      { label: "Concrete repair", value: "Spalls repaired per ICRI 320 guidance before profiling to ICRI 310.2R; structural distress goes to the engineer." },
      { label: "Joints", value: "Expansion and moving joints detailed with compatible sealants under 07 92 00, not bridged by the membrane." },
      { label: "QC records", value: "Heavy-duty zones photographed and film build recorded before the topcoat hides the change." },
      { label: "CSI section", value: "07 18 16 Vehicular Traffic Coatings; 07 18 13 Pedestrian Traffic Coatings." },
    ],
    mistakes: [
      "Coating over cracks and joints that are still leaking and calling the deck waterproofed.",
      "Running the pedestrian system into a drive lane because it was already on the stairs.",
      "Opening to cars on a cold week by the calendar instead of the actual cure conditions.",
    ],
  },

  "/pharmaceutical-flooring": {
    heading: "Pharmaceutical Flooring: Spec Notes for Quality and Facilities Teams",
    plain: [
      "Map finishes room by room. Polished concrete fits approved dry corridors and warehousing; production rooms usually need seamless resin.",
      "Send the full cleaning schedule: products, dilutions, dwell times and what happens in an accidental spill.",
      "Ask for the paperwork with the floor. Prep photos, ambient logs and adhesion results belong in your closeout file.",
      "Overnight phasing can work, as it did on our 21,000 SF Dallas plant, but each site needs its own access plan.",
    ],
    spec: [
      { label: "Seamless system", value: "Legacy Quartz double-broadcast with CRU topcoat: Shore D 70 (ASTM D2240), Taber abrasion 23 mg loss (ASTM D4060), JIS Z 2801 pass." },
      { label: "Chemical review", value: "IPA, quats, sporicides, CIP detergents and passivation acids confirmed by the manufacturer at actual concentration, temperature and dwell time." },
      { label: "Polished areas", value: "800-grit finish in approved dry spaces; ASCC aggregate class and ASTM D523 gloss agreed on a mockup." },
      { label: "Moisture testing", value: "ASTM F2170 RH before low-permeance resin; ASTM F710 where resilient flooring is specified." },
      { label: "Closeout", value: "Prep photos, temperature, RH and dew-point logs, and ASTM D7234 mockup adhesion results." },
      { label: "CSI section", value: "09 67 26 Quartz Flooring; 03 35 43 Polished Concrete Finishing." },
    ],
    mistakes: [
      "Treating every quartz floor and topcoat as interchangeable when only the tested topcoat carries the JIS Z 2801 pass.",
      "Extending an economical polished corridor finish into a room that requires seamless resin.",
      "Hiding active cracks under rigid repair material instead of keeping the movement accommodated.",
    ],
  },

  "/pharmacy-cleanroom-flooring": {
    heading: "Pharmacy Cleanroom Flooring: What Experts Check for USP <797> and <800> Suites",
    plain: [
      "The floor supports your compounding program; it does not certify it. Your designer and compliance team own the USP decisions.",
      "Give us the exact cleaning products and rotation, including sporicide days, before the topcoat is chosen.",
      "Treat buffer rooms, ante rooms and HD labs as separate zones with their own details.",
      "Leave time between floor cure and room certification for construction cleaning and testing.",
    ],
    spec: [
      { label: "USP context", value: "USP <797> and <800> call for cleanable, non-shedding surfaces; room design and certification stay with the pharmacy's qualified team." },
      { label: "System", value: "Seamless epoxy with a high-traffic urethane topcoat, confirmed against the pharmacy's actual quat and sporicide products." },
      { label: "Chemical check", value: "ASTM D1308 spot tests of the actual cleaning agents on a cured sample before approval." },
      { label: "Cove", value: "Integral Legacy Epoxy Cove, 1/8 inch thick and 4 inches high (adjustable), detailed at door frames and penetrations." },
      { label: "Moisture testing", value: "ASTM F2170 RH before a low-permeance seamless floor, judged against the manufacturer's published limit." },
      { label: "ESD option", value: "Where automation requires it, ANSI/ESD STM7.1 resistance testing within the owner's ANSI/ESD S20.20 program." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with cove and ESD option in the same section." },
    ],
    mistakes: [
      "Leaving door-frame corners and penetrations unsealed at the cove, where residue and particles collect.",
      "Bridging a moving joint with rigid resin and getting a crack through the buffer room.",
      "Calling a seamless epoxy static dissipative near automation without ever testing it.",
    ],
  },

  "/restaurant-kitchen-flooring": {
    heading: "Commercial Kitchen Flooring: What the Experts Check",
    plain: [
      "Hot oil and hot washdown call for urethane cement. Thinner epoxy slurries suit kitchens without heavy thermal shock.",
      "If you failed an inspection at the wall base, fix the cove and the wall behind it, not just the paint.",
      "Plan closures around service. Sealed concrete in dining can go overnight; a kitchen rebuild usually needs a longer window.",
      "For multi-unit brands, lock a scope template and photo closeout so every location is comparable.",
    ],
    spec: [
      { label: "Sanitation", value: "FDA Food Code floor criteria (smooth, durable, nonabsorbent, easily cleanable); the local health inspector decides acceptance." },
      { label: "Cook line system", value: "Urethane cement at 1/4 inch with a compatible novolac topcoat; Legacy Kitchen Slurry 3/16 inch only where there is no heavy thermal shock." },
      { label: "Cove", value: "Integrated 4–6 inch cove, continuous with the floor, over sound wall backing." },
      { label: "Grease removal", value: "Oil-soaked concrete degreased or removed before profiling per ICRI 310.2R; verified with ASTM D7234 pull-off on a mockup." },
      { label: "Moisture testing", value: "ASTM F2170 RH, plus ASTM F1869 MVER where specified." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring, with cove and drain terminations in the same section." },
    ],
    mistakes: [
      "Coating over grease-soaked concrete so the new floor lifts around the fryers.",
      "Patching a cracked cove with caulk and paint, then failing the same item at reinspection.",
      "Using kitchen slurry epoxy under hot washdown where urethane cement was needed.",
    ],
  },

  "/retail-flooring": {
    heading: "Retail Store Flooring: What Experts Check Before a Rollout",
    plain: [
      "Write the brand standard as a spec, not a photo. Color, sheen, texture and allowed slab variation should be on paper.",
      "Every store gets a site check. Old tile, mastic and moisture differ from slab to slab, even in the same chain.",
      "Ask what fits in one overnight window and what does not. Removal and repairs often take more nights than the finish.",
      "Plan the stockroom on its own schedule so freight never crosses uncured floor to reopen the sales floor.",
    ],
    spec: [
      { label: "Brand mockup", value: "Approved mockup per store type recording system, color, ASCC aggregate class or resin texture, and gloss per ASTM D523." },
      { label: "Moisture testing", value: "ASTM F2170 RH at each location before resin, LVT or carpet tile." },
      { label: "Slip resistance", value: "ANSI A326.3 DCOF or ASTM D2047 data for sales floors where the owner's risk team requires it." },
      { label: "Cleaner check", value: "ASTM D1308 spot tests with the store's actual cleaning chemicals on the approved finish." },
      { label: "Joints", value: "Cart-route joints filled with semi-rigid filler; moving joints kept as joints under 07 92 00." },
      { label: "Soft zones", value: "LVT to ASTM F1700 or ASTM F3261 and carpet tile per CRI 104 where the design calls for resilient areas." },
      { label: "CSI section", value: "03 35 43, 09 67 23, 09 67 26, 09 65 19 and 09 68 13 as the brand standard requires." },
    ],
    mistakes: [
      "Promising every store the same polished look when each slab has a different history.",
      "Booking one overnight for a store that needs mastic removal and crack repair first.",
      "Letting the opening crew use an aggressive pad that dulls a brand-new finish right away.",
    ],
  },

  "/school-flooring": {
    heading: "School Flooring: What Districts and Architects Should Check",
    plain: [
      "Build the summer schedule backward from the day teachers move back in. Testing, repairs and cure need their own lines on that calendar.",
      "Bring your head custodian into sample review. The machines, pads and cleaners the district already owns should shape the finish.",
      "Use the right floor for each room: polished concrete in commons, chemical-resistant epoxy in science, carpet tile or LVT where noise matters.",
      "Keep a written finish standard so the next campus phase matches the first.",
    ],
    spec: [
      { label: "Moisture testing", value: "ASTM F2170 RH on every slab receiving carpet tile, LVT or resin; ASTM F710 prep for resilient work." },
      { label: "Carpet tile and LVT", value: "CRI 104 for carpet tile; ASTM F1700 or ASTM F3261 product compliance for vinyl and rigid core." },
      { label: "Fire classification", value: "ASTM E648 critical radiant flux data for carpet and resilient in corridors and exits where code requires it." },
      { label: "Polished concrete", value: "ASCC aggregate class and gloss level agreed on a mockup, with gloss read per ASTM D523." },
      { label: "Science rooms", value: "ASTM D1308 spot tests using the district's actual reagents and cleaners on the proposed finish." },
      { label: "CSI section", value: "03 35 43, 09 67 23, 09 68 13 and 09 65 19 on one coordinated finish schedule." },
    ],
    mistakes: [
      "Squeezing cure into the last week of summer, then letting furniture roll onto a floor that is not ready.",
      "Waxing polished concrete or a resin floor with the old VCT routine.",
      "Promising a uniform polished corridor where old tile adhesive and patches will show through.",
    ],
  },

  "/warehouse-flooring": {
    heading: "Warehouse Floor Coating: What the Experts Check",
    plain: [
      "Most dry storage does not need a coating. A densified and sealed slab, with coatings saved for docks, charging and spill zones, is usually the best long-term value.",
      "Fix the joints before you pick a finish. Broken joint edges are what forklift wheels hit first.",
      "Tell us where racks will be anchored. Drilling anchors through a new coating chips it, so sequence racking, striping and coating in one plan.",
      "Ask for a zone plan that shows which aisles close when and when each zone can take forklifts again.",
    ],
    spec: [
      { label: "Moisture testing", value: "ASTM F2170 RH probes, with ASTM F1869 where specified, before any resinous system; results judged against the manufacturer's published limit." },
      { label: "Surface prep", value: "ICRI 310.2R profile matched to the system (CSP 3 for the Legacy Epoxy series) by shot blast or grinding per SSPC-SP 13/NACE No. 6." },
      { label: "Joint fill", value: "Semi-rigid polyurea, full depth and shaved flush, placed 60–90+ days after the pour in line with ACI 302.1R guidance." },
      { label: "Flatness", value: "Very narrow aisle racking may carry FF/FL numbers measured to ASTM E1155; a coating follows the slab and will not correct flatness." },
      { label: "Aisle marking", value: "Aisles and passageways marked per OSHA 1910.176 using ANSI Z535 safety colors." },
      { label: "System by duty", value: "Legacy Epoxy 32 for light industrial, Legacy Epoxy 65 or 125 Broadcast for heavier forklift traffic, Legacy Epoxy Mortar 250 for hard-wheel impact." },
      { label: "CSI section", value: "03 35 43 for polished or densified areas, 09 67 23 for resinous zones, 07 92 00 for joint fillers." },
    ],
    mistakes: [
      "Filling control joints too early, then chasing filler separation as the slab keeps shrinking.",
      "Epoxying an entire distribution center when only the docks, charging area and wash zone needed a coating.",
      "Striping over a coating outside its recoat window, so the lines peel at the first forklift turn.",
    ],
  },

  "/data-center-flooring": {
    heading: "Data Center Flooring: What the Experts Check Room by Room",
    plain: [
      "Most slab-on-grade white space only needs densify, seal and polyurea joint fill. Save ESD epoxy for the rooms your spec names.",
      "Get electrical, UPS and battery room requirements from the engineer of record early. Those rooms carry code and static-control duties the halls usually do not.",
      "Liquid cooling is changing the mechanical rooms. Plan seamless floors, cove and curbs wherever glycol and water lines run.",
      "Phase work around commissioning. Floors in energized rooms need night or weekend windows and an approved work plan.",
    ],
    spec: [
      { label: "Flatness", value: "Data hall FF/FL per ASTM E1155 is set by the slab design; sealing will not fix it, so verify before racks land." },
      { label: "Joints", value: "ACI 302.1R joint layout and timing, with semi-rigid polyurea fill flush to the slab under 07 92 00." },
      { label: "ESD rooms", value: "Legacy ESD 35 publishes 1×10^5 to 1×10^9 ohms and body voltage under 100 volts; tested per ANSI/ESD STM7.1 and STM97.2 within an ANSI/ESD S20.20 program." },
      { label: "Battery rooms", value: "Legacy Novolac 32 or 125 Broadcast with integral cove and coated curbs so the floor holds an electrolyte spill." },
      { label: "Moisture testing", value: "ASTM F2170 RH and ASTM F1869 MVER before ESD epoxy, novolac or urethane cement on slab-on-grade rooms." },
      { label: "Submittal includes", value: "Product data, moisture results, ESD test reports and photo documentation from prep through closeout." },
      { label: "CSI section", value: "03 35 43, 09 67 23, 07 18 13 / 07 18 16 traffic coatings and 07 92 00 joint fillers." },
    ],
    mistakes: [
      "Specifying ESD epoxy across a whole data hall when the operator's standard only calls for sealed concrete.",
      "Leaving white-space control joints open, so rack carts chip the edges and shed concrete dust.",
      "Coating a battery room without cove and curbs, so a spill runs under the wall instead of staying on the floor.",
    ],
  },
};
