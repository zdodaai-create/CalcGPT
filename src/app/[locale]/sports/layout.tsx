import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Calculators | CalcVerse AI',
  description: 'Analyze game stats, calculate calorie burn, determine equipment sizes, and track athletic performance with our complete suite of sports calculators.',
};

export default function SportsLayout({
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
