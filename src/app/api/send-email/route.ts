import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 20000)
      return NextResponse.json(
        { error: "Please shorten your message." },
        { status: 413 },
      );
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid contact form." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success)
    return NextResponse.json(
      {
        error: "Please check your name, email address, and message.",
        fields: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  const submission = result.data;
  if (submission.website) return NextResponse.json({ success: true });

  if (
    !process.env.EMAIL_SERVER_HOST ||
    !process.env.EMAIL_SERVER_USER ||
    !process.env.EMAIL_SERVER_PASSWORD
  ) {
    return NextResponse.json(
      {
        error:
          "Email delivery is currently unavailable. Please contact us directly.",
      },
      { status: 503 },
    );
  }

  const port = Number(process.env.EMAIL_SERVER_PORT || "587");
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transporter.sendMail({
      from:
        process.env.EMAIL_FROM || "InfiniCity Labs <info@infinicitylabs.org>",
      to: "info@infinicitylabs.org",
      replyTo: submission.email,
      subject: "Website inquiry — " + submission.reason,
      text: [
        "New inquiry from the InfiniCity Labs website",
        "",
        "Name: " + submission.name,
        "Email: " + submission.email,
        "Organization: " + (submission.organization || "Not provided"),
        "Reason: " + submission.reason,
        "Product: " + (submission.product || "Not specified"),
        "",
        submission.message,
      ].join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch {
    console.error(
      "Website inquiry delivery failed. Check the SMTP service configuration.",
    );
    return NextResponse.json(
      {
        error:
          "We couldn’t send your message. Please try again or email us directly.",
      },
      { status: 502 },
    );
  } finally {
    transporter.close();
  }
}
