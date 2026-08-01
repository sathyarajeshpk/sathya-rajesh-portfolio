"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const services = [
  "Business Website",
  "Corporate Website",
  "Landing Page",
  "E-Commerce",
  "Web Application",
  "Android App",
  "iOS App",
  "AI Solution",
  "Microsoft Fabric",
  "Power BI Dashboard",
  "Azure Data Engineering",
  "Azure Data Factory",
  "Azure Databricks",
  "Data Warehousing",
  "Business Intelligence",
  "Analytics",
  "Automation",
  "Training",
  "Consulting",
  "Other",
];

const budgets = [
  "Under INR 5,00,000",
  "INR 5,00,000 - INR 15,00,000",
  "INR 15,00,000 - INR 50,00,000",
  "INR 50,00,000+",
  "Enterprise (Contact for Quote)",
];

const timelines = [
  "Less than 1 month",
  "1-2 months",
  "3-6 months",
  "6+ months",
  "Ongoing / Retainer",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{ service?: string; description?: string }>;

      if (customEvent.detail?.service) {
        setSelectedService(customEvent.detail.service);
      }

      if (customEvent.detail?.description) {
        setDescriptionValue((currentValue) => currentValue || customEvent.detail?.description || "");
      }

      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("portfolio:prefill-service", handlePrefill as EventListener);
    return () => {
      window.removeEventListener("portfolio:prefill-service", handlePrefill as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      description: formData.get("description") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        form.reset();
        setSelectedService("");
        setDescriptionValue("");
      } else {
        alert("Error: " + (result.message || "Something went wrong. Please try again."));
        console.error("Server error:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white py-24 dark:bg-slate-950 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block rounded-full bg-fabric-100 px-4 py-1.5 text-sm font-semibold text-fabric-700 dark:bg-fabric-900/30 dark:text-fabric-400"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Start Your <span className="text-gradient">Project</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Tell me about your project. I&apos;ll respond within 24 hours.
          </motion.p>
        </div>

        <div ref={ref} className="mx-auto max-w-4xl">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-12 text-center dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
              <p className="mb-6 text-slate-600 dark:text-slate-400">
                Thank you for reaching out. I&apos;ll review your project details and get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900 md:p-12"
            >
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
                  <Input name="name" required placeholder="John Doe" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
                  <Input name="company" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                  <Input name="email" type="email" required placeholder="john@company.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                  <Input name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Country</label>
                  <Input name="country" placeholder="India" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Service Needed *</label>
                  <Select
                    name="service"
                    required
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Budget Range</label>
                  <Select name="budget">
                    <option value="">Select budget...</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Timeline</label>
                  <Select name="timeline">
                    <option value="">Select timeline...</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Project Description *</label>
                <Textarea
                  name="description"
                  required
                  placeholder="Describe your project, goals, and any specific requirements..."
                  value={descriptionValue}
                  onChange={(event) => setDescriptionValue(event.target.value)}
                />
              </div>

              <div className="mb-8">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Attachment</label>
                <Input
                  name="attachment"
                  type="file"
                  className="file:mr-4 file:rounded-lg file:border-0 file:bg-fabric-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-fabric-700 hover:file:bg-fabric-100"
                />
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Upload RFP, architecture diagrams, or reference materials (Max 10MB)
                </p>
              </div>

              <Button type="submit" disabled={isSubmitting} className="h-auto w-full px-8 py-3 text-base sm:w-auto">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Enquiry
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
