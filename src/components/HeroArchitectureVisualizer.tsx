"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
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
    id: "lead-intake",
    category: "Workflow Automation",
    title: "Instant Lead Intake & Multi-Tool CRM Sync",
    problemSolved: "Eliminates inquiries sitting in inboxes for days and manual copy-pasting to CRM.",
    metric: "< 3s response • 100% data fidelity",
    inputNode: {
      label: "Inbound Webhook / Form",
      sub: "Typeform • Email • Webhook",
      icon: "📥",
      badge: "Ingestion",
    },
    processNode: {
      label: "n8n + Schema Validator",
      sub: "Deduplication & AI Scoring",
      icon: "⚙️",
      badge: "Automation Core",
    },
    outputNode: {
      label: "Slack Alert & CRM Record",
      sub: "HubSpot • PostgreSQL • Slack",
      icon: "🚀",
      badge: "Live Action",
    },
    samplePayload: {
      status: "200 OK",
      validation: "Strict Schema Validated",
      latency: "148ms",
      outcome: "Routed to Sales Slack & Synced to CRM",
    },
  },
  {
    id: "invoice-parser",
    category: "Document Intelligence",
    title: "AI Document Extraction & Accounting Sync",
    problemSolved: "Eliminates 15+ hours/week of staff retyping PDF invoice items into spreadsheets.",
    metric: "15-20 hrs/wk saved • Zero data loss",
    inputNode: {
      label: "Raw PDF / Receipt Upload",
      sub: "Email Attachment • S3 Bucket",
      icon: "📄",
      badge: "Doc Source",
    },
    processNode: {
      label: "Vision LLM + Fast Parser",
      sub: "Zod Schema Line-Item Extractor",
      icon: "🧠",
      badge: "AI Extraction",
    },
    outputNode: {
      label: "PostgreSQL & Accounting DB",
      sub: "Normalized Database Sync",
      icon: "📊",
      badge: "Verified Data",
    },
    samplePayload: {
      status: "Parsed 14 line items",
      validation: "Tax & Total Reconciled",
      latency: "840ms",
      outcome: "Committed to PostgreSQL with Runbook Log",
    },
  },
  {
    id: "rag-agent",
    category: "Custom AI Agent",
    title: "Private Company Knowledge Assistant",
    problemSolved: "Eliminates scattered SOPs and gives employees instant verified internal answers.",
    metric: "Cited answers • Zero hallucination",
    inputNode: {
      label: "Employee Query (Slack/Web)",
      sub: "Natural language questions",
      icon: "💬",
      badge: "Staff Query",
    },
    processNode: {
      label: "pgvector Semantic Search",
      sub: "Cosine Hybrid Rerank + Citations",
      icon: "🔍",
      badge: "RAG Engine",
    },
    outputNode: {
      label: "Grounded Answer + Doc Links",
      sub: "With exact paragraph citations",
      icon: "🛡️",
      badge: "Verified Reply",
    },
    samplePayload: {
      status: "Matched 3 policy documents",
      validation: "Zero-Hallucination Guard Passed",
      latency: "620ms",
      outcome: "Returned cited answer directly in Slack",
    },
  },
];

