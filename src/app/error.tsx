"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="wrap not-found">
      <p className="eyebrow">Something went wrong</p>
      <h1>
        Let’s try <em>again.</em>
      </h1>
      <p>
        We couldn’t load this page. You can retry or get in touch if the problem
        continues.
      </p>
      <div className="hero-actions">
        <button
          type="button"
          className="link-button link-button-solid"
          onClick={reset}
        >
          Try again
        </button>
        <Link className="text-link" href="/contact">
          Contact us
        </Link>
      </div>
    </section>
  );
}
