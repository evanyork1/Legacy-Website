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
import shinyAfter from "@/assets/jobs/warehouse-shiny-epoxy-after.webp";
import shinyBefore from "@/assets/jobs/hangar-concrete-before.webp";
import dcSiteWalk from "@/assets/jobs/data-center-site-walk.webp";
import dcTruck from "@/assets/jobs/legacy-truck-data-center.webp";
import containBefore from "@/assets/jobs/transformer-containment-before.webp";
import containAfter from "@/assets/jobs/transformer-containment-after.webp";
import indElectronics from "@/assets/jobs/ind-electronics-robotics.webp";
import indPharma from "@/assets/jobs/ind-pharma-cleanroom-worker.webp";
import indWarehouse from "@/assets/jobs/ind-warehouse-exterior.webp";
import indFood from "@/assets/jobs/ind-food-sanitation-room.webp";
import indPharmacy from "@/assets/jobs/ind-pharmacy-compounding.webp";
import indKitchen from "@/assets/jobs/ind-commercial-kitchen.webp";
import indParking from "@/assets/jobs/ind-parking-garage.webp";
import indDataCenter from "@/assets/industries/data-center-2.jpg";
import parishBefore from "@/assets/jobs/parish-lab-before.webp";
import parishGrind from "@/assets/jobs/parish-lab-grinding.webp";
import parishAfter from "@/assets/jobs/parish-lab-after.webp";
import craneBay from "@/assets/jobs/epoxy-white-crane-bay.webp";
import church from "@/assets/jobs/carpet-church-sanctuary.webp";
import polBefore from "@/assets/jobs/polish-corridor-before.webp";
import polCorridor from "@/assets/jobs/polish-corridor-after.webp";
import polWarehouse from "@/assets/jobs/polish-warehouse-after.webp";
import polJoint from "@/assets/jobs/polish-joint-repair.webp";
import polSpall from "@/assets/jobs/polish-spall-repair.webp";
import polDealership from "@/assets/jobs/polish-dealership.webp";
import polLobby from "@/assets/jobs/polish-lobby.webp";
import polShowroom from "@/assets/polishing-gallery-showroom.jpg";
import polStriped from "@/assets/polishing-gallery-warehouse.jpg";
import polOffice from "@/assets/polishing-gallery-office.webp";

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
  shinyAfter: P(shinyAfter, "High-gloss epoxy floor in a metal warehouse building after installation"),
  shinyBefore: P(shinyBefore, "Bare concrete floor in a metal warehouse building before epoxy"),
  dcSiteWalk: P(dcSiteWalk, "Legacy Industrial Coatings team on a data center substation site walk"),
  dcTruck: P(dcTruck, "Legacy Industrial Coatings truck on site at a data center campus"),
  containBefore: P(containBefore, "Cracked, stained concrete transformer containment pit at a data center before coating"),
  indElectronics: P(indElectronics, "Clean, coated floor in an automated electronics manufacturing line"),
  indPharma: P(indPharma, "Seamless resin floor in a pharmaceutical cleanroom production room"),
  indWarehouse: P(indWarehouse, "Tilt-up warehouse and distribution building"),
  indFood: P(indFood, "Seamless slip-resistant floor with drain in a food plant sanitation room"),
  indPharmacy: P(indPharmacy, "Compounding pharmacy cleanroom with seamless resin floor"),
  indKitchen: P(indKitchen, "Seamless slip-resistant floor in a commercial kitchen"),
  indParking: P(indParking, "Coated parking garage deck with traffic striping"),
  indDataCenter: P(indDataCenter, "Coated floor in a data center equipment room"),
  parishBefore: P(parishBefore, "Worn, stained painted floor in a school science lab before resurfacing"),
  parishGrind: P(parishGrind, "Diamond grinding the old coating off a school lab floor"),
  parishAfter: P(parishAfter, "Seamless gray flake floor in a school science and engineering lab"),
  craneBay: P(craneBay, "Bright white epoxy floor under yellow overhead crane rails in a manufacturing bay"),
  church: P(church, "Commercial carpet in a church sanctuary with tiered seating"),
  polBefore: P(polBefore, "Dull, worn concrete corridor in a production facility before polishing"),
  polCorridor: P(polCorridor, "High-gloss polished concrete corridor in a production facility after polishing"),
  polWarehouse: P(polWarehouse, "Large polished concrete floor in a newly built-out production warehouse"),
  polJoint: P(polJoint, "Filled control joint and patched spall ground flush in a polished concrete floor"),
  polSpall: P(polSpall, "Repaired spalls filled and polished into a concrete floor"),
  polDealership: P(polDealership, "Polished concrete floor in a dealership service lounge"),
  polLobby: P(polLobby, "Bright polished concrete floor in a commercial lobby"),
  polShowroom: P(polShowroom, "Polished concrete showroom floor with exotic cars"),
  polStriped: P(polStriped, "Polished concrete warehouse floor with yellow safety striping"),
  polOffice: P(polOffice, "Polished concrete floor in a dealership sales office"),
  containAfter: P(containAfter, "Watertight coating on a data center transformer containment pit after installation"),
};

