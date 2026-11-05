/**
 * Header navigation (nav-mega). A word with `cols` opens a full-width panel on hover
 * and goes to its page on click. Each link line stays under 30 characters.
 */
export type NavLink = { label: string; href: string; line: string };
export type NavCol = { heading: string; links: NavLink[] };
export type NavCard = { href: string; img: string; alt: string; title: string; line: string };
export type NavItem = { label: string; href: string; cols?: NavCol[]; card?: NavCard };

export const nav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    cols: [
      {
        heading: "Roads and assets",
        links: [
          { label: "AdAMS", href: "/products/adams", line: "Signs and defects from video" },
          { label: "RoadLogger", href: "/products/roadlogger", line: "Field cases tracked to repair" },
        ],
      },
      {
        heading: "Traffic",
        links: [
          { label: "TMC", href: "/products/traffic-management", line: "Live cameras and recordings" },
          { label: "Turnflow", href: "/products/turnflow", line: "Turning counts from video" },
        ],
      },
    ],
    card: {
      href: "/products/adams",
      img: "/media/site/adams-sign.webp",
      alt: "An R7-1 no-parking sign record in AdAMS with its video frame and position",
      title: "Sign records in AdAMS",
      line: "Every sign with its frame and GPS",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    cols: [
      {
        heading: "Roads and assets",
        links: [
          { label: "Road asset inventory", href: "/solutions/road-asset-inventory", line: "Signs, markings, guardrails" },
          { label: "Pavement condition", href: "/solutions/pavement-condition", line: "Roughness and distress" },
          { label: "Field inspection", href: "/solutions/field-inspection", line: "Cases from the field" },
        ],
      },
      {
        heading: "Traffic",
        links: [
          { label: "Traffic studies", href: "/solutions/traffic-studies", line: "Counts, headways, occupancy" },
          { label: "Traffic operations", href: "/solutions/traffic-operations", line: "Live cameras and incidents" },
          { label: "Herd monitoring", href: "/solutions/herd-monitoring", line: "Livestock on open range" },
        ],
      },
    ],
    card: {
      href: "/work/fargo-west-fargo-survey",
      img: "/media/site/adams-iri.webp",
      alt: "AdAMS map of Fargo and West Fargo with road segments coloured by roughness",
      title: "Fargo and West Fargo",
      line: "2,267 road segments rated",
    },
  },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  {
    label: "Company",
    href: "/company",
    cols: [
      {
        heading: "Company",
        links: [
          { label: "About", href: "/company", line: "What we build and why" },
          { label: "Team", href: "/company/team", line: "The people behind it" },
          { label: "Careers", href: "/company/careers", line: "Engineering and research" },
        ],
      },
      {
        heading: "Get in touch",
        links: [{ label: "Contact", href: "/contact", line: "Write to the team" }],
      },
    ],
  },
];

/** Footer link columns. */
export const footerCols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Products",
    links: [
      { label: "AdAMS", href: "/products/adams" },
      { label: "TMC", href: "/products/traffic-management" },
      { label: "Turnflow", href: "/products/turnflow" },
      { label: "RoadLogger", href: "/products/roadlogger" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Asset inventory", href: "/solutions/road-asset-inventory" },
      { label: "Pavement condition", href: "/solutions/pavement-condition" },
      { label: "Traffic studies", href: "/solutions/traffic-studies" },
      { label: "All solutions", href: "/solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Team", href: "/company/team" },
      { label: "Careers", href: "/company/careers" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Case studies", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
