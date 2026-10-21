import { Hero } from "@/components/Hero";
import { StickyBookCallBar } from "@/components/StickyBookCallBar";
import { TrustStrip } from "@/components/TrustStrip";
import { SolutionsEngine } from "@/components/SolutionsEngine";
import { ServicesSection } from "@/components/ServicesSection";
import { HowIWork } from "@/components/HowIWork";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { ThreeBackgroundCanvas } from "@/components/ThreeBackgroundCanvas";
import { FreeAuditTeaser } from "@/components/FreeAuditTeaser";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-clip max-w-full">
      {/* Continuous 3D WebGL Constellation Canvas across all sections */}
      <ThreeBackgroundCanvas />

      {/* Top Scroll Progress Line */}
      <ScrollProgressBar />


      {/* Persistent Floating "Book a Call" Conversion Bar on Scroll */}
      <StickyBookCallBar />

      {/* 1. Hero: Full-bleed background portrait on mobile & desktop, outcome-first headline, Book a Call + WhatsApp */}
      <div id="hero" className="relative z-10">
        <Hero />
      </div>

      {/* Core Engineering Disciplines Bar */}
      <div className="relative z-10">
        <TrustStrip />
      </div>

      {/* 2. Innovative Solutions Engine: How I solve bottlenecks & improve client businesses */}
      <div className="relative z-10">
        <SolutionsEngine />
      </div>

      {/* 3. Services written as outcomes */}
      <SectionReveal className="relative z-10">
        <ServicesSection />
      </SectionReveal>

      {/* 4. How I work: From Diagnostic Call to Production Deployment */}
      <SectionReveal className="relative z-10">
        <HowIWork />
      </SectionReveal>

      {/* Verified Client & Partner Reviews Continuous Slide */}
      <SectionReveal className="relative z-10">
        <ReviewsSection />
      </SectionReveal>


      {/* 5. Free 15-Minute Async AI & Automation Architecture Audit Teaser */}
      <SectionReveal className="relative z-10">
        <FreeAuditTeaser />
      </SectionReveal>

      {/* 6. FAQ */}
      <SectionReveal className="relative z-10">
        <FaqSection />
      </SectionReveal>

      {/* 7. Direct Conversion Hub: Book on Cal.com / WhatsApp */}
      <SectionReveal className="relative z-10">
        <ContactCTA />
      </SectionReveal>
    </div>
  );
}
