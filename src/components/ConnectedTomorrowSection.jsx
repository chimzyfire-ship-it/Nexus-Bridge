import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ConnectedTomorrowSection({ onOpenContact }) {
  return (
    <section className="relative overflow-hidden bg-white min-h-[480px] lg:min-h-[540px] flex items-center select-none">
      
      {/* Background Boardroom Image with Minimal Edge-Only White Gradient Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] xl:w-[68%] h-full z-0 overflow-hidden select-none">
        <img 
          src="/assets/connected_boardroom.jpg" 
          alt="Nexus Bridge Alliance High-Rise Executive Boardroom"
          className="w-full h-full object-cover object-right"
        />

        {/* Minimal Edge-Only White Gradient Mask matching inspiration image */}
        <div className="absolute inset-0 connected-gradient-mask pointer-events-none" />

        {/* Floating Wall Text Badge (Top Right Watermark from Inspiration image) */}
        <div className="hidden sm:flex absolute top-12 lg:top-16 right-10 lg:right-20 z-10 flex-col items-start text-left pointer-events-none select-none">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gray-500 space-y-1 uppercase leading-snug">
            <div>Opportunities</div>
            <div>People</div>
            <div>Progress</div>
          </div>
          <div className="w-8 h-[2px] bg-[#C4121A] mt-2 self-start" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="max-w-md lg:max-w-xl">
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-[1.15] mb-5">
            A More Connected<br />
            Tomorrow
          </h2>

          {/* Red Accent Dash */}
          <div className="w-10 h-[2.5px] bg-[#C4121A] mb-6 rounded-full" />

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-md font-normal">
            We believe in a future where businesses, people and communities thrive through collaboration.
          </p>

          {/* Red Action Button */}
          <button
            onClick={onOpenContact}
            className="btn-primary-red inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold tracking-wide shadow-lg group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>

    </section>
  );
}
