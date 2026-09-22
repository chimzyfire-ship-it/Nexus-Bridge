import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import NexusLogo from './NexusLogo';

export default function SplashScreen({ onComplete }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [showSub, setShowSub] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const fullTitle = 'NEXUS BRIDGE';
  const fullSub = 'ALLIANCE LIMITED';
  const tagline = 'Bridging Businesses to Growth.';

  // Typewriter effect for "NEXUS BRIDGE"
  useEffect(() => {
    let index = 0;
    const titleInterval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(titleInterval);
        setTimeout(() => setShowSub(true), 250);
        setTimeout(() => setShowTagline(true), 650);
      }
    }, 90);

    return () => clearInterval(titleInterval);
  }, []);

  // Progress counter simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Auto fade-out after completion
          setTimeout(() => {
            handleComplete();
          }, 600);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleComplete = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090A0C] text-white transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4121A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle background tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        
        {/* Animated Bridge Emblem */}
        <div className="relative mb-8 transform transition-all duration-1000 scale-110 sm:scale-125">
          <div className="absolute inset-0 bg-[#C4121A]/20 blur-2xl rounded-full scale-150 animate-pulse" />
          
          <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
            <NexusLogo variant="dark" showText={false} size="lg" />
          </div>
        </div>

        {/* Animated Brand Name (Typewriter) */}
        <div className="h-12 sm:h-14 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[0.25em] text-white flex items-center">
            {typedTitle}
            <span className="cursor-blink inline-block w-1 sm:w-1.5 h-7 sm:h-10 bg-[#C4121A] ml-2 rounded-full shadow-[0_0_12px_#C4121A]" />
          </h1>
        </div>

        {/* Subtitle "ALLIANCE LIMITED" with smooth expand */}
        <div className={`mt-2 transition-all duration-700 ${
          showSub ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <div className="text-xs sm:text-sm font-semibold tracking-[0.45em] text-gray-400 uppercase">
            {fullSub}
          </div>
        </div>

        {/* Accent Red Line */}
        <div className={`my-5 transition-all duration-700 ${
          showTagline ? 'w-20 opacity-100' : 'w-0 opacity-0'
        } h-[2px] bg-gradient-to-r from-transparent via-[#C4121A] to-transparent mx-auto`} />

        {/* Brand Slogan */}
        <div className={`transition-all duration-700 delay-100 ${
          showTagline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <p className="text-sm sm:text-base font-light tracking-widest text-gray-300 italic">
            "{tagline}"
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-64 sm:w-72">
          <div className="flex justify-between items-center text-[10px] tracking-widest text-gray-500 font-mono mb-2 uppercase">
            <span>{progress < 100 ? 'System Initializing' : 'Ready'}</span>
            <span className="text-[#C4121A] font-bold">{progress}%</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-[#9E0C13] via-[#C4121A] to-[#FF4D57] rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_#C4121A]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip / Enter Action */}
        <button
          onClick={handleComplete}
          className="mt-8 group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs tracking-wider uppercase text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-md"
        >
          <span>Enter Website</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C4121A] group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Subtle footer credit */}
      <div className="absolute bottom-6 text-[10px] tracking-[0.3em] text-gray-600 uppercase font-mono">
        Dubai • Nigeria • Global
      </div>
    </div>
  );
}
