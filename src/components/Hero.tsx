"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroTyping } from "@/components/HeroTyping";

export function Hero() {
  return (
    <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center overflow-hidden bg-[#150F0B] text-[#F5F0E8]">
      {/* Background Layer: Charles Mark Portrait across Desktop AND Mobile */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient atmospheric warm backlight */}
        <div className="absolute right-0 sm:right-1/4 top-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[750px] h-[350px] sm:h-[550px] lg:h-[750px] rounded-full bg-gradient-to-br from-[#B58A64]/20 via-[#D8C5AF]/10 to-transparent blur-3xl opacity-80" />

        {/* Full Hero Portrait Image Container */}
        <div className="absolute inset-y-0 right-0 sm:right-0 lg:right-6 w-full sm:w-[85%] md:w-[70%] lg:w-[55%] h-full flex items-end justify-center sm:justify-end">
          <div className="relative w-full h-[90%] sm:h-full max-h-[820px]">
            <Image
              src="/charles-mark.png"
              alt="Charles Mark - Business Solutions Architect & Applied AI Engineer"
              fill
              className="object-contain object-bottom-center sm:object-right-bottom opacity-35 sm:opacity-75 lg:opacity-90 drop-shadow-2xl transition-opacity"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 55vw"
            />
            {/* Cinematic Overlay: Keeps Charles Mark Prominently Visible while ensuring 100% Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#150F0B] via-[#150F0B]/80 to-[#150F0B]/30 sm:via-[#150F0B]/60 sm:to-transparent" />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#150F0B] via-[#150F0B]/85 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#150F0B] to-transparent" />
          </div>
        </div>
      </div>

      {/* Foreground Content: Sits Directly On It With Crisp High-Contrast Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Executive Solutions Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#241A15]/90 border border-[#B58A64]/50 shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs text-[#F5F0E8] font-bold uppercase tracking-wider">
              BUSINESS SOLUTIONS ARCHITECT • FAANG TRAINED
            </span>
          </div>

          {/* Solution-Oriented Headline for Business Leaders */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[#F5F0E8] tracking-tight leading-[1.12]">
            I engineer AI automations, agentic systems, and cloud backends that{" "}
            <span className="text-[#B58A64] underline decoration-[#B58A64]/40 underline-offset-8">
              eliminate operational bottlenecks
            </span>{" "}
            and scale business revenue.
          </h1>

          {/* Kinetic Auto-Typing Discipline Switcher */}
          <div className="pt-0.5">
            <HeroTyping />
          </div>

          {/* Supporting Business Description */}
          <p className="text-base sm:text-lg text-[#D8C5AF] leading-relaxed max-w-xl font-normal">
            Trained by FAANG engineers and certified in Applied AI & Forward Deployed Engineering (Educative.io), I turn manual administrative friction into reliable, automated, high-margin software systems.
          </p>

          {/* High-Converting Action Buttons: Book a Call (Cal.com) + Chat on WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary: Book a Call on Cal.com */}
            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#B58A64] hover:bg-[#C99C74] text-[#150F0B] font-display font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#150F0B]" />
              <span>Book a Solutions Call</span>
              <ArrowUpRight className="w-4 h-4 text-[#150F0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Secondary: Chat on WhatsApp */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Tangible Business Impact Badges */}
          <div className="pt-4 border-t border-[#4A3428]/80 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#D8C5AF]">
            <span className="inline-flex items-center gap-1.5 text-[#F5F0E8] font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>15–20 hrs/wk saved per team</span>
            </span>
            <span className="text-[#4A3428]">•</span>
            <span className="inline-flex items-center gap-1.5 text-[#F5F0E8] font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Zero-hallucination guardrails</span>
            </span>
            <span className="text-[#4A3428]">•</span>
            <span className="inline-flex items-center gap-1.5 text-[#F5F0E8] font-medium">
              <Zap className="w-4 h-4 text-[#B58A64] flex-shrink-0" />
              <span>99.99% cloud uptime</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
