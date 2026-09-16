import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play } from 'lucide-react';
import NexusLogo from './NexusLogo';

export default function Navbar({ onOpenContact, onReplaySplash }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['home', 'focus', 'services', 'approach', 'impact'];
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
    { label: 'Insights', href: '#impact', id: 'impact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5' 
          : 'bg-white/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <NexusLogo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
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
          <div className="hidden md:flex items-center gap-4">
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
          <div className="flex md:hidden items-center gap-2">
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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
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
        </div>
      )}
    </header>
  );
}
