import { faqJsonLd, ServicesPage, serviceFaqs } from "@/components/platform-pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moodle LMS and AIMS implementation services",
  description: "ARiiSE provides Moodle LMS implementation, AIMS configuration, branding, migration, integrations, deployment, maintenance, backups, upgrades, and support for educational institutions.",
  keywords: ["Moodle implementation services", "Moodle LMS development", "LMS support for colleges", "education ERP implementation", "Moodle hosting and support"],
  alternates: { canonical: "/services" },
  openGraph: { type: "website", locale: "en_IN", siteName: "ARiiSE", title: "Moodle LMS and AIMS implementation services", description: "Plan, configure, deploy, maintain, and support a learning and academic operations platform.", url: "/services" },
  twitter: { card: "summary", title: "Moodle LMS and AIMS implementation services", description: "Plan, configure, deploy, maintain, and support a learning and academic operations platform." },
};

export default function Services() {
  return <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(serviceFaqs) }} /><ServicesPage /></main>;
}
