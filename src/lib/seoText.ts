/**
 * Keeps search titles and descriptions inside what Google shows.
 * Priority when a title is too long: the search phrase, then the place,
 * then the brand (Google already shows the site name above each result).
 */
const BRAND = "Legacy Industrial Coatings";
const MAX_TITLE = 65;
const MAX_DESC = 160;

const GEO: [RegExp, string][] = [
  [/Dallas, Texas & Nationwide/g, "Dallas, TX"],
  [/Dallas–Fort Worth & Nationwide/g, "Dallas–Fort Worth"],
  [/DFW & Nationwide/g, "DFW"],
  [/Dallas & Texas/g, "Dallas, TX"],
  [/Dallas & Nationwide/g, "Dallas, TX"],
  [/Dallas & All of Texas/g, "Dallas & Texas"],
  [/Dallas–Fort Worth/g, "DFW"],
];

export const fitTitle = (raw: string): string => {
  let t = raw.replace(/\s+/g, " ").trim();
  if (t.length <= MAX_TITLE) return t;
  for (const [re, rep] of GEO) {
    t = t.replace(re, rep);
    if (t.length <= MAX_TITLE) return t;
  }
  const parts = t.split(" | ");
  // Brand-first titles (homepage, about, contact) keep the brand.
  if (parts[0] === BRAND || parts[0].startsWith(`About ${BRAND}`) || parts[0].startsWith(`Contact ${BRAND}`)) return t;
  if (parts.length > 1 && parts[parts.length - 1] === BRAND) {
    parts.pop();
    t = parts.join(" | ");
    if (t.length <= MAX_TITLE) return t;
  }
  while (parts.length > 2) {
    parts.splice(parts.length - 1, 1);
    t = parts.join(" | ");
    if (t.length <= MAX_TITLE) return t;
  }
  return t;
};

export const fitDescription = (raw: string): string => {
  const d = raw.replace(/\s+/g, " ").trim();
  if (d.length <= MAX_DESC) return d;
  const cut = d.slice(0, MAX_DESC);
  const sentence = Math.max(cut.lastIndexOf(". "), cut.endsWith(".") ? cut.length - 1 : -1);
  if (sentence >= 90) return cut.slice(0, sentence + 1);
  const word = cut.lastIndexOf(" ");
  return `${cut.slice(0, word).replace(/[,;:–-]$/, "")}…`;
};
