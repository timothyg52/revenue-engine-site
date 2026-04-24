"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const cases = [
  {
    industry: "Med Spa · Nashville",
    stat: "+147%",
    statLabel: "bookings in 60 days",
    quote:
      "Our front desk used to miss 3 in 10 calls. Now nothing slips. The AI books while we sleep.",
    name: "Lauren K.",
    role: "Owner, Bella Aesthetics",
  },
  {
    industry: "Roofing · Franklin",
    stat: "38",
    statLabel: "extra jobs from dead leads (Q1)",
    quote:
      "They reactivated leads we'd written off two years ago. Paid for itself in three weeks.",
    name: "Marcus B.",
    role: "GM, Ironclad Roofing",
  },
  {
    industry: "Dental · Brentwood",
    stat: "22 hrs",
    statLabel: "front desk time freed weekly",
    quote:
      "Patients can't tell it's AI. Our team finally has time to actually treat people.",
    name: "Dr. Priya S.",
    role: "Brentwood Family Dental",
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br from-elevated to-line-strong text-sm font-semibold text-fg-muted ring-1 ring-line">
      {initials}
    </div>
  );
}

export function Results() {
  return (
    <section id="results" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Results"
          title="Proof, not promises."
          description="Real Nashville operators. Real numbers. Talk to any of them on a strategy call."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              className="relative flex flex-col gap-5 rounded-2xl border border-line bg-surface/60 p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-line bg-elevated/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                  {c.industry}
                </span>
                <Quote className="h-4 w-4 text-fg-dim" aria-hidden />
              </div>

              <div>
                <div className="font-display text-5xl text-accent">{c.stat}</div>
                <div className="mt-1 text-sm text-fg-muted">{c.statLabel}</div>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-fg">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-line pt-4">
                <Avatar name={c.name} />
                <div>
                  <div className="text-sm font-medium text-fg">{c.name}</div>
                  <div className="text-xs text-fg-dim">{c.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
