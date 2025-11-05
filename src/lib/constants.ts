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
  // {
  //   name: "Team",
  //   href: "/team",
  // },
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
    image: "/andrews.png",
    href: "/team#andrews",
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/andrews-danyo-55608775/",
      },
      {
        name: "mail",
        href: "https://mailto:andrews.selasie@gmail.com",
      },
      {
        name: "portfolio",
        href: "",
      },
    ],

    bio: [
      "As Co-Founder and CEO of InfiniCity Labs, Andrews Danyo shapes the company's vision for safer, smarter mobility. He directs strategy, investment, and product roadmaps while mentoring a cross-functional team of engineers and data scientists who convert cutting-edge research in computer vision and machine reasoning into deployable tools for cities and transport agencies. Under his guidance, InfiniCity's platforms deliver real-time insights on traffic flow, infrastructure health, and road-user behavior, thereby empowering clients to move from reactive traffic management to proactive, data-driven decision-making.",
      "Andrews earned a bachelor's degree in Civil Engineering and a master's degree in Construction Management, both from Kwame Nkrumah University of Science and Technology, as well as a master's degree in Artificial Intelligence and Data Science from the University of Hull in the UK.",
    ],
  },
  {
    id: "Armstrong",
    name: "Armstrong Aboah, Ph.D",
    href: "/team#armstrong",
    position: "Co-Founder & President",
    image: "/aboah.jpg",
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/",
      },
      {
        name: "mail",
        href: "https://mailto:armstrong.aboah@ndsu.edu",
      },
      {
        name: "portfolio",
        href: "https://aboah1994.github.io/",
      },
    ],

    bio: [
      "As President of InfiniCity Labs, Armstrong oversees the company's strategic and financial performance, guiding research, product development, and market expansion across all InfiniCity entities.",
      "For more than eight years, Armstrong has driven innovation in intelligent transportation systems, delivering computer-vision- and machine-reasoning-based products that transform mobility analytics and traffic management. Widely regarded as a thought leader in transportation AI, he steers InfiniCity Labs' strategic direction and corporate growth with a deep understanding of industry trends.",
      "Armstrong holds a Ph.D. in Transportation Engineering and has led research programs in both academic and industrial settings throughout North America and West Africa. Before co-founding InfiniCity Labs, he served as a transportation data scientist, architecting AI solutions that enhance roadway safety and operational efficiency.",
    ],
  },
  {
    id: "Kelvin",
    name: "Kelvin Kwakye, Ph.D",
    href: "/team#kelvin",
    position: "Chief Operating Officer",
    image: "/kelvin.jpg",
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/kelvin-kwasi-kwakye-ph-d-94a98216b/",
      },
      {
        name: "mail",
        href: "https://mailto:kelvin.kwakye@gmail.com",
      },
      {
        name: "portfolio",
        href: "https://www.kelvinkwakye.com/",
      },
    ],

    bio: [
      "Dr. Kelvin Kwakye is a project director and research associate at South Carolina State University, where he leads federally funded initiatives in AI-driven virtual reality safety and transportation research. He is responsible for developing advanced training frameworks and intelligent systems to improve commercial motor vehicle safety and manufacturing efficiency.",
      "Dr. Kwakye has held key leadership roles across academia and industry, with expertise spanning human factors, digital transformation, and applied artificial intelligence. His work includes AI-based driver behavior classification, domain-specific large language model development, and predictive defect analysis in aerospace manufacturing. He has collaborated with federal agencies, transportation authorities, and defense contractors to translate research into impactful solutions.",
      "Dr. Kwakye earned a bachelor's degree in Chemical Engineering from Kwame Nkrumah University of Science and Technology, a master's in Industrial and Systems Engineering from North Carolina A&T State University, and a Ph.D. in Industrial and Systems Engineering with a specialization in Artificial Intelligence.",
    ],
  },
  {
    id: "Blessing",
    name: "Blessing Agyei Kyem",
    href: "/team#blessing",
    image: "/blessing.png",
    position: "Chief Technology Officer",
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/blessing-agyei-kyem-b258121a8",
      },
      {
        name: "mail",
        href: "https://mailhide.io/e/5HAICmT9",
      },
      {
        name: "portfolio",
        href: "https://blessing-agyei-kyem.github.io/",
      },
    ],

    bio: [
      "Blessing Agyei Kyem is the Chief Technology Officer at InfiniCity Labs, where he leads the development of advanced AI systems for intelligent transportation and infrastructure management. He oversees the design and deployment of real-time computer vision and multi-modal analytics platforms used for traffic monitoring, pavement condition assessment, and urban mobility insights. His work ensures that InfiniCity’s products are both scalable and cutting-edge, with a focus on performance, interpretability, and deployment efficiency.",
      "Blessing’s expertise spans large language models including vision-language models, computer vision, and self-supervised learning. His recent work explores multi-modal understanding, cross-modal retrieval, and LLM-driven reasoning for traffic safety and infrastructure assessment. He has led engineering teams on projects involving road defect segmentation and vehicle behavior analysis. In addition to his technical leadership, he collaborates with academic researchers and transportation agencies to align InfiniCity’s innovation pipeline with real-world impact.",
      "Blessing earned a bachelor’s degree in Civil Engineering from Kwame Nkrumah University of Science and Technology and is currently pursuing a Ph.D. in Transportation Engineering at North Dakota State University, where his research focuses on multi-modal AI and its applications in Transportation and Pavement.",
    ],
  },
  {
    id: "Joshua",
    name: "Joshua Asamoah",
    href: "/team#joshua",
    image: "/joshua.jpeg",
    position: "Chief Research Scientist",
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/joshua-kofi-asamoah-1ba4091a2/",
      },
      {
        name: "mail",
        href: "",
      },
      {
        name: "portfolio",
        href: "",
      },
    ],

    bio: [
      "Joshua Kofi Asamoah serves as the Chief Research Scientist at InfiniCity Labs, where he leads cutting-edge research in computer vision and AI for smart mobility systems. His work focuses on designing scalable, real-time models for vehicle tracking, behavior understanding, and multi-modal traffic analytics that directly support the company’s mission of building intelligent transportation infrastructure.",
      "Currently a Ph.D. candidate in Transportation Engineering at North Dakota State University, Joshua conducts research at the intersection of deep learning, mobility data, and urban systems. His recent efforts span multi-camera tracking, spatio-temporal graph modeling, and natural-language vehicle retrieval, with applications in automated traffic monitoring and public safety.",
      "With a growing portfolio of academic and industry collaborations across United States of America and West Africa, Joshua brings a strong research foundation and a results-driven mindset to InfiniCity’s innovation pipeline. His contributions have been recognized in competitive peer-reviewed venues in transportation and computer vision.",
    ],
  },
  {
    id: "Christian",
    name: "Christian Shardey",
    href: "/team#christian",
    position: "Chief Solutions Architect",
    socialLinks: [
      {
        name: "linkedin",
        href: "",
      },
      {
        name: "mail",
        href: "",
      },
      {
        name: "portfolio",
        href: "",
      },
    ],

    bio: [
      "Christian Shardey serves as Chief Solutions Architect at InfiniCity Labs, where he designs and implements comprehensive technology solutions that bridge the gap between cutting-edge research and practical deployment. He specializes in creating scalable architectures that can handle the complex demands of modern traffic management and infrastructure monitoring.",
      "With extensive experience in enterprise solution design and system integration, Christian ensures that InfiniCity's products seamlessly integrate with existing city infrastructure and transportation systems. His expertise in both technical architecture and client engagement makes him instrumental in delivering solutions that meet real-world operational requirements.",
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
