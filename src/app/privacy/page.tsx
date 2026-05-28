import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Revenue Engine privacy policy — what data we collect, how we use it, and how SMS opt-in consent is handled.",
  alternates: { canonical: "https://revenueengine.ai/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 28, 2026";

export default function PrivacyPage() {
  return (
    <div className="relative">
      <Nav />
      <main className="relative bg-canvas">
        <article className="mx-auto w-full max-w-3xl px-5 py-24 md:py-32">
          <header className="mb-12">
            <h1 className="font-display text-4xl text-fg md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-fg-dim">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="flex flex-col gap-8 text-pretty text-base leading-relaxed text-fg-muted">
            <p>
              Revenue Engine (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
              operates revenue-engine-ai.com and provides AI lead generation
              services to service businesses.
            </p>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                Information We Collect
              </h2>
              <p>
                When you submit a form, book a call, or contact us, we collect:
                name, business name, email, phone number, business revenue
                range, and any details you share about your business.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                How We Use Your Information
              </h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>Respond to inquiries and book strategy calls</li>
                <li>Send SMS and email communications you&rsquo;ve consented to</li>
                <li>Deliver and improve our services to existing clients</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                SMS Communications
              </h2>
              <p>
                By providing your phone number on our website or by giving
                verbal consent during a call, you agree to receive SMS messages
                from Revenue Engine related to scheduling, follow-ups, service
                updates, and responses to your inquiries. Message frequency
                varies. Message and data rates may apply. Reply STOP to
                unsubscribe, HELP for help.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                No Mobile Data Sharing
              </h2>
              <p>
                We do not sell, rent, share, or otherwise disclose mobile
                information or SMS opt-in consent data to any third parties or
                affiliates for marketing or promotional purposes. SMS opt-in
                and consent data is excluded from all third-party sharing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                Data Sharing
              </h2>
              <p>
                We share data only with service providers necessary to operate
                (e.g., CRM, calendar, email/SMS infrastructure). We do not sell
                personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">
                Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your data by
                emailing{" "}
                <a
                  href="mailto:futureceo.52@gmail.com"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  futureceo.52@gmail.com
                </a>
                . You may opt out of SMS by replying STOP, and email by
                clicking unsubscribe.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-2xl text-fg">Contact</h2>
              <address className="not-italic">
                Revenue Engine
                <br />
                Nashville, TN
                <br />
                <a
                  href="mailto:futureceo.52@gmail.com"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  futureceo.52@gmail.com
                </a>
              </address>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
