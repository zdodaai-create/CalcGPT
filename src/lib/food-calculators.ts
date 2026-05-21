import { CalculatorConfig } from "./calculator-types";

export const FOOD_CALCULATORS: CalculatorConfig[] = [
  // 🥄 COOKING CONVERTERS
  {
    id: "butter-calculator",
    name: "Butter Calculator",
    description: "Convert butter measurements between sticks, grams, cups, and ounces.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Weight = Sticks \\times 113.4",
    inputs: [
      { id: "amount", label: "Amount", type: "number", defaultValue: 1 },
      { id: "unit", label: "From Unit", type: "select", options: [
        { label: "Sticks", value: "stick" },
        { label: "Grams", value: "gram" },
        { label: "Tablespoons", value: "tbsp" },
        { label: "Teaspoons", value: "tsp" },
        { label: "Cups", value: "cup" },
        { label: "Pounds", value: "pound" }
      ], defaultValue: "stick" }
    ],
    outputs: [
      { id: "res_gram", label: "Grams", formula: "0", unit: "g" },
      { id: "res_tbsp", label: "Tablespoons", formula: "0", unit: "tbsp" },
      { id: "res_tsp", label: "Teaspoons", formula: "0", unit: "tsp" },
      { id: "res_cup", label: "Cups", formula: "0", unit: "cups" },
      { id: "res_pound", label: "Pounds", formula: "0", unit: "lbs" }
    ],
    theory: "In the United States, butter is commonly sold in sticks. One stick of butter weighs 1/4 pound, or approximately 113.4 grams. It is also equivalent to 1/2 cup or 8 tablespoons.",
    resultInterpretation: "Standardizing butter measurements is crucial for baking, where precise fat ratios affect the texture and rise of baked goods.",
    seoMeta: { title: "Butter Calculator | Convert Sticks to Grams & Cups", description: "Quickly convert butter measurements between sticks, grams, cups, and ounces for accurate baking.", keywords: "butter converter, butter sticks to grams, baking measurements" }
  },
  {
    id: "cake-pan-converter",
    name: "Cake Pan Converter",
    description: "Scale cake recipes for different pan sizes and shapes.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Scale\\ Factor = \\frac{Area_{new}}{Area_{original}}",
    inputs: [
      { id: "orig_shape", label: "Original Pan Shape", type: "select", options: [{ label: "Round", value: "round" }, { label: "Square", value: "square" }], defaultValue: "round" },
      { id: "orig_size", label: "Original Size (inches)", type: "number", defaultValue: 8 },
      { id: "new_shape", label: "New Pan Shape", type: "select", options: [{ label: "Round", value: "round" }, { label: "Square", value: "square" }], defaultValue: "round" },
      { id: "new_size", label: "New Size (inches)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "factor", label: "Ingredient Scaling Factor", formula: "((new_shape == 'round' ? 3.14159 * (new_size/2)^2 : new_size^2) / (orig_shape == 'round' ? 3.14159 * (orig_size/2)^2 : orig_size^2))", unit: "x" }
    ],
    theory: "The volume of a cake pan determines how much batter it can hold. Assuming the depth is the same, the ratio of the areas of the pans gives the factor by which you need to multiply the ingredients.",
    resultInterpretation: "Multiply all your ingredients by {factor} to adapt the recipe for the new pan size.",
    seoMeta: { title: "Cake Pan Converter | Scale Recipes for Different Pans", description: "Convert cake recipes from one pan size to another using area calculations.", keywords: "cake pan converter, recipe scaler, baking pan size conversion" }
  },
  {
    id: "cooking-measurement-converter",
    name: "Cooking Measurement Converter",
    description: "Convert between various volume and weight measurements used in cooking.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "V_2 = V_1 \\times Factor",
    inputs: [
      { id: "val", label: "Value", type: "number", defaultValue: 1 },
      { id: "from_unit", label: "From", type: "select", options: [
        { label: "Cups", value: "cups" },
        { label: "Milliliters (ml)", value: "ml" },
        { label: "Tablespoons (tbsp)", value: "tbsp" },
        { label: "Teaspoons (tsp)", value: "tsp" },
        { label: "Fluid Ounces (fl oz)", value: "oz" }
      ], defaultValue: "cups" }
    ],
    outputs: [
      { id: "to_ml", label: "Milliliters", formula: "from_unit == 'cups' ? val * 236.588 : (from_unit == 'ml' ? val : (from_unit == 'tbsp' ? val * 14.787 : (from_unit == 'tsp' ? val * 4.929 : val * 29.574)))", unit: "ml" },
      { id: "to_cups", label: "Cups", formula: "from_unit == 'cups' ? val : (from_unit == 'ml' ? val / 236.588 : (from_unit == 'tbsp' ? val / 16 : (from_unit == 'tsp' ? val / 48 : val / 8)))", unit: "cups" }
    ],
    theory: "Cooking measurements vary by region. US cups are approx 236.6 ml, while metric cups are 250 ml. This calculator uses standard US measurements.",
    seoMeta: { title: "Cooking Measurement Converter | Cups, ML, TSP, TBSP", description: "Convert between common kitchen measurements like cups, milliliters, tablespoons, and teaspoons.", keywords: "cooking converter, cups to ml, tbsp to tsp" }
  },
  {
    id: "cups-to-pounds-converter",
    name: "Cups to Pounds Converter",
    description: "Convert volume in cups to weight in pounds based on ingredient density.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Weight = Volume \\times Density",
    inputs: [
      { id: "cups", label: "Cups", type: "number", defaultValue: 1 },
      { id: "density", label: "Ingredient Type", type: "select", options: [
        { label: "Flour (All-Purpose)", value: "0.27" },
        { label: "Sugar (Granulated)", value: "0.44" },
        { label: "Butter", value: "0.5" },
        { label: "Water / Milk", value: "0.52" }
      ], defaultValue: "0.27" }
    ],
    outputs: [
      { id: "pounds", label: "Pounds", formula: "cups * density", unit: "lbs" }
    ],
    theory: "Since cups measure volume and pounds measure weight, the conversion depends on the density of the ingredient. A cup of lead weighs much more than a cup of feathers.",
    seoMeta: { title: "Cups to Pounds Converter | Ingredient Weight Calculator", description: "Convert cups to pounds for various ingredients based on their specific density.", keywords: "cups to pounds, convert volume to weight, baking converter" }
  },
  {
    id: "grams-to-cups-converter",
    name: "Grams to Cups Converter",
    description: "Convert weight in grams to volume in cups based on ingredient density.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Cups = \\frac{Grams}{Density \\times 236.588}",
    inputs: [
      { id: "grams", label: "Grams", type: "number", defaultValue: 100 },
      { id: "density", label: "Ingredient Type", type: "select", options: [
        { label: "Flour (All-Purpose) [0.53 g/ml]", value: "0.53" },
        { label: "Sugar (Granulated) [0.85 g/ml]", value: "0.85" },
        { label: "Butter [0.96 g/ml]", value: "0.96" },
        { label: "Water [1.0 g/ml]", value: "1.0" }
      ], defaultValue: "0.53" }
    ],
    outputs: [
      { id: "cups", label: "Cups", formula: "grams / (density * 236.588)", unit: "cups" }
    ],
    theory: "To convert grams to cups, we divide the mass (grams) by the density of the ingredient and the volume of a cup (approx 236.6 ml).",
    seoMeta: { title: "Grams to Cups Converter | Baking Weight Conversion", description: "Convert grams to cups for common baking ingredients accurately.", keywords: "grams to cups, baking conversion, grams to volume" }
  },
  {
    id: "yeast-converter",
    name: "Yeast Converter",
    description: "Convert between fresh, active dry, and instant yeast.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Fresh = 3 \\times Instant = 1.5 \\times Active\\ Dry",
    inputs: [
      { id: "amount", label: "Amount", type: "number", defaultValue: 1 },
      { id: "type", label: "Yeast Type", type: "select", options: [
        { label: "Fresh", value: "fresh" },
        { label: "Active Dry", value: "active" },
        { label: "Instant", value: "instant" }
      ], defaultValue: "instant" }
    ],
    outputs: [
      { id: "res_fresh", label: "Fresh Yeast", formula: "type == 'fresh' ? amount : (type == 'active' ? amount * 2 : amount * 3)", unit: "g" },
      { id: "res_active", label: "Active Dry Yeast", formula: "type == 'fresh' ? amount / 2 : (type == 'active' ? amount : amount * 1.5)", unit: "g" },
      { id: "res_instant", label: "Instant Yeast", formula: "type == 'fresh' ? amount / 3 : (type == 'active' ? amount / 1.5 : amount)", unit: "g" }
    ],
    theory: "Yeast products have different concentrations of live yeast cells and moisture. Fresh yeast is the least concentrated, while instant yeast is the most concentrated.",
    resultInterpretation: "Fresh yeast is often preferred for long fermentations, while instant yeast is the most convenient for quick bakes.",
    seoMeta: { title: "Yeast Converter | Fresh, Active Dry, Instant", description: "Convert between different types of yeast for bread baking.", keywords: "yeast converter, fresh yeast to active dry, instant yeast conversion" }
  },

  // ☕ TEA & COFFEE CALCULATORS
  {
    id: "coffee-calculator",
    name: "Coffee Calculator",
    description: "Calculate the exact amount of coffee grounds needed for your water volume.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Coffee = Water \\times Ratio",
    inputs: [
      { id: "water", label: "Water Amount", type: "number", defaultValue: 500, unit: "ml" },
      { id: "ratio", label: "Brew Ratio (1:x)", type: "number", defaultValue: 16, helpText: "Enter the 'x' in 1:x ratio. E.g., 16 for 1:16" }
    ],
    outputs: [
      { id: "grounds", label: "Coffee Grounds Needed", formula: "water / ratio", unit: "g" }
    ],
    theory: "The Golden Ratio for coffee is often considered to be 1:15 to 1:17 (1 gram of coffee for every 15-17 ml of water). This ensures optimal extraction of flavors without over or under-extracting.",
    resultInterpretation: "Use {grounds} grams of coffee grounds for {water} ml of water to achieve your desired ratio.",
    seoMeta: { title: "Coffee Calculator | Brew Ratio & Grounds Estimator", description: "Calculate the amount of coffee grounds needed based on water volume and desired brew ratio.", keywords: "coffee calculator, brew ratio, coffee grounds needed" }
  },
  {
    id: "coffee-footprint-calculator",
    name: "Coffee Footprint Calculator",
    description: "Estimate the carbon footprint of your daily coffee consumption.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "CO_2 = Cups \\times Emission\\ Factor",
    inputs: [
      { id: "cups", label: "Cups per Day", type: "number", defaultValue: 2 },
      { id: "milk", label: "With Milk?", type: "select", options: [{ label: "Yes", value: "0.5" }, { label: "No", value: "0.2" }], defaultValue: "0.5" }
    ],
    outputs: [
      { id: "co2_daily", label: "Daily CO2 Footprint", formula: "cups * milk", unit: "kg" },
      { id: "co2_yearly", label: "Yearly CO2 Footprint", formula: "cups * milk * 365", unit: "kg" }
    ],
    theory: "Coffee production, transportation, and preparation all contribute to its carbon footprint. Adding dairy milk significantly increases the carbon intensity.",
    seoMeta: { title: "Coffee Footprint Calculator | Environmental Impact", description: "Calculate the carbon footprint of your daily coffee habit.", keywords: "coffee carbon footprint, environmental impact of coffee" }
  },
  {
    id: "coffee-kick-calculator",
    name: "Coffee Kick Calculator",
    description: "Calculate total caffeine intake based on coffee type and serving size.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Caffeine = Coffee\\ Amount \\times Caffeine\\ Density",
    inputs: [
      { id: "amount", label: "Serving Size", type: "number", defaultValue: 8, unit: "oz" },
      { id: "type", label: "Coffee Type", type: "select", options: [
        { label: "Brewed (Drip)", value: "12" },
        { label: "Espresso (per shot)", value: "64" },
        { label: "Instant", value: "8" },
        { label: "Cold Brew", value: "15" }
      ], defaultValue: "12" }
    ],
    outputs: [
      { id: "caffeine", label: "Total Caffeine", formula: "amount * type", unit: "mg" }
    ],
    theory: "Caffeine content varies by bean type, roast, and brewing method. Espresso has the highest density, but a typical serving is much smaller than drip coffee.",
    resultInterpretation: "A safe daily caffeine limit for most adults is around 400 mg.",
    seoMeta: { title: "Coffee Kick Calculator | Caffeine Intake Tool", description: "Estimate your caffeine intake from different types of coffee.", keywords: "caffeine calculator, coffee caffeine content, coffee kick" }
  },
  {
    id: "coffee-ratio-calculator",
    name: "Coffee Ratio Calculator",
    description: "Determine the ratio of coffee to water in your brew.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Ratio = \\frac{Water}{Coffee}",
    inputs: [
      { id: "coffee", label: "Coffee Grounds", type: "number", defaultValue: 30, unit: "g" },
      { id: "water", label: "Water Used", type: "number", defaultValue: 500, unit: "ml" }
    ],
    outputs: [
      { id: "ratio", label: "Ratio (1:x)", formula: "water / coffee", unit: "parts water" }
    ],
    theory: "Knowing your brew ratio helps in replicating a good cup of coffee or adjusting it for strength.",
    seoMeta: { title: "Coffee Ratio Calculator | Find Your Brew Strength", description: "Calculate the exact ratio of water to coffee for your brew.", keywords: "coffee ratio, brew strength, coffee water ratio" }
  },
  {
    id: "cold-brew-ratio-calculator",
    name: "Cold Brew Ratio Calculator",
    description: "Calculate ingredients for cold brew concentrate or ready-to-drink coffee.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Water = Coffee \\times Ratio",
    inputs: [
      { id: "coffee", label: "Coffee Grounds", type: "number", defaultValue: 100, unit: "g" },
      { id: "style", label: "Style", type: "select", options: [
        { label: "Concentrate (1:4)", value: "4" },
        { label: "Ready to Drink (1:8)", value: "8" }
      ], defaultValue: "4" }
    ],
    outputs: [
      { id: "water", label: "Water Needed", formula: "coffee * style", unit: "ml" }
    ],
    theory: "Cold brew typically uses a much higher coffee-to-water ratio than hot brew methods because extraction happens at a lower temperature over a longer time.",
    seoMeta: { title: "Cold Brew Ratio Calculator | Concentrate & RTD", description: "Calculate water and coffee amounts for making cold brew coffee.", keywords: "cold brew ratio, cold brew concentrate calculator" }
  },
  {
    id: "tea-brewing-calculator",
    name: "Tea Brewing Calculator",
    description: "Determine the ideal amount of tea leaves and brew time for various tea types.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Tea\\ Amount = Water \\times Ratio",
    inputs: [
      { id: "water", label: "Water Amount", type: "number", defaultValue: 250, unit: "ml" },
      { id: "type", label: "Tea Type", type: "select", options: [
        { label: "Green Tea", value: "green" },
        { label: "Black Tea", value: "black" },
        { label: "Oolong Tea", value: "oolong" },
        { label: "White Tea", value: "white" }
      ], defaultValue: "black" }
    ],
    outputs: [
      { id: "leaves", label: "Tea Leaves Needed", formula: "water * 0.02", unit: "g" },
      { id: "time", label: "Brew Time", formula: "type == 'green' ? 2 : (type == 'black' ? 3 : (type == 'oolong' ? 4 : 5))", unit: "minutes" }
    ],
    theory: "Different teas require different water temperatures and steeping times to extract the best flavor without releasing too many bitter tannins.",
    seoMeta: { title: "Tea Brewing Calculator | Steep Time & Leaf Amount", description: "Calculate tea leaves and steep times for different types of tea.", keywords: "tea brewing, steep time, tea leaf amount" }
  },
  // 🥤 DRINKS CALCULATORS
  {
    id: "abv-calculator",
    name: "ABV Calculator",
    description: "Calculate Alcohol by Volume based on original and final gravity.",
    category: "food",
    subcategory: "drinks",
    scientificFormula: "ABV = (OG - FG) \\times 131.25",
    inputs: [
      { id: "og", label: "Original Gravity", type: "number", defaultValue: 1.050 },
      { id: "fg", label: "Final Gravity", type: "number", defaultValue: 1.010 }
    ],
    outputs: [
      { id: "abv", label: "Alcohol by Volume", formula: "(og - fg) * 131.25", unit: "%" }
    ],
    theory: "ABV is a standard measure of how much alcohol is contained in a given volume of an alcoholic beverage. It is calculated by measuring the density of the liquid before and after fermentation.",
    seoMeta: { title: "ABV Calculator | Homebrew Alcohol Content", description: "Calculate ABV for beer, wine, or cider using original and final gravity.", keywords: "abv calculator, alcohol by volume, homebrew calculator" }
  },
  {
    id: "alcohol-dilution-calculator",
    name: "Alcohol Dilution Calculator",
    description: "Calculate how much water to add to dilute an alcoholic solution.",
    category: "food",
    subcategory: "drinks",
    scientificFormula: "C_1V_1 = C_2V_2",
    inputs: [
      { id: "c1", label: "Initial Alcohol %", type: "number", defaultValue: 95 },
      { id: "v1", label: "Initial Volume", type: "number", defaultValue: 1000, unit: "ml" },
      { id: "c2", label: "Desired Alcohol %", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "v2", label: "Final Volume", formula: "(c1 * v1) / c2", unit: "ml" },
      { id: "water", label: "Water to Add", formula: "((c1 * v1) / c2) - v1", unit: "ml" }
    ],
    theory: "Dilution follows the conservation of mass. The amount of pure alcohol remains the same, but the volume increases, lowering the percentage.",
    seoMeta: { title: "Alcohol Dilution Calculator | Mixing Spirits", description: "Calculate the amount of water needed to dilute alcohol to a specific strength.", keywords: "alcohol dilution, dilute spirits, abv dilution" }
  },
  {
    id: "chilled-drink-calculator",
    name: "Chilled Drink Calculator",
    description: "Estimate the time required to chill a drink in a fridge or freezer.",
    category: "food",
    subcategory: "drinks",
    scientificFormula: "Cooling\\ Time = \\frac{Heat\\ Removed}{Cooling\\ Rate}",
    inputs: [
      { id: "temp_init", label: "Initial Temperature", type: "number", defaultValue: 25, unit: "°C" },
      { id: "temp_target", label: "Target Temperature", type: "number", defaultValue: 4, unit: "°C" },
      { id: "method", label: "Chilling Method", type: "select", options: [
        { label: "Refrigerator", value: "0.1" },
        { label: "Freezer", value: "0.3" },
        { label: "Ice Bucket", value: "1.0" }
      ], defaultValue: "0.1" }
    ],
    outputs: [
      { id: "time", label: "Estimated Time", formula: "(temp_init - temp_target) / method", unit: "minutes" }
    ],
    theory: "Newton's Law of Cooling states that the rate of heat loss of a body is directly proportional to the difference in the temperatures between the body and its environment.",
    seoMeta: { title: "Chilled Drink Calculator | Fridge & Freezer Time", description: "Estimate how long it takes to chill a drink using different methods.", keywords: "chill drink calculator, cooling time, fridge time for beer" }
  },

  // 🍰 DESSERTS & BAKING
  {
    id: "bakers-percentage-calculator",
    name: "Baker's Percentage Calculator",
    description: "Calculate ingredient amounts based on flour weight being 100%.",
    category: "food",
    subcategory: "desserts-baking",
    scientificFormula: "Percentage = \\frac{Ingredient}{Flour} \\times 100",
    inputs: [
      { id: "flour", label: "Flour Weight", type: "number", defaultValue: 1000, unit: "g" },
      { id: "water", label: "Water Weight", type: "number", defaultValue: 600, unit: "g" },
      { id: "salt", label: "Salt Weight", type: "number", defaultValue: 20, unit: "g" },
      { id: "yeast", label: "Yeast Weight", type: "number", defaultValue: 10, unit: "g" }
    ],
    outputs: [
      { id: "water_pct", label: "Water Percentage", formula: "(water / flour) * 100", unit: "%" },
      { id: "salt_pct", label: "Salt Percentage", formula: "(salt / flour) * 100", unit: "%" },
      { id: "yeast_pct", label: "Yeast Percentage", formula: "(yeast / flour) * 100", unit: "%" }
    ],
    theory: "Baker's percentage is a notation method indicating the proportion of an ingredient relative to the flour used in a recipe.",
    seoMeta: { title: "Baker's Percentage Calculator | Bread Math", description: "Calculate baker's percentages for bread and pastry recipes.", keywords: "bakers percentage, bread math, dough hydration" }
  },
  {
    id: "cake-pricing-calculator",
    name: "Cake Pricing Calculator",
    description: "Calculate the price to charge for a custom cake.",
    category: "food",
    subcategory: "desserts-baking",
    scientificFormula: "Price = Ingredients + Labor + Profit",
    inputs: [
      { id: "ingredients", label: "Ingredient Cost", type: "number", defaultValue: 20, unit: "$" },
      { id: "hours", label: "Labor Hours", type: "number", defaultValue: 4 },
      { id: "rate", label: "Hourly Rate", type: "number", defaultValue: 15, unit: "$" },
      { id: "profit", label: "Desired Profit Margin", type: "number", defaultValue: 30, unit: "%" }
    ],
    outputs: [
      { id: "cost", label: "Total Cost", formula: "ingredients + (hours * rate)", unit: "$" },
      { id: "price", label: "Suggested Price", formula: "(ingredients + (hours * rate)) * (1 + profit / 100)", unit: "$" }
    ],
    theory: "Pricing a cake requires accounting for both direct costs (ingredients) and indirect costs (labor), plus a profit margin to sustain the business.",
    seoMeta: { title: "Cake Pricing Calculator | Bakery Business Tool", description: "Calculate how much to charge for custom cakes based on costs and profit margin.", keywords: "cake pricing, bakery calculator, home baker pricing" }
  },
  {
    id: "cake-serving-calculator",
    name: "Cake Serving Calculator",
    description: "Determine how many servings a cake can yield.",
    category: "food",
    subcategory: "desserts-baking",
    scientificFormula: "Servings = \\frac{Cake\\ Area}{Serving\\ Size}",
    inputs: [
      { id: "size", label: "Cake Size (Diameter)", type: "number", defaultValue: 8, unit: "inches" },
      { id: "type", label: "Event Type", type: "select", options: [
        { label: "Wedding (1x2 inch slices)", value: "2" },
        { label: "Party (1.5x2 inch slices)", value: "3" }
      ], defaultValue: "2" }
    ],
    outputs: [
      { id: "servings", label: "Estimated Servings", formula: "(3.14159 * (size/2)^2) / type", unit: "servings" }
    ],
    theory: "Wedding servings are typically smaller than party servings. A standard wedding slice is 1\" x 2\" x 4\" high.",
    seoMeta: { title: "Cake Serving Calculator | Wedding & Party Slices", description: "Calculate how many servings you can get from a round cake.", keywords: "cake servings, wedding cake slices, cake size guide" }
  },
  {
    id: "pancake-recipe-calculator",
    name: "Pancake Recipe Calculator",
    description: "Scale a basic pancake recipe for any number of people.",
    category: "food",
    subcategory: "desserts-baking",
    scientificFormula: "Ingredients = Base \\times Scale",
    inputs: [
      { id: "people", label: "Number of People", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "flour", label: "Flour", formula: "people * 50", unit: "g" },
      { id: "milk", label: "Milk", formula: "people * 75", unit: "ml" },
      { id: "eggs", label: "Eggs", formula: "ceil(people / 2)", unit: "pcs" }
    ],
    theory: "Pancake batter relies on a balance of flour for structure and milk/eggs for moisture and richness.",
    seoMeta: { title: "Pancake Recipe Calculator | Scale Your Breakfast", description: "Scale pancake ingredients based on the number of servings needed.", keywords: "pancake calculator, recipe scaler, pancake ingredients" }
  },
  {
    id: "sourdough-calculator",
    name: "Sourdough Calculator",
    description: "Calculate hydration and ingredient amounts for sourdough bread.",
    category: "food",
    subcategory: "desserts-baking",
    scientificFormula: "Hydration = \\frac{Water}{Flour} \\times 100",
    inputs: [
      { id: "flour", label: "Total Flour", type: "number", defaultValue: 500, unit: "g" },
      { id: "water", label: "Total Water", type: "number", defaultValue: 350, unit: "g" },
      { id: "starter", label: "Starter Amount", type: "number", defaultValue: 100, unit: "g" },
      { id: "starter_hyd", label: "Starter Hydration", type: "number", defaultValue: 100, unit: "%" }
    ],
    outputs: [
      { id: "total_flour", label: "Total Flour (incl. starter)", formula: "flour + (starter / (1 + starter_hyd/100))", unit: "g" },
      { id: "total_water", label: "Total Water (incl. starter)", formula: "water + (starter - (starter / (1 + starter_hyd/100)))", unit: "g" },
      { id: "hyd", label: "Overall Hydration", formula: "(water + (starter - (starter / (1 + starter_hyd/100)))) / (flour + (starter / (1 + starter_hyd/100))) * 100", unit: "%" }
    ],
    theory: "Sourdough hydration affects the crumb structure and ease of handling the dough. High hydration yields a more open crumb but is stickier.",
    seoMeta: { title: "Sourdough Calculator | Hydration & Ingredients", description: "Calculate true hydration for sourdough bread including starter contribution.", keywords: "sourdough calculator, bread hydration, sourdough math" }
  },

  // 🍕 PIZZA CALCULATORS
  {
    id: "perfect-pizza-calculator",
    name: "Perfect Pizza Calculator",
    description: "Calculate ingredients for Neapolitan-style pizza dough.",
    category: "food",
    subcategory: "pizza",
    scientificFormula: "Dough = Flour + Water + Yeast + Salt",
    inputs: [
      { id: "count", label: "Number of Pizzas", type: "number", defaultValue: 4 },
      { id: "size", label: "Dough Ball Weight", type: "number", defaultValue: 250, unit: "g" },
      { id: "hyd", label: "Hydration", type: "number", defaultValue: 65, unit: "%" }
    ],
    outputs: [
      { id: "total_weight", label: "Total Dough Weight", formula: "count * size", unit: "g" },
      { id: "flour", label: "Flour", formula: "(count * size) / (1 + hyd/100 + 0.03 + 0.002)", unit: "g" },
      { id: "water", label: "Water", formula: "((count * size) / (1 + hyd/100 + 0.03 + 0.002)) * (hyd/100)", unit: "g" }
    ],
    theory: "Authentic Neapolitan pizza uses a simple dough of flour, water, yeast, and salt. Hydration typically ranges from 60% to 70%.",
    seoMeta: { title: "Perfect Pizza Calculator | Dough Recipe Tool", description: "Calculate ingredients for perfect pizza dough based on count and hydration.", keywords: "pizza dough calculator, neapolitan pizza recipe" }
  },
  {
    id: "pizza-party-calculator",
    name: "Pizza Party Calculator",
    description: "Calculate how many pizzas to order for a party.",
    category: "food",
    subcategory: "pizza",
    scientificFormula: "Slices = Guests \\times Slices\\ per\\ Person",
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 10 },
      { id: "appetite", label: "Appetite Level", type: "select", options: [
        { label: "Light (2 slices)", value: "2" },
        { label: "Average (3 slices)", value: "3" },
        { label: "Hungry (4 slices)", value: "4" }
      ], defaultValue: "3" }
    ],
    outputs: [
      { id: "slices", label: "Total Slices Needed", formula: "guests * appetite", unit: "slices" },
      { id: "pizzas", label: "Large Pizzas (8 slices)", formula: "ceil((guests * appetite) / 8)", unit: "pizzas" }
    ],
    theory: "A standard large pizza is cut into 8 slices. Planning based on average appetite ensures you don't run out.",
    seoMeta: { title: "Pizza Party Calculator | How Many Pizzas to Order", description: "Calculate how many pizzas to order for your party based on guest count.", keywords: "pizza party calculator, how many pizzas, pizza estimator" }
  },
  {
    id: "pizza-size-calculator",
    name: "Pizza Size Calculator",
    description: "Compare the value of different pizza sizes based on area.",
    category: "food",
    subcategory: "pizza",
    scientificFormula: "Area = \\pi r^2",
    inputs: [
      { id: "d1", label: "Pizza 1 Diameter", type: "number", defaultValue: 10, unit: "inches" },
      { id: "p1", label: "Pizza 1 Price", type: "number", defaultValue: 10, unit: "$" },
      { id: "d2", label: "Pizza 2 Diameter", type: "number", defaultValue: 14, unit: "inches" },
      { id: "p2", label: "Pizza 2 Price", type: "number", defaultValue: 15, unit: "$" }
    ],
    outputs: [
      { id: "a1", label: "Pizza 1 Area", formula: "3.14159 * (d1/2)^2", unit: "sq in" },
      { id: "a2", label: "Pizza 2 Area", formula: "3.14159 * (d2/2)^2", unit: "sq in" },
      { id: "v1", label: "Pizza 1 Cost per Sq In", formula: "p1 / (3.14159 * (d1/2)^2)", unit: "$/sq in" },
      { id: "v2", label: "Pizza 2 Cost per Sq In", formula: "p2 / (3.14159 * (d2/2)^2)", unit: "$/sq in" }
    ],
    theory: "Due to the geometry of a circle, doubling the diameter quadruples the area. Often, a larger pizza is a much better value.",
    resultInterpretation: "Compare the Cost per Sq In to see which pizza gives you more food for your money.",
    seoMeta: { title: "Pizza Size Calculator | Compare Pizza Value", description: "Compare the area and value of two different pizza sizes.", keywords: "pizza size comparison, pizza value calculator" }
  },
  // 🦃 THANKSGIVING CALCULATORS
  {
    id: "thanksgiving-calculator",
    name: "Thanksgiving Calculator",
    description: "Plan food quantities for Thanksgiving dinner.",
    category: "food",
    subcategory: "thanksgiving",
    scientificFormula: "Food = Guests \\times Portion\\ Size",
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "turkey", label: "Turkey Needed", formula: "guests * 1.5", unit: "lbs" },
      { id: "sides", label: "Side Dishes", formula: "guests * 0.5", unit: "lbs" }
    ],
    theory: "A good rule of thumb is 1.5 pounds of turkey per person to account for bone weight and leftovers.",
    seoMeta: { title: "Thanksgiving Calculator | Food Planner", description: "Calculate how much turkey and sides you need for Thanksgiving.", keywords: "thanksgiving planner, turkey calculator" }
  },
  {
    id: "turkey-cooking-time-calculator",
    name: "Turkey Cooking Time Calculator",
    description: "Calculate roasting time for turkey based on weight.",
    category: "food",
    subcategory: "thanksgiving",
    scientificFormula: "Cook\\ Time = Weight \\times Minutes\\ per\\ Pound",
    inputs: [
      { id: "weight", label: "Turkey Weight", type: "number", defaultValue: 12, unit: "lbs" },
      { id: "stuffed", label: "Stuffed?", type: "select", options: [{ label: "Yes", value: "20" }, { label: "No", value: "15" }], defaultValue: "15" }
    ],
    outputs: [
      { id: "time", label: "Cooking Time", formula: "weight * stuffed", unit: "minutes" }
    ],
    theory: "Unstuffed turkeys cook faster and more evenly than stuffed ones. Always use a thermometer to check for safety (165°F in the thickest part).",
    seoMeta: { title: "Turkey Cooking Time Calculator | Roast Timer", description: "Calculate how long to cook your Thanksgiving turkey.", keywords: "turkey cook time, roasting turkey" }
  },
  {
    id: "turkey-defrost-time-calculator",
    name: "Turkey Defrost Time Calculator",
    description: "Calculate safe defrosting time in the refrigerator.",
    category: "food",
    subcategory: "thanksgiving",
    scientificFormula: "Defrost\\ Time = Weight \\times Hours\\ per\\ Pound",
    inputs: [
      { id: "weight", label: "Turkey Weight", type: "number", defaultValue: 12, unit: "lbs" }
    ],
    outputs: [
      { id: "time", label: "Defrost Time", formula: "weight * 24 / 4", unit: "hours" }
    ],
    theory: "The safest way to defrost a turkey is in the refrigerator. Allow 24 hours for every 4-5 pounds of turkey.",
    seoMeta: { title: "Turkey Defrost Time Calculator | Safe Thawing", description: "Calculate refrigerator defrost time for your frozen turkey.", keywords: "turkey defrost time, thaw turkey" }
  },

  // 🍸 PARTY CALCULATORS
  {
    id: "bbq-party-calculator",
    name: "BBQ Party Calculator",
    description: "Plan food and drinks for a BBQ party.",
    category: "food",
    subcategory: "party",
    scientificFormula: "Food = Guests \\times Food\\ per\\ Person",
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "burgers", label: "Burgers/Sausages", formula: "guests * 2", unit: "pcs" },
      { id: "meat", label: "Total Meat", formula: "guests * 0.5", unit: "lbs" }
    ],
    theory: "For a BBQ, plan on 1/2 pound of meat per person, plus sides.",
    seoMeta: { title: "BBQ Party Calculator | Food Planner", description: "Plan food amounts for your next barbecue.", keywords: "bbq calculator, party food planner" }
  },
  {
    id: "beer-pong-calculator",
    name: "Beer Pong Calculator",
    description: "Calculate the amount of beer needed for games of beer pong.",
    category: "food",
    subcategory: "party",
    scientificFormula: "Beer = Games \\times Cups\\ per\\ Game",
    inputs: [
      { id: "games", label: "Number of Games", type: "number", defaultValue: 5 },
      { id: "cups", label: "Cups per Game", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "total_cups", label: "Total Cups Needed", formula: "games * cups", unit: "cups" },
      { id: "beer_cans", label: "Cans of Beer (12oz)", formula: "ceil((games * cups * 2) / 12)", unit: "cans" }
    ],
    theory: "Assuming 2 oz of beer per cup for play, this calculates the total volume needed.",
    seoMeta: { title: "Beer Pong Calculator | Party Games", description: "Calculate beer needed for beer pong games.", keywords: "beer pong calculator, party supplies" }
  },
  {
    id: "wedding-alcohol-calculator",
    name: "Wedding Alcohol Calculator",
    description: "Estimate alcohol needed for a wedding reception.",
    category: "food",
    subcategory: "party",
    scientificFormula: "Drinks = Guests \\times Drinks\\ per\\ Hour \\times Hours",
    inputs: [
      { id: "guests", label: "Number of Guests", type: "number", defaultValue: 100 },
      { id: "hours", label: "Reception Length", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "total_drinks", label: "Total Drinks", formula: "guests * (1 + (hours - 1) * 0.5)", unit: "drinks" },
      { id: "wine", label: "Bottles of Wine (50%)", formula: "ceil((guests * (1 + (hours - 1) * 0.5) * 0.5) / 5)", unit: "bottles" },
      { id: "beer", label: "Cases of Beer (30%)", formula: "ceil((guests * (1 + (hours - 1) * 0.5) * 0.3) / 24)", unit: "cases" }
    ],
    theory: "A common estimate is 1 drink per person per hour, with the first hour being slightly higher.",
    seoMeta: { title: "Wedding Alcohol Calculator | Reception Planner", description: "Estimate how much alcohol to buy for your wedding.", keywords: "wedding bar calculator, wedding alcohol estimator" }
  },

  // 📘 OTHER FOOD CALCULATORS
  {
    id: "bacon-curing-calculator",
    name: "Bacon Curing Calculator",
    description: "Calculate salt and cure amounts for dry curing bacon.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Salt = Meat\\ Weight \\times Cure\\ Percentage",
    inputs: [
      { id: "weight", label: "Meat Weight", type: "number", defaultValue: 1000, unit: "g" }
    ],
    outputs: [
      { id: "salt", label: "Kosher Salt (2.5%)", formula: "weight * 0.025", unit: "g" },
      { id: "pink_salt", label: "Prague Powder #1 (0.25%)", formula: "weight * 0.0025", unit: "g" }
    ],
    theory: "Curing requires precise ratios for safety. Prague Powder #1 contains sodium nitrite and must be used accurately.",
    seoMeta: { title: "Bacon Curing Calculator | Dry Cure Ratios", description: "Calculate salt and cure amounts for making bacon.", keywords: "bacon curing calculator, dry cure ratio, prague powder calculator" }
  },
  {
    id: "brine-calculator",
    name: "Brine Calculator",
    description: "Calculate salt and water for a specific brine percentage.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Salt\\ Ratio = \\frac{Salt}{Water}",
    inputs: [
      { id: "water", label: "Water Volume", type: "number", defaultValue: 1000, unit: "ml" },
      { id: "percent", label: "Brine Percentage", type: "number", defaultValue: 5, unit: "%" }
    ],
    outputs: [
      { id: "salt", label: "Salt Needed", formula: "water * (percent / 100)", unit: "g" }
    ],
    theory: "A 5% brine is standard for poultry and pork, helping retain moisture during cooking.",
    seoMeta: { title: "Brine Calculator | Salt Water Ratio", description: "Calculate salt needed for a specific brine percentage.", keywords: "brine calculator, wet brine ratio" }
  },
  {
    id: "egg-boiling-calculator",
    name: "Egg Boiling Calculator",
    description: "Calculate cooking time for boiled eggs.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Cook\\ Time = Base\\ Time + Size\\ Adjustment",
    inputs: [
      { id: "style", label: "Desired Style", type: "select", options: [
        { label: "Soft Boiled", value: "6" },
        { label: "Medium", value: "8" },
        { label: "Hard Boiled", value: "10" }
      ], defaultValue: "6" }
    ],
    outputs: [
      { id: "time", label: "Boiling Time", formula: "style", unit: "minutes" }
    ],
    theory: "Cooking time determines the texture of the yolk and white. Times assume large eggs straight from the fridge into boiling water.",
    seoMeta: { title: "Egg Boiling Calculator | Perfect Eggs", description: "Get the right boiling time for soft, medium, or hard eggs.", keywords: "egg boiling time, soft boiled egg calculator" }
  },
  {
    id: "rice-water-ratio-calculator",
    name: "Rice to Water Ratio Calculator",
    description: "Calculate water needed for different types of rice.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Water = Rice \\times Ratio",
    inputs: [
      { id: "rice", label: "Rice Amount", type: "number", defaultValue: 1, unit: "cups" },
      { id: "type", label: "Rice Type", type: "select", options: [
        { label: "White (1:1.5)", value: "1.5" },
        { label: "Brown (1:2)", value: "2" },
        { label: "Basmati (1:1.25)", value: "1.25" }
      ], defaultValue: "1.5" }
    ],
    outputs: [
      { id: "water", label: "Water Needed", formula: "rice * type", unit: "cups" }
    ],
    theory: "Different rice varieties absorb different amounts of water and require different cooking times.",
    seoMeta: { title: "Rice to Water Ratio Calculator | Perfect Rice", description: "Calculate water needed for various types of rice.", keywords: "rice water ratio, how to cook rice" }
  },
  {
    id: "steak-cook-time-calculator",
    name: "Steak Cook Time Calculator",
    description: "Estimate cook time for steak based on thickness.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Cook\\ Time = Thickness \\times Heat\\ Factor",
    inputs: [
      { id: "thickness", label: "Thickness", type: "number", defaultValue: 1, unit: "inch" },
      { id: "doneness", label: "Doneness", type: "select", options: [
        { label: "Rare", value: "3" },
        { label: "Medium Rare", value: "4" },
        { label: "Medium", value: "5" }
      ], defaultValue: "4" }
    ],
    outputs: [
      { id: "time", label: "Total Cook Time (minutes)", formula: "thickness * doneness", unit: "minutes" }
    ],
    theory: "Thicker steaks require more time to reach the desired internal temperature. Use a thermometer for precision.",
    seoMeta: { title: "Steak Cook Time Calculator | Grilling Guide", description: "Estimate steak cooking time based on thickness.", keywords: "steak cook time, grill steak calculator" }
  },
  {
    id: "water-cooling-calculator",
    name: "Water Cooling Calculator",
    description: "Calculate heat removed when cooling water.",
    category: "food",
    subcategory: "other-food",
    scientificFormula: "Q = mc\\Delta T",
    inputs: [
      { id: "mass", label: "Water Mass", type: "number", defaultValue: 1000, unit: "g" },
      { id: "temp_diff", label: "Temperature Drop", type: "number", defaultValue: 20, unit: "°C" }
    ],
    outputs: [
      { id: "heat", label: "Heat Removed", formula: "mass * 4.184 * temp_diff", unit: "Joules" }
    ],
    theory: "The specific heat capacity of water is approx 4.184 J/g°C. This formula calculates the energy change.",
    seoMeta: { title: "Water Cooling Calculator | Physics of Cooking", description: "Calculate energy removed when cooling water.", keywords: "water cooling, specific heat water" }
  },
  {
    id: "dry-to-cooked-pasta-converter",
    name: "Dry to Cooked Pasta Converter",
    description: "Calculate how much cooked pasta you will get from dry pasta.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Cooked\\ Pasta = Dry\\ Pasta \\times 2.25",
    inputs: [
      { id: "dry_pasta", label: "Dry Pasta Amount", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "cooked_pasta", label: "Cooked Pasta", formula: "dry_pasta * 2.25", unit: "g" }
    ],
    theory: "Pasta absorbs water as it cooks, increasing its weight. On average, pasta expands by a factor of 2.25.",
    seoMeta: { title: "Dry to Cooked Pasta Converter | Pasta Portion Calculator", description: "Convert dry pasta weight to cooked pasta weight.", keywords: "pasta converter, dry to cooked pasta" }
  },
  {
    id: "fresh-to-dry-herb-converter",
    name: "Fresh to Dry Herb Converter",
    description: "Convert measurements between fresh and dry herbs.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Dry\\ Herbs = \\frac{Fresh\\ Herbs}{3}",
    inputs: [
      { id: "fresh_herbs", label: "Fresh Herbs", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "dry_herbs", label: "Dry Herbs", formula: "fresh_herbs / 3", unit: "tbsp" }
    ],
    theory: "Dry herbs are more concentrated than fresh herbs. A general rule of thumb is to use 1/3 the amount of dry herbs compared to fresh.",
    seoMeta: { title: "Fresh to Dry Herb Converter | Herb Conversion", description: "Convert fresh herb measurements to dry herbs.", keywords: "fresh to dry herbs, herb converter" }
  },
  {
    id: "garlic-clove-to-powder-converter",
    name: "Garlic Clove to Powder Converter",
    description: "Convert fresh garlic cloves to garlic powder.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Powder = Cloves \\times 0.125",
    inputs: [
      { id: "cloves", label: "Garlic Cloves", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "powder", label: "Garlic Powder", formula: "cloves * 0.125", unit: "tsp" }
    ],
    theory: "One clove of garlic is approximately equivalent to 1/8 teaspoon of garlic powder.",
    seoMeta: { title: "Garlic Clove to Powder Converter | Garlic Conversion", description: "Convert garlic cloves to garlic powder measurements.", keywords: "garlic converter, cloves to powder" }
  },
  {
    id: "grams-to-tablespoons-converter",
    name: "Grams to Tablespoons Converter",
    description: "Convert grams to tablespoons for common ingredients.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Tablespoons = \\frac{Grams}{14.79}",
    inputs: [
      { id: "grams", label: "Grams", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "tbsp", label: "Tablespoons", formula: "grams / 14.79", unit: "tbsp" }
    ],
    theory: "One US tablespoon is approximately 14.79 milliliters. For ingredients with a density close to water (like butter or milk), 1 gram is approx 1 ml.",
    seoMeta: { title: "Grams to Tablespoons Converter | Grams to TBSP", description: "Convert grams to tablespoons for cooking.", keywords: "grams to tbsp, butter converter" }
  },
  {
    id: "grams-to-teaspoons-converter",
    name: "Grams to Teaspoons Converter",
    description: "Convert grams to teaspoons for common ingredients.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Teaspoons = \\frac{Grams}{4.2}",
    inputs: [
      { id: "grams", label: "Grams", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "tsp", label: "Teaspoons", formula: "grams / 4.2", unit: "tsp" }
    ],
    theory: "One US teaspoon is approximately 4.93 milliliters. For granulated sugar or salt, a teaspoon weighs about 4.2 grams.",
    seoMeta: { title: "Grams to Teaspoons Converter | Grams to TSP", description: "Convert grams to teaspoons for salt and sugar.", keywords: "grams to tsp, salt converter" }
  },
  {
    id: "ml-to-grams-calculator",
    name: "ml to Grams Calculator",
    description: "Convert milliliters to grams based on density.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Mass = Volume \\times Density",
    inputs: [
      { id: "volume", label: "Volume (ml)", type: "number", defaultValue: 250 },
      { id: "density", label: "Density (g/ml)", type: "number", defaultValue: 1.03 }
    ],
    outputs: [
      { id: "mass", label: "Mass", formula: "volume * density", unit: "g" }
    ],
    theory: "To convert volume to mass, multiply the volume by the density of the substance. Water has a density of 1 g/ml, while milk is approx 1.03 g/ml.",
    seoMeta: { title: "ml to Grams Calculator | Volume to Weight", description: "Convert milliliters to grams using density.", keywords: "ml to grams, volume to weight" }
  },
  {
    id: "oil-to-butter-conversion",
    name: "Oil to Butter Conversion",
    description: "Convert oil measurements to butter for baking.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Butter = Oil \\times 1.25",
    inputs: [
      { id: "oil", label: "Oil Amount (ml)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "butter", label: "Butter Equivalent", formula: "oil * 1.25", unit: "g" }
    ],
    theory: "Butter contains about 80% fat and 20% water, while oil is 100% fat. To substitute butter for oil, use 1.25 times the amount of butter.",
    seoMeta: { title: "Oil to Butter Conversion | Baking Substitutions", description: "Convert oil to butter measurements for recipes.", keywords: "oil to butter, baking substitutions" }
  },
  {
    id: "pounds-to-cups-converter",
    name: "Pounds to Cups Converter",
    description: "Convert pounds to cups for common ingredients.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Cups = \\frac{Pounds \\times 453.592}{Density \\times 236.588}",
    inputs: [
      { id: "pounds", label: "Pounds", type: "number", defaultValue: 1 },
      { id: "density", label: "Density (g/ml)", type: "number", defaultValue: 0.85 }
    ],
    outputs: [
      { id: "cups", label: "Cups", formula: "(pounds * 453.592) / (density * 236.588)", unit: "cups" }
    ],
    theory: "One pound is approx 453.6 grams. To find the volume in cups, divide the mass by the density and the volume of one cup (236.6 ml).",
    seoMeta: { title: "Pounds to Cups Converter | Weight to Volume", description: "Convert pounds to cups for dry ingredients.", keywords: "pounds to cups, weight to volume" }
  },
  {
    id: "uncooked-to-cooked-rice-calculator",
    name: "Uncooked to Cooked Rice Calculator",
    description: "Calculate how much cooked rice you will get from uncooked rice.",
    category: "food",
    subcategory: "cooking-converters",
    scientificFormula: "Cooked\\ Rice = Uncooked\\ Rice \\times 3",
    inputs: [
      { id: "uncooked_rice", label: "Uncooked Rice (Cups)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "cooked_rice", label: "Cooked Rice", formula: "uncooked_rice * 3", unit: "cups" }
    ],
    theory: "Rice absorbs water and expands significantly during cooking. On average, 1 cup of uncooked white rice yields about 3 cups of cooked rice.",
    seoMeta: { title: "Uncooked to Cooked Rice Calculator | Rice Portion Calculator", description: "Convert uncooked rice volume to cooked rice volume.", keywords: "rice converter, uncooked to cooked rice" }
  },
  {
    id: "coffee-to-water-ratio-calculator",
    name: "Coffee to Water Ratio Calculator",
    description: "Calculate the water needed for a specific amount of coffee.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Water = Coffee \\times Ratio",
    inputs: [
      { id: "coffee", label: "Coffee Amount (g)", type: "number", defaultValue: 30 },
      { id: "ratio", label: "Brewing Ratio (1:x)", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "water", label: "Water Needed", formula: "coffee * ratio", unit: "ml" }
    ],
    theory: "The brewing ratio determines the strength of the coffee. A common ratio is 1:16 (1 gram of coffee to 16 ml of water).",
    seoMeta: { title: "Coffee to Water Ratio Calculator | Perfect Brew", description: "Calculate water needed for coffee grounds.", keywords: "coffee ratio, coffee to water" }
  },
  {
    id: "healthy-coffee-calculator",
    name: "Healthy Coffee Calculator",
    description: "Calculate calories and sugar in your coffee based on add-ins.",
    category: "food",
    subcategory: "tea-coffee",
    scientificFormula: "Calories = Milk + Sugar + Cream",
    inputs: [
      { id: "milk", label: "Milk (ml)", type: "number", defaultValue: 50 },
      { id: "sugar", label: "Sugar (tsp)", type: "number", defaultValue: 2 },
      { id: "cream", label: "Cream (tbsp)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "calories", label: "Total Calories", formula: "milk * 0.6 + sugar * 16 + cream * 50", unit: "kcal" },
      { id: "sugar_g", label: "Sugar Content", formula: "sugar * 4.2", unit: "g" }
    ],
    theory: "Black coffee has negligible calories. Adding milk, sugar, and cream increases the calorie and sugar content significantly.",
    seoMeta: { title: "Healthy Coffee Calculator | Calorie Counter", description: "Calculate calories and sugar in your coffee.", keywords: "coffee calories, healthy coffee" }
  }
];
