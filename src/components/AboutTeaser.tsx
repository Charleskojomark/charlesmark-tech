import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, CheckCircle2, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AboutTeaser() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8C5AF] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block">
                ABOUT CHARLES MARK
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight leading-tight">
                BRIDGING SOLID BACKEND PRINCIPLES WITH APPLIED AI SYSTEMS.
              </h2>

              <p className="text-base text-[#4A3428] leading-relaxed">
                I am an engineer interested in building practical AI-powered systems, reliable backend services, and automation that solves real problems.
              </p>

              <p className="text-sm text-[#4A3428] leading-relaxed">
                Rather than treating AI as an isolated novelty, I ground LLMs and agent workflows in proven software foundations: relational database models in PostgreSQL, type-safe API contracts in Express/FastAPI, asynchronous queueing, and webhook security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#241A15]">
                      Engineering Over Hype
                    </h3>
                    <p className="text-[11px] text-[#4A3428] mt-0.5">
                      Focusing on verifiable uptime, schema validation, and low latency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#241A15]">
                      Transparent Capabilities
                    </h3>
                    <p className="text-[11px] text-[#4A3428] mt-0.5">
                      Evidence-backed skills and clearly demarcated research areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] text-sm font-medium transition-colors shadow-sm"
                >
                  <span>Read Full Background & Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D8C5AF]" />
                </Link>

                {siteConfig.cv.available ? (
                  <a
                    href={siteConfig.cv.url}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F0E8] border border-[#D8C5AF] hover:border-[#4A3428] text-[#241A15] text-sm font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#B58A64]" />
                    <span>Download CV (PDF)</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F0E8] border border-[#D8C5AF]/70 text-xs font-mono text-[#4A3428]">
                    <Terminal className="w-3.5 h-3.5 text-[#B58A64]" />
                    <span>CV available upon direct request</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Typographic Monogram & Identity Shield */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#F5F0E8] rounded-3xl p-8 border border-[#D8C5AF] shadow-sm flex flex-col items-center text-center relative">
                {/* Decorative node points */}
                <div className="w-24 h-24 rounded-3xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-3xl tracking-tight border-2 border-[#4A3428] shadow-md mb-6 relative">
                  <span>CM</span>
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#B58A64] border-2 border-[#FAF7F2]" />
                </div>

                <span className="font-display font-bold text-xl text-[#241A15] tracking-wide uppercase">
                  CHARLES MARK
                </span>
                <span className="font-mono text-xs text-[#B58A64] tracking-widest uppercase font-semibold mt-1">
                  AI SYSTEMS ENGINEER
                </span>

                <div className="w-full my-6 border-t border-[#D8C5AF]/60" />

                <div className="w-full space-y-2 text-left font-mono text-xs text-[#4A3428]">
                  <div className="flex justify-between py-1 border-b border-[#D8C5AF]/30">
                    <span className="text-[#4A3428]/60">LOCATION:</span>
                    <span className="text-[#241A15] font-semibold">Global / Remote</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D8C5AF]/30">
                    <span className="text-[#4A3428]/60">SPECIALTY:</span>
                    <span className="text-[#241A15] font-semibold">AI + Backend</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A3428]/60">PRIMARY STACK:</span>
                    <span className="text-[#241A15] font-semibold">Node / Python / n8n</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
