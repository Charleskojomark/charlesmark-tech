"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Code2, ArrowLeft, AlertTriangle, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

const CATEGORIES = ["All", "Automation", "AI Systems", "Backend", "Cloud & DevOps"];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
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
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            APPLIED SOLUTIONS & CLIENT BUILDS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            CASE STUDIES & REFERENCE SYSTEMS
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            Documented implementations of AI automation pipelines, internal knowledge assistants, and scalable backend services. Each case study details the concrete business problem, what changed, and the operational results.
          </p>
        </div>


        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-[#D8C5AF]/60 pb-6">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#241A15] text-[#F5F0E8] shadow-sm"
                  : "bg-[#FAF7F2] border border-[#D8C5AF] text-[#4A3428] hover:bg-[#D8C5AF]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-9 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#B58A64] bg-[#F5F0E8] border border-[#D8C5AF] px-2.5 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-0.5 rounded border ${
                      project.slug === "klinik-voice-assistant"
                        ? "bg-amber-50 text-amber-900 border-amber-200"
                        : "bg-[#E8DDCF]/50 text-[#4A3428] border-[#D8C5AF]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl text-[#241A15] hover:text-[#4A3428] transition-colors leading-snug">
                  <Link href={`/case-studies/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                <p className="text-sm font-medium text-[#4A3428] mt-1 mb-5 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Honesty note if hackathon prototype */}
                {project.honestyNote && (
                  <div className="mb-5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>{project.honestyNote}</span>
                  </div>
                )}

                {/* Problem, What Changed, Result */}
                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                    <span className="font-mono text-[10px] text-[#4A3428]/80 uppercase tracking-widest font-bold block mb-1">
                      THE PROBLEM:
                    </span>
                    <p className="text-xs text-[#241A15] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#B58A64]/40">
                    <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest font-bold block mb-1">
                      WHAT CHANGED:
                    </span>
                    <p className="text-xs text-[#241A15] leading-relaxed">
                      {project.whatChanged}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-emerald-600/30">
                    <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold block mb-1">
                      THE RESULT:
                    </span>
                    <p className="text-xs text-[#241A15] font-medium leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Tech footnote */}
                <div className="pt-2 pb-4 text-xs font-mono text-[#4A3428]/70 border-t border-[#D8C5AF]/50">
                  <span className="text-[10px] uppercase font-bold text-[#4A3428]/80 block mb-1">
                    System Architecture Footnote:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#D8C5AF]/80 text-[#4A3428]"
                      >
                        <Code2 className="w-2.5 h-2.5 text-[#B58A64]" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3">
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#241A15] hover:text-[#4A3428] transition-colors"
                >
                  <span>Explore Architecture & Decisions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64]" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-[#000000] hover:bg-[#D8C5AF]/40 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4 text-[#000000]" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* End of Page CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl">
              Need a similar solution for your operations?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C5AF] mt-1">
              Book a 20-minute discovery call to evaluate your technical constraints and workflow ROI.
            </p>
          </div>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0 shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-white opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}
