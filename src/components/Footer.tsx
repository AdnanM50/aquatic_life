'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Send,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#010714] text-white overflow-hidden">
      {/* 1. Seamless Organic Wave Transition from light Reviews section into deep ocean */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 pointer-events-none">
        {/* Soft bioluminescent glow behind wave crest */}
        <div className="absolute top-10 left-1/4 w-3/4 h-28 bg-gradient-to-b from-cyan-400/25 via-blue-600/15 to-transparent blur-3xl" />

        {/* Crisp Pure White Wave merging with Reviews section + Bioluminescent Crest Line */}
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-32 text-white"
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="crestGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff5722" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Pure solid white upper body - seamless transition from Reviews section */}
          <path
            fill="#ffffff"
            d="M0,0 L1440,0 L1440,60 C1240,140 980,35 680,105 C380,175 160,55 0,110 Z"
          />

          {/* Luminous Bioluminescent Cyan & Coral Wave Crest */}
          <path
            fill="none"
            stroke="url(#crestGlow)"
            strokeWidth="3.5"
            d="M0,110 C160,55 380,175 680,105 C980,35 1240,140 1440,60"
          />
        </svg>
      </div>

      {/* Ambient Deep Ocean Background Glows & Ripple Rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Deep cyan bioluminescent abyss glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px]" />
        {/* Subtle warm coral reef illumination */}
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#ff5722]/10 via-cyan-900/10 to-transparent rounded-full blur-[130px]" />
        {/* Deep navy base radial */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px]" />

        {/* Decorative subtle water rings */}
        <div className="absolute top-48 right-12 w-96 h-96 rounded-full border border-cyan-400/10 animate-spin-slow opacity-60" />
        <div className="absolute top-64 right-28 w-64 h-64 rounded-full border border-cyan-400/5 opacity-50" />
        <div className="absolute bottom-32 -left-20 w-80 h-80 rounded-full border border-cyan-400/10 opacity-40" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-16 z-20">
        
        {/* 2. Floating VIP Concierge & Rare Specimen Import Drop Card */}
        <div className="relative -mt-10 sm:-mt-14 mb-16 lg:mb-20">
          <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-cyan-400/30 bg-gradient-to-r from-[#03152e]/95 via-[#06244c]/90 to-[#021124]/95 shadow-[0_24px_70px_rgba(0,140,255,0.22)] backdrop-blur-2xl">
            {/* Animated Light Sweep Effect */}
            <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent rotate-12 animate-pulse" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Left Column: Copy & Value Proposition */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Exclusive Aquarist Collective</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-jakarta leading-tight">
                  Be First in Line for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                    Rare Lineage Betta Drops
                  </span>
                  <br className="hidden sm:inline" /> & Master Aquascaping Biotopes.
                </h3>

                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  Join 12,000+ elite marine hobbyists. Receive weekly specimen unboxing logs, 48-hour priority access to show-grade imports, and direct water chemistry consultations.
                </p>

                {/* Micro Perks Strip */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Show-Grade Lineage Proof</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Pure Oxygen Transit Safe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Zero Pest Snail Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Subscription Form */}
              <div className="lg:max-w-md w-full">
                {isSubscribed ? (
                  <div className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 flex items-center space-x-3 shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-white">Welcome to the Sanctuary Circle!</p>
                      <p className="text-xs text-emerald-300 mt-0.5">Check your inbox for your VIP $25 welcome specimen voucher.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-300/70" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your VIP email address..."
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#020b1a]/80 border border-cyan-400/30 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/25 transition-all shadow-inner"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-[#ff5722] hover:from-cyan-400 hover:via-blue-500 hover:to-[#ff6f43] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,180,255,0.4)] hover:shadow-[0_0_35px_rgba(255,87,34,0.55)] transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer shrink-0"
                    >
                      <span>Join Atelier</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
                <p className="text-[11px] text-slate-400 mt-2.5 text-center sm:text-left">
                  🔒 Strictly confidential. No spam. Instant 1-click unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Main Footer Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-cyan-400/15">
          
          {/* Column 1: Brand & Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Logo Emblem */}
              <a href="#" className="inline-flex items-center space-x-3 group select-none">
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-[#ff5722] p-[1.5px] shadow-[0_0_25px_rgba(0,229,255,0.35)] group-hover:shadow-[0_0_35px_rgba(255,87,34,0.55)] transition-all duration-500">
                  <div className="w-full h-full rounded-[14px] bg-[#020712] flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-cyan-400 group-hover:text-orange-400 transition-colors duration-300 transform -rotate-12 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6Z" />
                      <path d="M18 12v.5" />
                      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
                      <path d="M7 10.67C7 8 5.58 5.97 2.73 4 3 7.5 3 16.5 2.73 20 5.58 18.03 7 16 7 13.33" />
                      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    <span className="font-extrabold text-2xl tracking-tight text-white font-woobly drop-shadow-md">
                      AQUAFY
                    </span>
                    <span className="text-orange-500 text-2xl leading-none font-bold">.</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-400/90 font-semibold -mt-1">
                    Aquatic & Betta Store
                  </span>
                </div>
              </a>

              <p className="text-sm text-slate-300 leading-relaxed mt-4 max-w-sm">
                Your premier online aquarium destination for ethically bred show-grade Betta fish, ultra-clear rimless tanks, living aquatic plants, and premium supplies delivered directly to your doorstep.
              </p>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Follow Our Aquascapes
              </div>
              <div className="flex items-center space-x-2.5">
                {[
                  {
                    name: 'WhatsApp Support',
                    href: 'https://whatsapp.com',
                    icon: (
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    ),
                    bgHover: 'hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
                  },
                  {
                    name: 'Instagram',
                    href: 'https://instagram.com',
                    icon: (
                      <svg className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    bgHover: 'hover:border-pink-400/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(244,114,182,0.3)]',
                  },
                  {
                    name: 'YouTube',
                    href: 'https://youtube.com',
                    icon: (
                      <svg className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                    bgHover: 'hover:border-red-400/50 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]',
                  },
                  {
                    name: 'Discord Community',
                    href: 'https://discord.com',
                    icon: (
                      <svg className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    ),
                    bgHover: 'hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className={`group w-10 h-10 rounded-xl bg-[#03152e] border border-cyan-400/20 flex items-center justify-center transition-all duration-300 ${s.bgHover}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Shop Categories (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Shop</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                'Live Betta Fish',
                'Rimless Aquariums',
                'Aquatic Plants',
                'Hardscape & Driftwood',
                'Filtration & Pumps',
                'CO₂ & LED Lighting',
                'Fish Food & Care',
                'New Arrivals & Sale',
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#categories"
                    className="hover:text-cyan-300 transition-colors inline-flex items-center space-x-1.5 group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-400/60 group-hover:translate-x-0.5 group-hover:text-cyan-300 transition-all" />
                    <span>{category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care & Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Customer Care</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                { label: 'Track Your Order', desc: 'Real-time FedEx shipment tracking' },
                { label: 'Live Arrival Guarantee', desc: '100% full refund / replacement' },
                { label: 'Shipping Rates & Schedule', desc: 'Mon – Wed safe departure only' },
                { label: 'Betta Acclimation Guide', desc: 'Step-by-step unboxing care' },
                { label: 'Returns & Refund Policy', desc: '30-day hardware return guarantee' },
                { label: 'Help Center & FAQs', desc: 'Answers to common questions' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#reviews"
                    className="group block hover:text-cyan-300 transition-colors py-0.5"
                  >
                    <div className="font-medium text-slate-200 group-hover:text-cyan-300 flex items-center space-x-1.5">
                      <ChevronRight className="w-3 h-3 text-cyan-400/60 group-hover:translate-x-0.5 group-hover:text-cyan-300 transition-all" />
                      <span>{item.label}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 pl-4">{item.desc}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Showroom (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Contact & Support</span>
            </h4>

            {/* Customer Support Info */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#03152d]/60 border border-cyan-400/15 hover:border-cyan-400/35 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Customer Support</span>
                  <a href="tel:+18001232782" className="text-cyan-300 hover:underline">
                    +1 (800) 123-AQUA
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Mon–Fri: 9:00 AM – 6:00 PM EST</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#03152d]/60 border border-cyan-400/15 hover:border-cyan-400/35 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Email Inquiries</span>
                  <a href="mailto:support@aquafy.com" className="text-cyan-300 hover:underline">
                    support@aquafy.com
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Response within 24 hours</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-[#03152d]/60 border border-cyan-400/15 hover:border-cyan-400/35 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Showroom & Hatchery</span>
                  <span className="text-slate-400">123 Coral Reef Way, Biscayne Bay, FL 33139</span>
                </div>
              </div>

              {/* Direct WhatsApp Quick Action */}
              <a
                href="https://wa.me/18001232782"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600/30 to-teal-600/20 border border-emerald-400/30 hover:border-emerald-400/60 text-emerald-200 text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>
          </div>
        </div>

        {/* 4. E-Commerce Payment & Security Strip */}
        <div className="py-6 border-b border-cyan-400/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Guaranteed 256-bit SSL encrypted checkout</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Safe live specimen arrival</span>
          </div>

          {/* Payment Method Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Visa', 'Mastercard', 'AMEX', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 rounded-md bg-[#03152e] border border-cyan-400/20 text-[11px] font-semibold text-slate-300 tracking-wide"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Sub-Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Certification */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-0 sm:space-x-3 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} AQUAFY Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Registered Florida Aquaculture Facility #AQ-94281</span>
          </div>

          {/* Legal / Policy Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <a href="#reviews" className="hover:text-cyan-300 transition-colors">
              Live Arrival Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-cyan-300 transition-colors">
              Shipping & Delivery
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-cyan-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#" className="hover:text-cyan-300 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Smooth Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to surface"
            className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-[#03152e] border border-cyan-400/30 hover:border-cyan-400/70 text-slate-300 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,180,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.35)] cursor-pointer"
          >
            <span className="text-xs font-semibold">Back to Top</span>
            <div className="w-5 h-5 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400 flex items-center justify-center transition-colors">
              <ArrowUp className="w-3 h-3 text-cyan-300 group-hover:text-black transition-colors group-hover:-translate-y-0.5 duration-200" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
