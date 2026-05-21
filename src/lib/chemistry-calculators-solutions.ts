import { CalculatorConfig } from "./calculator-types";

export const CHEMISTRY_CALCULATORS_SOLUTIONS: CalculatorConfig[] = [
  {
    id: "activity-coefficient-calculator",
    name: "Activity Coefficient Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\log \\gamma = -0.509 \\times z^2 \\times \\sqrt{I}",
    inputs: [
      { id: "charge", label: "Ion Charge (z)", type: "number", defaultValue: 1.0, validation: { min: 1 } },
      { id: "strength", label: "Ionic Strength (I)", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0 } }
    ],
    outputs: [
      { id: "log_gamma", label: "log(γ)", formula: "-0.509 * charge^2 * sqrt(strength)", unit: "" },
      { id: "gamma", label: "Activity Coefficient (γ)", formula: "10^(-0.509 * charge^2 * sqrt(strength))", unit: "" }
    ],
    theory: "The Debye-Hückel limiting law computes the activity coefficient (γ) of an ion in an aqueous solution. In highly dilute solutions, it models electrostatical interactions between ions as a function of temperature, charge, and ionic strength.",
    applications: ["Determining chemical equilibrium in ionic systems", "Verifying ionic thermodynamic models"],
    resultInterpretation: "The activity coefficient γ is {gamma}. Values close to 1.0 indicate near-ideal gas-like solution behavior.",
    seoMeta: {
      title: "Activity Coefficient Calculator | Debye-Hückel Solver",
      description: "Calculate the thermodynamic activity coefficient (γ) of an ion using the Debye-Hückel limiting law.",
      keywords: "activity coefficient, Debye-Huckel law, ionic strength, chemical thermodynamics"
    }
  },
  {
    id: "alligation-calculator",
    name: "Alligation Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{Parts Ratio} = |\\text{Concentration}_i - \\text{Target}|",
    inputs: [
      { id: "high", label: "Higher Concentration", type: "number", defaultValue: 70.0, unit: "%", validation: { min: 0.1, max: 100 } },
      { id: "low", label: "Lower Concentration", type: "number", defaultValue: 10.0, unit: "%", validation: { min: 0, max: 100 } },
      { id: "target", label: "Target Concentration", type: "number", defaultValue: 30.0, unit: "%", validation: { min: 0, max: 100 } }
    ],
    outputs: [
      { id: "high_parts", label: "Parts of High Conc.", formula: "target - low", unit: "parts" },
      { id: "low_parts", label: "Parts of Low Conc.", formula: "high - target", unit: "parts" },
      { id: "high_pct", label: "High Conc. Proportion", formula: "((target - low) / (high - low)) * 100", unit: "%" },
      { id: "low_pct", label: "Low Conc. Proportion", formula: "((high - target) / (high - low)) * 100", unit: "%" }
    ],
    theory: "Alligation is a practical mathematical technique used in pharmaceutical chemistry and mixing processes to determine the ratio of two solutions of differing strengths needed to prepare a mixture of a specific middle target strength.",
    applications: ["Compounding pharmaceutical mixtures", "Industrial mixing and dilutions"],
    resultInterpretation: "Mix {high_parts} parts ({high_pct}%) of the higher concentration with {low_parts} parts ({low_pct}%) of the lower concentration.",
    seoMeta: {
      title: "Alligation Alternate Calculator | Solution Mixture Ratio",
      description: "Compute blending proportions of two solutions to yield a desired intermediate target strength.",
      keywords: "alligation calculator, pharmaceutical mixture, blending calculator, chemistry ratios"
    }
  },
  {
    id: "bleach-dilution-calculator",
    name: "Bleach Dilution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "V_{\\text{bleach}} = V_{\\text{total}} \\times \\frac{C_{\\text{target}}}{C_{\\text{initial}}}",
    inputs: [
      { id: "c_initial", label: "Initial Bleach Strength", type: "number", defaultValue: 6.0, unit: "%", validation: { min: 0.1 } },
      { id: "c_target_ppm", label: "Target Concentration", type: "number", defaultValue: 200.0, unit: "ppm", validation: { min: 1 } },
      { id: "vol_total", label: "Total Desired Volume", type: "number", defaultValue: 1000.0, unit: "mL", validation: { min: 1 } }
    ],
    outputs: [
      { id: "bleach_vol", label: "Bleach Volume Needed", formula: "vol_total * (c_target_ppm / 10000) / c_initial", unit: "mL" },
      { id: "water_vol", label: "Diluent Water Volume", formula: "vol_total - (vol_total * (c_target_ppm / 10000) / c_initial)", unit: "mL" }
    ],
    theory: "Bleach dilutions convert concentrated household sodium hypochlorite solutions into target disinfectants, often measured in parts per million (ppm). Note that 1% sodium hypochlorite is equal to 10,000 ppm.",
    applications: ["Laboratory sanitation", "Sterilizing brewing or culinary equipment"],
    resultInterpretation: "Mix {bleach_vol} mL of concentrated bleach with {water_vol} mL of water to produce {vol_total} mL of solution.",
    seoMeta: {
      title: "Bleach Dilution Calculator | Sanitation PPM Tool",
      description: "Calculate standard hypochlorite bleach dilution parts to create custom PPM sanitizers.",
      keywords: "bleach dilution, hypochlorite PPM, sanitizer calculator, sanitizing labs"
    }
  },
  {
    id: "buffer-capacity-calculator",
    name: "Buffer Capacity Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\beta = 2.303 \\times C \\times \\frac{K_a [H^+]}{(K_a + [H^+])^2}",
    inputs: [
      { id: "c_total", label: "Total Buffer Conc. (C)", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0.001 } },
      { id: "ka", label: "Acid Ka", type: "number", defaultValue: 1.8e-5, validation: { min: 0 } },
      { id: "h_conc", label: "Hydrogen Ion [H+]", type: "number", defaultValue: 1.0e-5, unit: "M", validation: { min: 0 } }
    ],
    outputs: [
      { id: "capacity", label: "Buffer Capacity (β)", formula: "2.303 * c_total * (ka * h_conc) / (ka + h_conc)^2", unit: "" }
    ],
    theory: "Buffer capacity (β) quantifies the resistance of a buffer solution to pH changes when hydrogen or hydroxide ions are added. It depends heavily on the buffer concentrations and how close the solution pH is to the acid pKa.",
    applications: ["Bio-chemical buffer formulations", "Aqueous stability analysis"],
    resultInterpretation: "The buffer capacity β is {capacity}. A higher index indicates stronger resistance to pH shifts.",
    seoMeta: {
      title: "Buffer Capacity Calculator | Van Slyke Buffer Solver",
      description: "Evaluate the capacity of biological or chemical buffers to resist pH deviations using the Van Slyke formula.",
      keywords: "buffer capacity, Van Slyke equation, pH buffer strength, bio buffers"
    }
  },
  {
    id: "buffer-ph-calculator",
    name: "Buffer pH Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}\\right)",
    inputs: [
      { id: "pka", label: "Acid pKa", type: "number", defaultValue: 4.76, validation: { min: 0, max: 14 } },
      { id: "base", label: "Conjugate Base Concentration", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0.0001 } },
      { id: "acid", label: "Weak Acid Concentration", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0.0001 } }
    ],
    outputs: [
      { id: "ph", label: "Buffer pH", formula: "pka + log10(base / acid)", unit: "" }
    ],
    theory: "A buffer consists of a weak acid and its conjugate base. By suppressing ionic deviations, it stabilizes acidity. This pH value is solved directly via the Henderson-Hasselbalch equation.",
    applications: ["Preparing biochemical media", "Aqueous quality control"],
    resultInterpretation: "The calculated stabilized buffer pH is {ph}.",
    seoMeta: {
      title: "Buffer pH Calculator | Henderson-Hasselbalch Tool",
      description: "Calculate the exact pH of a buffer solution composed of a weak acid and conjugate base.",
      keywords: "buffer pH, Henderson Hasselbalch, weak acid conjugate base"
    }
  },
  {
    id: "concentration-calculator",
    name: "Concentration Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{Concentration} = \\frac{\\text{Mass of Solute}}{\\text{Volume of Solution}}",
    inputs: [
      { id: "mass", label: "Solute Mass", type: "number", defaultValue: 5.0, unit: "g", validation: { min: 0 } },
      { id: "volume", label: "Solution Volume", type: "number", defaultValue: 250.0, unit: "mL", validation: { min: 1 } }
    ],
    outputs: [
      { id: "conc_g_l", label: "Concentration", formula: "mass / (volume / 1000)", unit: "g/L" },
      { id: "conc_pct", label: "Weight/Volume Percent", formula: "(mass / volume) * 100", unit: "% w/v" }
    ],
    theory: "Solute concentration expresses the mass of active solute dissolved per unit volume of solution. Weight-to-volume percentage (w/v) represents grams of solute per 100 mL of solution.",
    applications: ["Reagent preparation", "Standardizing analytical titers"],
    resultInterpretation: "The concentration of the solution is {conc_g_l} g/L ({conc_pct}% w/v).",
    seoMeta: {
      title: "Concentration Calculator | w/v Concentration Finder",
      description: "Calculate standard mass-to-volume ratio concentrations (g/L or % w/v) easily.",
      keywords: "concentration calculator, mass volume, w/v percent, chemistry metric"
    }
  },
  {
    id: "dilution-factor-calculator",
    name: "Dilution Factor Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{DF} = \\frac{V_{\\text{final}}}{V_{\\text{initial}}} = \\frac{C_{\\text{initial}}}{C_{\\text{final}}}",
    inputs: [
      { id: "c_initial", label: "Initial Concentration (C1)", type: "number", defaultValue: 10.0, validation: { min: 0.001 } },
      { id: "c_final", label: "Final Concentration (C2)", type: "number", defaultValue: 2.0, validation: { min: 0.001 } }
    ],
    outputs: [
      { id: "df", label: "Dilution Factor (DF)", formula: "c_initial / c_final", unit: "fold" }
    ],
    theory: "The dilution factor (DF) represents the ratio of initial concentrated volume (or strength) to the final diluted volume (or strength). It represents the 'fold dilution' needed to decrease solute density.",
    applications: ["Preparing serial assays", "Dose scaling standardizations"],
    resultInterpretation: "The dilution factor is {df}-fold.",
    seoMeta: {
      title: "Dilution Factor Calculator | Fold Dilution Tool",
      description: "Quickly determine the fold dilution factor (DF) from initial and final concentration ratios.",
      keywords: "dilution factor, fold dilution, chemistry dilution, concentration scaling"
    }
  },
  {
    id: "henderson-hasselbalch-calculator",
    name: "Henderson-Hasselbalch Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)",
    inputs: [
      { id: "pka", label: "Acid pKa", type: "number", defaultValue: 4.76, validation: { min: 0, max: 14 } },
      { id: "base", label: "Conjugate Base [A-]", type: "number", defaultValue: 0.2, unit: "M", validation: { min: 0.0001 } },
      { id: "acid", label: "Weak Acid [HA]", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0.0001 } }
    ],
    outputs: [
      { id: "ph", label: "pH", formula: "pka + log10(base / acid)", unit: "" }
    ],
    theory: "The Henderson-Hasselbalch equation relates the pH of an acid-base buffer system to the dissociation constant (pKa) and the relative concentrations of conjugate base and weak acid species.",
    applications: ["pH predictions", "Medical acid-base physiology checks"],
    resultInterpretation: "The solution pH calculated using Henderson-Hasselbalch is {ph}.",
    seoMeta: {
      title: "Henderson-Hasselbalch Calculator | Buffer pH Tool",
      description: "Calculate pH or pKa values for chemical systems using weak acids and conjugate bases.",
      keywords: "Henderson Hasselbalch, pKa buffer, weak acid dissociation"
    }
  },
  {
    id: "mass-percent-calculator",
    name: "Mass Percent Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\% \\text{ by mass} = \\frac{\\text{Mass of Solute}}{\\text{Total Solution Mass}} \\times 100",
    inputs: [
      { id: "solute", label: "Mass of Solute", type: "number", defaultValue: 5.0, unit: "g", validation: { min: 0 } },
      { id: "solvent", label: "Mass of Solvent", type: "number", defaultValue: 95.0, unit: "g", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "pct", label: "Mass Percent", formula: "(solute / (solute + solvent)) * 100", unit: "% w/w" }
    ],
    theory: "Mass percentage expresses the concentration of an element or solute in a compound or mixture on a mass-by-mass basis (w/w). It is calculated as the solute mass divided by the total mass of the final solution, multiplied by 100.",
    applications: ["Industrial concentrations", "Geological assays"],
    resultInterpretation: "The solution has a concentration of {pct}% w/w.",
    seoMeta: {
      title: "Mass Percent Calculator | w/w Concentration Finder",
      description: "Determine solute mass percentage (w/w) in solutions by inputting solute and solvent masses.",
      keywords: "mass percent, weight percent, w/w concentration, chemical solver"
    }
  },
  {
    id: "mixing-ratio-calculator",
    name: "Mixing Ratio Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{Ratio} = \\frac{\\text{Mass of Solute}}{\\text{Mass of Solvent}}",
    inputs: [
      { id: "solute", label: "Mass of Solute", type: "number", defaultValue: 10.0, unit: "g", validation: { min: 0 } },
      { id: "solvent", label: "Mass of Solvent", type: "number", defaultValue: 100.0, unit: "g", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "ratio", label: "Mixing Ratio", formula: "solute / solvent", unit: "g/g" },
      { id: "ratio_pct", label: "Ratio Percentage", formula: "(solute / solvent) * 100", unit: "%" }
    ],
    theory: "The mixing ratio expresses the mass of solute relative to the mass of the solvent itself, rather than the total mass of the combined solution. It is commonly used in industrial compounding and meteorology.",
    applications: ["Industrial compound mixing", "Meteorological humidity mixing ratios"],
    resultInterpretation: "The mixing ratio is {ratio} g/g ({ratio_pct}%).",
    seoMeta: {
      title: "Mixing Ratio Calculator | Solute to Solvent Ratio",
      description: "Calculate mixing ratios as a mass-to-mass proportion between solute and solvent.",
      keywords: "mixing ratio, solute mass, solvent mass, chemical blending"
    }
  },
  {
    id: "neutralization-calculator",
    name: "Neutralization Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "n_{\\text{acid}} \\times M_{\\text{acid}} \\times V_{\\text{acid}} = n_{\\text{base}} \\times M_{\\text{base}} \\times V_{\\text{base}}",
    inputs: [
      { id: "m_acid", label: "Acid Molarity (Ma)", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0 } },
      { id: "n_acid", label: "Acid H+ Ions (na)", type: "number", defaultValue: 1, validation: { min: 1 } },
      { id: "v_acid", label: "Acid Volume (Va)", type: "number", defaultValue: 25.0, unit: "mL", validation: { min: 0.1 } },
      { id: "n_base", label: "Base OH- Ions (nb)", type: "number", defaultValue: 1, validation: { min: 1 } },
      { id: "v_base", label: "Base Volume (Vb)", type: "number", defaultValue: 50.0, unit: "mL", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "m_base", label: "Required Base Molarity (Mb)", formula: "(n_acid * m_acid * v_acid) / (n_base * v_base)", unit: "M" }
    ],
    theory: "Neutralization occurs when an acid and base react completely, forming water and a salt. The calculation utilizes equivalence factors (number of dissociable H+ or OH- ions) to determine stoichiometric neutralization endpoints.",
    applications: ["Acid spill neutralization", "Determining unknown base concentration"],
    resultInterpretation: "Stoichiometric neutralization requires a base molarity of {m_base} M.",
    seoMeta: {
      title: "Neutralization Calculator | Acid-Base Stoichiometry",
      description: "Calculate values for neutralization reactions using volumes, molarities, and equivalence factors.",
      keywords: "neutralization calculator, acid base reaction, salt formation, molar equivalence"
    }
  },
  {
    id: "percentage-concentration-to-molarity-calculator",
    name: "Percentage Concentration to Molarity Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "M = \\frac{\\% \\times d \\times 10}{\\text{Molar Mass}}",
    inputs: [
      { id: "pct", label: "Mass Percent Concentration", type: "number", defaultValue: 37.0, unit: "%", validation: { min: 0, max: 100 } },
      { id: "density", label: "Solution Density", type: "number", defaultValue: 1.19, unit: "g/mL", validation: { min: 0.1 } },
      { id: "mw", label: "Solute Molar Mass", type: "number", defaultValue: 36.46, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "molarity", label: "Molarity", formula: "(pct * density * 10) / mw", unit: "M (mol/L)" }
    ],
    theory: "Commercial acids and bases are often sold in mass percentage forms. Converting mass percentage to standard laboratory molarity (M) requires accounting for density (specific gravity) and solute molecular weight.",
    applications: ["Stock solution calculations", "Preparing lab reagents"],
    resultInterpretation: "The percentage concentration corresponds to a molarity of {molarity} M.",
    seoMeta: {
      title: "Percentage to Molarity Calculator | Concentration Tool",
      description: "Convert mass percent (%) concentration to molarity using density and molecular weight.",
      keywords: "percent concentration to molarity, commercial acid density, stock solution prep"
    }
  },
  {
    id: "percent-solution-calculator",
    name: "Percent Solution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\%\\,\\text{Soln} = \\frac{\\text{Solute}}{\\text{Solution}} \\times 100",
    inputs: [
      { id: "solute", label: "Solute (Mass or Vol)", type: "number", defaultValue: 5.0, validation: { min: 0 } },
      { id: "total", label: "Total Solution Volume", type: "number", defaultValue: 100.0, unit: "mL", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "pct", label: "Percent Solution", formula: "(solute / total) * 100", unit: "%" }
    ],
    theory: "A percent solution expresses solute concentration relative to the total volume or mass of the solution (e.g. mass/volume % or volume/volume %). It represents the parts of solute per 100 total parts of solution.",
    applications: ["Standardizing clinical reagents", "Pre-formulating saline concentrations"],
    resultInterpretation: "The solution concentration is {pct}%.",
    seoMeta: {
      title: "Percent Solution Calculator | Volume & Weight %",
      description: "Calculate standard percentage solutions (w/v or v/v) from solute and solution volumes.",
      keywords: "percent solution, v/v calculator, w/v metric"
    }
  },
  {
    id: "ph-calculator",
    name: "pH Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{pH} = -\\log_{10}[\\text{H}^+]",
    inputs: [
      { id: "h_conc", label: "Hydrogen Ion Concentration [H+]", type: "number", defaultValue: 1.0e-7, unit: "M", validation: { min: 0 } }
    ],
    outputs: [
      { id: "ph", label: "pH", formula: "-log10(h_conc)", unit: "" },
      { id: "poh", label: "pOH", formula: "14 - (-log10(h_conc))", unit: "" }
    ],
    theory: "The pH value represents the negative base-10 logarithm of the molar concentration of active hydrogen ions. The sum of pH and pOH always equals 14.0 in aqueous solutions at 25°C.",
    applications: ["Aqueous solution testing", "Biological fermentation checks"],
    resultInterpretation: "The solution has a pH of {ph} (pOH of {poh}).",
    seoMeta: {
      title: "pH & pOH Calculator | Aqueous Acidity Solver",
      description: "Determine aqueous pH and pOH values directly from molar active hydrogen ion concentrations.",
      keywords: "pH calculator, pOH, hydrogen ion log, acid base chemistry"
    }
  },
  {
    id: "raoults-law-calculator",
    name: "Raoult's Law Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "P_{\\text{solution}} = X_{\\text{solvent}} \\times P^\\circ_{\\text{solvent}}",
    inputs: [
      { id: "x_solvent", label: "Mole Fraction of Solvent (X)", type: "number", defaultValue: 0.9, validation: { min: 0, max: 1 } },
      { id: "p_pure", label: "Vapor Pressure of Pure Solvent (P°)", type: "number", defaultValue: 23.8, unit: "torr", validation: { min: 0 } }
    ],
    outputs: [
      { id: "p_soln", label: "Vapor Pressure of Solution (P)", formula: "x_solvent * p_pure", unit: "torr" }
    ],
    theory: "Raoult's law states that the partial vapor pressure of a solvent above a solution is equal to the vapor pressure of the pure solvent multiplied by its mole fraction in the liquid phase.",
    applications: ["Predicting ideal solution vapor pressures", "Analyzing colligative properties"],
    resultInterpretation: "The vapor pressure of the solution is {p_soln} torr.",
    seoMeta: {
      title: "Raoult's Law Calculator | Solution Vapor Pressure",
      description: "Calculate vapor pressures of ideal solutions based on solvent mole fractions.",
      keywords: "Raoult's law, vapor pressure, ideal solution, colligative properties"
    }
  },
  {
    id: "reconstitution-calculator",
    name: "Reconstitution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "V_{\\text{diluent}} = \\frac{\\text{Mass of Solute}}{\\text{Target Concentration}}",
    inputs: [
      { id: "mass", label: "Dry Solute Mass in Vial", type: "number", defaultValue: 500.0, unit: "mg", validation: { min: 0.1 } },
      { id: "target_conc", label: "Target Concentration", type: "number", defaultValue: 50.0, unit: "mg/mL", validation: { min: 0.001 } }
    ],
    outputs: [
      { id: "volume", label: "Diluent Volume to Add", formula: "mass / target_conc", unit: "mL" }
    ],
    theory: "Reconstitution is the process of adding a liquid diluent to dry powder/solutes to achieve a specific target liquid concentration.",
    applications: ["Preparing medical drug doses", "Reconstituting dry biochemical reagents"],
    resultInterpretation: "Add {volume} mL of sterile diluent to the dry vial.",
    seoMeta: {
      title: "Reconstitution Calculator | Reagent powder diluter",
      description: "Determine the exact volume of diluent required to reconstitute powder compounds.",
      keywords: "reconstitution calculator, dry powder vial, diluent volume, dosage prep"
    }
  },
  {
    id: "saponification-value-calculator",
    name: "Saponification Value Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{KOH (g)} = \\frac{\\text{Mass of Fat} \\times \\text{SAP Index}}{1000 \\times (\\%\\,\\text{Purity}/100)}",
    inputs: [
      { id: "mass", label: "Mass of Fat/Oil", type: "number", defaultValue: 500.0, unit: "g", validation: { min: 0.1 } },
      { id: "sap_index", label: "SAP Index (mg KOH / g Fat)", type: "number", defaultValue: 190.0, helpText: "Olive oil is ~190, Coconut oil is ~260." },
      { id: "purity", label: "KOH Purity Scale", type: "number", defaultValue: 90.0, unit: "%", validation: { min: 10, max: 100 } }
    ],
    outputs: [
      { id: "koh_mg", label: "Pure KOH Needed", formula: "mass * sap_index", unit: "mg" },
      { id: "koh_g_total", label: "Raw KOH to Weigh", formula: "(mass * sap_index) / 1000 / (purity / 100)", unit: "g" }
    ],
    theory: "The Saponification Value (SAP value) represents the mass of potassium hydroxide (KOH) in milligrams needed to completely saponify (turn into soap) one gram of fat or oil under standard conditions.",
    applications: ["Soap manufacturing and formulation", "Assaying fatty acids"],
    resultInterpretation: "To saponify the fats, weigh {koh_g_total} g of raw KOH (taking into account the {purity}% purity factor).",
    seoMeta: {
      title: "Saponification Value Calculator | Soap KOH weight",
      description: "Calculate the exact weight of KOH needed to saponify natural oils and fats for soap making.",
      keywords: "saponification calculator, SAP index, soap making chemistry, KOH weight"
    }
  },
  {
    id: "serial-dilution-calculator",
    name: "Serial Dilution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "C_n = \\frac{C_0}{\\text{DF}^n}",
    inputs: [
      { id: "c_initial", label: "Initial Concentration (C0)", type: "number", defaultValue: 100.0, validation: { min: 0.001 } },
      { id: "factor", label: "Dilution Factor per step", type: "number", defaultValue: 10.0, validation: { min: 1.1 } },
      { id: "steps", label: "Number of Dilution Steps (n)", type: "number", defaultValue: 4, validation: { min: 1 } }
    ],
    outputs: [
      { id: "c_final", label: "Final Step Concentration (Cn)", formula: "c_initial / (factor^steps)", unit: "" }
    ],
    theory: "Serial dilutions perform stepwise dilutions where each new step utilizes solution drawn from the preceding step. This creates an exponential concentration gradient, useful in analytical microbiology.",
    applications: ["Preparing standard calibration curves", "Conducting microbiology assays"],
    resultInterpretation: "After {steps} steps, the final solution concentration is {c_final}.",
    seoMeta: {
      title: "Serial Dilution Calculator | Stepwise dilution solver",
      description: "Compute final concentrations for multi-step exponential serial dilution assays.",
      keywords: "serial dilution, stepwise dilution, microbiology curve, chemical dilutions"
    }
  },
  {
    id: "solution-dilution-calculator",
    name: "Solution Dilution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "C_1 \\times V_1 = C_2 \\times V_2",
    inputs: [
      { id: "c1", label: "Initial Concentration (C1)", type: "number", defaultValue: 10.0, validation: { min: 0 } },
      { id: "v1", label: "Initial Volume to Draw (V1)", type: "number", defaultValue: 100.0, unit: "mL", validation: { min: 0 } },
      { id: "c2", label: "Target Concentration (C2)", type: "number", defaultValue: 2.0, validation: { min: 0 } }
    ],
    outputs: [
      { id: "v2", label: "Total Final Volume (V2)", formula: "(c1 * v1) / c2", unit: "mL" },
      { id: "v_diluent", label: "Water volume to add", formula: "((c1 * v1) / c2) - v1", unit: "mL" }
    ],
    theory: "The standard dilution equation ($C_1V_1 = C_2V_2$) states that the mass or moles of solute remains constant during dilution. Adding water increases the volume while decreasing the overall solute concentration.",
    applications: ["Laboratory reagent prep", "Diluting stock standard chemicals"],
    resultInterpretation: "Dilute the {v1} mL of stock by adding {v_diluent} mL of water to reach a total volume of {v2} mL.",
    seoMeta: {
      title: "Solution Dilution Calculator | C1V1 = C2V2 Solver",
      description: "Dilute concentrated stock solutions to target concentrations using the standard C1V1 = C2V2 equation.",
      keywords: "dilution calculator, C1V1 C2V2, reagent dilute, chemistry solvent prep"
    }
  },
  {
    id: "tds-calculator",
    name: "TDS Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{TDS} = \\text{EC} \\times f_{\\text{conv}}",
    inputs: [
      { id: "ec", label: "Electrical Conductivity (EC)", type: "number", defaultValue: 500.0, unit: "μS/cm", validation: { min: 0 } },
      { id: "factor", label: "Conversion Factor", type: "number", defaultValue: 0.64, helpText: "Usually ranges between 0.5 and 0.7 depending on salt composition." }
    ],
    outputs: [
      { id: "tds", label: "Total Dissolved Solids (TDS)", formula: "ec * factor", unit: "mg/L (ppm)" }
    ],
    theory: "Total Dissolved Solids (TDS) measures the total organic and inorganic salts dissolved in water. Since dissolved ions conduct electricity, electrical conductivity (EC) is measured and scaled by a conversion factor to estimate TDS.",
    applications: ["Hydroponics water testing", "Aquarium monitoring", "Water filtration quality audits"],
    resultInterpretation: "The estimated Total Dissolved Solids is {tds} ppm.",
    seoMeta: {
      title: "TDS Calculator | Total Dissolved Solids from EC",
      description: "Estimate aqueous TDS (ppm) from electrical conductivity (EC) measurements.",
      keywords: "TDS calculator, total dissolved solids, electrical conductivity, EC ppm hydroponics"
    }
  },
  {
    id: "titration-calculator",
    name: "Titration Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "M_{\\text{analyte}} = \\frac{M_{\\text{titrant}} \\times V_{\\text{titrant}}}{V_{\\text{analyte}}}",
    inputs: [
      { id: "m_titrant", label: "Molarity of Titrant (M1)", type: "number", defaultValue: 0.1, unit: "M", validation: { min: 0 } },
      { id: "v_titrant", label: "Volume of Titrant Used (V1)", type: "number", defaultValue: 15.4, unit: "mL", validation: { min: 0.1 } },
      { id: "v_analyte", label: "Volume of Analyte Sample (V2)", type: "number", defaultValue: 25.0, unit: "mL", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "m_analyte", label: "Molarity of Analyte (M2)", formula: "(m_titrant * v_titrant) / v_analyte", unit: "M" }
    ],
    theory: "Titration is a standard laboratory method of quantitative chemical analysis used to determine the concentration of an identified analyte. It relies on a stoichiometric equivalence reaction between titrant and analyte.",
    applications: ["Determining acid/base concentrations", "Analyzing food and beverage samples"],
    resultInterpretation: "The analyte has a concentration of {m_analyte} M.",
    seoMeta: {
      title: "Titration Concentration Calculator | Volumetric Analysis",
      description: "Determine the exact molarity of an unknown chemical sample from volumetric titration data.",
      keywords: "titration calculator, analyte concentration, equivalence point, volumetric chemistry"
    }
  },
  {
    id: "water-hardness-calculator",
    name: "Water Hardness Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "\\text{Hardness} = 2.497 \\times [\\text{Ca}^{2+}] + 4.118 \\times [\\text{Mg}^{2+}]",
    inputs: [
      { id: "ca", label: "Calcium Ion Conc. [Ca2+]", type: "number", defaultValue: 40.0, unit: "mg/L", validation: { min: 0 } },
      { id: "mg", label: "Magnesium Ion Conc. [Mg2+]", type: "number", defaultValue: 12.0, unit: "mg/L", validation: { min: 0 } }
    ],
    outputs: [
      { id: "hardness", label: "Hardness as CaCO3", formula: "2.497 * ca + 4.118 * mg", unit: "mg/L" }
    ],
    theory: "Water hardness is primarily caused by dissolved divalent cations, chiefly calcium ($Ca^{2+}$) and magnesium ($Mg^{2+}$). Hardness values are standardized in terms of milligrams per liter of calcium carbonate ($CaCO_3$) equivalence.",
    applications: ["Residential water quality audits", "Industrial boiler water conditioning"],
    resultInterpretation: "The water hardness is {hardness} mg/L CaCO3. Values > 180 indicate very hard water.",
    seoMeta: {
      title: "Water Hardness Calculator | CaCO3 Equivalence Solver",
      description: "Calculate overall water hardness in mg/L of CaCO3 equivalents using calcium and magnesium concentrations.",
      keywords: "water hardness calculator, calcium magnesium, CaCO3 equivalent, water conditioning"
    }
  }
];
