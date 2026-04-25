import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import "./globals.css";

const GHL_CHAT_WIDGET_ID =
  process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID || "69ec319acbb9f442d0ed8b5f";

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

const SITE_URL = "https://revenueengine.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Revenue Engine — AI Lead Gen for Nashville Service Businesses",
    template: "%s · Revenue Engine",
  },
  description:
    "We build AI voice agents, SMS bots, and lead conversion systems that turn cold leads into booked appointments. Serving Nashville service businesses.",
  keywords: [
    "AI lead generation",
    "Nashville",
    "AI voice agent",
    "SMS bot",
    "appointment booking",
    "med spa marketing",
    "home services marketing",
    "dental marketing",
    "lead conversion",
  ],
  authors: [{ name: "Revenue Engine" }],
  creator: "Revenue Engine",
  publisher: "Revenue Engine",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Revenue Engine",
    title: "Revenue Engine — AI Lead Gen for Nashville Service Businesses",
    description:
      "AI voice agents, SMS bots, and lead conversion systems that book appointments 24/7 for Nashville service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Engine — AI Lead Gen for Nashville",
    description:
      "AI voice agents, SMS bots, and lead conversion systems that turn cold leads into booked appointments.",
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
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "Revenue Engine",
      description:
        "AI lead generation agency building voice agents, SMS bots, and lead conversion systems for Nashville service businesses.",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashville",
        addressRegion: "TN",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Nashville" },
        { "@type": "City", name: "Franklin" },
        { "@type": "City", name: "Brentwood" },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#service`,
      name: "AI Lead Generation Systems",
      provider: { "@id": `${SITE_URL}#localbusiness` },
      serviceType: "AI Voice Agent, SMS Bot, Lead Conversion",
      areaServed: { "@type": "State", name: "Tennessee" },
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
        <Providers>{children}</Providers>
        {/* GoHighLevel / LeadConnector chat widget. Loads after page idle
            so it never blocks paint or interaction. Widget ID is
            overridable via NEXT_PUBLIC_GHL_CHAT_WIDGET_ID. */}
        <Script
          id="ghl-chat-widget-loader"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id={GHL_CHAT_WIDGET_ID}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
