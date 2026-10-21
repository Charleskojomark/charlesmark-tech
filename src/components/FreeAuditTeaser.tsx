import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function FreeAuditTeaser() {
  return (
    <section
      id="audit"
      aria-label="Free AI Audit"
      className="py-12 sm:py-16 bg-[#1C1410] text-[#F5F0E8] border-y border-[#4A3428] relative scroll-mt-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B58A64]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#241A15] border border-[#B58A64]/40 font-mono text-[11px] font-semibold text-[#B58A64] uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#B58A64]" />
          <span>FREE VALUE OFFER • ZERO OBLIGATION</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F0E8] tracking-tight">
          FREE 15-MINUTE ASYNC AI & AUTOMATION AUDIT
        </h2>

        <p className="text-xs sm:text-sm text-[#D8C5AF] mt-2.5 max-w-xl mx-auto leading-relaxed">
          Send me your manual bottleneck. Within 48 hours, I will record a private video or 1-page architecture teardown mapping the exact tools and cost breakdown to solve it.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#B58A64] hover:bg-[#9c7450] text-[#150F0B] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
          >
            <span>View Full Audit Breakdown & Claim</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
