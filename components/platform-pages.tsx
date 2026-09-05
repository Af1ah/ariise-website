import { ClosingSection } from "@/components/home-sections";
import { CheckMark } from "@/components/icons";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { SectionReveal } from "@/components/ui/section-reveal";

type Feature = {
  title: string;
  description: string;
  items: string[];
};

const platformFeatures: Feature[] = [
  {
    title: "Admission management",
    description: "Bring enquiries, applications, reviews, and approvals into a defined institutional process.",
    items: ["Multi-level approvals", "Applicant data cards", "Transfer-certificate allocation"],
  },
  {
    title: "Course allocation",
    description: "Allocate students using preferences, seat availability, and reservation rules set by your institution.",
    items: ["Student preferences", "Seat and reservation rules", "Automated allotment"],
  },
  {
    title: "Internal marks",
    description: "Combine Moodle activity marks with marks from offline academic work.",
    items: ["Moodle activity marks", "Custom weightage", "Offline activity entry"],
  },
  {
    title: "OBE and academic reporting",
    description: "Map course outcomes and prepare attainment and NAAC-related reporting workflows.",
    items: ["CO, PO, and PSO mapping", "Attainment calculations", "Academic reporting"],
  },
  {
    title: "Timetables and attendance",
    description: "Create class schedules, generate attendance sessions, and record attendance from mobile devices.",
    items: ["Department and class schedules", "Attendance sessions", "Mobile attendance"],
  },
  {
    title: "Reports and notifications",
    description: "Prepare AISHE and institutional reports, then send relevant updates through WhatsApp notifications.",
    items: ["AISHE reporting", "Individual notifications", "Assignment and quiz reminders"],
  },
];

const moodleFeatures: Feature[] = [
  {
    title: "Courses, assignments, and quizzes",
    description: "Organise course material, collect assignments, and assess learners through Moodle activities.",
    items: ["Learning materials and notes", "Assignments and grading", "Quizzes with timed attempts"],
  },
  {
    title: "Interactive learning",
    description: "Add H5P learning activities and, where required, schedule live classes through BigBlueButton, Google Meet, or Zoom.",
    items: ["H5P activities", "Interactive video lessons", "Scheduled live classes"],
  },
  {
    title: "Progress and access",
    description: "Give each role the information it needs and track course participation and completion.",
    items: ["Role-based access", "Course engagement tracking", "Mobile and offline course access"],
  },
];

const platformFaqs = [
  ["Can we choose only the modules we need?", "Yes. AIMS can be scoped around the modules and workflows your institution needs."],
  ["Can AIMS follow our current approval process?", "During implementation, ARiiSE can configure the selected modules around your existing academic and administrative process."],
  ["Can you build a custom Moodle feature?", "ARiiSE can discuss custom Moodle modules, integrations, and workflows when standard features do not meet the requirement."],
  ["Can you help teachers prepare digital learning content?", "Content preparation support can be included in the project scope for teachers who need help structuring course materials."],
];

const serviceGroups: Feature[] = [
  {
    title: "Moodle LMS implementation",
    description: "Set up a Moodle learning environment for your institution’s courses, users, and academic calendar.",
    items: ["Course and role setup", "Assessment configuration", "Live-class integrations"],
  },
  {
    title: "AIMS configuration",
    description: "Configure the AIMS modules selected for admissions, allocation, marks, attendance, and reporting.",
    items: ["Workflow discovery", "Module configuration", "Institution-specific fields"],
  },
  {
    title: "Branding and user experience",
    description: "Apply your institution’s branding and organise the learning experience for staff and students.",
    items: ["Theme integration", "Institution-branded interface", "Role-specific navigation"],
  },
  {
    title: "Migration and integrations",
    description: "Plan data migration and connect approved systems where the integration supports a clear academic workflow.",
    items: ["Migration planning", "WhatsApp notifications", "Biometric attendance devices"],
  },
  {
    title: "Hosting, backups, and upgrades",
    description: "Choose an ARiiSE-managed environment or a hosting vendor that fits your institution’s requirements, then plan the work needed to keep the platform maintained.",
    items: ["AWS, DigitalOcean, Hostinger, or local vendor hosting", "Backup planning", "Upgrade support"],
  },
  {
    title: "Support and training",
    description: "Support the people responsible for operating the platform after implementation.",
    items: ["Administrator guidance", "Teacher onboarding", "Ongoing technical support"],
  },
];

