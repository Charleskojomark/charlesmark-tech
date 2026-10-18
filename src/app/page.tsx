import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HowIWork } from "@/components/HowIWork";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StartingOffers } from "@/components/StartingOffers";
import { FaqSection } from "@/components/FaqSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionConnector } from "@/components/SectionConnector";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { SectionNavigator } from "@/components/SectionNavigator";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative">
      {/* 0. Top Scroll Progress Line */}
      <ScrollProgressBar />

      {/* Floating Section Pipeline Navigator (Desktop) */}
      <SectionNavigator />

      {/* 1. Hero: Outcome-first headline, profile, dynamic changing letters, CTAs */}
      <div id="hero">
        <Hero />
      </div>

      {/* Pipeline Connector: Stage 01 */}
      <SectionConnector
        stage="STAGE 01"
        label="PROBLEM DIAGNOSTIC"
        sublabel="Isolating manual bottlenecks"
        icon="workflow"
      />

      {/* 2. Problems I solve */}
      <SectionReveal>
        <ProblemsSection />
      </SectionReveal>

      {/* Pipeline Connector: Stage 02 */}
      <SectionConnector
        stage="STAGE 02"
        label="TAILORED ARCHITECTURE"
        sublabel="Core engineering disciplines"
        icon="cpu"
      />

      {/* 3. Services written as outcomes */}
      <SectionReveal>
        <ServicesSection />
      </SectionReveal>

      {/* Pipeline Connector: Stage 03 */}
      <SectionConnector
        stage="STAGE 03"
        label="PROVEN IMPLEMENTATIONS"
        sublabel="Real-world reference builds"
        icon="layers"
      />

      {/* 4. Case studies */}
      <SectionReveal>
        <FeaturedProjects />
      </SectionReveal>

      {/* Pipeline Connector: Stage 04 */}
      <SectionConnector
        stage="STAGE 04"
        label="ENGINEERING METHODOLOGY"
        sublabel="From deconstruction to deployment"
        icon="workflow"
      />

      {/* 5. How I work */}
      <SectionReveal>
        <HowIWork />
      </SectionReveal>

      {/* Pipeline Connector: Stage 05 */}
      <SectionConnector
        stage="STAGE 05"
        label="CLIENT STANDARDS & IP"
        sublabel="Data security & 100% code ownership"
        icon="shield"
      />

      {/* 6. Honest proof & client standards */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* Pipeline Connector: Stage 06 */}
      <SectionConnector
        stage="STAGE 06"
        label="FIXED-SCOPE PACKAGES"
        sublabel="Clear deliverables & fixed quotes"
        icon="sparkles"
      />

      {/* 7. Starting offers */}
      <SectionReveal>
        <StartingOffers />
      </SectionReveal>

      {/* Pipeline Connector: Stage 07 */}
      <SectionConnector
        stage="STAGE 07"
        label="COMMERCIAL & TECHNICAL CLARITY"
        sublabel="Answers to common buyer questions"
        icon="check"
      />

      {/* 8. FAQ */}
      <SectionReveal>
        <FaqSection />
      </SectionReveal>

      {/* Pipeline Connector: Stage 08 */}
      <SectionConnector
        stage="STAGE 08"
        label="DIRECT ENGAGEMENT"
        sublabel="Skip sales queues via WhatsApp"
        icon="sparkles"
      />

      {/* 9. Direct WhatsApp Conversion Hub */}
      <SectionReveal>
        <ContactCTA />
      </SectionReveal>
    </div>
  );
}
