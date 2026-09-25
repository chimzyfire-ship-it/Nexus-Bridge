import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section id="home" className="reference-hero">
      <img className="reference-background" src="/assets/hero_meeting_faded.png" alt="Business partners collaborating in a city office" fetchPriority="high" />
      <div className="hero-wall" aria-hidden="true">
        <img src="/assets/logo_clean_transparent_white.png" alt="" />
        <div className="hero-wall-words"><span />Ideas<br />Partnerships<br />Growth</div>
      </div>
      <div className="reference-hero-content">
        <p className="hero-eyebrow">People. Opportunities. Progress.</p>
        <h1>Bridging<br />Businesses to<br /><span>Growth.</span></h1>
        <p className="hero-description">Nexus Bridge Alliance Ltd connects businesses, investors and organizations — creating strategic partnerships that unlock opportunities and drive real, sustainable growth.</p>
        <div className="reference-actions">
          <button onClick={onOpenContact} className="reference-button">Get in Touch <ArrowRight aria-hidden="true" /></button>
          <a href="#focus" className="reference-button reference-button-secondary">Learn More</a>
        </div>
        <p className="hero-tagline">Stronger Partnerships.<br />Brighter Possibilities.</p>
      </div>
    </section>
  );
}