/**
 * Per-page hero and photo row (3 photos; the third is hidden on phones).
 * Heroes are landscape shots of finished floors; process shots (grinding,
 * moisture testing) only appear on prep and polishing pages.
 */
export const PAGE_PHOTOS: Record<string, { hero?: Photo; photos?: Photo[] }> = {
  "/hotel-flooring": { hero: JOB.polLobby },
  "/parking-garage-coatings": { hero: JOB.indParking },
  "/commercial-carpet-tile": { hero: JOB.church },
  "/school-flooring": { hero: JOB.parishAfter, photos: [JOB.parishGrind, JOB.church, JOB.quartzCove] },
  "/resinous-flooring": { hero: JOB.quartzCove, photos: [JOB.mfgEpoxy, JOB.foodPlant, JOB.aeroMfg] },
  "/manufacturing-floor-coating": { hero: JOB.aeroMfg, photos: [JOB.mfgEpoxy, JOB.batteryArea, JOB.hangar] },
  "/aerospace-hangar-flooring": { hero: JOB.hangar, photos: [JOB.aeroMfg, JOB.mfgEpoxy, JOB.batteryArea] },
  "/electronics-manufacturing-flooring": { hero: JOB.indElectronics, photos: [JOB.mfgEpoxy, JOB.hangar, JOB.batteryArea] },
  "/warehouse-flooring": { hero: JOB.indWarehouse, photos: [JOB.mfgEpoxy, JOB.battery, JOB.lineStriping] },
  "/line-striping": { hero: JOB.lineStriping, photos: [JOB.stripingFix, JOB.battery, JOB.mfgEpoxy] },
  "/battery-room-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.mfgEpoxy, JOB.walkwayAfter] },
  "/novolac-epoxy-flooring": { hero: JOB.battery, photos: [JOB.batteryArea, JOB.washroomAfter, JOB.foodPlant] },
  "/concrete-polishing": { hero: JOB.polWarehouse, photos: [JOB.polShowroom, JOB.polStriped, JOB.polDealership] },
  "/concrete-sealing": { photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewRetail] },
  "/restaurant-kitchen-flooring": { hero: JOB.indKitchen, photos: [JOB.foodPlant, JOB.quartzCove, JOB.restaurantPolished] },
  "/food-processing-flooring": { hero: JOB.indFood, photos: [JOB.foodPlant, JOB.quartzCove, JOB.washroomAfter] },
  "/pharmaceutical-flooring": { hero: JOB.indPharma, photos: [JOB.aeroMfg, JOB.quartzCove, JOB.mfgEpoxy] },
  "/pharmacy-cleanroom-flooring": { hero: JOB.indPharmacy, photos: [JOB.washroomAfter, JOB.aeroMfg, JOB.quartzCove] },
  "/urethane-cement-flooring": { photos: [JOB.foodPlant, JOB.washroomAfter, JOB.quartzCove] },
  "/epoxy-cove-base": { hero: JOB.quartzCove, photos: [JOB.foodPlant, JOB.mfgEpoxy, JOB.epoxyTexture] },
  "/quartz-flooring": { hero: JOB.quartzCove, photos: [JOB.washroomAfter, JOB.foodPlant, JOB.restaurantPolished] },
  "/moisture-mitigation": { photos: [JOB.moisture, JOB.crewWarehouse, JOB.crewRetail] },
  "/commercial-floor-maintenance": { hero: JOB.entryClean, photos: [JOB.polishedIndustrial, JOB.restaurantPolished, JOB.walkwayAfter] },
  "/retail-flooring": { photos: [JOB.restaurantPolished, JOB.polishedIndustrial, JOB.crewRetail] },
  "/joint-filling-crack-repair": { photos: [JOB.crewWarehouse, JOB.polishedIndustrial, JOB.mfgEpoxy] },
  "/healthcare-flooring": { photos: [JOB.quartzCove, JOB.aeroMfg, JOB.epoxyTexture] },
  "/secondary-containment-coatings": { hero: JOB.containAfter, photos: [JOB.dcSiteWalk, JOB.dcTruck, JOB.battery] },
  "/data-center-flooring": { hero: JOB.indDataCenter, photos: [JOB.containAfter, JOB.dcSiteWalk, JOB.dcTruck] },
  "/agriculture-facility-flooring": { photos: [JOB.foodPlant, JOB.washroomAfter, JOB.mfgEpoxy] },
};

