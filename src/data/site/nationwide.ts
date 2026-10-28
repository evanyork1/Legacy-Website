/**
 * National positioning for industry and system pages: DFW is where we're
 * headquartered, not the limit of where we work. Applied once to the page
 * data arrays so templates, nav and schema all read the same strings.
 */

export const NATIONWIDE_META_SUFFIX = "Headquartered in Dallas-Fort Worth, working nationwide.";

/** Titles kept exactly as they are (established rankings). */
export const PROTECTED_TITLES = new Set([
  "/industrial-epoxy",
  "/concrete-polishing",
  "/concrete-sealing",
  "/flake-floors",
  "/warehouse-flooring",
  // Item 6 of the Oct 2026 pass: rebuilt page keeps its exact title/meta.
  "/commercial-floor-maintenance",
]);

/** Pages whose meta description is kept exactly (rebuilt legacy pages). */
export const PROTECTED_META = new Set([
  "/industrial-epoxy",
  "/concrete-polishing",
  "/concrete-sealing",
  "/commercial-floor-maintenance",
]);

const tidy = (s: string) =>
  s
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\(\s*\)/g, "")
    .trim();

/** Remove DFW / city qualifiers from a heading. */
export const stripPlace = (s: string) =>
  tidy(
    s
      .replace(/\s*(?:in|across|for|throughout)\s+(?:the\s+)?(?:Dallas[-–]Fort Worth|DFW)(?:\s+Metroplex)?\b/gi, "")
      .replace(/\bDallas[-–]Fort Worth\b\s*/g, "")
      .replace(/\bDFW\s+/g, "")
      .replace(/\s+DFW\b/g, ""),
  );

/** "[Topic] | DFW & Nationwide | Legacy Industrial Coatings" */
export const nationalTitle = (metaTitle: string) => {
  const topic = stripPlace(metaTitle.split("|")[0].replace(/\s+[-–—]\s+Legacy.*$/, ""));
  return `${topic} | DFW & Nationwide | Legacy Industrial Coatings`;
};

export const nationalMeta = (meta: string) => {
  let base = tidy(
    meta
      .replace(/\s*(?:across|throughout|in)\s+(?:the\s+)?(?:Dallas[-–]Fort Worth|DFW)(?:\s+Metroplex)?(?:\s+area)?/gi, "")
      .replace(/\bfor DFW\b/g, "for")
      .replace(/\bDFW\s+/g, "")
      .replace(/\bDallas[-–]Fort Worth\s+/g, ""),
  );
  if (!/[.!?]$/.test(base)) base += ".";
  if ((base + " " + NATIONWIDE_META_SUFFIX).length > 170) {
    const first = base.match(/^.*?[.!?](\s|$)/)?.[0]?.trim();
    if (first) base = first;
  }
  return `${base} ${NATIONWIDE_META_SUFFIX}`;
};

/** Body copy: national wording, keeping DFW project names and market facts. */
export const nationalBody = (s: string) =>
  tidy(
    s
      .replace(/\bacross (?:the )?(?:DFW|Dallas[-–]Fort Worth)(?: Metroplex)?(?: and beyond)?/g, "for owners, GCs and facility teams nationwide")
      .replace(/\bthroughout (?:the )?(?:DFW|Dallas[-–]Fort Worth)(?: Metroplex)?/g, "nationwide")
      .replace(/\bfor DFW facilities\b/g, "for facilities nationwide")
      .replace(/\b(?:DFW|Dallas[-–]Fort Worth) (owners|GCs|facility teams|facilities|operators|properties|buildings|clients)\b/g, "$1 nationwide")
      .replace(/\bin (?:the )?(?:DFW|Dallas[-–]Fort Worth)(?: Metroplex| area)?(?=[\s.,;)])/g, "")
      .replace(/\b(a|an|the|our|in|for|of|at) DFW (?=[a-z])/g, "$1 "),
  );

type Page = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
};

const walk = (v: unknown, skip: Set<string>): unknown => {
  if (typeof v === "string") return nationalBody(v);
  if (Array.isArray(v)) return v.map((x) => walk(x, skip));
  if (v && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(v)) out[k] = skip.has(k) ? val : walk(val, skip);
    return out;
  }
  return v;
};

const SKIP = new Set(["path", "slug", "src", "link", "url", "metaTitle", "metaDescription", "h1", "heroImage", "caseStudySlug"]);

/** Mutates the array in place so every importer sees national copy. */
export function nationalize<T extends Page>(pages: T[]) {
  pages.forEach((p, i) => {
    const next = walk(p, SKIP) as T;
    next.h1 = stripPlace(p.h1);
    if (!PROTECTED_TITLES.has(p.path)) next.metaTitle = nationalTitle(p.metaTitle);
    if (!PROTECTED_META.has(p.path)) next.metaDescription = nationalMeta(p.metaDescription);
    pages[i] = next;
  });
}
