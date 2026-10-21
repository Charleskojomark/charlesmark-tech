import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Cloud,
  Server,
  Award,
  Check,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { SystemDiagram } from "@/components/SystemDiagram";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Charles Mark | Applied AI & Forward Deployed Systems Engineer",
  description:
    "Learn about Charles Mark, an Applied AI & Forward Deployed Systems Engineer with deep roots in backend architecture, cloud DevOps, and agentic system design. Trained by FAANG engineers.",
  keywords: [
    "About Charles Mark",
    "Applied AI Engineer",
    "Forward Deployed Engineer",
    "Agentic System Design",
    "Cloud Infrastructure DevOps",
    "Backend Systems Engineer",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Charles Mark | ${siteConfig.name}`,
    description:
      "Applied AI & Forward Deployed Systems Engineer. Bridging robust backend infrastructure, cloud DevOps, and production agentic AI systems.",
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
              alt="Charles Mark - Applied AI & Forward Deployed Systems Engineer"
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
              FROM BACKEND & CLOUD INFRASTRUCTURE
              <br />
              TO PRODUCTION AGENTIC AI SYSTEMS.
            </h1>
            <p className="font-display text-lg sm:text-xl text-[#4A3428] font-normal leading-relaxed max-w-2xl">
              &ldquo;I bridge high-throughput backend services, cloud DevOps pipelines, and autonomous agentic systems that run reliably in enterprise production.&rdquo;
            </p>
          </div>
        </header>

        {/* The Evolution Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6 text-base text-[#38261D] leading-relaxed">
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              The Journey: Backend $\rightarrow$ Cloud DevOps $\rightarrow$ Applied Agentic AI
            </h2>

            <p>
              My foundation in engineering was forged in <strong>backend systems</strong>. Before designing multi-agent workflows or vector retrieval architectures, I spent years mastering what keeps mission-critical servers alive: transactional database schemas, idempotent webhook consumers, connection pooling, and resilient API contracts in Node/TypeScript, Python/FastAPI, and Go.
            </p>

            <p>
              As systems scale, code cannot survive without <strong>cloud infrastructure and DevOps discipline</strong>. I expanded deeply into container orchestration (Docker, Kubernetes), automated CI/CD pipelines via GitHub Actions, cloud architecture on AWS and GCP, and deep observability with OpenTelemetry and Prometheus.
            </p>

            <p>
              When generative AI emerged, much of the market rushed to build fragile single-prompt wrappers and no-code toy demos that fall apart under production traffic. Recognizing that real enterprise AI demands structural rigor, I specialized in <strong>Agentic System Design</strong>, <strong>Applied AI Engineering</strong>, and <strong>Forward Deployed Engineering</strong> on Educative.io, mentored and trained directly by <strong>FAANG engineers</strong>.
            </p>

            {/* Core Pedigree Box */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] my-6 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B58A64]" />
                <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider">
                  ENGINEERING PEDIGREE & CREDENTIALS
                </span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-[#241A15]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                  <span><strong>Trained by FAANG Engineers</strong> in distributed system architecture & production AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                  <span><strong>Educative.io Certified:</strong> Agentic System Design & LangGraph State Machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                  <span><strong>Educative.io Certified:</strong> Applied AI Engineering & Production RAG Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                  <span><strong>Educative.io Certified:</strong> Forward Deployed Engineering & Enterprise Integration</span>
                </li>
              </ul>
            </div>

            <p>
              Today, as an <strong>Applied AI & Forward Deployed Systems Engineer</strong>, I embed directly with fast-growing companies and enterprise teams. I don&apos;t just build standalone prototypes—I architect, containerize, and deploy hardened AI systems directly inside your cloud infrastructure with deterministic evaluation suites and full code ownership.
            </p>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
              <span className="font-mono text-xs text-[#241A15] font-semibold uppercase tracking-wider block mb-4">
                CORE TECHNICAL PILLARS
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#4A3428]">
                <li className="flex items-start gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#B58A64] mt-0.5 flex-shrink-0" />
                  <span>Agentic Systems & Multi-Agent Evals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Cloud className="w-3.5 h-3.5 text-[#B58A64] mt-0.5 flex-shrink-0" />
                  <span>Docker, K8s, CI/CD & Cloud DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <Server className="w-3.5 h-3.5 text-[#B58A64] mt-0.5 flex-shrink-0" />
                  <span>High-Concurrency APIs (Node, FastAPI, Go)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] mt-0.5 flex-shrink-0" />
                  <span>Hybrid RAG & pgvector Retrieval</span>
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
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
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
                  <span className="flex items-center gap-2">
                    <LinkedInIcon className="w-4 h-4 fill-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </span>
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
              Click any node below to inspect protocols, failure handling, and payload contracts across a production client system.
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
                Ready to architect your production system?
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                Whether you need a multi-agent system designed, cloud infrastructure containerized, or high-throughput backend APIs built right, let&apos;s talk technical requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
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
