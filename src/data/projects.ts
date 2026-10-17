export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI Systems" | "Automation" | "Backend" | "Cloud & DevOps";
  featured: boolean;
  status: string;
  timeline: string;
  technologies: string[];
  problem: string;
  solution: string;
  contribution: string;
  architecture: string[];
  decisions: { title: string; reasoning: string }[];
  tradeoffs: string[];
  learnings: string[];
  githubUrl?: string;
  demoUrl?: string;
  metricsOrNotes?: string;
}

export const projects: Project[] = [
  {
    slug: "klinik-voice-assistant",
    title: "Klinik — AI Healthcare Voice Assistant",
    tagline: "Voice-driven patient intake & triage agent prototype built for medical hackathons",
    category: "AI Systems",
    featured: true,
    status: "Hackathon Prototype (Proof of Concept)",
    timeline: "2024",
    technologies: [
      "FastAPI",
      "LangGraph",
      "Python",
      "OpenAI Whisper / LLM APIs",
      "WebSockets",
      "Pydantic",
    ],
    problem:
      "Patient intake during high-pressure emergency or clinic admissions is often bottlenecked by manual paperwork and fragmented transcription, delaying critical triage information.",
    solution:
      "Engineered an interactive conversational voice assistant agent that captures spoken symptom descriptions, extracts structured clinical observations, and routes them through a stateful LangGraph workflow.",
    contribution:
      "Designed the backend architecture in FastAPI, implemented the LangGraph state machine for multi-step clinical dialogue verification, and established structured Pydantic schema validation for patient data extraction.",
    architecture: [
      "FastAPI WebSockets layer handling real-time audio chunk ingestion and client streaming",
      "LangGraph state machine coordinating intent classification, triage inquiry branching, and fallback safety guards",
      "Strict Pydantic response modeling ensuring output conforms to medical intake record formatting",
      "Safety guardrail node rejecting medical diagnoses and enforcing referral to licensed professionals",
    ],
    decisions: [
      {
        title: "LangGraph over linear chains",
        reasoning:
          "Intake conversations are inherently non-linear; patients re-clarify symptoms, backtrack, or mention multiple ailments simultaneously. Graph-based state transitions allowed conditional routing without brittle prompt chains.",
      },
      {
        title: "FastAPI with async WebSockets",
        reasoning:
          "Minimizing audio latency is paramount for conversational voice. Async event-driven handling delivered sub-second turn-taking responsiveness.",
      },
    ],
    tradeoffs: [
      "Prioritized transcription fidelity and low latency over running edge models locally, using hosted speech-to-text APIs with strict data sanitization filters.",
      "Framed explicitly as an administrative intake assistant prototype rather than a diagnostic tool to avoid clinical liability and hallucination risks.",
    ],
    learnings: [
      "Stateful agent loops need deterministic interrupt handlers when users correct previously stated information.",
      "Latency budgets must be budgeted strictly across speech-to-text, LLM inference, and text-to-speech synthesis.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Demonstrated functional real-time speech triage in hackathon live evaluations.",
  },
  {
    slug: "n8n-workflow-automation",
    title: "Multi-Channel AI Workflow Automation System",
    tagline: "Event-driven business pipeline uniting webhooks, AI document parsing, and instant notifications",
    category: "Automation",
    featured: true,
    status: "Production Pipeline",
    timeline: "2024",
    technologies: ["n8n", "Webhooks", "REST APIs", "Node.js", "OpenAI API", "PostgreSQL", "Slack / Email"],
    problem:
      "Operations teams spend dozens of hours weekly manually copying lead inquiries, sorting attachments, extracting invoice parameters, and manually notifying account executives.",
    solution:
      "Architected an end-to-end event-driven n8n automation pipeline that captures multi-source webhooks, parses unstructured incoming emails and PDF attachments via LLM function calling, writes structured records to PostgreSQL, and dispatches role-tailored alerts.",
    contribution:
      "Mapped webhook payload normalization logic, built custom JavaScript processing nodes in n8n, configured retries with exponential backoff, and implemented secure credential isolation.",
    architecture: [
      "Inbound webhook gateway receiving payload events from CRM forms and email forwarding hooks",
      "Data sanitation and deduplication stage with Redis/PostgreSQL idempotency checks",
      "LLM extraction node using structured JSON schemas to parse document line items",
      "Conditional routing switch delivering high-priority leads to Slack and archiving routine data",
      "Automated DLQ (Dead Letter Queue) alerting on webhook schema drift or upstream API failures",
    ],
    decisions: [
      {
        title: "Self-hosted n8n instance",
        reasoning:
          "Ensured full data residency, zero per-execution pricing penalties, and complete control over execution logs and custom Node.js script nodes.",
      },
      {
        title: "Idempotency keys on incoming payloads",
        reasoning:
          "Webhooks frequently deliver duplicate deliveries on network timeouts. Hashing headers and timestamps prevented duplicate database insertions.",
      },
    ],
    tradeoffs: [
      "Accepted higher upfront workflow design overhead for strict error handling and DLQs to prevent silent pipeline drops.",
    ],
    learnings: [
      "Never rely on LLM outputs without a downstream schema validator (like Zod or JSON Schema) before database writes.",
      "Webhook consumers must respond with 200 OK immediately and process heavy AI tasks asynchronously.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Eliminated manual data entry across incoming form inquiries with 99.8% execution reliability.",
  },
  {
    slug: "rag-knowledge-assistant",
    title: "Enterprise Document RAG Knowledge Assistant",
    tagline: "Semantic search and grounded question-answering system over private technical documentation",
    category: "AI Systems",
    featured: true,
    status: "Working System",
    timeline: "2024",
    technologies: ["Python", "FastAPI", "PostgreSQL (pgvector)", "LangChain", "OpenAI Embeddings", "Docker"],
    problem:
      "Engineers and support teams struggle to locate precise answers within hundreds of pages of API specifications, architecture decision records, and operational runbooks.",
    solution:
      "Built a retrieval-augmented generation (RAG) assistant that indexes internal Markdown and PDF documentation into pgvector, applies hybrid keyword-vector retrieval, and provides cited, verifiable answers.",
    contribution:
      "Implemented document chunking strategies with contextual metadata, built the hybrid retrieval pipeline in pgvector, and engineered prompt templates that mandate document citations.",
    architecture: [
      "Document ingestion pipeline with semantic chunking and sliding window token overlaps",
      "Vector database utilizing PostgreSQL with pgvector extension for unified relational & vector queries",
      "Hybrid search combining BM25 keyword matching with cosine similarity embeddings",
      "Context-grounded prompt engineering with explicit citation requirements and confidence scoring",
    ],
    decisions: [
      {
        title: "pgvector over standalone vector DBs",
        reasoning:
          "Keeping relational data (user permissions, document versions) and embeddings in the same PostgreSQL database reduced infrastructure complexity and backup overhead.",
      },
      {
        title: "Semantic chunking over fixed token cuts",
        reasoning:
          "Chunking along Markdown headers and paragraphs preserved context boundaries, cutting query hallucination rates dramatically.",
      },
    ],
    tradeoffs: [
      "Higher ingestion time during semantic chunking in exchange for substantially more accurate retrieval precision during user queries.",
    ],
    learnings: [
      "Chunk size and overlap tuning has a far greater impact on response accuracy than switching LLM model versions.",
      "Always include an 'I do not have enough context to answer' prompt instruction to stop speculative completions.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Reliable citation extraction with verified source references for all synthesized answers.",
  },
  {
    slug: "enterprise-backend-api",
    title: "Scalable REST API & Data Service",
    tagline: "High-performance backend API with relational data modeling, RBAC, and transactional integrity",
    category: "Backend",
    featured: true,
    status: "Implemented Service",
    timeline: "2023 - 2024",
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma/Knex", "Jest", "Docker"],
    problem:
      "Modern applications require secure, auditable, and performant backend services that handle concurrent requests without data race conditions or silent failures.",
    solution:
      "Designed and developed a production-ready RESTful backend service with TypeScript, role-based access control (RBAC), robust input validation, database connection pooling, and structured error logging.",
    contribution:
      "Architected database schemas, established transactional boundaries for multi-table writes, implemented rate limiting, and wrote comprehensive unit/integration test suites.",
    architecture: [
      "Layered architecture: Controllers -> Services -> Data Access Layer (Repositories)",
      "Centralized error handling middleware mapping domain exceptions to RFC 7807 problem details",
      "JWT-based authentication paired with token revocation blacklists in Redis",
      "Database migration scripts and automated schema synchronization via CI pipelines",
    ],
    decisions: [
      {
        title: "Strict validation at controller boundaries",
        reasoning:
          "Validating input schemas before hitting service layers prevented malformed inputs from polluting domain logic and databases.",
      },
      {
        title: "Explicit database transactions",
        reasoning:
          "Ensured atomic operations for financial and multi-entity operations, guaranteeing consistency on unexpected network disconnects.",
      },
    ],
    tradeoffs: [
      "Adopted strict TypeScript compiler settings (`strict: true`, `noImplicitAny: true`) which slowed initial scaffolding but prevented dozens of runtime null pointer defects.",
    ],
    learnings: [
      "Designing clean relational foreign key constraints and indexes early pays massive dividends when query volumes grow.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "90%+ unit test coverage on critical billing and authentication domain services.",
  },
  {
    slug: "cloud-devops-pipeline",
    title: "Cloud Infrastructure & CI/CD Deployment Labs",
    tagline: "Containerized environments, automated testing workflows, and Terraform infrastructure experiments",
    category: "Cloud & DevOps",
    featured: false,
    status: "Lab & Infrastructure Project",
    timeline: "2024",
    technologies: ["Docker", "Docker Compose", "GitHub Actions", "Terraform (Labs)", "Linux", "Nginx"],
    problem:
      "Discrepancies between local development environments and cloud hosting lead to deployment failures and unrepeatable configurations.",
    solution:
      "Built multi-stage Dockerized environments for backend services, automated test runners with GitHub Actions, and authored declarative Terraform configurations for reproducible cloud resource provisioning.",
    contribution:
      "Wrote multi-stage Dockerfiles optimizing image layer caching, designed CI/CD workflows running automated linting and tests on PR merges, and configured reverse proxies with Nginx.",
    architecture: [
      "Multi-stage Docker builds reducing final container sizes from 1.2GB down to 140MB",
      "GitHub Actions workflow matrix executing unit tests across Node.js versions",
      "Nginx reverse proxy configuration handling SSL termination and rate limiting",
      "Terraform lab manifests provisioning modular cloud VPCs, subnets, and storage buckets",
    ],
    decisions: [
      {
        title: "Multi-stage Docker caching",
        reasoning:
          "Separating build dependencies from runtime environments trimmed deployment bandwidth and closed security attack vectors.",
      },
    ],
    tradeoffs: [
      "Documented as an active learning lab to demonstrate infrastructure-as-code principles without claiming multi-region enterprise Kubernetes production ownership.",
    ],
    learnings: [
      "Immutable infrastructure practices eliminate 'works on my machine' debugging cycles.",
      "Clear healthcheck endpoints are mandatory for orchestrators to handle rolling zero-downtime restarts.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Automated end-to-end pipeline build and test verification in under 3 minutes.",
  },
];
