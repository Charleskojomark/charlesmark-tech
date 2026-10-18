import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card3D, Card3DItem } from "@/components/Card3D";

const WHATSAPP_PROMPTS = [
  {
    title: "AI Workflow Automation",
    subtitle: "Eliminate repetitive manual tasks, CRM sync, PDF parsing",
    message: "Hi Charles, I'd like to discuss automating our business processes with n8n and Python.",
  },
  {
    title: "Custom AI Agent / RAG",
    subtitle: "Private assistant grounded in company documents & manuals",
    message: "Hi Charles, I'm interested in building a custom AI assistant grounded on our company documents.",
  },
  {
    title: "Backend API & Database",
    subtitle: "Production backend in Node or FastAPI with PostgreSQL",
    message: "Hi Charles, I have an app idea/interface that needs a production backend and database architecture.",
  },
  {
    title: "General Scope Consultation",
    subtitle: "Discuss an upcoming project scope or technical feasibility",
    message: "Hi Charles, I'd like to consult on an upcoming AI/backend project for my business.",
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card3D
          maxTilt={6}
          glowColor="rgba(181, 138, 100, 0.18)"
          className="bg-[#241A15] rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#4A3428] shadow-2xl relative overflow-hidden text-[#F5F0E8]"
        >
          {/* Subtle warm glow background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Direct Invitation */}
            <div className="lg:col-span-6 space-y-6">
              <Card3DItem translateZ={28} className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B58A64] shadow-md bg-[#241A15] flex-shrink-0">
                  <Image
                    src="/charles-mark.png"
                    alt="Charles Mark"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#241A15]" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block">
                    DIRECT CLIENT COMMUNICATION
                  </span>
                  <span className="font-display font-bold text-lg text-[#F5F0E8] block">
                    Talk Directly With Charles Mark
                  </span>
                </div>
              </Card3DItem>

              <Card3DItem translateZ={20}>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#F5F0E8]">
                  LET&apos;S TALK ABOUT YOUR WORKFLOW OR APP.
                </h2>
              </Card3DItem>

              <p className="text-sm sm:text-base text-[#D8C5AF] leading-relaxed">
                No long forms, no sales middlemen, and no waiting days for a ticket reply. Click below to start a direct WhatsApp conversation about your operational bottleneck or product backend.
              </p>

              {/* Big High-Converting WhatsApp Button */}
              <Card3DItem translateZ={32} className="pt-2">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-extrabold text-base transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98] group cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" />
                  <span>Chat with Charles on WhatsApp</span>
                  <ArrowUpRight className="w-5 h-5 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Card3DItem>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D8C5AF]/90 pt-3 border-t border-[#4A3428]/80">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fast, direct reply</span>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#B58A64]" />
                  <span>Free technical feasibility review</span>
                </span>
              </div>
            </div>

            {/* Right Column: Pre-filled WhatsApp Topics with 3D Tilt */}
            <div className="lg:col-span-6 space-y-3.5">
              <span className="font-mono text-[11px] text-[#B58A64] uppercase font-bold tracking-widest block mb-1">
                OR TAP A TOPIC TO PREFILL YOUR MESSAGE:
              </span>

              {WHATSAPP_PROMPTS.map((topic) => (
                <Card3D
                  key={topic.title}
                  maxTilt={8}
                  glowColor="rgba(37, 211, 102, 0.25)"
                >
                  <a
                    href={`https://wa.me/2347082367382?text=${encodeURIComponent(topic.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-[#2E2019] border border-[#4A3428] hover:border-[#25D366] hover:bg-[#38261D] transition-all shadow-sm cursor-pointer block"
                  >
                    <div className="space-y-0.5 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] flex-shrink-0" />
                        <h3 className="font-display font-bold text-sm text-[#F5F0E8] group-hover:text-white transition-colors">
                          {topic.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#D8C5AF]/80 pl-4 leading-relaxed">
                        {topic.subtitle}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-[#241A15] border border-[#4A3428] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#D8C5AF] group-hover:text-white transition-colors" />
                    </div>
                  </a>
                </Card3D>
              ))}

              {/* Direct Email Fallback */}
              <div className="pt-2 flex items-center justify-between p-3.5 rounded-xl bg-[#1C1410] border border-[#4A3428] text-xs font-mono text-[#D8C5AF]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#B58A64]" />
                  <span>Prefer email?</span>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry%20-%20AI%20Systems`}
                  className="font-semibold text-white hover:text-[#B58A64] transition-colors underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
}
