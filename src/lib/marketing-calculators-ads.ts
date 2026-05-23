import { CalculatorConfig } from "./calculator-types";

export const MARKETING_CALCULATORS_ADS: CalculatorConfig[] = [
  {
    id: "cpm-calculator",
    name: "CPM Calculator",
    description: "Calculate the Cost Per Mille (1,000 impressions) for your advertising campaigns.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "cost", label: "Total Campaign Cost", type: "number", defaultValue: 500, unit: "$" },
      { id: "impressions", label: "Total Impressions", type: "number", defaultValue: 100000, unit: "" },
    ],
    outputs: [
      { id: "cpm", label: "CPM (Cost per 1k Impressions)", formula: "cost / (impressions / 1000)", unit: "$" }
    ]
  },
  {
    id: "cpc-calculator",
    name: "CPC Calculator",
    description: "Calculate your Cost Per Click to understand how much you pay for each ad click.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "cost", label: "Total Campaign Cost", type: "number", defaultValue: 500, unit: "$" },
      { id: "clicks", label: "Total Clicks", type: "number", defaultValue: 250, unit: "" },
    ],
    outputs: [
      { id: "cpc", label: "Cost Per Click (CPC)", formula: "cost / clicks", unit: "$" }
    ]
  },
  {
    id: "ctr-calculator",
    name: "CTR Calculator",
    description: "Calculate Click-Through Rate to measure ad performance.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "clicks", label: "Total Clicks", type: "number", defaultValue: 250, unit: "" },
      { id: "impressions", label: "Total Impressions", type: "number", defaultValue: 10000, unit: "" },
    ],
    outputs: [
      { id: "ctr", label: "Click-Through Rate (CTR)", formula: "(clicks / impressions) * 100", unit: "%" }
    ]
  },
  {
    id: "ad-spend-calculator",
    name: "Ad Spend Calculator",
    description: "Estimate your total required advertising spend based on your targets.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "target_clicks", label: "Target Clicks", type: "number", defaultValue: 1000, unit: "" },
      { id: "avg_cpc", label: "Average CPC", type: "number", defaultValue: 1.50, unit: "$" },
    ],
    outputs: [
      { id: "spend", label: "Required Ad Spend", formula: "target_clicks * avg_cpc", unit: "$" }
    ]
  },
  {
    id: "influencer-roi-calculator",
    name: "Influencer ROI Calculator",
    description: "Calculate the return on investment for an influencer marketing campaign.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "revenue", label: "Revenue Generated", type: "number", defaultValue: 5000, unit: "$" },
      { id: "fee", label: "Influencer Fee", type: "number", defaultValue: 1000, unit: "$" },
      { id: "product_cost", label: "Cost of Free Products", type: "number", defaultValue: 200, unit: "$" },
    ],
    outputs: [
      { id: "roi", label: "Influencer ROI", formula: "((revenue - (fee + product_cost)) / (fee + product_cost)) * 100", unit: "%" }
    ]
  },
  {
    id: "cpm-vs-cpc-calculator",
    name: "CPM vs CPC Comparison Calculator",
    description: "Compare the equivalent cost of CPM and CPC bidding strategies.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "cpm", label: "CPM Bidding Rate", type: "number", defaultValue: 10, unit: "$" },
      { id: "ctr", label: "Expected CTR", type: "number", defaultValue: 1.5, unit: "%" },
    ],
    outputs: [
      { id: "equiv_cpc", label: "Equivalent CPC", formula: "cpm / (1000 * (ctr / 100))", unit: "$" }
    ]
  },
  {
    id: "ad-impression-calculator",
    name: "Ad Impression Calculator",
    description: "Calculate how many impressions you will get for your budget.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "budget", label: "Ad Budget", type: "number", defaultValue: 1000, unit: "$" },
      { id: "cpm", label: "Average CPM", type: "number", defaultValue: 12.50, unit: "$" },
    ],
    outputs: [
      { id: "impressions", label: "Estimated Impressions", formula: "(budget / cpm) * 1000", unit: "" }
    ]
  },
  {
    id: "influencer-engagement-rate-calculator",
    name: "Influencer Engagement Rate Calculator",
    description: "Measure the engagement rate of an influencer's audience.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "likes", label: "Total Likes", type: "number", defaultValue: 1500, unit: "" },
      { id: "comments", label: "Total Comments", type: "number", defaultValue: 150, unit: "" },
      { id: "shares", label: "Total Shares/Saves", type: "number", defaultValue: 50, unit: "" },
      { id: "followers", label: "Total Followers", type: "number", defaultValue: 50000, unit: "" },
    ],
    outputs: [
      { id: "engagement", label: "Engagement Rate", formula: "((likes + comments + shares) / followers) * 100", unit: "%" }
    ]
  },
  {
    id: "campaign-reach-calculator",
    name: "Campaign Reach Calculator",
    description: "Calculate the unique reach of your campaign based on impressions and frequency.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "impressions", label: "Total Impressions", type: "number", defaultValue: 500000, unit: "" },
      { id: "frequency", label: "Average Frequency", type: "number", defaultValue: 2.5, unit: "times per user" },
    ],
    outputs: [
      { id: "reach", label: "Unique Reach", formula: "impressions / frequency", unit: "people" }
    ]
  },
  {
    id: "return-on-ad-spend-calculator",
    name: "Return on Ad Spend (ROAS) Calculator",
    description: "Calculate your ROAS to evaluate the effectiveness of an ad campaign.",
    category: "marketing",
    subcategory: "advertising",
    inputs: [
      { id: "revenue", label: "Revenue from Ads", type: "number", defaultValue: 10000, unit: "$" },
      { id: "ad_spend", label: "Total Ad Spend", type: "number", defaultValue: 2500, unit: "$" },
    ],
    outputs: [
      { id: "roas", label: "ROAS Multiple", formula: "revenue / ad_spend", unit: "x" },
      { id: "roas_percent", label: "ROAS Percentage", formula: "(revenue / ad_spend) * 100", unit: "%" }
    ]
  }
];
