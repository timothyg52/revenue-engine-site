"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { leadSchema, type LeadInput, revenueOptions } from "@/lib/leadSchema";
import { Button, ArrowCta } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const fieldBase =
  "block w-full min-h-12 rounded-xl border border-line bg-surface/80 px-4 py-3 text-sm text-fg placeholder:text-fg-dim outline-none transition-colors focus:border-accent/50 focus:bg-surface focus:ring-2 focus:ring-accent/20";

const labelBase = "block text-xs font-medium uppercase tracking-wider text-fg-dim mb-1.5";

export function LeadForm() {
  const [submitState, setSubmitState] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onTouched",
  });

  async function onSubmit(values: LeadInput) {
    setSubmitState("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitState("error");
        setServerError(data?.error || "Something went wrong. Try again.");
        return;
      }
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
      setServerError("Network error. Please try again.");
    }
  }

  if (submitState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex h-full min-h-[480px] flex-col items-center justify-center gap-4 rounded-2xl border border-accent/30 bg-accent/[0.04] p-8 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-canvas">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-display text-3xl text-fg">Got it.</h3>
        <p className="max-w-sm text-pretty text-sm text-fg-muted">
          We'll reach out within one business day with next steps. If it's
          urgent, book the strategy call directly &mdash; that's the fastest path.
        </p>
        <Button
          onClick={() => setSubmitState("idle")}
          variant="ghost"
          size="sm"
          className="mt-2"
        >
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-8"
    >
      <div>
        <h3 className="font-display text-2xl text-fg sm:text-3xl">
          Not ready to book?
        </h3>
        <p className="mt-1 text-sm text-fg-muted">
          Send your numbers — we&rsquo;ll reply by tomorrow with what we&rsquo;d
          actually do.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Your name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Smith"
            className={cn(fieldBase, errors.name && "border-red-500/50 focus:border-red-500/70")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="business" className={labelBase}>
            Business name
          </label>
          <input
            id="business"
            type="text"
            autoComplete="organization"
            placeholder="Bella Aesthetics"
            className={cn(fieldBase, errors.business && "border-red-500/50")}
            aria-invalid={!!errors.business}
            {...register("business")}
          />
          {errors.business ? (
            <p className="mt-2 text-sm text-red-400">{errors.business.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(615) 555-0142"
            className={cn(fieldBase, errors.phone && "border-red-500/50")}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            className={cn(fieldBase, errors.email && "border-red-500/50")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="monthlyRevenue" className={labelBase}>
          Monthly revenue
        </label>
        <select
          id="monthlyRevenue"
          className={cn(fieldBase, "appearance-none pr-10")}
          aria-invalid={!!errors.monthlyRevenue}
          defaultValue=""
          {...register("monthlyRevenue")}
        >
          <option value="" disabled>
            Select a range
          </option>
          {revenueOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.monthlyRevenue ? (
          <p className="mt-2 text-sm text-red-400">{errors.monthlyRevenue.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="problem" className={labelBase}>
          What&rsquo;s broken?
        </label>
        <textarea
          id="problem"
          rows={4}
          placeholder="We're getting leads but only closing 10%. Front desk misses calls. We don't track ROI on ads."
          className={cn(fieldBase, "resize-y", errors.problem && "border-red-500/50")}
          aria-invalid={!!errors.problem}
          {...register("problem")}
        />
        {errors.problem ? (
          <p className="mt-2 text-sm text-red-400">{errors.problem.message}</p>
        ) : null}
      </div>

      <AnimatePresence>
        {serverError ? (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs text-red-300"
          >
            {serverError}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        disabled={submitState === "submitting"}
        trailingIcon={
          submitState === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <ArrowCta />
          )
        }
        className="mt-1"
      >
        {submitState === "submitting" ? "Sending…" : "Get my custom audit"}
      </Button>

      <p className="text-xs text-fg-dim">
        By submitting, you agree to our terms. We don't spam — promise.
      </p>
    </form>
  );
}
