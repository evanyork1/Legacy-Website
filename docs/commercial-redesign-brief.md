COMMERCIAL REDESIGN — PHASE 1 OF 3 (this draft branch only)

You are working in the "Commercial Testing" draft. Do NOT publish or deploy. First, save this entire message to docs/commercial-redesign-brief.md so later phases can reference it.

GOAL
Turn legacyindustrialcoatings.com into the most credible commercial & industrial flooring site in DFW. The visual design and information architecture should match our sister site legacycommercialfloors.com (clean, premium, uppercase letter-spaced nav: ABOUT ▾ / INDUSTRIES ▾ / SYSTEMS ▾ / WHO WE SERVE / CASE STUDIES / CONTACT US button; full-bleed real-photo hero with eyebrow line, big headline, star rating line, short subhead, two CTAs; partner logo marquee; industries grid; systems grid; Why Legacy; Who We Serve; DFW locations; FAQ; closing CTA; rich footer). Think Techniquex-level authority, but warmer and faster to scan.

NON-NEGOTIABLE: KEEP ALL EXISTING SEO
1. Every existing route in src/App.tsx keeps working at the same URL. No URL is removed or renamed. That includes residential pages (/garagefloors, /flake-floors, /residential-patio, city pages /epoxy-flooring/:city, blog, case studies, careers, landing pages, internal tools, /jobberdetails). Residential pages stay live and indexable; they just leave the main nav (link them from a small "Residential" footer column).
2. Existing commercial URLs stay exactly as they are (e.g. /warehouse-flooring, /data-center-flooring, /aerospace-hangar-flooring, /urethane-cement-flooring, /quartz-flooring, /esd-static-control-flooring, /deck-coatings, /industrial-epoxy, /concrete-polishing, /concrete-sealing, /commercial-floor-maintenance, /commercialfloors, /commercial, /about-commercial). Redesign them in place; preserve each page's existing title, meta description, canonical, H1 intent, JSON-LD, and alt text unless improving them for the same keyword.
3. New pages use the same top-level kebab-case pattern. Add every new URL to public/sitemap.xml, the server-side sitemap list (the edge function the agent noted earlier), and public/llms.txt. Unique title/meta/canonical/OG per page; Service + BreadcrumbList + FAQPage schema where relevant; LocalBusiness schema stays.
4. Keep the existing prerendering/indexing setup working for every new route.

FORMS — EXACTLY THE SAME AS TODAY
Reuse the existing components unchanged: RequestInfoForm / RequestInfoSection (commercial_submissions + private uploads + notifications), the existing Cal.com "Book an On-Site Estimate" booking flow and its tracking, CommercialContactModal, /estimate-request-received and /booking-confirmed. Same fields, same backend, same validation, same analytics events. Only restyle the wrapper to the new design. Do NOT add Jobber links anywhere (legacycommercialfloors.com uses a Jobber link — do not copy that). Primary CTAs: "Book a Site Walk" (Cal.com flow) and "Request a Bid" (RequestInfoForm, which already accepts plan uploads).

BUSINESS FACTS (use exactly)
- Legacy Industrial Coatings LLC, founded September 2019. Office: 6010 W Spring Creek Pkwy, Plano, TX 75024. Do NOT show a Fort Worth office anywhere (remove it if present). Phone 214-305-6516. Email support@legacyindustrialcoatings.com.
- 5.0 / 5 across 201+ Google reviews.
- Typical project 25,000–400,000 SF; range 10,000 SF to 1,000,000 SF; typical value $80,000–$1,000,000+. Multi-year, phased and multi-site programs.
- Bonding capacity $5,000,000. GL, Commercial Auto, Umbrella, Workers Comp; additional insured, waiver of subrogation, primary & non-contributory available. Written Safety & Health Program LIC-SAF-001; SDS package before mobilization.
- Site walk within 1–3 business days of request. Full bid within 24 hours of receiving plans. Photo documentation from prep through final at closeout.
- Testing: ASTM F2170 in-situ RH, ASTM F1869 MVER, ASTM F710 substrate compliance, ICRI 310.2R CSP matched to system, ASTM D7234 pull-off adhesion on mockups, ambient temp/RH/dew-point monitoring.
- Manufacturers: Sherwin-Williams, Sika, Neogard (a part of Hempel), Hempel, Polymer Nation, Floor Guard. We install to the basis-of-design product or approved equal.
- Do not name competitors anywhere on the site. Win on specifics, not attacks.

