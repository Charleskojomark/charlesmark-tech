import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { articles } from "@/data/articles";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#4A3428] hover:text-[#241A15] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 border-b border-[#D8C5AF]/70 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono mb-4">
            <span className="text-[#B58A64] font-semibold tracking-wider uppercase bg-[#FAF7F2] border border-[#D8C5AF] px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-[#D8C5AF]">•</span>
            <div className="flex items-center gap-1.5 text-[#4A3428]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </div>
            <span className="text-[#D8C5AF]">•</span>
            <span className="text-[#4A3428]/80">{article.publishedDate}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-[#4A3428] leading-relaxed">
            {article.summary}
          </p>
        </header>

        {/* Key Takeaways Box */}
        <section className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#B58A64]" />
            <span className="font-mono text-xs font-bold text-[#241A15] uppercase tracking-wider">
              KEY ARCHITECTURAL TAKEAWAYS
            </span>
          </div>
          <ul className="space-y-3">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4A3428]">
                <span className="font-mono text-[#B58A64] font-bold">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Article Body */}
        <div className="space-y-6 text-base sm:text-lg text-[#241A15] leading-relaxed font-sans mb-16 border-b border-[#D8C5AF]/70 pb-16">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-[#38261D] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Bio Box */}
        <section className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-xl flex-shrink-0">
            CM
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display font-bold text-lg text-[#241A15]">
                {siteConfig.author.name}
              </span>
              <span className="font-mono text-xs text-[#B58A64] border border-[#B58A64]/30 px-2 py-0.5 rounded">
                Author
              </span>
            </div>
            <p className="text-xs text-[#4A3428] leading-relaxed">
              {siteConfig.title} specializing in workflow automation, stateful agentic systems, and reliable backend engineering.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-xl text-[#241A15] mb-6">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#4A3428] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#B58A64] uppercase font-semibold block mb-2">
                    {rel.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-[#241A15] group-hover:text-[#4A3428] transition-colors leading-snug">
                    {rel.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#4A3428]">
                  <span>{rel.readingTime}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A64] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
