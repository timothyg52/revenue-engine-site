"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    days: "Days 1–3",
    title: "Audit & Strategy",
    body:
      "We map your current lead flow, find the leaks, and design the system that fixes them.",
  },
  {
    days: "Days 4–17",
    title: "Build & Integrate",
    body:
      "We build the AI agents, write the scripts, wire up your CRM, and stress-test everything before it touches a real lead.",
  },
  {
    days: "Day 18+",
    title: "Launch & Optimize",
    body:
      "We go live, watch the data daily, and tune the system every week until your numbers compound.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Process"
          title="From audit to autopilot in 21 days."
          description="Three steps. One clear path. Zero fluff."
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
