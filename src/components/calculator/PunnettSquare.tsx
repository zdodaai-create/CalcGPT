"use client";

import React from 'react';

interface PunnettSquareProps {
  parent1: string; // e.g. "Aa" or "AaBb"
  parent2: string; // e.g. "Aa" or "AaBb"
}

export const PunnettSquare: React.FC<PunnettSquareProps> = ({ parent1, parent2 }) => {
  const getGametes = (genotype: string) => {
    if (genotype.length <= 2) return genotype.split('');
    
    // For Dihybrid (AaBb): AB, Ab, aB, ab
    if (genotype.length === 4) {
      const g1 = [genotype[0], genotype[1]];
      const g2 = [genotype[2], genotype[3]];
      const res: string[] = [];
      g1.forEach(a => g2.forEach(b => res.push(a + b)));
      return res;
    }
    
    return genotype.split('');
  };

  const alleles1 = getGametes(parent1);
  const alleles2 = getGametes(parent2);

  const grid = alleles2.map(a2 => 
    alleles1.map(a1 => {
      // Combine and sort by pairs (e.g. "aA" -> "Aa", "bBaA" -> "AaBb")
      const combined = a1 + a2;
      const pairs: string[] = [];
      for (let i = 0; i < combined.length; i += 2) {
        pairs.push(combined.slice(i, i + 2).split('').sort().join(''));
      }
      return pairs.sort().join('');
    })
  );

  return (
    <div className="mt-8 overflow-x-auto rounded-3xl border border-gray-100 shadow-sm bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="p-4 border-r border-gray-100 bg-white min-w-[80px]"></th>
            {alleles1.map((a, i) => (
              <th key={i} className="p-4 text-center font-black text-blue-600 border-r last:border-0 border-gray-100 min-w-[80px]">
                {a}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alleles2.map((a2, i) => (
            <tr key={i} className="border-b last:border-0 border-gray-100">
              <td className="p-4 bg-gray-50 text-center font-black text-blue-600 border-r border-gray-100">
                {a2}
              </td>
              {grid[i].map((genotype, j) => (
                <td key={j} className="p-6 text-center font-bold text-gray-800 border-r last:border-0 border-gray-100 bg-white hover:bg-blue-50 transition-colors">
                  <span className="text-lg tracking-tight whitespace-nowrap">{genotype}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
