import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | InfiniCity Labs",
  description:
    "How InfiniCity Labs uses cookies and handles information collected through our website.",
  alternates: {
    canonical: "https://infinicitylabs.org/privacy",
  },
};

const cookieCategories = [
  {
    name: "Necessary",
    body: "Required for the site to function — remembering your cookie choice, keeping forms working, and maintaining basic security. These cannot be switched off.",
  },
  {
    name: "Analytics",
    body: "Helps us understand how visitors move through the site, which pages are useful, and where people get stuck, so we can improve it. Off unless you opt in.",
  },
  {
    name: "Marketing",
    body: "Used to measure the performance of our campaigns and how visitors arrive at the site. Off unless you opt in.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-dark-blue px-4 sm:px-6 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto container">
          <div className="inline-flex items-center mb-6">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Privacy &amp; Cookie Policy
          </h1>
          <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
            This page explains what information the InfiniCity Labs website
            collects, the cookies we set, and how you can change your choice at
            any time.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-20">
        <div className="max-w-3xl mx-auto container space-y-14">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What we collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect two kinds of information. The first is what you give us
              directly — if you fill in the contact form, we receive the name,
              email address, and message you submit, and we use them solely to
              reply to your enquiry. The second is technical information your
              browser sends automatically, such as your approximate location,
              device type, and the pages you visit, which we use in aggregate to
              understand how the site is performing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Cookies we use
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              A cookie is a small file stored by your browser. We group the
              cookies on this site into three categories:
            </p>
            <div className="space-y-6">
              {cookieCategories.map((category) => (
                <div
                  key={category.name}
                  className="border-l-2 border-neon bg-bluish-white/10 p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your choice, and how to change it
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When you first visit, a banner lets you accept all cookies, reject
              everything optional, or choose category by category. Your decision
              is stored in your browser&apos;s local storage under the key{" "}
              <code className="bg-bluish-white/30 px-1.5 py-0.5 text-sm text-foreground">
                icl-cookie-consent
              </code>
              . Nothing optional is loaded before you choose.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              To change your decision later, clear your browser&apos;s site data
              for this domain — the banner will appear again on your next visit.
              You can also block or delete cookies entirely in your browser
              settings, though parts of the site may not behave as expected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sharing and retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal information. Contact form submissions
              are kept only as long as needed to handle your enquiry and any
              follow-up. Where we rely on third-party providers to host the site
              or deliver email, those providers process data on our behalf and
              under our instructions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this policy, or you would like us to
              delete information you have sent us, get in touch at{" "}
              <a
                href="mailto:info@infinicitylabs.org"
                className="text-foreground font-medium underline underline-offset-4 decoration-neon hover:text-neon transition-colors duration-200"
              >
                info@infinicitylabs.org
              </a>{" "}
              or through our{" "}
              <Link
                href="/#contact"
                className="text-foreground font-medium underline underline-offset-4 decoration-neon hover:text-neon transition-colors duration-200"
              >
                contact form
              </Link>
              .
            </p>
          </div>

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-8">
            This policy describes how the website currently operates. If our
            practices change, we will update this page.
          </p>
        </div>
      </section>
    </main>
  );
}
