/**
 * Phase 2 industry page data. Every industry in the nav has an entry here;
 * IndustryTemplate renders it. Copy rules: 800–1,500 unique words per page,
 * buyer-language pain points, real photos only, no competitor names.
 */
import iw1 from "@/assets/industries/industrial-warehouse-1.jpg";
import { nationalize } from "@/data/site/nationwide";
import iw2 from "@/assets/industries/industrial-warehouse-2.jpg";
import iw3 from "@/assets/industries/industrial-warehouse-3.jpg";

import industry0Photo1 from "@/assets/industries/manufacturing-1.jpg";
import industry0Photo2 from "@/assets/industries/manufacturing-2.jpg";
import industry0Photo3 from "@/assets/industries/manufacturing-3.jpg";
import industry1Photo1 from "@/assets/industries/aerospace-1.jpg";
import industry1Photo2 from "@/assets/industries/aerospace-2.jpg";
import industry1Photo3 from "@/assets/industries/aerospace-3.jpg";
import industry2Photo1 from "@/assets/industries/healthcare-1.jpg";
import industry2Photo2 from "@/assets/industries/healthcare-2.jpg";
import industry2Photo3 from "@/assets/industries/healthcare-3.jpg";
import industry3Photo1 from "@/assets/industries/education-1.jpg";
import industry3Photo2 from "@/assets/industries/education-2.jpg";
import industry3Photo3 from "@/assets/industries/education-3.jpg";
import industry4Photo1 from "@/assets/industries/hotel-hospitality-1.jpg";
import industry4Photo2 from "@/assets/industries/hotel-hospitality-2.jpg";
import industry4Photo3 from "@/assets/industries/hotel-hospitality-3.jpg";
import industry5Photo1 from "@/assets/industries/multifamily-1.jpg";
import industry5Photo2 from "@/assets/industries/multifamily-2.jpg";
import industry5Photo3 from "@/assets/industries/multifamily-3.jpg";
import industry6Photo1 from "@/assets/industries/office-corporate-1.jpg";
import industry6Photo2 from "@/assets/industries/office-corporate-2.jpg";
import industry6Photo3 from "@/assets/industries/office-corporate-3.jpg";
import industry7Photo1 from "@/assets/industries/retail-1.jpg";
import industry7Photo2 from "@/assets/industries/retail-2.jpg";
import industry7Photo3 from "@/assets/industries/retail-3.jpg";
import industry8Photo1 from "@/assets/industries/agriculture-facilities-1.jpg";
import industry8Photo2 from "@/assets/industries/agriculture-facilities-2.jpg";
import industry8Photo3 from "@/assets/industries/agriculture-facilities-3.jpg";
import industry9Photo1 from "@/assets/industries/data-center-2.jpg";
import industry9Photo2 from "@/assets/industries/data-center-3.jpg";
import industry9Photo3 from "@/assets/industries/healthcare-1.jpg";

import foodProcessing1 from "@/assets/case-studies/fast-casual-restaurant/after-1.jpg";
import foodProcessing2 from "@/assets/case-studies/fast-casual-restaurant/after-2.jpg";
import foodProcessing3 from "@/assets/case-studies/fast-casual-restaurant/after-3.jpg";
import pharmaceutical1 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-1.jpg";
import pharmaceutical2 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-2.jpg";
import pharmaceutical3 from "@/assets/case-studies/pharmaceutical-polished-concrete/after-3.jpg";
import pharmacyCleanroom1 from "@/assets/industries/healthcare-1.jpg";
import pharmacyCleanroom2 from "@/assets/industries/healthcare-2.jpg";
import pharmacyCleanroom3 from "@/assets/industries/healthcare-3.jpg";
import restaurantKitchen1 from "@/assets/case-studies/restaurant-pump-room-cove-base/after-1.jpg";
import restaurantKitchen2 from "@/assets/case-studies/fast-casual-restaurant/after-4.jpg";
import restaurantKitchen3 from "@/assets/case-studies/fast-casual-restaurant/after-5.jpg";
import autoDealership1 from "@/assets/dealership-showroom-polished.jpg";
import autoDealership2 from "@/assets/dealership-showroom.jpg";
import autoDealership3 from "@/assets/polishing-showroom-cars.jpg";

export type IndustryArea = {
  name: string;
  text: string;
  system: string;
  thickness?: string;
  link?: string;
};

export type IndustryPageData = {
  slug: string;
  path: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  /** Optional two-sentence direct answer shown under the H1 when intro runs long. */
  answer?: string;
  demands: string[];
  areas: IndustryArea[];
  standards: string[];
  caseStudySlug?: string;
  faqs: { q: string; a: string }[];
  photos: { src: string; alt: string }[];
  /** Page-specific heading + line for the single closing CTA section. */
  closing?: { title: string; text: string };
};

