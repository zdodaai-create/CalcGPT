import { CalculatorConfig } from "./calculator-types";

export const MARKETING_CALCULATORS_CUSTOMER: CalculatorConfig[] = [
  {
    id: "cac-calculator",
    name: "Customer Acquisition Cost (CAC) Calculator",
    description: "Calculate how much you spend on average to acquire a single new customer.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "sales_cost", label: "Total Sales & Marketing Cost", type: "number", defaultValue: 50000, unit: "$" },
      { id: "new_customers", label: "New Customers Acquired", type: "number", defaultValue: 1000, unit: "" },
    ],
    outputs: [
      { id: "cac", label: "Customer Acquisition Cost (CAC)", formula: "sales_cost / new_customers", unit: "$" }
    ]
  },
  {
    id: "clv-calculator",
    name: "Customer Lifetime Value (CLV) Calculator",
    description: "Calculate the total revenue you can expect from a single customer over their lifespan.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "avg_purchase", label: "Average Purchase Value", type: "number", defaultValue: 50, unit: "$" },
      { id: "purchase_freq", label: "Purchases Per Year", type: "number", defaultValue: 4, unit: "" },
      { id: "lifespan", label: "Customer Lifespan", type: "number", defaultValue: 3, unit: "years" },
    ],
    outputs: [
      { id: "clv", label: "Customer Lifetime Value (CLV)", formula: "avg_purchase * purchase_freq * lifespan", unit: "$" }
    ]
  },
  {
    id: "market-share-calculator",
    name: "Market Share Calculator",
    description: "Calculate your company's percentage of total sales within its market.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "company_sales", label: "Your Company Sales", type: "number", defaultValue: 5000000, unit: "$" },
      { id: "market_sales", label: "Total Market Sales", type: "number", defaultValue: 50000000, unit: "$" },
    ],
    outputs: [
      { id: "share", label: "Market Share", formula: "(company_sales / market_sales) * 100", unit: "%" }
    ]
  },
  {
    id: "churn-rate-calculator",
    name: "Churn Rate Calculator",
    description: "Calculate the percentage of customers who stopped using your product/service.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "lost", label: "Customers Lost During Period", type: "number", defaultValue: 50, unit: "" },
      { id: "start", label: "Customers at Start of Period", type: "number", defaultValue: 1000, unit: "" },
    ],
    outputs: [
      { id: "churn", label: "Churn Rate", formula: "(lost / start) * 100", unit: "%" }
    ]
  },
  {
    id: "retention-rate-calculator",
    name: "Retention Rate Calculator",
    description: "Calculate the percentage of customers you retain over a specific period.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "start", label: "Customers at Start", type: "number", defaultValue: 1000, unit: "" },
      { id: "end", label: "Customers at End", type: "number", defaultValue: 1100, unit: "" },
      { id: "new_cust", label: "New Customers Acquired", type: "number", defaultValue: 150, unit: "" },
    ],
    outputs: [
      { id: "retention", label: "Retention Rate", formula: "((end - new_cust) / start) * 100", unit: "%" }
    ]
  },
  {
    id: "social-media-engagement-calculator",
    name: "Social Media Engagement Calculator",
    description: "Measure your overall engagement relative to your reach.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "interactions", label: "Total Interactions (Likes, Comments, Shares)", type: "number", defaultValue: 2500, unit: "" },
      { id: "reach", label: "Total Post Reach", type: "number", defaultValue: 50000, unit: "" },
    ],
    outputs: [
      { id: "engagement", label: "Engagement Rate by Reach", formula: "(interactions / reach) * 100", unit: "%" }
    ]
  },
  {
    id: "viral-coefficient-calculator",
    name: "Viral Coefficient Calculator",
    description: "Calculate your K-factor to see if your product grows virally.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "invites", label: "Invites Sent per Existing User", type: "number", defaultValue: 5, unit: "" },
      { id: "conversion", label: "Invite Conversion Rate", type: "number", defaultValue: 25, unit: "%" },
    ],
    outputs: [
      { id: "kfactor", label: "Viral Coefficient (K-factor)", formula: "invites * (conversion / 100)", unit: "" }
    ]
  },
  {
    id: "keyword-density-calculator",
    name: "Keyword Density Calculator",
    description: "Calculate the frequency of a keyword within your text.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "keyword", label: "Keyword Count", type: "number", defaultValue: 12, unit: "" },
      { id: "total", label: "Total Word Count", type: "number", defaultValue: 600, unit: "" },
    ],
    outputs: [
      { id: "density", label: "Keyword Density", formula: "(keyword / total) * 100", unit: "%" }
    ]
  },
  {
    id: "subscription-revenue-calculator",
    name: "Subscription Revenue Calculator",
    description: "Estimate monthly recurring revenue based on subscriber count and tier pricing.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "subscribers", label: "Total Subscribers", type: "number", defaultValue: 500, unit: "" },
      { id: "fee", label: "Monthly Fee per Subscriber", type: "number", defaultValue: 29.99, unit: "$" },
    ],
    outputs: [
      { id: "revenue", label: "Monthly Subscription Revenue", formula: "subscribers * fee", unit: "$" }
    ]
  },
  {
    id: "saas-mrr-calculator",
    name: "SaaS MRR Calculator",
    description: "Calculate your SaaS Monthly Recurring Revenue (MRR).",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "subscribers", label: "Total Paying Customers", type: "number", defaultValue: 1200, unit: "" },
      { id: "arpu", label: "Average Revenue Per User (ARPU)", type: "number", defaultValue: 45, unit: "$" },
    ],
    outputs: [
      { id: "mrr", label: "Monthly Recurring Revenue (MRR)", formula: "subscribers * arpu", unit: "$" }
    ]
  },
  {
    id: "arr-calculator",
    name: "ARR Calculator",
    description: "Calculate your Annual Recurring Revenue based on MRR.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "mrr", label: "Monthly Recurring Revenue (MRR)", type: "number", defaultValue: 54000, unit: "$" },
    ],
    outputs: [
      { id: "arr", label: "Annual Recurring Revenue (ARR)", formula: "mrr * 12", unit: "$" }
    ]
  },
  {
    id: "aov-calculator",
    name: "Average Order Value (AOV) Calculator",
    description: "Calculate the average amount spent each time a customer places an order.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "revenue", label: "Total Revenue", type: "number", defaultValue: 150000, unit: "$" },
      { id: "orders", label: "Total Number of Orders", type: "number", defaultValue: 3000, unit: "" },
    ],
    outputs: [
      { id: "aov", label: "Average Order Value (AOV)", formula: "revenue / orders", unit: "$" }
    ]
  },
  {
    id: "discount-percentage-calculator",
    name: "Discount Percentage Calculator",
    description: "Calculate the discount percentage based on original and sale price.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "original", label: "Original Price", type: "number", defaultValue: 150, unit: "$" },
      { id: "sale", label: "Sale Price", type: "number", defaultValue: 120, unit: "$" },
    ],
    outputs: [
      { id: "discount", label: "Discount Percentage", formula: "((original - sale) / original) * 100", unit: "%" }
    ]
  },
  {
    id: "pricing-strategy-calculator",
    name: "Pricing Strategy Calculator",
    description: "Determine what you should price your product at to hit a target margin.",
    category: "marketing",
    subcategory: "strategy",
    inputs: [
      { id: "cost", label: "Cost of Goods Sold (COGS)", type: "number", defaultValue: 35, unit: "$" },
      { id: "margin", label: "Target Profit Margin", type: "number", defaultValue: 40, unit: "%" },
    ],
    outputs: [
      { id: "price", label: "Target Selling Price", formula: "cost / (1 - (margin / 100))", unit: "$" }
    ]
  },
  {
    id: "brand-awareness-calculator",
    name: "Brand Awareness Calculator",
    description: "Calculate an index for brand awareness based on traffic sources.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "direct", label: "Direct Traffic", type: "number", defaultValue: 5000, unit: "" },
      { id: "branded", label: "Branded Search Volume", type: "number", defaultValue: 15000, unit: "" },
      { id: "social", label: "Social Mentions", type: "number", defaultValue: 2000, unit: "" },
    ],
    outputs: [
      { id: "awareness", label: "Brand Awareness Index", formula: "direct + branded + social", unit: "interactions" }
    ]
  },
  {
    id: "nps-calculator",
    name: "Net Promoter Score (NPS) Calculator",
    description: "Calculate your NPS based on promoter and detractor percentages.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "promoters", label: "Promoters (9-10) %", type: "number", defaultValue: 60, unit: "%" },
      { id: "detractors", label: "Detractors (0-6) %", type: "number", defaultValue: 15, unit: "%" },
    ],
    outputs: [
      { id: "nps", label: "Net Promoter Score (NPS)", formula: "promoters - detractors", unit: "" }
    ]
  },
  {
    id: "event-roi-calculator",
    name: "Event ROI Calculator",
    description: "Calculate the return on investment for hosting or attending a marketing event.",
    category: "marketing",
    subcategory: "roi",
    inputs: [
      { id: "revenue", label: "Event Generated Revenue", type: "number", defaultValue: 75000, unit: "$" },
      { id: "cost", label: "Total Event Cost", type: "number", defaultValue: 25000, unit: "$" },
    ],
    outputs: [
      { id: "roi", label: "Event ROI", formula: "((revenue - cost) / cost) * 100", unit: "%" }
    ]
  },
  {
    id: "referral-rate-calculator",
    name: "Referral Rate Calculator",
    description: "Calculate the percentage of purchases driven by customer referrals.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "referrals", label: "Referred Purchases", type: "number", defaultValue: 150, unit: "" },
      { id: "total", label: "Total Purchases", type: "number", defaultValue: 2000, unit: "" },
    ],
    outputs: [
      { id: "rate", label: "Referral Rate", formula: "(referrals / total) * 100", unit: "%" }
    ]
  },
  {
    id: "audience-growth-calculator",
    name: "Audience Growth Calculator",
    description: "Calculate the net growth rate of your audience over a given period.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "new", label: "New Followers/Subscribers", type: "number", defaultValue: 5000, unit: "" },
      { id: "lost", label: "Lost Followers/Subscribers", type: "number", defaultValue: 800, unit: "" },
      { id: "initial", label: "Initial Audience Size", type: "number", defaultValue: 45000, unit: "" },
    ],
    outputs: [
      { id: "growth", label: "Net Audience Growth Rate", formula: "((new - lost) / initial) * 100", unit: "%" }
    ]
  },
  {
    id: "csat-calculator",
    name: "Customer Satisfaction Score Calculator",
    description: "Calculate your CSAT score based on positive survey responses.",
    category: "marketing",
    subcategory: "customer",
    inputs: [
      { id: "positive", label: "Positive Responses (4-5 stars)", type: "number", defaultValue: 850, unit: "" },
      { id: "total", label: "Total Responses", type: "number", defaultValue: 1000, unit: "" },
    ],
    outputs: [
      { id: "csat", label: "CSAT Score", formula: "(positive / total) * 100", unit: "%" }
    ]
  }
];
