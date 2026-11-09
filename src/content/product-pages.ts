/**
 * Copy and imagery for each product page. Facts come from the product
 * repositories (webapp modules, mobile apps, Turnflow docs). Figures marked
 * in evidence.ts still need confirming before launch.
 */
import type { Img } from "@/components/sections";

export type Shot = Img & { width: number; height: number; label?: string };

export type ProductPage = {
  slug: string;
  name: string;
  fullName?: string;
  category: string;
  title: string;
  accent: string;
  lead: string;
  hero: Img;
  card: Img;
  stats: { value: string; label: string }[];
  steps: { title: string; text: string }[];
  features: { title: string; text: string }[];
  showcase: { title: string; accent: string; text: string; points: string[]; visual: { kind: "app"; shot: Shot } | { kind: "photo"; image: Img } }[];
  audience: string[];
  solutions: string[];
};

export const productPages: ProductPage[] = [
  {
    slug: "adams",
    name: "AdAMS",
    fullName: "Advanced Asset Management System",
    category: "Asset management",
    title: "Drive the network once. Map every asset and defect.",
    accent: "Map every asset and defect.",
    lead: "AdAMS turns ordinary drive video into a complete, geolocated record of your road network: every sign, marking, light and signal, every crack and pothole, and the ride quality of every segment.",
    hero: { src: "/media/site/guardrail.webp", alt: "A highway curving through pine forest with guardrails and an overhead sign", position: "50% 55%" },
    card: { src: "/media/products/adams/assets-map.webp", alt: "The AdAMS asset map with signs and road segments plotted across the network", position: "50% 50%" },
    stats: [
      { value: "118", label: "traffic signs geolocated in the Fargo – West Fargo survey" },
      { value: "2,267", label: "road segments rated for roughness in that survey" },
      { value: "5", label: "severity levels for every pavement defect" },
      { value: "12", label: "asset layers on one map" },
    ],
    steps: [
      { title: "Record", text: "Mount a phone on the dashboard and drive with the AdAMS app. Video and GPS upload on their own once you are back on Wi-Fi." },
      { title: "Detect", text: "Our models find and classify signs, markings, lights, signals and pavement distress, follow each across frames and fix its position on the map." },
      { title: "Act", text: "Everything lands on one asset map with photos, condition and severity. Raise work orders, set alerts and export reports for your engineers." },
    ],
    features: [
      { title: "Traffic sign inventory", text: "Every sign classified to its MUTCD code, with the frame it was seen in, its track and its GPS position." },
      { title: "Pavement distress", text: "Cracks, potholes and raveling graded from Level 1 (minor) to Level 5 (critical), so crews see the worst first." },
      { title: "Ride quality", text: "A roughness (IRI) score for every segment you drive, colour-coded from excellent to poor." },
      { title: "One asset map", text: "Signs, road conditions, markings, guardrails, street lights, hydrants, poles, signals and delineators as layers you switch on and off." },
      { title: "Work orders and alerts", text: "Turn a defect into a work order, assign it, and follow it from triage to verified repair." },
      { title: "Reports", text: "Project reports and exports your asset managers can share with leadership and funders." },
    ],
    showcase: [
      {
        title: "Your network, layer by layer",
        accent: "layer by layer",
        text: "The asset map brings every survey together. Filter by layer, project or condition and open any point to see the evidence behind it.",
        points: ["Signs, conditions, markings and furniture on one map", "IRI filter from excellent to poor", "Every point links to its video frame"],
        visual: { kind: "app", shot: { src: "/media/site/adams-map.webp", alt: "The AdAMS asset map of Fargo and West Fargo with sign and road-condition layers switched on", width: 1651, height: 871, label: "AdAMS · Asset map" } },
      },
      {
        title: "Every detection, with its evidence",
        accent: "with its evidence",
        text: "Open a recording to see what the models found, how often, and exactly where in the video. Engineers can check any detection in seconds.",
        points: ["Detections counted by class for each recording", "Scrub to the frame where a sign was seen", "Track IDs keep one sign from being counted twice"],
        visual: { kind: "app", shot: { src: "/media/site/adams-recording.webp", alt: "An AdAMS recording with its sign detection summary listing stop, no-parking and do-not-enter signs", width: 1918, height: 1021, label: "AdAMS · Recording 74" } },
      },
    ],
    audience: ["State and city DOTs", "Municipal public-works teams", "Engineering consultancies", "Toll and highway operators"],
    solutions: ["road-asset-inventory", "pavement-condition"],
  },
  {
    slug: "traffic-management",
    name: "TMC",
    category: "Traffic cameras",
    title: "Every traffic camera, live on one screen",
    accent: "live on one screen",
    lead: "TMC brings the cameras you already run into one workspace: watch them live, record on a schedule, and turn footage into volume, speed, occupancy and density figures your operations team can act on.",
    hero: { src: "/media/site/night-intersection.webp", alt: "A city intersection at night with traffic moving through", position: "50% 50%" },
    card: { src: "/media/products/tmc/card.webp", alt: "Two live MoDOT camera feeds in the TMC record manager", position: "50% 50%" },
    stats: [
      { value: "24/7", label: "live monitoring of connected cameras" },
      { value: "4", label: "traffic measures from video: volume, speed, occupancy, density" },
      { value: "1", label: "workspace for feeds, recordings, analyses and alerts" },
    ],
    steps: [
      { title: "Connect", text: "Add the intersection and corridor cameras you already operate. Each one appears on the map and in the live wall." },
      { title: "Monitor and record", text: "Watch feeds live, start a recording when something happens, or schedule recordings for the periods you study." },
      { title: "Analyse and report", text: "Run analyses on any recording for volume, speed profiles, occupancy and density, then share the report." },
    ],
    features: [
      { title: "Live monitoring", text: "A wall of live feeds and a map of every camera, with its status at a glance." },
      { title: "Scheduled recording", text: "Record by schedule or on demand. Recordings are stored and searchable by camera and time." },
      { title: "Volume throughput", text: "Vehicle counts over any interval, ready for corridor and signal-timing work." },
      { title: "Velocity profiling", text: "Speed profiles along a camera's field of view, from the same footage." },
      { title: "Occupancy and density", text: "How full each approach is and for how long, measured rather than estimated." },
      { title: "Alerts and reports", text: "Operational alerts for your team and exportable reports for every analysis." },
    ],
    showcase: [
      {
        title: "Built for the operations room",
        accent: "the operations room",
        text: "TMC is designed for the people who watch the network every day: a clear live wall, cameras on a map, and recordings one click away.",
        points: ["Live wall and camera map", "Recording sessions by camera and time", "Alerts routed to the right operator"],
        visual: { kind: "photo", image: { src: "/media/site/control-room.webp", alt: "A traffic management centre with a video wall of intersection feeds and an operator at his desk" } },
      },
    ],
    audience: ["Traffic management centres", "City transportation departments", "Corridor and signal engineers"],
    solutions: ["traffic-operations", "traffic-studies"],
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    category: "Movement counts",
    title: "Turning-movement counts, report-ready",
    accent: "report-ready",
    lead: "Turnflow counts traffic from intersection video. Draw the approaches, define the movements and get counts by interval, headways and lane occupancy, with the video evidence for every vehicle and a report you can submit.",
    hero: { src: "/media/site/interchange.webp", alt: "A highway interchange seen from above with traffic on every ramp", position: "50% 50%" },
    card: { src: "/media/products/turnflow/camera9-annotated.webp", alt: "Turnflow's annotated output for Camera 9: tracked vehicles and a count for each movement", position: "50% 50%" },
    stats: [
      { value: "27,000+", label: "public traffic cameras in the built-in directory" },
      { value: "28", label: "US states covered by that directory" },
      { value: "4", label: "cameras recorded at once" },
      { value: "2", label: "report formats: PDF and Word" },
    ],
    steps: [
      { title: "Choose footage", text: "Upload a recording, or pick a live camera from the directory and record the window you need." },
      { title: "Set up the count", text: "Draw zones or example paths for each approach and name the movements. Test the layout before you run it." },
      { title: "Review and report", text: "Check counts against the evidence video, compare sessions, then export an engineering report." },
    ],
    features: [
      { title: "Turning-movement counts", text: "Counts by movement and interval, built from zone pairs or trajectory paths." },
      { title: "Headways and occupancy", text: "Time between vehicles at a lane line and how long a detector area stays occupied." },
      { title: "Live camera recording", text: "A camera directory, a map and a live wall. Schedule up to four recordings at once." },
      { title: "Evidence for every count", text: "Annotated video for each passage, so any number can be checked and defended." },
      { title: "Site studies", text: "Combine observations at one location across periods without double-counting time." },
      { title: "Engineering reports", text: "Professional PDF and Word reports that keep observed, adjusted and forecast values apart." },
    ],
    showcase: [
      {
        title: "Counts you can defend",
        accent: "you can defend",
        text: "Every count in Turnflow traces back to the vehicle path that produced it. Reviewers can watch the evidence, validate samples and compare runs before anything is shared.",
        points: ["Evidence video for each passage", "Session comparison and validation", "Coverage tracked, so missing time is never read as zero traffic"],
        visual: { kind: "photo", image: { src: "/media/site/signal-traffic.webp", alt: "Cars waiting at a signalised intersection at night" } },
      },
    ],
    audience: ["Traffic engineering consultancies", "City and county traffic departments", "Developers preparing traffic impact studies"],
    solutions: ["traffic-studies"],
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    category: "Field inspections",
    title: "Every defect logged, every case tracked to repair",
    accent: "tracked to repair",
    lead: "RoadLogger puts inspections on the phones your crews already carry. Log what you find, even offline, and follow each case from triage to verified repair on a map the whole team shares.",
    hero: { src: "/media/site/roller.webp", alt: "A road roller compacting fresh asphalt beside a traffic cone", position: "50% 60%" },
    card: { src: "/media/products/roadlogger/dashboard.webp", alt: "The RoadLogger dashboard: open cases, the case lifecycle and a map of defects", position: "0% 0%" },
    stats: [
      { value: "5", label: "stages from new defect to verified repair" },
      { value: "Offline", label: "inspections queue on the phone and sync on reconnect" },
      { value: "1", label: "map shared by field crews and the office" },
    ],
    steps: [
      { title: "Inspect", text: "Capture an issue with photos, location and severity. With no signal, it waits in the outbox and sends when you reconnect." },
      { title: "Triage", text: "Engineers review new defects, set priority and decide: monitor, schedule a repair or close." },
      { title: "Repair and verify", text: "Crews update the case as work progresses. It closes only when the repair is verified." },
    ],
    features: [
      { title: "Works offline", text: "Inspections queue on the phone and sync on their own when the crew is back in coverage." },
      { title: "Case lifecycle", text: "Awaiting triage, monitored, active repair, resolved: every case has a clear owner and status." },
      { title: "Map of cases and assets", text: "Every open case pinned to the map, filterable by severity, type and team." },
      { title: "Surveys and inspection logs", text: "Daily inspections recorded across the network, searchable by date and route." },
      { title: "Dashboard", text: "KPIs, an action queue and the repair pipeline in one view for supervisors." },
      { title: "Reports", text: "Inspection and case reports for maintenance planning and audits." },
    ],
    showcase: [
      {
        title: "From the field to the office in one step",
        accent: "in one step",
        text: "What an inspector logs on the roadside is on the supervisor's dashboard as soon as the phone reconnects, with the photos and location attached.",
        points: ["Photos, location and severity on every case", "Action queue for supervisors", "Full history for audits"],
        visual: { kind: "photo", image: { src: "/media/site/paving.webp", alt: "A paving machine laying fresh asphalt on a residential street" } },
      },
    ],
    audience: ["Road maintenance crews", "Public-works supervisors", "Contractors reporting to agencies"],
    solutions: ["field-inspection", "pavement-condition"],
  },
  {
    slug: "bisonguard",
    name: "BisonGuard",
    category: "Wildlife intelligence",
    title: "Protect the herd with real-time intelligence",
    accent: "real-time intelligence",
    lead: "BisonGuard watches the cameras on open range, detects bison and other animals as they appear, raises alerts your team can act on, and keeps every clip as evidence.",
    hero: { src: "/media/herd-ridge.webp", alt: "Bison silhouetted along a ridge at dusk", position: "50% 60%" },
    card: { src: "/media/products/bisonguard/recordings.webp", alt: "BisonGuard recordings of a camera on open range, with detections boxed in each clip", position: "50% 40%" },
    stats: [
      { value: "192", label: "camera clips in the evidence vault" },
      { value: "18 GB", label: "of recorded video across all clips" },
      { value: "24/7", label: "detection across every camera" },
    ],
    steps: [
      { title: "Watch", text: "Cameras on the range stream to a live feed. Detection runs on every camera, around the clock." },
      { title: "Alert", text: "Each detection raises an alert with its species, priority and time, so the team knows what to look at first." },
      { title: "Respond and learn", text: "Investigate, resolve and keep the clip. Over time the alerts build a picture of the population." },
    ],
    features: [
      { title: "Live feed", text: "Every camera on one screen, with detections drawn on the video." },
      { title: "Species alerts", text: "Bison, turkey and other animals detected and raised as alerts with a priority." },
      { title: "Incident response", text: "Alerts move from active to investigating to resolved, with response timers." },
      { title: "Evidence vault", text: "Recorded clips kept, searchable by time and ready to download." },
      { title: "Analytics", text: "Population intelligence over time, built from the detections." },
      { title: "Team access", text: "Accounts for conservation teams, rangers and research partners." },
    ],
    showcase: [
      {
        title: "Every sighting, kept as evidence",
        accent: "kept as evidence",
        text: "Each detection is recorded with the zone it happened in, so researchers can go back to any sighting and see it for themselves.",
        points: ["Clips searchable by date", "Detection zones drawn on the video", "Download any clip"],
        visual: {
          kind: "app",
          shot: { src: "/media/products/bisonguard/recordings.webp", alt: "The BisonGuard recordings vault with 192 clips and 18 GB of video", width: 1714, height: 910, label: "BisonGuard · Recordings" },
        },
      },
      {
        title: "Alerts the team can act on",
        accent: "can act on",
        text: "Every detection becomes an alert with its species, priority and status, so nothing seen by a camera is missed.",
        points: ["Priority and status on every alert", "Active, investigating, resolved", "Filter and search the history"],
        visual: {
          kind: "app",
          shot: { src: "/media/products/bisonguard/alerts.webp", alt: "The BisonGuard alerts list with bison and turkey detections", width: 1714, height: 914, label: "BisonGuard · Alerts" },
        },
      },
    ],
    audience: ["Conservation teams", "Rangers", "Research institutions"],
    solutions: ["herd-monitoring"],
  },
];

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug);
