// src/components/ui/SearchDropdown.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SearchResultCard from './SearchResultCard';

interface Props {
  results: any[]; // will be typed later
  loading: boolean;
  highlightedIndex: number;
}

export default function SearchDropdown({ results, loading, highlightedIndex }: Props) {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 max-h-80 overflow-y-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      {loading && (
        <div className="p-4 text-center text-gray-500">Loading...</div>
      )}
      {!loading && results.length === 0 && (
        <div className="p-4 text-center text-gray-500">No calculators found.</div>
      )}
      {!loading && results.map((item, idx) => (
        <SearchResultCard
          key={item.slug || item.id}
          result={item}
          highlighted={idx === highlightedIndex}
        />
      ))}
    </motion.div>
  );
}
