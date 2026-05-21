import { Car, Shirt, Home, Briefcase, Smile, Sparkles, Clock, BookOpen, Layers } from 'lucide-react';

export const EVERYDAY_LIFE_DATA = [
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Calculate fuel costs, vehicle performance, and EV charging logistics.',
    icon: Car,
    color: 'bg-blue-500',
    calculators: [
      { name: '0–60 Calculator', slug: '0-60-calculator' },
      { name: 'Fuel Cost Calculator', slug: 'fuel-cost-calculator' },
      { name: 'MPG Calculator', slug: 'mpg-calculator' },
      { name: 'Speed Calculator', slug: 'speed-calculator' },
      { name: 'Tesla Charging Cost Calculator', slug: 'tesla-charging-cost-calculator' },
    ]
  },
  {
    id: 'clothing-sewing',
    name: 'Clothing & Sewing',
    description: 'Find your perfect fit and estimate fabric needs for DIY projects.',
    icon: Shirt,
    color: 'bg-pink-500',
    calculators: [
      { name: 'Bra Size Calculator', slug: 'bra-size-calculator' },
      { name: 'Fabric Calculator', slug: 'fabric-calculator' },
      { name: 'Ring Size Converter', slug: 'ring-size-converter' },
      { name: 'Shoe Size Conversion', slug: 'shoe-size-conversion' },
    ]
  },
  {
    id: 'home-economics',
    name: 'Home Economics',
    description: 'Manage utility costs, appliance efficiency, and grocery budgets.',
    icon: Home,
    color: 'bg-amber-500',
    calculators: [
      { name: 'Electricity Cost Calculator', slug: 'electricity-cost-calculator' },
      { name: 'Appliance Wattage Calculator', slug: 'appliance-wattage-calculator' },
      { name: 'Grocery Calculator', slug: 'grocery-calculator' },
      { name: 'LED Savings Calculator', slug: 'led-savings-calculator' },
      { name: 'Unit Price Calculator', slug: 'unit-price-calculator' },
    ]
  },
  {
    id: 'productivity',
    name: 'Office & Productivity',
    description: 'Optimize work sessions, meeting costs, and typing speeds.',
    icon: Briefcase,
    color: 'bg-indigo-500',
    calculators: [
      { name: 'Acceptance Rate Calculator', slug: 'acceptance-rate-calculator' },
      { name: 'Meeting Cost Calculator', slug: 'meeting-cost-calculator' },
      { name: 'Pomodoro Technique Calculator', slug: 'pomodoro-technique-calculator' },
      { name: 'Time Card Calculator', slug: 'time-card-calculator' },
      { name: 'Words per Minute Calculator', slug: 'words-per-minute-calculator' },
    ]
  },
  {
    id: 'leisure-fun',
    name: 'Leisure & Fun',
    description: 'Calculate audiobook times, hammock setups, and party supplies.',
    icon: Smile,
    color: 'bg-cyan-500',
    calculators: [
      { name: 'Audiobooks Calculator', slug: 'audiobooks-calculator' },
      { name: 'Hammock Hang Calculator', slug: 'hammock-hang-calculator' },
      { name: 'Helium Balloons Calculator', slug: 'helium-balloons-calculator' },
      { name: 'Tent Size Calculator', slug: 'tent-size-calculator' },
      { name: 'TV Series Duration Calculator', slug: 'tv-series-duration-calculator' },
    ]
  },
  {
    id: 'personal-hygiene',
    name: 'Personal Hygiene',
    description: 'Monitor water usage and track personal care metrics.',
    icon: Sparkles,
    color: 'bg-emerald-500',
    calculators: [
      { name: 'Bath vs Shower Calculator', slug: 'bath-vs-shower-calculator' },
      { name: 'Hair Growth Calculator', slug: 'hair-growth-calculator' },
      { name: 'Shower Cost Calculator', slug: 'shower-cost-calculator' },
      { name: 'Sunscreen Calculator', slug: 'sunscreen-calculator' },
    ]
  },
  {
    id: 'time-date',
    name: 'Time & Date',
    description: 'Track age, business days, and time differences.',
    icon: Clock,
    color: 'bg-slate-700',
    calculators: [
      { name: 'Age Calculator', slug: 'age-calculator' },
      { name: 'Business Days Calculator', slug: 'business-days-calculator' },
      { name: 'Leap Year Calculator', slug: 'leap-year-calculator' },
      { name: 'Time Difference Calculator', slug: 'time-difference-calculator' },
    ]
  },
  {
    id: 'reading',
    name: 'Books & Reading',
    description: 'Measure reading speeds and estimate completion times.',
    icon: BookOpen,
    color: 'bg-orange-600',
    calculators: [
      { name: 'Reading Speed Calculator', slug: 'reading-speed-calculator' },
      { name: 'Reading Time Calculator', slug: 'reading-time-calculator' },
    ]
  },
  {
    id: 'other-everyday',
    name: 'Utility & Hardware',
    description: 'Battery charging, expiration tracking, and home hardware math.',
    icon: Layers,
    color: 'bg-gray-500',
    calculators: [
      { name: 'Battery Charge Time Calculator', slug: 'battery-charge-time-calculator' },
      { name: 'Expiration Date Calculator', slug: 'expiration-date-calculator' },
      { name: 'Well Volume Calculator', slug: 'well-volume-calculator' },
    ]
  }
];
