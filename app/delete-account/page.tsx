import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Delete Account",
  description:
    "Request deletion of your Mess N Care account and associated personal data.",
  path: "/delete-account"
});

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Delete Account"
        title="Request deletion of your Mess N Care account."
        subtitle="Users can request deletion of their Mess N Care account and associated personal data."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Info
              title="Data deleted"
              items={[
                "Name",
                "Phone number",
                "Email address",
                "Saved addresses",
                "Profile information",
                "App account details"
              ]}
            />
            <Info
              title="Data that may be retained"
              items={[
                "Payment records",
                "Booking invoices",
                "Support tickets",
                "Fraud prevention logs",
                "Records required by law"
              ]}
            />
            <div className="rounded-md border border-brand-orange/30 bg-white p-6">
              <h2 className="text-xl font-extrabold text-brand-ink">Retention</h2>
              <p className="mt-3 leading-7 text-brand-ink/72">
                Some transaction, legal, dispute, or fraud-prevention records
                may be retained for up to 90 days or as required by applicable law.
              </p>
            </div>
          </div>
          <div className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">
              How to request deletion
            </h2>
            <p className="mt-4 leading-7 text-brand-ink/72">
              Email Mess N Care support with your full name, registered phone
              number, registered email if available, and the request subject
              "Delete My Account".
            </p>
            <a
              href="mailto:support@messncare.com?subject=Delete%20My%20Account"
              className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-green px-6 text-sm font-bold text-white"
            >
              Email deletion request
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-md border border-brand-green/10 bg-white p-6">
      <h2 className="text-xl font-extrabold text-brand-ink">{title}</h2>
      <ul className="mt-4 grid gap-2 text-brand-ink/72">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </article>
  );
}
