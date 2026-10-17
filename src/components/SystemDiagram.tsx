"use client";

import React, { useState } from "react";
import { Server, Bot, Database, Cpu, Globe, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface NodeItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ElementType;
  x: number; // percentage
  y: number; // percentage
  description: string;
  specs: string[];
}

const NODES: NodeItem[] = [
  {
    id: "clients",
    title: "Client & Inbound Events",
    subtitle: "Webhooks, Apps, Form Triggers",
    tag: "ENTRY POINT",
    icon: Globe,
    x: 15,
    y: 20,
    description: "Ingests client events, form payloads, and asynchronous webhooks with cryptographic signature verification.",
    specs: ["HMAC SHA-256 validation", "Idempotency key checks", "Fast HTTP 200 ACKs"],
  },
  {
    id: "gateway",
    title: "Backend API Gateway",
    subtitle: "Express / FastAPI / Auth",
    tag: "ROUTING & SECURITY",
    icon: Server,
    x: 48,
    y: 20,
    description: "Validates input schemas, enforces rate limits, manages JWT sessions, and delegates tasks to agents or pipelines.",
    specs: ["Zod / Pydantic schemas", "Redis token bucket", "Role-based access (RBAC)"],
  },
  {
    id: "agent",
    title: "Agent Orchestrator",
    subtitle: "LangGraph / State Machine",
    tag: "INTELLIGENT CORE",
    icon: Bot,
    x: 82,
    y: 20,
    description: "Executes multi-step reasoning cycles, evaluates tool outputs, and guards against hallucinated actions.",
    specs: ["Directed acyclic graphs", "Safety guardrail nodes", "Contextual memory loops"],
  },
  {
    id: "data",
    title: "PostgreSQL & Vector Store",
    subtitle: "Relational Schema + pgvector",
    tag: "PERSISTENCE & RAG",
    icon: Database,
    x: 30,
    y: 75,
    description: "Stores transactional business records and indexes document embeddings for semantic knowledge retrieval.",
    specs: ["Normalized ACID tables", "HNSW cosine vector index", "Connection pooling"],
  },
  {
    id: "automation",
    title: "n8n Automation Engine",
    subtitle: "Multi-Step Workflow Nodes",
    tag: "EXECUTION & PIPELINES",
    icon: Cpu,
    x: 70,
    y: 75,
    description: "Coordinates multi-platform workflows, scheduled tasks, CRM synchronization, and automated team notifications.",
    specs: ["Self-hosted container", "Dead-letter queues (DLQ)", "Error retry policies"],
  },
];

export function SystemDiagram() {
  const [activeNode, setActiveNode] = useState<NodeItem>(NODES[1]); // default to API Gateway

  return (
    <div className="w-full rounded-2xl bg-[#241A15] border border-[#4A3428] text-[#F5F0E8] p-5 sm:p-7 shadow-xl overflow-hidden relative">
      {/* Blueprint Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#4A3428]/80 gap-2 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B58A64] animate-pulse" />
          <span className="font-mono text-xs text-[#D8C5AF] uppercase tracking-wider font-medium">
            INTERACTIVE SYSTEM ARCHITECTURE
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#D8C5AF]/70">
          Click any component to inspect flow
        </span>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative my-6 min-h-[300px] sm:min-h-[360px] w-full flex flex-col justify-between">
        {/* SVG connection lines between nodes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Line: Client -> Gateway */}
          <line
            x1="22"
            y1="25"
            x2="45"
            y2="25"
            stroke="#B58A64"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            className="animate-dash-flow"
          />
          {/* Line: Gateway -> Agent */}
          <line
            x1="55"
            y1="25"
            x2="78"
            y2="25"
            stroke="#B58A64"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            className="animate-dash-flow"
          />
          {/* Line: Gateway -> Database */}
          <path
            d="M 48 35 L 35 70"
            stroke="#D8C5AF"
            strokeWidth="0.6"
            strokeDasharray="1.5,1.5"
            fill="none"
          />
          {/* Line: Agent -> Automation */}
          <path
            d="M 80 35 L 72 70"
            stroke="#D8C5AF"
            strokeWidth="0.6"
            strokeDasharray="1.5,1.5"
            fill="none"
          />
          {/* Line: Database -> Automation */}
          <line
            x1="38"
            y1="80"
            x2="65"
            y2="80"
            stroke="#B58A64"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            className="animate-dash-flow"
          />
        </svg>

        {/* Top Node Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
          {NODES.slice(0, 3).map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(node)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#38261D] border-[#B58A64] shadow-md ring-1 ring-[#B58A64]"
                    : "bg-[#241A15]/90 border-[#4A3428] hover:border-[#D8C5AF]/60 hover:bg-[#2E2019]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? "bg-[#B58A64] text-[#241A15]"
                        : "bg-[#4A3428] text-[#D8C5AF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] tracking-wider text-[#D8C5AF]/70 uppercase">
                    {node.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-[#F5F0E8] leading-tight">
                  {node.title}
                </h4>
                <p className="text-xs text-[#D8C5AF]/80 font-sans mt-0.5">
                  {node.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Flow indicator bridge */}
        <div className="hidden sm:flex items-center justify-center py-2 text-xs font-mono text-[#D8C5AF]/60 gap-3">
          <span>Data Ingestion</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B58A64]" />
          <span>Intelligent Routing</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B58A64]" />
          <span>Execution & Storage</span>
        </div>

        {/* Bottom Node Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10 max-w-2xl mx-auto w-full">
          {NODES.slice(3, 5).map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(node)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#38261D] border-[#B58A64] shadow-md ring-1 ring-[#B58A64]"
                    : "bg-[#241A15]/90 border-[#4A3428] hover:border-[#D8C5AF]/60 hover:bg-[#2E2019]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected
                        ? "bg-[#B58A64] text-[#241A15]"
                        : "bg-[#4A3428] text-[#D8C5AF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[9px] tracking-wider text-[#D8C5AF]/70 uppercase">
                    {node.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-[#F5F0E8] leading-tight">
                  {node.title}
                </h4>
                <p className="text-xs text-[#D8C5AF]/80 font-sans mt-0.5">
                  {node.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Spec Inspector */}
      <div className="mt-4 pt-4 border-t border-[#4A3428] bg-[#1C1410] rounded-xl p-4 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#B58A64]" />
            <span className="font-display font-semibold text-sm text-[#F5F0E8]">
              {activeNode.title}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#B58A64] border border-[#B58A64]/30 px-2 py-0.5 rounded">
            {activeNode.tag}
          </span>
        </div>
        <p className="text-xs text-[#D8C5AF] font-sans leading-relaxed mb-3">
          {activeNode.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {activeNode.specs.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2E2019] border border-[#4A3428] text-[11px] font-mono text-[#F5F0E8]"
            >
              <ShieldCheck className="w-3 h-3 text-[#B58A64]" />
              <span>{spec}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
