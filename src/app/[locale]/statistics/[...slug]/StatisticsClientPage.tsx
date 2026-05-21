"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Share2, 
  Bookmark, 
  Sparkles,
  Calculator as CalcIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { STATISTICS_DATA } from '@/lib/statistics-data';
import { AdContainer } from '@/components/AdContainer';
import { Card, CardContent } from '@/components/ui/card';
import { DynamicCalculator } from '@/components/calculator/DynamicCalculator';
import { getCalculatorBySlug } from '@/lib/calculator-registry';

import { useTranslations } from 'next-intl';
export default function StatisticsClientPage({ slugArray }: { slugArray: string[] }) {
  const tCalc = useTranslations('Calculators');

  const { category, calculator, type } = useMemo(() => {
    // Case 1: /statistics/category-id
    if (slugArray.length === 1) {
      const cat = STATISTICS_DATA.find(c => c.id === slugArray[0]);
      if (cat) return { category: cat, calculator: null, type: 'category' };
      
      // Case 2: /statistics/calculator-slug (searching all categories)
      for (const c of STATISTICS_DATA) {
        const calc = c.calculators.find(cal => cal.slug === slugArray[0]);
        if (calc) return { category: c, calculator: calc, type: 'calculator' };
      }
    }
    
    // Case 3: /statistics/category-id/calculator-slug
    if (slugArray.length === 2) {
      const cat = STATISTICS_DATA.find(c => c.id === slugArray[0]);
      if (cat) {
        const calc = cat.calculators.find(cal => cal.slug === slugArray[1]);
        if (calc) return { category: cat, calculator: calc, type: 'calculator' };
      }
    }
    
    return { category: null, calculator: null, type: '404' };
  }, [slugArray]);

  if (type === '404') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the statistics calculator or category you're looking for.</p>
        <Link href="/statistics" className="bg-slate-600 text-white px-8 py-3 rounded-full font-bold">
          Back to Statistics
        </Link>
      </div>
    );
  }

  if (type === 'category') {
    return (
      <div className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/statistics" className="hover:text-slate-600">Statistics</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-bold">{category?.title}</span>
          </nav>

          <div className="mb-12">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-slate-600 rounded-2xl text-white shadow-lg">
                   {category && <category.icon className="w-8 h-8" />}
                </div>
                <h1 className="text-4xl font-black text-gray-900">{category?.title}</h1>
             </div>
             <p className="text-xl text-gray-500 max-w-2xl font-medium">
                Comprehensive collection of specialized tools for {category?.title.toLowerCase()}.
             </p>
          </div>

          <AdContainer type="banner" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category?.calculators.map((calc) => (
              <motion.div key={calc.slug} whileHover={{ y: -5 }}>
                <Link href={`/statistics/${category.id}/${calc.slug}`}>
                  <Card className="h-full border-gray-100 hover:border-slate-500/20 hover:shadow-xl transition-all rounded-[1.5rem]">
                    <CardContent className="p-8">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-50 transition-colors">
                        <CalcIcon className="w-5 h-5 text-gray-400 group-hover:text-slate-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tCalc.has(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) ? tCalc(`${(calc.id||calc.slug||'').replace(/-/g, '_')}_name`) : calc.name}</h3>
                      <div className="flex items-center gap-1 text-slate-600 font-bold text-sm">
                         Use Calculator <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Calculator Detail View
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/statistics" className="hover:text-slate-600">Statistics</Link>
          <ChevronRight className="w-4 h-4" />
          {category && (
            <>
              <Link href={`/statistics/${category.id}`} className="hover:text-slate-600">{category.title}</Link>
              <ChevronRight className="w-4 h-4" />
            </>
          )}
          <span className="text-gray-900 font-bold truncate">{calculator?.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {calculator?.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
                <span className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full">Statistics</span>
                {category && <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full">{category.title}</span>}
                <div className="flex items-center gap-2 text-gray-400 ml-auto">
                  <button className="flex items-center gap-1 hover:text-slate-600 transition-colors">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-slate-600 transition-colors">
                    <Bookmark className="w-4 h-4" /> Save
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
               {(() => {
                 const config = getCalculatorBySlug(calculator?.slug || '');
                 if (config) {
                   return <DynamicCalculator config={config} />;
                 }
                 return (
                    <div className="text-center py-12">
                       <CalcIcon className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                       <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculator Ready to Forge</h3>
                       <p className="text-gray-500 mb-8 max-w-md mx-auto">This statistical tool is currently being optimized. You can use our AI Generator to build it instantly.</p>
                       <Link href="/ai-generator" className="bg-slate-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-all shadow-xl shadow-slate-500/20 inline-flex items-center gap-2">
                          Forge with AI <Sparkles className="w-5 h-5" />
                       </Link>
                    </div>
                 );
               })()}
            </div>

            <AdContainer type="inline" className="mb-12" />

            <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
              <h2>About {calculator?.name}</h2>
              <p>
                The {calculator?.name} is a specialized tool designed for statistical analysis, research, and data processing. 
                Whether you are a student, researcher, or data scientist, this calculator helps you compute accurate metrics and projections.
              </p>
              <h3>How it works</h3>
              <p>
                Input your values into the fields above. Our calculation engine computes the results using standard statistical equations and formulas instantly.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 not-prose my-12">
                 <h4 className="text-slate-900 font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Pro Tip
                 </h4>
                 <p className="text-slate-800 font-medium">
                    Always double-check your data inputs and understand the assumptions underlying the statistical test you are running.
                 </p>
              </div>
            </article>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
               <h3 className="text-xl font-black text-gray-900 mb-6">Related Calculators</h3>
               <div className="space-y-4">
                 {category?.calculators
                   .filter(c => c.slug !== calculator?.slug)
                   .slice(0, 5)
                   .map(related => (
                     <Link 
                       key={related.slug} 
                       href={`/statistics/${category.id}/${related.slug}`}
                       className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                     >
                       <span className="font-bold text-gray-700 group-hover:text-slate-600 transition-colors">{related.name}</span>
                       <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-slate-600" />
                     </Link>
                   ))}
               </div>
            </div>

            <AdContainer type="sidebar" />

            <div className="bg-[#111] p-8 rounded-[2rem] text-white overflow-hidden relative">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-4">Calculations on the go?</h3>
                 <p className="text-gray-400 mb-8 font-medium">Download our mobile app for offline access to all statistical tools.</p>
                 <button className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    Download App
                 </button>
               </div>
               <CalcIcon className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
