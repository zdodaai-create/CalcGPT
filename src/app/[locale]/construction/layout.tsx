import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Calculators | CalcVerse AI',
  description: 'Estimate materials, calculate structural loads, and plan your construction projects with precision. From framing and masonry to roofing and landscaping.',
};

export default function ConstructionLayout({
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
