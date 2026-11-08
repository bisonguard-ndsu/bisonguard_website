import type { Metadata } from "next";
import { PageIntro, Prose } from "@/components/page-intro";
import { CookieSettingsLink } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "The cookies the InfiniCity Labs website sets, and how to change your choice.",
  alternates: { canonical: "/cookies" },
};

const categories = [
  { name: "Necessary", body: "Remembers your cookie choice and keeps the contact form secure. Always on." },
  { name: "Analytics", body: "Google Analytics, to count visits and see which pages are useful. Off unless you allow it." },
  { name: "Marketing", body: "Campaign measurement. We don't run any today; it stays off unless you opt in." },
];

export default function CookiesPage() {
  return (
    <>
      <PageIntro label="Legal" title="Cookie policy" lead="What we set in your browser, and how to change your mind." />
      <Prose>
        <h2>Categories</h2>
        <dl className="border-t border-line">
          {categories.map((c) => (
            <div key={c.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-bold text-fg">{c.name}</dt>
              <dd>{c.body}</dd>
            </div>
          ))}
        </dl>
        <h2>Changing your choice</h2>
        <p>
          Your choice is kept for 12 months. You can change it at any time:{" "}
          <CookieSettingsLink className="cursor-pointer font-semibold text-primary underline underline-offset-2" />.
        </p>
      </Prose>
    </>
  );
}
