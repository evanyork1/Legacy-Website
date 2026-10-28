/**
 * Short, simple page content. Pages are a taste, not a data sheet: the
 * details are handled in the site walk and the bid.
 */
export type SimpleContent = {
  /** 1–2 sentences under the H1 (max ~40 words). */
  intro: string;
  /** H2 for the overview, keyword-first (e.g. "Industrial Epoxy Flooring That Holds Up"). */
  overviewTitle: string;
  /** 2 short paragraphs, plain English (max ~140 words total). */
  overview: string[];
  /** H2 for the features grid (e.g. "What We Install", "Why Facilities Choose It"). */
  featuresTitle: string;
  /** 4–6 items: short title + one sentence (max ~25 words). */
  features: { title: string; text: string }[];
  /** 4–5 FAQs, plain answers of 30–70 words. Include one cost FAQ with no prices. */
  faqs: { q: string; a: string }[];
};
