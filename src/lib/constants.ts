import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Services",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export const socialItems = [
  {
    name: "Twitter",
    href: "https://twitter.com/InfiniCityLabs",
    icon: Twitter,
  },
  {
    name: "Github",
    href: "https://github.com/InfiniCityLabs",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/infinicitylabs/",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/infinicity-labs/",
    icon: Linkedin,
  },
];

export const projects = [
  {
    image: "/tmc.png",
    title: "Advanced Asset & Infrastructure Management System",
    href: "/adams",
    description:
      "Comprehensive digital platform for monitoring, analyzing, and optimizing transportation infrastructure lifecycle using big data analytics and predictive maintenance algorithms.",
  },
  {
    image: "/adams.png",
    title: "Traffic Management Control System",
    href: "/tmc",
    description:
      "AI-powered traffic control solution utilizing real-time data analysis and machine learning to optimize traffic flow, reduce congestion, and enhance road safety across urban networks.",
  },
  {
    image: "/herd.JPG",
    title: "Farm Management System",
    href: "/fms",
    description:
      "Intelligent herd monitoring and management system using IoT sensors, drones, GPS tracking, and predictive analytics to protect herds and prevent vehicle-wildlife collisions on transportation corridors.",
  },
];

export const team = [
  {
    id: "Andrews",
    name: "Andrews Danyo",
    position: "Co-Founder & CEO",
    href: "/team#andrews",
    bio: [
      "As Co-Founder and CEO of InfiniCity Labs, Andrews Danyo shapes the company's vision for safer, smarter mobility. He directs strategy, investment, and product roadmaps while mentoring a cross-functional team of engineers and data scientists who convert cutting-edge research in computer vision and machine reasoning into deployable tools for cities and transport agencies. Under his guidance, InfiniCity's platforms deliver real-time insights on traffic flow, infrastructure health, and road-user behavior, thereby empowering clients to move from reactive traffic management to proactive, data-driven decision-making.",
      "Andrews earned a bachelor's degree in Civil Engineering and a master's degree in Construction Management, both from Kwame Nkrumah University of Science and Technology, as well as a master's degree in Artificial Intelligence and Data Science from the University of Hull in the UK.",
    ],
    // image: "",
    education: [
      "M.S. Artificial Intelligence & Data Science - University of Hull, UK",
      "M.S. Construction Management - KNUST",
      "B.S. Civil Engineering - KNUST",
    ],
    expertise: [
      "Strategic Leadership",
      "Computer Vision",
      "Traffic Management",
      "AI Product Development",
    ],
  },
  {
    id: "Armstrong",
    name: "Armstrong Aboah (Ph.D)",
    href: "/team#armstrong",
    position: "Co-Founder & President",
    image: "/aboah.png",
    bio: [
      "As President of InfiniCity Labs, Armstrong oversees the company's strategic and financial performance, guiding research, product development, and market expansion across all InfiniCity entities.",
      "For more than eight years, Armstrong has driven innovation in intelligent transportation systems, delivering computer-vision- and machine-reasoning-based products that transform mobility analytics and traffic management. Widely regarded as a thought leader in transportation AI, he steers InfiniCity Labs' strategic direction and corporate growth with a deep understanding of industry trends.",
      "Armstrong holds a Ph.D. in Transportation Engineering and has led research programs in both academic and industrial settings throughout North America and West Africa. Before co-founding InfiniCity Labs, he served as a transportation data scientist, architecting AI solutions that enhance roadway safety and operational efficiency.",
    ],
    education: [
      "Ph.D. Transportation Engineering",
      "Research Programs - North America & West Africa",
    ],
    expertise: [
      "Transportation AI",
      "Strategic Planning",
      "Research Leadership",
      "Market Expansion",
    ],
  },
  {
    id: "Kelvin",
    name: "Kelvin Kwakye (Ph.D)",
    href: "/team#kelvin",
    position: "Chief Operating Officer",
    image: "/kelvin.jpg",
    bio: [
      "Dr. Kelvin Kwakye is a project director and research associate at South Carolina State University, where he leads federally funded initiatives in AI-driven virtual reality safety and transportation research. He is responsible for developing advanced training frameworks and intelligent systems to improve commercial motor vehicle safety and manufacturing efficiency.",
      "Dr. Kwakye has held key leadership roles across academia and industry, with expertise spanning human factors, digital transformation, and applied artificial intelligence. His work includes AI-based driver behavior classification, domain-specific large language model development, and predictive defect analysis in aerospace manufacturing. He has collaborated with federal agencies, transportation authorities, and defense contractors to translate research into impactful solutions.",
      "Dr. Kwakye earned a bachelor's degree in Chemical Engineering from Kwame Nkrumah University of Science and Technology, a master's in Industrial and Systems Engineering from North Carolina A&T State University, and a Ph.D. in Industrial and Systems Engineering with a specialization in Artificial Intelligence.",
    ],
    education: [
      "Ph.D. Industrial & Systems Engineering (AI Specialization)",
      "M.S. Industrial & Systems Engineering - NC A&T",
      "B.S. Chemical Engineering - KNUST",
    ],
    expertise: [
      "AI Research",
      "Virtual Reality Safety",
      "Human Factors",
      "Digital Transformation",
    ],
  },
  {
    id: "Blessing",
    name: "Blessing Agyei Kyem",
    href: "/team#blessing",
    position: "Chief Technology Officer",
    bio: [
      "As Chief Technology Officer at InfiniCity Labs, Blessing Agyei Kyem leads the technical vision and architecture of our cutting-edge AI platforms. With deep expertise in software engineering and system design, he oversees the development of scalable solutions that power our traffic management and infrastructure monitoring systems.",
      "Blessing brings extensive experience in building enterprise-grade technology solutions, with a focus on cloud architecture, machine learning infrastructure, and real-time data processing systems. His leadership ensures that InfiniCity's technology stack remains at the forefront of innovation while maintaining the reliability and performance our clients depend on.",
    ],
    education: [
      "Advanced Software Engineering",
      "Cloud Architecture & Systems Design",
    ],
    expertise: [
      "Software Architecture",
      "Cloud Systems",
      "ML Infrastructure",
      "Technical Leadership",
    ],
  },
  {
    id: "Joshua",
    name: "Joshua Asamoah",
    href: "/team#joshua",
    position: "Chief Research Scientist",
    bio: [
      "Dr. Joshua Asamoah serves as Chief Research Scientist at InfiniCity Labs, where he leads breakthrough research in computer vision, machine learning, and intelligent transportation systems. His work focuses on developing novel algorithms that enable real-time analysis of traffic patterns, infrastructure conditions, and safety metrics.",
      "With a strong background in applied research and academic excellence, Joshua has published extensively in top-tier conferences and journals. His research contributions have directly influenced the development of InfiniCity's core AI technologies, particularly in the areas of predictive analytics and automated decision-making systems for smart cities.",
    ],
    education: [
      "Ph.D. Computer Science & AI",
      "Research Publications in Top-Tier Venues",
    ],
    expertise: [
      "Computer Vision",
      "Machine Learning Research",
      "Predictive Analytics",
      "Smart City Technologies",
    ],
  },
  {
    id: "Christian",
    name: "Christian Shardey",
    href: "/team#christian",
    position: "Chief Solutions Architect",
    bio: [
      "Christian Shardey serves as Chief Solutions Architect at InfiniCity Labs, where he designs and implements comprehensive technology solutions that bridge the gap between cutting-edge research and practical deployment. He specializes in creating scalable architectures that can handle the complex demands of modern traffic management and infrastructure monitoring.",
      "With extensive experience in enterprise solution design and system integration, Christian ensures that InfiniCity's products seamlessly integrate with existing city infrastructure and transportation systems. His expertise in both technical architecture and client engagement makes him instrumental in delivering solutions that meet real-world operational requirements.",
    ],
    education: [
      "Enterprise Architecture & Systems Integration",
      "Advanced Solution Design",
    ],
    expertise: [
      "Solution Architecture",
      "System Integration",
      "Enterprise Design",
      "Client Solutions",
    ],
  },
];

export const sponsors = [
  {
    name: "Farms",
    image: "/farms.avif",
    link: "",
  },
  {
    name: "NDDOT",
    image: "/nddot.jpg",
    link: "",
  },
  {
    name: "NDSU",
    image: "/ndsu.png",
    link: "",
  },
  {
    name: "Sustein",
    image: "/sustein.png",
    link: "",
  },
  {
    name: "USNF",
    image: "/usnsf.jpg",
    link: "",
  },
];
