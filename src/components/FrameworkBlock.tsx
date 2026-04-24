"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FrameworkBlock({
  label,
  heading,
  copy,
  features,
  visual,
  side = "right",
}: {
  label: string;
  heading: string;
  copy: string;
  features: Feature[];
  visual: React.ReactNode;
  side?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20",
        side === "left" ? "" : "",
      )}
    >
      <div className={cn("flex flex-col gap-6", side === "left" ? "lg:order-2" : "lg:order-1")}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-accent"
        >
          {label}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="font-display text-balance text-4xl text-fg sm:text-5xl"
        >
          {heading}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="max-w-xl text-pretty text-base text-fg-muted sm:text-lg"
        >
          {copy}
        </motion.p>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.06 }}
                className="flex gap-3"
              >
                <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-semibold text-fg">{f.title}</div>
                  <div className="text-sm leading-relaxed text-fg-muted">{f.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className={cn(
          "relative flex w-full justify-center",
          side === "left" ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end",
        )}
      >
        <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-accent/[0.05] blur-2xl" />
        <div className="relative">{visual}</div>
      </motion.div>
    </div>
  );
}
