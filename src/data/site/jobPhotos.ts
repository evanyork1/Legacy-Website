/**
 * Real Legacy job photos, mapped to the pages they belong on. Templates use
 * these in place of the older stand-in photos.
 */
import battery from "@/assets/jobs/battery-charging-novolac.webp";
import batteryArea from "@/assets/jobs/battery-area-epoxy.webp";
import lineStriping from "@/assets/jobs/warehouse-line-striping.webp";
import stripingFix from "@/assets/jobs/walkway-striping-removal.webp";
import hangar from "@/assets/jobs/airplane-hangar-floor.webp";
import restaurantPolished from "@/assets/jobs/restaurant-polished-concrete.webp";
import aeroMfg from "@/assets/jobs/aerospace-manufacturing-epoxy.webp";
import entryClean from "@/assets/jobs/entry-tile-deep-clean.webp";
import epoxyTexture from "@/assets/jobs/epoxy-texture-closeup.webp";
import crewRetail from "@/assets/jobs/crew-retail-grinding.webp";
import crewWarehouse from "@/assets/jobs/crew-warehouse-grinding.webp";
import moisture from "@/assets/jobs/moisture-testing-rh-probe.webp";
import polishedIndustrial from "@/assets/jobs/polished-concrete-industrial.webp";
import quartzCove from "@/assets/jobs/quartz-floor-integral-cove.webp";
import mfgEpoxy from "@/assets/jobs/manufacturing-epoxy-floor.webp";
import washroomAfter from "@/assets/jobs/washroom-epoxy-after.webp";
import walkwayAfter from "@/assets/jobs/walkway-epoxy-after.webp";
import foodPlant from "@/assets/jobs/food-plant-epoxy-floor.webp";

type Photo = { src: string; alt: string };
const P = (src: string, alt: string): Photo => ({ src, alt });

export const JOB = {
  battery: P(battery, "Chemical-resistant novolac epoxy floor in a forklift battery charging area"),
  batteryArea: P(batteryArea, "Epoxy floor at forklift battery chargers in a distribution center"),
  lineStriping: P(lineStriping, "Warehouse aisle line striping installed by Legacy Industrial Coatings"),
  stripingFix: P(stripingFix, "Warehouse floor markings redone after a failed striping job"),
  hangar: P(hangar, "Bright white aircraft hangar floor coating"),
  restaurantPolished: P(restaurantPolished, "Polished concrete floor in a restaurant dining room"),
  aeroMfg: P(aeroMfg, "White epoxy floor in an aerospace manufacturing facility"),
  entryClean: P(entryClean, "Deep cleaning a restaurant entry floor during a maintenance visit"),
  epoxyTexture: P(epoxyTexture, "Close-up of a slip-resistant textured epoxy floor finish"),
  crewRetail: P(crewRetail, "Legacy crew grinding concrete in a retail tenant-improvement space"),
  crewWarehouse: P(crewWarehouse, "Legacy crew preparing a warehouse slab with diamond grinding"),
  moisture: P(moisture, "Testing slab moisture with an in-situ relative humidity probe before coating"),
  polishedIndustrial: P(polishedIndustrial, "High-gloss polished concrete floor in an industrial building"),
  quartzCove: P(quartzCove, "Quartz floor with seamless integral cove base"),
  mfgEpoxy: P(mfgEpoxy, "Two-tone epoxy floor in a large manufacturing facility"),
  washroomAfter: P(washroomAfter, "Seamless epoxy floor in a production sanitation room"),
  walkwayAfter: P(walkwayAfter, "Epoxy walkway with high-traffic urethane finish in a Plano distribution center"),
  foodPlant: P(foodPlant, "Slip-resistant epoxy floor in a food processing plant"),
};

/** Per-page hero and photo row (3 photos). */
export const PAGE_PHOTOS: Record<string, { hero?: Photo; photos: Photo[] }> = {
  "/industrial-epoxy": { hero: JOB.mfgEpoxy, photos: [JOB.walkwayAfter, JOB.epoxyTexture, JOB.crewWarehouse] },
  "/resinous-flooring": { hero: JOB.mfgEpoxy, photos: [JOB.quartzCove, JOB.foodPlant, JOB.walkwayAfter] },
  "/manufacturing-floor-coating": { hero: JOB.mfgEpoxy, photos: [JOB.aeroMfg, JOB.epoxyTexture, JOB.crewWarehouse] },
  "/aerospace-hangar-flooring": { hero: JOB.hangar, photos: [JOB.aeroMfg, JOB.mfgEpoxy, JOB.epoxyTexture] },
  "/electronics-manufacturing-flooring": { hero: JOB.aeroMfg, photos: [JOB.mfgEpoxy, JOB.epoxyTexture, JOB.crewWarehouse] },
  "/warehouse-flooring": { hero: JOB.crewWarehouse, photos: [JOB.walkwayAfter, JOB.lineStriping, JOB.batteryArea] },
  "/line-striping": { hero: JOB.lineStriping, photos: [JOB.stripingFix, JOB.walkwayAfter, JOB.battery] },
  "/battery-room-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.battery, JOB.epoxyTexture] },
  "/novolac-epoxy-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.foodPlant, JOB.epoxyTexture] },
  "/concrete-polishing": { hero: JOB.polishedIndustrial, photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewRetail] },
  "/concrete-sealing": { photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewWarehouse] },
  "/restaurant-kitchen-flooring": { photos: [JOB.foodPlant, JOB.restaurantPolished, JOB.quartzCove] },
  "/food-processing-flooring": { hero: JOB.foodPlant, photos: [JOB.washroomAfter, JOB.quartzCove, JOB.foodPlant] },
  "/pharmaceutical-flooring": { photos: [JOB.washroomAfter, JOB.polishedIndustrial, JOB.quartzCove] },
  "/urethane-cement-flooring": { photos: [JOB.foodPlant, JOB.washroomAfter, JOB.quartzCove] },
  "/epoxy-cove-base": { hero: JOB.quartzCove, photos: [JOB.quartzCove, JOB.washroomAfter, JOB.foodPlant] },
  "/quartz-flooring": { hero: JOB.quartzCove, photos: [JOB.quartzCove, JOB.washroomAfter, JOB.epoxyTexture] },
  "/moisture-mitigation": { photos: [JOB.moisture, JOB.crewWarehouse, JOB.crewRetail] },
  "/commercial-floor-maintenance": { hero: JOB.entryClean, photos: [JOB.entryClean, JOB.polishedIndustrial, JOB.walkwayAfter] },
  "/retail-flooring": { photos: [JOB.crewRetail, JOB.restaurantPolished, JOB.polishedIndustrial] },
  "/joint-filling-crack-repair": { photos: [JOB.crewWarehouse, JOB.polishedIndustrial, JOB.walkwayAfter] },
};
