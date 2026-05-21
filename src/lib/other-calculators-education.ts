import { CalculatorConfig } from "./calculator-types";

export const OTHER_CALCULATORS_EDUCATION: CalculatorConfig[] = [
  {
    id: "act-score-calculator", name: "ACT Score Calculator", description: "Calculate your composite ACT score from section scores.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Composite} = \\text{Round}\\left(\\frac{E + M + R + S}{4}\\right)",
    inputs: [
      { id: "e", label: "English Score (1-36)", type: "number", defaultValue: 28 },
      { id: "m", label: "Math Score (1-36)", type: "number", defaultValue: 27 },
      { id: "r", label: "Reading Score (1-36)", type: "number", defaultValue: 29 },
      { id: "s", label: "Science Score (1-36)", type: "number", defaultValue: 26 }
    ],
    outputs: [
      { id: "composite", label: "Composite Score", formula: "round((e + m + r + s) / 4)", unit: "" }
    ],
    theory: "The ACT composite score is the average of the four multiple-choice sections (English, Math, Reading, Science), rounded to the nearest whole number. Fractions of 0.5 or higher are rounded up.",
    faq: [{ question: "Is the writing section included?", answer: "No, the optional Writing section score is reported separately and does not affect the composite score." }],
    seoMeta: { title: "ACT Score Calculator", description: "Calculate your ACT composite score from your English, Math, Reading, and Science scores.", keywords: "act score, composite act, act calculator" }
  },
  {
    id: "classroom-spacing-calculator", name: "Classroom Spacing Calculator", description: "Determine the maximum number of desks that can fit in a room while maintaining social distancing.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Max Desks} = \\left\\lfloor\\frac{W}{D}\\right\\rfloor \\times \\left\\lfloor\\frac{L}{D}\\right\\rfloor",
    inputs: [
      { id: "w", label: "Room Width", type: "number", defaultValue: 30, unit: "ft" },
      { id: "l", label: "Room Length", type: "number", defaultValue: 30, unit: "ft" },
      { id: "d", label: "Distance Between Desks", type: "number", defaultValue: 6, unit: "ft" }
    ],
    outputs: [
      { id: "desks", label: "Maximum Desks", formula: "floor(w / d) * floor(l / d)", unit: "desks" }
    ],
    theory: "This simple model assumes a grid layout where each desk occupies a square cell with side length equal to the required social distance.",
    faq: [{ question: "Does this account for teacher space?", answer: "No, you should subtract the teacher's area from the total room dimensions before calculating." }],
    seoMeta: { title: "Classroom Spacing Calculator", description: "Calculate social distancing capacity for classrooms.", keywords: "classroom spacing, social distance calculator" }
  },
  {
    id: "college-gpa-calculator", name: "College GPA Calculator", description: "Calculate your current College GPA based on grade points and credits.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{GPA} = \\frac{\\sum (\\text{Grade Point} \\times \\text{Credits})}{\\sum \\text{Credits}}",
    inputs: [
      { id: "g1", label: "Class 1 Grade (0-4.0)", type: "number", defaultValue: 4.0 },
      { id: "c1", label: "Class 1 Credits", type: "number", defaultValue: 3 },
      { id: "g2", label: "Class 2 Grade (0-4.0)", type: "number", defaultValue: 3.0 },
      { id: "c2", label: "Class 2 Credits", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "gpa", label: "College GPA", formula: "((g1 * c1) + (g2 * c2)) / (c1 + c2)", unit: "" }
    ],
    theory: "GPA (Grade Point Average) is a weighted average where each class grade is multiplied by its credit hours, and the sum is divided by the total credit hours.",
    faq: [],
    seoMeta: { title: "College GPA Calculator", description: "Calculate your college grade point average.", keywords: "college gpa calculator, grade point average" }
  },
  {
    id: "final-grade-calculator", name: "Final Grade Calculator", description: "Find out what grade you need on your final exam to achieve a target class grade.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Final} = \\frac{\\text{Target} - (\\text{Current} \\times (1 - W))}{W}",
    inputs: [
      { id: "current", label: "Current Grade (%)", type: "number", defaultValue: 85 },
      { id: "target", label: "Target Grade (%)", type: "number", defaultValue: 90 },
      { id: "weight", label: "Final Exam Weight (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "needed", label: "Grade Needed on Final", formula: "(target - (current * (1 - (weight/100)))) / (weight/100)", unit: "%" }
    ],
    theory: "Your final class grade is a weighted sum of your current grade and your final exam score.",
    faq: [{ question: "What if the required grade is over 100?", answer: "This means it is mathematically impossible to achieve your target grade without extra credit." }],
    seoMeta: { title: "Final Grade Calculator", description: "Calculate what you need on your final exam to get your target grade.", keywords: "final grade calculator, what do i need on my final" }
  },
  {
    id: "gpa-calculator", name: "GPA Calculator", description: "Calculate standard Grade Point Average.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{GPA} = \\frac{\\text{Total Grade Points}}{\\text{Total Credits}}",
    inputs: [
      { id: "pts", label: "Total Grade Points", type: "number", defaultValue: 45 },
      { id: "cr", label: "Total Credits", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "gpa", label: "GPA", formula: "pts / cr", unit: "" }
    ],
    theory: "A straightforward GPA calculation if you already know your total grade points and credits.",
    faq: [],
    seoMeta: { title: "Standard GPA Calculator", description: "Quickly calculate your GPA from total points and credits.", keywords: "gpa calculator" }
  },
  {
    id: "gpa-calculator-pakistan", name: "GPA Calculator Pakistan", description: "Calculate GPA according to Pakistani university grading systems.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{GPA} = \\frac{\\sum (\\text{GP} \\times \\text{CH})}{\\sum \\text{CH}}",
    inputs: [
      { id: "m1", label: "Subject 1 Marks (%)", type: "number", defaultValue: 85 },
      { id: "c1", label: "Subject 1 Credit Hours", type: "number", defaultValue: 3 },
      { id: "m2", label: "Subject 2 Marks (%)", type: "number", defaultValue: 72 },
      { id: "c2", label: "Subject 2 Credit Hours", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "gpa", label: "Approximate GPA (out of 4.0)", formula: "(((m1/100)*4*c1) + ((m2/100)*4*c2)) / (c1 + c2)", unit: "" }
    ],
    theory: "Different universities have different scales, but a common approximation maps percentage marks linearly to a 4.0 scale for estimation purposes.",
    faq: [],
    seoMeta: { title: "GPA Calculator Pakistan", description: "Calculate GPA for Pakistani universities.", keywords: "pakistan gpa calculator, hec gpa" }
  },
  {
    id: "grade-calculator", name: "Grade Calculator", description: "Calculate a weighted class grade from multiple assignments.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Grade} = \\sum (\\text{Score}_i \\times \\text{Weight}_i)",
    inputs: [
      { id: "s1", label: "Assignment 1 Score (%)", type: "number", defaultValue: 90 },
      { id: "w1", label: "Assignment 1 Weight (%)", type: "number", defaultValue: 40 },
      { id: "s2", label: "Assignment 2 Score (%)", type: "number", defaultValue: 80 },
      { id: "w2", label: "Assignment 2 Weight (%)", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "grade", label: "Overall Grade", formula: "(s1 * (w1/100)) + (s2 * (w2/100))", unit: "%" }
    ],
    theory: "Calculates the weighted average of multiple assignments to determine your final standing.",
    faq: [],
    seoMeta: { title: "Grade Calculator", description: "Calculate your weighted grade for a class.", keywords: "grade calculator, weighted grade" }
  },
  {
    id: "grade-curve-calculator", name: "Grade Curve Calculator", description: "Apply a flat curve or square root curve to a test score.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Root Curve} = 10 \\times \\sqrt{\\text{Raw Score}}",
    inputs: [
      { id: "raw", label: "Raw Score (%)", type: "number", defaultValue: 64 },
      { id: "flat", label: "Flat Curve Points", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "curved_flat", label: "Flat Curve Score", formula: "raw + flat", unit: "%" },
      { id: "curved_root", label: "Square Root Curve Score", formula: "10 * sqrt(raw)", unit: "%" }
    ],
    theory: "The square root curve significantly helps lower scores. For example, a raw score of 36 becomes a 60.",
    faq: [],
    seoMeta: { title: "Grade Curve Calculator", description: "Calculate curved test grades using flat or square root methods.", keywords: "grade curve calculator, square root curve" }
  },
  {
    id: "graduation-year-calculator", name: "Graduation Year Calculator", description: "Determine your graduation year based on your current grade.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Grad Year} = \\text{Current Year} + (12 - \\text{Current Grade})",
    inputs: [
      { id: "yr", label: "Current Year", type: "number", defaultValue: 2026 },
      { id: "gr", label: "Current Grade (1-12)", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "grad", label: "High School Graduation Year", formula: "yr + (12 - gr)", unit: "" },
      { id: "col", label: "College Graduation Year (4 yr)", formula: "yr + (12 - gr) + 4", unit: "" }
    ],
    theory: "Simple addition based on the US K-12 system.",
    faq: [],
    seoMeta: { title: "Graduation Year Calculator", description: "Calculate what year you will graduate high school or college.", keywords: "graduation year calculator" }
  },
  {
    id: "gwa-calculator", name: "GWA Calculator – General Weighted Average", description: "Calculate your GWA, commonly used in the Philippines.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{GWA} = \\frac{\\sum (\\text{Grade} \\times \\text{Units})}{\\sum \\text{Units}}",
    inputs: [
      { id: "g1", label: "Subject 1 Grade (e.g. 1.0, 1.25)", type: "number", defaultValue: 1.25 },
      { id: "u1", label: "Subject 1 Units", type: "number", defaultValue: 3 },
      { id: "g2", label: "Subject 2 Grade", type: "number", defaultValue: 1.50 },
      { id: "u2", label: "Subject 2 Units", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "gwa", label: "GWA", formula: "((g1 * u1) + (g2 * u2)) / (u1 + u2)", unit: "" }
    ],
    theory: "In the Philippines, grades are often inverted (1.0 is Excellent, 3.0 is Passing). A lower GWA is better.",
    faq: [],
    seoMeta: { title: "GWA Calculator", description: "Calculate your General Weighted Average.", keywords: "gwa calculator, general weighted average philippines" }
  },
  {
    id: "high-school-gpa-calculator", name: "High School GPA Calculator", description: "Calculate high school GPA, including weighted AP/Honors classes.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{GPA} = \\frac{\\text{Standard Points} + \\text{Bonus Points}}{\\text{Total Classes}}",
    inputs: [
      { id: "a", label: "Number of A's", type: "number", defaultValue: 4 },
      { id: "b", label: "Number of B's", type: "number", defaultValue: 2 },
      { id: "ap", label: "Number of AP/Honors Classes (bonus +1)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "unweighted", label: "Unweighted GPA", formula: "((a * 4) + (b * 3)) / (a + b)", unit: "" },
      { id: "weighted", label: "Weighted GPA", formula: "(((a * 4) + (b * 3)) + ap) / (a + b)", unit: "" }
    ],
    theory: "Weighted GPAs add an extra point (e.g., A = 5.0 instead of 4.0) for rigorous classes like AP or IB.",
    faq: [],
    seoMeta: { title: "High School GPA Calculator", description: "Calculate weighted and unweighted high school GPA.", keywords: "high school gpa calculator, weighted gpa" }
  },
  {
    id: "ielts-score-calculator", name: "IELTS Score Calculator", description: "Calculate overall IELTS band score from reading, writing, listening, and speaking.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Overall Band} = \\text{RoundHalf}\\left(\\frac{R + W + L + S}{4}\\right)",
    inputs: [
      { id: "l", label: "Listening Band", type: "number", defaultValue: 7.5 },
      { id: "r", label: "Reading Band", type: "number", defaultValue: 8.0 },
      { id: "w", label: "Writing Band", type: "number", defaultValue: 6.5 },
      { id: "s", label: "Speaking Band", type: "number", defaultValue: 7.0 }
    ],
    outputs: [
      { id: "avg", label: "Average Score", formula: "(l + r + w + s) / 4", unit: "" },
      { id: "band", label: "Overall Band (Estimated)", formula: "round(((l + r + w + s) / 4) * 2) / 2", unit: "" }
    ],
    theory: "The overall band is the average of the 4 sections rounded to the nearest half or whole band.",
    faq: [],
    seoMeta: { title: "IELTS Score Calculator", description: "Calculate your overall IELTS band score.", keywords: "ielts calculator, ielts band score" }
  },
  {
    id: "impact-factor-calculator", name: "Impact Factor Calculator", description: "Calculate the Impact Factor of an academic journal.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{IF}_{year} = \\frac{\\text{Citations in year to items published in previous 2 years}}{\\text{Total items published in previous 2 years}}",
    inputs: [
      { id: "cit", label: "Citations (in current year)", type: "number", defaultValue: 500 },
      { id: "pub", label: "Total Articles Published (previous 2 yrs)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "if", label: "Impact Factor", formula: "cit / pub", unit: "" }
    ],
    theory: "Impact Factor measures the frequency with which the average article in a journal has been cited in a particular year.",
    faq: [],
    seoMeta: { title: "Impact Factor Calculator", description: "Calculate the impact factor of a journal.", keywords: "impact factor calculator, academic citations" }
  },
  {
    id: "pte-score-calculator", name: "PTE Score Calculator", description: "Estimate PTE overall score from communicative skills.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{PTE Overall} = \\text{Average(L, R, S, W)}",
    inputs: [
      { id: "l", label: "Listening", type: "number", defaultValue: 75 },
      { id: "r", label: "Reading", type: "number", defaultValue: 80 },
      { id: "s", label: "Speaking", type: "number", defaultValue: 70 },
      { id: "w", label: "Writing", type: "number", defaultValue: 72 }
    ],
    outputs: [
      { id: "pte", label: "Estimated Overall Score", formula: "(l + r + s + w) / 4", unit: "" }
    ],
    theory: "The PTE overall score is generally the average of the four communicative skills.",
    faq: [],
    seoMeta: { title: "PTE Score Calculator", description: "Estimate your Pearson Test of English (PTE) overall score.", keywords: "pte score calculator, pte academic" }
  },
  {
    id: "semester-grade-calculator", name: "Semester Grade Calculator", description: "Calculate your semester grade from quarters and finals.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Semester} = (Q1 \\times w_1) + (Q2 \\times w_2) + (E \\times w_3)",
    inputs: [
      { id: "q1", label: "Quarter 1 (%)", type: "number", defaultValue: 85 },
      { id: "q2", label: "Quarter 2 (%)", type: "number", defaultValue: 90 },
      { id: "e", label: "Exam (%)", type: "number", defaultValue: 80 },
      { id: "wq", label: "Quarter Weight (each %)", type: "number", defaultValue: 40 },
      { id: "we", label: "Exam Weight (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "sem", label: "Semester Grade", formula: "(q1 * (wq/100)) + (q2 * (wq/100)) + (e * (we/100))", unit: "%" }
    ],
    theory: "Semester grades are typically weighted sums of individual grading periods and cumulative exams.",
    faq: [],
    seoMeta: { title: "Semester Grade Calculator", description: "Calculate your final semester grade from your quarter grades and exam.", keywords: "semester grade calculator" }
  },
  {
    id: "test-grade-calculator", name: "Test Grade Calculator", description: "Calculate test percentage based on questions missed.",
    category: "other", subcategory: "education",
    scientificFormula: "\\text{Score} = \\frac{\\text{Total} - \\text{Missed}}{\\text{Total}} \\times 100",
    inputs: [
      { id: "tot", label: "Total Questions", type: "number", defaultValue: 50 },
      { id: "miss", label: "Questions Missed", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "score", label: "Test Score", formula: "((tot - miss) / tot) * 100", unit: "%" },
      { id: "correct", label: "Questions Correct", formula: "tot - miss", unit: "" }
    ],
    theory: "Simply divide the number of correct answers by the total number of questions to get the percentage score.",
    faq: [],
    seoMeta: { title: "Test Grade Calculator", description: "Easily grade tests by calculating the percentage score.", keywords: "test grade calculator, easy grader" }
  }
];
