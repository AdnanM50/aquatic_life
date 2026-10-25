'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ShoppingCart,
  Heart,
  Check,
  Star,
  Sparkles,
  ShieldCheck,
  Flame,
  Droplets,
} from 'lucide-react';

export interface ProductVariant {
  name: string;
  colorHex: string;
  badge?: string;
  image?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  // subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'bettas' | 'tech' | 'flora' | 'nutrients' | 'hardscape';
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  imageCaptions?: string[];
  theme: {
    name: string;
    // Gradient for the diagonal header matching site vibe
    headerBg: string;
    // Text color for title
    titleColor: string;
    // Tinted circular frame background (aquatic pastel / glass complement)
    circleBg: string;
    // Dot indicator accent colors
    dots: string[];
    // Primary accent color
    accentHex: string;
  };
  variants: ProductVariant[];
  tag?: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-in-vitro-flora',
    title: 'IN-VITRO BUCEPHALANDRA',
    // subtitle: '100% Sterile Tissue Culture • Snail Free',
    price: 45,
    originalPrice: 60,
    category: 'flora',
    categoryLabel: 'In-Vitro Flora',
    rating: 4.8,
    reviewsCount: 39,
    image: '/plant-cutout.png',
    images: [
      '/plant-cutout.png',
      '/category-plants.jpg',
      '/hardscape-cutout.png',
      '/plant-cutout.png',
    ],
    imageCaptions: ['Specimen Cutout', 'Planted Aquascape', 'Hardscape Accent', 'Laboratory Agar'],
    tag: 'Snail Free',
    theme: {
      name: 'biotope-emerald',
      headerBg: 'bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#059669]',
      titleColor: 'text-white',
      circleBg: 'bg-[#ecfdf5]',
      dots: ['#047857', '#059669', '#10b981', '#34d399'],
      accentHex: '#059669',
    },
    variants: [
      { name: 'Deep Emerald', colorHex: '#047857' },
      { name: 'Mint Shimmer', colorHex: '#10b981' },
      { name: 'Pale Frost', colorHex: '#6ee7b7' },
      { name: 'Amber Vein', colorHex: '#fef3c7' },
    ],
    description:
      'Laboratory-propagated in sealed nutrient agar. Completely free from pest snails, algae spores, and unwanted pathogens. Ready for immediate hardscape tying.',
    specs: [
      { label: 'Growth Rate', value: 'Slow • Sculptural' },
      { label: 'Light Demand', value: 'Low to Medium PAR' },
      { label: 'CO2 Need', value: 'Beneficial • Low' },
      { label: 'Placement', value: 'Epiphyte on Wood/Rock' },
    ],
  },
  {
    id: 'prod-trace-nutrients',
    title: 'BIO-CHELATED NPK ELIXIR',
    // subtitle: 'Comprehensive Macro & Micro Nutrition',
    price: 38,
    originalPrice: 48,
    category: 'nutrients',
    categoryLabel: 'Nutrients',
    rating: 5.0,
    reviewsCount: 84,
    image: '/fertilizer-cutout.png',
    images: [
      '/fertilizer-cutout.png',
      '/category-fertilizers.jpg',
      '/category-plants.jpg',
      '/fertilizer-cutout.png',
    ],
    imageCaptions: ['Formula Bottle', 'Vibrant Plant Pearling', 'Macro Uptake', 'Pipette Precision'],
    tag: 'Zero Algae',
    theme: {
      name: 'oceanic-marine',
      headerBg: 'bg-gradient-to-br from-[#0a2342] via-[#1d4ed8] to-[#0284c7]',
      titleColor: 'text-white',
      circleBg: 'bg-[#eff6ff]',
      dots: ['#1e40af', '#2563eb', '#0284c7', '#38bdf8'],
      accentHex: '#0284c7',
    },
    variants: [
      { name: 'Ultra Marine 500ml', colorHex: '#1e40af' },
      { name: 'Sapphire 1000ml', colorHex: '#2563eb' },
      { name: 'Nano Pipette Kit', colorHex: '#93c5fd' },
      { name: 'Refill Pouch', colorHex: '#fde68a' },
    ],
    description:
      'Stabilized EDTA/DTPA bio-chelated iron combined with precise nitrogen, phosphorus, and potassium ratios to trigger lush plant pearling without fueling algae.',
    specs: [
      { label: 'Iron Chelation', value: 'Dual DTPA/EDTA' },
      { label: 'Dosage', value: '1ml per 20 Liters Daily' },
      { label: 'Shrimp Safe', value: '100% Invertebrate Safe' },
      { label: 'Shelf Life', value: '24 Months' },
    ],
  },
  {
    id: 'prod-biotope-octopus',
    title: 'BIOTOPE CORAL CEPHALOPOD',
    // subtitle: 'Living Bioluminescent Marine Habitat Specimen',
    price: 95,
    originalPrice: 130,
    category: 'hardscape',
    categoryLabel: 'Marine Life',
    rating: 5.0,
    reviewsCount: 47,
    image: '/octopus.png',
    images: [
      '/octopus.png',
      '/jellyfish.jpg',
      '/category-hardscape.jpg',
      '/octopus.png',
    ],
    imageCaptions: ['Cephalopod Specimen', 'Bioluminescent Reef', 'Marine Habitat Rock', 'Azure Texture'],
    tag: 'Master Specimen',
    theme: {
      name: 'signature-coral',
      headerBg: 'bg-gradient-to-br from-[#7c2d12] via-[#ea580c] to-[#ff5722]',
      titleColor: 'text-white',
      circleBg: 'bg-[#fff7ed]',
      dots: ['#c2410c', '#ea580c', '#f97316', '#ff5722'],
      accentHex: '#ff5722',
    },
    variants: [
      { name: 'Bioluminescent Azure', colorHex: '#c2410c' },
      { name: 'Coral Fire', colorHex: '#ea580c' },
      { name: 'Amber Mantle', colorHex: '#f59e0b' },
      { name: 'Reef Pearl', colorHex: '#fed7aa' },
    ],
    description:
      'Exquisite captive-conditioned marine specimen with striking bio-iridescent patterns. Acclimated to high-clarity reef ecosystems with verified biological equilibrium.',
    specs: [
      { label: 'Salinity', value: '1.024 — 1.026 SG' },
      { label: 'Water Temp', value: '74°F — 77°F' },
      { label: 'Tank Volume', value: '120L+ Established' },
      { label: 'Acclimation', value: 'Drip Method 90min' },
    ],
  },
  {
    id: 'prod-betta-dragon',
    title: 'SUPER RED DRAGON',
    // subtitle: 'Halfmoon Lineage • Flare Grade AAA',
    price: 80,
    originalPrice: 110,
    category: 'bettas',
    categoryLabel: 'Live Bettas',
    rating: 4.9,
    reviewsCount: 42,
    image: '/betta-vertical.png',
    images: [
      '/betta-vertical.png',
      '/betta-horizontal.png',
      '/betta-vertical.jpg',
      '/betta-horizontal.jpg',
    ],
    imageCaptions: ['Show Stance Flare', 'Halfmoon Caudal Spread', 'Studio Lighting', 'Crystal Water View'],
    tag: 'Flagship Breeder',
    theme: {
      name: 'dragon-ruby',
      headerBg: 'bg-gradient-to-br from-[#831843] via-[#be123c] to-[#ea580c]',
      titleColor: 'text-white',
      circleBg: 'bg-[#fff1f2]',
      dots: ['#be123c', '#e11d48', '#f43f5e', '#fb7185'],
      accentHex: '#e11d48',
    },
    variants: [
      { name: 'Dragon Blood Red', colorHex: '#ea580c', badge: 'Popular' },
      { name: 'Sunset Tangerine', colorHex: '#f59e0b' },
      { name: 'Golden Metallic', colorHex: '#fcd34d' },
      { name: 'Pearl Dragon', colorHex: '#fde68a' },
    ],
    description:
      'Prized for its 180-degree symmetrical caudal spread and radiant metallic dragon scales. Bred in controlled bio-pure water for peak vitality and fin vigor.',
    specs: [
      { label: 'Water Temp', value: '76°F — 80°F (25°C)' },
      { label: 'Optimal pH', value: '6.5 — 7.2' },
      { label: 'Diet', value: 'Live Daphnia & Bloodworms' },
      { label: 'Guarantee', value: '100% Live Arrival Safe' },
    ],
  },
  {
    id: 'prod-co2-diffuser',
    title: 'PRO CO2 DIFFUSER',
    // subtitle: '0.1-Micron Ceramic • Effervescent Cloud',
    price: 80,
    originalPrice: 95,
    category: 'tech',
    categoryLabel: 'CO2 & Tech',
    rating: 5.0,
    reviewsCount: 68,
    image: '/co2-cutout.png',
    images: [
      '/co2-cutout.png',
      '/category-co2.jpg',
      '/category-filtration.jpg',
      '/co2-cutout.png',
    ],
    imageCaptions: ['Atomizer Hardware', 'Effervescent Cloud Mist', 'Biotope Glass Setup', 'Micro Ceramic Disc'],
    tag: 'High-Tech Scape',
    theme: {
      name: 'electric-aqua',
      headerBg: 'bg-gradient-to-br from-[#083344] via-[#0891b2] to-[#00e5ff]',
      titleColor: 'text-white',
      circleBg: 'bg-[#ecfeff]',
      dots: ['#0e7490', '#0891b2', '#06b6d4', '#00e5ff'],
      accentHex: '#00e5ff',
    },
    variants: [
      { name: 'Anodized Silver', colorHex: '#0891b2' },
      { name: 'Cyan Titanium', colorHex: '#06b6d4' },
      { name: 'Ice Frost', colorHex: '#67e8f9' },
      { name: 'Champagne Gold', colorHex: '#fed7aa' },
    ],
    description:
      'Engineered with micro-porous Japanese ceramic discs that atomize carbon dioxide into dense micro-bubble mist for 98% plant absorption without wastage.',
    specs: [
      { label: 'Pore Size', value: '0.1 Micron Precision' },
      { label: 'Working Pressure', value: '1.5 — 2.5 Bar' },
      { label: 'Material', value: 'CNC Aviation Aluminum' },
      { label: 'Connector', value: '4/6mm Standard Hose' },
    ],
  },
  {
    id: 'prod-samurai-king',
    title: 'SAMURAI KING BETTA',
    // subtitle: 'Black Dragon Armor • Show Lineage',
    price: 80,
    originalPrice: 120,
    category: 'bettas',
    categoryLabel: 'Live Bettas',
    rating: 4.9,
    reviewsCount: 51,
    image: '/betta-horizontal.png',
    images: [
      '/betta-horizontal.png',
      '/betta-vertical.png',
      '/betta-horizontal.jpg',
      '/betta-vertical.jpg',
    ],
    imageCaptions: ['Black Dragon Scale Profile', 'Vertical Threat Stance', 'Optiwhite Tank View', 'Breeder Specimen'],
    tag: 'Rare Lineage',
    theme: {
      name: 'obsidian-teal',
      headerBg: 'bg-gradient-to-br from-[#090d16] via-[#1e293b] to-[#0d9488]',
      titleColor: 'text-white',
      circleBg: 'bg-[#f0fdfa]',
      dots: ['#0f172a', '#1e293b', '#0f766e', '#14b8a6'],
      accentHex: '#14b8a6',
    },
    variants: [
      { name: 'Samurai Crimson', colorHex: '#e11d48' },
      { name: 'Rose Metallic', colorHex: '#fb7185' },
      { name: 'Blush Dragon', colorHex: '#fda4af' },
      { name: 'Ghost White', colorHex: '#ffedd5' },
    ],
    description:
      'A striking contrast of pitch-black velvet skin topped with brilliant silver-white dragon scale armor plates. Each specimen exhibits fearless personality.',
    specs: [
      { label: 'Water Temp', value: '77°F — 81°F (26°C)' },
      { label: 'Fin Type', value: 'Shortfin Plakat (PK)' },
      { label: 'Lineage', value: 'Thailand Grand Champion' },
      { label: 'Packaging', value: 'Pure O2 Thermal Pod' },
    ],
  },
];

