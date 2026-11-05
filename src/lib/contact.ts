import { z } from "zod";

export const inquiryReasons = [
  "Product inquiry",
  "Project or partnership",
  "Research collaboration",
  "Careers",
  "Something else",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer.")
    .regex(/^[^\r\n]+$/, "Please enter your name on one line."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),
  organization: z
    .string()
    .trim()
    .max(150, "Please use 150 characters or fewer.")
    .optional()
    .default(""),
  reason: z.enum(inquiryReasons).optional().default("Product inquiry"),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more, using at least 20 characters.")
    .max(5000, "Please keep your message under 5,000 characters."),
  website: z.string().max(200).optional().default(""),
});
