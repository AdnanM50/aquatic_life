'use client';

import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure both videos autoplay smoothly even with browser autoplay restrictions
    const playVideo = (video: HTMLVideoElement | null) => {
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay prevented; fallback gracefully
          });
        }
      }
    };

    playVideo(desktopVideoRef.current);
    playVideo(mobileVideoRef.current);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#02040a] text-white flex items-center select-none">
      {/* Ambient Deep Ocean Top-Left Glow */}
      <div 
        className="pointer-events-none absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full blur-[140px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(16, 50, 140, 0.5) 0%, rgba(2, 4, 10, 0) 70%)',
        }}
      />

      {/* Desktop 16:9 Video (screens >= md) */}
      <div className="absolute inset-0 hidden md:block w-full h-full pointer-events-none z-0">
        <video
          ref={desktopVideoRef}
          src="/pc.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft edge blend on the far left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Mobile 9:16 / 9:19 Video (screens < md) */}
      <div className="absolute inset-0 block md:hidden w-full h-full pointer-events-none z-0">
        <video
          ref={mobileVideoRef}
          src="/mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile bottom-to-top subtle gradient for content legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 h-full flex flex-col justify-between py-12 md:py-16">
        {/* Top spacer */}
        <div className="w-full h-4" />

        {/* Left Content Area */}
        <div className="my-auto flex flex-col items-start justify-center max-w-full">
          {/* Main Headline */}
          <h1 className="font-woobly text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[7.2rem] 2xl:text-[8.2rem] leading-[0.88] sm:leading-[0.86] tracking-normal drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
            <span className="block">EXPLORE</span>
            <span className="block mt-1 sm:mt-2.5 whitespace-nowrap">THE OCEAN</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-[1.05rem] text-slate-300 font-light max-w-xs sm:max-w-sm md:max-w-md leading-relaxed drop-shadow-md">
            Discover the amazing depths and beauty of marine life that hides our world&apos;s oceans.
          </p>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8">
            <button
              type="button"
              id="hero-cta-button"
              className="group relative inline-flex items-center justify-center px-8 py-2.5 sm:px-10 sm:py-3 rounded-full text-white text-sm sm:text-base font-normal tracking-wide transition-all duration-300 ease-out border border-[#00E5FF] bg-black/40 backdrop-blur-md hover:bg-[#00E5FF]/20 hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] hover:border-cyan-300 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                Come On
              </span>
            </button>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="w-full h-4" />
      </div>

      {/* Rotating Badge ("AMAZING WORLD") */}
      {/* Positioned accurately relative to the jellyfish bell on desktop & responsive on mobile */}
      <div 
        className="pointer-events-none absolute z-20 transition-all duration-500
          left-[46%] sm:left-[45%] md:left-[41%] lg:left-[40%] xl:left-[42%]
          bottom-[24%] sm:bottom-[24%] md:bottom-[20%] lg:bottom-[18%] xl:bottom-[20%]
          -translate-x-1/2 translate-y-1/2"
      >
        <div className="relative w-28 h-28 sm:w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 flex items-center justify-center">
          <svg
            className="w-full h-full animate-spin-slow origin-center drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
              />
            </defs>
            <text
              fill="#ffffff"
              fontSize="12.5"
              fontWeight="600"
              letterSpacing="3.5"
              className="uppercase tracking-[0.22em] opacity-90 select-none"
            >
              <textPath href="#circlePath" startOffset="0%">
                • AMAZING WORLD • AMAZING WORLD
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
