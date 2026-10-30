import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/sections";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";

interface CaseStudiesProps {
  category: "commercial" | "residential";
}

const CaseStudies = ({ category }: CaseStudiesProps) => {
  const isCommercial = category === "commercial";
  const basePath = isCommercial ? "/commercial-case-studies" : "/residential-case-studies";
  const heading = isCommercial ? "Real Commercial Floor Projects" : "Real Residential Floor Projects";
  const eyebrow = isCommercial ? "Commercial Case Studies" : "Residential Case Studies";
  const title = isCommercial
    ? "Commercial Flooring Case Studies | Legacy Industrial Coatings"
    : "Garage & Patio Floor Case Studies | Legacy Industrial Coatings";
  const description = isCommercial
    ? "Real commercial flooring case studies: epoxy, polished concrete and coatings in warehouses, plants, schools and restaurants, with before and after photos."
    : "Real residential garage floor and patio coating case studies from Legacy Industrial Coatings. See before-and-after results from homeowners across DFW.";
  const subhead = isCommercial
    ? "A look at the actual restaurants, breweries, kitchens, and warehouses we've protected — with the before, during, and after photos to back it up."
    : "A look at the actual garages, patios, and homes we've coated — with the before, during, and after photos to back it up.";
  const canonical = `https://legacyindustrialcoatings.com${basePath}`;

  const studies = getCaseStudiesByCategory(category);
  const hero = studies[0] ?? caseStudies[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://legacyindustrialcoatings.com/" },
      { "@type": "ListItem", position: 2, name: isCommercial ? "Commercial" : "Residential", item: `https://legacyindustrialcoatings.com/${isCommercial ? "commercial" : "residential"}` },
      { "@type": "ListItem", position: 3, name: "Case Studies", item: canonical },
    ],
  };
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: eyebrow, url: basePath },
  ];

  return (
    <div className="lcf min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Projects"
          title={heading}
          subhead={subhead}
          image={hero?.heroImage}
          imageAlt={hero?.heroAlt}
          crumbs={crumbs}
        />

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            {studies.length === 0 ? (
              <p className="text-muted-foreground text-[16px] leading-[1.85] py-8">New case studies coming soon.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {studies.map((cs) => (
                  <Link
                    key={cs.slug}
                    to={`${basePath}/${cs.slug}`}
                    className="group flex flex-col border border-border bg-background hover:border-foreground transition-colors min-w-0"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={cs.heroImage}
                        alt={cs.heroAlt}
                        loading="eager"
                        decoding="async"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                        {cs.tag} · {cs.location}
                      </p>
                      <h2 className="font-heading font-semibold text-[17px] leading-[1.35] text-foreground mb-3 group-hover:underline">
                        {cs.title}
                      </h2>
                      <p className="text-[14px] text-muted-foreground leading-[1.7] mb-4">{cs.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground">
                        Read case study <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
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

export default CaseStudies;
