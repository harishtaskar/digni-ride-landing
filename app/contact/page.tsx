"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "your_public_key") {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId.includes("your") ||
      templateId.includes("your") ||
      publicKey.includes("your")
    ) {
      toast({
        title: "Configuration Error",
        description:
          "Please set up your real EmailJS credentials in .env.local (Service ID, Template ID, and Public Key).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      );

      console.log("EmailJS Success:", result.text);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      formRef.current.reset();
    } catch (error: any) {
      console.error("EmailJS Full Error:", error);
      toast({
        title: "Submission Failed",
        description:
          error?.text ||
          "Failed to send message. Please check the console for details.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <section className="flex-1 container mx-auto px-4 py-32 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="from_name">Name</Label>
            <Input id="from_name" name="from_name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reply_to">Email</Label>
            <Input id="reply_to" name="reply_to" type="email" placeholder="Your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <textarea 
              id="message" 
              name="message"
              required
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
