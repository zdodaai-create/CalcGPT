import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Math Calculators | CalcVerse AI',
  description: 'Solve complex equations, calculate percentages, analyze statistics, and perform advanced mathematical operations with ease.',
};

export default function MathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {children}
    </div>
  );
}
