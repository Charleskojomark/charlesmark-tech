import React from "react";
import { ArrowUpRight, Check, Sparkles, MessageCircle } from "lucide-react";
import { startingOffers } from "@/data/offers";
import { Card3D, Card3DItem } from "@/components/Card3D";

export function StartingOffers() {
  return (
    <section id="offers" className="py-12 sm:py-16 md:py-24 bg-[#FAF7F2] border-y border-[#D8C5AF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="font-mono text-xs text-[#B58A64] uppercase tracking-widest font-semibold block mb-2">
            ENGAGEMENT OPTIONS & TRANSPARENT PACKAGES
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
            STARTING OFFERS
          </h2>
          <p className="text-xs sm:text-sm text-[#4A3428] mt-2 leading-relaxed">
            Choose an engagement model that matches your operational stage. Clear deliverables, fixed quotes, and zero hidden licensing fees.
          </p>
        </div>

        {/* 3 Offer Cards Grid with 3D Perspective Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {startingOffers.map((offer) => (
            <Card3D
              key={offer.id}
              className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative ${
                offer.popular
                  ? "bg-[#F5F0E8] border-[#4A3428] shadow-xl hover:shadow-2xl ring-2 ring-[#B58A64]"
                  : "bg-[#F5F0E8] border-[#D8C5AF] hover:border-[#4A3428] shadow-sm hover:shadow-2xl"
              }`}
            >
              {offer.popular && (
                <Card3DItem translateZ={36} className="absolute -top-3.5 right-6 z-40">
                  <div className="px-3 py-1 rounded-full bg-[#241A15] text-[#F5F0E8] font-mono text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 text-[#B58A64]" />
                    <span>MOST POPULAR FOR TEAMS</span>
                  </div>
                </Card3DItem>
              )}

              <div>
                <Card3DItem translateZ={28} className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider">
                    {offer.badge}
                  </span>
                  <span className="font-mono text-[11px] text-[#4A3428]/80 bg-[#FAF7F2] px-2.5 py-0.5 rounded border border-[#D8C5AF]">
                    {offer.turnaround}
                  </span>
                </Card3DItem>

                <Card3DItem translateZ={20}>
                  <h3 className="font-display font-bold text-2xl text-[#241A15] mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-xs text-[#4A3428] leading-relaxed mb-5">
                    {offer.tagline}
                  </p>
                </Card3DItem>

                {/* Price Display with visible tag */}
                <Card3DItem translateZ={24} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] mb-6 shadow-xs">
                  <span className="font-mono text-[10px] text-[#4A3428]/70 uppercase tracking-widest font-semibold block mb-1">
                    STARTING INVESTMENT:
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-extrabold text-[#241A15]">
                    {offer.priceNote}
                  </div>
                  <span className="inline-block mt-2 font-mono text-[10px] text-[#B58A64] font-semibold bg-[#F5F0E8] px-2 py-0.5 rounded border border-[#D8C5AF]/60">
                    Transparent scoping • 100% code ownership
                  </span>
                </Card3DItem>

                {/* Included deliverables list */}
                <div className="space-y-3 mb-6">
                  <span className="font-mono text-[11px] text-[#241A15] font-bold uppercase tracking-wider block">
                    INCLUDED IN THIS SCOPE:
                  </span>
                  <ul className="space-y-2.5">
                    {offer.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-[#4A3428] leading-tight">
                        <div className="w-4 h-4 rounded-full bg-[#B58A64]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#241A15]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Direct WhatsApp Chat for Package */}
              <Card3DItem translateZ={30} className="pt-4 border-t border-[#D8C5AF]/70">
                <a
                  href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                    `Hi Charles, I'm interested in your ${offer.name} package.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-between p-3.5 rounded-xl font-display font-bold text-xs transition-all duration-200 shadow-sm active:scale-95 cursor-pointer ${
                    offer.popular
                      ? "bg-[#25D366] hover:bg-[#20ba59] text-white"
                      : "bg-[#241A15] text-[#F5F0E8] hover:bg-[#4A3428]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{offer.ctaText}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Card3DItem>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
