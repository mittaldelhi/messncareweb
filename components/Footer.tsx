import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { navLinks, serviceCategories, site } from "../lib/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Delete Account", href: "/delete-account" }
];

export function Footer() {
  return (
    <footer className="border-t border-brand-green/10 bg-white">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-brand-ink/70">
            Mess N Care helps households discover trusted cleaning, repair, and
            home-help services through a simple mobile app.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-green">
            Bookings are available only through the mobile app.
          </p>
        </div>
        <FooterGroup title="Services">
          {serviceCategories.map((category) => (
            <Link key={category.title} href="/services">
              {category.title}
            </Link>
          ))}
          <Link href="/contact">Contact Support</Link>
        </FooterGroup>
        <FooterGroup title="Company">
          {navLinks
            .filter((link) => !link.href.includes("#"))
            .map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          <Link href="/support">Support / Help</Link>
        </FooterGroup>
        <FooterGroup title="Legal">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <span className="pt-2 text-brand-ink/70">{site.supportEmail}</span>
          <span className="text-brand-ink/70">{site.phone}</span>
        </FooterGroup>
      </div>
      <div className="border-t border-brand-green/10 py-5">
        <div className="container-pad flex flex-col gap-2 text-sm text-brand-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Mess N Care. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h2 className="text-base font-bold text-brand-ink">{title}</h2>
      <div className="flex flex-col gap-2 text-brand-ink/70 [&_a]:transition hover:[&_a]:text-brand-green">
        {children}
      </div>
    </div>
  );
}
