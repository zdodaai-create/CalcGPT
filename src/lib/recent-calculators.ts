export interface RecentCalculator {
  id: string;
  name: string;
  category: string;
  visitedAt: number;
}

const RECENT_KEY = 'recent_calculators';
const MAX_RECENT = 10;

export function saveRecentCalculator(calculator: { id: string; name: string; category: string }) {
  if (typeof window === 'undefined') return;
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    let list: RecentCalculator[] = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(list)) list = [];

    // Remove existing entry if already in list to avoid duplicates
    list = list.filter(item => item.id !== calculator.id);

    // Unshift new entry to the front
    list.unshift({
      id: calculator.id,
      name: calculator.name,
      category: calculator.category,
      visitedAt: Date.now()
    });

    // Slice to limit
    list = list.slice(0, MAX_RECENT);

    localStorage.setItem(RECENT_KEY, JSON.stringify(list));
    console.log('[saveRecentCalculator] Saved to localStorage:', list);
    window.dispatchEvent(new Event('recent_calculators_updated'));
  } catch (error) {
    console.error('[saveRecentCalculator] Failed to save recent calculator:', error);
  }
}

export function getRecentCalculators(): RecentCalculator[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    const list = stored ? JSON.parse(stored) : [];
    const parsedList = Array.isArray(list) ? list : [];
    console.log('[getRecentCalculators] Retrieved from localStorage:', parsedList);
    return parsedList;
  } catch (error) {
    console.error('[getRecentCalculators] Failed to get recent calculators:', error);
    return [];
  }
}
