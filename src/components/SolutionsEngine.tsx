import React from "react";
import {
  Workflow,
  Cpu,
  Server,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

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
  return (
    <section id="solutions-engine" className="py-12 sm:py-16 md:py-20 bg-[#FAF7F2] border-y border-[#D8C5AF]/70 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
            HOW I SOLVE BOTTLENECKS & IMPROVE YOUR BUSINESS
          </h2>
          <p className="text-sm sm:text-base text-[#4A3428] mt-2 sm:mt-3 leading-relaxed">
            Every engagement is engineered around your business&apos;s bottom line. Select any operational challenge below to see the exact technical architecture I build and the measurable business ROI delivered.
          </p>
        </div>

        {/* 4 Primary Solution Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {SOLUTIONS.map((item, idx) => {
            const TabIcon = item.icon;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] hover:border-[#B58A64] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors shadow-xs">
                      <TabIcon className="w-5 h-5 text-[#D8C5AF]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#4A3428] border border-[#D8C5AF]">
                      SOL 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#241A15] leading-snug mb-1.5">
                    {item.category}
                  </h3>
                  <p className="text-xs text-[#4A3428] leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between">
                  <a
                    href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                      `Hi Charles, I'd like to discuss ${item.category} for our business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#241A15] hover:text-[#B58A64] transition-colors"
                  >
                    <span>Discuss Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
