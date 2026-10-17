import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ServicesSection } from "@/components/ServicesSection";
import { HowIWork } from "@/components/HowIWork";
import { TechnicalCapabilities } from "@/components/TechnicalCapabilities";
import { InsightsSection } from "@/components/InsightsSection";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Animated Hero with continuous typing and system diagram */}
      <Hero />

      {/* 2. Compact trust/technical identity strip */}
      <TrustStrip />

      {/* 3. Featured projects */}
      <FeaturedProjects />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. How I work */}
      <HowIWork />

      {/* 6. Selected technical capabilities */}
      <TechnicalCapabilities />

      {/* 7. Free learning resources and insights */}
      <InsightsSection />

      {/* 8. About Charles */}
      <AboutTeaser />

      {/* 9. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
