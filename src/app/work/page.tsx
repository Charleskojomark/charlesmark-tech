"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Sparkles, Code2, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const CATEGORIES = ["All", "AI Systems", "Automation", "Backend", "Cloud & DevOps"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 md:py-16">
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
            ENGINEERING PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            PROJECTS & CASE STUDIES
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            A documented collection of AI systems, backend services, and automation pipelines. Each project details the concrete problem, architecture decisions, trade-offs, and lessons learned.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#D8C5AF]/60 pb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#B58A64] bg-[#F5F0E8] border border-[#D8C5AF] px-2.5 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#4A3428]/80 bg-[#E8DDCF]/50 px-2.5 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl text-[#241A15] hover:text-[#4A3428] transition-colors leading-snug">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                <p className="text-sm font-medium text-[#4A3428] mt-1 mb-5 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="space-y-3 mb-6 bg-[#F5F0E8] p-4 rounded-2xl border border-[#D8C5AF]/70">
                  <div>
                    <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-0.5">
                      THE PROBLEM:
                    </span>
                    <p className="text-xs text-[#241A15] line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-0.5">
                      MY CONTRIBUTION:
                    </span>
                    <p className="text-xs text-[#4A3428] line-clamp-2 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAF7F2] border border-[#D8C5AF] text-[#4A3428]"
                    >
                      <Code2 className="w-3 h-3 text-[#B58A64]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3">
                <Link
                  href={`/work/${project.slug}`}
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
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-[#241A15] hover:bg-[#D8C5AF]/40 transition-colors"
                      aria-label="Live Demo"
                    >
                      <Sparkles className="w-4 h-4 text-[#B58A64]" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
