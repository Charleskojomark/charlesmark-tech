import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Award, Cpu } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2] border-t border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F5F0E8] border border-[#D8C5AF] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF]">
                <Award className="w-3.5 h-3.5 text-[#B58A64]" />
                <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
                  ENGINEERING PEDIGREE & DISCIPLINE
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#241A15] tracking-tight">
                FROM BACKEND ARCHITECTURE TO PRODUCTION AGENTIC AI
              </h2>

              <p className="text-sm sm:text-base text-[#4A3428] leading-relaxed">
                Trained by FAANG engineers and certified across Agentic System Design, Applied AI Engineering, and Forward Deployed Engineering on Educative.io, I design systems where cutting-edge AI meets enterprise infrastructure stability.
              </p>

              <p className="text-xs sm:text-sm text-[#4A3428] leading-relaxed">
                Rather than treating AI as an isolated novelty, I anchor autonomous agents in proven software foundations: relational database modeling in PostgreSQL, containerized cloud infrastructure in Docker/Kubernetes, resilient API contracts, and deterministic evaluation test suites.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#241A15]">
                      FAANG-Trained Rigor
                    </h3>
                    <p className="text-[11px] text-[#4A3428] mt-0.5">
                      Distributed systems thinking, deterministic evals, and zero speculation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/70">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-xs text-[#241A15]">
                      Forward Deployed Mindset
                    </h3>
                    <p className="text-[11px] text-[#4A3428] mt-0.5">
                      Embedding directly with engineering teams to deploy production AI code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] text-xs sm:text-sm font-medium transition-colors shadow-sm"
                >
                  <span>Read Full Background & Pedigree</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] text-xs sm:text-sm font-medium border border-[#D8C5AF] transition-colors"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Credential Summary */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#D8C5AF] shadow-sm flex flex-col items-center text-center relative">
                {/* Professional Portrait of Charles Mark */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#4A3428] shadow-md mb-3 bg-[#241A15]">
                  <Image
                    src="/charles-mark.png"
                    alt="Charles Mark - Applied AI & Forward Deployed Systems Engineer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 112px, 128px"
                    priority
                  />
                  <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#241A15]" title="Available for client projects" />
                </div>

                <span className="font-display font-bold text-lg sm:text-xl text-[#241A15] tracking-wide uppercase">
                  CHARLES MARK
                </span>
                <span className="font-mono text-[11px] text-[#B58A64] font-bold tracking-widest uppercase mt-0.5">
                  APPLIED AI & FORWARD DEPLOYED ENGINEER
                </span>

                <div className="w-full my-3 border-t border-[#D8C5AF]/60" />

                <div className="w-full space-y-1.5 text-left font-mono text-[11px] sm:text-xs text-[#4A3428]">
                  <div className="flex justify-between py-1 border-b border-[#D8C5AF]/30">
                    <span className="text-[#4A3428]/60">SPECIALTY:</span>
                    <span className="text-[#241A15] font-semibold">Agentic Systems & FDE</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D8C5AF]/30">
                    <span className="text-[#4A3428]/60">AI & VECTOR:</span>
                    <span className="text-[#241A15] font-semibold">LangGraph / pgvector / RAG</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D8C5AF]/30">
                    <span className="text-[#4A3428]/60">BACKEND:</span>
                    <span className="text-[#241A15] font-semibold">FastAPI / Node / Go / SQL</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#4A3428]/60">DEVOPS:</span>
                    <span className="text-[#241A15] font-semibold">Docker / K8s / CI/CD</span>
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
