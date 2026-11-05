import { z } from "zod";
import { contactTopics } from "@/content/site";

/** Shared by the form (client) and /api/contact (server). */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120),
  email: z.string().trim().email("Enter an email address we can reply to, like name@agency.gov."),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  topic: z.enum(contactTopics, { errorMap: () => ({ message: "Choose what this is about." }) }),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more — at least 20 characters.")
    .max(5000, "Keep it under 5,000 characters."),
  /** Honeypot. Real people never see or fill this. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
