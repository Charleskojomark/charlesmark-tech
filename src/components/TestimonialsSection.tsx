import React from "react";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div>
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              CLIENT & PEER RECOGNITION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROVEN OUTCOMES.
              <br className="hidden sm:inline" />
              VERIFIED SUCCESS STORIES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md font-sans">
            Direct feedback from technical leaders and team members who have partnered with Charles Mark on production AI systems, workflow automation, and backend architectures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-sm flex flex-col justify-between hover:border-[#4A3428] transition-colors relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#4A3428] bg-[#F5F0E8] px-2.5 py-1 rounded-md border border-[#D8C5AF]/60">
                    {item.tag}
                  </span>
                  <Quote className="w-5 h-5 text-[#B58A64]/50" />
                </div>

                <p className="text-xs sm:text-sm text-[#38261D] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C5AF]/60 space-y-3">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#241A15] font-mono bg-[#F5F0E8] p-2.5 rounded-xl border border-[#D8C5AF]/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                  <span className="font-semibold text-[#241A15] truncate">{item.outcome}</span>
                </div>

                <div>
                  <span className="font-display font-bold text-sm text-[#241A15] block">
                    {item.author}
                  </span>
                  <span className="font-mono text-[11px] text-[#4A3428] block">
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
