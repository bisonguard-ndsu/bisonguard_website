export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  relatedProducts: string[];
};
export const resources: Resource[] = [
  {
    slug: "from-road-surveys-to-maintenance-decisions",
    title: "From road surveys to maintenance decisions",
    summary:
      "Keep observations, locations, and inspection history connected to the next action.",
    category: "Infrastructure",
    readTime: "3 min read",
    image: "/images/field-inspection.webp",
    intro:
      "A road survey produces photographs, recordings, measurements, and observations. The practical challenge is keeping those pieces connected. An engineer should be able to move from a network overview to an individual finding, understand the evidence behind it, and identify the next action without rebuilding the story from scattered files.",
    sections: [
      {
        heading: "Start with the decision the survey needs to support",
        body: [
          "Define the questions before collection begins. Are you identifying damaged signs, reviewing pavement condition, checking a completed repair, or updating an asset inventory? Each question needs a different combination of images, measurements, and context.",
          "Agree on the categories and descriptions your team will use. A shared vocabulary makes findings easier to compare across inspectors and survey dates. Record what an assessment means, including conditions that could affect interpretation, rather than relying on a condition label alone.",
        ],
      },
      {
        heading: "Keep every finding connected to its location",
        body: [
          "A useful observation includes enough information for another person to find the same asset or road segment. Record its location, a recognizable description, the inspection date, and supporting media. Check that the image shows the issue described.",
          "Combine a close view of the defect with a wider view of its surroundings. The detail explains what needs attention; the wider view explains where it sits and how a field team can approach the next inspection.",
        ],
      },
      {
        heading: "Review the evidence before setting priorities",
        body: [
          "An automated finding gives the team something to investigate. Review the underlying footage or photograph, confirm the asset type, and check that the reported location and condition match the evidence.",
          "Keep severity and priority distinct. Severity describes the observed condition. Priority reflects the maintenance decision, which may also depend on exposure, access, ongoing work, and engineering judgment. Preserving both helps explain why similar defects can receive different responses.",
        ],
      },
      {
        heading: "Build a history through repeat inspections",
        body: [
          "A single visit captures a moment. Follow-up inspections help a team understand whether a condition is changing, stable, or addressed. Attach new observations to the existing case so earlier evidence remains available.",
          "Where practical, repeat the same measurements and photograph the asset from comparable viewpoints. Record weather and inspection context when they matter. Consistent observations reduce the chance of mistaking a different camera angle for a change in condition.",
        ],
      },
      {
        heading: "Close the loop after the work",
        body: [
          "Give each finding a clear next step: review, monitor, schedule a repair, or confirm that action is complete. A case history should show responsibility and explain why its status changed.",
          "After maintenance, capture verification evidence and connect it to the original issue. AdAMS organizes survey findings and asset context, while RoadLogger supports field observations and follow-up records. Discuss how those responsibilities fit your team’s workflow before adopting a new process.",
        ],
      },
    ],
    relatedProducts: ["adams", "roadlogger"],
  },
  {
    slug: "building-a-useful-turning-movement-study",
    title: "Building a useful turning-movement study",
    summary:
      "Define movements, preserve the video evidence, and make the counting rules explicit.",
    category: "Mobility",
    readTime: "3 min read",
    image: "/images/intersection.webp",
    intro:
      "A turning-movement study explains how traffic passes through a junction during a defined period. Its usefulness depends on more than a final total. The camera view, movement definitions, vehicle categories, analysis intervals, and review decisions all shape what the results mean and how another person can assess them.",
    sections: [
      {
        heading: "Write down the question and observation period",
        body: [
          "Start with the engineering question. You might need to understand turning patterns during a selected hour, compare approaches, or examine how different vehicle classes use a junction. Define the observation period and the intervals you want to report.",
          "Keep the recording’s date, time, and camera context with the study. Note interruptions or unusual conditions that could affect interpretation. A bounded observation is easier to discuss than a total detached from when and how it was collected.",
        ],
      },
      {
        heading: "Check what the camera can actually show",
        body: [
          "Review the footage before counting. Check whether vehicles remain visible through the relevant movements and whether queues, large vehicles, glare, or camera movement obscure important areas.",
          "Define the study around the evidence available. If an approach cannot be observed reliably, document the limitation or choose a better recording. A wider view is not automatically a more useful one; the movements of interest must be distinguishable in the footage.",
        ],
      },
      {
        heading: "Make movement definitions unambiguous",
        body: [
          "Give every movement a clear name and define the zones or paths used to recognize it. A reviewer should understand what qualifies as a completed movement and where counting begins and ends.",
          "Check the definitions against several examples, including vehicles near zone boundaries. Document how vehicle classes are grouped and how unusual paths are handled. Another engineer should be able to apply the rules without guessing what the original analyst intended.",
        ],
      },
      {
        heading: "Review the passages behind the totals",
        body: [
          "Use the video to inspect selected detections, tracks, and movement assignments. Look closely at difficult conditions and apparent inconsistencies between the scene and the count summary.",
          "When comparing analysis runs, treat them as alternative measurements of the same traffic. Do not add their totals together. Record the reason for review decisions so corrected counts remain connected to their evidence. Turnflow brings recorded traffic, movement definitions, and review into the same study workflow.",
        ],
      },
      {
        heading: "Report enough context to make the results usable",
        body: [
          "Present counts by movement, vehicle category, and reporting interval as needed for the study. Explain the observation period, camera limitations, counting rules, and any review or corrections.",
          "Include references to the supporting footage or saved outputs so colleagues can investigate a result. Distinguish automated observations from reviewed conclusions and state what the study covers. That context makes the numbers easier to carry into the next engineering discussion.",
        ],
      },
    ],
    relatedProducts: ["turnflow", "tmc"],
  },
  {
    slug: "human-review-in-computer-vision-workflows",
    title: "Human review in computer vision workflows",
    summary:
      "Give reviewers clear rules, useful context, and a way to record corrections.",
    category: "Applied AI",
    readTime: "3 min read",
    image: "/images/adams-inspection.webp",
    intro:
      "Computer vision can draw attention to objects and conditions in large collections of imagery. Human review supplies decisions that a model output alone cannot settle: whether a label is appropriate, whether an object boundary is useful, and whether the evidence meets the purpose of the project. Design that review into the workflow from the beginning.",
    sections: [
      {
        heading: "Define what a useful annotation looks like",
        body: [
          "Start with the task the data will support. Identifying a traffic sign, describing pavement distress, and distinguishing vehicle classes require different labels and different rules for drawing boundaries.",
          "Write examples for ordinary and ambiguous cases. Explain how to handle partial objects, poor visibility, overlapping items, and categories that look similar. Keep the instructions accessible while people work so reviewers can apply a shared standard.",
        ],
      },
      {
        heading: "Use model output as a starting point",
        body: [
          "Automatic annotation can propose labels and boundaries for a reviewer to inspect. Treat those proposals as editable observations. A confident-looking label still needs to make sense in the image and in the project’s labeling rules.",
          "Reviewers should be able to remove an incorrect label, adjust a boundary, and add an object that was missed. Keep the original media close to the annotation tools so checking context is a normal part of the task.",
        ],
      },
      {
        heading: "Separate annotation from review responsibilities",
        body: [
          "Decide who prepares annotations, who checks them, and who resolves disagreements. Make those responsibilities visible through project assignments and review states.",
          "A useful review explains the correction. If people interpret a category differently, update the instructions and return to affected examples. AdAMS Annotate supports project roles and assigned work, helping teams organize this process around the images and videos being prepared.",
        ],
      },
      {
        heading: "Keep changes connected to their source",
        body: [
          "Preserve the relationship between a recording, its frames, the annotations, and the review decisions. Avoid disconnected exports whose origin or review status is unclear.",
          "When a project contains several videos, name and organize them consistently. Record which work has been reviewed and which still needs attention. This makes it easier to revisit a disputed example, continue an interrupted task, or explain a dataset’s state to another team.",
        ],
      },
      {
        heading: "Check the dataset at the handoff",
        body: [
          "Before exporting, confirm that labels, class names, and annotation types match what the next stage expects. Choose the required format and inspect a representative sample of the exported images and labels.",
          "Document what the collection contains, how it was annotated, and what review was performed. Exporting successfully does not establish that the labels are correct. A useful handoff gives the next team enough context to assess the data and understand its limitations.",
        ],
      },
    ],
    relatedProducts: ["annotate", "adams"],
  },
];
export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
