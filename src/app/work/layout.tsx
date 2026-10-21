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
  openGraph: {
    title: `Case Studies & Production Systems | ${siteConfig.name}`,
    description:
      "Explore case studies in AI workflow automation, RAG assistants, and scalable backend services built by Charles Mark.",
    url: `${siteConfig.url}/work`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Case Studies & Systems`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies & Production Systems | ${siteConfig.name}`,
    description:
      "Explore case studies in AI workflow automation, RAG assistants, and scalable backend services built by Charles Mark.",
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
