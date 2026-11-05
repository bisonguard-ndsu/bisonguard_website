"use client";

import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Cookie consent + analytics loader.
 * GA4 (NEXT_PUBLIC_GA_ID) loads only after the visitor allows analytics.
 * Consent Mode v2 defaults everything to denied before that.
 */

export const CONSENT_KEY = "icl-consent-v2";
const CONSENT_EVENT = "icl-consent-change";
const OPEN_EVENT = "icl-consent-open";
const MAX_AGE_DAYS = 365;

export type Consent = { analytics: boolean; marketing: boolean; at: string };

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (typeof c.analytics !== "boolean" || typeof c.marketing !== "boolean" || !c.at) return null;
    if (Date.now() - Date.parse(c.at) > MAX_AGE_DAYS * 864e5) return null;
    return c;
  } catch {
    return null;
  }
}

function write(c: Omit<Consent, "at">) {
  const value: Consent = { ...c, at: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {
    /* storage blocked — the banner still closes */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

let snapshot: string | null = null;
function subscribe(cb: () => void) {
  const handler = () => {
    snapshot = null;
    cb();
  };
  window.addEventListener(CONSENT_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CONSENT_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
function getSnapshot() {
  if (snapshot === null) snapshot = JSON.stringify(read());
  return snapshot;
}

export function useConsent(): Consent | null | undefined {
  const s = useSyncExternalStore(subscribe, getSnapshot, () => "undefined");
  return s === "undefined" ? undefined : (JSON.parse(s) as Consent | null);
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

export default function CookieConsent() {
  const consent = useConsent();
  const [forced, setForced] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const open = () => {
      const c = read();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setDetails(true);
      setForced(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const visible = forced || consent === null;
  const decide = (c: { analytics: boolean; marketing: boolean }) => {
    write(c);
    setForced(false);
    setDetails(false);
  };

  return (
    <>
      <Analytics allowed={!!consent?.analytics} />
      {visible && (
        <section aria-label="Cookie preferences" className="cookie">
          <div className="wrap">
            <div className="cookie__row">
              <p>
                We use necessary cookies to run this site and, with your permission, analytics cookies to see which pages are useful.{" "}
                <a className="link" href="/cookies">
                  Read the cookie policy
                </a>
              </p>
              <div className="cookie__actions">
                <button type="button" onClick={() => setDetails((d) => !d)} className="nav__link" aria-expanded={details}>
                  Choose
                </button>
                <button type="button" onClick={() => decide({ analytics: false, marketing: false })} className="btn btn--secondary">
                  Reject all
                </button>
                <button type="button" onClick={() => decide({ analytics: true, marketing: true })} className="btn btn--secondary">
                  Accept all
                </button>
              </div>
            </div>
            {details && (
              <fieldset className="cookie__details">
                <legend className="sr-only">Cookie categories</legend>
                <Toggle label="Necessary" note="Required for the site to work. Always on." checked disabled />
                <Toggle label="Analytics" note="Anonymous page statistics (Google Analytics)." checked={analytics} onChange={setAnalytics} />
                <Toggle label="Marketing" note="Campaign measurement. Off unless you opt in." checked={marketing} onChange={setMarketing} />
                <button type="button" onClick={() => decide({ analytics, marketing })} className="btn btn--secondary">
                  Save choices
                </button>
              </fieldset>
            )}
          </div>
        </section>
      )}
    </>
  );
}

function Toggle({
  label,
  note,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  note: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="cookie__toggle">
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange?.(e.target.checked)} />
      <span>
        <b>{label}</b>
        <span className="t-small muted">{note}</span>
      </span>
    </label>
  );
}

function Analytics({ allowed }: { allowed: boolean }) {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || !allowed) return null;
  return (
    <>
      <Script id="ga-consent" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    </>
  );
}
