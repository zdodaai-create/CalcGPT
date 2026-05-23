"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Search, Sparkles, User, Menu, X, Calculator, Wand2, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './AuthProvider';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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
            <div className="hidden md:flex relative items-center w-full max-w-2xl flex-[2] px-4">
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder={t('search')} 
                  className="w-full h-12 bg-gray-100 border-0 rounded-full py-2 pl-14 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Button variant="ghost" size="sm" className="rounded-full text-blue-600 font-medium">
                    {t('searchButton')}
                  </Button>
                </div>
              </div>
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
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder={t('search')} 
                    className="w-full h-12 bg-gray-50 border border-gray-200 rounded-full py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
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
