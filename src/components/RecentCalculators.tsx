"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { History, ChevronRight, Calculator, Shapes, HeartPulse, DollarSign, Leaf, Wrench, Microscope, GraduationCap, Building, Gamepad, Dumbbell, Globe, Droplets, Zap } from 'lucide-react';

import { getRecentCalculators, RecentCalculator } from '@/lib/recent-calculators';

export function RecentCalculators() {
  const [recentCalculators, setRecentCalculators] = useState<RecentCalculator[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchRecent = () => {
      const list = getRecentCalculators();
      setRecentCalculators(prev => JSON.stringify(prev) !== JSON.stringify(list) ? list : prev);
    };
    
    fetchRecent();
    const interval = setInterval(fetchRecent, 1000); // Polling for robust updates in Next.js App Router
    
    window.addEventListener('storage', fetchRecent);
    window.addEventListener('recent_calculators_updated', fetchRecent);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', fetchRecent);
      window.removeEventListener('recent_calculators_updated', fetchRecent);
    };
  }, []);

  if (!mounted) {
    return null; // SSR safety
  }

  const getCategoryIcon = (category?: string) => {
    if (!category) return Shapes;
    const cat = category.toLowerCase();
    if (cat.includes('health') || cat.includes('medical') || cat.includes('fitness')) return HeartPulse;
    if (cat.includes('finance') || cat.includes('money') || cat.includes('tax')) return DollarSign;
    if (cat.includes('math') || cat.includes('algebra')) return Calculator;
    if (cat.includes('physics') || cat.includes('chemistry') || cat.includes('science')) return Microscope;
    if (cat.includes('construction') || cat.includes('engineering')) return Wrench;
    if (cat.includes('eco') || cat.includes('biology') || cat.includes('nature')) return Leaf;
    if (cat.includes('education') || cat.includes('study')) return GraduationCap;
    return Shapes;
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 mb-16 md:mb-20">
      <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-white/60 relative overflow-hidden group">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-gray-900">
            <History className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
            Last used calculators
          </h2>
          {recentCalculators.length > 0 && (
            <button className="p-2 md:p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </button>
          )}
        </div>
        
        {recentCalculators.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-12 text-center bg-gray-50/50 rounded-3xl border border-dashed border-gray-200"
          >
            <History className="w-12 h-12 text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">No recent calculators</p>
            <p className="text-sm text-gray-400 mt-1">Calculators you use will appear here</p>
          </motion.div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide -mx-2 px-2 snap-x snap-mandatory">
            {recentCalculators.map((calc, i) => {
              const IconComponent = getCategoryIcon(calc.category);
              return (
                <motion.div 
                  key={calc.id || i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className="snap-start shrink-0"
                >
                  <Link href={`/calculator/${calc.id}`}>
                    <div className="w-[220px] h-[90px] bg-white/70 backdrop-blur-md rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.15)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 p-4 group cursor-pointer">
                      <div className="w-11 h-11 rounded-[14px] bg-blue-50/80 group-hover:bg-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="text-[9px] font-extrabold text-blue-500 uppercase tracking-widest mb-0.5 truncate">{calc.category || 'Tool'}</div>
                        <div className="text-sm font-bold text-gray-900 leading-tight truncate group-hover:text-blue-600 transition-colors">{calc.name}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
