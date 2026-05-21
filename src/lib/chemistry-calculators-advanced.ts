import { CalculatorConfig } from "./calculator-types";

export const CHEMISTRY_CALCULATORS_ADVANCED: CalculatorConfig[] = [
  // CHEMICAL REACTIONS (12 calculators)
  {
    id: "activation-energy-calculator",
    name: "Activation Energy Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "E_a = \\frac{R \\cdot T_1 \\cdot T_2}{T_2 - T_1} \\ln\\left(\\frac{k_2}{k_1}\\right)",
    inputs: [
      { id: "k1", label: "Rate Constant 1 (k1)", type: "number", defaultValue: 0.05, validation: { min: 1e-9 } },
      { id: "t1", label: "Temperature 1 (T1)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } },
      { id: "k2", label: "Rate Constant 2 (k2)", type: "number", defaultValue: 0.15, validation: { min: 1e-9 } },
      { id: "t2", label: "Temperature 2 (T2)", type: "number", defaultValue: 318.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "ea_j", label: "Activation Energy (Ea)", formula: "(8.314 * t1 * t2 / (t2 - t1)) * log(k2 / k1)", unit: "J/mol" },
      { id: "ea_kj", label: "Activation Energy (Ea)", formula: "((8.314 * t1 * t2 / (t2 - t1)) * log(k2 / k1)) / 1000", unit: "kJ/mol" }
    ],
    theory: "Activation energy (Ea) represents the minimum energy threshold reactants must cross to undergo a chemical reaction. According to transition state theory, this energy forms the activated transition state complex.",
    applications: ["Determining temperature effects on rates", "Reaction kinetics studies"],
    resultInterpretation: "The reaction has an activation energy barrier of {ea_kj} kJ/mol.",
    seoMeta: {
      title: "Activation Energy Calculator | Arrhenius Kinetics",
      description: "Determine chemical activation energy barriers using dual temperature rate constants.",
      keywords: "activation energy, kinetics, Arrhenius equation, rate constant"
    }
  },
  {
    id: "actual-yield-calculator",
    name: "Actual Yield Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\text{Actual Yield} = \\text{Theoretical Yield} \\times \\left(\\frac{\\%\\,\\text{Yield}}{100}\\right)",
    inputs: [
      { id: "theo", label: "Theoretical Yield", type: "number", defaultValue: 50.0, unit: "g", validation: { min: 0 } },
      { id: "yield", label: "Percent Yield", type: "number", defaultValue: 85.0, unit: "%", validation: { min: 0, max: 100 } }
    ],
    outputs: [
      { id: "actual", label: "Actual Yield", formula: "theo * (yield / 100)", unit: "g" }
    ],
    theory: "Actual yield represents the pure isolated mass of target product obtained in a real laboratory chemical synthesis. Impurities, equilibrium limits, and transfer losses usually keep it below theoretical yield thresholds.",
    applications: ["Synthesis performance tracking", "Industrial scale estimations"],
    resultInterpretation: "The actual mass isolated in the lab is {actual} g.",
    seoMeta: {
      title: "Actual Yield Calculator | Synthetic Chemistry",
      description: "Calculate standard actual chemical yields from theoretical models and percentage efficiencies.",
      keywords: "actual yield, percent yield, synthesis, theoretical yield"
    }
  },
  {
    id: "arrhenius-equation-calculator",
    name: "Arrhenius Equation Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "k = A \\cdot e^{-\\frac{E_a}{R T}}",
    inputs: [
      { id: "a", label: "Pre-exponential Factor (A)", type: "number", defaultValue: 1.0e11, validation: { min: 0 } },
      { id: "ea", label: "Activation Energy (Ea)", type: "number", defaultValue: 50.0, unit: "kJ/mol", validation: { min: 0 } },
      { id: "temp", label: "Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "k", label: "Rate Constant (k)", formula: "a * exp(-(ea * 1000) / (8.314 * temp))", unit: "s⁻¹" }
    ],
    theory: "The Arrhenius equation describes how the rate constant (k) of chemical reactions changes with absolute temperature and energy barriers. The term exp(-Ea/RT) is the Boltzmann factor, representing the fraction of molecules with enough energy to react.",
    applications: ["Reaction rate modeling", "Kinetics analysis"],
    resultInterpretation: "The rate constant is {k} s⁻¹.",
    seoMeta: {
      title: "Arrhenius Equation Calculator | Kinetics Solver",
      description: "Compute chemical reaction rate constants using temperature, pre-exponential factors, and energy barriers.",
      keywords: "Arrhenius equation, rate constant, pre-exponential factor, activation energy"
    }
  },
  {
    id: "chemical-equation-balancer",
    name: "Chemical Equation Balancer",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\sum a_i \\text{Reactants} = \\sum b_j \\text{Products}",
    inputs: [
      { id: "equation", label: "Unbalanced Equation", type: "text", defaultValue: "H2 + O2 -> H2O", placeholder: "e.g., C3H8 + O2 -> CO2 + H2O" }
    ],
    outputs: [
      { id: "balanced", label: "Balanced Equation Result", formula: "0.0", unit: "" }
    ],
    theory: "Balancing chemical equations satisfies the Law of Conservation of Mass. Atoms of each element must balance between the reactant left-hand side and product right-hand side.",
    applications: ["Equation stoichiometrical scaling", "Classroom homework checks"],
    resultInterpretation: "The balanced equation is {balanced}.",
    seoMeta: {
      title: "Chemical Equation Balancer | Reaction Mass Solver",
      description: "Balance any complex chemical reaction equation instantly to satisfy the Law of Conservation of Mass.",
      keywords: "equation balancer, chemical reaction, balance chemistry, reaction stoichiometry"
    }
  },
  {
    id: "equilibrium-constant-calculator",
    name: "Equilibrium Constant Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "K_c = \\frac{[C]^c \\cdot [D]^d}{[A]^a \\cdot [B]^b}",
    inputs: [
      { id: "products", label: "Product Concentrations Multiplied", type: "number", defaultValue: 0.4, validation: { min: 0 } },
      { id: "reactants", label: "Reactant Concentrations Multiplied", type: "number", defaultValue: 0.1, validation: { min: 0.001 } }
    ],
    outputs: [
      { id: "kc", label: "Equilibrium Constant (Kc)", formula: "products / reactants", unit: "" }
    ],
    theory: "The equilibrium constant (Kc) expresses the ratio of product active concentrations to reactant active concentrations at dynamic equilibrium, with each concentration raised to its stoichiometric coefficient.",
    applications: ["Determining reaction yield limits", "Equilibrium yield optimization"],
    resultInterpretation: "The equilibrium constant Kc is {kc}.",
    seoMeta: {
      title: "Equilibrium Constant Calculator | Kc reaction solver",
      description: "Determine the chemical equilibrium constant Kc from concentrations at dynamic equilibrium.",
      keywords: "equilibrium constant, Kc chemistry, reaction quotient, equilibrium concentrations"
    }
  },
  {
    id: "kp-calculator",
    name: "Kp Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "K_p = K_c \\cdot (R T)^{\\Delta n}",
    inputs: [
      { id: "kc", label: "Equilibrium Constant (Kc)", type: "number", defaultValue: 2.5, validation: { min: 0 } },
      { id: "temp", label: "Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } },
      { id: "dn", label: "Gas Mole Change (Δn)", type: "number", defaultValue: 1.0, helpText: "Moles gas products minus moles gas reactants." }
    ],
    outputs: [
      { id: "kp", label: "Equilibrium Constant (Kp)", formula: "kc * (0.08206 * temp)^dn", unit: "" }
    ],
    theory: "For gas-phase reactions, the equilibrium constant can be expressed in terms of partial pressures (Kp). Kp relates to Kc through the ideal gas law, adjusted by the difference in stoichiometric moles of gas (Δn).",
    applications: ["Gas reaction equilibria", "Gas pressure adjustments"],
    resultInterpretation: "The equilibrium constant in pressure terms is Kp = {kp}.",
    seoMeta: {
      title: "Kp Calculator | Gas Equilibrium Pressure Solver",
      description: "Convert Kc to Kp using absolute temperatures and changes in gas mole counts.",
      keywords: "Kp calculator, Kc to Kp, gas equilibrium, partial pressures"
    }
  },
  {
    id: "molar-ratio-calculator",
    name: "Molar Ratio Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\text{Ratio} = \\frac{\\text{Moles of Species A}}{\\text{Moles of Species B}}",
    inputs: [
      { id: "moles_a", label: "Moles of Species A", type: "number", defaultValue: 2.0, validation: { min: 0 } },
      { id: "moles_b", label: "Moles of Species B", type: "number", defaultValue: 1.0, validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "ratio", label: "Molar Ratio (A:B)", formula: "moles_a / moles_b", unit: "" }
    ],
    theory: "Molar ratios express the stoichiometric relationship between any two chemical species involved in a balanced chemical reaction, acting as the conversion factor between reactants and products.",
    applications: ["Reaction yield conversions", "Limiting reactant calculations"],
    resultInterpretation: "The molar proportion between A and B is {ratio}:1.",
    seoMeta: {
      title: "Molar Ratio Calculator | Reaction Proportions",
      description: "Find the stoichiometric molar proportions between reactants and products in a reaction.",
      keywords: "molar ratio, stoichiometric coefficients, mole conversion"
    }
  },
  {
    id: "net-ionic-equation-calculator",
    name: "Net Ionic Equation Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\text{Precipitate formation}",
    inputs: [
      { id: "equation", label: "Full Ionic Equation", type: "text", defaultValue: "Ag+(aq) + Cl-(aq) -> AgCl(s)", placeholder: "e.g., Ba2+ + SO42- -> BaSO4" }
    ],
    outputs: [
      { id: "net", label: "Net Ionic Equation Result", formula: "0.0", unit: "" }
    ],
    theory: "A net ionic equation shows only the chemical species directly participating in a chemical reaction, omitting spectator ions that remain unchanged in solution.",
    applications: ["Analyzing precipitation reactions", "Teaching acid-base neutralization pathways"],
    resultInterpretation: "The reaction net equation is {net}.",
    seoMeta: {
      title: "Net Ionic Equation Calculator | Precipitate Solver",
      description: "Classify and extract net active ionic equations by filtering out spectator species.",
      keywords: "net ionic equation, precipitate, spectator ions, aqueous reactions"
    }
  },
  {
    id: "percent-yield-calculator",
    name: "Percent Yield Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\% \\text{ Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100",
    inputs: [
      { id: "actual", label: "Actual Yield", type: "number", defaultValue: 40.0, unit: "g", validation: { min: 0 } },
      { id: "theoretical", label: "Theoretical Yield", type: "number", defaultValue: 50.0, unit: "g", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "yield", label: "Percent Yield", formula: "(actual / theoretical) * 100", unit: "%" }
    ],
    theory: "Percent yield measures the efficiency of a chemical synthesis. It is calculated by dividing the actual mass of product isolated in the lab by the theoretical mass predicted by stoichiometry.",
    applications: ["Evaluating synthesis efficiency", "Industrial chemical process audits"],
    resultInterpretation: "The synthesis achieved a {yield}% yield.",
    seoMeta: {
      title: "Percent Yield Calculator | Synthesis Efficiency",
      description: "Evaluate reaction synthetic efficiencies by comparing actual isolated yields with theoretical thresholds.",
      keywords: "percent yield, actual yield, theoretical yield, chemical efficiency"
    }
  },
  {
    id: "rate-constant-calculator",
    name: "Rate Constant Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "k = \\frac{\\text{Rate}}{[A]^x \\cdot [B]^y}",
    inputs: [
      { id: "rate", label: "Initial Reaction Rate", type: "number", defaultValue: 1.5e-3, unit: "M/s", validation: { min: 0 } },
      { id: "conc_a", label: "Concentration [A]", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 1e-4 } },
      { id: "order_a", label: "Order of Reactant A", type: "number", defaultValue: 1.0, validation: { min: 0 } }
    ],
    outputs: [
      { id: "k", label: "Rate Constant (k)", formula: "rate / (conc_a ^ order_a)", unit: "" }
    ],
    theory: "The rate constant (k) is a proportionality factor in the reaction rate law, relating the measured initial rate to the reactant concentration terms raised to their respective empirical reaction orders.",
    applications: ["Kinetics modeling", "Rate law evaluations"],
    resultInterpretation: "The rate constant is {k} with units dependent on overall order.",
    seoMeta: {
      title: "Rate Constant Calculator | Reaction Order Solver",
      description: "Solve for the rate constant (k) using reaction rates and concentrations.",
      keywords: "rate constant, initial rates method, kinetics orders, rate law"
    }
  },
  {
    id: "reaction-quotient-calculator",
    name: "Reaction Quotient Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "Q = \\frac{[\\text{Products}]}{[\\text{Reactants}]}",
    inputs: [
      { id: "products", label: "Instant Products Product", type: "number", defaultValue: 0.5, validation: { min: 0 } },
      { id: "reactants", label: "Instant Reactants Product", type: "number", defaultValue: 0.2, validation: { min: 0.001 } }
    ],
    outputs: [
      { id: "q", label: "Reaction Quotient (Q)", formula: "products / reactants", unit: "" }
    ],
    theory: "The reaction quotient (Q) measures the relative amounts of products and reactants present in a reaction mixture at any given moment. Comparing Q to the equilibrium constant K indicates which direction the reaction will shift to reach equilibrium.",
    applications: ["Predicting shift directions (Le Chatelier)", "Kinetics modeling"],
    resultInterpretation: "The reaction quotient Q is {q}.",
    seoMeta: {
      title: "Reaction Quotient (Q) Calculator | Equilibrium Shifts",
      description: "Determine the reaction quotient Q to predict which direction a reaction must shift to reach equilibrium.",
      keywords: "reaction quotient, Q chemistry, Le Chatelier shifts, equilibrium constant"
    }
  },
  {
    id: "theoretical-yield-calculator",
    name: "Theoretical Yield Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\\text{Theoretical Yield} = \\text{Moles limiting} \\times \\text{Ratio} \\times \\text{Molar Mass}",
    inputs: [
      { id: "moles_limiting", label: "Moles of Limiting Reactant", type: "number", defaultValue: 0.25, unit: "mol", validation: { min: 0 } },
      { id: "ratio", label: "Stoichiometric Ratio (Prod/Lim)", type: "number", defaultValue: 1.0, helpText: "Moles product formed per mole reactant." },
      { id: "product_mw", label: "Molar Mass of Product", type: "number", defaultValue: 180.15, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "theo_g", label: "Theoretical Yield", formula: "moles_limiting * ratio * product_mw", unit: "g" }
    ],
    theory: "Theoretical yield is the maximum mass of product that can be synthesized in a chemical reaction. It assumes the limiting reactant is completely consumed, with zero losses during purification or recovery.",
    applications: ["Synthesis forecasting", "Yield evaluation bases"],
    resultInterpretation: "The maximum theoretical yield is {theo_g} g.",
    seoMeta: {
      title: "Theoretical Yield Calculator | Stoichiometric Yield",
      description: "Calculate maximum potential reaction yields from limiting reactant moles.",
      keywords: "theoretical yield, stoichiometry maximum, synthesis limit, chemical yield"
    }
  },

  // THERMODYNAMICS (12 calculators)
  {
    id: "boiling-point-calculator",
    name: "Boiling Point Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "T_{\\text{bp}} = \\frac{\\Delta H_{\\text{vap}}}{\\Delta S_{\\text{vap}}}",
    inputs: [
      { id: "dh", label: "Enthalpy of Vaporization (ΔH)", type: "number", defaultValue: 40.7, unit: "kJ/mol", validation: { min: 0.1 } },
      { id: "ds", label: "Entropy of Vaporization (ΔS)", type: "number", defaultValue: 109.1, unit: "J/(mol·K)", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "bp", label: "Normal Boiling Point", formula: "(dh * 1000) / ds", unit: "K" },
      { id: "bp_c", label: "Boiling Point", formula: "((dh * 1000) / ds) - 273.15", unit: "°C" }
    ],
    theory: "An element or compound boils when its liquid vapor pressure equals atmospheric pressure. Thermodynamically, this transition occurs when the Gibbs free energy change of vaporization is zero ($\Delta G = 0$), so $T_{bp} = \Delta H_{vap} / \Delta S_{vap}$.",
    applications: ["Determining phase change transitions", "Materials chemistry distillation benchmarks"],
    resultInterpretation: "The calculated boiling point is {bp} K ({bp_c} °C).",
    seoMeta: {
      title: "Boiling Point Calculator | Thermodynamic Phase Change",
      description: "Calculate standard boiling points using transition enthalpies and entropies.",
      keywords: "boiling point, phase transition, Clausius-Clapeyron, phase thermodynamics"
    }
  },
  {
    id: "boiling-point-at-altitude-calculator",
    name: "Boiling Point at Altitude Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "T_{\\text{bp}} = 100 - 0.0033 \\times h",
    inputs: [
      { id: "altitude", label: "Altitude", type: "number", defaultValue: 1000.0, unit: "m", validation: { min: 0 } }
    ],
    outputs: [
      { id: "bp_c", label: "Boiling Point", formula: "100 - 0.0033 * altitude", unit: "°C" },
      { id: "bp_f", label: "Boiling Point", formula: "(100 - 0.0033 * altitude) * 1.8 + 32", unit: "°F" }
    ],
    theory: "As altitude increases, atmospheric pressure drops. Under lower ambient pressure, less thermal energy is required for a liquid's vapor pressure to equal surrounding pressure, lowering the boiling point of water by approximately 0.33°C per 100 meters of elevation.",
    applications: ["Cooking adjustments at high elevation", "Field hydrology studies"],
    resultInterpretation: "At {altitude} m, water boils at {bp_c} °C.",
    seoMeta: {
      title: "Boiling Point at Altitude Calculator | Elevation BP Solver",
      description: "Estimate water boiling points at any elevation above sea level due to pressure decreases.",
      keywords: "boiling point elevation, boiling point at altitude, pressure drop boiling"
    }
  },
  {
    id: "boiling-point-elevation-calculator",
    name: "Boiling Point Elevation Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\Delta T_b = i \\cdot K_b \\cdot m",
    inputs: [
      { id: "i", label: "van 't Hoff Factor (i)", type: "number", defaultValue: 2.0, validation: { min: 0.1 } },
      { id: "kb", label: "Ebullioscopic Constant (Kb)", type: "number", defaultValue: 0.512, unit: "°C·kg/mol", helpText: "Water is 0.512." },
      { id: "molality", label: "Solution Molality (m)", type: "number", defaultValue: 1.5, unit: "mol/kg", validation: { min: 0 } }
    ],
    outputs: [
      { id: "dtb", label: "Boiling Point Elevation", formula: "i * kb * molality", unit: "°C" }
    ],
    theory: "Boiling point elevation is a colligative property. Dissolving non-volatile solutes in a volatile solvent lowers the solvent's vapor pressure, requiring a higher temperature to reach the boiling point.",
    applications: ["Colligative molecular weight assays", "Industrial fluid stabilizers"],
    resultInterpretation: "The boiling point elevates by {dtb} °C.",
    seoMeta: {
      title: "Boiling Point Elevation Calculator | Ebullioscopic solver",
      description: "Compute colligative boiling point elevation shifts using molality and ebullioscopic constants.",
      keywords: "boiling point elevation, ebullioscopic constant, van 't Hoff factor, colligative properties"
    }
  },
  {
    id: "entropy-calculator",
    name: "Entropy Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\Delta S = \\frac{q_{\\text{rev}}}{T}",
    inputs: [
      { id: "heat", label: "Reversible Heat (q)", type: "number", defaultValue: 500.0, unit: "J", validation: { min: 0 } },
      { id: "temp", label: "Absolute Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "entropy", label: "Entropy Change (ΔS)", formula: "heat / temp", unit: "J/K" }
    ],
    theory: "Entropy (S) is a thermodynamic measure of molecular disorder or energy dispersion in a system. The change in entropy is defined as the heat transferred in a reversible process divided by the absolute temperature.",
    applications: ["Cycle efficiency analysis", "Statistical mechanics evaluations"],
    resultInterpretation: "The entropy shift is {entropy} J/K.",
    seoMeta: {
      title: "Entropy Calculator | Molecular Disorder Solver",
      description: "Compute entropy changes (ΔS) from reversible heat transfer values.",
      keywords: "entropy calculator, thermodynamic entropy, heat transfer, molecular disorder"
    }
  },
  {
    id: "freezing-point-depression-calculator",
    name: "Freezing Point Depression Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\Delta T_f = i \\cdot K_f \\cdot m",
    inputs: [
      { id: "i", label: "van 't Hoff Factor (i)", type: "number", defaultValue: 2.0, validation: { min: 0.1 } },
      { id: "kf", label: "Cryoscopic Constant (Kf)", type: "number", defaultValue: 1.86, unit: "°C·kg/mol", helpText: "Water is 1.86." },
      { id: "molality", label: "Solution Molality (m)", type: "number", defaultValue: 1.5, unit: "mol/kg", validation: { min: 0 } }
    ],
    outputs: [
      { id: "dtf", label: "Freezing Point Depression", formula: "i * kf * molality", unit: "°C" }
    ],
    theory: "Freezing point depression is a colligative property. Dissolving solutes in a solvent disrupts crystal lattice formation, requiring lower temperatures to freeze the liquid mixture.",
    applications: ["Road de-icing formulations", "Determining molecular mass by cryoscopy"],
    resultInterpretation: "The freezing point depresses by {dtf} °C.",
    seoMeta: {
      title: "Freezing Point Depression Calculator | Cryoscopic Solver",
      description: "Calculate standard freezing point depression shifts using cryoscopic values and molality.",
      keywords: "freezing point depression, cryoscopic constant, van 't Hoff factor"
    }
  },
  {
    id: "gibbs-free-energy-calculator",
    name: "Gibbs Free Energy Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\Delta G = \\Delta H - T \\cdot \\Delta S",
    inputs: [
      { id: "dh", label: "Enthalpy Change (ΔH)", type: "number", defaultValue: -92.2, unit: "kJ/mol" },
      { id: "ds", label: "Entropy Change (ΔS)", type: "number", defaultValue: -198.3, unit: "J/(mol·K)" },
      { id: "temp", label: "Absolute Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "dg", label: "Gibbs Free Energy (ΔG)", formula: "dh - temp * (ds / 1000)", unit: "kJ/mol" }
    ],
    theory: "Gibbs free energy (G) combines enthalpy and entropy to determine reaction spontaneity at constant pressure and temperature. A negative ΔG indicates a spontaneous process (exergonic), while a positive ΔG is non-spontaneous (endergonic).",
    applications: ["Spontaneity prediction", "Thermodynamic optimization"],
    resultInterpretation: "The Gibbs Free Energy change is {dg} kJ/mol. Spontaneous if negative.",
    seoMeta: {
      title: "Gibbs Free Energy Calculator | Spontaneity Solver",
      description: "Compute Gibbs free energy changes (ΔG) to predict chemical reaction spontaneity.",
      keywords: "Gibbs free energy, enthalpy change, entropy spontaneity, exergonic"
    }
  },
  {
    id: "gibbs-phase-rule-calculator",
    name: "Gibbs' Phase Rule Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "F = C - P + 2",
    inputs: [
      { id: "components", label: "Chemical Components (C)", type: "number", defaultValue: 1.0, validation: { min: 1 } },
      { id: "phases", label: "Phases present (P)", type: "number", defaultValue: 2.0, validation: { min: 1 } }
    ],
    outputs: [
      { id: "degrees", label: "Degrees of Freedom (F)", formula: "components - phases + 2", unit: "" }
    ],
    theory: "Gibbs' Phase Rule determines the number of degrees of freedom (F) in a thermodynamic system at equilibrium. F represents the number of independent intensive variables (such as temperature or pressure) that can be changed without altering the number of coexisting phases.",
    applications: ["Predicting phase diagram boundaries", "Materials crystallization audits"],
    resultInterpretation: "The system has {degrees} intensive degrees of freedom.",
    seoMeta: {
      title: "Gibbs' Phase Rule Calculator | Degrees of Freedom",
      description: "Calculate intensive degrees of freedom (F) in a multi-phase chemical system using Gibbs' Phase Rule.",
      keywords: "Gibbs phase rule, degrees of freedom, components phases"
    }
  },
  {
    id: "heat-of-combustion-calculator",
    name: "Heat of Combustion Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "q = m \\cdot c \\cdot \\Delta T",
    inputs: [
      { id: "mass", label: "Mass of Calorimeter Water", type: "number", defaultValue: 1000.0, unit: "g", validation: { min: 0.1 } },
      { id: "spec_heat", label: "Specific Heat Capacity (c)", type: "number", defaultValue: 4.184, unit: "J/(g·°C)" },
      { id: "dt", label: "Temperature Change (ΔT)", type: "number", defaultValue: 5.5, unit: "°C" }
    ],
    outputs: [
      { id: "heat_j", label: "Heat Released (q)", formula: "mass * spec_heat * dt", unit: "J" },
      { id: "heat_kj", label: "Heat Released (q)", formula: "(mass * spec_heat * dt) / 1000", unit: "kJ" }
    ],
    theory: "The heat of combustion is measured by bomb calorimetry. The energy released by burning fuel is absorbed by the surrounding water, with heat determined via the standard thermodynamic equation $q = mc\\Delta T$.",
    applications: ["Fuel efficiency assays", "Bomb calorimetry calibrations"],
    resultInterpretation: "The energy released during combustion is {heat_kj} kJ.",
    seoMeta: {
      title: "Heat of Combustion Calculator | Bomb Calorimetry",
      description: "Estimate fuel combustion heat outputs using water temperature shifts and specific heat.",
      keywords: "heat of combustion, specific heat capacity, bomb calorimeter, thermodynamic heat"
    }
  },
  {
    id: "q10-calculator",
    name: "Q10 Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "Q_{10} = \\left(\\frac{R_2}{R_1}\\right)^{\\frac{10}{T_2 - T_1}}",
    inputs: [
      { id: "r1", label: "Reaction Rate 1 (R1)", type: "number", defaultValue: 2.0, validation: { min: 0.001 } },
      { id: "t1", label: "Temperature 1 (T1)", type: "number", defaultValue: 293.15, unit: "K", validation: { min: 1 } },
      { id: "r2", label: "Reaction Rate 2 (R2)", type: "number", defaultValue: 4.0, validation: { min: 0.001 } },
      { id: "t2", label: "Temperature 2 (T2)", type: "number", defaultValue: 303.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "q10", label: "Q10 Temperature Coefficient", formula: "(r2 / r1) ^ (10 / (t2 - t1))", unit: "" }
    ],
    theory: "The Q10 temperature coefficient measures the rate of change of a chemical or biological system as a consequence of increasing the temperature by 10 °C. It is an index of temperature sensitivity.",
    applications: ["Biological metabolic rate tests", "Chemical kinetics evaluations"],
    resultInterpretation: "The calculated Q10 factor is {q10}.",
    seoMeta: {
      title: "Q10 Temperature Coefficient Calculator | Rate Sensitivity",
      description: "Determine system temperature sensitivity coefficients from rate observations.",
      keywords: "Q10 calculator, temperature coefficient, metabolic rate sensitivity"
    }
  },
  {
    id: "stp-calculator",
    name: "STP Calculator (Standard Temperature & Pressure)",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\text{Volume}_2 = \\text{Volume}_1 \\times \\left(\\frac{P_1}{P_{\\text{STP}}}\\right) \\times \\left(\\frac{T_{\\text{STP}}}{T_1}\\right)",
    inputs: [
      { id: "vol", label: "Initial Gas Volume (V1)", type: "number", defaultValue: 2.0, unit: "L", validation: { min: 0 } },
      { id: "p1", label: "Initial Pressure (P1)", type: "number", defaultValue: 1.5, unit: "atm", validation: { min: 0.01 } },
      { id: "t1", label: "Initial Temperature (T1)", type: "number", defaultValue: 300.0, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "vol_stp", label: "Volume at IUPAC STP", formula: "vol * (p1 / 1.0) * (273.15 / t1)", unit: "L" }
    ],
    theory: "Standard Temperature and Pressure (STP) is defined by IUPAC as a temperature of 273.15 K (0 °C) and an absolute pressure of 1 bar (or approximately 1 atm). The combined gas law scales any vapor sample to standard conditions.",
    applications: ["Gas laboratory standardization", "Molar volume comparison"],
    resultInterpretation: "The gas volume at STP conditions is {vol_stp} L.",
    seoMeta: {
      title: "STP Volume Calculator | Gas Law Standardizer",
      description: "Convert any ideal gas volume to standard IUPAC STP conditions using combined gas laws.",
      keywords: "STP calculator, standard temperature and pressure, combined gas laws"
    }
  },
  {
    id: "vapor-pressure-calculator",
    name: "Vapor Pressure Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{\\text{vap}}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)",
    inputs: [
      { id: "p1", label: "Initial Vapor Pressure (P1)", type: "number", defaultValue: 23.8, unit: "torr", validation: { min: 0.01 } },
      { id: "t1", label: "Initial Temperature (T1)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } },
      { id: "t2", label: "Final Temperature (T2)", type: "number", defaultValue: 318.15, unit: "K", validation: { min: 1 } },
      { id: "dh", label: "Enthalpy of Vaporization (ΔH)", type: "number", defaultValue: 40.7, unit: "kJ/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "p2", label: "Final Vapor Pressure (P2)", formula: "p1 * exp(-(dh * 1000 / 8.314) * (1/t2 - 1/t1))", unit: "torr" }
    ],
    theory: "The Clausius-Clapeyron equation models the non-linear relationship between vapor pressure and absolute temperature, showing that pressure increases exponentially with heating due to transition kinetics.",
    applications: ["Predicting vapor pressure curves", "Aerosol volatility modeling"],
    resultInterpretation: "The final vapor pressure is {p2} torr.",
    seoMeta: {
      title: "Vapor Pressure Calculator | Clausius-Clapeyron Solver",
      description: "Calculate thermodynamic vapor pressure at varying temperatures using vaporization enthalpies.",
      keywords: "vapor pressure, Clausius Clapeyron equation, enthalpy vaporization, volatility"
    }
  },
  {
    id: "vapor-pressure-of-water-calculator",
    name: "Vapor Pressure of Water Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\\log_{10} P = 8.07131 - \\frac{1730.63}{T + 233.426}",
    inputs: [
      { id: "temp_c", label: "Water Temperature (T)", type: "number", defaultValue: 25.0, unit: "°C", validation: { min: 0, max: 100 } }
    ],
    outputs: [
      { id: "pressure", label: "Vapor Pressure of Water", formula: "10^(8.07131 - 1730.63 / (temp_c + 233.426))", unit: "mmHg" }
    ],
    theory: "The Antoine equation is a semi-empirical thermodynamic formula that fits experimental vapor pressure curves. The coefficients used here correspond to liquid water between 1 °C and 100 °C.",
    applications: ["Evaporation rate calculations", "Humidity evaluations"],
    resultInterpretation: "The vapor pressure of water is {pressure} mmHg.",
    seoMeta: {
      title: "Water Vapor Pressure Calculator | Antoine Solver",
      description: "Determine the exact vapor pressure of liquid water at any temperature using the Antoine equation.",
      keywords: "water vapor pressure, Antoine equation, humidity metrics, thermodynamics water"
    }
  },

  // ELECTROCHEMISTRY (5 calculators)
  {
    id: "cell-emf-calculator",
    name: "Cell EMF Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "E^{\\circ}_{\\text{cell}} = E^{\\circ}_{\\text{cathode}} - E^{\\circ}_{\\text{anode}}",
    inputs: [
      { id: "cathode", label: "Cathode Reduction Potential", type: "number", defaultValue: 0.34, unit: "V" },
      { id: "anode", label: "Anode Reduction Potential", type: "number", defaultValue: -0.76, unit: "V" }
    ],
    outputs: [
      { id: "emf", label: "Cell Electromotive Force (EMF)", formula: "cathode - anode", unit: "V" }
    ],
    theory: "The standard electromotive force (EMF) of a galvanic cell represents the maximum electrical potential difference between the cathode and anode half-cells. A positive potential indicates a thermodynamically spontaneous redox reaction.",
    applications: ["Battery cell potential design", "Redox spontaneity checks"],
    resultInterpretation: "The resulting cell potential is {emf} V.",
    seoMeta: {
      title: "Cell EMF Calculator | Standard Reduction Potential",
      description: "Compute the standard electromotive force (EMF) of a galvanic electrochemical cell.",
      keywords: "cell EMF, reduction potential, cathode, anode, electrochemical cell"
    }
  },
  {
    id: "electrolysis-calculator",
    name: "Electrolysis Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "m = \\frac{I \\cdot t \\cdot M}{z \\cdot F}",
    inputs: [
      { id: "current", label: "Electric Current (I)", type: "number", defaultValue: 2.0, unit: "A", validation: { min: 0 } },
      { id: "time", label: "Duration Time (t)", type: "number", defaultValue: 3600.0, unit: "s", validation: { min: 1 } },
      { id: "mw", label: "Molar Mass of Species (M)", type: "number", defaultValue: 63.55, unit: "g/mol", validation: { min: 0.1 } },
      { id: "val", label: "Valency Electrons (z)", type: "number", defaultValue: 2.0, validation: { min: 1 } }
    ],
    outputs: [
      { id: "mass", label: "Deposited Product Mass", formula: "(current * time * mw) / (val * 96485.3)", unit: "g" }
    ],
    theory: "Faraday's laws of electrolysis state that the mass (m) of a substance altered at an electrode is directly proportional to the total electric charge (I*t) passed through the cell, adjusted by the valency of the ions (z) and Faraday's constant (96,485 C/mol).",
    applications: ["Industrial electroplating calculations", "Chlor-alkali refining scaling"],
    resultInterpretation: "Electrolysis yields a deposited mass of {mass} g at the electrode.",
    seoMeta: {
      title: "Faraday's Electrolysis Calculator | Electroplating Mass",
      description: "Calculate the exact mass of product deposited during electrolysis using Faraday's laws.",
      keywords: "Faraday's law, electrolysis mass, electroplating, chemical current deposition"
    }
  },
  {
    id: "ionic-strength-calculator",
    name: "Ionic Strength Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "I = \\frac{1}{2} \\sum c_i \\cdot z_i^2",
    inputs: [
      { id: "c1", label: "Concentration of Ion 1", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0 } },
      { id: "z1", label: "Charge of Ion 1", type: "number", defaultValue: 1.0 },
      { id: "c2", label: "Concentration of Ion 2", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0 } },
      { id: "z2", label: "Charge of Ion 2", type: "number", defaultValue: -1.0 }
    ],
    outputs: [
      { id: "strength", label: "Ionic Strength (I)", formula: "0.5 * (c1 * z1^2 + c2 * z2^2)", unit: "M" }
    ],
    theory: "Ionic strength (I) represents the concentration of charge in an ionic solution. It influences electrostatic shielding and activity coefficients in non-ideal thermodynamic systems.",
    applications: ["Debye-Huckel coefficient updates", "Bio-buffer prep quality audits"],
    resultInterpretation: "The calculated ionic strength of the solution is {strength} M.",
    seoMeta: {
      title: "Ionic Strength Calculator | Solution Charge Solver",
      description: "Calculate overall solution ionic strength from individual ion concentrations and valencies.",
      keywords: "ionic strength, active charge concentration, Debye-Huckel prep"
    }
  },
  {
    id: "lattice-energy-calculator",
    name: "Lattice Energy Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "U = \\frac{N_A \\cdot M \\cdot z^+ \\cdot z^- \\cdot e^2}{4 \\pi \\varepsilon_0 \\cdot r_0} \\left(1 - \\frac{1}{n}\\right)",
    inputs: [
      { id: "z_pos", label: "Cation Charge (z+)", type: "number", defaultValue: 1.0, validation: { min: 1 } },
      { id: "z_neg", label: "Anion Charge (z-)", type: "number", defaultValue: 1.0, validation: { min: 1 } },
      { id: "distance", label: "Equilibrium Distance (r0)", type: "number", defaultValue: 2.82e-10, unit: "m", validation: { min: 1e-12 } },
      { id: "born", label: "Born Exponent (n)", type: "number", defaultValue: 8.0, validation: { min: 2 } }
    ],
    outputs: [
      { id: "lattice", label: "Estimated Lattice Energy (U)", formula: "(1.389e-4 * z_pos * z_neg / distance) * (1 - 1/born)", unit: "kJ/mol" }
    ],
    theory: "The Born-Landé equation estimates the crystal lattice energy of an ionic solid. It balances the electrostatic attractive forces of the ions against the short-range repulsive forces of the electron shells.",
    applications: ["Analyzing crystal structural stability", "Thermodynamic Born-Haber integrations"],
    resultInterpretation: "The estimated crystal lattice energy is {lattice} kJ/mol.",
    seoMeta: {
      title: "Lattice Energy Calculator | Born-Landé Equation",
      description: "Estimate ionic crystal lattice energy using electrostatic distances and Born exponents.",
      keywords: "lattice energy, Born-Lande equation, ionic crystal, electrostatic lattice"
    }
  },
  {
    id: "nernst-equation-calculator",
    name: "Nernst Equation Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "E = E^{\\circ} - \\frac{0.0592}{n} \\log_{10}(Q)",
    inputs: [
      { id: "e0", label: "Standard Cell Potential (E°)", type: "number", defaultValue: 1.1, unit: "V" },
      { id: "val", label: "Electrons Transferred (n)", type: "number", defaultValue: 2.0, validation: { min: 1 } },
      { id: "q", label: "Reaction Quotient (Q)", type: "number", defaultValue: 0.01, validation: { min: 1e-12 } }
    ],
    outputs: [
      { id: "e", label: "Actual Cell Potential (E)", formula: "e0 - (0.0592 / val) * log10(q)", unit: "V" }
    ],
    theory: "The Nernst equation describes how non-standard concentrations affect electrochemical cell potentials. At 25°C, it relates standard potential (E°) to the reaction quotient (Q) based on charge transfer coefficients.",
    applications: ["Predicting battery discharging potential", "Electrosynthesis voltage setups"],
    resultInterpretation: "The cell potential under non-standard conditions is {e} V.",
    seoMeta: {
      title: "Nernst Equation Calculator | Battery Cell Potential",
      description: "Evaluate actual cell voltages under varying chemical concentrations using the Nernst equation.",
      keywords: "Nernst equation, cell potential, reaction quotient, electrochemistry voltage"
    }
  },

  // PHYSICAL CHEMISTRY (9 calculators)
  {
    id: "diffusion-coefficient-calculator",
    name: "Diffusion Coefficient Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "D = \\frac{k_B \\cdot T}{6 \\cdot \\pi \\cdot \\eta \\cdot r}",
    inputs: [
      { id: "temp", label: "Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } },
      { id: "visc", label: "Solvent Viscosity (η)", type: "number", defaultValue: 8.9e-4, unit: "Pa·s", validation: { min: 1e-6 } },
      { id: "radius", label: "Particle Radius (r)", type: "number", defaultValue: 1.0e-9, unit: "m", validation: { min: 1e-12 } }
    ],
    outputs: [
      { id: "diff", label: "Diffusion Coefficient (D)", formula: "(1.3806e-23 * temp) / (6 * pi * visc * radius)", unit: "m²/s" }
    ],
    theory: "The Stokes-Einstein equation models the thermal diffusion coefficient (D) of spherical particles undergoing Brownian motion in a viscous liquid under constant temperature.",
    applications: ["Colloidal particle sizing", "Physical transport processes modeling"],
    resultInterpretation: "The estimated diffusion coefficient is {diff} m²/s.",
    seoMeta: {
      title: "Diffusion Coefficient Calculator | Stokes-Einstein",
      description: "Calculate particle thermal diffusion coefficients (D) using fluid viscosity and temperature.",
      keywords: "diffusion coefficient, Stokes-Einstein equation, viscosity, Brownian motion"
    }
  },
  {
    id: "rate-of-effusion-calculator",
    name: "Rate of Effusion Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\\frac{\\text{Rate}_1}{\\text{Rate}_2} = \\sqrt{\\frac{M_2}{M_1}}",
    inputs: [
      { id: "mw1", label: "Molar Mass of Gas 1 (M1)", type: "number", defaultValue: 4.00, unit: "g/mol", validation: { min: 0.1 } },
      { id: "mw2", label: "Molar Mass of Gas 2 (M2)", type: "number", defaultValue: 32.0, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "ratio", label: "Effusion Rate Ratio (Rate 1 / Rate 2)", formula: "sqrt(mw2 / mw1)", unit: "" }
    ],
    theory: "Graham's Law states that the rate at which gas molecules pass through a pinhole is inversely proportional to the square root of their molar masses, reflecting the root-mean-square thermal velocities of the particles.",
    applications: ["Gas separation modeling", "Isotopic enrichment kinetics"],
    resultInterpretation: "Gas 1 effuses {ratio} times faster than Gas 2.",
    seoMeta: {
      title: "Rate of Effusion Calculator | Graham's Law Solver",
      description: "Compute comparative gas effusion rates using molecular weights via Graham's Law.",
      keywords: "rate of effusion, Graham's law, gas molecular weights, kinetic theory gases"
    }
  },
  {
    id: "half-life-calculator",
    name: "Half-Life Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "t_{1/2} = \\frac{\\ln 2}{k}",
    inputs: [
      { id: "k", label: "Rate Constant (k)", type: "number", defaultValue: 0.05, unit: "s⁻¹", validation: { min: 1e-9 } }
    ],
    outputs: [
      { id: "half", label: "Half-Life (t1/2)", formula: "log(2) / k", unit: "s" }
    ],
    theory: "The half-life of a first-order chemical reaction (or radioactive decay) is the time required for the reactant concentration to decrease to exactly half of its initial value, independent of initial concentrations.",
    applications: ["Kinetics auditing", "Radioactive decay half-life calculations"],
    resultInterpretation: "The half-life of the first-order process is {half} s.",
    seoMeta: {
      title: "Kinetics Half-Life Calculator | First Order solver",
      description: "Determine the half-life of first-order chemical reactions from rate constants.",
      keywords: "half-life kinetics, rate constant, first order decay, chemistry solver"
    }
  },
  {
    id: "langmuir-isotherm-calculator",
    name: "Langmuir Isotherm Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\\theta = \\frac{K \\cdot P}{1 + K \\cdot P}",
    inputs: [
      { id: "affinity", label: "Langmuir Constant (K)", type: "number", defaultValue: 0.5, unit: "bar⁻¹", validation: { min: 0 } },
      { id: "pressure", label: "Equilibrium Pressure (P)", type: "number", defaultValue: 2.0, unit: "bar", validation: { min: 0 } }
    ],
    outputs: [
      { id: "coverage", label: "Fractional Surface Coverage (θ)", formula: "(affinity * pressure) / (1 + affinity * pressure)", unit: "" }
    ],
    theory: "The Langmuir adsorption isotherm models monolayer gas adsorption on a homogeneous solid surface with no interaction between adsorbed molecules.",
    applications: ["Surface chemistry catalysts", "Analyzing gas separation filters"],
    resultInterpretation: "The fractional surface coverage is {coverage} (i.e. {coverage * 100}% coverage).",
    seoMeta: {
      title: "Langmuir Isotherm Calculator | Monolayer Adsorption",
      description: "Calculate surface fractional coverage (θ) on a solid catalyst using the Langmuir equation.",
      keywords: "Langmuir isotherm, adsorption coverage, surface chemistry, catalyst monolayer"
    }
  },
  {
    id: "osmotic-pressure-calculator",
    name: "Osmotic Pressure Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\\Pi = i \\cdot M \\cdot R \\cdot T",
    inputs: [
      { id: "i", label: "van 't Hoff Factor (i)", type: "number", defaultValue: 1.0, validation: { min: 0.1 } },
      { id: "molarity", label: "Molar Concentration (M)", type: "number", defaultValue: 0.25, unit: "mol/L", validation: { min: 0 } },
      { id: "temp", label: "Temperature (T)", type: "number", defaultValue: 298.15, unit: "K", validation: { min: 1 } }
    ],
    outputs: [
      { id: "pressure", label: "Osmotic Pressure (Π)", formula: "i * molarity * 0.08206 * temp", unit: "atm" }
    ],
    theory: "Osmotic pressure is the hydrostatic pressure required to halt osmosis across a semipermeable membrane. It is a colligative property proportional to the concentration of active solute particles.",
    applications: ["Determining cellular isotonic thresholds", "Desalination design audits"],
    resultInterpretation: "The resulting osmotic pressure is {pressure} atm.",
    seoMeta: {
      title: "Osmotic Pressure Calculator | Colligative Osmosis Tool",
      description: "Compute solution osmotic pressures (Π) using molarity, temperature, and ionization factors.",
      keywords: "osmotic pressure, colligative osmosis, cellular transport, reverse osmosis"
    }
  },
  {
    id: "partial-pressure-calculator",
    name: "Partial Pressure Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "P_i = X_i \\cdot P_{\\text{total}}",
    inputs: [
      { id: "fraction", label: "Mole Fraction (Xi)", type: "number", defaultValue: 0.21, validation: { min: 0, max: 1 } },
      { id: "p_total", label: "Total Gas Pressure (P)", type: "number", defaultValue: 1.0, unit: "atm", validation: { min: 0 } }
    ],
    outputs: [
      { id: "p_partial", label: "Partial Pressure (Pi)", formula: "fraction * p_total", unit: "atm" }
    ],
    theory: "Dalton's Law of Partial Pressures states that the pressure of an individual gas component in a mixture is equal to the total pressure multiplied by the component's mole fraction.",
    applications: ["Gas mixing calculations", "Respiratory gas analysis"],
    resultInterpretation: "The partial pressure of the gas component is {p_partial} atm.",
    seoMeta: {
      title: "Partial Pressure Calculator | Dalton's Gas Solver",
      description: "Find the partial pressure of an individual gas component in a mixture using Dalton's Law.",
      keywords: "partial pressure, Dalton's law, mole fraction gas, gas mixture"
    }
  },
  {
    id: "radioactive-decay-calculator",
    name: "Radioactive Decay Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "N_t = N_0 \\cdot e^{-\\lambda t}",
    inputs: [
      { id: "n0", label: "Initial Quantity (N0)", type: "number", defaultValue: 100.0, validation: { min: 0 } },
      { id: "decay_const", label: "Decay Constant (λ)", type: "number", defaultValue: 1.2e-4, unit: "year⁻¹", validation: { min: 0 } },
      { id: "time", label: "Elapsed Time (t)", type: "number", defaultValue: 5730.0, unit: "years", validation: { min: 0 } }
    ],
    outputs: [
      { id: "nt", label: "Remaining Quantity (Nt)", formula: "n0 * exp(-decay_const * time)", unit: "" }
    ],
    theory: "Unstable atomic nuclei undergo radioactive decay at a rate proportional to their current number of nuclei. This first-order process results in an exponential decrease in quantity over time.",
    applications: ["Isotopic tracking", "Geological decay age studies"],
    resultInterpretation: "The remaining quantity after decay is {nt}.",
    seoMeta: {
      title: "Radioactive Decay Calculator | Exponential Isotope Decay",
      description: "Estimate remaining radioactive sample sizes over time using the first-order decay equation.",
      keywords: "radioactive decay, decay constant, exponential decay, nuclear physics"
    }
  },
  {
    id: "two-photon-absorption-calculator",
    name: "Two-Photon Absorption Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\\sigma_{2P} = \\text{Cross-Section Calculation}",
    inputs: [
      { id: "power", label: "Laser Peak Intensity", type: "number", defaultValue: 1.0e9, unit: "W/cm²", validation: { min: 1.0 } },
      { id: "absorbance", label: "One-Photon Absorbance", type: "number", defaultValue: 0.1, validation: { min: 0 } }
    ],
    outputs: [
      { id: "sigma", label: "Relative 2P Efficiency", formula: "absorbance / power * 1e11", unit: "GM units" }
    ],
    theory: "Two-photon absorption (TPA) is a non-linear optical process in which a molecule simultaneously absorbs two photons to transition to an excited state, with the absorption rate proportional to the square of the light intensity.",
    applications: ["Multiphoton microscopy", "Optoelectronic materials chemistry"],
    resultInterpretation: "The calculated relative two-photon absorption efficiency is {sigma} GM.",
    seoMeta: {
      title: "Two-Photon Absorption Calculator | Non-linear Optics",
      description: "Calculate relative two-photon absorption cross sections and efficiencies for optoelectronic analysis.",
      keywords: "two-photon absorption, non-linear optics, GM units, optical cross section"
    }
  },
  {
    id: "young-laplace-equation-calculator",
    name: "Young-Laplace Equation Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\\Delta P = \\frac{2 \\gamma}{R}",
    inputs: [
      { id: "tension", label: "Surface Tension (γ)", type: "number", defaultValue: 0.0728, unit: "N/m", validation: { min: 0 } },
      { id: "radius", label: "Droplet Radius (R)", type: "number", defaultValue: 1.0e-6, unit: "m", validation: { min: 1e-9 } }
    ],
    outputs: [
      { id: "pressure", label: "Pressure Difference (ΔP)", formula: "2 * tension / radius", unit: "Pa" }
    ],
    theory: "The Young-Laplace equation relates the capillary pressure difference across the curved interface between two static fluids to the surface tension and the local radius of curvature.",
    applications: ["Bubble stability studies", "Colloidal aerosol transport dynamics"],
    resultInterpretation: "The internal capillary pressure exceeds external pressure by {pressure} Pa.",
    seoMeta: {
      title: "Young-Laplace Equation Calculator | Capillary Pressure",
      description: "Compute capillary pressure drops across curved droplet surfaces from interfacial tension.",
      keywords: "Young-Laplace equation, capillary pressure, surface tension, bubble physics"
    }
  },

  // ORGANIC CHEMISTRY (8 calculators)
  {
    id: "chemical-oxygen-demand-calculator",
    name: "Chemical Oxygen Demand Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\text{COD} = \\frac{(V_B - V_S) \\times N \\times 8000}{V_{\\text{sample}}}",
    inputs: [
      { id: "v_blank", label: "Blank Titration Volume", type: "number", defaultValue: 15.0, unit: "mL", validation: { min: 0.1 } },
      { id: "v_sample", label: "Sample Titration Volume", type: "number", defaultValue: 10.0, unit: "mL", validation: { min: 0 } },
      { id: "normality", label: "FAS Titrant Normality", type: "number", defaultValue: 0.1, unit: "N", validation: { min: 0.001 } },
      { id: "vol_sample", label: "Original Water Sample Volume", type: "number", defaultValue: 20.0, unit: "mL", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "cod", label: "Chemical Oxygen Demand (COD)", formula: "((v_blank - v_sample) * normality * 8000) / vol_sample", unit: "mg/L" }
    ],
    theory: "Chemical Oxygen Demand (COD) quantifies the amount of organic compounds in a water sample by measuring the mass of oxygen required to chemically oxidize them using a strong chemical oxidant (typically potassium dichromate).",
    applications: ["Wastewater quality audits", "Environmental pollution metrics"],
    resultInterpretation: "The water sample has a Chemical Oxygen Demand of {cod} mg/L.",
    seoMeta: {
      title: "Chemical Oxygen Demand (COD) Calculator | Wastewater",
      description: "Estimate aqueous organic chemical oxygen demands from standard FAS titrations.",
      keywords: "COD calculator, chemical oxygen demand, wastewater quality, environmental chemistry"
    }
  },
  {
    id: "combustion-analysis-calculator",
    name: "Combustion Analysis Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\% \\text{ C} = \\frac{\\text{Mass } \\text{CO}_2 \\times \\frac{12.011}{44.01}}{\\text{Sample Mass}} \\times 100",
    inputs: [
      { id: "sample", label: "Total Organic Sample Mass", type: "number", defaultValue: 1.0, unit: "g", validation: { min: 0.01 } },
      { id: "co2", label: "Isolated CO2 Mass", type: "number", defaultValue: 2.2, unit: "g", validation: { min: 0 } },
      { id: "h2o", label: "Isolated H2O Mass", type: "number", defaultValue: 0.9, unit: "g", validation: { min: 0 } }
    ],
    outputs: [
      { id: "carbon", label: "Carbon Proportion", formula: "(co2 * (12.011 / 44.009) / sample) * 100", unit: "%" },
      { id: "hydrogen", label: "Hydrogen Proportion", formula: "(h2o * (2.016 / 18.015) / sample) * 100", unit: "%" }
    ],
    theory: "Combustion analysis burns organic samples in excess oxygen, converting all carbon to carbon dioxide ($CO_2$) and hydrogen to water ($H_2O$). Gravimetric measurement of these combustion products reveals the carbon and hydrogen weight percentages in the starting material.",
    applications: ["Organic structure identification", "Empirical formula derivations"],
    resultInterpretation: "The sample consists of {carbon}% Carbon and {hydrogen}% Hydrogen by weight.",
    seoMeta: {
      title: "Combustion Analysis Calculator | Organic solver",
      description: "Perform standard combustion analytics to determine carbon and hydrogen weight percentages in organic samples.",
      keywords: "combustion analysis, organic structure, carbon percentage, hydrogen percentage"
    }
  },
  {
    id: "combustion-reaction-calculator",
    name: "Combustion Reaction Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right) \\text{O}_2 \\rightarrow x \\text{CO}_2 + \\frac{y}{2} \\text{H}_2O",
    inputs: [
      { id: "carbon", label: "Carbon atoms in fuel (x)", type: "number", defaultValue: 3.0, validation: { min: 1 } },
      { id: "hydrogen", label: "Hydrogen atoms in fuel (y)", type: "number", defaultValue: 8.0, validation: { min: 2 } }
    ],
    outputs: [
      { id: "o2_coeff", label: "O2 Stoichiometric Coefficient", formula: "carbon + hydrogen / 4", unit: "" },
      { id: "co2_coeff", label: "CO2 Stoichiometric Coefficient", formula: "carbon", unit: "" },
      { id: "h2o_coeff", label: "H2O Stoichiometric Coefficient", formula: "hydrogen / 2", unit: "" }
    ],
    theory: "Complete combustion of hydrocarbons reacting with oxygen gas yields carbon dioxide and water vapor as the exclusive products. The stoichiometric coefficients are determined directly from the carbon and hydrogen atom counts of the fuel molecule.",
    applications: ["Fuel burn balancing", "Furnace emission estimations"],
    resultInterpretation: "The balanced reaction requires {o2_coeff} O2 molecules, yielding {co2_coeff} CO2 and {h2o_coeff} H2O.",
    seoMeta: {
      title: "Combustion Reaction Balancer | Hydrocarbon Burn",
      description: "Balance hydrocarbon combustion equations based on fuel carbon and hydrogen counts.",
      keywords: "combustion reaction, hydrocarbon burn, stoichiometry equations"
    }
  },
  {
    id: "crude-protein-calculator",
    name: "Crude Protein Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\%\\,\\text{Protein} = \\%\\,\\text{Nitrogen} \\times 6.25",
    inputs: [
      { id: "nitrogen", label: "Total Kjeldahl Nitrogen", type: "number", defaultValue: 2.5, unit: "%", validation: { min: 0, max: 100 } }
    ],
    outputs: [
      { id: "protein", label: "Estimated Crude Protein", formula: "nitrogen * 6.25", unit: "%" }
    ],
    theory: "The crude protein content of organic matter (such as food or feed) is estimated by multiplying the measured nitrogen content (determined via Kjeldahl or Dumas assays) by a standard conversion factor of 6.25, reflecting the average ~16% nitrogen content of proteins.",
    applications: ["Food and feed nutrition labeling", "Agricultural chemistry assays"],
    resultInterpretation: "The estimated crude protein content is {protein}%.",
    seoMeta: {
      title: "Crude Protein Calculator | Kjeldahl Nitrogen Tool",
      description: "Estimate crude protein percentages from nitrogen content using standard conversion factors.",
      keywords: "crude protein, Kjeldahl nitrogen, Dumas assay, feed nutrition"
    }
  },
  {
    id: "degree-of-unsaturation-calculator",
    name: "Degree of Unsaturation Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\text{DoU} = \\frac{2C + 2 + N - H - X}{2}",
    inputs: [
      { id: "c", label: "Carbon atoms (C)", type: "number", defaultValue: 6.0, validation: { min: 0 } },
      { id: "h", label: "Hydrogen atoms (H)", type: "number", defaultValue: 6.0, validation: { min: 0 } },
      { id: "n", label: "Nitrogen atoms (N)", type: "number", defaultValue: 0.0, validation: { min: 0 } },
      { id: "x", label: "Halogen atoms (X)", type: "number", defaultValue: 0.0, validation: { min: 0 } }
    ],
    outputs: [
      { id: "dou", label: "Degree of Unsaturation", formula: "(2 * c + 2 + n - h - x) / 2", unit: "" }
    ],
    theory: "The Degree of Unsaturation (also known as the Index of Hydrogen Deficiency) indicates the total number of rings and pi bonds in an organic molecule, derived directly from its molecular formula.",
    applications: ["Organic structure determination", "Interpreting mass spectrometry formulas"],
    resultInterpretation: "The molecule has {dou} degrees of unsaturation (rings or pi bonds).",
    seoMeta: {
      title: "Degree of Unsaturation Calculator | Hydrogen Deficiency",
      description: "Compute the Degree of Unsaturation (DoU) to identify rings and pi bonds in organic molecules.",
      keywords: "degree of unsaturation, hydrogen deficiency index, pi bonds rings"
    }
  },
  {
    id: "double-bond-equivalent-calculator",
    name: "Double Bond Equivalent Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\text{DBE} = C - \\frac{H}{2} + \\frac{N}{2} + 1",
    inputs: [
      { id: "c", label: "Carbon atoms (C)", type: "number", defaultValue: 6.0, validation: { min: 0 } },
      { id: "h", label: "Hydrogen atoms (H)", type: "number", defaultValue: 6.0, validation: { min: 0 } },
      { id: "n", label: "Nitrogen atoms (N)", type: "number", defaultValue: 0.0, validation: { min: 0 } }
    ],
    outputs: [
      { id: "dbe", label: "Double Bond Equivalent", formula: "c - h/2 + n/2 + 1", unit: "" }
    ],
    theory: "Double Bond Equivalent (DBE) is equivalent to the Degree of Unsaturation. It counts the number of double bonds, triple bonds, or ring structures within a given organic formula.",
    applications: ["Analyzing mass spectrometry data", "Interpreting NMR spectra"],
    resultInterpretation: "The chemical structure has {dbe} double bond equivalents.",
    seoMeta: {
      title: "Double Bond Equivalent Calculator | DBE Chemistry",
      description: "Determine double bond equivalents (DBE) to evaluate chemical structure saturation levels.",
      keywords: "double bond equivalent, DBE calculator, saturation degree, organic chemistry"
    }
  },
  {
    id: "liquid-ethylene-density-calculator",
    name: "Liquid Ethylene Density Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "\\rho = \\text{Empirical Density Fits}",
    inputs: [
      { id: "temp", label: "Ethylene Temperature", type: "number", defaultValue: 170.0, unit: "K", validation: { min: 104, max: 282 } }
    ],
    outputs: [
      { id: "density", label: "Ethylene Density", formula: "567.8 - 1.15 * (temp - 170)", unit: "kg/m³" }
    ],
    theory: "Liquid ethylene density varies heavily with cryogenic temperatures. Using empirical fits derived from industry benchmarks, this calculator computes bulk liquid density for storage and transport applications.",
    applications: ["Petrochemical pipeline auditing", "Cryogenic storage evaluations"],
    resultInterpretation: "At {temp} K, liquid ethylene has a density of {density} kg/m³.",
    seoMeta: {
      title: "Liquid Ethylene Density Calculator | Petrochemical",
      description: "Estimate liquid ethylene densities at varying cryogenic temperatures.",
      keywords: "ethylene density, liquid ethylene, cryogenic ethylene, chemical pipeline"
    }
  },
  {
    id: "radiocarbon-dating-calculator",
    name: "Radiocarbon Dating Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "t = \\frac{\\ln(N_0 / N_t)}{0.00012097}",
    inputs: [
      { id: "n0", label: "Modern Activity (N0)", type: "number", defaultValue: 100.0, unit: "%", validation: { min: 0.1 } },
      { id: "nt", label: "Sample Activity (Nt)", type: "number", defaultValue: 50.0, unit: "%", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "age", label: "Radiocarbon Age", formula: "log(n0 / nt) / 0.00012097", unit: "years" }
    ],
    theory: "Carbon-14 is a radioactive isotope with a half-life of 5,730 years. Organisms absorb carbon until death, after which C-14 decay acts as a clock. Comparing residual C-14 activity to modern baselines yields the time elapsed since death.",
    applications: ["Archaeological dating", "Geological epoch tracking"],
    resultInterpretation: "The organic sample carbon age is {age} years.",
    seoMeta: {
      title: "Radiocarbon Dating Calculator | Carbon-14 Age Solver",
      description: "Calculate archaeological radiocarbon ages using Carbon-14 percent activities.",
      keywords: "radiocarbon dating, carbon 14, half life decay, archaeology age"
    }
  },

  // BIOCHEMISTRY (6 calculators)
  {
    id: "calibration-curve-calculator",
    name: "Calibration Curve Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "y = m \\cdot x + c",
    inputs: [
      { id: "slope", label: "Calibration Slope (m)", type: "number", defaultValue: 0.5, validation: { min: 1e-9 } },
      { id: "intercept", label: "y-Intercept (c)", type: "number", defaultValue: 0.02 },
      { id: "signal", label: "Measured Instrument Signal (y)", type: "number", defaultValue: 0.27 }
    ],
    outputs: [
      { id: "concentration", label: "Derived Concentration (x)", formula: "(signal - intercept) / slope", unit: "" }
    ],
    theory: "Analytical chemistry instruments require calibration curves. An analyte of known concentration is measured to establish a linear response ($y = mx + c$), which is then inverted to determine the concentration of unknown samples.",
    applications: ["UV-Vis spectroscopy calibration", "Chromatography assay concentration solvers"],
    resultInterpretation: "The derived analyte concentration is {concentration}.",
    seoMeta: {
      title: "Calibration Curve Concentration Calculator | CalcVerse AI",
      description: "Convert instrument analytical signals to concentrations using linear calibration models.",
      keywords: "calibration curve, linear regression, spectroscopy concentration, instrument calibration"
    }
  },
  {
    id: "enzyme-activity-calculator",
    name: "Enzyme Activity Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "\\text{Activity} = \\frac{\\text{Amount of Product Formed (}\\mu\\text{mol)}}{\\text{Reaction Time (min)}}",
    inputs: [
      { id: "product", label: "Product Formed", type: "number", defaultValue: 5.0, unit: "μmol", validation: { min: 0 } },
      { id: "time", label: "Reaction Time", type: "number", defaultValue: 10.0, unit: "min", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "activity", label: "Enzyme Activity", formula: "product / time", unit: "U (μmol/min)" }
    ],
    theory: "One unit of enzyme activity (U) is defined as the amount of enzyme that catalyzes the conversion of one micromole of substrate per minute under specified optimal temperature and pH assay conditions.",
    applications: ["Assaying enzyme purity", "Biotech product characterization"],
    resultInterpretation: "The measured enzyme activity is {activity} U.",
    seoMeta: {
      title: "Enzyme Activity Calculator | Catalytic Rate Solver",
      description: "Determine catalytic enzyme activity units from substrate conversion rates.",
      keywords: "enzyme activity, catalytic unit, biochemistry assay, kinetics rate"
    }
  },
  {
    id: "isoelectric-point-calculator",
    name: "Isoelectric Point Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "\\text{pI} = \\frac{\\text{p}K_1 + \\text{p}K_2}{2}",
    inputs: [
      { id: "pk1", label: "Carboxyl group pKa (pK1)", type: "number", defaultValue: 2.34, validation: { min: 0 } },
      { id: "pk2", label: "Amino group pKa (pK2)", type: "number", defaultValue: 9.6, validation: { min: 0 } }
    ],
    outputs: [
      { id: "pi", label: "Isoelectric Point (pI)", formula: "(pk1 + pk2) / 2", unit: "" }
    ],
    theory: "The isoelectric point (pI) is the pH at which a molecule (typically an amino acid or protein) carries no net electrical charge. For simple zwitterionic species, it is the average of the two pKa values flanking the neutral form.",
    applications: ["Protein gel electrophoresis setup", "Ion-exchange chromatographical runs"],
    resultInterpretation: "The molecular isoelectric point is pI = {pi}.",
    seoMeta: {
      title: "Isoelectric Point (pI) Calculator | Amino Acid pI",
      description: "Calculate the isoelectric point (pI) of zwitterionic amino acids from carboxyl and amino pKa values.",
      keywords: "isoelectric point, pI calculator, zwitterion, amino acid charge"
    }
  },
  {
    id: "michaelis-menten-equation-calculator",
    name: "Michaelis-Menten Equation Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "v = \\frac{V_{\\text{max}} \\cdot [S]}{K_m + [S]}",
    inputs: [
      { id: "vmax", label: "Maximal Velocity (Vmax)", type: "number", defaultValue: 100.0, unit: "mol/s", validation: { min: 0 } },
      { id: "km", label: "Michaelis Constant (Km)", type: "number", defaultValue: 4.0, unit: "mM", validation: { min: 1e-4 } },
      { id: "substrate", label: "Substrate Conc. [S]", type: "number", defaultValue: 8.0, unit: "mM", validation: { min: 0 } }
    ],
    outputs: [
      { id: "velocity", label: "Initial Velocity (v)", formula: "(vmax * substrate) / (km + substrate)", unit: "mol/s" }
    ],
    theory: "The Michaelis-Menten equation models enzyme kinetics, relating the initial reaction rate (v) to substrate concentration [S]. Km represents the substrate concentration at which the reaction rate is exactly half of Vmax.",
    applications: ["Determining enzyme substrate affinity", "Biotechnology kinetics studies"],
    resultInterpretation: "The initial reaction velocity is {velocity} mol/s.",
    seoMeta: {
      title: "Michaelis-Menten Kinetics Calculator | Enzyme Velocity",
      description: "Calculate initial enzyme reaction velocities (v) using Vmax, Km, and substrate concentrations.",
      keywords: "Michaelis Menten kinetics, Km, Vmax, enzyme velocity, substrate affinity"
    }
  },
  {
    id: "protein-solubility-calculator",
    name: "Protein Solubility Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "\\% \\text{ Solubility} = \\frac{\\text{Supernatant Protein Concentration}}{\\text{Total Original Protein Concentration}} \\times 100",
    inputs: [
      { id: "supernatant", label: "Supernatant Protein Conc.", type: "number", defaultValue: 1.8, unit: "mg/mL", validation: { min: 0 } },
      { id: "total", label: "Total Original Protein Conc.", type: "number", defaultValue: 2.0, unit: "mg/mL", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "solubility", label: "Solubility percentage", formula: "(supernatant / total) * 100", unit: "%" }
    ],
    theory: "Protein solubility is evaluated by centrifuging protein suspensions to pellet precipitated/insoluble protein fraction aggregates. The concentration of protein remaining dissolved in the supernatant divided by the starting concentration yields solubility.",
    applications: ["Assaying protein drug formulation stabilities", "Food protein functional tests"],
    resultInterpretation: "The protein exhibits a solubility of {solubility}%.",
    seoMeta: {
      title: "Protein Solubility Calculator | Biochemical Assay",
      description: "Determine percentage protein solubility from supernatant dissolved concentration measurements.",
      keywords: "protein solubility, supernatant concentration, protein stability"
    }
  },
  {
    id: "resuspension-calculator",
    name: "Resuspension Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "V = \\frac{\\text{Mass of Solute}}{\\text{Target Concentration}}",
    inputs: [
      { id: "mass", label: "Lyophilized Solute Mass", type: "number", defaultValue: 10.0, unit: "μg", validation: { min: 0.01 } },
      { id: "target_conc", label: "Target Concentration", type: "number", defaultValue: 1.0, unit: "μg/mL", validation: { min: 0.001 } }
    ],
    outputs: [
      { id: "volume", label: "Resuspension Volume Needed", formula: "mass / target_conc", unit: "mL" }
    ],
    theory: "Resuspension converts dry, lyophilized peptide or nucleic acid pellet powders back into active liquid stocks by adding precise diluent volumes.",
    applications: ["Preparing biochemical primers and stocks", "Lyophilized peptide resuspensions"],
    resultInterpretation: "Add {volume} mL of sterile buffer to fully dissolve the sample pellet.",
    seoMeta: {
      title: "Biotech Resuspension Calculator | Pellet Dissolver",
      description: "Calculate standard liquid volumes required to dissolve dry biotech pellets to custom stocks.",
      keywords: "resuspension calculator, peptide pellet, primer dissolve, biochemical stock"
    }
  },

  // OTHER CHEMISTRY (5 calculators)
  {
    id: "beer-lambert-law-calculator",
    name: "Beer-Lambert Law Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "A = \\varepsilon \\cdot l \\cdot c",
    inputs: [
      { id: "eps", label: "Molar Absorptivity (ε)", type: "number", defaultValue: 15000.0, unit: "L/(mol·cm)", validation: { min: 0 } },
      { id: "length", label: "Path Length (l)", type: "number", defaultValue: 1.0, unit: "cm", validation: { min: 0.01 } },
      { id: "conc", label: "Molar Concentration (c)", type: "number", defaultValue: 2.0e-5, unit: "M", validation: { min: 0 } }
    ],
    outputs: [
      { id: "absorbance", label: "Absorbance (A)", formula: "eps * length * conc", unit: "" }
    ],
    theory: "The Beer-Lambert Law states that the absorbance of a chemical solution is directly proportional to both the concentration of the absorbing species and the light path length through the sample.",
    applications: ["UV-Vis quantitative spectroscopy", "Biological optical assays"],
    resultInterpretation: "The solution absorbance is {absorbance}.",
    seoMeta: {
      title: "Beer-Lambert Law Calculator | Optical Absorbance",
      description: "Compute solution UV-Vis optical absorbances from concentration, path length, and molar absorptivity.",
      keywords: "Beer-Lambert law, absorbance, path length, molar absorptivity, UV-Vis"
    }
  },
  {
    id: "cubic-cell-calculator",
    name: "Cubic Cell Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "V = a^3, \\quad \\rho = \\frac{Z \\cdot M}{V \\cdot N_A}",
    inputs: [
      { id: "a", label: "Unit Cell Edge Length (a)", type: "number", defaultValue: 3.5e-10, unit: "m", validation: { min: 1e-12 } },
      { id: "z", label: "Atoms Per Unit Cell (Z)", type: "number", defaultValue: 4.0, helpText: "1 for Simple Cubic, 2 for BCC, 4 for FCC." },
      { id: "mw", label: "Molar Mass of Crystal Element", type: "number", defaultValue: 63.55, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "volume", label: "Unit Cell Volume (V)", formula: "a^3", unit: "m³" },
      { id: "density", label: "Theoretical Crystal Density", formula: "(z * mw) / (a^3 * 6.022e23 * 1e6)", unit: "g/cm³" }
    ],
    theory: "For crystalline solids with cubic symmetry, cell volume is the edge length cubed. The crystal density is calculated by dividing the mass of the atoms within the unit cell by the unit cell volume.",
    applications: ["X-ray crystallography checks", "Materials structural science"],
    resultInterpretation: "The unit cell volume is {volume} m³, and the density is {density} g/cm³.",
    seoMeta: {
      title: "Cubic Unit Cell Volume & Density Calculator | Crystallography",
      description: "Determine cubic unit cell volumes and theoretical crystal densities from lattice lengths.",
      keywords: "cubic cell calculator, unit cell density, lattice parameter, FCC BCC, crystallography"
    }
  },
  {
    id: "detention-time-calculator",
    name: "Detention Time Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "\\theta = \\frac{V}{Q}",
    inputs: [
      { id: "volume", label: "Tank Basin Volume (V)", type: "number", defaultValue: 500.0, unit: "m³", validation: { min: 0.1 } },
      { id: "flow", label: "Volumetric Flow Rate (Q)", type: "number", defaultValue: 50.0, unit: "m³/h", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "time", label: "Detention Time (θ)", formula: "volume / flow", unit: "hours" }
    ],
    theory: "Detention time (hydraulic retention time) represents the average time a parcel of liquid remains within a chemical treatment basin. It is calculated by dividing total basin volume by the volumetric inflow rate.",
    applications: ["Industrial wastewater treatment basins", "Chemical bioreactor retention audits"],
    resultInterpretation: "The average detention time of the liquid is {time} hours.",
    seoMeta: {
      title: "Detention Time Calculator | Hydraulic Retention",
      description: "Calculate detention time (θ) in treatment basins using tank volume and flow rates.",
      keywords: "detention time, hydraulic retention time, reactor volume, flow rate"
    }
  },
  {
    id: "hydraulic-retention-time-calculator",
    name: "Hydraulic Retention Time Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "\\text{HRT} = \\frac{V}{Q}",
    inputs: [
      { id: "volume", label: "Reactor Liquid Volume (V)", type: "number", defaultValue: 1000.0, unit: "L", validation: { min: 0.1 } },
      { id: "flow", label: "Liquid Feed Flow Rate (Q)", type: "number", defaultValue: 100.0, unit: "L/h", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "hrt", label: "Hydraulic Retention Time", formula: "volume / flow", unit: "hours" }
    ],
    theory: "Hydraulic Retention Time (HRT) measures the average lifetime of soluble substrates within a biochemical reactor, which is critical for maximizing catalyst activity and substrate consumption.",
    applications: ["Biochemical fermenter design", "Anaerobic digester modeling"],
    resultInterpretation: "The hydraulic retention time is {hrt} hours.",
    seoMeta: {
      title: "Hydraulic Retention Time (HRT) Calculator | Fermentation",
      description: "Compute hydraulic retention times for bioreactors from liquid volumes and feed rates.",
      keywords: "hydraulic retention time, HRT, bioreactor, fermentation, flow rate"
    }
  },
  {
    id: "miller-indices-calculator",
    name: "Miller Indices Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}",
    inputs: [
      { id: "a", label: "Lattice Parameter (a)", type: "number", defaultValue: 4.05e-10, unit: "m", validation: { min: 1e-12 } },
      { id: "h", label: "Index h", type: "number", defaultValue: 1.0, validation: { min: 0 } },
      { id: "k", label: "Index k", type: "number", defaultValue: 1.0, validation: { min: 0 } },
      { id: "l", label: "Index l", type: "number", defaultValue: 1.0, validation: { min: 0 } }
    ],
    outputs: [
      { id: "spacing", label: "Interplanar Spacing (d)", formula: "a / sqrt(h^2 + k^2 + l^2)", unit: "m" }
    ],
    theory: "Miller indices (hkl) are a crystallographic notation system for planes in crystal lattices. The distance (d) between adjacent parallel lattice planes is a function of the lattice parameter and the Miller indices.",
    applications: ["Analyzing powder XRD diffraction peaks", "Crystalline surface modeling"],
    resultInterpretation: "The interplanar spacing d between the (hkl) planes is {spacing} m.",
    seoMeta: {
      title: "Miller Indices Calculator | Crystallographic Spacing",
      description: "Compute crystalline interplanar lattice spacing (d) from Miller indices (hkl).",
      keywords: "Miller indices, interplanar spacing, crystallography, XRD diffraction"
    }
  }
];
