import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import NexusLogo from './NexusLogo';

const footerLinks = [
  { label: 'About Nexus', path: '/about' },
  { label: 'Growth Services', path: '/services' },
  { label: 'AI Solutions', path: '/ai-solutions' },
  { label: 'Our Approach', path: '/approach' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/insights' },
];

export default function SiteFooter({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const go = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  const subscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="relative mt-0 overflow-hidden bg-[#0A0C0F] text-white">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#C4121A]/20 blur-[120px]" />
      <div className="site-shell relative py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_.75fr_1.15fr]">
          <div>
            <NexusLogo variant="dark" size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              A digital growth and technology agency helping ambitious businesses become more visible, efficient and ready to scale.
            </p>
            <a href="/contact" onClick={(event) => go(event, '/contact')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-red-300">
              Let’s build your growth system <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <a key={link.path} href={link.path} onClick={(event) => go(event, link.path)} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-label">Nexus intelligence brief</p>
            <h2 className="mt-3 text-xl font-bold tracking-tight">Practical insights for the next move.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Occasional notes on marketing, AI, technology and business growth.</p>
            <form onSubmit={subscribe} className="mt-5 flex flex-col gap-2 sm:flex-row">
              <input value={email} onChange={(event) => setEmail(event.target.value)} required type="email" placeholder="Work email address" className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-red-400" />
              <button className="button-primary justify-center whitespace-nowrap text-sm" type="submit">
                {subscribed ? 'You’re in' : 'Subscribe'} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-5 py-8 text-sm text-slate-300 md:grid-cols-3">
          <a href="mailto:info@nexusbridgealliance.com" className="flex items-center gap-3 transition hover:text-white"><Mail className="h-4 w-4 text-[#E5232C]" />info@nexusbridgealliance.com</a>
          <a href="tel:+2348012345678" className="flex items-center gap-3 transition hover:text-white"><Phone className="h-4 w-4 text-[#E5232C]" />+234 801 234 5678</a>
          <p className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#E5232C]" />Dubai, UAE · Operating in Nigeria</p>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nexus Bridge Alliance Ltd. All rights reserved.</p>
          <p className="font-semibold tracking-[0.2em] text-slate-400 uppercase">Bridging businesses to growth.</p>
        </div>
      </div>
    </footer>
  );
}