export default function ProductsSection() {
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  // active slide index per product (0-indexed)
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});
  const [pausedCardId, setPausedCardId] = useState<string | null>(null);
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(2);

  // Auto-Slide System: automatically advances image every 3.5s (pauses on hovered card)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prev) => {
        const nextState = { ...prev };
        PRODUCTS.forEach((product) => {
          if (pausedCardId === product.id) return; // Don't auto-advance card user is hovering
          const current = prev[product.id] || 0;
          nextState[product.id] = (current + 1) % product.images.length;
        });
        return nextState;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [pausedCardId]);

  // Toggle wishlist
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Change image slide directly via dots
  const handleSlideSelect = (productId: string, slideIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlides((prev) => ({ ...prev, [productId]: slideIdx }));
  };

  // Add to cart with feedback
  const handleAddToCart = (product: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Trigger button checkmark feedback
    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);

    // Show floating toast
    setToastMessage(`Added "${product.title}" to cart!`);

    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section
      id="products"
      className="relative w-full bg-[#020a16] text-white py-20 lg:py-28 px-4 sm:px-8 lg:px-14 overflow-hidden border-y border-white/[0.07] select-none scroll-mt-12"
    >
      {/* Deep-water ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-36 left-[18%] w-[620px] h-[620px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] -right-32 w-[520px] h-[520px] bg-orange-500/[0.08] rounded-full blur-[150px]" />
        <div className="absolute -bottom-52 left-[35%] w-[560px] h-[560px] bg-blue-700/15 rounded-full blur-[155px]" />

        {/* Submerged technical grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `linear-gradient(rgba(103,232,249,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.08) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-[1550px] mx-auto z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-400/[0.08] border border-cyan-300/20 text-cyan-200 text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase font-jakarta mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>Signature Marine Atelier</span>
          </div>

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-white tracking-tight">
              Featured Products
            </h2>
            <div className="mt-3 w-20 h-px bg-gradient-to-r from-cyan-300 via-cyan-400 to-[#ff5722]" />
          </div>

          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed pt-4 max-w-xl">
            Engineered for the discerning aquarist. Discover rare captive-bred lineage Bettas,
            precision CO2 equipment, sterile tissue flora, and bio-chelated nutrients.
          </p>
        </div>

        {/* Curated specimen cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 xl:gap-7">
          {PRODUCTS.map((product) => {
            const currentSlideIdx = activeSlides[product.id] || 0;
            const currentImage = product.images[currentSlideIdx] || product.image;
            const currentCaption = product.imageCaptions?.[currentSlideIdx] || `Slide ${currentSlideIdx + 1}`;
            const isWishlisted = !!wishlist[product.id];
            const isAdded = !!addedAnimation[product.id];

            return (
              <div
                key={product.id}
                onMouseEnter={() => setPausedCardId(product.id)}
                onMouseLeave={() => setPausedCardId(null)}
                className="group relative min-h-[560px] overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#07172b]/90 shadow-[0_22px_55px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.42)] flex flex-col"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />
                {/* Gallery stage */}
                <div
                  className="relative h-[295px] sm:h-[315px] overflow-hidden border-b border-white/[0.08]"
                  style={{
                    background: `radial-gradient(circle at 50% 18%, ${product.theme.accentHex}52 0%, ${product.theme.accentHex}16 30%, transparent 64%), linear-gradient(135deg, #0e2942 0%, #07172b 48%, #04101f 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      maskImage: 'linear-gradient(to bottom, black, transparent)',
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07172b] via-[#07172b]/60 to-transparent" />
                  <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-12" />
                  <div className="absolute right-5 top-4 font-mono text-[10px] tracking-[0.22em] text-white/35">
                    0{currentSlideIdx + 1} / 0{product.images.length}
                  </div>

                  <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/[0.16] bg-[#04101f]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                    {product.categoryLabel}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label={isWishlisted ? `Remove ${product.title} from wishlist` : `Save ${product.title} to wishlist`}
                    className={`absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                      isWishlisted
                        ? 'border-rose-300/50 bg-rose-500/20 text-rose-300 shadow-[0_0_22px_rgba(244,63,94,0.28)]'
                        : 'border-white/[0.15] bg-[#04101f]/50 text-white/75 hover:border-rose-300/50 hover:bg-rose-500/15 hover:text-rose-300'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  <div className="relative z-10 flex h-full items-center justify-center px-12 pb-1 pt-12">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={currentImage}
                      src={currentImage}
                      alt={`${product.title} - ${currentCaption}`}
                      className="h-full w-full object-contain p-3 drop-shadow-[0_24px_26px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2 animate-fade-in"
                    />
                  </div>

                  <div className="absolute inset-x-5 bottom-4 z-20 flex items-center justify-between">
                    <span className="max-w-[65%] truncate font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                      {currentCaption}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-[#04101f]/45 px-2 py-1.5 backdrop-blur-md">
                      {product.images.map((_, slideIdx) => {
                        const isActive = currentSlideIdx === slideIdx;
                        return (
                          <button
                            key={slideIdx}
                            type="button"
                            onClick={(e) => handleSlideSelect(product.id, slideIdx, e)}
                            aria-label={`Go to ${product.imageCaptions?.[slideIdx] || `image ${slideIdx + 1}`}`}
                            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${isActive ? 'w-5' : 'w-1.5 bg-white/35 hover:bg-white/70'}`}
                            style={isActive ? { backgroundColor: product.theme.accentHex, boxShadow: `0 0 10px ${product.theme.accentHex}` } : undefined}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-bold text-white">{product.rating.toFixed(1)}</span>
                      <span className="text-[11px] text-slate-500">({product.reviewsCount} collector reviews)</span>
                    </div>
                    {product.tag && (
                      <span className="rounded-full border border-white/[0.10] bg-white/[0.04] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-100">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-jakarta text-sm line-clamp-2 h-[55px] font-extrabold leading-tight tracking-tight text-white sm:text-[22px]">
                      {product.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-jakarta text-2xl font-extrabold tracking-tight text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs font-semibold text-slate-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-1.5" aria-label="Available finishes">
                       
                        <span className="ml-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">Select finish</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(product, e)}
                      aria-label={`Add ${product.title} to cart`}
                      className={`group/button inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-300 active:scale-95 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-white shadow-[0_0_24px_rgba(16,185,129,0.38)]'
                          : 'bg-white text-[#06182e] hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(103,232,249,0.3)]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-3.5 w-3.5" />
                          <span>Add</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Guarantee Strip */}
        <div className="mt-14 pt-9 border-t border-white/[0.10] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-300/15 text-cyan-300 flex items-center justify-center mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-white">100% Live Arrival Safe</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Pure oxygen injection & thermal pods</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-orange-400/10 border border-orange-300/15 text-orange-300 flex items-center justify-center mb-1">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Champion Bloodline</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Documented pedigree & DNA stability</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-400/10 border border-emerald-300/15 text-emerald-300 flex items-center justify-center mb-1">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Snail & Algae Free</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Tissue-culture sterile laboratory standard</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-400/10 border border-blue-300/15 text-blue-300 flex items-center justify-center mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-white">Overnight Express</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Free priority shipping on orders over $150</p>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#06182e] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 animate-bounce">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <a
            href="#products"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold underline ml-2"
          >
            Cart ({cartCount})
          </a>
        </div>
      )}
    </section>
  );
}
