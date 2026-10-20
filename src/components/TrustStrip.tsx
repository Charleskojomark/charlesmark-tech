"use client";

import React, { useState } from "react";
import {
  Cpu,
  Server,
  Workflow,
  Network,
  Cloud,
  ChevronDown,
  X,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
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

  const activeDetail = selectedDiscipline ? DISCIPLINE_DETAILS[selectedDiscipline] : null;
  const activeItem = selectedDiscipline ? DISCIPLINES.find((d) => d.label === selectedDiscipline) : null;

  return (
    <section
      aria-label="Core Engineering Disciplines"
      className="w-full border-y border-[#D8C5AF]/70 bg-[#FAF7F2] py-5 sm:py-7 my-3 sm:my-6 transition-all duration-300"
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
              Click any discipline below to view technical deliverables & verified stack
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
                  onClick={() =>
                    setSelectedDiscipline(isSelected ? null : item.label)
                  }
                  className={`group text-left flex flex-col p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] ring-2 ring-[#B58A64]/40 shadow-md"
                      : "bg-[#F5F0E8] text-[#241A15] border-[#D8C5AF]/80 hover:border-[#4A3428] hover:bg-[#FAF7F2] hover:shadow-xs"
                  }`}
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
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isSelected
                          ? "rotate-180 text-[#B58A64]"
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

        {/* Expandable Technical Details Card */}
        {activeDetail && activeItem && (
          <div className="mt-5 pt-5 border-t border-[#D8C5AF]/70 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="p-4 sm:p-6 rounded-2xl bg-[#241A15] text-[#F5F0E8] border border-[#B58A64]/40 shadow-xl">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#4A3428]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B58A64] text-[#150F0B] flex items-center justify-center flex-shrink-0 shadow-md">
                    <activeItem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider">
                        {activeItem.label} DISCIPLINE SPECIFICATION
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2]/10 border border-[#B58A64]/30 text-[10px] font-mono text-[#D8C5AF]">
                        PRODUCTION VERIFIED
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F0E8] tracking-tight mt-0.5">
                      {activeDetail.headline}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDiscipline(null)}
                  className="p-1.5 rounded-lg text-[#D8C5AF]/70 hover:text-[#F5F0E8] hover:bg-[#FAF7F2]/10 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Card Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                {/* Column 1: Core Deliverables */}
                <div className="lg:col-span-6 space-y-2.5">
                  <span className="font-mono text-[11px] font-bold text-[#B58A64] uppercase tracking-wider block">
                    Core Architectural Deliverables
                  </span>
                  <div className="space-y-2">
                    {activeDetail.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D8C5AF] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Tech Stack & Tools */}
                <div className="lg:col-span-3 space-y-2.5">
                  <span className="font-mono text-[11px] font-bold text-[#B58A64] uppercase tracking-wider block">
                    Production Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetail.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF7F2]/10 border border-[#D8C5AF]/20 text-[11px] font-mono text-[#F5F0E8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Business Outcome & CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between p-3.5 rounded-xl bg-[#150F0B] border border-[#B58A64]/30 gap-3">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                      Business Outcome
                    </span>
                    <p className="text-xs text-[#F5F0E8] font-medium leading-relaxed">
                      {activeDetail.outcome}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-1 border-t border-[#4A3428]">
                    <a
                      href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                        activeDetail.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
                      <span>Discuss on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <a
                      href={siteConfig.booking.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-display font-bold text-[11px] uppercase tracking-wider transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#B58A64]" />
                      <span>Book a Kickoff Call</span>
                      <ArrowUpRight className="w-3 h-3 text-[#4A3428] opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
