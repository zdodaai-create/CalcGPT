import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Other Calculators | CalcVerse AI',
  description: 'The most random collection of calculators available on the Internet. From 3D printing to Minecraft, we have an everyday life calculator for you.',
};

export default function OtherLayout({
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
