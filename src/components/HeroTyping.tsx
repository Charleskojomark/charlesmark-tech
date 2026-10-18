"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Terminal } from "lucide-react";

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function HeroTyping() {
  const roles = siteConfig.rolesToCycle;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentRole.length) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 70); // Natural crisp typing speed
      } else {
        // Finished typing phrase, hold for appreciation
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        }, 35); // Fast backspace
      } else {
        // Finished deleting, switch to next discipline
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 250);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, prefersReducedMotion]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-1">
      <span className="sr-only">
        Specializations: AI Workflow Automation, Custom AI Agents & RAG, and Scalable Backend Systems.
      </span>

      {/* Terminal prompt indicator */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#241A15] text-[#F5F0E8] w-fit shadow-xs">
        <Terminal className="w-3.5 h-3.5 text-[#B58A64]" />
        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-[#D8C5AF] uppercase">
          FOCUS:
        </span>
      </div>

      {/* Dynamic changing letters text container */}
      <div
        aria-hidden="true"
        className="inline-flex items-center min-h-[2.5rem] sm:min-h-[3rem] max-w-full"
      >
        <span className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#241A15] tracking-tight border-b-2 border-[#B58A64] pb-0.5 break-words">
          {prefersReducedMotion ? roles[0] : currentText}
        </span>

        {/* Visible glowing pulsing caret */}
        {!prefersReducedMotion && (
          <span
            className="inline-block w-1 sm:w-1.5 h-6 sm:h-8 bg-[#B58A64] shadow-[0_0_8px_rgba(181,138,100,0.8)] ml-1.5 animate-caret rounded-full align-middle flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
