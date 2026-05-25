export interface RecentCalculator {
  id: string;
  name: string;
  category: string;
  visitedAt: number;
}

const RECENT_KEY = 'recent_calculators';
const MAX_RECENT = 10;

export function recordCalculatorVisit(calculator: { id: string; name: string; category: string }) {
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
  } catch (error) {
    console.error('Failed to save recent calculator visit:', error);
  }
}

export function getRecentCalculators(): RecentCalculator[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    const list = stored ? JSON.parse(stored) : [];
    return Array.isArray(list) ? list : [];
  } catch (error) {
    console.error('Failed to get recent calculators:', error);
    return [];
  }
}
