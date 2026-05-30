import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../../components/ButtonLink";
import { PageHero } from "../../components/PageHero";
import { SiteIcon } from "../../components/SiteIcon";
import { pageMetadata } from "../../lib/seo";
import { findService, serviceCategories } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Mess N Care cleaning, repair, maintenance, and home-help services available through the mobile app.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Home services you can discover in one simple app."
        subtitle="The website explains available service categories. Download the Mess N Care mobile app to check availability, pricing, slots, and booking options."
      />
      <section className="section-pad bg-brand-paper">
        <div className="container-pad space-y-8">
          {serviceCategories.map(({ title, description, items, icon }) => (
            <div key={title} className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-brand-mint text-brand-green">
                    <SiteIcon name={icon} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-brand-ink">{title}</h2>
                  <p className="mt-3 leading-7 text-brand-ink/70">{description}</p>
                </div>
                <ButtonLink href="/#download">Download app to book</ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <div key={item} className="flex items-center justify-between gap-3 rounded-md bg-brand-paper p-4 font-bold text-brand-ink">
                    <span className="flex items-center gap-3">
                      <SiteIcon
                        name={findService(item).icon}
                        className="shrink-0 text-brand-green"
                        size={22}
                        strokeWidth={1.9}
                      />
                      {item}
                    </span>
                    <ArrowRight className="shrink-0 text-brand-orange" size={18} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
