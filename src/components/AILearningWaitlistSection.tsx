"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Loader2, Sparkles, Send, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

interface QuestionOption {
  label: string;
}

const QUESTIONS = [
  {
    id: 1,
    key: "q1_goal",
    title: "1. What do you most want to achieve with AI?",
    options: [
      "Understand AI but don't know where to start",
      "Use AI in my job or business",
      "Build AI applications",
      "Improve my career opportunities",
    ],
  },
  {
    id: 2,
    key: "q2_current_learning",
    title: "2. How do you currently learn AI?",
    options: [
      "YouTube videos",
      "Online courses",
      "ChatGPT or other AI tools",
      "Articles and documentation",
      "I haven't started yet",
    ],
  },
  {
    id: 3,
    key: "q3_biggest_challenge",
    title: "3. What's your biggest challenge when learning AI?",
    options: [
      "AI concepts are difficult to understand",
      "Learning gets boring",
      "I don't know what to learn next",
      "I struggle to apply what I learn",
      "I don't have enough time",
      "I have no major difficulty",
    ],
  },
  {
    id: 4,
    key: "q4_interactive_3d",
    title: "4. Would you try learning AI through an interactive 3D world with stories, missions, and challenges?",
    options: [
      "Absolutely — I'd try it",
      "Maybe, if it genuinely helps me learn",
      "I prefer traditional videos or courses",
    ],
  },
  {
    id: 5,
    key: "q5_pricing_preference",
    title: "5. If it helped you learn faster and apply AI skills, what would you prefer?",
    options: [
      "I'd try a free version first",
      "I'd pay for a valuable course",
      "I'd prefer a monthly subscription",
      "My employer or school should pay",
    ],
  },
];

