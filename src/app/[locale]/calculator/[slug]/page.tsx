"use client";

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getCalculatorBySlug } from '@/lib/calculator-registry';
import { DynamicCalculator } from '@/components/calculator/DynamicCalculator';
import { AIAssistant } from '@/components/ai/AIAssistant';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Info, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { recordCalculatorVisit } from '@/lib/recent-calculators';
import 'katex/dist/katex.min.css';
// @ts-ignore
import { BlockMath } from 'react-katex';

export default function CalculatorPage() {
  const params = useParams();
  const slug = params.slug as string;
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
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-4">Calculator Not Found</h1>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        {/* Breadcrumbs / Back Button */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Explorers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
                    {calculator.name}
                  </h1>
                  <p className="text-gray-600 text-lg">{calculator.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                    <Share2 className="w-5 h-5" />
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
              className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-2 mb-6">
                <Info className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">How it Works</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                {/* Scientific Formula Display */}
                <div className="py-6 px-4 bg-black/20 rounded-2xl flex justify-center overflow-x-auto">
                  <BlockMath math={calculator.scientificFormula || calculator.outputs[0]?.formula || "f(x) = y"} />
                </div>

                {/* Theory / Explanation */}
                {calculator.theory && (
                  <div className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">{calculator.theory}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      AI Insight
                    </h3>
                    <p className="text-sm">
                      Did you know? Consistent tracking of these metrics can help identify trends over time. 
                      Try adjusting the inputs to see how sensitive the result is to each variable.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                    <p className="text-sm">
                      Explore related calculators in the <strong>{calculator.category}</strong> category to get a more 
                      comprehensive view of your situation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            {calculator.faq && calculator.faq.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5"
              >
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {calculator.faq.map((item: { question: string; answer: string }, idx: number) => (
                    <FAQItem key={idx} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Sidebar - AI Assistant & Stats */}
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Tutor Mode</h3>
              <p className="text-sm text-gray-400 mb-6">
                Enable AI Tutor to get step-by-step explanations for every step of the calculation.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                Unlock AI Tutor
              </Button>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold mb-4">Related Calculators</h3>
              <div className="space-y-4">
                {/* Simulated related calculators */}
                {['Loan Amortization', 'Mortgage Calculator', 'Savings Goal'].map((calc) => (
                  <div key={calc} className="p-3 rounded-xl border border-white/5 hover:bg-white/5 cursor-pointer transition-colors flex justify-between items-center group">
                    <span className="text-sm">{calc}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AIAssistant />
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        open ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 cursor-pointer"
      >
        <span className="font-semibold text-gray-200">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

