import { CheckMark } from "@/components/icons";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import { ClosingSection } from "@/components/home-sections";
import { SectionReveal } from "@/components/ui/section-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Custom Quotes | ARiiSE",
  description:
    "Tiered institutional pricing is coming soon. Request sales for a custom quote tailored to your college or academy's scale, modules, and hosting requirements.",
  keywords: [
    "ARiiSE pricing",
    "AIMS LMS cost",
    "college ERP quote",
    "Moodle implementation pricing",
    "institutional LMS quote",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Custom Quotes | ARiiSE Institutional LMS & Management Systems",
    description:
      "Tiered pricing is coming soon. Request sales for a tailored quote based on your institution's workflows and scale.",
    url: "/pricing",
  },
};

const quoteFactors = [
  {
    title: "Data Transition",
    description:
      "Plan the move from existing records and learning materials into a structure your institution can operate with confidence.",
    highlights: ["Migration planning", "Roles and account setup", "Academic-calendar preparation"],
  },
  {
    title: "Campus Scale",
    description:
      "Quotes are aligned with your institution’s active student body, faculty seats, and academic departments.",
    highlights: ["Colleges & autonomous institutions", "Multi-campus academies", "Departmental scalability"],
  },
  {
    title: "Deployment Model",
    description:
      "Choose ARiiSE-managed hosting or AWS, DigitalOcean, Hostinger, or a local vendor based on your institution’s requirements.",
    highlights: ["Client-selected hosting vendor", "Managed or client-owned environment", "Routine updates & backups"],
  },
  {
    title: "Course Content & Implementation",
    description:
      "Scope course-content creation or structuring alongside implementation, role configuration, teacher onboarding, and technical assistance.",
    highlights: ["Course-content creation support", "Admin & faculty training", "Platform implementation"],
  },
];

export default function Pricing() {
  return (
    <main id="main-content">
      {/* Intro / Coming Soon Banner */}
      <SectionReveal className="page-section section-wrap" id="pricing-intro">
        <div className="section-intro">
          <div>
            <p className="section-label">Coming Soon</p>
            <h1>Institutional Pricing</h1>
          </div>
          <div className="section-intro-action">
            <p>
              Standard tier-based pricing is coming soon. Because every college and academy operates
              with unique student counts, hosting needs, and module requirements, please request
              sales for a tailored quote for now.
            </p>
            <div>
              <ArrowFillButton href="/contact" btnText="Request Sales for Quote" />
            </div>
          </div>
        </div>

        {/* Pricing Scope Factors */}
        <div className="pricing-factors-intro">
          <span className="section-label">How We Scope Your Engagement</span>
          <h2>Every quote reflects your institution’s actual operational requirements.</h2>
        </div>

        <div className="pricing-grid">
          {quoteFactors.map((factor) => (
            <article className="pricing-card" key={factor.title}>
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
              <ul>
                {factor.highlights.map((item) => (
                  <li key={item}>
                    <CheckMark />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Direct Sales Assistance Callout */}
        <div className="pricing-direct-card">
          <div>
            <span className="section-label">Direct Consultation</span>
            <h3>Need a ballpark estimate or budgetary proposal today?</h3>
            <p>
              Speak directly with our academic solutions team in Kozhikode to discuss your
              institution’s upcoming academic calendar and timeline.
            </p>
          </div>
          <div className="pricing-direct-actions">
            <ArrowFillButton href="tel:+918147722711" btnText="Call +91 8147722711" />
            <ArrowFillButton variant="light" href="/contact" btnText="Submit Requirements" />
          </div>
        </div>
      </SectionReveal>

      {/* Closing section */}
      <ClosingSection
        title="Discuss the system your institution needs."
        description="Tell us which academic workflows you want to improve. We’ll help define the right AIMS scope."
        action="Request a Quote"
      />
    </main>
  );
}
