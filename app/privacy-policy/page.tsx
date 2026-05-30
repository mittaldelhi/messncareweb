import { LegalPage } from "../../components/LegalPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Mess N Care Privacy Policy covering information collection, use, retention, account deletion, and support contact.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how Mess N Care handles information connected with our website, mobile app, services, customers, and service professionals."
      sections={[
        ["Information we collect", "We may collect name, phone number, email address, saved addresses, profile details, app account details, service requests, support messages, and device or usage information needed to run the app."],
        ["How we use information", "We use information to create accounts, show service availability, manage app bookings, support customers and professionals, improve service quality, prevent misuse, and comply with applicable legal requirements."],
        ["Location data", "Location information may be used to show service availability, confirm addresses, support booking fulfillment, and improve local operations. Website visitors do not need to share location data to read this website."],
        ["Payment data", "Payment processing may be handled by third-party payment providers. Mess N Care may receive payment status, transaction references, invoices, or settlement records needed for bookings, disputes, refunds, and compliance."],
        ["Service professional data", "For professionals, we may collect identity, contact, category, work experience, location, document, payout, rating, and service performance information for onboarding and platform operations."],
        ["Third-party services", "We may use service providers for hosting, analytics, payments, communication, maps, verification, and app infrastructure. These providers process information only for relevant business and platform purposes."],
        ["Data sharing", "We may share relevant booking and contact information between customers, professionals, support teams, payment providers, logistics or verification partners, and legal authorities when required."],
        ["Data retention", "We retain personal data only as long as needed for app operations, support, legal, transaction, dispute, fraud-prevention, and compliance purposes."],
        ["Account deletion", "Users can request deletion of their Mess N Care account and associated personal data from the Account Deletion page. Some transaction, legal, dispute, or fraud-prevention records may be retained for up to 90 days or as required by applicable law."],
        ["Contact", "For privacy questions, contact Mess N Care support using the Contact Us page or the support email listed in the website footer."]
      ]}
    />
  );
}
