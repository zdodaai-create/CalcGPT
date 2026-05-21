"use client";

import React from 'react';

export function CategorySkeleton() {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm animate-pulse flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-100 rounded-2xl mb-6" />
      <div className="h-6 bg-gray-100 rounded-full w-24 mb-3" />
      <div className="h-4 bg-gray-100 rounded-full w-16" />
    </div>
  );
}
