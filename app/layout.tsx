import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { canonicalUrl, mobileAppSchema, organizationSchema } from "../lib/seo";
import { siteImages } from "../lib/site";

const heroImageUrl = canonicalUrl(siteImages.heroStaff);

export const metadata: Metadata = {
  metadataBase: new URL("https://messncare.com"),
  title: {
    default: "Mess N Care | Trusted Home Services at Your Doorstep",
    template: "%s | Mess N Care"
  },
  description:
    "Mess N Care helps you book trusted cleaning, repair, and home care services through our mobile app. Explore services, download the app, and connect with verified professionals.",
  applicationName: "Mess N Care",
  alternates: {
    canonical: canonicalUrl("/")
  },
  openGraph: {
    type: "website",
    url: canonicalUrl("/"),
    siteName: "Mess N Care",
    title: "Mess N Care | Trusted Home Services at Your Doorstep",
    description:
      "Book trusted cleaning, repair, and home care services through the Mess N Care mobile app.",
    images: [{ url: heroImageUrl, width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mess N Care | Trusted Home Services at Your Doorstep",
    description:
      "Explore services, download the app, and connect with verified home-service professionals.",
    images: [heroImageUrl]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <JsonLd data={[organizationSchema, mobileAppSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
