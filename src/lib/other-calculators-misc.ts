import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_MISC: CalculatorConfig[] = [
  {
    id: "age-on-other-planets-calculator",
    name: "Age on Other Planets Calculator",
    description: "Calculate your age relative to other planets' orbits.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Age} = \\frac{\\text{Earth Age in Days}}{\\text{Planet Orbit in Earth Days}}",
    inputs: [
      { id: "age", label: "Age on Earth (Years)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "mars", label: "Age on Mars", formula: "(age * 365.25) / 687", unit: "Martian Years" },
      { id: "jupiter", label: "Age on Jupiter", formula: "(age * 365.25) / 4333", unit: "Jovian Years" },
      { id: "venus", label: "Age on Venus", formula: "(age * 365.25) / 225", unit: "Venusian Years" }
    ],
    theory: "Each planet takes a different amount of time to complete one orbit around the Sun.",
    faq: [],
    seoMeta: { title: "Age on Other Planets Calculator", description: "Calculate your age on Mars, Jupiter, etc.", keywords: "age on other planets" }
  },
  {
    id: "angle-of-impact-calculator",
    name: "Angle of Impact Calculator",
    description: "Calculate the angle of impact for bloodstains in forensics.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\theta = \\arcsin\\left(\\frac{w}{l}\\right)",
    inputs: [
      { id: "w", label: "Width of Droplet (mm)", type: "number", defaultValue: 5 },
      { id: "l", label: "Length of Droplet (mm)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "angle", label: "Angle of Impact", formula: "asin(w / l) * 180 / pi", unit: "°" }
    ],
    theory: "In bloodstain pattern analysis, the angle of impact is computed using the ratio of the width to the length of the spatter droplet.",
    faq: [
      { question: "What if the width is greater than length?", answer: "This is physically impossible for a falling droplet stain. The width must always be less than or equal to the length." }
    ],
    seoMeta: { title: "Angle of Impact Calculator | Forensic Science", description: "Calculate the bloodstain angle of impact using droplet width and length.", keywords: "angle of impact, blood spatter, forensics" }
  },
  {
    id: "aquarium-calculator",
    name: "Aquarium Calculator",
    description: "Calculate volume and weight of a rectangular aquarium.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "V = L \\times W \\times H",
    inputs: [
      { id: "l", label: "Length (inches)", type: "number", defaultValue: 48 },
      { id: "w", label: "Width (inches)", type: "number", defaultValue: 18 },
      { id: "h", label: "Height (inches)", type: "number", defaultValue: 21 }
    ],
    outputs: [
      { id: "gal", label: "Volume", formula: "(l * w * h) / 231", unit: "gallons" },
      { id: "wt", label: "Approximate Water Weight", formula: "((l * w * h) / 231) * 8.34", unit: "lbs" }
    ],
    theory: "Water is extremely heavy (8.34 lbs per gallon). The floor must be able to support this.",
    faq: [],
    seoMeta: { title: "Aquarium Volume Calculator", description: "Calculate tank volume and weight.", keywords: "aquarium calculator" }
  },
  {
    id: "aquarium-glass-thickness-calculator",
    name: "Aquarium Glass Thickness Calculator",
    description: "Determine the required glass thickness for custom aquariums.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "T = \\sqrt{H^2 \\times L \\times 0.00005 \\times SF}",
    inputs: [
      { id: "h", label: "Water Height (inches)", type: "number", defaultValue: 24 },
      { id: "l", label: "Tank Length (inches)", type: "number", defaultValue: 48 },
      { id: "sf", label: "Safety Factor", type: "number", defaultValue: 3.8 }
    ],
    outputs: [
      { id: "thickness", label: "Required Glass Thickness", formula: "sqrt(h^2 * l * 0.00005 * sf)", unit: "mm" }
    ],
    theory: "Hydrostatic pressure increases exponentially with depth. Safety factors of 3.8 or higher are standard for home aquariums to handle pressure variations.",
    faq: [
      { question: "What is a safe safety factor for DIY aquariums?", answer: "A safety factor of 3.8 is standard for standard float glass, while tempered glass can use slightly lower values due to higher structural strength." }
    ],
    seoMeta: { title: "Aquarium Glass Thickness Calculator", description: "Calculate standard glass thickness for custom aquariums.", keywords: "aquarium glass thickness, tank volume, DIY aquarium" }
  },
  {
    id: "caesar-cipher-shifter",
    name: "Caesar Cipher Shifter",
    description: "Calculate shift parameters and complexity for the Caesar Cipher.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "E(x) = (x + k) \\pmod{26}",
    inputs: [
      { id: "len", label: "Text Length (Characters)", type: "number", defaultValue: 100 },
      { id: "shift", label: "Shift Amount (Key)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "keys", label: "Total Key Space", formula: "26", unit: "keys" },
      { id: "entropy", label: "Key Entropy", formula: "4.7", unit: "bits" },
      { id: "ops", label: "Total Encryption Ops", formula: "len", unit: "operations" }
    ],
    theory: "The Caesar Cipher shifts letters by a fixed offset. With only 25 unique shift keys, it offers minimal cryptographic security.",
    faq: [
      { question: "Can a Caesar cipher be easily decrypted?", answer: "Yes, standard brute force or frequency analysis will break a Caesar cipher instantly." }
    ],
    seoMeta: { title: "Caesar Cipher Shifter and Complexity Calculator", description: "Analyze cryptographic parameters of the Caesar Cipher.", keywords: "caesar cipher, shifter, cipher complexity" }
  },
  {
    id: "recruitment-process-duration-calculator",
    name: "Recruitment Process Duration Calculator",
    description: "Estimate Time-to-Hire and Time-to-Fill metrics.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Total Days} = Sourcing + Screening + Interviewing + Offer + Notice",
    inputs: [
      { id: "source", label: "Sourcing Stage (Days)", type: "number", defaultValue: 10 },
      { id: "screen", label: "Screening Stage (Days)", type: "number", defaultValue: 5 },
      { id: "interview", label: "Interview Loop (Days)", type: "number", defaultValue: 7 },
      { id: "offer", label: "Offer & Approvals (Days)", type: "number", defaultValue: 4 },
      { id: "notice", label: "Notice Period (Days)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "active", label: "Time-to-Hire (Active Cycle)", formula: "source + screen + interview + offer", unit: "days" },
      { id: "fill", label: "Time-to-Fill (Total Days)", formula: "source + screen + interview + offer + notice", unit: "days" }
    ],
    theory: "Optimizing recruitment workflows involves tracking both active interview duration and candidate notification periods.",
    faq: [
      { question: "What is a good Time-to-Hire average?", answer: "Most industries target 20 to 30 days for corporate roles, though specialized tech positions may take longer." }
    ],
    seoMeta: { title: "Recruitment Process Duration Calculator", description: "Calculate Time-to-Fill and Time-to-Hire recruitment metrics.", keywords: "recruitment calculator, time to fill, time to hire" }
  },
  {
    id: "day-of-the-week-calculator",
    name: "Day of the Week Calculator",
    description: "Calculate Julian Day and corresponding weekday index for any date.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{JDN} = \\text{Julian Day Algorithm}",
    inputs: [
      { id: "year", label: "Year", type: "number", defaultValue: 2026 },
      { id: "month", label: "Month (1-12)", type: "number", defaultValue: 5 },
      { id: "day", label: "Day of Month", type: "number", defaultValue: 21 }
    ],
    outputs: [
      { id: "jdn", label: "Julian Day Number", formula: "day + floor((153 * (month + 12 * floor((14 - month) / 12) - 3) + 2) / 5) + 365 * (year + 4800 - floor((14 - month) / 12)) + floor((year + 4800 - floor((14 - month) / 12)) / 4) - floor((year + 4800 - floor((14 - month) / 12)) / 100) + floor((year + 4800 - floor((14 - month) / 12)) / 400) - 32045", unit: "JDN" },
      { id: "dayindex", label: "Day Index (0=Mon, 3=Thu, 6=Sun)", formula: "mod(day + floor((153 * (month + 12 * floor((14 - month) / 12) - 3) + 2) / 5) + 365 * (year + 4800 - floor((14 - month) / 12)) + floor((year + 4800 - floor((14 - month) / 12)) / 4) - floor((year + 4800 - floor((14 - month) / 12)) / 100) + floor((year + 4800 - floor((14 - month) / 12)) / 400) - 32045, 7)", unit: "" }
    ],
    theory: "Julian Day Number is a continuous count of days since Jan 1, 4713 BC, useful for calendar arithmetic.",
    faq: [
      { question: "What does the day index represent?", answer: "0 corresponds to Monday, 1 to Tuesday, 2 to Wednesday, 3 to Thursday, 4 to Friday, 5 to Saturday, and 6 to Sunday." }
    ],
    seoMeta: { title: "Day of the Week and Julian Day Calculator", description: "Convert calendar dates to Julian Days and calculate the weekday.", keywords: "day of week, julian day calculator, weekday finder" }
  },
  {
    id: "diamond-weight-calculator",
    name: "Diamond Weight Calculator",
    description: "Estimate the carat weight of a round brilliant cut diamond.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Carat} = \\text{Diameter}^2 \\times \\text{Depth} \\times 0.0061",
    inputs: [
      { id: "dia", label: "Average Diameter (mm)", type: "number", defaultValue: 6.5 },
      { id: "depth", label: "Total Depth (mm)", type: "number", defaultValue: 3.9 },
      { id: "girdle", label: "Girdle Factor (1=Thin, 3=Thick)", type: "number", defaultValue: 1.5 }
    ],
    outputs: [
      { id: "weight", label: "Estimated Carat Weight", formula: "dia^2 * depth * 0.0061 * (1 + (girdle * 0.01))", unit: "ct" }
    ],
    theory: "Dimensional formulas allow gemologists to estimate diamond weight without unmounting stones from their settings.",
    faq: [
      { question: "How accurate is diamond dimension weight estimation?", answer: "It is highly accurate (usually within 3%) for well-proportioned standard brilliant cuts." }
    ],
    seoMeta: { title: "Diamond Carat Weight Estimator", description: "Estimate diamond weight from diameter and depth measurements.", keywords: "diamond weight calculator, carat estimation" }
  },
  {
    id: "encounter-calculator-5e",
    name: "Encounter Calculator 5e",
    description: "Determine combat budgets and challenge levels for D&D 5e.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{XP Budget} = f(Player\\;Level, Count)",
    inputs: [
      { id: "level", label: "Average Player Level", type: "number", defaultValue: 5 },
      { id: "players", label: "Number of Players", type: "number", defaultValue: 4 },
      { id: "cr", label: "Monster CR", type: "number", defaultValue: 5 },
      { id: "count", label: "Number of Monsters", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "xp_budget_easy", label: "Easy XP Budget Threshold", formula: "players * (level * 25)", unit: "XP" },
      { id: "xp_budget_deadly", label: "Deadly XP Budget Threshold", formula: "players * (level * 100)", unit: "XP" },
      { id: "monster_xp", label: "Total Monsters Base XP", formula: "count * (cr * 400)", unit: "XP" }
    ],
    theory: "Determining balanced Dungeons & Dragons combat encounters involves calculating the aggregate XP threshold for the adventuring party.",
    faq: [
      { question: "How is monster CR mapped to XP?", answer: "Each Challenge Rating has a designated XP yield. For example, CR 5 is valued at approximately 1800 XP." }
    ],
    seoMeta: { title: "D&D 5e Encounter Builder Calculator", description: "Balance combat encounters using level and monster budgets.", keywords: "dnd 5e encounter calculator, xp budget, dungeon master" }
  },
  {
    id: "engagement-rate-calculator",
    name: "Engagement Rate Calculator",
    description: "Calculate social media engagement rate.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{ER} = \\frac{\\text{Likes} + \\text{Comments} + \\text{Shares}}{\\text{Followers}} \\times 100",
    inputs: [
      { id: "l", label: "Likes", type: "number", defaultValue: 500 },
      { id: "c", label: "Comments", type: "number", defaultValue: 50 },
      { id: "s", label: "Shares/Saves", type: "number", defaultValue: 10 },
      { id: "f", label: "Total Followers", type: "number", defaultValue: 10000 }
    ],
    outputs: [
      { id: "er", label: "Engagement Rate", formula: "((l + c + s) / f) * 100", unit: "%" }
    ],
    theory: "Engagement rate measures how actively involved your audience is with your content.",
    faq: [],
    seoMeta: { title: "Engagement Rate Calculator", description: "Calculate Instagram/TikTok engagement.", keywords: "engagement rate calculator" }
  },
  {
    id: "flag-calculator-usa",
    name: "Flag Calculator | USA",
    description: "Calculate precise US Flag dimensions according to Executive Order 10834.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Hoist} : \\text{Fly} = 1.0 : 1.9",
    inputs: [
      { id: "w", label: "Flag Hoist / Width (feet)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "len", label: "Fly Length", formula: "w * 1.9", unit: "ft" },
      { id: "union_w", label: "Union Width", formula: "w * 0.5385", unit: "ft" },
      { id: "union_l", label: "Union Length", formula: "w * 0.76", unit: "ft" },
      { id: "stripe", label: "Single Stripe Width", formula: "w / 13", unit: "ft" }
    ],
    theory: "Federal specifications dictate standard mathematical proportions for all US flags to ensure visual accuracy.",
    faq: [
      { question: "What is Executive Order 10834?", answer: "The executive order signed by President Eisenhower in 1959 establishing official dimensions for the American flag." }
    ],
    seoMeta: { title: "Official US Flag Dimensions Calculator", description: "Calculate standard US Flag proportions.", keywords: "american flag dimensions, us flag calculator" }
  },
  {
    id: "gender-pay-gap-calculator",
    name: "Gender Pay Gap Calculator",
    description: "Calculate the percent difference in median hourly earnings between male and female cohorts.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Pay Gap} = \\frac{\\text{Male Pay} - \\text{Female Pay}}{\\text{Male Pay}} \\times 100",
    inputs: [
      { id: "male", label: "Male Median Hourly Wage ($)", type: "number", defaultValue: 25 },
      { id: "female", label: "Female Median Hourly Wage ($)", type: "number", defaultValue: 21 }
    ],
    outputs: [
      { id: "gap_percent", label: "Gender Pay Gap", formula: "((male - female) / male) * 100", unit: "%" },
      { id: "earnings_ratio", label: "Earnings Ratio", formula: "female / male", unit: ": 1" }
    ],
    theory: "The gender pay gap is a macro-economic metric representing the difference between median wages of men and women.",
    faq: [
      { question: "What does the earnings ratio mean?", answer: "An earnings ratio of 0.84 means female employees earn $0.84 for every dollar earned by male employees in Comparable brackets." }
    ],
    seoMeta: { title: "Gender Pay Gap and Parity Calculator", description: "Calculate pay gaps and relative earnings statistics.", keywords: "gender pay gap, pay parity, wage ratio" }
  },
  {
    id: "cost-hiring-expert-vs-fresher",
    name: "Cost of Hiring an Expert vs. Hiring a Fresher Calculator",
    description: "Compare fully loaded first-year hiring costs.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Total Cost} = \\text{Salaries} + \\text{Training} + \\text{Productivity Loss during Ramp-up}",
    inputs: [
      { id: "expert_sal", label: "Expert Monthly Salary ($)", type: "number", defaultValue: 8000 },
      { id: "expert_ramp", label: "Expert Ramp Time (months)", type: "number", defaultValue: 1 },
      { id: "fresher_sal", label: "Fresher Monthly Salary ($)", type: "number", defaultValue: 3500 },
      { id: "fresher_ramp", label: "Fresher Ramp Time (months)", type: "number", defaultValue: 6 },
      { id: "training", label: "Fresher Training/Mentoring Costs ($)", type: "number", defaultValue: 5000 }
    ],
    outputs: [
      { id: "expert_cost_year", label: "Expert Total First Year Cost", formula: "expert_sal * 12 + (expert_ramp * expert_sal * 0.2)", unit: "$" },
      { id: "fresher_cost_year", label: "Fresher Total First Year Cost", formula: "fresher_sal * 12 + training + (fresher_ramp * fresher_sal * 0.5)", unit: "$" },
      { id: "savings", label: "Expert vs Fresher Difference", formula: "(expert_sal * 12 + (expert_ramp * expert_sal * 0.2)) - (fresher_sal * 12 + training + (fresher_ramp * fresher_sal * 0.5))", unit: "$" }
    ],
    theory: "Senior engineers onboard quicker, minimizing productivity gaps compared to junior hires requiring extensive training.",
    faq: [
      { question: "What does the ramp cost multiplier represent?", answer: "It captures the overhead of diminished output and mentor support hours during transition months." }
    ],
    seoMeta: { title: "Cost of Hiring Expert vs Fresher Calculator", description: "Evaluate total loaded first-year costs of senior vs junior hires.", keywords: "hiring cost calculator, senior vs junior cost, human resources" }
  },
  {
    id: "hp-calculator-5e",
    name: "HP Calculator 5e – Dungeons & Dragons",
    description: "Calculate standard Character Hit Points (HP) dynamically.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Total HP} = \\text{Level 1 HP} + \\text{Fixed Average Growth}",
    inputs: [
      { id: "level", label: "Character Level", type: "number", defaultValue: 5 },
      { id: "con", label: "Constitution Score", type: "number", defaultValue: 14 },
      { id: "hit_die", label: "Hit Die (6, 8, 10, 12)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "con_mod", label: "Constitution Modifier", formula: "floor((con - 10) / 2)", unit: "" },
      { id: "hp_fixed", label: "Total HP (Fixed / Average)", formula: "hit_die + floor((con - 10) / 2) + (level - 1) * (floor(hit_die / 2) + 1 + floor((con - 10) / 2))", unit: "HP" }
    ],
    theory: "1st level starts with maximum hit die value. Every subsequent level adds standard fixed class averages, modified by Constitution.",
    faq: [
      { question: "How does Constitution score affect HP?", answer: "Every 2 points above 10 adds +1 to your modifier, directly increasing HP gained per level." }
    ],
    seoMeta: { title: "D&D 5e Character HP Calculator", description: "Calculate total hit points (HP) for D&D characters.", keywords: "dnd hp calculator, hit points 5e, con modifier" }
  },
  {
    id: "matched-betting-calculator",
    name: "Matched Betting Calculator",
    description: "Calculate optimal lay stakes for risk-free matched betting.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "L = \\frac{B \\times O_b}{O_l - \\frac{C}{100}}",
    inputs: [
      { id: "back_bet", label: "Back Bet Amount ($)", type: "number", defaultValue: 10 },
      { id: "back_odds", label: "Back Decimal Odds", type: "number", defaultValue: 2.0 },
      { id: "lay_odds", label: "Lay Decimal Odds (Exchange)", type: "number", defaultValue: 2.05 },
      { id: "comm", label: "Exchange Commission (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "lay_bet", label: "Required Lay Bet", formula: "(back_bet * back_odds) / (lay_odds - (comm / 100))", unit: "$" },
      { id: "liability", label: "Exchange Liability", formula: "((back_bet * back_odds) / (lay_odds - (comm / 100))) * (lay_odds - 1)", unit: "$" },
      { id: "profit", label: "Net Qualifying Loss/Gain", formula: "(back_bet * (back_odds - 1)) - (((back_bet * back_odds) / (lay_odds - (comm / 100))) * (lay_odds - 1))", unit: "$" }
    ],
    theory: "Matched betting leverages betting exchanges to 'lay' against your back selection, locking in a uniform net outcome.",
    faq: [
      { question: "What is exchange liability?", answer: "The amount of money you risk losing at the exchange to back up your lay bet. You must have this balance in your wallet." }
    ],
    seoMeta: { title: "Matched Betting Lay Bet Calculator", description: "Calculate lay bets and liabilities for matched betting.", keywords: "matched betting calculator, lay bet, liability, betting exchange" }
  },
  {
    id: "nanowrimo-calculator",
    name: "NaNoWriMo Calculator",
    description: "Track novel progress and pacing during National Novel Writing Month.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Target Pace} = 1667 \\; \\text{words/day}",
    inputs: [
      { id: "words", label: "Current Word Count", type: "number", defaultValue: 15000 },
      { id: "day", label: "Current Day of November (1-30)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "target_daily", label: "Standard Pace Target", formula: "1667", unit: "words/day" },
      { id: "actual_daily", label: "Your Average Pace", formula: "words / day", unit: "words/day" },
      { id: "required_pace", label: "Required Pace to Finish", formula: "(50000 - words) / (30 - day)", unit: "words/day" },
      { id: "progress", label: "Overall Progress", formula: "(words / 50000) * 100", unit: "%" }
    ],
    theory: "Writing a 50,000-word novel in 30 days requires keeping track of daily pace offsets.",
    faq: [
      { question: "What if I started NaNoWriMo late?", answer: "The required pace adjusts to reflect your remaining days and current word count." }
    ],
    seoMeta: { title: "NaNoWriMo Progress and Pace Calculator", description: "Track your novel writing speed and word counts.", keywords: "nanowrimo calculator, novel word count, writing pace tracker" }
  },
  {
    id: "oxygen-tank-duration-calculator",
    name: "Oxygen Tank Duration Calculator",
    description: "Calculate how long an oxygen tank will last.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Duration} = \\frac{(\\text{Current Pressure} - \\text{Safe Residual}) \\times \\text{Tank Factor}}{\\text{Flow Rate}}",
    inputs: [
      { id: "p", label: "Current Pressure (psi)", type: "number", defaultValue: 2000 },
      { id: "r", label: "Safe Residual Pressure (psi)", type: "number", defaultValue: 200 },
      { id: "f", label: "Tank Factor (e.g. E cylinder = 0.28)", type: "number", defaultValue: 0.28 },
      { id: "flow", label: "Flow Rate (L/min)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "dur", label: "Remaining Duration", formula: "((p - r) * f) / flow", unit: "minutes" }
    ],
    theory: "Medical oxygen cylinders have specific conversion factors depending on their physical volume.",
    faq: [],
    seoMeta: { title: "Oxygen Tank Duration Calculator", description: "Calculate how long an oxygen tank will last.", keywords: "oxygen tank duration calculator" }
  },
  {
    id: "pay-gap-calculator",
    name: "Pay Gap Calculator",
    description: "Compare absolute salary or pay disparities.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Pay Gap} = \\frac{\\text{Higher Pay} - \\text{Lower Pay}}{\\text{Higher Pay}} \\times 100",
    inputs: [
      { id: "higher", label: "Higher Pay Rate ($/hr or $/yr)", type: "number", defaultValue: 30 },
      { id: "lower", label: "Lower Pay Rate ($/hr or $/yr)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "gap", label: "Wage Disparity", formula: "((higher - lower) / higher) * 100", unit: "%" },
      { id: "ratio", label: "Pay Ratio", formula: "lower / higher", unit: ": 1" }
    ],
    theory: "Calculates the gap between any two compensation groups or structural wage brackets.",
    faq: [
      { question: "How does pay gap scale?", answer: "This is a basic structural ratio and does not adjust for seniority, role, or background metrics." }
    ],
    seoMeta: { title: "Pay Gap Disparity Calculator", description: "Compare any two wage brackets easily.", keywords: "pay gap calculator, wage gap, salary ratio" }
  },
  {
    id: "pert-calculator",
    name: "PERT Calculator",
    description: "Calculate expected time using PERT estimation.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "E = \\frac{O + 4M + P}{6}",
    inputs: [
      { id: "o", label: "Optimistic Time", type: "number", defaultValue: 5 },
      { id: "m", label: "Most Likely Time", type: "number", defaultValue: 10 },
      { id: "p", label: "Pessimistic Time", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "e", label: "Expected Time (PERT)", formula: "(o + (4 * m) + p) / 6", unit: "" },
      { id: "sd", label: "Standard Deviation", formula: "(p - o) / 6", unit: "" }
    ],
    theory: "PERT (Program Evaluation and Review Technique) is a project management tool used to calculate a realistic time estimate.",
    faq: [],
    seoMeta: { title: "PERT Calculator", description: "Calculate PERT expected time estimates.", keywords: "pert calculator, project management" }
  },
  {
    id: "pizza-tip-calculator",
    name: "Pizza Tip Calculator",
    description: "Calculate delivery tip.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Tip} = \\text{Total} \\times \\text{Percentage}",
    inputs: [
      { id: "tot", label: "Total Order Price ($)", type: "number", defaultValue: 25 },
      { id: "pct", label: "Tip Percentage (%)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "tip", label: "Tip Amount", formula: "tot * (pct / 100)", unit: "$" },
      { id: "grand", label: "Grand Total", formula: "tot * (1 + (pct / 100))", unit: "$" }
    ],
    theory: "Standard delivery tips typically range from 15% to 20%.",
    faq: [],
    seoMeta: { title: "Pizza Tip Calculator", description: "Calculate tip for pizza delivery.", keywords: "pizza tip calculator" }
  },
  {
    id: "point-buy-calculator-5e",
    name: "Point Buy Calculator 5e",
    description: "D&D 5e Ability Score Point Buy calculator.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Spent} = \\sum \\text{Point Cost}(Attribute)",
    inputs: [
      { id: "str", label: "Strength (8-15)", type: "number", defaultValue: 10 },
      { id: "dex", label: "Dexterity (8-15)", type: "number", defaultValue: 10 },
      { id: "con", label: "Constitution (8-15)", type: "number", defaultValue: 10 },
      { id: "int", label: "Intelligence (8-15)", type: "number", defaultValue: 10 },
      { id: "wis", label: "Wisdom (8-15)", type: "number", defaultValue: 10 },
      { id: "cha", label: "Charisma (8-15)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "spent", label: "Points Spent", formula: "(str - 8 + (str >= 14 ? 1 : 0) + (str >= 15 ? 1 : 0)) + (dex - 8 + (dex >= 14 ? 1 : 0) + (dex >= 15 ? 1 : 0)) + (con - 8 + (con >= 14 ? 1 : 0) + (con >= 15 ? 1 : 0)) + (int - 8 + (int >= 14 ? 1 : 0) + (int >= 15 ? 1 : 0)) + (wis - 8 + (wis >= 14 ? 1 : 0) + (wis >= 15 ? 1 : 0)) + (cha - 8 + (cha >= 14 ? 1 : 0) + (cha >= 15 ? 1 : 0))", unit: "pts" },
      { id: "remaining", label: "Points Remaining", formula: "27 - ((str - 8 + (str >= 14 ? 1 : 0) + (str >= 15 ? 1 : 0)) + (dex - 8 + (dex >= 14 ? 1 : 0) + (dex >= 15 ? 1 : 0)) + (con - 8 + (con >= 14 ? 1 : 0) + (con >= 15 ? 1 : 0)) + (int - 8 + (int >= 14 ? 1 : 0) + (int >= 15 ? 1 : 0)) + (wis - 8 + (wis >= 14 ? 1 : 0) + (wis >= 15 ? 1 : 0)) + (cha - 8 + (cha >= 14 ? 1 : 0) + (cha >= 15 ? 1 : 0)))", unit: "pts" }
    ],
    theory: "Point buy budgeting lets you scale character attributes from base 8s up to 15s using a starting bank of 27 points.",
    faq: [
      { question: "What is the point buy limit?", answer: "You cannot buy scores below 8 or above 15 before racial or feat bonuses are applied." }
    ],
    seoMeta: { title: "D&D 5e Point Buy Calculator", description: "Design D&D character stats with point-buy rules.", keywords: "point buy 5e, ability scores, stats builder" }
  },
  {
    id: "poker-ev-calculator",
    name: "Poker EV Calculator",
    description: "Calculate Expected Value in Poker.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{EV} = (\\%W \\times \\text{Pot}) - (\\%L \\times \\text{Call Amount})",
    inputs: [
      { id: "w", label: "Win Probability (%)", type: "number", defaultValue: 25 },
      { id: "pot", label: "Current Pot Size ($)", type: "number", defaultValue: 100 },
      { id: "call", label: "Amount to Call ($)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "ev", label: "Expected Value (EV)", formula: "((w / 100) * pot) - (((100 - w) / 100) * call)", unit: "$" }
    ],
    theory: "If the EV is positive, the play will make money in the long run. If negative, it loses money.",
    faq: [],
    seoMeta: { title: "Poker EV Calculator", description: "Calculate Expected Value in poker hands.", keywords: "poker ev calculator" }
  },
  {
    id: "poker-odds-calculator",
    name: "Poker Odds Calculator",
    description: "Calculate hand odds and probabilities in Texas Hold'em.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Odds} = \\frac{\\text{Outs}}{\\text{Remaining Unknown Cards}}",
    inputs: [
      { id: "outs", label: "Winning Outs", type: "number", defaultValue: 9 },
      { id: "cards", label: "Remaining Unknown Cards (Turn=47, River=46)", type: "number", defaultValue: 47 }
    ],
    outputs: [
      { id: "odds_percent", label: "Probability of Hitting", formula: "(outs / cards) * 100", unit: "%" },
      { id: "odds_ratio", label: "Ratio Odds", formula: "(cards - outs) / outs", unit: "to 1" }
    ],
    theory: "By knowing your card outs, you can calculate the exact ratio of hitting drawing hands compared to folding.",
    faq: [
      { question: "How many outs are standard for flush and open-ended straight draws?", answer: "Flush draws have 9 outs, open-ended straight draws have 8 outs." }
    ],
    seoMeta: { title: "Poker Odds & Outs Calculator", description: "Calculate drawing odds and equity ratios.", keywords: "poker odds calculator, card outs, Texas Hold'em" }
  },
  {
    id: "rounds-per-minute-calculator",
    name: "Rounds per Minute Calculator",
    description: "Calculate RPM of a firearm.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{RPM} = \\frac{\\text{Rounds}}{\\text{Seconds}} \\times 60",
    inputs: [
      { id: "r", label: "Rounds Fired", type: "number", defaultValue: 30 },
      { id: "s", label: "Time Taken (s)", type: "number", defaultValue: 2.5 }
    ],
    outputs: [
      { id: "rpm", label: "Rounds Per Minute", formula: "(r / s) * 60", unit: "RPM" }
    ],
    theory: "Determines the cyclic rate of fire.",
    faq: [],
    seoMeta: { title: "Rounds Per Minute Calculator", description: "Calculate firearm RPM.", keywords: "rounds per minute calculator" }
  },
  {
    id: "salt-dough-calculator",
    name: "Salt Dough Calculator",
    description: "Calculate ingredient weights for standard salt crafting dough.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "2 : 1 : 1 \\; (Flour : Salt : Water)",
    inputs: [
      { id: "flour", label: "Target Flour Weight (grams)", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "salt", label: "Required Salt", formula: "flour / 2", unit: "g" },
      { id: "water", label: "Required Water", formula: "flour / 2", unit: "g (ml)" },
      { id: "total", label: "Total Dough Weight", formula: "flour * 2", unit: "g" }
    ],
    theory: "Salt dough crafts use a perfect mathematical ratio of 2 parts flour to 1 part salt and 1 part water to ensure flexibility and baking hardness.",
    faq: [
      { question: "Can I use table salt?", answer: "Yes, standard table salt is perfect for standard crafting dough." }
    ],
    seoMeta: { title: "Salt Dough Ratio Calculator", description: "Calculate flour and salt proportions for crafts.", keywords: "salt dough recipe, crafting dough" }
  },
  {
    id: "sandbox-calculator",
    name: "Sandbox Calculator",
    description: "Estimate sand volume and weight for a play sandbox.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "V = L \\times W \\times D",
    inputs: [
      { id: "l", label: "Length (feet)", type: "number", defaultValue: 5 },
      { id: "w", label: "Width (feet)", type: "number", defaultValue: 5 },
      { id: "d", label: "Sand Depth (inches)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "vol_cu", label: "Total Volume", formula: "l * w * (d / 12)", unit: "cu ft" },
      { id: "bags", label: "Required 50lb Bags", formula: "ceil(l * w * (d / 12) * 100 / 50)", unit: "bags" },
      { id: "weight", label: "Total Sand Weight", formula: "l * w * (d / 12) * 100", unit: "lbs" }
    ],
    theory: "Play sand has an average dry bulk density of approximately 100 lbs per cubic foot.",
    faq: [
      { question: "How deep should children's sandboxes be?", answer: "An 8-inch depth is ideal for general play and digging comfort." }
    ],
    seoMeta: { title: "Sandbox Sand Volume Calculator", description: "Determine bags of sand needed to fill a sandbox.", keywords: "sandbox calculator, sand weight" }
  },
  {
    id: "dating-theory-calculator",
    name: "Dating Theory Calculator",
    description: "Calculate standard dating boundaries using the 'half-your-age-plus-seven' rule.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Age Limit} = \\frac{Age}{2} + 7",
    inputs: [
      { id: "age", label: "Your Age", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "min_age", label: "Minimum Partner Age", formula: "floor(age / 2) + 7", unit: "years old" },
      { id: "max_age", label: "Maximum Partner Age", formula: "(age - 7) * 2", unit: "years old" }
    ],
    theory: "The standard social benchmark defines acceptable dating age spreads relative to your own maturity tier.",
    faq: [
      { question: "What is the origin of this rule?", answer: "It has appeared in French and English novels since the late 19th century as a rule of thumb for age spreads." }
    ],
    seoMeta: { title: "Dating Age Limit Calculator", description: "Calculate relationship age limits by the half age plus 7 rule.", keywords: "dating theory, age gap calculator" }
  },
  {
    id: "streaming-services-royalties-calculator",
    name: "Streaming Services' Royalties Calculator",
    description: "Estimate music streaming revenue.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Revenue} = \\text{Streams} \\times \\text{Rate per Stream}",
    inputs: [
      { id: "s", label: "Total Streams", type: "number", defaultValue: 1000000 }
    ],
    outputs: [
      { id: "spot", label: "Spotify (Approx $0.004)", formula: "s * 0.004", unit: "$" },
      { id: "am", label: "Apple Music (Approx $0.007)", formula: "s * 0.007", unit: "$" },
      { id: "yt", label: "YouTube (Approx $0.002)", formula: "s * 0.002", unit: "$" }
    ],
    theory: "Payout rates vary wildly depending on listener location, subscription tier, and platform.",
    faq: [],
    seoMeta: { title: "Streaming Royalties Calculator", description: "Estimate Spotify and Apple Music royalties.", keywords: "streaming royalties calculator" }
  },
  {
    id: "tip-calculator",
    name: "TIP CALCULATOR",
    description: "Standard tip calculator.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Tip} = \\text{Bill} \\times \\text{Percentage}",
    inputs: [
      { id: "bill", label: "Bill Amount ($)", type: "number", defaultValue: 100 },
      { id: "pct", label: "Tip Percentage (%)", type: "number", defaultValue: 20 },
      { id: "split", label: "Split Between (People)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "tip", label: "Total Tip", formula: "bill * (pct / 100)", unit: "$" },
      { id: "tot", label: "Total Bill", formula: "bill * (1 + (pct / 100))", unit: "$" },
      { id: "per", label: "Cost Per Person", formula: "(bill * (1 + (pct / 100))) / split", unit: "$" }
    ],
    theory: "A standard tool for calculating dining gratuity.",
    faq: [],
    seoMeta: { title: "Tip Calculator", description: "Calculate tips and split bills.", keywords: "tip calculator, bill splitter" }
  },
  {
    id: "tip-from-net-price-calculator",
    name: "Tip from Net Price Calculator",
    description: "Calculate tipping values based on pre-tax net bill amounts.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Tip} = \\text{Net Price} \\times \\text{Tip Percentage}",
    inputs: [
      { id: "net", label: "Net Price (Pre-Tax) ($)", type: "number", defaultValue: 80 },
      { id: "tax", label: "Taxes & Service Surcharges ($)", type: "number", defaultValue: 8 },
      { id: "tip_pct", label: "Tip Percentage (%)", type: "number", defaultValue: 18 }
    ],
    outputs: [
      { id: "tip", label: "Calculated Tip", formula: "net * (tip_pct / 100)", unit: "$" },
      { id: "total", label: "Grand Total", formula: "net + tax + (net * (tip_pct / 100))", unit: "$" }
    ],
    theory: "Tipping etiquettes recommend computing tips purely from net sales before local taxes are added.",
    faq: [
      { question: "Why should I tip on the pre-tax total?", answer: "Tax rates vary by county and are state levies, which are unrelated to server labor or quality." }
    ],
    seoMeta: { title: "Pre-Tax Tip Calculator", description: "Calculate dining tip before tax has been added.", keywords: "tip on net price, pre tax tip" }
  },
  {
    id: "travel-expenses",
    name: "Travel Expenses",
    description: "Budget complete fuel and lodging travel costs.",
    category: "other",
    subcategory: "miscellaneous-other",
    scientificFormula: "\\text{Cost} = \\left(\\frac{\\text{Distance}}{\\text{MPG}} \\times \\text{Gas Price}\\right) + (\\text{Lodging} \\times \\text{Days})",
    inputs: [
      { id: "dist", label: "Travel Distance (miles)", type: "number", defaultValue: 300 },
      { id: "mpg", label: "Vehicle Fuel Efficiency (MPG)", type: "number", defaultValue: 25 },
      { id: "gas", label: "Gas Price ($/gallon)", type: "number", defaultValue: 3.50 },
      { id: "lodging", label: "Daily Stay & Food Costs ($)", type: "number", defaultValue: 150 },
      { id: "days", label: "Trip Duration (Days)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "fuel_cost", label: "Estimated Fuel Cost", formula: "(dist / mpg) * gas", unit: "$" },
      { id: "other_cost", label: "Lodging & Stay Cost", formula: "lodging * days", unit: "$" },
      { id: "total", label: "Total Estimated Travel Cost", formula: "((dist / mpg) * gas) + (lodging * days)", unit: "$" }
    ],
    theory: "Travel calculators combine linear distance logisitics with fixed daily boarding rates to estimate vacation expenses.",
    faq: [
      { question: "How speed impacts fuel efficiency?", answer: "Speeds above 60 MPH reduce standard vehicle fuel efficiency rapidly due to aerodynamic drag." }
    ],
    seoMeta: { title: "Road Trip Travel Cost Calculator", description: "Budget fuel and boarding costs for your next trip.", keywords: "travel expenses calculator, fuel cost, trip planner" }
  }
];
