export interface OfferItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  priceNote: string; // e.g. "From [TODO: price]"
  turnaround: string;
  bestFor: string;
  includes: string[];
  ctaText: string;
  popular?: boolean;
}

export const startingOffers: OfferItem[] = [
  {
    id: "workflow-audit",
    name: "Workflow Audit",
    badge: "Diagnostic & Plan",
    tagline: "Uncover where your business loses manual hours and get an actionable automation blueprint.",
    priceNote: "Custom Quote / Scope-based",
    turnaround: "3–5 business days",
    bestFor: "Teams that know they have manual bottlenecks but want a clear roadmap and ROI estimate before committing to a full build.",
    includes: [
      "Deep dive into 1–2 of your highest-friction repetitive processes",
      "Process flow diagram & input/output contract mapping",
      "Tool feasibility analysis (n8n vs custom API vs off-the-shelf)",
      "Prioritized implementation roadmap with estimated hours saved",
      "Credited toward your build if we proceed together",
    ],
    ctaText: "Book an Audit",
  },
  {
    id: "automation-build",
    name: "Automation Build",
    badge: "Turnkey System",
    tagline: "End-to-end implementation of an AI workflow, custom agent, or backend integration.",
    priceNote: "Custom Quote / Scope-based",
    turnaround: "2–4 weeks",
    bestFor: "Businesses ready to replace manual repetitive workflows with a resilient, production-ready system.",
    popular: true,
    includes: [
      "Custom workflow pipeline (n8n) or custom AI assistant/agent (FastAPI/Node)",
      "Strict data schema validation (Zod/Pydantic) to prevent malformed data",
      "Integration with your tools (Slack, Email, CRM, PostgreSQL, Webhooks)",
      "Dead-letter queues and error recovery alerting",
      "Full code & runbook delivery + 30 days of post-launch warranty",
    ],
    ctaText: "Start a Build",
  },
  {
    id: "monthly-support",
    name: "Monthly Support & Evolution",
    badge: "Ongoing Partnership",
    tagline: "Continuous monitoring, schema updates, optimization, and new workflow expansion.",
    priceNote: "Scope-based Monthly Retainer",
    turnaround: "Ongoing / monthly retainer",
    bestFor: "Growing businesses that want an AI systems engineer on call to maintain, expand, and monitor their operational pipelines.",
    includes: [
      "Proactive error log monitoring and dead-letter queue resolution",
      "Model prompt tuning and vector database updates as documentation changes",
      "Upstream API schema drift maintenance and webhook renewals",
      "Dedicated priority communication (WhatsApp / direct Slack channel)",
      "Monthly allocation for new workflow nodes and feature upgrades",
    ],
    ctaText: "Discuss Monthly Support",
  },
];
