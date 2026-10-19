"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle2,
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
    title: "Custom AI Agents & RAG",
    desc: "Private document search, LangGraph state machines, and tool-calling agents.",
    message: "Hi Charles, I want to build a custom AI assistant grounded in our company documents.",
    badge: "Cited answers",
  },
  {
    id: "backend",
    title: "Backend Development & APIs",
    desc: "Node.js/Express, FastAPI/Django, PostgreSQL, and scalable cloud backends.",
    message: "Hi Charles, I need backend engineering, API integration, or database architecture for our product.",
    badge: "Production architecture",
  },
  {
    id: "audit",
    title: "Workflow Audit & Feasibility",
    desc: "Diagnostic review of current manual processes to determine feasibility and ROI.",
    message: "Hi Charles, I'd like to consult on an upcoming workflow audit or technical feasibility review.",
    badge: "Fast assessment",
  },
];

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 md:py-20 min-h-screen">
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
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
              DIRECT CLIENT ACCESS
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#241A15] tracking-tight mb-4">
            LET&apos;S TALK ON WHATSAPP.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4A3428] max-w-2xl leading-relaxed">
            Skip the forms and sales delays. You will speak directly with Charles Mark, AI Systems Engineer. Tap below to start a chat or choose a topic to prefill your inquiry.
          </p>
        </div>

        {/* Primary Hero WhatsApp Action Card */}
        <div className="bg-[#241A15] rounded-3xl p-6 sm:p-10 md:p-12 text-[#F5F0E8] border border-[#4A3428] shadow-2xl mb-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#B58A64] shadow-md bg-[#1C1410] flex-shrink-0">
                  <Image
                    src="/charles-mark.png"
                    alt="Charles Mark"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                    priority
                  />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-[#1C1410]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#B58A64] font-bold uppercase tracking-wider block">
                    FOUNDER &amp; LEAD ENGINEER
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F0E8]">
                    Charles Mark
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#D8C5AF] leading-relaxed">
                Whether you want to automate a repetitive back-office bottleneck, build an AI document assistant, or engineer a reliable backend API, you get direct engineering insight from day one.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D8C5AF]/90 pt-1">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fast reply</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B58A64]" />
                  <span>Free feasibility assessment</span>
                </span>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Cal.com */}
            <div className="flex flex-col items-stretch md:items-end flex-shrink-0 gap-3">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-extrabold text-base shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all duration-200 group"
              >
                <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-5 h-5 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-mono text-xs font-bold border border-[#D8C5AF] shadow-md active:scale-[0.98] transition-all duration-200 group"
              >
                <span>📅 Schedule 30-min on Cal.com</span>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="font-mono text-[11px] text-[#D8C5AF]/70 mt-0.5 text-center md:text-right">
                No forms required • Direct engineer contact
              </span>
            </div>
          </div>
        </div>

        {/* Quick Topic Selection: Pre-fills WhatsApp */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-bold block mb-1">
              CHOOSE A TOPIC TO PREFILL YOUR MESSAGE:
            </span>
            <h2 className="font-display font-bold text-xl sm:text-3xl text-[#241A15]">
              What would you like to discuss?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {WHATSAPP_TOPICS.map((topic) => (
              <a
                key={topic.id}
                href={`https://wa.me/2347082367382?text=${encodeURIComponent(topic.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#25D366] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] font-bold text-[#B58A64] bg-[#F5F0E8] border border-[#D8C5AF]/70 px-2.5 py-0.5 rounded-full">
                      {topic.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#241A15] group-hover:text-[#25D366] transition-colors mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#4A3428] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between text-xs font-mono font-semibold text-[#241A15]">
                  <span>Tap to send this inquiry</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B58A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Secondary Contact: Email Direct */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#B58A64] font-bold uppercase tracking-wider block">
              ALTERNATIVE CHANNEL
            </span>
            <h3 className="font-display font-bold text-lg text-[#241A15]">
              Prefer to send an email?
            </h3>
            <p className="text-xs text-[#4A3428]">
              If you have detailed RFPs or specifications, feel free to email me directly.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#241A15] hover:bg-[#4A3428] text-[#F5F0E8] font-mono text-xs font-bold transition-all flex-shrink-0"
          >
            <Mail className="w-4 h-4 text-[#B58A64]" />
            <span>{siteConfig.contact.email}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C5AF]" />
          </a>
        </div>
      </div>
    </div>
  );
}
