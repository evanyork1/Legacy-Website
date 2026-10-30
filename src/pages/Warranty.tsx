import { Helmet } from "react-helmet-async";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow } from "@/components/site/sections";

const WRAP = "max-w-3xl mx-auto px-6 md:px-8 lg:px-12";
const H2 = "font-heading text-xl md:text-2xl font-bold text-foreground leading-[1.2] mb-4";
const H3 = "font-heading font-semibold text-[16px] text-foreground mb-2";
const P = "text-muted-foreground text-[16px] leading-[1.85]";
const LIST = "list-disc pl-5 space-y-1.5 text-muted-foreground text-[16px] leading-[1.75] marker:text-foreground/40";
const SECTION = "pt-10 mt-10 border-t border-border";

const PACKAGES = [
  { name: "Gold Package", interior: "Lifetime Warranty", exterior: "15-Year Warranty" },
  { name: "Silver Package", interior: "15-Year Warranty", exterior: "10-Year Warranty" },
  { name: "Single Coat System", interior: "10-Year Warranty", exterior: "5-Year Warranty" },
];

const Warranty = () => {
  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Warranty Information - Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Legacy Industrial Coatings Limited Lifetime Warranty for garage floor coatings. Learn about our warranty coverage, terms, and conditions."
        />
        <link rel="canonical" href="https://legacyindustrialcoatings.com/warranty" />
        <meta property="og:url" content="https://legacyindustrialcoatings.com/warranty" />
      </Helmet>

      <PageBreadcrumbs items={[{ name: "Home", url: "/" }, { name: "Warranty", url: "/warranty" }]} />

      <SiteHeader />

      <header className="border-b border-border bg-secondary">
        <div className={`${WRAP} pt-16 md:pt-24 pb-12 md:pb-16`}>
          <Eyebrow>Legacy Industrial Coatings</Eyebrow>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] text-balance">
            Limited Lifetime Warranty
          </h1>
          <p className="mt-5 font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Garage Floor Coatings</p>
        </div>
      </header>

      <main className="py-16 md:py-20">
        <article className={WRAP}>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              { label: "Effective Date", value: "January 2025" },
              { label: "Warranty Issued By", value: "Legacy Industrial Coatings, LLC" },
              { label: "Applicable To", value: "Residential Garage Floor Coatings Installed by Legacy Industrial Coatings" },
            ].map((d) => (
              <div key={d.label} className="bg-background p-5">
                <dt className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{d.label}</dt>
                <dd className="text-foreground text-[15px] leading-[1.6]">{d.value}</dd>
              </div>
            ))}
          </dl>

          <section className={SECTION}>
            <h2 className={H2}>Coverage Terms</h2>
            <p className={`${P} mb-4`}>
              Legacy Industrial Coatings, LLC ("Legacy") provides a Limited Lifetime Warranty for garage
              floor coatings installed by Legacy Industrial Coatings, exclusively for residential use. This
              warranty covers delamination, chipping, and peeling caused by improper installation under
              normal daily use.
            </p>
            <p className={P}>
              This warranty applies only to the original purchaser and is valid for as long as the purchaser
              owns the property in which the product was originally installed.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Warranty Coverage by Package</h2>
            <div className="border border-border">
              <div className="hidden sm:grid grid-cols-3 bg-secondary border-b border-border">
                {["Package", "Interior Spaces", "Exterior Spaces"].map((h) => (
                  <p key={h} className="px-5 py-3 font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{h}</p>
                ))}
              </div>
              {PACKAGES.map((p) => (
                <div key={p.name} className="grid grid-cols-1 sm:grid-cols-3 border-b border-border last:border-b-0">
                  <h3 className="px-5 pt-4 sm:py-4 font-heading font-semibold text-[15px] text-foreground">{p.name}</h3>
                  <p className="px-5 pt-2 sm:py-4 text-[15px] text-muted-foreground">
                    <span className="sm:hidden text-foreground">Interior Spaces: </span>
                    {p.interior}
                  </p>
                  <p className="px-5 pt-1 pb-4 sm:py-4 text-[15px] text-muted-foreground">
                    <span className="sm:hidden text-foreground">Exterior Spaces: </span>
                    {p.exterior}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-foreground bg-secondary px-5 py-4 text-[14px] text-muted-foreground leading-[1.75]">
              <strong className="text-foreground">Note*</strong> Warranty lengths may be amended based on floor conditions, this will be
              written out, described, and signed by customer on job quotes.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Definition of Lifetime</h2>
            <p className={P}>
              "Lifetime" refers to the duration of ownership by the original purchaser. If the original
              purchaser transfers ownership to a family member, coverage may extend, provided the
              product remains installed at the same property and no commercial use has occurred.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Limitations and Exclusions</h2>
            <ul className={LIST}>
              <li>Abuse, misuse, or neglect</li>
              <li>Impact damage, burns, or surface scratches due to objects being dragged on floor</li>
              <li>Hydrostatic pressure or moisture vapor transmission</li>
              <li>Structural movement, shifting, or settling of the substrate</li>
              <li>Use of de-icing chemicals, battery acid, or corrosive substances</li>
              <li>Acts of God or natural disasters (e.g., flooding, earthquakes)</li>
            </ul>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Claims Process</h2>
            <p className={`${P} mb-4`}>
              All warranty claims must be submitted to Legacy Industrial Coatings, along with proof of
              purchase and photographs of the affected area. Legacy reserves the right to inspect the site
              and determine the validity of the claim.
            </p>
            <p className={P}>
              If a valid claim is determined, Legacy may, at its sole discretion, repair or replace the
              affected area.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Transferability</h2>
            <p className={P}>
              This warranty is non-transferable beyond the original purchaser or their immediate family.
              It is voided upon sale of the property to a third party not related to the original purchaser.
            </p>
          </section>

          <section className={SECTION}>
            <h2 className={H2}>Disclaimer</h2>
            <p className={P}>
              This Limited Lifetime Warranty is the exclusive warranty provided by Legacy Industrial
              Coatings. No other warranties, expressed or implied, including warranties of
              merchantability or fitness for a particular purpose, shall apply.
            </p>
          </section>

          <section className={SECTION}>
            <h3 className={H3}>Authorized Representative</h3>
            <p className={P}>Legacy Industrial Coatings</p>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Warranty;
