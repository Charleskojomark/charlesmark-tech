import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, FileText, CheckCircle2 } from "lucide-react";
import { HeroTyping } from "@/components/HeroTyping";
import { SystemDiagram } from "@/components/SystemDiagram";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text and Dynamic Typing */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B58A64] animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[#4A3428] tracking-widest uppercase">
                {siteConfig.tagline}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#241A15] tracking-tight leading-[1.08]">
              I BUILD AI-POWERED SYSTEMS THAT SOLVE REAL PROBLEMS.
            </h1>

            {/* Continuous Typing Section */}
            <HeroTyping />

            {/* Animated Supporting Line */}
            <p className="text-base sm:text-lg text-[#4A3428] leading-relaxed max-w-xl">
              From backend services to intelligent agents and automated workflows, I turn practical problems into engineered solutions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#D8C5AF] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#4A3428] text-[#241A15] font-display font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Optional CV link & quick metrics */}
            <div className="pt-2 flex items-center gap-6 text-xs font-mono text-[#4A3428]">
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
