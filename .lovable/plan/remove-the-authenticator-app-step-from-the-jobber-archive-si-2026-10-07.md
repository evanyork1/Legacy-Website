# Remove the authenticator-app step from the Jobber Archive sign-in

After this change, signing in at /jobberdetails takes only an email and password. No QR code and no 6-digit code.

## What stays the same
- Sign-in is still invite only, and the account must be an active archive user.
- Login rate limits stay on: 5 failed tries per email or 20 per network in 15 minutes.
- Auto sign-out after 30 minutes of inactivity.
- Prices stay admin-only, photos are only shown through links that expire after 5 minutes, and the audit log keeps running.

## Trade-off to be aware of
Without the second step, anyone who learns a team member's password can get into the archive. Strong, unique passwords become the main protection.

## Changes
1. **Sign-in screen:** remove the "Set up authenticator" and "Two-step verification" steps. A correct password takes you straight to the dashboard.
2. **Server checks:** the archive functions stop requiring the authenticator level on each request. They still verify the session and that the user is an active archive user.
3. **Database rules:** the read rules on archive tables stop requiring the authenticator level. They still require an active archive user, and admin-only tables still require admin.
4. Existing authenticator setups are left in place but ignored, so nobody gets prompted for a code anymore.

## Technical details
- `src/pages/jobberdetails/archiveSession.tsx`: drop the aal check in `evaluate`; go straight to `whoami`. Remove the `needs_enroll` and `needs_verify` stages.
- `src/pages/jobberdetails/ArchiveLogin.tsx`: remove `EnrollStep`, `VerifyStep` and the `log_mfa` call.
- `supabase/functions/_shared/archive.ts`: remove the `aal2` check in `requireArchiveUser`. Then redeploy the archive-admin, archive-signed-url and jobber-archive-sync functions.
- Migration: `CREATE OR REPLACE FUNCTION public.archive_mfa_ok()` to return `true`. This keeps `is_archive_user()` and `is_archive_admin()` and every existing policy working without rewriting them.
- Update the AGENTS.md archive rule and the project note to drop "aal2".
