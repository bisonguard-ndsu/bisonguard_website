import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, Prose } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What the InfiniCity Labs website collects, why, and how to ask us to delete it.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro label="Legal" title="Privacy policy" lead="What this website collects, why, and how to ask us to delete it." />
      <Prose>
        <h2>What we collect</h2>
        <p>
          If you use the contact form, we receive your name, email address, organisation (if you give one), the topic you
          chose and your message. We use them only to reply to you.
        </p>
        <p>
          If you allow analytics cookies, Google Analytics records which pages you visit, your device type and approximate
          location. We look at this only in aggregate, to see which pages are useful.
        </p>
        <h2>Cookies</h2>
        <p>
          The <Link href="/cookies">cookie policy</Link> lists each category and what it does. Nothing optional loads until
          you choose.
        </p>
        <h2>Sharing and retention</h2>
        <p>
          We do not sell personal information. Contact messages are kept only as long as we need them to handle your enquiry
          and any follow-up. Our hosting, email and analytics providers process data on our behalf and under our
          instructions.
        </p>
        <h2>Your rights</h2>
        <p>
          To see, correct or delete what you have sent us, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>This policy describes how the website works today. If that changes, we will update this page.</p>
      </Prose>
    </>
  );
}
