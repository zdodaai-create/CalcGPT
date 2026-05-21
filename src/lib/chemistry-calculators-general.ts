import { CalculatorConfig } from "./calculator-types";

export const CHEMISTRY_CALCULATORS_GENERAL: CalculatorConfig[] = [
  // GENERAL CHEMISTRY (13 calculators)
  {
    id: "atom-calculator",
    name: "Atom Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Mass Number} = \\text{Protons} + \\text{Neutrons}",
    inputs: [
      { id: "atomic_number", label: "Atomic Number (Protons)", type: "number", defaultValue: 6, validation: { min: 1, max: 118 } },
      { id: "mass_number", label: "Mass Number (Total Nucleons)", type: "number", defaultValue: 12, validation: { min: 1 } },
      { id: "charge", label: "Ionic Charge", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "protons", label: "Protons", formula: "atomic_number", unit: "" },
      { id: "neutrons", label: "Neutrons", formula: "mass_number - atomic_number", unit: "" },
      { id: "electrons", label: "Electrons", formula: "atomic_number - charge", unit: "" }
    ],
    theory: "An atom is defined by its number of protons (atomic number, Z). The mass number (A) represents the total number of protons and neutrons in the nucleus. Electrons balance the positive proton charge; in an ion, the number of electrons differs from Z based on the overall net charge.",
    applications: ["Determining isotopic compositions", "Analyzing charged ions", "Balancing chemical species"],
    resultInterpretation: "The atom has {protons} protons, {neutrons} neutrons, and {electrons} electrons.",
    seoMeta: {
      title: "Atom Calculator | Calculate Protons, Neutrons, Electrons",
      description: "Quickly determine the number of protons, neutrons, and electrons in any atom or ion using the atomic number, mass number, and ionic charge.",
      keywords: "atom calculator, protons, neutrons, electrons, chemistry, atomic structure"
    }
  },
  {
    id: "atomic-mass-calculator",
    name: "Atomic Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Atomic Mass} \\approx p \\times 1.0073\\,\\text{amu} + n \\times 1.0087\\,\\text{amu} + e \\times 0.0005\\,\\text{amu}",
    inputs: [
      { id: "protons", label: "Number of Protons", type: "number", defaultValue: 6, validation: { min: 1 } },
      { id: "neutrons", label: "Number of Neutrons", type: "number", defaultValue: 6, validation: { min: 0 } }
    ],
    outputs: [
      { id: "mass", label: "Estimated Atomic Mass", formula: "protons * 1.007276 + neutrons * 1.008664", unit: "amu" }
    ],
    theory: "Atomic mass is estimated by summing the mass of individual protons (~1.0073 amu) and neutrons (~1.0087 amu). This estimation neglects the binding energy mass defect, which slightly reduces the actual nuclear mass according to Einstein's equation E=mc².",
    applications: ["Amu calculations", "Isotopic study", "Nuclear mass defect estimates"],
    resultInterpretation: "The estimated atomic mass is {mass} amu.",
    seoMeta: {
      title: "Atomic Mass Calculator | Isotope Weight Estimator",
      description: "Calculate the total weight of an isotope based on its proton and neutron counts with scientific precision.",
      keywords: "atomic mass calculator, amu weight, proton mass, neutron mass"
    }
  },
  {
    id: "average-atomic-mass-calculator",
    name: "Average Atomic Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Average Mass} = \\sum (\\text{Mass}_i \\times \\text{Abundance}_i)",
    inputs: [
      { id: "m1", label: "Isotope 1 Mass", type: "number", defaultValue: 34.969, unit: "amu" },
      { id: "a1", label: "Isotope 1 Abundance", type: "number", defaultValue: 75.77, unit: "%", validation: { min: 0, max: 100 } },
      { id: "m2", label: "Isotope 2 Mass", type: "number", defaultValue: 36.966, unit: "amu" },
      { id: "a2", label: "Isotope 2 Abundance", type: "number", defaultValue: 24.23, unit: "%", validation: { min: 0, max: 100 } }
    ],
    outputs: [
      { id: "avg", label: "Average Atomic Mass", formula: "(m1 * a1 / 100) + (m2 * a2 / 100)", unit: "amu" }
    ],
    theory: "The average atomic mass of an element is the weighted average of its naturally occurring isotopes. This is the mass listed on the Periodic Table.",
    applications: ["Mass spectrometry verification", "Natural isotope abundance research"],
    resultInterpretation: "The average atomic mass is {avg} amu.",
    seoMeta: {
      title: "Average Atomic Mass Calculator | Weighted Isotopes",
      description: "Determine the weighted average atomic mass of an element using stable isotope masses and their fractional abundances.",
      keywords: "average atomic mass, isotope abundance, weighted average chemistry"
    }
  },
  {
    id: "bond-order-calculator",
    name: "Bond Order Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Bond Order} = \\frac{\\text{Bonding } e^- - \\text{Antibonding } e^-}{2}",
    inputs: [
      { id: "bonding", label: "Bonding Electrons", type: "number", defaultValue: 8, validation: { min: 0 } },
      { id: "antibonding", label: "Antibonding Electrons", type: "number", defaultValue: 2, validation: { min: 0 } }
    ],
    outputs: [
      { id: "order", label: "Bond Order", formula: "(bonding - antibonding) / 2", unit: "" }
    ],
    theory: "Bond order measures bond strength and stability. A higher bond order (1 for single, 2 for double, 3 for triple) indicates a stronger, shorter chemical bond. A bond order of 0 means the molecular orbital structure is unstable and the bond cannot form.",
    applications: ["Molecular orbital theory", "Determining molecular stability"],
    resultInterpretation: "The resulting Bond Order is {order}.",
    seoMeta: {
      title: "Bond Order Calculator | Molecular Orbital Tool",
      description: "Compute the bond order of diatomic molecules using bonding and antibonding electron counts.",
      keywords: "bond order calculator, molecular orbital theory, bonding electrons"
    }
  },
  {
    id: "chemical-name-calculator",
    name: "Chemical Name Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Molar Mass} = \\sum M_i",
    inputs: [
      { id: "formula", label: "Chemical Formula", type: "text", defaultValue: "NaCl", placeholder: "e.g., NaCl, H2O, Ca(OH)2, CO2" }
    ],
    outputs: [
      { id: "mass", label: "Molar Mass", formula: "0.0", unit: "g/mol" },
      { id: "classification", label: "Compound Classification", formula: "0.0", unit: "" }
    ],
    theory: "Different chemical compounds are grouped into classifications such as ionic salts, polar/non-polar covalent molecules, or mineral acids based on their atomic components, bonding dynamics, and aqueous properties.",
    applications: ["Quick nomenclature analysis", "Molecular categorization"],
    resultInterpretation: "The chemical formula {formula} has a molar mass of {mass} g/mol and is classified as a {classification}.",
    seoMeta: {
      title: "Chemical Name & Formula Calculator | CalcVerse AI",
      description: "Classify chemical formulas and calculate their molecular mass instantly.",
      keywords: "chemical name, compound class, ionic, covalent, molar mass"
    }
  },
  {
    id: "effective-nuclear-charge-calculator",
    name: "Effective Nuclear Charge Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Z_{\\text{eff}} = Z - S",
    inputs: [
      { id: "z", label: "Atomic Number (Z)", type: "number", defaultValue: 11, validation: { min: 1 } },
      { id: "s", label: "Shielding Constant (S)", type: "number", defaultValue: 10, validation: { min: 0 } }
    ],
    outputs: [
      { id: "zeff", label: "Effective Nuclear Charge (Zeff)", formula: "z - s", unit: "" }
    ],
    theory: "Effective nuclear charge (Zeff) is the net positive charge experienced by valence electrons in a multi-electron atom. Core electrons partially shield the valence electrons from the full electrostatic attraction of the positive nucleus.",
    applications: ["Predicting atomic size trends", "Explaining ionization energy trends"],
    resultInterpretation: "The effective nuclear charge is {zeff}.",
    seoMeta: {
      title: "Effective Nuclear Charge Calculator | Slater's Shielding",
      description: "Calculate the net positive pull felt by valence electrons by accounting for shielding effects.",
      keywords: "Zeff calculator, effective nuclear charge, shielding constant"
    }
  },
  {
    id: "electron-configuration-calculator",
    name: "Electron Configuration Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Aufbau Ordering: 1s, 2s, 2p, 3s, 3p, 4s, 3d...}",
    inputs: [
      { id: "atomic_number", label: "Atomic Number (Z)", type: "number", defaultValue: 11, validation: { min: 1, max: 118 } }
    ],
    outputs: [
      { id: "configuration", label: "Electron Configuration", formula: "0.0", unit: "" }
    ],
    theory: "Electron configurations describe the exact orbital distribution of an atom's electrons in the ground state, obeying the Aufbau Principle, Pauli Exclusion Principle, and Hund's Rule.",
    applications: ["Quantum mechanical representations", "Periodic table trends", "Valence electron analysis"],
    resultInterpretation: "The ground state electron configuration for atomic number {atomic_number} is {configuration}.",
    seoMeta: {
      title: "Electron Configuration Calculator | Aufbau Solver",
      description: "Find the quantum electron orbital configuration of any element from its atomic number up to 118.",
      keywords: "electron configuration calculator, Aufbau orbitals, s p d f, quantum numbers"
    }
  },
  {
    id: "electronegativity-calculator",
    name: "Electronegativity Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\Delta \\text{EN} = |\\chi_A - \\chi_B|",
    inputs: [
      { id: "en1", label: "Electronegativity Atom A", type: "number", defaultValue: 3.44, validation: { min: 0 } },
      { id: "en2", label: "Electronegativity Atom B", type: "number", defaultValue: 2.2, validation: { min: 0 } }
    ],
    outputs: [
      { id: "diff", label: "Electronegativity Difference (ΔEN)", formula: "abs(en1 - en2)", unit: "" }
    ],
    theory: "Electronegativity measures the affinity of an atom to attract bonding electrons. The difference in electronegativity (ΔEN) indicates chemical bond polarity: ΔEN > 1.7 is ionic, 0.4 - 1.7 is polar covalent, and < 0.4 is non-polar covalent.",
    applications: ["Bond polarization evaluation", "Molecular dipole moment estimation"],
    resultInterpretation: "The electronegativity difference is {diff}.",
    seoMeta: {
      title: "Electronegativity Difference Calculator | Bond Polarity",
      description: "Calculate electronegativity difference (ΔEN) to determine whether a chemical bond is ionic or covalent.",
      keywords: "electronegativity difference, Pauling scale, polar covalent bond, ionic bond"
    }
  },
  {
    id: "molar-mass-calculator",
    name: "Molar Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Molar Mass} = \\sum_i (\\text{Atomic Weight}_i \\times \\text{Count}_i)",
    inputs: [
      { id: "formula", label: "Chemical Formula", type: "text", defaultValue: "H2O", placeholder: "e.g., C6H12O6, Ca(OH)2" }
    ],
    outputs: [
      { id: "mass", label: "Molar Mass", formula: "0.0", unit: "g/mol" }
    ],
    theory: "Molar mass is the mass in grams of one mole of a chemical substance. It is computed by multiplying the atomic mass of each element in the formula by the number of atoms present and summing the products.",
    applications: ["Stoichiometry calculations", "Preparing lab reagents", "Molar calculations"],
    resultInterpretation: "The molar mass of {formula} is {mass} g/mol.",
    seoMeta: {
      title: "Molar Mass Calculator | Molecular Weight Finder",
      description: "Calculate the exact molar mass and molecular weight of any chemical formula instantly.",
      keywords: "molar mass calculator, molecular weight, stoichiometric mass"
    }
  },
  {
    id: "percent-composition-calculator",
    name: "Percent Composition Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\% \\text{ Composition} = \\frac{\\text{Element Mass}}{\\text{Total Compound Mass}} \\times 100",
    inputs: [
      { id: "element", label: "Atomic Mass of Element", type: "number", defaultValue: 16.00, unit: "amu", validation: { min: 0.1 } },
      { id: "count", label: "Atom Count in Formula", type: "number", defaultValue: 1, validation: { min: 1 } },
      { id: "total", label: "Total Molar Mass of Compound", type: "number", defaultValue: 18.015, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "percent", label: "Percent Composition", formula: "((element * count) / total) * 100", unit: "%" }
    ],
    theory: "Percent composition is the percent by mass of each element in a compound. It is calculated by dividing the total mass of a single element in one mole of compound by the total molar mass, then multiplying by 100.",
    applications: ["Empirical formula calculations", "Assaying chemical purity", "Analytical chemistry"],
    resultInterpretation: "The element comprises {percent}% of the total compound mass.",
    seoMeta: {
      title: "Percent Composition Calculator | Mass Percentage Tool",
      description: "Determine the mass percentage of individual elements in a chemical compound easily.",
      keywords: "percent composition, mass percentage, element ratio, chemistry solver"
    }
  },
  {
    id: "percent-ionic-character-calculator",
    name: "Percent Ionic Character Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\%\\,\\text{Ionic} = \\left(1 - e^{-0.25(\\Delta \\text{EN})^2}\\right) \\times 100",
    inputs: [
      { id: "den", label: "Electronegativity Difference (ΔEN)", type: "number", defaultValue: 1.7, validation: { min: 0 } }
    ],
    outputs: [
      { id: "ionic", label: "Percent Ionic Character", formula: "(1 - exp(-0.25 * den^2)) * 100", unit: "%" }
    ],
    theory: "Using Pauling's equation, the percent ionic character represents the degree to which a covalent bond exhibits ionic properties based on the differences in electronegativity of the two bonded atomic nuclei.",
    applications: ["Determining bond ionic thresholds", "Structural chemistry analysis"],
    resultInterpretation: "A electronegativity difference of {den} results in {ionic}% ionic character.",
    seoMeta: {
      title: "Percent Ionic Character Calculator | Pauling Equation",
      description: "Estimate the partial ionic character of a bond from the electronegativity differences between atoms.",
      keywords: "percent ionic character, Pauling equation, dipole character"
    }
  },
  {
    id: "pka-calculator",
    name: "pKa Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{p}K_a = -\\log_{10}(K_a)",
    inputs: [
      { id: "ka", label: "Acid Dissociation Constant (Ka)", type: "number", defaultValue: 1.8e-5, validation: { min: 0 } }
    ],
    outputs: [
      { id: "pka", label: "pKa", formula: "-log10(ka)", unit: "" }
    ],
    theory: "pKa is a quantitative indicator of acid strength. A lower pKa value corresponds to a higher acid dissociation constant (Ka), indicating a stronger, more fully dissociated acid in aqueous solutions.",
    applications: ["Acid-base equilibrium studies", "Buffer capacity evaluations"],
    resultInterpretation: "The pKa value is {pka}.",
    seoMeta: {
      title: "pKa Calculator | Acid Strength Solver",
      description: "Convert the acid dissociation constant (Ka) to pKa with standard scientific precision.",
      keywords: "pKa calculator, acid strength, dissociation constant, Ka log"
    }
  },
  {
    id: "quiz-electron-configuration-calculator",
    name: "Quiz: Electron Configuration Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\\text{Score} = \\text{Quiz Validation}",
    inputs: [
      { id: "atomic_number", label: "Atomic Number (Z)", type: "number", defaultValue: 6, validation: { min: 1, max: 118 } },
      { id: "guess", label: "Your Configuration Guess", type: "text", placeholder: "e.g., 1s2 2s2 2p2" }
    ],
    outputs: [
      { id: "actual_config", label: "Actual Configuration", formula: "0.0", unit: "" },
      { id: "is_correct", label: "Quiz Evaluation", formula: "0.0", unit: "" }
    ],
    theory: "Practicing writing electron configurations reinforces the Aufbau Principle, shell hierarchies, and helps students master electronic configurations of elements on exams.",
    applications: ["Educational quiz testing", "Active learning in general chemistry"],
    resultInterpretation: "The correct config is {actual_config}, so your answer is {is_correct}.",
    seoMeta: {
      title: "Electron Configuration Quiz | Practice Tool",
      description: "Test your chemistry knowledge by guessing configurations and comparing them with actual scientific configurations.",
      keywords: "electron configuration quiz, test chemistry, chemistry practice"
    }
  },

  // STOICHIOMETRY (15 calculators)
  {
    id: "afr-calculator",
    name: "AFR Calculator (Air-Fuel Ratio)",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{AFR} = \\frac{\\text{Mass of Air}}{\\text{Mass of Fuel}}",
    inputs: [
      { id: "air", label: "Mass of Air", type: "number", defaultValue: 14.7, unit: "kg", validation: { min: 0 } },
      { id: "fuel", label: "Mass of Fuel", type: "number", defaultValue: 1.0, unit: "kg", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "afr", label: "Air-Fuel Ratio", formula: "air / fuel", unit: ":1" }
    ],
    theory: "The Air-Fuel Ratio (AFR) is the mass ratio of air to solid, liquid, or gaseous fuel present in a combustion reaction. A stoichiometric AFR contains exactly the right amount of oxygen to oxidize all the fuel.",
    applications: ["Engine tuning and diagnostics", "Chemical combustion engineering"],
    resultInterpretation: "The combustion air-fuel ratio is {afr}:1.",
    seoMeta: {
      title: "Air-Fuel Ratio (AFR) Calculator | Combustion Tool",
      description: "Calculate air-fuel ratios to determine lean, rich, or stoichiometric combustion mixtures.",
      keywords: "AFR calculator, air-fuel ratio, combustion stoichiometry, lean rich"
    }
  },
  {
    id: "atom-economy-calculator",
    name: "Atom Economy Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\% \\text{ Atom Economy} = \\frac{\\text{Molecular Weight of Desired Product}}{\\text{Total Molecular Weight of Reactants}} \\times 100",
    inputs: [
      { id: "product_mw", label: "Desired Product Molecular Weight", type: "number", defaultValue: 80.0, unit: "g/mol", validation: { min: 0.1 } },
      { id: "reactants_mw", label: "Total Reactants Molecular Weight", type: "number", defaultValue: 100.0, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "economy", label: "Atom Economy", formula: "(product_mw / reactants_mw) * 100", unit: "%" }
    ],
    theory: "Atom economy is a cornerstone of green chemistry. It calculates the efficiency of a chemical reaction by evaluating what fraction of starting materials ends up in the target product, minimizing waste.",
    applications: ["Industrial process efficiency", "Green chemistry evaluations"],
    resultInterpretation: "The green chemical reaction efficiency is {economy}% atom economy.",
    seoMeta: {
      title: "Atom Economy Calculator | Green Chemistry Efficiency",
      description: "Compute the atom economy percentage of a reaction to optimize sustainability and yield.",
      keywords: "atom economy, green chemistry, reaction efficiency, waste minimization"
    }
  },
  {
    id: "avogadros-number-calculator",
    name: "Avogadro's Number Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{Particles} = n \\times 6.02214 \\times 10^{23}",
    inputs: [
      { id: "moles", label: "Amount of Substance (n)", type: "number", defaultValue: 1.0, unit: "mols", validation: { min: 0 } }
    ],
    outputs: [
      { id: "particles", label: "Total Particles Count", formula: "moles * 6.02214e23", unit: "particles" }
    ],
    theory: "Avogadro's constant ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$) defines the number of constituent particles (usually atoms or molecules) contained in exactly one mole of substance.",
    applications: ["Converting macroscopic moles to atomic particles", "Basic molecular dynamics"],
    resultInterpretation: "There are {particles} particles in the specified mole count.",
    seoMeta: {
      title: "Avogadro's Number Calculator | Moles to Particles",
      description: "Calculate the exact number of atoms or molecules in a given quantity of moles using Avogadro's Constant.",
      keywords: "Avogadro's number, moles to particles, chemistry calculator, atomic count"
    }
  },
  {
    id: "empirical-formula-calculator",
    name: "Empirical Formula Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{Empirical Ratio} = \\text{Simplify Ratio of Moles}",
    inputs: [
      { id: "m1", label: "Mass of Element 1", type: "number", defaultValue: 40.0, unit: "g" },
      { id: "a1", label: "Atomic Mass of Element 1", type: "number", defaultValue: 12.011, unit: "amu" },
      { id: "m2", label: "Mass of Element 2", type: "number", defaultValue: 6.7, unit: "g" },
      { id: "a2", label: "Atomic Mass of Element 2", type: "number", defaultValue: 1.008, unit: "amu" }
    ],
    outputs: [
      { id: "n1", label: "Moles of Element 1", formula: "m1 / a1", unit: "mol" },
      { id: "n2", label: "Moles of Element 2", formula: "m2 / a2", unit: "mol" },
      { id: "ratio", label: "Simplest Integer Ratio", formula: "0.0", unit: "" }
    ],
    theory: "The empirical formula of a compound represents the simplest whole-number ratio of the elements present. It is derived by converting elemental masses to moles, dividing by the smallest mole value, and adjusting to integers.",
    applications: ["Analyzing organic combustion results", "Solving elemental percentages"],
    resultInterpretation: "The moles are {n1} of Element 1 and {n2} of Element 2. Ratio is {ratio}.",
    seoMeta: {
      title: "Empirical Formula Calculator | Simplest Atomic Ratio",
      description: "Compute simplest empirical ratios from element weights and molecular weights.",
      keywords: "empirical formula, simplest ratio, mole calculation, stoichiometry solver"
    }
  },
  {
    id: "grams-to-moles-calculator",
    name: "Grams to Moles Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{Moles} = \\frac{\\text{Mass (g)}}{\\text{Molar Mass (g/mol)}}",
    inputs: [
      { id: "mass", label: "Mass", type: "number", defaultValue: 10.0, unit: "g", validation: { min: 0 } },
      { id: "mw", label: "Molar Mass", type: "number", defaultValue: 18.015, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "moles", label: "Moles", formula: "mass / mw", unit: "mol" }
    ],
    theory: "Stoichiometry bridges the macroscopic world of mass with the microscopic scale of molecular count using moles. Converting grams to moles is the primary step in resolving most balanced reaction limits.",
    applications: ["Reagent preparation", "Theoretical yield baseline setup"],
    resultInterpretation: "The substance corresponds to {moles} moles.",
    seoMeta: {
      title: "Grams to Moles Calculator | Mass Conversion Tool",
      description: "Convert compound mass in grams to moles using chemical molar mass.",
      keywords: "grams to moles, stoichiometry converter, molar mass conversion"
    }
  },
  {
    id: "hydrogen-ion-concentration-calculator",
    name: "Hydrogen Ion Concentration Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "[\\text{H}^+] = 10^{-\\text{pH}}",
    inputs: [
      { id: "ph", label: "pH Level", type: "number", defaultValue: 7.0, validation: { min: 0, max: 14 } }
    ],
    outputs: [
      { id: "h_conc", label: "[H+] Concentration", formula: "10^(-ph)", unit: "M" }
    ],
    theory: "The pH scale is a negative logarithmic indicator of active hydrogen ion concentration. This calculator converts the exponential pH index back into aqueous concentration molar values.",
    applications: ["Analyzing water quality", "Bio-buffer prep verification"],
    resultInterpretation: "The active hydrogen ion concentration is {h_conc} M.",
    seoMeta: {
      title: "Hydrogen Ion Concentration Calculator | pH to [H+]",
      description: "Calculate [H+] molarity concentration directly from pH scale values.",
      keywords: "[H+] concentration, pH to hydrogen ion, active acidity"
    }
  },
  {
    id: "molality-calculator",
    name: "Molality Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "m = \\frac{\\text{Moles of Solute}}{\\text{Mass of Solvent (kg)}}",
    inputs: [
      { id: "moles", label: "Moles of Solute", type: "number", defaultValue: 0.5, unit: "mol", validation: { min: 0 } },
      { id: "solvent_kg", label: "Mass of Solvent", type: "number", defaultValue: 1.0, unit: "kg", validation: { min: 0.01 } }
    ],
    outputs: [
      { id: "molality", label: "Molality", formula: "moles / solvent_kg", unit: "mol/kg (m)" }
    ],
    theory: "Molality (m) measures concentration independent of temperature and pressure because liquid volumes change with warmth, while masses do not. It represents moles of solute per single kilogram of liquid solvent.",
    applications: ["Boiling point elevation calculations", "Freezing point depression studies"],
    resultInterpretation: "The solution concentration is {molality} m.",
    seoMeta: {
      title: "Molality Calculator | Mol/Kg Concentration Tool",
      description: "Calculate the molality (m) of a solution using solute moles and solvent weight.",
      keywords: "molality calculator, mol/kg, concentration, thermodynamics, chemistry solver"
    }
  },
  {
    id: "molarity-calculator",
    name: "Molarity Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "M = \\frac{\\text{Moles of Solute}}{\\text{Volume of Solution (L)}}",
    inputs: [
      { id: "moles", label: "Moles of Solute", type: "number", defaultValue: 0.5, unit: "mol", validation: { min: 0 } },
      { id: "volume", label: "Volume of Solution", type: "number", defaultValue: 1.0, unit: "L", validation: { min: 0.01 } }
    ],
    outputs: [
      { id: "molarity", label: "Molarity", formula: "moles / volume", unit: "M (mol/L)" }
    ],
    theory: "Molarity (M) is the most standard metric of chemical solute concentrations in laboratory use. It equates to the number of moles of dissolved solute per liter of overall liquid solution.",
    applications: ["Aqueous solution preparation", "Stoichiometrical titrations"],
    resultInterpretation: "The solution molarity is {molarity} M.",
    seoMeta: {
      title: "Molarity Calculator | Molar Concentration Solver",
      description: "Calculate molarity (mol/L) based on solute moles and solvent volume.",
      keywords: "molarity calculator, molar concentration, chemistry stoichiometry, molar solver"
    }
  },
  {
    id: "molar-mass-of-gas-calculator",
    name: "Molar Mass of Gas Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "M = \\frac{\\rho R T}{P}",
    inputs: [
      { id: "density", label: "Gas Density (ρ)", type: "number", defaultValue: 1.25, unit: "g/L", validation: { min: 0 } },
      { id: "temp", label: "Temperature (T)", type: "number", defaultValue: 273.15, unit: "K", validation: { min: 1 } },
      { id: "pressure", label: "Pressure (P)", type: "number", defaultValue: 1.0, unit: "atm", validation: { min: 0.01 } }
    ],
    outputs: [
      { id: "molar_mass", label: "Molar Mass of Gas", formula: "(density * 0.08206 * temp) / pressure", unit: "g/mol" }
    ],
    theory: "Combining the ideal gas equation ($PV = nRT$) with density ($\\rho = m/V$) allows us to calculate the molar mass ($M$) of an ideal gas based on its measured density under constant pressure and temperature conditions.",
    applications: ["Gas identification", "Vapor molecular weight discovery"],
    resultInterpretation: "The molecular weight of the gas is {molar_mass} g/mol.",
    seoMeta: {
      title: "Molar Mass of Gas Calculator | Ideal Gas Tool",
      description: "Compute the molar mass of any gas using density, temperature, and absolute pressure.",
      keywords: "gas molar mass, density gas, ideal gas law, chemical vapor density"
    }
  },
  {
    id: "mole-calculator",
    name: "Mole Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "n = \\frac{\\text{Mass}}{\\text{Molar Mass}} = \\text{Molarity} \\times \\text{Volume}",
    inputs: [
      { id: "mass", label: "Mass of Substance", type: "number", defaultValue: 10.0, unit: "g", validation: { min: 0 } },
      { id: "mw", label: "Molar Mass", type: "number", defaultValue: 58.44, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "moles", label: "Moles (n)", formula: "mass / mw", unit: "mol" }
    ],
    theory: "Moles represent the standard chemical metric to determine the number of physical reactive particles in any material sample, standardizing bulk masses against relative atomic weights.",
    applications: ["Reagent calculations", "Theoretical balance"],
    resultInterpretation: "The resulting moles are {moles} mol.",
    seoMeta: {
      title: "Mole Calculator | Molar Stoichiometry Solver",
      description: "Calculate chemical moles dynamically from mass and molar weights.",
      keywords: "mole calculator, chemical moles, stoichiometric factor"
    }
  },
  {
    id: "molecular-weight-calculator",
    name: "Molecular Weight Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{MW} = \\sum M_i",
    inputs: [
      { id: "formula", label: "Chemical Formula", type: "text", defaultValue: "C6H12O6", placeholder: "e.g., NaCl, C2H5OH" }
    ],
    outputs: [
      { id: "mass", label: "Molecular Weight", formula: "0.0", unit: "g/mol" }
    ],
    theory: "Molecular weight (often used interchangeably with formula weight or molar mass) sums the relative atomic masses of all elements represented in a neutral molecular structure.",
    applications: ["Structural calculations", "Assaying chemistry formulas"],
    resultInterpretation: "The chemical molecular weight of {formula} is {mass} g/mol.",
    seoMeta: {
      title: "Molecular Weight Calculator | Chemical Formula Weight",
      description: "Determine the exact formula molecular weight of any complex structure.",
      keywords: "molecular weight, formula weight, molar mass calculator"
    }
  },
  {
    id: "mole-fraction-calculator",
    name: "Mole Fraction Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\chi_i = \\frac{n_i}{\\sum n_j}",
    inputs: [
      { id: "n_solute", label: "Moles of Component", type: "number", defaultValue: 2.0, unit: "mol", validation: { min: 0 } },
      { id: "n_total", label: "Total Moles in Mixture", type: "number", defaultValue: 10.0, unit: "mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "fraction", label: "Mole Fraction (χ)", formula: "n_solute / n_total", unit: "" },
      { id: "percent", label: "Mole Percent", formula: "(n_solute / n_total) * 100", unit: "%" }
    ],
    theory: "Mole fraction ($\chi$) indicates the relative abundance of a specific component in a mixture, defined as the ratio of component moles to the sum of moles of all chemical species present.",
    applications: ["Raoult's law vapor estimations", "Partial gas pressures calculations"],
    resultInterpretation: "The mole fraction is {fraction} (or {percent} mole percent).",
    seoMeta: {
      title: "Mole Fraction Calculator | Mixture Ratio Solver",
      description: "Calculate the mole fraction (χ) and mole percent of components in chemical mixtures.",
      keywords: "mole fraction, mole percent, mixture stoichiometry, partial pressure prep"
    }
  },
  {
    id: "moles-to-atoms-converter",
    name: "Moles to Atoms Converter",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\\text{Atoms} = n \\times 6.02214 \\times 10^{23} \\times \\text{Atoms Per Molecule}",
    inputs: [
      { id: "moles", label: "Moles (n)", type: "number", defaultValue: 1.5, validation: { min: 0 } },
      { id: "atom_count", label: "Atoms Per Molecule", type: "number", defaultValue: 3, helpText: "For water (H2O), this value is 3." }
    ],
    outputs: [
      { id: "atoms", label: "Total Atoms", formula: "moles * 6.02214e23 * atom_count", unit: "atoms" }
    ],
    theory: "Converting moles to absolute atoms requires multiplying the chemical moles by Avogadro's constant, then factoring in how many individual atomic elements constitute each molecular structure.",
    applications: ["Macroscopic mole conversions", "Material atomic distributions"],
    resultInterpretation: "The sample contains {atoms} total atoms.",
    seoMeta: {
      title: "Moles to Atoms Converter | Molecular Atoms count",
      description: "Convert moles to individual elemental atoms by taking molecular constitution into account.",
      keywords: "moles to atoms, Avogadro count, atoms converter, stoichiometry"
    }
  },
  {
    id: "normality-calculator",
    name: "Normality Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "N = M \\times f_{eq} = \\frac{\\text{Equivalent Solute}}{\\text{Liters Solution}}",
    inputs: [
      { id: "molarity", label: "Molarity (M)", type: "number", defaultValue: 0.5, unit: "mol/L", validation: { min: 0 } },
      { id: "factor", label: "Equivalence Factor (f_eq)", type: "number", defaultValue: 2.0, helpText: "Protons released per acid mole (e.g., 2 for H2SO4)." }
    ],
    outputs: [
      { id: "normality", label: "Normality (N)", formula: "molarity * factor", unit: "N (eq/L)" }
    ],
    theory: "Normality (N) measures concentration in terms of reactive equivalents per liter of solution. For acids and bases, the equivalent factor represents the number of active hydrogen ($H^+$) or hydroxide ($OH^-$) ions a molecule yields in neutralization.",
    applications: ["Acid-base titration calibrations", "Analytical redox formulations"],
    resultInterpretation: "The solution normality is {normality} N.",
    seoMeta: {
      title: "Normality (N) Calculator | Active Equivalent Concentration",
      description: "Convert solution molarity to normality based on active chemical equivalence factors.",
      keywords: "normality calculator, equivalents per liter, molarity to normality, acid titration"
    }
  },
  {
    id: "ppm-to-molarity-calculator",
    name: "PPM to Molarity Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "M = \\frac{\\text{ppm}}{\\text{Molar Mass} \\times 1000}",
    inputs: [
      { id: "ppm", label: "Concentration (ppm)", type: "number", defaultValue: 100.0, validation: { min: 0 } },
      { id: "mw", label: "Molar Mass of Solute", type: "number", defaultValue: 58.44, unit: "g/mol", validation: { min: 0.1 } }
    ],
    outputs: [
      { id: "molarity", label: "Molarity", formula: "ppm / (mw * 1000)", unit: "M (mol/L)" }
    ],
    theory: "Parts per million (ppm) corresponds to milligrams of solute per liter of liquid solution. Converting ppm to molarity scales milligram weight concentration to standard stoichiometric moles.",
    applications: ["Trace metal pollution analysis", "Water chemistry quality metrics"],
    resultInterpretation: "The trace concentration corresponds to {molarity} M.",
    seoMeta: {
      title: "PPM to Molarity Calculator | Trace concentration converter",
      description: "Convert parts-per-million (ppm) solution concentration to molarity using solute formula weight.",
      keywords: "ppm to molarity, trace concentration, water metrics solver"
    }
  }
];
