import { useState } from "react";
import { z } from "zod";
import { brands } from "./brand-data";
import { sendFranchiseEnquiry } from "@/lib/email";

const franchisableBrands = brands.filter((b) => b.franchisable);

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone number").max(40),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  brand: z.string().trim().min(1, "Please select a brand of interest"),
  investment: z.string().trim().min(1, "Please indicate an investment range"),
  message: z.string().trim().max(2000).optional(),
});

type FormState = "idle" | "submitting" | "success" | "error";

function getFormErrorMessage(err: unknown) {
  if (err instanceof Error && err.message) return err.message;
  if (typeof err === "string") return err;
  return "Please email us directly or try again in a moment.";
}

export function FranchiseForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setState("submitting");
    try {
      await sendFranchiseEnquiry({ data: parsed.data });
      form.reset();
      setState("success");
    } catch (err) {
      console.error("[FranchiseForm] sendFranchiseEnquiry failed:", err);
      setErrorMessage(getFormErrorMessage(err));
      setState("error");
    }
  }

  if (state === "error") {
    return (
      <div className="border border-alabaster/15 bg-obsidian p-10 md:p-14">
        <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
          Something went wrong
        </span>
        <p className="mt-6 max-w-xl font-serif text-lg font-light leading-relaxed text-alabaster/70">
          {errorMessage} Please email us directly at{" "}
          <a href="mailto:contact@aankagroup.com" className="text-bronze hover:underline">
            contact@aankagroup.com
          </a>
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-10 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors hover:text-bronze"
        >
          Try again
          <span className="block h-px w-8 bg-alabaster" />
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="border border-alabaster/15 bg-obsidian p-10 md:p-14">
        <span className="font-sans text-[10px] uppercase tracking-luxury text-bronze">
          Enquiry Received
        </span>
        <h3 className="mt-6 font-serif text-3xl font-light leading-tight text-alabaster md:text-4xl">
          Thank you. <em className="italic">We'll be in touch.</em>
        </h3>
        <p className="mt-6 max-w-xl font-serif text-lg font-light leading-relaxed text-alabaster/70">
          A member of the Aanka Group team will review your enquiry and respond
          within two business days.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-10 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-luxury text-alabaster transition-colors hover:text-bronze"
        >
          Submit another enquiry
          <span className="block h-px w-8 bg-alabaster" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-6 gap-y-8" noValidate>
      <Field label="Full Name" name="name" error={errors.name} className="md:col-span-6" />
      <Field label="Email" name="email" type="email" error={errors.email} className="md:col-span-6" />
      <Field label="Phone" name="phone" type="tel" error={errors.phone} className="md:col-span-6" />
      <Field label="Country / City" name="country" error={errors.country} className="md:col-span-6" />

      <Select
        label="Brand of Interest"
        name="brand"
        error={errors.brand}
        className="md:col-span-6"
        options={[
          { value: "", label: "Select a brand" },
          ...franchisableBrands.map((b) => ({ value: b.slug, label: b.name })),
          { value: "any", label: "Open to recommendation" },
        ]}
      />

      <Select
        label="Investment Range"
        name="investment"
        error={errors.investment}
        className="md:col-span-6"
        options={[
          { value: "", label: "Select a range" },
          { value: "500k-1m", label: "AED 500K – 1M" },
          { value: "1m-2m", label: "AED 1M – 2M" },
          { value: "2m-4m", label: "AED 2M – 4M" },
          { value: "4m+", label: "AED 4M +" },
        ]}
      />

      <label className="col-span-12 block">
        <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
          Message
        </span>
        <textarea
          rows={5}
          name="message"
          maxLength={2000}
          placeholder="Tell us about your background and interest"
          className="mt-3 w-full border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster placeholder:text-alabaster/35 focus:border-bronze focus:outline-none"
        />
        {errors.message ? (
          <span className="mt-2 block font-sans text-[11px] text-destructive">{errors.message}</span>
        ) : null}
      </label>

      <div className="col-span-12 mt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group inline-flex items-center gap-4 bg-alabaster px-8 py-4 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-colors duration-500 hover:bg-bronze hover:text-alabaster disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Submit Franchise Enquiry"}
          <span className="block h-px w-8 bg-obsidian transition-all duration-500 group-hover:w-12 group-hover:bg-alabaster" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`col-span-12 block ${className}`}>
      <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
        {label}
      </span>
      <input
        type={type}
        name={name}
        maxLength={255}
        className="mt-3 w-full border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster placeholder:text-alabaster/35 focus:border-bronze focus:outline-none"
      />
      {error ? (
        <span className="mt-2 block font-sans text-[11px] text-destructive">{error}</span>
      ) : null}
    </label>
  );
}

function Select({
  label,
  name,
  error,
  options,
  className = "",
}: {
  label: string;
  name: string;
  error?: string;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <label className={`col-span-12 block ${className}`}>
      <span className="block font-sans text-[10px] uppercase tracking-luxury text-bronze">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-3 w-full appearance-none border-0 border-b border-alabaster/20 bg-transparent py-3 font-serif text-lg font-light text-alabaster focus:border-bronze focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-obsidian">
            {o.label}
          </option>
        ))}
      </select>
      {error ? (
        <span className="mt-2 block font-sans text-[11px] text-destructive">{error}</span>
      ) : null}
    </label>
  );
}
