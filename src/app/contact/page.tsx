import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Let’s talk",
  "Contact InfiniCity Labs about products, engineering projects, partnerships, and research. Email info@infinicitylabs.org or send an inquiry.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="wrap contact-page">
      <div className="contact-page-heading">
        <p className="eyebrow">Start a conversation</p>
        <h1>
          What do you have
          <br />
          <em>in mind?</em>
        </h1>
      </div>
      <div className="contact-layout">
        <div className="contact-intro">
          <p>
            Tell us about the challenge, the project, or the question. We’ll
            help you find a useful next step.
          </p>
          <a href="mailto:info@infinicitylabs.org" className="contact-email">
            info@infinicitylabs.org
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <p className="contact-note">
            Interested in a product walkthrough, a research collaboration, or
            working with us? You’re in the right place.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
