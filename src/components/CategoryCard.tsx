"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  href: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, count, icon, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden h-full flex flex-col items-center text-center">
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="mb-6 p-5 rounded-2xl bg-gray-50 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
            {count} tools
          </p>

          {/* Soft Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
};
