import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chemistry Calculators | CalcVerse AI',
  description: 'From basic stoichiometry and molar mass to complex thermodynamics and electrochemistry calculations. Precision tools for labs and classrooms.',
};

export default function ChemistryLayout({
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
