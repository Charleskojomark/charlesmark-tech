import React from "react";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241A15] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#4A3428] shadow-2xl relative overflow-hidden text-[#F5F0E8]">
          {/* Subtle warm glow background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Booking & Fast-Track Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38261D] border border-[#B58A64]/40 text-[#D8C5AF] font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Client Engagements</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                LET&apos;S DISCUSS YOUR WORKFLOW OR APP.
              </h2>

              <p className="text-sm sm:text-base text-[#D8C5AF] leading-relaxed">
                Have a repetitive manual bottleneck to automate, company documents that need an AI assistant, or a product idea that needs a production backend? Let&apos;s map out a solution.
              </p>

              {/* Booking Link Placeholder [TODO: booking URL] */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#38261D] border border-[#B58A64]/40 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F5F0E8] uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-[#B58A64]" />
                    <span>Schedule a 20-min Discovery Call</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D8C5AF] bg-[#241A15] px-2 py-0.5 rounded">
                    Free Review
                  </span>
                </div>
                <p className="text-xs text-[#D8C5AF] leading-relaxed">
                  Pick a time directly on my calendar to review your manual workflow and determine automation feasibility.
                </p>
                <a
                  href={siteConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#B58A64] hover:bg-[#D8C5AF] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Book Call ({siteConfig.booking.placeholder})</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Secondary WhatsApp Channel */}
              <div className="p-4 rounded-2xl bg-[#38261D]/60 border border-[#4A3428] space-y-2">
                <span className="font-mono text-[11px] text-[#D8C5AF] block">
                  Prefer direct messaging?
                </span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5F0E8] hover:text-[#25D366] transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex-shrink-0" />
                  <span>Chat on WhatsApp: {siteConfig.contact.phoneDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C5AF]" />
                </a>
              </div>

              {/* Email direct */}
              <div className="pt-2 text-xs font-mono text-[#D8C5AF]/80 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B58A64]" />
                <span>Or email: <strong>{siteConfig.contact.email}</strong></span>
              </div>
            </div>

            {/* Right Column: Short Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F5F0E8] text-[#241A15] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-lg border border-[#D8C5AF]">
              <div className="mb-6">
                <span className="font-mono text-[11px] text-[#B58A64] uppercase font-bold tracking-wider block mb-1">
                  SUBMIT A PROJECT BRIEF
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15]">
                  Tell Me What You Want to Build
                </h3>
                <p className="text-xs text-[#4A3428] mt-1">
                  Fill out this 60-second brief and I will get back to you with an honest feasibility review and next steps.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
