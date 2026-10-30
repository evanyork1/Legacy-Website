# Roadmap

## Client logos and presentation updates
- [x] Add supplied client logos, center testimonials and remove review link.
- [x] Refresh About experience wording, crew photo and manufacturer list.
- [x] Simplify nationwide coverage and remove trailing gray grid cells; verify desktop/mobile.

## Commercial Redesign (draft only, do not publish)
- [x] Phase 1: design system, new global header (mega menus) + footer, homepage rebuild, /about rebuild, /our-process, /capability-packet, /who-we-serve, /reviews, redesign /commercial + /commercialfloors + /about-commercial
- [x] Phase 2: industry template + all 18 industry pages, data center hub with campus map, system template + spec tables on all system pages, 7 new system pages, /materials library, /line-striping
- [ ] Wiring: App.tsx routes, public/sitemap.xml, sitemap edge function, llms.txt, prerender list
- [x] Phase 3 QA: route script-check (200/H1/unique title/meta/canonical), sitemaps valid, JSON-LD parses, forms unchanged, no Jobber links, no Fort Worth office, no competitor names, images OK, mobile overflow 375/390, internal links, Lighthouse mobile ≥90 where feasible

- [x] Restyle header, footer, homepage, industry/system templates and commercial pages to match legacycommercialfloors.com

## Full site pass Oct 2026 (docs/site-pass-oct-2026.md)
- [x] Part 1: nationwide positioning, /service-areas nationwide section, no manufacturer links, Neogard + Sherwin-Williams only, one closing CTA per page, four older pages on the system template, footer residential column removed, single trust strip
- [x] Part 2: Neogard systems library (catalog blocks, layer diagrams, /novolac-epoxy-flooring, /mma-flooring, /materials rebuild, industry recommended systems)
- [ ] Part 3: original copy rewrite (waiting on "continue")

## Completed
- [x] Add Request Information form, private uploads, and notification trigger.
- [x] Audit public pages at 375px and 390px and fix mobile-only usability issues without changing desktop or content.
- [x] Verify audited pages have no horizontal overflow or runtime errors and preserve mobile menu behavior.
- [x] Replace public forms and add footer/header placement with route exclusions.
- [x] Verify real PDF submission, stored row/file, automatic Zapier 200, and preview checks (13 rule tests passed).
- [x] Tighten homepage-only spacing and typography without changing marketing content or photos.
- [x] Apply requested navigation, office, metadata, and LinkedIn cleanups.
- [x] Verify desktop/mobile page height, hero fit, gutters, CTAs, and protected-page regressions; retained requested section padding and original tall About photos despite remaining spacious boundaries.