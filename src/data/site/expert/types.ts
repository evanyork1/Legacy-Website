/**
 * "Expert notes" shown on every system and industry page: plain-English
 * guidance for owners plus spec-level checkpoints for GCs, architects and
 * facility managers. Standards are cited by name only; never invent a
 * number, price or test value that the page data doesn't already publish.
 */
export type ExpertNotes = {
  /** H2 for the block, keyword-specific, e.g. "Warehouse Floor Coating: What Experts Check". */
  heading: string;
  /** 3–4 short plain-English points a business owner can act on. */
  plain: string[];
  /** 4–7 spec checkpoints: label + value (standards, tests, CSI section, submittal items). */
  spec: { label: string; value: string }[];
  /** 3 common mistakes we see and fix, each one sentence. */
  mistakes: string[];
};
