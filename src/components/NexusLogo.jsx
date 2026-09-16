import React from 'react';

/**
 * Nexus Bridge Alliance Ltd Official Logo Component
 * Supports both crisp vector SVG and transparent image asset modes.
 */
export default function NexusLogo({ 
  variant = 'light', // 'light' (for light bg: dark text) or 'dark' (for dark bg: white text)
  showText = true, 
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  className = '' 
}) {
  const isDark = variant === 'dark';
  
  // Dimensions
  const sizeMap = {
    sm: { symbol: 'h-8 w-auto', text: 'text-xs', sub: 'text-[9px]' },
    md: { symbol: 'h-11 w-auto', text: 'text-sm', sub: 'text-[10px]' },
    lg: { symbol: 'h-16 w-auto', text: 'text-lg', sub: 'text-xs' },
    xl: { symbol: 'h-24 w-auto', text: 'text-2xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Bridge Graphic Symbol */}
      <div className="relative flex-shrink-0">
        <svg 
          viewBox="0 0 120 70" 
          className={`${currentSize.symbol} transition-transform duration-300 group-hover:scale-105`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Suspension Tower (Left-Center, Taller) */}
          <path 
            d="M50 8 V62 M55 8 V62" 
            stroke={isDark ? "#FFFFFF" : "#111315"} 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          {/* Tower 1 Crossbraces */}
          <path 
            d="M50 14 H55 M50 26 H55 M50 38 H55 M50 50 H55" 
            stroke={isDark ? "#FFFFFF" : "#111315"} 
            strokeWidth="2" 
          />
          {/* Left Tower Finial / Spire */}
          <polygon 
            points="50,8 52.5,3 55,8" 
            fill={isDark ? "#FFFFFF" : "#111315"} 
          />

          {/* Secondary Tower in Perspective (Far Right, Shorter) */}
          <path 
            d="M95 24 V62 M98 24 V62" 
            stroke={isDark ? "#E5E7EB" : "#374151"} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          <path 
            d="M95 28 H98 M95 38 H98 M95 48 H98" 
            stroke={isDark ? "#E5E7EB" : "#374151"} 
            strokeWidth="1.5" 
          />

          {/* Left Anchor Block Pillar */}
          <path 
            d="M16 44 V62 M20 44 V62" 
            stroke={isDark ? "#D1D5DB" : "#4B5563"} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          <path d="M16 46 H20" stroke={isDark ? "#D1D5DB" : "#4B5563"} strokeWidth="1.5" />

          {/* Parabolic Suspension Cables */}
          {/* Left Span: from anchor (18, 44) to Tower top (52.5, 8) */}
          <path 
            d="M18 44 Q 32 38 52.5 8" 
            stroke={isDark ? "#E5E7EB" : "#1F2937"} 
            strokeWidth="2.2" 
            fill="none" 
            strokeLinecap="round" 
          />
          {/* Main Span: from Tower 1 (52.5, 8) to Tower 2 (96.5, 24) */}
          <path 
            d="M52.5 8 Q 72 44 96.5 24" 
            stroke={isDark ? "#E5E7EB" : "#1F2937"} 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
          />
          {/* Far Right Span */}
          <path 
            d="M96.5 24 Q 106 38 114 56" 
            stroke={isDark ? "#9CA3AF" : "#6B7280"} 
            strokeWidth="1.8" 
            fill="none" 
            strokeLinecap="round" 
          />

          {/* Vertical Suspenders Cables */}
          {/* Left Span Suspenders */}
          <line x1="26" y1="42" x2="26" y2="52" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="34" y1="36" x2="34" y2="48" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="42" y1="26" x2="42" y2="43" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />

          {/* Main Center Span Suspenders */}
          <line x1="62" y1="20" x2="62" y2="39" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="70" y1="30" x2="70" y2="40" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="78" y1="34" x2="78" y2="42" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="86" y1="30" x2="86" y2="46" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />
          <line x1="104" y1="38" x2="104" y2="52" stroke={isDark ? "#9CA3AF" : "#6B7280"} strokeWidth="1" />

          {/* Distinctive Red Roadway Deck Ribbon (The Iconic Nexus Bridge Red Curve) */}
          <path 
            d="M16 56 C 36 44, 60 37, 85 41 C 98 43, 110 49, 116 58 C 110 50, 96 43, 85 41 C 60 37, 36 44, 16 56 Z" 
            fill="#C4121A" 
          />
          {/* Deck bottom shadow/edge */}
          <path 
            d="M16 56 C 36 44, 60 37, 85 41 C 98 43, 110 49, 116 58" 
            stroke="#9E0C13" 
            strokeWidth="1.2" 
            fill="none" 
          />
          {/* Red roadway upper highlight */}
          <path 
            d="M18 53 C 38 41, 60 35, 84 38 C 96 40, 108 46, 114 55" 
            stroke="#E5232C" 
            strokeWidth="0.8" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-extrabold tracking-[0.18em] uppercase ${currentSize.text} ${isDark ? 'text-white' : 'text-[#111315]'}`}>
            Nexus Bridge
          </span>
          <span className={`font-semibold tracking-[0.28em] uppercase mt-1 ${currentSize.sub} ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Alliance Ltd
          </span>
        </div>
      )}
    </div>
  );
}
