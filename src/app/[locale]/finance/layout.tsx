import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Calculators | CalcVerse AI',
  description: 'From startup burn rates and corporate valuation to personal FIRE planning and Indian SIP investments. Professional models for every financial decision.',
};

export default function FinanceLayout({
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
