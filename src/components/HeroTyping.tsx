"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function HeroTyping() {
  const roles = siteConfig.rolesToCycle;
  const [roleIndex, setRoleIndex] = useState(0);
  // Initialize with first role so there is never a blank flash or layout shift
  const [currentText, setCurrentText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentRole.length) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 70); // Natural fluid typing pace
      } else {
        // Full phrase displayed: hold for reading
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        }, 35); // Crisp backspacing
      } else {
        // Finished deleting: pause briefly then advance to next discipline
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <div className="py-1">
      <div className="inline-flex items-center min-h-[2.25rem] sm:min-h-[3rem] max-w-full">
        <span className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-[#B58A64] tracking-tight border-b-2 border-[#B58A64]/40 pb-0.5">
          {currentText}
        </span>
        <span
          aria-hidden="true"
          className="inline-block w-[3px] h-5 sm:h-8 md:h-9 bg-[#B58A64] shadow-[0_0_8px_rgba(181,138,100,0.8)] ml-1.5 animate-caret rounded-full align-middle flex-shrink-0"
        />
      </div>
    </div>
  );
}
