export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI Systems" | "Automation" | "Backend" | "Cloud & DevOps";
  featured: boolean;
  status: string; // e.g. "Reference build", "Hackathon Prototype (Proof of Concept - Illustrative Simulation)"
  timeline: string;
  technologies: string[];
  problem: string;
  whatChanged: string;
  result: string;
  solution: string; // alias for whatChanged to ensure compatibility
  contribution: string;
  architecture: string[];
  decisions: { title: string; reasoning: string }[];
  tradeoffs: string[];
  learnings: string[];
  githubUrl?: string;
  demoUrl?: string;
  metricsOrNotes?: string;
  honestyNote?: string;
}

export const projects: Project[] = [
  {
    slug: "n8n-workflow-automation",
    title: "Multi-Channel AI Workflow Automation System",
    tagline: "Event-driven business pipeline uniting webhooks, AI document parsing, and instant team notifications",
    category: "Automation",
    featured: true,
    status: "Reference build",
    timeline: "2025 - 2026",
    technologies: ["n8n", "Webhooks", "PostgreSQL", "Node.js", "OpenAI API", "Slack / Email APIs"],
    problem:
      "Operations teams spend dozens of hours every week manually copying leads from intake forms, re-typing invoice attachments, and alerting staff across disconnected spreadsheets and chat tools.",
    whatChanged:
      "Architected an end-to-end event-driven n8n automation pipeline. Incoming webhooks and email attachments are parsed by structured AI extraction models, validated against strict schemas, saved directly into PostgreSQL, and routed with role-specific notifications.",
    result:
      "Eliminated manual copy-paste handoffs across incoming form inquiries, delivering immediate lead alerts and normalized data records with dead-letter queue recovery for edge-case failures.",
    solution:
      "Architected an end-to-end event-driven n8n automation pipeline that captures multi-source webhooks, parses unstructured incoming emails and PDF attachments via LLM function calling, writes structured records to PostgreSQL, and dispatches role-tailored alerts.",
    contribution:
      "Configured webhook normalization logic, authored custom JavaScript data transformation nodes in n8n, designed exponential backoff retry mechanisms, and enforced credential isolation.",
    architecture: [
      "Inbound webhook gateway receiving payload events from web forms and email forwarding hooks",
      "Data sanitation and deduplication stage with PostgreSQL idempotency checks",
      "LLM extraction node using structured JSON schemas to parse document line items",
      "Conditional routing switch delivering high-priority notifications to Slack and archiving routine data",
      "Automated Dead Letter Queue (DLQ) alerting on webhook schema drift or upstream API failures",
    ],
    decisions: [
      {
        title: "Self-hosted n8n architecture",
        reasoning:
          "Maintains total customer data privacy, eliminates per-workflow third-party execution charges, and enables custom Node.js script nodes.",
      },
      {
        title: "Idempotency keys on incoming payloads",
        reasoning:
          "Webhooks frequently deliver duplicate requests on transient network drops. Payload hashing prevents duplicate records.",
      },
    ],
    tradeoffs: [
      "Invested higher upfront design time into dead-letter queues and validation schemas to prevent silent pipeline drops.",
    ],
    learnings: [
      "Never allow raw AI model outputs to write directly to production databases without strict schema validation (like Zod or JSON Schema).",
      "Webhook listeners must acknowledge payloads with 200 OK immediately and execute heavier AI processing asynchronously.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Reference build demonstrating automated data normalization and reliable webhook handling.",
  },
  {
    slug: "rag-knowledge-assistant",
    title: "Enterprise Document RAG Knowledge Assistant",
    tagline: "Semantic search and grounded question-answering system over private company documentation",
    category: "AI Systems",
    featured: true,
    status: "Reference build",
    timeline: "2025 - 2026",
    technologies: ["Python", "FastAPI", "PostgreSQL (pgvector)", "LangChain", "OpenAI Embeddings", "Docker"],
    problem:
      "Team members waste hours searching across hundreds of internal PDFs, handbooks, and operational specifications, frequently relying on guesswork or outdated information.",
    whatChanged:
      "Built a Retrieval-Augmented Generation (RAG) assistant that indexes company documents into a vector-enabled PostgreSQL database, retrieves context using hybrid vector-keyword search, and produces cited answers.",
    result:
      "Staff receive fast, factual answers that cite the exact internal source document, with safety guardrails that refuse to speculate when knowledge base context is insufficient.",
    solution:
      "Built a retrieval-augmented generation (RAG) assistant that indexes internal Markdown and PDF documentation into pgvector, applies hybrid keyword-vector retrieval, and provides cited, verifiable answers.",
    contribution:
      "Implemented document chunking strategies with contextual metadata, built the hybrid retrieval pipeline in pgvector, and engineered prompt templates that mandate document citations.",
    architecture: [
      "Document ingestion pipeline with semantic chunking and sliding window token overlaps",
      "Vector database utilizing PostgreSQL with pgvector extension for unified relational & vector queries",
      "Hybrid search combining keyword matching with cosine similarity embeddings",
      "Context-grounded prompt engineering with explicit citation requirements and confidence scoring",
    ],
    decisions: [
      {
        title: "pgvector over standalone vector databases",
        reasoning:
          "Keeping relational access control, document versions, and vector embeddings in a single PostgreSQL instance minimized operational complexity and backup overhead.",
      },
      {
        title: "Semantic chunking over fixed token cuts",
        reasoning:
          "Chunking along logical headers and sections preserved semantic boundaries, significantly improving retrieval precision.",
      },
    ],
    tradeoffs: [
      "Higher upfront document processing time during ingestion in exchange for markedly higher answer accuracy during live queries.",
    ],
    learnings: [
      "Chunk size and overlap tuning has a far greater impact on response accuracy than switching LLM model versions.",
      "Always include an explicit fallback ('I do not have enough context in the verified documents to answer') to prevent speculation.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Reference build with verified citation extraction for grounded enterprise Q&A.",
  },
  {
    slug: "klinik-voice-assistant",
    title: "Klinik — AI Patient Intake Voice Assistant Prototype",
    tagline: "Voice-driven patient intake & triage agent prototype built for medical hackathons",
    category: "AI Systems",
    featured: true,
    status: "Hackathon Prototype (Proof of Concept)",
    timeline: "2025 - 2026",
    technologies: [
      "FastAPI",
      "LangGraph",
      "Python",
      "Speech-to-Text APIs",
      "WebSockets",
      "Pydantic",
    ],
    problem:
      "Emergency room and clinic admissions face bottlenecks during initial intake because intake staff must manually transcribe spoken descriptions into rigid electronic forms while managing patient distress.",
    whatChanged:
      "Developed a hackathon proof-of-concept voice assistant that captures spoken symptom descriptions in real time, parses observations into structured Pydantic schemas, and routes dialogue through a stateful LangGraph machine.",
    result:
      "Demonstrated functional real-time speech capture and structured intake summaries during live hackathon judging, with deterministic safety guardrails preventing any medical diagnosis.",
    solution:
      "Engineered an interactive conversational voice assistant agent that captures spoken symptom descriptions, extracts structured clinical observations, and routes them through a stateful LangGraph workflow.",
    contribution:
      "Designed the backend architecture in FastAPI, implemented the LangGraph state machine for multi-step clinical dialogue verification, and established structured Pydantic schema validation for patient data extraction.",
    architecture: [
      "FastAPI WebSockets layer handling real-time audio streaming from the client",
      "LangGraph state machine coordinating intent classification, triage inquiry branching, and fallback safety guards",
      "Strict Pydantic response modeling ensuring output conforms to medical intake record formatting",
      "Safety guardrail node rejecting medical diagnoses and enforcing immediate referral to licensed professionals",
    ],
    decisions: [
      {
        title: "LangGraph over linear prompt chains",
        reasoning:
          "Intake conversations are non-linear; patients re-clarify symptoms or backtrack. Graph-based state transitions allowed conditional routing without brittle prompt chains.",
      },
      {
        title: "FastAPI with async WebSockets",
        reasoning:
          "Minimizing audio latency is paramount for conversational voice. Async event-driven handling delivered smooth turn-taking in live demonstration testing.",
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
    metricsOrNotes: "Hackathon proof of concept evaluated in live demonstration simulation.",
    honestyNote: "Note: Klinik is an experimental hackathon prototype and proof-of-concept demonstration, not a licensed medical device. Latency metrics represent simulated test conditions.",
  },
  {
    slug: "enterprise-backend-api",
    title: "Scalable REST API & Relational Backend Service",
    tagline: "Reliable backend API architecture with relational data modeling, RBAC, and transactional integrity",
    category: "Backend",
    featured: true,
    status: "Reference build",
    timeline: "2025 - 2026",
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Knex / Prisma", "Docker"],
    problem:
      "Growing applications require secure, auditable, and performant backend services that handle concurrent requests without data race conditions or silent failures.",
    whatChanged:
      "Designed and developed a production-ready RESTful backend service with TypeScript, role-based access control (RBAC), robust input validation, database connection pooling, and structured error logging.",
    result:
      "Delivered a dependable backend core with zero unhandled database race conditions and clean API documentation ready for client frontend or mobile consumption.",
    solution:
      "Designed and developed a production-ready RESTful backend service with TypeScript, role-based access control (RBAC), robust input validation, database connection pooling, and structured error logging.",
    contribution:
      "Architected database schemas, established transactional boundaries for multi-table writes, implemented rate limiting, and wrote comprehensive integration test suites.",
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
      "Adopted strict TypeScript compiler settings (`strict: true`, `noImplicitAny: true`) which slowed initial scaffolding but prevented runtime null pointer defects.",
    ],
    learnings: [
      "Designing clean relational foreign key constraints and indexes early pays massive dividends when query volumes grow.",
    ],
    githubUrl: "https://github.com/Charleskojomark",
    metricsOrNotes: "Reference backend service demonstrating production database modeling and clean API contracts.",
  },
  {
    slug: "cloud-devops-pipeline",
    title: "Containerized Cloud Deployment & CI/CD Pipeline",
    tagline: "Reproducible container environments, automated testing workflows, and cloud infrastructure setup",
    category: "Cloud & DevOps",
    featured: false,
    status: "Reference build / Lab",
    timeline: "2025 - 2026",
    technologies: ["Docker", "Docker Compose", "GitHub Actions", "Linux", "Nginx", "Terraform (Labs)"],
    problem:
      "Inconsistent environments between local machines and cloud servers create frequent deployment failures, missing dependencies, and unpredictable downtime.",
    whatChanged:
      "Built multi-stage Dockerized environments for backend services, automated test runners with GitHub Actions, and authored declarative Terraform configurations for reproducible cloud resource provisioning.",
    result:
      "Achieved predictable one-command deployments with lean production container images and automated pull-request validation.",
    solution:
      "Built multi-stage Dockerized environments for backend services, automated test runners with GitHub Actions, and authored declarative Terraform configurations for reproducible cloud resource provisioning.",
    contribution:
      "Wrote multi-stage Dockerfiles optimizing image layer caching, designed CI/CD workflows running automated linting and tests on PR merges, and configured reverse proxies with Nginx.",
    architecture: [
      "Multi-stage Docker builds reducing final container sizes down to lean Alpine images",
      "GitHub Actions workflow matrix executing unit tests across Node.js versions",
      "Nginx reverse proxy configuration handling SSL termination and rate limiting",
      "Terraform lab manifests provisioning modular cloud VPCs and storage buckets",
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
