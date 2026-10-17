import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal, CheckCircle2, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AboutTeaser() {
  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D8C5AF] p-5 sm:p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block">
                ABOUT CHARLES MARK
              </span>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight leading-tight">
                BRIDGING SOLID BACKEND PRINCIPLES WITH APPLIED AI SYSTEMS.
              </h2>

              <p className="text-sm sm:text-base text-[#4A3428] leading-relaxed">
                I am an engineer interested in building practical AI-powered systems, reliable backend services, and automation that solves real problems.
              </p>

              <p className="text-xs sm:text-sm text-[#4A3428] leading-relaxed">
                Rather than treating AI as an isolated novelty, I ground LLMs and agent workflows in proven software foundations: relational database models in PostgreSQL, type-safe API contracts in Express/FastAPI, asynchronous queueing, and webhook security.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
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

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
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

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] text-xs sm:text-sm font-medium transition-colors shadow-sm"
                >
                  <span>Read Full Background & Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D8C5AF]" />
                </Link>

                {siteConfig.cv.available ? (
                  <a
                    href={siteConfig.cv.url}
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full bg-[#F5F0E8] border border-[#D8C5AF] hover:border-[#4A3428] text-[#241A15] text-xs sm:text-sm font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#B58A64]" />
                    <span>Download CV (PDF)</span>
                  </a>
                ) : (
                  <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-full bg-[#F5F0E8] border border-[#D8C5AF]/70 text-[11px] sm:text-xs font-mono text-[#4A3428] text-center">
                    <Terminal className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                    <span>CV available upon direct request</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Authentic Professional Portrait & Identity Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-sm bg-[#F5F0E8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#D8C5AF] shadow-sm flex flex-col items-center text-center relative">
                {/* Professional Portrait of Charles Mark */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#4A3428] shadow-md mb-3 bg-[#241A15]">
                  <Image
                    src="/charles-mark.png"
                    alt="Charles Mark - AI Systems Engineer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 112px, 128px"
                    priority
                  />
                  <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#241A15]" title="Available for projects" />
                </div>

                <span className="font-display font-bold text-lg sm:text-xl text-[#241A15] tracking-wide uppercase">
                  CHARLES MARK
                </span>
                <span className="font-mono text-[11px] text-[#4A3428] font-bold tracking-widest uppercase mt-0.5">
                  AI SYSTEMS ENGINEER
                </span>

                <div className="w-full my-3 border-t border-[#D8C5AF]/60" />

                <div className="w-full space-y-1.5 text-left font-mono text-[11px] sm:text-xs text-[#4A3428]">
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
                    <span className="text-[#241A15] font-semibold">Express.js / Django / PostgreSQL</span>
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
