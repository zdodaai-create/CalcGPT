import { HardHat, Ruler, BrickWall, Home, Hammer, Droplets, Construction } from 'lucide-react';

export const CONSTRUCTION_DATA = [
  {
    id: 'construction-converters',
    name: 'Construction Converters',
    description: 'Essential measurement and unit conversion tools for the job site.',
    icon: Ruler,
    color: 'bg-orange-500',
    calculators: [
      { name: 'Board Foot Calculator', slug: 'board-foot-calculator' },
      { name: 'Cubic Yard Calculator', slug: 'cubic-yard-calculator' },
      { name: 'Square Footage Calculator', slug: 'square-footage-calculator' },
    ]
  },
  {
    id: 'construction-materials',
    name: 'Materials Estimation',
    description: 'Calculate exactly how much material you need for your project.',
    icon: BrickWall,
    color: 'bg-blue-600',
    calculators: [
      { name: 'Brick Calculator', slug: 'brick-calculator' },
      { name: 'Drywall Calculator', slug: 'drywall-calculator' },
      { name: 'Gravel Calculator', slug: 'gravel-calculator' },
      { name: 'Lumber Calculator', slug: 'lumber-calculator' },
      { name: 'Pipe Weight Calculator', slug: 'pipe-weight-calculator' },
      { name: 'Rebar Calculator', slug: 'rebar-calculator' },
      { name: 'Tile Calculator', slug: 'tile-calculator' },
      { name: 'Steel Weight Calculator', slug: 'steel-weight-calculator' },
    ]
  },
  {
    id: 'cement-concrete',
    name: 'Cement & Concrete',
    description: 'Precision tools for mixing, pouring, and estimating concrete work.',
    icon: Droplets,
    color: 'bg-slate-600',
    calculators: [
      { name: 'Cement Calculator', slug: 'cement-calculator' },
      { name: 'Concrete Calculator', slug: 'concrete-calculator' },
      { name: 'Concrete Block Calculator', slug: 'concrete-block-calculator' },
      { name: 'Mortar Calculator', slug: 'mortar-calculator' },
    ]
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Tools for home improvement, landscaping, and exterior projects.',
    icon: Home,
    color: 'bg-emerald-600',
    calculators: [
      { name: 'Paint Calculator', slug: 'paint-calculator' },
      { name: 'Fence Calculator', slug: 'fence-calculator' },
      { name: 'Flooring Calculator', slug: 'flooring-calculator' },
      { name: 'Ladder Angle Calculator', slug: 'ladder-angle-calculator' },
      { name: 'Ramp Calculator', slug: 'ramp-calculator' },
      { name: 'Stair Calculator', slug: 'stair-calculator' },
    ]
  },
  {
    id: 'roofing-asphalt',
    name: 'Roofing & Exterior',
    description: 'Calculate pitch, area, and material requirements for roofs and driveways.',
    icon: Hammer,
    color: 'bg-amber-700',
    calculators: [
      { name: 'Roof Pitch Calculator', slug: 'roof-pitch-calculator' },
      { name: 'Roofing Calculator', slug: 'roofing-calculator' },
      { name: 'Snow Load Calculator', slug: 'snow-load-calculator' },
      { name: 'Asphalt Calculator', slug: 'asphalt-calculator' },
      { name: 'Gravel Driveway Calculator', slug: 'gravel-driveway-calculator' },
    ]
  },
  {
    id: 'engineering-material',
    name: 'Structural Engineering',
    description: 'Advanced tools for structural analysis and material specifications.',
    icon: Construction,
    color: 'bg-red-700',
    calculators: [
      { name: 'Tank Volume Calculator', slug: 'tank-volume-calculator' },
      { name: 'Pipe Volume Calculator', slug: 'pipe-volume-calculator' },
      { name: 'Beam Deflection Calculator', slug: 'beam-deflection-calculator' },
      { name: 'Beam Load Calculator', slug: 'beam-load-calculator' },
      { name: 'Bolt Torque Calculator', slug: 'bolt-torque-calculator' },
      { name: 'Welding Calculator', slug: 'welding-calculator' },
      { name: 'Angle Cut Calculator', slug: 'angle-cut-calculator' },
      { name: 'Elevation Grade Calculator', slug: 'elevation-grade-calculator' },
      { name: 'Miter Angle Calculator', slug: 'miter-angle-calculator' },
    ]
  }
];
