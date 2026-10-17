"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Clock, Search } from "lucide-react";
import { articles } from "@/data/articles";

const TOPICS = ["All", "Automation", "AI Systems", "Backend", "Architecture"];

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((article) => {
    const matchesTopic =
      selectedTopic === "All" || article.category === selectedTopic;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
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
            FREE ENGINEERING CONTENT & RESOURCES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            INSIGHTS & ARCHITECTURE GUIDES
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            Practical, evidence-grounded articles on building resilient automation workflows, designing stateful AI agents, integrating LLM APIs, and architecting robust backend systems.
          </p>
        </div>

        {/* Search & Topic Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-[#D8C5AF]/70 pb-6">
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                  selectedTopic === topic
                    ? "bg-[#241A15] text-[#F5F0E8] shadow-sm"
                    : "bg-[#FAF7F2] border border-[#D8C5AF] text-[#4A3428] hover:bg-[#D8C5AF]/40"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#4A3428]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] text-xs font-mono text-[#241A15] placeholder:text-[#4A3428]/50 focus:outline-none focus:border-[#4A3428]"
            />
          </div>
        </div>

        {/* Articles List */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
            <p className="text-sm font-mono text-[#4A3428]">
              No articles match the selected query.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className="text-[#B58A64] font-semibold tracking-wider uppercase">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#4A3428]/70">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-xl text-[#241A15] group-hover:text-[#4A3428] transition-colors leading-snug mb-3">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#4A3428] leading-relaxed line-clamp-3 mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#4A3428]/60">{article.publishedDate}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#241A15] group-hover:text-[#4A3428] transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
