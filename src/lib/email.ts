import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

function getEnv(name: string) {
  return typeof process !== "undefined" ? process.env?.[name] : undefined;
}

function getResendConfig() {
  const apiKey = getEnv("RESEND_API_KEY");
  if (!apiKey) {
    throw new Error("Email service is missing RESEND_API_KEY.");
  }

  return {
    apiKey,
    from:
      getEnv("RESEND_FROM") ??
      "AANKA Group Website <noreply@aankagroup.com>",
    to: getEnv("RESEND_TO") ?? "contact@aankagroup.com",
  };
}

function resend() {
  return new Resend(getResendConfig().apiKey);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendEmail(params: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}) {
  const { data, error } = await resend().emails.send(params);

  if (error) {
    console.error("[Resend] Email send failed", error);
    throw new Error(error.message || "Email could not be sent.");
  }

  if (!data?.id) {
    throw new Error("Email provider did not confirm delivery.");
  }

  return data;
}

// ── Franchise enquiry ────────────────────────────────────────────────────────

const franchiseSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40),
  country: z.string().trim().min(2).max(80),
  brand: z.string().trim().min(1),
  investment: z.string().trim().min(1),
  message: z.string().trim().max(2000).optional(),
});

export const sendFranchiseEnquiry = createServerFn({ method: "POST" })
  .validator(franchiseSchema)
  .handler(async ({ data }) => {
    const config = getResendConfig();
    const safe = {
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      country: escapeHtml(data.country),
      brand: escapeHtml(data.brand),
      investment: escapeHtml(data.investment),
      message: data.message ? escapeHtml(data.message) : "",
    };

    await sendEmail({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `Franchise Enquiry — ${data.brand} — ${data.name}`,
      text: [
        "AANKA GROUP — FRANCHISE ENQUIRY",
        `Full Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Country / City: ${data.country}`,
        `Brand of Interest: ${data.brand}`,
        `Investment Range: ${data.investment}`,
        data.message ? `Message: ${data.message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <table style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e5e0d8;color:#141414;">
          <tr><td style="padding-bottom:24px;border-bottom:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#b08d6a;margin:0;">AANKA GROUP — FRANCHISE ENQUIRY</p>
          </td></tr>
          <tr><td style="padding:24px 0 16px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;width:40%;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;"><a href="mailto:${safe.email}" style="color:#141414;">${safe.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Country / City</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.country}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Brand of Interest</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.brand}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Investment Range</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.investment}</td></tr>
              ${safe.message ? `<tr><td style="padding:10px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:16px;font-weight:300;line-height:1.6;">${safe.message}</td></tr>` : ""}
            </table>
          </td></tr>
          <tr><td style="padding-top:24px;border-top:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;margin:0;">Sent from aankagroup.com · Franchise Partner Form</p>
          </td></tr>
        </table>
      `,
    });
    return { ok: true };
  });

// ── General contact enquiry ──────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40).optional(),
  type: z.enum(["general", "partnership", "franchise", "press"]).default("general"),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const typeLabel: Record<string, string> = {
      general: "General",
      partnership: "Partnership",
      franchise: "Franchise",
      press: "Press",
    };
    const config = getResendConfig();
    const safe = {
      name: escapeHtml(data.name),
      email: escapeHtml(data.email),
      phone: data.phone ? escapeHtml(data.phone) : "",
      type: escapeHtml(typeLabel[data.type] ?? "General"),
      message: escapeHtml(data.message),
    };

    await sendEmail({
      from: config.from,
      to: config.to,
      replyTo: data.email,
      subject: `${typeLabel[data.type] ?? "General"} Enquiry — ${data.name}`,
      text: [
        `AANKA GROUP — ${(typeLabel[data.type] ?? "General").toUpperCase()} ENQUIRY`,
        `Full Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : "",
        `Enquiry Type: ${typeLabel[data.type] ?? "General"}`,
        `Message: ${data.message}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <table style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e5e0d8;color:#141414;">
          <tr><td style="padding-bottom:24px;border-bottom:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#b08d6a;margin:0;">AANKA GROUP — ${(typeLabel[data.type] ?? "General").toUpperCase()} ENQUIRY</p>
          </td></tr>
          <tr><td style="padding:24px 0 16px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;width:40%;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;"><a href="mailto:${safe.email}" style="color:#141414;">${safe.email}</a></td></tr>
              ${safe.phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.phone}</td></tr>` : ""}
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Enquiry Type</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${safe.type}</td></tr>
              <tr><td style="padding:10px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:16px;font-weight:300;line-height:1.6;">${safe.message}</td></tr>
            </table>
          </td></tr>
          <tr><td style="padding-top:24px;border-top:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;margin:0;">Sent from aankagroup.com · Contact Form</p>
          </td></tr>
        </table>
      `,
    });
    return { ok: true };
  });
