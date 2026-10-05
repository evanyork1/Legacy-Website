CREATE TABLE public.webhook_send_log (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  lead_id uuid not null,
  page text,
  status integer,
  created_at timestamptz not null default now(),
  unique (source, lead_id)
);
GRANT ALL ON public.webhook_send_log TO service_role;
GRANT SELECT ON public.webhook_send_log TO authenticated;
ALTER TABLE public.webhook_send_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins view webhook log" ON public.webhook_send_log FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));