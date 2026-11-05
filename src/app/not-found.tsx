import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="label text-guide">404 · Not on the record</p>
        <h1 className="t-h1 mt-5 max-w-[16ch]">We couldn&apos;t find that page.</h1>
        <p className="t-lead mt-6 max-w-[48ch] text-ink-2">
          It may have moved when we rebuilt the site. These are the likeliest places to look.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link href="/products/adams" className="btn btn-secondary">
            See AdAMS
          </Link>
        </div>
      </div>
    </section>
  );
}
