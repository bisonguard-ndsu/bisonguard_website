import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact";
import { site } from "@/content/site";

export const runtime = "nodejs";

/* Simple per-IP limit: 3 messages a minute. Resets with the server process. */
const WINDOW_MS = 60_000;
const LIMIT = 3;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return Response.json({ ok: false, error: "Too many messages. Please wait a minute and try again." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "We couldn't read that request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // A filled honeypot looks like success to the bot, but nothing is sent.
    if (parsed.error.issues.some((i) => i.path[0] === "website")) return Response.json({ ok: true });
    return Response.json({ ok: false, error: "Some fields need attention.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const { name, email, organization, topic, message } = parsed.data;
  const to = process.env.CONTACT_TO || site.email;
  const subject = `[Website] ${topic} — ${name}${organization ? `, ${organization}` : ""}`;
  const text = `${message}\n\n— ${name}\n${email}${organization ? `\n${organization}` : ""}\nTopic: ${topic}\nSent from infinicitylabs.org`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.55;color:#111311;max-width:600px">
<p style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#00704a;margin:0 0 16px">Website enquiry · ${esc(topic)}</p>
<p style="white-space:pre-wrap;margin:0 0 24px">${esc(message)}</p>
<table style="border-top:1px solid #dcdad3;padding-top:12px;font-size:14px;color:#4a4d48">
<tr><td style="padding:2px 16px 2px 0">Name</td><td>${esc(name)}</td></tr>
<tr><td style="padding:2px 16px 2px 0">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
${organization ? `<tr><td style="padding:2px 16px 2px 0">Organisation</td><td>${esc(organization)}</td></tr>` : ""}
</table></div>`;

  // Development: log instead of sending.
  if (process.env.CONTACT_TRANSPORT === "console") {
    console.info("[contact] would send", { to, replyTo: email, subject, text });
    return Response.json({ ok: true });
  }

  const { EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD } = process.env;
  if (!EMAIL_SERVER_HOST || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
    console.error("[contact] SMTP is not configured");
    return Response.json({ ok: false, error: "Our mail service is unavailable." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: Number(EMAIL_SERVER_PORT || 587),
      secure: EMAIL_SERVER_PORT === "465",
      auth: { user: EMAIL_SERVER_USER, pass: EMAIL_SERVER_PASSWORD },
    });
    await transporter.sendMail({
      from: `"InfiniCity Labs website" <${EMAIL_SERVER_USER}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return Response.json({ ok: false, error: "Our mail service is unavailable." }, { status: 502 });
  }
}
