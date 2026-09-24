import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Sparkles, Globe, Award, TrendingUp } from 'lucide-react';

export default function LeadershipSection({ onOpenContact }) {
  const companySocials = [
    {
      platform: 'LinkedIn',
      handle: 'nxrthbridgeagency',
      url: 'https://www.linkedin.com/company/nxrthbridgeagency/',
      badge: 'Corporate Network',
      description: 'Official corporate announcements, B2B deal architecture, strategic partnership insights, and global industry analyses.',
      color: '#0A66C2',
      bgHover: 'hover:border-[#0A66C2]/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      platform: 'Instagram',
      handle: '@nexusbridge.allianceltd',
      url: 'https://www.instagram.com/nexusbridge.allianceltd?stkn=MTNyZXlnczMyZzN5NQ%3D%3D&utm_source=qr',
      badge: 'Brand & Culture',
      description: 'Behind-the-scenes strategic sessions, high-converting digital campaigns, agency culture, and milestone case studies.',
      color: '#E1306C',
      bgHover: 'hover:border-[#E1306C]/40',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      platform: 'TikTok',
      handle: '@nexusbridge.allianceltd',
      url: 'https://www.tiktok.com/@nexusbridge.allianceltd?_r=1&_t=ZS-99yiXygthmU',
      badge: 'AI & Growth Tactics',
      description: 'Rapid-fire breakdowns of cutting-edge AI workflows, digital marketing playbooks, and modern business automation tactics.',
      color: '#000000',
      bgHover: 'hover:border-black/40',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.96-4.49V8.82a8.28 8.28 0 0 0 4.84 1.55V6.92a4.85 4.85 0 0 1-1.03-.23z"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="leadership" 
      className="relative py-20 sm:py-24 bg-[#FBFBFB] border border-gray-200/70 overflow-hidden mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-lg select-none"
    >
      {/* Ambient background glow & glass illumination */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C4121A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="red-dash" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#C4121A] uppercase">
              Executive Leadership & Global Network
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111315] tracking-tight leading-[1.12]">
            Visionary Leadership.<br />
            Global Commercial Impact.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl">
            Nexus Bridge Alliance Ltd bridges bold founders, investors, and institutions to compounding growth — uniting strategic advisory with modern digital marketing and enterprise AI automation.
          </p>
        </div>

        {/* Main Grid: Founder Spotlight & Official Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Founder Executive Spotlight (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-xl relative overflow-hidden group">
            
            {/* Subtle luxury glass accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-[#C4121A]/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              {/* Executive Tag & Monogram Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100/60 text-[#C4121A] text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#C4121A] animate-pulse" />
                  <span>Founder Spotlight</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <Globe className="w-3.5 h-3.5 text-[#C4121A]" />
                  <span>Dubai • Nigeria • Global</span>
                </div>
              </div>

              {/* Founder Header with Monogram Avatar */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#111315] to-[#1e2329] border border-gray-300/40 p-1 flex items-center justify-center shadow-lg relative flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1c1f24] to-[#0b0c0e] flex items-center justify-center border border-white/10">
                    <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white">
                      AMA
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C4121A] text-white flex items-center justify-center border-2 border-white shadow-sm" title="Verified Founder">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111315] tracking-tight">
                    Abraham Munie Abdullahi
                  </h3>
                  <p className="text-sm font-semibold text-[#C4121A] tracking-wide mt-0.5">
                    Founder & Managing Director, Nexus Bridge Alliance Ltd
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Entrepreneur, Strategic Alliance Architect & AI Growth Strategist
                  </p>
                </div>
              </div>

              {/* Founder Narrative & Philosophy */}
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-normal mb-8">
                <blockquote className="pl-4 border-l-2 border-[#C4121A] italic text-gray-700 bg-gray-50/60 py-3 rounded-r-xl pr-4 text-xs sm:text-sm">
                  "We built Nexus Bridge Alliance on a singular principle: modern businesses shouldn’t have to struggle with fragmented marketing, siloed agencies, or disconnected technology. By unifying high-trust human networks with AI-driven performance systems, we provide businesses with a direct bridge to sustainable scale."
                </blockquote>

                <p className="text-xs sm:text-sm">
                  Spearheading business expansion across the United Arab Emirates and West Africa, Abraham leads an agile team dedicated to institutional deal sourcing, modern customer acquisition engines, and AI workflow automation.
                </p>
              </div>

              {/* Leadership Pillars Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-200/60">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Inception</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">Dubai (2023)</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-200/60">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Focus</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">Alliances & AI Growth</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-200/60 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Market Reach</div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">5+ Countries</div>
                </div>
              </div>
            </div>

            {/* Founder Actions */}
            <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Direct LinkedIn Button with Glassmorphism */}
              <a 
                href="https://www.linkedin.com/in/abraham-munie-abdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all group/btn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Connect with Abraham on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-100 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-sm font-medium transition-all shadow-sm"
              >
                <span>Request Advisory</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>

          </div>

          {/* Column 2: Official Nexus Bridge Alliance Channels Hub (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm mb-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-1">
                Official Channels
              </span>
              <h4 className="text-lg font-extrabold text-[#111315]">
                Connect with Nexus Bridge Alliance
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Follow our official social platforms for real-time playbooks, client wins, AI blueprints, and executive opportunities.
              </p>
            </div>

            {/* The 3 Channel Cards */}
            {companySocials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start justify-between gap-4 ${social.bgHover}`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform group-hover:scale-105"
                    style={{ backgroundColor: social.color }}
                  >
                    {social.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#111315] group-hover:text-[#C4121A] transition-colors">
                        Nexus Bridge on {social.platform}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {social.badge}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-[#C4121A] mt-0.5 font-medium">
                      {social.handle}
                    </p>

                    <p className="text-xs text-gray-500 mt-2 leading-relaxed font-normal">
                      {social.description}
                    </p>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-gray-50 text-gray-400 group-hover:text-[#C4121A] group-hover:bg-red-50 transition-colors flex-shrink-0 self-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}

            {/* Quick Consultation Capsule */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-between text-xs mt-2 shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C4121A]" />
                <span className="font-medium text-gray-200">Looking to discuss institutional growth?</span>
              </div>
              <button 
                onClick={onOpenContact}
                className="text-[#C4121A] hover:text-red-400 font-bold flex items-center gap-1 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
