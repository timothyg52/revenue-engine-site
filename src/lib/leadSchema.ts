import { z } from "zod";

export const revenueOptions = [
  "Under $30K",
  "$30K–$100K",
  "$100K–$300K",
  "$300K+",
] as const;

const FRIENDLY = {
  name: "What's your name?",
  business: "What's the name of your business?",
  phone: "Include your area code.",
  email: "Double-check that email.",
  revenue: "Pick a revenue range.",
  problem: "Tell us what's broken — even one sentence helps.",
} as const;

export const leadSchema = z.object({
  name: z
    .string({ message: FRIENDLY.name })
    .trim()
    .min(2, { message: FRIENDLY.name })
    .max(80, { message: "Keep your name under 80 characters." }),
  business: z
    .string({ message: FRIENDLY.business })
    .trim()
    .min(2, { message: FRIENDLY.business })
    .max(120, { message: "Keep the business name under 120 characters." }),
  phone: z
    .string({ message: FRIENDLY.phone })
    .trim()
    .min(10, { message: FRIENDLY.phone })
    .max(20, { message: "That phone number looks too long." })
    .regex(/^[0-9+()\-.\s]+$/, { message: FRIENDLY.phone }),
  email: z
    .string({ message: FRIENDLY.email })
    .trim()
    .email({ message: FRIENDLY.email })
    .max(120, { message: FRIENDLY.email }),
  monthlyRevenue: z.enum(revenueOptions, { message: FRIENDLY.revenue }),
  problem: z
    .string({ message: FRIENDLY.problem })
    .trim()
    .min(10, { message: FRIENDLY.problem })
    .max(2000, { message: "Keep it under 2,000 characters." }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const leadMagnetSchema = z.object({
  email: z
    .string({ message: FRIENDLY.email })
    .trim()
    .email({ message: FRIENDLY.email })
    .max(120, { message: FRIENDLY.email }),
});

export type LeadMagnetInput = z.infer<typeof leadMagnetSchema>;
