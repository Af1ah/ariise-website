import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export function LegalPage({ title, introduction, sections }: LegalPageProps) {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-page-header section-wrap">
        <p className="legal-page-date">Effective and last updated · 5 September 2026</p>
        <h1>{title}</h1>
        <p>{introduction}</p>
        <p className="legal-page-meta">ARiiSE · Partnership firm · Kozhikode, Kerala, India · Established 19 February 2024</p>
      </header>

      <article className="legal-page-content section-wrap">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </article>

      <aside className="legal-page-help section-wrap" aria-label="Legal policy contact">
        <p>Questions about these policies or your data?</p>
        <a href="mailto:info@ariiseglobal.com">info@ariiseglobal.com</a>
        <span aria-hidden="true">·</span>
        <Link href="/contact">Contact ARiiSE</Link>
      </aside>
    </main>
  );
}

export const termsSections: LegalSection[] = [
  {
    title: "1. Acceptance, priority, and definitions",
    paragraphs: [
      "By accepting a quotation or invoice, asking ARiiSE to begin work, paying for a Service, or using the Platform, the Client accepts these Terms. A signed agreement or accepted Service Order prevails over these Terms only where it expressly states different terms.",
      "Client means the institution, business, or person named in the Service Order. Platform means the ARiiSE-hosted or ARiiSE-managed education technology environment. Service Order means the accepted quotation, invoice, order, proposal, or written agreement that states the agreed scope, price, term, hosting vendor, and deliverables.",
    ],
  },
  {
    title: "2. Services and scope",
    paragraphs: [
      "ARiiSE provides education technology services, including hosted learning platforms, implementation, configuration, maintenance, support, and related services. The exact plan, features, limits, term, pricing, and deliverables are those stated in the accepted quotation, invoice, or written agreement (the Service Order).",
      "Work, integrations, migration, training, configuration, features, or deliverables not expressly included in the Service Order are outside scope. They require a separate written quotation or approval and may be charged separately.",
    ],
  },
  {
    title: "3. Delivery, service term, and renewal",
    paragraphs: [
      "The Delivery Date is the date ARiiSE sends written handover or production-access confirmation to the Client’s authorised contact. The applicable service period begins on the Delivery Date, not when a quotation is accepted, an invoice is issued, a payment is cleared, or a final balance is settled, unless the Service Order expressly says otherwise.",
      "The Delivery Date establishes the next renewal due date. Service terms are ordinarily annual, but a shorter or longer fixed term may apply where stated in the Service Order.",
      "Renewal requires the Client’s acceptance of the applicable quotation or invoice. Automatic renewal applies only where the Service Order or a written term expressly identifies the renewal amount and states that renewal is automatic.",
    ],
  },
  {
    title: "4. Fees, taxes, and payment",
    paragraphs: [
      "All fees, payment schedules, and taxes are stated in the Service Order. Unless mandatory law requires otherwise, payments made for Services, implementation, subscriptions, renewals, or individually scoped course-content work are non-refundable once the relevant work has begun, access has been provided, or the service period has started.",
      "This does not exclude a refund, remedy, or other right that cannot lawfully be excluded, including a verified duplicate or incorrect charge, non-delivery attributable to ARiiSE, or a remedy required by applicable law.",
      "Renewal prices may change to reflect changes in scope, capacity, vendor charges, exchange-rate or currency fluctuations, inflation, taxes, licensing costs, or prevailing prices. Promotional or prior-term pricing does not guarantee a future renewal price.",
    ],
  },
  {
    title: "5. Support and service requests",
    paragraphs: [
      "Support requests must be raised by an authorised Client contact through the support email or helpdesk identified in the Service Order. Business Hours are the hours stated in that Service Order, excluding public holidays. We aim to provide an initial response within 24 Business Hours of a properly raised ticket. This is a response target, not a guaranteed resolution time or service-level agreement unless a Service Order expressly provides one.",
      "The Client must provide timely, accurate information and any access reasonably required to investigate an issue. Delays caused by missing access, incomplete information, Client systems, internet connectivity, third-party products, or Client approvals are not attributable to ARiiSE.",
    ],
  },
  {
    title: "6. Major upgrades and course-content creation",
    paragraphs: [
      "Routine maintenance and updates included in the Service Order will be provided as described in that order. Major platform upgrades, including major Moodle releases, significant migrations, compatibility work, redesigns, or changes requiring substantial testing or reconfiguration, are separately chargeable unless expressly included in writing.",
      "Course-content creation, structuring, or migration is not unlimited and is not included unless the Service Order identifies each course, its deliverables, review rounds, delivery date, and separate fee. ARiiSE owns all course content, templates, layouts, source files, and other materials it creates. After full payment, the Client receives a non-exclusive, non-transferable licence to use the completed course only within the agreed Platform during its paid service term, unless the Service Order grants broader rights.",
      "The Client, its teachers, and authorised users may create, edit, publish, enrol students in, teach, and manage access to their own courses and Client Content without ARiiSE approval. Client Content remains the Client’s property. The Client remains responsible for supplying approved source material and for approving academic accuracy, copyright compliance, and ownership before publication.",
    ],
  },
  {
    title: "7. Client content, course content, and ownership",
    paragraphs: [
      "The Client controls access to its own courses and Client Content. ARiiSE does not require prior approval for the Client, its teachers, or authorised users to create, edit, publish, or teach their own courses. The Client is responsible for all content, images, course materials, learner communications, trademarks, data, and other material uploaded, supplied, or published through the Platform.",
      "Teachers, authors, or the Client, as applicable, remain responsible for the accuracy, educational suitability, copyright compliance, and ownership of course content they create or provide. ARiiSE does not acquire ownership of Client Content; the Client grants us only the limited right necessary to host, process, back up, and provide the Services.",
    ],
  },
  {
    title: "8. Data, hosting, security, and privacy",
    paragraphs: [
      "The Service Order identifies the hosting vendor and deployment location. ARiiSE-managed hosting may use infrastructure operated by AWS, DigitalOcean, Hostinger, or a local vendor. The Client may select a hosting vendor in writing; additional vendor, infrastructure, migration, management, or support charges may apply.",
      "ARiiSE does not sell, rent, trade, or disclose Client or learner data to unaffiliated third parties for their marketing purposes. We process or disclose data only as needed to provide the Services, comply with law or a valid governmental or court request, protect the Platform or users, or use a Client-selected hosting vendor or essential service provider necessary for the agreed service.",
      "ARiiSE applies commercially reasonable technical and organisational safeguards designed to protect data and the Platform. ARiiSE will notify the Client without undue delay after confirming a security incident that materially affects Client Data. No internet-connected service can guarantee absolute security or prevent every unauthorised access, intrusion, or cyber incident. ARiiSE does not provide an insurance-backed or absolute hijack-prevention guarantee.",
      "ARiiSE is not responsible for the availability, security, performance, compatibility, or continued support of third-party software, plugins, tools, services, or vendor infrastructure.",
    ],
  },
  {
    title: "9. Data access, reports, exports, and deletion",
    paragraphs: [
      "An authorised Client representative may request student data, reports, or an export through the contact in the Service Order. ARiiSE will acknowledge a valid request within 7 Business Days and provide the available export in the agreed format and through a secure channel. The Service Order states what is included; substantial custom processing may require a separate quotation.",
      "When a Client-authorised user deletes data from the Platform, ARiiSE removes it from the active Platform after 7 days. It may remain in protected backups for the retention period stated in the Service Order and is not restored except for an authorised recovery request. ARiiSE may retain data longer where required by law or necessary to resolve a dispute or security incident.",
    ],
  },
  {
    title: "10. Availability and maintenance",
    paragraphs: [
      "For ARiiSE-managed hosting, ARiiSE targets 98% Platform availability over each annual service term. Availability means the percentage of minutes in the term when the production Platform is externally reachable, measured from ARiiSE’s monitoring records. Client-selected hosting is outside this target.",
      "The target excludes planned or emergency maintenance, Client-requested work, Client or user error, third-party software or services, internet or telecommunications failure, force majeure, and events outside ARiiSE’s reasonable control. Planned annual maintenance may require up to 8 hours of interruption in an annual term. This target is not an SLA and does not create service credits, compensation, or refunds unless a Service Order expressly provides them.",
    ],
  },
  {
    title: "11. Backups",
    paragraphs: [
      "Every plan includes basic operational backups only. Basic backups do not guarantee a particular backup frequency, retention period, recovery point, restoration time, or recovery of every file or data change.",
      "Enhanced full backups, including daily backups, more frequent intervals, longer retention, or dedicated recovery arrangements, may be available for an additional charge. The applicable frequency, retention, and fees must be stated in the Service Order.",
    ],
  },
  {
    title: "12. Suspension, expiry, and data retention",
    paragraphs: [
      "If a renewal fee remains unpaid after the renewal due date, ARiiSE may suspend Services or restrict access after notice where reasonably practicable. ARiiSE retains Platform data for 30 days after the overdue renewal date while the Client completes renewal or requests an export, except where earlier action is required by law or necessary to protect the Platform or data.",
      "After that 30-day period, ARiiSE may, subject to applicable law, permanently delete data, deprovision the Platform, or shut down the Client environment. The Client is responsible for requesting an export before the end of the period.",
    ],
  },
  {
    title: "13. Warranties and liability",
    paragraphs: [
      "Except where prohibited by law or expressly agreed in writing, the Services are provided on an as-available basis. ARiiSE does not warrant that the Platform will be uninterrupted, error-free, compatible with every third-party product, or immune from security incidents.",
      "To the maximum extent permitted by law, ARiiSE is not liable for indirect, incidental, special, consequential, punitive, or loss-of-profit, loss-of-revenue, loss-of-data, loss-of-goodwill, business-interruption, or reputational damages arising from or related to the Services.",
      "To the maximum extent permitted by law, ARiiSE’s total aggregate liability arising from or related to the Services will not exceed the fees actually paid by the Client to ARiiSE for the affected Service in the 12 months immediately preceding the event giving rise to the claim.",
    ],
  },
  {
    title: "14. Changes, governing law, and contact",
    paragraphs: [
      "ARiiSE may update these Terms from time to time. Material changes will be posted on the Platform or otherwise notified to the Client. Continued use after the stated effective date of an update constitutes acceptance, except where applicable law requires another form of acceptance.",
      "These Terms are governed by the laws of India. Subject to any mandatory legal right, the courts at Kozhikode, Kerala will have exclusive jurisdiction over disputes arising from these Terms or the Services.",
    ],
  },
  {
    title: "15. Important operating rules",
    paragraphs: [
      "The Client must keep authorised-contact information current, protect its administrator credentials, and promptly notify ARiiSE of suspected unauthorised access. The Client remains responsible for activity performed using its accounts, except to the extent caused directly by ARiiSE’s breach of its obligations.",
      "ARiiSE may suspend, restrict, or terminate access immediately where reasonably necessary to protect the Platform, comply with law, investigate suspected abuse or a security incident, prevent harm, or address a material breach of these Terms. Where practical, ARiiSE will give notice and a reasonable opportunity to cure the breach.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "1. Our no-sharing commitment",
    paragraphs: [
      "ARiiSE does not sell, rent, trade, or share Client or learner data with others for advertising, marketing, profiling, or their independent business purposes. We do not use Client or learner data to advertise to Users, build advertising audiences, sell mailing lists, or make it available to third parties for their own purposes.",
    ],
  },
  {
    title: "2. Who this policy applies to",
    paragraphs: [
      "This policy applies to institutions and other clients that use the Services, and to their authorised administrators, teachers, staff, students, parents, guardians, and other users whose data is placed on the Platform.",
      "For Client, learner, teacher, and staff data, the Client is normally the Data Fiduciary and ARiiSE acts as its Data Processor. ARiiSE acts as an independent Data Fiduciary only for its own business-contact, billing, support, and website data. The Client is responsible for notices, permissions, consent or other lawful basis, and documented processing instructions.",
    ],
  },
  {
    title: "3. Data we may process",
    items: [
      "Account, identity, and contact details, such as names, usernames, email addresses, phone numbers, institutional role, and login details.",
      "Learning and academic records, such as course enrolment, attendance, grades, submissions, certificates, reports, and progress data.",
      "Content supplied to the Platform, such as course materials, messages, uploaded files, images, and assessment material.",
      "Technical and security data, such as IP address, device or browser information, session information, audit logs, and security events.",
      "Support and billing information, such as support tickets, authorised contacts, invoices, payment status, and communications with ARiiSE.",
    ],
  },
  {
    title: "4. Why we use data",
    items: [
      "To provide, configure, host, maintain, and support the Platform.",
      "To authenticate users, control access, prevent misuse, and protect the security of the Platform and data.",
      "To generate reports, exports, backups, and functions requested by the Client.",
      "To communicate about support, service operation, billing, renewal, security, or material changes.",
      "To comply with applicable law and valid legal requests, resolve disputes, investigate incidents, and enforce our agreements.",
    ],
  },
  {
    title: "5. Limited circumstances where data may be accessed or disclosed",
    paragraphs: ["We do not disclose Client or learner data to unrelated third parties. Access or disclosure is limited to the following circumstances:"],
    items: [
      "The Client and its authorised representatives, according to their access permissions.",
      "The hosting vendor named in the Service Order, including AWS, DigitalOcean, Hostinger, or a local vendor selected by the Client.",
      "An essential service provider engaged solely to operate, secure, back up, or support the agreed Services, only where necessary and subject to written confidentiality and data-protection obligations.",
      "A disclosure required by applicable law, a valid court order, or a lawful request from an authorised government authority.",
      "A necessary investigation or response to fraud, a security incident, misuse, or a threat to people, the Platform, or data.",
    ],
  },
  {
    title: "6. Hosting, storage, and security",
    paragraphs: [
      "The Service Order identifies the hosting vendor and deployment location. ARiiSE-managed hosting may use infrastructure operated by AWS, DigitalOcean, Hostinger, or a local vendor. We use commercially reasonable technical and organisational safeguards designed to protect data from unauthorised access, alteration, loss, disclosure, or destruction.",
      "If ARiiSE confirms a security incident that materially affects Client Data, we will notify the Client without undue delay. Users and Clients must protect account credentials and promptly report suspected unauthorised access.",
    ],
  },
  {
    title: "7. Retention, backups, and deletion",
    paragraphs: [
      "We retain data for the Client’s active service term and for the backup-retention period stated in the Service Order. We retain data longer only where required by law or necessary to resolve a dispute or security incident.",
      "When a Client-authorised user deletes data, ARiiSE removes it from the active Platform after 7 days. It may remain in protected backups for the stated backup-retention period and is not restored except for an authorised recovery request. If the Client does not renew, ARiiSE retains Platform data for 30 days after the overdue renewal date, after which it may be deleted or the Platform deprovisioned, subject to applicable law.",
    ],
  },
  {
    title: "8. Access, correction, exports, and requests",
    paragraphs: [
      "An authorised Client representative may request student data, reports, a backup, or an export at info@ariiseglobal.com. We acknowledge a valid request within 7 Business Days and provide the available information in the agreed format through a secure channel. The Service Order states what is included; substantial custom processing may require a separate quotation.",
      "Data Principals may contact info@ariiseglobal.com to ask about ARiiSE’s processing of personal data, raise a grievance, or exercise applicable rights. We will verify the request, coordinate with the Client where it controls the educational record, and respond within 30 calendar days unless applicable law requires a shorter period.",
    ],
  },
  {
    title: "9. Children’s data, changes, and contact",
    paragraphs: [
      "Where the Platform is used by children, ARiiSE processes children’s data only under the Client’s documented instructions and for the agreed educational service. The Client must obtain any required verifiable parent or guardian consent. ARiiSE does not use children’s data for targeted advertising or behavioural monitoring.",
      "This Privacy Policy takes effect on 5 September 2026. We may update it when our Services, practices, or legal obligations change. For privacy questions, requests, concerns, or complaints, contact info@ariiseglobal.com.",
    ],
  },
];
