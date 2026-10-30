import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/sections";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesHub = () => {
  const commercial = caseStudies.find((c) => c.category === "commercial");
  const residential = caseStudies.find((c) => c.category === "residential");
  const hero = caseStudies[0];

  const canonical = "https://legacyindustrialcoatings.com/case-studies";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://legacyindustrialcoatings.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: canonical },
    ],
  };
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
  ];

  const cards = [
    {
      key: "commercial",
      label: "Commercial",
      title: "Commercial Case Studies",
      description:
        "Restaurants, manufacturing plants, kennels, swim schools, and back-of-house spaces — real projects with real before, during, and after photos.",
      image: commercial?.heroImage,
      imageAlt: commercial?.heroAlt ?? "Commercial Case Studies",
      path: "/commercial-case-studies",
    },
    {
      key: "residential",
      label: "Residential",
      title: "Residential Case Studies",
      description:
        "High-end garages, patios, and home flooring projects — including tear-outs of failed cheap installs and full rebuilds done the right way.",
      image: residential?.heroImage,
      imageAlt: residential?.heroAlt ?? "Residential Case Studies",
      path: "/residential-case-studies",
    },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>Flooring Case Studies | Legacy Industrial Coatings</title>
        <meta
          name="description"
          content="Explore real commercial and residential concrete floor case studies from Legacy Industrial Coatings — before, during, and after photos from projects across DFW."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Projects"
          title="Case Studies"
          subhead="View a few of our featured projects from commercial or residential spaces."
          image={hero?.heroImage}
          imageAlt={hero?.heroAlt}
          crumbs={crumbs}
        />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {cards.map((card) => (
                <Link
                  key={card.key}
                  to={card.path}
                  className="group flex flex-col border border-border bg-background hover:border-foreground transition-colors min-w-0"
                >
                  <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-muted">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        loading="eager"
                        decoding="async"
                        width={1000}
                        height={800}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">{card.label}</p>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-4 group-hover:underline">
                      {card.title}
                    </h2>
                    <p className="text-muted-foreground text-[16px] leading-[1.85] mb-6">{card.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 font-heading text-[12px] tracking-[0.2em] uppercase text-foreground">
                      View {card.key} case studies
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        cta={{
          title: "Have a project like these?",
          text: "Tell us about your space and we'll put together a clear scope, timeline, and number — no pressure.",
        }}
      />
    </div>
  );
};

export default CaseStudiesHub;
