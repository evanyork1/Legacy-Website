import { Helmet } from "react-helmet-async";
import { fitDescription, fitTitle } from "@/lib/seoText";
import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Eyebrow, PageHero } from "@/components/site/sections";
import { getCaseStudyBySlug } from "@/data/caseStudies";

type Photo = { src: string; alt: string };

const WRAP = "max-w-7xl mx-auto px-6 md:px-8 lg:px-12";
const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] text-balance";

const PhotoGrid = ({
  label,
  title,
  photos,
  onOpen,
}: {
  label: string;
  title: string;
  photos: Photo[];
  onOpen: (p: Photo) => void;
}) => (
  <div>
    <Eyebrow>{label}</Eyebrow>
    <h2 className={`${H2} mb-8`}>{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {photos.map((p, i) => (
        <button
          key={p.src + i}
          type="button"
          onClick={() => onOpen(p)}
          aria-label={`Enlarge photo: ${p.alt}`}
          className="aspect-square overflow-hidden bg-muted cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="eager"
            decoding="async"
            width={600}
            height={600}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </button>
      ))}
    </div>
  </div>
);

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const cs = slug ? getCaseStudyBySlug(slug) : undefined;
  if (!cs) return <Navigate to="/case-studies" replace />;

  const caseStudyPath = cs.category === "residential" ? "residential-case-studies" : "commercial-case-studies";
  const canonical = `https://legacyindustrialcoatings.com/${caseStudyPath}/${cs.slug}`;
  const heroImageAbs = `https://legacyindustrialcoatings.com${cs.heroImage}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.metaDescription,
    image: heroImageAbs,
    author: { "@type": "Organization", name: "Legacy Industrial Coatings" },
    publisher: {
      "@type": "Organization",
      name: "Legacy Industrial Coatings",
      logo: {
        "@type": "ImageObject",
        url: "https://legacyindustrialcoatings.com/lovable-uploads/e90dc902-382c-49a1-92b3-46b9b06b6a4b.png",
      },
    },
    mainEntityOfPage: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://legacyindustrialcoatings.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://legacyindustrialcoatings.com/case-studies" },
      { "@type": "ListItem", position: 3, name: cs.title, item: canonical },
    ],
  };

  const categoryLabel = cs.category === "residential" ? "Residential Case Studies" : "Commercial Case Studies";
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: categoryLabel, url: `/${caseStudyPath}` },
    { name: cs.title, url: `/${caseStudyPath}/${cs.slug}` },
  ];

  const facts = [
    { label: "Location", value: cs.location },
    { label: "Service", value: cs.serviceType },
    { label: "Scope", value: cs.squareFootage },
    { label: "Timeline", value: cs.timeline },
  ].filter((f) => !!f.value);

  const story = [
    { label: "01", title: "The Challenge", paragraphs: cs.challenge },
    { label: "02", title: "Our Approach", paragraphs: cs.solution },
    { label: "03", title: "The Result", paragraphs: cs.result },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>{fitTitle(cs.metaTitle)}</title>
        <meta name="description" content={fitDescription(cs.metaDescription)} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={fitTitle(cs.metaTitle)} />
        <meta property="og:description" content={fitDescription(cs.metaDescription)} />
        <meta property="og:image" content={heroImageAbs} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        <PageHero
          eyebrow={cs.tag}
          title={cs.title}
          subhead={cs.summary}
          image={cs.heroImage}
          imageAlt={cs.heroAlt}
          crumbs={crumbs}
        />

        {/* Project facts */}
        <section className="border-b border-border">
          <div className={`${WRAP} py-10 md:py-12`}>
            <dl className={`grid grid-cols-2 ${facts.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"} gap-px bg-border border border-border`}>
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`bg-background p-5 md:p-6 min-w-0 ${facts.length % 2 === 1 && i === facts.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <dt className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{f.label}</dt>
                  <dd className="font-heading text-[15px] md:text-[16px] font-semibold text-foreground leading-snug break-words">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Story: Challenge / Approach / Result */}
        <section className="py-16 md:py-24">
          <div className={WRAP}>
            <div className="divide-y divide-border border-y border-border">
              {story.map((s) => (
                <div key={s.title} className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-10 md:py-14">
                  <div className="lg:col-span-4">
                    <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">{s.label}</p>
                    <h2 className={H2}>{s.title}</h2>
                  </div>
                  <div className="lg:col-span-8 max-w-3xl">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground font-body text-[16px] leading-[1.85] mb-6 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before */}
        {cs.beforePhotos.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary border-y border-border">
            <div className={WRAP}>
              <PhotoGrid label="Photos" title="Before" photos={cs.beforePhotos} onOpen={setLightbox} />
            </div>
          </section>
        )}

        {/* During */}
        {cs.duringPhotos.length > 0 && (
          <section className="py-16 md:py-24">
            <div className={WRAP}>
              <PhotoGrid label="Photos" title="During" photos={cs.duringPhotos} onOpen={setLightbox} />
            </div>
          </section>
        )}

        {cs.video && (
          <section className="py-16 md:py-24 border-t border-border">
            <div className={`${WRAP} grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
              <video
                src={cs.video.src}
                poster={cs.video.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                controls
                className="w-full max-w-sm mx-auto md:mx-0 aspect-[9/16] object-cover bg-muted"
                aria-label={cs.video.caption}
              />
              <div>
                <Eyebrow>Video</Eyebrow>
                <h2 className={`${H2} mb-4`}>On the Job</h2>
                <p className="text-muted-foreground text-[16px] leading-[1.85]">{cs.video.caption}</p>
              </div>
            </div>
          </section>
        )}

        {/* After */}
        {cs.afterPhotos.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary border-y border-border">
            <div className={WRAP}>
              <PhotoGrid label="Photos" title="After" photos={cs.afterPhotos} onOpen={setLightbox} />
            </div>
          </section>
        )}

        <div className={`${WRAP} py-10`}>
          <Link
            to={`/${caseStudyPath}`}
            className="inline-flex items-center gap-2 font-heading text-[12px] tracking-[0.2em] uppercase text-foreground hover:underline"
          >
            <ArrowLeft size={12} /> All {categoryLabel.toLowerCase()}
          </Link>
        </div>
      </main>

      <SiteFooter
        cta={{
          title: "Is your space in need of a new flooring solution?",
          text: "Whatever your facility, surface, or timeline — we'll come take a look and put together a clear plan built for how your space actually gets used.",
        }}
      />

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          className="lcf fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-[calc(1rem+env(safe-area-inset-top,0px))] z-10 inline-flex h-10 w-10 items-center justify-center border border-background/40 text-background hover:bg-background hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-full object-contain" loading="eager" decoding="async" />
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;
