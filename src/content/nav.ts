export const DEMO_HREF = "/contact";
export const APP_HREF = "https://app.infinicitylabs.org";
export const CONTACT_EMAIL = "info@infinicitylabs.org";

export type MenuLink = { name: string; href: string; note: string };
export type MenuGroup = { title: string; links: MenuLink[] };

export const productGroups: MenuGroup[] = [
  {
    title: "Roads and assets",
    links: [
      { name: "AdAMS", href: "/products/adams", note: "Sign inventory and road condition" },
      { name: "PaveXpert", href: "/products/pavexpert", note: "Agentic pavement assessment" },
      { name: "RoadLogger", href: "/products/roadlogger", note: "Field inspections and work" },
      { name: "AdAMS Annotate", href: "/products/annotate", note: "Image and video labelling" },
    ],
  },
  {
    title: "Traffic",
    links: [
      { name: "TMC", href: "/products/tmc", note: "Camera monitoring and vehicle analysis" },
      { name: "Turnflow", href: "/products/turnflow", note: "Turning-movement studies" },
    ],
  },
  {
    title: "Wildlife",
    links: [
      { name: "BisonGuard", href: "/products/bisonguard", note: "Herd detection near roads" },
    ],
  },
];

export const solutionLinks: MenuLink[] = [
  { name: "Infrastructure management", href: "/solutions/infrastructure-management", note: "Assets, pavement and evidence in one record" },
  { name: "Traffic engineering", href: "/solutions/traffic-engineering", note: "Counts, movements and reports" },
  { name: "Field operations", href: "/solutions/field-operations", note: "Inspections that follow the crew" },
  { name: "Custom visual AI", href: "/solutions/visual-ai", note: "A model built for your problem" },
];

export const companyLinks: MenuLink[] = [
  { name: "About us", href: "/company", note: "Who we are and how we work" },
  { name: "Team", href: "/team", note: "Engineers and researchers" },
  { name: "Research", href: "/research", note: "Papers and challenge results" },
  { name: "Careers", href: "/careers", note: "Open roles" },
];

export type NavItem =
  | { name: string; href: string; menu?: undefined }
  | { name: string; href: string; menu: "products" | "solutions" | "company" };

export const mainNav: NavItem[] = [
  { name: "Products", href: "/products", menu: "products" },
  { name: "Solutions", href: "/solutions", menu: "solutions" },
  { name: "Company", href: "/company", menu: "company" },
  { name: "Contact", href: "/contact" },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/infinicity-labs/" },
  { name: "GitHub", href: "https://github.com/InfiniCityLabs" },
  { name: "X", href: "https://twitter.com/InfiniCityLabs" },
  { name: "Instagram", href: "https://www.instagram.com/infinicitylabs/" },
];
