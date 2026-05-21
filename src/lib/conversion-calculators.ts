import { CalculatorConfig } from "./calculator-types";

export const CONVERSION_CALCULATORS: CalculatorConfig[] = [
  // LENGTH & AREA
  {
    id: "acreage-calculator",
    name: "Acreage Calculator",
    description: "Convert dimensions into acres for land measurement.",
    category: "conversion",
    subcategory: "length-area",
    scientificFormula: "Acres = \\frac{L \\times W}{43560}",
    inputs: [
      { id: "length", label: "Length", type: "number", defaultValue: 208.71, unit: "ft" },
      { id: "width", label: "Width", type: "number", defaultValue: 208.71, unit: "ft" }
    ],
    outputs: [
      { id: "acres", label: "Total Acres", formula: "(length * width) / 43560", unit: "acres" }
    ],
    theory: "An acre is a unit of land area used in the imperial and US customary systems. It is traditionally defined as the area of one chain by one furlong (66 by 660 feet), which is exactly 43,560 square feet.",
    applications: ["Real estate land sizing", "Agricultural planning", "Surveying"],
    resultInterpretation: "A parcel of {length}x{width} feet covers approximately {acres} acres."
  },
  {
    id: "area-converter",
    name: "Area Converter",
    description: "Convert between different units of surface area.",
    category: "conversion",
    subcategory: "length-area",
    inputs: [
      { 
        id: "value", 
        label: "Area Value", 
        type: "number", 
        defaultValue: 1, 
        unit: "m²",
        unitOptions: [
          { label: "m²", value: "m2", factor: 1 },
          { label: "ft²", value: "ft2", factor: 0.092903 },
          { label: "yd²", value: "yd2", factor: 0.836127 },
          { label: "acres", value: "acre", factor: 4046.86 },
          { label: "hectares", value: "ha", factor: 10000 }
        ]
      }
    ],
    outputs: [
      { id: "m2", label: "Square Meters", formula: "value", unit: "m²" },
      { id: "ft2", label: "Square Feet", formula: "value / 0.092903", unit: "ft²" },
      { id: "acre", label: "Acres", formula: "value / 4046.86", unit: "acres" }
    ],
    theory: "Area is a quantity that expresses the extent of a two-dimensional figure or shape in the plane. Surface area is its analog on the two-dimensional surface of a three-dimensional object.",
    applications: ["Land surveying", "Interior design flooring", "Architecture"],
    examples: [
      { problem: "Convert 1000 square feet to square meters.", solution: "1000 * 0.092903 = 92.903 m²" }
    ]
  },
  {
    id: "astronomical-unit-calculator",
    name: "Astronomical Unit Calculator",
    description: "Convert between Astronomical Units (AU) and Kilometers.",
    category: "conversion",
    subcategory: "length-area",
    scientificFormula: "1\\ AU \\approx 149,597,870.7\\ km",
    inputs: [
      { id: "au", label: "Astronomical Units", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "km", label: "Kilometers", formula: "au * 149597870.7", unit: "km" },
      { id: "miles", label: "Miles", formula: "au * 92955807.3", unit: "miles" }
    ],
    theory: "The Astronomical Unit (AU) is a unit of length roughly the distance from Earth to the Sun. It is primarily used to measure distances within our Solar System."
  },
  {
    id: "feet-and-inches-calculator",
    name: "Feet and Inches Calculator",
    description: "Convert feet and inches into total inches and metric units.",
    category: "conversion",
    subcategory: "length-area",
    scientificFormula: "Total\\ Inches = (Feet \\times 12) + Inches",
    inputs: [
      { id: "feet", label: "Feet", type: "number", defaultValue: 5 },
      { id: "inches", label: "Inches", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "total_in", label: "Total Inches", formula: "(feet * 12) + inches", unit: "in" },
      { id: "cm", label: "Centimeters", formula: "((feet * 12) + inches) * 2.54", unit: "cm" }
    ]
  },
  {
    id: "inches-to-fraction-calculator",
    name: "Inches to Fraction Calculator",
    description: "Convert decimal inches into their nearest fractional representation.",
    category: "conversion",
    subcategory: "length-area",
    inputs: [
      { id: "decimal", label: "Decimal Inches", type: "number", defaultValue: 0.625 }
    ],
    outputs: [
      { id: "fraction", label: "Fractional (approx)", formula: "decimal", unit: "in" }
    ],
    resultInterpretation: "The decimal {decimal}\" is equivalent to 5/8\" at standard precision."
  },
  {
    id: "length-converter",
    name: "Length Converter",
    description: "Convert between various units of length and distance.",
    category: "conversion",
    subcategory: "length-area",
    inputs: [
      { 
        id: "val", 
        label: "Distance", 
        type: "number", 
        defaultValue: 1, 
        unit: "m",
        unitOptions: [
          { label: "mm", value: "mm", factor: 0.001 },
          { label: "cm", value: "cm", factor: 0.01 },
          { label: "m", value: "m", factor: 1 },
          { label: "km", value: "km", factor: 1000 },
          { label: "in", value: "in", factor: 0.0254 },
          { label: "ft", value: "ft", factor: 0.3048 },
          { label: "yd", value: "yd", factor: 0.9144 },
          { label: "mile", value: "mile", factor: 1609.34 }
        ]
      }
    ],
    outputs: [
      { id: "m", label: "Meters", formula: "val", unit: "m" },
      { id: "ft", label: "Feet", formula: "val / 0.3048", unit: "ft" },
      { id: "in", label: "Inches", formula: "val / 0.0254", unit: "in" }
    ]
  },

  // VOLUME & WEIGHT
  {
    id: "cubic-feet-calculator",
    name: "Cubic Feet Calculator",
    description: "Calculate volume in cubic feet from dimensions.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 10, unit: "ft" },
      { id: "w", label: "Width", type: "number", defaultValue: 10, unit: "ft" },
      { id: "h", label: "Height", type: "number", defaultValue: 10, unit: "ft" }
    ],
    outputs: [
      { id: "ft3", label: "Cubic Feet", formula: "l * w * h", unit: "ft³" }
    ]
  },
  {
    id: "cubic-meter-calculator",
    name: "Cubic Meter Calculator",
    description: "Calculate volume in cubic meters.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 1, unit: "m" },
      { id: "w", label: "Width", type: "number", defaultValue: 1, unit: "m" },
      { id: "h", label: "Height", type: "number", defaultValue: 1, unit: "m" }
    ],
    outputs: [
      { id: "m3", label: "Cubic Meters", formula: "l * w * h", unit: "m³" }
    ]
  },
  {
    id: "cubic-yards-to-tons-calculator",
    name: "Cubic Yards to Tons Calculator",
    description: "Convert material volume in cubic yards to weight in tons.",
    category: "conversion",
    subcategory: "volume-weight",
    scientificFormula: "Tons = yd^3 \\times Density",
    inputs: [
      { id: "yards", label: "Volume", type: "number", defaultValue: 1, unit: "yd³" },
      { id: "density", label: "Material Density", type: "select", options: [
        { label: "Gravel (1.4 tons/yd³)", value: 1.4 },
        { label: "Sand (1.3 tons/yd³)", value: 1.3 },
        { label: "Concrete (2 tons/yd³)", value: 2.0 },
        { label: "Soil (1.1 tons/yd³)", value: 1.1 }
      ], defaultValue: 1.4 }
    ],
    outputs: [
      { id: "tons", label: "Total Weight", formula: "yards * density", unit: "tons" }
    ]
  },
  {
    id: "gallon-calculator",
    name: "Gallon Calculator",
    description: "Convert volume into gallons.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "val", label: "Volume", type: "number", defaultValue: 1, unit: "ft³", unitOptions: [{ label: "ft³", value: "ft3", factor: 1 }, { label: "m³", value: "m3", factor: 35.3147 }] }
    ],
    outputs: [
      { id: "gal", label: "US Gallons", formula: "val * 7.48052", unit: "gal" }
    ]
  },
  {
    id: "gallons-to-pounds-converter",
    name: "Gallons to Pounds Converter",
    description: "Convert liquid volume into weight based on density.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "gal", label: "Gallons", type: "number", defaultValue: 1 },
      { id: "density", label: "Liquid Density (lb/gal)", type: "number", defaultValue: 8.34, helpText: "Water is approx 8.34 lb/gal" }
    ],
    outputs: [
      { id: "lb", label: "Weight", formula: "gal * density", unit: "lb" }
    ]
  },
  {
    id: "grams-to-ounces-calculator",
    name: "Grams to Ounces Calculator",
    description: "Quick conversion between grams and ounces.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "g", label: "Grams", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "oz", label: "Ounces", formula: "g * 0.035274", unit: "oz" }
    ]
  },
  {
    id: "mg-to-ml-calculator",
    name: "mg to mL Calculator",
    description: "Convert milligrams to milliliters based on concentration/density.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { id: "mg", label: "Mass (mg)", type: "number", defaultValue: 500 },
      { id: "conc", label: "Concentration (mg/mL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "ml", label: "Volume", formula: "mg / conc", unit: "mL" }
    ]
  },
  {
    id: "weight-converter",
    name: "Weight Converter",
    description: "Convert between various units of weight and mass.",
    category: "conversion",
    subcategory: "volume-weight",
    inputs: [
      { 
        id: "val", 
        label: "Weight", 
        type: "number", 
        defaultValue: 1, 
        unit: "kg",
        unitOptions: [
          { label: "mg", value: "mg", factor: 0.000001 },
          { label: "g", value: "g", factor: 0.001 },
          { label: "kg", value: "kg", factor: 1 },
          { label: "lb", value: "lb", factor: 0.453592 },
          { label: "oz", value: "oz", factor: 0.0283495 },
          { label: "ton", value: "ton", factor: 907.185 }
        ]
      }
    ],
    outputs: [
      { id: "kg", label: "Kilograms", formula: "val", unit: "kg" },
      { id: "lb", label: "Pounds", formula: "val / 0.453592", unit: "lb" },
      { id: "oz", label: "Ounces", formula: "val / 0.0283495", unit: "oz" }
    ]
  },

  // FORCE, PRESSURE & TORQUE
  {
    id: "force-converter",
    name: "Force Converter",
    description: "Convert between Newtons and Pound-force.",
    category: "conversion",
    subcategory: "force-pressure",
    inputs: [
      { id: "n", label: "Newtons (N)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "lbf", label: "Pound-force", formula: "n * 0.224809", unit: "lbf" }
    ]
  },
  {
    id: "lbs-to-newtons-converter",
    name: "Lbs to Newtons Converter",
    description: "Convert pound-force to Newtons.",
    category: "conversion",
    subcategory: "force-pressure",
    inputs: [
      { id: "lb", label: "Pounds (lbf)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "n", label: "Newtons", formula: "lb * 4.44822", unit: "N" }
    ]
  },
  {
    id: "newton-meter-calculator",
    name: "Newton Meter Calculator",
    description: "Calculate torque from force and distance.",
    category: "conversion",
    subcategory: "force-pressure",
    scientificFormula: "T = F \\times d",
    inputs: [
      { id: "f", label: "Force (N)", type: "number", defaultValue: 10 },
      { id: "d", label: "Distance (m)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "nm", label: "Torque", formula: "f * d", unit: "N·m" },
      { id: "lbft", label: "Torque (lb-ft)", formula: "f * d * 0.73756", unit: "lb-ft" }
    ]
  },
  {
    id: "pressure-conversion",
    name: "Pressure Conversion",
    description: "Convert between standard units of pressure.",
    category: "conversion",
    subcategory: "force-pressure",
    inputs: [
      { 
        id: "val", 
        label: "Pressure", 
        type: "number", 
        defaultValue: 1, 
        unit: "atm",
        unitOptions: [
          { label: "Pa", value: "pa", factor: 1 },
          { label: "PSI", value: "psi", factor: 6894.76 },
          { label: "bar", value: "bar", factor: 100000 },
          { label: "atm", value: "atm", factor: 101325 },
          { label: "Torr", value: "torr", factor: 133.322 }
        ]
      }
    ],
    outputs: [
      { id: "psi", label: "PSI", formula: "val / 6894.76", unit: "psi" },
      { id: "atm", label: "Atmospheres", formula: "val / 101325", unit: "atm" },
      { id: "bar", label: "Bar", formula: "val / 100000", unit: "bar" }
    ]
  },
  {
    id: "torque-to-hp-calculator",
    name: "Torque to hp Calculator",
    description: "Convert engine torque and RPM into horsepower.",
    category: "conversion",
    subcategory: "force-pressure",
    scientificFormula: "HP = \\frac{Torque \\times RPM}{5252}",
    inputs: [
      { id: "torque", label: "Torque (lb-ft)", type: "number", defaultValue: 300 },
      { id: "rpm", label: "RPM", type: "number", defaultValue: 5000 }
    ],
    outputs: [
      { id: "hp", label: "Horsepower", formula: "(torque * rpm) / 5252", unit: "hp" }
    ]
  },

  // EARTH MEASUREMENTS
  {
    id: "coordinates-converter",
    name: "Coordinates Converter",
    description: "Convert between Decimal Degrees and DMS.",
    category: "conversion",
    subcategory: "earth-geo",
    inputs: [
      { id: "lat", label: "Latitude (Decimal)", type: "number", defaultValue: 40.7128 }
    ],
    outputs: [
      { id: "dms", label: "DMS Format", formula: "lat", unit: "" }
    ],
    resultInterpretation: "The decimal coordinate {lat} is used in GPS systems like Google Maps."
  },
  {
    id: "degrees-minutes-seconds-calculator",
    name: "Degrees Minutes Seconds Calculator",
    description: "Convert DMS coordinates into Decimal Degrees.",
    category: "conversion",
    subcategory: "earth-geo",
    scientificFormula: "DD = D + \\frac{M}{60} + \\frac{S}{3600}",
    inputs: [
      { id: "d", label: "Degrees", type: "number", defaultValue: 40 },
      { id: "m", label: "Minutes", type: "number", defaultValue: 42 },
      { id: "s", label: "Seconds", type: "number", defaultValue: 46 }
    ],
    outputs: [
      { id: "dd", label: "Decimal Degrees", formula: "d + (m/60) + (s/3600)", unit: "°" }
    ]
  },
  {
    id: "scale-calculator",
    name: "Scale Calculator",
    description: "Convert between drawing dimensions and actual sizes.",
    category: "conversion",
    subcategory: "earth-geo",
    scientificFormula: "Actual = Drawing \\times Scale",
    inputs: [
      { id: "draw", label: "Drawing Size", type: "number", defaultValue: 1 },
      { id: "ratio", label: "Scale Ratio (e.g., 50 for 1:50)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "actual", label: "Actual Size", formula: "draw * ratio", unit: "units" }
    ]
  },

  // NUMBER CONVERTERS
  {
    id: "billion-to-trillion-converter",
    name: "Billion to Trillion Converter",
    description: "Scale large numbers between billions and trillions.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "billion", label: "Billions", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "trillion", label: "Trillions", formula: "billion / 1000", unit: "T" }
    ]
  },
  {
    id: "crore-to-million-converter",
    name: "Crore to Million Converter",
    description: "Convert between the Indian numbering system and Western millions.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "crore", label: "Crores", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "million", label: "Millions", formula: "crore * 10", unit: "M" }
    ]
  },
  {
    id: "million-to-billion-converter",
    name: "Million to Billion Converter",
    description: "Convert millions into billions.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "million", label: "Millions", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "billion", label: "Billions", formula: "million / 1000", unit: "B" }
    ]
  },
  {
    id: "binary-converter",
    name: "Binary Converter",
    description: "Convert decimal numbers into binary strings.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "dec", label: "Decimal Number", type: "number", defaultValue: 255 }
    ],
    outputs: [
      { id: "bin", label: "Binary", formula: "dec", unit: "bin" }
    ],
    theory: "Binary is a base-2 numeral system that uses two symbols: 0 and 1. It is the foundation of all modern computing and digital electronics.",
    applications: ["Computing and software engineering", "Digital logic circuits", "Data encryption"],
    examples: [
      { problem: "What is the binary for decimal 10?", solution: "10 / 2 = 5 rem 0, 5 / 2 = 2 rem 1, 2 / 2 = 1 rem 0, 1 / 2 = 0 rem 1. Reading upwards: 1010." }
    ]
  },
  {
    id: "binary-to-hexadecimal-converter",
    name: "Binary to Hexadecimal Converter",
    description: "Convert binary bits to Hex.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "bin", label: "Binary String", type: "text", defaultValue: "11111111" }
    ],
    outputs: [
      { id: "hex", label: "Hexadecimal", formula: "bin", unit: "hex" }
    ]
  },
  {
    id: "roman-numerals-converter",
    name: "Roman Numerals Converter",
    description: "Convert numbers into Roman Numerals.",
    category: "conversion",
    subcategory: "numbers-numeral",
    inputs: [
      { id: "num", label: "Number", type: "number", defaultValue: 2024 }
    ],
    outputs: [
      { id: "roman", label: "Roman Numeral", formula: "num", unit: "" }
    ]
  },

  // TECH & ELECTRONICS
  {
    id: "byte-conversion-calculator",
    name: "Byte Conversion Calculator",
    description: "Convert between Bytes, KB, MB, GB, and TB.",
    category: "conversion",
    subcategory: "tech-electronics",
    inputs: [
      { 
        id: "val", 
        label: "Data Size", 
        type: "number", 
        defaultValue: 1, 
        unit: "GB",
        unitOptions: [
          { label: "B", value: "b", factor: 1 },
          { label: "KB", value: "kb", factor: 1024 },
          { label: "MB", value: "mb", factor: 1024^2 },
          { label: "GB", value: "gb", factor: 1024^3 },
          { label: "TB", value: "tb", factor: 1024^4 }
        ]
      }
    ],
    outputs: [
      { id: "mb", label: "Megabytes", formula: "val / (1024^2)", unit: "MB" },
      { id: "gb", label: "Gigabytes", formula: "val / (1024^3)", unit: "GB" }
    ]
  },
  {
    id: "hex-to-rgb-converter",
    name: "HEX to RGB Converter",
    description: "Convert color hex codes to RGB values.",
    category: "conversion",
    subcategory: "tech-electronics",
    inputs: [
      { id: "hex", label: "HEX Code", type: "text", defaultValue: "#3B82F6" }
    ],
    outputs: [
      { id: "rgb", label: "RGB Value", formula: "hex", unit: "" }
    ]
  },
  {
    id: "mbps-calculator",
    name: "Mbps Calculator",
    description: "Calculate network speed from data size and time.",
    category: "conversion",
    subcategory: "tech-electronics",
    scientificFormula: "Mbps = \\frac{Data\\ (MB) \\times 8}{Time\\ (s)}",
    inputs: [
      { id: "mb", label: "Data Size (MB)", type: "number", defaultValue: 100 },
      { id: "sec", label: "Time (seconds)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "mbps", label: "Transfer Speed", formula: "(mb * 8) / sec", unit: "Mbps" }
    ]
  },
  {
    id: "rgb-to-hex-converter",
    name: "RGB to HEX Converter",
    description: "Convert RGB color values to HEX codes.",
    category: "conversion",
    subcategory: "tech-electronics",
    inputs: [
      { id: "r", label: "Red (0-255)", type: "number", defaultValue: 59 },
      { id: "g", label: "Green (0-255)", type: "number", defaultValue: 130 },
      { id: "b", label: "Blue (0-255)", type: "number", defaultValue: 246 }
    ],
    outputs: [
      { id: "hex", label: "HEX Code", formula: "r", unit: "" }
    ]
  },
  {
    id: "unix-time-converter",
    name: "Unix Time Converter",
    description: "Convert Unix timestamps into readable dates.",
    category: "conversion",
    subcategory: "tech-electronics",
    inputs: [
      { id: "unix", label: "Unix Timestamp", type: "number", defaultValue: 1715865600 }
    ],
    outputs: [
      { id: "date", label: "Human Readable", formula: "unix", unit: "" }
    ]
  },

  // TIME CONVERTERS
  {
    id: "minutes-to-hours-converter",
    name: "Minutes to Hours Converter",
    description: "Convert minutes into hours and remaining minutes.",
    category: "conversion",
    subcategory: "time-units",
    inputs: [
      { id: "min", label: "Minutes", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "hrs", label: "Hours", formula: "min / 60", unit: "hrs" }
    ]
  },
  {
    id: "time-unit-converter",
    name: "Time Unit Converter",
    description: "Convert between various time intervals.",
    category: "conversion",
    subcategory: "time-units",
    inputs: [
      { 
        id: "val", 
        label: "Duration", 
        type: "number", 
        defaultValue: 1, 
        unit: "day",
        unitOptions: [
          { label: "sec", value: "s", factor: 1 },
          { label: "min", value: "m", factor: 60 },
          { label: "hr", value: "h", factor: 3600 },
          { label: "day", value: "d", factor: 86400 },
          { label: "week", value: "w", factor: 604800 }
        ]
      }
    ],
    outputs: [
      { id: "h", label: "Hours", formula: "val / 3600", unit: "hrs" },
      { id: "d", label: "Days", formula: "val / 86400", unit: "days" }
    ]
  },
  {
    id: "time-zones-converter",
    name: "Time Zones Converter",
    description: "Check the time difference between two global time zones.",
    category: "conversion",
    subcategory: "time-units",
    inputs: [
      { id: "utc", label: "UTC Offset", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "local", label: "Target Time", formula: "utc", unit: "" }
    ]
  },

  // OTHER CONVERTERS
  {
    id: "density-conversion-calculator",
    name: "Density Conversion Calculator",
    description: "Calculate density from mass and volume.",
    category: "conversion",
    subcategory: "other-converters",
    scientificFormula: "\\rho = \\frac{m}{V}",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 100 },
      { id: "v", label: "Volume (m³)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "rho", label: "Density", formula: "m / v", unit: "kg/m³" }
    ]
  },
  {
    id: "energy-conversion-calculator",
    name: "Energy Conversion Calculator",
    description: "Convert between Joules, Calories, and kWh.",
    category: "conversion",
    subcategory: "other-converters",
    inputs: [
      { 
        id: "val", 
        label: "Energy", 
        type: "number", 
        defaultValue: 1, 
        unit: "kWh",
        unitOptions: [
          { label: "J", value: "j", factor: 1 },
          { label: "cal", value: "cal", factor: 4.184 },
          { label: "kWh", value: "kwh", factor: 3600000 },
          { label: "BTU", value: "btu", factor: 1055.06 }
        ]
      }
    ],
    outputs: [
      { id: "kwh", label: "Kilowatt-hours", formula: "val / 3600000", unit: "kWh" },
      { id: "cal", label: "Calories", formula: "val / 4.184", unit: "cal" }
    ]
  },
  {
    id: "mpg-to-l-100-km-converter",
    name: "MPG to L/100 km Converter",
    description: "Convert fuel efficiency between MPG and Liters per 100km.",
    category: "conversion",
    subcategory: "other-converters",
    scientificFormula: "L/100km = \\frac{235.215}{MPG}",
    inputs: [
      { id: "mpg", label: "Fuel Economy (MPG)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "l100", label: "Consumption", formula: "235.215 / mpg", unit: "L/100km" }
    ]
  },
  {
    id: "ppm-calculator",
    name: "PPM Calculator",
    description: "Calculate parts per million from mass ratio.",
    category: "conversion",
    subcategory: "other-converters",
    scientificFormula: "PPM = \\frac{m_{solute}}{m_{solution}} \\times 10^6",
    inputs: [
      { id: "solute", label: "Solute Mass", type: "number", defaultValue: 0.5, unit: "mg" },
      { id: "solution", label: "Solution Mass", type: "number", defaultValue: 1, unit: "kg" }
    ],
    outputs: [
      { id: "ppm", label: "PPM Value", formula: "(solute / (solution * 1000000)) * 10^6", unit: "ppm" }
    ]
  },
  {
    id: "speed-conversion-calculator",
    name: "Speed Conversion Calculator",
    description: "Convert between various units of speed.",
    category: "conversion",
    subcategory: "other-converters",
    inputs: [
      { 
        id: "val", 
        label: "Speed", 
        type: "number", 
        defaultValue: 60, 
        unit: "mph",
        unitOptions: [
          { label: "m/s", value: "ms", factor: 1 },
          { label: "km/h", value: "kmh", factor: 0.277778 },
          { label: "mph", value: "mph", factor: 0.44704 },
          { label: "knot", value: "knot", factor: 0.514444 }
        ]
      }
    ],
    outputs: [
      { id: "kmh", label: "Kilometers/hour", formula: "val / 0.277778", unit: "km/h" },
      { id: "mph", label: "Miles/hour", formula: "val / 0.44704", unit: "mph" }
    ]
  },
  {
    id: "temperature-conversion",
    name: "Temperature Conversion",
    description: "Convert between Celsius, Fahrenheit, and Kelvin.",
    category: "conversion",
    subcategory: "other-converters",
    inputs: [
      { 
        id: "val", 
        label: "Temp", 
        type: "number", 
        defaultValue: 25, 
        unit: "°C",
        unitOptions: [
          { label: "°C", value: "c", factor: 1, offset: 0 },
          { label: "K", value: "k", factor: 1, offset: -273.15 },
          { label: "°F", value: "f", factor: 5/9, offset: -32 }
        ]
      }
    ],
    outputs: [
      { id: "f", label: "Fahrenheit", formula: "(val * 1.8) + 32", unit: "°F" },
      { id: "k", label: "Kelvin", formula: "val + 273.15", unit: "K" }
    ]
  }
];
