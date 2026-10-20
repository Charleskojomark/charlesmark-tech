"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  CheckCircle2,
  Activity,
} from "lucide-react";

interface WorkflowPipeline {
  id: string;
  category: string;
  title: string;
  problemSolved: string;
  metric: string;
  inputNode: {
    label: string;
    sub: string;
    icon: string;
    badge: string;
  };
  processNode: {
    label: string;
    sub: string;
    icon: string;
    badge: string;
  };
  outputNode: {
    label: string;
    sub: string;
    icon: string;
    badge: string;
  };
  samplePayload: {
    status: string;
    validation: string;
    latency: string;
    outcome: string;
  };
}

const PIPELINES: WorkflowPipeline[] = [
  {
    id: "agentic-orchestrator",
    category: "Agentic System Design",
    title: "Autonomous Multi-Agent Task Orchestrator",
    problemSolved: "Replaces brittle single-prompt LLMs with fault-tolerant, deterministic multi-agent state machines.",
    metric: "Deterministic Evals • LangGraph Core",
    inputNode: {
      label: "Intent & Task Stream",
      sub: "API • gRPC • Inbound Event",
      icon: "⚡",
      badge: "Ingress",
    },
    processNode: {
      label: "Multi-Agent Supervisor & Tools",
      sub: "LangGraph • Schema Evals • Retries",
      icon: "🧠",
      badge: "Agentic Core",
    },
    outputNode: {
      label: "Production State Mutation",
      sub: "PostgreSQL ACID • Event Dispatch",
      icon: "🛡️",
      badge: "Verified Execution",
    },
    samplePayload: {
      status: "200 OK",
      validation: "Evals Passed (100% Fidelity)",
      latency: "124ms",
      outcome: "Executed multi-agent plan with zero hallucination",
    },
  },
  {
    id: "hybrid-rag",
    category: "Cloud & Vector Infrastructure",
    title: "Enterprise Hybrid RAG & Vector Pipeline",
    problemSolved: "Eliminates enterprise hallucination by combining dense vector similarity with sparse BM25 reranking.",
    metric: "pgvector • Cross-Encoder Rerank",
    inputNode: {
      label: "Streaming Document Stream",
      sub: "S3 Bucket • Cloud Queue • Confluence",
      icon: "📄",
      badge: "Doc Ingestion",
    },
    processNode: {
      label: "Hybrid Semantic & BM25 Search",
      sub: "pgvector • Cohere Rerank • Guardrails",
      icon: "🔍",
      badge: "Retrieval Core",
    },
    outputNode: {
      label: "Attributed Response Engine",
      sub: "Grounding Citations • Strict Context",
      icon: "🚀",
      badge: "Production API",
    },
    samplePayload: {
      status: "Matched verified chunks",
      validation: "Citation Guardrail Passed",
      latency: "340ms",
      outcome: "Synthesized verified output with exact source citations",
    },
  },
  {
    id: "distributed-backend",
    category: "Backend & DevOps Infrastructure",
    title: "High-Throughput Event-Driven Microservice",
    problemSolved: "Eliminates database locks and API drops during high-concurrency enterprise traffic spikes.",
    metric: "Docker / K8s • Redis • 99.99% Uptime",
    inputNode: {
      label: "Distributed Event Ingestion",
      sub: "Kafka • RabbitMQ • API Gateway",
      icon: "📥",
      badge: "Message Broker",
    },
    processNode: {
      label: "Containerized Async Workers",
      sub: "FastAPI / Go • Redis Cache • Circuit Breaker",
      icon: "⚙️",
      badge: "Worker Cluster",
    },
    outputNode: {
      label: "Partitioned DB & OpenTelemetry",
      sub: "PostgreSQL • Prometheus • Live Tracing",
      icon: "📊",
      badge: "Observability",
    },
    samplePayload: {
      status: "Committed to Cluster",
      validation: "Zero Packet Loss",
      latency: "18ms",
      outcome: "Processed 12,000 events/sec with OpenTelemetry metrics",
    },
  },
];

