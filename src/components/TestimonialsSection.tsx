import React from "react";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";
import { SHOW_UNVERIFIED_TESTIMONIALS, testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="proof" className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B58A64]" />
              <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
                ENGINEERING STANDARDS & VERIFIED PROOF
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              HONEST PROOF & CLIENT STANDARDS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md font-sans leading-relaxed">
            I prioritize genuine operational proof over simulated hype. Here is our direct commitment to verification, code ownership, and data security.
          </p>
        </div>

        {/* 3 Core Reliability Proof Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#B58A64]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#241A15]">
              100% Code & Data Ownership
            </h3>
            <p className="text-xs text-[#4A3428] leading-relaxed">
              Every automation workflow, custom agent, and backend schema runs directly in your infrastructure or self-hosted n8n instance. You maintain full operational control with zero vendor lock-in.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#241A15]">
              Zero Silent Failures
            </h3>
            <p className="text-xs text-[#4A3428] leading-relaxed">
              Pipelines are engineered with automated Dead Letter Queues (DLQs) and instant Slack/Email alerts. If an external API or webhook schema drifts, you know immediately rather than losing data silently.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#B58A64]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#241A15]">
              Strict Privacy & Zero AI Training
            </h3>
            <p className="text-xs text-[#4A3428] leading-relaxed">
              We connect exclusively to zero-data-retention enterprise API endpoints. Your internal company documents, customer records, and emails are never used to train public models.
            </p>
          </div>
        </div>

        {/* Verified Client Testimonials Slot (Honesty Rule compliant) */}
        {SHOW_UNVERIFIED_TESTIMONIALS && testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
                <p className="text-xs text-[#38261D] italic mb-4">&ldquo;{item.quote}&rdquo;</p>
                <div className="text-xs font-mono font-bold text-[#241A15]">{item.author}</div>
                <div className="text-[11px] font-mono text-[#4A3428]">{item.role} • {item.company}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border-2 border-dashed border-[#D8C5AF] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-mono text-xs font-bold text-[#241A15] uppercase tracking-wider">
                  VERIFIED CLIENT FEEDBACK POLICY
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A3428] leading-relaxed">
                In adherence to strict honesty standards, I do not display unverified or anonymous testimonials. Real client reviews will be published here with confirmed names, verified roles, company attribution, and express permission.
              </p>
            </div>

            {/* Clearly marked visible [TODO] slot */}
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] text-xs font-mono text-[#4A3428] flex-shrink-0">
              <span className="text-[#B58A64] font-bold block mb-1">[TODO: Verified Testimonials]</span>
              <span className="text-[11px] block text-[#4A3428]/80">
                Awaiting permission for recent enterprise client reviews.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
