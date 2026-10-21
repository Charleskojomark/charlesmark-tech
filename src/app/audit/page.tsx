import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FreeAuditSection } from "@/components/FreeAuditSection";

export const metadata: Metadata = {
  title: "Free 15-Minute Async AI & Architecture Audit | Charles Mark",
  description:
    "Submit your business bottleneck and receive a private, custom 1-page architecture teardown or 10-minute video mapping the exact tools, stack, and cost breakdown to solve it. 100% free, zero obligation.",
  alternates: {
    canonical: "https://charlesmark.tech/audit",
  },
  openGraph: {
    title: "Free 15-Minute Async AI & Architecture Audit | Charles Mark",
    description:
      "Submit your business bottleneck and receive a private, custom 1-page architecture teardown or 10-minute video mapping the exact tools, stack, and cost breakdown to solve it.",
    url: "https://charlesmark.tech/audit",
    siteName: "Charles Mark Platform",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://charlesmark.tech/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free 15-Minute AI & Architecture Audit - Charles Mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 15-Minute Async AI & Architecture Audit | Charles Mark",
    description:
      "Submit your business bottleneck and receive a custom 1-page architecture teardown and cost breakdown. 100% free.",
    images: ["https://charlesmark.tech/opengraph-image"],
  },
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#1C1410] text-[#F5F0E8] pt-24 pb-16">
      {/* Return to Home Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#241A15] border border-[#B58A64]/40 hover:border-[#B58A64] text-[#D8C5AF] hover:text-[#F5F0E8] font-mono text-xs transition-colors shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
      </div>

      {/* Complete Free Audit Breakdown */}
      <main>
        <FreeAuditSection />
      </main>
    </div>
  );
}
