import { CalculatorConfig } from "./calculator-types";

export const BIOLOGY_CALCULATORS_LABS: CalculatorConfig[] = [
  // BIO LABORATORY
  {
    id: "annealing-temperature-calculator",
    name: "Annealing Temperature Calculator",
    description: "Calculate primer annealing temperature (Tm) in PCR using the Wallace rule.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "T_m = 2(A+T) + 4(G+C)",
    inputs: [
      { id: "A", label: "Number of A bases", type: "number", defaultValue: 5 },
      { id: "T", label: "Number of T bases", type: "number", defaultValue: 5 },
      { id: "G", label: "Number of G bases", type: "number", defaultValue: 5 },
      { id: "C", label: "Number of C bases", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "tm", label: "Melting Temperature (Tm)", formula: "2 * (A + T) + 4 * (G + C)", unit: "°C" }],
    theory: "The melting temperature (Tm) is the temperature at which half of the DNA duplex will dissociate. In PCR, the annealing temperature is typically set 3-5°C below the Tm.",
    seoMeta: { title: "PCR Annealing Temperature Calculator", description: "Calculate DNA primer melting and annealing temperatures for PCR.", keywords: "PCR, annealing temperature, Tm" }
  },
  {
    id: "generation-time-calculator",
    name: "Generation Time Calculator",
    description: "Determine the time required for a bacterial population to double.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "G = \\frac{t}{n}",
    inputs: [
      { id: "t", label: "Total Growth Time", type: "number", defaultValue: 120, unit: "minutes" },
      { id: "n", label: "Number of Generations", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "G", label: "Generation Time", formula: "t / n", unit: "minutes" }],
    theory: "Generation time (or doubling time) is the time required for a microbial population to double in number during the log phase.",
    seoMeta: { title: "Bacterial Generation Time Calculator", description: "Calculate doubling time for bacterial cultures.", keywords: "generation time, bacterial doubling time" }
  },
  {
    id: "cell-dilution-calculator",
    name: "Cell Dilution Calculator",
    description: "Calculate the required stock volume for a target cell concentration using C1V1=C2V2.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "V_1 = \\frac{C_2 \\times V_2}{C_1}",
    inputs: [
      { id: "C1", label: "Initial Concentration (C1)", type: "number", defaultValue: 1000 },
      { id: "C2", label: "Final Concentration (C2)", type: "number", defaultValue: 100 },
      { id: "V2", label: "Final Volume (V2)", type: "number", defaultValue: 50, unit: "mL" }
    ],
    outputs: [{ id: "V1", label: "Required Stock Volume (V1)", formula: "(C2 * V2) / C1", unit: "mL" }],
    theory: "The dilution equation (C1V1 = C2V2) expresses the conservation of mass. The total number of cells or moles remains constant.",
    seoMeta: { title: "Cell Dilution Calculator C1V1", description: "Calculate cell suspension dilutions.", keywords: "cell dilution, C1V1, stock concentration" }
  },
  {
    id: "cell-doubling-time-calculator",
    name: "Cell Doubling Time Calculator",
    description: "Calculate the exact doubling time of a cell culture based on initial and final counts.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "DT = \\frac{Time \\times \\log_{10}(2)}{\\log_{10}(Final / Initial)}",
    inputs: [
      { id: "initial", label: "Initial Cell Count", type: "number", defaultValue: 10000 },
      { id: "final", label: "Final Cell Count", type: "number", defaultValue: 80000 },
      { id: "time", label: "Time Duration", type: "number", defaultValue: 24, unit: "hours" }
    ],
    outputs: [{ id: "dt", label: "Doubling Time", formula: "(time * log10(2)) / log10(final / initial)", unit: "hours" }],
    theory: "Doubling time represents the time necessary for a quantity to double in size or value during exponential growth.",
    seoMeta: { title: "Cell Doubling Time Calculator", description: "Calculate doubling time for cell cultures.", keywords: "doubling time, cell culture" }
  },
  {
    id: "dna-concentration-calculator",
    name: "DNA Concentration Calculator",
    description: "Calculate DNA concentration from spectrophotometer absorbance readings at 260nm.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "DNA = A_{260} \\times Dilution \\times 50",
    inputs: [
      { id: "absorbance", label: "Absorbance at 260nm", type: "number", defaultValue: 0.5 },
      { id: "dilution", label: "Dilution Factor", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "conc", label: "DNA Concentration", formula: "absorbance * dilution * 50", unit: "ng/µL" }],
    theory: "An optical density (OD) of 1.0 at 260 nm corresponds to approximately 50 µg/mL (or ng/µL) of double-stranded DNA.",
    seoMeta: { title: "DNA Concentration Calculator", description: "Calculate DNA concentration from A280 spectrophotometer readings.", keywords: "DNA concentration, A260, absorbance" }
  },
  {
    id: "ligation-calculator",
    name: "Ligation Calculator",
    description: "Calculate the amount of insert DNA needed for vector ligation.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "Insert = \\frac{Insert_{bp}}{Vector_{bp}} \\times Vector_{ng} \\times Ratio",
    inputs: [
      { id: "insert_bp", label: "Insert Length (bp)", type: "number", defaultValue: 1000 },
      { id: "vector_bp", label: "Vector Length (bp)", type: "number", defaultValue: 4000 },
      { id: "vector_ng", label: "Vector Amount (ng)", type: "number", defaultValue: 50 },
      { id: "ratio", label: "Molar Ratio (Insert:Vector)", type: "number", defaultValue: 3 }
    ],
    outputs: [{ id: "insert_ng", label: "Required Insert Amount", formula: "(insert_bp / vector_bp) * vector_ng * ratio", unit: "ng" }],
    theory: "Optimizing the molar ratio of insert to vector DNA is critical for successful enzymatic ligation in molecular cloning.",
    seoMeta: { title: "Ligation DNA Insert Calculator", description: "Determine required insert DNA mass for vector ligation.", keywords: "ligation calculator, insert vector ratio" }
  },
  {
    id: "log-reduction-calculator",
    name: "Log Reduction Calculator",
    description: "Determine the log reduction value for antimicrobial or sterilization efficacy.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "Log Reduction = \\log_{10}\\left(\\frac{Initial}{Final}\\right)",
    inputs: [
      { id: "initial", label: "Initial Microbial Count", type: "number", defaultValue: 1000000 },
      { id: "final", label: "Final Microbial Count", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "reduction", label: "Log Reduction", formula: "log10(initial / final)", unit: "log" }],
    theory: "Log reduction is a standard metric used to show the relative percentage of live microbes eliminated by cleaning or disinfection.",
    seoMeta: { title: "Log Reduction Calculator", description: "Calculate log reduction sterilization efficacy.", keywords: "log reduction, microbial elimination" }
  },
  {
    id: "protein-concentration-calculator",
    name: "Protein Concentration Calculator",
    description: "Calculate protein concentration using absorbance and standard extinction coefficient.",
    category: "biology",
    subcategory: "bio-laboratory",
    scientificFormula: "Concentration = Absorbance \\times Factor",
    inputs: [
      { id: "absorbance", label: "Absorbance (A280)", type: "number", defaultValue: 0.75 },
      { id: "factor", label: "Extinction Factor", type: "number", defaultValue: 1.0 }
    ],
    outputs: [{ id: "protein", label: "Protein Concentration", formula: "absorbance * factor", unit: "mg/mL" }],
    theory: "UV absorbance at 280 nm is a classic quantitative indicator of protein content, depending on aromatic amino acids.",
    seoMeta: { title: "Protein Concentration A280 Calculator", description: "Calculate protein concentration from A280 readings.", keywords: "protein concentration, A280" }
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
    theory: "Allele frequency represents the incidence of a gene variant in a population. Useful for Hardy-Weinberg testing.",
    seoMeta: { title: "Allele Frequency Calculator", description: "Calculate gene allele frequencies in populations.", keywords: "allele frequency, genetics" }
  },
  {
    id: "dihybrid-cross-calculator",
    name: "Dihybrid Cross Calculator - Punnett Square",
    description: "Analyze offspring ratios for crosses involving two genes.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "\\text{Genotypes} = 16",
    inputs: [
      { id: "recombinant_fraction", label: "Recombination Fraction (0-0.5)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "p_parental", label: "Parental Gamete Prob", formula: "(1 - recombinant_fraction) / 2", unit: "" },
      { id: "p_recombinant", label: "Recombinant Gamete Prob", formula: "recombinant_fraction / 2", unit: "" },
      { id: "genotypes", label: "Possible Genotypic Combos", formula: "16", unit: "cells" }
    ],
    theory: "A dihybrid cross tracks genetic inheritance for two distinct traits. Standard Independent Assortment predicts a 9:3:3:1 phenotypic ratio.",
    seoMeta: { title: "Dihybrid Cross Punnett Square Calculator", description: "Model dihybrid cross genetic ratios.", keywords: "dihybrid cross, punnett square" }
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
    theory: "Converts absolute mass of DNA to molecular copies using Avogadro's number and average base pair molar mass (660 g/mol).",
    seoMeta: { title: "DNA Copy Number Calculator", description: "Convert DNA mass to molecular copy numbers.", keywords: "copy number, DNA mass" }
  },
  {
    id: "dna-to-mrna-converter",
    name: "DNA to mRNA Converter",
    description: "Convert transcription coding metrics.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "\\text{Thymine (T)} \\rightarrow \\text{Uracil (U)}",
    inputs: [
      { id: "dna_length", label: "DNA Sequence Length (bp)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "mrna_length", label: "Transcribed mRNA Length", formula: "dna_length", unit: "nucleotides" },
      { id: "codons", label: "Resulting Codon Count", formula: "dna_length / 3", unit: "codons" }
    ],
    theory: "Transcription maps standard coding DNA bases directly to mRNA, substituting Thymine with Uracil.",
    seoMeta: { title: "DNA to mRNA Length Converter", description: "Determine transcribed sequence parameters.", keywords: "dna to mrna, codons" }
  },
  {
    id: "punnett-square-calculator",
    name: "Punnett Square Calculator",
    description: "Calculate Punnett Grid dimensions and gamete combinations.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "\\text{Gametes} = 2^N",
    inputs: [
      { id: "alleles_a", label: "Heterozygous Genes (Parent 1)", type: "number", defaultValue: 2 },
      { id: "alleles_b", label: "Heterozygous Genes (Parent 2)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "gametes1", label: "Parent 1 Gametes", formula: "2^alleles_a", unit: "gametes" },
      { id: "gametes2", label: "Parent 2 Gametes", formula: "2^alleles_b", unit: "gametes" },
      { id: "grid_cells", label: "Punnett Square Size", formula: "(2^alleles_a) * (2^alleles_b)", unit: "cells" }
    ],
    theory: "Punnett squares cross-tabulate gametes to map potential offspring genotypes. Size scales exponentially with gene loci count.",
    seoMeta: { title: "Punnett Square Dimensional Calculator", description: "Determine gamete grids for multi-gene crosses.", keywords: "punnett square, genotypes" }
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
    theory: "An efficiency of 100% means the template exactly doubles each cycle, corresponding to a slope of -3.32.",
    seoMeta: { title: "qPCR Efficiency Calculator", description: "Calculate qPCR efficiency from standard curve slopes.", keywords: "qPCR efficiency, standard curve" }
  },
  {
    id: "trihybrid-cross-calculator",
    name: "Trihybrid Cross Calculator - Punnett Square",
    description: "Calculate genetic metrics for crosses involving three independent traits.",
    category: "biology",
    subcategory: "genetics",
    scientificFormula: "\\text{Offspring Combinations} = 64",
    inputs: [
      { id: "genes", label: "Loci Monitored (Standard=3)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "genotypes", label: "Distinct Genotypic Combos", formula: "3^genes", unit: "genotypes" },
      { id: "phenotypes", label: "Phenotypic Combos", formula: "2^genes", unit: "phenotypes" },
      { id: "cells", label: "Punnett Grid Total Size", formula: "4^genes", unit: "cells" }
    ],
    theory: "A trihybrid cross maps independent assortment across 3 distinct loci, resulting in a classic 27:9:9:9:3:3:3:1 ratio.",
    seoMeta: { title: "Trihybrid Cross Punnett Square Ratios", description: "Determine outcome parameters for trihybrid genetics.", keywords: "trihybrid cross, trihybrid punnett" }
  },

  // ANIMAL PREGNANCY
  {
    id: "cat-pregnancy-calculator",
    name: "Cat Pregnancy Calculator",
    description: "Determine expected delivery dates for pregnant felines.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Mating Date} + 64\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Mating", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Due", formula: "64 - mating", unit: "days" }],
    theory: "Average feline gestation is 64 days (safely between 61 and 67 days).",
    seoMeta: { title: "Cat Pregnancy Gestation Calculator", description: "Calculate due dates for cats.", keywords: "cat pregnancy, feline gestation" }
  },
  {
    id: "cow-gestation-calculator",
    name: "Cow Gestation Calculator",
    description: "Calculate a cow's expected calving date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Breeding\\ Date + 283\\ days",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Calving", formula: "283 - mating", unit: "days" }],
    theory: "Cows have an average gestation period of 283 days.",
    seoMeta: { title: "Cow Gestation Calving Calculator", description: "Estimate calving dates for cattle.", keywords: "cow gestation, calving" }
  },
  {
    id: "dog-pregnancy-calculator",
    name: "Dog Pregnancy Calculator",
    description: "Calculate a dog's estimated due date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Mating\\ Date + 63\\ days",
    inputs: [
      { id: "mating", label: "Days Elapsed since Mating", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Whelping", formula: "63 - mating", unit: "days" }],
    theory: "Standard canine whelping is expected approximately 63 days after breeding.",
    seoMeta: { title: "Dog Pregnancy Due Date Calculator", description: "Estimate whelping dates for dogs.", keywords: "dog pregnancy, whelping" }
  },
  {
    id: "goat-gestation-calculator",
    name: "Goat Gestation Calculator",
    description: "Calculate a goat's expected kidding date.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "Due\\ Date = Breeding\\ Date + 150\\ days",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Kidding", formula: "150 - mating", unit: "days" }],
    theory: "Standard caprine kidding occurs ~150 days post breeding.",
    seoMeta: { title: "Goat Gestation Kidding Calculator", description: "Calculate kidding dates for goats.", keywords: "goat gestation, kidding" }
  },
  {
    id: "guinea-pig-pregnancy-calculator",
    name: "Guinea Pig Pregnancy Calculator",
    description: "Calculate gestation benchmarks for guinea pigs.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Mating} + 68\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Mating", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Birth", formula: "68 - mating", unit: "days" }],
    theory: "Guinea pigs have remarkably long gestations for rodents, typically spanning 59 to 72 days (average 68).",
    seoMeta: { title: "Guinea Pig Gestation Calculator", description: "Calculate guinea pig pregnancy delivery dates.", keywords: "guinea pig pregnancy" }
  },
  {
    id: "mare-gestation-calculator",
    name: "Mare Gestation Calculator - Horse Gestation",
    description: "Determine delivery windows for pregnant horses.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Breeding} + 340\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Foaling", formula: "340 - mating", unit: "days" }],
    theory: "Equine gestations average 340 days (varying safely from 320 to 365 days).",
    seoMeta: { title: "Horse Gestation Calculator | Foaling", description: "Calculate equine foaling dates.", keywords: "horse gestation, foaling" }
  },
  {
    id: "llama-calculator",
    name: "Llama Calculator",
    description: "Estimate gestation limits for llamas.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Breeding} + 345\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Birth", formula: "345 - mating", unit: "days" }],
    theory: "Llama pregnancy durations span an average of 345 days.",
    seoMeta: { title: "Llama Gestation Pregnancy Calculator", description: "Calculate llama birth dates.", keywords: "llama pregnancy, gestation" }
  },
  {
    id: "rabbit-gestation-calculator",
    name: "Rabbit Gestation Calculator",
    description: "Determine delivery expectations for rabbits.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Breeding} + 31\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Mating", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Kindling", formula: "31 - mating", unit: "days" }],
    theory: "Rabbit gestation typically lasts 31 days (can range from 28 to 33 days).",
    seoMeta: { title: "Rabbit Gestation Calculator | Kindling", description: "Determine standard rabbit kindling dates.", keywords: "rabbit gestation, kindling" }
  },
  {
    id: "sheep-gestation-calculator",
    name: "Sheep Gestation Calculator",
    description: "Calculate expected lambing dates for ewes.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Breeding} + 147\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Lambing", formula: "147 - mating", unit: "days" }],
    theory: "Sheep gestation lasts an average of 147 days.",
    seoMeta: { title: "Sheep Gestation & Lambing Calculator", description: "Estimate lambing dates for ewes.", keywords: "sheep gestation, lambing" }
  },
  {
    id: "swine-gestation-calculator",
    name: "Swine Gestation Calculator",
    description: "Calculate farrowing dates for swine.",
    category: "biology",
    subcategory: "animal-pregnancy",
    scientificFormula: "\\text{Due} = \\text{Breeding} + 114\\;\\text{Days}",
    inputs: [
      { id: "mating", label: "Days Elapsed since Breeding", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "due", label: "Days Remaining until Farrowing", formula: "114 - mating", unit: "days" }],
    theory: "A pig's gestation is traditionally noted as 3 months, 3 weeks, and 3 days (approx 114 days).",
    seoMeta: { title: "Swine Gestation Calculator | Farrowing", description: "Calculate farrowing dates for pigs.", keywords: "swine gestation, farrowing" }
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
    outputs: [{ id: "mortality", label: "Mortality Rate", formula: "(deaths / population) * 100", unit: "%" }],
    theory: "Tracks health status indices within poultry, swine, or cattle farming operations.",
    seoMeta: { title: "Animal Mortality Rate Calculator", description: "Determine herd or flock mortality percentages.", keywords: "livestock mortality" }
  },
  {
    id: "cattle-per-acre-calculator",
    name: "Cattle per Acre Calculator",
    description: "Estimate animal carrying capacity of pasture lands.",
    category: "biology",
    subcategory: "livestock",
    scientificFormula: "\\text{Herd Size} = \\frac{\\text{Acres}}{\\text{Weight} \\times 0.0003}",
    inputs: [
      { id: "acres", label: "Total Grazing Land (acres)", type: "number", defaultValue: 50 },
      { id: "weight", label: "Average Cattle Weight (lbs)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "carrying_capacity", label: "Recommended Max Herd Size", formula: "acres / (weight * 0.0003)", unit: "animals" }
    ],
    theory: "Carrying capacity depends on daily forage dry-matter intakes (typically 3% of animal body weight).",
    seoMeta: { title: "Cattle Per Acre Pasture Calculator", description: "Determine grazing capacity for cattle herds.", keywords: "cattle per acre, stocking density" }
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
    outputs: [{ id: "fcr", label: "Feed Conversion Ratio", formula: "feed / gain", unit: "ratio" }],
    theory: "FCR measures commercial livestock feed efficiency. Lower indexes indicate superior metabolic conversions.",
    seoMeta: { title: "Feed Conversion Ratio Calculator", description: "Determine FCR index for farm animals.", keywords: "FCR, feed conversion" }
  },
  {
    id: "grain-bin-calculator",
    name: "Grain Bin Calculator",
    description: "Calculate volume and bushel capacity of circular grain storage silos.",
    category: "biology",
    subcategory: "livestock",
    scientificFormula: "V = \\pi \\times r^2 \\times h",
    inputs: [
      { id: "radius", label: "Bin Radius (feet)", type: "number", defaultValue: 15 },
      { id: "height", label: "Cylinder Height (feet)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "vol", label: "Silo Volume", formula: "pi * radius^2 * height", unit: "cu ft" },
      { id: "bushels", label: "Approximate Bushel Capacity", formula: "pi * radius^2 * height * 0.8", unit: "bushels" }
    ],
    theory: "A standard bushel of grain occupies approximately 1.244 cubic feet (conversion ratio is ~0.803 bushels per cu ft).",
    seoMeta: { title: "Grain Bin Bushel Capacity Calculator", description: "Estimate circular silo volumes.", keywords: "grain bin, bushels" }
  },
  {
    id: "livestock-fence-cost-calculator",
    name: "Livestock Fence Cost Calculator",
    description: "Estimate costs and materials needed for boundary fences.",
    category: "biology",
    subcategory: "livestock",
    scientificFormula: "\\text{Cost} = \\text{Posts} + \\text{Wire}",
    inputs: [
      { id: "perimeter", label: "Total Fence Perimeter (feet)", type: "number", defaultValue: 2000 },
      { id: "posts_spacing", label: "Post Spacing (feet)", type: "number", defaultValue: 10 },
      { id: "cost_per_post", label: "Cost Per Post ($)", type: "number", defaultValue: 8 },
      { id: "cost_per_foot_wire", label: "Wire cost per foot ($)", type: "number", defaultValue: 0.15 },
      { id: "strands", label: "Number of Wire Strands", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "posts_count", label: "Wooden Posts Needed", formula: "ceil(perimeter / posts_spacing)", unit: "posts" },
      { id: "posts_cost", label: "Total Posts Cost", formula: "ceil(perimeter / posts_spacing) * cost_per_post", unit: "$" },
      { id: "wire_cost", label: "Total Wire Cost", formula: "perimeter * strands * cost_per_foot_wire", unit: "$" },
      { id: "total_cost", label: "Total Estimated Materials Cost", formula: "(ceil(perimeter / posts_spacing) * cost_per_post) + (perimeter * strands * cost_per_foot_wire)", unit: "$" }
    ],
    theory: "Fence budgeting combines linear support counts with cumulative strand lengths for standard barbed/high-tensile configurations.",
    seoMeta: { title: "Livestock Fence Cost Calculator", description: "Budget livestock boundary fence materials.", keywords: "fence cost, agricultural fencing" }
  },

  // OTHER / WASTEWATER / SERVICES
  {
    id: "mlvss-calculator",
    name: "MLVSS Calculator",
    description: "Determine Mixed Liquor Volatile Suspended Solids for wastewater biological aeration.",
    category: "biology",
    subcategory: "other",
    scientificFormula: "\\text{MLVSS} = \\text{MLSS} \\times \\text{Volatile Ratio}",
    inputs: [
      { id: "mlss", label: "Mixed Liquor Suspended Solids (mg/L)", type: "number", defaultValue: 3000 },
      { id: "vss_ratio", label: "Volatile Suspended Fraction (%)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "mlvss", label: "Active Volatile Solids (MLVSS)", formula: "mlss * (vss_ratio / 100)", unit: "mg/L" }
    ],
    theory: "MLVSS represents the organic, microbial concentration actively decomposing sewage in biological secondary treatment processes.",
    seoMeta: { title: "MLVSS Wastewater Aeration Calculator", description: "Calculate volatile suspended solids in wastewater treatment.", keywords: "MLVSS, wastewater, MLSS" }
  },
  {
    id: "pet-sitter-rates-calculator",
    name: "Pet Sitter Rates Calculator",
    description: "Estimate daily pet sitting service costs.",
    category: "other",
    subcategory: "other",
    scientificFormula: "\\text{Rate} = \\text{Base} + (\\text{Extra Pets} \\times \\text{Surge})",
    inputs: [
      { id: "rate_base", label: "Base Rate ($/hour)", type: "number", defaultValue: 20 },
      { id: "hours", label: "Hours per Day Needed", type: "number", defaultValue: 8 },
      { id: "pets", label: "Number of Pets", type: "number", defaultValue: 2 },
      { id: "extra_pet_charge", label: "Extra Pet Surcharge ($/hour)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total_daily", label: "Estimated Daily Rate", formula: "(rate_base * hours) + ((pets - 1) * extra_pet_charge * hours)", unit: "$" }
    ],
    theory: "Determines regional pet boarding or home-stay sitting averages incorporating multi-pet surcharges.",
    seoMeta: { title: "Pet Sitter Rates Calculator", description: "Estimate standard daily costs for pet sitters.", keywords: "pet sitter rate, boarding fee" }
  },
  {
    id: "protein-molecular-weight-calculator",
    name: "Protein Molecular Weight Calculator",
    description: "Estimate protein molecular weight based on sequence length.",
    category: "biology",
    subcategory: "other",
    scientificFormula: "MW = Length \\times 110",
    inputs: [
      { id: "length", label: "Number of Amino Acids", type: "number", defaultValue: 300 }
    ],
    outputs: [{ id: "mw", label: "Estimated Molecular Weight", formula: "length * 110", unit: "Da" }],
    theory: "Standard amino acids have a mean molar mass of ~110 Daltons once water is lost to peptide bonds.",
    seoMeta: { title: "Protein Molecular Weight Estimator", description: "Estimate protein weights from sequence lengths.", keywords: "protein weight, amino acid length" }
  },
  {
    id: "wastewater-calculator",
    name: "Wastewater Flow Rate Calculator",
    description: "Calculate the flow rate of wastewater.",
    category: "biology",
    subcategory: "other",
    scientificFormula: "Flow = \\frac{Volume}{Time}",
    inputs: [
      { id: "volume", label: "Total Volume", type: "number", defaultValue: 5000, unit: "L" },
      { id: "time", label: "Time Duration", type: "number", defaultValue: 24, unit: "hours" }
    ],
    outputs: [{ id: "flow", label: "Flow Rate", formula: "volume / time", unit: "L/hr" }],
    theory: "Standard environmental engineering metric for hydraulic loading rates.",
    seoMeta: { title: "Wastewater Hydraulic Flow Calculator", description: "Calculate wastewater flow rates.", keywords: "wastewater flow rate" }
  }
];
