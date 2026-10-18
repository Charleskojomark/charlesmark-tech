"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  id,
  delay = 0,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
