import { CheckCircle2 } from "lucide-react";
import { PageHero } from "../../components/PageHero";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Mess N Care, our mission, vision, values, and brand story as a trusted home-services platform.",
  path: "/about"
});

export default function AboutPage() {
  const values = ["Trust", "Cleanliness", "Reliability", "Respect", "Fair opportunity", "Service quality"];

  return (
    <>
      <PageHero
        eyebrow="About Mess N Care"
        title="Building a trusted home-services brand for Indian homes."
        subtitle="Mess N Care connects local service professionals with households through a simple mobile-first booking experience."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-2">
          <InfoCard title="Who we are">
            Mess N Care is a home-services company focused on cleaning, repair,
            maintenance, and home-help services. Our website helps customers
            learn about the brand and download the app.
          </InfoCard>
          <InfoCard title="Brand story">
            We are building Mess N Care for families who want dependable local
            home care without confusing calls, unclear pricing, or scattered
            follow-ups. The app is the center of every booking journey.
          </InfoCard>
          <InfoCard title="Mission">
            To make trusted home services more accessible, transparent, and
            convenient for every household.
          </InfoCard>
          <InfoCard title="Vision">
            To become a trusted home-services brand across Indian cities by
            combining local professionals with simple digital booking.
          </InfoCard>
        </div>
      </section>
      <section className="section-pad bg-brand-paper">
        <div className="container-pad">
          <h2 className="text-3xl font-extrabold text-brand-ink">Values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-md bg-white p-5 font-bold text-brand-ink">
                <CheckCircle2 className="text-brand-green" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-md border border-brand-green/10 bg-brand-paper p-7">
      <h2 className="text-2xl font-extrabold text-brand-ink">{title}</h2>
      <p className="mt-4 leading-7 text-brand-ink/72">{children}</p>
    </article>
  );
}
