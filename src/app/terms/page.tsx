import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, Prose } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for using the InfiniCity Labs website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageIntro label="Legal" title="Terms of use" lead="The terms for using this website. Our products are covered by separate agreements with each customer." />
      <Prose>
        <h2>Using this website</h2>
        <p>
          You may browse, read and share links to this website for any lawful purpose. Please do not try to disrupt it, probe it for
          vulnerabilities without our permission, or scrape it in a way that degrades the service for others.
        </p>
        <h2>Content</h2>
        <p>
          Text, images, product screenshots and logos on this site belong to InfiniCity Labs or are used with permission. Photographs from
          third-party libraries remain under their own licences. Publications link to the publisher or preprint server and are subject to
          their terms.
        </p>
        <h2>Accuracy</h2>
        <p>
          We describe our products and projects as accurately as we can, but the website is general information, not an offer or a
          guarantee of results. Figures from specific projects depend on the network, footage and conditions of that project.
        </p>
        <h2>Product sign-in</h2>
        <p>
          The sign-in links on this site lead to our applications. Use of those applications is governed by the agreement between your
          organisation and InfiniCity Labs.
        </p>
        <h2>Links to other sites</h2>
        <p>We link to papers, partners and social profiles we do not control. We are not responsible for their content.</p>
        <h2>Privacy</h2>
        <p>
          How we handle information you send us is set out in the <Link href="/privacy">privacy policy</Link> and the{" "}
          <Link href="/cookies">cookie policy</Link>.
        </p>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms. The version on this page is the one that applies. Questions go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Prose>
    </>
  );
}
