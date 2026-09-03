import {
  ClosingSection,
  EvidenceSection,
  HeroSection,
  PlatformSection,
} from "@/components/home-sections";
import type { Metadata } from "next";

const clientInstitutions = [
  { name: "JDT Islam College of Arts & Science, Kozhikode", url: "https://www.jdticas.in/", description: "University of Calicut-affiliated institution in Vellimadukunnu, Kozhikode with a dedicated learning environment." },
  { name: "Farook College (Autonomous)", url: "https://farookcollege.ac.in/", description: "Higher education institution in Kozhikode with a dedicated learning management system." },
  { name: "Centre for Information and Guidance India (CIGI)", url: "https://cigi.org/", description: "Kozhikode-based not-for-profit organisation for education, career guidance, and social empowerment." },
  { name: "Government Arts & Science College, Tanur", url: "https://gctanur.ac.in/", description: "Government higher education institution in Tanur, Malappuram." },
  { name: "Crevitae", url: "https://www.crevitae.com/", description: "Education and career-guidance organisation with a digital learning platform." },
  { name: "Government Arts & Science College, Kozhikode", url: "https://gasckkd.vlms.net/", description: "Government higher education institution in Meenchanda, Kozhikode with a dedicated learning portal." },
  { name: "Alphonsa Arts & Science College, Sulthan Bathery", url: "https://www.alphonsacollege.ac.in/", description: "Higher education institution in Sulthan Bathery with a dedicated LMS." },
  { name: "Mary Matha Arts & Science College, Mananthavady", url: "https://marymathacollege.ac.in/", description: "Higher education institution in Mananthavady, Wayanad with a dedicated LMS." },
  { name: "Al Jamiathul Kauzariyya", url: "https://kauzariyya.com/", description: "Islamic educational institution in Edathala, Aluva, Kerala." },
  { name: "The Cochin College", url: "https://thecochincollege.edu.in/", description: "Higher education institution in Kochi with the EdSpace learning platform." },
  { name: "Malabar College of Arts & Science, Koyilandy", url: "https://mcasclt.ac.in/", description: "Higher education institution in Koyilandy with a dedicated LMS." },
  { name: "Pallavan Learning Systems", url: "https://www.pallavanlearningsystems.com/", description: "Educational research organisation focused on learning how to learn." },
  { name: "Providence Women's College, Calicut", url: "https://www.providencecollegecalicut.ac.in/", description: "Autonomous women's higher education institution in Malaparamba, Calicut." },
];

export const metadata: Metadata = {
  title: "AIMS | Institutional LMS & Management System",
  description: "ARiiSE AIMS connects Moodle-based learning with admissions, academics, attendance, reporting, and institutional operations for colleges and academies.",
  keywords: ["AIMS", "institutional LMS", "college management system", "Moodle-based learning", "education ERP", "academic operations"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "ARiiSE AIMS | Institutional LMS & Management System",
    description: "Connect learning, admissions, academics, attendance, and reporting in one institutional system.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "ARiiSE AIMS | Institutional LMS & Management System",
    description: "An institutional system for learning delivery and academic operations.",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ARiiSE AIMS | Institutional LMS & Management System",
            description: "ARiiSE AIMS connects learning delivery with admissions, academics, attendance, reporting, and institutional operations.",
            about: clientInstitutions.map((institution) => ({ "@type": "Organization", ...institution })),
          }),
        }}
      />
      <HeroSection />
      <PlatformSection />
      <EvidenceSection />
      <ClosingSection />
    </main>
  );
  
}
