export interface Service {
  id: string;
  name: string;
  headline: string;
  outcome: string;
  whoItsFor: string;
  description: string;
  whatYouGet: string[];
  typicalTimeline: string;
  capabilities: string[];
  ctaText: string;
  icon: string;
  process: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "ai-workflow-automation",
    name: "AI Workflow Automation",
    headline: "Cut manual admin and eliminate repetitive operational bottlenecks.",
    outcome: "Save 10–20+ hours of team manual work every week",
    whoItsFor:
      "Operations leads, founders, and business managers who want to stop copying data between email, forms, spreadsheets, and CRMs.",
    description:
      "I design and deploy automated pipelines that capture inbound leads, parse invoices or PDFs with AI, validate fields, and update your core systems without manual copy-pasting.",
    whatYouGet: [
      "Custom self-hosted or cloud n8n automation pipeline",
      "Automated email, lead form, or document intake parser",
      "Error-handling queues and instant team notifications (Slack, Email, CRM)",
      "Standard operating runbook and 30-day post-launch support",
    ],
    typicalTimeline: "1 to 3 weeks",
    capabilities: [
      "Email and customer inquiry automated triage",
      "Lead capture, validation, and CRM auto-sync",
      "AI-powered document extraction (invoices, receipts, PDF forms)",
      "Self-hosted n8n deployment for complete data privacy",
      "Dead-letter queues and retry mechanisms for zero data loss",
    ],
    ctaText: "Book a Workflow Audit",
    icon: "Cpu",
    process: [
      "Audit your current manual steps and quantify time lost to repetitive tasks",
      "Design data mapping, validation schemas, and failure recovery policies",
      "Build and test workflows with live test payloads and edge cases",
      "Deploy securely and train your team on monitoring and maintenance",
    ],
    deliverables: [
      "Production-ready n8n or custom webhook automation pipeline",
      "Structured data extraction schemas with validation guards",
      "Complete runbook and operational documentation",
    ],
  },
  {
    id: "custom-ai-agents",
    name: "Custom AI Agents & RAG Assistants",
    headline: "An AI assistant that actually knows your business documents.",
    outcome: "Instant, cited answers across your internal knowledge base",
    whoItsFor:
      "Companies with scattered documentation, manuals, customer tickets, or internal specifications that team members or clients spend hours searching.",
    description:
      "I build custom AI assistants and agentic workflows grounded in your private company knowledge. They retrieve verified answers with citations, integrate with permitted tools, and adhere to strict safety boundaries.",
    whatYouGet: [
      "Private vector search index (PostgreSQL pgvector) over your documents",
      "Chat or API interface for team or customer use",
      "Hallucination guards that refuse to speculate without verified source context",
      "Complete code ownership and deployment to your infrastructure",
    ],
    typicalTimeline: "2 to 4 weeks",
    capabilities: [
      "Document indexing & hybrid semantic search (PDF, Markdown, Docs)",
      "Source citations on every synthesized response",
      "LangGraph state machine workflows for multi-step tasks",
      "Tool-calling agents safely connected to internal APIs",
      "Strict data privacy — zero training on your proprietary data",
    ],
    ctaText: "Discuss Your AI Assistant",
    icon: "Bot",
    process: [
      "Catalog your source documents and define permitted tool access",
      "Implement chunking, embedding generation, and vector index in pgvector",
      "Engineered prompt guardrails with citation enforcement and confidence thresholds",
      "Rigorous evaluation against historical company queries before release",
    ],
    deliverables: [
      "Tailored agent service integrated into your team's interface or API",
      "Vector search index with citation references for factual accuracy",
      "Safety guardrail implementation preventing unintended tool executions",
    ],
  },
  {
    id: "backend-and-ai-integration",
    name: "Backend Development & AI Integration",
    headline: "Reliable APIs, databases, and systems behind your product idea.",
    outcome: "A production-grade backend ready to scale with your users",
    whoItsFor:
      "Founders and product teams who have an application concept or frontend, but need rock-solid server architecture, database schemas, and AI endpoints built right.",
    description:
      "I build secure, type-safe backend services in Node/Express or FastAPI/Django, model relational databases in PostgreSQL, and wire up streaming AI capabilities with predictable performance.",
    whatYouGet: [
      "Clean REST API endpoints with complete OpenAPI / Swagger documentation",
      "Normalized PostgreSQL database schema with migration scripts",
      "Streaming LLM endpoints and asynchronous queue handling",
      "Containerized Docker setup ready for simple cloud deployment",
    ],
    typicalTimeline: "3 to 6 weeks",
    capabilities: [
      "Type-safe REST API development (Node/Express, TypeScript, FastAPI)",
      "Relational data modeling, indexing, and transactional integrity",
      "Streaming AI responses (SSE / WebSockets) for responsive interfaces",
      "Role-based access control (RBAC), authentication, and token management",
      "Webhook consumers with signature verification and idempotency",
    ],
    ctaText: "Scope Your Backend",
    icon: "Server",
    process: [
      "Clarify application architecture, database entity relationships, and API contracts",
      "Develop modular backend services with strict validation at controller boundaries",
      "Integrate AI inference endpoints with asynchronous job queues where needed",
      "Write integration tests, optimize queries, and prepare containerized deployment",
    ],
    deliverables: [
      "Well-documented REST API with OpenAPI specifications",
      "Normalized relational database schemas with migrations",
      "Containerized deployment configuration ready for cloud hosting",
    ],
  },
];
