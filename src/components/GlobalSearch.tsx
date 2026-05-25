"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Calculator, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ALL_CALCULATORS } from '@/lib/calculator-registry';

// Helper to get consistent category colors
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Math': 'bg-blue-500',
    'Finance': 'bg-emerald-500',
    'Health': 'bg-rose-500',
    'Physics': 'bg-violet-500',
    'Chemistry': 'bg-cyan-500',
    'Biology': 'bg-lime-500',
    'Statistics': 'bg-amber-500',
    'Business': 'bg-indigo-500',
    'Marketing': 'bg-orange-500',
    'Ecommerce': 'bg-pink-500',
    'Engineering': 'bg-fuchsia-500'
  };
  return colors[category] || 'bg-gray-400';
};

export function GlobalSearch({ className = "" }: { className?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search results from ALL calculators
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return ALL_CALCULATORS.filter(calc =>
      (calc.name || '').toLowerCase().includes(query) ||
      (calc.category || '').toLowerCase().includes(query) ||
      (calc.description || '').toLowerCase().includes(query)
    ).slice(0, 8);
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchResults]);

  const handleResultClick = (id: string) => {
    setShowDropdown(false);
    setSearchQuery("");
    router.push(`/calculator/${id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleResultClick(searchResults[selectedIndex].id);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full ${className}`} ref={searchRef}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:left-5 md:w-4 md:h-4 text-gray-400 z-10" />
      <input 
        ref={inputRef}
        type="text" 
        placeholder={`Search ${ALL_CALCULATORS.length}+ calculators...`}
        value={searchQuery}
        onChange={(e) => { setSearchQuery(e.target.value); setShowDropdown(true); }}
        onFocus={() => searchQuery && setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        className="w-full h-10 md:h-12 bg-white border border-gray-200 rounded-full pl-10 pr-10 md:pl-12 md:pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-sm font-medium"
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}

      {/* Live Search Dropdown */}
      <AnimatePresence>
        {showDropdown && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 text-left"
          >
            <div className="p-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </p>
              {searchResults.map((calc, i) => (
                <button
                  key={calc.id}
                  onClick={() => handleResultClick(calc.id)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group text-left ${
                    selectedIndex === i ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${getCategoryColor(calc.category || '')} flex items-center justify-center shrink-0`}>
                    <Calculator className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-[0.9rem] truncate transition-colors ${
                      selectedIndex === i ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {calc.name}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate">{calc.category}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-colors ${
                    selectedIndex === i ? 'text-blue-500' : 'text-gray-300 group-hover:text-blue-400'
                  }`} />
                </button>
              ))}
            </div>
            <div className="border-t border-gray-50 px-4 py-2.5 bg-gray-50/50 hidden sm:block">
              <p className="text-[11px] text-gray-400 text-center">
                Use <kbd className="px-1.5 py-0.5 bg-white rounded border text-[9px] font-mono mx-1">↑↓</kbd> to navigate, <kbd className="px-1.5 py-0.5 bg-white rounded border text-[9px] font-mono mx-1">Enter</kbd> to select
              </p>
            </div>
          </motion.div>
        )}

        {showDropdown && searchQuery.trim() && searchResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-50 text-center"
          >
            <p className="text-gray-400 font-medium text-sm">No calculators found for "{searchQuery}"</p>
            <p className="text-xs text-gray-300 mt-1">Try a different keyword</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
