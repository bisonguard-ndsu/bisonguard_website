/**
 * Products. Status is shown on the site (header panel, product register,
 * product pages) — change it here and it changes everywhere.
 */
export type ProductStatus = "in-service" | "pilot" | "in-development" | "internal";

export const statusLabel: Record<ProductStatus, string> = {
  "in-service": "In service",
  pilot: "Pilot",
  "in-development": "In development",
  internal: "Internal tool",
};

export type Product = {
  slug: string;
  name: string;
  /** Full name, shown under the short name when it adds information */
  fullName?: string;
  href: string;
  status: ProductStatus;
  input: string;
  output: string;
  summary: string;
  /** Image used in the product register and menu (path under /public) */
  image?: { src: string; alt: string; width: number; height: number };
  /** Key in apps.ts if the product has a sign-in */
  appKey?: string;
};

export const products: Product[] = [
  {
    slug: "adams",
    name: "AdAMS",
    fullName: "Advanced Asset Management System",
    href: "/products/adams",
    status: "in-service",
    input: "Drive video from a phone",
    output: "Mapped assets, graded defects, ride quality",
    summary:
      "Drive the network once with a phone and get every sign, marking, light and pavement defect geolocated, graded and ready for a work order.",
    image: {
      src: "/media/sign-card-r7-1.webp",
      alt: "AdAMS sign record for an R7-1 no-parking sign, track 23, with the road frame it was detected in and its GPS position.",
      width: 480,
      height: 374,
    },
    appKey: "adams",
  },
  {
    slug: "traffic-management",
    name: "TMC",
    href: "/products/traffic-management",
    status: "in-service",
    input: "Your intersection and corridor cameras",
    output: "Live wall, recordings, traffic measures",
    summary:
      "Watch every camera live, record on a schedule and turn footage into volume, speed, occupancy and density figures.",
    appKey: "tmc",
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    href: "/products/turnflow",
    status: "in-service",
    input: "Recorded or live intersection video",
    output: "Movement counts and engineering reports",
    summary:
      "Turning-movement counts, headways and occupancy from video, with evidence for every vehicle and a report you can submit.",
    appKey: "turnflow",
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    href: "/products/roadlogger",
    status: "in-service",
    input: "A phone in the field",
    output: "Cases tracked from triage to repair",
    summary:
      "Inspections on the phones crews already carry, even offline, with every case followed to verified repair on a shared map.",
    appKey: "roadlogger",
  },
  {
    slug: "bisonguard",
    name: "BisonGuard",
    href: "/products/bisonguard",
    status: "pilot",
    input: "Cameras on open range",
    output: "Wildlife alerts, recordings, population trends",
    summary:
      "A command centre for conservation teams, rangers and researchers: detection across every camera, alerts with response timers, and population trends over time.",
  },
];

/** Smaller platform pieces mentioned alongside the four products. */
export const platformExtras = [
  {
    name: "AdAMS Annotate",
    status: "internal" as ProductStatus,
    line: "Our labelling platform for traffic signs, pavement distress and road assets — where AdAMS training data is made.",
  },
  {
    name: "PaveXpert",
    status: "in-development" as ProductStatus,
    line: "An agent built on AdAMS data that answers questions about your network in plain language.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)!;
