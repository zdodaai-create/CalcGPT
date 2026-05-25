"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ALL_CALCULATORS } from '@/lib/calculator-registry';
import { 
  Calculator, HeartPulse, Atom, Dna, 
  PiggyBank, Activity, LineChart, 
  Leaf, Dumbbell, Percent
} from 'lucide-react';

export const HeroBadge = ({ className = "" }: { className?: string }) => {
  const count = ALL_CALCULATORS.length;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] select-none pointer-events-none shrink-0">
        
        {/* CSS Animations */}
        <style>
          {`
            @keyframes badgeGlowPulse {
              0%, 100% { filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.5)); transform: scale(1); }
              50% { filter: drop-shadow(0 0 50px rgba(6, 182, 212, 0.8)); transform: scale(1.02); }
            }
            @keyframes badgeSpinOrbit1 {
              100% { transform: rotate(360deg); }
            }
            @keyframes badgeSpinOrbit2 {
              100% { transform: rotate(-360deg); }
            }
            @keyframes badgeFloatParticle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            .badge-center-orb {
              animation: badgeGlowPulse 4s ease-in-out infinite;
            }
            .badge-ring-1 {
              animation: badgeSpinOrbit1 20s linear infinite;
            }
            .badge-ring-2 {
              animation: badgeSpinOrbit2 30s linear infinite;
            }
            .badge-icon-upright-1 {
              animation: badgeSpinOrbit2 20s linear infinite; /* Counter-rotate to stay upright */
            }
            .badge-icon-upright-2 {
              animation: badgeSpinOrbit1 30s linear infinite; /* Counter-rotate to stay upright */
            }
            .badge-particle-1 { animation: badgeFloatParticle 4s ease-in-out infinite; }
            .badge-particle-2 { animation: badgeFloatParticle 5s ease-in-out infinite 1s; }
            .badge-particle-3 { animation: badgeFloatParticle 6s ease-in-out infinite 2s; }
          `}
        </style>

        {/* Orbit Rings Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Outer Ring */}
          <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-blue-400/30 badge-ring-2">
            {/* Icons on Outer Ring */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-blue-100 p-1.5 text-blue-500">
              <Calculator size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-purple-100 p-1.5 text-purple-500">
              <LineChart size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-emerald-100 p-1.5 text-emerald-500">
              <PiggyBank size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-rose-100 p-1.5 text-rose-500">
              <HeartPulse size={18} strokeWidth={2.5} />
            </div>
            {/* Diagonals */}
            <div className="absolute top-[12%] left-[12%] badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-cyan-100 p-1.5 text-cyan-500">
              <Atom size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute bottom-[12%] right-[12%] badge-icon-upright-2 bg-white rounded-xl shadow-lg border border-fuchsia-100 p-1.5 text-fuchsia-500">
              <Dna size={18} strokeWidth={2.5} />
            </div>
          </div>

          {/* Inner Ring */}
          <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-indigo-400/40 badge-ring-1">
            {/* Icons on Inner Ring */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge-icon-upright-1 bg-white rounded-xl shadow-lg border border-orange-100 p-1.5 text-orange-500">
              <Percent size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 badge-icon-upright-1 bg-white rounded-xl shadow-lg border border-green-100 p-1.5 text-green-500">
              <Leaf size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 badge-icon-upright-1 bg-white rounded-xl shadow-lg border border-pink-100 p-1.5 text-pink-500">
              <Dumbbell size={18} strokeWidth={2.5} />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 badge-icon-upright-1 bg-white rounded-xl shadow-lg border border-indigo-100 p-1.5 text-indigo-500">
              <Activity size={18} strokeWidth={2.5} />
            </div>
          </div>

          {/* Central Glowing Orb */}
          <div className="relative z-10 w-[42%] h-[42%] rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 badge-center-orb flex flex-col items-center justify-center text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight drop-shadow-md">
              {count}+
            </div>
            <div className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90 mt-1 drop-shadow-md text-center leading-tight">
              Free<br className="sm:hidden" /> Calculators
            </div>
          </div>

          {/* Floating Ambient Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-400 blur-[1px] badge-particle-1" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400 blur-[2px] badge-particle-2" />
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 rounded-full bg-blue-400 badge-particle-3" />
        </div>

      </div>
    </motion.div>
  );
};
