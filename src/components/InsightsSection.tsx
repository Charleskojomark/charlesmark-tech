import React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { articles } from "@/data/articles";

export function InsightsSection() {
  const recentArticles = articles.slice(0, 3);

  return (
    <section id="insights" className="py-10 sm:py-16 md:py-20 bg-[#FAF7F2] border-t border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-[#B58A64] tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[#B58A64]" />
              <span>FREE CONTENT & EDUCATIONAL RESOURCES</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PRACTICAL ARCHITECTURE & AUTOMATION GUIDES
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-[#241A15] hover:text-[#4A3428]"
            >
              <span>Explore All Free Guides ({articles.length})</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <span className="font-mono text-[11px] text-[#4A3428]/70">
              100% Free • Open Technical Blueprints • No Paywall
            </span>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {recentArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#F5F0E8] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-lg transition-all duration-300 relative"
            >
              <div>
                {/* Meta Tags */}
                <div className="flex items-center justify-between mb-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                      FREE GUIDE •
                    </span>
                    <span className="text-[#B58A64] font-semibold tracking-wider uppercase">
                      {article.category}
                    </span>
                  </div>
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

                <p className="text-xs text-[#4A3428] leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>

                {/* Key Takeaways preview chip */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D8C5AF]/70 mb-5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#4A3428]/80 font-bold block mb-1">
                      KEY LESSON INSIDE:
                    </span>
                    <div className="flex items-start gap-1.5 text-[11px] text-[#241A15] leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{article.keyTakeaways[0]}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between text-xs font-mono">
                <span className="text-[#4A3428]/60">{article.publishedDate}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#241A15] group-hover:text-[#4A3428] transition-colors"
                >
                  <span>Read Free Guide</span>
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
