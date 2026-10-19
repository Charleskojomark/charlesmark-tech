"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight, Calendar, MessageCircle } from "lucide-react";
import { businessFaqs } from "@/data/faqs";
import { siteConfig } from "@/config/site";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("cost");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B58A64]" />
            <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
              COMMERCIAL & TECHNICAL CLARITY
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-xl mx-auto mt-2 leading-relaxed">
            Straight answers to commercial, technical, and operational questions business leaders ask before working with me.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {businessFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#D8C5AF] bg-[#FAF7F2] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#F5F0E8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#241A15]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F5F0E8] border border-[#D8C5AF] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#241A15] text-[#F5F0E8]" : "text-[#4A3428]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#4A3428] leading-relaxed border-t border-[#D8C5AF]/40">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Direct Booking Action Bar */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <span className="font-display font-bold text-sm sm:text-base block">
              Have a technical question specific to your stack or business?
            </span>
            <span className="text-xs text-[#D8C5AF]/80 font-mono">
              Get direct architectural advice from Charles Mark with zero sales fluff.
            </span>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B58A64]" />
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
