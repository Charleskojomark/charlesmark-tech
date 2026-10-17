"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, PencilRuler, Wrench, ShieldCheck, TrendingUp, Check } from "lucide-react";

interface Step {
  step: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  engineeringFocus: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Understand",
    headline: "Deconstruct the business problem & define measurable outcomes",
    description:
      "Before writing any code or configuring pipelines, we identify exactly where the human friction occurs, quantify data formats, and determine failure tolerance.",
    icon: Compass,
    deliverables: [
      "Process flow diagram & input/output contract",
      "Identification of API access boundaries & security requirements",
      "Cost-benefit estimation & automated vs. human-review thresholds",
    ],
    engineeringFocus: "Preventing scope creep and eliminating low-value automation attempts early.",
  },
  {
    step: "02",
    title: "Design",
    headline: "Architect resilient workflows, schemas, and API contracts",
    description:
      "System design dictates long-term stability. I design data schemas, determine state persistence needs (LangGraph vs. stateless handlers), and plan error recovery pathways.",
    icon: PencilRuler,
    deliverables: [
      "Strict data models (Zod/Pydantic schemas & database migrations)",
      "Architecture diagram & webhook routing topologies",
      "Fallback policies, rate limit quotas, and token budget bounds",
    ],
    engineeringFocus: "Designing deterministic interfaces so LLMs are constrained by typed contracts.",
  },
  {
    step: "03",
    title: "Build",
    headline: "Implement the system with clean, maintainable code",
    description:
      "Developing the actual backend services, n8n automation pipelines, or agentic loops. Code is modularized, typed with TypeScript/Python, and containerized for deployment parity.",
    icon: Wrench,
    deliverables: [
      "Modular services in Node.js/Express, FastAPI, or n8n workflows",
      "Database schema synchronization & connection pooling",
      "Environment isolation with zero hardcoded secret variables",
    ],
    engineeringFocus: "Asynchronous decoupling so heavy AI inference never blocks client network calls.",
  },
  {
    step: "04",
    title: "Test",
    headline: "Validate edge cases, hallucination guards, and failure modes",
    description:
      "Software breaks at the edges. I stress-test network timeouts, test dead-letter queues, verify cryptographic webhook signatures, and ensure malicious or malformed inputs fail safely.",
    icon: ShieldCheck,
    deliverables: [
      "Automated unit & integration test suites",
      "Malformed webhook payload simulation & DLQ verification",
      "Prompt safety evaluations against output drift",
    ],
    engineeringFocus: "Zero silent failures: all unrecoverable errors trigger actionable alerts.",
  },
  {
    step: "05",
    title: "Improve",
    headline: "Document operational runbooks & optimize performance",
    description:
      "Production launch is the beginning of the feedback cycle. We observe real throughput, analyze latency bottlenecks, and refine prompts or database indexes based on empirical logs.",
    icon: TrendingUp,
    deliverables: [
      "Complete technical documentation & operational runbooks",
      "Telemetry dashboard / log inspection setup",
      "Continuous optimization roadmap based on real usage",
    ],
    engineeringFocus: "Empowering your team with clear documentation so the system is effortlessly maintained.",
  },
];

export function HowIWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = STEPS[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <section id="process" className="py-10 sm:py-16 md:py-20 bg-[#FAF7F2] border-y border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 md:mb-14">
          <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
            ENGINEERING METHODOLOGY
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-[#241A15] tracking-tight">
            HOW I WORK: FROM PROBLEM TO PRODUCTION
          </h2>
          <p className="text-xs sm:text-sm text-[#4A3428] mt-2 sm:mt-3 leading-relaxed">
            A disciplined, step-by-step engineering process designed to eliminate ambiguity, guarantee reliability, and ensure long-term maintainability.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {STEPS.map((step, index) => {
            const isSelected = activeStepIndex === index;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#241A15] border-[#241A15] text-[#F5F0E8] shadow-md ring-2 ring-[#B58A64]"
                    : "bg-[#F5F0E8] border-[#D8C5AF] text-[#4A3428] hover:border-[#4A3428] hover:bg-[#FAF7F2]"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? "text-[#B58A64]" : "text-[#4A3428]/60"
                    }`}
                  >
                    PHASE {step.step}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#B58A64]" />}
                </div>
                <span className="font-display font-bold text-sm tracking-tight">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Card with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-[#F5F0E8] rounded-3xl p-6 sm:p-10 border border-[#D8C5AF] shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
                    <StepIcon className="w-5 h-5 text-[#B58A64]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#B58A64] font-semibold tracking-wider uppercase">
                      STAGE {currentStep.step} / 05
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#241A15]">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <p className="font-display text-lg text-[#241A15] font-semibold leading-snug pt-2">
                  &ldquo;{currentStep.headline}&rdquo;
                </p>
                <p className="text-sm text-[#4A3428] leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="mt-4 p-4 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/70">
                  <span className="font-mono text-[11px] text-[#241A15] font-bold tracking-wider uppercase block mb-1">
                    ENGINEERING CONSIDERATION:
                  </span>
                  <p className="text-xs text-[#4A3428] font-mono leading-relaxed">
                    {currentStep.engineeringFocus}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 border border-[#D8C5AF]">
                <span className="font-mono text-xs text-[#241A15] font-semibold uppercase tracking-wider block mb-4">
                  KEY DELIVERABLES
                </span>
                <ul className="space-y-3">
                  {currentStep.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#4A3428]">
                      <div className="w-4 h-4 rounded-full bg-[#B58A64]/20 text-[#4A3428] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#241A15]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
