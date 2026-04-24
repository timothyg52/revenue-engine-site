import { z } from "zod";

export const revenueOptions = [
  "Under $30K",
  "$30K–$100K",
  "$100K–$300K",
  "$300K+",
] as const;

export const leadSchema = z.object({
  name: z.string().min(2, "Tell us your name").max(80),
  business: z.string().min(2, "Business name required").max(120),
  phone: z
    .string()
    .min(10, "Phone number looks short")
    .max(20)
    .regex(/^[0-9+()\-.\s]+$/, "Numbers and +-() only"),
  email: z.string().email("Valid email required").max(120),
  monthlyRevenue: z.enum(revenueOptions),
  problem: z.string().min(10, "A few words on what's broken").max(2000),
});

export type LeadInput = z.infer<typeof leadSchema>;
