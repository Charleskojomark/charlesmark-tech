"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Calendar,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroTyping } from "@/components/HeroTyping";
import { ThreeHeroScene } from "@/components/ThreeHeroScene";

export function Hero() {
  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-aligned 12-column grid: Left content and Right 3D stage start in perfect alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bold Portrait, Headline, Dynamic Typing, Dual Action Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Bold Executive Portrait & Identity Header */}
            <div className="flex items-center gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-3xl bg-[#FAF7F2]/90 border border-[#D8C5AF] shadow-md backdrop-blur-sm max-w-xl">
              {/* Prominent High-Definition Portrait */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#B58A64] shadow-lg bg-[#241A15] flex-shrink-0 animate-portrait-ring">
                <Image
                  src="/charles-mark.png"
                  alt="Charles Mark - AI Systems Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 80px, 96px"
                  priority
                />
                {/* Active Status Beacon */}
                <span
                  className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#241A15] shadow-xs"
                  title="Available for client projects"
                />
              </div>

              {/* Bold Executive Identity Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] sm:text-xs text-[#B58A64] font-bold tracking-widest uppercase">
                    LEAD SOLUTIONS ENGINEER
                  </span>
                  <BadgeCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                </div>

                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#241A15] tracking-tight uppercase truncate">
                  CHARLES MARK
                </h2>

                <p className="font-mono text-[11px] sm:text-xs text-[#4A3428] font-medium mt-0.5">
                  AI Automation • Custom Agents • Backend Systems
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#F5F0E8] border border-[#D8C5AF] text-[#241A15]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Available for Q2/Q3 Projects</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Outcome-First Headline for Business Leaders */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#241A15] tracking-tight leading-[1.12]">
              AI automation and backend systems for businesses that want{" "}
              <span className="animate-text-shimmer">less manual work</span> and{" "}
              <span className="animate-text-shimmer">more reliable operations</span>.
            </h1>

            {/* Kinetic Lettering / Discipline Switcher */}
            <div className="pt-0.5">
              <HeroTyping />
            </div>

            {/* Supporting Business Description */}
            <p className="text-base sm:text-lg text-[#4A3428] leading-relaxed max-w-2xl font-normal">
              I help operations leads, founders, and product teams eliminate repetitive manual bottlenecks with n8n pipelines, deploy private AI document assistants, and engineer resilient backend APIs.
            </p>

            {/* Conversion Actions: WhatsApp + Live Cal.com Booking */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary: Direct WhatsApp */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98] group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary: Live Cal.com Booking */}
              <a
                href={siteConfig.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-bold text-sm transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98] group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#B58A64]" />
                <span>Schedule on Cal.com</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8C5AF] opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Tertiary: Quick anchor down */}
              <a
                href="#case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] hover:bg-[#F5F0E8] text-[#4A3428] font-mono text-xs font-semibold transition-all shadow-xs group"
              >
                <span>Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#4A3428] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Direct Client Access Chip (No plain phone number) */}
            <div className="pt-0.5 flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#4A3428]">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span className="text-[#241A15] font-semibold">Direct WhatsApp &amp; Cal.com Access</span>
                <span className="text-[#D8C5AF]">•</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-sans font-semibold">
                  Fast reply within 24h
                </span>
              </span>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#4A3428] border-t border-[#D8C5AF]/60 pt-4">
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Zero vendor lock-in</span>
              </span>
              <span className="text-[#D8C5AF]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>100% code ownership</span>
              </span>
              <span className="text-[#D8C5AF]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <Zap className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                <span>Fixed-scope proposals</span>
              </span>
            </div>
          </div>

          {/* Right Column: Top-Aligned 3D WebGL Neural Core Canvas */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
            <ThreeHeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
