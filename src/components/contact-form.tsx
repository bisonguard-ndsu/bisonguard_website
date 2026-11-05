"use client";

import { useId, useRef, useState } from "react";
import { contactSchema } from "@/lib/contact";
import { contactTopics, site } from "@/content/site";

type Field = "name" | "email" | "organization" | "topic" | "message";
type Errors = Partial<Record<Field, string>>;
type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; name: string } | { kind: "failed"; message: string };

const order: Field[] = ["name", "email", "organization", "topic", "message"];

export default function ContactForm({ defaultTopic }: { defaultTopic?: (typeof contactTopics)[number] }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<State>({ kind: "idle" });
  const statusRef = useRef<HTMLDivElement>(null);

  const fieldId = (f: Field) => `${uid}-${f}`;

  const focusFirst = (errs: Errors) => {
    const first = order.find((f) => errs[f]);
    if (first) document.getElementById(fieldId(first))?.focus();
  };

  const validateOne = (f: Field, value: string) => {
    const shape = contactSchema.shape[f];
    const r = shape.safeParse(value);
    setErrors((e) => ({ ...e, [f]: r.success ? undefined : r.error.issues[0]?.message }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as Field;
        if (order.includes(k) && !errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      focusFirst(errs);
      return;
    }
    setErrors({});
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Record<string, string[]> };
      if (res.ok && json.ok) {
        setState({ kind: "sent", name: parsed.data.name.split(" ")[0] });
        formRef.current?.reset();
        requestAnimationFrame(() => statusRef.current?.focus());
      } else {
        if (json.fields) {
          const errs: Errors = {};
          for (const [k, v] of Object.entries(json.fields)) if (order.includes(k as Field)) errs[k as Field] = v?.[0];
          setErrors(errs);
          focusFirst(errs);
        }
        setState({ kind: "failed", message: json.error || "The message didn't send." });
        requestAnimationFrame(() => statusRef.current?.focus());
      }
    } catch {
      setState({ kind: "failed", message: "We couldn't reach the server — check your connection." });
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  if (state.kind === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="form-done">
        <p className="t-h3">Thanks, {state.name}. Your message is with us.</p>
        <p>We reply by email, usually within two working days.</p>
        <button type="button" onClick={() => setState({ kind: "idle" })} className="btn btn--secondary">
          Send another message
        </button>
      </div>
    );
  }

  const aria = (f: Field, hint = false) => ({
    id: fieldId(f),
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": [hint && `${fieldId(f)}-hint`, errors[f] && `${fieldId(f)}-err`].filter(Boolean).join(" ") || undefined,
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (errors[f] !== undefined || e.target.value) validateOne(f, e.target.value);
    },
  });

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate method="post" className="form">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="form-status">
        {state.kind === "failed" && (
          <p role="alert" className="form-error">
            {state.message} Your message is still in the form. Try again, or{" "}
            <a className="link" href={`mailto:${site.email}`}>
              email our team
            </a>
            .
          </p>
        )}
        {errorCount > 1 && state.kind !== "failed" && <p className="form-error">{errorCount} fields need attention.</p>}
      </div>

      <F id={fieldId("name")} error={errors.name} label="Name">
        <input type="text" autoComplete="name" {...aria("name")} />
      </F>
      <F id={fieldId("email")} error={errors.email} label="Work email">
        <input type="email" autoComplete="email" inputMode="email" {...aria("email")} />
      </F>
      <F id={fieldId("organization")} error={errors.organization} label="Organisation (optional)">
        <input type="text" autoComplete="organization" {...aria("organization")} />
      </F>
      <F id={fieldId("topic")} error={errors.topic} label="What is it about?">
        <select defaultValue={defaultTopic ?? ""} {...aria("topic")}>
          <option value="" disabled>
            Choose one
          </option>
          {contactTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </F>
      <F id={fieldId("message")} error={errors.message} label="Message" hint="The network, the problem and any timing that matters." full>
        <textarea rows={5} {...aria("message", true)} />
      </F>

      {/* Honeypot */}
      <div aria-hidden className="sr-only">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="btn-row">
        <button type="submit" disabled={state.kind === "sending"} className="btn btn--primary">
          {state.kind === "sending" ? "Sending" : "Send your message"}
        </button>
      </div>
      <p className="t-small muted">
        A person on the team replies within two working days. See our{" "}
        <a className="link" href="/privacy">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function F({
  id,
  error,
  label,
  hint,
  full,
  children,
}: {
  id: string;
  error?: string;
  label: string;
  hint?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "field field--full" : "field"}>
      <label htmlFor={id}>{label}</label>
      {hint && (
        <span id={`${id}-hint`} className="t-small muted">
          {hint}
        </span>
      )}
      {children}
      {error && (
        <span id={`${id}-err`} className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}
