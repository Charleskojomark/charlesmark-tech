"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function StickyBookCallBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar once user scrolls past 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-auto sm:right-6 lg:left-1/2 lg:-translate-x-1/2 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between gap-3 sm:gap-4 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#1C1410]/95 backdrop-blur-md border border-[#B58A64]/40 shadow-2xl text-[#F5F0E8]">
        {/* Left: Charles Mark Mini Status */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#B58A64] flex-shrink-0 bg-[#241A15]">
            <Image
              src="/charles-mark.png"
              alt="Charles Mark"
              fill
              sizes="32px"
              className="object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10B981] border border-[#1C1410]" />
          </div>
          <div className="hidden md:block text-left">
            <span className="block font-display font-bold text-xs text-[#F5F0E8] leading-tight">
              Charles Mark
            </span>
            <span className="block font-mono text-[10px] text-[#D8C5AF]/80 leading-tight">
              Ready to improve your business systems?
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {/* Cal.com Direct Booking Button */}
          <a
            href={siteConfig.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-display font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B58A64]" />
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#4A3428]" />
          </a>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
