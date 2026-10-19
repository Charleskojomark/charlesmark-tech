import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Card3D, Card3DItem } from "@/components/Card3D";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const WHATSAPP_PROMPTS = [
  {
    title: "Agentic Systems & AI Orchestration",
    subtitle: "Multi-agent workflows, tool execution, LangGraph state machines",
    message: "Hi Charles, I'd like to discuss architecting an agentic AI system for our product.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Docker/K8s, automated CI/CD pipelines, AWS/GCP cloud deployments",
    message: "Hi Charles, I'm looking to containerize our infrastructure and set up production CI/CD.",
  },
  {
    title: "Backend Architecture & APIs",
    subtitle: "High-throughput Node/FastAPI/Go backends, PostgreSQL, Redis",
    message: "Hi Charles, I need a resilient, scalable backend and database architecture built right.",
  },
  {
    title: "Forward Deployed Engineering",
    subtitle: "Embed with your engineering team to deliver production AI systems",
    message: "Hi Charles, I'd like to consult on an upcoming AI systems or backend engineering engagement.",
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
                    DIRECT TECHNICAL CONSULTATION
                  </span>
                  <span className="font-display font-bold text-lg text-[#F5F0E8] block">
                    Talk Directly With Charles Mark
                  </span>
                </div>
              </Card3DItem>

              <Card3DItem translateZ={20}>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#F5F0E8]">
                  LET&apos;S ARCHITECT YOUR PRODUCTION SYSTEM.
                </h2>
              </Card3DItem>

              <p className="text-sm sm:text-base text-[#D8C5AF] leading-relaxed">
                No long forms, no sales middlemen, and no waiting days for a ticket reply. Click below to start a direct technical conversation about your backend architecture, cloud DevOps, or agentic AI deployment.
              </p>

              {/* Big High-Converting Action Buttons: WhatsApp & Cal.com */}
              <Card3DItem translateZ={32} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-extrabold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98] group cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={siteConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F5F0E8] text-[#241A15] font-mono text-xs font-bold border border-[#D8C5AF] shadow-md active:scale-[0.98] transition-all duration-200 group cursor-pointer"
                >
                  <span>📅 Schedule on Cal.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#4A3428] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            <div className="lg:col-span-6 space-y-3">
              <span className="font-mono text-xs text-[#B58A64] uppercase tracking-wider font-semibold block mb-2">
                CHOOSE A SYSTEM TOPIC TO BEGIN:
              </span>

              {WHATSAPP_PROMPTS.map((prompt, index) => {
                const url = `https://wa.me/2347082367382?text=${encodeURIComponent(prompt.message)}`;

                return (
                  <Card3DItem
                    key={index}
                    translateZ={15 + index * 5}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-2xl bg-[#1C1410] border border-[#4A3428] hover:border-[#B58A64] hover:bg-[#2A1D16] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display font-bold text-sm sm:text-base text-[#F5F0E8] group-hover:text-[#B58A64] transition-colors">
                            {prompt.title}
                          </div>
                          <div className="font-mono text-[11px] text-[#D8C5AF]/80 mt-0.5">
                            {prompt.subtitle}
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#241A15] border border-[#4A3428] flex items-center justify-center text-[#D8C5AF] group-hover:text-[#F5F0E8] group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all flex-shrink-0 ml-3">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  </Card3DItem>
                );
              })}
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
}
