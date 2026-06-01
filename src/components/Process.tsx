"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    days: "Days 1–3",
    title: "Map the Leaks",
    body:
      "We walk your phone log, your last 30 days of estimates, and your current Facebook ads (or lack of). We show you exactly where the missed revenue is hiding — by job type, by time of day, by funnel step.",
  },
  {
    days: "Days 4–17",
    title: "Build the System",
    body:
      "We launch the Facebook ads, set up the phone answering, write the qualification questions for tree removal vs. trimming vs. stump grinding vs. emergency calls, and wire it all into your calendar before any real lead touches it.",
  },
  {
    days: "Day 18+",
    title: "Book Jobs On Autopilot",
    body:
      "Calls answered. Estimates booked. Follow-up running. Reviews coming in. We watch every dollar weekly and tune anything that's not pulling its weight.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Onboarding"
          title="From audit to booked jobs in 21 days."
          description="You sign Monday. We're booking estimates on your calendar by month-end. No long contracts, no setup fees stacked on top, no 'we'll get to it next quarter.'"
        />

        <div className="relative mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block"
          />
          {steps.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-line-strong"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-display text-lg text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-dim">
                  {s.days}
                </span>
              </div>
              <h3 className="font-display text-3xl text-fg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-fg-muted">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
