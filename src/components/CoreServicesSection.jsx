import React, { useState } from 'react';
import { 
  TrendingUp, 
  Share2, 
  Globe, 
  Smartphone, 
  Sparkles, 
  Cpu, 
  Target,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function CoreServicesSection({ onOpenContact, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'digital-marketing',
      category: 'marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      tagline: 'Precision Paid Acquisition & Performance Marketing',
      description: 'We help businesses reach the right audience, generate qualified leads, increase brand awareness, and drive sales through data-driven advertising across global ad platforms.',
      channels: ['Google Ads', 'Meta (Facebook & IG)', 'LinkedIn Ads', 'TikTok Ads', 'X (Twitter) Ads'],
      features: [
        'High-converting campaign strategy & setup',
        'Laser-focused audience targeting & segmentation',
        'Continuous ad creative testing & optimization',
        'Transparent ROI & multi-touch attribution reporting'
      ]
    },
    {
      id: 'social-media',
      category: 'branding',
      icon: Share2,
      title: 'Social Media Management',
      tagline: 'Turn Profiles into Professional Business Assets',
      description: 'Your social media presence is often the first interaction a prospect has with your company. We build, manage, optimize, and grow an authoritative social footprint.',
      channels: ['Instagram', 'LinkedIn', 'Facebook', 'TikTok', 'X'],
      features: [
        'Complete account creation, setup & visual optimization',
        'Strategic content planning & editorial calendar',
        'Brand-aligned copywriting & viral format adaptation',
        'Active community engagement & follower monetization'
      ]
    },
    {
      id: 'website-development',
      category: 'technology',
      icon: Globe,
      title: 'Website Development',
      tagline: 'Modern, Fast, High-Converting Digital Homes',
      description: 'We engineer responsive, enterprise-grade websites that establish instant credibility, showcase your solutions, capture inbound leads, and convert visitors into long-term clients.',
      channels: ['Corporate Portals', 'Landing Pages', 'E-Commerce', 'Custom Web Apps'],
      features: [
        'Bespoke modern UI/UX with responsive mobile design',
        'Built-in lead capture & CRM automation integration',
        'Technical SEO foundation & Core Web Vitals optimization',
        'Enterprise security, hosting & comprehensive analytics'
      ]
    },
    {
      id: 'app-development',
      category: 'technology',
      icon: Smartphone,
      title: 'App Development',
      tagline: 'Turning Concepts into Scalable Digital Products',
      description: 'We develop custom business applications and customer-facing mobile/web apps designed to streamline operations, deliver services, and scale digital revenue.',
      channels: ['iOS & Android', 'Cross-Platform', 'Client Portals', 'Cloud Backends'],
      features: [
        'End-to-end product architecture & UI/UX engineering',
        'Custom business workflows & internal ERP/dashboard systems',
        'Robust REST & GraphQL API integrations',
        'Continuous app maintenance, monitoring & improvements'
      ]
    },
    {
      id: 'ai-content',
      category: 'ai',
      icon: Sparkles,
      title: 'AI Content Creation',
      tagline: 'High-Velocity, Brand-Aligned Visuals & Copy',
      description: 'We combine state-of-the-art AI workflows with human creative direction to produce studio-grade visuals, video assets, and compelling marketing copy at unmatched speed.',
      channels: ['AI Visuals', 'AI Video Generation', 'Ad Creatives', 'AI Copywriting'],
      features: [
        'Bespoke branded imagery & photorealistic product renders',
        'AI video production for social media & advertising',
        'Rapid multi-angle creative variations for A/B tests',
        'AI-assisted copy built around specific target buyer psychology'
      ]
    },
    {
      id: 'ai-automation',
      category: 'ai',
      icon: Cpu,
      title: 'AI Automation',
      tagline: 'Less Repetitive Work. More Efficiency. More Scale.',
      description: 'Businesses lose valuable hours when teams perform repetitive tasks that technology can handle. We build intelligent automation pipelines that free your team to focus on growth.',
      channels: ['Customer Support Bots', 'CRM Workflows', 'Booking Systems', 'Lead Routing'],
      features: [
        '24/7 intelligent AI customer service & FAQ automation',
        'Instant lead qualification & automated follow-up cadences',
        'Frictionless appointment & calendar booking pipelines',
        'Internal data processing & multi-software workflow sync'
      ]
    },
    {
      id: 'ai-ads',
      category: 'ai',
      icon: Target,
      title: 'AI Ads',
      tagline: 'Strategic Paid Ads Powered by Machine Learning',
      description: 'We synthesize artificial intelligence, behavioral data, and paid advertising strategy to accelerate campaign testing, discover winning angles, and scale profitable ad spend.',
      channels: ['Multi-Variant Testing', 'AI Video Ads', 'Predictive Targeting', 'Creative Loops'],
      features: [
        'AI-driven creative iteration and hook variation testing',
        'Automated algorithmic audience discovery & sentiment analysis',
        'Real-time ad spend re-allocation to winning variations',
        'Strategy-first execution — technology accelerating proven fundamentals'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'marketing', label: 'Digital Marketing & Ads' },
    { id: 'technology', label: 'Web & App Engineering' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'branding', label: 'Social & Brand' },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#FBFBFB] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="red-dash" />
            <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
              Our Core Technology & Growth Systems
            </span>
            <span className="red-dash" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-tight">
            Marketing × Social Media × Tech × AI × Automation
          </h2>
          
          <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Instead of managing fragmented vendors, Nexus Bridge Alliance unites the full digital ecosystem into one coherent engine engineered for sustainable scale.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-[#111315] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200/80 hover:border-gray-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card bg-white rounded-2xl p-7 flex flex-col justify-between border border-gray-200/90 hover:border-[#C4121A]/40 transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#C4121A] flex items-center justify-center group-hover:bg-[#C4121A] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111315] mb-2 group-hover:text-[#C4121A] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#C4121A] mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Channel Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.channels.map(channel => (
                      <span 
                        key={channel}
                        className="text-[11px] px-2 py-0.5 rounded bg-gray-100/80 text-gray-600 font-medium"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-4 border-t border-gray-100 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C4121A] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-4 rounded-lg bg-gray-50 hover:bg-[#C4121A] text-gray-700 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Growth Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-14 rounded-2xl bg-[#111315] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4121A]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Need a custom tailored growth system?
            </h4>
            <p className="text-sm text-gray-400">
              Every business is unique. We audit your bottlenecks and assemble the precise mix of paid advertising, automation, and technology required to scale.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="btn-primary-red px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              <span>Schedule Strategic Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
