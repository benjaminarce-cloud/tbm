import type { Metadata } from "next";
import { CompliancePageView } from "@/components/site/compliance-page-view";
import { getContent } from "@/lib/i18n";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "C-TPAT, FAST & OEA Certified Carrier",
  description: getContent("en").ui.complianceIntro,
  alternates: {
    canonical: "/compliance",
    languages: {
      en: "/compliance",
      es: "/es/compliance",
      "x-default": "/compliance",
    },
  },
  openGraph: {
    type: "website",
    title: "Compliance & Security — TBM Carriers",
    description: getContent("en").ui.complianceIntro,
    url: `${SITE.url}/compliance`,
  },
};

export default function CompliancePage() {
  return <CompliancePageView locale="en" />;
}
