import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 lg:pt-0 bg-[#FBFBFB] mx-2 sm:mx-4 lg:mx-6 mt-20 lg:mt-24 mb-4 sm:mb-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-200/70 shadow-lg">
      
      {/* Full Hero Image Background in Full Photographic Glory */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none">
        <img 
          src="/assets/hero_office.png" 
          alt="Nexus Bridge Alliance Executive Strategy & Global Collaboration"
          className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-[66%_center] select-none"
        />

        {/* Soft edge gradient that dissolves well before the dark-skinned man & team */}
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

      {/* Hero Foreground Content - Floating naturally over the window with maximum prestige */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-28">
        <div className="max-w-lg lg:max-w-xl">
          
          {/* Eyebrow: Pure Luxury Executive Typography (No Pulsing Dot Pill) */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
            <span className="w-6 h-[2px] bg-[#C4121A] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#C4121A] uppercase">
              People • Opportunities • Progress
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-extrabold text-[#111315] tracking-tight leading-[1.08] mb-6">
            Bridging<br />
            Businesses to<br />
            <span className="text-[#C4121A] drop-shadow-sm">Growth.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-lg font-normal">
            Nexus Bridge Alliance Ltd empowers businesses through innovative digital marketing, AI solutions, and strategic partnerships — attracting the right audience, converting them into customers, and driving real, sustainable growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
            <button
              onClick={onOpenContact}
              className="btn-primary-red inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold tracking-wide shadow-lg group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#focus"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium text-gray-800 bg-white/90 hover:bg-white border border-gray-300 hover:border-gray-400 shadow-sm transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Tagline & Direct Link to Leadership */}
          <div className="pt-4 border-t border-gray-300/70 max-w-md flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-gray-500 uppercase leading-relaxed">
              Stronger Partnerships • Brighter Possibilities
            </p>
            <a 
              href="#leadership" 
              className="text-xs font-semibold text-[#C4121A] hover:underline inline-flex items-center gap-1"
            >
              <span>Leadership & Founder</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
