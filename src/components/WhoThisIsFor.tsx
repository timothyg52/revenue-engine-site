"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const goodFit = [
  "Tree removal companies",
  "Tree trimming & pruning crews",
  "Stump grinding operators",
  "Emergency tree service (storm cleanup)",
  "Land clearing companies",
  "Arborist-led tree care companies",
  "Tree services running 1–10 trucks",
  "Owners who answer their own phone today",
];

const notFit = [
  "Lawn care without tree work",
  "Pest control / non-tree home services",
  "Companies with no service area defined",
  "Operators without licensing or insurance",
];

export function WhoThisIsFor() {
  return (
    <section className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Who this is for"
          title={
            <>
              Built only for{" "}
              <span className="text-accent">tree service companies.</span>
            </>
          }
          description="If you run trucks and crews, climb trees, grind stumps, or take storm cleanup calls — we built this for you. If you're a different kind of home service, we'll point you somewhere that fits."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              <Check className="h-4 w-4" aria-hidden />
              Good fit
            </div>
            <ul className="flex flex-col gap-3">
              {goodFit.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-3 text-sm leading-snug text-fg sm:text-base"
                >
                  <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="rounded-2xl border border-line bg-surface/60 p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-fg-dim">
              <X className="h-4 w-4" aria-hidden />
              Not a fit
            </div>
            <ul className="flex flex-col gap-3">
              {notFit.map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-3 text-sm leading-snug text-fg-muted sm:text-base"
                >
                  <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-elevated text-fg-dim ring-1 ring-line">
                    <X className="h-3 w-3" aria-hidden />
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
