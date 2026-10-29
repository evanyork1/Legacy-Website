import type { SimpleContent } from "./types";

/**
 * Short, simple system page copy. A taste of each system; the details are
 * handled in the site walk and the bid.
 */
export const SIMPLE_SYSTEMS: Record<string, SimpleContent> = {
  "/commercial": {
    intro:
      "Industrial epoxy flooring built for forklifts, foot traffic and production work. We prepare the slab right, match the floor to your traffic and keep your operation running while we work.",
    overviewTitle: "Industrial Epoxy Flooring That Holds Up",
    overview: [
      "Industrial epoxy flooring is a seamless resin floor bonded to your concrete. It can be a thin coating for light traffic, a high-build epoxy for heavier use or a troweled epoxy mortar for the hardest impact. Color, texture and safety zones are built in.",
      "Most epoxy failures start before the first coat goes down. We test the slab for moisture, diamond grind it and repair cracks and joints first. Then we choose the build for your traffic, chemicals and schedule, and phase the work at night, on weekends or zone by zone.",
    ],
    featuresTitle: "Why Facilities Choose Industrial Epoxy",
    features: [
      { title: "Built for forklifts", text: "From high-build epoxy to troweled mortar, we size the floor to the loads it sees every day." },
      { title: "Prep that makes it last", text: "Moisture testing, diamond grinding and crack repair come first, because the bond decides how long the floor lasts." },
      { title: "Seamless and easy to clean", text: "No grout lines or open pores to trap dirt, oil or spills. Routine cleaning keeps it looking sharp." },
      { title: "Safety built into the floor", text: "Slip-resistant texture, color-coded zones, aisle striping and integral cove can all go in during the same project." },
      { title: "Low-odor options", text: "Low-odor epoxy is available for occupied buildings, with ventilation and work zones planned around your people." },
      { title: "Installed around your schedule", text: "Night, weekend and phased installs keep shipping and production moving while we work." },
    ],
    faqs: [
      {
        q: "What is the best industrial floor coating?",
        a: "It depends on what the floor has to survive. For most warehouses and production floors, industrial epoxy flooring is the workhorse. Novolac epoxy handles harsher chemicals, urethane cement handles hot washdown, and MMA fits the tightest shutdown windows.",
      },
      {
        q: "Can forklifts drive on an epoxy floor?",
        a: "Yes. Industrial epoxy is made for forklift and cart traffic as long as the build matches the load. Heavier traffic gets a textured high-build epoxy or epoxy mortar instead of a thin coating. We size the floor to how your equipment actually moves.",
      },
      {
        q: "How long does installation take?",
        a: "It depends on the size of the floor, the prep and the build. We phase large floors zone by zone so the building keeps running, and confirm return-to-service times before scheduling. If downtime is measured in hours, we look at MMA.",
      },
      {
        q: "Epoxy or polished concrete for a warehouse?",
        a: "Polished concrete works well on sound slabs in dry distribution space and needs no cure time. Epoxy is the better pick when you need color, safety zones, chemical resistance or a sealed surface over a damaged slab. Many buildings use both.",
      },
      {
        q: "How much does industrial epoxy flooring cost?",
        a: "Price depends more on the slab and schedule than the resin: square footage, old coating removal, moisture results, the build, crack and joint repair, cove, striping and after-hours phasing. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/concrete-polishing": {
    intro:
      "Polished concrete turns the slab you already have into a durable, low-maintenance floor. No coating to peel, little downtime and a finish you approve on your own concrete first.",
    overviewTitle: "Polished Concrete for Commercial and Industrial Floors",
    overview: [
      "Polished concrete is your existing slab, ground with progressively finer diamond tooling, hardened with a densifier and polished to the sheen you choose. Because the concrete itself is the floor, there is nothing to wear through under forklifts or foot traffic.",
      "Every slab is different, so we start with a mockup on your concrete. You pick how much stone shows, from a smooth cream finish to salt-and-pepper or exposed aggregate, and how much it shines. We grind with dust control and phase the work so warehouses, stores and offices stay open.",
    ],
    featuresTitle: "Why Owners Choose Polished Concrete",
    features: [
      { title: "Uses the slab you own", text: "No added coating layer, so there is nothing to peel, chip or wear off under traffic." },
      { title: "Little downtime", text: "There is no coating to cure, so usually only the zone we are working in is out of service." },
      { title: "Low maintenance", text: "Dust mop, auto-scrub with a neutral cleaner and burnish busy areas from time to time. No waxing." },
      { title: "Brighter spaces", text: "A higher sheen reflects light across showrooms, stores and warehouses, while a matte finish hides wear." },
      { title: "A finish you approve first", text: "A mockup on your slab sets the look before we polish the whole floor, so there are no surprises." },
      { title: "Joints and cracks handled", text: "We fill joints and repair cracks so the floor is serviceable while keeping the character of the concrete." },
    ],
    faqs: [
      {
        q: "Can you polish our existing slab?",
        a: "Often, yes. Old coatings, adhesives, contamination and past repairs all affect the result, so we assess the slab and set expectations with a mockup first. Polished concrete keeps the character of the original slab, including some visible cracks and patches.",
      },
      {
        q: "Is polished concrete slippery?",
        a: "Clean, dry polished concrete generally has good traction, and shine alone does not make it slippery. Water, oil and dust reduce grip, so entries and wet areas need matting and a cleaning plan. Where floors stay wet, we may suggest a different system.",
      },
      {
        q: "Polished concrete or epoxy for a distribution center?",
        a: "For a sound slab in dry distribution space, polished concrete is durable, low maintenance and has no coating to wear off under forklifts. Epoxy makes more sense when you need color, safety zones, chemical resistance or a sealed surface over a damaged slab.",
      },
      {
        q: "How long does polished concrete last?",
        a: "The polished slab is the wearing surface, so there is no coating to peel. With routine cleaning and periodic burnishing in busy areas, polished concrete keeps its look for many years. We hand over a simple maintenance plan at closeout.",
      },
      {
        q: "How much does polished concrete cost?",
        a: "Price depends mostly on slab condition and the finish: coating removal, crack and joint repair, how much stone shows, the sheen level, square footage and after-hours phasing. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/commercial-carpet-tile": {
    intro:
      "Commercial carpet tile installation from one crew, start to finish. We remove the old floor, prep the slab and install after hours so your office, school or building keeps working.",
    overviewTitle: "Commercial Carpet Tile Installation, Start to Finish",
    overview: [
      "Carpet tile is modular carpet glued down in squares or planks, so a stained or worn tile can be swapped instead of replacing the whole room. It is quiet, comfortable and the go-to soft floor for offices, schools, clinics, hotels and multifamily.",
      "What makes a carpet tile floor last happens before the first tile goes down. Our crew removes the old carpet, VCT or vinyl and adhesive, patches and levels the slab, tests moisture and installs to the manufacturer's requirements so the warranty holds. We work nights and weekends and move furniture zone by zone.",
    ],
    featuresTitle: "What You Get",
    features: [
      { title: "Old floor removal", text: "We tear out existing carpet, VCT, vinyl and old adhesive, so you do not need a separate demo contractor." },
      { title: "Floor prep done right", text: "Grinding, patching and leveling give the tile a flat, sound base, and moisture testing protects the adhesive bond." },
      { title: "After-hours installs", text: "Night, weekend and phased work, with furniture lifted or moved by zone, keeps your building open." },
      { title: "One crew, start to finish", text: "Removal, prep, carpet tile, wall base and transitions handled by one team on one schedule." },
      { title: "Easy to replace later", text: "We leave extra tiles from the same dye lot, so a damaged tile can be swapped with an exact match." },
    ],
    faqs: [
      {
        q: "Can you install carpet tile in an occupied office?",
        a: "Yes. That is most of our commercial carpet tile installation work. We run nights and weekends, lift or move furniture in zones and phase the floor so your team keeps working. You get the schedule before we start.",
      },
      {
        q: "Do you remove the old flooring?",
        a: "Yes. Old carpet always comes out, and most of the time we remove VCT or vinyl too, along with the old adhesive. Then we prep and test the slab so the new floor bonds properly and keeps the manufacturer's warranty.",
      },
      {
        q: "Do you install carpet tile on raised access floors?",
        a: "Yes. Carpet tile is the usual finish over access floor because tiles lift out with the panels for cabling access. We lay out the tile so the seams and panel joints work together.",
      },
      {
        q: "Do you also handle wall base and transitions?",
        a: "Yes. Rubber wall base, reducers and transitions to LVT, polished concrete or resinous floors are part of our scope, so there is no gap between trades and the finished room looks complete at closeout.",
      },
      {
        q: "How much does commercial carpet tile installation cost?",
        a: "It depends on the product, square footage, removal of the existing floor, how much prep the slab needs, furniture moves and after-hours work. Site walks happen within 1–3 business days, and we return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/commercial-lvt-flooring": {
    intro:
      "Commercial LVT and LVP installation from one crew, start to finish. We remove the old floor, prep and test the slab and install after hours so your building stays open.",
    overviewTitle: "Commercial LVT and LVP, Installed Right",
    overview: [
      "LVT (luxury vinyl tile) and LVP (luxury vinyl plank) look like stone or wood but clean like vinyl. Commercial LVT has a heavier wear layer and is usually glued down so it handles carts, rolling chairs and busy corridors. Rigid-core click LVP fits smaller spaces and unit turns.",
      "Most LVT failures come from the slab, not the vinyl. Our crew removes the old floor and adhesive, patches and levels the concrete, tests moisture and uses the adhesive the manufacturer calls for, so your warranty holds. We work nights, weekends and in phases around your people.",
    ],
    featuresTitle: "What You Get",
    features: [
      { title: "Old floor removal", text: "Carpet, VCT, sheet vinyl, ceramic tile or worn-out LVT comes out, along with the old adhesive." },
      { title: "Floor prep that prevents failures", text: "Grinding, patching, leveling and moisture testing give the vinyl a flat, dry base that will not let go." },
      { title: "After-hours installs", text: "Night, weekend and phased work keeps offices, clinics, stores and schools running while we install." },
      { title: "One crew, start to finish", text: "Removal, prep, LVT or LVP, wall base, stair treads and transitions handled by one team." },
      { title: "Low maintenance", text: "Commercial LVT wet-cleans easily and typically needs no wax, unlike VCT." },
    ],
    faqs: [
      {
        q: "What is the difference between LVT and LVP?",
        a: "They are the same type of floor in different shapes. LVT, luxury vinyl tile, usually means square or rectangular stone and tile looks. LVP, luxury vinyl plank, means wood-look planks. Both come in commercial grades with heavier wear layers than residential products.",
      },
      {
        q: "Glue-down or click LVP for a commercial building?",
        a: "Glue-down is the standard for commercial LVT where there are rolling loads, carts, large open areas and heavy traffic. Rigid-core click LVP works well in multifamily units and smaller spaces where a floating floor is approved. We recommend one after seeing the space.",
      },
      {
        q: "Can LVT go over existing tile or VCT?",
        a: "Sometimes. Well-bonded, flat VCT or tile can work if the manufacturer allows it, often with a skim coat. Otherwise we remove it and prep the slab, which is the safer path for the warranty.",
      },
      {
        q: "Can you install LVT in an occupied building?",
        a: "Yes. We phase the work, run nights and weekends and move furniture by zone so the building keeps operating. Glue-down floors usually take foot traffic the same day, with heavy rolling loads waiting a little longer.",
      },
      {
        q: "How much does commercial LVT installation cost?",
        a: "It depends on the product, square footage, removal of the existing floor, floor prep, glue-down or click installation and after-hours work. Site walks happen within 1–3 business days, and we return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/secondary-containment-coatings": {
    intro:
      "We line transformer oil containment pits, curbs and basins at substations, power plants and data centers, plus generator fuel and chemical containment, so a leak stays where it belongs.",
    overviewTitle: "Transformer Oil and Secondary Containment Linings",
    overview: [
      "Oil-filled transformers sit over a concrete pit, curb or basin meant to catch the oil if the tank leaks or fails. Bare concrete is not enough on its own. It cracks, shrinks and has joints and penetrations, and oil and water find every one of them.",
      "We seal the floor, walls, joints and penetrations into one continuous lining that bridges cracks and moves with the concrete. The containment design belongs to the owner's engineer and the facility's spill plan (SPCC). Our job is to make the structure hold oil, working within your outage and safety rules.",
    ],
    featuresTitle: "What the Lining Does",
    features: [
      { title: "Bridges cracks", text: "Flexible, crack-bridging linings move with the concrete, so a new hairline crack does not become a leak path." },
      { title: "Seals joints and penetrations", text: "Corners, cold joints, conduit and drains are detailed as part of the same lining, not left as weak spots." },
      { title: "Resists the fluid on site", text: "We confirm resistance to your specific transformer oil, diesel or chemical before choosing the lining." },
      { title: "Holds up outdoors", text: "UV-stable topcoats protect exposed curbs and walls from sun, rain and temperature swings." },
      { title: "Easy to inspect", text: "A light, uniform surface makes cracks, staining and damage easy to spot on routine inspections." },
      { title: "Fuel and chemical containment", text: "Generator fuel dikes, day tank areas, chemical storage curbs and battery rooms get the same careful detailing." },
    ],
    faqs: [
      {
        q: "Why isn't bare concrete good enough for a transformer pit?",
        a: "Concrete cracks, shrinks and has joints and penetrations. Oil and rainwater move through those openings over time. A continuous, crack-bridging lining keeps the pit tight so it can hold oil until cleanup.",
      },
      {
        q: "Does a coating make my facility compliant?",
        a: "Not on its own. Compliance comes from your spill plan and the containment design set by your engineer. The lining makes the structure capable of holding oil, which is what that plan relies on. We work from the engineer's drawings.",
      },
      {
        q: "Can you line a pit that already has stone and old oil in it?",
        a: "Yes. We remove the stone, pump out water, clean or remove oil-soaked concrete, repair cracks, line the pit and inspect it before the stone goes back in. The pit comes back clean, sealed and ready for service.",
      },
      {
        q: "Can you work at an energized substation or operating data center?",
        a: "Yes. We work under the owner's safety program, outage plan and escort rules, and schedule pits and curbs around the access windows you set. Nothing starts until your team has signed off on the plan.",
      },
      {
        q: "How much does a containment lining cost?",
        a: "It depends on the number and size of pits and curbs, whether stone and old oil have to come out, how much concrete repair is needed, the fluid being contained and your outage windows. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/resilient-flooring": {
    intro:
      "Carpet tile, LVT and LVP, sheet vinyl, rubber and VCT, installed by one crew that also removes the old floor and preps the slab. We help you pick the right floor for each room.",
    overviewTitle: "Commercial Resilient Flooring for Every Room",
    overview: [
      "Resilient flooring covers the soft and vinyl floors found in most commercial interiors. Our two most requested are commercial carpet tile and commercial LVT and LVP, and each has its own page with more detail.",
      "Whatever the finish, the slab decides how long it lasts. We remove the old floor and adhesive, patch and level, test moisture and install to the manufacturer's requirements. Night, weekend and phased work keeps your building open.",
    ],
    featuresTitle: "Floors We Install",
    features: [
      { title: "Commercial carpet tile", text: "Modular carpet for offices, schools, clinics and hotels. Damaged tiles swap out without redoing the room." },
      { title: "Commercial LVT and LVP", text: "Wood and stone looks that wet-clean easily, glued down for heavy traffic or click for smaller spaces." },
      { title: "Sheet vinyl", text: "Few seams, heat welded where needed, for healthcare and lab spaces that need a tight, cleanable floor." },
      { title: "Rubber", text: "Rubber flooring and wall base for comfort, sound control and busy circulation areas." },
      { title: "VCT", text: "A budget-friendly tile for back-of-house areas and schools, paired with a regular strip and wax program." },
    ],
    faqs: [
      {
        q: "How do you choose between carpet tile, LVT, sheet vinyl and rubber?",
        a: "We look at how each room is used and cleaned, plus traffic, comfort and seam needs. Many buildings use several: carpet tile in offices, LVT in break rooms and lobbies, and sheet vinyl in clinical spaces.",
      },
      {
        q: "Does every resilient floor need strip and wax?",
        a: "No. VCT relies on a strip and wax program, but most LVT, sheet vinyl and rubber products use other care methods. We follow the manufacturer's maintenance guidance and hand it over at closeout.",
      },
      {
        q: "Why test moisture under vinyl and carpet?",
        a: "Moisture and high pH in the slab are the top causes of adhesive failure. Testing tells us whether a mitigation primer is needed before the floor goes down, which protects the bond and the warranty.",
      },
      {
        q: "How much does commercial resilient flooring cost?",
        a: "It depends on the product, square footage, removal of the old floor, how much prep the slab needs, furniture moves and after-hours work. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/resinous-flooring": {
    intro:
      "Resinous flooring is a seamless floor made from liquid resins applied over prepared concrete. We help you pick the right chemistry for each room, then install it with the prep it needs.",
    overviewTitle: "Resinous Flooring, Matched to the Room",
    overview: [
      "Epoxy, novolac epoxy, urethane cement, MMA, polyurea and polyaspartic are all resinous materials, but they are not interchangeable. Each trades off cost, chemical and heat resistance, and how fast the floor returns to service.",
      "We start with what the floor has to survive: traffic, chemicals, hot water, cleaning and how long you can be closed. Then we test moisture, diamond grind the slab and install the right system. Different rooms in one building can get different floors with clean transitions.",
    ],
    featuresTitle: "Resinous Systems We Install",
    features: [
      { title: "Epoxy", text: "The workhorse for warehouses, production floors and common areas, from thin coatings to high-build and troweled mortar." },
      { title: "Novolac epoxy", text: "Higher chemical and heat resistance for chemical storage, battery rooms and containment." },
      { title: "Urethane cement", text: "Built for hot water, steam cleaning and thermal shock in kitchens, food plants and freezers." },
      { title: "MMA", text: "Cures fast enough to return to service the same day, for overnight or weekend shutdowns." },
      { title: "Flake and quartz", text: "Decorative, textured, easy-to-clean floors for showrooms, restrooms, kitchens, schools and corridors." },
      { title: "ESD flooring", text: "Grounded floors that control static in electronics, electrical and data center spaces." },
    ],
    faqs: [
      {
        q: "Is resinous flooring the same as epoxy?",
        a: "Epoxy is one type of resinous flooring. The broader family also includes novolac epoxy, urethane cement, MMA, polyurea and polyaspartic. Each fits different conditions, which is why we recommend a system after a site walk instead of defaulting to one product.",
      },
      {
        q: "Should every room get the same system?",
        a: "Not necessarily. A washdown room, a forklift aisle and a front lobby face very different conditions. We often install two or three systems in one building and detail the transitions so the floor reads as one project.",
      },
      {
        q: "Can the floor include cove base and sanitary details?",
        a: "Yes. Integral cove, drain transitions and coated curbs can be built into the floor so the whole room, edges included, is seamless and easy to clean. We plan those details on the site walk.",
      },
      {
        q: "How do you choose the texture?",
        a: "We balance grip, cleaning equipment, footwear and what ends up on the floor. You see a sample of the finish before we start, so traction and cleanability are settled up front.",
      },
      {
        q: "How much does resinous flooring cost?",
        a: "It depends on the system, square footage, removal of old coatings or tile, moisture results, slab repairs, cove and after-hours phasing. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/quartz-flooring": {
    intro:
      "Quartz flooring is a seamless, textured resin floor with colored quartz built in. It is durable, sanitary and easy to clean in restrooms, kitchens, corridors and healthcare spaces.",
    overviewTitle: "Quartz Flooring for Clean, Durable Spaces",
    overview: [
      "Colored quartz sand is broadcast into layers of epoxy, or troweled in for heavier use, then sealed with a clear topcoat. The result is a tough, decorative floor with built-in texture and no grout lines to trap dirt or bacteria.",
      "We set the quartz blend and finish texture together so the floor has good grip and still cleans easily. Integral cove carries the floor up the wall for a fully cleanable room. As always, we test moisture and diamond grind the slab before the first coat.",
    ],
    featuresTitle: "Why Facilities Choose Quartz",
    features: [
      { title: "Sanitary and seamless", text: "No grout lines or seams, so restrooms, kitchens and clinical spaces are easier to keep clean." },
      { title: "Built-in slip resistance", text: "Quartz texture gives grip underfoot, tuned to your cleaning method and footwear." },
      { title: "Holds up to traffic", text: "Broadcast and troweled options cover everything from busy corridors to heavier impact areas." },
      { title: "Integral cove base", text: "The floor curves up the wall so there is no corner for dirt and moisture to collect." },
      { title: "Color choices", text: "Quartz blends come in many colors to match your interior or simply hide wear between cleanings." },
    ],
    faqs: [
      {
        q: "Is quartz flooring slippery?",
        a: "No. Quartz adds texture on its own. We balance grip with cleanability so the floor is safe and still easy to mop or scrub, and we show you a sample before installation.",
      },
      {
        q: "Where does quartz flooring work best?",
        a: "Restrooms, commercial kitchens, locker rooms, corridors, concourses, healthcare and pharmaceutical spaces. Anywhere that needs a tough, sanitary, textured floor that gets cleaned often. It also works well in busy front-of-house spaces where looks matter.",
      },
      {
        q: "Can quartz continue up the wall?",
        a: "Yes. We install integral cove that matches the floor, so the edges of the room are as cleanable as the middle. It is a common fix when a kitchen or restroom needs a better floor-to-wall detail.",
      },
      {
        q: "How is quartz different from flake flooring?",
        a: "Both are decorative resin floors. Quartz uses colored sand for a denser, more textured surface that suits wet and sanitary areas. Flake uses vinyl chips for a smoother, color-blended look common in showrooms, retail and break rooms.",
      },
      {
        q: "How much does quartz flooring cost?",
        a: "It depends on square footage, how much prep and repair the slab needs, broadcast or troweled build, cove base and whether we work after hours. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/esd-static-control-flooring": {
    intro:
      "Static-control flooring is a grounded resin floor that bleeds static away from people and equipment before it can damage sensitive electronics. We install it and test it on site before turnover.",
    overviewTitle: "ESD and Static-Control Flooring, Tested On Site",
    overview: [
      "ESD floors use a conductive or static-dissipative epoxy tied to building ground. When someone walks across the floor, charge drains away instead of building up and jumping to a circuit board, server or test bench.",
      "The floor is one part of your static-control program, alongside grounding straps, footwear and procedures. We coordinate grounding points with your electrical team, install the system your spec calls for and test resistance on site before we hand it over.",
    ],
    featuresTitle: "What You Get",
    features: [
      { title: "Conductive or dissipative", text: "We install the type your spec or ESD program calls for, chosen around the equipment in the room." },
      { title: "Grounding coordinated", text: "Ground connections are planned with your electrical scope so the floor actually drains charge." },
      { title: "Tested before turnover", text: "We test resistance on site against your project spec and document the results." },
      { title: "Seamless and cleanable", text: "A durable epoxy surface that stands up to carts and foot traffic and cleans easily." },
      { title: "Care that protects performance", text: "We tell you which cleaners to use, since ordinary wax can stop the floor from working." },
    ],
    faqs: [
      {
        q: "Where is ESD flooring used?",
        a: "Electronics manufacturing, assembly and test areas, electrical and UPS rooms, data center spaces, aerospace shops and some pharmaceutical areas. Anywhere a static spark could damage parts or equipment. If you are unsure, we can review your spec.",
      },
      {
        q: "Does an ESD floor make our facility compliant on its own?",
        a: "No. Flooring is one piece of a static-control program that also includes personnel grounding, procedures and regular checks. We build and test the floor to your spec so it does its part.",
      },
      {
        q: "Can we use normal floor wax on an ESD floor?",
        a: "Only if the manufacturer confirms it is compatible. Many waxes and finishes leave an insulating film that keeps the floor from draining static. We hand over approved care guidance at closeout.",
      },
      {
        q: "Do all data halls need ESD flooring?",
        a: "No. The owner and design team decide based on the equipment and the facility's static-control plan. Some facilities use ESD floors in electrical and UPS rooms and standard epoxy elsewhere.",
      },
      {
        q: "How much does ESD flooring cost?",
        a: "It depends on square footage, slab prep and repairs, conductive or dissipative system, grounding work and how the install is phased around your operation. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/flake-floors": {
    intro:
      "A commercial flake floor is a seamless resin coating with colored flakes sealed under a clear topcoat. It is durable, slip resistant, easy to clean and looks sharp.",
    overviewTitle: "Commercial Flake Flooring Options",
    overview: [
      "The resin bonds to ground concrete and seals out water, oil and spills. The flake adds color and a little texture, and it hides dirt and wear between cleanings. With no grout lines, there is nothing to trap dirt or bacteria.",
      "Not every flake floor is the same. We offer four levels and help you choose by traffic, cleaning and how long you can be closed. Every one starts the same way: diamond grinding, crack and joint repair and a moisture test.",
    ],
    featuresTitle: "Four Flake Systems",
    features: [
      { title: "Standard epoxy flake", text: "Epoxy base, full flake broadcast and a clear topcoat. An economical floor for break rooms, locker rooms and back-of-house." },
      { title: "One-day polyurea flake", text: "A polyurea base coat with a polyaspartic topcoat that won't yellow in sunlight. Most areas are done in a day." },
      { title: "Heavy-duty flake", text: "A thicker epoxy body with a tough urethane topcoat for schools, healthcare corridors and busy restaurants." },
      { title: "Urethane cement flake", text: "Our most substantial option, for commercial kitchens and food areas with hot water and heavy cleaning." },
      { title: "Grip where you need it", text: "We add anti-slip texture to the topcoat for entries, wet areas and service drives, and show you a sample first." },
    ],
    faqs: [
      {
        q: "What is the difference between epoxy flake and polyurea flake?",
        a: "Epoxy flake is the standard, economical option with a normal cure time. Polyurea flake uses a fast-curing polyurea base coat and a polyaspartic topcoat, so it goes in faster, gets you open sooner and won't yellow in sunlight.",
      },
      {
        q: "How fast can a flake floor go back into service?",
        a: "A one-day polyurea flake floor can usually be ground, coated and sealed in a day in most areas. Epoxy and heavy-duty flake take longer to cure. We give you the exact schedule before we start.",
      },
      {
        q: "Can you install over VCT or an old coating?",
        a: "We remove VCT and failed coatings so the new floor bonds to clean, ground concrete. A sound existing coating can sometimes be prepped and coated over after we test it.",
      },
      {
        q: "How do I clean a flake floor?",
        a: "Sweep or dust mop daily and clean with a neutral cleaner. No waxing. When the floor starts to look tired years later, the topcoat can be renewed to bring it back.",
      },
      {
        q: "How much does commercial flake flooring cost?",
        a: "It depends on the size of the space, how much floor prep is needed, which flake system you choose and whether we work after hours. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/urethane-cement-flooring": {
    intro:
      "Urethane cement is the floor for hot, wet, hard-working spaces. It handles steam cleaning, hot oil, food acids and thermal shock where standard epoxy can crack or let go.",
    overviewTitle: "Urethane Cement Flooring for Kitchens and Food Plants",
    overview: [
      "Urethane cement is a cement-based urethane mortar that bonds tightly to concrete and moves with it as temperatures swing. That is why it is the standard floor for commercial kitchens, food and beverage plants, washdown rooms and freezers.",
      "It is thicker and tougher than a typical coating and handles damper slabs better than most epoxies. We grind the concrete, cut anchor grooves at edges, drains and doorways, and finish with a slip-resistant texture suited to your cleaning routine. Hybrid builds pair a urethane cement base with a different topcoat when the room calls for it.",
    ],
    featuresTitle: "Why Kitchens and Plants Choose It",
    features: [
      { title: "Handles thermal shock", text: "Steam cleaning, hot washdown and freezer cycles do not crack or lift it the way they can with epoxy." },
      { title: "Resists kitchen and plant chemicals", text: "Hot oils, animal fats, food acids and caustic cleaners do not soften the floor." },
      { title: "Slip-resistant texture", text: "A textured finish keeps footing safe in wet areas and can be tuned to the space." },
      { title: "Moisture tolerant", text: "It can go down on slabs with more moisture than most epoxy floors allow, often saving a mitigation step." },
      { title: "Seamless with cove", text: "Matching integral cove carries the floor up the wall and around drains and equipment for easy sanitation." },
    ],
    faqs: [
      {
        q: "Why urethane cement instead of epoxy in a kitchen or food plant?",
        a: "Thermal shock. Epoxy is rigid, while urethane cement moves more like concrete, so steam cleaning, hot oil and washdowns do not crack or lift it. It is the standard choice for food and beverage processing and busy commercial kitchens.",
      },
      {
        q: "Can it go over an existing floor?",
        a: "Only after the old coating or tile is removed or fully prepped. We grind down to sound concrete, repair the slab and check adhesion before installing, because the bond is what keeps the floor in place for the long haul.",
      },
      {
        q: "Is urethane cement suitable for food areas?",
        a: "Yes. The systems we install are accepted for food and beverage environments and are the usual choice in processing plants and commercial kitchens. Integral cove and smooth transitions to drains help with sanitation.",
      },
      {
        q: "How long will the kitchen be closed?",
        a: "It depends on the size of the area and the prep. Foot traffic is typically possible overnight, and full chemical resistance builds over the following days. If you can only close for a night, we may suggest MMA instead.",
      },
      {
        q: "How much does urethane cement flooring cost?",
        a: "It depends on square footage, removal of tile or old coatings, slab repairs, drains and cove details, texture and whether we work after hours. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/novolac-epoxy-flooring": {
    intro:
      "Novolac epoxy is a tougher epoxy that resists stronger chemicals and higher heat than standard epoxy. We install it in chemical storage, battery rooms, containment areas and food plants.",
    overviewTitle: "Novolac Epoxy Flooring for Chemical Resistance",
    overview: [
      "Novolac is a more tightly cross-linked epoxy. In plain terms, it holds up to concentrated acids, solvents and constant heat that would soften or stain a standard epoxy floor.",
      "Before we recommend it, we check your actual chemicals, strengths and contact times against the manufacturer's resistance data. Then we test moisture, grind the slab and carry the novolac up the cove and over curbs so spills stay contained. Smooth and sand-textured builds are available.",
    ],
    featuresTitle: "Where Novolac Makes Sense",
    features: [
      { title: "Chemical storage", text: "Rooms and curbs where acids, caustics and solvents are stored, poured or spilled." },
      { title: "Battery rooms", text: "Acid-resistant floors, cove and curbs for lead-acid battery and charging areas." },
      { title: "Secondary containment", text: "Indoor fuel and chemical containment lined continuously across floors, walls and penetrations." },
      { title: "Heat and process areas", text: "A higher operating temperature than standard epoxy, for areas around ovens and constant heat." },
      { title: "Checked against your chemicals", text: "We confirm resistance for each chemical before choosing the build, not after a spill." },
    ],
    faqs: [
      {
        q: "When do I need novolac instead of standard epoxy?",
        a: "When the floor sees concentrated acids, solvents or constant heat that standard epoxy will not tolerate. Battery rooms, chemical storage and containment are the usual cases. We check your chemicals against the manufacturer's resistance data first.",
      },
      {
        q: "Can novolac run up curbs and cove?",
        a: "Yes. We carry the novolac through cove, curbs and penetrations so the room is one continuous, cleanable surface and the containment has no weak edges. We detail those edges by hand before the field floor goes down.",
      },
      {
        q: "Does novolac handle heat?",
        a: "Yes, better than standard epoxy. It has a higher operating temperature and suits areas around ovens and constant heat. Hot washdown and thermal shock are a different problem, and there we usually recommend urethane cement.",
      },
      {
        q: "Is novolac smooth or textured?",
        a: "Either. A smooth build is easiest to clean, while a sand-textured build adds body and grip for wet or heavier-use areas. We match the texture to how the room is used and cleaned.",
      },
      {
        q: "How much does novolac epoxy flooring cost?",
        a: "It depends on square footage, the chemicals involved, slab prep and repairs, cove and curb detailing, smooth or textured build and the work schedule. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/mma-flooring": {
    intro:
      "MMA flooring is a fast-curing acrylic resin floor that goes back into service the same day. It is the answer when a kitchen, plant or facility can only close overnight or for a weekend.",
    overviewTitle: "MMA Flooring, Back in Service the Same Day",
    overview: [
      "MMA (methyl methacrylate) cures in about an hour per coat, even in cold rooms, so a whole floor can go down in one overnight or weekend shutdown. It is seamless, waterproof and UV stable for indoor or outdoor use.",
      "MMA has a strong odor while it cures, so we plan ventilation and schedule the work inside your shutdown window. In many kitchens it can go over existing quarry tile after prep, which avoids demolition. Matching cove base finishes the room.",
    ],
    featuresTitle: "Why Facilities Choose MMA",
    features: [
      { title: "Same-day return to service", text: "Each coat cures fast, so the floor is installed and reopened inside a short shutdown." },
      { title: "Works in the cold", text: "MMA cures in coolers and cold rooms where other resins slow down." },
      { title: "Can go over quarry tile", text: "In many kitchens we can prep and coat existing quarry tile instead of tearing it out." },
      { title: "Seamless and waterproof", text: "A non-porous floor with no grout lines, easy to clean and no waxing needed." },
      { title: "Matching cove base", text: "Solid, flake and quartz cove bases carry the floor up the wall." },
    ],
    faqs: [
      {
        q: "How fast can an MMA floor go back into service?",
        a: "Each coat cures in about an hour, so the whole floor can be installed in one overnight or weekend shutdown. Exact return-to-traffic timing depends on the system and room temperature, and we confirm it before the work is scheduled.",
      },
      {
        q: "Does MMA smell during installation?",
        a: "Yes, it has a strong odor while curing. We plan ventilation, isolate the work area and schedule the install inside your shutdown window so staff and customers are not affected.",
      },
      {
        q: "Can MMA go over quarry tile?",
        a: "Often, yes. After prep, MMA can bond over sound quarry tile, which saves demolition time in many commercial kitchens. We check the tile and grout condition on the site walk.",
      },
      {
        q: "Where is MMA used?",
        a: "Commercial kitchens, food and beverage plants, pharmaceutical spaces, hotels, data centers and any facility that cannot afford days of downtime. It works indoors and outdoors. If your shutdown window is short, MMA is usually the first system we look at.",
      },
      {
        q: "How much does MMA flooring cost?",
        a: "It depends on square footage, whether tile or old coatings come out, slab repairs, cove base, texture and the size of your shutdown window. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/battery-room-flooring": {
    intro:
      "Battery room flooring has to match the battery chemistry and the spill plan. We install acid-resistant floors with integral cove and coated curbs for UPS, battery storage and charging rooms.",
    overviewTitle: "Acid-Resistant Battery Room Flooring",
    overview: [
      "Lead-acid battery rooms usually get a novolac epoxy floor, carried up the cove and over the curbs so a spill stays in the room. We pick the system for the electrolyte and how it could reach the floor, not just a generic industrial coating.",
      "Lithium battery rooms have a different hazard profile, and flooring does not replace fire protection, ventilation or electrical safeguards. Where static control is also required, we coordinate an ESD-capable system with the chemical resistance the room needs.",
    ],
    featuresTitle: "What We Deliver",
    features: [
      { title: "Acid-resistant floor", text: "Novolac and other chemical-resistant systems chosen for your battery type." },
      { title: "Continuous cove and curbs", text: "The floor runs up the wall and over curbs with no seams for electrolyte to reach the concrete." },
      { title: "Damaged concrete addressed", text: "In existing rooms we find and remove acid-damaged concrete before coating so the new floor bonds." },
      { title: "ESD where required", text: "Static-control options coordinated with chemical resistance and your safety requirements." },
      { title: "Work around live systems", text: "We schedule with your facility team and follow your safety rules in operating data centers and plants." },
    ],
    faqs: [
      {
        q: "Do all battery rooms need the same floor?",
        a: "No. Lead-acid, lithium and other battery installations have different chemical and safety needs. We confirm the battery type, electrolyte and spill plan with your team before recommending a system for the floor, cove and curbs.",
      },
      {
        q: "Why novolac for a battery room?",
        a: "Novolac epoxy resists the strong acids in lead-acid batteries better than standard epoxy. We still check the exact electrolyte and your cleaning products against the manufacturer's data before we install it.",
      },
      {
        q: "Can an acid-resistant floor also control static?",
        a: "It can, with a specialty system designed to do both. Electrical and chemical requirements have to be checked together, and we test the floor's resistance on site before turnover so you know it works.",
      },
      {
        q: "Can you coat an existing battery room?",
        a: "Yes. We remove contaminated or damaged concrete, repair the slab and coat the floor, cove and curbs. The work is planned around your equipment, outages and access rules so the room stays in service as much as possible.",
      },
      {
        q: "How much does battery room flooring cost?",
        a: "It depends on room size, the battery chemistry, removal of damaged concrete, cove and curb detailing, any ESD requirement and your outage windows. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/joint-filling-crack-repair": {
    intro:
      "Broken joint edges and cracked concrete beat up forklifts, trap debris and get worse every day. We repair the damage and fill the joints so wheels roll smoothly again.",
    overviewTitle: "Concrete Joint Filling and Crack Repair",
    overview: [
      "Control joints in a warehouse slab are weak spots under hard wheels. Left open, the edges chip and spall until carts and forklifts bang across every one. Filling joints with a semi-rigid polyurea supports those edges, and we shave it flush for a smooth ride.",
      "Cracks, divots and spalls each need their own fix. We remove loose concrete, rebuild the profile and separate stable cracks from ones that still move and need a flexible detail. Repairs can stand alone or come with a new coating or polish.",
    ],
    featuresTitle: "What We Repair",
    features: [
      { title: "Control joint filling", text: "Semi-rigid polyurea supports joint edges under forklift traffic and is shaved flush with the floor." },
      { title: "Spall repair", text: "Chipped and broken joint edges are cut back and rebuilt so the filler has solid concrete to hold." },
      { title: "Cracks and divots", text: "Cracks and surface pits are filled and leveled so they stop catching wheels and collecting dirt." },
      { title: "Moving joints respected", text: "Joints that move get a flexible sealant, not a rigid fill that will crack loose." },
      { title: "Done around your operation", text: "Night, weekend and phased work keeps aisles open while we repair." },
    ],
    faqs: [
      {
        q: "Is joint filler the same as joint sealant?",
        a: "No. Semi-rigid filler supports traffic-bearing joint edges so wheels roll across them. A flexible sealant is for joints that need to move. They do different jobs, and we use the right one for each joint.",
      },
      {
        q: "When should new slab joints be filled?",
        a: "Ideally after the slab has done most of its shrinking, so the filler does not pull away from the edges. We set the timing based on the age of the slab, the project schedule and when the building will be occupied.",
      },
      {
        q: "Why shave the filler flush?",
        a: "A flush joint gives forklifts and carts a smooth ride and avoids a raised bead that chips off or collects debris. It also looks cleaner on polished or coated floors.",
      },
      {
        q: "Can you repair joints and cracks during polishing or coating?",
        a: "Yes, and it is usually the best time. We repair joints, cracks and divots as part of the floor prep so the finished floor is smooth from wall to wall.",
      },
      {
        q: "How much does joint filling and crack repair cost?",
        a: "It depends on the linear footage of joints, how many edges are spalled, the number and size of cracks and divots, and whether the work happens at night or on weekends. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/moisture-mitigation": {
    intro:
      "Moisture in the slab is one of the top reasons new floors fail. We test first, then choose the right mitigation so your coating, vinyl or carpet stays bonded.",
    overviewTitle: "Concrete Moisture Testing and Mitigation",
    overview: [
      "Concrete can hold and release moisture for years. That vapor pushes up against coatings and adhesives, causing bubbles, peeling and lifting tiles. Testing tells us what we are dealing with before any finish goes down.",
      "When readings are high, there are options. Many epoxy, flake and quartz floors can go over a moisture-mitigating epoxy primer. Urethane cement tolerates damper slabs on its own. Other projects need a full vapor-barrier system matched to the patch, adhesive and finish.",
    ],
    featuresTitle: "How We Handle Moisture",
    features: [
      { title: "Test before choosing the floor", text: "We test the slab and compare the results with what the new floor can handle." },
      { title: "Moisture-mitigating primers", text: "A specialty epoxy primer under the floor holds back vapor so the coating stays bonded." },
      { title: "Full vapor-barrier systems", text: "For high readings or resilient floors, we install a complete system matched to the adhesive and finish." },
      { title: "The right floor for a damp slab", text: "Sometimes the smartest fix is a moisture-tolerant system like urethane cement." },
      { title: "Compatible top to bottom", text: "Primer, patch, adhesive and finish are checked to work together, which protects the warranty." },
    ],
    faqs: [
      {
        q: "Does every floor need moisture mitigation?",
        a: "No. The test results, the slab history and the finish being installed decide it. Many slabs need nothing extra, some need a mitigating primer and a few need a full vapor-barrier system. Testing is how we know which.",
      },
      {
        q: "Will an epoxy primer fix an active leak?",
        a: "No. Mitigation handles vapor moving up through the slab, not water pouring in. Leaks, drainage problems and water pressure from below have to be found and fixed separately before we install.",
      },
      {
        q: "Can mitigation go under carpet tile or LVT?",
        a: "Yes, as long as the mitigation, patch, adhesive and flooring are approved to work together. We check that before ordering materials so the flooring manufacturer's warranty stays intact. If anything is not compatible, we flag it in the bid.",
      },
      {
        q: "Why test moisture on a slab that looks dry?",
        a: "Because the surface tells you very little. A slab can look and feel dry while vapor is still moving up from below. Testing before installation is far easier than tearing out a failed floor.",
      },
      {
        q: "How much does moisture mitigation cost?",
        a: "It depends on the test results, square footage, the finish going on top, coating or adhesive removal and whether a primer or a full vapor-barrier system is needed. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/epoxy-cove-base": {
    intro:
      "Integral cove base curves the floor up the wall so there is no corner for dirt, grease or water to hide. It is the sanitary edge kitchens, food plants and cleanrooms need.",
    overviewTitle: "Integral Epoxy Cove Base for Sanitary Spaces",
    overview: [
      "A seamless cove is troweled from resin mortar and tied into the floor, so floor and wall become one continuous surface. Mops and squeegees reach everything, and nothing seeps behind a glued-on base.",
      "We install cove over drywall, concrete or block, and match it to the floor system: epoxy, urethane cement or MMA. Inside and outside corners, door returns and equipment are detailed by hand. It is a common fix when a health inspection flags the floor-to-wall detail.",
    ],
    featuresTitle: "Why It Matters",
    features: [
      { title: "No corners to clean", text: "A smooth curve where the floor meets the wall leaves nothing to trap residue or bacteria." },
      { title: "One piece with the floor", text: "Cove is tied into the floor coating, so water cannot get behind it like a glued-on base." },
      { title: "Matches your floor", text: "Epoxy, urethane cement and MMA floors each get a matching cove." },
      { title: "Detailed by hand", text: "Corners, door frames, drains and equipment legs are troweled carefully for a clean finish." },
      { title: "Fixes inspection issues", text: "Replaces failed or unsuitable base that has been flagged during a health inspection." },
    ],
    faqs: [
      {
        q: "Is integral cove the same as rubber or vinyl base?",
        a: "No. Rubber and vinyl base are glued on, leaving a seam where water and grime collect. Integral cove is formed from resin and bonded to the floor, so the transition from floor to wall is one continuous piece.",
      },
      {
        q: "Can cove base fix a health-inspection issue?",
        a: "It can correct an unsuitable floor-to-wall detail, which is a common inspection finding in kitchens. Final acceptance is up to your local inspector, and we build to the requirements you have been given.",
      },
      {
        q: "Can you add cove to an existing floor?",
        a: "Often, yes. We check the wall, the existing floor bond and moisture, remove failed base and tie the new cove into the floor. Sometimes the floor needs work too, and we will tell you on the site walk.",
      },
      {
        q: "Where is integral cove used?",
        a: "Commercial kitchens, food and beverage plants, pharmaceutical and cleanroom spaces, healthcare, pump rooms and anywhere floors get washed down or cleaned hard. If water hits the floor regularly, cove is usually worth it.",
      },
      {
        q: "How much does epoxy cove base cost?",
        a: "It depends on the linear footage, the wall type, removal of old base, the number of corners, doors and equipment to work around, the matching floor system and after-hours scheduling. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/concrete-sealing": {
    intro:
      "Sealed concrete is a fast, practical floor for restaurants, breweries, kitchens and warehouses. We densify and seal the slab you have so it resists stains, sheds less dust and cleans easily.",
    overviewTitle: "Commercial Concrete Sealing",
    overview: [
      "Sealing protects the existing slab without adding a thick coating. A densifier hardens the surface and cuts down on dust. A sealer blocks stains from oil, grease and spills so the floor wipes clean.",
      "It goes in faster than polished concrete or a resin floor, which makes it a good fit for back-of-house areas and budget-driven spaces. We clean and prep the slab first, remove old finishes where needed, and plan periodic resealing so the protection keeps working.",
    ],
    featuresTitle: "Why Owners Choose Sealed Concrete",
    features: [
      { title: "Stain resistance", text: "Oil, grease and food spills stay on the surface instead of soaking in." },
      { title: "Less dust", text: "A densifier hardens the top of the slab so it stops dusting under traffic." },
      { title: "Quick turnaround", text: "Sealing goes in fast, so restaurants and warehouses are back open quickly." },
      { title: "Keeps the concrete look", text: "The slab's natural character stays visible for an honest, industrial finish." },
      { title: "Simple to maintain", text: "Routine cleaning plus periodic resealing keeps the floor protected." },
    ],
    faqs: [
      {
        q: "Are a densifier and a sealer the same thing?",
        a: "No. A densifier soaks in and hardens the concrete surface. A sealer protects the surface from stains. Many floors get both, and we spell out exactly which treatment you are getting in the bid.",
      },
      {
        q: "Will sealed concrete look like polished concrete?",
        a: "Not quite. Sealing does not include the grinding and polishing steps that create a polished finish. It looks like clean, protected concrete with a natural sheen. If you want a high shine, polished concrete is the better path.",
      },
      {
        q: "How often does sealed concrete need resealing?",
        a: "It depends on traffic and cleaning. Busy restaurants and breweries need it more often than a quiet warehouse. We recommend a schedule at closeout and can handle the resealing for you.",
      },
      {
        q: "Is sealed concrete chemical resistant?",
        a: "It resists everyday spills and stains, but it is not a chemical-resistant lining. Areas with strong chemicals, hot washdown or battery acid need a resin floor such as novolac epoxy or urethane cement.",
      },
      {
        q: "How much does concrete sealing cost?",
        a: "It depends on square footage, slab condition, removal of old sealers or coatings, crack and joint repair, the treatment you choose and whether we work after hours. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/deck-coatings": {
    intro:
      "Deck coatings waterproof elevated concrete and give vehicles and people a durable surface to drive and walk on. We coat parking decks, balconies, walkways and plazas as one complete system.",
    overviewTitle: "Pedestrian and Vehicular Deck Coatings",
    overview: [
      "Elevated concrete takes a beating from weather, tires and foot traffic, and water that gets through damages the structure below. A traffic-bearing deck coating is a waterproof membrane with a tough wear surface on top.",
      "Parking decks need a vehicular system built for tire wear, turns and ramps, with extra wear layers where traffic is heaviest. Balconies, walkways and plazas get a pedestrian system that balances waterproofing, grip and appearance. Cracks, drains, joints and edges get as much attention as the field coating.",
    ],
    featuresTitle: "What We Deliver",
    features: [
      { title: "Waterproofing that protects the structure", text: "A continuous membrane keeps water out of the slab and away from the space below." },
      { title: "Vehicular systems", text: "Built for parking garages, with heavier wear layers at turns, ramps and entries." },
      { title: "Pedestrian systems", text: "Balconies, walkways, plazas and amenity decks with textured, slip-resistant finishes." },
      { title: "Fast-cure options", text: "Faster-curing systems shorten closures on decks that cannot stay shut for long." },
      { title: "Details done right", text: "Cracks, expansion joints, drains and edges are sealed as part of the same system." },
    ],
    faqs: [
      {
        q: "Can a pedestrian coating be used on a parking ramp?",
        a: "Only if it is specifically approved for vehicles. Tires turning on a ramp put far more stress on a coating than foot traffic. Parking areas need a vehicular system, and we mark where the heavy-duty wear layers go.",
      },
      {
        q: "Can an existing deck coating be recoated?",
        a: "Often. We check adhesion, moisture, damage and compatibility first. If the old system is still well bonded, recoating can save time and disruption. If it is failing, we remove it and start fresh.",
      },
      {
        q: "How long will the deck be closed?",
        a: "It depends on the system, the weather and the detail work. Conventional systems need longer cure times, while fast-cure systems reopen much sooner. We phase parking decks in sections so some parking stays available.",
      },
      {
        q: "Do you stripe the deck after coating?",
        a: "Yes. We stripe parking stalls, arrows and ADA spaces with materials compatible with the coating, so the deck reopens finished in one mobilization. That saves a second closure and a second crew on site.",
      },
      {
        q: "How much do deck coatings cost?",
        a: "It depends on square footage, vehicular or pedestrian system, removal of old coatings, crack and joint repair, drain and edge details, striping and how the work is phased. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/commercial-floor-maintenance": {
    intro:
      "Scheduled cleaning, repairs and resealing that keep your commercial floors looking good and lasting longer. We match the care to the floor you actually have and work around your hours.",
    overviewTitle: "Commercial Floor Cleaning and Maintenance",
    overview: [
      "Resin floors, polished concrete, sealed concrete, VCT, LVT and carpet tile all need different care. The wrong cleaner, or wax on the wrong floor, can do real damage. We identify what is installed before recommending anything.",
      "Our maintenance work includes deep cleaning, degreasing, spot repairs, resealing, topcoat renewal on resin floors, burnishing polished concrete and strip and wax for VCT. We schedule nights and weekends so your building stays open, and a well-timed refresh can push back a full replacement.",
    ],
    featuresTitle: "What We Do",
    features: [
      { title: "Deep cleaning and degreasing", text: "Built-up grime and oil come off with methods that are safe for your floor's finish." },
      { title: "Repairs", text: "Chips, gouges, cracks and worn areas are fixed before they spread." },
      { title: "Resealing and recoating", text: "Sealed concrete and resin floors get fresh protection when the old layer wears thin." },
      { title: "Polished concrete burnishing", text: "Restores shine and protection in high-traffic paths." },
      { title: "VCT strip and wax", text: "A full strip, wax and buff program for floors designed to use one." },
      { title: "Planned around you", text: "Night, weekend and phased work keeps your operation running." },
    ],
    faqs: [
      {
        q: "Do all floors need wax?",
        a: "No. Wax is wrong for resin floors, polished concrete, ESD floors and many vinyl products, and it can cause problems. We follow the care guidance for the floor you have and use strip and wax only where it belongs, such as VCT.",
      },
      {
        q: "When is recoating better than replacing?",
        a: "When the existing floor is still well bonded and the damage is repairable. A topcoat renewal on a resin floor or a reseal on sealed concrete can restore the look with far less disruption than a new floor. We assess it on site.",
      },
      {
        q: "Can one cleaner be used throughout the building?",
        a: "Only if it is safe for every floor type in the building. Specialty floors often need their own products. We give your cleaning team a simple guide for what to use where.",
      },
      {
        q: "Can maintenance be done while we are open?",
        a: "Yes. We work nights and weekends, phase areas and plan drying or cure times so the building keeps running with safe, protected routes. You get the schedule before work starts, so your team knows what is closed and when.",
      },
      {
        q: "How much does commercial floor maintenance cost?",
        a: "It depends on the floor types, square footage, the condition of the floor, how much repair is needed, how often you want service and after-hours scheduling. We return a full proposal within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },

  "/line-striping": {
    intro:
      "Clear floor markings keep forklifts, people and products moving safely. We stripe warehouse aisles, walkways and staging areas, plus parking lots and garages, on your schedule.",
    overviewTitle: "Line Striping and Floor Marking",
    overview: [
      "We mark aisles, pedestrian walkways, forklift lanes, staging areas, hazards and emergency equipment. Layouts can start from your racking plan, then we confirm dimensions on site and coordinate colors with your safety team. Stencils, arrows and location numbers make the plan easy to read.",
      "Durability comes from the prep and the material, not just the color. We offer striping paint for lighter areas, epoxy striping for a stronger bond, and ground-in lines with two-part epoxy or polyurea for heavy forklift traffic. Coating and striping can happen in one mobilization.",
    ],
    featuresTitle: "What We Mark",
    features: [
      { title: "Warehouse aisles and lanes", text: "Forklift lanes, pedestrian walkways and aisle lines that keep traffic separated." },
      { title: "Staging and hazard zones", text: "Staging areas, hazard stripes and clear zones around fire and safety equipment." },
      { title: "Parking lots and garages", text: "New layouts and restriping, ADA stalls, fire lanes, arrows, stencils and wheel stops." },
      { title: "Good, better, best", text: "Paint, epoxy or ground-in two-part lines, matched to how hard the floor is used." },
      { title: "Temporary layouts", text: "Durable floor tape lets you test a new layout before committing to permanent lines." },
      { title: "After-hours installs", text: "Night and weekend striping keeps production and shipping moving." },
    ],
    faqs: [
      {
        q: "Can you design the layout from our racking plan?",
        a: "Yes. We lay out aisles, walkways, forklift lanes and staging from your racking plan, then confirm dimensions, clearances and access to emergency equipment on site before we stripe, so the lines work on day one.",
      },
      {
        q: "Which striping holds up best under forklifts?",
        a: "Lines ground into the concrete and filled with a two-part epoxy or polyurea. It is our most durable option. How long any line lasts still depends on traffic, turning, the slab and cleaning.",
      },
      {
        q: "Do you stripe parking lots and coated garages?",
        a: "Yes. We handle new layouts, restriping, ADA stalls, fire lanes, arrows and wheel stops. In garages, we choose striping that is compatible with the deck coating so it bonds and lasts.",
      },
      {
        q: "Can you stripe after hours?",
        a: "Yes. We stripe nights and weekends around production and shipping, and confirm when each area can reopen based on the material and site conditions. Coating and striping can be scheduled together so you only close once.",
      },
      {
        q: "How much does line striping cost?",
        a: "It depends on the linear footage, the number of colors, stencils and symbols, paint, epoxy or ground-in lines, removal of old markings and after-hours work. We return a full bid within 24 hours of receiving plans, so send yours or request a site walk.",
      },
    ],
  },
};
