"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Cpu, Sparkles, Layers, ShieldCheck, CheckCircle2, Workflow, ArrowRight } from "lucide-react";

interface SectionConnectorProps {
  stage: string;
  label: string;
  sublabel?: string;
  icon?: "workflow" | "cpu" | "sparkles" | "layers" | "shield" | "check";
}

const ICON_MAP = {
  workflow: Workflow,
  cpu: Cpu,
  sparkles: Sparkles,
  layers: Layers,
  shield: ShieldCheck,
  check: CheckCircle2,
};

export function SectionConnector({
  stage,
  label,
  sublabel,
  icon = "workflow",
}: SectionConnectorProps) {
  const shouldReduceMotion = useReducedMotion();
  const IconComponent = ICON_MAP[icon] || Workflow;

  return (
    <div className="relative w-full py-8 sm:py-10 flex flex-col items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Background horizontal guide lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D8C5AF]/60 to-transparent" />

      {/* Vertical pipeline conduit line */}
      <div className="relative w-px h-16 sm:h-20 bg-gradient-to-b from-[#D8C5AF]/30 via-[#B58A64]/60 to-[#D8C5AF]/30 overflow-hidden">
        {/* Traveling light pulse */}
        {!shouldReduceMotion && (
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-[#25D366] to-transparent animate-pipeline-stream" />
        )}
      </div>

      {/* Central Pipeline Node Badge */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 -my-3 inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FAF7F2] border border-[#D8C5AF]/70 shadow-xs pointer-events-none select-none"
      >

        {/* Node Icon */}
        <IconComponent className="w-3.5 h-3.5 text-[#B58A64]" />

        {/* Stage & Label */}
        <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#241A15]">
          <span className="text-[#B58A64]">{stage}</span>
          <span className="text-[#D8C5AF]">/</span>
          <span>{label}</span>
        </div>

        {sublabel && (
          <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono font-medium text-[#4A3428]/70 border-l border-[#D8C5AF] pl-2">
            <ArrowRight className="w-2.5 h-2.5 text-[#B58A64]" />
            <span>{sublabel}</span>
          </span>
        )}

        <ArrowDown className="w-3 h-3 text-[#B58A64] opacity-80" />
      </motion.div>

      {/* Bottom conduit segment */}
      <div className="relative w-px h-8 sm:h-10 bg-gradient-to-b from-[#B58A64]/60 via-[#D8C5AF]/40 to-transparent overflow-hidden" />
    </div>
  );
}