export const INDUSTRY_PAGES: IndustryPageData[] = [
  {
    slug: "warehouse",
    path: "/warehouse-flooring",
    caseStudySlug: "plano-distribution-center-walkway-epoxy",
    name: "Warehouse & Tilt-Up",
    metaTitle: "Industrial & Warehouse Epoxy Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "Heavy-duty epoxy, urethane, and polished concrete floors for warehouses and distribution centers across Dallas-Fort Worth. Built for forklift traffic and 24/7 use.",
    h1: "Warehouse & Tilt-Up Flooring in Dallas–Fort Worth",
    heroImage: "/commercial/gallery-polished-warehouse-1600.webp",
    heroAlt: "Polished concrete floor in a DFW distribution warehouse",
    answer: "Warehouse flooring is a densified and sealed slab, a high-build epoxy or a urethane system with semi-rigid joint fill and aisle striping, chosen by traffic and use. It is used in distribution centers, tilt-up warehouses, dock floors and staging areas that carry forklift and pallet-jack traffic.",
    intro:
      "Warehouse and distribution floors take a beating every day. Forklifts, pallet jacks, dropped loads, and constant traffic wear a slab down fast. We install high-build epoxy, urethane and polished concrete systems that hold up to the punishment and keep your operation moving.",
    demands: [
      "Forklift wheels and pallet jacks that chew up bare concrete",
      "Oil, hydraulic fluid, and battery acid spills",
      "Dusting slabs that contaminate product and equipment",
      "Cracked control joints and worn saw cuts",
      "Fast turnaround needs — no room for long shutdowns",
    ],
    areas: [
      {
        name: "New construction slabs",
        text: "Densify and seal new tilt-up slabs before racking goes in — dustproof, cleanable, and ready for traffic.",
        system: "Sealed & densified concrete",
        link: "/concrete-sealing",
      },
      {
        name: "Control joints",
        text: "Semi-rigid polyurea joint fill per ACI 302, filled full-depth and shaved flush so wheels stop chipping joint edges.",
        system: "Polyurea joint fill (~Shore A 85)",
        link: "/joint-filling-crack-repair",
      },
      {
        name: "Battery charging areas",
        text: "Acid-resistant novolac epoxy with integral cove where lead-acid batteries are charged and watered.",
        system: "Acid-resistant epoxy",
        link: "/battery-room-flooring",
      },
      {
        name: "Dock floors & staging",
        text: "Epoxy mortar and urethane cement sized for point loads, pallet jacks and dropped freight.",
        system: "Urethane cement",
        thickness: '3/16"–1/4"',
        link: "/urethane-cement-flooring",
      },
      {
        name: "Showrooms & office fronts",
        text: "Mechanical polished concrete for the customer-facing side of the building.",
        system: "Polished concrete",
        link: "/concrete-polishing",
      },
      {
        name: "Aisles & safety marking",
        text: "Aisle lines, walkways, staging and hazard marking installed into the coating system — coating and striping in one mobilization.",
        system: "Line striping & floor marking",
        link: "/line-striping",
      },
    ],
    standards: [
      "ACI 302 guidance for semi-rigid control-joint filler (~Shore A 85 hardness)",
      "ICRI 310.2R concrete surface profile (CSP) matched to the specified system",
      "ASTM F2170 in-situ relative humidity and ASTM F1869 MVER moisture testing before coating",
      "ASTM D7234 pull-off adhesion testing on mockups",
    ],
    faqs: [
      {
        q: "Can you coat our warehouse without shutting down operations?",
        a: "Yes. We stage work in zones so racking and shipping never fully stop, and we run night and weekend crews when the schedule calls for it. Our weekend warehouse case study shows a zone-by-zone install in an active, racked facility.",
      },
      {
        q: "Should a new tilt-up warehouse be polished, sealed, or epoxied?",
        a: "For most dry storage and distribution, densify-and-seal is the best value: dustproof, cleanable, and no coating to wear off. High-traffic or spill-prone zones (docks, battery charging, wash areas) usually get epoxy or urethane cement over the sealed slab.",
      },
      {
        q: "When should control joints be filled?",
        a: "Semi-rigid polyurea joint filler should go in 60–90+ days after the pour, once the slab has done most of its shrinking. We fill full-depth and shave flush so forklift wheels stop breaking joint edges.",
      },
      {
        q: "How do you handle cracks and spalls before coating?",
        a: "We chase cracks, repair spalls with epoxy or polyurea repair mortar, and grind the surface to the specified CSP profile. Repairs are documented with photos in your closeout package.",
      },
    ],
    photos: [
      { src: iw1, alt: "Warehouse epoxy floor coating in Dallas-Fort Worth" },
      { src: iw2, alt: "Industrial warehouse floor with aisle striping" },
      { src: iw3, alt: "Distribution center concrete floor restoration" },
    ],
  },
  {
    "slug": "manufacturing",
    "path": "/manufacturing-floor-coating",
    "name": "Manufacturing",
    "metaTitle": "Manufacturing Plant Epoxy & Urethane Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Chemical-resistant epoxy, urethane cement, and quartz resin floors for manufacturing plants across Dallas-Fort Worth. Built for heat, chemicals, and heavy production.",
    "h1": "Manufacturing Flooring in Dallas–Fort Worth",
    "heroImage": "/commercial/aloe-vera-polished-1600.webp",
    "heroAlt": "Manufacturing plant resin flooring for production areas in Dallas–Fort Worth",
    "intro": "Production flooring has to be selected around the process, not the color chart. A machine shop receiving cutting fluids needs a different assembly than a plating line exposed to acids or a wash area cycling between hot water and a cold slab. Legacy Industrial Coatings scopes manufacturing floors across Dallas–Fort Worth by chemical exposure, operating temperature, wheel traffic and shutdown availability. We use urethane cement, chemical-resistant epoxy and novolac systems where their published performance matches the duty. Before pricing, we identify contaminated concrete, drain transitions and equipment that cannot move. The bid then separates repair, preparation, coating and return-to-service requirements so maintenance and production can agree on a workable sequence.",
    "demands": [
      "Our cutting fluids soak into the slab and make cleanup unpredictable.",
      "We cannot stop every production cell for one flooring project.",
      "Hot wash water is breaking down the floor around drains.",
      "Pallet trucks keep damaging repairs beside heavy machinery."
    ],
    "areas": [
      {
        "name": "Machine shops and machining cells",
        "text": "Cutting oil, coolant and metal fines demand a finish that releases soil without becoming excessively slick. Specify chemical-resistant epoxy after reviewing the actual fluids and cleaning products. Preparation includes removal of weak concrete and an assessment of oil penetration; a primer cannot compensate for deeply contaminated material. Detail equipment feet, anchor pockets and access covers before coating. Select aggregate texture with the maintenance team so squeegees and scrubbers can still recover coolant instead of leaving residue between production runs.",
        "system": "Chemical-resistant epoxy",
        "thickness": "Per approved manufacturer build-up",
        "link": "/commercial"
      },
      {
        "name": "Hot wash and cleaning stations",
        "text": "Urethane cement is the starting point where repeated wash cycles create thermal movement and prolonged wet service. A typical 1/4-inch installation is only a planning allowance: final depth follows the selected product and measured service conditions. Rebuild eroded drain shoulders and confirm that the existing slope actually carries water away. We coordinate cove, termination grooves and drain interfaces as part of the assembly, rather than treating each transition as a separate caulking problem after the floor is finished.",
        "system": "Urethane cement",
        "thickness": "Typical 1/4 inch; verify thermal duty",
        "link": "/urethane-cement-flooring"
      },
      {
        "name": "Plating lines and chemical handling",
        "text": "List every acid, alkali and solvent with its concentration, temperature and expected contact time before choosing a lining. A novolac epoxy may suit an aggressive exposure, but no generic epoxy recommendation covers an entire plating department. Curbs, sumps, trench walls and penetrations must be included in the containment boundary. Inspect the concrete behind failed coatings and establish repair limits before installation. Where the specification requires continuity testing, agree on the test method and acceptance criteria with the lining manufacturer.",
        "system": "Chemical-resistant novolac lining",
        "thickness": "Exposure-specific approved build-up",
        "link": "/secondary-containment-coatings"
      },
      {
        "name": "Assembly aisles and material movement",
        "text": "Dry assembly areas need abrasion resistance, visibility and transitions that do not punish small wheels. A resinous broadcast assembly can provide defined pedestrian routes and a consistent cleanable surface between work cells. Survey joint edges and spalls before selecting the finish; coating over broken concrete simply reproduces the defect. Preserve movement joints with the specified detail. Review aisle closures with supervisors and logistics so incoming parts, outgoing product and emergency access remain separated from preparation equipment and uncured resin.",
        "system": "Broadcast resinous flooring",
        "thickness": "Per specified traffic assembly",
        "link": "/resinous-flooring"
      },
      {
        "name": "Process boundaries and wall junctions",
        "text": "Integral epoxy cove carries the cleanable surface up walls and housekeeping pads where liquid and debris collect. Cove height, radius and termination are coordinated with wall finishes and process equipment. It does not replace flexible movement joints or repair a leaking wall. At phased boundaries, locate stop lines where equipment can return without driving across a fresh edge. Document these details in the submittal so the next shutdown can extend the same assembly without improvising a connection between incompatible materials.",
        "system": "Integral epoxy cove base",
        "thickness": "Profile and height per detail",
        "link": "/epoxy-cove-base"
      }
    ],
    "standards": [
      "ICRI 310.2R guides concrete surface profile selection for the specified resin; repairs and oil removal are evaluated before profile acceptance.",
      "ASTM F2170 in-situ RH and ASTM F1869 MVER testing inform moisture-related decisions; acceptance limits come from the chosen manufacturer.",
      "ASTM D7234 pull-off testing on mockups and ambient temperature, humidity and dew-point monitoring support installation quality records.",
      "Chemical-resistance submittals identify actual process liquids and service temperatures; a broad claim of chemical resistance is not an exposure schedule."
    ],
    "faqs": [
      {
        "q": "Can production continue during installation?",
        "a": "We develop a cell-by-cell phasing plan with production leadership. It identifies material routes, isolation boundaries, preparation noise, ventilation and cure holds before a crew mobilizes. Night or weekend work can reduce disruption, but active processes must remain outside the controlled work area. Each phase is released against the selected system’s cure requirements, not simply because the next shift has arrived."
      },
      {
        "q": "Should we choose urethane cement or epoxy?",
        "a": "Use the operating conditions to decide. Urethane cement is a strong candidate for wet areas with thermal cycling; chemical-resistant epoxy can suit dry machining and assembly. Novolac options address specific aggressive chemicals when supported by resistance data. We may recommend multiple systems within one plant rather than forcing the entire facility into a single finish."
      },
      {
        "q": "Can you coat over an oil-soaked floor?",
        "a": "Only after investigating the contamination and establishing a suitable preparation approach. Cleaning, mechanical removal, localized replacement and adhesion mockups may be necessary. Some slabs remain unsuitable without deeper remediation. We identify that risk during assessment and qualify repair allowances instead of promising that a heavier topcoat will permanently lock oil beneath the floor."
      },
      {
        "q": "What does the manufacturing bid include?",
        "a": "The scope defines area quantities, repair assumptions, preparation profile, system build-up, chemical review, cure milestones and phase boundaries. We install the basis-of-design product or an approved equal."
      }
    ],
    "photos": [
      {
        "src": industry0Photo1,
        "alt": "Manufacturing plant resin flooring for production areas in Dallas–Fort Worth"
      },
      {
        "src": industry0Photo2,
        "alt": "Industrial manufacturing floor finish for equipment and material movement"
      },
      {
        "src": industry0Photo3,
        "alt": "Manufacturing facility concrete flooring and cleanable production surface"
      }
    ]
  },
  {
    "slug": "aerospace",
    "path": "/aerospace-hangar-flooring",
    "name": "Aerospace & Hangars",
    "metaTitle": "Aerospace Hangar Epoxy Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "High-build epoxy, urethane, and ESD resin flooring for aerospace hangars, MRO facilities, and assembly bays across Dallas-Fort Worth. Chemical and fuel resistant.",
    "h1": "Aerospace & Hangars Flooring in Dallas–Fort Worth",
    "heroImage": "/lovable-uploads/701db69b-4439-4779-9115-583d175298af-1600.webp",
    "heroAlt": "Aerospace hangar floor coating for aircraft service in Dallas–Fort Worth",
    "intro": "Hangar flooring is part of the maintenance environment: technicians need to see dropped hardware, move tooling and clean aviation fluids without losing usable aircraft positions. Legacy Industrial Coatings specifies aerospace floors for hangars, MRO shops and FBOs across DFW. We balance bright white light-reflective finishes for FOD control with tug traffic, tire loading and the exact hydraulic fluids used on site. Skydrol- and jet-fuel-resistant urethane topcoats are options when the selected system’s published resistance supports those exposures. Skydrol-resistant aerospace topcoats can be considered without assuming every urethane offers equivalent protection. Our scope follows aircraft movement, maintenance access and cure requirements rather than a generic commercial coating schedule.",
    "demands": [
      "Dropped fasteners disappear against a dark or damaged hangar floor.",
      "Hydraulic fluid and jet fuel are staining the aircraft service positions.",
      "Tugs and maintenance stands keep wearing through traffic lanes.",
      "We need usable hangar positions while another bay is being refinished."
    ],
    "areas": [
      {
        "name": "Aircraft storage and service positions",
        "text": "A high-build epoxy assembly with a compatible aerospace urethane topcoat creates a bright, cleanable background around parked aircraft. White or light colors improve contrast for small objects, but do not replace the operator’s FOD inspection procedures. Confirm Skydrol and jet-fuel resistance for the complete specified system, including expected dwell time and cleanup practice. We review existing coatings and repairs before proposing removal or overcoating. Finish samples should be assessed under actual hangar lighting, not only under an office fixture.",
        "system": "Epoxy with aerospace urethane topcoat",
        "thickness": "Per approved aerospace system",
        "link": "/commercial"
      },
      {
        "name": "Tug routes and aircraft thresholds",
        "text": "Repeated tug turns and loaded wheels concentrate wear at doors, intersections and parking approaches. Specify a traffic-rated resinous assembly and reinforce the repair scope where slab edges have broken away. Threshold transitions must not create a raised lip or loose aggregate that could enter an aircraft work area. Coordinate door operation, weather exposure and staging with the FBO manager. We establish where outdoor conditions begin so an interior coating is not extended beyond its supported service environment merely to maintain visual continuity.",
        "system": "Traffic-rated resinous flooring",
        "thickness": "Manufacturer-selected traffic build-up",
        "link": "/resinous-flooring"
      },
      {
        "name": "Wash bays and wet maintenance",
        "text": "Wash water, detergents and hydraulic residues require a textured surface with deliberate drainage detailing. Urethane cement is appropriate to evaluate where thermal cycling or heavy wet service is present. The selected topcoat still needs compatibility with aviation fluids; moisture tolerance alone does not establish Skydrol resistance. Survey drain elevations, repair shoulders and define cove connections before coating. Texture is reviewed with the wash team so it offers practical traction without retaining residue that routine cleaning equipment cannot remove.",
        "system": "Urethane cement wet-service assembly",
        "thickness": "Typical 1/4 inch; final selection by exposure",
        "link": "/urethane-cement-flooring"
      },
      {
        "name": "MRO component and tooling shops",
        "text": "Benches, stands and mobile tool cabinets create a different wear pattern from aircraft storage. A chemical-resistant epoxy can provide a consistent finish while local detailing addresses parts washers, degreasers and concentrated spills. Use the maintenance chemical inventory rather than assuming fuel resistance covers every solvent. Where electronics handling introduces an ESD requirement, identify that zone separately and obtain the facility’s electrical acceptance criteria. Boundaries between assemblies should be visible in the drawings and located clear of frequently repositioned equipment.",
        "system": "Chemical-resistant epoxy",
        "thickness": "Approved shop-floor build-up",
        "link": "/commercial"
      },
      {
        "name": "Equipment positions and safety boundaries",
        "text": "Floor markings can define clearances, tool storage, pedestrian paths and keep-clear zones around fire equipment. We coordinate colors and dimensions with the operator’s own layout and applicable safety requirements instead of presenting one universal hangar pattern. Place markings only after the underlying assembly has met its recoat or cure conditions. Consider replaceable markings where aircraft mix or service operations change frequently, and keep texture or coating edges from becoming debris sources within the maintenance environment.",
        "system": "Compatible floor marking system",
        "thickness": "Per marking product and approved layout",
        "link": "/line-striping"
      }
    ],
    "standards": [
      "Aerospace chemical review covers phosphate-ester hydraulic fluids such as Skydrol, jet fuel, lubricants and cleaning agents at their actual service conditions.",
      "ICRI 310.2R surface preparation requirements and ASTM D7234 mockup adhesion testing are coordinated with the aerospace coating manufacturer.",
      "ASTM F2170 and ASTM F1869 moisture evaluation precedes product selection; temperature, relative humidity and dew point are monitored during installation.",
      "Owner FOD procedures, aircraft clearances and operational access requirements govern work isolation; a reflective coating does not itself certify a hangar."
    ],
    "faqs": [
      {
        "q": "Are all urethane topcoats resistant to Skydrol?",
        "a": "No. Phosphate-ester hydraulic fluid resistance must be confirmed for the specific topcoat and complete floor assembly. We can evaluate Skydrol-resistant aerospace topcoats as an option, alongside the basis-of-design specification. Product selection also considers fuel, cleaners, dwell times and required cure before exposure; the word urethane alone is not sufficient evidence."
      },
      {
        "q": "Why specify a bright white hangar floor?",
        "a": "A light-reflective surface improves visual contrast for hardware, leaks and housekeeping checks. It can support FOD control by helping staff identify objects against the floor, but it cannot replace inspection or cleanup procedures. We discuss glare, marking contrast and maintenance expectations with your team before approving a color and sheen under the hangar’s installed lighting."
      },
      {
        "q": "Can an FBO remain operational during the work?",
        "a": "Potentially, using separately isolated positions and an agreed aircraft movement plan. Grinding, debris control, ventilation and uncured materials must be separated from live operations. We coordinate phase boundaries with the FBO and MRO leads and confirm when personnel, tugs and aircraft may return. Occupied work is conditional on safe isolation, not an automatic promise of uninterrupted access."
      },
      {
        "q": "When can aircraft and tugs return to the floor?",
        "a": "Return timing follows the approved assembly, site conditions and type of load. Foot traffic, tug turning and prolonged tire contact may require different release points. We document these holds in the schedule and verify field conditions before turnover. the installation plan and closeout photos make those release decisions traceable."
      }
    ],
    "photos": [
      {
        "src": industry1Photo1,
        "alt": "Aerospace hangar floor coating for aircraft service in Dallas–Fort Worth"
      },
      {
        "src": industry1Photo2,
        "alt": "Aviation facility resin floor for hangar maintenance operations"
      },
      {
        "src": industry1Photo3,
        "alt": "Aerospace flooring surface for hangar traffic and equipment"
      }
    ]
  },
  {
    "slug": "healthcare",
    "path": "/healthcare-flooring",
    "name": "Healthcare",
    "metaTitle": "Healthcare & Hospital Epoxy Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Seamless, antimicrobial resin flooring for hospitals, surgery centers, labs, and clinics across Dallas-Fort Worth. Easy to clean and infection-control ready.",
    "h1": "Healthcare Flooring in Dallas–Fort Worth",
    "heroImage": industry2Photo1,
    "heroAlt": "Healthcare facility flooring with cleanable surfaces in Dallas–Fort Worth",
    "intro": "Healthcare flooring is selected as part of an infection-control and maintenance strategy, not as a standalone antimicrobial claim. Hospitals, outpatient centers and clinics need surfaces that tolerate disinfectants, rolling equipment and frequent cleaning while supporting the needs of each department. Legacy Industrial Coatings combines decorative quartz, seamless epoxy, sheet vinyl and integral cove according to clinical use and the approved design. Across Dallas–Fort Worth, we coordinate with facilities staff, infection prevention and the construction team before setting phase boundaries. An occupied renovation requires agreed isolation, dust management, ventilation and patient routes; low odor by itself is not permission to work beside patient care. Material selection and construction controls are reviewed together.",
    "demands": [
      "Our disinfectant routine is damaging seams and worn finishes.",
      "Gurneys and carts need smooth transitions without broken edges.",
      "Patient routes cannot run through dusty preparation work.",
      "We need cleanable wall junctions, not another patch at the base."
    ],
    "areas": [
      {
        "name": "Clinical support and treatment spaces",
        "text": "Seamless epoxy is an option where the design calls for a continuous, cleanable surface with controlled transitions. Confirm compatibility with the hospital’s actual disinfectants, dilution practices and contact times. Specify a finish that works with the department’s cleaning equipment rather than defaulting to the roughest texture. Around fixed cabinetry and equipment, define accessible termination points before installation. Resin flooring supports environmental cleaning, but it does not sterilize the room or remove the need for the facility’s infection-prevention procedures.",
        "system": "Healthcare epoxy assembly",
        "thickness": "Per approved clinical specification",
        "link": "/commercial"
      },
      {
        "name": "Public corridors and waiting areas",
        "text": "Decorative quartz provides a durable resin option for circulation areas that need color consistency and a practical maintenance routine. Select aggregate texture and topcoat sheen using a physical mockup with the facilities team. Rolling resistance, glare and wet entry conditions deserve review alongside appearance. We coordinate doorway profiles and adjacent resilient finishes to avoid abrupt changes for wheelchairs and carts. Construction phasing preserves the approved accessible route while each isolated section is prepared, installed and released for use.",
        "system": "Decorative quartz resin flooring",
        "thickness": "Per selected quartz build-up",
        "link": "/quartz-flooring"
      },
      {
        "name": "Patient rooms and quieter care settings",
        "text": "Commercial sheet vinyl can suit rooms where resilience underfoot, acoustics and a healthcare-specific finish schedule drive the design. The specification determines backing, adhesive, seam treatment and whether flash coving is required. Moisture testing and substrate smoothing remain essential even when the concrete will be concealed. We plan material acclimation, adhesive cure and cleaning restrictions with the department. Sheet vinyl is not interchangeable with resinous flooring; its seam and wall details need their own approved installation approach.",
        "system": "Healthcare sheet vinyl",
        "thickness": "Manufacturer-selected sheet gauge",
        "link": "/resilient-flooring"
      },
      {
        "name": "Floor-to-wall sanitary transitions",
        "text": "Integral epoxy cove removes an exposed resin-floor-to-wall corner where the design requires a continuous cleaning transition. Coordinate cove radius, height and top termination with wall protection, door frames and casework. This detail should not bridge structural movement joints or conceal damp walls. At sheet vinyl areas, use the resilient manufacturer’s compatible cove detail rather than mixing unrelated assemblies. We review penetrations and wall bases before work starts so the cleaning boundary remains deliberate around fixtures, corners and recessed equipment.",
        "system": "Integral epoxy cove base",
        "thickness": "Height and radius per approved detail",
        "link": "/epoxy-cove-base"
      },
      {
        "name": "Wet utility and equipment rooms",
        "text": "Wet support spaces may benefit from a textured urethane cement assembly when washdown, temperature variation and equipment loads justify it. Confirm the water temperature, detergent chemistry and existing drainage before finalizing depth. Drain interfaces and slopes require particular attention; a seamless coating cannot correct standing water without substrate work. Isolate these rooms from clean circulation paths during preparation and curing. The turnover inspection should include termination details and cleaning guidance, not just a visual check that the floor color is uniform.",
        "system": "Urethane cement",
        "thickness": "Typical 1/4 inch; verify room duty",
        "link": "/urethane-cement-flooring"
      }
    ],
    "standards": [
      "The facility’s infection-control risk assessment governs barriers, pressure relationships, dust control and work sequencing in occupied healthcare environments.",
      "ASTM F710 substrate requirements apply where specified for resilient flooring; ASTM F2170 and ASTM F1869 results are assessed against adhesive and coating limits.",
      "ICRI 310.2R profile selection and ASTM D7234 mockup adhesion testing support resin installation acceptance.",
      "Antimicrobial claims require product-specific evidence and owner approval; flooring is not a substitute for cleaning, disinfection or clinical infection-control practice."
    ],
    "faqs": [
      {
        "q": "Does antimicrobial flooring prevent infections?",
        "a": "Flooring alone cannot make that promise. Antimicrobial additives may be available in specified products, but any claim must be supported by that product’s evidence and reviewed by the facility. A cleanable assembly, compatible disinfectants, sound transitions and consistent cleaning practice are the core considerations. We avoid treating an additive as a replacement for infection-prevention policy."
      },
      {
        "q": "Can you work next to an occupied patient wing?",
        "a": "Only within a construction plan approved by the facility. We coordinate isolation, dust extraction, access, ventilation and scheduling with facilities and infection-prevention personnel. Some activities may require department closure or relocation. Low-VOC or low-odor materials do not eliminate exposure controls, and a published cure time does not automatically authorize patient occupancy."
      },
      {
        "q": "When is sheet vinyl preferable to epoxy?",
        "a": "Sheet vinyl may better suit a patient room’s comfort, acoustic or design requirements, while resin can suit service areas requiring a continuous coating and integral cove. We compare cleaning chemistry, rolling loads, moisture conditions and repair strategy. The architect’s finish schedule and department requirements govern the final choice, including how the two materials meet at doorways."
      },
      {
        "q": "What information is needed for a healthcare bid?",
        "a": "Provide the finish schedule, department uses, disinfectant list, infection-control requirements and available access windows. We identify preparation, substrate repairs, transitions, cove and cure restrictions in the scope. Closeout includes installation photos and maintenance information so facilities staff can maintain each surface according to its specific requirements."
      }
    ],
    "photos": [
      {
        "src": industry2Photo1,
        "alt": "Healthcare facility flooring with cleanable surfaces in Dallas–Fort Worth"
      },
      {
        "src": industry2Photo2,
        "alt": "Healthcare resin floor finish for clinical support spaces"
      },
      {
        "src": industry2Photo3,
        "alt": "Hospital flooring surface supporting routine environmental cleaning"
      }
    ]
  },
  {
    "slug": "education",
    "path": "/school-flooring",
    "name": "Education",
    "metaTitle": "School Epoxy & Polished Concrete Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Durable resin and polished concrete floors for K-12 schools, universities, labs, and gyms across Dallas-Fort Worth. Installed on summer schedules with clean punch.",
    "h1": "Education Flooring in Dallas–Fort Worth",
    "heroImage": industry3Photo1,
    "heroAlt": "School flooring finish for education facilities in Dallas–Fort Worth",
    "intro": "School floors must work for custodians long after the construction team leaves. Corridors carry students, chairs and event equipment; science rooms see small chemical spills; career and technical education shops introduce tools, oils and concentrated loads. Legacy Industrial Coatings builds school and university flooring scopes around those distinct uses instead of applying one finish across a campus. Polished concrete, chemical-resistant epoxy, decorative flake and resilient materials can each have a role. For Dallas–Fort Worth districts and higher-education teams, summer access is a planning constraint rather than a reason to skip moisture evaluation or shorten cure. We align demolition, preparation, installation and punch work with furniture moves, orientation and the first occupied day.",
    "demands": [
      "Summer access disappears quickly once other campus trades arrive.",
      "Dragged chairs and crowded corridors keep wearing out our finish.",
      "Science and CTE rooms need protection beyond a decorative coating.",
      "Custodial budgets cannot support a complicated cleaning routine."
    ],
    "areas": [
      {
        "name": "Main corridors and commons",
        "text": "Polished concrete can provide a durable exposed slab finish for circulation and gathering spaces where the existing concrete supports the desired appearance. Agree on aggregate exposure and gloss through a representative mockup. Old tile outlines, repairs and pour differences may remain visible even after grinding. Review entry soil management and cleaning procedures with custodial staff before specifying a high sheen. At doorways and transitions, address trip edges and patching as part of the flooring scope rather than leaving isolated defects for a later maintenance work order.",
        "system": "Mechanically polished concrete",
        "thickness": "No added coating thickness",
        "link": "/concrete-polishing"
      },
      {
        "name": "Science classrooms and preparation rooms",
        "text": "Chemical-resistant epoxy should be selected against the school’s teaching chemical inventory, including concentrations and cleanup intervals. A finish that tolerates routine cleaners may not tolerate concentrated acid left beneath a cabinet. Define splash zones, sink approaches and storage-room requirements separately. We coordinate the selected texture with stool movement and cleaning access. Where cabinets remain, establish termination details so future replacement does not expose untreated strips of concrete. Product data and approved samples become part of the campus maintenance record.",
        "system": "Chemical-resistant epoxy",
        "thickness": "Per laboratory exposure specification",
        "link": "/commercial"
      },
      {
        "name": "CTE shops and vocational work bays",
        "text": "Vehicle, fabrication and engineering classrooms require a review of oils, wheel loads, dropped tools and hot work. Resinous flooring may suit the room, but direct welding or hot-metal exposure needs specific protection rather than a blanket durability claim. Repair broken joint edges before installing the finish and retain required movement details. Safety zoning can separate instruction, storage and equipment clearances. Coordinate phase access with shop teachers so machinery relocation and reconnecting services are accounted for in the summer program.",
        "system": "Industrial resinous flooring",
        "thickness": "Build-up selected for shop duty",
        "link": "/resinous-flooring"
      },
      {
        "name": "Locker rooms and restroom approaches",
        "text": "Decorative flake can bring color and a cleanable surface to appropriate dry and intermittently wet support areas. Wet-service suitability, aggregate texture and topcoat selection must be confirmed for each location. Shower interiors and continuously wet zones need their own waterproofing and drainage design; a decorative flake floor alone is not that design. Detail cove and door transitions with the architect. Evaluate a sample with custodians so traction and residue removal are considered together before the installation standard is repeated across multiple buildings.",
        "system": "Decorative flake assembly",
        "thickness": "Per approved flake system",
        "link": "/flake-floors"
      },
      {
        "name": "Classrooms and specialist teaching spaces",
        "text": "Commercial resilient materials can address acoustic comfort, underfoot feel and room-specific uses where exposed concrete is not the best fit. Select among sheet vinyl, LVT, rubber or other specified finishes based on the educational program. Sports activity areas need a purpose-designed athletic specification rather than an ordinary polished floor. Substrate flatness, moisture and adhesive compatibility are reviewed before ordering materials. We coordinate furniture placement and cure restrictions so the final cleaning and classroom setup do not damage a newly installed surface.",
        "system": "Specified commercial resilient flooring",
        "thickness": "Product-specific gauge",
        "link": "/resilient-flooring"
      }
    ],
    "standards": [
      "District finish schedules, room data sheets and approved product requirements establish the basis of design; substitutions require the designated approval process.",
      "ASTM F710 substrate compliance and moisture testing to ASTM F2170 or ASTM F1869 inform resilient and coating installation decisions.",
      "ICRI 310.2R surface profiles are matched to resin assemblies; mockups establish appearance and cleaning expectations before campus-wide repetition.",
      "School safety, accessible routes and trade coordination govern closures; chemistry-room resistance is based on actual exposure data, not a universal acid-proof claim."
    ],
    "faqs": [
      {
        "q": "Can the work fit within summer break?",
        "a": "We build the sequence backward from the date furniture and students return, including substrate repairs, testing, installation and cure. Access released by other trades can be as important as coating speed. Night or weekend shifts may help, but the schedule must preserve the selected product’s requirements. We flag constraints before award instead of treating the last week of break as unlimited float."
      },
      {
        "q": "Will polished concrete hide old tile patterns?",
        "a": "Not necessarily. Adhesive shadows, patch outlines and aggregate differences can remain part of the exposed slab. A mockup is the right way to establish a realistic finish before committing a corridor or commons. If visual consistency is more important than revealing existing concrete, a resinous or resilient finish may better match the district’s expectations."
      },
      {
        "q": "What should we specify in a school chemistry lab?",
        "a": "Start with the chemical inventory, expected contact time and cleaning practice. A chemical-resistant epoxy or selected novolac may be appropriate, but neither label guarantees resistance to every reagent. We request manufacturer data for the actual exposure and clarify what areas are included, such as preparation rooms, sink surrounds and storage approaches."
      },
      {
        "q": "How do you support long-term custodial care?",
        "a": "We review the proposed finish with the district’s custodial team and provide cleaning guidance for the installed materials. The bid distinguishes initial protection from ongoing maintenance so crews do not apply an incompatible wax or aggressive cleaner. closeout photographs and product information help the district repeat the same standard on later campus phases."
      }
    ],
    "photos": [
      {
        "src": industry3Photo1,
        "alt": "School flooring finish for education facilities in Dallas–Fort Worth"
      },
      {
        "src": industry3Photo2,
        "alt": "Education facility concrete and resin floor surface"
      },
      {
        "src": industry3Photo3,
        "alt": "Campus flooring for student circulation and institutional cleaning"
      }
    ]
  },
  {
    "slug": "hotel-hospitality",
    "path": "/hotel-flooring",
    "name": "Hotel & Hospitality",
    "metaTitle": "Hotel & Hospitality Epoxy Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Polished concrete, decorative resin, and epoxy floors for hotel kitchens, back-of-house, and public areas across Dallas-Fort Worth. Guest-safe and quiet installs.",
    "h1": "Hotel & Hospitality Flooring in Dallas–Fort Worth",
    "heroImage": industry4Photo1,
    "heroAlt": "Hotel hospitality flooring for public and service areas in Dallas–Fort Worth",
    "intro": "A hotel renovation has two very different audiences: guests who judge the finish immediately and staff who clean and use it every shift. Legacy Industrial Coatings separates public-space aesthetics from back-of-house performance when planning hospitality flooring across Dallas–Fort Worth. Polished concrete and decorative resin can establish a consistent lobby language, while kitchens, dish rooms and service areas need assemblies selected for water, grease and cart traffic. Occupied work is planned with property operations, housekeeping and food service before access is promised. We account for preparation noise, guest circulation, service elevators and cure holds so a visually simple refresh does not create an avoidable operational problem behind the reception desk.",
    "demands": [
      "Guest arrivals cannot share a route with grinders and wet resin.",
      "Kitchen grease and hot wash water keep defeating patch repairs.",
      "Service carts are wearing the floor at doors and elevator landings.",
      "We need finishes housekeeping can maintain consistently every shift."
    ],
    "areas": [
      {
        "name": "Lobbies and public gathering spaces",
        "text": "Polished concrete can give the lobby a clear architectural finish without a film coating that must periodically be stripped. The slab determines the result: previous coverings, repairs and aggregate distribution should be reviewed in a mockup. Match sheen to lighting, furnishings and entry conditions rather than choosing maximum gloss by default. We coordinate protection from luggage carts and follow-on trades after finishing. A maintenance plan should address entrance grit, spill response and appropriate cleaning pads before the renovated lobby returns to regular guest traffic.",
        "system": "Polished concrete",
        "thickness": "No added film thickness",
        "link": "/concrete-polishing"
      },
      {
        "name": "Production kitchens and dish rooms",
        "text": "Urethane cement is a candidate for hot water, grease and frequent cleaning where a thin decorative coating would be poorly matched to service. Typical 1/4-inch thickness is a starting allowance, with final selection tied to temperature and chemical exposure. Survey slopes, drain shoulders and equipment access before pricing. The floor assembly includes compatible terminations and cove where required by the design. We coordinate food-service shutdowns and final cleaning so the kitchen does not resume operation before the material is ready for its actual duty.",
        "system": "Urethane cement",
        "thickness": "Typical 1/4 inch; exposure-dependent",
        "link": "/urethane-cement-flooring"
      },
      {
        "name": "Service corridors and housekeeping routes",
        "text": "A decorative broadcast resin can provide a consistent finish under linen carts, housekeeping equipment and frequent mopping. Pay special attention to service-elevator thresholds and corners where wheels turn under load. Texture should offer practical traction without snagging cleaning tools or retaining lint. Repairs to damaged joints and transitions are included before coating. We sequence corridors with hotel operations so each phase retains approved staff access, deliveries and emergency routes while guests remain separated from construction activity and uncured surfaces.",
        "system": "Decorative resinous flooring",
        "thickness": "Per selected broadcast assembly",
        "link": "/resinous-flooring"
      },
      {
        "name": "Laundry and wet utility areas",
        "text": "Wet utility rooms need a chemical and thermal review that reflects laundry detergents, cleaning products and equipment discharge. Urethane cement may be suitable where exposure and temperature cycling justify it. Evaluate vibration, equipment anchors and drain connections separately from the general floor finish. Leaks and standing water need correction at their source; coating cannot repair a failed appliance connection or inadequate slope. Confirm cure before moving heavy equipment back into place, including protection beneath dollies and procedures for reconnecting services without damaging the new assembly.",
        "system": "Wet-service urethane cement",
        "thickness": "Manufacturer-selected duty thickness",
        "link": "/urethane-cement-flooring"
      },
      {
        "name": "Guest support rooms and amenity interiors",
        "text": "Decorative flake offers a color-controlled option for selected storage, restroom approaches and amenity support areas. Specify the complete assembly for the actual use, with a topcoat and texture approved by property management. It should not be extended into exterior decks or wet leisure areas without the relevant waterproofing and safety design. Review transitions to carpet, tile and resilient flooring early. A consistent sample and documented color blend help preserve the hospitality brand when later renovations add rooms or repeat the finish at another property.",
        "system": "Decorative flake resin system",
        "thickness": "Per approved decorative assembly",
        "link": "/flake-floors"
      }
    ],
    "standards": [
      "ICRI 310.2R preparation profiles and manufacturer substrate requirements establish the resin installation baseline for each hotel service area.",
      "ASTM F2170 and ASTM F1869 moisture evaluation informs coating and adhesive selection before ordering; manufacturer acceptance limits control.",
      "Kitchen cleanability and local health requirements are reviewed with the project team; no generic floor product automatically certifies an operating kitchen.",
      "Occupied-property plans address guest separation, ventilation, noise windows and accessible circulation; low odor is not a substitute for isolation."
    ],
    "faqs": [
      {
        "q": "Can you renovate while the hotel remains open?",
        "a": "Often the work can be divided into isolated zones, but suitability depends on layout, ventilation and available alternate routes. We review guest arrivals, service deliveries and emergency access with property management before committing to a phase plan. Noise-intensive preparation may need a different window from coating installation. Some spaces will still require a complete temporary closure."
      },
      {
        "q": "Which floor works best behind the kitchen line?",
        "a": "We evaluate urethane cement for wet, greasy and thermally demanding areas, with the final assembly based on actual service conditions. Drain details, cove and preparation quality matter as much as the material name. A decorative lobby coating is not automatically suitable behind cooking equipment, and any chemical-resistant topcoat needs compatibility with the kitchen’s cleaning program."
      },
      {
        "q": "Can housekeeping use its existing cleaning products?",
        "a": "We review the product list before selecting the finish and provide guidance for the approved assembly. An aggressive cleaner, incorrect dilution or unsuitable pad can change appearance or shorten service life. Where the property needs one standardized routine, we consider that during selection rather than asking housekeeping to improvise a new process after installation."
      },
      {
        "q": "How do you price a phased hospitality project?",
        "a": "The bid identifies individual work zones, mobilizations, repairs, protection, cure holds and operational constraints. That makes the cost of keeping selected spaces open visible instead of hiding it in assumptions. Photo documentation and a final punch walk give engineering staff a record of transitions, repairs and the finished installation."
      }
    ],
    "photos": [
      {
        "src": industry4Photo1,
        "alt": "Hotel hospitality flooring for public and service areas in Dallas–Fort Worth"
      },
      {
        "src": industry4Photo2,
        "alt": "Hospitality facility floor finish for operational circulation"
      },
      {
        "src": industry4Photo3,
        "alt": "Hotel interior concrete and resin flooring surface"
      }
    ]
  },
  {
    "slug": "multifamily",
    "path": "/multifamily-flooring",
    "name": "Multifamily",
    "metaTitle": "Multifamily Epoxy Garage & Breezeway Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Epoxy, deck coatings, and polished concrete for multifamily garages, breezeways, and amenity areas across Dallas-Fort Worth. Turn-and-burn schedules welcome.",
    "h1": "Multifamily Flooring in Dallas–Fort Worth",
    "heroImage": industry5Photo1,
    "heroAlt": "Multifamily property flooring for residential common areas in Dallas–Fort Worth",
    "intro": "Multifamily flooring decisions affect residents, maintenance teams and the owner’s long-term repair exposure. A decorative finish on a ground-floor amenity slab is not the same scope as waterproofing an elevated breezeway over occupied space. Legacy Industrial Coatings assesses those conditions separately for Dallas–Fort Worth apartment communities and mixed-use properties. We plan garage traffic coatings, pedestrian deck systems, trash-room finishes and amenity floors around the building assembly and resident access. Before choosing colors, we identify leaks, failed joints, concrete damage and transitions that need design input. The resulting scope makes phasing and protection visible so property management can communicate realistic closures instead of discovering access restrictions after materials arrive.",
    "demands": [
      "Residents need a clear route home during every work phase.",
      "Water is getting through an elevated walkway into spaces below.",
      "Trash-room cleaning leaves the concrete stained and difficult to maintain.",
      "We need a repeatable finish across buildings without recurring patchwork."
    ],
    "areas": [
      {
        "name": "Elevated breezeways and walkways",
        "text": "Use a pedestrian waterproof traffic system where the assembly calls for waterproofing above occupied or vulnerable space. Legacy Pedestrian Deck is an option with a published standard total of 32 dry mils, subject to the approved specification. Inspect cracks, penetrations, edges and drain details before defining the coating scope. Water must be directed to a functioning outlet; a membrane cannot create drainage by itself. Coordinate door clearances and accessible thresholds with the project team before adding a traffic assembly to an existing elevated walkway.",
        "system": "Pedestrian waterproof traffic coating",
        "thickness": "Legacy Pedestrian Deck standard: 32 dry mils",
        "link": "/deck-coatings"
      },
      {
        "name": "Parking decks and garage ramps",
        "text": "Garage floors see tire wear, turning loads, oils and water carried in by vehicles. A vehicular traffic coating must be selected for the structure and exposure, not substituted with decorative epoxy merely because both products are called coatings. Legacy High Traffic Urethane standard and heavy-duty assemblies have published totals of 40 and 52 dry mils excluding primer and aggregate. Ramps and turns may need the heavier assembly. Establish vehicle relocation and re-entry timing before mobilization so uncured work is not exposed to resident traffic.",
        "system": "Vehicular waterproof traffic coating",
        "thickness": "Legacy High Traffic Urethane: 40 or 52 dry mils",
        "link": "/deck-coatings"
      },
      {
        "name": "Trash rooms and service enclosures",
        "text": "A textured epoxy assembly can improve cleanability where refuse liquids and cleaning products otherwise soak into concrete. Review the actual detergents and expected spill dwell time before selecting the topcoat. Integral cove and sealed penetrations need coordinated details; floor coating alone cannot stop moisture entering through walls or failed plumbing. Include repairs at bin-wheel paths and thresholds where heavy containers turn. Choose texture with the maintenance team so the surface can be cleaned thoroughly without leaving organic residue trapped in an overly aggressive profile.",
        "system": "Chemical-resistant epoxy",
        "thickness": "Per approved service-room build-up",
        "link": "/commercial"
      },
      {
        "name": "Indoor amenity and community rooms",
        "text": "Polished concrete can suit lounge, meeting and gathering areas when the slab’s appearance matches the design intent. Review patching, previous adhesive and aggregate variation in a sample before committing an occupied community room. Noise and dust control during preparation require a resident communication plan even when the finished surface has no coating cure. Protect the completed floor from furniture moves and follow-on trades. Discuss routine cleaning, entrance mats and periodic finish care so the amenity remains maintainable after the renovation team leaves the property.",
        "system": "Polished concrete",
        "thickness": "No added coating thickness",
        "link": "/concrete-polishing"
      },
      {
        "name": "Ground-level support and maintenance rooms",
        "text": "Decorative flake can provide a consistent, repairable finish for selected indoor support rooms and maintenance spaces. Confirm that the substrate is on grade and that no waterproofing obligation is being assigned to an ordinary decorative system. Specify compatible topcoats for cleaners and stored materials, and retain movement joints with appropriate details. For portfolio work, record blend, sheen and preparation requirements rather than relying on a remembered color name. That documentation allows later buildings to follow the same finish standard without assuming identical substrate conditions.",
        "system": "Decorative flake flooring",
        "thickness": "Per manufacturer-approved assembly",
        "link": "/flake-floors"
      }
    ],
    "standards": [
      "Traffic coating submittals define complete membrane, wear coat and topcoat assemblies; published thickness excludes layers identified as excluded by the manufacturer.",
      "ICRI 310.2R preparation profiles and ASTM D7234 mockup adhesion testing support substrate acceptance before resin installation.",
      "ASTM F2170 and ASTM F1869 moisture evaluation is interpreted against the selected system, while existing leakage requires separate investigation.",
      "Property management approves notices, access and emergency circulation; waterproofing details must coordinate movement joints, drains and structural conditions."
    ],
    "faqs": [
      {
        "q": "Will flake epoxy waterproof an elevated breezeway?",
        "a": "Not by itself. A decorative coating is not interchangeable with a designed pedestrian waterproof traffic assembly. We review the substrate, space below, drains, movement joints and existing leakage before recommending a system. If a waterproof membrane is required, the specification must include the complete approved assembly and its transitions rather than just a decorative top surface."
      },
      {
        "q": "How do you keep residents moving through the property?",
        "a": "We coordinate building-by-building closures, alternate paths, notices and re-entry requirements with management. The plan must preserve approved emergency access and avoid routing residents across preparation or uncured coatings. Some layouts need temporary relocation or broader closures. We identify those limitations during scoping rather than promising that every corridor can always remain partially open."
      },
      {
        "q": "Can you coat over an old garage finish?",
        "a": "Only when the existing material, adhesion and compatibility justify it. Failed, contaminated or unidentified coatings may require removal. A mockup can help evaluate the proposed preparation and bond, but it does not repair structural damage or active water intrusion. The bid states removal assumptions and repair allowances so the owner can compare scopes accurately."
      },
      {
        "q": "What should a portfolio flooring standard include?",
        "a": "Record system name, approved build-up, color, texture, repair details, maintenance instructions and release conditions. Each building still needs substrate evaluation and moisture review. We can phase installations to that documented standard across a property program. closeout photos help maintenance teams distinguish new work from pre-existing defects and plan future repairs."
      }
    ],
    "photos": [
      {
        "src": industry5Photo1,
        "alt": "Multifamily property flooring for residential common areas in Dallas–Fort Worth"
      },
      {
        "src": industry5Photo2,
        "alt": "Apartment community floor finish for shared circulation"
      },
      {
        "src": industry5Photo3,
        "alt": "Multifamily facility concrete and coating surface"
      }
    ]
  },
  {
    "slug": "office-corporate",
    "path": "/office-flooring",
    "name": "Office & Corporate",
    "metaTitle": "Office & Corporate Polished Concrete Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Polished concrete and decorative resin floors for corporate offices, lobbies, and workspaces across Dallas-Fort Worth. Modern finishes, clean installs.",
    "h1": "Office & Corporate Flooring in Dallas–Fort Worth",
    "heroImage": industry6Photo1,
    "heroAlt": "Office corporate flooring for workplace interiors in Dallas–Fort Worth",
    "intro": "Corporate flooring needs to reconcile design intent with the way a workplace actually operates. Reception areas establish a first impression, open offices need acoustic consideration, and service rooms encounter cleaning products and concentrated wear. Legacy Industrial Coatings plans polished concrete, decorative resin and commercial resilient finishes for Dallas–Fort Worth offices and corporate campuses. We begin with substrate conditions, occupancy and the architect’s finish schedule, then define appearance through samples instead of promising a uniform concrete surface that the existing slab cannot deliver. Tenant improvements also require coordination with IT, furniture installers and building management. Floor preparation, ventilation and access are scheduled as construction activities, not assumed to be invisible simply because the selected finish is low odor.",
    "demands": [
      "We want exposed concrete without surprises from old adhesive or repairs.",
      "Employees cannot walk through active grinding and coating zones.",
      "The lobby finish has to match the design without becoming hard to maintain.",
      "Furniture and IT move-in dates leave little tolerance for unclear cure holds."
    ],
    "areas": [
      {
        "name": "Reception and corporate lobbies",
        "text": "Mechanical polishing can expose an existing slab in a way that supports a restrained, architectural design. Agree on aggregate exposure, gloss and acceptable variation with a representative mockup. Patch colors, pour boundaries and old floor-covering shadows may remain visible. Coordinate entry matting, elevator thresholds and the path of delivered furniture before finishing. High sheen is not automatically the best choice under every lighting layout; evaluate glare and cleaning expectations together so the selected appearance remains practical for reception staff and facility maintenance.",
        "system": "Polished concrete",
        "thickness": "No added coating film",
        "link": "/concrete-polishing"
      },
      {
        "name": "Open offices and meeting suites",
        "text": "Carpet tile, LVT and other commercial resilient finishes can address acoustic and underfoot preferences that exposed concrete cannot provide alone. The final material follows the room use, design requirements and maintenance program. Verify substrate flatness, moisture and adhesive compatibility before installation, especially where old coverings have concealed cracks or patchwork. Coordinate transitions with adjacent polished or resinous surfaces. The work sequence should include furniture staging, acclimation and adhesive cure so a fast tenant move does not introduce rolling loads before the installed material is ready.",
        "system": "Commercial resilient flooring",
        "thickness": "Product-specific finish gauge",
        "link": "/resilient-flooring"
      },
      {
        "name": "Break rooms and employee support spaces",
        "text": "Decorative flake offers color control and a cleanable resin surface for suitable interior support rooms. Review spills, chair movement and the planned cleaning products before specifying texture or topcoat. Too much texture can complicate routine mopping, while an overly smooth finish may be unsuitable where water is regularly tracked. Coordinate base details and appliance connections in advance. Sample approval should include the full finish rather than a loose flake blend, because topcoat sheen and aggregate coverage change how the room looks under installed lighting.",
        "system": "Decorative flake resin flooring",
        "thickness": "Per selected decorative build-up",
        "link": "/flake-floors"
      },
      {
        "name": "Feature areas and design-led interiors",
        "text": "Decorative resin can provide a continuous finish where the design calls for an opaque surface or an accent not achievable by exposing the slab. Establish the approved appearance through a mockup, particularly for effects that naturally vary during application. Identify existing movement joints and carry the required details through the finish rather than promising an uninterrupted surface everywhere. Protect adjacent glazing, wall finishes and millwork during preparation. We coordinate installation after moisture and substrate acceptance so visual decisions are not undermined by avoidable bonding or contamination problems.",
        "system": "Decorative resinous flooring",
        "thickness": "Per approved design assembly",
        "link": "/resinous-flooring"
      },
      {
        "name": "Facility and building service rooms",
        "text": "Epoxy can provide a cleanable service finish around maintenance equipment and stored supplies when chemical and traffic conditions are suitable. Review housekeeping products, potential spills and equipment loads separately from the office appearance specification. Repairs to worn concrete and damaged joint edges belong in the base scope. Rooms with standing water or leaks need correction before coating. Detail transitions at doorways so service carts move without catching an edge, and provide clear maintenance guidance rather than assuming the lobby cleaning process suits every back-of-house floor.",
        "system": "Service-area epoxy",
        "thickness": "Per specified maintenance-room assembly",
        "link": "/commercial"
      }
    ],
    "standards": [
      "ASTM F710 substrate compliance applies to specified resilient work; adhesive and material manufacturers establish acceptance criteria.",
      "ASTM F2170 and ASTM F1869 moisture testing informs finish selection and whether a manufacturer-approved mitigation assembly is required.",
      "ICRI 310.2R surface profiles are matched to resin specifications; polished concrete appearance is established by mockup rather than a coating thickness.",
      "Building management approves work hours, ventilation and occupant separation; low-VOC products do not remove the need for construction controls."
    ],
    "faqs": [
      {
        "q": "Can you polish concrete in an occupied office?",
        "a": "Potentially, where work can be isolated and noise, dust extraction and ventilation are acceptable to building management. HEPA-connected preparation equipment reduces dust but does not make grinding invisible or silent. We coordinate around employees, IT and access requirements. Some layouts need after-hours work or a temporary vacancy rather than promising full occupancy throughout the installation."
      },
      {
        "q": "Will every room have the same concrete appearance?",
        "a": "Existing concrete varies with placement, aggregate, repair history and previous finishes. A mockup helps define the achievable range and identify adhesive shadows or patch differences. If the design requires a more uniform color, decorative resin or resilient flooring may be a better fit. We discuss that choice before the finish is specified across an entire tenant floor."
      },
      {
        "q": "How do you coordinate with tenant improvement trades?",
        "a": "We define substrate handoff, testing, installation and protection milestones with the GC and building team. Furniture, millwork and IT crews need to know when each area can accept traffic and rolling loads. The scope also addresses repairs exposed by demolition. This makes flooring a planned sequence rather than a final activity squeezed between inspections and move-in."
      },
      {
        "q": "What maintenance does polished concrete need?",
        "a": "Use the installed finish manufacturer’s recommended cleaner, suitable pads and a plan for grit removal at entrances. Periodic guard renewal or burnishing may be appropriate depending on traffic and the chosen treatment. It is not maintenance-free. We provide finish information and closeout photos; a"
      }
    ],
    "photos": [
      {
        "src": industry6Photo1,
        "alt": "Office corporate flooring for workplace interiors in Dallas–Fort Worth"
      },
      {
        "src": industry6Photo2,
        "alt": "Corporate facility polished concrete and resin floor finish"
      },
      {
        "src": industry6Photo3,
        "alt": "Office flooring surface for professional workspaces"
      }
    ]
  },
  {
    "slug": "retail",
    "path": "/retail-flooring",
    "name": "Retail",
    "metaTitle": "Retail Epoxy & Polished Concrete Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Polished concrete, decorative resin, and epoxy floors for retail stores, showrooms, and shopping centers across Dallas-Fort Worth. Overnight install available.",
    "h1": "Retail Flooring in Dallas–Fort Worth",
    "heroImage": industry7Photo1,
    "heroAlt": "Retail store flooring for customer spaces in Dallas–Fort Worth",
    "intro": "Retail floors have to express the brand while surviving stock movement, shoppers and daily cleaning. The right finish for a sales floor may be wrong behind receiving doors or beneath a wet cleaning station. Legacy Industrial Coatings scopes polished concrete, decorative resin and supporting floor repairs for stores and showrooms across Dallas–Fort Worth. We work from the approved brand standard, then evaluate what the slab and trading schedule will actually support. Overnight access can be useful, but removal, repairs and cure determine whether an entire area can reopen the next morning. For repeat locations, we document finish criteria and site-specific exceptions so consistency comes from an agreed specification rather than an unrealistic assumption that every store starts with the same concrete.",
    "demands": [
      "We need a brand-consistent finish across stores with different slabs.",
      "Our overnight window cannot absorb unexpected removal and repair work.",
      "Stock carts keep damaging thresholds and worn joint edges.",
      "The floor looks dirty even after the closing crew has cleaned it."
    ],
    "areas": [
      {
        "name": "Sales floors and customer circulation",
        "text": "Polished concrete can provide a durable exposed surface where slab condition and the brand’s visual language align. Approve aggregate exposure, gloss and visible repair expectations before full production. Previous tile layouts, adhesive shadows and patching may remain evident after grinding. Review entrance soil control and cleaning equipment with store operations so appearance is maintainable through a busy trading week. Coordinate display protection and fixture moves; polished work should not be treated as an unprotected staging area for later installation crews and delivered merchandising units.",
        "system": "Polished concrete",
        "thickness": "No added coating thickness",
        "link": "/concrete-polishing"
      },
      {
        "name": "Showrooms and branded feature zones",
        "text": "Decorative resin offers an opaque or color-led finish where a store needs a more controlled appearance than exposed concrete can provide. Select the complete assembly based on traffic, cleaning chemicals and lighting, then approve a mockup. Feature effects can vary during application, so define acceptable variation rather than promising an identical pattern everywhere. Map movement joints and transitions before the layout is finalized. We coordinate fixture bases and boundaries so future merchandising changes do not reveal untreated islands or awkward edges beneath relocated display equipment.",
        "system": "Decorative resinous flooring",
        "thickness": "Per approved brand assembly",
        "link": "/resinous-flooring"
      },
      {
        "name": "Receiving and stock handling",
        "text": "Stockrooms need a surface suited to delivery carts, pallet movement and concentrated turning at doors. A traffic-rated epoxy can be appropriate when the substrate and expected duty support it. Repair spalls and assess joint edges before coating; a fresh finish will not strengthen unsupported broken concrete. Review oils, packaging residues and cleaning procedures that may affect bond or traction. Schedule receiving access separately from the customer area so a reopened sales floor does not rely on moving freight across uncured work at the back of the store.",
        "system": "Traffic-rated epoxy",
        "thickness": "Manufacturer-selected traffic build-up",
        "link": "/commercial"
      },
      {
        "name": "Restrooms and customer support areas",
        "text": "Decorative quartz provides a color-blended resin option for selected support spaces requiring cleanability and texture. Confirm wet-service suitability and coordinate base, penetrations and drainage where present. The right aggregate profile balances traction with the store’s ability to remove soil using its normal equipment. Sample the finished system under actual lighting, including the topcoat. Repairs and transition profiles should be priced with the floor so restroom doors and accessible routes remain functional rather than being adjusted after a thicker assembly has already been installed.",
        "system": "Decorative quartz flooring",
        "thickness": "Per specified quartz system",
        "link": "/quartz-flooring"
      },
      {
        "name": "Damaged joints and cart routes",
        "text": "Joint filling and crack repair can improve wheel passage where small carts repeatedly strike broken edges. First distinguish static cracks, control joints and moving joints; they do not share one repair detail. Use an appropriate semi-rigid filler where specified and preserve movement provisions required by the slab design. Color and appearance should be reviewed against the adjacent finish. We include protection and cure restrictions for repaired areas because loading a new repair too early can compromise it even when the surrounding sales floor remains open.",
        "system": "Joint filling and crack repair",
        "thickness": "Depth and profile per repair detail",
        "link": "/joint-filling-crack-repair"
      }
    ],
    "standards": [
      "Brand finish standards and approved mockups establish color, sheen, texture and acceptable existing-slab variation for each rollout.",
      "ASTM F2170 and ASTM F1869 moisture evaluation precedes resin selection; moisture mitigation is specified only as a compatible approved assembly.",
      "ICRI 310.2R profile requirements and manufacturer recoat windows govern resin preparation and installation sequencing.",
      "Store access plans preserve approved accessible circulation and emergency routes; return-to-trading decisions follow the actual product and field conditions."
    ],
    "faqs": [
      {
        "q": "Can the whole store be finished overnight?",
        "a": "Not automatically. Overnight work is possible for suitable scopes, but demolition, contamination, repairs, moisture conditions and cure can exceed one trading gap. We assess those activities separately and may recommend a phased program. A fast-curing product does not eliminate preparation time or authorize early loading by fixtures and stock carts."
      },
      {
        "q": "How do you keep multiple stores visually consistent?",
        "a": "We use approved samples and record system, color, aggregate exposure where applicable, sheen and maintenance requirements. Each location still receives a substrate review and a documented exception list. Existing concrete can vary substantially between stores. Where strict uniformity is essential, an opaque resin or specified resilient finish may be more predictable than polishing every slab to the same nominal grit."
      },
      {
        "q": "Can we keep our current cleaning equipment?",
        "a": "We review the machine, pads, brushes and chemical products during selection. That helps avoid a finish that requires a cleaning process the store cannot sustain. Texture, soil load and entry matting all affect appearance. Turnover includes product-specific maintenance guidance so the opening team does not immediately use an incompatible cleaner or aggressive pad."
      },
      {
        "q": "What goes into a retail flooring proposal?",
        "a": "The proposal defines access windows, protection, removal, repairs, preparation, finish criteria and reopening restrictions by area. For rollout programs it also identifies the documentation needed to repeat the standard. Installation photos and a punch review give facilities staff a clear record for future maintenance and later store phases."
      }
    ],
    "photos": [
      {
        "src": industry7Photo1,
        "alt": "Retail store flooring for customer spaces in Dallas–Fort Worth"
      },
      {
        "src": industry7Photo2,
        "alt": "Retail facility concrete and resin floor finish"
      },
      {
        "src": industry7Photo3,
        "alt": "Commercial retail flooring surface for shopping and display areas"
      }
    ]
  },
  {
    "slug": "agriculture-facilities",
    "path": "/agriculture-facility-flooring",
    "name": "Agriculture",
    "metaTitle": "Agriculture & Food Facility Epoxy Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "Sanitary urethane cement, epoxy, and quartz resin floors for agriculture, food processing, and wash-down facilities across Dallas-Fort Worth. USDA and FDA friendly.",
    "h1": "Agriculture Flooring in Dallas–Fort Worth",
    "heroImage": industry8Photo1,
    "heroAlt": "Agriculture facility flooring for cleanable operations in Dallas–Fort Worth",
    "intro": "Agricultural facilities combine wet cleaning, organic residues, stored chemicals and equipment movement in ways that ordinary commercial finishes may not tolerate. Legacy Industrial Coatings evaluates floors for agricultural support, handling and processing environments across Dallas–Fort Worth according to their actual operating conditions. Urethane cement, chemical-resistant epoxy and quartz resin can each serve a role, but the specification must distinguish dry storage from hot washdown and chemical mixing. We review sanitation procedures, temperature changes, drainage and available shutdown windows before proposing a build-up. USDA or FDA-related facility requirements are addressed through project-specific documentation and owner review; calling a coating sanitary does not certify the operation or replace its food-safety and cleaning program.",
    "demands": [
      "Wash water and organic residue are breaking down exposed concrete.",
      "We need traction without a texture that traps material after cleaning.",
      "Chemicals in storage and mixing areas need a different level of protection.",
      "Seasonal work leaves narrow windows for floor repairs and curing."
    ],
    "areas": [
      {
        "name": "Wet handling and washdown rooms",
        "text": "Urethane cement is an option where regular washdown, temperature cycling and heavy service demand more than a thin coating. Typical 1/4-inch thickness is a planning reference, with the final assembly selected against water temperature, process exposure and manufacturer data. Inspect drains and slopes before work begins; a new finish cannot move standing water without a suitable substrate profile. Detail termination grooves, equipment bases and cove as one assembly. Review cleaning access so organic material can be removed from edges rather than accumulating behind poorly connected floor components.",
        "system": "Urethane cement",
        "thickness": "Typical 1/4 inch; verify service conditions",
        "link": "/urethane-cement-flooring"
      },
      {
        "name": "Dry stores and equipment support",
        "text": "Sealed and densified concrete can suit dry storage and equipment areas where reducing dust is the objective and a chemical barrier is not required. Review abrasion, slab wear and cleaning needs before choosing the treatment. This is not a substitute for a resistant lining beneath aggressive chemicals, nor does it waterproof the building. Repair localized damage and assess joints where carts or equipment cross repeatedly. Identify the intended use in the scope so an economical dry-area treatment is not later expected to perform like a wet-processing resin assembly.",
        "system": "Sealed and densified concrete",
        "thickness": "Penetrating treatment; no nominal film build",
        "link": "/concrete-sealing"
      },
      {
        "name": "Chemical mixing and storage boundaries",
        "text": "Containment linings need selection against the actual stored substances, concentration, temperature and expected contact duration. Depending on exposure, a chemical-resistant epoxy or novolac may be considered. Include curbs, trenches, sumps and penetrations in the review rather than coating only the visible horizontal slab. Confirm containment geometry and any design requirements with the owner’s engineer. Prepare and inspect repaired concrete before applying the lining, and specify continuity testing when required by the approved system rather than assuming color coverage demonstrates a reliable chemical boundary.",
        "system": "Chemical-resistant containment lining",
        "thickness": "Exposure-specific approved build-up",
        "link": "/secondary-containment-coatings"
      },
      {
        "name": "Packing and clean support areas",
        "text": "Decorative quartz may provide a durable, cleanable resin finish in appropriately specified handling and support rooms. Match aggregate texture and topcoat to traffic, soil and cleaning method. A visually attractive broadcast system is not automatically suitable for hot washdown or every sanitizer. We review the room’s process and cleaning inventory before selecting it. Coordinate joints, bases and door transitions so the finished surface remains practical for carts and hygiene routines. Where the facility follows a documented sanitation plan, submit the proposed finish for the owner’s review before procurement.",
        "system": "Quartz broadcast resin flooring",
        "thickness": "Per selected quartz assembly",
        "link": "/quartz-flooring"
      },
      {
        "name": "Sanitary wall and equipment interfaces",
        "text": "Integral cove can connect a compatible resin floor to walls and housekeeping bases where the design requires a cleanable transition. Specify height, radius and top termination to suit wall construction and cleaning access. Cove does not solve active water entry, missing slope or structural movement. Inspect substrate condition around door frames and equipment pads before installation, since these are common places for interrupted details. We coordinate the interface with the main floor system so maintenance staff receive one coherent cleaning boundary rather than a sequence of unrelated patches.",
        "system": "Integral epoxy cove base",
        "thickness": "Profile and height per approved detail",
        "link": "/epoxy-cove-base"
      }
    ],
    "standards": [
      "Owner sanitation plans and applicable facility requirements govern cleanability review; product selection is not a blanket USDA or FDA facility approval.",
      "Chemical-resistance documentation identifies actual stored and process substances, including concentration, service temperature and contact duration.",
      "ASTM F2170 and ASTM F1869 moisture evaluation and ICRI 310.2R surface-profile selection support resin preparation requirements.",
      "ASTM D7234 mockup adhesion checks and ambient temperature, humidity and dew-point records support quality control for the specified installation."
    ],
    "faqs": [
      {
        "q": "Is urethane cement suitable for every agricultural room?",
        "a": "No. It is a strong candidate for demanding wet and thermally cycled areas, but final selection depends on chemical exposure, loading and the chosen product’s data. Dry storage may not need that level of assembly. We separate operating zones so the owner can invest in wet-service protection where required without assigning one material to every use."
      },
      {
        "q": "Can you provide a USDA- or FDA-approved floor?",
        "a": "We provide product documentation for the owner and design team to evaluate against the facility’s requirements. Regulatory compliance involves the full operation, detailing, sanitation and inspection context; a generic floor label does not certify a facility. We avoid blanket approval claims and define exactly which product information and installation details are included in the submittal."
      },
      {
        "q": "How do you balance traction and cleanability?",
        "a": "We consider the actual residue, water exposure, footwear and cleaning tools, then review an appropriate texture sample with the operations team. More aggregate is not always better if it prevents thorough soil removal. Drainage and housekeeping remain important. The final specification should establish a maintainable surface rather than relying on an unsupported universal slip-proof claim."
      },
      {
        "q": "Can installation fit a seasonal shutdown?",
        "a": "We plan backward from the required return to service, accounting for equipment relocation, preparation, substrate repair and cure before wet cleaning or chemical exposure. Night or weekend shifts may help where access allows. Closeout photos and maintenance guidance support later repairs during the next available seasonal window."
      }
    ],
    "photos": [
      {
        "src": industry8Photo1,
        "alt": "Agriculture facility flooring for cleanable operations in Dallas–Fort Worth"
      },
      {
        "src": industry8Photo2,
        "alt": "Agricultural support facility resin and concrete floor surface"
      },
      {
        "src": industry8Photo3,
        "alt": "Agriculture facility floor finish for handling and maintenance areas"
      }
    ]
  },
  {
    "slug": "electronics-manufacturing",
    "path": "/electronics-manufacturing-flooring",
    "name": "Semiconductor & Electronics",
    "metaTitle": "Semiconductor & Electronics Manufacturing Flooring DFW | Legacy Industrial Coatings",
    "metaDescription": "ESD, cleanroom and chemical-resistant flooring for semiconductor and electronics manufacturing across Dallas-Fort Worth. ANSI/ESD S20.20 systems, installed to spec.",
    "h1": "Semiconductor & Electronics Flooring in Dallas–Fort Worth",
    "heroImage": industry9Photo1,
    "heroAlt": "Data center facility reference image for electronics flooring planning",
    "intro": "Semiconductor and electronics flooring must support the process engineer’s requirements, not simply carry an ESD label. Device sensitivity, personnel grounding, cleanroom protocols and wet-process chemistry create different duties within the same building. Legacy Industrial Coatings scopes conductive and static-dissipative resin, cleanroom finishes and chemical-resistant linings for manufacturing facilities across Dallas–Fort Worth. We have specified PIP InhibiStat-type conductive systems, with the final assembly and acceptance criteria coordinated to the owner’s ANSI/ESD S20.20 control program. North Texas growth includes TI and GlobalWafers fabs in Sherman. That investment reinforces the need for installation documentation, reliable interfaces and exposure-specific material selection rather than generic claims that one floor satisfies every production area.",
    "demands": [
      "We need measured electrical performance, not just an ESD product label.",
      "Our wet-process acids require verified resistance at trenches and sumps.",
      "Cleanroom construction cannot tolerate uncontrolled dust from floor preparation.",
      "Tool moves and qualification dates depend on clear installation release points."
    ],
    "areas": [
      {
        "name": "Electronics assembly and ESD protected areas",
        "text": "Conductive resin flooring is selected as a component of the facility’s electrostatic discharge control program. PIP InhibiStat-type conductive systems are an option we have specified, subject to the approved basis of design and current manufacturer data. Define grounding connections, footwear assumptions and acceptance testing before installation. Resistance measurements alone do not establish performance of every personnel grounding arrangement. Coordinate the finished floor with the ESD program owner so the specified tests and documented results address the actual use rather than a generic product brochure range.",
        "system": "Conductive ESD resin flooring",
        "thickness": "Per approved conductive system build-up",
        "link": "/esd-static-control-flooring"
      },
      {
        "name": "Cleanroom circulation and controlled support",
        "text": "A seamless resinous finish can support a cleanable controlled environment when selected for the cleaning chemicals, wheel loads and particle-control requirements. Cleanroom suitability is project-specific; a floor coating does not establish the room’s classification. Define surface texture, cove, penetrations and maintenance methods in the submittal. Preparation requires an isolation and cleanup plan that respects adjacent sensitive operations. Coordinate turnover with the cleanroom team so material cure, final cleaning and environmental qualification remain separate milestones rather than being compressed into a single statement that the floor is ready.",
        "system": "Cleanroom resinous flooring",
        "thickness": "Per cleanroom finish specification",
        "link": "/resinous-flooring"
      },
      {
        "name": "Wet process and acid handling rooms",
        "text": "Acid-resistant flooring requires a detailed exposure schedule covering every relevant chemistry, concentration, temperature and contact duration. Selected novolac or other chemical-resistant resin may suit particular duties, but no blanket acid-proof claim is appropriate. Review splash zones, curbs, equipment footprints and emergency drainage with the process team. Test and repair the concrete before lining, especially where prior exposure has weakened the substrate. The approved chemical-resistance data and maintenance procedures should identify limitations so operators know how quickly spills must be removed to preserve the assembly.",
        "system": "Exposure-selected chemical-resistant lining",
        "thickness": "Manufacturer-approved chemical duty build-up",
        "link": "/secondary-containment-coatings"
      },
      {
        "name": "Trenches, sumps and collection interfaces",
        "text": "Trench and sump linings must remain continuous around corners, pipe penetrations and changes of plane. Specify the complete preparation, repair and lining sequence rather than extending a thin floor topcoat into a collection pit by default. Review immersion exposure separately from incidental splash resistance. Identify any required reinforcement and continuity testing in the approved details. Safe access and isolation procedures for pits are established with the facility before work begins. Closeout should record hidden interfaces before equipment or covers make later inspection difficult.",
        "system": "Chemical-resistant trench and sump lining",
        "thickness": "Per immersion-service lining specification",
        "link": "/secondary-containment-coatings"
      },
      {
        "name": "Wall junctions and controlled-area transitions",
        "text": "Integral cove can connect compatible resin floors to approved wall finishes and housekeeping pads, reducing exposed corners that complicate cleaning. Coordinate the top termination with cleanroom wall panels and keep structural movement details functional. ESD continuity across transitions must be designed where required rather than assumed because both adjoining surfaces are resin. Specify doorway connections to different flooring materials and protect them during tool moves. A reviewed mockup helps align process, facilities and construction teams before the same detail is repeated across controlled production areas.",
        "system": "Integral epoxy cove base",
        "thickness": "Height and profile per controlled-area detail",
        "link": "/epoxy-cove-base"
      }
    ],
    "standards": [
      "ANSI/ESD S20.20 establishes the owner’s ESD control-program framework; flooring selection and acceptance follow the approved personnel-grounding and verification requirements.",
      "Specified ESD testing may include ANSI/ESD STM7.1 floor resistance and ANSI/ESD STM97.1 or STM97.2 footwear/flooring evaluation where applicable to the program.",
      "Cleanroom requirements are coordinated with the owner’s classification and cleaning protocol; coating selection alone does not establish ISO 14644 compliance.",
      "ASTM F2170, ASTM F1869, ICRI 310.2R and ASTM D7234 support moisture, preparation and adhesion evaluation as applicable to the approved resin system."
    ],
    "faqs": [
      {
        "q": "Does an ESD floor alone meet ANSI/ESD S20.20?",
        "a": "No. The standard addresses an ESD control program, not a standalone coating certification for every operation. Flooring, grounding, footwear, verification and personnel procedures must be coordinated. We install the approved assembly and document the specified tests, while the program owner determines acceptance requirements for the devices and processes used in the protected area."
      },
      {
        "q": "Do you install conductive or static-dissipative systems?",
        "a": "Both may be considered according to the design. We have specified PIP InhibiStat-type conductive systems, but the choice is driven by the owner’s electrical performance criteria and approved products. We do not substitute a generic resistance target for the facility’s program. Grounding details, test methods and operating assumptions need agreement before materials are ordered."
      },
      {
        "q": "Can a cleanroom epoxy resist process acids?",
        "a": "Only where product-specific data supports the actual chemical exposure. Cleanability and acid resistance are different requirements, and immersion in a sump can be more demanding than a brief splash on a floor. We review concentrations, temperatures and contact times with the manufacturer and propose distinct assemblies when controlled circulation and wet processing have incompatible duties."
      },
      {
        "q": "How do you schedule around tool installation?",
        "a": "We define preparation, installation, cure, testing and turnover as separate release points and coordinate them with facilities and tool-move teams. Unqualified traffic can damage a new surface before environmental or electrical acceptance is complete. Photo records and test documentation support the handoff without claiming that coating completion alone qualifies the manufacturing process."
      }
    ],
    "photos": [
      {
        "src": industry9Photo1,
        "alt": "Data center facility reference image for electronics flooring planning"
      },
      {
        "src": industry9Photo2,
        "alt": "Technical facility flooring reference for semiconductor support areas"
      },
      {
        "src": industry9Photo3,
        "alt": "Healthcare facility flooring reference for cleanable controlled environments"
      }
    ]
  },
  {
    slug: "food-processing",
    path: "/food-processing-flooring",
    name: "Food & Beverage Processing",
    metaTitle:
      "Food & Beverage Processing Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "Urethane cement flooring for DFW food and beverage plants, with thermal-shock resistance, integral cove, washdown detailing and slope-to-drain planning.",
    h1: "Food & Beverage Processing Flooring in Dallas–Fort Worth",
    heroImage: foodProcessing1,
    heroAlt:
      "Restored concrete floor in a fast-casual restaurant, illustrating an adjacent food-service application",
    answer: "Food processing flooring is typically a 3/16 to 1/4 inch urethane cement system with integral cove and slope-to-drain detailing. It is used in processing rooms, washdown areas, coolers and freezers where hot water, thermal shock and aggressive cleaners are constant.",
    intro:
      "A processing floor has to survive more than production traffic. Hot oil, chilled ingredients, aggressive cleaning and repeated washdown put different stresses on the same slab, often within a single shift. Legacy Industrial Coatings designs food and beverage flooring around those exposure cycles rather than selecting one finish for the entire building. Urethane cement is the starting point for many wet production areas because the system can accommodate demanding thermal conditions when properly specified. Drain connections, equipment foundations, thresholds and wall transitions receive equal attention: a durable field coating cannot compensate for a detail that traps water. Our client experience includes Gordon Food Service. We establish the floor assembly, drainage scope and release schedule with your operations, sanitation and quality teams before mobilization.",
    demands: [
      "Our floor must tolerate hot washdown followed by cooler production conditions without repeated patching at drains and equipment.",
      "Water and food residue collect at low spots; we need drainage corrected instead of another coating over the problem.",
      "Sanitation needs cleanable wall transitions without open edges, grout lines or deteriorating base.",
      "We cannot reopen on appearance alone; the floor must be ready for the actual heat, chemicals and traffic of the next shift.",
    ],
    areas: [
      {
        name: "Hot processing and cooking lines",
        text:
          "Specify urethane cement around kettles, fryers and heated equipment after documenting operating temperatures, spill temperatures and cleaning practices. Thermal-shock resistance depends on the complete assembly, including thickness and termination details. We separate routine splashes from sustained exposure so the recommendation reflects what actually reaches the floor.",
        system: "Thermal-shock-resistant urethane cement",
        thickness:
          "Project-specific build, confirmed for thermal exposure in the submittal",
        link: "/urethane-cement-flooring",
      },
      {
        name: "Washdown rooms and drain approaches",
        text:
          "Survey existing elevations before promising positive drainage. Localized mortar work or a broader slope correction may be necessary before the finish system goes down. Drain rings, trench edges and adjoining concrete need coordinated terminations that do not leave thin, vulnerable coating edges directly in the washdown path.",
        system: "Sloped mortar build-up with urethane cement finish",
        thickness:
          "Variable slope correction; finish thickness confirmed by system",
        link: "/urethane-cement-flooring",
      },
      {
        name: "Wall bases and equipment curbs",
        text:
          "Carry a compatible integral cove into the floor assembly to eliminate the hard-to-clean floor-to-wall corner. Confirm cove height, radius, wall backing and upper termination with the sanitation team. Coat suitable equipment curbs where specified, while preserving access to serviceable connections and required movement joints.",
        system: "Integral resinous cove base",
        thickness:
          "Cove body and radius sized to the approved floor assembly",
        link: "/epoxy-cove-base",
      },
      {
        name: "Packaging and dry production",
        text:
          "Dry packaging areas may benefit from an epoxy assembly rather than the same heavy wet-process system used at the cooking line. Select texture for pedestrian and cart traffic, expected incidental spills and cleaning equipment. Discuss color zoning where ingredients, packaging materials and finished goods share circulation routes.",
        system: "High-build industrial epoxy",
        thickness: "Manufacturer-specified build for traffic and exposure",
        link: "/commercial",
      },
      {
        name: "Utility and chemical handling zones",
        text:
          "Cleaning concentrates and process chemicals require an exposure review separate from ordinary production soil. Where containment is part of the design, coordinate coated curbs, penetrations and compatible lining materials. A chemical-resistant finish is not automatically a containment assembly, and neither substitutes for the facility's spill-response procedures.",
        system: "Chemical-resistant containment lining",
        thickness: "Exposure-specific lining build per approved submittal",
        link: "/secondary-containment-coatings",
      },
    ],
    standards: [
      "USDA-acceptable systems are selected through product documentation and facility review; a floor installation does not confer USDA approval on the operation.",
      "Evaluate slab moisture using ASTM F2170 and, where specified, ASTM F1869 before choosing the primer and floor assembly.",
      "Match mechanical preparation to the manufacturer's required ICRI 310.2R concrete surface profile, including edges and drain approaches.",
      "Review detergent concentration, sanitizer chemistry, contact time and operating temperature against the selected manufacturer's resistance data.",
      "Document mockup texture, drain transitions, cove details and applicable ASTM D7234 adhesion testing before production installation.",
    ],
    faqs: [
      {
        q: "Why choose urethane cement instead of ordinary epoxy in wet processing?",
        a:
          "Temperature cycling is often the deciding factor. A room exposed to hot liquids and repeated washdown needs an assembly selected for that thermal duty, not simply a coating described as industrial. Urethane cement is frequently appropriate, but thickness, substrate condition and edge anchorage remain critical. We compare the cleaning cycle and production exposure with manufacturer guidance before recommending the system. Dry packaging or support rooms may need a different, more economical assembly.",
      },
      {
        q: "Can you fix standing water while replacing the floor?",
        a:
          "Yes, when slope correction is included in the scope and existing conditions allow it. We first distinguish a low spot from an incorrectly located or undersized drain. A finish coat follows the underlying geometry; it will not redirect water by itself. The proposal identifies mortar build-up, drain-interface work and any plumbing or structural coordination needed so drainage expectations are clear before installation starts.",
      },
      {
        q: "How do you balance slip resistance with sanitation?",
        a:
          "Texture must suit the contaminant, footwear and cleaning method. An unnecessarily aggressive surface can retain residue and increase cleaning effort, while a smooth finish may be unsuitable under grease or water. We use a representative mockup to review the tradeoff with your team. Final cleaning instructions should identify compatible tools and detergents that reach the texture without damaging the surface or leaving a slippery film.",
      },
      {
        q: "Can installation fit a sanitation or production shutdown?",
        a:
          "We plan backward from the first real exposure, including hot cleaning, wheeled loads and chemical contact. Those release times can differ from the point when a floor is merely walkable. The phasing plan also addresses equipment access, dust isolation, ventilation and transitions between completed and active rooms. Your team receives a defined handover sequence rather than a blanket promise that every assembly can reopen overnight.",
      },
    ],
    photos: [
      {
        src: foodProcessing1,
        alt:
          "Restored concrete flooring in a fast-casual restaurant used as related food-service project photography",
      },
      {
        src: foodProcessing2,
        alt:
          "Additional view of the fast-casual restaurant concrete restoration project",
      },
      {
        src: foodProcessing3,
        alt:
          "Completed fast-casual restaurant floor restoration, not a food-processing plant installation",
      },
    ],
  },
  {
    slug: "pharmaceutical",
    path: "/pharmaceutical-flooring",
    name: "Pharmaceutical & Medical Manufacturing",
    metaTitle:
      "Pharmaceutical & Medical Manufacturing Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "DFW pharmaceutical flooring with overnight polished-concrete delivery, chemical-resistant quartz systems, crack repair and documented preparation.",
    h1:
      "Pharmaceutical & Medical Manufacturing Flooring in Dallas–Fort Worth",
    heroImage: pharmaceutical1,
    heroAlt:
      "800-grit polished concrete at the Dallas pharmaceutical manufacturing project",
    answer: "Pharmaceutical flooring is selected room by room, usually seamless quartz or epoxy with a chemical-resistant urethane topcoat, or polished concrete in dry areas. It is used in manufacturing suites, packaging, warehousing and support spaces that follow documented cleaning protocols.",
    intro:
      "Pharmaceutical flooring decisions should begin with room function, not a single building-wide finish. A dry manufacturing corridor, a controlled production room and a chemical cleaning station impose different requirements on the substrate and wearing surface. Legacy Industrial Coatings separates those exposures, then documents the proposed assembly and installation sequence for facility review. At a 21,000 SF Dallas pharmaceutical plant, our scope combined 800-grit polished concrete with polyurea crack repair across three to four overnight shifts, with zero downtime. That project demonstrates a scheduling approach for its particular operating conditions, not a universal promise for every controlled space. Where a seamless chemical-resistant surface is required, we also specify Legacy Quartz double-broadcast flooring with CRU and an anti-microbial topcoat matched to the cleaning program.",
    demands: [
      "We need a floor recommendation tied to each room's cleaning chemistry, not a generic claim of chemical resistance.",
      "Production cannot absorb an open-ended shutdown or a return-to-service decision based only on surface dryness.",
      "Cracks, divots and rough transitions interfere with cleaning and wheeled movement through the plant.",
      "Quality and facilities teams need product data, preparation records and a clear distinction between material performance and room qualification.",
    ],
    areas: [
      {
        name: "Dry manufacturing and circulation",
        text:
          "Use mechanically polished concrete where the operating classification and cleaning requirements permit an exposed concrete finish. Our Dallas project reached an 800-grit finish after preparation and repair. Review aggregate exposure, existing stains and patch visibility in advance; polishing improves the slab but does not make every existing condition disappear.",
        system: "800-grit mechanically polished concrete",
        thickness: "No added resinous wearing layer",
        link: "/concrete-polishing",
      },
      {
        name: "Seamless production rooms",
        text:
          "Legacy Quartz double-broadcast plus CRU provides a resinous option where the room calls for a continuous, cleanable surface. The specified anti-microbial topcoat has a JIS Z 2801 pass. Confirm the tested product, finish texture and complete assembly in the submittal rather than treating all quartz floors or all topcoats as interchangeable.",
        system: "Legacy Quartz double-broadcast + CRU with anti-microbial topcoat",
        thickness: "Complete system thickness confirmed in manufacturer submittal",
        link: "/quartz-flooring",
      },
      {
        name: "Cleaning and chemical exposure areas",
        text:
          "Build the resistance review around IPA, quats, sporicides, CIP detergents and passivation acids. The Legacy Quartz and CRU assembly is selected to withstand the specified exposure profile, with manufacturer confirmation of concentrations, temperatures and dwell times. Concentrated storage or prolonged pooling may require a different lining than routine cleaning.",
        system: "Chemical-resistant resinous flooring",
        thickness: "Exposure-dependent build per approved product data",
        link: "/resinous-flooring",
      },
      {
        name: "Cracks, divots and slab defects",
        text:
          "Polyurea crack repair was part of the Dallas pharmaceutical plant scope. Assess each defect before repair to distinguish stable damage from active movement. Fill and finish suitable repairs for the chosen surface, while retaining movement accommodation where required. Repair color and reflectivity can remain visible within polished concrete.",
        system: "Polyurea crack and divot repair",
        thickness: "Repair depth follows the prepared defect",
        link: "/joint-filling-crack-repair",
      },
      {
        name: "Perimeters and room transitions",
        text:
          "Detail integral cove, door thresholds and penetrations as part of the room assembly rather than leaving them for field improvisation. Coordinate the floor's termination with wall systems and equipment bases. Cove can simplify cleaning at the perimeter, but it cannot correct an incompatible wall substrate or an unresolved moving joint.",
        system: "Compatible integral resinous cove",
        thickness: "Cove build matched to the approved floor system",
        link: "/epoxy-cove-base",
      },
    ],
    standards: [
      "The specified anti-microbial topcoat carries a JIS Z 2801 pass; this material test does not establish room sterility or replace environmental monitoring.",
      "Confirm chemical resistance for the actual IPA, quat, sporicide, CIP detergent and passivation-acid exposure, including temperature and contact time.",
      "Use ASTM F2170 moisture testing and applicable ASTM F1869 testing to inform resinous system selection and moisture-control requirements.",
      "Prepare concrete to the system-specific ICRI 310.2R profile; review applicable ASTM F710 substrate requirements with the project specification.",
      "Provide preparation photographs, ambient-condition records and specified ASTM D7234 mockup adhesion results for the closeout package.",
    ],
    caseStudySlug: "pharmaceutical-manufacturing-polished-concrete",
    faqs: [
      {
        q: "What did the Dallas pharmaceutical plant project include?",
        a:
          "The documented scope covered 21,000 SF of 800-grit polished concrete with polyurea crack repair, completed over three to four overnight shifts with zero downtime. The overnight sequence was coordinated around that plant's operations. We use the project to explain access planning and repair integration, while evaluating each new facility independently for contamination controls, room restrictions, equipment movement and the realistic window available for preparation and handover.",
      },
      {
        q: "Does the anti-microbial topcoat make a room sterile?",
        a:
          "No. A JIS Z 2801 pass describes performance under a defined material test. It is not a claim that the room is sterile, that all organisms are controlled in service or that cleaning can be reduced. The facility retains responsibility for its sanitation program and qualification requirements. We identify the exact topcoat and supporting documentation so your quality team can evaluate its role within that broader program.",
      },
      {
        q: "Will the quartz system withstand our disinfectants and process chemicals?",
        a:
          "The Legacy Quartz double-broadcast and CRU system with anti-microbial topcoat is selected for resistance to the specified IPA, quats, sporicides, CIP detergents and passivation acids. Approval still depends on the actual chemical schedule. Provide product names, dilution, temperature, frequency and dwell time, including accidental concentrated exposure. We request manufacturer review where needed and identify any exposure that calls for a different assembly or operating limitation.",
      },
      {
        q: "Should every pharmaceutical room receive polished concrete?",
        a:
          "No. Polishing can be appropriate for approved dry-use spaces and circulation areas, but it is not a substitute for a seamless resinous assembly where the room specification requires one. We map the finish to each room's contamination-control strategy, cleaning process and traffic. That approach also clarifies transitions between finishes, avoiding a late discovery that an economical corridor finish was assumed suitable for a more demanding production zone.",
      },
    ],
    photos: [
      {
        src: pharmaceutical1,
        alt:
          "Completed polished concrete floor at the 21,000 SF Dallas pharmaceutical plant",
      },
      {
        src: pharmaceutical2,
        alt:
          "Additional view of the Dallas pharmaceutical manufacturing polished-concrete installation",
      },
      {
        src: pharmaceutical3,
        alt:
          "Finished pharmaceutical plant concrete surface following overnight polishing and repair work",
      },
    ],
  },
  {
    slug: "pharmacy-cleanroom",
    path: "/pharmacy-cleanroom-flooring",
    name: "Pharmacy & Cleanrooms",
    metaTitle:
      "Pharmacy & Cleanrooms Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "Seamless DFW pharmacy and cleanroom floors with HTU topcoats, integral cove, cleaning-chemical compatibility and ESD options for automation areas.",
    h1: "Pharmacy & Cleanrooms Flooring in Dallas–Fort Worth",
    heroImage: pharmacyCleanroom1,
    heroAlt:
      "Healthcare flooring project used as related photography for pharmacy and cleanroom planning",
    answer: "Pharmacy and cleanroom flooring is a seamless epoxy system with a high-performance urethane topcoat and integral cove, with ESD options where equipment requires it. It is used in compounding suites, ante rooms and cleanrooms that are cleaned with sporicides and disinfectants.",
    intro:
      "Compounding-suite flooring must support a controlled cleaning routine without introducing avoidable joints, damaged edges or difficult perimeter details. Legacy Industrial Coatings plans sterile buffer rooms, ante rooms, hazardous-drug labs and non-HD labs as distinct spaces within one coordinated scope. Our seamless epoxy approach uses an HTU high-traffic urethane topcoat compatible with Decon-Quat and Peridox cleaning, with the exact products and exposure conditions confirmed during submittal. Integral cove connects the floor to the wall transition, while an ESD option can address separately specified pharmacy-automation requirements. The objective is a maintainable surface that fits your room design and operating procedures. Flooring alone does not establish cleanroom classification, compounding compliance or successful facility qualification.",
    demands: [
      "Cleaning staff need a continuous surface without failing base edges or joints that repeatedly collect residue.",
      "The finish must match our Decon-Quat and Peridox schedule, including dilution, dwell time and repeated application.",
      "Sterile buffer rooms, ante rooms and HD labs cannot be treated as interchangeable installation zones.",
      "Automation equipment may introduce static-control requirements that must be resolved before the floor is ordered.",
      "We need a controlled construction handover that leaves time for cleaning, verification and room release.",
    ],
    areas: [
      {
        name: "Sterile buffer rooms",
        text:
          "Install a seamless epoxy assembly with HTU high-traffic urethane topcoat where approved by the project specification. Detail terminations around equipment and wall systems before work begins. Review the proposed finish for cleanability and resistance to the actual cleaning sequence rather than selecting texture solely from a decorative sample.",
        system: "Seamless epoxy with HTU high-traffic urethane topcoat",
        thickness: "Manufacturer-approved build for the specified assembly",
        link: "/commercial",
      },
      {
        name: "Ante rooms and gowning transitions",
        text:
          "Coordinate the floor through gowning routes, door openings and transitions into adjoining rooms. These spaces experience concentrated foot traffic and frequent cleaning, making edge durability important. Use layout drawings to resolve finish boundaries and preserve the intended cleaning workflow without introducing unnecessary seams at the busiest thresholds.",
        system: "High-traffic seamless resinous flooring",
        thickness: "Build confirmed for traffic and threshold conditions",
        link: "/resinous-flooring",
      },
      {
        name: "HD and non-HD compounding labs",
        text:
          "Evaluate hazardous-drug and non-HD rooms separately against the facility's containment and cleaning procedures. Select the compatible epoxy and HTU assembly, then document penetrations and equipment interfaces. A chemically resistant floor does not replace containment equipment, pressure relationships or the operational controls established by the pharmacy's design and compliance team.",
        system: "Chemical-compatible epoxy and HTU finish",
        thickness: "Exposure-specific assembly per approved submittal",
        link: "/commercial",
      },
      {
        name: "Floor-to-wall junctions",
        text:
          "Form integral cove as part of the floor scope, coordinating radius, height, wall backing and termination with the room design. Inspect corners and door-frame transitions that are easy to overlook on a plan. Where movement is expected, use a compatible detail rather than rigidly bridging the joint and creating a predictable crack.",
        system: "Integral epoxy cove base",
        thickness: "Cove body sized to the floor and wall detail",
        link: "/epoxy-cove-base",
      },
      {
        name: "Pharmacy automation zones",
        text:
          "An ESD floor is an option when automation vendors or the electrical design establish a static-control requirement. Resolve grounding, footwear or caster interfaces and acceptance testing before specifying the assembly. A standard epoxy finish should not be represented as static dissipative merely because it is seamless or used near sensitive equipment.",
        system: "Specified ESD/static-control resinous assembly",
        thickness: "Manufacturer-specified conductive or dissipative build",
        link: "/esd-static-control-flooring",
      },
    ],
    standards: [
      "Coordinate applicable USP <797> and USP <800> design requirements with the pharmacy's qualified design and compliance professionals; flooring alone does not establish compliance.",
      "Confirm compatibility of the selected HTU topcoat with the precise Decon-Quat and Peridox products, dilution, temperature and dwell time.",
      "Use ASTM F2170 moisture readings and specified ASTM F1869 testing to evaluate substrate conditions before installing a low-permeance resinous finish.",
      "Match substrate preparation to ICRI 310.2R and the selected manufacturer's requirements; document repairs, edge conditions and installation environment.",
      "For specified static-control rooms, coordinate ANSI/ESD S20.20 program requirements and assembly acceptance testing with the owner's ESD team.",
    ],
    faqs: [
      {
        q: "Is the HTU topcoat compatible with Decon-Quat and Peridox?",
        a:
          "The proposed seamless epoxy and HTU high-traffic urethane system is selected for compatibility with those cleaning products. We still verify the exact formulations, dilution ratios, dwell times and application frequency before approval. Product names alone do not describe every exposure condition. Your cleaning protocol should also identify rinsing, drying and spill-response practices so manufacturer review reflects the way the floor will actually be maintained.",
      },
      {
        q: "Can the same system serve HD and non-HD labs?",
        a:
          "Possibly, but it should be a documented design decision rather than an assumption. Hazardous-drug handling, deactivation and decontamination procedures may create a different chemical exposure profile from non-HD work. We review each room's intended use and proposed cleaning agents, then coordinate the assembly and perimeter details with your design team. The finished floor supports the operational program; it does not replace engineering controls or validated work practices.",
      },
      {
        q: "Does integral cove remove every joint in the room?",
        a:
          "No. Cove removes the abrupt floor-to-wall corner and can provide a continuous cleanable transition, but structural movement and certain interfaces still require appropriately designed joints. Bridging a moving joint with rigid resin can lead to cracking. We identify those locations during review and agree on compatible sealant or transition details, including responsibility for wall backing, door frames and penetrations that affect the final junction.",
      },
      {
        q: "When is an ESD floor needed for pharmacy automation?",
        a:
          "Use the equipment manufacturer's requirements and the owner's static-control assessment to decide. An ESD floor must operate as part of a defined system that may involve grounding, footwear, carts and environmental conditions. We can price that option separately from the standard cleanroom finish and coordinate the required measurements. Installing a conductive product without resolving those interfaces does not, by itself, establish reliable static control.",
      },
      {
        q: "What happens between installation and reopening a compounding suite?",
        a:
          "The handover plan should distinguish coating cure from facility release. Allow for ventilation, construction cleanup, the pharmacy's cleaning process and any required environmental verification or qualification activities. We document the manufacturer's cure restrictions and identify when cleaning chemicals and equipment loads are permitted. The pharmacy and its qualified reviewers determine when the room may resume service, rather than treating completion of the flooring work as automatic authorization.",
      },
    ],
    photos: [
      {
        src: pharmacyCleanroom1,
        alt:
          "Healthcare flooring project shown as related context, not a verified sterile compounding suite",
      },
      {
        src: pharmacyCleanroom2,
        alt:
          "Additional healthcare interior flooring photograph for cleanable-surface planning",
      },
      {
        src: pharmacyCleanroom3,
        alt:
          "Healthcare flooring reference image accompanying pharmacy and cleanroom system guidance",
      },
    ],
  },
  {
    slug: "restaurant-kitchen",
    path: "/restaurant-kitchen-flooring",
    name: "Restaurants & Commercial Kitchens",
    metaTitle:
      "Restaurants & Commercial Kitchens Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "DFW commercial kitchen floors with 1/4-inch urethane cement, novolac topcoats, integrated cove base and phased restoration for restaurant operations.",
    h1: "Restaurants & Commercial Kitchens Flooring in Dallas–Fort Worth",
    heroImage: restaurantKitchen1,
    heroAlt:
      "Completed restaurant pump-room flooring with integrated epoxy cove base",
    answer: "Restaurant kitchen flooring is usually a 1/4 inch urethane cement system with a novolac topcoat and integral cove base. It is used in commercial kitchens, dish areas, walk-in coolers and front-of-house spaces that face hot water, grease and daily washdown.",
    intro:
      "Restaurant flooring has to answer two audiences at once: the team working through a busy service and the people responsible for sanitation and inspection. Legacy Industrial Coatings addresses the failures beneath worn finishes, including contaminated concrete, deteriorated wall bases and vulnerable drain edges. For demanding hot-oil and thermal-shock exposure, we specify a 1/4-inch urethane cement body with a compatible novolac topcoat, subject to the complete assembly's approved service limits. Our restaurant pump-room case study demonstrates an integrated cove-base approach to a health-inspection failure, while our fast-casual work shows overnight sealed-concrete restoration. We also support multi-location programs, including Chipotle locations, with diamond grinding and a repeatable scope adapted to each restaurant's actual slab conditions.",
    demands: [
      "We need a floor that handles fryer oil, hot cleaning water and dropped kitchen equipment without constant spot repairs.",
      "The health inspection identified failed base or open floor-to-wall transitions, and repainting will not resolve the detail.",
      "Work has to fit around service, deliveries and cleaning rather than an unrealistic blanket shutdown.",
      "Our locations need consistent specifications and documentation without pretending every existing slab is identical.",
    ],
    areas: [
      {
        name: "Cook lines and fryer zones",
        text:
          "Use a 1/4-inch urethane cement body with a compatible novolac topcoat for the specified hot-oil and thermal-shock conditions. Evaluate the full system, not just the base material. Texture, edge anchorage and cleaning access around fixed equipment affect performance as much as the finish selected from the product sheet.",
        system: "Urethane cement with compatible novolac topcoat",
        thickness: '1/4" urethane cement body; topcoat per submittal',
        link: "/urethane-cement-flooring",
      },
      {
        name: "Pump rooms and sanitation perimeters",
        text:
          "Integrate a 4–6-inch epoxy cove base where the inspection or design calls for a cleanable floor-to-wall transition. Our pump-room case study addresses this type of failure with a coordinated floor and cove assembly. Confirm wall soundness and upper termination so the repair does not simply conceal deteriorated backing.",
        system: "Integrated epoxy cove base",
        thickness: 'Cove body per system; 4–6" cove height',
        link: "/epoxy-cove-base",
      },
      {
        name: "Fast-casual dining and dry circulation",
        text:
          "Restore suitable concrete through mechanical preparation and a compatible sealer where a sealed finish fits the operating conditions. Our fast-casual case study demonstrates overnight restoration for its documented scope. Sealed concrete is not automatically the right choice for greasy cook lines or rooms requiring a heavy-duty thermal-shock assembly.",
        system: "Mechanically prepared and sealed concrete",
        thickness: "Sealer application build per selected product",
        link: "/concrete-sealing",
      },
      {
        name: "Wet prep and dishwashing",
        text:
          "Assess standing water, detergents, cart traffic and drain interfaces before specifying the wet-area system. Correcting a low spot may require mortar work rather than another thin coating. Coordinate slip resistance with the cleaning team so the finished texture remains practical to scrub throughout a demanding service schedule.",
        system: "Wet-service urethane cement",
        thickness: "Thermal and traffic duty confirmed in the submittal",
        link: "/urethane-cement-flooring",
      },
      {
        name: "Multi-location refresh programs",
        text:
          "Use diamond grinding and condition-based repairs to create a repeatable preparation standard across a restaurant portfolio. Our work includes Chipotle locations. Establish an approved finish, access checklist and closeout format, then document exceptions such as grease contamination, slab repairs or moisture conditions that change the installation requirements at an individual site.",
        system: "Prepared concrete with specified protective sealer",
        thickness: "Product-specific sealer build; repairs measured separately",
        link: "/concrete-sealing",
      },
    ],
    standards: [
      "Coordinate floor and cove details with the applicable local health authority; the inspector determines acceptance, and flooring work does not guarantee an inspection outcome.",
      "Review the urethane cement and novolac topcoat as a complete assembly for hot oil, cleaning temperatures, thermal cycling and chemical exposure.",
      "Mechanically prepare concrete to the selected manufacturer's ICRI 310.2R profile after addressing grease contamination and unsound material.",
      "Use ASTM F2170 and applicable ASTM F1869 moisture testing to identify conditions that could affect coating or sealer selection.",
      "Document cove continuity, drain terminations, mockup texture and manufacturer-defined return-to-service restrictions before the restaurant reopens.",
    ],
    caseStudySlug: "restaurant-pump-room-integrated-cove-base",
    faqs: [
      {
        q: "Can integrated cove base fix a health-inspection failure?",
        a:
          "It can address a cited physical defect when the issue is an unsuitable or failed floor-to-wall transition. Our restaurant pump-room case study demonstrates that repair approach. We review the actual finding, inspect the wall backing and agree on the floor and cove detail before installation. Acceptance remains with the local authority, and unrelated sanitation, plumbing or building deficiencies still need their own corrective actions.",
      },
      {
        q: "Why combine urethane cement with a novolac topcoat?",
        a:
          "The urethane cement body addresses demanding kitchen service, while the compatible novolac topcoat contributes the specified chemical resistance. The pairing must be approved as a complete assembly: a topcoat can introduce its own temperature and cure limitations. We evaluate hot-oil exposure, wash temperatures and cleaning agents together, then document the build-up and release requirements rather than assuming that any novolac can be applied over any cementitious urethane.",
      },
      {
        q: "Can you restore a floor overnight?",
        a:
          "Our fast-casual sealed-concrete restoration provides a relevant overnight example, but that schedule does not transfer automatically to a full kitchen rebuild. Removing failed materials, repairing saturated concrete, forming cove or installing urethane cement can require a different window. We distinguish preparation time, application time and the cure needed before cleaning or hot service, then propose the narrowest workable closure supported by the selected materials.",
      },
      {
        q: "How do you keep a restaurant portfolio consistent?",
        a:
          "We establish a common scope framework covering preparation, finish selection, transitions, access and photography. Each location still receives a condition review because slab contamination and previous repairs vary. For programs involving Chipotle locations or similar repeat work, diamond grinding supports controlled preparation, while site-specific exceptions remain visible in the proposal. That gives facilities teams comparable records without forcing an unsuitable one-size-fits-all repair onto every restaurant.",
      },
      {
        q: "Will a new coating eliminate slippery kitchen conditions?",
        a:
          "No flooring finish can eliminate the effect of grease, food debris, standing water or unsuitable footwear. We select texture for the operating exposure and confirm that the cleaning method can maintain it. Drainage defects and equipment leaks should be corrected alongside the floor work. The handover should include compatible cleaning guidance so residue does not gradually turn a correctly textured surface into a difficult walking condition.",
      },
    ],
    photos: [
      {
        src: restaurantKitchen1,
        alt:
          "Restaurant pump-room floor with integrated epoxy cove base at the wall transition",
      },
      {
        src: restaurantKitchen2,
        alt:
          "Completed concrete restoration at a fast-casual restaurant",
      },
      {
        src: restaurantKitchen3,
        alt:
          "Additional finished-floor view from the fast-casual restaurant restoration project",
      },
    ],
  },
  {
    slug: "auto-dealership",
    path: "/auto-dealership-flooring",
    name: "Auto Dealerships & Service",
    metaTitle:
      "Auto Dealerships & Service Flooring DFW | Legacy Industrial Coatings",
    metaDescription:
      "DFW dealership flooring for showrooms, service drives and repair bays, with polished concrete, polyaspartic finishes and fluid-resistant urethane systems.",
    h1: "Auto Dealerships & Service Flooring in Dallas–Fort Worth",
    heroImage: autoDealership1,
    heroAlt:
      "Polished concrete showroom floor in an automotive dealership",
    answer: "Dealership flooring pairs polished concrete or decorative flake in the showroom with hot-tire-resistant epoxy or urethane systems in the service drive and shop. It is used across showrooms, service lanes, parts rooms and detail bays on the same property.",
    intro:
      "A dealership floor moves from architectural presentation to industrial service within the same property. The showroom needs a finish that works under display lighting and changing vehicle layouts; the service drive must tolerate hot tires, water and everyday fluids; the shop adds tools, equipment and concentrated mechanical work. Legacy Industrial Coatings separates these conditions before recommending polished concrete, a polyaspartic finish over a properly prepared slab or a heavy-duty urethane assembly. We also plan the transitions between customer areas and production spaces so the project functions as one facility. For an occupied dealership, access sequencing matters as much as appearance: vehicles, lifts, delivery routes and customer circulation all influence where preparation can begin and when each zone can reopen.",
    demands: [
      "Our showroom floor needs a consistent presentation without hiding the maintenance implications of the finish.",
      "Hot tires, oils and vehicle fluids are damaging the service-drive coating.",
      "The shop cannot lose every bay at once or reopen before the finish is ready for equipment and vehicle loads.",
      "Old coatings and slab repairs make it difficult to compare bids that assume very different preparation scopes.",
      "Customers and technicians need clearly organized routes through adjoining public and service areas.",
    ],
    areas: [
      {
        name: "Vehicle showrooms",
        text:
          "Mechanically polished concrete offers a durable presentation where the existing slab can support the desired appearance. Review aggregate exposure, patch history, staining and reflected light in a representative mockup. Polishing works with the concrete already present; it should not be sold as a guarantee of a perfectly uniform new surface.",
        system: "Mechanically polished concrete",
        thickness: "No added coating layer",
        link: "/concrete-polishing",
      },
      {
        name: "Coated showroom floors",
        text:
          "A polyaspartic finish over a properly prepared slab provides an alternative when the design calls for a coated presentation. Confirm the primer, decorative layer if used and compatible topcoat as one assembly. Review UV exposure near glazing, gloss expectations and maintenance access before approving a finish solely on a small sample.",
        system: "Prepared-slab polyaspartic resinous assembly",
        thickness: "Manufacturer-approved build for the selected finish",
        link: "/resinous-flooring",
      },
      {
        name: "Service drives",
        text:
          "Specify a urethane system resistant to hot tires and the vehicle fluids expected at check-in. Rainwater and tracked debris introduce a different traction requirement from the showroom. Detail vehicle stopping points, turns and thresholds, where concentrated tire contact can expose weaknesses in preparation or an unsuitable coating assembly.",
        system: "Hot-tire- and fluid-resistant urethane system",
        thickness: "Traffic-duty build confirmed in the submittal",
        link: "/resinous-flooring",
      },
      {
        name: "Mechanical service bays",
        text:
          "Select a heavy-duty urethane assembly around actual oil, coolant, cleaner and equipment exposure. Inspect lift bases, anchors and damaged concrete before setting the coating scope. Surface resistance does not eliminate the need to clean spills promptly, and concentrated specialty chemicals may require a separate manufacturer review.",
        system: "Heavy-duty urethane shop flooring",
        thickness: "System thickness selected for bay loads and exposure",
        link: "/urethane-cement-flooring",
      },
      {
        name: "Joints and damaged slab edges",
        text:
          "Repair spalls and suitable cracks before applying the finish, then detail control and movement joints according to their function. Flush repairs can improve cart travel and cleaning, but active movement should not be concealed with a rigid cosmetic patch. The proposal separates repair quantities from the basic coating area.",
        system: "Joint filling and compatible concrete repair",
        thickness: "Defect-specific repair depth and joint geometry",
        link: "/joint-filling-crack-repair",
      },
      {
        name: "Technician and customer routes",
        text:
          "Coordinate lane markings, pedestrian boundaries and equipment zones with the operating layout. Use a striping material compatible with the underlying floor and expected traffic. Confirm the final plan with service management before application so doors, workstations and vehicle turning paths remain usable after the building is back in operation.",
        system: "Compatible floor striping and marking",
        thickness: "Striping build per selected coating product",
        link: "/line-striping",
      },
    ],
    standards: [
      "Evaluate hot-tire resistance and automotive-fluid resistance using the selected manufacturer's data for the complete system, not a generic resin-family claim.",
      "Test slab moisture using ASTM F2170 and specified ASTM F1869 procedures before finalizing primers and moisture-control requirements.",
      "Match grinding or shot blasting to the assembly's ICRI 310.2R preparation requirements; identify existing coating removal separately.",
      "Use appearance and traction mockups where specified, with ASTM D7234 pull-off adhesion testing when required by the project.",
      "Record ambient temperature, relative humidity and dew point during installation, then release areas according to the manufacturer's vehicle-service restrictions.",
    ],
    faqs: [
      {
        q: "Should our showroom be polished concrete or polyaspartic?",
        a:
          "Start with the slab and the visual objective. Polished concrete reveals existing aggregate, repairs and color variation, while a coated assembly offers a different approach to color and finish. Both need appropriate preparation and ongoing care. We review the concrete in person, discuss display lighting and demonstrate a representative area where practical. The decision should reflect achievable appearance and maintenance rather than assuming one option is always superior.",
      },
      {
        q: "How do you address hot-tire pickup in the service drive?",
        a:
          "We review the existing failure, remove unsound material and specify a system with documented suitability for the expected hot-tire exposure. Preparation, adhesion and cure are essential; simply changing the topcoat name may not solve the problem. Vehicle standing time, turning movements and cleaning chemicals also matter. We identify those conditions before selecting the urethane assembly and clearly state when vehicles may return.",
      },
      {
        q: "Can the shop stay partly operational during installation?",
        a:
          "Often a phased plan is possible, provided the building can maintain safe separation and useful vehicle routes. We map available bays, equipment access, preparation boundaries and ventilation requirements with service management. Each phase needs enough cure time for the actual loads it will receive. Working in smaller areas may extend total duration, so the proposal should show that tradeoff rather than promising uninterrupted operation without conditions.",
      },
      {
        q: "Will the floor resist every fluid used in an automotive shop?",
        a:
          "No single general description covers every chemical, concentration and temperature. We evaluate the routine oils, fuels, coolants and cleaners, then flag specialty products or extended exposure for manufacturer review. Chemical resistance also does not mean spills should remain on the surface indefinitely. A clear cleaning and spill-response procedure protects the floor and helps keep the service environment usable for technicians and customers.",
      },
    ],
    photos: [
      {
        src: autoDealership1,
        alt:
          "Polished concrete floor across an automotive dealership showroom",
      },
      {
        src: autoDealership2,
        alt:
          "Dealership showroom interior illustrating customer-facing flooring requirements",
      },
      {
        src: autoDealership3,
        alt:
          "Showroom vehicles displayed on a mechanically polished concrete floor",
      },
    ],
  },
  {
    slug: "parking-garage",
    path: "/parking-garage-coatings",
    name: "Parking Structures",
    metaTitle:
      "Parking Garage Coatings DFW | Legacy Industrial Coatings",
    metaDescription:
      "DFW parking garage coatings with Legacy High Traffic Urethane vehicular systems, Legacy Pedestrian Deck pedestrian protection, coordinated repairs and compatible striping.",
    h1: "Parking Structures Flooring in Dallas–Fort Worth",
    heroImage: iw1,
    heroAlt:
      "Industrial concrete floor reference image, not a completed parking-deck coating installation",
    answer: "Parking structure coatings are fluid-applied traffic membranes such as Legacy High Traffic Urethane for vehicles and Legacy Pedestrian Deck for pedestrian areas, typically 32 to 52 dry mils. They are used on elevated decks, ramps, stair towers and plaza levels to waterproof the slab and resist wear.",
    intro:
      "A parking structure coating is a coordinated traffic and waterproofing assembly, not simply colored paint over concrete. Vehicle turns, ramps, pedestrian routes and exposed transitions place different demands on the deck. Legacy Industrial Coatings specifies Legacy High Traffic Urethane for vehicular traffic and Legacy Pedestrian Deck for appropriate pedestrian stairs and plazas, then coordinates repairs, joint details and compatible striping around those systems. We identify standard and heavy-duty areas before pricing so concentrated wear zones receive the intended build-up. The installation plan also accounts for access to occupied buildings, drainage, weather exposure and the curing conditions needed before vehicles return. Existing structural distress requires separate evaluation; a traffic coating must not be used to hide unresolved concrete deterioration.",
    demands: [
      "Leaks and worn coatings keep returning because joints, cracks and drain interfaces are not being treated as part of one scope.",
      "Ramps and tight turns wear faster than ordinary parking bays, but previous bids used one build everywhere.",
      "Residents, tenants or visitors still need a workable parking and pedestrian access plan during construction.",
      "We need a realistic reopening date tied to temperature and cure requirements, not just the last application day.",
      "New striping must work with the coating and approved layout instead of becoming an incompatible final add-on.",
    ],
    areas: [
      {
        name: "General vehicular decks",
        text:
          "Legacy High Traffic Urethane standard vehicular construction totals 40 dry mils, excluding primer and aggregate. Its base, wear coat and topcoat serve different functions and must be installed as the approved assembly. Identify drains, penetrations and changes in plane before field application so continuity does not depend on improvised finishing details.",
        system: "Legacy High Traffic Urethane standard vehicular coating",
        thickness: "40 dry mils, excluding primer and aggregate",
        link: "/deck-coatings",
      },
      {
        name: "Ramps, turns and concentrated wear",
        text:
          "Use the heavy-duty Legacy High Traffic Urethane build at designated turns, ramps and other concentrated traffic locations. The additional wear layer raises the specified total to 52 dry mils, excluding primer and aggregate. Mark these zones on the plan so the installed reinforcement can be documented before later coats conceal the change in build.",
        system: "Legacy High Traffic Urethane heavy-duty vehicular coating",
        thickness: "52 dry mils, excluding primer and aggregate",
        link: "/deck-coatings",
      },
      {
        name: "Fast-cure reopening zones",
        text:
          "Legacy High Traffic Urethane FC and integrally textured Legacy High Traffic Urethane FC Textured provide fast-cure options where the access plan justifies them. Their published traffic window is 24–36 hours under applicable manufacturer conditions. Confirm the selected variant, temperature limits and UV exposure requirements; a fast-cure designation does not remove preparation or environmental constraints.",
        system: "Legacy High Traffic Urethane FC or FC Textured",
        thickness: "40 dry mils standard; 52 dry mils heavy-duty",
        link: "/deck-coatings",
      },
      {
        name: "Pedestrian stairs and plazas",
        text:
          "Legacy Pedestrian Deck is the pedestrian system for suitable stairs, landings and plazas rather than a substitute for vehicular Legacy High Traffic Urethane. The standard assembly totals 32 dry mils. Coordinate stair edges, vertical transitions and adjoining waterproofing, with texture selected for the intended use and compatible cleaning rather than appearance alone.",
        system: "Legacy Pedestrian Deck pedestrian coating",
        thickness: "32 dry mils",
        link: "/deck-coatings",
      },
      {
        name: "Cracks and deck interfaces",
        text:
          "Classify cracks and joints before choosing repairs. Traffic coatings can address specified details within their design limits, but structural movement and expansion joints require dedicated solutions. We coordinate compatible repair materials and terminations, while identifying conditions that need an engineer's review before the coating work can responsibly proceed.",
        system: "Compatible crack repair and joint-detail preparation",
        thickness: "Repair depth and detail build per approved condition",
        link: "/joint-filling-crack-repair",
      },
      {
        name: "Parking layout and wayfinding",
        text:
          "Apply coating-compatible stall lines, arrows, numbering and designated pedestrian markings after the required cure and layout approval. Coordinate accessible stalls, access aisles and fire-lane markings with the approved site requirements. Confirm dimensions in the field rather than automatically reproducing worn lines that may no longer match the authorized arrangement.",
        system: "Compatible parking striping and stenciling",
        thickness: "Marking thickness per approved striping product",
        link: "/line-striping",
      },
    ],
    standards: [
      "Published Legacy High Traffic Urethane standard and heavy-duty totals are 40 and 52 dry mils, excluding primer and aggregate; confirm the final build-up on the manufacturer submittal.",
      "Standard Legacy High Traffic Urethane opens to traffic after 72 hours at 75°F and 50% relative humidity; actual release depends on approved conditions and system requirements.",
      "Standard Legacy Pedestrian Deck totals 32 dry mils with a published 48-hour pedestrian traffic window under the manufacturer's stated application conditions.",
      "Verify substrate soundness, preparation, moisture limitations and environmental conditions against the selected system's installation instructions before installation.",
      "Coordinate accessibility, fire-lane and circulation markings with approved plans and applicable requirements; coating installation does not independently establish layout compliance.",
    ],
    faqs: [
      {
        q: "What is the difference between Legacy High Traffic Urethane and Legacy Pedestrian Deck?",
        a:
          "Legacy High Traffic Urethane is the vehicular traffic family, while Legacy Pedestrian Deck serves appropriate pedestrian applications. They have different assemblies and service expectations, so the pedestrian product should not be substituted into a vehicle route. We map the boundaries at stairs, plazas and deck connections, then coordinate compatible terminations. The final submittal identifies the exact system variant rather than relying on the manufacturer name alone.",
      },
      {
        q: "How soon can vehicles return after coating?",
        a:
          "The published standard Legacy High Traffic Urethane window is 72 hours at 75°F and 50% relative humidity. Legacy High Traffic Urethane FC and FC Textured offer published 24–36-hour traffic windows subject to their applicable conditions. These are not unconditional calendar promises. Temperature, humidity, substrate conditions and the exact approved assembly affect planning, and preparation or repairs occur before that final cure period begins.",
      },
      {
        q: "Can a traffic coating stop every parking-garage leak?",
        a:
          "No. Leakage may involve expansion joints, failed drains, structural cracks, penetrations or adjoining construction beyond the coating field. We investigate those interfaces and define which are included in the assembly. Where structural distress or significant movement is present, the owner may need an engineer and specialized repair scope. Applying a new coating over unresolved deterioration risks concealing the cause rather than correcting it.",
      },
      {
        q: "Can the garage remain partly open during the work?",
        a:
          "A phased closure can be practical if circulation, emergency access and safe pedestrian separation remain workable. We develop the sequence around entrances, ramps and the number of spaces that can be removed from service at one time. Phase boundaries also need compatible coating transitions and enough cure time. The plan should explain temporary routing and tenant communication instead of assuming users will navigate around active installation.",
      },
    ],
    photos: [
      {
        src: iw1,
        alt:
          "Industrial warehouse concrete floor used as reference photography, not a Legacy High Traffic Urethane installation",
      },
      {
        src: iw2,
        alt:
          "Industrial flooring reference image accompanying parking-structure coating specifications",
      },
      {
        src: iw3,
        alt:
          "Warehouse concrete surface shown as related substrate photography, not a completed parking garage",
      },
    ],
  },
];

nationalize(INDUSTRY_PAGES);

export const getIndustryPage = (path: string) =>
  INDUSTRY_PAGES.find((i) => i.path === path);
