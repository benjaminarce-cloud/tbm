/**
 * Legal content — Privacy Policy and Terms & Conditions.
 *
 * NOTE: This content is a structurally faithful migration of TBM Carriers'
 * existing legal pages, refactored for clean rendering. Before publishing on
 * a new domain, please review with legal counsel — the original language was
 * authored for the prior site and may need adjustment for the rebranded
 * presence.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  description:
    "How TBM Carriers, Inc. and its affiliates collect, use, and protect your information when you visit our website.",
  lastUpdated: "April 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: "TBM Carriers, Inc. and its affiliates and subsidiaries (the \"Company,\" \"we,\" or \"us\") respect your privacy and are committed to protecting it through compliance with this policy. This policy describes the types of information we may collect from you when you interact with or visit our website, and our practices for collecting, using, maintaining, protecting, and disclosing that information.",
        },
        {
          type: "p",
          text: "Please read this policy carefully. By accessing or using this website, you agree to its terms. We may update this policy from time to time (see \"Changes to This Policy\" below). Your continued use of the website after we make changes constitutes acceptance of those changes, so please check the policy periodically for updates.",
        },
      ],
    },
    {
      id: "children",
      title: "Children under 16",
      blocks: [
        {
          type: "p",
          text: "Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information through this website or any of its features.",
        },
        {
          type: "p",
          text: "If we learn we have collected personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we may have any information from or about a child under 16, please contact us at the address or phone number listed below.",
        },
        {
          type: "p",
          text: "California residents under 16 may have additional rights regarding the collection and sale of their personal information — see Privacy Notice for California Residents below.",
        },
      ],
    },
    {
      id: "information-collected",
      title: "Information we collect",
      blocks: [
        {
          type: "p",
          text: "We collect several types of information from and about users of our website, including:",
        },
        {
          type: "list",
          items: [
            "Information by which you may be personally identified — such as your name, postal address, email address, telephone number, or any other identifier by which you may be contacted (\"personal information\").",
            "Information that is about you but does not individually identify you.",
            "Information about your internet connection, the equipment you use to access our website, and your usage details — including IP address, operating system, and browser type.",
          ],
        },
        {
          type: "p",
          text: "We collect this information directly from you when you provide it (for example, when filling out a quote request or contact form), and automatically as you navigate the site through cookies, web beacons, and similar tracking technologies.",
        },
      ],
    },
    {
      id: "how-used",
      title: "How we use information",
      blocks: [
        {
          type: "p",
          text: "We use information you provide and information we collect automatically to:",
        },
        {
          type: "list",
          items: [
            "Present our website and its contents to you.",
            "Provide you with information, products, or services that you request from us.",
            "Respond to your inquiries and fulfill the purpose for which you provided the information.",
            "Improve our website, services, and user experience.",
            "Contact you about our services, including service updates and other information that may interest you.",
          ],
        },
      ],
    },
    {
      id: "disclosure",
      title: "Disclosure of information",
      blocks: [
        {
          type: "p",
          text: "We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or that you provide as described in this policy:",
        },
        {
          type: "list",
          items: [
            "To our subsidiaries and affiliates.",
            "To contractors, service providers, and other third parties we use to support our business and who are bound to keep personal information confidential.",
            "To fulfill the purpose for which you provided the information.",
            "With your consent.",
            "To comply with any court order, law, or legal process, including responding to government or regulatory requests.",
          ],
        },
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      blocks: [
        {
          type: "p",
          text: "You may set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this website may then be inaccessible or not function properly.",
        },
        {
          type: "p",
          text: "To opt out of email communications from us, contact us using the information below or use the unsubscribe link in any of our emails.",
        },
      ],
    },
    {
      id: "security",
      title: "Data security",
      blocks: [
        {
          type: "p",
          text: "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you — where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping that password confidential.",
        },
        {
          type: "p",
          text: "Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of personal information transmitted to our website. Any transmission of personal information is at your own risk.",
        },
      ],
    },
    {
      id: "california",
      title: "California residents",
      blocks: [
        {
          type: "p",
          text: "If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) regarding your personal information, including the right to request access to, deletion of, and information about the categories and specific pieces of personal information we have collected about you in the preceding 12 months.",
        },
        {
          type: "p",
          text: "To exercise these rights, contact us at the email or phone number listed below. We will not discriminate against you for exercising any of your CCPA rights.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "It is our policy to post any changes we make to our privacy policy on this page. The date the policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting this website and this privacy policy to check for any changes.",
        },
      ],
    },
    {
      id: "contact",
      title: "How to contact us",
      blocks: [
        {
          type: "p",
          text: "To ask questions or comment about this privacy policy or our privacy practices, contact us at TBM Carriers, Inc., 5718 University Heights Blvd, Suite 204, San Antonio, TX 78249, by phone at (210) 732-3400, or by email at contact@tbmcarriers.com.",
        },
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: "Terms & Conditions",
  description:
    "TBM Carriers, Inc. trucking contract terms and conditions for transport within the United States.",
  lastUpdated: "April 2026",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of terms",
      blocks: [
        {
          type: "p",
          text: "By engaging TBM Carriers, Inc. (\"Carrier\") for transportation services, you (\"Shipper\" or \"Customer\") agree to be bound by these terms and conditions. These terms govern the relationship between Shipper and Carrier for the transport of freight within the United States.",
        },
      ],
    },
    {
      id: "services",
      title: "Services provided",
      blocks: [
        {
          type: "p",
          text: "Carrier provides truckload, less-than-truckload, and intermodal transportation services across the United States, with cross-border service to and from Mexico and Canada. Services may include door-to-door transportation, cross-border clearance support, intermodal coordination, and warehousing where contracted in writing.",
        },
      ],
    },
    {
      id: "rates-payment",
      title: "Rates and payment",
      blocks: [
        {
          type: "p",
          text: "Rates are quoted per shipment based on origin, destination, commodity, weight, equipment type, and other relevant factors. Accessorial charges may apply for services beyond standard pickup, line haul, and delivery — including detention, layover, fuel surcharge, lumper, and storage.",
        },
        {
          type: "p",
          text: "Payment terms are net thirty (30) days from invoice date unless otherwise agreed in writing. Past-due amounts may be subject to interest charges at the maximum rate permitted by law.",
        },
      ],
    },
    {
      id: "carrier-responsibilities",
      title: "Carrier responsibilities",
      blocks: [
        {
          type: "p",
          text: "Carrier will perform pickup, line haul, and delivery in accordance with the agreed schedule and all applicable federal, state, and local laws and regulations, including DOT and FMCSA requirements. Carrier maintains insurance in amounts required by law and the bill of lading.",
        },
        {
          type: "p",
          text: "Carrier's liability for loss or damage to freight is governed by the terms of the bill of lading and applicable federal regulations, including the Carmack Amendment (49 U.S.C. § 14706).",
        },
      ],
    },
    {
      id: "shipper-responsibilities",
      title: "Shipper responsibilities",
      blocks: [
        {
          type: "p",
          text: "Shipper is responsible for accurately describing the freight, including weight, dimensions, classification, hazardous-materials status, and any special handling requirements. Shipper is also responsible for proper packaging, blocking and bracing, and load preparation in accordance with industry standards.",
        },
        {
          type: "p",
          text: "Shipper warrants that it has authority to tender the freight to Carrier and that all information provided is complete and accurate.",
        },
      ],
    },
    {
      id: "liability",
      title: "Liability and claims",
      blocks: [
        {
          type: "p",
          text: "Claims for loss, damage, or delay must be filed in writing within nine (9) months of delivery date (or the scheduled delivery date if not delivered). Lawsuits to recover for loss or damage must be filed within two (2) years and one day from the date Carrier denies the claim in writing.",
        },
        {
          type: "p",
          text: "Carrier's liability is limited to actual loss or damage to freight, not to exceed any contractual limitation or limitations imposed by applicable law. Special, consequential, or indirect damages are excluded.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "Each party agrees to indemnify and hold harmless the other party from any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of the indemnifying party's negligence, willful misconduct, or breach of these terms.",
        },
      ],
    },
    {
      id: "force-majeure",
      title: "Force majeure",
      blocks: [
        {
          type: "p",
          text: "Neither party shall be liable for any failure or delay in performance due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, governmental action, labor disputes, accidents, severe weather, or natural disasters.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      blocks: [
        {
          type: "p",
          text: "Either party may terminate the carrier relationship with thirty (30) days' written notice. Termination does not affect any obligations or liabilities accrued before the termination date, including outstanding payment obligations and pending claims.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      blocks: [
        {
          type: "p",
          text: "These terms are governed by the laws of the State of Texas, without regard to its conflict-of-law principles, and by applicable U.S. federal law (including the Carmack Amendment for interstate moves). Any disputes arising under these terms shall be resolved in the state or federal courts located in Bexar County, Texas.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "For questions about these terms, contact us at TBM Carriers, Inc., 5718 University Heights Blvd, Suite 204, San Antonio, TX 78249, by phone at (210) 732-3400, or by email at contact@tbmcarriers.com.",
        },
      ],
    },
  ],
};
