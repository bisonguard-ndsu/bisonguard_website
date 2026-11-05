import { CookieSettingsButton } from "@/components/site/consent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy & cookies",
  "How the InfiniCity Labs website handles inquiries, optional analytics, and cookie preferences.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Privacy & cookies</p>
        <h1>
          Your information.
          <br />
          <em>Your choices.</em>
        </h1>
        <p>
          This page explains how information is handled when you use this
          website. Updated November 5, 2026.
        </p>
      </section>
      <div className="wrap privacy-layout">
        <nav className="privacy-contents" aria-label="Privacy sections">
          <a href="#inquiries">When you contact us</a>
          <a href="#analytics">Website analytics</a>
          <a href="#preferences">Your preferences</a>
          <a href="#third-parties">External services</a>
          <a href="#privacy-contact">Questions and requests</a>
        </nav>
        <div className="privacy-content">
          <section id="inquiries">
            <h2>When you contact us</h2>
            <p>
              The contact form asks for your name, email address, inquiry type,
              and message. You can also provide your organization. These details
              are sent to info@infinicitylabs.org so our team can respond and
              continue the conversation.
            </p>
            <p>
              Our email service processes the message as part of delivery.
              Contact information is used to handle the inquiry and any
              resulting project or relationship. Please avoid including
              confidential project material in an initial inquiry.
            </p>
          </section>
          <section id="analytics">
            <h2>Website analytics</h2>
            <p>
              With your permission, this website can use Google Analytics to
              understand page visits and how visitors move through the site.
              Analytics activates when the service is configured and you accept
              it in your cookie preferences.
            </p>
            <p>
              Analytics may process browser and device information, visited page
              addresses, and technical connection information. We send page
              paths without query strings and do not send contact-form content
              to analytics. Advertising features are disabled in our
              configuration.
            </p>
          </section>
          <section id="preferences">
            <h2>Your preferences</h2>
            <p>
              Your choice is saved in your browser so the website can remember
              it. You can accept analytics, reject it, or change your choice at
              any time. Rejecting optional analytics allows you to continue
              using the website and contact form.
            </p>
            <p>
              Withdrawing consent stops our analytics tracking and clears the
              Google Analytics cookies accessible to this site. Information
              already transmitted is handled by the analytics provider.
            </p>
            <CookieSettingsButton />
          </section>
          <section id="third-parties">
            <h2>External services and links</h2>
            <p>
              Platform access, publication links, and social links take you to
              separate websites. Those services have their own privacy
              practices. The company website’s cookie preferences apply to this
              website.
            </p>
            <p>
              Our hosting provider may process technical request information to
              deliver pages and operate the service. Fonts and website imagery
              are served with the website.
            </p>
          </section>
          <section id="privacy-contact">
            <h2>Questions and requests</h2>
            <p>
              For questions about information you have shared, corrections, or
              deletion requests, email{" "}
              <a href="mailto:info@infinicitylabs.org">
                info@infinicitylabs.org
              </a>
              . We will review the request in the context of the information and
              any ongoing relationship.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
