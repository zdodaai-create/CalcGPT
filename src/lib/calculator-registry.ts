import { CalculatorConfig } from "./calculator-types";
import { BIOLOGY_DATA } from "./biology-data";
import { CHEMISTRY_CALCULATORS_GENERAL } from "./chemistry-calculators-general";
import { CHEMISTRY_CALCULATORS_SOLUTIONS } from "./chemistry-calculators-solutions";
import { CHEMISTRY_CALCULATORS_ADVANCED } from "./chemistry-calculators-advanced";
import { BIOLOGY_CALCULATORS_LABS } from "./biology-calculators-labs";
import { BIOLOGY_CALCULATORS_PETS } from "./biology-calculators-pets";
import { BIOLOGY_CALCULATORS_PLANTS } from "./biology-calculators-plants";
import { CONSTRUCTION_CALCULATORS } from "./construction-calculators";
import { CONSTRUCTION_DATA } from "./construction-data";
import { CONVERSION_CALCULATORS } from "./conversion-calculators";
import { CONVERSION_DATA } from "./conversion-data";
import { ECOLOGY_CALCULATORS } from "./ecology-calculators";
import { ECOLOGY_DATA } from "./ecology-data";
import { EVERYDAY_LIFE_CALCULATORS } from "./everyday-life-calculators";
import { EVERYDAY_LIFE_DATA } from "./everyday-life-data";
import { FINANCE_CALCULATORS } from "./finance-calculators";
import { FINANCE_DATA } from "./finance-data";
import { FOOD_CALCULATORS } from "./food-calculators";
import { HEALTH_CALCULATORS } from "./health-calculators";
import { MATH_CALCULATORS } from "./math-calculators";
import { MATH_DATA } from "./math-data";
import { PHYSICS_CALCULATORS } from "./physics-calculators";
import { PHYSICS_CALCULATORS_EXTENDED } from "./physics-calculators-extended";
import { ASTRONOMY_CALCULATORS } from "./physics-calculators-astronomy";
import { ATMOSPHERIC_CALCULATORS } from "./physics-calculators-atmospheric";
import { ELECTROMAGNETISM_CALCULATORS } from "./physics-calculators-electromagnetism";
import { ELECTRONICS_CALCULATORS } from "./physics-calculators-electronics";
import { EVERYDAY_OTHER_CALCULATORS } from "./physics-calculators-everyday-other";
import { FLUID_MECHANICS_CALCULATORS } from "./physics-calculators-fluids";
import { MACHINES_CALCULATORS } from "./physics-calculators-machines";
import { MATERIALS_CALCULATORS } from "./physics-calculators-materials";
import { QUANTUM_CALCULATORS } from "./physics-calculators-quantum";
import { RELATIVITY_CALCULATORS } from "./physics-calculators-relativity";
import { THERMODYNAMICS_CALCULATORS } from "./physics-calculators-thermo";
import { PHYSICS_DATA } from "./physics-data";
import { SPORTS_CALCULATORS_BASE } from "./sports-calculators-base";
import { SPORTS_CALCULATORS_PERFORMANCE } from "./sports-calculators-performance";
import { STATISTICS_CALCULATORS_BASE } from "./statistics-calculators-base";
import { STATISTICS_CALCULATORS_ADVANCED } from "./statistics-calculators-advanced";
import { OTHER_DATA } from "./other-data";
import { OTHER_CALCULATORS_EDUCATION } from "./other-calculators-education";
import { OTHER_CALCULATORS_PHOTO } from "./other-calculators-photo";
import { OTHER_CALCULATORS_MUSIC } from "./other-calculators-music";
import { OTHER_CALCULATORS_TECH } from "./other-calculators-tech";
import { OTHER_CALCULATORS_NETWORK } from "./other-calculators-network";
import { OTHER_CALCULATORS_GAMES } from "./other-calculators-games";
import { OTHER_CALCULATORS_LOGISTICS } from "./other-calculators-logistics";
import { OTHER_CALCULATORS_EARTH_SEASONS } from "./other-calculators-earth-seasons";
import { OTHER_CALCULATORS_MISC } from "./other-calculators-misc";
import { MARKETING_CALCULATORS_ADS } from "./marketing-calculators-ads";
import { MARKETING_CALCULATORS_CONVERSION } from "./marketing-calculators-conversion";
import { MARKETING_CALCULATORS_ROI } from "./marketing-calculators-roi";
import { MARKETING_CALCULATORS_CUSTOMER } from "./marketing-calculators-customer";

export const CALCULATOR_REGISTRY: CalculatorConfig[] = [
  // Keeping this array empty or just for core uncategorized tools
  // since domain-specific tools are managed in their own files
];

