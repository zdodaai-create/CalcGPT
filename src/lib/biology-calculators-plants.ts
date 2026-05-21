import { CalculatorConfig } from "./calculator-types";

export const BIOLOGY_CALCULATORS_PLANTS: CalculatorConfig[] = [
  // GARDENING & CROPS
  {
    id: "acres-per-hour-calculator",
    name: "Acres Per Hour Calculator",
    description: "Calculate the field capacity of farm machinery (mowers, tillers, tractors) in acres per hour.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Field Capacity} = \\frac{\\text{Width (ft)} \\times \\text{Speed (mph)} \\times \\text{Efficiency (\\%)}}{825}",
    inputs: [
      { id: "width", label: "Implement Width", type: "number", defaultValue: 15, unit: "feet" },
      { id: "speed", label: "Working Speed", type: "number", defaultValue: 5, unit: "mph" },
      { id: "efficiency", label: "Field Efficiency", type: "number", defaultValue: 80, unit: "%", helpText: "Typical efficiency: 70-85% for tillage/mowing." }
    ],
    outputs: [
      { id: "acres_per_hour", label: "Theoretical Field Capacity", formula: "(width * speed * (efficiency / 100)) / 8.25", unit: "acres/hr" }
    ],
    theory: "Field capacity measures the area a machine can harvest, cultivate, or spray per unit time. This combines implement width, speed, and real-world efficiency buffers (turning around at headlands, filling seed bins).",
    seoMeta: {
      title: "Acres Per Hour Calculator | Machinery Field Capacity",
      description: "Calculate how many acres per hour your farm machinery or lawn mower covers.",
      keywords: "acres per hour, field capacity calculator, farm machinery efficiency"
    }
  },
  {
    id: "bulb-spacing-calculator",
    name: "Bulb Spacing Calculator",
    description: "Calculate the exact number of flower bulbs needed to fill a garden bed based on spacing requirements.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Bulbs} = \\frac{\\text{Area (sq ft)}}{\\left(\\frac{\\text{Spacing (in)}}{12}\\right)^2}",
    inputs: [
      { id: "area_sqft", label: "Garden Bed Area", type: "number", defaultValue: 50, unit: "sq ft" },
      { id: "spacing", label: "Spacing between Bulbs", type: "number", defaultValue: 6, unit: "inches" }
    ],
    outputs: [
      { id: "bulbs_needed", label: "Bulbs Required", formula: "ceil(area_sqft / ((spacing / 12)^2))", unit: "bulbs" }
    ],
    theory: "To establish dense, uniform flower beds, bulbs should be planted in grid formations where spacing is converted from inches to relative square-foot fractions.",
    seoMeta: {
      title: "Bulb Spacing Calculator | Garden Planting Guide",
      description: "Estimate how many bulbs or annual plants are needed to fill a specific garden bed surface area.",
      keywords: "bulb spacing, planting density calculator, flower bulb grid"
    }
  },
  {
    id: "co2-grow-room-calculator",
    name: "CO₂ Grow Room Calculator",
    description: "Calculate the volume of carbon dioxide needed to raise levels in an indoor grow room to target ppm concentrations.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{CO}_{2}\\;\\text{Volume} = \\text{Volume}_{\\text{Room}} \\times \\frac{\\Delta\\text{PPM}}{1,000,000}",
    inputs: [
      { id: "length", label: "Room Length", type: "number", defaultValue: 10, unit: "feet" },
      { id: "width", label: "Room Width", type: "number", defaultValue: 10, unit: "feet" },
      { id: "height", label: "Room Height", type: "number", defaultValue: 8, unit: "feet" },
      { id: "ppm_target", label: "Target CO₂ Level", type: "number", defaultValue: 1500, unit: "ppm" },
      { id: "ppm_ambient", label: "Ambient CO₂ Level", type: "number", defaultValue: 400, unit: "ppm" }
    ],
    outputs: [
      { id: "room_volume", label: "Grow Room Volume", formula: "length * width * height", unit: "cu ft" },
      { id: "co2_needed", label: "Required CO₂ Release", formula: "(length * width * height) * (ppm_target - ppm_ambient) / 1000000", unit: "cu ft" }
    ],
    theory: "Carbon dioxide (CO₂) is essential for plant photosynthesis. Raising grow room levels from standard ambient (approx 400 ppm) up to 1200-1500 ppm can significantly accelerate indoor crop growth.",
    seoMeta: {
      title: "CO2 Grow Room Calculator | Indoor Greenhouse ppm",
      description: "Calculate the exact volume of CO2 gas required to raise parts per million levels in indoor greenhouses.",
      keywords: "co2 grow room, carbon dioxide calculator, indoor horticulture ppm"
    }
  },
  {
    id: "compost-calculator",
    name: "Compost Calculator",
    description: "Calculate how much bulk compost or organic soil amendment is needed to cover a garden area to a specific depth.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Volume (cu yd)} = \\frac{\\text{Area (sq ft)} \\times \\frac{\\text{Depth (in)}}{12}}{27}",
    inputs: [
      { id: "area_sqft", label: "Garden Area", type: "number", defaultValue: 100, unit: "sq ft" },
      { id: "depth_inches", label: "Mulch/Compost Depth", type: "number", defaultValue: 2, unit: "inches" }
    ],
    outputs: [
      { id: "volume_cuft", label: "Required Volume (Cubic Feet)", formula: "area_sqft * (depth_inches / 12)", unit: "cu ft" },
      { id: "volume_cuyd", label: "Required Volume (Cubic Yards)", formula: "(area_sqft * (depth_inches / 12)) / 27", unit: "cu yd" }
    ],
    theory: "Adding organic matter like compost improves soil structures, water retention, and microbial activity. This standard volume calculator converts surface dimension and desired layer thickness into commercial wholesale volumes.",
    seoMeta: {
      title: "Compost Calculator | Bulk Organic Soil Volume",
      description: "Calculate the volume of compost needed in cubic yards and cubic feet to cover garden beds.",
      keywords: "compost calculator, bulk soil amendment, garden compost yards"
    }
  },
  {
    id: "corn-yield-calculator",
    name: "Corn Yield Calculator",
    description: "Estimate corn harvest yield (bushels per acre) using the standard kernel counting method.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Yield (bu/ac)} = \\frac{\\text{Ears} \\times \\text{Rows} \\times \\text{Kernels per Row}}{90}",
    inputs: [
      { id: "ears", label: "Ears in 1/1000th Acre", type: "number", defaultValue: 29, helpText: "Count ears along 17'5\" row length for 30\" spacing." },
      { id: "rows", label: "Avg Rows per Ear", type: "number", defaultValue: 16 },
      { id: "kernels_per_row", label: "Avg Kernels per Row", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "yield_bushels", label: "Estimated Harvest Yield", formula: "(ears * rows * kernels_per_row) / 90", unit: "bushels/acre" }
    ],
    theory: "Developed by agronomists, this yield estimator monitors kernel counts in 1/1000th of an acre. The standard factor of 90 represents 90,000 kernels per bushel, adjusting for seed size variations.",
    seoMeta: {
      title: "Corn Yield Calculator | Agronomy Harvest Estimator",
      description: "Estimate corn yield in bushels per acre using standard crop counting protocols.",
      keywords: "corn yield calculator, harvest yield estimator, agronomy corn"
    }
  },
  {
    id: "daily-light-integral-calculator",
    name: "Daily Light Integral Calculator",
    description: "Convert photosynthetic light intensity (PPFD) and photoperiod hours to Daily Light Integral (DLI).",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{DLI} = \\text{PPFD} \\times \\text{Hours} \\times 0.0036",
    inputs: [
      { id: "ppfd", label: "PPFD (Photosynthetic Photon Flux)", type: "number", defaultValue: 400, unit: "µmol/m²/s" },
      { id: "hours", label: "Photoperiod (Light Hours)", type: "number", defaultValue: 18, unit: "hours/day" }
    ],
    outputs: [
      { id: "dli", label: "Daily Light Integral (DLI)", formula: "ppfd * hours * 0.0036", unit: "mol/m²/day" }
    ],
    theory: "Daily Light Integral (DLI) measures the total active light energy delivered to one square meter of foliage over 24 hours. Horticultural plants typically target 15-30 mol/m²/day for high-yield flowering.",
    seoMeta: {
      title: "Daily Light Integral Calculator | PPFD to DLI",
      description: "Calculate DLI (Daily Light Integral) for plants based on active light PPFD and photoperiod.",
      keywords: "daily light integral, PPFD to DLI, horticultural lighting"
    }
  },
  {
    id: "fertilizer-calculator",
    name: "Fertilizer Calculator",
    description: "Determine the weight of commercial fertilizer needed to apply a target nutrient mass (like Nitrogen) to a lawn or field.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Fertilizer} = \\frac{\\text{Target Rate} \\times \\frac{\\text{Area}}{1000}}{\\text{Nutrient \\%}} \\times 100",
    inputs: [
      { id: "area_sqft", label: "Application Area", type: "number", defaultValue: 5000, unit: "sq ft" },
      { id: "target_rate", label: "Target Nutrient Rate", type: "number", defaultValue: 1.0, unit: "lbs/1000 sq ft" },
      { id: "nutrient_pct", label: "Fertilizer Nutrient (%)", type: "number", defaultValue: 20, helpText: "E.g., enter 20 for Nitrogen in a 20-5-10 blend." }
    ],
    outputs: [
      { id: "fertilizer_needed", label: "Total Fertilizer Weight Required", formula: "(target_rate * (area_sqft / 1000)) / (nutrient_pct / 100)", unit: "lbs" }
    ],
    theory: "To prevent chemical runoffs and root burn, nitrogen, phosphorus, and potassium applications must be calibrated based on the analysis percentages printed on retail bags.",
    seoMeta: {
      title: "Fertilizer Calculator | Turf & Crop Nutrient NPK",
      description: "Calculate commercial fertilizer weight requirements based on target nitrogen rates.",
      keywords: "fertilizer calculator, NPK application rate, lawn fertilizer"
    }
  },
  {
    id: "gdu-calculator",
    name: "GDU Calculator — Growing Degree Units",
    description: "Determine Growing Degree Units (GDU) or Growing Degree Days (GDD) for corn development.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{GDU} = \\frac{T_{\\text{max}} + T_{\\text{min}}}{2} - T_{\\text{base}}",
    inputs: [
      { id: "t_max", label: "Daily Maximum Temp", type: "number", defaultValue: 82, unit: "°F" },
      { id: "t_min", label: "Daily Minimum Temp", type: "number", defaultValue: 55, unit: "°F" }
    ],
    outputs: [
      { id: "gdu", label: "Growing Degree Units (GDU)", formula: "((t_max > 86 ? 86 : (t_max < 50 ? 50 : t_max)) + (t_min < 50 ? 50 : (t_min > 86 ? 86 : t_min))) / 2 - 50", unit: "GDU" }
    ],
    theory: "Crops require heat accumulation to mature. GDUs track biological development rates. In standard corn modeling, temperatures are capped at 86°F (since heat above this point does not increase growth rates) and limited to 50°F (as physiological activity stops below this base).",
    seoMeta: {
      title: "GDU GDD Calculator | Crop Heat Accumulation",
      description: "Calculate daily Growing Degree Units for crops using standardized agronomy caps.",
      keywords: "GDU calculator, growing degree days, crop heat thermal unit"
    }
  },
  {
    id: "grain-conversion-calculator",
    name: "Grain Conversion Calculator",
    description: "Adjust wet grain weight to standard dry bushels based on moisture content.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Bushels} = \\frac{\\text{Weight} \\times \\left(\\frac{100 - M_{\\text{wet}}}{100 - M_{\\text{dry}}}\\right)}{\\text{Std Weight}}",
    inputs: [
      { id: "weight", label: "Wet Grain Weight", type: "number", defaultValue: 56000, unit: "lbs" },
      { id: "wet_moisture", label: "Measured Moisture", type: "number", defaultValue: 20, unit: "%" },
      { id: "dry_moisture", label: "Standard Dry Moisture", type: "number", defaultValue: 15, unit: "%" },
      { id: "standard_weight", label: "Bushel Molar Mass", type: "select", defaultValue: 56, options: [
        { label: "Corn / Rye (56 lbs/bu)", value: 56 },
        { label: "Wheat / Soybeans (60 lbs/bu)", value: 60 },
        { label: "Barley (48 lbs/bu)", value: 48 },
        { label: "Oats (32 lbs/bu)", value: 32 }
      ]}
    ],
    outputs: [
      { id: "bushels", label: "Standardized Bushel Yield", formula: "(weight * (100 - wet_moisture) / (100 - dry_moisture)) / standard_weight", unit: "bushels" }
    ],
    theory: "Grain weight varies significantly depending on water content. To facilitate uniform pricing and storage calculations, raw farm yields must be mathematically normalized to standardized moisture benchmarks.",
    seoMeta: {
      title: "Grain Conversion Calculator | Moisture Bushels",
      description: "Convert wet grain weights to standard marketable dry bushels using moisture values.",
      keywords: "grain conversion, wet bushels, moisture adjustment grain"
    }
  },
  {
    id: "grass-seed-calculator",
    name: "Grass Seed Calculator",
    description: "Determine the weight of grass seed required for a lawn, supporting new establishment or overseeding.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Seed Required} = \\text{Area} \\times \\text{Rate}",
    inputs: [
      { id: "area_sqft", label: "Lawn Area", type: "number", defaultValue: 5000, unit: "sq ft" },
      { id: "rate_lbs_1000", label: "Sowing Rate", type: "select", defaultValue: 4, options: [
        { label: "New Lawn / Bare Ground (4 lbs / 1000 sq ft)", value: 4 },
        { label: "Overseeding / Thin Lawn (2 lbs / 1000 sq ft)", value: 2 },
        { label: "High Density / Premium Turf (6 lbs / 1000 sq ft)", value: 6 }
      ]}
    ],
    outputs: [
      { id: "seed_needed", label: "Total Seed Required", formula: "area_sqft * (rate_lbs_1000 / 1000)", unit: "lbs" }
    ],
    theory: "Sowing densities depend on soil coverage. Establishing a new lawn from bare soil requires double the density of overseeding existing established stands.",
    seoMeta: {
      title: "Grass Seed Calculator | Lawn Sowing Weight",
      description: "Calculate how many pounds of grass seed you need for new turf or lawn overseeding.",
      keywords: "grass seed calculator, lawn seed weight, sowing rate turf"
    }
  },
  {
    id: "lawn-mowing-cost-calculator",
    name: "Lawn Mowing Cost Calculator",
    description: "Estimate lawn care charges based on surface size, base rates, and terrain difficulty.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Cost} = \\text{Area} \\times \\text{Rate} \\times \\text{Difficulty}",
    inputs: [
      { id: "area_sqft", label: "Lawn Surface Area", type: "number", defaultValue: 10000, unit: "sq ft" },
      { id: "base_rate_per_1000", label: "Base Rate per 1000 sq ft", type: "number", defaultValue: 5, unit: "$" },
      { id: "difficulty_multiplier", label: "Terrain / Slope Difficulty", type: "select", defaultValue: 1.0, options: [
        { label: "Flat / Simple Grass (1.0)", value: 1.0 },
        { label: "Moderate Slope / Trees (1.25)", value: 1.25 },
        { label: "Steep Slopes / Obstacles (1.5)", value: 1.5 }
      ]}
    ],
    outputs: [
      { id: "estimated_cost", label: "Estimated Mowing Cost", formula: "(area_sqft / 1000) * base_rate_per_1000 * difficulty_multiplier", unit: "$" }
    ],
    theory: "Commercial turf budgeting incorporates basic dimensions and complexity multipliers. Slopes and structures increase handling safety buffers, driving up labor requirements.",
    seoMeta: {
      title: "Lawn Mowing Cost Calculator | Turf Service Estimate",
      description: "Estimate professional mowing and turf trimming service costs based on terrain profiles.",
      keywords: "lawn mowing cost, lawn care estimate, lawn mowing price"
    }
  },
  {
    id: "mulch-calculator",
    name: "Mulch Calculator",
    description: "Determine the volume of bulk wood mulch or chips required for garden beds.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Volume (cu yd)} = \\frac{\\text{Area (sq ft)} \\times \\frac{\\text{Depth (in)}}{12}}{27}",
    inputs: [
      { id: "area_sqft", label: "Bed Surface Area", type: "number", defaultValue: 200, unit: "sq ft" },
      { id: "depth_inches", label: "Desired Mulch Depth", type: "number", defaultValue: 3, unit: "inches" }
    ],
    outputs: [
      { id: "volume_cuft", label: "Mulch Volume (Cubic Feet)", formula: "area_sqft * (depth_inches / 12)", unit: "cu ft" },
      { id: "volume_cuyd", label: "Mulch Volume (Cubic Yards)", formula: "(area_sqft * (depth_inches / 12)) / 27", unit: "cu yd" }
    ],
    theory: "Mulching helps suppress weeds, moderate soil temperatures, and retain hydration. Typical ornamental applications target a uniform layer thickness of 2 to 3 inches.",
    seoMeta: {
      title: "Mulch Calculator | Bulk Garden Bed Volume",
      description: "Calculate how many cubic yards and bags of mulch are needed to cover garden spaces.",
      keywords: "mulch calculator, bulk mulch yards, garden bedding wood"
    }
  },
  {
    id: "plant-population-calculator",
    name: "Plant Population Calculator",
    description: "Determine agricultural planting densities (plants per acre) using custom row and seed spacings.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Population} = \\frac{6,272,640}{\\text{Row Spacing (in)} \\times \\text{Plant Spacing (in)}}",
    inputs: [
      { id: "row_spacing_inches", label: "Row Spacing (width)", type: "number", defaultValue: 30, unit: "inches" },
      { id: "plant_spacing_inches", label: "Plant Spacing (in row)", type: "number", defaultValue: 6, unit: "inches" }
    ],
    outputs: [
      { id: "plants_per_acre", label: "Plant Population Density", formula: "6272640 / (row_spacing_inches * plant_spacing_inches)", unit: "plants/acre" }
    ],
    theory: "Optimizing agricultural plant populations maximizes solar absorption and minimizes resource competition between adjacent roots.",
    seoMeta: {
      title: "Plant Population Calculator | Crop Stand Density",
      description: "Calculate crop stand densities per acre based on row and seed spacing profiles.",
      keywords: "plant population calculator, crop spacing density, seeds per acre"
    }
  },
  {
    id: "plant-spacing-calculator",
    name: "Plant Spacing Calculator",
    description: "Determine the total number of plants that can be arranged in a grid inside a garden bed.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Plants} = \\text{floor}\\left(\\frac{\\text{Length (in)}}{\\text{Spacing (in)}}\\right) \\times \\text{floor}\\left(\\frac{\\text{Width (in)}}{\\text{Spacing (in)}}\\right)",
    inputs: [
      { id: "length_feet", label: "Garden Length", type: "number", defaultValue: 20, unit: "feet" },
      { id: "width_feet", label: "Garden Width", type: "number", defaultValue: 4, unit: "feet" },
      { id: "spacing_inches", label: "Spacing distance", type: "number", defaultValue: 12, unit: "inches" }
    ],
    outputs: [
      { id: "total_plants", label: "Total Plants Accommodated", formula: "floor((length_feet * 12) / spacing_inches) * floor((width_feet * 12) / spacing_inches)", unit: "plants" }
    ],
    theory: "A simple grid layout determines total plant counts by dividing both bed dimensions by the spacing interval and rounding down to avoid planting off-boundary.",
    seoMeta: {
      title: "Plant Spacing Calculator | Garden Bed Grid",
      description: "Find out how many plants can comfortably fit in a rectangular garden bed based on spacing.",
      keywords: "plant spacing, garden layout grid, plant spacing count"
    }
  },
  {
    id: "potting-soil-calculator",
    name: "Potting Soil Calculator",
    description: "Calculate the bulk soil volume (in dry quarts and cubic feet) required to fill round planters.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Volume} = \\pi \\times r^2 \\times h",
    inputs: [
      { id: "diameter_inches", label: "Planter Top Diameter", type: "number", defaultValue: 12, unit: "inches" },
      { id: "depth_inches", label: "Planter Depth", type: "number", defaultValue: 10, unit: "inches" },
      { id: "pot_count", label: "Number of Planters", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "volume_cuin", label: "Total Volume (Cubic Inches)", formula: "pi * (diameter_inches / 2)^2 * depth_inches * pot_count", unit: "cu in" },
      { id: "volume_quarts", label: "Soil Needed (Dry Quarts)", formula: "(pi * (diameter_inches / 2)^2 * depth_inches * pot_count) / 67.2", unit: "quarts" },
      { id: "volume_cuft", label: "Soil Needed (Cubic Feet)", formula: "(pi * (diameter_inches / 2)^2 * depth_inches * pot_count) / 1728", unit: "cu ft" }
    ],
    theory: "Potting media is commercially packaged in dry quarts or cubic feet. Standard circular planters are calculated as cylinders. This tool simplifies potting media purchasing calculations.",
    seoMeta: {
      title: "Potting Soil Calculator | Planter Bag Volume",
      description: "Calculate soil volumes for round pots in dry quarts and bag counts.",
      keywords: "potting soil calculator, planter volume, dirt for pots quarts"
    }
  },
  {
    id: "sod-calculator",
    name: "Sod Calculator",
    description: "Estimate commercial turf grass sod rolls needed to establish a lawn, accounting for installation waste factors.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Sod Rolls} = \\text{ceil}\\left(\\frac{\\text{Area} \\times (1 + \\text{Waste})}{9}\\right)",
    inputs: [
      { id: "area_sqft", label: "Lawn Area to Sod", type: "number", defaultValue: 1000, unit: "sq ft" },
      { id: "sod_roll_sqft", label: "Single Roll Surface", type: "number", defaultValue: 9, unit: "sq ft", helpText: "Standard commercial rolls are 9 sq ft (2' x 4.5')." },
      { id: "waste_factor", label: "Fitting Waste Allowance", type: "number", defaultValue: 10, unit: "%", helpText: "Add 5-10% to account for cutting around curves." }
    ],
    outputs: [
      { id: "rolls_needed", label: "Estimated Rolls Needed", formula: "ceil((area_sqft * (1 + waste_factor / 100)) / sod_roll_sqft)", unit: "rolls" }
    ],
    theory: "Purchasing sod requires ordering safety margins to cover trimming losses around landscape curves and edges.",
    seoMeta: {
      title: "Sod Calculator | Turf Roll Estimator",
      description: "Calculate the exact number of standard sod rolls required for your turf project.",
      keywords: "sod calculator, lawn sod rolls, grass turf estimate"
    }
  },
  {
    id: "soil-calculator",
    name: "Soil Calculator",
    description: "Determine the bulk volume of topsoil required to fill a raised garden bed or excavation site.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Volume (cu yd)} = \\frac{\\text{Area (sq ft)} \\times \\frac{\\text{Depth (in)}}{12}}{27}",
    inputs: [
      { id: "area_sqft", label: "Surface Area", type: "number", defaultValue: 300, unit: "sq ft" },
      { id: "depth_inches", label: "Target Fill Depth", type: "number", defaultValue: 6, unit: "inches" }
    ],
    outputs: [
      { id: "volume_cuft", label: "Required Volume (Cubic Feet)", formula: "area_sqft * (depth_inches / 12)", unit: "cu ft" },
      { id: "volume_cuyd", label: "Required Volume (Cubic Yards)", formula: "(area_sqft * (depth_inches / 12)) / 27", unit: "cu yd" }
    ],
    theory: "Topsoil excavations are measured in cubic yards (27 cubic feet per yard). Accurate measurements are critical to prevent ordering errors with commercial aggregate deliveries.",
    seoMeta: {
      title: "Soil Calculator | Raised Bed Dirt Volume",
      description: "Calculate the bulk topsoil volume needed for garden beds and excavations.",
      keywords: "soil calculator, bulk topsoil volume, raised bed dirt yards"
    }
  },
  {
    id: "vpd-calculator",
    name: "VPD Calculator (Vapor Pressure Deficit)",
    description: "Calculate Vapor Pressure Deficit (VPD) in kilopascals to monitor crop transpiration conditions.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{VPD} = \\text{SVP}_{\\text{leaf}} - \\left(\\text{SVP}_{\\text{air}} \\times \\frac{\\text{RH}}{100}\\right)",
    inputs: [
      { id: "temp_air", label: "Air Temperature", type: "number", defaultValue: 25, unit: "°C" },
      { id: "temp_leaf", label: "Leaf Temperature", type: "number", defaultValue: 23, unit: "°C", helpText: "Leaf temperature is typically 1-3°C cooler than air due to transpiration." },
      { id: "rh", label: "Relative Humidity (RH)", type: "number", defaultValue: 60, unit: "%" }
    ],
    outputs: [
      { id: "svp_air", label: "Saturated Vapor Pressure of Air", formula: "0.61078 * e^((17.27 * temp_air) / (temp_air + 237.3))", unit: "kPa" },
      { id: "svp_leaf", label: "Saturated Vapor Pressure of Leaf", formula: "0.61078 * e^((17.27 * temp_leaf) / (temp_leaf + 237.3))", unit: "kPa" },
      { id: "vpd", label: "Vapor Pressure Deficit (VPD)", formula: "(0.61078 * e^((17.27 * temp_leaf) / (temp_leaf + 237.3))) - ((0.61078 * e^((17.27 * temp_air) / (temp_air + 237.3))) * (rh / 100))", unit: "kPa" }
    ],
    theory: "Vapor Pressure Deficit (VPD) measures the drying power of air. High VPD stresses crops by accelerating transpiration, while low VPD limits nutrient uptake by slowing sap flow.",
    seoMeta: {
      title: "VPD Calculator | Vapor Pressure Deficit kPa",
      description: "Calculate horticultural Vapor Pressure Deficit using leaf and air temperatures.",
      keywords: "VPD calculator, vapor pressure deficit, greenhouse transpiration"
    }
  },
  {
    id: "vegetable-seed-calculator",
    name: "Vegetable Seed Calculator",
    description: "Determine the total count of vegetable seeds needed based on planting row configurations and spacings.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Seeds} = \\frac{\\text{Length (in)}}{\\text{Spacing (in)}} \\times \\text{Rows}",
    inputs: [
      { id: "row_length_feet", label: "Row Length", type: "number", defaultValue: 50, unit: "feet" },
      { id: "seed_spacing_inches", label: "Seed Spacing in Row", type: "number", defaultValue: 2, unit: "inches" },
      { id: "rows", label: "Number of Rows", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "total_seeds", label: "Total Seeds Required", formula: "ceil((row_length_feet * 12 / seed_spacing_inches) * rows)", unit: "seeds" }
    ],
    theory: "This tool calculates how many individual vegetable seeds (e.g. carrots, radishes, beans) are required to plant a set length of agricultural rows.",
    seoMeta: {
      title: "Vegetable Seed Calculator | Row Planting Estimator",
      description: "Determine how many vegetable seeds are required for your garden rows.",
      keywords: "vegetable seed calculator, row planting seeds, garden sowing"
    }
  },
  {
    id: "vegetable-yield-calculator",
    name: "Vegetable Yield Calculator",
    description: "Estimate garden harvest weights using crop counts and expected yields per plant.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Yield} = \\text{Plants} \\times \\text{Yield per Plant}",
    inputs: [
      { id: "plant_count", label: "Number of Crops", type: "number", defaultValue: 10, unit: "plants" },
      { id: "avg_yield_per_plant", label: "Avg Yield per Plant", type: "number", defaultValue: 5, unit: "lbs" }
    ],
    outputs: [
      { id: "total_yield_lbs", label: "Estimated Harvest Weight", formula: "plant_count * avg_yield_per_plant", unit: "lbs" },
      { id: "total_yield_kg", label: "Estimated Harvest Weight (Metric)", formula: "plant_count * avg_yield_per_plant * 0.453592", unit: "kg" }
    ],
    theory: "This yield estimator helps gardeners project seasonal yields based on average historical productivity patterns for crops (like tomatoes, peppers, or squash).",
    seoMeta: {
      title: "Vegetable Yield Calculator | Garden Harvest Estimator",
      description: "Estimate seasonal vegetable harvest weights based on crop counts.",
      keywords: "vegetable yield calculator, garden harvest weight, crop productivity"
    }
  },
  {
    id: "water-potential-calculator",
    name: "Water Potential Calculator",
    description: "Calculate the total water potential (Ψ) of plant cells using solute and pressure components.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\Psi = \\Psi_{s} + \\Psi_{p} \\quad \\text{where} \\quad \\Psi_{s} = -iCRT",
    inputs: [
      { id: "ionization_constant", label: "Ionization Constant (i)", type: "number", defaultValue: 1.0, helpText: "1.0 for sucrose, 2.0 for NaCl." },
      { id: "solute_conc", label: "Solute Concentration (C)", type: "number", defaultValue: 0.1, unit: "mol/L" },
      { id: "temp_c", label: "Temperature", type: "number", defaultValue: 25, unit: "°C" },
      { id: "psi_p", label: "Pressure Potential (Ψp)", type: "number", defaultValue: 2.0, unit: "bars", helpText: "Turgor pressure inside the cell." }
    ],
    outputs: [
      { id: "psi_s", label: "Solute Potential (Ψs)", formula: "-ionization_constant * solute_conc * 0.0831 * (temp_c + 273.15)", unit: "bars" },
      { id: "psi_total", label: "Total Water Potential (Ψ)", formula: "(-ionization_constant * solute_conc * 0.0831 * (temp_c + 273.15)) + psi_p", unit: "bars" }
    ],
    theory: "Water potential governs water transport in plants. Water naturally flows from areas of higher potential to lower potential. Solute potential (osmotic potential) is always negative, while turgor pressure provides positive potential.",
    seoMeta: {
      title: "Water Potential Calculator | Plant Physiology Bars",
      description: "Calculate solute potential and total water potential using plant biological parameters.",
      keywords: "water potential calculator, solute potential plant, turgor pressure bars"
    }
  },
  {
    id: "water-soluble-fertilizer-calculator",
    name: "Water Soluble Fertilizer Calculator",
    description: "Calculate fertilizer dry mass required for stock tanks in greenhouse injector systems.",
    category: "biology",
    subcategory: "gardening-crops",
    scientificFormula: "\\text{Fertilizer (oz)} = \\frac{\\text{PPM} \\times \\text{Volume (gal)} \\times 0.00133}{\\text{Nutrient \\%}}",
    inputs: [
      { id: "ppm_target", label: "Target PPM Concentration", type: "number", defaultValue: 150, unit: "ppm" },
      { id: "target_gallons", label: "Application Irrigation Volume", type: "number", defaultValue: 100, unit: "gallons" },
      { id: "nutrient_pct", label: "Fertilizer Nutrient (%)", type: "number", defaultValue: 20, helpText: "E.g., enter 20 for Nitrogen in a 20-20-20 blend." },
      { id: "dilution_ratio", label: "Injector Dilution Ratio (1:x)", type: "number", defaultValue: 100, helpText: "Enter 100 for a 1:100 injector configuration." }
    ],
    outputs: [
      { id: "ounces_needed", label: "Dry Fertilizer Weight (Direct)", formula: "(ppm_target * target_gallons * 0.00133) / (nutrient_pct / 100)", unit: "oz" },
      { id: "stock_ounces_needed", label: "Fertilizer for Stock Tank", formula: "((ppm_target * target_gallons * 0.00133) / (nutrient_pct / 100)) * (1 / dilution_ratio) * 100", unit: "oz" }
    ],
    theory: "Greenhouse liquid feed utilizes concentrated stock solutions. Injectors siphon stock at precise dilution ratios (like 1:100) to deliver constant ppm nutrient doses during irrigation cycles.",
    seoMeta: {
      title: "Water Soluble Fertilizer Injector Calculator | Stock Tank PPM",
      description: "Calculate the weight of dry fertilizer needed for stock tanks in greenhouse systems.",
      keywords: "water soluble fertilizer, stock tank injector, greenhouse PPM fertilizing"
    }
  },

  // TREES & FORESTRY
  {
    id: "basal-area-calculator",
    name: "Basal Area Calculator",
    description: "Determine tree basal area and forest stand density using Diameter at Breast Height (DBH).",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Basal Area (sq ft)} = 0.005454 \\times \\text{DBH}^2",
    inputs: [
      { id: "dbh_inches", label: "Trunk DBH", type: "number", defaultValue: 14, unit: "inches" },
      { id: "trees_sampled", label: "Sampled Trees in Plot", type: "number", defaultValue: 10 },
      { id: "plot_size_acres", label: "Sample Plot Size", type: "number", defaultValue: 0.1, unit: "acres" }
    ],
    outputs: [
      { id: "basal_area_tree", label: "Basal Area per Tree", formula: "0.005454 * dbh_inches^2", unit: "sq ft" },
      { id: "stand_basal_area", label: "Stand Density", formula: "(0.005454 * dbh_inches^2 * trees_sampled) / plot_size_acres", unit: "sq ft/acre" }
    ],
    theory: "Basal area measures tree stem density. Forestry plots use DBH to estimate timber volumes and stocking density indices.",
    seoMeta: {
      title: "Basal Area Calculator | Forestry Stand Density DBH",
      description: "Calculate tree basal area and forest stand density values from DBH measurements.",
      keywords: "basal area calculator, forestry stand density, DBH basal area"
    }
  },
  {
    id: "tree-leaves-calculator",
    name: "Tree Leaves Calculator",
    description: "Estimate the total leaf count of a tree based on crown canopy volume.",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Crown Volume} = \\frac{4}{3} \\pi r^3",
    inputs: [
      { id: "crown_radius", label: "Crown Canopy Radius", type: "number", defaultValue: 10, unit: "feet" },
      { id: "leaf_density", label: "Estimated Leaf Density", type: "number", defaultValue: 15, unit: "leaves/cu ft", helpText: "Average density range: 10 to 25 leaves per cubic foot." }
    ],
    outputs: [
      { id: "crown_volume", label: "Crown Canopy Volume", formula: "(4/3) * pi * crown_radius^3", unit: "cu ft" },
      { id: "total_leaves", label: "Estimated Leaf Count", formula: "(4/3) * pi * crown_radius^3 * leaf_density", unit: "leaves" }
    ],
    theory: "Canopy crown volume is modeled as a sphere. Stand measurements estimate total surface area and photosynthesis rates using species-specific leaf density factors.",
    seoMeta: {
      title: "Tree Leaves Calculator | Canopy Leaf Count Estimator",
      description: "Estimate the total leaf count of a tree using crown radius and density coefficients.",
      keywords: "tree leaves calculator, canopy leaf count, crown volume"
    }
  },
  {
    id: "tree-age-calculator",
    name: "Tree Age Calculator",
    description: "Estimate a standing tree's age using trunk diameter and species-specific growth factors.",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Age} = \\text{Diameter} \\times \\text{Growth Factor}",
    inputs: [
      { id: "diameter_inches", label: "Trunk DBH", type: "number", defaultValue: 12, unit: "inches" },
      { id: "growth_factor", label: "Species Growth Factor", type: "select", defaultValue: 4.0, options: [
        { label: "Red Oak (4.0)", value: 4.0 },
        { label: "White Oak (5.0)", value: 5.0 },
        { label: "Sugar Maple (5.5)", value: 5.5 },
        { label: "Silver Maple (3.0)", value: 3.0 },
        { label: "White Pine (5.0)", value: 5.0 },
        { label: "Green Ash (4.0)", value: 4.0 },
        { label: "Shagbark Hickory (7.5)", value: 7.5 }
      ]}
    ],
    outputs: [
      { id: "estimated_age", label: "Estimated Tree Age", formula: "diameter_inches * growth_factor", unit: "years" }
    ],
    theory: "Without tree ring cores, foresters estimate age by multiplying trunk DBH (Diameter at Breast Height) by empirical growth factors calibrated for each species.",
    seoMeta: {
      title: "Tree Age Calculator | Trunk Diameter Growth Factor",
      description: "Estimate a standing tree's age from trunk diameter measurements using species-specific factors.",
      keywords: "tree age calculator, tree growth factor, DBH age"
    }
  },
  {
    id: "tree-diameter-calculator",
    name: "Tree Diameter Calculator",
    description: "Calculate Tree Diameter at Breast Height (DBH) using trunk circumference measurements.",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{DBH} = \\frac{\\text{Circumference}}{\\pi}",
    inputs: [
      { id: "circumference_inches", label: "Trunk Circumference (4.5 ft above ground)", type: "number", defaultValue: 44, unit: "inches" }
    ],
    outputs: [
      { id: "dbh", label: "Calculated Diameter (DBH)", formula: "circumference_inches / pi", unit: "inches" }
    ],
    theory: "Diameter at Breast Height (DBH) is the standard forestry metric for measuring trunk size. Measuring trunk circumference at 4.5 feet above the ground offers a practical way to calculate DBH.",
    seoMeta: {
      title: "Tree Diameter DBH Calculator | Circumference to DBH",
      description: "Calculate standard Diameter at Breast Height (DBH) using trunk circumference measurements.",
      keywords: "tree diameter, DBH calculator, tree circumference"
    }
  },
  {
    id: "tree-height-calculator",
    name: "Tree Height Calculator",
    description: "Calculate standing tree heights using distance measurements and clinometer sighting angles.",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Height} = \\text{Distance} \\times \\tan(\\theta) + \\text{Eye Height}",
    inputs: [
      { id: "distance_feet", label: "Distance to Tree base", type: "number", defaultValue: 50, unit: "feet" },
      { id: "angle_deg", label: "Angle to Tree Top", type: "number", defaultValue: 45, unit: "degrees" },
      { id: "eye_height_feet", label: "Sighting Eye Height", type: "number", defaultValue: 5.5, unit: "feet" }
    ],
    outputs: [
      { id: "tree_height", label: "Estimated Tree Height", formula: "distance_feet * tan(angle_deg * 3.14159265 / 180) + eye_height_feet", unit: "feet" }
    ],
    theory: "The tangent method estimates tree heights by constructing a right-angled triangle between the observer, the base of the tree, and its highest crown tip.",
    seoMeta: {
      title: "Tree Height Calculator | Tangent Clinometer Method",
      description: "Estimate standing tree heights using distances and sight angles.",
      keywords: "tree height calculator, clinometer tree height, tangent method tree"
    }
  },
  {
    id: "tree-spacing-calculator",
    name: "Tree Spacing Calculator",
    description: "Calculate the count of saplings needed to reforest or landscape an acreage based on spacing intervals.",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Trees} = \\frac{\\text{Area (sq ft)}}{\\text{Spacing (ft)}^2}",
    inputs: [
      { id: "area_acres", label: "Reforestation Area", type: "number", defaultValue: 2, unit: "acres" },
      { id: "spacing_feet", label: "Spacing between Saplings", type: "number", defaultValue: 10, unit: "feet" }
    ],
    outputs: [
      { id: "area_sqft", label: "Total Surface Area", formula: "area_acres * 43560", unit: "sq ft" },
      { id: "trees_needed", label: "Required Saplings Count", formula: "(area_acres * 43560) / spacing_feet^2", unit: "trees" }
    ],
    theory: "Forestry restoration scales planting density to balance canopy coverage and resource competition. This tool converts land area to square feet before dividing by grid spacing.",
    seoMeta: {
      title: "Tree Spacing Calculator | Reforestation Saplings Count",
      description: "Calculate the total number of trees required for orchard or forestry projects.",
      keywords: "tree spacing calculator, reforestation tree count, orchard spacing"
    }
  },
  {
    id: "tree-value-calculator",
    name: "Tree Value Calculator",
    description: "Estimate the monetary value of landscape trees using the Trunk Formula Method (TFM).",
    category: "biology",
    subcategory: "trees-forestry",
    scientificFormula: "\\text{Value} = \\text{Basal Area (sq in)} \\times \\text{Unit Value} \\times S_{\\text{rating}} \\times L_{\\text{rating}}",
    inputs: [
      { id: "dbh_inches", label: "Trunk DBH", type: "number", defaultValue: 12, unit: "inches" },
      { id: "unit_value", label: "Unit Value per Sq Inch", type: "number", defaultValue: 10, unit: "$/sq in", helpText: "Standard appraised value per sq inch of basal area." },
      { id: "species_rating", label: "Species Rating", type: "number", defaultValue: 0.8, helpText: "Enter 0.0 to 1.0 (species survival rating)." },
      { id: "location_rating", label: "Location Rating", type: "number", defaultValue: 0.7, helpText: "Enter 0.0 to 1.0 (aesthetic site location value)." }
    ],
    outputs: [
      { id: "basal_area_sqin", label: "Trunk Cross-Section Area", formula: "pi * (dbh_inches / 2)^2", unit: "sq in" },
      { id: "estimated_value", label: "Appraised Landscape Value", formula: "pi * (dbh_inches / 2)^2 * unit_value * species_rating * location_rating", unit: "$" }
    ],
    theory: "The Trunk Formula Method assesses landscape tree values by combining trunk cross-sectional areas with local unit values, species ratings, and location factors.",
    seoMeta: {
      title: "Tree Value Calculator | Trunk Appraisal Formula",
      description: "Appraise landscape tree monetary values using trunk sizes and species indexes.",
      keywords: "tree value calculator, landscape tree appraisal, trunk formula method"
    }
  }
];
