import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { salon } from "@/lib/data";
import SmoothScroll from "@/components/smooth-scroll";
import Cursor from "@/components/cursor";
import Nav from "@/components/nav";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blush-salon.vercel.app"),
  title: {
    default: "Blush by Bushra Imtiyaz — Salon & Studio, Byculla Mumbai",
    template: "%s · Blush",
  },
  description:
    "Blush by Bushra Imtiyaz is a beauty salon and studio in Byculla, Mumbai — facials, hair, colour, bridal and party makeup, threading, waxing, nails and mehndi. Rated 4.6 on Google.",
  keywords: [
    "beauty parlour Byculla",
    "salon Byculla Mumbai",
    "bridal makeup Mumbai",
    "facial Byculla",
    "Blush by Bushra Imtiyaz",
  ],
  openGraph: {
    title: "Blush by Bushra Imtiyaz — Salon & Studio",
    description:
      "A beauty studio in Byculla, Mumbai. Careful hands, a calm room, no rush.",
    type: "website",
    locale: "en_IN",
    siteName: "Blush by Bushra Imtiyaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blush by Bushra Imtiyaz — Salon & Studio",
    description:
      "A beauty studio in Byculla, Mumbai. Careful hands, a calm room, no rush.",
  },
};

export const viewport: Viewport = {
  themeColor: "#150d0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salon.name,
    image: "https://blush-salon.vercel.app/opengraph-image",
    telephone: "+918779298271",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${salon.address.line1}, ${salon.address.line2}`,
      addressLocality: salon.address.city,
      addressRegion: salon.address.state,
      postalCode: salon.address.zip,
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 10:00-22:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: salon.rating,
      reviewCount: salon.reviewCount,
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Cursor />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
