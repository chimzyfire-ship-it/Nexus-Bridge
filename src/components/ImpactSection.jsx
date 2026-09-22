import React, { useState, useEffect, useRef } from 'react';

export default function ImpactSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ connections: 0, companies: 0, countries: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers
          const duration = 1800;
          const startTime = performance.now();

          const updateCounts = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              connections: Math.floor(easeProgress * 40),
              companies: Math.floor(easeProgress * 178),
              countries: Math.floor(easeProgress * 5)
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounts);
            } else {
              setCounts({ connections: 40, companies: 178, countries: 5 });
            }
          };

          requestAnimationFrame(updateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section 
      id="impact" 
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0C0E] text-white py-16 sm:py-20 lg:py-24 select-none mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-2xl"
    >
      {/* Background Skyline Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/skyline_impact.jpg" 
          alt="Global metropolitan financial skyline at twilight"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Left Dark Gradient Mask for text legibility matching inspiration */}
        <div className="absolute inset-0 impact-gradient-mask pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Title Area */}
          <div className="max-w-md lg:max-w-lg">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="red-dash" />
              <span className="text-xs font-bold tracking-[0.25em] text-gray-300 uppercase">
                Our Impact
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Businesses grow<br />
              stronger together.
            </h2>
          </div>

          {/* Right Metrics / Counters with Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 border-t sm:border-t-0 pt-8 sm:pt-0 border-white/10">
            
            {/* Stat 1: 40+ Strategic Connections */}
            <div className="relative flex flex-col sm:border-r border-white/15 sm:pr-8 lg:pr-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight flex items-baseline">
                <span>{counts.connections}</span>
                <span className="text-[#C4121A] ml-1">+</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-light text-gray-300 tracking-wide leading-snug">
                Strategic Connections
              </p>
            </div>

            {/* Stat 2: 178 Companies Served */}
            <div className="relative flex flex-col sm:border-r border-white/15 sm:pr-8 lg:pr-10">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight flex items-baseline">
                <span>{counts.companies}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-light text-gray-300 tracking-wide leading-snug">
                Companies Served
              </p>
            </div>

            {/* Stat 3: 5 Countries */}
            <div className="relative flex flex-col sm:pl-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight flex items-baseline">
                <span>{counts.countries}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-light text-gray-300 tracking-wide leading-snug max-w-[180px]">
                Countries
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
