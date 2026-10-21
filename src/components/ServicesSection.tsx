import React from "react";
import {
  ArrowUpRight,
  Clock,
  Users,
  Cpu,
  Bot,
  Server,
  Cloud,
  Check,
} from "lucide-react";
import { services } from "@/data/services";
import { Card3D, Card3DItem } from "@/components/Card3D";

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Server: Server,
  Cloud: Cloud,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
              PRODUCTION ENGINEERING SERVICES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              ARCHITECTURAL CAPABILITIES & ENGAGEMENTS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            From multi-agent architectures and resilient backend services to containerized cloud infrastructure, every system is engineered for production scale and durability.
          </p>
        </div>

        {/* 3 Outcome-First Service Cards with 3D Perspective Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Cpu;

            return (
              <Card3D
                key={service.id}
                className="group flex flex-col justify-between bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#D8C5AF] hover:border-[#4A3428] shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon + Service Counter */}
                  <Card3DItem translateZ={30} className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#241A15] text-[#F5F0E8] flex items-center justify-center group-hover:bg-[#4A3428] transition-colors shadow-sm">
                      <Icon className="w-6 h-6 text-[#D8C5AF]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#8C6239] tracking-wider">
                      SERVICE 0{index + 1}
                    </span>
                  </Card3DItem>

                  {/* Title & Core Outcome */}
                  <Card3DItem translateZ={20} className="space-y-2 mb-5">
                    <span className="font-mono text-xs font-bold text-[#B58A64] tracking-wider uppercase block">
                      {service.name}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#241A15] leading-snug">
                      {service.headline}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{service.outcome}</span>
                    </div>
                  </Card3DItem>

                  {/* Deliverables Checklist - Simple Direct Bullet Points */}
                  <div className="space-y-2.5 my-6">
                    {service.whatYouGet.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#241A15]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Timeline & Direct Link */}
                <div className="pt-4 border-t border-[#D8C5AF]/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#4A3428]">
                    <Clock className="w-3.5 h-3.5 text-[#B58A64]" />
                    <span>{service.typicalTimeline}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#241A15] hover:text-[#B58A64] transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
