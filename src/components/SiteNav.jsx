import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import NexusLogo from './NexusLogo';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'AI Solutions', path: '/ai-solutions' },
  { label: 'Our Approach', path: '/approach' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/insights' },
];

export default function SiteNav({ currentPath, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => setOpen(false), [currentPath]);

  const go = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="site-shell flex h-[74px] items-center justify-between gap-4 lg:h-[88px]">
        <a href="/" onClick={(event) => go(event, '/')} className="group shrink-0" aria-label="Nexus Bridge Alliance home">
          <NexusLogo variant="light" size="md" className="max-[380px]:gap-2" />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => go(event, link.path)}
              className={`nav-link ${currentPath === link.path ? 'nav-link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/contact" onClick={(event) => go(event, '/contact')} className="button-primary text-sm">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-[#C4121A] hover:text-[#C4121A] lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-hidden={!open}>
        <nav className="site-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(event) => go(event, link.path)}
              className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${currentPath === link.path ? 'bg-red-50 text-[#C4121A]' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" onClick={(event) => go(event, '/contact')} className="button-primary mt-3 justify-center">
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
