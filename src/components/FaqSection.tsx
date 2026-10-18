"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { businessFaqs } from "@/data/faqs";

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
            Straight answers about budgets, deliverables, data security, and what happens after your system goes live.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {businessFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3428]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#241A15] pr-4">
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

        {/* Quick Footer for Unanswered Questions */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#4A3428]">
          <span>Have a question specific to your stack or workflow?</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-bold text-[#241A15] hover:text-[#4A3428] underline underline-offset-4"
          >
            <span>Ask Charles directly</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64]" />
          </a>
        </div>
      </div>
    </section>
  );
}
