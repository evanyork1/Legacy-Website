import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { BUSINESS, COMMERCIAL_REVIEWS } from "@/data/site/nav";

export default function Reviews() {
  return (
    <div className="lcf min-h-screen bg-background text-foreground">
      <Seo
        title="Reviews | Legacy Industrial Coatings"
        description="Read commercial customer reviews of Legacy Industrial Coatings. Rated 5.0/5 across 201+ Google reviews for flooring projects across DFW."
        path="/reviews"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ]}
      />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Customer feedback"
          title="Reviews"
          subhead="Hear directly from the people who have worked with Legacy Industrial Coatings."
          compact
        />
        <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <header className="mb-10 border-b border-slate-200 pb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Google reviews
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">5.0/5</h2>
            <p className="mt-3 text-lg text-slate-600">Across 201+ Google reviews</p>
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-muted-foreground underline"
            >
              Read reviews on our Google profile
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {COMMERCIAL_REVIEWS.map((review) => (
              <figure key={review.name} className="min-w-0 border border-slate-200 bg-secondary p-6 md:p-8">
                <span className="mb-6 inline-block border border-slate-300 bg-background px-3 py-2 text-xs font-semibold uppercase tracking-wide">
                  Google review
                </span>
                <blockquote className="break-words text-lg leading-relaxed">
                  {review.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4 font-semibold">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate-600">
            This page highlights commercial customer feedback. Residential
            reviews are on our{" "}
            <a href="/garagefloors" className="font-semibold text-muted-foreground underline">
              residential flooring pages
            </a>.
          </p>
        </section>
      </main>
      <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
    </div>
  );
}
