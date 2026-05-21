import { CalculatorConfig } from "./calculator-types";

export const THERMODYNAMICS_CALCULATORS: CalculatorConfig[] = [
  {
    id: "boiling-point-calculator", name: "Boiling Point Calculator",
    description: "Calculate the boiling point of water at a given altitude using Clausius-Clapeyron.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "T_b = \\frac{1}{\\frac{1}{T_0} - \\frac{R}{\\Delta H_v}\\ln\\frac{P}{P_0}}",
    inputs: [
      { id: "alt_m", label: "Altitude (m)", type: "number", defaultValue: 3000 },
      { id: "T0_K", label: "Standard Boiling Point (K)", type: "number", defaultValue: 373.15 },
      { id: "dHv", label: "Heat of Vaporization (J/mol)", type: "number", defaultValue: 40660 }
    ],
    outputs: [
      { id: "P_atm", label: "Atmospheric Pressure", formula: "101325 * (1 - 2.25577e-5 * alt_m)^5.25588", unit: "Pa" },
      { id: "Tb_K", label: "Boiling Point", formula: "1 / (1/T0_K - 8.314/dHv * log(101325 * (1 - 2.25577e-5 * alt_m)^5.25588 / 101325))", unit: "K" },
      { id: "Tb_C", label: "Boiling Point", formula: "1 / (1/T0_K - 8.314/dHv * log(101325 * (1 - 2.25577e-5 * alt_m)^5.25588 / 101325)) - 273.15", unit: "°C" }
    ],
    theory: "Boiling point decreases with altitude because atmospheric pressure decreases (~12 hPa per 100m). The Clausius-Clapeyron equation relates vapor pressure to temperature through the heat of vaporization. At 3000m, water boils at ~90°C, making cooking slower.",
    faq: [
      { question: "How much does boiling point drop per 1000m?", answer: "Roughly 3.3°C per 1000m: sea level: 100°C, 1000m: ~96.7°C, 2000m: ~93.3°C, 3000m: ~90°C, Mt. Everest (8849m): ~70°C. Cooking times increase significantly at high altitude." },
      { question: "Can water boil at room temperature?", answer: "Yes, if you reduce pressure enough. In a vacuum chamber at ~2.3 kPa (~0.023 atm), water boils at ~20°C. Astronauts' blood would boil without pressurized suits (well above the Armstrong limit of ~19 km)." },
      { question: "How does this affect cooking?", answer: "Lower boiling point means food cooks slower (lower temperature). Pasta takes 20-25% longer at 2000m. Pressure cookers restore the boiling point by increasing internal pressure — essential for high-altitude cooking." }
    ],
    seoMeta: { title: "Boiling Point Calculator", description: "Calculate water boiling point at altitude.", keywords: "boiling point, altitude, pressure, Clausius-Clapeyron, cooking" }
  },
  {
    id: "carnot-efficiency-calculator", name: "Carnot Efficiency Calculator",
    description: "Calculate the maximum theoretical efficiency of a heat engine.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "\\eta_C = 1 - \\frac{T_C}{T_H}",
    inputs: [
      { id: "TH_K", label: "Hot Reservoir Temperature (K)", type: "number", defaultValue: 600 },
      { id: "TC_K", label: "Cold Reservoir Temperature (K)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "eta_carnot", label: "Carnot Efficiency", formula: "(1 - TC_K / TH_K) * 100", unit: "%" },
      { id: "COP_heat", label: "COP (Heating)", formula: "TH_K / (TH_K - TC_K)", unit: "" },
      { id: "COP_cool", label: "COP (Cooling)", formula: "TC_K / (TH_K - TC_K)", unit: "" }
    ],
    theory: "The Carnot efficiency is the maximum possible efficiency for any heat engine operating between two temperatures. No real engine can exceed this limit — it's a consequence of the second law of thermodynamics. Higher TH or lower TC improves efficiency, which is why power plants use superheated steam.",
    faq: [
      { question: "Why can't we reach 100% efficiency?", answer: "The second law of thermodynamics: some heat must always be rejected to the cold reservoir. Only at TC = 0 K (absolute zero) would efficiency reach 100%, but absolute zero is unattainable." },
      { question: "How efficient are real engines?", answer: "Car engines: 25–35%. Diesel: 35–45%. Gas turbine (combined cycle): 55–62%. Nuclear: 33%. Solar thermal: 15–25%. All are well below their Carnot limits due to irreversibilities." },
      { question: "What is COP?", answer: "Coefficient of Performance for heat pumps/refrigerators. COP_heating = TH/(TH-TC). COP_cooling = TC/(TH-TC). COP can exceed 1 (heat pumps are more efficient than resistive heating) because they move heat rather than create it." }
    ],
    seoMeta: { title: "Carnot Efficiency Calculator", description: "Calculate maximum heat engine efficiency.", keywords: "Carnot efficiency, heat engine, thermodynamics, second law, COP" }
  },
  {
    id: "entropy-calculator", name: "Entropy Calculator",
    description: "Calculate entropy change for reversible heat transfer.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "\\Delta S = \\frac{Q}{T}",
    inputs: [
      { id: "Q_heat", label: "Heat Transfer (J)", type: "number", defaultValue: 1000 },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 300 }
    ],
    outputs: [{ id: "dS", label: "Entropy Change", formula: "Q_heat / T_K", unit: "J/K" }],
    theory: "Entropy measures the number of microscopic configurations (disorder) of a system. For reversible heat transfer, ΔS = Q/T. The second law states that the total entropy of an isolated system never decreases — it increases for irreversible processes and remains constant for reversible ones.",
    faq: [
      { question: "What is entropy physically?", answer: "Entropy measures the number of microscopic arrangements (microstates) consistent with the macroscopic state. S = kB·ln(Ω) where Ω is the number of microstates. More disorder = more microstates = higher entropy." },
      { question: "Does entropy always increase?", answer: "For isolated systems, yes (second law). Local entropy can decrease (freezing water, growing crystals), but total entropy (system + surroundings) always increases. Life maintains low entropy by increasing environmental entropy." },
      { question: "What is the 'heat death'?", answer: "The theoretical end state of the universe where entropy reaches maximum — all energy is uniformly distributed at equilibrium temperature. No temperature gradients means no energy flow and no work possible." }
    ],
    seoMeta: { title: "Entropy Calculator", description: "Calculate entropy change from heat transfer.", keywords: "entropy, second law, thermodynamics, heat transfer, disorder" }
  },
  {
    id: "heat-transfer-calculator", name: "Heat Transfer Calculator",
    description: "Calculate heat transfer through a solid wall by conduction.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "Q = \\frac{kA(T_1 - T_2)}{L}",
    inputs: [
      { id: "k_cond", label: "Thermal Conductivity (W/m·K)", type: "number", defaultValue: 0.04, helpText: "Fiberglass: 0.04, Concrete: 1.7, Copper: 385" },
      { id: "A", label: "Area (m²)", type: "number", defaultValue: 10 },
      { id: "T1", label: "Hot Side Temperature (°C)", type: "number", defaultValue: 20 },
      { id: "T2", label: "Cold Side Temperature (°C)", type: "number", defaultValue: -10 },
      { id: "L_thick", label: "Wall Thickness (m)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [{ id: "Q_rate", label: "Heat Transfer Rate", formula: "k_cond * A * (T1 - T2) / L_thick", unit: "W" }],
    theory: "Fourier's law of heat conduction: heat flows from hot to cold at a rate proportional to the temperature gradient, area, and thermal conductivity. Insulation works by having very low k (trapping air or gas in small pockets), reducing heat transfer.",
    faq: [
      { question: "What are good insulators?", answer: "Still air: k = 0.025 W/m·K. Aerogel: 0.015. Polyurethane foam: 0.025. Fiberglass: 0.04. Vacuum is the best insulator (no conduction or convection) — used in thermos flasks." },
      { question: "What are R-values?", answer: "R-value = thickness/conductivity (m²·K/W). Higher R = better insulation. Typical wall: R-13 to R-21. Attic: R-30 to R-60. R-values of multiple layers add directly." },
      { question: "What about convection and radiation?", answer: "Conduction is just one mode. Convection (fluid motion) and radiation (electromagnetic) also transfer heat. Buildings lose heat by all three — insulation reduces conduction, vapor barriers reduce convection, and radiant barriers reduce radiation." }
    ],
    seoMeta: { title: "Heat Transfer Calculator", description: "Calculate conductive heat transfer through a wall.", keywords: "heat transfer, conduction, Fourier's law, insulation, thermal conductivity" }
  },
  {
    id: "ideal-gas-law-calculator", name: "Ideal Gas Law Calculator",
    description: "Calculate pressure, volume, or temperature using the ideal gas law.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "PV = nRT",
    inputs: [
      { id: "n", label: "Amount of Gas (mol)", type: "number", defaultValue: 1 },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 300 },
      { id: "V_m3", label: "Volume (m³)", type: "number", defaultValue: 0.0245 }
    ],
    outputs: [
      { id: "P_gas", label: "Pressure", formula: "n * 8.314 * T_K / V_m3", unit: "Pa" },
      { id: "P_atm", label: "Pressure", formula: "n * 8.314 * T_K / V_m3 / 101325", unit: "atm" }
    ],
    theory: "The ideal gas law relates pressure, volume, temperature, and amount of gas. It assumes gas molecules are point particles with no intermolecular forces. It works well at low pressures and high temperatures. One mole of ideal gas occupies 22.4 L at STP (0°C, 1 atm).",
    faq: [
      { question: "When does the ideal gas law fail?", answer: "At high pressures (molecules closer together, intermolecular forces matter), low temperatures (near condensation), and for polar molecules. The Van der Waals equation adds correction terms for these effects." },
      { question: "What is the gas constant R?", answer: "R = 8.314 J/(mol·K) = 0.08206 L·atm/(mol·K) = 1.987 cal/(mol·K). It relates thermal energy to temperature for one mole of ideal gas." },
      { question: "What are STP conditions?", answer: "Standard Temperature and Pressure: T = 273.15 K (0°C), P = 101.325 kPa (1 atm). At STP, 1 mole of ideal gas occupies 22.414 liters. IUPAC now defines STP as 0°C and 100 kPa." }
    ],
    seoMeta: { title: "Ideal Gas Law Calculator", description: "Calculate P, V, or T using PV = nRT.", keywords: "ideal gas law, PV=nRT, pressure, volume, temperature, moles" }
  },
  {
    id: "specific-heat-calculator", name: "Specific Heat Calculator",
    description: "Calculate heat energy from mass, specific heat, and temperature change.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "Q = mc\\Delta T",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1 },
      { id: "c_sp", label: "Specific Heat (J/kg·K)", type: "number", defaultValue: 4186, helpText: "Water: 4186, Iron: 449, Aluminum: 897" },
      { id: "dT", label: "Temperature Change (°C or K)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "Q_heat", label: "Heat Energy", formula: "m * c_sp * dT", unit: "J" },
      { id: "Q_kWh", label: "Heat Energy", formula: "m * c_sp * dT / 3.6e6", unit: "kWh" }
    ],
    theory: "Specific heat is the energy required to raise 1 kg of a substance by 1 K. Water has an unusually high specific heat (4186 J/kg·K), which is why it's excellent for cooling, heating, and thermal energy storage. Metals have much lower specific heat and heat up/cool down quickly.",
    faq: [
      { question: "Why is water's specific heat so high?", answer: "Hydrogen bonds between water molecules require significant energy to break. This molecular bonding absorbs energy without raising temperature much. This is why oceans moderate climate — they absorb/release enormous heat with small temperature changes." },
      { question: "How much energy to heat bath water?", answer: "150 liters (150 kg) from 15°C to 40°C: Q = 150 × 4186 × 25 = 15.7 MJ = 4.36 kWh. At $0.15/kWh, that's about $0.65 with an electric heater (or less with gas)." },
      { question: "What is thermal mass?", answer: "The ability of a material to store heat. High specific heat × high density = high thermal mass. Concrete, water, and earth have high thermal mass — they moderate temperature swings in buildings (passive solar design)." }
    ],
    seoMeta: { title: "Specific Heat Calculator", description: "Calculate heat energy using Q = mcΔT.", keywords: "specific heat, heat energy, temperature change, calorimetry, thermal" }
  },
  {
    id: "stefan-boltzmann-calculator", name: "Stefan-Boltzmann Calculator",
    description: "Calculate the total radiated power from a black body.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "P = \\varepsilon \\sigma A T^4",
    inputs: [
      { id: "epsilon", label: "Emissivity (0–1)", type: "number", defaultValue: 1, helpText: "Blackbody: 1, Polished metal: 0.05, Human skin: 0.98" },
      { id: "A", label: "Surface Area (m²)", type: "number", defaultValue: 1 },
      { id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 5778, helpText: "Sun surface: 5778 K" }
    ],
    outputs: [
      { id: "P_rad", label: "Radiated Power", formula: "epsilon * 5.670374419e-8 * A * T_K^4", unit: "W" }
    ],
    theory: "The Stefan-Boltzmann law states that a body radiates energy proportional to the fourth power of its absolute temperature. Doubling temperature increases radiation 16-fold. This law determines stellar luminosity, heat losses from furnaces, and the radiative equilibrium of planets.",
    faq: [
      { question: "What is emissivity?", answer: "The ratio of actual radiation to blackbody radiation. ε = 1: perfect blackbody (absorbs and emits all radiation). ε = 0: perfect reflector. Human skin: 0.98. Polished aluminum: 0.05. Black paint: 0.95." },
      { question: "How much does the Sun radiate?", answer: "At T = 5778 K, A = 6.08×10¹⁸ m²: P = 3.83 × 10²⁶ W. Earth intercepts about 1.74 × 10¹⁷ W of this (about 0.000000045%). Each square meter at Earth gets ~1361 W (solar constant)." },
      { question: "How does this relate to climate?", answer: "Earth radiates as a ~255 K blackbody to balance incoming solar radiation. Greenhouse gases absorb and re-emit infrared radiation, effectively raising the equilibrium temperature to ~288 K (+33°C greenhouse effect)." }
    ],
    seoMeta: { title: "Stefan-Boltzmann Calculator", description: "Calculate blackbody radiation power.", keywords: "Stefan-Boltzmann, blackbody radiation, emissivity, thermal radiation" }
  },
  {
    id: "thermal-expansion-calculator", name: "Thermal Expansion Calculator",
    description: "Calculate the change in length due to thermal expansion.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "\\Delta L = \\alpha L_0 \\Delta T",
    inputs: [
      { id: "alpha", label: "Coefficient of Expansion (1/K)", type: "number", defaultValue: 12e-6, helpText: "Steel: 12e-6, Aluminum: 23e-6, Copper: 17e-6" },
      { id: "L0", label: "Original Length (m)", type: "number", defaultValue: 10 },
      { id: "dT", label: "Temperature Change (°C or K)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "dL", label: "Change in Length", formula: "alpha * L0 * dT", unit: "m" },
      { id: "dL_mm", label: "Change in Length", formula: "alpha * L0 * dT * 1000", unit: "mm" }
    ],
    theory: "Materials expand when heated because increased atomic vibrations push atoms farther apart. The coefficient of linear expansion α gives the fractional change per degree. Bridges, railways, and pipelines must accommodate expansion with joints, rollers, or expansion loops.",
    faq: [
      { question: "Why do bridges have expansion joints?", answer: "A 100m steel bridge with ΔT = 40°C expands: ΔL = 12×10⁻⁶ × 100 × 40 = 0.048m = 48mm. Without joints, this would buckle the bridge or crack the abutments." },
      { question: "What has the lowest expansion?", answer: "Invar alloy (36% Ni, 64% Fe): α = 1.2×10⁻⁶/K — ten times less than steel. Used in precision instruments, clock pendulums, and satellite structures. Fused quartz: 0.5×10⁻⁶/K." },
      { question: "Can expansion be useful?", answer: "Yes! Bimetallic strips use different expansion rates for thermostats. Shrink-fitting heats a hole to expand it, inserts a shaft, then cools for a very tight fit. Thermal expansion drives ocean convection currents." }
    ],
    seoMeta: { title: "Thermal Expansion Calculator", description: "Calculate length change from temperature change.", keywords: "thermal expansion, coefficient, temperature, length change, material" }
  },
  {
    id: "latent-heat-calculator", name: "Latent Heat Calculator",
    description: "Calculate the energy for a phase change (melting or boiling).",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "Q = mL",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 1 },
      { id: "L_latent", label: "Specific Latent Heat (J/kg)", type: "number", defaultValue: 2.26e6, helpText: "Water vaporization: 2.26e6, Ice fusion: 3.34e5" }
    ],
    outputs: [{ id: "Q_heat", label: "Heat Energy", formula: "m * L_latent", unit: "J" }],
    theory: "Latent heat is the energy absorbed or released during a phase change at constant temperature. During melting or boiling, all energy goes into breaking molecular bonds rather than raising temperature. Water's high latent heat of vaporization (2.26 MJ/kg) makes it excellent for cooling.",
    faq: [
      { question: "Why does steam burn worse than boiling water?", answer: "When steam condenses on skin, it releases 2.26 MJ per kg of latent heat PLUS continues cooling as water. Boiling water only transfers sensible heat as it cools. The latent heat release makes steam far more dangerous." },
      { question: "How much ice to cool a drink?", answer: "Melting 50g of ice absorbs: Q = 0.05 × 334,000 = 16,700 J (just melting) + 0.05 × 4186 × 20 = 4,186 J (warming to 20°C) = 20,886 J total. Most cooling comes from the phase change, not the cold water." },
      { question: "What is sublimation?", answer: "Direct solid-to-gas transition (dry ice, freeze-drying). Sublimation latent heat = fusion + vaporization latent heats combined. Ice sublimes slowly at low humidity — this is why clothes dry on a freezing clothesline." }
    ],
    seoMeta: { title: "Latent Heat Calculator", description: "Calculate energy for phase changes.", keywords: "latent heat, phase change, vaporization, fusion, melting" }
  },
  {
    id: "heat-engine-calculator", name: "Heat Engine Calculator",
    description: "Calculate efficiency and work output of a heat engine.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H}",
    inputs: [
      { id: "QH", label: "Heat Input QH (J)", type: "number", defaultValue: 10000 },
      { id: "QC", label: "Heat Rejected QC (J)", type: "number", defaultValue: 6000 }
    ],
    outputs: [
      { id: "W_out", label: "Work Output", formula: "QH - QC", unit: "J" },
      { id: "eta", label: "Efficiency", formula: "(QH - QC) / QH * 100", unit: "%" }
    ],
    theory: "A heat engine converts thermal energy into mechanical work by absorbing heat QH from a hot reservoir, converting some to work W, and rejecting the rest QC to a cold reservoir. Efficiency η = W/QH = 1 - QC/QH. All real engines have η less than the Carnot limit.",
    faq: [
      { question: "What are the best real heat engines?", answer: "Combined cycle gas turbines: 55–62%. Large diesel (marine): 50–55%. Steam turbine: 35–45%. Car gasoline engine: 25–35%. Small gasoline engine: 15–20%." },
      { question: "Where does the rejected heat go?", answer: "To cooling towers (water evaporation), rivers/ocean (thermal pollution), radiators, or the atmosphere. Cogeneration (CHP) captures rejected heat for space/water heating, improving total energy utilization to 80%+." },
      { question: "What is a heat pump?", answer: "A heat engine run in reverse: work input moves heat from cold to hot. Refrigerators and air conditioners are heat pumps. COP > 1 means they move more heat energy than the electrical energy consumed." }
    ],
    seoMeta: { title: "Heat Engine Calculator", description: "Calculate heat engine work and efficiency.", keywords: "heat engine, efficiency, work output, thermodynamics, Carnot" }
  },
  {
    id: "black-body-radiation-calculator", name: "Black Body Radiation Calculator",
    description: "Calculate the peak wavelength and total power of blackbody radiation.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "\\lambda_{max} = \\frac{b}{T}, \\quad b = 2.898 \\times 10^{-3}",
    inputs: [{ id: "T_K", label: "Temperature (K)", type: "number", defaultValue: 5778 }],
    outputs: [
      { id: "lambda_peak", label: "Peak Wavelength", formula: "2.898e-3 / T_K", unit: "m" },
      { id: "lambda_nm", label: "Peak Wavelength", formula: "2.898e-3 / T_K * 1e9", unit: "nm" },
      { id: "P_per_m2", label: "Power per m²", formula: "5.670374419e-8 * T_K^4", unit: "W/m²" }
    ],
    theory: "Wien's displacement law states that the peak wavelength of blackbody radiation is inversely proportional to temperature: λ_max = b/T. The Sun (5778 K) peaks at ~501 nm (green-yellow visible light). Humans at 310 K peak at ~9.3 μm (infrared).",
    faq: [
      { question: "Why is the Sun yellow-white?", answer: "The Sun's peak is at ~501 nm (green), but it emits across the visible spectrum. The broad emission combined with our eye's spectral response makes it appear yellow-white. Space images show the Sun as white." },
      { question: "What temperature glows red?", answer: "Objects start glowing visibly at ~800 K (dull red). 1000 K: bright red. 2000 K: orange. 3000 K: yellow-white. 6000 K: white. 10000 K: blue-white. These are incandescent colors." },
      { question: "How does this relate to IR cameras?", answer: "Thermal cameras detect infrared radiation from objects at everyday temperatures. Humans at 37°C peak at ~9.3 μm. Thermal cameras typically image 8–14 μm. Warmer objects appear brighter." }
    ],
    seoMeta: { title: "Black Body Radiation Calculator", description: "Calculate peak wavelength and radiated power.", keywords: "blackbody radiation, Wien's law, peak wavelength, Stefan-Boltzmann" }
  },
  {
    id: "heat-capacity-calculator", name: "Heat Capacity Calculator",
    description: "Calculate the heat capacity of an object from mass and specific heat.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "C = mc",
    inputs: [
      { id: "m", label: "Mass (kg)", type: "number", defaultValue: 5 },
      { id: "c_sp", label: "Specific Heat (J/kg·K)", type: "number", defaultValue: 4186 }
    ],
    outputs: [
      { id: "C_cap", label: "Heat Capacity", formula: "m * c_sp", unit: "J/K" }
    ],
    theory: "Heat capacity C is the total energy needed to raise an object's temperature by 1 K. It equals mass × specific heat. A large water tank has enormous heat capacity, storing and releasing thermal energy slowly — this is the principle behind thermal energy storage systems.",
    faq: [
      { question: "Heat capacity vs specific heat?", answer: "Specific heat (c) is per unit mass: J/(kg·K). Heat capacity (C) is for the whole object: J/K. C = mc. A 10kg water jug has C = 10 × 4186 = 41,860 J/K. It takes 41.86 kJ to warm it 1°C." },
      { question: "Why does water moderate climate?", answer: "Water's high heat capacity means oceans absorb enormous energy with small temperature changes. Coastal cities have milder climates than inland cities. The entire seasonal temperature cycle is moderated by nearby water." },
      { question: "What is thermal mass in buildings?", answer: "Heavy materials (concrete, stone, water) store heat during the day and release it at night. This reduces temperature swings and can reduce heating/cooling energy by 20–30% in well-designed passive solar buildings." }
    ],
    seoMeta: { title: "Heat Capacity Calculator", description: "Calculate object heat capacity.", keywords: "heat capacity, thermal mass, specific heat, energy storage" }
  },
  {
    id: "newtons-law-of-cooling-calculator", name: "Newton's Law of Cooling Calculator",
    description: "Calculate the temperature of an object cooling over time.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "T(t) = T_{env} + (T_0 - T_{env})e^{-kt}",
    inputs: [
      { id: "T0", label: "Initial Temperature (°C)", type: "number", defaultValue: 90 },
      { id: "T_env", label: "Environment Temperature (°C)", type: "number", defaultValue: 20 },
      { id: "k_cool", label: "Cooling Constant (1/min)", type: "number", defaultValue: 0.1 },
      { id: "t_min", label: "Time (minutes)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "T_final", label: "Temperature at Time t", formula: "T_env + (T0 - T_env) * exp(-k_cool * t_min)", unit: "°C" }
    ],
    theory: "Newton's Law of Cooling states that the rate of heat loss is proportional to the temperature difference between the object and its surroundings. The result is exponential decay toward the ambient temperature. The cooling constant k depends on the object's surface area, mass, and insulation.",
    faq: [
      { question: "What determines the cooling constant k?", answer: "k depends on surface area/volume ratio, material properties, air flow (convection), and insulation. Small objects cool faster (higher k). Insulated objects cool slower (lower k). Wind increases k." },
      { question: "Is this used in forensics?", answer: "Yes. Body temperature at death is ~37°C. By measuring current temperature and using estimated k, forensic investigators estimate time of death. Accuracy depends on environmental conditions." },
      { question: "When does Newton's cooling fail?", answer: "At large temperature differences (radiation becomes significant — T⁴ dependence), during phase changes (latent heat), and when convection patterns change dramatically with temperature." }
    ],
    seoMeta: { title: "Newton's Law of Cooling Calculator", description: "Calculate cooling temperature over time.", keywords: "Newton's cooling, exponential cooling, temperature, heat loss" }
  },
  {
    id: "thermal-resistance-calculator", name: "Thermal Resistance Calculator",
    description: "Calculate thermal resistance for heat flow through a material.",
    category: "physics", subcategory: "thermodynamics",
    scientificFormula: "R_{th} = \\frac{L}{kA}",
    inputs: [
      { id: "L_thick", label: "Thickness (m)", type: "number", defaultValue: 0.1 },
      { id: "k_cond", label: "Thermal Conductivity (W/m·K)", type: "number", defaultValue: 0.04 },
      { id: "A", label: "Area (m²)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "Rth", label: "Thermal Resistance", formula: "L_thick / (k_cond * A)", unit: "K/W" }
    ],
    theory: "Thermal resistance is analogous to electrical resistance: R_th = L/(kA). Heat flow Q = ΔT/R_th, just like I = V/R. Series thermal resistances add, and parallel resistances follow the reciprocal rule — identical to electrical circuit analysis.",
    faq: [
      { question: "How is this like electrical circuits?", answer: "Temperature ↔ Voltage. Heat flow ↔ Current. Thermal resistance ↔ Electrical resistance. ΔT = Q × R_th ↔ V = I × R. This analogy allows using circuit analysis for thermal problems." },
      { question: "What about convection resistance?", answer: "At surfaces, R_conv = 1/(hA) where h is the convection coefficient. Still air: h ≈ 5–25 W/m²·K. Forced air: h ≈ 10–200. Water: h ≈ 200–10,000. These add in series with conduction resistance." },
      { question: "How do I use this for electronics?", answer: "IC temperature = P_dissipated × (R_junction-case + R_case-heatsink + R_heatsink-air) + T_ambient. Each thermal resistance in the path adds up. This determines if a heatsink is needed." }
    ],
    seoMeta: { title: "Thermal Resistance Calculator", description: "Calculate thermal resistance for heat flow.", keywords: "thermal resistance, heat flow, insulation, R-value, conduction" }
  }
];
