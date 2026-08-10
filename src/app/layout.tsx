import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MJP.Tex – Kids Innerwear & Bottom Wear | Tiruppur",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "MJP.Tex is a kids innerwear and bottom wear manufacturer from Tiruppur, Tamil Nadu. Explore quality kids inner shorts and innerwear for boys & girls, age 1–12.",
  keywords: [
    "MJP.Tex",
    "kids inner shorts manufacturer",
    "kids bottom wear manufacturer",
    "kids shorts manufacturer in Tamil Nadu",
    "kids innerwear manufacturer",
    "kids clothing manufacturer in Tiruppur",
    "kids inner shorts manufacturer in Tiruppur",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MJP.Tex – Kids Innerwear & Bottom Wear | Tiruppur",
    description:
      "MJP.Tex is a kids innerwear and bottom wear manufacturer from Tiruppur, Tamil Nadu. Explore quality kids inner shorts and innerwear for boys & girls, age 1–12.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJP.Tex – Kids Innerwear & Bottom Wear | Tiruppur",
    description:
      "MJP.Tex is a kids innerwear and bottom wear manufacturer from Tiruppur, Tamil Nadu. Explore quality kids inner shorts and innerwear for boys & girls, age 1–12.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "MJP Tex",
  url: SITE_URL,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: BUSINESS.description,
  url: SITE_URL,
  image: `${SITE_URL}/icon.png`,
  logo: `${SITE_URL}/icon.png`,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: BUSINESS.openingHours.days,
    opens: BUSINESS.openingHours.opens,
    closes: BUSINESS.openingHours.closes,
  },
  areaServed: "IN",
  sameAs: ["https://www.meesho.com/MJPTex?_ms=3.0.1"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-slate-800">
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <div className="relative min-h-screen">
          <BackgroundDecor />
          <TopBar />
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
