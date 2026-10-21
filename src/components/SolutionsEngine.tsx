"use client";

import React, { useState } from "react";
import {
  Workflow,
  Cpu,
  Server,
  Cloud,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  friction: string;
  solution: string;
  techStack: string[];
  businessRoi: {
    label: string;
    value: string;
  }[];
  bookingParam: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "workflow-automation",
    category: "AI Workflow Automation",
    title: "Eliminate Manual Admin & Repetitive Data Copying",
    tagline: "Free your team from 15–20 hours of manual operational drag every single week.",
    icon: Workflow,
    friction:
      "Inquiries sit in inboxes for days, staff manually re-type invoice items into accounting sheets, and customer data is copied between 4 different tools.",
    solution:
      "I architect end-to-end event-driven pipelines using self-hosted n8n and Python. Inbound data is validated against strict Pydantic schemas, processed with vision LLMs, and synced directly to your database, CRM, and Slack in real time.",
    techStack: ["n8n (Self-Hosted)", "Python", "Pydantic", "PostgreSQL", "Slack / HubSpot APIs"],
    businessRoi: [
      { label: "Time Saved", value: "15–20 hrs/wk per team" },
      { label: "Response Speed", value: "Instant (< 3s)" },
      { label: "Data Accuracy", value: "100% schema validated" },
    ],
    bookingParam: "Workflow%20Automation",
  },
  {
    id: "agentic-systems",
    category: "Agentic Systems & AI Orchestration",
    title: "Deploy Autonomous AI Agents with Zero Hallucination",
    tagline: "Turn unstructured documents and complex workflows into reliable autonomous actions.",
    icon: Cpu,
    friction:
      "Single-prompt wrappers hallucinate, fail under edge cases, cannot coordinate multiple tools, and leak sensitive internal company data.",
    solution:
      "I design deterministic multi-agent state machines using LangGraph. Agents operate with isolated tool permissions, hybrid RAG retrieval over company documents, and automated evaluation harnesses that block unverified outputs.",
    techStack: ["LangGraph", "pgvector", "BM25 Hybrid RAG", "Cross-Encoder Evals", "FastAPI"],
    businessRoi: [
      { label: "Factual Accuracy", value: "Strict cited attribution" },
      { label: "Evaluation Rigor", value: "Deterministic test suites" },
      { label: "Data Security", value: "Zero public model training" },
    ],
    bookingParam: "Agentic%20Systems",
  },
  {
    id: "backend-architecture",
    category: "Backend Systems Architecture",
    title: "High-Throughput APIs & Resilient Database Systems",
    tagline: "Eliminate database locks, server crashes, and dropped webhook transactions.",
    icon: Server,
    friction:
      "Legacy backends freeze under traffic spikes, database queries run slow without proper indexing, and asynchronous messages get lost silently.",
    solution:
      "I engineer type-safe, modular microservices in Node/TypeScript and Python/FastAPI. Relational data is modeled in PostgreSQL with transactional ACID boundaries, Redis caching, and Kafka/RabbitMQ async event brokers.",
    techStack: ["Node.js / TypeScript", "FastAPI / Python", "PostgreSQL", "Redis", "Kafka / RabbitMQ"],
    businessRoi: [
      { label: "System Uptime", value: "99.99% reliability" },
      { label: "API Latency", value: "sub-50ms responses" },
      { label: "Message Delivery", value: "Zero packet loss" },
    ],
    bookingParam: "Backend%20Architecture",
  },
  {
    id: "cloud-devops",
    category: "Cloud Infrastructure & DevOps",
    title: "Containerized Cloud Clusters & 1-Click CI/CD",
    tagline: "Ship software reliably with zero downtime, automated testing, and deep observability.",
    icon: Cloud,
    friction:
      "Deployments are manual and prone to human error, environments drift across stages, and engineering teams have zero visibility when an outage strikes.",
    solution:
      "I containerize your infrastructure with multi-stage Docker builds, configure Kubernetes orchestration, and deploy automated GitHub Actions CI/CD pipelines with rollback triggers and OpenTelemetry monitoring on AWS/GCP.",
    techStack: ["Docker", "Kubernetes", "GitHub Actions CI/CD", "AWS / GCP", "OpenTelemetry & Prometheus"],
    businessRoi: [
      { label: "Deployment Speed", value: "1-Click zero-downtime" },
      { label: "Failure Recovery", value: "Automated rollbacks" },
      { label: "Cloud Monitoring", value: "24/7 active telemetry" },
    ],
    bookingParam: "Cloud%20DevOps",
  },
];

