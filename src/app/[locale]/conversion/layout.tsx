import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unit Converters | CalcVerse AI',
  description: 'Seamlessly convert between metric, imperial, and scientific units. From everyday length and weight to complex pressure and digital storage transformations.',
};

export default function ConversionLayout({
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
