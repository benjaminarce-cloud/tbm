"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * One-tap copy for phone numbers and similar short strings.
 * Swaps to a check mark briefly on success.
 */
export function CopyButton({
  text,
  label,
  className,
}: {
  text: string;
  /** Accessible label, e.g. "Copy US phone number" */
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard unavailable (http/permissions) — silently no-op */
        }
      }}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-fg-muted transition-all hover:border-brand-red/40 hover:text-brand-red active:scale-90",
        copied && "border-brand-red/40 text-brand-red",
        className
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
