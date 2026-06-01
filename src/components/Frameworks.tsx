"use client";

import { motion } from "motion/react";
import {
  Megaphone,
  Phone,
  CalendarCheck,
  Star,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: 1,
    icon: Megaphone,
    title: "Generate More Leads",
    body: "Targeted Facebook and Instagram ads put your tree service in front of homeowners who need work done — removals, trimming, stump grinding, and storm cleanup.",
    outcome: "More qualified homeowners calling your trucks.",
  },
  {
    n: 2,
    icon: Phone,
    title: "Answer Every Lead",
    body: "Every call answered 24/7 — even at 11 PM during a storm. Missed calls get an auto-text within 30 seconds so they never go to your competitor.",
    outcome: "Fewer missed calls. Fewer lost jobs.",
  },
  {
    n: 3,
    icon: CalendarCheck,
    title: "Book More Estimates",
    body: "Every caller is qualified (job type, address, urgency) and dropped straight onto your calendar — no back-and-forth, no chasing.",
    outcome: "More estimates on the books each week.",
  },
  {
    n: 4,
    icon: Star,
    title: "Close More Jobs",
    body: "Sent estimates get automatic follow-up until they sign. After the job, customers get a text asking for a 5-star review — feeding more inbound leads next month.",
    outcome: "Higher close rate. More repeat customers.",
  },
];

export function Frameworks() {
  return (
    <section
      id="frameworks"
      aria-label="The 4-step revenue growth funnel for tree service companies"
      className="relative border-b border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="How We Grow Tree Companies"
          title="Four steps. Every dollar tracked from ad to invoice."
          description="Built only for tree removal, trimming, stump grinding, and emergency tree service operators. We handle the lead flow — your crews stay on the trucks."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur-sm transition-colors hover:border-line-strong"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-dim">
                    Step {s.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-fg">{s.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
                <p className="mt-auto border-t border-line pt-4 text-xs font-medium text-accent">
                  {s.outcome}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
