import type { Metadata } from "next";
import { CompliancePageView } from "@/components/site/compliance-page-view";
import { getContent } from "@/lib/i18n";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Transportista certificado C-TPAT, FAST y OEA",
  description: getContent("es").ui.complianceIntro,
  alternates: {
    canonical: "/es/compliance",
    languages: {
      en: "/compliance",
      es: "/es/compliance",
      "x-default": "/compliance",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Cumplimiento y Seguridad — TBM Carriers",
    description: getContent("es").ui.complianceIntro,
    url: `${SITE.url}/es/compliance`,
  },
};

export default function CompliancePageEs() {
  return <CompliancePageView locale="es" />;
}
