import { CalculatorConfig } from "./calculator-types";

export const ECOLOGY_CALCULATORS: CalculatorConfig[] = [
  // ECO FOOTPRINT
  {
    id: "ai-water-footprint-calculator",
    name: "AI Water Footprint Calculator",
    description: "Estimate the water consumption associated with training and running AI models.",
    category: "ecology",
    subcategory: "eco-footprint",
    scientificFormula: "Total\\ Water = Queries \\times Water\\ per\\ Query",
    inputs: [
      { id: "queries", label: "Number of AI Queries", type: "number", defaultValue: 100 },
      { id: "water_per", label: "Water per Query (mL)", type: "number", defaultValue: 5, helpText: "Standard large models use approx 5mL per chat session for cooling." }
    ],
    outputs: [
      { id: "liters", label: "Total Water Used", formula: "(queries * water_per) / 1000", unit: "L" },
      { id: "yearly", label: "Estimated Yearly Usage", formula: "((queries * water_per) / 1000) * 365", unit: "L/year" }
    ],
    theory: "Data centers that house AI infrastructure require massive amounts of water for cooling. Every chat prompt requires significant computing power, which generates heat that must be dissipated, often using evaporative cooling systems.",
    applications: ["Sustainable AI development", "Corporate ESG reporting", "Personal digital footprint tracking"],
    resultInterpretation: "Your AI usage consumes {liters} liters of water. For context, a standard 500mL water bottle is filled {liters * 2} times to support this computation."
  },
  {
    id: "bag-footprint-calculator",
    name: "Bag Footprint Calculator",
    description: "Calculate the carbon emissions and waste from plastic and paper bag usage.",
    category: "ecology",
    subcategory: "eco-footprint",
    scientificFormula: "CO_2 = Count \\times Emission\\ Factor",
    inputs: [
      { id: "count", label: "Bags Used per Week", type: "number", defaultValue: 10 },
      { id: "type", label: "Bag Type", type: "select", options: [
        { label: "Single-use Plastic (LDPE)", value: 0.033 },
        { label: "Paper Bag", value: 0.012 },
        { label: "Reusable Plastic (Polypropylene)", value: 0.5 }
      ], defaultValue: 0.033 }
    ],
    outputs: [
      { id: "annual_co2", label: "Annual CO2 Impact", formula: "count * type * 52", unit: "kg CO2" }
    ]
  },
  {
    id: "christmas-tree-footprint-calculator",
    name: "Christmas Tree Footprint Calculator",
    description: "Compare the environmental impact of real vs. artificial Christmas trees.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "type", label: "Tree Type", type: "select", options: [
        { label: "Real Tree (Composted)", value: 3.5 },
        { label: "Real Tree (Landfill)", value: 16 },
        { label: "Artificial Tree", value: 40 }
      ], defaultValue: 3.5 }
    ],
    outputs: [
      { id: "co2", label: "Total CO2 Impact", formula: "type", unit: "kg CO2" }
    ],
    theory: "The impact of a real tree depends on its disposal. Landfilled trees release methane, while composted ones are nearly carbon-neutral. Artificial trees have a high manufacturing footprint but can be lower impact if used for over 10 years."
  },
  {
    id: "covid-19-waste-calculator",
    name: "COVID-19 Waste Calculator",
    description: "Estimate PPE waste generated from health protocols.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "masks", label: "Masks per Day", type: "number", defaultValue: 1 },
      { id: "gloves", label: "Gloves per Day", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "kg", label: "Annual Plastic Waste", formula: "((masks * 4) + (gloves * 3.5)) * 365 / 1000", unit: "kg" }
    ]
  },
  {
    id: "cryptocurrency-footprint-calculator",
    name: "Cryptocurrency Footprint Calculator",
    description: "Analyze the carbon footprint of crypto transactions and mining.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "energy", label: "Daily Energy Use (kWh)", type: "number", defaultValue: 50 },
      { id: "mix", label: "Grid Carbon Intensity", type: "number", defaultValue: 0.475, helpText: "World average is ~0.475 kg CO2/kWh" }
    ],
    outputs: [
      { id: "co2", label: "Daily Carbon Footprint", formula: "energy * mix", unit: "kg CO2" },
      { id: "annual", label: "Annual Footprint", formula: "energy * mix * 365 / 1000", unit: "tons CO2" }
    ],
    theory: "Proof-of-Work (PoW) cryptocurrencies like Bitcoin require immense electrical power to secure the network. The carbon footprint depends heavily on the energy source used for mining."
  },
  {
    id: "flight-carbon-footprint-calculator",
    name: "Flight Carbon Footprint Calculator",
    description: "Calculate CO2 emissions for air travel based on distance and class.",
    category: "ecology",
    subcategory: "eco-footprint",
    scientificFormula: "CO_2 = Distance \\times Class\\ Factor",
    inputs: [
      { id: "dist", label: "Distance (one way)", type: "number", defaultValue: 1000, unit: "km" },
      { id: "class", label: "Travel Class", type: "select", options: [
        { label: "Economy", value: 0.15 },
        { label: "Premium Economy", value: 0.24 },
        { label: "Business", value: 0.43 },
        { label: "First Class", value: 0.60 }
      ], defaultValue: 0.15 }
    ],
    outputs: [
      { id: "co2", label: "CO2 Emissions", formula: "dist * class", unit: "kg" },
      { id: "trees", label: "Trees to Offset", formula: "ceil((dist * class) / 20)", unit: "trees" }
    ],
    resultInterpretation: "This flight releases {co2} kg of CO2. To offset this, you would need to plant {trees} trees and ensure they grow for at least 10 years."
  },
  {
    id: "hand-drying-footprint-calculator",
    name: "Hand Drying Footprint Calculator",
    description: "Compare the eco-impact of paper towels vs. hand dryers.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "method", label: "Method", type: "select", options: [
        { label: "Paper Towels (2 sheets)", value: 0.015 },
        { label: "Standard Warm Air Dryer", value: 0.020 },
        { label: "High-speed Jet Dryer", value: 0.003 }
      ], defaultValue: 0.015 },
      { id: "freq", label: "Uses per Day", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "annual", label: "Annual CO2 Impact", formula: "method * freq * 365", unit: "kg CO2" }
    ]
  },
  {
    id: "kaya-identity-calculator",
    name: "Kaya Identity Calculator",
    description: "A mathematical identity used to estimate total CO2 emissions from human activity.",
    category: "ecology",
    subcategory: "eco-footprint",
    scientificFormula: "CO_2 = P \\times \\frac{G}{P} \\times \\frac{E}{G} \\times \\frac{C}{E}",
    inputs: [
      { id: "p", label: "Population (Billions)", type: "number", defaultValue: 8 },
      { id: "gdp", label: "GDP per Capita ($)", type: "number", defaultValue: 12000 },
      { id: "ei", label: "Energy Intensity (MJ/$)", type: "number", defaultValue: 5 },
      { id: "ci", label: "Carbon Intensity (g CO2/MJ)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "total", label: "Total Global CO2", formula: "(p * gdp * ei * ci) / 1e6", unit: "Gt CO2" }
    ],
    theory: "Developed by Yoichi Kaya, this identity decomposes emissions into population, wealth, energy efficiency, and fuel mix. It is used by the IPCC to create future climate scenarios."
  },
  {
    id: "meat-footprint-calculator",
    name: "Meat Footprint Calculator",
    description: "Estimate the environmental cost of different types of meat.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "weight", label: "Weight consumed per week", type: "number", defaultValue: 500, unit: "g" },
      { id: "type", label: "Meat Type", type: "select", options: [
        { label: "Beef", value: 60 },
        { label: "Lamb", value: 24 },
        { label: "Pork", value: 7 },
        { label: "Chicken", value: 6 }
      ], defaultValue: 60 }
    ],
    outputs: [
      { id: "co2", label: "Annual CO2 Impact", formula: "(weight / 1000) * type * 52", unit: "kg" },
      { id: "water", label: "Annual Water Footprint", formula: "(weight / 1000) * 15000 * 52", unit: "L" }
    ]
  },
  {
    id: "plastic-footprint-calculator",
    name: "Plastic Footprint Calculator",
    description: "Calculate your annual plastic waste generation.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "bottles", label: "Plastic Bottles / week", type: "number", defaultValue: 5 },
      { id: "wrappers", label: "Food Wrappers / day", type: "number", defaultValue: 2 },
      { id: "cups", label: "Disposable Cups / week", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "kg", label: "Annual Plastic Waste", formula: "(bottles * 25 * 52 + wrappers * 5 * 365 + cups * 15 * 52) / 1000", unit: "kg" }
    ]
  },
  {
    id: "vegan-footprint-calculator",
    name: "Vegan Footprint Calculator",
    description: "Calculate the resources saved by adopting a plant-based diet.",
    category: "ecology",
    subcategory: "eco-footprint",
    inputs: [
      { id: "days", label: "Vegan Days per Week", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "co2_save", label: "Annual CO2 Saved", formula: "days * 4.5 * 52", unit: "kg" },
      { id: "water_save", label: "Annual Water Saved", formula: "days * 4164 * 52", unit: "L" },
      { id: "land_save", label: "Annual Land Saved", formula: "days * 2.8 * 52", unit: "m²" }
    ],
    resultInterpretation: "By going vegan for {days} days a week, you save {co2_save} kg of CO2 annually—equivalent to driving a car for {co2_save * 4} km."
  },

  // RENEWABLE ENERGY
  {
    id: "hydroelectric-power-calculator",
    name: "Hydroelectric Power Calculator",
    description: "Calculate potential energy generation from flowing water.",
    category: "ecology",
    subcategory: "renewable-energy",
    scientificFormula: "P = \\rho g h Q \\eta",
    inputs: [
      { id: "flow", label: "Flow Rate (Q)", type: "number", defaultValue: 10, unit: "m³/s" },
      { id: "head", label: "Head Height (h)", type: "number", defaultValue: 50, unit: "m" },
      { id: "eff", label: "Efficiency (η)", type: "number", defaultValue: 0.9 }
    ],
    outputs: [
      { id: "power", label: "Power Output", formula: "1000 * 9.81 * head * flow * eff / 1000", unit: "kW" }
    ],
    theory: "Hydroelectric power is generated by using the gravitational force of falling or flowing water. The potential energy is converted into mechanical energy via a turbine, then into electricity via a generator."
  },
  {
    id: "solar-panel-calculator",
    name: "Solar Panel Calculator",
    description: "Estimate energy production and savings from a rooftop solar array.",
    category: "ecology",
    subcategory: "renewable-energy",
    scientificFormula: "E = A \\times r \\times H \\times PR",
    inputs: [
      { id: "area", label: "Panel Area", type: "number", defaultValue: 20, unit: "m²" },
      { id: "sun", label: "Avg Sunlight Hours", type: "number", defaultValue: 5, unit: "hr/day" },
      { id: "eff", label: "Panel Efficiency", type: "number", defaultValue: 0.18 }
    ],
    outputs: [
      { id: "daily", label: "Daily Energy", formula: "area * eff * sun", unit: "kWh" },
      { id: "annual", label: "Annual Energy", formula: "area * eff * sun * 365", unit: "kWh" }
    ]
  },
  {
    id: "solar-panel-wattage-calculator",
    name: "Solar Panel Wattage Calculator",
    description: "Calculate the electrical power output of a solar panel.",
    category: "ecology",
    subcategory: "renewable-energy",
    scientificFormula: "W = V \\times I",
    inputs: [
      { id: "v", label: "Voltage (V)", type: "number", defaultValue: 18 },
      { id: "i", label: "Current (Amps)", type: "number", defaultValue: 5.5 }
    ],
    outputs: [
      { id: "w", label: "Panel Wattage", formula: "v * i", unit: "Watts" }
    ]
  },
  {
    id: "wind-turbine-calculator",
    name: "Wind Turbine Calculator",
    description: "Calculate the theoretical power available in the wind for a turbine.",
    category: "ecology",
    subcategory: "renewable-energy",
    scientificFormula: "P = \\frac{1}{2} \\rho A v^3",
    inputs: [
      { id: "v", label: "Wind Speed", type: "number", defaultValue: 10, unit: "m/s" },
      { id: "r", label: "Blade Radius", type: "number", defaultValue: 40, unit: "m" },
      { id: "eff", label: "Cp (Power Coeff)", type: "number", defaultValue: 0.4, helpText: "Betz Limit is 0.59" }
    ],
    outputs: [
      { id: "power", label: "Power Output", formula: "0.5 * 1.225 * (pi * r^2) * (v^3) * eff / 1000", unit: "kW" }
    ]
  },
  {
    id: "wind-turbine-profit-calculator",
    name: "Wind Turbine Profit Calculator",
    description: "Calculate the financial return of a wind energy investment.",
    category: "ecology",
    subcategory: "renewable-energy",
    inputs: [
      { id: "prod", label: "Annual Production", type: "number", defaultValue: 5000000, unit: "kWh" },
      { id: "price", label: "Sell Price", type: "number", defaultValue: 0.12, unit: "$/kWh" },
      { id: "maint", label: "Annual Maintenance", type: "number", defaultValue: 50000, unit: "$" }
    ],
    outputs: [
      { id: "profit", label: "Annual Profit", formula: "(prod * price) - maint", unit: "$" }
    ]
  },

  // SUSTAINABLE LIVING
  {
    id: "books-vs-e-books-calculator",
    name: "Books vs e-Books Calculator",
    description: "Determine the break-even point where an e-reader becomes more eco-friendly than paper books.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "books", label: "Books read per year", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "breakeven", label: "Years to Break Even", formula: "168 / (books * 7.5)", unit: "years" }
    ],
    theory: "Producing one Kindle releases approx 168kg of CO2, while a paper book releases approx 7.5kg. If you read many books, the electronic device eventually offsets its higher initial footprint."
  },
  {
    id: "car-vs-bike-calculator",
    name: "Car vs Bike Calculator",
    description: "Calculate CO2 and money saved by cycling instead of driving.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "dist", label: "Daily Commute", type: "number", defaultValue: 10, unit: "km" },
      { id: "eff", label: "Car Efficiency (L/100km)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "co2_save", label: "Daily CO2 Saved", formula: "dist * 0.25", unit: "kg" },
      { id: "cash_save", label: "Monthly Cash Saved", formula: "(dist * 22 * eff / 100) * 1.5", unit: "$" }
    ]
  },
  {
    id: "drip-faucet-calculator",
    name: "Drip Faucet Calculator",
    description: "Calculate how much water is wasted by a leaking tap over time.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "drips", label: "Drips per minute", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "daily", label: "Daily Waste", formula: "drips * 1440 / 4000", unit: "L" },
      { id: "yearly", label: "Annual Waste", formula: "(drips * 1440 / 4000) * 365", unit: "L" }
    ]
  },
  {
    id: "plug-in-hybrid-economy-calculator",
    name: "Plug-in Hybrid Economy Calculator",
    description: "Calculate effective MPG for a PHEV considering both electric and gas usage.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "e_dist", label: "Miles on Electric", type: "number", defaultValue: 30 },
      { id: "g_dist", label: "Miles on Gas", type: "number", defaultValue: 20 },
      { id: "gal", label: "Gallons Used", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "mpg", label: "Combined MPG", formula: "(e_dist + g_dist) / gal", unit: "MPG" }
    ]
  },
  {
    id: "tree-benefits-calculator",
    name: "Tree Benefits Calculator",
    description: "Quantify the environmental services provided by trees.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "count", label: "Number of Mature Trees", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "co2", label: "Annual CO2 Sequestration", formula: "count * 22", unit: "kg/year" },
      { id: "o2", label: "Annual Oxygen Produced", formula: "count * 100", unit: "kg/year" }
    ]
  },
  {
    id: "water-demand-calculator",
    name: "Water Demand Calculator",
    description: "Estimate water needs for a household or community.",
    category: "ecology",
    subcategory: "sustainable-living",
    inputs: [
      { id: "ppl", label: "Number of People", type: "number", defaultValue: 4 },
      { id: "daily", label: "Liters per Person", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "total", label: "Daily Demand", formula: "ppl * daily", unit: "L" }
    ]
  },

  // ECO SCIENCE & HEALTH
  {
    id: "carrying-capacity-calculator",
    name: "Carrying Capacity Calculator",
    description: "Determine the maximum population size an environment can sustain indefinitely.",
    category: "ecology",
    subcategory: "other-ecology",
    scientificFormula: "K = \\frac{R}{C}",
    inputs: [
      { id: "res", label: "Total Resource Supply", type: "number", defaultValue: 10000 },
      { id: "cons", label: "Consumption per Individual", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "k", label: "Carrying Capacity (K)", formula: "res / cons", unit: "individuals" }
    ],
    theory: "Carrying capacity is the maximum population size of a biological species that can be sustained by that specific environment, given the food, habitat, water, and other resources available."
  },
  {
    id: "co2-breathing-emission-calculator",
    name: "CO₂ Breathing Emission Calculator",
    description: "Calculate the amount of CO2 humans release just by breathing.",
    category: "ecology",
    subcategory: "other-ecology",
    inputs: [
      { id: "time", label: "Time Period", type: "number", defaultValue: 24, unit: "hrs" }
    ],
    outputs: [
      { id: "co2", label: "CO2 Expelled", formula: "time * 40", unit: "g" }
    ],
    theory: "An average human exhales about 1kg of CO2 per day. While this is part of the biogenic carbon cycle (we eat plants that took that CO2 from the air), it is an interesting physiological metric."
  },
  {
    id: "fish-mercury-calculator",
    name: "Fish Mercury Calculator",
    description: "Estimate mercury exposure from fish consumption.",
    category: "ecology",
    subcategory: "other-ecology",
    inputs: [
      { id: "weight", label: "Fish Consumed (g)", type: "number", defaultValue: 150 },
      { id: "conc", label: "Mercury Conc. (ppm)", type: "number", defaultValue: 0.1, helpText: "Tuna is ~0.35, Salmon is ~0.02" }
    ],
    outputs: [
      { id: "mcg", label: "Mercury Intake", formula: "weight * conc", unit: "µg" }
    ]
  },
  {
    id: "lotka-volterra-calculator",
    name: "Lotka-Volterra Calculator",
    description: "Model the population dynamics of predator and prey species.",
    category: "ecology",
    subcategory: "other-ecology",
    scientificFormula: "\\frac{dx}{dt} = \\alpha x - \\beta xy",
    inputs: [
      { id: "prey", label: "Prey Population", type: "number", defaultValue: 100 },
      { id: "pred", label: "Predator Population", type: "number", defaultValue: 10 },
      { id: "rate", label: "Interaction Rate", type: "number", defaultValue: 0.01 }
    ],
    outputs: [
      { id: "change", label: "Prey Change Rate", formula: "0.5 * prey - rate * prey * pred", unit: "inds/dt" }
    ],
    theory: "The Lotka-Volterra equations, also known as the predator-prey equations, are a pair of first-order nonlinear differential equations, frequently used to describe the dynamics of biological systems in which two species interact."
  },
  {
    id: "shannon-diversity-index-calculator",
    name: "Shannon Diversity Index Calculator",
    description: "Measure the biodiversity of an ecosystem based on species richness and evenness.",
    category: "ecology",
    subcategory: "other-ecology",
    scientificFormula: "H' = -\\sum p_i \\ln p_i",
    inputs: [
      { id: "s1", label: "Species A Population", type: "number", defaultValue: 50 },
      { id: "s2", label: "Species B Population", type: "number", defaultValue: 30 },
      { id: "s3", label: "Species C Population", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "h", label: "Shannon Index (H')", formula: "-((s1/(s1+s2+s3))*log(s1/(s1+s2+s3)) + (s2/(s1+s2+s3))*log(s2/(s1+s2+s3)) + (s3/(s1+s2+s3))*log(s3/(s1+s2+s3)))", unit: "" }
    ],
    theory: "The Shannon index is a popular metric in ecology to track biodiversity. A higher value indicates a more diverse and balanced ecosystem."
  },
  {
    id: "smog-calculator",
    name: "Smog Calculator",
    description: "Convert air pollution exposure (AQI) into cigarette equivalents.",
    category: "ecology",
    subcategory: "other-ecology",
    inputs: [
      { id: "aqi", label: "Current AQI", type: "number", defaultValue: 150 },
      { id: "time", label: "Hours Exposed", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "cigs", label: "Cigarette Equivalent", formula: "(aqi / 22) * (time / 24)", unit: "cigarettes" }
    ],
    resultInterpretation: "Breathing air with an AQI of {aqi} for {time} hours is health-equivalent to smoking {cigs} cigarettes."
  }
];
