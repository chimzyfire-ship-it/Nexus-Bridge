import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 lg:pt-0 bg-[#FBFBFB] mx-2 sm:mx-4 lg:mx-6 mt-20 lg:mt-24 mb-4 sm:mb-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-200/70 shadow-lg">
      
      {/* Background Hero Image with Ultra-Refined Feather Edge - Preserving Man's Face in Full Crisp Clarity */}
      <div className="absolute top-0 right-0 w-full lg:w-[64%] xl:w-[67%] h-full z-0 overflow-hidden select-none">
        <img 
          src="/assets/hero_office.png" 
          alt="Nexus Bridge Alliance Executive Strategy & Global Collaboration"
          className="w-full h-full object-cover object-[78%_center] select-none opacity-85 lg:opacity-100"
        />

        {/* Minimal edge vignette that dissolves BEFORE reaching the executives */}
        <div className="absolute inset-0 hero-gradient-mask pointer-events-none" />

        {/* Brand Text on Wall (Frameless with thin vertical accent, directly under wall logo as in Inspiration) */}
        <div className="hidden lg:flex absolute top-[28%] right-10 xl:right-14 z-10 flex-col items-start select-none pointer-events-none">
          <div className="w-8 h-[2px] bg-[#C4121A] mb-3.5" />
          <div className="flex items-stretch gap-3 pl-0.5">
            <div className="w-[1.5px] bg-white/25 rounded-full" />
            <div className="flex flex-col text-xs sm:text-sm font-normal text-gray-200/90 space-y-1 tracking-wider">
              <span>Ideas</span>
              <span>Partnerships</span>
              <span className="font-semibold text-white">Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Foreground Content with Glassmorphic Frosted Shield for Pristine Readability */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-xl lg:max-w-[570px] xl:max-w-[620px] bg-white/85 lg:bg-[#FBFBFB]/90 backdrop-blur-xl p-7 sm:p-9 lg:p-11 rounded-3xl border border-white/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.07)] relative">
          
          {/* Eyebrow / Kicker with Animated Pulse */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50/90 border border-red-100/70 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C4121A] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#C4121A] uppercase">
              Digital Marketing • AI Solutions • Growth
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-[#111315] tracking-tight leading-[1.08] mb-5">
            Bridging<br />
            Businesses to<br />
            <span className="text-[#C4121A] drop-shadow-sm">Growth.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-7 font-normal">
            Nexus Bridge Alliance Ltd empowers businesses through innovative digital marketing, AI solutions, and strategic partnerships — attracting the right audience, converting them into customers, and driving real, sustainable growth.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-7">
            <button
              onClick={onOpenContact}
              className="btn-primary-red inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold tracking-wide shadow-lg group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#focus"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-gray-800 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 shadow-sm transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Tagline & Quick Verified Channels Bar */}
          <div className="pt-5 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                Official Links:
              </span>
            </div>

            {/* Quick Glassmorphic Social / Leadership Access Pills */}
            <div className="flex items-center gap-2">
              {/* Founder Abraham Munie Abdullahi */}
              <a 
                href="https://www.linkedin.com/in/abraham-munie-abdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                title="Abraham Munie Abdullahi — Founder & Managing Director"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#0A66C2] hover:text-white text-gray-800 text-[11px] font-semibold transition-all border border-gray-200/80 shadow-sm group/founder"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2] group-hover/founder:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Founder</span>
              </a>

              {/* Company LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/nxrthbridgeagency/"
                target="_blank"
                rel="noreferrer"
                title="Nexus Bridge Alliance on LinkedIn"
                className="p-1.5 rounded-full bg-white/90 hover:bg-[#0A66C2] hover:text-white text-gray-700 transition-all border border-gray-200/80 shadow-sm group/cli"
                aria-label="Nexus Bridge Alliance Company LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current text-gray-700 group-hover/cli:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/nexusbridge.allianceltd?stkn=MTNyZXlnczMyZzN5NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                title="Nexus Bridge Alliance on Instagram"
                className="p-1.5 rounded-full bg-white/90 hover:bg-[#E1306C] hover:text-white text-gray-700 transition-all border border-gray-200/80 shadow-sm group/cig"
                aria-label="Nexus Bridge Alliance Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 text-gray-700 group-hover/cig:text-white transition-colors" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@nexusbridge.allianceltd?_r=1&_t=ZS-99yiXygthmU"
                target="_blank"
                rel="noreferrer"
                title="Nexus Bridge Alliance on TikTok"
                className="p-1.5 rounded-full bg-white/90 hover:bg-black hover:text-white text-gray-700 transition-all border border-gray-200/80 shadow-sm group/ctt"
                aria-label="Nexus Bridge Alliance TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current text-gray-700 group-hover/ctt:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.96-4.49V8.82a8.28 8.28 0 0 0 4.84 1.55V6.92a4.85 4.85 0 0 1-1.03-.23z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
