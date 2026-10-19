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
    <section className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] flex items-center overflow-hidden bg-[#150F0B] text-[#F5F0E8] py-10 sm:py-14 lg:py-18">
      {/* Ambient atmospheric warm backlight */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute right-0 lg:right-1/4 top-1/4 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-full bg-gradient-to-br from-[#B58A64]/20 via-[#D8C5AF]/10 to-transparent blur-3xl opacity-75" />
        <div className="absolute left-1/4 bottom-10 w-[280px] h-[280px] rounded-full bg-[#B58A64]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* MOBILE PORTRAIT: Displayed at the TOP on mobile so head is prominently at the top */}
          <div className="lg:hidden flex flex-col items-center text-center">
            {/* Status Pill on mobile */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241A15] border border-[#B58A64]/50 shadow-md backdrop-blur-md mb-5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-[#F5F0E8] font-bold uppercase tracking-wider">
                BUSINESS SOLUTIONS ARCHITECT • FAANG TRAINED
              </span>
            </div>

            {/* Prominent Mobile Portrait with head clearly visible at the top */}
            <div className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-[4/4.6] rounded-3xl overflow-hidden border-2 border-[#B58A64]/40 shadow-2xl bg-gradient-to-b from-[#241A15] to-[#150F0B]">
              <Image
                src="/charles-mark.png"
                alt="Charles Mark - Business Solutions Architect & Applied AI Engineer"
                fill
                priority
                sizes="(max-width: 640px) 270px, 310px"
                className="object-cover object-top"
              />
              {/* Bottom subtle blend */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#150F0B] via-[#150F0B]/80 to-transparent" />
              {/* Live Availability Badge */}
              <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-full bg-[#150F0B]/90 border border-[#B58A64]/40 backdrop-blur-md flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-[#F5F0E8] font-semibold tracking-wide">
                  Charles Mark • Available for Projects
                </span>
              </div>
            </div>
          </div>

          {/* Left Column (Desktop) / Main Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Executive Solutions Eyebrow Pill (Desktop only, mobile has it above portrait) */}
            <div className="hidden lg:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#241A15]/90 border border-[#B58A64]/50 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs text-[#F5F0E8] font-bold uppercase tracking-wider">
                BUSINESS SOLUTIONS ARCHITECT • FAANG TRAINED
              </span>
            </div>

            {/* Solution-Oriented Headline for Business Leaders */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold text-[#F5F0E8] tracking-tight leading-[1.12]">
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

          {/* Right Column (Desktop): Full Prominent Studio Portrait of Charles Mark */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            {/* Atmospheric backlight ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#B58A64]/30 via-[#D8C5AF]/10 to-transparent blur-2xl opacity-70" />
            
            {/* Studio Portrait Container: Anchored to TOP so head and face are prominently visible */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#B58A64]/40 shadow-2xl bg-gradient-to-b from-[#241A15] to-[#150F0B]">
              <Image
                src="/charles-mark.png"
                alt="Charles Mark - Business Solutions Architect & Applied AI Engineer"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-top drop-shadow-2xl"
              />

              {/* Gradient masks: soft blend at bottom for elegance */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#150F0B] via-[#150F0B]/70 to-transparent" />
              
              {/* Executive Credentials Floating Card */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#150F0B]/90 border border-[#B58A64]/40 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#F5F0E8] tracking-wide">
                    Charles Mark
                  </div>
                  <div className="font-mono text-[11px] text-[#B58A64] tracking-wide">
                    AI Systems & Forward Deployed Engineer
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] font-mono text-[10px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
