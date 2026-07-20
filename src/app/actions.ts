"use server";

import nodemailer from "nodemailer";

export type ContactState = { ok: boolean; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users leave this empty. Bots fill it. Silently accept.
  if (String(formData.get("company") || "").trim() !== "") {
    return { ok: true, message: "Thanks. Your message is on its way." };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please add your name, email, and a short message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error("[contact] SMTP is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS).");
    return {
      ok: false,
      message: "Sorry, the form is not available right now. Please call or email us directly.",
    };
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const to = process.env.CONTACT_TO_EMAIL || "info@integrilyticsinc.com";
  const from = process.env.CONTACT_FROM_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    service ? `Interested in: ${service}` : null,
    "",
    "Message:",
    message,
  ].filter((l) => l !== null);

  try {
    await transporter.sendMail({
      from: `IntegriLytics Website <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New website inquiry from ${name}`,
      text: lines.join("\n"),
    });
    return {
      ok: true,
      message: "Thanks. Your message is on its way. We will be in touch within one business day.",
    };
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return {
      ok: false,
      message: "Something went wrong sending your message. Please call or email us directly.",
    };
  }
}
