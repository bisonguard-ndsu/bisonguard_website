"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[100] w-full border-t-2 border-neon bg-dark-blue text-white shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="max-w-6xl mx-auto container px-4 sm:px-6 md:px-8 lg:px-16 py-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <Cookie
                  className="w-6 h-6 text-neon flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-gray-300">
                  We use cookies to improve your browsing experience and analyse
                  site traffic. Read our{" "}
                  <Link
                    href="/privacy"
                    className="text-neon underline underline-offset-4 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                  >
                    Privacy Policy
                  </Link>{" "}
                  to learn more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:flex-shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPreferences((open) => !open)}
                  aria-expanded={showPreferences}
                  aria-controls="cookie-preferences-panel"
                  className="rounded-none border border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-5 text-sm font-medium tracking-wider transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                >
                  <Settings className="w-4 h-4" aria-hidden="true" />
                  Preferences
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={rejectAll}
                  className="rounded-none border border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white px-6 py-5 text-sm font-medium tracking-wider transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                  Reject All
                </Button>
                <Button
                  type="button"
                  onClick={acceptAll}
                  className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-8 py-5 text-sm font-semibold tracking-wider transition-all duration-300 rounded-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                >
                  Accept All
                </Button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {showPreferences && (
                <motion.div
                  id="cookie-preferences-panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 border-t border-white/15 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="cookie-necessary"
                          checked
                          disabled
                          aria-label="Necessary cookies, always enabled"
                          className="mt-1 rounded-none border-white/40 data-[state=checked]:bg-neon data-[state=checked]:border-neon data-[state=checked]:text-dark-blue"
                        />
                        <div>
                          <label
                            htmlFor="cookie-necessary"
                            className="block text-sm font-semibold text-white"
                          >
                            Necessary
                          </label>
                          <p className="mt-1 text-xs leading-relaxed text-gray-400">
                            Required for the site to function. These can&apos;t
                            be switched off.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="cookie-analytics"
                          checked={analytics}
                          onCheckedChange={(checked) =>
                            setAnalytics(checked === true)
                          }
                          className="mt-1 rounded-none border-white/40 data-[state=checked]:bg-neon data-[state=checked]:border-neon data-[state=checked]:text-dark-blue focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                        />
                        <div>
                          <label
                            htmlFor="cookie-analytics"
                            className="block text-sm font-semibold text-white cursor-pointer"
                          >
                            Analytics
                          </label>
                          <p className="mt-1 text-xs leading-relaxed text-gray-400">
                            Helps us understand how visitors move through the
                            site so we can improve it.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="cookie-marketing"
                          checked={marketing}
                          onCheckedChange={(checked) =>
                            setMarketing(checked === true)
                          }
                          className="mt-1 rounded-none border-white/40 data-[state=checked]:bg-neon data-[state=checked]:border-neon data-[state=checked]:text-dark-blue focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                        />
                        <div>
                          <label
                            htmlFor="cookie-marketing"
                            className="block text-sm font-semibold text-white cursor-pointer"
                          >
                            Marketing
                          </label>
                          <p className="mt-1 text-xs leading-relaxed text-gray-400">
                            Used to measure the performance of our campaigns.
                            Off unless you opt in.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button
                        type="button"
                        onClick={savePreferences}
                        className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-8 py-5 text-sm font-semibold tracking-wider transition-all duration-300 rounded-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
                      >
                        Save Preferences
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
