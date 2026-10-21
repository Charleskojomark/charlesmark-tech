"use client";

import React, { useState } from "react";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

export function AILearningWaitlistSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
          interests: "3D Story-Based Virtual AI Learning",
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
      aria-label="3D AI Learning Waitlist"
      className="py-0 text-[#F5F0E8] relative w-full"
    >
      <div className="w-full">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#1C1410] border border-[#B58A64]/40 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#241A15] border border-[#B58A64]/40 text-[#B58A64] flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                  YOU&apos;RE ON THE WAITLIST
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F0E8]">
                  Spot Reserved
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed">
                Thank you, <strong className="text-[#F5F0E8]">{name || "Builder"}</strong>. We will notify you at <strong className="text-[#F5F0E8]">{email}</strong> as soon as closed beta opens.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                    `Hi Charles, I just joined the waitlist for your 3D story-based AI learning app! Looking forward to testing it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Connect on WhatsApp</span>
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
            /* Form State - Straight to the Point */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1.5">
                  EARLY ACCESS
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F0E8] tracking-tight">
                  Join the 3D Virtual AI Learning Waitlist
                </h1>
                <p className="text-xs sm:text-sm text-[#D8C5AF] mt-2 leading-relaxed">
                  Be among the first to experience 3D story-based AI virtual learning when closed beta opens.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="waitlist-name"
                    className="block text-xs font-mono font-medium text-[#D8C5AF] mb-1.5"
                  >
                    Your Name <span className="text-[#B58A64]/70">(Optional)</span>
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full px-4 py-3 rounded-xl bg-[#150F0B] border border-[#B58A64]/30 focus:border-[#B58A64] text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="waitlist-email"
                    className="block text-xs font-mono font-medium text-[#D8C5AF] mb-1.5"
                  >
                    Email Address <span className="text-[#B58A64]">*</span>
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#150F0B] border border-[#B58A64]/30 focus:border-[#B58A64] text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#B58A64] hover:bg-[#9c7450] disabled:opacity-50 text-[#150F0B] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap min-h-[46px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reserving Your Spot...</span>
                  </>
                ) : (
                  <span>Join Waitlist</span>
                )}
              </button>

              <p className="text-[11px] font-mono text-center text-[#D8C5AF]/60">
                100% Free • No spam • Unsubscribe anytime
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
