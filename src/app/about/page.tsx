import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { MeeshoButton } from "@/components/MeeshoButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CottonIcon, ThreadIcon, KidsIcon } from "@/components/icons";
import { SITE_URL, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MJP.Tex is a kids clothing manufacturer based in Tiruppur, Tamil Nadu, with 15+ years of experience making inner shorts and bottom wear for boys & girls, age 1–12.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MJP.Tex | Kids Clothing Manufacturer in Tiruppur",
    description:
      "15+ years manufacturing kids inner shorts & bottom wear from Tiruppur, Tamil Nadu.",
    url: `${SITE_URL}/about`,
  },
};

const VALUES = [
  {
    label: "Comfort-First Fabric",
    Icon: CottonIcon,
    text: "Soft, breathable cotton-blend fabric chosen for all-day comfort on young, active skin.",
  },
  {
    label: "Careful Stitching",
    Icon: ThreadIcon,
    text: "Reinforced seams and consistent finishing checked before every pack leaves our unit.",
  },
  {
    label: "Made for Every Child",
    Icon: KidsIcon,
    text: "Sizes S to XL covering boys and girls from age 1 through 12 years.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>About MJP.Tex &ndash; Kids Clothing Manufacturer in Tiruppur</>}
        description={
          <>
            <span className="font-semibold text-white">MJP.Tex</span> is a kids inner shorts and
            bottom wear brand with{" "}
            <span className="font-semibold text-white">15+ years of experience</span>,
            manufacturing from our unit in Tiruppur, Tamil Nadu &mdash; one of India&rsquo;s
            largest knitwear and garment manufacturing hubs.
          </>
        }
        breadcrumbItems={[{ label: "About", href: "/about" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md shadow-blue-900/5 backdrop-blur sm:p-8">
          <h2 className="text-lg font-bold text-blue-950 sm:text-xl">Our Story</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-900/70 sm:text-base">
            MJP.Tex started with a simple focus: everyday inner and bottom wear that children can
            wear in comfort from morning to night. Over 15+ years, that focus has stayed the
            same &mdash; a kids inner shorts manufacturer built around soft, skin-friendly
            fabric, dependable stitching, and consistent sizing that parents and resellers can
            rely on.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-900/70 sm:text-base">
            Today we supply boys&rsquo; and girls&rsquo; inner shorts for age 1&ndash;12 years,
            available at retail on Meesho and in bulk to retailers, wholesalers, and
            distributors across India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
        <h2 className="text-center text-lg font-bold text-blue-950 sm:text-xl">
          What We Stand For
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {VALUES.map(({ label, Icon, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm shadow-blue-900/5 backdrop-blur"
            >
              <Icon className="mx-auto h-10 w-10" />
              <h3 className="mt-3 text-sm font-semibold text-blue-950 sm:text-base">{label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-blue-900/60 sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md shadow-blue-900/5 backdrop-blur sm:p-8">
          <h2 className="text-lg font-bold text-blue-950 sm:text-xl">
            Manufacturing &amp; Location
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-900/70 sm:text-base">
            Our manufacturing unit is based in{" "}
            <span className="font-semibold text-blue-950">
              {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
            </span>
            . GSTIN:{" "}
            <span className="font-semibold text-blue-950">{BUSINESS.gstin}</span>. For pack
            pricing, minimum order quantity, or a site visit for wholesale partners, reach out
            through the{" "}
            <Link href="/contact" className="font-semibold text-blue-950 underline underline-offset-4">
              contact page
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MeeshoButton size="lg" />
            <WhatsAppButton variant="solid" size="lg" label="Bulk Order Enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
