// ==============================================================================
// HONESTY RULES COMPLIANCE:
// Existing testimonials are anonymous with specific numbers.
// Per strict honesty rules, SHOW_UNVERIFIED_TESTIMONIALS is set to false.
// [TODO: Add verified client testimonials with real names, roles, companies, and explicit permission]
// ==============================================================================

export const SHOW_UNVERIFIED_TESTIMONIALS = false;

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
  tag: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  // [TODO: Add first verified client testimonial]
  // {
  //   id: "verified-client-1",
  //   quote: "[TODO: Client quote about workflow automation or AI systems]",
  //   author: "[TODO: Real Client Full Name]",
  //   role: "[TODO: Client Title/Role]",
  //   company: "[TODO: Company Name]",
  //   outcome: "[TODO: Verified business outcome, e.g. 'Reduced document intake time by 70%']",
  //   tag: "Workflow Automation",
  //   verified: true,
  // },
];

// Archived unverified samples (hidden from production UI):
export const unverifiedTestimonialsArchive = [
  {
    id: "sample-automation",
    quote:
      "Charles re-architected our intake workflow in n8n and Python with full error logging and zero data loss.",
    author: "Engineering Lead",
    role: "Head of Operations",
    company: "SaaS Workflow Partner",
    outcome: "Eliminated manual data reconciliation errors",
    tag: "Workflow Automation",
    verified: false,
  },
];
