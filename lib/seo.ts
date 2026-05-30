import type { Metadata } from "next";
import { site, siteImages } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const productionOrigin = "https://messncare.com";

export function canonicalUrl(path = "/") {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${productionOrigin}${normalizedPath}`;
}

function absoluteAssetUrl(path: string) {
  return `${productionOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = canonicalUrl(path);
  const imageUrl = absoluteAssetUrl(siteImages.heroStaff);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [imageUrl]
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: productionOrigin,
  logo: absoluteAssetUrl(siteImages.logo),
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.supportEmail,
      telephone: site.phone,
      contactType: "customer support",
      areaServed: "IN"
    }
  ]
};

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.name,
  operatingSystem: "Android",
  applicationCategory: "LifestyleApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR"
  },
  url: productionOrigin,
  downloadUrl: site.googlePlayUrl
};
