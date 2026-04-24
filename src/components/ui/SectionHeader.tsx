"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
        className={cn(
          "font-display text-balance text-4xl text-fg sm:text-5xl md:text-6xl",
          align === "center" ? "max-w-3xl" : "",
        )}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className={cn(
            "max-w-2xl text-pretty text-base text-fg-muted sm:text-lg",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
