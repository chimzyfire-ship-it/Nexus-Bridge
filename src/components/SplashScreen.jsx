import React, { useEffect, useState } from 'react';
import NexusLogo from './NexusLogo';

export default function SplashScreen({ onComplete }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 3500);
    const completeTimer = window.setTimeout(onComplete, 4000);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${leaving ? 'splash-screen--leave' : ''}`} aria-label="Loading Nexus Bridge Alliance">
      <div className="splash-orb splash-orb--one" />
      <div className="splash-orb splash-orb--two" />
      <div className="splash-grid" />
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <div className="splash-logo-wrap"><NexusLogo variant="dark" size="xl" /></div>
        <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#E5232C] to-transparent" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[.36em] text-slate-400 sm:text-sm">Bridging businesses to growth</p>
        <div className="mt-10 h-[2px] w-44 overflow-hidden rounded-full bg-white/10"><span className="splash-progress" /></div>
      </div>
      <p className="absolute bottom-7 text-[10px] font-semibold uppercase tracking-[.28em] text-slate-600">Dubai · Nigeria · Global</p>
    </div>
  );
}
