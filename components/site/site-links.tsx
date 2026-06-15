import { type ReactNode } from "react";
import { SITE } from "@/lib/content/site";
import { cn, mailtoHref } from "@/lib/utils";

/** External "Track Shipment" link to the TMS portal. */
export function TrackShipmentLink({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={SITE.trackingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("font-display", className)}
      {...rest}
    >
      {children}
    </a>
  );
}

/**
 * Click-to-send "Contact Sales" link. The address is kept in code (SITE.salesEmail)
 * and never rendered — clicking opens the visitor's mail client.
 */
export function ContactSalesLink({
  className,
  children,
  subject = "Sales inquiry — TBM Carriers",
  ...rest
}: {
  className?: string;
  children: ReactNode;
  subject?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={mailtoHref(SITE.salesEmail, subject)}
      className={cn("font-display", className)}
      aria-label="Contact sales by email"
      {...rest}
    >
      {children}
    </a>
  );
}
