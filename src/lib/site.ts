export const SITE_URL = "https://mjptex.in";
export const SITE_NAME = "MJP.Tex";

export const BUSINESS = {
  name: "MJP.Tex",
  legalName: "MJP.Tex Apparels",
  tagline: "Kids Bottom Wear Manufacturer, Tiruppur",
  description:
    "MJP.Tex is a kids inner shorts and bottom wear manufacturer based in Tiruppur, Tamil Nadu, with 15+ years of experience supplying retailers, wholesalers, and distributors across India.",
  telephone: "+91 81900 98951",
  telephoneHref: "tel:+918190098951",
  whatsapp: "+91 63806 99014",
  whatsappHref: "https://wa.me/916380699014",
  email: "mjptexapparels@gmail.com",
  gstin: "33BOZPP8039Q1ZO",
  addressLocality: "Tiruppur",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
  hoursLabel: "Mon – Sat, 9:00 AM – 8:30 PM",
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "20:30",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Tiruppur,+Tamil+Nadu&output=embed",
  instagramUrl: "https://www.instagram.com/mjptex",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
