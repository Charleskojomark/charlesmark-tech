import React from "react";
import { Compass, PencilRuler, Wrench, ShieldCheck, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

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
      "Developing the actual backend services, cloud containers, or agentic loops. Code is modularized, typed with TypeScript/Python/Go, and containerized for deployment parity.",
    icon: Wrench,
    deliverables: [
      "Modular services in Node.js/Express, FastAPI, or containerized Docker clusters",
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
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] border-y border-[#D8C5AF]/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
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

        {/* 5 Primary Phase Cards with One-Line Explanation Each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="flex flex-col justify-between p-5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] hover:border-[#B58A64] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs font-bold text-[#B58A64]">
                      PHASE {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#241A15] text-[#D8C5AF] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#241A15] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4A3428] leading-relaxed">
                    {step.headline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Conversion Footer */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display font-bold text-sm sm:text-base text-[#241A15] block">
              Ready to take your business systems from problem to production?
            </span>
            <span className="text-xs text-[#4A3428] font-mono">
              Schedule a technical kickoff call or message Charles directly.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <a
              href={siteConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
            >
              <Calendar className="w-4 h-4 text-[#B58A64] flex-shrink-0" />
              <span>Book Kickoff Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C5AF] flex-shrink-0" />
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-80 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
