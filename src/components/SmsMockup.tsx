"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const thread = [
  { who: "lead", text: "Just saw your ad — what do you charge for a full roof replacement?" },
  {
    who: "agent",
    text:
      "Hey Marcus — thanks for reaching out to Ironclad Roofing. We'd need to see your roof to give you a real number. Can we swing by Tuesday morning for a free inspection?",
  },
  { who: "lead", text: "Yeah that works" },
  { who: "agent", text: "Great — booking you for Tuesday 9 AM. What's the address?" },
] as const;

export function SmsMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-[340px]", className)}>
      <div className="relative rounded-[2.25rem] border border-line bg-surface p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
        <div className="rounded-[1.85rem] bg-base p-4 ring-1 ring-line/60">
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-line-strong" aria-hidden />
          <div className="flex flex-col items-center gap-1 border-b border-line pb-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-elevated to-line-strong ring-1 ring-line" />
            <div className="text-xs font-medium text-fg">Ironclad Roofing</div>
            <div className="text-[10px] text-fg-dim">+1 (615) 555-0142</div>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            {thread.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.18, duration: 0.45, ease }}
                className={cn(
                  "max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug",
                  m.who === "agent"
                    ? "self-end rounded-br-sm bg-accent text-base"
                    : "self-start rounded-bl-sm bg-elevated text-fg ring-1 ring-line",
                )}
              >
                {m.text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-4 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-3 py-2"
          >
            <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span className="text-[11px] font-medium text-fg">Inspection booked · Tue 9 AM</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
