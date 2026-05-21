import { CalculatorConfig } from "./calculator-types";

export const BIOLOGY_CALCULATORS: CalculatorConfig[] = [
  // BIO LABORATORY
  {
    id: "annealing-temperature-calculator",
    name: "Annealing Temperature Calculator",
    description: "Calculate primer annealing temperature (Tm) in PCR using the Wallace rule.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "T_m = 2(A+T) + 4(G+C)",
    inputs: [
      { id: "A", label: "Number of A bases", type: "number", defaultValue: 5 },
      { id: "T", label: "Number of T bases", type: "number", defaultValue: 5 },
      { id: "G", label: "Number of G bases", type: "number", defaultValue: 5 },
      { id: "C", label: "Number of C bases", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "tm", label: "Melting Temperature (Tm)", formula: "2 * (A + T) + 4 * (G + C)", unit: "°C" }],
    theory: "The melting temperature (Tm) is the temperature at which half of the DNA duplex will dissociate to become single-stranded. In PCR, the annealing temperature is typically set 3-5°C below the Tm to allow primers to bind to the template DNA.",
    derivation: "The Wallace rule (Tm = 2(A+T) + 4(G+C)) is a simple approximation for short oligonucleotides (14-20 bp). G-C pairs form 3 hydrogen bonds compared to 2 for A-T pairs, thus requiring more energy (heat) to break.",
    applications: ["Designing PCR primers", "Optimizing thermal cycling conditions", "DNA sequencing preparation"],
    commonMistakes: ["Using the Wallace rule for primers longer than 20 nucleotides.", "Forgetting that annealing temperature is usually slightly lower than the calculated Tm."],
    resultInterpretation: "A calculated Tm of {tm} °C suggests setting your PCR annealing step to roughly {tm}-5 °C to ensure optimal primer binding without non-specific amplification.",
    seoMeta: { title: "PCR Annealing Temperature Calculator", description: "Calculate DNA primer melting and annealing temperatures for PCR using the Wallace rule.", keywords: "PCR, annealing temperature, Tm, DNA primer, Wallace rule" }
  },
  {
    id: "generation-time-calculator",
    name: "Generation Time Calculator",
    description: "Determine the time required for a bacterial population to double.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "G = \\frac{t}{n}",
    inputs: [
      { id: "t", label: "Total Growth Time", type: "number", defaultValue: 120, unit: "minutes" },
      { id: "n", label: "Number of Generations", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "G", label: "Generation Time", formula: "t / n", unit: "minutes" }],
    theory: "Generation time (or doubling time) is the time required for a microbial population to double in number. It is an essential metric in microbiology for understanding the growth rate of cultures under specific conditions.",
    resultInterpretation: "A generation time of {G} minutes means the bacterial population doubles its size exactly every {G} minutes during the log phase of growth."
  },
  {
    id: "cell-dilution-calculator",
    name: "Cell Dilution Calculator",
    description: "Calculate the required stock volume for a target cell concentration using C1V1=C2V2.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "V_1 = \\frac{C_2 \\times V_2}{C_1}",
    inputs: [
      { id: "C1", label: "Initial Concentration (C1)", type: "number", defaultValue: 1000 },
      { id: "C2", label: "Final Concentration (C2)", type: "number", defaultValue: 100 },
      { id: "V2", label: "Final Volume (V2)", type: "number", defaultValue: 50, unit: "mL" }
    ],
    outputs: [{ id: "V1", label: "Required Stock Volume (V1)", formula: "(C2 * V2) / C1", unit: "mL" }],
    theory: "The dilution equation (C1V1 = C2V2) expresses the conservation of mass. The total number of cells or moles remains constant before and after dilution, only the total volume changes.",
    resultInterpretation: "To achieve the desired final concentration, you need to extract {V1} mL of your initial stock and top it up with diluent to reach the final volume."
  },
  {
    id: "cell-doubling-time-calculator",
    name: "Cell Doubling Time Calculator",
    description: "Calculate the exact doubling time of a cell culture based on initial and final counts.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "DT = \\frac{Time \\times \\log_{10}(2)}{\\log_{10}(Final / Initial)}",
    inputs: [
      { id: "initial", label: "Initial Cell Count", type: "number", defaultValue: 10000 },
      { id: "final", label: "Final Cell Count", type: "number", defaultValue: 80000 },
      { id: "time", label: "Time Duration", type: "number", defaultValue: 24, unit: "hours" }
    ],
    outputs: [{ id: "dt", label: "Doubling Time", formula: "(time * log10(2)) / log10(final / initial)", unit: "hours" }],
    theory: "Doubling time represents the time necessary for a quantity to double in size or value. In cell culture, calculating the precise doubling time ensures experiments are performed when cells are in their optimal exponential growth phase."
  },
  {
    id: "dna-concentration-calculator",
    name: "DNA Concentration Calculator",
    description: "Calculate DNA concentration from spectrophotometer absorbance readings at 260nm.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "DNA = A_{260} \\times Dilution \\times 50",
    inputs: [
      { id: "absorbance", label: "Absorbance at 260nm", type: "number", defaultValue: 0.5 },
      { id: "dilution", label: "Dilution Factor", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "conc", label: "DNA Concentration", formula: "absorbance * dilution * 50", unit: "ng/µL" }],
    theory: "Nucleic acids absorb UV light maximally at 260 nm. An optical density (OD) of 1.0 at 260 nm corresponds to approximately 50 µg/mL (or ng/µL) of double-stranded DNA.",
    resultInterpretation: "The sample contains a DNA concentration of {conc} ng/µL."
  },
  {
    id: "ligation-calculator",
    name: "Ligation Calculator",
    description: "Calculate the amount of insert DNA needed for vector ligation.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "Insert = \\frac{Insert_{bp}}{Vector_{bp}} \\times Vector_{ng} \\times Ratio",
    inputs: [
      { id: "insert_bp", label: "Insert Length (bp)", type: "number", defaultValue: 1000 },
      { id: "vector_bp", label: "Vector Length (bp)", type: "number", defaultValue: 4000 },
      { id: "vector_ng", label: "Vector Amount (ng)", type: "number", defaultValue: 50 },
      { id: "ratio", label: "Molar Ratio (Insert:Vector)", type: "number", defaultValue: 3 }
    ],
    outputs: [{ id: "insert_ng", label: "Required Insert Amount", formula: "(insert_bp / vector_bp) * vector_ng * ratio", unit: "ng" }],
    theory: "In molecular cloning, optimizing the molar ratio of insert to vector DNA is critical for successful ligation. A typical starting ratio is 3:1 (insert:vector)."
  },
  {
    id: "log-reduction-calculator",
    name: "Log Reduction Calculator",
    description: "Determine the log reduction value for antimicrobial or sterilization efficacy.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "Log Reduction = \\log_{10}\\left(\\frac{Initial}{Final}\\right)",
    inputs: [
      { id: "initial", label: "Initial Microbial Count", type: "number", defaultValue: 1000000 },
      { id: "final", label: "Final Microbial Count", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "reduction", label: "Log Reduction", formula: "log10(initial / final)", unit: "log" }],
    theory: "Log reduction is a mathematical term used to show the relative number of live microbes eliminated from a surface by disinfecting or cleaning. A 1-log reduction means a 90% reduction, 2-log is 99%, etc.",
    resultInterpretation: "A {reduction}-log reduction corresponds to eliminating {reduction} orders of magnitude of microbes."
  },
  {
    id: "protein-concentration-calculator",
    name: "Protein Concentration Calculator",
    description: "Calculate protein concentration using absorbance and standard extinction coefficient.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "Concentration = Absorbance \\times Factor",
    inputs: [
      { id: "absorbance", label: "Absorbance (A280)", type: "number", defaultValue: 0.75 },
      { id: "factor", label: "Extinction Factor", type: "number", defaultValue: 1.0 }
    ],
    outputs: [{ id: "protein", label: "Protein Concentration", formula: "absorbance * factor", unit: "mg/mL" }]
  },

  // GENETICS
  {
    id: "allele-frequency-calculator",
    name: "Allele Frequency Calculator",
    description: "Calculate the frequency of an allele in a population.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "p = \\frac{2(AA) + Aa}{2N}",
    inputs: [
      { id: "AA", label: "Homozygous Dominant (AA)", type: "number", defaultValue: 30 },
      { id: "Aa", label: "Heterozygous (Aa)", type: "number", defaultValue: 50 },
      { id: "N", label: "Total Population Size (N)", type: "number", defaultValue: 100 }
    ],
    outputs: [{ id: "p", label: "Allele Frequency (p)", formula: "(2*AA + Aa) / (2*N)", unit: "" }],
    theory: "Allele frequency represents the incidence of a gene variant in a population. Under Hardy-Weinberg equilibrium, the frequencies of alleles and genotypes remain constant from generation to generation."
  },
  {
    id: "dna-copy-number-calculator",
    name: "DNA Copy Number Calculator",
    description: "Calculate the number of copies of a DNA template.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "Copies = \\frac{Mass \\times 6.022 \\times 10^{23}}{Length \\times 660}",
    inputs: [
      { id: "mass", label: "DNA Mass", type: "number", defaultValue: 1e-9, unit: "g" },
      { id: "length", label: "DNA Length", type: "number", defaultValue: 3000, unit: "bp" }
    ],
    outputs: [{ id: "copies", label: "Copy Number", formula: "(mass * 6.022e23) / (length * 660)", unit: "copies" }],
    theory: "The formula uses Avogadro's number and the average molar mass of a DNA base pair (approx 660 g/mol) to convert absolute mass into the number of discrete DNA molecules."
  },
  {
    id: "dna-to-mrna-converter",
    name: "DNA to mRNA Converter",
    description: "Convert a coding DNA sequence into its corresponding mRNA transcript.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "DNA(T) \\rightarrow mRNA(U)",
    inputs: [
      { id: "dna", label: "DNA Sequence", type: "text", defaultValue: "ATGCGTACG" }
    ],
    outputs: [{ id: "mrna", label: "mRNA Sequence", formula: "0", unit: "" }],
    theory: "Transcription is the process of copying a segment of DNA into RNA. In mRNA, the thymine (T) bases present in DNA are replaced by uracil (U) bases.",
    resultInterpretation: "The generated mRNA sequence is ready for translation into a polypeptide chain."
  },
  {
    id: "qpcr-efficiency-calculator",
    name: "qPCR Efficiency Calculator",
    description: "Determine the efficiency of a quantitative PCR reaction from its standard curve slope.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "E = (10^{-1/slope} - 1) \\times 100",
    inputs: [
      { id: "slope", label: "Standard Curve Slope", type: "number", defaultValue: -3.32 }
    ],
    outputs: [{ id: "efficiency", label: "PCR Efficiency", formula: "(10^(-1/slope) - 1) * 100", unit: "%" }],
    theory: "An efficiency of 100% means the template exactly doubles each cycle, corresponding to a slope of -3.32. Lower efficiency indicates inhibition or suboptimal primer design."
  },

  // ANIMAL PREGNANCY
  {
    id: "dog-pregnancy-calculator",
    name: "Dog Pregnancy Calculator",
    description: "Calculate a dog's estimated due date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Mating\\ Date + 63\\ days",
    inputs: [
      { id: "mating_date", label: "Mating Date", type: "date", defaultValue: "" }
    ],
    outputs: [{ id: "due_date", label: "Expected Due Date", formula: "63", unit: "" }],
    theory: "The average gestation period for dogs is 63 days from conception, though it can safely range from 58 to 68 days.",
    resultInterpretation: "The expected whelping (due) date is {due_date}. Prepare the whelping box several days in advance."
  },
  {
    id: "cow-gestation-calculator",
    name: "Cow Gestation Calculator",
    description: "Calculate a cow's expected calving date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Breeding\\ Date + 283\\ days",
    inputs: [
      { id: "breeding_date", label: "Breeding Date", type: "date", defaultValue: "" }
    ],
    outputs: [{ id: "due_date", label: "Expected Calving Date", formula: "283", unit: "" }]
  },
  {
    id: "goat-gestation-calculator",
    name: "Goat Gestation Calculator",
    description: "Calculate a goat's expected kidding date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Breeding\\ Date + 150\\ days",
    inputs: [
      { id: "breeding_date", label: "Breeding Date", type: "date", defaultValue: "" }
    ],
    outputs: [{ id: "due_date", label: "Expected Kidding Date", formula: "150", unit: "" }]
  },

  // DOGS
  {
    id: "dog-bmi-calculator",
    name: "Dog BMI Calculator",
    description: "Calculate a dog's Body Mass Index.",
    category: "biology",
    subcategory: "dogs",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Dog Weight", type: "number", defaultValue: 20, unit: "kg" },
      { id: "height", label: "Shoulder Height", type: "number", defaultValue: 0.5, unit: "m" }
    ],
    outputs: [{ id: "bmi", label: "Dog BMI", formula: "weight / (height^2)", unit: "kg/m²" }],
    theory: "While a traditional human BMI is mathematically straightforward, canine body composition varies drastically by breed. This baseline metric is used alongside Body Condition Scoring (BCS) to assess obesity."
  },
  {
    id: "dog-water-intake-calculator",
    name: "Dog Water Intake Calculator",
    description: "Calculate a dog's daily water requirement.",
    category: "biology",
    subcategory: "dogs",
    scientificFormula: "Water = Weight \\times 60",
    inputs: [
      { id: "weight", label: "Dog Weight (kg)", type: "number", defaultValue: 20, unit: "kg" }
    ],
    outputs: [{ id: "water", label: "Daily Water Intake", formula: "weight * 60", unit: "mL" }]
  },
  {
    id: "raw-dog-food-calculator",
    name: "Raw Dog Food Calculator",
    description: "Calculate daily raw food portions for dogs.",
    category: "biology",
    subcategory: "dogs",
    scientificFormula: "Food = Weight \\times Percentage",
    inputs: [
      { id: "weight", label: "Dog Weight", type: "number", defaultValue: 20, unit: "kg" },
      { id: "percentage", label: "Feeding Percentage", type: "number", defaultValue: 2.5, unit: "%" }
    ],
    outputs: [{ id: "food", label: "Daily Raw Food", formula: "weight * (percentage / 100) * 1000", unit: "g" }]
  },

  // CATS
  {
    id: "cat-bmi-calculator",
    name: "Cat BMI Calculator",
    description: "Calculate a feline Body Mass Index.",
    category: "biology",
    subcategory: "cats",
    scientificFormula: "BMI = \\frac{Weight}{Length^2}",
    inputs: [
      { id: "weight", label: "Cat Weight", type: "number", defaultValue: 4.5, unit: "kg" },
      { id: "length", label: "Body Length", type: "number", defaultValue: 0.45, unit: "m" }
    ],
    outputs: [{ id: "bmi", label: "Cat BMI", formula: "weight / (length^2)", unit: "kg/m²" }]
  },
  {
    id: "cat-calorie-calculator",
    name: "Cat Calorie Calculator",
    description: "Calculate daily resting energy requirement (RER) for cats.",
    category: "biology",
    subcategory: "cats",
    scientificFormula: "Calories = 70 \\times Weight^{0.75}",
    inputs: [
      { id: "weight", label: "Cat Weight (kg)", type: "number", defaultValue: 4.5, unit: "kg" }
    ],
    outputs: [{ id: "calories", label: "Daily Calories", formula: "70 * (weight^0.75)", unit: "kcal" }]
  },

  // OTHER ANIMALS
  {
    id: "horse-weight-calculator",
    name: "Horse Weight Calculator",
    description: "Estimate horse weight using heart girth and body length.",
    category: "biology",
    subcategory: "animals",
    scientificFormula: "Weight = \\frac{HeartGirth^2 \\times Length}{330}",
    inputs: [
      { id: "girth", label: "Heart Girth (inches)", type: "number", defaultValue: 75 },
      { id: "length", label: "Body Length (inches)", type: "number", defaultValue: 65 }
    ],
    outputs: [{ id: "weight", label: "Estimated Weight", formula: "(girth^2 * length) / 330", unit: "lbs" }]
  },

  // LIVESTOCK
  {
    id: "animal-mortality-rate-calculator",
    name: "Animal Mortality Rate Calculator",
    description: "Calculate flock or herd mortality percentage.",
    category: "biology",
    subcategory: "livestock",
    scientificFormula: "Mortality\\ Rate = \\frac{Deaths}{Population} \\times 100",
    inputs: [
      { id: "deaths", label: "Number of Deaths", type: "number", defaultValue: 5 },
      { id: "population", label: "Total Population", type: "number", defaultValue: 200 }
    ],
    outputs: [{ id: "mortality", label: "Mortality Rate", formula: "(deaths / population) * 100", unit: "%" }]
  },
  {
    id: "feed-conversion-ratio-calculator",
    name: "Feed Conversion Ratio Calculator",
    description: "Calculate the efficiency of an animal converting feed into body mass.",
    category: "biology",
    subcategory: "livestock",
    scientificFormula: "FCR = \\frac{Feed\\ Intake}{Weight\\ Gain}",
    inputs: [
      { id: "feed", label: "Feed Intake", type: "number", defaultValue: 50, unit: "kg" },
      { id: "gain", label: "Weight Gain", type: "number", defaultValue: 25, unit: "kg" }
    ],
    outputs: [{ id: "fcr", label: "Feed Conversion Ratio", formula: "feed / gain", unit: "ratio" }]
  },

  // GARDENING & CROPS
  {
    id: "fertilizer-calculator",
    name: "Fertilizer Calculator",
    description: "Calculate the amount of fertilizer needed for a given area.",
    category: "biology",
    subcategory: "botany",
    scientificFormula: "Fertilizer = Area \\times Nutrient\\ Req",
    inputs: [
      { id: "area", label: "Land Area (sq meters)", type: "number", defaultValue: 100 },
      { id: "nutrient", label: "Nutrient Requirement (kg/sq m)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [{ id: "fertilizer", label: "Required Fertilizer", formula: "area * nutrient", unit: "kg" }]
  },
  {
    id: "compost-calculator",
    name: "Compost Calculator",
    description: "Calculate required compost volume for a raised bed.",
    category: "biology",
    subcategory: "botany",
    scientificFormula: "Volume = L \\times W \\times H",
    inputs: [
      { id: "l", label: "Length (m)", type: "number", defaultValue: 2 },
      { id: "w", label: "Width (m)", type: "number", defaultValue: 1 },
      { id: "h", label: "Height (m)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [{ id: "vol", label: "Compost Volume", formula: "l * w * h", unit: "m³" }]
  },
  {
    id: "plant-spacing-calculator",
    name: "Plant Spacing Calculator",
    description: "Calculate how many plants fit in a specific area based on spacing.",
    category: "biology",
    subcategory: "botany",
    scientificFormula: "Plants = \\frac{Area}{Spacing^2}",
    inputs: [
      { id: "area", label: "Total Area (sq m)", type: "number", defaultValue: 50 },
      { id: "spacing", label: "Plant Spacing (m)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [{ id: "plants", label: "Total Plants", formula: "area / (spacing^2)", unit: "plants" }]
  },

  // TREES & FORESTRY
  {
    id: "basal-area-calculator",
    name: "Basal Area Calculator",
    description: "Calculate the cross-sectional area of a tree trunk at breast height.",
    category: "biology",
    subcategory: "botany",
    scientificFormula: "BA = \\pi \\times \\left(\\frac{DBH}{2}\\right)^2",
    inputs: [
      { id: "dbh", label: "Diameter at Breast Height (cm)", type: "number", defaultValue: 40 }
    ],
    outputs: [{ id: "ba", label: "Basal Area", formula: "pi * (dbh / 2)^2", unit: "cm²" }]
  },
  {
    id: "tree-height-calculator",
    name: "Tree Height Calculator",
    description: "Calculate tree height using trigonometry.",
    category: "biology",
    subcategory: "botany",
    scientificFormula: "Height = Distance \\times \\tan(Angle)",
    inputs: [
      { id: "distance", label: "Distance from Tree (m)", type: "number", defaultValue: 20 },
      { id: "angle", label: "Angle to Top (degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [{ id: "height", label: "Tree Height", formula: "distance * tan(angle * pi / 180)", unit: "m" }]
  },

  // OTHER CALCULATORS
  {
    id: "protein-molecular-weight-calculator",
    name: "Protein Molecular Weight Calculator",
    description: "Estimate protein molecular weight based on sequence length.",
    category: "biology",
    subcategory: "laboratory",
    scientificFormula: "MW = Length \\times 110",
    inputs: [
      { id: "length", label: "Number of Amino Acids", type: "number", defaultValue: 300 }
    ],
    outputs: [{ id: "mw", label: "Estimated Molecular Weight", formula: "length * 110", unit: "Da" }]
  },
  {
    id: "wastewater-calculator",
    name: "Wastewater Flow Rate Calculator",
    description: "Calculate the flow rate of wastewater.",
    category: "biology",
    subcategory: "ecology",
    scientificFormula: "Flow = \\frac{Volume}{Time}",
    inputs: [
      { id: "volume", label: "Total Volume", type: "number", defaultValue: 5000, unit: "L" },
      { id: "time", label: "Time Duration", type: "number", defaultValue: 24, unit: "hours" }
    ],
    outputs: [{ id: "flow", label: "Flow Rate", formula: "volume / time", unit: "L/hr" }]
  }
];
