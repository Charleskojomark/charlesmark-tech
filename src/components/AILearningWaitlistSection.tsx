"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Gamepad2,
  Boxes,
  Zap,
  Check,
  Send,
  Loader2,
  ArrowUpRight,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const LEARNING_TRACKS = [
  "3D Story Quests & Visual Worlds",
  "Autonomous Agentic Systems",
  "Neural Networks & RAG Vectors",
  "All of the Above",
];

export function AILearningWaitlistSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(LEARNING_TRACKS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          interests: selectedTrack,
          botField: "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not submit to waitlist. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      aria-label="3D AI Learning App Waitlist"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#150F0B] via-[#1C1410] to-[#150F0B] text-[#F5F0E8] border-y border-[#4A3428] relative scroll-mt-16 overflow-hidden"
    >
      {/* Ambient 3D Cosmic Glow Background */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#B58A64]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241A15] border border-[#B58A64]/50 mb-4 shadow-lg">
            <Flame className="w-3.5 h-3.5 text-[#B58A64] animate-pulse" />
            <span className="font-mono text-[11px] font-bold text-[#D8C5AF] uppercase tracking-wider">
              NEW PRODUCT IN DEVELOPMENT • EARLY ACCESS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F0E8] tracking-tight leading-[1.1]">
            LEARN AI IN A 3D STORY-BASED{" "}
            <span className="text-[#B58A64] underline decoration-[#B58A64]/40 underline-offset-8">
              VIRTUAL WORLD
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#D8C5AF] mt-4 leading-relaxed max-w-2xl mx-auto">
            I am building an immersive platform to make mastering AI intuitive, visual, and engaging for everyone. Explore interactive neural spaces, solve narrative engineering quests, and build real intelligent systems.
          </p>
        </div>

        {/* 2-Column Grid: Feature Pillars (Left) + Waitlist Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 3 Experiential Pillars */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            {/* Pillar 1 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#241A15]/90 border border-[#B58A64]/30 hover:border-[#B58A64]/70 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58A64]/20 border border-[#B58A64]/40 text-[#B58A64] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F0E8]">
                    Story-Driven Quests & Narrative Worlds
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C5AF] mt-1 leading-relaxed">
                    Say goodbye to dry technical manuals. Learn AI concepts by steering avatars through narrative challenges, unlocking neural artifacts, and solving simulation bottlenecks.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#241A15]/90 border border-[#B58A64]/30 hover:border-[#B58A64]/70 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58A64]/20 border border-[#B58A64]/40 text-[#B58A64] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Boxes className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F0E8]">
                    Tangible 3D Interactive Visualizer
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C5AF] mt-1 leading-relaxed">
                    Step inside vector embeddings, watch multi-agent supervisors orchestrate tools in real time, and inspect data flows in an intuitive 3-dimensional canvas.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#241A15]/90 border border-[#B58A64]/30 hover:border-[#B58A64]/70 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58A64]/20 border border-[#B58A64]/40 text-[#B58A64] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F0E8]">
                    Zero-to-Hero Applied Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C5AF] mt-1 leading-relaxed">
                    Engineered for everyone from absolute beginners to professional developers who want to command autonomous agents, RAG pipelines, and cloud backend models.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Backer Perks Banner */}
            <div className="p-4 rounded-2xl bg-[#150F0B] border border-[#B58A64]/40 flex items-center justify-between gap-3 text-xs font-mono text-[#D8C5AF]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B58A64] flex-shrink-0" />
                <span>Founding Member Badge & Closed Beta Whitelist</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                100% FREE
              </span>
            </div>

          </div>

          {/* Right Column: Waitlist Signup Form Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-9 rounded-3xl bg-[#241A15] border-2 border-[#B58A64]/40 shadow-2xl relative overflow-hidden">
              
              {/* Subtle Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#B58A64]/10 rounded-full blur-2xl pointer-events-none" />

              {submitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-950/80 border-2 border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                      YOU&apos;RE ON THE PRIORITY LIST
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F0E8]">
                      Welcome to the 3D AI World!
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D8C5AF] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5F0E8]">{name || "Builder"}</strong>. Your spot has been secured. We will notify you at <strong className="text-[#F5F0E8]">{email}</strong> the moment the closed beta servers open.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                        `Hi Charles, I just joined the waitlist for your 3D story-based AI learning app! Looking forward to testing it.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Connect with Charles</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                        setName("");
                      }}
                      className="text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] underline cursor-pointer p-2"
                    >
                      Add another email
                    </button>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                      PRIORITY ACCESS PASS
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F0E8] tracking-tight">
                      Join the Closed Beta Waitlist
                    </h3>
                    <p className="text-xs text-[#D8C5AF] mt-1">
                      Be among the first to experience story-based virtual AI learning.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="waitlist-email"
                      className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs sm:text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="waitlist-name"
                      className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-1"
                    >
                      Your Name (Optional)
                    </label>
                    <input
                      id="waitlist-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1410] border border-[#4A3428] focus:border-[#B58A64] focus:ring-1 focus:ring-[#B58A64] text-xs sm:text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-all"
                    />
                  </div>

                  {/* Track Interest Selector */}
                  <div>
                    <span className="block font-mono text-[11px] text-[#D8C5AF] uppercase tracking-wider mb-2">
                      What excites you most?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {LEARNING_TRACKS.map((track) => (
                        <button
                          key={track}
                          type="button"
                          onClick={() => setSelectedTrack(track)}
                          className={`px-3 py-2 rounded-xl text-left text-xs font-mono transition-all cursor-pointer border ${
                            selectedTrack === track
                              ? "bg-[#B58A64] text-[#150F0B] border-[#B58A64] font-bold shadow-xs"
                              : "bg-[#1C1410] text-[#D8C5AF] border-[#4A3428] hover:border-[#B58A64]/60"
                          }`}
                        >
                          {track}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#B58A64] hover:bg-[#C99C74] text-[#150F0B] font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#150F0B]" />
                        <span>Securing Your Spot...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#150F0B]" />
                        <span>Claim Early Access Pass</span>
                        <ArrowUpRight className="w-4 h-4 text-[#150F0B]" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#D8C5AF]/70 font-mono">
                    Zero spam. We respect your inbox. Unsubscribe anytime.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
