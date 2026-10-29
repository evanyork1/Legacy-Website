import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { BTN, Eyebrow, PageHero } from "@/components/site/sections";
import Seo from "@/components/seo/Seo";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { CAREER_MARKETS, TOTAL_SEATS } from "@/data/careersMarkets";
import { JOB } from "@/data/site/jobPhotos";

const H2 = "font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-8 text-balance";

const Careers = () => {
  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Commercial Flooring Sales Careers | Legacy Industrial Coatings"
        description="Nine commission-only commercial flooring sales seats across eight markets. $2,000 to $50,000 per deal, no cap, no split territories. Experienced reps only."
        path="/careers"
      />
      <PageBreadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ]}
      />
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Careers"
          title={`${TOTAL_SEATS} commercial sales seats. Eight markets.`}
          subhead="We install industrial floor systems for warehouses, distribution centers, food plants, and manufacturing facilities. The install side is solved. We're building the sales side, one market at a time, and we're only talking to people who have already done this work."
          image={JOB.crewWarehouse.src}
          imageAlt={JOB.crewWarehouse.alt}
          compact
          action={
            <a
              href="#open-roles"
              className={`${BTN} bg-background text-foreground border border-background hover:bg-transparent hover:text-background`}
            >
              See open roles
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          }
        />

        <section className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10">
            <p className="font-heading text-[17px] md:text-xl font-semibold text-foreground leading-snug">
              Commission only. $2,000 to $50,000 per deal. No cap, no split territories.
            </p>
          </div>
        </section>

        <section id="open-roles" className="py-16 md:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow>Hiring</Eyebrow>
            <h2 className={H2}>Open roles</h2>
            <ul className="divide-y divide-border border-y border-border">
              {CAREER_MARKETS.map((m) => (
                <li key={m.slug}>
                  <Link
                    to={`/careers/${m.slug}`}
                    className="group flex items-center justify-between gap-4 py-5 md:py-6 px-2 -mx-2 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-baseline gap-x-4 gap-y-2 flex-wrap min-w-0">
                      <span className="font-heading text-[17px] md:text-[19px] font-semibold text-foreground">
                        Outside Sales Representative
                      </span>
                      <span className="text-muted-foreground text-[15px]">
                        {m.city}, {m.stateAbbr}
                      </span>
                      <span className="font-heading text-[11px] tracking-[0.2em] uppercase text-foreground border border-border px-2 py-1">
                        {m.seats} {m.seats === 1 ? "seat" : "seats"}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-foreground shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <Eyebrow light>Before you apply</Eyebrow>
            <p className="font-body text-[17px] md:text-lg leading-[1.85] text-background/80">
              This is commission only and it's an experience job. If you haven't
              sold commercial finish-out and you haven't worked commission-only
              before, this isn't going to work for either of us. We're not going
              to be the ones who teach you this trade.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter requestInfo={false} />
    </div>
  );
};

export default Careers;
