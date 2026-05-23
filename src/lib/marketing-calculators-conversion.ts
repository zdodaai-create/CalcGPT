import { CalculatorConfig } from "./calculator-types";

export const MARKETING_CALCULATORS_CONVERSION: CalculatorConfig[] = [
  {
    id: "conversion-rate-calculator",
    name: "Conversion Rate Calculator",
    description: "Calculate the percentage of visitors who complete a desired action.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "visitors", label: "Total Visitors", type: "number", defaultValue: 10000, unit: "" },
      { id: "conversions", label: "Total Conversions", type: "number", defaultValue: 250, unit: "" },
    ],
    outputs: [
      { id: "cr", label: "Conversion Rate", formula: "(conversions / visitors) * 100", unit: "%" }
    ]
  },
  {
    id: "email-open-rate-calculator",
    name: "Email Open Rate Calculator",
    description: "Calculate the percentage of successfully delivered emails that were opened.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "sent", label: "Emails Sent", type: "number", defaultValue: 5000, unit: "" },
      { id: "bounced", label: "Emails Bounced", type: "number", defaultValue: 150, unit: "" },
      { id: "opened", label: "Emails Opened", type: "number", defaultValue: 1200, unit: "" },
    ],
    outputs: [
      { id: "open_rate", label: "Open Rate", formula: "(opened / (sent - bounced)) * 100", unit: "%" }
    ]
  },
  {
    id: "email-click-rate-calculator",
    name: "Email Click Rate Calculator",
    description: "Calculate the percentage of delivered emails that received at least one click.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "delivered", label: "Emails Delivered", type: "number", defaultValue: 4850, unit: "" },
      { id: "clicks", label: "Total Clicks", type: "number", defaultValue: 300, unit: "" },
    ],
    outputs: [
      { id: "click_rate", label: "Click Rate", formula: "(clicks / delivered) * 100", unit: "%" }
    ]
  },
  {
    id: "lead-conversion-calculator",
    name: "Lead Conversion Calculator",
    description: "Calculate the percentage of leads that convert into paying customers.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "leads", label: "Total Leads", type: "number", defaultValue: 500, unit: "" },
      { id: "sales", label: "Total Sales from Leads", type: "number", defaultValue: 25, unit: "" },
    ],
    outputs: [
      { id: "lead_cr", label: "Lead Conversion Rate", formula: "(sales / leads) * 100", unit: "%" }
    ]
  },
  {
    id: "bounce-rate-calculator",
    name: "Bounce Rate Calculator",
    description: "Calculate the percentage of visitors who leave after viewing only one page.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "bounces", label: "Single-page Visits (Bounces)", type: "number", defaultValue: 4500, unit: "" },
      { id: "visits", label: "Total Visits", type: "number", defaultValue: 10000, unit: "" },
    ],
    outputs: [
      { id: "bounce_rate", label: "Bounce Rate", formula: "(bounces / visits) * 100", unit: "%" }
    ]
  },
  {
    id: "funnel-conversion-calculator",
    name: "Funnel Conversion Calculator",
    description: "Calculate the overall conversion rate from the top to the bottom of your funnel.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "top", label: "Top of Funnel (e.g., Impressions)", type: "number", defaultValue: 50000, unit: "" },
      { id: "bottom", label: "Bottom of Funnel (e.g., Purchases)", type: "number", defaultValue: 500, unit: "" },
    ],
    outputs: [
      { id: "funnel_cr", label: "Overall Funnel Conversion", formula: "(bottom / top) * 100", unit: "%" }
    ]
  },
  {
    id: "cart-abandonment-calculator",
    name: "Cart Abandonment Calculator",
    description: "Calculate the percentage of shoppers who add items to cart but do not purchase.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "initiated", label: "Carts Initiated", type: "number", defaultValue: 1000, unit: "" },
      { id: "completed", label: "Purchases Completed", type: "number", defaultValue: 350, unit: "" },
    ],
    outputs: [
      { id: "abandonment", label: "Cart Abandonment Rate", formula: "(1 - (completed / initiated)) * 100", unit: "%" }
    ]
  },
  {
    id: "landing-page-performance-calculator",
    name: "Landing Page Performance Calculator",
    description: "Evaluate your landing page performance by calculating both conversion and bounce rate.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "visitors", label: "Total Page Visitors", type: "number", defaultValue: 5000, unit: "" },
      { id: "conversions", label: "Total Conversions", type: "number", defaultValue: 250, unit: "" },
      { id: "bounces", label: "Total Bounces", type: "number", defaultValue: 3000, unit: "" },
    ],
    outputs: [
      { id: "cr", label: "Conversion Rate", formula: "(conversions / visitors) * 100", unit: "%" },
      { id: "br", label: "Bounce Rate", formula: "(bounces / visitors) * 100", unit: "%" }
    ]
  },
  {
    id: "product-demand-forecast-calculator",
    name: "Product Demand Forecast Calculator",
    description: "Forecast future product demand based on historical sales and growth rate.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "sales", label: "Historical Sales (Units)", type: "number", defaultValue: 10000, unit: "" },
      { id: "growth", label: "Expected Growth Rate", type: "number", defaultValue: 15, unit: "%" },
    ],
    outputs: [
      { id: "forecast", label: "Forecasted Demand", formula: "sales * (1 + (growth / 100))", unit: "units" }
    ]
  },
  {
    id: "revenue-per-visitor-calculator",
    name: "Revenue Per Visitor Calculator",
    description: "Calculate the average revenue generated per unique visitor.",
    category: "marketing",
    subcategory: "conversion",
    inputs: [
      { id: "revenue", label: "Total Revenue", type: "number", defaultValue: 25000, unit: "$" },
      { id: "visitors", label: "Total Unique Visitors", type: "number", defaultValue: 10000, unit: "" },
    ],
    outputs: [
      { id: "rpv", label: "Revenue Per Visitor (RPV)", formula: "revenue / visitors", unit: "$" }
    ]
  }
];
