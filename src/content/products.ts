export type Product = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  inDevelopment?: boolean;
  features: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  related: string[];
};

export const products: Product[] = [
  {
    slug: "adams",
    name: "AdAMS",
    category: "Infrastructure intelligence",
    headline: "Know the road. Plan what comes next.",
    summary:
      "The Advanced Asset Management System brings road conditions, asset inventories, and inspection evidence into one place.",
    description:
      "A road network holds more information than a spreadsheet can explain. AdAMS connects what your team sees in the field with where it belongs on the map, helping engineers investigate conditions, review assets, and plan maintenance with the evidence in view.",
    image: "/images/adams-inspection.webp",
    imageAlt:
      "AdAMS inspection interface showing a detected stop sign and a reviewable sign inventory",
    imageCaption: "Inside AdAMS · Traffic sign detection and inspection review",
    features: [
      {
        title: "Pavement assessment",
        description:
          "Review pavement distress, Pavement Condition Index, and International Roughness Index alongside the underlying survey evidence.",
      },
      {
        title: "Asset inventories",
        description:
          "Detect and geolocate traffic signs, inspect guardrails, and organize roadside assets in their network context.",
      },
      {
        title: "Markings and structures",
        description:
          "Work with road-marking retroreflectivity assessments and drone-based bridge inspection evidence.",
      },
      {
        title: "Maps, records, and reports",
        description:
          "Move between the network overview and individual findings, then bring relevant information into maintenance planning and reports.",
      },
    ],
    workflow: [
      {
        title: "Collect",
        description:
          "Bring in survey footage, imagery, and field observations from your road network.",
      },
      {
        title: "Understand",
        description:
          "Locate assets and assess their condition with AI-supported analysis and engineering review.",
      },
      {
        title: "Act",
        description:
          "Use the mapped findings to investigate priorities and plan the next intervention.",
      },
    ],
    related: ["roadlogger", "pavexpert", "annotate"],
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    category: "Traffic video analysis",
    headline: "Every movement tells a story.",
    summary:
      "Turn traffic video into movement counts, reviewable evidence, and engineering reports.",
    description:
      "Traffic studies begin with what actually happens on the road. Turnflow takes recorded video and live-camera sources through counting, review, and analysis, giving engineers a clear path from observations to a usable study.",
    image: "/images/intersection.webp",
    imageAlt: "Overhead view of vehicles moving through an urban intersection",
    imageCaption: "Illustrative traffic observation scene",
    features: [
      {
        title: "Flexible video sources",
        description:
          "Work with saved traffic videos or live-camera recordings, including scheduled capture.",
      },
      {
        title: "Movement counts",
        description:
          "Define movements and inspect counts over selected intervals to understand how traffic uses a junction.",
      },
      {
        title: "Reviewable results",
        description:
          "Return to the video evidence, compare results, and inspect headways and occupancy in the analysis workflow.",
      },
      {
        title: "Engineering reports",
        description:
          "Bring study outputs into PDF and Word reports for project teams and decision-makers.",
      },
    ],
    workflow: [
      {
        title: "Set up a study",
        description:
          "Choose the camera or footage and define the traffic movements you need to understand.",
      },
      {
        title: "Count and review",
        description:
          "Analyze the video and inspect the supporting evidence for your study.",
      },
      {
        title: "Share the findings",
        description:
          "Explore interval results and prepare an engineering report.",
      },
    ],
    related: ["traffic-management", "adams", "annotate"],
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    category: "Field data collection",
    headline: "The road is your starting point.",
    summary:
      "A field companion for collecting road observations and connecting surveys with infrastructure analysis.",
    description:
      "Useful infrastructure intelligence starts with useful field data. RoadLogger supports road-survey collection and logging, helping teams bring observations from a journey into a workflow they can revisit and analyze.",
    image: "/images/road-survey.webp",
    imageAlt: "Phone mounted inside a vehicle recording the road ahead",
    imageCaption: "Road survey collection · Illustrative capture setup",
    features: [
      {
        title: "Field capture",
        description: "Collect road observations while a survey is underway.",
      },
      {
        title: "Location context",
        description:
          "Connect field records with the route and places being surveyed.",
      },
      {
        title: "Survey organization",
        description:
          "Keep collection activity organized for later review and analysis.",
      },
      {
        title: "Connected workflows",
        description:
          "Bring collected information into the wider InfiniCity infrastructure workflow.",
      },
    ],
    workflow: [
      {
        title: "Prepare",
        description:
          "Set up the collection device and identify the road survey.",
      },
      {
        title: "Record",
        description:
          "Capture observations from the road with location context.",
      },
      {
        title: "Review",
        description:
          "Return to the collected records and continue the assessment workflow.",
      },
    ],
    related: ["adams", "pavexpert"],
  },
  {
    slug: "traffic-management",
    name: "Traffic Management",
    category: "Mobility systems",
    headline: "Understand how your network moves.",
    summary:
      "A dedicated traffic management system for observing road activity and understanding network conditions.",
    description:
      "Transportation networks change throughout the day. Our traffic management work brings observation and analysis together so that teams can investigate road activity and understand the conditions behind operational decisions.",
    image: "/images/intersection.webp",
    imageAlt: "Aerial illustration of a signalized urban junction",
    imageCaption: "Illustrative mobility scene",
    features: [
      {
        title: "Traffic observation",
        description:
          "Bring traffic imagery and observations into a dedicated management workflow.",
      },
      {
        title: "Movement analysis",
        description:
          "Investigate patterns in road activity and how they change across a study.",
      },
      {
        title: "Operational context",
        description:
          "Give traffic teams the information they need to interpret observed conditions.",
      },
      {
        title: "Project collaboration",
        description:
          "Work with our engineering team to shape a system around your network and use case.",
      },
    ],
    workflow: [
      {
        title: "Observe",
        description:
          "Establish what is happening on the network and what data is available.",
      },
      {
        title: "Interpret",
        description:
          "Examine movement patterns and investigate the questions behind them.",
      },
      {
        title: "Inform",
        description:
          "Bring the findings into traffic management and project discussions.",
      },
    ],
    related: ["turnflow", "adams"],
  },
  {
    slug: "pavexpert",
    name: "PaveXpert",
    category: "Agentic infrastructure intelligence",
    headline: "A new way to work with infrastructure intelligence.",
    summary: "An agentic platform being developed for the AdAMS ecosystem.",
    description:
      "We are developing PaveXpert to bring conversational and agentic workflows to infrastructure assessment. The work explores how engineers can ask questions, work with project context, and move through pavement-analysis tasks with a more direct interface.",
    image: "/images/infrastructure-aerial.webp",
    imageAlt: "Illustrative aerial view of a road network at dusk",
    imageCaption:
      "Illustrative infrastructure scene · PaveXpert is in development",
    inDevelopment: true,
    features: [
      {
        title: "Conversation with context",
        description:
          "A development focus on working with engineering questions and the project information behind them.",
      },
      {
        title: "Agentic workflows",
        description:
          "Exploring how connected analysis steps can be coordinated within an infrastructure workflow.",
      },
      {
        title: "AdAMS integration",
        description:
          "Designed around the asset and pavement assessment context of AdAMS.",
      },
      {
        title: "Research into practice",
        description:
          "Building on work in visual understanding, pavement assessment, and language-based interfaces.",
      },
    ],
    workflow: [
      {
        title: "Frame the question",
        description:
          "Define the engineering task and relevant project context.",
      },
      {
        title: "Explore the evidence",
        description:
          "Develop ways to connect questions with visual and structured information.",
      },
      {
        title: "Review the outcome",
        description:
          "Keep engineering judgment central as the platform develops.",
      },
    ],
    related: ["adams", "roadlogger"],
  },
  {
    slug: "annotate",
    name: "AdAMS Annotate",
    category: "Computer vision tooling",
    headline: "Better models begin with better annotations.",
    summary:
      "A dedicated annotation workflow for the images and videos behind infrastructure AI.",
    description:
      "Built on CVAT Community, AdAMS Annotate connects a customized workflow portal with media uploads, model-assisted annotation, and a reviewable editing environment. It gives project teams a practical place to prepare visual datasets.",
    image: "/images/adams-inspection.webp",
    imageAlt:
      "An example of the visual infrastructure inspection data used in computer vision workflows",
    imageCaption:
      "Example infrastructure imagery from AdAMS · Annotation interface preview forthcoming",
    features: [
      {
        title: "Image and video workflows",
        description:
          "Prepare visual material for annotation and work through project-specific labeling tasks.",
      },
      {
        title: "Model-assisted annotation",
        description:
          "Use automatic annotation with local model serving as a starting point for review.",
      },
      {
        title: "Team access",
        description:
          "Manage approved users and roles through the workflow portal.",
      },
      {
        title: "Workstation deployment",
        description:
          "Support local deployment and resumable media uploads for project teams.",
      },
    ],
    workflow: [
      {
        title: "Prepare media",
        description:
          "Organize images and videos around a defined annotation task.",
      },
      {
        title: "Annotate and review",
        description:
          "Combine model assistance with the annotation editor and human review.",
      },
      {
        title: "Develop the dataset",
        description:
          "Bring reviewed visual labels into the next stage of model development.",
      },
    ],
    related: ["adams", "turnflow"],
  },
  {
    slug: "herd-monitoring",
    name: "Herd Monitoring",
    category: "Selected applied AI work",
    headline: "Intelligence beyond the road.",
    summary: "A system developed for herd detection and monitoring.",
    description:
      "Our work in visual understanding also reaches beyond infrastructure. This herd-monitoring system applies detection and observation to animals in the field, extending our engineering practice to a different real-world environment.",
    image: "/images/herd-monitoring.webp",
    imageAlt: "A herd silhouetted along a ridge in warm evening light",
    imageCaption: "Herd monitoring · Image from the project asset collection",
    features: [
      {
        title: "Herd detection",
        description:
          "Apply visual detection to identify animals in the observation area.",
      },
      {
        title: "Monitoring",
        description:
          "Support the observation of herd activity through a dedicated system.",
      },
      {
        title: "Field context",
        description:
          "Consider the changing conditions and practical constraints of an outdoor environment.",
      },
      {
        title: "Applied engineering",
        description:
          "Connect a focused computer vision task with a usable monitoring workflow.",
      },
    ],
    workflow: [
      {
        title: "Observe",
        description:
          "Gather visual information from the monitoring environment.",
      },
      {
        title: "Detect",
        description: "Identify the herd within the observed scene.",
      },
      {
        title: "Monitor",
        description: "Make the observations accessible through the system.",
      },
    ],
    related: ["adams", "annotate"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const expertise = [
  {
    id: "infrastructure",
    title: "Infrastructure intelligence",
    summary:
      "Know what you have. Understand its condition. Give every maintenance decision a clearer starting point.",
    description:
      "From survey collection to pavement assessment and roadside inventories, we build connected tools for the people responsible for physical infrastructure.",
    capabilities: [
      "Pavement condition assessment",
      "Roadside asset detection and geolocation",
      "Survey and inspection workflows",
      "Engineering maps and reports",
    ],
    products: ["adams", "roadlogger", "pavexpert"],
  },
  {
    id: "mobility",
    title: "Mobility analytics",
    summary:
      "Make sense of how people and vehicles move, from a single intersection to a wider road network.",
    description:
      "We combine traffic engineering and visual analysis to turn observations into studies that can be investigated, reviewed, and shared.",
    capabilities: [
      "Traffic video counting",
      "Movement and interval analysis",
      "Video review and study reporting",
      "Traffic management workflows",
    ],
    products: ["turnflow", "traffic-management"],
  },
  {
    id: "applied-ai",
    title: "Applied AI engineering",
    summary:
      "Bring a real-world problem. We connect the data, models, and software needed to work on it.",
    description:
      "Our engineering practice spans computer vision, visual-language research, annotation tooling, and software development. We work from the problem and available evidence toward a practical system.",
    capabilities: [
      "Computer vision and visual understanding",
      "Dataset and annotation workflows",
      "Research collaboration",
      "Custom software and system development",
    ],
    products: ["annotate", "pavexpert", "herd-monitoring"],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  biography: string;
};

export const teamMembers: TeamMember[] = [];
