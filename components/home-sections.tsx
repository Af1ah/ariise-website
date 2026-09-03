import { ArrowUpRight } from "@/components/icons";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import ScrollHighlight from "@/components/originkit/ui/scroll-text-highlight-variant-4";
import { ClientLogoGrid, type ClientLogo } from "@/components/ui/client-logo-grid";
import { SectionReveal } from "@/components/ui/section-reveal";
import Image from "next/image";
import Link from "next/link";

const clientLogos: ClientLogo[] = [
  {
    name: "JDT Islam College of Arts & Science, Kozhikode",
    logoSrc: "/img/clients/jdt logo.png",
    href: "https://www.jdticas.in/",
    description: "University of Calicut-affiliated institution in Vellimadukunnu, Kozhikode with a dedicated learning environment.",
  },
  {
    name: "Farook College (Autonomous)",
    logoSrc: "/img/clients/farook college.png",
    href: "https://farookcollege.ac.in/",
    description: "Higher education institution in Kozhikode with a dedicated learning management system.",
  },
  {
    name: "Centre for Information and Guidance India (CIGI)",
    logoSrc: "/img/clients/cigi.png",
    href: "https://cigi.org/",
    description: "Kozhikode-based not-for-profit organisation for education, career guidance, and social empowerment.",
  },
  {
    name: "Government Arts & Science College, Tanur",
    logoSrc: "/img/clients/gc tanur.png",
    href: "https://gctanur.ac.in/",
    description: "Government higher education institution in Tanur, Malappuram.",
  },
  {
    name: "Crevitae",
    logoSrc: "/img/clients/logocrevitae.jpg",
    href: "https://www.crevitae.com/",
    description: "Education and career-guidance organisation with a digital learning platform.",
  },
  {
    name: "Government Arts & Science College, Kozhikode",
    logoSrc: "/img/clients/gask kozhikode.jpg",
    href: "https://gasckkd.vlms.net/",
    description: "Government higher education institution in Meenchanda, Kozhikode with a dedicated learning portal.",
  },
  {
    name: "Alphonsa Arts & Science College, Sulthan Bathery",
    logoSrc: "/img/clients/alphonsa.jpg",
    href: "https://www.alphonsacollege.ac.in/",
    description: "Higher education institution in Sulthan Bathery with a dedicated LMS.",
  },
  {
    name: "Mary Matha Arts & Science College, Mananthavady",
    logoSrc: "/img/clients/mary matha.png",
    href: "https://marymathacollege.ac.in/",
    description: "Higher education institution in Mananthavady, Wayanad with a dedicated LMS.",
  },
  {
    name: "Al Jamiathul Kauzariyya",
    logoSrc: "/img/clients/kauzariyya.png",
    href: "https://kauzariyya.com/",
    description: "Islamic educational institution in Edathala, Aluva, Kerala.",
  },
  {
    name: "The Cochin College",
    logoSrc: "/img/clients/cochin college.png",
    href: "https://thecochincollege.edu.in/",
    description: "Higher education institution in Kochi with the EdSpace learning platform.",
  },
  {
    name: "Malabar College of Arts & Science, Koyilandy",
    logoSrc: "/img/clients/malabar college moodady.png",
    href: "https://mcasclt.ac.in/",
    description: "Higher education institution in Koyilandy with a dedicated LMS.",
  },
  {
    name: "Pallavan Learning Systems",
    logoSrc: "/img/clients/pallavan.png",
    href: "https://www.pallavanlearningsystems.com/",
    description: "Educational research organisation focused on learning how to learn.",
  },
  {
    name: "Providence Women's College, Calicut",
    logoSrc: "/img/clients/providence.png",
    href: "https://www.providencecollegecalicut.ac.in/",
    description: "Autonomous women's higher education institution in Malaparamba, Calicut.",
  },
];

