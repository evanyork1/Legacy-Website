/**
 * Manufacturers whose materials we install. Shown as a gray logo strip right
 * above the request form on every page (SiteFooter). Add self-hosted logo
 * files in src/assets/manufacturers/ and list them here; the strip stays
 * hidden while this list is empty. Never link to manufacturer sites.
 */
export type ManufacturerLogo = { name: string; src: string };

export const MANUFACTURER_LOGOS: ManufacturerLogo[] = [];
