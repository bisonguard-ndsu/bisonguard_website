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
  features: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  related: string[];
  audience: string;
  outputs: string[];
  useCases: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};
export const products: Product[] = [
  {
    slug: "adams",
    name: "AdAMS",
    category: "Advanced Asset Management System",
    headline: "Network condition and asset management.",
    summary:
      "Connect road condition, roadside assets, and inspection evidence in one intelligence platform.",
    description:
      "A road network is more than a collection of points on a map. AdAMS connects survey footage, condition assessments, and asset records so engineers can understand what is happening, investigate the evidence, and decide where to focus next.",
    image: "/images/adams-inspection.webp",
    imageAlt: "AdAMS traffic sign inspection and asset review interface",
    imageCaption: "Actual AdAMS inspection interface",
    audience:
      "Asset owners, transportation agencies, engineering consultants, and inspection teams.",
    outputs: [
      "Mapped asset inventories",
      "Condition assessments",
      "Inspection evidence",
      "Maintenance reports",
    ],
    features: [
      {
        title: "Pavement intelligence",
        description:
          "Review distress, Pavement Condition Index, and International Roughness Index alongside the imagery and survey records that give each finding context.",
      },
      {
        title: "Roadside asset inventory",
        description:
          "Detect and geolocate traffic signs, organize asset attributes, and investigate findings from a network map down to an individual observation.",
      },
      {
        title: "Structures and markings",
        description:
          "Bring guardrail inspections, road-marking retroreflectivity assessments, and drone-based bridge inspection evidence into the engineering conversation.",
      },
      {
        title: "Evidence to action",
        description:
          "Review recommended actions, connect findings with work orders, and carry inspection evidence into reports and maintenance planning.",
      },
    ],
    workflow: [
      {
        title: "Capture the network",
        description:
          "Collect video, imagery, location, and field observations around a clearly defined survey.",
      },
      {
        title: "Analyze and review",
        description:
          "Locate assets, investigate conditions, and check the original evidence behind a finding.",
      },
      {
        title: "Plan the next action",
        description:
          "Organize priorities, connect work orders, and share an engineering report.",
      },
    ],
    related: ["pavexpert", "roadlogger", "annotate"],
    useCases: [
      {
        title: "Network condition reviews",
        description:
          "Build a consistent view of pavement and asset conditions across a survey.",
      },
      {
        title: "Asset inventory programs",
        description:
          "Connect an asset's identity, location, attributes, and visual evidence.",
      },
      {
        title: "Maintenance planning",
        description:
          "Investigate priorities with the evidence behind each recommendation.",
      },
    ],
    faqs: [
      {
        question: "How does AdAMS relate to RoadLogger?",
        answer:
          "AdAMS focuses on network intelligence and assessment. RoadLogger supports field cases, individual asset inspections, and follow-up work. We can help shape the handoff around your survey and maintenance process.",
      },
      {
        question: "Can we review the evidence behind an assessment?",
        answer:
          "Evidence review is central to the workflow. Survey footage, mapped findings, and inspection records help engineers investigate an assessment before acting on it.",
      },
    ],
  },
  {
    slug: "pavexpert",
    name: "PaveXpert",
    category: "Agentic pavement intelligence",
    headline: "Agentic intelligence for pavement engineering.",
    summary:
      "An agentic workspace that brings pavement questions, specialist analysis, and engineering review together.",
    description:
      "PaveXpert organizes infrastructure intelligence around the work an engineer needs to do. Bring a project question into a conversation, follow the specialist steps behind an assessment, and keep your judgment connected to the resulting evidence and report.",
    image: "/images/highway-interchange.jpg",
    imageAlt: "Highway infrastructure photographed from above",
    imageCaption: "Contextual infrastructure photography",
    audience:
      "Pavement engineers, infrastructure analysts, and teams working with AdAMS.",
    outputs: [
      "Project conversations",
      "Specialist workflows",
      "Reviewable findings",
      "Assessment narratives",
    ],
    features: [
      {
        title: "Project-aware conversations",
        description:
          "Frame engineering questions in the context of the project, its evidence, and the decision you need to make.",
      },
      {
        title: "Specialist workbench",
        description:
          "Explore connected severity, condition, repair, annotation, and reporting workflows within a shared workbench.",
      },
      {
        title: "Visible reasoning steps",
        description:
          "Follow the progression from a question to specialist tasks and review, with room for an engineer to examine the outcome.",
      },
      {
        title: "A clearer assessment story",
        description:
          "Bring condition findings and supporting context together into a narrative that can be discussed and refined.",
      },
    ],
    workflow: [
      {
        title: "Frame the question",
        description:
          "Start with the road, the project, and the engineering decision in front of you.",
      },
      {
        title: "Follow the work",
        description:
          "Move through specialist tasks with the relevant evidence in view.",
      },
      {
        title: "Review and communicate",
        description:
          "Examine the findings and prepare the assessment for the next conversation.",
      },
    ],
    related: ["adams", "roadlogger", "annotate"],
    useCases: [
      {
        title: "Pavement assessment",
        description:
          "Explore condition questions through a focused engineering workspace.",
      },
      {
        title: "Repair planning conversations",
        description:
          "Organize the evidence and options behind a proposed intervention.",
      },
      {
        title: "Technical reporting",
        description:
          "Connect specialist findings into a clear assessment narrative.",
      },
    ],
    faqs: [
      {
        question: "Is PaveXpert a separate product?",
        answer:
          "Yes. PaveXpert is our agentic pavement intelligence product, designed around the assessment context of AdAMS. A demo can explore where each product fits your team's work.",
      },
      {
        question: "Where does engineering review fit?",
        answer:
          "Human review remains part of the workflow. The workbench brings specialist steps and supporting context into view so an engineer can investigate and interpret the result.",
      },
    ],
  },
  {
    slug: "tmc",
    name: "TMC",
    category: "Traffic monitoring & operations",
    headline: "Traffic monitoring and video analysis.",
    summary:
      "Bring traffic cameras, recordings, and vehicle observations into a dedicated monitoring workspace.",
    description:
      "TMC gives traffic teams a place to work with the scenes that matter to their network. Organize camera sources, plan recordings, explore the archive, and move selected footage through vehicle analysis and reporting.",
    image: "/images/urban-intersection.jpg",
    imageAlt: "Road intersection and vehicles photographed from above",
    imageCaption: "Contextual traffic photography",
    audience:
      "Traffic operations teams, transportation agencies, and engineering consultants.",
    outputs: [
      "Camera workspaces",
      "Scheduled recordings",
      "Vehicle observations",
      "Analysis reports",
    ],
    features: [
      {
        title: "Camera directory and maps",
        description:
          "Organize traffic camera sources and explore the observation points across a network.",
      },
      {
        title: "Live and recorded views",
        description:
          "View camera feeds, start recordings, and schedule capture around the periods your team needs to understand.",
      },
      {
        title: "Vehicle analysis",
        description:
          "Run vehicle detection and classification from uploaded footage, archived recordings, or supported camera sources.",
      },
      {
        title: "A reviewable archive",
        description:
          "Track analysis jobs, return to saved results, and prepare PDF reports to share with your team.",
      },
    ],
    workflow: [
      {
        title: "Connect the viewpoint",
        description:
          "Select the camera or recording that covers your operational question.",
      },
      {
        title: "Capture and analyze",
        description:
          "Schedule the observation period and run the selected vehicle analysis.",
      },
      {
        title: "Review and share",
        description:
          "Investigate saved outputs and prepare a report with its source context.",
      },
    ],
    related: ["turnflow", "adams"],
    useCases: [
      {
        title: "Camera-based observation",
        description:
          "Keep a network's traffic viewpoints organized and accessible.",
      },
      {
        title: "Scheduled data collection",
        description:
          "Capture a selected period without losing the source and timing context.",
      },
      {
        title: "Vehicle composition studies",
        description:
          "Review detected vehicles and classes in a defined observation.",
      },
    ],
    faqs: [
      {
        question: "How is TMC different from Turnflow?",
        answer:
          "TMC centers on cameras, monitoring, recordings, and vehicle observations. Turnflow centers on movement definitions, traffic counting, study analysis, and detailed engineering reports. They are separate products.",
      },
      {
        question: "Can we work with existing recordings?",
        answer:
          "Yes. The analysis workflow supports uploaded footage and saved recordings as well as supported camera sources. We can review your media and camera setup during a demo.",
      },
    ],
  },
  {
    slug: "turnflow",
    name: "Turnflow",
    category: "Traffic studies & movement analysis",
    headline: "Turning-movement studies, from video to report.",
    summary:
      "Define movements, count traffic, review the evidence, and build an engineering report from one study workflow.",
    description:
      "A useful traffic study keeps its results connected to what happened on the road. Turnflow takes a recording through movement setup, analysis, review, and reporting, with tools to investigate the details behind the totals.",
    image: "/images/urban-intersection.jpg",
    imageAlt: "An overhead view of a signalized road intersection",
    imageCaption: "Contextual traffic study photography",
    audience:
      "Traffic engineers, transport planners, consultants, and research teams.",
    outputs: [
      "Movement counts",
      "Interval summaries",
      "Reviewable studies",
      "PDF, Word & CSV outputs",
    ],
    features: [
      {
        title: "Define the movements",
        description:
          "Use zones or trajectory paths to describe how vehicles pass through the observation area, with clear movement names and mappings.",
      },
      {
        title: "Count and classify",
        description:
          "Analyze recorded video or camera captures and inspect counts by movement, vehicle class, and reporting interval.",
      },
      {
        title: "Investigate the detail",
        description:
          "Review and compare analysis runs, examine headways and occupancy, and return to the supporting video when a result needs attention.",
      },
      {
        title: "Make the study usable",
        description:
          "Save study sessions and produce PDF reports, editable Word documents, and CSV outputs for project teams.",
      },
    ],
    workflow: [
      {
        title: "Set up the study",
        description:
          "Choose footage, define the observation period, and map the movements.",
      },
      {
        title: "Analyze and inspect",
        description:
          "Run counting and review the results against the source video.",
      },
      {
        title: "Report the findings",
        description:
          "Explore intervals and prepare outputs for the next engineering decision.",
      },
    ],
    related: ["tmc", "annotate"],
    useCases: [
      {
        title: "Turning-movement studies",
        description:
          "Understand how different approaches and movements use a junction.",
      },
      {
        title: "Recorded traffic review",
        description:
          "Return to observations and compare analysis runs with traceable context.",
      },
      {
        title: "Engineering reporting",
        description:
          "Carry counts, intervals, and study definitions into a readable deliverable.",
      },
    ],
    faqs: [
      {
        question: "Can results be reviewed against the video?",
        answer:
          "Yes. Review is a core part of the study workflow, including saved analysis sessions and comparisons between runs.",
      },
      {
        question: "What reporting formats are available?",
        answer:
          "Turnflow includes PDF, editable Word, and CSV outputs. The appropriate report depends on the study configuration and the information your team needs to communicate.",
      },
    ],
  },
  {
    slug: "roadlogger",
    name: "RoadLogger",
    category: "Field inspection & asset lifecycle",
    headline: "Field inspections, documented and organized.",
    summary:
      "Capture field conditions, track inspections over time, and connect asset issues with the work to resolve them.",
    description:
      "RoadLogger keeps the story of an asset together. Create a geolocated case, record its condition and evidence, return for a follow-up inspection, and track how the issue progresses through review, monitoring, and repair.",
    image: "/images/urban-infrastructure.jpg",
    imageAlt: "An urban road leading toward a city skyline",
    imageCaption: "Contextual road photography",
    audience:
      "Field inspectors, maintenance crews, asset managers, and engineering teams.",
    outputs: [
      "Geolocated cases",
      "Asset inventories",
      "Inspection histories",
      "Repair coordination",
    ],
    features: [
      {
        title: "Capture a complete case",
        description:
          "Record category, severity, priority, notes, measurements, photos, and video with the location of the observation.",
      },
      {
        title: "Work beyond connectivity",
        description:
          "Keep case and asset work in persistent offline queues with staged media, then synchronize when a connection is available.",
      },
      {
        title: "Follow condition over time",
        description:
          "Add repeat inspections, compare measurements and evidence across visits, and keep the history attached to the original case.",
      },
      {
        title: "Coordinate the response",
        description:
          "Move cases through review, monitoring, scheduled repair, and resolution. Share access with the colleagues involved in the work.",
      },
    ],
    workflow: [
      {
        title: "Capture and locate",
        description:
          "Create the field record with its media, measurements, and location.",
      },
      {
        title: "Inspect and compare",
        description:
          "Return to the same case and record how its condition changes.",
      },
      {
        title: "Coordinate and resolve",
        description:
          "Track the next action and attach the evidence that closes the loop.",
      },
    ],
    related: ["adams", "pavexpert"],
    useCases: [
      {
        title: "Routine inspections",
        description:
          "Build consistent records for defects and roadside assets.",
      },
      {
        title: "Remote field work",
        description:
          "Continue collecting useful evidence when connectivity is limited.",
      },
      {
        title: "Follow-up and repair",
        description:
          "Keep the before, the intervention, and the later inspection in one history.",
      },
    ],
    faqs: [
      {
        question: "Can inspectors work offline?",
        answer:
          "RoadLogger includes local queues for cases, assets, and staged media. Synchronization resumes when connected, with visible retry and failure states.",
      },
      {
        question: "Can an asset have more than one inspection?",
        answer:
          "Yes. Follow-up inspections attach new observations and evidence to an existing case so changes can be reviewed over time.",
      },
    ],
  },
  {
    slug: "annotate",
    name: "AdAMS Annotate",
    category: "Visual data & annotation",
    headline: "Image and video annotation with human review.",
    summary:
      "Prepare images and video with model-assisted labels, structured review, and practical dataset exports.",
    description:
      "AdAMS Annotate brings the people, media, and review steps behind visual AI into one workflow. Built on CVAT Community, it combines model-assisted prelabels with an editing environment and project roles that keep human review central.",
    image: "/images/adams-inspection.webp",
    imageAlt: "Roadside scene used to illustrate infrastructure annotation",
    imageCaption: "Example infrastructure imagery from AdAMS",
    audience:
      "Annotation teams, computer vision engineers, researchers, and project reviewers.",
    outputs: [
      "Reviewed labels",
      "Assigned review jobs",
      "Project datasets",
      "YOLO, COCO, VOC & CVAT exports",
    ],
    features: [
      {
        title: "Bring in your media",
        description:
          "Work with images, video, folders, and ZIP collections, including resumable uploads for larger tasks.",
      },
      {
        title: "Start with assistance",
        description:
          "Use model workflows for traffic signs, pavement distress, road assets, and vehicle classes as a starting point for manual annotation.",
      },
      {
        title: "Organize review",
        description:
          "Assign jobs and use annotator, reviewer, project manager, and administrator roles to make responsibilities clear.",
      },
      {
        title: "Export for the next stage",
        description:
          "Prepare reviewed labels in familiar dataset formats, including YOLO, COCO, PASCAL VOC, and CVAT.",
      },
    ],
    workflow: [
      {
        title: "Prepare the collection",
        description:
          "Create a project, define its labels, and upload the source media.",
      },
      {
        title: "Annotate and review",
        description:
          "Generate prelabels, make corrections, and complete assigned reviews.",
      },
      {
        title: "Export the dataset",
        description:
          "Choose the format and inspect the handoff to model development.",
      },
    ],
    related: ["adams", "turnflow"],
    useCases: [
      {
        title: "Infrastructure datasets",
        description:
          "Prepare labels around road assets and pavement condition.",
      },
      {
        title: "Model-assisted review",
        description:
          "Give reviewers editable proposals and clear labeling rules.",
      },
      {
        title: "Team annotation programs",
        description:
          "Coordinate task ownership, permissions, and review states.",
      },
    ],
    faqs: [
      {
        question: "Can we define our own labels?",
        answer:
          "Yes. General annotation and custom labels are supported alongside the specialized model workflows.",
      },
      {
        question: "Is the platform based on CVAT?",
        answer:
          "Yes. AdAMS Annotate builds on CVAT Community with a tailored workflow portal, model assistance, and project administration. Deployment can be discussed around your team's requirements.",
      },
    ],
  },
  {
    slug: "bisonguard",
    name: "BisonGuard",
    category: "Herd detection & monitoring",
    headline: "Visual detection for herd monitoring.",
    summary:
      "Apply visual intelligence to herd detection and monitoring in the environments where animals live.",
    description:
      "BisonGuard brings our computer vision practice into a different landscape. The product focuses on detecting herds and making observations available in a dedicated monitoring workflow, so teams can look more closely at activity in the field.",
    image: "/images/bisonguard-herd.webp",
    imageAlt: "Bison herd with a calf in open grassland",
    imageCaption: "Bison herd in open grassland",
    audience: "Herd managers, field operators, and monitoring project teams.",
    outputs: [
      "Visual observations",
      "Herd detections",
      "Monitoring views",
      "Reviewable field imagery",
    ],
    features: [
      {
        title: "Visual herd detection",
        description:
          "Identify animals within the observed scene using a focused computer vision workflow.",
      },
      {
        title: "A monitoring workspace",
        description:
          "Bring visual observations together so the people responsible for monitoring can review the scene.",
      },
      {
        title: "Context from the field",
        description:
          "Keep the surrounding environment in view when interpreting activity and observations.",
      },
      {
        title: "Applied to your setting",
        description:
          "Discuss the observation area, available imagery, and monitoring questions with our team.",
      },
    ],
    workflow: [
      {
        title: "Observe the environment",
        description:
          "Establish the area and the visual information available for monitoring.",
      },
      {
        title: "Detect the herd",
        description: "Identify animals within the observed scene.",
      },
      {
        title: "Review the activity",
        description:
          "Make the imagery and detections accessible for field monitoring.",
      },
    ],
    related: ["annotate", "adams"],
    useCases: [
      {
        title: "Herd observation",
        description: "Bring a closer view of the animals in a monitoring area.",
      },
      {
        title: "Visual monitoring projects",
        description:
          "Connect field imagery with a dedicated detection workflow.",
      },
      {
        title: "Applied vision beyond roads",
        description:
          "Adapt the engineering practice to a different physical environment.",
      },
    ],
    faqs: [
      {
        question: "What does BisonGuard focus on?",
        answer:
          "BisonGuard focuses on herd detection and monitoring. Tell us about the animals, environment, and imagery available so we can discuss the right workflow.",
      },
      {
        question: "Can we see a demonstration?",
        answer:
          "Yes. Request a BisonGuard demo and describe the monitoring scenario you would like to explore.",
      },
    ],
  },
];
export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
export const expertise = [
  {
    id: "infrastructure",
    title: "Infrastructure intelligence",
    summary:
      "Connect conditions, assets, and evidence to the decisions that shape a network.",
    description:
      "From survey collection to inspection and maintenance, we build tools for the people responsible for physical infrastructure.",
    capabilities: [
      "Pavement condition assessment",
      "Asset detection and geolocation",
      "Inspection histories and field workflows",
      "Engineering maps and reports",
    ],
    products: ["adams", "pavexpert", "roadlogger"],
  },
  {
    id: "mobility",
    title: "Mobility analytics",
    summary:
      "Understand the movement, the observation, and the evidence behind a traffic study.",
    description:
      "We combine traffic engineering and visual analysis with tools for monitoring, counting, review, and reporting.",
    capabilities: [
      "Camera monitoring and recording",
      "Vehicle and movement analysis",
      "Study review and interval summaries",
      "Traffic engineering reports",
    ],
    products: ["tmc", "turnflow"],
  },
  {
    id: "applied-ai",
    title: "Applied AI engineering",
    summary:
      "Turn a domain problem into a practical workflow for data, models, and people.",
    description:
      "Our work connects computer vision, visual-language interfaces, annotation, and software engineering.",
    capabilities: [
      "Computer vision systems",
      "Agentic engineering interfaces",
      "Data annotation and review",
      "Custom software and integration",
    ],
    products: ["annotate", "pavexpert", "bisonguard"],
  },
];
export type TeamMember = {
  name: string;
  role: string;
  image: string;
  biography: string;
};
export const teamMembers: TeamMember[] = [];
