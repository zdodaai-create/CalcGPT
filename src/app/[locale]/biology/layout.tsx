import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biology Calculators | CalcVerse AI',
  description: 'Explore our professional suite of biological calculators. From molecular biology and genetics to animal husbandry and forestry management.',
};

export default function BiologyLayout({
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
