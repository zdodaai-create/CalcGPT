import { 
  FlaskConical, 
  Dna, 
  PawPrint, 
  Dog, 
  Cat, 
  Bird, 
  Beef, 
  Leaf, 
  TreePine, 
  Globe
} from 'lucide-react';

export const BIOLOGY_DATA = [
  {
    id: "bio-laboratory",
    title: "Bio laboratory calculators 🔬",
    icon: FlaskConical,
    calculators: [
      { name: "Annealing Temperature Calculator", slug: "annealing-temperature-calculator" },
      { name: "Generation Time Calculator", slug: "generation-time-calculator" },
      { name: "Cell Dilution Calculator", slug: "cell-dilution-calculator" },
      { name: "Cell Doubling Time Calculator", slug: "cell-doubling-time-calculator" },
      { name: "DNA Concentration Calculator", slug: "dna-concentration-calculator" },
      { name: "Ligation Calculator", slug: "ligation-calculator" },
      { name: "Log Reduction Calculator", slug: "log-reduction-calculator" },
      { name: "Protein Concentration Calculator", slug: "protein-concentration-calculator" }
    ]
  },
  {
    id: "genetics",
    title: "Genetics calculators 🧬",
    icon: Dna,
    calculators: [
      { name: "Allele Frequency Calculator", slug: "allele-frequency-calculator" },
      { name: "Dihybrid Cross Calculator - Punnett Square", slug: "dihybrid-cross-calculator" },
      { name: "DNA Copy Number Calculator", slug: "dna-copy-number-calculator" },
      { name: "DNA to mRNA Converter", slug: "dna-to-mrna-converter" },
      { name: "Punnett Square Calculator", slug: "punnett-square-calculator" },
      { name: "qPCR Efficiency Calculator", slug: "qpcr-efficiency-calculator" },
      { name: "Trihybrid Cross Calculator - Punnett Square", slug: "trihybrid-cross-calculator" }
    ]
  },
  {
    id: "animal-pregnancy",
    title: "Animal pregnancy calculators 🐎🐐",
    icon: PawPrint,
    calculators: [
      { name: "Cat Pregnancy Calculator", slug: "cat-pregnancy-calculator" },
      { name: "Cow Gestation Calculator", slug: "cow-gestation-calculator" },
      { name: "Dog Pregnancy Calculator", slug: "dog-pregnancy-calculator" },
      { name: "Goat Gestation Calculator", slug: "goat-gestation-calculator" },
      { name: "Guinea Pig Pregnancy Calculator", slug: "guinea-pig-pregnancy-calculator" },
      { name: "Mare Gestation Calculator - Horse Gestation", slug: "mare-gestation-calculator" },
      { name: "Llama Calculator", slug: "llama-calculator" },
      { name: "Rabbit Gestation Calculator", slug: "rabbit-gestation-calculator" },
      { name: "Sheep Gestation Calculator", slug: "sheep-gestation-calculator" },
      { name: "Swine Gestation Calculator", slug: "swine-gestation-calculator" }
    ]
  },
  {
    id: "dog",
    title: "Dog calculators 🐕",
    icon: Dog,
    calculators: [
      { name: "Benadryl Dosage Calculator for Dogs", slug: "benadryl-dosage-calculator-dogs" },
      { name: "Cephalexin For Dogs Dosage Calculator", slug: "cephalexin-dosage-calculator-dogs" },
      { name: "Cost of Owning a Dog Calculator", slug: "cost-owning-dog-calculator" },
      { name: "Dog Age Calculator", slug: "dog-age-calculator" },
      { name: "Dog BMI Calculator", slug: "dog-bmi-calculator" },
      { name: "Dog Nutrition Calculator", slug: "dog-nutrition-calculator" },
      { name: "Dog Chocolate Toxicity Calculator", slug: "dog-chocolate-toxicity-calculator" },
      { name: "Dog Crate Size Calculator", slug: "dog-crate-size-calculator" },
      { name: "Dog Food Calculator", slug: "dog-food-calculator" },
      { name: "Dog Harness Size Calculator", slug: "dog-harness-size-calculator" },
      { name: "Dog Heat Cycle Calculator", slug: "dog-heat-cycle-calculator" },
      { name: "Dog Life Expectancy Calculator", slug: "dog-life-expectancy-calculator" },
      { name: "Metacam Dosage Calculator for Dogs", slug: "metacam-dosage-calculator-dogs" },
      { name: "Dog Onion Toxicity Calculator", slug: "dog-onion-toxicity-calculator" },
      { name: "Dog Quality of Life Calculator", slug: "dog-quality-of-life-calculator" },
      { name: "Dog Raisin Toxicity Calculator", slug: "dog-raisin-toxicity-calculator" },
      { name: "Dog Size Calculator", slug: "dog-size-calculator" },
      { name: "Dog Water Intake Calculator", slug: "dog-water-intake-calculator" },
      { name: "Omega-3 For Dogs Calculator", slug: "omega-3-for-dogs-calculator" },
      { name: "Quiz: Dog Size Calculator", slug: "quiz-dog-size-calculator" },
      { name: "Raw Dog Food Calculator", slug: "raw-dog-food-calculator" },
      { name: "Tramadol For Dogs Calculator", slug: "tramadol-for-dogs-calculator" }
    ]
  },
  {
    id: "cat",
    title: "Cat calculators 🐈",
    icon: Cat,
    calculators: [
      { name: "Cat Age Calculator", slug: "cat-age-calculator" },
      { name: "Cat Benadryl Dosage Calculator", slug: "cat-benadryl-dosage-calculator" },
      { name: "Cat BMI Calculator", slug: "cat-bmi-calculator" },
      { name: "Cat Calorie Calculator", slug: "cat-calorie-calculator" },
      { name: "Cat Chocolate Toxicity Calculator", slug: "cat-chocolate-toxicity-calculator" },
      { name: "Catculator", slug: "catculator" },
      { name: "Cat Quality of Life Calculator", slug: "cat-quality-of-life-calculator" },
      { name: "Cephalexin For Cats Dosage Calculator", slug: "cephalexin-dosage-calculator-cats" },
      { name: "Fish Oil Dosage Calculator For Cats", slug: "fish-oil-dosage-calculator-for-cats" },
      { name: "How Big Will My Cat Get Calculator 🐱", slug: "how-big-will-my-cat-get-calculator" },
      { name: "Metacam Dosage Calculator for Cats", slug: "metacam-dosage-calculator-cats" },
      { name: "Quiz: Cat Age Calculator", slug: "quiz-cat-age-calculator" }
    ]
  },
  {
    id: "other-animals",
    title: "Other animals calculators 🐢",
    icon: Bird,
    calculators: [
      { name: "Bird Age Calculator", slug: "bird-age-calculator" },
      { name: "Crickets Chirping Thermometer", slug: "crickets-chirping-thermometer" },
      { name: "Dry Matter Calculator", slug: "dry-matter-calculator" },
      { name: "Guinea Pig Years to Human Years Calculator", slug: "guinea-pig-years-to-human-years" },
      { name: "Hamster Age Calculator", slug: "hamster-age-calculator" },
      { name: "Horse Weight Calculator", slug: "horse-weight-calculator" },
      { name: "Rabbit Cage Size Calculator", slug: "rabbit-cage-size-calculator" },
      { name: "Rabbit Color Calculator", slug: "rabbit-color-calculator" },
      { name: "Rat Cage Calculator", slug: "rat-cage-calculator" },
      { name: "Turtle Tank Size Calculator", slug: "turtle-tank-size-calculator" }
    ]
  },
  {
    id: "livestock",
    title: "Livestock calculators 🐄",
    icon: Beef,
    calculators: [
      { name: "Animal Mortality Rate Calculator", slug: "animal-mortality-rate-calculator" },
      { name: "Cattle per Acre Calculator", slug: "cattle-per-acre-calculator" },
      { name: "Feed Conversion Ratio Calculator", slug: "feed-conversion-ratio-calculator" },
      { name: "Grain Bin Calculator", slug: "grain-bin-calculator" },
      { name: "Livestock Fence Cost Calculator", slug: "livestock-fence-cost-calculator" }
    ]
  },
  {
    id: "gardening-crops",
    title: "Gardening and crops calculators 🌼🌾",
    icon: Leaf,
    calculators: [
      { name: "Acres Per Hour Calculator", slug: "acres-per-hour-calculator" },
      { name: "Bulb Spacing Calculator", slug: "bulb-spacing-calculator" },
      { name: "CO₂ Grow Room Calculator", slug: "co2-grow-room-calculator" },
      { name: "Compost Calculator", slug: "compost-calculator" },
      { name: "Corn Yield Calculator", slug: "corn-yield-calculator" },
      { name: "Daily Light Integral Calculator", slug: "daily-light-integral-calculator" },
      { name: "Fertilizer Calculator", slug: "fertilizer-calculator" },
      { name: "GDU Calculator — Growing Degree Units", slug: "gdu-calculator" },
      { name: "Grain Conversion Calculator", slug: "grain-conversion-calculator" },
      { name: "Grass Seed Calculator", slug: "grass-seed-calculator" },
      { name: "Lawn Mowing Cost Calculator", slug: "lawn-mowing-cost-calculator" },
      { name: "Mulch Calculator", slug: "mulch-calculator" },
      { name: "Plant Population Calculator", slug: "plant-population-calculator" },
      { name: "Plant Spacing Calculator", slug: "plant-spacing-calculator" },
      { name: "Potting Soil Calculator", slug: "potting-soil-calculator" },
      { name: "Sod Calculator", slug: "sod-calculator" },
      { name: "Soil Calculator", slug: "soil-calculator" },
      { name: "VPD Calculator (Vapor Pressure Deficit)", slug: "vpd-calculator" },
      { name: "Vegetable Seed Calculator", slug: "vegetable-seed-calculator" },
      { name: "Vegetable Yield Calculator", slug: "vegetable-yield-calculator" },
      { name: "Water Potential Calculator", slug: "water-potential-calculator" },
      { name: "Water Soluble Fertilizer Calculator", slug: "water-soluble-fertilizer-calculator" }
    ]
  },
  {
    id: "trees-forestry",
    title: "Trees & Forestry Calculators 🌳",
    icon: TreePine,
    calculators: [
      { name: "Basal Area Calculator", slug: "basal-area-calculator" },
      { name: "Tree Leaves Calculator", slug: "tree-leaves-calculator" },
      { name: "Tree Age Calculator", slug: "tree-age-calculator" },
      { name: "Tree Diameter Calculator", slug: "tree-diameter-calculator" },
      { name: "Tree Height Calculator", slug: "tree-height-calculator" },
      { name: "Tree Spacing Calculator", slug: "tree-spacing-calculator" },
      { name: "Tree Value Calculator", slug: "tree-value-calculator" }
    ]
  },
  {
    id: "other",
    title: "Other calculators",
    icon: Globe,
    calculators: [
      { name: "MLVSS Calculator", slug: "mlvss-calculator" },
      { name: "Pet Sitter Rates Calculator", slug: "pet-sitter-rates-calculator" },
      { name: "Protein Molecular Weight Calculator", slug: "protein-molecular-weight-calculator" },
      { name: "Wastewater Calculator", slug: "wastewater-calculator" }
    ]
  }
];
