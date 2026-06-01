"use client";

import * as React from "react";
import { motion } from "motion/react";
import { FileDown, Loader2, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadMagnetSchema, type LeadMagnetInput } from "@/lib/leadSchema";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

export function LeadMagnet() {
  const [state, setState] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadMagnetInput>({
    resolver: zodResolver(leadMagnetSchema),
    mode: "onTouched",
  });

  async function onSubmit(values: LeadMagnetInput) {
    setState("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState("error");
        setServerError(data?.error || "Something went wrong. Try again.");
        return;
      }
      setState("success");
      reset();
    } catch {
      setState("error");
      setServerError("Network error. Please try again.");
    }
  }

  return (
    <section aria-label="5-Leak Audit download" className="relative border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-2xl border border-line bg-elevated/70 px-6 py-10 sm:px-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                  <FileDown className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-fg-dim">
                  Not ready to book the audit call?
                </span>
              </div>
              <h3 className="font-display text-balance text-3xl text-fg sm:text-4xl">
                The Tree Company Revenue Leak Audit Worksheet.
              </h3>
              <p className="max-w-lg text-pretty text-sm leading-relaxed text-fg-muted sm:text-base">
                Free PDF. The eight places tree service companies leak revenue
                — from missed storm calls to unfollowed-up estimates — and how
                to plug each one. Fill it out yourself or use it on the audit
                call. No upsell.
              </p>
            </div>

            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/[0.06] px-5 py-4"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent text-canvas">
                  <Check className="h-5 w-5" />
                </span>
                <p className="text-sm text-fg">
                  Check your inbox in the next 2 minutes. — Tim
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="leadmagnet-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="leadmagnet-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@yourbusiness.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                    className={cn(
                      "min-h-[48px] flex-1 rounded-xl border border-line bg-surface/80 px-4 text-sm text-fg placeholder:text-fg-dim outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/20",
                      errors.email && "border-red-500/50",
                    )}
                  />
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-medium text-canvas transition-colors hover:bg-accent-hover disabled:opacity-50"
                  >
                    {state === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Sending…
                      </>
                    ) : (
                      "Send the PDF"
                    )}
                  </button>
                </div>
                {errors.email ? (
                  <p className="text-sm text-red-400">{errors.email.message}</p>
                ) : null}
                {serverError ? (
                  <p className="text-sm text-red-400">{serverError}</p>
                ) : null}
                <p className="text-xs text-fg-dim">
                  No spam. Unsubscribe link in the email.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
