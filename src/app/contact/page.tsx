"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Loader2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const SERVICE_OPTIONS = [
  { value: "ai-workflow-automation", label: "AI Workflow Automation" },
  { value: "custom-ai-agents", label: "Custom AI Agents & Assistants" },
  { value: "backend-and-ai-integration", label: "Backend Development & AI Integration" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const BUDGET_OPTIONS = [
  "Less than $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Exploring / Flexible",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "ai-workflow-automation";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: preselectedService,
    description: "",
    budget: "",
    preferredContact: "Email",
    botField: "", // Honeypot field
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");
    setStatusMessage("");

    // Client-side quick check
    const clientErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      clientErrors.name = "Please enter your full name (at least 2 characters).";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      clientErrors.email = "Please enter a valid email address.";
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      clientErrors.description =
        "Please provide a few details about what you need built (at least 10 characters).";
    }

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setStatusMessage("Please correct the form fields highlighted below.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to submit form. Please use the direct email link below."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "A network connection error occurred while submitting. Please send a direct email."
      );
    }
  };

  return (
    <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D8C5AF] shadow-sm">
      {status === "success" ? (
        <div className="p-8 sm:p-12 text-center rounded-2xl bg-[#F5F0E8] border border-emerald-300 space-y-5">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15]">
            Inquiry Received
          </h2>
          <p className="text-sm text-[#4A3428] max-w-lg mx-auto leading-relaxed">
            {statusMessage}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  service: "ai-workflow-automation",
                  description: "",
                  budget: "",
                  preferredContact: "Email",
                  botField: "",
                });
              }}
              className="px-6 py-2.5 rounded-full bg-[#241A15] text-[#F5F0E8] text-xs font-mono font-medium hover:bg-[#4A3428] transition-colors"
            >
              Submit Another Message
            </button>
            <Link
              href="/"
              className="text-xs font-mono text-[#4A3428] underline underline-offset-4 hover:text-[#241A15]"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === "error" && statusMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-xs leading-relaxed">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Honeypot field (hidden from screen, catches bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="botField">Leave this blank</label>
            <input
              id="botField"
              type="text"
              name="botField"
              value={formData.botField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Your Name <span className="text-amber-800">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-1 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#D8C5AF] focus:border-[#4A3428] focus:ring-[#4A3428]"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Email Address <span className="text-amber-800">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#D8C5AF] focus:border-[#4A3428] focus:ring-[#4A3428]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Company & Service Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Company / Project Name <span className="text-[#4A3428]/50">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Systems"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#4A3428] focus:ring-1 focus:ring-[#4A3428]"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Service of Interest <span className="text-amber-800">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-sm text-[#241A15] focus:outline-none focus:border-[#4A3428] focus:ring-1 focus:ring-[#4A3428]"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
            >
              Project Overview & Requirements <span className="text-amber-800">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="What business process are you trying to automate, or what application/agent system are you building?"
              className={`w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-1 ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#D8C5AF] focus:border-[#4A3428] focus:ring-[#4A3428]"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Budget & Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Estimated Budget Range <span className="text-[#4A3428]/50">(Optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-sm text-[#241A15] focus:outline-none focus:border-[#4A3428] focus:ring-1 focus:ring-[#4A3428]"
              >
                <option value="">Select an estimated range...</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="preferredContact"
                className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#241A15] mb-2"
              >
                Preferred Contact Channel
              </label>
              <input
                id="preferredContact"
                type="text"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                placeholder="Email, LinkedIn message, etc."
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#4A3428] focus:ring-1 focus:ring-[#4A3428]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#241A15] hover:bg-[#4A3428] disabled:bg-[#4A3428]/60 text-[#F5F0E8] font-display font-semibold text-sm transition-all duration-200 shadow-md active:scale-[0.98] cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D8C5AF]" />
                  <span>Validating & Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#D8C5AF]" />
                  <span>Send Project Inquiry</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-[#4A3428] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Data validated & never shared</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            START A CONVERSATION
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            LET&apos;S BUILD SOMETHING USEFUL.
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            Have a business process to automate, an AI system to build, or an application that needs backend engineering? Tell me what you are working on.
          </p>
        </div>

        {/* Form Container with Suspense boundary for useSearchParams */}
        <Suspense
          fallback={
            <div className="p-12 text-center rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#4A3428]" />
            </div>
          }
        >
          <ContactFormInner />
        </Suspense>

        {/* Direct Email Fallback */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#4A3428]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#B58A64]" />
            <span>Prefer email directly? Reach out at:</span>
            <a
              href={siteConfig.contact.fallbackMailto}
              className="text-[#241A15] font-bold underline underline-offset-2"
            >
              markcharleskojo@gmail.com
            </a>
          </div>
          <span className="flex items-center gap-1.5 text-[#4A3428]/80">
            <Clock className="w-3.5 h-3.5" />
            <span>{siteConfig.contact.turnaround}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
