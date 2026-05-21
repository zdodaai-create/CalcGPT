import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Calculators | CalcVerse AI',
  description: 'Perfect your recipes, scale ingredients, calculate brew ratios, and plan events with precision. From baking math to party planning.',
};

export default function FoodLayout({
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
