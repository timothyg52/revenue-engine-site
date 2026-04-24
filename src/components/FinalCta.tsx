"use client";

import { motion } from "motion/react";
import { CalEmbed } from "@/components/CalEmbed";
import { LeadForm } from "@/components/LeadForm";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-b border-line"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Stop chasing leads. Start booking them.
          </h2>
          <p className="mt-5 font-display text-balance text-4xl text-fg sm:text-5xl md:text-6xl">
            In 21 days your phone stops ringing missed and your calendar starts
            filling itself.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-fg-muted sm:text-lg">
            Book a 20-minute strategy call. If we&rsquo;re not a fit, we&rsquo;ll tell
            you on the call and point you somewhere that is.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
          >
            <CalEmbed />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