/** Real projects shown on each page (case study slugs, most relevant first). */
/** Before/after pairs shown on a page. */
export const PAGE_BEFORE_AFTER: Record<string, { before: Photo; after: Photo; caption: string }> = {
  "/school-flooring": { before: JOB.parishBefore, after: JOB.parishAfter, caption: "Parish Episcopal School in Dallas: a worn, painted lab floor replaced with a seamless flake floor." },
  "/concrete-polishing": { before: JOB.polBefore, after: JOB.polCorridor, caption: "A worn production corridor ground, repaired and polished to a high-gloss finish." },
  "/commercial": { before: JOB.shinyBefore, after: JOB.shinyAfter, caption: "Bare concrete to a high-gloss epoxy floor in a metal warehouse building." },
  "/warehouse-flooring": { before: JOB.shinyBefore, after: JOB.shinyAfter, caption: "Bare concrete to a high-gloss epoxy floor in a metal warehouse building." },
  "/aerospace-hangar-flooring": { before: JOB.shinyBefore, after: JOB.shinyAfter, caption: "Bare concrete to a bright, high-gloss epoxy floor in a metal building." },
  "/secondary-containment-coatings": { before: JOB.containBefore, after: JOB.containAfter, caption: "Irving, TX data center transformer containment pit, before and after a watertight coating." },
  "/data-center-flooring": { before: JOB.containBefore, after: JOB.containAfter, caption: "Transformer containment pit at an Irving, TX data center, before and after a watertight coating." },
};

/** Extra photo galleries shown on a page. */
export const PAGE_GALLERY: Record<string, { title: string; photos: (Photo & { caption?: string })[] }> = {
  "/concrete-polishing": {
    title: "From the Job Site",
    photos: [
      { ...JOB.polJoint, caption: "Joints filled and ground flush before the final polish" },
      { ...JOB.polSpall, caption: "Spalls repaired so they polish in with the slab" },
      { ...JOB.polLobby, caption: "Commercial lobby" },
      { ...JOB.polOffice, caption: "Dealership sales office" },
    ],
  },
};

