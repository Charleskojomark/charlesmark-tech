"use client";

import React, { useState, useEffect } from "react";
import {
  Workflow,
  FileSpreadsheet,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface WorkflowPipeline {
  id: string;
  tabLabel: string;
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
    tabLabel: "Lead Intake & CRM",
    title: "Instant Lead Intake & Multi-Tool CRM Sync",
    problemSolved: "Eliminates inquiries sitting in inboxes for days and manual copy-pasting to CRM.",
    metric: "< 3 sec response • 100% data fidelity",
    inputNode: {
      label: "Inbound Webhook / Form",
      sub: "Typeform • Email • Webhook",
      icon: "📥",
      badge: "Ingestion",
    },
    processNode: {
      label: "n8n + Pydantic Validator",
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
    tabLabel: "Invoice & Doc Parser",
    title: "AI Document Extraction & Accounting Sync",
    problemSolved: "Eliminates 15+ hours/week of staff retyping PDF invoice items into spreadsheets.",
    metric: "15-20 hrs/week saved • Zero data loss",
    inputNode: {
      label: "Raw PDF / Receipt Upload",
      sub: "Email Attachment • S3 Bucket",
      icon: "📄",
      badge: "Document Source",
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
    tabLabel: "Company RAG Agent",
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
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStage, setSimulationStage] = useState<number>(0);

  const pipeline = PIPELINES[activePipelineIndex];

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStage(1);

    setTimeout(() => {
      setSimulationStage(2);
    }, 700);

    setTimeout(() => {
      setSimulationStage(3);
    }, 1400);

    setTimeout(() => {
      setIsSimulating(false);
    }, 2400);
  };

  // Reset simulation stage when user switches tabs
  useEffect(() => {
    setSimulationStage(0);
    setIsSimulating(false);
  }, [activePipelineIndex]);

  return (
    <div className="w-full rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-xl overflow-hidden flex flex-col p-5 sm:p-7 relative">
      {/* Top Header: Engineering Blueprint Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D8C5AF]/70">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="font-mono text-xs font-bold text-[#241A15] tracking-wider uppercase">
            AUTOMATION SYSTEM ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5F0E8] border border-[#D8C5AF] text-[10px] font-mono text-[#4A3428] font-semibold">
            <Zap className="w-3 h-3 text-[#B58A64]" />
            <span>PRODUCTION DESIGN</span>
          </span>
        </div>
      </div>

      {/* Pipeline Selector Tabs: Real Business Automations */}
      <div className="pt-4 pb-3">
        <span className="font-mono text-[10px] text-[#B58A64] font-bold uppercase tracking-widest block mb-2">
          SELECT SYSTEM PIPELINE:
        </span>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {PIPELINES.map((p, idx) => {
            const isActive = idx === activePipelineIndex;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePipelineIndex(idx)}
                className={`px-2.5 py-2 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#241A15] text-[#F5F0E8] border-[#241A15] shadow-md scale-[1.02]"
                    : "bg-[#F5F0E8] hover:bg-[#FAF7F2] text-[#4A3428] border-[#D8C5AF]"
                }`}
              >
                <span className="block font-display font-bold text-[11px] sm:text-xs leading-tight">
                  {p.tabLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Problem Solved & Value Proposition Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/80 my-2">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-red-800 font-bold uppercase tracking-wide">
                PROBLEM ELIMINATED:
              </span>
            </div>
            <p className="text-xs text-[#241A15] font-medium leading-relaxed">
              {pipeline.problemSolved}
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-[10px] font-bold whitespace-nowrap shadow-xs">
            <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
            <span>{pipeline.metric}</span>
          </span>
        </div>
      </div>

      {/* Animated 3-Stage Pipeline Architecture Diagram */}
      <div className="pt-3 pb-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 relative">
          {/* Node 1: Input */}
          <div
            className={`flex-1 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 relative ${
              simulationStage === 1
                ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-lg scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
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

          {/* Animated Connecting Pulse Line 1 */}
          <div className="flex items-center justify-center flex-shrink-0 text-[#B58A64] py-0.5 sm:py-0">
            <ArrowRight
              className={`w-4 h-4 sm:w-5 sm:h-5 rotate-90 sm:rotate-0 transition-transform ${
                isSimulating ? "translate-y-0.5 sm:translate-y-0 sm:translate-x-1 text-[#10B981] animate-pulse" : "text-[#B58A64]"
              }`}
            />
          </div>

          {/* Node 2: Core Processing */}
          <div
            className={`flex-1 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 relative ${
              simulationStage === 2
                ? "bg-[#241A15] text-[#F5F0E8] border-[#B58A64] shadow-lg scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
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

          {/* Animated Connecting Pulse Line 2 */}
          <div className="flex items-center justify-center flex-shrink-0 text-[#B58A64] py-0.5 sm:py-0">
            <ArrowRight
              className={`w-4 h-4 sm:w-5 sm:h-5 rotate-90 sm:rotate-0 transition-transform ${
                simulationStage === 2 || simulationStage === 3
                  ? "translate-y-0.5 sm:translate-y-0 sm:translate-x-1 text-[#10B981] animate-pulse"
                  : "text-[#B58A64]"
              }`}
            />
          </div>

          {/* Node 3: Target System Outcome */}
          <div
            className={`flex-1 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 relative ${
              simulationStage === 3
                ? "bg-[#241A15] text-[#F5F0E8] border-[#10B981] shadow-lg scale-[1.01] sm:scale-105"
                : "bg-[#FAF7F2] border-[#D8C5AF] text-[#241A15]"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
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

      {/* Live System Execution Contract & Simulation Trigger */}
      <div className="mt-auto pt-3 border-t border-[#D8C5AF]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Real-time telemetry log */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-[#4A3428] font-semibold">
            {isSimulating ? (
              <span className="text-emerald-700 animate-pulse font-bold">
                Processing pipeline event...
              </span>
            ) : simulationStage === 3 ? (
              <span className="text-[#241A15] font-bold">
                ✓ Event executed in {pipeline.samplePayload.latency}
              </span>
            ) : (
              <span>Status: Ready for inbound trigger</span>
            )}
          </span>
        </div>

        {/* Interactive "Simulate Transaction" Button */}
        <button
          type="button"
          onClick={handleRunSimulation}
          disabled={isSimulating}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-mono text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 animate-spin text-[#B58A64]" />
              <span>Simulating...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#10B981] fill-current" />
              <span>Simulate Pipeline Event</span>
            </>
          )}
        </button>
      </div>

      {/* Execution Payload Details Drawer */}
      <div className="mt-2.5 p-3 rounded-xl bg-[#241A15] text-[#F5F0E8] font-mono text-[10px] space-y-1">
        <div className="flex items-center justify-between text-[#B58A64]">
          <span>EXECUTION PAYLOAD:</span>
          <span className="text-emerald-400 font-bold">{pipeline.samplePayload.status}</span>
        </div>
        <div className="text-[#D8C5AF] flex items-center justify-between">
          <span>Contract: {pipeline.samplePayload.validation}</span>
          <span className="text-[#B58A64]">{pipeline.samplePayload.latency}</span>
        </div>
        <div className="text-white/90 truncate">
          Outcome: {pipeline.samplePayload.outcome}
        </div>
      </div>
    </div>
  );
}
