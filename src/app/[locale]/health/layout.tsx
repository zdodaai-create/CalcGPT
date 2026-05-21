import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Calculators | CalcVerse AI',
  description: 'Assess health risks, calculate medical dosages, monitor body metrics, and understand clinical scores with precision.',
};

export default function HealthLayout({
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
