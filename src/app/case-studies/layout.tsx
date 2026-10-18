import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Case Studies & Production Builds | Charles Mark",
  description:
    "Explore real-world case studies in AI workflow automation, enterprise RAG assistants, and scalable backend services engineered by Charles Mark.",
  keywords: [
    "AI Case Studies",
    "Workflow Automation Case Studies",
    "n8n Automation Architecture",
    "RAG Assistant Case Study",
    "FastAPI Backend Case Study",
    "Charles Mark Case Studies",
  ],
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
  openGraph: {
    title: `Case Studies & Systems Architecture | ${siteConfig.name}`,
    description:
      "Explore real-world case studies in AI workflow automation, enterprise RAG assistants, and scalable backend services engineered by Charles Mark.",
    url: `${siteConfig.url}/case-studies`,
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
    title: `Case Studies & Systems Architecture | ${siteConfig.name}`,
    description:
      "Explore real-world case studies in AI workflow automation, enterprise RAG assistants, and scalable backend services engineered by Charles Mark.",
    images: [siteConfig.ogImage],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
