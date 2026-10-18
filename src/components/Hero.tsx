import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Workflow,
  Database,
  Bot,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

import { HeroTyping } from "@/components/HeroTyping";

export function Hero() {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Business Outcome Headline, Identity, CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Charles Mark Identity Badge */}
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#4A3428] shadow-md bg-[#241A15] flex-shrink-0">
                <Image
                  src="/charles-mark.png"
                  alt="Charles Mark - AI Systems Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                  priority
                />
                <span
                  className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#241A15]"
                  title="Available for client projects"
                />
              </div>

              <div>
                <span className="font-display font-bold text-base sm:text-lg text-[#241A15] uppercase tracking-wide block">
                  Charles Mark
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#4A3428] font-semibold tracking-wider block">
                  AI Systems Engineer
                </span>
              </div>
            </div>

            {/* Outcome-First Headline for Business Leaders */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#241A15] tracking-tight leading-[1.14]">
              AI automation and backend systems for businesses that want less manual work and more reliable operations.
            </h1>

            {/* Changing Letters Dynamic Cycling Typography */}
            <div className="pt-1 pb-1">
              <HeroTyping />
            </div>

            {/* Core Deliverable Badges */}
            <div className="py-1">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B58A64] font-bold block mb-2">
                CORE SOLUTIONS DELIVERED:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-xs font-mono font-bold text-[#241A15] shadow-xs hover:border-[#B58A64] hover:bg-[#F5F0E8] transition-all">
                  <Workflow className="w-3.5 h-3.5 text-[#B58A64]" />
                  <span>AI Workflow Automation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-xs font-mono font-bold text-[#241A15] shadow-xs hover:border-[#B58A64] hover:bg-[#F5F0E8] transition-all">
                  <Bot className="w-3.5 h-3.5 text-[#B58A64]" />
                  <span>Custom AI Agents & RAG</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-xs font-mono font-bold text-[#241A15] shadow-xs hover:border-[#B58A64] hover:bg-[#F5F0E8] transition-all">
                  <Database className="w-3.5 h-3.5 text-[#B58A64]" />
                  <span>Scalable Backend Systems</span>
                </span>
              </div>
            </div>

            {/* Supporting Business Description */}
            <p className="text-base sm:text-lg text-[#4A3428] leading-relaxed max-w-2xl font-normal">
              I help operations leads, founders, and product teams eliminate repetitive manual admin, deploy custom AI assistants over company documents, and build rock-solid backend services behind their products.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl sm:rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-[#FAF7F2] border-2 border-[#4A3428] hover:bg-[#4A3428] hover:text-[#F5F0E8] text-[#241A15] font-display font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group"
              >
                <span>See what I build</span>
                <ArrowDown className="w-4 h-4 text-[#4A3428] group-hover:text-[#F5F0E8] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Direct WhatsApp Status Chip (No plain phone number) */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-mono text-[#4A3428]">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#25D366] transition-all shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span className="text-[#241A15] font-semibold">Direct client access on WhatsApp</span>
                <span className="text-[#D8C5AF]">•</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-sans font-semibold">
                  Fast reply
                </span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#4A3428] border-t border-[#D8C5AF]/60 pt-4">
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Zero vendor lock-in</span>
              </span>
              <span className="text-[#D8C5AF]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>100% code & workflow ownership</span>
              </span>
              <span className="text-[#D8C5AF]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <Zap className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                <span>Fixed-scope proposals</span>
              </span>
            </div>
          </div>

          {/* Right Column: Business Architecture Snapshot Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] shadow-md relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8C5AF]/60 pb-4">
                <div>
                  <span className="font-mono text-[11px] text-[#B58A64] uppercase font-bold tracking-wider block">
                    OPERATIONAL SYSTEM
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#241A15]">
                    How Your Solution Runs
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#E8DDCF]/60 text-[10px] font-mono font-semibold text-[#4A3428]">
                  Automated & Monitored
                </span>
              </div>

              {/* 3 Step Connected Workflow Visual */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                  <div className="w-9 h-9 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-4 h-4 text-[#D8C5AF]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-bold block">
                      STAGE 01 • INTAKE
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#241A15]">
                      Inbound Leads, Emails & Document Webhooks
                    </h4>
                    <p className="text-[11px] text-[#4A3428] mt-0.5 leading-snug">
                      Captures customer inquiries, invoice PDFs, or tickets instantly without manual checking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                  <div className="w-9 h-9 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-[#B58A64]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest font-bold block">
                      STAGE 02 • INTELLIGENCE
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#241A15]">
                      AI Extraction & Guardrailed Verification
                    </h4>
                    <p className="text-[11px] text-[#4A3428] mt-0.5 leading-snug">
                      Extracts structured data, checks against schema rules, and guards against errors before saving.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                  <div className="w-9 h-9 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-widest font-bold block">
                      STAGE 03 • ACTION
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#241A15]">
                      CRM / Database Sync & Team Alert
                    </h4>
                    <p className="text-[11px] text-[#4A3428] mt-0.5 leading-snug">
                      Writes records directly to PostgreSQL/CRM and dispatches role-tailored notifications to Slack.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-2 border-t border-[#D8C5AF]/60 flex items-center justify-between text-xs font-mono text-[#4A3428]">
                <span>Typical Time Saved:</span>
                <span className="font-bold text-[#241A15] bg-[#F5F0E8] px-2.5 py-1 rounded-md border border-[#D8C5AF]">
                  10–20+ hrs/wk per workflow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
