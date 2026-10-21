import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { AILearningWaitlistSection } from "@/components/AILearningWaitlistSection";

export const metadata: Metadata = {
  title: "Join the Waitlist | 3D Story-Based Virtual AI Learning",
  description:
    "Master artificial intelligence in an interactive 3D virtual world. Solve narrative engineering quests, explore neural spaces, and build intelligent systems. Join the closed beta waitlist today.",
  openGraph: {
    title: "Join the Waitlist | 3D Story-Based Virtual AI Learning",
    description:
      "Master artificial intelligence in an interactive 3D virtual world. Solve narrative engineering quests, explore neural spaces, and build intelligent systems.",
    url: "https://www.charlesmark.tech/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#150F0B] text-[#F5F0E8] pt-24 pb-16">
      {/* Top Breadcrumb / Return to Site Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#241A15] border border-[#B58A64]/40 hover:border-[#B58A64] text-[#D8C5AF] hover:text-[#F5F0E8] font-mono text-xs transition-colors shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Charles Mark Engineering</span>
        </Link>
      </div>

      {/* Main Waitlist Experience */}
      <main>
        <AILearningWaitlistSection />
      </main>
    </div>
  );
}
