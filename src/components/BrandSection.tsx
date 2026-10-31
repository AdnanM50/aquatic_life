'use client';

import React from 'react';

const ROW_ONE_LOGOS = [
  {
    name: 'ADA',
    component: (
      <svg viewBox="0 0 160 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="38" letterSpacing="-1.5" fill="#0f172a">ADA</text>
        <circle cx="95" cy="14" r="4.5" fill="#00e5ff" />
        <text x="0" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7" letterSpacing="3.5" fill="#64748b">AQUA DESIGN AMANO</text>
      </svg>
    ),
  },
  {
    name: 'OASE',
    component: (
      <svg viewBox="0 0 170 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10 C18 10 30 24 30 31 C30 38 24.5 43 18 43 C11.5 43 6 38 6 31 C6 24 18 10 18 10 Z" fill="#0284c7" />
        <path d="M14 26 C14 26 22 34 22 37 C22 40 18 41 15 41" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <text x="38" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="28" letterSpacing="1" fill="#0f172a">OASE</text>
        <text x="40" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="2.5" fill="#64748b">LIVING WATER</text>
      </svg>
    ),
  },
  {
    name: 'CHIHIROS',
    component: (
      <svg viewBox="0 0 190 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12 L24 24 L12 36 M20 12 L32 24 L20 36" stroke="#ff5722" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="23" letterSpacing="2" fill="#0f172a">CHIHIROS</text>
        <text x="44" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="3.5" fill="#ff5722">AQUATIC STUDIO</text>
      </svg>
    ),
  },
  {
    name: 'FLUVAL',
    component: (
      <svg viewBox="0 0 160 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="skewX(-14)">
          <text x="6" y="36" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="34" letterSpacing="0.5" fill="#0f172a">FLUVAL</text>
        </g>
        <rect x="138" y="10" width="6" height="26" transform="skewX(-14)" fill="#ea580c" />
      </svg>
    ),
  },
  {
    name: 'SEACHEM',
    component: (
      <svg viewBox="0 0 170 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24 C14 14 26 14 32 24 C26 34 14 34 8 24 Z" fill="#10b981" />
        <circle cx="25" cy="24" r="3" fill="#ffffff" />
        <text x="40" y="32" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="26" fill="#0f172a">Seachem</text>
        <text x="42" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5" letterSpacing="2" fill="#64748b">WATER CHEMISTRY</text>
      </svg>
    ),
  },
  {
    name: 'UNS',
    component: (
      <svg viewBox="0 0 160 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="32" letterSpacing="4" fill="#0f172a">UNS</text>
        <line x1="86" y1="12" x2="86" y2="34" stroke="#0ea5e9" strokeWidth="2.5" />
        <text x="94" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" letterSpacing="1" fill="#0f172a">ULTUM</text>
        <text x="94" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" letterSpacing="1" fill="#0f172a">NATURE</text>
        <text x="94" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="8" letterSpacing="1" fill="#0f172a">SYSTEMS</text>
      </svg>
    ),
  },
  {
    name: 'TROPICA',
    component: (
      <svg viewBox="0 0 170 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 36 C12 20 22 10 32 10 C28 20 28 30 18 36 Z" fill="#059669" />
        <path d="M14 36 C22 26 30 22 36 22 C30 28 26 34 20 37 Z" fill="#34d399" />
        <text x="42" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="24" letterSpacing="1" fill="#0f172a">tropica</text>
        <text x="44" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7" letterSpacing="2" fill="#059669">AQUARIUM PLANTS</text>
      </svg>
    ),
  },
];

