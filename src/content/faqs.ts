/**
 * Frequently asked questions. Answers repeat only what the product pages
 * already state; anything that depends on a contract (pricing, hosting,
 * data retention) points to a conversation instead of promising terms.
 */

export type Faq = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        q: "What equipment do we need?",
        a: "Usually nothing new. AdAMS and RoadLogger run on ordinary smartphones, mounted on the dashboard or carried by inspectors. TMC and Turnflow work with the traffic cameras you already operate, recordings you already have, or public cameras from the Turnflow directory.",
      },
      {
        q: "Can we try it on our own roads before committing?",
        a: "Yes. Tell us about the network, corridor or intersection you have in mind and we will plan a pilot on your own footage, so you judge the results on roads you know.",
      },
      {
        q: "How long does it take to get results from a survey?",
        a: "Recording takes as long as the drive. Video and GPS upload once the phone is back on Wi-Fi, and detections appear on the asset map after processing, with each one linked to the frame it came from. We will give you a realistic turnaround for your network size during the pilot.",
      },
      {
        q: "How is pricing structured?",
        a: "It depends on the products you use and the size of the network or the number of cameras involved. Write to us with what you have in mind and we will come back with a proposal.",
      },
    ],
  },
  {
    id: "products-data",
    title: "Products and data",
    items: [
      {
        q: "Which products should we start with?",
        a: "Start from the job. For an asset inventory or pavement condition, start with AdAMS. For field inspections and repair tracking, RoadLogger. For live camera monitoring, TMC. For turning-movement counts and traffic studies, Turnflow. They share the same map and accounts, so you can add more later.",
      },
      {
        q: "How do we know the detections are right?",
        a: "Every result keeps its evidence. In AdAMS each detection links to the video frame where it was seen, and tracking stops one sign from being counted twice. In Turnflow every counted vehicle has an annotated clip, so any number can be checked before it is shared.",
      },
      {
        q: "What can we export?",
        a: "Turnflow produces PDF and Word engineering reports that keep observed, adjusted and forecast values apart. AdAMS, TMC and RoadLogger provide project, analysis and inspection reports for engineers, leadership and audits. If you need a specific format for your asset system, ask us.",
      },
      {
        q: "Does anything work without mobile signal?",
        a: "Yes. RoadLogger inspections queue on the phone and sync on their own when the crew is back in coverage. AdAMS survey video uploads once the phone reaches Wi-Fi.",
      },
      {
        q: "Which sign standard do you use?",
        a: "AdAMS classifies traffic signs to their MUTCD codes, the standard used across the United States.",
      },
    ],
  },
  {
    id: "working-with-us",
    title: "Working with us",
    items: [
      {
        q: "Where do you work?",
        a: "Our products run on live networks for agencies and engineering firms in the United States and West Africa. If your network is elsewhere, talk to us.",
      },
      {
        q: "How is our footage and data handled?",
        a: "We agree how footage and results are stored, who can see them and how long they are kept before any data is shared. Our privacy policy covers this website; ask us for the details that apply to a project.",
      },
      {
        q: "Do you take on custom projects or research collaborations?",
        a: "Yes. We work with agencies, universities and engineering firms on surveys, studies and applied research, from pavement condition to traffic safety and vision-language models for roads.",
      },
      {
        q: "We already use another asset system. Can you fit in?",
        a: "Tell us what you run today. We will look at how our outputs can feed it rather than replace it.",
      },
    ],
  },
];

/** A short set for the homepage */
export const homeFaqs: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[0].items[1],
  faqGroups[1].items[1],
  faqGroups[1].items[2],
  faqGroups[1].items[3],
  faqGroups[2].items[0],
];

/** Questions specific to each product page */
export const productFaqs: Record<string, Faq[]> = {
  adams: [
    {
      q: "What does AdAMS detect?",
      a: "Traffic signs (classified to MUTCD codes), road markings, street lights, signals, guardrails, hydrants, poles and delineators, plus pavement distress such as cracks, potholes and raveling.",
    },
    {
      q: "How is pavement condition graded?",
      a: "Each defect is graded from Level 1 (minor) to Level 5 (critical), and every segment you drive gets a roughness (IRI) score, colour-coded from excellent to poor.",
    },
    {
      q: "How do we record a survey?",
      a: "Mount a phone on the dashboard and drive with the AdAMS app. Video and GPS upload on their own once you are back on Wi-Fi.",
    },
    {
      q: "Can we keep the inventory up to date?",
      a: "Yes. Repeat drives update the map, and missing, damaged or obscured assets can be raised as work orders and followed to repair.",
    },
  ],
  "traffic-management": [
    {
      q: "Which cameras can TMC use?",
      a: "The intersection and corridor cameras you already operate. Each one appears on the map and in the live wall once it is connected.",
    },
    {
      q: "What does TMC measure?",
      a: "Volume, speed, occupancy and density, measured from recorded footage rather than estimated.",
    },
    {
      q: "Can we record only the periods we need?",
      a: "Yes. Record on a schedule for the periods you study, or start a recording on demand when something happens. Recordings are searchable by camera and time.",
    },
    {
      q: "Who gets alerted?",
      a: "Operational alerts are routed to the operators responsible, and every analysis can be exported as a report.",
    },
  ],
  turnflow: [
    {
      q: "Where does the footage come from?",
      a: "Upload your own recording, or pick from a directory of more than 27,000 public traffic cameras across 28 US states and record the window you need. Up to four cameras can be recorded at once.",
    },
    {
      q: "How are movements defined?",
      a: "Draw zones or example paths for each approach and name the movements. You can test the layout before running the full count.",
    },
    {
      q: "Can a reviewer check the counts?",
      a: "Yes. Every counted vehicle has annotated evidence video, sessions can be compared and validated, and coverage is tracked so missing time is never read as zero traffic.",
    },
    {
      q: "What report formats are available?",
      a: "PDF and Word engineering reports that keep observed, adjusted and forecast values apart.",
    },
  ],
  roadlogger: [
    {
      q: "Does RoadLogger work without signal?",
      a: "Yes. Inspections wait in the outbox on the phone and sync on their own when the crew is back in coverage.",
    },
    {
      q: "What happens after a defect is logged?",
      a: "Engineers triage it, set priority and decide whether to monitor it, schedule a repair or close it. The case closes only when the repair is verified.",
    },
    {
      q: "What do supervisors see?",
      a: "A dashboard with KPIs, an action queue and the repair pipeline, plus a map of every open case filterable by severity, type and team.",
    },
    {
      q: "Can contractors use it?",
      a: "Yes. Contractors reporting to an agency can log inspections and update cases, so the agency sees progress on the same map.",
    },
  ],
};
