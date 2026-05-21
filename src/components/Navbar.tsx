"use client";

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Search, Sparkles, User, Menu, Calculator, Wand2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useAuth } from './AuthProvider';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const t = useTranslations('Navbar');

  return (
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
              <div className="flex items-center gap-3">
                <img src={user.photoURL || ''} alt="User" className="w-8 h-8 rounded-full border border-gray-200" />
                <Button variant="ghost" size="icon" onClick={logout} className="rounded-full">
                  <LogOut className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
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
            <Button variant="ghost" size="icon" className="md:hidden rounded-full ml-1">
              <Menu className="w-6 h-6 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
