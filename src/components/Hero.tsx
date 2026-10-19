"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroTyping } from "@/components/HeroTyping";
import { HeroArchitectureVisualizer } from "@/components/HeroArchitectureVisualizer";

export function Hero() {
  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Focused Executive Story, Kinetic Typing, Single Primary CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Sleek, Authoritative Executive Identity Pill */}
            <div className="inline-flex items-center gap-3.5 px-3.5 py-2 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] shadow-xs backdrop-blur-xs">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#B58A64] shadow-xs flex-shrink-0 bg-[#241A15]">
                <Image
                  src="/charles-mark.png"
                  alt="Charles Mark - AI Systems Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="44px"
                  priority
                />
                <span
                  className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-[#FAF7F2]"
                  title="Available for client projects"
                />
              </div>

              <div className="pr-2 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#241A15] tracking-tight">
                    Charles Mark
                  </span>
                  <BadgeCheck className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                  <span className="hidden sm:inline-block font-mono text-[11px] text-[#B58A64] font-bold uppercase tracking-wider">
                    • AI Systems Engineer
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-mono text-[11px] text-[#4A3428] font-medium">
                    Available for Q2/Q3 Projects
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
            <p className="text-base sm:text-lg text-[#4A3428] leading-relaxed max-w-xl font-normal">
              I help operations leads, founders, and product teams eliminate repetitive manual bottlenecks with n8n pipelines, deploy private AI document assistants, and engineer resilient backend APIs.
            </p>

            {/* The Single Primary Call-To-Action (Zero Choice Paralysis) */}
            <div className="pt-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Discreet, non-competing calendar link */}
              <div className="mt-3">
                <a
                  href={siteConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15] transition-colors underline decoration-[#D8C5AF] underline-offset-4"
                >
                  <span>Prefer a scheduled meeting? Book 20 mins on Cal.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Problem-Solving Automation Architecture Monitor (Ambient, Zero Buttons) */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
            <HeroArchitectureVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
}
