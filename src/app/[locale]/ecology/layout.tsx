import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecology Calculators | CalcVerse AI',
  description: 'Analyze your carbon footprint, calculate renewable energy potential, and understand ecological population dynamics with professional environmental models.',
};

export default function EcologyLayout({
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
