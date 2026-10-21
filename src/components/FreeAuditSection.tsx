"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Share2,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Calendar,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function FreeAuditSection() {
  const [copied, setCopied] = useState(false);

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

        {/* Content and Conversion Grid */}
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
            </div>
          </div>

          {/* Right Column: Direct Conversion Hub (No Forms) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#241A15] border border-[#B58A64]/40 shadow-2xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] font-bold text-[#B58A64] uppercase tracking-wider">
                    DIRECT ACCESS • ZERO FORMS REQUIRED
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F0E8] tracking-tight">
                  Request Your Free Architecture Teardown
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C5AF] mt-2 leading-relaxed">
                  Skip the long forms. Connect directly with Charles Mark to describe your manual bottleneck, system challenge, or automation goals.
                </p>
              </div>

              {/* 2 Primary Direct Conversion Cards */}
              <div className="space-y-3.5">
                {/* 1. WhatsApp Fast-Track */}
                <a
                  href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                    "Hi Charles, I'd like to request a free 15-minute async AI & automation architecture audit for our system bottlenecks."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 sm:p-5 rounded-2xl bg-[#1C1410] border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        <WhatsAppIcon className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm sm:text-base text-[#F5F0E8] group-hover:text-[#25D366] transition-colors">
                            Request via WhatsApp
                          </span>
                          <span className="text-[10px] font-mono text-[#F5F0E8] font-bold bg-[#FAF7F2]/10 px-2 py-0.5 rounded-full border border-[#B58A64]/40">
                            FASTEST
                          </span>
                        </div>
                        <p className="text-xs text-[#D8C5AF]/90 mt-0.5">
                          Send a voice note or message describing your system bottleneck. Charles responds directly.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#25D366] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  </div>
                </a>

                {/* 2. Cal.com Direct Booking */}
                <a
                  href={siteConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 sm:p-5 rounded-2xl bg-[#1C1410] border border-[#B58A64]/40 hover:border-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#241A15] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        <Calendar className="w-5 h-5 text-[#B58A64]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm sm:text-base text-[#F5F0E8] group-hover:text-[#B58A64] transition-colors">
                            Book 15-Min Diagnostic Call
                          </span>
                          <span className="text-[10px] font-mono text-[#D8C5AF] font-bold bg-[#FAF7F2]/10 px-2 py-0.5 rounded-full border border-[#D8C5AF]/30">
                            CAL.COM
                          </span>
                        </div>
                        <p className="text-xs text-[#D8C5AF]/90 mt-0.5">
                          Prefer live interactive scoping? Pick a time that fits your calendar directly.
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C5AF] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  </div>
                </a>
              </div>

              {/* Guarantees Footer */}
              <div className="p-3.5 rounded-xl bg-[#1C1410]/80 border border-[#4A3428]/60 flex flex-wrap items-center justify-between gap-2.5 text-[11px] font-mono text-[#D8C5AF]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>48-Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Zero Spam Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>100% Free & No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
