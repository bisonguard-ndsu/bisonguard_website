"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { contactSchema, inquiryReasons } from "@/lib/contact";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );
  const [failureMessage, setFailureMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues)
        fieldErrors[String(issue.path[0])] ??= issue.message;
      setErrors(fieldErrors);
      const firstField = formRef.current?.elements.namedItem(
        Object.keys(fieldErrors)[0],
      );
      if (firstField instanceof HTMLElement) firstField.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.error ||
            "We couldn’t send your message. Please try again or email us directly.",
        );
      setStatus("sent");
      formRef.current?.reset();
    } catch (error) {
      setFailureMessage(
        error instanceof Error && error.name !== "AbortError"
          ? error.message
          : "Delivery is taking longer than expected. Please email us directly if you don’t receive a reply.",
      );
      setStatus("failed");
    } finally {
      clearTimeout(timeout);
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-success" role="status">
        <span className="success-icon">
          <Check size={29} />
        </span>
        <h2>Your message is with us.</h2>
        <p>
          Thank you for getting in touch. We’ll reply to the email address you
          provided.
        </p>
        <button
          type="button"
          className="link-button link-button-outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
          <ArrowUpRight size={18} />
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="contact-form"
      noValidate
      aria-busy={status === "sending"}
    >
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-organization">
            Organization <span className="optional">optional</span>
          </label>
          <input
            id="contact-organization"
            name="organization"
            autoComplete="organization"
            maxLength={150}
            placeholder="Company or organization"
            aria-invalid={!!errors.organization}
            aria-describedby={
              errors.organization ? "organization-error" : undefined
            }
          />
          {errors.organization && (
            <p className="field-error" id="organization-error">
              {errors.organization}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="contact-reason">What brings you here?</label>
          <select id="contact-reason" name="reason">
            {inquiryReasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">
          Tell us what you have in mind <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          placeholder="A challenge, a project, a question. We’re listening."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p className="field-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {status === "failed" && (
        <p className="form-failure" role="alert">
          {failureMessage}{" "}
          <a href="mailto:info@infinicitylabs.org">info@infinicitylabs.org</a>
        </p>
      )}
      <div className="form-submit-row">
        <p>
          We’ll use these details to respond to your inquiry.{" "}
          <Link href="/privacy">Read our privacy policy.</Link>
        </p>
        <button
          type="submit"
          className="link-button link-button-solid"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              Sending
              <LoaderCircle size={18} className="spin" />
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight size={18} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
