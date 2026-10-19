export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Pricing & Scope" | "Delivery & Timeline" | "Security & Code Ownership";
}

export const businessFaqs: FaqItem[] = [
  {
    id: "cost",
    question: "How much does a typical automation or backend system cost?",
    answer:
      "All engagements are strictly scope-based with fixed quotes, ensuring you know your exact investment upfront with zero surprise billing or open-ended hourly meters. Standalone Workflow Audits, turnkey Automation Builds, and custom AI agents are quoted after an initial discovery discussion based on tool complexity, system integration requirements, and business ROI. Once agreed, your quote is fixed with clear deliverables and milestones.",
    category: "Pricing & Scope",
  },
  {
    id: "timeline",
    question: "What is the typical turnaround timeline for a project?",
    answer:
      "A Workflow Audit takes 3–5 business days. A focused automation build (like an intake-to-CRM pipeline or PDF invoice extractor) typically takes 1 to 3 weeks. Larger custom AI agent systems or full backend API implementations take between 3 to 6 weeks. Every project begins with a clear milestone schedule.",
    category: "Delivery & Timeline",
  },
  {
    id: "code-ownership",
    question: "Who owns the code, workflows, and intellectual property?",
    answer:
      "You own 100% of the code, workflow definitions, database schemas, and documentation produced. Everything is deployed directly to your accounts or infrastructure (such as your self-hosted n8n instance, cloud server, or GitHub organization). You will never be locked into proprietary vendor licenses.",
    category: "Security & Code Ownership",
  },
  {
    id: "data-security",
    question: "How do you protect business data privacy and security?",
    answer:
      "Security is engineered into the design from day one. I prioritize self-hosted n8n instances and private database architectures so data never passes through unapproved third parties. For AI models, we use zero-data-retention enterprise API endpoints where inputs are never used for public model training. API secrets are stored strictly in isolated environment variables with HMAC signature verification on all webhooks.",
    category: "Security & Code Ownership",
  },
  {
    id: "support-after-delivery",
    question: "What support is provided after the system goes live?",
    answer:
      "Every custom build includes 30 days of complimentary post-launch support and bug fixes to ensure smooth day-to-day operation. In addition, you receive clear operating documentation and runbooks so your team can understand and manage the system. For teams that want ongoing monitoring, schema drift maintenance, and new feature additions, monthly support retainers are available.",
    category: "Delivery & Timeline",
  },
];
