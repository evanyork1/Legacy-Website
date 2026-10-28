import { ArrowRight, Star } from "lucide-react";
import { BUSINESS, CLIENTS } from "@/data/site/nav";

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
