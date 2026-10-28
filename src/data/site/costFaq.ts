/**
 * Answer-first cost FAQ appended to every system and industry page.
 * Never states per-square-foot prices — only what drives cost.
 */
export const costFaq = (subject: string) => ({
  q: `How much does ${subject} cost?`,
  // TODO Evan: add typical $/SF range
  a: `Cost depends on surface preparation, moisture testing and any mitigation, system thickness, total square footage and how the work is phased around your operations. Send plans or request a site walk and we will return a firm bid within 24 hours of receiving plans.`,
});

export const withCostFaq = (subject: string, faqs: { q: string; a: string }[]) =>
  faqs.some((f) => /cost/i.test(f.q)) ? faqs : [...faqs, costFaq(subject)];

export const REVIEWED_LINE = "Updated October 2026 · Reviewed by Legacy Industrial Coatings project management";
