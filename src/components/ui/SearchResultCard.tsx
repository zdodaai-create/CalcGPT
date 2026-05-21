// src/components/ui/SearchResultCard.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useSearchContext } from '@/context/SearchContext';

interface CalculatorResult {
  id: string;
  slug: string;
  name: string;
  description?: string;
  category: string;
}

interface Props {
  result: CalculatorResult;
  highlighted: boolean;
}

/**
 * Highlights the part of `text` that matches `query` (case‑insensitive).
 */
function getHighlightedText(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="bg-amber-200 dark:bg-amber-700 rounded-sm px-0.5">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function SearchResultCard({ result, highlighted }: Props) {
  const { query } = useSearchContext();
  const tCalc = useTranslations('Calculators');

  // Build translation key for the calculator name
  const key = `${(result.id || result.slug || '').replace(/-/g, '_')}_name`;
  const tr = tCalc(key);
  const displayName = tr === key ? result.name : tr;

  // URL: assume structure /<locale>/<category>/<slug>
  const href = `/${result.category.toLowerCase()}/${result.slug}`;

  return (
    <Link href={href} className={`block px-4 py-2 hover:bg-gray-100 transition-colors ${highlighted ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {getHighlightedText(displayName, query)}
          </div>
        </div>
        {result.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs">
            {result.description}
          </p>
        )}
      </div>
    </Link>
  );
}