// Combine all calculators
export const ALL_CALCULATORS: CalculatorConfig[] = [
  ...CALCULATOR_REGISTRY,
  ...CHEMISTRY_CALCULATORS_GENERAL,
  ...CHEMISTRY_CALCULATORS_SOLUTIONS,
  ...CHEMISTRY_CALCULATORS_ADVANCED,
  ...BIOLOGY_CALCULATORS_LABS,
  ...BIOLOGY_CALCULATORS_PETS,
  ...BIOLOGY_CALCULATORS_PLANTS,
  ...CONSTRUCTION_CALCULATORS,
  ...CONVERSION_CALCULATORS,
  ...ECOLOGY_CALCULATORS,
  ...EVERYDAY_LIFE_CALCULATORS,
  ...FINANCE_CALCULATORS,
  ...FOOD_CALCULATORS,
  ...HEALTH_CALCULATORS,
  ...MATH_CALCULATORS,
  ...CONSTRUCTION_DATA.flatMap(sub => 
    sub.calculators
      .filter(calc => 
        !CALCULATOR_REGISTRY.some(existing => existing.id === calc.slug) &&
        !CONSTRUCTION_CALCULATORS.some(existing => existing.id === calc.slug)
      )
      .map(calc => ({
        id: calc.slug,
        name: calc.name,
        description: `Construction tool for ${calc.name.toLowerCase()}.`,
        category: "construction",
        subcategory: sub.id,
        inputs: [{ id: "v1", label: "Length", type: "number" as const, defaultValue: 10, unit: "ft" }],
        outputs: [{ id: "res", label: "Result", formula: "v1 * 1.0", unit: "units" }],
      }))
  ),

  ...MATH_DATA.flatMap(sub => 
    sub.calculators
      .filter(calc => 
        !CALCULATOR_REGISTRY.some(existing => existing.id === calc.slug) &&
        !MATH_CALCULATORS.some(existing => existing.id === calc.slug)
      )
      .map(calc => ({
        id: calc.slug,
        name: calc.name,
        description: `Mathematical tool for ${calc.name.toLowerCase()}.`,
        category: "math",
        subcategory: sub.id,
        inputs: [{ id: "v1", label: "Value", type: "number" as const, defaultValue: 100 }],
        outputs: [{ id: "res", label: "Result", formula: "v1", unit: "" }],
      }))
  ),
  ...PHYSICS_CALCULATORS,
  ...PHYSICS_CALCULATORS_EXTENDED,
  ...ASTRONOMY_CALCULATORS,
  ...ATMOSPHERIC_CALCULATORS,
  ...ELECTROMAGNETISM_CALCULATORS,
  ...ELECTRONICS_CALCULATORS,
  ...EVERYDAY_OTHER_CALCULATORS,
  ...FLUID_MECHANICS_CALCULATORS,
  ...MACHINES_CALCULATORS,
  ...MATERIALS_CALCULATORS,
  ...QUANTUM_CALCULATORS,
  ...RELATIVITY_CALCULATORS,
  ...THERMODYNAMICS_CALCULATORS,
  ...PHYSICS_DATA.flatMap(sub => 
    sub.calculators
      .filter(calc => 
        !CALCULATOR_REGISTRY.some(existing => existing.id === calc.slug) &&
        !PHYSICS_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !PHYSICS_CALCULATORS_EXTENDED.some(existing => existing.id === calc.slug) &&
        !ASTRONOMY_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !ATMOSPHERIC_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !ELECTROMAGNETISM_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !ELECTRONICS_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !EVERYDAY_OTHER_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !FLUID_MECHANICS_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !MACHINES_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !MATERIALS_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !QUANTUM_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !RELATIVITY_CALCULATORS.some(existing => existing.id === calc.slug) &&
        !THERMODYNAMICS_CALCULATORS.some(existing => existing.id === calc.slug)
      )
      .map(calc => ({
        id: calc.slug,
        name: calc.name,
        description: `Physics tool for ${calc.name.toLowerCase()}.`,
        category: "physics",
        subcategory: sub.id,
        inputs: [{ id: "v1", label: "Value", type: "number" as const, defaultValue: 10 }],
        outputs: [{ id: "res", label: "Result", formula: "v1", unit: "" }],
      }))
  ),
  ...SPORTS_CALCULATORS_BASE,
  ...SPORTS_CALCULATORS_PERFORMANCE,
  ...STATISTICS_CALCULATORS_BASE,
  ...STATISTICS_CALCULATORS_ADVANCED,
  ...OTHER_CALCULATORS_EDUCATION,
  ...OTHER_CALCULATORS_PHOTO,
  ...OTHER_CALCULATORS_MUSIC,
  ...OTHER_CALCULATORS_TECH,
  ...OTHER_CALCULATORS_NETWORK,
  ...OTHER_CALCULATORS_GAMES,
  ...OTHER_CALCULATORS_LOGISTICS,
  ...OTHER_CALCULATORS_EARTH_SEASONS,
  ...OTHER_CALCULATORS_MISC,
  ...MARKETING_CALCULATORS_ADS,
  ...MARKETING_CALCULATORS_CONVERSION,
  ...MARKETING_CALCULATORS_ROI,
  ...MARKETING_CALCULATORS_CUSTOMER,
  ...OTHER_DATA.flatMap(sub => 
    sub.calculators
      .filter(calc => 
        !OTHER_CALCULATORS_EDUCATION.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_PHOTO.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_MUSIC.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_TECH.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_NETWORK.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_GAMES.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_LOGISTICS.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_EARTH_SEASONS.some(existing => existing.id === calc.slug) &&
        !OTHER_CALCULATORS_MISC.some(existing => existing.id === calc.slug)
      )
      .map(calc => ({
        id: calc.slug,
        name: calc.name,
        description: `Utility tool for ${calc.name.toLowerCase()}.`,
        category: "other",
        subcategory: sub.id,
        inputs: [{ id: "v1", label: "Value", type: "number" as const, defaultValue: 10 }],
        outputs: [{ id: "res", label: "Result", formula: "v1", unit: "" }],
      }))
  )
];

export const getCalculatorBySlug = (slug: string) => {
  return ALL_CALCULATORS.find(c => c.id === slug);
};

export const getCalculatorsByCategory = (category: string, subcategory?: string) => {
  return ALL_CALCULATORS.filter(c => 
    c.category === category && (!subcategory || c.subcategory === subcategory)
  );
};
