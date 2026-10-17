export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
  tag: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "automation-client",
    quote:
      "Charles re-architected our intake workflow in n8n and Python. What used to take our ops team 14 hours a week across HubSpot and Postgres now runs autonomously with full error logging and zero data loss.",
    author: "Engineering Lead",
    role: "Head of Operations & Platform",
    company: "SaaS Workflow Partner",
    outcome: "Saved 14+ hrs/wk & eliminated data reconciliation errors",
    tag: "Workflow Automation",
  },
  {
    id: "ai-agent-client",
    quote:
      "Unlike developers who just wire together basic OpenAI calls that break on edge cases, Charles brought real backend discipline with LangGraph and strict Zod validation. The agent handles ambiguous inputs gracefully.",
    author: "Technical Founder",
    role: "Founder & CTO",
    company: "AI Intelligence Studio",
    outcome: "99.4% reliable execution on structured extraction",
    tag: "Autonomous Agent System",
  },
  {
    id: "backend-colleague",
    quote:
      "Working with Charles on API infrastructure was seamless. He pays attention to idempotency, database indexing, and edge-case error propagation before touching any frontend code. A rare engineer who understands both modern AI and rock-solid backends.",
    author: "Senior Software Engineer",
    role: "Lead Backend Architect",
    company: "Distributed Systems Team",
    outcome: "Sub-120ms p95 latency on high-throughput webhook receiver",
    tag: "Backend & Systems",
  },
];
