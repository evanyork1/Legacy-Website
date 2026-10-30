import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calculator, Clock, CreditCard } from 'lucide-react';
import { PageBreadcrumbs } from '@/components/seo/PageBreadcrumbs';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import { BTN, Eyebrow, PageHero } from '@/components/site/sections';
import { BookingModal } from '@/components/landing/BookingModal';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { BUSINESS } from '@/data/site/nav';
import { JOB } from '@/data/site/jobPhotos';

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] text-balance";
const LABEL = "font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground";
const FIELD =
  "mt-2 block w-full border border-border bg-background px-4 py-3 text-[16px] md:text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors disabled:opacity-60";

const Financing = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { captureUtmsFromLocation, readStoredUtms } = await import("@/contexts/BookingUrlContext");
      captureUtmsFromLocation();
      const utms = readStoredUtms();
      const { error } = await supabase
        .from('Lead Form Subissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            questions_comments: formData.message,
            utm_source: utms.utm_source ?? null,
            utm_medium: utms.utm_medium ?? null,
            utm_campaign: utms.utm_campaign ?? null,
            landing_page: typeof window !== "undefined" ? window.location.href : null,
            referrer: typeof document !== "undefined" ? (document.referrer || null) : null,
          } as any
        ]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Financing Options - Legacy Industrial Coatings</title>
        <meta name="description" content="Flexible financing options for your epoxy flooring project. 12 or 24 month same as cash with 0% interest financing available." />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/financing" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/financing" />
      </Helmet>

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Financing", url: "/financing" }]} />

      <SiteHeader />

      <PageHero
        compact
        eyebrow="Financing"
        title="Flexible Financing Options"
        subhead="Make your dream flooring project affordable with our convenient financing solutions."
        image={JOB.epoxyTexture.src}
        imageAlt={JOB.epoxyTexture.alt}
        action={
          <a
            href="#financing-form"
            className={`${BTN} bg-background text-foreground border border-background hover:bg-transparent hover:text-background`}
          >
            Get More Information
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        }
      />

      {/* Wisetack offer */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <img
              src="/lovable-uploads/994be15a-0952-4194-b601-0968880b1dda.png"
              alt="Wisetack Financing"
              className="h-12 sm:h-14 w-auto mb-8"
              loading="eager"
              decoding="async"
            />
            <Eyebrow>0% Interest Financing Available</Eyebrow>
            <h2 className={`${H2} mb-6`}>12 or 24 Month Same as Cash</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border mt-8">
              {[
                { icon: Clock, label: "Quick Approval" },
                { icon: CreditCard, label: "No Hidden Fees" },
                { icon: Calculator, label: "Easy Payments" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-background p-5 flex items-center gap-3">
                  <Icon size={16} className="text-foreground/60 flex-shrink-0" />
                  <span className="font-heading text-[12px] tracking-[0.15em] uppercase text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Example calculation */}
          <div className="lg:col-span-6 border border-border">
            <div className="px-6 md:px-8 py-5 border-b border-border bg-secondary">
              <p className={LABEL}>Financing Example</p>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-heading font-semibold text-[20px] text-foreground leading-snug mb-1">Three Car Garage Epoxy Floor</h3>
              <p className="text-muted-foreground text-[15px] mb-8">Professional installation included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                <div className="bg-background p-6">
                  <p className={`${LABEL} mb-3`}>Total Project Cost</p>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">$4,200</p>
                </div>
                <div className="bg-background p-6">
                  <p className={`${LABEL} mb-3`}>Monthly Payment (24 months)</p>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">$175</p>
                  <p className="text-muted-foreground text-[13px] mt-2">0% interest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + CTA */}
      <section id="financing-form" className="scroll-mt-24 py-20 md:py-28 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 border border-border bg-background p-6 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-8">Get More Information</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className={LABEL}>First Name</label>
                  <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required autoComplete="given-name" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="lastName" className={LABEL}>Last Name</label>
                  <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required autoComplete="family-name" className={FIELD} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={LABEL}>Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required autoComplete="email" className={FIELD} />
              </div>
              <div>
                <label htmlFor="phone" className={LABEL}>Phone</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required autoComplete="tel" className={FIELD} />
              </div>
              <div>
                <label htmlFor="message" className={LABEL}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className={`${FIELD} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${BTN} w-full bg-foreground text-background border border-foreground hover:bg-foreground/90 disabled:opacity-60`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-px bg-border border border-border self-start">
            <div className="bg-background p-6 md:p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground leading-[1.15] mb-3">Ready to Get Started?</h3>
              <p className="text-muted-foreground text-[16px] leading-[1.85] mb-6">
                Book your free estimate today and learn more about our financing options.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(true)}
                  className={`${BTN} w-full bg-foreground text-background border border-foreground hover:bg-foreground/90`}
                >
                  Book Free Estimate
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={BUSINESS.phoneHref}
                  className={`${BTN} w-full border border-foreground text-foreground hover:bg-foreground hover:text-background`}
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className={`${LABEL} mb-4`}>Why Choose Our Financing?</p>
              <ul className="divide-y divide-border border-y border-border">
                {[
                  "Quick and easy application process",
                  "Competitive rates and flexible terms",
                  "No prepayment penalties",
                  "Get started on your project today",
                ].map((item) => (
                  <li key={item} className="py-3 text-[15px] text-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* This page carries its own lead form, so the shared footer form is hidden. */}
      <SiteFooter requestInfo={false} />

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </div>
  );
};

export default Financing;
