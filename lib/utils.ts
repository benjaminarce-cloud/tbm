import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Build a `tel:` href that preserves the international country code.
 * "+1 (210) 732-3400" -> "tel:+12107323400"
 */
export function telHref(phone: string) {
  return `tel:+${phone.replace(/\D/g, "")}`
}

/**
 * Build a `mailto:` href with an optional prefilled subject.
 * The address is never shown in the UI — only used to launch the mail client.
 */
export function mailtoHref(email: string, subject?: string) {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`
}
