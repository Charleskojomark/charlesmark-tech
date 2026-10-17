import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ArrowLeft, Cpu, Bot, Server, Check } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Server: Server,
};

export const metadata = {
  title: "Services & Offerings",
  description:
    "AI Workflow Automation, Custom AI Agents & Assistants, and Backend Development & AI Integration by Charles Mark.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4A3428] hover:text-[#241A15]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            WHAT I BUILD
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#241A15] tracking-tight mb-4">
            ENGINEERING SERVICES & CAPABILITIES
          </h1>
          <p className="text-base text-[#4A3428] leading-relaxed">
            I help businesses transition from manual bottlenecks to robust, engineered systems. Here are the three primary areas where I deliver dependable production solutions.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Cpu;
            const contactHref = `/contact?service=${service.id}`;

            return (
              <section
                key={service.id}
                id={service.id}
                className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D8C5AF] scroll-mt-24 shadow-sm"
              >
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#D8C5AF]" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#B58A64] uppercase font-bold tracking-wider">
                        SERVICE 0{index + 1}
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#241A15]">
                        {service.name}
                      </h2>
                    </div>
                  </div>

                  <a
                    href={siteConfig.contact.getWhatsappUrlForService(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A3428] hover:bg-[#241A15] text-[#F5F0E8] font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span>{service.ctaText} via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C5AF]" />
                  </a>
                </div>

                <div className="max-w-2xl mb-8">
                  <h3 className="font-display font-semibold text-xl text-[#241A15] mb-2">
                    &ldquo;{service.headline}&rdquo;
                  </h3>
                  <p className="text-sm text-[#4A3428] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#D8C5AF]/70">
                  {/* Capabilities */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      CAPABILITIES
                    </span>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Process */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      IMPLEMENTATION PROCESS
                    </span>
                    <ul className="space-y-2.5">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <span className="font-mono font-bold text-[#B58A64]">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <span className="font-mono text-xs text-[#241A15] font-bold uppercase tracking-wider block mb-4">
                      TANGIBLE DELIVERABLES
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
