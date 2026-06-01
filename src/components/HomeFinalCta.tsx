"use client";

import { motion } from "motion/react";
import { Button, ArrowCta } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeFinalCta() {
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
            Stop losing tree jobs to missed calls and slow follow-up.
          </h2>
          <p className="mt-5 font-display text-balance text-4xl text-fg sm:text-5xl md:text-6xl">
            In 21 days your trucks stay full and your calendar fills itself.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-fg-muted sm:text-lg">
            Book a 20-minute free growth audit. We map your 8 revenue leaks
            live on the call. You keep the audit either way.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg" trailingIcon={<ArrowCta />}>
              Book Your Free Growth Audit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
