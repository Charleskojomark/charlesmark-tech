"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  Maximize2,
  X,
} from "lucide-react";
import { certifications, Certification } from "@/data/certifications";

const CATEGORIES = [
  "All",
  "AI Agents & LLMs",
  "Backend & Cloud",
  "Applied AI & MLOps",
  "Forward Deployed & Systems",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export function CertificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);

  const filteredCerts =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  const handleCopy = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="certifications"
      aria-label="Verified Professional Certifications"
      className="py-14 sm:py-20 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8C5AF]/70 pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C5AF] mb-3 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#B58A64]" />
              <span className="font-mono text-[11px] font-bold text-[#4A3428] uppercase tracking-wider">
                VERIFIED CREDENTIALS & SPECIALIZATIONS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#241A15] tracking-tight">
              PROVABLE ENGINEERING RIGOR.
            </h2>
            <p className="text-sm sm:text-base text-[#4A3428] font-sans mt-2 max-w-2xl leading-relaxed">
              Every specialization, degree, and engineering certification backed by live institutional verification links from DeepLearning.AI, Meta, AWS, and Educative.
            </p>
          </div>

          {/* Stat Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#241A15] text-[#F5F0E8] border border-[#B58A64]/40 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#B58A64]" />
              <div className="text-left">
                <span className="font-mono text-xs font-bold text-[#F5F0E8] block">
                  7 Verified Credentials
                </span>
                <span className="font-mono text-[10px] text-[#D8C5AF]/80 block">
                  100% Verifiable Online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length;
            if (count === 0) return null;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#241A15] text-[#F5F0E8] shadow-sm border border-[#241A15]"
                    : "bg-[#FAF7F2] text-[#4A3428] border border-[#D8C5AF]/70 hover:border-[#B58A64] hover:text-[#241A15]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? "bg-[#FAF7F2]/20 text-[#FAF7F2]"
                      : "bg-[#D8C5AF]/40 text-[#4A3428]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isCopied = copiedId === cert.credentialId;

            return (
              <div
                key={cert.id}
                className="flex flex-col justify-between rounded-3xl bg-[#FAF7F2] border border-[#D8C5AF] hover:border-[#B58A64] hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div>
                  {/* Certificate Preview Thumbnail */}
                  <div
                    onClick={() => setActiveModalCert(cert)}
                    className="relative w-full aspect-[16/10] bg-[#241A15] border-b border-[#D8C5AF]/60 overflow-hidden cursor-pointer group/thumb"
                  >
                    <Image
                      src={cert.imageSrc}
                      alt={`${cert.title} Certificate`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/80 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-end justify-between p-3.5">
                      <span className="font-mono text-[11px] text-[#FAF7F2] font-semibold flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#B58A64]" />
                        <span>Preview Certificate</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#D8C5AF] px-2 py-0.5 rounded bg-[#241A15]/80">
                        Click to enlarge
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    {/* Header: Issuer Badge + Direct Verification Link */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#241A15] text-[#F5F0E8] border border-[#4A3428]">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D8C5AF]">
                          {cert.issuer}
                        </span>
                        {cert.partner && (
                          <>
                            <span className="text-[#B58A64] text-[9px]">•</span>
                            <span className="font-mono text-[10px] text-[#FAF7F2]">
                              {cert.partner}
                            </span>
                          </>
                        )}
                      </div>

                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#B58A64] hover:text-[#241A15] transition-colors"
                        title="Open verification page in new tab"
                      >
                        <span>Verify ↗</span>
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-[#241A15] leading-snug tracking-tight mb-2">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#4A3428] leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#241A15]/5 text-[#38261D] border border-[#D8C5AF]/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metadata & Verification Button */}
                <div className="p-6 pt-3 border-t border-[#D8C5AF]/60 space-y-3 bg-[#FAF7F2]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#4A3428]">
                    <span>Issued: <strong className="text-[#241A15]">{cert.issueDate}</strong></span>

                    <button
                      type="button"
                      onClick={(e) => handleCopy(cert.credentialId, e)}
                      className="inline-flex items-center gap-1 hover:text-[#241A15] transition-colors cursor-pointer"
                      title="Copy Credential ID"
                    >
                      <span className="truncate max-w-[120px] font-mono text-[10px]">
                        ID: {cert.credentialId.slice(0, 8)}...
                      </span>
                      {isCopied ? (
                        <Check className="w-3 h-3 text-[#B58A64]" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-60" />
                      )}
                    </button>
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#241A15] hover:bg-[#38261D] text-[#FAF7F2] font-mono text-xs font-semibold tracking-wide transition-all shadow-2xs active:scale-[0.99]"
                  >
                    <span>Verify Credential on {cert.issuer}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B58A64]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Assurance Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C5AF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B58A64] flex-shrink-0" />
            <p className="text-xs font-mono text-[#38261D] leading-relaxed">
              <strong>All 7 Credentials Verified:</strong> Authenticated directly by DeepLearning.AI, Coursera / Meta, Udacity / AWS, and Educative.io via their official public verification registries.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/markcharleskojo/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#241A15] hover:text-[#B58A64] transition-colors flex-shrink-0"
          >
            <span>View on LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Full-Screen Certificate Modal Preview */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D8C5AF] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#241A15] text-[#FAF7F2] border-b border-[#4A3428]">
              <div>
                <span className="font-mono text-[10px] text-[#B58A64] uppercase tracking-wider block">
                  {activeModalCert.issuer} {activeModalCert.partner ? `• ${activeModalCert.partner}` : ""}
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#F5F0E8]">
                  {activeModalCert.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close Preview"
                className="p-1.5 rounded-full hover:bg-white/10 text-[#D8C5AF] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full aspect-[16/11] bg-black">
              <Image
                src={activeModalCert.imageSrc}
                alt={`${activeModalCert.title} Full Certificate`}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:px-6 bg-[#FAF7F2] border-t border-[#D8C5AF]">
              <span className="font-mono text-xs text-[#4A3428]">
                Credential ID: <strong className="text-[#241A15]">{activeModalCert.credentialId}</strong>
              </span>
              <a
                href={activeModalCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#241A15] hover:bg-[#38261D] text-[#FAF7F2] font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Verify Live Certificate</span>
                <ExternalLink className="w-4 h-4 text-[#B58A64]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
