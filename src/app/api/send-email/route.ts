import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FormSubmission = {
  name: string;
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: process.env.EMAIL_SERVER_PORT === "465",
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    await transporter.verify();

    const submission: FormSubmission = await request.json();

    const { name, email, message } = submission;

    const mailOptions = {
      from: `InfiniCity Labs <info@infinicitylabs.org>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f6f8fa; padding: 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(39,234,156,0.08); overflow: hidden;">
            <tr>
              <td style="background: #0b243a; padding: 32px 0; text-align: center;">
                <img src="https://${
                  request.headers.get("host") || "infinicitylabs.org"
                }/INCL.png" alt="InfiniCity Labs Logo" style="height: 60px; margin-bottom: 8px;" />
                <h1 style="color: #27ea9c; font-size: 2rem; margin: 0; font-weight: 700; letter-spacing: 1px;">InfiniCity Labs</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 32px 16px 32px;">
                <h2 style="color: #0b243a; font-size: 1.25rem; margin-bottom: 12px;">New Contact Form Submission</h2>
                <table cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 24px;">
                  <tr>
                    <td style="color: #888; font-weight: 500; padding: 4px 0; width: 120px;">Name:</td>
                    <td style="color: #222; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="color: #888; font-weight: 500; padding: 4px 0;">Email:</td>
                    <td style="color: #222; font-weight: 600;">${email}</td>
                  </tr>
                </table>
                <div style="background: #f3fdf8; border-left: 4px solid #27ea9c; padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
                  <div style="color: #0b243a; font-size: 1.1rem; line-height: 1.6; white-space: pre-line;">${message
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")}</div>
                </div>
                <p style="color: #888; font-size: 0.95rem; margin-bottom: 0;">You received this message via the InfiniCity Labs website contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="background: #0b243a; color: #fff; text-align: center; padding: 18px 0; font-size: 0.95rem;">
                &copy; ${new Date().getFullYear()} InfiniCity Labs. All rights reserved.
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Detailed error in send-email API:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
        code: error instanceof Error ? error.name : "UNKNOWN_ERROR",
      },
      { status: 500 }
    );
  }
}
