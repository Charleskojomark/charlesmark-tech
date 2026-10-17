import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Code2, Sparkles, Layers } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              FEATURED ENGINEERING WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#241A15] tracking-tight">
              APPLIED AI, WORKFLOWS & BACKEND SERVICES
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-mono font-medium text-[#241A15] hover:text-[#4A3428]"
          >
            <span>View All Engineering Projects ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-lg transition-all duration-300 relative"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#B58A64] bg-[#F5F0E8] border border-[#D8C5AF] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#4A3428]/80 bg-[#E8DDCF]/50 px-2.5 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-2xl text-[#241A15] group-hover:text-[#4A3428] transition-colors leading-snug">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-sm font-medium text-[#4A3428] mt-1 mb-4 leading-relaxed">
                  {project.tagline}
                </p>

                {/* The Problem / The Solution Summary */}
                <div className="space-y-3 mb-6 bg-[#F5F0E8] p-4 rounded-2xl border border-[#D8C5AF]/70">
                  <div>
                    <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-0.5">
                      PROBLEM SOLVED:
                    </span>
                    <p className="text-xs text-[#241A15] line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-0.5">
                      WHAT I BUILT & DELIVERED:
                    </span>
                    <p className="text-xs text-[#4A3428] line-clamp-2 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
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

              {/* Actions & Links */}
              <div className="pt-4 border-t border-[#D8C5AF]/70 flex items-center justify-between gap-3">
                <Link
                  href={`/work/${project.slug}`}
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
                      className="p-2 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-[#000000] hover:bg-[#D8C5AF]/40 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
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
                      aria-label={`${project.title} Live Demo`}
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
    </section>
  );
}