const ROW_TWO_LOGOS = [
  {
    name: 'TWINSTAR',
    component: (
      <svg viewBox="0 0 180 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8 L18 20 L30 22 L18 24 L16 36 L14 24 L2 22 L14 20 Z" fill="#6366f1" />
        <path d="M26 26 L27 32 L33 33 L27 34 L26 40 L25 34 L19 33 L25 32 Z" fill="#00e5ff" />
        <text x="40" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="3" fill="#0f172a">TWINSTAR</text>
      </svg>
    ),
  },
  {
    name: 'EHEIM',
    component: (
      <svg viewBox="0 0 150 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="9" width="142" height="30" rx="15" fill="#dc2626" />
        <text x="75" y="31" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="4" fill="#ffffff">EHEIM</text>
      </svg>
    ),
  },
  {
    name: 'RED SEA',
    component: (
      <svg viewBox="0 0 160 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 34 C12 20 22 16 30 22 C22 24 18 28 16 34 Z" fill="#e11d48" />
        <path d="M16 34 C22 24 30 20 38 26 C30 28 26 31 24 34 Z" fill="#fb7185" />
        <text x="42" y="32" fontFamily="Georgia, serif" fontWeight="900" fontSize="24" letterSpacing="0.5" fill="#e11d48">Red Sea</text>
      </svg>
    ),
  },
  {
    name: 'AI',
    component: (
      <svg viewBox="0 0 185 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="6,24 18,12 30,24 18,36" fill="#0284c7" />
        <text x="18" y="28" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13" fill="#ffffff">AI</text>
        <text x="38" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13" letterSpacing="2" fill="#0f172a">AQUA</text>
        <text x="38" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="1.5" fill="#0284c7">ILLUMINATION</text>
      </svg>
    ),
  },
  {
    name: 'SICCE',
    component: (
      <svg viewBox="0 0 150 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24 C14 16 22 16 28 24 C22 32 14 32 8 24 Z" stroke="#0d9488" strokeWidth="3" fill="none" />
        <circle cx="18" cy="24" r="3.5" fill="#0d9488" />
        <text x="34" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="2.5" fill="#0f172a">SICCE</text>
        <text x="36" y="41" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="6.5" letterSpacing="2" fill="#64748b">ITALY</text>
      </svg>
    ),
  },
  {
    name: 'KESSIL',
    component: (
      <svg viewBox="0 0 150 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="24" r="10" stroke="#0284c7" strokeWidth="2.5" fill="none" />
        <circle cx="18" cy="24" r="5" fill="#00e5ff" />
        <text x="36" y="33" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="24" letterSpacing="1.5" fill="#0f172a">Kessil</text>
      </svg>
    ),
  },
  {
    name: 'WATERBOX',
    component: (
      <svg viewBox="0 0 180 48" className="h-8 sm:h-10 md:h-11 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="20" height="20" rx="3" stroke="#0f172a" strokeWidth="2.5" fill="none" />
        <line x1="6" y1="20" x2="26" y2="20" stroke="#00e5ff" strokeWidth="2" />
        <text x="34" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" letterSpacing="1.5" fill="#0f172a">WATERBOX</text>
        <text x="34" y="37" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7" letterSpacing="3" fill="#64748b">AQUARIUMS</text>
      </svg>
    ),
  },
];

export default function BrandSection() {
  return (
    <section
      id="brands"
      className="relative w-full bg-white text-slate-900 scroll-mt-12 overflow-hidden select-none -mt-[1px]"
    >
      {/* Dynamic Keyframes to guarantee Left-to-Right & Right-to-Left Infinite Motion */}
      <style>{`
        @keyframes marquee-line-ltr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        @keyframes marquee-line-rtl {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-ltr-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-line-ltr 28s linear infinite;
        }
        .marquee-rtl-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-line-rtl 28s linear infinite;
        }
        .marquee-ltr-track:hover,
        .marquee-rtl-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. TOP SEAMLESS WAVE DIVIDER: From dark AboutSection into White Brand Section */}
      <div className="relative w-full overflow-hidden leading-none pointer-events-none z-10 bg-[#02050f]">
        <svg
          className="relative block w-full h-10 sm:h-16 md:h-24 text-white translate-y-[1px]"
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brandTopCrestGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff5722" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            fill="#ffffff"
            d="M0,70 C320,180 540,20 840,110 C1080,180 1300,50 1440,85 L1440,182 L0,182 Z"
          />
          <path
            fill="none"
            stroke="url(#brandTopCrestGlow)"
            strokeWidth="3.5"
            d="M0,70 C320,180 540,20 840,110 C1080,180 1300,50 1440,85"
          />
        </svg>
      </div>

      {/* 2. INFINITE MARQUEE STRIP CONTAINER (ONLY BRAND LOGOS) */}
      <div className="relative w-full py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Soft edge gradient fades for seamless infinite looping */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* LINE 1: GOES LEFT TO RIGHT (LTR) */}
          <div className="marquee-ltr-track flex items-center gap-12 sm:gap-16 md:gap-24">
            {[...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS].map((item, idx) => (
              <div
                key={`line1-${item.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer px-2"
                title={item.name}
              >
                {item.component}
              </div>
            ))}
          </div>

          {/* LINE 2: GOES RIGHT TO LEFT (RTL) */}
          <div className="marquee-rtl-track flex items-center gap-12 sm:gap-16 md:gap-24">
            {[...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS].map((item, idx) => (
              <div
                key={`line2-${item.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer px-2"
                title={item.name}
              >
                {item.component}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SEAMLESS WAVE TRANSITION: Flowing organically into ProductsSection (#020a16) */}
      <div className="relative w-full overflow-hidden leading-none pointer-events-none z-10 bg-[#020a16] -mb-[1px]">
        {/* Soft atmospheric oceanic glow behind wave crest matching ProductsSection */}
        <div className="absolute top-2 left-1/4 w-3/4 h-24 bg-gradient-to-b from-cyan-400/20 via-blue-600/10 to-transparent blur-2xl" />

        <svg
          className="relative block w-full h-12 sm:h-20 md:h-28 text-white"
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brandBottomCrestGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff5722" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Pure solid white upper body - seamless organic continuation of the white brand section */}
          <path
            fill="#ffffff"
            d="M0,0 L1440,0 L1440,65 C1240,140 980,35 680,105 C380,175 160,55 0,110 Z"
          />

          {/* Luminous Bioluminescent Cyan & Coral Wave Crest */}
          <path
            fill="none"
            stroke="url(#brandBottomCrestGlow)"
            strokeWidth="3.5"
            d="M0,110 C160,55 380,175 680,105 C980,35 1240,140 1440,65"
          />
        </svg>
      </div>
    </section>
  );
}
