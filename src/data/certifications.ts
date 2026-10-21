export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  imageSrc: string;
  description: string;
  skills: string[];
  category: "AI Agents & LLMs" | "Applied AI & MLOps" | "Forward Deployed & Systems" | "Backend & Cloud";
  highlight?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "deeplearning-agentic-ai",
    title: "Agentic AI",
    issuer: "DeepLearning.AI",
    partner: "Andrew Ng",
    issueDate: "April 30, 2026",
    credentialId: "2d1536f0-6751-4795-a875-7e92da8992c2",
    verificationUrl: "https://www.deeplearning.ai/certificates/2d1536f0-6751-4795-a875-7e92da8992c2",
    imageSrc: "/certificates/agentic-ai-deeplearning.png",
    description:
      "Taught by Andrew Ng. Architecting autonomous agentic AI systems that take action through iterative, multi-step workflows, reflection, and tool calling.",
    skills: ["Agentic AI", "Autonomous Agents", "Multi-Step Workflows", "Iterative LLMs", "Tool Calling"],
    category: "AI Agents & LLMs",
    highlight: true,
  },
  {
    id: "educative-agentic-system-design",
    title: "Agentic System Design",
    issuer: "Educative",
    partner: "FAANG Mentors",
    issueDate: "October 19, 2026",
    credentialId: "9ECJ9FXRCS",
    verificationUrl: "https://www.educative.io/verify-certificate/9ECJ9FXRCS",
    imageSrc: "/certificates/agentic-system-design.png",
    description:
      "Designing complex autonomous agent systems. Architectures and strategies for stateful agents, memory graphs, multi-agent collaboration, and real-world execution.",
    skills: ["Agentic Architecture", "Multi-Agent Systems", "State Graphs", "Autonomous Planning", "Memory & Routing"],
    category: "AI Agents & LLMs",
    highlight: true,
  },
  {
    id: "educative-ai-workflow-engineer",
    title: "AI Workflow Engineer: Design, Build, and Operate",
    issuer: "Educative",
    partner: "FAANG Mentors",
    issueDate: "October 19, 2026",
    credentialId: "R13GA5YT51",
    verificationUrl: "https://www.educative.io/verify-certificate/R13GA5YT51",
    imageSrc: "/certificates/ai-workflow-engineer.png",
    description:
      "Building resilient production AI workflows with LLM APIs, structured outputs, validation, retries, tool-using agents, RAG, human-in-the-loop, and production telemetry.",
    skills: ["AI Workflows", "Structured Outputs", "Validation & Retries", "Tool Calling", "RAG Systems", "Production Monitoring"],
    category: "AI Agents & LLMs",
  },
  {
    id: "educative-applied-ai-engineer",
    title: "Applied AI Engineer: Build, Evaluate, and Operate Production LLM",
    issuer: "Educative",
    partner: "FAANG Mentors",
    issueDate: "October 13, 2026",
    credentialId: "GZJQ2LRL7Q",
    verificationUrl: "https://www.educative.io/verify-certificate/GZJQ2LRL7Q",
    imageSrc: "/certificates/applied-ai-engineer.png",
    description:
      "Building, evaluating, and operating production-grade Large Language Models. Fine-tuning, automated evaluation benchmarks, Docker containerization, and MLOps.",
    skills: ["Generative AI", "MLOps", "Production LLMs", "Docker", "Gemini & OpenAI", "Automated Evals"],
    category: "Applied AI & MLOps",
  },
  {
    id: "educative-forward-deployed-engineer",
    title: "Forward Deployed Engineer for AI Systems",
    issuer: "Educative",
    partner: "FAANG Mentors",
    issueDate: "October 19, 2026",
    credentialId: "0AFO1PCSZ3",
    verificationUrl: "https://www.educative.io/verify-certificate/0AFO1PCSZ3",
    imageSrc: "/certificates/forward-deployed-engineer.png",
    description:
      "Mastering the Forward Deployed Engineer role from technical customer discovery to high-stakes system architecture, field integrations, and seamless production handoffs.",
    skills: ["Forward Deployed Engineering", "Enterprise AI Integration", "System Architecture", "Client Solution Delivery", "Production Handoff"],
    category: "Forward Deployed & Systems",
  },
  {
    id: "coursera-meta-backend-developer",
    title: "Meta Back-End Developer Specialization",
    issuer: "Meta",
    partner: "Coursera",
    issueDate: "Verified Credential",
    credentialId: "P4D5ZQZUKBWR",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/P4D5ZQZUKBWR",
    imageSrc: "/certificates/meta-backend-developer.png",
    description:
      "Comprehensive 9-course professional engineering program from Meta covering scalable backend systems, Python, Django, REST APIs, databases, security, and cloud deployment.",
    skills: ["Backend Architecture", "Python & Django", "REST APIs", "Relational Databases", "Cloud Infrastructure", "System Security"],
    category: "Backend & Cloud",
    highlight: true,
  },
  {
    id: "udacity-aws-ai-practitioner",
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    partner: "Amazon Web Services (AWS)",
    issueDate: "April 30, 2026",
    credentialId: "03d200a8-30f9-11f1-97ba-f7ba892240f7",
    verificationUrl: "https://www.udacity.com/certificate/e/03d200a8-30f9-11f1-97ba-f7ba892240f7",
    imageSrc: "/certificates/aws-ai-practitioner.png",
    description:
      "AWS-partnered credential covering cloud artificial intelligence, machine learning services (Amazon Bedrock, SageMaker), model deployment, and cloud AI governance.",
    skills: ["AWS Cloud", "Amazon Bedrock & SageMaker", "Cloud ML Architecture", "AI Security & Compliance", "Model Deployment"],
    category: "Backend & Cloud",
  },
];
