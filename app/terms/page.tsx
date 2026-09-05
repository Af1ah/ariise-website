import type { Metadata } from "next";
import { LegalPage, termsSections } from "@/components/legal-pages";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for ARiiSE platform, hosting, implementation, support, backups, upgrades, and related services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  openGraph: { type: "website", locale: "en_IN", siteName: "ARiiSE", title: "Terms and Conditions | ARiiSE", description: "The terms that govern ARiiSE services.", url: "/terms" },
  twitter: { card: "summary", title: "Terms and Conditions | ARiiSE", description: "The terms that govern ARiiSE services." },
};

export default function TermsPage() {
  return <LegalPage title="Terms and Conditions" introduction="These Terms govern ARiiSE platform access, hosting, implementation, support, maintenance, and related services supplied to institutional clients." sections={termsSections} />;
}
