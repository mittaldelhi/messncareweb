import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";
import { contactCards, contactReasons } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Mess N Care for customer support, professional onboarding, app issues, account deletion help, or business inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Need help with Mess N Care?"
        subtitle="Send a support request, professional joining inquiry, business message, or account deletion help request."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
              <label className="grid gap-2 text-sm font-bold text-brand-ink">
                Reason
                <select name="reason" className="focus-ring min-h-12 rounded-md border border-brand-green/15 bg-white px-3 text-brand-ink">
                  {contactReasons.map((reason) => (
                    <option key={reason}>{reason}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
              Message
              <textarea name="message" rows={6} className="focus-ring rounded-md border border-brand-green/15 px-3 py-3 text-brand-ink" />
            </label>
            <button type="submit" className="focus-ring mt-6 min-h-12 rounded-md bg-brand-green px-6 text-sm font-bold text-white">
              Submit request
            </button>
          </form>
          <div className="space-y-4">
            {contactCards.map((card, index) => {
              const icons = [Mail, Phone, MapPin, Mail];
              const Icon = icons[index] ?? Mail;
              return (
                <div key={card.label} className="rounded-md border border-brand-green/10 bg-white p-6">
                  <Icon className="text-brand-green" />
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-green">{card.label}</p>
                  <p className="mt-2 text-lg font-extrabold text-brand-ink">{card.value}</p>
                </div>
              );
            })}
            <ButtonLink href="mailto:support@messncare.com" className="w-full">
              Email Contact Support
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-brand-ink">
      {label}
      <input name={name} type={type} className="focus-ring min-h-12 rounded-md border border-brand-green/15 px-3 text-brand-ink" />
    </label>
  );
}
