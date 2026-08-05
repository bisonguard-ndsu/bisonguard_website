"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  // Phone,
  // MapPin,
  Clock,
  ArrowRight,
  Loader,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendFormSubmissionEmail } from "@/services/emailService";
import Reveal from "@/components/ui/reveal";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Navy field, hairline border, neon focus. Shared by inputs and textarea. */
const fieldClasses =
  "h-auto w-full rounded-none border border-navy-600 bg-navy-950/60 px-4 py-3.5 text-base md:text-base text-white shadow-none transition-colors duration-300 placeholder:text-ink-300/50 hover:border-navy-600/80 focus-visible:border-neon focus-visible:ring-2 focus-visible:ring-neon/40 focus-visible:ring-offset-0 aria-invalid:border-red-400/70";

const labelClasses =
  "text-xs font-medium uppercase tracking-[0.14em] text-ink-300";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await sendFormSubmissionEmail(data);

      // Reset form on success
      form.reset();

      // You can add success notification here
      toast.success("Message sent successfully!", {
        description:
          "Your message has successfully been sent to InfiniCity Labs. We'll get back to you very soon.",
        icon: <CheckCircle className="text-neon w-6 h-6 mr-4" />,
        richColors: true,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add error notification here
      toast.error("Error sending message. Please try again.", {
        icon: <XCircle className="text-destructive w-6 h-6 mr-4" />,
        richColors: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-navy-950"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="bloom pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] opacity-40"
      />

      <div className="section-y section-x relative">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — the pitch and the direct routes in */}
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-neon" aria-hidden="true" />
                <span className="eyebrow text-neon">Contact Us</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-3xl font-bold leading-[1.12] text-white md:text-4xl lg:text-[2.75rem]">
                Ready to transform your{" "}
                <span className="text-neon">
                  infrastructure, mobility, and smart systems?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bluish-white/75 md:text-lg">
                Interested in our services or partnership opportunities? Our
                team of infrastructure, mobility, and smart systems technology
                experts is here to discuss how we can help optimize your
                infrastructure, traffic management, and safety systems.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-12 border-t border-navy-700">
                {/* <div className="flex items-start gap-5 border-b border-navy-700 py-6">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-neon" aria-hidden="true" />
                  <div className="space-y-1 text-bluish-white/80">
                    <p>+1 (732) 322-8385</p>
                    <p>+233 (208) 991-953</p>
                    <p>+233 (556) 673-060</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-5 border-b border-navy-700 py-6">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-neon"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 space-y-1">
                    <a
                      href="mailto:info@infinicitylabs.org"
                      className="block break-words text-bluish-white/85 transition-colors duration-300 hover:text-neon"
                    >
                      info@infinicitylabs.org
                    </a>
                    <a
                      href="mailto:research@infinicitylabs.org"
                      className="block break-words text-bluish-white/85 transition-colors duration-300 hover:text-neon"
                    >
                      research@infinicitylabs.org
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-5 border-b border-navy-700 py-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon" aria-hidden="true" />
                  <div className="space-y-1 text-bluish-white/80">
                    <p>USA</p>
                    <p>Ghana</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-5 border-b border-navy-700 py-6">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-neon"
                    aria-hidden="true"
                  />
                  <span className="text-bluish-white/85">
                    Monday - Friday, 8:00 AM - 5:00 PM CST
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — the form */}
          <Reveal delay={0.2}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 border border-navy-600 bg-navy-900/60 p-6 sm:p-8 lg:p-10"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Your Name</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="name"
                          className={fieldClasses}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          className={fieldClasses}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClasses}>
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          className={`${fieldClasses} min-h-[9rem] resize-none`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group h-auto w-full rounded-none bg-neon px-6 py-4 text-sm font-semibold text-navy-950 transition-colors duration-300 hover:bg-neon-bright has-[>svg]:px-6 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {isSubmitting ? (
                    <Loader className="animate-spin ml-2 h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Button>
              </form>
            </Form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
