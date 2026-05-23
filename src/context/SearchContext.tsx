import React, { createContext, useContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { BIOLOGY_DATA } from '@/lib/biology-data';
import { STATISTICS_DATA } from '@/lib/statistics-data';
import { CHEMISTRY_DATA } from '@/lib/chemistry-data'; // assume exists or fallback to empty
import { useTranslations } from 'next-intl';

interface Calculator {
  id?: string;
  slug: string;
  name: string;
  description?: string;
  category: string;
}

interface SearchResult extends Calculator {
  // additional fields if needed
}

interface SearchContextProps {
  query: string;
  setQuery: (q: string) => void;
  results: SearchResult[];
  loading: boolean;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearchContext must be used within SearchProvider');
  return ctx;
};

// Utility to flatten all calculators into a single array
const allCalculators: Calculator[] = [
  ...(BIOLOGY_DATA?.flatMap(c => c.calculators.map(calc => ({ ...calc, category: c.title }))) || []),
  ...(STATISTICS_DATA?.flatMap(c => c.calculators.map(calc => ({ ...calc, category: c.title }))) || []),
  // Add other categories as needed
];

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);
  const [loading, setLoading] = useState(false);
  const tCalc = useTranslations('Calculators');

  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    const lower = debouncedQuery.toLowerCase();
    const filtered = allCalculators.filter(calc => {
      const key = `${(calc.slug || '').replace(/-/g, '_')}_name`;
      let displayName = calc.name;
      try {
        if ((tCalc as any).has && (tCalc as any).has(key)) {
           displayName = tCalc(key);
        } else {
           const tr = tCalc(key);
           if (!tr.includes(key) && !tr.includes('Calculators.')) displayName = tr;
        }
      } catch (e) {}
      return displayName.toLowerCase().includes(lower);
    });
    return filtered;
  }, [debouncedQuery, tCalc]);

  // Simulate loading for UX – in real case could fetch remote index
  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 150);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [debouncedQuery]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, loading }}>
      {children}
    </SearchContext.Provider>
  );
};
