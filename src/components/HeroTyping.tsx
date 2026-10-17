"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function HeroTyping() {
  const roles = siteConfig.rolesToCycle;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, fix to the first role without typing animation
    if (prefersReducedMotion) {
      setCurrentText(roles[0]);
      return;
    }

    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentRole.length) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 75); // Natural typing speed
      } else {
        // Finished typing word, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        }, 40); // Deletion speed
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timer = setTimeout(() => {}, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, prefersReducedMotion]);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-3 py-1">
      {/* Screen reader accessible persistent description */}
      <span className="sr-only">
        I build systems as an AI Systems Engineer, Backend Engineer, AI Automation Engineer, and AI Agent Builder.
      </span>

      {/* Static prefix phrase */}
      <span
        aria-hidden="true"
        className="font-display text-xl sm:text-2xl md:text-3xl text-[#4A3428] font-normal"
      >
        I build systems as an
      </span>

      {/* Dynamic typing container with fixed minimum dimensions to prevent layout shifts */}
      <div
        aria-hidden="true"
        className="inline-flex items-center min-h-[2.5rem] sm:min-h-[2.75rem] min-w-[280px] sm:min-w-[340px]"
      >
        <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#241A15] tracking-tight border-b-2 border-[#B58A64]/40 pb-0.5">
          {prefersReducedMotion ? roles[0] : currentText}
        </span>
        {/* Visible blinking caret */}
        {!prefersReducedMotion && (
          <span
            className="inline-block w-[3px] h-6 sm:h-8 bg-[#4A3428] ml-1.5 animate-caret rounded-full align-middle"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
