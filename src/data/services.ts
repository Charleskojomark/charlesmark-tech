export interface Service {
  id: string;
  name: string;
  headline: string;
  description: string;
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
    headline: "STOP REPEATING TASKS AI CAN HELP AUTOMATE.",
    description:
      "I build intelligent workflows that help businesses reduce repetitive work, organize information, and streamline everyday processes.",
    capabilities: [
      "Email and customer inquiry automation",
      "Lead capture and follow-up workflows",
      "AI-powered document processing & PDF data extraction",
      "Business process automation with self-hosted or cloud n8n",
      "API-connected workflows and multi-channel notifications (Slack, Email, CRM)",
    ],
    ctaText: "Let's Identify a Workflow You Can Automate",
    icon: "Cpu",
    process: [
      "Audit current repetitive manual workflows and identify clear automation bottlenecks",
      "Design webhook architectures, payload schemas, and conditional routing logic",
      "Implement resilient execution nodes with fallback logic and retry queues",
      "Deploy, monitor execution logs, and refine parsing accuracy",
    ],
    deliverables: [
      "Production-ready n8n or custom webhook automation pipeline",
      "Structured data extraction schemas with validation guards",
      "Complete runbook and documentation for maintenance",
    ],
  },
  {
    id: "custom-ai-agents",
    name: "Custom AI Agents & Assistants",
    headline: "TURN AI INTO A MORE USEFUL ASSISTANT.",
    description:
      "I build AI-powered assistants and agent workflows tailored to specific tasks, information sources, and business needs.",
    capabilities: [
      "Custom task-oriented AI assistants",
      "Automated research, summarization, and reporting workflows",
      "Knowledge assistants grounded in private business documents (RAG)",
      "AI agents safely connected to permitted tools and external APIs",
      "Structured AI workflows with error handling, guardrails, and validation",
    ],
    ctaText: "Tell Me What You Want Your AI Assistant to Do",
    icon: "Bot",
    process: [
      "Define agent scope, tool permissions, and strict output format specifications",
      "Index relevant business knowledge base with clean chunking and embeddings",
      "Implement multi-step reasoning with state machines or LangGraph orchestration",
      "Add hallucination checks, human-in-the-loop review triggers, and rate limits",
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
    headline: "HAVE AN IDEA? LET'S BUILD THE SYSTEM BEHIND IT.",
    description:
      "I develop backend services and integrate AI capabilities into applications, helping turn product ideas into working software.",
    capabilities: [
      "REST API development and secure third-party integration",
      "Backend services, data modeling, and PostgreSQL database design",
      "AI model and LLM API integration with streaming responses",
      "Connecting applications, internal tools, and business systems",
      "Application logic, data processing, authentication, and role management",
    ],
    ctaText: "Let's Discuss What You're Building",
    icon: "Server",
    process: [
      "Clarify application architecture, database entity relationships, and API contracts",
      "Develop modular backend services using Node.js/Express, Python/FastAPI, or Django",
      "Integrate AI inference endpoints with asynchronous job queues where needed",
      "Write unit/integration tests and package services into Docker containers",
    ],
    deliverables: [
      "Well-documented REST API with OpenAPI/Swagger specifications",
      "Normalized relational database schemas with migrations",
      "Containerized deployment configuration ready for cloud hosting",
    ],
  },
];
