import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 20-minute strategy call or send your numbers — Revenue Engine will respond by the next business day.",
  alternates: { canonical: "https://revenue-engine-ai.com/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative pt-16">
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
