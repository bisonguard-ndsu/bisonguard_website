/**
 * Sign-in destinations. The platforms are being split apart; when an app moves
 * to its own domain, change its URL here and every link on the site follows.
 */
export type AppLink = { key: string; name: string; url: string | null; note?: string };

export const apps: AppLink[] = [
  { key: "adams", name: "AdAMS", url: "https://app.infinicitylabs.org" },
  { key: "tmc", name: "TMC", url: "https://app.infinicitylabs.org" },
  { key: "roadlogger", name: "RoadLogger", url: "https://app.infinicitylabs.org" },
  // Turnflow runs as its own deployment. URL pending — see plan §5.3.
  { key: "turnflow", name: "Turnflow", url: null, note: "Access by invitation" },
];

export const getApp = (key: string) => apps.find((a) => a.key === key);