SITE ARCHITECTURE (nav)
ABOUT ▾: Company (/about), Our Process (/our-process), Why 50% Deposits (section on /our-process, anchor link), Capability Packet (/capability-packet), Careers (/careers), Reviews (/reviews)
INDUSTRIES ▾ (mega menu, grouped): 
  Mission-Critical & Tech: Data Centers (/data-center-flooring), Semiconductor & Electronics (/electronics-manufacturing-flooring), Aerospace & Hangars (/aerospace-hangar-flooring)
  Industrial: Warehouse & Tilt-Up (/warehouse-flooring), Manufacturing (/manufacturing-floor-coating), Food & Beverage Processing (/food-processing-flooring), Pharmaceutical & Medical Manufacturing (/pharmaceutical-flooring), Agriculture (/agriculture-facility-flooring)
  Healthcare & Labs: Healthcare (/healthcare-flooring), Pharmacy & Cleanrooms (/pharmacy-cleanroom-flooring)
  Commercial: Restaurants & Commercial Kitchens (/restaurant-kitchen-flooring), Retail (/retail-flooring), Office & Corporate (/office-flooring), Hotel & Hospitality (/hotel-flooring), Education (/school-flooring), Multifamily (/multifamily-flooring), Auto Dealerships & Service (/auto-dealership-flooring), Parking Structures (/parking-garage-coatings)
SYSTEMS ▾ (mega menu, grouped):
  Resinous: Epoxy (/industrial-epoxy), Resinous Flooring (/resinous-flooring), Quartz (/quartz-flooring), Urethane Cement (/urethane-cement-flooring), ESD / Static-Control (/esd-static-control-flooring), Integral Cove Base (/epoxy-cove-base), Flake (/flake-floors)
  Concrete: Polished Concrete (/concrete-polishing), Sealed & Densified Concrete (/concrete-sealing), Joint Fill & Crack Repair (/joint-filling-crack-repair), Moisture Mitigation (/moisture-mitigation)
  Containment & Waterproofing: Secondary Containment (/secondary-containment-coatings), Battery Room Flooring (/battery-room-flooring), Deck & Traffic Coatings (/deck-coatings), Roof & Deck Waterproofing (/roof-deck-waterproofing)
  Safety & Marking: Line Striping & Floor Marking (/line-striping)
  Resilient: Carpet Tile, LVP/LVT, Sheet Vinyl, Rubber, VCT (/resilient-flooring)
  Care: Maintenance Programs (/commercial-floor-maintenance)
  Materials Library (/materials) — see Phase 2
WHO WE SERVE (/who-we-serve): Owners & Developers, General Contractors, End Users/Facility Teams, Architects & Specifiers
CASE STUDIES (/case-studies, existing)
CONTACT US (/contact, existing)

PHASE 1 BUILD SCOPE (do all of this now)
1. Design system: tokens, typography, spacing, buttons, cards, section patterns matching legacycommercialfloors.com. Navy/white palette from our logo; real photography only. Mobile-first; keep the mobile menu scroll-lock and mobile usability fixes already in the codebase.
2. New global header with the mega menus above and new footer (Systems, Industries, Company, Service Areas, Residential, contact block with Plano address only).
3. Homepage "/" rebuilt (keep its SEO title/meta/schema intent; it becomes commercial-first):
   - Hero: real commercial photo (the hangar/helicopter photo is great). Eyebrow "Commercial & Industrial Resinous Flooring". H1 along the lines of "DFW's Commercial & Industrial Flooring Contractor". Rating line "5.0 / 5 · 201+ Google Reviews". Subhead: resin floors, polished concrete, containment and traffic coatings installed for owners, GCs and facility teams across DFW. CTAs: Book a Site Walk / Request a Bid. Phone 214-305-6516.
   - Proof bar (count-up): $5M bonding · 201+ five-star reviews · bid within 24 hrs of plans · site walk in 1–3 business days · projects 10,000–1,000,000 SF.
   - Manufacturer partner marquee (reuse existing partner logo assets from the commercial page if present).
   - "Trusted by" client strip — see CLIENTS below.
   - Industries grid (cards with real photos, link to pages) and a featured Data Center band: "Data hall to generator yard" with a link to the hub.
   - Systems grid (each card shows the system name, one line, typical thickness, and "View specs").
   - Our Process preview (5 steps, link to /our-process).
   - 50% deposit callout (short version, link to full explanation).
   - Featured case studies (3, from existing case study data).
   - Testimonials carousel — see TESTIMONIALS below.
   - Capability Packet download band.
   - DFW locations grid (reuse existing city pages /epoxy-flooring/:city).
   - FAQ (FAQPage schema) and closing CTA with the RequestInfoSection form.