export function HeroArchitectureVisualizer() {
  const [activePipelineIndex, setActivePipelineIndex] = useState(0);
  const [pulseStage, setPulseStage] = useState<number>(1);

  // Smooth, ambient automated execution loop demonstrating live system health
  useEffect(() => {
    // Stage cycle timer (1 -> 2 -> 3)
    const stageInterval = setInterval(() => {
      setPulseStage((prev) => (prev % 3) + 1);
    }, 1400);

    // Pipeline switch timer (cycles through real-world workflows every 8.4 seconds)
    const pipelineInterval = setInterval(() => {
      setActivePipelineIndex((prev) => (prev + 1) % PIPELINES.length);
    }, 8400);

    return () => {
      clearInterval(stageInterval);
      clearInterval(pipelineInterval);
    };
  }, []);

  const pipeline = PIPELINES[activePipelineIndex];

  return (
    <div className="w-full rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-xl overflow-hidden flex flex-col p-5 sm:p-6 relative">
      {/* Top Header: System Telemetry (Ambient Monitor, Zero Clickable Buttons) */}
      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-[#D8C5AF]/70">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="font-mono text-xs font-bold text-[#241A15] tracking-wider uppercase">
            LIVE SYSTEM ARCHITECTURE
          </span>
        </div>

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

      {/* Active Pipeline Header & Category */}
      <div className="pt-3 pb-2 flex items-center justify-between gap-2">
        <div>
          <span className="font-mono text-[10px] text-[#B58A64] font-bold uppercase tracking-wider block">
            WORKFLOW 0{activePipelineIndex + 1} • {pipeline.category}
          </span>
          <h3 className="font-display font-extrabold text-sm sm:text-base text-[#241A15] leading-snug">
            {pipeline.title}
          </h3>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-[10px] font-bold whitespace-nowrap shadow-xs">
          <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
          <span>{pipeline.metric}</span>
        </span>
      </div>

      {/* Problem Eliminated Card */}
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

      {/* 3-Stage Pipeline Diagram (Ambient Pulse, Vertical on Mobile, Horizontal on Desktop) */}
      <div className="py-2.5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-2.5 relative">
          {/* Node 1: Ingestion */}
          <div
            className={`flex-1 p-3 rounded-2xl border transition-all duration-300 relative ${
              pulseStage === 1
                ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-md scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-base">{pipeline.inputNode.icon}</span>
              <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF]">
                {pipeline.inputNode.badge}
              </span>
            </div>
            <div className="font-display font-bold text-xs sm:text-sm leading-tight">
              {pipeline.inputNode.label}
            </div>
            <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight">
              {pipeline.inputNode.sub}
            </div>
          </div>

          {/* Pulse Connector 1 */}
          <div className="flex items-center justify-center flex-shrink-0 text-[#B58A64] py-0.5 sm:py-0">
            <ArrowRight
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rotate-90 sm:rotate-0 transition-transform ${
                pulseStage >= 2 ? "text-[#10B981] animate-pulse" : "text-[#B58A64]"
              }`}
            />
          </div>

          {/* Node 2: Processing Core */}
          <div
            className={`flex-1 p-3 rounded-2xl border transition-all duration-300 relative ${
              pulseStage === 2
                ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-md scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-base">{pipeline.processNode.icon}</span>
              <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF]">
                {pipeline.processNode.badge}
              </span>
            </div>
            <div className="font-display font-bold text-xs sm:text-sm leading-tight">
              {pipeline.processNode.label}
            </div>
            <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight">
              {pipeline.processNode.sub}
            </div>
          </div>

          {/* Pulse Connector 2 */}
          <div className="flex items-center justify-center flex-shrink-0 text-[#B58A64] py-0.5 sm:py-0">
            <ArrowRight
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rotate-90 sm:rotate-0 transition-transform ${
                pulseStage === 3 ? "text-[#10B981] animate-pulse" : "text-[#B58A64]"
              }`}
            />
          </div>

          {/* Node 3: Output System */}
          <div
            className={`flex-1 p-3 rounded-2xl border transition-all duration-300 relative ${
              pulseStage === 3
                ? "bg-[#241A15] text-[#F5F0E8] border-[#10B981] shadow-md scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-base">{pipeline.outputNode.icon}</span>
              <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#F5F0E8] text-[#4A3428] border border-[#D8C5AF]">
                {pipeline.outputNode.badge}
              </span>
            </div>
            <div className="font-display font-bold text-xs sm:text-sm leading-tight">
              {pipeline.outputNode.label}
            </div>
            <div className="font-mono text-[10px] opacity-75 mt-0.5 leading-tight">
              {pipeline.outputNode.sub}
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Telemetry Bar (Live Read-Only Feedback) */}
      <div className="mt-auto pt-3 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span className="text-[#241A15] font-semibold text-[11px] truncate">
            {pipeline.samplePayload.outcome}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-[#241A15] text-[#F5F0E8] text-[10px] font-bold whitespace-nowrap">
          {pipeline.samplePayload.latency}
        </span>
      </div>
    </div>
  );
}
