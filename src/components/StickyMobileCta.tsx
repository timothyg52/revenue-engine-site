"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  const [show, setShow] = React.useState(false);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Show only after the hero has scrolled out of view.
        setShow(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -40% 0px" },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Render only on mobile widths via the `md:hidden` class on the wrapper.
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
      <AnimatePresence>
        {show ? (
          <motion.div
            key="cta"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex justify-end px-4 pb-4"
          >
            <a
              href="#book"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-canvas shadow-[0_12px_40px_-8px_rgba(232,255,92,0.5),0_0_0_1px_rgba(232,255,92,0.4)] transition-colors active:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
