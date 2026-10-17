import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Sparkles,
  CheckCircle2,
  Code2,
  Layers,
  ShieldAlert,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";
import { ProjectSystemDesign } from "@/components/ProjectSystemDesign";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline || project.solution,
    keywords: [project.category, ...project.technologies, "Charles Mark Case Study"],
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.tagline || project.solution,
      url: `${siteConfig.url}/work/${project.slug}`,
      type: "article",
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.tagline || project.solution,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#4A3428] hover:text-[#241A15] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-12 border-b border-[#D8C5AF]/70 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold text-[#B58A64] bg-[#FAF7F2] border border-[#D8C5AF] px-3 py-1 rounded-full uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#4A3428]/80 bg-[#FAF7F2] border border-[#D8C5AF]/70 px-3 py-1 rounded-full">
              Status: {project.status}
            </span>
            <span className="font-mono text-xs text-[#4A3428]/60">
              Timeline: {project.timeline}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#4A3428] leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-[#D8C5AF]/40">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241A15] text-[#F5F0E8] font-mono text-xs font-medium hover:bg-[#4A3428] transition-colors"
              >
                <Github className="w-4 h-4 text-[#F5F0E8]" />
                <span>Source Code Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D8C5AF]" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] text-[#241A15] font-mono text-xs font-medium hover:border-[#4A3428] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#B58A64]" />
                <span>Live System Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4A3428]" />
              </a>
            )}
            {project.metricsOrNotes && (
              <span className="font-mono text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                ✓ {project.metricsOrNotes}
              </span>
            )}
          </div>
        </header>

        {/* Technologies Grid */}
        <section className="mb-12">
          <span className="font-mono text-xs text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-3">
            TECHNOLOGY STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#D8C5AF] font-mono text-xs text-[#241A15]"
              >
                <Code2 className="w-3.5 h-3.5 text-[#B58A64]" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Interactive Architecture & System Design Simulator */}
        <section className="mb-14">
          <div className="mb-4">
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-1">
              SYSTEM DESIGN & RUNTIME SIMULATION
            </span>
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              Interactive Architecture & Pipeline Inspector
            </h2>
          </div>
          <ProjectSystemDesign defaultProject={project.slug} />
        </section>

        {/* Problem & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF]">
            <span className="font-mono text-xs text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-2">
              THE CORE PROBLEM
            </span>
            <p className="text-sm text-[#241A15] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF]">
            <span className="font-mono text-xs text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-2">
              WHAT I BUILT & DELIVERED
            </span>
            <p className="text-sm text-[#4A3428] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* My Contribution */}
        <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428]">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            MY SPECIFIC ROLE & CONTRIBUTION
          </span>
          <p className="text-base sm:text-lg text-[#F5F0E8] leading-relaxed">
            {project.contribution}
          </p>
        </section>

        {/* Architectural Breakdown */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#B58A64]" />
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              Architectural Breakdown
            </h2>
          </div>
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF]">
            <ul className="space-y-4">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#4A3428]">
                  <span className="w-5 h-5 rounded-full bg-[#B58A64] text-[#241A15] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engineering Decisions */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-2xl text-[#241A15] mb-6">
            Key Engineering Decisions & Rationale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.decisions.map((dec) => (
              <div
                key={dec.title}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A64]" />
                  <h3 className="font-display font-bold text-base text-[#241A15]">
                    {dec.title}
                  </h3>
                </div>
                <p className="text-xs text-[#4A3428] leading-relaxed">
                  {dec.reasoning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tradeoffs & Learnings */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF]">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-amber-700" />
              <h2 className="font-display font-bold text-xl text-[#241A15]">
                Challenges & Trade-offs
              </h2>
            </div>
            <ul className="space-y-3">
              {project.tradeoffs.map((item, idx) => (
                <li key={idx} className="text-xs text-[#4A3428] leading-relaxed flex items-start gap-2">
                  <span className="text-[#B58A64] font-mono">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF]">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-[#B58A64]" />
              <h2 className="font-display font-bold text-xl text-[#241A15]">
                What I Learned
              </h2>
            </div>
            <ul className="space-y-3">
              {project.learnings.map((item, idx) => (
                <li key={idx} className="text-xs text-[#4A3428] leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-700 font-mono">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Footer for case study */}
        <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-[#241A15]">
              Interested in similar architecture for your team?
            </h3>
            <p className="text-xs text-[#4A3428] mt-1">
              Let&apos;s evaluate your current requirements and engineering constraints.
            </p>
          </div>
          <a
            href={`https://wa.me/2347082367382?text=${encodeURIComponent(`Hi Charles, I read your case study on ${project.title} and would like to discuss a similar architecture.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A3428] hover:bg-[#241A15] text-[#F5F0E8] text-xs font-semibold uppercase tracking-wider font-mono transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Discuss This System on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#D8C5AF]" />
          </a>
        </div>
      </div>
    </article>
  );
}
