REVOKE EXECUTE ON FUNCTION public.is_archive_user() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_archive_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_archive_user() TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.is_archive_admin() TO authenticated, service_role;