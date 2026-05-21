import { CalculatorConfig } from "./calculator-types";

export const EVERYDAY_LIFE_CALCULATORS: CalculatorConfig[] = [
  // TRANSPORTATION
  {
    id: "0-60-calculator",
    name: "0–60 Calculator",
    description: "Calculate vehicle acceleration performance and 0–60 mph times.",
    category: "everyday-life",
    subcategory: "transportation",
    scientificFormula: "a = \\frac{v_f - v_i}{t}",
    inputs: [
      { id: "time", label: "Time to reach 60 mph", type: "number", defaultValue: 6, unit: "sec" }
    ],
    outputs: [
      { id: "accel", label: "Average Acceleration", formula: "60 / time", unit: "mph/s" },
      { id: "mps", label: "Acceleration (m/s²)", formula: "(60 * 0.44704) / time", unit: "m/s²" }
    ],
    theory: "The 0–60 mph time is a standard performance measure for cars. It indicates how quickly a vehicle can accelerate from a standstill. Factors affecting this include engine torque, weight, traction, and transmission efficiency.",
    resultInterpretation: "A 0–60 time of {time} seconds indicates {accel > 7 ? 'standard performance' : 'high performance'}."
  },
  {
    id: "fuel-cost-calculator",
    name: "Fuel Cost Calculator",
    description: "Estimate the total fuel cost for a road trip or commute.",
    category: "everyday-life",
    subcategory: "transportation",
    scientificFormula: "Cost = \\frac{Distance}{Efficiency} \\times Price",
    inputs: [
      { id: "dist", label: "Distance", type: "number", defaultValue: 100, unit: "miles" },
      { id: "mpg", label: "Fuel Efficiency (MPG)", type: "number", defaultValue: 25 },
      { id: "price", label: "Fuel Price per Gallon", type: "number", defaultValue: 3.50, unit: "$" }
    ],
    outputs: [
      { id: "total", label: "Trip Fuel Cost", formula: "(dist / mpg) * price", unit: "$" }
    ]
  },
  {
    id: "mpg-calculator",
    name: "MPG Calculator",
    description: "Calculate your vehicle's actual fuel efficiency.",
    category: "everyday-life",
    subcategory: "transportation",
    scientificFormula: "MPG = \\frac{Miles}{Gallons}",
    inputs: [
      { id: "miles", label: "Miles Driven", type: "number", defaultValue: 300 },
      { id: "gal", label: "Gallons Used", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "mpg", label: "Fuel Economy", formula: "miles / gal", unit: "MPG" }
    ]
  },
  {
    id: "speed-calculator",
    name: "Speed Calculator",
    description: "Calculate speed from distance and time.",
    category: "everyday-life",
    subcategory: "transportation",
    scientificFormula: "v = \\frac{d}{t}",
    inputs: [
      { id: "d", label: "Distance", type: "number", defaultValue: 100, unit: "km" },
      { id: "t", label: "Time", type: "number", defaultValue: 2, unit: "hrs" }
    ],
    outputs: [
      { id: "v", label: "Average Speed", formula: "d / t", unit: "km/h" }
    ]
  },
  {
    id: "tesla-charging-cost-calculator",
    name: "Tesla Charging Cost Calculator",
    description: "Estimate the cost to charge a Tesla or other EV battery.",
    category: "everyday-life",
    subcategory: "transportation",
    scientificFormula: "Cost = Capacity \\times Rate",
    inputs: [
      { id: "cap", label: "Battery Size (kWh)", type: "number", defaultValue: 75, helpText: "Tesla Model 3 Long Range is ~75kWh" },
      { id: "rate", label: "Electricity Rate ($/kWh)", type: "number", defaultValue: 0.14 }
    ],
    outputs: [
      { id: "cost", label: "Full Charge Cost", formula: "cap * rate", unit: "$" }
    ]
  },

  // CLOTHING & SEWING
  {
    id: "bra-size-calculator",
    name: "Bra Size Calculator",
    description: "Estimate bra size based on bust and underbust measurements.",
    category: "everyday-life",
    subcategory: "clothing-sewing",
    inputs: [
      { id: "bust", label: "Bust Size", type: "number", defaultValue: 36, unit: "in" },
      { id: "under", label: "Underbust Size", type: "number", defaultValue: 32, unit: "in" }
    ],
    outputs: [
      { id: "band", label: "Band Size", formula: "under + (under % 2 === 0 ? 0 : 1)", unit: "" },
      { id: "cup", label: "Cup Index", formula: "bust - under", unit: "" }
    ],
    resultInterpretation: "Calculated Band: {band}. Cup Index {cup} corresponds to Cup {cup === 1 ? 'A' : cup === 2 ? 'B' : cup === 3 ? 'C' : 'D+'}."
  },
  {
    id: "fabric-calculator",
    name: "Fabric Calculator",
    description: "Estimate the amount of fabric needed for a rectangular project.",
    category: "everyday-life",
    subcategory: "clothing-sewing",
    inputs: [
      { id: "l", label: "Project Length", type: "number", defaultValue: 2, unit: "yd" },
      { id: "w", label: "Project Width", type: "number", defaultValue: 1.5, unit: "yd" }
    ],
    outputs: [
      { id: "area", label: "Total Fabric Area", formula: "l * w", unit: "sq yd" }
    ]
  },
  {
    id: "ring-size-converter",
    name: "Ring Size Converter",
    description: "Convert finger circumference to standard ring sizes.",
    category: "everyday-life",
    subcategory: "clothing-sewing",
    scientificFormula: "Diameter = \\frac{C}{\\pi}",
    inputs: [
      { id: "c", label: "Circumference", type: "number", defaultValue: 57, unit: "mm" }
    ],
    outputs: [
      { id: "d", label: "Diameter", formula: "c / 3.14159", unit: "mm" },
      { id: "size", label: "US Ring Size", formula: "(c / 3.14159 - 14.3) / 0.8", unit: "" }
    ]
  },
  {
    id: "shoe-size-conversion",
    name: "Shoe Size Conversion",
    description: "Convert between US, UK, and EU shoe sizes.",
    category: "everyday-life",
    subcategory: "clothing-sewing",
    inputs: [
      { id: "us_m", label: "US Men's Size", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "uk", label: "UK Size", formula: "us_m - 0.5", unit: "" },
      { id: "eu", label: "EU Size", formula: "us_m + 33", unit: "" }
    ]
  },

  // HOME ECONOMICS
  {
    id: "electricity-cost-calculator",
    name: "Electricity Cost Calculator",
    description: "Calculate the running cost of home appliances.",
    category: "everyday-life",
    subcategory: "home-economics",
    scientificFormula: "Cost = kW \\times Hours \\times Rate",
    inputs: [
      { id: "watts", label: "Appliance Wattage", type: "number", defaultValue: 1000 },
      { id: "hrs", label: "Hours used per day", type: "number", defaultValue: 4 },
      { id: "rate", label: "Electricity Rate ($/kWh)", type: "number", defaultValue: 0.14 }
    ],
    outputs: [
      { id: "daily", label: "Daily Cost", formula: "(watts / 1000) * hrs * rate", unit: "$" },
      { id: "monthly", label: "Monthly Cost", formula: "(watts / 1000) * hrs * rate * 30", unit: "$" }
    ]
  },
  {
    id: "appliance-wattage-calculator",
    name: "Appliance Wattage Calculator",
    description: "Calculate power in Watts from Voltage and Current.",
    category: "everyday-life",
    subcategory: "home-economics",
    scientificFormula: "W = V \\times I",
    inputs: [
      { id: "v", label: "Voltage (V)", type: "number", defaultValue: 120 },
      { id: "a", label: "Current (Amps)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "w", label: "Wattage", formula: "v * a", unit: "Watts" }
    ]
  },
  {
    id: "grocery-calculator",
    name: "Grocery Calculator",
    description: "Sum up your grocery items to estimate total bill.",
    category: "everyday-life",
    subcategory: "home-economics",
    inputs: [
      { id: "item1", label: "Item 1 Price", type: "number", defaultValue: 5 },
      { id: "q1", label: "Item 1 Quantity", type: "number", defaultValue: 2 },
      { id: "item2", label: "Item 2 Price", type: "number", defaultValue: 12 },
      { id: "q2", label: "Item 2 Quantity", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "Total Bill", formula: "(item1 * q1) + (item2 * q2)", unit: "$" }
    ]
  },
  {
    id: "led-savings-calculator",
    name: "LED Savings Calculator",
    description: "Calculate how much you save by switching to LED bulbs.",
    category: "everyday-life",
    subcategory: "home-economics",
    inputs: [
      { id: "old", label: "Incandescent Wattage", type: "number", defaultValue: 60 },
      { id: "led", label: "LED Wattage", type: "number", defaultValue: 9 },
      { id: "hrs", label: "Hours per day", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "save_kwh", label: "Annual kWh Saved", formula: "((old - led) / 1000) * hrs * 365", unit: "kWh" }
    ]
  },
  {
    id: "unit-price-calculator",
    name: "Unit Price Calculator",
    description: "Compare value between products of different sizes.",
    category: "everyday-life",
    subcategory: "home-economics",
    inputs: [
      { id: "price", label: "Total Price", type: "number", defaultValue: 10.99 },
      { id: "qty", label: "Quantity (oz/lb/ml)", type: "number", defaultValue: 32 }
    ],
    outputs: [
      { id: "unit", label: "Price per Unit", formula: "price / qty", unit: "/unit" }
    ]
  },

  // PRODUCTIVITY
  {
    id: "acceptance-rate-calculator",
    name: "Acceptance Rate Calculator",
    description: "Calculate selectivity for schools or jobs.",
    category: "everyday-life",
    subcategory: "productivity",
    inputs: [
      { id: "acc", label: "Number Accepted", type: "number", defaultValue: 500 },
      { id: "app", label: "Total Applicants", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "rate", label: "Acceptance Rate", formula: "(acc / app) * 100", unit: "%" }
    ]
  },
  {
    id: "meeting-cost-calculator",
    name: "Meeting Cost Calculator",
    description: "Estimate the labor cost of a corporate meeting.",
    category: "everyday-life",
    subcategory: "productivity",
    inputs: [
      { id: "ppl", label: "Attendees", type: "number", defaultValue: 8 },
      { id: "wage", label: "Avg Hourly Wage", type: "number", defaultValue: 50 },
      { id: "hrs", label: "Duration", type: "number", defaultValue: 1, unit: "hr" }
    ],
    outputs: [
      { id: "cost", label: "Total Meeting Cost", formula: "ppl * wage * hrs", unit: "$" }
    ]
  },
  {
    id: "pomodoro-technique-calculator",
    name: "Pomodoro Technique Calculator",
    description: "Plan your deep work sessions using the Pomodoro method.",
    category: "everyday-life",
    subcategory: "productivity",
    inputs: [
      { id: "sessions", label: "Work Sessions", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "total", label: "Total Duration", formula: "(sessions * 25) + ((sessions - 1) * 5) + 30", unit: "min" }
    ],
    theory: "The Pomodoro Technique uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. This helps maintain focus and prevents mental fatigue."
  },
  {
    id: "time-card-calculator",
    name: "Time Card Calculator",
    description: "Calculate total hours worked in a day.",
    category: "everyday-life",
    subcategory: "productivity",
    inputs: [
      { id: "start", label: "Start Hour (24h)", type: "number", defaultValue: 9 },
      { id: "end", label: "End Hour (24h)", type: "number", defaultValue: 17 }
    ],
    outputs: [
      { id: "hrs", label: "Total Hours", formula: "end - start", unit: "hrs" }
    ]
  },
  {
    id: "words-per-minute-calculator",
    name: "Words per Minute Calculator",
    description: "Calculate typing speed.",
    category: "everyday-life",
    subcategory: "productivity",
    inputs: [
      { id: "words", label: "Words Typed", type: "number", defaultValue: 300 },
      { id: "min", label: "Minutes", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "wpm", label: "Typing Speed", formula: "words / min", unit: "WPM" }
    ]
  },

  // LEISURE & FUN
  {
    id: "audiobooks-calculator",
    name: "Audiobooks Calculator",
    description: "Estimate how long it will take to listen to a book at higher speeds.",
    category: "everyday-life",
    subcategory: "leisure-fun",
    inputs: [
      { id: "hrs", label: "Total Book Duration (hrs)", type: "number", defaultValue: 10 },
      { id: "speed", label: "Playback Speed", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "listen", label: "Listening Time", formula: "hrs / speed", unit: "hrs" }
    ]
  },
  {
    id: "hammock-hang-calculator",
    name: "Hammock Hang Calculator",
    description: "Calculate the ideal distance and height for hanging a hammock.",
    category: "everyday-life",
    subcategory: "leisure-fun",
    inputs: [
      { id: "dist", label: "Distance between trees", type: "number", defaultValue: 15, unit: "ft" }
    ],
    outputs: [
      { id: "height", label: "Anchor Height", formula: "dist * 0.4", unit: "ft" }
    ]
  },
  {
    id: "helium-balloons-calculator",
    name: "Helium Balloons Calculator",
    description: "Calculate how many balloons you need to lift an object.",
    category: "everyday-life",
    subcategory: "leisure-fun",
    inputs: [
      { id: "weight", label: "Object Weight (g)", type: "number", defaultValue: 100 },
      { id: "size", label: "Balloon Diameter (in)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "count", label: "Balloons Needed", formula: "weight / 14", unit: "balloons" }
    ]
  },
  {
    id: "tent-size-calculator",
    name: "Tent Size Calculator",
    description: "Determine the required tent area for a group.",
    category: "everyday-life",
    subcategory: "leisure-fun",
    inputs: [
      { id: "ppl", label: "Number of People", type: "number", defaultValue: 4 },
      { id: "gear", label: "Gear Space", type: "select", options: [
        { label: "Minimal (30 sq ft/person)", value: 30 },
        { label: "Standard (40 sq ft/person)", value: 40 },
        { label: "Spacious (50 sq ft/person)", value: 50 }
      ], defaultValue: 40 }
    ],
    outputs: [
      { id: "area", label: "Total Tent Area", formula: "ppl * gear", unit: "sq ft" }
    ]
  },
  {
    id: "tv-series-duration-calculator",
    name: "TV Series Duration Calculator",
    description: "Calculate the total time needed to binge a series.",
    category: "everyday-life",
    subcategory: "leisure-fun",
    inputs: [
      { id: "ep", label: "Number of Episodes", type: "number", defaultValue: 10 },
      { id: "len", label: "Episode Length (min)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "total", label: "Total Duration", formula: "ep * len", unit: "min" },
      { id: "hrs", label: "Duration in Hours", formula: "(ep * len) / 60", unit: "hrs" }
    ]
  },

  // PERSONAL HYGIENE
  {
    id: "bath-vs-shower-calculator",
    name: "Bath vs Shower Calculator",
    description: "Compare water usage between taking a bath and a shower.",
    category: "everyday-life",
    subcategory: "personal-hygiene",
    inputs: [
      { id: "shower_min", label: "Shower Time (min)", type: "number", defaultValue: 10 },
      { id: "flow", label: "Shower Flow Rate (gal/min)", type: "number", defaultValue: 2.5 }
    ],
    outputs: [
      { id: "shower_gal", label: "Shower Usage", formula: "shower_min * flow", unit: "gal" },
      { id: "bath_gal", label: "Bath Usage (standard)", formula: "35", unit: "gal" }
    ]
  },
  {
    id: "hair-growth-calculator",
    name: "Hair Growth Calculator",
    description: "Estimate how long your hair will be in a few months.",
    category: "everyday-life",
    subcategory: "personal-hygiene",
    inputs: [
      { id: "current", label: "Current Length", type: "number", defaultValue: 10, unit: "cm" },
      { id: "months", label: "Months to wait", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "final", label: "Estimated Length", formula: "current + (months * 1.25)", unit: "cm" }
    ]
  },
  {
    id: "shower-cost-calculator",
    name: "Shower Cost Calculator",
    description: "Calculate the cost of water and heating for a shower.",
    category: "everyday-life",
    subcategory: "personal-hygiene",
    inputs: [
      { id: "min", label: "Shower Duration", type: "number", defaultValue: 10 },
      { id: "rate", label: "Combined Water/Heat Rate", type: "number", defaultValue: 0.05, unit: "$/min" }
    ],
    outputs: [
      { id: "cost", label: "Total Cost", formula: "min * rate", unit: "$" }
    ]
  },
  {
    id: "sunscreen-calculator",
    name: "Sunscreen Calculator",
    description: "Calculate how much sunscreen you need for full body coverage.",
    category: "everyday-life",
    subcategory: "personal-hygiene",
    inputs: [
      { id: "weight", label: "Body Weight (lb)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "oz", label: "Sunscreen Needed", formula: "weight / 150", unit: "oz" }
    ],
    theory: "The standard recommendation for an average adult is roughly 1 ounce (a shot glass full) of sunscreen to cover the entire body."
  },

  // TIME & DATE
  {
    id: "age-calculator",
    name: "Age Calculator",
    description: "Calculate exact age in years, months, and days.",
    category: "everyday-life",
    subcategory: "time-date",
    inputs: [
      { id: "year", label: "Birth Year", type: "number", defaultValue: 1995 }
    ],
    outputs: [
      { id: "age", label: "Current Age", formula: "2024 - year", unit: "years" }
    ]
  },
  {
    id: "business-days-calculator",
    name: "Business Days Calculator",
    description: "Estimate working days between two dates.",
    category: "everyday-life",
    subcategory: "time-date",
    inputs: [
      { id: "days", label: "Total Calendar Days", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "biz", label: "Estimated Business Days", formula: "days * (5/7)", unit: "days" }
    ]
  },
  {
    id: "leap-year-calculator",
    name: "Leap Year Calculator",
    description: "Check if a specific year is a leap year.",
    category: "everyday-life",
    subcategory: "time-date",
    inputs: [
      { id: "year", label: "Year to check", type: "number", defaultValue: 2024 }
    ],
    outputs: [
      { id: "is_leap", label: "Result", formula: "year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 1 : 0", unit: "" }
    ],
    resultInterpretation: "{is_leap === 1 ? 'Yes, it is a leap year.' : 'No, it is not a leap year.'}"
  },
  {
    id: "time-difference-calculator",
    name: "Time Difference Calculator",
    description: "Calculate hours and minutes between two times.",
    category: "everyday-life",
    subcategory: "time-date",
    inputs: [
      { id: "h1", label: "Start Hour (0-23)", type: "number", defaultValue: 9 },
      { id: "h2", label: "End Hour (0-23)", type: "number", defaultValue: 17 }
    ],
    outputs: [
      { id: "diff", label: "Hours Difference", formula: "h2 - h1", unit: "hrs" }
    ]
  },

  // READING
  {
    id: "reading-speed-calculator",
    name: "Reading Speed Calculator",
    description: "Calculate your reading speed in words per minute.",
    category: "everyday-life",
    subcategory: "reading",
    inputs: [
      { id: "words", label: "Words Read", type: "number", defaultValue: 500 },
      { id: "min", label: "Minutes", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "wpm", label: "Reading Speed", formula: "words / min", unit: "WPM" }
    ]
  },
  {
    id: "reading-time-calculator",
    name: "Reading Time Calculator",
    description: "Estimate how long it will take to finish a book.",
    category: "everyday-life",
    subcategory: "reading",
    inputs: [
      { id: "total", label: "Total Word Count", type: "number", defaultValue: 50000 },
      { id: "wpm", label: "Your WPM", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "time", label: "Total Reading Time", formula: "total / wpm", unit: "min" },
      { id: "hrs", label: "Time in Hours", formula: "total / wpm / 60", unit: "hrs" }
    ]
  },

  // OTHER
  {
    id: "battery-charge-time-calculator",
    name: "Battery Charge Time Calculator",
    description: "Calculate how long it takes to charge a battery.",
    category: "everyday-life",
    subcategory: "other-everyday",
    scientificFormula: "t = \\frac{C}{I}",
    inputs: [
      { id: "cap", label: "Battery Capacity (mAh)", type: "number", defaultValue: 3000 },
      { id: "current", label: "Charger Output (mA)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "hrs", label: "Charging Time", formula: "cap / current", unit: "hrs" }
    ]
  },
  {
    id: "expiration-date-calculator",
    name: "Expiration Date Calculator",
    description: "Calculate expiration from manufacture date and shelf life.",
    category: "everyday-life",
    subcategory: "other-everyday",
    inputs: [
      { id: "months", label: "Shelf Life (months)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "days", label: "Total Shelf Days", formula: "months * 30", unit: "days" }
    ]
  },
  {
    id: "well-volume-calculator",
    name: "Well Volume Calculator",
    description: "Calculate the volume of water in a cylindrical well.",
    category: "everyday-life",
    subcategory: "other-everyday",
    scientificFormula: "V = \\pi r^2 h",
    inputs: [
      { id: "r", label: "Well Radius", type: "number", defaultValue: 3, unit: "ft" },
      { id: "h", label: "Water Depth", type: "number", defaultValue: 20, unit: "ft" }
    ],
    outputs: [
      { id: "vol", label: "Water Volume", formula: "3.14159 * r^2 * h", unit: "ft³" },
      { id: "gal", label: "Gallons", formula: "3.14159 * r^2 * h * 7.48", unit: "gal" }
    ]
  }
];
