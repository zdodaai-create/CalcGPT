import { CalculatorConfig } from "./calculator-types";

export const MATH_CALCULATORS: CalculatorConfig[] = [
  {
    id: "average-percentage-calculator",
    name: "Average Percentage Calculator",
    description: "Calculate the average of multiple percentages.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Avg = \\frac{\\sum P_i}{N}",
    inputs: [
      { id: "p1", label: "Percentage 1 (%)", type: "number", defaultValue: 50 },
      { id: "p2", label: "Percentage 2 (%)", type: "number", defaultValue: 75 }
    ],
    outputs: [
      { id: "avg", label: "Average Percentage", formula: "(p1 + p2) / 2", unit: "%" }
    ],
    theory: "The simple average is the sum of percentages divided by the total number of percentages.",
    seoMeta: { title: "Average Percentage", description: "Calculate average percentage.", keywords: "average, percentage" }
  },
  {
    id: "fraction-to-percent-calculator",
    name: "Fraction to Percent Calculator",
    description: "Convert a fraction to a percentage.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Percent = \\frac{Numerator}{Denominator} \\times 100",
    inputs: [
      { id: "num", label: "Numerator", type: "number", defaultValue: 3 },
      { id: "den", label: "Denominator", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "percent", label: "Percentage", formula: "(num / den) * 100", unit: "%" }
    ],
    theory: "Multiply the fraction's value by 100 to get the percentage.",
    seoMeta: { title: "Fraction to Percent", description: "Convert fraction to percent.", keywords: "fraction, percent" }
  },
  {
    id: "decimal-to-percent-converter",
    name: "Decimal to Percent Converter",
    description: "Convert a decimal value to a percentage.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Percent = Decimal \\times 100",
    inputs: [
      { id: "dec", label: "Decimal Value", type: "number", defaultValue: 0.75 }
    ],
    outputs: [
      { id: "percent", label: "Percentage", formula: "dec * 100", unit: "%" }
    ],
    theory: "Multiply a decimal by 100 to convert it into a percentage.",
    seoMeta: { title: "Decimal to Percent", description: "Convert decimal to percent.", keywords: "decimal, percent" }
  },
  {
    id: "doubling-time-calculator",
    name: "Doubling Time Calculator",
    description: "Calculate time required to double a quantity at a constant growth rate.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "t = \\frac{\\ln(2)}{\\ln(1 + r)} \\approx \\frac{70}{r}",
    inputs: [
      { id: "rate", label: "Growth Rate per period (%)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "time", label: "Doubling Time", formula: "Math.log(2) / Math.log(1 + (rate/100))", unit: "periods" }
    ],
    theory: "Based on the rule of 72 or exact logarithmic calculation for exponential growth.",
    seoMeta: { title: "Doubling Time", description: "Calculate doubling time.", keywords: "doubling time, growth" }
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate what X% of Y is.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Result = \\frac{X}{100} \\times Y",
    inputs: [
      { id: "x", label: "Percentage (%)", type: "number", defaultValue: 20 },
      { id: "y", label: "Value", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "(x / 100) * y", unit: "" }
    ],
    theory: "A straightforward calculation to find a specific part of a whole.",
    seoMeta: { title: "Percentage Calculator", description: "Calculate X percent of Y.", keywords: "percentage" }
  },
  {
    id: "percentage-change-calculator",
    name: "Percentage Change Calculator",
    description: "Calculate the percentage change between two values.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Change = \\frac{New - Old}{|Old|} \\times 100",
    inputs: [
      { id: "old_val", label: "Old Value", type: "number", defaultValue: 100 },
      { id: "new_val", label: "New Value", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "change", label: "Percentage Change", formula: "((new_val - old_val) / Math.abs(old_val)) * 100", unit: "%" }
    ],
    theory: "A positive value indicates an increase, while a negative value indicates a decrease.",
    seoMeta: { title: "Percentage Change", description: "Calculate percentage change.", keywords: "percentage change" }
  },
  {
    id: "percentage-decrease-calculator",
    name: "Percentage Decrease Calculator",
    description: "Calculate the percentage decrease from one value to another.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Decrease = \\frac{Old - New}{Old} \\times 100",
    inputs: [
      { id: "old_val", label: "Original Value", type: "number", defaultValue: 150 },
      { id: "new_val", label: "Decreased Value", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "decrease", label: "Percentage Decrease", formula: "((old_val - new_val) / old_val) * 100", unit: "%" }
    ],
    theory: "Measures the proportional loss from the original value.",
    seoMeta: { title: "Percentage Decrease", description: "Calculate percentage decrease.", keywords: "percentage decrease" }
  },
  {
    id: "percentage-difference-calculator",
    name: "Percentage Difference Calculator",
    description: "Calculate the percentage difference between two numbers.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Diff = \\frac{|a - b|}{(a + b)/2} \\times 100",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 100 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "diff", label: "Percentage Difference", formula: "(Math.abs(v1 - v2) / ((v1 + v2) / 2)) * 100", unit: "%" }
    ],
    theory: "Used when both values mean the same kind of thing.",
    seoMeta: { title: "Percentage Difference", description: "Calculate percentage difference.", keywords: "percentage difference" }
  },
  {
    id: "percentage-increase-calculator",
    name: "Percentage Increase Calculator",
    description: "Calculate the percentage increase from one value to another.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Increase = \\frac{New - Old}{Old} \\times 100",
    inputs: [
      { id: "old_val", label: "Original Value", type: "number", defaultValue: 100 },
      { id: "new_val", label: "Increased Value", type: "number", defaultValue: 130 }
    ],
    outputs: [
      { id: "increase", label: "Percentage Increase", formula: "((new_val - old_val) / old_val) * 100", unit: "%" }
    ],
    theory: "Measures the proportional gain relative to the original value.",
    seoMeta: { title: "Percentage Increase", description: "Calculate percentage increase.", keywords: "percentage increase" }
  },
  {
    id: "percentage-increase-classic",
    name: "Percentage Increase Classic",
    description: "Calculate the final value after a percentage increase.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Final = Initial \\times (1 + \\frac{\\%}{100})",
    inputs: [
      { id: "initial", label: "Initial Value", type: "number", defaultValue: 100 },
      { id: "percent", label: "Increase (%)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "final", label: "Final Value", formula: "initial * (1 + (percent / 100))", unit: "" }
    ],
    theory: "Adds the calculated percentage of the initial value to the initial value itself.",
    seoMeta: { title: "Percentage Increase Classic", description: "Final value after increase.", keywords: "percentage increase" }
  },
  {
    id: "percentage-of-a-percentage-calculator",
    name: "Percentage of a Percentage Calculator",
    description: "Calculate a percentage of another percentage.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Result = \\frac{P_1}{100} \\times \\frac{P_2}{100} \\times 100",
    inputs: [
      { id: "p1", label: "First Percentage (%)", type: "number", defaultValue: 50 },
      { id: "p2", label: "Second Percentage (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "result", label: "Combined Percentage", formula: "(p1 / 100) * p2", unit: "%" }
    ],
    theory: "Multiplying two percentages is equivalent to multiplying their decimal forms.",
    seoMeta: { title: "Percentage of a Percentage", description: "Calculate percentage of percentage.", keywords: "percentage of percentage" }
  },
  {
    id: "percentage-point-calculator",
    name: "Percentage Point Calculator",
    description: "Calculate the difference in percentage points.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Points = P_{new} - P_{old}",
    inputs: [
      { id: "p_old", label: "Old Percentage (%)", type: "number", defaultValue: 40 },
      { id: "p_new", label: "New Percentage (%)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "points", label: "Percentage Point Change", formula: "p_new - p_old", unit: "pp" },
      { id: "percent_change", label: "Relative Percent Change", formula: "((p_new - p_old) / p_old) * 100", unit: "%" }
    ],
    theory: "Percentage points refer to the absolute difference between two percentages.",
    seoMeta: { title: "Percentage Point Calculator", description: "Calculate percentage points.", keywords: "percentage points" }
  },
  {
    id: "percent-error-calculator",
    name: "Percent Error Calculator",
    description: "Calculate the percent error of an observed value.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Error = \\frac{|Observed - True|}{|True|} \\times 100",
    inputs: [
      { id: "observed", label: "Observed Value", type: "number", defaultValue: 9.8 },
      { id: "true_val", label: "True Value", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "error", label: "Percent Error", formula: "(Math.abs(observed - true_val) / Math.abs(true_val)) * 100", unit: "%" }
    ],
    theory: "Used to determine how close a measured value is to a theoretical value.",
    seoMeta: { title: "Percent Error Calculator", description: "Calculate percent error.", keywords: "percent error" }
  },
  {
    id: "time-percentage-calculator",
    name: "Time Percentage Calculator",
    description: "Calculate what percentage of a time period has passed.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Percent = \\frac{Elapsed}{Total} \\times 100",
    inputs: [
      { id: "elapsed", label: "Elapsed Time (hours)", type: "number", defaultValue: 2 },
      { id: "total", label: "Total Time (hours)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "percent", label: "Percentage Passed", formula: "(elapsed / total) * 100", unit: "%" }
    ],
    theory: "Simply compares elapsed time to the total time duration.",
    seoMeta: { title: "Time Percentage Calculator", description: "Calculate time percentage.", keywords: "time percentage" }
  },
  {
    id: "percent-to-goal-calculator",
    name: "Percent to Goal Calculator",
    description: "Calculate how close you are to achieving a goal.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Percent = \\frac{Current}{Goal} \\times 100",
    inputs: [
      { id: "current", label: "Current Progress", type: "number", defaultValue: 750 },
      { id: "goal", label: "Goal Amount", type: "number", defaultValue: 1000 }
    ],
    outputs: [
      { id: "percent", label: "Percent to Goal", formula: "(current / goal) * 100", unit: "%" }
    ],
    theory: "A progress indicator relative to the desired target.",
    seoMeta: { title: "Percent to Goal", description: "Calculate progress percentage.", keywords: "percent to goal" }
  },
  {
    id: "relative-change-calculator",
    name: "Relative Change Calculator",
    description: "Calculate the relative change between two numbers.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Relative\\ Change = \\frac{Final - Initial}{|Initial|}",
    inputs: [
      { id: "initial", label: "Initial Value", type: "number", defaultValue: 50 },
      { id: "final", label: "Final Value", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "rel_change", label: "Relative Change", formula: "(final - initial) / Math.abs(initial)", unit: "" },
      { id: "percent", label: "As Percentage", formula: "((final - initial) / Math.abs(initial)) * 100", unit: "%" }
    ],
    theory: "Relative change is the absolute change divided by the absolute initial value.",
    seoMeta: { title: "Relative Change", description: "Calculate relative change.", keywords: "relative change" }
  },
  {
    id: "slope-percentage-calculator",
    name: "Slope Percentage Calculator",
    description: "Calculate the percentage grade of a slope.",
    category: "math",
    subcategory: "percentages",
    scientificFormula: "Grade = \\frac{Rise}{Run} \\times 100",
    inputs: [
      { id: "rise", label: "Rise (Vertical Change)", type: "number", defaultValue: 10 },
      { id: "run", label: "Run (Horizontal Distance)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "grade", label: "Slope Percentage", formula: "(rise / run) * 100", unit: "%" }
    ],
    theory: "Commonly used in road grading and topography to express steepness.",
    seoMeta: { title: "Slope Percentage Calculator", description: "Calculate slope grade.", keywords: "slope percentage, grade" }
  },
  {
    id: "absolute-value-equation-calculator",
    name: "Absolute Value Equation Calculator",
    description: "Solve absolute value equations.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|x| = a \\implies x = a \\text{ or } x = -a",
    inputs: [{ id: "a", label: "Value of a (|x| = a)", type: "number", defaultValue: 5 }],
    outputs: [
      { id: "x1", label: "Solution 1", formula: "a", unit: "" },
      { id: "x2", label: "Solution 2", formula: "-a", unit: "" }
    ],
    theory: "The absolute value of a number is its distance from zero.",
    seoMeta: { title: "Absolute Value Equation Calculator", description: "Solve absolute value equations.", keywords: "absolute value, algebra" }
  },
  {
    id: "absolute-value-inequalities-calculator",
    name: "Absolute Value Inequalities Calculator",
    description: "Solve absolute value inequalities.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|x| < a \\implies -a < x < a",
    inputs: [{ id: "a", label: "Value of a (|x| < a)", type: "number", defaultValue: 5 }],
    outputs: [
      { id: "x1", label: "Lower Bound", formula: "-a", unit: "" },
      { id: "x2", label: "Upper Bound", formula: "a", unit: "" }
    ],
    theory: "Defines an interval centered at zero.",
    seoMeta: { title: "Absolute Value Inequalities Calculator", description: "Solve inequalities.", keywords: "inequalities, algebra" }
  },
  {
    id: "adding-and-subtracting-polynomials-calculator",
    name: "Adding and Subtracting Polynomials Calculator",
    description: "Add or subtract coefficients of polynomials.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "(ax+b) + (cx+d) = (a+c)x + (b+d)",
    inputs: [
      { id: "a", label: "Coefficient 1", type: "number", defaultValue: 2 },
      { id: "b", label: "Coefficient 2", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "sum", label: "Sum of Coefficients", formula: "a + b", unit: "" },
      { id: "diff", label: "Difference", formula: "a - b", unit: "" }
    ],
    theory: "Like terms are combined by adding or subtracting their coefficients.",
    seoMeta: { title: "Polynomials Calculator", description: "Add and subtract polynomials.", keywords: "polynomials, algebra" }
  },
  {
    id: "bessel-function-calculator",
    name: "Bessel Function Calculator",
    description: "Evaluate Bessel functions.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "J_\\alpha(x) = \\sum_{m=0}^{\\infty} \\frac{(-1)^m}{m!\\Gamma(m+\\alpha+1)} {\\left(\\frac{x}{2}\\right)}^{2m+\\alpha}",
    inputs: [{ id: "x", label: "Input value (x)", type: "number", defaultValue: 1 }],
    outputs: [{ id: "approx", label: "Approximation (First term)", formula: "(x/2)", unit: "" }],
    theory: "Bessel functions appear in solutions to differential equations.",
    seoMeta: { title: "Bessel Function Calculator", description: "Calculate Bessel function.", keywords: "Bessel, math" }
  },
  {
    id: "binomial-coefficient-calculator",
    name: "Binomial Coefficient Calculator",
    description: "Calculate n choose k.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
    inputs: [
      { id: "n", label: "n", type: "number", defaultValue: 5 },
      { id: "k", label: "k", type: "number", defaultValue: 2 }
    ],
    outputs: [{ id: "approx", label: "Approximation (Gamma-based)", formula: "Math.exp((n+0.5)*Math.log(n+1) - (k+0.5)*Math.log(k+1) - (n-k+0.5)*Math.log(n-k+1))", unit: "estimate" }],
    theory: "Represents the number of ways to choose k items from a set of n items.",
    seoMeta: { title: "Binomial Coefficient Calculator", description: "Calculate n choose k.", keywords: "binomial coefficient" }
  },
  {
    id: "box-method-calculator",
    name: "Box Method Calculator",
    description: "Multiply polynomials using the box method.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "(a+b)(c+d) = ac + ad + bc + bd",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 2 },
      { id: "c", label: "c", type: "number", defaultValue: 3 },
      { id: "d", label: "d", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "ac", label: "First Term (ac)", formula: "a*c", unit: "" },
      { id: "bd", label: "Last Term (bd)", formula: "b*d", unit: "" }
    ],
    theory: "A visual way to organize the multiplication of polynomials.",
    seoMeta: { title: "Box Method Calculator", description: "Multiply using box method.", keywords: "box method, polynomials" }
  },
  {
    id: "completing-the-square-calculator",
    name: "Completing the Square Calculator",
    description: "Find the constant to complete the square.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x^2 + bx + (\\frac{b}{2})^2 = (x + \\frac{b}{2})^2",
    inputs: [{ id: "b", label: "Coefficient of x (b)", type: "number", defaultValue: 6 }],
    outputs: [{ id: "c", label: "Constant to add (c)", formula: "(b/2) * (b/2)", unit: "" }],
    theory: "Transforms a quadratic polynomial into a perfect square trinomial.",
    seoMeta: { title: "Completing the Square Calculator", description: "Complete the square.", keywords: "completing the square" }
  },
  {
    id: "complex-conjugate-calculator",
    name: "Complex Conjugate Calculator",
    description: "Find the complex conjugate of a + bi.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\overline{a+bi} = a - bi",
    inputs: [
      { id: "a", label: "Real part (a)", type: "number", defaultValue: 3 },
      { id: "b", label: "Imaginary part (b)", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "conj_b", label: "Conjugate Imaginary part", formula: "-b", unit: "i" }],
    theory: "The complex conjugate reflects the number across the real axis.",
    seoMeta: { title: "Complex Conjugate Calculator", description: "Find complex conjugate.", keywords: "complex conjugate" }
  },
  {
    id: "complex-number-calculator",
    name: "Complex Number Calculator",
    description: "Calculate magnitude of a complex number.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|a+bi| = \\sqrt{a^2 + b^2}",
    inputs: [
      { id: "a", label: "Real part (a)", type: "number", defaultValue: 3 },
      { id: "b", label: "Imaginary part (b)", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "mag", label: "Magnitude", formula: "Math.sqrt(a*a + b*b)", unit: "" }],
    theory: "The magnitude is the distance from the origin in the complex plane.",
    seoMeta: { title: "Complex Number Calculator", description: "Calculate magnitude.", keywords: "complex number" }
  },
  {
    id: "complex-root-calculator",
    name: "Complex Root Calculator",
    description: "Find the magnitude of the root.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\sqrt{a+bi}",
    inputs: [
      { id: "a", label: "Real part (a)", type: "number", defaultValue: 3 },
      { id: "b", label: "Imaginary part (b)", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "root_mag", label: "Magnitude of Root", formula: "Math.sqrt(Math.sqrt(a*a + b*b))", unit: "" }],
    theory: "Roots of complex numbers are found using De Moivre's theorem.",
    seoMeta: { title: "Complex Root Calculator", description: "Find complex roots.", keywords: "complex root" }
  },
  {
    id: "cubic-equation-calculator",
    name: "Cubic Equation Calculator",
    description: "Solve a simple cubic equation ax^3 = d.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "ax^3 + bx^2 + cx + d = 0",
    inputs: [
      { id: "a", label: "Coefficient a", type: "number", defaultValue: 1 },
      { id: "d", label: "Constant (d)", type: "number", defaultValue: -8 }
    ],
    outputs: [{ id: "x", label: "Real Root (simple)", formula: "Math.cbrt(-d/a)", unit: "" }],
    theory: "A cubic equation has at least one real root.",
    seoMeta: { title: "Cubic Equation Calculator", description: "Solve cubic equations.", keywords: "cubic equation" }
  },
  {
    id: "descartes-rule-of-signs-calculator",
    name: "Descartes' Rule of Signs Calculator",
    description: "Estimate number of positive roots.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "N_{roots} \\le N_{changes}",
    inputs: [{ id: "changes", label: "Number of sign changes", type: "number", defaultValue: 2 }],
    outputs: [{ id: "max_roots", label: "Max Positive Real Roots", formula: "changes", unit: "roots" }],
    theory: "The number of positive real roots is either equal to the number of sign changes or less than it by an even integer.",
    seoMeta: { title: "Descartes' Rule of Signs", description: "Determine number of roots.", keywords: "Descartes rule of signs" }
  },
  {
    id: "diamond-problem-calculator",
    name: "Diamond Problem Calculator",
    description: "Find two numbers given their sum and product.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x+y = S, \\; x \\times y = P",
    inputs: [
      { id: "s", label: "Sum (S)", type: "number", defaultValue: 5 },
      { id: "p", label: "Product (P)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "x", label: "Number 1", formula: "(s + Math.sqrt(s*s - 4*p)) / 2", unit: "" },
      { id: "y", label: "Number 2", formula: "(s - Math.sqrt(s*s - 4*p)) / 2", unit: "" }
    ],
    theory: "Solves the quadratic equation x^2 - Sx + P = 0.",
    seoMeta: { title: "Diamond Problem Calculator", description: "Solve the diamond problem.", keywords: "diamond problem" }
  },
  {
    id: "direct-variation-calculator",
    name: "Direct Variation Calculator",
    description: "Calculate constant of variation.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "y = kx \\implies k = \\frac{y}{x}",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 5 },
      { id: "y", label: "y", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "k", label: "Constant of Variation (k)", formula: "y / x", unit: "" }],
    theory: "In direct variation, as x increases, y increases proportionally.",
    seoMeta: { title: "Direct Variation Calculator", description: "Calculate direct variation.", keywords: "direct variation" }
  },
  {
    id: "discriminant-calculator",
    name: "Discriminant Calculator",
    description: "Find the discriminant of a quadratic equation.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\Delta = b^2 - 4ac",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 5 },
      { id: "c", label: "c", type: "number", defaultValue: 6 }
    ],
    outputs: [{ id: "delta", label: "Discriminant", formula: "b*b - 4*a*c", unit: "" }],
    theory: "Determines the nature of the roots of a quadratic equation.",
    seoMeta: { title: "Discriminant Calculator", description: "Calculate discriminant.", keywords: "discriminant" }
  },
  {
    id: "elimination-method-calculator",
    name: "Elimination Method Calculator",
    description: "Solve simple 2x2 systems.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x + y = C_1, \\; x - y = C_2",
    inputs: [
      { id: "c1", label: "Sum (C1)", type: "number", defaultValue: 10 },
      { id: "c2", label: "Difference (C2)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "x", label: "x", formula: "(c1 + c2) / 2", unit: "" },
      { id: "y", label: "y", formula: "(c1 - c2) / 2", unit: "" }
    ],
    theory: "Adds equations to eliminate one variable.",
    seoMeta: { title: "Elimination Method Calculator", description: "Solve systems of equations.", keywords: "elimination method" }
  },
  {
    id: "error-function-calculator",
    name: "Error Function Calculator",
    description: "Estimate the error function erf(x).",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\text{erf}(x) \\approx \\text{tanh}(\\frac{2}{\\sqrt{\\pi}} x)",
    inputs: [{ id: "x", label: "x", type: "number", defaultValue: 1 }],
    outputs: [{ id: "erf", label: "erf(x) Approximation", formula: "Math.tanh((2/Math.sqrt(Math.PI))*x)", unit: "" }],
    theory: "The error function occurs in probability, statistics, and partial differential equations.",
    seoMeta: { title: "Error Function Calculator", description: "Calculate erf(x).", keywords: "error function, erf" }
  },
  {
    id: "factoring-trinomials-calculator",
    name: "Factoring Trinomials Calculator",
    description: "Factor x^2 + bx + c.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x^2 + bx + c = (x - r_1)(x - r_2)",
    inputs: [
      { id: "b", label: "Coefficient b", type: "number", defaultValue: 5 },
      { id: "c", label: "Constant c", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "r1", label: "Root 1", formula: "(-b + Math.sqrt(b*b - 4*c)) / 2", unit: "" },
      { id: "r2", label: "Root 2", formula: "(-b - Math.sqrt(b*b - 4*c)) / 2", unit: "" }
    ],
    theory: "Factoring involves finding two roots that multiply to c and add to -b.",
    seoMeta: { title: "Factoring Trinomials", description: "Factor quadratic trinomials.", keywords: "factoring trinomials" }
  },
  {
    id: "foil-calculator",
    name: "FOIL Calculator",
    description: "Multiply binomials (ax+b)(cx+d).",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "(ax+b)(cx+d) = acx^2 + (ad+bc)x + bd",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 2 },
      { id: "c", label: "c", type: "number", defaultValue: 1 },
      { id: "d", label: "d", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "x2", label: "Coefficient of x²", formula: "a*c", unit: "" },
      { id: "x1", label: "Coefficient of x", formula: "a*d + b*c", unit: "" },
      { id: "x0", label: "Constant", formula: "b*d", unit: "" }
    ],
    theory: "FOIL stands for First, Outer, Inner, Last.",
    seoMeta: { title: "FOIL Calculator", description: "Multiply binomials using FOIL.", keywords: "FOIL calculator" }
  },
  {
    id: "gamma-function-calculator",
    name: "Gamma Function Calculator",
    description: "Approximate Gamma function for integer n.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\Gamma(n) = (n-1)!",
    inputs: [{ id: "n", label: "n (integer)", type: "number", defaultValue: 5 }],
    outputs: [{ id: "gamma", label: "Γ(n)", formula: "Math.exp(Math.log(n)*n - n)", unit: "approx" }],
    theory: "The Gamma function extends the factorial function to complex numbers.",
    seoMeta: { title: "Gamma Function Calculator", description: "Calculate gamma function.", keywords: "gamma function" }
  },
  {
    id: "generic-rectangle-calculator",
    name: "Generic Rectangle Calculator",
    description: "Area of a generic rectangle.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "A = l \\times w",
    inputs: [
      { id: "l", label: "Length", type: "number", defaultValue: 10 },
      { id: "w", label: "Width", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "area", label: "Area", formula: "l * w", unit: "sq units" }],
    theory: "An area model for multiplication.",
    seoMeta: { title: "Generic Rectangle Calculator", description: "Area of rectangle.", keywords: "rectangle, algebra" }
  },
  {
    id: "graphing-inequalities-on-a-number-line-calculator",
    name: "Graphing Inequalities on a Number Line Calculator",
    description: "Convert inequality to interval.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x > a \\implies (a, \\infty)",
    inputs: [{ id: "a", label: "Bound a", type: "number", defaultValue: 5 }],
    outputs: [{ id: "bound", label: "Lower Bound", formula: "a", unit: "" }],
    theory: "Visualizes inequalities on a 1D line.",
    seoMeta: { title: "Graphing Inequalities", description: "Graph inequalities.", keywords: "inequalities, graphing" }
  },
  {
    id: "graphing-quadratic-inequalities-calculator",
    name: "Graphing Quadratic Inequalities Calculator",
    description: "Find critical points of ax^2 + bx + c > 0.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x^2 + bx + c = 0",
    inputs: [
      { id: "b", label: "b", type: "number", defaultValue: 0 },
      { id: "c", label: "c", type: "number", defaultValue: -4 }
    ],
    outputs: [
      { id: "r1", label: "Critical Point 1", formula: "(-b - Math.sqrt(b*b - 4*c))/2", unit: "" },
      { id: "r2", label: "Critical Point 2", formula: "(-b + Math.sqrt(b*b - 4*c))/2", unit: "" }
    ],
    theory: "The critical points divide the number line into intervals.",
    seoMeta: { title: "Graphing Quadratic Inequalities", description: "Solve quadratic inequalities.", keywords: "quadratic inequality" }
  },
  {
    id: "hyperbolic-functions-calculator",
    name: "Hyperbolic Functions Calculator",
    description: "Calculate sinh(x) and cosh(x).",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\sinh(x) = \\frac{e^x - e^{-x}}{2}",
    inputs: [{ id: "x", label: "x", type: "number", defaultValue: 1 }],
    outputs: [
      { id: "sinh", label: "sinh(x)", formula: "(Math.exp(x) - Math.exp(-x)) / 2", unit: "" },
      { id: "cosh", label: "cosh(x)", formula: "(Math.exp(x) + Math.exp(-x)) / 2", unit: "" }
    ],
    theory: "Hyperbolic functions are analogs of trigonometric functions.",
    seoMeta: { title: "Hyperbolic Functions Calculator", description: "Calculate hyperbolic functions.", keywords: "hyperbolic, math" }
  },
  {
    id: "inequality-to-interval-notation-calculator",
    name: "Inequality to Interval Notation Calculator",
    description: "Bounds for interval notation.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "a < x < b \\implies (a, b)",
    inputs: [
      { id: "a", label: "Lower bound", type: "number", defaultValue: 2 },
      { id: "b", label: "Upper bound", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "len", label: "Interval Length", formula: "b - a", unit: "" }],
    theory: "Interval notation is a way to write subsets of the real number line.",
    seoMeta: { title: "Inequality to Interval Notation", description: "Convert to interval notation.", keywords: "interval notation" }
  },
  {
    id: "interval-notation-calculator",
    name: "Interval Notation Calculator",
    description: "Length of an interval.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "Length = |b - a|",
    inputs: [
      { id: "a", label: "Point a", type: "number", defaultValue: 1 },
      { id: "b", label: "Point b", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "len", label: "Length", formula: "Math.abs(b - a)", unit: "" }],
    theory: "Measures the distance between the two bounds.",
    seoMeta: { title: "Interval Notation Calculator", description: "Calculate interval length.", keywords: "interval notation" }
  },
  {
    id: "inverse-variation-calculator",
    name: "Inverse Variation Calculator",
    description: "Calculate constant of inverse variation.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "y = \\frac{k}{x} \\implies k = xy",
    inputs: [
      { id: "x", label: "x", type: "number", defaultValue: 5 },
      { id: "y", label: "y", type: "number", defaultValue: 10 }
    ],
    outputs: [{ id: "k", label: "Constant of Variation (k)", formula: "x * y", unit: "" }],
    theory: "In inverse variation, as x increases, y decreases proportionally.",
    seoMeta: { title: "Inverse Variation Calculator", description: "Calculate inverse variation.", keywords: "inverse variation" }
  },
  {
    id: "multiplying-binomials-calculator",
    name: "Multiplying Binomials Calculator",
    description: "Multiply two binomials.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "(x+a)(x+b) = x^2 + (a+b)x + ab",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 2 },
      { id: "b", label: "b", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "mid", label: "Coefficient of x", formula: "a + b", unit: "" },
      { id: "const", label: "Constant", formula: "a * b", unit: "" }
    ],
    theory: "A fundamental operation in algebra using the distributive property.",
    seoMeta: { title: "Multiplying Binomials", description: "Multiply binomials.", keywords: "multiplying binomials" }
  },
  {
    id: "multiplying-polynomials-calculator",
    name: "Multiplying Polynomials Calculator",
    description: "Multiply polynomials.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "Degree = \\text{deg}(P) + \\text{deg}(Q)",
    inputs: [
      { id: "deg1", label: "Degree of Polynomial 1", type: "number", defaultValue: 2 },
      { id: "deg2", label: "Degree of Polynomial 2", type: "number", defaultValue: 3 }
    ],
    outputs: [{ id: "deg", label: "Degree of Product", formula: "deg1 + deg2", unit: "" }],
    theory: "The degree of the product is the sum of the degrees of the factors.",
    seoMeta: { title: "Multiplying Polynomials", description: "Multiply polynomials.", keywords: "multiplying polynomials" }
  },
  {
    id: "partial-fraction-decomposition-calculator",
    name: "Partial Fraction Decomposition Calculator",
    description: "Decompose 1/(x^2-a^2).",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\frac{1}{x^2-a^2} = \\frac{A}{x-a} + \\frac{B}{x+a}",
    inputs: [{ id: "a", label: "a", type: "number", defaultValue: 2 }],
    outputs: [
      { id: "A", label: "A", formula: "1 / (2 * a)", unit: "" },
      { id: "B", label: "B", formula: "-1 / (2 * a)", unit: "" }
    ],
    theory: "Reduces a rational function into a sum of simpler fractions.",
    seoMeta: { title: "Partial Fraction Decomposition", description: "Decompose fractions.", keywords: "partial fraction" }
  },
  {
    id: "perfect-square-trinomial-calculator",
    name: "Perfect Square Trinomial Calculator",
    description: "Check if ax^2+bx+c is a perfect square.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "b^2 = 4ac",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 6 },
      { id: "c", label: "c", type: "number", defaultValue: 9 }
    ],
    outputs: [{ id: "diff", label: "Difference (0 = Perfect Square)", formula: "b*b - 4*a*c", unit: "" }],
    theory: "A trinomial is a perfect square if its discriminant is zero.",
    seoMeta: { title: "Perfect Square Trinomial", description: "Check perfect square.", keywords: "perfect square" }
  },
  {
    id: "polynomial-division-calculator",
    name: "Polynomial Division Calculator",
    description: "Divide polynomial by x - c.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "P(c) = Remainder",
    inputs: [
      { id: "c", label: "c", type: "number", defaultValue: 2 },
      { id: "coeff", label: "Constant of P(x)=x^2+ax+b", type: "number", defaultValue: 0 }
    ],
    outputs: [{ id: "rem", label: "Remainder (P(c))", formula: "c*c + coeff", unit: "" }],
    theory: "The Remainder Theorem states that P(x) / (x-c) leaves a remainder of P(c).",
    seoMeta: { title: "Polynomial Division Calculator", description: "Divide polynomials.", keywords: "polynomial division" }
  },
  {
    id: "power-set-calculator",
    name: "Power Set Calculator",
    description: "Calculate number of subsets.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|P(S)| = 2^{|S|}",
    inputs: [{ id: "n", label: "Number of elements in set", type: "number", defaultValue: 3 }],
    outputs: [{ id: "subsets", label: "Number of Subsets", formula: "Math.pow(2, n)", unit: "" }],
    theory: "The power set contains all possible subsets of a set.",
    seoMeta: { title: "Power Set Calculator", description: "Calculate power set size.", keywords: "power set" }
  },
  {
    id: "quadratic-formula-calculator",
    name: "Quadratic Formula Calculator",
    description: "Solve ax^2 + bx + c = 0.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 1 },
      { id: "b", label: "b", type: "number", defaultValue: 0 },
      { id: "c", label: "c", type: "number", defaultValue: -4 }
    ],
    outputs: [
      { id: "x1", label: "Root 1 (+)", formula: "(-b + Math.sqrt(b*b - 4*a*c)) / (2*a)", unit: "" },
      { id: "x2", label: "Root 2 (-)", formula: "(-b - Math.sqrt(b*b - 4*a*c)) / (2*a)", unit: "" }
    ],
    theory: "The classic formula for solving any quadratic equation.",
    seoMeta: { title: "Quadratic Formula Calculator", description: "Solve quadratic equations.", keywords: "quadratic formula" }
  },
  {
    id: "quaternion-calculator",
    name: "Quaternion Calculator",
    description: "Calculate magnitude of a quaternion.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|q| = \\sqrt{w^2 + x^2 + y^2 + z^2}",
    inputs: [
      { id: "w", label: "w", type: "number", defaultValue: 1 },
      { id: "x", label: "x", type: "number", defaultValue: 2 },
      { id: "y", label: "y", type: "number", defaultValue: 2 },
      { id: "z", label: "z", type: "number", defaultValue: 4 }
    ],
    outputs: [{ id: "mag", label: "Magnitude", formula: "Math.sqrt(w*w + x*x + y*y + z*z)", unit: "" }],
    theory: "Quaternions extend complex numbers into 4D space.",
    seoMeta: { title: "Quaternion Calculator", description: "Calculate quaternion magnitude.", keywords: "quaternion" }
  },
  {
    id: "rational-zeros-calculator",
    name: "Rational Zeros Calculator",
    description: "List possible rational zeros p/q.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "x = \\frac{\\text{Factors of constant}}{\\text{Factors of leading coefficient}}",
    inputs: [
      { id: "p", label: "Constant term (p)", type: "number", defaultValue: 6 },
      { id: "q", label: "Leading coefficient (q)", type: "number", defaultValue: 2 }
    ],
    outputs: [{ id: "ratio", label: "Max possible rational root (p/q)", formula: "Math.abs(p / q)", unit: "" }],
    theory: "The rational root theorem gives constraints on rational solutions to a polynomial.",
    seoMeta: { title: "Rational Zeros Calculator", description: "Find rational zeros.", keywords: "rational zeros" }
  },
  {
    id: "square-of-a-binomial-calculator",
    name: "Square of a Binomial Calculator",
    description: "Expand (a+b)^2.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "(a+b)^2 = a^2 + 2ab + b^2",
    inputs: [
      { id: "a", label: "a", type: "number", defaultValue: 3 },
      { id: "b", label: "b", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "a2", label: "a²", formula: "a*a", unit: "" },
      { id: "ab2", label: "2ab", formula: "2*a*b", unit: "" },
      { id: "b2", label: "b²", formula: "b*b", unit: "" }
    ],
    theory: "A fundamental algebraic identity.",
    seoMeta: { title: "Square of a Binomial Calculator", description: "Expand a binomial square.", keywords: "binomial square" }
  },
  {
    id: "subset-calculator",
    name: "Subset Calculator",
    description: "Calculate proper subsets.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "\\text{Proper Subsets} = 2^n - 1",
    inputs: [{ id: "n", label: "Number of elements", type: "number", defaultValue: 3 }],
    outputs: [{ id: "sub", label: "Proper Subsets", formula: "Math.pow(2, n) - 1", unit: "" }],
    theory: "A proper subset does not include the set itself.",
    seoMeta: { title: "Subset Calculator", description: "Calculate proper subsets.", keywords: "subsets" }
  },
  {
    id: "substitution-method-calculator",
    name: "Substitution Method Calculator",
    description: "Solve y = ax + b, y = cx + d.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "ax+b = cx+d \\implies x = \\frac{d-b}{a-c}",
    inputs: [
      { id: "a", label: "Slope 1 (a)", type: "number", defaultValue: 2 },
      { id: "b", label: "Intercept 1 (b)", type: "number", defaultValue: 1 },
      { id: "c", label: "Slope 2 (c)", type: "number", defaultValue: 1 },
      { id: "d", label: "Intercept 2 (d)", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "x", label: "Intersection x", formula: "(d - b) / (a - c)", unit: "" }],
    theory: "Substituting one equation into another to eliminate a variable.",
    seoMeta: { title: "Substitution Method Calculator", description: "Solve equations by substitution.", keywords: "substitution method" }
  },
  {
    id: "synthetic-division-calculator",
    name: "Synthetic Division Calculator",
    description: "Evaluate polynomial P(x) at x=c.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "P(c)",
    inputs: [
      { id: "c", label: "Root (c)", type: "number", defaultValue: 2 },
      { id: "a", label: "x² coefficient", type: "number", defaultValue: 1 },
      { id: "b", label: "x coefficient", type: "number", defaultValue: -3 },
      { id: "const", label: "Constant", type: "number", defaultValue: 2 }
    ],
    outputs: [{ id: "rem", label: "Remainder", formula: "a*c*c + b*c + const", unit: "" }],
    theory: "A shorthand method for polynomial division.",
    seoMeta: { title: "Synthetic Division Calculator", description: "Perform synthetic division.", keywords: "synthetic division" }
  },
  {
    id: "system-of-equations-calculator",
    name: "System of Equations Calculator",
    description: "Solve 2x2 system.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "Ax = B",
    inputs: [
      { id: "a1", label: "a1", type: "number", defaultValue: 1 },
      { id: "b1", label: "b1", type: "number", defaultValue: 1 },
      { id: "c1", label: "c1", type: "number", defaultValue: 5 },
      { id: "a2", label: "a2", type: "number", defaultValue: 1 },
      { id: "b2", label: "b2", type: "number", defaultValue: -1 },
      { id: "c2", label: "c2", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "x", label: "x", formula: "(c1*b2 - b1*c2) / (a1*b2 - b1*a2)", unit: "" },
      { id: "y", label: "y", formula: "(a1*c2 - c1*a2) / (a1*b2 - b1*a2)", unit: "" }
    ],
    theory: "Cramer's rule or algebraic elimination can be used.",
    seoMeta: { title: "System of Equations Calculator", description: "Solve systems of equations.", keywords: "system of equations" }
  },
  {
    id: "truth-table-generator",
    name: "Truth Table Generator",
    description: "Evaluate logic gates.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "A \\land B",
    inputs: [
      { id: "a", label: "Input A (1 or 0)", type: "number", defaultValue: 1 },
      { id: "b", label: "Input B (1 or 0)", type: "number", defaultValue: 0 }
    ],
    outputs: [
      { id: "and", label: "A AND B", formula: "a * b", unit: "" },
      { id: "or", label: "A OR B", formula: "a + b > 0 ? 1 : 0", unit: "" }
    ],
    theory: "Boolean algebra relies on truth values.",
    seoMeta: { title: "Truth Table Generator", description: "Generate truth tables.", keywords: "truth table, boolean" }
  },
  {
    id: "union-and-intersection-calculator",
    name: "Union and Intersection Calculator",
    description: "Size of union of two sets.",
    category: "math",
    subcategory: "algebra",
    scientificFormula: "|A \\cup B| = |A| + |B| - |A \\cap B|",
    inputs: [
      { id: "a", label: "Size of Set A", type: "number", defaultValue: 10 },
      { id: "b", label: "Size of Set B", type: "number", defaultValue: 15 },
      { id: "inter", label: "Size of Intersection", type: "number", defaultValue: 5 }
    ],
    outputs: [{ id: "union", label: "Size of Union", formula: "a + b - inter", unit: "" }],
    theory: "The Principle of Inclusion-Exclusion.",
    seoMeta: { title: "Union and Intersection Calculator", description: "Calculate set operations.", keywords: "union, intersection" }
  },
  {
    id: "absolute-change-calculator",
    name: "Absolute Change Calculator",
    description: "Perform calculations related to Absolute Change Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving absolute change calculator.",
    seoMeta: { title: "Absolute Change Calculator", description: "Free absolute change calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "absolute-value-calculator",
    name: "Absolute Value Calculator",
    description: "Perform calculations related to Absolute Value Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving absolute value calculator.",
    seoMeta: { title: "Absolute Value Calculator", description: "Free absolute value calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "adding-and-subtracting-fractions-calculator",
    name: "Adding and Subtracting Fractions Calculator",
    description: "Perform calculations related to Adding and Subtracting Fractions Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving adding and subtracting fractions calculator.",
    seoMeta: { title: "Adding and Subtracting Fractions Calculator", description: "Free adding and subtracting fractions calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "addition-calculator",
    name: "Addition Calculator",
    description: "Perform calculations related to Addition Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving addition calculator.",
    seoMeta: { title: "Addition Calculator", description: "Free addition calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "associative-property-calculator",
    name: "Associative Property Calculator",
    description: "Perform calculations related to Associative Property Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving associative property calculator.",
    seoMeta: { title: "Associative Property Calculator", description: "Free associative property calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "average-calculator",
    name: "Average Calculator",
    description: "Perform calculations related to Average Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving average calculator.",
    seoMeta: { title: "Average Calculator", description: "Free average calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "ceiling-function-calculator",
    name: "Ceiling Function Calculator",
    description: "Perform calculations related to Ceiling Function Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving ceiling function calculator.",
    seoMeta: { title: "Ceiling Function Calculator", description: "Free ceiling function calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "chinese-remainder-theorem-calculator",
    name: "Chinese Remainder Theorem Calculator",
    description: "Perform calculations related to Chinese Remainder Theorem Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving chinese remainder theorem calculator.",
    seoMeta: { title: "Chinese Remainder Theorem Calculator", description: "Free chinese remainder theorem calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "compatible-numbers-calculator",
    name: "Compatible Numbers Calculator",
    description: "Perform calculations related to Compatible Numbers Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving compatible numbers calculator.",
    seoMeta: { title: "Compatible Numbers Calculator", description: "Free compatible numbers calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "consecutive-integers-calculator",
    name: "Consecutive Integers Calculator",
    description: "Perform calculations related to Consecutive Integers Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving consecutive integers calculator.",
    seoMeta: { title: "Consecutive Integers Calculator", description: "Free consecutive integers calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "cross-multiplication-calculator",
    name: "Cross Multiplication Calculator",
    description: "Perform calculations related to Cross Multiplication Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving cross multiplication calculator.",
    seoMeta: { title: "Cross Multiplication Calculator", description: "Free cross multiplication calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "cube-root-calculator",
    name: "Cube Root Calculator",
    description: "Perform calculations related to Cube Root Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving cube root calculator.",
    seoMeta: { title: "Cube Root Calculator", description: "Free cube root calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "decimal-calculator",
    name: "Decimal Calculator",
    description: "Perform calculations related to Decimal Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving decimal calculator.",
    seoMeta: { title: "Decimal Calculator", description: "Free decimal calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "digital-root-calculator",
    name: "Digital Root Calculator",
    description: "Perform calculations related to Digital Root Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving digital root calculator.",
    seoMeta: { title: "Digital Root Calculator", description: "Free digital root calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "distributive-property-calculator",
    name: "Distributive Property Calculator",
    description: "Perform calculations related to Distributive Property Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving distributive property calculator.",
    seoMeta: { title: "Distributive Property Calculator", description: "Free distributive property calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "divisibility-test-calculator",
    name: "Divisibility Test Calculator",
    description: "Perform calculations related to Divisibility Test Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving divisibility test calculator.",
    seoMeta: { title: "Divisibility Test Calculator", description: "Free divisibility test calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "division-calculator",
    name: "Division Calculator",
    description: "Perform calculations related to Division Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving division calculator.",
    seoMeta: { title: "Division Calculator", description: "Free division calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "egyptian-fractions-calculator",
    name: "Egyptian Fractions Calculator",
    description: "Perform calculations related to Egyptian Fractions Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving egyptian fractions calculator.",
    seoMeta: { title: "Egyptian Fractions Calculator", description: "Free egyptian fractions calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "expanded-form-calculator",
    name: "Expanded Form Calculator",
    description: "Perform calculations related to Expanded Form Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving expanded form calculator.",
    seoMeta: { title: "Expanded Form Calculator", description: "Free expanded form calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "factor-calculator",
    name: "Factor Calculator",
    description: "Perform calculations related to Factor Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving factor calculator.",
    seoMeta: { title: "Factor Calculator", description: "Free factor calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "factorial-calculator",
    name: "Factorial Calculator",
    description: "Perform calculations related to Factorial Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving factorial calculator.",
    seoMeta: { title: "Factorial Calculator", description: "Free factorial calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "fermat-s-little-theorem-calculator",
    name: "Fermat's Little Theorem Calculator",
    description: "Perform calculations related to Fermat's Little Theorem Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving fermat's little theorem calculator.",
    seoMeta: { title: "Fermat's Little Theorem Calculator", description: "Free fermat's little theorem calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "floor-division-calculator",
    name: "Floor Division Calculator",
    description: "Perform calculations related to Floor Division Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving floor division calculator.",
    seoMeta: { title: "Floor Division Calculator", description: "Free floor division calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "floor-function-calculator",
    name: "Floor Function Calculator",
    description: "Perform calculations related to Floor Function Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving floor function calculator.",
    seoMeta: { title: "Floor Function Calculator", description: "Free floor function calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "fundamental-counting-principle-calculator",
    name: "Fundamental Counting Principle Calculator",
    description: "Perform calculations related to Fundamental Counting Principle Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving fundamental counting principle calculator.",
    seoMeta: { title: "Fundamental Counting Principle Calculator", description: "Free fundamental counting principle calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "gcf-calculator-greatest-common-factor",
    name: "GCF Calculator – Greatest Common Factor",
    description: "Perform calculations related to GCF Calculator – Greatest Common Factor.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving gcf calculator – greatest common factor.",
    seoMeta: { title: "GCF Calculator – Greatest Common Factor", description: "Free gcf calculator – greatest common factor.", keywords: "arithmetic, calculator" }
  },
  {
    id: "gcf-and-lcm-calculator",
    name: "GCF and LCM Calculator",
    description: "Perform calculations related to GCF and LCM Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving gcf and lcm calculator.",
    seoMeta: { title: "GCF and LCM Calculator", description: "Free gcf and lcm calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "geometric-mean-calculator",
    name: "Geometric Mean Calculator",
    description: "Perform calculations related to Geometric Mean Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving geometric mean calculator.",
    seoMeta: { title: "Geometric Mean Calculator", description: "Free geometric mean calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "greater-than-or-less-than-calculator",
    name: "Greater Than Or Less Than Calculator",
    description: "Perform calculations related to Greater Than Or Less Than Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving greater than or less than calculator.",
    seoMeta: { title: "Greater Than Or Less Than Calculator", description: "Free greater than or less than calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "harmonic-mean-calculator",
    name: "Harmonic Mean Calculator",
    description: "Perform calculations related to Harmonic Mean Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving harmonic mean calculator.",
    seoMeta: { title: "Harmonic Mean Calculator", description: "Free harmonic mean calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "integer-calculator",
    name: "Integer Calculator",
    description: "Perform calculations related to Integer Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving integer calculator.",
    seoMeta: { title: "Integer Calculator", description: "Free integer calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "inverse-modulo-calculator",
    name: "Inverse Modulo Calculator",
    description: "Perform calculations related to Inverse Modulo Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving inverse modulo calculator.",
    seoMeta: { title: "Inverse Modulo Calculator", description: "Free inverse modulo calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "lcm-calculator-least-common-multiple",
    name: "LCM Calculator — Least Common Multiple",
    description: "Perform calculations related to LCM Calculator — Least Common Multiple.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving lcm calculator — least common multiple.",
    seoMeta: { title: "LCM Calculator — Least Common Multiple", description: "Free lcm calculator — least common multiple.", keywords: "arithmetic, calculator" }
  },
  {
    id: "long-addition-calculator",
    name: "Long Addition Calculator",
    description: "Perform calculations related to Long Addition Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving long addition calculator.",
    seoMeta: { title: "Long Addition Calculator", description: "Free long addition calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "long-multiplication-calculator",
    name: "Long Multiplication Calculator",
    description: "Perform calculations related to Long Multiplication Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving long multiplication calculator.",
    seoMeta: { title: "Long Multiplication Calculator", description: "Free long multiplication calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "long-subtraction-calculator",
    name: "Long Subtraction Calculator",
    description: "Perform calculations related to Long Subtraction Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving long subtraction calculator.",
    seoMeta: { title: "Long Subtraction Calculator", description: "Free long subtraction calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "magic-square-calculator",
    name: "Magic Square Calculator",
    description: "Perform calculations related to Magic Square Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving magic square calculator.",
    seoMeta: { title: "Magic Square Calculator", description: "Free magic square calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "mean-calculator",
    name: "Mean Calculator",
    description: "Perform calculations related to Mean Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving mean calculator.",
    seoMeta: { title: "Mean Calculator", description: "Free mean calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "modulo-calculator",
    name: "Modulo Calculator",
    description: "Perform calculations related to Modulo Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving modulo calculator.",
    seoMeta: { title: "Modulo Calculator", description: "Free modulo calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "multiplication-calculator",
    name: "Multiplication Calculator",
    description: "Perform calculations related to Multiplication Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving multiplication calculator.",
    seoMeta: { title: "Multiplication Calculator", description: "Free multiplication calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "multiplicative-inverse-calculator",
    name: "Multiplicative Inverse Calculator",
    description: "Perform calculations related to Multiplicative Inverse Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving multiplicative inverse calculator.",
    seoMeta: { title: "Multiplicative Inverse Calculator", description: "Free multiplicative inverse calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "multiplicative-inverse-modulo-calculator",
    name: "Multiplicative Inverse Modulo Calculator",
    description: "Perform calculations related to Multiplicative Inverse Modulo Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving multiplicative inverse modulo calculator.",
    seoMeta: { title: "Multiplicative Inverse Modulo Calculator", description: "Free multiplicative inverse modulo calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "order-of-magnitude-calculator",
    name: "Order of Magnitude Calculator",
    description: "Perform calculations related to Order of Magnitude Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving order of magnitude calculator.",
    seoMeta: { title: "Order of Magnitude Calculator", description: "Free order of magnitude calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "partial-products-calculator",
    name: "Partial Products Calculator",
    description: "Perform calculations related to Partial Products Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving partial products calculator.",
    seoMeta: { title: "Partial Products Calculator", description: "Free partial products calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "perfect-cube-calculator",
    name: "Perfect Cube Calculator",
    description: "Perform calculations related to Perfect Cube Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving perfect cube calculator.",
    seoMeta: { title: "Perfect Cube Calculator", description: "Free perfect cube calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "perfect-square-calculator",
    name: "Perfect Square Calculator",
    description: "Perform calculations related to Perfect Square Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving perfect square calculator.",
    seoMeta: { title: "Perfect Square Calculator", description: "Free perfect square calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "pi-experiments-calculator",
    name: "Pi Experiments Calculator",
    description: "Perform calculations related to Pi Experiments Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving pi experiments calculator.",
    seoMeta: { title: "Pi Experiments Calculator", description: "Free pi experiments calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "place-value-calculator",
    name: "Place Value Calculator",
    description: "Perform calculations related to Place Value Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving place value calculator.",
    seoMeta: { title: "Place Value Calculator", description: "Free place value calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "polish-notation-converter",
    name: "Polish Notation Converter",
    description: "Perform calculations related to Polish Notation Converter.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving polish notation converter.",
    seoMeta: { title: "Polish Notation Converter", description: "Free polish notation converter.", keywords: "arithmetic, calculator" }
  },
  {
    id: "power-mod-calculator",
    name: "Power Mod Calculator",
    description: "Perform calculations related to Power Mod Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving power mod calculator.",
    seoMeta: { title: "Power Mod Calculator", description: "Free power mod calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "powers-of-i-calculator",
    name: "Powers of i Calculator",
    description: "Perform calculations related to Powers of i Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving powers of i calculator.",
    seoMeta: { title: "Powers of i Calculator", description: "Free powers of i calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "prime-factorization-calculator",
    name: "Prime Factorization Calculator",
    description: "Perform calculations related to Prime Factorization Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving prime factorization calculator.",
    seoMeta: { title: "Prime Factorization Calculator", description: "Free prime factorization calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "prime-number-calculator",
    name: "Prime Number Calculator",
    description: "Perform calculations related to Prime Number Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving prime number calculator.",
    seoMeta: { title: "Prime Number Calculator", description: "Free prime number calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "quotient-calculator",
    name: "Quotient Calculator",
    description: "Perform calculations related to Quotient Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving quotient calculator.",
    seoMeta: { title: "Quotient Calculator", description: "Free quotient calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "radical-calculator",
    name: "Radical Calculator",
    description: "Perform calculations related to Radical Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving radical calculator.",
    seoMeta: { title: "Radical Calculator", description: "Free radical calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "rationalize-denominator-calculator",
    name: "Rationalize Denominator Calculator",
    description: "Perform calculations related to Rationalize Denominator Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving rationalize denominator calculator.",
    seoMeta: { title: "Rationalize Denominator Calculator", description: "Free rationalize denominator calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "reciprocal-calculator",
    name: "Reciprocal Calculator",
    description: "Perform calculations related to Reciprocal Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving reciprocal calculator.",
    seoMeta: { title: "Reciprocal Calculator", description: "Free reciprocal calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "relatively-prime-calculator",
    name: "Relatively Prime Calculator",
    description: "Perform calculations related to Relatively Prime Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving relatively prime calculator.",
    seoMeta: { title: "Relatively Prime Calculator", description: "Free relatively prime calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "remainder-calculator",
    name: "Remainder Calculator",
    description: "Perform calculations related to Remainder Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving remainder calculator.",
    seoMeta: { title: "Remainder Calculator", description: "Free remainder calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "reverse-foil-calculator",
    name: "Reverse FOIL Calculator",
    description: "Perform calculations related to Reverse FOIL Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving reverse foil calculator.",
    seoMeta: { title: "Reverse FOIL Calculator", description: "Free reverse foil calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "root-calculator",
    name: "Root Calculator",
    description: "Perform calculations related to Root Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving root calculator.",
    seoMeta: { title: "Root Calculator", description: "Free root calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "root-mean-square-calculator",
    name: "Root Mean Square Calculator",
    description: "Perform calculations related to Root Mean Square Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving root mean square calculator.",
    seoMeta: { title: "Root Mean Square Calculator", description: "Free root mean square calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "rounding-calculator",
    name: "Rounding Calculator",
    description: "Perform calculations related to Rounding Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving rounding calculator.",
    seoMeta: { title: "Rounding Calculator", description: "Free rounding calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "round-to-the-nearest-thousand-calculator",
    name: "Round to the Nearest Thousand Calculator",
    description: "Perform calculations related to Round to the Nearest Thousand Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving round to the nearest thousand calculator.",
    seoMeta: { title: "Round to the Nearest Thousand Calculator", description: "Free round to the nearest thousand calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "scientific-notation-calculator",
    name: "Scientific Notation Calculator",
    description: "Perform calculations related to Scientific Notation Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving scientific notation calculator.",
    seoMeta: { title: "Scientific Notation Calculator", description: "Free scientific notation calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "set-builder-calculator",
    name: "Set Builder Calculator",
    description: "Perform calculations related to Set Builder Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving set builder calculator.",
    seoMeta: { title: "Set Builder Calculator", description: "Free set builder calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "significant-figures-calculator-sig-fig",
    name: "Significant Figures Calculator – Sig Fig",
    description: "Perform calculations related to Significant Figures Calculator – Sig Fig.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving significant figures calculator – sig fig.",
    seoMeta: { title: "Significant Figures Calculator – Sig Fig", description: "Free significant figures calculator – sig fig.", keywords: "arithmetic, calculator" }
  },
  {
    id: "simplify-cube-root-calculator",
    name: "Simplify Cube Root Calculator",
    description: "Perform calculations related to Simplify Cube Root Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving simplify cube root calculator.",
    seoMeta: { title: "Simplify Cube Root Calculator", description: "Free simplify cube root calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "simplifying-radicals-calculator",
    name: "Simplifying Radicals Calculator",
    description: "Perform calculations related to Simplifying Radicals Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving simplifying radicals calculator.",
    seoMeta: { title: "Simplifying Radicals Calculator", description: "Free simplifying radicals calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "square-root-calculator",
    name: "Square Root Calculator",
    description: "Perform calculations related to Square Root Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving square root calculator.",
    seoMeta: { title: "Square Root Calculator", description: "Free square root calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "standard-form-calculator",
    name: "Standard Form Calculator",
    description: "Perform calculations related to Standard Form Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving standard form calculator.",
    seoMeta: { title: "Standard Form Calculator", description: "Free standard form calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "subtracting-fractions-calculator",
    name: "Subtracting Fractions Calculator",
    description: "Perform calculations related to Subtracting Fractions Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving subtracting fractions calculator.",
    seoMeta: { title: "Subtracting Fractions Calculator", description: "Free subtracting fractions calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "subtraction-calculator",
    name: "Subtraction Calculator",
    description: "Perform calculations related to Subtraction Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving subtraction calculator.",
    seoMeta: { title: "Subtraction Calculator", description: "Free subtraction calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "digit-sum-calculator",
    name: "Digit Sum Calculator",
    description: "Perform calculations related to Digit Sum Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving digit sum calculator.",
    seoMeta: { title: "Digit Sum Calculator", description: "Free digit sum calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "sum-of-products-calculator",
    name: "Sum of Products Calculator",
    description: "Perform calculations related to Sum of Products Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving sum of products calculator.",
    seoMeta: { title: "Sum of Products Calculator", description: "Free sum of products calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "terminating-decimals-calculator",
    name: "Terminating Decimals Calculator",
    description: "Perform calculations related to Terminating Decimals Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving terminating decimals calculator.",
    seoMeta: { title: "Terminating Decimals Calculator", description: "Free terminating decimals calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "triangular-numbers-calculator",
    name: "Triangular Numbers Calculator",
    description: "Perform calculations related to Triangular Numbers Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving triangular numbers calculator.",
    seoMeta: { title: "Triangular Numbers Calculator", description: "Free triangular numbers calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "weighted-average-calculator",
    name: "Weighted Average Calculator",
    description: "Perform calculations related to Weighted Average Calculator.",
    category: "math",
    subcategory: "arithmetic",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x", label: "Value X", type: "number", defaultValue: 10 },
      { id: "y", label: "Value Y", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x + y", unit: "" }
    ],
    theory: "This calculator simplifies operations involving weighted average calculator.",
    seoMeta: { title: "Weighted Average Calculator", description: "Free weighted average calculator.", keywords: "arithmetic, calculator" }
  },
  {
    id: "average-rate-of-change-calculator",
    name: "Average Rate of Change Calculator",
    description: "Solve problems involving Average Rate of Change Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Average Rate of Change Calculator", description: "Calculate average rate of change calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "bilinear-interpolation-calculator",
    name: "Bilinear Interpolation Calculator",
    description: "Solve problems involving Bilinear Interpolation Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Bilinear Interpolation Calculator", description: "Calculate bilinear interpolation calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "catenary-curve-calculator",
    name: "Catenary Curve Calculator",
    description: "Solve problems involving Catenary Curve Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Catenary Curve Calculator", description: "Calculate catenary curve calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "coordinate-grid-calculator",
    name: "Coordinate Grid Calculator",
    description: "Solve problems involving Coordinate Grid Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Coordinate Grid Calculator", description: "Calculate coordinate grid calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "cosine-similarity-calculator",
    name: "Cosine Similarity Calculator",
    description: "Solve problems involving Cosine Similarity Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Cosine Similarity Calculator", description: "Calculate cosine similarity calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "cross-product-calculator",
    name: "Cross Product Calculator",
    description: "Solve problems involving Cross Product Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Cross Product Calculator", description: "Calculate cross product calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "cylindrical-coordinates-calculator",
    name: "Cylindrical Coordinates Calculator",
    description: "Solve problems involving Cylindrical Coordinates Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Cylindrical Coordinates Calculator", description: "Calculate cylindrical coordinates calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "direction-of-the-vector-calculator",
    name: "Direction of the Vector Calculator",
    description: "Solve problems involving Direction of the Vector Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Direction of the Vector Calculator", description: "Calculate direction of the vector calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "distance-formula-calculator",
    name: "Distance Formula Calculator",
    description: "Solve problems involving Distance Formula Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Distance Formula Calculator", description: "Calculate distance formula calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "distance-from-point-to-plane-calculator",
    name: "Distance from Point to Plane Calculator",
    description: "Solve problems involving Distance from Point to Plane Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Distance from Point to Plane Calculator", description: "Calculate distance from point to plane calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "dot-product-calculator",
    name: "Dot Product Calculator",
    description: "Solve problems involving Dot Product Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Dot Product Calculator", description: "Calculate dot product calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "endpoint-calculator",
    name: "Endpoint Calculator",
    description: "Solve problems involving Endpoint Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Endpoint Calculator", description: "Calculate endpoint calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "equation-of-a-sphere-calculator",
    name: "Equation of a Sphere Calculator",
    description: "Solve problems involving Equation of a Sphere Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Equation of a Sphere Calculator", description: "Calculate equation of a sphere calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "gradient-calculator",
    name: "Gradient Calculator",
    description: "Solve problems involving Gradient Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Gradient Calculator", description: "Calculate gradient calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "intersection-of-two-lines-calculator",
    name: "Intersection of Two Lines Calculator",
    description: "Solve problems involving Intersection of Two Lines Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Intersection of Two Lines Calculator", description: "Calculate intersection of two lines calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "irregular-polygon-area-calculator",
    name: "Irregular Polygon Area Calculator",
    description: "Solve problems involving Irregular Polygon Area Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Irregular Polygon Area Calculator", description: "Calculate irregular polygon area calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "latus-rectum-calculator",
    name: "Latus Rectum Calculator",
    description: "Solve problems involving Latus Rectum Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Latus Rectum Calculator", description: "Calculate latus rectum calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "least-squares-regression-line-calculator",
    name: "Least Squares Regression Line Calculator",
    description: "Solve problems involving Least Squares Regression Line Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Least Squares Regression Line Calculator", description: "Calculate least squares regression line calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "linear-interpolation-calculator",
    name: "Linear Interpolation Calculator",
    description: "Solve problems involving Linear Interpolation Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Linear Interpolation Calculator", description: "Calculate linear interpolation calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "line-equation-from-two-points-calculator",
    name: "Line Equation from Two Points Calculator",
    description: "Solve problems involving Line Equation from Two Points Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Line Equation from Two Points Calculator", description: "Calculate line equation from two points calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "line-of-intersection-of-two-planes-calculator",
    name: "Line of Intersection of Two Planes Calculator",
    description: "Solve problems involving Line of Intersection of Two Planes Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Line of Intersection of Two Planes Calculator", description: "Calculate line of intersection of two planes calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "manhattan-distance-calculator",
    name: "Manhattan Distance Calculator",
    description: "Solve problems involving Manhattan Distance Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Manhattan Distance Calculator", description: "Calculate manhattan distance calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "midpoint-calculator",
    name: "Midpoint Calculator",
    description: "Solve problems involving Midpoint Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Midpoint Calculator", description: "Calculate midpoint calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "parabola-calculator",
    name: "Parabola Calculator",
    description: "Solve problems involving Parabola Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Parabola Calculator", description: "Calculate parabola calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "parallel-line-calculator",
    name: "Parallel Line Calculator",
    description: "Solve problems involving Parallel Line Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Parallel Line Calculator", description: "Calculate parallel line calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "perpendicular-line-calculator",
    name: "Perpendicular Line Calculator",
    description: "Solve problems involving Perpendicular Line Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Perpendicular Line Calculator", description: "Calculate perpendicular line calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "point-slope-form-calculator",
    name: "Point Slope Form Calculator",
    description: "Solve problems involving Point Slope Form Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Point Slope Form Calculator", description: "Calculate point slope form calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "polar-coordinates-calculator",
    name: "Polar Coordinates Calculator",
    description: "Solve problems involving Polar Coordinates Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Polar Coordinates Calculator", description: "Calculate polar coordinates calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "polynomial-graphing-calculator",
    name: "Polynomial Graphing Calculator",
    description: "Solve problems involving Polynomial Graphing Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Polynomial Graphing Calculator", description: "Calculate polynomial graphing calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "ratios-of-directed-line-segments-calculator",
    name: "Ratios of Directed Line Segments Calculator",
    description: "Solve problems involving Ratios of Directed Line Segments Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Ratios of Directed Line Segments Calculator", description: "Calculate ratios of directed line segments calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "rise-over-run-calculator",
    name: "Rise Over Run Calculator",
    description: "Solve problems involving Rise Over Run Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Rise Over Run Calculator", description: "Calculate rise over run calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "rotation-calculator",
    name: "Rotation Calculator",
    description: "Solve problems involving Rotation Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Rotation Calculator", description: "Calculate rotation calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "scatter-plot-calculator",
    name: "Scatter Plot Calculator",
    description: "Solve problems involving Scatter Plot Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Scatter Plot Calculator", description: "Calculate scatter plot calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "slope-calculator",
    name: "Slope Calculator",
    description: "Solve problems involving Slope Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Slope Calculator", description: "Calculate slope calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "slope-intercept-form-calculator",
    name: "Slope Intercept Form Calculator",
    description: "Solve problems involving Slope Intercept Form Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Slope Intercept Form Calculator", description: "Calculate slope intercept form calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "spherical-coordinates-calculator",
    name: "Spherical Coordinates Calculator",
    description: "Solve problems involving Spherical Coordinates Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Spherical Coordinates Calculator", description: "Calculate spherical coordinates calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "standard-form-to-slope-intercept-form-calculator",
    name: "Standard Form to Slope Intercept Form Calculator",
    description: "Solve problems involving Standard Form to Slope Intercept Form Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Standard Form to Slope Intercept Form Calculator", description: "Calculate standard form to slope intercept form calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "three-dimensional-distance-calculator",
    name: "Three-Dimensional Distance Calculator",
    description: "Solve problems involving Three-Dimensional Distance Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Three-Dimensional Distance Calculator", description: "Calculate three-dimensional distance calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "triangulation-calculator",
    name: "Triangulation Calculator",
    description: "Solve problems involving Triangulation Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Triangulation Calculator", description: "Calculate triangulation calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "unit-vector-calculator",
    name: "Unit Vector Calculator",
    description: "Solve problems involving Unit Vector Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Unit Vector Calculator", description: "Calculate unit vector calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "vector-calculator",
    name: "Vector Calculator",
    description: "Solve problems involving Vector Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Vector Calculator", description: "Calculate vector calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "vector-addition-calculator",
    name: "Vector Addition Calculator",
    description: "Solve problems involving Vector Addition Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Vector Addition Calculator", description: "Calculate vector addition calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "vector-magnitude-calculator",
    name: "Vector Magnitude Calculator",
    description: "Solve problems involving Vector Magnitude Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Vector Magnitude Calculator", description: "Calculate vector magnitude calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "vector-projection-calculator",
    name: "Vector Projection Calculator",
    description: "Solve problems involving Vector Projection Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Vector Projection Calculator", description: "Calculate vector projection calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "vertex-form-calculator",
    name: "Vertex Form Calculator",
    description: "Solve problems involving Vertex Form Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Vertex Form Calculator", description: "Calculate vertex form calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "volume-of-a-parallelepiped-calculator",
    name: "Volume of a Parallelepiped Calculator",
    description: "Solve problems involving Volume of a Parallelepiped Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "Volume of a Parallelepiped Calculator", description: "Calculate volume of a parallelepiped calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "y-intercept-calculator",
    name: "y Intercept Calculator",
    description: "Solve problems involving y Intercept Calculator.",
    category: "math",
    subcategory: "coordinate-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "x1", label: "x1", type: "number", defaultValue: 0 },
      { id: "y1", label: "y1", type: "number", defaultValue: 0 },
      { id: "x2", label: "x2", type: "number", defaultValue: 5 },
      { id: "y2", label: "y2", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "x2 - x1 + y2 - y1", unit: "" }
    ],
    theory: "Explore the coordinate plane and geometries with this calculator.",
    seoMeta: { title: "y Intercept Calculator", description: "Calculate y intercept calculator.", keywords: "coordinate geometry, math, calculator" }
  },
  {
    id: "adding-fractions-calculator",
    name: "Adding Fractions Calculator",
    description: "Solve problems involving Adding Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Adding Fractions Calculator", description: "Calculate adding fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "comparing-fractions-calculator",
    name: "Comparing Fractions Calculator",
    description: "Solve problems involving Comparing Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Comparing Fractions Calculator", description: "Calculate comparing fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "decimal-to-fraction-calculator",
    name: "Decimal to Fraction Calculator",
    description: "Solve problems involving Decimal to Fraction Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Decimal to Fraction Calculator", description: "Calculate decimal to fraction calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "dividing-fractions-calculator",
    name: "Dividing Fractions Calculator",
    description: "Solve problems involving Dividing Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Dividing Fractions Calculator", description: "Calculate dividing fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "equivalent-fractions-calculator",
    name: "Equivalent Fractions Calculator",
    description: "Solve problems involving Equivalent Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Equivalent Fractions Calculator", description: "Calculate equivalent fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "fraction-calculator",
    name: "Fraction Calculator",
    description: "Solve problems involving Fraction Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Fraction Calculator", description: "Calculate fraction calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "fraction-exponent-calculator",
    name: "Fraction Exponent Calculator",
    description: "Solve problems involving Fraction Exponent Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Fraction Exponent Calculator", description: "Calculate fraction exponent calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "fraction-to-decimal-converter",
    name: "Fraction To Decimal Converter",
    description: "Solve problems involving Fraction To Decimal Converter.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Fraction To Decimal Converter", description: "Calculate fraction to decimal converter.", keywords: "fractions, math, calculator" }
  },
  {
    id: "golden-ratio-calculator",
    name: "Golden Ratio Calculator",
    description: "Solve problems involving Golden Ratio Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Golden Ratio Calculator", description: "Calculate golden ratio calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "improper-fraction-to-mixed-number-calculator",
    name: "Improper Fraction to Mixed Number Calculator",
    description: "Solve problems involving Improper Fraction to Mixed Number Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Improper Fraction to Mixed Number Calculator", description: "Calculate improper fraction to mixed number calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "lcd-calculator-least-common-denominator",
    name: "LCD Calculator - Least Common Denominator",
    description: "Solve problems involving LCD Calculator - Least Common Denominator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "LCD Calculator - Least Common Denominator", description: "Calculate lcd calculator - least common denominator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "lowest-term-calculator",
    name: "Lowest Term Calculator",
    description: "Solve problems involving Lowest Term Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Lowest Term Calculator", description: "Calculate lowest term calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "mixed-number-calculator",
    name: "Mixed Number Calculator",
    description: "Solve problems involving Mixed Number Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Mixed Number Calculator", description: "Calculate mixed number calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "mixed-number-to-improper-fraction-calculator",
    name: "Mixed Number to Improper Fraction Calculator",
    description: "Solve problems involving Mixed Number to Improper Fraction Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Mixed Number to Improper Fraction Calculator", description: "Calculate mixed number to improper fraction calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "multiplying-fractions-calculator",
    name: "Multiplying Fractions Calculator",
    description: "Solve problems involving Multiplying Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Multiplying Fractions Calculator", description: "Calculate multiplying fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "proportion-calculator",
    name: "Proportion Calculator",
    description: "Solve problems involving Proportion Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Proportion Calculator", description: "Calculate proportion calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "ratio-calculator",
    name: "Ratio Calculator",
    description: "Solve problems involving Ratio Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Ratio Calculator", description: "Calculate ratio calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "simplify-fractions-calculator",
    name: "Simplify Fractions Calculator",
    description: "Solve problems involving Simplify Fractions Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Simplify Fractions Calculator", description: "Calculate simplify fractions calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "unit-rate-calculator",
    name: "Unit Rate Calculator",
    description: "Solve problems involving Unit Rate Calculator.",
    category: "math",
    subcategory: "fractions",
    scientificFormula: "Result = \frac{x}{y}",
    inputs: [
      { id: "num1", label: "Numerator 1", type: "number", defaultValue: 1 },
      { id: "den1", label: "Denominator 1", type: "number", defaultValue: 2 },
      { id: "num2", label: "Numerator 2", type: "number", defaultValue: 1 },
      { id: "den2", label: "Denominator 2", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Decimal Result", formula: "(num1 / den1) + (num2 / den2)", unit: "" }
    ],
    theory: "Fractions represent parts of a whole or ratios between quantities.",
    seoMeta: { title: "Unit Rate Calculator", description: "Calculate unit rate calculator.", keywords: "fractions, math, calculator" }
  },
  {
    id: "adjoint-matrix-calculator",
    name: "Adjoint Matrix Calculator",
    description: "Solve problems involving Adjoint Matrix Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Adjoint Matrix Calculator", description: "Calculate adjoint matrix calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "characteristic-polynomial-calculator",
    name: "Characteristic Polynomial Calculator",
    description: "Solve problems involving Characteristic Polynomial Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Characteristic Polynomial Calculator", description: "Calculate characteristic polynomial calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "cholesky-decomposition-calculator",
    name: "Cholesky Decomposition Calculator",
    description: "Solve problems involving Cholesky Decomposition Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Cholesky Decomposition Calculator", description: "Calculate cholesky decomposition calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "cofactor-expansion-calculator",
    name: "Cofactor Expansion Calculator",
    description: "Solve problems involving Cofactor Expansion Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Cofactor Expansion Calculator", description: "Calculate cofactor expansion calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "cofactor-matrix-calculator",
    name: "Cofactor Matrix Calculator",
    description: "Solve problems involving Cofactor Matrix Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Cofactor Matrix Calculator", description: "Calculate cofactor matrix calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "column-space-calculator",
    name: "Column Space Calculator",
    description: "Solve problems involving Column Space Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Column Space Calculator", description: "Calculate column space calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "condition-number-calculator",
    name: "Condition Number Calculator",
    description: "Solve problems involving Condition Number Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Condition Number Calculator", description: "Calculate condition number calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "corner-point-calculator",
    name: "Corner Point Calculator",
    description: "Solve problems involving Corner Point Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Corner Point Calculator", description: "Calculate corner point calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "cramer-s-rule-calculator",
    name: "Cramer's Rule Calculator",
    description: "Solve problems involving Cramer's Rule Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Cramer's Rule Calculator", description: "Calculate cramer's rule calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "diagonalize-matrix-calculator",
    name: "Diagonalize Matrix Calculator",
    description: "Solve problems involving Diagonalize Matrix Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Diagonalize Matrix Calculator", description: "Calculate diagonalize matrix calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "eigenvalue-and-eigenvector-calculator",
    name: "Eigenvalue and Eigenvector Calculator",
    description: "Solve problems involving Eigenvalue and Eigenvector Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Eigenvalue and Eigenvector Calculator", description: "Calculate eigenvalue and eigenvector calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "gauss-jordan-elimination-calculator",
    name: "Gauss-Jordan Elimination Calculator",
    description: "Solve problems involving Gauss-Jordan Elimination Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Gauss-Jordan Elimination Calculator", description: "Calculate gauss-jordan elimination calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "gram-schmidt-calculator",
    name: "Gram-Schmidt Calculator",
    description: "Solve problems involving Gram-Schmidt Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Gram-Schmidt Calculator", description: "Calculate gram-schmidt calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "hadamard-product-calculator",
    name: "Hadamard Product Calculator",
    description: "Solve problems involving Hadamard Product Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Hadamard Product Calculator", description: "Calculate hadamard product calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "inverse-matrix-calculator",
    name: "Inverse Matrix Calculator",
    description: "Solve problems involving Inverse Matrix Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Inverse Matrix Calculator", description: "Calculate inverse matrix calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "linear-combination-calculator",
    name: "Linear Combination Calculator",
    description: "Solve problems involving Linear Combination Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Linear Combination Calculator", description: "Calculate linear combination calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "linear-independence-calculator",
    name: "Linear Independence Calculator",
    description: "Solve problems involving Linear Independence Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Linear Independence Calculator", description: "Calculate linear independence calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "lu-decomposition-calculator",
    name: "LU Decomposition Calculator",
    description: "Solve problems involving LU Decomposition Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "LU Decomposition Calculator", description: "Calculate lu decomposition calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-calculator",
    name: "Matrix Calculator",
    description: "Solve problems involving Matrix Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Calculator", description: "Calculate matrix calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-addition-and-subtraction-calculator",
    name: "Matrix Addition and Subtraction Calculator",
    description: "Solve problems involving Matrix Addition and Subtraction Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Addition and Subtraction Calculator", description: "Calculate matrix addition and subtraction calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-by-scalar-calculator",
    name: "Matrix by Scalar Calculator",
    description: "Solve problems involving Matrix by Scalar Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix by Scalar Calculator", description: "Calculate matrix by scalar calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-determinant-calculator",
    name: "Matrix Determinant Calculator",
    description: "Solve problems involving Matrix Determinant Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Determinant Calculator", description: "Calculate matrix determinant calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-multiplication-calculator",
    name: "Matrix Multiplication Calculator",
    description: "Solve problems involving Matrix Multiplication Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Multiplication Calculator", description: "Calculate matrix multiplication calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-norm-calculator",
    name: "Matrix Norm Calculator",
    description: "Solve problems involving Matrix Norm Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Norm Calculator", description: "Calculate matrix norm calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-power-calculator",
    name: "Matrix Power Calculator",
    description: "Solve problems involving Matrix Power Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Power Calculator", description: "Calculate matrix power calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-rank-calculator",
    name: "Matrix Rank Calculator",
    description: "Solve problems involving Matrix Rank Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Rank Calculator", description: "Calculate matrix rank calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-trace-calculator",
    name: "Matrix Trace Calculator",
    description: "Solve problems involving Matrix Trace Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Trace Calculator", description: "Calculate matrix trace calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "matrix-transpose-calculator",
    name: "Matrix Transpose Calculator",
    description: "Solve problems involving Matrix Transpose Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Matrix Transpose Calculator", description: "Calculate matrix transpose calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "null-space-calculator",
    name: "Null Space Calculator",
    description: "Solve problems involving Null Space Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Null Space Calculator", description: "Calculate null space calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "polar-decomposition-calculator",
    name: "Polar Decomposition Calculator",
    description: "Solve problems involving Polar Decomposition Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Polar Decomposition Calculator", description: "Calculate polar decomposition calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "pseudoinverse-calculator",
    name: "Pseudoinverse Calculator",
    description: "Solve problems involving Pseudoinverse Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Pseudoinverse Calculator", description: "Calculate pseudoinverse calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "qr-decomposition-calculator",
    name: "QR Decomposition Calculator",
    description: "Solve problems involving QR Decomposition Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "QR Decomposition Calculator", description: "Calculate qr decomposition calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "reduced-row-echelon-form-calculator",
    name: "(Reduced) Row Echelon Form Calculator",
    description: "Solve problems involving (Reduced) Row Echelon Form Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "(Reduced) Row Echelon Form Calculator", description: "Calculate (reduced) row echelon form calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "singular-values-calculator",
    name: "Singular Values Calculator",
    description: "Solve problems involving Singular Values Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Singular Values Calculator", description: "Calculate singular values calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "svd-calculator",
    name: "SVD Calculator",
    description: "Solve problems involving SVD Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "SVD Calculator", description: "Calculate svd calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "tensor-product-calculator",
    name: "Tensor Product Calculator",
    description: "Solve problems involving Tensor Product Calculator.",
    category: "math",
    subcategory: "linear-algebra",
    scientificFormula: "Result = f(Matrix)",
    inputs: [
      { id: "a11", label: "A11", type: "number", defaultValue: 1 },
      { id: "a12", label: "A12", type: "number", defaultValue: 0 },
      { id: "a21", label: "A21", type: "number", defaultValue: 0 },
      { id: "a22", label: "A22", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "trace", label: "Trace (A11+A22)", formula: "a11 + a22", unit: "" },
      { id: "det", label: "Determinant", formula: "(a11 * a22) - (a12 * a21)", unit: "" }
    ],
    theory: "Linear algebra handles vector spaces, matrices, and linear mappings.",
    seoMeta: { title: "Tensor Product Calculator", description: "Calculate tensor product calculator.", keywords: "linear algebra, matrices, math, calculator" }
  },
  {
    id: "arccos-calculator-inverse-cosine",
    name: "Arccos Calculator (Inverse Cosine)",
    description: "Solve problems involving Arccos Calculator (Inverse Cosine).",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Arccos Calculator (Inverse Cosine)", description: "Calculate arccos calculator (inverse cosine).", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "arcsin-calculator-inverse-sine",
    name: "Arcsin Calculator (Inverse Sine)",
    description: "Solve problems involving Arcsin Calculator (Inverse Sine).",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Arcsin Calculator (Inverse Sine)", description: "Calculate arcsin calculator (inverse sine).", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "arctan-calculator-inverse-tangent",
    name: "Arctan Calculator (Inverse Tangent)",
    description: "Solve problems involving Arctan Calculator (Inverse Tangent).",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Arctan Calculator (Inverse Tangent)", description: "Calculate arctan calculator (inverse tangent).", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "cofunction-calculator",
    name: "Cofunction Calculator",
    description: "Solve problems involving Cofunction Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Cofunction Calculator", description: "Calculate cofunction calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "cosecant-calculator",
    name: "Cosecant Calculator",
    description: "Solve problems involving Cosecant Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Cosecant Calculator", description: "Calculate cosecant calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "cosine-calculator",
    name: "Cosine Calculator",
    description: "Solve problems involving Cosine Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Cosine Calculator", description: "Calculate cosine calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "cotangent-calculator",
    name: "Cotangent Calculator",
    description: "Solve problems involving Cotangent Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Cotangent Calculator", description: "Calculate cotangent calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "double-angle-formula-calculator",
    name: "Double Angle Formula Calculator",
    description: "Solve problems involving Double Angle Formula Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Double Angle Formula Calculator", description: "Calculate double angle formula calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "half-angle-calculator",
    name: "Half Angle Calculator",
    description: "Solve problems involving Half Angle Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Half Angle Calculator", description: "Calculate half angle calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "inverse-trigonometric-functions-calculator",
    name: "Inverse Trigonometric Functions Calculator",
    description: "Solve problems involving Inverse Trigonometric Functions Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Inverse Trigonometric Functions Calculator", description: "Calculate inverse trigonometric functions calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "law-of-cosines-calculator",
    name: "Law of Cosines Calculator",
    description: "Solve problems involving Law of Cosines Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Law of Cosines Calculator", description: "Calculate law of cosines calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "law-of-sines-calculator",
    name: "Law of Sines Calculator",
    description: "Solve problems involving Law of Sines Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Law of Sines Calculator", description: "Calculate law of sines calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "phase-shift-calculator",
    name: "Phase Shift Calculator",
    description: "Solve problems involving Phase Shift Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Phase Shift Calculator", description: "Calculate phase shift calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "power-reducing-calculator",
    name: "Power Reducing Calculator",
    description: "Solve problems involving Power Reducing Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Power Reducing Calculator", description: "Calculate power reducing calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "quiz-right-triangle-side-and-angle-calculator",
    name: "Quiz: Right Triangle Side and Angle Calculator",
    description: "Solve problems involving Quiz: Right Triangle Side and Angle Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Quiz: Right Triangle Side and Angle Calculator", description: "Calculate quiz: right triangle side and angle calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "quiz-trigonometry-calculator",
    name: "Quiz: Trigonometry Calculator",
    description: "Solve problems involving Quiz: Trigonometry Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Quiz: Trigonometry Calculator", description: "Calculate quiz: trigonometry calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "secant-calculator",
    name: "Secant Calculator",
    description: "Solve problems involving Secant Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Secant Calculator", description: "Calculate secant calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "sine-calculator",
    name: "Sine Calculator",
    description: "Solve problems involving Sine Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Sine Calculator", description: "Calculate sine calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "sum-and-difference-identities-calculator",
    name: "Sum and Difference Identities Calculator",
    description: "Solve problems involving Sum and Difference Identities Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Sum and Difference Identities Calculator", description: "Calculate sum and difference identities calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "tangent-calculator",
    name: "Tangent Calculator",
    description: "Solve problems involving Tangent Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Tangent Calculator", description: "Calculate tangent calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "trig-identities-calculator",
    name: "Trig Identities Calculator",
    description: "Solve problems involving Trig Identities Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Trig Identities Calculator", description: "Calculate trig identities calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "trigonometric-functions-calculator",
    name: "Trigonometric Functions Calculator",
    description: "Solve problems involving Trigonometric Functions Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Trigonometric Functions Calculator", description: "Calculate trigonometric functions calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "trigonometry-calculator",
    name: "Trigonometry Calculator",
    description: "Solve problems involving Trigonometry Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Trigonometry Calculator", description: "Calculate trigonometry calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "unit-circle-calculator",
    name: "Unit Circle Calculator",
    description: "Solve problems involving Unit Circle Calculator.",
    category: "math",
    subcategory: "trigonometry",
    scientificFormula: "Result = f(\\theta)",
    inputs: [
      { id: "angle", label: "Angle (Degrees)", type: "number", defaultValue: 45 }
    ],
    outputs: [
      { id: "rad", label: "Radians", formula: "angle * (Math.PI / 180)", unit: "rad" },
      { id: "sin", label: "Sine", formula: "Math.sin(angle * (Math.PI / 180))", unit: "" },
      { id: "cos", label: "Cosine", formula: "Math.cos(angle * (Math.PI / 180))", unit: "" },
      { id: "tan", label: "Tangent", formula: "Math.tan(angle * (Math.PI / 180))", unit: "" }
    ],
    theory: "Trigonometry deals with the relationships between the sides and angles of triangles.",
    seoMeta: { title: "Unit Circle Calculator", description: "Calculate unit circle calculator.", keywords: "trigonometry, math, calculator" }
  },
  {
    id: "area-calculator",
    name: "Area Calculator",
    description: "Solve problems involving Area Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Area Calculator", description: "Calculate area calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "area-of-a-rectangle-calculator",
    name: "Area of a Rectangle Calculator",
    description: "Solve problems involving Area of a Rectangle Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Area of a Rectangle Calculator", description: "Calculate area of a rectangle calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "area-of-crescent-calculator",
    name: "Area of Crescent Calculator",
    description: "Solve problems involving Area of Crescent Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Area of Crescent Calculator", description: "Calculate area of crescent calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "center-of-mass-calculator",
    name: "Center of Mass Calculator",
    description: "Solve problems involving Center of Mass Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Center of Mass Calculator", description: "Calculate center of mass calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "centroid-calculator",
    name: "Centroid Calculator",
    description: "Solve problems involving Centroid Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Centroid Calculator", description: "Calculate centroid calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "chord-length-calculator",
    name: "Chord Length Calculator",
    description: "Solve problems involving Chord Length Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Chord Length Calculator", description: "Calculate chord length calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "conic-sections-calculator",
    name: "Conic Sections Calculator",
    description: "Solve problems involving Conic Sections Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Conic Sections Calculator", description: "Calculate conic sections calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "cross-sectional-area-calculator",
    name: "Cross-Sectional Area Calculator",
    description: "Solve problems involving Cross-Sectional Area Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Cross-Sectional Area Calculator", description: "Calculate cross-sectional area calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "cycloid-calculator",
    name: "Cycloid Calculator",
    description: "Solve problems involving Cycloid Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Cycloid Calculator", description: "Calculate cycloid calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "ellipse-calculator",
    name: "Ellipse Calculator",
    description: "Solve problems involving Ellipse Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Ellipse Calculator", description: "Calculate ellipse calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "golden-rectangle-calculator",
    name: "Golden Rectangle Calculator",
    description: "Solve problems involving Golden Rectangle Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Golden Rectangle Calculator", description: "Calculate golden rectangle calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "hexagon-calculator",
    name: "Hexagon Calculator",
    description: "Solve problems involving Hexagon Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Hexagon Calculator", description: "Calculate hexagon calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "m-bius-strip-calculator",
    name: "Möbius Strip Calculator",
    description: "Solve problems involving Möbius Strip Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Möbius Strip Calculator", description: "Calculate möbius strip calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "moment-of-inertia-calculator",
    name: "Moment of Inertia Calculator",
    description: "Solve problems involving Moment of Inertia Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Moment of Inertia Calculator", description: "Calculate moment of inertia calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "octagon-calculator",
    name: "Octagon Calculator",
    description: "Solve problems involving Octagon Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Octagon Calculator", description: "Calculate octagon calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "orthocenter-calculator",
    name: "Orthocenter Calculator",
    description: "Solve problems involving Orthocenter Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Orthocenter Calculator", description: "Calculate orthocenter calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "pentagon-calculator",
    name: "Pentagon Calculator",
    description: "Solve problems involving Pentagon Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Pentagon Calculator", description: "Calculate pentagon calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "perimeter-calculator",
    name: "Perimeter Calculator",
    description: "Solve problems involving Perimeter Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Perimeter Calculator", description: "Calculate perimeter calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "quadrilateral-calculator",
    name: "Quadrilateral Calculator",
    description: "Solve problems involving Quadrilateral Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Quadrilateral Calculator", description: "Calculate quadrilateral calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "quiz-area-of-a-rectangle-calculator",
    name: "Quiz: Area of a Rectangle Calculator",
    description: "Solve problems involving Quiz: Area of a Rectangle Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Quiz: Area of a Rectangle Calculator", description: "Calculate quiz: area of a rectangle calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "polygon-calculator",
    name: "Polygon Calculator",
    description: "Solve problems involving Polygon Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Polygon Calculator", description: "Calculate polygon calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "segment-addition-postulate-calculator",
    name: "Segment Addition Postulate Calculator",
    description: "Solve problems involving Segment Addition Postulate Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Segment Addition Postulate Calculator", description: "Calculate segment addition postulate calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "segment-area-calculator",
    name: "Segment Area Calculator",
    description: "Solve problems involving Segment Area Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Segment Area Calculator", description: "Calculate segment area calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "spiral-length-calculator",
    name: "Spiral Length Calculator",
    description: "Solve problems involving Spiral Length Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Spiral Length Calculator", description: "Calculate spiral length calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "square-calc-find-a-p-d",
    name: "Square Calc: find A, P, d",
    description: "Solve problems involving Square Calc: find A, P, d.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Square Calc: find A, P, d", description: "Calculate square calc: find a, p, d.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "star-shape-calculator",
    name: "Star Shape Calculator",
    description: "Solve problems involving Star Shape Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Star Shape Calculator", description: "Calculate star shape calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "trapezoid-calculator",
    name: "Trapezoid Calculator",
    description: "Solve problems involving Trapezoid Calculator.",
    category: "math",
    subcategory: "2d-geometry",
    scientificFormula: "Result = f(Area, Length)",
    inputs: [
      { id: "length", label: "Length / Major Axis (units)", type: "number", defaultValue: 10 },
      { id: "width", label: "Width / Minor Axis (units)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "length * width", unit: "sq units" },
      { id: "perimeter", label: "Perimeter", formula: "2 * (length + width)", unit: "units" }
    ],
    theory: "2D geometry explores the properties of shapes like polygons, ellipses, and more on a plane.",
    seoMeta: { title: "Trapezoid Calculator", description: "Calculate trapezoid calculator.", keywords: "2d geometry, math, calculator, area" }
  },
  {
    id: "30-60-90-triangle-calculator",
    name: "30 60 90 Triangle Calculator",
    description: "Solve problems involving 30 60 90 Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "30 60 90 Triangle Calculator", description: "Calculate 30 60 90 triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "45-45-90-triangle-calculator",
    name: "45 45 90 Triangle Calculator",
    description: "Solve problems involving 45 45 90 Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "45 45 90 Triangle Calculator", description: "Calculate 45 45 90 triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "area-of-a-right-triangle-calculator",
    name: "Area of a Right Triangle Calculator",
    description: "Solve problems involving Area of a Right Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Area of a Right Triangle Calculator", description: "Calculate area of a right triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "circumscribed-circle-calculator",
    name: "Circumscribed Circle Calculator",
    description: "Solve problems involving Circumscribed Circle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Circumscribed Circle Calculator", description: "Calculate circumscribed circle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "classifying-triangles-calculator",
    name: "Classifying Triangles Calculator",
    description: "Solve problems involving Classifying Triangles Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Classifying Triangles Calculator", description: "Calculate classifying triangles calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "equilateral-triangle-calculator",
    name: "Equilateral Triangle Calculator",
    description: "Solve problems involving Equilateral Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Equilateral Triangle Calculator", description: "Calculate equilateral triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "heron-s-formula-calculator",
    name: "Heron's Formula Calculator",
    description: "Solve problems involving Heron's Formula Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Heron's Formula Calculator", description: "Calculate heron's formula calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "hypotenuse-calculator",
    name: "Hypotenuse Calculator",
    description: "Solve problems involving Hypotenuse Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Hypotenuse Calculator", description: "Calculate hypotenuse calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "isosceles-triangle-calculator",
    name: "Isosceles Triangle Calculator",
    description: "Solve problems involving Isosceles Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Isosceles Triangle Calculator", description: "Calculate isosceles triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "perimeter-of-a-triangle-calculator",
    name: "Perimeter of a Triangle Calculator",
    description: "Solve problems involving Perimeter of a Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Perimeter of a Triangle Calculator", description: "Calculate perimeter of a triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "pythagorean-theorem-calculator",
    name: "Pythagorean Theorem Calculator",
    description: "Solve problems involving Pythagorean Theorem Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Pythagorean Theorem Calculator", description: "Calculate pythagorean theorem calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "pythagorean-triples-calculator",
    name: "Pythagorean Triples Calculator",
    description: "Solve problems involving Pythagorean Triples Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Pythagorean Triples Calculator", description: "Calculate pythagorean triples calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "right-triangle-calculator",
    name: "Right Triangle Calculator",
    description: "Solve problems involving Right Triangle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Right Triangle Calculator", description: "Calculate right triangle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "right-triangle-side-and-angle-calculator",
    name: "Right Triangle Side and Angle Calculator",
    description: "Solve problems involving Right Triangle Side and Angle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Right Triangle Side and Angle Calculator", description: "Calculate right triangle side and angle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "similar-triangles-calculator",
    name: "Similar Triangles Calculator",
    description: "Solve problems involving Similar Triangles Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Similar Triangles Calculator", description: "Calculate similar triangles calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "special-right-triangles-calculator",
    name: "Special Right Triangles Calculator",
    description: "Solve problems involving Special Right Triangles Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Special Right Triangles Calculator", description: "Calculate special right triangles calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "triangle-angle-calculator",
    name: "Triangle Angle Calculator",
    description: "Solve problems involving Triangle Angle Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Triangle Angle Calculator", description: "Calculate triangle angle calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "triangle-area-calculator",
    name: "Triangle Area Calculator",
    description: "Solve problems involving Triangle Area Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Triangle Area Calculator", description: "Calculate triangle area calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "triangle-height-calculator",
    name: "Triangle Height Calculator",
    description: "Solve problems involving Triangle Height Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Triangle Height Calculator", description: "Calculate triangle height calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "triangle-inequality-theorem-calculator",
    name: "Triangle Inequality Theorem Calculator",
    description: "Solve problems involving Triangle Inequality Theorem Calculator.",
    category: "math",
    subcategory: "triangles",
    scientificFormula: "Result = f(Sides, Angles)",
    inputs: [
      { id: "sideA", label: "Side A", type: "number", defaultValue: 3 },
      { id: "sideB", label: "Side B", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "area", label: "Area (if right triangle)", formula: "(sideA * sideB) / 2", unit: "sq units" },
      { id: "hypotenuse", label: "Hypotenuse (if right)", formula: "Math.sqrt((sideA*sideA) + (sideB*sideB))", unit: "units" }
    ],
    theory: "Triangles are fundamental polygons with three edges and three vertices.",
    seoMeta: { title: "Triangle Inequality Theorem Calculator", description: "Calculate triangle inequality theorem calculator.", keywords: "triangle, math, calculator, geometry" }
  },
  {
    id: "arc-length-calculator",
    name: "Arc Length Calculator",
    description: "Solve problems involving Arc Length Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Arc Length Calculator", description: "Calculate arc length calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "area-of-a-circle-calculator",
    name: "Area of a Circle Calculator",
    description: "Solve problems involving Area of a Circle Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Area of a Circle Calculator", description: "Calculate area of a circle calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "circle-calculator",
    name: "Circle Calculator",
    description: "Solve problems involving Circle Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Circle Calculator", description: "Calculate circle calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "circle-theorems-calculator",
    name: "Circle Theorems Calculator",
    description: "Solve problems involving Circle Theorems Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Circle Theorems Calculator", description: "Calculate circle theorems calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "circumference-calculator",
    name: "Circumference Calculator",
    description: "Solve problems involving Circumference Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Circumference Calculator", description: "Calculate circumference calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "coin-rotation-paradox",
    name: "Coin Rotation Paradox",
    description: "Solve problems involving Coin Rotation Paradox.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Coin Rotation Paradox", description: "Calculate coin rotation paradox.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "equation-of-a-circle-calculator",
    name: "Equation of a Circle Calculator",
    description: "Solve problems involving Equation of a Circle Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Equation of a Circle Calculator", description: "Calculate equation of a circle calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "sector-area-calculator",
    name: "Sector Area Calculator",
    description: "Solve problems involving Sector Area Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Sector Area Calculator", description: "Calculate sector area calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "semicircle-area-calculator",
    name: "Semicircle Area Calculator",
    description: "Solve problems involving Semicircle Area Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Semicircle Area Calculator", description: "Calculate semicircle area calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "square-in-a-circle-calculator",
    name: "Square in a Circle Calculator",
    description: "Solve problems involving Square in a Circle Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Square in a Circle Calculator", description: "Calculate square in a circle calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "string-girdling-earth-calculator",
    name: "String Girdling Earth Calculator",
    description: "Solve problems involving String Girdling Earth Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "String Girdling Earth Calculator", description: "Calculate string girdling earth calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "tangent-of-a-circle-calculator",
    name: "Tangent of a Circle Calculator",
    description: "Solve problems involving Tangent of a Circle Calculator.",
    category: "math",
    subcategory: "circles",
    scientificFormula: "A = \\pi r^2, C = 2\\pi r",
    inputs: [
      { id: "radius", label: "Radius", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "area", label: "Area", formula: "Math.PI * radius * radius", unit: "sq units" },
      { id: "circumference", label: "Circumference", formula: "2 * Math.PI * radius", unit: "units" },
      { id: "diameter", label: "Diameter", formula: "2 * radius", unit: "units" }
    ],
    theory: "Circles are fundamental shapes defined by all points equidistant from a center point.",
    seoMeta: { title: "Tangent of a Circle Calculator", description: "Calculate tangent of a circle calculator.", keywords: "circle, geometry, math, calculator" }
  },
  {
    id: "angle-between-two-vectors-calculator",
    name: "Angle Between Two Vectors Calculator",
    description: "Calculate parameters related to Angle Between Two Vectors Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Angle Between Two Vectors Calculator.",
    seoMeta: { title: "Angle Between Two Vectors Calculator", description: "Calculate angle between two vectors calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "central-angle-calculator",
    name: "Central Angle Calculator",
    description: "Calculate parameters related to Central Angle Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Central Angle Calculator.",
    seoMeta: { title: "Central Angle Calculator", description: "Calculate central angle calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "clock-angle-calculator",
    name: "Clock Angle Calculator",
    description: "Calculate parameters related to Clock Angle Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Clock Angle Calculator.",
    seoMeta: { title: "Clock Angle Calculator", description: "Calculate clock angle calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "complementary-angles-calculator",
    name: "Complementary Angles Calculator",
    description: "Calculate parameters related to Complementary Angles Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Complementary Angles Calculator.",
    seoMeta: { title: "Complementary Angles Calculator", description: "Calculate complementary angles calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "coterminal-angle-calculator",
    name: "Coterminal Angle Calculator",
    description: "Calculate parameters related to Coterminal Angle Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Coterminal Angle Calculator.",
    seoMeta: { title: "Coterminal Angle Calculator", description: "Calculate coterminal angle calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "reference-angle-calculator",
    name: "Reference Angle Calculator",
    description: "Calculate parameters related to Reference Angle Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Reference Angle Calculator.",
    seoMeta: { title: "Reference Angle Calculator", description: "Calculate reference angle calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "supplementary-angles-calculator",
    name: "Supplementary Angles Calculator",
    description: "Calculate parameters related to Supplementary Angles Calculator.",
    category: "math",
    subcategory: "angles",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Supplementary Angles Calculator.",
    seoMeta: { title: "Supplementary Angles Calculator", description: "Calculate supplementary angles calculator.", keywords: "calculator, math, angles" }
  },
  {
    id: "surface-area-of-a-hemisphere-calculator",
    name: "Surface Area of a Hemisphere Calculator",
    description: "Calculate parameters related to Surface Area of a Hemisphere Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Surface Area of a Hemisphere Calculator.",
    seoMeta: { title: "Surface Area of a Hemisphere Calculator", description: "Calculate surface area of a hemisphere calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "cube-calculator",
    name: "Cube Calculator",
    description: "Calculate parameters related to Cube Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Cube Calculator.",
    seoMeta: { title: "Cube Calculator", description: "Calculate cube calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "cube-calc-find-v-a-d",
    name: "Cube Calc: find V, a, d",
    description: "Calculate parameters related to Cube Calc: find V, a, d.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Cube Calc: find V, a, d.",
    seoMeta: { title: "Cube Calc: find V, a, d", description: "Calculate cube calc: find v, a, d.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "ellipsoid-volume-calculator",
    name: "Ellipsoid Volume Calculator",
    description: "Calculate parameters related to Ellipsoid Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Ellipsoid Volume Calculator.",
    seoMeta: { title: "Ellipsoid Volume Calculator", description: "Calculate ellipsoid volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "great-circle-calculator",
    name: "Great Circle Calculator",
    description: "Calculate parameters related to Great Circle Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Great Circle Calculator.",
    seoMeta: { title: "Great Circle Calculator", description: "Calculate great circle calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "lateral-area-trapezoidal-prism-calculator",
    name: "Lateral Area Trapezoidal Prism Calculator",
    description: "Calculate parameters related to Lateral Area Trapezoidal Prism Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Lateral Area Trapezoidal Prism Calculator.",
    seoMeta: { title: "Lateral Area Trapezoidal Prism Calculator", description: "Calculate lateral area trapezoidal prism calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "pyramid-angle-calculator",
    name: "Pyramid Angle Calculator",
    description: "Calculate parameters related to Pyramid Angle Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Pyramid Angle Calculator.",
    seoMeta: { title: "Pyramid Angle Calculator", description: "Calculate pyramid angle calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "pyramid-volume-calculator",
    name: "Pyramid Volume Calculator",
    description: "Calculate parameters related to Pyramid Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Pyramid Volume Calculator.",
    seoMeta: { title: "Pyramid Volume Calculator", description: "Calculate pyramid volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "quiz-cylinder-volume-calculator",
    name: "Quiz: Cylinder Volume Calculator",
    description: "Calculate parameters related to Quiz: Cylinder Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Quiz: Cylinder Volume Calculator.",
    seoMeta: { title: "Quiz: Cylinder Volume Calculator", description: "Calculate quiz: cylinder volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "quiz-cylinder-volume-liters-calculator",
    name: "Quiz: Cylinder Volume Liters Calculator",
    description: "Calculate parameters related to Quiz: Cylinder Volume Liters Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Quiz: Cylinder Volume Liters Calculator.",
    seoMeta: { title: "Quiz: Cylinder Volume Liters Calculator", description: "Calculate quiz: cylinder volume liters calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "rectangular-prism-calculator",
    name: "Rectangular Prism Calculator",
    description: "Calculate parameters related to Rectangular Prism Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Rectangular Prism Calculator.",
    seoMeta: { title: "Rectangular Prism Calculator", description: "Calculate rectangular prism calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "right-circular-cone-calc-find-a-v-a-l-a-b",
    name: "Right Circular Cone Calc: find A, V, A_L, A_B.",
    description: "Calculate parameters related to Right Circular Cone Calc: find A, V, A_L, A_B..",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Right Circular Cone Calc: find A, V, A_L, A_B..",
    seoMeta: { title: "Right Circular Cone Calc: find A, V, A_L, A_B.", description: "Calculate right circular cone calc: find a, v, a_l, a_b..", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "right-cylinder-calculator-find-a-v-a-l-a-b",
    name: "Right Cylinder Calculator: find A, V, A_l, A_b",
    description: "Calculate parameters related to Right Cylinder Calculator: find A, V, A_l, A_b.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Right Cylinder Calculator: find A, V, A_l, A_b.",
    seoMeta: { title: "Right Cylinder Calculator: find A, V, A_l, A_b", description: "Calculate right cylinder calculator: find a, v, a_l, a_b.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "right-rectangular-pyramid-calc-find-a-v-a-l-a-b",
    name: "Right Rectangular Pyramid Calc: find A, V, A_l, A_b",
    description: "Calculate parameters related to Right Rectangular Pyramid Calc: find A, V, A_l, A_b.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Right Rectangular Pyramid Calc: find A, V, A_l, A_b.",
    seoMeta: { title: "Right Rectangular Pyramid Calc: find A, V, A_l, A_b", description: "Calculate right rectangular pyramid calc: find a, v, a_l, a_b.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "slant-height-calculator",
    name: "Slant Height calculator",
    description: "Calculate parameters related to Slant Height calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Slant Height calculator.",
    seoMeta: { title: "Slant Height calculator", description: "Calculate slant height calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "sphere-calc-find-v-a-d",
    name: "Sphere Calc: find V, A, d",
    description: "Calculate parameters related to Sphere Calc: find V, A, d.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Sphere Calc: find V, A, d.",
    seoMeta: { title: "Sphere Calc: find V, A, d", description: "Calculate sphere calc: find v, a, d.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "surface-area-calculator",
    name: "Surface Area Calculator",
    description: "Calculate parameters related to Surface Area Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Surface Area Calculator.",
    seoMeta: { title: "Surface Area Calculator", description: "Calculate surface area calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "surface-area-of-a-triangular-prism-calculator",
    name: "Surface Area of a Triangular Prism Calculator",
    description: "Calculate parameters related to Surface Area of a Triangular Prism Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Surface Area of a Triangular Prism Calculator.",
    seoMeta: { title: "Surface Area of a Triangular Prism Calculator", description: "Calculate surface area of a triangular prism calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "surface-area-to-volume-ratio-calculator",
    name: "Surface Area to Volume Ratio Calculator",
    description: "Calculate parameters related to Surface Area to Volume Ratio Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Surface Area to Volume Ratio Calculator.",
    seoMeta: { title: "Surface Area to Volume Ratio Calculator", description: "Calculate surface area to volume ratio calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "tetrahedron-volume-calculator",
    name: "Tetrahedron Volume Calculator",
    description: "Calculate parameters related to Tetrahedron Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Tetrahedron Volume Calculator.",
    seoMeta: { title: "Tetrahedron Volume Calculator", description: "Calculate tetrahedron volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "torus-surface-area-calculator",
    name: "Torus Surface Area Calculator",
    description: "Calculate parameters related to Torus Surface Area Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Torus Surface Area Calculator.",
    seoMeta: { title: "Torus Surface Area Calculator", description: "Calculate torus surface area calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "torus-volume-calculator",
    name: "Torus Volume Calculator",
    description: "Calculate parameters related to Torus Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Torus Volume Calculator.",
    seoMeta: { title: "Torus Volume Calculator", description: "Calculate torus volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "triangular-prism-calculator",
    name: "Triangular Prism Calculator",
    description: "Calculate parameters related to Triangular Prism Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Triangular Prism Calculator.",
    seoMeta: { title: "Triangular Prism Calculator", description: "Calculate triangular prism calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "volume-calculator",
    name: "Volume Calculator",
    description: "Calculate parameters related to Volume Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Volume Calculator.",
    seoMeta: { title: "Volume Calculator", description: "Calculate volume calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "volume-of-a-hemisphere-calculator",
    name: "Volume of a Hemisphere Calculator",
    description: "Calculate parameters related to Volume of a Hemisphere Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Volume of a Hemisphere Calculator.",
    seoMeta: { title: "Volume of a Hemisphere Calculator", description: "Calculate volume of a hemisphere calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "volume-of-a-trapezoidal-prism-calculator",
    name: "Volume of a Trapezoidal Prism Calculator",
    description: "Calculate parameters related to Volume of a Trapezoidal Prism Calculator.",
    category: "math",
    subcategory: "3d-geometry",
    scientificFormula: "Result = f(x, y)",
    inputs: [
      { id: "val1", label: "Value 1", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "val1 * Math.PI", unit: "units" }
    ],
    theory: "Exploring the calculations involved with Volume of a Trapezoidal Prism Calculator.",
    seoMeta: { title: "Volume of a Trapezoidal Prism Calculator", description: "Calculate volume of a trapezoidal prism calculator.", keywords: "calculator, math, 3d-geometry" }
  },
  {
    id: "arithmetic-sequence-calculator",
    name: "Arithmetic Sequence Calculator",
    description: "Calculate the nth term and the sum of the first n terms of an arithmetic sequence.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "a_n = a_1 + (n-1)d, \\; S_n = \\frac{n}{2}(2a_1 + (n-1)d)",
    inputs: [
      { id: "a1", label: "First term (a₁)", type: "number", defaultValue: 2 },
      { id: "d", label: "Common difference (d)", type: "number", defaultValue: 3 },
      { id: "n", label: "Number of terms (n)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "an", label: "nth Term (aₙ)", formula: "a1 + (n - 1) * d", unit: "" },
      { id: "sn", label: "Sum of n terms (Sₙ)", formula: "(n / 2) * (2 * a1 + (n - 1) * d)", unit: "" }
    ],
    theory: "An arithmetic sequence is a sequence of numbers such that the difference between the consecutive terms is constant.",
    seoMeta: { title: "Arithmetic Sequence Calculator", description: "Calculate arithmetic sequence term and sum.", keywords: "arithmetic sequence, sum, nth term" }
  },
  {
    id: "collatz-conjecture-calculator",
    name: "Collatz Conjecture Calculator",
    description: "Calculate the next step in the Collatz Conjecture sequence.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "n_{i+1} = \\begin{cases} n_i / 2 & \\text{if } n_i \\text{ is even} \\\\ 3n_i + 1 & \\text{if } n_i \\text{ is odd} \\end{cases}",
    inputs: [
      { id: "n", label: "Current Number (n)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "next", label: "Next Number", formula: "n % 2 == 0 ? n / 2 : 3 * n + 1", unit: "" }
    ],
    theory: "The Collatz conjecture states that for any positive integer, you will eventually reach 1 following these rules.",
    seoMeta: { title: "Collatz Conjecture Calculator", description: "Calculate the next step of the Collatz sequence.", keywords: "collatz conjecture, sequence" }
  },
  {
    id: "convolution-calculator",
    name: "Convolution Calculator",
    description: "Calculate the discrete convolution of two 3-element sequences.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "(f * g)[n] = \\sum_{m=-\\infty}^{\\infty} f[m] g[n - m]",
    inputs: [
      { id: "x0", label: "x[0]", type: "number", defaultValue: 1 },
      { id: "x1", label: "x[1]", type: "number", defaultValue: 2 },
      { id: "x2", label: "x[2]", type: "number", defaultValue: 3 },
      { id: "y0", label: "y[0]", type: "number", defaultValue: 4 },
      { id: "y1", label: "y[1]", type: "number", defaultValue: 5 },
      { id: "y2", label: "y[2]", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "z0", label: "z[0]", formula: "x0 * y0", unit: "" },
      { id: "z1", label: "z[1]", formula: "x0 * y1 + x1 * y0", unit: "" },
      { id: "z2", label: "z[2]", formula: "x0 * y2 + x1 * y1 + x2 * y0", unit: "" },
      { id: "z3", label: "z[3]", formula: "x1 * y2 + x2 * y1", unit: "" },
      { id: "z4", label: "z[4]", formula: "x2 * y2", unit: "" }
    ],
    theory: "Convolution is a mathematical operation on two functions that produces a third function expressing how the shape of one is modified by the other.",
    seoMeta: { title: "Convolution Calculator", description: "Calculate discrete convolution of sequences.", keywords: "convolution, sequences, math" }
  },
  {
    id: "fibonacci-calculator",
    name: "Fibonacci Calculator",
    description: "Calculate the nth term of the Fibonacci sequence using Binet's Formula.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "F_n = \\frac{\\varphi^n - (-\\varphi)^{-n}}{\\sqrt{5}}",
    inputs: [
      { id: "n", label: "Term Number (n)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "fn", label: "nth Fibonacci Number", formula: "round((((1 + sqrt(5)) / 2)^n - ((1 - sqrt(5)) / 2)^n) / sqrt(5))", unit: "" }
    ],
    theory: "The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.",
    seoMeta: { title: "Fibonacci Calculator", description: "Calculate the nth Fibonacci number.", keywords: "fibonacci sequence, golden ratio" }
  },
  {
    id: "geometric-sequence-calculator",
    name: "Geometric Sequence Calculator",
    description: "Calculate the nth term and sum of a geometric sequence.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "a_n = a_1 r^{n-1}, \\; S_n = a_1 \\frac{1 - r^n}{1 - r}",
    inputs: [
      { id: "a1", label: "First term (a₁)", type: "number", defaultValue: 2 },
      { id: "r", label: "Common ratio (r)", type: "number", defaultValue: 3 },
      { id: "n", label: "Number of terms (n)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "an", label: "nth Term (aₙ)", formula: "a1 * r^(n - 1)", unit: "" },
      { id: "sn", label: "Sum of n terms (Sₙ)", formula: "r == 1 ? a1 * n : a1 * (1 - r^n) / (1 - r)", unit: "" }
    ],
    theory: "A geometric sequence is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.",
    seoMeta: { title: "Geometric Sequence Calculator", description: "Calculate geometric sequence terms.", keywords: "geometric sequence, ratio, sum" }
  },
  {
    id: "harmonic-number-calculator",
    name: "Harmonic Number Calculator",
    description: "Estimate the nth Harmonic number (approximate for n > 5).",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "H_n \\approx \\ln(n) + \\gamma + \\frac{1}{2n}",
    inputs: [
      { id: "n", label: "nth Harmonic Number", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "hn", label: "Estimated Hₙ", formula: "log(n) + 0.5772156649 + 1 / (2 * n) - 1 / (12 * n^2)", unit: "" }
    ],
    theory: "The nth harmonic number is the sum of the reciprocals of the first n natural numbers.",
    seoMeta: { title: "Harmonic Number Calculator", description: "Calculate the nth harmonic number.", keywords: "harmonic sequence, series, approximation" }
  },
  {
    id: "lagrange-error-bound-calculator",
    name: "Lagrange Error Bound Calculator",
    description: "Calculate the Lagrange error bound for Taylor polynomials.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "R_n \\le \\frac{M}{(n+1)!} |x - a|^{n+1}",
    inputs: [
      { id: "M", label: "Max derivative magnitude (M)", type: "number", defaultValue: 1 },
      { id: "x", label: "Evaluation point (x)", type: "number", defaultValue: 1.5 },
      { id: "a", label: "Center of expansion (a)", type: "number", defaultValue: 1 },
      { id: "n", label: "Degree of polynomial (n)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "error", label: "Lagrange Error Bound", formula: "M * abs(x - a)^(n + 1) / factorial(n + 1)", unit: "" }
    ],
    theory: "The Lagrange error bound provides a worst-case estimate of the error when approximating a function with a Taylor polynomial.",
    seoMeta: { title: "Lagrange Error Bound Calculator", description: "Calculate Taylor polynomial error bound.", keywords: "lagrange error bound, taylor series" }
  },
  {
    id: "pascals-triangle-calculator",
    name: "Pascal's Triangle Calculator",
    description: "Calculate the value at a specific row and position in Pascal's Triangle.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
    inputs: [
      { id: "n", label: "Row Number (n >= 0)", type: "number", defaultValue: 5 },
      { id: "k", label: "Position (k from 0 to n)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "val", label: "Value", formula: "combinations(n, k)", unit: "" }
    ],
    theory: "Pascal's triangle is a triangular array of the binomial coefficients.",
    seoMeta: { title: "Pascal's Triangle Calculator", description: "Calculate binomial coefficients.", keywords: "pascals triangle, binomial coefficient" }
  },
  {
    id: "sequence-calculator",
    name: "Sequence Calculator",
    description: "Calculate the nth term of a quadratic sequence (an² + bn + c).",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "a_n = a n^2 + b n + c",
    inputs: [
      { id: "a", label: "Coefficient of n² (a)", type: "number", defaultValue: 1 },
      { id: "b", label: "Coefficient of n (b)", type: "number", defaultValue: 2 },
      { id: "c", label: "Constant (c)", type: "number", defaultValue: 1 },
      { id: "n", label: "Term Number (n)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "term", label: "nth Term", formula: "a * n^2 + b * n + c", unit: "" }
    ],
    theory: "A sequence is an enumerated collection of objects in which repetitions are allowed and order matters.",
    seoMeta: { title: "Sequence Calculator", description: "Calculate nth term of a quadratic sequence.", keywords: "sequence calculator, quadratic" }
  },
  {
    id: "sum-of-a-linear-number-sequence-calculator",
    name: "Sum of a Linear Number Sequence Calculator",
    description: "Calculate the sum of a linear sequence given first term, last term, and number of terms.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "S_n = \\frac{n}{2}(a_1 + a_n)",
    inputs: [
      { id: "a1", label: "First Term (a₁)", type: "number", defaultValue: 1 },
      { id: "an", label: "Last Term (aₙ)", type: "number", defaultValue: 100 },
      { id: "n", label: "Number of Terms (n)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "sum", label: "Sum of Sequence", formula: "(n / 2) * (a1 + an)", unit: "" }
    ],
    theory: "The sum of a linear (arithmetic) sequence can be quickly computed if the first and last terms are known.",
    seoMeta: { title: "Sum of Linear Sequence Calculator", description: "Sum an arithmetic progression.", keywords: "sum, linear sequence, arithmetic" }
  },
  {
    id: "sum-of-series-calculator",
    name: "Sum of Series Calculator",
    description: "Calculate the sum of an arithmetic series using the common difference.",
    category: "math",
    subcategory: "sequences",
    scientificFormula: "S_n = \\frac{n}{2}(2a + (n-1)d)",
    inputs: [
      { id: "a", label: "First Term (a)", type: "number", defaultValue: 5 },
      { id: "d", label: "Common Difference (d)", type: "number", defaultValue: 2 },
      { id: "n", label: "Number of Terms (n)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "sum", label: "Sum of Series", formula: "(n / 2) * (2 * a + (n - 1) * d)", unit: "" }
    ],
    theory: "A series is roughly speaking, a description of the operation of adding infinitely many quantities, one after the other, to a given starting quantity.",
    seoMeta: { title: "Sum of Series Calculator", description: "Calculate sum of an arithmetic series.", keywords: "sum of series, arithmetic sequence" }
  },
  {
    id: "antilog-calculator-antilogarithm",
    name: "Antilog Calculator",
    description: "Calculate the antilogarithm of a number for a given base.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "x = b^y",
    inputs: [
      { id: "y", label: "Exponent (y)", type: "number", defaultValue: 2 },
      { id: "base", label: "Base (b)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Antilog (x)", formula: "base^y", unit: "" }
    ],
    theory: "The antilogarithm is the inverse of the logarithm function. Finding the antilog of y with base b is equivalent to raising b to the power of y.",
    seoMeta: { title: "Antilog Calculator", description: "Calculate the antilogarithm.", keywords: "antilog, logarithm, exponent" }
  },
  {
    id: "change-of-base-formula-calculator",
    name: "Change of Base Formula Calculator",
    description: "Calculate logarithms using the change of base formula.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 8 },
      { id: "base", label: "Original Base (b)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "Log Value", formula: "log(x) / log(base)", unit: "" },
      { id: "ln_x", label: "ln(x)", formula: "log(x)", unit: "" },
      { id: "ln_b", label: "ln(b)", formula: "log(base)", unit: "" }
    ],
    theory: "The change of base formula allows a logarithm with any base to be written in terms of logarithms with a different base, typically natural logarithm or common logarithm.",
    seoMeta: { title: "Change of Base Formula Calculator", description: "Convert and compute logarithms with different bases.", keywords: "change of base, log formula" }
  },
  {
    id: "condense-logarithms-calculator",
    name: "Condense Logarithms Calculator",
    description: "Condense a logarithmic expression of the form a*log(x) + b*log(y).",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "a \\log(x) + b \\log(y) = \\log(x^a \\cdot y^b)",
    inputs: [
      { id: "a", label: "Coefficient a", type: "number", defaultValue: 2 },
      { id: "x", label: "Value x", type: "number", defaultValue: 3 },
      { id: "b", label: "Coefficient b", type: "number", defaultValue: 3 },
      { id: "y", label: "Value y", type: "number", defaultValue: 2 },
      { id: "base", label: "Log Base", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Condensed Log Value", formula: "log((x^a) * (y^b)) / log(base)", unit: "" }
    ],
    theory: "Logarithers can be condensed using the power and product properties of logarithms.",
    seoMeta: { title: "Condense Logarithms Calculator", description: "Condense logarithm expressions easily.", keywords: "condense logs, log properties" }
  },
  {
    id: "dividing-exponents-calculator",
    name: "Dividing Exponents Calculator",
    description: "Divide two exponential terms with the same base.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\frac{x^a}{x^b} = x^{a-b}",
    inputs: [
      { id: "base", label: "Base (x)", type: "number", defaultValue: 5 },
      { id: "exp1", label: "Exponent 1 (a)", type: "number", defaultValue: 6 },
      { id: "exp2", label: "Exponent 2 (b)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "base^(exp1 - exp2)", unit: "" },
      { id: "new_exp", label: "Resulting Exponent (a - b)", formula: "exp1 - exp2", unit: "" }
    ],
    theory: "When dividing exponential terms with the same base, keep the base and subtract the exponent of the denominator from the exponent of the numerator.",
    seoMeta: { title: "Dividing Exponents Calculator", description: "Divide exponential terms easily.", keywords: "divide exponents, quotient rule" }
  },
  {
    id: "dividing-radicals-calculator",
    name: "Dividing Radicals Calculator",
    description: "Divide two radicals with the same index.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}",
    inputs: [
      { id: "a", label: "Radicand 1 (a)", type: "number", defaultValue: 8 },
      { id: "b", label: "Radicand 2 (b)", type: "number", defaultValue: 2 },
      { id: "n", label: "Index (n)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "(a / b)^(1 / n)", unit: "" }
    ],
    theory: "When dividing radicals with the same index, you can divide the radicands under a single radical sign.",
    seoMeta: { title: "Dividing Radicals Calculator", description: "Divide radical expressions easily.", keywords: "dividing radicals, simplify square root" }
  },
  {
    id: "e-calculator-e-raised-to-power-of-x",
    name: "e Raised to Power of x Calculator",
    description: "Calculate the value of Euler's number e raised to the power of x.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "e^x",
    inputs: [
      { id: "x", label: "Exponent (x)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "eˣ", formula: "exp(x)", unit: "" }
    ],
    theory: "Euler's number e (~2.71828) is a mathematical constant that is the base of natural logarithms.",
    seoMeta: { title: "e Raised to Power of x Calculator", description: "Calculate e raised to power of x.", keywords: "euler's number, exp, e^x" }
  },
  {
    id: "expanding-logarithms-calculator",
    name: "Expanding Logarithms Calculator",
    description: "Expand a logarithmic expression of the form log(x^a * y^b).",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\log(x^a \\cdot y^b) = a\\log(x) + b\\log(y)",
    inputs: [
      { id: "x", label: "Value x", type: "number", defaultValue: 2 },
      { id: "a", label: "Exponent a", type: "number", defaultValue: 3 },
      { id: "y", label: "Value y", type: "number", defaultValue: 5 },
      { id: "b", label: "Exponent b", type: "number", defaultValue: 2 },
      { id: "base", label: "Log Base", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Expanded Log Value", formula: "a * (log(x) / log(base)) + b * (log(y) / log(base))", unit: "" }
    ],
    theory: "Expanding logarithms is the inverse process of condensing them, separating factors inside a logarithm into sums of individual logarithms.",
    seoMeta: { title: "Expanding Logarithms Calculator", description: "Expand logarithmic expressions easily.", keywords: "expand logs, log properties" }
  },
  {
    id: "exponent-calculator",
    name: "Exponent Calculator",
    description: "Raise a base to a given exponent.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "x^y",
    inputs: [
      { id: "base", label: "Base (x)", type: "number", defaultValue: 2 },
      { id: "exponent", label: "Exponent (y)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "base^exponent", unit: "" }
    ],
    theory: "An exponent refers to the number of times a number is multiplied by itself.",
    seoMeta: { title: "Exponent Calculator", description: "Calculate base raised to any power.", keywords: "exponent calculator, power" }
  },
  {
    id: "exponential-form-calculator",
    name: "Exponential Form Calculator",
    description: "Convert logarithmic form to exponential form.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\log_b(x) = y \\implies b^y = x",
    inputs: [
      { id: "base", label: "Base (b)", type: "number", defaultValue: 2 },
      { id: "y", label: "Log Result / Exponent (y)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "x", label: "Value (x)", formula: "base^y", unit: "" }
    ],
    theory: "Every logarithmic equation has an equivalent exponential form, showing that logs are simply exponents.",
    seoMeta: { title: "Exponential Form Calculator", description: "Convert logarithmic equations to exponential form.", keywords: "exponential form, logarithms" }
  },
  {
    id: "exponential-function-calculator",
    name: "Exponential Function Calculator",
    description: "Evaluate an exponential function of the form f(x) = a * b^x.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "f(x) = a \\cdot b^x",
    inputs: [
      { id: "a", label: "Initial Value (a)", type: "number", defaultValue: 3 },
      { id: "base", label: "Base (b)", type: "number", defaultValue: 2 },
      { id: "x", label: "Variable (x)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "f(x)", formula: "a * base^x", unit: "" }
    ],
    theory: "An exponential function is a mathematical function of the form f(x) = a * b^x, where x is a variable and b is a positive constant base.",
    seoMeta: { title: "Exponential Function Calculator", description: "Evaluate exponential functions easily.", keywords: "exponential function, math" }
  },
  {
    id: "exponential-growth-calculator",
    name: "Exponential Growth Calculator",
    description: "Calculate exponential growth over time.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "N_t = N_0(1 + r)^t",
    inputs: [
      { id: "n0", label: "Initial Amount (N₀)", type: "number", defaultValue: 100 },
      { id: "r", label: "Growth Rate (r, %)", type: "number", defaultValue: 5 },
      { id: "t", label: "Time (t)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Final Amount (N_t)", formula: "n0 * (1 + r / 100)^t", unit: "" }
    ],
    theory: "Exponential growth occurs when the growth rate of the value of a mathematical function is proportional to the function's current value.",
    seoMeta: { title: "Exponential Growth Calculator", description: "Calculate growth with constant percentage rate.", keywords: "exponential growth, compound growth" }
  },
  {
    id: "log-calculator-logarithm",
    name: "Logarithm Calculator",
    description: "Calculate the logarithm of a number with a custom base.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\log_b(x) = y",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 100 },
      { id: "base", label: "Base (b)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Logarithm (y)", formula: "log(x) / log(base)", unit: "" }
    ],
    theory: "The logarithm is the inverse function to exponentiation. It tells you to what power the base must be raised to get the given number.",
    seoMeta: { title: "Logarithm Calculator", description: "Calculate log with any base.", keywords: "log, logarithm, base" }
  },
  {
    id: "log-base-2-calculator",
    name: "Log Base 2 Calculator",
    description: "Calculate the base-2 logarithm (binary logarithm) of a number.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\log_2(x)",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 32 }
    ],
    outputs: [
      { id: "result", label: "log₂ (x)", formula: "log(x) / log(2)", unit: "" }
    ],
    theory: "The binary logarithm is the logarithm to the base 2, widely used in computer science and information theory.",
    seoMeta: { title: "Log Base 2 Calculator", description: "Calculate binary logarithm.", keywords: "log base 2, binary log" }
  },
  {
    id: "multiplying-exponents-calculator",
    name: "Multiplying Exponents Calculator",
    description: "Multiply two exponential terms with the same base.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "x^a \\cdot x^b = x^{a+b}",
    inputs: [
      { id: "base", label: "Base (x)", type: "number", defaultValue: 3 },
      { id: "exp1", label: "Exponent 1 (a)", type: "number", defaultValue: 4 },
      { id: "exp2", label: "Exponent 2 (b)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "base^(exp1 + exp2)", unit: "" },
      { id: "new_exp", label: "Resulting Exponent (a + b)", formula: "exp1 + exp2", unit: "" }
    ],
    theory: "When multiplying exponential terms with the same base, keep the base and add the exponents.",
    seoMeta: { title: "Multiplying Exponents Calculator", description: "Multiply powers with identical bases.", keywords: "multiply exponents, product rule" }
  },
  {
    id: "multiplying-radicals-calculator",
    name: "Multiplying Radicals Calculator",
    description: "Multiply two radicals with the same index.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}",
    inputs: [
      { id: "a", label: "Radicand 1 (a)", type: "number", defaultValue: 3 },
      { id: "b", label: "Radicand 2 (b)", type: "number", defaultValue: 12 },
      { id: "n", label: "Index (n)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "(a * b)^(1 / n)", unit: "" }
    ],
    theory: "When multiplying radicals with the same index, you can multiply the radicands under a single radical sign.",
    seoMeta: { title: "Multiplying Radicals Calculator", description: "Multiply radicals with identical index.", keywords: "multiply radicals, square root multiply" }
  },
  {
    id: "natural-log-calculator",
    name: "Natural Log Calculator",
    description: "Calculate the natural logarithm (base e) of a number.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "\\ln(x)",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "ln(x)", formula: "log(x)", unit: "" }
    ],
    theory: "The natural logarithm is the logarithm to the base e, where e is an irrational constant approximately equal to 2.71828.",
    seoMeta: { title: "Natural Log Calculator", description: "Calculate natural logarithm of x.", keywords: "natural log, ln, e" }
  },
  {
    id: "negative-log-calculator",
    name: "Negative Log Calculator",
    description: "Calculate the negative logarithm of a number.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "-\\log_b(x)",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 0.001 },
      { id: "base", label: "Base (b)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "result", label: "Negative Logarithm", formula: "-log(x) / log(base)", unit: "" }
    ],
    theory: "Negative logarithms are commonly used in sciences, such as calculating pH in chemistry, which is the negative log of hydrogen ion concentration.",
    seoMeta: { title: "Negative Log Calculator", description: "Calculate negative logarithms.", keywords: "negative log, chemistry, pH" }
  },
  {
    id: "power-of-a-power-calculator",
    name: "Power of a Power Calculator",
    description: "Simplify an exponential expression raised to another power.",
    category: "math",
    subcategory: "exponents-logarithms",
    scientificFormula: "(x^a)^b = x^{a \\cdot b}",
    inputs: [
      { id: "base", label: "Base (x)", type: "number", defaultValue: 2 },
      { id: "exp1", label: "Exponent 1 (a)", type: "number", defaultValue: 3 },
      { id: "exp2", label: "Exponent 2 (b)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "base^(exp1 * exp2)", unit: "" },
      { id: "new_exp", label: "Resulting Exponent (a * b)", formula: "exp1 * exp2", unit: "" }
    ],
    theory: "When raising a power to another power, keep the base and multiply the exponents.",
    seoMeta: { title: "Power of a Power Calculator", description: "Simplify power of a power expressions.", keywords: "power of a power, exponent properties" }
  },
  {
    id: "and-calculator",
    name: "AND Calculator",
    description: "Perform bitwise AND operation on two binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A \\land B",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "AND Result", formula: "bin1 & bin2", unit: "" }
    ],
    theory: "Bitwise AND returns a 1 in each bit position for which the corresponding bits of both operands are 1.",
    seoMeta: { title: "AND Calculator", description: "Calculate bitwise AND of binary numbers.", keywords: "and, bitwise, binary" }
  },
  {
    id: "binary-addition-calculator",
    name: "Binary Addition Calculator",
    description: "Add two binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 + B_2",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "Binary Sum", formula: "bin1 + bin2", unit: "" },
      { id: "dec_result", label: "Decimal Sum", formula: "bin1 + bin2", unit: "" }
    ],
    theory: "Binary addition follows similar rules to decimal addition but carries over when the sum reaches 2 (10 in binary).",
    seoMeta: { title: "Binary Addition Calculator", description: "Add two binary numbers with steps.", keywords: "binary addition, sum, add binary" }
  },
  {
    id: "binary-division-calculator",
    name: "Binary Division Calculator",
    description: "Divide one binary number by another.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 \\div B_2",
    inputs: [
      { id: "bin1", label: "Dividend", type: "text", defaultValue: "1100" },
      { id: "bin2", label: "Divisor", type: "text", defaultValue: "10" }
    ],
    outputs: [
      { id: "result", label: "Quotient", formula: "bin1 / bin2", unit: "" },
      { id: "remainder", label: "Remainder", formula: "bin1 % bin2", unit: "" }
    ],
    theory: "Binary division uses the long division method, subtracting the divisor from sections of the dividend step-by-step.",
    seoMeta: { title: "Binary Division Calculator", description: "Perform binary division.", keywords: "binary division, quotient, remainder" }
  },
  {
    id: "binary-fraction-converter",
    name: "Binary Fraction Converter",
    description: "Convert a decimal fraction into a binary fraction.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "0.d_1d_2... \\to 0.b_1b_2...",
    inputs: [
      { id: "dec_frac", label: "Decimal Fraction (e.g. 0.625)", type: "number", defaultValue: 0.625 }
    ],
    outputs: [
      { id: "bin_frac", label: "Binary Representation", formula: "dec_frac", unit: "" }
    ],
    theory: "To convert a decimal fraction to binary, multiply the fractional part by 2. The integer part becomes the next binary digit, and the process repeats with the remaining fractional part.",
    seoMeta: { title: "Binary Fraction Converter", description: "Convert fractional decimals to binary.", keywords: "binary fraction, decimal to binary" }
  },
  {
    id: "binary-multiplication-calculator",
    name: "Binary Multiplication Calculator",
    description: "Multiply two binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 \\times B_2",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "11" }
    ],
    outputs: [
      { id: "result", label: "Binary Product", formula: "bin1 * bin2", unit: "" },
      { id: "dec_result", label: "Decimal Product", formula: "bin1 * bin2", unit: "" }
    ],
    theory: "Binary multiplication is much simpler than decimal multiplication because the only digits are 0 and 1. The product is calculated via shifts and additions.",
    seoMeta: { title: "Binary Multiplication Calculator", description: "Multiply two binary numbers.", keywords: "binary multiplication, product" }
  },
  {
    id: "binary-calculator",
    name: "Binary Calculator",
    description: "Perform basic arithmetic operations (+, -, *, /) on binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 \\text{ op } B_2",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "op", label: "Operation", type: "select", options: [
        { label: "Addition (+)", value: "+" },
        { label: "Subtraction (-)", value: "-" },
        { label: "Multiplication (*)", value: "*" },
        { label: "Division (/)", value: "/" }
      ], defaultValue: "+" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "10" }
    ],
    outputs: [
      { id: "result", label: "Result", formula: "bin1", unit: "" }
    ],
    theory: "This general binary calculator operates on binary strings, executing standard arithmetic calculations.",
    seoMeta: { title: "Binary Calculator", description: "Perform binary arithmetic.", keywords: "binary calculator, binary math" }
  },
  {
    id: "binary-subtraction-calculator",
    name: "Binary Subtraction Calculator",
    description: "Subtract one binary number from another.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 - B_2",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1100" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1010" }
    ],
    outputs: [
      { id: "result", label: "Binary Difference", formula: "bin1 - bin2", unit: "" },
      { id: "dec_result", label: "Decimal Difference", formula: "bin1 - bin2", unit: "" }
    ],
    theory: "Binary subtraction utilizes borrowing rules where borrowing 1 from the next higher column yields a value of 2 in the current column.",
    seoMeta: { title: "Binary Subtraction Calculator", description: "Subtract binary numbers.", keywords: "binary subtraction, subtract" }
  },
  {
    id: "bit-shift-calculator",
    name: "Bit Shift Calculator",
    description: "Perform bitwise left or right shifts on binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 \\ll S \\text{ or } A_2 \\gg S",
    inputs: [
      { id: "bin", label: "Binary String", type: "text", defaultValue: "1010" },
      { id: "dir", label: "Direction", type: "select", options: [
        { label: "Left Shift (<<)", value: "left" },
        { label: "Right Shift (>>)", value: "right" }
      ], defaultValue: "left" },
      { id: "shift", label: "Shift Amount (bits)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "result", label: "Shifted Result", formula: "bin", unit: "" }
    ],
    theory: "Shifting left by S bits multiplies the number by 2^S, while shifting right divides the number by 2^S (discarding fractional remainders).",
    seoMeta: { title: "Bit Shift Calculator", description: "Perform bitwise shifting operations.", keywords: "bit shift, left shift, right shift" }
  },
  {
    id: "bitwise-calculator",
    name: "Bitwise Calculator",
    description: "Apply standard bitwise logical operators (AND, OR, XOR, NOT) to binary strings.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A_2 \\text{ bitwise } B_2",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "op", label: "Operator", type: "select", options: [
        { label: "AND", value: "AND" },
        { label: "OR", value: "OR" },
        { label: "XOR", value: "XOR" },
        { label: "NOT (operates on A)", value: "NOT" }
      ], defaultValue: "AND" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "Logical Result", formula: "bin1", unit: "" }
    ],
    theory: "Bitwise operators process numbers at the single-bit level, facilitating fast hardware-level logical evaluations.",
    seoMeta: { title: "Bitwise Calculator", description: "Calculate logical bitwise operations.", keywords: "bitwise, and, or, xor, not" }
  },
  {
    id: "nor-calculator",
    name: "NOR Calculator",
    description: "Evaluate the logical bitwise NOR of two binary inputs.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "\\neg (A \\lor B)",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "NOR Result", formula: "bin1", unit: "" }
    ],
    theory: "Bitwise NOR evaluates to 1 only when both matching bits of the operands are 0.",
    seoMeta: { title: "NOR Calculator", description: "Perform bitwise NOR.", keywords: "nor, gate, bitwise" }
  },
  {
    id: "ones-complement-calculator",
    name: "One's Complement Calculator",
    description: "Calculate the one's complement of a binary number.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "\\sim A_2",
    inputs: [
      { id: "bin", label: "Binary String", type: "text", defaultValue: "1010" }
    ],
    outputs: [
      { id: "result", label: "One's Complement", formula: "bin", unit: "" }
    ],
    theory: "One's complement simply inverts all the bits in the binary representation (swaps 0s for 1s and vice versa).",
    seoMeta: { title: "One's Complement Calculator", description: "Calculate one's complement of binary bits.", keywords: "one's complement, invert" }
  },
  {
    id: "or-calculator",
    name: "OR Calculator",
    description: "Evaluate the bitwise OR of two binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A \\lor B",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "OR Result", formula: "bin1 | bin2", unit: "" }
    ],
    theory: "Bitwise OR returns a 1 in each bit position for which the matching bit of either or both operands is 1.",
    seoMeta: { title: "OR Calculator", description: "Perform bitwise OR.", keywords: "or, bitwise, binary" }
  },
  {
    id: "twos-complement-calculator",
    name: "Two's Complement Calculator",
    description: "Find the two's complement of a binary number.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "\\sim A_2 + 1",
    inputs: [
      { id: "bin", label: "Binary String", type: "text", defaultValue: "1010" }
    ],
    outputs: [
      { id: "result", label: "Two's Complement", formula: "bin", unit: "" }
    ],
    theory: "Two's complement represents signed numbers in binary. It is calculated by adding 1 to the One's complement of the number.",
    seoMeta: { title: "Two's Complement Calculator", description: "Calculate two's complement of binary numbers.", keywords: "two's complement, signed binary" }
  },
  {
    id: "xor-calculator",
    name: "XOR Calculator",
    description: "Evaluate the bitwise XOR (exclusive OR) of two binary numbers.",
    category: "math",
    subcategory: "binary",
    scientificFormula: "A \\oplus B",
    inputs: [
      { id: "bin1", label: "Binary A", type: "text", defaultValue: "1010" },
      { id: "bin2", label: "Binary B", type: "text", defaultValue: "1100" }
    ],
    outputs: [
      { id: "result", label: "XOR Result", formula: "bin1 ^ bin2", unit: "" }
    ],
    theory: "Bitwise XOR returns 1 in each bit position where the corresponding bits of the operands are different (one is 1, other is 0).",
    seoMeta: { title: "XOR Calculator", description: "Perform bitwise exclusive OR.", keywords: "xor, exclusive or, bitwise" }
  },
  {
    id: "babylonian-numbers-converter",
    name: "Babylonian Numbers Converter",
    description: "Convert decimal numbers to ancient Babylonian sexagesimal (base-60) representation.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "d = s_k \\times 60^k + ... + s_1 \\times 60 + s_0",
    inputs: [
      { id: "decimal", label: "Decimal Integer", type: "number", defaultValue: 12345 }
    ],
    outputs: [
      { id: "sexagesimal", label: "Babylonian representation (space separated base-60 digits)", formula: "decimal", unit: "" }
    ],
    theory: "Ancient Babylonians used a sexagesimal (base-60) positional numeral system. The digits were written in cuneiform symbols, representing values from 1 to 59, with space separation showing position.",
    seoMeta: { title: "Babylonian Numbers Converter", description: "Convert standard numbers to base-60 Babylonian.", keywords: "babylonian numbers, sexagesimal, base-60" }
  },
  {
    id: "cyclomatic-complexity-calculator",
    name: "Cyclomatic Complexity Calculator",
    description: "Calculate the cyclomatic complexity of a software program code graph.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "M = E - V + 2P",
    inputs: [
      { id: "e", label: "Edges (E)", type: "number", defaultValue: 15 },
      { id: "v", label: "Vertices / Nodes (V)", type: "number", defaultValue: 12 },
      { id: "p", label: "Connected Components (P)", type: "number", defaultValue: 1 }
    ],
    outputs: [
      { id: "result", label: "Cyclomatic Complexity (M)", formula: "e - v + 2 * p", unit: "" }
    ],
    theory: "Cyclomatic complexity is a software metric used to indicate the complexity of a program. It directly measures the number of linearly independent paths through a program's source code graph.",
    seoMeta: { title: "Cyclomatic Complexity Calculator", description: "Calculate cyclomatic complexity of a control flow graph.", keywords: "cyclomatic complexity, edges, vertices" }
  },
  {
    id: "galileos-paradox-of-infinity-calculator",
    name: "Galileo's Paradox of Infinity Calculator",
    description: "Explore Galileo's paradox demonstrating the counter-intuitive properties of infinite sets.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "f(n) = n^2 \\implies |\\mathbb{N}| = |\\{n^2 : n \\in \\mathbb{N}\\}|",
    inputs: [
      { id: "n", label: "Integer (n)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "nth_square", label: "n-th Perfect Square", formula: "n", unit: "" },
      { id: "aleph", label: "Set Cardinality", formula: "n", unit: "" }
    ],
    theory: "Galileo's Paradox states that even though there are far fewer perfect squares than all integers, a one-to-one correspondence can be established between them, proving both sets have the same infinite size: aleph-null (ℵ₀).",
    seoMeta: { title: "Galileo's Paradox of Infinity Calculator", description: "Learn and calculate Galileo's infinite sets paradox.", keywords: "galileo paradox, infinity, set theory, aleph-null" }
  },
  {
    id: "hilberts-hotel-paradox-calculator",
    name: "Hilbert's Hotel Paradox Calculator",
    description: "Simulate accommodating new guests in a fully-occupied infinite hotel.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "n \\to n + k",
    inputs: [
      { id: "guests_arriving", label: "Incoming Guests (k)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "room_shift_formula", label: "Room Relocation Plan", formula: "guests_arriving", unit: "" },
      { id: "new_free_rooms", label: "Vacated Rooms", formula: "guests_arriving", unit: "" }
    ],
    theory: "Hilbert's Paradox of the Grand Hotel illustrates that a fully occupied hotel with infinitely many rooms can still accommodate any number of additional guests by shifting existing occupants down the hallway.",
    seoMeta: { title: "Hilbert's Hotel Paradox Calculator", description: "Explore Hilbert's Hotel infinite guest allocation.", keywords: "hilbert hotel, paradox, infinity" }
  },
  {
    id: "involute-function-calculator",
    name: "Involute Function Calculator",
    description: "Calculate the involute function value for gear design.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "\\text{inv}(\\phi) = \\tan(\\phi) - \\phi",
    inputs: [
      { id: "angle_deg", label: "Pressure Angle (degrees)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "radians", label: "Angle in Radians", formula: "angle_deg", unit: "rad" },
      { id: "inv_val", label: "Involute Value", formula: "angle_deg", unit: "" }
    ],
    theory: "The involute function is used primarily in gear geometry calculations to define pressure angles, base circles, and involute tooth profiles.",
    seoMeta: { title: "Involute Function Calculator", description: "Calculate involute values for gears.", keywords: "involute, gear design, pressure angle" }
  },
  {
    id: "lfsr-calculator",
    name: "LFSR Calculator",
    description: "Simulate a Linear Feedback Shift Register (LFSR) for pseudo-random bit generation.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "b_{new} = \\bigoplus_{i \\in Taps} b_i",
    inputs: [
      { id: "seed", label: "Binary Seed State", type: "text", defaultValue: "1011" },
      { id: "taps", label: "Feedback Taps (comma separated, 1-indexed from right)", type: "text", defaultValue: "3,4" },
      { id: "steps", label: "Simulation Steps", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "sequence", label: "Output Bit Stream", formula: "steps", unit: "" },
      { id: "final_state", label: "Final LFSR Register State", formula: "steps", unit: "" }
    ],
    theory: "A Linear Feedback Shift Register (LFSR) is a shift register whose input bit is a linear function of its previous state. Commonly used in pseudo-random number generators, cryptography, and digital communication.",
    seoMeta: { title: "LFSR Calculator", description: "Simulate Linear Feedback Shift Registers.", keywords: "lfsr, shift register, cryptography" }
  },
  {
    id: "luhn-algorithm-calculator",
    name: "Luhn Algorithm Calculator",
    description: "Check if a numeric code (like credit card number) is valid using the Luhn checksum algorithm.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "\\sum_{i=1}^n f(d_i) \\equiv 0 \\pmod{10}",
    inputs: [
      { id: "card_number", label: "Number / Code String", type: "text", defaultValue: "49927398716" }
    ],
    outputs: [
      { id: "is_valid", label: "Luhn Checksum Result", formula: "card_number", unit: "" },
      { id: "check_digit", label: "Active Check Digit", formula: "card_number", unit: "" }
    ],
    theory: "The Luhn algorithm (also known as mod-10 algorithm) is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and IMEI numbers.",
    seoMeta: { title: "Luhn Algorithm Calculator", description: "Validate identification codes using the Luhn mod-10 formula.", keywords: "luhn algorithm, checksum, credit card validate" }
  },
  {
    id: "mayan-numerals-converter",
    name: "Mayan Numerals Converter",
    description: "Convert decimal integers to ancient Mayan vigesimal (base-20) numeral parts.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "d = m_k \\times 20^k + ... + m_1 \\times 20 + m_0",
    inputs: [
      { id: "decimal", label: "Decimal Integer", type: "number", defaultValue: 12345 }
    ],
    outputs: [
      { id: "mayan_representation", label: "Mayan representation (space separated base-20 digits)", formula: "decimal", unit: "" }
    ],
    theory: "The Mayan civilization used a vigesimal (base-20) positional numeral system. The numerals consisted of three symbols: zero (shell shape), one (a dot), and five (a bar). Positions are vertical base-20 places.",
    seoMeta: { title: "Mayan Numerals Converter", description: "Convert standard decimals to base-20 Mayan.", keywords: "mayan numerals, vigesimal, base-20" }
  },
  {
    id: "miracle-calculator",
    name: "Miracle Math Calculator",
    description: "Demonstrate a classic mental math magic trick.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "\\frac{2x + 10}{2} - x = 5",
    inputs: [
      { id: "secret_number", label: "Choose a Secret Number (x)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "step1", label: "Step 1: Double the number (2x)", formula: "secret_number", unit: "" },
      { id: "step2", label: "Step 2: Add 10 (2x + 10)", formula: "secret_number", unit: "" },
      { id: "step3", label: "Step 3: Divide by 2 (x + 5)", formula: "secret_number", unit: "" },
      { id: "step4", label: "Step 4: Subtract secret (Always 5!)", formula: "secret_number", unit: "" }
    ],
    theory: "This mental trick shows how algebraic simplifications can hide the original variable entirely. No matter which number you start with, the algebraic expression collapses to 5.",
    seoMeta: { title: "Miracle Math Calculator", description: "Try the mental math magic trick.", keywords: "miracle math, magic trick, algebra trick" }
  },
  {
    id: "potato-calculator",
    name: "Potato Paradox Calculator",
    description: "Solve the famous, counter-intuitive Potato Paradox problem.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "W_{final} = W_{initial} \\times \\frac{100 - \%_{water, initial}}{100 - \%_{water, final}}",
    inputs: [
      { id: "initial_weight", label: "Initial Potato Weight", type: "number", defaultValue: 100, unit: "lb" },
      { id: "initial_water_pct", label: "Initial Water Percentage", type: "number", defaultValue: 99, unit: "%" },
      { id: "final_water_pct", label: "Final Water Percentage", type: "number", defaultValue: 98, unit: "%" }
    ],
    outputs: [
      { id: "final_weight", label: "Final Weight after drying", formula: "initial_weight", unit: "lb" }
    ],
    theory: "The Potato Paradox is a mathematical puzzle that shows a highly counter-intuitive result: drying potatoes from 99% water to 98% water cuts their total weight in half because the non-water solids (1% to 2%) must double in concentration.",
    seoMeta: { title: "Potato Paradox Calculator", description: "Solve the potato paradox dried weight.", keywords: "potato paradox, weight calculation" }
  },
  {
    id: "prisoners-dilemma-calculator",
    name: "Prisoner's Dilemma Calculator",
    description: "Model payoffs for the classic Game Theory scenario: Prisoner's Dilemma.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "\\text{Payoffs: } R(Cooperate, Cooperate), P(Defect, Defect)",
    inputs: [
      { id: "p1_choice", label: "Player 1 Strategy", type: "select", options: [
        { label: "Cooperate", value: "Cooperate" },
        { label: "Defect", value: "Defect" }
      ], defaultValue: "Cooperate" },
      { id: "p2_choice", label: "Player 2 Strategy", type: "select", options: [
        { label: "Cooperate", value: "Cooperate" },
        { label: "Defect", value: "Defect" }
      ], defaultValue: "Cooperate" }
    ],
    outputs: [
      { id: "p1_years", label: "Player 1 Penalty", formula: "p1_choice", unit: "" },
      { id: "p2_years", label: "Player 2 Penalty", formula: "p2_choice", unit: "" }
    ],
    theory: "The Prisoner's Dilemma is a standard game analyzed in game theory. It shows why two completely rational individuals might not cooperate, even if it appears that it is in their best interests to do so.",
    seoMeta: { title: "Prisoner's Dilemma Calculator", description: "Explore Game Theory payoffs.", keywords: "prisoner's dilemma, game theory, Nash equilibrium" }
  },
  {
    id: "queueing-theory-calculator",
    name: "Queueing Theory Calculator",
    description: "Calculate performance metrics for a single-server M/M/1 queue model.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "\\rho = \\frac{\\lambda}{\\mu}, L = \\frac{\\lambda}{\\mu - \\lambda}",
    inputs: [
      { id: "arrival_rate", label: "Arrival Rate (λ, customers/hr)", type: "number", defaultValue: 8 },
      { id: "service_rate", label: "Service Rate (μ, customers/hr)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "utilization", label: "Server Utilization (ρ)", formula: "arrival_rate / service_rate", unit: "" },
      { id: "avg_in_system", label: "Avg Customers in System (L)", formula: "arrival_rate / (service_rate - arrival_rate)", unit: "" },
      { id: "avg_wait", label: "Avg System Time (W, hours)", formula: "1 / (service_rate - arrival_rate)", unit: "hours" }
    ],
    theory: "Queueing theory mathematically studies waiting lines. An M/M/1 queue represents a system with exponential arrivals, exponential service times, and a single server.",
    seoMeta: { title: "Queueing Theory Calculator", description: "Calculate M/M/1 queue waits and utilization.", keywords: "queueing theory, single server queue, mm1" }
  },
  {
    id: "rsa-calculator",
    name: "RSA Cryptography Calculator",
    description: "Generate keys and simulate RSA encryption for pedagogical study.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "c = m^e \\pmod n",
    inputs: [
      { id: "p", label: "Prime Number 1 (p)", type: "number", defaultValue: 61 },
      { id: "q", label: "Prime Number 2 (q)", type: "number", defaultValue: 53 },
      { id: "e", label: "Public Exponent (e)", type: "number", defaultValue: 17 },
      { id: "message", label: "Plaintext Message (Integer < n)", type: "number", defaultValue: 65 }
    ],
    outputs: [
      { id: "n", label: "Modulus (n = p*q)", formula: "p", unit: "" },
      { id: "phi", label: "Totient (φ = (p-1)*(q-1))", formula: "p", unit: "" },
      { id: "d", label: "Private Key exponent (d)", formula: "p", unit: "" },
      { id: "ciphertext", label: "Ciphertext (c = m^e mod n)", formula: "p", unit: "" }
    ],
    theory: "RSA is one of the first public-key cryptosystems and is widely used for secure data transmission. Its security relies on the practical difficulty of factoring the product of two large prime numbers.",
    seoMeta: { title: "RSA Cryptography Calculator", description: "Simulate RSA prime public/private key generation.", keywords: "rsa encryption, public key, prime factorization" }
  },
  {
    id: "ugly-duckling-theorem-calculator",
    name: "Ugly Duckling Theorem Calculator",
    description: "Observe Watanabe's Ugly Duckling Theorem on the subjective nature of classification.",
    category: "math",
    subcategory: "other-math",
    scientificFormula: "S = 2^{N-1}",
    inputs: [
      { id: "num_features", label: "Number of Logical Features (N)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "total_predicates", label: "Total Possible Classifications (2^N)", formula: "2^num_features", unit: "" },
      { id: "shared_predicates", label: "Shared Predicates between any two items (2^(N-1))", formula: "2^(num_features - 1)", unit: "" }
    ],
    theory: "Satoshi Watanabe's Ugly Duckling Theorem proves mathematically that classification is impossible without subjective bias: any two arbitrary objects share exactly the same number of predicates (shared features), meaning an 'ugly duckling' is mathematically just as similar to a normal duckling as two normal ducklings are to each other.",
    seoMeta: { title: "Ugly Duckling Theorem Calculator", description: "Explore Watanabe's theorem on subjective classification.", keywords: "ugly duckling theorem, classification, watanabe" }
  }
];
