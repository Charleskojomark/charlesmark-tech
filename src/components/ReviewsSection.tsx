"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Star,
  ShieldCheck,
  Quote,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Repeat testimonials so the track seamlessly loops infinitely
  const marqueeCards = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Only auto-advance when user is not actively dragging
      if (!isDownRef.current && container) {
        // Continuous smooth advancement (~35px per sec)
        container.scrollLeft += delta * 0.035;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += halfWidth;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <section
      id="reviews"
      aria-label="Client & Partner Reviews"
      className="py-14 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#FAF7F2]/60 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-[#B58A64]" />
              <span className="font-mono text-[11px] font-bold text-[#4A3428] uppercase tracking-wider">
                VERIFIED COLLABORATOR & CLIENT REVIEWS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROVEN IN PRODUCTION.
            </h2>
            <p className="text-sm sm:text-base text-[#4A3428] font-sans mt-2 max-w-xl leading-relaxed">
              Direct feedback from CTOs, product designers, and innovation leaders on engineering
              rigor, clean architectures, and shipping on schedule.
            </p>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8C5AF] shadow-2xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-current text-amber-500"
                  />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-[#241A15] ml-1">
                5.0
              </span>
              <span className="font-mono text-[10px] text-[#4A3428]/70">
                / 5.0
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#241A15] text-[#F5F0E8] border border-[#B58A64]/40 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[11px] font-medium tracking-wide">
                100% Verified Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Horizontal Interactive Marquee Container */}
      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)] select-none"
        aria-live="off"
      >
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 sm:gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3 px-4 sm:px-8 touch-pan-x ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {marqueeCards.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="group relative flex flex-col justify-between w-[320px] sm:w-[460px] md:w-[500px] flex-shrink-0 p-6 sm:p-7 rounded-3xl bg-[#1C1410] text-[#F5F0E8] border border-[#B58A64]/40 hover:border-[#B58A64] shadow-xl hover:shadow-[0_12px_40px_rgba(181,138,100,0.15)] transition-all duration-300"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-[#B58A64]/10 -rotate-12 pointer-events-none" />

              <div>
                {/* Top Row: 5 Stars + Verified Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>VERIFIED REVIEW</span>
                  </div>
                </div>

                {/* Review Quote Body */}
                <p className="text-xs sm:text-sm text-[#F5F0E8] leading-relaxed font-sans font-normal relative z-10 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Outcome Callout Pill */}
                {review.outcome && (
                  <div className="mt-4 p-2.5 rounded-xl bg-[#241A15]/90 border border-[#B58A64]/30 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-[11px] text-[#D8C5AF] leading-tight">
                      <strong className="text-[#B58A64] font-semibold">Outcome:</strong>{" "}
                      {review.outcome}
                    </span>
                  </div>
                )}
              </div>

              {/* Author Attribution Footer */}
              <div className="flex items-center gap-3.5 pt-4 mt-4 border-t border-[#4A3428]/80">
                {/* Author Initials Avatar with Luxury Gradient */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B58A64] via-[#6e4e37] to-[#241A15] text-[#FAF7F2] font-display font-bold text-sm sm:text-base flex items-center justify-center shadow-md ring-2 ring-[#B58A64]/50 flex-shrink-0">
                  {review.initials || review.author.slice(0, 2).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#F5F0E8] tracking-tight truncate">
                      {review.author}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                  </div>
                  <p className="font-mono text-[11px] sm:text-xs text-[#D8C5AF]/90 truncate">
                    {review.role} •{" "}
                    <span className="text-[#B58A64] font-medium">
                      {review.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-6">
        <p className="text-[11px] font-mono text-[#4A3428]/70">
          Swipe or drag to explore freely • Continuously auto-scrolling
        </p>
      </div>
    </section>
  );
}
