import React from "react";
import { ArrowUpRight, Clock, Users, Cpu, Bot, Server, Check, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { Card3D, Card3DItem } from "@/components/Card3D";

const ICON_MAP = {
  Cpu: Cpu,
  Bot: Bot,
  Server: Server,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 md:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
              SERVICES WRITTEN AS BUSINESS OUTCOMES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              HOW WE CAN WORK TOGETHER
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4A3428] max-w-md leading-relaxed">
            Every engagement delivers durable, self-hosted or dedicated systems designed around your team&apos;s real operational workflow.
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
                    <span className="font-mono text-xs font-semibold text-[#4A3428]/70 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#D8C5AF]/60 shadow-xs">
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
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.outcome}</span>
                    </div>
                  </Card3DItem>

                  {/* Who It's For */}
                  <div className="p-3.5 rounded-2xl bg-[#F5F0E8] border border-[#D8C5AF]/70 mb-5">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-wider mb-1">
                      <Users className="w-3.5 h-3.5 text-[#B58A64]" />
                      <span>WHO IT&apos;S FOR:</span>
                    </div>
                    <p className="text-xs text-[#4A3428] leading-relaxed">
                      {service.whoItsFor}
                    </p>
                  </div>

                  {/* What You Get Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-wider block">
                      WHAT YOU GET:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#4A3428] leading-tight">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#B58A64]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#4A3428]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Timeline */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#4A3428] pb-5 border-b border-[#D8C5AF]/60">
                    <Clock className="w-3.5 h-3.5 text-[#B58A64]" />
                    <span>Typical turnaround: <strong>{service.typicalTimeline}</strong></span>
                  </div>
                </div>

                {/* Primary CTA Button: Direct WhatsApp Chat */}
                <Card3DItem translateZ={28} className="pt-5 space-y-2">
                  <a
                    href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                      `Hi Charles, I'd like to discuss ${service.name} for my business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full inline-flex items-center justify-between p-3.5 rounded-xl bg-[#241A15] text-[#F5F0E8] hover:bg-[#25D366] hover:text-white font-medium text-xs transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="font-semibold flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>{service.ctaText}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C5AF] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Card3DItem>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
