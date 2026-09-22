import React from 'react';
import { Building2, ShoppingBag, Home, Utensils, UserCheck, Briefcase, Globe2, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function WhoWeServeSection() {
  const industries = [
    { title: 'Startups & Emerging Tech', icon: Zap, desc: 'Rapid zero-to-one digital foundation, pitch-ready digital products, and high-velocity ad acquisition.' },
    { title: 'Small & Medium Enterprises (SMEs)', icon: Building2, desc: 'Modernizing legacy workflows, scaling inbound customer pipelines, and deploying automated operational bots.' },
    { title: 'E-Commerce Brands', icon: ShoppingBag, desc: 'Multi-channel ROAS-positive ad campaigns, AI video creatives, and streamlined checkout funnels.' },
    { title: 'Real Estate Companies', icon: Home, desc: 'High-ticket investor lead generation, immersive web showcases, and automated VIP client onboarding.' },
    { title: 'Restaurants & Hospitality', icon: Utensils, desc: 'Compelling social presence, direct booking systems, and reputation management across global platforms.' },
    { title: 'Corporate Businesses', icon: Briefcase, desc: 'Enterprise web engineering, multi-platform integrations, and cross-border expansion blueprints.' },
    { title: 'Personal Brands & Founders', icon: UserCheck, desc: 'Executive positioning, content syndication, newsletter monetization, and automated client booking.' },
    { title: 'Global Enterprises', icon: Globe2, desc: 'Connecting businesses across Dubai, Nigeria, and international markets for compounding growth.' },
  ];

  const pillars = [
    {
      title: 'AI-Powered Strategies & Tools',
      desc: 'We leverage state-of-the-art AI workflows to compress creative turnaround from weeks to hours, automate routine operations, and lower client acquisition costs.',
      icon: Layers
    },
    {
      title: 'Data-Driven & Performance-Focused',
      desc: 'We never push technology for technology’s sake. Every campaign, line of code, and automation pipeline is measured directly against your bottom-line ROI.',
      icon: Zap
    },
    {
      title: 'Creative & Innovative Approach',
      desc: 'World-class visual aesthetics, bespoke software engineering, and high-converting marketing copy engineered to make your brand impossible to ignore.',
      icon: Briefcase
    },
    {
      title: 'Dedicated Support & Transparent Reporting',
      desc: 'Direct partner-level communication, continuous multi-touch attribution metrics, and unwavering accountability — results, not just promises.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FBFBFB] relative border border-gray-200/70 overflow-hidden mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-lg">
      {/* 3D Background Image with Mature Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/focus_bg_3d.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFB]/90 via-[#FBFBFB]/75 to-[#FBFBFB]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Why Nexus Bridge Alliance */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                What Makes Us Different
              </span>
              <span className="red-dash" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight">
              One Bridge. Multiple Solutions.<br />Exponential Growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/95 backdrop-blur-sm p-7 rounded-2xl border border-gray-200/80 hover:border-[#C4121A]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C4121A] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111315] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom: Who We Serve */}
        <div className="mt-16 pt-16 border-t border-gray-200/70">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="red-dash" />
                <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                  Who We Serve
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111315] tracking-tight">
                Tailored for Ambitious Businesses at Every Stage
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Whether launching a new enterprise, rebuilding your digital presence, or scaling international sales, our systems are built around your exact milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/95 backdrop-blur-sm border border-gray-200/70 hover:border-gray-300 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-gray-50 text-[#C4121A] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#111315] mb-1">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
