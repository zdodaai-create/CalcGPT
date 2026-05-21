"use client";

import React, { useState, useRef, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, Search, ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇧🇷' },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪' }
] as const;

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  const filteredLanguages = LANGUAGES.filter(
    (lang) =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.native.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    setSearchQuery('');
    
    // Save preference to localStorage as requested
    try {
      localStorage.setItem('NEXT_LOCALE', newLocale);
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {
      // Ignore localStorage errors in incognito
    }

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="group flex items-center gap-2 px-4 py-2.5 bg-white/50 dark:bg-[#070b13]/50 hover:bg-white dark:hover:bg-[#0f172a] backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl transition-all shadow-sm hover:shadow-md"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
        <span className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <span className="text-base">{selectedLanguage.flag}</span>
          {selectedLanguage.name}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full left-0 mb-2 w-72 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-50 origin-bottom-left"
          >
            {/* Search Bar */}
            <div className="p-3 border-b border-gray-100 dark:border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search language..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-transparent focus:border-blue-500/50 rounded-xl py-2 pl-9 pr-4 text-sm text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400"
                  autoFocus
                />
              </div>
            </div>

            {/* Language List */}
            <div className="max-h-[320px] overflow-y-auto p-2 custom-scrollbar">
              {filteredLanguages.length === 0 ? (
                <div className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No languages found
                </div>
              ) : (
                <ul role="listbox" className="space-y-1">
                  {filteredLanguages.map((lang) => {
                    const isSelected = locale === lang.code;
                    return (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleLanguageChange(lang.code)}
                          role="option"
                          aria-selected={isSelected}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all
                            ${isSelected 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg leading-none">{lang.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="leading-tight">{lang.name}</span>
                              <span className="text-[10px] opacity-70 uppercase tracking-wider">{lang.native}</span>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
