import { ArrowRight, Check } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Eyebrow, FaqBlock, PageHero } from "@/components/site/sections";
import { CatalogSection, HQ_LINE, TrustStrip } from "@/components/site/catalog";
import { catalogForPage } from "@/data/site/catalog";
import { RECOMMENDED } from "@/data/site/recommended";
import { ALL_INDUSTRIES, ALL_SYSTEMS } from "@/data/site/nav";
import { INDUSTRY_PAGES } from "@/data/site/industries";
import { caseStudies } from "@/data/caseStudies";
import NotFound from "@/pages/NotFound";
import type { IndustryPageData } from "@/data/site/industries";
import { withCostFaq } from "@/data/site/costFaq";

/**
 * Industry page — mirrors legacycommercialfloors.com industry detail:
 * photo hero → overview → gallery → what we solve → recommended systems
 * (hairline grid) → standards → project → FAQ → navy CTA → other industries.
 */
const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-12 text-balance";
const INLINE = "text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground";

const IndustryTemplate = ({ industry }: { industry?: IndustryPageData }) => {
  if (!industry) return <NotFound />;

  const cs = industry.caseStudySlug ? caseStudies.find((c) => c.slug === industry.caseStudySlug) : undefined;
  const systemLinks = ALL_SYSTEMS.filter((s) => industry.areas.some((a) => a.link === s.path));
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Industries", url: "/who-we-serve" },
    { name: industry.name, url: industry.path },
  ];
  const others = ALL_INDUSTRIES.filter((i) => i.path !== industry.path)
    .map((i) => ({ ...i, img: INDUSTRY_PAGES.find((p) => p.path === i.path)?.heroImage }))
    .filter((i) => i.img)
    .slice(0, 8);
  const recommended = RECOMMENDED[industry.path] ?? [];
  const catalog = catalogForPage(industry.path);
  const faqs = withCostFaq(`${industry.name.toLowerCase()} flooring`, industry.faqs);

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={industry.metaTitle} description={industry.metaDescription} path={industry.path} ogImage={industry.heroImage} />
      <StructuredData
        services={[{ name: `${industry.name} Flooring`, description: industry.metaDescription, url: industry.path }]}
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={crumbs}
      />
      <SiteHeader />

      <PageHero eyebrow="Industry" title={industry.h1} subhead={industry.answer ?? industry.intro} image={industry.heroImage} imageAlt={industry.heroAlt} crumbs={crumbs} />

      {industry.answer && (
        <section className="pt-20 md:pt-28">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Overview</Eyebrow>
            <p className="font-heading text-xl md:text-2xl text-foreground leading-[1.4] text-balance">{industry.intro}</p>
            <p className="mt-6 text-foreground font-body text-[15px] leading-[1.7] border-l-2 border-foreground pl-4">{HQ_LINE}</p>
          </div>
        </section>
      )}
      {!industry.answer && (
        <section className="pt-16">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <p className="text-foreground font-body text-[15px] leading-[1.7] border-l-2 border-foreground pl-4">{HQ_LINE}</p>
          </div>
        </section>
      )}

      {/* Gallery */}
      {industry.photos.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-4">
              {industry.photos.slice(0, 3).map((p, i) => (
                <div key={p.src + i} className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What we solve */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>What We Solve</Eyebrow>
          <h2 className={H2}>What {industry.name} Floors Demand</h2>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {industry.demands.map((d) => (
              <li key={d} className="flex items-start gap-3 text-foreground font-body text-[15px] leading-[1.7]">
                <Check size={18} className="text-foreground/60 mt-1 flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended systems, area by area */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Recommended Systems</Eyebrow>
          <h2 className={H2}>Area by Area: What We Install</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:border [&>*]:border-border">
            {industry.areas.map((area) => (
              <div key={area.name} className="bg-background p-8 md:p-10 flex flex-col">
                <h3 className="font-heading font-semibold text-[15px] uppercase tracking-[0.15em] text-foreground mb-3">
                  {area.name}
                </h3>
                <p className="text-muted-foreground text-[14px] leading-[1.7] flex-1">{area.text}</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-heading text-[14px] font-semibold text-foreground">{area.system}</div>
                  {area.thickness && <div className="text-[12px] text-muted-foreground mt-1">{area.thickness}</div>}
                  {area.link && (
                    <a
                      href={area.link}
                      className="group inline-flex items-center gap-2 mt-4 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground"
                    >
                      View System <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {recommended.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Recommended Systems</Eyebrow>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] mb-8">Systems We Specify for {industry.name}</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:border [&>*]:border-border">
              {recommended.map((r) => (
                <li key={r.href + r.label} className="bg-background">
                  <a href={r.href} className="group flex items-start justify-between gap-3 p-6 h-full hover:bg-secondary transition-colors">
                    <span>
                      <span className="block font-heading font-semibold text-[14px] text-foreground group-hover:underline">{r.label}</span>
                      {r.note && <span className="block text-[13px] text-muted-foreground mt-1">{r.note}</span>}
                    </span>
                    <ArrowRight size={14} className="text-muted-foreground mt-1 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CatalogSection systems={catalog} title={`${industry.name} Systems & Build-Ups`} />

      {/* Standards */}
      {industry.standards.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Standards</Eyebrow>
            <h2 className={H2}>Standards &amp; Specs That Apply</h2>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
              {industry.standards.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground font-body text-[15px] leading-[1.7]">
                  <Check size={18} className="text-foreground/60 mt-1 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Relevant project */}
      {cs && (
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {cs.afterPhotos?.[0] && (
                <div className="lg:col-span-6">
                  <img
                    src={cs.afterPhotos[0].src}
                    alt={`${cs.title} — finished floor`}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              )}
              <div className="lg:col-span-5 lg:col-start-8">
                <Eyebrow>Relevant Project</Eyebrow>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-6">{cs.title}</h2>
                <p className="text-muted-foreground text-[16px] leading-[1.8] mb-8">{cs.summary}</p>
                <a
                  href={`/commercial-case-studies/${cs.slug}`}
                  className="group inline-flex items-center gap-3 border border-foreground text-foreground px-8 py-4 font-heading text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
                >
                  Read the Case Study
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <TrustStrip />

      <FaqBlock heading={`${industry.name} Flooring Questions`} faqs={faqs} />

      {/* Related systems + money-page anchors */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>Systems Used Here</Eyebrow>
          <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6 max-w-3xl">
            Comparing options for your {industry.name.toLowerCase()} floor? See our guides to{" "}
            <a href="/commercial" className={INLINE}>commercial epoxy flooring</a>,{" "}
            <a href="/industrial-epoxy" className={INLINE}>industrial epoxy flooring</a> and{" "}
            <a href="/concrete-polishing" className={INLINE}>polished concrete</a>.
          </p>
          {systemLinks.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {systemLinks.map((s) => (
                <a
                  key={s.path}
                  href={s.path}
                  className="border border-border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* Other industries */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>More Industries</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] mb-10">
            Other Industries We Serve
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((i) => (
              <a key={i.path} href={i.path} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-muted mb-3">
                  <img
                    src={i.img}
                    alt={`${i.label} flooring in DFW`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-heading font-semibold text-[14px] text-foreground group-hover:underline">{i.label}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        cta={
          industry.closing ?? {
            title: `Ready to talk about your ${industry.name.toLowerCase()} floor?`,
            text: "Upload plans and we'll return a full bid within 24 hours of receiving them — or request an estimate and we'll walk the site with you.",
          }
        }
      />
    </div>
  );
};

export default IndustryTemplate;
