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
  keywords: ["institutional management system", "college LMS", "Moodle LMS", "education ERP", "AIMS"],
  openGraph: { type: "website", locale: "en_IN", siteName: "ARiiSE", title: "ARiiSE | Institutional LMS & Management Systems", description: "AIMS connects Moodle-based learning with the academic workflows institutions manage every day." },
};

export const viewport: Viewport = { themeColor: "#f1efe8", colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${helveticaNeue.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></div></body></html>;
}
