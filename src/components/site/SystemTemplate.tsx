import { ArrowRight, Check } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Eyebrow, FaqBlock, PageHero, SpecTable } from "@/components/site/sections";
import { CatalogSection, HQ_LINE, SubmittalButton, TrustStrip } from "@/components/site/catalog";
import { ALL_INDUSTRIES, ALL_SYSTEMS } from "@/data/site/nav";
import NotFound from "@/pages/NotFound";
import type { SystemPageData } from "@/data/site/systems";
import { REVIEWED_LINE, withCostFaq } from "@/data/site/costFaq";
import { catalogForPage } from "@/data/site/catalog";

/**
 * System page: photo hero (H1 + two-sentence answer + reviewed line) →
 * what it is / where used → extra sections → selector/comparison →
 * systems library blocks → performance/prep → gallery → FAQ → related links
 * → ONE closing CTA (RequestInfoSection inside SiteFooter).
 */
const CheckList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-[14px] text-muted-foreground leading-[1.7]">
          <Check size={16} className="text-foreground/50 mt-1 flex-shrink-0" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Cell = ({ v }: { v: string }) =>
  v.startsWith("/") ? (
    <a href={v} className="inline-flex items-center gap-1 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:underline">
      View <ArrowRight size={12} />
    </a>
  ) : (
    <>{v}</>
  );

const SystemTemplate = ({ system }: { system?: SystemPageData }) => {
  if (!system) return <NotFound />;

  const industryLinks = ALL_INDUSTRIES.filter((i) => system.whereUsed.some((w) => w.path === i.path));
  const otherSystems = ALL_SYSTEMS.filter((s) => s.path !== system.path).slice(0, 9);
  const catalog = catalogForPage(system.path);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Systems", url: "/materials" },
    { name: system.crumbName ?? system.name, url: system.path },
  ];
  const faqs = withCostFaq(system.name.toLowerCase(), system.faqs);

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo title={system.metaTitle} description={system.metaDescription} path={system.path} ogImage={system.heroImage} />
      <StructuredData
        services={[{ name: system.serviceName ?? system.name, description: system.metaDescription, url: system.path }]}
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        breadcrumbs={crumbs}
      />
      <SiteHeader />

      <PageHero
        eyebrow="Flooring System"
        title={system.h1}
        subhead={system.intro}
        image={system.heroImage}
        imageAlt={system.heroAlt}
        crumbs={crumbs}
        meta={REVIEWED_LINE}
      />

      {/* What it is / where used */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8">What It Is</h2>
            {system.whatItIs.map((p) => (
              <p key={p.slice(0, 40)} className="text-muted-foreground font-body text-[16px] leading-[1.85] mb-6">
                {p}
              </p>
            ))}
            <p className="text-foreground font-body text-[15px] leading-[1.7] border-l-2 border-foreground pl-4">{HQ_LINE}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Eyebrow>Where It's Used</Eyebrow>
            <ul className="divide-y divide-border border-y border-border">
              {system.whereUsed.map((w) => (
                <li key={w.path + w.label}>
                  <a
                    href={w.path}
                    className="group flex items-center justify-between gap-3 py-4 font-heading text-[14px] text-foreground hover:underline"
                  >
                    <span>{w.label}</span>
                    <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {system.comparison && (
        <section className="py-20 md:py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Selector</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8">{system.comparison.title}</h2>
            <div className="overflow-x-auto border border-border">
              <table className="w-full min-w-[560px] text-left text-[14px]">
                <thead className="bg-secondary">
                  <tr>
                    <th scope="col" className="p-4 font-heading text-[12px] uppercase tracking-[0.12em] text-foreground"><span className="sr-only">System</span></th>
                    {system.comparison.columns.map((c) => (
                      <th key={c} scope="col" className="p-4 font-heading text-[12px] uppercase tracking-[0.12em] text-foreground">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {system.comparison.rows.map((r) => (
                    <tr key={r.label} className="border-t border-border">
                      <th scope="row" className="p-4 font-heading font-semibold text-foreground align-top">{r.label}</th>
                      {r.values.map((v, i) => (
                        <td key={i} className="p-4 text-muted-foreground leading-[1.7] align-top"><Cell v={v} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {system.sections?.map((sec, idx) => (
        <section key={sec.title} className={`py-20 md:py-24 ${idx % 2 === 0 ? "bg-secondary" : ""}`}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance">{sec.title}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-muted-foreground font-body text-[16px] leading-[1.85] mb-6">{p}</p>
            ))}
            {sec.link && sec.link.url.startsWith("/") && (
              <a
                href={sec.link.url}
                className="inline-flex items-center gap-2 border border-border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-foreground hover:border-foreground transition-colors"
              >
                {sec.link.label} <ArrowRight size={12} />
              </a>
            )}
          </div>
        </section>
      ))}

      <CatalogSection systems={catalog} />

      {/* Remaining build-ups not yet in the systems library */}
      {system.buildups.length > 0 && (
        <section className="py-24 md:py-32 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Specifications</Eyebrow>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-12">System Build-Up</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {system.buildups.map((b) => (
                <SpecTable key={b.title} title={b.title} layers={b.layers} total={b.total} />
              ))}
            </div>
            <SubmittalButton systemName={system.name} className="mt-8" />
          </div>
        </section>
      )}

      {catalog.length === 0 && system.buildups.length === 0 && (
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-muted-foreground text-[15px] max-w-xl">Product data, safety data and guide specifications for this scope are issued with our submittal.</p>
            <SubmittalButton systemName={system.name} />
          </div>
        </section>
      )}

      {system.cure && (
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="border border-border bg-background p-8">
              <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-3">Cure &amp; Return to Service</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.8]">{system.cure}</p>
            </div>
          </div>
        </section>
      )}

      {/* Performance / chemicals / prep */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-3 gap-12">
          <CheckList title="Performance Data" items={system.performance} />
          {system.chemicalResistance && system.chemicalResistance.length > 0 && (
            <CheckList title="Chemical Resistance" items={system.chemicalResistance} />
          )}
          <CheckList title="Prep & Testing" items={system.prep} />
        </div>
      </section>

      {/* Gallery */}
      {system.photos.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-4">
              {system.photos.slice(0, 3).map((p, i) => (
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

      <TrustStrip />

      <FaqBlock heading={`${system.name} Questions`} faqs={faqs} />

      {industryLinks.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Industries That Specify {system.name}</Eyebrow>
            <div className="flex flex-wrap gap-3">
              {industryLinks.map((i) => (
                <a
                  key={i.path}
                  href={i.path}
                  className="border border-border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other systems */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Eyebrow>More Systems</Eyebrow>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] mb-10">Other Systems We Install</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:border [&>*]:border-border">
            {otherSystems.map((s) => (
              <a key={s.path} href={s.path} className="group bg-background p-8 flex items-center justify-between hover:bg-secondary transition-colors">
                <span className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground group-hover:underline">
                  {s.label}
                </span>
                <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        cta={
          system.closing ?? {
            title: `Talk through your ${system.name.toLowerCase()} specification`,
            text: "Upload plans and we'll return a full bid within 24 hours of receiving them — or request an estimate and we'll walk the site with you.",
          }
        }
      />
    </div>
  );
};

export default SystemTemplate;
