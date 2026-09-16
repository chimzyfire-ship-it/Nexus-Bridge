import React from 'react';
import { Building2, ShoppingBag, Home, Utensils, UserCheck, Briefcase, Globe2, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function WhoWeServeSection() {
  const industries = [
    { title: 'Startups & Ventures', icon: Zap, desc: 'Rapid zero-to-one digital foundation, pitch-ready digital products, and high-velocity ad acquisition.' },
    { title: 'SMEs & Corporates', icon: Building2, desc: 'Modernizing legacy workflows, scaling inbound customer pipelines, and deploying automated operational bots.' },
    { title: 'Real Estate & Property', icon: Home, desc: 'High-ticket investor lead generation, immersive web showcases, and automated VIP client onboarding.' },
    { title: 'E-Commerce Brands', icon: ShoppingBag, desc: 'Multi-channel ROAS-positive ad campaigns, AI video creatives, and streamlined checkout funnels.' },
    { title: 'Hospitality & Luxury', icon: Utensils, desc: 'Compelling social presence, direct booking systems, and reputation management across global platforms.' },
    { title: 'Founders & Personal Brands', icon: UserCheck, desc: 'Executive positioning, content syndication, newsletter monetization, and automated client booking.' },
  ];

  const pillars = [
    {
      title: 'Business-First Thinking',
      desc: 'We never push technology for technology’s sake. Every line of code, ad campaign, and automated workflow is measured against your bottom line.',
      icon: Briefcase
    },
    {
      title: 'AI-Native Execution',
      desc: 'We leverage cutting-edge artificial intelligence to compress creative turnaround from weeks to hours and lower client acquisition costs.',
      icon: Layers
    },
    {
      title: 'Global Pedigree & Outlook',
      desc: 'Founded in Dubai (UAE, 2023) and operating out of Nigeria, we bring world-class architectural standards combined with cost-efficient delivery.',
      icon: Globe2
    },
    {
      title: 'One Integrated Partner',
      desc: 'No more juggling five different agencies for design, ads, coding, copy, and bots. We operate as your single unified growth engine.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FBFBFB] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Why Nexus Bridge Alliance */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                Why Nexus Bridge Alliance
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
                  className="bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#C4121A]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200/70 hover:border-gray-300 transition-colors"
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