export function AILearningWaitlistSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1_goal: "",
    q2_current_learning: "",
    q3_biggest_challenge: "",
    q4_interactive_3d: "",
    q5_pricing_preference: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [botField, setBotField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const totalSteps = 6;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const handleSelectOption = (key: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [key]: option }));
    setErrorMsg(null);
  };

  const handleNext = () => {
    // Validate current step
    if (currentStep <= 5) {
      const currentQ = QUESTIONS[currentStep - 1];
      if (!answers[currentQ.key]) {
        setErrorMsg("Please select an option to continue.");
        return;
      }
    }
    setErrorMsg(null);
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setErrorMsg(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e?: React.FormEvent, submitWithoutEmail = false) => {
    if (e) e.preventDefault();

    if (!submitWithoutEmail && !email) {
      setErrorMsg("Please provide your email address for early access, or submit anonymously.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const payload = {
      ...answers,
      name: name.trim(),
      email: submitWithoutEmail ? "" : email.trim().toLowerCase(),
      q6_early_access_email: submitWithoutEmail ? "" : email.trim().toLowerCase(),
      botField,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit response.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Could not submit your responses. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      aria-label="AI Learning Research & Waitlist"
      className="py-0 text-[#F5F0E8] relative w-full"
    >
      <div className="w-full">
        <div className="p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#1C1410] border border-[#B58A64]/40 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#241A15] border border-[#B58A64]/40 text-[#B58A64] flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-[#B58A64] uppercase tracking-wider block mb-1">
                  RESPONSES RECORDED
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F0E8]">
                  {email ? "You're On The Waitlist!" : "Thank You For Your Feedback!"}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#D8C5AF] leading-relaxed max-w-md mx-auto">
                {email ? (
                  <>
                    Thank you, <strong className="text-[#F5F0E8]">{name || "Builder"}</strong>. Your research responses have been synchronized with our database. We have sent a confirmation email to <strong className="text-[#F5F0E8]">{email}</strong> and will notify you when closed beta begins.
                  </>
                ) : (
                  <>
                    Your research answers have been saved. Your insights will help shape the 3D virtual AI learning world to make mastering AI effortless and practical.
                  </>
                )}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2347082367382?text=${encodeURIComponent(
                    `Hi Charles, I just completed the AI learning research for the 3D virtual world! Looking forward to testing it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Connect on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setAnswers({
                      q1_goal: "",
                      q2_current_learning: "",
                      q3_biggest_challenge: "",
                      q4_interactive_3d: "",
                      q5_pricing_preference: "",
                    });
                    setEmail("");
                    setName("");
                  }}
                  className="text-xs font-mono text-[#D8C5AF] hover:text-[#F5F0E8] underline cursor-pointer p-2"
                >
                  Fill research again
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Survey Form */
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#241A15] border border-[#B58A64]/40 text-[#B58A64] text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span>AI Learning Research</span>
                    <span className="text-[#D8C5AF]/60">•</span>
                    <span>~60 seconds</span>
                  </div>

                  <span className="font-mono text-xs font-semibold text-[#D8C5AF]">
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>

                <h1 className="font-display font-bold text-base sm:text-2xl text-[#F5F0E8] tracking-tight leading-snug">
                  Help us understand how beginners learn AI and what could make it easier.
                </h1>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[#241A15] rounded-full overflow-hidden mt-3 border border-[#4A3428]/50">
                  <div
                    className="h-full bg-gradient-to-r from-[#B58A64] to-[#D8C5AF] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Honeypot anti-spam field */}
              <input
                type="text"
                name="botField"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Steps 1 to 5: Multiple Choice Questions */}
              {currentStep >= 1 && currentStep <= 5 && (() => {
                const q = QUESTIONS[currentStep - 1];
                const currentAnswer = answers[q.key];

                return (
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="font-display font-semibold text-sm sm:text-lg text-[#F5F0E8] leading-snug">
                      {q.title}
                    </h2>

                    <div className="space-y-2 sm:space-y-2.5">
                      {q.options.map((option, idx) => {
                        const isSelected = currentAnswer === option;

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectOption(q.key, option)}
                            className={`w-full text-left px-3.5 py-2.5 sm:px-4 sm:py-3.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? "bg-[#241A15] border-2 border-[#B58A64] text-[#FFFFFF] shadow-sm"
                                : "bg-[#150F0B] border border-[#B58A64]/30 text-[#D8C5AF] hover:border-[#B58A64]/70 hover:text-[#F5F0E8]"
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-sans font-medium leading-snug">
                              {option}
                            </span>

                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md sm:rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-[#B58A64] border-[#B58A64] text-[#150F0B]"
                                  : "border-[#4A3428] bg-transparent"
                              }`}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              {/* Step 6: Early Access Email & Name */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="font-display font-semibold text-base sm:text-lg text-[#F5F0E8] leading-snug">
                      6. Want early access when we launch?
                    </h2>
                    <p className="text-xs text-[#D8C5AF] mt-1">
                      Only provide your email if you&apos;d like to hear about early access.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div>
                      <label
                        htmlFor="early-access-name"
                        className="block text-xs font-mono font-medium text-[#D8C5AF] mb-1.5"
                      >
                        Your Name <span className="text-[#B58A64]/70">(Optional)</span>
                      </label>
                      <input
                        id="early-access-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex"
                        className="w-full px-4 py-3 rounded-xl bg-[#150F0B] border border-[#B58A64]/30 focus:border-[#B58A64] text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="early-access-email"
                        className="block text-xs font-mono font-medium text-[#D8C5AF] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="early-access-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#150F0B] border border-[#B58A64]/30 focus:border-[#B58A64] text-xs sm:text-sm text-[#F5F0E8] placeholder-[#D8C5AF]/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleSubmit(undefined, false)}
                      className="w-full py-2.5 sm:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-[#B58A64] hover:bg-[#c99d75] text-[#150F0B] font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[0_4px_20px_rgba(181,138,100,0.3)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Saving Responses...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Research & Join Early Access</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleSubmit(undefined, true)}
                      className="w-full py-2 px-3 text-xs font-mono text-[#D8C5AF]/70 hover:text-[#F5F0E8] transition-colors cursor-pointer text-center"
                    >
                      Submit research without joining early access
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Controls (Steps 1 to 5) */}
              {currentStep <= 5 && (
                <div className="pt-2 flex items-center justify-between gap-2.5 sm:gap-3 border-t border-[#4A3428]/40">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      currentStep === 1
                        ? "opacity-30 cursor-not-allowed text-[#D8C5AF]"
                        : "text-[#D8C5AF] hover:text-[#FFFFFF] hover:bg-[#241A15]"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#B58A64] hover:bg-[#c99d75] text-[#150F0B] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{currentStep === 5 ? "Continue" : "Next"}</span>
                    <span className="hidden sm:inline">{currentStep === 5 ? " to Email" : " Question"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Bottom Assurance */}
              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-[#D8C5AF]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B58A64] flex-shrink-0" />
                <span>Your responses are encrypted and directly synchronized with our research database. Zero spam.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
