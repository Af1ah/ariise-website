import type { Metadata } from "next";
import { LegalPage, privacySections } from "@/components/legal-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ARiiSE handles Client, learner, teacher, and institutional data—and our commitment not to sell or share it for advertising or independent business purposes.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: { type: "website", locale: "en_IN", siteName: "ARiiSE", title: "Privacy Policy | ARiiSE", description: "How ARiiSE handles institutional and learner data.", url: "/privacy" },
  twitter: { card: "summary", title: "Privacy Policy | ARiiSE", description: "How ARiiSE handles institutional and learner data." },
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" introduction="How we handle Client, learner, teacher, and institutional data while providing ARiiSE services." sections={privacySections} />;
}
