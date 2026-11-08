/**
 * Publications by team members, taken from aboah1994.github.io (Nov 2026).
 * `year: null` means the source page did not show a year — confirm before launch.
 * Area tags drive the filters on /research and the "research behind it" blocks.
 */
export type Area = "pavement" | "traffic-safety" | "multimodal" | "mobility";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number | null;
  url: string | null;
  areas: Area[];
};

export const publications: Publication[] = [
  {
    title: "Enhancing traffic safety with parallel dense video captioning for end-to-end event analysis",
    authors: "M. Shoman, D. Wang, A. Aboah, M. Abdel-Aty",
    venue: "CVPR 2024 Workshops",
    year: 2024,
    url: "https://arxiv.org/abs/2404.08229",
    areas: ["traffic-safety", "multimodal"],
  },
  {
    title: "Low-light image enhancement framework for improved object detection in fisheye lens datasets",
    authors: "D. Q. Tran, A. Aboah, Y. Jeon, M. Shoman, M. Park, S. Park",
    venue: "CVPR 2024 Workshops",
    year: 2024,
    url: "https://arxiv.org/abs/2404.10078",
    areas: ["traffic-safety"],
  },
  {
    title: "Image2PCI: a multitask learning framework for estimating pavement condition indices directly from images",
    authors: "N. J. Owor, H. Du, A. Daud, A. Aboah, Y. Adu-Gyamfi",
    venue: "Transportation Research Board 103rd Annual Meeting",
    year: 2024,
    url: "https://arxiv.org/abs/2310.08538",
    areas: ["pavement"],
  },
  {
    title: "Edge computing-enabled road condition monitoring: system development and evaluation",
    authors: "A. Daud, M. Amo-Boateng, N. J. Owor, A. Aboah, Y. Adu-Gyamfi",
    venue: "Transportation Research Board 103rd Annual Meeting",
    year: 2024,
    url: "https://arxiv.org/abs/2310.05321",
    areas: ["pavement"],
  },
  {
    title: "3D object detection and high-resolution traffic parameters extraction using low-resolution LiDAR data",
    authors: "L. Zhang, X. Yu, A. Aboah, Y. Adu-Gyamfi",
    venue: "Transportation Research Board 103rd Annual Meeting",
    year: 2024,
    url: "https://arxiv.org/abs/2401.06946",
    areas: ["mobility"],
  },
  {
    title: "DeepSegmenter: temporal action localization for detecting anomalies in untrimmed naturalistic driving videos",
    authors: "A. Aboah, U. Bagci, A. R. Mussah, N. J. Owor, Y. Adu-Gyamfi",
    venue: "CVPR 2023 Workshops",
    year: 2023,
    url: "https://arxiv.org/abs/2304.08261",
    areas: ["traffic-safety"],
  },
  {
    title: "Real-time multi-class helmet violation detection using few-shot data sampling technique and YOLOv8",
    authors: "A. Aboah, B. Wang, U. Bagci, Y. Adu-Gyamfi",
    venue: "CVPR 2023 Workshops",
    year: 2023,
    url: "https://arxiv.org/abs/2304.08256",
    areas: ["traffic-safety"],
  },
  {
    title: "Classification of human driver distraction using 3D convolutional neural networks",
    authors: "K. Kwakye, A. Aboah, Y. Seong, S. Yi",
    venue: "Proceedings of the HFES Annual Meeting",
    year: 2023,
    url: "https://doi.org/10.1177/21695067231192576",
    areas: ["traffic-safety"],
  },
  {
    title: "A region-based deep learning approach to automated retail checkout",
    authors: "M. Shoman, A. Aboah, Y. Adu-Gyamfi et al.",
    venue: "CVPR 2022 Workshops",
    year: 2022,
    url: "https://arxiv.org/abs/2204.08584",
    areas: ["multimodal"],
  },
  {
    title: "A vision-based system for traffic anomaly detection using deep learning and decision trees",
    authors: "A. Aboah, M. Shoman, V. Mandal, Y. Adu-Gyamfi et al.",
    venue: "CVPR 2021 Workshops",
    year: 2021,
    url: "https://arxiv.org/abs/2104.06856",
    areas: ["traffic-safety"],
  },
  {
    title: "Driver maneuver detection and analysis using time series segmentation and classification",
    authors: "A. Aboah, Y. Adu-Gyamfi et al.",
    venue: "Journal of Transportation Engineering, Part A: Systems",
    year: null,
    url: "https://arxiv.org/abs/2211.06463",
    areas: ["traffic-safety"],
  },
  {
    title: "GC-GRU-N for traffic prediction using loop detector data",
    authors: "M. Shoman, A. Aboah, A. Daud, Y. Adu-Gyamfi",
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    year: null,
    url: "https://arxiv.org/abs/2211.08541",
    areas: ["mobility"],
  },
  {
    title: "Mobile sensing for multipurpose applications in transportation",
    authors: "A. Aboah, M. Boeding, Y. Adu-Gyamfi",
    venue: "Journal of Big Data Analytics in Transportation",
    year: null,
    url: "https://arxiv.org/abs/2106.10733",
    areas: ["pavement", "mobility"],
  },
  {
    title: "Smartphone-based pavement roughness estimation using deep learning with entity embedding",
    authors: "A. Aboah, Y. Adu-Gyamfi",
    venue: "Advances in Data Science and Adaptive Analysis",
    year: null,
    url: "https://www.researchgate.net/publication/346260803",
    areas: ["pavement"],
  },
  {
    title: "Pavement condition prediction",
    authors: "A. Behzadian, T. W. Muturi, A. Mullins, A. Aboah, Y. Adu-Gyamfi et al.",
    venue: "arXiv preprint",
    year: null,
    url: "https://arxiv.org/abs/2206.04874",
    areas: ["pavement"],
  },
  {
    title: "DivNEDS: diverse naturalistic edge driving scene dataset for autonomous vehicle scene understanding",
    authors: "J. O. Duah, A. Aboah, S. Osafo-Gyamfi",
    venue: "IEEE Access",
    year: null,
    url: "https://ieeexplore.ieee.org/document/10509834",
    areas: ["mobility"],
  },
];

/** Papers shown on the home page, in order. */
export const featuredPublicationTitles = [
  "Image2PCI: a multitask learning framework for estimating pavement condition indices directly from images",
  "Enhancing traffic safety with parallel dense video captioning for end-to-end event analysis",
  "Smartphone-based pavement roughness estimation using deep learning with entity embedding",
  "Edge computing-enabled road condition monitoring: system development and evaluation",
];

/** Papers directly behind AdAMS. */
export const adamsPublicationTitles = [
  "Image2PCI: a multitask learning framework for estimating pavement condition indices directly from images",
  "Smartphone-based pavement roughness estimation using deep learning with entity embedding",
  "Mobile sensing for multipurpose applications in transportation",
];

export const pick = (titles: string[]) =>
  titles.map((t) => publications.find((p) => p.title === t)!).filter(Boolean);

/** Short venue name for tags. */
export function venueShort(v: string) {
  if (/CVPR/.test(v)) return "CVPR Workshops";
  if (/Transportation Research Board/.test(v)) return "TRB Annual Meeting";
  if (/IEEE/.test(v)) return "IEEE";
  if (/HFES/.test(v)) return "HFES";
  if (/arXiv/.test(v)) return "Preprint";
  return "Journal";
}
