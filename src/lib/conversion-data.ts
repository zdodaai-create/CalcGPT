import { Ruler, Scale, Wind, Globe, Hash, Monitor, Clock, Zap } from 'lucide-react';

export const CONVERSION_DATA = [
  {
    id: 'length-area',
    name: 'Length & Area',
    description: 'Convert between distance and surface area units across systems.',
    icon: Ruler,
    color: 'bg-purple-500',
    calculators: [
      { name: 'Acreage Calculator', slug: 'acreage-calculator' },
      { name: 'Area Converter', slug: 'area-converter' },
      { name: 'Astronomical Unit Calculator', slug: 'astronomical-unit-calculator' },
      { name: 'Feet and Inches Calculator', slug: 'feet-and-inches-calculator' },
      { name: 'Inches to Fraction Calculator', slug: 'inches-to-fraction-calculator' },
      { name: 'Length Converter', slug: 'length-converter' },
    ]
  },
  {
    id: 'volume-weight',
    name: 'Volume & Weight',
    description: 'Precision conversions for liquid volume, mass, and material density.',
    icon: Scale,
    color: 'bg-blue-500',
    calculators: [
      { name: 'Cubic Feet Calculator', slug: 'cubic-feet-calculator' },
      { name: 'Cubic Meter Calculator', slug: 'cubic-meter-calculator' },
      { name: 'Cubic Yards to Tons Calculator', slug: 'cubic-yards-to-tons-calculator' },
      { name: 'Gallon Calculator', slug: 'gallon-calculator' },
      { name: 'Gallons to Pounds Converter', slug: 'gallons-to-pounds-converter' },
      { name: 'Grams to Ounces Calculator', slug: 'grams-to-ounces-calculator' },
      { name: 'mg to mL Calculator', slug: 'mg-to-ml-calculator' },
      { name: 'Weight Converter', slug: 'weight-converter' },
    ]
  },
  {
    id: 'force-pressure',
    name: 'Force & Engineering',
    description: 'Convert torque, pressure, and mechanical power units.',
    icon: Wind,
    color: 'bg-orange-500',
    calculators: [
      { name: 'Force Converter', slug: 'force-converter' },
      { name: 'Lbs to Newtons Converter', slug: 'lbs-to-newtons-converter' },
      { name: 'Newton Meter Calculator', slug: 'newton-meter-calculator' },
      { name: 'Pressure Conversion', slug: 'pressure-conversion' },
      { name: 'Torque to hp Calculator', slug: 'torque-to-hp-calculator' },
    ]
  },
  {
    id: 'earth-geo',
    name: 'Earth & Navigation',
    description: 'Coordinate systems, scale factors, and geographic measurements.',
    icon: Globe,
    color: 'bg-emerald-500',
    calculators: [
      { name: 'Coordinates Converter', slug: 'coordinates-converter' },
      { name: 'Degrees Minutes Seconds Calculator', slug: 'degrees-minutes-seconds-calculator' },
      { name: 'Scale Calculator', slug: 'scale-calculator' },
    ]
  },
  {
    id: 'numbers-numeral',
    name: 'Numbers & Numerals',
    description: 'Convert between large scales and different numbering systems.',
    icon: Hash,
    color: 'bg-pink-500',
    calculators: [
      { name: 'Billion to Trillion Converter', slug: 'billion-to-trillion-converter' },
      { name: 'Crore to Million Converter', slug: 'crore-to-million-converter' },
      { name: 'Million to Billion Converter', slug: 'million-to-billion-converter' },
      { name: 'Binary Converter', slug: 'binary-converter' },
      { name: 'Binary to Hexadecimal Converter', slug: 'binary-to-hexadecimal-converter' },
      { name: 'Roman Numerals Converter', slug: 'roman-numerals-converter' },
    ]
  },
  {
    id: 'tech-electronics',
    name: 'Tech & Digital',
    description: 'Digital storage, color codes, and network speeds.',
    icon: Monitor,
    color: 'bg-slate-700',
    calculators: [
      { name: 'Byte Conversion Calculator', slug: 'byte-conversion-calculator' },
      { name: 'HEX to RGB Converter', slug: 'hex-to-rgb-converter' },
      { name: 'Mbps Calculator', slug: 'mbps-calculator' },
      { name: 'RGB to HEX Converter', slug: 'rgb-to-hex-converter' },
      { name: 'Unix Time Converter', slug: 'unix-time-converter' },
    ]
  },
  {
    id: 'time-units',
    name: 'Time & Scheduling',
    description: 'Convert durations and track global time differences.',
    icon: Clock,
    color: 'bg-cyan-600',
    calculators: [
      { name: 'Minutes to Hours Converter', slug: 'minutes-to-hours-converter' },
      { name: 'Time Unit Converter', slug: 'time-unit-converter' },
      { name: 'Time Zones Converter', slug: 'time-zones-converter' },
    ]
  },
  {
    id: 'other-converters',
    name: 'Science & Energy',
    description: 'Density, energy, fuel efficiency, and speed conversions.',
    icon: Zap,
    color: 'bg-amber-500',
    calculators: [
      { name: 'Density Conversion Calculator', slug: 'density-conversion-calculator' },
      { name: 'Energy Conversion Calculator', slug: 'energy-conversion-calculator' },
      { name: 'MPG to L/100 km Converter', slug: 'mpg-to-l-100-km-converter' },
      { name: 'PPM Calculator', slug: 'ppm-calculator' },
      { name: 'Speed Conversion Calculator', slug: 'speed-conversion-calculator' },
      { name: 'Temperature Conversion', slug: 'temperature-conversion' },
    ]
  }
];
