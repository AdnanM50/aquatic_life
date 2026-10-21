'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  desc: string;
  buttonText: string;
  cutoutImage: string;
  cutoutClass: string;
  borderGlow: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'fertilizers',
    title: 'Plant Fertilizers & Nutrients',
    desc: 'Bio-chelated liquid NPK, trace iron boosters, and slow-release root capsules for vibrant algae-free growth.',
    buttonText: 'Explore',
    cutoutImage: '/fertilizer-cutout.png',
    cutoutClass: 'right-1 sm:right-3 -bottom-2 sm:-bottom-3 w-[125px] sm:w-[140px] h-[195px] sm:h-[220px]',
    borderGlow: 'hover:border-amber-400/80 hover:shadow-[0_15px_35px_rgba(245,158,11,0.25)]',
    href: '#fertilizers',
  },
  {
    id: 'co2-oxygen',
    title: 'CO2 Systems & Oxygen Diffusers',
    desc: 'Medical-grade stainless steel solenoids and 0.1-micron ceramic diffusers generating effervescent micro-bubble clouds.',
    buttonText: 'Explore',
    cutoutImage: '/co2-cutout.png',
    cutoutClass: 'right-1 sm:right-3 -bottom-1 sm:-bottom-2 w-[120px] sm:w-[135px] h-[200px] sm:h-[225px]',
    borderGlow: 'hover:border-cyan-400/80 hover:shadow-[0_15px_35px_rgba(0,229,255,0.25)]',
    href: '#co2-oxygen',
  },
  {
    id: 'aquatic-plants',
    title: 'Live Plants & In-Vitro Flora',
    desc: 'Guaranteed 100% snail-free sterile tissue cultures, rare purple Bucephalandra, and lush carpeting Monte Carlo.',
    buttonText: 'Explore',
    cutoutImage: '/plant-cutout.png',
    cutoutClass: '-right-2 sm:right-0 bottom-1 sm:bottom-2 w-[145px] sm:w-[165px] h-[160px] sm:h-[185px]',
    borderGlow: 'hover:border-emerald-400/80 hover:shadow-[0_15px_35px_rgba(52,211,153,0.25)]',
    href: '#aquatic-plants',
  },
  {
    id: 'biotope-creatures',
    title: 'Biotope Marine Habitats',
    desc: 'Precision environmental controllers, active mineral substrates, and bio-stable habitats designed for living organisms.',
    buttonText: 'Explore',
    cutoutImage: '/octopus.png',
    cutoutClass: '-right-3 sm:-right-1 -bottom-2 sm:-bottom-3 w-[150px] sm:w-[170px] h-[165px] sm:h-[190px]',
    borderGlow: 'hover:border-purple-400/80 hover:shadow-[0_15px_35px_rgba(168,85,247,0.25)]',
    href: '#biotopes',
  },
  {
    id: 'hardscape-stones',
    title: 'Hardscape Stones & Soil',
    desc: 'Sculptural weathered Dragon stones, Japanese Seiryu rock, and active black volcanic buffering aqua soils.',
    buttonText: 'Explore',
    cutoutImage: '/hardscape-cutout.png',
    cutoutClass: '-right-2 sm:right-0 -bottom-1 sm:-bottom-2 w-[145px] sm:w-[165px] h-[165px] sm:h-[190px]',
    borderGlow: 'hover:border-orange-400/80 hover:shadow-[0_15px_35px_rgba(255,87,34,0.25)]',
    href: '#hardscape',
  },
];

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view calculation
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Exactly 3 cards on desktop
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // 2 cards on tablet
      } else {
        setCardsPerView(1); // 1 card on mobile
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, CATEGORIES.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="categories"
      className="relative w-full bg-white text-slate-900 py-20 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-slate-200/80 scroll-mt-12 select-none"
    >
      {/* Subtle ambient light gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-blue-50/60 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-[1650px] mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* LEFT HEADER COLUMN */}
          <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold font-jakarta">
                Our
              </span>
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-bold text-slate-900 tracking-tight">
                  Categories
                </h2>
                {/* Cyan Accent Underline */}
                <div className="mt-2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-2 max-w-xs">
                Precision aquarium gear, bio-nutrients, effervescent CO2 diffusers, and sterile flora.
              </p>
            </div>

            {/* Carousel Navigation Buttons (←) (→) styled for White Section */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous Categories"
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-95 ${
                  currentIndex === 0
                    ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 hover:text-cyan-600 shadow-sm'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next Categories"
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                  currentIndex >= maxIndex
                    ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-cyan-500/25'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT CAROUSEL VIEWPORT - EXACTLY 3 CARDS IN ONE SLIDE (NO CARD CUT OFF) */}
          <div className="w-full flex-1 min-w-0 overflow-hidden py-8">
            <div
              className="flex transition-transform duration-500 ease-out gap-5 sm:gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${
                  cardsPerView === 3 ? '1.5rem' : cardsPerView === 2 ? '1.25rem' : '1rem'
                }) / ${cardsPerView}))`,
              }}
            >
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  style={{
                    width: `calc((100% - ${(cardsPerView - 1) * (cardsPerView === 3 ? 1.5 : 1.25)}rem) / ${cardsPerView})`,
                  }}
                  className={`group relative shrink-0 h-[200px] rounded-3xl bg-[#061228] border border-blue-900/40 ${cat.borderGlow} p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-visible shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-cyan-950/20`}
                >
                  {/* Card Background Radial Lighting */}
                  <div className="absolute inset-0 rounded-3xl bg-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

                  {/* Top Text Content (Left side of card) */}
                  <div className="relative z-10 max-w-[170px] sm:max-w-[190px] space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold font-jakarta text-white leading-tight group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                   
                  </div>

                  {/* Bottom-Left Corner Arrow Button */}
                  <div className="relative z-10 pt-2 flex items-center">
                    <a
                      href={cat.href}
                      aria-label={`Explore ${cat.title}`}
                      className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md group-hover:bg-cyan-400 group-hover:scale-110 active:scale-95 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-950 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                 
                  </div>

              
                  <div
                    className={`absolute pointer-events-none z-20 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-1 ${cat.cutoutClass}`}
                  >
                    <img
                      src={cat.cutoutImage}
                      alt={cat.title}
                      className="w-full h-[300px] object-contain "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
