import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ConnectedTomorrowSection({ onOpenContact }) {
  return (
    <section className="reference-connected" aria-labelledby="connected-heading">
      <img className="reference-background" src="/assets/connected_tomorrow_faded.png" alt="Sunlit boardroom overlooking the city" loading="lazy" />
      <div className="connected-wall" aria-hidden="true">Opportunities<br />People<br />Progress<span /></div>
      <div className="reference-connected-content">
        <h2 id="connected-heading">A More Connected<br />Tomorrow</h2>
        <div className="connected-dash" />
        <p>We believe in a future where businesses, people and communities thrive through collaboration.</p>
        <button onClick={onOpenContact} className="reference-button">Get in Touch <ArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}
