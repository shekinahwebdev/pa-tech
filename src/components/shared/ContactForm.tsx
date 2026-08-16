"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import {
  contactMethods,
  customerTypes,
  quoteServices,
} from "@/data/content";
import { site, whatsappUrl } from "@/lib/site";
import { PillButton } from "@/components/ui/PillButton";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  customerType: string;
  serviceNeeded: string;
  projectDetails: string;
  preferredContact: string;
};

const emptyForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  customerType: "",
  serviceNeeded: "",
  projectDetails: "",
  preferredContact: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!/^[\d+\s()-]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number so we can reach you.";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address, or leave this blank.";
  }
  if (values.preferredContact === "Email" && !values.email.trim()) {
    errors.email = "Email is required when that is your preferred contact method.";
  }
  if (values.location.trim().length < 2) {
    errors.location = "Tell us your city, community, or site location.";
  }
  if (!values.customerType) {
    errors.customerType = "Select the option that best describes you.";
  }
  if (!values.serviceNeeded) {
    errors.serviceNeeded = "Select the service you need help with.";
  }
  if (!values.preferredContact) {
    errors.preferredContact = "Choose how you would like us to follow up.";
  }

  return errors;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const searchParams = useSearchParams();
  const presetService = searchParams.get("service") ?? "";
  const initialService = quoteServices.includes(
    presetService as (typeof quoteServices)[number],
  )
    ? presetService
    : "";

  const [values, setValues] = useState<FormState>({
    ...emptyForm,
    serviceNeeded: initialService,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle",
  );

  const fieldClass =
    "min-h-12 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-offwhite outline-none transition placeholder:text-muted/70 focus:border-lime";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean };

      if (response.status === 503 || data.ok === false) {
        setStatus("ready");
        return;
      }

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  const summary = useMemo(
    () =>
      `Hello PA Tech Services, my name is ${values.fullName}. I need help with ${values.serviceNeeded || "your services"} in ${values.location || "Liberia"}.`,
    [values.fullName, values.serviceNeeded, values.location],
  );

  if (status === "ready") {
    return (
      <div className="border-t border-line pt-8">
        <h3 className="font-serif text-3xl">Quote form is ready to connect</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Online quote delivery is not connected to an email service yet, so this
          request has not been sent. Please call or WhatsApp PA Tech Services and
          we can take your details directly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PillButton href={site.phoneHref} variant="light">
            Call {site.phone}
          </PillButton>
          <PillButton href={whatsappUrl(summary)} variant="whatsapp" external>
            WhatsApp Us
          </PillButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn(compact && "pt-2")}>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName} htmlFor="fullName">
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className={fieldClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClass}
            placeholder="+231 ..."
          />
        </Field>
        <Field label="Email Address" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Location" error={errors.location} htmlFor="location">
          <input
            id="location"
            name="location"
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
            className={fieldClass}
            placeholder="City, community, or site"
          />
        </Field>
        <Field label="Customer Type" error={errors.customerType} htmlFor="customerType">
          <select
            id="customerType"
            name="customerType"
            value={values.customerType}
            onChange={(event) => update("customerType", event.target.value)}
            className={cn(fieldClass, "appearance-none bg-black")}
          >
            <option value="">Select one</option>
            {customerTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service Needed" error={errors.serviceNeeded} htmlFor="serviceNeeded">
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            value={values.serviceNeeded}
            onChange={(event) => update("serviceNeeded", event.target.value)}
            className={cn(fieldClass, "appearance-none bg-black")}
          >
            <option value="">Select a service</option>
            {quoteServices.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="Preferred Contact Method"
            error={errors.preferredContact}
            htmlFor="preferredContact"
          >
            <div id="preferredContact" className="flex flex-wrap gap-2 pt-2">
              {contactMethods.map((method) => (
                <label
                  key={method}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm",
                    values.preferredContact === method
                      ? "border-offwhite bg-offwhite text-black"
                      : "border-line text-offwhite/80 hover:border-offwhite",
                  )}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={values.preferredContact === method}
                    onChange={() => update("preferredContact", method)}
                    className="sr-only"
                  />
                  {method}
                </label>
              ))}
            </div>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Project Details" error={errors.projectDetails} htmlFor="projectDetails">
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={compact ? 4 : 5}
              value={values.projectDetails}
              onChange={(event) => update("projectDetails", event.target.value)}
              className={cn(fieldClass, "min-h-[140px] resize-y")}
              placeholder="Tell us what you need installed or what problem you are trying to solve."
            />
          </Field>
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-6 text-sm text-red-400" role="alert">
          The form could not be submitted. Please call or WhatsApp us instead.
        </p>
      ) : null}

      <div className="mt-10">
        <PillButton type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            "Request My Quote"
          )}
        </PillButton>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-muted"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