type Video = { src: string; poster: string; caption: string; landscape?: boolean };
/** Short job videos shown on a page. */
export const PAGE_VIDEO: Record<string, Video | Video[]> = {
  "/concrete-polishing": [
    { src: "/video/concrete-polishing-job.mp4", poster: "/video/concrete-polishing-job.jpg", caption: "Polishing a production floor on the job." },
    { src: "/video/polished-warehouse-walkthrough.mp4", poster: "/video/polished-warehouse-walkthrough.jpg", caption: "Walking the finished polished floor.", landscape: true },
  ],
  "/flake-floors": [
    { src: "/video/flake-floor-install.mp4", poster: "/video/flake-floor-install.jpg", caption: "Flake floor install at a compounding pharmacy in Dallas." },
    { src: "/video/dog-boarding-floor-prep.mp4", poster: "/video/dog-boarding-floor-prep.jpg", caption: "Prepping the slab at Underdog Kennels, a large indoor dog boarding facility.", landscape: true },
  ],
  "/pharmacy-cleanroom-flooring": { src: "/video/flake-floor-install.mp4", poster: "/video/flake-floor-install.jpg", caption: "Flake floor install at a compounding pharmacy in Dallas." },
  "/school-flooring": [
    { src: "/video/parish-lab-base-coat.mp4", poster: "/video/parish-lab-base-coat.jpg", caption: "Spreading the base coat in the Parish Episcopal School lab." },
    { src: "/video/parish-lab-topcoat.mp4", poster: "/video/parish-lab-topcoat.jpg", caption: "Rolling the topcoat on the finished flake floor.", landscape: true },
  ],
  "/commercial": { src: "/video/dog-boarding-floor-prep.mp4", poster: "/video/dog-boarding-floor-prep.jpg", caption: "Prepping the slab at Underdog Kennels, a large indoor dog boarding facility.", landscape: true },
  "/retail-flooring": { src: "/video/scratch-golf-install-timelapse.mp4", poster: "/video/scratch-golf-install-timelapse.jpg", caption: "Time-lapse of a floor install at Scratch Golf, an indoor golf facility." },
  "/secondary-containment-coatings": { src: "/video/containment-pit-prep.mp4", poster: "/video/containment-pit-prep.jpg", caption: "Prepping a data center transformer containment pit before coating." },
  "/data-center-flooring": { src: "/video/containment-pit-prep.mp4", poster: "/video/containment-pit-prep.jpg", caption: "Prepping a transformer containment pit at a data center before coating." },
};

/** Typical price answers (Evan's ranges, Oct 2026). Replaces any generic cost FAQ on the page. */
const EPOXY_PRICE = "Our standard high-traffic epoxy floors typically run about $3.50 to $10 per square foot. Size drives most of that range: large open floors land near the low end and small rooms near the high end. Prep, moisture, repairs and after-hours phasing also move the number, so we confirm it with a site walk or plans.";
export const PAGE_PRICE_FAQ: Record<string, { q: string; a: string }> = {
  "/warehouse-flooring": { q: "How much does a warehouse epoxy floor cost?", a: EPOXY_PRICE },
  "/manufacturing-floor-coating": { q: "How much does a manufacturing floor coating cost?", a: EPOXY_PRICE + " Urethane cement in hot, wet or chemical areas runs about $21 per square foot." },
  "/concrete-polishing": { q: "How much does polished concrete cost?", a: "Polished concrete typically runs about $2.25 per square foot on large floors up to about $8 per square foot on small ones. The level of shine, slab condition, repairs and dust control also move the price, so we confirm it with a site walk or plans." },
  "/urethane-cement-flooring": { q: "How much does urethane cement flooring cost?", a: "Urethane cement typically runs about $21 per square foot, and integral cove base about $15 per linear foot. Prep, drains, slopes and phasing around production confirm the final number." },
  "/food-processing-flooring": { q: "How much does food plant flooring cost?", a: "Urethane cement, the usual choice for washdown and hot areas, typically runs about $21 per square foot, with integral cove base about $15 per linear foot. Drier areas can use epoxy at about $3.50 to $10 per square foot depending on size." },
  "/restaurant-kitchen-flooring": { q: "How much does commercial kitchen flooring cost?", a: "Urethane cement typically runs about $21 per square foot and quartz about $15 per square foot, with integral cove base about $15 per linear foot. Kitchen size, drains and after-hours scheduling confirm the final number." },
  "/epoxy-cove-base": { q: "How much does epoxy cove base cost?", a: "Integral cove base typically runs about $15 per linear foot. Wall condition, height and the number of corners, drains and penetrations confirm the final number." },
  "/quartz-flooring": { q: "How much does quartz flooring cost?", a: "Quartz flooring typically runs about $15 per square foot, with integral cove base about $15 per linear foot. Room size, prep and phasing confirm the final number." },
  "/flake-floors": { q: "How much does a commercial flake floor cost?", a: "Commercial flake floors typically run about $7.50 to $9 per square foot. Size, slab condition and any repairs confirm the final number." },
};

