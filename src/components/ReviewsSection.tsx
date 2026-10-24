'use client';

import React from 'react';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
} from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  productImage: string;
  initials: string;
  avatarGradient: string;
  highlightBadge: string;
  helpfulCount: number;
  verified: boolean;
  specimenTag: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    role: 'Hardscape Aquascaper • 8 Years Hobbyist',
    location: 'Portland, OR',
    rating: 5,
    date: '2 days ago',
    title: 'Packaging was pristine — my Samurai Dragon arrived hyper-active!',
    comment:
      'I was genuinely nervous ordering a live specimen across states, but the thermal insulation box with 100% pure oxygen injection was scientific perfection. Water was at exactly 76°F upon unboxing. His fin symmetry and metallic scales are museum-grade.',
    productName: 'Samurai Black Dragon Halfmoon Betta',
    productImage: '/betta-vertical.png',
    initials: 'MV',
    avatarGradient: 'from-blue-600 via-cyan-500 to-indigo-600',
    highlightBadge: 'Water Temp: 76°F On Arrival',
    specimenTag: 'Show Grade AAA',
    helpfulCount: 38,
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    role: 'Biotope Specialist & Planted Tank Creator',
    location: 'Austin, TX',
    rating: 5,
    date: '4 days ago',
    title: 'The Optiwhite rimless tank has optical clarity unlike anything else.',
    comment:
      'The 45° mitered glass joints with transparent German silicone are virtually imperceptible. When filled with water, it feels like floating zero-gravity water in mid-air. Zero green tint distortion from any angle.',
    productName: '180L Ultra-Clear Low-Iron Biotope Tank',
    productImage: '/category-filtration.jpg',
    initials: 'ER',
    avatarGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    highlightBadge: '99.8% Light Transmittance',
    specimenTag: 'German Silicone Mitered',
    helpfulCount: 29,
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'David Chen',
    role: 'Iwagumi Aquascaper',
    location: 'Vancouver, BC',
    rating: 5,
    date: '1 week ago',
    title: 'Zero pest snails, pristine tissue cultures, instant carpet growth.',
    comment:
      'Usually in-vitro cups melt back during acclimatization, but Aquafy’s sterile Monte Carlo and Bucephalandra Deep Purple established roots in under 72 hours under high PAR lighting. The ceramic CO2 diffuser produces micro-dust clouds.',
    productName: 'Sterile Tissue Culture Bundle & CO2 System',
    productImage: '/plant-cutout.png',
    initials: 'DC',
    avatarGradient: 'from-purple-600 via-indigo-500 to-pink-500',
    highlightBadge: '100% Snail-Free Sterile Flora',
    specimenTag: 'Lab-Sterile In-Vitro',
    helpfulCount: 44,
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Sophia Jenkins',
    role: 'Reef & Freshwater Enthusiast',
    location: 'Miami, FL',
    rating: 5,
    date: '2 weeks ago',
    title: 'Marine biologist consultation saved my water chemistry parameters.',
    comment:
      'Their WhatsApp/concierge support walked me through pH buffering and GH balancing before introducing my rare wild-type bettas. That level of after-sales dedication is practically non-existent elsewhere in this hobby.',
    productName: 'Lifetime Biologist Consultation & Bio-Nutrients',
    productImage: '/fertilizer-cutout.png',
    initials: 'SJ',
    avatarGradient: 'from-amber-500 via-orange-500 to-rose-500',
    highlightBadge: '14-Min Biologist Response',
    specimenTag: 'Dedicated Concierge',
    helpfulCount: 52,
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Julian Moreau',
    role: 'Custom Aquarium Architect',
    location: 'Montreal, QC',
    rating: 5,
    date: '3 weeks ago',
    title: 'The whisper-quiet canister filtration lives up to the promise.',
    comment:
      'Operating in our master bedroom right beside the bed. I literally have to touch the canister head to feel vibration to know it’s running. Flow rate is laminar and gentle enough for long-finned bettas without buffeting.',
    productName: 'Silent Multi-Stage Biomedia Canister Filter',
    productImage: '/co2-cutout.png',
    initials: 'JM',
    avatarGradient: 'from-cyan-600 via-blue-600 to-slate-800',
    highlightBadge: '< 22 dB Silent Impeller',
    specimenTag: 'Sub-22dB Acoustical Rating',
    helpfulCount: 19,
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Aria Thorne',
    role: 'Show Betta Collector',
    location: 'San Diego, CA',
    rating: 5,
    date: '1 month ago',
    title: 'Color saturation on the Candy Nemo Koi is breathtaking.',
    comment:
      'Photos on the site didn’t even capture how stunning the iridescent copper and orange marble patterns shine under 6500K spectrum. He ate micro-pellets eagerly within 2 hours of unboxing and flares with unmatched pride.',
    productName: 'Galaxy Koi Halfmoon Plakat Betta',
    productImage: '/betta-horizontal.png',
    initials: 'AT',
    avatarGradient: 'from-rose-500 via-pink-500 to-orange-500',
    highlightBadge: 'A+ Show Grade Fin Spread',
    specimenTag: 'Award Show Lineage',
    helpfulCount: 63,
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative z-20 w-full bg-white text-slate-900 pt-16 sm:pt-24 pb-24 sm:pb-32 px-6 sm:px-12 lg:px-20 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Oceanic Ambient Light Glows matching site vibe */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 size-150 bg-linear-to-br from-cyan-100/60 to-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 size-125 bg-blue-50/70 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 right-10 size-100 bg-orange-100/30 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto z-10">
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            {/* Pill Kicker */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
              <span>Verified Aquarist Community</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-jakarta leading-[1.15]">
              Loved by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                4,800+ Aquascapers
              </span>
              <br />& Marine Keepers Worldwide
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed mt-3">
              Read transparent unboxing records, live arrival feedback, and long-term biotope stability reviews from certified hobbyists and master aquascapers.
            </p>
          </div>

          {/* Social Proof Trust Score Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 border border-slate-200/90 p-5 rounded-3xl shadow-sm backdrop-blur-sm shrink-0">
            {/* Rating Number */}
            <div className="flex items-center space-x-4 pr-0 sm:pr-5 sm:border-r border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-jakarta tracking-tight">
                4.95
              </div>
              <div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">
                  Overall Rating
                </div>
                <div className="text-[11px] text-slate-500">
                  Based on 2,840+ reviews
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-row sm:flex-col justify-between sm:justify-center gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  <strong className="text-emerald-700">99.4%</strong> Live Arrival Rate
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-3.5 h-3.5 text-cyan-600" />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  <strong className="text-cyan-700">100%</strong> Verified Buyers
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {INITIAL_REVIEWS.map((rev) => {
            return (
              <div
                key={rev.id}
                className="group relative transition-all duration-500 hover:-translate-y-2"
              >
                {/* Top-Left Stylized Quotation Badge (from reference image) */}
                <div className="absolute -top-5 -left-4 sm:-top-6 sm:-left-5 z-20 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <svg
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="w-14 h-14 sm:w-16 sm:h-16 text-[#0084ff] -scale-x-100 drop-shadow-[0_10px_22px_rgba(0,132,255,0.6)]"
                    aria-hidden="true"
                  >
                    <path d="M 22 50 C 20 32, 30 14, 46 4 C 40 18, 44 26, 54 26 A 34 34 0 1 1 22 50 Z" />
                  </svg>
                </div>

                {/* Bottom-Right Stylized Quotation Badge (from reference image) */}
                <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-5 z-20 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1">
                  <svg
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="w-14 h-14 sm:w-16 sm:h-16 text-[#0084ff] -scale-x-100 rotate-180 drop-shadow-[0_10px_22px_rgba(0,132,255,0.6)]"
                    aria-hidden="true"
                  >
                    <path d="M 22 50 C 20 32, 30 14, 46 4 C 40 18, 44 26, 54 26 A 34 34 0 1 1 22 50 Z" />
                  </svg>
                </div>

                {/* Card Container: Preserving full background design and hover animation */}
                <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-tr-[8rem] rounded-bl-[8rem] rounded-[2.2rem] border border-cyan-300/25 bg-[#03142b] text-white shadow-[0_18px_42px_rgba(2,21,48,0.22)] transition-all duration-500 group-hover:border-cyan-300/60 group-hover:shadow-[0_28px_65px_rgba(0,135,190,0.32)]">
                  {/* Preserved Card Background: Water depth, coral glow, and concentric ripples */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_5%,rgba(34,211,238,0.24),transparent_29%),radial-gradient(circle_at_4%_100%,rgba(255,87,34,0.22),transparent_35%),linear-gradient(145deg,#062d55_0%,#031a37_47%,#020b1d_100%)]" />
                  <div className="pointer-events-none absolute -right-12 top-24 h-40 w-40 rounded-full border border-cyan-200/15 transition-transform duration-700 group-hover:scale-125" />
                  <div className="pointer-events-none absolute -right-8 top-32 h-28 w-28 rounded-full border border-cyan-200/10" />
                  <div className="pointer-events-none absolute -left-8 top-[55%] h-20 w-64 rounded-[100%] border-t border-cyan-100/20 opacity-70 rotate-[-8deg]" />

                  {/* Card Content */}
                  <div className="relative z-10 p-6 sm:p-8 flex  flex-col items-center flex-1 justify-between">
                    {/* Top Center: 5 Stars */}
                    <div className="w-full flex flex-col items-center">
                      <div className="flex items-center justify-center space-x-1.5 pt-1 mb-5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]"
                          />
                        ))}
                      </div>

                      {/* Centered Italic Review Text (matching reference image) */}
                      <p className="text-center italic text-slate-200 text-sm sm:text-[14.5px] font-normal leading-relaxed px-2 sm:px-4 mb-6">
                        {rev.comment}
                      </p>
                    </div>

                    {/* Author & Details Section (matching reference image) */}
                    <div className="w-full flex flex-col items-center">
                      {/* Author Name in vibrant cyan-blue with subtle italic styling */}
                      <div className="flex items-center justify-center space-x-1.5">
                        <h3 className="text-center italic font-bold text-sky-400 text-lg sm:text-xl font-jakarta tracking-wide">
                          {rev.name}
                        </h3>
                        {rev.verified && (
                          <span title="Verified Aquafy Buyer" className="inline-flex">
                            <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0" />
                          </span>
                        )}
                      </div>

                      {/* Subtitle / Role & Location */}
                      <p className="text-center text-xs text-slate-400 font-medium mt-1">
                        {rev.role}
                      </p>

                 
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
