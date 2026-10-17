import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, FileText, CheckCircle2 } from "lucide-react";
import { HeroTyping } from "@/components/HeroTyping";
import { SystemDiagram } from "@/components/SystemDiagram";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Hero Text, Profile Photo, and Dynamic Typing */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Charles Mark Profile Photo & Tagline */}
            <div className="flex flex-col items-start gap-2.5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#4A3428] shadow-md bg-[#241A15]">
                <Image
                  src="/charles-mark.png"
                  alt="Charles Mark - AI Systems Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 80px, 96px"
                  priority
                />
                <span
                  className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#241A15]"
                  title="Available for projects"
                />
              </div>

              <div>
                <span className="font-display font-bold text-base sm:text-lg text-[#241A15] uppercase tracking-wide block">
                  Charles Mark
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#4A3428] font-semibold tracking-wider block mt-0.5">
                  AI Systems Engineer / Backend / Automation
                </span>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#241A15] tracking-tight leading-[1.12]">
              I BUILD AI-POWERED SYSTEMS THAT SOLVE REAL PROBLEMS.
            </h1>

            {/* Continuous Typing Section */}
            <HeroTyping />

            {/* Animated Supporting Line */}
            <p className="text-sm sm:text-lg text-[#4A3428] leading-relaxed max-w-xl">
              From backend services to intelligent agents and automated workflows, I turn practical problems into engineered solutions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#D8C5AF] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-[#FAF7F2] border-2 border-[#4A3428] hover:bg-[#4A3428] hover:text-[#F5F0E8] text-[#241A15] font-display font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex-shrink-0" />
                <span>Let&apos;s Talk on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428] group-hover:text-[#F5F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Direct WhatsApp Phone Number Chip */}
            <div className="pt-0.5">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#4A3428] hover:text-[#241A15] transition-colors"
              >
                <span className="text-[#B58A64]">✦ WhatsApp / Direct:</span>
                <span className="font-bold underline underline-offset-4">{siteConfig.contact.phoneDisplay}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-sans font-semibold">Instant reply</span>
              </a>
            </div>

            {/* Optional CV link & quick metrics */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-[#4A3428]">
              {siteConfig.cv.available ? (
                <a
                  href={siteConfig.cv.url}
                  download
                  className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-[#241A15]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B58A64]" />
                  <span>Download My CV</span>
                </a>
              ) : (
                <span className="text-[#4A3428]/80">
                  CV updated & available upon inquiry
                </span>
              )}

              <span className="text-[#D8C5AF]">•</span>

              <span className="inline-flex items-center gap-1.5 text-[#241A15] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production-minded delivery</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive System Diagram */}
          <div className="lg:col-span-6 w-full">
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
