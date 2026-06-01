import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Tree Revenue Engine terms of service — service agreement, SMS/email consent, and Tennessee-law governance.",
  alternates: { canonical: "https://revenue-engine-ai.com/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 28, 2026";

export default function TermsPage() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative bg-canvas">
        <article className="mx-auto w-full max-w-3xl px-5 py-24 md:py-32">
          <header className="mb-12">
            <h1 className="font-display text-4xl text-fg md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-fg-dim">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="flex flex-col gap-6 text-pretty text-base leading-relaxed text-fg-muted">
            <p>
              By using revenue-engine-ai.com, you agree to these terms. Tree
              Revenue Engine provides revenue growth services to tree service
              companies (tree removal, tree trimming, stump grinding, and
              emergency tree service operators) — including lead generation,
              advertising, phone answering, appointment booking, follow-up, and
              review request automation. Service agreements are governed by
              individual signed contracts. We make no guarantees of specific results. By
              submitting forms or providing your phone number, you consent to
              SMS and email communications as described in our{" "}
              <a
                href="/privacy"
                className="text-accent underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
              . Tennessee law governs these terms. Contact{" "}
              <a
                href="mailto:futureceo.52@gmail.com"
                className="text-accent underline-offset-4 hover:underline"
              >
                futureceo.52@gmail.com
              </a>{" "}
              with questions.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
