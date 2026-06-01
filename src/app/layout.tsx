import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://revenue-engine-ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Tree Revenue Engine — More Tree Jobs, More Estimates, Fewer Missed Calls",
    template: "%s · Tree Revenue Engine",
  },
  description:
    "Tree Revenue Engine is the growth partner built only for tree service companies. We generate more leads, answer every call, book more estimates, and help you close more jobs — without hiring more office staff.",
  keywords: [
    "tree service marketing",
    "tree removal leads",
    "tree trimming leads",
    "stump grinding leads",
    "emergency tree service marketing",
    "storm cleanup leads",
    "tree company growth",
    "arborist marketing",
    "tree service answering service",
    "tree service appointment booking",
    "tree service Meta ads",
    "tree service Facebook ads",
  ],
  authors: [{ name: "Tree Revenue Engine" }],
  creator: "Tree Revenue Engine",
  publisher: "Tree Revenue Engine",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tree Revenue Engine",
    title:
      "Tree Revenue Engine — More Tree Jobs, More Estimates, Fewer Missed Calls",
    description:
      "The growth partner built only for tree service companies. Generate more leads, answer every call, book more estimates, close more jobs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tree Revenue Engine — Growth Built Only For Tree Companies",
    description:
      "More tree jobs. More estimates. Fewer missed calls. Built only for tree removal, trimming, stump grinding, and emergency tree service companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#business`,
      name: "Tree Revenue Engine",
      description:
        "Growth partner for tree service companies. We generate more leads, answer every call, book more estimates, and help tree removal, trimming, stump grinding, and emergency tree service operators close more jobs.",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "TN",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#service`,
      name: "Tree Service Revenue Growth System",
      provider: { "@id": `${SITE_URL}#business` },
      serviceType:
        "Lead Generation, Meta Ads, Phone Answering, Appointment Booking, Follow-Up, Review Requests — for tree service companies only",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Tree Removal Companies, Tree Trimming Companies, Stump Grinding Companies, Emergency Tree Service Companies",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-fg antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ChatWidget />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
