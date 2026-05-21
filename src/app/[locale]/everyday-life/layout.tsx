import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Everyday Life Calculators | CalcVerse AI',
  description: 'From managing home economics and car performance to finding your perfect shoe size and tracking your typing speed. Practical math for real-world problems.',
};

export default function EverydayLifeLayout({
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
