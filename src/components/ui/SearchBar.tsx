// src/components/ui/SearchBar.tsx
"use client";

import React, { ChangeEvent, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import SearchDropdown from './SearchDropdown';

export default function SearchBar() {
  const {
    query,
    setQuery,
    results,
    loading,
    highlightedIndex,
    onKeyDown,
  } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);

  // Auto‑focus on mobile when the bar becomes visible (optional)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center bg-white/70 backdrop-blur-xl rounded-full border border-gray-200 px-4 py-2 shadow-sm">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search calculators..."
          value={query}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm focus:ring-0"
        />
        {query && (
          <button onClick={clear} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {(query.length > 0 || loading) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-2 z-20"
          >
            <SearchDropdown results={results} loading={loading} highlightedIndex={highlightedIndex} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
