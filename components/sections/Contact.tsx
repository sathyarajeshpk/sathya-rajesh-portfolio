"use client";

import { useEffect, useId, useState } from "react";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";

const services = [
  "Azure Data Engineering",
  "Azure Data Factory",
  "Azure Databricks",
  "Microsoft Fabric",
  "Data Warehousing",
  "Power BI Dashboard",
  "Business Intelligence",
  "Analytics",
  "AI Solution",
  "Automation",
  "Business Website",
  "Corporate Website",
  "Landing Page",
  "E-Commerce",
  "Web Application",
  "Android App",
  "iOS App",
  "Consulting",
  "Training",
  "Other",
];

const budgets = [
  "Under ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000 – ₹50,00,000",
  "₹50,00,000+",
  "Enterprise — contact for quote",
];

const timelines = [
  "Less than 1 month",
  "1–2 months",
  "3–6 months",
  "6+ months",
  "Ongoing / retainer",
];

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

export default function Contact() {
  const id = useId();
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<PrefillDetail>).detail;
      if (detail?.service) setService(detail.service);
      if (detail?.description) setDescription((current) => current || detail.description || "");
      setStatus((current) => (current.state === "sent" ? { state: "idle" } : current));
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener(PREFILL_EVENT, handler);
    return () => window.removeEventListener(PREFILL_EVENT, handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(
      ["name", "company", "email", "phone", "country", "service", "budget", "timeline", "description"].map(
        (key) => [key, String(formData.get(key) ?? "").trim()]
      )
    );

    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus({ state: "sent" });
        form.reset();
        setService("");
        setDescription("");
      } else {
        setStatus({
          state: "error",
          message:
            result.message ||
            "That didn't go through. Please try again, or email sathyarajeshpk@gmail.com directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message:
          "Couldn't reach the server. Check your connection, or email sathyarajeshpk@gmail.com directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="09"
          label="Contact"
          title={
            <>
              Tell me what you&rsquo;re building.
              <br />I reply within a working day.
            </>
          }
          aside={
            <div className="space-y-4">
              <div>
                <p className="label mb-1 text-subtle">Email</p>
                <a
                  href="mailto:sathyarajeshpk@gmail.com"
                  className="link-underline text-[0.9375rem]"
                >
                  sathyarajeshpk@gmail.com
                </a>
              </div>
              <div>
                <p className="label mb-1 text-subtle">Phone</p>
                <a href="tel:+919597996996" className="link-underline nums text-[0.9375rem]">
                  +91 95979 96996
                </a>
              </div>
            </div>
          }
        />

        <div className="mt-14 grid gap-x-10 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-9 lg:col-start-3">
            {status.state === "sent" ? (
              <Reveal>
                <div className="border-t border-rule py-16">
                  <p className="label text-accent">Received</p>
                  <h3 className="mt-5 text-display-sm font-normal">
                    Thank you — that&rsquo;s in my inbox.
                  </h3>
                  <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted">
                    I read every enquiry myself and will come back to you within one working day.
                    If it&rsquo;s urgent, call or WhatsApp{" "}
                    <a href="tel:+919597996996" className="link-underline nums text-[var(--fg)]">
                      +91 95979 96996
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ state: "idle" })}
                    className="label link-underline mt-8 text-muted hover:text-[var(--fg)]"
                  >
                    Send another enquiry <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} noValidate={false} className="border-t border-rule pt-10">
                  <fieldset
                    disabled={status.state === "sending"}
                    className="transition-opacity duration-200 disabled:opacity-60"
                  >
                    <legend className="sr-only">Project enquiry</legend>

                    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                      <Field label="Full name" htmlFor={`${id}-name`} required>
                        <Input id={`${id}-name`} name="name" required placeholder="Your name" autoComplete="name" />
                      </Field>

                      <Field label="Company" htmlFor={`${id}-company`}>
                        <Input id={`${id}-company`} name="company" placeholder="Optional" autoComplete="organization" />
                      </Field>

                      <Field label="Email" htmlFor={`${id}-email`} required>
                        <Input
                          id={`${id}-email`}
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          autoComplete="email"
                        />
                      </Field>

                      <Field label="Phone" htmlFor={`${id}-phone`}>
                        <Input
                          id={`${id}-phone`}
                          name="phone"
                          type="tel"
                          placeholder="Optional"
                          autoComplete="tel"
                        />
                      </Field>

                      <Field label="Country" htmlFor={`${id}-country`}>
                        <Input
                          id={`${id}-country`}
                          name="country"
                          placeholder="Optional"
                          autoComplete="country-name"
                        />
                      </Field>

                      <Field label="Service needed" htmlFor={`${id}-service`} required>
                        <Select
                          id={`${id}-service`}
                          name="service"
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="">Select a service</option>
                          {services.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      </Field>

                      <Field label="Budget range" htmlFor={`${id}-budget`}>
                        <Select id={`${id}-budget`} name="budget">
                          <option value="">Prefer not to say</option>
                          {budgets.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      </Field>

                      <Field label="Timeline" htmlFor={`${id}-timeline`}>
                        <Select id={`${id}-timeline`} name="timeline">
                          <option value="">Not sure yet</option>
                          {timelines.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      </Field>

                      <Field
                        label="What are you trying to solve?"
                        htmlFor={`${id}-description`}
                        required
                        className="sm:col-span-2"
                        hint="Have an RFP or architecture diagram? Email it to sathyarajeshpk@gmail.com and I'll match it to your enquiry."
                      >
                        <Textarea
                          id={`${id}-description`}
                          name="description"
                          required
                          maxLength={5000}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="The current setup, what's going wrong, and what a good outcome looks like."
                        />
                      </Field>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-rule pt-8">
                      <button
                        type="submit"
                        className="label inline-flex h-12 items-center rounded-full px-7 transition-opacity duration-200 hover:opacity-85 disabled:cursor-wait"
                        style={{ background: "var(--fg)", color: "var(--bg)" }}
                      >
                        {status.state === "sending" ? "Sending…" : "Send enquiry"}
                      </button>
                      <p className="label text-subtle">No newsletter. No CRM sequence.</p>
                    </div>
                  </fieldset>

                  <div aria-live="polite" className="mt-6 empty:mt-0">
                    {status.state === "error" ? (
                      <p
                        className="border-l-2 py-2 pl-4 text-[0.9375rem]"
                        style={{ borderColor: "var(--accent)", color: "var(--fg)" }}
                      >
                        {status.message}
                      </p>
                    ) : null}
                  </div>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
