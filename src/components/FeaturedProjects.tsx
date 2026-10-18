import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Code2, AlertTriangle } from "lucide-react";
import { projects } from "@/data/projects";
import { Card3D, Card3DItem } from "@/components/Card3D";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
              REAL IMPLEMENTATIONS & REFERENCE BUILDS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              CASE STUDIES: PROBLEM, WHAT CHANGED, RESULT
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-[#241A15] hover:text-[#4A3428]"
          >
            <span>Explore All Case Studies ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Case Studies Grid with 3D Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((project) => (
            <Card3D
              key={project.slug}
              className="group flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-9 border border-[#D8C5AF] hover:border-[#4A3428] shadow-md hover:shadow-2xl transition-all duration-300 relative"
            >
              <div>
                {/* Meta Header */}
                <Card3DItem translateZ={30} className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#B58A64] bg-[#F5F0E8] border border-[#D8C5AF] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
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
                </Card3DItem>

                {/* Title & Tagline */}
                <Card3DItem translateZ={20}>
                  <h3 className="font-display font-bold text-2xl text-[#241A15] group-hover:text-[#4A3428] transition-colors leading-snug">
                    <Link href={`/case-studies/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-[#4A3428] mt-1 mb-5 leading-relaxed">
                    {project.tagline}
                  </p>
                </Card3DItem>

                {/* Klinik Prototype Disclaimer Notice if applicable */}
                {project.honestyNote && (
                  <div className="mb-5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] font-mono text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>{project.honestyNote}</span>
                  </div>
                )}

                {/* The 3 Core Business Pillars: Problem, What Changed, Result */}
                <div className="space-y-3.5 mb-6">
                  {/* 1. Problem */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70">
                    <span className="font-mono text-[10px] text-[#4A3428]/80 uppercase tracking-widest font-bold block mb-1">
                      1. THE PROBLEM:
                    </span>
                    <p className="text-xs text-[#241A15] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* 2. What Changed */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#B58A64]/40">
                    <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-widest font-bold block mb-1">
                      2. WHAT CHANGED:
                    </span>
                    <p className="text-xs text-[#241A15] leading-relaxed">
                      {project.whatChanged}
                    </p>
                  </div>

                  {/* 3. The Result */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-emerald-600/30">
                    <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-widest font-bold block mb-1">
                      3. THE RESULT:
                    </span>
                    <p className="text-xs text-[#241A15] font-medium leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Small Tech Stack Footnote */}
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

              {/* Actions & Links */}
              <Card3DItem translateZ={28} className="pt-4 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3">
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#241A15] group-hover:text-[#4A3428] transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-[#000000] hover:bg-[#D8C5AF]/40 transition-colors shadow-xs"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4 text-[#000000]" />
                    </a>
                  )}
                </div>
              </Card3DItem>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
