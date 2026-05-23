import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH4_B: CalculatorConfig[] = [
  // ROI continued
  {
    id: "cost-per-acquisition-forecast-calculator",
    name: "Cost Per Acquisition Forecast Calculator",
    description: "Forecast CPA based on budget and target conversions.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "budget", name: "Planned Budget ($)", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "conversions", name: "Target Conversions", type: "number", defaultValue: 200, placeholder: "200" }
    ],
    outputs: [
      { id: "cpa", name: "Forecasted CPA ($)", type: "number", formatter: "currency", formula: "Budget / Conversions" }
    ],
    calculate: (inputs) => ({ cpa: inputs.conversions > 0 ? (inputs.budget || 0) / inputs.conversions : 0 })
  },
  {
    id: "campaign-success-probability-calculator",
    name: "Campaign Success Probability Calculator",
    description: "Estimate campaign success probability from historical data.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "successful", name: "Past Successful Campaigns", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "total", name: "Total Past Campaigns", type: "number", defaultValue: 10, placeholder: "10" }
    ],
    outputs: [
      { id: "prob", name: "Success Probability (%)", type: "number", formatter: "percentage", formula: "(Successful / Total) × 100" }
    ],
    calculate: (inputs) => ({ prob: inputs.total > 0 ? ((inputs.successful || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "seasonal-marketing-roi-calculator",
    name: "Seasonal Marketing ROI Calculator",
    description: "Calculate ROI for seasonal campaigns.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Seasonal Spend ($)", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "revenue", name: "Seasonal Revenue ($)", type: "number", defaultValue: 60000, placeholder: "60000" }
    ],
    outputs: [
      { id: "roi", name: "Seasonal ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const s = inputs.spend || 0;
      return { roi: s > 0 ? (((inputs.revenue || 0) - s) / s) * 100 : 0 };
    }
  },

  // CUSTOMER
  {
    id: "repeat-purchase-rate-calculator",
    name: "Repeat Purchase Rate Calculator",
    description: "Calculate the percentage of customers who buy again.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "repeat", name: "Repeat Customers", type: "number", defaultValue: 300, placeholder: "300" },
      { id: "total", name: "Total Customers", type: "number", defaultValue: 1000, placeholder: "1000" }
    ],
    outputs: [
      { id: "rate", name: "Repeat Purchase Rate (%)", type: "number", formatter: "percentage", formula: "(Repeat / Total) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.total > 0 ? ((inputs.repeat || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "customer-engagement-score-calculator",
    name: "Customer Engagement Score Calculator",
    description: "Composite engagement score from multiple signals.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "logins", name: "Monthly Logins", type: "number", defaultValue: 12, placeholder: "12" },
      { id: "actions", name: "Key Actions Taken", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "support", name: "Support Tickets (lower=better)", type: "number", defaultValue: 1, placeholder: "1" }
    ],
    outputs: [
      { id: "score", name: "Engagement Score", type: "number", formatter: "number", formula: "(Logins × 2) + (Actions × 5) - (Support × 10)" }
    ],
    calculate: (inputs) => ({ score: (inputs.logins || 0) * 2 + (inputs.actions || 0) * 5 - (inputs.support || 0) * 10 })
  },
  {
    id: "customer-loyalty-index-calculator",
    name: "Customer Loyalty Index Calculator",
    description: "Composite loyalty index from NPS, repurchase, and upsell.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "nps", name: "NPS Score (-100 to 100)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "repurchase", name: "Repurchase Rate (%)", type: "number", defaultValue: 60, placeholder: "60" },
      { id: "upsell", name: "Upsell Rate (%)", type: "number", defaultValue: 20, placeholder: "20" }
    ],
    outputs: [
      { id: "index", name: "Loyalty Index", type: "number", formatter: "number", formula: "(NPS + Repurchase + Upsell) / 3" }
    ],
    calculate: (inputs) => ({ index: ((inputs.nps || 0) + (inputs.repurchase || 0) + (inputs.upsell || 0)) / 3 })
  },
  {
    id: "user-activation-calculator",
    name: "User Activation Calculator",
    description: "Calculate the rate at which signups become activated users.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "signups", name: "Total Signups", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "activated", name: "Activated Users", type: "number", defaultValue: 350, placeholder: "350" }
    ],
    outputs: [
      { id: "rate", name: "Activation Rate (%)", type: "number", formatter: "percentage", formula: "(Activated / Signups) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.signups > 0 ? ((inputs.activated || 0) / inputs.signups) * 100 : 0 })
  },
  {
    id: "product-review-score-calculator",
    name: "Product Review Score Calculator",
    description: "Calculate weighted average review score.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "totalScore", name: "Sum of All Review Scores", type: "number", defaultValue: 2100, placeholder: "2100" },
      { id: "reviews", name: "Number of Reviews", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "avg", name: "Average Review Score", type: "number", formatter: "number", formula: "Total Score / Reviews" }
    ],
    calculate: (inputs) => ({ avg: inputs.reviews > 0 ? (inputs.totalScore || 0) / inputs.reviews : 0 })
  },
  {
    id: "customer-return-frequency-calculator",
    name: "Customer Return Frequency Calculator",
    description: "Calculate how often customers return to purchase.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "purchases", name: "Total Purchases", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "customers", name: "Unique Customers", type: "number", defaultValue: 2000, placeholder: "2000" }
    ],
    outputs: [
      { id: "freq", name: "Avg Purchase Frequency", type: "number", formatter: "number", formula: "Purchases / Customers" }
    ],
    calculate: (inputs) => ({ freq: inputs.customers > 0 ? (inputs.purchases || 0) / inputs.customers : 0 })
  },
  {
    id: "shopping-behavior-calculator",
    name: "Shopping Behavior Calculator",
    description: "Calculate average items per transaction.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "items", name: "Total Items Sold", type: "number", defaultValue: 8000, placeholder: "8000" },
      { id: "transactions", name: "Total Transactions", type: "number", defaultValue: 3000, placeholder: "3000" }
    ],
    outputs: [
      { id: "avg", name: "Avg Items per Transaction", type: "number", formatter: "number", formula: "Items / Transactions" }
    ],
    calculate: (inputs) => ({ avg: inputs.transactions > 0 ? (inputs.items || 0) / inputs.transactions : 0 })
  },
  {
    id: "customer-engagement-forecast-calculator",
    name: "Customer Engagement Forecast Calculator",
    description: "Forecast engagement growth over months.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "current", name: "Current Engagement Rate (%)", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "growth", name: "Monthly Growth Rate (%)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "months", name: "Months to Forecast", type: "number", defaultValue: 6, placeholder: "6" }
    ],
    outputs: [
      { id: "forecast", name: "Forecasted Engagement Rate (%)", type: "number", formatter: "percentage", formula: "Current × (1 + Growth)^Months" }
    ],
    calculate: (inputs) => ({ forecast: (inputs.current || 0) * Math.pow(1 + (inputs.growth || 0) / 100, inputs.months || 0) })
  },

  // STRATEGY
  {
    id: "marketing-spend-efficiency-calculator",
    name: "Marketing Spend Efficiency Calculator",
    description: "Calculate revenue generated per dollar spent on marketing.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "revenue", name: "Total Revenue ($)", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "spend", name: "Total Marketing Spend ($)", type: "number", defaultValue: 50000, placeholder: "50000" }
    ],
    outputs: [
      { id: "efficiency", name: "Revenue per $1 Spend", type: "number", formatter: "number", formula: "Revenue / Spend" }
    ],
    calculate: (inputs) => ({ efficiency: inputs.spend > 0 ? (inputs.revenue || 0) / inputs.spend : 0 })
  },
  {
    id: "market-opportunity-calculator",
    name: "Market Opportunity Calculator",
    description: "Estimate total addressable market opportunity.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "tam", name: "Total Addressable Market ($)", type: "number", defaultValue: 10000000, placeholder: "10000000" },
      { id: "share", name: "Achievable Market Share (%)", type: "number", defaultValue: 5, placeholder: "5" }
    ],
    outputs: [
      { id: "opp", name: "Market Opportunity ($)", type: "number", formatter: "currency", formula: "TAM × Share" }
    ],
    calculate: (inputs) => ({ opp: (inputs.tam || 0) * ((inputs.share || 0) / 100) })
  },
  {
    id: "brand-exposure-calculator",
    name: "Brand Exposure Calculator",
    description: "Calculate total brand exposure value from impressions.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "impressions", name: "Total Brand Impressions", type: "number", defaultValue: 5000000, placeholder: "5000000" },
      { id: "cpm", name: "Equivalent CPM Value ($)", type: "number", defaultValue: 10, placeholder: "10" }
    ],
    outputs: [
      { id: "value", name: "Brand Exposure Value ($)", type: "number", formatter: "currency", formula: "(Impressions / 1000) × CPM" }
    ],
    calculate: (inputs) => ({ value: ((inputs.impressions || 0) / 1000) * (inputs.cpm || 0) })
  },
  {
    id: "organic-search-performance-calculator",
    name: "Organic Search Performance Calculator",
    description: "Calculate organic search CTR from impressions and clicks.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "impressions", name: "Search Impressions", type: "number", defaultValue: 100000, placeholder: "100000" },
      { id: "clicks", name: "Organic Clicks", type: "number", defaultValue: 3500, placeholder: "3500" }
    ],
    outputs: [
      { id: "ctr", name: "Organic CTR (%)", type: "number", formatter: "percentage", formula: "(Clicks / Impressions) × 100" }
    ],
    calculate: (inputs) => ({ ctr: inputs.impressions > 0 ? ((inputs.clicks || 0) / inputs.impressions) * 100 : 0 })
  },
  {
    id: "brand-positioning-calculator",
    name: "Brand Positioning Calculator",
    description: "Score brand positioning against competitors.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "awareness", name: "Brand Awareness Score (1-10)", type: "number", defaultValue: 7, placeholder: "7" },
      { id: "perception", name: "Brand Perception Score (1-10)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "loyalty", name: "Customer Loyalty Score (1-10)", type: "number", defaultValue: 6, placeholder: "6" }
    ],
    outputs: [
      { id: "score", name: "Brand Position Score (/30)", type: "number", formatter: "number" }
    ],
    calculate: (inputs) => ({ score: (inputs.awareness || 0) + (inputs.perception || 0) + (inputs.loyalty || 0) })
  },
  {
    id: "search-engine-visibility-calculator",
    name: "Search Engine Visibility Calculator",
    description: "Calculate your search visibility percentage.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "ranking", name: "Keywords in Top 10", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "total", name: "Total Tracked Keywords", type: "number", defaultValue: 200, placeholder: "200" }
    ],
    outputs: [
      { id: "visibility", name: "Search Visibility (%)", type: "number", formatter: "percentage", formula: "(Top 10 / Total) × 100" }
    ],
    calculate: (inputs) => ({ visibility: inputs.total > 0 ? ((inputs.ranking || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "sales-velocity-calculator",
    name: "Sales Velocity Calculator",
    description: "Calculate how quickly revenue flows through the pipeline.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "opportunities", name: "Number of Opportunities", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "dealSize", name: "Avg Deal Size ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "winRate", name: "Win Rate (%)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "cycle", name: "Sales Cycle Length (days)", type: "number", defaultValue: 45, placeholder: "45" }
    ],
    outputs: [
      { id: "velocity", name: "Sales Velocity ($/day)", type: "number", formatter: "currency" }
    ],
    calculate: (inputs) => {
      const c = inputs.cycle || 1;
      return { velocity: ((inputs.opportunities || 0) * (inputs.dealSize || 0) * ((inputs.winRate || 0) / 100)) / c };
    }
  },
  {
    id: "product-awareness-calculator",
    name: "Product Awareness Calculator",
    description: "Calculate product awareness rate from surveys.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "aware", name: "Respondents Aware of Product", type: "number", defaultValue: 350, placeholder: "350" },
      { id: "total", name: "Total Respondents", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "rate", name: "Product Awareness (%)", type: "number", formatter: "percentage", formula: "(Aware / Total) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.total > 0 ? ((inputs.aware || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "digital-presence-score-calculator",
    name: "Digital Presence Score Calculator",
    description: "Composite score of online presence.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "seo", name: "SEO Score (1-10)", type: "number", defaultValue: 7, placeholder: "7" },
      { id: "social", name: "Social Score (1-10)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "content", name: "Content Score (1-10)", type: "number", defaultValue: 6, placeholder: "6" }
    ],
    outputs: [
      { id: "score", name: "Digital Presence Score (/30)", type: "number", formatter: "number" }
    ],
    calculate: (inputs) => ({ score: (inputs.seo || 0) + (inputs.social || 0) + (inputs.content || 0) })
  },
  {
    id: "revenue-attribution-calculator",
    name: "Revenue Attribution Calculator",
    description: "Attribute revenue to marketing channels.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "total", name: "Total Revenue ($)", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "pct", name: "Marketing Attribution (%)", type: "number", defaultValue: 40, placeholder: "40" }
    ],
    outputs: [
      { id: "attributed", name: "Marketing-Attributed Revenue ($)", type: "number", formatter: "currency", formula: "Revenue × Attribution %" }
    ],
    calculate: (inputs) => ({ attributed: (inputs.total || 0) * ((inputs.pct || 0) / 100) })
  },
  {
    id: "product-demand-trend-calculator",
    name: "Product Demand Trend Calculator",
    description: "Calculate demand growth trend.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "prev", name: "Previous Period Demand", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "current", name: "Current Period Demand", type: "number", defaultValue: 1200, placeholder: "1200" }
    ],
    outputs: [
      { id: "trend", name: "Demand Growth (%)", type: "number", formatter: "percentage", formula: "((Current - Previous) / Previous) × 100" }
    ],
    calculate: (inputs) => ({ trend: inputs.prev > 0 ? (((inputs.current || 0) - (inputs.prev || 0)) / inputs.prev) * 100 : 0 })
  },

  // SOCIAL
  {
    id: "social-proof-calculator",
    name: "Social Proof Calculator",
    description: "Calculate social proof strength from reviews and ratings.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "reviews", name: "Total Reviews", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "avgRating", name: "Average Rating (out of 5)", type: "number", defaultValue: 4.5, placeholder: "4.5" }
    ],
    outputs: [
      { id: "score", name: "Social Proof Score", type: "number", formatter: "number", formula: "Reviews × (Rating / 5) × 100" }
    ],
    calculate: (inputs) => ({ score: (inputs.reviews || 0) * ((inputs.avgRating || 0) / 5) * 100 })
  },
  {
    id: "social-media-growth-rate-calculator",
    name: "Social Media Growth Rate Calculator",
    description: "Calculate follower growth rate over a period.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "start", name: "Followers at Start", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "end", name: "Followers at End", type: "number", defaultValue: 12500, placeholder: "12500" }
    ],
    outputs: [
      { id: "growth", name: "Growth Rate (%)", type: "number", formatter: "percentage", formula: "((End - Start) / Start) × 100" }
    ],
    calculate: (inputs) => ({ growth: inputs.start > 0 ? (((inputs.end || 0) - (inputs.start || 0)) / inputs.start) * 100 : 0 })
  },
  {
    id: "engagement-quality-calculator",
    name: "Engagement Quality Calculator",
    description: "Measure quality of engagement by weighting actions.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "likes", name: "Likes", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "comments", name: "Comments", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "shares", name: "Shares", type: "number", defaultValue: 20, placeholder: "20" }
    ],
    outputs: [
      { id: "score", name: "Quality Score", type: "number", formatter: "number", formula: "(Likes × 1) + (Comments × 3) + (Shares × 5)" }
    ],
    calculate: (inputs) => ({ score: (inputs.likes || 0) * 1 + (inputs.comments || 0) * 3 + (inputs.shares || 0) * 5 })
  },
  {
    id: "viral-reach-multiplier-calculator",
    name: "Viral Reach Multiplier Calculator",
    description: "Calculate how many times content reach multiplies through sharing.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "original", name: "Original Reach", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "shared", name: "Shared Reach (from reshares)", type: "number", defaultValue: 35000, placeholder: "35000" }
    ],
    outputs: [
      { id: "multiplier", name: "Viral Multiplier", type: "number", formatter: "number", formula: "Total Reach / Original Reach" }
    ],
    calculate: (inputs) => ({ multiplier: inputs.original > 0 ? ((inputs.original || 0) + (inputs.shared || 0)) / inputs.original : 0 })
  }
];
