"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

// Web3Forms access key. This is public by design (the form runs client-side on
// a static host), so committing it is safe — it is rate-limited and spam-filtered
// on Web3Forms' side, and grants no account access. Submissions are emailed to
// the address this key was created for.
const WEB3FORMS_ACCESS_KEY = "ae1e293a-2496-473f-9373-a7217fd97391";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: ContactInput) => {
    // Honeypot: a filled "company" field means a bot. Silently pretend success
    // and never hit the network, so the trap isn't revealed.
    if (values.company) {
      toast.success("Thanks — we'll be in touch within one business day.");
      reset();
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New enquiry from Accountants Brisbane North",
          from_name: "Accountants Brisbane North website",
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });
      const data = (await res.json()) as { success: boolean };
      if (!data.success) throw new Error("Request failed");
      toast.success("Thanks — we'll be in touch within one business day.");
      reset();
    } catch {
      toast.error(
        "Sorry, something went wrong. Please call us or try again shortly.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, not announced to screen readers. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
        </Field>
      </div>

      <Field id="phone" label="Phone (optional)" error={errors.phone?.message}>
        <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>

      <Field id="message" label="How can we help?" error={errors.message?.message}>
        <Textarea id="message" rows={5} {...register("message")} />
      </Field>

      {/* TODO(client): add Cloudflare Turnstile widget here when the site key is
          configured (NEXT_PUBLIC_TURNSTILE_SITE_KEY), setting turnstileToken. */}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="animate-spin" aria-hidden />}
        Send enquiry
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
