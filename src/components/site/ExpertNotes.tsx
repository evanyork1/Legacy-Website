import { Check, X } from "lucide-react";
import { Eyebrow } from "@/components/site/sections";
import type { ExpertNotes } from "@/data/site/expert/types";

/**
 * Expert notes block for system and industry pages: plain-English guidance
 * for owners, spec checkpoints for GCs/architects, and common mistakes.
 */
const ExpertNotesBlock = ({ notes }: { notes?: ExpertNotes }) => {
  if (!notes) return null;
  return (
    <section className="lcf py-20 md:py-28 bg-secondary border-t border-border" id="expert-notes">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <Eyebrow>Expert Notes</Eyebrow>
        <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-10 text-balance">
          {notes.heading}
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-5">In plain English</h3>
            <ul className="space-y-4">
              {notes.plain.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-[1.75]">
                  <Check size={16} className="text-foreground/60 mt-1.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-5">
              For GCs, architects &amp; facility managers
            </h3>
            <dl className="border border-border bg-background divide-y divide-border">
              {notes.spec.map((s) => (
                <div key={s.label} className="px-5 py-4 sm:grid sm:grid-cols-[150px_1fr] sm:gap-4">
                  <dt className="font-heading text-[11px] uppercase tracking-[0.15em] text-foreground mb-1 sm:mb-0 sm:pt-0.5">{s.label}</dt>
                  <dd className="text-[14px] text-muted-foreground leading-[1.65]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-5">Common mistakes we fix</h3>
          <ul className="grid md:grid-cols-3 gap-4">
            {notes.mistakes.map((m) => (
              <li key={m} className="flex items-start gap-3 border border-border bg-background p-5 text-[14px] text-muted-foreground leading-[1.65]">
                <X size={16} className="text-foreground/50 mt-0.5 flex-shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExpertNotesBlock;
