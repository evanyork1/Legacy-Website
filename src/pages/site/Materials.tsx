import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Seo } from "@/components/seo/Seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { PageHero } from "@/components/site/sections";
import { HQ_LINE, LayerStack, SubmittalButton } from "@/components/site/catalog";
import { CATALOG, FAMILIES, catalogHref, type Family } from "@/data/site/catalog";
import imgHero from "@/assets/industries/manufacturing-2.jpg";

const SITE_URL = "https://legacyindustrialcoatings.com";

/**
 * Systems Library — one card per system in src/data/site/catalog.ts, filtered
 * by family. Every card deep-links to its anchor on the system page. No
 * outbound manufacturer links.
 */
const Materials = () => {
  const [family, setFamily] = useState<Family | "All">("All");
  const filtered = useMemo(() => CATALOG.filter((s) => family === "All" || s.family === family), [family]);
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Systems Library", url: "/materials" },
  ];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Legacy Industrial Coatings Systems Library",
    numberOfItems: CATALOG.length,
    itemListElement: CATALOG.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.maker} ${s.name}`,
      url: `${SITE_URL}${catalogHref(s)}`,
    })),
  };

  return (
    <div className="lcf min-h-screen bg-background">
      <Seo
        title="Flooring Materials Library | Legacy Industrial Coatings"
        description="Every Neogard and Sherwin-Williams system we install — chemistry, nominal thickness, coat-by-coat build-up and published properties. Headquartered in Dallas-Fort Worth, working nationwide."
        path="/materials"
        ogImage={imgHero}
      />
      <StructuredData breadcrumbs={crumbs} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>
      <SiteHeader />

      <PageHero
        eyebrow="Materials"
        title="Systems Library"
        subhead="Every system we install, named, with its chemistry, nominal thickness, coat-by-coat build-up and published properties. Built on Neogard (a Hempel company), with Sherwin-Williams where noted."
        image={imgHero}
        imageAlt="Resinous flooring systems in a manufacturing facility"
        crumbs={crumbs}
        compact
      />

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <p className="text-foreground text-[15px] mb-8">{HQ_LINE}</p>
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter systems by family">
            {(["All", ...FAMILIES] as const).map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={family === f}
                onClick={() => setFamily(f)}
                className={`border px-4 py-2 font-heading text-[11px] tracking-[0.15em] uppercase transition-colors ${
                  family === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="text-[13px] text-muted-foreground mb-4">{filtered.length} systems</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:border [&>*]:border-border">
            {filtered.map((s) => (
              <article key={`${s.page}-${s.id}`} className="bg-background p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.maker} · {s.family}</p>
                    <h2 className="font-heading font-bold text-[18px] text-foreground mt-1">{s.name}</h2>
                  </div>
                  {s.layers && <LayerStack layers={s.layers} compact />}
                </div>
                <dl className="space-y-2 text-[13px] mb-4">
                  <div><dt className="inline font-semibold text-foreground">Chemistry: </dt><dd className="inline text-muted-foreground">{s.chemistry}</dd></div>
                  {s.thickness && <div><dt className="inline font-semibold text-foreground">Nominal thickness: </dt><dd className="inline text-muted-foreground">{s.thickness}</dd></div>}
                  {s.bestFor && <div><dt className="inline font-semibold text-foreground">Best for: </dt><dd className="inline text-muted-foreground">{s.bestFor}</dd></div>}
                </dl>
                <div className="mt-auto flex flex-col gap-3">
                  <a href={catalogHref(s)} className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline">
                    View system <ArrowRight size={12} />
                  </a>
                  <SubmittalButton systemName={`${s.maker} ${s.name}`} className="!px-4 !py-3 !text-[10px] !tracking-[0.12em]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        cta={{
          title: "Not sure which system fits?",
          text: "Upload your drawings or request an estimate — we'll recommend a system and send the submittal package to back it.",
        }}
      />
    </div>
  );
};

export default Materials;
