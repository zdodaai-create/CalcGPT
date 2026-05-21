import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_TECH: CalculatorConfig[] = [
  {
    id: "3d-printing-cost-calculator", name: "3D Printing Cost Calculator", description: "Calculate the total cost of a 3D print.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{Cost} = (\\text{Weight} \\times \\text{Material Price/g}) + (\\text{Time} \\times \\text{Electricity/hr}) + \\text{Markup}",
    inputs: [
      { id: "w", label: "Print Weight (g)", type: "number", defaultValue: 100 },
      { id: "mat", label: "Material Cost ($/kg)", type: "number", defaultValue: 20 },
      { id: "t", label: "Print Time (hours)", type: "number", defaultValue: 5 },
      { id: "pwr", label: "Printer Power (Watts)", type: "number", defaultValue: 200 },
      { id: "kwh", label: "Electricity Cost ($/kWh)", type: "number", defaultValue: 0.15 }
    ],
    outputs: [
      { id: "mat_c", label: "Material Cost", formula: "w * (mat / 1000)", unit: "$" },
      { id: "elec_c", label: "Electricity Cost", formula: "(pwr / 1000) * t * kwh", unit: "$" },
      { id: "tot", label: "Total Direct Cost", formula: "(w * (mat / 1000)) + ((pwr / 1000) * t * kwh)", unit: "$" }
    ],
    theory: "The true cost of 3D printing involves both the raw filament cost and the electricity used during the long printing hours.",
    faq: [],
    seoMeta: { title: "3D Printing Cost Calculator", description: "Calculate 3D printing costs including material and electricity.", keywords: "3d print cost calculator" }
  },
  {
    id: "amdahls-law-calculator", name: "Amdahl's Law Calculator", description: "Calculate theoretical speedup in parallel computing.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "S_{\\text{latency}} = \\frac{1}{(1 - p) + \\frac{p}{s}}",
    inputs: [
      { id: "p", label: "Parallel Portion (0-1)", type: "number", defaultValue: 0.95 },
      { id: "s", label: "Number of Processors", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "speedup", label: "Theoretical Speedup", formula: "1 / ((1 - p) + (p / s))", unit: "x" }
    ],
    theory: "Amdahl's Law states that the overall performance improvement gained by optimizing a single part of a system is limited by the fraction of time that the improved part is actually used.",
    faq: [],
    seoMeta: { title: "Amdahl's Law Calculator", description: "Calculate theoretical speedup of parallel execution.", keywords: "amdahls law calculator" }
  },
  {
    id: "ascii-converter", name: "ASCII Data Size Calculator", description: "Calculate byte size for ASCII characters.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{Bytes} = \\text{Characters}",
    inputs: [
      { id: "chars", label: "Number of ASCII Characters", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "bytes", label: "Total Size", formula: "chars", unit: "Bytes" },
      { id: "bits", label: "Total Bits", formula: "chars * 8", unit: "bits" }
    ],
    theory: "Standard ASCII encodes 128 specified characters into 7-bit integers, usually stored as 8-bit bytes.",
    faq: [],
    seoMeta: { title: "ASCII Size Calculator", description: "Calculate ASCII data size.", keywords: "ascii calculator" }
  },
  {
    id: "battery-capacity-calculator", name: "Battery Capacity Calculator", description: "Calculate total energy capacity.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "E = V \\times C",
    inputs: [
      { id: "v", label: "Nominal Voltage (V)", type: "number", defaultValue: 3.7 },
      { id: "mah", label: "Capacity (mAh)", type: "number", defaultValue: 3000 }
    ],
    outputs: [
      { id: "wh", label: "Energy Capacity", formula: "(v * mah) / 1000", unit: "Wh" }
    ],
    theory: "Energy (Watt-hours) is Voltage multiplied by Amp-hours.",
    faq: [],
    seoMeta: { title: "Battery Capacity Calculator", description: "Convert mAh to Watt-hours.", keywords: "battery capacity calculator, mah to wh" }
  },
  {
    id: "battery-life-calculator", name: "Battery Life Calculator", description: "Calculate how long a device will run on a battery.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{Life} = \\frac{\\text{Capacity}}{\\text{Load}} \\times 0.7",
    inputs: [
      { id: "mah", label: "Battery Capacity (mAh)", type: "number", defaultValue: 2000 },
      { id: "ma", label: "Device Current Consumption (mA)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "ideal", label: "Ideal Runtime", formula: "mah / ma", unit: "hours" },
      { id: "real", label: "Estimated Real Runtime (70% efficiency)", formula: "(mah / ma) * 0.7", unit: "hours" }
    ],
    theory: "Battery life is capacity divided by load, but real-world factors like voltage drop and temperature usually reduce actual runtime by ~30%.",
    faq: [],
    seoMeta: { title: "Battery Life Calculator", description: "Calculate how long a battery will last.", keywords: "battery life calculator" }
  },
  {
    id: "chmod-calculator", name: "Chmod Numeric Value Calculator", description: "Calculate Unix file permissions.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "P = 4r + 2w + 1x",
    inputs: [
      { id: "or", label: "Owner Read (1/0)", type: "number", defaultValue: 1 },
      { id: "ow", label: "Owner Write (1/0)", type: "number", defaultValue: 1 },
      { id: "ox", label: "Owner Execute (1/0)", type: "number", defaultValue: 1 },
      { id: "gr", label: "Group Read (1/0)", type: "number", defaultValue: 1 },
      { id: "gw", label: "Group Write (1/0)", type: "number", defaultValue: 0 },
      { id: "gx", label: "Group Execute (1/0)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "owner", label: "Owner Digit", formula: "(or*4) + (ow*2) + (ox*1)", unit: "" },
      { id: "group", label: "Group Digit", formula: "(gr*4) + (gw*2) + (gx*1)", unit: "" }
    ],
    theory: "Unix permissions use octal notation where Read=4, Write=2, and Execute=1.",
    faq: [],
    seoMeta: { title: "Chmod Calculator", description: "Calculate Unix file permissions.", keywords: "chmod calculator, linux permissions" }
  },
  {
    id: "cidr-calculator", name: "CIDR Calculator", description: "Calculate usable IPs from CIDR notation.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{Usable IPs} = 2^{(32-\\text{CIDR})} - 2",
    inputs: [
      { id: "cidr", label: "CIDR Mask (/N)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "total", label: "Total IPs", formula: "2^(32 - cidr)", unit: "" },
      { id: "usable", label: "Usable Hosts", formula: "(2^(32 - cidr)) - 2", unit: "" }
    ],
    theory: "A /24 subnet has 32 - 24 = 8 bits for hosts, giving 2^8 = 256 addresses.",
    faq: [],
    seoMeta: { title: "CIDR Calculator", description: "Calculate IP subnet capacities.", keywords: "cidr calculator" }
  },
  {
    id: "drone-flight-time-calculator", name: "Drone Flight Time Calculator", description: "Estimate drone flight duration.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "T = \\frac{\\text{Battery Capacity (Ah)} \\times \\text{Voltage} \\times \\text{Discharge Rate}}{\\text{Average Power}}",
    inputs: [
      { id: "mah", label: "Battery (mAh)", type: "number", defaultValue: 5000 },
      { id: "v", label: "Voltage (V)", type: "number", defaultValue: 14.8 },
      { id: "p", label: "Hover Power (Watts)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "time", label: "Estimated Flight Time", formula: "(((mah / 1000) * v * 0.8) / p) * 60", unit: "min" }
    ],
    theory: "Flight time depends on the total energy in the battery minus a 20% safety margin, divided by the power required to hover.",
    faq: [],
    seoMeta: { title: "Drone Flight Time Calculator", description: "Calculate drone flight times.", keywords: "drone flight time calculator" }
  },
  {
    id: "edpi-calculator", name: "eDPI Calculator", description: "Calculate Effective Dots Per Inch for gaming mice.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{eDPI} = \\text{DPI} \\times \\text{In-game Sensitivity}",
    inputs: [
      { id: "dpi", label: "Mouse DPI", type: "number", defaultValue: 800 },
      { id: "sens", label: "In-game Sensitivity", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "edpi", label: "eDPI", formula: "dpi * sens", unit: "" }
    ],
    theory: "eDPI standardizes mouse sensitivity across different hardware and software settings, allowing gamers to compare actual turn speeds.",
    faq: [],
    seoMeta: { title: "eDPI Calculator", description: "Calculate gaming mouse eDPI.", keywords: "edpi calculator, valorant edpi" }
  },
  {
    id: "lm317-calculator", name: "LM317 Calculator", description: "Calculate output voltage for LM317 regulator.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "V_{\\text{out}} = 1.25 \\times \\left(1 + \\frac{R_2}{R_1}\\right)",
    inputs: [
      { id: "r1", label: "R1 (Ohms)", type: "number", defaultValue: 240 },
      { id: "r2", label: "R2 (Ohms)", type: "number", defaultValue: 720 }
    ],
    outputs: [
      { id: "vout", label: "Output Voltage", formula: "1.25 * (1 + (r2 / r1))", unit: "V" }
    ],
    theory: "The LM317 is a popular adjustable linear voltage regulator.",
    faq: [],
    seoMeta: { title: "LM317 Voltage Calculator", description: "Calculate output voltage of LM317.", keywords: "lm317 calculator" }
  },
  {
    id: "pcb-trace-width-calculator", name: "PCB Trace Width Calculator", description: "Calculate trace width based on current.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "A = \\left(\\frac{I}{k \\times \\Delta T^b}\\right)^{1/c}",
    inputs: [
      { id: "i", label: "Current (Amps)", type: "number", defaultValue: 5 },
      { id: "dt", label: "Temperature Rise (°C)", type: "number", defaultValue: 10 },
      { id: "thick", label: "Copper Thickness (oz/ft²)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "width", label: "Approximate External Width", formula: "(((i / (0.048 * (dt^0.44)))^(1/0.725)) / (thick * 1.378))", unit: "mils" }
    ],
    theory: "Based on IPC-2221 standard formulas for external layers.",
    faq: [],
    seoMeta: { title: "PCB Trace Width Calculator", description: "Calculate required PCB trace width.", keywords: "pcb trace width calculator" }
  },
  {
    id: "raid-calculator", name: "RAID Calculator", description: "Calculate usable capacity of RAID arrays.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{RAID 5} = (N - 1) \\times C",
    inputs: [
      { id: "n", label: "Number of Drives", type: "number", defaultValue: 4 },
      { id: "c", label: "Capacity per Drive (TB)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "r0", label: "RAID 0 Capacity", formula: "n * c", unit: "TB" },
      { id: "r1", label: "RAID 1 Capacity", formula: "c", unit: "TB" },
      { id: "r5", label: "RAID 5 Capacity", formula: "(n - 1) * c", unit: "TB" },
      { id: "r6", label: "RAID 6 Capacity", formula: "(n - 2) * c", unit: "TB" }
    ],
    theory: "Different RAID levels offer different trade-offs between performance, redundancy, and usable capacity.",
    faq: [],
    seoMeta: { title: "RAID Calculator", description: "Calculate usable capacity for RAID 0, 1, 5, 6, 10.", keywords: "raid calculator, usable capacity" }
  },
  {
    id: "ram-latency-calculator", name: "RAM Latency Calculator", description: "Calculate absolute RAM latency in nanoseconds.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "\\text{Latency (ns)} = \\frac{\\text{CAS Latency} \\times 2000}{\\text{Data Rate}}",
    inputs: [
      { id: "cas", label: "CAS Latency (CL)", type: "number", defaultValue: 16 },
      { id: "mt", label: "Transfer Rate (MT/s or MHz)", type: "number", defaultValue: 3200 }
    ],
    outputs: [
      { id: "ns", label: "Absolute Latency", formula: "(cas * 2000) / mt", unit: "ns" }
    ],
    theory: "A higher frequency (MT/s) memory with a higher CAS latency might actually be faster (lower nanosecond latency) than a lower frequency memory with a lower CAS.",
    faq: [],
    seoMeta: { title: "RAM Latency Calculator", description: "Calculate absolute memory latency.", keywords: "ram latency calculator, cas latency" }
  },
  {
    id: "password-entropy-calculator", name: "Password Entropy Calculator", description: "Calculate bits of entropy in a password.",
    category: "other", subcategory: "tech-electronics",
    scientificFormula: "E = L \\times \\log_2(R)",
    inputs: [
      { id: "l", label: "Password Length", type: "number", defaultValue: 12 },
      { id: "r", label: "Pool Size (e.g., 94 for all ASCII)", type: "number", defaultValue: 94 }
    ],
    outputs: [
      { id: "e", label: "Entropy", formula: "l * (log(r) / log(2))", unit: "bits" }
    ],
    theory: "Entropy measures how unpredictable a password is. Generally, over 60 bits is strong, and over 128 bits is practically uncrackable.",
    faq: [],
    seoMeta: { title: "Password Entropy Calculator", description: "Calculate password strength in bits.", keywords: "password entropy calculator" }
  }
];
