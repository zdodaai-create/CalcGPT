"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Search, Sparkles, User, Menu, X, Calculator, Wand2, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './AuthProvider';
import { useTranslations } from 'next-intl';
import { ALL_CALCULATORS } from '@/lib/calculator-registry';

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    biology: 'bg-green-500',
    chemistry: 'bg-blue-400',
    construction: 'bg-orange-500',
    conversion: 'bg-purple-500',
    ecology: 'bg-emerald-600',
    'everyday life': 'bg-pink-500',
    'everyday-life': 'bg-pink-500',
    finance: 'bg-indigo-600',
    food: 'bg-red-500',
    health: 'bg-rose-500',
    math: 'bg-blue-600',
    physics: 'bg-violet-600',
    sports: 'bg-emerald-500',
    statistics: 'bg-slate-600',
    marketing: 'bg-purple-500',
    ecommerce: 'bg-green-600',
    other: 'bg-amber-600',
  };
  return colors[category.toLowerCase()] || 'bg-blue-600';
};

export function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const t = useTranslations('Navbar');
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop Search State
  const [desktopQuery, setDesktopQuery] = useState("");
  const [desktopShowDropdown, setDesktopShowDropdown] = useState(false);
  const [desktopSelectedIndex, setDesktopSelectedIndex] = useState(-1);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);

  // Mobile Search State
  const [mobileQuery, setMobileQuery] = useState("");
  const [mobileShowDropdown, setMobileShowDropdown] = useState(false);
  const [mobileSelectedIndex, setMobileSelectedIndex] = useState(-1);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Desktop Search results
  const desktopSearchResults = useMemo(() => {
    const q = desktopQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_CALCULATORS.filter(calc =>
      (calc.name || '').toLowerCase().includes(q) ||
      (calc.category || '').toLowerCase().includes(q) ||
      (calc.description || '').toLowerCase().includes(q)
    ).slice(0, 8);
  }, [desktopQuery]);

  // Mobile Search results
  const mobileSearchResults = useMemo(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_CALCULATORS.filter(calc =>
      (calc.name || '').toLowerCase().includes(q) ||
      (calc.category || '').toLowerCase().includes(q) ||
      (calc.description || '').toLowerCase().includes(q)
    ).slice(0, 6);
  }, [mobileQuery]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target as Node)) {
        setDesktopShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Reset selected indices when results change
  useEffect(() => {
    setDesktopSelectedIndex(-1);
  }, [desktopSearchResults]);

  useEffect(() => {
    setMobileSelectedIndex(-1);
  }, [mobileSearchResults]);

  const handleDesktopResultClick = (id: string) => {
    setDesktopShowDropdown(false);
    setDesktopQuery("");
    router.push(`/calculator/${id}`);
  };

  const handleMobileResultClick = (id: string) => {
    setMobileShowDropdown(false);
    setMobileQuery("");
    setIsMobileMenuOpen(false);
    router.push(`/calculator/${id}`);
  };

  const handleDesktopKeyDown = (e: React.KeyboardEvent) => {
    if (!desktopShowDropdown || desktopSearchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setDesktopSelectedIndex(prev => (prev < desktopSearchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setDesktopSelectedIndex(prev => (prev > 0 ? prev - 1 : desktopSearchResults.length - 1));
    } else if (e.key === 'Enter' && desktopSelectedIndex >= 0) {
      e.preventDefault();
      handleDesktopResultClick(desktopSearchResults[desktopSelectedIndex].id);
    } else if (e.key === 'Escape') {
      setDesktopShowDropdown(false);
    }
  };

  const handleMobileKeyDown = (e: React.KeyboardEvent) => {
    if (!mobileShowDropdown || mobileSearchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setMobileSelectedIndex(prev => (prev < mobileSearchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setMobileSelectedIndex(prev => (prev > 0 ? prev - 1 : mobileSearchResults.length - 1));
    } else if (e.key === 'Enter' && mobileSelectedIndex >= 0) {
      e.preventDefault();
      handleMobileResultClick(mobileSearchResults[mobileSelectedIndex].id);
    } else if (e.key === 'Escape') {
      setMobileShowDropdown(false);
    }
  };

  const clearDesktopSearch = () => {
    setDesktopQuery("");
    setDesktopShowDropdown(false);
    desktopInputRef.current?.focus();
  };

  const clearMobileSearch = () => {
    setMobileQuery("");
    setMobileShowDropdown(false);
    mobileInputRef.current?.focus();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Left - Branding */}
            <div className="flex items-center gap-2 lg:flex-1">
              <Link href="/" className="flex items-center gap-3 group select-none">
                <Logo iconSize={54} />
              </Link>
            </div>

            {/* Center - Large Rounded Search Bar */}
            <div className="hidden md:flex relative items-center w-full max-w-2xl flex-[2] px-4" ref={desktopSearchRef}>
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input 
                  ref={desktopInputRef}
                  type="text" 
                  placeholder={t('search')} 
                  value={desktopQuery}
                  onChange={(e) => { setDesktopQuery(e.target.value); setDesktopShowDropdown(true); }}
                  onFocus={() => desktopQuery && setDesktopShowDropdown(true)}
                  onKeyDown={handleDesktopKeyDown}
                  className="w-full h-12 bg-gray-100 border-0 rounded-full py-2 pl-14 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {desktopQuery && (
                    <button
                      onClick={clearDesktopSearch}
                      className="p-1.5 rounded-full hover:bg-gray-200 transition-colors mr-1"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full text-blue-600 font-medium"
                    onClick={() => {
                      if (desktopSearchResults.length > 0) {
                        handleDesktopResultClick(desktopSearchResults[0].id);
                      }
                    }}
                  >
                    {t('searchButton')}
                  </Button>
                </div>
              </div>

              {/* Live Search Dropdown */}
              <AnimatePresence>
                {desktopShowDropdown && desktopSearchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-4 right-4 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] text-left max-h-[380px] overflow-y-auto"
                  >
                    <div className="p-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 py-2">
                        {desktopSearchResults.length} result{desktopSearchResults.length !== 1 ? 's' : ''}
                      </p>
                      {desktopSearchResults.map((calc, i) => (
                        <button
                          key={calc.id}
                          onClick={() => handleDesktopResultClick(calc.id)}
                          onMouseEnter={() => setDesktopSelectedIndex(i)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors group text-left ${
                            desktopSelectedIndex === i ? 'bg-blue-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg ${getCategoryColor(calc.category || '')} flex items-center justify-center shrink-0`}>
                            <Calculator className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-bold text-[0.95rem] truncate transition-colors ${
                              desktopSelectedIndex === i ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'
                            }`}>
                              {calc.name}
                            </p>
                            <p className="text-xs text-gray-400 truncate capitalize">{calc.category}</p>
                          </div>
                          <ChevronRight className={`w-4 h-4 shrink-0 transition-colors ${
                            desktopSelectedIndex === i ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-400'
                          }`} />
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-gray-50 px-4 py-2.5 bg-gray-50/50">
                      <p className="text-[10px] text-gray-400 text-center">
                        Use <kbd className="px-1.5 py-0.5 bg-white rounded border text-[9px] font-mono">↑↓</kbd> to navigate, <kbd className="px-1.5 py-0.5 bg-white rounded border text-[9px] font-mono">Enter</kbd> to select
                      </p>
                    </div>
                  </motion.div>
                )}

                {desktopShowDropdown && desktopQuery.trim() && desktopSearchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-4 right-4 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-[60] text-center"
                  >
                    <p className="text-gray-400 font-medium">No calculators found for &quot;{desktopQuery}&quot;</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right - Auth */}
            <div className="flex items-center justify-end gap-2 lg:flex-1">
              {user ? (
                <div className="hidden md:flex items-center gap-3">
                  <img src={user.photoURL || ''} alt="User" className="w-8 h-8 rounded-full border border-gray-200" />
                  <Button variant="ghost" size="icon" onClick={logout} className="rounded-full">
                    <LogOut className="w-5 h-5 text-gray-500" />
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-1">
                  <Button variant="ghost" onClick={loginWithGoogle} className="text-gray-600 font-semibold px-4 hidden sm:inline-flex">
                    Log in
                  </Button>
                  <Button 
                    onClick={loginWithGoogle}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 shadow-md"
                  >
                    Sign up
                  </Button>
                </div>
              )}
              
              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden rounded-full ml-1"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Logo iconSize={40} />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full bg-gray-50"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
                
                {/* Mobile Search */}
                <div className="relative w-full" ref={mobileSearchRef}>
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                  <input 
                    ref={mobileInputRef}
                    type="text" 
                    placeholder={t('search')} 
                    value={mobileQuery}
                    onChange={(e) => { setMobileQuery(e.target.value); setMobileShowDropdown(true); }}
                    onFocus={() => mobileQuery && setMobileShowDropdown(true)}
                    onKeyDown={handleMobileKeyDown}
                    className="w-full h-12 bg-gray-50 border border-gray-200 rounded-full py-2 pl-12 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  {mobileQuery && (
                    <button
                      onClick={clearMobileSearch}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition-colors z-10"
                    >
                      <X className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  )}

                  {/* Mobile Live Search Dropdown */}
                  <AnimatePresence>
                    {mobileShowDropdown && mobileSearchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[80] max-h-[260px] overflow-y-auto"
                      >
                        <div className="p-1">
                          {mobileSearchResults.map((calc, i) => (
                            <button
                              key={calc.id}
                              onClick={() => handleMobileResultClick(calc.id)}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors text-left ${
                                mobileSelectedIndex === i ? 'bg-blue-50' : 'hover:bg-gray-50'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-md ${getCategoryColor(calc.category || '')} flex items-center justify-center shrink-0`}>
                                <Calculator className="w-3.5 h-3.5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-xs truncate text-gray-800">
                                  {calc.name}
                                </p>
                                <p className="text-[10px] text-gray-400 capitalize truncate">{calc.category}</p>
                              </div>
                              <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {mobileShowDropdown && mobileQuery.trim() && mobileSearchResults.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 z-[80] text-center"
                      >
                        <p className="text-gray-400 text-xs font-medium">No calculators found</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Menu</div>
                  <Link href="/all" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-700">All Calculators</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link href="/ai-generator" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-700">AI Forge</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                  </Link>
                  <Link href="/marketing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-700">Marketing</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link href="/ecommerce" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-700">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </div>

              {/* Mobile Auth Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                {user ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <img src={user.photoURL || ''} alt="User" className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{user.displayName || 'User'}</span>
                        <span className="text-xs text-gray-500 truncate max-w-[120px]">{user.email}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="rounded-full text-red-500 hover:text-red-600 hover:bg-red-50">
                      <LogOut className="w-5 h-5" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 w-full">
                    <Button 
                      onClick={() => { loginWithGoogle(); setIsMobileMenuOpen(false); }}
                      className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 shadow-md"
                    >
                      Sign up / Log in
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
