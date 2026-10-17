import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Let's Talk & Direct WhatsApp Contact",
  description:
    "Skip the long forms. Chat directly with Charles Mark on WhatsApp (+234 708 236 7382) or email to discuss AI systems, workflow automation, and backend engineering.",
  keywords: [
    "Contact Charles Mark",
    "Hire AI Systems Engineer",
    "WhatsApp AI Developer",
    "Hire Backend Engineer",
    "Charles Mark Phone",
    "AI Automation Consultation",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `Let's Talk & WhatsApp Contact | ${siteConfig.name}`,
    description:
      "Skip the long forms. Chat directly with Charles Mark on WhatsApp (+234 708 236 7382) to discuss AI systems, workflow automation, and backend engineering.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Contact & WhatsApp Chat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Let's Talk & WhatsApp Contact | ${siteConfig.name}`,
    description:
      "Chat directly with Charles Mark on WhatsApp (+234 708 236 7382) to discuss AI systems, workflow automation, and backend engineering.",
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
