import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FocusSection({ onSelectCard }) {
  const focusCards = [
    {
      id: 'strategic-partnerships',
      title: 'Strategic Partnerships',
      subtitle: 'Connecting the right people and organizations.',
      image: '/assets/strategic_partnerships.png',
      alt: 'Two business executives shaking hands across boardroom table',
      details: 'We build high-trust alliances between ambitious companies, investors, and key institutional leaders. Through calculated network mapping and aligned incentives, we orchestrate partnerships that produce sustainable compound growth rather than short-lived transactions.',
      deliverables: [
        'Institutional & Corporate Deal Sourcing',
        'Cross-Border Joint Ventures & Alliances',
        'Co-Marketing & Distribution Channels',
        'High-Net-Worth Relationship Brokering'
      ]
    },
    {
      id: 'investment-advisory',
      title: 'Investment Advisory',
      subtitle: 'Practical insights to unlock growth.',
      image: '/assets/investment_advisory.png',
      alt: 'Financial advisors reviewing corporate growth charts and investment reports',
      details: 'Navigating capital markets and expansion financing requires tactical precision. We combine quantitative market research with actionable strategic modeling to prepare organizations for equity financing, debt structuring, and high-yield capital deployment.',
      deliverables: [
        'Growth Capital Readiness & Due Diligence',
        'Market Feasibility & Financial Modeling',
        'Valuation & Investor Pitch Structuring',
        'M&A and Asset Allocation Advisory'
      ]
    },
    {
      id: 'business-expansion',
      title: 'Business Expansion',
      subtitle: 'Opening doors to new markets.',
      image: '/assets/business_expansion.png',
      alt: 'Modern corporate glass skyscraper headquarters at twilight',
      details: 'Expanding beyond domestic borders demands strategic localization, regulatory compliance, and market penetration blueprints. We bridge companies into high-opportunity hubs across the UAE, Africa, Europe, and the Americas with minimum friction.',
      deliverables: [
        'UAE & GCC Market Entry Strategy',
        'Pan-African Expansion Infrastructure',
        'Regulatory & Corporate Setup Advisory',
        'Local Supply Chain & Distribution Networks'
      ]
    },
    {
      id: 'project-facilitation',
      title: 'Project Facilitation',
      subtitle: 'Turning ideas into measurable outcomes.',
      image: '/assets/project_facilitation.png',
      alt: 'Modern laptop showing strategic project plan with timeline and notebook',
      details: 'Even the most brilliant concepts stall without rigorous project management and technical execution. We oversee full lifecycle project delivery — aligning stakeholders, setting milestone cadences, managing risks, and enforcing high-quality execution.',
      deliverables: [
        'Milestone-Driven Execution Roadmaps',
        'Multi-Vendor & Stakeholder Alignment',
        'Risk Mitigation & Quality Assurance',
        'Operational Turnaround & Performance Auditing'
      ]
    }
  ];

  return (
    <section id="focus" className="py-20 lg:py-28 bg-[#FBFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            {/* Eyebrow with red dash */}
            <div className="flex items-center gap-2 mb-3">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                Our Focus
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-tight">
              Turning Connections<br />Into Lasting Value
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="max-w-md lg:max-w-lg">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We work with forward-thinking businesses, investors and institutions to identify opportunities, facilitate collaboration and deliver measurable impact.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {focusCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCard(card)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full border border-gray-200/80 hover:border-[#C4121A]/30 transition-all duration-300 bg-white"
            >
              {/* Card Image with subtle hover zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 group-hover:text-white group-hover:bg-[#C4121A] transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#111315] mb-2 group-hover:text-[#C4121A] transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#C4121A] transition-colors">
                  <span>Explore Strategy</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
