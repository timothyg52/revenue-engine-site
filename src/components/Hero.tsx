"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button, ArrowCta } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { VoiceMockup } from "@/components/VoiceMockup";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden border-b border-line"
    >
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <motion.div
        aria-hidden
        style={{ y: orb1Y }}
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
      />
      <motion.div
        aria-hidden
        style={{ y: orb2Y }}
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-14 px-5 pb-24 pt-32 md:pt-40 lg:flex-row lg:items-center lg:gap-10 lg:pb-32">
        <div className="flex w-full flex-col gap-7 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Pill>For Nashville service businesses doing $30K–$500K/month</Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="font-display text-balance text-5xl text-fg sm:text-6xl md:text-7xl"
          >
            More booked appointments. <br className="hidden sm:inline" />
            <span className="text-fg-muted">Less chasing leads.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="max-w-xl text-pretty text-base text-fg-muted sm:text-lg"
          >
            We install an AI receptionist that answers every call, texts every
            lead in under 60 seconds, and books them straight onto your calendar
            — for less than the cost of a part-time front desk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="#book" size="lg" trailingIcon={<ArrowCta />}>
              Book a Strategy Call
            </Button>
            <Button href="#frameworks" variant="outline" size="lg">
              See How It Works
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-8 border-t border-line pt-6 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-fg-dim"
          >
            Currently onboarding our first Nashville clients — case studies
            publishing Q3 2026.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative w-full lg:flex-1"
        >
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-x-8 -inset-y-12 rounded-[3rem] bg-accent/[0.06] blur-2xl"
            />
            <div className="relative">
              <VoiceMockup />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
