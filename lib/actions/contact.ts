"use server";

import { headers } from "next/headers";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — bots fill any field; humans never see this one
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    // Silent success — don't tip off the bot
    return {
      status: "success",
      message: "Thanks — we'll be in touch shortly.",
    };
  }

  // Per-IP rate limit
  const reqHeaders = await headers();
  const key = getClientKey(reqHeaders);
  if (!checkRateLimit(key, { max: 3, windowMs: 10 * 60 * 1000 })) {
    return {
      status: "error",
      message: "Too many requests. Please try again in a few minutes.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return {
      status: "error",
      message: "Message is too long (5000 characters max).",
    };
  }

  // Phase 3: wire to Resend / HubSpot / SES.
  console.log("[contact] received:", { name, email, subject, ip: key });
  await new Promise((r) => setTimeout(r, 400));

  return {
    status: "success",
    message: "Thanks — we'll be in touch shortly.",
  };
}
