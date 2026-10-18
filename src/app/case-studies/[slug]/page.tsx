import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  ShieldAlert,
  Lightbulb,
  AlertTriangle,
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
      canonical: `${siteConfig.url}/case-studies/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.tagline || project.solution,
      url: `${siteConfig.url}/case-studies/${project.slug}`,
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
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#4A3428] hover:text-[#241A15] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-12 border-b border-[#D8C5AF]/70 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold text-[#B58A64] bg-[#FAF7F2] border border-[#D8C5AF] px-3 py-1 rounded-full uppercase">
              {project.category}
            </span>
            <span
              className={`font-mono text-xs px-3 py-1 rounded-full border ${
                project.slug === "klinik-voice-assistant"
                  ? "bg-amber-50 text-amber-900 border-amber-300 font-semibold"
                  : "bg-[#E8DDCF]/50 text-[#4A3428] border-[#D8C5AF]"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#241A15] tracking-tight mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="font-display text-lg sm:text-xl text-[#4A3428] leading-relaxed max-w-3xl mb-6">
            {project.tagline}
          </p>

          {/* Prototype / Reference Build Disclaimer */}
          {project.honestyNote && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 flex items-start gap-2.5 mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>{project.honestyNote}</span>
            </div>
          )}

          {/* Footnote metadata & GitHub link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D8C5AF]/60 text-xs font-mono text-[#4A3428]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#4A3428]/60">Stack:</span>
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded bg-[#FAF7F2] border border-[#D8C5AF] text-[#241A15]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#000000] hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </header>

        {/* 3 Business Pillars: Problem, What Changed, Result */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] space-y-2">
            <span className="font-mono text-xs font-bold text-[#4A3428]/80 uppercase tracking-widest block">
              1. THE BUSINESS PROBLEM
            </span>
            <p className="text-sm text-[#241A15] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#B58A64]/50 space-y-2">
            <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-widest block">
              2. WHAT CHANGED
            </span>
            <p className="text-sm text-[#241A15] leading-relaxed">
              {project.whatChanged}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-emerald-600/40 space-y-2">
            <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-widest block">
              3. THE OUTCOME / RESULT
            </span>
            <p className="text-sm text-[#241A15] font-medium leading-relaxed">
              {project.result}
            </p>
          </div>
        </section>

        {/* Interactive Architecture Flow Simulator */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-1">
              SYSTEM ARCHITECTURE & FLOW SIMULATOR
            </span>
            <h2 className="font-display font-bold text-2xl text-[#241A15]">
              Interactive Node Pipeline
            </h2>
          </div>
          <ProjectSystemDesign defaultProject={project.slug} />
        </section>

        {/* Architecture Details */}
        <section className="mb-16 p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
          <h2 className="font-display font-bold text-2xl text-[#241A15] mb-6">
            Key Architecture Components
          </h2>
          <ul className="space-y-4">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#38261D] leading-relaxed">
                <div className="w-5 h-5 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Decisions */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl text-[#241A15] mb-6">
            Engineering Decisions & Business Rationale
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

        {/* High-Converting CTA Footer */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#241A15] text-[#F5F0E8] border border-[#4A3428] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Interested in a similar build for your operations?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8C5AF]">
              Book a free workflow review or message Charles directly on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <Link
              href={`/contact?project=${project.slug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B58A64] hover:bg-[#D8C5AF] text-[#241A15] font-display font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Book Workflow Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                `Hi Charles, I read your case study on ${project.title} and would like to discuss a similar system.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#38261D] border border-[#4A3428] text-[#F5F0E8] font-mono text-xs transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
