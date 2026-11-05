"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

const consentKey = "icl-cookie-consent";
const openEvent = "icl-open-cookie-preferences";
const changeEvent = "icl-cookie-consent-change";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const analyticsConfigured = /^G-[A-Z0-9]+$/.test(measurementId);

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): Consent | null {
  try {
    const value = JSON.parse(localStorage.getItem(consentKey) ?? "null");
    if (
      !value ||
      typeof value.analytics !== "boolean" ||
      typeof value.timestamp !== "string"
    )
      return null;
    return {
      necessary: true,
      analytics: value.analytics,
      marketing: false,
      timestamp: value.timestamp,
    };
  } catch {
    return null;
  }
}

function disableAnalytics() {
  (window as unknown as Record<string, unknown>)[
    `ga-disable-${measurementId}`
  ] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0]);
  const hostParts = window.location.hostname.split(".");
  for (const name of cookieNames.filter((name) => /^_ga(?:_|$)/.test(name))) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (let index = 0; index < hostParts.length - 1; index++) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${hostParts.slice(index).join(".")}; SameSite=Lax`;
    }
  }
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cookie-settings-link"
      onClick={() => window.dispatchEvent(new Event(openEvent))}
    >
      Cookie preferences
    </button>
  );
}

export function ConsentManager() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [analyticsReady, setAnalyticsReady] = useState(false);
  const consentRef = useRef<Consent | null>(null);
  const lastTrackedLocation = useRef<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const existing = readConsent();
    consentRef.current = existing;
    setConsent(existing);
    setAnalytics(existing?.analytics ?? false);
    setVisible(!existing);

    function openPreferences() {
      previousFocus.current = document.activeElement as HTMLElement | null;
      setPreferences(true);
      setVisible(true);
      requestAnimationFrame(() => panelRef.current?.focus());
    }

    function syncConsent(event: StorageEvent) {
      if (event.key !== consentKey && event.key !== null) return;
      const updated = readConsent();
      consentRef.current = updated;
      setConsent(updated);
      setAnalytics(updated?.analytics ?? false);
      setVisible(!updated);
      if (!updated?.analytics) disableAnalytics();
    }

    window.addEventListener(openEvent, openPreferences);
    window.addEventListener("storage", syncConsent);
    return () => {
      window.removeEventListener(openEvent, openPreferences);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!consent?.analytics) lastTrackedLocation.current = null;
    if (!analyticsConfigured || !consent?.analytics || !analyticsReady) return;
    (window as unknown as Record<string, unknown>)[
      `ga-disable-${measurementId}`
    ] = false;
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    window.gtag?.("set", "page_location", window.location.origin + pathname);
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname,
      page_referrer:
        lastTrackedLocation.current ?? document.referrer.split(/[?#]/)[0],
      page_title: document.title,
    });
    lastTrackedLocation.current = window.location.origin + pathname;
  }, [pathname, consent?.analytics, analyticsReady]);

  function persist(allowAnalytics: boolean) {
    const value: Consent = {
      necessary: true,
      analytics: allowAnalytics,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    consentRef.current = value;
    try {
      localStorage.setItem(consentKey, JSON.stringify(value));
    } catch {
      // The choice still applies to this page when browser storage is blocked.
    }
    if (!allowAnalytics) disableAnalytics();
    setConsent(value);
    setAnalytics(allowAnalytics);
    setVisible(false);
    setPreferences(false);
    window.dispatchEvent(new CustomEvent(changeEvent, { detail: value }));
    previousFocus.current?.focus();
    previousFocus.current = null;
  }

  function initializeAnalytics() {
    if (!consentRef.current?.analytics) {
      disableAnalytics();
      return;
    }
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function () {
      // The Google tag command queue expects an Arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      page_location: window.location.origin + window.location.pathname,
      page_referrer: document.referrer.split(/[?#]/)[0],
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    setAnalyticsReady(true);
  }

  return (
    <>
      {analyticsConfigured && consent?.analytics && (
        <Script
          id="site-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
          onReady={initializeAnalytics}
        />
      )}
      {visible && (
        <div
          className="cookie-panel"
          role="region"
          aria-labelledby="cookie-heading"
          ref={panelRef}
          tabIndex={-1}
        >
          <div className="cookie-panel-heading">
            <h2 id="cookie-heading">A little about cookies.</h2>
            {consent && (
              <button
                type="button"
                aria-label="Close cookie preferences"
                onClick={() => {
                  setVisible(false);
                  previousFocus.current?.focus();
                }}
              >
                <X size={19} />
              </button>
            )}
          </div>
          <p>
            We remember your preferences. With your permission, analytics helps
            us understand how the site is used.{" "}
            <Link href="/privacy">Privacy policy</Link>
          </p>
          {preferences && (
            <div className="cookie-options">
              <label>
                <span>
                  <strong>Essential</strong>
                  <small>Remembering your privacy choice.</small>
                </span>
                <input type="checkbox" checked disabled />
              </label>
              <label>
                <span>
                  <strong>Analytics</strong>
                  <small>Optional measurement of website visits.</small>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
              </label>
            </div>
          )}
          <div className="cookie-actions">
            <button
              type="button"
              className="cookie-secondary"
              onClick={() => persist(false)}
            >
              Reject optional
            </button>
            <button
              type="button"
              className="cookie-primary"
              onClick={() => persist(preferences ? analytics : true)}
            >
              {preferences ? "Save choices" : "Accept analytics"}
            </button>
          </div>
          <button
            type="button"
            className="cookie-customize"
            aria-expanded={preferences}
            onClick={() => setPreferences(!preferences)}
          >
            <SlidersHorizontal size={13} aria-hidden="true" />
            {preferences ? "Hide preferences" : "Customize preferences"}
          </button>
        </div>
      )}
    </>
  );
}
