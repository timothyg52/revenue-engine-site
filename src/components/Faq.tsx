"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "How fast can you have my system live?",
    a: "Most clients are live in 14–21 days. The audit takes about 3 days, build is 10–14, and launch with optimization runs from day 18 onward.",
  },
  {
    q: "What's this actually going to cost me?",
    a: "Most systems run $2K–$5K to build plus a monthly optimization retainer. We quote on the strategy call after seeing your numbers — no generic packages.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. We handle every integration end to end — phone setup, CRM wiring, calendar sync. You'll need to give us access and answer a few intake questions about how you sell. That's it.",
  },
  {
    q: "What CRMs do you work with?",
    a: "GoHighLevel, HubSpot, Salesforce, Pipedrive, Zoho, Keap, Calendly, Acuity, and Google Calendar. If you're on something else, send it over — we've probably integrated it before.",
  },
  {
    q: "What if my leads don't respond to AI?",
    a: "Two things. First, our agents disclose they're AI when asked — no shady stuff. Second, the data so far: response rates are 2–4x higher than human follow-up, because the AI hits leads in under 60 seconds, every time. If a prospect wants a human, we hand them off instantly.",
  },
  {
    q: "Do you work outside Nashville?",
    a: "Yes — we're Nashville-based but most of our work is remote. We currently support clients across Tennessee, Georgia, Texas, and Florida. The systems work anywhere; the relationships are easier when you're local to us.",
  },
  {
    q: "How do I know it's actually working?",
    a: "You get a live dashboard with cost-per-booked-appointment, source attribution, and weekly performance reports. If a system isn't producing, we kill it — we don't keep you on retainer for vanity metrics.",
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
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
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
          title="Straight answers."
          description="If you've still got questions after this, the strategy call is free."
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
