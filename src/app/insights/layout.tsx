import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Engineering Guides & Educational Insights",
  description:
    "Free practical guides on AI workflow automation, stateful LangGraph agents, webhook security, and backend scalability written by Charles Mark. Zero paywall.",
  keywords: [
    "AI Automation Guides",
    "Webhook Architecture Guide",
    "LangGraph vs Simple Chatbot",
    "Business Process Automation Framework",
    "Free AI Engineering Resources",
    "Charles Mark Insights",
  ],
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: `Free Engineering Guides & Insights | ${siteConfig.name}`,
    description:
      "Free practical guides on AI workflow automation, stateful LangGraph agents, webhook security, and backend scalability written by Charles Mark. Zero paywall.",
    url: `${siteConfig.url}/insights`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Free Engineering Guides`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free Engineering Guides & Insights | ${siteConfig.name}`,
    description:
      "Free practical guides on AI workflow automation, stateful LangGraph agents, webhook security, and backend scalability written by Charles Mark.",
    images: [siteConfig.ogImage],
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
