import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  return (
    <section className="py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241A15] rounded-3xl p-6 sm:p-10 lg:p-16 border border-[#4A3428] shadow-2xl relative overflow-hidden text-[#F5F0E8]">
          {/* Subtle warm glow and tech grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38261D] border border-[#B58A64]/40 text-[#D8C5AF] font-mono text-[11px] sm:text-xs mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Engineering Inquiries Open</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#D8C5AF] leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Have a business process to automate, an AI system to build, or an application that needs backend engineering? Tell me what you are working on.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl sm:rounded-full bg-[#B58A64] hover:bg-[#D8C5AF] text-[#241A15] font-display font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-center group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex-shrink-0" />
                <span>Message on WhatsApp ({siteConfig.contact.phoneDisplay})</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#241A15] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.contact.fallbackMailto}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl sm:rounded-full bg-[#38261D] border border-[#4A3428] hover:border-[#B58A64] text-[#F5F0E8] font-mono text-xs font-medium transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-[#D8C5AF] flex-shrink-0" />
                <span>Email Fallback</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-[#D8C5AF]/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Direct WhatsApp: <strong>{siteConfig.contact.phoneDisplay}</strong></span>
              </span>
              <span>•</span>
              <span>No forms required • Direct engineer access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
