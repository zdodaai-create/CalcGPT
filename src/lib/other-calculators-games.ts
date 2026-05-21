import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_GAMES: CalculatorConfig[] = [
  {
    id: "impostor-odds-among-us", name: "Impostor Odds Calculator – Among Us", description: "Calculate the probability of being the impostor.",
    category: "other", subcategory: "video-games",
    scientificFormula: "P = \\frac{\\text{Impostors}}{\\text{Total Players}}",
    inputs: [
      { id: "imp", label: "Number of Impostors", type: "number", defaultValue: 2 },
      { id: "ply", label: "Total Players", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "odds", label: "Probability per Game", formula: "(imp / ply) * 100", unit: "%" },
      { id: "x", label: "Odds (1 in X)", formula: "ply / imp", unit: "" }
    ],
    theory: "Probability is simply the number of available impostor slots divided by the total number of players in the lobby.",
    faq: [],
    seoMeta: { title: "Among Us Impostor Odds Calculator", description: "Calculate your chance of being the impostor.", keywords: "among us impostor odds" }
  },
  {
    id: "kd-calculator", name: "KD Calculator (Kill/Death Ratio)", description: "Calculate your Kill/Death ratio for FPS games.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\text{K/D} = \\frac{\\text{Kills}}{\\text{Deaths}}",
    inputs: [
      { id: "k", label: "Total Kills", type: "number", defaultValue: 1520 },
      { id: "d", label: "Total Deaths", type: "number", defaultValue: 1200 }
    ],
    outputs: [
      { id: "kd", label: "K/D Ratio", formula: "k / d", unit: "" }
    ],
    theory: "A K/D ratio over 1.0 means you have more kills than deaths.",
    faq: [],
    seoMeta: { title: "KD Calculator", description: "Calculate kill death ratio.", keywords: "kd calculator, kill death ratio" }
  },
  {
    id: "minecraft-circle-generator", name: "Minecraft Circle Generator", description: "Calculate block diameter for a circle.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\text{Blocks} \\approx \\pi \\times d",
    inputs: [
      { id: "d", label: "Diameter (Blocks)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "circ", label: "Approximate Circumference (Blocks)", formula: "d * 3.14159", unit: "blocks" },
      { id: "area", label: "Internal Area", formula: "3.14159 * ((d/2)^2)", unit: "blocks²" }
    ],
    theory: "While actual block placement requires voxel-rasterization (like Bresenham's algorithm), basic properties still follow geometric rules.",
    faq: [],
    seoMeta: { title: "Minecraft Circle Generator", description: "Calculate Minecraft circles.", keywords: "minecraft circle generator" }
  },
  {
    id: "minecraft-stack-calculator", name: "Minecraft Stack Calculator", description: "Convert total items into stacks of 64.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\text{Stacks} = \\left\\lfloor \\frac{\\text{Items}}{64} \\right\\rfloor",
    inputs: [
      { id: "i", label: "Total Items", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "stk", label: "Full Stacks (64)", formula: "floor(i / 64)", unit: "stacks" },
      { id: "rem", label: "Remainder Items", formula: "i % 64", unit: "items" },
      { id: "chest", label: "Chests Needed (27 slots)", formula: "ceil((i / 64) / 27)", unit: "chests" }
    ],
    theory: "Standard items in Minecraft stack to 64. A single chest holds 27 stacks.",
    faq: [],
    seoMeta: { title: "Minecraft Stack Calculator", description: "Convert items to stacks.", keywords: "minecraft stack calculator" }
  },
  {
    id: "nether-portal-calculator", name: "Nether Portal Calculator", description: "Convert coordinates between Overworld and Nether.",
    category: "other", subcategory: "video-games",
    scientificFormula: "X_{\\text{nether}} = \\frac{X_{\\text{overworld}}}{8}",
    inputs: [
      { id: "x", label: "Overworld X", type: "number", defaultValue: 800 },
      { id: "z", label: "Overworld Z", type: "number", defaultValue: -400 }
    ],
    outputs: [
      { id: "nx", label: "Nether X", formula: "x / 8", unit: "" },
      { id: "nz", label: "Nether Z", formula: "z / 8", unit: "" }
    ],
    theory: "Distance in the Nether is compressed by a factor of 8 horizontally. The Y axis (height) is 1:1.",
    faq: [],
    seoMeta: { title: "Nether Portal Calculator", description: "Convert Minecraft coordinates.", keywords: "nether portal calculator" }
  },
  {
    id: "pokemon-go-candy-calculator", name: "Pokémon Go Candy Calculator", description: "Calculate evolutions possible with candy.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\text{Evolutions} = \\left\\lfloor \\frac{C}{E - 1} \\right\\rfloor",
    inputs: [
      { id: "c", label: "Total Candies", type: "number", defaultValue: 150 },
      { id: "e", label: "Candy Cost per Evolution", type: "number", defaultValue: 12 },
      { id: "p", label: "Pokemon Available to Evolve", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "max", label: "Max Possible Evolutions (Infinite Pokemon)", formula: "floor(c / (e - 1))", unit: "" },
      { id: "act", label: "Actual Evolutions", formula: "min(p, floor(c / (e - 1)))", unit: "" }
    ],
    theory: "Each evolution consumes E candies but refunds 1 candy, making the effective cost (E - 1) for consecutive evolutions.",
    faq: [],
    seoMeta: { title: "Pokemon Go Candy Calculator", description: "Calculate Pokemon Go evolutions.", keywords: "pidgey calc, pokemon go candy" }
  },
  {
    id: "pyramid-block-calculator", name: "Pyramid Block Calculator", description: "Calculate total blocks needed for a square pyramid.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}",
    inputs: [
      { id: "b", label: "Base Width (Blocks)", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "tot", label: "Total Blocks Needed", formula: "(ceil(b/2) * (ceil(b/2) + 1) * (2*ceil(b/2) + 1)) / 6", unit: "blocks" }
    ],
    theory: "A solid square pyramid is a sum of squares sequence. If building hollow, it's significantly less.",
    faq: [],
    seoMeta: { title: "Pyramid Block Calculator", description: "Calculate Minecraft pyramid blocks.", keywords: "pyramid block calculator" }
  },
  {
    id: "rust-decay-calculator", name: "Rust Decay Calculator", description: "Calculate time until a base decays in Rust.",
    category: "other", subcategory: "video-games",
    scientificFormula: "\\text{Time} = \\frac{\\text{Stored Upkeep}}{\\text{Daily Cost}} \\times 24",
    inputs: [
      { id: "st", label: "Stone in TC", type: "number", defaultValue: 5000 },
      { id: "cost", label: "Daily Stone Upkeep", type: "number", defaultValue: 1200 }
    ],
    outputs: [
      { id: "hrs", label: "Time until Decay Starts", formula: "(st / cost) * 24", unit: "hours" },
      { id: "days", label: "Days", formula: "st / cost", unit: "days" }
    ],
    theory: "Tool cupboards consume resources continuously at a constant daily rate.",
    faq: [],
    seoMeta: { title: "Rust Decay Calculator", description: "Calculate Rust upkeep and decay.", keywords: "rust decay calculator" }
  }
];
