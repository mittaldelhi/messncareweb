import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { SiteIcon } from "../../components/SiteIcon";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "For Professionals",
  description:
    "Join Mess N Care as a service professional for cleaning, repair, maintenance, cooking, laundry, and other home-service work.",
  path: "/for-professionals"
});

const benefits = [
  "Receive service requests",
  "Build your professional profile",
  "Manage jobs from the app",
  "Track earnings",
  "Get customer ratings",
  "Grow with a trusted local brand"
];

const categories = [
  "Cleaners",
  "Electricians",
  "Plumbers",
  "AC technicians",
  "Appliance repair professionals",
  "Cooks",
  "Laundry service providers",
  "Other home-service workers"
];

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Professionals"
        title="Grow your work with Mess N Care."
        subtitle="Join as a service professional and receive digital bookings through the Mess N Care platform."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid gap-8 lg:grid-cols-2">
          <article className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">Why join Mess N Care</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-md bg-brand-mint p-4 text-sm font-semibold text-brand-ink">
                  <SiteIcon name="userCheck" className="mt-0.5 text-brand-green" size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">Who can apply</h2>
            <p className="mt-3 leading-7 text-brand-ink/72">
              Professionals with relevant skills, service experience, valid
              contact details, and willingness to follow Mess N Care service
              standards can apply.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-semibold text-brand-ink/75">
                  {category}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">Documents required</h2>
            <p className="mt-3 leading-7 text-brand-ink/72">
              Applicants may be asked for identity proof, phone number, address
              details, work category, experience details, profile photo,
              payment/payout details, and any category-specific documents.
            </p>
          </article>
          <article className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-brand-ink">How onboarding works</h2>
            <p className="mt-3 leading-7 text-brand-ink/72">
              Submit your interest, share basic details, complete verification
              and category review, then start receiving eligible service
              requests through the Mess N Care platform when onboarding is approved.
            </p>
            <ButtonLink href="/contact" className="mt-6">
              Apply as Professional
            </ButtonLink>
          </article>
        </div>
      </section>
    </>
  );
}
