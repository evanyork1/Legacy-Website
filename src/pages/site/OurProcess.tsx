import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/sections";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { PROCESS_STEPS } from "@/data/site/nav";

export default function OurProcess() {
  return (
    <div className="lcf min-h-screen bg-background text-foreground">
      <Seo
        title="Our Process | Legacy Industrial Coatings"
        description="Site walk in 1–3 business days, a full bid within 24 hours of receiving plans, and documented installation through closeout."
        path="/our-process"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Process", url: "/our-process" },
        ]}
      />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Clear scope. Committed schedule."
          title="Our Process"
          subhead="From the first site walk to the final punch walk, know what happens next—and what you receive at every step."
          compact
        />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="mb-10 text-2xl font-bold md:text-3xl">
            Five steps. One accountable flooring partner.
          </h2>
          <ol className="grid gap-0 md:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="relative min-w-0 border-l-2 border-blue-200 pb-10 pl-8 last:pb-0 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pr-6 md:pt-10"
              >
                <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center bg-foreground font-bold text-background md:-top-5 md:left-0">
                  <span className="sr-only">Step </span>
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter cta={{ title: "Get a bid on your project", text: "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans." }} />
    </div>
  );
}
