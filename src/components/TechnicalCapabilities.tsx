"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { capabilities, CapabilityGroup } from "@/data/capabilities";
import {
  Server,
  Database,
  Cpu,
  Cloud,
  Layers,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Code2,
} from "lucide-react";

const groupIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-4 h-4 text-[#B58A64]" />,
  data: <Database className="w-4 h-4 text-[#B58A64]" />,
  "ai-automation": <Cpu className="w-4 h-4 text-[#B58A64]" />,
  infrastructure: <Cloud className="w-4 h-4 text-[#B58A64]" />,
};

export function TechnicalCapabilities() {
  const [activeTab, setActiveTab] = useState<string>("backend");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const currentGroup =
    capabilities.find((g) => g.id === activeTab) || capabilities[0];

  return (
    <section id="capabilities" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
                TECHNICAL PROFICIENCY MATRIX
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROVEN STACK & HONEST CAPABILITIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md font-sans leading-relaxed">
            Technologies grouped by architectural role. Transparently distinguished between production-implemented systems and active research labs.
          </p>
        </div>

        {/* Interactive Discipline Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {capabilities.map((group) => {
            const isActive = activeTab === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => {
                  setActiveTab(group.id);
                  setSelectedTech(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#241A15] text-[#F5F0E8] shadow-md border border-[#4A3428]"
                    : "bg-[#FAF7F2] text-[#4A3428] border border-[#D8C5AF] hover:border-[#4A3428] hover:bg-[#F5F0E8]"
                }`}
              >
                {groupIcons[group.id] || <Layers className="w-4 h-4" />}
                <span className="font-semibold">{group.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive
                      ? "bg-[#4A3428] text-[#F5F0E8]"
                      : "bg-[#D8C5AF]/40 text-[#4A3428]"
                  }`}
                >
                  {group.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left: Interactive Compact Grid of Technologies */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-[#241A15]">
                    {currentGroup.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#4A3428] uppercase tracking-wider">
                    {currentGroup.items.length} Technologies
                  </span>
                </div>
                <p className="text-xs text-[#4A3428] leading-relaxed">
                  {currentGroup.description}
                </p>
              </div>

              {/* Responsive Compact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentGroup.items.map((item) => {
                  const isProficient =
                    item.level === "Proficient & Implemented";
                  const isLearning =
                    item.level === "Active Learning & Labs";
                  const isSelected = selectedTech === item.name;

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedTech(item.name)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 text-left ${
                        isSelected
                          ? "bg-[#241A15] border-[#4A3428] text-[#F5F0E8] shadow-md ring-2 ring-[#B58A64]"
                          : "bg-[#FAF7F2] border-[#D8C5AF] hover:border-[#4A3428] text-[#241A15]"
                      }`}
                    >
                      <div
                        onClick={() =>
                          setSelectedTech(
                            selectedTech === item.name ? null : item.name
                          )
                        }
                        className="cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={`font-mono text-xs font-bold leading-snug ${
                              isSelected ? "text-[#F5F0E8]" : "text-[#241A15]"
                            }`}
                          >
                            {item.name}
                          </span>

                          {/* Streamlined pill indicator */}
                          <span
                            className={`font-mono text-[9px] px-2 py-0.5 rounded-full flex-shrink-0 flex items-center gap-1 ${
                              isProficient
                                ? isSelected
                                  ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700"
                                  : "bg-emerald-100/90 text-emerald-800 border border-emerald-300"
                                : isLearning
                                ? isSelected
                                  ? "bg-amber-900/60 text-amber-300 border border-amber-700"
                                  : "bg-amber-100/90 text-amber-900 border border-amber-300"
                                : isSelected
                                ? "bg-blue-900/60 text-blue-300 border border-blue-700"
                                : "bg-blue-100/90 text-blue-900 border border-blue-300"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isProficient
                                  ? "bg-emerald-600"
                                  : isLearning
                                  ? "bg-amber-600"
                                  : "bg-blue-600"
                              }`}
                            />
                            <span>
                              {isProficient
                                ? "Production"
                                : isLearning
                                ? "Lab Lab"
                                : "Hands-on"}
                            </span>
                          </span>
                        </div>

                        <p
                          className={`text-[11px] leading-relaxed line-clamp-2 mt-1.5 ${
                            isSelected ? "text-[#D8C5AF]" : "text-[#4A3428]"
                          }`}
                        >
                          {item.note}
                        </p>
                      </div>

                      {/* Mobile Inline Expansion (Reveals instantly beneath tapped item with zero scrolling!) */}
                      {isSelected && (
                        <div className="lg:hidden mt-2.5 pt-2.5 border-t border-[#4A3428] space-y-2">
                          <div className="p-2.5 rounded-lg bg-[#140E0B] border border-[#4A3428] space-y-1">
                            <span className="font-mono text-[9px] text-[#B58A64] uppercase block">
                              PRACTICAL IMPLEMENTATION:
                            </span>
                            <p className="text-xs text-[#D8C5AF] leading-relaxed font-sans">
                              {item.note}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>
                              {isProficient
                                ? "Production-Tested Architecture & Schema Rigor"
                                : "Active Lab Benchmarking & Integration Testing"}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Desktop Architectural Detail Inspector (Hidden on mobile where inline expansion is used) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#241A15] border border-[#4A3428] text-[#F5F0E8] shadow-lg sticky top-28">
                <div className="flex items-center justify-between pb-4 border-b border-[#4A3428]">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#B58A64]" />
                    <span className="font-mono text-xs text-[#D8C5AF] uppercase tracking-wider font-semibold">
                      ARCHITECTURAL INSPECTOR
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#B58A64] bg-[#38261D] px-2 py-0.5 rounded border border-[#B58A64]/30">
                    Interactive
                  </span>
                </div>

                {selectedTech ? (
                  (() => {
                    const tech = currentGroup.items.find(
                      (i) => i.name === selectedTech
                    );
                    if (!tech) return null;
                    return (
                      <div className="py-4 space-y-4">
                        <div>
                          <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest block mb-1">
                            SELECTED COMPONENT
                          </span>
                          <h4 className="font-display font-bold text-xl text-[#F5F0E8]">
                            {tech.name}
                          </h4>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1C1410] border border-[#4A3428] space-y-2">
                          <span className="font-mono text-[10px] text-[#D8C5AF]/70 uppercase block">
                            PRACTICAL IMPLEMENTATION SCOPE:
                          </span>
                          <p className="text-xs text-[#D8C5AF] leading-relaxed">
                            {tech.note}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#1C1410] border border-[#4A3428] space-y-2">
                          <span className="font-mono text-[10px] text-[#D8C5AF]/70 uppercase block">
                            ENGINEERING ASSURANCE:
                          </span>
                          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span>
                              {tech.level === "Proficient & Implemented"
                                ? "Production-Tested Architecture & Schema Rigor"
                                : "Active Lab Benchmarking & Integration Testing"}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedTech(null)}
                          className="w-full py-2 rounded-xl bg-[#38261D] hover:bg-[#4A3428] text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] transition-colors"
                        >
                          Clear Selection
                        </button>
                      </div>
                    );
                  })()
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#38261D] text-[#B58A64] flex items-center justify-center mx-auto border border-[#4A3428]">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-semibold text-sm text-[#F5F0E8]">
                      Tap Any Technology to Inspect
                    </h4>
                    <p className="text-xs text-[#D8C5AF]/70 max-w-xs mx-auto leading-relaxed">
                      Select any capability on the left to review its architectural application, schema patterns, and production guarantees.
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-[#4A3428] flex items-center justify-between text-[10px] font-mono text-[#D8C5AF]/60">
                  <span>DISCIPLINE: {currentGroup.title.toUpperCase()}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
