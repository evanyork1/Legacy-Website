RANKING PASS — WIN THE COMMERCIAL SEARCHES (Commercial Testing draft only. Do NOT publish or deploy.)


GOAL
Search Console shows Google already displays us for these searches, but at positions 6–32. This pass gives each search group ONE strong page, makes those pages the most complete answer on the web, and fixes the technical issues holding the site back. Rules from earlier passes still apply: no URL removals except the 301s listed here, homepage visible text stays exactly as it is, forms unchanged, no links to manufacturer websites, no invented numbers (use {/* TODO Evan: ... */} placeholders where a fact or price is needed).

1. ONE PAGE PER SEARCH GROUP. These three pages are the targets. Every other page that mentions these topics must link to them with the exact anchor text shown, and must not compete with them (no other page may use these phrases in its title or H1).
   A) /industrial-epoxy — anchor text "industrial epoxy flooring" — wins: industrial epoxy flooring, industrial epoxy floor coating, industrial floor coatings, industrial floor epoxy, industrial concrete coatings, industrial epoxy contractor.
   B) /commercial — anchor text "commercial epoxy flooring" — wins: commercial epoxy flooring, commercial floor coating(s), commercial floor coating company, commercial epoxy floors.
   C) /concrete-polishing — anchor text "polished concrete" or "commercial concrete polishing" — wins: commercial concrete polishing, industrial concrete polishing, polished concrete Dallas, Dallas concrete polishing.

2. /industrial-epoxy — REBUILD AS THE DEFINITIVE PAGE (target 1,500–2,000 words of real content, keep the SiteSystemPage design).
   - Keep the title exactly ("Industrial Epoxy Flooring Dallas-Fort Worth | Legacy Industrial Coatings") and the URL. New meta description: "Industrial epoxy flooring and floor coatings for warehouses, manufacturing, food and aerospace facilities. Neogard CG Series from 16 mils to 1/4". DFW based, nationwide. Bids in 24 hours."
   - H1: "Industrial Epoxy Flooring & Floor Coatings". (Allow this H1 through nationalize().)
   - Keep the 2-sentence answer intro and the CG Series selector + build-up tables.
   - Add these H2 sections, in this order:
     • "Industrial Floor Coatings We Install" — short cards for CG Series epoxy, Novolac (chemical), Neocrete urethane cement (heat/washdown), FTS MMA (same-day return), SkyGard (hangars), each linking to its page.
     • "Industrial Epoxy Flooring by Facility" — warehouses & distribution, manufacturing, food & beverage, aerospace hangars, data centers, pharmaceutical — 2–3 sentences each + link to the industry page.
     • "How We Install Industrial Epoxy" — numbered: moisture testing (ASTM F2170 / F1869), shot-blast or grind to the specified CSP, crack and joint repair, moisture-mitigating primer when testing calls for it, body and topcoat, cove and line striping, punch walk and closeout photos.
     • "Industrial Epoxy vs. Polished Concrete vs. Urethane Cement" — HTML comparison table (best for, chemical resistance, heat/washdown, downtime, maintenance). Qualitative only.
     • "What Industrial Epoxy Flooring Costs" — what drives price (square footage, prep and removal, moisture, system thickness, phasing/nights) + {/* TODO Evan: typical $/SF ranges for CG-32, CG-65, CG-125 */}. Link to the cost article.
     • "Recent Industrial Projects" — pull from existing case studies; add a placeholder card {/* TODO Evan: approve Assa Abloy Plano warehouse and other projects to feature */}.
   - FAQs (FAQPage schema), 8 total: What is the best industrial floor coating? · How long does industrial epoxy last? · Can forklifts drive on an epoxy floor? · How long does installation take and how much downtime? · Epoxy or polished concrete for a warehouse? · Do you work nights and weekends in operating facilities? · Do you test for moisture first? · How much does industrial epoxy flooring cost per square foot? (no invented prices).
   - Service schema: serviceType "Industrial epoxy flooring", areaServed DFW cities (Dallas, Fort Worth, Plano, Frisco, Irving, Arlington, McKinney, Lewisville, Carrollton, Denton) plus "United States".

