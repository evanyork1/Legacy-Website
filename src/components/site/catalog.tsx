import { ArrowRight, Star } from "lucide-react";
import { BTN, Eyebrow } from "@/components/site/sections";
import { openRequestInfoWith, submittalPrefill } from "@/lib/requestInfo";
import { CATALOG_NOTE, type CatalogSystem } from "@/data/site/catalog";
import { BUSINESS, CLIENTS } from "@/data/site/nav";

/** Replaces every manufacturer data-sheet link: prefills the request form. */
export const SubmittalButton = ({ systemName, className = "" }: { systemName: string; className?: string }) => (
  <a
    href="#request-info"
    onClick={(e) => openRequestInfoWith(submittalPrefill(systemName), e)}
    className={`${BTN} border border-foreground text-foreground hover:bg-foreground hover:text-background ${className}`}
  >
    Request the Submittal Package (PDS, SDS &amp; Guide Spec)
  </a>
);

/** Inline SVG layer stack: one band per coat, top coat at top. */
export const LayerStack = ({ layers, compact = false }: { layers: { coat: string }[]; compact?: boolean }) => {
  const bands = [...layers].reverse();
  const h = compact ? 14 : 22;
  const w = compact ? 120 : 200;
  const height = bands.length * (h + 4) + 14;
  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      width={w}
      height={height}
      role="img"
      aria-label={`Layer stack: ${layers.map((l) => l.coat).join(", ")}`}
      className="text-foreground max-w-full h-auto"
    >
      {bands.map((b, i) => (
        <g key={i}>
          <rect x="0.5" y={i * (h + 4) + 0.5} width={w - 1} height={h} fill="none" stroke="currentColor" strokeWidth="1" opacity={b.coat.startsWith("Optional") ? 0.45 : 1} strokeDasharray={b.coat.startsWith("Optional") ? "3 2" : undefined} />
          {!compact && (
            <text x="8" y={i * (h + 4) + h / 2 + 4} fill="currentColor" style={{ font: "500 10px var(--font-sans, sans-serif)" }}>
              {b.coat.length > 30 ? `${b.coat.slice(0, 29)}…` : b.coat}
            </text>
          )}
        </g>
      ))}
      <rect x="0" y={bands.length * (h + 4)} width={w} height="10" fill="currentColor" opacity="0.15" />
      {!compact && (
        <text x={w / 2} y={bands.length * (h + 4) + 8} textAnchor="middle" fill="currentColor" style={{ font: "500 8px var(--font-sans, sans-serif)" }}>
          CONCRETE
        </text>
      )}
    </svg>
  );
};

const Meta = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <div>
      <dt className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className="text-[14px] text-foreground mt-1">{value}</dd>
    </div>
  ) : null;

