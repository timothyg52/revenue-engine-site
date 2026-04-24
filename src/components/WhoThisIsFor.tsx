"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const goodFit = [
  "Med spas",
  "Dental practices",
  "Law firms",
  "Home services (HVAC, roofing, plumbing)",
  "Fitness studios & gyms",
  "Real estate teams",
  "Chiropractors",
  "Agencies with a proven offer",
];

const notFit = [
  "E-commerce brands",
  "Pre-revenue startups",
  "Businesses without a clear offer",
  "No defined closing process",
];

export function WhoThisIsFor() {
  return (
    <section className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Who this is for"
          title={
            <>
              Built for Nashville service businesses doing{" "}
              <span className="text-accent">$30K–$500K/month.</span>
            </>
          }
          description="If your offer works and your team can close — we'll send you more of the right calls. If not, we'll tell you straight."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-7 ring-1 ring-accent/10"
          >
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-base">
                <Check className="h-4 w-4" aria-hidden />
              </div>
              <h3 className="font-display text-2xl text-fg">Good fit</h3>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-fg">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="rounded-2xl border border-line bg-surface/60 p-7"
          >
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-elevated text-fg-muted">
                <X className="h-4 w-4" aria-hidden />
              </div>
              <h3 className="font-display text-2xl text-fg">Not a fit</h3>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-fg-muted"
                >
                  <X
                    className="mt-0.5 h-4 w-4 flex-none text-fg-dim"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
