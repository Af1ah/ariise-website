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
    title: "Module Selection",
    description:
      "Select only the AIMS modules your campus requires — from admissions and course allocation to OBE calculation and attendance.",
    highlights: ["Scope only what you need", "No paying for unused modules", "Add modules as you grow"],
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
      "Choose fully managed cloud hosting with automated backups or on-premise deployment on your own infrastructure.",
    highlights: ["Secure managed cloud", "On-premise installation", "Routine updates & backups"],
  },
  {
    title: "Implementation & Support",
    description:
      "Includes migration of existing academic records, role configuration, teacher onboarding, and dedicated technical assistance.",
    highlights: ["Data migration support", "Admin & faculty training", "Ongoing SLA maintenance"],
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
