import { LegalPage } from "../../components/LegalPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Mess N Care Terms & Conditions for website use, app use, service availability, bookings, payments, cancellations, and platform responsibilities.",
  path: "/terms-and-conditions"
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These Terms & Conditions explain the basic rules for using the Mess N Care website, mobile app, and home-services platform."
      sections={[
        ["Use of website and app", "The Mess N Care website provides brand information, service details, app download links, support information, and legal pages. Service discovery, booking, payment, booking management, cancellation, and account features are handled through the Mess N Care mobile app."],
        ["Service availability", "Services are available only in selected service areas and may vary by city, professional availability, service category, date, time, and operational conditions. Mess N Care may add, pause, or remove services or areas as needed."],
        ["Customer responsibilities", "Customers must provide accurate account details, phone number, address, service instructions, access information, and safe working conditions for professionals. Customers must not misuse the app, create false bookings, harass professionals, or request illegal or unsafe work."],
        ["Professional responsibilities", "Service professionals are expected to provide accurate onboarding details, follow service standards, arrive within accepted time windows where possible, treat customers and homes respectfully, and comply with applicable laws and safety requirements."],
        ["Pricing and payments", "Prices, fees, taxes, discounts, and payment methods are shown in the mobile app before or during booking. The website does not collect service booking payments. Payment records may be retained for transaction, dispute, tax, legal, and fraud-prevention purposes."],
        ["Booking and cancellation", "Bookings are created and managed only through the mobile app. Cancellation availability, cancellation charges, rescheduling, assignment status, and service timing may affect whether a booking can be cancelled or refunded."],
        ["Refunds", "Refund eligibility depends on the booking status, payment status, cancellation time, service issue, support review, and applicable policy. Refund timelines may depend on payment providers and banks."],
        ["Account suspension", "Mess N Care may restrict, suspend, or terminate access for misuse, fraud, repeated false bookings, abusive behavior, unsafe conduct, policy violations, or legal/compliance reasons."],
        ["Limitation of liability", "Mess N Care works to provide a trusted platform, but service outcomes may depend on customer instructions, property condition, professional availability, third-party providers, network availability, and other operational factors. Liability is limited to the extent allowed by applicable law."],
        ["Contact", "For questions about these Terms & Conditions, contact Mess N Care support using the Contact Us page or the support details shown in the website footer."]
      ]}
    />
  );
}
