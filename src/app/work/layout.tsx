import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Case Studies & Production Systems | Charles Mark",
  description:
    "Explore case studies in AI workflow automation, RAG assistants, and scalable backend services built by Charles Mark.",
  keywords: [
    "AI Case Studies",
    "Workflow Automation Builds",
    "n8n Automation Systems",
    "Backend Systems Architecture",
    "Charles Mark Case Studies",
  ],
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
