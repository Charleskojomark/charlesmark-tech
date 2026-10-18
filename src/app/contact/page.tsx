"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Copy,
  Check,
  Calendar,
  Clock,
  MessageCircle,
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
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
    title: "Workflow Audit / Advisory",
    desc: "Diagnostic review of current manual processes to determine feasibility and ROI.",
    message: "Hi Charles, I'd like to book a workflow audit to review our team's bottlenecks.",
    badge: "Fixed diagnostic",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] font-semibold text-[#4A3428] uppercase tracking-wider">
              LET&apos;S DISCUSS YOUR SYSTEM REQUIREMENTS
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#241A15] tracking-tight mb-4">
            START A CONVERSATION.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4A3428] max-w-2xl leading-relaxed">
            Choose the method that works best for your schedule: submit an enquiry brief below, schedule a 20-minute discovery call, or chat directly with Charles Mark on WhatsApp.
          </p>
        </div>

        {/* Main Grid: Form on Left, Direct Booking & Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D8C5AF] shadow-md">
            <div className="mb-6">
              <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                PROJECT ENQUIRY BRIEF
              </span>
              <h2 className="font-display font-bold text-2xl text-[#241A15]">
                Tell Me What You Want to Automate or Build
              </h2>
              <p className="text-xs text-[#4A3428] mt-1">
                Fill out this quick form and I will review your requirements and reply within 24 hours.
              </p>
            </div>

            <EnquiryForm />
          </div>

          {/* Right Column: Direct Booking Link & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Booking Link Card [TODO: booking URL] */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#38261D] flex items-center justify-center text-[#B58A64]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D8C5AF]">
                    SCHEDULE A CALL
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-[#38261D] text-[#D8C5AF] px-2 py-0.5 rounded">
                  20 Min Discovery
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F0E8]">
                Direct Discovery Calendar
              </h3>
              <p className="text-xs text-[#D8C5AF] leading-relaxed">
                Prefer to talk in real-time? Book a slot directly on my calendar to review your manual bottlenecks or backend scope.
              </p>

              <a
                href={siteConfig.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#B58A64] hover:bg-[#D8C5AF] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Book a Discovery Call ({siteConfig.booking.placeholder})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct WhatsApp Action Hub */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#241A15] uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                  <span>DIRECT WHATSAPP CHAT</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Online
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-mono font-bold text-[#241A15]">
                {siteConfig.contact.phoneDisplay}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4A3428] hover:bg-[#241A15] text-[#F5F0E8] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Open WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-xs font-mono text-[#241A15] hover:bg-[#D8C5AF]/30 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#4A3428]" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct email fallback */}
              <div className="pt-2 text-xs font-mono text-[#4A3428] border-t border-[#D8C5AF]/60 flex items-center justify-between">
                <span>Direct Email:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-bold text-[#241A15] underline underline-offset-4 hover:text-[#4A3428]"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Turnaround Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B58A64] flex-shrink-0" />
              <div className="text-xs font-mono text-[#4A3428]">
                <span className="font-bold text-[#241A15] block">24-Hour Reply Policy</span>
                <span>All project briefs receive a personal, direct assessment from Charles.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-formatted WhatsApp Conversation Starters */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
          <div className="max-w-2xl mb-6">
            <span className="font-mono text-xs text-[#B58A64] uppercase font-bold tracking-wider block mb-1">
              FAST-TRACK ON WHATSAPP
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15]">
              Choose a Pre-Filled Topic
            </h3>
            <p className="text-xs text-[#4A3428] mt-1">
              Click any topic below to open WhatsApp with a tailored opening inquiry:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHATSAPP_TOPICS.map((topic) => (
              <a
                key={topic.id}
                href={`https://wa.me/2347082367382?text=${encodeURIComponent(topic.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#B58A64] uppercase">
                      {topic.badge}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#4A3428] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#241A15] mb-1">
                    {topic.title}
                  </h4>
                  <p className="text-[11px] text-[#4A3428] leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-[#D8C5AF]/60 text-[10px] font-mono font-semibold text-[#241A15] group-hover:text-[#4A3428]">
                  Open in WhatsApp →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
