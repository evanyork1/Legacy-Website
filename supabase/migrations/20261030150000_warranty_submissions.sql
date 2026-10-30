-- Warranty claims from the /warranties page (applied 2026-10-30 via Supabase MCP).
CREATE TABLE public.warranty_submissions (
  id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  address text NOT NULL,
  previous_customer text NOT NULL,
  install_date text NOT NULL,
  description text NOT NULL,
  photos jsonb NOT NULL DEFAULT '[]'::jsonb,
  landing_page text,
  notified_at timestamptz,
  notify_status integer
);
COMMENT ON TABLE public.warranty_submissions IS 'Warranty claims submitted from the /warranties page.';
ALTER TABLE public.warranty_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a warranty claim" ON public.warranty_submissions FOR INSERT TO anon, authenticated WITH CHECK (notified_at IS NULL AND notify_status IS NULL);
CREATE POLICY "Admins read warranty claims" ON public.warranty_submissions FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE OR REPLACE FUNCTION public.validate_warranty_submission() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
DECLARE f jsonb;
BEGIN
  IF length(btrim(NEW.name)) NOT BETWEEN 1 AND 100
     OR length(regexp_replace(NEW.phone,'[^0-9]','','g')) NOT BETWEEN 7 AND 15 OR length(NEW.phone) > 40
     OR (NEW.email IS NOT NULL AND (NEW.email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' OR length(NEW.email) > 255))
     OR length(btrim(NEW.address)) NOT BETWEEN 3 AND 300
     OR NEW.previous_customer NOT IN ('Yes','No','Not sure')
     OR length(btrim(NEW.install_date)) NOT BETWEEN 1 AND 60
     OR length(btrim(NEW.description)) NOT BETWEEN 1 AND 5000
     OR length(coalesce(NEW.landing_page,'')) > 2000 THEN
    RAISE EXCEPTION 'Invalid warranty claim details';
  END IF;
  IF jsonb_typeof(NEW.photos) <> 'array' OR jsonb_array_length(NEW.photos) > 10 THEN RAISE EXCEPTION 'Maximum 10 photos'; END IF;
  FOR f IN SELECT value FROM jsonb_array_elements(NEW.photos) LOOP
    IF jsonb_typeof(f) <> 'object' OR (f->>'path') IS NULL OR (f->>'path') !~ ('^' || NEW.id::text || '/[A-Za-z0-9_.-]+$')
       OR length(coalesce(f->>'name','')) NOT BETWEEN 1 AND 255 OR coalesce((f->>'size')::bigint,-1) NOT BETWEEN 0 AND 26214400 THEN
      RAISE EXCEPTION 'Invalid photo';
    END IF;
  END LOOP;
  RETURN NEW;
END $$;
CREATE TRIGGER validate_warranty_submission BEFORE INSERT ON public.warranty_submissions FOR EACH ROW EXECUTE FUNCTION public.validate_warranty_submission();
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('warranty-uploads', 'warranty-uploads', false, 26214400, ARRAY['image/jpeg','image/png','image/webp','image/heic','image/heif'])
ON CONFLICT (id) DO NOTHING;
CREATE POLICY "Warranty photo uploads" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'warranty-uploads' AND name ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/[A-Za-z0-9_.-]+$' AND lower(storage.extension(name)) IN ('jpg','jpeg','png','webp','heic','heif'));
CREATE POLICY "Admins read warranty photos" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'warranty-uploads' AND public.has_role(auth.uid(), 'admin'::public.app_role));
