import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { SiteIcon } from "../../components/SiteIcon";
import { pageMetadata } from "../../lib/seo";
import { site, supportTopics } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Support / Help",
  description:
    "Get Mess N Care support for app download help, bookings, payments, cancellations, professional support, and account deletion help.",
  path: "/support"
});

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="How can we help?"
        subtitle="Find help topics for the Mess N Care mobile app, service bookings, payments, cancellations, professional support, and account deletion."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {supportTopics.map((topic) => (
              <article key={topic} className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-mint text-brand-green">
                  <SiteIcon name="headphones" size={22} />
                </div>
                <h2 className="mt-5 text-xl font-extrabold text-brand-ink">{topic}</h2>
                <p className="mt-3 text-sm leading-6 text-brand-ink/70">
                  Contact support with your registered phone number and any
                  booking or account details available in the mobile app.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-md bg-brand-green p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Need direct support?</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Email {site.supportEmail} or call/WhatsApp {site.phone}. Support
              hours: {site.supportHours}.
            </p>
            <ButtonLink href="/contact" variant="light" className="mt-6">
              Contact Support
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
