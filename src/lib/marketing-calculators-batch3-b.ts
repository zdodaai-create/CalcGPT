import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH3_B: CalculatorConfig[] = [
  // CUSTOMER
  {
    id: "customer-persona-calculator",
    name: "Customer Persona Calculator",
    description: "Determine the dominant customer persona based on demographic weighting.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "scoreA", name: "Persona A Match Score", type: "number", defaultValue: 75, placeholder: "75" },
      { id: "scoreB", name: "Persona B Match Score", type: "number", defaultValue: 45, placeholder: "45" }
    ],
    outputs: [
      { id: "dominant", name: "Dominant Persona Score Difference", type: "number", formatter: "number", formula: "Score A - Score B" }
    ],
    calculate: (inputs) => ({ dominant: (inputs.scoreA || 0) - (inputs.scoreB || 0) })
  },
  {
    id: "brand-consistency-calculator",
    name: "Brand Consistency Calculator",
    description: "Score brand consistency across channels.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "compliant", name: "Compliant Assets", type: "number", defaultValue: 80, placeholder: "80" },
      { id: "total", name: "Total Assets Reviewed", type: "number", defaultValue: 100, placeholder: "100" }
    ],
    outputs: [
      { id: "score", name: "Consistency Score (%)", type: "number", formatter: "percentage", formula: "(Compliant / Total) × 100" }
    ],
    calculate: (inputs) => ({ score: inputs.total > 0 ? ((inputs.compliant || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "customer-reactivation-calculator",
    name: "Customer Reactivation Calculator",
    description: "Calculate win-back rate of churned customers.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "contacted", name: "Churned Customers Contacted", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "reactivated", name: "Reactivated Customers", type: "number", defaultValue: 25, placeholder: "25" }
    ],
    outputs: [
      { id: "rate", name: "Reactivation Rate (%)", type: "number", formatter: "percentage", formula: "(Reactivated / Contacted) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.contacted > 0 ? ((inputs.reactivated || 0) / inputs.contacted) * 100 : 0 })
  },
  {
    id: "product-popularity-calculator",
    name: "Product Popularity Calculator",
    description: "Calculate the share of total sales for a specific product.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "productSales", name: "Product Sales Unit", type: "number", defaultValue: 1500, placeholder: "1500" },
      { id: "totalSales", name: "Total Company Sales", type: "number", defaultValue: 10000, placeholder: "10000" }
    ],
    outputs: [
      { id: "pop", name: "Popularity Share (%)", type: "number", formatter: "percentage", formula: "(Product Sales / Total Sales) × 100" }
    ],
    calculate: (inputs) => ({ pop: inputs.totalSales > 0 ? ((inputs.productSales || 0) / inputs.totalSales) * 100 : 0 })
  },
  {
    id: "customer-retention-value-calculator",
    name: "Customer Retention Value Calculator",
    description: "Value of retaining a customer over an additional year.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "arpu", name: "Average Revenue Per User ($)", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "margin", name: "Gross Margin (%)", type: "number", defaultValue: 60, placeholder: "60" }
    ],
    outputs: [
      { id: "value", name: "Retention Value ($)", type: "number", formatter: "currency", formula: "ARPU × Margin" }
    ],
    calculate: (inputs) => ({ value: (inputs.arpu || 0) * ((inputs.margin || 0) / 100) })
  },
  {
    id: "brand-trust-score-calculator",
    name: "Brand Trust Score Calculator",
    description: "Calculate trust score from surveys.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "trust", name: "Trusting Respondents", type: "number", defaultValue: 400, placeholder: "400" },
      { id: "total", name: "Total Respondents", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "score", name: "Trust Score (%)", type: "number", formatter: "percentage", formula: "(Trust / Total) × 100" }
    ],
    calculate: (inputs) => ({ score: inputs.total > 0 ? ((inputs.trust || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "customer-win-back-calculator",
    name: "Customer Win-back Calculator",
    description: "Calculate ROI of win-back campaigns.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "cost", name: "Campaign Cost ($)", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "won", name: "Customers Won Back", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "clv", name: "Average CLV ($)", type: "number", defaultValue: 300, placeholder: "300" }
    ],
    outputs: [
      { id: "roi", name: "Win-back ROI (%)", type: "number", formatter: "percentage", formula: "(((Won × CLV) - Cost) / Cost) × 100" }
    ],
    calculate: (inputs) => {
      const rev = (inputs.won || 0) * (inputs.clv || 0);
      const c = inputs.cost || 0;
      return { roi: c > 0 ? ((rev - c) / c) * 100 : 0 };
    }
  },
  {
    id: "customer-intent-score-calculator",
    name: "Customer Intent Score Calculator",
    description: "Basic weighted score of purchase intent.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "visits", name: "Page Visits", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "cart", name: "Added to Cart? (1=Yes, 0=No)", type: "number", defaultValue: 1, placeholder: "1" }
    ],
    outputs: [
      { id: "score", name: "Intent Score", type: "number", formatter: "number", formula: "(Visits × 2) + (Cart × 50)" }
    ],
    calculate: (inputs) => ({ score: (inputs.visits || 0) * 2 + (inputs.cart || 0) * 50 })
  },

  // STRATEGY
  {
    id: "competitor-analysis-calculator",
    name: "Competitor Analysis Calculator",
    description: "Compare your market share vs your biggest competitor.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "you", name: "Your Revenue ($)", type: "number", defaultValue: 1000000, placeholder: "1000000" },
      { id: "comp", name: "Competitor Revenue ($)", type: "number", defaultValue: 2000000, placeholder: "2000000" },
      { id: "market", name: "Total Market Size ($)", type: "number", defaultValue: 10000000, placeholder: "10000000" }
    ],
    outputs: [
      { id: "yourShare", name: "Your Share (%)", type: "number", formatter: "percentage" },
      { id: "compShare", name: "Competitor Share (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const m = inputs.market || 0;
      return {
        yourShare: m > 0 ? ((inputs.you || 0) / m) * 100 : 0,
        compShare: m > 0 ? ((inputs.comp || 0) / m) * 100 : 0
      };
    }
  },
  {
    id: "dynamic-pricing-calculator",
    name: "Dynamic Pricing Calculator",
    description: "Adjust price based on demand multiplier.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "base", name: "Base Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "demand", name: "Demand Multiplier", type: "number", defaultValue: 1.2, placeholder: "1.2" }
    ],
    outputs: [
      { id: "price", name: "Dynamic Price ($)", type: "number", formatter: "currency", formula: "Base Price × Demand Multiplier" }
    ],
    calculate: (inputs) => ({ price: (inputs.base || 0) * (inputs.demand || 0) })
  },
  {
    id: "digital-marketing-score-calculator",
    name: "Digital Marketing Score Calculator",
    description: "A composite score of digital performance.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "traffic", name: "Traffic Score (1-10)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "conv", name: "Conversion Score (1-10)", type: "number", defaultValue: 6, placeholder: "6" },
      { id: "retention", name: "Retention Score (1-10)", type: "number", defaultValue: 7, placeholder: "7" }
    ],
    outputs: [
      { id: "score", name: "Total Score (/30)", type: "number", formatter: "number", formula: "Traffic + Conversion + Retention" }
    ],
    calculate: (inputs) => ({ score: (inputs.traffic || 0) + (inputs.conv || 0) + (inputs.retention || 0) })
  },
  {
    id: "viral-marketing-reach-calculator",
    name: "Viral Marketing Reach Calculator",
    description: "Calculate expected reach after N generations of sharing.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "initial", name: "Initial Seed Users", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "k", name: "Viral Coefficient (K)", type: "number", defaultValue: 1.2, placeholder: "1.2" },
      { id: "gen", name: "Generations", type: "number", defaultValue: 5, placeholder: "5" }
    ],
    outputs: [
      { id: "reach", name: "Total Reach", type: "number", formatter: "number", formula: "Initial × ((1 - K^(Gen+1)) / (1 - K))" }
    ],
    calculate: (inputs) => {
      const init = inputs.initial || 0;
      const k = inputs.k || 0;
      const g = inputs.gen || 0;
      if (k === 1) return { reach: init * (g + 1) };
      return { reach: init * ((1 - Math.pow(k, g + 1)) / (1 - k)) };
    }
  },
  {
    id: "search-volume-calculator",
    name: "Search Volume Calculator",
    description: "Estimate clicks based on Search Volume and CTR.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "vol", name: "Monthly Search Volume", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "ctr", name: "Estimated CTR (%)", type: "number", defaultValue: 5, placeholder: "5" }
    ],
    outputs: [
      { id: "clicks", name: "Estimated Monthly Clicks", type: "number", formatter: "number", formula: "Volume × CTR" }
    ],
    calculate: (inputs) => ({ clicks: (inputs.vol || 0) * ((inputs.ctr || 0) / 100) })
  },
  {
    id: "market-penetration-calculator",
    name: "Market Penetration Calculator",
    description: "Calculate market penetration rate.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "customers", name: "Your Customers", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "market", name: "Total Target Market", type: "number", defaultValue: 100000, placeholder: "100000" }
    ],
    outputs: [
      { id: "rate", name: "Penetration Rate (%)", type: "number", formatter: "percentage", formula: "(Customers / Market) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.market > 0 ? ((inputs.customers || 0) / inputs.market) * 100 : 0 })
  },
  {
    id: "multi-channel-attribution-calculator",
    name: "Multi-Channel Attribution Calculator",
    description: "Simple linear attribution model distribution.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "rev", name: "Total Conversion Revenue ($)", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "channels", name: "Number of Touchpoints", type: "number", defaultValue: 4, placeholder: "4" }
    ],
    outputs: [
      { id: "val", name: "Value per Channel ($)", type: "number", formatter: "currency", formula: "Revenue / Channels" }
    ],
    calculate: (inputs) => ({ val: inputs.channels > 0 ? (inputs.rev || 0) / inputs.channels : 0 })
  },
  {
    id: "ecommerce-growth-calculator",
    name: "Ecommerce Growth Calculator",
    description: "Calculate year-over-year e-commerce growth.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "ly", name: "Last Year Revenue ($)", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "ty", name: "This Year Revenue ($)", type: "number", defaultValue: 650000, placeholder: "650000" }
    ],
    outputs: [
      { id: "growth", name: "YoY Growth (%)", type: "number", formatter: "percentage", formula: "((This Year - Last Year) / Last Year) × 100" }
    ],
    calculate: (inputs) => ({ growth: inputs.ly > 0 ? (((inputs.ty || 0) - (inputs.ly || 0)) / inputs.ly) * 100 : 0 })
  },
  {
    id: "competitor-pricing-calculator",
    name: "Competitor Pricing Calculator",
    description: "Compare your price to average competitor price.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "you", name: "Your Price ($)", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "comp", name: "Avg Competitor Price ($)", type: "number", defaultValue: 100, placeholder: "100" }
    ],
    outputs: [
      { id: "diff", name: "Price Difference (%)", type: "number", formatter: "percentage", formula: "((Your Price - Comp Price) / Comp Price) × 100" }
    ],
    calculate: (inputs) => {
      const c = inputs.comp || 0;
      return { diff: c > 0 ? (((inputs.you || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "search-ranking-value-calculator",
    name: "Search Ranking Value Calculator",
    description: "Estimate value of moving up one spot in SERP (assuming CTR doubles).",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "val", name: "Current Monthly Value ($)", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "newVal", name: "Estimated Value if CTR Doubles ($)", type: "number", formatter: "currency", formula: "Current Value × 2" }
    ],
    calculate: (inputs) => ({ newVal: (inputs.val || 0) * 2 })
  },
  {
    id: "marketing-kpi-calculator",
    name: "Marketing KPI Calculator",
    description: "Check if you hit your KPI target.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "target", name: "KPI Target", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "actual", name: "Actual Achievement", type: "number", defaultValue: 950, placeholder: "950" }
    ],
    outputs: [
      { id: "completion", name: "Completion (%)", type: "number", formatter: "percentage", formula: "(Actual / Target) × 100" }
    ],
    calculate: (inputs) => ({ completion: inputs.target > 0 ? ((inputs.actual || 0) / inputs.target) * 100 : 0 })
  },
  {
    id: "marketing-productivity-calculator",
    name: "Marketing Productivity Calculator",
    description: "Calculate revenue generated per marketing team member.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "rev", name: "Marketing Attributed Revenue ($)", type: "number", defaultValue: 2000000, placeholder: "2000000" },
      { id: "team", name: "Number of Team Members", type: "number", defaultValue: 5, placeholder: "5" }
    ],
    outputs: [
      { id: "prod", name: "Revenue per Marketer ($)", type: "number", formatter: "currency", formula: "Revenue / Team Size" }
    ],
    calculate: (inputs) => ({ prod: inputs.team > 0 ? (inputs.rev || 0) / inputs.team : 0 })
  },
  {
    id: "brand-growth-calculator",
    name: "Brand Growth Calculator",
    description: "Calculate brand search volume growth.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "old", name: "Old Brand Search Volume", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "new", name: "New Brand Search Volume", type: "number", defaultValue: 1500, placeholder: "1500" }
    ],
    outputs: [
      { id: "growth", name: "Brand Growth (%)", type: "number", formatter: "percentage", formula: "((New - Old) / Old) × 100" }
    ],
    calculate: (inputs) => ({ growth: inputs.old > 0 ? (((inputs.new || 0) - (inputs.old || 0)) / inputs.old) * 100 : 0 })
  },

  // SOCIAL
  {
    id: "meta-ads-performance-calculator",
    name: "Meta Ads Performance Calculator",
    description: "Calculate ROAS for Meta (Facebook/Instagram) ads.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "spend", name: "Ad Spend ($)", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "rev", name: "Attributed Revenue ($)", type: "number", defaultValue: 8000, placeholder: "8000" }
    ],
    outputs: [
      { id: "roas", name: "ROAS", type: "number", formatter: "number", formula: "Revenue / Spend" }
    ],
    calculate: (inputs) => ({ roas: inputs.spend > 0 ? (inputs.rev || 0) / inputs.spend : 0 })
  },
  {
    id: "social-share-rate-calculator",
    name: "Social Share Rate Calculator",
    description: "Calculate the percentage of views that resulted in a share.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "views", name: "Total Views", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "shares", name: "Total Shares", type: "number", defaultValue: 250, placeholder: "250" }
    ],
    outputs: [
      { id: "rate", name: "Share Rate (%)", type: "number", formatter: "percentage", formula: "(Shares / Views) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.views > 0 ? ((inputs.shares || 0) / inputs.views) * 100 : 0 })
  },
  {
    id: "influencer-campaign-reach-calculator",
    name: "Influencer Campaign Reach Calculator",
    description: "Calculate total aggregate reach of multiple influencers.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "f1", name: "Influencer 1 Reach", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "f2", name: "Influencer 2 Reach", type: "number", defaultValue: 75000, placeholder: "75000" }
    ],
    outputs: [
      { id: "total", name: "Total Reach", type: "number", formatter: "number", formula: "Reach 1 + Reach 2" }
    ],
    calculate: (inputs) => ({ total: (inputs.f1 || 0) + (inputs.f2 || 0) })
  },
  {
    id: "audience-retention-calculator",
    name: "Audience Retention Calculator",
    description: "Calculate how much of a video audience watched.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "watched", name: "Avg Watch Time (seconds)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "length", name: "Total Video Length (seconds)", type: "number", defaultValue: 60, placeholder: "60" }
    ],
    outputs: [
      { id: "ret", name: "Retention Rate (%)", type: "number", formatter: "percentage", formula: "(Watched / Length) × 100" }
    ],
    calculate: (inputs) => ({ ret: inputs.length > 0 ? ((inputs.watched || 0) / inputs.length) * 100 : 0 })
  },
  {
    id: "engagement-to-sales-calculator",
    name: "Engagement-to-Sales Calculator",
    description: "Calculate revenue generated per social engagement.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "eng", name: "Total Engagements", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "rev", name: "Social Attributed Revenue ($)", type: "number", defaultValue: 5000, placeholder: "5000" }
    ],
    outputs: [
      { id: "rps", name: "Revenue per Engagement ($)", type: "number", formatter: "currency", formula: "Revenue / Engagements" }
    ],
    calculate: (inputs) => ({ rps: inputs.eng > 0 ? (inputs.rev || 0) / inputs.eng : 0 })
  },
  {
    id: "video-watch-time-calculator",
    name: "Video Watch Time Calculator",
    description: "Convert total seconds watched into hours.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "sec", name: "Total Seconds Watched", type: "number", defaultValue: 360000, placeholder: "360000" }
    ],
    outputs: [
      { id: "hrs", name: "Total Hours Watched", type: "number", formatter: "number", formula: "Seconds / 3600" }
    ],
    calculate: (inputs) => ({ hrs: (inputs.sec || 0) / 3600 })
  }
];
