import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Calculators | CalcVerse AI',
  description: 'Explore our professional suite of marketing calculators. From customer acquisition cost and ROI to conversion rates and ad spend metrics.',
};

export default function MarketingLayout({
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
