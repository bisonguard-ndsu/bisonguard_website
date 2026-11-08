#!/usr/bin/env node
/**
 * Fails while anything that must not reach production remains:
 * unverified figures, team seed data, pending pages, apps without URLs,
 * missing mail/analytics configuration. Run: npm run prelaunch
 */
import { readFileSync, existsSync } from "node:fs";

const problems = [];
const read = (p) => readFileSync(p, "utf8");

const evidence = read("src/content/evidence.ts");
const unverified = [...evidence.matchAll(/id: "(\w+)"[\s\S]*?verified: false/g)].map((m) => m[1]);
if (unverified.length) problems.push(`Unverified figures in evidence.ts: ${unverified.join(", ")}`);

const pending = read("src/content/pending.ts");
const pages = [...pending.matchAll(/path: "([^"]+)"/g)].map((m) => "/" + m[1]);
if (pages.length) problems.push(`${pages.length} pages are still holding pages: ${pages.join(", ")}`);

const apps = read("src/content/apps.ts");
const noUrl = [...apps.matchAll(/name: "([^"]+)", url: null/g)].map((m) => m[1]);
if (noUrl.length) problems.push(`Apps without a sign-in URL: ${noUrl.join(", ")}`);

const pubs = read("src/content/publications.ts");
const noYear = (pubs.match(/year: null/g) || []).length;
if (noYear) problems.push(`${noYear} publications have no confirmed year`);

const env = { ...process.env };
if (existsSync(".env.production")) {
  for (const line of read(".env.production").split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m) env[m[1]] = m[2];
  }
}
if (env.NEXT_PUBLIC_TEAM_SEED === "1") problems.push("NEXT_PUBLIC_TEAM_SEED=1 — team seed data would ship");
if (env.NEXT_PUBLIC_SHOW_DRAFT_MARKERS === "1") problems.push("NEXT_PUBLIC_SHOW_DRAFT_MARKERS=1 — draft markers would ship");
if (env.CONTACT_TRANSPORT === "console") problems.push("CONTACT_TRANSPORT=console — the form would not send email");
for (const k of ["EMAIL_SERVER_HOST", "EMAIL_SERVER_USER", "EMAIL_SERVER_PASSWORD", "NEXT_PUBLIC_GA_ID"]) {
  if (!env[k]) problems.push(`Missing environment variable ${k}`);
}

if (problems.length) {
  console.error(`\nPre-launch check: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error("  ✗ " + p);
  console.error("");
  process.exit(1);
}
console.log("Pre-launch check passed.");
