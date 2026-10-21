"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Dynamic backdrop layer separated from root to avoid breaking position: fixed for mobile menu */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#F5F0E8]/98 backdrop-blur-md border-b border-[#D8C5AF]/70 shadow-[0_4px_20px_rgba(36,26,21,0.06)]"
            : "bg-[#F5F0E8]/92 backdrop-blur-sm border-b border-[#D8C5AF]/40"
        }`}
      />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-4"}`}>
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Profile Picture Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3428] rounded-md p-1"
            aria-label="Charles Mark - Home"
          >
            {/* Profile Picture Logo */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#4A3428] group-hover:border-[#B58A64] transition-colors shadow-sm bg-[#241A15] flex-shrink-0">
              <Image
                src="/charles-mark.png"
                alt="Charles Mark"
                fill
                sizes="40px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-[#241A15] group-hover:text-[#4A3428] transition-colors uppercase">
                CHARLES MARK
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#4A3428]/70 uppercase -mt-0.5">
                AI Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#FAF7F2] p-1.5 rounded-full border border-[#D8C5AF]/70 shadow-sm flex-shrink-0"
          >
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-[13px] font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[#241A15] text-[#F5F0E8] shadow-sm font-semibold"
                      : "text-[#4A3428] hover:text-[#241A15] hover:bg-[#D8C5AF]/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA: Direct WhatsApp button */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile/Tablet Menu Button - Visible below lg */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-[#241A15] hover:bg-[#D8C5AF]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A3428] cursor-pointer shadow-xs active:scale-95"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-[#241A15]" /> : <Menu className="w-6 h-6 text-[#241A15]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 z-[90] lg:hidden bg-[#241A15]/60 backdrop-blur-sm flex flex-col"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#F5F0E8] border-b border-[#D8C5AF] px-6 py-6 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#241A15] text-[#F5F0E8]"
                        : "text-[#241A15] hover:bg-[#D8C5AF]/40"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#D8C5AF]" : "text-[#4A3428]/50"
                      }`}
                    />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#D8C5AF] flex flex-col gap-2.5">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-md active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </a>
              </div>

              {/* Status Badge without AI-style blinking dot */}
              <div className="mt-4 px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#D8C5AF]/70 flex items-center gap-2.5">
                <span className="text-xs text-[#4A3428] font-medium">
                  Open for new workflow audits & client builds
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
