import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SystemDiagram } from "@/components/SystemDiagram";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Charles Mark | AI Systems Engineer & Solutions Architect",
  description:
    "Learn about Charles Mark, an AI Systems Engineer with a deep foundation in backend development, workflow automation, and practical AI applications.",
  keywords: [
    "About Charles Mark",
    "AI Systems Engineer",
    "Workflow Automation Consultant",
    "AI Automation for Business",
    "Backend Architecture",
    "Charles Mark Bio",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Charles Mark | ${siteConfig.name}`,
    description:
      "Learn about Charles Mark, an AI Systems Engineer helping businesses automate workflows, build custom AI assistants, and engineer reliable backends.",
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
      "Learn about Charles Mark, an AI Systems Engineer helping businesses automate workflows, build custom AI assistants, and engineer reliable backends.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
              ABOUT CHARLES MARK
            </span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
              PRACTICAL SYSTEMS.
              <br />
              ENGINEERED FOR BUSINESS RELIABILITY.
            </h1>
            <p className="font-display text-lg sm:text-xl text-[#4A3428] font-normal leading-relaxed max-w-2xl">
              &ldquo;I build AI workflow automation, custom AI assistants, and backend systems for businesses that want less manual work and more reliable operations.&rdquo;
            </p>
          </div>
        </header>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6 text-base text-[#38261D] leading-relaxed">
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              Bringing Backend Discipline to Artificial Intelligence
            </h2>

            <p>
              My foundation in software is anchored in backend engineering. Before building agentic workflows and multi-step LLM chains, I spent years focusing on what keeps production systems alive: strict database schema integrity, idempotent webhook handlers, graceful error propagation, and connection pooling.
            </p>

            <p>
              When generative AI emerged, much of the industry rushed to build flashy web demos that proved fragile in real-world scenarios. A prompt alone cannot maintain data consistency, handle dropped packets, or enforce role permissions.
            </p>

            <p>
              My role as an <strong>AI Systems Engineer</strong> is to bridge the gap between AI capability and operational stability. When I build an automation pipeline or AI assistant for a business, every output passes through rigorous schema validation (Zod / Pydantic) before touching a database or dispatching actions.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] my-6">
              <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider block mb-2">
                CORE OPERATIONAL PHILOSOPHY
              </span>
              <p className="text-sm text-[#241A15] font-medium leading-relaxed">
                If an automation cannot handle malformed data, API rate limits, or ambiguous queries gracefully without crashing or creating cleanup work, it is not production-ready.
              </p>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <span className="font-mono text-xs text-[#241A15] font-semibold uppercase tracking-wider block mb-4">
                CORE SOLUTIONS
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#4A3428]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>AI Workflow Automation (n8n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>Document RAG Assistants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>Backend APIs (Node/Express, FastAPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5" />
                  <span>PostgreSQL & pgvector Modeling</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428]">
              <span className="font-mono text-xs text-[#B58A64] font-semibold uppercase tracking-wider block mb-2">
                VERIFIED CHANNELS
              </span>
              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#25D366] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="text-[#25D366] font-bold">Chat on WhatsApp &rarr;</span>
                </a>
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

        {/* Interactive System Diagram Feature */}
        <section className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-1">
              SYSTEM DESIGN BLUEPRINT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15]">
              Interactive Architecture Map
            </h2>
            <p className="text-xs sm:text-sm text-[#4A3428] mt-1">
              Click any node below to inspect protocols, failure handling, and payload contracts across a typical client system.
            </p>
          </div>
          <div className="rounded-3xl bg-[#FAF7F2] p-4 sm:p-6 border border-[#D8C5AF]">
            <SystemDiagram />
          </div>
        </section>

        {/* Technical Proficiency Matrix */}
        <section className="mb-20">
          <TechnicalCapabilities />
        </section>

        {/* Ways to Work Together CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Ready to review your workflow?
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                Whether you need a manual process audited, an AI assistant scoped, or a backend service built from scratch, let&apos;s talk about what will make the biggest difference to your team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white opacity-80" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
