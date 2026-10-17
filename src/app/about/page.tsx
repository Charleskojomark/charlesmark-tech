import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  FileText,
  Workflow,
  Server,
  Bot,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Charles Mark | Background & Engineering Philosophy",
  description:
    "Learn about Charles Mark, an AI Systems Engineer with a strong foundation in backend development, workflow automation, and practical AI applications.",
  keywords: [
    "About Charles Mark",
    "AI Systems Engineer Background",
    "Backend Engineer Portfolio",
    "Workflow Automation Consultant",
    "Charles Mark Bio",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Charles Mark | ${siteConfig.name}`,
    description:
      "Learn about Charles Mark, an AI Systems Engineer with a strong foundation in backend development, workflow automation, and practical AI applications.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - About Charles Mark`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Charles Mark | ${siteConfig.name}`,
    description:
      "Learn about Charles Mark, an AI Systems Engineer with a strong foundation in backend development, workflow automation, and practical AI applications.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-16 border-b border-[#D8C5AF]/70 pb-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-[#4A3428] shadow-lg flex-shrink-0 bg-[#241A15]">
            <Image
              src="/charles-mark.png"
              alt="Charles Mark - AI Systems Engineer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 128px, 160px"
              priority
            />
          </div>
          <div>
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              ENGINEERING IDENTITY & BACKGROUND
            </span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
              PRACTICAL SYSTEMS.
              <br />
              NO DEMO-WARE. NO GIMMICKS.
            </h1>
            <p className="font-display text-lg sm:text-xl text-[#4A3428] font-normal leading-relaxed max-w-2xl">
              &ldquo;I&apos;m Charles Mark, an engineer interested in building practical AI-powered systems, reliable backend services, and automation that solves real problems.&rdquo;
            </p>
          </div>
        </header>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6 text-base text-[#38261D] leading-relaxed">
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              The Bridge Between Backend Stability and AI Capability
            </h2>

            <p>
              My path in technology is anchored in backend engineering. Before exploring agentic workflows and multi-step LLM chains, I learned to value what keeps production software alive: strict database schema integrity, idempotent API handlers, graceful error propagation, and connection pooling.
            </p>

            <p>
              When generative AI emerged, much of the industry rushed to build flashy web demos that proved fragile in real-world scenarios. A prompt alone cannot maintain data consistency, handle network dropped packets, or enforce role permissions.
            </p>

            <p>
              My mission as an <strong>AI Systems Engineer</strong> is to bring backend discipline to artificial intelligence. When I build with LangGraph or n8n, I ensure outputs pass through rigorous schema validation (such as Zod or Pydantic) before touching a database or dispatching external actions.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] my-6">
              <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider block mb-2">
                CORE OPERATIONAL PHILOSOPHY
              </span>
              <p className="text-sm text-[#241A15] font-medium leading-relaxed">
                If an AI workflow cannot handle malformed data, API rate limits, or ambiguous user queries gracefully without crashing or hallucinating actions, it is not production-ready.
              </p>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <span className="font-mono text-xs text-[#241A15] font-semibold uppercase tracking-wider block mb-4">
                CORE FOCUS
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#4A3428]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>AI Workflow Automation (n8n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>Stateful AI Agents (LangGraph)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>Backend APIs (Node/Express, FastAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>Data Modeling (PostgreSQL, pgvector)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428]">
              <span className="font-mono text-xs text-[#B58A64] font-semibold uppercase tracking-wider block mb-2">
                VERIFIED PROFILES
              </span>
              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8]"
                >
                  <span>LinkedIn</span>
                  <span className="text-[#F5F0E8] font-bold">/{siteConfig.social.linkedin.username}</span>
                </a>
                <a
                  href={siteConfig.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8]"
                >
                  <span>GitHub</span>
                  <span className="text-[#F5F0E8] font-bold">/{siteConfig.social.github.username}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What I Enjoy Building */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15] mb-8">
            What I Enjoy Building Most
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5 text-[#B58A64]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#241A15] mb-2">
                Event-Driven Automation
              </h3>
              <p className="text-xs text-[#4A3428] leading-relaxed">
                Workflows that silently digest webhooks, normalize unstructured PDFs or emails, and route structured data to business systems without human intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-[#B58A64]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#241A15] mb-2">
                Stateful Agent Workflows
              </h3>
              <p className="text-xs text-[#4A3428] leading-relaxed">
                Autonomous loops constrained by graph state machines. Agents that can reflect, backtrack, call permissioned tools, and seek human clarification when confidence is low.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <div className="w-10 h-10 rounded-xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center mb-4">
                <Server className="w-5 h-5 text-[#B58A64]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#241A15] mb-2">
                Reliable REST APIs
              </h3>
              <p className="text-xs text-[#4A3428] leading-relaxed">
                Backends with clean layered service abstractions, type safety, relational database normalization, and predictable response times.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Collaborate & CV */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-display font-bold text-2xl text-[#241A15]">
                Interested in Working Together?
              </h2>
              <p className="text-sm text-[#4A3428] max-w-xl leading-relaxed">
                Whether you need an automation pipeline audited, an AI agent scoped, or a backend service engineered from scratch, I am open to discussing high-impact projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Chat on WhatsApp ({siteConfig.contact.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
