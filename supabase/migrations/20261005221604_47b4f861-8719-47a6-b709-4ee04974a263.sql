CREATE TABLE public.archive_users (
  user_id uuid PRIMARY KEY,
  email text NOT NULL UNIQUE,
  role text NOT NULL DEFAULT 'viewer' CHECK (role IN ('admin','viewer')),
  active boolean NOT NULL DEFAULT true,
  invited_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.archive_users TO authenticated;
GRANT ALL ON public.archive_users TO service_role;
ALTER TABLE public.archive_users ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.archive_mfa_ok()
RETURNS boolean LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT coalesce(auth.jwt() ->> 'aal', '') = 'aal2'
$$;

CREATE OR REPLACE FUNCTION public.is_archive_user()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.archive_mfa_ok() AND EXISTS (
    SELECT 1 FROM public.archive_users WHERE user_id = auth.uid() AND active
  )
$$;

CREATE OR REPLACE FUNCTION public.is_archive_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.archive_mfa_ok() AND EXISTS (
    SELECT 1 FROM public.archive_users WHERE user_id = auth.uid() AND active AND role = 'admin'
  )
$$;

CREATE POLICY "Users see own archive row; admins see all"
ON public.archive_users FOR SELECT TO authenticated
USING (user_id = auth.uid() OR public.is_archive_admin());

CREATE TRIGGER archive_users_updated_at BEFORE UPDATE ON public.archive_users
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  user_email text,
  action text NOT NULL,
  record_type text,
  record_id text,
  metadata jsonb,
  ip text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX audit_log_created_idx ON public.audit_log (created_at DESC);
GRANT SELECT ON public.audit_log TO authenticated;
GRANT ALL ON public.audit_log TO service_role;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Archive admins read audit log"
ON public.audit_log FOR SELECT TO authenticated USING (public.is_archive_admin());

CREATE TABLE public.archive_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bucket text NOT NULL,
  key text NOT NULL,
  success boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX archive_rate_limits_lookup ON public.archive_rate_limits (bucket, key, created_at DESC);
GRANT ALL ON public.archive_rate_limits TO service_role;
ALTER TABLE public.archive_rate_limits ENABLE ROW LEVEL SECURITY;

-- Jobber tokens: server only
DROP POLICY IF EXISTS "Only admins can view jobber tokens" ON public.jobber_tokens;
DROP POLICY IF EXISTS "Admins can view token recovery" ON public.jobber_token_recovery;
REVOKE ALL ON public.jobber_tokens FROM anon, authenticated;
REVOKE ALL ON public.jobber_token_recovery FROM anon, authenticated;
GRANT ALL ON public.jobber_tokens TO service_role;
GRANT ALL ON public.jobber_token_recovery TO service_role;

-- Private storage reads only via edge function signed URLs; no client policies on jobber-archive.