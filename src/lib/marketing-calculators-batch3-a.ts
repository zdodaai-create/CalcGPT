import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH3_A: CalculatorConfig[] = [
  // ADVERTISING
  {
    id: "google-ads-budget-calculator",
    name: "Google Ads Budget Calculator",
    description: "Determine the monthly Google Ads budget required for a target number of conversions.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "cpa", name: "Target CPA ($)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "conversions", name: "Target Conversions/Month", type: "number", defaultValue: 200, placeholder: "200" }
    ],
    outputs: [
      { id: "budget", name: "Monthly Budget Required ($)", type: "number", formatter: "currency", formula: "CPA × Target Conversions" }
    ],
    calculate: (inputs) => ({ budget: (inputs.cpa || 0) * (inputs.conversions || 0) })
  },
  {
    id: "ad-click-probability-calculator",
    name: "Ad Click Probability Calculator",
    description: "Estimate the probability of a user clicking an ad based on historical CTR and frequency.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "ctr", name: "Historical CTR (%)", type: "number", defaultValue: 2.5, placeholder: "2.5" },
      { id: "freq", name: "Ad Frequency (Times shown)", type: "number", defaultValue: 4, placeholder: "4" }
    ],
    outputs: [
      { id: "prob", name: "Probability of at least 1 Click (%)", type: "number", formatter: "percentage", formula: "(1 - (1 - CTR)^Frequency) × 100" }
    ],
    calculate: (inputs) => {
      const ctr = (inputs.ctr || 0) / 100;
      const f = inputs.freq || 0;
      return { prob: f > 0 ? (1 - Math.pow(1 - ctr, f)) * 100 : 0 };
    }
  },
  {
    id: "ad-viewability-calculator",
    name: "Ad Viewability Calculator",
    description: "Calculate the percentage of served ad impressions that were actually viewable.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "viewable", name: "Viewable Impressions", type: "number", defaultValue: 45000, placeholder: "45000" },
      { id: "total", name: "Total Served Impressions", type: "number", defaultValue: 60000, placeholder: "60000" }
    ],
    outputs: [
      { id: "rate", name: "Viewability Rate (%)", type: "number", formatter: "percentage", formula: "(Viewable / Total) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.total > 0 ? ((inputs.viewable || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "advertising-frequency-calculator",
    name: "Advertising Frequency Calculator",
    description: "Calculate average ad frequency.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Total Impressions", type: "number", defaultValue: 100000, placeholder: "100000" },
      { id: "reach", name: "Total Reach", type: "number", defaultValue: 25000, placeholder: "25000" }
    ],
    outputs: [
      { id: "freq", name: "Average Frequency", type: "number", formatter: "number", formula: "Impressions / Reach" }
    ],
    calculate: (inputs) => ({ freq: inputs.reach > 0 ? (inputs.impressions || 0) / inputs.reach : 0 })
  },
  {
    id: "digital-ad-cost-calculator",
    name: "Digital Ad Cost Calculator",
    description: "Calculate total ad cost based on CPM and impressions.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Impressions", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "cpm", name: "CPM ($)", type: "number", defaultValue: 15, placeholder: "15" }
    ],
    outputs: [
      { id: "cost", name: "Total Ad Cost ($)", type: "number", formatter: "currency", formula: "(Impressions / 1000) × CPM" }
    ],
    calculate: (inputs) => ({ cost: ((inputs.impressions || 0) / 1000) * (inputs.cpm || 0) })
  },
  {
    id: "ad-revenue-per-click-calculator",
    name: "Ad Revenue Per Click Calculator",
    description: "Calculate RPC (Revenue Per Click) for publishers.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "revenue", name: "Total Ad Revenue ($)", type: "number", defaultValue: 1500, placeholder: "1500" },
      { id: "clicks", name: "Total Ad Clicks", type: "number", defaultValue: 3000, placeholder: "3000" }
    ],
    outputs: [
      { id: "rpc", name: "Revenue Per Click (RPC)", type: "number", formatter: "currency", formula: "Revenue / Clicks" }
    ],
    calculate: (inputs) => ({ rpc: inputs.clicks > 0 ? (inputs.revenue || 0) / inputs.clicks : 0 })
  },

  // CONVERSION
  {
    id: "product-conversion-calculator",
    name: "Product Conversion Calculator",
    description: "Calculate the conversion rate of a specific product page.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "views", name: "Product Page Views", type: "number", defaultValue: 8000, placeholder: "8000" },
      { id: "sales", name: "Product Sales", type: "number", defaultValue: 240, placeholder: "240" }
    ],
    outputs: [
      { id: "cvr", name: "Product Conversion Rate (%)", type: "number", formatter: "percentage", formula: "(Sales / Views) × 100" }
    ],
    calculate: (inputs) => ({ cvr: inputs.views > 0 ? ((inputs.sales || 0) / inputs.views) * 100 : 0 })
  },
  {
    id: "website-engagement-calculator",
    name: "Website Engagement Calculator",
    description: "Calculate engagement rate from engaged sessions and total sessions.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "engaged", name: "Engaged Sessions", type: "number", defaultValue: 4500, placeholder: "4500" },
      { id: "total", name: "Total Sessions", type: "number", defaultValue: 10000, placeholder: "10000" }
    ],
    outputs: [
      { id: "rate", name: "Engagement Rate (%)", type: "number", formatter: "percentage", formula: "(Engaged / Total) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.total > 0 ? ((inputs.engaged || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "landing-page-bounce-calculator",
    name: "Landing Page Bounce Calculator",
    description: "Calculate the bounce rate for a specific landing page.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "bounces", name: "Single-Page Sessions", type: "number", defaultValue: 3000, placeholder: "3000" },
      { id: "entrances", name: "Total Entrances", type: "number", defaultValue: 5000, placeholder: "5000" }
    ],
    outputs: [
      { id: "bounce", name: "Bounce Rate (%)", type: "number", formatter: "percentage", formula: "(Bounces / Entrances) × 100" }
    ],
    calculate: (inputs) => ({ bounce: inputs.entrances > 0 ? ((inputs.bounces || 0) / inputs.entrances) * 100 : 0 })
  },
  {
    id: "mobile-conversion-rate-calculator",
    name: "Mobile Conversion Rate Calculator",
    description: "Compare mobile conversion rate to desktop.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "mTraffic", name: "Mobile Traffic", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "mConversions", name: "Mobile Conversions", type: "number", defaultValue: 150, placeholder: "150" }
    ],
    outputs: [
      { id: "mCvr", name: "Mobile CVR (%)", type: "number", formatter: "percentage", formula: "(Mobile Conversions / Mobile Traffic) × 100" }
    ],
    calculate: (inputs) => ({ mCvr: inputs.mTraffic > 0 ? ((inputs.mConversions || 0) / inputs.mTraffic) * 100 : 0 })
  },
  {
    id: "push-notification-ctr-calculator",
    name: "Push Notification CTR Calculator",
    description: "Calculate the click-through rate of mobile or web push notifications.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "sent", name: "Notifications Sent", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "clicks", name: "Total Clicks", type: "number", defaultValue: 1200, placeholder: "1200" }
    ],
    outputs: [
      { id: "ctr", name: "Push CTR (%)", type: "number", formatter: "percentage", formula: "(Clicks / Sent) × 100" }
    ],
    calculate: (inputs) => ({ ctr: inputs.sent > 0 ? ((inputs.clicks || 0) / inputs.sent) * 100 : 0 })
  },
  {
    id: "conversion-lift-calculator",
    name: "Conversion Lift Calculator",
    description: "Calculate the percentage lift between a control group and test group.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "control", name: "Control Group CVR (%)", type: "number", defaultValue: 2.0, placeholder: "2.0" },
      { id: "test", name: "Test Group CVR (%)", type: "number", defaultValue: 2.5, placeholder: "2.5" }
    ],
    outputs: [
      { id: "lift", name: "Conversion Lift (%)", type: "number", formatter: "percentage", formula: "((Test - Control) / Control) × 100" }
    ],
    calculate: (inputs) => {
      const c = inputs.control || 0;
      return { lift: c > 0 ? (((inputs.test || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "shopping-cart-value-calculator",
    name: "Shopping Cart Value Calculator",
    description: "Calculate total cart value accounting for discounts and tax.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "subtotal", name: "Cart Subtotal ($)", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "discount", name: "Discount (%)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "tax", name: "Tax Rate (%)", type: "number", defaultValue: 8, placeholder: "8" }
    ],
    outputs: [
      { id: "total", name: "Final Cart Value ($)", type: "number", formatter: "currency" }
    ],
    calculate: (inputs) => {
      const sub = inputs.subtotal || 0;
      const afterDiscount = sub * (1 - (inputs.discount || 0) / 100);
      return { total: afterDiscount * (1 + (inputs.tax || 0) / 100) };
    }
  },
  {
    id: "multi-step-funnel-calculator",
    name: "Multi-Step Funnel Calculator",
    description: "Calculate total funnel conversion across 3 steps.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "start", name: "Step 1 Users", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "end", name: "Final Step Conversions", type: "number", defaultValue: 250, placeholder: "250" }
    ],
    outputs: [
      { id: "cvr", name: "Overall Funnel CVR (%)", type: "number", formatter: "percentage", formula: "(Final / Start) × 100" }
    ],
    calculate: (inputs) => ({ cvr: inputs.start > 0 ? ((inputs.end || 0) / inputs.start) * 100 : 0 })
  },

  // ROI
  {
    id: "campaign-roi-forecast-calculator",
    name: "Campaign ROI Forecast Calculator",
    description: "Forecast ROI based on projected spend and sales.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Projected Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "sales", name: "Projected Sales ($)", type: "number", defaultValue: 15000, placeholder: "15000" }
    ],
    outputs: [
      { id: "roi", name: "Forecasted ROI (%)", type: "number", formatter: "percentage", formula: "((Sales - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const s = inputs.spend || 0;
      return { roi: s > 0 ? (((inputs.sales || 0) - s) / s) * 100 : 0 };
    }
  },
  {
    id: "affiliate-revenue-calculator",
    name: "Affiliate Revenue Calculator",
    description: "Calculate affiliate earnings based on traffic and commission.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "traffic", name: "Traffic", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "cvr", name: "Conversion Rate (%)", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "comm", name: "Avg Commission ($)", type: "number", defaultValue: 15, placeholder: "15" }
    ],
    outputs: [
      { id: "rev", name: "Affiliate Revenue ($)", type: "number", formatter: "currency", formula: "Traffic × CVR × Commission" }
    ],
    calculate: (inputs) => ({ rev: (inputs.traffic || 0) * ((inputs.cvr || 0) / 100) * (inputs.comm || 0) })
  },
  {
    id: "email-campaign-roi-calculator",
    name: "Email Campaign ROI Calculator",
    description: "Calculate ROI specifically for email marketing blasts.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Campaign Cost ($)", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "sales", name: "Email-Attributed Sales ($)", type: "number", defaultValue: 3000, placeholder: "3000" }
    ],
    outputs: [
      { id: "roi", name: "Email ROI (%)", type: "number", formatter: "percentage", formula: "((Sales - Cost) / Cost) × 100" }
    ],
    calculate: (inputs) => {
      const c = inputs.cost || 0;
      return { roi: c > 0 ? (((inputs.sales || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "loyalty-program-roi-calculator",
    name: "Loyalty Program ROI Calculator",
    description: "Measure the return from customer loyalty programs.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Program Cost ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "lift", name: "Revenue Lift ($)", type: "number", defaultValue: 25000, placeholder: "25000" }
    ],
    outputs: [
      { id: "roi", name: "Program ROI (%)", type: "number", formatter: "percentage", formula: "((Lift - Cost) / Cost) × 100" }
    ],
    calculate: (inputs) => {
      const c = inputs.cost || 0;
      return { roi: c > 0 ? (((inputs.lift || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "seasonal-sales-forecast-calculator",
    name: "Seasonal Sales Forecast Calculator",
    description: "Forecast sales applying a seasonal multiplier.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "base", name: "Base Monthly Sales ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "multiplier", name: "Seasonal Multiplier (e.g., 1.5 for +50%)", type: "number", defaultValue: 1.5, placeholder: "1.5" }
    ],
    outputs: [
      { id: "forecast", name: "Forecasted Sales ($)", type: "number", formatter: "currency", formula: "Base × Multiplier" }
    ],
    calculate: (inputs) => ({ forecast: (inputs.base || 0) * (inputs.multiplier || 0) })
  },
  {
    id: "product-recommendation-roi-calculator",
    name: "Product Recommendation ROI Calculator",
    description: "Calculate ROI of investing in a product recommendation engine.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Tool Cost ($)", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "sales", name: "Recommendation Sales ($)", type: "number", defaultValue: 8000, placeholder: "8000" }
    ],
    outputs: [
      { id: "roi", name: "Tool ROI (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const c = inputs.cost || 0;
      return { roi: c > 0 ? (((inputs.sales || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "marketing-automation-roi-calculator",
    name: "Marketing Automation ROI Calculator",
    description: "Calculate ROI from marketing automation platforms.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Platform Cost ($)", type: "number", defaultValue: 2500, placeholder: "2500" },
      { id: "value", name: "Attributed Revenue + Time Saved Value ($)", type: "number", defaultValue: 12000, placeholder: "12000" }
    ],
    outputs: [
      { id: "roi", name: "Automation ROI (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const c = inputs.cost || 0;
      return { roi: c > 0 ? (((inputs.value || 0) - c) / c) * 100 : 0 };
    }
  },
  {
    id: "sales-opportunity-calculator",
    name: "Sales Opportunity Calculator",
    description: "Calculate pipeline value.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "deals", name: "Number of Deals", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "value", name: "Avg Deal Size ($)", type: "number", defaultValue: 2000, placeholder: "2000" }
    ],
    outputs: [
      { id: "pipe", name: "Pipeline Value ($)", type: "number", formatter: "currency", formula: "Deals × Deal Size" }
    ],
    calculate: (inputs) => ({ pipe: (inputs.deals || 0) * (inputs.value || 0) })
  },
  {
    id: "traffic-source-roi-calculator",
    name: "Traffic Source ROI Calculator",
    description: "Calculate ROI for a specific traffic source.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Source Spend ($)", type: "number", defaultValue: 3000, placeholder: "3000" },
      { id: "rev", name: "Source Revenue ($)", type: "number", defaultValue: 9000, placeholder: "9000" }
    ],
    outputs: [
      { id: "roi", name: "Source ROI (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const s = inputs.spend || 0;
      return { roi: s > 0 ? (((inputs.rev || 0) - s) / s) * 100 : 0 };
    }
  }
];