4. /about rebuilt: "Why Legacy is your true professional." Story (founded 2019 in DFW), our standards (moisture testing, CSP, mockups, photo docs, written safety program), manufacturer relationships, insurance & bonding, who we fit and who we don't (from the packet: "We are not the right fit for every project, nor do we strive to be the lowest-priced contractor in the room. We partner with owners, developers and contractors who value doing it right the first time."), client strip, testimonials, CTA.
5. /our-process (new). Five steps, visual timeline:
   1) Site Walk or Remote Plan Review — we walk the site within 1–3 business days, or review drawings remotely; moisture readings and photos on site.
   2) Fit Meeting — we learn your operation, schedule, budget and standards, and decide together whether we're the right partner.
   3) Estimate & Spec — full bid within 24 hours of plans; system recommendation with product data sheets, thickness, cure times and phasing plan.
   4) 50% Deposit & Scheduling — deposit reserves your crew dates and orders materials.
   5) Install, Inspect, Close Out — prep to spec, testing, daily photo log, punch walk, warranty and closeout package.
   Section "Why we require a 50% deposit — on every project, including $1M+ projects": it purchases and locks your materials (resin pricing and lead times move), reserves a dedicated crew on your dates instead of squeezing you between jobs, and keeps the job from stalling while invoices age — so we start on time and finish on time. It also signals mutual commitment from day one. Write it confidently and plainly; do not claim other companies do anything specific.
6. /capability-packet (new): HTML version of the packet (At a Glance, What We Install, Manufacturers, Industries, How We Work, Testing & Quality, Compliance & Coverage, Maintenance Programs, Featured Projects) plus a "Download the PDF" button. I will attach the PDF in a follow-up message; until then wire the button to open the RequestInfoForm with "Capability packet request" prefilled.
7. /who-we-serve and /reviews (new), styled like the rest.
8. Redesign the existing /commercialfloors, /commercial and /about-commercial in the new look (keep their URLs and SEO), and link them into the new structure so nothing is orphaned.

CLIENTS ("Trusted by" strip, About page, homepage)
Use client names set as clean, uniform wordmarks in our own type (do not recreate or draw any company's logo): Chipotle (restaurant locations), ASSA ABLOY, Aqua Tots Swim Schools, Gordon Food Service, FocusRx. Build the component so each entry can later swap in an official logo image file that I upload; until then show text. Add a small "Plus pharmaceutical manufacturers, GCs and property managers across DFW" line.

TESTIMONIALS
Use only real Google reviews already in this codebase (existing review/testimonial data). Pick the ones whose wording does not mention garages, homes or residential work. Show each review's text verbatim with the reviewer's displayed name and a "Google review" badge. Do not edit review text, do not add company names, job titles or "commercial client" labels, and do not invent reviews. Link "Read all 201+ reviews on Google" to our Google profile link already used on the site.

PHOTOS
Use only real photos already in this project (public/commercial/*, public/lovable-uploads/*, case-study images). Prefer commercial/industrial shots; keep garage photos off commercial pages and the homepage. Every image: responsive WebP sizes already generated where available, width/height set, lazy-loaded below the fold, descriptive keyword alt text.

When Phase 1 is done, reply with: pages built, any existing route you touched, and confirmation that every App.tsx route still resolves and forms are unchanged. Phase 2 (all industry pages incl. the data center hub, all systems pages with mil-thickness spec tables, materials library, line striping) comes next.
