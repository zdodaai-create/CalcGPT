import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_EARTH_SEASONS: CalculatorConfig[] = [
  {
    id: "antipode-calculator", name: "Antipode Calculator", description: "Calculate the exact opposite side of the Earth.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Lat}_2 = -\\text{Lat}_1 \\quad \\text{Lon}_2 = \\text{Lon}_1 \\pm 180^{\\circ}",
    inputs: [
      { id: "lat", label: "Latitude (°N/S)", type: "number", defaultValue: 40.7128 },
      { id: "lon", label: "Longitude (°E/W)", type: "number", defaultValue: -74.0060 }
    ],
    outputs: [
      { id: "alat", label: "Antipode Latitude", formula: "lat * -1", unit: "°" },
      { id: "alon", label: "Antipode Longitude", formula: "lon > 0 ? lon - 180 : lon + 180", unit: "°" }
    ],
    theory: "An antipode is the diametrically opposite point on Earth. Latitude flips sign, and Longitude shifts by 180 degrees.",
    faq: [],
    seoMeta: { title: "Antipode Calculator", description: "Find the opposite side of the Earth.", keywords: "antipode calculator" }
  },
  {
    id: "azimuth-calculator", name: "Azimuth Calculator", description: "Calculate basic azimuth compass direction.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Azimuth} = \\arctan2(\\sin(\\Delta\\lambda) \\cdot \\cos(\\phi_2), \\dots)",
    inputs: [
      { id: "deg", label: "Degrees from North", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "back", label: "Back Azimuth", formula: "deg < 180 ? deg + 180 : deg - 180", unit: "°" }
    ],
    theory: "Azimuth is the horizontal angle or direction of a compass bearing. Back azimuth is exactly 180 degrees opposite.",
    faq: [],
    seoMeta: { title: "Azimuth Calculator", description: "Calculate back azimuth.", keywords: "azimuth calculator" }
  },
  {
    id: "earthquake-calculator", name: "Earthquake Calculator", description: "Calculate energy difference between Richter scale magnitudes.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Energy Ratio} = 10^{1.5 \\times (M_2 - M_1)}",
    inputs: [
      { id: "m1", label: "Magnitude 1", type: "number", defaultValue: 5.0 },
      { id: "m2", label: "Magnitude 2", type: "number", defaultValue: 6.0 }
    ],
    outputs: [
      { id: "amp", label: "Amplitude Multiplier", formula: "10^(m2 - m1)", unit: "x" },
      { id: "energy", label: "Energy Multiplier", formula: "10^(1.5 * (m2 - m1))", unit: "x stronger" }
    ],
    theory: "The Richter scale is logarithmic. A 1.0 increase in magnitude means 10x more shaking amplitude and 31.6x more energy release.",
    faq: [],
    seoMeta: { title: "Earthquake Energy Calculator", description: "Compare earthquake magnitudes.", keywords: "earthquake calculator, richter scale" }
  },
  {
    id: "latitude-longitude-distance-calculator", name: "Latitude Longitude Distance Calculator", description: "Estimate distance between coordinates.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Haversine Formula}",
    inputs: [
      { id: "dlat", label: "Difference in Latitude (°)", type: "number", defaultValue: 1 },
      { id: "dlon", label: "Difference in Longitude (°)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "km", label: "Approx Distance", formula: "sqrt((dlat * 111)^2 + (dlon * 111 * cos(45 * (3.14/180)))^2)", unit: "km" }
    ],
    theory: "Each degree of latitude is roughly 111 km. Longitude distance varies by latitude (cos of latitude). This is a flat-earth approximation.",
    faq: [],
    seoMeta: { title: "Coordinate Distance Calculator", description: "Calculate distance between lat/lon.", keywords: "latitude longitude distance" }
  },
  {
    id: "rainfall-calculator", name: "Rainfall Calculator", description: "Convert rainfall depth to volume over an area.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "V = A \\times d",
    inputs: [
      { id: "a", label: "Roof Area (sq ft)", type: "number", defaultValue: 1000 },
      { id: "in", label: "Rainfall (inches)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "gal", label: "Collected Water", formula: "(a * (in / 12)) * 7.48", unit: "gallons" }
    ],
    theory: "1 cubic foot of water equals 7.48 gallons. Volume is Area times Depth.",
    faq: [],
    seoMeta: { title: "Rainfall Calculator", description: "Calculate rainwater collection.", keywords: "rainfall calculator" }
  },
  {
    id: "rain-to-snow-calculator", name: "Rain to Snow Calculator", description: "Estimate snow accumulation from liquid equivalent.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Snow} = \\text{Rain} \\times \\text{Ratio}",
    inputs: [
      { id: "rain", label: "Liquid Precipitation (inches)", type: "number", defaultValue: 1 },
      { id: "temp", label: "Temperature (°F)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "snow", label: "Estimated Snow Accumulation", formula: "rain * (temp > 32 ? 0 : (temp > 25 ? 10 : 15))", unit: "inches" }
    ],
    theory: "The standard rule of thumb is 10 inches of snow for 1 inch of rain near freezing, rising to 15:1 or 20:1 for colder, drier conditions.",
    faq: [],
    seoMeta: { title: "Rain to Snow Calculator", description: "Convert rain to snow depth.", keywords: "rain to snow calculator" }
  },
  {
    id: "sunbathing-calculator", name: "Sunbathing Calculator", description: "Calculate safe sun exposure time based on UV index.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "\\text{Time} = \\frac{200 \\times \\text{Skin Type}}{\\text{UV Index}}",
    inputs: [
      { id: "uv", label: "UV Index", type: "number", defaultValue: 8 },
      { id: "spf", label: "Sunscreen SPF", type: "number", defaultValue: 30 },
      { id: "skin", label: "Skin Type Factor (1-4)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "safe", label: "Safe Time", formula: "(200 * skin / uv) * spf", unit: "minutes" }
    ],
    theory: "SPF acts as a multiplier to your skin's natural burn time under a specific UV intensity.",
    faq: [],
    seoMeta: { title: "Sunbathing Calculator", description: "Calculate safe sun time.", keywords: "sunbathing calculator" }
  },
  {
    id: "wind-chill-calculator", name: "Wind Chill Calculator", description: "Calculate perceived temperature due to wind.",
    category: "other", subcategory: "earth-weather",
    scientificFormula: "W = 35.74 + 0.6215T - 35.75V^{0.16} + 0.4275T \\cdot V^{0.16}",
    inputs: [
      { id: "t", label: "Temperature (°F)", type: "number", defaultValue: 20 },
      { id: "v", label: "Wind Speed (mph)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "wc", label: "Wind Chill (°F)", formula: "35.74 + (0.6215 * t) - (35.75 * v^0.16) + (0.4275 * t * v^0.16)", unit: "°F" }
    ],
    theory: "The modern wind chill formula was updated in 2001 to better reflect heat loss from exposed skin.",
    faq: [],
    seoMeta: { title: "Wind Chill Calculator", description: "Calculate wind chill index.", keywords: "wind chill calculator" }
  },
  {
    id: "christmas-tree-calculator", name: "Christmas Tree Calculator", description: "Calculate lights and ornaments needed for a tree.",
    category: "other", subcategory: "seasons-holidays",
    scientificFormula: "\\text{Lights} = \\text{Height} \\times 100",
    inputs: [
      { id: "h", label: "Tree Height (ft)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "lights", label: "Recommended Lights", formula: "h * 100", unit: "bulbs" },
      { id: "orn", label: "Recommended Ornaments", formula: "h * 20", unit: "pieces" }
    ],
    theory: "A good rule of thumb is 100 lights and 20 ornaments per foot of Christmas tree height.",
    faq: [],
    seoMeta: { title: "Christmas Tree Calculator", description: "Calculate lights and ornaments.", keywords: "christmas tree calculator" }
  },
  {
    id: "vampire-apocalypse-calculator", name: "Vampire Apocalypse Calculator", description: "Calculate how quickly vampires take over.",
    category: "other", subcategory: "seasons-holidays",
    scientificFormula: "P_t = P_0 \\times (1 - r)^t",
    inputs: [
      { id: "pop", label: "Initial Population", type: "number", defaultValue: 8000000000 },
      { id: "vamp", label: "Starting Vampires", type: "number", defaultValue: 1 },
      { id: "rate", label: "Bites per month per vampire", type: "number", defaultValue: 1 },
      { id: "months", label: "Months Passed", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "vamps", label: "Total Vampires", formula: "vamp * (1 + rate)^months", unit: "" },
      { id: "surv", label: "Human Population Remaining", formula: "pop - (vamp * (1 + rate)^months)", unit: "" }
    ],
    theory: "Based on Costas Efthimiou's paper 'Cinema Fiction vs Physics Reality', vampire reproduction acts as exponential geometric progression. Humanity ends very quickly.",
    faq: [],
    seoMeta: { title: "Vampire Apocalypse Calculator", description: "Exponential vampire growth calculator.", keywords: "vampire calculator" }
  },
  {
    id: "snowman-calculator", name: "Snowman Calculator", description: "Calculate volume of snow needed for a snowman.",
    category: "other", subcategory: "seasons-holidays",
    scientificFormula: "V = \\sum \\frac{4}{3}\\pi r^3",
    inputs: [
      { id: "h", label: "Total Height (ft)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "vol", label: "Total Snow Volume", formula: "(4/3 * 3.14159 * (h * 0.25)^3) + (4/3 * 3.14159 * (h * 0.15)^3) + (4/3 * 3.14159 * (h * 0.10)^3)", unit: "cu ft" }
    ],
    theory: "Assuming three spheres representing 50%, 30%, and 20% of the total height respectively.",
    faq: [],
    seoMeta: { title: "Snowman Calculator", description: "Calculate snow needed.", keywords: "snowman calculator" }
  },
  {
    id: "zombie-invasion-calculator", name: "Zombie Invasion Calculator", description: "Calculate SIR epidemiological model for zombies.",
    category: "other", subcategory: "seasons-holidays",
    scientificFormula: "\\text{Zombies} = P \\times (1 - e^{-Rt})",
    inputs: [
      { id: "p", label: "City Population", type: "number", defaultValue: 1000000 },
      { id: "r", label: "Infection Rate (R0)", type: "number", defaultValue: 2.5 },
      { id: "d", label: "Days", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "z", label: "Estimated Zombies", formula: "p * (1 - 2.718^(-r * (d/30)))", unit: "" }
    ],
    theory: "Zombiism operates similarly to highly contagious diseases modeled by the SIR (Susceptible-Infected-Recovered) model.",
    faq: [],
    seoMeta: { title: "Zombie Invasion Calculator", description: "Zombie epidemiological modeling.", keywords: "zombie calculator" }
  }
];
