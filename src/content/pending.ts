/**
 * Pages that are linked from the navigation but built in a later phase
 * (plan §7). Each renders a short holding page and is excluded from search.
 * Remove an entry when its real page lands.
 */
export type Pending = { path: string; label: string; title: string; lead: string; phase: 2 | 3 | 4 };

export const pending: Pending[] = [
  { path: "products", label: "Products", title: "All products", lead: "AdAMS, the Traffic Management System, Turnflow and RoadLogger — what each takes in and gives back.", phase: 2 },
  { path: "products/traffic-management", label: "Product", title: "Traffic Management System", lead: "Your existing intersection cameras, watched continuously. Anomalies flagged as they happen, recordings scheduled and archived.", phase: 2 },
  { path: "products/turnflow", label: "Product", title: "Turnflow", lead: "Turning-movement counts from video, each traceable to the vehicle path that produced it.", phase: 2 },
  { path: "products/roadlogger", label: "Product", title: "RoadLogger", lead: "Field inspections on a phone. Log an issue, pin it to the map, open a case.", phase: 2 },
  { path: "solutions", label: "Solutions", title: "Solutions by problem", lead: "Start from the problem you have; each solution shows the method and a project.", phase: 3 },
  { path: "solutions/road-asset-inventory", label: "Solution", title: "Road asset inventory", lead: "Signs, markings and guardrails, inventoried from survey video.", phase: 3 },
  { path: "solutions/pavement-condition", label: "Solution", title: "Pavement condition", lead: "Roughness, distress and condition indices for every segment driven.", phase: 3 },
  { path: "solutions/field-inspection", label: "Solution", title: "Field inspection", lead: "Issues and cases logged from the field and tracked to closure.", phase: 3 },
  { path: "solutions/traffic-studies", label: "Solution", title: "Traffic studies", lead: "Counts, headways and occupancy from video, ready for an engineering report.", phase: 3 },
  { path: "solutions/traffic-operations", label: "Solution", title: "Traffic operations", lead: "Live camera monitoring and incident detection for operations centres.", phase: 3 },
  { path: "solutions/herd-monitoring", label: "Solution", title: "Herd monitoring", lead: "Detection and monitoring of livestock on open range.", phase: 3 },
  { path: "work", label: "Work", title: "Projects", lead: "Networks we've surveyed and studies we've delivered.", phase: 3 },
  { path: "work/fargo-west-fargo-survey", label: "Project", title: "Fargo – West Fargo survey", lead: "Traffic signs and pavement roughness across Fargo and West Fargo, North Dakota, from phone video.", phase: 3 },
  { path: "research", label: "Research", title: "Research", lead: "Pavement analysis, traffic safety and multimodal AI — the work our products rest on.", phase: 3 },
  { path: "research/publications", label: "Research", title: "Publications", lead: "Papers by our team at CVPR workshops, the Transportation Research Board and in transportation journals.", phase: 3 },
  { path: "company", label: "Company", title: "About InfiniCity Labs", lead: "Engineers and researchers building software for the roads people drive every day.", phase: 4 },
  { path: "company/team", label: "Company", title: "Team", lead: "The people behind the products.", phase: 4 },
  { path: "company/careers", label: "Company", title: "Careers", lead: "Engineering and research roles on models that run on real roads.", phase: 4 },
  { path: "terms", label: "Legal", title: "Terms of use", lead: "Terms for using this website.", phase: 4 },
];
