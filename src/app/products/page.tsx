import type { Metadata } from "next";
import Link from "next/link";
import clothImage from "@/assets/cloth.png";
import { ProductSection } from "@/components/ProductSection";
import { BulkOrderSection } from "@/components/BulkOrderSection";
import { SectionDivider } from "@/components/SectionDivider";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kids Inner Shorts Manufacturer in Tiruppur",
  description:
    "Kids inner shorts manufactured in Tiruppur, Tamil Nadu for boys & girls, age 1–12. Soft cotton-blend fabric, sizes S–XL, available for retail on Meesho and bulk wholesale orders.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Kids Inner Shorts Manufacturer in Tiruppur | MJP.Tex",
    description:
      "Kids inner shorts for boys & girls, age 1–12. Soft cotton-blend fabric, sizes S–XL. Manufactured in Tiruppur, Tamil Nadu.",
    url: `${SITE_URL}/products`,
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kids Inner Shorts",
  description:
    "Soft, breathable cotton-blend inner shorts for boys and girls, age 1–12 years, manufactured by MJP.Tex in Tiruppur, Tamil Nadu. Available in sizes S, M, L, XL.",
  image: `${SITE_URL}${clothImage.src}`,
  brand: {
    "@type": "Brand",
    name: "MJP.Tex",
  },
  manufacturer: {
    "@type": "Organization",
    name: "MJP.Tex",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
  },
  category: "Kids Innerwear",
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 1,
    suggestedMaxAge: 12,
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />

      <PageHeader
        eyebrow="Our Product"
        title={
          <>Kids Inner Shorts &ndash; Manufacturer for Boys &amp; Girls (Age 1&ndash;12)</>
        }
        description={
          <>
            MJP.Tex manufactures kids inner shorts and everyday bottom wear from our unit in{" "}
            <span className="font-semibold text-white">Tiruppur, Tamil Nadu</span> &mdash; a soft
            cotton-blend fabric designed for daily comfort, durability, and safe all-day wear. Sold
            at retail through Meesho and supplied in bulk to retailers, wholesalers, and
            distributors across India.
          </>
        }
        breadcrumbItems={[{ label: "Products", href: "/products" }]}
      />

      <ProductSection />

      <section className="mx-auto max-w-3xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-blue-950 sm:text-xl">Fabric &amp; Quality</h2>
        <p className="mt-2 text-sm leading-relaxed text-blue-900/70 sm:text-base">
          Every pair is stitched from a skin-friendly cotton blend that stays soft after repeated
          washes, with reinforced seams for everyday play. As a kids innerwear manufacturer, we
          test fit and stitching quality across every size before packing, so each pack of 12
          pieces is ready for shelf or resale.
        </p>

        <h2 className="mt-6 text-lg font-bold text-blue-950 sm:text-xl">
          Wholesale &amp; Bulk Orders
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-blue-900/70 sm:text-base">
          Retailers and wholesalers can order in bulk directly from our Tiruppur manufacturing
          unit. Message us on WhatsApp for current pack pricing, minimum order quantity, and
          delivery timelines, or see our{" "}
          <Link href="/contact" className="font-semibold text-blue-950 underline underline-offset-4">
            contact details
          </Link>{" "}
          to speak with our team.
        </p>
      </section>

      <SectionDivider />
      <BulkOrderSection />
    </>
  );
}
