import { z } from "zod";

export const contentSchema = z.object({
  firmInfo: z.object({
    name: z.string(),
    tagline: z.string(),
    established: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.object({
      line1: z.string(),
      line2: z.string(),
      city: z.string(),
      district: z.string(),
      pincode: z.string(),
      mapUrl: z.string(),
    }),
  }),
  hero: z.object({
    headline: z.string(),
    subheadline: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
  }),
  services: z.array(z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
  })),
  whyChoose: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
  testimonials: z.array(z.object({
    id: z.number(),
    name: z.string(),
    location: z.string(),
    rating: z.number(),
    text: z.string(),
    date: z.string(),
  })),
  process: z.array(z.object({
    step: z.number(),
    title: z.string(),
    description: z.string(),
  })),
});

export type Content = z.infer<typeof contentSchema>;
