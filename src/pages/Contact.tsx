import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { RequestInfoForm } from "@/components/forms/RequestInfoForm";
import { BTN, Eyebrow, PageHero } from "@/components/site/sections";
import { BUSINESS } from "@/data/site/nav";
import { JOB } from "@/data/site/jobPhotos";
import { openCalBooking } from "@/lib/calBooking";

const LABEL = "font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3";
const VALUE = "font-heading font-semibold text-[17px] md:text-[18px] text-foreground leading-snug";

/**
 * /contact — the page body IS the request form. The shared footer form is
 * suppressed on this route (showFooterRequestInfo), so the one form on the
 * page lives here, with the contact details in a hairline grid above it.
 */
const Contact = () => {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(BUSINESS.phoneHref);
    }
  };

  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Contact Legacy Industrial Coatings | Commercial & Industrial Epoxy Flooring, Plano TX</title>
        <meta
          name="description"
          content="Contact Legacy Industrial Coatings for commercial and industrial epoxy flooring and polished concrete. Plano, TX office serving Dallas–Fort Worth, all of Texas and nationwide."
        />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/contact" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/contact" />
      </Helmet>

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

      <SiteHeader />

      <PageHero
        compact
        eyebrow="Contact"
        title="Contact Legacy Industrial Coatings"
        subhead="Ready to transform your floors? Tell us about your project, send plans, or call our Plano office."
        image={JOB.mfgEpoxy.src}
        imageAlt={JOB.mfgEpoxy.alt}
        action={
          <>
            <a
              href="#request-info"
              className={`${BTN} bg-background text-foreground border border-background hover:bg-transparent hover:text-background`}
            >
              Request Information
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              onClick={handlePhoneClick}
              className={`${BTN} border border-background/30 text-background hover:bg-background hover:text-foreground`}
            >
              {BUSINESS.phoneDisplay}
            </a>
          </>
        }
      />

      <main>
        {/* Contact details */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-10 text-balance">
              Talk to Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              <div className="bg-background p-6 md:p-8 min-w-0">
                <p className={LABEL}>Phone</p>
                <a href={BUSINESS.phoneHref} onClick={handlePhoneClick} className={`${VALUE} hover:underline underline-offset-4`}>
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="bg-background p-6 md:p-8 min-w-0">
                <p className={LABEL}>Email</p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="font-heading font-semibold text-[15px] text-foreground leading-snug break-all hover:underline underline-offset-4"
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="bg-background p-6 md:p-8 min-w-0">
                <p className={LABEL}>Plano Office</p>
                <address className="not-italic text-muted-foreground text-[15px] leading-[1.7]">
                  6010 W Spring Creek Parkway
                  <br />
                  Plano, TX 75024
                </address>
              </div>
              <div className="bg-background p-6 md:p-8 min-w-0">
                <p className={LABEL}>Service Area</p>
                <p className="text-muted-foreground text-[15px] leading-[1.7]">
                  Dallas–Fort Worth, all of Texas and{" "}
                  <a href="/service-areas#nationwide" className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground">
                    nationwide
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The request form */}
        <section id="request-info" className="request-info-theme scroll-mt-32 bg-secondary border-y border-border py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="mb-10 text-center">
              <Eyebrow>Request Information</Eyebrow>
              <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-4 text-balance">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground text-[16px] leading-[1.85] max-w-2xl mx-auto">
                Get in touch with our team today. Attach plans or photos and we'll follow up within one business day.
              </p>
              <button
                type="button"
                onClick={openCalBooking}
                className={`${BTN} mt-6 border border-foreground text-foreground hover:bg-foreground hover:text-background`}
              >
                Want to meet ASAP? Schedule a site walk
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <RequestInfoForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Contact;
