import React from "react";
import { Quote, Sparkles, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B58A64]" />
              <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
                TESTIMONIALS OF SUCCESS STORIES
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROVEN OUTCOMES.
              <br className="hidden sm:inline" />
              VERIFIED SUCCESS STORIES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md font-sans leading-relaxed">
            Direct feedback from technical leaders, founders, and engineering peers who partnered with Charles Mark on production AI systems, workflow automation, and backend architectures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-sm flex flex-col justify-between hover:border-[#4A3428] hover:shadow-md transition-all duration-300 relative"
            >
              <div>
                {/* Top Bar: Category Tag & 5 Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#4A3428] bg-[#F5F0E8] px-2.5 py-1 rounded-md border border-[#D8C5AF]/60">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500" title="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#38261D] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C5AF]/60 space-y-3">
                {/* Measurable Outcome Callout */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#241A15] font-mono bg-[#F5F0E8] p-2.5 rounded-xl border border-[#D8C5AF]/60 group-hover:border-[#B58A64]/60 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                  <span className="font-semibold text-[#241A15]">{item.outcome}</span>
                </div>

                {/* Author Monogram & Role */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 border border-[#4A3428]">
                    {item.author.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <span className="font-display font-bold text-sm text-[#241A15] block truncate">
                      {item.author}
                    </span>
                    <span className="font-mono text-[11px] text-[#4A3428] block truncate">
                      {item.role} • {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
