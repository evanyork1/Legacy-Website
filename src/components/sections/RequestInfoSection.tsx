import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RequestInfoForm } from '@/components/forms/RequestInfoForm';
import { showFooterRequestInfo } from '@/lib/requestInfo';
import { openCalBooking } from '@/lib/calBooking';

export type ClosingCta = { title?: string; text?: string };

/**
 * The single closing call-to-action on every public page: page-specific
 * heading + one line, the Request Information form (with plan upload) and a
 * secondary Cal.com "Request an Estimate" button.
 */
export const RequestInfoSection = ({ id = 'request-info', title, text }: { id?: string } & ClosingCta) => {
  const { pathname } = useLocation();
  if (!showFooterRequestInfo(pathname)) return null;
  return (
    <section id={id} className="request-info-theme scroll-mt-32 bg-muted py-10 text-foreground lg:py-14">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          {title && (
            <div className="mb-8 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-[1.1] mb-4 text-balance">{title}</h2>
              {text && <p className="text-muted-foreground font-body text-[15px] max-w-2xl mx-auto leading-relaxed">{text}</p>}
              <button
                type="button"
                onClick={openCalBooking}
                className="group mt-6 inline-flex items-center gap-3 border border-foreground text-foreground px-7 py-3 font-heading text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Prefer to talk? Request an Estimate
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
          <RequestInfoForm />
        </div>
      </div>
    </section>
  );
};
