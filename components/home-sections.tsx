import { ArrowUpRight } from "@/components/icons";
import ScrollHighlight from "@/components/originkit/ui/scroll-text-highlight-variant-4";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CinematicLogoCloud, type LogoCloudClient } from "@/components/ui/cinematic-logo-cloud";
import heroDashboard from "@/public/assets/hero_dash.webp";
import Image from "next/image";
import Link from "next/link";

const approvedClients: LogoCloudClient[] = [];

export function HeroSection() {
  return (
    <>
      <section className="hero-scroll-section">
        <div className="hero-light" aria-hidden="true" />
        <ContainerScroll
        titleComponent={
          <div className="hero-scroll-copy">
            <p className="hero-strap">Institutional operations, connected</p>
            <h1>Every workflow. One system.</h1>
            <p className="hero-summary">
              Connect learning, admissions, academics, attendance, and reporting so every team works from the same clear view.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Request an AIMS Demo <ArrowUpRight /></Link>
              <Link className="text-link" href="/aims">See AIMS capabilities <ArrowUpRight /></Link>
            </div>
          </div>
        }
        >
          <Image
            src={heroDashboard}
            alt="AIMS dashboard showing courses, attendance, quick access, and course overview"
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 1rem), (max-width: 1280px) calc(100vw - 10rem), 1024px"
            className="object-cover object-top"
          />
        </ContainerScroll>
      </section>
      <CinematicLogoCloud clients={approvedClients} />
    </>
  );
}

export function PlatformSection() { return <section className="principle section-wrap" id="platform"><p className="section-label">Built for the work between the classes.</p><div className="principle-layout"><ScrollHighlight as="h2" text="Learning delivery is only one part of an institution." splitBy="words" dimColor="rgba(16, 45, 57, 0.2)" highlightColor="#102d39" scrollStart="top bottom" scrollEnd="bottom center" wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }} font={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2.4rem, 4.5vw, 4.65rem)", fontWeight: 650, letterSpacing: "-0.04em", lineHeight: 1.02, textAlign: "left" }} /><div className="principle-copy"><p>AIMS brings the surrounding work into the same system: application review, course allocation, internal marks, attendance, academic reporting, and timely communication.</p><Link className="text-link" href="/aims">See how AIMS works <ArrowUpRight /></Link></div></div><ol className="workflow-list"><li><span>Admissions</span><p>Move applications through a clear institutional workflow.</p></li><li><span>Teaching</span><p>Connect Moodle activities to the academic record.</p></li><li><span>Oversight</span><p>Make attendance, outcomes, and reports easier to act on.</p></li></ol></section>; }
export function EvidenceSection() { return <section className="evidence section-wrap"><div className="evidence-heading"><p className="section-label">AIMS at work</p><ScrollHighlight as="h2" text="Designed around the moments administrators cannot leave to chance." splitBy="words" dimColor="rgba(16, 45, 57, 0.2)" highlightColor="#102d39" scrollStart="top bottom" scrollEnd="bottom center" wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }} font={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)", fontWeight: 650, letterSpacing: "-0.04em", lineHeight: 1.02, textAlign: "left", maxWidth: "12ch" }} /></div><div className="evidence-list"><article><span>Admission Management</span><div><h3>From application to approval, with the right people in the loop.</h3><p>Support structured reviews, student data cards, and transfer-certificate allocation.</p></div></article><article><span>OBE & Academic Reporting</span><div><h3>Turn learning activity into evidence your institution can use.</h3><p>Map outcomes, calculate attainment, and prepare reporting workflows with less manual effort.</p></div></article><article><span>Attendance & Communication</span><div><h3>Keep the academic day visible to the people who need to respond.</h3><p>Record attendance on mobile and support timely individual notifications.</p></div></article></div></section>; }
export function ClosingSection() { return <section className="close section-wrap"><div><p className="section-label">The next academic year starts now.</p><ScrollHighlight as="h2" text="Build an institutional system that can keep pace with your ambition." splitBy="words" dimColor="rgba(255, 249, 237, 0.24)" highlightColor="#fff9ed" scrollStart="top bottom" scrollEnd="bottom center" wrapperStyle={{ paddingTop: 0, paddingBottom: 0 }} font={{ fontFamily: "var(--font-sans)", fontSize: "clamp(2.4rem, 4.5vw, 4.65rem)", fontWeight: 650, letterSpacing: "-0.04em", lineHeight: 1.02, textAlign: "left", maxWidth: "11ch" }} /></div><div className="close-action"><p>Tell us about your institution, workflows, and priorities. We’ll help you identify the right AIMS scope.</p><Link className="button button-light" href="/contact">Start a Conversation <ArrowUpRight /></Link></div></section>; }
