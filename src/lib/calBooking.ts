import { buildBookingUrl } from "@/contexts/BookingUrlContext";

type CalFunction = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  q?: unknown[][];
  ns?: Record<string, CalFunction>;
  config?: { forwardQueryParams?: boolean };
};

declare global {
  interface Window {
    Cal?: CalFunction;
    openEstimateCalendar?: () => void;
  }
}

const NAMESPACE = "on-site-estimate";
const SCRIPT_URL = "https://app.cal.com/embed/embed.js";

/** Load Cal's official embed on demand, without delaying the first page paint. */
const initializeCal = () => {
  if (window.Cal?.ns?.[NAMESPACE]) return;

  const cal = (window.Cal || function (...args: unknown[]) {
    const current = window.Cal;
    if (!current) return;
    if (!current.loaded) {
      current.ns = {};
      current.q = current.q || [];
      const script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.onerror = () => { window.location.href = buildBookingUrl(); };
      document.head.appendChild(script);
      current.loaded = true;
    }
    if (args[0] === "init") {
      const namespace = args[1];
      if (typeof namespace === "string") {
        const api = function (...apiArgs: unknown[]) { api.q?.push(apiArgs); } as CalFunction;
        api.q = [];
        current.ns = current.ns || {};
        current.ns[namespace] = current.ns[namespace] || api;
        current.ns[namespace].q?.push(args);
        current.q?.push(["initNamespace", namespace]);
      } else current.q?.push(args);
      return;
    }
    current.q?.push(args);
  } as CalFunction);

  window.Cal = cal;
  cal("init", NAMESPACE, { origin: "https://app.cal.com" });
  cal.config = { ...cal.config, forwardQueryParams: true };
  cal.ns?.[NAMESPACE]?.("ui", { hideEventTypeDetails: false, layout: "month_view" });
};

export const openCalBooking = () => {
  initializeCal();
  const bookingUrl = new URL(buildBookingUrl(
    window.location.pathname === "/gpt"
      ? "https://cal.com/legacyindustrialcoatings/on-site-estimate?utm_source=chatgpt"
      : undefined,
  ));
  const attribution = Object.fromEntries(bookingUrl.searchParams.entries());
  window.Cal?.ns?.[NAMESPACE]?.("modal", {
    calLink: "legacyindustrialcoatings/on-site-estimate",
    config: { ...attribution, layout: "month_view", useSlotsViewOnSmallScreen: "true" },
  });
};

if (typeof window !== "undefined") window.openEstimateCalendar = openCalBooking;