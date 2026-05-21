import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_LOGISTICS: CalculatorConfig[] = [
  {
    id: "cbm-calculator-shipping", name: "CBM Calculator for Shipping", description: "Calculate Cubic Meters (CBM) for a shipment.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{CBM} = L \\times W \\times H \\times \\text{Quantity}",
    inputs: [
      { id: "l", label: "Length (m)", type: "number", defaultValue: 1.2 },
      { id: "w", label: "Width (m)", type: "number", defaultValue: 0.8 },
      { id: "h", label: "Height (m)", type: "number", defaultValue: 1.0 },
      { id: "qty", label: "Quantity", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "cbm", label: "Total CBM", formula: "(l * w * h) * qty", unit: "m³" }
    ],
    theory: "CBM (Cubic Meter) is the primary unit of volume used in international freight to determine shipping rates.",
    faq: [],
    seoMeta: { title: "CBM Calculator", description: "Calculate Cubic Meters for shipping.", keywords: "cbm calculator, shipping volume" }
  },
  {
    id: "container-loading-calculator", name: "Container Loading Calculator", description: "Estimate how many boxes fit in a shipping container.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{Max Boxes} \\approx \\frac{\\text{Container Volume}}{\\text{Box Volume}} \\times 0.9",
    inputs: [
      { id: "cv", label: "Container Volume (CBM) [e.g. 20ft = 33]", type: "number", defaultValue: 33 },
      { id: "bv", label: "Box Volume (CBM)", type: "number", defaultValue: 0.12 }
    ],
    outputs: [
      { id: "boxes", label: "Estimated Max Boxes", formula: "floor((cv / bv) * 0.9)", unit: "boxes" }
    ],
    theory: "True container loading is a 3D packing problem, but for estimations, dividing volumes and applying a 10% empty-space penalty yields a rough approximation.",
    faq: [],
    seoMeta: { title: "Container Loading Calculator", description: "Estimate shipping container capacity.", keywords: "container loading calculator" }
  },
  {
    id: "dimensional-weight-calculator", name: "Dimensional Weight Calculator", description: "Calculate DIM weight for couriers like UPS or FedEx.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{DIM Weight} = \\frac{L \\times W \\times H}{\\text{DIM Factor}}",
    inputs: [
      { id: "l", label: "Length (inches)", type: "number", defaultValue: 20 },
      { id: "w", label: "Width (inches)", type: "number", defaultValue: 20 },
      { id: "h", label: "Height (inches)", type: "number", defaultValue: 10 },
      { id: "f", label: "DIM Factor (e.g., 139 for UPS)", type: "number", defaultValue: 139 },
      { id: "actual", label: "Actual Weight (lbs)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "dim", label: "Dimensional Weight", formula: "(l * w * h) / f", unit: "lbs" },
      { id: "bill", label: "Billable Weight", formula: "max((l * w * h) / f, actual)", unit: "lbs" }
    ],
    theory: "Couriers charge based on either the actual weight or the dimensional weight—whichever is greater.",
    faq: [],
    seoMeta: { title: "Dimensional Weight Calculator", description: "Calculate DIM weight for shipping.", keywords: "dimensional weight calculator" }
  },
  {
    id: "dpmo-calculator", name: "DPMO Calculator", description: "Calculate Defects Per Million Opportunities.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{DPMO} = \\frac{\\text{Defects}}{\\text{Units} \\times \\text{Opportunities}} \\times 1,000,000",
    inputs: [
      { id: "d", label: "Total Defects Found", type: "number", defaultValue: 15 },
      { id: "u", label: "Total Units Sampled", type: "number", defaultValue: 500 },
      { id: "o", label: "Opportunities per Unit", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "dpmo", label: "DPMO", formula: "(d / (u * o)) * 1000000", unit: "" }
    ],
    theory: "DPMO is a key metric in Six Sigma for measuring process performance.",
    faq: [],
    seoMeta: { title: "DPMO Calculator", description: "Calculate defects per million opportunities.", keywords: "dpmo calculator" }
  },
  {
    id: "freight-class-calculator", name: "Freight Class Calculator", description: "Determine LTL freight class based on density.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{Density} = \\frac{\\text{Weight}}{\\text{Volume}}",
    inputs: [
      { id: "w", label: "Total Weight (lbs)", type: "number", defaultValue: 500 },
      { id: "l", label: "Length (inches)", type: "number", defaultValue: 48 },
      { id: "wid", label: "Width (inches)", type: "number", defaultValue: 40 },
      { id: "h", label: "Height (inches)", type: "number", defaultValue: 48 }
    ],
    outputs: [
      { id: "pcf", label: "Density (PCF)", formula: "w / ((l * wid * h) / 1728)", unit: "lbs/cu ft" }
    ],
    theory: "While NMFC freight classes consider stowability and liability, the primary factor for NMFC estimation is density (Pounds per Cubic Foot).",
    faq: [],
    seoMeta: { title: "Freight Class Calculator", description: "Calculate LTL freight density.", keywords: "freight class calculator, pcf calculator" }
  },
  {
    id: "pallet-calculator", name: "Pallet Calculator", description: "Calculate how many boxes fit on a standard pallet.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{Ti-Hi} = \\text{Boxes per Layer (Ti)} \\times \\text{Layers (Hi)}",
    inputs: [
      { id: "ti", label: "Boxes per Layer (Ti)", type: "number", defaultValue: 10 },
      { id: "hi", label: "Number of Layers (Hi)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total", label: "Total Boxes per Pallet", formula: "ti * hi", unit: "boxes" }
    ],
    theory: "Pallet capacities are frequently referred to by their 'Ti-Hi' configuration (Tier x Height).",
    faq: [],
    seoMeta: { title: "Pallet Ti-Hi Calculator", description: "Calculate total boxes on a pallet.", keywords: "pallet calculator, ti-hi calculator" }
  },
  {
    id: "reorder-point-calculator", name: "Reorder Point Calculator", description: "Calculate when to order more inventory.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{Reorder Point} = (\\text{Daily Usage} \\times \\text{Lead Time}) + \\text{Safety Stock}",
    inputs: [
      { id: "d", label: "Average Daily Usage", type: "number", defaultValue: 20 },
      { id: "lt", label: "Lead Time (Days)", type: "number", defaultValue: 14 },
      { id: "ss", label: "Safety Stock", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "rop", label: "Reorder Point", formula: "(d * lt) + ss", unit: "units" }
    ],
    theory: "The reorder point ensures you have enough inventory to cover the time it takes for a new shipment to arrive, plus a buffer.",
    faq: [],
    seoMeta: { title: "Reorder Point Calculator", description: "Calculate inventory reorder point.", keywords: "reorder point calculator" }
  },
  {
    id: "takt-time-calculator", name: "Takt Time Calculator", description: "Calculate required production pace to meet customer demand.",
    category: "other", subcategory: "logistics",
    scientificFormula: "\\text{Takt Time} = \\frac{\\text{Available Production Time}}{\\text{Customer Demand}}",
    inputs: [
      { id: "t", label: "Available Time (Minutes per Shift)", type: "number", defaultValue: 420 },
      { id: "d", label: "Customer Demand (Units per Shift)", type: "number", defaultValue: 210 }
    ],
    outputs: [
      { id: "takt", label: "Takt Time", formula: "t / d", unit: "min/unit" }
    ],
    theory: "Takt time is the ideal rhythm of production to exactly match customer demand without creating excess inventory.",
    faq: [],
    seoMeta: { title: "Takt Time Calculator", description: "Calculate manufacturing takt time.", keywords: "takt time calculator" }
  }
];
