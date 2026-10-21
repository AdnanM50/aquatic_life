'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Waves,
  ShieldCheck,
  Cpu,
  Droplets,
  X,
  CheckCircle2
} from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const STATS: StatItem[] = [
  {
    value: 14800,
    suffix: ' +',
    label: 'High-Tech Setups Delivered',
    sub: 'Worldwide premium shipments',
  },
  {
    value: 99.8,
    suffix: ' %',
    label: 'Biotope Equilibrium Rate',
    sub: 'Optimal biological stability',
  },
  {
    value: 5,
    suffix: ' -Year',
    label: 'Craftsmanship Warranty',
    sub: 'Silicon seal & glass integrity',
  },
];

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const sectionRef = useRef<HTMLElement>(null);
  const octopusContainerRef = useRef<HTMLDivElement>(null);
  const octopusImgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated counter on view
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 3D Parallax Mouse Tracking on Octopus using GSAP
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (e.clientY - rect.top) / rect.height - 0.5;

      if (octopusContainerRef.current) {
        gsap.to(octopusContainerRef.current, {
          x: xPercent * 30,
          y: yPercent * 22,
          rotationY: xPercent * 16,
          rotationX: -yPercent * 14,
          duration: 1.1,
          ease: 'power2.out',
        });
      }
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Click shockwave ripple on octopus
  const handleOctopusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!octopusContainerRef.current) return;
    const rect = octopusContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev.slice(-2), newRipple]);

    if (octopusImgRef.current) {
      gsap.fromTo(
        octopusImgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' }
      );
    }
  };

  // Counter animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 50;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts([
              Math.floor(STATS[0].value * easeOutQuart),
              parseFloat((STATS[1].value * easeOutQuart).toFixed(1)),
              Math.floor(STATS[2].value * easeOutQuart),
            ]);

            if (step >= steps) {
              setCounts([STATS[0].value, STATS[1].value, STATS[2].value]);
              clearInterval(timer);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Ambient Bio-Plankton Floating Particles in Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.35 + 0.12,
      speedX: (Math.random() - 0.5) * 0.22,
      alpha: Math.random() * 0.65 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.5 ? 'rgba(255, 87, 34,' : 'rgba(0, 229, 255,',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.05) * 0.01;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(0.9, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color.includes('255, 87') ? '#ff5722' : '#00e5ff';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full h-auto lg:h-[80vh] lg:max-h-[80vh] bg-gradient-to-b from-[#02040a] via-[#040c1d] to-[#02050f] px-6 sm:px-10 lg:px-16 flex flex-col justify-center overflow-hidden border-t border-white/5 select-none scroll-mt-12"
    >
      {/* Deep-sea caustics & glowing marine backdrops */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Coral & Cyan Aura matching site vibe */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] bg-gradient-to-br from-cyan-500/15 via-[#ff5722]/10 to-transparent rounded-full blur-[105px] animate-ocean-glow" />
        <div className="absolute top-1/3 right-1/4 w-[320px] h-[320px] bg-blue-600/12 rounded-full blur-[90px]" />

        {/* Diagonal ocean light rays */}
        <div className="absolute -top-24 left-1/3 w-[160px] h-[600px] bg-gradient-to-b from-cyan-400/8 via-cyan-500/4 to-transparent rotate-[25deg] blur-2xl pointer-events-none" />
      </div>

      <div className="relative max-w-[1550px] w-full mx-auto z-10 py-5 lg:py-0">
        {/* Top Kicker Badge - Pure Aquarium Accessories Brand Aesthetic */}
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] uppercase tracking-widest text-cyan-300 font-semibold font-jakarta">
              Precision Aquarium Equipment & Accessories
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Master Aquarist Quality Standard</span>
          </div>
        </div>

        {/* Main Content Grid: Octopus on Left, English E-Commerce About Copy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* OCTOPUS DISPLAY COLUMN (Transparent PNG, Face on Left, Fluid Animation) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Interactive container with 3D perspective and no background box */}
            <div
              ref={octopusContainerRef}
              onClick={handleOctopusClick}
              className="relative w-full max-w-[500px] h-[300px] sm:h-[360px] lg:h-[44vh] flex items-center justify-center cursor-pointer group"
              style={{ perspective: 1000 }}
            >
              {/* Floating Plankton Sparkle Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              />

              {/* Click Ripple Shockwaves */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                  }}
                  className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border border-cyan-400/90 bg-cyan-400/20 animate-ping z-30"
                />
              ))}

              {/* Glowing Bio-Aura directly behind the transparent octopus */}
              <div className="absolute w-[80%] h-[75%] rounded-full bg-gradient-to-r from-cyan-500/20 via-orange-500/15 to-transparent blur-3xl pointer-events-none animate-pulse" />

              {/* Floating Animation Wrapper */}
              <div className="relative w-full h-full flex items-center justify-center animate-float-gentle">
                {/* 100% Transparent Octopus Image with Face on Left Side */}
                <img
                  ref={octopusImgRef}
                  src="/octopus.png"
                  alt="Bioluminescent Deep-Sea Octopus"
                  className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_0_35px_rgba(0,229,255,0.4)] drop-shadow-[0_0_60px_rgba(255,87,34,0.3)] transition-transform duration-500"
                />
              </div>

              {/* Floating Specimen Holographic Tag */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 px-3 py-1.5 rounded-xl bg-[#020817]/85 backdrop-blur-md border border-cyan-500/25 text-left shadow-lg pointer-events-none">
                <div className="flex items-center space-x-1.5 text-cyan-400 text-[9px] font-semibold uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Bio-Safe Engineered Ecosystem</span>
                </div>
                <div className="text-[11px] text-slate-200 font-medium font-jakarta">
                  Cephalopod & Coral Grade Filtration
                </div>
              </div>
            </div>
          </div>

          {/* TEXT & STATS CONTENT COLUMN - Aquarium Accessories E-Commerce Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5">
            {/* Main Headline with Serif Typography and Cyan/Coral Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.2rem] font-cormorant font-normal leading-[1.08] tracking-normal text-white">
              Explore the{' '}
              <span className="font-semibold italic bg-gradient-to-r from-cyan-400 via-sky-300 to-[#ff5722] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                magical world
              </span>
              <br />
              of living aquascapes
            </h2>

            {/* Description Body Text Tailored for Accessories & Equipment Store */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-300/90 leading-relaxed max-w-xl font-light">
              At <strong className="text-white font-medium">AQUAFY Atelier</strong>, we curate
              ultra-clear low-iron glass aquariums, whisper-quiet multi-stage biomedia filtration,
              and spectrum-tuned coral lighting. Crafted for passionate aquarists seeking museum-grade
              underwater sanctuaries built with surgical precision.
            </p>

            {/* CTA Buttons: Direct to E-Commerce Shop Collection */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#categories"
                className="group relative inline-flex items-center space-x-2.5 px-7 py-3 rounded-full bg-[#ff5722] hover:bg-[#ff6e3d] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(255,87,34,0.5)] hover:shadow-[0_0_35px_rgba(255,87,34,0.75)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Shop Accessories & Tanks</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-cyan-400 px-3.5 py-2.5 rounded-full hover:bg-white/[0.05] border border-white/10 hover:border-cyan-400/30 transition-all cursor-pointer font-medium"
              >
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                <span>Custom Biotope Build</span>
              </button>
            </div>

            {/* Quick Statistics Bar - 3 Columns with Counter Animations */}
            <div className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {STATS.map((stat, idx) => {
                  const displayValue = hasAnimated
                    ? counts[idx].toLocaleString()
                    : stat.value.toLocaleString();

                  return (
                    <div key={idx} className="flex flex-col space-y-0.5">
                      <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight flex items-baseline font-jakarta">
                        <span>{displayValue}</span>
                        <span className="text-[#ff5722] text-xs sm:text-sm font-bold ml-0.5">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-snug">
                        {stat.label}
                      </p>
                      <span className="text-[10px] text-slate-500 font-light hidden sm:block">
                        {stat.sub}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM BIOTOPE & ACCESSORIES INQUIRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#050b1a] border border-cyan-500/30 p-6 sm:p-7 shadow-[0_0_60px_rgba(0,229,255,0.25)] text-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2.5 mb-2">
              <Droplets className="w-5 h-5 text-[#ff5722]" />
              <h3 className="text-lg sm:text-xl font-bold font-jakarta text-white">
                Custom Aquarium & Gear Consultation
              </h3>
            </div>
            <p className="text-xs text-slate-300 mb-5">
              Select your envisioned setup dimensions and filtration requirements. Our master
              aquascapers will prepare a bespoke equipment blueprint within 24 hours.
            </p>

            <div className="space-y-2.5 mb-5">
              {[
                {
                  title: 'Ultra-Clear Rimless Glass Biotope (60L — 240L)',
                  desc: 'Optiwhite 45° mitered joints with invisible German silicone bonding',
                  badge: 'Popular',
                },
                {
                  title: 'Intelligent Silent Canister Filtration + UV-C',
                  desc: 'Whisper-quiet DC impeller with biological multi-media trays',
                  badge: 'Flagship',
                },
                {
                  title: 'App-Controlled Smart Full-Spectrum LED Lighting',
                  desc: 'Sunrise/sunset simulation and custom PAR depth programming',
                  badge: 'Reef & Plant',
                },
              ].map((tier, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <div className="pr-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{tier.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{tier.desc}</p>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 whitespace-nowrap">
                    {tier.badge}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                alert(
                  'Consultation request submitted! A senior aquarist will reach out with your custom equipment blueprint.'
                );
                setIsModalOpen(false);
              }}
              className="w-full py-3 rounded-2xl bg-[#ff5722] hover:bg-[#ff6e3d] font-semibold text-xs sm:text-sm tracking-wide text-white shadow-[0_0_25px_rgba(255,87,34,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              Request Custom Blueprint
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
