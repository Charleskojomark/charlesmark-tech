export interface CapabilityItem {
  name: string;
  level: "Proficient & Implemented" | "Active Hands-On Experience" | "Active Learning & Labs";
  note: string;
}

export interface CapabilityGroup {
  id: string;
  title: string;
  description: string;
  items: CapabilityItem[];
}

export const capabilities: CapabilityGroup[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Developing robust, scalable server-side systems, API contracts, and business logic.",
    items: [
      {
        name: "JavaScript / TypeScript",
        level: "Proficient & Implemented",
        note: "Primary languages for building type-safe backend architectures and APIs.",
      },
      {
        name: "Node.js & Express.js",
        level: "Proficient & Implemented",
        note: "Extensive experience building RESTful services, middleware, and async handlers.",
      },
      {
        name: "REST APIs & Architecture",
        level: "Proficient & Implemented",
        note: "Design, versioning, status codes, payload validation, and documentation standards.",
      },
      {
        name: "Django & Django REST Framework",
        level: "Active Hands-On Experience",
        note: "Python-based web services, ORM modeling, serializer validation, and viewsets.",
      },
      {
        name: "NestJS",
        level: "Active Hands-On Experience",
        note: "Modular, decorator-driven architecture with TypeScript dependency injection.",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Persistence",
    description: "Relational database schema modeling, connection pooling, and vector indexing.",
    items: [
      {
        name: "PostgreSQL",
        level: "Proficient & Implemented",
        note: "Schema normalization, indexes, foreign key integrity, and pgvector extension.",
      },
      {
        name: "Database Modeling & Integrity",
        level: "Proficient & Implemented",
        note: "Entity relationships, transactional boundaries, migrations, and query hygiene.",
      },
      {
        name: "Redis",
        level: "Active Hands-On Experience",
        note: "Caching layer, token session validation, and distributed rate limiting.",
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Workflow Automation",
    description: "Connecting intelligent model reasoning with actionable tools, data, and workflows.",
    items: [
      {
        name: "n8n Workflow Automation",
        level: "Proficient & Implemented",
        note: "Complex event-driven workflows, multi-step webhooks, data transformation nodes.",
      },
      {
        name: "LLM API Integration",
        level: "Proficient & Implemented",
        note: "Function calling, streaming responses, structured JSON extraction with schema guards.",
      },
      {
        name: "AI Agent Workflows (LangGraph)",
        level: "Active Hands-On Experience",
        note: "State machine orchestration, conditional branching, human-in-the-loop patterns.",
      },
      {
        name: "RAG Systems & Embeddings",
        level: "Active Hands-On Experience",
        note: "Document chunking strategies, semantic similarity search, and cited synthesis.",
      },
      {
        name: "Tool & External API Connectors",
        level: "Proficient & Implemented",
        note: "Secure token management, OAuth integrations, and automated payload mapping.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    description: "Packaging, testing, and deploying systems with consistency across environments.",
    items: [
      {
        name: "Git & GitHub Collaboration",
        level: "Proficient & Implemented",
        note: "Version control hygiene, branching strategies, and pull-request code reviews.",
      },
      {
        name: "Docker & Containerization",
        level: "Active Hands-On Experience",
        note: "Multi-stage Dockerfiles, image optimization, and local compose environments.",
      },
      {
        name: "CI/CD Fundamentals",
        level: "Active Hands-On Experience",
        note: "Automated linting, unit test runners, and build checks via GitHub Actions.",
      },
      {
        name: "Terraform (Labs)",
        level: "Active Learning & Labs",
        note: "Infrastructure-as-code principles, modular resource declarations, and cloud lab tests.",
      },
      {
        name: "Cloud Hosting & Deployment",
        level: "Active Hands-On Experience",
        note: "Deployment to Vercel, Railway, Render, VPS environments, and DNS management.",
      },
    ],
  },
];
