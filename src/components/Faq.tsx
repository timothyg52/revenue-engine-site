"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "We already get enough leads.",
    a: "Maybe — but are you answering all of them? Booking all of them? Closing all of them? Most tree services miss 30–40% of calls during storm weeks and never follow up on half the estimates they send. At a $1,800 average ticket, the gap between 'enough leads' and 'every lead converted' is usually $10K–$30K a month. The free audit shows you which step is leaking.",
  },
  {
    q: "We answer our phones.",
    a: "What about the call at 7:43 PM? The one during the storm at 11 PM? The one that came in while your crew was at lunch? Industry data: even the best small tree services miss 25–40% of inbound calls. We pick up every one — and the ones that slip through get a text back within 30 seconds so they don't call a competitor.",
  },
  {
    q: "We have an office manager.",
    a: "Great. We work with them. Your office manager handles the relationships, the dispatch, the hard problem-solving. We handle the after-hours calls, the missed-call texts, the cold-lead follow-up they never have time for, and the review requests. One person can't be the dispatcher and the marketing engine — we are the marketing engine.",
  },
  {
    q: "We've tried marketing before.",
    a: "Most tree companies who say this tried Facebook ads from a generic agency that handed them leads, then the leads died on the phone. We close the loop: ads, answering, booking, follow-up, reviews — under one roof, one team, every dollar tracked from click to invoice. If we can't show the math after 60 days, we work free until we can.",
  },
  {
    q: "We don't need AI.",
    a: "You don't need AI — you need every call answered and every estimate followed up. AI is just how we do that 24/7 for less than the cost of a part-time office hire. The customer doesn't care what's behind it, and our system tells them it's an assistant if they ask. They care that their tree is gone.",
  },
  {
    q: "How much does it cost?",
    a: "Build is $2K–$5K depending on how many trucks and what we wire up. Monthly is $1,500–$3,000 for the management + tech, plus your Facebook ad spend (we recommend starting at $1,500–$3,000/mo in ads). Most founding-client tree companies see the build cost back in the first 30 days. Exact numbers come on the audit call once we see your job tickets and current call volume.",
  },
  {
    q: "What if it doesn't work?",
    a: "We guarantee a specific number of extra booked estimates in 60 days or we work free until we hit it. The audit is also free — you can verify the math before you sign anything, and you keep the audit either way.",
  },
  {
    q: "Why shouldn't I just hire another employee?",
    a: "Cost: an office hire is $40K–$55K a year plus benefits. We're a fraction of that, available 24/7 (no sick days, no turnover, no training), and we do four jobs instead of one (ads, phone, booking, follow-up). You'll still need a great office person — we just take the pieces that don't need a person to do them.",
  },
  {
    q: "How quickly can this be implemented?",
    a: "Day 1: audit kickoff. Day 3: ads launched. Day 7: phone routing live. Day 14: first booked estimates landing on your calendar. Day 21: review automation on, follow-up sequences running. You sign Monday, you're booking jobs by month-end.",
  },
  {
    q: "How are you different from every other marketing agency?",
    a: "Marketing agencies hand you leads and walk away. We close the loop. Every Facebook ad we run is tracked to the phone call it generated, to the estimate that got booked, to the job that got closed, to the review that drove the next call. One team, one dashboard, your name on the truck. And we only work with tree service companies — so the scripts, the qualification questions, the storm-call handling, and the ad creative are built for your industry, not borrowed from an HVAC playbook.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex min-h-14 w-full items-center justify-between gap-6 rounded-md py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
      >
        <span className="text-base font-medium text-fg sm:text-lg">{q}</span>
        <span
          className={cn(
            "flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line bg-surface/60 text-fg-muted transition-transform duration-300",
            open && "rotate-45 border-accent/40 text-accent",
          )}
        >
          <Plus className="h-4 w-4" aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-pretty text-sm leading-relaxed text-fg-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-3xl px-5 py-24 md:py-32">
        <SectionHeader
          eyebrow="FAQ"
          title="The 10 things every tree company owner asks."
          description="Straight answers. If you've still got questions after this, the growth audit is free."
        />

        <div className="mt-14">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
