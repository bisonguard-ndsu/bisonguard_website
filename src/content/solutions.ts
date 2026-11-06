export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  challenge: string;
  outcomes: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  products: string[];
  questions: string[];
};
export const solutions: Solution[] = [
  {
    slug: "infrastructure-management",
    title: "Make every part of the network easier to understand.",
    shortTitle: "Infrastructure management",
    eyebrow: "For the people behind the network",
    summary:
      "Connect road condition, asset inventories, and maintenance evidence.",
    description:
      "A useful view of infrastructure connects the big picture with the details that matter on the ground. We bring survey collection, condition assessment, mapped assets, and field follow-up into workflows an engineering team can use.",
    image: "/images/infrastructure-aerial.webp",
    imageAlt: "Illustrative aerial road and bridge network",
    challenge:
      "Different surveys, scattered photographs, and disconnected records make it hard to answer a simple question: what needs attention next? Start by connecting each observation to its location, its evidence, and the decision it supports.",
    outcomes: [
      {
        title: "A connected network view",
        description:
          "Explore the relationship between road segments, asset records, inspection evidence, and condition.",
      },
      {
        title: "Review before action",
        description:
          "Move from a reported finding back to the source imagery and assessment context.",
      },
      {
        title: "A record that grows",
        description:
          "Keep follow-up inspections and maintenance activity connected to the original observation.",
      },
    ],
    workflow: [
      {
        title: "Define the survey",
        description:
          "Identify the network, assets, condition questions, and collection approach.",
      },
      {
        title: "Build the evidence",
        description:
          "Capture observations and organize the analysis with mapped context.",
      },
      {
        title: "Carry it into planning",
        description:
          "Review findings, document priorities, and prepare the next action.",
      },
    ],
    products: ["adams", "pavexpert", "roadlogger"],
    questions: [
      "Which assets and condition measures matter to your team?",
      "What imagery and survey records are already available?",
      "How are maintenance decisions reviewed and communicated?",
    ],
  },
  {
    slug: "traffic-engineering",
    title: "See how the network moves. Understand why it matters.",
    shortTitle: "Traffic engineering",
    eyebrow: "From observation to a usable study",
    summary:
      "Bring cameras, movement studies, review, and reporting into focus.",
    description:
      "Traffic data becomes useful when the source, counting rules, and interpretation stay connected. Our mobility products support distinct parts of that work, from camera observation and recording to movement analysis and engineering reports.",
    image: "/images/intersection.webp",
    imageAlt: "Illustrative signalized junction viewed from above",
    challenge:
      "A final count rarely tells the whole story. The observation period, camera view, movement definitions, and review decisions shape what the results mean. A useful workflow makes that context easy to investigate.",
    outcomes: [
      {
        title: "Clear observation context",
        description:
          "Know which camera, recording, and period sit behind a study.",
      },
      {
        title: "Movement-level understanding",
        description:
          "Define the paths of interest and explore vehicle counts and reporting intervals.",
      },
      {
        title: "Reports with evidence",
        description:
          "Share study outputs while preserving the assumptions and source context.",
      },
    ],
    workflow: [
      {
        title: "Plan the observation",
        description:
          "Choose the location, time, camera source, and questions for the study.",
      },
      {
        title: "Analyze and investigate",
        description:
          "Define movements, review results, and return to the footage when needed.",
      },
      {
        title: "Communicate the findings",
        description:
          "Prepare outputs suited to a project review or engineering decision.",
      },
    ],
    products: ["tmc", "turnflow"],
    questions: [
      "Are you managing camera observations or conducting a movement study?",
      "What recording sources and periods are available?",
      "Which movements, vehicle classes, and outputs do you need?",
    ],
  },
  {
    slug: "field-operations",
    title: "Keep the work connected, wherever the road takes you.",
    shortTitle: "Field operations",
    eyebrow: "Evidence starts on the ground",
    summary:
      "Capture assets, record inspections, and follow the work through repair.",
    description:
      "Field work happens across sites, devices, and changing connectivity. We build workflows that keep location, condition, and media together, then carry that information into review, follow-up, and maintenance coordination.",
    image: "/images/field-inspection.webp",
    imageAlt: "Illustrative engineer inspecting a rural road",
    challenge:
      "A photograph on one device and a note in another system can leave the next inspector without the full story. Give each case a location, a history, and a clear next step, even when the field connection is unreliable.",
    outcomes: [
      {
        title: "Complete field records",
        description:
          "Capture the observation with its location, notes, measurements, and supporting media.",
      },
      {
        title: "Continuity between visits",
        description:
          "Attach repeat observations to an existing case and investigate changes over time.",
      },
      {
        title: "Practical handoffs",
        description:
          "Make the status and next action visible to the people involved in the work.",
      },
    ],
    workflow: [
      {
        title: "Prepare the inspection",
        description:
          "Agree on categories, asset details, and evidence requirements.",
      },
      {
        title: "Capture in context",
        description:
          "Record the case on location and preserve work through offline queues.",
      },
      {
        title: "Follow through",
        description:
          "Review, monitor, schedule, and verify the work with a connected case history.",
      },
    ],
    products: ["roadlogger", "adams"],
    questions: [
      "What does an inspector need to record during a visit?",
      "Where does connectivity affect your field work?",
      "Who reviews a case and confirms that the issue is resolved?",
    ],
  },
  {
    slug: "visual-ai",
    title: "Bring a real-world problem. Build a useful system.",
    shortTitle: "Applied visual AI",
    eyebrow: "From a focused question to a working flow",
    summary:
      "Connect visual data, model assistance, human review, and domain expertise.",
    description:
      "Good applied AI begins with understanding the task. We work across data preparation, computer vision, visual-language interfaces, and software engineering to connect model outputs with workflows people can inspect and use.",
    image: "/images/bisonguard-herd.webp",
    imageAlt: "A bison herd in open grassland",
    challenge:
      "A model output is one part of a larger system. The source data, labeling rules, review process, and user interface determine whether the result helps someone complete real work.",
    outcomes: [
      {
        title: "A problem-led approach",
        description:
          "Define the observation and decision before choosing the technical components.",
      },
      {
        title: "Reviewable intelligence",
        description:
          "Keep model suggestions close to the source evidence and the person interpreting them.",
      },
      {
        title: "A practical product",
        description:
          "Connect data and analysis through an interface shaped around the team's work.",
      },
    ],
    workflow: [
      {
        title: "Understand the task",
        description:
          "Discuss the environment, existing data, constraints, and intended decisions.",
      },
      {
        title: "Prepare and review",
        description:
          "Create a usable annotation and review process around the relevant media.",
      },
      {
        title: "Connect the workflow",
        description:
          "Build the software and interaction that put the analysis in context.",
      },
    ],
    products: ["annotate", "pavexpert", "bisonguard"],
    questions: [
      "What needs to be observed, detected, or interpreted?",
      "Who reviews the output and decides what happens next?",
      "What does success look like in the actual user workflow?",
    ],
  },
];
export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
