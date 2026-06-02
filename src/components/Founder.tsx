"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const LOOM_URL = process.env.NEXT_PUBLIC_FOUNDER_LOOM_URL || "#";

export function Founder() {
  return (
    <section
      aria-label="Founder"
      className="relative border-b border-line"
    >
      <div className="mx-auto w-full max-w-3xl px-5 py-24 md:py-32">
        <div className="flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur">
              Founder · Tree Revenue Engine
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Who&rsquo;s actually building this
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-display text-balance text-4xl text-fg sm:text-5xl"
          >
            Hey &mdash; I&rsquo;m Timothy Gross.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-pretty text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            I spent the last two years building lead systems &mdash; first for
            my own tax business (zero to 150+ clients), then for a handful of
            service-business operators. What I kept seeing in tree services
            specifically: great crews losing real money on missed calls, slow
            follow-up, and Facebook ads that nobody knows how to run. So I
            built Tree Revenue Engine to do all four pieces &mdash; ads,
            answering, booking, follow-up &mdash; under one roof, for tree
            companies only. If you book the free audit, you&rsquo;re talking to
            me. Not a closer, not a setter. I&rsquo;ll tell you if we&rsquo;re
            a fit in the first 10 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-2"
          >
            <a
              href={LOOM_URL}
              target={LOOM_URL.startsWith("http") ? "_blank" : undefined}
              rel={LOOM_URL.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-2 pl-2 pr-5 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-canvas">
                <Play className="h-3.5 w-3.5 fill-canvas" aria-hidden />
              </span>
              Watch the 90-second intro
              <span aria-hidden className="text-fg-muted transition-colors group-hover:text-accent">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
