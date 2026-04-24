"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Activity, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const kpis = [
  { label: "Calls Today", value: "47" },
  { label: "Booked", value: "12" },
  { label: "Booking Rate", value: "25.5%" },
  { label: "Pipeline", value: "$48.2K" },
];

const bookings = [
  { name: "Lauren Pham", source: "Voice · Botox consult", time: "11:42 AM", color: "bg-emerald-400" },
  { name: "Jared Cole", source: "SMS · Roof inspection", time: "10:08 AM", color: "bg-accent" },
  { name: "Maya Reed", source: "Voice · New patient intake", time: "9:21 AM", color: "bg-emerald-400" },
];

// Smooth area chart path
const chart = {
  path: "M0 70 C30 65, 50 55, 80 50 S140 38, 170 30 S230 28, 260 22 S320 18, 360 10",
  area: "M0 70 C30 65, 50 55, 80 50 S140 38, 170 30 S230 28, 260 22 S320 18, 360 10 L360 90 L0 90 Z",
};

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full max-w-xl rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative mb-4 flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-accent" aria-hidden />
          <span className="text-sm font-medium text-fg">Revenue Engine — Live Pipeline</span>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
          Live
        </span>
      </div>

      <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease }}
            className="rounded-xl border border-line bg-elevated/60 p-3"
          >
            <div className="text-[10px] font-medium uppercase tracking-wider text-fg-dim">
              {k.label}
            </div>
            <div className="mt-1 font-display text-2xl text-fg">{k.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-4 rounded-xl border border-line bg-elevated/40 p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-fg-dim">
              Pipeline value · 7 days
            </div>
            <div className="mt-0.5 font-display text-xl text-fg">+$48,200</div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
            <ArrowUpRight className="h-3 w-3" /> 32%
          </span>
        </div>
        <svg viewBox="0 0 360 90" className="mt-2 h-20 w-full" aria-hidden>
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8ff5c" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e8ff5c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={chart.area}
            fill="url(#chartFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <motion.path
            d={chart.path}
            fill="none"
            stroke="#e8ff5c"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          />
        </svg>
      </div>

      <div className="relative mt-4">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-wider text-fg-dim">
          Recent bookings
        </div>
        <div className="flex flex-col gap-1.5">
          {bookings.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease }}
              className="flex items-center gap-3 rounded-lg border border-line/60 bg-elevated/40 px-3 py-2"
            >
              <span className={cn("h-2 w-2 rounded-full", b.color)} />
              <span className="text-sm font-medium text-fg">{b.name}</span>
              <span className="hidden text-xs text-fg-muted sm:inline">· {b.source}</span>
              <span className="ml-auto text-xs tabular-nums text-fg-dim">{b.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