/** One anchored system block: name, maker, chemistry, layer table, stack, best for, properties. */
export const SystemBlock = ({ s }: { s: CatalogSystem }) => (
  <article id={s.id} className="scroll-mt-32 border border-border bg-background">
    <header className="px-6 md:px-8 py-5 border-b border-border flex flex-wrap items-baseline justify-between gap-3">
      <div>
        {s.tag && <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{s.tag}</p>}
        <h3 className="font-heading font-bold text-[20px] text-foreground">{s.name}</h3>
      </div>
    </header>
    <div className="px-6 md:px-8 py-6">
      <dl className="grid sm:grid-cols-2 gap-4 mb-6">
        <Meta label="Chemistry" value={s.chemistry} />
        <Meta label="Nominal thickness" value={s.thickness} />
        <Meta label="Return to service" value={s.returnToService} />
      </dl>
      {s.layers && (
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
          <ol className="md:hidden border border-border divide-y divide-border">
            {s.layers.map((l, i) => (
              <li key={i} className="px-4 py-3">
                <p className="font-heading font-semibold text-[13px] text-foreground">{l.coat}</p>
                <p className="text-[13px] text-muted-foreground leading-[1.6] mt-1">{l.product}</p>
                {(l.coverage || l.dft) && (
                  <p className="text-[12px] text-muted-foreground mt-1">
                    {[l.coverage, l.dft ? (/^[\d–-]+$/.test(l.dft) ? `${l.dft} mils DFT` : `DFT ${l.dft}`) : undefined].filter(Boolean).join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ol>
          <div className="hidden md:block overflow-x-auto border border-border">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-left font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-border bg-secondary">
                  <th className="px-4 py-3 font-medium">Coat</th>
                  <th className="px-4 py-3 font-medium">Material</th>
                  <th className="px-4 py-3 font-medium">Coverage</th>
                  <th className="px-4 py-3 font-medium">DFT mils</th>
                </tr>
              </thead>
              <tbody>
                {s.layers.map((l, i) => (
                  <tr key={i} className="border-b border-border last:border-0 align-top">
                    <td className="px-4 py-3 text-foreground font-medium whitespace-nowrap">{l.coat}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.product}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.coverage ?? "—"}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.dft ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hidden sm:block">
            <LayerStack layers={s.layers} />
          </div>
        </div>
      )}
      {s.layers && <p className="text-[12px] text-muted-foreground mt-3">{CATALOG_NOTE}</p>}
      {s.summary && <p className="text-[14px] text-muted-foreground leading-[1.7]">{s.summary}</p>}
      {s.bestFor && (
        <p className="text-[14px] text-foreground leading-[1.7] mt-5">
          <span className="font-semibold">Best for: </span>
          <span className="text-muted-foreground">{s.bestFor}</span>
        </p>
      )}
      {s.properties && s.properties.length > 0 && (
        <div className="mt-5">
          <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Published properties</p>
          <ul className="space-y-1.5">
            {s.properties.map((p) => (
              <li key={p} className="text-[13px] text-muted-foreground leading-[1.6]">{p}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmittalButton systemName={s.name} className="mt-6" />
    </div>
  </article>
);

/** Compact card for systems listed without layer tables. */
export const SystemCard = ({ s }: { s: CatalogSystem }) => (
  <div id={s.id} className="scroll-mt-32 bg-background p-6 flex flex-col">
    <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{s.family}</p>
    <h3 className="font-heading font-semibold text-[15px] text-foreground mb-2">{s.name}</h3>
    {s.summary && <p className="text-[13px] text-muted-foreground leading-[1.6]">{s.summary}</p>}
    {s.thickness && <p className="text-[12px] text-muted-foreground mt-2">{s.thickness}</p>}
  </div>
);

/** Renders every catalog system on a page: tables first, then grouped cards. */
export const CatalogSection = ({ systems, title = "Systems We Install" }: { systems: CatalogSystem[]; title?: string }) => {
  if (systems.length === 0) return null;
  const blocks = systems.filter((s) => s.layers);
  const cards = systems.filter((s) => !s.layers);
  const groups = Array.from(new Set(cards.map((c) => c.group ?? "More systems")));
  return (
    <section className="lcf py-24 md:py-32 bg-secondary" id="systems">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <Eyebrow>Specifications</Eyebrow>
        <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-12 text-balance">{title}</h2>
        <div className="space-y-6">
          {blocks.map((s) => (
            <SystemBlock key={s.id} s={s} />
          ))}
        </div>
        {groups.map((g) => (
          <div key={g} className="mt-12">
            <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-4">{g}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*]:border [&>*]:border-border">
              {cards.filter((c) => (c.group ?? "More systems") === g).map((c) => (
                <SystemCard key={c.id} s={c} />
              ))}
            </div>
          </div>
        ))}
        {cards.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-[13px] text-muted-foreground">
              Build-ups for these systems are confirmed in our submittal.
            </p>
            <SubmittalButton systemName={cards.map((c) => c.name).slice(0, 3).join(", ") + (cards.length > 3 ? " and related systems" : "")} />
          </div>
        )}
      </div>
    </section>
  );
};

/** The one shared trust strip allowed on industry and system pages. */
export const TrustStrip = () => (
  <section className="lcf py-10 border-y border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p className="font-heading text-[12px] uppercase tracking-[0.15em] text-foreground/50">
        {CLIENTS.join(" · ")} · and more
      </p>
      <div className="flex items-center gap-4 shrink-0">
        <span className="inline-flex items-center gap-2 font-heading text-[12px] tracking-[0.15em] uppercase text-muted-foreground">
          <Star size={14} className="fill-amber-400 text-amber-400" strokeWidth={0} />
          5.0 · 201+ Google reviews
        </span>
        <a href="/our-process" className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline">
          See how we work <ArrowRight size={12} />
        </a>
      </div>
    </div>
    <span className="sr-only">{BUSINESS.reviews}</span>
  </section>
);

export const HQ_LINE = "Headquartered in Dallas-Fort Worth; we mobilize crews to projects nationwide.";
