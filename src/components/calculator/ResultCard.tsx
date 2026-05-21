"use client";

import React from 'react';

interface ResultCardProps {
  label: string;
  value: any;
  unit?: string;
  description?: string;
  error?: string | null;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  label,
  value,
  unit,
  description,
  error
}) => {
  const isError = error || value === 'Error' || value === Infinity || isNaN(value);
  
  // Format the value
  let displayValue = "0.00";
  if (!isError) {
    const num = Number(value);
    if (!isNaN(num)) {
      displayValue = num.toFixed(2);
    } else {
      displayValue = value; // Fallback if it's a string result
    }
  }

  return (
    <div className="rounded-3xl bg-white border border-gray-200 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <h2 className="mt-4 text-[42px] font-extrabold text-gray-900 leading-none">
        {displayValue}
      </h2>

      {unit && (
        <p className="mt-2 text-lg text-gray-600">
          {unit}
        </p>
      )}

      {description && !isError && (
        <p className="mt-2 text-sm text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
};
