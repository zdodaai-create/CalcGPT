import { useState, useEffect, KeyboardEvent } from 'react';
import { useSearchContext } from '@/context/SearchContext';

export function useSearch() {
  const { query, setQuery, results, loading } = useSearchContext();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Reset highlighted index when results change
  useEffect(() => {
    setHighlightedIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = results[highlightedIndex];
      if (selected) {
        // navigate to calculator page – using window location for simplicity
        const url = `/${selected.category.toLowerCase()}/${selected.id || selected.slug}`;
        window.location.href = url;
      }
    } else if (e.key === 'Escape') {
      setQuery('');
    }
  };

  return {
    query,
    setQuery,
    results,
    loading,
    highlightedIndex,
    onKeyDown,
  };
}
