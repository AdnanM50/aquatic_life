'use client';

import React from 'react';

export default function WaveDivider() {
  return (
    <div className="absolute -bottom-[2px] left-0 right-0 w-full pointer-events-none z-20 overflow-hidden leading-none">
      {/* Background ambient glow behind wave crest */}
      <div className="absolute bottom-6 left-0 right-0 h-16 bg-gradient-to-t from-cyan-500/10 to-transparent blur-xl pointer-events-none" />

      {/* Undulating SVG Multi-Layer Wave */}
      <div className="relative w-full overflow-hidden">
        {/* Layer 1: Subtle translucent ocean surge wave */}
        <svg
          className="absolute bottom-0 left-0 w-[120%] h-24 sm:h-32 md:h-40 lg:h-48 opacity-30 text-[#072448] animate-wave-flow pointer-events-none"
          viewBox="0 0 1440 220"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,222L1392,222C1344,222,1248,222,1152,222C1056,222,960,222,864,222C768,222,672,222,576,222C480,222,384,222,288,222C192,222,96,222,48,222L0,222Z" />
        </svg>

        {/* Layer 2: Main crisp white organic wave (matches Reference Image 2 curve) */}
        <svg
          className="relative block w-full h-20 sm:h-28 md:h-36 lg:h-44 text-white translate-y-[1px]"
          viewBox="0 0 1440 220"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,128 C320,220 540,40 820,120 C1080,195 1300,100 1440,80 L1440,222 L0,222 Z" />
        </svg>
      </div>
    </div>
  );
}
