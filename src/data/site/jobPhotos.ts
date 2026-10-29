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

/**
 * Per-page hero and photo row (3 photos; the third is hidden on phones).
 * Heroes are landscape shots of finished floors; process shots (grinding,
 * moisture testing) only appear on prep and polishing pages.
 */
export const PAGE_PHOTOS: Record<string, { hero?: Photo; photos: Photo[] }> = {
  "/industrial-epoxy": { hero: JOB.hangar, photos: [JOB.mfgEpoxy, JOB.aeroMfg, JOB.batteryArea] },
  "/resinous-flooring": { hero: JOB.quartzCove, photos: [JOB.mfgEpoxy, JOB.foodPlant, JOB.aeroMfg] },
  "/manufacturing-floor-coating": { hero: JOB.aeroMfg, photos: [JOB.mfgEpoxy, JOB.batteryArea, JOB.hangar] },
  "/aerospace-hangar-flooring": { hero: JOB.hangar, photos: [JOB.aeroMfg, JOB.mfgEpoxy, JOB.batteryArea] },
  "/electronics-manufacturing-flooring": { hero: JOB.aeroMfg, photos: [JOB.mfgEpoxy, JOB.hangar, JOB.batteryArea] },
  "/warehouse-flooring": { hero: JOB.mfgEpoxy, photos: [JOB.battery, JOB.lineStriping, JOB.stripingFix] },
  "/line-striping": { hero: JOB.lineStriping, photos: [JOB.stripingFix, JOB.battery, JOB.mfgEpoxy] },
  "/battery-room-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.mfgEpoxy, JOB.walkwayAfter] },
  "/novolac-epoxy-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.washroomAfter, JOB.foodPlant] },
  "/concrete-polishing": { hero: JOB.polishedIndustrial, photos: [JOB.restaurantPolished, JOB.crewWarehouse, JOB.crewRetail] },
  "/concrete-sealing": { photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewRetail] },
  "/restaurant-kitchen-flooring": { hero: JOB.restaurantPolished, photos: [JOB.foodPlant, JOB.quartzCove, JOB.washroomAfter] },
  "/food-processing-flooring": { hero: JOB.foodPlant, photos: [JOB.quartzCove, JOB.mfgEpoxy, JOB.epoxyTexture] },
  "/pharmaceutical-flooring": { photos: [JOB.aeroMfg, JOB.quartzCove, JOB.mfgEpoxy] },
  "/pharmacy-cleanroom-flooring": { photos: [JOB.washroomAfter, JOB.aeroMfg, JOB.quartzCove] },
  "/urethane-cement-flooring": { photos: [JOB.foodPlant, JOB.washroomAfter, JOB.quartzCove] },
  "/epoxy-cove-base": { hero: JOB.quartzCove, photos: [JOB.foodPlant, JOB.mfgEpoxy, JOB.epoxyTexture] },
  "/quartz-flooring": { hero: JOB.quartzCove, photos: [JOB.washroomAfter, JOB.foodPlant, JOB.restaurantPolished] },
  "/moisture-mitigation": { photos: [JOB.moisture, JOB.crewWarehouse, JOB.crewRetail] },
  "/commercial-floor-maintenance": { hero: JOB.entryClean, photos: [JOB.polishedIndustrial, JOB.restaurantPolished, JOB.walkwayAfter] },
  "/retail-flooring": { photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewRetail] },
  "/joint-filling-crack-repair": { photos: [JOB.crewWarehouse, JOB.polishedIndustrial, JOB.mfgEpoxy] },
  "/healthcare-flooring": { photos: [JOB.quartzCove, JOB.aeroMfg, JOB.epoxyTexture] },
  "/agriculture-facility-flooring": { photos: [JOB.foodPlant, JOB.washroomAfter, JOB.mfgEpoxy] },
};

/** Real projects shown on each page (case study slugs, most relevant first). */
export const PAGE_PROJECTS: Record<string, string[]> = {
  "/commercial": ["plano-distribution-center-walkway-epoxy", "dallas-supplement-manufacturing-washroom-epoxy", "restaurant-pump-room-integrated-cove-base"],
  "/industrial-epoxy": ["plano-distribution-center-walkway-epoxy", "dallas-supplement-manufacturing-washroom-epoxy"],
  "/warehouse-flooring": ["plano-distribution-center-walkway-epoxy"],
  "/line-striping": ["plano-distribution-center-walkway-epoxy"],
  "/joint-filling-crack-repair": ["plano-distribution-center-walkway-epoxy"],
  "/manufacturing-floor-coating": ["dallas-supplement-manufacturing-washroom-epoxy", "pharmaceutical-manufacturing-polished-concrete"],
  "/pharmaceutical-flooring": ["dallas-supplement-manufacturing-washroom-epoxy", "pharmaceutical-manufacturing-polished-concrete"],
  "/food-processing-flooring": ["dallas-supplement-manufacturing-washroom-epoxy", "restaurant-pump-room-integrated-cove-base"],
  "/resinous-flooring": ["dallas-supplement-manufacturing-washroom-epoxy", "restaurant-pump-room-integrated-cove-base"],
  "/healthcare-flooring": ["dallas-supplement-manufacturing-washroom-epoxy"],
  "/restaurant-kitchen-flooring": ["restaurant-pump-room-integrated-cove-base", "fast-casual-restaurant-concrete-sealing"],
  "/epoxy-cove-base": ["restaurant-pump-room-integrated-cove-base", "dallas-supplement-manufacturing-washroom-epoxy"],
  "/concrete-polishing": ["pharmaceutical-manufacturing-polished-concrete"],
  "/concrete-sealing": ["fast-casual-restaurant-concrete-sealing"],
  "/retail-flooring": ["fast-casual-restaurant-concrete-sealing"],
  "/flake-floors": ["swim-school-flake-floor-multi-location", "dog-training-grooming-facility-flake-floor"],
};
