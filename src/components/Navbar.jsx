import React, { useState, useEffect } from 'react';
import NexusLogo from './NexusLogo';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

export default function Navbar({ onOpenContact, onReplaySplash }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['home', 'focus', 'services', 'approach', 'leadership', 'impact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'What We Do', href: '#focus', id: 'focus' },
    { label: 'Our Approach', href: '#approach', id: 'approach' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Insights', href: '#impact', id: 'impact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="reference-nav-container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <NexusLogo variant="light" size="md" className="reference-nav-logo" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-[#111315] font-semibold' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  {/* Exact red underline indicator from inspiration mockup */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C4121A] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Replay Intro splash button */}
            <button
              onClick={onReplaySplash}
              title="Replay Brand Splash Screen"
              className="p-2 text-gray-400 hover:text-[#C4121A] hover:bg-red-50/60 rounded-full transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
            </button>

            {/* Red "Get in Touch ->" Button matching inspiration mockup */}
            <button
              onClick={onOpenContact}
              className="btn-primary-red inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onReplaySplash}
              title="Replay Intro"
              className="p-2 text-gray-500 hover:text-[#C4121A]"
            >
              <Play className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? 'text-[#C4121A] bg-red-50/70 font-semibold'
                  : 'text-gray-700 hover:text-black hover:bg-gray-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full btn-primary-red flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Social & Founder Quick Access */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
            <a 
              href="https://www.linkedin.com/in/abraham-munie-abdullahi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 text-[11px] font-semibold"
            >
              <svg className="w-3 h-3 fill-current text-[#0A66C2]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              <span>Founder (LinkedIn)</span>
            </a>

            <div className="flex items-center gap-2">
              <a 
                href="https://www.linkedin.com/company/nxrthbridgeagency/"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/nexusbridge.allianceltd?stkn=MTNyZXlnczMyZzN5NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:text-[#E1306C]"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.tiktok.com/@nexusbridge.allianceltd?_r=1&_t=ZS-99yiXygthmU"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-gray-100 text-gray-700 hover:text-black"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.96-4.49V8.82a8.28 8.28 0 0 0 4.84 1.55V6.92a4.85 4.85 0 0 1-1.03-.23z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