export function SolutionsEngine() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = SOLUTIONS[activeTab];
  const Icon = activeSolution.icon;

  return (
    <section id="solutions-engine" className="py-14 sm:py-20 md:py-28 bg-[#FAF7F2] border-y border-[#D8C5AF]/70 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
            HOW I SOLVE BOTTLENECKS & IMPROVE YOUR BUSINESS
          </h2>
          <p className="text-sm sm:text-base text-[#4A3428] mt-3 leading-relaxed">
            Every engagement is engineered around your business&apos;s bottom line. Select any operational challenge below to see the exact technical architecture I build and the measurable business ROI delivered.
          </p>
        </div>

        {/* 4 Solution Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {SOLUTIONS.map((item, idx) => {
            const TabIcon = item.icon;
            const isSelected = activeTab === idx;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#241A15] text-[#F5F0E8] border-[#241A15] shadow-lg scale-[1.02]"
                    : "bg-[#F5F0E8] hover:bg-[#FAF7F2] text-[#241A15] border-[#D8C5AF]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isSelected ? "bg-[#FAF7F2] text-[#241A15]" : "bg-[#241A15] text-[#F5F0E8]"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-[#B58A64] text-[#241A15]"
                        : "bg-[#FAF7F2] text-[#4A3428] border border-[#D8C5AF]"
                    }`}
                  >
                    SOL 0{idx + 1}
                  </span>
                </div>
                <span className="font-display font-bold text-xs sm:text-sm leading-snug">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Deep Dive Showcase */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#D8C5AF] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 Cols: The Problem & Solution Breakdown */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider block mb-1">
                  SOLUTION 0{activeTab + 1} • {activeSolution.category}
                </span>
                <h3 className="font-display text-xl sm:text-3xl font-extrabold text-[#241A15] leading-snug">
                  {activeSolution.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3428] font-medium mt-1">
                  {activeSolution.tagline}
                </p>
              </div>

              {/* The Friction vs The Engineered Solution */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-red-200/80">
                  <span className="font-mono text-[10px] text-red-800 font-bold uppercase tracking-wider block mb-1">
                    THE BUSINESS BOTTLENECK YOU ARE EXPERIENCING:
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A3428] leading-relaxed">
                    {activeSolution.friction}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-emerald-300">
                  <span className="font-mono text-[10px] text-emerald-800 font-bold uppercase tracking-wider block mb-1">
                    HOW CHARLES SOLVES IT FOR YOUR BUSINESS:
                  </span>
                  <p className="text-xs sm:text-sm text-[#241A15] font-medium leading-relaxed">
                    {activeSolution.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2">
                <span className="font-mono text-[10px] text-[#4A3428]/80 font-bold uppercase tracking-wider block mb-2">
                  TECHNOLOGIES APPLIED TO THIS SOLUTION:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeSolution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#F5F0E8] border border-[#D8C5AF] font-mono text-[11px] text-[#241A15] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Tangible Business ROI & Immediate Action Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-[#D8C5AF]/70 lg:pl-8">
              {/* ROI Metrics Cards */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-widest block">
                  MEASURABLE BUSINESS IMPROVEMENT:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                  {activeSolution.businessRoi.map((roi, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-sm flex items-center justify-between"
                    >
                      <span className="font-mono text-xs text-[#D8C5AF]">
                        {roi.label}
                      </span>
                      <span className="font-display font-extrabold text-sm sm:text-base text-[#10B981]">
                        {roi.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking & Action Section for This Solution */}
              <div className="p-5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] space-y-3">
                <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block">
                  READY TO SOLVE THIS IN YOUR BUSINESS?
                </span>
                <p className="text-xs text-[#4A3428]">
                  Schedule a 20-minute solutions review. We will inspect your current technical setup and provide an actionable architectural plan.
                </p>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-1">
                  {/* Book a Call on Cal.com */}
                  <a
                    href={siteConfig.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
                  >
                    <Calendar className="w-4 h-4 text-[#B58A64] flex-shrink-0" />
                    <span>Book a Kickoff Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C5AF] flex-shrink-0" />
                  </a>

                  {/* Chat on WhatsApp */}
                  <a
                    href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                      `Hi Charles, I'd like to book a call and discuss ${activeSolution.category} for our business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
                    <span>Discuss on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-80 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
