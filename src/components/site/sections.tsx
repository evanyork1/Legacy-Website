import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, Star } from "lucide-react";
import { openCalBooking } from "@/lib/calBooking";
import { scrollToRequestInfo } from "@/lib/requestInfo";
import { CLIENT_LOGOS } from "@/data/site/clientLogos";
import {
  BUSINESS,
  CLIENTS_NOTE,
  COMMERCIAL_REVIEWS,
  PROCESS_STEPS,
} from "@/data/site/nav";

/*
 * Shared section patterns — mirror legacycommercialfloors.com:
 * square letter-spaced buttons, small tracked eyebrows, Space Grotesk
 * headings, hairline (gap-px) card grids, navy closing bands.
 */

export const BTN =
  "group inline-flex items-center justify-center gap-3 px-7 py-3 md:px-8 md:py-4 font-heading text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase transition-all duration-500";

export const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p
    className={`font-heading text-[12px] font-medium tracking-[0.3em] uppercase mb-4 ${
      light ? "text-background/70" : "text-muted-foreground"
    }`}
  >
    {children}
  </p>
);

export const SectionHeading = ({
  eyebrow,
  title,
  text,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: "h1" | "h2";
}) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1] text-balance">
        {title}
      </Tag>
    </div>
    {text && <p className="text-muted-foreground font-body text-[15px] max-w-md leading-relaxed">{text}</p>}
  </div>
);

/* ------------------------------------------------------------------ */
/* Primary CTAs: Book a Site Walk (Cal.com) / Request a Bid (form)     */
/* ------------------------------------------------------------------ */

export const SiteWalkButton = ({
  label = "Request an Estimate",
  className = "",
  light = false,
}: {
  label?: string;
  className?: string;
  light?: boolean;
}) => (
  <button
    type="button"
    onClick={openCalBooking}
    className={`${BTN} ${
      light
        ? "bg-background text-foreground border border-background hover:bg-transparent hover:text-background"
        : "bg-foreground text-background border border-foreground hover:bg-foreground/90"
    } ${className}`}
  >
    {label}
    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
  </button>
);

export const RequestBidButton = ({
  label = "Request a Bid",
  className = "",
  dark = false,
}: {
  label?: string;
  className?: string;
  dark?: boolean;
}) => (
  <a
    href="#request-info"
    onClick={scrollToRequestInfo}
    className={`${BTN} border ${
      dark
        ? "border-background/30 text-background hover:bg-background hover:text-foreground"
        : "border-foreground text-foreground hover:bg-foreground hover:text-background"
    } ${className}`}
  >
    {label}
  </a>
);

export const PhoneLink = ({ dark = false }: { dark?: boolean }) => (
  <a
    href={BUSINESS.phoneHref}
    className={`${BTN} border ${
      dark
        ? "border-background/30 text-background hover:bg-background hover:text-foreground"
        : "border-foreground text-foreground hover:bg-foreground hover:text-background"
    }`}
  >
    {BUSINESS.phoneDisplay}
  </a>
);

