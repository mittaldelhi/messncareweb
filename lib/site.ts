import type { SiteIconName } from "../components/SiteIcon";

/*
 * MAIN WEBSITE CONTENT FILE
 * Update app links, contact details, image paths, service areas, services, and
 * support/legal placeholders here before publishing.
 */
export const site = {
  name: "Mess N Care",
  domain: "messncare.com",
  url: "https://messncare.com",
  supportEmail: "support@messncare.com",
  phone: "+91 8824106060",
  whatsapp: "+91 8824106060",
  supportHours: "Monday to Saturday, 9:00 AM - 7:00 PM",
  serviceAreas: ["Bhiwadi"],
  googlePlayUrl: "#",
  appStoreUrl: "#"
};

export const siteImages = {
  logo: "/images/logo.png",
  logoWordmark: "/images/logo-wordmark.png",
  logoIcon: "/images/logo-icon.png",
  heroStaff: "/images/hero-staff.jfif",
  appScreens: [
    "/images/app-screen1.jpg",
    "/images/app-screen2.1.jpg",
    "/images/app-screen3.jpg"
  ],
  googlePlayBadge: "/images/google-play-badge.svg",
  appStoreBadge: "/images/app-store-badge.svg"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const trustBadges = [
  { label: "Verified Professionals", icon: "userCheck" },
  { label: "Transparent Pricing", icon: "indianRupee" },
  { label: "Easy App Booking", icon: "calendarCheck" },
  { label: "Local Support", icon: "headphones" },
  { label: "Secure Payments", icon: "creditCard" }
] satisfies { label: string; icon: SiteIconName }[];

export type Service = {
  name: string;
  icon: SiteIconName;
};

export const services: Service[] = [
  { name: "Home Cleaning", icon: "home" },
  { name: "Bathroom Cleaning", icon: "bath" },
  { name: "Kitchen Cleaning", icon: "chefHat" },
  { name: "AC Service", icon: "airVent" },
  { name: "Plumbing", icon: "wrench" },
  { name: "Electrical Repair", icon: "plug" },
  { name: "Water Tank Cleaning", icon: "droplets" }
];

export const serviceNames = services.map((service) => service.name);

export const serviceByName = services.reduce<Record<string, Service>>(
  (acc, service) => {
    acc[normalizeServiceName(service.name)] = service;
    return acc;
  },
  {}
);

export function findService(name: string): Service {
  return serviceByName[normalizeServiceName(name)] ?? {
    name,
    icon: "sparkles"
  };
}

function normalizeServiceName(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "");
}

export const serviceCategories = [
  {
    title: "Home Cleaning",
    description:
      "Regular and deep cleaning support for tidy, comfortable homes.",
    items: ["Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Water Tank Cleaning"],
    icon: "home"
  },
  {
    title: "Repair & Maintenance",
    description:
      "Skilled help for essential home repairs and maintenance needs.",
    items: ["AC Service", "Plumbing", "Electrical Repair"],
    icon: "wrench"
  }
] satisfies {
  title: string;
  description: string;
  items: string[];
  icon: SiteIconName;
}[];

export const faqItems = [
  {
    question: "What is Mess N Care?",
    answer:
      "Mess N Care is a home-services platform for cleaning, repair, and home-help services. Bookings are currently available only through the Mess N Care mobile app."
  },
  {
    question: "Can I book services from the website?",
    answer:
      "No. The website is for brand information, service discovery, app download, support, and legal information. All service booking happens inside the mobile app."
  },
  {
    question: "How do I download the Mess N Care app?",
    answer:
      "Use the Google Play badge on this website to open the app listing when live. The iOS app is marked as coming soon until it is available."
  },
  {
    question: "Which services are available?",
    answer:
      "Mess N Care covers cleaning, repair, maintenance, and home-help services. Availability can vary by city and should be checked inside the mobile app."
  },
  {
    question: "Are Mess N Care professionals verified?",
    answer:
      "Mess N Care is built around verified service professionals and onboarding checks before professionals receive service requests."
  },
  {
    question: "Is Mess N Care available in my city?",
    answer:
      "Mess N Care is launching in selected service areas including Bhiwadi, Delhi NCR, Gurgaon, Jaipur, and Mumbai, with more cities planned."
  },
  {
    question: "Can I book recurring services?",
    answer:
      "Recurring service options, where available, should be managed inside the Mess N Care mobile app."
  },
  {
    question: "How do payments work?",
    answer:
      "Payment options and booking charges are shown in the mobile app before confirmation. The website does not collect booking payments."
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Cancellation options are managed inside the app and may depend on assignment status, service timing, and applicable policy."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support from the app or through the website contact and support pages."
  },
  {
    question: "How do I delete my account?",
    answer:
      "Visit the Delete Account page to submit a deletion request for your Mess N Care account and associated personal data."
  },
  {
    question: "Is the iOS app available?",
    answer:
      "The App Store badge is shown as coming soon until the iOS version is live."
  }
];

export const contactReasons = [
  "Customer support",
  "Professional joining",
  "Business inquiry",
  "App issue",
  "Account deletion help",
  "Other"
];

export const supportTopics = [
  "App download help",
  "Booking help",
  "Payment help",
  "Cancellation help",
  "Professional support",
  "Account deletion help"
];

export const areaChips = [...site.serviceAreas, "More cities coming soon"];

export const contactCards = [
  { label: "Support email", value: site.supportEmail },
  { label: "WhatsApp / phone", value: site.phone },
  { label: "Service areas", value: site.serviceAreas.join(", ") },
  { label: "Support hours", value: site.supportHours }
];

export const whyCards = [
  "Essential home services",
  "Verified service partners",
  "Easy app booking",
  "Support when you need help"
];
