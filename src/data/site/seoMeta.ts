/**
 * Search titles and descriptions, keyword-first. The Seo component uses these
 * in place of whatever a page passes in, so one file controls how every page
 * shows up in Google, AI answers and link previews.
 *
 * Rules: lead with the phrase people search ("epoxy flooring", "warehouse
 * floor coating", "concrete polishing"), add the place (Dallas–Fort Worth) or
 * the buyer, end with the brand. Descriptions answer "what, for whom, where,
 * what next" in about 155 characters. No prices, no product names.
 */
const B = "Legacy Industrial Coatings";
const NEXT = "Bids within 24 hours of plans.";

export const SEO_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${B} | Commercial & Industrial Flooring in Dallas & All of Texas`,
    description:
      "Commercial and industrial epoxy flooring, polished concrete, urethane cement and line striping for Dallas–Fort Worth, all of Texas and nationwide. " + NEXT,
  },
  "/commercial": {
    title: `Commercial & Industrial Epoxy Flooring | Dallas, Texas & Nationwide | ${B}`,
    description:
      "Commercial and industrial epoxy flooring for warehouses, plants, hangars, kitchens, retail and healthcare. Built for forklifts and daily use. DFW, all of Texas and nationwide.",
  },
  "/warehouse-flooring": {
    title: `Warehouse Floor Coatings & Epoxy Flooring | Dallas–Fort Worth | ${B}`,
    description:
      "Warehouse and distribution center floors: forklift-ready epoxy, polished concrete, joint repair and line striping, phased around your operation. DFW, all of Texas and nationwide.",
  },
  "/line-striping": {
    title: `Warehouse Line Striping & Floor Marking | Dallas–Fort Worth | ${B}`,
    description:
      "Warehouse line striping and floor marking: forklift lanes, pedestrian walkways, staging and hazard zones. Old faded lines removed, new lines that last. DFW, all of Texas and nationwide.",
  },
  "/manufacturing-floor-coating": {
    title: `Manufacturing Plant Floor Coatings & Epoxy Flooring | ${B}`,
    description:
      "Floor coatings for manufacturing plants: epoxy, urethane cement and chemical-resistant floors, installed around production. Based in DFW, working across Texas and nationwide.",
  },
  "/aerospace-hangar-flooring": {
    title: `Aircraft Hangar Floor Coatings & Epoxy | Dallas, Texas & Nationwide | ${B}`,
    description:
      "Aircraft hangar floor coatings and aerospace manufacturing floors: bright, fuel- and fluid-resistant epoxy built for tugs and equipment. DFW, all of Texas and nationwide.",
  },
  "/electronics-manufacturing-flooring": {
    title: `Electronics & Semiconductor Manufacturing Flooring | ESD Epoxy | ${B}`,
    description:
      "Floors for electronics and semiconductor manufacturing: static-control (ESD) epoxy, clean production floors and cleanroom-ready finishes. DFW based, across Texas and nationwide.",
  },
  "/data-center-flooring": {
    title: `Data Center Flooring & Floor Coatings | Nationwide | ${B}`,
    description:
      "Data center flooring from the data hall to the generator yard: sealed concrete, ESD epoxy, battery rooms and transformer oil containment. DFW based, working across Texas and nationwide.",
  },
  "/resinous-flooring": {
    title: `Resinous Flooring | Epoxy, Urethane Cement & Quartz | ${B}`,
    description:
      "Resinous flooring for commercial and industrial buildings: epoxy, urethane cement, quartz and cove base, matched to how each space is used and cleaned. DFW, all of Texas and nationwide.",
  },
  "/flake-floors": {
    title: `Commercial Flake Epoxy Floors | Polyurea & Polyaspartic | ${B}`,
    description:
      "Commercial flake floors for retail, restaurants, locker rooms and showrooms: polyurea base with polyaspartic topcoat, epoxy flake and heavy-duty options. DFW, all of Texas and nationwide.",
  },
  "/quartz-flooring": {
    title: `Quartz Epoxy Flooring | Slip-Resistant Commercial Floors | ${B}`,
    description:
      "Quartz flooring for kitchens, restrooms, labs and corridors: textured, slip-resistant and seamless, with integral cove base. DFW, all of Texas and nationwide.",
  },
  "/urethane-cement-flooring": {
    title: `Urethane Cement Flooring | Dallas, Texas & Nationwide | ${B}`,
    description:
      "Urethane cement flooring for commercial kitchens, food and beverage plants and washdown areas that see hot water, grease and thermal shock. DFW based, across Texas and nationwide.",
  },
  "/mma-flooring": {
    title: `MMA Flooring | Fast-Cure Commercial Floors Overnight | ${B}`,
    description:
      "MMA (methyl methacrylate) flooring cures in hours, so restaurants, stores and clinics can get a new floor overnight or over a weekend. DFW, all of Texas and nationwide.",
  },
  "/novolac-epoxy-flooring": {
    title: `Novolac Epoxy Flooring | Chemical-Resistant Floor Coatings | ${B}`,
    description:
      "Novolac epoxy for battery rooms, chemical storage, containment and plants that handle acids and solvents. Chemical-resistant floors, DFW based, working across Texas and nationwide.",
  },
  "/battery-room-flooring": {
    title: `Battery Charging Room Flooring | Chemical-Resistant Epoxy | ${B}`,
    description:
      "Forklift battery charging area and battery room floors: acid-resistant epoxy with containment and safety striping. DFW, all of Texas and nationwide.",
  },
  "/esd-static-control-flooring": {
    title: `ESD Flooring & Static-Control Epoxy | ${B}`,
    description:
      "ESD and static-control flooring for electronics manufacturing, data centers, labs and server rooms. Based in DFW, working across Texas and nationwide.",
  },
  "/epoxy-cove-base": {
    title: `Epoxy Cove Base Installation | Integral Cove for Kitchens & Plants | ${B}`,
    description:
      "Integral epoxy cove base seals the joint between floor and wall so wash water can't get into the drywall. For kitchens, food plants and healthcare. DFW, all of Texas and nationwide.",
  },
  "/concrete-polishing": {
    title: `Concrete Polishing & Polished Concrete Floors | Dallas–Fort Worth | ${B}`,
    description:
      "Commercial and industrial concrete polishing for warehouses, retail, offices and showrooms. Dust-controlled grinding, approved sheen, low upkeep. DFW, all of Texas and nationwide.",
  },
  "/concrete-sealing": {
    title: `Commercial Concrete Sealing | Dallas–Fort Worth | ${B}`,
    description:
      "Commercial concrete sealing for restaurants, breweries, warehouses and retail: a clear seal that protects the slab from stains and wear. DFW, all of Texas and nationwide.",
  },
  "/moisture-mitigation": {
    title: `Concrete Moisture Testing & Mitigation | Before New Flooring | ${B}`,
    description:
      "Slab moisture testing and moisture mitigation before epoxy, LVT or carpet tile, so new floors don't bubble, peel or fail. DFW, all of Texas and nationwide.",
  },
  "/joint-filling-crack-repair": {
    title: `Concrete Joint Filling & Crack Repair | Warehouse Floors | ${B}`,
    description:
      "Warehouse joint filling, crack repair and spall repair so forklifts run smooth and joints stop breaking down. DFW, all of Texas and nationwide.",
  },
  "/commercial-floor-maintenance": {
    title: `Commercial Floor Cleaning & Maintenance | Dallas–Fort Worth | ${B}`,
    description:
      "Commercial floor cleaning and maintenance for coated floors, polished concrete and tile: deep cleaning and ongoing care that keeps floors looking new. Dallas–Fort Worth.",
  },
  "/parking-garage-coatings": {
    title: `Parking Garage Traffic Coatings | Dallas, Texas & Nationwide | ${B}`,
    description:
      "Parking garage traffic coatings and striping that protect the deck from water and road salt, phased level by level so the garage stays open. DFW, all of Texas and nationwide.",
  },
  "/deck-coatings": {
    title: `Commercial Deck Coatings | Balconies, Walkways & Stairs | ${B}`,
    description:
      "Commercial deck coatings for balconies, breezeways, stairs and walkways: waterproof, slip-resistant and built for foot traffic. DFW, all of Texas and nationwide.",
  },
  "/secondary-containment-coatings": {
    title: `Secondary Containment Coatings | Transformer Oil Containment | ${B}`,
    description:
      "Secondary containment coatings for transformer mineral oil at power stations and data centers, plus fuel and chemical containment. DFW based, working across Texas and nationwide.",
  },
  "/commercial-carpet-tile": {
    title: `Commercial Carpet Tile Installation | Dallas–Fort Worth | ${B}`,
    description:
      "Commercial carpet tile installation for offices, schools, healthcare and hotels, with removal, floor prep and after-hours installs. DFW, all of Texas and nationwide.",
  },
  "/commercial-lvt-flooring": {
    title: `Commercial LVT & LVP Flooring Installation | Dallas–Fort Worth | ${B}`,
    description:
      "Commercial LVT and LVP installation, glue-down and rigid core, plus sheet vinyl and VCT, with moisture testing and floor prep. DFW, all of Texas and nationwide.",
  },
  "/resilient-flooring": {
    title: `Commercial Resilient Flooring | LVT, Sheet Vinyl & Rubber | ${B}`,
    description:
      "Commercial resilient flooring: LVT, sheet vinyl, VCT and rubber, installed with proper moisture testing and prep. DFW, all of Texas and nationwide.",
  },
  "/restaurant-kitchen-flooring": {
    title: `Commercial Kitchen & Restaurant Flooring | Urethane Cement & Epoxy | ${B}`,
    description:
      "Restaurant and commercial kitchen floors that pass inspection: slip-resistant urethane cement, epoxy and integral cove base, installed overnight. DFW, all of Texas and nationwide.",
  },
  "/food-processing-flooring": {
    title: `Food & Beverage Plant Flooring | Urethane Cement & Epoxy | ${B}`,
    description:
      "Food and beverage processing floors built for washdown, hot water and thermal shock: urethane cement, epoxy and cove base. DFW, all of Texas and nationwide.",
  },
  "/pharmaceutical-flooring": {
    title: `Pharmaceutical & Supplement Manufacturing Flooring | ${B}`,
    description:
      "Seamless, cleanable floors for pharmaceutical, supplement and medical manufacturing: epoxy, urethane, cove base and polished concrete. DFW based, across Texas and nationwide.",
  },
  "/pharmacy-cleanroom-flooring": {
    title: `Cleanroom & Pharmacy Flooring | Seamless Epoxy | ${B}`,
    description:
      "Seamless cleanroom and compounding pharmacy floors with integral cove base, built to be cleaned and disinfected every day. DFW, all of Texas and nationwide.",
  },
  "/healthcare-flooring": {
    title: `Healthcare & Hospital Flooring | Seamless Epoxy | ${B}`,
    description:
      "Seamless, cleanable floors for hospitals, surgery centers, clinics and labs, phased around patient areas. DFW, all of Texas and nationwide.",
  },
  "/retail-flooring": {
    title: `Retail Store Flooring | Epoxy & Polished Concrete | ${B}`,
    description:
      "Retail and showroom floors: polished concrete, flake and epoxy that look sharp and hold up to carts and foot traffic, installed overnight. DFW, all of Texas and nationwide.",
  },
  "/office-flooring": {
    title: `Office Flooring | Polished Concrete, Carpet Tile & LVT | ${B}`,
    description:
      "Office and corporate flooring: polished concrete lobbies, carpet tile and LVT, and coated back-of-house, from one team. DFW, all of Texas and nationwide.",
  },
  "/school-flooring": {
    title: `School Flooring | Epoxy & Polished Concrete for K–12 & Universities | ${B}`,
    description:
      "School and university floors for corridors, kitchens, locker rooms and labs, scheduled around the academic calendar. DFW, all of Texas and nationwide.",
  },
  "/hotel-flooring": {
    title: `Hotel & Hospitality Flooring | Epoxy & Polished Concrete | ${B}`,
    description:
      "Hotel floors for lobbies, kitchens, back-of-house and parking, phased so rooms stay open. DFW, all of Texas and nationwide.",
  },
  "/auto-dealership-flooring": {
    title: `Auto Dealership & Service Shop Flooring | Epoxy & Polished Concrete | ${B}`,
    description:
      "Dealership showroom floors and service drive and shop coatings that stand up to hot tires, oil and chemicals. DFW, all of Texas and nationwide.",
  },
  "/multifamily-flooring": {
    title: `Multifamily Flooring | Garage & Breezeway Coatings | ${B}`,
    description:
      "Apartment and multifamily floors: garage coatings, breezeways, stairs, amenity spaces and units, phased around residents. DFW, all of Texas and nationwide.",
  },
  "/agriculture-facility-flooring": {
    title: `Agricultural & Food Facility Flooring | Epoxy & Urethane Cement | ${B}`,
    description:
      "Floors for agricultural, packing and food facilities that get washed down daily: urethane cement, epoxy and cove base. DFW, all of Texas and nationwide.",
  },
  "/services": {
    title: `Commercial & Industrial Flooring Services | Epoxy, Polished Concrete & Coatings | ${B}`,
    description:
      "Every floor we install: commercial and industrial epoxy, polished concrete, urethane cement, specialty coatings, repairs, striping, carpet tile and LVT. DFW, all of Texas and nationwide.",
  },
  "/industries": {
    title: `Industries We Serve | Warehouse, Manufacturing, Food, Data Center Flooring | ${B}`,
    description:
      "Flooring for warehouses, manufacturing, food processing, aviation, data centers, healthcare, restaurants, retail and more. DFW, all of Texas and nationwide.",
  },
  "/resources": {
    title: `Commercial Flooring Resource Center | Costs, Comparisons & Guides | ${B}`,
    description:
      "Straight answers on commercial epoxy and polished concrete costs, floor comparisons, forklift and kitchen floors, ESD testing and install timelines.",
  },
  "/who-we-serve": {
    title: `Industries We Serve | Commercial & Industrial Flooring | ${B}`,
    description:
      "Flooring for warehouses, manufacturing, data centers, food plants, healthcare, restaurants, retail, schools and more. DFW based, working across Texas and nationwide.",
  },
  "/service-areas": {
    title: `Service Areas | Epoxy Flooring Across Dallas–Fort Worth, Texas & Nationwide | ${B}`,
    description:
      "Commercial epoxy flooring, polished concrete and floor coatings across Dallas, Fort Worth, Plano, Frisco, McKinney, all of Texas and projects nationwide.",
  },
};
