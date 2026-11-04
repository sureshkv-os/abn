import { z } from "zod";

/** Shared validation for the contact form (client + server). */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().max(30).optional().or(z.literal("")),
  message: z.string().min(10, "Please tell us a little more").max(2000),
  // Honeypot — must stay empty; bots tend to fill every field. Accepted by the
  // schema (any value) so the route can silently absorb bot submissions rather
  // than leaking that this field is a trap.
  company: z.string().max(200).optional(),
  // Cloudflare Turnstile token (validated server-side when configured).
  turnstileToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
