import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH2_B: CalculatorConfig[] = [
  // CUSTOMER
  {
    id: "customer-loyalty-calculator",
    name: "Customer Loyalty Calculator",
    description: "Measure loyalty by calculating repeat purchase rate.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "total", name: "Total Customers", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "repeat", name: "Repeat Customers", type: "number", defaultValue: 1200, placeholder: "1200" }
    ],
    outputs: [
      { id: "loyalty", name: "Repeat Purchase Rate (%)", type: "number", formatter: "percentage", formula: "(Repeat Customers / Total Customers) × 100" }
    ],
    calculate: (inputs) => ({ loyalty: inputs.total > 0 ? ((inputs.repeat || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "customer-segmentation-calculator",
    name: "Customer Segmentation Calculator",
    description: "Calculate what percentage of your base belongs to a specific segment.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "total", name: "Total Customer Base", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "segment", name: "Segment Size", type: "number", defaultValue: 2500, placeholder: "2500" }
    ],
    outputs: [
      { id: "percent", name: "Segment Percentage (%)", type: "number", formatter: "percentage", formula: "(Segment / Total) × 100" }
    ],
    calculate: (inputs) => ({ percent: inputs.total > 0 ? ((inputs.segment || 0) / inputs.total) * 100 : 0 })
  },
  {
    id: "brand-recall-calculator",
    name: "Brand Recall Calculator",
    description: "Calculate unaided brand recall percentage from survey data.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "surveyed", name: "Total Surveyed", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "recalled", name: "Recalled Brand", type: "number", defaultValue: 350, placeholder: "350" }
    ],
    outputs: [
      { id: "recallRate", name: "Brand Recall Rate (%)", type: "number", formatter: "percentage", formula: "(Recalled / Surveyed) × 100" }
    ],
    calculate: (inputs) => ({ recallRate: inputs.surveyed > 0 ? ((inputs.recalled || 0) / inputs.surveyed) * 100 : 0 })
  },
  {
    id: "brand-sentiment-calculator",
    name: "Brand Sentiment Calculator",
    description: "Calculate the net sentiment score of brand mentions.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "positive", name: "Positive Mentions", type: "number", defaultValue: 600, placeholder: "600" },
      { id: "neutral", name: "Neutral Mentions", type: "number", defaultValue: 300, placeholder: "300" },
      { id: "negative", name: "Negative Mentions", type: "number", defaultValue: 100, placeholder: "100" }
    ],
    outputs: [
      { id: "sentiment", name: "Net Sentiment Score", type: "number", formatter: "percentage", formula: "((Positive - Negative) / Total) × 100" }
    ],
    calculate: (inputs) => {
      const pos = inputs.positive || 0;
      const neu = inputs.neutral || 0;
      const neg = inputs.negative || 0;
      const total = pos + neu + neg;
      return { sentiment: total > 0 ? ((pos - neg) / total) * 100 : 0 };
    }
  },
  {
    id: "customer-journey-calculator",
    name: "Customer Journey Calculator",
    description: "Estimate average time in days from first touchpoint to conversion.",
    category: "Marketing",
    subcategory: "Customer Metrics",
    inputs: [
      { id: "days", name: "Total Days to Convert (All users)", type: "number", defaultValue: 4500, placeholder: "4500" },
      { id: "users", name: "Converted Users", type: "number", defaultValue: 150, placeholder: "150" }
    ],
    outputs: [
      { id: "avgDays", name: "Average Days to Convert", type: "number", formatter: "number", formula: "Total Days / Converted Users" }
    ],
    calculate: (inputs) => ({ avgDays: inputs.users > 0 ? (inputs.days || 0) / inputs.users : 0 })
  },

  // STRATEGY
  {
    id: "brand-equity-calculator",
    name: "Brand Equity Calculator",
    description: "Estimate financial brand equity using the price premium method.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "brandPrice", name: "Your Product Price ($)", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "genericPrice", name: "Generic Product Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "volume", name: "Sales Volume", type: "number", defaultValue: 10000, placeholder: "10000" }
    ],
    outputs: [
      { id: "premium", name: "Price Premium ($)", type: "number", formatter: "currency" },
      { id: "equity", name: "Brand Equity Value ($)", type: "number", formatter: "currency", formula: "(Brand Price - Generic Price) × Volume" }
    ],
    calculate: (inputs) => {
      const bp = inputs.brandPrice || 0;
      const gp = inputs.genericPrice || 0;
      const premium = bp - gp;
      return { premium, equity: premium * (inputs.volume || 0) };
    }
  },
  {
    id: "product-pricing-calculator",
    name: "Product Pricing Calculator",
    description: "Determine optimal selling price to achieve a target profit margin.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "cogs", name: "Cost of Goods Sold (COGS) ($)", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "margin", name: "Target Profit Margin (%)", type: "number", defaultValue: 50, placeholder: "50" }
    ],
    outputs: [
      { id: "price", name: "Required Selling Price ($)", type: "number", formatter: "currency", formula: "COGS / (1 - Margin)" }
    ],
    calculate: (inputs) => {
      const cogs = inputs.cogs || 0;
      const margin = (inputs.margin || 0) / 100;
      return { price: margin < 1 ? cogs / (1 - margin) : 0 };
    }
  },
  {
    id: "organic-traffic-growth-calculator",
    name: "Organic Traffic Growth Calculator",
    description: "Calculate month-over-month (MoM) traffic growth.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "prev", name: "Previous Month Traffic", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "current", name: "Current Month Traffic", type: "number", defaultValue: 65000, placeholder: "65000" }
    ],
    outputs: [
      { id: "growth", name: "MoM Growth (%)", type: "number", formatter: "percentage", formula: "((Current - Previous) / Previous) × 100" }
    ],
    calculate: (inputs) => {
      const prev = inputs.prev || 0;
      return { growth: prev > 0 ? (((inputs.current || 0) - prev) / prev) * 100 : 0 };
    }
  },
  {
    id: "seo-backlink-value-calculator",
    name: "SEO Backlink Value Calculator",
    description: "Estimate the value of an acquired backlink compared to CPC equivalent.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "traffic", name: "Monthly Traffic from Link", type: "number", defaultValue: 300, placeholder: "300" },
      { id: "cpc", name: "Equivalent Keyword CPC ($)", type: "number", defaultValue: 4.5, placeholder: "4.5" }
    ],
    outputs: [
      { id: "value", name: "Monthly Link Value ($)", type: "number", formatter: "currency", formula: "Traffic × CPC" }
    ],
    calculate: (inputs) => ({ value: (inputs.traffic || 0) * (inputs.cpc || 0) })
  },
  {
    id: "keyword-difficulty-calculator",
    name: "Keyword Difficulty Calculator",
    description: "Basic weighted calculation of keyword difficulty based on SERP metrics.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "da", name: "Avg Domain Authority (Top 10)", type: "number", defaultValue: 65, placeholder: "65" },
      { id: "links", name: "Avg Backlinks (Top 10)", type: "number", defaultValue: 120, placeholder: "120" }
    ],
    outputs: [
      { id: "difficulty", name: "Estimated Difficulty Score (0-100)", type: "number", formatter: "number", formula: "(DA × 0.7) + (min(Links, 500) / 500 × 30)" }
    ],
    calculate: (inputs) => {
      const da = inputs.da || 0;
      const links = inputs.links || 0;
      const score = (da * 0.7) + ((Math.min(links, 500) / 500) * 30);
      return { difficulty: Math.min(score, 100) };
    }
  },
  {
    id: "store-footfall-calculator",
    name: "Store Footfall Calculator",
    description: "Calculate retail conversion rate from foot traffic.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "footfall", name: "Daily Footfall", type: "number", defaultValue: 450, placeholder: "450" },
      { id: "sales", name: "Daily Transactions", type: "number", defaultValue: 60, placeholder: "60" }
    ],
    outputs: [
      { id: "cvr", name: "Store Conversion Rate (%)", type: "number", formatter: "percentage", formula: "(Transactions / Footfall) × 100" }
    ],
    calculate: (inputs) => ({ cvr: inputs.footfall > 0 ? ((inputs.sales || 0) / inputs.footfall) * 100 : 0 })
  },
  {
    id: "ecommerce-revenue-calculator",
    name: "E-commerce Revenue Calculator",
    description: "Calculate expected revenue from traffic, CVR, and AOV.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "traffic", name: "Website Traffic", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "cvr", name: "Conversion Rate (%)", type: "number", defaultValue: 2.5, placeholder: "2.5" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 85, placeholder: "85" }
    ],
    outputs: [
      { id: "revenue", name: "Expected Revenue ($)", type: "number", formatter: "currency", formula: "Traffic × CVR × AOV" }
    ],
    calculate: (inputs) => ({ revenue: (inputs.traffic || 0) * ((inputs.cvr || 0) / 100) * (inputs.aov || 0) })
  },
  {
    id: "upsell-revenue-calculator",
    name: "Upsell Revenue Calculator",
    description: "Calculate the revenue lift generated by upsell offers.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "customers", name: "Total Customers", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "takeRate", name: "Upsell Take Rate (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "upsellValue", name: "Upsell Price Difference ($)", type: "number", defaultValue: 40, placeholder: "40" }
    ],
    outputs: [
      { id: "extraRev", name: "Additional Revenue ($)", type: "number", formatter: "currency", formula: "Customers × Take Rate × Upsell Value" }
    ],
    calculate: (inputs) => ({ extraRev: (inputs.customers || 0) * ((inputs.takeRate || 0) / 100) * (inputs.upsellValue || 0) })
  },
  {
    id: "cross-sell-revenue-calculator",
    name: "Cross-sell Revenue Calculator",
    description: "Calculate revenue from cross-selling complementary products.",
    category: "Marketing",
    subcategory: "Strategy & Growth",
    inputs: [
      { id: "transactions", name: "Primary Transactions", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "attachRate", name: "Attach Rate (%)", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "itemValue", name: "Cross-sell Item Value ($)", type: "number", defaultValue: 20, placeholder: "20" }
    ],
    outputs: [
      { id: "crossRev", name: "Cross-sell Revenue ($)", type: "number", formatter: "currency", formula: "Transactions × Attach Rate × Value" }
    ],
    calculate: (inputs) => ({ crossRev: (inputs.transactions || 0) * ((inputs.attachRate || 0) / 100) * (inputs.itemValue || 0) })
  },

  // SOCIAL MEDIA
  {
    id: "engagement-per-post-calculator",
    name: "Engagement Per Post Calculator",
    description: "Calculate average engagement across a campaign's posts.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "totalEng", name: "Total Engagements", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "posts", name: "Number of Posts", type: "number", defaultValue: 12, placeholder: "12" }
    ],
    outputs: [
      { id: "avg", name: "Average Engagement per Post", type: "number", formatter: "number", formula: "Total Engagements / Posts" }
    ],
    calculate: (inputs) => ({ avg: inputs.posts > 0 ? (inputs.totalEng || 0) / inputs.posts : 0 })
  },
  {
    id: "youtube-cpm-earnings-calculator",
    name: "YouTube CPM Earnings Calculator",
    description: "Estimate YouTube ad revenue based on monetized views and CPM.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "views", name: "Total Views", type: "number", defaultValue: 500000, placeholder: "500000" },
      { id: "monetizedRate", name: "Monetized Playbacks (%)", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "cpm", name: "Average CPM ($)", type: "number", defaultValue: 6.5, placeholder: "6.5" }
    ],
    outputs: [
      { id: "earnings", name: "Estimated Earnings ($)", type: "number", formatter: "currency", formula: "(Views × Monetized% / 1000) × CPM × 0.55" },
      { id: "note", name: "Note", type: "string", formatter: "text" }
    ],
    calculate: (inputs) => {
      const views = inputs.views || 0;
      const rate = (inputs.monetizedRate || 0) / 100;
      const cpm = inputs.cpm || 0;
      // YouTube takes 45%, creator keeps 55%
      const earnings = ((views * rate) / 1000) * cpm * 0.55;
      return { earnings, note: "Assumes standard 55% creator revenue share." };
    }
  },
  {
    id: "tiktok-engagement-calculator",
    name: "TikTok Engagement Calculator",
    description: "Calculate TikTok engagement rate factoring in views instead of followers.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "likes", name: "Likes", type: "number", defaultValue: 4500, placeholder: "4500" },
      { id: "comments", name: "Comments", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "shares", name: "Shares", type: "number", defaultValue: 300, placeholder: "300" },
      { id: "views", name: "Total Views", type: "number", defaultValue: 50000, placeholder: "50000" }
    ],
    outputs: [
      { id: "rate", name: "Engagement Rate by Views (%)", type: "number", formatter: "percentage", formula: "((Likes + Comments + Shares) / Views) × 100" }
    ],
    calculate: (inputs) => {
      const eng = (inputs.likes || 0) + (inputs.comments || 0) + (inputs.shares || 0);
      const views = inputs.views || 0;
      return { rate: views > 0 ? (eng / views) * 100 : 0 };
    }
  },
  {
    id: "instagram-reach-calculator",
    name: "Instagram Reach Calculator",
    description: "Calculate what percentage of your followers actually saw your post.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "reach", name: "Post Reach", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "followers", name: "Total Followers", type: "number", defaultValue: 100000, placeholder: "100000" }
    ],
    outputs: [
      { id: "reachRate", name: "Reach Rate (%)", type: "number", formatter: "percentage", formula: "(Reach / Followers) × 100" }
    ],
    calculate: (inputs) => ({ reachRate: inputs.followers > 0 ? ((inputs.reach || 0) / inputs.followers) * 100 : 0 })
  },
  {
    id: "facebook-ad-roi-calculator",
    name: "Facebook Ad ROI Calculator",
    description: "Calculate ROI specifically for Facebook Ad campaigns.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "spend", name: "Ad Spend ($)", type: "number", defaultValue: 1200, placeholder: "1200" },
      { id: "revenue", name: "Conversion Revenue ($)", type: "number", defaultValue: 4500, placeholder: "4500" }
    ],
    outputs: [
      { id: "roi", name: "FB Ad ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const spend = inputs.spend || 0;
      return { roi: spend > 0 ? (((inputs.revenue || 0) - spend) / spend) * 100 : 0 };
    }
  },
  {
    id: "linkedin-campaign-calculator",
    name: "LinkedIn Campaign Calculator",
    description: "Calculate B2B LinkedIn campaign cost per acquired customer.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "spend", name: "Campaign Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "leads", name: "Leads Generated", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "closeRate", name: "Lead Close Rate (%)", type: "number", defaultValue: 10, placeholder: "10" }
    ],
    outputs: [
      { id: "cpl", name: "Cost Per Lead ($)", type: "number", formatter: "currency" },
      { id: "cac", name: "Cost Per Acquisition ($)", type: "number", formatter: "currency", formula: "Spend / (Leads × Close Rate)" }
    ],
    calculate: (inputs) => {
      const spend = inputs.spend || 0;
      const leads = inputs.leads || 0;
      const closeRate = (inputs.closeRate || 0) / 100;
      const customers = leads * closeRate;
      return {
        cpl: leads > 0 ? spend / leads : 0,
        cac: customers > 0 ? spend / customers : 0
      };
    }
  },
  {
    id: "pinterest-traffic-calculator",
    name: "Pinterest Traffic Calculator",
    description: "Calculate outbound click rate from Pinterest pins.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "impressions", name: "Pin Impressions", type: "number", defaultValue: 250000, placeholder: "250000" },
      { id: "clicks", name: "Outbound Clicks", type: "number", defaultValue: 1500, placeholder: "1500" }
    ],
    outputs: [
      { id: "rate", name: "Outbound Click Rate (%)", type: "number", formatter: "percentage", formula: "(Clicks / Impressions) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.impressions > 0 ? ((inputs.clicks || 0) / inputs.impressions) * 100 : 0 })
  },
  {
    id: "twitter-engagement-rate-calculator",
    name: "Twitter Engagement Rate Calculator",
    description: "Calculate standard Twitter engagement rate based on impressions.",
    category: "Marketing",
    subcategory: "Social Media & Platforms",
    inputs: [
      { id: "engagements", name: "Total Engagements (Clicks, RTs, Likes, Replies)", type: "number", defaultValue: 350, placeholder: "350" },
      { id: "impressions", name: "Tweet Impressions", type: "number", defaultValue: 12000, placeholder: "12000" }
    ],
    outputs: [
      { id: "rate", name: "Engagement Rate (%)", type: "number", formatter: "percentage", formula: "(Engagements / Impressions) × 100" }
    ],
    calculate: (inputs) => ({ rate: inputs.impressions > 0 ? ((inputs.engagements || 0) / inputs.impressions) * 100 : 0 })
  }
];
