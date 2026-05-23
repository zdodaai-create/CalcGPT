import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH4_A: CalculatorConfig[] = [
  // ADVERTISING
  {
    id: "ad-placement-performance-calculator",
    name: "Ad Placement Performance Calculator",
    description: "Compare CTR across different ad placements.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "clicks", name: "Clicks from Placement", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "impressions", name: "Impressions for Placement", type: "number", defaultValue: 25000, placeholder: "25000" }
    ],
    outputs: [
      { id: "ctr", name: "Placement CTR (%)", type: "number", formatter: "percentage", formula: "(Clicks / Impressions) × 100" }
    ],
    calculate: (inputs) => ({ ctr: inputs.impressions > 0 ? ((inputs.clicks || 0) / inputs.impressions) * 100 : 0 })
  },
  {
    id: "cost-per-thousand-reach-calculator",
    name: "Cost Per Thousand Reach Calculator",
    description: "Calculate cost to reach 1,000 unique users.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "spend", name: "Ad Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "reach", name: "Unique Reach", type: "number", defaultValue: 200000, placeholder: "200000" }
    ],
    outputs: [
      { id: "cpr", name: "Cost Per 1,000 Reach ($)", type: "number", formatter: "currency", formula: "(Spend / Reach) × 1000" }
    ],
    calculate: (inputs) => ({ cpr: inputs.reach > 0 ? ((inputs.spend || 0) / inputs.reach) * 1000 : 0 })
  },
  {
    id: "ad-saturation-calculator",
    name: "Ad Saturation Calculator",
    description: "Determine if your audience is oversaturated with ads.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Total Impressions", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "reach", name: "Unique Reach", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "threshold", name: "Saturation Threshold (Frequency)", type: "number", defaultValue: 8, placeholder: "8" }
    ],
    outputs: [
      { id: "freq", name: "Current Frequency", type: "number", formatter: "number" },
      { id: "saturated", name: "Saturation Level (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const freq = inputs.reach > 0 ? (inputs.impressions || 0) / inputs.reach : 0;
      return { freq, saturated: inputs.threshold > 0 ? (freq / inputs.threshold) * 100 : 0 };
    }
  },
  {
    id: "digital-campaign-reach-calculator",
    name: "Digital Campaign Reach Calculator",
    description: "Estimate total reach from budget and CPM.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "budget", name: "Campaign Budget ($)", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "cpm", name: "Average CPM ($)", type: "number", defaultValue: 12, placeholder: "12" }
    ],
    outputs: [
      { id: "reach", name: "Estimated Impressions", type: "number", formatter: "number", formula: "(Budget / CPM) × 1000" }
    ],
    calculate: (inputs) => ({ reach: inputs.cpm > 0 ? ((inputs.budget || 0) / inputs.cpm) * 1000 : 0 })
  },
  {
    id: "video-ad-conversion-calculator",
    name: "Video Ad Conversion Calculator",
    description: "Calculate conversion rate from video ad views.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "views", name: "Video Views", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "conversions", name: "Conversions", type: "number", defaultValue: 250, placeholder: "250" }
    ],
    outputs: [
      { id: "cvr", name: "Video CVR (%)", type: "number", formatter: "percentage", formula: "(Conversions / Views) × 100" }
    ],
    calculate: (inputs) => ({ cvr: inputs.views > 0 ? ((inputs.conversions || 0) / inputs.views) * 100 : 0 })
  },
  {
    id: "ad-placement-frequency-calculator",
    name: "Ad Placement Frequency Calculator",
    description: "Calculate frequency for a specific ad placement.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Placement Impressions", type: "number", defaultValue: 80000, placeholder: "80000" },
      { id: "reach", name: "Placement Reach", type: "number", defaultValue: 20000, placeholder: "20000" }
    ],
    outputs: [
      { id: "freq", name: "Placement Frequency", type: "number", formatter: "number", formula: "Impressions / Reach" }
    ],
    calculate: (inputs) => ({ freq: inputs.reach > 0 ? (inputs.impressions || 0) / inputs.reach : 0 })
  },
  {
    id: "ad-conversion-probability-calculator",
    name: "Ad Conversion Probability Calculator",
    description: "Estimate probability of conversion after N ad views.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "cvr", name: "Single-View CVR (%)", type: "number", defaultValue: 0.5, placeholder: "0.5" },
      { id: "views", name: "Number of Ad Views", type: "number", defaultValue: 10, placeholder: "10" }
    ],
    outputs: [
      { id: "prob", name: "Cumulative Conversion Probability (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const r = (inputs.cvr || 0) / 100;
      const n = inputs.views || 0;
      return { prob: (1 - Math.pow(1 - r, n)) * 100 };
    }
  },
  {
    id: "ad-budget-allocation-calculator",
    name: "Ad Budget Allocation Calculator",
    description: "Split budget across channels by weight.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "budget", name: "Total Budget ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "w1", name: "Channel 1 Weight (%)", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "w2", name: "Channel 2 Weight (%)", type: "number", defaultValue: 35, placeholder: "35" },
      { id: "w3", name: "Channel 3 Weight (%)", type: "number", defaultValue: 25, placeholder: "25" }
    ],
    outputs: [
      { id: "c1", name: "Channel 1 Budget ($)", type: "number", formatter: "currency" },
      { id: "c2", name: "Channel 2 Budget ($)", type: "number", formatter: "currency" },
      { id: "c3", name: "Channel 3 Budget ($)", type: "number", formatter: "currency" }
    ],
    calculate: (inputs) => {
      const b = inputs.budget || 0;
      return {
        c1: b * ((inputs.w1 || 0) / 100),
        c2: b * ((inputs.w2 || 0) / 100),
        c3: b * ((inputs.w3 || 0) / 100)
      };
    }
  },

  // CONVERSION
  {
    id: "lead-qualification-calculator",
    name: "Lead Qualification Calculator",
    description: "Calculate lead qualification rate.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "total", name: "Total Leads", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "qualified", name: "Qualified Leads (MQL/SQL)", type: "number", defaultValue: 75, placeholder: "75" }
    ],
    outputs: [
      { id: "rate", name: "Qualification Rate (%)", type: "number", formatter: "percentage", formula: "(Qualified / Total) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.total > 0 ? ((inputs.qualified || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "traffic-to-lead-calculator",
    name: "Traffic-to-Lead Calculator",
    description: "Calculate the rate at which website traffic converts to leads.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "traffic", name: "Total Traffic", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "leads", name: "Leads Generated", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "rate", name: "Traffic-to-Lead Rate (%)", type: "number", formatter: "percentage", formula: "(Leads / Traffic) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.traffic > 0 ? ((inputs.leads || 0) / inputs.traffic) * 100 : 0 })
  },
  {
    id: "ecommerce-cart-value-calculator",
    name: "Ecommerce Cart Value Calculator",
    description: "Calculate average cart value from total revenue and orders.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "revenue", name: "Total Revenue ($)", type: "number", defaultValue: 150000, placeholder: "150000" },
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 2000, placeholder: "2000" }
    ],
    outputs: [
      { id: "acv", name: "Average Cart Value ($)", type: "number", formatter: "currency", formula: "Revenue / Orders" }
    ],
    calculate: (inputs) => ({ acv: inputs.orders > 0 ? (inputs.revenue || 0) / inputs.orders : 0 })
  },
  {
    id: "webinar-attendance-rate-calculator",
    name: "Webinar Attendance Rate Calculator",
    description: "Calculate webinar show-up rate from registrations.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "registered", name: "Registrations", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "attended", name: "Attendees", type: "number", defaultValue: 200, placeholder: "200" }
    ],
    outputs: [
      { id: "rate", name: "Attendance Rate (%)", type: "number", formatter: "percentage", formula: "(Attended / Registered) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.registered > 0 ? ((inputs.attended || 0) / inputs.registered) * 100 : 0 })
  },
  {
    id: "shopping-session-duration-calculator",
    name: "Shopping Session Duration Calculator",
    description: "Calculate average session duration in minutes.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "totalMin", name: "Total Session Minutes", type: "number", defaultValue: 25000, placeholder: "25000" },
      { id: "sessions", name: "Total Sessions", type: "number", defaultValue: 5000, placeholder: "5000" }
    ],
    outputs: [
      { id: "avg", name: "Avg Session Duration (min)", type: "number", formatter: "number", formula: "Total Minutes / Sessions" }
    ],
    calculate: (inputs) => ({ avg: inputs.sessions > 0 ? (inputs.totalMin || 0) / inputs.sessions : 0 })
  },
  {
    id: "email-deliverability-calculator",
    name: "Email Deliverability Calculator",
    description: "Calculate the percentage of emails that reached the inbox.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "sent", name: "Emails Sent", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "delivered", name: "Emails Delivered", type: "number", defaultValue: 9500, placeholder: "9500" }
    ],
    outputs: [
      { id: "rate", name: "Deliverability Rate (%)", type: "number", formatter: "percentage", formula: "(Delivered / Sent) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.sent > 0 ? ((inputs.delivered || 0) / inputs.sent) * 100 : 0 })
  },
  {
    id: "lead-to-sale-ratio-calculator",
    name: "Lead-to-Sale Ratio Calculator",
    description: "Calculate the ratio of leads that become paying customers.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "leads", name: "Total Leads", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "sales", name: "Closed Sales", type: "number", defaultValue: 50, placeholder: "50" }
    ],
    outputs: [
      { id: "ratio", name: "Lead-to-Sale Ratio (%)", type: "number", formatter: "percentage", formula: "(Sales / Leads) × 100" }
    ],
    calculate: (inputs) => ({ ratio: inputs.leads > 0 ? ((inputs.sales || 0) / inputs.leads) * 100 : 0 })
  },
  {
    id: "store-conversion-calculator",
    name: "Store Conversion Calculator",
    description: "Calculate in-store or online store conversion rate.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "visitors", name: "Store Visitors", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "buyers", name: "Buyers", type: "number", defaultValue: 250, placeholder: "250" }
    ],
    outputs: [
      { id: "cvr", name: "Store CVR (%)", type: "number", formatter: "percentage", formula: "(Buyers / Visitors) × 100" }
    ],
    calculate: (inputs) => ({ cvr: inputs.visitors > 0 ? ((inputs.buyers || 0) / inputs.visitors) * 100 : 0 })
  },
  {
    id: "marketing-funnel-velocity-calculator",
    name: "Marketing Funnel Velocity Calculator",
    description: "Calculate how fast leads move through the funnel.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "leads", name: "Qualified Leads", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "winRate", name: "Win Rate (%)", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "dealSize", name: "Avg Deal Size ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "cycle", name: "Sales Cycle (days)", type: "number", defaultValue: 30, placeholder: "30" }
    ],
    outputs: [
      { id: "velocity", name: "Pipeline Velocity ($/day)", type: "number", formatter: "currency", formula: "(Leads × WinRate × DealSize) / Cycle" }
    ],
    calculate: (inputs) => {
      const c = inputs.cycle || 1;
      return { velocity: ((inputs.leads || 0) * ((inputs.winRate || 0) / 100) * (inputs.dealSize || 0)) / c };
    }
  },

  // ROI
  {
    id: "campaign-profitability-calculator",
    name: "Campaign Profitability Calculator",
    description: "Calculate net profit from a campaign.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "revenue", name: "Campaign Revenue ($)", type: "number", defaultValue: 25000, placeholder: "25000" },
      { id: "cost", name: "Campaign Cost ($)", type: "number", defaultValue: 8000, placeholder: "8000" }
    ],
    outputs: [
      { id: "profit", name: "Net Profit ($)", type: "number", formatter: "currency", formula: "Revenue - Cost" },
      { id: "margin", name: "Profit Margin (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const profit = (inputs.revenue || 0) - (inputs.cost || 0);
      return { profit, margin: inputs.revenue > 0 ? (profit / inputs.revenue) * 100 : 0 };
    }
  },
  {
    id: "ecommerce-conversion-value-calculator",
    name: "Ecommerce Conversion Value Calculator",
    description: "Calculate total value of e-commerce conversions.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "conversions", name: "Total Conversions", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 85, placeholder: "85" }
    ],
    outputs: [
      { id: "value", name: "Total Conversion Value ($)", type: "number", formatter: "currency", formula: "Conversions × AOV" }
    ],
    calculate: (inputs) => ({ value: (inputs.conversions || 0) * (inputs.aov || 0) })
  },
  {
    id: "sales-pipeline-calculator",
    name: "Sales Pipeline Calculator",
    description: "Calculate weighted pipeline value.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "deals", name: "Number of Deals", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "avg", name: "Average Deal Size ($)", type: "number", defaultValue: 3000, placeholder: "3000" },
      { id: "winRate", name: "Win Rate (%)", type: "number", defaultValue: 30, placeholder: "30" }
    ],
    outputs: [
      { id: "weighted", name: "Weighted Pipeline ($)", type: "number", formatter: "currency", formula: "Deals × AvgSize × WinRate" }
    ],
    calculate: (inputs) => ({ weighted: (inputs.deals || 0) * (inputs.avg || 0) * ((inputs.winRate || 0) / 100) })
  },
  {
    id: "paid-search-roi-calculator",
    name: "Paid Search ROI Calculator",
    description: "Calculate ROI for paid search campaigns.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Paid Search Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "revenue", name: "Search Revenue ($)", type: "number", defaultValue: 18000, placeholder: "18000" }
    ],
    outputs: [
      { id: "roi", name: "Paid Search ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const s = inputs.spend || 0;
      return { roi: s > 0 ? (((inputs.revenue || 0) - s) / s) * 100 : 0 };
    }
  },
  {
    id: "campaign-duration-calculator",
    name: "Campaign Duration Calculator",
    description: "Calculate daily budget needed over a campaign period.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "budget", name: "Total Budget ($)", type: "number", defaultValue: 30000, placeholder: "30000" },
      { id: "days", name: "Campaign Duration (days)", type: "number", defaultValue: 30, placeholder: "30" }
    ],
    outputs: [
      { id: "daily", name: "Daily Budget ($)", type: "number", formatter: "currency", formula: "Budget / Days" }
    ],
    calculate: (inputs) => ({ daily: inputs.days > 0 ? (inputs.budget || 0) / inputs.days : 0 })
  },
  {
    id: "customer-referral-roi-calculator",
    name: "Customer Referral ROI Calculator",
    description: "Calculate ROI of a customer referral program.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Program Cost ($)", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "referrals", name: "Referrals Generated", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "clv", name: "Avg CLV per Referral ($)", type: "number", defaultValue: 200, placeholder: "200" }
    ],
    outputs: [
      { id: "roi", name: "Referral Program ROI (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const rev = (inputs.referrals || 0) * (inputs.clv || 0);
      const c = inputs.cost || 0;
      return { roi: c > 0 ? ((rev - c) / c) * 100 : 0 };
    }
  },
  {
    id: "customer-acquisition-forecast-calculator",
    name: "Customer Acquisition Forecast Calculator",
    description: "Forecast new customers from planned spend.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "budget", name: "Planned Budget ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
      { id: "cac", name: "Historical CAC ($)", type: "number", defaultValue: 50, placeholder: "50" }
    ],
    outputs: [
      { id: "customers", name: "Forecasted New Customers", type: "number", formatter: "number", formula: "Budget / CAC" }
    ],
    calculate: (inputs) => ({ customers: inputs.cac > 0 ? Math.floor((inputs.budget || 0) / inputs.cac) : 0 })
  }
];
