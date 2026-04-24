"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  { prefix: "$", value: 2, suffix: "M+", label: "in pipeline generated" },
  { value: 12000, suffix: "+", label: "leads nurtured" },
  { value: 3, suffix: "x", label: "avg. booking rate lift" },
  { value: 24, suffix: "/7", label: "always-on response" },
];

function format(n: number, decimals = 0) {
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return decimals ? n.toFixed(decimals) : Math.round(n).toString();
}

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease });
    const unsub = mv.on("change", (v) => setDisplay(format(v, decimals)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, decimals, mv]);

  return <span ref={ref}>{display}</span>;
}

export function SocialProof() {
  return (
    <section
      aria-label="Results at a glance"
      className="relative border-b border-line bg-canvas"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              className="flex flex-col gap-1 px-2 py-4 md:px-6"
            >
              <div className="font-display text-3xl text-fg sm:text-4xl md:text-5xl">
                {s.prefix ?? ""}
                <CountUp to={s.value} decimals={s.decimals ?? 0} />
                {s.suffix ?? ""}
              </div>
              <div className="text-sm text-fg-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
