import { CalculatorConfig } from "./calculator-types";

export const CONSTRUCTION_CALCULATORS: CalculatorConfig[] = [
  // CONSTRUCTION CONVERTERS
  {
    id: "board-foot-calculator",
    name: "Board Foot Calculator",
    description: "Calculate the volume of lumber in board feet for woodworking and construction.",
    category: "construction",
    subcategory: "construction-converters",
    scientificFormula: "Board\\ Feet = \\frac{T \\times W \\times L}{12}",
    inputs: [
      { id: "thickness", label: "Thickness", type: "number", defaultValue: 1, unit: "in", unitOptions: [{ label: "in", value: "in", factor: 1 }, { label: "cm", value: "cm", factor: 0.3937 }] },
      { id: "width", label: "Width", type: "number", defaultValue: 6, unit: "in", unitOptions: [{ label: "in", value: "in", factor: 1 }, { label: "cm", value: "cm", factor: 0.3937 }] },
      { id: "length", label: "Length", type: "number", defaultValue: 8, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }] }
    ],
    outputs: [{ id: "board_feet", label: "Board Feet", formula: "(thickness * width * length) / 12", unit: "fbm" }],
    theory: "A board foot is a specialized unit of measure for the volume of lumber in the United States and Canada. It is the volume of a one-foot length of a board, one foot wide and one inch thick.",
    derivation: "Since 1 board foot = 144 cubic inches (12\" x 12\" x 1\"), the formula converts thickness and width (in inches) and length (in feet) into total cubic inches and divides by 12 (to account for the foot in length).",
    applications: ["Woodworking material estimation", "Lumber pricing", "Inventory management"],
    resultInterpretation: "A total of {board_feet} board feet means you have {board_feet} units of 12\"x12\"x1\" equivalent volume of wood.",
    seoMeta: { title: "Board Foot Calculator | Lumber Volume Tool", description: "Calculate board feet for lumber quickly with our woodworking calculator. Supports imperial and metric inputs.", keywords: "board feet, lumber volume, woodworking calculator" }
  },
  {
    id: "cubic-yard-calculator",
    name: "Cubic Yard Calculator",
    description: "Calculate volume in cubic yards for concrete, gravel, and soil.",
    category: "construction",
    subcategory: "construction-converters",
    scientificFormula: "Cubic\\ Yards = \\frac{L \\times W \\times H}{27}",
    inputs: [
      { id: "length", label: "Length", type: "number", defaultValue: 10, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }, { label: "in", value: "in", factor: 0.0833 }] },
      { id: "width", label: "Width", type: "number", defaultValue: 10, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }, { label: "in", value: "in", factor: 0.0833 }] },
      { id: "height", label: "Height/Depth", type: "number", defaultValue: 1, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "in", value: "in", factor: 0.0833 }, { label: "cm", value: "cm", factor: 0.0328 }] }
    ],
    outputs: [{ id: "cubic_yards", label: "Cubic Yards", formula: "(length * width * height) / 27", unit: "yd³" }],
    theory: "Cubic yards are the standard unit of volume in the US construction industry for bulk materials like concrete, mulch, and soil.",
    resultInterpretation: "You need approximately {cubic_yards} cubic yards of material to fill this space."
  },
  {
    id: "square-footage-calculator",
    name: "Square Footage Calculator",
    description: "Calculate the area of a space in square feet.",
    category: "construction",
    subcategory: "construction-converters",
    scientificFormula: "Area = L \\times W",
    inputs: [
      { id: "length", label: "Length", type: "number", defaultValue: 10, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }, { label: "in", value: "in", factor: 1/12 }] },
      { id: "width", label: "Width", type: "number", defaultValue: 10, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }, { label: "in", value: "in", factor: 1/12 }] }
    ],
    outputs: [{ id: "sq_ft", label: "Square Footage", formula: "length * width", unit: "sq ft" }]
  },

  // MATERIALS ESTIMATION
  {
    id: "brick-calculator",
    name: "Brick Calculator",
    description: "Estimate the number of bricks and amount of mortar needed for a wall.",
    category: "construction",
    subcategory: "construction-materials",
    scientificFormula: "Bricks = \\frac{Wall\\ Area}{Brick\\ Area}",
    inputs: [
      { id: "w_height", label: "Wall Height", type: "number", defaultValue: 8, unit: "ft" },
      { id: "w_width", label: "Wall Width", type: "number", defaultValue: 20, unit: "ft" },
      { id: "b_height", label: "Brick Height", type: "number", defaultValue: 2.25, unit: "in" },
      { id: "b_width", label: "Brick Width", type: "number", defaultValue: 8, unit: "in" },
      { id: "m_joint", label: "Mortar Joint", type: "number", defaultValue: 0.5, unit: "in" },
      { id: "cost_per_brick", label: "Cost per Brick", type: "number", defaultValue: 0.50, unit: "$" },
      { id: "waste", label: "Wastage", type: "number", defaultValue: 5, unit: "%" }
    ],
    outputs: [
      { id: "bricks", label: "Required Bricks", formula: "ceil(((w_height * 12 * w_width * 12) / ((b_height + m_joint) * (b_width + m_joint))) * (1 + waste / 100))", unit: "bricks" },
      { id: "total_cost", label: "Estimated Material Cost", formula: "ceil(((w_height * 12 * w_width * 12) / ((b_height + m_joint) * (b_width + m_joint))) * (1 + waste / 100)) * cost_per_brick", unit: "$" }
    ],
    theory: "Brick calculation involves finding the total area of the wall and dividing it by the area of a single brick plus its surrounding mortar joint.",
    commonMistakes: ["Forgetting to include the mortar joint thickness in calculations.", "Not accounting for wastage (broken bricks, corner cuts)."],
    resultInterpretation: "To build this wall, you will need approximately {bricks} bricks, including a {waste}% buffer for cuts and breakage."
  },
  {
    id: "drywall-calculator",
    name: "Drywall Calculator",
    description: "Estimate the number of drywall sheets needed for a room.",
    category: "construction",
    subcategory: "construction-materials",
    scientificFormula: "Sheets = \\frac{Wall\\ Area}{Sheet\\ Area}",
    inputs: [
      { id: "l", label: "Room Length", type: "number", defaultValue: 12, unit: "ft" },
      { id: "w", label: "Room Width", type: "number", defaultValue: 12, unit: "ft" },
      { id: "h", label: "Ceiling Height", type: "number", defaultValue: 8, unit: "ft" },
      { id: "sheet_size", label: "Sheet Size", type: "select", options: [{ label: "4' x 8'", value: 32 }, { label: "4' x 10'", value: 40 }, { label: "4' x 12'", value: 48 }], defaultValue: 32 }
    ],
    outputs: [
      { id: "area", label: "Total Wall Area", formula: "2 * h * (l + w)", unit: "sq ft" },
      { id: "sheets", label: "Number of Sheets", formula: "ceil((2 * h * (l + w)) / sheet_size)", unit: "sheets" }
    ]
  },
  {
    id: "gravel-calculator",
    name: "Gravel Calculator",
    description: "Calculate the volume and weight of gravel needed for a driveway or path.",
    category: "construction",
    subcategory: "construction-materials",
    scientificFormula: "Weight = Volume \\times Density",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 20, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }] },
      { id: "w", label: "Width", type: "number", defaultValue: 10, unit: "ft", unitOptions: [{ label: "ft", value: "ft", factor: 1 }, { label: "m", value: "m", factor: 3.2808 }] },
      { id: "d", label: "Depth", type: "number", defaultValue: 4, unit: "in", unitOptions: [{ label: "in", value: "in", factor: 1 }, { label: "cm", value: "cm", factor: 0.3937 }] },
      { id: "density", label: "Density (lb/ft³)", type: "number", defaultValue: 105, unit: "lb/ft³" }
    ],
    outputs: [
      { id: "volume", label: "Volume", formula: "(l * w * d/12) / 27", unit: "yd³" },
      { id: "tons", label: "Total Weight", formula: "(l * w * d/12 * density) / 2000", unit: "tons" }
    ]
  },
  {
    id: "lumber-calculator",
    name: "Lumber Calculator",
    description: "Calculate the total volume and quantity of lumber.",
    category: "construction",
    subcategory: "construction-materials",
    inputs: [
      { id: "t", label: "Thickness", type: "number", defaultValue: 2, unit: "in" },
      { id: "w", label: "Width", type: "number", defaultValue: 4, unit: "in" },
      { id: "l", label: "Length", type: "number", defaultValue: 8, unit: "ft" },
      { id: "qty", label: "Quantity", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "bf", label: "Total Board Feet", formula: "(t * w * l / 12) * qty", unit: "fbm" }
    ]
  },
  {
    id: "pipe-weight-calculator",
    name: "Pipe Weight Calculator",
    description: "Calculate the weight of a pipe based on dimensions and material.",
    category: "construction",
    subcategory: "construction-materials",
    scientificFormula: "W = \\pi(D - t)tL\\rho",
    inputs: [
      { id: "od", label: "Outer Diameter", type: "number", defaultValue: 4, unit: "in" },
      { id: "t", label: "Wall Thickness", type: "number", defaultValue: 0.25, unit: "in" },
      { id: "l", label: "Length", type: "number", defaultValue: 20, unit: "ft" },
      { id: "density", label: "Density (lb/in³)", type: "number", defaultValue: 0.284, unit: "lb/in³" }
    ],
    outputs: [
      { id: "weight", label: "Total Weight", formula: "3.14159 * (od - t) * t * l * 12 * density", unit: "lb" }
    ]
  },
  {
    id: "rebar-calculator",
    name: "Rebar Calculator",
    description: "Calculate the total weight of rebar for reinforcement.",
    category: "construction",
    subcategory: "construction-materials",
    scientificFormula: "W = \\frac{D^2}{162} \\times L",
    inputs: [
      { id: "size", label: "Rebar Size (#)", type: "select", options: [{ label: "#3 (3/8\")", value: 0.375 }, { label: "#4 (1/2\")", value: 0.5 }, { label: "#5 (5/8\")", value: 0.625 }, { label: "#6 (3/4\")", value: 0.75 }], defaultValue: 0.5 },
      { id: "l", label: "Total Length", type: "number", defaultValue: 100, unit: "ft" }
    ],
    outputs: [
      { id: "weight", label: "Total Weight", formula: "l * (size^2 * 3.4)", unit: "lb" }
    ]
  },
  {
    id: "tile-calculator",
    name: "Tile Calculator",
    description: "Calculate the number of tiles needed for a floor or wall.",
    category: "construction",
    subcategory: "construction-materials",
    inputs: [
      { id: "f_l", label: "Floor Length", type: "number", defaultValue: 10, unit: "ft" },
      { id: "f_w", label: "Floor Width", type: "number", defaultValue: 10, unit: "ft" },
      { id: "t_l", label: "Tile Length", type: "number", defaultValue: 12, unit: "in" },
      { id: "t_w", label: "Tile Width", type: "number", defaultValue: 12, unit: "in" },
      { id: "waste", label: "Wastage", type: "number", defaultValue: 10, unit: "%" }
    ],
    outputs: [
      { id: "tiles", label: "Number of Tiles", formula: "ceil(((f_l * 12 * f_w * 12) / (t_l * t_w)) * (1 + waste / 100))", unit: "tiles" }
    ]
  },
  {
    id: "steel-weight-calculator",
    name: "Steel Weight Calculator",
    description: "Calculate the weight of steel plates or sections.",
    category: "construction",
    subcategory: "construction-materials",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 10, unit: "ft" },
      { id: "w", label: "Width", type: "number", defaultValue: 4, unit: "ft" },
      { id: "t", label: "Thickness", type: "number", defaultValue: 0.25, unit: "in" },
      { id: "density", label: "Density (lb/ft³)", type: "number", defaultValue: 490, unit: "lb/ft³" }
    ],
    outputs: [
      { id: "weight", label: "Total Weight", formula: "l * w * (t/12) * density", unit: "lb" }
    ]
  },

  // CEMENT & CONCRETE
  {
    id: "cement-calculator",
    name: "Cement Calculator",
    description: "Calculate bags of cement needed for a specific volume of concrete.",
    category: "construction",
    subcategory: "cement-concrete",
    inputs: [
      { id: "v", label: "Total Concrete Volume", type: "number", defaultValue: 1, unit: "yd³" },
      { id: "bags_per_yd", label: "Bags per Cubic Yard", type: "number", defaultValue: 6, unit: "bags" }
    ],
    outputs: [
      { id: "bags", label: "Total Cement Bags", formula: "v * bags_per_yd", unit: "bags" }
    ]
  },
  {
    id: "concrete-calculator",
    name: "Concrete Calculator",
    description: "Calculate concrete volume for slabs, footings, and columns.",
    category: "construction",
    subcategory: "cement-concrete",
    scientificFormula: "V = L \\times W \\times D",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 10, unit: "ft" },
      { id: "w", label: "Width", type: "number", defaultValue: 10, unit: "ft" },
      { id: "d", label: "Thickness/Depth", type: "number", defaultValue: 4, unit: "in" },
      { id: "cost_per_yd", label: "Cost per Cubic Yard", type: "number", defaultValue: 125, unit: "$/yd³" }
    ],
    outputs: [
      { id: "cubic_yards", label: "Volume (Cubic Yards)", formula: "(l * w * d/12) / 27", unit: "yd³" },
      { id: "total_cost", label: "Total Concrete Cost", formula: "((l * w * d/12) / 27) * cost_per_yd", unit: "$" },
      { id: "bags_80", label: "80lb Bags Needed", formula: "ceil(((l * w * d/12)) / 0.6)", unit: "bags" }
    ]
  },
  {
    id: "concrete-block-calculator",
    name: "Concrete Block Calculator",
    description: "Estimate the number of concrete blocks (CMUs) for a wall.",
    category: "construction",
    subcategory: "cement-concrete",
    inputs: [
      { id: "w_h", label: "Wall Height", type: "number", defaultValue: 8, unit: "ft" },
      { id: "w_l", label: "Wall Length", type: "number", defaultValue: 20, unit: "ft" },
      { id: "b_type", label: "Block Size", type: "select", options: [{ label: "8\"x8\"x16\"", value: 0.888 }, { label: "8\"x4\"x16\"", value: 0.444 }], defaultValue: 0.888 }
    ],
    outputs: [
      { id: "blocks", label: "Total Blocks", formula: "ceil((w_h * w_l) / b_type)", unit: "blocks" }
    ]
  },
  {
    id: "mortar-calculator",
    name: "Mortar Calculator",
    description: "Estimate mortar volume for brickwork.",
    category: "construction",
    subcategory: "cement-concrete",
    inputs: [
      { id: "v", label: "Total Brickwork Volume", type: "number", defaultValue: 100, unit: "ft³" }
    ],
    outputs: [
      { id: "mortar", label: "Mortar Volume", formula: "v * 0.3", unit: "ft³" }
    ]
  },

  // HOME & GARDEN
  {
    id: "paint-calculator",
    name: "Paint Calculator",
    description: "Calculate how much paint you need for your walls.",
    category: "construction",
    subcategory: "home-garden",
    inputs: [
      { id: "h", label: "Wall Height", type: "number", defaultValue: 8, unit: "ft" },
      { id: "w", label: "Total Wall Width", type: "number", defaultValue: 50, unit: "ft" },
      { id: "coats", label: "Number of Coats", type: "number", defaultValue: 2 },
      { id: "coverage", label: "Coverage (sq ft/gal)", type: "number", defaultValue: 350, unit: "sq ft/gal" },
      { id: "price_per_gal", label: "Price per Gallon", type: "number", defaultValue: 45, unit: "$" }
    ],
    outputs: [
      { id: "gallons", label: "Paint Needed", formula: "ceil((h * w * coats) / coverage)", unit: "gallons" },
      { id: "total_cost", label: "Total Paint Cost", formula: "ceil((h * w * coats) / coverage) * price_per_gal", unit: "$" }
    ]
  },
  {
    id: "fence-calculator",
    name: "Fence Calculator",
    description: "Calculate materials for a new fence.",
    category: "construction",
    subcategory: "home-garden",
    inputs: [
      { id: "p", label: "Total Perimeter", type: "number", defaultValue: 100, unit: "ft" },
      { id: "spacing", label: "Post Spacing", type: "number", defaultValue: 8, unit: "ft" }
    ],
    outputs: [
      { id: "posts", label: "Number of Posts", formula: "ceil(p / spacing) + 1", unit: "posts" },
      { id: "sections", label: "Fence Sections", formula: "ceil(p / spacing)", unit: "sections" }
    ]
  },
  {
    id: "flooring-calculator",
    name: "Flooring Calculator",
    description: "Calculate flooring area and material needs.",
    category: "construction",
    subcategory: "home-garden",
    inputs: [
      { id: "l", label: "Room Length", type: "number", defaultValue: 15, unit: "ft" },
      { id: "w", label: "Room Width", type: "number", defaultValue: 12, unit: "ft" },
      { id: "waste", label: "Wastage", type: "number", defaultValue: 10, unit: "%" }
    ],
    outputs: [
      { id: "area", label: "Total Area", formula: "l * w * (1 + waste/100)", unit: "sq ft" }
    ]
  },
  {
    id: "ladder-angle-calculator",
    name: "Ladder Angle Calculator",
    description: "Calculate the safe angle and base distance for a ladder.",
    category: "construction",
    subcategory: "home-garden",
    scientificFormula: "\\theta = \\tan^{-1}(H/B)",
    inputs: [
      { id: "h", label: "Ladder Height (Top support)", type: "number", defaultValue: 12, unit: "ft" },
      { id: "b", label: "Base Distance from Wall", type: "number", defaultValue: 3, unit: "ft" }
    ],
    outputs: [
      { id: "angle", label: "Ladder Angle", formula: "atan(h / b) * (180 / 3.14159)", unit: "°" },
      { id: "length", label: "Required Ladder Length", formula: "sqrt(h^2 + b^2)", unit: "ft" }
    ],
    theory: "For safety, the base of a ladder should be 1 foot away from the wall for every 4 feet of height (the 4-to-1 rule). This creates an angle of approximately 75.5 degrees.",
    resultInterpretation: "A safe angle is around 75°. If your angle is too steep or too shallow, adjust the base distance."
  },
  {
    id: "ramp-calculator",
    name: "Ramp Calculator",
    description: "Calculate ramp length and slope for ADA compliance.",
    category: "construction",
    subcategory: "home-garden",
    scientificFormula: "Slope = Rise / Run",
    inputs: [
      { id: "rise", label: "Total Rise (Inches)", type: "number", defaultValue: 12, unit: "in" },
      { id: "ratio", label: "Run-to-Rise Ratio (e.g., 12 for 1:12)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "run", label: "Required Run", formula: "rise * ratio", unit: "in" },
      { id: "run_ft", label: "Run in Feet", formula: "(rise * ratio) / 12", unit: "ft" }
    ],
    theory: "ADA guidelines for public access require a maximum slope of 1:12 (1 inch of rise for every 12 inches of run)."
  },
  {
    id: "stair-calculator",
    name: "Stair Calculator",
    description: "Calculate the number of steps and dimensions for a staircase.",
    category: "construction",
    subcategory: "home-garden",
    scientificFormula: "Steps = \\frac{Total\\ Rise}{Riser\\ Height}",
    inputs: [
      { id: "rise", label: "Total Rise", type: "number", defaultValue: 100, unit: "in" },
      { id: "target_riser", label: "Target Riser Height", type: "number", defaultValue: 7, unit: "in" }
    ],
    outputs: [
      { id: "steps", label: "Number of Steps", formula: "ceil(rise / target_riser)", unit: "steps" },
      { id: "act_riser", label: "Actual Riser Height", formula: "rise / ceil(rise / target_riser)", unit: "in" }
    ]
  },

  // ROOFING
  {
    id: "roof-pitch-calculator",
    name: "Roof Pitch Calculator",
    description: "Calculate roof pitch from rise and run.",
    category: "construction",
    subcategory: "roofing-asphalt",
    inputs: [
      { id: "rise", label: "Rise", type: "number", defaultValue: 4, unit: "in" },
      { id: "run", label: "Run", type: "number", defaultValue: 12, unit: "in" }
    ],
    outputs: [
      { id: "angle", label: "Roof Angle", formula: "atan(rise / run) * (180 / 3.14159)", unit: "°" },
      { id: "pitch", label: "Pitch Factor", formula: "sqrt(1 + (rise/run)^2)", unit: "" }
    ]
  },
  {
    id: "roofing-calculator",
    name: "Roofing Calculator",
    description: "Estimate roofing material area and quantity.",
    category: "construction",
    subcategory: "roofing-asphalt",
    inputs: [
      { id: "l", label: "Roof Length", type: "number", defaultValue: 30, unit: "ft" },
      { id: "w", label: "Roof Width", type: "number", defaultValue: 20, unit: "ft" },
      { id: "pitch", label: "Pitch Factor (from pitch calc)", type: "number", defaultValue: 1.054 }
    ],
    outputs: [
      { id: "area", label: "Total Roof Area", formula: "l * w * pitch", unit: "sq ft" },
      { id: "squares", label: "Roofing Squares (100 sq ft)", formula: "(l * w * pitch) / 100", unit: "squares" }
    ]
  },
  {
    id: "snow-load-calculator",
    name: "Snow Load Calculator",
    description: "Calculate the pressure exerted by snow on a roof.",
    category: "construction",
    subcategory: "roofing-asphalt",
    scientificFormula: "P = \\rho \\times d",
    inputs: [
      { id: "depth", label: "Snow Depth", type: "number", defaultValue: 12, unit: "in" },
      { id: "density", label: "Snow Type", type: "select", options: [{ label: "Fresh Snow (10 lb/ft³)", value: 10 }, { label: "Settled Snow (20 lb/ft³)", value: 20 }, { label: "Wind-packed (30 lb/ft³)", value: 30 }], defaultValue: 20 }
    ],
    outputs: [
      { id: "load", label: "Roof Load", formula: "(depth / 12) * density", unit: "lb/ft²" }
    ]
  },
  {
    id: "asphalt-calculator",
    name: "Asphalt Calculator",
    description: "Calculate tonnage of asphalt needed for a driveway or road.",
    category: "construction",
    subcategory: "roofing-asphalt",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 50, unit: "ft" },
      { id: "w", label: "Width", type: "number", defaultValue: 10, unit: "ft" },
      { id: "t", label: "Thickness", type: "number", defaultValue: 2, unit: "in" }
    ],
    outputs: [
      { id: "tons", label: "Asphalt Tonnage", formula: "(l * w * t/12 * 145) / 2000", unit: "tons" }
    ]
  },
  {
    id: "gravel-driveway-calculator",
    name: "Gravel Driveway Calculator",
    description: "Calculate gravel volume for a driveway surface.",
    category: "construction",
    subcategory: "roofing-asphalt",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 50, unit: "ft" },
      { id: "w", label: "Width", type: "number", defaultValue: 10, unit: "ft" },
      { id: "d", label: "Depth", type: "number", defaultValue: 4, unit: "in" }
    ],
    outputs: [
      { id: "yards", label: "Cubic Yards", formula: "(l * w * d/12) / 27", unit: "yd³" }
    ]
  },

  // WATER TANKS & VESSELS
  {
    id: "tank-volume-calculator",
    name: "Tank Volume Calculator",
    description: "Calculate the volume of a cylindrical tank.",
    category: "construction",
    subcategory: "engineering-material",
    scientificFormula: "V = \\pi r^2 h",
    inputs: [
      { id: "r", label: "Radius", type: "number", defaultValue: 5, unit: "ft" },
      { id: "h", label: "Height", type: "number", defaultValue: 10, unit: "ft" }
    ],
    outputs: [
      { id: "v_ft", label: "Volume", formula: "3.14159 * r^2 * h", unit: "ft³" },
      { id: "gallons", label: "Gallons", formula: "3.14159 * r^2 * h * 7.48", unit: "gal" }
    ]
  },
  {
    id: "pipe-volume-calculator",
    name: "Pipe Volume Calculator",
    description: "Calculate the volume of liquid inside a pipe.",
    category: "construction",
    subcategory: "engineering-material",
    inputs: [
      { id: "d", label: "Inner Diameter", type: "number", defaultValue: 4, unit: "in" },
      { id: "l", label: "Length", type: "number", defaultValue: 100, unit: "ft" }
    ],
    outputs: [
      { id: "gallons", label: "Total Volume", formula: "3.14159 * (d/2/12)^2 * l * 7.48", unit: "gal" }
    ]
  },

  // MATERIAL SPECIFICATIONS
  {
    id: "beam-deflection-calculator",
    name: "Beam Deflection Calculator",
    description: "Calculate the deflection of a simply supported center-loaded beam.",
    category: "construction",
    subcategory: "engineering-material",
    scientificFormula: "\\delta = \\frac{PL^3}{48EI}",
    inputs: [
      { id: "p", label: "Load (P)", type: "number", defaultValue: 1000, unit: "lb" },
      { id: "l", label: "Length (L)", type: "number", defaultValue: 10, unit: "ft" },
      { id: "e", label: "Elastic Modulus (E)", type: "number", defaultValue: 29000000, unit: "psi" },
      { id: "i", label: "Moment of Inertia (I)", type: "number", defaultValue: 10, unit: "in⁴" }
    ],
    outputs: [
      { id: "delta", label: "Deflection", formula: "(p * (l * 12)^3) / (48 * e * i)", unit: "in" }
    ],
    theory: "Beam deflection is the degree to which a structural element is displaced under a load. It depends on the load, the length of the beam, the material's stiffness (Elastic Modulus), and the beam's cross-sectional shape (Moment of Inertia)."
  },
  {
    id: "beam-load-calculator",
    name: "Beam Load Calculator",
    description: "Calculate total load on a beam.",
    category: "construction",
    subcategory: "engineering-material",
    inputs: [
      { id: "l", label: "Beam Length", type: "number", defaultValue: 10, unit: "ft" },
      { id: "udl", label: "Uniform Load", type: "number", defaultValue: 100, unit: "lb/ft" }
    ],
    outputs: [
      { id: "total", label: "Total Load", formula: "l * udl", unit: "lb" }
    ]
  },
  {
    id: "bolt-torque-calculator",
    name: "Bolt Torque Calculator",
    description: "Calculate the required torque for a bolt.",
    category: "construction",
    subcategory: "engineering-material",
    scientificFormula: "T = K \\times D \\times P",
    inputs: [
      { id: "k", label: "Nut Factor (K)", type: "number", defaultValue: 0.2 },
      { id: "d", label: "Nominal Diameter (D)", type: "number", defaultValue: 0.5, unit: "in" },
      { id: "p", label: "Clamp Load (P)", type: "number", defaultValue: 5000, unit: "lb" }
    ],
    outputs: [
      { id: "torque", label: "Required Torque", formula: "k * d * p / 12", unit: "lb-ft" }
    ]
  },
  {
    id: "welding-calculator",
    name: "Welding Heat Input Calculator",
    description: "Calculate the heat input for a weld.",
    category: "construction",
    subcategory: "engineering-material",
    scientificFormula: "H = \\frac{V \\times I \\times 60}{S \\times 1000}",
    inputs: [
      { id: "v", label: "Voltage (V)", type: "number", defaultValue: 24, unit: "V" },
      { id: "i", label: "Current (I)", type: "number", defaultValue: 200, unit: "A" },
      { id: "s", label: "Travel Speed", type: "number", defaultValue: 10, unit: "in/min" }
    ],
    outputs: [
      { id: "heat", label: "Heat Input", formula: "(v * i * 60) / (s * 1000)", unit: "kJ/in" }
    ]
  },
  {
    id: "angle-cut-calculator",
    name: "Angle Cut Calculator",
    description: "Calculate dimensions for angled cuts.",
    category: "construction",
    subcategory: "engineering-material",
    inputs: [
      { id: "opp", label: "Opposite Side", type: "number", defaultValue: 5 },
      { id: "adj", label: "Adjacent Side", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "angle", label: "Cut Angle", formula: "atan(opp / adj) * (180 / 3.14159)", unit: "°" }
    ]
  },
  {
    id: "elevation-grade-calculator",
    name: "Elevation Grade Calculator",
    description: "Calculate the percent grade of a slope.",
    category: "construction",
    subcategory: "engineering-material",
    inputs: [
      { id: "rise", label: "Total Rise", type: "number", defaultValue: 5, unit: "ft" },
      { id: "run", label: "Total Run", type: "number", defaultValue: 100, unit: "ft" }
    ],
    outputs: [
      { id: "grade", label: "Percent Grade", formula: "(rise / run) * 100", unit: "%" }
    ]
  },
  {
    id: "miter-angle-calculator",
    name: "Miter Angle Calculator",
    description: "Calculate miter and bevel angles for joinery.",
    category: "construction",
    subcategory: "engineering-material",
    inputs: [
      { id: "corner", label: "Corner Angle", type: "number", defaultValue: 90, unit: "°" }
    ],
    outputs: [
      { id: "miter", label: "Miter Saw Angle", formula: "corner / 2", unit: "°" }
    ]
  }
];

