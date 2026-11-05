/**
 * Copy and pictures for each product page. Facts come from the product
 * repositories (webapp modules, mobile apps, Turnflow docs). Figures marked
 * in evidence.ts still need confirming before launch.
 */
import type { Pic, Shot } from "@/components/page";

export type ProductPage = {
  slug: string;
  name: string;
  /** h1: the category and the buyer, 2 to 8 words */
  h1: string;
  lead: string;
  hero: { pic?: Pic; shot?: Shot };
  facts: [string, string][];
  steps: { title: string; text: string; img: string; alt: string }[];
  features: { title: string; text: string }[];
  featuresPic: Pic;
  showcase: { h2: string; lead: string; lines: string[]; pic?: Pic; shot?: Shot };
  faq: { q: string; a: string }[];
  solutions: string[];
};

export const productPages: ProductPage[] = [
  {
    slug: "adams",
    name: "AdAMS",
    h1: "Road asset management from phone video",
    lead: "AdAMS turns drive video into a geolocated record of every sign, marking, light and pavement defect on your network, with the frame behind each one.",
    hero: { shot: { src: "/media/site/adams-map.webp", alt: "The AdAMS asset map of Fargo and West Fargo with sign and road-condition layers switched on" } },
    facts: [
      ["Signs mapped in Fargo", "118"],
      ["Segments rated", "2,267"],
      ["Asset layers", "12"],
    ],
    steps: [
      { title: "Record the drive", text: "Mount a phone on the dashboard and drive. Video and GPS upload once you are back on Wi-Fi.", img: "/media/site/phone-dashboard.webp", alt: "A phone on a car dashboard recording the road ahead" },
      { title: "Detect every asset", text: "Models classify each sign and defect and follow it across frames, so it is counted once.", img: "/media/site/highway-sign.webp", alt: "An overhead highway sign above a freeway" },
      { title: "Act from the map", text: "Open any asset with its photo and condition, raise a work order and export the report.", img: "/media/site/adams-sign.webp", alt: "An R7-1 no-parking sign record opened on the AdAMS map" },
    ],
    features: [
      { title: "Traffic sign inventory", text: "Every sign classified to its MUTCD code, with its frame, track and position." },
      { title: "Pavement distress", text: "Cracks, potholes and raveling graded from level 1 to level 5." },
      { title: "Ride quality", text: "An IRI roughness score for every segment you drive." },
      { title: "One asset map", text: "Signs, markings, guardrails, lights, hydrants and signals as layers." },
      { title: "Work orders and alerts", text: "Turn a defect into a work order and follow it to a verified repair." },
    ],
    featuresPic: { src: "/media/site/markings.webp", alt: "Fresh white lane markings on dark asphalt" },
    showcase: {
      h2: "Every detection, with its evidence",
      lead: "Open a recording to see what the models found, how often and where in the video. An engineer can check any detection in seconds.",
      lines: ["Detections counted by class for each recording", "Scrub to the frame where a sign was seen", "Track IDs keep one sign from being counted twice"],
      shot: { src: "/media/site/adams-recording.webp", alt: "An AdAMS recording with its sign detection summary listing stop, no-parking and do-not-enter signs" },
    },
    faq: [
      { q: "What hardware do we need?", a: "A phone with the AdAMS app on a dashboard mount. No survey vehicle or extra sensors." },
      { q: "Which assets does it find?", a: "Signs, markings, street lights, signals, guardrails, hydrants, poles and delineators, plus pavement distress and roughness." },
      { q: "How do we check a detection?", a: "Every asset links to the frame it was seen in and the recording it came from." },
      { q: "Can we keep the inventory current?", a: "Yes. Repeat drives update the map, and missing or damaged assets are flagged for work orders." },
    ],
    solutions: ["road-asset-inventory", "pavement-condition", "field-inspection"],
  },
  {
    slug: "traffic-management",
    name: "TMC",
    h1: "Traffic camera monitoring for operations teams",
    lead: "TMC brings the cameras you already run into one workspace: watch them live, record on a schedule and turn footage into volume, speed, occupancy and density.",
    hero: { pic: { src: "/media/hero/tmc.webp", alt: "A traffic camera mounted on a pole against the sky", position: "40% 50%" } },
    facts: [
      ["Monitoring", "24/7"],
      ["Measures from video", "4"],
      ["Workspace", "1"],
    ],
    steps: [
      { title: "Connect your cameras", text: "Add the intersection and corridor cameras you already operate. Each appears on the map and the wall.", img: "/media/site/interchange.webp", alt: "An interchange from above with traffic on every ramp" },
      { title: "Monitor and record", text: "Watch feeds live, record when something happens, or schedule recordings for the periods you study.", img: "/media/site/night-intersection.webp", alt: "A city intersection at night" },
      { title: "Measure the traffic", text: "Run any recording for volume, speed profiles, occupancy and density, then share the report.", img: "/media/site/control-room.webp", alt: "Camera footage with each vehicle and sign boxed by the model" },
    ],
    features: [
      { title: "Live wall", text: "Every feed on one wall and every camera on a map, with its status." },
      { title: "Scheduled recording", text: "Record by schedule or on demand, searchable by camera and time." },
      { title: "Volume throughput", text: "Vehicle counts over any interval for corridor and signal work." },
      { title: "Speed profiles", text: "Speeds along each camera's view, from the same footage." },
      { title: "Occupancy and density", text: "How full each approach is and for how long, measured." },
    ],
    featuresPic: { src: "/media/site/signal-traffic.webp", alt: "Cars waiting at a signalised intersection at night" },
    showcase: {
      h2: "Built for the operations room",
      lead: "A clear live wall, cameras on a map and recordings one click away, for the people who watch the network every day.",
      lines: ["Live wall and camera map", "Recording sessions by camera and time", "Alerts routed to the right operator"],
      pic: { src: "/media/hero/company.webp", alt: "A city interchange at night from above" },
    },
    faq: [
      { q: "Do we need new cameras?", a: "No. TMC works with the intersection and corridor cameras you already operate." },
      { q: "Can we record only some hours?", a: "Yes. Schedule recordings for the periods you study, or start one on demand." },
      { q: "What does it measure?", a: "Volume, speed, occupancy and density, from any recording." },
      { q: "Who sees the alerts?", a: "Alerts go to the operator responsible for that camera or corridor." },
    ],
    solutions: ["traffic-operations", "traffic-studies"],
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    h1: "Turning-movement counts for traffic engineers",
    lead: "Turnflow counts traffic from intersection video: draw the approaches, name the movements and get counts, headways and occupancy with the clip behind every vehicle.",
    hero: { pic: { src: "/media/hero/turnflow.webp", alt: "A busy road intersection seen from directly above" } },
    facts: [
      ["Public cameras listed", "27,000+"],
      ["US states covered", "28"],
      ["Report formats", "PDF, Word"],
    ],
    steps: [
      { title: "Choose the footage", text: "Upload a recording, or pick a live camera from the directory and record the window you need.", img: "/media/site/signal-traffic.webp", alt: "Cars at a signalised intersection at night" },
      { title: "Set up the count", text: "Draw zones or example paths for each approach, name the movements and test the layout.", img: "/media/site/plans.webp", alt: "Two engineers pointing at a printed plan" },
      { title: "Review and report", text: "Check counts against the evidence video, compare sessions, then export an engineering report.", img: "/media/site/meeting.webp", alt: "A team reviewing results around a long table" },
    ],
    features: [
      { title: "Turning-movement counts", text: "Counts by movement and interval, from zone pairs or paths." },
      { title: "Headways and occupancy", text: "Time between vehicles and how long a detector area is occupied." },
      { title: "Live camera recording", text: "A camera directory and map; up to four recordings at once." },
      { title: "Evidence for every count", text: "Annotated video for each passage, so any number can be checked." },
      { title: "Engineering reports", text: "PDF and Word reports that keep observed and adjusted values apart." },
    ],
    featuresPic: { src: "/media/site/interchange.webp", alt: "A highway interchange from above with traffic on every ramp" },
    showcase: {
      h2: "Counts an engineer can defend",
      lead: "Every count traces back to the vehicle path that produced it. Reviewers watch the evidence, validate samples and compare runs before anything is shared.",
      lines: ["Evidence video for each passage", "Session comparison and validation", "Missing time is tracked, never read as zero traffic"],
      pic: { src: "/media/site/night-intersection.webp", alt: "A city intersection at night with traffic moving through" },
    },
    faq: [
      { q: "Where does the video come from?", a: "Your own recordings, or a public camera picked from the built-in directory." },
      { q: "How many cameras can we record at once?", a: "Up to four scheduled recordings at a time." },
      { q: "Can we check a count?", a: "Yes. Each passage has its own annotated clip, so any number can be reviewed." },
      { q: "What does the report look like?", a: "A PDF or Word engineering report with observed, adjusted and forecast values kept apart." },
    ],
    solutions: ["traffic-studies"],
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    h1: "Field inspection app for road crews",
    lead: "RoadLogger puts inspections on the phones your crews already carry. Log what you find, even offline, and follow each case to a verified repair.",
    hero: { pic: { src: "/media/site/paving.webp", alt: "A paving machine laying fresh asphalt on a residential street" } },
    facts: [
      ["Stages to a repair", "5"],
      ["Works", "Offline"],
      ["Shared map", "1"],
    ],
    steps: [
      { title: "Inspect on the roadside", text: "Capture an issue with photos, location and severity. With no signal it waits and sends later.", img: "/media/hero/roadlogger.webp", alt: "Cracked asphalt across a worn yellow lane marking" },
      { title: "Triage in the office", text: "Engineers review new defects, set priority and decide: monitor, schedule a repair or close.", img: "/media/site/hardhat.webp", alt: "A road worker in a hard hat" },
      { title: "Repair and verify", text: "Crews update the case as work goes on. It closes only when the repair is verified.", img: "/media/site/roller.webp", alt: "A road roller compacting fresh asphalt" },
    ],
    features: [
      { title: "Works offline", text: "Inspections queue on the phone and sync when the crew is back in coverage." },
      { title: "Case lifecycle", text: "Awaiting triage, monitored, in repair, resolved: one owner per case." },
      { title: "Map of cases", text: "Every open case on the map, filtered by severity, type and team." },
      { title: "Inspection logs", text: "Daily inspections across the network, searchable by date and route." },
      { title: "Supervisor dashboard", text: "An action queue and the repair pipeline in one view." },
    ],
    featuresPic: { src: "/media/site/road-crew.webp", alt: "A paving crew at work on a road" },
    showcase: {
      h2: "From the roadside to the office in one step",
      lead: "What an inspector logs is on the supervisor's dashboard as soon as the phone reconnects, with photos and location attached.",
      lines: ["Photos, location and severity on every case", "An action queue for supervisors", "Full history for audits"],
      pic: { src: "/media/site/guardrail.webp", alt: "A divided highway with a guardrail and overhead sign" },
    },
    faq: [
      { q: "Does it work without signal?", a: "Yes. Inspections queue on the phone and send on their own when it reconnects." },
      { q: "Which phones does it run on?", a: "The phones your crews already carry." },
      { q: "Who closes a case?", a: "A case closes only when the repair is verified, with a photo on record." },
      { q: "Can contractors use it?", a: "Yes. Contractors can log and update cases for the agency they work for." },
    ],
    solutions: ["field-inspection", "pavement-condition"],
  },
];

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug);
