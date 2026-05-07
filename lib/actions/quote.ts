"use server";

import { headers } from "next/headers";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const REQUIRED_FIELDS = [
  "fullName",
  "company",
  "email",
  "phone",
  "commodity",
  "weight",
  "volume",
  "originCity",
  "originState",
  "originZip",
  "destCity",
  "destState",
  "destZip",
  "shipDate",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  // Honeypot
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return {
      status: "success",
      message: "Quote request received — we'll respond within 24 hours.",
    };
  }

  // Per-IP rate limit (more restrictive: 2 quotes per 15 min)
  const reqHeaders = await headers();
  const key = getClientKey(reqHeaders);
  if (!checkRateLimit(key, { max: 2, windowMs: 15 * 60 * 1000 })) {
    return {
      status: "error",
      message:
        "Too many quote requests. Please try again in a few minutes or call us directly.",
    };
  }

  const data: Record<string, string> = {};
  for (const f of REQUIRED_FIELDS) {
    data[f] = String(formData.get(f) ?? "").trim();
    if (!data[f]) {
      return {
        status: "error",
        message: "Please fill in all required fields.",
      };
    }
  }
  data.notes = String(formData.get("notes") ?? "").trim();

  if (!EMAIL_RE.test(data.email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (data.notes.length > 5000) {
    return {
      status: "error",
      message: "Notes are too long (5000 characters max).",
    };
  }

  // Phase 3: wire to Resend / HubSpot / SES.
  console.log("[quote] received:", {
    fullName: data.fullName,
    company: data.company,
    email: data.email,
    origin: `${data.originCity}, ${data.originState} ${data.originZip}`,
    destination: `${data.destCity}, ${data.destState} ${data.destZip}`,
    shipDate: data.shipDate,
    ip: key,
  });
  await new Promise((r) => setTimeout(r, 600));

  return {
    status: "success",
    message: "Quote request received — we'll respond within 24 hours.",
  };
}
