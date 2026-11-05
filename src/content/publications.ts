export type Publication = {
  title: string;
  year: number;
  venue: string;
  topic: "Pavement" | "Mobility";
  authors: string;
  summary: string;
  url: string;
};

// Metadata corresponds to the linked version, including its publication status.
export const publications: Publication[] = [
  {
    title:
      "Vision-Language Foundation Models for Comprehensive Automated Pavement Condition Assessment",
    year: 2026,
    venue: "arXiv preprint",
    topic: "Pavement",
    authors:
      "Blessing Agyei Kyem, Joshua Kofi Asamoah, Anthony Dontoh, Armstrong Aboah",
    summary:
      "Specialized vision-language models for identifying pavement distress, interpreting condition, and answering engineering questions.",
    url: "https://arxiv.org/abs/2604.08212",
  },
  {
    title:
      "PaveCap: The First Multimodal Framework for Comprehensive Pavement Condition Assessment with Dense Captioning and PCI Estimation",
    year: 2024,
    venue: "arXiv preprint",
    topic: "Pavement",
    authors:
      "Blessing Agyei Kyem, Eugene Kofi Okrah Denteh, Joshua Kofi Asamoah, Armstrong Aboah",
    summary:
      "Connecting pavement condition estimation with descriptions of visible distress to make inspection outputs easier to interpret.",
    url: "https://arxiv.org/abs/2408.04110",
  },
  {
    title: "PaveSAM Segment Anything for Pavement Distress",
    year: 2024,
    venue: "Road Materials and Pavement Design",
    topic: "Pavement",
    authors:
      "Neema Jakisa Owor, Yaw Adu-Gyamfi, Armstrong Aboah, Mark Amo-Boateng",
    summary:
      "Adapting the Segment Anything Model to delineate pavement distress using bounding-box prompts.",
    url: "https://arxiv.org/abs/2409.07295",
  },
  {
    title:
      "Enhancing Traffic Safety with Parallel Dense Video Captioning for End-to-End Event Analysis",
    year: 2024,
    venue: "CVPR Workshops",
    topic: "Mobility",
    authors: "Maged Shoman, Dongdong Wang, Armstrong Aboah, Mohamed Abdel-Aty",
    summary:
      "Describing traffic events to support analysis of interactions between pedestrians and vehicles.",
    url: "https://openaccess.thecvf.com/content/CVPR2024W/AICity/html/Shoman_Enhancing_Traffic_Safety_with_Parallel_Dense_Video_Captioning_for_End-to-End_CVPRW_2024_paper.html",
  },
  {
    title:
      "Real-Time Multi-Class Helmet Violation Detection Using Few-Shot Data Sampling Technique and YOLOv8",
    year: 2023,
    venue: "CVPR Workshops",
    topic: "Mobility",
    authors: "Armstrong Aboah, Bin Wang, Ulas Bagci, Yaw Adu-Gyamfi",
    summary:
      "Video-based detection of motorcycle helmet violations using targeted data sampling and YOLOv8.",
    url: "https://openaccess.thecvf.com/content/CVPR2023W/AICity/html/Aboah_Real-Time_Multi-Class_Helmet_Violation_Detection_Using_Few-Shot_Data_Sampling_Technique_CVPRW_2023_paper.html",
  },
  {
    title:
      "Edge Computing-Enabled Road Condition Monitoring: System Development and Evaluation",
    year: 2023,
    venue: "arXiv preprint",
    topic: "Pavement",
    authors:
      "Abdulateef Daud, Mark Amo-Boateng, Neema Jakisa Owor, Armstrong Aboah, Yaw Adu-Gyamfi",
    summary:
      "Vehicle-mounted sensors and on-device processing for estimating road roughness and transmitting condition data.",
    url: "https://arxiv.org/abs/2310.05321",
  },
];
