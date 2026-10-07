
CREATE TABLE public.jobber_clients (id text PRIMARY KEY, name text, company_name text, first_name text, last_name text, emails text, phones text, is_lead boolean, is_archived boolean, tags text[], jobber_url text, created_at_jobber timestamptz, updated_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_properties (id text PRIMARY KEY, client_id text, street text, city text, province text, postal_code text, country text, address text, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_requests (id text PRIMARY KEY, client_id text, property_id text, title text, status text, jobber_url text, created_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_quotes (id text PRIMARY KEY, client_id text, property_id text, request_id text, quote_number text, title text, status text, client_message text, jobber_url text, created_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_jobs (id text PRIMARY KEY, client_id text, property_id text, quote_id text, job_number text, title text, status text, instructions text, start_at timestamptz, end_at timestamptz, jobber_url text, created_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_visits (id text PRIMARY KEY, job_id text, client_id text, property_id text, title text, status text, instructions text, start_at timestamptz, end_at timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_invoices (id text PRIMARY KEY, client_id text, invoice_number text, subject text, status text, message text, issued_date timestamptz, due_date timestamptz, job_ids text[], jobber_url text, created_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_line_items (id text PRIMARY KEY, parent_type text NOT NULL, parent_id text NOT NULL, name text, description text, quantity numeric, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_notes (id text PRIMARY KEY, parent_type text NOT NULL, parent_id text NOT NULL, client_id text, message text, created_by text, created_at_jobber timestamptz, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_attachments (id text PRIMARY KEY, note_id text, parent_type text, parent_id text, client_id text, file_name text, content_type text, size_bytes bigint, storage_path text, downloaded boolean NOT NULL DEFAULT false, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_financials (record_type text NOT NULL, record_id text NOT NULL, total numeric, subtotal numeric, balance numeric, deposit numeric, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (record_type, record_id));
CREATE TABLE public.jobber_payments (id text PRIMARY KEY, invoice_id text, client_id text, amount numeric, paid_at timestamptz, payment_type text, raw jsonb NOT NULL DEFAULT '{}', synced_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_sync_runs (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), status text NOT NULL DEFAULT 'running', started_by text, entity_state jsonb NOT NULL DEFAULT '{}', current_entity text, last_error text, heartbeat_at timestamptz NOT NULL DEFAULT now(), started_at timestamptz NOT NULL DEFAULT now(), finished_at timestamptz);
CREATE TABLE public.jobber_sync_errors (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), run_id uuid, entity text NOT NULL, record_id text, message text NOT NULL, context jsonb, resolved boolean NOT NULL DEFAULT false, attempts int NOT NULL DEFAULT 1, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE public.jobber_schema_snapshot (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now());

CREATE INDEX ON public.jobber_properties(client_id);
CREATE INDEX ON public.jobber_requests(client_id);
CREATE INDEX ON public.jobber_quotes(client_id);
CREATE INDEX ON public.jobber_jobs(client_id);
CREATE INDEX ON public.jobber_visits(job_id);
CREATE INDEX ON public.jobber_invoices(client_id);
CREATE INDEX ON public.jobber_line_items(parent_type, parent_id);
CREATE INDEX ON public.jobber_notes(parent_type, parent_id);
CREATE INDEX ON public.jobber_notes(client_id);
CREATE INDEX ON public.jobber_attachments(note_id);
CREATE INDEX ON public.jobber_payments(invoice_id);
CREATE UNIQUE INDEX jobber_sync_errors_open ON public.jobber_sync_errors(entity, record_id) WHERE NOT resolved;

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['jobber_clients','jobber_properties','jobber_requests','jobber_quotes','jobber_jobs','jobber_visits','jobber_invoices','jobber_line_items','jobber_notes','jobber_attachments'] LOOP
    EXECUTE format('GRANT SELECT ON public.%I TO authenticated', t);
    EXECUTE format('GRANT ALL ON public.%I TO service_role', t);
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('CREATE POLICY "Active archive users can read" ON public.%I FOR SELECT TO authenticated USING (public.is_archive_user())', t);
  END LOOP;
  FOREACH t IN ARRAY ARRAY['jobber_financials','jobber_payments','jobber_sync_runs','jobber_sync_errors','jobber_schema_snapshot'] LOOP
    EXECUTE format('GRANT SELECT ON public.%I TO authenticated', t);
    EXECUTE format('GRANT ALL ON public.%I TO service_role', t);
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('CREATE POLICY "Archive admins can read" ON public.%I FOR SELECT TO authenticated USING (public.is_archive_admin())', t);
  END LOOP;
END $$;

CREATE TRIGGER jobber_sync_errors_updated_at BEFORE UPDATE ON public.jobber_sync_errors FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
