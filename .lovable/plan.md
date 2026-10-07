# CompanyCam photo import into the Jobber Archive

Yes, this is doable. CompanyCam's API (v2) lists every project and every photo in it, with the address, GPS location, date, tags, descriptions and who took each photo. We'll copy all of it into the same private archive and match each project to a Jobber client.

## What you'll get
- Every CompanyCam project and photo copied into your private archive storage. The photos then no longer depend on CompanyCam.
- Each CompanyCam project matched to a Jobber client and property, so the client's page shows their Jobber photos and CompanyCam photos together.
- Photos can be searched by project name, address, tags, descriptions and comments (search itself arrives with Phase 3).
- A **CompanyCam** section on the Sync page with the same Start / Resume / Pause buttons, progress bars, a verification table (CompanyCam's count compared with the archive's count for projects and photos) and a list of problems with Retry buttons.
- A **Matching** list for anything that couldn't be matched automatically. Admins pick the right client from a search box, or mark it "no client".
- Videos are skipped, the same as with Jobber.

## How matching works
For each CompanyCam project, in this order:
1. **Address match**: the project's street address and ZIP are compared with Jobber property addresses after cleaning up abbreviations (St/Street, Ste/#, upper/lower case).
2. **Location match**: if no address matches, we look for a Jobber property within about 50 meters of the project's GPS location, when both have one.
3. **Name match**: the project name is fuzzy-compared with Jobber client and company names.
4. If none of these gives one clear answer, the project goes on the Matching list for review. It never gets guessed.

Each match records how it was made (address, location, name or manual) so you can audit it.

## What you'll need to do
- Create an access token in CompanyCam (Settings, then Integrations / Access Tokens, on an admin account). After you approve this plan, I'll open a secure form to save it. The token stays on the server and the browser never sees it.

## Security (same rules as the rest of the archive)
- Only active archive users who signed in with their authenticator code can see photos. Photos are shown only through links that expire after 5 minutes.
- Nothing can be written from the browser; only the server saves data.
- Viewing photos is recorded in the audit log.

## Technical details
- Secret: `COMPANYCAM_API_TOKEN` (Bearer token, `https://api.companycam.com/v2`).
- New tables, each read-only to archive users and keeping CompanyCam's full original data:
  - `companycam_projects` (CompanyCam ID, name, address parts, latitude/longitude, created/updated dates, matched Jobber client and property, match method, match confidence)
  - `companycam_photos` (CompanyCam ID, project, taken date, creator name, latitude/longitude, description, tags, file name, content type, size, storage path, downloaded)
  - `companycam_sync_runs`
  - `companycam_sync_errors` (admin-only)
- New edge function `companycam-archive-sync`, using the same pattern as the Jobber sync:
  - works in short time slices, saves its place after each page and continues on its own
  - re-running updates records instead of duplicating them
  - pauses and retries when CompanyCam's rate limits kick in
  - downloads the largest original image size into the private `jobber-archive` bucket under `companycam/<project>/...`
- Matching runs after the import and can be re-run at any time. The address is normalized in SQL with an indexed key. The location check only compares properties nearby. Manual matches are never overwritten.
- `archive-signed-url` is extended to accept CompanyCam photo paths. New admin actions are added for the Matching list.
- This depends on the Jobber sync finishing first, so the Jobber addresses are available to match against.
