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
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Charles Mark",
    "AI Systems Engineer",
    "AI automation for business",
    "n8n automation",
    "custom AI assistant",
    "RAG for company documents",
    "backend development",
    "AI agent development",
    "workflow automation consultant",
    "PostgreSQL pgvector",
    "FastAPI Express backend",
    "business process automation",
    "LangGraph developer",
    "webhook integration",
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
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        description: siteConfig.description,
        sameAs: [
          siteConfig.social.linkedin.url,
          siteConfig.social.github.url,
          siteConfig.social.website.url,
        ],
        knowsAbout: [
          "AI Workflow Automation",
          "Custom AI Agents",
          "RAG on Business Documents",
          "Backend API Development",
          "n8n Integration",
          "PostgreSQL & pgvector",
          "FastAPI & Node.js",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: `${siteConfig.name} | AI Systems Engineer`,
        url: siteConfig.url,
        image: `${siteConfig.url}/charles-mark.png`,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        description: siteConfig.description,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Solutions & Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Workflow Automation",
                description:
                  "Automated pipelines (n8n, Python) capturing leads, parsing PDFs, and syncing data across tools.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom AI Agents & RAG Assistants",
                description:
                  "Private knowledge assistants grounded in company documents with citations and tool integration.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Backend Development & AI Integration",
                description:
                  "Scalable REST APIs (Node/Express, FastAPI) and relational PostgreSQL database architectures.",
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
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
