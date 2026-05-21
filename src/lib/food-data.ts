import { Utensils, Coffee, Wine, Cake, Pizza, Drumstick, PartyPopper, BookOpen } from 'lucide-react';

export const FOOD_DATA = [
  {
    id: 'cooking-converters',
    name: 'Cooking Converters',
    description: 'Essential measurement conversion tools for the kitchen — butter, pans, cups, and more.',
    icon: Utensils,
    color: 'bg-amber-500',
    calculators: [
      { name: 'Butter Calculator', slug: 'butter-calculator' },
      { name: 'Cake Pan Converter', slug: 'cake-pan-converter' },
      { name: 'Cooking Measurement Converter', slug: 'cooking-measurement-converter' },
      { name: 'Cups to Pounds Converter', slug: 'cups-to-pounds-converter' },
      { name: 'Grams to Cups Converter', slug: 'grams-to-cups-converter' },
      { name: 'Yeast Converter', slug: 'yeast-converter' },
    ]
  },
  {
    id: 'tea-coffee',
    name: 'Tea & Coffee Calculators',
    description: 'Perfect your brew with precise ratio, caffeine, and environmental impact calculators.',
    icon: Coffee,
    color: 'bg-yellow-800',
    calculators: [
      { name: 'Coffee Calculator', slug: 'coffee-calculator' },
      { name: 'Coffee Footprint Calculator', slug: 'coffee-footprint-calculator' },
      { name: 'Coffee Kick Calculator', slug: 'coffee-kick-calculator' },
      { name: 'Coffee Ratio Calculator', slug: 'coffee-ratio-calculator' },
      { name: 'Cold Brew Ratio Calculator', slug: 'cold-brew-ratio-calculator' },
      { name: 'Tea Brewing Calculator', slug: 'tea-brewing-calculator' },
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks Calculators',
    description: 'From homebrew ABV to dilution science — professional beverage calculations.',
    icon: Wine,
    color: 'bg-purple-600',
    calculators: [
      { name: 'ABV Calculator', slug: 'abv-calculator' },
      { name: 'Alcohol Dilution Calculator', slug: 'alcohol-dilution-calculator' },
      { name: 'Chilled Drink Calculator', slug: 'chilled-drink-calculator' },
    ]
  },
  {
    id: 'desserts-baking',
    name: 'Desserts & Baking',
    description: 'Baker\'s percentages, sourdough hydration, cake pricing, and more for the serious baker.',
    icon: Cake,
    color: 'bg-pink-500',
    calculators: [
      { name: "Baker's Percentage Calculator", slug: 'bakers-percentage-calculator' },
      { name: 'Cake Pricing Calculator', slug: 'cake-pricing-calculator' },
      { name: 'Cake Serving Calculator', slug: 'cake-serving-calculator' },
      { name: 'Pancake Recipe Calculator', slug: 'pancake-recipe-calculator' },
      { name: 'Sourdough Calculator', slug: 'sourdough-calculator' },
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza Calculators',
    description: 'Calculate perfect dough recipes, party quantities, and pizza size value comparisons.',
    icon: Pizza,
    color: 'bg-red-600',
    calculators: [
      { name: 'Perfect Pizza Calculator', slug: 'perfect-pizza-calculator' },
      { name: 'Pizza Party Calculator', slug: 'pizza-party-calculator' },
      { name: 'Pizza Size Calculator', slug: 'pizza-size-calculator' },
    ]
  },
  {
    id: 'thanksgiving',
    name: 'Thanksgiving Calculators',
    description: 'Plan the perfect holiday feast with precise timing and portion calculations.',
    icon: Drumstick,
    color: 'bg-orange-700',
    calculators: [
      { name: 'Thanksgiving Calculator', slug: 'thanksgiving-calculator' },
      { name: 'Turkey Cooking Time Calculator', slug: 'turkey-cooking-time-calculator' },
      { name: 'Turkey Defrost Time Calculator', slug: 'turkey-defrost-time-calculator' },
    ]
  },
  {
    id: 'party',
    name: 'Party Calculators',
    description: 'Plan the perfect event — from BBQs and weddings to game nights.',
    icon: PartyPopper,
    color: 'bg-violet-500',
    calculators: [
      { name: 'BBQ Party Calculator', slug: 'bbq-party-calculator' },
      { name: 'Beer Pong Calculator', slug: 'beer-pong-calculator' },
      { name: 'Wedding Alcohol Calculator', slug: 'wedding-alcohol-calculator' },
    ]
  },
  {
    id: 'other-food',
    name: 'Other Food Calculators',
    description: 'Specialized tools for curing, brining, boiling, grilling, and more.',
    icon: BookOpen,
    color: 'bg-teal-600',
    calculators: [
      { name: 'Bacon Curing Calculator', slug: 'bacon-curing-calculator' },
      { name: 'Brine Calculator', slug: 'brine-calculator' },
      { name: 'Egg Boiling Calculator', slug: 'egg-boiling-calculator' },
      { name: 'Rice to Water Ratio Calculator', slug: 'rice-water-ratio-calculator' },
      { name: 'Steak Cook Time Calculator', slug: 'steak-cook-time-calculator' },
      { name: 'Water Cooling Calculator', slug: 'water-cooling-calculator' },
    ]
  }
];
