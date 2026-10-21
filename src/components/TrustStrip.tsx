"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Server,
  Workflow,
  Network,
  Cloud,
  X,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const DISCIPLINES = [
  { label: "AGENTIC AI", icon: Cpu, desc: "Multi-agent evals & LangGraph" },
  { label: "BACKEND ARCH", icon: Server, desc: "High-concurrency APIs & SQL" },
  { label: "CLOUD DEVOPS", icon: Cloud, desc: "Docker, K8s & CI/CD pipelines" },
  { label: "HYBRID RAG", icon: Network, desc: "pgvector & cross-encoder rerank" },
  { label: "FORWARD DEPLOYED", icon: Workflow, desc: "FAANG-trained technical delivery" },
];

const DISCIPLINE_DETAILS: Record<
  string,
  {
    headline: string;
    deliverables: string[];
    stack: string[];
    outcome: string;
    whatsappMessage: string;
  }
> = {
  "AGENTIC AI": {
    headline: "Deterministic multi-agent workflows with LangGraph & eval guardrails",
    deliverables: [
      "State-machine LangGraph agents with automated tool-calling and deterministic JSON schemas",
      "Automated evaluation suites measuring context recall, faithfulness, and ground-truth validation",
      "Human-in-the-loop review queues and error recovery fallbacks for 100% dependable workflows",
    ],
    stack: ["LangGraph", "LangChain", "OpenAI / Claude APIs", "Pydantic", "Ragas Eval", "DSPy"],
    outcome: "Replaces 4+ hours of manual administrative analysis per case with a 90-second deterministic pipeline at 99.4% precision.",
    whatsappMessage: "Hi Charles, I'd like to discuss architecting a LangGraph agentic AI workflow for our business.",
  },
  "BACKEND ARCH": {
    headline: "High-concurrency APIs, resilient SQL databases, and distributed task queues",
    deliverables: [
      "Asynchronous background worker architecture with Redis and BullMQ for zero dropped tasks",
      "High-throughput PostgreSQL schema design, indexing optimization, and zero-downtime migrations",
      "Strict API rate limiting, webhook retry engines, and sub-100ms p95 latency guarantees",
    ],
    stack: ["Node.js / TypeScript", "Python / FastAPI", "PostgreSQL", "Redis", "Prisma / Drizzle", "BullMQ"],
    outcome: "Zero dropped webhooks or data loss under traffic surges up to 25,000 requests/min; sub-100ms p95 response times.",
    whatsappMessage: "Hi Charles, I'd like to discuss backend architecture and database scaling for our platform.",
  },
  "CLOUD DEVOPS": {
    headline: "Containerization, automated CI/CD pipelines, and high-availability cloud infrastructure",
    deliverables: [
      "Multi-stage Docker builds reducing image sizes from 1.2GB down to <80MB with security hardening",
      "Automated GitHub Actions CI/CD with automated testing, linting, and zero-downtime rollouts",
      "Kubernetes deployment manifests with Horizontal Pod Autoscaling (HPA) and Prometheus telemetry",
    ],
    stack: ["Docker", "Kubernetes", "AWS (ECS / EKS)", "GitHub Actions", "Terraform", "Cloudflare"],
    outcome: "Cuts deployment release cycle time from 2 weeks to 20 minutes with 99.99% uptime and instant automated rollbacks.",
    whatsappMessage: "Hi Charles, I'd like to talk about automating our CI/CD pipelines and cloud DevOps infrastructure.",
  },
  "HYBRID RAG": {
    headline: "Enterprise knowledge retrieval with pgvector, BM25 keyword search, and cross-encoders",
    deliverables: [
      "Hybrid retrieval combining dense vector embeddings with sparse BM25 keyword precision",
      "Cohere and BGE cross-encoder rerankers that prioritize context relevance over raw distance",
      "Strict hallucination guardrails, contextual chunking, and verifiable citation tracking",
    ],
    stack: ["pgvector", "PostgreSQL", "Cohere Rerank", "Qdrant / Pinecone", "LlamaIndex", "Text Embeddings"],
    outcome: "Eliminates AI hallucinations on company documentation, reaching 98.7% retrieval precision on technical documents.",
    whatsappMessage: "Hi Charles, I'd like to discuss building a hybrid RAG system with pgvector and cross-encoder reranking.",
  },
  "FORWARD DEPLOYED": {
    headline: "FAANG-trained technical delivery embedded directly with engineering & executive leadership",
    deliverables: [
      "Direct embedded engineering alongside CTOs, founders, and engineering teams without agency layers",
      "Rapid architectural discovery, live system design blueprints, and clear technical roadmaps",
      "Hands-on prototype-to-production execution with clean, fully documented, maintainable code",
    ],
    stack: ["System Architecture", "Rapid Prototyping", "Production Readiness", "Pair Programming", "Sprint Delivery"],
    outcome: "Goes from ambiguous problem statement to live, production-grade system in 14 days without long agency delays.",
    whatsappMessage: "Hi Charles, I'd like to discuss hiring you as a Forward Deployed Engineer for our technical project.",
  },
};

