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

/** Section anchors, mirrored by the contents rail on wide screens. */
const contents = [
  { id: "what-we-collect", label: "What we collect" },
  { id: "cookies", label: "Cookies we use" },
  { id: "your-choice", label: "Your choice, and how to change it" },
  { id: "sharing", label: "Sharing and retention" },
  { id: "contact", label: "Contact us" },
];

const headingClass =
  "text-2xl font-bold text-ink-900 md:text-[1.75rem] scroll-mt-24";
const bodyClass = "text-base leading-relaxed text-ink-500 md:text-lg";
const inlineLinkClass =
  "font-medium text-ink-900 underline decoration-neon underline-offset-4 transition-colors duration-300 hover:text-neon-deep break-words";

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Page header — continues the navbar's navy so the two read as one block */}
      <section className="grain section-x relative overflow-hidden bg-navy-950 py-16 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-neon" aria-hidden="true" />
            <span className="eyebrow text-neon">Legal</span>
          </div>

          <h1 className="mt-6 text-3xl leading-[1.1] font-bold text-white md:text-4xl lg:text-5xl">
            Privacy &amp; Cookie Policy
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bluish-white/80 md:text-lg">
            This page explains what information the InfiniCity Labs website
            collects, the cookies we set, and how you can change your choice at
            any time.
          </p>
        </div>
      </section>

      {/* Body — contents rail on the left, policy on a readable measure */}
      <section className="section-y section-x">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <nav
              aria-label="On this page"
              className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start"
            >
              <p className="eyebrow text-ink-500">On this page</p>
              <ul className="mt-5 space-y-3 border-l border-ink-100 pl-5">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm leading-relaxed text-ink-500 transition-colors duration-300 hover:text-neon-deep"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="max-w-2xl space-y-14">
                <div>
                  <h2 id="what-we-collect" className={headingClass}>
                    What we collect
                  </h2>
                  <p className={`mt-5 ${bodyClass}`}>
                    We collect two kinds of information. The first is what you
                    give us directly — if you fill in the contact form, we
                    receive the name, email address, and message you submit, and
                    we use them solely to reply to your enquiry. The second is
                    technical information your browser sends automatically, such
                    as your approximate location, device type, and the pages you
                    visit, which we use in aggregate to understand how the site
                    is performing.
                  </p>
                </div>

                <div>
                  <h2 id="cookies" className={headingClass}>
                    Cookies we use
                  </h2>
                  <p className={`mt-5 ${bodyClass}`}>
                    A cookie is a small file stored by your browser. We group the
                    cookies on this site into three categories:
                  </p>

                  <ul className="mt-8 border-t border-ink-100">
                    {cookieCategories.map((category) => (
                      <li
                        key={category.name}
                        className="group grid grid-cols-1 gap-2 border-b border-ink-100 py-6 sm:grid-cols-4 sm:gap-6"
                      >
                        <h3 className="flex items-center gap-3 text-base font-semibold text-ink-900 sm:col-span-1">
                          <span
                            aria-hidden="true"
                            className="h-px w-4 shrink-0 bg-neon transition-all duration-300 group-hover:w-6"
                          />
                          {category.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-500 sm:col-span-3 md:text-base">
                          {category.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 id="your-choice" className={headingClass}>
                    Your choice, and how to change it
                  </h2>
                  <p className={`mt-5 ${bodyClass}`}>
                    When you first visit, a banner lets you accept all cookies,
                    reject everything optional, or choose category by category.
                    Your decision is stored in your browser&apos;s local storage
                    under the key{" "}
                    <code className="border border-ink-100 bg-ink-50 px-1.5 py-0.5 text-[0.9em] tracking-tight break-words text-ink-900">
                      icl-cookie-consent
                    </code>
                    . Nothing optional is loaded before you choose.
                  </p>
                  <p className={`mt-4 ${bodyClass}`}>
                    To change your decision later, clear your browser&apos;s
                    site data for this domain — the banner will appear again on
                    your next visit. You can also block or delete cookies
                    entirely in your browser settings, though parts of the site
                    may not behave as expected.
                  </p>
                </div>

                <div>
                  <h2 id="sharing" className={headingClass}>
                    Sharing and retention
                  </h2>
                  <p className={`mt-5 ${bodyClass}`}>
                    We do not sell your personal information. Contact form
                    submissions are kept only as long as needed to handle your
                    enquiry and any follow-up. Where we rely on third-party
                    providers to host the site or deliver email, those providers
                    process data on our behalf and under our instructions.
                  </p>
                </div>

                <div>
                  <h2 id="contact" className={headingClass}>
                    Contact us
                  </h2>
                  <p className={`mt-5 ${bodyClass}`}>
                    If you have questions about this policy, or you would like
                    us to delete information you have sent us, get in touch at{" "}
                    <a
                      href="mailto:info@infinicitylabs.org"
                      className={inlineLinkClass}
                    >
                      info@infinicitylabs.org
                    </a>{" "}
                    or through our{" "}
                    <Link href="/#contact" className={inlineLinkClass}>
                      contact form
                    </Link>
                    .
                  </p>
                </div>

                <p className="border-t border-ink-100 pt-8 text-sm leading-relaxed text-ink-500">
                  This policy describes how the website currently operates. If
                  our practices change, we will update this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
