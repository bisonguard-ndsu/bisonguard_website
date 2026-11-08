/**
 * Header navigation. Items with `panel` open a full-width mega panel;
 * items with only `href` are ordinary links.
 */
export type NavLink = { label: string; href: string; description?: string; status?: string };
export type NavGroup = { heading?: string; links: NavLink[] };
export type NavPanel = {
  intro: string;
  all: { label: string; href: string };
  groups: NavGroup[];
};
export type NavItem = { id: string; label: string; href: string; panel?: NavPanel };

export const nav: NavItem[] = [
  {
    id: "products",
    label: "Products",
    href: "/products",
    panel: {
      intro: "Software that reads road and traffic video and writes the record.",
      all: { label: "All products", href: "/products" },
      groups: [
        {
          links: [
            {
              label: "AdAMS",
              href: "/products/adams",
              description: "Drive video → mapped assets, rated pavement defects",
              status: "In service",
            },
            {
              label: "TMC",
              href: "/products/traffic-management",
              description: "Live cameras → monitoring, recordings, traffic analysis",
              status: "In service",
            },
            {
              label: "Turnflow",
              href: "/products/turnflow",
              description: "Intersection video → movement counts, engineering reports",
              status: "In service",
            },
            {
              label: "RoadLogger",
              href: "/products/roadlogger",
              description: "Field inspections → cases tracked to repair",
              status: "In service",
            },
          ],
        },
      ],
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    href: "/solutions",
    panel: {
      intro: "Start from the problem. Each solution shows the method and a project where we've done it.",
      all: { label: "All solutions", href: "/solutions" },
      groups: [
        {
          heading: "Roads and assets",
          links: [
            { label: "Road asset inventory", href: "/solutions/road-asset-inventory", description: "Signs, markings, guardrails" },
            { label: "Pavement condition", href: "/solutions/pavement-condition", description: "Roughness, distress, PCI" },
            { label: "Field inspection", href: "/solutions/field-inspection", description: "Issues and cases from the field" },
          ],
        },
        {
          heading: "Traffic",
          links: [
            { label: "Traffic studies", href: "/solutions/traffic-studies", description: "Counts, headways, occupancy" },
            { label: "Traffic operations", href: "/solutions/traffic-operations", description: "Live cameras and incidents" },
          ],
        },
        {
          heading: "Beyond the road",
          links: [{ label: "Herd monitoring", href: "/solutions/herd-monitoring", description: "Livestock on open range" }],
        },
      ],
    },
  },
  {
    id: "research",
    label: "Research",
    href: "/research",
    panel: {
      intro: "The products rest on published work by our team in pavement analysis, traffic safety and multimodal AI.",
      all: { label: "Research overview", href: "/research" },
      groups: [
        {
          links: [
            { label: "Publications", href: "/research/publications", description: "Papers by our team" },
            { label: "Pavement analysis", href: "/research#pavement", description: "Distress, roughness, condition indices" },
            { label: "Traffic safety", href: "/research#traffic-safety", description: "Anomalies, violations, driver behaviour" },
            { label: "Multimodal AI", href: "/research#multimodal", description: "Vision-language models for roads" },
          ],
        },
      ],
    },
  },
  {
    id: "company",
    label: "Company",
    href: "/company",
    panel: {
      intro: "Engineers and researchers who would rather see a model run on a live network than sit in a paper.",
      all: { label: "About InfiniCity Labs", href: "/company" },
      groups: [
        {
          links: [
            { label: "About", href: "/company", description: "What we do and how we work" },
            { label: "Team", href: "/company/team", description: "The people behind the products" },
            { label: "Careers", href: "/company/careers", description: "Engineering and research roles" },
            { label: "Contact", href: "/contact", description: "Write to us" },
          ],
        },
      ],
    },
  },
  { id: "work", label: "Work", href: "/work" },
];
