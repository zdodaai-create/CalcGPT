import { CalculatorConfig } from "./calculator-types";

export const ECOMMERCE_CALCULATORS_A: CalculatorConfig[] = [
  // PRICING & PROFIT
  {
    id: "product-profit-calculator",
    name: "Product Profit Calculator",
    description: "Calculate net profit per product after cost and expenses.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "revenue", name: "Selling Price ($)", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "cogs", name: "Cost of Goods ($)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "fees", name: "Platform/Shipping Fees ($)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "profit", name: "Net Profit ($)", type: "number", formatter: "currency", formula: "Selling Price - COGS - Fees" },
      { id: "margin", name: "Profit Margin (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const profit = (inputs.revenue || 0) - (inputs.cogs || 0) - (inputs.fees || 0);
      return { profit, margin: inputs.revenue > 0 ? (profit / inputs.revenue) * 100 : 0 };
    }
  },
  {
    id: "product-margin-calculator",
    name: "Product Margin Calculator",
    description: "Calculate gross margin percentage for any product.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "price", name: "Selling Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "cost", name: "Cost Price ($)", type: "number", defaultValue: 60, placeholder: "60" },
    ],
    outputs: [
      { id: "margin", name: "Gross Margin (%)", type: "number", formatter: "percentage", formula: "((Price - Cost) / Price) × 100" },
      { id: "markup", name: "Markup (%)", type: "number", formatter: "percentage", formula: "((Price - Cost) / Cost) × 100" },
    ],
    calculate: (inputs) => {
      const p = inputs.price || 0, c = inputs.cost || 0;
      return {
        margin: p > 0 ? ((p - c) / p) * 100 : 0,
        markup: c > 0 ? ((p - c) / c) * 100 : 0,
      };
    }
  },
  {
    id: "product-pricing-calculator",
    name: "Product Pricing Calculator",
    description: "Calculate ideal selling price based on cost and target margin.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "cost", name: "Cost Price ($)", type: "number", defaultValue: 30, placeholder: "30" },
      { id: "margin", name: "Target Profit Margin (%)", type: "number", defaultValue: 40, placeholder: "40" },
    ],
    outputs: [
      { id: "price", name: "Recommended Selling Price ($)", type: "number", formatter: "currency", formula: "Cost / (1 - Margin/100)" },
    ],
    calculate: (inputs) => {
      const m = (inputs.margin || 0) / 100;
      return { price: m < 1 ? (inputs.cost || 0) / (1 - m) : 0 };
    }
  },
  {
    id: "product-discount-calculator",
    name: "Product Discount Calculator",
    description: "Calculate sale price and savings after applying a discount.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "original", name: "Original Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "discount", name: "Discount (%)", type: "number", defaultValue: 20, placeholder: "20" },
    ],
    outputs: [
      { id: "salePrice", name: "Sale Price ($)", type: "number", formatter: "currency" },
      { id: "savings", name: "You Save ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const savings = (inputs.original || 0) * ((inputs.discount || 0) / 100);
      return { salePrice: (inputs.original || 0) - savings, savings };
    }
  },
  {
    id: "coupon-savings-calculator",
    name: "Coupon Savings Calculator",
    description: "Calculate final price after applying a coupon or promo code.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "cartTotal", name: "Cart Total ($)", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "couponPct", name: "Coupon Discount (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "flatOff", name: "Flat Discount ($)", type: "number", defaultValue: 0, placeholder: "0" },
    ],
    outputs: [
      { id: "finalPrice", name: "Final Price ($)", type: "number", formatter: "currency" },
      { id: "totalSaved", name: "Total Saved ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const pctSave = (inputs.cartTotal || 0) * ((inputs.couponPct || 0) / 100);
      const totalSaved = pctSave + (inputs.flatOff || 0);
      return { finalPrice: Math.max(0, (inputs.cartTotal || 0) - totalSaved), totalSaved };
    }
  },
  {
    id: "seller-profit-margin-calculator",
    name: "Seller Profit Margin Calculator",
    description: "Net margin for marketplace sellers after all fees.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "sellingPrice", name: "Selling Price ($)", type: "number", defaultValue: 80, placeholder: "80" },
      { id: "productCost", name: "Product Cost ($)", type: "number", defaultValue: 30, placeholder: "30" },
      { id: "marketplaceFee", name: "Marketplace Fee (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "shipping", name: "Shipping Cost ($)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "netProfit", name: "Net Profit ($)", type: "number", formatter: "currency" },
      { id: "margin", name: "Net Margin (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const feeCost = (inputs.sellingPrice || 0) * ((inputs.marketplaceFee || 0) / 100);
      const netProfit = (inputs.sellingPrice || 0) - (inputs.productCost || 0) - feeCost - (inputs.shipping || 0);
      return { netProfit, margin: inputs.sellingPrice > 0 ? (netProfit / inputs.sellingPrice) * 100 : 0 };
    }
  },
  {
    id: "dropshipping-profit-calculator",
    name: "Dropshipping Profit Calculator",
    description: "Calculate profit for dropshipping orders.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "salePrice", name: "Sale Price ($)", type: "number", defaultValue: 60, placeholder: "60" },
      { id: "supplierCost", name: "Supplier Cost ($)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "adSpend", name: "Ad Spend per Sale ($)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "platformFee", name: "Platform Fee (%)", type: "number", defaultValue: 3, placeholder: "3" },
    ],
    outputs: [
      { id: "profit", name: "Profit per Order ($)", type: "number", formatter: "currency" },
      { id: "roi", name: "ROI (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const fees = (inputs.salePrice || 0) * ((inputs.platformFee || 0) / 100);
      const totalCost = (inputs.supplierCost || 0) + (inputs.adSpend || 0) + fees;
      const profit = (inputs.salePrice || 0) - totalCost;
      return { profit, roi: totalCost > 0 ? (profit / totalCost) * 100 : 0 };
    }
  },
  {
    id: "dynamic-pricing-calculator",
    name: "Dynamic Pricing Calculator",
    description: "Adjust price based on demand index.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "basePrice", name: "Base Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "demandIndex", name: "Demand Index (1 = normal, 2 = high)", type: "number", defaultValue: 1.3, placeholder: "1.3" },
    ],
    outputs: [
      { id: "dynamicPrice", name: "Dynamic Price ($)", type: "number", formatter: "currency", formula: "Base Price × Demand Index" },
    ],
    calculate: (inputs) => ({ dynamicPrice: (inputs.basePrice || 0) * (inputs.demandIndex || 1) })
  },
  {
    id: "flash-sale-profit-calculator",
    name: "Flash Sale Profit Calculator",
    description: "Calculate profits from a flash sale event.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "units", name: "Units Sold", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "salePrice", name: "Flash Sale Price ($)", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "cogs", name: "Cost per Unit ($)", type: "number", defaultValue: 18, placeholder: "18" },
    ],
    outputs: [
      { id: "totalRevenue", name: "Total Revenue ($)", type: "number", formatter: "currency" },
      { id: "totalProfit", name: "Total Profit ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const totalRevenue = (inputs.units || 0) * (inputs.salePrice || 0);
      const totalProfit = (inputs.units || 0) * ((inputs.salePrice || 0) - (inputs.cogs || 0));
      return { totalRevenue, totalProfit };
    }
  },
  {
    id: "product-bundle-savings-calculator",
    name: "Product Bundle Savings Calculator",
    description: "Calculate savings when buying a product bundle vs individually.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "individualTotal", name: "Sum of Individual Prices ($)", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "bundlePrice", name: "Bundle Price ($)", type: "number", defaultValue: 90, placeholder: "90" },
    ],
    outputs: [
      { id: "savings", name: "Bundle Savings ($)", type: "number", formatter: "currency" },
      { id: "savingsPct", name: "Savings (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const savings = (inputs.individualTotal || 0) - (inputs.bundlePrice || 0);
      return { savings, savingsPct: inputs.individualTotal > 0 ? (savings / inputs.individualTotal) * 100 : 0 };
    }
  },

  // REVENUE & GROWTH
  {
    id: "ecommerce-revenue-calculator",
    name: "Ecommerce Revenue Calculator",
    description: "Calculate total revenue from orders and average order value.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 75, placeholder: "75" },
    ],
    outputs: [
      { id: "revenue", name: "Total Revenue ($)", type: "number", formatter: "currency", formula: "Orders × AOV" },
    ],
    calculate: (inputs) => ({ revenue: (inputs.orders || 0) * (inputs.aov || 0) })
  },
  {
    id: "ecommerce-roi-calculator",
    name: "Ecommerce ROI Calculator",
    description: "Calculate return on investment for your ecommerce business.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "revenue", name: "Total Revenue ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "totalCost", name: "Total Cost ($)", type: "number", defaultValue: 30000, placeholder: "30000" },
    ],
    outputs: [
      { id: "roi", name: "ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Cost) / Cost) × 100" },
      { id: "netProfit", name: "Net Profit ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const netProfit = (inputs.revenue || 0) - (inputs.totalCost || 0);
      return { roi: inputs.totalCost > 0 ? (netProfit / inputs.totalCost) * 100 : 0, netProfit };
    }
  },
  {
    id: "ecommerce-sales-forecast-calculator",
    name: "Sales Forecast Calculator",
    description: "Forecast future sales based on growth rate.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "currentSales", name: "Current Monthly Sales ($)", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "growthRate", name: "Monthly Growth Rate (%)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "months", name: "Months to Forecast", type: "number", defaultValue: 6, placeholder: "6" },
    ],
    outputs: [
      { id: "forecast", name: "Forecasted Sales ($)", type: "number", formatter: "currency", formula: "Sales × (1 + Growth)^Months" },
    ],
    calculate: (inputs) => ({
      forecast: (inputs.currentSales || 0) * Math.pow(1 + (inputs.growthRate || 0) / 100, inputs.months || 0)
    })
  },
  {
    id: "ecommerce-growth-calculator",
    name: "Ecommerce Growth Calculator",
    description: "Calculate revenue growth rate between two periods.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "prevRevenue", name: "Previous Period Revenue ($)", type: "number", defaultValue: 40000, placeholder: "40000" },
      { id: "currentRevenue", name: "Current Period Revenue ($)", type: "number", defaultValue: 55000, placeholder: "55000" },
    ],
    outputs: [
      { id: "growth", name: "Revenue Growth (%)", type: "number", formatter: "percentage", formula: "((Current - Previous) / Previous) × 100" },
    ],
    calculate: (inputs) => ({
      growth: inputs.prevRevenue > 0 ? (((inputs.currentRevenue || 0) - (inputs.prevRevenue || 0)) / inputs.prevRevenue) * 100 : 0
    })
  },
  {
    id: "ecommerce-subscription-revenue-calculator",
    name: "Subscription Revenue Calculator",
    description: "Calculate Monthly Recurring Revenue (MRR) from subscribers.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "subscribers", name: "Active Subscribers", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "planPrice", name: "Plan Price ($/month)", type: "number", defaultValue: 29, placeholder: "29" },
    ],
    outputs: [
      { id: "mrr", name: "MRR ($)", type: "number", formatter: "currency", formula: "Subscribers × Plan Price" },
      { id: "arr", name: "ARR ($)", type: "number", formatter: "currency", formula: "MRR × 12" },
    ],
    calculate: (inputs) => {
      const mrr = (inputs.subscribers || 0) * (inputs.planPrice || 0);
      return { mrr, arr: mrr * 12 };
    }
  },
  {
    id: "cross-sell-revenue-calculator",
    name: "Cross-sell Revenue Calculator",
    description: "Calculate additional revenue generated from cross-selling.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "crossSellRate", name: "Cross-sell Rate (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "crossSellValue", name: "Avg Cross-sell Value ($)", type: "number", defaultValue: 25, placeholder: "25" },
    ],
    outputs: [
      { id: "revenue", name: "Cross-sell Revenue ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({
      revenue: (inputs.orders || 0) * ((inputs.crossSellRate || 0) / 100) * (inputs.crossSellValue || 0)
    })
  },
  {
    id: "upsell-revenue-calculator",
    name: "Upsell Revenue Calculator",
    description: "Calculate additional revenue from upselling to existing customers.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 2000, placeholder: "2000" },
      { id: "upsellRate", name: "Upsell Acceptance Rate (%)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "upsellValue", name: "Avg Upsell Value ($)", type: "number", defaultValue: 40, placeholder: "40" },
    ],
    outputs: [
      { id: "revenue", name: "Upsell Revenue ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({
      revenue: (inputs.orders || 0) * ((inputs.upsellRate || 0) / 100) * (inputs.upsellValue || 0)
    })
  },
  {
    id: "marketplace-roi-calculator",
    name: "Marketplace ROI Calculator",
    description: "Calculate ROI from selling on marketplaces like Amazon or Shopify.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "revenue", name: "Marketplace Revenue ($)", type: "number", defaultValue: 30000, placeholder: "30000" },
      { id: "invest", name: "Total Investment ($)", type: "number", defaultValue: 12000, placeholder: "12000" },
    ],
    outputs: [
      { id: "roi", name: "Marketplace ROI (%)", type: "number", formatter: "percentage", formula: "((Revenue - Investment) / Investment) × 100" },
    ],
    calculate: (inputs) => ({
      roi: inputs.invest > 0 ? (((inputs.revenue || 0) - (inputs.invest || 0)) / inputs.invest) * 100 : 0
    })
  },
  {
    id: "ecommerce-affiliate-earnings-calculator",
    name: "Affiliate Earnings Calculator",
    description: "Calculate affiliate commissions from referred sales.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "sales", name: "Referred Sales ($)", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "commissionRate", name: "Commission Rate (%)", type: "number", defaultValue: 10, placeholder: "10" },
    ],
    outputs: [
      { id: "earnings", name: "Affiliate Earnings ($)", type: "number", formatter: "currency", formula: "Sales × Commission Rate" },
    ],
    calculate: (inputs) => ({
      earnings: (inputs.sales || 0) * ((inputs.commissionRate || 0) / 100)
    })
  },
  {
    id: "ecommerce-kpi-calculator",
    name: "Ecommerce KPI Calculator",
    description: "Get a snapshot of key ecommerce performance indicators.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "revenue", name: "Revenue ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "orders", name: "Orders", type: "number", defaultValue: 800, placeholder: "800" },
      { id: "customers", name: "Customers", type: "number", defaultValue: 600, placeholder: "600" },
      { id: "cogs", name: "COGS ($)", type: "number", defaultValue: 25000, placeholder: "25000" },
    ],
    outputs: [
      { id: "aov", name: "Average Order Value ($)", type: "number", formatter: "currency" },
      { id: "grossMargin", name: "Gross Margin (%)", type: "number", formatter: "percentage" },
      { id: "ordersPerCustomer", name: "Orders per Customer", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => ({
      aov: inputs.orders > 0 ? (inputs.revenue || 0) / inputs.orders : 0,
      grossMargin: inputs.revenue > 0 ? (((inputs.revenue || 0) - (inputs.cogs || 0)) / inputs.revenue) * 100 : 0,
      ordersPerCustomer: inputs.customers > 0 ? (inputs.orders || 0) / inputs.customers : 0,
    })
  },
];