export function TrustStrip() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const activeDetail = selectedDiscipline ? DISCIPLINE_DETAILS[selectedDiscipline] : null;
  const activeItem = selectedDiscipline ? DISCIPLINES.find((d) => d.label === selectedDiscipline) : null;

  // Listen for Escape key and clicks outside to dismiss floating dialog (without locking scroll or darkening screen)
  useEffect(() => {
    if (!selectedDiscipline) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDiscipline(null);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // If clicking inside the floating dialog, ignore
      if (dialogRef.current?.contains(target)) return;
      // If clicking one of the discipline trigger buttons, let its onClick handle toggle/switch
      if (target.closest("[data-discipline-trigger]")) return;
      // Otherwise close the floating dialog
      setSelectedDiscipline(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [selectedDiscipline]);

  return (
    <section
      aria-label="Core Engineering Disciplines"
      className="w-full border-y border-[#D8C5AF]/70 bg-[#FAF7F2] py-5 sm:py-7 mb-3 sm:mb-6 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs text-[#4A3428] tracking-widest uppercase block font-bold">
                ENGINEERING DISCIPLINES
              </span>
            </div>
            <p className="text-xs text-[#241A15] font-medium mt-0.5">
              Click any discipline below to preview technical deliverables & verified stack
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 w-full lg:w-auto">
            {DISCIPLINES.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedDiscipline === item.label;

              return (
                <button
                  type="button"
                  key={item.label}
                  data-discipline-trigger="true"
                  onClick={() =>
                    setSelectedDiscipline((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  className={`group text-left flex flex-col p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] ring-2 ring-[#B58A64]/40 shadow-md"
                      : "bg-[#F5F0E8] text-[#241A15] border-[#D8C5AF]/80 hover:border-[#4A3428] hover:bg-[#FAF7F2] hover:shadow-xs active:scale-[0.98]"
                  }`}
                  aria-haspopup="dialog"
                  aria-expanded={isSelected}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors shadow-xs ${
                          isSelected
                            ? "bg-[#B58A64] text-[#150F0B]"
                            : "bg-[#241A15] text-[#F5F0E8] group-hover:bg-[#4A3428]"
                        }`}
                      >
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            isSelected ? "text-[#150F0B]" : "text-[#D8C5AF]"
                          }`}
                        />
                      </div>
                      <span
                        className={`font-mono text-xs font-bold tracking-tight ${
                          isSelected ? "text-[#F5F0E8]" : "text-[#241A15]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <Layers
                      className={`w-3.5 h-3.5 transition-colors ${
                        isSelected
                          ? "text-[#B58A64]"
                          : "text-[#4A3428]/50 group-hover:text-[#241A15]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[11px] leading-tight ${
                      isSelected ? "text-[#D8C5AF]" : "text-[#4A3428]"
                    }`}
                  >
                    {item.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Floating Dialog: Non-blocking, no dark full-screen backdrop, no scroll lock */}
        {activeDetail && activeItem && (
          <div
            className="fixed inset-x-0 top-[70px] bottom-[86px] sm:top-24 sm:bottom-8 z-[110] pointer-events-none flex items-center justify-center px-3 sm:px-5"
            role="region"
            aria-label="Discipline Specification Preview"
          >
            <div
              ref={dialogRef}
              className="pointer-events-auto relative w-full max-w-lg bg-[#1C1410] text-[#F5F0E8] border border-[#B58A64]/50 rounded-2xl shadow-2xl shadow-black/90 ring-1 ring-[#B58A64]/20 p-4 sm:p-5 my-auto max-h-full overflow-y-auto overscroll-contain animate-in zoom-in-95 fade-in duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Dialog Top Header: sticky so title & close button are always visible */}
              <div className="sticky -top-4 -mx-4 px-4 pt-1 pb-3 sm:-top-5 sm:-mx-5 sm:px-5 sm:pt-1 bg-[#1C1410] z-20 flex items-start justify-between gap-3 border-b border-[#4A3428]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B58A64] text-[#150F0B] flex items-center justify-center flex-shrink-0 shadow-md">
                    <activeItem.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#B58A64] uppercase tracking-wider">
                        {activeItem.label} SPECIFICATION
                      </span>
                      <span className="text-[9px] font-mono text-[#D8C5AF] font-bold tracking-wider">
                        • VERIFIED
                      </span>
                    </div>
                    <h3
                      id="discipline-modal-title"
                      className="font-display font-bold text-sm sm:text-base text-[#F5F0E8] tracking-tight mt-0.5 leading-snug"
                    >
                      {activeDetail.headline}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDiscipline(null)}
                  className="p-1.5 rounded-lg text-[#D8C5AF]/70 hover:text-[#F5F0E8] hover:bg-[#FAF7F2]/10 transition-colors cursor-pointer flex-shrink-0 border border-transparent hover:border-[#4A3428]"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dialog Content Sections */}
              <div className="space-y-3.5 pt-3">
                {/* 1. Core Architectural Deliverables */}
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#B58A64] uppercase tracking-wider block mb-1.5">
                    Core Architectural Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {activeDetail.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#D8C5AF] leading-relaxed bg-[#241A15]/70 p-2 sm:p-2.5 rounded-lg border border-[#4A3428]/40"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Production Tech Stack & Tools */}
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#B58A64] uppercase tracking-wider block mb-1.5">
                    Production Stack & Tooling
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetail.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#FAF7F2]/10 border border-[#D8C5AF]/20 text-[10px] font-mono text-[#F5F0E8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Business Outcome Banner */}
                <div className="p-2.5 sm:p-3 rounded-lg bg-[#150F0B] border border-[#B58A64]/30">
                  <span className="font-mono text-[9px] font-bold text-[#B58A64] uppercase tracking-wider block mb-0.5">
                    Expected Business Outcome
                  </span>
                  <p className="text-xs text-[#F5F0E8] font-medium leading-relaxed">
                    {activeDetail.outcome}
                  </p>
                </div>

                {/* Action Buttons: 50/50 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#4A3428]/80">
                  <a
                    href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                      activeDetail.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[40px]"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current flex-shrink-0" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href={siteConfig.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[40px]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                    <span>Kickoff Call</span>
                    <ArrowUpRight className="w-3 h-3 text-[#4A3428] opacity-80" />
                  </a>
                </div>

                <div className="text-center pt-0.5">
                  <span className="text-[10px] font-mono text-[#D8C5AF]/60">
                    Click outside or press Esc to dismiss
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
