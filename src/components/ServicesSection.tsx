import React from "react";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF]">
          {services.map((service) => (
            <div key={service.id} className="space-y-3">
              <h3 className="font-display font-bold text-base text-[#241A15] tracking-tight pb-2 border-b border-[#D8C5AF]/60">
                {service.name}
              </h3>
              <ul className="space-y-2">
                {service.whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3428] leading-relaxed">
                    <span className="text-[#B58A64] font-bold select-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
