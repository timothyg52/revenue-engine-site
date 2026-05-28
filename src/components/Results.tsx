"use client";

import { motion } from "motion/react";
import { Lock, MessageSquare, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ease = [0.16, 1, 0.3, 1] as const;

const offers = [
  {
    icon: Lock,
    title: "Locked founder pricing",
    body: "Your rate never increases. Lock today's price for the life of the engagement.",
  },
  {
    icon: MessageSquare,
    title: "Direct line to me",
    body: "Text or call anytime. No account managers, no ticket queues — you're talking to me.",
  },
  {
    icon: Wrench,
    title: "Custom system in 21 days",
    body: "We build it around your business, not a template. Live in three weeks.",
  },
];

export function Results() {
  return (
    <section id="results" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="Founding Clients"
          title="Founding client pricing — limited spots"
          description="We're hand-selecting our first 10 Nashville service businesses. You get founder pricing locked for life, direct access to me, and a custom-built system in 21 days. After 10, the door closes and prices double."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.article
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                className="relative flex flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-elevated/60 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-2xl text-fg">{o.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-fg-muted">
                  {o.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
