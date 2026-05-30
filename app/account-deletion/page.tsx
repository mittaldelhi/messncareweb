import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";
import { site } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Account Deletion",
  description:
    "Request deletion of your Mess N Care account and associated personal data for Play Store and app compliance.",
  path: "/account-deletion"
});

export default function AccountDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Account Deletion"
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
              Account deletion request form
            </h2>
            <p className="mt-4 leading-7 text-brand-ink/72">
              To request deletion, email support with your full name, registered
              phone number, registered email if available, and optional reason.
              Use the subject "Delete My Account".
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Full name",
                "Registered phone number",
                "Registered email (optional)",
                "Reason (optional)"
              ].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-semibold text-brand-ink">
                  {label}
                  <input
                    className="min-h-12 rounded-md border border-brand-green/15 px-4 outline-none focus:border-brand-green"
                    placeholder={label}
                  />
                </label>
              ))}
              <a
                href={`mailto:${site.supportEmail}?subject=Delete%20My%20Account`}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-brand-green px-6 text-sm font-bold text-white"
              >
                Submit deletion request
              </a>
            </div>
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
