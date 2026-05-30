import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPin,
  QrCode,
  Sparkles,
  Star
} from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { DownloadBadges } from "../components/DownloadBadges";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionHeading } from "../components/SectionHeading";
import { SiteIcon } from "../components/SiteIcon";
import {
  areaChips,
  services,
  siteImages,
  trustBadges,
  whyCards
} from "../lib/site";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-brand-paper">
        <div className="container-pad grid min-w-0 items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-bold text-brand-green shadow-sm">
              <BadgeCheck size={17} />
              Trusted home services at your doorstep
            </div>
            <h1 className="mt-6 max-w-[22rem] text-3xl font-extrabold leading-[1.08] text-brand-ink sm:max-w-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Reliable home services in minutes.
            </h1>
            <p className="mt-6 max-w-[22rem] text-base leading-7 text-brand-ink/72 sm:max-w-2xl sm:text-lg sm:leading-8">
              Mess N Care helps you book cleaning, repair, and home help
              services through our easy-to-use mobile app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#download">Download App</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
            <div className="mt-7">
              <DownloadBadges />
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-brand-ink/76 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Star className="fill-brand-orange text-brand-orange" size={18} />
                Star rating placeholder
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-brand-green" size={18} />
                Trusted by early customers
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-brand-green" size={18} />
                Available in selected service areas
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {areaChips.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-bold text-brand-ink/76"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] min-w-0 max-w-full lg:min-h-[500px]">
            <div className="absolute inset-x-4 bottom-0 top-8 rounded-[32px] bg-brand-mint lg:rounded-[40px]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-orange/14 blur-2xl" />
            <div className="absolute left-0 top-16 h-32 w-32 rounded-full bg-brand-green/16 blur-2xl" />
            <div className="relative mx-auto flex h-[390px] w-full max-w-[430px] items-end justify-center overflow-hidden rounded-[28px] border border-white/70 bg-white/35 shadow-soft sm:h-[480px] lg:h-[520px] lg:max-w-[500px] lg:rounded-[36px]">
              <Image
                src={siteImages.heroStaff}
                alt="Mess N Care staff member in branded green T-shirt"
                width={941}
                height={1672}
                priority
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-7">
        <div className="container-pad">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-[0.12em] text-brand-green">
            Built for trusted home care
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {trustBadges.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-md border border-brand-green/10 bg-brand-paper px-4 py-4 text-sm font-bold text-brand-ink"
              >
                <SiteIcon name={icon} className="text-brand-green" size={20} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <div className="container-pad">
          <SectionHeading
            title="No more stress around home services."
            subtitle="From cleaning to repair, Mess N Care helps you find reliable service professionals through one simple app."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => (
              <div
                key={card}
                className="rounded-md border border-brand-green/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-5 text-brand-green" size={28} />
                <h2 className="text-xl font-extrabold text-brand-ink">{card}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" id="services">
        <div className="container-pad">
          <SectionHeading
            center
            title="Book trusted home services."
            subtitle="Choose from cleaning, repair, and care services available through the Mess N Care app."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 20).map(({ name, icon }) => (
              <a
                key={name}
                href="/services"
                className="group rounded-md border border-brand-green/10 bg-brand-paper p-4 transition hover:-translate-y-1 hover:border-brand-green/25 hover:bg-white hover:shadow-soft"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-white text-brand-green group-hover:bg-brand-mint">
                  <SiteIcon name={icon} size={28} strokeWidth={1.9} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base font-extrabold text-brand-ink">{name}</h2>
                  <ArrowRight className="shrink-0 text-brand-orange transition group-hover:translate-x-1" size={19} />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
                  Available in app
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-ink" id="how-it-works">
        <div className="container-pad">
          <SectionHeading
            light
            center
            title="Simple steps to a cleaner, easier home."
            subtitle="Book and manage services from the Mess N Care app in just a few steps."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Choose your service",
                text: "Browse cleaning, repair, and home-help services from the app.",
                image: siteImages.appScreens[0]
              },
              {
                title: "Select date, time, and address",
                text: "Pick your preferred slot and confirm your service details.",
                image: siteImages.appScreens[1]
              },
              {
                title: "Track, pay, and review",
                text: "Manage your booking, track updates, and rate your experience.",
                image: siteImages.appScreens[2]
              }
            ].map((step, index) => (
              <div key={step.title} className="rounded-md border border-white/10 bg-white/[0.06] p-6">
                <div className="mx-auto mb-7 flex aspect-[9/16] max-w-[230px] items-center justify-center overflow-hidden rounded-[28px] border-8 border-white/12 bg-white">
                  <Image
                    src={step.image}
                    alt={`${step.title} app screen`}
                    width={941}
                    height={1672}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-bold text-brand-orange">Step {index + 1}</p>
                <h2 className="mt-2 text-2xl font-extrabold text-white">{step.title}</h2>
                <p className="mt-3 leading-7 text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mint" id="download">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeading
              title="Get Mess N Care on your phone."
              subtitle="Download the app to book services, manage bookings, track updates, and contact support."
            />
            <div className="mt-7">
              <DownloadBadges />
            </div>
            <div className="mt-7 flex max-w-xl items-start gap-4 rounded-md border border-brand-green/15 bg-white p-5">
              <QrCode className="mt-1 shrink-0 text-brand-green" />
              <div>
                <h2 className="font-extrabold text-brand-ink">QR code placeholder</h2>
                <p className="mt-1 text-sm leading-6 text-brand-ink/70">
                  Replace this with your app store QR code before launch.
                  Bookings are available only through the mobile app.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-[32px] border-8 border-white bg-white shadow-soft">
            <Image
              src={siteImages.appScreens[0]}
              alt="Mess N Care app screenshot placeholder"
              fill
              sizes="(min-width: 1024px) 300px, 80vw"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            center
            title="Built for homes that value trust."
            subtitle="Real customer reviews will appear here after launch."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Designed for transparent service booking",
              "Focused on verified service professionals",
              "Built for Indian homes and local service needs"
            ].map((item) => (
              <div key={item} className="rounded-md border border-brand-green/10 bg-brand-paper p-6">
                <ShieldIcon />
                <h2 className="mt-5 text-xl font-extrabold text-brand-ink">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            title="Ready for easier home care?"
            subtitle="Explore Mess N Care services, download the app, or contact support for help."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Home cleaning support",
              "Repair and maintenance help",
              "Simple mobile app booking",
              "Local customer support",
              "Transparent service information",
              "Built for Indian homes"
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-md bg-white p-4 font-bold text-brand-ink">
                <CheckCircle2 className="text-brand-green" size={20} />
                {benefit}
              </div>
            ))}
            <ButtonLink href="/contact" className="sm:col-span-2">
              Contact Support
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading center title="Questions before you download?" subtitle="Clear answers about the app, services, support, and account requests." />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}

function ShieldIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-mint text-brand-green">
      <BadgeCheck size={25} />
    </div>
  );
}
