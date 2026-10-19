"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Sparkles } from "lucide-react";

const DISCIPLINES = [
  {
    title: "AI Workflow Automation",
    sub: "n8n • Webhooks • CRM Sync",
    badge: "15-20 hrs/wk saved",
  },
  {
    title: "Custom AI Agents & RAG",
    sub: "LangGraph • Vector Search • Pydantic",
    badge: "Document Intelligence",
  },
  {
    title: "Scalable Backend Systems",
    sub: "FastAPI • PostgreSQL • Node.js",
    badge: "Production APIs",
  },
];

export function HeroTyping() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % DISCIPLINES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const active = DISCIPLINES[index];

  return (
    <div className="pt-1 pb-1">
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {/* Terminal Core Focus Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#241A15] text-[#F5F0E8] shadow-sm border border-[#4A3428] flex-shrink-0">
          <Terminal className="w-3.5 h-3.5 text-[#B58A64]" />
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-[#D8C5AF] uppercase">
            CORE FOCUS:
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
        </div>

        {/* Dynamic Kinetic Discipline Container - NO overflow-hidden so text NEVER clips */}
        <div className="min-h-[2.25rem] flex items-center flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 py-0.5"
            >
              <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-[#241A15] tracking-tight leading-snug">
                {active.title}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] sm:text-[11px] text-[#B58A64] bg-[#FAF7F2] border border-[#D8C5AF] px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-[#B58A64]" />
                <span>{active.sub}</span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="hidden sm:flex items-center gap-1 pl-1" aria-hidden="true">
          {DISCIPLINES.map((d, i) => (
            <span
              key={d.title}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-4 bg-[#B58A64]" : "w-1.5 bg-[#D8C5AF]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
