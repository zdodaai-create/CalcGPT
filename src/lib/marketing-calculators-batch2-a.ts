import { CalculatorConfig } from "@/types/calculator";

export const MARKETING_BATCH2_A: CalculatorConfig[] = [
  // ADVERTISING
  {
    id: "ad-frequency-calculator",
    name: "Ad Frequency Calculator",
    description: "Calculate how many times on average a user sees your ad.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Total Impressions", type: "number", defaultValue: 100000, placeholder: "100000" },
      { id: "reach", name: "Total Reach (Unique Users)", type: "number", defaultValue: 25000, placeholder: "25000" }
    ],
    outputs: [
      { id: "frequency", name: "Ad Frequency", type: "number", formatter: "number", formula: "Impressions / Reach" }
    ],
    calculate: (inputs) => {
      const imp = inputs.impressions || 0;
      const reach = inputs.reach || 0;
      return { frequency: reach > 0 ? imp / reach : 0 };
    }
  },
  {
    id: "impressions-to-reach-calculator",
    name: "Impressions to Reach Calculator",
    description: "Estimate required impressions to hit a target reach based on an assumed frequency.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "targetReach", name: "Target Reach", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "targetFrequency", name: "Target Frequency", type: "number", defaultValue: 3, placeholder: "3" }
    ],
    outputs: [
      { id: "requiredImpressions", name: "Required Impressions", type: "number", formatter: "number", formula: "Target Reach × Target Frequency" }
    ],
    calculate: (inputs) => ({ requiredImpressions: (inputs.targetReach || 0) * (inputs.targetFrequency || 0) })
  },
  {
    id: "ppc-budget-calculator",
    name: "PPC Budget Calculator",
    description: "Calculate required budget to achieve target conversions.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "targetConversions", name: "Target Conversions", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "cvr", name: "Conversion Rate (%)", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "cpc", name: "Average CPC ($)", type: "number", defaultValue: 1.5, placeholder: "1.5" }
    ],
    outputs: [
      { id: "budget", name: "Required Budget ($)", type: "number", formatter: "currency", formula: "(Target / CVR) × CPC" }
    ],
    calculate: (inputs) => {
      const target = inputs.targetConversions || 0;
      const cvr = (inputs.cvr || 0) / 100;
      const cpc = inputs.cpc || 0;
      const clicks = cvr > 0 ? target / cvr : 0;
      return { budget: clicks * cpc };
    }
  },
  {
    id: "cpc-bid-calculator",
    name: "CPC Bid Calculator",
    description: "Calculate your maximum profitable CPC bid.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "cpa", name: "Target CPA ($)", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "cvr", name: "Conversion Rate (%)", type: "number", defaultValue: 2, placeholder: "2" }
    ],
    outputs: [
      { id: "maxCpc", name: "Max Profitable CPC ($)", type: "number", formatter: "currency", formula: "CPA × CVR" }
    ],
    calculate: (inputs) => {
      const cpa = inputs.cpa || 0;
      const cvr = (inputs.cvr || 0) / 100;
      return { maxCpc: cpa * cvr };
    }
  },
  {
    id: "ad-conversion-value-calculator",
    name: "Ad Conversion Value Calculator",
    description: "Calculate the total monetary value generated from ad conversions.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "conversions", name: "Number of Conversions", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 120, placeholder: "120" }
    ],
    outputs: [
      { id: "totalValue", name: "Total Conversion Value ($)", type: "number", formatter: "currency", formula: "Conversions × AOV" }
    ],
    calculate: (inputs) => ({ totalValue: (inputs.conversions || 0) * (inputs.aov || 0) })
  },
  {
    id: "podcast-advertising-calculator",
    name: "Podcast Advertising Calculator",
    description: "Calculate the estimated cost and ROI of a podcast ad read.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "downloads", name: "Average Downloads per Episode", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "cpm", name: "Podcast CPM ($)", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "cvr", name: "Expected Conversion Rate (%)", type: "number", defaultValue: 0.5, placeholder: "0.5" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 100, placeholder: "100" }
    ],
    outputs: [
      { id: "cost", name: "Ad Cost ($)", type: "number", formatter: "currency", formula: "(Downloads / 1000) × CPM" },
      { id: "revenue", name: "Estimated Revenue ($)", type: "number", formatter: "currency" },
      { id: "roas", name: "ROAS (x)", type: "number", formatter: "number" }
    ],
    calculate: (inputs) => {
      const dl = inputs.downloads || 0;
      const cpm = inputs.cpm || 0;
      const cost = (dl / 1000) * cpm;
      const rev = dl * ((inputs.cvr || 0) / 100) * (inputs.aov || 0);
      return { cost, revenue: rev, roas: cost > 0 ? rev / cost : 0 };
    }
  },
  {
    id: "influencer-cost-calculator",
    name: "Influencer Cost Calculator",
    description: "Estimate how much you should pay an influencer based on followers and engagement.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "followers", name: "Total Followers", type: "number", defaultValue: 100000, placeholder: "100000" },
      { id: "engagement", name: "Engagement Rate (%)", type: "number", defaultValue: 3, placeholder: "3" },
      { id: "cpe", name: "Industry Cost Per Engagement ($)", type: "number", defaultValue: 0.15, placeholder: "0.15" }
    ],
    outputs: [
      { id: "fairPrice", name: "Estimated Fair Price ($)", type: "number", formatter: "currency", formula: "Followers × Engagement Rate × CPE" }
    ],
    calculate: (inputs) => {
      const foll = inputs.followers || 0;
      const eng = (inputs.engagement || 0) / 100;
      const cpe = inputs.cpe || 0;
      return { fairPrice: foll * eng * cpe };
    }
  },
  {
    id: "cost-per-engagement-calculator",
    name: "Cost Per Engagement Calculator",
    description: "Calculate how much you are paying for each engagement (like, comment, share).",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "spend", name: "Total Spend ($)", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "engagements", name: "Total Engagements", type: "number", defaultValue: 2500, placeholder: "2500" }
    ],
    outputs: [
      { id: "cpe", name: "Cost Per Engagement (CPE)", type: "number", formatter: "currency", formula: "Spend / Engagements" }
    ],
    calculate: (inputs) => ({ cpe: inputs.engagements > 0 ? (inputs.spend || 0) / inputs.engagements : 0 })
  },
  {
    id: "impression-share-calculator",
    name: "Impression Share Calculator",
    description: "Calculate what percentage of available market impressions your ads captured.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "impressions", name: "Your Impressions", type: "number", defaultValue: 45000, placeholder: "45000" },
      { id: "eligible", name: "Total Eligible Impressions", type: "number", defaultValue: 100000, placeholder: "100000" }
    ],
    outputs: [
      { id: "share", name: "Impression Share (%)", type: "number", formatter: "percentage", formula: "(Your Impressions / Eligible Impressions) × 100" }
    ],
    calculate: (inputs) => ({ share: inputs.eligible > 0 ? ((inputs.impressions || 0) / inputs.eligible) * 100 : 0 })
  },
  {
    id: "app-install-cost-calculator",
    name: "App Install Cost Calculator",
    description: "Calculate the Cost Per Install (CPI) for mobile apps.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "spend", name: "Ad Spend ($)", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "installs", name: "Total Installs", type: "number", defaultValue: 850, placeholder: "850" }
    ],
    outputs: [
      { id: "cpi", name: "Cost Per Install (CPI)", type: "number", formatter: "currency", formula: "Spend / Installs" }
    ],
    calculate: (inputs) => ({ cpi: inputs.installs > 0 ? (inputs.spend || 0) / inputs.installs : 0 })
  },
  {
    id: "mobile-ad-revenue-calculator",
    name: "Mobile Ad Revenue Calculator",
    description: "Estimate revenue generated from serving ads within your mobile app.",
    category: "Marketing",
    subcategory: "Advertising & Media",
    inputs: [
      { id: "dau", name: "Daily Active Users", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "impPerUser", name: "Ad Impressions per User", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "ecpm", name: "eCPM ($)", type: "number", defaultValue: 2.5, placeholder: "2.5" }
    ],
    outputs: [
      { id: "daily", name: "Daily Revenue ($)", type: "number", formatter: "currency", formula: "(DAU × Imp/User / 1000) × eCPM" },
      { id: "monthly", name: "Monthly Revenue ($)", type: "number", formatter: "currency" }
    ],
    calculate: (inputs) => {
      const dau = inputs.dau || 0;
      const imp = inputs.impPerUser || 0;
      const ecpm = inputs.ecpm || 0;
      const daily = ((dau * imp) / 1000) * ecpm;
      return { daily, monthly: daily * 30 };
    }
  },

  // CONVERSION
  {
    id: "cost-per-lead-calculator",
    name: "Cost Per Lead (CPL) Calculator",
    description: "Calculate how much it costs to acquire a single lead.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "spend", name: "Total Spend ($)", type: "number", defaultValue: 1500, placeholder: "1500" },
      { id: "leads", name: "Total Leads Generated", type: "number", defaultValue: 30, placeholder: "30" }
    ],
    outputs: [
      { id: "cpl", name: "Cost Per Lead (CPL)", type: "number", formatter: "currency", formula: "Spend / Leads" }
    ],
    calculate: (inputs) => ({ cpl: inputs.leads > 0 ? (inputs.spend || 0) / inputs.leads : 0 })
  },
  {
    id: "funnel-drop-off-calculator",
    name: "Funnel Drop-off Calculator",
    description: "Calculate the percentage of users lost between two steps.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "step1", name: "Users at Step 1", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "step2", name: "Users at Step 2", type: "number", defaultValue: 450, placeholder: "450" }
    ],
    outputs: [
      { id: "dropoff", name: "Drop-off Rate (%)", type: "number", formatter: "percentage", formula: "((Step 1 - Step 2) / Step 1) × 100" }
    ],
    calculate: (inputs) => {
      const s1 = inputs.step1 || 0;
      const s2 = inputs.step2 || 0;
      return { dropoff: s1 > 0 ? ((s1 - s2) / s1) * 100 : 0 };
    }
  },
  {
    id: "sales-funnel-calculator",
    name: "Sales Funnel Calculator",
    description: "Calculate the ultimate revenue from top-of-funnel traffic.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "traffic", name: "Website Traffic", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "leadRate", name: "Visitor-to-Lead Rate (%)", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "closeRate", name: "Lead-to-Customer Rate (%)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "aov", name: "Average Deal Size ($)", type: "number", defaultValue: 500, placeholder: "500" }
    ],
    outputs: [
      { id: "customers", name: "Total Customers", type: "number", formatter: "number" },
      { id: "revenue", name: "Estimated Revenue ($)", type: "number", formatter: "currency", formula: "Traffic × Lead Rate × Close Rate × Deal Size" }
    ],
    calculate: (inputs) => {
      const traf = inputs.traffic || 0;
      const lr = (inputs.leadRate || 0) / 100;
      const cr = (inputs.closeRate || 0) / 100;
      const customers = traf * lr * cr;
      return { customers, revenue: customers * (inputs.aov || 0) };
    }
  },
  {
    id: "webinar-conversion-calculator",
    name: "Webinar Conversion Calculator",
    description: "Analyze webinar success from registration to final purchase.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "registrants", name: "Registrants", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "attendees", name: "Attendees", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "sales", name: "Sales Made", type: "number", defaultValue: 15, placeholder: "15" }
    ],
    outputs: [
      { id: "attendanceRate", name: "Attendance Rate (%)", type: "number", formatter: "percentage" },
      { id: "cvr", name: "Attendee Conversion Rate (%)", type: "number", formatter: "percentage" }
    ],
    calculate: (inputs) => {
      const reg = inputs.registrants || 0;
      const att = inputs.attendees || 0;
      const sales = inputs.sales || 0;
      return {
        attendanceRate: reg > 0 ? (att / reg) * 100 : 0,
        cvr: att > 0 ? (sales / att) * 100 : 0
      };
    }
  },
  {
    id: "email-bounce-rate-calculator",
    name: "Email Bounce Rate Calculator",
    description: "Calculate the percentage of emails that failed to deliver.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "sent", name: "Emails Sent", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "bounced", name: "Emails Bounced", type: "number", defaultValue: 150, placeholder: "150" }
    ],
    outputs: [
      { id: "bounceRate", name: "Bounce Rate (%)", type: "number", formatter: "percentage", formula: "(Bounced / Sent) × 100" }
    ],
    calculate: (inputs) => ({ bounceRate: inputs.sent > 0 ? ((inputs.bounced || 0) / inputs.sent) * 100 : 0 })
  },
  {
    id: "unsubscribe-rate-calculator",
    name: "Unsubscribe Rate Calculator",
    description: "Calculate the percentage of users who opted out after a campaign.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "delivered", name: "Emails Delivered", type: "number", defaultValue: 9850, placeholder: "9850" },
      { id: "unsubs", name: "Unsubscribes", type: "number", defaultValue: 45, placeholder: "45" }
    ],
    outputs: [
      { id: "unsubRate", name: "Unsubscribe Rate (%)", type: "number", formatter: "percentage", formula: "(Unsubscribes / Delivered) × 100" }
    ],
    calculate: (inputs) => ({ unsubRate: inputs.delivered > 0 ? ((inputs.unsubs || 0) / inputs.delivered) * 100 : 0 })
  },
  {
    id: "subscriber-growth-calculator",
    name: "Subscriber Growth Calculator",
    description: "Calculate list growth factoring in new additions and churn.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "start", name: "Starting List Size", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "new", name: "New Subscribers", type: "number", defaultValue: 400, placeholder: "400" },
      { id: "lost", name: "Unsubscribed/Bounced", type: "number", defaultValue: 80, placeholder: "80" }
    ],
    outputs: [
      { id: "growth", name: "Net Growth Rate (%)", type: "number", formatter: "percentage", formula: "((New - Lost) / Start) × 100" },
      { id: "final", name: "Final List Size", type: "number", formatter: "number" }
    ],
    calculate: (inputs) => {
      const start = inputs.start || 0;
      const net = (inputs.new || 0) - (inputs.lost || 0);
      return {
        growth: start > 0 ? (net / start) * 100 : 0,
        final: start + net
      };
    }
  },
  {
    id: "conversion-funnel-leakage-calculator",
    name: "Conversion Funnel Leakage Calculator",
    description: "Identify how much revenue is lost at a specific funnel drop-off.",
    category: "Marketing",
    subcategory: "Conversion & Funnel",
    inputs: [
      { id: "dropoff", name: "Users Dropped", type: "number", defaultValue: 300, placeholder: "300" },
      { id: "cvr", name: "Subsequent CVR (%)", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "ltv", name: "Average LTV ($)", type: "number", defaultValue: 250, placeholder: "250" }
    ],
    outputs: [
      { id: "lostRev", name: "Lost Revenue ($)", type: "number", formatter: "currency", formula: "Dropped Users × CVR × LTV" }
    ],
    calculate: (inputs) => ({ lostRev: (inputs.dropoff || 0) * ((inputs.cvr || 0) / 100) * (inputs.ltv || 0) })
  },

  // ROI
  {
    id: "marketing-funnel-roi-calculator",
    name: "Marketing Funnel ROI Calculator",
    description: "Calculate overall ROI taking into account funnel stage costs.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Total Funnel Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "revenue", name: "Total Funnel Revenue ($)", type: "number", defaultValue: 18000, placeholder: "18000" }
    ],
    outputs: [
      { id: "roi", name: "Funnel ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const spend = inputs.spend || 0;
      const rev = inputs.revenue || 0;
      return { roi: spend > 0 ? ((rev - spend) / spend) * 100 : 0 };
    }
  },
  {
    id: "product-launch-roi-calculator",
    name: "Product Launch ROI Calculator",
    description: "Calculate the return on investment specifically for a new product launch.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "devCost", name: "Development Cost ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
      { id: "marketing", name: "Launch Marketing Cost ($)", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "revenue", name: "Launch Revenue ($)", type: "number", defaultValue: 50000, placeholder: "50000" }
    ],
    outputs: [
      { id: "roi", name: "Launch ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Dev - Marketing) / (Dev + Marketing)) × 100" }
    ],
    calculate: (inputs) => {
      const cost = (inputs.devCost || 0) + (inputs.marketing || 0);
      const rev = inputs.revenue || 0;
      return { roi: cost > 0 ? ((rev - cost) / cost) * 100 : 0 };
    }
  },
  {
    id: "video-marketing-roi-calculator",
    name: "Video Marketing ROI Calculator",
    description: "Analyze the ROI of video production and distribution.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "production", name: "Production Cost ($)", type: "number", defaultValue: 3000, placeholder: "3000" },
      { id: "promotion", name: "Promotion Cost ($)", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "sales", name: "Video-Attributed Sales ($)", type: "number", defaultValue: 8500, placeholder: "8500" }
    ],
    outputs: [
      { id: "roi", name: "Video ROI (%)", type: "number", formatter: "percentage", formula: "((Sales - Total Cost) / Total Cost) × 100" }
    ],
    calculate: (inputs) => {
      const cost = (inputs.production || 0) + (inputs.promotion || 0);
      return { roi: cost > 0 ? (((inputs.sales || 0) - cost) / cost) * 100 : 0 };
    }
  },
  {
    id: "customer-referral-value-calculator",
    name: "Customer Referral Value Calculator",
    description: "Calculate the total value brought in by a referring customer.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "referrals", name: "Average Referrals per Customer", type: "number", defaultValue: 0.5, placeholder: "0.5" },
      { id: "cvr", name: "Referral Conversion Rate (%)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "ltv", name: "Customer LTV ($)", type: "number", defaultValue: 1200, placeholder: "1200" }
    ],
    outputs: [
      { id: "crv", name: "Referral Value per Customer ($)", type: "number", formatter: "currency", formula: "Referrals × CVR × LTV" }
    ],
    calculate: (inputs) => ({ crv: (inputs.referrals || 0) * ((inputs.cvr || 0) / 100) * (inputs.ltv || 0) })
  },
  {
    id: "retargeting-roi-calculator",
    name: "Retargeting ROI Calculator",
    description: "Measure the return on investment of remarketing campaigns.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Retargeting Spend ($)", type: "number", defaultValue: 800, placeholder: "800" },
      { id: "revenue", name: "Retargeting Revenue ($)", type: "number", defaultValue: 4200, placeholder: "4200" }
    ],
    outputs: [
      { id: "roi", name: "Retargeting ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const spend = inputs.spend || 0;
      return { roi: spend > 0 ? (((inputs.revenue || 0) - spend) / spend) * 100 : 0 };
    }
  },
  {
    id: "ad-placement-roi-calculator",
    name: "Ad Placement ROI Calculator",
    description: "Compare ROI of a specific ad placement (e.g., billboard, newsletter).",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "cost", name: "Placement Cost ($)", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "leads", name: "Attributed Leads", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "leadValue", name: "Value per Lead ($)", type: "number", defaultValue: 40, placeholder: "40" }
    ],
    outputs: [
      { id: "revenue", name: "Attributed Revenue ($)", type: "number", formatter: "currency" },
      { id: "roi", name: "Placement ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Cost) / Cost) × 100" }
    ],
    calculate: (inputs) => {
      const cost = inputs.cost || 0;
      const rev = (inputs.leads || 0) * (inputs.leadValue || 0);
      return { revenue: rev, roi: cost > 0 ? ((rev - cost) / cost) * 100 : 0 };
    }
  },
  {
    id: "sales-commission-calculator",
    name: "Sales Commission Calculator",
    description: "Calculate sales commission payouts and impact on margins.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "revenue", name: "Total Sales Revenue ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "rate", name: "Commission Rate (%)", type: "number", defaultValue: 8, placeholder: "8" }
    ],
    outputs: [
      { id: "payout", name: "Total Commission Payout ($)", type: "number", formatter: "currency", formula: "Revenue × Rate" },
      { id: "net", name: "Net Revenue Post-Commission ($)", type: "number", formatter: "currency" }
    ],
    calculate: (inputs) => {
      const rev = inputs.revenue || 0;
      const payout = rev * ((inputs.rate || 0) / 100);
      return { payout, net: rev - payout };
    }
  },
  {
    id: "marketing-efficiency-ratio-calculator",
    name: "Marketing Efficiency Ratio Calculator",
    description: "Calculate MER (Total Sales / Total Ad Spend).",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "sales", name: "Total Business Sales ($)", type: "number", defaultValue: 100000, placeholder: "100000" },
      { id: "spend", name: "Total Marketing Spend ($)", type: "number", defaultValue: 15000, placeholder: "15000" }
    ],
    outputs: [
      { id: "mer", name: "MER (x)", type: "number", formatter: "number", formula: "Total Sales / Total Spend" }
    ],
    calculate: (inputs) => ({ mer: inputs.spend > 0 ? (inputs.sales || 0) / inputs.spend : 0 })
  },
  {
    id: "geo-targeting-roi-calculator",
    name: "Geo-targeting ROI Calculator",
    description: "Analyze the return of location-based marketing campaigns.",
    category: "Marketing",
    subcategory: "ROI & Profitability",
    inputs: [
      { id: "spend", name: "Geo-Campaign Spend ($)", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "revenue", name: "Geo-Campaign Revenue ($)", type: "number", defaultValue: 8500, placeholder: "8500" }
    ],
    outputs: [
      { id: "roi", name: "Geo-ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Spend) / Spend) × 100" }
    ],
    calculate: (inputs) => {
      const spend = inputs.spend || 0;
      return { roi: spend > 0 ? (((inputs.revenue || 0) - spend) / spend) * 100 : 0 };
    }
  }
];
