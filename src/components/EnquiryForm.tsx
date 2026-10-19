"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    whatToBuild: "",
    budget: "",
    howHeard: "",
    botField: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setMessage("");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Failed to submit. Please try again.");
        if (data.errors) {
          setErrors(data.errors);
        }
      } else {
        setStatus("success");
        setMessage(data.message || "Your brief has been received!");
        setFormData({
          name: "",
          email: "",
          company: "",
          whatToBuild: "",
          budget: "",
          howHeard: "",
          botField: "",
        });
      }
    } catch {
      setStatus("error");
      setMessage("A network error occurred. Please message directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-emerald-300 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display font-bold text-2xl text-[#241A15]">
          Project Brief Received
        </h3>
        <p className="text-sm text-[#4A3428] max-w-md mx-auto leading-relaxed">
          {message}
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A3428] text-[#F5F0E8] text-xs font-mono font-semibold uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
            <span>Fast-track on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-mono text-[#4A3428] underline underline-offset-4 hover:text-[#241A15]"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-[#241A15]">
      {status === "error" && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botField">Leave empty</label>
        <input
          id="botField"
          name="botField"
          type="text"
          value={formData.botField}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
            Your Name <span className="text-red-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Sarah Jenkins"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all ${
              errors.name ? "border-red-500" : "border-[#D8C5AF]"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
            Work Email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="sarah@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all ${
              errors.email ? "border-red-500" : "border-[#D8C5AF]"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Acme Logistics or Startup"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all"
          />
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
            Estimated Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-sm text-[#241A15] focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all"
          >
            <option value="">Select range (or exploring)</option>
            <option value="audit">Under $1,500 (Workflow Audit)</option>
            <option value="small">$1,500 – $3,500 (Single Workflow Build)</option>
            <option value="medium">$3,500 – $8,000 (Multi-step Agent / Backend)</option>
            <option value="large">$8,000+ (Full System Implementation)</option>
            <option value="retainer">Monthly Retainer ($1,200+/mo)</option>
          </select>
        </div>
      </div>

      {/* What you want to automate / build */}
      <div>
        <label htmlFor="whatToBuild" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
          What would you like to automate or build? <span className="text-red-700">*</span>
        </label>
        <textarea
          id="whatToBuild"
          name="whatToBuild"
          required
          rows={3}
          placeholder="Briefly describe the manual process taking too much time, or the AI assistant/backend you want to build..."
          value={formData.whatToBuild}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border text-sm text-[#241A15] placeholder:text-[#4A3428]/40 focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all ${
            errors.whatToBuild ? "border-red-500" : "border-[#D8C5AF]"
          }`}
        />
        {errors.whatToBuild && <p className="text-[11px] text-red-600 mt-1">{errors.whatToBuild}</p>}
      </div>

      {/* How Heard */}
      <div>
        <label htmlFor="howHeard" className="block text-xs font-mono font-semibold text-[#4A3428] uppercase tracking-wider mb-1.5">
          How did you hear about Charles Mark?
        </label>
        <select
          id="howHeard"
          name="howHeard"
          value={formData.howHeard}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-sm text-[#241A15] focus:outline-none focus:ring-2 focus:ring-[#4A3428] transition-all"
        >
          <option value="">Please select</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Client Referral / Word of Mouth</option>
          <option value="GitHub">GitHub</option>
          <option value="Search">Search / Web</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#D8C5AF]" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Brief</span>
            <Send className="w-4 h-4 text-[#D8C5AF]" />
          </>
        )}
      </button>

      <p className="text-[11px] text-[#4A3428]/70 text-center font-mono pt-1">
        Your brief goes directly to Charles Mark. Reply guaranteed within 24 hours.
      </p>
    </form>
  );
}
