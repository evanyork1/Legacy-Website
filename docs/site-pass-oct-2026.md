FULL SITE PASS — NATIONWIDE, NEOGARD SYSTEMS LIBRARY, ORIGINAL COPY
Commercial Testing draft only. Do NOT publish or deploy.

First, save this entire message to docs/site-pass-oct-2026.md so you can reference it while you work.

Work through the three parts in order: Part 1 (nationwide positioning and cleanup), then Part 2 (Neogard systems library), then Part 3 (original copy). Finish each part completely before starting the next. If you run out of room, stop at the end of a part, tell me which part is done, and I'll say "continue".

At the very end, send ONE reply covering the checks listed at the end of each part.

========== PART 1 — NATIONWIDE POSITIONING + CLEANUP ==========

Answers to your three open questions: (1) yes, do the copy rewrite — it is Part 3 below; (2) yes, rebuild the four older pages — see item 6; (3) yes, remove the residential links from the footer on every page — see item 7.

1. NATIONWIDE POSITIONING. We are headquartered in Dallas-Fort Worth and take commercial work nationwide. The site must read that way. Rules:
   - Homepage: do NOT change any visible text. Leave it exactly as it is.
   - City pages (/epoxy-flooring/*), /service-areas and the Google-facing LocalBusiness address stay DFW-focused. Do not change them except item 2.
   - Industry pages and system pages are the national layer:
     a) H1s: remove "DFW", "Dallas-Fort Worth" and city names from every industry and system page H1. Example: "Floors, linings and coatings for DFW data centers — from data hall to generator yard" becomes "Floors, linings and coatings for data centers — from data hall to generator yard".
     b) Titles: on every industry and system page EXCEPT /industrial-epoxy, /concrete-polishing, /concrete-sealing, /flake-floors and /warehouse-flooring (keep those five titles exactly as they are), use the pattern "[Topic] | DFW & Nationwide | Legacy Industrial Coatings". Example: "Data Center Flooring | DFW & Nationwide | Legacy Industrial Coatings". Meta descriptions: drop "DFW" as the main qualifier; end with "Headquartered in Dallas-Fort Worth, working nationwide."
     c) Body copy: replace phrases like "across DFW", "for DFW facilities", "Dallas-Fort Worth owners" with national wording ("for owners, GCs and facility teams nationwide"). Keep exactly one line per page that says "Headquartered in Dallas-Fort Worth; we mobilize crews to projects nationwide." Keep any real DFW project names or DFW market facts (e.g., the data center market stat) but frame them as "where we're based", not as the limit of where we work.
     d) Structured data: Service schema areaServed on industry and system pages = ["Dallas-Fort Worth, TX", "United States"]. LocalBusiness keeps the Plano address; set its areaServed to the same two values.
   - llms.txt: add the line "Headquartered in Plano, Texas (Dallas-Fort Worth); commercial and industrial projects nationwide."

2. /service-areas: keep the URL, title and the DFW city grid. Add a section above the city grid titled "Nationwide projects" with 2 sentences on how we mobilize to out-of-state projects (project manager on every job, same submittal, testing and photo-documentation standards) and a list of states. Use this placeholder list and mark it for me to confirm: {/* TODO Evan: confirm and add states */} Texas, Florida, Arizona. Add a link to this section ("DFW & Nationwide") at the bottom of the ABOUT dropdown.

3. NO OUTBOUND MANUFACTURER LINKS. Remove every link that sends visitors to a manufacturer website (neogard.com, sherwin-williams.com, sika.com, polymernation.com, floorguard, etc.) from every page, including the "data sheets" blocks built from manufacturerLinks in src/data/site/systems.ts and the Sherwin-Williams link on /flake-floors. Replace each data-sheet block with one button: "Request the Submittal Package (PDS, SDS & Guide Spec)". It opens the existing RequestInfoForm with the project description prefilled as "Submittal package request: [system name]" — the same prefill mechanism the capability packet button uses. Do not change the form fields or backend.

4. MANUFACTURERS: we feature Neogard (a Hempel company) and Sherwin-Williams only. Remove every mention of Sika, Polymer Nation and Floor Guard sitewide (systems data, industry pages, About, capability packet, materials page, llms.txt, schema, FAQs). Where a build-up used a Sika or Polymer Nation product, remove that build-up; Part 2 adds the Neogard replacement. Grep afterward for "Sika", "Polymer Nation", "polymernation" and "Floor Guard" and confirm zero results.

