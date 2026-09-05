import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({ src: "./fonts/HelveticaNeue-Bold.otf", variable: "--font-helvetica-neue", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ariiseglobal.com"),
  title: { default: "ARiiSE | Institutional LMS & Management Systems", template: "%s | ARiiSE" },
  description: "ARiiSE helps colleges and academies connect learning delivery with admissions, academic operations, attendance, reporting, and institutional management.",
  applicationName: "ARiiSE",
  authors: [{ name: "ARiiSE", url: "https://ariiseglobal.com" }],
  creator: "ARiiSE",
  publisher: "ARiiSE",
  category: "Education technology",
  keywords: ["institutional management system", "college LMS", "Moodle LMS", "education ERP", "AIMS"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { type: "website", locale: "en_IN", siteName: "ARiiSE", title: "ARiiSE | Institutional LMS & Management Systems", description: "AIMS connects Moodle-based learning with the academic workflows institutions manage every day." },
  twitter: { card: "summary", title: "ARiiSE | Institutional LMS & Management Systems", description: "AIMS connects Moodle-based learning with the academic workflows institutions manage every day." },
};

export const viewport: Viewport = { themeColor: "#f1efe8", colorScheme: "light" };

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ariiseglobal.com/#organization",
      name: "ARiiSE",
      url: "https://ariiseglobal.com",
      email: "info@ariiseglobal.com",
      description: "ARiiSE provides institutional learning and academic management systems for colleges and academies.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Varikoly Tower, UK Sankunni Rd",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        postalCode: "673001",
        addressCountry: "IN",
      },
      sameAs: ["https://www.linkedin.com/company/ariise-global"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ariiseglobal.com/#website",
      name: "ARiiSE",
      url: "https://ariiseglobal.com",
      publisher: { "@id": "https://ariiseglobal.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${helveticaNeue.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} /><div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></div></body></html>;
}
