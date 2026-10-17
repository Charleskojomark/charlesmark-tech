import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { articles } from "@/data/articles";

export function InsightsSection() {
  const recentArticles = articles.slice(0, 3);

  return (
    <section id="insights" className="py-20 bg-[#FAF7F2] border-t border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              FREE EDUCATIONAL RESOURCES & INSIGHTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#241A15] tracking-tight">
              PRACTICAL ARCHITECTURE & AUTOMATION LESSONS
            </h2>
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-mono font-medium text-[#241A15] hover:text-[#4A3428]"
          >
            <span>Read All Articles & Guides ({articles.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#F5F0E8] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-md transition-all duration-300"
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

                <h3 className="font-display font-bold text-xl text-[#241A15] group-hover:text-[#4A3428] transition-colors leading-snug mb-3">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

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
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
