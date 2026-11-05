import type { Pic, Shot } from "@/components/page";

export type Project = {
  slug: string;
  title: string;
  accent: string;
  place: string;
  summary: string;
  hero: Pic;
  products: string[];
  solutions: string[];
  stats: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  results: string;
  gallery: (Shot & { width: number; height: number; label?: string })[];
};

export const projects: Project[] = [
  {
    slug: "fargo-west-fargo-survey",
    title: "Signs and pavement across Fargo and West Fargo, from phone video",
    accent: "from phone video",
    place: "Fargo – West Fargo, North Dakota",
    summary:
      "A citywide survey of traffic signs and pavement roughness across two neighbouring cities, captured with a phone on the dashboard and processed by AdAMS.",
    hero: { src: "/media/site/adams-iri.webp", alt: "AdAMS map of Fargo and West Fargo with road segments coloured by roughness", position: "50% 50%" },
    products: ["adams"],
    solutions: ["road-asset-inventory", "pavement-condition"],
    stats: [
      { value: "118", label: "traffic signs detected and geolocated" },
      { value: "2,267", label: "road segments rated for roughness" },
      { value: "3,085", label: "frames analysed in a single 1 min 42 s recording" },
    ],
    challenge:
      "The cities needed a current inventory of regulatory and warning signs and a view of pavement condition across the network, without sending crews to walk every corridor.",
    approach: [
      "Survey drives recorded with the AdAMS app on a dashboard-mounted phone.",
      "Recordings processed for traffic signs, each classified to its MUTCD code and tracked across frames so it was counted once.",
      "Ride quality computed for every segment driven and graded from excellent to poor.",
      "Results published to the AdAMS asset map, with the evidence frame and GPS position for every sign.",
    ],
    results:
      "Engineers can open any sign or segment on the map, see the frame it came from, and plan replacements and resurfacing from one current record.",
    gallery: [
      { src: "/media/site/adams-map.webp", alt: "AdAMS asset map with traffic-sign and road-condition layers", width: 1651, height: 871, label: "Asset map" },
      { src: "/media/site/adams-sign.webp", alt: "An R7-1 no-parking sign record opened on the AdAMS map, with its video frame and GPS position", width: 1647, height: 882, label: "Sign record" },
      { src: "/media/site/adams-recording.webp", alt: "Recording 74 with its sign detection summary", width: 1918, height: 1021, label: "Recording 74" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
