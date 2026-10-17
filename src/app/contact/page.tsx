"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const WHATSAPP_TOPICS = [
  {
    id: "automation",
    title: "AI Workflow Automation",
    desc: "n8n, Python, webhooks, CRM sync, and eliminating manual repetitive tasks.",
    message: "Hi Charles, I'd like to discuss automating our business processes with n8n and Python.",
    badge: "10-20 hrs/wk saved",
  },
  {
    id: "agents",
    title: "Custom AI Agents & Voice",
    desc: "LangGraph state machines, real-time voice intake, RAG, and tool validation.",
    message: "Hi Charles, I want to build a custom AI agent or voice triage system.",
    badge: "Deterministic guardrails",
  },
  {
    id: "backend",
    title: "Backend Development & APIs",
    desc: "Node.js/Express, Django, FastAPI, PostgreSQL, and reliable infrastructure.",
    message: "Hi Charles, I need backend engineering, API integration, or database architecture.",
    badge: "Type-safe contracts",
  },
  {
    id: "consultation",
    title: "General Engineering / Hiring",
    desc: "Full-time roles, contract work, or technical advisory for your engineering team.",
    message: "Hi Charles, I came across your portfolio and would like to discuss an engineering role or project.",
    badge: "Available now",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.contact.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
              DIRECT WHATSAPP MESSAGING • NO FORMS REQUIRED
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#241A15] tracking-tight mb-4">
            LET&apos;S TALK.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4A3428] max-w-2xl leading-relaxed">
            Skip filling out long contact forms. Connect directly with Charles Mark on WhatsApp to discuss your AI systems, workflow automation, or backend engineering requirements.
          </p>
        </div>

        {/* Primary Direct WhatsApp Action Hub */}
        <div className="bg-[#241A15] text-[#F5F0E8] rounded-3xl p-6 sm:p-10 border border-[#4A3428] shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle warm glow background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8C5AF]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                <span className="font-bold uppercase tracking-wider">Direct WhatsApp Chat</span>
                <span>•</span>
                <span className="text-emerald-400">Online & Ready</span>
              </div>

              <div className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-[#F5F0E8]">
                {siteConfig.contact.phoneDisplay}
              </div>

              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                Click below to start a live WhatsApp chat immediately, or copy the direct number to save to your contacts.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-[#0d381e] font-display font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98] text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#38261D] border border-[#4A3428] hover:border-[#B58A64] text-[#F5F0E8] font-mono text-xs font-medium transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span className="text-[#10B981] font-bold">Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#D8C5AF]" />
                    <span>Copy +234 708 236 7382</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* One-Tap Topic Starters */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-1">
                ONE-TAP CONVERSATION STARTERS
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#241A15]">
                What do you want to talk about?
              </h2>
            </div>
            <span className="font-mono text-xs text-[#4A3428]/60 hidden sm:inline">
              Pre-fills your WhatsApp chat
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHATSAPP_TOPICS.map((topic) => {
              const topicUrl = `https://wa.me/2347082367382?text=${encodeURIComponent(
                topic.message
              )}`;

              return (
                <a
                  key={topic.id}
                  href={topicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#4A3428] bg-[#F5F0E8] px-2.5 py-0.5 rounded border border-[#D8C5AF]/60">
                        {topic.badge}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#B58A64] group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <h3 className="font-display font-bold text-base text-[#241A15] group-hover:text-[#4A3428] transition-colors mb-1.5">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[#4A3428] leading-relaxed mb-4">
                      {topic.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8C5AF]/60 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#4A3428]/70">Tap to chat on WhatsApp</span>
                    <span className="font-bold text-[#241A15] group-hover:text-[#4A3428] inline-flex items-center gap-1">
                      Start &rarr;
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Channels & Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D8C5AF]/70">
          {/* Direct Email */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#241A15]">
              <Mail className="w-4 h-4 text-[#B58A64]" />
              <span>EMAIL INQUIRIES</span>
            </div>
            <p className="text-xs text-[#4A3428] mb-3 leading-relaxed">
              Prefer formal email communication or sending attachments?
            </p>
            <a
              href={siteConfig.contact.fallbackMailto}
              className="font-mono text-xs text-[#241A15] font-semibold underline underline-offset-4 hover:text-[#4A3428] break-all"
            >
              markcharleskojo@gmail.com
            </a>
          </div>

          {/* Turnaround & Availability */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#241A15]">
              <Clock className="w-4 h-4 text-[#B58A64]" />
              <span>RESPONSE TIME</span>
            </div>
            <p className="text-xs text-[#4A3428] mb-2 leading-relaxed">
              WhatsApp messages typically answered within 1–2 hours during business hours.
            </p>
            <span className="font-mono text-[11px] text-[#4A3428]/70 block">
              Timezone: WAT (UTC+1) • Global Remote
            </span>
          </div>

          {/* Verification & Socials */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#241A15]">
              <ShieldCheck className="w-4 h-4 text-[#B58A64]" />
              <span>PROFESSIONAL PROFILES</span>
            </div>
            <p className="text-xs text-[#4A3428] mb-3 leading-relaxed">
              Review code repositories and verified professional history.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-[#000000] font-semibold hover:text-[#4A3428]"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={siteConfig.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-[#000000] font-semibold hover:text-[#4A3428]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
