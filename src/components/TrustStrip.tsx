import React from "react";
import { Cpu, Server, Workflow, Network, Cloud } from "lucide-react";

const DISCIPLINES = [
  { label: "AI SYSTEMS", icon: Cpu, desc: "Agentic loops & LLM pipelines" },
  { label: "BACKEND ENGINEERING", icon: Server, desc: "Scalable REST APIs & PostgreSQL" },
  { label: "WORKFLOW AUTOMATION", icon: Workflow, desc: "n8n & event-driven webhooks" },
  { label: "API INTEGRATION", icon: Network, desc: "Resilient contracts & data mapping" },
  { label: "CLOUD APPLICATIONS", icon: Cloud, desc: "Containerized & reproducible infra" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Core Engineering Disciplines"
      className="w-full border-y border-[#D8C5AF]/70 bg-[#FAF7F2] py-5 sm:py-8 my-4 sm:my-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <span className="font-mono text-[11px] sm:text-xs text-[#4A3428]/70 tracking-widest uppercase block font-semibold">
              ENGINEERING DISCIPLINES
            </span>
            <p className="text-xs text-[#241A15] font-medium mt-0.5">
              Production focus & applied technical capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 w-full md:w-auto">
            {DISCIPLINES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group flex flex-col p-3 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/80 hover:border-[#4A3428] hover:bg-[#FAF7F2] transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors">
                      <Icon className="w-3.5 h-3.5 text-[#D8C5AF]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#241A15] tracking-tight">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#4A3428] leading-tight">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
