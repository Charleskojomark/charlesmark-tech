export interface ProblemItem {
  id: string;
  title: string;
  symptom: string;
  solutionOutcome: string;
  badge: string;
}

export const problemsSolved: ProblemItem[] = [
  {
    id: "leads-slipping",
    title: "Leads slipping through the cracks",
    symptom:
      "Inbound inquiries sit in shared inboxes for hours or days before someone notices, manually copies the details, and notifies sales.",
    solutionOutcome:
      "Automated lead intake that validates contact details instantly, routes high-priority alerts to Slack/CRM within seconds, and logs every step.",
    badge: "Faster Response",
  },
  {
    id: "manual-documents",
    title: "Manual invoice & document handling",
    symptom:
      "Staff waste hours every week downloading email attachments, opening PDFs, and manually re-typing invoice items into spreadsheets or accounting tools.",
    solutionOutcome:
      "AI-driven document parsing with strict validation guards that extracts structured data from PDFs/receipts and writes directly to your database.",
    badge: "10-20 hrs/wk Saved",
  },
  {
    id: "scattered-knowledge",
    title: "Scattered company knowledge",
    symptom:
      "Standard operating procedures, manuals, and customer support guidelines are split across Drive folders, Notion docs, and message threads.",
    solutionOutcome:
      "A private RAG knowledge assistant grounded strictly in your verified files, providing cited answers without hallucinating or leaking internal data.",
    badge: "Instant Internal Answers",
  },
  {
    id: "backend-needed",
    title: "An app idea that needs a backend",
    symptom:
      "You have an interface design or validated product concept, but lack the API contracts, secure database architecture, and AI pipeline to make it real.",
    solutionOutcome:
      "A production-ready backend in Node/Express or FastAPI with normalized PostgreSQL tables, authentication, and streaming AI endpoints ready for launch.",
    badge: "Launch-Ready Architecture",
  },
];
