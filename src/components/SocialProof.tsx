"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  "Two years building lead systems",
  "150+ clients served",
  "Nashville-based",
  "On-camera guarantee: you're always talking to me",
];

export function SocialProof() {
  return (
    <section
      aria-label="Founder credentials"
      className="relative border-b border-line bg-canvas"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-8">
        <ul className="flex flex-col items-stretch divide-line text-center md:flex-row md:items-center md:divide-x">
          {items.map((label, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="flex-1 px-2 py-3 text-sm leading-snug text-fg-muted md:px-6 md:py-2"
            >
              {label}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
