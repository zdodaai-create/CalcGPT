import { useState, useEffect } from 'react';

/**
 * Simple debounce hook.
 * Returns a debounced version of the value after the specified delay.
 */
export function useDebounce<T>(value: T, delay: number = 200): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
