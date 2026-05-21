"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FlaskConical, 
  Dna, 
  PawPrint, 
  Leaf, 
  TreePine, 
  ChevronRight,
  Calculator,
  Filter,
  Microscope,
  Stethoscope
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { AdContainer } from '@/components/AdContainer';

const BIOLOGY_SUBGROUPS = [
  {
    id: "bio-laboratory",
    title: "Bio Laboratory",
    icon: <FlaskConical className="w-5 h-5" />,
    calculators: [
      "Annealing Temperature Calculator", "Generation Time Calculator", "Cell Dilution Calculator",
      "Cell Doubling Time Calculator", "DNA Concentration Calculator", "Ligation Calculator",
      "Log Reduction Calculator", "Protein Concentration Calculator"
    ]
  },
  {
    id: "genetics",
    title: "Genetics",
    icon: <Dna className="w-5 h-5" />,
    calculators: [
      "Allele Frequency Calculator", "Dihybrid Cross Calculator", "DNA Copy Number Calculator",
      "DNA to mRNA Converter", "Punnett Square Calculator", "qPCR Efficiency Calculator"
    ]
  },
  {
    id: "animal-pregnancy",
    title: "Animal Pregnancy",
    icon: <PawPrint className="w-5 h-5" />,
    calculators: [
      "Cat Pregnancy Calculator", "Cow Gestation Calculator", "Dog Pregnancy Calculator",
      "Goat Gestation Calculator", "Guinea Pig Pregnancy Calculator", "Mare Gestation Calculator"
    ]
  },
  {
    id: "dog",
    title: "Dog Calculators",
    icon: <Stethoscope className="w-5 h-5" />,
    calculators: [
      "Dog Age Calculator", "Dog BMI Calculator", "Dog Nutrition Calculator",
      "Dog Chocolate Toxicity Calculator", "Dog Food Calculator", "Dog Size Calculator"
    ]
  },
  {
    id: "gardening-crops",
    title: "Gardening & Crops",
    icon: <Leaf className="w-5 h-5" />,
    calculators: [
      "Fertilizer Calculator", "Soil Calculator", "Plant Spacing Calculator",
      "Mulch Calculator", "Daily Light Integral Calculator", "VPD Calculator"
    ]
  },
  {
    id: "trees-forestry",
    title: "Trees & Forestry",
    icon: <TreePine className="w-5 h-5" />,
    calculators: [
      "Tree Age Calculator", "Tree Height Calculator", "Tree Spacing Calculator",
      "Tree Value Calculator", "Basal Area Calculator"
    ]
  }
];

export default function BiologyPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = BIOLOGY_SUBGROUPS.map(group => ({
    ...group,
    calculators: group.calculators.filter(calc => 
      calc.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.calculators.length > 0);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">Biology</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Microscope className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Biology Calculators</h1>
          </div>
          <p className="text-lg text-gray-500 max-w-2xl font-medium">
            From laboratory protocols and genetics to pet care and forestry, solve complex biological problems with ease.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search biology calculators..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-gray-50 border-0 rounded-2xl pl-12 pr-4 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <button className="h-12 px-6 rounded-2xl border border-gray-200 flex items-center gap-2 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5" />
            Categories
          </button>
        </div>

        {/* Ad Space */}
        <AdContainer type="banner" className="mb-12" />

        {/* Category Sections */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <section key={group.id} className="scroll-mt-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-900">
                  <span className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 text-blue-600">
                    {group.icon}
                  </span>
                  {group.title}
                  <span className="text-sm font-bold text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {group.calculators.length}
                  </span>
                </h2>
                <Link href={`/calculator/biology/${group.id}`} className="text-sm font-bold text-blue-600 hover:underline">
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.calculators.map((calc) => {
                  const slug = calc.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.div
                      key={calc}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Link href={`/calculator/${slug}`}>
                        <Card className="border-gray-100 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full">
                          <CardContent className="p-6 flex items-center justify-between">
                            <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {calc}
                            </span>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Ad between sections every 2 sections */}
              {group.id === 'animal-pregnancy' && <AdContainer type="inline" className="my-12" />}
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
