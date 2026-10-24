'use client';

import React, { useState, useEffect } from 'react';
import {
  ShoppingCart,
  Heart,
  Eye,
  Check,
  Star,
  Sparkles,
  ShieldCheck,
  Flame,
  Droplets,
  X,
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
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'bettas' | 'tech' | 'flora' | 'nutrients' | 'hardscape';
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  image: string;
  theme: {
    name: string;
    // Gradient for the diagonal header
    headerBg: string;
    // Text color for title (matches screenshot's dark navy on top of vibrant header)
    titleColor: string;
    // Tinted circular frame background (soft pastel complement)
    circleBg: string;
    // 4 dots array matching the card's color theme
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
    id: 'prod-betta-dragon',
    title: 'SUPER RED DRAGON',
    subtitle: 'Halfmoon Lineage • Flare Grade AAA',
    price: 80,
    originalPrice: 110,
    category: 'bettas',
    categoryLabel: 'Live Bettas',
    rating: 4.9,
    reviewsCount: 42,
    image: '/betta-vertical.png',
    tag: 'Flagship Breeder',
    theme: {
      name: 'amber-tangerine',
      headerBg: 'bg-gradient-to-br from-[#f59e0b] via-[#f97316] to-[#ea580c]',
      titleColor: 'text-[#09223e]',
      circleBg: 'bg-[#faeedd]',
      dots: ['#ea580c', '#f59e0b', '#fcd34d', '#fde68a'],
      accentHex: '#f59e0b',
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
    subtitle: '0.1-Micron Ceramic • Effervescent Cloud',
    price: 80,
    originalPrice: 95,
    category: 'tech',
    categoryLabel: 'CO2 & Tech',
    rating: 5.0,
    reviewsCount: 68,
    image: '/co2-cutout.png',
    tag: 'High-Tech Scape',
    theme: {
      name: 'ocean-cyan',
      headerBg: 'bg-gradient-to-br from-[#06b6d4] via-[#0891b2] to-[#0284c7]',
      titleColor: 'text-[#061d36]',
      circleBg: 'bg-[#fee2e2]', // Soft blush coral like in screenshot card 2!
      dots: ['#0891b2', '#06b6d4', '#67e8f9', '#fed7aa'],
      accentHex: '#06b6d4',
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
    subtitle: 'Black Dragon Armor • Show Lineage',
    price: 80,
    originalPrice: 120,
    category: 'bettas',
    categoryLabel: 'Live Bettas',
    rating: 4.9,
    reviewsCount: 51,
    image: '/betta-horizontal.png',
    tag: 'Rare Lineage',
    theme: {
      name: 'coral-rose',
      headerBg: 'bg-gradient-to-br from-[#f43f5e] via-[#fb7185] to-[#f43f5e]',
      titleColor: 'text-[#0d2238]',
      circleBg: 'bg-[#fee2f0]', // Soft pink/lavender like in screenshot card 3!
      dots: ['#e11d48', '#fb7185', '#fda4af', '#ffedd5'],
      accentHex: '#fb7185',
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
  {
    id: 'prod-in-vitro-flora',
    title: 'IN-VITRO BUCEPHALANDRA',
    subtitle: '100% Sterile Tissue Culture • Snail Free',
    price: 45,
    originalPrice: 60,
    category: 'flora',
    categoryLabel: 'In-Vitro Flora',
    rating: 4.8,
    reviewsCount: 39,
    image: '/plant-cutout.png',
    tag: 'Snail Free',
    theme: {
      name: 'emerald-mint',
      headerBg: 'bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]',
      titleColor: 'text-[#06241b]',
      circleBg: 'bg-[#ecfdf5]',
      dots: ['#047857', '#10b981', '#6ee7b7', '#fef3c7'],
      accentHex: '#10b981',
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
    subtitle: 'Comprehensive Macro & Micro Nutrition',
    price: 38,
    originalPrice: 48,
    category: 'nutrients',
    categoryLabel: 'Nutrients',
    rating: 5.0,
    reviewsCount: 84,
    image: '/fertilizer-cutout.png',
    tag: 'Zero Algae',
    theme: {
      name: 'royal-marine',
      headerBg: 'bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e40af]',
      titleColor: 'text-[#03152e]',
      circleBg: 'bg-[#eff6ff]',
      dots: ['#1e40af', '#2563eb', '#93c5fd', '#fde68a'],
      accentHex: '#2563eb',
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
    subtitle: 'Living Bioluminescent Marine Habitat Specimen',
    price: 95,
    originalPrice: 130,
    category: 'hardscape',
    categoryLabel: 'Marine Life',
    rating: 5.0,
    reviewsCount: 47,
    image: '/octopus.png',
    tag: 'Master Specimen',
    theme: {
      name: 'volcanic-amber',
      headerBg: 'bg-gradient-to-br from-[#d97706] via-[#ea580c] to-[#c2410c]',
      titleColor: 'text-[#1c0f04]',
      circleBg: 'bg-[#fff7ed]',
      dots: ['#c2410c', '#ea580c', '#f59e0b', '#fed7aa'],
      accentHex: '#ea580c',
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
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Products' },
  { id: 'bettas', label: 'Live Bettas' },
  { id: 'tech', label: 'CO2 & Tech' },
  { id: 'flora', label: 'Live Flora' },
  { id: 'nutrients', label: 'Nutrients' },
  { id: 'hardscape', label: 'Hardscape & Reef' },
] as const;

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [cartCount, setCartCount] = useState<number>(2);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter products by selected category
  const filteredProducts =
    activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  // Toggle wishlist
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Switch variant dot
  const handleVariantSelect = (productId: string, variantIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantIndex }));
  };

  // Add to cart with feedback
  const handleAddToCart = (product: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Trigger button checkmark feedback
    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setCartCount((prev) => prev + 1);

    // Show floating toast
    const variantIndex = selectedVariants[product.id] || 0;
    const variantName = product.variants[variantIndex]?.name || '';
    setToastMessage(`Added "${product.title}" (${variantName}) to cart!`);

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
      className="relative w-full bg-[#fbfbfd] text-slate-900 py-20 lg:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-slate-200/90 select-none scroll-mt-12"
    >
      {/* Background aquatic caustics & glowing ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft pastel ambient cyan and amber blooms */}
        <div className="absolute -top-36 left-1/4 w-[550px] h-[550px] bg-cyan-200/25 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-amber-100/35 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 left-1/3 w-[450px] h-[450px] bg-blue-100/30 rounded-full blur-[100px]" />

        {/* Faint luxury water lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#0891b2 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-semibold tracking-wider uppercase font-jakarta">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
              <span>Signature Marine Atelier</span>
            </div>

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-jakarta font-extrabold text-slate-950 tracking-tight">
                Featured Products
              </h2>
              {/* Cyan to coral accent line */}
              <div className="mt-2.5 w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-[#ff5722] rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1">
              Engineered for the discerning aquarist. Discover rare captive-bred lineage Bettas,
              precision CO2 equipment, sterile tissue flora, and bio-chelated nutrients.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 pt-2 md:pt-0">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-md shadow-slate-950/15 scale-105'
                      : 'bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          PRODUCT CARDS GRID 
          Matches the reference image card design:
          1. Angled / diagonal colored header with upward slant from left to right:
             clip-path: polygon(0 0, 100% 0, 100% 36%, 0 58%)
          2. Left: Title & Subtitle ("TITLE HERE", "Lorem ipsum dolor...")
             - Bold uppercase italic Title in dark navy font-jakarta
             - Italic subtitle in crisp white
          3. Right: Circular white price badge disc ("$80")
          4. Center: Large circular frame overlapping the diagonal line with complementary pastel background & product cutout
          5. Bottom: White base with 4 colored variant dots on left, dark navy "ADD TO CART" pill button on right
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12">
          {filteredProducts.map((product) => {
            const currentVariantIdx = selectedVariants[product.id] || 0;
            const isWishlisted = !!wishlist[product.id];
            const isAdded = !!addedAnimation[product.id];

            return (
              <div
                key={product.id}
                onClick={() => setQuickViewProduct(product)}
                className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between cursor-pointer"
                style={{ minHeight: '540px' }}
              >
                {/* 
                  TOP COLORED DIAGONAL HEADER 
                  Cut with upward diagonal line: polygon(0 0, 100% 0, 100% 36%, 0 58%)
                */}
                <div
                  className={`relative w-full h-[325px] sm:h-[335px] ${product.theme.headerBg} pt-7 px-7 pb-4 select-none overflow-hidden`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 36%, 0 58%)',
                    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 36%, 0 58%)',
                  }}
                >
                  {/* Subtle water caustics glow on header */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/15 pointer-events-none" />

                  {/* Header Content: Title, Subtitle, Price Badge */}
                  <div className="relative z-10 flex items-start justify-between">
                    {/* Left: Clean, unobstructed Title & Subtitle matching the reference mockup */}
                    <div className="max-w-[200px] sm:max-w-[220px] space-y-1">
                      <h3
                        className={`font-jakarta font-black italic tracking-wide text-xl sm:text-2xl uppercase leading-tight ${product.theme.titleColor}`}
                      >
                        {product.title}
                      </h3>
                      <p className="font-jakarta italic text-xs sm:text-[13px] text-white/95 font-medium leading-snug">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Right: Round Price Badge Disc */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-md shadow-md border-2 border-white/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="font-jakarta font-black text-lg sm:text-2xl text-[#0b2545] tracking-tight">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 
                  CENTER CIRCULAR IMAGE FRAME 
                  Overlaps the diagonal color boundary right in the middle!
                  Has a clean white 6px ring and complementary tinted background
                */}
                <div className="absolute top-[148px] sm:top-[154px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <div
                    className={`relative w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.13)] ${product.theme.circleBg} flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]`}
                  >
                    {/* Inner soft depth gradient */}
                    <div className="absolute inset-0 rounded-full bg-radial from-transparent via-transparent to-black/[0.04]" />

                    {/* Product Cutout Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="relative z-10 w-full h-full object-contain p-4 sm:p-5 transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1"
                    />

                    {/* Quick View Hover Tag */}
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-slate-900 font-bold text-[11px] uppercase tracking-wider shadow-md flex items-center space-x-1">
                        <Eye className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Quick View</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* 
                  BOTTOM WHITE CONTROLS AREA
                  Left: 4 small circular dots (variant colors) + subtle wishlist heart
                  Right: Dark Navy "ADD TO CART" Pill Button
                */}
                <div className="relative z-10 bg-white pt-24 sm:pt-28 pb-6 px-6 sm:px-7 flex items-center justify-between mt-auto">
                  {/* Left: 4 Colored Variant Dots */}
                  <div className="flex items-center space-x-2.5">
                    <div
                      className="flex items-center space-x-2"
                      title={`Color variants: ${product.variants[currentVariantIdx]?.name}`}
                    >
                      {product.theme.dots.map((dotColor, dotIdx) => {
                        const isSelected = currentVariantIdx === dotIdx;
                        return (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={(e) => handleVariantSelect(product.id, dotIdx, e)}
                            aria-label={`Select variant ${dotIdx + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? 'scale-125 ring-2 ring-offset-2 ring-slate-400'
                                : 'hover:scale-110 opacity-80 hover:opacity-100'
                            }`}
                            style={{ backgroundColor: dotColor }}
                          />
                        );
                      })}
                    </div>

                    {/* Wishlist Heart Icon placed discreetly with dots */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(product.id, e)}
                      aria-label="Save to Wishlist"
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ml-1 ${
                        isWishlisted
                          ? 'text-rose-500 scale-110'
                          : 'text-slate-300 hover:text-rose-500 hover:scale-110'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-transform ${
                          isWishlisted ? 'fill-current text-rose-500' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Right: "ADD TO CART" Pill Button */}
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(product, e)}
                    aria-label={`Add ${product.title} to cart`}
                    className={`px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full font-jakarta font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 shadow-md active:scale-95 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                        : 'bg-[#022c54] hover:bg-cyan-600 text-white shadow-slate-900/15 hover:shadow-cyan-600/30'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Guarantee Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">100% Live Arrival Safe</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Pure oxygen injection & thermal pods</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-1">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Champion Bloodline</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Documented pedigree & DNA stability</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Snail & Algae Free</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Tissue-culture sterile laboratory standard</p>
          </div>

          <div className="flex flex-col items-center space-y-1.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Overnight Express</h4>
            <p className="text-[11px] sm:text-xs text-slate-500">Free priority shipping on orders over $150</p>
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Product Visual */}
              <div
                className={`relative w-full aspect-square rounded-2xl ${quickViewProduct.theme.circleBg} flex items-center justify-center p-6 border border-slate-200/60 overflow-hidden`}
              >
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow-sm">
                  {quickViewProduct.categoryLabel}
                </span>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-500 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs text-slate-500 font-semibold ml-1">
                      {quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)
                    </span>
                  </div>
                  <h3 className="text-2xl font-black font-jakarta text-slate-950 uppercase">
                    {quickViewProduct.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                    {quickViewProduct.subtitle}
                  </p>
                </div>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-black font-jakarta text-[#0b2545]">
                    ${quickViewProduct.price}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      ${quickViewProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    In Stock • Ready to Ship
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  {quickViewProduct.specs.map((spec, i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-2">
                      <div className="text-[10px] uppercase font-bold text-slate-400">
                        {spec.label}
                      </div>
                      <div className="text-xs font-semibold text-slate-800">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={(e) => {
                    handleAddToCart(quickViewProduct, e);
                    setQuickViewProduct(null);
                  }}
                  className="w-full py-3 rounded-full bg-[#022c54] hover:bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Order • ${quickViewProduct.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center space-x-3 animate-bounce">
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
