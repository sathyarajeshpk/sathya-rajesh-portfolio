"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const services = [
  "Business Website", "Corporate Website", "Landing Page", "E-Commerce",
  "Web Application", "Android App", "iOS App", "AI Solution",
  "Microsoft Fabric", "Power BI Dashboard", "Azure Data Engineering",
  "Azure Data Factory", "Azure Databricks", "Data Warehousing",
  "Business Intelligence", "Analytics", "Automation", "Training", "Consulting", "Other",
];

const budgets = [
  "Under ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000 – ₹50,00,000",
  "₹50,00,000+",
  "Enterprise (Contact for Quote)",
];

const timelines = [
  "Less than 1 month", "1–2 months", "3–6 months", "6+ months", "Ongoing / Retainer",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build data manually — skip the file attachment to avoid JSON serialization errors
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
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-fabric-100 dark:bg-fabric-900/30 text-fabric-700 dark:text-fabric-400 text-sm font-semibold mb-6"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
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

        <div ref={ref} className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-800"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
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
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                  <Input name="name" required placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company</label>
                  <Input name="company" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                  <Input name="email" type="email" required placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                  <Input name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Country</label>
                  <Input name="country" placeholder="India" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Needed *</label>
                  <Select name="service" required>
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Budget Range</label>
                  <Select name="budget">
                    <option value="">Select budget...</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Timeline</label>
                  <Select name="timeline">
                    <option value="">Select timeline...</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Description *</label>
                <Textarea
                  name="description"
                  required
                  placeholder="Describe your project, goals, and any specific requirements..."
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Attachment</label>
                <Input
                  name="attachment"
                  type="file"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-fabric-50 file:text-fabric-700 hover:file:bg-fabric-100"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Upload RFP, architecture diagrams, or reference materials (Max 10MB)
                </p>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3 h-auto text-base">
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sending...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" />Send Enquiry</>
                )}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