export const PAGE_PROJECTS: Record<string, string[]> = {
  "/commercial": ["plano-distribution-center-walkway-epoxy", "dallas-supplement-manufacturing-washroom-epoxy", "data-center-transformer-containment-coating"],
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
  "/flake-floors": ["parish-episcopal-school-stem-lab-flake-floor", "swim-school-flake-floor-multi-location", "dog-training-grooming-facility-flake-floor"],
  "/school-flooring": ["parish-episcopal-school-stem-lab-flake-floor"],
  "/secondary-containment-coatings": ["data-center-transformer-containment-coating"],
  "/data-center-flooring": ["data-center-transformer-containment-coating"],
};

/** Static-control systems we install, with the manufacturer's documents (Evan approved, Oct 2026). */
const SW = "https://industrial.sherwin-williams.com/content/dam/pcg/sherwin-williams/resin-flooring/na/us/en-us/pdfs";
const ESD_SYSTEMS = {
  title: "Static-Control Systems We Install",
  intro:
    "For data halls, electrical rooms and electronics lines we install Sherwin-Williams Resuflor static-control flooring. System overviews, application instructions and guide specs are below.",
  systems: [
    {
      name: "Resuflor Topcoat SDU",
      text: "A nominal 20 mil static-dissipative epoxy and urethane system. Per the manufacturer, it tests at 1×10⁵ to 1×10⁹ ohms under ANSI/ESD S20.20 with body voltage under 100 volts.",
      docs: [
        { label: "System overview (PDF)", url: `${SW}/system-overviews/esd-conducive/resuflor-topcoat-sdu-system-overview-sw-na-en.pdf` },
        { label: "Application instructions (PDF)", url: `${SW}/application-instructions/esd-conducive/resuflor-topcoat-sdu-system-application-sw-na-en.pdf` },
        { label: "Guide specification (Word)", url: `${SW}/guide-specifications/esd-conductive/096723-Resinous-Flooring-Resuflor-Topcoat-SDU.docx` },
      ],
    },
    {
      name: "Resuflor Topcoat SD",
      text: "A thin-mil static-control epoxy topcoat with a stipple finish. Conductive over a conductive primer, static-dissipative over a standard epoxy primer.",
      docs: [
        { label: "System overview (PDF)", url: `${SW}/system-overviews/esd-conducive/resuflor-topcoat-sd-system-overview-sw-na-en.pdf` },
        { label: "Application instructions (PDF)", url: `${SW}/application-instructions/esd-conducive/resuflor-topcoat-sd-system-application-sw-na-en.pdf` },
      ],
    },
    {
      name: "Resuflor Deco Flake SD",
      text: "A high-gloss, static-dissipative flake floor: vinyl chips in an epoxy base, sealed with an abrasion-resistant polyurethane.",
      docs: [
        { label: "System overview (PDF)", url: `${SW}/system-overviews/esd-conducive/resuflor-deco-flake-sd-system-overview-sw-na-en.pdf` },
        { label: "Application instructions (PDF)", url: `${SW}/application-instructions/esd-conducive/resuflor-deco-flake-sd-system-application-s-w-na-en.pdf` },
        { label: "Guide specification (Word)", url: `${SW}/guide-specifications/esd-conductive/096723-Resinous-Flooring-Resuflor-DecoFlake-SD-SW.doc` },
      ],
    },
  ],
  shared: [
    { label: "ESD flooring color card (PDF)", url: `${SW}/color-cards/esd-flooring-color-card-SW.pdf` },
    { label: "Cleaning and maintenance guide (PDF)", url: `${SW}/project-prep-docs/General-Flooring-Maintenance-Guide-SW.pdf` },
  ],
};
export const PAGE_SPECS: Record<string, typeof ESD_SYSTEMS> = {
  "/data-center-flooring": ESD_SYSTEMS,
  "/electronics-manufacturing-flooring": ESD_SYSTEMS,
  "/esd-static-control-flooring": ESD_SYSTEMS,
};
