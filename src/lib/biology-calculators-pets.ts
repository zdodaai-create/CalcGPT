import { CalculatorConfig } from "./calculator-types";

export const BIOLOGY_CALCULATORS_PETS: CalculatorConfig[] = [
  // DOG CALCULATORS
  {
    id: "benadryl-dosage-calculator-dogs",
    name: "Benadryl Dosage Calculator for Dogs",
    description: "Calculate safe Benadryl (Diphenhydramine) dosage for dogs based on body weight.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Dosage (mg)} = \\text{Weight (lbs)} \\times 1.0",
    inputs: [
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 30, unit: "lbs" },
      { id: "concentration", label: "Liquid Concentration", type: "number", defaultValue: 2.5, unit: "mg/mL", helpText: "Standard children's liquid Benadryl is 12.5 mg per 5 mL (2.5 mg/mL)." }
    ],
    outputs: [
      { id: "dosage_mg", label: "Recommended Dosage", formula: "weight * 1", unit: "mg" },
      { id: "dosage_ml", label: "Liquid Volume to Administer", formula: "(weight * 1) / concentration", unit: "mL" }
    ],
    theory: "The standard veterinary dosage for diphenhydramine (Benadryl) is 1 mg per pound of body weight, administered 2 to 3 times daily. Always consult a veterinarian to confirm the safety, especially for dogs with pre-existing conditions.",
    seoMeta: {
      title: "Dog Benadryl Dosage Calculator | Safe Vet Guidelines",
      description: "Calculate the exact, safe diphenhydramine (Benadryl) dosage in mg and mL for your dog based on their body weight.",
      keywords: "benadryl for dogs, dog benadryl dosage, diphenhydramine dog weight"
    }
  },
  {
    id: "cephalexin-dosage-calculator-dogs",
    name: "Cephalexin For Dogs Dosage Calculator",
    description: "Calculate the appropriate cephalexin antibiotic dosage for your dog.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Dosage (mg)} = \\text{Weight (lbs)} \\times 12.5",
    inputs: [
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 40, unit: "lbs" },
      { id: "dose_rate", label: "Dosage Rate", type: "number", defaultValue: 12.5, unit: "mg/lb", helpText: "Standard canine range is 10 to 15 mg per pound." }
    ],
    outputs: [
      { id: "dosage_mg", label: "Calculated Dose", formula: "weight * dose_rate", unit: "mg" }
    ],
    theory: "Cephalexin is a broad-spectrum cephalosporin antibiotic used to treat bacterial infections in dogs. The typical dose is 10 to 15 mg per pound (22 to 33 mg/kg) administered every 8 to 12 hours.",
    seoMeta: {
      title: "Cephalexin Dosage Calculator for Dogs",
      description: "Determine the recommended cephalexin antibiotic dose for your dog based on body weight.",
      keywords: "cephalexin for dogs, cephalexin dosage dog, dog antibiotics"
    }
  },
  {
    id: "cost-owning-dog-calculator",
    name: "Cost of Owning a Dog Calculator",
    description: "Estimate the annual and lifetime costs of owning and caring for a dog.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Annual Cost} = (\\text{Monthly Expenses} \\times 12) + \\text{Annual Expenses}",
    inputs: [
      { id: "food_monthly", label: "Monthly Food Cost", type: "number", defaultValue: 60, unit: "$" },
      { id: "vet_annual", label: "Annual Vet & Medical Cost", type: "number", defaultValue: 300, unit: "$" },
      { id: "toys_monthly", label: "Monthly Toys & Treats", type: "number", defaultValue: 20, unit: "$" },
      { id: "grooming_monthly", label: "Monthly Grooming & Supplies", type: "number", defaultValue: 25, unit: "$" },
      { id: "lifespan", label: "Estimated Lifespan", type: "number", defaultValue: 12, unit: "years" }
    ],
    outputs: [
      { id: "annual_cost", label: "Estimated Annual Cost", formula: "(food_monthly + toys_monthly + grooming_monthly) * 12 + vet_annual", unit: "$" },
      { id: "lifetime_cost", label: "Estimated Lifetime Cost", formula: "((food_monthly + toys_monthly + grooming_monthly) * 12 + vet_annual) * lifespan", unit: "$" }
    ],
    theory: "Dog ownership involves both ongoing monthly commitments and irregular annual clinical costs. Understanding long-term financial expectations helps guarantee suitable veterinary and nutritional care throughout your pet's life.",
    seoMeta: {
      title: "Cost of Owning a Dog Calculator | Lifetime Budget",
      description: "Estimate monthly, annual, and lifetime expenses of dog ownership.",
      keywords: "cost of a dog, dog budget calculator, lifetime dog expenses"
    }
  },
  {
    id: "dog-age-calculator",
    name: "Dog Age Calculator",
    description: "Convert your dog's age into equivalent human years.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Human Years} = \\text{Ternary Age Scaling}",
    inputs: [
      { id: "dog_age", label: "Dog's Age", type: "number", defaultValue: 3, unit: "years" }
    ],
    outputs: [
      { id: "human_years", label: "Equivalent Human Years", formula: "dog_age <= 1 ? dog_age * 15 : (dog_age <= 2 ? 24 : 24 + (dog_age - 2) * 5)", unit: "years" }
    ],
    theory: "The classic '1 dog year = 7 human years' rule is an oversimplification. Modern models show that a dog matures very rapidly in its first year (reaching ~15 human years) and second year (+9 human years), after which aging slows down to roughly 4-6 human years per calendar year depending on breed size.",
    seoMeta: {
      title: "Dog Age Calculator | Dog Years to Human Years",
      description: "Convert dog years to human years accurately using the latest scientific growth formulas.",
      keywords: "dog age calculator, dog years, human years equivalent"
    }
  },
  {
    id: "dog-bmi-calculator",
    name: "Dog BMI Calculator",
    description: "Determine your dog's Body Mass Index to monitor healthy body proportions.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{BMI} = \\frac{\\text{Weight (kg)}}{\\text{Height (m)}^2}",
    inputs: [
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 45, unit: "lbs" },
      { id: "height", label: "Dog's Height at Withers", type: "number", defaultValue: 20, unit: "inches" }
    ],
    outputs: [
      { id: "bmi", label: "Canine Body Mass Index", formula: "(weight * 0.453592) / ((height * 0.0254)^2)", unit: "kg/m²" }
    ],
    theory: "Canine BMI helps assess whether a dog is maintaining a balanced ratio between height and weight. Note that skeletal build varies significantly by breed, so combining BMI with a physical Body Condition Score (BCS) assessment is highly recommended.",
    seoMeta: {
      title: "Dog BMI Calculator | Body Mass Index",
      description: "Calculate your dog's Body Mass Index using their height and weight to assess physical condition.",
      keywords: "dog bmi, canine body mass index, dog height weight ratio"
    }
  },
  {
    id: "dog-nutrition-calculator",
    name: "Dog Nutrition Calculator",
    description: "Calculate your dog's daily Resting Energy (RER) and Active Energy (DER) needs.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{RER} = 70 \\times \\text{Weight (kg)}^{0.75}",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 50, unit: "lbs" },
      { id: "activity_multiplier", label: "Life Stage / Activity Level", type: "number", defaultValue: 1.6, helpText: "Typical multipliers: 1.6 for neutered adult, 1.8 for intact adult, 1.2 for weight loss, 3.0 for active working dog." }
    ],
    outputs: [
      { id: "rer", label: "Resting Energy Requirement (RER)", formula: "70 * ((weight_lbs * 0.453592)^0.75)", unit: "kcal/day" },
      { id: "der", label: "Daily Energy Requirement (DER)", formula: "70 * ((weight_lbs * 0.453592)^0.75) * activity_multiplier", unit: "kcal/day" }
    ],
    theory: "RER covers the basic energy needed for physiological functions at rest. DER scales RER by multiplying it to account for active lifestyles, neutering status, pregnancy, or metabolic parameters.",
    seoMeta: {
      title: "Dog Nutrition Calorie Calculator | RER & DER",
      description: "Calculate resting and daily calorie requirements for dogs based on scientific metabolic scaling.",
      keywords: "dog nutrition, dog calories, RER calculator, DER dog"
    }
  },
  {
    id: "dog-chocolate-toxicity-calculator",
    name: "Dog Chocolate Toxicity Calculator",
    description: "Assess the risk level and clinical toxicity dose of chocolate ingestion for your dog.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Dose} = \\frac{\\text{Amount (oz)} \\times \\text{Conc (mg/oz)}}{\\text{Weight (kg)}}",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 30, unit: "lbs" },
      { id: "amount_oz", label: "Chocolate Amount Eaten", type: "number", defaultValue: 2.0, unit: "oz" },
      { id: "chocolate_type_mg_oz", label: "Chocolate Type", type: "select", defaultValue: 58, options: [
        { label: "White Chocolate (0.25 mg/oz methylxanthines)", value: 0.25 },
        { label: "Milk Chocolate (58 mg/oz methylxanthines)", value: 58 },
        { label: "Dark Chocolate (130 mg/oz methylxanthines)", value: 130 },
        { label: "Baker's Chocolate (450 mg/oz methylxanthines)", value: 450 },
        { label: "Cocoa Powder (800 mg/oz methylxanthines)", value: 800 }
      ]}
    ],
    outputs: [
      { id: "total_ingested_mg", label: "Total Ingested Methylxanthines", formula: "amount_oz * chocolate_type_mg_oz", unit: "mg" },
      { id: "dose_per_kg", label: "Calculated Dose per Body Mass", formula: "(amount_oz * chocolate_type_mg_oz) / (weight_lbs * 0.453592)", unit: "mg/kg" }
    ],
    theory: "Chocolate contains theobromine and caffeine (methylxanthines), which dogs metabolize very slowly. Ingestion above 20 mg/kg can cause mild clinical symptoms, while doses exceeding 40-60 mg/kg represent serious cardiotoxic and neurotoxic hazards requiring immediate emergency veterinary attention.",
    seoMeta: {
      title: "Dog Chocolate Toxicity Calculator | Emergency Tool",
      description: "Quickly evaluate the chocolate toxicity threat level for dogs using weight and chocolate type.",
      keywords: "dog chocolate toxicity, chocolate poisoning dogs, theobromine dose"
    }
  },
  {
    id: "dog-crate-size-calculator",
    name: "Dog Crate Size Calculator",
    description: "Determine the optimal height, length, and width dimensions for a dog crate.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Length} = \\text{Dog Length} + 4",
    inputs: [
      { id: "dog_length", label: "Dog Length (Nose to Tail Base)", type: "number", defaultValue: 24, unit: "inches" },
      { id: "dog_height", label: "Dog Height (Floor to Head/Ears)", type: "number", defaultValue: 18, unit: "inches" }
    ],
    outputs: [
      { id: "crate_length", label: "Recommended Crate Length", formula: "dog_length + 4", unit: "inches" },
      { id: "crate_height", label: "Recommended Crate Height", formula: "dog_height + 3", unit: "inches" },
      { id: "crate_width", label: "Recommended Crate Width", formula: "(dog_length + 4) * 0.7", unit: "inches" }
    ],
    theory: "A properly fitted crate must allow a dog to stand, turn around comfortably, and lie down fully stretched. Excessively large crates can interfere with house training, while small crates cause physical cramping.",
    seoMeta: {
      title: "Dog Crate Size Calculator | Perfect Fit Finder",
      description: "Find the correct crate dimensions for your dog based on measured body length and standing height.",
      keywords: "dog crate size, crate dimensions, puppy crate calculator"
    }
  },
  {
    id: "dog-food-calculator",
    name: "Dog Food Calculator",
    description: "Determine the daily cups and monthly weight of dry food needed to meet your dog's caloric target.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Daily Cups} = \\frac{\\text{Energy Requirement}}{\\text{Caloric Density}}",
    inputs: [
      { id: "der", label: "Daily Energy Target (DER)", type: "number", defaultValue: 850, unit: "kcal/day" },
      { id: "caloric_density", label: "Food Caloric Density", type: "number", defaultValue: 375, unit: "kcal/cup" }
    ],
    outputs: [
      { id: "daily_cups", label: "Dry Food Amount", formula: "der / caloric_density", unit: "cups/day" },
      { id: "monthly_bags_lbs", label: "Est. Monthly Food Weight", formula: "(der / caloric_density) * 30 * 0.25", unit: "lbs/month" }
    ],
    theory: "Dry commercial dog food averages roughly 350-400 kcal per cup. Calculating specific volumes based on the dog's exact daily caloric needs helps prevent accidental overfeeding and weight issues.",
    seoMeta: {
      title: "Dog Food Calculator | Cups Per Day",
      description: "Convert your dog's daily calorie requirement into exact dry food cups and monthly weight limits.",
      keywords: "dog food calculator, dry food cups, feed my dog"
    }
  },
  {
    id: "dog-harness-size-calculator",
    name: "Dog Harness Size Calculator",
    description: "Determine appropriate harness size limits using chest girth measurements.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Harness Range} = \\text{Girth} \\pm \\text{Buffer}",
    inputs: [
      { id: "chest_girth", label: "Chest Girth (widest ribcage area)", type: "number", defaultValue: 22, unit: "inches" },
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 30, unit: "lbs" }
    ],
    outputs: [
      { id: "harness_chest_min", label: "Min Recommended Harness Size", formula: "chest_girth - 1", unit: "inches" },
      { id: "harness_chest_max", label: "Max Recommended Harness Size", formula: "chest_girth + 2", unit: "inches" }
    ],
    theory: "Harnesses should secure the chest without binding the shoulders. A typical harness should fit snugly such that two fingers can slide easily underneath the straps.",
    seoMeta: {
      title: "Dog Harness Size Calculator | Girth Guide",
      description: "Calculate standard harness adjustment ranges based on chest girth measurements.",
      keywords: "dog harness size, chest girth, harness fitting"
    }
  },
  {
    id: "dog-heat-cycle-calculator",
    name: "Dog Heat Cycle Calculator",
    description: "Estimate the primary phases and calendar timings of a female dog's heat cycle.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Est. Cycle Days}",
    inputs: [
      { id: "last_start_days", label: "Days since last heat cycle started", type: "number", defaultValue: 0, unit: "days" }
    ],
    outputs: [
      { id: "proestrus_end", label: "Est. Proestrus End (Bleeding Phase)", formula: "9 - last_start_days", unit: "days" },
      { id: "estrus_end", label: "Est. Estrus End (Fertility window)", formula: "18 - last_start_days", unit: "days" },
      { id: "next_heat_start", label: "Days until Next Heat Cycle", formula: "180 - last_start_days", unit: "days" }
    ],
    theory: "Unspayed female dogs generally cycle twice a year (roughly every 6 months). The typical cycle is divided into Proestrus (average 9 days) where bleeding occurs, and Estrus (average 9 days) which represents active behavioral receptivity and high fertility.",
    seoMeta: {
      title: "Dog Heat Cycle Calculator | Estrus & Fertility Tracker",
      description: "Estimate cycle durations and fertility phases for female dogs.",
      keywords: "dog heat cycle, dog estrus, canine breeding cycle"
    }
  },
  {
    id: "dog-life-expectancy-calculator",
    name: "Dog Life Expectancy Calculator",
    description: "Estimate your dog's life expectancy based on body mass and health scoring.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Lifespan} = (15 - \\text{Weight} \\times 0.04) \\times \\text{Health Factor}",
    inputs: [
      { id: "weight_lbs", label: "Dog's Adult Weight", type: "number", defaultValue: 40, unit: "lbs" },
      { id: "health_score", label: "General Health Status (1 to 10)", type: "number", defaultValue: 8, helpText: "10: Outstanding athletic health, 5: Average health, 1: Severe chronic illness." }
    ],
    outputs: [
      { id: "life_expectancy", label: "Estimated Lifespan", formula: "(15 - (weight_lbs * 0.04)) * (health_score / 8)", unit: "years" }
    ],
    theory: "In dogs, body size is inversely related to lifespan: smaller toy breeds frequently live up to 14-16 years, whereas giant breeds may reach only 7-9 years. Environmental conditions and wellness play critical supporting roles.",
    seoMeta: {
      title: "Dog Life Expectancy Calculator | Estimated Lifespan",
      description: "Estimate your dog's lifespan using body weight and physiological health markers.",
      keywords: "dog life expectancy, how long do dogs live, canine lifespan"
    }
  },
  {
    id: "metacam-dosage-calculator-dogs",
    name: "Metacam Dosage Calculator for Dogs",
    description: "Calculate standard Metacam (Meloxicam) loading and maintenance doses for dogs.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Maintenance Dose} = \\text{Weight (lbs)} \\times 0.045",
    inputs: [
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 40, unit: "lbs" },
      { id: "concentration", label: "Liquid Concentration", type: "number", defaultValue: 1.5, unit: "mg/mL", helpText: "Standard canine oral Metacam is 1.5 mg/mL." }
    ],
    outputs: [
      { id: "day1_dosage_mg", label: "Day 1 Loading Dose (mg)", formula: "weight * 0.091", unit: "mg" },
      { id: "day1_dosage_ml", label: "Day 1 Loading Volume (mL)", formula: "(weight * 0.091) / concentration", unit: "mL" },
      { id: "maintenance_dosage_mg", label: "Daily Maintenance Dose (mg)", formula: "weight * 0.0455", unit: "mg" },
      { id: "maintenance_dosage_ml", label: "Daily Maintenance Volume (mL)", formula: "(weight * 0.0455) / concentration", unit: "mL" }
    ],
    theory: "Metacam (meloxicam) is a non-steroidal anti-inflammatory drug (NSAID) prescribed to manage arthritis and surgical pain. It typically starts with a double-strength loading dose (0.2 mg/kg or ~0.09 mg/lb) on the first day, followed by daily maintenance (0.1 mg/kg or ~0.045 mg/lb). Use with caution and always follow veterinary directives.",
    seoMeta: {
      title: "Metacam Dosage Calculator for Dogs | Oral Meloxicam",
      description: "Calculate daily loading and maintenance dosages of Metacam for dogs.",
      keywords: "metacam for dogs, meloxicam dosage dog, canine NSAID dose"
    }
  },
  {
    id: "dog-onion-toxicity-calculator",
    name: "Dog Onion Toxicity Calculator",
    description: "Assess toxic levels and hemolytic anemia hazards of onion or garlic ingestion.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Toxic Threshold (g)} = \\text{Weight (lbs)} \\times 2.27",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 30, unit: "lbs" },
      { id: "onion_grams", label: "Onion/Garlic Consumed", type: "number", defaultValue: 50, unit: "grams" }
    ],
    outputs: [
      { id: "toxic_threshold_grams", label: "Clinical Toxic Threshold", formula: "weight_lbs * 2.27", unit: "grams" },
      { id: "percentage_threshold", label: "Ingestion Hazard Ratio", formula: "(onion_grams / (weight_lbs * 2.27)) * 100", unit: "%" }
    ],
    theory: "Alliums (onions, garlic, chives, leeks) contain thiosulfates, which cause damage to red blood cells resulting in hemolytic anemia. Clinical toxicity usually begins when a dog consumes over 0.5% of its body weight in onions (5g per kg of weight, or ~2.27g per pound).",
    seoMeta: {
      title: "Dog Onion & Garlic Toxicity Calculator",
      description: "Check if the amount of onion or garlic eaten by your dog exceeds the clinical toxic threshold.",
      keywords: "dog onion toxicity, garlic poisoning dog, allium threshold"
    }
  },
  {
    id: "dog-quality-of-life-calculator",
    name: "Dog Quality of Life Calculator",
    description: "Evaluate your senior or chronically ill dog's quality of life using the H5M2 scale.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Total Score} = \\sum \\text{H5M2 Metrics}",
    inputs: [
      { id: "hurt", label: "Hurt (0: severe chronic pain, 10: pain-free/managed)", type: "number", defaultValue: 8 },
      { id: "hunger", label: "Hunger (0: will not eat, 10: excellent appetite)", type: "number", defaultValue: 8 },
      { id: "hydration", label: "Hydration (0: severe dehydration/will not drink, 10: hydrated)", type: "number", defaultValue: 8 },
      { id: "hygiene", label: "Hygiene (0: soiled/pressure sores, 10: clean/groomed)", type: "number", defaultValue: 8 },
      { id: "happiness", label: "Happiness (0: depressed/withdrawn, 10: joyful/responsive)", type: "number", defaultValue: 7 },
      { id: "mobility", label: "Mobility (0: unable to stand/walk, 10: fully mobile)", type: "number", defaultValue: 6 },
      { id: "more_good", label: "More Good Days than Bad (0: none, 10: everyday is good)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "score", label: "Quality of Life Score", formula: "hurt + hunger + hydration + hygiene + happiness + mobility + more_good", unit: "/70" }
    ],
    theory: "Developed by veterinary oncologist Dr. Alice Villalobos, the H5M2 scale covers: Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, and More Good days than bad. Scores above 35 indicate a viable, humane quality of life for chronically ill pets.",
    seoMeta: {
      title: "Dog Quality of Life Calculator | H5M2 Scale",
      description: "Evaluate your pet's comfort and well-being objectively using the veterinary H5M2 scale.",
      keywords: "dog quality of life, H5M2 scale, senior dog assessment"
    }
  },
  {
    id: "dog-raisin-toxicity-calculator",
    name: "Dog Raisin Toxicity Calculator",
    description: "Determine the hazard level of grape or raisin ingestion in dogs.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Raisin Threshold} = \\text{Weight (lbs)} \\times 0.02",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 30, unit: "lbs" },
      { id: "grapes_oz", label: "Grapes Ingested", type: "number", defaultValue: 0.5, unit: "oz" },
      { id: "raisins_oz", label: "Raisins Ingested", type: "number", defaultValue: 0.1, unit: "oz" }
    ],
    outputs: [
      { id: "grape_toxic_threshold", label: "Grape Toxic Threshold Limit", formula: "weight_lbs * 0.1", unit: "oz" },
      { id: "raisin_toxic_threshold", label: "Raisin Toxic Threshold Limit", formula: "weight_lbs * 0.02", unit: "oz" },
      { id: "grape_risk_pct", label: "Grape Poisoning Risk", formula: "(grapes_oz / (weight_lbs * 0.1)) * 100", unit: "%" },
      { id: "raisin_risk_pct", label: "Raisin Poisoning Risk", formula: "(raisins_oz / (weight_lbs * 0.02)) * 100", unit: "%" }
    ],
    theory: "Grapes and raisins can cause sudden, acute renal failure in dogs. Because individual canine sensitivity varies extensively, the lowest reported toxic doses are approximately 0.1 oz of fresh grapes per pound of body weight and 0.02 oz of dried raisins per pound. Any exposure is clinically significant.",
    seoMeta: {
      title: "Dog Grape & Raisin Toxicity Calculator",
      description: "Assess dangerous dose thresholds if your dog has eaten fresh grapes or dried raisins.",
      keywords: "grape toxicity dog, raisins toxic dog, grape renal failure"
    }
  },
  {
    id: "dog-size-calculator",
    name: "Dog Size Calculator",
    description: "Estimate your puppy's adult weight based on current growth velocity.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Adult Weight} = \\frac{\\text{Weight}}{\\text{Age in Weeks}} \\times 52",
    inputs: [
      { id: "puppy_weight_lbs", label: "Puppy's Current Weight", type: "number", defaultValue: 15, unit: "lbs" },
      { id: "puppy_age_weeks", label: "Puppy's Current Age", type: "number", defaultValue: 16, unit: "weeks" }
    ],
    outputs: [
      { id: "adult_weight_est", label: "Estimated Adult Weight", formula: "(puppy_weight_lbs / puppy_age_weeks) * 52", unit: "lbs" }
    ],
    theory: "Standard puppies grow rapidly during the first 16 to 26 weeks. Medium and large breeds reach their adult skeletal mass at roughly one year (52 weeks), making linear weight-per-age scaling a convenient early estimate.",
    seoMeta: {
      title: "Dog Size Calculator | Puppy Weight Predictor",
      description: "Estimate how big your puppy will get at full maturity based on current weeks and weight.",
      keywords: "puppy weight calculator, adult dog size, dog size calculator"
    }
  },
  {
    id: "dog-water-intake-calculator",
    name: "Dog Water Intake Calculator",
    description: "Calculate standard daily hydration requirements for a healthy dog.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Water Intake} = \\text{Weight (lbs)} \\times 1.0",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 40, unit: "lbs" }
    ],
    outputs: [
      { id: "water_oz", label: "Recommended Water Volume", formula: "weight_lbs * 1.0", unit: "fl oz" },
      { id: "water_ml", label: "Recommended Water Volume (Metric)", formula: "weight_lbs * 29.57", unit: "mL" }
    ],
    theory: "Healthy dogs need about 1 fluid ounce of fresh drinking water per pound of body weight daily (approx 50-60 mL/kg) to sustain cardiovascular balance, urinary filtration, and normal metabolic processes.",
    seoMeta: {
      title: "Dog Water Intake Calculator | Daily Hydration Guide",
      description: "Determine how much water your dog needs to drink daily based on body weight.",
      keywords: "dog water calculator, canine hydration, dog drinking water"
    }
  },
  {
    id: "omega-3-for-dogs-calculator",
    name: "Omega-3 For Dogs Calculator",
    description: "Calculate standard daily therapeutic EPA/DHA Omega-3 dosage targets.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Omega-3} = \\text{Weight (lbs)} \\times \\text{Intensity}",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 40, unit: "lbs" },
      { id: "dosage_intensity", label: "Dosage Strength", type: "select", defaultValue: 50, options: [
        { label: "Maintenance / General Health (50 mg/lb)", value: 50 },
        { label: "Therapeutic / Skin & Joint Inflammation (100 mg/lb)", value: 100 },
        { label: "Maximum Clinical Dose (150 mg/lb)", value: 150 }
      ]}
    ],
    outputs: [
      { id: "omega3_mg", label: "Total EPA and DHA Target", formula: "weight_lbs * dosage_intensity", unit: "mg" }
    ],
    theory: "Omega-3 fatty acids (specifically EPA and DHA from marine oils) support joint cartilage, heart, and skin health. Standard daily maintenance starts around 50 mg/lb of body mass.",
    seoMeta: {
      title: "Omega-3 Dosage Calculator for Dogs",
      description: "Find the recommended daily EPA & DHA Omega-3 fatty acid dosage for your dog.",
      keywords: "omega 3 for dogs, fish oil dog dose, EPA DHA canine"
    }
  },
  {
    id: "quiz-dog-size-calculator",
    name: "Quiz: Dog Size Calculator",
    description: "A developmental checkpoint estimator for puppy size projection.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Estimated Size} = \\text{Current Weight} \\times \\left(\\frac{12}{\\text{Age in Months}}\\right)",
    inputs: [
      { id: "current_weight", label: "Current Weight", type: "number", defaultValue: 20, unit: "lbs" },
      { id: "age_months", label: "Current Age", type: "number", defaultValue: 6, unit: "months" }
    ],
    outputs: [
      { id: "estimated_adult_weight", label: "Estimated Adult Weight", formula: "current_weight * (12 / age_months)", unit: "lbs" }
    ],
    theory: "Most dogs reach approximately 50% of their adult body weight by 6 months of age, with giant breeds continuing to fill out until 18-24 months.",
    seoMeta: {
      title: "Puppy Size Calculator Quiz | Growth Milestones",
      description: "Quick developmental weight projection using current monthly growth status.",
      keywords: "puppy weight quiz, dog size quiz, final dog weight"
    }
  },
  {
    id: "raw-dog-food-calculator",
    name: "Raw Dog Food Calculator",
    description: "Calculate specific muscle, bone, and organ masses for a canine raw diet (80:10:10 or BARF model).",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Total Feed} = \\text{Weight} \\times \\text{Ratio}",
    inputs: [
      { id: "weight_lbs", label: "Dog's Weight", type: "number", defaultValue: 50, unit: "lbs" },
      { id: "activity_level_pct", label: "Daily Feed Ratio", type: "select", defaultValue: 2.5, options: [
        { label: "Weight Loss / Sedentary (2.0% of body weight)", value: 2.0 },
        { label: "Normal Active Adult (2.5% of body weight)", value: 2.5 },
        { label: "Highly Active / Working Dog (3.0% of body weight)", value: 3.0 },
        { label: "Puppy / High Metabolism (5.0% of body weight)", value: 5.0 }
      ]}
    ],
    outputs: [
      { id: "total_daily_lbs", label: "Total Daily Raw Food", formula: "weight_lbs * (activity_level_pct / 100)", unit: "lbs" },
      { id: "muscle_meat_lbs", label: "Muscle Meat (70%)", formula: "weight_lbs * (activity_level_pct / 100) * 0.70", unit: "lbs" },
      { id: "bone_lbs", label: "Raw Meaty Bone (10%)", formula: "weight_lbs * (activity_level_pct / 100) * 0.10", unit: "lbs" },
      { id: "organ_lbs", label: "Secreting Organs & Liver (10%)", formula: "weight_lbs * (activity_level_pct / 100) * 0.10", unit: "lbs" },
      { id: "veggies_lbs", label: "Vegetables / Fiber (10%)", formula: "weight_lbs * (activity_level_pct / 100) * 0.10", unit: "lbs" }
    ],
    theory: "Raw biological diets aim to mirror ancestral feeding ratios. The classic BARF (Biologically Appropriate Raw Food) formulation targets 70% muscle meat, 10% raw bone, 10% mixed organs, and 10% functional fiber and plant nutrients.",
    seoMeta: {
      title: "Raw Dog Food Calculator | BARF & PMR Ratios",
      description: "Calculate daily raw food portions including bone, organ, and muscle meat targets.",
      keywords: "raw dog food, barf diet calculator, prey model raw"
    }
  },
  {
    id: "tramadol-for-dogs-calculator",
    name: "Tramadol For Dogs Calculator",
    description: "Determine appropriate clinical Tramadol dosing targets for canine pain control.",
    category: "biology",
    subcategory: "dog",
    scientificFormula: "\\text{Dosage (mg)} = \\text{Weight (lbs)} \\times \\text{Dose Rate}",
    inputs: [
      { id: "weight", label: "Dog's Weight", type: "number", defaultValue: 45, unit: "lbs" },
      { id: "dose_rate", label: "Clinical Dose Rate", type: "number", defaultValue: 1.0, unit: "mg/lb", helpText: "Typical range is 0.5 to 2.0 mg per pound." }
    ],
    outputs: [
      { id: "dosage_mg", label: "Calculated Tramadol Dose", formula: "weight * dose_rate", unit: "mg" }
    ],
    theory: "Tramadol is a synthetic opioid analgesic used as part of multi-modal pain therapies for arthritis, surgical recovery, or chronic orthopedic discomfort. Feline and canine receptors process it differently; always require explicit veterinary clearance.",
    seoMeta: {
      title: "Tramadol Dosage Calculator for Dogs",
      description: "Determine standard veterinary Tramadol pain medication dosages based on body weight.",
      keywords: "tramadol for dogs, dog tramadol dosage, canine opioid dose"
    }
  },

  // CAT CALCULATORS
  {
    id: "cat-age-calculator",
    name: "Cat Age Calculator",
    description: "Convert your cat's chronological age into equivalent human years.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Human Years} = \\text{Ternary Feline Age Scaling}",
    inputs: [
      { id: "cat_age", label: "Cat's Age", type: "number", defaultValue: 3, unit: "years" }
    ],
    outputs: [
      { id: "human_years", label: "Equivalent Human Years", formula: "cat_age <= 1 ? cat_age * 15 : (cat_age <= 2 ? 24 : 24 + (cat_age - 2) * 4)", unit: "years" }
    ],
    theory: "Felines develop exceptionally fast in early life. A one-year-old cat is roughly equivalent to a 15-year-old adolescent, and a two-year-old matches a 24-year-old young adult. Subsequent aging is stable, scaling by approximately 4 human years per calendar year.",
    seoMeta: {
      title: "Cat Age Calculator | Cat Years to Human Years",
      description: "Determine your cat's age in human years using scientific veterinary age scaling.",
      keywords: "cat age calculator, cat years, feline age conversion"
    }
  },
  {
    id: "cat-benadryl-dosage-calculator",
    name: "Cat Benadryl Dosage Calculator",
    description: "Determine safe antihistamine (diphenhydramine) doses for cats.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Dosage (mg)} = \\text{Weight (lbs)} \\times 0.5",
    inputs: [
      { id: "weight", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" }
    ],
    outputs: [
      { id: "dosage_mg", label: "Safe Dose Limit", formula: "weight * 0.5", unit: "mg" }
    ],
    theory: "Diphenhydramine (Benadryl) can treat acute feline allergies or bug bites. The standard safe dose is 0.5 mg per pound of body mass (1 mg/kg) administered every 8 to 12 hours. Always confirm with your vet to avoid sedation toxicity.",
    seoMeta: {
      title: "Cat Benadryl Dosage Calculator | Safe Feline Dose",
      description: "Determine safe, weight-based Benadryl doses for your cat to manage allergy symptoms.",
      keywords: "benadryl for cats, cat benadryl dose, diphenhydramine feline"
    }
  },
  {
    id: "cat-bmi-calculator",
    name: "Cat BMI Calculator",
    description: "Determine Feline Body Mass Index (FBMI) using physical measurements.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{FBMI} = \\frac{\\text{Rib Cage}}{0.7062} - \\text{Leg Length}",
    inputs: [
      { id: "rib_cage", label: "Rib Cage Circumference", type: "number", defaultValue: 35, unit: "cm" },
      { id: "lower_leg", label: "Lower Leg Length (LIM)", type: "number", defaultValue: 12, unit: "cm" }
    ],
    outputs: [
      { id: "fbmi", label: "Feline Body Mass Index", formula: "(rib_cage / 0.7062) - lower_leg", unit: "%" }
    ],
    theory: "The Feline Body Mass Index (FBMI) uses rib cage circumference and lower hind leg length (LIM) to estimate body fat percentage. Values between 15% and 29% suggest ideal conditioning, while over 30% indicates overweight status.",
    seoMeta: {
      title: "Cat BMI Calculator | Feline Body Mass Index",
      description: "Calculate your cat's body fat percentage using standard rib cage and leg metrics.",
      keywords: "cat bmi, fbmi calculator, feline body condition"
    }
  },
  {
    id: "cat-calorie-calculator",
    name: "Cat Calorie Calculator",
    description: "Determine daily energy needs for weight maintenance, loss, or active life stages.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{DER} = 70 \\times \\text{Weight (kg)}^{0.75} \\times \\text{Multiplier}",
    inputs: [
      { id: "weight_lbs", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" },
      { id: "multiplier", label: "Energy Factor / Life Stage", type: "select", defaultValue: 1.2, options: [
        { label: "Weight Loss Target (0.8)", value: 0.8 },
        { label: "Sedentary / Indoor Adult (1.0)", value: 1.0 },
        { label: "Normal Neutered Adult (1.2)", value: 1.2 },
        { label: "Normal Intact Adult (1.4)", value: 1.4 },
        { label: "Kitten / Growing (2.5)", value: 2.5 }
      ]}
    ],
    outputs: [
      { id: "rer", label: "Resting Metabolic Rate (RER)", formula: "70 * ((weight_lbs * 0.453592)^0.75)", unit: "kcal/day" },
      { id: "der", label: "Daily Energy Target (DER)", formula: "70 * ((weight_lbs * 0.453592)^0.75) * multiplier", unit: "kcal/day" }
    ],
    theory: "Feline energy needs are highly sensitive to thyroid levels and physical activity. Indoor domestic environments often cause excessive calorie storage, so adjusting feeding sizes by specific metabolic targets is key.",
    seoMeta: {
      title: "Cat Calorie Calculator | Daily Energy Needs",
      description: "Calculate your cat's resting and daily calorie requirements to maintain ideal weight.",
      keywords: "cat calorie calculator, cat calories, rer cat, feline food"
    }
  },
  {
    id: "cat-chocolate-toxicity-calculator",
    name: "Cat Chocolate Toxicity Calculator",
    description: "Assess clinical risks of accidental chocolate consumption in felines.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Dose} = \\frac{\\text{Amount} \\times \\text{Conc}}{\\text{Weight (kg)}}",
    inputs: [
      { id: "weight_lbs", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" },
      { id: "amount_oz", label: "Chocolate Weight Consumed", type: "number", defaultValue: 0.5, unit: "oz" },
      { id: "chocolate_type_mg_oz", label: "Type of Chocolate", type: "select", defaultValue: 58, options: [
        { label: "White Chocolate (0.25 mg/oz)", value: 0.25 },
        { label: "Milk Chocolate (58 mg/oz)", value: 58 },
        { label: "Dark Chocolate (130 mg/oz)", value: 130 },
        { label: "Baker's Chocolate (450 mg/oz)", value: 450 },
        { label: "Cocoa Powder (800 mg/oz)", value: 800 }
      ]}
    ],
    outputs: [
      { id: "total_ingested_mg", label: "Total Methylxanthines Eaten", formula: "amount_oz * chocolate_type_mg_oz", unit: "mg" },
      { id: "dose_per_kg", label: "Toxicity Level Per Body Mass", formula: "(amount_oz * chocolate_type_mg_oz) / (weight_lbs * 0.453592)", unit: "mg/kg" }
    ],
    theory: "Although cats rarely eat sweet food, chocolate remains highly toxic due to theobromine and caffeine. Feline metabolisms are exceptionally sensitive, making small quantities of dark chocolate hazardous.",
    seoMeta: {
      title: "Cat Chocolate Toxicity Calculator | Toxicity Risk",
      description: "Check critical theobromine toxicity levels if a cat accidentally eats chocolate.",
      keywords: "cat chocolate toxicity, feline chocolate poisoning"
    }
  },
  {
    id: "catculator",
    name: "Catculator",
    description: "A fun scientific estimator for your cat's sleep, mood index, and intelligence quotient.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Mood Index} = \\left(\\frac{\\text{Sleep Hours}}{16}\\right) \\times 100",
    inputs: [
      { id: "age_years", label: "Cat's Age", type: "number", defaultValue: 4, unit: "years" },
      { id: "daily_sleep_hours", label: "Daily Sleep Time", type: "number", defaultValue: 15, unit: "hours" }
    ],
    outputs: [
      { id: "intelligence_score", label: "Estimated Smartness Score", formula: "100 - (age_years * 1.5)", unit: "points" },
      { id: "cat_mood_index", label: "Estimated Satisfaction Index", formula: "(daily_sleep_hours / 16) * 100", unit: "%" }
    ],
    theory: "Felines typically sleep between 12 to 16 hours daily. This calculator provides entertaining assessments of cognitive activity and general physical comfort indexes based on daily rest patterns.",
    seoMeta: {
      title: "Catculator | Feline Fun Stats & Sleep Estimator",
      description: "Calculate your cat's sleep mood indices and relative feline intelligence factors.",
      keywords: "catculator, cat sleep calculator, funny cat calculator"
    }
  },
  {
    id: "cat-quality-of-life-calculator",
    name: "Cat Quality of Life Calculator",
    description: "Evaluate your senior or terminal cat's physical and mental comfort utilizing veterinary benchmarks.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Total H5M2 Score}",
    inputs: [
      { id: "hurt", label: "Hurt / Pain Control (0: severe, 10: comfortable)", type: "number", defaultValue: 8 },
      { id: "hunger", label: "Hunger / Appetite (0: won't eat, 10: eats well)", type: "number", defaultValue: 8 },
      { id: "hydration", label: "Hydration status (0: poor skin tent, 10: hydrated)", type: "number", defaultValue: 8 },
      { id: "hygiene", label: "Hygiene / Grooming (0: unkempt/soiled, 10: cleans self)", type: "number", defaultValue: 8 },
      { id: "happiness", label: "Happiness (0: isolated, 10: purring/cuddling)", type: "number", defaultValue: 7 },
      { id: "mobility", label: "Mobility (0: bedridden, 10: jumps and walks)", type: "number", defaultValue: 6 },
      { id: "more_good", label: "More Good Days than Bad (0: none, 10: all days good)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "score", label: "Total Comfort Score", formula: "hurt + hunger + hydration + hygiene + happiness + mobility + more_good", unit: "/70" }
    ],
    theory: "Dr. Alice Villalobos' H5M2 assessment helps feline caretakers track comfort levels in elderly, chronic kidney disease, or oncologic cat patients, helping make loving, humane clinical decisions.",
    seoMeta: {
      title: "Cat Quality of Life Calculator | Feline Well-Being",
      description: "Assess physical and emotional comfort in senior or chronically ill cats.",
      keywords: "cat quality of life, feline H5M2, senior cat health"
    }
  },
  {
    id: "cephalexin-dosage-calculator-cats",
    name: "Cephalexin For Cats Dosage Calculator",
    description: "Calculate standard weight-based cephalexin antibiotic dosages for felines.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Dosage (mg)} = \\text{Weight (lbs)} \\times 10",
    inputs: [
      { id: "weight", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" }
    ],
    outputs: [
      { id: "dosage_mg", label: "Calculated Cephalexin Dose", formula: "weight * 10", unit: "mg" }
    ],
    theory: "Cephalexin is used in cats to treat bacterial skin, bone, or respiratory infections. The typical safe veterinary target is 10 mg per pound (22 mg/kg) administered every 12 hours.",
    seoMeta: {
      title: "Cephalexin Dosage Calculator for Cats | Feline Antibiotics",
      description: "Determine the correct oral cephalexin antibiotic dosage for your cat based on body weight.",
      keywords: "cephalexin for cats, cat antibiotic dose, feline cephalexin"
    }
  },
  {
    id: "fish-oil-dosage-calculator-for-cats",
    name: "Fish Oil Dosage Calculator For Cats",
    description: "Determine therapeutic EPA/DHA marine oil amounts for cats.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Omega-3 Target (mg)} = \\text{Weight (lbs)} \\times 30",
    inputs: [
      { id: "weight", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" }
    ],
    outputs: [
      { id: "omega3_mg", label: "Recommended EPA + DHA Dose", formula: "weight * 30", unit: "mg" }
    ],
    theory: "Marine fish oil supplies active EPA and DHA fatty acids. In felines, standard joint and coat therapeutic targets are 30 mg of combined active fatty acids per pound of body mass daily.",
    seoMeta: {
      title: "Fish Oil Omega-3 Dosage Calculator for Cats",
      description: "Determine ideal EPA/DHA levels to support your cat's joint health and shiny fur.",
      keywords: "fish oil for cats, feline omega 3 dose, cat skin health"
    }
  },
  {
    id: "how-big-will-my-cat-get-calculator",
    name: "How Big Will My Cat Get Calculator 🐱",
    description: "Estimate your kitten's final adult weight using growth milestones.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Adult Weight} = \\frac{\\text{Weight}}{\\text{Age in Weeks}} \\times 40",
    inputs: [
      { id: "weight_lbs", label: "Kitten's Weight", type: "number", defaultValue: 5, unit: "lbs" },
      { id: "age_weeks", label: "Kitten's Age", type: "number", defaultValue: 20, unit: "weeks" }
    ],
    outputs: [
      { id: "adult_weight_est", label: "Estimated Final Adult Weight", formula: "(weight_lbs / age_weeks) * 40", unit: "lbs" }
    ],
    theory: "Most domestic cats finish rapid structural growth by 9-10 months (40 weeks), making weight tracking in early development a reliable predictor for final adult mass.",
    seoMeta: {
      title: "How Big Will My Cat Get? | Kitten Size Predictor",
      description: "Estimate your kitten's final mature weight based on current weeks and scale weight.",
      keywords: "how big will my cat get, kitten weight calculator, cat growth"
    }
  },
  {
    id: "metacam-dosage-calculator-cats",
    name: "Metacam Dosage Calculator for Cats",
    description: "Calculate meloxicam doses for felines with extreme safety precautions.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Maintenance Dose} = \\text{Weight (lbs)} \\times 0.01",
    inputs: [
      { id: "weight", label: "Cat's Weight", type: "number", defaultValue: 10, unit: "lbs" }
    ],
    outputs: [
      { id: "initial_dosage_mg", label: "One-Time Loading Dose (mg)", formula: "weight * 0.045", unit: "mg" },
      { id: "maintenance_dosage_mg", label: "Est. Maintenance Dose (mg)", formula: "weight * 0.01", unit: "mg" }
    ],
    theory: "Meloxicam (Metacam) is an NSAID used with extreme veterinary caution in cats due to high risk of acute kidney injury. Standard initial dosage is 0.1 mg/kg (~0.045 mg/lb), and any maintenance doses are kept extremely low.",
    seoMeta: {
      title: "Metacam Dosage Calculator for Cats | Meloxicam Safety",
      description: "Determine safe weight-based limits of Metacam for cats under strict veterinary guidance.",
      keywords: "metacam for cats, meloxicam feline, cat nsaid dose"
    }
  },
  {
    id: "quiz-cat-age-calculator",
    name: "Quiz: Cat Age Calculator",
    description: "A quick checkpoint assessment of equivalent feline age parameters.",
    category: "biology",
    subcategory: "cat",
    scientificFormula: "\\text{Human Equivalent} = 24 + (\\text{Cat Age} - 2) \\times 4",
    inputs: [
      { id: "cat_age", label: "Cat's Current Age", type: "number", defaultValue: 5, unit: "years" }
    ],
    outputs: [
      { id: "human_years", label: "Equivalent Human Lifespan", formula: "24 + (cat_age - 2) * 4", unit: "years" }
    ],
    theory: "For adult cats over two years old, each additional calendar year adds approximately 4 years of metabolic aging relative to humans.",
    seoMeta: {
      title: "Cat Age Quiz | Feline Biological Lifespan",
      description: "Determine how old your mature cat is in human terms based on calendar milestones.",
      keywords: "cat age quiz, cat human years, feline development"
    }
  },

  // OTHER ANIMALS
  {
    id: "bird-age-calculator",
    name: "Bird Age Calculator",
    description: "Estimate a pet bird's relative age in human years based on its species lifespan.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Human Years} = \\frac{\\text{Bird Age}}{\\text{Max Lifespan}} \\times 80",
    inputs: [
      { id: "bird_age", label: "Bird's Chronological Age", type: "number", defaultValue: 5, unit: "years" },
      { id: "max_lifespan", label: "Max Species Lifespan", type: "select", defaultValue: 15, options: [
        { label: "Budgerigar / Parakeet (15 years)", value: 15 },
        { label: "Cockatiel (20 years)", value: 20 },
        { label: "Lovebird (12 years)", value: 12 },
        { label: "Canary (10 years)", value: 10 },
        { label: "African Grey Parrot (50 years)", value: 50 },
        { label: "Macaw (60 years)", value: 60 }
      ]}
    ],
    outputs: [
      { id: "human_equivalent_age", label: "Equivalent Human Age", formula: "(bird_age / max_lifespan) * 80", unit: "years" }
    ],
    theory: "Avian lifespans differ significantly by size and metabolic rates. Converting bird years to human years involves normalizing their current age against standard species survival expectations.",
    seoMeta: {
      title: "Bird Age Calculator | Parakeet & Parrot Years",
      description: "Convert your pet bird's age to human years using species-specific lifespans.",
      keywords: "bird age calculator, parrot age, parakeet human years"
    }
  },
  {
    id: "crickets-chirping-thermometer",
    name: "Crickets Chirping Thermometer",
    description: "Calculate ambient temperature using the frequency of cricket chirps (Dolbear's Law).",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "T_{\\text{F}} = N_{15} + 40",
    inputs: [
      { id: "chirps_per_15s", label: "Chirps in 15 seconds", type: "number", defaultValue: 25, unit: "chirps" }
    ],
    outputs: [
      { id: "temp_f", label: "Estimated Temperature", formula: "chirps_per_15s + 40", unit: "°F" },
      { id: "temp_c", label: "Estimated Temperature (Metric)", formula: "(chirps_per_15s + 40 - 32) * 5 / 9", unit: "°C" }
    ],
    theory: "Dolbear's Law describes the mathematical relationship between the air temperature and the rate at which crickets chirp. Because ectothermic insects rely on ambient warmth to drive metabolic activity, their muscles contract faster at higher temperatures.",
    seoMeta: {
      title: "Cricket Chirp Thermometer Calculator | Dolbear's Law",
      description: "Estimate ambient temperature by counting cricket chirps using Dolbear's Law.",
      keywords: "crickets chirping thermometer, dolbear's law, insect bio-indicator"
    }
  },
  {
    id: "dry-matter-calculator",
    name: "Dry Matter Calculator",
    description: "Determine nutrient percentages in pet food on an absolute dry basis, excluding moisture.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Dry Matter \\%} = \\frac{\\text{Nutrient \\%}}{100 - \\text{Moisture \\%}} \\times 100",
    inputs: [
      { id: "moisture_pct", label: "Guaranteed Moisture (%)", type: "number", defaultValue: 10, unit: "%" },
      { id: "nutrient_pct", label: "Guaranteed Nutrient (%)", type: "number", defaultValue: 26, unit: "%", helpText: "Protein, fat, or fiber percentage from the label." }
    ],
    outputs: [
      { id: "dry_matter_pct", label: "Dry Matter Nutrient Density", formula: "(nutrient_pct / (100 - moisture_pct)) * 100", unit: "%" }
    ],
    theory: "To accurately compare wet canned foods (which can contain up to 80% water) with dry kibble, you must convert nutrient labels to a Dry Matter basis, removing moisture differences.",
    seoMeta: {
      title: "Dry Matter Calculator | Pet Food Analysis",
      description: "Convert guaranteed analysis percentages of pet food to dry matter values for fair comparison.",
      keywords: "dry matter calculator, pet food moisture, dog food comparison"
    }
  },
  {
    id: "guinea-pig-years-to-human-years",
    name: "Guinea Pig Years to Human Years Calculator",
    description: "Convert a guinea pig's age to equivalent human years.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Human Years} = 18 + (\\text{Pig Age} - 1) \\times 10",
    inputs: [
      { id: "pig_age", label: "Guinea Pig's Age", type: "number", defaultValue: 2, unit: "years" }
    ],
    outputs: [
      { id: "human_years", label: "Equivalent Human Years", formula: "pig_age <= 1 ? pig_age * 18 : 18 + (pig_age - 1) * 10", unit: "years" }
    ],
    theory: "Guinea pigs develop extremely quickly. A 1-year-old guinea pig possesses physical maturity comparable to an 18-year-old human. Each subsequent year of their lifespan (which typically totals 4-8 years) matches about 10 human years.",
    seoMeta: {
      title: "Guinea Pig Years to Human Years Calculator",
      description: "Convert your pet guinea pig's chronological age to equivalent human developmental years.",
      keywords: "guinea pig age, cavy human years, guinea pig years"
    }
  },
  {
    id: "hamster-age-calculator",
    name: "Hamster Age Calculator",
    description: "Convert your hamster's short, rapid lifespan to human years.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Human Years} = \\text{Months} \\times 3.33",
    inputs: [
      { id: "hamster_months", label: "Hamster's Age", type: "number", defaultValue: 12, unit: "months" }
    ],
    outputs: [
      { id: "human_years", label: "Equivalent Human Years", formula: "hamster_months * 3.33", unit: "years" }
    ],
    theory: "Hamsters live short lives, typically 2 to 3 years. A one-month-old hamster is equivalent to an adolescent, and a 12-month-old hamster is equivalent to a 40-year-old adult.",
    seoMeta: {
      title: "Hamster Age Calculator | Hamster Human Years",
      description: "Convert your pet hamster's age in months into equivalent human lifespan terms.",
      keywords: "hamster age calculator, hamster months to human years"
    }
  },
  {
    id: "horse-weight-calculator",
    name: "Horse Weight Calculator",
    description: "Estimate a horse's weight using heart girth and body length.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Weight (lbs)} = \\frac{\\text{Girth}^2 \\times \\text{Length}}{330}",
    inputs: [
      { id: "heart_girth", label: "Heart Girth (circumference behind elbows)", type: "number", defaultValue: 70, unit: "inches" },
      { id: "body_length", label: "Body Length (shoulder point to buttocks)", type: "number", defaultValue: 65, unit: "inches" }
    ],
    outputs: [
      { id: "weight_lbs", label: "Estimated Weight", formula: "(heart_girth^2 * body_length) / 330", unit: "lbs" }
    ],
    theory: "Estimating equine mass is critical for calculating clinical drug dosages and nutritional rations. The classic veterinary girth-length formula provides highly reliable estimates when scales are unavailable.",
    seoMeta: {
      title: "Horse Weight Calculator | Equine Mass Estimator",
      description: "Estimate your horse's weight in pounds using heart girth and body length measurements.",
      keywords: "horse weight calculator, equine mass formula, girth length horse"
    }
  },
  {
    id: "rabbit-cage-size-calculator",
    name: "Rabbit Cage Size Calculator",
    description: "Determine the minimum recommended dimensions for a rabbit enclosure.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Length} = 4 \\times \\text{Rabbit Length}",
    inputs: [
      { id: "rabbit_length", label: "Rabbit's Length (stretched out)", type: "number", defaultValue: 16, unit: "inches" },
      { id: "rabbit_height", label: "Rabbit's Height (standing on hind legs)", type: "number", defaultValue: 24, unit: "inches" }
    ],
    outputs: [
      { id: "cage_length", label: "Min Cage Length", formula: "4 * rabbit_length", unit: "inches" },
      { id: "cage_width", label: "Min Cage Width", formula: "2 * rabbit_length", unit: "inches" },
      { id: "cage_height", label: "Min Cage Height", formula: "rabbit_height", unit: "inches" }
    ],
    theory: "Enclosures must let rabbits hop at least 3-4 times consecutively, stretch out fully, and stand tall on their hind legs without hitting their ears on the top.",
    seoMeta: {
      title: "Rabbit Cage Size Calculator | Cage Requirements",
      description: "Calculate the minimum safe cage length, width, and height for your pet rabbit.",
      keywords: "rabbit cage size, bunny enclosure size, rabbit hutch"
    }
  },
  {
    id: "rabbit-color-calculator",
    name: "Rabbit Color Calculator",
    description: "Predict the probability of agouti versus solid coloration in offspring based on parents' genotype.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Phenotypic Ratio Probability}",
    inputs: [
      { id: "parent1_agouti", label: "Parent 1 Genotype", type: "select", defaultValue: 2, options: [
        { label: "Homozygous Dominant (AA - Agouti)", value: 1 },
        { label: "Heterozygous (Aa - Agouti/carrier)", value: 2 },
        { label: "Homozygous Recessive (aa - Solid/Black)", value: 3 }
      ]},
      { id: "parent2_agouti", label: "Parent 2 Genotype", type: "select", defaultValue: 2, options: [
        { label: "Homozygous Dominant (AA - Agouti)", value: 1 },
        { label: "Heterozygous (Aa - Agouti/carrier)", value: 2 },
        { label: "Homozygous Recessive (aa - Solid/Black)", value: 3 }
      ]}
    ],
    outputs: [
      { id: "agouti_pct", label: "Probability of Agouti Offspring", formula: "parent1_agouti == 1 || parent2_agouti == 1 ? 100 : (parent1_agouti == 2 && parent2_agouti == 2 ? 75 : (parent1_agouti == 3 && parent2_agouti == 3 ? 0 : 50))", unit: "%" }
    ],
    theory: "Agouti coloration (banded hair shafts) is governed by the dominant 'A' gene. Non-agouti solid coloration is recessive ('a'). Crossing two heterozygous carriers (Aa x Aa) yields a classic 3:1 (75%) Agouti phenotype ratio.",
    seoMeta: {
      title: "Rabbit Color Genetics Calculator | Agouti Gene",
      description: "Calculate agouti offspring probabilities using basic rabbit genetic crosses.",
      keywords: "rabbit color calculator, agouti rabbit genetics, bunny coat color"
    }
  },
  {
    id: "rat-cage-calculator",
    name: "Rat Cage Calculator",
    description: "Determine the maximum capacity of a pet rat cage based on its volume.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Rats Capacity} = \\text{floor}\\left(\\frac{\\text{Volume (cu ft)}}{2}\\right)",
    inputs: [
      { id: "length", label: "Cage Length", type: "number", defaultValue: 30, unit: "inches" },
      { id: "width", label: "Cage Width", type: "number", defaultValue: 18, unit: "inches" },
      { id: "height", label: "Cage Height", type: "number", defaultValue: 24, unit: "inches" }
    ],
    outputs: [
      { id: "cage_volume_cuft", label: "Total Cage Volume", formula: "(length * width * height) / 1728", unit: "cu ft" },
      { id: "max_rats", label: "Maximum Safe Capacity", formula: "floor(((length * width * height) / 1728) / 2)", unit: "rats" }
    ],
    theory: "Domestic pet rats need adequate space to climb and forage. Standard animal welfare guidelines recommend a minimum of 2 cubic feet of cage volume per rat, assuming multi-level platforms are used.",
    seoMeta: {
      title: "Rat Cage Calculator | Safe Capacity Finder",
      description: "Calculate cage volume in cubic feet to find the safe maximum capacity for pet rats.",
      keywords: "rat cage calculator, pet rat space, rat cage dimensions"
    }
  },
  {
    id: "turtle-tank-size-calculator",
    name: "Turtle Tank Size Calculator",
    description: "Determine the minimum recommended tank size based on your turtle's shell length.",
    category: "biology",
    subcategory: "other-animals",
    scientificFormula: "\\text{Tank Volume (gal)} = \\text{Shell Length (inches)} \\times 10",
    inputs: [
      { id: "shell_length", label: "Turtle's Shell Length", type: "number", defaultValue: 6, unit: "inches" }
    ],
    outputs: [
      { id: "tank_gallons", label: "Minimum Tank Volume", formula: "shell_length * 10", unit: "gallons" }
    ],
    theory: "A standard rule of thumb for semi-aquatic pet turtles (such as Red-Eared Sliders) is a minimum of 10 gallons of water volume per inch of carapace (shell) length to provide adequate swimming space and maintain clean water conditions.",
    seoMeta: {
      title: "Turtle Tank Size Calculator | Aquarium Guide",
      description: "Calculate the minimum aquarium volume in gallons needed for a semi-aquatic turtle.",
      keywords: "turtle tank size, turtle aquarium, red eared slider tank"
    }
  }
];
