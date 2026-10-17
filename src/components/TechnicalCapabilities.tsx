"use client";

import React, { useState } from "react";
import { capabilities } from "@/data/capabilities";
import { Terminal, CheckCircle2, BookOpen, Layers } from "lucide-react";

export function TechnicalCapabilities() {
  const [selectedGroupId, setSelectedGroupId] = useState("all");

  const filteredGroups =
    selectedGroupId === "all"
      ? capabilities
      : capabilities.filter((g) => g.id === selectedGroupId);

  return (
    <section id="capabilities" className="py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              TECHNICAL PROFICIENCY MATRIX
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-[#241A15] tracking-tight">
              PROVEN STACK & HONEST CAPABILITIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            Technologies grouped by architectural role. Categorized transparently between production-tested implementations and active lab research.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedGroupId("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
              selectedGroupId === "all"
                ? "bg-[#241A15] text-[#F5F0E8]"
                : "bg-[#FAF7F2] border border-[#D8C5AF] text-[#4A3428] hover:bg-[#D8C5AF]/40"
            }`}
          >
            All Disciplines
          </button>
          {capabilities.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroupId(group.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
                selectedGroupId === group.id
                  ? "bg-[#241A15] text-[#F5F0E8]"
                  : "bg-[#FAF7F2] border border-[#D8C5AF] text-[#4A3428] hover:bg-[#D8C5AF]/40"
              }`}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
                      <Layers className="w-4 h-4 text-[#B58A64]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#241A15]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#4A3428]/60 px-2.5 py-1 rounded bg-[#F5F0E8] border border-[#D8C5AF]/60">
                    {group.items.length} TECHNOLOGIES
                  </span>
                </div>
                <p className="text-xs text-[#4A3428] mb-6">
                  {group.description}
                </p>

                {/* Items */}
                <div className="space-y-3">
                  {group.items.map((item) => {
                    const isProficient = item.level === "Proficient & Implemented";
                    const isLearning = item.level === "Active Learning & Labs";

                    return (
                      <div
                        key={item.name}
                        className="p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/70 flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-[#241A15]">
                            {item.name}
                          </span>
                          <span
                            className={`font-mono text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 ${
                              isProficient
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : isLearning
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : "bg-blue-100 text-blue-900 border border-blue-300"
                            }`}
                          >
                            {isProficient && <CheckCircle2 className="w-3 h-3" />}
                            {isLearning && <BookOpen className="w-3 h-3" />}
                            <span>{item.level}</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4A3428] leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stack validation footnote */}
              <div className="mt-6 pt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between text-[11px] font-mono text-[#4A3428]/70">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#B58A64]" />
                  <span>Production & Lab Verified</span>
                </span>
                <span>Zero fabricated metrics</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
