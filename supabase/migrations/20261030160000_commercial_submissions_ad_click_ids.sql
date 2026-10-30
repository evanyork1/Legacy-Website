-- Google/Bing/Meta click IDs and full UTM set on website requests, so a sold
-- JobTread job can be traced back to the ad click (offline conversion import).
ALTER TABLE public.commercial_submissions
  ADD COLUMN IF NOT EXISTS utm_term text,
  ADD COLUMN IF NOT EXISTS utm_content text,
  ADD COLUMN IF NOT EXISTS gclid text,
  ADD COLUMN IF NOT EXISTS gbraid text,
  ADD COLUMN IF NOT EXISTS wbraid text,
  ADD COLUMN IF NOT EXISTS msclkid text,
  ADD COLUMN IF NOT EXISTS fbclid text;
