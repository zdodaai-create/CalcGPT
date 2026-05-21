"use client";

import React from 'react';
import { Info, BookOpen } from 'lucide-react';
import 'katex/dist/katex.min.css';
// @ts-ignore
import { BlockMath } from 'react-katex';

interface FormulaSectionProps {
  formula: string;
  explanation?: string;
  steps?: string[];
}

export const FormulaSection: React.FC<FormulaSectionProps> = ({
  formula,
  explanation,
  steps
}) => {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <Info className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">How it works</h2>
        </div>
        
        <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 mb-8">
          <div className="flex justify-center overflow-x-auto py-4">
             <div className="text-2xl text-blue-900 font-serif">
                {formula.includes('\\') || formula.includes('_') ? (
                  <BlockMath math={formula} />
                ) : (
                  <div className="font-mono text-xl tracking-wider p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    {formula}
                  </div>
                )}
             </div>
          </div>
          <p className="text-center text-sm font-bold text-gray-400 mt-6 uppercase tracking-widest">
            Biological Formula Standard
          </p>
        </div>

        {explanation && (
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {explanation}
          </p>
        )}
      </section>

      {steps && steps.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-black text-gray-900">Calculation Steps</h3>
          </div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
