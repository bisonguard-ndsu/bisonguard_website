/**
 * Team list. Empty for launch (agreed). Development seed data is loaded only
 * when NEXT_PUBLIC_TEAM_SEED=1 so the page can be designed with real content;
 * `npm run prelaunch` fails if that flag is set.
 */
export type Member = {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio: string;
  links?: { label: string; href: string }[];
};

const seed: Member[] = [
  {
    id: "andrews-danyo",
    name: "Andrews Danyo",
    role: "Co-Founder & CEO",
    image: "/andrews.png",
    bio: "Civil engineer and data scientist (KNUST; University of Hull). Directs strategy, product roadmaps and the engineering team.",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/andrews-danyo-55608775/" }],
  },
  {
    id: "armstrong-aboah",
    name: "Armstrong Aboah, PhD",
    role: "Co-Founder & President",
    image: "/aboah.jpg",
    bio: "Transportation engineer. Eight years building computer-vision and machine-reasoning systems for mobility analytics and traffic management.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/" },
      { label: "Website", href: "https://aboah1994.github.io/" },
    ],
  },
  {
    id: "kelvin-kwakye",
    name: "Kelvin Kwakye, PhD",
    role: "Chief Operating Officer",
    image: "/kelvin.jpg",
    bio: "Industrial and systems engineer specialising in AI. Leads federally funded work on AI-driven safety training and driver behaviour.",
    links: [{ label: "Website", href: "https://www.kelvinkwakye.com/" }],
  },
  {
    id: "blessing-agyei-kyem",
    name: "Blessing Agyei Kyem",
    role: "Chief Technology Officer",
    image: "/blessing.png",
    bio: "Leads the computer-vision and multimodal systems behind traffic monitoring and pavement assessment.",
    links: [{ label: "Website", href: "https://blessing-agyei-kyem.github.io/" }],
  },
  {
    id: "joshua-asamoah",
    name: "Joshua Asamoah",
    role: "Chief Research Scientist",
    image: "/joshua.jpeg",
    bio: "Researches multi-camera tracking, spatio-temporal graph models and natural-language vehicle retrieval.",
  },
  {
    id: "christian-shardey",
    name: "Christian Shardey",
    role: "Chief Solutions Architect",
    bio: "Designs the architectures that connect our products to the systems agencies already run.",
  },
];

export const team: Member[] = process.env.NEXT_PUBLIC_TEAM_SEED === "1" ? seed : [];
