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
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 pb-1">
      {/* Terminal Focus Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#241A15] text-[#F5F0E8] w-fit shadow-sm border border-[#4A3428]">
        <Terminal className="w-3.5 h-3.5 text-[#B58A64]" />
        <span className="font-mono text-[11px] font-bold tracking-widest text-[#D8C5AF] uppercase">
          CORE FOCUS:
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
      </div>

      {/* Kinetic Animated Word Switcher */}
      <div className="relative h-9 sm:h-10 overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 flex-wrap"
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-[#241A15] tracking-tight">
              {active.title}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] text-[#B58A64] bg-[#FAF7F2] border border-[#D8C5AF] px-2 py-0.5 rounded-full font-semibold">
              <Sparkles className="w-2.5 h-2.5 text-[#B58A64]" />
              <span>{active.sub}</span>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
