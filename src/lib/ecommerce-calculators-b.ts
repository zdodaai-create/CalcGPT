import { CalculatorConfig } from "./calculator-types";

export const ECOMMERCE_CALCULATORS_B: CalculatorConfig[] = [
  // CART & ORDERS
  {
    id: "shopping-cart-abandonment-calculator",
    name: "Shopping Cart Abandonment Calculator",
    description: "Calculate cart abandonment rate and revenue lost.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "initiated", name: "Carts Initiated", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "completed", name: "Completed Purchases", type: "number", defaultValue: 1500, placeholder: "1500" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 75, placeholder: "75" },
    ],
    outputs: [
      { id: "abandonRate", name: "Abandonment Rate (%)", type: "number", formatter: "percentage" },
      { id: "revenueLost", name: "Revenue Lost ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const abandoned = (inputs.initiated || 0) - (inputs.completed || 0);
      return {
        abandonRate: inputs.initiated > 0 ? (abandoned / inputs.initiated) * 100 : 0,
        revenueLost: abandoned * (inputs.aov || 0),
      };
    }
  },
  {
    id: "ecommerce-aov-calculator",
    name: "Average Order Value Calculator",
    description: "Calculate the average value of each customer order.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "revenue", name: "Total Revenue ($)", type: "number", defaultValue: 120000, placeholder: "120000" },
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 2000, placeholder: "2000" },
    ],
    outputs: [
      { id: "aov", name: "Average Order Value ($)", type: "number", formatter: "currency", formula: "Revenue / Orders" },
    ],
    calculate: (inputs) => ({ aov: inputs.orders > 0 ? (inputs.revenue || 0) / inputs.orders : 0 })
  },
  {
    id: "order-fulfillment-calculator",
    name: "Order Fulfillment Calculator",
    description: "Calculate fulfillment rate and unfulfilled orders.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "totalOrders", name: "Total Orders", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "fulfilled", name: "Fulfilled Orders", type: "number", defaultValue: 950, placeholder: "950" },
    ],
    outputs: [
      { id: "rate", name: "Fulfillment Rate (%)", type: "number", formatter: "percentage" },
      { id: "unfulfilled", name: "Unfulfilled Orders", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => ({
      rate: inputs.totalOrders > 0 ? ((inputs.fulfilled || 0) / inputs.totalOrders) * 100 : 0,
      unfulfilled: (inputs.totalOrders || 0) - (inputs.fulfilled || 0),
    })
  },
  {
    id: "ecommerce-break-even-calculator",
    name: "Ecommerce Break-even Calculator",
    description: "Calculate units needed to break even on your ecommerce store.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "fixedCosts", name: "Fixed Costs ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "salePrice", name: "Sale Price per Unit ($)", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "varCost", name: "Variable Cost per Unit ($)", type: "number", defaultValue: 20, placeholder: "20" },
    ],
    outputs: [
      { id: "breakEvenUnits", name: "Break-even Units", type: "number", formatter: "number" },
      { id: "breakEvenRevenue", name: "Break-even Revenue ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const contrib = (inputs.salePrice || 0) - (inputs.varCost || 0);
      const units = contrib > 0 ? Math.ceil((inputs.fixedCosts || 0) / contrib) : 0;
      return { breakEvenUnits: units, breakEvenRevenue: units * (inputs.salePrice || 0) };
    }
  },
  {
    id: "cost-per-purchase-calculator",
    name: "Cost Per Purchase Calculator",
    description: "Calculate total cost to acquire one purchase.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "totalSpend", name: "Total Ad + Marketing Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "purchases", name: "Total Purchases", type: "number", defaultValue: 200, placeholder: "200" },
    ],
    outputs: [
      { id: "cpp", name: "Cost Per Purchase ($)", type: "number", formatter: "currency", formula: "Spend / Purchases" },
    ],
    calculate: (inputs) => ({ cpp: inputs.purchases > 0 ? (inputs.totalSpend || 0) / inputs.purchases : 0 })
  },
  {
    id: "ecommerce-tax-calculator",
    name: "Ecommerce Tax Calculator",
    description: "Calculate total amount including sales tax.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "orderValue", name: "Order Value ($)", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "taxRate", name: "Tax Rate (%)", type: "number", defaultValue: 8, placeholder: "8" },
    ],
    outputs: [
      { id: "tax", name: "Tax Amount ($)", type: "number", formatter: "currency" },
      { id: "total", name: "Total with Tax ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const tax = (inputs.orderValue || 0) * ((inputs.taxRate || 0) / 100);
      return { tax, total: (inputs.orderValue || 0) + tax };
    }
  },
  {
    id: "gst-ecommerce-calculator",
    name: "GST Ecommerce Calculator",
    description: "Calculate GST amount for ecommerce orders.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "orderValue", name: "Order Value ($)", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "gstRate", name: "GST Rate (%)", type: "number", defaultValue: 18, placeholder: "18" },
    ],
    outputs: [
      { id: "gst", name: "GST Amount ($)", type: "number", formatter: "currency" },
      { id: "totalWithGST", name: "Total with GST ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const gst = (inputs.orderValue || 0) * ((inputs.gstRate || 0) / 100);
      return { gst, totalWithGST: (inputs.orderValue || 0) + gst };
    }
  },
  {
    id: "cod-charges-calculator",
    name: "COD Charges Calculator",
    description: "Calculate Cash on Delivery charges for an order.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "orderValue", name: "Order Value ($)", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "codPct", name: "COD Fee (%)", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "flatFee", name: "Flat COD Fee ($)", type: "number", defaultValue: 1.5, placeholder: "1.5" },
    ],
    outputs: [
      { id: "codCharge", name: "COD Charge ($)", type: "number", formatter: "currency" },
      { id: "totalPayable", name: "Total Payable ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const codCharge = (inputs.orderValue || 0) * ((inputs.codPct || 0) / 100) + (inputs.flatFee || 0);
      return { codCharge, totalPayable: (inputs.orderValue || 0) + codCharge };
    }
  },
  {
    id: "ecommerce-shipping-cost-calculator",
    name: "Shipping Cost Calculator",
    description: "Estimate shipping cost based on weight and rate.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "weight", name: "Package Weight (kg)", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "ratePerKg", name: "Rate per kg ($)", type: "number", defaultValue: 3.5, placeholder: "3.5" },
      { id: "baseFee", name: "Base Handling Fee ($)", type: "number", defaultValue: 2, placeholder: "2" },
    ],
    outputs: [
      { id: "shippingCost", name: "Shipping Cost ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({
      shippingCost: (inputs.weight || 0) * (inputs.ratePerKg || 0) + (inputs.baseFee || 0)
    })
  },
  {
    id: "shipping-profit-calculator",
    name: "Shipping Profit Calculator",
    description: "Calculate profit or loss from shipping charges.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "chargedToCustomer", name: "Shipping Charged to Customer ($)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "actualShippingCost", name: "Actual Shipping Cost ($)", type: "number", defaultValue: 7.5, placeholder: "7.5" },
    ],
    outputs: [
      { id: "shippingProfit", name: "Shipping Profit ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({
      shippingProfit: (inputs.chargedToCustomer || 0) - (inputs.actualShippingCost || 0)
    })
  },

  // INVENTORY & SUPPLY
  {
    id: "ecommerce-inventory-turnover-calculator",
    name: "Inventory Turnover Calculator",
    description: "Calculate how many times inventory is sold and replaced.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "cogs", name: "Cost of Goods Sold ($)", type: "number", defaultValue: 80000, placeholder: "80000" },
      { id: "avgInventory", name: "Average Inventory Value ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
    ],
    outputs: [
      { id: "turnover", name: "Inventory Turnover Ratio", type: "number", formatter: "number", formula: "COGS / Avg Inventory" },
    ],
    calculate: (inputs) => ({ turnover: inputs.avgInventory > 0 ? (inputs.cogs || 0) / inputs.avgInventory : 0 })
  },
  {
    id: "product-stock-calculator",
    name: "Product Stock Calculator",
    description: "Calculate remaining stock and days of inventory left.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "currentStock", name: "Current Stock (units)", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "dailySales", name: "Avg Daily Sales (units)", type: "number", defaultValue: 20, placeholder: "20" },
    ],
    outputs: [
      { id: "daysLeft", name: "Days of Stock Remaining", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => ({ daysLeft: inputs.dailySales > 0 ? Math.floor((inputs.currentStock || 0) / inputs.dailySales) : 0 })
  },
  {
    id: "restock-prediction-calculator",
    name: "Restock Prediction Calculator",
    description: "Predict when to reorder stock based on lead time.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "currentStock", name: "Current Stock (units)", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "dailySales", name: "Daily Sales Rate (units)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "leadTime", name: "Supplier Lead Time (days)", type: "number", defaultValue: 7, placeholder: "7" },
      { id: "safetyStock", name: "Safety Stock (units)", type: "number", defaultValue: 50, placeholder: "50" },
    ],
    outputs: [
      { id: "reorderPoint", name: "Reorder Point (units)", type: "number", formatter: "number" },
      { id: "daysToReorder", name: "Days Until Reorder Needed", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const reorderPoint = (inputs.dailySales || 0) * (inputs.leadTime || 0) + (inputs.safetyStock || 0);
      const daysToReorder = inputs.dailySales > 0 ? Math.max(0, Math.floor(((inputs.currentStock || 0) - reorderPoint) / inputs.dailySales)) : 0;
      return { reorderPoint, daysToReorder };
    }
  },
  {
    id: "warehouse-cost-calculator",
    name: "Warehouse Cost Calculator",
    description: "Calculate monthly warehouse storage cost per unit.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "monthlyRent", name: "Monthly Warehouse Rent ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "unitsStored", name: "Units Stored", type: "number", defaultValue: 2000, placeholder: "2000" },
    ],
    outputs: [
      { id: "costPerUnit", name: "Cost per Unit Stored ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({ costPerUnit: inputs.unitsStored > 0 ? (inputs.monthlyRent || 0) / inputs.unitsStored : 0 })
  },
  {
    id: "delivery-time-calculator",
    name: "Delivery Time Calculator",
    description: "Estimate total delivery time including processing.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "processingDays", name: "Order Processing Time (days)", type: "number", defaultValue: 1, placeholder: "1" },
      { id: "shippingDays", name: "Shipping Transit Time (days)", type: "number", defaultValue: 3, placeholder: "3" },
    ],
    outputs: [
      { id: "totalDays", name: "Total Delivery Time (days)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => ({ totalDays: (inputs.processingDays || 0) + (inputs.shippingDays || 0) })
  },
  {
    id: "marketplace-fee-calculator",
    name: "Marketplace Fee Calculator",
    description: "Calculate total fees on a marketplace like Amazon or eBay.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "salePrice", name: "Item Sale Price ($)", type: "number", defaultValue: 100, placeholder: "100" },
      { id: "referralFee", name: "Referral Fee (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "fbaFee", name: "Fulfillment Fee ($)", type: "number", defaultValue: 4, placeholder: "4" },
    ],
    outputs: [
      { id: "totalFee", name: "Total Marketplace Fee ($)", type: "number", formatter: "currency" },
      { id: "netPayout", name: "Net Payout ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const referral = (inputs.salePrice || 0) * ((inputs.referralFee || 0) / 100);
      const totalFee = referral + (inputs.fbaFee || 0);
      return { totalFee, netPayout: (inputs.salePrice || 0) - totalFee };
    }
  },
  {
    id: "multi-vendor-commission-calculator",
    name: "Multi-Vendor Commission Calculator",
    description: "Calculate commission for marketplace vendors.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "vendorSales", name: "Vendor Sales ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "commissionRate", name: "Commission Rate (%)", type: "number", defaultValue: 12, placeholder: "12" },
    ],
    outputs: [
      { id: "commission", name: "Platform Commission ($)", type: "number", formatter: "currency" },
      { id: "vendorPayout", name: "Vendor Payout ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const commission = (inputs.vendorSales || 0) * ((inputs.commissionRate || 0) / 100);
      return { commission, vendorPayout: (inputs.vendorSales || 0) - commission };
    }
  },
  {
    id: "ecommerce-commission-calculator",
    name: "Ecommerce Commission Calculator",
    description: "Calculate sales commission for ecommerce agents or reps.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "sales", name: "Total Sales ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
      { id: "rate", name: "Commission Rate (%)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "commission", name: "Commission Earned ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({ commission: (inputs.sales || 0) * ((inputs.rate || 0) / 100) })
  },
  {
    id: "ecommerce-return-rate-calculator",
    name: "Return Rate Calculator",
    description: "Calculate percentage of orders that are returned.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "returns", name: "Total Returns", type: "number", defaultValue: 80, placeholder: "80" },
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 1000, placeholder: "1000" },
    ],
    outputs: [
      { id: "returnRate", name: "Return Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => ({ returnRate: inputs.orders > 0 ? ((inputs.returns || 0) / inputs.orders) * 100 : 0 })
  },
  {
    id: "refund-loss-calculator",
    name: "Refund Loss Calculator",
    description: "Calculate total revenue lost due to refunds.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "refunds", name: "Number of Refunds", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "avgRefund", name: "Average Refund Amount ($)", type: "number", defaultValue: 60, placeholder: "60" },
    ],
    outputs: [
      { id: "totalLoss", name: "Total Refund Loss ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({ totalLoss: (inputs.refunds || 0) * (inputs.avgRefund || 0) })
  },

  // CUSTOMER & RETENTION
  {
    id: "ecommerce-clv-calculator",
    name: "Customer Lifetime Value Calculator",
    description: "Estimate the total value a customer brings over their lifetime.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 75, placeholder: "75" },
      { id: "frequency", name: "Purchase Frequency (per year)", type: "number", defaultValue: 4, placeholder: "4" },
      { id: "lifespan", name: "Customer Lifespan (years)", type: "number", defaultValue: 3, placeholder: "3" },
    ],
    outputs: [
      { id: "clv", name: "Customer Lifetime Value ($)", type: "number", formatter: "currency", formula: "AOV × Frequency × Lifespan" },
    ],
    calculate: (inputs) => ({ clv: (inputs.aov || 0) * (inputs.frequency || 0) * (inputs.lifespan || 0) })
  },
  {
    id: "ecommerce-customer-retention-calculator",
    name: "Customer Retention Calculator",
    description: "Calculate customer retention rate over a period.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "startCustomers", name: "Customers at Start", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "endCustomers", name: "Customers at End", type: "number", defaultValue: 480, placeholder: "480" },
      { id: "newCustomers", name: "New Customers Acquired", type: "number", defaultValue: 80, placeholder: "80" },
    ],
    outputs: [
      { id: "retentionRate", name: "Retention Rate (%)", type: "number", formatter: "percentage", formula: "((End - New) / Start) × 100" },
    ],
    calculate: (inputs) => ({
      retentionRate: inputs.startCustomers > 0
        ? (((inputs.endCustomers || 0) - (inputs.newCustomers || 0)) / inputs.startCustomers) * 100
        : 0
    })
  },
  {
    id: "visitor-to-customer-calculator",
    name: "Visitor-to-Customer Calculator",
    description: "Calculate the rate visitors become paying customers.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "visitors", name: "Total Website Visitors", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "customers", name: "Paying Customers", type: "number", defaultValue: 1000, placeholder: "1000" },
    ],
    outputs: [
      { id: "rate", name: "Visitor-to-Customer Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => ({ rate: inputs.visitors > 0 ? ((inputs.customers || 0) / inputs.visitors) * 100 : 0 })
  },
  {
    id: "product-rating-calculator",
    name: "Product Rating Calculator",
    description: "Calculate weighted average product rating.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "five", name: "5-Star Reviews", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "four", name: "4-Star Reviews", type: "number", defaultValue: 80, placeholder: "80" },
      { id: "three", name: "3-Star Reviews", type: "number", defaultValue: 30, placeholder: "30" },
      { id: "two", name: "2-Star Reviews", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "one", name: "1-Star Reviews", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "avgRating", name: "Average Rating (out of 5)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const total = (inputs.five || 0) + (inputs.four || 0) + (inputs.three || 0) + (inputs.two || 0) + (inputs.one || 0);
      const weighted = (inputs.five || 0) * 5 + (inputs.four || 0) * 4 + (inputs.three || 0) * 3 + (inputs.two || 0) * 2 + (inputs.one || 0) * 1;
      return { avgRating: total > 0 ? weighted / total : 0 };
    }
  },
  {
    id: "ecommerce-product-popularity-calculator",
    name: "Product Popularity Calculator",
    description: "Score product popularity from views, adds-to-cart and purchases.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "views", name: "Product Views", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "addToCart", name: "Add-to-Cart Events", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "purchases", name: "Purchases", type: "number", defaultValue: 200, placeholder: "200" },
    ],
    outputs: [
      { id: "popularityScore", name: "Popularity Score", type: "number", formatter: "number", formula: "(Views × 1) + (AddToCart × 3) + (Purchases × 10)" },
    ],
    calculate: (inputs) => ({
      popularityScore: (inputs.views || 0) * 1 + (inputs.addToCart || 0) * 3 + (inputs.purchases || 0) * 10
    })
  },

  // TRAFFIC & PERFORMANCE
  {
    id: "ecommerce-conversion-rate-calculator",
    name: "Ecommerce Conversion Rate Calculator",
    description: "Calculate store conversion rate from visitors and orders.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "visitors", name: "Total Visitors", type: "number", defaultValue: 20000, placeholder: "20000" },
      { id: "orders", name: "Total Orders", type: "number", defaultValue: 400, placeholder: "400" },
    ],
    outputs: [
      { id: "cvr", name: "Conversion Rate (%)", type: "number", formatter: "percentage", formula: "(Orders / Visitors) × 100" },
    ],
    calculate: (inputs) => ({ cvr: inputs.visitors > 0 ? ((inputs.orders || 0) / inputs.visitors) * 100 : 0 })
  },
  {
    id: "ecommerce-traffic-calculator",
    name: "Ecommerce Traffic Calculator",
    description: "Estimate visitors needed to hit revenue target.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "targetRevenue", name: "Target Revenue ($)", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "aov", name: "Average Order Value ($)", type: "number", defaultValue: 75, placeholder: "75" },
      { id: "cvr", name: "Conversion Rate (%)", type: "number", defaultValue: 2, placeholder: "2" },
    ],
    outputs: [
      { id: "visitorsNeeded", name: "Visitors Needed", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const ordersNeeded = inputs.aov > 0 ? (inputs.targetRevenue || 0) / inputs.aov : 0;
      return { visitorsNeeded: inputs.cvr > 0 ? Math.ceil(ordersNeeded / ((inputs.cvr || 0) / 100)) : 0 };
    }
  },
  {
    id: "ecommerce-ad-spend-calculator",
    name: "Ecommerce Ad Spend Calculator",
    description: "Calculate ROAS and profit from ecommerce ad campaigns.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "adSpend", name: "Ad Spend ($)", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "revenue", name: "Revenue from Ads ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
    ],
    outputs: [
      { id: "roas", name: "ROAS (Return on Ad Spend)", type: "number", formatter: "number", formula: "Revenue / Ad Spend" },
      { id: "profit", name: "Ad Profit ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => ({
      roas: inputs.adSpend > 0 ? (inputs.revenue || 0) / inputs.adSpend : 0,
      profit: (inputs.revenue || 0) - (inputs.adSpend || 0),
    })
  },
  {
    id: "ecommerce-product-demand-calculator",
    name: "Product Demand Calculator",
    description: "Estimate product demand based on search and conversion signals.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "searches", name: "Monthly Searches", type: "number", defaultValue: 5000, placeholder: "5000" },
      { id: "clickRate", name: "Click-through Rate (%)", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "convRate", name: "Conversion Rate (%)", type: "number", defaultValue: 3, placeholder: "3" },
    ],
    outputs: [
      { id: "estimatedSales", name: "Estimated Monthly Sales", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const clicks = (inputs.searches || 0) * ((inputs.clickRate || 0) / 100);
      return { estimatedSales: Math.round(clicks * ((inputs.convRate || 0) / 100)) };
    }
  },
  {
    id: "ecommerce-engagement-calculator",
    name: "Ecommerce Engagement Calculator",
    description: "Calculate site engagement score from key metrics.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "pageViews", name: "Avg Page Views per Session", type: "number", defaultValue: 4, placeholder: "4" },
      { id: "sessionDuration", name: "Avg Session Duration (min)", type: "number", defaultValue: 3, placeholder: "3" },
      { id: "bounceRate", name: "Bounce Rate (%)", type: "number", defaultValue: 40, placeholder: "40" },
    ],
    outputs: [
      { id: "engagementScore", name: "Engagement Score", type: "number", formatter: "number", formula: "(PageViews × 10) + (Duration × 5) - (BounceRate × 0.5)" },
    ],
    calculate: (inputs) => ({
      engagementScore: ((inputs.pageViews || 0) * 10) + ((inputs.sessionDuration || 0) * 5) - ((inputs.bounceRate || 0) * 0.5)
    })
  },
];
