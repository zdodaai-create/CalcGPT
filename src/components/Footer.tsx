import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { 
  Facebook, 
  Youtube, 
  Twitter, 
  Linkedin, 
  Instagram,
  Dna,
  RefreshCw,
  DollarSign,
  Plus,
  BarChart2,
  Beaker,
  Sprout,
  Utensils,
  Atom,
  MoreHorizontal,
  Hammer,
  Smile,
  Heart,
  Activity,
  Star
} from 'lucide-react';

export function Footer() {
  const t = useTranslations('Footer');
  const tCat = useTranslations('Categories');
  const tLinks = useTranslations('FooterLinks');

  return (
    <footer className="bg-white dark:bg-[#070b13] border-t border-gray-100 dark:border-white/5 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left col-span-1">
            <Link href="/" className="flex items-center gap-3 group select-none mb-6">
              <Logo iconSize={64} />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>

            {/* Social Media Row */}
            <div className="flex gap-6 mt-2 justify-center lg:justify-start">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="mt-8 flex justify-center lg:justify-start w-full">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Right Columns (Categories & Custom links) */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-12">
            
            {/* Category Header */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
                {tLinks('calculatorCategories')}
              </h3>
              
              {/* Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                  <Link href="/biology" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Dna className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('biology')}
                    </span>
                  </Link>
                  <Link href="/conversion" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <RefreshCw className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('conversion')}
                    </span>
                  </Link>
                  <Link href="/finance" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <DollarSign className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('finance')}
                    </span>
                  </Link>
                  <Link href="/math" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Plus className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('math')}
                    </span>
                  </Link>
                  <Link href="/statistics" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <BarChart2 className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('statistics')}
                    </span>
                  </Link>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                  <Link href="/chemistry" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Beaker className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('chemistry')}
                    </span>
                  </Link>
                  <Link href="/ecology" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Sprout className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('ecology')}
                    </span>
                  </Link>
                  <Link href="/food" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Utensils className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('food')}
                    </span>
                  </Link>
                  <Link href="/physics" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Atom className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('physics')}
                    </span>
                  </Link>
                  <Link href="/other" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <MoreHorizontal className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('other')}
                    </span>
                  </Link>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-2">
                  <Link href="/construction" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Hammer className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('construction')}
                    </span>
                  </Link>
                  <Link href="/everyday-life" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Smile className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('everyday-life')}
                    </span>
                  </Link>
                  <Link href="/health" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Heart className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('health')}
                    </span>
                  </Link>
                  <Link href="/sports" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Activity className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('sports')}
                    </span>
                  </Link>
                  <Link href="/discover" className="group flex items-center gap-3 py-1.5 cursor-pointer">
                    <Star className="w-[18px] h-[18px] text-[#2563EB] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tCat('discover')}
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Press / Meet CalcGPT Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100 dark:border-white/5">
              
              {/* Press column */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
                  {tLinks('press')}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {tLinks('editorialPolicies')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {tLinks('partnerships')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Meet CalcGPT column */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider">
                  {tLinks('meetCalcGPT')}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {tLinks('about')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {tLinks('resourceLibrary')}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {tLinks('collections')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* General terms / copyright column */}
              <div className="flex flex-col justify-end">
                <span className="text-xs text-gray-400">
                  © 2026 CalcGPT. All rights reserved.
                </span>
                <div className="flex gap-4 mt-2 text-xs text-gray-400">
                  <a href="#" className="hover:underline">{tLinks('privacyPolicy')}</a>
                  <a href="#" className="hover:underline">{tLinks('termsOfService')}</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

