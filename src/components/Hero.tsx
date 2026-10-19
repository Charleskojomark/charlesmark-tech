"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Workflow,
  Cpu,
  Server,
  Cloud,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { HeroTyping } from "@/components/HeroTyping";

export function Hero() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[750px] flex items-center pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Layer: Charles Mark Portrait Integration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient atmospheric warm glow behind portrait */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[520px] md:w-[700px] h-[350px] sm:h-[520px] md:h-[700px] rounded-full bg-gradient-to-br from-[#B58A64]/18 via-[#D8C5AF]/12 to-transparent blur-3xl opacity-75" />

        {/* The Portrait Image in the Hero Background */}
        <div className="absolute right-0 bottom-0 h-full w-full sm:w-[72%] md:w-[60%] lg:w-[50%] flex items-end justify-end">
          <div className="relative w-full h-[95%] sm:h-full max-h-[780px]">
            <Image
              src="/charles-mark.png"
              alt="Charles Mark - AI Systems, Workflow Automation & Backend Engineer"
              fill
              className="object-contain object-bottom-right sm:object-right-bottom opacity-20 sm:opacity-90 lg:opacity-100 transition-opacity drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 50vw"
            />
            {/* Seamless gradient masks ensuring text readability & zero harsh edges */}
            <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-[#FAF7F2]/40" />
            <div className="hidden sm:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* Foreground Content: Sits Directly On It With Crisp Contrast */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Outcome-First Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-[#241A15] tracking-tight leading-[1.12]">
            AI workflow automations, resilient backend systems, and{" "}
            <span className="animate-text-shimmer">production agentic AI</span>.
          </h1>

          {/* Kinetic Lettering / Discipline Switcher */}
          <div className="pt-0.5">
            <HeroTyping />
          </div>

          {/* Supporting Engineering Description */}
          <p className="text-base sm:text-lg text-[#38261D] leading-relaxed max-w-xl font-normal">
            Trained by FAANG engineers and certified across Agentic System Design, Applied AI, and Forward Deployed Engineering (Educative.io), I architect self-healing n8n automation pipelines, containerized cloud infrastructure, and autonomous agentic workflows that scale.
          </p>

          {/* The Single Primary Call-To-Action (Zero Choice Paralysis) */}
          <div className="pt-2">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
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
                <span>Prefer a scheduled technical consultation? Book 20 mins on Cal.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64]" />
              </a>
            </div>
          </div>

          {/* Capability Badges Grounding Core Pillars */}
          <div className="pt-4 border-t border-[#D8C5AF]/60 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-[#4A3428]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 border border-[#D8C5AF] text-[#241A15] font-semibold shadow-xs backdrop-blur-xs">
              <Workflow className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Workflow Automation (n8n)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 border border-[#D8C5AF] text-[#241A15] font-semibold shadow-xs backdrop-blur-xs">
              <Cpu className="w-3.5 h-3.5 text-[#B58A64]" />
              <span>Agentic Systems (LangGraph)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 border border-[#D8C5AF] text-[#241A15] font-semibold shadow-xs backdrop-blur-xs">
              <Server className="w-3.5 h-3.5 text-[#241A15]" />
              <span>Backend & Cloud DevOps</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
