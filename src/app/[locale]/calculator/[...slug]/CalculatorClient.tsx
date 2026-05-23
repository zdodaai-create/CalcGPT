"use client";

import React, { useEffect } from 'react';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import { DynamicCalculator } from '@/components/calculator/DynamicCalculator';
import { AIAssistant } from '@/components/ai/AIAssistant';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AdContainer } from '@/components/AdContainer';
import { recordCalculatorVisit } from '@/lib/recent-calculators';
import 'katex/dist/katex.min.css';
import { 
  Sparkles, ArrowLeft, Info, Share2, Bookmark, ChevronRight, 
  BookOpen, Lightbulb, AlertTriangle, GraduationCap, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// @ts-ignore
import { BlockMath } from 'react-katex';

export function CalculatorClient({ slug }: { slug: string }) {
  const calculator = getCalculatorBySlug(slug);

  useEffect(() => {
    if (calculator) {
      recordCalculatorVisit({
        id: calculator.id,
        name: calculator.name,
        category: calculator.category
      });
    }
  }, [calculator]);

  if (!calculator) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-[#F8F9FA]">
        <h1 className="text-4xl font-bold mb-4">Calculator Not Found</h1>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/${calculator.category}`} className="hover:text-blue-600 capitalize">{calculator.category}</Link>
          {calculator.subcategory && (
            <>
              <ChevronRight className="w-4 h-4" />
              <span className="capitalize">{calculator.subcategory.replace(/-/g, ' ')}</span>
            </>
          )}
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">{calculator.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-4xl font-black mb-4 text-gray-900">
                    {calculator.name}
                  </h1>
                  <p className="text-gray-500 text-lg font-medium">{calculator.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-50">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-50">
                    <Share2 className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
              </div>

              <DynamicCalculator config={calculator} />
            </motion.div>

            {/* Formula & Explanation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">How to use {calculator.name}?</h2>
              </div>
              
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-medium">
                <p>
                  To use this calculator, simply enter the required values in the fields above. Results are updated instantly as you type.
                </p>
                
                <div className="py-10 px-6 bg-blue-50/50 rounded-3xl flex flex-col justify-center overflow-x-auto border border-blue-100">
                  <BlockMath math={calculator.scientificFormula || calculator.outputs[0]?.formula || "f(x) = y"} />
                </div>

                {calculator.derivation && (
                  <div className="mt-8 p-8 rounded-[2rem] bg-gray-50 border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Formula Derivation</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{calculator.derivation}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-900">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      Pro Tip
                    </h3>
                    <p className="text-sm text-blue-800 leading-relaxed">
                      You can use the AI Assistant at the bottom right to ask deeper questions about the science behind this calculation.
                    </p>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-green-50 border border-green-100">
                    <h3 className="text-lg font-bold mb-4 text-green-900">Expert Note</h3>
                    <p className="text-sm text-green-800 leading-relaxed">
                      Always double-check your units before performing critical calculations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Basic Theory Section */}
            {(calculator.theory || !calculator.theory) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Scientific Theory</h2>
                </div>
                <div className="prose prose-lg text-gray-600 font-medium leading-relaxed max-w-none">
                  <p>{calculator.theory || `The ${calculator.name} relies on fundamental principles of ${calculator.category} to provide accurate calculations. Understanding the core concept allows you to apply this formula dynamically in real-world environments.`}</p>
                </div>
              </motion.div>
            )}

            {/* Applications & Mistakes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Real-World Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                  <h3 className="text-xl font-bold">Applications</h3>
                </div>
                <ul className="space-y-4">
                  {(calculator.applications || ["Laboratory Analysis", "Academic Research", "Industrial Manufacturing"]).map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Common Mistakes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold">Common Mistakes</h3>
                </div>
                <ul className="space-y-4">
                  {(calculator.commonMistakes || ["Using incorrect units", "Forgetting conversion factors", "Misapplying the formula limits"]).map((mistake, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Example Problems */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Solved Example</h2>
                </div>
                <div className="space-y-6">
                  {(calculator.examples || [{ problem: "Default sample problem to demonstrate usage.", solution: "Step 1: Identify values. Step 2: Plug into formula. Step 3: Compute final result." }]).map((ex, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3">Problem:</h4>
                      <p className="text-gray-700 mb-6 font-medium">{ex.problem}</p>
                      <h4 className="font-bold text-gray-900 mb-3">Solution:</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">{ex.solution}</p>
                    </div>
                  ))}
                </div>
            </motion.div>

            {/* FAQ Section */}
            {(calculator.faq && calculator.faq.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 mt-10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-6">
                  {calculator.faq.map((item, i) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                      <h4 className="text-lg font-black text-gray-900 mb-3">{item.question}</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Ads & Related */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Related Calculators</h3>
              <div className="space-y-3">
                {['BMI Calculator', 'Compound Interest', 'Loan Payment'].map((calc) => (
                  <Link href={`/calculator/${calc.toLowerCase().replace(/\s+/g, '-')}`} key={calc}>
                    <div className="p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 hover:border-blue-500/20 cursor-pointer transition-all flex justify-between items-center group">
                      <span className="text-gray-700 font-bold text-sm group-hover:text-blue-600 transition-colors">{calc}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="text-xl font-black mb-4">AI Tutor Mode</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Want to understand the math? Turn on Tutor Mode for step-by-step guidance.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-6 rounded-2xl">
                Enable AI Tutor
              </Button>
            </div>
            
            <AdContainer type="sidebar" />
          </div>
        </div>
      </div>
      
      <AIAssistant />
    </div>
  );
}
