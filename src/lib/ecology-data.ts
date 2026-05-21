import { Footprints, Sun, Leaf, TreePine } from 'lucide-react';

export const ECOLOGY_DATA = [
  {
    id: 'eco-footprint',
    name: 'Eco Footprint',
    description: 'Measure and analyze your impact on carbon, water, and waste.',
    icon: Footprints,
    color: 'bg-emerald-500',
    calculators: [
      { name: 'AI Water Footprint Calculator', slug: 'ai-water-footprint-calculator' },
      { name: 'Bag Footprint Calculator', slug: 'bag-footprint-calculator' },
      { name: 'Christmas Tree Footprint Calculator', slug: 'christmas-tree-footprint-calculator' },
      { name: 'COVID-19 Waste Calculator', slug: 'covid-19-waste-calculator' },
      { name: 'Cryptocurrency Footprint Calculator', slug: 'cryptocurrency-footprint-calculator' },
      { name: 'Flight Carbon Footprint Calculator', slug: 'flight-carbon-footprint-calculator' },
      { name: 'Hand Drying Footprint Calculator', slug: 'hand-drying-footprint-calculator' },
      { name: 'Kaya Identity Calculator', slug: 'kaya-identity-calculator' },
      { name: 'Meat Footprint Calculator', slug: 'meat-footprint-calculator' },
      { name: 'Plastic Footprint Calculator', slug: 'plastic-footprint-calculator' },
      { name: 'Vegan Footprint Calculator', slug: 'vegan-footprint-calculator' },
    ]
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    description: 'Calculate potential power generation from solar, wind, and water.',
    icon: Sun,
    color: 'bg-amber-500',
    calculators: [
      { name: 'Hydroelectric Power Calculator', slug: 'hydroelectric-power-calculator' },
      { name: 'Solar Panel Calculator', slug: 'solar-panel-calculator' },
      { name: 'Solar Panel Wattage Calculator', slug: 'solar-panel-wattage-calculator' },
      { name: 'Wind Turbine Calculator', slug: 'wind-turbine-calculator' },
      { name: 'Wind Turbine Profit Calculator', slug: 'wind-turbine-profit-calculator' },
    ]
  },
  {
    id: 'sustainable-living',
    name: 'Sustainable Living',
    description: 'Practical tools for reducing daily waste and improving efficiency.',
    icon: Leaf,
    color: 'bg-green-600',
    calculators: [
      { name: 'Books vs e-Books Calculator', slug: 'books-vs-e-books-calculator' },
      { name: 'Car vs Bike Calculator', slug: 'car-vs-bike-calculator' },
      { name: 'Drip Faucet Calculator', slug: 'drip-faucet-calculator' },
      { name: 'Plug-in Hybrid Economy Calculator', slug: 'plug-in-hybrid-economy-calculator' },
      { name: 'Tree Benefits Calculator', slug: 'tree-benefits-calculator' },
      { name: 'Water Demand Calculator', slug: 'water-demand-calculator' },
    ]
  },
  {
    id: 'other-ecology',
    name: 'Eco Science & Health',
    description: 'Population dynamics, biodiversity indices, and environmental health.',
    icon: TreePine,
    color: 'bg-cyan-600',
    calculators: [
      { name: 'Carrying Capacity Calculator', slug: 'carrying-capacity-calculator' },
      { name: 'CO₂ Breathing Emission Calculator', slug: 'co2-breathing-emission-calculator' },
      { name: 'Fish Mercury Calculator', slug: 'fish-mercury-calculator' },
      { name: 'Lotka-Volterra Calculator', slug: 'lotka-volterra-calculator' },
      { name: 'Shannon Diversity Index Calculator', slug: 'shannon-diversity-index-calculator' },
      { name: 'Smog Calculator', slug: 'smog-calculator' },
    ]
  }
];
