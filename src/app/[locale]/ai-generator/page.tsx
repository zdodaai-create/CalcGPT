"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, ArrowRight, Play, Save, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DynamicCalculator } from '@/components/calculator/DynamicCalculator';
import { CalculatorConfig } from '@/lib/calculator-types';

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedConfig, setGeneratedConfig] = useState<CalculatorConfig | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;
    
    setIsGenerating(true);
    setGeneratedConfig(null);
    
    try {
      const response = await fetch('/api/ai/generate-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const config = await response.json();
      setGeneratedConfig(config);
    } catch (err) {
      console.error("Generation failed:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Wand2 className="w-4 h-4" />
            AI Calculator Forge
          </motion.div>
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
            Prompt to Calculator.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Describe any calculation, formula, or tool you need, and our AI will build a custom interactive calculator for you in seconds.
          </p>
        </div>

        {/* Input Section */}
        <Card className="glass-panel border-white/10 bg-white/5 mb-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'A pizza cost splitter for 8 people with different toppings' or 'Carbon footprint of a flight'"
                  className="h-14 bg-black/20 border-white/10 text-lg rounded-xl pr-12"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <Sparkles className="absolute right-4 top-4 text-blue-500/50 w-6 h-6" />
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !prompt.trim()}
                className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-lg font-bold group shadow-lg shadow-blue-500/20"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-2">
                    <RotateCcw className="w-5 h-5 animate-spin" />
                    Forging...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Generate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Try:</span>
              {['ROI for Crypto', 'Water Intake', 'Garden Soil needed'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setPrompt(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <AnimatePresence mode="wait">
          {isGenerating && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <Card className="glass-panel border-white/10 bg-white/5 p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analyzing your request...</h3>
                <p className="text-gray-400">Our AI is designing the UI and writing the mathematical formulas.</p>
              </Card>
            </motion.div>
          )}

          {generatedConfig && !isGenerating && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Preview Result</h2>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-white/10 hover:bg-white/10">
                    <Save className="w-4 h-4 mr-2" /> Save to My Tools
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/10" onClick={() => setGeneratedConfig(null)}>
                    <RotateCcw className="w-4 h-4 mr-2" /> Reset
                  </Button>
                </div>
              </div>

              <DynamicCalculator config={generatedConfig} />
              
              <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <Play className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-green-400">Ready to Use!</h4>
                  <p className="text-sm text-gray-400">This calculator is fully functional. You can test it by entering values above. The formulas were generated specifically for your description.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
