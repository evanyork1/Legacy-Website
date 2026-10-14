CREATE OR REPLACE FUNCTION public.notify_request_info_insert() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
 PERFORM net.http_post(url := 'https://byvazfrvoanojfayvsaz.supabase.co/functions/v1/notify-request-info', headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmF6ZnJ2b2Fub2pmYXl2c2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MjQ4ODAsImV4cCI6MjA2NTUwMDg4MH0._UYJK6diQbMMlh-_uhDtgiyBq_Ama6Qd-NYQkugbfHc'), body := jsonb_build_object('submission_id', NEW.id), timeout_milliseconds := 30000);
 RETURN NEW;
EXCEPTION WHEN OTHERS THEN
 RAISE WARNING 'Request information notification could not be queued';
 RETURN NEW;
END $$;
REVOKE ALL ON FUNCTION public.notify_request_info_insert() FROM PUBLIC, anon, authenticated;