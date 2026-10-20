"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Share2,
  Copy,
  Check,
  Send,
  Video,
  FileText,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function FreeAuditSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    bottleneck: "",
    deliveryFormat: "video", // "video" | "blueprint"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const auditUrl = "https://www.charlesmark.tech/#audit";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(auditUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappShareText = encodeURIComponent(
    `Hey, check out Charles Mark's free 15-min async AI architecture & automation audit. He maps out the exact tools, architecture, and cost needed to automate manual bottlenecks: ${auditUrl}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          whatToBuild: `[FREE 15-MIN ASYNC AUDIT REQUEST]\nDelivery Preference: ${
            formData.deliveryFormat === "video" ? "Private 10-Min Video Teardown (Loom)" : "1-Page Architecture Blueprint (PDF/Notion)"
          }\n\nBottleneck/Workflow:\n${formData.bottleneck}`,
          budget: "Free Audit Request",
          howHeard: "Direct / Waitlist Link",
          botField: "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please reach out via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="audit"
      className="py-14 sm:py-20 md:py-24 bg-[#1C1410] text-[#F5F0E8] border-y border-[#4A3428] relative scroll-mt-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B58A64]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs font-semibold text-[#B58A64] tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-[#B58A64]" />
            <span>FREE VALUE OFFER • ZERO OBLIGATION</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F0E8] tracking-tight leading-tight">
            FREE 15-MINUTE ASYNC AI & AUTOMATION AUDIT
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#D8C5AF] mt-3 leading-relaxed">
            Send me your biggest manual bottleneck or system challenge. Within 48 hours, I will personally analyze your requirements and record a private 10-minute video or 1-page architecture teardown mapping out the exact stack, tools (n8n vs. LangGraph vs. custom APIs), and cost breakdown needed to solve it.
          </p>

          {/* Quick Share Bar for Charles and his Contacts */}
          <div className="mt-6 p-3 sm:p-4 rounded-2xl bg-[#241A15] border border-[#B58A64]/40 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2 text-xs text-[#D8C5AF]">
              <Share2 className="w-4 h-4 text-[#B58A64] flex-shrink-0" />
              <span className="font-mono text-[11px]">
                Share this audit link with your team or network:
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 border border-[#D8C5AF]/30 text-xs font-mono text-[#F5F0E8] transition-all cursor-pointer whitespace-nowrap active:scale-95"
                title="Copy link to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D8C5AF]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/?text=${whatsappShareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-xs font-mono text-[#25D366] transition-all cursor-pointer whitespace-nowrap active:scale-95"
                title="Share via WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form and Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What Charles Analyzes in Your Audit */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-[#241A15] border border-[#B58A64]/30 space-y-4 shadow-xl">
              <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block">
                What You Get In Your Audit
              </span>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#B58A64]/20 text-[#B58A64] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#F5F0E8]">
                      100% Async • No Meeting Required
                    </h3>
                    <p className="text-xs text-[#D8C5AF] mt-0.5 leading-relaxed">
                      Zero calendar friction. Review the breakdown whenever your schedule permits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#B58A64]/20 text-[#B58A64] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#F5F0E8]">
                      Zero Vendor Lock-In & Cost Math
                    </h3>
                    <p className="text-xs text-[#D8C5AF] mt-0.5 leading-relaxed">
                      Honest recommendation between open-source models, LangGraph, n8n, or custom APIs to keep cloud bills lean.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#B58A64]/20 text-[#B58A64] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#F5F0E8]">
                      Clear Next Steps & Architecture Plan
                    </h3>
                    <p className="text-xs text-[#D8C5AF] mt-0.5 leading-relaxed">
                      A tangible engineering roadmap you can implement with your own team or retain Charles to build.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Track Note */}
              <div className="pt-4 border-t border-[#4A3428] text-xs text-[#D8C5AF]/90">
                <span>Prefer a live interactive conversation instead? </span>
                <a
                  href={siteConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#F5F0E8] hover:text-[#B58A64] underline underline-offset-4 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Book a live call directly</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#241A15] border border-[#B58A64]/40 shadow-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto border border-[#10B981]/40">
                    <Check className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F0E8]">
                    Audit Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C5AF] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F5F0E8] font-bold">{formData.name}</span>. Charles Mark will personally review your bottleneck and deliver your custom teardown to <span className="text-[#F5F0E8] font-bold">{formData.email}</span> within 48 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                        `Hi Charles, I just submitted an async audit request for "${formData.company || formData.name}". Looking forward to your teardown!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Fast-Track on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          bottleneck: "",
                          deliveryFormat: "video",
                        });
                      }}
                      className="text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="font-display font-bold text-lg text-[#F5F0E8] block">
                      Request Your Free Architecture Teardown
                    </span>
                    <span className="text-xs text-[#D8C5AF] block mt-0.5">
                      Join the priority audit queue. Takes 60 seconds to fill.
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="audit-name"
                        className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="audit-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="audit-email"
                        className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                      >
                        Work Email / WhatsApp *
                      </label>
                      <input
                        id="audit-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="audit-company"
                      className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                    >
                      Company / Product Name (Optional)
                    </label>
                    <input
                      id="audit-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Acme Logistics or Startup Steath"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="audit-bottleneck"
                      className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                    >
                      What manual bottleneck or system do you want automated? *
                    </label>
                    <textarea
                      id="audit-bottleneck"
                      required
                      rows={3}
                      value={formData.bottleneck}
                      onChange={(e) =>
                        setFormData({ ...formData, bottleneck: e.target.value })
                      }
                      placeholder="e.g. Our ops team spends 15 hours/week copying customer invoices into PostgreSQL and verifying them with Claude API..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Delivery Format Preference Toggle */}
                  <div>
                    <span className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1.5">
                      Preferred Delivery Format:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, deliveryFormat: "video" })
                        }
                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          formData.deliveryFormat === "video"
                            ? "bg-[#B58A64] text-[#150F0B] border-[#B58A64] font-bold shadow-xs"
                            : "bg-[#1C1410] text-[#D8C5AF] border-[#4A3428] hover:border-[#B58A64]/60"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>10-Min Video (Loom)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            deliveryFormat: "blueprint",
                          })
                        }
                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          formData.deliveryFormat === "blueprint"
                            ? "bg-[#B58A64] text-[#150F0B] border-[#B58A64] font-bold shadow-xs"
                            : "bg-[#1C1410] text-[#D8C5AF] border-[#4A3428] hover:border-[#B58A64]/60"
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>1-Page Blueprint</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#B58A64]" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#B58A64]" />
                        <span>Request Free 15-Min Audit</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#D8C5AF]/70 font-mono">
                    Zero spam. Guaranteed response within 48 business hours. Delivered directly by Charles Mark.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
