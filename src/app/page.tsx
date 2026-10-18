import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HowIWork } from "@/components/HowIWork";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StartingOffers } from "@/components/StartingOffers";
import { FaqSection } from "@/components/FaqSection";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: outcome-first headline for businesses */}
      <Hero />

      {/* 2. Problems I solve */}
      <ProblemsSection />

      {/* 3. Services, written as outcomes with deliverables and timelines */}
      <ServicesSection />

      {/* 4. Case studies: Problem, What changed, Result */}
      <FeaturedProjects />

      {/* 5. How I work: Understand, Design, Build, Test, Improve */}
      <HowIWork />

      {/* 6. Proof: Honesty rules, verified client standards & visible TODO slot */}
      <TestimonialsSection />

      {/* 7. Starting offers: Workflow Audit, Automation Build, Monthly Support */}
      <StartingOffers />

      {/* 8. FAQ: cost, timeline, code ownership, data security, support */}
      <FaqSection />

      {/* 9. Contact: Enquiry form, booking link placeholder & WhatsApp */}
      <ContactCTA />
    </div>
  );
}
