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
    id: "agentic-systems",
    name: "Agentic Systems & Applied AI Engineering",
    headline: "Autonomous multi-agent architectures built for deterministic enterprise execution.",
    outcome: "Fault-tolerant agentic workflows with strict schema evals and zero speculation",
    whoItsFor:
      "Engineering leaders, CTOs, and product teams needing autonomous AI capabilities that go far beyond single-prompt wrappers into production-grade multi-agent execution.",
    description:
      "I architect and deploy state-machine agentic workflows using LangGraph and custom tool-calling agents. Every agent operates under deterministic evaluation harnesses, Pydantic schema contracts, and human-in-the-loop safety gates.",
    whatYouGet: [
      "Multi-agent supervisor architecture with isolated tool-calling execution",
      "Deterministic evaluation test suites checking precision and hallucination",
      "Hybrid RAG pipeline (pgvector + BM25 + cross-encoder reranking)",
      "Production deployment with state persistence and audit telemetry",
    ],
    typicalTimeline: "2 to 4 weeks",
    capabilities: [
      "LangGraph state machine orchestration and cyclic branching",
      "Function-calling and tool invocation with schema-level guardrails",
      "Hybrid vector retrieval (pgvector, Pinecone, Cohere reranking)",
      "Automated evaluation suites measuring hallucination and task completion",
      "Forward deployed integration directly into your existing codebase",
    ],
    ctaText: "Discuss Agentic Architecture",
    icon: "Cpu",
    process: [
      "Define agentic roles, permitted tool boundaries, and failure fallback modes",
      "Engineer state machines with deterministic validation guards at every transition",
      "Run evaluation harnesses against hundreds of production edge cases",
      "Deploy with state persistence, OpenTelemetry tracing, and audit logs",
    ],
    deliverables: [
      "Production-ready multi-agent service with state management",
      "Automated evaluation suite and test harness",
      "Complete architectural specification and runbook",
    ],
  },
  {
    id: "cloud-infrastructure-devops",
    name: "Cloud Infrastructure & DevOps Automation",
    headline: "Hardened containerized infrastructure and automated CI/CD pipelines.",
    outcome: "Zero-downtime deployments, reproducible cloud clusters, and deep observability",
    whoItsFor:
      "Founders and technical teams scaling beyond local prototypes who need production cloud infrastructure, container orchestration, and reliable CI/CD.",
    description:
      "I build robust, reproducible cloud infrastructure across AWS and GCP. From multi-stage Docker containerization and Kubernetes deployments to GitHub Actions CI/CD pipelines and OpenTelemetry monitoring, your systems stay resilient under load.",
    whatYouGet: [
      "Optimized multi-stage Dockerfiles and container configurations",
      "Automated GitHub Actions CI/CD pipelines for linting, testing, and zero-downtime deploys",
      "Cloud platform architecture (AWS ECS/EKS, GCP Cloud Run, VPS)",
      "Production observability with Prometheus, Grafana, and structured logging",
    ],
    typicalTimeline: "2 to 4 weeks",
    capabilities: [
      "Docker containerization & image size optimization",
      "Automated CI/CD workflows with automated rollback triggers",
      "Cloud security, IAM role isolation, and secret management",
      "Infrastructure as Code (Terraform) and environment parity",
      "Health probes, self-healing containers, and latency monitoring",
    ],
    ctaText: "Scope Cloud Infrastructure",
    icon: "Cloud",
    process: [
      "Audit existing deployment bottlenecks, environment drift, and security posture",
      "Containerize services with multi-stage builds and minimal attack surfaces",
      "Implement automated GitHub Actions CI/CD with automated testing and staging deploys",
      "Set up distributed tracing, health metrics, and automated alert channels",
    ],
    deliverables: [
      "Production-ready container configuration and compose files",
      "Complete CI/CD deployment pipelines with rollback capabilities",
      "Cloud architecture runbook with incident response guidelines",
    ],
  },
  {
    id: "backend-distributed-systems",
    name: "Backend Architecture & Distributed Systems",
    headline: "High-throughput APIs, relational data modeling, and asynchronous event streams.",
    outcome: "A resilient backend engine engineered for 99.99% uptime and low latency",
    whoItsFor:
      "Founders and engineering teams needing rock-solid server architecture, clean REST/gRPC API contracts, and high-concurrency event handling.",
    description:
      "I develop type-safe, modular backend architectures in Node/TypeScript, Python/FastAPI, and Go. Using PostgreSQL with transactional ACID integrity, Redis caching, and Kafka/RabbitMQ message brokers, your backend handles enterprise traffic smoothly.",
    whatYouGet: [
      "High-throughput REST / gRPC API contracts with full OpenAPI specs",
      "Normalized PostgreSQL database schemas with migration runbooks",
      "Asynchronous message processing with Redis and event streaming",
      "Rate limiting, authentication, and role-based access control (RBAC)",
    ],
    typicalTimeline: "3 to 6 weeks",
    capabilities: [
      "High-concurrency API development (Node/TypeScript, FastAPI, Go)",
      "Relational data modeling, connection pooling, and query optimization",
      "Streaming endpoints (Server-Sent Events / WebSockets) for real-time data",
      "Distributed task queues and idempotent webhook processors",
      "Security hardening: JWT/OAuth2, RBAC, input sanitization, rate limits",
    ],
    ctaText: "Architect Your Backend",
    icon: "Server",
    process: [
      "Design database entity relationships, transactional boundaries, and API contracts",
      "Implement modular backend services with strict validation at controller boundaries",
      "Configure connection pooling, caching strategies, and asynchronous job queues",
      "Run load testing, optimize slow queries, and deliver tested production code",
    ],
    deliverables: [
      "Production-ready backend codebase with comprehensive integration tests",
      "Normalized database schema with automated migration scripts",
      "OpenAPI / Swagger specifications and architectural documentation",
    ],
  },
];
