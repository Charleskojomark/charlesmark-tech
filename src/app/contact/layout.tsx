import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a Call & Project Inquiries | Charles Mark",
  description:
    "Schedule a discovery call, submit an inquiry brief, or chat directly with Charles Mark on WhatsApp (+234 708 236 7382) to discuss AI systems, workflow automation, and backend engineering.",
  keywords: [
    "Contact Charles Mark",
    "AI Automation Consultation",
    "Workflow Audit Booking",
    "Custom AI Agent Scoping",
    "Backend Systems Engineer",
    "WhatsApp AI Solutions",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `Book a Call & Project Inquiries | ${siteConfig.name}`,
    description:
      "Schedule a discovery call, submit an inquiry brief, or chat directly with Charles Mark on WhatsApp (+234 708 236 7382) to discuss AI systems, workflow automation, and backend engineering.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Project Inquiries & Booking`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Book a Call & Project Inquiries | ${siteConfig.name}`,
    description:
      "Schedule a discovery call, submit an inquiry brief, or chat directly with Charles Mark on WhatsApp (+234 708 236 7382) to discuss AI systems, workflow automation, and backend engineering.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
