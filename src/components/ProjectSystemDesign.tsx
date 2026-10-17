"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  Database,
  Cpu,
  Server,
  Zap,
  ShieldCheck,
  Terminal,
  Activity,
  Code2,
  FileCode,
} from "lucide-react";

export interface SystemNode {
  id: string;
  name: string;
  role: string;
  protocol: string;
  latency: string;
  description: string;
  failureMode: string;
  samplePayload: string;
}

export interface ProjectSystemFlow {
  projectSlug: string;
  projectTitle: string;
  subtitle: string;
  architectureType: string;
  nodes: SystemNode[];
  summaryMetric: string;
}

export const projectSystemFlows: Record<string, ProjectSystemFlow> = {
  "klinik-voice-assistant": {
    projectSlug: "klinik-voice-assistant",
    projectTitle: "Klinik Voice Intake & Triage Pipeline",
    subtitle: "Real-time stateful voice agent architecture with deterministic clinical triage routing",
    architectureType: "Async WebSockets + LangGraph State Machine",
    summaryMetric: "Sub-850ms audio-to-triage turnaround with zero hallucinated diagnoses",
    nodes: [
      {
        id: "node-1",
        name: "Audio Ingest Stream",
        role: "Client Microphone Feed",
        protocol: "WebSocket / 16kHz PCM",
        latency: "18ms",
        description: "Captures spoken patient audio chunks in real-time over bi-directional duplex WebSockets with voice activity detection (VAD).",
        failureMode: "Auto-reconnects on dropped frame packets and buffers trailing speech audio.",
        samplePayload: '{\n  "event": "audio_chunk",\n  "format": "pcm_16000",\n  "bytes": 4096,\n  "vad_active": true\n}',
      },
      {
        id: "node-2",
        name: "Speech-to-Text Pipeline",
        role: "Whisper Transcription Core",
        protocol: "gRPC Streaming",
        latency: "240ms",
        description: "Transcribes audio to text with streaming token recognition and medical acoustic terminology tuning.",
        failureMode: "Falls back to secondary fast STT transcription if inference latency exceeds 450ms.",
        samplePayload: '{\n  "transcript": "Sharp chest tightness radiating to left arm for past 20 minutes",\n  "confidence": 0.982\n}',
      },
      {
        id: "node-3",
        name: "LangGraph State Machine",
        role: "Clinical Decision Graph",
        protocol: "Python / Async Graph Loop",
        latency: "320ms",
        description: "Evaluates symptoms across a state graph: checks emergency red flags, requests clarifying details, and routes non-linearly.",
        failureMode: "Immediate fail-safe redirect to human emergency clinician if confidence or severity threshold breached.",
        samplePayload: '{\n  "state": "RED_FLAG_TRIAGE",\n  "urgency_level": "LEVEL_2_EMERGENCY",\n  "requires_licensed_review": true\n}',
      },
      {
        id: "node-4",
        name: "Pydantic Schema Guard",
        role: "Deterministic Validation",
        protocol: "Zod / Pydantic V2",
        latency: "8ms",
        description: "Strictly parses and sanitizes clinical entities against FHIR-compatible schemas before any database insertion.",
        failureMode: "Rejects ambiguous or ill-formed JSON entities without propagating invalid clinical data.",
        samplePayload: '{\n  "patient_vitals_noted": false,\n  "symptoms": ["chest_tightness", "referred_left_arm_pain"],\n  "duration_minutes": 20\n}',
      },
      {
        id: "node-5",
        name: "EMR & Dispatch Gateway",
        role: "Clinical Record Persistence",
        protocol: "HTTPS / REST FHIR",
        latency: "65ms",
        description: "Dispatches validated triage brief directly to clinical queue and pre-populates intake paperwork for attending nurses.",
        failureMode: "Dead-letter message queued in Redis if hospital EMR endpoint experiences transient latency.",
        samplePayload: '{\n  "status": "QUEUED_FOR_NURSE",\n  "record_id": "TRIAGE-2024-8841",\n  "timestamp": "2024-10-17T09:30:00Z"\n}',
      },
    ],
  },
  "n8n-workflow-automation": {
    projectSlug: "n8n-workflow-automation",
    projectTitle: "Event-Driven n8n Multi-Channel Pipeline",
    subtitle: "Resilient asynchronous webhook ingestion, LLM document extraction, and transactional dispatch",
    architectureType: "Event-Driven Webhook Micro-Architecture",
    summaryMetric: "99.8% uptime with automated dead-letter queues and duplicate-prevention hashing",
    nodes: [
      {
        id: "node-1",
        name: "Inbound Webhook Receiver",
        role: "Multi-Source Intake",
        protocol: "HTTPS POST / Webhook",
        latency: "12ms",
        description: "Accepts incoming form leads, document uploads, and billing events from HubSpot, Typeform, and Stripe.",
        failureMode: "Returns 202 Accepted immediately to prevent upstream webhook provider timeouts.",
        samplePayload: '{\n  "source": "hubspot_form",\n  "event_id": "evt_99184",\n  "timestamp": 1729157400\n}',
      },
      {
        id: "node-2",
        name: "Deduplication & Idempotency",
        role: "Redis Fingerprint Guard",
        protocol: "Redis In-Memory Key Check",
        latency: "4ms",
        description: "Hashes payload header and timestamp. Rejects duplicate webhook retries to prevent duplicate database writes.",
        failureMode: "Logs duplicate event and gracefully exits without re-triggering expensive LLM downstream nodes.",
        samplePayload: '{\n  "sha256": "4f8b91a0c88...",\n  "is_duplicate": false,\n  "ttl_seconds": 86400\n}',
      },
      {
        id: "node-3",
        name: "n8n AI Extraction Node",
        role: "Structured LLM Parsing",
        protocol: "OpenAI Function Calling API",
        latency: "480ms",
        description: "Extracts normalized line items, company tax IDs, and priority markers from unstructured PDFs and form text.",
        failureMode: "Routes unparseable documents to manual human review Slack channel instead of crashing pipeline.",
        samplePayload: '{\n  "extracted_vendor": "Acme Cloud Corp",\n  "subtotal_usd": 4200.00,\n  "tax_id": "XX-XXXXXXX"\n}',
      },
      {
        id: "node-4",
        name: "PostgreSQL Normalized Store",
        role: "ACID Database Transaction",
        protocol: "PostgreSQL / pgBouncer",
        latency: "22ms",
        description: "Executes parameterized INSERT within an isolated transactional block with foreign key relationship mapping.",
        failureMode: "Automatic rollback on constraint failure; triggers alert to ops with full payload snapshot.",
        samplePayload: '{\n  "row_inserted_id": 8412,\n  "table": "invoices",\n  "state": "COMMITTED"\n}',
      },
      {
        id: "node-5",
        name: "Role-Tailored Notification",
        role: "Multi-Channel Alert Dispatch",
        protocol: "Slack Bot API + SendGrid",
        latency: "110ms",
        description: "Dispatches interactive Slack notification with approval buttons to operations leads and sends email confirmation.",
        failureMode: "Retries with exponential backoff on network rate limits.",
        samplePayload: '{\n  "slack_channel": "#ops-approvals",\n  "alert_sent": true,\n  "action_buttons": ["Approve", "Audit"]\n}',
      },
    ],
  },
  "rag-knowledge-assistant": {
    projectSlug: "rag-knowledge-assistant",
    projectTitle: "Hybrid RAG Architecture & Vector Retrieval",
    subtitle: "Enterprise documentation search uniting PostgreSQL pgvector HNSW indexing and grounded citations",
    architectureType: "Hybrid Reciprocal Rank Fusion (BM25 + Dense Vectors)",
    summaryMetric: "Sub-350ms semantic search over 2,000+ technical docs with verified source citation",
    nodes: [
      {
        id: "node-1",
        name: "Document Ingestion & Chunking",
        role: "Recursive Syntax Parser",
        protocol: "Python / Markdown AST",
        latency: "35ms",
        description: "Splits engineering documentation into 512-token chunks with 10% overlap preserving code blocks and header hierarchy.",
        failureMode: "Isolates malformed Markdown files and logs parse warnings without corrupting the corpus index.",
        samplePayload: '{\n  "chunk_id": "doc_arch_04#chunk3",\n  "tokens": 482,\n  "has_codeblock": true\n}',
      },
      {
        id: "node-2",
        name: "Vector Embedding Core",
        role: "Dense Representation",
        protocol: "OpenAI Embeddings API",
        latency: "120ms",
        description: "Generates 1536-dimensional semantic vector embeddings using text-embedding-3-small.",
        failureMode: "Batches embeddings up to 128 chunks per call to stay within API rate limit windows.",
        samplePayload: '{\n  "vector_dim": 1536,\n  "model": "text-embedding-3-small",\n  "norm": 1.0\n}',
      },
      {
        id: "node-3",
        name: "pgvector HNSW Index",
        role: "Approximate Nearest Neighbor",
        protocol: "PostgreSQL 16 / pgvector",
        latency: "14ms",
        description: "Performs sub-linear cosine distance similarity search over vector indices using HNSW graph indexing.",
        failureMode: "Falls back to flat IVFFlat index if HNSW memory budget reaches capacity.",
        samplePayload: '{\n  "candidates_retrieved": 10,\n  "top_score": 0.892,\n  "index_type": "hnsw_cosine"\n}',
      },
      {
        id: "node-4",
        name: "Reciprocal Rank Reranker",
        role: "Hybrid Scoring Engine",
        protocol: "In-Memory Fusion Algorithm",
        latency: "8ms",
        description: "Blends BM25 full-text keyword ranking with dense vector similarity to guarantee exact technical term recall.",
        failureMode: "De-biases dense vector hallucination for exact technical strings like API error codes.",
        samplePayload: '{\n  "hybrid_rank_1": "Postgres Connection Pool Settings",\n  "rrf_score": 0.0322\n}',
      },
      {
        id: "node-5",
        name: "Grounded Synthesis LLM",
        role: "Cited Answer Generation",
        protocol: "Server-Sent Events (SSE)",
        latency: "310ms",
        description: "Synthesizes final answer with strict instruction to ground every sentence in cited document chunk IDs.",
        failureMode: "Refuses to answer and prompts for clarification if context similarity scores fall below threshold.",
        samplePayload: '{\n  "response": "To adjust pgvector connection limits, edit pg_hba.conf...",\n  "citations": ["doc_arch_04#chunk3"]\n}',
      },
    ],
  },
};

