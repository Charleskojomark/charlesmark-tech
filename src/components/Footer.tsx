"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const CURRENT_YEAR = 2026;

export function Footer() {

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#D8C5AF]/70 text-[#241A15] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#D8C5AF]/60">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#241A15] text-[#F5F0E8] flex items-center justify-center font-mono text-sm font-semibold tracking-tighter">
                CM
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-[#241A15] uppercase">
                  CHARLES MARK
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#4A3428]/80 uppercase">
                  AI SYSTEMS ENGINEER
                </span>
              </div>
            </div>

            <p className="text-[#4A3428] text-sm leading-relaxed max-w-sm pt-1">
              AI automation and backend systems for businesses that want less manual work and more reliable operations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="font-mono text-xs text-[#4A3428]/70 tracking-widest uppercase font-semibold">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/services" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  How I Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#4A3428] hover:text-[#241A15] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Rules */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-mono text-xs text-[#4A3428]/70 tracking-widest uppercase font-semibold">
              Direct Contact & Channels
            </span>
            <div className="space-y-2.5 text-sm">
              {/* WhatsApp Direct Row */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F5F0E8] border border-[#25D366]/40 hover:border-[#25D366] transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#25D366] text-[#F5F0E8] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✆
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-[#000000]">
                      {siteConfig.contact.phoneDisplay}
                    </span>
                    <span className="text-[10px] text-[#25D366] font-semibold">
                      WhatsApp • Direct Message
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428]/60 group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email Direct Row */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/80 hover:border-[#4A3428] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#000000] flex items-center justify-center text-[11px] text-[#F5F0E8] font-mono">
                    ✉
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#000000]">
                    {siteConfig.contact.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428]/60 group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn Row */}
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/80 hover:border-[#4A3428] transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 fill-[#0A66C2] flex-shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                  </svg>
                  <span className="font-mono text-xs font-semibold text-[#000000]">
                    {siteConfig.social.linkedin.username}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428]/60 group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Row */}
              <a
                href={siteConfig.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/80 hover:border-[#4A3428] transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 fill-[#000000] flex-shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span className="font-mono text-xs font-semibold text-[#000000]">
                    {siteConfig.social.github.username}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428]/60 group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Website Domain Row */}
              <a
                href={siteConfig.social.website.url}
                className="group flex items-center justify-between p-2.5 rounded-xl bg-[#F5F0E8] border border-[#D8C5AF]/80 hover:border-[#4A3428] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#000000] flex items-center justify-center text-[10px] text-[#F5F0E8] font-mono">
                    ✦
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#000000]">
                    {siteConfig.social.website.domain}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#4A3428]/60 group-hover:text-[#241A15] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#4A3428]">
          <p>© {CURRENT_YEAR} Charles Mark. Engineered with practical precision.</p>
        </div>
      </div>
    </footer>
  );
}
