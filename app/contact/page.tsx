import { ContactPage } from "@/components/contact-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact ARiiSE at Varikoly Tower, UK Sankunni Rd, Kozhikode, Kerala 673001. Call +91 8147722711 or submit an enquiry to discuss AIMS modules and Moodle LMS implementation.",
  keywords: [
    "Contact ARiiSE",
    "ARiiSE Kozhikode",
    "Varikoly Tower Calicut",
    "AIMS demo request",
    "Moodle LMS support Kerala",
    "College ERP enquiry",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ARiiSE",
    title: "Get in Touch | ARiiSE Institutional LMS & Management Systems",
    description:
      "Visit our office at Varikoly Tower, UK Sankunni Rd, Kozhikode, Kerala, or call +91 8147722711 to discuss your institution's academic platform.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Get in Touch | ARiiSE Institutional LMS & Management Systems",
    description: "Contact ARiiSE to discuss your institution's learning and academic operations platform.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "ARiiSE",
  url: "https://ariiseglobal.com",
  telephone: "+91 8147722711",
  email: "info@ariiseglobal.com",
  sameAs: ["https://www.linkedin.com/company/ariise-global"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Varikoly Tower, UK Sankunni Rd",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.2615612,
    longitude: 75.7819883,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function Contact() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPage />
    </main>
  );
}
