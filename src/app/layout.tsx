import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MouseSpotlight } from "@/components/MouseSpotlight";
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
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Charles Mark",
    "Applied AI Engineer",
    "Forward Deployed Engineer",
    "Agentic System Design",
    "Cloud Infrastructure DevOps",
    "Backend Systems Engineer",
    "LangGraph State Machines",
    "pgvector Hybrid RAG",
    "Docker Kubernetes Cloud",
    "FastAPI Express Go Backend",
    "FAANG Trained Engineer",
    "charlesmark.tech",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} | AI Systems Engineer`,
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
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema combining Person and ProfessionalService
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/charles-mark.png`,
        jobTitle: siteConfig.title,
        email: siteConfig.contact.email,
        description: siteConfig.description,
        sameAs: [
          siteConfig.social.linkedin.url,
          siteConfig.social.github.url,
          siteConfig.social.website.url,
        ],
        knowsAbout: [
          "Agentic System Design",
          "Applied AI Engineering",
          "Forward Deployed Engineering",
          "Cloud Infrastructure & DevOps",
          "Distributed Backend Systems",
          "Docker & Kubernetes",
          "LangGraph State Machines",
          "PostgreSQL & pgvector",
          "FastAPI & Node.js",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: `${siteConfig.name} | ${siteConfig.title}`,
        url: siteConfig.url,
        image: `${siteConfig.url}/charles-mark.png`,
        email: siteConfig.contact.email,
        description: siteConfig.description,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agentic Systems & Applied AI Engineering",
                description:
                  "Autonomous multi-agent architectures, tool execution, and deterministic evaluation test suites.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Infrastructure & DevOps Automation",
                description:
                  "Containerized Docker/K8s clusters, automated CI/CD pipelines, and cloud observability.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Backend Architecture & Distributed Systems",
                description:
                  "High-throughput APIs (Node/Express, FastAPI, Go) and resilient PostgreSQL/Redis data pipelines.",
              },
            },
          ],
        },
      },
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
        <MouseSpotlight />
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-clip pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
