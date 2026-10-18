import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ArrowLeft, Cpu, Bot, Server, Check, Clock, Users } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Server: Server,
};

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Backend Services | Charles Mark",
  description:
    "AI Workflow Automation (n8n & Python), Custom AI Agents & Assistants (RAG & LangGraph), and Scalable Backend Development & AI Integration by Charles Mark.",
  keywords: [
    "AI Automation Services",
    "Custom AI Agent Development",
    "Backend Engineering Services",
    "n8n Workflow Automation",
    "RAG Knowledge Assistants",
    "PostgreSQL API Integration",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: `AI Automation & Backend Services | ${siteConfig.name}`,
    description:
      "AI Workflow Automation (n8n & Python), Custom AI Agents & Assistants (RAG & LangGraph), and Scalable Backend Development & AI Integration by Charles Mark.",
    url: `${siteConfig.url}/services`,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Services & Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Automation & Backend Services | ${siteConfig.name}`,
    description:
      "AI Workflow Automation, Custom AI Agents & Assistants, and Backend Development by Charles Mark.",
    images: [siteConfig.ogImage],
  },
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            SERVICES WRITTEN AS BUSINESS OUTCOMES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            AI AUTOMATION & BACKEND SOLUTIONS
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            I help businesses transition from manual administrative bottlenecks to durable, self-hosted or dedicated automated systems. Here are the three primary areas where I deliver dependable production results.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 mb-20">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Cpu;

            return (
              <section
                key={service.id}
                id={service.id}
                className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D8C5AF] scroll-mt-24 shadow-sm"
              >
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#D8C5AF]" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#B58A64] uppercase font-bold tracking-wider">
                        SERVICE 0{index + 1}
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15]">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C5AF]" />
                  </Link>
                </div>

                <div className="max-w-3xl mb-8 space-y-3">
                  <h3 className="font-display font-semibold text-xl text-[#241A15]">
                    &ldquo;{service.headline}&rdquo;
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{service.outcome}</span>
                  </div>
                  <p className="text-sm text-[#4A3428] leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Who It's For & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-wider mb-1">
                      <Users className="w-3.5 h-3.5 text-[#B58A64]" />
                      <span>WHO IT&apos;S FOR:</span>
                    </div>
                    <p className="text-xs text-[#4A3428] leading-relaxed">
                      {service.whoItsFor}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-wider mb-1">
                        <Clock className="w-3.5 h-3.5 text-[#B58A64]" />
                        <span>TYPICAL TIMELINE:</span>
                      </div>
                      <p className="text-xs text-[#4A3428] leading-relaxed">
                        {service.typicalTimeline} from kickoff to deployment.
                      </p>
                    </div>
                    <div className="pt-2 text-[11px] font-mono text-emerald-800 font-semibold">
                      ✓ Includes 30-day post-launch warranty
                    </div>
                  </div>
                </div>

                {/* What You Get / Process / Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D8C5AF]/70">
                  {/* What you get */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      WHAT YOU GET
                    </span>
                    <ul className="space-y-2.5">
                      {service.whatYouGet.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implementation Process */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      IMPLEMENTATION PROCESS
                    </span>
                    <ul className="space-y-2.5">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <span className="font-mono font-bold text-[#B58A64]">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      TANGIBLE DELIVERABLES
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* High-Converting Services Page Footer CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-display font-bold text-2xl">
              Not sure which option fits your workflow best?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C5AF]">
              Book a free 20-minute workflow review. We will map out your current bottleneck and give you an honest appraisal of whether automation is worth it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B58A64] hover:bg-[#D8C5AF] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Book a Free Workflow Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
