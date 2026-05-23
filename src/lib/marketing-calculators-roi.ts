import { CalculatorConfig } from "./calculator-types";

export const MARKETING_CALCULATORS_ROI: CalculatorConfig[] = [
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description: "Calculate Return on Investment to evaluate the efficiency of an investment.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "investment", label: "Amount Invested", type: "number", defaultValue: 10000, unit: "$" },
      { id: "return", label: "Amount Returned", type: "number", defaultValue: 15000, unit: "$" },
    ],
    outputs: [
      { id: "roi", label: "Return on Investment (ROI)", formula: "((return - investment) / investment) * 100", unit: "%" }
    ]
  },
  {
    id: "break-even-analysis-calculator",
    name: "Break-even Analysis Calculator",
    description: "Calculate the exact number of units you need to sell to cover your costs.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "fixed", label: "Fixed Costs", type: "number", defaultValue: 5000, unit: "$" },
      { id: "price", label: "Price Per Unit", type: "number", defaultValue: 50, unit: "$" },
      { id: "variable", label: "Variable Cost Per Unit", type: "number", defaultValue: 20, unit: "$" },
    ],
    outputs: [
      { id: "breakeven", label: "Break-even Volume", formula: "fixed / (price - variable)", unit: "units" }
    ]
  },
  {
    id: "profit-margin-calculator",
    name: "Profit Margin Calculator",
    description: "Calculate the percentage of revenue that remains as profit after deducting costs.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "revenue", label: "Total Revenue", type: "number", defaultValue: 50000, unit: "$" },
      { id: "costs", label: "Total Costs", type: "number", defaultValue: 35000, unit: "$" },
    ],
    outputs: [
      { id: "margin", label: "Profit Margin", formula: "((revenue - costs) / revenue) * 100", unit: "%" },
      { id: "profit", label: "Net Profit", formula: "revenue - costs", unit: "$" }
    ]
  },
  {
    id: "sales-growth-calculator",
    name: "Sales Growth Calculator",
    description: "Calculate the percentage increase or decrease in sales over two periods.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "previous", label: "Previous Period Sales", type: "number", defaultValue: 100000, unit: "$" },
      { id: "current", label: "Current Period Sales", type: "number", defaultValue: 125000, unit: "$" },
    ],
    outputs: [
      { id: "growth", label: "Sales Growth Rate", formula: "((current - previous) / previous) * 100", unit: "%" }
    ]
  },
  {
    id: "affiliate-commission-calculator",
    name: "Affiliate Commission Calculator",
    description: "Calculate the payout amount for an affiliate based on commission rate.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "sales", label: "Total Sales Revenue", type: "number", defaultValue: 5000, unit: "$" },
      { id: "rate", label: "Commission Rate", type: "number", defaultValue: 15, unit: "%" },
    ],
    outputs: [
      { id: "commission", label: "Total Commission Payout", formula: "sales * (rate / 100)", unit: "$" }
    ]
  },
  {
    id: "revenue-forecast-calculator",
    name: "Revenue Forecast Calculator",
    description: "Project future revenue based on your current revenue and expected growth rate.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "current", label: "Current Revenue", type: "number", defaultValue: 100000, unit: "$" },
      { id: "growth", label: "Expected Growth Rate", type: "number", defaultValue: 10, unit: "%" },
    ],
    outputs: [
      { id: "forecast", label: "Forecasted Revenue", formula: "current * (1 + (growth / 100))", unit: "$" }
    ]
  },
  {
    id: "marketing-budget-calculator",
    name: "Marketing Budget Calculator",
    description: "Determine your marketing budget based on a percentage of target revenue.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "target", label: "Target Revenue", type: "number", defaultValue: 1000000, unit: "$" },
      { id: "percent", label: "Marketing Budget Allocation", type: "number", defaultValue: 8, unit: "%" },
    ],
    outputs: [
      { id: "budget", label: "Suggested Marketing Budget", formula: "target * (percent / 100)", unit: "$" }
    ]
  },
  {
    id: "seo-roi-calculator",
    name: "SEO ROI Calculator",
    description: "Calculate the return on investment specifically for SEO campaigns.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "organic", label: "Organic Revenue Generated", type: "number", defaultValue: 25000, unit: "$" },
      { id: "cost", label: "Total SEO Cost (Agency/Tools)", type: "number", defaultValue: 5000, unit: "$" },
    ],
    outputs: [
      { id: "roi", label: "SEO ROI", formula: "((organic - cost) / cost) * 100", unit: "%" }
    ]
  },
  {
    id: "sales-tax-calculator",
    name: "Sales Tax Calculator",
    description: "Calculate the total price including sales tax, or extract the tax amount.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "price", label: "Pre-tax Price", type: "number", defaultValue: 100, unit: "$" },
      { id: "tax_rate", label: "Sales Tax Rate", type: "number", defaultValue: 8.5, unit: "%" },
    ],
    outputs: [
      { id: "tax_amount", label: "Tax Amount", formula: "price * (tax_rate / 100)", unit: "$" },
      { id: "total", label: "Total Price", formula: "price * (1 + (tax_rate / 100))", unit: "$" }
    ]
  },
  {
    id: "payback-period-calculator",
    name: "Payback Period Calculator",
    description: "Calculate how long it takes to recover your initial investment.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "investment", label: "Initial Investment", type: "number", defaultValue: 50000, unit: "$" },
      { id: "cashflow", label: "Annual Cash Flow Generated", type: "number", defaultValue: 15000, unit: "$" },
    ],
    outputs: [
      { id: "period", label: "Payback Period", formula: "investment / cashflow", unit: "years" }
    ]
  }
];
