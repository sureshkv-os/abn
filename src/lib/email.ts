import type { ContactInput } from "@/lib/contact-schema";
import { site } from "@/content/site";

/**
 * Sends the contact enquiry. Abstracted so the provider can change without
 * touching the route. Defaults to Resend via REST (no SDK dependency).
 *
 * Env:
 *   RESEND_API_KEY   — Resend API key (if unset, the message is logged only).
 *   CONTACT_TO_EMAIL — recipient; falls back to site.contact.email.
 *   CONTACT_FROM_EMAIL — verified sender for Resend.
 */
export async function sendContactEmail(data: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || `enquiries@${site.domain}`;

  const subject = `New website enquiry from ${data.name}`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    "",
    data.message,
  ].join("\n");

  if (!apiKey) {
    // No provider configured yet (e.g. local dev / before client supplies keys).
    console.info("[contact] RESEND_API_KEY not set — enquiry not emailed:", {
      to,
      subject,
    });
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    throw new Error(`Email provider error: ${res.status}`);
  }
}