export function ProjectSystemDesign({ defaultProject = "klinik-voice-assistant" }: { defaultProject?: string }) {
  const [selectedSlug, setSelectedSlug] = useState<string>(defaultProject);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"flow" | "payload" | "failure">("flow");

  const currentFlow = projectSystemFlows[selectedSlug] || projectSystemFlows["klinik-voice-assistant"];
  const activeNode = currentFlow.nodes[activeNodeIndex];

  // Simulation timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimulationStep((prev) => {
          if (prev >= currentFlow.nodes.length - 1) {
            setIsSimulating(false);
            return prev;
          }
          const next = prev + 1;
          setActiveNodeIndex(next);
          return next;
        });
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [isSimulating, currentFlow.nodes.length]);

  const handleStartSimulation = () => {
    setSimulationStep(0);
    setActiveNodeIndex(0);
    setIsSimulating(true);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimulationStep(0);
    setActiveNodeIndex(0);
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-[#241A15] border border-[#4A3428] text-[#F5F0E8] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FAF7F2 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header: Project Selector & Simulation Controls */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#4A3428]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-wider font-bold">
              INTERACTIVE SYSTEM ARCHITECTURE STUDIO
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F0E8] tracking-tight">
            {currentFlow.projectTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#D8C5AF]/80 mt-1 max-w-xl">
            {currentFlow.subtitle}
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {Object.values(projectSystemFlows).map((flow) => {
            const isSelected = selectedSlug === flow.projectSlug;
            return (
              <button
                key={flow.projectSlug}
                type="button"
                onClick={() => {
                  setSelectedSlug(flow.projectSlug);
                  setActiveNodeIndex(0);
                  setIsSimulating(false);
                  setSimulationStep(0);
                }}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#B58A64] text-[#241A15] font-bold shadow-md"
                    : "bg-[#1C1410] text-[#D8C5AF] border border-[#4A3428] hover:border-[#B58A64]"
                }`}
              >
                {flow.projectSlug === "klinik-voice-assistant"
                  ? "Klinik Voice"
                  : flow.projectSlug === "n8n-workflow-automation"
                  ? "n8n Automation"
                  : "RAG System"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary Architecture Metric Strip */}
      <div className="relative z-10 my-4 py-2.5 px-4 rounded-xl bg-[#1C1410] border border-[#4A3428] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#D8C5AF]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#B58A64]" />
          <span>PATTERN: <strong className="text-[#F5F0E8]">{currentFlow.architectureType}</strong></span>
        </div>
        <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{currentFlow.summaryMetric}</span>
        </div>
      </div>

      {/* Interactive System Flow Node Canvas */}
      <div className="relative z-10 my-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11px] text-[#D8C5AF]/70 uppercase tracking-wider">
            SYSTEM EXECUTION PIPELINE (TAP ANY NODE TO INSPECT)
          </span>

          {/* Simulation Playback Controls */}
          <div className="flex items-center gap-2">
            {!isSimulating ? (
              <button
                type="button"
                onClick={handleStartSimulation}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#B58A64] hover:bg-[#C99C74] text-[#241A15] text-xs font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Simulate Flow</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsSimulating(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#241A15] text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
              >
                <Pause className="w-3 h-3 fill-current" />
                <span>Pause</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleResetSimulation}
              className="p-1 rounded-lg bg-[#1C1410] border border-[#4A3428] text-[#D8C5AF] hover:text-[#F5F0E8] transition-colors cursor-pointer"
              title="Reset simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Nodes Horizontal Pipeline (Scrollable on small mobile screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          {currentFlow.nodes.map((node, index) => {
            const isActive = activeNodeIndex === index;
            const isSimulatedActive = isSimulating && simulationStep === index;
            const isCompleted = isSimulating && simulationStep > index;

            return (
              <motion.div
                key={node.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsSimulating(false);
                  setActiveNodeIndex(index);
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative text-left flex flex-col justify-between ${
                  isActive || isSimulatedActive
                    ? "bg-[#38261D] border-[#B58A64] shadow-lg ring-2 ring-[#B58A64]/80"
                    : isCompleted
                    ? "bg-[#1E1612] border-emerald-800/80 text-[#D8C5AF]"
                    : "bg-[#1C1410] border-[#4A3428] hover:border-[#D8C5AF]/60 text-[#D8C5AF]"
                }`}
              >
                {/* Node Status Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] text-[#D8C5AF]/70 uppercase tracking-widest">
                    STEP 0{index + 1}
                  </span>
                  <span
                    className={`font-mono text-[9px] px-1.5 py-0.5 rounded-md ${
                      isActive || isSimulatedActive
                        ? "bg-[#B58A64] text-[#241A15] font-bold"
                        : "bg-[#2E2019] text-[#B58A64]"
                    }`}
                  >
                    {node.latency}
                  </span>
                </div>

                <div className="space-y-1 mb-2">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#F5F0E8] leading-tight">
                    {node.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#B58A64] block truncate">
                    {node.role}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#4A3428]/60 flex items-center justify-between text-[10px] font-mono text-[#D8C5AF]/60">
                  <span className="truncate">{node.protocol}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Node Inspector Panel */}
      <div className="relative z-10 mt-6 p-5 sm:p-6 rounded-2xl bg-[#1C1410] border border-[#4A3428]">
        {/* Inspector Sub-Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#4A3428]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#F5F0E8] uppercase">
              NODE INSPECTOR: {activeNode.name}
            </span>
            <span className="font-mono text-[10px] text-[#B58A64] bg-[#2E2019] px-2 py-0.5 rounded">
              {activeNode.protocol}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#241A15] p-1 rounded-xl border border-[#4A3428]">
            <button
              type="button"
              onClick={() => setActiveTab("flow")}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === "flow"
                  ? "bg-[#B58A64] text-[#241A15] font-bold"
                  : "text-[#D8C5AF] hover:text-[#F5F0E8]"
              }`}
            >
              System Logic
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("payload")}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === "payload"
                  ? "bg-[#B58A64] text-[#241A15] font-bold"
                  : "text-[#D8C5AF] hover:text-[#F5F0E8]"
              }`}
            >
              Data Schema
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("failure")}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                activeTab === "failure"
                  ? "bg-[#B58A64] text-[#241A15] font-bold"
                  : "text-[#D8C5AF] hover:text-[#F5F0E8]"
              }`}
            >
              Failure Handling
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="pt-4">
          {activeTab === "flow" && (
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest block">
                ARCHITECTURAL ROLE & BEHAVIOR
              </span>
              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                {activeNode.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D8C5AF]/70 pt-2">
                <span>ESTIMATED LATENCY: <strong className="text-emerald-400">{activeNode.latency}</strong></span>
                <span>•</span>
                <span>TRANSPORT: <strong className="text-[#F5F0E8]">{activeNode.protocol}</strong></span>
              </div>
            </div>
          )}

          {activeTab === "payload" && (
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest block">
                TYPED PAYLOAD CONTRACT (JSON / AST)
              </span>
              <pre className="p-3.5 rounded-xl bg-[#140E0B] border border-[#4A3428] font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                {activeNode.samplePayload}
              </pre>
            </div>
          )}

          {activeTab === "failure" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>FAIL-SAFE & EXCEPTION RECOVERY</span>
              </div>
              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                {activeNode.failureMode}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
