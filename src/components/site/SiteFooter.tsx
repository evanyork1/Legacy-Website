import { RequestInfoSection, type ClosingCta } from "@/components/sections/RequestInfoSection";
import { MANUFACTURER_LOGOS } from "@/data/site/manufacturerLogos";

const ManufacturerStrip = () =>
  MANUFACTURER_LOGOS.length === 0 ? null : (
    <section className="lcf py-10 md:py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <p className="font-heading text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6 text-center">
          Materials we install
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {MANUFACTURER_LOGOS.map((m) => (
            <img key={m.name} src={m.src} alt={m.name} loading="lazy" decoding="async" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60" />
          ))}
        </div>
      </div>
    </section>
  );
import {
  ALL_INDUSTRIES,
  ALL_SYSTEMS,
  BUSINESS,
  COMPANY_LINKS,
} from "@/data/site/nav";
import logo from "@/assets/site/logo-legacy-industrial-white.png";

const SERVICE_AREAS = [
  { label: "Dallas", path: "/epoxy-flooring/dallas" },
  { label: "Fort Worth", path: "/epoxy-flooring/fort-worth" },
  { label: "Plano", path: "/epoxy-flooring/plano" },
  { label: "Frisco", path: "/epoxy-flooring/frisco" },
  { label: "McKinney", path: "/epoxy-flooring/mckinney" },
  { label: "Allen", path: "/epoxy-flooring/allen" },
  { label: "Richardson", path: "/epoxy-flooring/richardson" },
  { label: "Lewisville", path: "/epoxy-flooring/lewisville" },
  { label: "All Service Areas", path: "/service-areas" },
];

/** Money pages lead the Systems column with their exact target anchors. */
const MONEY_PAGES = [
  { label: "Epoxy Flooring", path: "/commercial" },
  { label: "Polished Concrete", path: "/concrete-polishing" },
];
const FOOTER_SYSTEMS = [
  ...MONEY_PAGES,
  ...ALL_SYSTEMS.filter((s) => !MONEY_PAGES.some((m) => m.path === s.path)),
].slice(0, 10);

const HEAD = "font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-background/70 mb-3";
const LINK = "text-[12px] text-background/75 hover:text-background transition-colors";

const Column = ({ title, links }: { title: string; links: { label: string; path: string }[] }) => (
  <div>
    <h3 className={HEAD}>{title}</h3>
    <ul className="space-y-1.5">
      {links.map((l) => (
        <li key={l.path + l.label}>
          <a href={l.path} className={LINK}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const DEFAULT_CLOSING_CTA: Required<ClosingCta> = {
  title: "Ready for Your Next Commercial Floor?",
  text:
    "Tell us about your project — new build, re-coat, or a full facility floor across your DFW portfolio. Site walk within 1–3 business days; full bid within 24 hours of receiving plans.",
};

/**
 * Global footer. The page's single closing CTA (RequestInfoSection) renders
 * first with a page-specific heading; the navy footer below carries links and
 * contact details only. Plano is the only office.
 */
const SiteFooter = ({ cta, requestInfo = true }: { cta?: ClosingCta; requestInfo?: boolean }) => {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(BUSINESS.phoneHref);
    }
  };

  return (
    <div className="lcf">
      {requestInfo && <ManufacturerStrip />}
      {requestInfo && <RequestInfoSection id="request-info" title={cta?.title ?? DEFAULT_CLOSING_CTA.title} text={cta?.text ?? DEFAULT_CLOSING_CTA.text} />}
      <footer id="contact" className="public-mobile-footer">
        {/* Navy footer */}
        <div className="bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              <div className="col-span-2">
                <a href="/" aria-label="Legacy Industrial Coatings home" className="inline-block mb-6">
                <img
                  src={logo}
                  alt="Legacy Industrial Coatings logo"
                  className="h-12 md:h-14 w-auto"
                  width={912}
                  height={304}
                  loading="lazy"
                  decoding="async"
                />
                </a>
                <div className="space-y-3 text-[12px] text-background/50">
                  <div>
                    <p className="font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-background/70 mb-1">
                      Plano Office
                    </p>
                    <p>
                      {BUSINESS.address1}, {BUSINESS.address2}
                    </p>
                  </div>
                  <div className="mobile-footer-email space-y-1 pt-1">
                    <a
                      href={BUSINESS.phoneHref}
                      onClick={handlePhoneClick}
                      className="block hover:text-background/80 transition-colors"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                    <a href={`mailto:${BUSINESS.email}`} className="block hover:text-background/80 transition-colors">
                      {BUSINESS.email}
                    </a>
                  </div>
                  <div className="mobile-social-links flex gap-4 pt-1">
                    <a href="https://www.linkedin.com/company/legacy-industrial-coatings1" target="_blank" rel="noopener noreferrer" className="hover:text-background/80">LinkedIn</a>
                    <a href="https://www.instagram.com/legacyindustrialcoatings/" target="_blank" rel="noopener noreferrer" className="hover:text-background/80">Instagram</a>
                    <a href="https://www.facebook.com/legacyindustrialcoatings" target="_blank" rel="noopener noreferrer" className="hover:text-background/80">Facebook</a>
                    <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-background/80">Google</a>
                  </div>
                </div>
              </div>

              <Column title="Systems" links={FOOTER_SYSTEMS} />
              <Column title="Industries" links={ALL_INDUSTRIES.slice(0, 10)} />
              <div className="space-y-6">
                <Column title="Service Areas" links={SERVICE_AREAS} />
                <Column title="Residential" links={[{ label: "Garage Floors", path: "/garagefloors" }]} />
              </div>
              <Column title="Company" links={COMPANY_LINKS.slice(0, 7)} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 border-t border-background/10 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-background/70">
            <p>&copy; {new Date().getFullYear()} Legacy Industrial Coatings LLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="/warranty" className="hover:text-background transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteFooter;
