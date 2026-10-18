import React from "react";
import { ArrowUpRight, AlertCircle, Clock, FileSpreadsheet, FolderSearch, ServerCrash } from "lucide-react";
import { problemsSolved } from "@/data/problems";

const PROBLEM_ICONS = {
  "leads-slipping": Clock,
  "manual-documents": FileSpreadsheet,
  "scattered-knowledge": FolderSearch,
  "backend-needed": ServerCrash,
};

export function ProblemsSection() {
  return (
    <section id="problems" className="py-12 sm:py-16 md:py-20 relative bg-[#FAF7F2] border-y border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#D8C5AF] mb-3">
              <AlertCircle className="w-3.5 h-3.5 text-[#B58A64]" />
              <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
                COMMON OPERATIONAL FRICTIONS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROBLEMS I SOLVE FOR BUSINESSES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            Most businesses do not have an AI problem; they have a repetitive manual process or an incomplete backend holding back growth.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problemsSolved.map((item) => {
            const Icon = PROBLEM_ICONS[item.id as keyof typeof PROBLEM_ICONS] || AlertCircle;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-[#F5F0E8] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors shadow-xs">
                      <Icon className="w-5 h-5 text-[#D8C5AF]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#B58A64] bg-[#FAF7F2] border border-[#D8C5AF] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Symptom vs Solved State */}
                  <div className="space-y-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/60">
                      <span className="font-mono text-[10px] text-red-800 uppercase tracking-wider font-bold block mb-1">
                        THE CURRENT BOTTLENECK:
                      </span>
                      <p className="text-xs text-[#4A3428] leading-relaxed">
                        {item.symptom}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-emerald-600/30">
                      <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-wider font-bold block mb-1">
                        WHAT CHANGES WITH THE SYSTEM:
                      </span>
                      <p className="text-xs text-[#241A15] font-medium leading-relaxed">
                        {item.solutionOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8C5AF]/60 flex items-center justify-between text-xs font-mono">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#241A15] group-hover:text-[#4A3428] transition-colors"
                  >
                    <span>Fix this problem in your operations</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
