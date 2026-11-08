/**
 * Everything the site claims as evidence lives here: figures, partners,
 * testimonials. `verified: false` items render in development but make
 * `npm run prelaunch` fail until someone confirms them.
 */

export type Metric = {
  id: string;
  value: string;
  label: string;
  /** Where the number comes from */
  source: string;
  verified: boolean;
};

export const metrics = {
  fargoSigns: {
    id: "fargoSigns",
    value: "118",
    label: "traffic signs geolocated",
    source: "AdAMS asset map, Fargo – West Fargo project (adams-2.png, Traffic Signs layer)",
    verified: false,
  },
  fargoSegments: {
    id: "fargoSegments",
    value: "2,267",
    label: "road segments rated for roughness",
    source: "AdAMS asset map, Fargo – West Fargo project (adams-2.png, Road Conditions layer)",
    verified: false,
  },
  rec74Signs: {
    id: "rec74Signs",
    value: "14",
    label: "signs detected in one 1 min 42 s recording",
    source: "AdAMS analysis run, Recording 74 (traffic-sign-geolocation_2.png)",
    verified: false,
  },
  rec74Frames: {
    id: "rec74Frames",
    value: "3,085",
    label: "frames analysed in that recording",
    source: "AdAMS analysis run, Recording 74 (traffic-sign-geolocation_2.png)",
    verified: false,
  },
} satisfies Record<string, Metric>;

export type Partner = { name: string; full: string; logo: string; verified: boolean };

/** Cleared for use. Role (client / funder / collaborator) still to confirm — plan §5.3. */
export const partners: Partner[] = [
  { name: "NDDOT", full: "North Dakota Department of Transportation", logo: "/nddot.jpg", verified: true },
  { name: "NDSU", full: "North Dakota State University", logo: "/ndsu.png", verified: true },
  { name: "NSF", full: "U.S. National Science Foundation", logo: "/usnsf.jpg", verified: true },
  { name: "Sustein", full: "Sustein", logo: "/sustein.png", verified: true },
  { name: "Farms", full: "Farms", logo: "/farms.avif", verified: true },
];

export const testimonial = {
  quote:
    "The quality of research and technological innovation from InfiniCity Labs consistently exceeds expectations. Their asset management solutions have set new standards for infrastructure monitoring and maintenance optimization.",
  name: "Elijah Kofi Osei",
  org: "The Greyspaces Ltd.",
  image: { src: "/elijah.jpg", width: 1920, height: 1440 },
  verified: true,
};

/** Detection summary for Recording 74, read from the AdAMS analysis screen. */
export const rec74 = {
  recording: "Recording 74",
  frames: "3,085",
  duration: "1:42",
  frameTime: "0:53",
  signs: 14,
  classes: [
    { name: "No Parking (various plaques)", count: 3 },
    { name: "Do Not Enter", count: 2 },
    { name: "Stop", count: 2 },
    { name: "No Parking Any Time", count: 2 },
    { name: "R10-12", count: 1 },
    { name: "No U-Turn", count: 1 },
    { name: "R4-7", count: 1 },
    { name: "R2-140", count: 1 },
  ],
};