export function HeroArchitectureVisualizer() {
  const [activePipelineIndex, setActivePipelineIndex] = useState(0);
  const [pulseStage, setPulseStage] = useState<number>(1);

  // Smooth, ambient automated execution loop demonstrating live system health
  useEffect(() => {
    // Stage cycle timer (Step 1 -> Step 2 -> Step 3)
    const stageInterval = setInterval(() => {
      setPulseStage((prev) => (prev % 3) + 1);
    }, 1500);

    // Pipeline switch timer (cycles through real-world workflows every 9 seconds)
    const pipelineInterval = setInterval(() => {
      setActivePipelineIndex((prev) => (prev + 1) % PIPELINES.length);
    }, 9000);

    return () => {
      clearInterval(stageInterval);
      clearInterval(pipelineInterval);
    };
  }, []);

  const pipeline = PIPELINES[activePipelineIndex];

  return (
    <div className="w-full rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-xl overflow-hidden flex flex-col p-4 sm:p-6 relative">
      {/* Top Header: System Telemetry */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#D8C5AF]/70">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#241A15] tracking-wider uppercase">
            LIVE SYSTEM ARCHITECTURE
          </span>
        </div>

        {/* Workflow indicator pills */}
        <div className="flex items-center gap-1.5">
          {PIPELINES.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activePipelineIndex
                  ? "w-5 bg-[#B58A64]"
                  : "w-1.5 bg-[#D8C5AF]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Active Pipeline Header & Metric */}
      <div className="pt-3 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] text-[#B58A64] font-bold uppercase tracking-wider block">
            WORKFLOW 0{activePipelineIndex + 1} • {pipeline.category}
          </span>
          <h3 className="font-display font-extrabold text-sm sm:text-base text-[#241A15] leading-snug">
            {pipeline.title}
          </h3>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-[10px] font-bold whitespace-nowrap shadow-xs">
          <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
          <span>{pipeline.metric}</span>
        </span>
      </div>

      {/* Problem Solved Card */}
      <div className="p-3 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/80 my-2">
        <div className="flex items-start gap-2">
          <span className="font-mono text-[9px] text-red-700 font-bold uppercase tracking-wider whitespace-nowrap pt-0.5">
            PROBLEM SOLVED:
          </span>
          <p className="text-xs text-[#241A15] font-medium leading-relaxed">
            {pipeline.problemSolved}
          </p>
        </div>
      </div>

      {/* 3-Stage Vertical Architecture Pipeline (100% Mobile-Friendly, Full Width, Clean Typography) */}
      <div className="py-2 space-y-1">
        {/* Step 1: Ingestion Node */}
        <div
          className={`w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
            pulseStage === 1
              ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-md scale-[1.01]"
              : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] flex items-center justify-center text-lg flex-shrink-0 shadow-xs">
              {pipeline.inputNode.icon}
            </span>
            <div className="min-w-0">
              <div className="font-display font-bold text-xs sm:text-sm leading-tight truncate">
                {pipeline.inputNode.label}
              </div>
              <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight truncate">
                {pipeline.inputNode.sub}
              </div>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF] flex-shrink-0">
            {pipeline.inputNode.badge}
          </span>
        </div>

        {/* Pulse Connector 1 -> 2 */}
        <div className="flex items-center justify-center py-0.5">
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <ArrowDown
              className={`w-4 h-4 transition-transform duration-300 ${
                pulseStage >= 2 ? "text-[#10B981] animate-bounce" : "text-[#B58A64]"
              }`}
            />
          </div>
        </div>

        {/* Step 2: Automation Processing Core */}
        <div
          className={`w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
            pulseStage === 2
              ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-md scale-[1.01]"
              : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] flex items-center justify-center text-lg flex-shrink-0 shadow-xs">
              {pipeline.processNode.icon}
            </span>
            <div className="min-w-0">
              <div className="font-display font-bold text-xs sm:text-sm leading-tight truncate">
                {pipeline.processNode.label}
              </div>
              <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight truncate">
                {pipeline.processNode.sub}
              </div>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF] flex-shrink-0">
            {pipeline.processNode.badge}
          </span>
        </div>

        {/* Pulse Connector 2 -> 3 */}
        <div className="flex items-center justify-center py-0.5">
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <ArrowDown
              className={`w-4 h-4 transition-transform duration-300 ${
                pulseStage === 3 ? "text-[#10B981] animate-bounce" : "text-[#B58A64]"
              }`}
            />
          </div>
        </div>

        {/* Step 3: Target System Action */}
        <div
          className={`w-full p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
            pulseStage === 3
              ? "bg-[#241A15] text-[#F5F0E8] border-[#10B981] shadow-md scale-[1.01]"
              : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] flex items-center justify-center text-lg flex-shrink-0 shadow-xs">
              {pipeline.outputNode.icon}
            </span>
            <div className="min-w-0">
              <div className="font-display font-bold text-xs sm:text-sm leading-tight truncate">
                {pipeline.outputNode.label}
              </div>
              <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight truncate">
                {pipeline.outputNode.sub}
              </div>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF] flex-shrink-0">
            {pipeline.outputNode.badge}
          </span>
        </div>
      </div>

      {/* Real-Time Telemetry Bar (Live Read-Only Feedback) */}
      <div className="mt-auto pt-3 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 min-w-0">
          <Activity className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
          <span className="text-[#241A15] font-semibold text-[11px] truncate">
            {pipeline.samplePayload.outcome}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-[#241A15] text-[#F5F0E8] text-[10px] font-bold whitespace-nowrap flex-shrink-0">
          {pipeline.samplePayload.latency}
        </span>
      </div>
    </div>
  );
}
