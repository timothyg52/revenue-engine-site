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
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col items-center gap-4 lg:items-start"
          >
            <div
              aria-hidden
              className="relative h-64 w-64 overflow-hidden rounded-full border border-line bg-elevated"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-line-strong/40 via-elevated to-surface" />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold uppercase tracking-[0.22em] text-fg-dim">
                Founder photo
              </div>
            </div>
            <span className="rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur">
              Founder · Revenue Engine
            </span>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
            >
              Who&rsquo;s actually building this
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="font-display text-balance text-4xl text-fg sm:text-5xl"
            >
              Hey — I&rsquo;m Timothy Gross.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              I&rsquo;ve spent the last two years building lead systems for my own
              tax business — took it from zero to 150+ clients using the same
              AI, SMS, and automation stack I now install for other Nashville
              operators. Revenue Engine is what I built when founders kept
              asking me to do it for them. If you book a call, you&rsquo;re
              talking to me — not a closer, not a setter. I&rsquo;ll tell you if
              we&rsquo;re a fit in the first 10 minutes.
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
                className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-2 pl-2 pr-5 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-canvas">
                  <Play className="h-3.5 w-3.5 fill-canvas" aria-hidden />
                </span>
                Watch the 90-second intro
                <span aria-hidden className="text-fg-muted transition-colors group-hover:text-accent">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
