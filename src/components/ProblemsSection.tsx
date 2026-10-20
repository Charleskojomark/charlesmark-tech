import React from "react";
import {
  ArrowUpRight,
  AlertCircle,
  Cpu,
  Cloud,
  ServerCrash,
  ShieldCheck,
} from "lucide-react";
import { problemsSolved } from "@/data/problems";
import { Card3D, Card3DItem } from "@/components/Card3D";

const PROBLEM_ICONS = {
  "fragile-ai-prototypes": Cpu,
  "cloud-devops-gap": Cloud,
  "backend-bottlenecks": ServerCrash,
  "hallucinating-rag": ShieldCheck,
};

export function ProblemsSection() {
  return (
    <section id="problems" className="py-12 sm:py-16 md:py-20 relative bg-[#FAF7F2] border-y border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#B58A64] tracking-widest uppercase">
              <AlertCircle className="w-4 h-4 text-[#B58A64]" />
              <span>ENGINEERING BOTTLENECKS & ARCHITECTURAL GAPS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              SYSTEM FAILURES I ELIMINATE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            True enterprise AI value requires backend discipline, deterministic evaluation, and hardened cloud infrastructure—not fragile single-prompt demos.
          </p>
        </div>

        {/* 4 Problem Cards Grid with Interactive 3D Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problemsSolved.map((item) => {
            const Icon = PROBLEM_ICONS[item.id as keyof typeof PROBLEM_ICONS] || AlertCircle;

            return (
              <Card3D
                key={item.id}
                className="group flex flex-col justify-between bg-[#F5F0E8] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <Card3DItem translateZ={30} className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors shadow-xs">
                      <Icon className="w-5 h-5 text-[#D8C5AF]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#8C6239] tracking-wider uppercase">
                      {item.badge}
                    </span>
                  </Card3DItem>

                  <Card3DItem translateZ={20}>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15] mb-3 leading-snug">
                      {item.title}
                    </h3>
                  </Card3DItem>

                  {/* Symptom vs Solved State */}
                  <div className="space-y-3 mb-4">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/60">
                      <span className="font-mono text-[10px] text-red-800 uppercase tracking-wider font-bold block mb-1">
                        THE PRODUCTION BOTTLENECK:
                      </span>
                      <p className="text-xs text-[#4A3428] leading-relaxed">
                        {item.symptom}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-emerald-600/30">
                      <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-wider font-bold block mb-1">
                        THE ENGINEERED ARCHITECTURE:
                      </span>
                      <p className="text-xs text-[#241A15] font-medium leading-relaxed">
                        {item.solutionOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#D8C5AF]/60 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#4A3428] font-medium">
                    Engineered for zero downtime & strict evals
                  </span>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#241A15] hover:text-[#B58A64] transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
