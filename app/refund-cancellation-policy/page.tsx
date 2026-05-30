import { LegalPage } from "../../components/LegalPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Read the Mess N Care Refund & Cancellation Policy for cancellation timing, failed payments, service disputes, refund review, and support contact.",
  path: "/refund-cancellation-policy"
});

export default function RefundCancellationPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="This policy explains how cancellations, failed payments, service issues, and refund reviews are handled for bookings made through the Mess N Care mobile app."
      sections={[
        ["Cancellation before assignment", "If a booking is cancelled before a service professional is assigned, any eligible refund or release of payment hold will be processed according to the payment method and app policy shown at the time of booking."],
        ["Cancellation after assignment", "If a booking is cancelled after a professional is assigned or near the scheduled service time, cancellation charges may apply depending on the assignment status, travel effort, time slot, and operational cost."],
        ["Failed payment refund", "If payment is debited but booking confirmation fails, Mess N Care or the payment provider will review the transaction status. Eligible failed-payment refunds are usually returned to the original payment method."],
        ["Service issue dispute", "If there is a genuine service issue, customers should contact support with booking details, issue description, and any useful photos or records. Mess N Care may review the matter before offering a resolution, refund, partial refund, repeat visit, or other support response."],
        ["Refund timeline", "Approved refunds are usually initiated within a reasonable support review period. The final credit timeline may depend on payment providers, banks, wallets, UPI systems, card networks, holidays, and transaction status."],
        ["Contact support", "For cancellation or refund help, contact Mess N Care support through the mobile app, Support page, Contact page, or support email listed in the footer."]
      ]}
    />
  );
}
