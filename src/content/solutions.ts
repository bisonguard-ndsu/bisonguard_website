import type { Pic } from "@/components/page";

export type Solution = {
  slug: string;
  group: "Roads and assets" | "Traffic" | "Beyond the road";
  title: string;
  short: string;
  headline: string;
  accent: string;
  lead: string;
  image: Pic;
  /** h1: the category and the buyer */
  h1: string;
  /** a second photograph beside the problem, and one per approach step */
  side: Pic;
  stepPics: Pic[];
  problem: string;
  approach: { title: string; text: string }[];
  outcomes: string[];
  products: string[];
  project?: string;
};

export const solutions: Solution[] = [
  {
    slug: "road-asset-inventory",
    h1: "Road asset inventory from drive video",
    side: { src: "/media/site/guardrail.webp", alt: "A divided highway with a guardrail and overhead sign" },
    stepPics: [{ src: "/media/site/phone-dashboard.webp", alt: "A phone on a car dashboard recording the road" }, { src: "/media/site/control-room.webp", alt: "Road video with each sign and vehicle boxed by the model" }, { src: "/media/site/adams-sign.webp", alt: "A no-parking sign record opened on the AdAMS map" }],
    group: "Roads and assets",
    title: "Road asset inventory",
    short: "Signs, markings, lights and guardrails, inventoried from drive video.",
    headline: "A complete asset inventory without a survey crew on foot",
    accent: "without a survey crew on foot",
    lead: "Know what is on your roads, where it is and what state it is in. One drive with a phone gives you an inventory you can keep current every season.",
    image: { src: "/media/site/highway-sign.webp", alt: "An overhead highway sign gantry above a freeway", position: "50% 40%" },
    problem:
      "Most agencies inventory signs and roadside assets by hand, a few corridors at a time. The record is out of date before it is finished, and nobody can say with confidence how many signs need replacing.",
    approach: [
      { title: "Drive and record", text: "A phone on the dashboard records video and GPS on routine drives. No special vehicle or sensors." },
      { title: "Detect and geolocate", text: "Models classify each sign to its MUTCD code and fix its position, tracking it across frames so it is counted once." },
      { title: "Keep it current", text: "Repeat drives update the map. Missing, damaged or obscured assets are flagged for work orders." },
    ],
    outcomes: ["Every sign classified and geolocated", "Markings, lights, signals and guardrails as map layers", "Evidence frame for each asset", "Work orders raised from the map"],
    products: ["adams"],
    project: "fargo-west-fargo-survey",
  },
  {
    slug: "pavement-condition",
    h1: "Pavement condition ratings for every segment",
    side: { src: "/media/site/paving.webp", alt: "A paving machine laying fresh asphalt on a street" },
    stepPics: [{ src: "/media/hero/adams.webp", alt: "A motorway at dusk seen from the driver's seat" }, { src: "/media/site/markings.webp", alt: "Fresh white lane markings on dark asphalt" }, { src: "/media/site/road-crew.webp", alt: "A paving crew at work on a road" }],
    group: "Roads and assets",
    title: "Pavement condition",
    short: "Distress, severity and ride quality for every segment you drive.",
    headline: "Pavement condition for the whole network, not a sample",
    accent: "not a sample",
    lead: "Rate every segment, not a few test sections. AdAMS grades distress and roughness from the same drive video, so you can plan maintenance with the full picture.",
    image: { src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking", position: "50% 50%" },
    problem:
      "Pavement surveys with specialist vehicles are expensive, so networks are rated every few years or only in part. Decisions get made on old or partial data.",
    approach: [
      { title: "Capture with a phone", text: "The same drive used for the asset inventory captures the pavement surface and vehicle motion." },
      { title: "Grade distress and roughness", text: "Cracks, potholes and raveling are graded from Level 1 to Level 5, and every segment gets an IRI roughness score." },
      { title: "Prioritise repairs", text: "Filter the map by condition, raise work orders for the worst segments and track deterioration over time." },
    ],
    outcomes: ["IRI score per segment", "Distress graded on a five-level scale", "Condition trends between surveys", "Repairs prioritised by severity"],
    products: ["adams", "roadlogger"],
    project: "fargo-west-fargo-survey",
  },
  {
    slug: "field-inspection",
    h1: "Field inspections tracked to repair",
    side: { src: "/media/site/hardhat.webp", alt: "A road worker in a hard hat" },
    stepPics: [{ src: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn lane marking" }, { src: "/media/site/plans.webp", alt: "Two engineers pointing at a printed plan" }, { src: "/media/site/paving.webp", alt: "A paving machine laying fresh asphalt" }],
    group: "Roads and assets",
    title: "Field inspection",
    short: "Issues logged from the field and tracked to verified repair.",
    headline: "Field inspections that never get lost between the road and the office",
    accent: "the road and the office",
    lead: "Give inspectors a phone app that works without signal, and give supervisors a live view of every open case.",
    image: { src: "/media/site/roller.webp", alt: "A road roller compacting fresh asphalt beside a traffic cone", position: "50% 60%" },
    problem: "Paper forms and spreadsheets mean defects are logged late, photos go missing and nobody can see which repairs are overdue.",
    approach: [
      { title: "Log on the roadside", text: "Photos, location and severity captured in under a minute, online or off." },
      { title: "Triage centrally", text: "Engineers review new cases, set priority and assign crews from one queue." },
      { title: "Close with proof", text: "Cases close only when the repair is verified, with the full history kept." },
    ],
    outcomes: ["No lost inspections", "A clear owner for every case", "Overdue repairs visible at a glance", "An audit trail for every defect"],
    products: ["roadlogger"],
  },
  {
    slug: "traffic-studies",
    h1: "Traffic studies from intersection video",
    side: { src: "/media/site/signal-traffic.webp", alt: "Cars waiting at a signalised intersection at night" },
    stepPics: [{ src: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole" }, { src: "/media/site/plans.webp", alt: "Two engineers pointing at a printed plan" }, { src: "/media/site/meeting.webp", alt: "A team reviewing results around a long table" }],
    group: "Traffic",
    title: "Traffic studies",
    short: "Counts, headways and occupancy from video, ready for the report.",
    headline: "Traffic studies from video, ready to submit",
    accent: "ready to submit",
    lead: "Replace manual counts with video you can record from public cameras or your own. Get movement counts, headways and occupancy, with evidence for every number.",
    image: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above", position: "50% 50%" },
    problem:
      "Manual turning-movement counts are slow, expensive to staff and hard to check. A count that cannot be traced back to the footage is hard to defend.",
    approach: [
      { title: "Get the footage", text: "Upload your own recording or schedule one from a public camera in the directory." },
      { title: "Define the movements", text: "Draw approaches and paths, test the layout, then run the count." },
      { title: "Deliver the study", text: "Review evidence, check coverage and export a PDF or Word engineering report." },
    ],
    outcomes: ["Turning-movement counts by interval", "Headways and lane occupancy", "Peak-hour figures with coverage checked", "PDF and Word reports"],
    products: ["turnflow", "traffic-management"],
  },
  {
    slug: "traffic-operations",
    h1: "Traffic camera operations in one workspace",
    side: { src: "/media/site/night-intersection.webp", alt: "A city intersection at night" },
    stepPics: [{ src: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole" }, { src: "/media/hero/company.webp", alt: "A city interchange at night from above" }, { src: "/media/site/interchange.webp", alt: "An interchange from above with traffic on every ramp" }],
    group: "Traffic",
    title: "Traffic operations",
    short: "Live camera monitoring, recordings and alerts for operations rooms.",
    headline: "One screen for every camera in your network",
    accent: "every camera in your network",
    lead: "Bring live feeds, scheduled recordings and traffic analyses into one workspace for the team that runs the network day to day.",
    image: { src: "/media/site/control-room.webp", alt: "Camera footage with each vehicle and sign boxed by the model", position: "50% 40%" },
    problem:
      "Camera feeds sit in one system, recordings in another and analysis in spreadsheets. Operators lose time switching tools when something happens.",
    approach: [
      { title: "Connect your cameras", text: "The cameras you already run, on one map and one live wall." },
      { title: "Record what matters", text: "Schedule recordings for study periods or start one when an incident unfolds." },
      { title: "Measure and alert", text: "Volume, speed, occupancy and density from footage, with alerts for your team." },
    ],
    outcomes: ["Live wall and camera map", "Scheduled and on-demand recording", "Traffic measures from any recording", "Operational alerts and reports"],
    products: ["traffic-management"],
  },
  {
    slug: "herd-monitoring",
    h1: "Herd monitoring on open range",
    side: { src: "/media/site/herd.webp", alt: "Cattle silhouetted on a ridge at dusk" },
    stepPics: [{ src: "/herd2.JPEG", alt: "A herd of cattle on open grassland" }, { src: "/herd.JPG", alt: "Cattle grazing on a ranch" }, { src: "/media/site/engineers.webp", alt: "Engineers reviewing model output at laptops" }],
    group: "Beyond the road",
    title: "Herd monitoring",
    short: "Detection and counting of livestock on open range.",
    headline: "The same vision models, pointed at open range",
    accent: "pointed at open range",
    lead: "The detection and tracking we build for roads also counts and follows livestock across large, open land, where riding out to check a herd takes hours.",
    image: { src: "/media/site/cattle.webp", alt: "A rancher on horseback moving a herd of cattle across open grassland", position: "50% 55%" },
    problem: "On large ranches, counting animals and spotting stragglers means long rides out. Missing animals are found late.",
    approach: [
      { title: "Capture from cameras or drones", text: "Video from fixed cameras or flights over the range." },
      { title: "Detect and count", text: "Animals detected and tracked across frames so each is counted once." },
      { title: "Report changes", text: "Counts over time and alerts when numbers drop." },
    ],
    outcomes: ["Herd counts without riding out", "Tracking across frames", "Changes over time"],
    products: [],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
