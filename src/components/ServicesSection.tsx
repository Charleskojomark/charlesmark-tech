import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cpu, Bot, Server } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Server: Server,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#4A3428]/80 uppercase tracking-widest font-semibold block mb-2">
              CORE SERVICES & OFFERINGS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-[#241A15] tracking-tight">
              ENGINEERED SOLUTIONS FOR APPLIED AI & BACKENDS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            I build practical, durable systems tailored to your workflows and infrastructure — avoiding fragile demos and unnecessary complexity.
          </p>
        </div>

        {/* 3 Visually Distinct Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Cpu;
            // Direct WhatsApp link for instant messaging
            const whatsappServiceUrl = siteConfig.contact.getWhatsappUrlForService(service.name);

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#D8C5AF] hover:border-[#4A3428] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual accent badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors shadow-sm">
                    <Icon className="w-6 h-6 text-[#D8C5AF]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#4A3428]/70 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#D8C5AF]/60">
                    SERVICE 0{index + 1}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-4 mb-8">
                  <span className="font-mono text-xs font-bold text-[#B58A64] tracking-wider uppercase block">
                    {service.name}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15] leading-snug">
                    {service.headline}
                  </h3>
                  <p className="text-sm text-[#4A3428] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-[#D8C5AF]/60">
                    <span className="font-mono text-xs text-[#241A15] font-semibold uppercase tracking-wider block mb-3">
                      CAPABILITIES INCLUDED
                    </span>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5 text-xs text-[#4A3428] leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-[#B58A64] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Direct CTA */}
                <div className="pt-6 border-t border-[#D8C5AF]/70">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full inline-flex items-center justify-between p-3.5 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF] text-[#241A15] font-medium text-xs hover:bg-[#241A15] hover:text-[#F5F0E8] hover:border-[#241A15] transition-all duration-200"
                  >
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      <span>{service.ctaText} via WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#4A3428] group-hover/btn:text-[#D8C5AF] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
