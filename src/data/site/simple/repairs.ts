import type { SimpleContent } from "./types";

/**
 * "Problems & Repairs" landing pages for people who search by the problem
 * (peeling epoxy, dusty slab, failed kitchen floor), not by the product.
 * A taste of each repair; the details are handled in the site walk and the bid.
 */
export type RepairPage = {
  path: string;
  /** Keyword-first H1, e.g. "Warehouse Floor Repair". */
  h1: string;
  eyebrow: string;
  /** No brand suffix, <= 55 chars, keyword first. */
  metaTitle: string;
  /** 140–158 chars: what, for whom, where. */
  metaDescription: string;
  /** JOB photo key (landscape). */
  heroKey: string;
  /** 3 JOB photo keys, none matching heroKey. */
  photoKeys: string[];
  related: { label: string; path: string }[];
  content: SimpleContent;
};

export const REPAIR_PAGES: RepairPage[] = [
  {
    path: "/warehouse-floor-repair",
    h1: "Warehouse Floor Repair",
    eyebrow: "Floor Repair",
    metaTitle: "Warehouse Floor Repair in Dallas, TX",
    metaDescription:
      "Warehouse floor repair for failing joints, spalls, cracks, worn coatings and faded striping. Phased night and weekend work in Dallas–Fort Worth and Texas.",
    heroKey: "crewWarehouse",
    photoKeys: ["polSpall", "stripingFix", "walkwayAfter"],
    related: [
      { label: "Joint Filling & Crack Repair", path: "/joint-filling-crack-repair" },
      { label: "Warehouse Flooring", path: "/warehouse-flooring" },
      { label: "Line Striping", path: "/line-striping" },
      { label: "Industrial Epoxy Flooring", path: "/commercial" },
      { label: "Best Flooring for Forklift Traffic", path: "/blog/best-flooring-for-forklift-traffic" },
    ],
    content: {
      intro:
        "Broken joints, spalls, cracks, worn coatings and faded striping slow down forklifts and wear out equipment. We repair warehouse floors across Dallas–Fort Worth and Texas in phases, at night and on weekends, so shipping keeps moving.",
      overviewTitle: "How Do You Repair a Warehouse Floor?",
      overview: [
        "You repair a warehouse floor by fixing the slab first and the surface second. Failed joints are cut out and refilled, spalls and cracks are patched flush, then worn coatings and striping are ground off and replaced so forklifts roll smooth again.",
        "We start with a site walk to see what is failing and why, then plan the work zone by zone around your operation. At a 40,000 SF distribution center in Plano, we removed faded, poorly installed striping and replaced it with epoxy, a high-traffic urethane finish and new striping in about two weeks.",
      ],
      featuresTitle: "What We Repair in Warehouses",
      features: [
        { title: "Failing joints", text: "Broken, empty or chipped joints are cleaned out and refilled so wheels stop slamming across them." },
        { title: "Spalls and cracks", text: "Chipped edges, pop-outs and cracks are patched and ground flush with the surrounding slab." },
        { title: "Forklift damage", text: "Gouges, ruts and worn traffic lanes are rebuilt before they grow into bigger slab problems." },
        { title: "Worn or peeling coatings", text: "Failed coatings are ground off and replaced with a floor sized to your traffic." },
        { title: "Faded striping", text: "Worn aisle lines and safety markings are removed and redone so they stay bright and visible." },
        { title: "Phased around operations", text: "Night, weekend and zone-by-zone work keeps receiving, picking and shipping running." },
      ],
      faqs: [
        {
          q: "Can you repair our warehouse floor while we stay open?",
          a: "Yes. Most warehouse repairs are phased zone by zone, with racks, aisles and docks taken out of service a section at a time. We also work nights and weekends so the busiest hours stay clear, and confirm when each area can take traffic again before we schedule.",
        },
        {
          q: "How much does warehouse floor repair cost?",
          a: "It depends on how much is failing and what caused it: how many feet of joints, the size and depth of spalls, whether old coatings come off, striping, and how much after-hours phasing you need. A site walk lets us see the slab and give you a firm price instead of a guess.",
        },
        {
          q: "Should we repair joints before coating or polishing?",
          a: "Yes. Joints and cracks are repaired first so the new floor has a sound, flush surface underneath it. Coating over a failing joint just hides the problem until the joint breaks the coating too. Repairs are ground flush so they blend into the finished floor.",
        },
        {
          q: "Do we need a full new floor or just repairs?",
          a: "Often just repairs. If the slab is sound and the damage is limited to joints, spalls and worn lanes, targeted repairs and new striping may be all you need. If the coating is failing across the building, a full recoat or new system makes more sense.",
        },
      ],
    },
  },

  {
    path: "/epoxy-floor-repair",
    h1: "Epoxy Floor Repair & Recoating",
    eyebrow: "Floor Repair",
    metaTitle: "Epoxy Floor Repair & Recoating in Dallas, TX",
    metaDescription:
      "Epoxy floor repair for peeling, bubbling, yellowing and worn traffic lanes. We find why the floor failed, then recoat or replace it. Serving DFW and Texas.",
    heroKey: "mfgEpoxy",
    photoKeys: ["parishBefore", "moisture", "epoxyTexture"],
    related: [
      { label: "Industrial Epoxy Flooring", path: "/commercial" },
      { label: "Moisture Mitigation", path: "/moisture-mitigation" },
      { label: "Joint Filling & Crack Repair", path: "/joint-filling-crack-repair" },
      { label: "Commercial Floor Maintenance", path: "/commercial-floor-maintenance" },
      { label: "How Long Does Epoxy Installation Take?", path: "/blog/how-long-does-commercial-epoxy-installation-take" },
    ],
    content: {
      intro:
        "Peeling, bubbling, yellowing or worn-through epoxy usually means something went wrong under the coating. We find out why the floor failed, then recoat it or remove it and start over the right way.",
      overviewTitle: "What Causes Epoxy Floors to Peel?",
      overview: [
        "Most epoxy floors peel because the coating never bonded well to the concrete. The usual causes are poor surface prep, moisture coming up through the slab, or a system too thin or the wrong type for the traffic and chemicals it sees.",
        "On floors across Dallas–Fort Worth and Texas, we look at how the coating is failing and test the slab for moisture before we quote a fix. If it is still well bonded and just worn, it can often be sanded and recoated. If it is lifting, bubbling or delaminating, it has to come off down to clean concrete first.",
      ],
      featuresTitle: "Epoxy Problems We Fix",
      features: [
        { title: "Peeling and delaminating", text: "Coating lifting off the slab is ground off and replaced over properly prepared concrete." },
        { title: "Bubbling and blisters", text: "We test for moisture and outgassing first, so the new floor does not blister the same way." },
        { title: "Yellowing and fading", text: "Discolored epoxy gets a UV-stable topcoat or a recoat so the floor looks clean again." },
        { title: "Hot-tire pickup", text: "Coatings lifted by hot tires are replaced with a build and topcoat made for vehicle traffic." },
        { title: "Worn traffic lanes", text: "Lanes worn to bare concrete are repaired and recoated with a tougher, high-traffic finish." },
        { title: "Root cause, not a patch", text: "Prep, moisture and system choice are fixed so the new floor does not fail like the last one." },
      ],
      faqs: [
        {
          q: "Can you recoat over an old epoxy floor?",
          a: "Sometimes. If the old coating is still tightly bonded and the floor is just worn or dull, we sand it, repair damaged spots and apply a new topcoat. If it is peeling, bubbling or lifting anywhere, recoating only traps the problem, so it has to come off first.",
        },
        {
          q: "Why did my epoxy floor fail?",
          a: "The most common reasons are poor prep, like coating over smooth or dirty concrete without diamond grinding, moisture or vapor from the slab, and a system that was too thin for forklifts, hot tires or chemicals. We look at the failure pattern to tell which one it was.",
        },
        {
          q: "How much does epoxy floor repair cost?",
          a: "It depends on whether the floor can be recoated or must be removed, the square footage, moisture test results, joint and crack repair, and how the work is phased. A site walk shows us how the floor is failing so we can price the right fix, not just a patch.",
        },
        {
          q: "Can you repair the floor while the building stays open?",
          a: "Yes. We phase the work zone by zone and can schedule nights and weekends so your busiest areas stay in use. Low-odor options are available for occupied buildings, and we confirm when each zone can take traffic again before we start.",
        },
        {
          q: "Can you fix just the damaged spots?",
          a: "Small, isolated damage can often be patched, but patches on epoxy usually show. If the failure is spread across the floor or the cause is moisture or bad prep, spot repairs will keep failing. We will tell you honestly which approach makes sense for your floor.",
        },
      ],
    },
  },

  {
    path: "/concrete-floor-resurfacing",
    h1: "Commercial Concrete Floor Resurfacing",
    eyebrow: "Floor Repair",
    metaTitle: "Commercial Concrete Resurfacing in Dallas, TX",
    metaDescription:
      "Commercial concrete floor resurfacing for worn, pitted, stained or uneven slabs: grinding, patching and overlays, then coating or polishing. DFW and Texas.",
    heroKey: "parishGrind",
    photoKeys: ["polJoint", "parishAfter", "polCorridor"],
    related: [
      { label: "Concrete Polishing", path: "/concrete-polishing" },
      { label: "Industrial Epoxy Flooring", path: "/commercial" },
      { label: "Joint Filling & Crack Repair", path: "/joint-filling-crack-repair" },
      { label: "Flake Floors", path: "/flake-floors" },
      { label: "Sealed vs. Polished Concrete", path: "/blog/sealed-vs-polished-concrete" },
    ],
    content: {
      intro:
        "Worn, pitted, stained or uneven concrete does not always need to be torn out. We grind, patch and level the slab you have, then finish it with a coating or a polish built for how the space is used.",
      overviewTitle: "How Do You Resurface a Commercial Concrete Floor?",
      overview: [
        "You resurface a commercial concrete floor by diamond grinding off the worn top layer and old coatings, patching pits, spalls and cracks, and leveling low spots with an overlay or self-leveling underlayment where needed. Then the floor is finished with a coating or polished.",
        "We start with a site walk to see what the slab can support, across Dallas–Fort Worth and Texas. At a Dallas school lab, a worn painted floor was ground off and replaced with a flake floor of polyurea base coat and polyaspartic topcoat. On sound slabs, grinding and polishing alone can bring tired concrete back.",
      ],
      featuresTitle: "How We Resurface Concrete",
      features: [
        { title: "Diamond grinding", text: "Old coatings, adhesives, stains and the weak top layer are ground down to clean, sound concrete." },
        { title: "Patching and crack repair", text: "Pits, spalls, cracks and joints are filled and ground flush so the new surface is smooth." },
        { title: "Overlays and leveling", text: "Uneven or badly worn slabs get an overlay or self-leveling underlayment to create a flat base." },
        { title: "Coating or polishing", text: "Finish with epoxy, flake or quartz for color and protection, or polish the slab itself." },
        { title: "Moisture tested first", text: "We test the slab before any coating goes down so the new floor bonds and stays bonded." },
      ],
      faqs: [
        {
          q: "Is resurfacing cheaper than replacing the concrete?",
          a: "Usually, yes. Tearing out and repouring a slab means demolition, downtime and cure time. Resurfacing works with the concrete you already have, so it is typically faster and less disruptive. If the slab is structurally failing, we will tell you, but most worn floors can be resurfaced.",
        },
        {
          q: "How much does concrete floor resurfacing cost?",
          a: "It depends on the size of the floor, what has to be removed, how much patching or leveling the slab needs, and the finish you choose. For reference, polished concrete runs about $2.25–$8/SF and flake about $7.50–$9/SF before repairs. A site walk sets the actual price.",
        },
        {
          q: "Should we coat or polish after resurfacing?",
          a: "Polishing fits sound slabs in dry spaces where you want low maintenance and no coating to wear off. A coating is the better pick when you need color, chemical resistance, a sealed surface or coverage over heavy patching. We help you choose based on how the floor is used.",
        },
        {
          q: "Can you resurface while the building stays open?",
          a: "Yes. We grind with dust control and phase the work zone by zone, so offices, stores and warehouses can keep operating. Night and weekend work keeps the busiest areas available, and we confirm return-to-service times for each zone before we start.",
        },
      ],
    },
  },

  {
    path: "/concrete-dusting-repair",
    h1: "Concrete Dusting Repair",
    eyebrow: "Floor Repair",
    metaTitle: "Concrete Dusting Repair in Dallas, TX",
    metaDescription:
      "Concrete dusting repair for chalky, dusty warehouse slabs. We densify, grind and polish, or seal and coat to stop the dust. Serving DFW and Texas.",
    heroKey: "polishedIndustrial",
    photoKeys: ["polBefore", "shinyBefore", "polWarehouse"],
    related: [
      { label: "Concrete Polishing", path: "/concrete-polishing" },
      { label: "Concrete Sealing", path: "/concrete-sealing" },
      { label: "Warehouse Flooring", path: "/warehouse-flooring" },
      { label: "Industrial Epoxy Flooring", path: "/commercial" },
      { label: "Sealed vs. Polished Concrete", path: "/blog/sealed-vs-polished-concrete" },
    ],
    content: {
      intro:
        "A dusty, chalky slab coats your racks, products and equipment and never seems clean. We stop concrete dusting by hardening the surface, polishing it, or sealing and coating it.",
      overviewTitle: "Why Is My Concrete Floor Dusting?",
      overview: [
        "Concrete dusts when the top layer of the slab is weak and wears away under traffic into a fine powder. It usually comes from how the slab was finished or cured, or from years of wear that broke down the surface paste.",
        "Sweeping and scrubbing will not fix it, because the slab keeps shedding. We see it often in older warehouses around Dallas–Fort Worth and across Texas. The fix is to remove the weak layer and harden what is underneath. On sound slabs, grinding, densifying and polishing ends the dust for good. Where you need color or chemical protection, we grind and seal or coat the floor instead.",
      ],
      featuresTitle: "How We Stop Concrete Dusting",
      features: [
        { title: "Grind off the weak layer", text: "Diamond grinding removes the soft, powdery surface down to harder, sound concrete." },
        { title: "Densify the slab", text: "A densifier soaks into the concrete and hardens it so the surface stops breaking down." },
        { title: "Polish for a lasting finish", text: "Polishing tightens the surface into a durable, low-maintenance floor that does not shed." },
        { title: "Seal or coat when needed", text: "A sealer or coating locks the surface down where you want color, protection or easier cleaning." },
        { title: "Dust-controlled work", text: "We grind with dust collection so your racks and products are not covered while we fix the floor." },
      ],
      faqs: [
        {
          q: "Can a dusting concrete floor be fixed?",
          a: "Yes. The dust comes from a weak surface layer, so the fix is to grind it off and harden what is underneath. Densifying and polishing is the long-term fix for most warehouse slabs. Sealing or coating also works when the slab is prepped right first.",
        },
        {
          q: "Will a sealer stop concrete dusting?",
          a: "A sealer can help, but only if the weak, powdery layer is removed first. Sealing over a dusting slab without prep often wears off or peels in traffic lanes. Grinding and densifying first gives the sealer or coating sound concrete to bond to.",
        },
        {
          q: "How much does concrete dusting repair cost?",
          a: "It depends on the square footage, how deep the weak layer goes, and whether you choose densifying and polishing, a sealer or a coating. Racking, product moves and phasing also matter. For reference, polished concrete runs about $2.25–$8/SF. A site walk sets the price for your slab.",
        },
        {
          q: "Can you fix the floor while the warehouse stays open?",
          a: "Yes. We grind with dust control and work aisle by aisle or zone by zone, with nights and weekends available. Polished concrete has no coating to cure, so usually only the zone we are working in is out of service while the rest of the building runs.",
        },
      ],
    },
  },

  {
    path: "/commercial-kitchen-floor-repair",
    h1: "Commercial Kitchen Floor Repair",
    eyebrow: "Floor Repair",
    metaTitle: "Commercial Kitchen Floor Repair in Dallas, TX",
    metaDescription:
      "Commercial kitchen floor repair for broken quarry tile, failed epoxy, missing cove base and drains. Seamless floors, installed overnight. DFW and Texas.",
    heroKey: "quartzCove",
    photoKeys: ["indKitchen", "washroomAfter", "foodPlant"],
    related: [
      { label: "Restaurant Kitchen Flooring", path: "/restaurant-kitchen-flooring" },
      { label: "Urethane Cement Flooring", path: "/urethane-cement-flooring" },
      { label: "Epoxy Cove Base", path: "/epoxy-cove-base" },
      { label: "Quartz Flooring", path: "/quartz-flooring" },
      { label: "Best Flooring for Commercial Kitchens", path: "/blog/best-flooring-for-commercial-kitchens" },
    ],
    content: {
      intro:
        "Cracked quarry tile, washed-out grout, failed epoxy and missing cove base trap water and bacteria and show up on health inspections. We replace failing kitchen floors across Dallas–Fort Worth and Texas with seamless systems, often overnight.",
      overviewTitle: "What Is the Best Way to Fix a Failing Commercial Kitchen Floor?",
      overview: [
        "The best way to fix a failing commercial kitchen floor is to replace the broken tile, grout or coating with a seamless floor that has integral cove base and properly sloped drains. Urethane cement is the go-to for hot water, grease and daily washdown.",
        "Spot-fixing tile and regrouting usually buys a few months before the next failure. A seamless floor removes the grout lines where water and bacteria collect. At a Dallas restaurant pump room that failed a health inspection, we fixed it with integral epoxy cove base so the walls and floor clean as one surface.",
      ],
      featuresTitle: "Kitchen Floor Problems We Fix",
      features: [
        { title: "Broken quarry tile and grout", text: "Cracked tile and washed-out grout are removed or covered with a seamless, sanitary floor." },
        { title: "Failed epoxy", text: "Peeling or blistered kitchen coatings are replaced with a system built for heat and washdown." },
        { title: "Missing or failed cove base", text: "Integral cove base runs the floor up the wall so there is no seam for water or dirt." },
        { title: "Drains and ponding water", text: "Floors are sloped and tied into drains so water moves off the floor instead of sitting." },
        { title: "Health inspection findings", text: "We fix the floor, cove and drain issues that inspectors write up, so you can pass the recheck." },
        { title: "Overnight installs", text: "Work is scheduled after close and phased so the kitchen can reopen for service." },
      ],
      faqs: [
        {
          q: "Can you repair our kitchen floor without closing the restaurant?",
          a: "Usually, yes. We schedule kitchen work overnight after close and phase it area by area, so the line, prep and dish areas can reopen for service. Cure times depend on the system, and we confirm exactly when each area is back in use before we start.",
        },
        {
          q: "How much does commercial kitchen floor repair cost?",
          a: "It depends on whether tile or old coatings have to come out, the condition of the slab, drains, how many linear feet of cove base you need, and overnight phasing. For reference, urethane cement runs about $21/SF and integral cove base about $15 per linear foot. A site walk sets the final price.",
        },
        {
          q: "Should we replace quarry tile or coat over it?",
          a: "If the tile is loose, cracked or hollow, it should come out. Coating over failing tile just moves the failure to the new floor. If the tile is tightly bonded, it can sometimes be prepped and covered. We check during the site walk.",
        },
        {
          q: "What is the best floor for a commercial kitchen?",
          a: "For most kitchens, urethane cement with integral cove base. It handles hot water, grease, steam cleaning and thermal shock that break down standard epoxy. Quartz or epoxy can work in drier areas like storage, back halls and walk-ins.",
        },
        {
          q: "Will a new floor help us pass a health inspection?",
          a: "It addresses the floor issues inspectors look for: cracked tile, missing grout, gaps at the wall and standing water. A seamless floor with integral cove base and sloped drains is easy to clean and leaves no seams for bacteria. We fix the floor; the rest of the inspection is up to your team.",
        },
      ],
    },
  },
];
