import { Megaphone, Target, DollarSign, Users, TrendingUp } from 'lucide-react';

export const MARKETING_DATA = [
  {
    id: 'advertising',
    name: 'Advertising & Media',
    description: 'Calculate metrics for ad spend, CPM, CPC, reach, and influencer campaigns.',
    icon: Megaphone,
    color: 'bg-red-500',
    calculators: [
      { name: 'Ad Impression Calculator', slug: 'ad-impression-calculator' },
      { name: 'Ad Spend Calculator', slug: 'ad-spend-calculator' },
      { name: 'Campaign Reach Calculator', slug: 'campaign-reach-calculator' },
      { name: 'CPC Calculator', slug: 'cpc-calculator' },
      { name: 'CPM Calculator', slug: 'cpm-calculator' },
      { name: 'CPM vs CPC Comparison Calculator', slug: 'cpm-vs-cpc-calculator' },
      { name: 'CTR Calculator', slug: 'ctr-calculator' },
      { name: 'Influencer Engagement Rate Calculator', slug: 'influencer-engagement-rate-calculator' },
      { name: 'Influencer ROI Calculator', slug: 'influencer-roi-calculator' },
      { name: 'Return on Ad Spend (ROAS) Calculator', slug: 'return-on-ad-spend-calculator' }
    ]
  },
  {
    id: 'conversion',
    name: 'Conversion & Funnel',
    description: 'Analyze landing pages, emails, bounce rates, and funnel drop-offs.',
    icon: Target,
    color: 'bg-orange-500',
    calculators: [
      { name: 'Bounce Rate Calculator', slug: 'bounce-rate-calculator' },
      { name: 'Cart Abandonment Calculator', slug: 'cart-abandonment-calculator' },
      { name: 'Conversion Rate Calculator', slug: 'conversion-rate-calculator' },
      { name: 'Email Click Rate Calculator', slug: 'email-click-rate-calculator' },
      { name: 'Email Open Rate Calculator', slug: 'email-open-rate-calculator' },
      { name: 'Funnel Conversion Calculator', slug: 'funnel-conversion-calculator' },
      { name: 'Landing Page Performance Calculator', slug: 'landing-page-performance-calculator' },
      { name: 'Lead Conversion Calculator', slug: 'lead-conversion-calculator' },
      { name: 'Product Demand Forecast Calculator', slug: 'product-demand-forecast-calculator' },
      { name: 'Revenue Per Visitor Calculator', slug: 'revenue-per-visitor-calculator' }
    ]
  },
  {
    id: 'roi',
    name: 'ROI & Profitability',
    description: 'Measure bottom-line impact, break-even points, and sales growth.',
    icon: DollarSign,
    color: 'bg-green-600',
    calculators: [
      { name: 'Affiliate Commission Calculator', slug: 'affiliate-commission-calculator' },
      { name: 'Break-even Analysis Calculator', slug: 'break-even-analysis-calculator' },
      { name: 'Marketing Budget Calculator', slug: 'marketing-budget-calculator' },
      { name: 'Payback Period Calculator', slug: 'payback-period-calculator' },
      { name: 'Profit Margin Calculator', slug: 'profit-margin-calculator' },
      { name: 'Revenue Forecast Calculator', slug: 'revenue-forecast-calculator' },
      { name: 'ROI Calculator', slug: 'roi-calculator' },
      { name: 'Sales Growth Calculator', slug: 'sales-growth-calculator' },
      { name: 'Sales Tax Calculator', slug: 'sales-tax-calculator' },
      { name: 'SEO ROI Calculator', slug: 'seo-roi-calculator' },
      { name: 'Event ROI Calculator', slug: 'event-roi-calculator' }
    ]
  },
  {
    id: 'customer',
    name: 'Customer Metrics',
    description: 'Track churn, retention, NPS, CSAT, and acquisition costs.',
    icon: Users,
    color: 'bg-blue-600',
    calculators: [
      { name: 'Audience Growth Calculator', slug: 'audience-growth-calculator' },
      { name: 'Brand Awareness Calculator', slug: 'brand-awareness-calculator' },
      { name: 'Churn Rate Calculator', slug: 'churn-rate-calculator' },
      { name: 'CSAT Score Calculator', slug: 'csat-calculator' },
      { name: 'Customer Acquisition Cost (CAC) Calculator', slug: 'cac-calculator' },
      { name: 'Customer Lifetime Value (CLV) Calculator', slug: 'clv-calculator' },
      { name: 'Net Promoter Score (NPS) Calculator', slug: 'nps-calculator' },
      { name: 'Referral Rate Calculator', slug: 'referral-rate-calculator' },
      { name: 'Retention Rate Calculator', slug: 'retention-rate-calculator' },
      { name: 'Social Media Engagement Calculator', slug: 'social-media-engagement-calculator' }
    ]
  },
  {
    id: 'strategy',
    name: 'Strategy & Growth',
    description: 'Calculate ARR, MRR, market share, and pricing strategies.',
    icon: TrendingUp,
    color: 'bg-purple-600',
    calculators: [
      { name: 'ARR Calculator', slug: 'arr-calculator' },
      { name: 'Average Order Value (AOV) Calculator', slug: 'aov-calculator' },
      { name: 'Discount Percentage Calculator', slug: 'discount-percentage-calculator' },
      { name: 'Keyword Density Calculator', slug: 'keyword-density-calculator' },
      { name: 'Market Share Calculator', slug: 'market-share-calculator' },
      { name: 'Pricing Strategy Calculator', slug: 'pricing-strategy-calculator' },
      { name: 'SaaS MRR Calculator', slug: 'saas-mrr-calculator' },
      { name: 'Subscription Revenue Calculator', slug: 'subscription-revenue-calculator' },
      { name: 'Viral Coefficient Calculator', slug: 'viral-coefficient-calculator' }
    ]
  }
];
