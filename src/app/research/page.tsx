import { ResearchList } from "@/components/site/research-list";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Research",
  "Selected publications co-authored by Armstrong Aboah and collaborators on pavement assessment, visual understanding, and traffic analysis.",
  "/research",
);

export default function ResearchPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Research & ideas</p>
        <h1>Research & publications.</h1>
        <p>
          Work in pavement assessment, visual understanding, and mobility
          informs the questions we explore. Discover selected publications
          co-authored by Armstrong Aboah and collaborators.
        </p>
      </section>
      <section
        className="wrap product-index"
        aria-label="Selected publications"
      >
        <ResearchList />
        <p className="research-note">
          Each entry links to its source and identifies the publication status
          of that version. Author affiliations and acknowledgments are available
          in the papers.
        </p>
      </section>
      <ContactBand
        title="Some questions deserve a collaborator."
        description="If your research connects with ours, tell us about the problem you’re exploring."
      />
    </>
  );
}
