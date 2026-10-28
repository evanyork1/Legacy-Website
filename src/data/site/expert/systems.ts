import type { ExpertNotes } from "./types";

/**
 * Expert notes for system pages. Values and standards must agree with the
 * page data in src/data/site/systems.ts and the build-ups in catalog.ts.
 * No manufacturer names, no invented numbers.
 */
export const EXPERT_SYSTEMS: Record<string, ExpertNotes> = {
  "/battery-room-flooring": {
    heading: "Battery Room Flooring: What the Experts Check",
    plain: [
      "Tell us what kind of batteries the room holds. Lead-acid electrolyte and lithium-based systems need different floors, and the right answer starts there.",
      "The floor, cove and curb should be one continuous lining. A spill finds the gap at the wall or the doorway first.",
      "If the room already had a spill, the stained concrete may need to come out before anything is coated, or the new floor will not stay bonded.",
      "Ask your safety team about neutralizing agents and cleaners too. The floor has to survive the cleanup, not just the spill.",
    ],
    spec: [
      { label: "Typical system", value: "Legacy Novolac 32 or Legacy Novolac 125 Broadcast, carried through integral cove and curb faces." },
      { label: "Chemical check", value: "Electrolyte type, concentration, temperature and contact time reviewed against the manufacturer's novolac resistance chart; ASTM D1308 spot tests where the owner wants confirmation." },
      { label: "Surface prep", value: "Contaminated concrete removed; mechanical prep per SSPC-SP 13/NACE No. 6 to the profile in the product data (ICRI 310.2R)." },
      { label: "Moisture testing", value: "ASTM F2170 in-situ RH and ASTM F1869 MVER before the primer is selected." },
      { label: "ESD option", value: "Where specified, electrical acceptance per ANSI/ESD STM7.1 is coordinated with the chemical-resistance requirement in one approved assembly." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Specifying a standard epoxy labeled \"industrial\" in a lead-acid room without checking it against the electrolyte.",
      "Coating the field floor but leaving curbs, penetrations and the floor-to-wall corner as bare concrete.",
      "Putting batteries back in the room before the lining reaches its chemical-service cure.",
    ],
  },

  "/commercial-carpet-tile": {
    heading: "Commercial Carpet Tile Installation: Expert Notes Before You Buy",
    plain: [
      "Most carpet tile failures are adhesive failures, and most adhesive failures start with a damp or high-pH slab. Testing before install protects your warranty.",
      "Keep the attic stock somewhere you can find it. Tiles from the same dye lot are what let you swap a stained tile without a visible patch.",
      "Choose the installation method (monolithic, quarter-turn, ashlar, brick or herringbone) with the pattern in mind. Some patterns hide wear and replacement tiles far better than others.",
      "If you are going over raised access floor, plan the tile layout with the panel grid so cabling access stays easy.",
    ],
    spec: [
      { label: "Installation standard", value: "CRI 104 and the carpet manufacturer's installation guide." },
      { label: "Substrate prep", value: "Clean, sound, flat slab; old adhesive removed; patching and leveling to the manufacturer's flatness requirement, with ASTM F710 as the common prep reference." },
      { label: "Moisture and pH", value: "ASTM F2170 in-situ RH and ASTM F1869 MVER plus surface pH, compared with the adhesive's published limits." },
      { label: "Fire rating", value: "ASTM E648 critical radiant flux, Class I or II as required for corridors and exits." },
      { label: "CSI section", value: "09 68 13 Tile Carpeting; rubber base under 09 65 13 Resilient Base and Accessories." },
      { label: "Submittal includes", value: "Product data, adhesive, installation method, moisture test results and attic stock quantity." },
      { label: "Closeout", value: "Attic stock delivered, care and maintenance guide, and photo log." },
    ],
    mistakes: [
      "Laying carpet tile over old cutback or incompatible adhesive that bleeds into the new releasable adhesive.",
      "Skipping moisture and pH testing, then finding tiles curling and sliding a few months later.",
      "Mixing dye lots across a single room so the replacement tiles never match.",
    ],
  },

  "/commercial-floor-maintenance": {
    heading: "Commercial Floor Maintenance: Expert Notes for Facility Managers",
    plain: [
      "Know what floor you actually have before you buy a cleaner. Epoxy, polished concrete, ESD, LVT and VCT each want different products.",
      "A worn topcoat can often be renewed before the floor underneath is damaged. Catching it early is far cheaper than a replacement.",
      "Wax is not a universal fix. On resinous, polished and ESD floors it can hurt traction, appearance or electrical performance.",
      "Keep a simple log of what was used and when. It helps us spot why a floor is changing and keeps warranty conversations short.",
    ],
    spec: [
      { label: "Condition survey", value: "Identify the installed system and any maintenance film, then map wear, damage, contamination and adhesion before recommending renewal." },
      { label: "Product compatibility", value: "Cleaners, finishes and recoat materials confirmed against the installed floor manufacturer's care guidance." },
      { label: "Slip resistance", value: "Traction reviewed after cleaning changes; ANSI A326.3 DCOF for hard surfaces or ASTM D2047 for resilient and polished surfaces where testing is requested." },
      { label: "ESD floors", value: "Resistance rechecked per ANSI/ESD STM7.1 after any cleaning or recoat change." },
      { label: "Safe surfaces", value: "Program supports OSHA 29 CFR 1910.22: walking-working surfaces kept clean, orderly and dry." },
      { label: "Test area", value: "Proposed method trialed in a representative area before the full scope." },
    ],
    mistakes: [
      "Using one aggressive stripper or solvent across the whole building and dulling or softening the specialty floors.",
      "Waxing an ESD floor and quietly turning it into an insulating surface.",
      "Waiting until the topcoat is gone and the base coat is worn through before calling for a recoat.",
    ],
  },

  "/commercial-lvt-flooring": {
    heading: "Commercial LVT Flooring: Spec Notes and Common Mistakes",
    plain: [
      "The vinyl is rarely what fails. Moisture in the slab, high pH, the wrong adhesive or a wavy substrate cause most LVT problems.",
      "If carts, beds or furniture roll across the floor, ask for glue-down. Rigid-core click products fit best in units and smaller rooms where floating is approved.",
      "Let the boxes acclimate in the space and keep the HVAC running before, during and after the install. Temperature swings move vinyl.",
      "Check the cleaners your team uses, especially disinfectants in healthcare, against the LVT maintenance guide before day one.",
    ],
    spec: [
      { label: "Product standard", value: "ASTM F1700 for solid vinyl tile; ASTM F3261 for rigid-core resilient flooring." },
      { label: "Substrate prep", value: "ASTM F710 and the manufacturer's flatness tolerance; ACI 302.2R guidance for slabs receiving moisture-sensitive flooring." },
      { label: "Moisture and pH", value: "ASTM F2170 in-situ RH and ASTM F1869 MVER plus surface pH against the adhesive's limits; mitigation primer when results exceed them." },
      { label: "Fire rating", value: "ASTM E648 critical radiant flux where corridors and exits require it." },
      { label: "Slip resistance", value: "Per the product data, commonly ASTM D2047." },
      { label: "CSI section", value: "09 65 19 Resilient Tile Flooring; base and transitions under 09 65 13." },
      { label: "Submittal includes", value: "Product data with wear layer, adhesive, installation method, test results and maintenance guide." },
    ],
    mistakes: [
      "Floating a rigid-core plank across a large open area with rolling loads and no expansion space.",
      "Gluing LVT over a slab that was never tested, then watching the adhesive turn soft and the edges lift.",
      "Skim-coating over well-bonded VCT without confirming the LVT manufacturer allows it.",
    ],
  },

  "/concrete-polishing": {
    heading: "Polished Concrete: What the Experts Check",
    plain: [
      "Your existing slab sets the ceiling on the finish. Approve the look on a mockup on your own concrete, not from a photo of someone else's floor.",
      "Decide how much stone you want to see and how shiny you want it as two separate choices. Deeper exposure means more grinding and more cost.",
      "Polishing will not make old cracks and patches disappear. Ask to see where they are before work starts so nobody is surprised.",
      "Plan for matting at entrances and a cleaning routine. Water, oil and dust affect traction far more than the sheen level does.",
    ],
    spec: [
      { label: "Finish definition", value: "ASCC Concrete Polishing Council aggregate exposure class (A through D) and gloss level (1 through 4)." },
      { label: "Gloss verification", value: "ASTM D523 specular gloss readings on the approved mockup and the finished floor." },
      { label: "Slip resistance", value: "ANSI A326.3 DCOF or ASTM D2047 where the owner requires documented traction." },
      { label: "Flatness", value: "ASTM E1155 FF/FL numbers help predict how evenly aggregate will expose on large floors." },
      { label: "Mockup", value: "Representative area showing aggregate exposure, sheen, joint fill and visible repairs, signed off before full production." },
      { label: "CSI section", value: "03 35 43 Polished Concrete Finishing." },
    ],
    mistakes: [
      "Promising exposed aggregate on a slab that was power-troweled flat with little stone near the surface.",
      "Using acidic or high-pH cleaners that dull the polish within months.",
      "Filling joints before the polishing sequence is planned, leaving them proud or stained in the finished floor.",
    ],
  },

  "/concrete-sealing": {
    heading: "Commercial Concrete Sealing: Expert Notes on Getting It Right",
    plain: [
      "A densifier and a sealer do two different jobs. Make sure your bid says which one you are getting, or whether you are getting both.",
      "Sealed concrete is easier to clean and dusts less, but it is not a chemical-resistant lining. Spills still need prompt cleanup.",
      "Plan on resealing. The page lists a typical cycle of every 2 to 5 years, and traffic and cleaning decide where in that range you land.",
      "If the floor has old sealer, paint or oil soaked in, expect some cleaning or removal first so the new treatment can work.",
    ],
    spec: [
      { label: "Scope clarity", value: "Specify penetrating densifier, penetrating sealer or film-forming coating by name; Legacy Sealed Concrete 1K is a film-forming single-component coating, not a densifier." },
      { label: "Surface prep", value: "Contamination and incompatible finishes removed; surface cleaned or profiled as the selected treatment requires." },
      { label: "Stain check", value: "ASTM D1308 spot tests with the oils and cleaners the floor will actually see, run on a test area." },
      { label: "Traction", value: "Film-forming finishes reviewed on a sample for traction when wet; ANSI A326.3 where documented DCOF is required." },
      { label: "CSI section", value: "Film-forming options are commonly specified under 09 96 00 High-Performance Coatings; confirm against the project manual." },
      { label: "Closeout", value: "Product used, reseal interval and compatible cleaners recorded for the facility team." },
    ],
    mistakes: [
      "Applying a sealer over an oil-soaked slab and watching it peel in the drive lanes.",
      "Buying a sealed floor and expecting it to look like polished concrete.",
      "Using a glossy film-forming sealer in a wet back-of-house area without checking traction.",
    ],
  },

  "/deck-coatings": {
    heading: "Deck Coatings: What Engineers and Owners Should Check",
    plain: [
      "Pedestrian and vehicle coatings are different products. A balcony membrane is not built for a parking ramp's turning tires.",
      "Most leaks show up at drains, joints, thresholds and penetrations, not in the middle of the deck. Ask how those details are handled.",
      "Heavy-wear spots like turns, ramps and entry lanes should be marked on the drawings before work starts, not decided on the day.",
      "Budget for periodic topcoat renewal. Traffic coatings last longest when the wear coat is refreshed before the membrane is exposed.",
    ],
    spec: [
      { label: "Substrate", value: "Concrete at 3,000 psi for pedestrian and 4,000 psi for vehicular use; 28-day cure; shot-blast to ICRI CSP 3–4." },
      { label: "Adhesion", value: "ASTM C1583 surface tensile and ASTM D7234 pull-off on representative areas where the spec requires them." },
      { label: "Membrane standard", value: "Membrane conformance to ASTM C957 (liquid-applied waterproofing with an integral wearing surface) confirmed in the submittal." },
      { label: "Flood test", value: "ASTM D5957 where the specification calls for flood testing before traffic or concealment." },
      { label: "Return to service", value: "Legacy Pedestrian Deck 48 hrs; Legacy High Traffic Urethane 72 hrs at 75°F/50% RH; FC versions 24–36 hrs; confirmed for actual conditions." },
      { label: "CSI section", value: "07 18 13 Pedestrian Traffic Coatings; 07 18 16 Vehicular Traffic Coatings." },
    ],
    mistakes: [
      "Coating over open cracks and moving joints instead of detailing them first, so they reflect through within a season.",
      "Using a non-waterproof textured overlay where the deck sits over occupied or conditioned space.",
      "Opening a fast-cure deck to traffic on the published schedule on a cold day without confirming the cure.",
    ],
  },

  "/epoxy-cove-base": {
    heading: "Epoxy Cove Base: Detail Notes From the Field",
    plain: [
      "Integral cove removes the dirt-trapping corner where floor meets wall. It is one of the simplest fixes for a kitchen or clean room that is hard to keep clean.",
      "The cove height is how far it runs up the wall, not how thick it is. The standard height can be raised for washdown areas.",
      "Wet or damaged drywall behind an old vinyl base needs to be repaired first. The cove cannot bond to soft board.",
      "Pick the topcoat for your cleaners. Novolac, epoxy, urethane and polyaspartic topcoats each handle chemicals differently.",
    ],
    spec: [
      { label: "Profile", value: "Legacy Epoxy Cove troweled 1/8\" thick and 4\" high (height adjustable), over drywall, green board, concrete or CMU." },
      { label: "Topcoat hardness", value: "Shore D by topcoat (ASTM D2240): novolac 84, epoxy 82, urethane 70, polyaspartic 70." },
      { label: "Sanitation", value: "Smooth, durable, nonabsorbent and easily cleanable as the FDA Food Code expects in food areas; urethane and polyaspartic topcoats pass JIS Z 2801." },
      { label: "Healthcare and pharmacy", value: "Coordinate with FGI Guidelines and USP <797>/<800> cleanability expectations for the room." },
      { label: "Matching systems", value: "Legacy Urethane Cement Cove and Legacy MMA Cove used with those floor systems so the perimeter matches the field." },
      { label: "Mockup", value: "Sample cove profile with inside and outside corners approved before production." },
    ],
    mistakes: [
      "Running cove over a failing vinyl base or wet drywall instead of removing it first.",
      "Stopping the cove short at door frames and equipment legs, leaving the same dirt traps behind.",
      "Pairing a cove topcoat that does not match the floor's chemical resistance in a washdown room.",
    ],
  },

  "/esd-static-control-flooring": {
    heading: "ESD Flooring: Spec Notes for Static-Control Areas",
    plain: [
      "An ESD floor only works as part of a system. Heel straps or ESD footwear, grounding and procedures matter as much as the coating.",
      "Decide early whether the room needs a conductive or a static-dissipative floor. That choice changes the primer and the test targets.",
      "Never wax or seal an ESD floor without checking with us. An insulating film can quietly undo the electrical performance.",
      "Ask for a test report at turnover and retest on a schedule. It is the only proof the floor is still doing its job.",
    ],
    spec: [
      { label: "Program standard", value: "ANSI/ESD S20.20; the floor is one element of the facility's ESD control plan." },
      { label: "Floor resistance", value: "Legacy ESD 35 published at 1×10^5 to 1×10^9 ohms, tested per ANSI/ESD STM7.1 at the specified locations." },
      { label: "System test", value: "ANSI/ESD STM97.1 floor/footwear resistance and STM97.2 body voltage; Legacy ESD 35 published under 100 volts." },
      { label: "Grounding", value: "Ground points coordinated with the electrical scope and documented on the drawings." },
      { label: "Build-up", value: "Insulating epoxy coat with a 15–20 mil conductive-filled epoxy topcoat, 35 mils nominal; or Legacy ESD Stipple over a conductive or standard primer." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Testing resistance before the topcoat has cured and signing off on numbers that drift later.",
      "Installing the ESD floor but never connecting it to the specified ground points.",
      "Switching to a new floor cleaner that leaves an insulating residue and never retesting.",
    ],
  },

  "/flake-floors": {
    heading: "Flake Floors: What to Know Before You Choose a Level",
    plain: [
      "Pick the level by your schedule and your cleaning, not just the color. One-day polyurea and polyaspartic floors reopen fastest; epoxy-based floors take a standard cure.",
      "If the floor gets sun through storefront glass, ask for a UV-stable polyaspartic topcoat so it will not yellow.",
      "Wet entries, locker rooms and pool areas need extra grip in the topcoat. Approve the texture on a sample, not after the fact.",
      "If the slab is damp, a moisture-mitigating primer is part of the floor, not an upsell. Flake systems are not recommended above 80% RH without one.",
    ],
    spec: [
      { label: "Moisture testing", value: "ASTM F2170 in-situ RH; flake systems not recommended above 80% RH without a moisture-mitigating primer." },
      { label: "Surface prep", value: "Diamond grind to ICRI CSP 3 with cracks and joints repaired before the base coat." },
      { label: "System levels", value: "Legacy Flake Epoxy, Fast-Cure, Polyurea, One-Day, Legacy Flake UT and Legacy Urethane Cement Flake selected by traffic, chemicals, sun and downtime." },
      { label: "Wear data", value: "Taber abrasion per ASTM D4060: urethane topcoat 23 mg, polyaspartic 55 mg per 1,000 cycles, CS-17 wheel." },
      { label: "Hot, wet areas", value: "Legacy Urethane Cement Flake with a 3/16\" urethane cement body where kitchens see hot water and thermal shock." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Installing a one-day flake floor on a damp slab with no RH test and no mitigating primer.",
      "Leaving the topcoat smooth at a wet entry because the sample was only reviewed dry.",
      "Using an epoxy-only flake floor in a sunlit showroom and watching the clear coats yellow.",
    ],
  },

  "/industrial-epoxy": {
    heading: "Industrial Epoxy Flooring: What the Experts Check",
    plain: [
      "Match the thickness to the traffic. A thin film that works in a break room will not survive forklift turns at a dock door.",
      "Most epoxy failures start below the coating. Moisture testing and real mechanical prep are where the floor's life is decided.",
      "Fix the joints and cracks as part of the same job. Damaged joint edges under hard wheels will break through any coating.",
      "Plan the striping, safety zones and cove with the floor so it all goes down in one mobilization.",
    ],
    spec: [
      { label: "System selection", value: "Legacy Epoxy 16 through Legacy Epoxy Mortar 250 chosen by wheel type, impact and traffic; number is nominal thickness in mils." },
      { label: "Moisture testing", value: "ASTM F2170 in-situ RH and ASTM F1869 MVER; moisture-mitigating primer when results call for it." },
      { label: "Surface prep", value: "Shot-blast or diamond grind to ICRI CSP 3 per SSPC-SP 13/NACE No. 6, with repairs per ICRI 320 guidance." },
      { label: "Adhesion", value: "ASTM D7234 pull-off tests on the mockup or representative areas." },
      { label: "Published values", value: "Body epoxy compressive strength 25,300 psi (ASTM D695); optional CRU topcoat Taber abrasion 23 mg (ASTM D4060)." },
      { label: "Aisle marking", value: "Coordinated with OSHA 1910.176 marked aisles and ANSI Z535 safety colors." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Rolling a thin-film coating onto a forklift floor and calling it industrial epoxy.",
      "Acid-etching instead of mechanically profiling, leaving a weak bond that peels in traffic lanes.",
      "Coating straight over spalled control joints so hard wheels chip the edges within months.",
    ],
  },

  "/joint-filling-crack-repair": {
    heading: "Joint Filling and Crack Repair: Spec Notes for Warehouse Slabs",
    plain: [
      "Joint filler and joint sealant are different products. Filler supports the edges under hard wheels; sealant lets a joint move.",
      "Timing matters. Filling a new slab too early lets shrinkage pull the filler away from the joint walls.",
      "A crack that is still moving needs a movement detail, not a rigid patch. We sort dormant cracks from active ones first.",
      "Spalled joint edges get worse every time a forklift crosses them. Repairing them early protects the slab and your equipment.",
    ],
    spec: [
      { label: "Joint survey", value: "Control, construction and expansion joints, cracks and spalls mapped before details are chosen." },
      { label: "Slab guidance", value: "Fill timing coordinated with slab shrinkage per ACI 302.1R and the project specification." },
      { label: "Filler", value: "Semi-rigid polyurea filled full depth as specified and shaved flush; hardness per product data (ASTM D2240)." },
      { label: "Spall repair", value: "Unsound concrete removed and profile restored per ICRI 320 series guidance." },
      { label: "Movement joints", value: "Expansion and isolation joints kept as movement joints with a sealant under 07 92 00 Joint Sealants." },
      { label: "Return to service", value: "Wheel traffic only after the specified cure and flush finishing." },
    ],
    mistakes: [
      "Filling control joints in a new slab before shrinkage has run its course, then refilling the gaps later.",
      "Topping off old failed filler instead of removing it to sound joint walls.",
      "Bridging an expansion joint with rigid filler so the slab cracks next to it.",
    ],
  },

  "/line-striping": {
    heading: "Warehouse Line Striping: Expert Notes on Layout and Durability",
    plain: [
      "Start from your racking plan and forklift routes. Lines that match how people actually move get respected; lines that do not get ignored.",
      "Most striping wears out because it was painted on unprepared concrete. Grinding or blasting the line path makes the biggest difference.",
      "Use a consistent color code across the whole building, and share it with your team so a yellow line means the same thing everywhere.",
      "If you are still testing a layout, use durable floor tape first. Commit to permanent lines once the flow works.",
    ],
    spec: [
      { label: "Aisles and passageways", value: "Layout supports OSHA 1910.176 marked aisles and OSHA 1910.22 clear walking-working surfaces; markings do not replace required clearances." },
      { label: "Color plan", value: "Coordinated with ANSI Z535 safety colors and the facility's own marking standard, confirmed with the safety team." },
      { label: "Prep and material", value: "Good: striping paint; Better: epoxy over mechanically prepared lines; Best: shot-blasted or ground lines with two-part epoxy or polyurea." },
      { label: "Field verification", value: "Dimensions, rack clearances and access to fire and safety equipment confirmed on site before marking." },
      { label: "Garage striping", value: "Material confirmed compatible with Legacy High Traffic Urethane traffic coatings, with application windows set by the coating system." },
      { label: "Return to service", value: "Timing confirmed for the selected striping material and site conditions." },
    ],
    mistakes: [
      "Painting straight over dusty, sealed or oily concrete and restriping the same aisles every few months.",
      "Using different colors for the same meaning in different parts of the building.",
      "Striping a coated garage deck with a paint that is not compatible with the traffic coating underneath.",
    ],
  },

  "/mma-flooring": {
    heading: "MMA Flooring: Planning Notes for a Same-Day Return",
    plain: [
      "MMA is for the job that has to reopen fast. It cures in about an hour, so a kitchen or line can often be back in service the same day.",
      "It has a strong odor while it cures. Plan ventilation and tell neighboring tenants and staff before the shutdown.",
      "In many kitchens MMA can go over prepared quarry tile, which saves demolition time and noise.",
      "Schedule the crew, materials and inspections tightly. The short cure is only an advantage if everything else is ready.",
    ],
    spec: [
      { label: "System", value: "MMA primer and adhesion promoter, flexible or standard MMA body, MMA topcoat; 1/8\" to 3/8\" by system." },
      { label: "Published values", value: "Tensile strength 3,850 psi (ASTM D638)." },
      { label: "Surface prep", value: "Mechanical prep per SSPC-SP 13/NACE No. 6 to the profile in the product data; quarry tile prepared per the manufacturer's tile procedure." },
      { label: "Ventilation plan", value: "Air handling, odor control and occupant notification documented before the shutdown window." },
      { label: "Cove", value: "Legacy MMA Cove in solid color, flake or quartz to match the floor." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Starting an MMA install in an occupied building without isolating air handling, so the odor spreads.",
      "Going over quarry tile with loose or hollow tiles left in place.",
      "Assuming the one-hour cure means the prep and repairs can be rushed too.",
    ],
  },

  "/moisture-mitigation": {
    heading: "Concrete Moisture Mitigation: What the Tests Actually Tell You",
    plain: [
      "Test before you choose the floor. A dry-looking slab can still carry enough moisture to blister a coating or loosen an adhesive.",
      "RH probes and calcium chloride tests measure different things. Use the test the receiving floor's manufacturer asks for.",
      "Sometimes the smart move is a floor that tolerates moisture, like urethane cement, instead of paying to mitigate.",
      "A primer will not stop an active leak. Water coming in from outside needs to be fixed before any floor goes down.",
    ],
    spec: [
      { label: "In-situ RH", value: "ASTM F2170 probes placed and conditioned per the standard, with the space at service conditions." },
      { label: "MVER", value: "ASTM F1869 calcium chloride tests where the receiving system publishes an MVER limit." },
      { label: "Slab guidance", value: "ACI 302.2R for slabs receiving moisture-sensitive flooring, including vapor retarder history." },
      { label: "Mitigation options", value: "Legacy Moisture Barrier Primer at 25 mils, or a full vapor-barrier system matched to patch, adhesive and finish." },
      { label: "Moisture-tolerant option", value: "Legacy Urethane Cement tolerates up to 25 lb MVER (ASTM F1869)." },
      { label: "Submittal includes", value: "Test locations, readings, receiving-system limits and the selected mitigation assembly." },
    ],
    mistakes: [
      "Testing with the HVAC off and the building open, then reading numbers that do not match service conditions.",
      "Treating F2170 and F1869 results as interchangeable when the floor's limit is written for only one of them.",
      "Mixing a mitigation primer with a patch or adhesive the primer manufacturer never approved.",
    ],
  },

  "/novolac-epoxy-flooring": {
    heading: "Novolac Epoxy Flooring: When Standard Epoxy Is Not Enough",
    plain: [
      "Bring a list of every chemical the floor will see, with concentration and how long it might sit. That list decides whether novolac is needed.",
      "Novolac handles stronger chemicals and more heat than standard epoxy, which is why it shows up around ovens, battery rooms and chemical storage.",
      "Carry it up the cove and over curbs. Containment only works when the floor, walls and penetrations are one lining.",
      "Choose texture with your cleaning crew. Legacy Novolac 125 Broadcast gives more body and grip than the smoother Novolac 32.",
    ],
    spec: [
      { label: "Systems", value: "Legacy Novolac 32 (primer plus two novolac coats) or Legacy Novolac 125 Broadcast (two sand-broadcast bases plus two novolac seals)." },
      { label: "Published values", value: "Compressive strength 10,000 psi (ASTM D695); Shore D 84 (ASTM D2240)." },
      { label: "Chemical check", value: "Each chemical reviewed on the manufacturer's novolac resistance chart; ASTM D1308 spot tests for site-specific confirmation." },
      { label: "Surface prep", value: "Mechanical prep per SSPC-SP 13/NACE No. 6 to the profile in the product data (ICRI 310.2R)." },
      { label: "Adhesion", value: "ASTM D7234 pull-off testing on representative areas." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Choosing novolac by name without checking the specific acid or solvent and its concentration on the chart.",
      "Lining the floor but leaving the base of the walls and the curb top uncoated.",
      "Exposing the floor to chemicals before it reaches the chemical-service cure confirmed in the submittal.",
    ],
  },

  "/quartz-flooring": {
    heading: "Quartz Flooring: Spec Notes for Restrooms, Kitchens and Corridors",
    plain: [
      "Quartz gives a textured, decorative floor that cleans well. The trick is choosing a texture that grips without being hard to mop.",
      "Approve a finished sample under real cleaning conditions, with your cleaning crew's equipment if possible.",
      "Need it back fast? Legacy Quartz Fast-Cure uses polyaspartic throughout for a quicker return to service.",
      "Antimicrobial topcoat results are useful, but they do not replace the cleaning and disinfection program.",
    ],
    spec: [
      { label: "Systems", value: "Legacy Quartz Broadcast, Quartz HD, Quartz Trowel or Quartz Fast-Cure selected by impact, exposure and downtime." },
      { label: "Published values", value: "Epoxy seal compressive strength 11,000 psi (ASTM D695); Taber abrasion per ASTM D4060: urethane topcoat 23 mg, polyaspartic 55 mg." },
      { label: "Antimicrobial", value: "CRU and polyaspartic seals pass JIS Z 2801; not a substitute for sanitation." },
      { label: "Cleanability", value: "Smooth, durable, nonabsorbent and easily cleanable surfaces in food areas per the FDA Food Code; USP <797>/<800> where pharmacy rooms apply." },
      { label: "Surface prep", value: "ICRI CSP 3 with cracks and joints repaired before the first base coat." },
      { label: "CSI section", value: "09 67 26 Quartz Flooring." },
    ],
    mistakes: [
      "Over-texturing a restroom floor so it traps soil and looks dirty soon after cleaning.",
      "Using an interior epoxy seal on exterior or sunlit quartz instead of the CRU option.",
      "Approving a dry sample without testing the disinfectants that will be used every day.",
    ],
  },

  "/resilient-flooring": {
    heading: "Commercial Resilient Flooring: What to Check Before You Pick a Product",
    plain: [
      "Pick the floor by what happens in each room. Carpet tile for offices and classrooms, LVT for lobbies and break rooms, sheet vinyl where seams must be welded.",
      "Ask how each floor is meant to be maintained. Many LVT and sheet products do not need wax, while VCT is built around a strip-and-wax program.",
      "Most resilient floor failures come from the slab, not the product. Moisture, pH and flatness need to be checked first.",
      "Plan transitions between floors at the start. Height changes at doorways are a common trip hazard and punch-list item.",
    ],
    spec: [
      { label: "Substrate prep", value: "ASTM F710 for concrete receiving resilient flooring; ACI 302.2R for moisture-sensitive finishes." },
      { label: "Moisture testing", value: "ASTM F2170 and ASTM F1869 against the adhesive and flooring manufacturer's limits." },
      { label: "Product standards", value: "ASTM F1700 solid vinyl tile; ASTM F3261 rigid core; CRI 104 for carpet tile installation." },
      { label: "Fire and traction", value: "ASTM E648 critical radiant flux where required; ASTM D2047 slip resistance per product data." },
      { label: "CSI sections", value: "09 65 19 Resilient Tile Flooring; 09 65 13 Resilient Base and Accessories; 09 68 13 Tile Carpeting." },
      { label: "Submittal includes", value: "Product data, adhesive, seam and weld layout, test results and maintenance instructions per floor type." },
    ],
    mistakes: [
      "Putting a wax program on a no-wax LVT and voiding the finish warranty.",
      "Using one patching compound and adhesive across products the manufacturers never approved together.",
      "Skipping welded seams in a healthcare room where infection control expected them.",
    ],
  },

  "/resinous-flooring": {
    heading: "Resinous Flooring: How Experts Choose the Chemistry",
    plain: [
      "Resinous flooring is a family, not one product. Epoxy, novolac, urethane cement, MMA and polyaspartic each solve a different problem.",
      "Start with three questions: what spills on it, how hot or wet it gets, and how long you can shut the room down.",
      "Different rooms in the same building often need different systems. Plan the transitions so they are clean and cleanable.",
      "Ask for one submittal per assembly, so everyone knows exactly what goes in each room.",
    ],
    spec: [
      { label: "Selection basis", value: "Chemistry chosen by chemical exposure, thermal exposure, traffic and return-to-service window, documented per room." },
      { label: "Moisture testing", value: "ASTM F2170 and ASTM F1869 against the selected system's limits; urethane cement where moisture tolerance governs." },
      { label: "Surface prep", value: "SSPC-SP 13/NACE No. 6 to the ICRI 310.2R profile each system requires." },
      { label: "Adhesion and repairs", value: "ASTM D7234 pull-off on mockups; repairs per ICRI 320 guidance." },
      { label: "Sanitary details", value: "Integral cove, drain transitions and curb coatings included in the approved assembly." },
      { label: "CSI sections", value: "09 67 23 Resinous Flooring; 09 67 26 Quartz Flooring where quartz is specified." },
    ],
    mistakes: [
      "Specifying the same epoxy in the dry warehouse and the hot washdown room next to it.",
      "Writing \"epoxy flooring\" in the spec with no build-up, then comparing bids that are not the same floor.",
      "Leaving room-to-room transitions as an afterthought so a raised edge catches carts and dirt.",
    ],
  },

  "/roof-deck-waterproofing": {
    heading: "Roof and Deck Waterproofing: Expert Notes Before You Coat",
    plain: [
      "Fix ponding and drainage before you coat. A coating does not solve water that has nowhere to go.",
      "Roof coatings, walkable deck coatings and buried membranes are three different products. Use each where it belongs.",
      "Protect the roof where technicians walk to equipment. A walkway pad or coated path saves the membrane around chillers and condensers.",
      "Flood test before anything covers the membrane. It is much cheaper to find a leak before tile or pavers go down.",
    ],
    spec: [
      { label: "Roof survey", value: "Existing roof type, drainage, ponding, termination heights and penetrations documented before selecting the coating family." },
      { label: "Buried waterproofing", value: "Legacy Cold Fluid-Applied Membrane 60 at 60 dry mils below tile or overburden." },
      { label: "Flood test", value: "ASTM D5957 before concealment or protection." },
      { label: "Exposed pedestrian decks", value: "Legacy Pedestrian Deck at 32 dry mils; traffic at 48 hrs." },
      { label: "Concrete substrate", value: "3,000 psi, 28-day cure and ICRI CSP 3–4 preparation for the pedestrian assembly." },
      { label: "CSI section", value: "07 18 13 Pedestrian Traffic Coatings for walkable decks." },
    ],
    mistakes: [
      "Coating a roof with standing water and expecting the coating to stop the leaks.",
      "Letting following trades set tile or pavers on a membrane that was never flood tested.",
      "Assuming a waterproof roof coating will also hold up to spilled equipment oil without checking.",
    ],
  },

  "/secondary-containment-coatings": {
    heading: "Transformer Oil Containment: What Inspectors and Engineers Check",
    plain: [
      "The engineer sizes the containment and writes the spill plan. Our job is to make that pit, curb or basin actually hold oil.",
      "Tell us the transformer fluid. Mineral oil and natural ester fluids behave differently, and the lining has to be checked for the one you have.",
      "Outdoor pits crack and move with the weather. A flexible, crack-bridging lining usually outlasts a rigid coating there.",
      "Keep the lining easy to inspect. A light, uniform surface makes cracks and oil stains obvious during routine SPCC inspections.",
    ],
    spec: [
      { label: "Regulatory basis", value: "EPA SPCC (40 CFR 112) applies above 1,320 gallons aggregate aboveground oil storage; transformers are oil-filled operational equipment, sized by the engineer for the most likely discharge or covered by the 112.7(k) inspection and contingency alternative." },
      { label: "Generator fuel", value: "Fuel tanks are bulk storage: containment for the largest tank plus precipitation freeboard, set by the certifying engineer." },
      { label: "Design guides", value: "IEEE 980 for substation oil containment; FM Global Data Sheet 5-4 where insurer fire-protection requirements apply." },
      { label: "Fluid resistance", value: "Manufacturer's resistance data for the specific fluid (mineral oil or natural ester), including immersion, for the complete lining." },
      { label: "Surface prep", value: "Oil-contaminated concrete cleaned or removed; prep per SSPC-SP 13/NACE No. 6 to the ICRI 310.2R profile; cracks and spalls per ICRI 320 guidance." },
      { label: "Verification", value: "Thickness checks, pinhole and holiday inspection, ASTM D7234 pull-off where specified, and any specified flood test before stone goes back." },
      { label: "Closeout", value: "Photo log and lining documentation for the facility's SPCC records." },
    ],
    mistakes: [
      "Rolling a rigid coating over a cracked outdoor pit and watching it crack along the same lines the next winter.",
      "Lining a pit without first removing oil-soaked concrete, so the coating never bonds.",
      "Putting stone fill back before the lining is inspected and any specified flood test is complete.",
    ],
  },

  "/urethane-cement-flooring": {
    heading: "Urethane Cement Flooring: Spec Notes for Hot, Wet Floors",
    plain: [
      "If the floor sees steam cleaning, hot oil or boiling water, urethane cement is usually the right answer. Standard epoxy tends to crack and let go under thermal shock.",
      "It tolerates more slab moisture than most resin floors, which can save the cost of a separate mitigation step on a damp slab.",
      "Plan the slope to drains early. A floor that drains well stays cleaner and safer, and drains are where floors usually fail first.",
      "Pick the texture with your sanitation team. You want grip under wet, greasy conditions that still rinses clean.",
    ],
    spec: [
      { label: "Systems", value: "Legacy Urethane Cement SL, SL Broadcast, RT or Trowel; 3/16\" self-leveling to 1/4\" trowel grade by impact and thermal load." },
      { label: "Moisture", value: "Tolerates up to 25 lb MVER (ASTM F1869); ASTM F2170 RH documented as well." },
      { label: "Surface prep", value: "Shot-blast or diamond grind to ICRI CSP 3–4 with saw-cut anchor keyways at edges, drains and thresholds." },
      { label: "Published values", value: "Compressive strength 7,700 psi (ASTM C579); Shore D 84 (ASTM D2240)." },
      { label: "Sanitation", value: "Smooth, durable, nonabsorbent and easily cleanable per the FDA Food Code, with integral Legacy Urethane Cement Cove; USDA and FSMA sanitary design reviewed with the owner." },
      { label: "CSI section", value: "09 67 23 Resinous Flooring." },
    ],
    mistakes: [
      "Skipping the anchor keyways, so the edges curl and lift at drains and doorways.",
      "Choosing a thin epoxy for a fryer line or washdown room and replacing it far sooner than planned.",
      "Pouring urethane cement without monitoring temperature and dew point, leaving an uneven, blemished surface.",
    ],
  },
};
