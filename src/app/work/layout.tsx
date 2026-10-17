import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Engineering Work & Case Studies",
  description:
    "Explore production-grade AI systems, real-time voice triage pipelines, workflow automation engines, and scalable backend services built by Charles Mark.",
  keywords: [
    "AI Systems Portfolio",
    "Backend Engineering Case Studies",
    "n8n Workflow Automation",
    "LangGraph Clinical Voice AI",
    "Event-Driven Architectures",
    "Charles Mark Work",
  ],
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: `Engineering Work & Case Studies | ${siteConfig.name}`,
    description:
      "Explore production-grade AI systems, real-time voice triage pipelines, workflow automation engines, and scalable backend services built by Charles Mark.",
    url: `${siteConfig.url}/work`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Engineering Case Studies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Engineering Work & Case Studies | ${siteConfig.name}`,
    description:
      "Explore production-grade AI systems, real-time voice triage pipelines, workflow automation engines, and scalable backend services built by Charles Mark.",
    images: [siteConfig.ogImage],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
