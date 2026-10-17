import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Charles Mark",
    "AI Systems Engineer",
    "Backend Engineer",
    "Workflow Automation Engineer",
    "Agentic AI",
    "n8n Automation",
    "LangGraph Developer",
    "FastAPI",
    "Express.js",
    "Django Developer",
    "PostgreSQL",
    "pgvector",
    "RAG Systems",
    "Event-Driven Architecture",
    "Webhook Integration",
    "Clinical Voice AI",
    "Autonomous AI Agents",
    "AI Automation Consultant",
    "Full-Stack AI Engineer",
    "Remote Backend Engineer",
    "charlesmark.tech",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} - Engineering Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@markcharleskojo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/charles-mark.png`,
    jobTitle: siteConfig.tagline,
    telephone: siteConfig.contact.phone,
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.linkedin.url,
      siteConfig.social.github.url,
      siteConfig.social.website.url,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic Systems",
      "LangGraph State Machines",
      "Backend Architecture",
      "Workflow Automation",
      "n8n Integration",
      "REST APIs & Webhooks",
      "PostgreSQL & Vector Databases",
      "FastAPI & Node.js",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F0E8] text-[#241A15] antialiased selection:bg-[#B58A64] selection:text-[#F5F0E8]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
