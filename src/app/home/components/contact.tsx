"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", data);

      // Reset form on success
      form.reset();

      // You can add success notification here
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add error notification here
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-8 lg:px-16 py-20">
      <div className="mx-auto container max-w-6xl grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-dark-blue to-foreground rounded-none p-8 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #27ea9c 0px,
                #27ea9c 1px,
                transparent 1px,
                transparent 40px
              ), repeating-linear-gradient(
                -45deg,
                #27ea9c 0px,
                #27ea9c 1px,
                transparent 1px,
                transparent 40px
              )`,
            }}
          />
        </div>

        {/* Left Side - Contact Info */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-[#27ea9c]/30 rounded-full px-4 py-2">
            <Mail className="w-3 h-3 mr-2 text-[#27ea9c]" />
            <span className="text-gray-200 font-medium text-sm">
              Contact Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to transform your{" "}
            <span className="text-[#27ea9c]">transportation systems?</span>
          </h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Interested in our services or partnership opportunities? Our team of
            transportation technology experts is here to discuss how we can help
            optimize your infrastructure, traffic management, and safety
            systems.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="bg-[#27ea9c]/20 p-3 rounded-none">
                <Phone className="w-5 h-5 text-[#27ea9c]" />
              </div>
              <span>+1 (701) 555-0123</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="bg-[#27ea9c]/20 p-3 rounded-none">
                <Mail className="w-5 h-5 text-[#27ea9c]" />
              </div>
              <span>info@infinicitylabs.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="bg-[#27ea9c]/20 p-3 rounded-none">
                <MapPin className="w-5 h-5 text-[#27ea9c]" />
              </div>
              <span>North Dakota State University, Fargo, ND</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="bg-[#27ea9c]/20 p-3 rounded-none">
                <Clock className="w-5 h-5 text-[#27ea9c]" />
              </div>
              <span>Monday - Friday, 8:00 AM - 5:00 PM CST</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 relative z-10"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-none p-6 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="w-full p-4  py-7 rounded-lg bg-white/10 border border-[#27ea9c]/30 text-white placeholder:text-gray-300/70 focus:outline-none focus:ring-2 focus:ring-[#27ea9c]/50 focus:border-[#27ea9c]/50 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 py-7 rounded-lg bg-white/10 border border-[#27ea9c]/30 text-white placeholder:text-gray-300/70 focus:outline-none focus:ring-2 focus:ring-[#27ea9c]/50 focus:border-[#27ea9c]/50 transition-all duration-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-4 py-7 rounded-lg bg-white/10 border border-[#27ea9c]/30 text-white placeholder:text-gray-300/70 focus:outline-none focus:ring-2 focus:ring-[#27ea9c]/50 focus:border-[#27ea9c]/50 transition-all duration-300 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg hover:bg-[#22d18a] shadow-lg shadow-[#27ea9c]/20 transition-all duration-300 py-7 font-semibold disabled:opacity-50 disabled:cursor-not-allowed bg-neon text-dark-blue px-5  focus:outline-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
