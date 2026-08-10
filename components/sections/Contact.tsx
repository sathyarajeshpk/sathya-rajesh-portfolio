"use client";

import { useEffect, useId, useState } from "react";
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
  "Under 5 lakh",
  "5 to 15 lakh",
  "15 to 50 lakh",
  "Over 50 lakh",
  "Not sure yet",
];

const timelines = ["Under a month", "1 to 2 months", "3 to 6 months", "6 months plus", "Ongoing"];

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const FIELDS = [
  "name",
  "company",
  "email",
  "phone",
  "country",
  "service",
  "budget",
  "timeline",
  "description",
] as const;

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
    const data = new FormData(form);
    const payload = Object.fromEntries(
      FIELDS.map((key) => [key, String(data.get(key) ?? "").trim()])
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
            "That did not send. Please try again, or email sathyarajeshpk@gmail.com directly.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message:
          "Could not reach the server. Check your connection, or email sathyarajeshpk@gmail.com directly.",
      });
    }
  };

  return (
    <section id="contact" className="wrap border-t rule py-10">
      <h2 className="mb-4">Get in touch</h2>

      <p>
        Email <a href="mailto:sathyarajeshpk@gmail.com">sathyarajeshpk@gmail.com</a> or call{" "}
        <a href="tel:+919597996996">+91 95979 96996</a>. You can also use this form. Either way I
        usually reply within a day.
      </p>

      {status.state === "sent" ? (
        <div className="shade border rule p-5">
          <h3 className="mb-2">Thanks, I have got it</h3>
          <p>
            I read these myself and will get back to you within a day. If it is urgent, call or
            WhatsApp <a href="tel:+919597996996">+91 95979 96996</a>.
          </p>
          <p className="mb-0">
            <button
              type="button"
              onClick={() => setStatus({ state: "idle" })}
              className="text-[var(--link)] hover:underline"
            >
              Send another message
            </button>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset disabled={status.state === "sending"} className="disabled:opacity-60">
            <legend className="sr-only">Enquiry form</legend>

            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" htmlFor={`${id}-name`} required>
                <Input id={`${id}-name`} name="name" required autoComplete="name" />
              </Field>

              <Field label="Company" htmlFor={`${id}-company`}>
                <Input id={`${id}-company`} name="company" autoComplete="organization" />
              </Field>

              <Field label="Email" htmlFor={`${id}-email`} required>
                <Input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
              </Field>

              <Field label="Phone" htmlFor={`${id}-phone`}>
                <Input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" />
              </Field>

              <Field label="Country" htmlFor={`${id}-country`}>
                <Input id={`${id}-country`} name="country" autoComplete="country-name" />
              </Field>

              <Field label="What do you need" htmlFor={`${id}-service`} required>
                <Select
                  id={`${id}-service`}
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Pick one</option>
                  {services.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Rough budget" htmlFor={`${id}-budget`}>
                <Select id={`${id}-budget`} name="budget">
                  <option value="">Rather not say</option>
                  {budgets.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Timeline" htmlFor={`${id}-timeline`}>
                <Select id={`${id}-timeline`} name="timeline">
                  <option value="">Not sure</option>
                  {timelines.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field
              label="What are you trying to solve"
              htmlFor={`${id}-description`}
              required
              className="mb-4"
              hint="Got an RFP or an architecture diagram? Email it over and I will match it up with your message."
            >
              <Textarea
                id={`${id}-description`}
                name="description"
                required
                maxLength={5000}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="How things work now, what is going wrong, and what a good outcome looks like."
              />
            </Field>

            <button
              type="submit"
              className="border border-[var(--fg)] bg-[var(--fg)] px-5 py-2 text-[var(--bg)] hover:opacity-85 disabled:cursor-wait"
            >
              {status.state === "sending" ? "Sending..." : "Send"}
            </button>
          </fieldset>

          <div aria-live="polite">
            {status.state === "error" ? (
              <p className="mt-4 border-l-2 border-[var(--link)] pl-3">{status.message}</p>
            ) : null}
          </div>
        </form>
      )}
    </section>
  );
}
