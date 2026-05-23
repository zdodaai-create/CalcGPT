"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronRight, 
  History, 
  Sparkles, 
  Calculator,
  Flame,
  TrendingUp,
  Info,
  ArrowRight,
  Dna,
  FlaskConical,
  HardHat,
  ArrowRightLeft,
  Sprout,
  Coffee,
  Wallet,
  Utensils,
  HeartPulse,
  Sigma,
  Atom,
  Trophy,
  BarChart2,
  Shapes,
  Activity,
  PiggyBank,
  Home,
  Apple,
  Megaphone
} from 'lucide-react';
import Link from 'next/link';
import { AdContainer } from '@/components/AdContainer';
import { CategoryCard } from '@/components/CategoryCard';
import { CategorySkeleton } from '@/components/CategorySkeleton';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/components/AuthProvider';

const CATEGORIES = [
  { id: 'biology', title: 'Biology', count: 106, color: 'text-green-500', href: '/biology', Icon: Dna },
  { id: 'chemistry', title: 'Chemistry', count: 107, color: 'text-blue-400', href: '/chemistry', Icon: FlaskConical },
  { id: 'construction', title: 'Construction', count: 35, color: 'text-orange-500', href: '/construction', Icon: HardHat },
  { id: 'conversion', title: 'Conversion', count: 42, color: 'text-purple-500', href: '/conversion', Icon: ArrowRightLeft },
  { id: 'ecology', title: 'Ecology', count: 28, color: 'text-emerald-600', href: '/ecology', Icon: Sprout },
  { id: 'everyday-life', title: 'Everyday Life', count: 37, color: 'text-pink-500', href: '/everyday-life', Icon: Coffee },
  { id: 'finance', title: 'Finance', count: 45, color: 'text-indigo-600', href: '/finance', Icon: Wallet },
  { id: 'food', title: 'Food', count: 46, color: 'text-red-500', href: '/food', Icon: Utensils },
  { id: 'health', title: 'Health', count: 528, color: 'text-rose-500', href: '/health', Icon: HeartPulse },
  { id: 'math', title: 'Math', count: 413, color: 'text-blue-600', href: '/math', Icon: Sigma },
  { id: 'physics', title: 'Physics', count: 495, color: 'text-violet-600', href: '/physics', Icon: Atom },
  { id: 'sports', title: 'Sports', count: 104, color: 'text-emerald-500', href: '/sports', Icon: Trophy },
  { id: 'statistics', title: 'Statistics', count: 156, color: 'text-slate-600', href: '/statistics', Icon: BarChart2 },
  { id: 'marketing', title: 'Marketing', count: 100, color: 'text-purple-500', href: '/marketing', Icon: Megaphone },
  { id: 'other', title: 'Other', count: 200, color: 'text-amber-600', href: '/other', Icon: Shapes },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const t = useTranslations('Home');
  const tNav = useTranslations('Navbar');
  const { loginWithGoogle } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Top Banner Ad */}
      <div className="bg-white border-b border-gray-100">
        <AdContainer type="banner" className="py-4" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 md:mb-8"
        >
          {t('heroTitle')}
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-10 md:mb-12 max-w-2xl mx-auto font-medium px-2">
          {t('heroSubtitle')}
        </p>
        
        {/* Mobile Search - Only visible on small screens since Navbar has it on desktop */}
        <div className="md:hidden relative max-w-md mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder={tNav('search')} 
            className="w-full h-14 bg-white border border-gray-200 rounded-full pl-12 pr-4 shadow-xl focus:outline-none"
          />
        </div>
      </section>

      {/* Last Used Section */}
      <section className="max-w-[1400px] mx-auto px-4 mb-16 md:mb-20">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-gray-900">
              <History className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              {t('lastUsed')}
            </h2>
            <button className="p-2 md:p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
            {[
              { name: 'BMI Calculator', icon: Activity, category: 'Health' },
              { name: 'Compound Interest', icon: PiggyBank, category: 'Finance' },
              { name: 'Loan Payment', icon: Home, category: 'Finance' },
              { name: 'Calorie Deficit', icon: Apple, category: 'Health' },
              { name: 'Concrete Estimator', icon: HardHat, category: 'Construction' }
            ].map((calc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                className="min-w-[200px] md:min-w-[240px] bg-gray-50/50 p-5 md:p-6 rounded-3xl border border-gray-100 flex items-center gap-3 md:gap-4 cursor-pointer hover:bg-white transition-all shrink-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <calc.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{calc.category}</div>
                  <div className="text-sm md:text-base font-bold text-gray-900 leading-tight">{calc.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-[1400px] mx-auto px-4 mb-16 md:mb-20">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{t('browseCategory')}</h2>
          <Link href="/all" className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-sm md:text-lg">
            {t('viewAll')} <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-6"
        >
          {loading ? (
            Array(14).fill(0).map((_, i) => <CategorySkeleton key={i} />)
          ) : (
            CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <CategoryCard 
                  title={cat.title}
                  count={cat.count}
                  icon={<cat.Icon className={`w-5 h-5 md:w-6 md:h-6 ${cat.color}`} />}
                  href={(cat as any).href || `/category/${cat.id}`}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </section>

      {/* Inline Ad Section */}
      <div className="max-w-[1400px] mx-auto px-4 mb-20">
        <AdContainer type="inline" />
      </div>

      {/* Discover / CTA Section */}
      <section className="max-w-[1400px] mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Card */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Featured Tool</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Unlock the power of <br /> AI-driven calculation.
              </h3>
              <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">
                Our AI Formula Forge can build any custom interactive calculator for you in under 30 seconds. Just describe the problem, and we'll handle the math.
              </p>
              <Link href="/ai-generator">
                <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3">
                  Try AI Forge <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
            {/* Visual element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Calculator className="w-96 h-96 rotate-12" />
            </div>
          </div>

          {/* Promotional Signup Block */}
          <div className="bg-[#111] rounded-[3rem] p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-6 leading-tight">Join 2M+ monthly users.</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                Save your favorite tools, sync history across devices, and get personalized smart recommendations.
              </p>
              <button 
                onClick={loginWithGoogle}
                className="w-full bg-white text-black py-5 rounded-full font-extrabold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Sign Up for Free
              </button>
            </div>
            {/* Decorative mesh */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#333,transparent_70%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Ad (Only on very wide screens or in a specific layout) */}
      <div className="max-w-[1400px] mx-auto px-4 mb-20 flex justify-center">
        <AdContainer type="sidebar" />
      </div>

    </div>
  );
}
