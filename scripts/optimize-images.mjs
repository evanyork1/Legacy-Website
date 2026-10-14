/**
 * One-off image optimizer (safe to re-run).
 *
 * To add new photos: append their public paths to PHOTOS below, then run
 *   node scripts/optimize-images.mjs
 * It writes <name>-480.webp, <name>-960.webp, <name>-1600.webp next to each
 * original (never upscaling) and refreshes src/data/imageVariants.json, which
 * src/lib/responsiveImage.ts reads to build srcset/width/height.
 * Originals are left untouched. Existing variants are regenerated.
 * To refresh only the homepage hangar hero and its 40px blurred placeholder:
 *   node scripts/optimize-images.mjs --hero-only
 * Hero variants include 2400px only when the source is at least that wide.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const PUBLIC = path.join(ROOT, "public");
const WIDTHS = [480, 960, 1600];
const QUALITY = 78;
const HERO = "/lovable-uploads/701db69b-4439-4779-9115-583d175298af.png";
const HERO_ONLY = process.argv.includes("--hero-only");

const PHOTOS = [
  // FeaturesSection
  "/lovable-uploads/14a68967-8843-4c6d-b339-dd48a8e278ae.png",
  "/lovable-uploads/7a412198-403e-4444-bc3d-56e2e28ac9fd.png",
  "/lovable-uploads/8865d0d1-af13-4849-b194-a2611de34a0b.png",
  // AboutUsSection
  "/lovable-uploads/f51e2674-703e-41e2-af60-3230aa51f8fe.png",
  "/lovable-uploads/0fd4e444-b540-4c31-b624-49d7b2cb00a6.png",
  "/lovable-uploads/7d71c2b1-b5e5-4bd4-9e4d-427a3d20283f.png",
  "/lovable-uploads/998d8e69-d5c2-455a-9074-40a5cd13c2a0.png",
  "/lovable-uploads/5818f249-f4d8-4a09-b3cf-0434ccff0e29.png",
  // TrustedBrandSection
  "/lovable-uploads/4b72df6d-f315-4d63-876c-76d1b5d22e80.png",
  "/lovable-uploads/81d99e2b-0038-4ac2-8f7d-2f89d32a8560.png",
  // GalleryPreview (+ lightbox)
  "/lovable-uploads/5e144751-0c9d-4d92-85c2-5cf59fe90395.png",
  "/lovable-uploads/008e4edb-0e9b-4952-8a51-b7d92f110955.png",
  "/lovable-uploads/de857ed2-571d-46fc-a514-07461bffbb2b.png",
  "/lovable-uploads/e57c7675-310f-4345-ba29-137d7f5b6fc2.png",
  "/lovable-uploads/05270bc2-aa1f-4fef-a93c-d32cc53c7cac.png",
  "/lovable-uploads/b8222828-654c-4fc9-bb15-998130521ad4.png",
  // CommercialLinkSection
  "/lovable-uploads/fa247baa-ccf6-438b-b7b1-47d07ae07d74.png",
  // Commercial page
  "/lovable-uploads/171b7f71-4aa3-4b54-8c96-5f7143dddebf.png",
  "/lovable-uploads/4a97932b-03f2-42ab-9e2f-2a90852befc0.png",
  "/lovable-uploads/b5e6bdc4-80f9-44ea-a580-29d22662f7d4.png",
  "/lovable-uploads/85530262-ab7f-4339-af86-ed63ee721679.png",
  "/lovable-uploads/57f768f2-8d88-45f9-9d4e-a4c13cf1ed0b.png",
  HERO, // Homepage opening slide: commercial helicopter hangar (1920 x 1280)
  "/lovable-uploads/d1b328fa-3e30-4126-8266-ae64a33edd79.png",
  "/lovable-uploads/36244d7f-fc1a-4402-928c-de98a796b0d7.png",
  "/lovable-uploads/79ce02fc-d147-4c75-b50f-753c518a0483.png",
];

const manifestPath = path.join(ROOT, "src/data/imageVariants.json");
const manifest = HERO_ONLY ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};
for (const rel of HERO_ONLY ? [HERO] : PHOTOS) {
  const file = path.join(PUBLIC, rel);
  if (!fs.existsSync(file)) { console.warn("missing", rel); continue; }
  const meta = await sharp(file).rotate().metadata();
  const w = meta.autoOrient?.width ?? meta.width, h = meta.autoOrient?.height ?? meta.height;
  const base = rel.replace(/\.(png|jpe?g)$/i, "");
  let widths = WIDTHS.filter((x) => x <= w);
  if (!widths.length) widths = [w]; // tiny source: single variant at native width, named -480
  const variants = {};
  const targets = rel === HERO && w >= 2400 ? [...WIDTHS, 2400] : WIDTHS;
  for (const target of targets) {
    const outW = Math.min(target, w);
    if (target > w && target !== WIDTHS.find((x) => x >= w)) continue;
    const out = `${base}-${target}.webp`;
    await sharp(file).rotate().resize({ width: outW, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(path.join(PUBLIC, out));
    variants[target] = { src: out, w: outW };
  }
  manifest[rel] = { width: w, height: h, variants };
  if (rel === HERO) {
    await sharp(file).rotate().resize({ width: 40, withoutEnlargement: true }).blur(1).jpeg({ quality: 60 }).toFile(path.join(PUBLIC, "lovable-uploads/home-hero-hangar-preview.jpg"));
  }
  const orig = fs.statSync(file).size, v960 = variants[960] ? fs.statSync(path.join(PUBLIC, variants[960].src)).size : null;
  console.log(`${rel}\t${w}x${h}\t${(orig/1024).toFixed(0)} KB\t960: ${v960 ? (v960/1024).toFixed(0)+" KB" : "n/a"}`);
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
