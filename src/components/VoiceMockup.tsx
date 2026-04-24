"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Phone, Check } from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const transcript = [
  { who: "ai", text: "Thanks for calling Bella Aesthetics — this is Aria. How can I help?" },
  { who: "caller", text: "Hey, I saw your Botox ad. Got any openings this week?" },
  { who: "ai", text: "Absolutely. I have Thursday at 2 PM or Friday at 10 AM — which works?" },
  { who: "caller", text: "Thursday works." },
  { who: "ai", text: "Perfect, I've got you booked. Text confirmation on its way." },
] as const;

export function VoiceMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-md rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative flex items-center gap-3 border-b border-line pb-4">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Phone className="h-4 w-4" aria-hidden />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-fg">Revenue Engine AI</div>
          <div className="text-xs text-fg-muted">Live call · 00:42</div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">Live</span>
        </div>
      </div>

      <div className="relative flex flex-col gap-2.5 pt-4">
        {transcript.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5, ease }}
            className={cn(
              "max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed",
              line.who === "ai"
                ? "self-start rounded-bl-md bg-accent/10 text-fg ring-1 ring-accent/20"
                : "self-end rounded-br-md bg-elevated text-fg-muted ring-1 ring-line",
            )}
          >
            <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider opacity-60">
              {line.who === "ai" ? "AI · Aria" : "Caller"}
            </div>
            {line.text}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0.4 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, ease }}
        className="relative mt-4 flex h-8 items-end gap-[3px] origin-bottom"
        aria-hidden
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const heights = [10, 22, 14, 28, 18, 8, 30, 16, 24];
          const h = heights[i % heights.length];
          return (
            <span
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-accent/30 to-accent/80"
              style={{ height: `${h}px` }}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="relative mt-4 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-3 py-2.5"
      >
        <Check className="h-4 w-4 text-accent" aria-hidden />
        <span className="text-xs font-medium text-fg">Appointment booked · Thursday 2:00 PM</span>
      </motion.div>
    </div>
  );
}
