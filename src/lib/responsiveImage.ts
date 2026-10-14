import variants from "@/data/imageVariants.json";

type Entry = { width: number; height: number; variants: Record<string, { src: string; w: number }> };
const MAP = variants as Record<string, Entry>;

/**
 * Responsive WebP attributes for a photo optimized by scripts/optimize-images.mjs.
 * Falls back to the original file when no variants exist.
 */
export const responsiveImage = (original: string, sizes: string) => {
  const e = MAP[original];
  if (!e) return { src: original };
  const list = Object.values(e.variants).sort((a, b) => a.w - b.w);
  const mid = e.variants["960"] ?? list[list.length - 1];
  return {
    src: mid.src,
    srcSet: list.map((v) => `${v.src} ${v.w}w`).join(", "),
    sizes,
    width: e.width,
    height: e.height,
  };
};

/** Largest variant — used where only a single URL fits (e.g. a lightbox). */
export const largestVariant = (original: string) => {
  const e = MAP[original];
  if (!e) return original;
  return Object.values(e.variants).sort((a, b) => b.w - a.w)[0].src;
};