5. ONE CLOSING CALL-TO-ACTION PER PAGE. Today the bottom of pages stacks several CTA blocks (for example /data-center-flooring has "Send us your drawings", then a CtaBand whose title is invisible — navy text on navy, which leaves a big empty gap — then the footer's "Request an Estimate" block). Fix sitewide:
   - Every page ends with exactly one CTA section, then the footer. That section is the existing RequestInfoSection (the form with plan upload), with a heading and one line of copy that each page can set, and a secondary "Prefer to talk? Request an Estimate" button (Cal.com) inside it.
   - Use each page's best CTA copy as that heading. On /data-center-flooring: heading "Send us your drawings", line "Upload plans and we'll return a full bid within 24 hours of receiving them — or request an estimate and we'll walk the campus with you."
   - Remove CtaBand, page-specific CTA bands and the footer's CTA buttons wherever they would duplicate that section. The footer keeps links and contact details only.
   - Fix the CtaBand text color anywhere it is still used so nothing is invisible.
   - Button labels sitewide: "Request a Bid" (opens RequestInfoForm) and "Request an Estimate" (Cal.com). Replace "Send Us Your Drawings", "Book a Pre-Bid Site Walk" and other variants on buttons with one of those two.

6. REBUILD THE FOUR OLDER PAGES in the new SiteSystemPage template: /industrial-epoxy, /concrete-polishing, /concrete-sealing, /commercial-floor-maintenance. Keep each page's URL, title, meta description, canonical and H1 intent exactly. Give them the same structure as the other system pages: two-sentence direct answer under the H1, "Updated October 2026 · Reviewed by Legacy Industrial Coatings project management", build-up section (Part 2 fills /industrial-epoxy with Neogard CG Series), where-used links, FAQs including "How much does it cost?" (no prices), submittal-package button, closing CTA per item 5. Remove the old pages from the special-case list in App.tsx so they render through the template.

7. FOOTER: remove the Residential column (Garage Floors, Patio Coatings, Flake Floors residential link, Residential Case Studies) from the footer on every page. Do NOT delete or redirect those pages — their URLs stay live and stay in sitemap.xml. /flake-floors stays linked under Systems as the commercial flake page.

8. REPEATED SECTIONS: industry and system pages should not repeat the same homepage blocks. On industry and system pages keep at most ONE shared trust strip (client names + "5.0 · 201+ Google reviews" line). Remove repeated "Our Process", "Why Legacy", testimonial carousels and capability-packet bands from those pages — they live on the homepage, /our-process, /reviews and /capability-packet. Link to them in one line instead ("See how we work →").

Part 1 checks for your final reply: list of title changes (old → new), confirmation that the five protected titles are unchanged, grep results for Sika / Polymer Nation / Floor Guard / external manufacturer URLs (should be zero), and a list of pages and how many CTA sections each now has (should be one).

========== PART 2 — NEOGARD SYSTEMS LIBRARY (Techniquex-style) ==========

GOAL
Our systems content should read like a manufacturer-grade catalog (think techniquex.com/resinous-flooring-systems): every system named, with its chemistry, nominal thickness, coat-by-coat build-up, where it's used and published properties. We build on Neogard (a Hempel company) systems, with Sherwin-Williams systems only where noted below. No links to manufacturer websites anywhere; every system gets the "Request the Submittal Package (PDS, SDS & Guide Spec)" button from Part 1, item 3. Never invent numbers: use only the values below. Where a value is not listed, leave it out (do not estimate).

PRESENTATION RULES (apply to every system below)
- Each system is a block on its system page with an anchor id (e.g. /industrial-epoxy#cg-32), showing: system name, "Neogard" or "Sherwin-Williams", chemistry, nominal thickness, a layer table (Coat · Product · Coverage · DFT mils), "Best for" line, published properties where given, and the submittal-package button.
- Add a small layer-stack diagram (inline SVG, navy line art, one band per coat, top coat at top, labeled) next to each layer table.
- Products are listed bottom to top (coat 1 = first coat applied).
- Under every table: "Values from Neogard's published system data. Final build-up, thickness and cure are confirmed in our submittal for your project."

1. /industrial-epoxy — NEOGARD CG SERIES (100% solids epoxy, thin film to 1/4"). Keep the page's existing title/meta/canonical/H1.
   CG-16: 1 Primer 70714/70715 @ 260 sf/gal, 6 mils · 2 Topcoat 70714/70715 @ 160 sf/gal, 10 mils · optional Chem/UV-resistant 70817/70818 CRU @ 200 sf/gal, 8 mils · optional texture 70714/70715 or 70817/70818 + 86500 Neogrip Spheres @ 400 sf/gal, 4 mils.
   CG-32: 1 Primer 70714/70715 @ 200 sf/gal, 8 · 2 Base 70714/70715 @ 130 sf/gal, 12 · 3 Topcoat 70714/70715 @ 130 sf/gal, 12 · optional CRU 70817/70818 @ 200 sf/gal, 8 · optional texture @ 400 sf/gal, 4.
   CG-65: 1 Base 70714/70715 + 86364 sand @ 80 sf/gal & 50 lb/100 sf, 20 · 2 1st Seal 70714/70715 @ 160 sf/gal, 10 · 3 2nd Seal 70714/70715 @ 200 sf/gal, 8 · optional CRU 70817/70818 @ 400 sf/gal, 4.
   CG-125: 1 1st Base 70714/70715 + 86364 sand @ 80 sf/gal & 50 lb/100 sf, 20 · 2 2nd Base same, 20 · 3 1st Seal 70714/70715 @ 160 sf/gal, 10 · 4 2nd Seal 70714/70715 @ 200 sf/gal, 8 · optional CRU @ 400 sf/gal, 4.
   CG-250 Trowel: 1 Primer 70714/70715 + CG Epoxy Mortar Blend @ 200 sf/gal & 20 lb/100 sf, 8 · 2 Mortar 70714/70715 + CG Epoxy Mortar Blend at specified thickness · 3 Grout 70714/70715 @ 200 sf/gal, 8 · 4 1st Seal @ 200 sf/gal, 8 · 5 2nd Seal @ 200 sf/gal, 8 · optional CRU @ 400 sf/gal, 4.
   Best for: warehouses, production areas, forklift and foot traffic, offices, common areas. Surface prep CSP 3.
   Published properties: 70714/70715 epoxy compressive strength 25,300 psi (ASTM D695). 70817/70818 CRU: Shore D 70 (ASTM D2240); Taber abrasion 23 mg/1,000 cycles CS-17 (ASTM D4060); passes anti-microbial test JIS Z 2801-2010.
   Also keep the existing Sherwin-Williams Resuflor Performance HPS build-up on this page as "Sherwin-Williams option".
   Add a selector table at the top: CG-16 (light traffic, recoats) · CG-32 (general commercial/light industrial) · CG-65 (textured, heavier traffic) · CG-125 (heavy forklift and production) · CG-250 Trowel (heaviest impact, 1/4" mortar).

2. /novolac-epoxy-flooring — NEW PAGE. Title "Novolac Epoxy Flooring | DFW & Nationwide | Legacy Industrial Coatings". H1 "Novolac Epoxy Flooring for Chemical Resistance". Add to the SYSTEMS menu (Resinous group), sitemap.xml, the server-side sitemap list, llms.txt and the prerender route list.
   Novolac 32: 1 Primer 70714/70715 @ 200 sf/gal, 8 · 2 Base 70704/70705 @ 100 sf/gal, 16 · 3 Topcoat 70704/70705 @ 200 sf/gal, 8 · optional texture 70704/70705 + 86500 @ 400 sf/gal, 4.
   Novolac 125: 1 1st Base 70714/70715 + 86364 sand @ 80 sf/gal & 50 lb/100 sf, 20 · 2 2nd Base 70704/70705 + 86364 sand, 20 · 3 1st Seal 70704/70705 @ 160 sf/gal, 10 · 4 2nd Seal 70704/70705 @ 200 sf/gal, 8.
   Published properties: 70704/70705 novolac compressive strength 10,000 psi (ASTM D695), Shore D 84. Higher operating temperature than standard epoxies; suited around ovens and constant-heat areas.
   Best for: chemical storage, battery charging rooms, secondary containment, bakeries, food processing, animal research. Chemical resistance is checked against Neogard's novolac chemical resistance chart for your specific chemicals.
   Link this page from /secondary-containment-coatings, /battery-room-flooring, /food-processing-flooring and /data-center-flooring (battery room hotspot), and use Novolac 32/125 as the build-ups on /secondary-containment-coatings and /battery-room-flooring.

3. /quartz-flooring — NEOGARD NEOQUARTZ (100% solids epoxy or polyaspartic binders with color quartz). Replace the "NeoQuartz Double Broadcast" block with these four:
   NeoQuartz Broadcast: 1 1st Base 70714/70715 + color quartz @ 80 sf/gal & 50 lb/100 sf, 20 (1/16" with aggregate) · 2 2nd Base same, 20 · 3 1st Seal 70734/70735 epoxy (interior) or 70817/70818 CRU (exterior) @ 160 sf/gal, 10 · 4 2nd Seal same @ 200 sf/gal, 8.
   NeoQuartz HD: 1 Primer 70714/70715 + CG mortar @ 200 sf/gal & 20 lb/100 sf, 8 · 2 Mortar 70714/70715 + CG mortar at specified thickness · 3 Broadcast 70714/70715 + color quartz @ 80 sf/gal & 50 lb/100 sf, 20 · 4 1st Seal 70734/70735 or 57051 @ 200 sf/gal, 8 · 5 2nd Seal same, 8.
   NeoQuartz Trowel: 1 Primer 70714/70715 + 86364 sand @ 200 sf/gal & 20 lb/100 sf, 8 · 2 Mortar 70714/70715 + color quartz at specified thickness · 3 Grout 70734/70735 @ 200 sf/gal, 8 · 4 1st Seal 70734/70735 or 70817/70818 @ 200 sf/gal, 8 · 5 2nd Seal same, 8.
   NeoQuartz Broadcast RTS (fast return to service, all polyaspartic): 1 1st Base 57051 High Performance Polyaspartic + color quartz @ 80 sf/gal & 50 lb/100 sf, 20 · 2 2nd Base same, 20 · 3 1st Seal 57051 @ 160 sf/gal, 10 · 4 2nd Seal 57051 @ 200 sf/gal, 8.
   Published properties: 70734/70735 epoxy compressive strength 11,000 psi (ASTM D695); 70817/70818 CRU Taber 23 mg; 57051 polyaspartic Taber 55 mg/1,000 cycles CS-17; CRU and polyaspartic pass JIS Z 2801-2010 anti-microbial.
   Best for: restrooms, locker rooms, commercial kitchens, corridors, showrooms, stadium concourses, pedestrian walkways. Prep CSP 3.

4. /flake-floors — NEOGARD NEOFLAKE + SHERWIN-WILLIAMS DECO FLAKE BC. Replace the current "Polyurea & Polyaspartic Flake Systems" section (remove Polymer Nation and Floor Guard) with Neogard's fast-cure flake systems. Keep the page's title, meta, H1 and the Sherwin-Williams Resuflor Deco Flake BC section.
   Neoflake (epoxy): 1 Primer 70714/70715 @ 200 sf/gal, 8 · 2 Base 70714/70715 @ 100 sf/gal · 3 Color flake broadcast to full rejection, 16 · 4 1st Seal 70734/70735 epoxy, 70817/70818 CRU or 70902/70910 urethane @ 200 sf/gal, 8 · 5 2nd Seal same, 8 · optional texture + 86500 Neogrip Spheres @ 400 sf/gal, 4.
   Neoflake RTS Series 1 (epoxy base, polyaspartic seals): 1 Primer 70714/70715 @ 200 sf/gal, 8 · 2 Base 70714/70715 @ 100 sf/gal · 3 Color flake, 16 · 4 1st Seal 57051 High Performance Polyaspartic @ 200 sf/gal, 8 · 5 2nd Seal 57051, 8 · optional texture 57051 + 86500 @ 400 sf/gal, 4.
   Neoflake RTS Series 2 (all polyaspartic, fastest return to service): 1 Base 70869/70819 Polyaspartic @ 100 sf/gal · 2 Color flake to full rejection, 16 · 3 1st Seal 57051 @ 200 sf/gal, 8 · 4 2nd Seal 57051, 8 · optional texture @ 400 sf/gal, 4.
   Comparison table columns: Neoflake (epoxy) · Neoflake RTS Series 1 · Neoflake RTS Series 2 · Sherwin-Williams Resuflor Deco Flake BC. Rows: chemistry · return to service (standard / fast / fastest / standard) · UV-stable topcoat option (CRU or urethane seal / polyaspartic / polyaspartic / urethane topcoat) · best for. No numbers that aren't listed here.
   Published properties: 70734/70735 compressive 11,000 psi; 70817/70818 CRU Taber 23 mg; 57051 Taber 55 mg; CRU and 57051 pass JIS Z 2801-2010 anti-microbial. Not recommended above 80% RH without a moisture-mitigating primer. Prep CSP 3.
   Best for: auto showrooms and service areas, retail, restaurants, locker rooms, sports venues, stadiums, manufacturing break and common areas.

5. /urethane-cement-flooring — NEOGARD NEOCRETE + HYBRI-GARD. Keep title/meta/H1. Neocrete is a cementitious polyurethane (urethane cement), 1/8" to 3/8", self-priming, thermal-shock resistant, for kitchens, pharmaceutical, food processing, freezers and high thermal cycling. Moisture vapor tolerance: up to 25 lb MVER (calcium chloride test).
   Neocrete SL (self-leveling): 70800 + 70801 + 70804 @ 32 sf per mixed unit at 3/16" (187 mils) · optional topcoat 16 mils.
   Neocrete SL Broadcast: SL mix at 3/16" · 86364 sand broadcast @ 40 lb/100 sf · topcoat: polyurethane 70800/70801/70804 @ 100 sf/gal, 16 mils, or Novolac 70704/70705 @ 130 sf/gal, 12 mils.
   Neocrete RT (rake & trowel): 70800 + 70801 + 70806 @ 36 sf per mixed unit at 3/16" · 86364 sand @ 40 lb/100 sf · RT Broadcast adds polyurethane topcoat (16 mils) or Novolac topcoat 70704/70705 (12 mils).
   Neocrete Trowel: 70800 + 70801 + 70802 @ 44 sf per mixed unit at 1/4" (250 mils) · optional topcoat 16.
   Neocrete SL Flake (decorative): SL mix at 3/16" · decorative flake · topcoat 70817/70818 or 70869/70819 @ 125 sf/gal, 12.
   Neocrete SL Quartz (decorative): SL mix at 3/16" · decorative quartz · 1st Seal 70869/70819 polyaspartic or 70817/70818 CRU @ 160 sf/gal, 10 · 2nd Seal @ 200 sf/gal, 8.
   Neocrete V (integral cove base): primer 70800/70801/70804 @ 100 sf/gal · cove mix 70800 + 70801 + 70803 @ 84 LF per mixed unit at 1/8", 4" high.
   Published properties (SL & RT): compressive strength 7,700 psi (ASTM C579); modulus of elasticity 446,700 psi (ASTM C580); Shore D 84 (ASTM D2240); no support of fungal growth (ASTM G21). Prep CSP 3–4.
   Hybri-Gard (hybrid): Neocrete SL urethane-cement base (32 sf at 3/16" or 45 sf at 1/8" per mixed unit) · broadcast of decorative flake (15–20 lb/100 sf), decorative quartz or 86364 sand (40 lb/100 sf) · grout coat and topcoat in one of three resin series: E-Series epoxy (70734/70735), P-Series polyaspartic (57051), M-Series MMA (FTS 450, fastest cure) · optional Hybri-Gard HTU finish @ 475–500 sf/gal. Best for food and beverage, commercial kitchens, production areas, warehouses, cold storage, schools and healthcare.
   Keep the existing Sherwin-Williams Polycrete SL block as "Sherwin-Williams option".

6. /mma-flooring — NEW PAGE. Title "MMA Flooring (Fast-Cure Methyl Methacrylate) | DFW & Nationwide | Legacy Industrial Coatings". H1 "MMA Flooring — Back in Service the Same Day". Add to SYSTEMS menu, sitemap.xml, server-side sitemap, llms.txt, prerender list.
   Neogard FTS MMA systems: acrylic MMA, 1/8" to 3/8", one-hour cure, non-porous and waterproof, UV stable for indoor or outdoor use, can be installed over quarry tile and across a wide range of temperatures, matching seamless cove base, no waxing. Meets South Coast AQMD VOC requirements.
   Variants (list as cards, no layer tables): FTS HD Self-Leveling Roll Coat · FTS Self-Leveling Heavy Duty Membrane · FTS SL Heavy Flex Coat · FTS SL Heavy Duty Solid Color (1/8") · FTS Neoflake SL · FTS NeoQuartz SL · FTS NeoQuartz Trowel (1/8") · FTS Solid Color, Neoflake and NeoQuartz cove bases (4"). All start with FTS 100/FTS 101 primer and adhesion promoter; body resins FTS 200 (flex) or FTS 300; topcoats FTS 400 or FTS 450.
   Published properties: tensile strength 3,850 psi (ASTM D638).
   Best for: commercial kitchens, food processing and packaging, pharmaceutical production, hotels and casinos, vivariums, and any facility with an overnight or weekend shutdown window (including data center support spaces).
   Link it from /food-processing-flooring, /restaurant-kitchen-flooring, /pharmaceutical-flooring and /data-center-flooring.

7. /restaurant-kitchen-flooring and /food-processing-flooring — add NEOGARD KITCHENGARD 3/16" (100% solids epoxy slurry broadcast with novolac seal): 1 1st Slurry Base 70714/70715 + 86468 flour + 86364 sand @ 40 sf/gal & 100 lb/100 sf, 40 · 2 2nd Slurry Base same, 40 · 3 1st Seal 70704/70705 novolac @ 200 sf/gal, 8 · 4 2nd Seal 70704/70705 @ 200 sf/gal, 8. Smooth, stipple or texture finish. Novolac properties: compressive 10,000 psi, Shore D 84. Best for restaurants, commercial kitchens, wineries and grocery stores without heavy thermal shock — where there is hot washdown or thermal shock, recommend Neocrete instead (link).

8. /aerospace-hangar-flooring — NEOGARD SKYGARD (epoxy/polyurethane hangar system, 16–56 mils, Skydrol resistant, UV stable, light reflective):
   SkyGard LD: Primer 70714/70715 @ 200 sf/gal, 8 · Topcoat 70817/70818 @ 200 sf/gal, 8 · optional texture 4.
   SkyGard MD: Primer 8 · Base 70714/70715 @ 80 sf/gal, 20 · Topcoat 70817/70818, 8 · optional texture 4.
   SkyGard HD: Primer 8 · Slurry base 70714/70715 + 86468 flour @ 40 sf/gal, 40 · Topcoat 70817/70818, 8 · optional texture 4.
   SkyGard MRO: Slurry base 70714/70715 + 86468 flour @ 40 sf/gal · 86364 sand @ 100 lb/100 sf, 40 · 1st Seal 70714/70715 @ 200 sf/gal, 8 · 2nd Seal 70817/70818 @ 285 sf/gal, 5 (or 70714/70715 @ 200 sf/gal, 8).
   Properties: 70714/70715 compressive 25,300 psi; 70817/70818 Shore D 70, Taber 23 mg. Best for hangars, aircraft maintenance and supply, tug areas, auto maintenance.

9. /epoxy-cove-base — NEOGARD EPOXY COVE BASE UV: 1 Primer 70714/70715 + 86364 sand (light broadcast) @ 250 sf/gal, 8 · 2 Cove mix 70714/70715 + P1934 fumed silica + 86364 sand or colored quartz, 40–50 LF at 1/8" thick, 4" high (height adjustable) · 3 Topcoat: 70704/70705 novolac, 70734/70735 epoxy, 70817/70818 CRU or 57051 polyaspartic. Shore D: novolac 84, epoxy 82, CRU 70, polyaspartic 70. CRU and polyaspartic topcoats pass JIS Z 2801-2010. Over drywall, green board, concrete or CMU. Also list Neocrete V (urethane-cement cove) and FTS cove bases as options with links.

10. /deck-coatings — NEOGARD TRAFFIC COATINGS (pedestrian). Keep the existing Peda-Gard build-up table. Add a system list (cards, no invented numbers): Peda-Gard, Peda-Gard Aliphatic, Peda-Gard FC (fast cure), Peda-Gard FC Recreational Deck, Peda-Gard FR (plywood decks), Peda-Gard M (mechanical rooms), Peda-Gard TS, Decorative Peda-Gard (including Flake and FC Flake), RTS Pedestrian (PMMA/PUMA fast cure), Peda-Gard SC (moisture containment), and non-waterproof options TrafficTuff and Epoxy Broadcast Overlay.
    TrafficTuff (non-waterproof, textured pedestrian/light vehicular): 1 Base 70714/70715-09 + 7992-U aggregate @ 100 sf/gal & 15 lb/100 sf, 16 · 2 Topcoat FC7540/FC7964 urethane @ 120 sf/gal, 12 (exterior, UV), or FC7510/FC7961 @ 133 sf/gal, 12, or 70714/70715 @ 133 sf/gal, 12. Vehicular traffic typically 24 hours after install (36–48 hours in cold weather); minimum application temperature 50°F and rising.

11. /parking-garage-coatings — NEOGARD AUTO-GARD (vehicular traffic membranes). Keep existing Auto-Gard, Auto-Gard FC and FC T tables. Add cards for Auto-Gard Aliphatic, Auto-Gard Aliphatic T, Auto-Gard E, Auto-Gard F, Auto-Gard FC Aliphatic, Auto-Gard T, RTS Vehicular System (PMMA/PUMA fast cure), RTS Helipad System, and Epoxy Broadcast Overlay (non-waterproof).

12. /roof-deck-waterproofing — NEOGARD ROOF AND BELOW-GRADE SYSTEMS. Organize by roof type (cards, no invented numbers):
    Built-up & modified bitumen: Elasta-Gard BUR/MB Aliphatic, Elasta-Gard Emulsion, Elastacryl BUR/MB, Silicone MB, Silicone HS MB.
    Concrete roofs: Elasta-Gard C Aliphatic, Silicone C, Silicone HS C.
    Metal roofs: Elasta-Gard M Aliphatic, Elastacryl M, Metal Roof Coating, Silicone M, Silicone HS M.
    Single-ply: Elasta-Gard SP Aliphatic, Elastacryl SP, Silicone SP, Silicone HS SP.
    Spray polyurethane foam: Permathane Aliphatic II, Elastacryl FR, Silicone FR, Silicone HS SPF.
    Below tile & buried: RTS Under Tile System, RTS Buried Waterproofing System, Perma-Gard III (keep existing table).
    Water features: RTS Water Feature System, Peda-Gard SC.
    Add a short "Data center roofs" paragraph linking back to /data-center-flooring.

13. /esd-static-control-flooring — SHERWIN-WILLIAMS (Neogard does not make an ESD floor). Remove the Polymer Nation and Sika content. Systems:
    Resuflor Topcoat SDE: nominal 35-mil electrostatic-dissipative epoxy system — a three-component, high-solids epoxy topcoat with conductive filler, applied at 15–20 mils over an electrically insulating epoxy coat. Published floor resistance 1×10^5 to 1×10^9 ohms; body voltage generation under 100 volts; ANSI/ESD S20.20-2014.
    Resuflor Topcoat SD: stipple-finish epoxy topcoat. Over Resuflor Aqua 3424 conductive primer it forms a conductive floor; over a standard epoxy primer (Resuprime 3579) it forms a static-dissipative floor.
    Keep the FAQs. Add: "We test resistance on site to the project's ESD specification before turnover."

14. /moisture-mitigation — say that Neogard epoxy, novolac, flake, quartz and hangar systems are limited by high moisture vapor transmission and are installed over a Neogard moisture-mitigating primer when testing calls for it, and that Neocrete urethane cement tolerates up to 25 lb MVER (calcium chloride). Keep the ASTM F2170 / F1869 testing content. Remove Sika and Polymer Nation build-ups.

15. /resinous-flooring — make it the plain-English overview: "What is resinous flooring?" (2-sentence answer), then a chemistry selector table — Epoxy (CG Series) · Novolac epoxy · Urethane cement (Neocrete) · Hybrid urethane cement (Hybri-Gard) · MMA (FTS) · Polyaspartic (RTS systems) · Decorative flake (Neoflake) · Decorative quartz (NeoQuartz) · ESD (Sherwin-Williams) — with columns Best for · Return to service (standard / fast / same day) · Thickness range · link. Then a link to the full library at /materials.

16. /materials — THE SYSTEMS LIBRARY. Keep the URL and title. Rebuild it as the Techniquex-style catalog: H1 "Systems Library". Filter chips by family (Epoxy · Novolac · Urethane Cement · MMA · Polyaspartic & Fast Cure · Flake & Quartz · ESD · Traffic Coatings · Roof Coatings · Cove Base). One card per system from items 1–13: system name, Neogard or Sherwin-Williams, chemistry, nominal thickness, mini layer-stack diagram, "Best for", "View system →" (deep link to the anchor on its system page) and the submittal-package button. Add ItemList schema listing every system with its URL. No outbound links.

17. INDUSTRY PAGES — in each industry page's "Recommended systems" section, use these (link each to its system anchor):
    Data centers: CG Series (support spaces), Sherwin-Williams ESD (electrical/UPS/MDF rooms), Novolac (battery rooms, containment), Neocrete or Hybri-Gard (CDU/mechanical rooms), FTS MMA (shutdown windows), Neogard roof coatings, Peda-Gard (stairs, mezzanines).
    Warehouse & manufacturing: CG-32, CG-65, CG-125, CG-250 Trowel, polished concrete.
    Food & beverage / pharmaceutical: Neocrete, Hybri-Gard, FTS MMA, Novolac, Epoxy Cove Base UV.
    Restaurants & kitchens: KitchenGard, Neocrete, FTS MMA, NeoQuartz (front of house).
    Healthcare, schools, pharmacies: NeoQuartz, Neoflake (anti-microbial CRU or polyaspartic seals), Epoxy Cove Base UV, Neocrete in kitchens.
    Aerospace & hangars: SkyGard LD/MD/HD/MRO.
    Auto dealerships & service: Neoflake, NeoQuartz, CG Series with CRU, SkyGard for service bays.
    Parking structures: Auto-Gard family, RTS Vehicular.
    Multifamily: Peda-Gard (decks, balconies), Decorative Peda-Gard, Neoflake.
    Retail, office, hotel: polished concrete, NeoQuartz, Neoflake, resilient flooring.
    Electronics manufacturing: Sherwin-Williams ESD, CG Series.
    Agriculture: Neocrete, Novolac, CG-125.

Part 2 checks for your final reply: the list of systems added per page, the two new URLs (confirm they are in the menu, both sitemaps, llms.txt and the prerender list), and confirmation that no page links to a manufacturer website.

========== PART 3 — ORIGINAL COPY PASS ==========

legacycommercialfloors.com is also live, and Google indexes only one version of text that appears on both sites. Rewrite every heading, paragraph, card blurb and FAQ answer on this site that is copied from, or a light rewording of, legacycommercialfloors.com, so each says the same thing in original words.

Scope: /about, /who-we-serve, /commercial, /commercialfloors, /about-commercial, /our-process, /reviews, /capability-packet, every industry page, every system page, and all industry/system card blurbs (src/data/site/*).
Do NOT touch: the homepage (leave every word as it is), page titles, meta descriptions, URLs, H1s, forms, verbatim Google reviews, spec/build-up tables, product numbers, and anything added in Part 2.

Rules:
- Same facts, same meaning, original sentences. No new claims.
- Write for owners, GCs, facility managers and specifiers nationwide; Dallas-Fort Worth is where we're headquartered, not the limit of where we work.
- Short sentences, specifics over adjectives (thickness, test standards, response times), no fluff ("premier", "top-notch", "world-class").
- Make /commercial, /commercialfloors and /about-commercial clearly different from each other: /commercial = commercial services hub (links to every industry and system); /commercialfloors = commercial floor systems overview (links to the Systems Library at /materials); /about-commercial = how we work with commercial clients (process, insurance, bonding, safety, testing, closeout). Each gets its own intro paragraph; no paragraph may appear on more than one page.

Part 3 checks for your final reply: report the number of blocks rewritten per page and confirm the homepage is unchanged.
