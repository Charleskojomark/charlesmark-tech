import type { Metadata } from "next";
import { AILearningWaitlistSection } from "@/components/AILearningWaitlistSection";

export const metadata: Metadata = {
  title: "Join the Waitlist | 3D Story-Based Virtual AI Learning",
  description:
    "Master artificial intelligence in an interactive 3D virtual world. Solve narrative engineering quests, explore neural spaces, and build intelligent systems. Join the closed beta waitlist today.",
  alternates: {
    canonical: "https://charlesmark.tech/waitlist",
  },
  openGraph: {
    title: "Join the Waitlist | 3D Story-Based Virtual AI Learning",
    description:
      "Master artificial intelligence in an interactive 3D virtual world. Solve narrative engineering quests, explore neural spaces, and build intelligent systems. Reserve your closed beta spot.",
    url: "https://charlesmark.tech/waitlist",
    siteName: "Charles Mark | 3D Virtual AI Learning",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://charlesmark.tech/waitlist/opengraph-image",
        width: 1200,
        height: 630,
        alt: "3D Story-Based Virtual AI Learning Waitlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Waitlist | 3D Story-Based Virtual AI Learning",
    description:
      "Master artificial intelligence in an interactive 3D virtual world. Solve narrative engineering quests and build intelligent systems.",
    images: ["https://charlesmark.tech/waitlist/opengraph-image"],
  },
};

export default function WaitlistPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] bg-[#150F0B] text-[#F5F0E8] flex items-center justify-center py-4 sm:py-8 px-3.5 sm:px-6">
      <div className="w-full max-w-xl sm:max-w-2xl">
        <AILearningWaitlistSection />
      </div>
    </div>
  );
}
