import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { pending } from "@/content/pending";

export const dynamicParams = false;

export function generateStaticParams() {
  return pending.map((p) => ({ slug: p.path.split("/") }));
}

const find = (slug: string[]) => pending.find((p) => p.path === slug.join("/"));

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const page = find((await params).slug);
  return { title: page?.title, description: page?.lead, robots: { index: false } };
}

export default async function PendingPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  const crumbs = slug.length > 1 ? [{ label: page.label === "Project" ? "Work" : page.label + "s", href: "/" + slug[0] }] : undefined;

  return (
    <>
      <PageIntro label={page.label} title={page.title} lead={page.lead} crumbs={crumbs} />
      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="border-l-2 border-survey pl-6 lg:col-span-6">
            <p className="label text-ink-3">In progress · phase {page.phase}</p>
            <p className="mt-3 max-w-[48ch] text-ink-2">
              This page is being written. In the meantime, the AdAMS page shows how we work, and the contact form reaches the
              team directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <Link href="/products/adams" className="btn btn-secondary">
              See AdAMS
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
