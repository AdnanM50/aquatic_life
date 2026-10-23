'use client';

import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  MapPin,
  Mail,
  Phone,
  User,
  X,
  Plus,
  Minus,
  Sparkles,
  Menu,
} from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(3);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Royal Blue Halfmoon Betta',
      price: 89.0,
      qty: 1,
      image: '/betta-vertical.png',
      grade: 'Show Grade AAA',
    },
    {
      id: 2,
      name: 'Fire Dragon King Betta',
      price: 110.0,
      qty: 1,
      image: '/betta-horizontal.png',
      grade: 'Rare Lineage',
    },
  ]);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as typeof cartItems
    );
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar (Image 3 Inspiration) */}
      <div className="hidden lg:flex w-full items-center justify-between px-8 xl:px-16 py-2 text-xs tracking-wider border-b border-white/5 bg-[#010714]/85 backdrop-blur-md text-slate-300">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>123 Coral Reef Way, Biscayne Bay, FL</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>concierge@aquafy-marine.com</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>+1 (800) 123-AQUA</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-amber-300/90 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            <span className="font-medium text-[11px]">Free Overnight Climate Shipping Over $150</span>
          </div>
          <button
            type="button"
            className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>My Account</span>
          </button>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Brand Logo (Combined Inspiration) */}
        <a
          href="#"
          className="group flex items-center space-x-3 cursor-pointer select-none"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-[#ff5722] p-[1.5px] shadow-[0_0_20px_rgba(0,229,255,0.35)] group-hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-500">
            <div className="w-full h-full rounded-[14px] bg-[#020712] flex items-center justify-center overflow-hidden">
              {/* Aquatic Fish Emblem */}
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
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-2xl sm:text-[1.7rem] tracking-tight text-white font-woobly drop-shadow-md">
                AQUAFY
              </span>
              <span className="text-orange-500 text-2xl leading-none font-bold">.</span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-cyan-400/80 font-semibold -mt-1 hidden sm:block">
              Premium Marine Atelier
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/[0.04] border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          {[
            { label: 'Home', href: '#', active: true },
            { label: 'Shop', href: '#categories' },
            { label: 'Aquariums', href: '#aquariums' },
            { label: 'Rare Bettas', href: '#bettas' },
            { label: 'About Us', href: '#about' },
            { label: 'Reviews', href: '#reviews' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                item.active
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* E-Commerce Controls: Search, Wishlist, Cart */}
        <div className="flex items-center space-x-2.5 sm:space-x-3.5">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search Collection"
            className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-200 hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Icon with Counter Badge */}
          <button
            type="button"
            onClick={() => setWishlistCount((c) => c + 1)}
            aria-label="Wishlist"
            className="relative w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-200 hover:text-rose-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center shadow-[0_0_10px_rgba(244,63,94,0.6)]">
              {wishlistCount}
            </span>
          </button>

          {/* Cart Icon with Orange Pill Button (Image 3 Style) */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Shopping Cart"
            className="relative flex items-center space-x-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] hover:from-[#ff6b3d] hover:to-[#ff8c1a] text-white font-medium text-xs sm:text-sm shadow-[0_0_20px_rgba(255,87,34,0.45)] hover:shadow-[0_0_30px_rgba(255,87,34,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline font-semibold">
              ${cartTotal.toFixed(0)}
            </span>
            <span className="w-5 h-5 rounded-full bg-white text-[#ff5722] text-[11px] font-black flex items-center justify-center shadow-inner">
              {totalCartCount}
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Interactive Expandable Search Bar Overlay */}
      {isSearchOpen && (
        <div className="w-full max-w-2xl mx-auto px-6 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="relative flex items-center bg-[#071328]/95 border border-cyan-500/30 rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <Search className="w-5 h-5 text-cyan-400 ml-3" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rare Bettas, rimless tanks, aquatic plants, lighting..."
              className="w-full bg-transparent border-none text-white text-sm px-3.5 py-1 focus:outline-none placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="text-xs text-cyan-400 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/30 px-3 py-1.5 rounded-xl ml-2 transition-colors cursor-pointer"
            >
              ESC
            </button>
          </div>
        </div>
      )}

      {/* Cart Slide-Over Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md h-full bg-[#050e1f] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-white">Your Cart ({totalCartCount})</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Item List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <p>Your aquarium cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 rounded-2xl bg-white/[0.04] border border-white/5"
                  >
                    <div className="w-16 h-16 rounded-xl bg-black/60 overflow-hidden flex items-center justify-center flex-shrink-0 border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-cyan-400">{item.grade}</p>
                      <span className="text-sm font-bold text-orange-400">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-black/40 px-2 py-1 rounded-lg border border-white/10">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-white px-1">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Subtotal:</span>
                <span className="text-xl font-bold text-white">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-emerald-400 flex items-center">
                ✓ Includes oxygenated triple-insulated live transport pack
              </p>
              <button
                type="button"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ff5722] to-[#ff7a00] text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(255,87,34,0.5)] hover:shadow-[0_0_35px_rgba(255,87,34,0.8)] transition-all cursor-pointer"
              >
                Proceed to Secure Checkout →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#030917]/95 border-b border-white/10 px-6 py-4 flex flex-col space-y-3 backdrop-blur-2xl">
          {['Home', 'Shop', 'Aquariums', 'Rare Bettas', 'About Us', 'Reviews', 'Contact'].map(
            (label) => (
              <a
                key={label}
                href={label === 'Reviews' ? '#reviews' : label === 'Shop' ? '#categories' : '#'}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
