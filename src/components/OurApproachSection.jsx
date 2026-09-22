import React from 'react';
import { Compass, Lightbulb, Wrench, Rocket, LineChart, Award } from 'lucide-react';

export default function OurApproachSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: Compass,
      tagline: 'Deep Context & Diagnostic',
      desc: 'We map your existing business model, customer acquisition bottlenecks, historical data, and growth objectives before proposing any technology.'
    },
    {
      number: '02',
      title: 'Strategize',
      icon: Lightbulb,
      tagline: 'Precision Action Plan',
      desc: 'We engineer a tailored roadmap defining the exact creative angles, technical architecture, ad platforms, and automation workflows needed.'
    },
    {
      number: '03',
      title: 'Build',
      icon: Wrench,
      tagline: 'High-Velocity Execution',
      desc: 'Our engineering and creative teams build your high-converting websites, AI assets, tracking infrastructure, and automated customer journeys.'
    },
    {
      number: '04',
      title: 'Launch',
      icon: Rocket,
      tagline: 'Controlled System Deployment',
      desc: 'We release the campaigns and software, verifying pixel telemetry, lead routing webhooks, server response times, and multi-device compliance.'
    },
    {
      number: '05',
      title: 'Optimize',
      icon: LineChart,
      tagline: 'Algorithmic Refinement',
      desc: 'Through rapid A/B testing, cost-per-acquisition analysis, and user behavior heatmaps, we continuously trim waste and double down on winning funnels.'
    },
    {
      number: '06',
      title: 'Grow',
      icon: Award,
      tagline: 'Compound Expansion',
      desc: 'Sustainable market leadership through automated acquisition pipelines, maximized margins, and continuous technological modernization.'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white relative overflow-hidden mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-200/70 shadow-lg">
      {/* 3D Background Image with Mature Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/focus_bg_3d.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                Our Methodology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-tight">
              The 6-Phase Engine:<br />Strategy. Technology. Growth.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
            We don't simply assemble disconnected pieces. We deploy an iterative, measurable growth framework engineered to reliably take businesses from initial discovery to compounding scale.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative p-7 rounded-2xl bg-[#FBFBFB] border border-gray-200/80 hover:border-[#C4121A]/30 transition-all duration-300 group hover:shadow-lg flex flex-col justify-between"
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-gray-300 group-hover:text-[#C4121A] transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200/80 text-gray-700 group-hover:text-[#C4121A] group-hover:border-[#C4121A]/40 flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#111315] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C4121A] mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress bar line indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C4121A] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
