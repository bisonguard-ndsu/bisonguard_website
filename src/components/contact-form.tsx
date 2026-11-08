"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { contactSchema } from "@/lib/contact";
import { contactTopics, site } from "@/content/site";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "organization" | "topic" | "message";
type Errors = Partial<Record<Field, string>>;
type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; name: string } | { kind: "failed"; message: string };

const order: Field[] = ["name", "email", "organization", "topic", "message"];

export default function ContactForm({ defaultTopic, tone = "light" }: { defaultTopic?: (typeof contactTopics)[number]; tone?: "light" | "stone" }) {
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
      <div ref={statusRef} tabIndex={-1} role="status" className="border-l-2 border-primary py-2 pl-6 outline-none">
        <p className="t-h3">Thanks, {state.name}. Your message is with us.</p>
        <p className="mt-3 max-w-[48ch] text-fg-2">
          We reply from {site.email}, usually within two working days. If it&apos;s urgent, write to that address directly.
        </p>
        <button type="button" onClick={() => setState({ kind: "idle" })} className="btn btn-secondary mt-6 min-h-11">
          Send another message
        </button>
      </div>
    );
  }

  const input = cn(
    "block w-full rounded-[2px] border border-fg-3/60 px-4 py-3 text-[1rem] text-fg placeholder:text-fg-3 transition-colors",
    "hover:border-fg focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary",
    "aria-[invalid=true]:border-danger",
    tone === "stone" ? "bg-bg" : "bg-bg",
  );

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
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {state.kind === "failed" && (
          <div role="alert" className="border-l-2 border-danger bg-bg py-3 pl-4">
            <p className="font-semibold text-fg">{state.message}</p>
            <p className="mt-1 text-sm text-fg-2">
              Your message is still in the form. Try again, or email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </div>
        )}
        {errorCount > 1 && state.kind !== "failed" && (
          <p className="text-sm font-semibold text-danger">{errorCount} fields need attention.</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <F id={fieldId("name")} error={errors.name} label="Name">
          <input type="text" autoComplete="name" className={input} {...aria("name")} />
        </F>
        <F id={fieldId("email")} error={errors.email} label="Work email">
          <input type="email" autoComplete="email" inputMode="email" className={input} {...aria("email")} />
        </F>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <F id={fieldId("organization")} error={errors.organization} label="Organisation" optional>
          <input type="text" autoComplete="organization" className={input} {...aria("organization")} />
        </F>
        <F id={fieldId("topic")} error={errors.topic} label="What is it about?">
          <select defaultValue={defaultTopic ?? ""} className={cn(input, "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5' fill='none' stroke='%23111311' stroke-width='1.6'/%3E%3C/svg%3E\")" }} {...aria("topic")}>
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
      </div>
      <F id={fieldId("message")} error={errors.message} label="Message" hint="The network, the problem, and any timing that matters.">
        <textarea rows={6} className={cn(input, "min-h-40 resize-y")} {...aria("message", true)} />
      </F>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={state.kind === "sending"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {state.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm text-fg-2">
          Goes to {site.email}. See our{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function F({
  id,
  error,
  label,
  hint,
  optional,
  children,
}: {
  id: string;
  error?: string;
  label: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-semibold text-fg">
        {label}
        {optional && <span className="ml-2 font-normal text-fg-3">optional</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-fg-2">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-err`} className="mt-2 flex gap-2 text-sm font-semibold text-danger">
          <span aria-hidden>!</span>
          {error}
        </p>
      )}
    </div>
  );
}
