"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NavSection {
  id: string;
  name: string;
  stage: string;
}

const SECTIONS: NavSection[] = [
  { id: "hero", name: "Overview", stage: "00" },
  { id: "solutions-engine", name: "Solutions", stage: "01" },
  { id: "services", name: "Services", stage: "02" },
  { id: "how-it-works", name: "Process", stage: "03" },
  { id: "reviews", name: "Reviews", stage: "04" },
  { id: "audit", name: "Free Audit", stage: "05" },
  { id: "faq", name: "FAQ", stage: "06" },
  { id: "certifications", name: "Certs", stage: "07" },
  { id: "contact", name: "Book a Call", stage: "08" },
];

export function SectionNavigator() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section Navigation Rail"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 p-2 rounded-2xl bg-[#241A15]/80 backdrop-blur-md border border-[#D8C5AF]/30 shadow-2xl"
    >
      <div className="px-2 pt-1 pb-1 border-b border-[#D8C5AF]/20 text-[9px] font-mono font-bold tracking-widest text-[#B58A64] uppercase w-full text-center">
        PIPELINE
      </div>

      <div className="flex flex-col gap-2 p-1">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip on hover */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute right-7 pointer-events-none px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold whitespace-nowrap shadow-md ${
                      isActive
                        ? "bg-[#FAF7F2] text-[#241A15] border border-[#B58A64]"
                        : "bg-[#241A15] text-[#F5F0E8] border border-[#D8C5AF]/40"
                    }`}
                  >
                    <span className="text-[#B58A64] mr-1.5">{section.stage}</span>
                    <span>{section.name}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Dot Button */}
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-label={`Jump to ${section.name}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "scale-125"
                    : "hover:scale-110 opacity-60 hover:opacity-100"
                }`}
              >
                <span className={`text-[10px] font-mono font-bold ${isActive ? "text-[#B58A64]" : "text-[#D8C5AF]/60"}`}>
                  {section.stage}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
