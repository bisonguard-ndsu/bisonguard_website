"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

export const COOKIE_CONSENT_KEY = "icl-cookie-consent";
export const COOKIE_CONSENT_EVENT = "icl-cookie-consent-change";

export type CookieConsentValue = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

/**
 * Safely reads the stored consent decision.
 * Returns null on the server, when nothing is stored, or when the stored
 * value is unparseable / not shaped like a consent record.
 */
export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;

    const candidate = parsed as Partial<CookieConsentValue>;
    if (
      typeof candidate.necessary !== "boolean" ||
      typeof candidate.analytics !== "boolean" ||
      typeof candidate.marketing !== "boolean" ||
      typeof candidate.timestamp !== "string"
    ) {
      return null;
    }

    return {
      necessary: candidate.necessary,
      analytics: candidate.analytics,
      marketing: candidate.marketing,
      timestamp: candidate.timestamp,
    };
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  // `mounted` gates everything so the server render and the first client
  // render are byte-identical (both render null). `visible` is only ever
  // flipped on inside the mount effect, after localStorage has been read.
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = getCookieConsent();
    if (existing) {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
      return;
    }
    setVisible(true);
  }, []);

  const persist = (decision: Omit<CookieConsentValue, "timestamp">) => {
    const value: CookieConsentValue = {
      ...decision,
      timestamp: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
    } catch {
      // Storage can be unavailable (private mode, quota, blocked cookies).
      // The banner still dismisses so the visitor is not stuck with it.
    }

    window.dispatchEvent(
      new CustomEvent<CookieConsentValue>(COOKIE_CONSENT_EVENT, {
        detail: value,
      })
    );

    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () =>
    persist({ necessary: true, analytics: true, marketing: true });

  const rejectAll = () =>
    persist({ necessary: true, analytics: false, marketing: false });

  const savePreferences = () =>
    persist({ necessary: true, analytics, marketing });

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[100] rounded-lg border border-line-strong bg-surface p-5 text-ink shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)] sm:right-auto sm:w-[400px]"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <p className="text-[14px] leading-relaxed text-muted">
            We use cookies to keep the site working and, with your permission, to understand how it is used. See our{" "}
            <Link href="/privacy" className="text-ink underline underline-offset-4 hover:text-accent">
              privacy policy
            </Link>
            .
          </p>

          <AnimatePresence initial={false}>
            {showPreferences && (
              <motion.div
                id="cookie-preferences-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                  {[
                    { id: "cookie-necessary", label: "Necessary", text: "Needed for the site to work. Always on.", checked: true, disabled: true, set: () => {} },
                    { id: "cookie-analytics", label: "Analytics", text: "Shows us how visitors move through the site.", checked: analytics, disabled: false, set: setAnalytics },
                    { id: "cookie-marketing", label: "Marketing", text: "Measures our campaigns. Off unless you opt in.", checked: marketing, disabled: false, set: setMarketing },
                  ].map((c) => (
                    <div key={c.id} className="flex items-start gap-3">
                      <Checkbox
                        id={c.id}
                        checked={c.checked}
                        disabled={c.disabled}
                        onCheckedChange={(v) => c.set(v === true)}
                        className="mt-0.5 border-line-strong data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-ink"
                      />
                      <label htmlFor={c.id} className="cursor-pointer">
                        <span className="block text-[14px] font-medium text-ink">{c.label}</span>
                        <span className="block text-[13px] text-muted">{c.text}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {showPreferences ? (
              <button type="button" onClick={savePreferences} className="btn btn-primary btn-sm">
                Save choices
              </button>
            ) : (
              <button type="button" onClick={acceptAll} className="btn btn-primary btn-sm">
                Accept all
              </button>
            )}
            <button type="button" onClick={rejectAll} className="btn btn-secondary btn-sm">
              Reject all
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences((open) => !open)}
              aria-expanded={showPreferences}
              aria-controls="cookie-preferences-panel"
              className="link-draw ml-auto text-[14px] text-muted hover:text-ink"
            >
              {showPreferences ? "Hide" : "Choose"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
