"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button, ArrowCta } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "#frameworks", label: "Frameworks" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-line bg-base/70 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5"
        >
          <a
            href="#top"
            className="font-display text-xl tracking-tight text-fg hover:text-accent transition-colors"
          >
            Revenue Engine
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href="#book"
              variant="primary"
              size="sm"
              trailingIcon={<ArrowCta />}
              className="hidden sm:inline-flex"
            >
              Book a Call
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-fg backdrop-blur md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-base/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-start justify-center gap-1 px-8 pt-20">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  className="font-display text-5xl text-fg hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Button
                  href="#book"
                  size="lg"
                  trailingIcon={<ArrowCta />}
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
