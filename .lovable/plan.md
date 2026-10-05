# Commercial Enhancement Plan

The goal is to make the site read as a commercial flooring contractor first, with residential secondary.

## 1. Home page leads with commercial
- The hero headline, photos and buttons speak to general contractors (GCs), facility managers and owners. Example headline: "Commercial Floor Systems for DFW Facilities."
- Swap the garage photos in the slideshow for warehouse, showroom and data-center photos.
- Main button: "Submit an ITB / Request a Bid". Secondary button: "Book an Estimate".
- Move residential to a single section lower on the page with a link to Garage Floors.

## 2. Proof that GCs look for
- A row of trust badges: insurance limits, bonding capacity, manufacturer certifications, OSHA training and safety record (EMR).
- A "Projects by the numbers" strip: square feet installed, projects delivered, largest single pour (Aloe Vera, 50k sq ft).
- A logo wall of GCs and brands you've worked for, if you can share them.
- Case studies rebuilt with scope, system used, square footage, schedule, and before/after photos.

## 3. Bid / ITB intake
- A dedicated /submit-bid page: project name, GC, bid date, square footage, system, and plan uploads (PDF).
- Bids go to the database, plus an email or Zapier alert to your team.
- Bid requests stay out of the residential Jobber quote flow.

## 4. Spec and resource center
- Downloadable data sheets and spec sections (CSI Division 09 67 00) for each system: epoxy, polyurea, polished concrete, urethane cement.
- A short "How we work with GCs" page: pre-bid walk, submittals, mockups, schedule, closeout and warranty documents.

## 5. Commercial SEO
- Industry pages × DFW city pages (for example "Warehouse Epoxy Flooring Fort Worth") built from the existing industry data.
- LocalBusiness and Service structured data on every commercial page.
- Internal links from blog posts to commercial service pages, and a commercial blog cluster: moisture mitigation, chemical resistance, and polished concrete vs. coatings.

## 6. Navigation and tone
- Top menu order: Commercial, Industries, Systems, Projects, About, Contact.
- Residential moves into a smaller menu item.
- A sticky "Request a Bid" button on commercial pages, replacing the garage estimate button.

## Technical notes
- New pages get added to the prerender, verify and sitemap scripts, using the flat `.html` output.
- Bid uploads go into a private storage bucket with upload-only access for the public.
