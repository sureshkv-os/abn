import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";

/**
 * Verify a Cloudflare Turnstile token when the secret is configured. If no
 * secret is set (e.g. local dev before client provides keys), verification is
 * skipped so the form still works.
 */
async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    },
  );
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Honeypot: a filled "company" field means a bot. Pretend success.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const human = await verifyTurnstile(parsed.data.turnstileToken);
  if (!human) {
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(parsed.data);
  } catch {
    return NextResponse.json(
      { error: "Could not send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
