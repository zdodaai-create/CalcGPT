import { CalculatorConfig } from "./calculator-types";

export const FINANCE_CALCULATORS: CalculatorConfig[] = [
  // BUSINESS PLANNING
  {
    id: "break-even-calculator",
    name: "Break-even Calculator",
    description: "Find the point where your business revenue equals its total costs.",
    category: "finance",
    subcategory: "business-planning",
    scientificFormula: "Break\\text{-}even\\ Units = \\frac{Fixed\\ Costs}{Price - Variable\\ Cost}",
    inputs: [
      { id: "fixed", label: "Total Fixed Costs", type: "number", defaultValue: 10000, unit: "$" },
      { id: "price", label: "Selling Price per Unit", type: "number", defaultValue: 50, unit: "$" },
      { id: "variable", label: "Variable Cost per Unit", type: "number", defaultValue: 20, unit: "$" }
    ],
    outputs: [
      { id: "units", label: "Break-even Units", formula: "fixed / (price - variable)", unit: "units" },
      { id: "revenue", label: "Break-even Revenue", formula: "(fixed / (price - variable)) * price", unit: "$" }
    ],
    theory: "Break-even analysis is a critical tool for any business. It helps you understand how many units you need to sell to cover all your costs before you start making a profit.",
    resultInterpretation: "To cover your ${fixed} fixed costs, you must sell {units} units at ${price} each."
  },
  {
    id: "burn-rate-calculator",
    name: "Burn Rate Calculator",
    description: "Calculate how fast your startup is spending its cash reserves.",
    category: "finance",
    subcategory: "business-planning",
    scientificFormula: "Burn\\ Rate = \\frac{Starting\\ Cash - Ending\\ Cash}{Months}",
    inputs: [
      { id: "reserve", label: "Current Cash Reserves", type: "number", defaultValue: 50000, unit: "$" },
      { id: "expenses", label: "Monthly Expenses", type: "number", defaultValue: 5000, unit: "$" }
    ],
    outputs: [
      { id: "runway", label: "Runway (Months)", formula: "reserve / expenses", unit: "months" }
    ]
  },
  {
    id: "business-loan-calculator",
    name: "Business Loan Calculator",
    description: "Calculate monthly payments and interest for a business loan.",
    category: "finance",
    subcategory: "business-planning",
    scientificFormula: "EMI = P \\times \\frac{r(1+r)^n}{(1+r)^n-1}",
    inputs: [
      { id: "p", label: "Loan Amount", type: "number", defaultValue: 100000, unit: "$" },
      { id: "r", label: "Annual Interest Rate (%)", type: "number", defaultValue: 7 },
      { id: "n", label: "Loan Term (Years)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "emi", label: "Monthly EMI", formula: "p * ((r/1200) * (1 + r/1200)^(n*12)) / ((1 + r/1200)^(n*12) - 1)", unit: "$" },
      { id: "total", label: "Total Repayment", formula: "(p * ((r/1200) * (1 + r/1200)^(n*12)) / ((1 + r/1200)^(n*12) - 1)) * n * 12", unit: "$" }
    ]
  },
  {
    id: "contribution-margin-calculator",
    name: "Contribution Margin Calculator",
    description: "Calculate how much each sale contributes to covering fixed costs.",
    category: "finance",
    subcategory: "business-planning",
    scientificFormula: "CM = Sales - Variable\\ Costs",
    inputs: [
      { id: "sales", label: "Total Sales", type: "number", defaultValue: 10000 },
      { id: "variable", label: "Variable Costs", type: "number", defaultValue: 4000 }
    ],
    outputs: [
      { id: "cm", label: "Contribution Margin", formula: "sales - variable", unit: "$" },
      { id: "ratio", label: "CM Ratio", formula: "((sales - variable) / sales) * 100", unit: "%" }
    ]
  },
  {
    id: "customer-acquisition-cost-calculator",
    name: "Customer Acquisition Cost Calculator",
    description: "Measure the efficiency of your marketing spend.",
    category: "finance",
    subcategory: "business-planning",
    scientificFormula: "CAC = \\frac{Total\\ Marketing\\ Spend}{New\\ Customers}",
    inputs: [
      { id: "spend", label: "Marketing Spend", type: "number", defaultValue: 5000 },
      { id: "customers", label: "Customers Acquired", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "cac", label: "CAC", formula: "spend / customers", unit: "$/customer" }
    ]
  },

  // GENERAL INVESTMENT
  {
    id: "cagr-calculator",
    name: "CAGR Calculator",
    description: "Calculate the Compound Annual Growth Rate of an investment.",
    category: "finance",
    subcategory: "general-investment",
    scientificFormula: "CAGR = \\left(\\frac{FV}{PV}\\right)^{1/n} - 1",
    inputs: [
      { id: "pv", label: "Initial Investment (PV)", type: "number", defaultValue: 10000 },
      { id: "fv", label: "Final Value (FV)", type: "number", defaultValue: 25000 },
      { id: "n", label: "Number of Years", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "cagr", label: "CAGR", formula: "((fv / pv)^(1/n) - 1) * 100", unit: "%" }
    ],
    theory: "CAGR represents the mean annual growth rate of an investment over a specified period of time longer than one year. It is one of the most accurate ways to calculate and determine returns for anything that can rise or fall in value over time."
  },
  {
    id: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    description: "Estimate your future wealth with compounding returns.",
    category: "finance",
    subcategory: "general-investment",
    scientificFormula: "A = P(1 + \\frac{r}{n})^{nt}",
    inputs: [
      { id: "p", label: "Principal Amount", type: "number", defaultValue: 10000 },
      { id: "r", label: "Annual Interest Rate (%)", type: "number", defaultValue: 8 },
      { id: "t", label: "Time (Years)", type: "number", defaultValue: 10 },
      { id: "n", label: "Compounding frequency", type: "select", options: [
        { label: "Annually", value: 1 },
        { label: "Monthly", value: 12 },
        { label: "Quarterly", value: 4 },
        { label: "Daily", value: 365 }
      ], defaultValue: 12 }
    ],
    outputs: [
      { id: "amount", label: "Final Amount", formula: "p * (1 + (r/100)/n)^(n*t)", unit: "$" },
      { id: "interest", label: "Interest Earned", formula: "(p * (1 + (r/100)/n)^(n*t)) - p", unit: "$" }
    ]
  },
  {
    id: "npv-calculator",
    name: "NPV Calculator",
    description: "Determine the present value of future cash flows.",
    category: "finance",
    subcategory: "general-investment",
    scientificFormula: "NPV = \\sum \\frac{CF_t}{(1+r)^t} - I_0",
    inputs: [
      { id: "initial", label: "Initial Investment", type: "number", defaultValue: 50000 },
      { id: "rate", label: "Discount Rate (%)", type: "number", defaultValue: 10 },
      { id: "cf1", label: "Year 1 Cash Flow", type: "number", defaultValue: 20000 },
      { id: "cf2", label: "Year 2 Cash Flow", type: "number", defaultValue: 25000 }
    ],
    outputs: [
      { id: "npv", label: "Net Present Value", formula: "(cf1 / (1 + rate/100)^1) + (cf2 / (1 + rate/100)^2) - initial", unit: "$" }
    ]
  },
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description: "Measure the profitability of an investment.",
    category: "finance",
    subcategory: "general-investment",
    scientificFormula: "ROI = \\frac{Gain - Cost}{Cost} \\times 100",
    inputs: [
      { id: "cost", label: "Investment Cost", type: "number", defaultValue: 1000 },
      { id: "gain", label: "Investment Gain", type: "number", defaultValue: 1500 }
    ],
    outputs: [
      { id: "roi", label: "Return on Investment", formula: "((gain - cost) / cost) * 100", unit: "%" }
    ]
  },
  {
    id: "sharpe-ratio-calculator",
    name: "Sharpe Ratio Calculator",
    description: "Evaluate risk-adjusted returns of a portfolio.",
    category: "finance",
    subcategory: "general-investment",
    scientificFormula: "Sharpe = \\frac{R_p - R_f}{\\sigma_p}",
    inputs: [
      { id: "rp", label: "Portfolio Return (%)", type: "number", defaultValue: 12 },
      { id: "rf", label: "Risk-free Rate (%)", type: "number", defaultValue: 4 },
      { id: "std", label: "Portfolio Volatility (%)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "sharpe", label: "Sharpe Ratio", formula: "(rp - rf) / std", unit: "" }
    ]
  },

  // EQUITY INVESTMENT
  {
    id: "capm-calculator",
    name: "CAPM Calculator",
    description: "Calculate expected return based on risk (Beta).",
    category: "finance",
    subcategory: "equity-investment",
    scientificFormula: "E[R] = R_f + \\beta(R_m - R_f)",
    inputs: [
      { id: "rf", label: "Risk-free Rate (%)", type: "number", defaultValue: 4 },
      { id: "beta", label: "Stock Beta", type: "number", defaultValue: 1.2 },
      { id: "rm", label: "Market Return (%)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "ret", label: "Expected Return", formula: "rf + beta * (rm - rf)", unit: "%" }
    ]
  },
  {
    id: "dividend-yield-calculator",
    name: "Dividend Yield Calculator",
    description: "Calculate the annual dividend percentage of a stock.",
    category: "finance",
    subcategory: "equity-investment",
    inputs: [
      { id: "price", label: "Stock Price", type: "number", defaultValue: 150 },
      { id: "div", label: "Annual Dividend", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "yield", label: "Dividend Yield", formula: "(div / price) * 100", unit: "%" }
    ]
  },
  {
    id: "eps-calculator",
    name: "EPS Calculator",
    description: "Calculate Earnings Per Share.",
    category: "finance",
    subcategory: "equity-investment",
    inputs: [
      { id: "income", label: "Net Income", type: "number", defaultValue: 1000000 },
      { id: "shares", label: "Shares Outstanding", type: "number", defaultValue: 500000 }
    ],
    outputs: [
      { id: "eps", label: "EPS", formula: "income / shares", unit: "$/share" }
    ]
  },
  {
    id: "market-capitalization-calculator",
    name: "Market Capitalization Calculator",
    description: "Calculate the total market value of a company.",
    category: "finance",
    subcategory: "equity-investment",
    inputs: [
      { id: "price", label: "Current Stock Price", type: "number", defaultValue: 100 },
      { id: "shares", label: "Shares Outstanding", type: "number", defaultValue: 1000000 }
    ],
    outputs: [
      { id: "cap", label: "Market Cap", formula: "price * shares", unit: "$" }
    ]
  },
  {
    id: "p-e-ratio-calculator",
    name: "P/E Ratio Calculator",
    description: "Evaluate a stock's valuation relative to its earnings.",
    category: "finance",
    subcategory: "equity-investment",
    inputs: [
      { id: "price", label: "Market Price", type: "number", defaultValue: 200 },
      { id: "eps", label: "EPS", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "pe", label: "P/E Ratio", formula: "price / eps", unit: "x" }
    ]
  },

  // DEBT INVESTMENT
  {
    id: "bond-price-calculator",
    name: "Bond Price Calculator",
    description: "Estimate the fair market value of a bond.",
    category: "finance",
    subcategory: "debt-investment",
    inputs: [
      { id: "face", label: "Face Value", type: "number", defaultValue: 1000 },
      { id: "coupon", label: "Coupon Rate (%)", type: "number", defaultValue: 5 },
      { id: "rate", label: "Market Rate (%)", type: "number", defaultValue: 6 },
      { id: "years", label: "Years to Maturity", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "price", label: "Estimated Price", formula: "(face * (coupon/100) * (1 - (1 + rate/100)^-years) / (rate/100)) + (face / (1 + rate/100)^years)", unit: "$" }
    ]
  },
  {
    id: "debt-to-equity-calculator",
    name: "Debt to Equity Calculator",
    description: "Measure a company's financial leverage.",
    category: "finance",
    subcategory: "debt-investment",
    inputs: [
      { id: "debt", label: "Total Debt", type: "number", defaultValue: 500000 },
      { id: "equity", label: "Total Equity", type: "number", defaultValue: 1000000 }
    ],
    outputs: [
      { id: "ratio", label: "D/E Ratio", formula: "debt / equity", unit: "" }
    ]
  },
  {
    id: "yield-to-maturity-calculator",
    name: "Yield to Maturity Calculator",
    description: "Calculate the total expected return on a bond.",
    category: "finance",
    subcategory: "debt-investment",
    inputs: [
      { id: "coupon", label: "Annual Coupon", type: "number", defaultValue: 50 },
      { id: "face", label: "Face Value", type: "number", defaultValue: 1000 },
      { id: "price", label: "Current Price", type: "number", defaultValue: 950 },
      { id: "years", label: "Years to Maturity", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "ytm", label: "YTM (Approx)", formula: "((coupon + (face - price) / years) / ((face + price) / 2)) * 100", unit: "%" }
    ]
  },

  // DERIVATIVES
  {
    id: "black-scholes-calculator",
    name: "Black-Scholes Calculator",
    description: "Price European call and put options.",
    category: "finance",
    subcategory: "derivatives",
    inputs: [
      { id: "s", label: "Stock Price", type: "number", defaultValue: 100 },
      { id: "k", label: "Strike Price", type: "number", defaultValue: 100 },
      { id: "t", label: "Time (Years)", type: "number", defaultValue: 1 },
      { id: "r", label: "Risk-free Rate (%)", type: "number", defaultValue: 5 },
      { id: "v", label: "Volatility (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "call", label: "Call Price", formula: "s", unit: "$" }
    ],
    theory: "The Black–Scholes model is a mathematical model for the dynamics of a financial market containing derivative investment instruments. It provides a way to estimate the fair price of options."
  },
  {
    id: "futures-contracts-calculator",
    name: "Futures Contracts Calculator",
    description: "Calculate theoretical future price of an asset.",
    category: "finance",
    subcategory: "derivatives",
    inputs: [
      { id: "s", label: "Spot Price", type: "number", defaultValue: 1500 },
      { id: "r", label: "Interest Rate (%)", type: "number", defaultValue: 4 },
      { id: "t", label: "Time (Days)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "f", label: "Futures Price", formula: "s * e^((r/100) * (t/365))", unit: "$" }
    ]
  },

  // TAX & SALARY
  {
    id: "annual-income-calculator",
    name: "Annual Income Calculator",
    description: "Convert hourly/monthly pay into annual gross income.",
    category: "finance",
    subcategory: "tax-salary",
    inputs: [
      { id: "wage", label: "Hourly Wage", type: "number", defaultValue: 25 },
      { id: "hrs", label: "Hours per Week", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "annual", label: "Annual Income", formula: "wage * hrs * 52", unit: "$" }
    ]
  },
  {
    id: "fica-tax-calculator",
    name: "FICA Tax Calculator",
    description: "Estimate Social Security and Medicare tax deductions.",
    category: "finance",
    subcategory: "tax-salary",
    inputs: [
      { id: "income", label: "Annual Income", type: "number", defaultValue: 60000 }
    ],
    outputs: [
      { id: "fica", label: "FICA Tax (7.65%)", formula: "income * 0.0765", unit: "$" }
    ]
  },
  {
    id: "gross-to-net-calculator",
    name: "Gross to Net Calculator",
    description: "Calculate take-home pay after taxes and deductions.",
    category: "finance",
    subcategory: "tax-salary",
    inputs: [
      { id: "gross", label: "Gross Income", type: "number", defaultValue: 5000, unit: "/mo" },
      { id: "tax", label: "Avg Tax Rate (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "net", label: "Monthly Net Pay", formula: "gross * (1 - tax/100)", unit: "$" }
    ]
  },
  {
    id: "overtime-calculator",
    name: "Overtime Calculator",
    description: "Calculate pay for extra hours (1.5x rate).",
    category: "finance",
    subcategory: "tax-salary",
    inputs: [
      { id: "rate", label: "Base Hourly Rate", type: "number", defaultValue: 30 },
      { id: "hrs", label: "Overtime Hours", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "pay", label: "Overtime Pay", formula: "rate * 1.5 * hrs", unit: "$" }
    ]
  },
  {
    id: "vat-calculator",
    name: "VAT Calculator",
    description: "Calculate Value Added Tax for a product.",
    category: "finance",
    subcategory: "tax-salary",
    inputs: [
      { id: "price", label: "Net Price", type: "number", defaultValue: 100 },
      { id: "rate", label: "VAT Rate (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "vat", label: "VAT Amount", formula: "price * (rate/100)", unit: "$" },
      { id: "total", label: "Gross Price", formula: "price * (1 + rate/100)", unit: "$" }
    ]
  },

  // MORTGAGE
  {
    id: "mortgage-calculator",
    name: "Mortgage Calculator",
    description: "Estimate monthly home loan payments.",
    category: "finance",
    subcategory: "mortgage-real-estate",
    scientificFormula: "EMI = P \\times \\frac{r(1+r)^n}{(1+r)^n-1}",
    inputs: [
      { id: "p", label: "Loan Amount", type: "number", defaultValue: 300000, unit: "$" },
      { id: "r", label: "Annual Rate (%)", type: "number", defaultValue: 6.5 },
      { id: "n", label: "Term (Years)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "emi", label: "Monthly Payment", formula: "p * ((r/1200) * (1 + r/1200)^(n*12)) / ((1 + r/1200)^(n*12) - 1)", unit: "$" }
    ]
  },
  {
    id: "cap-rate-calculator",
    name: "Cap Rate Calculator",
    description: "Evaluate profitability of a rental property.",
    category: "finance",
    subcategory: "mortgage-real-estate",
    inputs: [
      { id: "noi", label: "Net Operating Income", type: "number", defaultValue: 24000, unit: "/year" },
      { id: "price", label: "Property Value", type: "number", defaultValue: 400000 }
    ],
    outputs: [
      { id: "cap", label: "Cap Rate", formula: "(noi / price) * 100", unit: "%" }
    ]
  },
  {
    id: "down-payment-calculator",
    name: "Down Payment Calculator",
    description: "Calculate how much cash you need upfront for a home.",
    category: "finance",
    subcategory: "mortgage-real-estate",
    inputs: [
      { id: "price", label: "Property Price", type: "number", defaultValue: 400000 },
      { id: "pct", label: "Down Payment (%)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "down", label: "Total Down Payment", formula: "price * (pct/100)", unit: "$" }
    ]
  },
  {
    id: "rent-vs-buy-calculator",
    name: "Rent vs Buy Calculator",
    description: "Compare long-term costs of renting vs. buying a home.",
    category: "finance",
    subcategory: "mortgage-real-estate",
    inputs: [
      { id: "rent", label: "Monthly Rent", type: "number", defaultValue: 2000 },
      { id: "price", label: "Home Price", type: "number", defaultValue: 400000 },
      { id: "years", label: "Duration (Years)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "rent_cost", label: "Total Rent Cost", formula: "rent * 12 * years", unit: "$" }
    ]
  },

  // PERSONAL FINANCE
  {
    id: "budget-calculator",
    name: "Budget Calculator",
    description: "Track your monthly surplus/deficit.",
    category: "finance",
    subcategory: "personal-finance",
    inputs: [
      { id: "inc", label: "Monthly Income", type: "number", defaultValue: 4000 },
      { id: "exp", label: "Monthly Expenses", type: "number", defaultValue: 3200 }
    ],
    outputs: [
      { id: "save", label: "Monthly Savings", formula: "inc - exp", unit: "$" }
    ]
  },
  {
    id: "emergency-fund-calculator",
    name: "Emergency Fund Calculator",
    description: "Calculate how much you need in your rainy day fund.",
    category: "finance",
    subcategory: "personal-finance",
    inputs: [
      { id: "exp", label: "Monthly Expenses", type: "number", defaultValue: 3000 },
      { id: "months", label: "Safety Net (Months)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "total", label: "Required Fund", formula: "exp * months", unit: "$" }
    ]
  },
  {
    id: "fire-calculator",
    name: "FIRE Calculator",
    description: "Calculate your Financial Independence, Retire Early number.",
    category: "finance",
    subcategory: "personal-finance",
    inputs: [
      { id: "exp", label: "Annual Expenses", type: "number", defaultValue: 40000 }
    ],
    outputs: [
      { id: "num", label: "FIRE Number", formula: "exp * 25", unit: "$" }
    ],
    theory: "The '25x Rule' suggests that if you have saved 25 times your annual expenses, you can safely retire and withdraw 4% each year indefinitely."
  },
  {
    id: "net-worth-calculator",
    name: "Net Worth Calculator",
    description: "Calculate your total financial health (Assets - Liabilities).",
    category: "finance",
    subcategory: "personal-finance",
    inputs: [
      { id: "assets", label: "Total Assets", type: "number", defaultValue: 200000 },
      { id: "liab", label: "Total Liabilities", type: "number", defaultValue: 50000 }
    ],
    outputs: [
      { id: "nw", label: "Net Worth", formula: "assets - liab", unit: "$" }
    ]
  },

  // DEBT MANAGEMENT
  {
    id: "apr-calculator",
    name: "APR Calculator",
    description: "Find the true annual cost of a loan including fees.",
    category: "finance",
    subcategory: "debt-management",
    inputs: [
      { id: "p", label: "Loan Amount", type: "number", defaultValue: 10000 },
      { id: "int", label: "Total Interest", type: "number", defaultValue: 500 },
      { id: "fee", label: "Total Fees", type: "number", defaultValue: 200 }
    ],
    outputs: [
      { id: "apr", label: "Effective APR", formula: "((int + fee) / p) * 100", unit: "%" }
    ]
  },
  {
    id: "credit-card-interest-calculator",
    name: "Credit Card Interest Calculator",
    description: "Estimate monthly interest on credit card debt.",
    category: "finance",
    subcategory: "debt-management",
    inputs: [
      { id: "bal", label: "Average Balance", type: "number", defaultValue: 5000 },
      { id: "apr", label: "Annual APR (%)", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "interest", label: "Monthly Interest", formula: "bal * (apr/1200)", unit: "$" }
    ]
  },
  {
    id: "debt-to-income-ratio-calculator",
    name: "Debt to Income Ratio Calculator",
    description: "Analyze your debt levels relative to income.",
    category: "finance",
    subcategory: "debt-management",
    inputs: [
      { id: "debt", label: "Monthly Debt Payments", type: "number", defaultValue: 1500 },
      { id: "gross", label: "Monthly Gross Income", type: "number", defaultValue: 5000 }
    ],
    outputs: [
      { id: "dti", label: "DTI Ratio", formula: "(debt / gross) * 100", unit: "%" }
    ]
  },

  // RETIREMENT
  {
    id: "401k-calculator",
    name: "401k Calculator",
    description: "Project your retirement nest egg.",
    category: "finance",
    subcategory: "retirement",
    inputs: [
      { id: "cur", label: "Current Balance", type: "number", defaultValue: 50000 },
      { id: "cont", label: "Annual Contribution", type: "number", defaultValue: 6000 },
      { id: "years", label: "Years to Retirement", type: "number", defaultValue: 25 },
      { id: "rate", label: "Growth Rate (%)", type: "number", defaultValue: 7 }
    ],
    outputs: [
      { id: "fv", label: "Projected Value", formula: "cur * (1 + rate/100)^years + (cont * ((1 + rate/100)^years - 1) / (rate/100))", unit: "$" }
    ]
  },
  {
    id: "rule-of-72-calculator",
    name: "Rule of 72 Calculator",
    description: "Quickly estimate how long it takes to double your money.",
    category: "finance",
    subcategory: "retirement",
    scientificFormula: "Years = \\frac{72}{Rate}",
    inputs: [
      { id: "rate", label: "Annual Return (%)", type: "number", defaultValue: 8 }
    ],
    outputs: [
      { id: "years", label: "Years to Double", formula: "72 / rate", unit: "years" }
    ]
  },

  // SALES
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description: "Calculate sales price after discounts.",
    category: "finance",
    subcategory: "sales-marketing",
    inputs: [
      { id: "orig", label: "Original Price", type: "number", defaultValue: 100 },
      { id: "pct", label: "Discount (%)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "saved", label: "Amount Saved", formula: "orig * (pct/100)", unit: "$" },
      { id: "final", label: "Final Price", formula: "orig * (1 - pct/100)", unit: "$" }
    ]
  },
  {
    id: "margin-calculator",
    name: "Margin Calculator",
    description: "Calculate profit margin percentage.",
    category: "finance",
    subcategory: "sales-marketing",
    inputs: [
      { id: "rev", label: "Revenue", type: "number", defaultValue: 100 },
      { id: "cost", label: "Cost", type: "number", defaultValue: 60 }
    ],
    outputs: [
      { id: "margin", label: "Profit Margin", formula: "((rev - cost) / rev) * 100", unit: "%" }
    ]
  },

  // ECONOMICS
  {
    id: "eoq-calculator",
    name: "EOQ Calculator",
    description: "Find the optimal order quantity to minimize inventory costs.",
    category: "finance",
    subcategory: "micro-macro",
    scientificFormula: "EOQ = \\sqrt{\\frac{2DS}{H}}",
    inputs: [
      { id: "d", label: "Annual Demand (D)", type: "number", defaultValue: 10000 },
      { id: "s", label: "Order Cost (S)", type: "number", defaultValue: 50 },
      { id: "h", label: "Holding Cost (H)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "eoq", label: "Optimal Quantity", formula: "sqrt((2 * d * s) / h)", unit: "units" }
    ]
  },
  {
    id: "gdp-calculator",
    name: "GDP Calculator",
    description: "Calculate Gross Domestic Product using the Expenditure Approach.",
    category: "finance",
    subcategory: "micro-macro",
    scientificFormula: "GDP = C + I + G + (X - M)",
    inputs: [
      { id: "c", label: "Consumption (C)", type: "number", defaultValue: 12000 },
      { id: "i", label: "Investment (I)", type: "number", defaultValue: 3000 },
      { id: "g", label: "Gov Spending (G)", type: "number", defaultValue: 4000 },
      { id: "nx", label: "Net Exports (X-M)", type: "number", defaultValue: -500 }
    ],
    outputs: [
      { id: "gdp", label: "Total GDP", formula: "c + i + g + nx", unit: "B" }
    ]
  },
  {
    id: "inflation-calculator",
    name: "Inflation Calculator",
    description: "Calculate purchasing power loss over time.",
    category: "finance",
    subcategory: "micro-macro",
    inputs: [
      { id: "old", label: "Previous CPI", type: "number", defaultValue: 250 },
      { id: "cur", label: "Current CPI", type: "number", defaultValue: 260 }
    ],
    outputs: [
      { id: "inf", label: "Inflation Rate", formula: "((cur - old) / old) * 100", unit: "%" }
    ]
  },

  // INDIAN FINANCE
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    description: "Calculate future wealth from a Systematic Investment Plan.",
    category: "finance",
    subcategory: "indian-finance",
    scientificFormula: "FV = P \\times \\frac{(1+r)^n - 1}{r} \\times (1+r)",
    inputs: [
      { id: "p", label: "Monthly Investment", type: "number", defaultValue: 5000, unit: "₹" },
      { id: "r", label: "Expected Return (%)", type: "number", defaultValue: 12 },
      { id: "n", label: "Period (Years)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "total", label: "Invested Amount", formula: "p * 12 * n", unit: "₹" },
      { id: "fv", label: "Future Value", formula: "p * (((1 + (r/1200))^(n*12) - 1) / (r/1200)) * (1 + (r/1200))", unit: "₹" }
    ]
  },
  {
    id: "ppf-calculator",
    name: "PPF Calculator",
    description: "Public Provident Fund returns calculator for Indian residents.",
    category: "finance",
    subcategory: "indian-finance",
    inputs: [
      { id: "p", label: "Annual Deposit", type: "number", defaultValue: 150000, unit: "₹" },
      { id: "r", label: "Current Interest Rate (%)", type: "number", defaultValue: 7.1 },
      { id: "n", label: "Duration (Years)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "fv", label: "Maturity Amount", formula: "p * (( (1 + r/100)^n - 1 ) / (r/100))", unit: "₹" }
    ]
  }
];
