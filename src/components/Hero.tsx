'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronLeft, ChevronRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import BubbleCanvas from './BubbleCanvas';
import WaveDivider from './WaveDivider';

interface BettaSlide {
  id: string;
  name: string;
  species: string;
  subTitle: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  description: string;
  image: string;
  tailOverlapClass: string;
  fishOffsetClass: string;
  ph: string;
  temp: string;
  rarity: string;
  price: string;
}

const BETTA_SLIDES: BettaSlide[] = [
  {
    id: '01',
    name: 'Royal Blue Halfmoon',
    species: 'Betta Splendens',
    subTitle: 'SIAMESE FIGHTING FISH',
    headlineLine1: 'Amazing',
    headlineLine2: 'Aquarium',
    headlineLine3: 'Collection',
    description:
      'The Siamese fighting fish, also known as the betta, is a popular fish in the aquarium trade. Bettas are known for their vibrant iridescent colors and majestic flowing halfmoon fins that ripple with liquid grace.',
    image: '/betta-vertical.png',
    // Tail cascades down through the wave boundary
    tailOverlapClass: 'translate-y-12 sm:translate-y-16 lg:translate-y-20 scale-105',
    fishOffsetClass: 'lg:translate-x-20 xl:translate-x-28',
    ph: '6.8 - 7.5',
    temp: '78° - 82°F',
    rarity: 'Show Grade AAA',
    price: '$89.00',
  },
  {
    id: '02',
    name: 'Fire Dragon King',
    species: 'Betta Splendens (Plakat)',
    subTitle: 'EXOTIC DRAGON SCALE',
    headlineLine1: 'Multiple Fishes',
    headlineLine2: 'To Choose From',
    headlineLine3: 'The Best Place',
    description:
      'Featuring dense metallic turquoise scales and hyper-vibrant crimson finnage. Bred for territorial majesty, hardiness, and breathtaking underwater presence.',
    image: '/betta-horizontal.png',
    tailOverlapClass: 'translate-y-8 sm:translate-y-12 lg:translate-y-14 scale-100',
    fishOffsetClass: 'lg:translate-x-16 xl:translate-x-24',
    ph: '6.5 - 7.4',
    temp: '76° - 80°F',
    rarity: 'Master Breeder',
    price: '$110.00',
  },
  {
    id: '03',
    name: 'Opal Crowntail Blue',
    species: 'Betta Splendens',
    subTitle: 'ROYAL CROWNTAIL',
    headlineLine1: 'Living Marine',
    headlineLine2: 'Haute Horlogerie',
    headlineLine3: 'Collection',
    description:
      'Intricate ray-reduction finnage resembling a sculpted imperial crown. Curated for discerning luxury exhibition tanks and high-end aquascapes.',
    image: '/betta-vertical.png',
    tailOverlapClass: 'translate-y-12 sm:translate-y-16 lg:translate-y-20 scale-105',
    fishOffsetClass: 'lg:translate-x-20 xl:translate-x-28',
    ph: '7.0 - 7.6',
    temp: '77° - 81°F',
    rarity: 'Collector Lineage',
    price: '$95.00',
  },
  {
    id: '04',
    name: 'Celestial Galaxy Koi',
    species: 'Betta Splendens',
    subTitle: 'LIMITED RUN SPECIMEN',
    headlineLine1: 'Pure Aquatic',
    headlineLine2: 'Sculpture & Light',
    headlineLine3: 'Collection',
    description:
      'Marbled iridescent blue, ruby red, and translucent cellophane pigments. Each specimen has a unique genomic constellation pattern.',
    image: '/betta-horizontal.png',
    tailOverlapClass: 'translate-y-8 sm:translate-y-12 lg:translate-y-14 scale-100',
    fishOffsetClass: 'lg:translate-x-16 xl:translate-x-24',
    ph: '6.8 - 7.2',
    temp: '78° - 82°F',
    rarity: 'Ultra Rare 1 of 1',
    price: '$135.00',
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // References for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const fishContainerRef = useRef<HTMLDivElement>(null);
  const fishImageRef = useRef<HTMLImageElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const badgeKickerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const currentSlide = BETTA_SLIDES[currentSlideIndex];

  // GSAP Initial Stagger Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([giantTextRef.current], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
      });

      gsap.set([fishContainerRef.current], {
        opacity: 0,
        y: 60,
        scale: 0.9,
      });

      gsap.set(
        [
          badgeKickerRef.current,
          headlineRef.current,
          descRef.current,
          ctaBtnRef.current,
          specsRef.current,
          paginationRef.current,
        ],
        {
          opacity: 0,
          y: 35,
        }
      );

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(giantTextRef.current, {
        opacity: 0.16,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.8,
      })
        .to(
          fishContainerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'expo.out',
          },
          '-=1.2'
        )
        .to(
          [badgeKickerRef.current, headlineRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
          },
          '-=1.0'
        )
        .to(
          [descRef.current, ctaBtnRef.current, specsRef.current, paginationRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=0.7'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Slide transition animation
  const changeSlide = (newIndex: number) => {
    if (newIndex === currentSlideIndex) return;

    if (fishImageRef.current) {
      gsap.to(fishImageRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentSlideIndex(newIndex);
          gsap.fromTo(
            fishImageRef.current,
            { opacity: 0, scale: 1.08, y: -20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.2)' }
          );
        },
      });
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };

  // Parallax 3D Mouse Tracking on Fish & Background
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (e.clientY - rect.top) / rect.height - 0.5;

      if (fishContainerRef.current) {
        gsap.to(fishContainerRef.current, {
          x: xPercent * 35,
          y: yPercent * 25,
          rotationY: xPercent * 14,
          rotationX: -yPercent * 12,
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      if (giantTextRef.current) {
        gsap.to(giantTextRef.current, {
          x: -xPercent * 20,
          y: -yPercent * 15,
          duration: 1.5,
          ease: 'power2.out',
        });
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic Button Effect on CTA
  useEffect(() => {
    const btn = ctaBtnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100vh] bg-[#02050f] text-white overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-20 select-none font-jakarta"
    >
      {/* 1. DEEP ABYSSAL BACKGROUND LAYERS */}
      {/* Radial oceanic glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% 30%, #082452 0%, #030e24 45%, #01040b 100%)',
        }}
      />

      {/* Volumetric Underwater Caustic Light Rays */}
      <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden opacity-35">
        <div
          className="absolute -top-32 left-1/4 w-[160px] h-[1300px] bg-gradient-to-b from-cyan-300/35 via-blue-500/10 to-transparent blur-3xl transform -rotate-15 animate-light-ray-1 origin-top"
        />
        <div
          className="absolute -top-32 right-1/4 w-[240px] h-[1400px] bg-gradient-to-b from-teal-200/25 via-cyan-600/10 to-transparent blur-3xl transform -rotate-20 animate-light-ray-2 origin-top"
        />
      </div>

      {/* Interactive Water Bubbles Canvas Overlay */}
      <BubbleCanvas />

      {/* 2. TYPOGRAPHY DEPTH LAYER: GIANT "AQUARIUM" BACKGROUND TEXT (Reference Image 1) */}
      <div
        ref={giantTextRef}
        className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center select-none overflow-hidden"
      >
        <span
          className="font-outfit font-black text-[18vw] sm:text-[17vw] lg:text-[16vw] xl:text-[17vw] tracking-[0.08em] uppercase text-center leading-none transform -translate-y-8 md:-translate-y-12 select-none"
          style={{
            color: 'rgba(255, 255, 255, 0.08)',
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
            textShadow: '0 0 80px rgba(0, 180, 216, 0.15)',
          }}
        >
          AQUARIUM
        </span>
      </div>

      {/* 3. CENTER FISH GRAPHIC LAYER WITH 3D DEPTH & FRAME-BREAKING WAVE OVERLAP */}
      {/* Placed at z-25, directly IN FRONT of "AQUARIUM" (z-5) and overlapping into Wave (z-20) */}
      <div
        ref={fishContainerRef}
        className="absolute inset-0 z-25 flex items-center justify-center pointer-events-none"
        style={{ perspective: 1200 }}
      >
        <div
          className={`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] lg:w-[720px] lg:h-[720px] xl:w-[800px] xl:h-[800px] flex items-center justify-center transition-all duration-700 ${currentSlide.tailOverlapClass} ${currentSlide.fishOffsetClass}`}
        >
          {/* Ambient luminous glow directly behind fish */}
          <div className="absolute w-[60%] h-[60%] rounded-full bg-cyan-500/20 blur-[90px] pointer-events-none animate-pulse" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={fishImageRef}
            src={currentSlide.image}
            alt={currentSlide.name}
            className="w-full h-full object-contain filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] animate-float-gentle will-change-transform"
          />

          {/* Floating Specimen Hologram Tag */}
          <div className="absolute top-[28%] right-[10%] sm:right-[15%] hidden md:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/65 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.25)] animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-semibold tracking-wider text-cyan-200 uppercase">
              {currentSlide.rarity}
            </span>
          </div>
        </div>
      </div>

      {/* 4. MAIN FOREGROUND CONTENT CONTAINER (Center-left & Bottom-left) */}
      <div className="relative z-30 w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 flex-1 flex flex-col justify-between pointer-events-auto">
        {/* Top spacer */}
        <div />

        {/* Center-Left Content Area */}
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl my-auto">
          {/* Subtitle Species Kicker Badge (Reference Image 1 & 3) */}
          <div ref={badgeKickerRef} className="flex items-center space-x-3 mb-4 sm:mb-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-[0.22em] uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{currentSlide.subTitle}</span>
            </div>
            <span className="text-xs text-slate-400 font-mono tracking-wider">
              [{currentSlide.species}]
            </span>
          </div>

          {/* Main Headline (Reference Image 3 Inspiration, Luxury Outfit Typography) */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.6rem] font-extrabold tracking-tight text-white leading-[1.06] drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)] font-outfit"
          >
            <span>{currentSlide.headlineLine1} </span>
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {currentSlide.headlineLine2}
            </span>
            <span className="block text-white">{currentSlide.headlineLine3}</span>
          </h1>

          {/* Species Description (Reference Image 1 Inspiration) */}
          <p
            ref={descRef}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[1.05rem] text-slate-300/90 font-light leading-relaxed max-w-lg drop-shadow-md"
          >
            {currentSlide.description}
          </p>

          {/* Live Water Metrics & Specs Bar */}
          <div
            ref={specsRef}
            className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300 border border-white/10 py-3 max-w-lg backdrop-blur-md bg-black/30 px-5 rounded-2xl shadow-lg"
          >
            <div>
              <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                pH Level
              </span>
              <span className="font-semibold text-cyan-300">{currentSlide.ph}</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                Water Temp
              </span>
              <span className="font-semibold text-cyan-300">{currentSlide.temp}</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                Lineage Price
              </span>
              <span className="font-bold text-orange-400 text-sm">{currentSlide.price}</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            {/* Glowing Coral-Orange Pill CTA Button (Reference Image 3 Inspiration) */}
            <a
              ref={ctaBtnRef}
              id="hero-shop-cta"
              href="#shop"
              className="group relative inline-flex items-center justify-center space-x-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#ff5722] via-[#ff681a] to-[#ff7e00] text-white font-bold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(255,87,34,0.55)] hover:shadow-[0_0_45px_rgba(255,87,34,0.85)] transition-all duration-300 cursor-pointer overflow-hidden border border-orange-400/40"
            >
              {/* Inner sheen */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative z-10">Shop Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Secondary Frosted Glass Button */}
            <a
              href="#bettas"
              className="inline-flex items-center space-x-2 px-6 sm:px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-semibold tracking-wide backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Specimen Dossier</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Slider Arrows + Ambient Sound Toggle */}
        <div className="flex items-center justify-between pt-6 sm:pt-8">
          {/* Left/Right Slider Arrows (Reference Image 2 Inspiration) */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                changeSlide(
                  (currentSlideIndex - 1 + BETTA_SLIDES.length) % BETTA_SLIDES.length
                )
              }
              aria-label="Previous Specimen"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.08] hover:bg-white/[0.2] border border-white/15 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() =>
                changeSlide((currentSlideIndex + 1) % BETTA_SLIDES.length)
              }
              aria-label="Next Specimen"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/[0.08] hover:bg-white/[0.2] border border-white/15 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
              {currentSlide.id} / 0{BETTA_SLIDES.length}
            </span>
          </div>

        </div>
      </div>


      <div
        ref={paginationRef}
        className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-5"
      >
        {BETTA_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => changeSlide(idx)}
              className="group relative flex items-center justify-center cursor-pointer"
              aria-label={`Select specimen ${slide.id}: ${slide.name}`}
            >
              {/* Tooltip on Hover */}
              <div className="absolute right-8 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[11px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md">
                {slide.id} — {slide.name}
              </div>

              {/* Indicator Dot (Image 1 style: hollow circle, solid when active) */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3.5 h-3.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] scale-110'
                    : 'w-2.5 h-2.5 bg-transparent border-2 border-white/50 hover:border-white hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* 6. SIGNATURE MULTI-LAYER UNDULATING SVG WAVE DIVIDER */}
      {/* Positioned at bottom edge (z-20), transitioning directly into the clean white lower section */}
      <WaveDivider />
    </section>
  );
}
