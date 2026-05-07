/**
 * Legal content — Privacy Policy and Terms & Conditions.
 *
 * Verbatim text migrated from sinrelato.space/{privacy-policy,terms-and-conditions}.
 * Section structure inferred from the source: short headers (< 110 chars, no terminal
 * punctuation) start new sections; following paragraphs and list items are grouped under them.
 *
 * Recommended: have legal counsel review before publishing on the new domain.
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
  description: "How TBM Carriers, Inc. and its affiliates collect, use, and protect your information when you visit our website.",
  lastUpdated: "April 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        { type: "p", text: "TBM Carriers, Inc. and its affiliates and subsidiaries ( \"Company\" or \"We\" ) respect your privacy and are committed to protecting it through our compliance with this policy." },
        { type: "p", text: "This policy describes the types of information we may collect from you or that you may provide to us when you interact with or visit the website of TBM Carriers, Inc., and our practices for collecting, using, maintaining, protecting, and disclosing that information. This policy applies to information we collect." },
        { type: "p", text: "Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates." },
      ],
    },
    {
      id: "children-under-the-age-of-16",
      title: "Children Under the Age of 16",
      blocks: [
        { type: "p", text: "Our Website is not intended for children under 16 years of age. No one under age 16 may provide any information to or on the Website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on this Website or on or through any of its features. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at:" },
        { type: "p", text: "5718 University Heights Blvd., Suite 204 San Antonio, TX 78249 (210) 732-3400" },
        { type: "p", text: "California residents under 16 years of age may have additional rights regarding the collection and sale of their personal information. Please see \"Privacy Notice for California Residents\" below." },
      ],
    },
    {
      id: "information-we-collect-about-you-and-how-we-collec",
      title: "Information We Collect About You and How We Collect It",
      blocks: [
        { type: "p", text: "We collect several types of information from and about users of our Website, including information:" },
        {
          type: "list",
          items: [
            "By which you may be personally identified, such as name, postal address, e-mail address, telephone number, social security number, or any other identifier by which you may be contacted online or offline ( \"personal information\" );",
            "That is about you but individually does not identify you; and/or",
            "About your internet connection, the equipment you use to access our Website, and usage details.",
          ],
        },
        { type: "p", text: "We collect this information:" },
        {
          type: "list",
          items: [
            "Directly from you when you provide it to us.",
            "Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.",
          ],
        },
      ],
    },
    {
      id: "information-you-provide-to-us",
      title: "Information You Provide to Us",
      blocks: [
        { type: "p", text: "The information we collect on or through our Website, may include:" },
        {
          type: "list",
          items: [
            "Information that you provide by filling in forms on our Website. This includes information provided at the time of requesting further services. We may also ask you for information when you report a problem with our Website.",
            "Records and copies of your correspondence (including email addresses) if you contact us.",
            "Your search queries on the Website.",
          ],
        },
      ],
    },
    {
      id: "information-we-collect-through-automatic-data-coll",
      title: "Information We Collect Through Automatic Data Collection Technologies",
      blocks: [
        { type: "p", text: "As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:" },
        {
          type: "list",
          items: [
            "Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.",
            "Information about your computer and internet connection, including your IP address, operating system, and browser type.",
          ],
        },
        { type: "p", text: "The information we collect automatically may include personal information, or we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to estimate our audience size and usage patterns." },
        { type: "p", text: "The technologies we use for this automatic data collection may include:" },
        {
          type: "list",
          items: [
            "Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.",
            "Web Beacons. Pages of our Website may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).",
          ],
        },
      ],
    },
    {
      id: "biometric-information",
      title: "Biometric Information",
      blocks: [
        { type: "p", text: "We do not collect, process or use biometric information, as it is defined by applicable laws." },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      blocks: [
        { type: "p", text: "We use information that we collect about you or that you provide to us, including any personal information:" },
        {
          type: "list",
          items: [
            "To provide you with information, products, or services that you request from us.",
            "To fulfill any other purpose for which you provide it.",
            "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.",
            "To notify you about changes to our Website, or any products or services we offer or provide though it.",
            "In any other way we may describe when you provide the information.",
            "For any other purpose with your consent.",
          ],
        },
      ],
    },
    {
      id: "disclosure-of-your-information",
      title: "Disclosure of Your Information",
      blocks: [
        { type: "p", text: "We may disclose aggregated information about our users, and information that does not identify any individual, without restriction." },
        { type: "p", text: "We may disclose personal information that we collect or you provide as described in this privacy policy:" },
        {
          type: "list",
          items: [
            "To our subsidiaries and affiliates.",
            "To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.",
            "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Company and its affiliates’ and subsidiaries' assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Company and its affiliates and subsidiaries about our Website users is among the assets transferred.",
            "To third parties to market their products or services to you if you have consented to these disclosures. We contractually require these third parties to keep personal information confidential and use it only for the purposes for which we disclose it to them. For more information, see Choices About How We Use and Disclose Your Information.",
            "To fulfill the purpose for which you provide it.",
            "For any other purpose disclosed by us when you provide the information.",
            "With your consent.",
          ],
        },
        { type: "p", text: "We may also disclose your personal information:" },
        {
          type: "list",
          items: [
            "To comply with any court order, law, or legal process, including to respond to any government or regulatory request.",
            "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Company and its affiliates and subsidiaries, our customers, or others.",
          ],
        },
      ],
    },
    {
      id: "choices-about-how-we-use-and-disclose-your-informa",
      title: "Choices About How We Use and Disclose Your Information",
      blocks: [
        { type: "p", text: "We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:" },
        {
          type: "list",
          items: [
            "Tracking Technologies and Advertising. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe's website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly. You also have the ability to opt out of certain tracking technologies when you visit our website and select the option to manage your preferences.",
          ],
        },
        { type: "p", text: "We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative (\"NAI\") on the NAI's website." },
        { type: "p", text: "California residents may have additional personal information rights and choices. Please see the “Privacy Notice for California Residents” below." },
      ],
    },
    {
      id: "changes-to-our-privacy-policy",
      title: "Changes to Our Privacy Policy",
      blocks: [
        { type: "p", text: "It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the end of the policy. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes." },
        { type: "p", text: "To ask questions or comment about this privacy policy and our privacy practices, contact us at TBM Carriers, 5718 University Heights Blvd., Suite 204 San Antonio, TX 78249. (210) 732-3400 Last Updated: February 2026" },
      ],
    },
    {
      id: "privacy-notice-for-california-residents",
      title: "Privacy Notice for California Residents",
      blocks: [
        { type: "p", text: "This Privacy Notice for California Residents supplements the information contained in the above Privacy Policy and applies solely to all visitors, users, and others who reside in the State of California (\"consumers\" or \"you\"). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA) and the California Privacy Rights Act of 2020 (CPRA) and any terms defined in the CCPA or the CPRA (collectively, the “Acts”) have the same meaning when used in this Notice." },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        { type: "p", text: "We collect information that identifies, relates to, describes, references, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer, household, or device ( \"personal information\" ). Personal information does not include:" },
        {
          type: "list",
          items: [
            "Publicly available information from government records.",
            "Deidentified or aggregated consumer information.",
            "Information excluded from the Acts’ scope, like: health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;",
            "personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FCRA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.",
          ],
        },
        { type: "p", text: "In particular, we have collected the following categories of personal information from its consumers within the last twelve (12) months:" },
      ],
    },
    {
      id: "category",
      title: "Category",
      blocks: [

      ],
    },
    {
      id: "collected",
      title: "Collected",
      blocks: [

      ],
    },
    {
      id: "determination-of-retention-period",
      title: "Determination of Retention Period",
      blocks: [

      ],
    },
    {
      id: "business-purpose",
      title: "Business Purpose",
      blocks: [

      ],
    },
    {
      id: "shared-or-sold",
      title: "Shared or Sold",
      blocks: [

      ],
    },
    {
      id: "identifiers",
      title: "Identifiers",
      blocks: [

      ],
    },
    {
      id: "yes",
      title: "Yes",
      blocks: [
        { type: "p", text: "Federal regulations; insurance requirements; accidents; tax and corporate compliance." },
        { type: "p", text: "Employment; payroll; operations." },
      ],
    },
    {
      id: "personal-information-per-california-customer-recor",
      title: "Personal information per California Customer Records Statute",
      blocks: [

      ],
    },
    {
      id: "federal-regulations-insurance-requirements-acciden",
      title: "Federal regulations; insurance requirements; accidents; tax and corporate compliance",
      blocks: [

      ],
    },
    {
      id: "protected-classification-characteristics-under-cal",
      title: "Protected classification characteristics under California or federal law",
      blocks: [

      ],
    },
    {
      id: "compliance-with-federal-and-state-laws",
      title: "Compliance with federal and state laws",
      blocks: [

      ],
    },
    {
      id: "internet-or-other-similar-network-activity",
      title: "Internet or other similar network activity",
      blocks: [
        { type: "p", text: "Yes." },
      ],
    },
    {
      id: "analyze-online-traffic",
      title: "Analyze online traffic",
      blocks: [

      ],
    },
    {
      id: "geolocation-data",
      title: "Geolocation data",
      blocks: [

      ],
    },
    {
      id: "track-location-of-trucks-and-freight",
      title: "Track location of trucks and freight",
      blocks: [

      ],
    },
    {
      id: "sensory-data",
      title: "Sensory Data",
      blocks: [

      ],
    },
    {
      id: "professional-or-employment-related-information",
      title: "Professional or employment related information",
      blocks: [

      ],
    },
    {
      id: "job-applicants",
      title: "Job applicants",
      blocks: [

      ],
    },
    {
      id: "sensitive-personal-information",
      title: "Sensitive Personal Information",
      blocks: [

      ],
    },
    {
      id: "sold-or-shared",
      title: "Sold or Shared",
      blocks: [

      ],
    },
    {
      id: "government-identifiers",
      title: "Government Identifiers",
      blocks: [

      ],
    },
    {
      id: "job-applicants-payroll-benefits-hr-and-eligibility",
      title: "Job applicants, payroll, benefits, HR, and eligibility to operate a vehicle",
      blocks: [

      ],
    },
    {
      id: "geolocation",
      title: "Geolocation",
      blocks: [
        { type: "p", text: "We obtain the categories of personal information listed above from the following categories of sources:" },
        {
          type: "list",
          items: [
            "Directly from you. For example, from forms you complete or products and services you purchase.",
            "Indirectly from you. For example, from observing your actions on our Website.",
          ],
        },
      ],
    },
    {
      id: "use-of-personal-information",
      title: "Use of Personal Information",
      blocks: [
        { type: "p", text: "We may use or disclose the personal information we collect for one or more of the following purposes:" },
        {
          type: "list",
          items: [
            "To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to inquire about an employment opportunity, to submit an employment application, to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. If you provide information in an employment context, we will use that information for appropriate human resources and other operational purposes. We may also save your information to facilitate new product orders or process returns.",
            "To provide, support, personalize, and develop our Website, products, and services.",
            "To create, maintain, customize, and secure any account with us that you may have.",
            "To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.",
            "To personalize your Website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Website, third-party sites, and via email or text message (with your consent, where required by law).",
            "To help maintain the safety, security, and integrity of our Website, products and services, databases and other technology assets, and business.",
            "For testing, research, analysis, and product development, including to develop and improve our Website, products, and services.",
            "To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.",
            "As described to you when collecting your personal information or as otherwise set forth in the Acts.",
            "To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred.",
          ],
        },
        { type: "p", text: "We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice." },
      ],
    },
    {
      id: "sharing-and-disclosure-of-personal-information",
      title: "Sharing and Disclosure of Personal Information",
      blocks: [
        { type: "p", text: "The CPRA defines the term “Sharing” as follows”: \"Shared\" is based on the definition found in the CPRA, section 1799.140(ah)(1): \"“Share,” “shared,” or “sharing” means sharing, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a consumer’s personal information by the business to a third party for cross-context behavioral advertising, whether or not for monetary or other valuable consideration, including transactions between a business and a third party for cross-context behavioral advertising for the benefit of a business in which no money is exchanged.\"" },
        { type: "p", text: "Based on the above definition, we share your information with the following categories of third parties:" },
        {
          type: "list",
          items: [
            "Advertising networks (Google)",
            "Data analytics providers",
            "Social networks",
          ],
        },
        { type: "p", text: "We also disclose your personal information to the following categories of entities for a business purpose, including:" },
        {
          type: "list",
          items: [
            "Service Providers",
            "Contractors",
          ],
        },
        { type: "p", text: "When we disclose personal information to a service provider or a contractor for a business purpose, we enter into a contract that requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract." },
        { type: "p", text: "We also may disclose personal information to our affiliates or, if required by law, to a governmental entity." },
      ],
    },
    {
      id: "sale-of-personal-information",
      title: "Sale of Personal Information",
      blocks: [
        { type: "p", text: "In the preceding twelve (12) months, Company has not sold personal information." },
      ],
    },
    {
      id: "your-rights-and-choices",
      title: "Your Rights and Choices",
      blocks: [
        { type: "p", text: "The Acts provide consumers (California residents) with specific rights regarding their personal information. This section describes your rights under the Acts and explains how to exercise those rights." },
      ],
    },
    {
      id: "access-to-specific-information-and-data-portabilit",
      title: "Access to Specific Information and Data Portability Rights",
      blocks: [
        { type: "p", text: "You have the right to know what personal information we have collected, used, or disclosed and can request a copy of that data in a portable format." },
      ],
    },
    {
      id: "deletion-or-correction-request-rights",
      title: "Deletion or Correction Request Rights",
      blocks: [
        { type: "p", text: "You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. You also have the right to request that we update or correct any of your personal information that we collected from you and retained that is incorrect. Once we receive and confirm your verifiable consumer request, we will delete or correct (and, where applicable, direct our service providers to delete or correct) your personal information from our records, unless an exception applies." },
        { type: "p", text: "We may deny your deletion or correction request if retaining the information is necessary for us or our service provider(s) to:" },
        {
          type: "list",
          items: [
            "C omplete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or otherwise perform our contract with you.",
            "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.",
            "Debug products to identify and repair errors that impair existing intended functionality.",
            "Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.",
            "Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).",
            "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.",
            "Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.",
            "Comply with a legal obligation.",
            "Make other internal and lawful uses of that information that are compatible with the context in which you provided it.",
          ],
        },
      ],
    },
    {
      id: "right-to-limit-the-use-or-disclosure-of-sensitive-",
      title: "Right to Limit the Use or Disclosure of Sensitive Personal Information",
      blocks: [
        { type: "p", text: "The CPRA specifically grants Consumers the right to limit the use and disclosure of your sensitive personal information to actions necessary to perform the specific purposes permitted under the Acts. We can continue using or disclosing your sensitive personal information after receiving a limitation request from you, for the following purposes:" },
        {
          type: "list",
          items: [
            "To perform services or provide goods that an average consumer requesting those goods or services would reasonably expect.",
            "To help ensure security and integrity if that use is reasonably necessary and proportionate.",
            "To perform short-term, transient uses, including but not limited to non-personalized advertising shown as part of your current interaction with the us, if we do not: disclose the sensitive personal information to another third party; or",
            "use it to build a profile about you or otherwise alter your experience outside of your current interaction with us.",
            "To perform services, including: maintaining or servicing accounts;",
            "providing customer service;",
            "processing or fulfilling orders and transactions, verifying your information, processing payments, providing financing, providing analytic services, providing, storage, or providing similar services.",
            "To verify or maintain the quality or safety of a service or device that is owned, manufactured, manufactured for, or controlled by us.",
            "To improve, upgrade, or enhance the service or device that is owned, manufactured, manufactured for, or controlled by us.",
            "To perform other actions that CPRA regulations authorize.",
          ],
        },
        { type: "p", text: "Exercising Access, Data Portability, Correction, Deletion, or Limitation of Use and Disclosure of Sensitive Personal Information Rights" },
        { type: "p", text: "To exercise the access, data portability, correction, deletion and limitation of use and disclosure of sensitive personal information rights described above, please submit a verifiable consumer request to us by either:" },
        {
          type: "list",
          items: [
            "Calling us at (210) 732-3400",
          ],
        },
        { type: "p", text: "Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child." },
        { type: "p", text: "You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:" },
        {
          type: "list",
          items: [
            "Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.",
            "Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.",
          ],
        },
        { type: "p", text: "We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you." },
        { type: "p", text: "Making a verifiable consumer request does not require you to create an account with us." },
        { type: "p", text: "We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request." },
      ],
    },
    {
      id: "response-timing-and-format",
      title: "Response Timing and Format",
      blocks: [
        { type: "p", text: "We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to an additional 45 days), we will inform you of the reason and extension period in writing." },
        { type: "p", text: "Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance." },
        { type: "p", text: "We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request." },
      ],
    },
    {
      id: "right-to-opt-out-of-sharing-of-personal-informatio",
      title: "Right to Opt-Out of Sharing of Personal Information for Cross-Contextual Behavioral Advertising Purposes",
      blocks: [
        { type: "p", text: "Cross-contextual behavioral advertising, commonly referred to as targeted advertising, is the tracking of a consumer’s activities across websites, applications, and services to identify and present advertisements tailored to their behavior. You have the right to Opt-Out of our cross-contextual behavioral advertising. You will be presented the option to exercise this Opt-Out right when you visit one of our websites and can state your preferences at that time." },
      ],
    },
    {
      id: "non-discrimination",
      title: "Non-Discrimination",
      blocks: [
        { type: "p", text: "We will not discriminate against you for exercising any of your rights under the Acts. Unless permitted by the Acts, we will not:" },
        {
          type: "list",
          items: [
            "Deny you goods or services.",
            "Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.",
            "Provide you a different level or quality of goods or services.",
            "Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.",
          ],
        },
      ],
    },
    {
      id: "changes-to-our-privacy-notice",
      title: "Changes to Our Privacy Notice",
      blocks: [
        { type: "p", text: "We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Website and update the notice's effective date. Your continued use of our Website following the posting of changes constitutes your acceptance of such changes." },
      ],
    },
    {
      id: "contact-information",
      title: "Contact Information",
      blocks: [
        { type: "p", text: "If you have any questions or comments about this notice, the ways in which the Company collects and uses your information described here, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:" },
        { type: "p", text: "5718 University Heights Blvd., Suite 204, San Antonio, TX 78249 Phone: (210) 732-3400" },
        { type: "p", text: "Last Updated: February 2026." },
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: "Terms & Conditions",
  description: "TBM Carriers, Inc. trucking contract terms and conditions for transport within the United States.",
  lastUpdated: "April 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        { type: "p", text: "1. In tendering a shipment for carriage, the Shipper agrees to these Terms and Conditions of Contract (“the Contract”), which no agent or employee of the parties may alter. The terms and conditions of the Contract are entered into pursuant to 49 U.S.C. § 1401 (b)." },
        { type: "p", text: "2. In tendering a shipment for carriage, the Shipper warrants that the shipment is packaged adequately to protect the enclosed good and to ensure safe transportation with ordinary care and handling, and that each package is appropriately labeled and is in good order and condition except as noted or specified. Carrier will not be liable for mis-delivery and/or non-delivery of any package which is not property labeled by the Shipper showing the exact delivery address of the consignee. Shipper also declares that the commodity description is accurate and exact." },
        { type: "p", text: "3. Shipper warrants and represents that it has complied with all laws governing shipment of materials and acknowledges that Carrier does not guarantee the protection of perishable products, and Shipper expressly assumes the risk of loss or damage in tendering such products to Carrier for delivery." },
        { type: "p", text: "4. Shipper agrees to defend, indemnify, and hold harmless Carrier against any claims, losses or damages arising from the nature of the shipment, including, but not limited to, the shipment of dangerous goods and hazardous, licensed or perishable materials." },
        { type: "p", text: "5. The Shipper and consignee shall be liable jointly and severally for all unpaid freight and other lawful charges accruing on the shipment as billed or corrected, except that COD or collect shipments may move without recourse to the Shipper-consignor when the parties so stipulate. Nevertheless, the Shipper shall remain liable for transportation charges where there has been an erroneous determination of the freight charges assessed, based upon incomplete or incorrect information provided by the Shipper. Notwithstanding the above, the Shipper’s liability for payment of additional charges that may be found to be due after delivery shall be as specified by 49 U.S.C. § 13706, except that the Shipper need not provide the specified written notice to the delivering carrier if the consignee is a for-hire carrier. Nothing in the Bill of Lading or the Contract shall limit the right of Carrier to require prepayment or guarantee of the charges at the time of shipment or prior to delivery. If the description of articles or other information on the Bill of Lading is found to be incorrect or incomplete, the freight charges must be based upon the articles shipped." },
        { type: "p", text: "6. All invoices are due and payable within fifteen (15) days from the date of tender. In the event of failure of liable parties to pay Carrier within fifteen (15) days, the liable parties shall pay to Carrier interest at the rate of eighteen percent (18%) per annum on outstanding balances from the date payment is due until received. Shipper hereby agrees to the imposition of a lien in favor of the Carrier on all future shipments by the Shipper for the full amount of all outstanding invoices, including all accrued interest, due and owing the Carrier by the Shipper. If collection of an amount due Carrier or Carrier’s enforcement of the lien is referred to an attorney or collection agency for collection, the liable parties shall pay all court costs and attorneys’ or other fees incurred by Carrier for such suit or collection. Where delivery is refused, Shipper agrees to cover all reasonable costs incurred by Carrier in returning the shipment to Shipper." },
        { type: "p", text: "7. In consideration of Carrier’s rate for transportation, which is in part defendant upon the value of the shipment, Carrier’s liability for any cargo damage or loss shall be limited to: 50 Cents per pound up to a maximum of $50,000 per shipment. In case of a shipment with a declared value, the Carrier’s maximum liability shall be the declared value. In no event will Carrier be liable for any punitive, incidental, indirect, or consequential damages (including attorneys’ fees) of any kind in connection with the loss, damage or delay of any shipment, whether or not Carrier had knowledge that such damages might be incurred." },
        { type: "p", text: "8. The Carrier is not liable for loss, damage, delay, mis-delivery or non-delivery caused by: 1) any cause other than its own negligence; 2) the act, default or omission of Shipper; 3) the nature of the shipment or any defective characteristics or inherent vice thereof, including the shipment of hazardous dangerous or perishable materials; 4) violation by Shipper or consignee of any law governing the handling or shipment of the tendered materials, 5) violation by Shipper or consignee of the terms and conditions of the Contract; 6) acts of God, or public enemies or authorities; 7) riots, strikes or other civil commotions; or 7) other causes beyond the reasonable control of the parties. In the event of a seal discrepancy, the Consignee must perform a reasonable inspection of the cargo to determine if actual damage or contamination has occurred. Consistent with the legal duty to mitigate damages, the Consignee shall not reject a shipment based solely on a seal breach unless the goods are proven to be practically worthless or unsafe for their intended use." },
        { type: "p", text: "9. All shipments are subject to inspection by Carrier at Carrier’s discretion, including but not limited to, opening the shipment. Carrier is not, however, obligated to perform such inspection of goods." },
        { type: "p", text: "10. Transportation of shipments is subject to availability of equipment and space thereon. Carrier shall have the right to substitute alternate means of transportation, including surface transportation, and select the routing or deviate from a routing shown on the Bill of Lading or Rate Confirmation. Charges for transportation will be based on the applicable tariff rate for the type of service requested by the Shipper as specified in Carrier’s Rate Tariff on the date of shipment; however, Carrier will transport the shipment within the terms as specified in the Bill of Lading or Rate Confirmation by Shipper subject to, but not limited to, normal delays in transportation such as backlogs, weather conditions and the like. Carrier does not guarantee commencement or completion of shipment within a specified term." },
        { type: "p", text: "11. Claims: Non-Delivery: Written notice of loss due to non-delivery must be reported by Shipper within 180 days after acceptance of the shipment for carriage. Apparent Damage: Written notice of loss due to apparent damage, shortage or delay must be reported in writing within fifteen (15) days after delivery of the shipment and claim for such loss/damage must be made within one-hundred eighty (180) days from the date of tender of shipment. Concealed Damage: Written notice of loss due to concealed damage after clear receipt of goods has been given, must be reported in writing within seven (7) days after date of delivery, with privilege of Carrier to inspect the shipment within fifteen (15) days from the date such notification is received by Carrier. Goods must be retained in original trailer until inspection has been completed. Claims for concealed damage must be made within one-hundred eighty (180) days from the date of shipping." },
        { type: "p", text: "12. Overage and Refund Claims: Written claims for overages and refunds must be made within 180 days from date of tender. No claim of any type above will be entertained until all transportation charges have been paid in full. The amount of the claim shall not be deducted from the transportation charges. Carrier shall not be liable unless an action is brought withing 365 days after the date written notice is given to the claimant that Carrier has disallowed the claim in shole or in part or within two (2) years of the date of tender, whichever is earlier." },
        { type: "p", text: "13. This Contract shall be governed by and construed in accordance with the laws of the State of Texas, unless preempted by federal law, and any action brought against the Carrier must be brought in the appropriate State or Federal Court in San Antonio, Texas. Feb. 2026" },
      ],
    },
  ],
};
