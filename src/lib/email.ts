import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const resend = () => new Resend(process.env.RESEND_API_KEY);

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
  .inputValidator(franchiseSchema)
  .handler(async ({ data }) => {
    const { error } = await resend().emails.send({
      from: "AANKA Group Website <noreply@aankagroup.com>",
      to: "contact@aankagroup.com",
      replyTo: data.email,
      subject: `Franchise Enquiry — ${data.brand} — ${data.name}`,
      html: `
        <table style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e5e0d8;color:#141414;">
          <tr><td style="padding-bottom:24px;border-bottom:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#b08d6a;margin:0;">AANKA GROUP — FRANCHISE ENQUIRY</p>
          </td></tr>
          <tr><td style="padding:24px 0 16px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;width:40%;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;"><a href="mailto:${data.email}" style="color:#141414;">${data.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Country / City</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.country}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Brand of Interest</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.brand}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Investment Range</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.investment}</td></tr>
              ${data.message ? `<tr><td style="padding:10px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:16px;font-weight:300;line-height:1.6;">${data.message}</td></tr>` : ""}
            </table>
          </td></tr>
          <tr><td style="padding-top:24px;border-top:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;margin:0;">Sent from aankagroup.com · Franchise Partner Form</p>
          </td></tr>
        </table>
      `,
    });
    if (error) throw new Error(error.message);
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
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const typeLabel: Record<string, string> = {
      general: "General",
      partnership: "Partnership",
      franchise: "Franchise",
      press: "Press",
    };
    const { error } = await resend().emails.send({
      from: "AANKA Group Website <noreply@aankagroup.com>",
      to: "contact@aankagroup.com",
      replyTo: data.email,
      subject: `${typeLabel[data.type] ?? "General"} Enquiry — ${data.name}`,
      html: `
        <table style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e5e0d8;color:#141414;">
          <tr><td style="padding-bottom:24px;border-bottom:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#b08d6a;margin:0;">AANKA GROUP — ${(typeLabel[data.type] ?? "General").toUpperCase()} ENQUIRY</p>
          </td></tr>
          <tr><td style="padding:24px 0 16px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;width:40%;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;"><a href="mailto:${data.email}" style="color:#141414;">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${data.phone}</td></tr>` : ""}
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;">Enquiry Type</td><td style="padding:10px 0;border-bottom:1px solid #f0ece6;font-size:16px;font-weight:300;">${typeLabel[data.type] ?? "General"}</td></tr>
              <tr><td style="padding:10px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:16px;font-weight:300;line-height:1.6;">${data.message}</td></tr>
            </table>
          </td></tr>
          <tr><td style="padding-top:24px;border-top:1px solid #e5e0d8;">
            <p style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#b08d6a;margin:0;">Sent from aankagroup.com · Contact Form</p>
          </td></tr>
        </table>
      `,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
