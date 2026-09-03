import { AimsPage, faqJsonLd, platformFaqs } from "@/components/platform-pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIMS features for colleges and academies",
  description: "Explore ARiiSE AIMS modules for admissions, course allocation, internal marks, OBE reporting, timetables, attendance, AISHE reporting, and Moodle learning delivery.",
  keywords: ["AIMS features", "college management system", "Moodle LMS for colleges", "admission management system", "OBE reporting", "attendance management system"],
  alternates: { canonical: "/aims" },
  openGraph: { title: "AIMS features for colleges and academies", description: "Connect Moodle learning with admissions, academic records, attendance, reporting, and communication.", url: "/aims" },
};

export default function Aims() {
  return <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(platformFaqs) }} /><AimsPage /></main>;
}