const serviceFaqs = [
  ["Who are these services for?", "ARiiSE works with colleges, academies, and other institutions that need a managed learning and academic operations platform."],
  ["Can we choose our hosting provider?", "Yes. Hosting can be arranged through AWS, DigitalOcean, Hostinger, a local vendor, or your own infrastructure, based on your institution’s requirements."],
  ["Do you support existing Moodle sites?", "ARiiSE can review an existing Moodle site and discuss the right maintenance, upgrade, migration, or integration work."],
  ["What should we prepare before a discussion?", "Bring your current workflows, the modules you need, the systems you use today, and the teams who will operate the platform."],
];

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <div className="feature-list">
      {features.map((feature) => (
        <article className="feature-row" key={feature.title}>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          <ul>
            {feature.items.map((item) => <li key={item}><CheckMark />{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

function FAQList({ faqs }: { faqs: string[][] }) {
  return <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}

export function AimsPage() {
  return <>
    <SectionReveal className="page-section section-wrap" id="aims-modules">
      <div className="section-intro">
        <h1>Manage the academic workflows Moodle does not cover alone.</h1>
        <div className="section-intro-action">
          <p>Use the selected AIMS modules to manage the records, approvals, and reporting that sit around teaching and learning.</p>
          <ArrowFillButton href="/contact" btnText="Book a demo" />
        </div>
      </div>
      <FeatureList features={platformFeatures} />
    </SectionReveal>
    <SectionReveal className="page-section page-section-quiet section-wrap"><div className="section-intro"><h2>Use Moodle for learning delivery.</h2><p>Moodle provides the learning environment. AIMS connects it with the administration and reporting work of an institution.</p></div><FeatureList features={moodleFeatures} /></SectionReveal>
    <SectionReveal className="page-section section-wrap"><div className="two-column-copy"><h2>Start with the process your teams already use.</h2><div><p>Select the modules that match your priorities. During implementation, ARiiSE can configure workflows, branding, and approved integrations around the way your teams work.</p><p>Students retain access to the course materials and activities assigned to them, helping staff reuse learning content across batches and academic years.</p></div></div></SectionReveal>
    <SectionReveal className="page-section section-wrap"><div className="section-intro"><h2>Questions institutions ask before implementation.</h2><p>These discussions help define the right module scope, implementation plan, and support arrangement.</p></div><FAQList faqs={platformFaqs} /></SectionReveal>
    <ClosingSection />
  </>;
}

export function ServicesPage() {
  return <>
    <SectionReveal className="page-section section-wrap" id="services">
      <div className="section-intro">
        <h1>Choose the service work your institution needs.</h1>
        <div className="section-intro-action">
          <p>Start with implementation, improve an existing Moodle site, or discuss the operational support required after launch.</p>
          <ArrowFillButton href="/contact" btnText="Discuss requirements" />
        </div>
      </div>
      <FeatureList features={serviceGroups} />
    </SectionReveal>
    <SectionReveal className="page-section page-section-quiet section-wrap"><div className="section-intro"><h2>Plan the work before the platform changes.</h2><p>A clear scope keeps academic teams, administrators, and technical contacts aligned throughout implementation.</p></div><ol className="service-steps"><li><strong>Understand requirements</strong><span>Review your current workflows, users, systems, and priorities.</span></li><li><strong>Define the scope</strong><span>Select modules, integrations, deployment options, and support requirements.</span></li><li><strong>Configure and prepare</strong><span>Set up the agreed platform, workflows, user roles, and learning structure.</span></li><li><strong>Launch and support</strong><span>Prepare administrators and teachers, then plan ongoing maintenance and upgrades.</span></li></ol></SectionReveal>
    <SectionReveal className="page-section section-wrap"><div className="section-intro"><h2>Questions about ARiiSE services.</h2><p>Bring these topics to an initial discussion so the recommendation reflects your institution’s actual needs.</p></div><FAQList faqs={serviceFaqs} /></SectionReveal>
    <ClosingSection />
  </>;
}

export function faqJsonLd(faqs: string[][]) {
  return JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) });
}

export { platformFaqs, serviceFaqs };
