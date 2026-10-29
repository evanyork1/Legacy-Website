import { ArrowRight, Check } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { ClientStrip, Eyebrow, FaqBlock, PageHero } from "@/components/site/sections";
import type { SimpleContent } from "@/data/site/simple/types";
import { PAGE_PROJECTS } from "@/data/site/jobPhotos";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

/**
 * Simple service/industry page: hero → overview → what we install → photos →
 * related links → FAQ → one closing CTA. A taste of the work, not a data
 * sheet; details are handled at the site walk and in the bid.
 */
type Link = { label: string; path: string };

export type SimplePageProps = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  crumbs: { name: string; url: string }[];
  serviceName: string;
  content: SimpleContent;
  photos?: { src: string; alt: string }[];
  /** Related pages shown beside the overview (industries for a system, systems for an industry). */
  related?: { title: string; links: Link[] };
  /** "More" grid near the bottom. */
  more?: { title: string; links: Link[] };
  /** Optional block (e.g. a case study) rendered after the photos. */
  extra?: React.ReactNode;
  closing?: { title: string; text: string };
};

/** Real job cards (case studies) with a photo, location and link. */
export const ProjectCards = ({ items, title = "Recent Projects" }: { items: CaseStudy[]; title?: string }) =>
  items.length === 0 ? null : (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <Eyebrow>Our Work</Eyebrow>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-8">{title}</h2>
        <div className={`grid gap-6 ${items.length > 1 ? "md:grid-cols-2" : "max-w-3xl"} ${items.length > 2 ? "lg:grid-cols-3" : ""}`}>
          {items.map((cs) => (
            <a key={cs.slug} href={`/${cs.category}-case-studies/${cs.slug}`} className="group block border border-border bg-background hover:border-foreground transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={cs.heroImage} alt={cs.heroAlt} loading="lazy" decoding="async" width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {cs.tag} · {cs.location}
                </p>
                <h3 className="font-heading font-semibold text-[17px] leading-[1.35] text-foreground mb-3 group-hover:underline">{cs.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.7] line-clamp-3">{cs.summary}</p>
                <span className="inline-flex items-center gap-2 mt-4 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground">
                  Read the case study <ArrowRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );

export const projectsFor = (path: string) =>
  (PAGE_PROJECTS[path] ?? []).map((slug) => caseStudies.find((c) => c.slug === slug)).filter((c): c is CaseStudy => !!c);

const CITY_LINKS = [
  { name: "Dallas", slug: "dallas" },
  { name: "Fort Worth", slug: "fort-worth" },
  { name: "Plano", slug: "plano" },
  { name: "Frisco", slug: "frisco" },
  { name: "McKinney", slug: "mckinney" },
  { name: "Richardson", slug: "richardson" },
  { name: "Carrollton", slug: "carrollton" },
  { name: "Lewisville", slug: "lewisville" },
];

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";
const INLINE = "text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground";

const SimplePage = ({
  path,
  metaTitle,
  metaDescription,
  h1,
  eyebrow,
  heroImage,
  heroAlt,
  crumbs,
  serviceName,
  content,
  photos = [],
  related,
  more,
  extra,
  closing,
}: SimplePageProps) => (
  <div className="lcf min-h-screen bg-background">
    <Seo title={metaTitle} description={metaDescription} path={path} ogImage={heroImage} />
    <StructuredData
      services={[{ name: serviceName, description: metaDescription, url: path }]}
      faqs={content.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      breadcrumbs={crumbs}
    />
    <SiteHeader />

    <PageHero eyebrow={eyebrow} title={h1} subhead={content.intro} image={heroImage} imageAlt={heroAlt} crumbs={crumbs} />

    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <h2 className={H2}>{content.overviewTitle}</h2>
          {content.overview.map((p) => (
            <p key={p.slice(0, 40)} className="text-muted-foreground font-body text-[16px] leading-[1.85] mb-6">
              {p}
            </p>
          ))}
          <p className="text-muted-foreground font-body text-[15px] leading-[1.8] mb-4">
            Legacy Industrial Coatings is a commercial and industrial flooring contractor based in Plano, Texas, installing
            floors since 2019 across Dallas–Fort Worth and nationwide. See our{" "}
            <a href="/commercial" className={INLINE}>commercial epoxy flooring</a>,{" "}
            <a href="/industrial-epoxy" className={INLINE}>industrial epoxy flooring</a> and{" "}
            <a href="/concrete-polishing" className={INLINE}>polished concrete</a> pages.
          </p>
          <p className="text-muted-foreground font-body text-[14px] leading-[1.8]">
            Serving{" "}
            {CITY_LINKS.map((c, i) => (
              <span key={c.slug}>
                <a href={`/epoxy-flooring/${c.slug}`} className={INLINE}>{c.name}</a>
                {i < CITY_LINKS.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            and the rest of North Texas, plus{" "}
            <a href="/service-areas" className={INLINE}>projects nationwide</a>.
          </p>
        </div>
        {related && related.links.length > 0 && (
          <div className="lg:col-span-4 lg:col-start-9">
            <Eyebrow>{related.title}</Eyebrow>
            <ul className="divide-y divide-border border-y border-border">
              {related.links.map((w) => (
                <li key={w.path + w.label}>
                  <a href={w.path} className="group flex items-center justify-between gap-3 py-4 font-heading text-[14px] text-foreground hover:underline">
                    <span>{w.label}</span>
                    <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>

    <section className="py-20 md:py-28 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className={H2}>{content.featuresTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.features.map((f) => (
            <div key={f.title} className="border border-border bg-background p-6">
              <h3 className="flex items-start gap-3 font-heading font-semibold text-[16px] text-foreground mb-2">
                <Check size={16} className="text-foreground/60 mt-1 flex-shrink-0" />
                {f.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-[1.7] pl-7">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {photos.length > 0 && (
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.slice(0, 3).map((p, i) => (
            <div key={p.src + i} className={`aspect-[4/3] overflow-hidden bg-muted ${i === 2 ? "hidden md:block" : ""}`}>
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" width={800} height={600} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    )}

    <ProjectCards items={projectsFor(path)} />

    {extra}

    <ClientStrip light />

    <FaqBlock heading={`${serviceName} Questions`} faqs={content.faqs} />

    {more && more.links.length > 0 && (
      <section className="py-20 md:py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] mb-8">{more.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {more.links.map((s) => (
              <a key={s.path} href={s.path} className="group bg-background px-6 py-5 flex items-center justify-between hover:bg-secondary transition-colors">
                <span className="font-heading font-semibold text-[14px] text-foreground group-hover:underline">{s.label}</span>
                <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
    )}

    <SiteFooter cta={closing} />
  </div>
);

export default SimplePage;
