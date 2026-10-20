'use client';

import React from 'react';
import { ShieldCheck, Truck, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

export default function FeaturesBar() {
  const features = [
    {
      icon: Truck,
      title: 'Climate-Controlled Transit',
      desc: 'Insulated thermal packaging with pure oxygen injection for 100% stress-free journey.',
    },
    {
      icon: ShieldCheck,
      title: '7-Day Live Arrival Guarantee',
      desc: 'Healthy, active, and fully acclimatized specimens or immediate replacement/refund.',
    },
    {
      icon: Sparkles,
      title: 'Rare Heritage Genetics',
      desc: 'Directly captive-bred from award-winning master aquarist show bloodlines.',
    },
    {
      icon: HeartHandshake,
      title: 'Marine Biologist Support',
      desc: 'Lifetime dedicated guidance on water chemistry, feeding, and tank scaping.',
    },
  ];

  return (
    <section className="relative z-20 w-full bg-white text-slate-900 pt-10 sm:pt-14 pb-20 px-6 sm:px-12 lg:px-20 border-t border-slate-100">
      <div className="max-w-[1500px] mx-auto">
        {/* Subtle Section Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
              <span>The Aquafy Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-outfit">
              Curated Excellence in Marine Living
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed">
            Every specimen is meticulously evaluated for symmetry, fin spread, and vibrant iridescent coloration prior to dispatch.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(0,180,216,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* E-Commerce Mini Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-[#071936] to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-cyan-500/10 to-transparent pointer-events-none" />
          <div className="space-y-1 text-center md:text-left z-10">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Seasonal Collector Drop
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Exclusive Halfmoon & Samurai Dragon Bettas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Only 12 captive-bred specimens available for immediate shipment this week.
            </p>
          </div>
          <button
            type="button"
            className="z-10 inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#ff5722] hover:bg-[#ff6e3d] text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(255,87,34,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Claim Your Specimen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
