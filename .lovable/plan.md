# Fix: Jobber says "redirect URI isn't valid"

## What's happening
You signed in to the archive without problems; the logs show your password and authenticator code both went through. The error comes from **Jobber** after you click Connect Jobber. Jobber only sends people back to web addresses that are listed in your app's settings. The app the website uses (Client ID `a525f5fa-...`) doesn't list this address:

`https://byvazfrvoanojfayvsaz.supabase.co/functions/v1/jobber-oauth-callback`

Nothing on the website needs to change. The fix is in Jobber.

## Steps for you (about 2 minutes)
1. Go to developer.getjobber.com and sign in.
2. Open **Apps** and choose the app whose Client ID starts with `a525f5fa`.
3. Under **OAuth Callback URL** (sometimes called Redirect URI), paste the address above exactly. No trailing slash, and use https.
4. In the same screen, turn on **read** access for: Clients, Properties, Requests, Quotes, Jobs (this covers visits), Invoices and Notes. The Phase 2 import needs all of them.
5. Save.
6. Go back to `/jobberdetails/settings`, click **Connect Jobber**, approve, then click **Run check**.

## If that app doesn't show up in your Developer Center
It may belong to another Jobber login. In that case:
- Create a new app in the Developer Center with the callback address and read access above.
- Send me its new Client ID and Client Secret. I'll ask for them through the secure form and save them, then you reconnect. No other website changes are needed.

## Technical details
- Jobber returns `redirect_uri` invalid when the authorize request's `redirect_uri` doesn't exactly match one registered for that client_id. The website sends the URI above, built from the `JOBBER_CLIENT_ID` secret plus the same `REDIRECT_URI` the existing callback function already uses.
- If you have to create a new app, the only change is updating the `JOBBER_CLIENT_ID` / `JOBBER_CLIENT_SECRET` secrets and the hardcoded client ID in `JobberStatus.tsx`.