/** Phone + Book a Site Walk pair shown between homepage sections. */
export const InlineBookCTA = () => (
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <a
        href={BUSINESS.phoneHref}
        className="inline-flex items-center justify-center gap-3 border border-foreground text-foreground px-7 py-3 font-heading text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
      >
        {BUSINESS.phoneDisplay}
      </a>
      <button
        type="button"
        onClick={openCalBooking}
        className="group inline-flex items-center justify-center gap-3 bg-foreground text-background border border-foreground px-7 py-3 font-heading text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-all duration-500"
      >
        Request an Estimate
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

export const StarRating = ({ light = true }: { light?: boolean }) => (
  <div className="inline-flex items-center gap-3" role="img" aria-label="Rated 5.0 out of 5 stars from 201+ Google reviews">
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
    <span
      className={`font-heading text-[12px] tracking-[0.15em] uppercase ${
        light ? "text-background/80" : "text-muted-foreground"
      }`}
    >
      {BUSINESS.reviews}
    </span>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page hero: full-bleed photo, eyebrow, H1, subhead, two CTAs         */
/* ------------------------------------------------------------------ */

export const PageHero = ({
  eyebrow,
  title,
  subhead,
  image,
  imageAlt,
  rating = false,
  compact = false,
  crumbs,
  meta,
}: {
  eyebrow: string;
  title: string;
  subhead?: string;
  image?: string;
  imageAlt?: string;
  rating?: boolean;
  compact?: boolean;
  crumbs?: { name: string; url: string }[];
  meta?: string;
}) => (
  <section
    className={`lcf relative flex items-end bg-foreground ${
      compact ? "min-h-[460px] md:min-h-[560px]" : "min-h-[520px] md:min-h-[70vh]"
    } pb-14 md:pb-20 pt-24`}
  >
    {image && (
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt || ""}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>
    )}
    <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-background/60">
            {crumbs.map((c, i) => (
              <li key={c.url} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="text-background/90">{c.name}</span>
                ) : (
                  <a href={c.url} className="hover:text-background transition-colors">{c.name}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-[1.05] mb-6 max-w-4xl text-balance">
        {title}
      </h1>
      {meta && (
        <p className="-mt-2 mb-6 font-heading text-[11px] tracking-[0.15em] uppercase text-background/60">{meta}</p>
      )}
      {rating && (
        <div className="mb-6">
          <StarRating />
        </div>
      )}
      {subhead && (
        <p className="text-background/70 text-base md:text-lg font-body max-w-2xl leading-relaxed">{subhead}</p>
      )}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
        <SiteWalkButton light />
        <RequestBidButton dark />
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Proof bar with count-up numbers                                     */
/* ------------------------------------------------------------------ */

const CountUp = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

export const ProofBar = () => (
  <section className="lcf bg-background border-b border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
        {[
          { v: <>$<CountUp to={5} />M</>, l: "Bonding Capacity" },
          { v: <CountUp to={201} suffix="+" />, l: "Five-Star Reviews" },
          { v: <><CountUp to={24} /> hrs</>, l: "Bid After Plans" },
          { v: "1–3 days", l: "Site Walk" },
          { v: "10K–1M SF", l: "Project Range" },
        ].map((s, i) => (
          <div key={s.l} className={`bg-background py-8 px-4 text-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
            <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.v}</div>
            <div className="font-heading text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Client wordmark strip                                               */
/* ------------------------------------------------------------------ */

export const ClientStrip = ({ light = false }: { light?: boolean }) => (
  <section className={`lcf py-12 md:py-16 ${light ? "bg-background" : "bg-secondary border-y border-border"}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <Eyebrow>Trusted By</Eyebrow>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-x-8 gap-y-8 mt-6">
        {CLIENT_LOGOS.map((c) => (
          <div key={c.name} className="flex items-center justify-center h-20">
            <img src={c.src} alt={c.name} width={c.width} height={c.height} loading="lazy" decoding="async" className="max-w-full w-auto h-auto max-h-16 object-contain" />
          </div>
        ))}
      </div>
      <p className="text-[13px] text-muted-foreground mt-6">{CLIENTS_NOTE}</p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Testimonials — verbatim Google reviews, commercial-safe only        */
/* ------------------------------------------------------------------ */

export const CommercialTestimonials = () => (
  <section className="lcf py-24 md:py-32 bg-secondary border-t border-border" id="testimonials">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="text-center mb-12 md:mb-16">
        <Eyebrow>Reviews</Eyebrow>
        <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1]">What Our Clients Say</h2>
        <p className="text-muted-foreground text-[15px] mt-4">{BUSINESS.reviews}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {COMMERCIAL_REVIEWS.map((r) => (
          <figure key={r.name} className="bg-background border border-border p-8 flex flex-col text-center w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
            <div className="flex justify-center gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="text-[14px] text-muted-foreground leading-[1.8] flex-1">"{r.text}"</blockquote>
            <figcaption className="mt-6 pt-4 border-t border-border flex flex-col items-center justify-center gap-2">
              <span className="font-heading text-[14px] font-semibold text-foreground">{r.name}</span>
              <span className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Google</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Process preview + 50% deposit callout                               */
/* ------------------------------------------------------------------ */

export const ProcessPreview = () => (
  <section className="lcf py-24 md:py-32 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <SectionHeading
        eyebrow="How We Work"
        title="A Five-Step Process for Operating Facilities"
        text="From site walk to closeout package — one point of contact the whole way."
      />
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
        {PROCESS_STEPS.map((step, i) => (
          <li key={step.title} className="bg-background p-8">
            <div className="font-heading text-3xl font-bold text-foreground/15 mb-6">0{i + 1}</div>
            <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-[13px] text-muted-foreground leading-[1.7]">{step.text}</p>
          </li>
        ))}
      </ol>
      <a
        href="/our-process"
        className="inline-flex items-center gap-2 mt-10 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline"
      >
        See the full process <ArrowRight size={12} />
      </a>
    </div>
  </section>
);

export const DepositCallout = () => (
  <section className="lcf py-16 md:py-20 bg-background">
    <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="border border-border p-8 md:p-12">
        <Eyebrow>Deposits</Eyebrow>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-4">
          Why we require a 50% deposit — on every project
        </h2>
        <p className="text-muted-foreground text-[15px] leading-[1.8] mb-6">
          It purchases and locks your materials, reserves a dedicated crew on your dates, and keeps the job
          from stalling while invoices age — so we start on time and finish on time.
        </p>
        <a
          href="/our-process#deposits"
          className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline"
        >
          Read the full explanation <ArrowRight size={12} />
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* FAQ block (pair with StructuredData faqs for FAQPage schema)        */
/* ------------------------------------------------------------------ */

export const FaqBlock = ({
  heading,
  faqs,
  bg = true,
}: {
  heading: string;
  faqs: { q: string; a: string }[];
  bg?: boolean;
}) => (
  <section className={`lcf py-24 md:py-32 border-t border-border ${bg ? "bg-background" : "bg-background"}`}>
    <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold text-foreground leading-[1.1] mb-12 text-balance">
        {heading}
      </h2>
      <div className="divide-y divide-border border-t border-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-8">
            <h3 className="font-heading font-semibold text-[18px] md:text-[20px] text-foreground mb-3 leading-snug">
              {f.q}
            </h3>
            <p className="text-muted-foreground font-body text-[15px] leading-[1.8]">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Closing CTA band                                                    */
/* ------------------------------------------------------------------ */

export const CtaBand = ({
  title = "Get a bid on your project",
  text = "Send drawings or a scope and we'll return a system recommendation and budget number within 24 hours of receiving plans.",
}: {
  title?: string;
  text?: string;
}) => (
  <section className="lcf py-24 md:py-32 bg-foreground text-background">
    <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
      <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.15] mb-6 text-balance text-background">{title}</h2>
      <p className="text-background/60 font-body text-[16px] leading-[1.8] mb-10 max-w-2xl mx-auto">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <SiteWalkButton light />
        <RequestBidButton dark />
      </div>
      <a
        href={BUSINESS.phoneHref}
        className="inline-block mt-8 font-heading text-[12px] tracking-[0.2em] uppercase text-background/70 hover:text-background"
      >
        {BUSINESS.phoneDisplay}
      </a>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Breadcrumbs (visual; pair with StructuredData breadcrumbs)          */
/* ------------------------------------------------------------------ */

export const Breadcrumbs = ({ items }: { items: { name: string; url: string }[] }) => (
  <nav aria-label="Breadcrumb" className="lcf bg-background border-b border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-3">
      <ol className="flex flex-wrap items-center gap-2 font-heading text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className="text-foreground">{item.name}</span>
            ) : (
              <a href={item.url} className="hover:text-foreground transition-colors">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

/* ------------------------------------------------------------------ */
/* Spec table for system build-ups                                     */
/* ------------------------------------------------------------------ */

export type SpecLayer = {
  layer: string;
  product?: string;
  coverage?: string;
  dft?: string;
};

export const SpecTable = ({
  title,
  layers,
  total,
  note,
}: {
  title: string;
  layers: SpecLayer[];
  total?: string;
  note?: string;
}) => (
  <div className="border border-border bg-background min-w-0 max-w-full">
    <div className="px-6 py-4 border-b border-border">
      <h3 className="font-heading font-semibold text-[13px] uppercase tracking-[0.15em] text-foreground">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-border bg-secondary">
            <th className="px-6 py-3 font-medium">Layer</th>
            <th className="px-6 py-3 font-medium">Product</th>
            <th className="px-6 py-3 font-medium">Coverage</th>
            <th className="px-6 py-3 font-medium">Dry mils</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((l, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              <td className="px-6 py-3 text-foreground font-medium">{l.layer}</td>
              <td className="px-6 py-3 text-muted-foreground">{l.product ?? "—"}</td>
              <td className="px-6 py-3 text-muted-foreground">{l.coverage ?? "—"}</td>
              <td className="px-6 py-3 text-muted-foreground">{l.dft ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {total && (
      <div className="px-6 py-3 border-t border-border text-[13px]">
        <span className="font-semibold text-foreground">Total system thickness: </span>
        <span className="text-muted-foreground">{total}</span>
      </div>
    )}
    <div className="px-6 py-3 border-t border-border text-[12px] text-muted-foreground">
      {note ?? "Values per the manufacturer's published application data. Final build-up is confirmed on your submittal."}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Featured commercial case studies + capability packet band           */
/* ------------------------------------------------------------------ */

export const CAPABILITY_PACKET_PDF = "/legacy-capability-packet.pdf";

export const FeaturedCaseStudies = ({ limit = 3 }: { limit?: number }) => {
  const items = caseStudies.filter((c) => c.category === "commercial").slice(0, limit);
  return (
    <section className="lcf py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Case Studies"
          title="Recent Commercial Projects"
          text="The problem, the system we chose and how it turned out — documented with job photos."
        />
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((c) => (
            <a key={c.slug} href={`/case-studies/${c.slug}`} className="group bg-background flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.heroImage}
                  alt={c.heroAlt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">{c.tag}</p>
                <h3 className="font-heading font-semibold text-[16px] text-foreground leading-snug mb-4 group-hover:underline">
                  {c.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground">
                  Read the case study <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
        <a
          href="/case-studies"
          className="inline-flex items-center gap-2 mt-10 font-heading text-[11px] tracking-[0.2em] uppercase text-foreground hover:underline"
        >
          All case studies <ArrowRight size={12} />
        </a>
      </div>
    </section>
  );
};

export const CapabilityPacketBand = () => (
  <section className="lcf py-20 md:py-24 bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="max-w-2xl">
        <Eyebrow>For Prequalification</Eyebrow>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.15] mb-4">
          Our capability packet, ready for your vendor file
        </h2>
        <p className="text-muted-foreground text-[15px] leading-[1.8]">
          Bonding, insurance, systems, equipment, safety and project references in one document.
        </p>
      </div>
      <a
        href={CAPABILITY_PACKET_PDF}
        target="_blank"
        rel="noopener noreferrer"
        className={`${BTN} bg-foreground text-background border border-foreground hover:bg-foreground/90 shrink-0`}
      >
        Download the Capability Packet
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </section>
);
