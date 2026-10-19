export interface ProblemItem {
  id: string;
  title: string;
  symptom: string;
  solutionOutcome: string;
  badge: string;
}

export const problemsSolved: ProblemItem[] = [
  {
    id: "fragile-ai-prototypes",
    title: "Fragile AI Prototypes Failing in Production",
    symptom:
      "Prototype LLM wrappers and single-prompt scripts hallucinate, fail unpredictably under load, break on malformed inputs, and lack automated evaluation harnesses.",
    solutionOutcome:
      "Production-grade agentic system design with LangGraph state machines, Pydantic schema validation, and rigorous deterministic evaluation test suites.",
    badge: "Agentic Rigor",
  },
  {
    id: "cloud-devops-gap",
    title: "Disconnected Cloud Infrastructure & DevOps Gaps",
    symptom:
      "AI models running isolated on temporary servers without Docker containerization, automated CI/CD pipelines, or production observability.",
    solutionOutcome:
      "Hardened cloud infrastructure with Docker/Kubernetes containerization, automated GitHub Actions CI/CD, and OpenTelemetry logging on AWS/GCP.",
    badge: "Cloud DevOps",
  },
  {
    id: "backend-bottlenecks",
    title: "Backend Concurrency Drops & Database Bottlenecks",
    symptom:
      "Legacy server architectures freezing during streaming requests, unindexed database bottlenecks, and dropped async webhook messages under traffic spikes.",
    solutionOutcome:
      "Resilient high-concurrency microservices in Node/TypeScript and FastAPI with Redis caching, connection pooling, and transactional ACID integrity.",
    badge: "Resilient Backends",
  },
  {
    id: "hallucinating-rag",
    title: "Enterprise Knowledge Silos & Ungrounded RAG",
    symptom:
      "Basic vector search returning noisy document snippets and generating ungrounded speculations that cannot be trusted in business operations.",
    solutionOutcome:
      "Enterprise hybrid retrieval (dense pgvector + sparse BM25) with cross-encoder reranking, strict confidence thresholds, and verified paragraph citations.",
    badge: "Grounded Retrieval",
  },
];
