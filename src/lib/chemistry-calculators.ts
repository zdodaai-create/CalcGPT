import { CalculatorConfig } from "./calculator-types";

export const CHEMISTRY_CALCULATORS: CalculatorConfig[] = [
  {
    id: "atom-calculator",
    name: "Atom Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Mass\ Number = Protons + Neutrons",
    inputs: [
      { id: "atomic_number", label: "Atomic Number (Protons)", type: "number", defaultValue: 6 },
      { id: "mass_number", label: "Mass Number", type: "number", defaultValue: 12 },
      { id: "charge", label: "Charge", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "protons", label: "Protons", formula: "atomic_number", unit: "" },
      { id: "neutrons", label: "Neutrons", formula: "mass_number - atomic_number", unit: "" },
      { id: "electrons", label: "Electrons", formula: "atomic_number - charge", unit: "" }
    ],
    theory: "Atoms consist of protons, neutrons, and electrons. The atomic number defines the element and equals the number of protons. The mass number is the sum of protons and neutrons. Ions form when the number of electrons differs from the number of protons.",
    applications: ["Identifying isotopes", "Determining ion charges", "Basic atomic structure analysis"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Atom Calculator | Chemical Step-by-Step Calculator", description: "Use the Atom Calculator to calculate chemical properties dynamically.", keywords: "atom calculator, chemistry calculator, formula solver" }
  },
  {
    id: "atomic-mass-calculator",
    name: "Atomic Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Atomic\ Mass = Protons + Neutrons",
    inputs: [
      { id: "protons", label: "Number of Protons", type: "number", defaultValue: 6 },
      { id: "neutrons", label: "Number of Neutrons", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "mass", label: "Atomic Mass", formula: "protons + neutrons", unit: "amu" }
    ],
    theory: "The atomic mass (mass number) is the total number of nucleons (protons and neutrons) in an atomic nucleus. It roughly equates to the atomic mass in atomic mass units (amu).",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Atomic Mass Calculator | Chemical Step-by-Step Calculator", description: "Use the Atomic Mass Calculator to calculate chemical properties dynamically.", keywords: "atomic mass calculator, chemistry calculator, formula solver" }
  },
  {
    id: "average-atomic-mass-calculator",
    name: "Average Atomic Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Average\ Mass = \sum(Mass \times Abundance)",
    inputs: [
      { id: "m1", label: "Isotope 1 Mass", type: "number", defaultValue: 34.97 },
      { id: "a1", label: "Isotope 1 Abundance (%)", type: "number", defaultValue: 75.77 },
      { id: "m2", label: "Isotope 2 Mass", type: "number", defaultValue: 36.97 },
      { id: "a2", label: "Isotope 2 Abundance (%)", type: "number", defaultValue: 24.23 }
    ],
    outputs: [
      { id: "avg", label: "Average Atomic Mass", formula: "(m1 * a1 / 100) + (m2 * a2 / 100)", unit: "amu" }
    ],
    theory: "The average atomic mass of an element is the sum of the masses of its isotopes, each multiplied by its natural abundance.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Average Atomic Mass Calculator | Chemical Step-by-Step Calculator", description: "Use the Average Atomic Mass Calculator to calculate chemical properties dynamically.", keywords: "average atomic mass calculator, chemistry calculator, formula solver" }
  },
  {
    id: "bond-order-calculator",
    name: "Bond Order Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Bond\ Order = \frac{Bonding - Antibonding}{2}",
    inputs: [
      { id: "bonding", label: "Bonding Electrons", type: "number", defaultValue: 10 },
      { id: "antibonding", label: "Antibonding Electrons", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "order", label: "Bond Order", formula: "(bonding - antibonding) / 2", unit: "" }
    ],
    theory: "Bond order indicates the stability of a bond. A higher bond order means a stronger, shorter bond. A bond order of 0 indicates the molecule cannot exist.",
    applications: ["Molecular orbital theory", "Predicting bond stability"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Bond Order Calculator | Chemical Step-by-Step Calculator", description: "Use the Bond Order Calculator to calculate chemical properties dynamically.", keywords: "bond order calculator, chemistry calculator, formula solver" }
  },
  {
    id: "effective-nuclear-charge-calculator",
    name: "Effective Nuclear Charge Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Z_{eff} = Z - S",
    inputs: [
      { id: "z", label: "Atomic Number (Z)", type: "number", defaultValue: 11 },
      { id: "s", label: "Shielding Constant (S)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "zeff", label: "Effective Nuclear Charge", formula: "z - s", unit: "" }
    ],
    theory: "Effective nuclear charge is the net positive charge experienced by valence electrons. It can be approximated using Slater's rules.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Effective Nuclear Charge Calculator | Chemical Step-by-Step Calculator", description: "Use the Effective Nuclear Charge Calculator to calculate chemical properties dynamically.", keywords: "effective nuclear charge calculator, chemistry calculator, formula solver" }
  },
  {
    id: "electron-configuration-calculator",
    name: "Electron Configuration Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "1s^2 2s^2 2p^6...",
    inputs: [
      { id: "atomic_number", label: "Atomic Number (Z)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "configuration", label: "Electron Configuration", formula: "", unit: "" }
    ],
    theory: "Electron configuration describes the distribution of electrons in atomic orbitals based on the Aufbau principle.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "For an atom with {atomic_number} electrons, the ground-state electron configuration is {configuration}.",
    seoMeta: { title: "Electron Configuration Calculator | Chemical Step-by-Step Calculator", description: "Use the Electron Configuration Calculator to calculate chemical properties dynamically.", keywords: "electron configuration calculator, chemistry calculator, formula solver" }
  },
  {
    id: "electronegativity-calculator",
    name: "Electronegativity Difference Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\Delta EN = |EN_1 - EN_2|",
    inputs: [
      { id: "en1", label: "Electronegativity Atom 1", type: "number", defaultValue: 3.44 },
      { id: "en2", label: "Electronegativity Atom 2", type: "number", defaultValue: 2.2 }
    ],
    outputs: [
      { id: "diff", label: "Electronegativity Difference", formula: "abs(en1 - en2)", unit: "" }
    ],
    theory: "Electronegativity difference determines bond type. >1.7 is mostly ionic, 0.4-1.7 is polar covalent, <0.4 is non-polar covalent.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Electronegativity Difference Calculator | Chemical Step-by-Step Calculator", description: "Use the Electronegativity Difference Calculator to calculate chemical properties dynamically.", keywords: "electronegativity difference calculator, chemistry calculator, formula solver" }
  },
  {
    id: "molar-mass-calculator",
    name: "Molar Mass Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "Molar\ Mass = \sum(Atomic\ Mass \times Count)",
    inputs: [
      { id: "formula", label: "Chemical Formula", type: "text", defaultValue: "H2O" }
    ],
    outputs: [
      { id: "mass", label: "Molar Mass", formula: "", unit: "g/mol" }
    ],
    theory: "Molar mass is the mass of one mole of a substance, calculated by summing the atomic masses of its constituent elements.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "The chemical formula {formula} has a calculated molar mass of {mass} g/mol.",
    seoMeta: { title: "Molar Mass Calculator | Chemical Step-by-Step Calculator", description: "Use the Molar Mass Calculator to calculate chemical properties dynamically.", keywords: "molar mass calculator, chemistry calculator, formula solver" }
  },
  {
    id: "percent-composition-calculator",
    name: "Percent Composition Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\% = \frac{Element\ Mass}{Total\ Mass} \times 100",
    inputs: [
      { id: "element", label: "Element Mass", type: "number", defaultValue: 16 },
      { id: "total", label: "Total Mass", type: "number", defaultValue: 18.015 }
    ],
    outputs: [
      { id: "percent", label: "Percent Composition", formula: "(element / total) * 100", unit: "%" }
    ],
    theory: "The Percent Composition Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Percent Composition Calculator | Chemical Step-by-Step Calculator", description: "Use the Percent Composition Calculator to calculate chemical properties dynamically.", keywords: "percent composition calculator, chemistry calculator, formula solver" }
  },
  {
    id: "percent-ionic-character-calculator",
    name: "Percent Ionic Character Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "\% Ionic = (1 - e^{-0.25(\Delta EN)^2}) \times 100",
    inputs: [
      { id: "den", label: "Electronegativity Difference (ΔEN)", type: "number", defaultValue: 1.24 }
    ],
    outputs: [
      { id: "ionic", label: "Ionic Character", formula: "(1 - exp(-0.25 * den^2)) * 100", unit: "%" }
    ],
    theory: "Pauling's equation relates the electronegativity difference between two bonded atoms to the partial ionic character of the bond.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Percent Ionic Character Calculator | Chemical Step-by-Step Calculator", description: "Use the Percent Ionic Character Calculator to calculate chemical properties dynamically.", keywords: "percent ionic character calculator, chemistry calculator, formula solver" }
  },
  {
    id: "pka-calculator",
    name: "pKa Calculator",
    category: "chemistry",
    subcategory: "general-chemistry",
    scientificFormula: "pK_a = -\log(K_a)",
    inputs: [
      { id: "ka", label: "Acid Dissociation Constant (Ka)", type: "number", defaultValue: 1.8e-05 }
    ],
    outputs: [
      { id: "pka", label: "pKa Value", formula: "-log10(ka)", unit: "" }
    ],
    theory: "pKa is the negative base-10 logarithm of the acid dissociation constant (Ka) of a solution. A lower pKa indicates a stronger acid.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "pKa Calculator | Chemical Step-by-Step Calculator", description: "Use the pKa Calculator to calculate chemical properties dynamically.", keywords: "pka calculator, chemistry calculator, formula solver" }
  },
  {
    id: "afr-calculator",
    name: "AFR Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "AFR = \frac{Mass\ of\ Air}{Mass\ of\ Fuel}",
    inputs: [
      { id: "air", label: "Mass of Air", type: "number", defaultValue: 14.7 },
      { id: "fuel", label: "Mass of Fuel", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "afr", label: "Air-Fuel Ratio", formula: "air / fuel", unit: ":1" }
    ],
    theory: "The AFR Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "AFR Calculator | Chemical Step-by-Step Calculator", description: "Use the AFR Calculator to calculate chemical properties dynamically.", keywords: "afr calculator, chemistry calculator, formula solver" }
  },
  {
    id: "atom-economy-calculator",
    name: "Atom Economy Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Atom\ Economy = \frac{Desired\ Product\ MW}{Total\ Reactant\ MW} \times 100",
    inputs: [
      { id: "prod", label: "Desired Product MW", type: "number", defaultValue: 135 },
      { id: "react", label: "Total Reactant MW", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "ae", label: "Atom Economy", formula: "(prod / react) * 100", unit: "%" }
    ],
    theory: "The Atom Economy Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Atom Economy Calculator | Chemical Step-by-Step Calculator", description: "Use the Atom Economy Calculator to calculate chemical properties dynamically.", keywords: "atom economy calculator, chemistry calculator, formula solver" }
  },
  {
    id: "avogadros-number-calculator",
    name: "Avogadro's Number Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Particles = Moles \times 6.022 \times 10^{23}",
    inputs: [
      { id: "moles", label: "Moles", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "particles", label: "Particles", formula: "moles * 6.022e23", unit: "" }
    ],
    theory: "The Avogadro's Number Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Avogadro's Number Calculator | Chemical Step-by-Step Calculator", description: "Use the Avogadro's Number Calculator to calculate chemical properties dynamically.", keywords: "avogadro's number calculator, chemistry calculator, formula solver" }
  },
  {
    id: "empirical-formula-calculator",
    name: "Empirical Formula Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Moles = \frac{Mass}{Atomic\ Mass}",
    inputs: [
      { id: "m1", label: "Mass of Element 1 (g)", type: "number", defaultValue: 40 },
      { id: "a1", label: "Atomic Mass of Element 1", type: "number", defaultValue: 12.01 },
      { id: "m2", label: "Mass of Element 2 (g)", type: "number", defaultValue: 6.7 },
      { id: "a2", label: "Atomic Mass of Element 2", type: "number", defaultValue: 1.008 }
    ],
    outputs: [
      { id: "n1", label: "Moles of Element 1", formula: "m1 / a1", unit: "mol" },
      { id: "n2", label: "Moles of Element 2", formula: "m2 / a2", unit: "mol" }
    ],
    theory: "The empirical formula is the simplest integer ratio of atoms in a compound.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Empirical Formula Calculator | Chemical Step-by-Step Calculator", description: "Use the Empirical Formula Calculator to calculate chemical properties dynamically.", keywords: "empirical formula calculator, chemistry calculator, formula solver" }
  },
  {
    id: "grams-to-moles-calculator",
    name: "Grams to Moles Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Moles = \frac{Mass}{Molar\ Mass}",
    inputs: [
      { id: "mass", label: "Mass", type: "number", defaultValue: 50, unit: "g" },
      { id: "mw", label: "Molar Mass", type: "number", defaultValue: 18.015, unit: "g/mol" }
    ],
    outputs: [
      { id: "moles", label: "Moles", formula: "mass / mw", unit: "mol" }
    ],
    theory: "The Grams to Moles Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Grams to Moles Calculator | Chemical Step-by-Step Calculator", description: "Use the Grams to Moles Calculator to calculate chemical properties dynamically.", keywords: "grams to moles calculator, chemistry calculator, formula solver" }
  },
  {
    id: "hydrogen-ion-concentration-calculator",
    name: "Hydrogen Ion Concentration Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "[H^+] = 10^{-pH}",
    inputs: [
      { id: "ph", label: "pH Level", type: "number", defaultValue: 7.4 }
    ],
    outputs: [
      { id: "h", label: "Hydrogen Ion Conc. [H+]", formula: "10^(-ph)", unit: "M" }
    ],
    theory: "The Hydrogen Ion Concentration Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Hydrogen Ion Concentration Calculator | Chemical Step-by-Step Calculator", description: "Use the Hydrogen Ion Concentration Calculator to calculate chemical properties dynamically.", keywords: "hydrogen ion concentration calculator, chemistry calculator, formula solver" }
  },
  {
    id: "molality-calculator",
    name: "Molality Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Molality = \frac{Moles\ Solute}{kg\ Solvent}",
    inputs: [
      { id: "moles", label: "Moles of Solute", type: "number", defaultValue: 0.5 },
      { id: "kg", label: "Mass of Solvent (kg)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "molality", label: "Molality", formula: "moles / kg", unit: "m" }
    ],
    theory: "The Molality Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Molality Calculator | Chemical Step-by-Step Calculator", description: "Use the Molality Calculator to calculate chemical properties dynamically.", keywords: "molality calculator, chemistry calculator, formula solver" }
  },
  {
    id: "molarity-calculator",
    name: "Molarity Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Molarity = \frac{Moles}{Volume}",
    inputs: [
      { id: "moles", label: "Moles", type: "number", defaultValue: 0.5 },
      { id: "v", label: "Volume", type: "number", defaultValue: 1, unit: "L" }
    ],
    outputs: [
      { id: "molarity", label: "Molarity", formula: "moles / v", unit: "M" }
    ],
    theory: "The Molarity Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Molarity Calculator | Chemical Step-by-Step Calculator", description: "Use the Molarity Calculator to calculate chemical properties dynamically.", keywords: "molarity calculator, chemistry calculator, formula solver" }
  },
  {
    id: "mole-fraction-calculator",
    name: "Mole Fraction Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "\chi = \frac{Component\ Moles}{Total\ Moles}",
    inputs: [
      { id: "n1", label: "Component Moles", type: "number", defaultValue: 2 },
      { id: "nt", label: "Total Moles", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "fraction", label: "Mole Fraction", formula: "n1 / nt", unit: "" }
    ],
    theory: "The Mole Fraction Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Mole Fraction Calculator | Chemical Step-by-Step Calculator", description: "Use the Mole Fraction Calculator to calculate chemical properties dynamically.", keywords: "mole fraction calculator, chemistry calculator, formula solver" }
  },
  {
    id: "moles-to-atoms-converter",
    name: "Moles to Atoms Converter",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Atoms = Moles \times 6.022 \times 10^{23}",
    inputs: [
      { id: "moles", label: "Moles", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "atoms", label: "Atoms", formula: "moles * 6.022e23", unit: "" }
    ],
    theory: "The Moles to Atoms Converter relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Moles to Atoms Converter | Chemical Step-by-Step Calculator", description: "Use the Moles to Atoms Converter to calculate chemical properties dynamically.", keywords: "moles to atoms converter, chemistry calculator, formula solver" }
  },
  {
    id: "normality-calculator",
    name: "Normality Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Normality = \frac{Gram\ Equivalents}{Liters}",
    inputs: [
      { id: "eq", label: "Gram Equivalents", type: "number", defaultValue: 2 },
      { id: "v", label: "Volume (L)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "n", label: "Normality", formula: "eq / v", unit: "N" }
    ],
    theory: "The Normality Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Normality Calculator | Chemical Step-by-Step Calculator", description: "Use the Normality Calculator to calculate chemical properties dynamically.", keywords: "normality calculator, chemistry calculator, formula solver" }
  },
  {
    id: "ppm-to-molarity-calculator",
    name: "PPM to Molarity Calculator",
    category: "chemistry",
    subcategory: "stoichiometry",
    scientificFormula: "Molarity = \frac{ppm}{Molar\ Mass \times 1000}",
    inputs: [
      { id: "ppm", label: "Concentration (ppm)", type: "number", defaultValue: 100 },
      { id: "mw", label: "Molar Mass", type: "number", defaultValue: 58.44 }
    ],
    outputs: [
      { id: "m", label: "Molarity", formula: "ppm / (mw * 1000)", unit: "M" }
    ],
    theory: "The PPM to Molarity Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "PPM to Molarity Calculator | Chemical Step-by-Step Calculator", description: "Use the PPM to Molarity Calculator to calculate chemical properties dynamically.", keywords: "ppm to molarity calculator, chemistry calculator, formula solver" }
  },
  {
    id: "buffer-ph-calculator",
    name: "Buffer pH Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "pH = pK_a + \log\frac{[A^-]}{[HA]}",
    inputs: [
      { id: "pka", label: "pKa", type: "number", defaultValue: 4.76 },
      { id: "base", label: "Base Concentration [A-]", type: "number", defaultValue: 0.1 },
      { id: "acid", label: "Acid Concentration [HA]", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "ph", label: "pH", formula: "pka + log10(base / acid)", unit: "" }
    ],
    theory: "The Henderson-Hasselbalch equation calculates the pH of a buffer solution.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Buffer pH Calculator | Chemical Step-by-Step Calculator", description: "Use the Buffer pH Calculator to calculate chemical properties dynamically.", keywords: "buffer ph calculator, chemistry calculator, formula solver" }
  },
  {
    id: "ph-calculator",
    name: "pH Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "pH = -\log[H^+]",
    inputs: [
      { id: "h", label: "Hydrogen Ion Conc. [H+]", type: "number", defaultValue: 1e-07 }
    ],
    outputs: [
      { id: "ph", label: "pH Level", formula: "-log10(h)", unit: "" }
    ],
    theory: "The pH Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "pH Calculator | Chemical Step-by-Step Calculator", description: "Use the pH Calculator to calculate chemical properties dynamically.", keywords: "ph calculator, chemistry calculator, formula solver" }
  },
  {
    id: "raoults-law-calculator",
    name: "Raoult's Law Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "P_{solution} = X_{solvent}P^\circ_{solvent}",
    inputs: [
      { id: "x", label: "Mole Fraction of Solvent", type: "number", defaultValue: 0.9 },
      { id: "p0", label: "Pure Solvent Pressure (P°)", type: "number", defaultValue: 23.8 }
    ],
    outputs: [
      { id: "p", label: "Solution Vapor Pressure", formula: "x * p0", unit: "torr" }
    ],
    theory: "The Raoult's Law Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Raoult's Law Calculator | Chemical Step-by-Step Calculator", description: "Use the Raoult's Law Calculator to calculate chemical properties dynamically.", keywords: "raoult's law calculator, chemistry calculator, formula solver" }
  },
  {
    id: "serial-dilution-calculator",
    name: "Serial Dilution Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "C_n = \frac{C_0}{DF^n}",
    inputs: [
      { id: "c0", label: "Initial Concentration", type: "number", defaultValue: 100 },
      { id: "df", label: "Dilution Factor", type: "number", defaultValue: 10 },
      { id: "n", label: "Number of Dilutions (n)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "cn", label: "Final Concentration", formula: "c0 / (df ^ n)", unit: "" }
    ],
    theory: "The Serial Dilution Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Serial Dilution Calculator | Chemical Step-by-Step Calculator", description: "Use the Serial Dilution Calculator to calculate chemical properties dynamically.", keywords: "serial dilution calculator, chemistry calculator, formula solver" }
  },
  {
    id: "titration-calculator",
    name: "Titration Calculator",
    category: "chemistry",
    subcategory: "mixtures-solutions",
    scientificFormula: "M_1V_1 = M_2V_2",
    inputs: [
      { id: "m1", label: "Molarity of Standard (M1)", type: "number", defaultValue: 0.1 },
      { id: "v1", label: "Volume of Standard (V1)", type: "number", defaultValue: 25 },
      { id: "v2", label: "Volume of Unknown (V2)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "m2", label: "Molarity of Unknown (M2)", formula: "(m1 * v1) / v2", unit: "M" }
    ],
    theory: "The Titration Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Titration Calculator | Chemical Step-by-Step Calculator", description: "Use the Titration Calculator to calculate chemical properties dynamically.", keywords: "titration calculator, chemistry calculator, formula solver" }
  },
  {
    id: "arrhenius-equation-calculator",
    name: "Arrhenius Equation Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "k = Ae^{-E_a/RT}",
    inputs: [
      { id: "a", label: "Pre-exponential Factor (A)", type: "number", defaultValue: 100000000000.0 },
      { id: "ea", label: "Activation Energy (Ea) kJ/mol", type: "number", defaultValue: 50 },
      { id: "t", label: "Temperature (T) in K", type: "number", defaultValue: 298 }
    ],
    outputs: [
      { id: "k", label: "Rate Constant (k)", formula: "a * exp(-(ea * 1000) / (8.314 * t))", unit: "s⁻¹" }
    ],
    theory: "The Arrhenius Equation Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Arrhenius Equation Calculator | Chemical Step-by-Step Calculator", description: "Use the Arrhenius Equation Calculator to calculate chemical properties dynamically.", keywords: "arrhenius equation calculator, chemistry calculator, formula solver" }
  },
  {
    id: "equilibrium-constant-calculator",
    name: "Equilibrium Constant Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "K_c = \frac{Products}{Reactants}",
    inputs: [
      { id: "p", label: "Product Concentrations", type: "number", defaultValue: 0.8 },
      { id: "r", label: "Reactant Concentrations", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "kc", label: "Equilibrium Constant (Kc)", formula: "p / r", unit: "" }
    ],
    theory: "The Equilibrium Constant Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Equilibrium Constant Calculator | Chemical Step-by-Step Calculator", description: "Use the Equilibrium Constant Calculator to calculate chemical properties dynamically.", keywords: "equilibrium constant calculator, chemistry calculator, formula solver" }
  },
  {
    id: "percent-yield-calculator",
    name: "Percent Yield Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "\% Yield = \frac{Actual}{Theoretical} \times 100",
    inputs: [
      { id: "act", label: "Actual Yield", type: "number", defaultValue: 45 },
      { id: "theo", label: "Theoretical Yield", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "yield", label: "Percent Yield", formula: "(act / theo) * 100", unit: "%" }
    ],
    theory: "The Percent Yield Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Percent Yield Calculator | Chemical Step-by-Step Calculator", description: "Use the Percent Yield Calculator to calculate chemical properties dynamically.", keywords: "percent yield calculator, chemistry calculator, formula solver" }
  },
  {
    id: "reaction-quotient-calculator",
    name: "Reaction Quotient Calculator",
    category: "chemistry",
    subcategory: "chemical-reactions",
    scientificFormula: "Q = \frac{Products}{Reactants}",
    inputs: [
      { id: "p", label: "Current Products", type: "number", defaultValue: 0.5 },
      { id: "r", label: "Current Reactants", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "q", label: "Reaction Quotient (Q)", formula: "p / r", unit: "" }
    ],
    theory: "The Reaction Quotient Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Reaction Quotient Calculator | Chemical Step-by-Step Calculator", description: "Use the Reaction Quotient Calculator to calculate chemical properties dynamically.", keywords: "reaction quotient calculator, chemistry calculator, formula solver" }
  },
  {
    id: "gibbs-free-energy-calculator",
    name: "Gibbs Free Energy Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\Delta G = \Delta H - T\Delta S",
    inputs: [
      { id: "dh", label: "Enthalpy Change (ΔH) kJ/mol", type: "number", defaultValue: -50 },
      { id: "t", label: "Temperature (T) in K", type: "number", defaultValue: 298 },
      { id: "ds", label: "Entropy Change (ΔS) J/K", type: "number", defaultValue: -100 }
    ],
    outputs: [
      { id: "dg", label: "Gibbs Free Energy (ΔG)", formula: "dh - (t * ds / 1000)", unit: "kJ/mol" }
    ],
    theory: "The Gibbs Free Energy Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Gibbs Free Energy Calculator | Chemical Step-by-Step Calculator", description: "Use the Gibbs Free Energy Calculator to calculate chemical properties dynamically.", keywords: "gibbs free energy calculator, chemistry calculator, formula solver" }
  },
  {
    id: "entropy-calculator",
    name: "Entropy Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\Delta S = \frac{Q}{T}",
    inputs: [
      { id: "q", label: "Heat Transferred (Q)", type: "number", defaultValue: 500 },
      { id: "t", label: "Temperature (T) in K", type: "number", defaultValue: 298 }
    ],
    outputs: [
      { id: "ds", label: "Entropy Change (ΔS)", formula: "q / t", unit: "J/K" }
    ],
    theory: "The Entropy Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Entropy Calculator | Chemical Step-by-Step Calculator", description: "Use the Entropy Calculator to calculate chemical properties dynamically.", keywords: "entropy calculator, chemistry calculator, formula solver" }
  },
  {
    id: "freezing-point-depression-calculator",
    name: "Freezing Point Depression Calculator",
    category: "chemistry",
    subcategory: "thermodynamics",
    scientificFormula: "\Delta T_f = iK_fm",
    inputs: [
      { id: "i", label: "van't Hoff Factor (i)", type: "number", defaultValue: 1 },
      { id: "kf", label: "Cryoscopic Constant (Kf)", type: "number", defaultValue: 1.86 },
      { id: "m", label: "Molality (m)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "dt", label: "Freezing Point Depression", formula: "i * kf * m", unit: "°C" }
    ],
    theory: "The Freezing Point Depression Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Freezing Point Depression Calculator | Chemical Step-by-Step Calculator", description: "Use the Freezing Point Depression Calculator to calculate chemical properties dynamically.", keywords: "freezing point depression calculator, chemistry calculator, formula solver" }
  },
  {
    id: "nernst-equation-calculator",
    name: "Nernst Equation Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "E = E^\circ - \frac{0.0592}{n}\log Q",
    inputs: [
      { id: "e0", label: "Standard Potential (E°)", type: "number", defaultValue: 1.1 },
      { id: "n", label: "Number of Electrons (n)", type: "number", defaultValue: 2 },
      { id: "q", label: "Reaction Quotient (Q)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "e", label: "Cell Potential (E)", formula: "e0 - (0.0592 / n) * log10(q)", unit: "V" }
    ],
    theory: "The Nernst Equation Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Nernst Equation Calculator | Chemical Step-by-Step Calculator", description: "Use the Nernst Equation Calculator to calculate chemical properties dynamically.", keywords: "nernst equation calculator, chemistry calculator, formula solver" }
  },
  {
    id: "electrolysis-calculator",
    name: "Electrolysis Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "m = \frac{ItM}{nF}",
    inputs: [
      { id: "i", label: "Current (I) in A", type: "number", defaultValue: 1 },
      { id: "t", label: "Time (t) in s", type: "number", defaultValue: 3600 },
      { id: "m_mw", label: "Molar Mass (M)", type: "number", defaultValue: 63.5 },
      { id: "n", label: "Electrons (n)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "mass", label: "Mass Deposited", formula: "(i * t * m_mw) / (n * 96485)", unit: "g" }
    ],
    theory: "The Electrolysis Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Electrolysis Calculator | Chemical Step-by-Step Calculator", description: "Use the Electrolysis Calculator to calculate chemical properties dynamically.", keywords: "electrolysis calculator, chemistry calculator, formula solver" }
  },
  {
    id: "cell-emf-calculator",
    name: "Cell EMF Calculator",
    category: "chemistry",
    subcategory: "electrochemistry",
    scientificFormula: "E_{cell} = E_{cathode} - E_{anode}",
    inputs: [
      { id: "cathode", label: "Cathode Potential", type: "number", defaultValue: 0.34 },
      { id: "anode", label: "Anode Potential", type: "number", defaultValue: -0.76 }
    ],
    outputs: [
      { id: "emf", label: "Cell EMF", formula: "cathode - anode", unit: "V" }
    ],
    theory: "The Cell EMF Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Cell EMF Calculator | Chemical Step-by-Step Calculator", description: "Use the Cell EMF Calculator to calculate chemical properties dynamically.", keywords: "cell emf calculator, chemistry calculator, formula solver" }
  },
  {
    id: "half-life-calculator",
    name: "Half-Life Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "t_{1/2} = \frac{0.693}{k}",
    inputs: [
      { id: "k", label: "Rate Constant (k)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "t12", label: "Half-Life", formula: "0.693 / k", unit: "time" }
    ],
    theory: "The Half-Life Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Half-Life Calculator | Chemical Step-by-Step Calculator", description: "Use the Half-Life Calculator to calculate chemical properties dynamically.", keywords: "half-life calculator, chemistry calculator, formula solver" }
  },
  {
    id: "osmotic-pressure-calculator",
    name: "Osmotic Pressure Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "\pi = MRT",
    inputs: [
      { id: "m", label: "Molarity (M)", type: "number", defaultValue: 0.1 },
      { id: "t", label: "Temperature (T) in K", type: "number", defaultValue: 298 }
    ],
    outputs: [
      { id: "pi", label: "Osmotic Pressure", formula: "m * 0.0821 * t", unit: "atm" }
    ],
    theory: "The Osmotic Pressure Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Osmotic Pressure Calculator | Chemical Step-by-Step Calculator", description: "Use the Osmotic Pressure Calculator to calculate chemical properties dynamically.", keywords: "osmotic pressure calculator, chemistry calculator, formula solver" }
  },
  {
    id: "radioactive-decay-calculator",
    name: "Radioactive Decay Calculator",
    category: "chemistry",
    subcategory: "physical-chemistry",
    scientificFormula: "N = N_0e^{-\lambda t}",
    inputs: [
      { id: "n0", label: "Initial Amount (N0)", type: "number", defaultValue: 100 },
      { id: "lam", label: "Decay Constant (λ)", type: "number", defaultValue: 0.05 },
      { id: "t", label: "Time (t)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "n", label: "Remaining Amount (N)", formula: "n0 * exp(-lam * t)", unit: "" }
    ],
    theory: "The Radioactive Decay Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Radioactive Decay Calculator | Chemical Step-by-Step Calculator", description: "Use the Radioactive Decay Calculator to calculate chemical properties dynamically.", keywords: "radioactive decay calculator, chemistry calculator, formula solver" }
  },
  {
    id: "degree-of-unsaturation-calculator",
    name: "Degree of Unsaturation Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "DU = \frac{2C + 2 + N - H - X}{2}",
    inputs: [
      { id: "c", label: "Carbon (C)", type: "number", defaultValue: 6 },
      { id: "h", label: "Hydrogen (H)", type: "number", defaultValue: 6 },
      { id: "n", label: "Nitrogen (N)", type: "number", defaultValue: 0 },
      { id: "x", label: "Halogen (X)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "du", label: "Degree of Unsaturation", formula: "(2*c + 2 + n - h - x) / 2", unit: "" }
    ],
    theory: "The Degree of Unsaturation Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Degree of Unsaturation Calculator | Chemical Step-by-Step Calculator", description: "Use the Degree of Unsaturation Calculator to calculate chemical properties dynamically.", keywords: "degree of unsaturation calculator, chemistry calculator, formula solver" }
  },
  {
    id: "double-bond-equivalent-calculator",
    name: "Double Bond Equivalent Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "DBE = C - \frac{H}{2} + \frac{N}{2} + 1",
    inputs: [
      { id: "c", label: "Carbon (C)", type: "number", defaultValue: 6 },
      { id: "h", label: "Hydrogen (H)", type: "number", defaultValue: 6 },
      { id: "n", label: "Nitrogen (N)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "dbe", label: "Double Bond Equivalent", formula: "c - (h/2) + (n/2) + 1", unit: "" }
    ],
    theory: "The Double Bond Equivalent Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Double Bond Equivalent Calculator | Chemical Step-by-Step Calculator", description: "Use the Double Bond Equivalent Calculator to calculate chemical properties dynamically.", keywords: "double bond equivalent calculator, chemistry calculator, formula solver" }
  },
  {
    id: "radiocarbon-dating-calculator",
    name: "Radiocarbon Dating Calculator",
    category: "chemistry",
    subcategory: "organic-chemistry",
    scientificFormula: "t = \frac{\ln(N_0/N)}{\lambda}",
    inputs: [
      { id: "n0", label: "Modern Carbon (N0) %", type: "number", defaultValue: 100 },
      { id: "n", label: "Sample Carbon (N) %", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "age", label: "Age", formula: "log(n0 / n) / 0.0001209", unit: "years" }
    ],
    theory: "The Radiocarbon Dating Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Radiocarbon Dating Calculator | Chemical Step-by-Step Calculator", description: "Use the Radiocarbon Dating Calculator to calculate chemical properties dynamically.", keywords: "radiocarbon dating calculator, chemistry calculator, formula solver" }
  },
  {
    id: "enzyme-activity-calculator",
    name: "Enzyme Activity Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "Activity = \frac{\mu mol}{min}",
    inputs: [
      { id: "umol", label: "Product Formed (μmol)", type: "number", defaultValue: 5 },
      { id: "t", label: "Time (min)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "act", label: "Activity", formula: "umol / t", unit: "U" }
    ],
    theory: "The Enzyme Activity Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Enzyme Activity Calculator | Chemical Step-by-Step Calculator", description: "Use the Enzyme Activity Calculator to calculate chemical properties dynamically.", keywords: "enzyme activity calculator, chemistry calculator, formula solver" }
  },
  {
    id: "michaelis-menten-calculator",
    name: "Michaelis-Menten Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "V = \frac{V_{max}[S]}{K_m + [S]}",
    inputs: [
      { id: "vmax", label: "Vmax", type: "number", defaultValue: 100 },
      { id: "km", label: "Km", type: "number", defaultValue: 5 },
      { id: "s", label: "Substrate [S]", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "v", label: "Velocity (V)", formula: "(vmax * s) / (km + s)", unit: "" }
    ],
    theory: "The Michaelis-Menten Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Michaelis-Menten Calculator | Chemical Step-by-Step Calculator", description: "Use the Michaelis-Menten Calculator to calculate chemical properties dynamically.", keywords: "michaelis-menten calculator, chemistry calculator, formula solver" }
  },
  {
    id: "resuspension-calculator",
    name: "Resuspension Calculator",
    category: "chemistry",
    subcategory: "biochemistry",
    scientificFormula: "Volume = \frac{Desired\ Mass}{Concentration}",
    inputs: [
      { id: "mass", label: "Desired Mass", type: "number", defaultValue: 10 },
      { id: "conc", label: "Target Concentration", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "vol", label: "Volume Needed", formula: "mass / conc", unit: "" }
    ],
    theory: "The Resuspension Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Resuspension Calculator | Chemical Step-by-Step Calculator", description: "Use the Resuspension Calculator to calculate chemical properties dynamically.", keywords: "resuspension calculator, chemistry calculator, formula solver" }
  },
  {
    id: "beer-lambert-law-calculator",
    name: "Beer-Lambert Law Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "A = \varepsilon lc",
    inputs: [
      { id: "eps", label: "Molar Absorptivity (ε)", type: "number", defaultValue: 15000 },
      { id: "l", label: "Path Length (l)", type: "number", defaultValue: 1 },
      { id: "c", label: "Concentration (c)", type: "number", defaultValue: 0.0001 }
    ],
    outputs: [
      { id: "a", label: "Absorbance (A)", formula: "eps * l * c", unit: "" }
    ],
    theory: "The Beer-Lambert Law Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Beer-Lambert Law Calculator | Chemical Step-by-Step Calculator", description: "Use the Beer-Lambert Law Calculator to calculate chemical properties dynamically.", keywords: "beer-lambert law calculator, chemistry calculator, formula solver" }
  },
  {
    id: "cubic-cell-calculator",
    name: "Cubic Cell Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "Volume = a^3",
    inputs: [
      { id: "a", label: "Edge Length (a)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "v", label: "Volume", formula: "a^3", unit: "" }
    ],
    theory: "The Cubic Cell Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Cubic Cell Calculator | Chemical Step-by-Step Calculator", description: "Use the Cubic Cell Calculator to calculate chemical properties dynamically.", keywords: "cubic cell calculator, chemistry calculator, formula solver" }
  },
  {
    id: "detention-time-calculator",
    name: "Detention Time Calculator",
    category: "chemistry",
    subcategory: "other",
    scientificFormula: "Time = \frac{Volume}{Flow\ Rate}",
    inputs: [
      { id: "v", label: "Volume", type: "number", defaultValue: 1000 },
      { id: "q", label: "Flow Rate", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "t", label: "Detention Time", formula: "v / q", unit: "time" }
    ],
    theory: "The Detention Time Calculator relies on fundamental principles to calculate the target variables accurately in chemical analysis.",
    applications: ["Laboratory Analysis", "Academic Research", "Industrial Chemistry"],
    resultInterpretation: "A calculated result of {res} indicates the value based on the given parameters.",
    seoMeta: { title: "Detention Time Calculator | Chemical Step-by-Step Calculator", description: "Use the Detention Time Calculator to calculate chemical properties dynamically.", keywords: "detention time calculator, chemistry calculator, formula solver" }
  }
];