3. /commercial — MAKE IT THE COMMERCIAL EPOXY FLOORING PAGE (replaces the "services hub" role from the last pass; 1,500–2,000 words).
   - Title: "Commercial Epoxy Flooring & Floor Coatings | DFW & Nationwide | Legacy Industrial Coatings". Meta: "Commercial epoxy flooring and floor coatings for retail, restaurants, offices, healthcare, schools and dealerships. Testing-first installs, nights and weekends, bids in 24 hours. DFW based, nationwide."
   - H1: "Commercial Epoxy Flooring & Floor Coatings".
   - H2 sections: "Commercial Floor Coatings for Every Space" (retail & showrooms, restaurants & kitchens, offices & lobbies, healthcare & clinics, schools, auto dealerships, warehouses — each 2–3 sentences + link to its industry page) · "Systems We Install" (CG Series epoxy, Neoflake and NeoQuartz decorative, Neocrete urethane cement, FTS MMA, polished concrete — link each) · "Working in Open Businesses" (nights/weekends, phasing, low-odor options, occupied-building controls) · "How a Commercial Project Runs" (link /our-process) · "Commercial Epoxy Flooring Cost" (drivers + TODO range, link cost article) · "Commercial Clients" (client logo strip + existing case studies).
   - 8 FAQs with FAQPage schema (commercial focus: cost per SF, downtime, can you work after hours, how long does commercial epoxy last, epoxy vs polished concrete for retail, slip resistance, over existing VCT or tile, maintenance).
   - Link to /commercial from the homepage systems section ONLY through existing card links (do not change homepage visible text), from every industry page, from the footer Systems column (label "Commercial Epoxy Flooring"), and from the cost article.

4. CONSOLIDATE COMPETING PAGES with 301 redirects in public/_redirects (place above the SPA fallback): /commercialfloors → /commercial and /about-commercial → /our-process. Remove both from sitemap.xml, the server-side sitemap list, llms.txt and the prerender list; update every internal link to point straight to the new target. Make /resinous-flooring an overview that links to /industrial-epoxy (anchor "industrial epoxy flooring") and does not use "industrial epoxy" in its title or H1.

5. /concrete-polishing — REBUILD AS THE DEFINITIVE POLISHED CONCRETE PAGE (1,500–2,000 words).
   - Keep the title exactly ("Concrete Polishing Dallas-Fort Worth | Legacy Industrial Coatings") and URL. New meta: "Commercial and industrial polished concrete for warehouses, retail, showrooms and offices in Dallas–Fort Worth and nationwide. Mockup-approved finishes, dust-controlled grinding, bids in 24 hours."
   - H1: "Commercial & Industrial Polished Concrete".
   - H2 sections: "What Polished Concrete Is" (answer-first) · "Choose Your Finish" — aggregate exposure (cream, salt-and-pepper, exposed aggregate) and sheen (matte to high gloss), presented as the ASCC Concrete Polishing Council's aggregate classes and gloss levels, with a note that the existing slab drives the result and a mockup sets the standard · "Polished Concrete by Facility" (warehouses & distribution, retail & showrooms, offices, schools, pharmaceutical — links) · "Polished Concrete vs. Epoxy vs. Sealed Concrete" (HTML table) · "Our Polishing Process" (assessment, removal, grind sequence, densify, joint fill, polish, guard, maintenance plan) · "Polished Concrete in Dallas–Fort Worth" (one paragraph on our DFW base and projects; link the Dallas and Fort Worth city pages) · "What Polished Concrete Costs" (drivers + {/* TODO Evan: $/SF by finish level */}) · "Recent Polishing Projects" (pharmaceutical manufacturing case study + placeholder).
   - 8 FAQs with FAQPage schema: Can you polish an existing slab? · Will polishing hide cracks? · How long does polished concrete last? · Is polished concrete slippery? · Polished concrete or epoxy for a high-traffic distribution center? · How much downtime? · How do we maintain it? · Cost per square foot (no invented prices).
   - Service schema serviceType "Concrete polishing", areaServed as in item 2.

