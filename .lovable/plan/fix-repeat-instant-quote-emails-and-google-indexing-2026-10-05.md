# Fix repeat instant-quote emails and Google indexing

## Findings so far
- **Repeat emails:** your database has no automatic triggers. The only scheduled job is the Jobber login refresh, which runs every 12 hours and sends no emails. No blank instant quotes are saved in the database, and the backend has logged no recent instant-quote activity. So the repeat emails are not coming from saved submissions. They are being sent some other way, most likely:
  - the browser on the live site, which sends straight to Zapier for the DFW and PHX quote forms, or
  - a Zap that replays or re-runs on its own.
- **Google indexing:**
  - Every live page redirected to a "/" version of itself while telling Google the version without "/" is the real page. Google sees a page that redirects, and its canonical points back to the redirect. That is the classic reason Google shows "Page with redirect" and drops pages. This is fixed in the code but not yet live.
  - The connected Google account is not a verified owner of legacyindustrialcoatings.com in Search Console, so Google's own indexing report can't be read yet.

## Plan

### 1. Stop the repeat emails
- Check the live site's code for anything that sends to Zapier without a person submitting a form. This covers page load, step changes, refreshes, and the DFW/PHX quote forms, which send to Zapier straight from the visitor's browser.
- Move every Zapier send off the visitor's browser and onto the server. Each send fires only after a real lead with a name, email and phone is saved, and at most once per lead.
- Record every alert sent (time, page, lead), so any future repeat can be traced in one look.
- If the site never sent the repeats, the source is a Zap re-running. I'll give you the exact Zap and setting to change.

### 2. Make Google indexing actually work
- Get the redirect fix live: pages load directly at the address in the sitemap and canonical tag, and the duplicate "index, follow" tag is removed.
- Audit every page on the live site with real requests:
  - each page loads directly with no redirect
  - exactly one self-pointing canonical and one robots tag per page
  - real content is in the page itself, not loaded in afterwards
  - no "noindex" on public pages
  - the sitemap lists only the final page addresses
  - the sitemap has no lastmod dates stamped with the build date
- Clean up the www address, old addresses and duplicate domains (legacyindustrial.co shows up in results too) with permanent redirects to legacyindustrialcoatings.com.
- Make the connected Google account a verified owner (one DNS record, exact value provided). Then pull Google's page-by-page report, inspect the key pages, resubmit the sitemap, and fix whatever Google actually reports.

### 3. Prove it
- After it goes live, fetch each page the way Googlebot does and confirm a clean result for every page in the sitemap.
- Report back with Google's page-by-page status.

## Technical notes
- Prerendered pages are written as `route.html`, Netlify's pretty URLs setting is off, and the page-check script was updated to match.
- The DFW and PHX quote hooks currently post to Zapier straight from the visitor's browser (`useQuoteFormDFW` / `useQuoteFormPHX`). They will move behind an edge function that checks the lead first and sends at most once per lead.
- An alert log table will record the source page, lead id and time of every alert sent.
- Search Console work uses the "Evan's Google Search Console" connection once the site is verified for it.
