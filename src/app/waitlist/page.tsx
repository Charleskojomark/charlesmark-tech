import type { Metadata } from "next";
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
    <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-[#150F0B] text-[#F5F0E8] flex items-center justify-center py-4 px-4 sm:px-6">
      <div className="w-full max-w-xl">
        <AILearningWaitlistSection />
      </div>
    </div>
  );
}