6. CITY PAGES — make the 8 largest commercial markets unique and commercial: /epoxy-flooring/dallas, /fort-worth, /plano, /frisco, /mckinney, /allen, /lewisville, /carrollton.
   - Keep URLs. Title pattern: "Commercial Epoxy Flooring & Polished Concrete in [City], TX | Legacy Industrial Coatings". H1: "Commercial Epoxy Flooring & Polished Concrete in [City], TX".
   - 600–900 words each, unique to the city: services we provide there (link /commercial, /industrial-epoxy, /concrete-polishing with their anchor text), facility types common there, any of OUR case studies or projects located there, drive time from our Plano office, nearby cities served (link those city pages), local FAQ (3 questions), LocalBusiness areaServed = that city. Do NOT invent landmarks, statistics, projects or clients; use {/* TODO Evan */} where a local project would go.
   - The Dallas and Fort Worth pages must include a "Polished Concrete in [City]" section linking to /concrete-polishing.
   - Remaining city pages: keep as they are, but each must have at least one unique intro paragraph naming the city and linking to the nearest of the 8 hub cities. Link all city pages from /service-areas.

7. COST ARTICLE — refresh /blog/commercial-epoxy-flooring-cost-per-square-foot-dfw (keep URL): title "Commercial Epoxy Flooring Cost per Square Foot (2026 DFW Guide)", update year references to 2026, add an HTML table of cost drivers and {/* TODO Evan: $/SF ranges by system */}, add links to /commercial, /industrial-epoxy and /concrete-polishing, add Article schema with author "Evan York, Owner, Legacy Industrial Coatings" and dateModified.

8. DUPLICATE BLOG POSTS: /blog/why-dfw-warehouses-choose-polished-concrete-over-epoxy and /blog/polished-concrete-vs-epoxy-dfw-warehouses cover the same topic. If not already redirected, 301 the "why-dfw..." URL to the "polished-concrete-vs-epoxy..." URL, merge any unique content into the surviving post, retitle it "Polished Concrete vs. Epoxy for Warehouses & Distribution Centers", add a comparison table and links to /concrete-polishing and /industrial-epoxy, and remove the old URL from the sitemap.

9. TECHNICAL
   - Trailing slashes: every internal link, canonical tag, sitemap entry and llms.txt entry uses the no-trailing-slash URL. If the hosting setup allows it without redirect loops, 301 "/path/" to "/path" for public routes; otherwise confirm "/path/" serves the same page with the no-slash canonical. Report which you did.
   - Keep www → non-www 301 and the non-www canonical.
   - Footer Systems column: first three links must be "Commercial Epoxy Flooring" (/commercial), "Industrial Epoxy Flooring" (/industrial-epoxy), "Polished Concrete" (/concrete-polishing).
   - Breadcrumbs (with BreadcrumbList schema) on every industry, system, city and blog page.
   - Images on the target pages and city pages: real job photos where available, WebP, width/height set, hero preloaded, descriptive alt text that names the system and facility type (e.g., "CG-65 epoxy floor in a Plano warehouse").
   - Lighthouse mobile performance 90+ on /, /commercial, /industrial-epoxy, /concrete-polishing and /epoxy-flooring/dallas; fix what blocks it.
   - Update sitemap lastmod for every changed page; update llms.txt descriptions for the three target pages and the eight city pages.
   - Add the new/changed pages to the prerender list and confirm verify-prerender passes.

When done, reply with: word count of /industrial-epoxy, /commercial, /concrete-polishing and the 8 city pages; the final title and H1 of each; the redirects added; what you did about trailing slashes; Lighthouse mobile scores; and a list of every TODO Evan placeholder.