export function HeroSection() {
  return (
    <>
      <section className="hero-scroll-section section-surface">
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-scroll-copy section-wrap text-center">
          <h1><span>Learning and academic</span><span>work, connected.</span></h1>
          <p className="hero-summary">
            AIMS helps colleges and academies manage Moodle learning, admissions, attendance, marks, timetables, and reporting.
          </p>
          <div className="hero-actions">
            <ArrowFillButton href="/contact" btnText="Book a demo" />
          </div>
          <div className="hero-dashboard"><Image src="/assets/hero_dash.webp" alt="AIMS dashboard showing courses, attendance, grades, and OBE reporting" width={1920} height={1080} priority sizes="(max-width: 760px) 100vw, 78rem" /><p>AIMS dashboard</p></div>
        </div>
      </section>
      <ClientLogoGrid clients={clientLogos} />
    </>
  );
}

export function PlatformSection() { return <SectionReveal className="principle section-wrap section-surface" id="platform"><div className="principle-layout"><ScrollHighlight as="h2" text="Learning delivery is one part of running an institution." splitBy="words" dimColor="#496069" highlightColor="#102d39" scrollStart="top bottom" scrollEnd="bottom center" wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }} font={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2.4rem, 4.5vw, 4.65rem)", fontWeight: 650, letterSpacing: "-0.04em", lineHeight: 1.02, textAlign: "left" }} /><div className="principle-copy"><p>AIMS connects application review, course allocation, internal marks, attendance, academic reports, and institution-wide communication.</p><Link className="text-link" href="/aims">View AIMS features <ArrowUpRight /></Link></div></div><ol className="workflow-list"><li><span>Admissions</span><p>Review applications and allocate students through a defined process.</p></li><li><span>Teaching</span><p>Connect Moodle course activity with academic records.</p></li><li><span>Reporting</span><p>Use attendance, outcomes, and reports to support academic decisions.</p></li></ol></SectionReveal>; }
export function EvidenceSection() { return <SectionReveal className="evidence section-wrap section-surface"><div className="evidence-heading"><ScrollHighlight as="h2" text="Manage the work that shapes each academic term." splitBy="words" dimColor="#496069" highlightColor="#102d39" scrollStart="top bottom" scrollEnd="bottom center" wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }} font={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)", fontWeight: 650, letterSpacing: "-0.04em", lineHeight: 1.02, textAlign: "left", maxWidth: "12ch" }} /></div><div className="evidence-list"><article><span>Admission management</span><div><h3>Review applications and keep applicant data in one workflow.</h3><p>Use multi-level approvals, student data cards, and transfer-certificate allocation.</p></div></article><article><span>OBE and reporting</span><div><h3>Prepare academic evidence from the records your teams maintain.</h3><p>Map outcomes, calculate attainment, and prepare NAAC-related reporting workflows.</p></div></article><article><span>Attendance and communication</span><div><h3>Record attendance and notify the people who need to act.</h3><p>Capture attendance on mobile and send individual reminders or notifications.</p></div></article></div></SectionReveal>; }
export function ClosingSection({
  title = "Discuss the system your institution needs.",
  description = "Tell us which academic workflows you want to improve. We’ll help define the right AIMS scope.",
  action = "Book a demo",
  titleMaxWidth = "11ch",
}: {
  title?: string;
  description?: string;
  action?: string;
  titleMaxWidth?: string;
} = {}) {
  return (
    <SectionReveal className="close section-wrap section-surface">
      <div>
        <ScrollHighlight
          as="h2"
          text={title}
          splitBy="words"
          dimColor="#fff0d9"
          highlightColor="#fff9ed"
          scrollStart="top bottom"
          scrollEnd="bottom center"
          wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }}
          font={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.4rem, 4.5vw, 4.65rem)",
            fontWeight: 650,
            letterSpacing: "-0.04em",
            lineHeight: 1.02,
            textAlign: "left",
            maxWidth: titleMaxWidth,
          }}
        />
      </div>
      <div className="close-action">
        <p>{description}</p>
        <ArrowFillButton variant="light" href="/contact" btnText={action} />
      </div>
    </SectionReveal>
  );
}
