import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HowIWork } from "@/components/HowIWork";
import { StartingOffers } from "@/components/StartingOffers";
import { FaqSection } from "@/components/FaqSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { SectionNavigator } from "@/components/SectionNavigator";
import { ThreeBackgroundCanvas } from "@/components/ThreeBackgroundCanvas";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-clip max-w-full">
      {/* Continuous 3D WebGL Constellation Canvas across all sections */}
      <ThreeBackgroundCanvas />

      {/* Top Scroll Progress Line */}
      <ScrollProgressBar />

      {/* Floating Section Pipeline Navigator (Desktop) */}
      <SectionNavigator />

      {/* 1. Hero: Outcome-first headline, profile, dynamic changing letters, 3D WebGL core, CTAs */}
      <div id="hero" className="relative z-10">
        <Hero />
      </div>

      {/* 2. Problems I solve */}
      <SectionReveal className="relative z-10">
        <ProblemsSection />
      </SectionReveal>

      {/* 3. Services written as outcomes */}
      <SectionReveal className="relative z-10">
        <ServicesSection />
      </SectionReveal>

      {/* 4. Case studies */}
      <SectionReveal className="relative z-10">
        <FeaturedProjects />
      </SectionReveal>

      {/* 5. How I work */}
      <SectionReveal className="relative z-10">
        <HowIWork />
      </SectionReveal>

      {/* 6. Starting offers */}
      <SectionReveal className="relative z-10">
        <StartingOffers />
      </SectionReveal>

      {/* 8. FAQ */}
      <SectionReveal className="relative z-10">
        <FaqSection />
      </SectionReveal>

      {/* 9. Direct WhatsApp Conversion Hub */}
      <SectionReveal className="relative z-10">
        <ContactCTA />
      </SectionReveal>
    </div>
  );
}
