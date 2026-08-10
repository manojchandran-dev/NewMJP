import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, InstagramIcon } from "@/components/icons";
import { SITE_URL, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MJP.Tex, kids bottom wear manufacturer in Tiruppur, Tamil Nadu. Call, WhatsApp, or email for retail and wholesale kids inner shorts enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MJP.Tex | Kids Bottom Wear Manufacturer, Tiruppur",
    description: "Call, WhatsApp, or email MJP.Tex for retail and bulk kids inner shorts orders.",
    url: `${SITE_URL}/contact`,
  },
};

const CONTACT_ITEMS = [
  {
    Icon: PhoneIcon,
    label: "Call Us",
    value: BUSINESS.telephone,
    href: BUSINESS.telephoneHref,
    ringClass: "bg-sky-100 text-sky-700",
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    ringClass: "bg-amber-100 text-amber-700",
  },
  {
    Icon: MapPinIcon,
    label: "Location",
    value: `${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}`,
    href: undefined,
    ringClass: "bg-pink-100 text-pink-700",
  },
  {
    Icon: ClockIcon,
    label: "Business Hours",
    value: BUSINESS.hoursLabel,
    href: undefined,
    ringClass: "bg-violet-100 text-violet-700",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    value: "@mjptex",
    href: BUSINESS.instagramUrl,
    ringClass: "bg-rose-100 text-rose-700",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title={<>Contact MJP.Tex</>}
        description={
          <>
            Kids bottom wear manufacturer in Tiruppur, Tamil Nadu. Reach out for retail queries,
            bulk &amp; wholesale orders, or general questions about our kids inner shorts.
          </>
        }
        breadcrumbItems={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md shadow-blue-900/5 backdrop-blur sm:p-8">
            <h2 className="text-lg font-bold text-blue-950 sm:text-xl">Get in Touch</h2>
            <ul className="mt-5 space-y-4">
              {CONTACT_ITEMS.map(({ Icon, label, value, href, ringClass }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${ringClass}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-blue-900/50">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-blue-950 sm:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-blue-950 sm:text-base">
                        {value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-md shadow-blue-900/5 backdrop-blur">
            <iframe
              src={BUSINESS.mapEmbedSrc}
              title="Map showing MJP.Tex location in Tiruppur, Tamil Nadu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 lg:h-full lg:min-h-96"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-10 text-center sm:px-6 sm:pb-14 lg:px-8">
        <p className="text-sm text-blue-900/60 sm:text-base">
          Looking to stock kids inner shorts as a retailer or wholesaler?{" "}
          <a href={BUSINESS.whatsappHref} className="font-semibold text-blue-950 underline underline-offset-4">
            Message us on WhatsApp
          </a>{" "}
          for pricing and minimum order quantity.
        </p>
      </section>
    </>
  );
}
