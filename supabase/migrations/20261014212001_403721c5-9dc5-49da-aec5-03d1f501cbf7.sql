ALTER TABLE public.commercial_submissions ADD COLUMN company text, ADD COLUMN square_footage text, ADD COLUMN files jsonb NOT NULL DEFAULT '[]'::jsonb, ADD COLUMN source text NOT NULL DEFAULT 'request-info-form';
CREATE POLICY "Request information uploads" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'request-info-uploads' AND name ~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/[A-Za-z0-9_.-]+$' AND lower(storage.extension(name)) IN ('pdf','jpg','jpeg','png','webp','heic','dwg','dxf','zip','doc','docx','xls','xlsx') AND (metadata->>'mimetype') IN ('application/pdf','image/jpeg','image/png','image/webp','image/heic','application/acad','image/vnd.dwg','application/dxf','application/zip','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
CREATE POLICY "Admins read request information uploads" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'request-info-uploads' AND public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE OR REPLACE FUNCTION public.validate_request_info_submission() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
DECLARE f jsonb;
BEGIN
 IF NEW.source <> 'request-info-form' THEN RETURN NEW; END IF;
 IF length(btrim(NEW.name)) NOT BETWEEN 1 AND 100 OR NEW.email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' OR length(NEW.email)>255 OR length(regexp_replace(NEW.phone,'[^0-9]','','g')) NOT BETWEEN 7 AND 15 OR length(NEW.phone)>40 OR length(btrim(NEW.project_description)) NOT BETWEEN 1 AND 10000 OR length(coalesce(NEW.company,''))>200 THEN RAISE EXCEPTION 'Invalid request information details'; END IF;
 IF NEW.square_footage IS NOT NULL AND NEW.square_footage NOT IN ('Under 2,500 SF','2,500–10,000 SF','10,000–50,000 SF','50,000–250,000 SF','250,000+ SF','Not sure') THEN RAISE EXCEPTION 'Invalid square footage'; END IF;
 IF jsonb_typeof(NEW.files)<>'array' OR jsonb_array_length(NEW.files)>10 THEN RAISE EXCEPTION 'Maximum 10 attachments'; END IF;
 FOR f IN SELECT value FROM jsonb_array_elements(NEW.files) LOOP
 IF jsonb_typeof(f)<>'object' OR (f->>'path') IS NULL OR (f->>'path') !~ ('^'||NEW.id::text||'/[A-Za-z0-9_.-]+$') OR length(coalesce(f->>'name','')) NOT BETWEEN 1 AND 255 OR coalesce((f->>'size')::bigint,-1) NOT BETWEEN 0 AND 26214400 THEN RAISE EXCEPTION 'Invalid attachment'; END IF;
 END LOOP;
 RETURN NEW;
END $$;
CREATE TRIGGER validate_request_info BEFORE INSERT ON public.commercial_submissions FOR EACH ROW EXECUTE FUNCTION public.validate_request_info_submission();