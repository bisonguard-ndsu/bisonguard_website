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
    input: "Phone video from a survey drive",
    output: "Sign inventory, pavement roughness and condition, mapped",
    summary:
      "Mount a phone, drive the network, and get back every sign, its position and condition, and a roughness score for each segment.",
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
    name: "Traffic Management System",
    href: "/products/traffic-management",
    status: "in-service",
    input: "Live intersection and corridor cameras",
    output: "Anomaly alerts, scheduled recordings, traffic analysis",
    summary:
      "Connect the cameras you already run. The system watches them continuously, flags anomalies as they happen, and records on a schedule.",
    appKey: "tmc",
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    href: "/products/turnflow",
    status: "in-service",
    input: "Recorded or live intersection video",
    output: "Turning-movement counts, headways, occupancy, engineering reports",
    summary:
      "Turning-movement counts from video, each one traceable to the vehicle path that produced it, delivered as an engineering report.",
    appKey: "turnflow",
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    href: "/products/roadlogger",
    status: "in-service",
    input: "A phone in the field",
    output: "Inspections, issues and cases on a shared map",
    summary:
      "Field inspection on a phone. Log what you find, pin it to the map, and open a case your office can track to closure.",
    appKey: "roadlogger",
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
