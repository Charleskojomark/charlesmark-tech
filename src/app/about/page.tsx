import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Cloud,
  Server,
  Award,
  Check,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { SystemDiagram } from "@/components/SystemDiagram";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";
import { CertificationsSection } from "@/components/CertificationsSection";

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
    siteName: siteConfig.name,
    type: "profile",
    locale: "en_US",
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
      "Applied AI & Forward Deployed Systems Engineer. Bridging robust backend infrastructure, cloud DevOps, and production agentic AI systems.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 md:py-20 bg-[#FAF7F2] text-[#241A15] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4A3428] hover:text-[#B58A64] transition-colors group py-1 min-h-[36px]"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-12 sm:mb-16 border-b border-[#D8C5AF]/70 pb-8 sm:pb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="relative size-28 sm:size-36 md:size-40 rounded-3xl overflow-hidden border-2 border-[#4A3428] shadow-lg shrink-0 bg-[#241A15]">
              <Image
                src="/charles-mark.png"
                alt="Charles Mark - Applied AI & Forward Deployed Systems Engineer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 112px, 160px"
                priority
              />
            </div>
            <div className="space-y-3 min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#B58A64]/60">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-bold">
                  ABOUT CHARLES KOJO MARK
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#241A15] tracking-tight leading-[1.2] text-balance break-words">
                From Backend Architecture & Cloud Infrastructure to Production Agentic AI Systems.
              </h1>
              <p className="font-display text-sm sm:text-base md:text-lg text-[#4A3428] font-normal leading-relaxed max-w-2xl text-pretty border-l-2 border-[#B58A64] pl-3 sm:pl-4 italic text-left">
                &ldquo;I bridge high-throughput backend services, cloud DevOps pipelines, and autonomous agentic systems that run reliably in enterprise production.&rdquo;
              </p>
            </div>
          </div>
        </header>

        {/* The Evolution Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-16 items-start">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-base text-[#38261D] leading-relaxed">
            {/* Visual Architecture Progression Stepper */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 rounded-full bg-[#B58A64]" />
                <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-widest">
                  Architectural Evolution
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15] tracking-tight text-balance">
                The Engineering Journey
              </h2>

              {/* Responsive Visual Pipeline Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4 p-2 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/60 shadow-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Server className="size-4 text-[#B58A64] shrink-0" />
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] text-[#4A3428]/60 uppercase tracking-wider block">Stage 01</span>
                      <span className="font-display font-bold text-xs text-[#241A15] truncate block">Backend Systems</span>
                    </div>
                  </div>
                  <ArrowRight className="size-3.5 text-[#B58A64] hidden sm:block shrink-0 ml-1" />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF]/60 shadow-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Cloud className="size-4 text-[#B58A64] shrink-0" />
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] text-[#4A3428]/60 uppercase tracking-wider block">Stage 02</span>
                      <span className="font-display font-bold text-xs text-[#241A15] truncate block">Cloud & DevOps</span>
                    </div>
                  </div>
                  <ArrowRight className="size-3.5 text-[#B58A64] hidden sm:block shrink-0 ml-1" />
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-xs min-w-0">
                  <Cpu className="size-4 text-[#B58A64] shrink-0" />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-wider block">Stage 03</span>
                    <span className="font-display font-bold text-xs text-[#F5F0E8] truncate block">Agentic AI Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Stage 1 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-[#FAF7F2] text-[#B58A64] border border-[#D8C5AF] font-mono text-[10px] font-bold uppercase shrink-0">
                  Foundation
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#241A15] leading-snug">
                  1. The Backend Bedrock: High-Concurrency & Data Integrity
                </h3>
              </div>
              <p className="text-sm text-[#4A3428] leading-relaxed text-pretty">
                My foundation in software engineering was forged in <strong>backend systems</strong>. Before designing multi-agent workflows or vector retrieval architectures, I spent years mastering what keeps mission-critical servers alive: transactional database schemas, idempotent webhook consumers, connection pooling, and resilient API contracts in Node/TypeScript, Python/FastAPI, and Go.
              </p>
              <p className="text-xs font-mono text-[#4A3428]/80 pt-1 break-words">
                <strong className="text-[#241A15]">Key Capabilities:</strong> FastAPI, PostgreSQL, Redis Caching & Queues, Stripe/PayPal Webhook Idempotency, JWT/OAuth2 Auth.
              </p>
            </div>

            {/* Narrative Stage 2 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-[#FAF7F2] text-[#B58A64] border border-[#D8C5AF] font-mono text-[10px] font-bold uppercase shrink-0">
                  Scale & Reliability
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#241A15] leading-snug">
                  2. Cloud Infrastructure & DevOps Discipline
                </h3>
              </div>
              <p className="text-sm text-[#4A3428] leading-relaxed text-pretty">
                As systems scale, code cannot survive without <strong>cloud infrastructure and DevOps discipline</strong>. I expanded deeply into container orchestration (Docker, Kubernetes), automated CI/CD pipelines via GitHub Actions, cloud architecture on AWS and Google Cloud Platform, and deep observability with OpenTelemetry and Prometheus.
              </p>
              <p className="text-xs font-mono text-[#4A3428]/80 pt-1 break-words">
                <strong className="text-[#241A15]">Key Capabilities:</strong> Docker Containerization, GCP Cloud Run, AWS ECS/S3, Zero-Downtime CI/CD, Prometheus & Grafana Telemetry.
              </p>
            </div>

            {/* Narrative Stage 3 */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-[#241A15] text-[#B58A64] font-mono text-[10px] font-bold uppercase shrink-0">
                  Current Frontier
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#241A15] leading-snug">
                  3. Applied Agentic AI & Forward Deployed Engineering
                </h3>
              </div>
              <p className="text-sm text-[#4A3428] leading-relaxed text-pretty">
                When generative AI emerged, much of the market rushed to build fragile single-prompt wrappers and no-code toy demos that fall apart under production traffic. Recognizing that real enterprise AI demands structural rigor, I specialized in <strong>Agentic System Design</strong>, <strong>Applied AI Engineering</strong>, and <strong>Forward Deployed Engineering</strong> on Educative.io, mentored and trained directly by <strong>FAANG engineers</strong>.
              </p>
              <p className="text-xs font-mono text-[#4A3428]/80 pt-1 break-words">
                <strong className="text-[#241A15]">Key Capabilities:</strong> LangGraph Multi-Agent Workflows, Tool Calling (Model Context Protocol), Hybrid RAG with pgvector, Automated Evaluation Benchmarks.
              </p>
            </div>

            {/* Core Pedigree Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#4A3428]">
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-[#B58A64] shrink-0" />
                  <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider">
                    ENGINEERING PEDIGREE & CREDENTIALS
                  </span>
                </div>
                <a
                  href="#certifications"
                  className="text-xs font-mono text-[#B58A64] hover:text-[#F5F0E8] transition-colors underline underline-offset-4"
                >
                  View all 7 credentials ↓
                </a>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-[#D8C5AF]">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#B58A64] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F0E8]">DeepLearning.AI:</strong> Agentic AI (Mentored by Andrew Ng)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#B58A64] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F0E8]">Meta (Coursera):</strong> Back-End Developer Specialization (9-Course System Architecture)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#B58A64] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F0E8]">Udacity • AWS:</strong> AWS AI Practitioner Challenge</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 text-[#B58A64] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F0E8]">Educative (FAANG Mentored):</strong> Agentic System Design, Applied AI, AI Workflows & Forward Deployed Engineering</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-[#38261D] leading-relaxed text-pretty pt-2">
              Today, as an <strong>Applied AI & Forward Deployed Systems Engineer</strong>, I embed directly with fast-growing companies and enterprise teams. I don&apos;t just build standalone prototypes—I architect, containerize, and deploy hardened AI systems directly inside your cloud infrastructure with deterministic evaluation suites and full code ownership.
            </p>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6 lg:sticky lg:top-24">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F5F0E8] border border-[#D8C5AF] shadow-sm">
              <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                CORE TECHNICAL PILLARS
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#4A3428]">
                <li className="flex items-start gap-2.5">
                  <Cpu className="size-4 text-[#B58A64] mt-0.5 shrink-0" />
                  <span>Agentic Systems & Multi-Agent Evals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Cloud className="size-4 text-[#B58A64] mt-0.5 shrink-0" />
                  <span>Docker, K8s, CI/CD & Cloud DevOps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Server className="size-4 text-[#B58A64] mt-0.5 shrink-0" />
                  <span>High-Concurrency APIs (Python, FastAPI, Node)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-[#B58A64] mt-0.5 shrink-0" />
                  <span>Hybrid RAG & pgvector Retrieval</span>
                </li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-md">
              <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider block mb-2">
                VERIFIED CONTACT CHANNELS
              </span>
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#B58A64] transition-colors py-2 border-b border-[#4A3428] min-w-0"
                >
                  <span className="flex items-center gap-2 min-w-0 mr-2">
                    <Mail className="size-4 text-[#B58A64] shrink-0" />
                    <span className="truncate">{siteConfig.contact.email}</span>
                  </span>
                  <span className="text-[#B58A64] shrink-0">Email &rarr;</span>
                </a>

                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#25D366] transition-colors py-2 border-b border-[#4A3428]"
                >
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="size-4 fill-[#25D366] shrink-0" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="text-[#25D366] font-bold">Chat &rarr;</span>
                </a>

                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] transition-colors py-2 border-b border-[#4A3428] min-w-0"
                >
                  <span className="flex items-center gap-2 min-w-0 mr-2">
                    <LinkedInIcon className="size-4 fill-[#0A66C2] shrink-0" />
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-[#F5F0E8] font-bold truncate">/{siteConfig.social.linkedin.username}</span>
                </a>

                <a
                  href={siteConfig.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] transition-colors py-2 min-w-0"
                >
                  <span>GitHub</span>
                  <span className="text-[#F5F0E8] font-bold truncate">/{siteConfig.social.github.username}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive System Diagram Feature */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-1">
              SYSTEM DESIGN BLUEPRINT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15]">
              Interactive Architecture Map
            </h2>
            <p className="text-xs sm:text-sm text-[#4A3428] mt-1 text-pretty">
              Click any node below to inspect protocols, failure handling, and payload contracts across a production client system.
            </p>
          </div>
          <div className="rounded-2xl sm:rounded-3xl bg-[#FAF7F2] p-3 sm:p-6 border border-[#D8C5AF]">
            <SystemDiagram />
          </div>
        </section>

        {/* Technical Proficiency Matrix */}
        <section className="mb-14 sm:mb-20">
          <TechnicalCapabilities />
        </section>

        {/* Verified Professional Certifications */}
        <div id="certifications" className="mb-14 sm:mb-20 scroll-mt-24">
          <CertificationsSection />
        </div>

        {/* Ways to Work Together CTA */}
        <section className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-balance">
                Ready to architect your production system?
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed text-pretty">
                Whether you need a multi-agent system designed, cloud infrastructure containerized, or high-throughput backend APIs built right, let&apos;s talk technical requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-4 fill-current shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="size-4 text-white opacity-80 shrink-0" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                <Mail className="size-4 text-[#B58A64] shrink-0" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
