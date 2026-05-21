import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Statistics Calculators | CalcVerse AI',
  description: 'Explore 156 specialized statistics calculators covering descriptive stats, probability, hypothesis testing, regression, confidence intervals, data science, and more.',
};

export default function StatisticsLayout({
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
