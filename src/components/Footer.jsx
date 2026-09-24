import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Check,
  ArrowRight
} from 'lucide-react';
import NexusLogo from './NexusLogo';

export default function Footer({ onOpenContact, onReplaySplash }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] text-white relative overflow-hidden border border-white/10 mx-2 sm:mx-4 lg:mx-6 mb-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl">
      
      {/* 3D Background Image Asset with Heavy Opaque Fade for Maximum Text Legibility */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="/assets/footer_bg_3d.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/95 via-[#0B0C0E]/90 to-[#0B0C0E]" />
      </div>

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#C4121A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Top Tier: Brand Brief & Strategic Inquiry Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <NexusLogo variant="dark" size="lg" />

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-normal">
              Nexus Bridge Alliance Limited connects businesses, investors, and organizations — creating strategic partnerships, digital marketing systems, AI infrastructure, and custom technology solutions that unlock real, sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C4121A] font-bold block mb-1">
                  Dubai Inception (2023)
                </span>
                <p className="text-xs text-gray-400">
                  United Arab Emirates
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C4121A] font-bold block mb-1">
                  Operational Hub
                </span>
                <p className="text-xs text-gray-400">
                  Nigeria • Serving Global Markets
                </p>
              </div>
            </div>

            {/* Social Icons (Company LinkedIn, Instagram, TikTok, and Intro Replay) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Company LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/nxrthbridgeagency/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Nexus Bridge Alliance LinkedIn"
                title="Nexus Bridge Alliance on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/nexusbridge.allianceltd?stkn=MTNyZXlnczMyZzN5NQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Nexus Bridge Alliance Instagram"
                title="Nexus Bridge Alliance on Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#E1306C] text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
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
                aria-label="Nexus Bridge Alliance TikTok"
                title="Nexus Bridge Alliance on TikTok"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.96-4.49V8.82a8.28 8.28 0 0 0 4.84 1.55V6.92a4.85 4.85 0 0 1-1.03-.23z"/>
                </svg>
              </a>

              {/* Replay splash screen trigger */}
              <button
                onClick={onReplaySplash}
                title="Replay Brand Splash Screen"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs font-mono border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#C4121A] animate-pulse" />
                <span>Replay Intro</span>
              </button>
            </div>

            {/* Founder Spotlight Pill in Footer */}
            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#C4121A] font-bold block mb-1.5">
                Executive Leadership
              </span>
              <a 
                href="https://www.linkedin.com/in/abraham-munie-abdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-[#0A66C2] text-gray-300 hover:text-white text-xs font-medium border border-white/10 transition-colors group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2] group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>Abraham Munie Abdullahi (Founder)</span>
                <span className="text-[10px] text-gray-400 group-hover:text-blue-100">↗</span>
              </a>
            </div>
          </div>

          {/* Newsletter & Direct Dispatch (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white/[0.03] p-6 sm:p-8 rounded-2xl border border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="red-dash" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#C4121A] uppercase">
                  Nexus Intelligence Brief
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Receive Quarterly Strategic Insights & AI Playbooks
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Curated intelligence on performance marketing, AI automation systems, cross-border business expansion, and investment strategies.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address..."
                  className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C4121A] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="btn-primary-red px-6 py-3 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join Briefing</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C4121A]" />
                <a href="mailto:info@nexusbridgealliance.com" className="hover:text-white transition-colors">info@nexusbridgealliance.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C4121A]" />
                <a href="tel:+2348012345678" className="hover:text-white transition-colors">+234 801 234 5678</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#C4121A]" />
                <span>www.nexusbridgealliance.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Tier: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Strategic Focus */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-white mb-4 text-xs text-gray-300">
              Strategic Focus
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#focus" className="hover:text-white transition-colors">Strategic Partnerships</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Investment Advisory</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Business Expansion</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Project Facilitation</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Cross-Border Alliances</a></li>
            </ul>
          </div>

          {/* Col 2: Core Growth Systems */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-white mb-4 text-xs text-gray-300">
              Core Systems
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing & Paid Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Content Creation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Automation Workflows</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Multi-Variant Ads</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Approach */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-white mb-4 text-xs text-gray-300">
              Methodology & Reach
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#leadership" className="hover:text-white transition-colors">Executive Leadership</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">The 6-Phase Engine</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Why Nexus Bridge</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Who We Serve</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Global Impact Metrics</a></li>
              <li><button onClick={onOpenContact} className="text-[#C4121A] hover:underline font-semibold text-left">Request Growth Audit</button></li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Legal */}
          <div>
            <h4 className="font-bold tracking-wider uppercase text-white mb-4 text-xs text-gray-300">
              Governance & Legal
            </h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><span className="cursor-pointer hover:text-white transition-colors">Non-Disclosure Agreements</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Terms of Engagement</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Privacy & Data Governance</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Compliance & Anti-Fraud</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Global Intellectual Property</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Nexus Bridge Alliance Limited. All rights reserved. 
            <span className="hidden sm:inline"> Bridging Businesses to Growth.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenContact}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Advisory Team
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-1 border border-white/10"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono uppercase">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
