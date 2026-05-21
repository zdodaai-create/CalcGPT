import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physics Calculators | CalcVerse AI',
  description: 'The well-known American author, Bill Bryson, once said: "Physics is really nothing more than a search for ultimate simplicity, but so far all we have is a kind of elegant messiness." Physics is indeed the most fundamental of the sciences that tries to describe the whole nature with thousands of mathematical formulas.',
};

export default function PhysicsLayout({
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
