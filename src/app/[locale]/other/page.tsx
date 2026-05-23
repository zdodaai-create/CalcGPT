"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronRight,
  Filter,
  Package,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { AdContainer } from '@/components/AdContainer';
import { OTHER_DATA } from '@/lib/other-data';
import { ALL_CALCULATORS } from '@/lib/calculator-registry';

import { useTranslations } from 'next-intl';
export default function OtherMegaCategoryPage() {
  const tCalc = useTranslations('Calculators');
  const otherCount = useMemo(() => {
    const mainCategoryIds = [
      'biology', 'chemistry', 'construction', 'conversion', 'ecology', 
      'everyday-life', 'finance', 'food', 'health', 'math', 
      'physics', 'sports', 'statistics', 'marketing', 'ecommerce'
    ];
    return ALL_CALCULATORS.filter(c => {
      const catKey = (c.category || '').toLowerCase().replace(' ', '-');
      return catKey === 'other' || !mainCategoryIds.includes(catKey);
    }).length;
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(OTHER_DATA.map(c => c.id));

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) return OTHER_DATA;
    
    return OTHER_DATA.map(category => ({
      ...category,
      calculators: category.calculators.filter(calc => 
        calc.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.calculators.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">Other Calculators</span>
        </nav>

        {/* Header Section */}
        <div className="mb-12 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/20">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Other Calculators</h1>
                  <p className="text-amber-600 font-bold mt-1">{otherCount} specialized tools for everything else</p>
                </div>
              </div>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Congratulations, you just found the most random collection of calculators available on the Internet! From drone motors to Minecraft portals.
              </p>
            </div>
            <div className="hidden lg:block">
               <div className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100 max-w-sm">
                  <h3 className="font-bold text-amber-900 mb-2">Need a custom tool?</h3>
                  <p className="text-amber-700/80 text-sm mb-4">Our AI can build any calculator in seconds.</p>
                  <Link href="/ai-generator" className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm hover:gap-3 transition-all">
                    Try AI Generator <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          </div>
        </div>

        {/* Search & Stats Bar */}
        <div className="sticky top-4 z-30 mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder={`Search across ${otherCount} other calculators...`} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 bg-gray-50/50 border-0 rounded-2xl pl-14 pr-6 focus:ring-2 focus:ring-amber-500/20 transition-all text-lg font-medium"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100 shrink-0">
               <Filter className="w-4 h-4 text-gray-400" />
               <span className="text-sm font-bold text-gray-600">{filteredData.length} Categories</span>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="mb-12">
          <AdContainer type="banner" />
        </div>

        {/* Categories Listing */}
        <div className="space-y-8">
          {filteredData.map((category, index) => (
            <div key={category.id} className="scroll-mt-32">
              <div 
                className="flex items-center justify-between mb-4 group cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-amber-600 group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors flex items-center gap-3">
                      {category.title.replace(/ .$/, '')} {/* Remove emojis from title display */}
                      <span className="text-sm font-black text-gray-400 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                        {category.calculators.length}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: expandedCategories.includes(category.id) ? 180 : 0 }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedCategories.includes(category.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-6">
                      {category.calculators.map((calc) => (
                        <motion.div
                          key={calc.slug}
                          whileHover={{ y: -4 }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="group"
                        >
                          <Link href={`/calculator/${calc.slug}`}>
                            <Card className="border-gray-100 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 rounded-[1.5rem] overflow-hidden h-full bg-white">
                              <CardContent className="p-5 flex items-center justify-between">
                                <span className="font-bold text-[0.95rem] text-gray-800 group-hover:text-amber-600 transition-colors leading-tight">
                                  {tCalc.has(`${(calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.slug||'').replace(/-/g, '_')}_name`) : calc.name}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-amber-600 transition-all shrink-0 ml-2">
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Ad between sections */}
              {(index === 2 || index === 5 || index === 8) && (
                <div className="py-8">
                  <AdContainer type="inline" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related / SEO Section */}
        <section className="mt-24 pt-16 border-t border-gray-100">
           <h2 className="text-3xl font-black text-gray-900 mb-8">A Calculator For Everything</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hardcore Geek Tools",
                  desc: "Pick a motor for your drone, optimize server configurations, or calculate your eDPI for competitive gaming."
                },
                {
                  title: "Everyday Math Solved",
                  desc: "Use our calculators to choose the optimal sunscreen SPF, plan your travel expenses, or calculate pizza tips."
                },
                {
                  title: "Fun & Games",
                  desc: "From Minecraft Circle Generators to Impostor Odds, level up your gaming with dedicated mathematical models."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
}
