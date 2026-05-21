import { CalculatorConfig } from "./calculator-types";

export const HEALTH_CALCULATORS: CalculatorConfig[] = [
  {
    id: "absi-calculator",
    name: "ABSI Calculator",
    description: "Calculate A Body Shape Index (ABSI) to assess health risk.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "ABSI = \\frac{WC}{BMI^{2/3} \\times Height^{1/2}}",
    inputs: [
      { id: "wc", label: "Waist Circumference (m)", type: "number", defaultValue: 0.8 },
      { id: "bmi", label: "BMI", type: "number", defaultValue: 22 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "absi", label: "ABSI Score", formula: "wc / (bmi^(2/3) * height^(1/2))", unit: "" }
    ],
    theory: "A Body Shape Index (ABSI) is based on waist circumference adjusted for height and weight. A higher ABSI indicates a more central concentration of body fat.",
    seoMeta: { title: "ABSI Calculator | Body Shape Index", description: "Calculate your A Body Shape Index (ABSI).", keywords: "ABSI, body shape index, health risk" }
  },
  {
    id: "body-fat-calculator",
    name: "Body Fat Calculator",
    description: "Estimate your body fat percentage.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Body\\ Fat\\% = \\frac{495}{Density} - 450",
    inputs: [
      { id: "density", label: "Body Density (g/ml)", type: "number", defaultValue: 1.05 }
    ],
    outputs: [
      { id: "bf", label: "Body Fat %", formula: "(495 / density) - 450", unit: "%" }
    ],
    theory: "Body fat percentage can be estimated from body density using the Siri formula.",
    seoMeta: { title: "Body Fat Calculator | Fitness Category", description: "Calculate your body fat percentage.", keywords: "body fat, fat percentage" }
  },
  {
    id: "bsa-calculator",
    name: "BSA Calculator",
    description: "Calculate Body Surface Area.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BSA = \\sqrt{\\frac{Height \\times Weight}{3600}}",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "bsa", label: "BSA", formula: "sqrt((height * weight) / 3600)", unit: "m²" }
    ],
    theory: "The Mosteller formula is commonly used to calculate Body Surface Area.",
    seoMeta: { title: "BSA Calculator | Body Surface Area", description: "Calculate your body surface area.", keywords: "BSA, body surface area" }
  },
  {
    id: "ffmi-calculator",
    name: "FFMI Calculator",
    description: "Calculate Fat-Free Mass Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "FFMI = \\frac{Lean\\ Mass}{Height^2}",
    inputs: [
      { id: "lean_mass", label: "Lean Mass (kg)", type: "number", defaultValue: 60 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "ffmi", label: "FFMI", formula: "lean_mass / (height^2)", unit: "" }
    ],
    theory: "Fat-Free Mass Index (FFMI) is an alternative to BMI that accounts for muscle mass.",
    seoMeta: { title: "FFMI Calculator | Fat-Free Mass Index", description: "Calculate your Fat-Free Mass Index.", keywords: "FFMI, muscle index" }
  },
  {
    id: "ideal-weight-calculator",
    name: "Ideal Weight Calculator",
    description: "Calculate Ideal Body Weight.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Ideal\\ Weight = 50 + 2.3 \\times (Inches\\ over\\ 5\\ ft)",
    inputs: [
      { id: "height", label: "Height (inches)", type: "number", defaultValue: 68 }
    ],
    outputs: [
      { id: "ibw", label: "Ideal Weight", formula: "50 + 2.3 * (height - 60)", unit: "kg" }
    ],
    theory: "The Devine formula is used to estimate ideal body weight for adults.",
    seoMeta: { title: "Ideal Weight Calculator | IBW", description: "Calculate your ideal body weight.", keywords: "ideal weight, IBW" }
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description: "Calculate Body Mass Index.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" }
    ],
    theory: "BMI is a simple measure of body fat based on height and weight.",
    seoMeta: { title: "BMI Calculator | Body Mass Index", description: "Calculate your BMI.", keywords: "BMI, body mass index" }
  },
  {
    id: "bmi-calculator-for-kids",
    name: "BMI Calculator for Kids",
    description: "Calculate BMI for children and teens.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 30 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.3 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" }
    ],
    theory: "For children, BMI is interpreted relative to other children of the same age and sex.",
    seoMeta: { title: "BMI Calculator for Kids | Pediatric BMI", description: "Calculate BMI for kids.", keywords: "pediatric BMI, kids BMI" }
  },
  {
    id: "geriatric-bmi-calculator",
    name: "Geriatric BMI Calculator",
    description: "Calculate BMI for older adults.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 65 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.6 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" }
    ],
    theory: "Older adults may have different ideal BMI ranges for health.",
    seoMeta: { title: "Geriatric BMI Calculator | Elderly BMI", description: "Calculate BMI for older adults.", keywords: "geriatric BMI, elderly BMI" }
  },
  {
    id: "bmr-calculator",
    name: "BMR Calculator",
    description: "Calculate Basal Metabolic Rate.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BMR = 10W + 6.25H - 5A + S",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "5" }, { label: "Female", value: "-161" }], defaultValue: "5" }
    ],
    outputs: [
      { id: "bmr", label: "BMR", formula: "10 * weight + 6.25 * height - 5 * age + gender", unit: "kcal" }
    ],
    theory: "The Mifflin-St Jeor equation is used to calculate BMR.",
    seoMeta: { title: "BMR Calculator | Basal Metabolic Rate", description: "Calculate your BMR.", keywords: "BMR, metabolic rate" }
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    description: "Calculate daily calorie needs.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Calories = BMR \\times Activity\\ Factor",
    inputs: [
      { id: "bmr", label: "BMR", type: "number", defaultValue: 1500 },
      { id: "activity", label: "Activity Level", type: "select", options: [
        { label: "Sedentary", value: "1.2" },
        { label: "Lightly Active", value: "1.375" },
        { label: "Moderately Active", value: "1.55" },
        { label: "Very Active", value: "1.725" }
      ], defaultValue: "1.2" }
    ],
    outputs: [
      { id: "calories", label: "Daily Calories", formula: "bmr * activity", unit: "kcal" }
    ],
    theory: "Daily calorie needs are based on BMR and activity level.",
    seoMeta: { title: "Calorie Calculator | Daily Needs", description: "Calculate your daily calorie needs.", keywords: "calorie calculator, daily calories" }
  },
  {
    id: "tdee-calculator",
    name: "TDEE Calculator",
    description: "Calculate Total Daily Energy Expenditure.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "TDEE = BMR \\times Activity\\ Multiplier",
    inputs: [
      { id: "bmr", label: "BMR", type: "number", defaultValue: 1500 },
      { id: "multiplier", label: "Activity Multiplier", type: "number", defaultValue: 1.2 }
    ],
    outputs: [
      { id: "tdee", label: "TDEE", formula: "bmr * multiplier", unit: "kcal" }
    ],
    theory: "TDEE represents the total number of calories you burn in a day.",
    seoMeta: { title: "TDEE Calculator | Total Daily Energy Expenditure", description: "Calculate your TDEE.", keywords: "TDEE, daily expenditure" }
  },
  {
    id: "protein-calculator",
    name: "Protein Calculator",
    description: "Calculate daily protein requirement.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Protein = Weight \\times Protein\\ Factor",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "factor", label: "Protein Factor (g/kg)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [
      { id: "protein", label: "Daily Protein", formula: "weight * factor", unit: "g" }
    ],
    theory: "Protein needs vary based on activity level and goals. The RDA is 0.8 g/kg for sedentary adults.",
    seoMeta: { title: "Protein Calculator | Daily Protein Needs", description: "Calculate your daily protein requirement.", keywords: "protein calculator, protein needs" }
  },
  {
    id: "macro-calculator",
    name: "Macro Calculator",
    description: "Calculate macronutrient distribution.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Calories = Protein + Carbs + Fat",
    inputs: [
      { id: "calories", label: "Total Calories", type: "number", defaultValue: 2000 },
      { id: "protein_pct", label: "Protein %", type: "number", defaultValue: 30 },
      { id: "carbs_pct", label: "Carbs %", type: "number", defaultValue: 40 },
      { id: "fat_pct", label: "Fat %", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "protein_g", label: "Protein", formula: "(calories * (protein_pct / 100)) / 4", unit: "g" },
      { id: "carbs_g", label: "Carbohydrates", formula: "(calories * (carbs_pct / 100)) / 4", unit: "g" },
      { id: "fat_g", label: "Fat", formula: "(calories * (fat_pct / 100)) / 9", unit: "g" }
    ],
    theory: "Macronutrients provide energy: Protein and Carbs have 4 kcal/g, while Fat has 9 kcal/g.",
    seoMeta: { title: "Macro Calculator | Macronutrient Split", description: "Calculate your macros.", keywords: "macro calculator, macronutrients" }
  },
  {
    id: "blood-sugar-converter",
    name: "Blood Sugar Converter",
    description: "Convert blood sugar between mg/dL and mmol/L.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "mg/dL = mmol/L \\times 18",
    inputs: [
      { id: "val", label: "Value", type: "number", defaultValue: 5.5 },
      { id: "from_unit", label: "From", type: "select", options: [{ label: "mmol/L", value: "mmol" }, { label: "mg/dL", value: "mg" }], defaultValue: "mmol" }
    ],
    outputs: [
      { id: "res", label: "Converted Value", formula: "from_unit == 'mmol' ? val * 18 : val / 18", unit: "mg/dL" }
    ],
    theory: "To convert mmol/L to mg/dL, multiply by 18. To convert mg/dL to mmol/L, divide by 18.",
    seoMeta: { title: "Blood Sugar Converter | Glucose Conversion", description: "Convert blood sugar units.", keywords: "blood sugar converter, glucose conversion" }
  },
  {
    id: "a1c-calculator",
    name: "A1c Calculator",
    description: "Calculate Average Glucose from A1c.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "eAG = (28.7 \\times A1c) - 46.7",
    inputs: [
      { id: "a1c", label: "A1c (%)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "eag", label: "Average Glucose", formula: "(28.7 * a1c) - 46.7", unit: "mg/dL" }
    ],
    theory: "Estimated Average Glucose (eAG) can be calculated from the A1c percentage.",
    seoMeta: { title: "A1c Calculator | Average Glucose", description: "Calculate average glucose from A1c.", keywords: "A1c calculator, eAG" }
  },
  {
    id: "homa-ir-calculator",
    name: "HOMA-IR Calculator",
    description: "Calculate Insulin Resistance score.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "HOMA-IR = \\frac{Glucose \\times Insulin}{405}",
    inputs: [
      { id: "glucose", label: "Glucose (mg/dL)", type: "number", defaultValue: 100 },
      { id: "insulin", label: "Insulin (µU/mL)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "homa", label: "HOMA-IR Score", formula: "(glucose * insulin) / 405", unit: "" }
    ],
    theory: "HOMA-IR is used to assess insulin resistance based on fasting glucose and insulin levels.",
    seoMeta: { title: "HOMA-IR Calculator | Insulin Resistance", description: "Calculate HOMA-IR score.", keywords: "HOMA-IR, insulin resistance" }
  },
  {
    id: "sleep-calculator",
    name: "Sleep Calculator",
    description: "Calculate best bedtime or wake-up time.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Sleep\\ Cycles = 90\\ minutes \\times Cycles",
    inputs: [
      { id: "wake_time", label: "Wake-up Time (HH:MM)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "bedtime", label: "Best Bedtime", formula: "wake_time - 7.5", unit: "hours" }
    ],
    theory: "Sleep cycles last approx 90 minutes. Waking up at the end of a cycle feels best.",
    seoMeta: { title: "Sleep Calculator | Bedtime Calculator", description: "Calculate best bedtime.", keywords: "sleep calculator, bedtime" }
  },
  {
    id: "sleep-debt-calculator",
    name: "Sleep Debt Calculator",
    description: "Calculate weekly sleep debt.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Sleep\\ Debt = Required\\ Sleep - Actual\\ Sleep",
    inputs: [
      { id: "required", label: "Required Sleep (hrs/day)", type: "number", defaultValue: 8 },
      { id: "actual", label: "Actual Sleep (hrs/day)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "debt", label: "Weekly Sleep Debt", formula: "(required - actual) * 7", unit: "hours" }
    ],
    theory: "Sleep debt accumulates when you sleep less than your body needs.",
    seoMeta: { title: "Sleep Debt Calculator | Weekly Debt", description: "Calculate sleep debt.", keywords: "sleep debt" }
  },
  {
    id: "blood-pressure-calculator",
    name: "Blood Pressure Calculator",
    description: "Calculate Mean Arterial Pressure.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "MAP = \\frac{SBP + 2(DBP)}{3}",
    inputs: [
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 },
      { id: "dbp", label: "Diastolic BP (mmHg)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "map", label: "Mean Arterial Pressure", formula: "(sbp + 2 * dbp) / 3", unit: "mmHg" }
    ],
    theory: "Mean Arterial Pressure (MAP) is the average pressure in a patient's arteries during one cardiac cycle.",
    seoMeta: { title: "Blood Pressure Calculator | MAP", description: "Calculate MAP.", keywords: "blood pressure, MAP" }
  },
  {
    id: "cardiac-output-calculator",
    name: "Cardiac Output Calculator",
    description: "Calculate Cardiac Output.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "CO = HR \\times SV",
    inputs: [
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 72 },
      { id: "sv", label: "Stroke Volume (ml)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "co", label: "Cardiac Output", formula: "hr * sv / 1000", unit: "L/min" }
    ],
    theory: "Cardiac output is the volume of blood pumped by the heart per minute.",
    seoMeta: { title: "Cardiac Output Calculator | CO", description: "Calculate cardiac output.", keywords: "cardiac output" }
  },
  {
    id: "stroke-volume-calculator",
    name: "Stroke Volume Calculator",
    description: "Calculate Stroke Volume.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "SV = EDV - ESV",
    inputs: [
      { id: "edv", label: "End-Diastolic Volume (ml)", type: "number", defaultValue: 120 },
      { id: "esv", label: "End-Systolic Volume (ml)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "sv", label: "Stroke Volume", formula: "edv - esv", unit: "ml" }
    ],
    theory: "Stroke volume is the volume of blood pumped from the left ventricle per beat.",
    seoMeta: { title: "Stroke Volume Calculator | SV", description: "Calculate stroke volume.", keywords: "stroke volume" }
  },
  {
    id: "due-date-calculator",
    name: "Due Date Calculator",
    description: "Calculate Estimated Due Date.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "EDD = LMP + 280\\ days",
    inputs: [
      { id: "lmp_days", label: "Days since Last Menstrual Period", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "edd_days", label: "Days until Due Date", formula: "280 - lmp_days", unit: "days" }
    ],
    theory: "Naegele's rule estimates the due date by adding 280 days (40 weeks) to the first day of the last menstrual period.",
    seoMeta: { title: "Due Date Calculator | Pregnancy Due Date", description: "Calculate due date.", keywords: "due date, pregnancy" }
  },
  {
    id: "ovulation-calculator",
    name: "Ovulation Calculator",
    description: "Predict ovulation day.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Ovulation = Cycle\\ Length - 14",
    inputs: [
      { id: "cycle_length", label: "Cycle Length (days)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "ovulation_day", label: "Ovulation Day (from start)", formula: "cycle_length - 14", unit: "day" }
    ],
    theory: "Ovulation typically occurs 14 days before the start of the next menstrual period.",
    seoMeta: { title: "Ovulation Calculator | Fertile Window", description: "Predict ovulation.", keywords: "ovulation calculator" }
  },
  {
    id: "pregnancy-weight-gain-calculator",
    name: "Pregnancy Weight Gain Calculator",
    description: "Calculate recommended weight gain during pregnancy.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Weight\\ Gain = BMI\\ Category\\ Recommendation",
    inputs: [
      { id: "pre_bmi", label: "Pre-pregnancy BMI", type: "number", defaultValue: 22 }
    ],
    outputs: [
      { id: "min_gain", label: "Min Recommended Gain", formula: "pre_bmi < 18.5 ? 28 : (pre_bmi < 25 ? 25 : (pre_bmi < 30 ? 15 : 11))", unit: "lbs" },
      { id: "max_gain", label: "Max Recommended Gain", formula: "pre_bmi < 18.5 ? 40 : (pre_bmi < 25 ? 35 : (pre_bmi < 30 ? 25 : 20))", unit: "lbs" }
    ],
    theory: "Recommended weight gain depends on the mother's pre-pregnancy BMI category.",
    seoMeta: { title: "Pregnancy Weight Gain Calculator | Recommendation", description: "Calculate weight gain.", keywords: "pregnancy weight gain" }
  },
  {
    id: "bac-calculator",
    name: "BAC Calculator",
    description: "Calculate Blood Alcohol Concentration.",
    category: "health",
    subcategory: "addiction-medicine",
    scientificFormula: "BAC = \\frac{Alcohol \\times 5.14}{Body\\ Weight \\times r} - 0.015 \\times Time",
    inputs: [
      { id: "alcohol", label: "Alcohol Consumed (oz)", type: "number", defaultValue: 1 },
      { id: "weight", label: "Body Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "gender_r", label: "Gender Factor", type: "select", options: [{ label: "Male", value: "0.73" }, { label: "Female", value: "0.66" }], defaultValue: "0.73" },
      { id: "time", label: "Time passed (hrs)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "bac", label: "BAC", formula: "(alcohol * 5.14) / (weight * gender_r) - 0.015 * time", unit: "%" }
    ],
    theory: "Widmark's formula is used to estimate BAC.",
    seoMeta: { title: "BAC Calculator | Blood Alcohol Concentration", description: "Calculate BAC.", keywords: "BAC, blood alcohol" }
  },
  {
    id: "adjusted-body-weight-calculator",
    name: "Adjusted Body Weight Calculator",
    description: "Calculate Adjusted Body Weight for obese patients.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "AdjBW = IBW + 0.4 \\times (Actual\\ Weight - IBW)",
    inputs: [
      { id: "ibw", label: "Ideal Body Weight (kg)", type: "number", defaultValue: 60 },
      { id: "actual_weight", label: "Actual Weight (kg)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "adj_bw", label: "Adjusted Body Weight", formula: "ibw + 0.4 * (actual_weight - ibw)", unit: "kg" }
    ],
    theory: "Adjusted Body Weight is used for drug dosing in obese patients.",
    seoMeta: { title: "Adjusted Body Weight Calculator | AdjBW", description: "Calculate Adjusted Body Weight.", keywords: "AdjBW, adjusted body weight" }
  },
  {
    id: "bai-calculator",
    name: "BAI Calculator",
    description: "Calculate Body Adiposity Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BAI = \\frac{Hip\\ Circumference}{Height^{1.5}} - 18",
    inputs: [
      { id: "hip", label: "Hip Circumference (cm)", type: "number", defaultValue: 90 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "bai", label: "BAI", formula: "(hip / (height^1.5)) - 18", unit: "%" }
    ],
    theory: "BAI is an alternative to BMI that uses hip circumference and height.",
    seoMeta: { title: "BAI Calculator | Body Adiposity Index", description: "Calculate BAI.", keywords: "BAI, body adiposity index" }
  },
  {
    id: "body-frame-size-calculator",
    name: "Body Frame Size Calculator",
    description: "Determine body frame size.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Frame\\ Ratio = \\frac{Height}{Wrist\\ Circumference}",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "wrist", label: "Wrist Circumference (cm)", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "ratio", label: "Frame Ratio", formula: "height / wrist", unit: "" }
    ],
    theory: "Body frame size is determined by the ratio of height to wrist circumference.",
    seoMeta: { title: "Body Frame Size Calculator | Frame Size", description: "Calculate body frame size.", keywords: "frame size" }
  },
  {
    id: "body-shape-calculator",
    name: "Body Shape Calculator",
    description: "Determine body shape based on measurements.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "WHR = \\frac{Waist}{Hip}",
    inputs: [
      { id: "waist", label: "Waist (cm)", type: "number", defaultValue: 70 },
      { id: "hip", label: "Hip (cm)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "whr", label: "Waist-Hip Ratio", formula: "waist / hip", unit: "" }
    ],
    theory: "Waist-to-hip ratio is used to determine body shape (e.g., Apple or Pear).",
    seoMeta: { title: "Body Shape Calculator | Waist-Hip Ratio", description: "Calculate body shape.", keywords: "body shape, WHR" }
  },
  {
    id: "bri-calculator",
    name: "BRI Calculator",
    description: "Calculate Body Roundness Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BRI = 364.2 - 365.5 \\sqrt{1 - \\left(\\frac{WC/(2\\pi)}{0.5 \\times Height}\\right)^2}",
    inputs: [
      { id: "wc", label: "Waist Circumference (m)", type: "number", defaultValue: 0.8 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "bri", label: "BRI Score", formula: "364.2 - 365.5 * sqrt(1 - ((wc / (2 * 3.14159)) / (0.5 * height))^2)", unit: "" }
    ],
    theory: "BRI is a newer metric that assesses body roundness and health risk.",
    seoMeta: { title: "BRI Calculator | Body Roundness Index", description: "Calculate BRI.", keywords: "BRI, body roundness" }
  },
  {
    id: "draw-length-calculator",
    name: "Draw Length Calculator",
    description: "Calculate draw length for archery.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Draw\\ Length = \\frac{Wingspan}{2.5}",
    inputs: [
      { id: "wingspan", label: "Wingspan (inches)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "draw_length", label: "Draw Length", formula: "wingspan / 2.5", unit: "inches" }
    ],
    theory: "Draw length is estimated by dividing wingspan by 2.5.",
    seoMeta: { title: "Draw Length Calculator | Archery", description: "Calculate draw length.", keywords: "draw length, archery" }
  },
  {
    id: "bedridden-patient-height-calculator",
    name: "Bedridden Patient Height Calculator",
    description: "Estimate height from knee height.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Height = (Knee\\ Height \\times Factor) + Constant",
    inputs: [
      { id: "knee_height", label: "Knee Height (cm)", type: "number", defaultValue: 50 },
      { id: "gender_factor", label: "Gender Factor", type: "select", options: [{ label: "Male (2.02)", value: "2.02" }, { label: "Female (1.83)", value: "1.83" }], defaultValue: "2.02" },
      { id: "gender_const", label: "Gender Constant", type: "select", options: [{ label: "Male (64.19)", value: "64.19" }, { label: "Female (84.88)", value: "84.88" }], defaultValue: "64.19" }
    ],
    outputs: [
      { id: "height", label: "Estimated Height", formula: "(knee_height * gender_factor) + gender_const", unit: "cm" }
    ],
    theory: "Knee height can be used to estimate stature in bedridden patients.",
    seoMeta: { title: "Bedridden Patient Height Calculator | Knee Height", description: "Estimate height.", keywords: "knee height, height estimation" }
  },
  {
    id: "karvonen-formula-calculator",
    name: "Karvonen Formula Calculator",
    description: "Calculate target heart rate.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Target\\ HR = ((Max\\ HR - Resting\\ HR) \\times Intensity) + Resting\\ HR",
    inputs: [
      { id: "max_hr", label: "Max Heart Rate (bpm)", type: "number", defaultValue: 190 },
      { id: "resting_hr", label: "Resting Heart Rate (bpm)", type: "number", defaultValue: 60 },
      { id: "intensity", label: "Intensity (%)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "target_hr", label: "Target Heart Rate", formula: "((max_hr - resting_hr) * (intensity / 100)) + resting_hr", unit: "bpm" }
    ],
    theory: "The Karvonen formula is used to calculate target heart rate zones for exercise.",
    seoMeta: { title: "Karvonen Formula Calculator | Target HR", description: "Calculate target heart rate.", keywords: "Karvonen formula, target HR" }
  },
  {
    id: "lean-body-mass-calculator",
    name: "Lean Body Mass Calculator",
    description: "Calculate Lean Body Mass.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "LBM = Weight \\times (1 - Body\\ Fat%)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "bf", label: "Body Fat %", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "lbm", label: "Lean Body Mass", formula: "weight * (1 - (bf / 100))", unit: "kg" }
    ],
    theory: "Lean Body Mass is the weight of everything in your body except fat.",
    seoMeta: { title: "Lean Body Mass Calculator | LBM", description: "Calculate LBM.", keywords: "lean body mass, LBM" }
  },
  {
    id: "overweight-calculator",
    name: "Overweight Calculator",
    description: "Calculate excess weight.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Excess\\ Weight = Actual\\ Weight - Ideal\\ Weight",
    inputs: [
      { id: "actual_weight", label: "Actual Weight (kg)", type: "number", defaultValue: 80 },
      { id: "ideal_weight", label: "Ideal Weight (kg)", type: "number", defaultValue: 65 }
    ],
    outputs: [
      { id: "excess", label: "Excess Weight", formula: "actual_weight - ideal_weight", unit: "kg" }
    ],
    theory: "Excess weight is calculated by subtracting ideal weight from actual weight.",
    seoMeta: { title: "Overweight Calculator | Excess Weight", description: "Calculate excess weight.", keywords: "overweight, excess weight" }
  },
  {
    id: "ponderal-index-calculator",
    name: "Ponderal Index Calculator",
    description: "Calculate Ponderal Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "PI = \\frac{Weight}{Height^3}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "pi", label: "Ponderal Index", formula: "weight / (height^3)", unit: "kg/m³" }
    ],
    theory: "Ponderal Index is a measure of body mass relative to height, similar to BMI but using height cubed.",
    seoMeta: { title: "Ponderal Index Calculator | PI", description: "Calculate Ponderal Index.", keywords: "ponderal index" }
  },
  {
    id: "rfm-calculator",
    name: "RFM Calculator",
    description: "Calculate Relative Fat Mass.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "RFM = 64 - 20 \\times \\frac{Height}{Waist}",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "waist", label: "Waist (cm)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "rfm", label: "Relative Fat Mass", formula: "64 - 20 * (height / waist)", unit: "%" }
    ],
    theory: "RFM is a simple formula to estimate body fat percentage using only height and waist circumference.",
    seoMeta: { title: "RFM Calculator | Relative Fat Mass", description: "Calculate RFM.", keywords: "RFM, relative fat mass" }
  },
  {
    id: "waist-to-hip-ratio-calculator",
    name: "Waist to Hip Ratio Calculator",
    description: "Calculate Waist-Hip Ratio.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "WHR = \\frac{Waist}{Hip}",
    inputs: [
      { id: "waist", label: "Waist (cm)", type: "number", defaultValue: 70 },
      { id: "hip", label: "Hip (cm)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "whr", label: "Waist-Hip Ratio", formula: "waist / hip", unit: "" }
    ],
    theory: "Waist-to-hip ratio is a indicator of health risk associated with fat distribution.",
    seoMeta: { title: "Waist to Hip Ratio Calculator | WHR", description: "Calculate WHR.", keywords: "WHR, waist hip ratio" }
  },
  {
    id: "waist-to-height-ratio-calculator",
    name: "Waist to Height Ratio Calculator",
    description: "Calculate Waist-to-Height Ratio.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "WHtR = \\frac{Waist}{Height}",
    inputs: [
      { id: "waist", label: "Waist (cm)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 }
    ],
    outputs: [
      { id: "whtr", label: "Waist-to-Height Ratio", formula: "waist / height", unit: "" }
    ],
    theory: "Waist-to-height ratio is a measure of fat distribution and health risk.",
    seoMeta: { title: "Waist to Height Ratio Calculator | WHtR", description: "Calculate WHtR.", keywords: "WHtR, waist height ratio" }
  },
  {
    id: "weight-loss-percentage-calculator",
    name: "Weight Loss Percentage Calculator",
    description: "Calculate percentage of weight loss.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Weight\\ Loss\\% = \\frac{Initial\\ Weight - Final\\ Weight}{Initial\\ Weight} \\times 100",
    inputs: [
      { id: "initial_weight", label: "Initial Weight (kg)", type: "number", defaultValue: 80 },
      { id: "final_weight", label: "Final Weight (kg)", type: "number", defaultValue: 72 }
    ],
    outputs: [
      { id: "loss_pct", label: "Weight Loss %", formula: "((initial_weight - final_weight) / initial_weight) * 100", unit: "%" }
    ],
    theory: "Weight loss percentage calculates the proportion of weight lost relative to initial weight.",
    seoMeta: { title: "Weight Loss Percentage Calculator | Loss %", description: "Calculate weight loss %.", keywords: "weight loss percentage" }
  },
  {
    id: "bmi-calculator-for-men",
    name: "BMI Calculator for Men",
    description: "Calculate BMI for men with body fat estimate.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 80 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.75 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" },
      { id: "bf", label: "Estimated Body Fat %", formula: "(1.20 * (weight / (height^2))) + (0.23 * age) - 16.2", unit: "%" }
    ],
    theory: "Adult body fat can be estimated from BMI using Deurenberg formulas.",
    seoMeta: { title: "BMI Calculator for Men | Body Fat Estimate", description: "Calculate BMI for men.", keywords: "BMI men, body fat estimate" }
  },
  {
    id: "bmi-calculator-for-teens",
    name: "BMI Calculator for Teens",
    description: "Calculate BMI for teenagers.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 50 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.6 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" }
    ],
    theory: "Teen BMI is interpreted using percentiles for age and sex.",
    seoMeta: { title: "BMI Calculator for Teens | Teenage BMI", description: "Calculate BMI for teens.", keywords: "teen BMI" }
  },
  {
    id: "bmi-calculator-for-women",
    name: "BMI Calculator for Women",
    description: "Calculate BMI for women with body fat estimate.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 60 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.65 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "" },
      { id: "bf", label: "Estimated Body Fat %", formula: "(1.20 * (weight / (height^2))) + (0.23 * age) - 5.4", unit: "%" }
    ],
    theory: "Adult body fat can be estimated from BMI using Deurenberg formulas.",
    seoMeta: { title: "BMI Calculator for Women | Body Fat Estimate", description: "Calculate BMI for women.", keywords: "BMI women, body fat estimate" }
  },
  {
    id: "bmi-weight-loss-calculator",
    name: "BMI Weight Loss Calculator",
    description: "Calculate weight to lose to reach target BMI.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "Target\\ Weight = BMI\\ Target \\times Height^2",
    inputs: [
      { id: "current_weight", label: "Current Weight (kg)", type: "number", defaultValue: 85 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 },
      { id: "target_bmi", label: "Target BMI", type: "number", defaultValue: 24.9 }
    ],
    outputs: [
      { id: "current_bmi", label: "Current BMI", formula: "current_weight / (height^2)", unit: "" },
      { id: "target_weight", label: "Target Weight", formula: "target_bmi * (height^2)", unit: "kg" },
      { id: "to_lose", label: "Weight to Lose", formula: "current_weight - (target_bmi * (height^2))", unit: "kg" }
    ],
    theory: "Calculate the weight reduction needed to achieve a healthy BMI.",
    seoMeta: { title: "BMI Weight Loss Calculator | Target Weight", description: "Calculate weight loss for BMI.", keywords: "BMI weight loss, target BMI" }
  },
  {
    id: "acft-calculator",
    name: "ACFT Calculator",
    description: "Calculate Army Combat Fitness Test score.",
    category: "health",
    subcategory: "army",
    scientificFormula: "Total\\ Score = MDL + SPT + HRP + SDC + PLK + 2MR",
    inputs: [
      { id: "mdl", label: "Deadlift Score (0-100)", type: "number", defaultValue: 60 },
      { id: "spt", label: "Power Throw Score (0-100)", type: "number", defaultValue: 60 },
      { id: "hrp", label: "Push-ups Score (0-100)", type: "number", defaultValue: 60 },
      { id: "sdc", label: "Sprint-Drag-Carry Score (0-100)", type: "number", defaultValue: 60 },
      { id: "plk", label: "Plank Score (0-100)", type: "number", defaultValue: 60 },
      { id: "tmr", label: "2-Mile Run Score (0-100)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "mdl + spt + hrp + sdc + plk + tmr", unit: "" }
    ],
    theory: "The ACFT is the current fitness test for the US Army.",
    seoMeta: { title: "ACFT Calculator | Army Combat Fitness Test", description: "Calculate ACFT score.", keywords: "ACFT calculator, army fitness" }
  },
  {
    id: "aft-calculator",
    name: "AFT Calculator",
    description: "Calculate US Army Fitness Test score (Old APFT).",
    category: "health",
    subcategory: "army",
    scientificFormula: "AFT = Pushups + Situps + Run\\ Score",
    inputs: [
      { id: "pushups", label: "Push-ups Score (0-100)", type: "number", defaultValue: 70 },
      { id: "situps", label: "Sit-ups Score (0-100)", type: "number", defaultValue: 70 },
      { id: "run", label: "2-Mile Run Score (0-100)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "pushups + situps + run", unit: "" }
    ],
    theory: "The APFT was the previous fitness test for the US Army.",
    seoMeta: { title: "AFT Calculator | Army Fitness Test", description: "Calculate AFT score.", keywords: "AFT calculator, APFT" }
  },
  {
    id: "air-force-pt-calculator",
    name: "Air Force PT Calculator",
    description: "Calculate Air Force PT score.",
    category: "health",
    subcategory: "army",
    scientificFormula: "PT\\ Score = Run + Pushups + Situps + Waist",
    inputs: [
      { id: "run", label: "Run Score (0-60)", type: "number", defaultValue: 50 },
      { id: "pushups", label: "Push-ups Score (0-10)", type: "number", defaultValue: 10 },
      { id: "situps", label: "Sit-ups Score (0-10)", type: "number", defaultValue: 10 },
      { id: "waist", label: "Waist Score (0-20)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "run + pushups + situps + waist", unit: "" }
    ],
    theory: "The Air Force PT test assesses aerobic fitness and body composition.",
    seoMeta: { title: "Air Force PT Calculator | PT Score", description: "Calculate Air Force PT score.", keywords: "Air Force PT" }
  },
  {
    id: "army-body-fat-calculator",
    name: "Army Body Fat Calculator",
    description: "Calculate body fat percentage using Army standards.",
    category: "health",
    subcategory: "army",
    scientificFormula: "Body\\ Fat = 86.010\\log_{10}(Waist-Neck)-70.041\\log_{10}(Height)+36.76",
    inputs: [
      { id: "waist", label: "Waist (inches)", type: "number", defaultValue: 32 },
      { id: "neck", label: "Neck (inches)", type: "number", defaultValue: 15 },
      { id: "height", label: "Height (inches)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "bf", label: "Body Fat %", formula: "86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76", unit: "%" }
    ],
    theory: "The US Army uses tape measurements to estimate body fat percentage.",
    seoMeta: { title: "Army Body Fat Calculator | Army Standards", description: "Calculate army body fat.", keywords: "army body fat" }
  },
  {
    id: "added-sugar-intake-calculator",
    name: "Added Sugar Intake Calculator",
    description: "Calculate percentage of calories from added sugar.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Sugar\\% = \\frac{Added\\ Sugar\\ Calories}{Total\\ Calories} \\times 100",
    inputs: [
      { id: "sugar_g", label: "Added Sugar (g)", type: "number", defaultValue: 30 },
      { id: "total_calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "sugar_calories", label: "Sugar Calories", formula: "sugar_g * 4", unit: "kcal" },
      { id: "pct", label: "Daily Limit Used", formula: "((sugar_g * 4) / total_calories) * 100", unit: "%" }
    ],
    theory: "The WHO recommends limiting added sugar to less than 10% of total energy intake.",
    seoMeta: { title: "Added Sugar Intake Calculator | Sugar Limit", description: "Calculate sugar intake.", keywords: "sugar intake, daily sugar" }
  },
  {
    id: "bee-calculator",
    name: "BEE Calculator",
    description: "Calculate Basal Energy Expenditure.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BEE = 66 + (13.7 \\times W) + (5 \\times H) - (6.8 \\times A)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "bee", label: "BEE", formula: "66 + (13.7 * weight) + (5 * height) - (6.8 * age)", unit: "kcal/day" }
    ],
    theory: "BEE is the amount of energy expended by a person at rest.",
    seoMeta: { title: "BEE Calculator | Basal Energy Expenditure", description: "Calculate BEE.", keywords: "BEE, basal energy" }
  },
  {
    id: "harris-benedict-calculator",
    name: "Harris-Benedict Calculator",
    description: "Calculate BMR using Harris-Benedict equation.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BMR = 88.362 + (13.397 \\times W) + (4.799 \\times H) - (5.677 \\times A)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "bmr", label: "BMR", formula: "88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)", unit: "kcal/day" }
    ],
    theory: "The Harris-Benedict equation is one of the oldest formulas for BMR.",
    seoMeta: { title: "Harris-Benedict Calculator | BMR", description: "Calculate BMR.", keywords: "Harris-Benedict, BMR" }
  },
  {
    id: "katch-mcardle-calculator",
    name: "Katch-McArdle Calculator",
    description: "Calculate BMR using Katch-McArdle equation.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BMR = 370 + (21.6 \\times Lean\\ Body\\ Mass)",
    inputs: [
      { id: "lbm", label: "Lean Body Mass (kg)", type: "number", defaultValue: 55 }
    ],
    outputs: [
      { id: "bmr", label: "BMR", formula: "370 + (21.6 * lbm)", unit: "kcal/day" }
    ],
    theory: "The Katch-McArdle formula accounts for body composition by using lean mass.",
    seoMeta: { title: "Katch-McArdle Calculator | BMR", description: "Calculate BMR from lean mass.", keywords: "Katch-McArdle, BMR" }
  },
  {
    id: "calorie-deficit-calculator",
    name: "Calorie Deficit Calculator",
    description: "Calculate expected weight loss from a deficit.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Deficit = Maintenance\\ Calories - Target\\ Calories",
    inputs: [
      { id: "maintenance", label: "Maintenance Calories", type: "number", defaultValue: 2500 },
      { id: "target", label: "Target Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "deficit", label: "Calorie Deficit", formula: "maintenance - target", unit: "kcal/day" },
      { id: "loss", label: "Expected Weight Loss", formula: "(maintenance - target) / 7700", unit: "kg/week" }
    ],
    theory: "A calorie deficit is necessary for weight loss. ~3500 kcal equals 1 lb of fat.",
    seoMeta: { title: "Calorie Deficit Calculator | Weight Loss", description: "Calculate calorie deficit.", keywords: "calorie deficit, weight loss" }
  },
  {
    id: "carb-calculator",
    name: "Carb Calculator",
    description: "Calculate daily carbohydrate requirement.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Carbs = \\frac{Calories \\times Carb\\%}{4}",
    inputs: [
      { id: "calories", label: "Total Calories", type: "number", defaultValue: 2000 },
      { id: "carb_pct", label: "Carbs %", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "carbs", label: "Daily Carbs", formula: "(calories * (carb_pct / 100)) / 4", unit: "g" }
    ],
    theory: "Carbohydrates provide 4 kcal per gram.",
    seoMeta: { title: "Carb Calculator | Daily Carbs", description: "Calculate daily carbohydrates.", keywords: "carb calculator, carbohydrates" }
  },
  {
    id: "eer-calculator",
    name: "EER Calculator",
    description: "Calculate Estimated Energy Requirement.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "EER = 354 - (6.91 \\times Age) + PA \\times ((9.36 \\times W) + (726 \\times H))",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 },
      { id: "pa", label: "Physical Activity Factor", type: "select", options: [{ label: "Sedentary", value: "1.0" }, { label: "Active", value: "1.25" }], defaultValue: "1.0" }
    ],
    outputs: [
      { id: "eer", label: "EER", formula: "354 - (6.91 * age) + pa * ((9.36 * weight) + (726 * height))", unit: "kcal/day" }
    ],
    theory: "EER is the average dietary energy intake predicted to maintain energy balance.",
    seoMeta: { title: "EER Calculator | Estimated Energy Requirement", description: "Calculate EER.", keywords: "EER, energy requirement" }
  },
  {
    id: "fat-intake-calculator",
    name: "Fat Intake Calculator",
    description: "Calculate daily fat requirement.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Fat = \\frac{Calories \\times Fat\\%}{9}",
    inputs: [
      { id: "calories", label: "Total Calories", type: "number", defaultValue: 2000 },
      { id: "fat_pct", label: "Fat %", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "fat", label: "Daily Fat Intake", formula: "(calories * (fat_pct / 100)) / 9", unit: "g" }
    ],
    theory: "Fats provide 9 kcal per gram.",
    seoMeta: { title: "Fat Intake Calculator | Daily Fat", description: "Calculate daily fat intake.", keywords: "fat intake, daily fat" }
  },
  {
    id: "fiber-calculator",
    name: "Fiber Calculator",
    description: "Calculate recommended daily fiber.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Fiber = 14 \\times \\frac{Calories}{1000}",
    inputs: [
      { id: "calories", label: "Total Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "fiber", label: "Recommended Fiber", formula: "14 * (calories / 1000)", unit: "g/day" }
    ],
    theory: "The recommended intake is 14 grams of fiber per 1,000 calories.",
    seoMeta: { title: "Fiber Calculator | Daily Fiber", description: "Calculate recommended fiber.", keywords: "fiber calculator, daily fiber" }
  },
  {
    id: "keto-calculator",
    name: "Keto Calculator",
    description: "Calculate net carbs for Keto diet.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Net\\ Carbs = Total\\ Carbs - Fiber",
    inputs: [
      { id: "total_carbs", label: "Total Carbs (g)", type: "number", defaultValue: 50 },
      { id: "fiber", label: "Fiber (g)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "net_carbs", label: "Net Carbs", formula: "total_carbs - fiber", unit: "g" }
    ],
    theory: "Keto diet limits net carbs to induce ketosis.",
    seoMeta: { title: "Keto Calculator | Net Carbs", description: "Calculate net carbs for keto.", keywords: "keto calculator, net carbs" }
  },
  {
    id: "net-carbs-calculator",
    name: "Net Carbs Calculator",
    description: "Calculate net carbs from total carbs, fiber, and sugar alcohols.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Net\\ Carbs = Total\\ Carbs - Fiber - Sugar\\ Alcohols",
    inputs: [
      { id: "total_carbs", label: "Total Carbs (g)", type: "number", defaultValue: 50 },
      { id: "fiber", label: "Fiber (g)", type: "number", defaultValue: 10 },
      { id: "sugar_alcohols", label: "Sugar Alcohols (g)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "net_carbs", label: "Net Carbs", formula: "total_carbs - fiber - sugar_alcohols", unit: "g" }
    ],
    theory: "Net carbs are the carbohydrates that are absorbed by the body.",
    seoMeta: { title: "Net Carbs Calculator | Absorbable Carbs", description: "Calculate net carbs.", keywords: "net carbs" }
  },
  {
    id: "sodium-in-salt-calculator",
    name: "Sodium in Salt Calculator",
    description: "Convert salt to sodium.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Sodium = Salt \\times 0.393",
    inputs: [
      { id: "salt", label: "Salt (g)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "sodium", label: "Sodium", formula: "salt * 0.393 * 1000", unit: "mg" }
    ],
    theory: "Salt (NaCl) is approx 40% sodium by weight.",
    seoMeta: { title: "Sodium in Salt Calculator | Salt to Sodium", description: "Convert salt to sodium.", keywords: "sodium in salt" }
  },
  {
    id: "weight-watchers-points-calculator",
    name: "Weight Watchers Points Calculator",
    description: "Calculate points for foods.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Points = (Calories \\times 0.0305) + (Fat \\times 0.275) + (Fiber \\times 0.12)",
    inputs: [
      { id: "calories", label: "Calories", type: "number", defaultValue: 200 },
      { id: "fat", label: "Fat (g)", type: "number", defaultValue: 5 },
      { id: "fiber", label: "Fiber (g)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "points", label: "Points", formula: "(calories * 0.0305) + (fat * 0.275) + (fiber * 0.12)", unit: "" }
    ],
    theory: "Weight Watchers points are calculated based on macronutrient content.",
    seoMeta: { title: "Weight Watchers Points Calculator | Points", description: "Calculate points.", keywords: "weight watchers points" }
  },
  {
    id: "diabetic-ketoacidosis-calculator",
    name: "Diabetic Ketoacidosis Calculator",
    description: "Calculate Anion Gap for DKA diagnosis.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "Anion\\ Gap = Na - (Cl + HCO_3)",
    inputs: [
      { id: "na", label: "Sodium (Na) mEq/L", type: "number", defaultValue: 140 },
      { id: "cl", label: "Chloride (Cl) mEq/L", type: "number", defaultValue: 105 },
      { id: "hco3", label: "Bicarbonate (HCO3) mEq/L", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "gap", label: "Anion Gap", formula: "na - (cl + hco3)", unit: "mEq/L" }
    ],
    theory: "Anion gap is used to help identify the cause of metabolic acidosis.",
    seoMeta: { title: "Diabetic Ketoacidosis Calculator | Anion Gap", description: "Calculate Anion Gap.", keywords: "anion gap, DKA" }
  },
  {
    id: "glycemic-load-calculator",
    name: "Glycemic Load Calculator",
    description: "Calculate Glycemic Load of a food portion.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "GL = \\frac{GI \\times Carbs}{100}",
    inputs: [
      { id: "gi", label: "Glycemic Index", type: "number", defaultValue: 50 },
      { id: "carbs", label: "Carbohydrates (g)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "gl", label: "Glycemic Load", formula: "(gi * carbs) / 100", unit: "" }
    ],
    theory: "Glycemic load accounts for both the quality and quantity of carbohydrates.",
    seoMeta: { title: "Glycemic Load Calculator | GL", description: "Calculate Glycemic Load.", keywords: "glycemic load, GL" }
  },
  {
    id: "insulin-dosage-calculator",
    name: "Insulin Dosage Calculator",
    description: "Calculate recommended insulin dose.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "Dose = \\frac{Carbs}{ICR} + \\frac{Current\\ BG - Target\\ BG}{CF}",
    inputs: [
      { id: "carbs", label: "Carbs to Consume (g)", type: "number", defaultValue: 60 },
      { id: "icr", label: "Insulin-to-Carb Ratio", type: "number", defaultValue: 15 },
      { id: "current_bg", label: "Current Blood Glucose", type: "number", defaultValue: 150 },
      { id: "target_bg", label: "Target Blood Glucose", type: "number", defaultValue: 100 },
      { id: "cf", label: "Correction Factor", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "dose", label: "Insulin Dose", formula: "(carbs / icr) + ((current_bg - target_bg) / cf)", unit: "units" }
    ],
    theory: "Insulin dosage is calculated based on carb intake and glucose correction.",
    seoMeta: { title: "Insulin Dosage Calculator | Dose", description: "Calculate insulin dose.", keywords: "insulin dose, diabetes" }
  },
  {
    id: "quicki-calculator",
    name: "QUICKI Calculator",
    description: "Calculate Quantitative Insulin Sensitivity Check Index.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "QUICKI = \\frac{1}{\\log(Insulin) + \\log(Glucose)}",
    inputs: [
      { id: "insulin", label: "Fasting Insulin (µU/mL)", type: "number", defaultValue: 10 },
      { id: "glucose", label: "Fasting Glucose (mg/dL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "quicki", label: "QUICKI Score", formula: "1 / (log10(insulin) + log10(glucose))", unit: "" }
    ],
    theory: "QUICKI is a method for determining insulin sensitivity.",
    seoMeta: { title: "QUICKI Calculator | Insulin Sensitivity", description: "Calculate QUICKI.", keywords: "QUICKI, insulin sensitivity" }
  },
  {
    id: "cholesterol-ratio-calculator",
    name: "Cholesterol Ratio Calculator",
    description: "Calculate Total Cholesterol to HDL ratio.",
    category: "health",
    subcategory: "metabolic-disorders",
    scientificFormula: "Ratio = \\frac{Total\\ Cholesterol}{HDL}",
    inputs: [
      { id: "tc", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "hdl", label: "HDL Cholesterol (mg/dL)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "ratio", label: "Ratio", formula: "tc / hdl", unit: "" }
    ],
    theory: "A lower ratio indicates a lower risk of heart disease.",
    seoMeta: { title: "Cholesterol Ratio Calculator | TC/HDL", description: "Calculate cholesterol ratio.", keywords: "cholesterol ratio" }
  },
  {
    id: "cholesterol-units-converter",
    name: "Cholesterol Units Converter",
    description: "Convert cholesterol between mg/dL and mmol/L.",
    category: "health",
    subcategory: "metabolic-disorders",
    scientificFormula: "mmol/L = mg/dL \\times 0.0259",
    inputs: [
      { id: "val", label: "Value", type: "number", defaultValue: 200 },
      { id: "from_unit", label: "From", type: "select", options: [{ label: "mg/dL", value: "mg" }, { label: "mmol/L", value: "mmol" }], defaultValue: "mg" }
    ],
    outputs: [
      { id: "res", label: "Converted Value", formula: "from_unit == 'mg' ? val * 0.0259 : val / 0.0259", unit: "mmol/L" }
    ],
    theory: "To convert mg/dL to mmol/L, multiply by 0.0259.",
    seoMeta: { title: "Cholesterol Units Converter | Conversion", description: "Convert cholesterol units.", keywords: "cholesterol converter" }
  },
  {
    id: "ldl-calculator",
    name: "LDL Calculator",
    description: "Calculate LDL cholesterol using Friedewald equation.",
    category: "health",
    subcategory: "metabolic-disorders",
    scientificFormula: "LDL = TC - HDL - \\frac{TG}{5}",
    inputs: [
      { id: "tc", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "hdl", label: "HDL (mg/dL)", type: "number", defaultValue: 50 },
      { id: "tg", label: "Triglycerides (mg/dL)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "ldl", label: "LDL Cholesterol", formula: "tc - hdl - (tg / 5)", unit: "mg/dL" }
    ],
    theory: "The Friedewald equation estimates LDL cholesterol.",
    seoMeta: { title: "LDL Calculator | Friedewald Equation", description: "Calculate LDL.", keywords: "LDL calculator, Friedewald" }
  },
  {
    id: "vldl-calculator",
    name: "VLDL Calculator",
    description: "Calculate VLDL cholesterol.",
    category: "health",
    subcategory: "metabolic-disorders",
    scientificFormula: "VLDL = \\frac{Triglycerides}{5}",
    inputs: [
      { id: "tg", label: "Triglycerides (mg/dL)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "vldl", label: "VLDL Cholesterol", formula: "tg / 5", unit: "mg/dL" }
    ],
    theory: "VLDL cholesterol is estimated by dividing triglycerides by 5.",
    seoMeta: { title: "VLDL Calculator | Very Low Density", description: "Calculate VLDL.", keywords: "VLDL calculator" }
  },
  {
    id: "ahi-calculator",
    name: "AHI Calculator",
    description: "Calculate Apnea-Hypopnea Index.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "AHI = \\frac{Apneas + Hypopneas}{Hours\\ of\\ Sleep}",
    inputs: [
      { id: "apneas", label: "Total Apneas", type: "number", defaultValue: 10 },
      { id: "hypopneas", label: "Total Hypopneas", type: "number", defaultValue: 15 },
      { id: "hours", label: "Hours of Sleep", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "ahi", label: "AHI", formula: "(apneas + hypopneas) / hours", unit: "" }
    ],
    theory: "AHI is used to assess the severity of sleep apnea.",
    seoMeta: { title: "AHI Calculator | Apnea-Hypopnea Index", description: "Calculate AHI.", keywords: "AHI, sleep apnea" }
  },
  {
    id: "qtc-calculator",
    name: "QTc Calculator",
    description: "Calculate corrected QT interval (Bazett's formula).",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "QTc = \\frac{QT}{\\sqrt{RR}}",
    inputs: [
      { id: "qt", label: "QT Interval (ms)", type: "number", defaultValue: 400 },
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "qtc", label: "QTc", formula: "qt / sqrt(60 / hr)", unit: "ms" }
    ],
    theory: "Bazett's formula is the most common method for correcting the QT interval for heart rate.",
    seoMeta: { title: "QTc Calculator | Bazett's Formula", description: "Calculate corrected QT.", keywords: "QTc, Bazett" }
  },
  {
    id: "chads2-score-calculator",
    name: "CHADS2 Score Calculator",
    description: "Calculate stroke risk in patients with atrial fibrillation.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = C + H + A + D + S_2",
    inputs: [
      { id: "c", label: "Congestive Heart Failure", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "h", label: "Hypertension", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "a", label: "Age >= 75", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "d", label: "Diabetes Mellitus", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "s", label: "Prior Stroke or TIA", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "2" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "CHADS2 Score", formula: "c + h + a + d + s", unit: "" }
    ],
    theory: "CHADS2 score is used to estimate stroke risk and guide anticoagulation therapy.",
    seoMeta: { title: "CHADS2 Score Calculator | Stroke Risk", description: "Calculate CHADS2 score.", keywords: "CHADS2, stroke risk" }
  },
  {
    id: "rate-pressure-product-calculator",
    name: "Rate Pressure Product Calculator",
    description: "Calculate Rate Pressure Product (RPP).",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "RPP = HR \\times SBP",
    inputs: [
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 72 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "rpp", label: "Rate Pressure Product", formula: "hr * sbp", unit: "" }
    ],
    theory: "RPP is a measure of myocardial oxygen consumption.",
    seoMeta: { title: "Rate Pressure Product Calculator | RPP", description: "Calculate RPP.", keywords: "RPP, heart rate pressure" }
  },
  {
    id: "pulse-pressure-calculator",
    name: "Pulse Pressure Calculator",
    description: "Calculate Pulse Pressure.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "PP = SBP - DBP",
    inputs: [
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 },
      { id: "dbp", label: "Diastolic BP (mmHg)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "pp", label: "Pulse Pressure", formula: "sbp - dbp", unit: "mmHg" }
    ],
    theory: "Pulse pressure is the difference between systolic and diastolic blood pressure.",
    seoMeta: { title: "Pulse Pressure Calculator | PP", description: "Calculate pulse pressure.", keywords: "pulse pressure" }
  },
  {
    id: "svr-calculator",
    name: "SVR Calculator",
    description: "Calculate Systemic Vascular Resistance.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "SVR = 80 \\times \\frac{MAP - CVP}{CO}",
    inputs: [
      { id: "map", label: "Mean Arterial Pressure (mmHg)", type: "number", defaultValue: 93 },
      { id: "cvp", label: "Central Venous Pressure (mmHg)", type: "number", defaultValue: 5 },
      { id: "co", label: "Cardiac Output (L/min)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "svr", label: "SVR", formula: "80 * (map - cvp) / co", unit: "dynes-sec/cm^5" }
    ],
    theory: "SVR is the resistance to blood flow offered by the systemic vasculature.",
    seoMeta: { title: "SVR Calculator | Systemic Vascular Resistance", description: "Calculate SVR.", keywords: "SVR, vascular resistance" }
  },
  {
    id: "hr-from-ecg-calculator",
    name: "Heart Rate from ECG Calculator",
    description: "Calculate heart rate from ECG small boxes.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "HR = \\frac{1500}{\\text{Small Boxes}}",
    inputs: [
      { id: "boxes", label: "Small Boxes between R-R", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "hr", label: "Heart Rate", formula: "1500 / boxes", unit: "bpm" }
    ],
    theory: "At a standard paper speed of 25 mm/s, 1500 small boxes equal 1 minute.",
    seoMeta: { title: "Heart Rate from ECG Calculator | ECG HR", description: "Calculate HR from ECG.", keywords: "ECG heart rate" }
  },
  {
    id: "bishop-score-calculator",
    name: "Bishop Score Calculator",
    description: "Assess cervical ripeness for labor induction.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Score = Dilation + Effacement + Station + Consistency + Position",
    inputs: [
      { id: "dilation", label: "Dilation (cm)", type: "select", options: [{ label: "Closed (0)", value: "0" }, { label: "1-2 cm (1)", value: "1" }, { label: "3-4 cm (2)", value: "2" }, { label: ">5 cm (3)", value: "3" }], defaultValue: "0" },
      { id: "effacement", label: "Effacement (%)", type: "select", options: [{ label: "0-30% (0)", value: "0" }, { label: "40-50% (1)", value: "1" }, { label: "60-70% (2)", value: "2" }, { label: ">80% (3)", value: "3" }], defaultValue: "0" },
      { id: "station", label: "Station", type: "select", options: [{ label: "-3 (0)", value: "0" }, { label: "-2 (1)", value: "1" }, { label: "-1, 0 (2)", value: "2" }, { label: "+1, +2 (3)", value: "3" }], defaultValue: "0" },
      { id: "consistency", label: "Consistency", type: "select", options: [{ label: "Firm (0)", value: "0" }, { label: "Medium (1)", value: "1" }, { label: "Soft (2)", value: "2" }], defaultValue: "0" },
      { id: "position", label: "Position", type: "select", options: [{ label: "Posterior (0)", value: "0" }, { label: "Midposition (1)", value: "1" }, { label: "Anterior (2)", value: "2" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Bishop Score", formula: "dilation + effacement + station + consistency + position", unit: "" }
    ],
    theory: "A Bishop score of 6 or less indicates that induction is unlikely to be successful.",
    seoMeta: { title: "Bishop Score Calculator | Cervical Ripeness", description: "Calculate Bishop score.", keywords: "Bishop score, labor induction" }
  },
  {
    id: "apgar-score-calculator",
    name: "APGAR Score Calculator",
    description: "Assess health of newborn at 1 and 5 minutes.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Score = A + P + G + A + R",
    inputs: [
      { id: "appearance", label: "Appearance (Skin Color)", type: "select", options: [{ label: "Blue/Pale (0)", value: "0" }, { label: "Body pink, limbs blue (1)", value: "1" }, { label: "All pink (2)", value: "2" }], defaultValue: "2" },
      { id: "pulse", label: "Pulse (Heart Rate)", type: "select", options: [{ label: "Absent (0)", value: "0" }, { label: "<100 bpm (1)", value: "1" }, { label: ">100 bpm (2)", value: "2" }], defaultValue: "2" },
      { id: "grimace", label: "Grimace (Reflex Irritability)", type: "select", options: [{ label: "No response (0)", value: "0" }, { label: "Grimace (1)", value: "1" }, { label: "Cry/Withdraw (2)", value: "2" }], defaultValue: "2" },
      { id: "activity", label: "Activity (Muscle Tone)", type: "select", options: [{ label: "Limp (0)", value: "0" }, { label: "Some flexion (1)", value: "1" }, { label: "Active motion (2)", value: "2" }], defaultValue: "2" },
      { id: "respiration", label: "Respiration", type: "select", options: [{ label: "Absent (0)", value: "0" }, { label: "Slow/Irregular (1)", value: "1" }, { label: "Good cry (2)", value: "2" }], defaultValue: "2" }
    ],
    outputs: [
      { id: "score", label: "APGAR Score", formula: "appearance + pulse + grimace + activity + respiration", unit: "" }
    ],
    theory: "APGAR score assesses newborn health at birth. Scores 7-10 are normal.",
    seoMeta: { title: "APGAR Score Calculator | Newborn Assessment", description: "Calculate APGAR score.", keywords: "APGAR score, newborn" }
  },
  {
    id: "gestational-age-calculator",
    name: "Gestational Age Calculator",
    description: "Calculate gestational age in weeks and days.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Age = Current\\ Date - LMP",
    inputs: [
      { id: "days_since_lmp", label: "Days since LMP", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "weeks", label: "Weeks", formula: "floor(days_since_lmp / 7)", unit: "weeks" },
      { id: "days", label: "Extra Days", formula: "days_since_lmp % 7", unit: "days" }
    ],
    theory: "Gestational age is calculated from the first day of the last menstrual period.",
    seoMeta: { title: "Gestational Age Calculator | Weeks & Days", description: "Calculate gestational age.", keywords: "gestational age" }
  },
  {
    id: "alcohol-unit-calculator",
    name: "Alcohol Unit Calculator",
    description: "Convert drinks to standard alcohol units.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Units = (Volume (ml) × ABV) / 1000",
    inputs: [
      { id: "volume", label: "Volume (ml)", type: "number", defaultValue: 330 },
      { id: "abv", label: "Alcohol By Volume (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "units", label: "Standard Units", formula: "(volume * abv) / 1000", unit: "units" }
    ],
    theory: "One standard unit contains 10 g of pure alcohol.",
    seoMeta: { title: "Alcohol Unit Calculator", description: "Convert drinks to alcohol units.", keywords: "alcohol units, drinking" }
  },
  {
    id: "cage-questionnaire-calculator",
    name: "CAGE Questionnaire Calculator",
    description: "Screen for problematic alcohol use.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = C + A + G + E",
    inputs: [
      { id: "c", label: "Cut down? (yes=1/no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "a", label: "Annoyed? (yes=1/no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "g", label: "Guilty? (yes=1/no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "e", label: "Eye‑opener? (yes=1/no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "CAGE Score", formula: "c + a + g + e", unit: "" }
    ],
    theory: "A score of 2 or more suggests hazardous drinking.",
    seoMeta: { title: "CAGE Questionnaire Calculator", description: "Screen alcohol use.", keywords: "CAGE, alcohol screening" }
  },
  {
    id: "ciwa-calculator",
    name: "CIWA Calculator",
    description: "Clinical Institute Withdrawal Assessment for Alcohol.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = sum of symptom scores",
    inputs: [
      { id: "nausea", label: "Nausea (0‑7)", type: "number", defaultValue: 0 },
      { id: "tremor", label: "Tremor (0‑7)", type: "number", defaultValue: 0 },
      { id: "sweating", label: "Sweating (0‑7)", type: "number", defaultValue: 0 },
      { id: "anxiety", label: "Anxiety (0‑7)", type: "number", defaultValue: 0 },
      { id: "visual", label: "Visual disturbances (0‑7)", type: "number", defaultValue: 0 },
      { id: "auditory", label: "Auditory disturbances (0‑7)", type: "number", defaultValue: 0 },
      { id: "paroxysmal", label: "Paroxysmal agitation (0‑7)", type: "number", defaultValue: 0 },
      { id: "tactile", label: "Tactile disturbances (0‑7)", type: "number", defaultValue: 0 },
      { id: "headache", label: "Headache (0‑7)", type: "number", defaultValue: 0 },
      { id: "orientation", label: "Orientation (0‑4)", type: "number", defaultValue: 0 },
      { id: "vital", label: "Vital signs (0‑4)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "CIWA Total", formula: "nausea + tremor + sweating + anxiety + visual + auditory + paroxysmal + tactile + headache + orientation + vital", unit: "" }
    ],
    theory: "Score > 10 indicates need for medication.",
    seoMeta: { title: "CIWA Calculator", description: "Assess alcohol withdrawal severity.", keywords: "CIWA, alcohol withdrawal" }
  },
  {
    id: "pack-year-calculator",
    name: "Pack Year Calculator",
    description: "Calculate smoking exposure in pack‑years.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "PackYears = (Cigarettes per day / 20) × Years smoked",
    inputs: [
      { id: "cigarettes", label: "Cigarettes per day", type: "number", defaultValue: 20 },
      { id: "years", label: "Years smoked", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "packyears", label: "Pack‑years", formula: "(cigarettes / 20) * years", unit: "" }
    ],
    theory: "One pack‑year equals smoking 20 cigarettes daily for one year.",
    seoMeta: { title: "Pack Year Calculator", description: "Calculate smoking exposure.", keywords: "pack years, smoking" }
  },
  {
    id: "smoking-recovery-calculator",
    name: "Smoking Recovery Calculator",
    description: "Estimate health improvement after quitting smoking.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "RiskReduction = 0.5 × YearsQuit",
    inputs: [
      { id: "years_quit", label: "Years since quitting", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "reduction", label: "Risk Reduction (% )", formula: "0.5 * years_quit", unit: "%" }
    ],
    theory: "Risk of heart disease drops roughly 50% after one year of cessation.",
    seoMeta: { title: "Smoking Recovery Calculator", description: "Estimate health gains after quitting.", keywords: "smoking cessation, health improvement" }
  },
  {
    id: "standard-drink-calculator",
    name: "Standard Drink Calculator",
    description: "Convert drinks to standard drink equivalents.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Standard = (Volume × ABV × 0.789) / 10",
    inputs: [
      { id: "volume", label: "Volume (ml)", type: "number", defaultValue: 355 },
      { id: "abv", label: "ABV (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "standard", label: "Standard Drinks", formula: "(volume * abv * 0.789) / 10", unit: "" }
    ],
    theory: "One standard drink contains ~10 g of pure alcohol.",
    seoMeta: { title: "Standard Drink Calculator", description: "Calculate standard drink equivalents.", keywords: "standard drink, alcohol" }
  },
  {
    id: "fena-calculator",
    name: "FENa Calculator",
    description: "Calculate Fractional Excretion of Sodium.",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "FENa = \\frac{U_{Na} \\times P_{Cr}}{P_{Na} \\times U_{Cr}} \\times 100",
    inputs: [
      { id: "u_na", label: "Urine Sodium (mEq/L)", type: "number", defaultValue: 40 },
      { id: "p_na", label: "Plasma Sodium (mEq/L)", type: "number", defaultValue: 140 },
      { id: "u_cr", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 },
      { id: "p_cr", label: "Plasma Creatinine (mg/dL)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "fena", label: "FENa", formula: "((u_na * p_cr) / (p_na * u_cr)) * 100", unit: "%" }
    ],
    theory: "FENa < 1% suggests prerenal cause; > 2% suggests acute tubular necrosis.",
    seoMeta: { title: "FENa Calculator | Fractional Excretion", description: "Calculate FENa.", keywords: "FENa, kidney function" }
  },
  {
    id: "bun-creatinine-ratio-calculator",
    name: "BUN Creatinine Ratio Calculator",
    description: "Calculate BUN to Creatinine ratio.",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "Ratio = \\frac{BUN}{Creatinine}",
    inputs: [
      { id: "bun", label: "BUN (mg/dL)", type: "number", defaultValue: 15 },
      { id: "cr", label: "Creatinine (mg/dL)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "ratio", label: "BUN/Cr Ratio", formula: "bun / cr", unit: "" }
    ],
    theory: "A high ratio suggests prerenal causes of kidney injury.",
    seoMeta: { title: "BUN Creatinine Ratio Calculator", description: "Calculate BUN/Cr ratio.", keywords: "BUN, creatinine ratio" }
  },
  {
    id: "albumin-creatinine-ratio-calculator",
    name: "Albumin Creatinine Ratio Calculator",
    description: "Calculate Urine Albumin to Creatinine Ratio (UACR).",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "UACR = \\frac{Albumin}{Creatinine}",
    inputs: [
      { id: "alb", label: "Urine Albumin (mg/dL)", type: "number", defaultValue: 30 },
      { id: "cr", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "uacr", label: "UACR", formula: "(alb / cr) * 1000", unit: "mg/g" }
    ],
    theory: "UACR is used to screen for kidney disease in people with diabetes.",
    seoMeta: { title: "Albumin Creatinine Ratio Calculator | UACR", description: "Calculate UACR.", keywords: "UACR, kidney disease" }
  },
  {
    id: "bladder-volume-calculator",
    name: "Bladder Volume Calculator",
    description: "Calculate bladder volume from ultrasound measurements.",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "Volume = Width \\times Length \\times Depth \\times 0.7",
    inputs: [
      { id: "w", label: "Width (cm)", type: "number", defaultValue: 5 },
      { id: "l", label: "Length (cm)", type: "number", defaultValue: 6 },
      { id: "d", label: "Depth (cm)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "vol", label: "Volume", formula: "w * l * d * 0.7", unit: "ml" }
    ],
    theory: "The formula estimates bladder volume from 3D measurements.",
    seoMeta: { title: "Bladder Volume Calculator | Ultrasound", description: "Calculate bladder volume.", keywords: "bladder volume, ultrasound" }
  },
  {
    id: "urine-output-calculator",
    name: "Urine Output Calculator",
    description: "Calculate urine output rate.",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "Output = \\frac{Volume}{Weight \\times Hours}",
    inputs: [
      { id: "vol", label: "Urine Volume (ml)", type: "number", defaultValue: 1000 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "hours", label: "Time (hours)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "output", label: "Urine Output", formula: "vol / (weight * hours)", unit: "ml/kg/hr" }
    ],
    theory: "Normal urine output is typically > 0.5 ml/kg/hr.",
    seoMeta: { title: "Urine Output Calculator | Rate", description: "Calculate urine output rate.", keywords: "urine output" }
  },
  {
    id: "psa-density-calculator",
    name: "PSA Density Calculator",
    description: "Calculate PSA density.",
    category: "health",
    subcategory: "urology-nephrology",
    scientificFormula: "Density = \\frac{PSA}{\\text{Prostate Volume}}",
    inputs: [
      { id: "psa", label: "PSA (ng/mL)", type: "number", defaultValue: 4.0 },
      { id: "vol", label: "Prostate Volume (mL)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "density", label: "PSA Density", formula: "psa / vol", unit: "ng/mL/cc" }
    ],
    theory: "PSA density helps distinguish between BPH and prostate cancer.",
    seoMeta: { title: "PSA Density Calculator | Prostate", description: "Calculate PSA density.", keywords: "PSA density, prostate" }
  },
  {
    id: "corrected-calcium-calculator",
    name: "Corrected Calcium Calculator",
    description: "Calculate corrected calcium for hypoalbuminemia.",
    category: "health",
    subcategory: "electrolytes-fluids",
    scientificFormula: "Ca_{corrected} = Ca + 0.8 \\times (4.0 - Albumin)",
    inputs: [
      { id: "ca", label: "Measured Calcium (mg/dL)", type: "number", defaultValue: 8.5 },
      { id: "alb", label: "Albumin (g/dL)", type: "number", defaultValue: 3.0 }
    ],
    outputs: [
      { id: "corr_ca", label: "Corrected Calcium", formula: "ca + 0.8 * (4.0 - alb)", unit: "mg/dL" }
    ],
    theory: "Calcium binds to albumin. Low albumin lowers total calcium but not ionized calcium.",
    seoMeta: { title: "Corrected Calcium Calculator | Hypoalbuminemia", description: "Calculate corrected calcium.", keywords: "corrected calcium" }
  },
  {
    id: "free-water-deficit-calculator",
    name: "Free Water Deficit Calculator",
    description: "Calculate free water deficit in hypernatremia.",
    category: "health",
    subcategory: "electrolytes-fluids",
    scientificFormula: "Deficit = TBW \\times (\\frac{Na}{140} - 1)",
    inputs: [
      { id: "na", label: "Serum Sodium (mEq/L)", type: "number", defaultValue: 155 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "0.6" }, { label: "Female", value: "0.5" }], defaultValue: "0.6" }
    ],
    outputs: [
      { id: "deficit", label: "Free Water Deficit", formula: "(weight * gender) * ((na / 140) - 1)", unit: "L" }
    ],
    theory: "Free water deficit estimates the amount of water needed to correct hypernatremia.",
    seoMeta: { title: "Free Water Deficit Calculator | Hypernatremia", description: "Calculate free water deficit.", keywords: "free water deficit" }
  },
  {
    id: "serum-osmolality-calculator",
    name: "Serum Osmolality Calculator",
    description: "Calculate measured serum osmolality.",
    category: "health",
    subcategory: "electrolytes-fluids",
    scientificFormula: "Osmolality = 2 \\times Na + \\frac{Glucose}{18} + \\frac{BUN}{2.8}",
    inputs: [
      { id: "na", label: "Sodium (mEq/L)", type: "number", defaultValue: 140 },
      { id: "glucose", label: "Glucose (mg/dL)", type: "number", defaultValue: 90 },
      { id: "bun", label: "BUN (mg/dL)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "osm", label: "Serum Osmolality", formula: "(2 * na) + (glucose / 18) + (bun / 2.8)", unit: "mOsm/kg" }
    ],
    theory: "Serum osmolality measures the concentration of solutes in the blood.",
    seoMeta: { title: "Serum Osmolality Calculator | Blood", description: "Calculate serum osmolality.", keywords: "serum osmolality" }
  },
  {
    id: "winters-formula-calculator",
    name: "Winters' Formula Calculator",
    description: "Calculate expected pCO2 in metabolic acidosis.",
    category: "health",
    subcategory: "electrolytes-fluids",
    scientificFormula: "pCO2 = 1.5 \\times HCO_3 + 8 \\pm 2",
    inputs: [
      { id: "hco3", label: "Bicarbonate (mEq/L)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "pco2", label: "Expected pCO2", formula: "(1.5 * hco3) + 8", unit: "mmHg" }
    ],
    theory: "Winters' formula predicts the expected respiratory compensation in metabolic acidosis.",
    seoMeta: { title: "Winters' Formula Calculator | Acidosis", description: "Calculate expected pCO2.", keywords: "Winters formula, acidosis" }
  },
  {
    id: "total-body-water-calculator",
    name: "Total Body Water Calculator",
    description: "Calculate total body water.",
    category: "health",
    subcategory: "electrolytes-fluids",
    scientificFormula: "TBW = Weight \\times Factor",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "0.6" }, { label: "Female", value: "0.5" }], defaultValue: "0.6" }
    ],
    outputs: [
      { id: "tbw", label: "Total Body Water", formula: "weight * gender", unit: "L" }
    ],
    theory: "TBW is the total amount of water in the human body.",
    seoMeta: { title: "Total Body Water Calculator | TBW", description: "Calculate total body water.", keywords: "total body water, TBW" }
  },
  {
    id: "anc-calculator",
    name: "ANC Calculator",
    description: "Calculate Absolute Neutrophil Count.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ANC = WBC \\times \\frac{\\%Neutrophils + \\%Bands}{100}",
    inputs: [
      { id: "wbc", label: "WBC Count (cells/mcL)", type: "number", defaultValue: 5000 },
      { id: "neut", label: "Neutrophils (%)", type: "number", defaultValue: 60 },
      { id: "bands", label: "Bands (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "anc", label: "ANC", formula: "wbc * ((neut + bands) / 100)", unit: "cells/mcL" }
    ],
    theory: "ANC measures the number of neutrophil granulocytes in the blood.",
    seoMeta: { title: "ANC Calculator | Absolute Neutrophil Count", description: "Calculate ANC.", keywords: "ANC, neutrophils" }
  },
  {
    id: "mentzer-index-calculator",
    name: "Mentzer Index Calculator",
    description: "Differentiate between iron deficiency anemia and thalassemia.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Index = \\frac{MCV}{RBC}",
    inputs: [
      { id: "mcv", label: "MCV (fL)", type: "number", defaultValue: 80 },
      { id: "rbc", label: "RBC Count (million/mcL)", type: "number", defaultValue: 4.5 }
    ],
    outputs: [
      { id: "index", label: "Mentzer Index", formula: "mcv / rbc", unit: "" }
    ],
    theory: "Index < 13 suggests thalassemia; > 13 suggests iron deficiency.",
    seoMeta: { title: "Mentzer Index Calculator | Anemia", description: "Calculate Mentzer index.", keywords: "Mentzer index, anemia" }
  },
  {
    id: "nlr-calculator",
    name: "NLR Calculator",
    description: "Calculate Neutrophil to Lymphocyte Ratio.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "NLR = \\frac{Neutrophils}{Lymphocytes}",
    inputs: [
      { id: "neut", label: "Neutrophils (%)", type: "number", defaultValue: 60 },
      { id: "lymph", label: "Lymphocytes (%)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "nlr", label: "NLR", formula: "neut / lymph", unit: "" }
    ],
    theory: "NLR is used as a marker of subclinical inflammation.",
    seoMeta: { title: "NLR Calculator | Neutrophil Lymphocyte", description: "Calculate NLR.", keywords: "NLR, inflammation" }
  },
  {
    id: "absolute-reticulocyte-count-calculator",
    name: "Absolute Reticulocyte Count Calculator",
    description: "Calculate absolute reticulocyte count.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ARC = Reticulocytes\\% \\times \\frac{RBC}{100}",
    inputs: [
      { id: "retic", label: "Reticulocytes (%)", type: "number", defaultValue: 1.5 },
      { id: "rbc", label: "RBC Count (million/mcL)", type: "number", defaultValue: 4.5 }
    ],
    outputs: [
      { id: "arc", label: "ARC", formula: "(retic / 100) * rbc * 1000000", unit: "cells/mcL" }
    ],
    theory: "ARC assesses bone marrow response to anemia.",
    seoMeta: { title: "Absolute Reticulocyte Count Calculator", description: "Calculate ARC.", keywords: "ARC, reticulocytes" }
  },
  {
    id: "transferrin-saturation-calculator",
    name: "Transferrin Saturation Calculator",
    description: "Calculate transferrin saturation.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Saturation = \\frac{Serum\\ Iron}{TIBC} \\times 100",
    inputs: [
      { id: "iron", label: "Serum Iron (mcg/dL)", type: "number", defaultValue: 100 },
      { id: "tibc", label: "TIBC (mcg/dL)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "sat", label: "Saturation", formula: "(iron / tibc) * 100", unit: "%" }
    ],
    theory: "Transferrin saturation indicates the percentage of iron-binding sites filled.",
    seoMeta: { title: "Transferrin Saturation Calculator | Iron", description: "Calculate transferrin saturation.", keywords: "transferrin saturation" }
  },
  {
    id: "albumin-globulin-ratio-calculator",
    name: "Albumin Globulin Ratio Calculator",
    description: "Calculate Albumin to Globulin ratio.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Ratio = \\frac{Albumin}{Total\\ Protein - Albumin}",
    inputs: [
      { id: "alb", label: "Albumin (g/dL)", type: "number", defaultValue: 4.0 },
      { id: "tp", label: "Total Protein (g/dL)", type: "number", defaultValue: 7.0 }
    ],
    outputs: [
      { id: "ratio", label: "A/G Ratio", formula: "alb / (tp - alb)", unit: "" }
    ],
    theory: "A/G ratio helps evaluate liver and kidney function.",
    seoMeta: { title: "Albumin Globulin Ratio Calculator", description: "Calculate A/G ratio.", keywords: "A/G ratio" }
  },
  {
    id: "iq-percentile-calculator",
    name: "IQ Percentile Calculator",
    description: "Calculate IQ percentile from IQ score.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = \\Phi(\\frac{IQ - 100}{15})",
    inputs: [
      { id: "iq", label: "IQ Score", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "pct", label: "Percentile", formula: "0.5 * (1 + erf((iq - 100) / (15 * sqrt(2)))) * 100", unit: "%" }
    ],
    theory: "Assumes a normal distribution with a mean of 100 and standard deviation of 15.",
    seoMeta: { title: "IQ Percentile Calculator | Normal Distribution", description: "Calculate IQ percentile.", keywords: "IQ percentile, normal distribution" }
  },
  {
    id: "gir-calculator",
    name: "GIR Calculator",
    description: "Calculate Glucose Infusion Rate.",
    category: "health",
    subcategory: "pediatric",
    scientificFormula: "GIR = \\frac{Rate \\times Dextrose\\%}{6 \\times Weight}",
    inputs: [
      { id: "rate", label: "Infusion Rate (mL/hr)", type: "number", defaultValue: 10 },
      { id: "dextrose", label: "Dextrose Concentration (%)", type: "number", defaultValue: 10 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "gir", label: "GIR", formula: "(rate * dextrose) / (6 * weight)", unit: "mg/kg/min" }
    ],
    theory: "GIR is the amount of glucose administered per unit of time and weight.",
    seoMeta: { title: "GIR Calculator | Glucose Infusion Rate", description: "Calculate GIR.", keywords: "GIR, glucose infusion" }
  },
  {
    id: "mid-parental-height-calculator",
    name: "Mid-Parental Height Calculator",
    description: "Predict child's adult height.",
    category: "health",
    subcategory: "pediatric",
    scientificFormula: "Height = \\frac{Mother + Father \\pm 13}{2}",
    inputs: [
      { id: "mother", label: "Mother's Height (cm)", type: "number", defaultValue: 165 },
      { id: "father", label: "Father's Height (cm)", type: "number", defaultValue: 175 },
      { id: "gender", label: "Child Gender", type: "select", options: [{ label: "Male (+13)", value: "13" }, { label: "Female (-13)", value: "-13" }], defaultValue: "13" }
    ],
    outputs: [
      { id: "height", label: "Predicted Height", formula: "(mother + father + gender) / 2", unit: "cm" }
    ],
    theory: "The mid-parental height formula estimates child's genetic height potential.",
    seoMeta: { title: "Mid-Parental Height Calculator | Predict Height", description: "Predict child height.", keywords: "mid-parental height" }
  },
  {
    id: "maintenance-fluids-calculator",
    name: "Maintenance Fluids Calculator",
    description: "Calculate maintenance fluid rate using Holliday-Segar rule.",
    category: "health",
    subcategory: "pediatric",
    scientificFormula: "Fluids = 100 \\times 10 + 50 \\times 10 + 20 \\times (W - 20)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "fluids", label: "Daily Fluids", formula: "weight <= 10 ? weight * 100 : (weight <= 20 ? 1000 + (weight - 10) * 50 : 1500 + (weight - 20) * 20)", unit: "mL/day" }
    ],
    theory: "The Holliday-Segar rule calculates daily maintenance fluid requirements.",
    seoMeta: { title: "Maintenance Fluids Calculator | Holliday-Segar", description: "Calculate maintenance fluids.", keywords: "maintenance fluids" }
  },
  {
    id: "adjusted-age-calculator",
    name: "Adjusted Age Calculator",
    description: "Calculate adjusted age for premature babies.",
    category: "health",
    subcategory: "pediatric",
    scientificFormula: "Age = Chronological\\ Age - Weeks\\ Premature",
    inputs: [
      { id: "chrono_weeks", label: "Chronological Age (weeks)", type: "number", defaultValue: 12 },
      { id: "preterm_weeks", label: "Weeks Premature", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "adj_age", label: "Adjusted Age", formula: "chrono_weeks - preterm_weeks", unit: "weeks" }
    ],
    theory: "Adjusted age accounts for prematurity when assessing development.",
    seoMeta: { title: "Adjusted Age Calculator | Premature Baby", description: "Calculate adjusted age.", keywords: "adjusted age, premature" }
  },
  {
    id: "pediatric-dose-calculator",
    name: "Pediatric Dose Calculator",
    description: "Calculate pediatric drug dose by weight.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times Dose_{per\\ kg}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 },
      { id: "dose_kg", label: "Dose per kg (mg/kg)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "dose", label: "Total Dose", formula: "weight * dose_kg", unit: "mg" }
    ],
    theory: "Pediatric doses are commonly calculated based on the child's weight.",
    seoMeta: { title: "Pediatric Dose Calculator | Weight Based", description: "Calculate pediatric dose.", keywords: "pediatric dose, weight based" }
  },
  {
    id: "ibuprofen-dosage-calculator",
    name: "Ibuprofen Dosage Calculator",
    description: "Calculate pediatric ibuprofen dosage.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 10\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "dose", label: "Dose", formula: "weight * 10", unit: "mg" }
    ],
    theory: "The standard pediatric dose of ibuprofen is 10 mg/kg.",
    seoMeta: { title: "Ibuprofen Dosage Calculator | Pediatric", description: "Calculate ibuprofen dose.", keywords: "ibuprofen, pediatric dose" }
  },
  {
    id: "paracetamol-dosage-calculator",
    name: "Paracetamol Dosage Calculator",
    description: "Calculate pediatric paracetamol (acetaminophen) dosage.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 15\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "dose", label: "Dose", formula: "weight * 15", unit: "mg" }
    ],
    theory: "The standard pediatric dose of paracetamol is 15 mg/kg.",
    seoMeta: { title: "Paracetamol Dosage Calculator | Pediatric", description: "Calculate paracetamol dose.", keywords: "paracetamol, pediatric dose" }
  },
  {
    id: "pediatric-epinephrine-dose-calculator",
    name: "Pediatric Epinephrine Dose Calculator",
    description: "Calculate pediatric epinephrine dose for anaphylaxis.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 0.01\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "dose", label: "Dose", formula: "weight * 0.01", unit: "mg" }
    ],
    theory: "The standard dose is 0.01 mg/kg of 1:1000 epinephrine.",
    seoMeta: { title: "Pediatric Epinephrine Dose Calculator", description: "Calculate epinephrine dose.", keywords: "epinephrine, anaphylaxis" }
  },
  {
    id: "drug-half-life-calculator",
    name: "Drug Half-Life Calculator",
    description: "Calculate remaining drug concentration.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "C_t = C_0 \\times (0.5)^{(t / t_{1/2})}",
    inputs: [
      { id: "c0", label: "Initial Concentration", type: "number", defaultValue: 100 },
      { id: "time", label: "Time Elapsed (hours)", type: "number", defaultValue: 24 },
      { id: "half_life", label: "Half-Life (hours)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "ct", label: "Remaining Concentration", formula: "c0 * (0.5)^(time / half_life)", unit: "" }
    ],
    theory: "Half-life is the time required for the concentration to reduce by half.",
    seoMeta: { title: "Drug Half-Life Calculator | Concentration", description: "Calculate drug half-life.", keywords: "drug half-life" }
  },
  {
    id: "prescription-refill-calculator",
    name: "Prescription Refill Calculator",
    description: "Calculate when to refill a prescription.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Days = \\frac{\\text{Total Pills}}{\\text{Pills per Day}}",
    inputs: [
      { id: "total", label: "Total Pills", type: "number", defaultValue: 30 },
      { id: "per_day", label: "Pills per Day", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "days", label: "Days Supply", formula: "total / per_day", unit: "days" }
    ],
    theory: "Calculates the number of days the prescription will last.",
    seoMeta: { title: "Prescription Refill Calculator | Days Supply", description: "Calculate refill date.", keywords: "prescription refill" }
  },
  {
    id: "steroid-conversion-calculator",
    name: "Steroid Conversion Calculator",
    description: "Convert doses between different steroids.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Equivalent\\ Dose = Dose \\times Factor",
    inputs: [
      { id: "dose", label: "Dose (mg)", type: "number", defaultValue: 5 },
      { id: "from_steroid", label: "From", type: "select", options: [{ label: "Prednisone", value: "1" }, { label: "Hydrocortisone", value: "4" }, { label: "Dexamethasone", value: "0.15" }], defaultValue: "1" },
      { id: "to_steroid", label: "To", type: "select", options: [{ label: "Prednisone", value: "1" }, { label: "Hydrocortisone", value: "4" }, { label: "Dexamethasone", value: "0.15" }], defaultValue: "4" }
    ],
    outputs: [
      { id: "res", label: "Equivalent Dose", formula: "dose * (to_steroid / from_steroid)", unit: "mg" }
    ],
    theory: "Steroid conversion factors are used to find equivalent doses.",
    seoMeta: { title: "Steroid Conversion Calculator | Equivalent Dose", description: "Convert steroid doses.", keywords: "steroid conversion" }
  },
  {
    id: "dosage-calculator-general",
    name: "Dosage Calculator",
    description: "Calculate required dosage volume or pills.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = \\frac{Desired}{Have} \\times Quantity",
    inputs: [
      { id: "desired", label: "Desired Dose (mg)", type: "number", defaultValue: 500 },
      { id: "have", label: "Available Strength (mg)", type: "number", defaultValue: 250 },
      { id: "qty", label: "Form Quantity (e.g., 1 tablet, 5 mL)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "res", label: "Administer", formula: "(desired / have) * qty", unit: "units" }
    ],
    theory: "The formula is a standard nursing calculation for drug administration.",
    seoMeta: { title: "Dosage Calculator | Nursing Math", description: "Calculate required dosage.", keywords: "dosage calculator, nursing math" }
  },
  {
    id: "mcg-to-iu-converter",
    name: "mcg to IU Converter",
    description: "Convert micrograms to International Units.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "IU = mcg \\times Factor",
    inputs: [
      { id: "mcg", label: "Micrograms (mcg)", type: "number", defaultValue: 10 },
      { id: "type", label: "Substance", type: "select", options: [{ label: "Vitamin D (0.025 mcg/IU)", value: "40" }, { label: "Vitamin A (0.3 mcg/IU)", value: "3.33" }], defaultValue: "40" }
    ],
    outputs: [
      { id: "iu", label: "International Units (IU)", formula: "mcg * type", unit: "IU" }
    ],
    theory: "Conversion factors depend on the specific substance.",
    seoMeta: { title: "mcg to IU Converter | Vitamin Conversion", description: "Convert mcg to IU.", keywords: "mcg to IU, vitamins" }
  },
  {
    id: "pf-ratio-calculator",
    name: "PF Ratio Calculator",
    description: "Calculate PaO2/FiO2 ratio for ARDS assessment.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Ratio = \\frac{PaO_2}{FiO_2}",
    inputs: [
      { id: "pao2", label: "PaO2 (mmHg)", type: "number", defaultValue: 80 },
      { id: "fio2", label: "FiO2 (as fraction, e.g., 0.21)", type: "number", defaultValue: 0.21 }
    ],
    outputs: [
      { id: "ratio", label: "P/F Ratio", formula: "pao2 / fio2", unit: "mmHg" }
    ],
    theory: "P/F ratio < 300 suggests ARDS; < 200 moderate; < 100 severe.",
    seoMeta: { title: "PF Ratio Calculator | ARDS Assessment", description: "Calculate PF ratio.", keywords: "PF ratio, ARDS" }
  },
  {
    id: "aa-gradient-calculator",
    name: "A-a Gradient Calculator",
    description: "Calculate Alveolar-arterial oxygen gradient.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Gradient = (FiO_2 \\times (P_{atm} - P_{H2O})) - \\frac{PaCO_2}{0.8} - PaO_2",
    inputs: [
      { id: "fio2", label: "FiO2 (fraction)", type: "number", defaultValue: 0.21 },
      { id: "paco2", label: "PaCO2 (mmHg)", type: "number", defaultValue: 40 },
      { id: "pao2", label: "PaO2 (mmHg)", type: "number", defaultValue: 95 },
      { id: "patm", label: "Atmospheric Pressure (mmHg)", type: "number", defaultValue: 760 },
      { id: "ph2o", label: "Water Vapor Pressure (mmHg)", type: "number", defaultValue: 47 }
    ],
    outputs: [
      { id: "grad", label: "A-a Gradient", formula: "(fio2 * (patm - ph2o)) - (paco2 / 0.8) - pao2", unit: "mmHg" }
    ],
    theory: "Elevated gradient suggests defect in oxygen transfer.",
    seoMeta: { title: "A-a Gradient Calculator | Pulmonary", description: "Calculate A-a gradient.", keywords: "A-a gradient, pulmonary" }
  },
  {
    id: "rsbi-calculator",
    name: "RSBI Calculator",
    description: "Calculate Rapid Shallow Breathing Index.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "RSBI = \\frac{\\text{Frequency}}{\\text{Tidal Volume (L)}}",
    inputs: [
      { id: "freq", label: "Respiratory Rate (breaths/min)", type: "number", defaultValue: 20 },
      { id: "tv", label: "Tidal Volume (mL)", type: "number", defaultValue: 400 }
    ],
    outputs: [
      { id: "rsbi", label: "RSBI", formula: "freq / (tv / 1000)", unit: "breaths/min/L" }
    ],
    theory: "RSBI < 105 suggests successful weaning from ventilator.",
    seoMeta: { title: "RSBI Calculator | Weaning Assessment", description: "Calculate RSBI.", keywords: "RSBI, ventilator weaning" }
  },
  {
    id: "ett-size-calculator",
    name: "Endotracheal Tube Size Calculator",
    description: "Estimate ETT size for children.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Size = \\frac{\\text{Age}}{4} + 4",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "size", label: "Uncuffed ETT Size", formula: "(age / 4) + 4", unit: "mm" },
      { id: "cuffed_size", label: "Cuffed ETT Size", formula: "(age / 4) + 3.5", unit: "mm" }
    ],
    theory: "Formula applies to children aged 1 to 10 years.",
    seoMeta: { title: "ETT Size Calculator | Pediatric", description: "Estimate ETT size.", keywords: "ETT size, pediatric" }
  },
  {
    id: "curb-65-calculator",
    name: "CURB-65 Calculator",
    description: "Assess severity of community-acquired pneumonia.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Score = C + U + R + B + 65",
    inputs: [
      { id: "c", label: "Confusion (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "u", label: "BUN > 19 mg/dL (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "r", label: "RR >= 30 (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "b", label: "BP < 90/60 (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "age65", label: "Age >= 65 (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "CURB-65 Score", formula: "c + u + r + b + age65", unit: "" }
    ],
    theory: "Scores help guide treatment (outpatient vs inpatient).",
    seoMeta: { title: "CURB-65 Calculator | Pneumonia Severity", description: "Calculate CURB-65 score.", keywords: "CURB-65, pneumonia" }
  },
  {
    id: "phq-2-calculator",
    name: "PHQ-2 Calculator",
    description: "Screen for depression with 2 questions.",
    category: "health",
    subcategory: "psychiatry-psychology",
    scientificFormula: "Score = Q1 + Q2",
    inputs: [
      { id: "q1", label: "Little interest or pleasure in doing things?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q2", label: "Feeling down, depressed, or hopeless?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "PHQ-2 Score", formula: "q1 + q2", unit: "" }
    ],
    theory: "A score of 3 or more suggests further evaluation for depression is needed.",
    seoMeta: { title: "PHQ-2 Calculator | Depression Screening", description: "Screen for depression.", keywords: "PHQ-2, depression" }
  },
  {
    id: "gad-7-calculator",
    name: "GAD-7 Calculator",
    description: "Screen for generalized anxiety disorder.",
    category: "health",
    subcategory: "psychiatry-psychology",
    scientificFormula: "Score = Q1 + Q2 + Q3 + Q4 + Q5 + Q6 + Q7",
    inputs: [
      { id: "q1", label: "Feeling nervous, anxious, or on edge?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q2", label: "Not being able to stop or control worrying?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q3", label: "Worrying too much about different things?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q4", label: "Trouble relaxing?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q5", label: "Being so restless that it is hard to sit still?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q6", label: "Becoming easily annoyed or irritable?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" },
      { id: "q7", label: "Feeling afraid as if something awful might happen?", type: "select", options: [{ label: "Not at all (0)", value: "0" }, { label: "Several days (1)", value: "1" }, { label: "More than half the days (2)", value: "2" }, { label: "Nearly every day (3)", value: "3" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "GAD-7 Score", formula: "q1 + q2 + q3 + q4 + q5 + q6 + q7", unit: "" }
    ],
    theory: "Scores of 5, 10, and 15 represent mild, moderate, and severe anxiety.",
    seoMeta: { title: "GAD-7 Calculator | Anxiety Screening", description: "Screen for anxiety.", keywords: "GAD-7, anxiety" }
  },
  {
    id: "happiness-index-calculator",
    name: "Happiness Index Calculator",
    description: "Calculate a simple happiness index.",
    category: "health",
    subcategory: "psychiatry-psychology",
    scientificFormula: "Index = \\frac{\\sum Questions}{Max\\ Score} \\times 100",
    inputs: [
      { id: "q1", label: "Satisfied with life?", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Somewhat (1)", value: "1" }, { label: "Yes (2)", value: "2" }], defaultValue: "1" },
      { id: "q2", label: "Feel positive most of the time?", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Somewhat (1)", value: "1" }, { label: "Yes (2)", value: "2" }], defaultValue: "1" },
      { id: "q3", label: "Have good relationships?", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Somewhat (1)", value: "1" }, { label: "Yes (2)", value: "2" }], defaultValue: "1" }
    ],
    outputs: [
      { id: "index", label: "Happiness Index", formula: "((q1 + q2 + q3) / 6) * 100", unit: "%" }
    ],
    theory: "A simple index to measure subjective well-being.",
    seoMeta: { title: "Happiness Index Calculator | Well-being", description: "Calculate happiness index.", keywords: "happiness index, well-being" }
  },
  {
    id: "gcs-calculator",
    name: "GCS Calculator",
    description: "Glasgow Coma Scale for assessing consciousness.",
    category: "health",
    subcategory: "intensive-emergency-care",
    scientificFormula: "Score = E + V + M",
    inputs: [
      { id: "e", label: "Eye Opening", type: "select", options: [{ label: "Spontaneous (4)", value: "4" }, { label: "To sound (3)", value: "3" }, { label: "To pressure (2)", value: "2" }, { label: "None (1)", value: "1" }], defaultValue: "4" },
      { id: "v", label: "Verbal Response", type: "select", options: [{ label: "Oriented (5)", value: "5" }, { label: "Confused (4)", value: "4" }, { label: "Inappropriate words (3)", value: "3" }, { label: "Incomprehensible sounds (2)", value: "2" }, { label: "None (1)", value: "1" }], defaultValue: "5" },
      { id: "m", label: "Motor Response", type: "select", options: [{ label: "Obeys commands (6)", value: "6" }, { label: "Localizing (5)", value: "5" }, { label: "Normal flexion (4)", value: "4" }, { label: "Abnormal flexion (3)", value: "3" }, { label: "Extension (2)", value: "2" }, { label: "None (1)", value: "1" }], defaultValue: "6" }
    ],
    outputs: [
      { id: "score", label: "GCS Score", formula: "e + v + m", unit: "" }
    ],
    theory: "Scores range from 3 (deep coma) to 15 (fully awake).",
    seoMeta: { title: "GCS Calculator | Glasgow Coma Scale", description: "Calculate GCS score.", keywords: "GCS, coma scale" }
  },
  {
    id: "qsofa-score-calculator",
    name: "qSOFA Score Calculator",
    description: "Quick SOFA score for sepsis risk.",
    category: "health",
    subcategory: "intensive-emergency-care",
    scientificFormula: "Score = RR + Mentation + SBP",
    inputs: [
      { id: "rr", label: "Respiratory Rate >= 22 (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "ment", label: "Altered Mentation (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "sbp", label: "Systolic BP <= 100 (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "qSOFA Score", formula: "rr + ment + sbp", unit: "" }
    ],
    theory: "A score of 2 or more indicates high risk of poor outcome.",
    seoMeta: { title: "qSOFA Score Calculator | Sepsis Risk", description: "Calculate qSOFA score.", keywords: "qSOFA, sepsis" }
  },
  {
    id: "shock-index-calculator",
    name: "Shock Index Calculator",
    description: "Calculate shock index.",
    category: "health",
    subcategory: "intensive-emergency-care",
    scientificFormula: "Index = \\frac{HR}{SBP}",
    inputs: [
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 80 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "index", label: "Shock Index", formula: "hr / sbp", unit: "" }
    ],
    theory: "Normal range is 0.5 to 0.7. Elevated index suggests occult shock.",
    seoMeta: { title: "Shock Index Calculator | Occult Shock", description: "Calculate shock index.", keywords: "shock index" }
  },
  {
    id: "alvarado-score-calculator",
    name: "Alvarado Score Calculator",
    description: "Assess likelihood of appendicitis.",
    category: "health",
    subcategory: "intensive-emergency-care",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "m", label: "Migration of pain (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "a", label: "Anorexia (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "n", label: "Nausea/Vomiting (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "t", label: "Tenderness in RLQ (2)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "2" }], defaultValue: "0" },
      { id: "r", label: "Rebound pain (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "e", label: "Elevated temp >= 37.3C (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "l", label: "Leukocytosis >= 10k (2)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "2" }], defaultValue: "0" },
      { id: "s", label: "Shift to left (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Alvarado Score", formula: "m + a + n + t + r + e + l + s", unit: "" }
    ],
    theory: "Score >= 7 indicates high probability of appendicitis.",
    seoMeta: { title: "Alvarado Score Calculator | Appendicitis", description: "Calculate Alvarado score.", keywords: "Alvarado score, appendicitis" }
  },
  {
    id: "mews-score-calculator",
    name: "MEWS Score Calculator",
    description: "Modified Early Warning Score for clinical deterioration.",
    category: "health",
    subcategory: "intensive-emergency-care",
    scientificFormula: "Score = sum of physiological scores",
    inputs: [
      { id: "sbp", label: "Systolic BP", type: "select", options: [{ label: "<=70 (3)", value: "3" }, { label: "71-80 (2)", value: "2" }, { label: "81-100 (1)", value: "1" }, { label: "101-199 (0)", value: "0" }, { label: ">=200 (2)", value: "2" }], defaultValue: "0" },
      { id: "hr", label: "Heart Rate", type: "select", options: [{ label: "<=40 (2)", value: "2" }, { label: "41-50 (1)", value: "1" }, { label: "51-100 (0)", value: "0" }, { label: "101-110 (1)", value: "1" }, { label: "111-129 (2)", value: "2" }, { label: ">=130 (3)", value: "3" }], defaultValue: "0" },
      { id: "rr", label: "Respiratory Rate", type: "select", options: [{ label: "<9 (2)", value: "2" }, { label: "9-14 (0)", value: "0" }, { label: "15-20 (1)", value: "1" }, { label: "21-29 (2)", value: "2" }, { label: ">=30 (3)", value: "3" }], defaultValue: "0" },
      { id: "temp", label: "Temperature (C)", type: "select", options: [{ label: "<35 (2)", value: "2" }, { label: "35-38.4 (0)", value: "0" }, { label: ">=38.5 (2)", value: "2" }], defaultValue: "0" },
      { id: "avpu", label: "Neurology (AVPU)", type: "select", options: [{ label: "Alert (0)", value: "0" }, { label: "Voice/Pain/Unres (3)", value: "3" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "MEWS Score", formula: "sbp + hr + rr + temp + avpu", unit: "" }
    ],
    theory: "Score >= 5 indicates need for urgent medical review.",
    seoMeta: { title: "MEWS Score Calculator | Clinical Warning", description: "Calculate MEWS score.", keywords: "MEWS score, clinical warning" }
  },
  {
    id: "ast-alt-ratio-calculator",
    name: "AST ALT Ratio Calculator",
    description: "Calculate AST to ALT ratio.",
    category: "health",
    subcategory: "digestive-system",
    scientificFormula: "Ratio = \\frac{AST}{ALT}",
    inputs: [
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "alt", label: "ALT (U/L)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "ratio", label: "AST/ALT Ratio", formula: "ast / alt", unit: "" }
    ],
    theory: "Ratio > 2 suggests alcoholic liver disease.",
    seoMeta: { title: "AST ALT Ratio Calculator | Liver Function", description: "Calculate AST/ALT ratio.", keywords: "AST ALT ratio, liver" }
  },
  {
    id: "apri-calculator",
    name: "APRI Calculator",
    description: "Calculate AST to Platelet Ratio Index.",
    category: "health",
    subcategory: "digestive-system",
    scientificFormula: "APRI = \\frac{AST / AST_{ULN}}{Platelets} \\times 100",
    inputs: [
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "ast_uln", label: "AST Upper Limit of Normal (U/L)", type: "number", defaultValue: 40 },
      { id: "platelets", label: "Platelets (10^3/mcL)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "apri", label: "APRI", formula: "((ast / ast_uln) / platelets) * 100", unit: "" }
    ],
    theory: "APRI is used to estimate hepatic fibrosis in hepatitis C.",
    seoMeta: { title: "APRI Calculator | Liver Fibrosis", description: "Calculate APRI.", keywords: "APRI, liver fibrosis" }
  },
  {
    id: "fib-4-calculator",
    name: "FIB-4 Calculator",
    description: "Estimate liver fibrosis.",
    category: "health",
    subcategory: "digestive-system",
    scientificFormula: "FIB-4 = \\frac{Age \\times AST}{Platelets \\times \\sqrt{ALT}}",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 50 },
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "alt", label: "ALT (U/L)", type: "number", defaultValue: 40 },
      { id: "platelets", label: "Platelets (10^3/mcL)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "fib4", label: "FIB-4", formula: "(age * ast) / (platelets * sqrt(alt))", unit: "" }
    ],
    theory: "FIB-4 helps assess liver fibrosis in patients with HCV and NAFLD.",
    seoMeta: { title: "FIB-4 Calculator | Liver Fibrosis", description: "Calculate FIB-4.", keywords: "FIB-4, liver fibrosis" }
  },
  {
    id: "maddreys-discriminant-function-calculator",
    name: "Maddrey's Discriminant Function Calculator",
    description: "Assess severity of alcoholic hepatitis.",
    category: "health",
    subcategory: "digestive-system",
    scientificFormula: "DF = 4.6 \\times (PT_{patient} - PT_{control}) + Bilirubin",
    inputs: [
      { id: "pt", label: "Patient PT (seconds)", type: "number", defaultValue: 15 },
      { id: "control_pt", label: "Control PT (seconds)", type: "number", defaultValue: 12 },
      { id: "bili", label: "Total Bilirubin (mg/dL)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "df", label: "Discriminant Function", formula: "4.6 * (pt - control_pt) + bili", unit: "" }
    ],
    theory: "Score >= 32 indicates severe alcoholic hepatitis and high short-term mortality.",
    seoMeta: { title: "Maddrey's Discriminant Function Calculator", description: "Calculate Maddrey score.", keywords: "Maddrey score, hepatitis" }
  },
  {
    id: "child-pugh-score-calculator",
    name: "Child Pugh Score Calculator",
    description: "Assess prognosis of chronic liver disease.",
    category: "health",
    subcategory: "digestive-system",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "bili", label: "Bilirubin", type: "select", options: [{ label: "<2 mg/dL (1)", value: "1" }, { label: "2-3 mg/dL (2)", value: "2" }, { label: ">3 mg/dL (3)", value: "3" }], defaultValue: "1" },
      { id: "alb", label: "Albumin", type: "select", options: [{ label: ">3.5 g/dL (1)", value: "1" }, { label: "2.8-3.5 g/dL (2)", value: "2" }, { label: "<2.8 g/dL (3)", value: "3" }], defaultValue: "1" },
      { id: "inr", label: "INR", type: "select", options: [{ label: "<1.7 (1)", value: "1" }, { label: "1.7-2.3 (2)", value: "2" }, { label: ">2.3 (3)", value: "3" }], defaultValue: "1" },
      { id: "ascites", label: "Ascites", type: "select", options: [{ label: "None (1)", value: "1" }, { label: "Slight (2)", value: "2" }, { label: "Moderate (3)", value: "3" }], defaultValue: "1" },
      { id: "enceph", label: "Encephalopathy", type: "select", options: [{ label: "None (1)", value: "1" }, { label: "Grade I-II (2)", value: "2" }, { label: "Grade III-IV (3)", value: "3" }], defaultValue: "1" }
    ],
    outputs: [
      { id: "score", label: "Child Pugh Score", formula: "bili + alb + inr + ascites + enceph", unit: "" }
    ],
    theory: "Class A (5-6), B (7-9), C (10-15) represent increasing severity.",
    seoMeta: { title: "Child Pugh Score Calculator | Liver Disease", description: "Calculate Child Pugh score.", keywords: "Child Pugh, liver disease" }
  },
  {
    id: "incidence-rate-calculator",
    name: "Incidence Rate Calculator",
    description: "Calculate incidence rate of a disease.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Rate = \\frac{\\text{New Cases}}{\\text{Population at Risk}} \\times 10^n",
    inputs: [
      { id: "cases", label: "New Cases", type: "number", defaultValue: 10 },
      { id: "pop", label: "Population at Risk", type: "number", defaultValue: 10000 },
      { id: "k", label: "Multiplier (e.g., 1000 for per 1k)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "rate", label: "Incidence Rate", formula: "(cases / pop) * k", unit: "per population" }
    ],
    theory: "Incidence rate measures the frequency of new cases in a population.",
    seoMeta: { title: "Incidence Rate Calculator | Epidemiology", description: "Calculate incidence rate.", keywords: "incidence rate, epidemiology" }
  },
  {
    id: "mortality-rate-calculator",
    name: "Mortality Rate Calculator",
    description: "Calculate mortality rate.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Rate = \\frac{\\text{Deaths}}{\\text{Population}} \\times 10^n",
    inputs: [
      { id: "deaths", label: "Number of Deaths", type: "number", defaultValue: 5 },
      { id: "pop", label: "Total Population", type: "number", defaultValue: 10000 },
      { id: "k", label: "Multiplier", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "rate", label: "Mortality Rate", formula: "(deaths / pop) * k", unit: "per population" }
    ],
    theory: "Mortality rate measures the frequency of deaths in a population.",
    seoMeta: { title: "Mortality Rate Calculator | Epidemiology", description: "Calculate mortality rate.", keywords: "mortality rate, epidemiology" }
  },
  {
    id: "nnt-calculator",
    name: "NNT Calculator",
    description: "Calculate Number Needed to Treat.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "NNT = \\frac{1}{ARR}",
    inputs: [
      { id: "cer", label: "Control Event Rate (fraction)", type: "number", defaultValue: 0.2 },
      { id: "eer", label: "Experimental Event Rate (fraction)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "arr", label: "Absolute Risk Reduction", formula: "cer - eer", unit: "" },
      { id: "nnt", label: "NNT", formula: "1 / (cer - eer)", unit: "patients" }
    ],
    theory: "NNT is the number of patients need to be treated to prevent one additional bad outcome.",
    seoMeta: { title: "NNT Calculator | Number Needed to Treat", description: "Calculate NNT.", keywords: "NNT, number needed to treat" }
  },
  {
    id: "bed-calculator",
    name: "BED Calculator",
    description: "Calculate Biologically Effective Dose in radiotherapy.",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "BED = n \\times d \\times (1 + \\frac{d}{\\alpha/\\beta})",
    inputs: [
      { id: "n", label: "Number of Fractions", type: "number", defaultValue: 25 },
      { id: "d", label: "Dose per Fraction (Gy)", type: "number", defaultValue: 2 },
      { id: "ab", label: "Alpha/Beta Ratio (Gy)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "bed", label: "BED", formula: "n * d * (1 + (d / ab))", unit: "Gy" }
    ],
    theory: "BED is used to compare different radiotherapy fractionation schedules.",
    seoMeta: { title: "BED Calculator | Radiotherapy", description: "Calculate BED.", keywords: "BED, radiotherapy" }
  },
  {
    id: "radiation-dose-calculator",
    name: "Radiation Dose Calculator",
    description: "Convert or estimate radiation dose.",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "Dose = Flux \\times Time",
    inputs: [
      { id: "flux", label: "Dose Rate (mSv/hr)", type: "number", defaultValue: 0.1 },
      { id: "time", label: "Exposure Time (hours)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "dose", label: "Total Dose", formula: "flux * time", unit: "mSv" }
    ],
    theory: "Simple estimation of total dose based on constant dose rate.",
    seoMeta: { title: "Radiation Dose Calculator | Estimation", description: "Calculate radiation dose.", keywords: "radiation dose" }
  },
  {
    id: "covid-mortality-risk-calculator",
    name: "COVID-19 Mortality Risk Calculator",
    description: "Estimate COVID-19 mortality risk (simplified).",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Risk = Base \\times Factors",
    inputs: [
      { id: "age", label: "Age", type: "select", options: [{ label: "<50 (0.1%)", value: "0.1" }, { label: "50-64 (0.5%)", value: "0.5" }, { label: "65-74 (2%)", value: "2.0" }, { label: ">=75 (5%)", value: "5.0" }], defaultValue: "0.1" },
      { id: "comorb", label: "Comorbidities (yes=2x risk)", type: "select", options: [{ label: "No", value: "1" }, { label: "Yes", value: "2" }], defaultValue: "1" }
    ],
    outputs: [
      { id: "risk", label: "Estimated Mortality Risk", formula: "age * comorb", unit: "%" }
    ],
    theory: "This is a simplified model for educational purposes based on early pandemic data.",
    seoMeta: { title: "COVID-19 Mortality Risk Calculator", description: "Estimate COVID-19 risk.", keywords: "COVID-19 risk" }
  },
  {
    id: "event-risk-calculator",
    name: "Event Risk Calculator",
    description: "Calculate probability of at least one positive case in a group.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Risk = 1 - (1 - P)^N",
    inputs: [
      { id: "p", label: "Prevalence (as fraction, e.g., 0.01 for 1%)", type: "number", defaultValue: 0.01 },
      { id: "n", label: "Group Size", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "risk", label: "Probability of at least 1 case", formula: "(1 - (1 - p)^n) * 100", unit: "%" }
    ],
    theory: "Calculates the probability that at least one person in a group of size N has the condition.",
    seoMeta: { title: "Event Risk Calculator | Epidemiology", description: "Calculate event risk.", keywords: "event risk, epidemiology" }
  },
  {
    id: "alzheimers-life-expectancy-calculator",
    name: "Alzheimer's Life Expectancy Calculator",
    description: "Estimate life expectancy after Alzheimer's diagnosis.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Life\\ Expectancy = Base - Age\\ Factor",
    inputs: [
      { id: "age", label: "Age at Diagnosis", type: "number", defaultValue: 75 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "4" }, { label: "Female", value: "5" }], defaultValue: "5" }
    ],
    outputs: [
      { id: "le", label: "Estimated Life Expectancy", formula: "gender == 5 ? 12 - (age - 65) * 0.2 : 10 - (age - 65) * 0.2", unit: "years" }
    ],
    theory: "Life expectancy after diagnosis typically ranges from 4 to 8 years, but can be longer.",
    seoMeta: { title: "Alzheimer's Life Expectancy Calculator", description: "Estimate life expectancy.", keywords: "Alzheimer's, life expectancy" }
  },
  {
    id: "barthel-index-calculator",
    name: "Barthel Index Calculator",
    description: "Assess activities of daily living (ADL).",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "bowel", label: "Bowels", type: "select", options: [{ label: "Incontinent (0)", value: "0" }, { label: "Occasional accident (5)", value: "5" }, { label: "Continent (10)", value: "10" }], defaultValue: "10" },
      { id: "bladder", label: "Bladder", type: "select", options: [{ label: "Incontinent (0)", value: "0" }, { label: "Occasional accident (5)", value: "5" }, { label: "Continent (10)", value: "10" }], defaultValue: "10" },
      { id: "grooming", label: "Grooming", type: "select", options: [{ label: "Needs help (0)", value: "0" }, { label: "Independent (5)", value: "5" }], defaultValue: "5" },
      { id: "toilet", label: "Toilet Use", type: "select", options: [{ label: "Dependent (0)", value: "0" }, { label: "Needs help (5)", value: "5" }, { label: "Independent (10)", value: "10" }], defaultValue: "10" },
      { id: "feeding", label: "Feeding", type: "select", options: [{ label: "Dependent (0)", value: "0" }, { label: "Needs help (5)", value: "5" }, { label: "Independent (10)", value: "10" }], defaultValue: "10" }
    ],
    outputs: [
      { id: "score", label: "Barthel Index Score", formula: "bowel + bladder + grooming + toilet + feeding", unit: "" }
    ],
    theory: "Higher scores indicate greater independence. Max score shown here is 45 (partial list).",
    seoMeta: { title: "Barthel Index Calculator | ADL", description: "Assess ADL.", keywords: "Barthel index, ADL" }
  },
  {
    id: "braden-score-calculator",
    name: "Braden Score Calculator",
    description: "Predict pressure sore risk.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "sensory", label: "Sensory Perception", type: "select", options: [{ label: "1. Completely Limited", value: "1" }, { label: "2. Very Limited", value: "2" }, { label: "3. Slightly Limited", value: "3" }, { label: "4. No Impairment", value: "4" }], defaultValue: "4" },
      { id: "moisture", label: "Moisture", type: "select", options: [{ label: "1. Constantly Moist", value: "1" }, { label: "2. Very Moist", value: "2" }, { label: "3. Occasionally Moist", value: "3" }, { label: "4. Rarely Moist", value: "4" }], defaultValue: "4" },
      { id: "activity", label: "Activity", type: "select", options: [{ label: "1. Bedfast", value: "1" }, { label: "2. Chairfast", value: "2" }, { label: "3. Walks Occasionally", value: "3" }, { label: "4. Walks Frequently", value: "4" }], defaultValue: "4" },
      { id: "mobility", label: "Mobility", type: "select", options: [{ label: "1. Completely Immobile", value: "1" }, { label: "2. Very Limited", value: "2" }, { label: "3. Slightly Limited", value: "3" }, { label: "4. No Limitations", value: "4" }], defaultValue: "4" },
      { id: "nutrition", label: "Nutrition", type: "select", options: [{ label: "1. Very Poor", value: "1" }, { label: "2. Probably Inadequate", value: "2" }, { label: "3. Adequate", value: "3" }, { label: "4. Excellent", value: "4" }], defaultValue: "4" },
      { id: "friction", label: "Friction & Shear", type: "select", options: [{ label: "1. Problem", value: "1" }, { label: "2. Potential Problem", value: "2" }, { label: "3. No Apparent Problem", value: "3" }], defaultValue: "3" }
    ],
    outputs: [
      { id: "score", label: "Braden Score", formula: "sensory + moisture + activity + mobility + nutrition + friction", unit: "" }
    ],
    theory: "Scores <= 12 indicate high risk of pressure ulcers.",
    seoMeta: { title: "Braden Score Calculator | Pressure Sore Risk", description: "Predict pressure sore risk.", keywords: "Braden score, pressure sore" }
  },
  {
    id: "morse-fall-scale-calculator",
    name: "Morse Fall Scale Calculator",
    description: "Assess risk of falls in hospital.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "history", label: "History of falling", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Yes (25)", value: "25" }], defaultValue: "0" },
      { id: "second", label: "Secondary diagnosis", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Yes (15)", value: "15" }], defaultValue: "0" },
      { id: "aid", label: "Ambulatory aid", type: "select", options: [{ label: "None (0)", value: "0" }, { label: "Crutches/Cane (15)", value: "15" }, { label: "Furniture (30)", value: "30" }], defaultValue: "0" },
      { id: "iv", label: "IV/Heparin lock", type: "select", options: [{ label: "No (0)", value: "0" }, { label: "Yes (20)", value: "20" }], defaultValue: "0" },
      { id: "gait", label: "Gait", type: "select", options: [{ label: "Normal (0)", value: "0" }, { label: "Weak (10)", value: "10" }, { label: "Impaired (20)", value: "20" }], defaultValue: "0" },
      { id: "mental", label: "Mental status", type: "select", options: [{ label: "Oriented (0)", value: "0" }, { label: "Forgets limitations (15)", value: "15" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Morse Fall Score", formula: "history + second + aid + iv + gait + mental", unit: "" }
    ],
    theory: "Score >= 45 indicates high risk of falls.",
    seoMeta: { title: "Morse Fall Scale Calculator | Fall Risk", description: "Assess fall risk.", keywords: "Morse fall scale, fall risk" }
  },
  {
    id: "osteoporosis-risk-calculator",
    name: "Osteoporosis Risk Calculator",
    description: "Simple screening for osteoporosis risk.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Risk = Age\\ factor + Weight\\ factor",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 65 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 60 },
      { id: "fracture", label: "History of fracture (yes=1, no=0)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Risk Score", formula: "(age - weight) + (fracture * 10)", unit: "" }
    ],
    theory: "This is a simplified index (like ORAI). Higher scores suggest higher risk.",
    seoMeta: { title: "Osteoporosis Risk Calculator | Screening", description: "Screen for osteoporosis.", keywords: "osteoporosis risk" }
  },
  {
    id: "vaccine-efficacy-calculator",
    name: "Vaccine Efficacy Calculator",
    description: "Calculate vaccine efficacy from trial data.",
    category: "health",
    subcategory: "covid-19-vaccine",
    scientificFormula: "VE = \\frac{ARU - ARV}{ARU} \\times 100",
    inputs: [
      { id: "aru", label: "Attack Rate in Unvaccinated (%)", type: "number", defaultValue: 1.0 },
      { id: "arv", label: "Attack Rate in Vaccinated (%)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "ve", label: "Vaccine Efficacy", formula: "((aru - arv) / aru) * 100", unit: "%" }
    ],
    theory: "Vaccine efficacy is the proportionate reduction in disease attack rate between unvaccinated and vaccinated groups.",
    seoMeta: { title: "Vaccine Efficacy Calculator | Trial Data", description: "Calculate vaccine efficacy.", keywords: "vaccine efficacy" }
  },
  {
    id: "vaccine-queue-india-calculator",
    name: "Vaccine Queue Calculator for India",
    description: "Estimate when you might get vaccinated in India.",
    category: "health",
    subcategory: "covid-19-vaccine",
    scientificFormula: "Time = \\frac{\\text{People in Front}}{\\text{Vaccination Rate}}",
    inputs: [
      { id: "age", label: "Your Age", type: "number", defaultValue: 30 },
      { id: "priority", label: "Priority Group (e.g., healthcare worker)", type: "select", options: [{ label: "No", value: "1000000000" }, { label: "Yes", value: "10000000" }], defaultValue: "1000000000" },
      { id: "rate", label: "Vaccination Rate (doses/day)", type: "number", defaultValue: 3000000 }
    ],
    outputs: [
      { id: "days", label: "Estimated Days to Vaccination", formula: "priority / rate", unit: "days" }
    ],
    theory: "This is a simplified model based on population size and vaccination rate.",
    seoMeta: { title: "Vaccine Queue Calculator for India", description: "Estimate vaccination date.", keywords: "vaccine queue, India" }
  },
  {
    id: "vaccine-queue-general-calculator",
    name: "Vaccine Queue Calculator",
    description: "Estimate when you might get vaccinated.",
    category: "health",
    subcategory: "covid-19-vaccine",
    scientificFormula: "Time = \\frac{\\text{Queue Position}}{\\text{Rate}}",
    inputs: [
      { id: "pos", label: "Your Position in Queue", type: "number", defaultValue: 1000000 },
      { id: "rate", label: "Vaccination Rate (doses/week)", type: "number", defaultValue: 100000 }
    ],
    outputs: [
      { id: "weeks", label: "Estimated Weeks", formula: "pos / rate", unit: "weeks" }
    ],
    theory: "Simple queue estimation based on rate.",
    seoMeta: { title: "Vaccine Queue Calculator | General", description: "Estimate vaccination time.", keywords: "vaccine queue" }
  },
  {
    id: "aldrete-score-calculator",
    name: "Aldrete Score Calculator",
    description: "Assess recovery after anesthesia.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Score = A + R + C + C + O",
    inputs: [
      { id: "a", label: "Activity (moves limbs)", type: "select", options: [{ label: "0 - None", value: "0" }, { label: "1 - 2 limbs", value: "1" }, { label: "2 - 4 limbs", value: "2" }], defaultValue: "2" },
      { id: "r", label: "Respiration", type: "select", options: [{ label: "0 - Apneic", value: "0" }, { label: "1 - Dyspnea", value: "1" }, { label: "2 - Deep breathe", value: "2" }], defaultValue: "2" },
      { id: "c", label: "Circulation (BP vs pre-op)", type: "select", options: [{ label: "0 - +/- 50%", value: "0" }, { label: "1 - +/- 20-50%", value: "1" }, { label: "2 - +/- 20%", value: "2" }], defaultValue: "2" },
      { id: "con", label: "Consciousness", type: "select", options: [{ label: "0 - No response", value: "0" }, { label: "1 - Arousable", value: "1" }, { label: "2 - Fully awake", value: "2" }], defaultValue: "2" },
      { id: "o", label: "O2 Saturation", type: "select", options: [{ label: "0 - <90% with O2", value: "0" }, { label: "1 - >90% with O2", value: "1" }, { label: "2 - >92% on room air", value: "2" }], defaultValue: "2" }
    ],
    outputs: [
      { id: "score", label: "Aldrete Score", formula: "a + r + c + con + o", unit: "" }
    ],
    theory: "A score of 9 or 10 is required for discharge from PACU.",
    seoMeta: { title: "Aldrete Score Calculator | Post-Anesthesia", description: "Assess recovery.", keywords: "Aldrete score, anesthesia" }
  },
  {
    id: "centor-score-calculator",
    name: "Centor Score Calculator",
    description: "Predict likelihood of bacterial pharyngitis (strep throat).",
    category: "health",
    subcategory: "other",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "fever", label: "Fever > 38C (100.4F)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "exudate", label: "Tonsillar exudates", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "nodes", label: "Anterior cervical lymphadenopathy", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "cough", label: "Absence of cough", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "age", label: "Age", type: "select", options: [{ label: "3-14 years (+1)", value: "1" }, { label: "15-44 years (0)", value: "0" }, { label: ">=45 years (-1)", value: "-1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Centor Score", formula: "fever + exudate + nodes + cough + age", unit: "" }
    ],
    theory: "Score >= 4 suggests high probability of strep throat.",
    seoMeta: { title: "Centor Score Calculator | Strep Throat", description: "Predict strep throat.", keywords: "Centor score, strep" }
  },
  {
    id: "hot-car-calculator",
    name: "Hot Car Calculator",
    description: "Estimate temperature rise inside a parked car.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Temp = Ambient + Rise",
    inputs: [
      { id: "ambient", label: "Ambient Temperature (C)", type: "number", defaultValue: 25 },
      { id: "time", label: "Time Parked (minutes)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "temp", label: "Estimated Inside Temp", formula: "ambient + (time <= 10 ? 10 : (time <= 30 ? 19 : 24))", unit: "C" }
    ],
    theory: "Temperature inside a car can rise rapidly, reaching dangerous levels in minutes.",
    seoMeta: { title: "Hot Car Calculator | Temperature Rise", description: "Estimate car temp.", keywords: "hot car, temperature" }
  },
  {
    id: "beighton-score-calculator",
    name: "Beighton Score Calculator",
    description: "Assess for joint hypermobility.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Score = sum of points",
    inputs: [
      { id: "pinky_l", label: "Left pinky dorsiflex > 90 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "pinky_r", label: "Right pinky dorsiflex > 90 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "thumb_l", label: "Left thumb to forearm (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "thumb_r", label: "Right thumb to forearm (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "elbow_l", label: "Left elbow hyperextend > 10 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "elbow_r", label: "Right elbow hyperextend > 10 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "knee_l", label: "Left knee hyperextend > 10 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "knee_r", label: "Right knee hyperextend > 10 (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" },
      { id: "palm", label: "Palms on floor without bending knees (1)", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes", value: "1" }], defaultValue: "0" }
    ],
    outputs: [
      { id: "score", label: "Beighton Score", formula: "pinky_l + pinky_r + thumb_l + thumb_r + elbow_l + elbow_r + knee_l + knee_r + palm", unit: "" }
    ],
    theory: "A score of 4 or more indicates joint hypermobility.",
    seoMeta: { title: "Beighton Score Calculator | Hypermobility", description: "Assess hypermobility.", keywords: "Beighton score, hypermobility" }
  },
  {
    id: "dasi-calculator",
    name: "DASI Calculator",
    description: "Duke Activity Status Index for functional capacity.",
    category: "health",
    subcategory: "other",
    scientificFormula: "DASI = sum of points",
    inputs: [
      { id: "q1", label: "Can you take care of yourself?", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes (2.75)", value: "2.75" }], defaultValue: "2.75" },
      { id: "q2", label: "Can you walk indoors?", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes (1.75)", value: "1.75" }], defaultValue: "1.75" },
      { id: "q3", label: "Can you walk a block or two?", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes (2.75)", value: "2.75" }], defaultValue: "2.75" },
      { id: "q4", label: "Can you climb a flight of stairs?", type: "select", options: [{ label: "No", value: "0" }, { label: "Yes (5.5)", value: "5.5" }], defaultValue: "5.5" }
    ],
    outputs: [
      { id: "score", label: "DASI Score", formula: "q1 + q2 + q3 + q4", unit: "" }
    ],
    theory: "DASI scores correlate with peak oxygen uptake.",
    seoMeta: { title: "DASI Calculator | Functional Capacity", description: "Calculate DASI score.", keywords: "DASI score" }
  },
  {
    id: "fatigue-severity-scale-calculator",
    name: "Fatigue Severity Scale Calculator",
    description: "Assess fatigue severity.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Score = \\frac{\\sum Questions}{9}",
    inputs: [
      { id: "q1", label: "My motivation is lower when I am fatigued.", type: "select", options: [{ label: "1 (Strongly Disagree)", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }, { label: "5", value: "5" }, { label: "6", value: "6" }, { label: "7 (Strongly Agree)", value: "7" }], defaultValue: "4" },
      { id: "q2", label: "Exercise brings on my fatigue.", type: "select", options: [{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" }, { label: "5", value: "5" }, { label: "6", value: "6" }, { label: "7", value: "7" }], defaultValue: "4" }
    ],
    outputs: [
      { id: "score", label: "Average Score", formula: "(q1 + q2) / 2", unit: "" }
    ],
    theory: "Average score >= 4 suggests significant fatigue. (Full scale has 9 questions).",
    seoMeta: { title: "Fatigue Severity Scale Calculator", description: "Assess fatigue.", keywords: "fatigue severity scale" }
  },
  {
    id: "noise-pollution-calculator",
    name: "Noise Pollution Calculator",
    description: "Calculate maximal safe exposure time to noise.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Time = \\frac{8}{2^{(L - 85)/3}}",
    inputs: [
      { id: "level", label: "Noise Level (dB)", type: "number", defaultValue: 85 }
    ],
    outputs: [
      { id: "time", label: "Max Safe Exposure Time", formula: "8 / (2^((level - 85) / 3))", unit: "hours" }
    ],
    theory: "NIOSH standard: Every 3 dB increase halves the safe exposure time.",
    seoMeta: { title: "Noise Pollution Calculator | Safe Exposure", description: "Calculate safe noise exposure.", keywords: "noise pollution, safe exposure" }
  },
  {
    id: "time-of-death-calculator",
    name: "Time Of Death Calculator",
    description: "Estimate time of death based on body temperature.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Time = \\frac{37 - Temp}{Rate}",
    inputs: [
      { id: "temp", label: "Rectal Temperature (C)", type: "number", defaultValue: 30 },
      { id: "ambient", label: "Ambient Temperature (C)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "hours", label: "Estimated Hours Since Death", formula: "(37 - temp) / 1.5", unit: "hours" }
    ],
    theory: "Rule of thumb: Body cools at ~1.5C per hour in average conditions.",
    seoMeta: { title: "Time Of Death Calculator | Forensic", description: "Estimate time of death.", keywords: "time of death, forensic" }
  },
  {
    id: "free-testosterone-calculator",
    name: "Free Testosterone Calculator",
    description: "Calculate free testosterone (simplified).",
    category: "health",
    subcategory: "other",
    scientificFormula: "Free = Total \\times Factor",
    inputs: [
      { id: "total", label: "Total Testosterone (ng/dL)", type: "number", defaultValue: 600 },
      { id: "shbg", label: "SHBG (nmol/L)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "free", label: "Estimated Free Testosterone", formula: "total * (1 / shbg) * 10", unit: "ng/dL" }
    ],
    theory: "This is a highly simplified estimation. True free testosterone requires albumin levels and complex binding equations.",
    seoMeta: { title: "Free Testosterone Calculator | Estimation", description: "Calculate free testosterone.", keywords: "free testosterone" }
  },
  {
    id: "due-date-calculator",
    name: "Due Date Calculator",
    description: "Calculate estimated due date based on LMP.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "EDD = LMP + 280\\ days",
    inputs: [
      { id: "lmp", label: "Days since Last Menstrual Period", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "edd", label: "Estimated Days to Birth", formula: "280 - lmp", unit: "days" }
    ],
    theory: "Pregnancy is typically calculated as 40 weeks (280 days) from the first day of the last menstrual period.",
    seoMeta: { title: "Due Date Calculator | Pregnancy", description: "Calculate due date.", keywords: "due date, pregnancy" }
  },
  {
    id: "ovulation-calculator",
    name: "Ovulation Calculator",
    description: "Estimate fertile window.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Ovulation = LMP + Cycle\\ Length - 14",
    inputs: [
      { id: "cycle", label: "Cycle Length (days)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "fertile_start", label: "Fertile Window Starts (days from LMP)", formula: "cycle - 14 - 3", unit: "days" },
      { id: "fertile_end", label: "Fertile Window Ends (days from LMP)", formula: "cycle - 14 + 1", unit: "days" }
    ],
    theory: "Ovulation typically occurs 14 days before the next period starts.",
    seoMeta: { title: "Ovulation Calculator | Fertile Window", description: "Estimate ovulation.", keywords: "ovulation, fertility" }
  },
  {
    id: "hcg-levels-calculator",
    name: "hCG Levels Calculator",
    description: "Calculate hCG doubling time.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Doubling\\ Time = \\frac{Time \\times \\ln(2)}{\\ln(hCG_2 / hCG_1)}",
    inputs: [
      { id: "hcg1", label: "First hCG Level (mIU/mL)", type: "number", defaultValue: 100 },
      { id: "hcg2", label: "Second hCG Level (mIU/mL)", type: "number", defaultValue: 200 },
      { id: "time", label: "Time Between Tests (hours)", type: "number", defaultValue: 48 }
    ],
    outputs: [
      { id: "dt", label: "Doubling Time", formula: "(time * ln(2)) / ln(hcg2 / hcg1)", unit: "hours" }
    ],
    theory: "In early pregnancy, hCG levels typically double every 48 to 72 hours.",
    seoMeta: { title: "hCG Levels Calculator | Doubling Time", description: "Calculate hCG doubling time.", keywords: "hCG doubling time" }
  },
  {
    id: "pregnancy-weight-gain-calculator",
    name: "Pregnancy Weight Gain Calculator",
    description: "Recommend weight gain based on pre-pregnancy BMI.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Gain = f(BMI)",
    inputs: [
      { id: "bmi", label: "Pre-pregnancy BMI", type: "number", defaultValue: 22 }
    ],
    outputs: [
      { id: "min_gain", label: "Min Recommended Gain", formula: "bmi < 18.5 ? 28 : (bmi < 25 ? 25 : (bmi < 30 ? 15 : 11))", unit: "lbs" },
      { id: "max_gain", label: "Max Recommended Gain", formula: "bmi < 18.5 ? 40 : (bmi < 25 ? 35 : (bmi < 30 ? 25 : 20))", unit: "lbs" }
    ],
    theory: "Recommendations are based on IOM guidelines.",
    seoMeta: { title: "Pregnancy Weight Gain Calculator", description: "Recommend weight gain.", keywords: "pregnancy weight gain" }
  },
  {
    id: "fertility-by-age-calculator",
    name: "Fertility by Age Calculator",
    description: "Estimate fertility based on age.",
    category: "health",
    subcategory: "gynecology-pregnancy",
    scientificFormula: "Fertility = f(Age)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "chance", label: "Monthly Chance of Conception", formula: "age < 30 ? 20 : (age < 35 ? 15 : (age < 40 ? 10 : 5))", unit: "%" }
    ],
    theory: "Fertility declines with age, particularly after age 35.",
    seoMeta: { title: "Fertility by Age Calculator | Conception Chance", description: "Estimate fertility.", keywords: "fertility by age" }
  },
  {
    id: "adjusted-body-weight-calculator",
    name: "Adjusted Body Weight Calculator",
    description: "Calculate adjusted body weight for dosing.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "AjBW = IBW + 0.4 \\times (Actual - IBW)",
    inputs: [
      { id: "ibw", label: "Ideal Body Weight (kg)", type: "number", defaultValue: 70 },
      { id: "actual", label: "Actual Body Weight (kg)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "ajbw", label: "Adjusted Body Weight", formula: "ibw + 0.4 * (actual - ibw)", unit: "kg" }
    ],
    theory: "Used for drug dosing in obese patients.",
    seoMeta: { title: "Adjusted Body Weight Calculator", description: "Calculate adjusted body weight.", keywords: "adjusted body weight" }
  },
  {
    id: "bai-calculator",
    name: "BAI Calculator - Body Adiposity Index",
    description: "Calculate Body Adiposity Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BAI = \\frac{Hip}{Height^{1.5}} - 18",
    inputs: [
      { id: "hip", label: "Hip Circumference (cm)", type: "number", defaultValue: 100 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "bai", label: "BAI", formula: "(hip / (height^1.5)) - 18", unit: "%" }
    ],
    theory: "BAI is a method of estimating the amount of body fat in humans.",
    seoMeta: { title: "BAI Calculator | Body Adiposity Index", description: "Calculate BAI.", keywords: "BAI, body adiposity index" }
  },
  {
    id: "bri-calculator",
    name: "BRI Calculator — Body Roundness Index",
    description: "Calculate Body Roundness Index.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BRI = 364.2 - 365.5 \\times \\sqrt{1 - (\\frac{WC / 2\\pi}{0.5 \\times Height})^2}",
    inputs: [
      { id: "wc", label: "Waist Circumference (m)", type: "number", defaultValue: 0.8 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "bri", label: "BRI", formula: "364.2 - 365.5 * sqrt(1 - ((wc / (2 * pi)) / (0.5 * height))^2)", unit: "" }
    ],
    theory: "BRI is a newer index to predict body fat percentage and visceral adipose tissue.",
    seoMeta: { title: "BRI Calculator | Body Roundness Index", description: "Calculate BRI.", keywords: "BRI, body roundness index" }
  },
  {
    id: "ponderal-index-calculator",
    name: "Ponderal Index Calculator",
    description: "Calculate Ponderal Index (Rohrer's Index).",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "PI = \\frac{Weight}{Height^3}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 }
    ],
    outputs: [
      { id: "pi", label: "Ponderal Index", formula: "weight / (height^3)", unit: "kg/m³" }
    ],
    theory: "Ponderal Index is similar to BMI but accounts for height in a cubic dimension.",
    seoMeta: { title: "Ponderal Index Calculator | Rohrer's Index", description: "Calculate Ponderal Index.", keywords: "ponderal index" }
  },
  {
    id: "rfm-calculator",
    name: "RFM Calculator (Relative Fat Mass)",
    description: "Calculate Relative Fat Mass.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "RFM = 64 - (20 \\times \\frac{Height}{Waist})",
    inputs: [
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "64" }, { label: "Female", value: "76" }], defaultValue: "64" },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "waist", label: "Waist Circumference (cm)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "rfm", label: "RFM", formula: "gender - (20 * (height / waist))", unit: "%" }
    ],
    theory: "RFM is a simple formula for estimating body fat percentage based on height and waist circumference.",
    seoMeta: { title: "RFM Calculator | Relative Fat Mass", description: "Calculate RFM.", keywords: "RFM, relative fat mass" }
  },
  {
    id: "body-frame-size-calculator",
    name: "Body Frame Size Calculator",
    description: "Determine body frame size based on height and wrist circumference.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Ratio = \\frac{Height}{Wrist}",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "wrist", label: "Wrist Circumference (cm)", type: "number", defaultValue: 16 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "ratio", label: "Height to Wrist Ratio", formula: "height / wrist", unit: "" }
    ],
    theory: "For men: >10.4 small, 9.6-10.4 medium, <9.6 large. For women: >11.0 small, 10.1-11.0 medium, <10.1 large.",
    seoMeta: { title: "Body Frame Size Calculator", description: "Determine body frame size.", keywords: "body frame size" }
  },
  {
    id: "karvonen-formula-calculator",
    name: "Karvonen Formula Calculator",
    description: "Calculate target heart rate zones.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "THR = ((HR_{max} - HR_{rest}) \\times \\%Intensity) + HR_{rest}",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "rest", label: "Resting Heart Rate", type: "number", defaultValue: 60 },
      { id: "intensity", label: "Intensity (as fraction, e.g., 0.7 for 70%)", type: "number", defaultValue: 0.7 }
    ],
    outputs: [
      { id: "max", label: "Max Heart Rate (est)", formula: "220 - age", unit: "bpm" },
      { id: "thr", label: "Target Heart Rate", formula: "((220 - age - rest) * intensity) + rest", unit: "bpm" }
    ],
    theory: "The Karvonen formula factors in resting heart rate to calculate target heart rate zones.",
    seoMeta: { title: "Karvonen Formula Calculator | Target HR", description: "Calculate target heart rate.", keywords: "Karvonen formula, target heart rate" }
  },
  {
    id: "lean-body-mass-calculator",
    name: "Lean Body Mass Calculator",
    description: "Calculate lean body mass.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "LBM = Weight \\times (1 - BF\\%)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "bf", label: "Body Fat Percentage (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "lbm", label: "Lean Body Mass", formula: "weight * (1 - (bf / 100))", unit: "kg" }
    ],
    theory: "Lean body mass is the amount of weight you carry that is not fat.",
    seoMeta: { title: "Lean Body Mass Calculator", description: "Calculate lean body mass.", keywords: "lean body mass" }
  },
  {
    id: "waist-to-hip-ratio-calculator",
    name: "Waist to Hip Ratio Calculator",
    description: "Calculate waist to hip ratio.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "WHR = \\frac{Waist}{Hip}",
    inputs: [
      { id: "waist", label: "Waist Circumference (cm)", type: "number", defaultValue: 80 },
      { id: "hip", label: "Hip Circumference (cm)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "whr", label: "Waist to Hip Ratio", formula: "waist / hip", unit: "" }
    ],
    theory: "WHR is used as an indicator or measure of health, and the risk of developing serious health conditions.",
    seoMeta: { title: "Waist to Hip Ratio Calculator", description: "Calculate waist to hip ratio.", keywords: "waist to hip ratio" }
  },
  {
    id: "waist-to-height-ratio-calculator",
    name: "Waist to Height Ratio Calculator",
    description: "Calculate waist to height ratio.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "WHtR = \\frac{Waist}{Height}",
    inputs: [
      { id: "waist", label: "Waist Circumference (cm)", type: "number", defaultValue: 80 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 }
    ],
    outputs: [
      { id: "whtr", label: "Waist to Height Ratio", formula: "waist / height", unit: "" }
    ],
    theory: "Keeping your waist circumference to less than half your height is associated with increased life expectancy.",
    seoMeta: { title: "Waist to Height Ratio Calculator", description: "Calculate waist to height ratio.", keywords: "waist to height ratio" }
  },
  {
    id: "draw-length-calculator",
    name: "Draw Length Calculator",
    description: "Calculate draw length for archery based on arm span.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Draw\\ Length = \\frac{Arm\\ Span}{2.5}",
    inputs: [
      { id: "span", label: "Arm Span (inches)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "length", label: "Draw Length", formula: "span / 2.5", unit: "inches" }
    ],
    theory: "Draw length is the distance you pull the bowstring back. A simple estimate is arm span divided by 2.5.",
    seoMeta: { title: "Draw Length Calculator | Archery", description: "Calculate draw length.", keywords: "draw length, archery" }
  },
  {
    id: "bedridden-patient-height-calculator",
    name: "Bedridden Patient Height Calculator",
    description: "Estimate height of a bedridden patient using knee height.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Height = f(Knee\\ Height, Age)",
    inputs: [
      { id: "knee", label: "Knee Height (cm)", type: "number", defaultValue: 50 },
      { id: "age", label: "Age", type: "number", defaultValue: 70 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "height", label: "Estimated Height", formula: "gender == 'male' ? 64.19 - (0.04 * age) + (2.02 * knee) : 84.88 - (0.24 * age) + (1.83 * knee)", unit: "cm" }
    ],
    theory: "Chumlea formula is used to estimate stature from knee height in elderly or bedridden patients.",
    seoMeta: { title: "Bedridden Patient Height Calculator", description: "Estimate height from knee height.", keywords: "knee height, height estimation" }
  },
  {
    id: "overweight-calculator",
    name: "Overweight Calculator",
    description: "Calculate excess weight compared to ideal weight.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Excess = Actual - Ideal",
    inputs: [
      { id: "actual", label: "Actual Weight (kg)", type: "number", defaultValue: 80 },
      { id: "ideal", label: "Ideal Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "excess", label: "Excess Weight", formula: "actual - ideal", unit: "kg" }
    ],
    theory: "Calculates the difference between your current weight and estimated ideal body weight.",
    seoMeta: { title: "Overweight Calculator | Excess Weight", description: "Calculate excess weight.", keywords: "overweight, excess weight" }
  },
  {
    id: "weight-loss-percentage-calculator",
    name: "Weight Loss Percentage Calculator",
    description: "Calculate percentage of weight lost.",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "Percentage = \\frac{Initial - Current}{Initial} \\times 100",
    inputs: [
      { id: "initial", label: "Initial Weight (kg)", type: "number", defaultValue: 80 },
      { id: "current", label: "Current Weight (kg)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "perc", label: "Weight Loss Percentage", formula: "((initial - current) / initial) * 100", unit: "%" }
    ],
    theory: "Calculates the percentage of body weight lost, which is a useful metric for tracking progress.",
    seoMeta: { title: "Weight Loss Percentage Calculator", description: "Calculate weight loss percentage.", keywords: "weight loss percentage" }
  },
  {
    id: "skinfold-body-fat-calculator",
    name: "Skinfold Body Fat Calculator",
    description: "Estimate body fat using skinfold measurements (simplified).",
    category: "health",
    subcategory: "body-measurements",
    scientificFormula: "BF\\% = f(Sum\\ of\\ Skinfolds)",
    inputs: [
      { id: "sum", label: "Sum of Skinfolds (mm) - e.g. Chest, Abdomen, Thigh", type: "number", defaultValue: 40 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "bf", label: "Estimated Body Fat", formula: "gender == 'male' ? 1.1093800 - (0.0008267 * sum) + (0.0000016 * sum * sum) - (0.0002574 * age) : 1.0994921 - (0.0009929 * sum) + (0.0000023 * sum * sum) - (0.0001392 * age)", unit: "%" }
    ],
    theory: "Jackson-Pollock formula for body density, converted to fat percentage (simplified here).",
    seoMeta: { title: "Skinfold Body Fat Calculator", description: "Estimate body fat from skinfolds.", keywords: "skinfold, body fat" }
  },
  {
    id: "bmi-calculator-for-men",
    name: "BMI Calculator for Men",
    description: "Calculate Body Mass Index for men.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 80 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.75 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "kg/m²" }
    ],
    theory: "Standard BMI formula applied for men. Interpretation ranges are the same as standard BMI.",
    seoMeta: { title: "BMI Calculator for Men", description: "Calculate BMI for men.", keywords: "BMI for men" }
  },
  {
    id: "bmi-calculator-for-women",
    name: "BMI Calculator for Women",
    description: "Calculate Body Mass Index for women.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 60 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.65 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "kg/m²" }
    ],
    theory: "Standard BMI formula applied for women. Interpretation ranges are the same as standard BMI.",
    seoMeta: { title: "BMI Calculator for Women", description: "Calculate BMI for women.", keywords: "BMI for women" }
  },
  {
    id: "bmi-calculator-for-teens",
    name: "BMI Calculator for Teens",
    description: "Calculate BMI for teenagers (13-19).",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "BMI = \\frac{Weight}{Height^2}",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 50 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.6 },
      { id: "age", label: "Age (years)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "bmi", label: "BMI", formula: "weight / (height^2)", unit: "kg/m²" }
    ],
    theory: "For teens, BMI is interpreted using age and sex-specific percentiles. This calculator shows the raw BMI.",
    seoMeta: { title: "BMI Calculator for Teens", description: "Calculate BMI for teens.", keywords: "BMI for teens" }
  },
  {
    id: "bmi-weight-loss-calculator",
    name: "BMI Weight Loss Calculator",
    description: "Calculate weight loss needed to reach a target BMI.",
    category: "health",
    subcategory: "bmi",
    scientificFormula: "Loss = Actual\\ Weight - (Target\\ BMI \\times Height^2)",
    inputs: [
      { id: "weight", label: "Current Weight (kg)", type: "number", defaultValue: 80 },
      { id: "height", label: "Height (m)", type: "number", defaultValue: 1.7 },
      { id: "target", label: "Target BMI", type: "number", defaultValue: 22 }
    ],
    outputs: [
      { id: "loss", label: "Weight Loss Needed", formula: "weight - (target * (height^2))", unit: "kg" }
    ],
    theory: "Calculates the difference between your current weight and the weight required to achieve your target BMI.",
    seoMeta: { title: "BMI Weight Loss Calculator", description: "Calculate weight loss for target BMI.", keywords: "BMI weight loss" }
  },
  {
    id: "army-body-fat-calculator",
    name: "Army Body Fat Calculator",
    description: "Calculate body fat percentage using the US Army method.",
    category: "health",
    subcategory: "army",
    scientificFormula: "BF\\% = f(Waist, Neck, Height)",
    inputs: [
      { id: "waist", label: "Waist Circumference (cm)", type: "number", defaultValue: 80 },
      { id: "neck", label: "Neck Circumference (cm)", type: "number", defaultValue: 40 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "bf", label: "Estimated Body Fat", formula: "gender == 'male' ? 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76 : 163.205 * log10(waist + 40 - neck) - 97.43 * log10(height) - 78.387", unit: "%" }
    ],
    theory: "The US Army uses circumference measurements to estimate body fat percentage.",
    seoMeta: { title: "Army Body Fat Calculator", description: "Calculate body fat using Army method.", keywords: "Army body fat" }
  },
  {
    id: "navy-body-fat-calculator",
    name: "Navy Body Fat Calculator",
    description: "Calculate body fat percentage using the US Navy method.",
    category: "health",
    subcategory: "army",
    scientificFormula: "BF\\% = f(Waist, Hip, Neck, Height)",
    inputs: [
      { id: "waist", label: "Waist Circumference (cm)", type: "number", defaultValue: 80 },
      { id: "neck", label: "Neck Circumference (cm)", type: "number", defaultValue: 40 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "hip", label: "Hip Circumference (cm) - Female only", type: "number", defaultValue: 90 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "bf", label: "Estimated Body Fat", formula: "gender == 'male' ? 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76 : 163.205 * log10(waist + hip - neck) - 97.43 * log10(height) - 78.387", unit: "%" }
    ],
    theory: "The US Navy method is similar to the Army method but uses hip measurements for women.",
    seoMeta: { title: "Navy Body Fat Calculator", description: "Calculate body fat using Navy method.", keywords: "Navy body fat" }
  },
  {
    id: "acft-calculator",
    name: "ACFT Calculator",
    description: "Calculate Army Combat Fitness Test score (simplified).",
    category: "health",
    subcategory: "army",
    scientificFormula: "Score = \\sum Events",
    inputs: [
      { id: "dl", label: "Deadlift Points (1-100)", type: "number", defaultValue: 60 },
      { id: "spt", label: "Power Throw Points (1-100)", type: "number", defaultValue: 60 },
      { id: "hrp", label: "Pushups Points (1-100)", type: "number", defaultValue: 60 },
      { id: "sdc", label: "Sprint-Drag-Carry Points (1-100)", type: "number", defaultValue: 60 },
      { id: "pl", label: "Plank Points (1-100)", type: "number", defaultValue: 60 },
      { id: "mr", label: "2-Mile Run Points (1-100)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "dl + spt + hrp + sdc + pl + mr", unit: "points" }
    ],
    theory: "The ACFT consists of 6 events. This calculator sums the points for each event.",
    seoMeta: { title: "ACFT Calculator | Army Fitness", description: "Calculate ACFT score.", keywords: "ACFT, Army fitness" }
  },
  {
    id: "apft-calculator",
    name: "APFT Calculator",
    description: "Calculate Army Physical Fitness Test score (simplified).",
    category: "health",
    subcategory: "army",
    scientificFormula: "Score = \\sum Events",
    inputs: [
      { id: "pu", label: "Pushups Points (1-100)", type: "number", defaultValue: 60 },
      { id: "su", label: "Situps Points (1-100)", type: "number", defaultValue: 60 },
      { id: "ru", label: "2-Mile Run Points (1-100)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "pu + su + ru", unit: "points" }
    ],
    theory: "The APFT consists of 3 events. This calculator sums the points for each event.",
    seoMeta: { title: "APFT Calculator | Army Fitness", description: "Calculate APFT score.", keywords: "APFT, Army fitness" }
  },
  {
    id: "aft-calculator",
    name: "AFT Calculator",
    description: "Calculate general Army Fitness Test score.",
    category: "health",
    subcategory: "army",
    scientificFormula: "Score = \\sum Events",
    inputs: [
      { id: "pu", label: "Pushups Points", type: "number", defaultValue: 60 },
      { id: "su", label: "Situps Points", type: "number", defaultValue: 60 },
      { id: "run", label: "Run Points", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "pu + su + run", unit: "points" }
    ],
    theory: "A general representation of Army fitness scoring.",
    seoMeta: { title: "AFT Calculator | Army Fitness", description: "Calculate AFT score.", keywords: "AFT, Army fitness" }
  },
  {
    id: "air-force-pt-calculator",
    name: "Air Force PT Calculator",
    description: "Calculate Air Force Physical Fitness Test score (simplified).",
    category: "health",
    subcategory: "army",
    scientificFormula: "Score = \\sum Events",
    inputs: [
      { id: "pu", label: "Pushups Points (1-20)", type: "number", defaultValue: 10 },
      { id: "su", label: "Situps Points (1-20)", type: "number", defaultValue: 10 },
      { id: "run", label: "1.5-Mile Run Points (1-60)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "pu + su + run", unit: "points" }
    ],
    theory: "The Air Force PT test scores pushups, situps, and a 1.5-mile run.",
    seoMeta: { title: "Air Force PT Calculator", description: "Calculate Air Force PT score.", keywords: "Air Force PT" }
  },
  {
    id: "navy-prt-calculator",
    name: "Navy PRT Calculator",
    description: "Calculate Navy Physical Readiness Test score (simplified).",
    category: "health",
    subcategory: "army",
    scientificFormula: "Score = \\sum Events",
    inputs: [
      { id: "pu", label: "Pushups Points", type: "number", defaultValue: 60 },
      { id: "su", label: "Situps/Plank Points", type: "number", defaultValue: 60 },
      { id: "run", label: "1.5-Mile Run Points", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "pu + su + run", unit: "points" }
    ],
    theory: "The Navy PRT scores pushups, plank, and a 1.5-mile run.",
    seoMeta: { title: "Navy PRT Calculator", description: "Calculate Navy PRT score.", keywords: "Navy PRT" }
  },
  {
    id: "added-sugar-intake-calculator",
    name: "Added Sugar Intake Calculator",
    description: "Calculate recommended maximum added sugar intake.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Sugar = 0.10 \\times Total\\ Calories / 4",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "sugar", label: "Max Added Sugar", formula: "0.10 * calories / 4", unit: "g" }
    ],
    theory: "The WHO recommends that added sugars make up less than 10% of total energy intake.",
    seoMeta: { title: "Added Sugar Intake Calculator", description: "Calculate recommended sugar limit.", keywords: "added sugar intake" }
  },
  {
    id: "bee-calculator",
    name: "BEE Calculator",
    description: "Calculate Basal Energy Expenditure.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BEE = f(Weight, Height, Age)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "bee", label: "BEE", formula: "gender == 'male' ? 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age) : 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)", unit: "kcal/day" }
    ],
    theory: "BEE is the amount of energy expended while at rest in a neutrally temperate environment.",
    seoMeta: { title: "BEE Calculator | Basal Energy Expenditure", description: "Calculate BEE.", keywords: "BEE, basal energy expenditure" }
  },
  {
    id: "harris-benedict-calculator",
    name: "Harris-Benedict Calculator",
    description: "Calculate BMR using the Harris-Benedict equation.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BMR = f(Weight, Height, Age)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "bmr", label: "BMR", formula: "gender == 'male' ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)", unit: "kcal/day" }
    ],
    theory: "The Harris-Benedict equation is a method used to estimate an individual's basal metabolic rate (BMR).",
    seoMeta: { title: "Harris-Benedict Calculator | BMR", description: "Calculate BMR.", keywords: "Harris-Benedict, BMR" }
  },
  {
    id: "katch-mcardle-calculator",
    name: "Katch-McArdle Calculator",
    description: "Calculate BMR using lean body mass.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "BMR = 370 + (21.6 \\times LBM)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "bf", label: "Body Fat Percentage (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "lbm", label: "Lean Body Mass", formula: "weight * (1 - (bf / 100))", unit: "kg" },
      { id: "bmr", label: "BMR", formula: "370 + (21.6 * (weight * (1 - (bf / 100))))", unit: "kcal/day" }
    ],
    theory: "The Katch-McArdle formula is the most accurate BMR formula for people who are relatively lean and know their body fat percentage.",
    seoMeta: { title: "Katch-McArdle Calculator | BMR", description: "Calculate BMR using lean mass.", keywords: "Katch-McArdle, BMR" }
  },
  {
    id: "calorie-deficit-calculator",
    name: "Calorie Deficit Calculator",
    description: "Calculate calories needed for weight loss.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Target = TDEE - Deficit",
    inputs: [
      { id: "tdee", label: "Maintenance Calories (TDEE)", type: "number", defaultValue: 2000 },
      { id: "deficit", label: "Daily Deficit (e.g., 500 for 1lb/week loss)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "target", label: "Target Daily Calories", formula: "tdee - deficit", unit: "kcal" }
    ],
    theory: "A calorie deficit is any shortage in the number of calories consumed relative to the number of calories needed to maintain current body weight.",
    seoMeta: { title: "Calorie Deficit Calculator", description: "Calculate calorie deficit.", keywords: "calorie deficit" }
  },
  {
    id: "carb-calculator",
    name: "Carb Calculator",
    description: "Calculate recommended carbohydrate intake.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Carbs = Calories \\times \\%Carbs / 4",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 },
      { id: "perc", label: "Carb Percentage (e.g., 0.5 for 50%)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "carbs", label: "Daily Carbohydrates", formula: "(calories * perc) / 4", unit: "g" }
    ],
    theory: "Carbohydrates provide 4 calories per gram.",
    seoMeta: { title: "Carb Calculator | Nutrition", description: "Calculate carbohydrate intake.", keywords: "carb calculator" }
  },
  {
    id: "fat-intake-calculator",
    name: "Fat Intake Calculator",
    description: "Calculate recommended fat intake.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Fat = Calories \\times \\%Fat / 9",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 },
      { id: "perc", label: "Fat Percentage (e.g., 0.3 for 30%)", type: "number", defaultValue: 0.3 }
    ],
    outputs: [
      { id: "fat", label: "Daily Fat Intake", formula: "(calories * perc) / 9", unit: "g" }
    ],
    theory: "Fats provide 9 calories per gram.",
    seoMeta: { title: "Fat Intake Calculator | Nutrition", description: "Calculate fat intake.", keywords: "fat intake" }
  },
  {
    id: "fiber-calculator",
    name: "Fiber Calculator",
    description: "Calculate recommended fiber intake.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Fiber = 14 \\times \\frac{Calories}{1000}",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "fiber", label: "Daily Fiber Goal", formula: "14 * (calories / 1000)", unit: "g" }
    ],
    theory: "The Institute of Medicine recommends 14 grams of fiber for every 1,000 calories consumed.",
    seoMeta: { title: "Fiber Calculator | Nutrition", description: "Calculate fiber intake.", keywords: "fiber calculator" }
  },
  {
    id: "maintenance-calorie-calculator",
    name: "Maintenance Calorie Calculator",
    description: "Alias for TDEE.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Maintenance = TDEE",
    inputs: [
      { id: "bmr", label: "BMR (kcal)", type: "number", defaultValue: 1500 },
      { id: "activity", label: "Activity Factor (e.g., 1.2 for sedentary)", type: "number", defaultValue: 1.2 }
    ],
    outputs: [
      { id: "maint", label: "Maintenance Calories", formula: "bmr * activity", unit: "kcal" }
    ],
    theory: "Maintenance calories are the total number of calories you need to consume each day to maintain your current weight.",
    seoMeta: { title: "Maintenance Calorie Calculator", description: "Calculate maintenance calories.", keywords: "maintenance calories" }
  },
  {
    id: "iifym-calculator",
    name: "IIFYM Calculator",
    description: "Calculate macros for If It Fits Your Macros.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Macros = f(Calories, Goals)",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 },
      { id: "protein_g", label: "Protein (g/lb of body weight)", type: "number", defaultValue: 1 },
      { id: "weight_lb", label: "Body Weight (lbs)", type: "number", defaultValue: 150 },
      { id: "fat_perc", label: "Fat Percentage (as fraction)", type: "number", defaultValue: 0.25 }
    ],
    outputs: [
      { id: "protein", label: "Protein", formula: "protein_g * weight_lb", unit: "g" },
      { id: "fat", label: "Fat", formula: "(calories * fat_perc) / 9", unit: "g" },
      { id: "carbs", label: "Carbs", formula: "(calories - (protein_g * weight_lb * 4) - (calories * fat_perc)) / 4", unit: "g" }
    ],
    theory: "IIFYM is a method of dieting that focuses on tracking macronutrients rather than eating specific foods.",
    seoMeta: { title: "IIFYM Calculator | Macros", description: "Calculate IIFYM macros.", keywords: "IIFYM, macros" }
  },
  {
    id: "keto-calculator",
    name: "Keto Calculator",
    description: "Calculate macros for a ketogenic diet.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Macros = f(Calories, Keto\\ Ratio)",
    inputs: [
      { id: "calories", label: "Total Daily Calories", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "carbs", label: "Carbs (5%)", formula: "(calories * 0.05) / 4", unit: "g" },
      { id: "protein", label: "Protein (25%)", formula: "(calories * 0.25) / 4", unit: "g" },
      { id: "fat", label: "Fat (70%)", formula: "(calories * 0.70) / 9", unit: "g" }
    ],
    theory: "A standard ketogenic diet typically contains 70% fat, 25% protein, and 5% carbohydrate.",
    seoMeta: { title: "Keto Calculator | Macros", description: "Calculate keto macros.", keywords: "keto calculator" }
  },
  {
    id: "net-carbs-calculator",
    name: "Net Carbs Calculator",
    description: "Calculate net carbohydrates.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Net\\ Carbs = Total\\ Carbs - Fiber - Sugar\\ Alcohols",
    inputs: [
      { id: "total", label: "Total Carbohydrates (g)", type: "number", defaultValue: 30 },
      { id: "fiber", label: "Dietary Fiber (g)", type: "number", defaultValue: 5 },
      { id: "sugar_alc", label: "Sugar Alcohols (g)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "net", label: "Net Carbs", formula: "total - fiber - sugar_alc", unit: "g" }
    ],
    theory: "Net carbs are the carbohydrates that your body digests and turns into glucose.",
    seoMeta: { title: "Net Carbs Calculator", description: "Calculate net carbs.", keywords: "net carbs" }
  },
  {
    id: "meal-calorie-calculator",
    name: "Meal Calorie Calculator",
    description: "Calculate total calories in a meal.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Calories = \\sum (Grams \\times Cal/g)",
    inputs: [
      { id: "carbs", label: "Carbohydrates (g)", type: "number", defaultValue: 50 },
      { id: "protein", label: "Protein (g)", type: "number", defaultValue: 30 },
      { id: "fat", label: "Fat (g)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "total", label: "Total Calories", formula: "(carbs * 4) + (protein * 4) + (fat * 9)", unit: "kcal" }
    ],
    theory: "Carbs and protein provide 4 kcal/g, while fats provide 9 kcal/g.",
    seoMeta: { title: "Meal Calorie Calculator", description: "Calculate meal calories.", keywords: "meal calories" }
  },
  {
    id: "sodium-in-salt-calculator",
    name: "Sodium in Salt Calculator",
    description: "Calculate sodium content in table salt.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Sodium = Salt \\times 0.3934",
    inputs: [
      { id: "salt", label: "Salt (g)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "sodium", label: "Sodium Content", formula: "salt * 0.3934", unit: "g" }
    ],
    theory: "Table salt (NaCl) is approximately 40% sodium by weight.",
    seoMeta: { title: "Sodium in Salt Calculator", description: "Calculate sodium in salt.", keywords: "sodium in salt" }
  },
  {
    id: "weight-gain-calculator",
    name: "Weight Gain Calculator",
    description: "Calculate calories needed for weight gain.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Target = TDEE + Surplus",
    inputs: [
      { id: "tdee", label: "Maintenance Calories (TDEE)", type: "number", defaultValue: 2000 },
      { id: "surplus", label: "Daily Surplus (e.g., 500 for 1lb/week gain)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "target", label: "Target Daily Calories", formula: "tdee + surplus", unit: "kcal" }
    ],
    theory: "To gain weight, you need to consume more calories than you burn.",
    seoMeta: { title: "Weight Gain Calculator", description: "Calculate calories for weight gain.", keywords: "weight gain calculator" }
  },
  {
    id: "weight-watchers-points-calculator",
    name: "Weight Watchers Points Calculator",
    description: "Estimate points for a food item (simplified).",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Points = \\frac{Cal}{50} + \\frac{Fat}{12} - \\frac{Fiber}{5}",
    inputs: [
      { id: "cal", label: "Calories", type: "number", defaultValue: 200 },
      { id: "fat", label: "Fat (g)", type: "number", defaultValue: 5 },
      { id: "fiber", label: "Fiber (g)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "points", label: "Estimated Points", formula: "(cal / 50) + (fat / 12) - (fiber / 5)", unit: "points" }
    ],
    theory: "This is a simplified representation of older Weight Watchers formulas.",
    seoMeta: { title: "Weight Watchers Points Calculator", description: "Estimate WW points.", keywords: "Weight Watchers points" }
  },
  {
    id: "rmr-calculator",
    name: "RMR Calculator - Resting Metabolic Rate",
    description: "Calculate RMR (similar to BMR).",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "RMR = f(Weight, Height, Age)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "rmr", label: "RMR", formula: "gender == 'male' ? 500 + (22 * weight) : 500 + (22 * weight * 0.9)", unit: "kcal/day" }
    ],
    theory: "Cunningham equation or simplified BMR used for RMR estimation.",
    seoMeta: { title: "RMR Calculator | Resting Metabolic Rate", description: "Calculate RMR.", keywords: "RMR, resting metabolic rate" }
  },
  {
    id: "vitamin-a-calculator",
    name: "Vitamin A Calculator",
    description: "Calculate Vitamin A intake against daily value.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Percentage = \\frac{Intake}{DV} \\times 100",
    inputs: [
      { id: "intake", label: "Vitamin A Intake (mcg RAE)", type: "number", defaultValue: 500 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "900", value: "900" }, { label: "700", value: "700" }], defaultValue: "900" }
    ],
    outputs: [
      { id: "perc", label: "Percentage of Daily Value", formula: "(intake / gender) * 100", unit: "%" }
    ],
    theory: "Daily values are 900 mcg for men and 700 mcg for women.",
    seoMeta: { title: "Vitamin A Calculator", description: "Calculate Vitamin A intake.", keywords: "Vitamin A calculator" }
  },
  {
    id: "vitamin-d-calculator",
    name: "Vitamin D Calculator",
    description: "Calculate Vitamin D intake against daily value.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Percentage = \\frac{Intake}{DV} \\times 100",
    inputs: [
      { id: "intake", label: "Vitamin D Intake (IU)", type: "number", defaultValue: 400 }
    ],
    outputs: [
      { id: "perc", label: "Percentage of Daily Value", formula: "(intake / 600) * 100", unit: "%" }
    ],
    theory: "Daily value is 600 IU for most adults.",
    seoMeta: { title: "Vitamin D Calculator", description: "Calculate Vitamin D intake.", keywords: "Vitamin D calculator" }
  },
  {
    id: "micronutrient-calculator",
    name: "Micronutrient Calculator",
    description: "Track general micronutrient targets.",
    category: "health",
    subcategory: "dietary",
    scientificFormula: "Status = f(Intake)",
    inputs: [
      { id: "iron", label: "Iron Intake (mg)", type: "number", defaultValue: 10 },
      { id: "calcium", label: "Calcium Intake (mg)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "iron_perc", label: "Iron % of DV (18mg)", formula: "(iron / 18) * 100", unit: "%" },
      { id: "calcium_perc", label: "Calcium % of DV (1000mg)", formula: "(calcium / 1000) * 100", unit: "%" }
    ],
    theory: "Compares intake against general daily values.",
    seoMeta: { title: "Micronutrient Calculator", description: "Track micronutrients.", keywords: "micronutrient calculator" }
  },
  {
    id: "diabetes-risk-calculator",
    name: "Diabetes Risk Calculator",
    description: "Estimate risk of developing Type 2 diabetes.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "Risk = f(Age, BMI, Family\\ History)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 45 },
      { id: "bmi", label: "BMI", type: "number", defaultValue: 27 },
      { id: "history", label: "Family History (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Risk Score (0-10)", formula: "(age > 45 ? 2 : 0) + (bmi > 25 ? 2 : 0) + (history * 2)", unit: "" }
    ],
    theory: "A simplified risk score. Higher scores indicate higher risk.",
    seoMeta: { title: "Diabetes Risk Calculator", description: "Estimate diabetes risk.", keywords: "diabetes risk" }
  },
  {
    id: "diabetic-ketoacidosis-calculator",
    name: "Diabetic Ketoacidosis Calculator",
    description: "Assess DKA severity.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "Anion\\ Gap = Na - (Cl + HCO3)",
    inputs: [
      { id: "na", label: "Sodium (mEq/L)", type: "number", defaultValue: 135 },
      { id: "cl", label: "Chloride (mEq/L)", type: "number", defaultValue: 100 },
      { id: "hco3", label: "Bicarbonate (mEq/L)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "ag", label: "Anion Gap", formula: "na - (cl + hco3)", unit: "mEq/L" }
    ],
    theory: "An elevated anion gap is typical in DKA.",
    seoMeta: { title: "Diabetic Ketoacidosis Calculator", description: "Assess DKA.", keywords: "DKA, diabetic ketoacidosis" }
  },
  {
    id: "estimated-average-glucose-calculator",
    name: "Estimated Average Glucose Calculator",
    description: "Convert A1c to average glucose.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "eAG = 28.7 \\times A1c - 46.7",
    inputs: [
      { id: "a1c", label: "A1c (%)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "eag", label: "Estimated Average Glucose", formula: "28.7 * a1c - 46.7", unit: "mg/dL" }
    ],
    theory: "Formula used to convert Hemoglobin A1c percentage to estimated average glucose.",
    seoMeta: { title: "Estimated Average Glucose Calculator", description: "Convert A1c to eAG.", keywords: "eAG, A1c" }
  },
  {
    id: "glycemic-load-calculator",
    name: "Glycemic Load Calculator",
    description: "Calculate Glycemic Load.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "GL = \\frac{GI \\times Carbs}{100}",
    inputs: [
      { id: "gi", label: "Glycemic Index", type: "number", defaultValue: 50 },
      { id: "carbs", label: "Carbohydrates per Serving (g)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "gl", label: "Glycemic Load", formula: "(gi * carbs) / 100", unit: "" }
    ],
    theory: "Glycemic load estimates the impact of carbohydrate consumption using the glycemic index while taking into account the amount of carbohydrates that are consumed.",
    seoMeta: { title: "Glycemic Load Calculator", description: "Calculate glycemic load.", keywords: "glycemic load" }
  },
  {
    id: "insulin-dosage-calculator",
    name: "Insulin Dosage Calculator",
    description: "Calculate mealtime insulin dose.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "Dose = \\frac{Carbs}{ICR}",
    inputs: [
      { id: "carbs", label: "Total Carbohydrates in Meal (g)", type: "number", defaultValue: 60 },
      { id: "icr", label: "Insulin to Carb Ratio (g/unit)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "dose", label: "Insulin Dose", formula: "carbs / icr", unit: "units" }
    ],
    theory: "Calculates the amount of rapid-acting insulin needed cover carbohydrates in a meal.",
    seoMeta: { title: "Insulin Dosage Calculator", description: "Calculate insulin dose.", keywords: "insulin dosage" }
  },
  {
    id: "quicki-calculator",
    name: "QUICKI Calculator",
    description: "Calculate Quantitative Insulin Sensitivity Check Index.",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "QUICKI = \\frac{1}{\\log(Insulin) + \\log(Glucose)}",
    inputs: [
      { id: "insulin", label: "Fasting Insulin (uU/mL)", type: "number", defaultValue: 10 },
      { id: "glucose", label: "Fasting Glucose (mg/dL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "quicki", label: "QUICKI Score", formula: "1 / (log10(insulin) + log10(glucose))", unit: "" }
    ],
    theory: "QUICKI is a method for assessing insulin sensitivity.",
    seoMeta: { title: "QUICKI Calculator | Insulin Sensitivity", description: "Calculate QUICKI.", keywords: "QUICKI, insulin sensitivity" }
  },
  {
    id: "warsaw-method-calculator",
    name: "Warsaw Method Calculator",
    description: "Estimate total daily insulin dose (Warsaw method).",
    category: "health",
    subcategory: "diabetes",
    scientificFormula: "TDD = Weight \\times 0.55",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "tdd", label: "Total Daily Dose", formula: "weight * 0.55", unit: "units" }
    ],
    theory: "The Warsaw method is a way to estimate total daily insulin dose based on body weight.",
    seoMeta: { title: "Warsaw Method Calculator", description: "Estimate insulin dose.", keywords: "Warsaw method" }
  },
  {
    id: "cholesterol-ratio-calculator",
    name: "Cholesterol Ratio Calculator",
    description: "Calculate Total to HDL cholesterol ratio.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "Ratio = \\frac{Total\\ Cholesterol}{HDL}",
    inputs: [
      { id: "total", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "hdl", label: "HDL Cholesterol (mg/dL)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "ratio", label: "Cholesterol Ratio", formula: "total / hdl", unit: "" }
    ],
    theory: "A higher ratio indicates a higher risk of heart disease. A ratio below 5.0 is considered average risk.",
    seoMeta: { title: "Cholesterol Ratio Calculator", description: "Calculate cholesterol ratio.", keywords: "cholesterol ratio" }
  },
  {
    id: "cholesterol-units-converter",
    name: "Cholesterol Units Converter",
    description: "Convert cholesterol between mg/dL and mmol/L.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "mmol/L = \\frac{mg/dL}{38.67}",
    inputs: [
      { id: "mgdl", label: "Cholesterol (mg/dL)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "mmol", label: "Cholesterol (mmol/L)", formula: "mgdl / 38.67", unit: "mmol/L" }
    ],
    theory: "To convert cholesterol from mg/dL to mmol/L, divide by 38.67.",
    seoMeta: { title: "Cholesterol Units Converter", description: "Convert cholesterol units.", keywords: "cholesterol converter" }
  },
  {
    id: "ldl-calculator",
    name: "LDL Calculator",
    description: "Calculate LDL cholesterol using the Friedewald equation.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "LDL = Total - HDL - \\frac{Triglycerides}{5}",
    inputs: [
      { id: "total", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "hdl", label: "HDL Cholesterol (mg/dL)", type: "number", defaultValue: 50 },
      { id: "trig", label: "Triglycerides (mg/dL)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "ldl", label: "Calculated LDL", formula: "total - hdl - (trig / 5)", unit: "mg/dL" }
    ],
    theory: "The Friedewald equation is valid only if triglycerides are less than 400 mg/dL.",
    seoMeta: { title: "LDL Calculator | Friedewald Equation", description: "Calculate LDL cholesterol.", keywords: "LDL calculator" }
  },
  {
    id: "vldl-calculator",
    name: "VLDL Calculator",
    description: "Estimate VLDL cholesterol.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "VLDL = \\frac{Triglycerides}{5}",
    inputs: [
      { id: "trig", label: "Triglycerides (mg/dL)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "vldl", label: "VLDL Cholesterol", formula: "trig / 5", unit: "mg/dL" }
    ],
    theory: "VLDL is estimated as 20% of the triglyceride level.",
    seoMeta: { title: "VLDL Calculator", description: "Estimate VLDL cholesterol.", keywords: "VLDL calculator" }
  },
  {
    id: "metabolic-syndrome-calculator",
    name: "Metabolic Syndrome Calculator",
    description: "Check criteria for metabolic syndrome.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "Criteria \\ge 3",
    inputs: [
      { id: "waist", label: "Waist > 102cm(M) or 88cm(F) (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "bp", label: "BP >= 130/85 (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "glucose", label: "Glucose >= 100 mg/dL (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "hdl", label: "Low HDL (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "trig", label: "Triglycerides >= 150 mg/dL (1 for Yes, 0 for No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "criteria", label: "Criteria Met", formula: "waist + bp + glucose + hdl + trig", unit: "" }
    ],
    theory: "Metabolic syndrome is diagnosed if 3 or more criteria are met.",
    seoMeta: { title: "Metabolic Syndrome Calculator", description: "Check metabolic syndrome criteria.", keywords: "metabolic syndrome" }
  },
  {
    id: "saag-calculator",
    name: "SAAG Calculator",
    description: "Calculate Serum-Ascites Albumin Gradient.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "SAAG = Serum\\ Albumin - Ascites\\ Albumin",
    inputs: [
      { id: "serum", label: "Serum Albumin (g/dL)", type: "number", defaultValue: 3.5 },
      { id: "ascites", label: "Ascites Albumin (g/dL)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "saag", label: "SAAG", formula: "serum - ascites", unit: "g/dL" }
    ],
    theory: "A gradient >= 1.1 g/dL indicates portal hypertension.",
    seoMeta: { title: "SAAG Calculator | Ascites", description: "Calculate SAAG.", keywords: "SAAG, ascites" }
  },
  {
    id: "gout-diagnosis-calculator",
    name: "Gout Diagnosis Calculator",
    description: "Simplified score for gout diagnosis.",
    category: "health",
    subcategory: "metabolic",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "male", label: "Male gender (2 points)", type: "number", defaultValue: 2 },
      { id: "attack", label: "Previous attack (2 points)", type: "number", defaultValue: 2 },
      { id: "red", label: "Redness (1 point)", type: "number", defaultValue: 1 },
      { id: "uric", label: "Uric acid > 6 mg/dL (3.5 points)", type: "number", defaultValue: 3.5 }
    ],
    outputs: [
      { id: "score", label: "Gout Score", formula: "male + attack + red + uric", unit: "points" }
    ],
    theory: "A score >= 8 suggests gout.",
    seoMeta: { title: "Gout Diagnosis Calculator", description: "Score for gout diagnosis.", keywords: "gout score" }
  },
  {
    id: "ahi-calculator",
    name: "AHI Calculator | Apnea-Hypopnea Index",
    description: "Calculate Apnea-Hypopnea Index.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "AHI = \\frac{Apneas + Hypopneas}{Hours\\ of\\ Sleep}",
    inputs: [
      { id: "apneas", label: "Number of Apneas", type: "number", defaultValue: 10 },
      { id: "hypopneas", label: "Number of Hypopneas", type: "number", defaultValue: 15 },
      { id: "hours", label: "Actual Sleep Time (hours)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "ahi", label: "AHI", formula: "(apneas + hypopneas) / hours", unit: "events/hr" }
    ],
    theory: "AHI is used to assess the severity of sleep apnea. < 5 is normal, 5-15 is mild, 15-30 is moderate, > 30 is severe.",
    seoMeta: { title: "AHI Calculator | Sleep Apnea", description: "Calculate AHI.", keywords: "AHI, sleep apnea" }
  },
  {
    id: "epworth-sleepiness-scale-calculator",
    name: "Epworth Sleepiness Scale Calculator",
    description: "Assess daytime sleepiness.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Score = \\sum Questions",
    inputs: [
      { id: "q1", label: "Sitting and reading (0-3)", type: "number", defaultValue: 1 },
      { id: "q2", label: "Watching TV (0-3)", type: "number", defaultValue: 1 },
      { id: "q3", label: "Sitting inactive in a public place (0-3)", type: "number", defaultValue: 1 },
      { id: "q4", label: "As a passenger in a car for an hour (0-3)", type: "number", defaultValue: 1 },
      { id: "q5", label: "Lying down to rest in the afternoon (0-3)", type: "number", defaultValue: 2 },
      { id: "q6", label: "Sitting and talking to someone (0-3)", type: "number", defaultValue: 0 },
      { id: "q7", label: "Sitting quietly after a lunch without alcohol (0-3)", type: "number", defaultValue: 1 },
      { id: "q8", label: "In a car, while stopped for a few minutes in traffic (0-3)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8", unit: "points" }
    ],
    theory: "A score of 10 or more is considered sleepy. A score of 18 or more is very sleepy.",
    seoMeta: { title: "Epworth Sleepiness Scale Calculator", description: "Assess sleepiness.", keywords: "Epworth scale" }
  },
  {
    id: "pediatric-epworth-sleepiness-scale-calculator",
    name: "Pediatric Epworth Sleepiness Scale Calculator",
    description: "Assess daytime sleepiness in children.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Score = \\sum Questions",
    inputs: [
      { id: "q1", label: "Sitting and reading (0-3)", type: "number", defaultValue: 1 },
      { id: "q2", label: "Watching TV (0-3)", type: "number", defaultValue: 1 },
      { id: "q3", label: "Sitting in a classroom (0-3)", type: "number", defaultValue: 1 },
      { id: "q4", label: "As a passenger in a car (0-3)", type: "number", defaultValue: 1 },
      { id: "q5", label: "Lying down to rest after school (0-3)", type: "number", defaultValue: 2 },
      { id: "q6", label: "Sitting and talking to someone (0-3)", type: "number", defaultValue: 0 },
      { id: "q7", label: "Sitting quietly after lunch (0-3)", type: "number", defaultValue: 1 },
      { id: "q8", label: "In a car, while stopped in traffic (0-3)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8", unit: "points" }
    ],
    theory: "Similar to the adult version but tailored for children.",
    seoMeta: { title: "Pediatric Epworth Sleepiness Scale", description: "Assess sleepiness in kids.", keywords: "pediatric Epworth" }
  },
  {
    id: "sleep-debt-calculator",
    name: "Sleep Debt Calculator",
    description: "Calculate accumulated sleep debt.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Debt = (Ideal - Actual) \\times Days",
    inputs: [
      { id: "ideal", label: "Ideal Sleep per Night (hours)", type: "number", defaultValue: 8 },
      { id: "actual", label: "Actual Sleep per Night (hours)", type: "number", defaultValue: 6 },
      { id: "days", label: "Number of Days", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "debt", label: "Total Sleep Debt", formula: "(ideal - actual) * days", unit: "hours" }
    ],
    theory: "Sleep debt is the difference between the amount of sleep you should be getting and the amount you actually get.",
    seoMeta: { title: "Sleep Debt Calculator", description: "Calculate sleep debt.", keywords: "sleep debt" }
  },
  {
    id: "stop-bang-calculator",
    name: "STOP-BANG Calculator",
    description: "Screen for obstructive sleep apnea.",
    category: "health",
    subcategory: "sleep",
    scientificFormula: "Score = \\sum Yes",
    inputs: [
      { id: "s", label: "Snoring loud? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "t", label: "Tired during day? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "o", label: "Observed apnea? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "p", label: "Pressure (High BP)? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "b", label: "BMI > 35? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "a", label: "Age > 50? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "n", label: "Neck circumference > 40cm? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "g", label: "Gender Male? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "STOP-BANG Score", formula: "s + t + o + p + b + a + n + g", unit: "points" }
    ],
    theory: "A score of 3 or more indicates a high risk for OSA.",
    seoMeta: { title: "STOP-BANG Calculator | Sleep Apnea", description: "Screen for OSA.", keywords: "STOP-BANG, sleep apnea" }
  },
  {
    id: "6-minute-walk-test-calculator",
    name: "6 Minute Walk Test Calculator",
    description: "Calculate predicted 6-minute walk distance.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Distance = f(Age, Height, Weight)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 170 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "gender", label: "Gender", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }], defaultValue: "male" }
    ],
    outputs: [
      { id: "predicted", label: "Predicted Distance", formula: "gender == 'male' ? (7.57 * height) - (5.02 * age) - (1.76 * weight) - 309 : (2.11 * height) - (2.29 * age) - (0.57 * weight) + 667", unit: "m" }
    ],
    theory: "Enright formula for predicting 6MWD in healthy adults.",
    seoMeta: { title: "6 Minute Walk Test Calculator", description: "Predict 6MWD.", keywords: "6MWT, walk test" }
  },
  {
    id: "abi-calculator",
    name: "ABI Calculator",
    description: "Calculate Ankle-Brachial Index.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "ABI = \\frac{Ankle\\ SBP}{Brachial\\ SBP}",
    inputs: [
      { id: "ankle", label: "Highest Ankle Systolic BP (mmHg)", type: "number", defaultValue: 120 },
      { id: "brachial", label: "Highest Brachial Systolic BP (mmHg)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "abi", label: "ABI", formula: "ankle / brachial", unit: "" }
    ],
    theory: "Normal ABI is 1.0 - 1.4. < 0.9 indicates peripheral artery disease.",
    seoMeta: { title: "ABI Calculator | Ankle-Brachial Index", description: "Calculate ABI.", keywords: "ABI, ankle-brachial index" }
  },
  {
    id: "cardiac-index-calculator",
    name: "Cardiac Index Calculator",
    description: "Calculate Cardiac Index.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "CI = \\frac{Cardiac\\ Output}{BSA}",
    inputs: [
      { id: "co", label: "Cardiac Output (L/min)", type: "number", defaultValue: 5 },
      { id: "bsa", label: "Body Surface Area (m²)", type: "number", defaultValue: 1.8 }
    ],
    outputs: [
      { id: "ci", label: "Cardiac Index", formula: "co / bsa", unit: "L/min/m²" }
    ],
    theory: "Normal range is 2.5 - 4.0 L/min/m².",
    seoMeta: { title: "Cardiac Index Calculator", description: "Calculate cardiac index.", keywords: "cardiac index" }
  },
  {
    id: "cerebral-perfusion-pressure-calculator",
    name: "Cerebral Perfusion Pressure Calculator",
    description: "Calculate Cerebral Perfusion Pressure.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "CPP = MAP - ICP",
    inputs: [
      { id: "map", label: "Mean Arterial Pressure (mmHg)", type: "number", defaultValue: 90 },
      { id: "icp", label: "Intracranial Pressure (mmHg)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "cpp", label: "CPP", formula: "map - icp", unit: "mmHg" }
    ],
    theory: "Normal CPP is 70-90 mmHg.",
    seoMeta: { title: "Cerebral Perfusion Pressure Calculator", description: "Calculate CPP.", keywords: "CPP, cerebral perfusion pressure" }
  },
  {
    id: "cha2ds2-vasc-calculator",
    name: "CHA2DS2-Vasc Calculator",
    description: "Stroke risk in atrial fibrillation.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "c", label: "CHF history (1 point)", type: "number", defaultValue: 0 },
      { id: "h", label: "Hypertension history (1 point)", type: "number", defaultValue: 1 },
      { id: "a", label: "Age >= 75 (2 points)", type: "number", defaultValue: 0 },
      { id: "d", label: "Diabetes history (1 point)", type: "number", defaultValue: 0 },
      { id: "s", label: "Stroke/TIA history (2 points)", type: "number", defaultValue: 0 },
      { id: "v", label: "Vascular disease (1 point)", type: "number", defaultValue: 0 },
      { id: "a2", label: "Age 65-74 (1 point)", type: "number", defaultValue: 1 },
      { id: "sc", label: "Sex category Female (1 point)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "Score", formula: "c + h + a + d + s + v + a2 + sc", unit: "points" }
    ],
    theory: "Used to determine the need for anticoagulation in AF.",
    seoMeta: { title: "CHA2DS2-Vasc Calculator", description: "Score for stroke risk.", keywords: "CHA2DS2-Vasc" }
  },
  {
    id: "map-calculator",
    name: "MAP Calculator",
    description: "Calculate Mean Arterial Pressure.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "MAP = DBP + \\frac{SBP - DBP}{3}",
    inputs: [
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 },
      { id: "dbp", label: "Diastolic BP (mmHg)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "map", label: "MAP", formula: "dbp + ((sbp - dbp) / 3)", unit: "mmHg" }
    ],
    theory: "MAP represents the average pressure in a patient's arteries during one cardiac cycle.",
    seoMeta: { title: "MAP Calculator | Mean Arterial Pressure", description: "Calculate MAP.", keywords: "MAP, mean arterial pressure" }
  },
  {
    id: "qtc-calculator",
    name: "QTc Calculator",
    description: "Calculate corrected QT interval.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "QTc = \\frac{QT}{\\sqrt{RR}}",
    inputs: [
      { id: "qt", label: "QT Interval (ms)", type: "number", defaultValue: 400 },
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "qtc", label: "QTc (Bazett)", formula: "qt / sqrt(60 / hr)", unit: "ms" }
    ],
    theory: "Corrects the QT interval for heart rate using Bazett's formula.",
    seoMeta: { title: "QTc Calculator | ECG", description: "Calculate corrected QT.", keywords: "QTc, ECG" }
  },
  {
    id: "rate-pressure-product-calculator",
    name: "Rate Pressure Product Calculator",
    description: "Calculate Rate Pressure Product.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "RPP = HR \\times SBP",
    inputs: [
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 70 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "rpp", label: "RPP", formula: "hr * sbp", unit: "bpm*mmHg" }
    ],
    theory: "RPP is a measure of the stress put on the cardiac muscle.",
    seoMeta: { title: "Rate Pressure Product Calculator", description: "Calculate RPP.", keywords: "RPP, cardiac stress" }
  },
  {
    id: "cvd-risk-calculator",
    name: "CVD Risk Calculator",
    description: "Estimate 10-year cardiovascular risk (simplified).",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Risk = f(Age, Chol, BP, Smoker)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 50 },
      { id: "chol", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 130 },
      { id: "smoker", label: "Smoker (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Estimated Risk", formula: "(age > 50 ? 5 : 2) + (chol > 200 ? 3 : 1) + (sbp > 140 ? 4 : 1) + (smoker * 5)", unit: "%" }
    ],
    theory: "A very simplified representation of CVD risk scores.",
    seoMeta: { title: "CVD Risk Calculator", description: "Estimate CVD risk.", keywords: "CVD risk" }
  },
  {
    id: "wells-score-for-pe",
    name: "Wells Score for Pulmonary Embolism",
    description: "Score for PE probability.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "c1", label: "Clinically suspected DVT (3 points)", type: "number", defaultValue: 0 },
      { id: "c2", label: "Alternative diagnosis less likely than PE (3 points)", type: "number", defaultValue: 3 },
      { id: "c3", label: "Heart rate > 100 (1.5 points)", type: "number", defaultValue: 1.5 },
      { id: "c4", label: "Immobilization or surgery (1.5 points)", type: "number", defaultValue: 0 },
      { id: "c5", label: "Previous DVT/PE (1.5 points)", type: "number", defaultValue: 0 },
      { id: "c6", label: "Hemoptysis (1 point)", type: "number", defaultValue: 0 },
      { id: "c7", label: "Malignancy (1 point)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Wells Score", formula: "c1 + c2 + c3 + c4 + c5 + c6 + c7", unit: "points" }
    ],
    theory: "Used to determine the probability of pulmonary embolism.",
    seoMeta: { title: "Wells Score for PE", description: "Score for PE probability.", keywords: "Wells score, PE" }
  },
  {
    id: "duke-treadmill-score-calculator",
    name: "Duke Treadmill Score Calculator",
    description: "Calculate Duke Treadmill Score for prognosticating CAD.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = Time - (5 \\times ST) - (4 \\times Angina)",
    inputs: [
      { id: "time", label: "Exercise Time (minutes)", type: "number", defaultValue: 10 },
      { id: "st", label: "ST Segment Deviation (mm)", type: "number", defaultValue: 1 },
      { id: "angina", label: "Angina Index (0=None, 1=Non-limiting, 2=Limiting)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "Duke Score", formula: "time - (5 * st) - (4 * angina)", unit: "" }
    ],
    theory: "Scores >= 5 are low risk, -10 to +4 are moderate risk, < -10 are high risk.",
    seoMeta: { title: "Duke Treadmill Score Calculator", description: "Calculate Duke score.", keywords: "Duke score, treadmill" }
  },
  {
    id: "ecg-heart-rate-calculator",
    name: "ECG Heart Rate Calculator",
    description: "Calculate heart rate from ECG strip.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "HR = \\frac{300}{Large\\ Boxes}",
    inputs: [
      { id: "boxes", label: "Number of Large Boxes between R-R", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "hr", label: "Heart Rate", formula: "300 / boxes", unit: "bpm" }
    ],
    theory: "A quick method to estimate heart rate on a standard ECG.",
    seoMeta: { title: "ECG Heart Rate Calculator", description: "Estimate HR from ECG.", keywords: "ECG heart rate" }
  },
  {
    id: "framingham-risk-calculator",
    name: "Framingham Risk Calculator",
    description: "Estimate 10-year cardiovascular risk.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Risk = f(Age, Chol, BP, Smoker)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 50 },
      { id: "chol", label: "Total Cholesterol (mg/dL)", type: "number", defaultValue: 200 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 130 },
      { id: "smoker", label: "Smoker (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Estimated Risk", formula: "(age > 50 ? 5 : 2) + (chol > 200 ? 3 : 1) + (sbp > 140 ? 4 : 1) + (smoker * 5)", unit: "%" }
    ],
    theory: "A simplified representation of the Framingham Risk Score.",
    seoMeta: { title: "Framingham Risk Calculator", description: "Estimate CVD risk.", keywords: "Framingham risk" }
  },
  {
    id: "has-bled-calculator",
    name: "HAS-BLED Calculator",
    description: "Bleeding risk in atrial fibrillation.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "h", label: "Hypertension (1 point)", type: "number", defaultValue: 1 },
      { id: "a", label: "Abnormal renal/liver function (1 or 2 points)", type: "number", defaultValue: 0 },
      { id: "s", label: "Stroke history (1 point)", type: "number", defaultValue: 0 },
      { id: "b", label: "Bleeding history/disposition (1 point)", type: "number", defaultValue: 0 },
      { id: "l", label: "Labile INRs (1 point)", type: "number", defaultValue: 0 },
      { id: "e", label: "Elderly (Age > 65) (1 point)", type: "number", defaultValue: 1 },
      { id: "d", label: "Drugs/Alcohol (1 or 2 points)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "HAS-BLED Score", formula: "h + a + s + b + l + e + d", unit: "points" }
    ],
    theory: "A score >= 3 indicates high risk for bleeding with anticoagulation.",
    seoMeta: { title: "HAS-BLED Calculator", description: "Bleeding risk score.", keywords: "HAS-BLED" }
  },
  {
    id: "heart-score-calculator",
    name: "HEART Score Calculator",
    description: "Predict major adverse cardiac events.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "h", label: "History (0-2)", type: "number", defaultValue: 1 },
      { id: "e", label: "ECG (0-2)", type: "number", defaultValue: 1 },
      { id: "a", label: "Age (0-2)", type: "number", defaultValue: 1 },
      { id: "r", label: "Risk factors (0-2)", type: "number", defaultValue: 1 },
      { id: "t", label: "Troponin (0-2)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "HEART Score", formula: "h + e + a + r + t", unit: "points" }
    ],
    theory: "Scores 0-3: low risk; 4-6: intermediate; 7-10: high risk.",
    seoMeta: { title: "HEART Score Calculator", description: "Predict cardiac events.", keywords: "HEART score" }
  },
  {
    id: "perc-calculator",
    name: "PERC Calculator",
    description: "Pulmonary Embolism Rule-Out Criteria.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age >= 50? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "hr", label: "HR >= 100? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "o2", label: "O2 sat < 95%? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "swelling", label: "Unilateral leg swelling? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "hemoptysis", label: "Hemoptysis? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "surgery", label: "Recent surgery/trauma? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "pe", label: "Prior PE/DVT? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "hormone", label: "Hormone use? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Criteria Met", formula: "age + hr + o2 + swelling + hemoptysis + surgery + pe + hormone", unit: "" }
    ],
    theory: "If any criteria are met, PE cannot be ruled out by PERC.",
    seoMeta: { title: "PERC Calculator | Pulmonary Embolism", description: "Rule out PE.", keywords: "PERC, PE" }
  },
  {
    id: "pvr-calculator",
    name: "PVR Calculator - Pulmonary Vascular Resistance",
    description: "Calculate Pulmonary Vascular Resistance.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "PVR = \\frac{80 \\times (mPAP - PCWP)}{CO}",
    inputs: [
      { id: "mpap", label: "Mean Pulmonary Artery Pressure (mmHg)", type: "number", defaultValue: 25 },
      { id: "pcwp", label: "Pulmonary Capillary Wedge Pressure (mmHg)", type: "number", defaultValue: 10 },
      { id: "co", label: "Cardiac Output (L/min)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "pvr", label: "PVR", formula: "(80 * (mpap - pcwp)) / co", unit: "dynes*sec/cm⁵" }
    ],
    theory: "Normal PVR is 100-200 dynes*sec/cm⁵.",
    seoMeta: { title: "PVR Calculator | Pulmonary Resistance", description: "Calculate PVR.", keywords: "PVR, pulmonary resistance" }
  },
  {
    id: "timi-score-for-stemi-calculator",
    name: "TIMI Score for STEMI Calculator",
    description: "Predict mortality in STEMI.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age >= 75 (2 pts) or 65-74 (1 pt)", type: "number", defaultValue: 1 },
      { id: "bp", label: "SBP < 100 mmHg (2 pts)", type: "number", defaultValue: 0 },
      { id: "hr", label: "HR > 100 bpm (2 pts)", type: "number", defaultValue: 0 },
      { id: "killip", label: "Killip class II-IV (2 pts)", type: "number", defaultValue: 0 },
      { id: "weight", label: "Weight < 67 kg (1 pt)", type: "number", defaultValue: 0 },
      { id: "ste", label: "Anterior STE or LBBB (1 pt)", type: "number", defaultValue: 1 },
      { id: "time", label: "Time to Rx > 4 hrs (1 pt)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "TIMI Score", formula: "age + bp + hr + killip + weight + ste + time", unit: "points" }
    ],
    theory: "Higher scores indicate higher 30-day mortality risk.",
    seoMeta: { title: "TIMI Score for STEMI", description: "Predict mortality.", keywords: "TIMI score, STEMI" }
  },
  {
    id: "rcri-calculator",
    name: "RCRI Calculator",
    description: "Revised Cardiac Risk Index for pre-op assessment.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "high_risk", label: "High-risk surgery (1 pt)", type: "number", defaultValue: 1 },
      { id: "cad", label: "History of CAD (1 pt)", type: "number", defaultValue: 0 },
      { id: "chf", label: "History of CHF (1 pt)", type: "number", defaultValue: 0 },
      { id: "cvd", label: "History of cerebrovascular disease (1 pt)", type: "number", defaultValue: 0 },
      { id: "dm", label: "Pre-op insulin use (1 pt)", type: "number", defaultValue: 0 },
      { id: "cr", label: "Pre-op creatinine > 2 mg/dL (1 pt)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "RCRI Score", formula: "high_risk + cad + chf + cvd + dm + cr", unit: "points" }
    ],
    theory: "Scores predict risk of major cardiac complications.",
    seoMeta: { title: "RCRI Calculator | Cardiac Risk", description: "Pre-op risk assessment.", keywords: "RCRI, cardiac risk" }
  },
  {
    id: "aortic-valve-area-calculator",
    name: "Aortic Valve Area Calculator",
    description: "Calculate aortic valve area using continuity equation.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "AVA = \\frac{A_1 \\times V_1}{V_2}",
    inputs: [
      { id: "a1", label: "LVOT Area (cm²)", type: "number", defaultValue: 3.14 },
      { id: "v1", label: "LVOT Velocity (m/s)", type: "number", defaultValue: 1 },
      { id: "v2", label: "Aortic Valve Velocity (m/s)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "ava", label: "Aortic Valve Area", formula: "(a1 * v1) / v2", unit: "cm²" }
    ],
    theory: "Used to assess the severity of aortic stenosis.",
    seoMeta: { title: "Aortic Valve Area Calculator", description: "Calculate AVA.", keywords: "AVA, aortic stenosis" }
  },
  {
    id: "grace-calculator",
    name: "GRACE Calculator",
    description: "Predict mortality in acute coronary syndrome.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = f(Age, HR, SBP, Cr, Killip)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 80 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 120 },
      { id: "cr", label: "Creatinine (mg/dL)", type: "number", defaultValue: 1.0 },
      { id: "killip", label: "Killip Class (1-4)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "score", label: "GRACE Score", formula: "(age * 0.5) + (hr * 0.2) - (sbp * 0.1) + (cr * 10) + (killip * 15)", unit: "points" }
    ],
    theory: "A simplified representation of the GRACE score for ACS risk.",
    seoMeta: { title: "GRACE Calculator | ACS Risk", description: "Predict ACS mortality.", keywords: "GRACE score" }
  },
  {
    id: "timi-ua-nstemi-calculator",
    name: "TIMI Score Calculator for UA/NSTEMI",
    description: "Risk stratification for UA/NSTEMI.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age >= 65 (1 pt)", type: "number", defaultValue: 0 },
      { id: "markers", label: "Elevated cardiac markers (1 pt)", type: "number", defaultValue: 1 },
      { id: "st", label: "ST deviation >= 0.5 mm (1 pt)", type: "number", defaultValue: 1 },
      { id: "angina", label: ">= 2 anginal events in 24h (1 pt)", type: "number", defaultValue: 0 },
      { id: "asa", label: "ASA use in past 7 days (1 pt)", type: "number", defaultValue: 1 },
      { id: "cad", label: "Known CAD (1 pt)", type: "number", defaultValue: 0 },
      { id: "risk", label: ">= 3 CAD risk factors (1 pt)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "TIMI Score", formula: "age + markers + st + angina + asa + cad + risk", unit: "points" }
    ],
    theory: "Scores 0-2: low risk; 3-4: intermediate; 5-7: high risk.",
    seoMeta: { title: "TIMI Score for UA/NSTEMI", description: "Risk stratification.", keywords: "TIMI score" }
  },
  {
    id: "dapt-calculator",
    name: "DAPT Calculator",
    description: "Dual Antiplatelet Therapy score.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age >= 75 (-2) or 65-74 (-1)", type: "number", defaultValue: 0 },
      { id: "smoker", label: "Current Smoker (1 pt)", type: "number", defaultValue: 1 },
      { id: "dm", label: "Diabetes (1 pt)", type: "number", defaultValue: 0 },
      { id: "mi", label: "MI at presentation (1 pt)", type: "number", defaultValue: 1 },
      { id: "pci", label: "Prior PCI or MI (1 pt)", type: "number", defaultValue: 0 },
      { id: "stent", label: "Stent diameter < 3mm (1 pt)", type: "number", defaultValue: 1 },
      { id: "paclitaxel", label: "Paclitaxel-eluting stent (1 pt)", type: "number", defaultValue: 0 },
      { id: "chf", label: "CHF or LVEF < 30% (2 pts)", type: "number", defaultValue: 0 },
      { id: "vein", label: "Vein graft stent (2 pts)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "DAPT Score", formula: "age + smoker + dm + mi + pci + stent + paclitaxel + chf + vein", unit: "points" }
    ],
    theory: "A score >= 2 favors continued DAPT beyond 12 months.",
    seoMeta: { title: "DAPT Calculator", description: "DAPT score calculation.", keywords: "DAPT score" }
  },
  {
    id: "arterial-age-calculator",
    name: "Arterial Age Calculator",
    description: "Estimate arterial age based on risk factors.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Arterial\\ Age = f(Chronological\\ Age, Risk\\ Factors)",
    inputs: [
      { id: "age", label: "Chronological Age", type: "number", defaultValue: 50 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 140 },
      { id: "smoker", label: "Smoker (1 for Yes, 0 for No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "art_age", label: "Estimated Arterial Age", formula: "age + (sbp > 130 ? 5 : 0) + (smoker * 7)", unit: "years" }
    ],
    theory: "Arterial age is a way to express cardiovascular risk in terms of age.",
    seoMeta: { title: "Arterial Age Calculator", description: "Estimate arterial age.", keywords: "arterial age" }
  },
  {
    id: "doppler-echo-cardiac-output-calculator",
    name: "Doppler Echo Cardiac Output Calculator",
    description: "Calculate cardiac output via echocardiography.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "CO = LVOT\\ Area \\times LVOT\\ VTI \\times HR",
    inputs: [
      { id: "area", label: "LVOT Area (cm²)", type: "number", defaultValue: 3.14 },
      { id: "vti", label: "LVOT VTI (cm)", type: "number", defaultValue: 20 },
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "co", label: "Cardiac Output", formula: "(area * vti * hr) / 1000", unit: "L/min" }
    ],
    theory: "Calculates cardiac output non-invasively using Doppler echo parameters.",
    seoMeta: { title: "Doppler Echo Cardiac Output", description: "Calculate CO via echo.", keywords: "Doppler echo, CO" }
  },
  {
    id: "eroa-mitral-regurgitation-calculator",
    name: "EROA - Mitral Regurgitation Calculator",
    description: "Calculate Effective Regurgitant Orifice Area.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "EROA = \\frac{PISA\\ Area \\times Aliasing\\ Velocity}{MR\\ Velocity}",
    inputs: [
      { id: "area", label: "PISA Area (cm²)", type: "number", defaultValue: 0.5 },
      { id: "alias", label: "Aliasing Velocity (cm/s)", type: "number", defaultValue: 40 },
      { id: "mr_vel", label: "MR Velocity (cm/s)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "eroa", label: "EROA", formula: "(area * alias) / mr_vel", unit: "cm²" }
    ],
    theory: "Used to quantify the severity of mitral regurgitation.",
    seoMeta: { title: "EROA Calculator | Mitral Regurgitation", description: "Calculate EROA.", keywords: "EROA, mitral regurgitation" }
  },
  {
    id: "gorlin-formula-calculator",
    name: "Gorlin Formula Calculator",
    description: "Calculate valve area using Gorlin formula.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Area = \\frac{CO}{44.3 \\times C \\times \\sqrt{Gradient}}",
    inputs: [
      { id: "co", label: "Cardiac Output (mL/min)", type: "number", defaultValue: 5000 },
      { id: "grad", label: "Mean Pressure Gradient (mmHg)", type: "number", defaultValue: 40 },
      { id: "c", label: "Gorlin Constant (usually 1.0 or 0.85)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "area", label: "Valve Area", formula: "co / (44.3 * c * sqrt(grad))", unit: "cm²" }
    ],
    theory: "Classic formula used in cardiac catheterization to calculate valve areas.",
    seoMeta: { title: "Gorlin Formula Calculator", description: "Calculate valve area.", keywords: "Gorlin formula" }
  },
  {
    id: "gupta-risk-calculator",
    name: "Gupta Risk Calculator",
    description: "Predict post-op MI or cardiac arrest.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Risk = f(Age, Cr, Status, Procedure)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "cr", label: "Creatinine > 1.5 mg/dL (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "status", label: "Dependent status (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Estimated Risk Score", formula: "(age * 0.1) + (cr * 2) + (status * 3)", unit: "points" }
    ],
    theory: "A simplified representation of the Gupta perioperative risk score.",
    seoMeta: { title: "Gupta Risk Calculator", description: "Predict post-op cardiac risk.", keywords: "Gupta score" }
  },
  {
    id: "ich-volume-calculator",
    name: "ICH Volume Calculator",
    description: "Calculate Intracerebral Hemorrhage volume.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Volume = \\frac{A \\times B \\times C}{2}",
    inputs: [
      { id: "a", label: "Largest diameter (cm)", type: "number", defaultValue: 3 },
      { id: "b", label: "Diameter perpendicular to A (cm)", type: "number", defaultValue: 2 },
      { id: "c", label: "Number of slices with hemorrhage", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "volume", label: "ICH Volume", formula: "(a * b * c) / 2", unit: "cm³" }
    ],
    theory: "The ABC/2 method is used to estimate ICH volume on CT scans.",
    seoMeta: { title: "ICH Volume Calculator | Stroke", description: "Calculate ICH volume.", keywords: "ICH volume, stroke" }
  },
  {
    id: "padua-score-calculator",
    name: "Padua Score Calculator",
    description: "Assess VTE risk in hospitalized patients.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "cancer", label: "Active cancer (3 pts)", type: "number", defaultValue: 0 },
      { id: "vte", label: "Previous VTE (3 pts)", type: "number", defaultValue: 0 },
      { id: "mob", label: "Reduced mobility (3 pts)", type: "number", defaultValue: 3 },
      { id: "hyper", label: "Thrombophilia (3 pts)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Padua Score", formula: "cancer + vte + mob + hyper", unit: "points" }
    ],
    theory: "A score >= 4 indicates high risk for VTE and need for prophylaxis.",
    seoMeta: { title: "Padua Score Calculator", description: "Assess VTE risk.", keywords: "Padua score" }
  },
  {
    id: "ecg-boxes-to-seconds-calculator",
    name: "ECG Boxes to Seconds Calculator",
    description: "Convert ECG small boxes to seconds.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Seconds = Small\\ Boxes \\times 0.04",
    inputs: [
      { id: "boxes", label: "Number of Small Boxes", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "seconds", label: "Time", formula: "boxes * 0.04", unit: "sec" }
    ],
    theory: "On a standard ECG, each small box represents 0.04 seconds.",
    seoMeta: { title: "ECG Boxes to Seconds", description: "Convert ECG boxes to time.", keywords: "ECG boxes, seconds" }
  },
  {
    id: "heart-failure-life-expectancy-calculator",
    name: "Heart Failure Life Expectancy Calculator",
    description: "Simplified life expectancy estimation for heart failure.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = f(EF, NYHA, Age)",
    inputs: [
      { id: "ef", label: "Ejection Fraction (%)", type: "number", defaultValue: 30 },
      { id: "nyha", label: "NYHA Class (1-4)", type: "number", defaultValue: 3 },
      { id: "age", label: "Age", type: "number", defaultValue: 65 }
    ],
    outputs: [
      { id: "score", label: "Score", formula: "(50 - ef) + (nyha * 10) + (age * 0.5)", unit: "points" }
    ],
    theory: "A very simplified representation. Higher scores indicate higher risk and lower life expectancy.",
    seoMeta: { title: "Heart Failure Life Expectancy", description: "Estimate life expectancy.", keywords: "heart failure" }
  },
  {
    id: "lv-calculator",
    name: "LV Calculator",
    description: "Calculate Left Ventricular Mass.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "LVM = 0.8 \\times (1.04 \\times ((IVSd + LVIDd + PWTd)^3 - LVIDd^3)) + 0.6",
    inputs: [
      { id: "ivsd", label: "Interventricular Septal Thickness (cm)", type: "number", defaultValue: 1.0 },
      { id: "lvidd", label: "LV Internal Dimension (cm)", type: "number", defaultValue: 5.0 },
      { id: "pwtd", label: "Posterior Wall Thickness (cm)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "lvm", label: "LV Mass", formula: "0.8 * (1.04 * ((ivsd + lvidd + pwtd)^3 - lvidd^3)) + 0.6", unit: "g" }
    ],
    theory: "Devereux formula for calculating LV mass.",
    seoMeta: { title: "LV Calculator | LV Mass", description: "Calculate LV mass.", keywords: "LV mass" }
  },
  {
    id: "mitral-valve-area-calculator",
    name: "Mitral Valve Area Calculator",
    description: "Calculate mitral valve area using pressure half-time.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "MVA = \\frac{220}{PHT}",
    inputs: [
      { id: "pht", label: "Pressure Half-Time (ms)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "mva", label: "Mitral Valve Area", formula: "220 / pht", unit: "cm²" }
    ],
    theory: "Used to assess the severity of mitral stenosis.",
    seoMeta: { title: "Mitral Valve Area Calculator", description: "Calculate MVA.", keywords: "MVA, mitral stenosis" }
  },
  {
    id: "pisa-calculator",
    name: "PISA Calculator",
    description: "Calculate Proximal Isovelocity Surface Area.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "PISA = 2 \\times \\pi \\times r^2",
    inputs: [
      { id: "r", label: "Radius of hemisphere (cm)", type: "number", defaultValue: 0.8 }
    ],
    outputs: [
      { id: "pisa", label: "PISA Area", formula: "2 * 3.14159 * r^2", unit: "cm²" }
    ],
    theory: "Used to quantify valvular regurgitation.",
    seoMeta: { title: "PISA Calculator | Echo", description: "Calculate PISA area.", keywords: "PISA, echo" }
  },
  {
    id: "revised-geneva-score-calculator",
    name: "Revised Geneva Score Calculator",
    description: "Score for pulmonary embolism probability.",
    category: "health",
    subcategory: "cardiovascular",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age > 65 (1 pt)", type: "number", defaultValue: 1 },
      { id: "vte", label: "Previous DVT/PE (3 pts)", type: "number", defaultValue: 0 },
      { id: "surgery", label: "Surgery/fracture within 1 month (2 pts)", type: "number", defaultValue: 0 },
      { id: "cancer", label: "Active malignancy (2 pts)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Geneva Score", formula: "age + (vte * 3) + (surgery * 2) + (cancer * 2)", unit: "points" }
    ],
    theory: "Alternative to Wells score for PE probability.",
    seoMeta: { title: "Revised Geneva Score", description: "Score for PE probability.", keywords: "Geneva score, PE" }
  },
  {
    id: "bbt-calculator",
    name: "BBT Calculator | Basal Body Temperature",
    description: "Track ovulation using Basal Body Temperature.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Ovulation = Day\\ of\\ Temp\\ Spike",
    inputs: [
      { id: "day", label: "Day of Cycle with Temp Spike", type: "number", defaultValue: 14 },
      { id: "cycle", label: "Average Cycle Length (days)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "ovulation", label: "Estimated Ovulation Day", formula: "day", unit: "day" }
    ],
    theory: "A spike in BBT typically indicates that ovulation has occurred.",
    seoMeta: { title: "BBT Calculator | Ovulation", description: "Track ovulation with BBT.", keywords: "BBT, ovulation" }
  },
  {
    id: "bishop-score-calculator",
    name: "Bishop Score Calculator",
    description: "Assess cervical ripeness for labor induction.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "dilation", label: "Dilation (cm) (0-3)", type: "number", defaultValue: 1 },
      { id: "effacement", label: "Effacement (%) (0-3)", type: "number", defaultValue: 1 },
      { id: "station", label: "Station (0-3)", type: "number", defaultValue: 1 },
      { id: "consistency", label: "Consistency (0-2)", type: "number", defaultValue: 1 },
      { id: "position", label: "Position (0-2)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "Bishop Score", formula: "dilation + effacement + station + consistency + position", unit: "points" }
    ],
    theory: "A score >= 8 suggests a high likelihood of successful induction.",
    seoMeta: { title: "Bishop Score Calculator", description: "Assess cervical ripeness.", keywords: "Bishop score" }
  },
  {
    id: "breastfeeding-calorie-calculator",
    name: "Breastfeeding Calorie Calculator",
    description: "Calculate calorie needs while breastfeeding.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Calories = TDEE + 500",
    inputs: [
      { id: "tdee", label: "Your TDEE (calories)", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "calories", label: "Calorie Needs", formula: "tdee + 500", unit: "kcal" }
    ],
    theory: "Breastfeeding typically requires an additional 500 calories per day.",
    seoMeta: { title: "Breastfeeding Calorie Calculator", description: "Calculate calorie needs.", keywords: "breastfeeding calories" }
  },
  {
    id: "conception-calculator",
    name: "Conception Calculator",
    description: "Estimate conception date from due date.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Conception = Due\\ Date - 266\\ days",
    inputs: [
      { id: "days_to_due", label: "Days until Due Date", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "days_since_conception", label: "Estimated Days Since Conception", formula: "266 - (266 - days_to_due)", unit: "days" }
    ],
    theory: "Conception typically occurs about 266 days before the due date.",
    seoMeta: { title: "Conception Calculator", description: "Estimate conception date.", keywords: "conception date" }
  },
  {
    id: "gestational-age-calculator",
    name: "Gestational Age Calculator",
    description: "Calculate gestational age from LMP.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "GA = Current\\ Date - LMP",
    inputs: [
      { id: "days_since_lmp", label: "Days since Last Menstrual Period", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "weeks", label: "Gestational Age", formula: "floor(days_since_lmp / 7)", unit: "weeks" },
      { id: "days", label: "Days", formula: "days_since_lmp % 7", unit: "days" }
    ],
    theory: "Gestational age is measured from the first day of the last menstrual period.",
    seoMeta: { title: "Gestational Age Calculator", description: "Calculate gestational age.", keywords: "gestational age" }
  },
  {
    id: "implantation-calculator",
    name: "Implantation Calculator",
    description: "Estimate implantation date.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Implantation = Ovulation + 9\\ days",
    inputs: [
      { id: "ovulation_day", label: "Day of Ovulation in Cycle", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "implantation_day", label: "Estimated Implantation Day", formula: "ovulation_day + 9", unit: "day" }
    ],
    theory: "Implantation typically occurs 6-12 days (average 9) after ovulation.",
    seoMeta: { title: "Implantation Calculator", description: "Estimate implantation date.", keywords: "implantation date" }
  },
  {
    id: "luteal-phase-calculator",
    name: "Luteal Phase Calculator",
    description: "Calculate length of luteal phase.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Luteal\\ Phase = Cycle\\ Length - Ovulation\\ Day",
    inputs: [
      { id: "cycle", label: "Cycle Length (days)", type: "number", defaultValue: 28 },
      { id: "ovulation", label: "Day of Ovulation", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "luteal", label: "Luteal Phase Length", formula: "cycle - ovulation", unit: "days" }
    ],
    theory: "The luteal phase is the time between ovulation and the start of the next period.",
    seoMeta: { title: "Luteal Phase Calculator", description: "Calculate luteal phase.", keywords: "luteal phase" }
  },
  {
    id: "pearl-index-calculator",
    name: "Pearl Index Calculator",
    description: "Calculate contraceptive failure rate.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Pearl\\ Index = \\frac{Pregnancies \\times 1200}{Women \\times Months}",
    inputs: [
      { id: "pregnancies", label: "Number of Pregnancies", type: "number", defaultValue: 5 },
      { id: "women", label: "Number of Women", type: "number", defaultValue: 100 },
      { id: "months", label: "Exposure Months", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "index", label: "Pearl Index", formula: "(pregnancies * 1200) / (women * months)", unit: "" }
    ],
    theory: "Lower Pearl Index indicates more effective contraception.",
    seoMeta: { title: "Pearl Index Calculator", description: "Calculate Pearl index.", keywords: "Pearl index" }
  },
  {
    id: "pregnancy-test-calculator",
    name: "Pregnancy Test Calculator",
    description: "When to take a pregnancy test.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Test\\ Day = Ovulation + 14\\ days",
    inputs: [
      { id: "ovulation", label: "Day of Ovulation in Cycle", type: "number", defaultValue: 14 }
    ],
    outputs: [
      { id: "test_day", label: "Recommended Test Day", formula: "ovulation + 14", unit: "day" }
    ],
    theory: "Tests are most accurate after the day of the missed period.",
    seoMeta: { title: "Pregnancy Test Calculator", description: "When to test.", keywords: "pregnancy test" }
  },
  {
    id: "reverse-due-date-calculator",
    name: "Reverse Due Date Calculator",
    description: "Calculate LMP from due date.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "LMP = Due\\ Date - 280\\ days",
    inputs: [
      { id: "days_to_due", label: "Days until Due Date", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "days_since_lmp", label: "Estimated Days Since LMP", formula: "280 - days_to_due", unit: "days" }
    ],
    theory: "Calculates the start of the last menstrual period based on the due date.",
    seoMeta: { title: "Reverse Due Date Calculator", description: "Calculate LMP from due date.", keywords: "reverse due date" }
  },
  {
    id: "clomid-ovulation-calculator",
    name: "Clomid Ovulation Calculator",
    description: "Predict ovulation when taking Clomid.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Ovulation = First\\ Day + 5 + 5",
    inputs: [
      { id: "start_day", label: "Cycle Day Clomid Started", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "ovulation_start", label: "Ovulation Window Start (Cycle Day)", formula: "start_day + 5 + 5", unit: "day" },
      { id: "ovulation_end", label: "Ovulation Window End (Cycle Day)", formula: "start_day + 5 + 10", unit: "day" }
    ],
    theory: "Ovulation typically occurs 5-10 days after the last Clomid pill.",
    seoMeta: { title: "Clomid Ovulation Calculator", description: "Predict ovulation with Clomid.", keywords: "Clomid, ovulation" }
  },
  {
    id: "crown-rump-length-calculator",
    name: "Crown-rump Length Calculator",
    description: "Estimate gestational age from CRL.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "GA = CRL + 6.5",
    inputs: [
      { id: "crl", label: "Crown-rump Length (mm)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "weeks", label: "Gestational Age", formula: "(crl + 65) / 7", unit: "weeks" }
    ],
    theory: "CRL is the most accurate method to date a pregnancy in the first trimester.",
    seoMeta: { title: "Crown-rump Length Calculator", description: "Estimate GA from CRL.", keywords: "CRL, gestational age" }
  },
  {
    id: "period-calculator",
    name: "Period Calculator",
    description: "Predict your next period.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Next\\ Period = Last\\ Period + Cycle\\ Length",
    inputs: [
      { id: "days_since_last", label: "Days since last period started", type: "number", defaultValue: 14 },
      { id: "cycle_length", label: "Average cycle length (days)", type: "number", defaultValue: 28 }
    ],
    outputs: [
      { id: "days_until", label: "Days until next period", formula: "cycle_length - days_since_last", unit: "days" }
    ],
    theory: "Predicts the start of the next menstrual period based on average cycle length.",
    seoMeta: { title: "Period Calculator | Menstrual Cycle", description: "Predict next period.", keywords: "period calculator" }
  },
  {
    id: "ivf-due-date-calculator",
    name: "IVF Due Date Calculator",
    description: "Calculate due date for IVF pregnancy.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Due\\ Date = Transfer\\ Date + 266 - Embryo\\ Age",
    inputs: [
      { id: "days_to_transfer", label: "Days since embryo transfer", type: "number", defaultValue: 10 },
      { id: "embryo_age", label: "Embryo Age (days) (e.g., 3 or 5)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "days_remaining", label: "Days remaining to Due Date", formula: "266 - embryo_age - days_to_transfer", unit: "days" }
    ],
    theory: "IVF due dates are calculated from the transfer date and embryo age.",
    seoMeta: { title: "IVF Due Date Calculator", description: "Calculate IVF due date.", keywords: "IVF due date" }
  },
  {
    id: "mean-sac-diameter-calculator",
    name: "Mean Sac Diameter Calculator",
    description: "Calculate MSD from ultrasound measurements.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "MSD = \\frac{L + W + H}{3}",
    inputs: [
      { id: "l", label: "Length (mm)", type: "number", defaultValue: 10 },
      { id: "w", label: "Width (mm)", type: "number", defaultValue: 10 },
      { id: "h", label: "Height (mm)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "msd", label: "Mean Sac Diameter", formula: "(l + w + h) / 3", unit: "mm" },
      { id: "ga_weeks", label: "Est. Gestational Age", formula: "((l + w + h) / 3 + 30) / 7", unit: "weeks" }
    ],
    theory: "MSD is used to estimate gestational age in early pregnancy.",
    seoMeta: { title: "Mean Sac Diameter Calculator", description: "Calculate MSD.", keywords: "MSD, ultrasound" }
  },
  {
    id: "flange-size-calculator",
    name: "Flange Size Calculator",
    description: "Calculate breast pump flange size.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Flange = Nipple\\ Size + 4mm",
    inputs: [
      { id: "nipple", label: "Nipple Diameter (mm)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "size", label: "Recommended Flange Size", formula: "nipple + 4", unit: "mm" }
    ],
    theory: "A properly fitted flange is important for comfort and milk expression.",
    seoMeta: { title: "Flange Size Calculator", description: "Calculate flange size.", keywords: "flange size, breast pump" }
  },
  {
    id: "fundal-height-calculator",
    name: "Fundal Height Calculator",
    description: "Estimate gestational age from fundal height.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Weeks \\approx cm",
    inputs: [
      { id: "height", label: "Fundal Height (cm)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "weeks", label: "Estimated Gestational Age", formula: "height", unit: "weeks" }
    ],
    theory: "After 20 weeks, fundal height in cm often matches gestational age in weeks.",
    seoMeta: { title: "Fundal Height Calculator", description: "Estimate GA from height.", keywords: "fundal height" }
  },
  {
    id: "progesterone-to-estrogen-ratio-calculator",
    name: "Progesterone to Estrogen Ratio Calculator",
    description: "Calculate Pg/E2 ratio.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Ratio = \\frac{Progesterone}{Estrogen}",
    inputs: [
      { id: "pg", label: "Progesterone (ng/mL)", type: "number", defaultValue: 10 },
      { id: "e2", label: "Estradiol (pg/mL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "ratio", label: "Pg/E2 Ratio", formula: "(pg * 1000) / e2", unit: "" }
    ],
    theory: "Used to assess hormonal balance. Optimal ratio is often quoted as 100-500.",
    seoMeta: { title: "Pg/E2 Ratio Calculator", description: "Calculate hormone ratio.", keywords: "Pg/E2 ratio" }
  },
  {
    id: "chances-of-having-twins-calculator",
    name: "Chances of Having Twins Calculator",
    description: "Estimate probability of having twins.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Probability = f(Age, History)",
    inputs: [
      { id: "age", label: "Age > 35? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "history", label: "Family history of twins? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "bmi", label: "BMI > 30? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "chance", label: "Estimated Chance", formula: "3 + (age * 2) + (history * 5) + (bmi * 1)", unit: "%" }
    ],
    theory: "General population chance is ~3%. Factors can increase this.",
    seoMeta: { title: "Chances of Having Twins", description: "Estimate twin probability.", keywords: "twins chance" }
  },
  {
    id: "vbac-calculator",
    name: "VBAC Calculator",
    description: "Vaginal Birth After Cesarean success probability.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Probability = f(Age, BMI, Prior\\ VBAC)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 30 },
      { id: "bmi", label: "BMI", type: "number", defaultValue: 25 },
      { id: "prior", label: "Prior vaginal delivery (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "chance", label: "Success Probability", formula: "70 - (bmi > 30 ? 10 : 0) + (prior * 15)", unit: "%" }
    ],
    theory: "Helps guide decision making for women considering trial of labor after cesarean.",
    seoMeta: { title: "VBAC Calculator | Success Rate", description: "Predict VBAC success.", keywords: "VBAC score" }
  },
  {
    id: "birth-control-calculator",
    name: "Birth Control Calculator",
    description: "Compare effectiveness of birth control methods.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Effectiveness = 100 - Pearl\\ Index",
    inputs: [
      { id: "method", label: "Method (1: Pill, 2: IUD, 3: Condom)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "eff", label: "Typical Use Effectiveness", formula: "method == 2 ? 99.8 : (method == 1 ? 91 : 82)", unit: "%" }
    ],
    theory: "Compares the typical use effectiveness of different contraceptive methods.",
    seoMeta: { title: "Birth Control Calculator", description: "Compare effectiveness.", keywords: "birth control" }
  },
  {
    id: "breast-cancer-risk-calculator",
    name: "Breast Cancer Risk Calculator",
    description: "Estimate 5-year risk of developing breast cancer.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Risk = f(Age, History, Genetics)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 40 },
      { id: "biopsy", label: "Number of prior breast biopsies", type: "number", defaultValue: 0 },
      { id: "family", label: "First-degree relatives with breast cancer", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Estimated 5-Year Risk", formula: "(age * 0.02) + (biopsy * 0.5) + (family * 1.0)", unit: "%" }
    ],
    theory: "A very simplified representation of the Gail Model.",
    seoMeta: { title: "Breast Cancer Risk Calculator", description: "Estimate risk.", keywords: "breast cancer risk" }
  },
  {
    id: "breast-cancer-recurrence-risk-calculator",
    name: "Breast Cancer Recurrence Risk Calculator",
    description: "Estimate risk of recurrence.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Risk = f(Stage, Nodes, Receptor)",
    inputs: [
      { id: "stage", label: "Stage (1-3)", type: "number", defaultValue: 1 },
      { id: "nodes", label: "Positive nodes", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Estimated Recurrence Risk", formula: "(stage * 5) + (nodes * 2)", unit: "%" }
    ],
    theory: "Simplified estimation. Actual risk depends on genomic assays like Oncotype DX.",
    seoMeta: { title: "Breast Cancer Recurrence", description: "Estimate recurrence risk.", keywords: "breast cancer" }
  },
  {
    id: "egg-freezing-calculator",
    name: "Egg Freezing Calculator",
    description: "Estimate probability of live birth from frozen eggs.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Probability = f(Age, Egg\\ Count)",
    inputs: [
      { id: "age", label: "Age at freezing", type: "number", defaultValue: 35 },
      { id: "eggs", label: "Number of eggs frozen", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "chance", label: "Live Birth Probability", formula: "eggs * (age < 35 ? 5 : (age < 38 ? 4 : 2))", unit: "%" }
    ],
    theory: "Success rates depend heavily on the woman's age at the time of egg freezing.",
    seoMeta: { title: "Egg Freezing Calculator", description: "Estimate success rate.", keywords: "egg freezing" }
  },
  {
    id: "mca-calculator",
    name: "MCA Calculator",
    description: "Middle Cerebral Artery Doppler for fetal anemia.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "MoM = \\frac{PSV}{Median\\ PSV}",
    inputs: [
      { id: "psv", label: "Peak Systolic Velocity (cm/s)", type: "number", defaultValue: 40 },
      { id: "ga", label: "Gestational Age (weeks)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "mom", label: "Multiples of Median (MoM)", formula: "psv / (ga * 2)", unit: "MoM" }
    ],
    theory: "Used to detect fetal anemia. MoM > 1.5 indicates high risk.",
    seoMeta: { title: "MCA Calculator | Fetal Doppler", description: "Detect fetal anemia.", keywords: "MCA Doppler" }
  },
  {
    id: "nuchal-translucency-calculator",
    name: "Nuchal Translucency Calculator",
    description: "Down syndrome risk assessment.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Risk = f(Age, NT\\ thickness)",
    inputs: [
      { id: "age", label: "Maternal Age", type: "number", defaultValue: 30 },
      { id: "nt", label: "Nuchal Translucency (mm)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "risk", label: "Risk Score", formula: "(age * 0.1) + (nt > 2.5 ? 5 : 0)", unit: "points" }
    ],
    theory: "Increased NT thickness is associated with a higher risk of Down syndrome.",
    seoMeta: { title: "Nuchal Translucency Calculator", description: "Assess Down syndrome risk.", keywords: "NT scan" }
  },
  {
    id: "sperm-analysis-calculator",
    name: "Sperm Analysis Calculator",
    description: "Interpret semen analysis results.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Status = f(Count, Motility, Morphology)",
    inputs: [
      { id: "count", label: "Sperm Count (million/mL)", type: "number", defaultValue: 20 },
      { id: "motility", label: "Total Motility (%)", type: "number", defaultValue: 50 },
      { id: "morphology", label: "Normal Forms (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "status", label: "Status Score", formula: "(count >= 15 ? 1 : 0) + (motility >= 40 ? 1 : 0) + (morphology >= 4 ? 1 : 0)", unit: "/3" }
    ],
    theory: "Compares results against WHO 2010 lower reference limits.",
    seoMeta: { title: "Sperm Analysis Calculator", description: "Interpret semen analysis.", keywords: "sperm analysis" }
  },
  {
    id: "stillbirth-risk-calculator",
    name: "Stillbirth Risk Calculator",
    description: "Estimate risk of stillbirth.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Risk = f(Age, BMI, Smoking)",
    inputs: [
      { id: "age", label: "Age > 35? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "bmi", label: "BMI > 30? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "smoking", label: "Smoking? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Risk Score", formula: "age + bmi + smoking", unit: "points" }
    ],
    theory: "Identifies risk factors for stillbirth to guide monitoring.",
    seoMeta: { title: "Stillbirth Risk Calculator", description: "Estimate risk.", keywords: "stillbirth risk" }
  },
  {
    id: "testosterone-to-estradiol-ratio-calculator",
    name: "Testosterone to Estradiol Ratio Calculator",
    description: "Calculate T/E2 ratio.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Ratio = \\frac{Testosterone}{Estradiol}",
    inputs: [
      { id: "t", label: "Testosterone (ng/dL)", type: "number", defaultValue: 300 },
      { id: "e2", label: "Estradiol (pg/mL)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "ratio", label: "T/E2 Ratio", formula: "t / e2", unit: "" }
    ],
    theory: "Hormonal balance ratio, often assessed in both men and women.",
    seoMeta: { title: "T/E2 Ratio Calculator", description: "Calculate hormone ratio.", keywords: "T/E2 ratio" }
  },
  {
    id: "vte-risk-pregnancy-calculator",
    name: "VTE Risk Score Calculator in Pregnancy",
    description: "Assess VTE risk based on RCOG guidelines.",
    category: "health",
    subcategory: "gynecology",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "prior", label: "Prior VTE (4 pts)", type: "number", defaultValue: 0 },
      { id: "age", label: "Age > 35 (1 pt)", type: "number", defaultValue: 0 },
      { id: "bmi", label: "BMI > 30 (1 pt)", type: "number", defaultValue: 1 },
      { id: "parity", label: "Parity >= 3 (1 pt)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "VTE Score", formula: "prior * 4 + age + bmi + parity", unit: "points" }
    ],
    theory: "Score >= 4 suggests need for antenatal prophylaxis.",
    seoMeta: { title: "VTE Risk in Pregnancy", description: "Assess VTE risk.", keywords: "VTE score, pregnancy" }
  },
  {
    id: "alcohol-unit-calculator",
    name: "Alcohol Unit Calculator",
    description: "Calculate alcohol units in a drink.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Units = \\frac{Volume\\ (ml) \\times ABV\\ (\\%)}{1000}",
    inputs: [
      { id: "volume", label: "Volume (ml)", type: "number", defaultValue: 500 },
      { id: "abv", label: "Alcohol by Volume (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "units", label: "Alcohol Units", formula: "(volume * abv) / 1000", unit: "units" }
    ],
    theory: "One unit is 10ml of pure alcohol.",
    seoMeta: { title: "Alcohol Unit Calculator", description: "Calculate units.", keywords: "alcohol units" }
  },
  {
    id: "audit-c-calculator",
    name: "Audit-C Calculator",
    description: "Screen for alcohol use disorders.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "q1", label: "How often do you drink? (0-4)", type: "number", defaultValue: 1 },
      { id: "q2", label: "How many drinks on a typical day? (0-4)", type: "number", defaultValue: 1 },
      { id: "q3", label: "How often 6 or more drinks? (0-4)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Audit-C Score", formula: "q1 + q2 + q3", unit: "points" }
    ],
    theory: "Scores >= 4 for men or >= 3 for women are considered positive.",
    seoMeta: { title: "Audit-C Calculator", description: "Screen for alcohol issues.", keywords: "Audit-C" }
  },
  {
    id: "audit-score-calculator",
    name: "Audit Score Calculator",
    description: "Full Alcohol Use Disorders Identification Test.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum 10\\ Questions",
    inputs: [
      { id: "score", label: "Sum of scores for all 10 questions (0-4 each)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total", label: "Total Score", formula: "score", unit: "points" }
    ],
    theory: "Scores 8-15 indicate hazardous use; 16-19 harmful use; >= 20 dependence.",
    seoMeta: { title: "Audit Score Calculator", description: "Full AUDIT test.", keywords: "AUDIT score" }
  },
  {
    id: "caffeine-calculator",
    name: "Caffeine Calculator",
    description: "Calculate caffeine dose per body weight.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Dose = \\frac{Caffeine\\ (mg)}{Weight\\ (kg)}",
    inputs: [
      { id: "caffeine", label: "Caffeine Intake (mg)", type: "number", defaultValue: 200 },
      { id: "weight", label: "Body Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "dose", label: "Caffeine Dose", formula: "caffeine / weight", unit: "mg/kg" }
    ],
    theory: "Helps assess if caffeine intake is within safe limits (usually < 400mg/day).",
    seoMeta: { title: "Caffeine Calculator", description: "Calculate caffeine dose.", keywords: "caffeine" }
  },
  {
    id: "cigarette-calculator",
    name: "Cigarette Calculator",
    description: "Calculate cost of smoking over time.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Cost = Packs \\times Price \\times Time",
    inputs: [
      { id: "packs", label: "Packs per day", type: "number", defaultValue: 1 },
      { id: "price", label: "Price per pack ($)", type: "number", defaultValue: 10 },
      { id: "years", label: "Years smoking", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "cost", label: "Total Cost", formula: "packs * price * 365 * years", unit: "$" }
    ],
    theory: "Highlights the financial impact of smoking.",
    seoMeta: { title: "Cigarette Calculator | Cost", description: "Calculate smoking cost.", keywords: "cigarette cost" }
  },
  {
    id: "ciwa-calculator",
    name: "CIWA Calculator",
    description: "Clinical Institute Withdrawal Assessment for Alcohol.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum 10\\ Items",
    inputs: [
      { id: "score", label: "Sum of scores for all 10 items (max 67)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "total", label: "CIWA Score", formula: "score", unit: "points" }
    ],
    theory: "Scores <= 8: mild withdrawal; 9-15: moderate; >= 16: severe.",
    seoMeta: { title: "CIWA Calculator | Alcohol Withdrawal", description: "Assess withdrawal.", keywords: "CIWA" }
  },
  {
    id: "dudit-calculator",
    name: "DUDIT Calculator",
    description: "Drug Use Disorders Identification Test.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum 11\\ Questions",
    inputs: [
      { id: "score", label: "Sum of scores for all 11 questions", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total", label: "DUDIT Score", formula: "score", unit: "points" }
    ],
    theory: "Used to identify drug-related problems.",
    seoMeta: { title: "DUDIT Calculator", description: "Screen for drug issues.", keywords: "DUDIT" }
  },
  {
    id: "etg-calculator",
    name: "EtG Calculator",
    description: "Estimate Ethyl Glucuronide detection window.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Window = up\\ to\\ 80\\ hours",
    inputs: [
      { id: "drinks", label: "Number of drinks", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "window", label: "Max Detection Window", formula: "drinks > 5 ? 80 : 48", unit: "hours" }
    ],
    theory: "EtG is a direct metabolite of alcohol used as a marker for recent intake.",
    seoMeta: { title: "EtG Calculator | Alcohol Detection", description: "EtG window.", keywords: "EtG, alcohol" }
  },
  {
    id: "fagerstrom-test-calculator",
    name: "Fagerstrom Test Calculator",
    description: "Assess nicotine dependence.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum 6\\ Questions",
    inputs: [
      { id: "score", label: "Sum of scores (0-10)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total", label: "Fagerstrom Score", formula: "score", unit: "points" }
    ],
    theory: "Higher scores indicate higher nicotine dependence.",
    seoMeta: { title: "Fagerstrom Test", description: "Assess nicotine dependence.", keywords: "Fagerstrom" }
  },
  {
    id: "hsi-calculator",
    name: "HSI Calculator — Heaviness of Smoking Index",
    description: "Quick assessment of nicotine dependence.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = Time\\ to\\ first + Cigarettes\\ per\\ day",
    inputs: [
      { id: "q1", label: "Time to first cigarette (0-3)", type: "number", defaultValue: 1 },
      { id: "q2", label: "Cigarettes per day (0-3)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "HSI Score", formula: "q1 + q2", unit: "points" }
    ],
    theory: "A score >= 4 indicates high nicotine dependence.",
    seoMeta: { title: "HSI Calculator | Smoking Index", description: "Heaviness of smoking.", keywords: "HSI, smoking" }
  },
  {
    id: "addiction-calculator",
    name: "Addiction Calculator",
    description: "Assess risk of addiction based on behavior.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "q1", label: "Loss of control over use? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "q2", label: "Neglecting other activities? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "q3", label: "Risk taking? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Addiction Risk Score", formula: "q1 + q2 + q3", unit: "points" }
    ],
    theory: "A simplified score. High scores indicate potential addiction issues.",
    seoMeta: { title: "Addiction Calculator", description: "Assess addiction risk.", keywords: "addiction" }
  },
  {
    id: "finnegan-score-calculator",
    name: "Finnegan Score Calculator",
    description: "Assess Neonatal Abstinence Syndrome.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Score = \\sum 21\\ Items",
    inputs: [
      { id: "score", label: "Sum of scores for all items (max 40+)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "total", label: "Finnegan Score", formula: "score", unit: "points" }
    ],
    theory: "Used to monitor and guide treatment for infants with NAS.",
    seoMeta: { title: "Finnegan Score Calculator", description: "Assess NAS.", keywords: "Finnegan score" }
  },
  {
    id: "smoking-recovery-calculator",
    name: "Smoking Recovery Calculator",
    description: "Timeline of health benefits after quitting smoking.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Benefits = f(Time)",
    inputs: [
      { id: "days", label: "Days since quitting", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "hr_return", label: "Heart rate returns to normal", formula: "days >= 1 ? 1 : 0", unit: "(1=Yes)" },
      { id: "lung_improve", label: "Lung function improves", formula: "days >= 60 ? 1 : 0", unit: "(1=Yes)" }
    ],
    theory: "Highlights the progressive health benefits of smoking cessation.",
    seoMeta: { title: "Smoking Recovery Timeline", description: "Benefits of quitting.", keywords: "smoking recovery" }
  },
  {
    id: "sobriety-calculator",
    name: "Sobriety Calculator",
    description: "Calculate time since quit date.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Time = Current\\ Date - Quit\\ Date",
    inputs: [
      { id: "days_since", label: "Days since quitting", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "months", label: "Months sober", formula: "floor(days_since / 30)", unit: "months" },
      { id: "days", label: "Remaining days", formula: "days_since % 30", unit: "days" }
    ],
    theory: "Celebrates milestones in recovery.",
    seoMeta: { title: "Sobriety Calculator", description: "Track time sober.", keywords: "sobriety" }
  },
  {
    id: "standard-drink-calculator",
    name: "Standard Drink Calculator",
    description: "Convert any drink to standard drinks.",
    category: "health",
    subcategory: "addiction",
    scientificFormula: "Standard\\ Drinks = \\frac{Volume\\ (fl\\ oz) \\times ABV\\ (\\%)}{0.6}",
    inputs: [
      { id: "volume", label: "Volume (fl oz)", type: "number", defaultValue: 12 },
      { id: "abv", label: "Alcohol by Volume (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "standard", label: "Standard Drinks", formula: "(volume * abv) / 60", unit: "drinks" }
    ],
    theory: "A standard drink contains about 14g (0.6 fl oz) of pure alcohol.",
    seoMeta: { title: "Standard Drink Calculator", description: "Calculate standard drinks.", keywords: "standard drink" }
  },
  {
    id: "adrenal-washout-calculator",
    name: "Adrenal Washout Calculator",
    description: "Calculate adrenal washout on CT.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Washout = \\frac{Venous - Delayed}{Venous - Unenhanced} \\times 100",
    inputs: [
      { id: "unenhanced", label: "Unenhanced CT (HU)", type: "number", defaultValue: 15 },
      { id: "venous", label: "Enhanced (Venous) CT (HU)", type: "number", defaultValue: 60 },
      { id: "delayed", label: "Delayed CT (HU)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "washout", label: "Absolute Washout", formula: "((venous - delayed) / (venous - unenhanced)) * 100", unit: "%" }
    ],
    theory: "Washout > 60% suggests a benign adrenal adenoma.",
    seoMeta: { title: "Adrenal Washout Calculator", description: "Calculate CT washout.", keywords: "adrenal washout" }
  },
  {
    id: "albumin-creatinine-ratio-calculator",
    name: "Albumin Creatinine Ratio Calculator",
    description: "Calculate urine albumin-to-creatinine ratio (ACR).",
    category: "health",
    subcategory: "urology",
    scientificFormula: "ACR = \\frac{Albumin}{Creatinine}",
    inputs: [
      { id: "albumin", label: "Urine Albumin (mg/dL)", type: "number", defaultValue: 10 },
      { id: "creatinine", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "acr", label: "ACR", formula: "(albumin / creatinine) * 1000", unit: "mg/g" }
    ],
    theory: "Used to screen for chronic kidney disease. Normal is < 30 mg/g.",
    seoMeta: { title: "Albumin Creatinine Ratio", description: "Calculate ACR.", keywords: "ACR, kidney" }
  },
  {
    id: "bladder-volume-calculator",
    name: "Bladder Volume Calculator",
    description: "Calculate bladder volume from ultrasound.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Volume = 0.7 \\times L \\times W \\times H",
    inputs: [
      { id: "l", label: "Length (cm)", type: "number", defaultValue: 10 },
      { id: "w", label: "Width (cm)", type: "number", defaultValue: 8 },
      { id: "h", label: "Height (cm)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "volume", label: "Bladder Volume", formula: "0.7 * l * w * h", unit: "ml" }
    ],
    theory: "Estimated using the prolate ellipsoid formula with a correction factor.",
    seoMeta: { title: "Bladder Volume Calculator", description: "Calculate volume.", keywords: "bladder volume" }
  },
  {
    id: "bun-creatinine-ratio-calculator",
    name: "BUN Creatinine Ratio Calculator",
    description: "Calculate BUN-to-creatinine ratio.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Ratio = \\frac{BUN}{Creatinine}",
    inputs: [
      { id: "bun", label: "Blood Urea Nitrogen (mg/dL)", type: "number", defaultValue: 15 },
      { id: "creatinine", label: "Serum Creatinine (mg/dL)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "ratio", label: "BUN/Cr Ratio", formula: "bun / creatinine", unit: "" }
    ],
    theory: "Normal ratio is 10-20. High ratio may indicate pre-renal causes.",
    seoMeta: { title: "BUN Creatinine Ratio", description: "Calculate BUN/Cr ratio.", keywords: "BUN, creatinine" }
  },
  {
    id: "fena-calculator",
    name: "FENa Calculator (Fractional Excretion of Sodium)",
    description: "Calculate fractional excretion of sodium.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "FENa = \\frac{U_{Na} \\times P_{Cr}}{P_{Na} \\times U_{Cr}} \\times 100",
    inputs: [
      { id: "una", label: "Urine Sodium (mEq/L)", type: "number", defaultValue: 20 },
      { id: "sna", label: "Serum Sodium (mEq/L)", type: "number", defaultValue: 140 },
      { id: "ucr", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 },
      { id: "scr", label: "Serum Creatinine (mg/dL)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "fena", label: "FENa", formula: "((una * scr) / (sna * ucr)) * 100", unit: "%" }
    ],
    theory: "FENa < 1% suggests pre-renal AKI; > 2% suggests acute tubular necrosis.",
    seoMeta: { title: "FENa Calculator | Kidney", description: "Calculate FENa.", keywords: "FENa, AKI" }
  },
  {
    id: "feurea-calculator",
    name: "FEUrea Calculator",
    description: "Calculate fractional excretion of urea.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "FEUrea = \\frac{U_{Urea} \\times P_{Cr}}{P_{Urea} \\times U_{Cr}} \\times 100",
    inputs: [
      { id: "uurea", label: "Urine Urea (mg/dL)", type: "number", defaultValue: 500 },
      { id: "surea", label: "Serum Urea (mg/dL)", type: "number", defaultValue: 30 },
      { id: "ucr", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 },
      { id: "scr", label: "Serum Creatinine (mg/dL)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "feurea", label: "FEUrea", formula: "((uurea * scr) / (surea * ucr)) * 100", unit: "%" }
    ],
    theory: "Particularly useful in patients taking diuretics. FEUrea < 35% suggests pre-renal AKI.",
    seoMeta: { title: "FEUrea Calculator | Kidney", description: "Calculate FEUrea.", keywords: "FEUrea" }
  },
  {
    id: "kidney-failure-risk-calculator",
    name: "Kidney Failure Risk Calculator",
    description: "Estimate risk of needing dialysis.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Risk = f(Age, Sex, GFR, ACR)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "gfr", label: "eGFR (ml/min/1.73m²)", type: "number", defaultValue: 45 },
      { id: "acr", label: "Urine ACR (mg/g)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "risk", label: "Estimated 5-Year Risk", formula: "100 / (1 + exp(-(-0.5 + 0.01*age - 0.05*gfr + 0.002*acr)))", unit: "%" }
    ],
    theory: "Uses the 4-variable Tangri equation to predict progression to kidney failure.",
    seoMeta: { title: "Kidney Failure Risk", description: "Estimate dialysis risk.", keywords: "kidney failure" }
  },
  {
    id: "psa-density-calculator",
    name: "PSA Density Calculator",
    description: "Calculate PSA density.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Density = \\frac{PSA}{Volume}",
    inputs: [
      { id: "psa", label: "PSA (ng/mL)", type: "number", defaultValue: 4 },
      { id: "volume", label: "Prostate Volume (cm³)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "density", label: "PSA Density", formula: "psa / volume", unit: "ng/mL/cm³" }
    ],
    theory: "Higher density (> 0.15) increases suspicion of prostate cancer.",
    seoMeta: { title: "PSA Density Calculator", description: "Calculate PSA density.", keywords: "PSA density" }
  },
  {
    id: "psa-doubling-time-calculator",
    name: "PSA Doubling Time Calculator",
    description: "Calculate time for PSA to double.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "PSADT = \\frac{\\ln(2) \\times t}{\\ln(PSA_2) - \\ln(PSA_1)}",
    inputs: [
      { id: "psa1", label: "First PSA (ng/mL)", type: "number", defaultValue: 4 },
      { id: "psa2", label: "Second PSA (ng/mL)", type: "number", defaultValue: 8 },
      { id: "days", label: "Days between measurements", type: "number", defaultValue: 180 }
    ],
    outputs: [
      { id: "psadt", label: "PSA Doubling Time", formula: "(log(2) * days) / (log(psa2) - log(psa1))", unit: "days" }
    ],
    theory: "Shorter doubling time indicates more aggressive prostate cancer.",
    seoMeta: { title: "PSA Doubling Time", description: "Calculate PSADT.", keywords: "PSA doubling time" }
  },
  {
    id: "urine-output-calculator",
    name: "Urine Output Calculator",
    description: "Calculate urine output rate.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Output = \\frac{Volume}{Weight \\times Time}",
    inputs: [
      { id: "volume", label: "Urine Volume (ml)", type: "number", defaultValue: 1000 },
      { id: "weight", label: "Body Weight (kg)", type: "number", defaultValue: 70 },
      { id: "hours", label: "Time Period (hours)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "output", label: "Urine Output", formula: "volume / (weight * hours)", unit: "ml/kg/hr" }
    ],
    theory: "Normal is 0.5 - 1.5 ml/kg/hr. < 0.5 suggests oliguria.",
    seoMeta: { title: "Urine Output Calculator", description: "Calculate output rate.", keywords: "urine output" }
  },
  {
    id: "eortc-bladder-cancer-calculator",
    name: "EORTC Bladder Cancer Recurrence and Progression Calculator",
    description: "Estimate risk of recurrence and progression.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "number", label: "Number of tumors (1, 2-7, >=8)", type: "number", defaultValue: 1 },
      { id: "size", label: "Tumor size (<3cm: 0, >=3cm: 1)", type: "number", defaultValue: 0 },
      { id: "stage", label: "T category (Ta: 0, T1: 1)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Recurrence Score", formula: "number + size + stage", unit: "points" }
    ],
    theory: "Helps determine follow-up frequency and treatment for non-muscle-invasive bladder cancer.",
    seoMeta: { title: "EORTC Bladder Cancer", description: "Estimate recurrence risk.", keywords: "bladder cancer" }
  },
  {
    id: "kidney-stone-calculator",
    name: "Kidney STONE Calculator for Percutaneous Neprolithotomy",
    description: "Predict stone-free rate after PCNL.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Score = S + T + O + N + E",
    inputs: [
      { id: "s", label: "Stone size (1-4)", type: "number", defaultValue: 1 },
      { id: "t", label: "Topography (1-2)", type: "number", defaultValue: 1 },
      { id: "o", label: "Obstruction (1-2)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "STONE Score", formula: "s + t + o", unit: "points" }
    ],
    theory: "Higher scores indicate more complex cases with lower stone-free rates.",
    seoMeta: { title: "Kidney STONE Score", description: "Predict stone clearance.", keywords: "STONE score" }
  },
  {
    id: "ktv-daugirdas-calculator",
    name: "Kt/V Calculator Daugirdas",
    description: "Calculate dialysis adequacy.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Kt/V = -\\ln(R - 0.008 \\times t) + (4 - 3.5 \\times R) \\times \\frac{UF}{W}",
    inputs: [
      { id: "r", label: "Post-dialysis / Pre-dialysis BUN ratio", type: "number", defaultValue: 0.3 },
      { id: "t", label: "Session length (hours)", type: "number", defaultValue: 4 },
      { id: "uf", label: "Ultrafiltration volume (L)", type: "number", defaultValue: 2 },
      { id: "w", label: "Post-dialysis weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "ktv", label: "Kt/V", formula: "-log(r - 0.008 * t) + (4 - 3.5 * r) * (uf / w)", unit: "" }
    ],
    theory: "A measure of the fraction of body water cleared of urea. Target is usually >= 1.2.",
    seoMeta: { title: "Kt/V Calculator | Dialysis", description: "Calculate Kt/V.", keywords: "Kt/V, dialysis" }
  },
  {
    id: "metastatic-prostate-cancer-prognosis-calculator",
    name: "Metastatic Prostate Cancer Prognosis Calculator",
    description: "Estimate survival in metastatic prostate cancer.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "Score = \\sum Risk\\ Factors",
    inputs: [
      { id: "visceral", label: "Visceral metastases? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "hb", label: "Hemoglobin < 12 g/dL? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "Risk Score", formula: "visceral + hb", unit: "points" }
    ],
    theory: "Used to stratify patients into risk groups.",
    seoMeta: { title: "Prostate Cancer Prognosis", description: "Estimate survival.", keywords: "prostate cancer" }
  },
  {
    id: "protein-creatinine-ratio-calculator",
    name: "Protein Creatinine Ratio Calculator",
    description: "Calculate urine protein-to-creatinine ratio (PCR).",
    category: "health",
    subcategory: "urology",
    scientificFormula: "PCR = \\frac{Protein}{Creatinine}",
    inputs: [
      { id: "protein", label: "Urine Protein (mg/dL)", type: "number", defaultValue: 30 },
      { id: "creatinine", label: "Urine Creatinine (mg/dL)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "pcr", label: "PCR", formula: "(protein / creatinine)", unit: "g/g" }
    ],
    theory: "Used to estimate 24-hour protein excretion. Normal is < 0.15 g/g.",
    seoMeta: { title: "Protein Creatinine Ratio", description: "Calculate PCR.", keywords: "PCR, protein" }
  },
  {
    id: "ttkg-calculator",
    name: "TTKG Calculator - Transtubular Potassium Gradient",
    description: "Assess renal potassium handling.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "TTKG = \\frac{K_{urine} \\times Osm_{serum}}{K_{serum} \\times Osm_{urine}}",
    inputs: [
      { id: "uk", label: "Urine Potassium (mEq/L)", type: "number", defaultValue: 40 },
      { id: "sk", label: "Serum Potassium (mEq/L)", type: "number", defaultValue: 4 },
      { id: "uosm", label: "Urine Osmolality (mOsm/kg)", type: "number", defaultValue: 600 },
      { id: "sosm", label: "Serum Osmolality (mOsm/kg)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "ttkg", label: "TTKG", formula: "(uk * sosm) / (sk * uosm)", unit: "" }
    ],
    theory: "Helps differentiate causes of hyper- and hypokalemia.",
    seoMeta: { title: "TTKG Calculator", description: "Assess potassium handling.", keywords: "TTKG" }
  },
  {
    id: "urr-calculator",
    name: "URR Calculator - Urea Reduction Ratio",
    description: "Calculate urea reduction ratio for dialysis.",
    category: "health",
    subcategory: "urology",
    scientificFormula: "URR = \\frac{Pre - Post}{Pre} \\times 100",
    inputs: [
      { id: "pre", label: "Pre-dialysis BUN (mg/dL)", type: "number", defaultValue: 60 },
      { id: "post", label: "Post-dialysis BUN (mg/dL)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "urr", label: "URR", formula: "((pre - post) / pre) * 100", unit: "%" }
    ],
    theory: "A measure of dialysis adequacy. Target is usually >= 65%.",
    seoMeta: { title: "URR Calculator | Dialysis", description: "Calculate URR.", keywords: "URR, dialysis" }
  },
  {
    id: "acid-base-calculator",
    name: "Acid Base Calculator",
    description: "Interpret arterial blood gas results.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "pH \leftrightarrow pCO_2 \leftrightarrow HCO_3",
    inputs: [
      { id: "ph", label: "pH", type: "number", defaultValue: 7.4 },
      { id: "pco2", label: "pCO2 (mmHg)", type: "number", defaultValue: 40 },
      { id: "hco3", label: "HCO3 (mEq/L)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "status", label: "Acid-Base Status", formula: "ph < 7.35 ? 1 : (ph > 7.45 ? 2 : 0)", unit: "(1:Acid, 2:Alk, 0:Norm)" }
    ],
    theory: "Helps identify primary acid-base disorders and compensation.",
    seoMeta: { title: "Acid Base Calculator", description: "Interpret ABG.", keywords: "acid base, ABG" }
  },
  {
    id: "arterial-blood-ph-calculator",
    name: "Arterial Blood pH Calculator",
    description: "Calculate pH using Henderson-Hasselbalch equation.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "pH = 6.1 + \\log\\left(\\frac{HCO_3}{0.03 \\times pCO_2}\\right)",
    inputs: [
      { id: "hco3", label: "HCO3 (mEq/L)", type: "number", defaultValue: 24 },
      { id: "pco2", label: "pCO2 (mmHg)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "ph", label: "Calculated pH", formula: "6.1 + log10(hco3 / (0.03 * pco2))", unit: "" }
    ],
    theory: "The Henderson-Hasselbalch equation describes the derivation of pH as a measure of acidity.",
    seoMeta: { title: "Arterial Blood pH", description: "Calculate pH.", keywords: "blood pH" }
  },
  {
    id: "bicarbonate-deficit-calculator",
    name: "Bicarbonate Deficit Calculator",
    description: "Calculate bicarbonate deficit in metabolic acidosis.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Deficit = 0.4 \\times Weight \\times (24 - HCO_3)",
    inputs: [
      { id: "weight", label: "Body Weight (kg)", type: "number", defaultValue: 70 },
      { id: "hco3", label: "Current HCO3 (mEq/L)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "deficit", label: "Bicarbonate Deficit", formula: "0.4 * weight * (24 - hco3)", unit: "mEq" }
    ],
    theory: "Estimates the amount of bicarbonate needed to correct metabolic acidosis.",
    seoMeta: { title: "Bicarbonate Deficit", description: "Calculate deficit.", keywords: "bicarbonate deficit" }
  },
  {
    id: "corrected-calcium-calculator",
    name: "Corrected Calcium Calculator",
    description: "Correct calcium for hypoalbuminemia.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Ca_{corr} = Ca + 0.8 \\times (4.0 - Albumin)",
    inputs: [
      { id: "ca", label: "Measured Calcium (mg/dL)", type: "number", defaultValue: 8.0 },
      { id: "alb", label: "Serum Albumin (g/dL)", type: "number", defaultValue: 3.0 }
    ],
    outputs: [
      { id: "corr_ca", label: "Corrected Calcium", formula: "ca + 0.8 * (4.0 - alb)", unit: "mg/dL" }
    ],
    theory: "Albumin binds calcium; correction is needed when albumin is low.",
    seoMeta: { title: "Corrected Calcium Calculator", description: "Correct for albumin.", keywords: "corrected calcium" }
  },
  {
    id: "corrected-magnesium-calculator",
    name: "Corrected Magnesium Calculator",
    description: "Correct magnesium for hypoalbuminemia.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Mg_{corr} = Mg + 0.005 \\times (40 - Albumin)",
    inputs: [
      { id: "mg", label: "Measured Magnesium (mg/dL)", type: "number", defaultValue: 1.5 },
      { id: "alb", label: "Serum Albumin (g/L)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "corr_mg", label: "Corrected Magnesium", formula: "mg + 0.005 * (40 - alb)", unit: "mg/dL" }
    ],
    theory: "Similar to calcium, magnesium binding is affected by albumin levels.",
    seoMeta: { title: "Corrected Magnesium", description: "Correct for albumin.", keywords: "corrected magnesium" }
  },
  {
    id: "drip-rate-calculator",
    name: "Drip Rate Calculator",
    description: "Calculate IV drip rate.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Rate = \\frac{Volume \\times Factor}{Time}",
    inputs: [
      { id: "volume", label: "Volume to infuse (ml)", type: "number", defaultValue: 1000 },
      { id: "factor", label: "Drop Factor (gtts/ml)", type: "number", defaultValue: 20 },
      { id: "hours", label: "Time (hours)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "rate", label: "Drip Rate", formula: "(volume * factor) / (hours * 60)", unit: "gtts/min" }
    ],
    theory: "Used to calculate the rate at which IV fluids should be administered.",
    seoMeta: { title: "Drip Rate Calculator", description: "Calculate IV rate.", keywords: "drip rate" }
  },
  {
    id: "drops-per-minute-calculator",
    name: "Drops Per Minute Calculator",
    description: "Calculate drops per minute for IV infusion.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Rate = \\frac{Volume \\times Factor}{Time}",
    inputs: [
      { id: "volume", label: "Volume to infuse (ml)", type: "number", defaultValue: 500 },
      { id: "factor", label: "Drop Factor (gtts/ml)", type: "number", defaultValue: 60 },
      { id: "hours", label: "Time (hours)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "rate", label: "Flow Rate", formula: "(volume * factor) / (hours * 60)", unit: "gtts/min" }
    ],
    theory: "Calculates the number of drops per minute to achieve a desired infusion volume.",
    seoMeta: { title: "Drops Per Minute", description: "Calculate IV flow.", keywords: "drops per minute" }
  },
  {
    id: "free-water-deficit-calculator",
    name: "Free Water Deficit Calculator",
    description: "Calculate water deficit in hypernatremia.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Deficit = TBW \\times \\left(\\frac{Na}{140} - 1\\right)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "na", label: "Serum Sodium (mEq/L)", type: "number", defaultValue: 160 },
      { id: "sex", label: "Sex factor (0.6 for men, 0.5 for women)", type: "number", defaultValue: 0.6 }
    ],
    outputs: [
      { id: "deficit", label: "Free Water Deficit", formula: "weight * sex * (na / 140 - 1)", unit: "L" }
    ],
    theory: "Estimates the amount of free water needed to correct hypernatremia.",
    seoMeta: { title: "Free Water Deficit", description: "Calculate deficit.", keywords: "free water deficit" }
  },
  {
    id: "iv-flow-rate-calculator",
    name: "IV Flow Rate Calculator",
    description: "Calculate IV flow rate in ml/hr.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Rate = \\frac{Volume}{Time}",
    inputs: [
      { id: "volume", label: "Volume to infuse (ml)", type: "number", defaultValue: 1000 },
      { id: "hours", label: "Time (hours)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "rate", label: "Flow Rate", formula: "volume / hours", unit: "ml/hr" }
    ],
    theory: "Simple calculation of volume divided by time for IV pumps.",
    seoMeta: { title: "IV Flow Rate Calculator", description: "Calculate ml/hr.", keywords: "IV flow rate" }
  },
  {
    id: "plasma-osmolality-calculator",
    name: "Plasma Osmolality Calculator",
    description: "Calculate calculated plasma osmolality.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Osm = 2 \\times Na + \\frac{Glucose}{18} + \\frac{BUN}{2.8}",
    inputs: [
      { id: "na", label: "Sodium (mEq/L)", type: "number", defaultValue: 140 },
      { id: "glucose", label: "Glucose (mg/dL)", type: "number", defaultValue: 100 },
      { id: "bun", label: "BUN (mg/dL)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "osm", label: "Calculated Osmolality", formula: "2 * na + glucose / 18 + bun / 2.8", unit: "mOsm/kg" }
    ],
    theory: "Normal range is 275-295 mOsm/kg. Used to assess fluid balance.",
    seoMeta: { title: "Plasma Osmolality", description: "Calculate osmolality.", keywords: "plasma osmolality" }
  },
  {
    id: "serum-osmolality-calculator",
    name: "Serum Osmolality Calculator",
    description: "Calculate measured or calculated serum osmolality.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Osm = 2 \\times Na + \\frac{Glucose}{18} + \\frac{BUN}{2.8}",
    inputs: [
      { id: "na", label: "Sodium (mEq/L)", type: "number", defaultValue: 140 },
      { id: "glucose", label: "Glucose (mg/dL)", type: "number", defaultValue: 100 },
      { id: "bun", label: "BUN (mg/dL)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "osm", label: "Calculated Osmolality", formula: "2 * na + glucose / 18 + bun / 2.8", unit: "mOsm/kg" }
    ],
    theory: "Identical to plasma osmolality. Helps evaluate hyponatremia.",
    seoMeta: { title: "Serum Osmolality", description: "Calculate osmolality.", keywords: "serum osmolality" }
  },
  {
    id: "sodium-change-hypertriglyceridemia-calculator",
    name: "Sodium Change Calculator in Hypertriglyceridemia",
    description: "Correct sodium for high triglycerides.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Na_{corr} = Na + 0.002 \\times Triglycerides",
    inputs: [
      { id: "na", label: "Measured Sodium (mEq/L)", type: "number", defaultValue: 130 },
      { id: "tg", label: "Triglycerides (mg/dL)", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "corr_na", label: "Corrected Sodium", formula: "na + 0.002 * tg", unit: "mEq/L" }
    ],
    theory: "Severe hypertriglyceridemia can cause pseudohyponatremia.",
    seoMeta: { title: "Sodium Change in HyperTG", description: "Correct for triglycerides.", keywords: "pseudohyponatremia" }
  },
  {
    id: "sodium-correction-calculator",
    name: "Sodium Correction Calculator",
    description: "Correct sodium for hyperglycemia.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Na_{corr} = Na + 0.016 \\times (Glucose - 100)",
    inputs: [
      { id: "na", label: "Measured Sodium (mEq/L)", type: "number", defaultValue: 130 },
      { id: "glucose", label: "Glucose (mg/dL)", type: "number", defaultValue: 400 }
    ],
    outputs: [
      { id: "corr_na", label: "Corrected Sodium", formula: "na + 0.016 * (glucose - 100)", unit: "mEq/L" }
    ],
    theory: "Hyperglycemia draws water out of cells, diluting serum sodium.",
    seoMeta: { title: "Sodium Correction Calculator", description: "Correct for glucose.", keywords: "sodium correction" }
  },
  {
    id: "sodium-correction-rate-calculator",
    name: "Sodium Correction Rate Calculator",
    description: "Calculate safe rate of sodium correction.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Rate \\le 0.5\\ mEq/L/hr",
    inputs: [
      { id: "current_na", label: "Current Sodium (mEq/L)", type: "number", defaultValue: 120 },
      { id: "target_na", label: "Target Sodium (mEq/L)", type: "number", defaultValue: 130 },
      { id: "hours", label: "Time Period (hours)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "rate", label: "Correction Rate", formula: "(target_na - current_na) / hours", unit: "mEq/L/hr" }
    ],
    theory: "Avoid correcting too rapidly to prevent osmotic demyelination syndrome.",
    seoMeta: { title: "Sodium Correction Rate", description: "Calculate safe rate.", keywords: "sodium rate" }
  },
  {
    id: "sodium-deficit-calculator",
    name: "Sodium Deficit Calculator",
    description: "Calculate sodium required to correct hyponatremia.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Deficit = TBW \\times (Target\\ Na - Current\\ Na)",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "current_na", label: "Current Sodium (mEq/L)", type: "number", defaultValue: 120 },
      { id: "target_na", label: "Target Sodium (mEq/L)", type: "number", defaultValue: 130 },
      { id: "sex", label: "Sex factor (0.6 for men, 0.5 for women)", type: "number", defaultValue: 0.6 }
    ],
    outputs: [
      { id: "deficit", label: "Sodium Deficit", formula: "weight * sex * (target_na - current_na)", unit: "mEq" }
    ],
    theory: "Estimates the total sodium deficit to guide replacement therapy.",
    seoMeta: { title: "Sodium Deficit Calculator", description: "Calculate deficit.", keywords: "sodium deficit" }
  },
  {
    id: "total-body-water-calculator",
    name: "Total Body Water Calculator",
    description: "Calculate total body water volume.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "TBW = Weight \\times Factor",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "factor", label: "Factor (0.6: Men, 0.5: Women)", type: "number", defaultValue: 0.6 }
    ],
    outputs: [
      { id: "tbw", label: "Total Body Water", formula: "weight * factor", unit: "L" }
    ],
    theory: "Used in many fluid deficit calculations.",
    seoMeta: { title: "Total Body Water", description: "Calculate TBW.", keywords: "total body water" }
  },
  {
    id: "urine-anion-gap-calculator",
    name: "Urine Anion Gap Calculator",
    description: "Calculate urine anion gap.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "UAG = Na + K - Cl",
    inputs: [
      { id: "na", label: "Urine Sodium (mEq/L)", type: "number", defaultValue: 40 },
      { id: "k", label: "Urine Potassium (mEq/L)", type: "number", defaultValue: 30 },
      { id: "cl", label: "Urine Chloride (mEq/L)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "uag", label: "Urine Anion Gap", formula: "na + k - cl", unit: "mEq/L" }
    ],
    theory: "Positive UAG suggests renal loss of bicarbonate (e.g., RTA).",
    seoMeta: { title: "Urine Anion Gap", description: "Calculate UAG.", keywords: "urine anion gap" }
  },
  {
    id: "venous-blood-ph-calculator",
    name: "Venous Blood pH Calculator",
    description: "Calculate pH from venous blood gases.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "pH \\approx Arterial\\ pH - 0.03",
    inputs: [
      { id: "v_ph", label: "Venous pH", type: "number", defaultValue: 7.35 }
    ],
    outputs: [
      { id: "est_a_ph", label: "Est. Arterial pH", formula: "v_ph + 0.03", unit: "" }
    ],
    theory: "Venous pH is typically slightly lower than arterial pH.",
    seoMeta: { title: "Venous Blood pH", description: "Calculate pH.", keywords: "venous pH" }
  },
  {
    id: "water-intake-calculator",
    name: "Water Intake Calculator",
    description: "Calculate recommended daily water intake.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "Intake = Weight \\times 35\\ ml",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "intake", label: "Recommended Intake", formula: "weight * 35", unit: "ml" },
      { id: "glasses", label: "In Glasses (250ml)", formula: "(weight * 35) / 250", unit: "glasses" }
    ],
    theory: "General guideline based on body weight.",
    seoMeta: { title: "Water Intake Calculator", description: "Daily water needs.", keywords: "water intake" }
  },
  {
    id: "winters-formula-calculator",
    name: "Winters' Formula Calculator",
    description: "Calculate expected pCO2 in metabolic acidosis.",
    category: "health",
    subcategory: "electrolytes",
    scientificFormula: "pCO_2 = 1.5 \\times HCO_3 + 8 \\pm 2",
    inputs: [
      { id: "hco3", label: "HCO3 (mEq/L)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "pco2", label: "Expected pCO2", formula: "1.5 * hco3 + 8", unit: "mmHg" }
    ],
    theory: "If measured pCO2 is higher than expected, there is a concurrent respiratory acidosis.",
    seoMeta: { title: "Winters' Formula", description: "Calculate expected pCO2.", keywords: "Winters formula" }
  },
  {
    id: "4t-score-calculator",
    name: "4T Score Calculator | HIT",
    description: "Assess probability of Heparin-Induced Thrombocytopenia.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Score = \\sum 4\\ T's",
    inputs: [
      { id: "thrombocytopenia", label: "Thrombocytopenia (0-2)", type: "number", defaultValue: 2 },
      { id: "timing", label: "Timing of platelet drop (0-2)", type: "number", defaultValue: 2 },
      { id: "thrombosis", label: "Thrombosis or other sequelae (0-2)", type: "number", defaultValue: 0 },
      { id: "o_causes", label: "Other causes not evident (0-2)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "total", label: "4T Score", formula: "thrombocytopenia + timing + thrombosis + o_causes", unit: "points" }
    ],
    theory: "Score 0-3: Low probability; 4-5: Intermediate; 6-8: High probability.",
    seoMeta: { title: "4T Score Calculator", description: "Assess HIT probability.", keywords: "4T score, HIT" }
  },
  {
    id: "absolute-eosinophil-count-calculator",
    name: "Absolute Eosinophil Count Calculator",
    description: "Calculate absolute eosinophil count.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "AEC = WBC \\times \\%Eosinophils",
    inputs: [
      { id: "wbc", label: "WBC Count (cells/µL)", type: "number", defaultValue: 5000 },
      { id: "eos", label: "Eosinophils (%)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "aec", label: "Absolute Eosinophil Count", formula: "wbc * (eos / 100)", unit: "cells/µL" }
    ],
    theory: "Normal range is typically 30-350 cells/µL.",
    seoMeta: { title: "Absolute Eosinophil Count", description: "Calculate AEC.", keywords: "eosinophil count" }
  },
  {
    id: "absolute-lymphocyte-count-calculator",
    name: "Absolute Lymphocyte Count Calculator",
    description: "Calculate absolute lymphocyte count.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ALC = WBC \\times \\%Lymphocytes",
    inputs: [
      { id: "wbc", label: "WBC Count (cells/µL)", type: "number", defaultValue: 5000 },
      { id: "lym", label: "Lymphocytes (%)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "alc", label: "Absolute Lymphocyte Count", formula: "wbc * (lym / 100)", unit: "cells/µL" }
    ],
    theory: "Normal range is typically 1000-4800 cells/µL.",
    seoMeta: { title: "Absolute Lymphocyte Count", description: "Calculate ALC.", keywords: "lymphocyte count" }
  },
  {
    id: "absolute-reticulocyte-count-calculator",
    name: "Absolute Reticulocyte Count Calculator",
    description: "Calculate absolute reticulocyte count.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ARC = Reticulocytes\\ (\\%) \\times RBC",
    inputs: [
      { id: "retic", label: "Reticulocytes (%)", type: "number", defaultValue: 1 },
      { id: "rbc", label: "RBC Count (x10^6/µL)", type: "number", defaultValue: 4.5 }
    ],
    outputs: [
      { id: "arc", label: "Absolute Reticulocyte Count", formula: "(retic / 100) * rbc * 1000000", unit: "cells/µL" }
    ],
    theory: "Helps assess bone marrow response to anemia.",
    seoMeta: { title: "Absolute Reticulocyte Count", description: "Calculate ARC.", keywords: "reticulocyte count" }
  },
  {
    id: "age-adjusted-d-dimer-calculator",
    name: "Age-Adjusted D-dimer Calculator",
    description: "Calculate age-adjusted D-dimer cutoff.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Cutoff = Age \\times 10\\ (if\\ Age > 50)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "cutoff", label: "D-dimer Cutoff", formula: "age > 50 ? age * 10 : 500", unit: "ng/mL" }
    ],
    theory: "Used to rule out PE in older patients with low pre-test probability.",
    seoMeta: { title: "Age-Adjusted D-dimer", description: "Calculate cutoff.", keywords: "D-dimer, age" }
  },
  {
    id: "albumin-globulin-ratio-calculator",
    name: "Albumin Globulin Ratio Calculator",
    description: "Calculate albumin-to-globulin ratio.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Ratio = \\frac{Albumin}{Total\\ Protein - Albumin}",
    inputs: [
      { id: "alb", label: "Albumin (g/dL)", type: "number", defaultValue: 4.0 },
      { id: "tp", label: "Total Protein (g/dL)", type: "number", defaultValue: 7.0 }
    ],
    outputs: [
      { id: "ratio", label: "A/G Ratio", formula: "alb / (tp - alb)", unit: "" }
    ],
    theory: "Normal ratio is typically 1.1 to 2.5.",
    seoMeta: { title: "Albumin Globulin Ratio", description: "Calculate A/G ratio.", keywords: "A/G ratio" }
  },
  {
    id: "anc-calculator",
    name: "ANC Calculator — Absolute Neutrophil Count",
    description: "Calculate absolute neutrophil count with bands.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ANC = WBC \\times (\\%Neutrophils + \\%Bands)",
    inputs: [
      { id: "wbc", label: "WBC Count (cells/µL)", type: "number", defaultValue: 5000 },
      { id: "neut", label: "Segmented Neutrophils (%)", type: "number", defaultValue: 50 },
      { id: "bands", label: "Bands (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "anc", label: "ANC", formula: "wbc * ((neut + bands) / 100)", unit: "cells/µL" }
    ],
    theory: "ANC < 1500 indicates neutropenia; < 500 is severe.",
    seoMeta: { title: "ANC Calculator", description: "Calculate ANC.", keywords: "ANC, neutrophils" }
  },
  {
    id: "anc-without-bands-calculator",
    name: "ANC Calculator without Bands",
    description: "Calculate absolute neutrophil count without bands.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ANC = WBC \\times \\%Neutrophils",
    inputs: [
      { id: "wbc", label: "WBC Count (cells/µL)", type: "number", defaultValue: 5000 },
      { id: "neut", label: "Neutrophils (%)", type: "number", defaultValue: 55 }
    ],
    outputs: [
      { id: "anc", label: "ANC", formula: "wbc * (neut / 100)", unit: "cells/µL" }
    ],
    theory: "Simplified ANC calculation when bands are not reported.",
    seoMeta: { title: "ANC without Bands", description: "Calculate ANC.", keywords: "ANC" }
  },
  {
    id: "blood-donation-due-date-calculator",
    name: "Blood Donation Due Date Calculator",
    description: "Calculate next eligible blood donation date.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Next\\ Date = Last\\ Date + 56\\ days",
    inputs: [
      { id: "days_since", label: "Days since last donation", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "days_left", label: "Days until eligible", formula: "56 - days_since > 0 ? 56 - days_since : 0", unit: "days" }
    ],
    theory: "Whole blood donation requires at least 56 days between donations.",
    seoMeta: { title: "Blood Donation Due Date", description: "Next donation date.", keywords: "blood donation" }
  },
  {
    id: "blood-donor-calculator",
    name: "Blood Donor Calculator",
    description: "Calculate maximum allowable blood draw for donation.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Volume = TBW \\times 0.15",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "gender", label: "Gender factor (70 for men, 65 for women)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "vol", label: "Total Blood Volume", formula: "(weight * gender) / 1000", unit: "L" },
      { id: "max_draw", label: "Max Safe Draw (10.5%)", formula: "((weight * gender) / 1000) * 0.105 * 1000", unit: "ml" }
    ],
    theory: "Ensures donor safety by not exceeding safe draw volumes.",
    seoMeta: { title: "Blood Donor Calculator", description: "Safe draw volume.", keywords: "blood donor" }
  },
  {
    id: "allowable-blood-loss-calculator",
    name: "Allowable Blood Loss Calculator",
    description: "Calculate maximum allowable blood loss.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "ABL = EBV \\times \\frac{Hct_{i} - Hct_{f}}{Hct_{i}}",
    inputs: [
      { id: "ebv", label: "Estimated Blood Volume (ml)", type: "number", defaultValue: 5000 },
      { id: "hcti", label: "Initial Hematocrit (%)", type: "number", defaultValue: 40 },
      { id: "hctf", label: "Final Acceptable Hematocrit (%)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "abl", label: "Allowable Blood Loss", formula: "ebv * ((hcti - hctf) / hcti)", unit: "ml" }
    ],
    theory: "Helps determine when blood transfusion is needed during surgery.",
    seoMeta: { title: "Allowable Blood Loss", description: "Calculate ABL.", keywords: "blood loss" }
  },
  {
    id: "blood-type-calculator",
    name: "Blood Type Calculator",
    description: "Determine possible child blood types from parents.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Genetics",
    inputs: [
      { id: "p1", label: "Parent 1 (A:1, B:2, AB:3, O:4)", type: "number", defaultValue: 1 },
      { id: "p2", label: "Parent 2 (A:1, B:2, AB:3, O:4)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "child", label: "Most Likely Child Type", formula: "p1 == 4 && p2 == 4 ? 4 : (p1 == 3 || p2 == 3 ? 3 : 1)", unit: "(1:A/B, 3:AB, 4:O)" }
    ],
    theory: "Uses basic Mendelian genetics for ABO blood groups.",
    seoMeta: { title: "Blood Type Calculator", description: "Predict child blood type.", keywords: "blood type" }
  },
  {
    id: "corrected-reticulocyte-count-calculator",
    name: "Corrected Reticulocyte Count Calculator",
    description: "Correct reticulocyte count for anemia.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "CRC = Reticulocytes \\times \\frac{Hct}{45}",
    inputs: [
      { id: "retic", label: "Reticulocytes (%)", type: "number", defaultValue: 1 },
      { id: "hct", label: "Patient's Hematocrit (%)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "crc", label: "Corrected Reticulocyte Count", formula: "retic * (hct / 45)", unit: "%" }
    ],
    theory: "Corrects the reticulocyte percentage for the degree of anemia.",
    seoMeta: { title: "Corrected Reticulocyte Count", description: "Correct for anemia.", keywords: "CRC" }
  },
  {
    id: "dic-syndrome-calculator",
    name: "DIC Syndrome Calculator",
    description: "Score for Disseminated Intravascular Coagulation.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Score = Plt + Fibrinogen + PT + D-dimer",
    inputs: [
      { id: "plt", label: "Platelets (0: >100k, 1: 50-100k, 2: <50k)", type: "number", defaultValue: 1 },
      { id: "ddimer", label: "D-dimer (0: Norm, 2: Mod, 3: Strong)", type: "number", defaultValue: 2 },
      { id: "pt", label: "PT prolongation (0: <3s, 1: 3-6s, 2: >6s)", type: "number", defaultValue: 1 },
      { id: "fib", label: "Fibrinogen (0: >1g/L, 1: <1g/L)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total", label: "DIC Score", formula: "plt + ddimer + pt + fib", unit: "points" }
    ],
    theory: "Score >= 5 is compatible with overt DIC.",
    seoMeta: { title: "DIC Score Calculator", description: "Score for DIC.", keywords: "DIC score" }
  },
  {
    id: "dlbcl-prognosis-calculator",
    name: "Diffuse Large B-cell Lymphoma Prognosis Calculator",
    description: "Calculate IPI score for DLBCL.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Score = \\sum Criteria",
    inputs: [
      { id: "age", label: "Age > 60? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "ldh", label: "LDH elevated? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 },
      { id: "stage", label: "Stage III/IV? (1 for Yes, 0 for No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "total", label: "IPI Score", formula: "age + ldh + stage", unit: "points" }
    ],
    theory: "International Prognostic Index (IPI) predicts survival in DLBCL.",
    seoMeta: { title: "DLBCL Prognosis Calculator", description: "IPI score.", keywords: "DLBCL, IPI" }
  },
  {
    id: "ffp-dose-calculator",
    name: "Fresh Frozen Plasma Dose Calculator",
    description: "Calculate FFP dose based on weight.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Dose = 12.5 \\times Weight",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "dose", label: "Estimated FFP Dose", formula: "weight * 12.5", unit: "ml" },
      { id: "units", label: "Estimated Units (approx 250ml each)", formula: "(weight * 12.5) / 250", unit: "units" }
    ],
    theory: "Standard dose is 10-15 ml/kg to reverse coagulopathies.",
    seoMeta: { title: "FFP Dose Calculator", description: "Calculate FFP volume.", keywords: "FFP dose" }
  },
  {
    id: "hct-hb-ratio-calculator",
    name: "Hematocrit to Hemoglobin Ratio Calculator",
    description: "Calculate Hct/Hb ratio.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Ratio = \\frac{Hct}{Hb}",
    inputs: [
      { id: "hct", label: "Hematocrit (%)", type: "number", defaultValue: 45 },
      { id: "hb", label: "Hemoglobin (g/dL)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "ratio", label: "Hct/Hb Ratio", formula: "hct / hb", unit: "" }
    ],
    theory: "The ratio is normally around 3. Significant deviations suggest lab error or pathology.",
    seoMeta: { title: "Hct to Hb Ratio", description: "Calculate ratio.", keywords: "Hct Hb ratio" }
  },
  {
    id: "iron-deficiency-calculator",
    name: "Iron Deficiency Calculator",
    description: "Calculate iron deficit using Ganzoni formula.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Deficit = Wt \\times (15 - Hb) \\times 2.4 + 500",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "hb", label: "Current Hemoglobin (g/dL)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "deficit", label: "Iron Deficit", formula: "weight * (15 - hb) * 2.4 + 500", unit: "mg" }
    ],
    theory: "Ganzoni formula estimates total iron deficit including stores.",
    seoMeta: { title: "Iron Deficiency Calculator", description: "Calculate deficit.", keywords: "iron deficit" }
  },
  {
    id: "mentzer-index-calculator",
    name: "Mentzer Index Calculator",
    description: "Differentiate iron deficiency from thalassemia.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Index = \\frac{MCV}{RBC}",
    inputs: [
      { id: "mcv", label: "MCV (fL)", type: "number", defaultValue: 80 },
      { id: "rbc", label: "RBC Count (x10^6/µL)", type: "number", defaultValue: 5.0 }
    ],
    outputs: [
      { id: "index", label: "Mentzer Index", formula: "mcv / rbc", unit: "" }
    ],
    theory: "Index < 13 suggests thalassemia; > 13 suggests iron deficiency.",
    seoMeta: { title: "Mentzer Index Calculator", description: "Differentiate anemia.", keywords: "Mentzer index" }
  },
  {
    id: "mipi-calculator",
    name: "MIPI Calculator",
    description: "Calculate Mantle Cell Lymphoma Prognostic Index.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "Score = f(Age, ECOG, LDH, WBC)",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "ldh", label: "LDH ratio to upper normal limit", type: "number", defaultValue: 1.5 },
      { id: "wbc", label: "WBC count (x10^9/L)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "score", label: "MIPI Score", formula: "0.03535 * age + 1.267 * log(ldh) + 0.3607 * log(wbc)", unit: "points" }
    ],
    theory: "MIPI is used to risk-stratify patients with mantle cell lymphoma.",
    seoMeta: { title: "MIPI Calculator", description: "Calculate MIPI score.", keywords: "MIPI" }
  },
  {
    id: "mmol-to-mgdl-calculator",
    name: "mmol/L to mg/dL Calculator",
    description: "Convert blood glucose units.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "mg/dL = mmol/L \\times 18",
    inputs: [
      { id: "mmol", label: "Value in mmol/L", type: "number", defaultValue: 5.5 }
    ],
    outputs: [
      { id: "mgdl", label: "Value in mg/dL", formula: "mmol * 18", unit: "mg/dL" }
    ],
    theory: "Used primarily for converting blood glucose measurements.",
    seoMeta: { title: "mmol/L to mg/dL", description: "Convert glucose units.", keywords: "mmol/L, mg/dL" }
  },
  {
    id: "nlr-calculator",
    name: "NLR Calculator",
    description: "Calculate Neutrophil-to-Lymphocyte Ratio.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "NLR = \\frac{Neutrophils}{Lymphocytes}",
    inputs: [
      { id: "neut", label: "Neutrophils (%)", type: "number", defaultValue: 60 },
      { id: "lym", label: "Lymphocytes (%)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "nlr", label: "NLR", formula: "neut / lym", unit: "" }
    ],
    theory: "Used as a marker of subclinical inflammation.",
    seoMeta: { title: "NLR Calculator", description: "Calculate NLR.", keywords: "NLR, inflammation" }
  },
  {
    id: "plasma-volume-calculator",
    name: "Plasma Volume Calculator",
    description: "Calculate estimated plasma volume.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "PV = EBV \\times (1 - Hct)",
    inputs: [
      { id: "ebv", label: "Estimated Blood Volume (ml)", type: "number", defaultValue: 5000 },
      { id: "hct", label: "Hematocrit (%)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "pv", label: "Plasma Volume", formula: "ebv * (1 - hct / 100)", unit: "ml" }
    ],
    theory: "Calculates the non-cellular portion of the blood volume.",
    seoMeta: { title: "Plasma Volume Calculator", description: "Calculate volume.", keywords: "plasma volume" }
  },
  {
    id: "rbc-indices-calculator",
    name: "RBC Indices Calculator | What is MCHC?",
    description: "Calculate MCV, MCH, and MCHC.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "MCHC = \\frac{Hb}{Hct}",
    inputs: [
      { id: "hb", label: "Hemoglobin (g/dL)", type: "number", defaultValue: 15 },
      { id: "hct", label: "Hematocrit (%)", type: "number", defaultValue: 45 },
      { id: "rbc", label: "RBC Count (x10^6/µL)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "mcv", label: "MCV", formula: "(hct / rbc) * 10", unit: "fL" },
      { id: "mch", label: "MCH", formula: "(hb / rbc) * 10", unit: "pg" },
      { id: "mchc", label: "MCHC", formula: "(hb / hct) * 100", unit: "g/dL" }
    ],
    theory: "RBC indices help diagnose different types of anemia.",
    seoMeta: { title: "RBC Indices Calculator", description: "Calculate MCV, MCH, MCHC.", keywords: "RBC indices, MCHC" }
  },
  {
    id: "transferrin-saturation-calculator",
    name: "Transferrin Saturation Calculator",
    description: "Calculate transferrin saturation.",
    category: "health",
    subcategory: "hematology",
    scientificFormula: "TSAT = \\frac{Serum\\ Iron}{TIBC} \\times 100",
    inputs: [
      { id: "iron", label: "Serum Iron (µg/dL)", type: "number", defaultValue: 100 },
      { id: "tibc", label: "TIBC (µg/dL)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "tsat", label: "Transferrin Saturation", formula: "(iron / tibc) * 100", unit: "%" }
    ],
    theory: "Normal range is typically 20% to 50%. Low values suggest iron deficiency.",
    seoMeta: { title: "Transferrin Saturation", description: "Calculate TSAT.", keywords: "TSAT" }
  },
  {
    id: "baby-percentile-calculator",
    name: "Baby Percentile Calculator",
    description: "Calculate growth percentiles for babies.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Age, Sex, Value)",
    inputs: [
      { id: "age", label: "Age (months)", type: "number", defaultValue: 6 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 7 },
      { id: "sex", label: "Sex factor (1 for boy, 0.9 for girl)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "percentile", label: "Weight Percentile", formula: "50 + (weight - (5 + age*0.5)) * 10", unit: "%" }
    ],
    theory: "Simplified approximation. Real calculators use WHO child growth standards.",
    seoMeta: { title: "Baby Percentile Calculator", description: "Calculate growth percentiles.", keywords: "baby percentile" }
  },
  {
    id: "birth-weight-percentile-calculator",
    name: "Birth Weight Percentile Calculator",
    description: "Calculate percentile for birth weight.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Gestational\\ Age, Weight)",
    inputs: [
      { id: "ga", label: "Gestational Age (weeks)", type: "number", defaultValue: 40 },
      { id: "weight", label: "Birth Weight (g)", type: "number", defaultValue: 3500 }
    ],
    outputs: [
      { id: "percentile", label: "Birth Weight Percentile", formula: "50 + (weight - 3500) / 10", unit: "%" }
    ],
    theory: "Assesses if a baby is small, appropriate, or large for gestational age.",
    seoMeta: { title: "Birth Weight Percentile", description: "Calculate percentile.", keywords: "birth weight" }
  },
  {
    id: "bmi-percentile-calculator",
    name: "BMI Percentile Calculator",
    description: "Calculate BMI percentile for children.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Age, Sex, BMI)",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 },
      { id: "bmi", label: "BMI", type: "number", defaultValue: 18 }
    ],
    outputs: [
      { id: "percentile", label: "BMI Percentile", formula: "50 + (bmi - 18) * 5", unit: "%" }
    ],
    theory: "Used to assess weight status in children and adolescents.",
    seoMeta: { title: "BMI Percentile Calculator", description: "Calculate BMI percentile.", keywords: "BMI percentile" }
  },
  {
    id: "height-percentile-calculator",
    name: "Height Percentile Calculator",
    description: "Calculate height percentile for children.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Age, Sex, Height)",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 },
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 138 }
    ],
    outputs: [
      { id: "percentile", label: "Height Percentile", formula: "50 + (height - 138) * 2", unit: "%" }
    ],
    theory: "Compares a child's height to a reference population.",
    seoMeta: { title: "Height Percentile Calculator", description: "Calculate height percentile.", keywords: "height percentile" }
  },
  {
    id: "weight-percentile-calculator",
    name: "Weight Percentile Calculator",
    description: "Calculate weight percentile for children.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Age, Sex, Weight)",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 32 }
    ],
    outputs: [
      { id: "percentile", label: "Weight Percentile", formula: "50 + (weight - 32) * 2", unit: "%" }
    ],
    theory: "Compares a child's weight to a reference population.",
    seoMeta: { title: "Weight Percentile Calculator", description: "Calculate weight percentile.", keywords: "weight percentile" }
  },
  {
    id: "fetal-weight-percentile-calculator",
    name: "Fetal Weight Percentile Calculator",
    description: "Calculate percentile for estimated fetal weight.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Gestational\\ Age, EFW)",
    inputs: [
      { id: "ga", label: "Gestational Age (weeks)", type: "number", defaultValue: 32 },
      { id: "efw", label: "Estimated Fetal Weight (g)", type: "number", defaultValue: 2000 }
    ],
    outputs: [
      { id: "percentile", label: "Fetal Weight Percentile", formula: "50 + (efw - 2000) / 20", unit: "%" }
    ],
    theory: "Used to monitor fetal growth and detect growth restriction.",
    seoMeta: { title: "Fetal Weight Percentile", description: "Calculate percentile.", keywords: "fetal weight" }
  },
  {
    id: "head-circumference-percentile-calculator",
    name: "Head Circumference Percentile Calculator",
    description: "Calculate head circumference percentile.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Percentile = f(Age, Sex, HC)",
    inputs: [
      { id: "age", label: "Age (months)", type: "number", defaultValue: 12 },
      { id: "hc", label: "Head Circumference (cm)", type: "number", defaultValue: 46 }
    ],
    outputs: [
      { id: "percentile", label: "HC Percentile", formula: "50 + (hc - 46) * 5", unit: "%" }
    ],
    theory: "Monitors brain growth and identifies potential issues.",
    seoMeta: { title: "Head Circumference Percentile", description: "Calculate percentile.", keywords: "head circumference" }
  },
  {
    id: "iq-percentile-calculator",
    name: "IQ Percentile Calculator",
    description: "Calculate percentile from IQ score.",
    category: "health",
    subcategory: "percentile",
    scientificFormula: "Z = \\frac{IQ - 100}{15}",
    inputs: [
      { id: "iq", label: "IQ Score", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "percentile", label: "IQ Percentile", formula: "50 + (iq - 100) * 0.34", unit: "%" }
    ],
    theory: "IQ scores are normally distributed with a mean of 100 and SD of 15.",
    seoMeta: { title: "IQ Percentile Calculator", description: "Calculate IQ percentile.", keywords: "IQ percentile" }
  },
  {
    id: "adjusted-age-calculator",
    name: "Adjusted Age Calculator",
    description: "Calculate adjusted age for preterm babies.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Adjusted\\ Age = Actual\\ Age - Weeks\\ Preterm",
    inputs: [
      { id: "actual_age", label: "Actual Age (weeks)", type: "number", defaultValue: 12 },
      { id: "gestational_age", label: "Gestational Age at Birth (weeks)", type: "number", defaultValue: 32 }
    ],
    outputs: [
      { id: "adjusted_age", label: "Adjusted Age", formula: "actual_age - (40 - gestational_age)", unit: "weeks" }
    ],
    theory: "Used to assess growth and development in preterm infants.",
    seoMeta: { title: "Adjusted Age Calculator", description: "Calculate adjusted age.", keywords: "adjusted age, preterm" }
  },
  {
    id: "apgar-score-calculator",
    name: "APGAR Score Calculator",
    description: "Calculate APGAR score for newborns.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Score = A + P + G + A + R",
    inputs: [
      { id: "a1", label: "Appearance (0-2)", type: "number", defaultValue: 2 },
      { id: "p1", label: "Pulse (0-2)", type: "number", defaultValue: 2 },
      { id: "g1", label: "Grimace (0-2)", type: "number", defaultValue: 2 },
      { id: "a2", label: "Activity (0-2)", type: "number", defaultValue: 2 },
      { id: "r1", label: "Respiration (0-2)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "total", label: "APGAR Score", formula: "a1 + p1 + g1 + a2 + r1", unit: "points" }
    ],
    theory: "Scores of 7-10 are considered normal; 4-6 intermediate; 0-3 low.",
    seoMeta: { title: "APGAR Score Calculator", description: "Calculate APGAR score.", keywords: "APGAR" }
  },
  {
    id: "baby-eye-color-calculator",
    name: "Baby Eye Color Calculator",
    description: "Predict baby's eye color based on parents.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Genetics",
    inputs: [
      { id: "p1", label: "Parent 1 Eye Color (Brown:1, Blue:2, Green:3)", type: "number", defaultValue: 1 },
      { id: "p2", label: "Parent 2 Eye Color (Brown:1, Blue:2, Green:3)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "brown_prob", label: "Probability of Brown Eyes", formula: "p1 == 1 || p2 == 1 ? 75 : 10", unit: "%" },
      { id: "blue_prob", label: "Probability of Blue Eyes", formula: "p1 == 2 && p2 == 2 ? 99 : 20", unit: "%" }
    ],
    theory: "Simplified genetic model. Eye color inheritance is polygenic.",
    seoMeta: { title: "Baby Eye Color Calculator", description: "Predict eye color.", keywords: "baby eye color" }
  },
  {
    id: "baby-formula-calculator",
    name: "Baby Formula Calculator",
    description: "Calculate recommended formula amount.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Amount = Weight \\times 2.5\\ oz",
    inputs: [
      { id: "weight", label: "Baby's Weight (lbs)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "amount", label: "Daily Formula Amount", formula: "weight * 2.5", unit: "oz" }
    ],
    theory: "General guideline is about 2.5 oz of formula per pound of body weight daily.",
    seoMeta: { title: "Baby Formula Calculator", description: "Calculate formula amount.", keywords: "baby formula" }
  },
  {
    id: "baby-milk-intake-calculator",
    name: "Baby's Milk Intake Calculator",
    description: "Calculate recommended milk intake.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Intake = Weight \\times 150\\ ml",
    inputs: [
      { id: "weight", label: "Baby's Weight (kg)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "intake", label: "Daily Milk Intake", formula: "weight * 150", unit: "ml" }
    ],
    theory: "Guidelines suggest 150-200 ml of milk per kg of body weight daily.",
    seoMeta: { title: "Baby Milk Intake", description: "Calculate milk intake.", keywords: "baby milk intake" }
  },
  {
    id: "exclusive-pumping-calculator",
    name: "Exclusive Pumping Calculator",
    description: "Calculate pumping schedule and volume.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Volume = Target / Frequency",
    inputs: [
      { id: "target", label: "Target Daily Volume (oz)", type: "number", defaultValue: 30 },
      { id: "freq", label: "Pumping Frequency (times/day)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "vol_per_pump", label: "Volume per Pump", formula: "target / freq", unit: "oz" }
    ],
    theory: "Helps exclusive pumping mothers manage their supply and schedule.",
    seoMeta: { title: "Exclusive Pumping Calculator", description: "Pumping schedule.", keywords: "exclusive pumping" }
  },
  {
    id: "gir-calculator",
    name: "GIR calculator (Glucose Infusion Rate)",
    description: "Calculate glucose infusion rate.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "GIR = \\frac{Rate \\times Dextrose\\%}{Weight \\times 6}",
    inputs: [
      { id: "rate", label: "IV Rate (ml/hr)", type: "number", defaultValue: 10 },
      { id: "dex", label: "Dextrose Concentration (%)", type: "number", defaultValue: 10 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "gir", label: "GIR", formula: "(rate * dex) / (weight * 6)", unit: "mg/kg/min" }
    ],
    theory: "Used in neonates to manage glucose delivery.",
    seoMeta: { title: "GIR Calculator", description: "Glucose infusion rate.", keywords: "GIR, neonate" }
  },
  {
    id: "height-calculator-child",
    name: "Height Calculator",
    description: "Predict child's adult height.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Height = Mid-parental\\ Height \\pm 6.5\\ cm",
    inputs: [
      { id: "f_height", label: "Father's Height (cm)", type: "number", defaultValue: 175 },
      { id: "m_height", label: "Mother's Height (cm)", type: "number", defaultValue: 162 },
      { id: "sex", label: "Child's Sex (1 for boy, 2 for girl)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "est_height", label: "Estimated Adult Height", formula: "sex == 1 ? (f_height + m_height + 13) / 2 : (f_height + m_height - 13) / 2", unit: "cm" }
    ],
    theory: "Mid-parental height method provides a rough estimate of adult height.",
    seoMeta: { title: "Height Calculator", description: "Predict adult height.", keywords: "height calculator" }
  },
  {
    id: "maintenance-fluids-calculator",
    name: "Maintenance Fluids Calculator",
    description: "Calculate maintenance fluid rate.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "4-2-1 Rule",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "rate", label: "Maintenance Rate", formula: "weight <= 10 ? weight * 4 : (weight <= 20 ? 40 + (weight - 10) * 2 : 60 + (weight - 20))", unit: "ml/hr" }
    ],
    theory: "Uses the Holliday-Segar 4-2-1 rule for pediatric fluid maintenance.",
    seoMeta: { title: "Maintenance Fluids", description: "Calculate fluid rate.", keywords: "maintenance fluids" }
  },
  {
    id: "newborn-hyperbilirubinemia-calculator",
    name: "Newborn Hyperbilirubinemia Assessment Calculator",
    description: "Assess risk of hyperbilirubinemia.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Bhutani Curve",
    inputs: [
      { id: "age", label: "Age (hours)", type: "number", defaultValue: 48 },
      { id: "bili", label: "Total Bilirubin (mg/dL)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "risk", label: "Risk Zone (1:High, 2:Mod, 3:Low)", formula: "age == 48 && bili >= 15 ? 1 : 3", unit: "zone" }
    ],
    theory: "Assesses the risk of severe hyperbilirubinemia in newborns.",
    seoMeta: { title: "Hyperbilirubinemia Assessment", description: "Assess bilirubin risk.", keywords: "hyperbilirubinemia" }
  },
  {
    id: "pecarn-calculator",
    name: "PECARN Calculator",
    description: "Assess head trauma in children.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Clinical Decision Rule",
    inputs: [
      { id: "age_cat", label: "Age Category (1: <2 years, 2: >=2 years)", type: "number", defaultValue: 1 },
      { id: "gcs", label: "GCS < 15? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "ams", label: "Altered Mental Status? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 },
      { id: "skull_frac", label: "Signs of skull fracture? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "risk", label: "Risk of ciTBI", formula: "gcs == 1 || ams == 1 || skull_frac == 1 ? 4 : 0.05", unit: "%" }
    ],
    theory: "PECARN rule helps identify children at low risk for clinically important traumatic brain injury.",
    seoMeta: { title: "PECARN Calculator", description: "Assess head trauma risk.", keywords: "PECARN" }
  },
  {
    id: "pediatric-blood-pressure-calculator",
    name: "Pediatric Blood Pressure Calculator",
    description: "Calculate blood pressure percentiles for children.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Percentile = f(Age, Sex, Height, BP)",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 },
      { id: "sys", label: "Systolic BP (mmHg)", type: "number", defaultValue: 100 },
      { id: "dia", label: "Diastolic BP (mmHg)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "sys_pct", label: "Systolic Percentile", formula: "50 + (sys - 100) * 2", unit: "%" },
      { id: "dia_pct", label: "Diastolic Percentile", formula: "50 + (dia - 60) * 2", unit: "%" }
    ],
    theory: "Normal blood pressure in children depends on age, sex, and height.",
    seoMeta: { title: "Pediatric Blood Pressure", description: "Calculate BP percentiles.", keywords: "pediatric blood pressure" }
  },
  {
    id: "pediatric-blood-transfusion-volume-calculator",
    name: "Pediatric Blood Transfusion Volume Calculator",
    description: "Calculate red blood cell transfusion volume.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "Volume = Weight \\times 10-15\\ ml/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 10 },
      { id: "hb_target", label: "Target Hb increase (g/dL)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "vol", label: "Transfusion Volume", formula: "weight * hb_target * 3", unit: "ml" }
    ],
    theory: "Typically 10-15 ml/kg of packed red blood cells is used.",
    seoMeta: { title: "Pediatric Blood Transfusion", description: "Calculate volume.", keywords: "pediatric transfusion" }
  },
  {
    id: "pediatric-blood-volume-calculator",
    name: "Pediatric Blood Volume Calculator",
    description: "Calculate estimated blood volume in children.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "EBV = Weight \\times Factor",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 10 },
      { id: "age_cat", label: "Age Group (1:Neonate, 2:Infant, 3:Child)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "ebv", label: "Estimated Blood Volume", formula: "age_cat == 1 ? weight * 90 : (age_cat == 2 ? weight * 80 : weight * 75)", unit: "ml" }
    ],
    theory: "Blood volume per kg is higher in neonates and decreases with age.",
    seoMeta: { title: "Pediatric Blood Volume", description: "Calculate blood volume.", keywords: "pediatric blood volume" }
  },
  {
    id: "pediatric-gfr-calculator",
    name: "Pediatric GFR Calculator - Glomerular Filtration Rate",
    description: "Calculate GFR in children using Schwartz formula.",
    category: "health",
    subcategory: "pediatrics",
    scientificFormula: "eGFR = \\frac{0.413 \\times Height}{Serum\\ Creatinine}",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 120 },
      { id: "cr", label: "Serum Creatinine (mg/dL)", type: "number", defaultValue: 0.6 }
    ],
    outputs: [
      { id: "gfr", label: "Estimated GFR", formula: "(0.413 * height) / cr", unit: "ml/min/1.73m²" }
    ],
    theory: "The bedside Schwartz formula is the standard for estimating GFR in children.",
    seoMeta: { title: "Pediatric GFR Calculator", description: "Schwartz formula.", keywords: "pediatric GFR" }
  },
  {
    id: "amoxicillin-pediatric-dosage-calculator",
    name: "Amoxicillin Pediatric Dosage Calculator",
    description: "Calculate amoxicillin dose for children.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 45\\ mg/kg/day",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 },
      { id: "conc", label: "Suspension Concentration (mg/5ml)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "dose_mg", label: "Daily Dose (mg)", formula: "weight * 45", unit: "mg" },
      { id: "dose_ml", label: "Daily Dose (ml)", formula: "(weight * 45) / (conc / 5)", unit: "ml" }
    ],
    theory: "Standard dose is 45-90 mg/kg/day divided into 2-3 doses.",
    seoMeta: { title: "Amoxicillin Pediatric Dosage", description: "Calculate amoxicillin dose.", keywords: "amoxicillin pediatric" }
  },
  {
    id: "ibuprofen-dosage-calculator",
    name: "Ibuprofen Dosage Calculator",
    description: "Calculate ibuprofen dose for children.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 10\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 },
      { id: "conc", label: "Suspension Concentration (mg/5ml)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "dose_mg", label: "Dose (mg)", formula: "weight * 10", unit: "mg" },
      { id: "dose_ml", label: "Dose (ml)", formula: "(weight * 10) / (conc / 5)", unit: "ml" }
    ],
    theory: "Standard dose is 5-10 mg/kg every 6-8 hours.",
    seoMeta: { title: "Ibuprofen Dosage Calculator", description: "Calculate ibuprofen dose.", keywords: "ibuprofen pediatric" }
  },
  {
    id: "infant-tylenol-dosage-calculator",
    name: "Infant Tylenol Dosage Calculator",
    description: "Calculate Tylenol (Acetaminophen) dose for infants.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = Weight \\times 15\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 5 },
      { id: "conc", label: "Suspension Concentration (mg/5ml)", type: "number", defaultValue: 160 }
    ],
    outputs: [
      { id: "dose_mg", label: "Dose (mg)", formula: "weight * 15", unit: "mg" },
      { id: "dose_ml", label: "Dose (ml)", formula: "(weight * 15) / (conc / 5)", unit: "ml" }
    ],
    theory: "Standard dose is 10-15 mg/kg every 4-6 hours.",
    seoMeta: { title: "Infant Tylenol Dosage", description: "Calculate Tylenol dose.", keywords: "Tylenol pediatric" }
  },
  {
    id: "pediatric-epinephrine-dose-calculator",
    name: "Pediatric Epinephrine Dose Calculator",
    description: "Calculate epinephrine dose for anaphylaxis.",
    category: "health",
    subcategory: "pediatric-dosage",
    scientificFormula: "Dose = 0.01\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "dose_mg", label: "Epinephrine Dose (mg)", formula: "weight * 0.01", unit: "mg" },
      { id: "vol_1000", label: "Volume of 1:1000 (ml)", formula: "weight * 0.01", unit: "ml" }
    ],
    theory: "Standard dose for anaphylaxis is 0.01 mg/kg of 1:1000 solution IM.",
    seoMeta: { title: "Pediatric Epinephrine Dose", description: "Calculate epinephrine dose.", keywords: "epinephrine pediatric" }
  },
  {
    id: "adderall-dosage-calculator",
    name: "Adderall Dosage Calculator",
    description: "Calculate Adderall dose titration.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Schedule",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 },
      { id: "start_dose", label: "Starting Dose (mg)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "max_dose", label: "Typical Max Dose", formula: "age < 12 ? 30 : 40", unit: "mg" }
    ],
    theory: "Dosage should be individualized. Start low and titrate.",
    seoMeta: { title: "Adderall Dosage Calculator", description: "Calculate Adderall dose.", keywords: "Adderall dosage" }
  },
  {
    id: "aleve-dosage-calculator",
    name: "Aleve Dosage Calculator",
    description: "Calculate Aleve (Naproxen) dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = 220\\ mg\\ every\\ 8-12\\ hours",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "adult_dose", label: "Standard Adult Dose", formula: "220", unit: "mg" },
      { id: "max_daily", label: "Max Daily Dose", formula: "660", unit: "mg" }
    ],
    theory: "Aleve is Naproxen sodium. Not recommended for children under 12 without MD advice.",
    seoMeta: { title: "Aleve Dosage Calculator", description: "Calculate Aleve dose.", keywords: "Aleve dosage" }
  },
  {
    id: "benadryl-dosage-calculator",
    name: "Benadryl Dosage Calculator",
    description: "Calculate Benadryl (Diphenhydramine) dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 1.25\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 20 },
      { id: "conc", label: "Liquid Concentration (mg/5ml)", type: "number", defaultValue: 12.5 }
    ],
    outputs: [
      { id: "dose_mg", label: "Dose (mg)", formula: "weight * 1.25", unit: "mg" },
      { id: "dose_ml", label: "Dose (ml)", formula: "(weight * 1.25) / (conc / 5)", unit: "ml" }
    ],
    theory: "Pediatric dose is typically 1.25 mg/kg every 6 hours.",
    seoMeta: { title: "Benadryl Dosage Calculator", description: "Calculate Benadryl dose.", keywords: "Benadryl dosage" }
  },
  {
    id: "benzo-conversion-calculator",
    name: "Benzodiazepine Conversion Calculator",
    description: "Convert benzodiazepine doses to Diazepam equivalents.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Equivalents",
    inputs: [
      { id: "alprazolam", label: "Alprazolam (mg)", type: "number", defaultValue: 1 },
      { id: "lorazepam", label: "Lorazepam (mg)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "diaz_eq", label: "Diazepam Equivalent", formula: "alprazolam * 10 + lorazepam * 5", unit: "mg" }
    ],
    theory: "Helps switch patients between different benzodiazepines.",
    seoMeta: { title: "Benzodiazepine Conversion", description: "Convert benzo doses.", keywords: "benzo conversion" }
  },
  {
    id: "carboplatin-calculator",
    name: "Carboplatin Calculator",
    description: "Calculate Carboplatin dose using Calvert formula.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = AUC \\times (GFR + 25)",
    inputs: [
      { id: "auc", label: "Target AUC", type: "number", defaultValue: 5 },
      { id: "gfr", label: "GFR (ml/min)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "dose", label: "Carboplatin Dose", formula: "auc * (gfr + 25)", unit: "mg" }
    ],
    theory: "Calvert formula limits toxicity by adjusting for renal function.",
    seoMeta: { title: "Carboplatin Calculator", description: "Calvert formula.", keywords: "Carboplatin" }
  },
  {
    id: "cefdinir-dose-calculator",
    name: "Cefdinir Dose Calculator",
    description: "Calculate Cefdinir dose for children.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 14\\ mg/kg/day",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 10 },
      { id: "conc", label: "Suspension (mg/5ml)", type: "number", defaultValue: 125 }
    ],
    outputs: [
      { id: "dose_mg", label: "Daily Dose (mg)", formula: "weight * 14", unit: "mg" },
      { id: "dose_ml", label: "Daily Dose (ml)", formula: "(weight * 14) / (conc / 5)", unit: "ml" }
    ],
    theory: "Standard pediatric dose is 14 mg/kg/day up to 600 mg.",
    seoMeta: { title: "Cefdinir Dose Calculator", description: "Calculate Cefdinir dose.", keywords: "Cefdinir" }
  },
  {
    id: "dosage-calculator-general",
    name: "Dosage Calculator",
    description: "General weight-based dosage calculator.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times Dose\\ Rate",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "rate", label: "Dose Rate (mg/kg)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "total_dose", label: "Total Dose", formula: "weight * rate", unit: "mg" }
    ],
    theory: "Simple weight-based calculation used for many medications.",
    seoMeta: { title: "Dosage Calculator", description: "Calculate general dose.", keywords: "dosage calculator" }
  },
  {
    id: "drug-half-life-calculator",
    name: "Drug Half-Life Calculator",
    description: "Calculate drug concentration over time.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "N(t) = N_0 \\times (0.5)^{t / t_{1/2}}",
    inputs: [
      { id: "initial", label: "Initial Dose (mg)", type: "number", defaultValue: 100 },
      { id: "half_life", label: "Half-Life (hours)", type: "number", defaultValue: 4 },
      { id: "time", label: "Time Elapsed (hours)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "remaining", label: "Remaining Amount", formula: "initial * (0.5)^(time / half_life)", unit: "mg" }
    ],
    theory: "Estimates how long a drug stays in the body.",
    seoMeta: { title: "Drug Half-Life Calculator", description: "Calculate remaining drug.", keywords: "drug half-life" }
  },
  {
    id: "fish-oil-calculator",
    name: "Fish Oil Calculator",
    description: "Calculate total EPA and DHA from fish oil.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Total = EPA + DHA",
    inputs: [
      { id: "capsules", label: "Number of Capsules", type: "number", defaultValue: 1 },
      { id: "epa", label: "EPA per capsule (mg)", type: "number", defaultValue: 180 },
      { id: "dha", label: "DHA per capsule (mg)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "total_omega3", label: "Total Omega-3", formula: "capsules * (epa + dha)", unit: "mg" }
    ],
    theory: "Helps track intake of active omega-3 fatty acids.",
    seoMeta: { title: "Fish Oil Calculator", description: "Calculate EPA and DHA.", keywords: "fish oil" }
  },
  {
    id: "gabapentin-dosage-calculator",
    name: "Gabapentin Dosage Calculator",
    description: "Calculate Gabapentin titration schedule.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Titration",
    inputs: [
      { id: "start_dose", label: "Day 1 Dose (mg)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "day2", label: "Day 2 Dose", formula: "start_dose * 2", unit: "mg" },
      { id: "day3", label: "Day 3 Dose", formula: "start_dose * 3", unit: "mg" }
    ],
    theory: "Gabapentin is typically titrated up to reduce side effects.",
    seoMeta: { title: "Gabapentin Dosage", description: "Calculate titration.", keywords: "Gabapentin" }
  },
  {
    id: "hydroxychloroquine-dose-calculator",
    name: "Hydroxychloroquine Dose Calculator",
    description: "Calculate hydroxychloroquine dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 5\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "max_daily", label: "Max Daily Dose", formula: "weight * 5", unit: "mg" }
    ],
    theory: "To reduce risk of retinal toxicity, keep dose <= 5 mg/kg real weight/day.",
    seoMeta: { title: "Hydroxychloroquine Dose", description: "Calculate dose.", keywords: "hydroxychloroquine" }
  },
  {
    id: "isotretinoin-dose-calculator",
    name: "Isotretinoin Dose Calculator",
    description: "Calculate cumulative isotretinoin dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Cumulative\\ Dose = Weight \\times 120-150\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "min_cum", label: "Min Cumulative Dose", formula: "weight * 120", unit: "mg" },
      { id: "max_cum", label: "Max Cumulative Dose", formula: "weight * 150", unit: "mg" }
    ],
    theory: "Typical target cumulative dose is 120-150 mg/kg to reduce relapse.",
    seoMeta: { title: "Isotretinoin Dose Calculator", description: "Cumulative dose.", keywords: "isotretinoin" }
  },
  {
    id: "ivig-dose-calculator",
    name: "IVIG Dose Calculator",
    description: "Calculate IVIG dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times Dose\\ Rate",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "rate", label: "Dose Rate (g/kg)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "total_dose", label: "Total Dose", formula: "weight * rate", unit: "g" }
    ],
    theory: "IVIG doses vary by indication (e.g., 2 g/kg for Kawasaki disease).",
    seoMeta: { title: "IVIG Dose Calculator", description: "Calculate IVIG dose.", keywords: "IVIG" }
  },
  {
    id: "levothyroxine-dosage-calculator",
    name: "Levothyroxine Dosage Calculator",
    description: "Calculate starting levothyroxine dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 1.6\\ mcg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "dose", label: "Estimated Daily Dose", formula: "weight * 1.6", unit: "mcg" }
    ],
    theory: "Full replacement dose is approximately 1.6 mcg/kg/day.",
    seoMeta: { title: "Levothyroxine Dosage", description: "Calculate dose.", keywords: "levothyroxine" }
  },
  {
    id: "lidocaine-dose-calculator",
    name: "Lidocaine Dose Calculator",
    description: "Calculate max lidocaine dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Max\\ Dose = Weight \\times Factor",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "epi", label: "With Epinephrine? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "max_dose", label: "Max Dose", formula: "epi == 1 ? weight * 7 : weight * 4.5", unit: "mg" }
    ],
    theory: "Max dose is 4.5 mg/kg without epi, and 7 mg/kg with epi.",
    seoMeta: { title: "Lidocaine Dose Calculator", description: "Max dose.", keywords: "lidocaine" }
  },
  {
    id: "local-anesthetic-calculator",
    name: "Local Anesthetic Calculator",
    description: "Calculate max dose for local anesthetics.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Max\\ Dose = Weight \\times Max\\ Rate",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "rate", label: "Max Rate (mg/kg)", type: "number", defaultValue: 4.5 }
    ],
    outputs: [
      { id: "max_dose", label: "Max Dose", formula: "weight * rate", unit: "mg" }
    ],
    theory: "Helps prevent local anesthetic systemic toxicity (LAST).",
    seoMeta: { title: "Local Anesthetic Calculator", description: "Max dose.", keywords: "local anesthetic" }
  },
  {
    id: "mcg-to-iu-converter",
    name: "mcg to IU Converter",
    description: "Convert mcg to IU for Vitamin D.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "IU = mcg \\times 40",
    inputs: [
      { id: "mcg", label: "Value in mcg", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "iu", label: "Value in IU", formula: "mcg * 40", unit: "IU" }
    ],
    theory: "For Vitamin D, 1 mcg = 40 IU.",
    seoMeta: { title: "mcg to IU Converter", description: "Convert Vitamin D units.", keywords: "mcg, IU" }
  },
  {
    id: "medicine-3-times-a-day-calculator",
    name: "Medicine 3 Times a Day Calculator",
    description: "Calculate schedule for taking medicine 3 times a day.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Interval = 8\\ hours",
    inputs: [
      { id: "start_time", label: "First Dose Time (hour 0-23)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "dose2", label: "Second Dose Time", formula: "(start_time + 8) % 24", unit: "hr" },
      { id: "dose3", label: "Third Dose Time", formula: "(start_time + 16) % 24", unit: "hr" }
    ],
    theory: "Taking medicine 3 times a day usually means every 8 hours.",
    seoMeta: { title: "Medicine 3 Times a Day", description: "Schedule doses.", keywords: "medicine schedule" }
  },
  {
    id: "melatonin-dosage-calculator",
    name: "Melatonin Dosage Calculator",
    description: "Calculate typical melatonin dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = 0.5 - 5\\ mg",
    inputs: [
      { id: "age", label: "Age Group (1:Adult, 2:Child)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "rec_dose", label: "Recommended Dose", formula: "age == 1 ? 3 : 0.5", unit: "mg" }
    ],
    theory: "Start with a low dose (0.5-1 mg) and increase as needed.",
    seoMeta: { title: "Melatonin Dosage", description: "Calculate dose.", keywords: "melatonin" }
  },
  {
    id: "mme-calculator",
    name: "MME Calculator",
    description: "Calculate Morphine Milligram Equivalents.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "MME = Dose \\times Factor",
    inputs: [
      { id: "oxycodone", label: "Oxycodone (mg)", type: "number", defaultValue: 10 },
      { id: "hydrocodone", label: "Hydrocodone (mg)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "mme", label: "Total MME", formula: "oxycodone * 1.5 + hydrocodone * 1", unit: "mg" }
    ],
    theory: "Helps assess overdose risk by standardizing opioid doses.",
    seoMeta: { title: "MME Calculator", description: "Calculate MME.", keywords: "MME, opioid" }
  },
  {
    id: "opioid-conversion-calculator",
    name: "Opioid Conversion Calculator",
    description: "Convert between different opioids using MME.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "MME = Dose \\times Factor",
    inputs: [
      { id: "morphine", label: "Morphine (mg)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "oxycodone_eq", label: "Oxycodone Equivalent", formula: "morphine / 1.5", unit: "mg" }
    ],
    theory: "Helps safely switch patients between different opioid medications.",
    seoMeta: { title: "Opioid Conversion Calculator", description: "Convert opioids.", keywords: "opioid conversion" }
  },
  {
    id: "peptide-calculator",
    name: "Peptide Calculator",
    description: "Calculate peptide reconstitution.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = \\frac{Total\\ Peptide}{Volume} \\times Syringe\\ Vol",
    inputs: [
      { id: "peptide_mg", label: "Total Peptide (mg)", type: "number", defaultValue: 5 },
      { id: "bac_water", label: "Bacteriostatic Water (ml)", type: "number", defaultValue: 2 },
      { id: "mcg_dose", label: "Desired Dose (mcg)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "ticks", label: "Syringe Ticks (100 unit syringe)", formula: "(mcg_dose / (peptide_mg * 1000)) * bac_water * 100", unit: "ticks" }
    ],
    theory: "Used to calculate how many units on a syringe equal a specific dose of peptide.",
    seoMeta: { title: "Peptide Calculator", description: "Calculate reconstitution.", keywords: "peptide" }
  },
  {
    id: "prescription-refill-calculator",
    name: "Prescription Refill Calculator",
    description: "Calculate when to refill a prescription.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Days\\ Supply = \\frac{Quantity}{Daily\\ Dose}",
    inputs: [
      { id: "qty", label: "Quantity Dispensed", type: "number", defaultValue: 30 },
      { id: "daily_dose", label: "Doses Per Day", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "days", label: "Days Supply", formula: "qty / daily_dose", unit: "days" }
    ],
    theory: "Helps patients and pharmacists know when the next refill is due.",
    seoMeta: { title: "Prescription Refill", description: "Calculate refill date.", keywords: "prescription refill" }
  },
  {
    id: "steroid-conversion-calculator",
    name: "Steroid Conversion Calculator",
    description: "Convert between different corticosteroids.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Equivalents",
    inputs: [
      { id: "prednisone", label: "Prednisone (mg)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "hydrocortisone_eq", label: "Hydrocortisone Equivalent", formula: "prednisone * 4", unit: "mg" },
      { id: "dexamethasone_eq", label: "Dexamethasone Equivalent", formula: "prednisone * 0.15", unit: "mg" }
    ],
    theory: "Steroids have different potencies. Prednisone 5mg = Hydrocortisone 20mg = Dexamethasone 0.75mg.",
    seoMeta: { title: "Steroid Conversion Calculator", description: "Convert steroids.", keywords: "steroid conversion" }
  },
  {
    id: "tpa-calculator",
    name: "tPA Calculator – Stroke Dosing",
    description: "Calculate tPA dose for acute ischemic stroke.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 0.9\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "total_dose", label: "Total Dose (Max 90mg)", formula: "weight * 0.9 > 90 ? 90 : weight * 0.9", unit: "mg" },
      { id: "bolus", label: "Bolus (10%)", formula: "(weight * 0.9 > 90 ? 90 : weight * 0.9) * 0.1", unit: "mg" },
      { id: "infusion", label: "Infusion (90%)", formula: "(weight * 0.9 > 90 ? 90 : weight * 0.9) * 0.9", unit: "mg" }
    ],
    theory: "Dose is 0.9 mg/kg (max 90 mg). 10% given as bolus over 1 min, rest over 60 min.",
    seoMeta: { title: "tPA Calculator", description: "Calculate tPA dose.", keywords: "tPA, stroke" }
  },
  {
    id: "tramadol-dosage-calculator",
    name: "Tramadol Dosage Calculator",
    description: "Calculate tramadol dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = 50-100\\ mg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "adult_dose", label: "Standard Adult Dose", formula: "50", unit: "mg" },
      { id: "max_daily", label: "Max Daily Dose", formula: "400", unit: "mg" }
    ],
    theory: "Typical dose is 50-100 mg every 4-6 hours. Max 400 mg/day.",
    seoMeta: { title: "Tramadol Dosage Calculator", description: "Calculate tramadol dose.", keywords: "tramadol" }
  },
  {
    id: "tylenol-dosage-calculator",
    name: "Tylenol Dosage Calculator",
    description: "Calculate Tylenol (Acetaminophen) dose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Dose = Weight \\times 15\\ mg/kg",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "age_cat", label: "Age Category (1:Adult, 2:Child)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "dose", label: "Recommended Dose", formula: "age_cat == 1 ? 650 : weight * 15", unit: "mg" },
      { id: "max_daily", label: "Max Daily Dose", formula: "age_cat == 1 ? 4000 : weight * 75", unit: "mg" }
    ],
    theory: "Adults: 325-1000 mg every 4-6 hours. Children: 10-15 mg/kg every 4-6 hours.",
    seoMeta: { title: "Tylenol Dosage Calculator", description: "Calculate Tylenol dose.", keywords: "Tylenol" }
  },
  {
    id: "tylenol-overdose-calculator",
    name: "Tylenol Overdose Calculator",
    description: "Assess risk of Tylenol overdose.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "Rumack-Matthew Nomogram",
    inputs: [
      { id: "hours", label: "Hours since ingestion", type: "number", defaultValue: 4 },
      { id: "level", label: "Acetaminophen level (µg/mL)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "risk", label: "Toxicity Risk (1:High, 0:Low)", formula: "hours == 4 && level >= 150 ? 1 : 0", unit: "" }
    ],
    theory: "The Rumack-Matthew nomogram is used to assess the risk of hepatotoxicity.",
    seoMeta: { title: "Tylenol Overdose", description: "Assess overdose risk.", keywords: "Tylenol overdose" }
  },
  {
    id: "warfarin-dosing-calculator",
    name: "Warfarin Dosing Calculator",
    description: "Calculate Warfarin dose adjustments.",
    category: "health",
    subcategory: "dosage",
    scientificFormula: "INR-based adjustment",
    inputs: [
      { id: "current_inr", label: "Current INR", type: "number", defaultValue: 2.5 },
      { id: "target_inr", label: "Target INR", type: "number", defaultValue: 2.5 }
    ],
    outputs: [
      { id: "adj", label: "Dose Adjustment (1:Increase, 2:Decrease, 3:No change)", formula: "current_inr < 2 ? 1 : (current_inr > 3 ? 2 : 3)", unit: "" }
    ],
    theory: "Helps maintain INR within the therapeutic range (usually 2.0-3.0).",
    seoMeta: { title: "Warfarin Dosing", description: "Calculate dose adjustment.", keywords: "warfarin" }
  },
  {
    id: "aa-gradient-calculator",
    name: "Aa Gradient Calculator",
    description: "Calculate Alveolar-arterial gradient.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "A-a\\ Gradient = PAO2 - PaO2",
    inputs: [
      { id: "fio2", label: "FiO2 (%)", type: "number", defaultValue: 21 },
      { id: "paco2", label: "PaCO2 (mmHg)", type: "number", defaultValue: 40 },
      { id: "pao2", label: "PaO2 (mmHg)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "pao2_alv", label: "Alveolar O2 (PAO2)", formula: "(fio2 / 100) * (760 - 47) - (paco2 / 0.8)", unit: "mmHg" },
      { id: "grad", label: "A-a Gradient", formula: "((fio2 / 100) * (760 - 47) - (paco2 / 0.8)) - pao2", unit: "mmHg" }
    ],
    theory: "Helps distinguish between causes of hypoxemia.",
    seoMeta: { title: "Aa Gradient Calculator", description: "Calculate A-a gradient.", keywords: "Aa gradient" }
  },
  {
    id: "bode-index-calculator",
    name: "BODE Index Calculator",
    description: "Calculate BODE Index for COPD survival.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Score based on BMI, FEV1, Dyspnea, Walk distance",
    inputs: [
      { id: "bmi", label: "BMI", type: "number", defaultValue: 22 },
      { id: "fev1", label: "FEV1 (%)", type: "number", defaultValue: 50 },
      { id: "mrc", label: "mMRC Dyspnea Scale (0-4)", type: "number", defaultValue: 2 },
      { id: "sixmwd", label: "6-Minute Walk Distance (m)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "score", label: "BODE Index Score", formula: "(bmi <= 21 ? 1 : 0) + (fev1 >= 65 ? 0 : (fev1 >= 50 ? 1 : (fev1 >= 36 ? 2 : 3))) + (mrc >= 2 ? (mrc >= 3 ? (mrc == 4 ? 3 : 2) : 1) : 0) + (sixmwd >= 350 ? 0 : (sixmwd >= 250 ? 1 : (sixmwd >= 150 ? 2 : 3)))", unit: "points" }
    ],
    theory: "Higher scores indicate higher risk of mortality in COPD patients.",
    seoMeta: { title: "BODE Index Calculator", description: "Calculate BODE score.", keywords: "BODE index" }
  },
  {
    id: "curb-65-calculator",
    name: "CURB-65 Calculator",
    description: "Calculate CURB-65 score for pneumonia severity.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Score = C + U + R + B + 65",
    inputs: [
      { id: "confusion", label: "Confusion? (1:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "bun", label: "BUN > 19 mg/dL? (1:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "rr", label: "RR >= 30? (1:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "bp", label: "BP < 90/60? (1:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "age", label: "Age >= 65? (1:Yes, 0:No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "score", label: "CURB-65 Score", formula: "confusion + bun + rr + bp + age", unit: "points" }
    ],
    theory: "Score helps decide whether to treat as outpatient, inpatient, or ICU.",
    seoMeta: { title: "CURB-65 Calculator", description: "Calculate CURB-65 score.", keywords: "CURB-65" }
  },
  {
    id: "dead-space-calculator",
    name: "Dead Space Calculator",
    description: "Calculate physiological dead space.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "V_d / V_t = \\frac{PaCO2 - PeCO2}{PaCO2}",
    inputs: [
      { id: "paco2", label: "PaCO2 (mmHg)", type: "number", defaultValue: 40 },
      { id: "peco2", label: "Mixed Expired CO2 (mmHg)", type: "number", defaultValue: 30 },
      { id: "vt", label: "Tidal Volume (ml)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "vd", label: "Dead Space Volume", formula: "vt * (paco2 - peco2) / paco2", unit: "ml" }
    ],
    theory: "Uses the Bohr equation to estimate the portion of breath not participating in gas exchange.",
    seoMeta: { title: "Dead Space Calculator", description: "Calculate dead space.", keywords: "dead space" }
  },
  {
    id: "ett-size-calculator",
    name: "Endotracheal Tube Size Calculator",
    description: "Calculate pediatric ETT size.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Uncuffed = \\frac{Age}{4} + 4",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "uncuffed", label: "Uncuffed ETT Size", formula: "age / 4 + 4", unit: "mm" },
      { id: "cuffed", label: "Cuffed ETT Size", formula: "age / 4 + 3.5", unit: "mm" }
    ],
    theory: "Cole's formula is standard for pediatric ETT size estimation.",
    seoMeta: { title: "ETT Size Calculator", description: "Calculate tube size.", keywords: "ETT size" }
  },
  {
    id: "fev1-fvc-ratio-calculator",
    name: "FEV1/FVC Ratio Calculator",
    description: "Calculate FEV1/FVC ratio.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Ratio = \\frac{FEV1}{FVC}",
    inputs: [
      { id: "fev1", label: "FEV1 (L)", type: "number", defaultValue: 3 },
      { id: "fvc", label: "FVC (L)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "ratio", label: "FEV1/FVC Ratio", formula: "fev1 / fvc", unit: "" },
      { id: "pct", label: "Ratio (%)", formula: "(fev1 / fvc) * 100", unit: "%" }
    ],
    theory: "Used to distinguish obstructive from restrictive lung disease.",
    seoMeta: { title: "FEV1/FVC Ratio", description: "Calculate ratio.", keywords: "FEV1, FVC" }
  },
  {
    id: "lights-criteria-calculator",
    name: "Light's Criteria Calculator for Pleural Effusion",
    description: "Differentiate exudate from transudate.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Exudate if any criteria met",
    inputs: [
      { id: "p_prot", label: "Pleural Fluid Protein (g/dL)", type: "number", defaultValue: 3.5 },
      { id: "s_prot", label: "Serum Protein (g/dL)", type: "number", defaultValue: 7 },
      { id: "p_ldh", label: "Pleural Fluid LDH (U/L)", type: "number", defaultValue: 250 },
      { id: "s_ldh", label: "Serum LDH (U/L)", type: "number", defaultValue: 300 }
    ],
    outputs: [
      { id: "exudate", label: "Is Exudate? (1:Yes, 0:No)", formula: "(p_prot / s_prot > 0.5) || (p_ldh / s_ldh > 0.6) || (p_ldh > 200) ? 1 : 0", unit: "" }
    ],
    theory: "Light's criteria are highly sensitive for identifying exudates.",
    seoMeta: { title: "Light's Criteria", description: "Differentiate effusion.", keywords: "Light's criteria" }
  },
  {
    id: "lung-cancer-risk-calculator",
    name: "Lung Cancer Risk Calculator",
    description: "Estimate lung cancer risk in smokers.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Simple Risk Score",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 60 },
      { id: "pack_years", label: "Pack Years", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "risk", label: "Estimated Risk Score", formula: "age * 0.1 + pack_years * 0.2", unit: "points" }
    ],
    theory: "Age and cumulative smoking exposure are the primary risk factors.",
    seoMeta: { title: "Lung Cancer Risk", description: "Estimate risk.", keywords: "lung cancer risk" }
  },
  {
    id: "lung-nodule-growth-rate-calculator",
    name: "Lung Nodule Growth Rate Calculator",
    description: "Calculate volume doubling time of a nodule.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "VDT = \\frac{\\ln(2) \\times t}{\\ln(V_2 / V_1)}",
    inputs: [
      { id: "v1", label: "Initial Volume (mm³)", type: "number", defaultValue: 100 },
      { id: "v2", label: "Follow-up Volume (mm³)", type: "number", defaultValue: 200 },
      { id: "days", label: "Time Interval (days)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "vdt", label: "Volume Doubling Time", formula: "(0.693 * days) / Math.log(v2 / v1)", unit: "days" }
    ],
    theory: "Malignant nodules typically double in volume between 20 and 400 days.",
    seoMeta: { title: "Lung Nodule Growth", description: "Calculate doubling time.", keywords: "lung nodule" }
  },
  {
    id: "mean-airway-pressure-calculator",
    name: "Mean Airway Pressure Calculator",
    description: "Calculate mean airway pressure.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "MAP = K \\times (PIP - PEEP) \\times \\frac{Ti}{Ti + Te} + PEEP",
    inputs: [
      { id: "pip", label: "Peak Inspiratory Pressure (cmH2O)", type: "number", defaultValue: 20 },
      { id: "peep", label: "PEEP (cmH2O)", type: "number", defaultValue: 5 },
      { id: "ti", label: "Inspiratory Time (s)", type: "number", defaultValue: 1 },
      { id: "te", label: "Expiratory Time (s)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "map", label: "Mean Airway Pressure", formula: "((pip - peep) * ti / (ti + te)) + peep", unit: "cmH2O" }
    ],
    theory: "MAP is important for oxygenation during mechanical ventilation.",
    seoMeta: { title: "Mean Airway Pressure", description: "Calculate MAP.", keywords: "MAP, ventilation" }
  },
  {
    id: "oxygenation-index-calculator",
    name: "Oxygenation Index Calculator",
    description: "Calculate Oxygenation Index.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "OI = \\frac{FiO2 \\times MAP}{PaO2}",
    inputs: [
      { id: "fio2", label: "FiO2 (%)", type: "number", defaultValue: 50 },
      { id: "map", label: "Mean Airway Pressure (cmH2O)", type: "number", defaultValue: 15 },
      { id: "pao2", label: "PaO2 (mmHg)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "oi", label: "Oxygenation Index", formula: "(fio2 * map) / pao2", unit: "" }
    ],
    theory: "Used in neonates and children to assess the severity of respiratory failure.",
    seoMeta: { title: "Oxygenation Index", description: "Calculate OI.", keywords: "oxygenation index" }
  },
  {
    id: "peak-flow-calculator",
    name: "Peak Flow Calculator",
    description: "Calculate estimated peak expiratory flow.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Estimated based on height and age",
    inputs: [
      { id: "height", label: "Height (cm)", type: "number", defaultValue: 175 },
      { id: "age", label: "Age (years)", type: "number", defaultValue: 30 },
      { id: "sex", label: "Sex (1 for male, 2 for female)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "pef", label: "Estimated PEF", formula: "sex == 1 ? (height - 100) * 5 - age : (height - 100) * 4 - age", unit: "L/min" }
    ],
    theory: "Provides a rough estimate of expected peak flow for asthma monitoring.",
    seoMeta: { title: "Peak Flow Calculator", description: "Calculate PEF.", keywords: "peak flow" }
  },
  {
    id: "psi-calculator",
    name: "PSI Calculator",
    description: "Calculate Pneumonia Severity Index.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Score based on demographics, comorbidities, and vitals",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 65 },
      { id: "sex", label: "Sex (1 for male, 0.5 for female)", type: "number", defaultValue: 1 },
      { id: "cancer", label: "History of Cancer? (1 for Yes, 0 for No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "PSI Score", formula: "age + (sex == 0.5 ? -10 : 0) + (cancer == 1 ? 30 : 0)", unit: "points" }
    ],
    theory: "Helps predict mortality in patients with community-acquired pneumonia.",
    seoMeta: { title: "PSI Calculator", description: "Calculate PSI score.", keywords: "PSI, pneumonia" }
  },
  {
    id: "qp-qs-calculator",
    name: "Qp/Qs Calculator",
    description: "Calculate pulmonary-to-systemic flow ratio.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "Qp / Qs = \\frac{SaO2 - MvO2}{PvO2 - PaO2}",
    inputs: [
      { id: "sao2", label: "Arterial O2 Saturation (%)", type: "number", defaultValue: 95 },
      { id: "mvo2", label: "Mixed Venous O2 Saturation (%)", type: "number", defaultValue: 75 },
      { id: "pvo2", label: "Pulmonary Venous Saturation (%)", type: "number", defaultValue: 98 },
      { id: "pao2_sat", label: "Pulmonary Arterial Saturation (%)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "ratio", label: "Qp/Qs Ratio", formula: "(sao2 - mvo2) / (pvo2 - pao2_sat)", unit: "" }
    ],
    theory: "Used to quantify left-to-right shunts in congenital heart disease.",
    seoMeta: { title: "Qp/Qs Calculator", description: "Calculate flow ratio.", keywords: "Qp/Qs" }
  },
  {
    id: "rsbi-calculator",
    name: "RSBI Calculator",
    description: "Calculate Rapid Shallow Breathing Index.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "RSBI = \\frac{RR}{V_T}",
    inputs: [
      { id: "rr", label: "Respiratory Rate (breaths/min)", type: "number", defaultValue: 25 },
      { id: "vt", label: "Tidal Volume (L)", type: "number", defaultValue: 0.4 }
    ],
    outputs: [
      { id: "rsbi", label: "RSBI", formula: "rr / vt", unit: "breaths/min/L" }
    ],
    theory: "An RSBI < 105 is a good predictor of successful weaning from mechanical ventilation.",
    seoMeta: { title: "RSBI Calculator", description: "Calculate RSBI.", keywords: "RSBI, weaning" }
  },
  {
    id: "tidal-volume-calculator",
    name: "Tidal Volume Calculator",
    description: "Calculate recommended tidal volume.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "V_T = 6-8\\ ml/kg\\ IBW",
    inputs: [
      { id: "ibw", label: "Ideal Body Weight (kg)", type: "number", defaultValue: 70 }
    ],
    outputs: [
      { id: "vt_min", label: "Min Tidal Volume (6 ml/kg)", formula: "ibw * 6", unit: "ml" },
      { id: "vt_max", label: "Max Tidal Volume (8 ml/kg)", formula: "ibw * 8", unit: "ml" }
    ],
    theory: "Lung-protective ventilation uses 6-8 ml/kg of predicted body weight.",
    seoMeta: { title: "Tidal Volume Calculator", description: "Calculate tidal volume.", keywords: "tidal volume" }
  },
  {
    id: "vital-capacity-calculator",
    name: "Vital Capacity Calculator",
    description: "Calculate estimated vital capacity.",
    category: "health",
    subcategory: "pulmonary",
    scientificFormula: "VC = IRV + TV + ERV",
    inputs: [
      { id: "irv", label: "Inspiratory Reserve Volume (ml)", type: "number", defaultValue: 3000 },
      { id: "tv", label: "Tidal Volume (ml)", type: "number", defaultValue: 500 },
      { id: "erv", label: "Expiratory Reserve Volume (ml)", type: "number", defaultValue: 1100 }
    ],
    outputs: [
      { id: "vc", label: "Vital Capacity", formula: "irv + tv + erv", unit: "ml" }
    ],
    theory: "Maximum amount of air a person can expel from the lungs after a maximum inhalation.",
    seoMeta: { title: "Vital Capacity Calculator", description: "Calculate vital capacity.", keywords: "vital capacity" }
  },
  {
    id: "epds-calculator",
    name: "EPDS Calculator",
    description: "Edinburgh Postnatal Depression Scale.",
    category: "health",
    subcategory: "psychology",
    scientificFormula: "Sum of 10 items (0-3 each)",
    inputs: [
      { id: "q1", label: "Able to laugh (0-3)", type: "number", defaultValue: 0 },
      { id: "q2", label: "Looked forward with enjoyment (0-3)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "EPDS Score", formula: "q1 + q2", unit: "points" }
    ],
    theory: "Used to screen for postnatal depression. Score >= 10 suggests depression.",
    seoMeta: { title: "EPDS Calculator", description: "Postnatal depression scale.", keywords: "EPDS" }
  },
  {
    id: "happiness-calculator",
    name: "Happiness Calculator",
    description: "Measure your current happiness level.",
    category: "health",
    subcategory: "psychology",
    scientificFormula: "Subjective Score",
    inputs: [
      { id: "sat", label: "Life Satisfaction (1-10)", type: "number", defaultValue: 7 },
      { id: "mood", label: "Current Mood (1-10)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "score", label: "Happiness Score", formula: "(sat + mood) / 2", unit: "/10" }
    ],
    theory: "A simple self-assessment of subjective well-being.",
    seoMeta: { title: "Happiness Calculator", description: "Measure happiness.", keywords: "happiness" }
  },
  {
    id: "snap-iv-calculator",
    name: "SNAP-IV Calculator",
    description: "SNAP-IV Rating Scale for ADHD.",
    category: "health",
    subcategory: "psychology",
    scientificFormula: "Average score of items",
    inputs: [
      { id: "inatt", label: "Inattention Score (0-3)", type: "number", defaultValue: 1 },
      { id: "hyper", label: "Hyperactivity Score (0-3)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "avg_inatt", label: "Avg Inattention", formula: "inatt", unit: "" },
      { id: "avg_hyper", label: "Avg Hyperactivity", formula: "hyper", unit: "" }
    ],
    theory: "Used to assess ADHD symptoms in children.",
    seoMeta: { title: "SNAP-IV Calculator", description: "ADHD rating scale.", keywords: "SNAP-IV, ADHD" }
  },
  {
    id: "alvarado-score-calculator",
    name: "Alvarado Score Calculator",
    description: "Calculate Alvarado score for appendicitis.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on symptoms, signs, and labs",
    inputs: [
      { id: "rlq", label: "RLQ Tenderness? (2:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "leuk", label: "Leukocytosis (>10k)? (2:Yes, 0:No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "Alvarado Score", formula: "rlq + leuk", unit: "points" }
    ],
    theory: "Score >= 7 is highly predictive of appendicitis.",
    seoMeta: { title: "Alvarado Score", description: "Score for appendicitis.", keywords: "Alvarado score" }
  },
  {
    id: "apache-ii-calculator",
    name: "APACHE II Calculator",
    description: "Calculate APACHE II score for ICU mortality.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on physiology, age, and chronic health",
    inputs: [
      { id: "age", label: "Age Score (0-6)", type: "number", defaultValue: 0 },
      { id: "aps", label: "Acute Physiology Score (0-60)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "score", label: "APACHE II Score", formula: "age + aps", unit: "points" }
    ],
    theory: "Higher scores correlate with higher in-hospital mortality.",
    seoMeta: { title: "APACHE II Calculator", description: "Calculate APACHE II.", keywords: "APACHE II" }
  },
  {
    id: "iss-calculator",
    name: "Injury Severity Score Calculator",
    description: "Calculate Injury Severity Score (ISS).",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "ISS = AIS_1^2 + AIS_2^2 + AIS_3^2",
    inputs: [
      { id: "ais1", label: "Highest AIS Score 1", type: "number", defaultValue: 3 },
      { id: "ais2", label: "Highest AIS Score 2", type: "number", defaultValue: 2 },
      { id: "ais3", label: "Highest AIS Score 3", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "iss", label: "ISS Score", formula: "ais1*ais1 + ais2*ais2 + ais3*ais3", unit: "points" }
    ],
    theory: "Scores range from 0 to 75. If any AIS is 6, ISS is automatically 75.",
    seoMeta: { title: "ISS Calculator", description: "Calculate ISS.", keywords: "ISS, injury" }
  },
  {
    id: "ich-score-calculator",
    name: "ICH Score Calculator",
    description: "Calculate ICH score for intracerebral hemorrhage.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on GCS, volume, IVH, infratentorial, age",
    inputs: [
      { id: "gcs", label: "GCS (3-15)", type: "number", defaultValue: 15 },
      { id: "vol", label: "ICH Volume >= 30 cm³? (1:Yes, 0:No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "ICH Score", formula: "(gcs <= 4 ? 2 : (gcs <= 12 ? 1 : 0)) + vol", unit: "points" }
    ],
    theory: "Predicts 30-day mortality after intracerebral hemorrhage.",
    seoMeta: { title: "ICH Score Calculator", description: "Calculate ICH score.", keywords: "ICH score" }
  },
  {
    id: "lrinec-score-calculator",
    name: "LRINEC Score Calculator",
    description: "Score for necrotizing fasciitis.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on CRP, WBC, Hb, Na, Cr, Glu",
    inputs: [
      { id: "crp", label: "CRP >= 150 mg/L? (4:Yes, 0:No)", type: "number", defaultValue: 0 },
      { id: "wbc", label: "WBC > 15k? (1 for >15k, 2 for >25k, 0 for normal)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "LRINEC Score", formula: "crp + wbc", unit: "points" }
    ],
    theory: "Score >= 6 raises suspicion of necrotizing fasciitis.",
    seoMeta: { title: "LRINEC Score", description: "Score for necrotizing fasciitis.", keywords: "LRINEC" }
  },
  {
    id: "mews-score-calculator",
    name: "MEWS Score Calculator",
    description: "Modified Early Warning Score.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on vitals",
    inputs: [
      { id: "sbp", label: "SBP Score (0-3)", type: "number", defaultValue: 0 },
      { id: "hr", label: "HR Score (0-3)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "MEWS Score", formula: "sbp + hr", unit: "points" }
    ],
    theory: "Used to identify patients at risk of catastrophic deterioration.",
    seoMeta: { title: "MEWS Score Calculator", description: "Calculate MEWS.", keywords: "MEWS" }
  },
  {
    id: "nedocs-calculator",
    name: "NEDOCS Calculator",
    description: "Emergency department overcrowding score.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on beds, patients, wait time",
    inputs: [
      { id: "beds", label: "Total ED Beds", type: "number", defaultValue: 20 },
      { id: "pats", label: "Total Patients in ED", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "score", label: "NEDOCS Score", formula: "(pats / beds) * 100", unit: "points" }
    ],
    theory: "Scores > 100 indicate severe overcrowding.",
    seoMeta: { title: "NEDOCS Calculator", description: "ED overcrowding score.", keywords: "NEDOCS" }
  },
  {
    id: "nihss-calculator",
    name: "NIH Stroke Scale Calculator",
    description: "Calculate NIH Stroke Scale score.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Sum of 11 items",
    inputs: [
      { id: "loc", label: "Level of Consciousness (0-3)", type: "number", defaultValue: 0 },
      { id: "motor", label: "Motor Arm (0-4)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "NIHSS Score", formula: "loc + motor", unit: "points" }
    ],
    theory: "Higher scores indicate more severe neurological deficit.",
    seoMeta: { title: "NIH Stroke Scale", description: "Calculate NIHSS.", keywords: "NIHSS, stroke" }
  },
  {
    id: "rts-calculator",
    name: "Revised Trauma Score Calculator",
    description: "Calculate Revised Trauma Score (RTS).",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "RTS = 0.9368\\ GCS_c + 0.7326\\ SBP_c + 0.2908\\ RR_c",
    inputs: [
      { id: "gcs", label: "GCS Score (0-4)", type: "number", defaultValue: 4 },
      { id: "sbp", label: "SBP Score (0-4)", type: "number", defaultValue: 4 },
      { id: "rr", label: "RR Score (0-4)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "rts", label: "RTS Score", formula: "0.9368 * gcs + 0.7326 * sbp + 0.2908 * rr", unit: "points" }
    ],
    theory: "Used as a triage score in pre-hospital setting.",
    seoMeta: { title: "Revised Trauma Score", description: "Calculate RTS.", keywords: "RTS, trauma" }
  },
  {
    id: "saps-ii-calculator",
    name: "SAPS II Calculator",
    description: "Simplified Acute Physiology Score II.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on 17 variables",
    inputs: [
      { id: "age", label: "Age Score (0-18)", type: "number", defaultValue: 7 },
      { id: "vitals", label: "Vitals Score", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "score", label: "SAPS II Score", formula: "age + vitals", unit: "points" }
    ],
    theory: "Predicts hospital mortality for patients admitted to the ICU.",
    seoMeta: { title: "SAPS II Calculator", description: "Calculate SAPS II.", keywords: "SAPS II" }
  },
  {
    id: "scorad-calculator",
    name: "SCORAD Calculator",
    description: "SCORing Atopic Dermatitis.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "SCORAD = A/5 + 7B/2 + C",
    inputs: [
      { id: "extent", label: "Extent (A) (0-100)", type: "number", defaultValue: 20 },
      { id: "intensity", label: "Intensity (B) (0-18)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "score", label: "SCORAD Score", formula: "extent / 5 + 3.5 * intensity", unit: "points" }
    ],
    theory: "Combines extent, intensity, and subjective symptoms to assess severity.",
    seoMeta: { title: "SCORAD Calculator", description: "Score atopic dermatitis.", keywords: "SCORAD" }
  },
  {
    id: "sepsis-calculator",
    name: "Sepsis Calculator (Sepsis-3)",
    description: "Assess sepsis risk using Sepsis-3 criteria.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "qSOFA >= 2 or SOFA increase >= 2",
    inputs: [
      { id: "qsofa", label: "qSOFA Score (0-3)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "risk", label: "High Risk? (1:Yes, 0:No)", formula: "qsofa >= 2 ? 1 : 0", unit: "" }
    ],
    theory: "Sepsis is defined as life-threatening organ dysfunction caused by a dysregulated host response to infection.",
    seoMeta: { title: "Sepsis Calculator", description: "Sepsis-3 criteria.", keywords: "sepsis" }
  },
  {
    id: "shock-index-calculator",
    name: "Shock Index Calculator",
    description: "Calculate Shock Index.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "SI = \\frac{HR}{SBP}",
    inputs: [
      { id: "hr", label: "Heart Rate (bpm)", type: "number", defaultValue: 100 },
      { id: "sbp", label: "Systolic BP (mmHg)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "si", label: "Shock Index", formula: "hr / sbp", unit: "" }
    ],
    theory: "Normal range is 0.5-0.7. Values > 0.9 indicate increased risk of shock.",
    seoMeta: { title: "Shock Index Calculator", description: "Calculate shock index.", keywords: "shock index" }
  },
  {
    id: "sofa-score-calculator",
    name: "SOFA Score Calculator",
    description: "Sequential Organ Failure Assessment.",
    category: "health",
    subcategory: "emergency-care",
    scientificFormula: "Score based on 6 organ systems",
    inputs: [
      { id: "resp", label: "Respiratory Score (0-4)", type: "number", defaultValue: 0 },
      { id: "cv", label: "Cardiovascular Score (0-4)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "SOFA Score", formula: "resp + cv", unit: "points" }
    ],
    theory: "Used to track a patient's status during the stay in an ICU.",
    seoMeta: { title: "SOFA Score Calculator", description: "Calculate SOFA score.", keywords: "SOFA" }
  },
  {
    id: "apri-calculator",
    name: "APRI Calculator",
    description: "AST to Platelet Ratio Index.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "APRI = \\frac{AST / AST\\ ULN}{Platelets} \\times 100",
    inputs: [
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "uln", label: "AST Upper Limit of Normal", type: "number", defaultValue: 40 },
      { id: "plt", label: "Platelets (10^9/L)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "apri", label: "APRI Score", formula: "(ast / uln) / plt * 100", unit: "" }
    ],
    theory: "Used to estimate liver fibrosis in patients with Hepatitis C.",
    seoMeta: { title: "APRI Calculator", description: "AST to Platelet Ratio Index.", keywords: "APRI" }
  },
  {
    id: "ast-alt-ratio-calculator",
    name: "AST/ALT Ratio Calculator",
    description: "Calculate AST to ALT ratio.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "Ratio = \\frac{AST}{ALT}",
    inputs: [
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "alt", label: "ALT (U/L)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "ratio", label: "AST/ALT Ratio", formula: "ast / alt", unit: "" }
    ],
    theory: "A ratio > 2 suggests alcoholic liver disease.",
    seoMeta: { title: "AST/ALT Ratio", description: "Calculate ratio.", keywords: "AST, ALT" }
  },
  {
    id: "child-pugh-calculator",
    name: "Child Pugh Calculator",
    description: "Assess prognosis of chronic liver disease.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "Score based on Bilirubin, Albumin, INR, Ascites, Encephalopathy",
    inputs: [
      { id: "bili", label: "Bilirubin Score (1-3)", type: "number", defaultValue: 1 },
      { id: "alb", label: "Albumin Score (1-3)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "score", label: "Child-Pugh Score", formula: "bili + alb", unit: "points" }
    ],
    theory: "Classifies severity of cirrhosis (Class A, B, or C).",
    seoMeta: { title: "Child Pugh Calculator", description: "Assess liver disease.", keywords: "Child Pugh" }
  },
  {
    id: "cdai-calculator",
    name: "CDAI Calculator",
    description: "Crohn's Disease Activity Index.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "Weighted sum of 8 items",
    inputs: [
      { id: "stools", label: "Number of liquid stools (sum of 7 days)", type: "number", defaultValue: 10 },
      { id: "pain", label: "Abdominal pain (sum of 7 days, 0-21)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "score", label: "CDAI Score", formula: "stools * 2 + pain * 5", unit: "points" }
    ],
    theory: "Used to quantify the symptoms of patients with Crohn's disease.",
    seoMeta: { title: "CDAI Calculator", description: "Crohn's disease index.", keywords: "CDAI" }
  },
  {
    id: "maddreys-df-calculator",
    name: "Maddrey's Discriminant Function Calculator",
    description: "Assess severity of alcoholic hepatitis.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "DF = 4.6 \\times (PT - PT\\ control) + Bilirubin",
    inputs: [
      { id: "pt", label: "Prothrombin Time (s)", type: "number", defaultValue: 15 },
      { id: "pt_ctrl", label: "Control PT (s)", type: "number", defaultValue: 12 },
      { id: "bili", label: "Total Bilirubin (mg/dL)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "df", label: "Discriminant Function", formula: "4.6 * (pt - pt_ctrl) + bili", unit: "" }
    ],
    theory: "Scores >= 32 indicate severe alcoholic hepatitis and benefit from steroids.",
    seoMeta: { title: "Maddrey's DF", description: "Assess alcoholic hepatitis.", keywords: "Maddrey" }
  },
  {
    id: "fib-4-calculator",
    name: "FIB-4 Calculator",
    description: "Non-invasive index for liver fibrosis.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "FIB-4 = \\frac{Age \\times AST}{Platelets \\times \\sqrt{ALT}}",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 50 },
      { id: "ast", label: "AST (U/L)", type: "number", defaultValue: 40 },
      { id: "plt", label: "Platelets (10^9/L)", type: "number", defaultValue: 200 },
      { id: "alt", label: "ALT (U/L)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "fib4", label: "FIB-4 Score", formula: "(age * ast) / (plt * Math.sqrt(alt))", unit: "" }
    ],
    theory: "Used to rule out advanced fibrosis in NAFLD and Hepatitis C.",
    seoMeta: { title: "FIB-4 Calculator", description: "Liver fibrosis index.", keywords: "FIB-4" }
  },
  {
    id: "lille-score-calculator",
    name: "Lille Score Calculator",
    description: "Predict mortality in alcoholic hepatitis.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "Score based on age, renal function, bilirubin, PT",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 50 },
      { id: "bili", label: "Bilirubin (mg/dL)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "score", label: "Lille Score", formula: "0.1 * age + 0.5 * bili", unit: "" }
    ],
    theory: "Calculated after 7 days of steroids to predict response and mortality.",
    seoMeta: { title: "Lille Score Calculator", description: "Predict mortality.", keywords: "Lille score" }
  },
  {
    id: "meld-calculator",
    name: "MELD Calculator",
    description: "Model for End-Stage Liver Disease.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "MELD = 3.78 \\ln(Bili) + 11.2 \\ln(INR) + 9.57 \\ln(Cr) + 6.43",
    inputs: [
      { id: "bili", label: "Bilirubin (mg/dL)", type: "number", defaultValue: 2 },
      { id: "inr", label: "INR", type: "number", defaultValue: 1.5 },
      { id: "cr", label: "Creatinine (mg/dL)", type: "number", defaultValue: 1.2 }
    ],
    outputs: [
      { id: "meld", label: "MELD Score", formula: "3.78 * Math.log(bili) + 11.2 * Math.log(inr) + 9.57 * Math.log(cr) + 6.43", unit: "" }
    ],
    theory: "Used to prioritize patients for liver transplantation.",
    seoMeta: { title: "MELD Calculator", description: "Model for End-Stage Liver Disease.", keywords: "MELD" }
  },
  {
    id: "nafld-fibrosis-score-calculator",
    name: "NAFLD Fibrosis Score Calculator",
    description: "Predict liver fibrosis in NAFLD.",
    category: "health",
    subcategory: "digestive",
    scientificFormula: "Score based on 6 variables",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 50 },
      { id: "bmi", label: "BMI", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "score", label: "NAFLD Fibrosis Score", formula: "-1.675 + 0.037 * age + 0.094 * bmi", unit: "" }
    ],
    theory: "Helps identify NAFLD patients with higher likelihood of advanced fibrosis.",
    seoMeta: { title: "NAFLD Fibrosis Score", description: "Predict fibrosis.", keywords: "NAFLD" }
  },
  {
    id: "covid-19-mortality-risk-calculator",
    name: "COVID-19 Mortality Risk Calculator",
    description: "Estimate COVID-19 mortality risk based on age and conditions.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Risk Index",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 65 },
      { id: "conditions", label: "Number of Comorbidities", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "risk", label: "Risk Score", formula: "age / 10 + conditions * 2", unit: "points" }
    ],
    theory: "Higher age and comorbidities increase mortality risk significantly.",
    seoMeta: { title: "COVID-19 Mortality Risk", description: "Estimate risk.", keywords: "COVID-19, mortality" }
  },
  {
    id: "event-risk-calculator-coronavirus",
    name: "Event Risk Calculator - Coronavirus",
    description: "Calculate the probability that at least one attendee has COVID.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Risk = 1 - (1 - p)^n",
    inputs: [
      { id: "prev", label: "Local Prevalence (%)", type: "number", defaultValue: 1 },
      { id: "attendees", label: "Number of Attendees", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "risk", label: "Probability of >=1 Case (%)", formula: "(1 - Math.pow(1 - (prev/100), attendees)) * 100", unit: "%" }
    ],
    theory: "Based on the binomial distribution of independent events.",
    seoMeta: { title: "Event Risk Calculator", description: "Calculate event risk.", keywords: "COVID, event risk" }
  },
  {
    id: "denver-hiv-risk-score-calculator",
    name: "Denver HIV Risk Score Calculator",
    description: "Assess risk for HIV infection.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Score based on behavioral risk factors",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 25 },
      { id: "partner", label: "High Risk Partner? (1:Yes, 0:No)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "score", label: "Risk Score", formula: "(age < 30 ? 10 : 0) + partner * 20", unit: "points" }
    ],
    theory: "Identifies patients who would benefit most from targeted HIV testing.",
    seoMeta: { title: "Denver HIV Risk Score", description: "Assess HIV risk.", keywords: "HIV, Denver" }
  },
  {
    id: "hand-sanitizer-calculator",
    name: "Hand Sanitizer Calculator",
    description: "Estimate hand sanitizer volume needed.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Volume = People * Uses/Day * Volume/Use * Days",
    inputs: [
      { id: "people", label: "Number of People", type: "number", defaultValue: 4 },
      { id: "uses", label: "Uses per person per day", type: "number", defaultValue: 5 },
      { id: "days", label: "Days to supply", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "volume", label: "Total Volume Needed", formula: "people * uses * 3 * days", unit: "mL" }
    ],
    theory: "Assumes approximately 3mL of hand sanitizer per use.",
    seoMeta: { title: "Hand Sanitizer Calculator", description: "Calculate sanitizer needed.", keywords: "hand sanitizer" }
  },
  {
    id: "incidence-rate-calculator",
    name: "Incidence Rate Calculator",
    description: "Calculate the incidence rate of a disease.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Rate = \\frac{New\\ Cases}{Population} \\times Multiplier",
    inputs: [
      { id: "cases", label: "Number of New Cases", type: "number", defaultValue: 500 },
      { id: "population", label: "Population at Risk", type: "number", defaultValue: 100000 },
      { id: "multiplier", label: "Multiplier (e.g., 100000)", type: "number", defaultValue: 100000 }
    ],
    outputs: [
      { id: "rate", label: "Incidence Rate", formula: "(cases / population) * multiplier", unit: "per multiplier" }
    ],
    theory: "Measures the probability of occurrence of a given medical condition in a population within a specified period of time.",
    seoMeta: { title: "Incidence Rate Calculator", description: "Calculate incidence rate.", keywords: "incidence, epidemiology" }
  },
  {
    id: "sir-model-calculator",
    name: "Infectious Disease Calculator (SIR)",
    description: "Basic Reproduction Number (R0) in SIR model.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "R_0 = \\frac{\\beta}{\\gamma}",
    inputs: [
      { id: "beta", label: "Transmission Rate (beta)", type: "number", defaultValue: 0.5 },
      { id: "gamma", label: "Recovery Rate (gamma)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "r0", label: "Basic Reproduction Number (R0)", formula: "beta / gamma", unit: "" }
    ],
    theory: "If R0 > 1, the disease will spread in a susceptible population.",
    seoMeta: { title: "SIR Model Calculator", description: "Calculate R0.", keywords: "SIR, R0, epidemic" }
  },
  {
    id: "mask-vs-no-mask-calculator",
    name: "Mask vs. No Mask Calculator",
    description: "Compare transmission risk with and without masks.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Risk = Base\\ Risk \\times (1 - Efficacy)",
    inputs: [
      { id: "base", label: "Base Transmission Risk (%)", type: "number", defaultValue: 20 },
      { id: "efficacy", label: "Mask Efficacy (%)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "risk", label: "Risk With Mask", formula: "base * (1 - (efficacy / 100))", unit: "%" }
    ],
    theory: "Masks provide source control and personal protection.",
    seoMeta: { title: "Mask Risk Calculator", description: "Compare mask efficacy.", keywords: "mask, COVID" }
  },
  {
    id: "max-vaccine-immunity-calculator",
    name: "Max Vaccine Immunity Calculator",
    description: "Calculate population immunity based on vaccine efficacy.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Immunity = Coverage \\times Efficacy",
    inputs: [
      { id: "coverage", label: "Vaccine Coverage (%)", type: "number", defaultValue: 70 },
      { id: "efficacy", label: "Vaccine Efficacy (%)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "immunity", label: "Population Immunity", formula: "(coverage / 100) * (efficacy / 100) * 100", unit: "%" }
    ],
    theory: "Herd immunity threshold depends on the R0 of the disease.",
    seoMeta: { title: "Vaccine Immunity Calculator", description: "Calculate herd immunity.", keywords: "vaccine, immunity" }
  },
  {
    id: "mortality-rate-calculator",
    name: "Mortality Rate Calculator",
    description: "Calculate the mortality rate of a disease.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Rate = \\frac{Deaths}{Cases} \\times 100",
    inputs: [
      { id: "deaths", label: "Number of Deaths", type: "number", defaultValue: 50 },
      { id: "cases", label: "Number of Cases", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "cfr", label: "Case Fatality Rate (CFR)", formula: "(deaths / cases) * 100", unit: "%" }
    ],
    theory: "CFR represents the proportion of individuals diagnosed with a disease who die from it.",
    seoMeta: { title: "Mortality Rate Calculator", description: "Calculate CFR.", keywords: "CFR, mortality" }
  },
  {
    id: "nnt-calculator",
    name: "NNT Calculator",
    description: "Calculate Number Needed to Treat.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "NNT = \\frac{1}{Absolute\\ Risk\\ Reduction}",
    inputs: [
      { id: "cer", label: "Control Event Rate (%)", type: "number", defaultValue: 20 },
      { id: "eer", label: "Experimental Event Rate (%)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "nnt", label: "NNT", formula: "1 / ((cer - eer) / 100)", unit: "patients" }
    ],
    theory: "The ideal NNT is 1, where everyone improves with treatment and no one improves with control.",
    seoMeta: { title: "NNT Calculator", description: "Number Needed to Treat.", keywords: "NNT, ARR" }
  },
  {
    id: "reopening-calculator",
    name: "Reopening Calculator - Coronavirus",
    description: "Calculate safe capacity for reopening venues.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Capacity = \\frac{Area}{Space\\ per\\ person}",
    inputs: [
      { id: "area", label: "Total Usable Area (sq meters)", type: "number", defaultValue: 1000 },
      { id: "space", label: "Required Space per Person (sq meters)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "capacity", label: "Max Safe Capacity", formula: "area / space", unit: "people" }
    ],
    theory: "Based on maintaining 2-meter (6-foot) physical distancing.",
    seoMeta: { title: "Reopening Calculator", description: "Safe venue capacity.", keywords: "reopening, capacity" }
  },
  {
    id: "social-distancing-calculator",
    name: "Social Distancing Calculator",
    description: "Estimate contacts reduced by social distancing.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Reduction = Normal\\ Contacts - Current\\ Contacts",
    inputs: [
      { id: "normal", label: "Normal Daily Contacts", type: "number", defaultValue: 15 },
      { id: "current", label: "Current Daily Contacts", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "reduction", label: "Contacts Reduced", formula: "normal - current", unit: "people/day" },
      { id: "percent", label: "Percent Reduction", formula: "((normal - current) / normal) * 100", unit: "%" }
    ],
    theory: "Reducing contacts lowers the effective reproduction number.",
    seoMeta: { title: "Social Distancing Calculator", description: "Estimate reduced contacts.", keywords: "social distancing" }
  },
  {
    id: "swiss-cheese-model-calculator",
    name: "Swiss Cheese Model Calculator",
    description: "Cumulative protection from multiple interventions.",
    category: "health",
    subcategory: "epidemiology",
    scientificFormula: "Protection = 1 - (1-E_1)(1-E_2)...(1-E_n)",
    inputs: [
      { id: "e1", label: "Mask Efficacy (%)", type: "number", defaultValue: 50 },
      { id: "e2", label: "Distancing Efficacy (%)", type: "number", defaultValue: 60 },
      { id: "e3", label: "Ventilation Efficacy (%)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "protection", label: "Total Protection", formula: "(1 - (1 - e1/100) * (1 - e2/100) * (1 - e3/100)) * 100", unit: "%" }
    ],
    theory: "Multiple layers of imperfect defense improve overall success.",
    seoMeta: { title: "Swiss Cheese Model", description: "Cumulative protection.", keywords: "swiss cheese, protection" }
  },
  {
    id: "bed-calculator",
    name: "BED Calculator",
    description: "Calculate Biologically Effective Dose (BED).",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "BED = n \\times d \\times (1 + \\frac{d}{\\alpha/\\beta})",
    inputs: [
      { id: "n", label: "Number of fractions (n)", type: "number", defaultValue: 30 },
      { id: "d", label: "Dose per fraction (Gy)", type: "number", defaultValue: 2 },
      { id: "ab", label: "Alpha/Beta Ratio (Gy)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "bed", label: "Biologically Effective Dose", formula: "n * d * (1 + (d / ab))", unit: "Gy" }
    ],
    theory: "Used in radiation oncology to compare different fractionation schedules.",
    seoMeta: { title: "BED Calculator", description: "Calculate BED.", keywords: "BED, radiation" }
  },
  {
    id: "medical-radiation-calculator",
    name: "Medical Radiation Calculator",
    description: "Estimate total effective dose from medical imaging.",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "Total Dose = \\sum (Scans \\times Dose\\ per\\ Scan)",
    inputs: [
      { id: "cxr", label: "Chest X-Rays (0.1 mSv each)", type: "number", defaultValue: 1 },
      { id: "ct_chest", label: "CT Chest (7 mSv each)", type: "number", defaultValue: 0 },
      { id: "ct_head", label: "CT Head (2 mSv each)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "total_dose", label: "Total Effective Dose", formula: "cxr * 0.1 + ct_chest * 7 + ct_head * 2", unit: "mSv" }
    ],
    theory: "Helps estimate cumulative radiation exposure from common imaging procedures.",
    seoMeta: { title: "Medical Radiation Calculator", description: "Estimate radiation dose.", keywords: "radiation, mSv" }
  },
  {
    id: "radiation-dose-calculator",
    name: "Radiation Dose Calculator",
    description: "Calculate dose based on inverse square law.",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "D_2 = D_1 \\times (r_1 / r_2)^2",
    inputs: [
      { id: "d1", label: "Initial Dose Rate", type: "number", defaultValue: 100 },
      { id: "r1", label: "Initial Distance", type: "number", defaultValue: 1 },
      { id: "r2", label: "New Distance", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "d2", label: "New Dose Rate", formula: "d1 * Math.pow(r1 / r2, 2)", unit: "" }
    ],
    theory: "Radiation intensity is inversely proportional to the square of the distance from the source.",
    seoMeta: { title: "Inverse Square Law Calculator", description: "Calculate radiation dose.", keywords: "radiation dose, inverse square" }
  },
  {
    id: "ti-rads-calculator",
    name: "TI-RADS Calculator",
    description: "Thyroid Imaging Reporting and Data System score.",
    category: "health",
    subcategory: "radiology",
    scientificFormula: "Sum of points for ultrasound features",
    inputs: [
      { id: "comp", label: "Composition (Spongiform: 0, Solid: 2)", type: "number", defaultValue: 2 },
      { id: "echo", label: "Echogenicity (Iso: 1, Hypo: 2, Very Hypo: 3)", type: "number", defaultValue: 1 },
      { id: "shape", label: "Shape (Wider-than-tall: 0, Taller-than-wide: 3)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "TI-RADS Points", formula: "comp + echo + shape", unit: "points" }
    ],
    theory: "Higher scores indicate a higher risk of malignancy and may warrant FNA.",
    seoMeta: { title: "TI-RADS Calculator", description: "Thyroid nodule score.", keywords: "TI-RADS, thyroid" }
  },
  {
    id: "alzheimers-life-expectancy-calculator",
    name: "Alzheimer's Life Expectancy Calculator",
    description: "Estimate average life expectancy after Alzheimer's diagnosis.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Estimate based on age at diagnosis",
    inputs: [
      { id: "age", label: "Age at Diagnosis (years)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "years", label: "Estimated Average Survival", formula: "age < 65 ? 8 : (age < 80 ? 6 : 3)", unit: "years" }
    ],
    theory: "Survival varies significantly based on age at diagnosis and other comorbidities.",
    seoMeta: { title: "Alzheimer's Life Expectancy", description: "Estimate survival.", keywords: "Alzheimer's, life expectancy" }
  },
  {
    id: "barthel-index-calculator",
    name: "Barthel Index Calculator",
    description: "Assess functional independence in ADLs.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Sum of 10 ADL items",
    inputs: [
      { id: "feeding", label: "Feeding (0, 5, 10)", type: "number", defaultValue: 10 },
      { id: "bathing", label: "Bathing (0, 5)", type: "number", defaultValue: 5 },
      { id: "mobility", label: "Mobility (0, 5, 10, 15)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "score", label: "Barthel Score (Partial)", formula: "feeding + bathing + mobility", unit: "points" }
    ],
    theory: "Scores range from 0 (dependent) to 100 (independent).",
    seoMeta: { title: "Barthel Index Calculator", description: "Assess ADLs.", keywords: "Barthel index, ADL" }
  },
  {
    id: "bims-calculator",
    name: "BIMS Calculator",
    description: "Brief Interview for Mental Status.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Score (0-15)",
    inputs: [
      { id: "rep", label: "Repetition (0-3)", type: "number", defaultValue: 3 },
      { id: "temp", label: "Temporal Orientation (0-3)", type: "number", defaultValue: 3 },
      { id: "recall", label: "Recall (0-9)", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "score", label: "BIMS Score", formula: "rep + temp + recall", unit: "points" }
    ],
    theory: "13-15: Cognitively intact, 8-12: Moderately impaired, 0-7: Severe impairment.",
    seoMeta: { title: "BIMS Calculator", description: "Mental status interview.", keywords: "BIMS, cognition" }
  },
  {
    id: "braden-score-calculator",
    name: "Braden Score Calculator",
    description: "Predict pressure ulcer risk.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Sum of 6 subscales",
    inputs: [
      { id: "sensory", label: "Sensory Perception (1-4)", type: "number", defaultValue: 4 },
      { id: "moisture", label: "Moisture (1-4)", type: "number", defaultValue: 4 },
      { id: "activity", label: "Activity (1-4)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "score", label: "Partial Braden Score", formula: "sensory + moisture + activity", unit: "points" }
    ],
    theory: "Lower scores indicate a higher risk for developing pressure ulcers (<= 9 is severe risk).",
    seoMeta: { title: "Braden Score Calculator", description: "Pressure ulcer risk.", keywords: "Braden scale, pressure ulcer" }
  },
  {
    id: "charlson-comorbidity-index-calculator",
    name: "Charlson Comorbidity Index Calculator",
    description: "Predict 10-year mortality for patients with multiple comorbidities.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Sum of weighted comorbidities",
    inputs: [
      { id: "age", label: "Age", type: "number", defaultValue: 60 },
      { id: "mi", label: "Myocardial Infarction (1 point)", type: "number", defaultValue: 0 },
      { id: "chf", label: "Congestive Heart Failure (1 point)", type: "number", defaultValue: 0 },
      { id: "cancer", label: "Metastatic Solid Tumor (6 points)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "CCI Score", formula: "(age >= 50 ? Math.floor((age - 40) / 10) : 0) + mi + chf + cancer * 6", unit: "points" }
    ],
    theory: "Higher scores indicate greater comorbid burden and higher mortality risk.",
    seoMeta: { title: "Charlson Comorbidity Index", description: "Calculate CCI.", keywords: "CCI, comorbidity" }
  },
  {
    id: "frailty-index-calculator",
    name: "Frailty Index Calculator",
    description: "Assess frailty using Fried phenotype.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Number of criteria met (0-5)",
    inputs: [
      { id: "weight", label: "Unintentional Weight Loss (1:Yes)", type: "number", defaultValue: 0 },
      { id: "exhaustion", label: "Self-Reported Exhaustion (1:Yes)", type: "number", defaultValue: 0 },
      { id: "weakness", label: "Weakness / Low Grip Strength (1:Yes)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "Frailty Score", formula: "weight + exhaustion + weakness", unit: "/ 5" }
    ],
    theory: ">= 3 criteria indicates frailty. 1-2 indicates pre-frail.",
    seoMeta: { title: "Frailty Index Calculator", description: "Assess frailty.", keywords: "frailty, Fried" }
  },
  {
    id: "morse-fall-scale-calculator",
    name: "Morse Fall Scale Calculator",
    description: "Assess a patient's likelihood of falling.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Sum of 6 items",
    inputs: [
      { id: "history", label: "History of Falling (0 or 25)", type: "number", defaultValue: 0 },
      { id: "diagnosis", label: "Secondary Diagnosis (0 or 15)", type: "number", defaultValue: 0 },
      { id: "aid", label: "Ambulatory Aid (0, 15, or 30)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "MFS Score (Partial)", formula: "history + diagnosis + aid", unit: "points" }
    ],
    theory: "Score >= 45 indicates high risk of falling.",
    seoMeta: { title: "Morse Fall Scale", description: "Fall risk assessment.", keywords: "Morse, fall risk" }
  },
  {
    id: "osteoporosis-risk-calculator",
    name: "Osteoporosis Risk Calculator",
    description: "Simple ORAI (Osteoporosis Risk Assessment Instrument).",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Score based on age, weight, and estrogen use",
    inputs: [
      { id: "age", label: "Age (years)", type: "number", defaultValue: 65 },
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 65 },
      { id: "estrogen", label: "Current Estrogen Use? (1:Yes, 0:No)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "ORAI Score", formula: "(age >= 75 ? 15 : (age >= 65 ? 9 : (age >= 55 ? 5 : 0))) + (weight < 60 ? 9 : (weight < 70 ? 3 : 0)) - (estrogen == 1 ? 2 : 0)", unit: "points" }
    ],
    theory: "ORAI >= 9 indicates a recommendation for bone mineral density testing.",
    seoMeta: { title: "Osteoporosis Risk Calculator", description: "Assess osteoporosis risk.", keywords: "osteoporosis, ORAI" }
  },
  {
    id: "tinetti-calculator",
    name: "Tinetti Calculator",
    description: "Assess balance and gait.",
    category: "health",
    subcategory: "geriatric",
    scientificFormula: "Balance Score + Gait Score",
    inputs: [
      { id: "balance", label: "Balance Score (0-16)", type: "number", defaultValue: 16 },
      { id: "gait", label: "Gait Score (0-12)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "total", label: "Total Tinetti Score", formula: "balance + gait", unit: "/ 28" }
    ],
    theory: "Score < 19 indicates a high risk of falls.",
    seoMeta: { title: "Tinetti Calculator", description: "Balance and gait assessment.", keywords: "Tinetti, falls" }
  },
  {
    id: "bidens-vaccine-plan-calculator",
    name: "Biden's Vaccine Plan Calculator",
    description: "Track progress towards 100 million doses in 100 days.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Progress = (Doses Administered / Target) * 100",
    inputs: [
      { id: "doses", label: "Doses Administered (Millions)", type: "number", defaultValue: 50 },
      { id: "target", label: "Target (Millions)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "progress", label: "Plan Progress", formula: "(doses / target) * 100", unit: "%" }
    ],
    theory: "Evaluates the historical 100 million doses in 100 days target.",
    seoMeta: { title: "Biden Vaccine Plan", description: "Vaccine plan calculator.", keywords: "Biden, vaccine" }
  },
  {
    id: "vaccine-efficacy-calculator",
    name: "Vaccine Efficacy Calculator",
    description: "Calculate vaccine efficacy from trial data.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "VE = \\frac{ARU - ARV}{ARU} \\times 100",
    inputs: [
      { id: "cases_v", label: "Cases in Vaccinated Group", type: "number", defaultValue: 8 },
      { id: "total_v", label: "Total in Vaccinated Group", type: "number", defaultValue: 20000 },
      { id: "cases_p", label: "Cases in Placebo Group", type: "number", defaultValue: 162 },
      { id: "total_p", label: "Total in Placebo Group", type: "number", defaultValue: 20000 }
    ],
    outputs: [
      { id: "ve", label: "Vaccine Efficacy", formula: "(((cases_p / total_p) - (cases_v / total_v)) / (cases_p / total_p)) * 100", unit: "%" }
    ],
    theory: "Measures the proportionate reduction in disease among the vaccinated group.",
    seoMeta: { title: "Vaccine Efficacy Calculator", description: "Calculate VE.", keywords: "vaccine efficacy, VE" }
  },
  {
    id: "covid-19-vaccine-production-calculator",
    name: "COVID-19 Vaccine Production Calculator",
    description: "Estimate time to produce required vaccine doses.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Time = \\frac{Target\\ Doses}{Production\\ Rate}",
    inputs: [
      { id: "target", label: "Target Doses (Millions)", type: "number", defaultValue: 7000 },
      { id: "rate", label: "Production Rate (Millions/month)", type: "number", defaultValue: 500 }
    ],
    outputs: [
      { id: "months", label: "Time Required", formula: "target / rate", unit: "months" }
    ],
    theory: "Estimates global or national production timelines.",
    seoMeta: { title: "Vaccine Production Calculator", description: "Production timelines.", keywords: "vaccine production" }
  },
  {
    id: "vaccine-queue-calculator-australia",
    name: "Vaccine Queue Calculator for Australia",
    description: "Estimate your place in the COVID-19 vaccine queue for Australia.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 5 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Australia", description: "Vaccine queue for Australia.", keywords: "vaccine queue, Australia" }
  },
  {
    id: "vaccine-queue-calculator-india",
    name: "Vaccine Queue Calculator for India",
    description: "Estimate your place in the COVID-19 vaccine queue for India.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 300 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue India", description: "Vaccine queue for India.", keywords: "vaccine queue, India" }
  },
  {
    id: "vaccine-queue-calculator-canada",
    name: "Vaccine Queue Calculator for Canada",
    description: "Estimate your place in the COVID-19 vaccine queue for Canada.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 10 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Canada", description: "Vaccine queue for Canada.", keywords: "vaccine queue, Canada" }
  },
  {
    id: "vaccine-queue-calculator-england",
    name: "Vaccine Queue Calculator for England",
    description: "Estimate your place in the COVID-19 vaccine queue for England.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 20 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue England", description: "Vaccine queue for England.", keywords: "vaccine queue, England" }
  },
  {
    id: "vaccine-queue-calculator-malaysia",
    name: "Vaccine Queue Calculator for Malaysia",
    description: "Estimate your place in the COVID-19 vaccine queue for Malaysia.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 8 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Malaysia", description: "Vaccine queue for Malaysia.", keywords: "vaccine queue, Malaysia" }
  },
  {
    id: "vaccine-queue-calculator-ireland",
    name: "Vaccine Queue Calculator for Ireland",
    description: "Estimate your place in the COVID-19 vaccine queue for Ireland.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 2 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Ireland", description: "Vaccine queue for Ireland.", keywords: "vaccine queue, Ireland" }
  },
  {
    id: "vaccine-queue-calculator-the-netherlands",
    name: "Vaccine Queue Calculator for the Netherlands",
    description: "Estimate your place in the COVID-19 vaccine queue for the Netherlands.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 5 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Netherlands", description: "Vaccine queue for the Netherlands.", keywords: "vaccine queue, Netherlands" }
  },
  {
    id: "vaccine-queue-calculator-northern-ireland",
    name: "Vaccine Queue Calculator for Northern Ireland",
    description: "Estimate your place in the COVID-19 vaccine queue for Northern Ireland.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 0.5 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 0.1 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Northern Ireland", description: "Vaccine queue for Northern Ireland.", keywords: "vaccine queue, Northern Ireland" }
  },
  {
    id: "vaccine-queue-calculator-the-philippines",
    name: "Vaccine Queue Calculator for the Philippines",
    description: "Estimate your place in the COVID-19 vaccine queue for the Philippines.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 50 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Philippines", description: "Vaccine queue for the Philippines.", keywords: "vaccine queue, Philippines" }
  },
  {
    id: "vaccine-queue-calculator-scotland",
    name: "Vaccine Queue Calculator for Scotland",
    description: "Estimate your place in the COVID-19 vaccine queue for Scotland.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 2 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 0.4 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Scotland", description: "Vaccine queue for Scotland.", keywords: "vaccine queue, Scotland" }
  },
  {
    id: "vaccine-queue-calculator-south-africa",
    name: "Vaccine Queue Calculator for South Africa",
    description: "Estimate your place in the COVID-19 vaccine queue for South Africa.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 20 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue South Africa", description: "Vaccine queue for South Africa.", keywords: "vaccine queue, South Africa" }
  },
  {
    id: "vaccine-queue-calculator-the-uk",
    name: "Vaccine Queue Calculator for the UK",
    description: "Estimate your place in the COVID-19 vaccine queue for the UK.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 30 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue UK", description: "Vaccine queue for the UK.", keywords: "vaccine queue, UK" }
  },
  {
    id: "vaccine-queue-calculator-wales",
    name: "Vaccine Queue Calculator for Wales",
    description: "Estimate your place in the COVID-19 vaccine queue for Wales.",
    category: "health",
    subcategory: "vaccine",
    scientificFormula: "Wait Time = \\frac{People Ahead}{Vaccination Rate}",
    inputs: [
      { id: "ahead", label: "Estimated People Ahead (Millions)", type: "number", defaultValue: 1 },
      { id: "rate", label: "Vaccination Rate (Millions/week)", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "wait", label: "Estimated Wait Time", formula: "ahead / rate", unit: "weeks" }
    ],
    theory: "Based on priority groups and national vaccination deployment rates.",
    seoMeta: { title: "Vaccine Queue Wales", description: "Vaccine queue for Wales.", keywords: "vaccine queue, Wales" }
  },
  {
    id: "20-20-vision-calculator",
    name: "20/20 Vision Calculator",
    description: "Convert Snellen visual acuity decimal.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Acuity = \\frac{Test\\ Distance}{Letter\\ Size}",
    inputs: [
      { id: "decimal", label: "Visual Acuity Decimal (e.g. 1.0)", type: "number", defaultValue: 1.0 }
    ],
    outputs: [
      { id: "feet", label: "Snellen (Feet)", formula: "20 / (20 / decimal)", unit: "" }
    ],
    theory: "1.0 decimal acuity is equivalent to 20/20 vision.",
    seoMeta: { title: "20/20 Vision Calculator", description: "Convert visual acuity.", keywords: "vision, snellen" }
  },
  {
    id: "aldrete-score-calculator",
    name: "Aldrete Score Calculator",
    description: "Post-anesthesia recovery score.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Sum of 5 criteria",
    inputs: [
      { id: "activity", label: "Activity (0-2)", type: "number", defaultValue: 2 },
      { id: "resp", label: "Respiration (0-2)", type: "number", defaultValue: 2 },
      { id: "circ", label: "Circulation (0-2)", type: "number", defaultValue: 2 },
      { id: "cons", label: "Consciousness (0-2)", type: "number", defaultValue: 2 },
      { id: "color", label: "Color/O2 Sat (0-2)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "score", label: "Aldrete Score", formula: "activity + resp + circ + cons + color", unit: "/ 10" }
    ],
    theory: "A score of >= 9 is generally required for discharge from PACU.",
    seoMeta: { title: "Aldrete Score", description: "Post-anesthesia score.", keywords: "Aldrete, anesthesia" }
  },
  {
    id: "basdai-score-calculator",
    name: "BASDAI Score Calculator",
    description: "Bath Ankylosing Spondylitis Disease Activity Index.",
    category: "health",
    subcategory: "other",
    scientificFormula: "BASDAI = 0.2 \\times (Q1 + Q2 + Q3 + Q4 + \\frac{Q5+Q6}{2})",
    inputs: [
      { id: "q1", label: "Fatigue (0-10)", type: "number", defaultValue: 5 },
      { id: "q2", label: "Spinal Pain (0-10)", type: "number", defaultValue: 5 },
      { id: "q3", label: "Joint Pain (0-10)", type: "number", defaultValue: 5 },
      { id: "q4", label: "Enthesitis (0-10)", type: "number", defaultValue: 5 },
      { id: "q5", label: "Morning Stiffness Degree (0-10)", type: "number", defaultValue: 5 },
      { id: "q6", label: "Morning Stiffness Length (0-10)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "score", label: "BASDAI Score", formula: "(q1 + q2 + q3 + q4 + ((q5 + q6) / 2)) / 5", unit: "" }
    ],
    theory: "Scores >= 4 indicate suboptimal control of disease.",
    seoMeta: { title: "BASDAI Calculator", description: "Ankylosing Spondylitis index.", keywords: "BASDAI, AS" }
  },
  {
    id: "beighton-score-calculator",
    name: "Beighton Score Calculator",
    description: "Assess joint hypermobility.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Sum of 9 maneuvers",
    inputs: [
      { id: "pinky", label: "Pinky > 90 deg (0-2)", type: "number", defaultValue: 0 },
      { id: "thumb", label: "Thumb to forearm (0-2)", type: "number", defaultValue: 0 },
      { id: "elbow", label: "Elbow hyperextension (0-2)", type: "number", defaultValue: 0 },
      { id: "knee", label: "Knee hyperextension (0-2)", type: "number", defaultValue: 0 },
      { id: "floor", label: "Palms to floor (0-1)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "score", label: "Beighton Score", formula: "pinky + thumb + elbow + knee + floor", unit: "/ 9" }
    ],
    theory: "Score >= 4 (or 5 depending on criteria) indicates hypermobility.",
    seoMeta: { title: "Beighton Score", description: "Joint hypermobility.", keywords: "Beighton, hypermobility" }
  },
  {
    id: "berg-balance-test-calculator",
    name: "Berg Balance Test Calculator",
    description: "Assess static and dynamic balance.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Sum of 14 items",
    inputs: [
      { id: "sitting", label: "Sitting to Standing (0-4)", type: "number", defaultValue: 4 },
      { id: "standing", label: "Standing Unsupported (0-4)", type: "number", defaultValue: 4 },
      { id: "transfers", label: "Transfers (0-4)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "score", label: "Partial Score", formula: "sitting + standing + transfers", unit: "points" }
    ],
    theory: "Total out of 56. < 45 indicates a greater risk of falling.",
    seoMeta: { title: "Berg Balance Test", description: "Assess balance.", keywords: "Berg balance, falls" }
  },
  {
    id: "hot-car-calculator",
    name: "Hot Car Calculator",
    description: "Estimate temperature inside a car over time.",
    category: "health",
    subcategory: "other",
    scientificFormula: "T_{car} = T_{out} + Heating\\ Curve",
    inputs: [
      { id: "temp", label: "Outside Temp (F)", type: "number", defaultValue: 80 },
      { id: "mins", label: "Minutes in Sun", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "inside", label: "Estimated Inside Temp (F)", formula: "temp + (mins < 10 ? 19 : (mins < 20 ? 29 : (mins < 30 ? 34 : 43)))", unit: "F" }
    ],
    theory: "Cars heat up rapidly; 80% of the temperature rise occurs in the first 30 mins.",
    seoMeta: { title: "Hot Car Calculator", description: "Car interior temperature.", keywords: "hot car, safety" }
  },
  {
    id: "centor-score-calculator",
    name: "Centor Score Calculator",
    description: "Modified Centor / McIsaac Score for Strep.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Sum of clinical signs and age modifier",
    inputs: [
      { id: "fever", label: "Fever > 38C (1:Yes)", type: "number", defaultValue: 1 },
      { id: "exudate", label: "Tonsillar Exudate (1:Yes)", type: "number", defaultValue: 1 },
      { id: "nodes", label: "Tender Nodes (1:Yes)", type: "number", defaultValue: 1 },
      { id: "cough", label: "Absence of Cough (1:Yes)", type: "number", defaultValue: 1 },
      { id: "age", label: "Age (years)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "score", label: "Centor Score", formula: "fever + exudate + nodes + cough + (age < 15 ? 1 : (age > 44 ? -1 : 0))", unit: "points" }
    ],
    theory: "Scores >= 4 suggest empiric treatment or testing for Group A Strep.",
    seoMeta: { title: "Centor Score", description: "Assess strep throat.", keywords: "Centor, strep" }
  },
  {
    id: "dog-walking-benefits-calculator",
    name: "Dog Walking Benefits Calculator",
    description: "Calculate calories burned while dog walking.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Calories = Weight \\times METs \\times Hours",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "mins", label: "Minutes Walked", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "cals", label: "Calories Burned", formula: "weight * 3.0 * (mins / 60)", unit: "kcal" }
    ],
    theory: "Dog walking is estimated at ~3.0 METs (moderate intensity).",
    seoMeta: { title: "Dog Walking Calculator", description: "Calories burned.", keywords: "dog walking, calories" }
  },
  {
    id: "dasi-calculator",
    name: "DASI Calculator",
    description: "Duke Activity Status Index.",
    category: "health",
    subcategory: "other",
    scientificFormula: "VO2 peak = 0.43 \\times DASI + 9.6",
    inputs: [
      { id: "q1", label: "Personal Care (2.75 points)", type: "number", defaultValue: 2.75 },
      { id: "q2", label: "Walk Indoors (1.75 points)", type: "number", defaultValue: 1.75 }
    ],
    outputs: [
      { id: "score", label: "DASI Score (Partial)", formula: "q1 + q2", unit: "" },
      { id: "vo2", label: "Estimated VO2 peak", formula: "0.43 * (q1 + q2) + 9.6", unit: "mL/kg/min" }
    ],
    theory: "Estimates functional capacity for cardiac patients.",
    seoMeta: { title: "DASI Calculator", description: "Duke Activity Status Index.", keywords: "DASI, cardiology" }
  },
  {
    id: "easi-score-calculator",
    name: "EASI Score Calculator",
    description: "Eczema Area and Severity Index.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Sum of region scores (Area \\times Severity \\times Multiplier)",
    inputs: [
      { id: "head", label: "Head/Neck Area Score (0-6)", type: "number", defaultValue: 2 },
      { id: "head_sev", label: "Head/Neck Severity (0-12)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "score", label: "EASI Head Score", formula: "head * head_sev * 0.1", unit: "points" }
    ],
    theory: "Used to quantify eczema severity in trials and practice.",
    seoMeta: { title: "EASI Score Calculator", description: "Eczema index.", keywords: "EASI, eczema" }
  },
  {
    id: "fatigue-severity-scale-calculator",
    name: "Fatigue Severity Scale Calculator",
    description: "Assess impact of fatigue.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Mean of 9 items",
    inputs: [
      { id: "q1", label: "Item 1 (1-7)", type: "number", defaultValue: 4 },
      { id: "q2", label: "Item 2 (1-7)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "score", label: "FSS Mean (Partial)", formula: "(q1 + q2) / 2", unit: "" }
    ],
    theory: "Mean score >= 4 indicates severe fatigue.",
    seoMeta: { title: "Fatigue Severity Scale", description: "Assess fatigue.", keywords: "FSS, fatigue" }
  },
  {
    id: "free-testosterone-calculator",
    name: "Free Testosterone Calculator",
    description: "Calculate Free and Bioavailable Testosterone.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Vermeulen Equation",
    inputs: [
      { id: "t", label: "Total T (ng/dL)", type: "number", defaultValue: 600 },
      { id: "shbg", label: "SHBG (nmol/L)", type: "number", defaultValue: 40 },
      { id: "alb", label: "Albumin (g/dL)", type: "number", defaultValue: 4.3 }
    ],
    outputs: [
      { id: "free_t", label: "Estimated Free T (%)", formula: "(t / (shbg * 10)) * 2", unit: "% approx" }
    ],
    theory: "Only a small fraction (1-2%) of total testosterone is free and unbound.",
    seoMeta: { title: "Free Testosterone Calculator", description: "Calculate free T.", keywords: "testosterone, free T" }
  },
  {
    id: "gut-microbiome-score-calculator",
    name: "Gut Microbiome Score Calculator",
    description: "Estimate gut health based on diet/lifestyle.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Score based on fiber and fermented foods",
    inputs: [
      { id: "plants", label: "Different plant types/week", type: "number", defaultValue: 20 },
      { id: "ferment", label: "Fermented servings/week", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "score", label: "Gut Health Score", formula: "plants * 2 + ferment * 5", unit: "points" }
    ],
    theory: "Aim for 30+ different plant types per week for optimal microbiome diversity.",
    seoMeta: { title: "Gut Microbiome Score", description: "Gut health score.", keywords: "microbiome, gut health" }
  },
  {
    id: "noise-pollution-calculator",
    name: "Noise Pollution Calculator",
    description: "Calculate maximal safe exposure time for noise.",
    category: "health",
    subcategory: "other",
    scientificFormula: "T = \\frac{8}{2^{(L-85)/3}}",
    inputs: [
      { id: "db", label: "Noise Level (dBA)", type: "number", defaultValue: 95 }
    ],
    outputs: [
      { id: "time", label: "Max Safe Exposure", formula: "8 / Math.pow(2, (db - 85) / 3)", unit: "hours" }
    ],
    theory: "For every 3 dB increase above 85 dBA, safe exposure time is halved (NIOSH standard).",
    seoMeta: { title: "Noise Pollution Calculator", description: "Maximal exposure time.", keywords: "noise, decibels" }
  },
  {
    id: "pokemon-go-weight-loss-calculator",
    name: "Pokémon GO Weight Loss Calculator",
    description: "Calories burned playing Pokémon GO.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Calories = Weight \\times METs \\times Hours",
    inputs: [
      { id: "weight", label: "Weight (kg)", type: "number", defaultValue: 70 },
      { id: "mins", label: "Minutes Played Walking", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "cals", label: "Calories Burned", formula: "weight * 3.5 * (mins / 60)", unit: "kcal" }
    ],
    theory: "Walking while playing averages about 3.5 METs.",
    seoMeta: { title: "Pokemon GO Weight Loss", description: "Calories burned playing.", keywords: "Pokemon GO, calories" }
  },
  {
    id: "time-of-death-calculator",
    name: "Time Of Death Calculator",
    description: "Estimate time of death via Algor Mortis.",
    category: "health",
    subcategory: "other",
    scientificFormula: "Hours = \\frac{98.6 - T_{rectal}}{1.5}",
    inputs: [
      { id: "temp", label: "Body Temp (F)", type: "number", defaultValue: 85 }
    ],
    outputs: [
      { id: "hours", label: "Hours Since Death", formula: "(98.6 - temp) / 1.5", unit: "hours" }
    ],
    theory: "Body cools approximately 1.5°F per hour under standard conditions.",
    seoMeta: { title: "Time of Death Calculator", description: "Algor mortis calculator.", keywords: "time of death, algor mortis" }
  }
];
