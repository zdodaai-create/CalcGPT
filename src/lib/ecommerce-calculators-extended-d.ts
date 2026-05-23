import { CalculatorConfig } from "./calculator-types";

export const ECOMMERCE_CALCULATORS_EXTENDED_D: CalculatorConfig[] = [
  {
    id: "product-subscription-renewal",
    name: "Product Subscription Renewal Calculator",
    description: "Predict customer subscription renewals and active retention trends over time.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "activeSubscribers", name: "Active Subscribers Base", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "renewalRatePct", name: "Expected Renewal Rate (%)", type: "number", defaultValue: 85, placeholder: "85" },
      { id: "newSignups", name: "New Subscription Signups", type: "number", defaultValue: 150, placeholder: "150" },
    ],
    outputs: [
      { id: "predictedRenewals", name: "Predicted Renewals Count", type: "number", formatter: "number" },
      { id: "churnedSubscribers", name: "Predicted Churned Users", type: "number", formatter: "number" },
      { id: "netSubscribersChange", name: "Net Subscriber Growth/Decline", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const active = inputs.activeSubscribers || 0;
      const renewal = inputs.renewalRatePct || 0;
      const newUsers = inputs.newSignups || 0;

      const predictedRenewals = Math.round(active * (renewal / 100));
      const churnedSubscribers = active - predictedRenewals;
      const netSubscribersChange = newUsers - churnedSubscribers;

      return { predictedRenewals, churnedSubscribers, netSubscribersChange };
    },
    formulaExplanation: "Calculates subscription renewals by multiplying active customer bases with renewal probability rates, then offsets churned consumers against incoming user registrations.",
    scientificFormula: "Renewals = Active \\times \\frac{Renewal\\ Rate}{100}",
    faq: [
      { question: "How is subscription churn calculated?", answer: "Subscription churn represents the count or percentage of active members who fail to renew their subscription plan at expiration." },
      { question: "How can I improve subscription renewal rates?", answer: "Offer automatic billing reminders, premium loyal benefits, tiered subscription discounts, and seamless billing card updates." }
    ]
  },
  {
    id: "customer-purchase-frequency",
    name: "Customer Purchase Frequency Calculator",
    description: "Determine how often a customer buys from your online store and average days between checkouts.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "totalOrders", name: "Total Orders Placed", type: "number", defaultValue: 4500, placeholder: "4500" },
      { id: "uniqueCustomers", name: "Unique Buyers Base", type: "number", defaultValue: 1500, placeholder: "1500" },
      { id: "periodDays", name: "Tracking Timeframe (Days)", type: "number", defaultValue: 365, placeholder: "365" },
    ],
    outputs: [
      { id: "purchaseFrequency", name: "Purchase Frequency (Orders/Year)", type: "number", formatter: "number" },
      { id: "daysBetweenPurchases", name: "Average Days Between Orders", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const orders = inputs.totalOrders || 0;
      const customers = inputs.uniqueCustomers || 1;
      const days = inputs.periodDays || 365;

      const frequency = orders / customers;
      const purchaseFrequency = frequency * (365 / days);
      const daysBetweenPurchases = days / Math.max(1, frequency);

      return { purchaseFrequency, daysBetweenPurchases };
    },
    formulaExplanation: "Determines buying intervals by dividing total transactions by active user records over standard tracking windows.",
    scientificFormula: "Frequency = \\frac{Orders}{Customers} \\times \\frac{365}{Tracking\\ Days}",
    faq: [
      { question: "What does purchase frequency measure?", answer: "It details how active your customer base is. Higher frequencies yield a much larger Customer Lifetime Value (CLV)." },
      { question: "What is an excellent purchase frequency standard?", answer: "For consumer apparel or gourmet retail, a frequency of 3 to 6 orders per year represents strong engagement." }
    ]
  },
  {
    id: "ecommerce-tax-deduction",
    name: "Ecommerce Tax Deduction Calculator",
    description: "Estimate eligible business operational tax deductions and direct net tax savings.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "shippingMaterialsCost", name: "Packaging & Shipping Costs ($)", type: "number", defaultValue: 1800, placeholder: "1800" },
      { id: "advertisingSpend", name: "Marketing & Ads Expenditure ($)", type: "number", defaultValue: 12000, placeholder: "12000" },
      { id: "inventoryLoss", name: "Damaged/Lost Inventory Write-offs ($)", type: "number", defaultValue: 750, placeholder: "750" },
      { id: "effectiveTaxRatePct", name: "Estimated Income Tax Rate (%)", type: "number", defaultValue: 25, placeholder: "25" },
    ],
    outputs: [
      { id: "totalDeduction", name: "Total Estimated Deduction ($)", type: "number", formatter: "currency" },
      { id: "taxSavings", name: "Net Cash Tax Savings ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const ship = inputs.shippingMaterialsCost || 0;
      const ads = inputs.advertisingSpend || 0;
      const loss = inputs.inventoryLoss || 0;
      const rate = inputs.effectiveTaxRatePct || 0;

      const totalDeduction = ship + ads + loss;
      const taxSavings = totalDeduction * (rate / 100);

      return { totalDeduction, taxSavings };
    },
    formulaExplanation: "Aggregates legitimate operational costs like shipping materials, ad spending, and inventory depreciation to output calculated income tax reduction values.",
    scientificFormula: "Savings = (Shipping + Ads + Loss) \\times \\frac{Tax\\ Rate}{100}",
    faq: [
      { question: "What can ecommerce sellers deduct from taxes?", answer: "Shipping postage, product packaging, domain hosting, software subscriptions, advertising costs, and inventory damage are general deductions." },
      { question: "How does write-off value impact actual tax paid?", answer: "Deductions lower your taxable net income, meaning you save cash equal to the deduction amount multiplied by your effective tax rate." }
    ]
  },
  {
    id: "product-return-prediction",
    name: "Product Return Prediction Calculator",
    description: "Evaluate return probabilities based on product categorizations and purchase variables.",
    category: "Ecommerce",
    subcategory: "Customer & Return Policies",
    inputs: [
      { id: "categoryReturnRatePct", name: "Category Baseline Return Rate (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "productPrice", name: "Product Unit Price ($)", type: "number", defaultValue: 85, placeholder: "85" },
      { id: "sizeRiskFactor", name: "Size Mismatch Risk (1 = Low, 5 = High)", type: "number", defaultValue: 3, placeholder: "3" },
    ],
    outputs: [
      { id: "predictedReturnRate", name: "Predicted Return Probability (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const base = inputs.categoryReturnRatePct || 0;
      const price = inputs.productPrice || 0;
      const risk = inputs.sizeRiskFactor || 1;

      // Premium price items and higher size risks increase return rate
      const surcharge = (price > 100 ? 5 : 0) + (risk * 2.5);
      const predictedReturnRate = Math.min(100, Math.max(0, base + surcharge));

      return { predictedReturnRate };
    },
    formulaExplanation: "Estimates return probability by blending baseline catalog metrics with product unit prices and sizing risk factors.",
    scientificFormula: "Prediction = Baseline\\ Rate + Price\\ Surcharge + (Size\\ Risk \\times 2.5)",
    faq: [
      { question: "Which ecommerce category has the highest return rate?", answer: "Fashion and apparel frequently see return rates ranging from 25% to 40% due to fitting issues." },
      { question: "How can I decrease return rates?", answer: "Provide detailed sizing guides, 3D product previews, comprehensive videos, and accurate user review forums." }
    ]
  },
  {
    id: "order-cancellation-rate",
    name: "Order Cancellation Rate Calculator",
    description: "Measure the percentage of transactions cancelled before shipping.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "cancelledOrdersCount", name: "Cancelled Orders Count", type: "number", defaultValue: 35, placeholder: "35" },
      { id: "totalPlacedOrders", name: "Total Placed Orders", type: "number", defaultValue: 1200, placeholder: "1200" },
    ],
    outputs: [
      { id: "cancellationRatePct", name: "Cancellation Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const cancelled = inputs.cancelledOrdersCount || 0;
      const total = inputs.totalPlacedOrders || 1;

      const cancellationRatePct = (cancelled / total) * 100;

      return { cancellationRatePct };
    },
    formulaExplanation: "Calculates order cancellation rates by dividing total cancelled checkouts by initial placed order metrics.",
    scientificFormula: "Cancellation\\ Rate = \\frac{Cancelled\\ Orders}{Placed\\ Orders} \\times 100\\%",
    faq: [
      { question: "What is an acceptable order cancellation rate?", answer: "Ideally, order cancellations should remain below 1% to 2% to ensure warehouse efficiency." },
      { question: "What causes high cancellation rates?", answer: "Unexpected payment delays, sudden inventory stockouts, long processing delays, and buyer second thoughts are primary causes." }
    ]
  },
  {
    id: "warehouse-efficiency",
    name: "Ecommerce Warehouse Efficiency Calculator",
    description: "Evaluate labor picker speeds and floor layout volume statistics.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "ordersPicked", name: "Total Orders Picked & Packed", type: "number", defaultValue: 450, placeholder: "450" },
      { id: "laborHours", name: "Total Labor Hours Expended", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "warehouseSqFt", name: "Warehouse Floor Area (Sq Ft)", type: "number", defaultValue: 8000, placeholder: "8000" },
    ],
    outputs: [
      { id: "picksPerHour", name: "Picks per Labor Hour", type: "number", formatter: "number" },
      { id: "picksPerSqFt", name: "Picks per Sq Foot (Density)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const picks = inputs.ordersPicked || 0;
      const hours = inputs.laborHours || 1;
      const area = inputs.warehouseSqFt || 1;

      const picksPerHour = picks / hours;
      const picksPerSqFt = picks / area;

      return { picksPerHour, picksPerSqFt };
    },
    formulaExplanation: "Analyzes sorting performance metrics by charting hourly package pick rates against facility layouts.",
    scientificFormula: "Picks\\ Per\\ Hour = \\frac{Picks}{Labor\\ Hours}",
    faq: [
      { question: "How is warehouse speed optimized?", answer: "Optimize layouts so popular stock items sit near sorting tables, and implement automated barcode scanning systems." },
      { question: "What is a standard pick speed?", answer: "Depending on item sizes, a manual picker averages around 30 to 60 items per hour." }
    ]
  },
  {
    id: "delivery-delay-estimator",
    name: "Delivery Delay Calculator",
    description: "Estimate delays in shipment delivery times based on route distance and weather anomalies.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "distanceMiles", name: "Fulfillment Distance (Miles)", type: "number", defaultValue: 850, placeholder: "850" },
      { id: "carrierDelayHours", name: "Carrier Network Delay (Hours)", type: "number", defaultValue: 12, placeholder: "12" },
      { id: "weatherDelayHours", name: "Weather Delays (Hours)", type: "number", defaultValue: 6, placeholder: "6" },
    ],
    outputs: [
      { id: "totalDelayHours", name: "Total Cumulative Delay (Hours)", type: "number", formatter: "number" },
      { id: "adjustedTransitDays", name: "Adjusted Transit Time (Days)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const dist = inputs.distanceMiles || 0;
      const carrier = inputs.carrierDelayHours || 0;
      const weather = inputs.weatherDelayHours || 0;

      const standardTransitDays = Math.max(1, dist / 250);
      const totalDelayHours = carrier + weather;
      const adjustedTransitDays = standardTransitDays + (totalDelayHours / 24);

      return { totalDelayHours, adjustedTransitDays };
    },
    formulaExplanation: "Adds network bottlenecks and outdoor disruptions to baseline route travel times to project realistic shipment delivery windows.",
    scientificFormula: "Transit = \\frac{Distance}{250} + \\frac{Delays}{24}",
    faq: [
      { question: "How does route distance map to transit days?", answer: "Domestic ground logistics companies typically cover around 250 to 300 miles per day." },
      { question: "Should I notify buyers of delivery delays?", answer: "Yes. Proactive alerts about delay issues build customer trust and prevent customer support ticket backlogs." }
    ]
  },
  {
    id: "price-elasticity",
    name: "Product Price Elasticity Calculator",
    description: "Calculate price elasticity of demand to find the ideal price elasticity values.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "initialPrice", name: "Initial Price ($)", type: "number", defaultValue: 50, placeholder: "50" },
      { id: "finalPrice", name: "New Price ($)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "initialQuantity", name: "Initial Units Sold", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "finalQuantity", name: "New Units Sold", type: "number", defaultValue: 260, placeholder: "260" },
    ],
    outputs: [
      { id: "elasticity", name: "Price Elasticity of Demand", type: "number", formatter: "number" },
      { id: "isElastic", name: "Demand is Elastic? (1 = Yes, 0 = No)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const p1 = inputs.initialPrice || 1;
      const p2 = inputs.finalPrice || 1;
      const q1 = inputs.initialQuantity || 1;
      const q2 = inputs.finalQuantity || 1;

      const percentChangeQ = ((q2 - q1) / q1);
      const percentChangeP = ((p2 - p1) / p1);

      const elasticity = percentChangeP !== 0 ? Math.abs(percentChangeQ / percentChangeP) : 0;
      const isElastic = elasticity > 1 ? 1 : 0;

      return { elasticity, isElastic };
    },
    formulaExplanation: "Calculates the ratio of quantity change to price change. If the ratio is greater than 1, a small price drop yields a large sales volume increase.",
    scientificFormula: "Elasticity = \\left| \\frac{\\%\\ \\Delta\\ in\\ Quantity}{\\%\\ \\Delta\\ in\\ Price} \\right|",
    faq: [
      { question: "What is elastic demand?", answer: "Demand is elastic if small changes in price lead to significant changes in purchasing volume." },
      { question: "How does price elasticity help pricing strategies?", answer: "If your product is highly elastic, lowering prices can boost sales enough to increase overall gross profit." }
    ]
  },
  {
    id: "seasonal-trend",
    name: "Ecommerce Seasonal Trend Calculator",
    description: "Measure seasonal demand factors by comparing peak seasonal revenue with off-peak sales.",
    category: "Ecommerce",
    subcategory: "Market Analysis",
    inputs: [
      { id: "holidaySales", name: "Peak Holiday Sales ($)", type: "number", defaultValue: 85000, placeholder: "85000" },
      { id: "nonHolidaySales", name: "Standard Off-Peak Sales ($)", type: "number", defaultValue: 30000, placeholder: "30000" },
    ],
    outputs: [
      { id: "seasonalMultiplier", name: "Seasonal Multiplier Index", type: "number", formatter: "number" },
      { id: "salesSpikePct", name: "Sales Volume Increase (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const peak = inputs.holidaySales || 0;
      const standard = inputs.nonHolidaySales || 1;

      const seasonalMultiplier = peak / standard;
      const salesSpikePct = ((peak - standard) / standard) * 100;

      return { seasonalMultiplier, salesSpikePct };
    },
    formulaExplanation: "Compares peak holiday shopping volumes against baseline sales to establish seasonal index metrics.",
    scientificFormula: "Multiplier = \\frac{Peak\\ Sales}{OffPeak\\ Sales}",
    faq: [
      { question: "How do seasonal index metrics help forecasting?", answer: "They help calculate seasonal inventory demands, ensuring adequate supply during peak periods without holding excess stock during off-peak months." },
      { question: "When does the standard retail peak occur?", answer: "For most ecommerce niches, peak sales occur in Q4 (November through December) driven by BFCM holidays." }
    ]
  },
  {
    id: "customer-reward-tier",
    name: "Customer Reward Tier Calculator",
    description: "Determine customer reward levels and calculate the spending needed to reach the next tier.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "annualSpend", name: "Annual Spend Amount ($)", type: "number", defaultValue: 350, placeholder: "350" },
      { id: "silverThreshold", name: "Silver Tier Threshold ($)", type: "number", defaultValue: 200, placeholder: "200" },
      { id: "goldThreshold", name: "Gold Tier Threshold ($)", type: "number", defaultValue: 500, placeholder: "500" },
    ],
    outputs: [
      { id: "tierIndex", name: "Tier Level (1=Bronze, 2=Silver, 3=Gold)", type: "number", formatter: "number" },
      { id: "spendToNextTier", name: "Spend Needed for Next Tier ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const spend = inputs.annualSpend || 0;
      const silver = inputs.silverThreshold || 200;
      const gold = inputs.goldThreshold || 500;

      let tierIndex = 1;
      let spendToNextTier = silver - spend;

      if (spend >= gold) {
        tierIndex = 3;
        spendToNextTier = 0;
      } else if (spend >= silver) {
        tierIndex = 2;
        spendToNextTier = gold - spend;
      }

      return { tierIndex, spendToNextTier: Math.max(0, spendToNextTier) };
    },
    formulaExplanation: "Evaluates annual customer spend against loyalty tier thresholds, outputting active level designations and remaining spending milestones.",
    scientificFormula: "Tier = f(Spend,\\ Thresholds)",
    faq: [
      { question: "Why use tiered customer rewards?", answer: "Clear progress milestones encourage customers to consolidate their purchases to unlock premium benefits like free shipping or exclusive gifts." },
      { question: "What is an optimal entry-level tier threshold?", answer: "The baseline entry-level tier should be easily reachable—typically set around 1.5 times the store's average order value." }
    ]
  },
  {
    id: "ad-conversion-performance",
    name: "Ecommerce Ad Conversion Calculator",
    description: "Track ad conversion metrics by analyzing impressions, clicks, conversions, and costs.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "adImpressions", name: "Total Ad Impressions", type: "number", defaultValue: 50000, placeholder: "50000" },
      { id: "adClicks", name: "Total Ad Clicks", type: "number", defaultValue: 1200, placeholder: "1200" },
      { id: "adConversions", name: "Total Ad Conversions", type: "number", defaultValue: 48, placeholder: "48" },
      { id: "totalCost", name: "Total Ad Campaign Cost ($)", type: "number", defaultValue: 950, placeholder: "950" },
    ],
    outputs: [
      { id: "ctrPct", name: "Click-Through Rate (%)", type: "number", formatter: "percentage" },
      { id: "cvrPct", name: "Ad Conversion Rate (%)", type: "number", formatter: "percentage" },
      { id: "cpa", name: "Cost Per Acquisition (CPA) ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const imp = inputs.adImpressions || 1;
      const clicks = inputs.adClicks || 1;
      const conv = inputs.adConversions || 0;
      const cost = inputs.totalCost || 0;

      const ctrPct = (clicks / imp) * 100;
      const cvrPct = conv > 0 ? (conv / clicks) * 100 : 0;
      const cpa = conv > 0 ? cost / conv : 0;

      return { ctrPct, cvrPct, cpa };
    },
    formulaExplanation: "Calculates ad campaign efficiency by tracking CTR, Conversion Rate, and Cost Per Acquisition (CPA) metrics.",
    scientificFormula: "CPA = \\frac{Campaign\\ Cost}{Ad\\ Conversions}",
    faq: [
      { question: "What is Cost Per Acquisition (CPA)?", answer: "CPA measures the average advertising cost required to acquire one converting customer." },
      { question: "How can I improve my ad conversion rate?", answer: "Ensure a consistent message between the ad and landing page, optimize page loading speed, and use strong call-to-actions." }
    ]
  },
  {
    id: "rating-weighted-score",
    name: "Product Rating Weighted Score Calculator",
    description: "Calculate a weighted product score by balancing overall rating stars against total review volume.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "averageRating", name: "Average Rating Star Score (1-5)", type: "number", defaultValue: 4.6, placeholder: "4.6" },
      { id: "totalReviewCount", name: "Total Review Count", type: "number", defaultValue: 350, placeholder: "350" },
    ],
    outputs: [
      { id: "weightedScore", name: "Weighted Popularity Score (1-5)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const rating = inputs.averageRating || 0;
      const reviews = inputs.totalReviewCount || 0;

      // Bayesian average approximation (using 10 baseline reviews at a neutral rating of 3.0)
      const weightedScore = ((reviews * rating) + (10 * 3.0)) / (reviews + 10);

      return { weightedScore };
    },
    formulaExplanation: "Uses a Bayesian average formula to calculate a weighted product score, ensuring items with high volumes of consistent ratings score higher than those with only a few positive reviews.",
    scientificFormula: "Score = \\frac{(Reviews \\times Rating) + (10 \\times 3.0)}{Reviews + 10}",
    faq: [
      { question: "Why is a weighted star rating system useful?", answer: "It prevents a product with a single 5-star review from ranking higher than a product with an average of 4.8 stars across 500 reviews." },
      { question: "How does review volume affect conversions?", answer: "Shoppers trust products with a large volume of reviews, as the sample size indicates consistent quality and reliability." }
    ]
  },
  {
    id: "inventory-aging-cost",
    name: "Inventory Aging Calculator",
    description: "Calculate total holding costs and recommended discount markdowns based on inventory age.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "stockQuantity", name: "Current Aged Stock (Units)", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "unitCogs", name: "Unit Cost of Goods Sold ($)", type: "number", defaultValue: 25, placeholder: "25" },
      { id: "daysInWarehouse", name: "Days Stored in Warehouse", type: "number", defaultValue: 120, placeholder: "120" },
    ],
    outputs: [
      { id: "holdingCost", name: "Cumulative Storage Cost ($)", type: "number", formatter: "currency" },
      { id: "markdownPct", name: "Recommended Markdown Discount (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const qty = inputs.stockQuantity || 0;
      const cogs = inputs.unitCogs || 0;
      const days = inputs.daysInWarehouse || 0;

      // Standard holding cost of 0.05% of value per day
      const holdingCost = qty * cogs * days * 0.0005;

      let markdownPct = 0;
      if (days > 180) markdownPct = 40;
      else if (days > 90) markdownPct = 20;
      else if (days > 60) markdownPct = 10;

      return { holdingCost, markdownPct };
    },
    formulaExplanation: "Calculates cumulative storage costs over time, outputting recommended discount markdown percentages to help free up warehouse space.",
    scientificFormula: "Cost = Quantity \\times COGS \\times Days \\times 0.0005",
    faq: [
      { question: "What are typical inventory holding costs?", answer: "Holding costs generally average between 15% and 30% of your total inventory value annually." },
      { question: "When should inventory markdowns be implemented?", answer: "Markdowns are typically introduced after stock sits in the warehouse for 60 to 90 days to maintain cash flow." }
    ]
  },
  {
    id: "sell-through-rate",
    name: "Product Sell-through Rate Calculator",
    description: "Calculate the ratio of inventory sold compared to total inventory received.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "beginningInventory", name: "Beginning Stock Received (Units)", type: "number", defaultValue: 500, placeholder: "500" },
      { id: "unitsSold", name: "Total Units Sold", type: "number", defaultValue: 320, placeholder: "320" },
    ],
    outputs: [
      { id: "sellThroughRatePct", name: "Sell-through Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const stock = inputs.beginningInventory || 1;
      const sold = inputs.unitsSold || 0;

      const sellThroughRatePct = (sold / stock) * 100;

      return { sellThroughRatePct };
    },
    formulaExplanation: "Calculates the sell-through rate by dividing sold units by the total stock received at the beginning of the period.",
    scientificFormula: "Sell\\ through = \\frac{Units\\ Sold}{Beginning\\ Stock} \\times 100\\%",
    faq: [
      { question: "What is a healthy monthly sell-through rate?", answer: "A healthy rate is generally between 40% and 80%, indicating balanced supply and demand." },
      { question: "How does sell-through rate impact storage costs?", answer: "A low sell-through rate means products are sitting in storage longer, which increases warehouse holding costs." }
    ]
  },
  {
    id: "brand-loyalty-score",
    name: "Ecommerce Brand Loyalty Calculator",
    description: "Calculate Net Promoter Score (NPS) and brand loyalty metrics.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "promoterCount", name: "Promoter Survey Responses (9-10)", type: "number", defaultValue: 180, placeholder: "180" },
      { id: "passiveCount", name: "Passive Survey Responses (7-8)", type: "number", defaultValue: 70, placeholder: "70" },
      { id: "detractorCount", name: "Detractor Survey Responses (0-6)", type: "number", defaultValue: 30, placeholder: "30" },
    ],
    outputs: [
      { id: "npsScore", name: "Net Promoter Score (NPS)", type: "number", formatter: "number" },
      { id: "loyaltyIndexPct", name: "Overall Brand Loyalty Index (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const prom = inputs.promoterCount || 0;
      const pass = inputs.passiveCount || 0;
      const detr = inputs.detractorCount || 0;

      const total = prom + pass + detr;
      const npsScore = total > 0 ? ((prom - detr) / total) * 100 : 0;
      const loyaltyIndexPct = total > 0 ? (prom / total) * 100 : 0;

      return { npsScore: Math.round(npsScore), loyaltyIndexPct };
    },
    formulaExplanation: "Subtracts the percentage of detractors from the percentage of promoters to output your store's Net Promoter Score (NPS).",
    scientificFormula: "NPS = \\left( \\frac{Promoters - Detractors}{Total\\ Responses} \\right) \\times 100",
    faq: [
      { question: "What is an excellent NPS score?", answer: "Any NPS score above 50 is excellent, indicating strong brand advocates and high loyalty." },
      { question: "How can I turn detractors into promoters?", answer: "Resolve customer issues quickly, offer rewards for inconveniences, and gather feedback to improve products." }
    ]
  },
  {
    id: "mobile-traffic-share",
    name: "Ecommerce Mobile Traffic Calculator",
    description: "Compare session volumes and conversion rates between mobile and desktop devices.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "mobileSessions", name: "Mobile Session Count", type: "number", defaultValue: 35000, placeholder: "35000" },
      { id: "desktopSessions", name: "Desktop Session Count", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "mobileConversions", name: "Mobile Orders Placed", type: "number", defaultValue: 525, placeholder: "525" },
      { id: "desktopConversions", name: "Desktop Orders Placed", type: "number", defaultValue: 450, placeholder: "450" },
    ],
    outputs: [
      { id: "mobileTrafficPct", name: "Mobile Traffic Share (%)", type: "number", formatter: "percentage" },
      { id: "mobileCvrPct", name: "Mobile Conversion Rate (%)", type: "number", formatter: "percentage" },
      { id: "desktopCvrPct", name: "Desktop Conversion Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const mob = inputs.mobileSessions || 0;
      const desk = inputs.desktopSessions || 0;
      const mobConv = inputs.mobileConversions || 0;
      const deskConv = inputs.desktopConversions || 0;

      const total = mob + desk;
      const mobileTrafficPct = total > 0 ? (mob / total) * 100 : 0;
      const mobileCvrPct = mob > 0 ? (mobConv / mob) * 100 : 0;
      const desktopCvrPct = desk > 0 ? (deskConv / desk) * 100 : 0;

      return { mobileTrafficPct, mobileCvrPct, desktopCvrPct };
    },
    formulaExplanation: "Measures mobile traffic share and device-level conversion rates to highlight optimization opportunities.",
    scientificFormula: "Mobile\\ Share = \\frac{Mobile\\ Sessions}{Mobile + Desktop} \\times 100\\%",
    faq: [
      { question: "Why is mobile conversion often lower than desktop?", answer: "Checkout forms are often more difficult to fill out on mobile, and smaller screen sizes can make browsing feel more tedious." },
      { question: "How can I improve mobile conversion?", answer: "Enable digital wallets (Apple Pay, Google Pay) to simplify the payment step and keep page layouts responsive and fast." }
    ]
  },
  {
    id: "smart-discount-recommendation",
    name: "Smart Discount Recommendation Calculator",
    description: "Determine recommended discounts and new selling prices based on inventory aging and margins.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "inventoryAge", name: "Inventory Age (Days)", type: "number", defaultValue: 75, placeholder: "75" },
      { id: "unitCost", name: "Unit Cost ($)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "currentPrice", name: "Current Selling Price ($)", type: "number", defaultValue: 50, placeholder: "50" },
    ],
    outputs: [
      { id: "recommendedDiscountPct", name: "Recommended Discount (%)", type: "number", formatter: "percentage" },
      { id: "newSellingPrice", name: "New Discounted Price ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const age = inputs.inventoryAge || 0;
      const cost = inputs.unitCost || 0;
      const price = inputs.currentPrice || 1;

      let discount = 0;
      if (age > 180) discount = 50;
      else if (age > 90) discount = 30;
      else if (age > 60) discount = 15;
      else if (age > 30) discount = 5;

      // Ensure discount doesn't price variant below COGS
      let newPrice = price * (1 - (discount / 100));
      if (newPrice < cost) {
        newPrice = cost * 1.10; // set 10% minimum margin above cost
        discount = ((price - newPrice) / price) * 100;
      }

      return { recommendedDiscountPct: discount, newSellingPrice: newPrice };
    },
    formulaExplanation: "Calculates discount recommendations based on inventory age, adjusting variables to prevent selling below cost.",
    scientificFormula: "Discount = f(Age,\\ Margin\\ Bounds)",
    faq: [
      { question: "How do I clear aging inventory without losing profit?", answer: "Set strict discount rules to protect your cost boundaries, ensuring you cover raw manufacturing expenses." },
      { question: "What is an inventory aging threshold?", answer: "Typically, inventory is considered 'aged' after sitting in a warehouse for more than 90 days." }
    ]
  },
  {
    id: "search-performance",
    name: "Ecommerce Search Performance Calculator",
    description: "Analyze search performance by tracking zero-result queries and search-led CTR.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "totalSearchQueries", name: "Total Site Search Queries", type: "number", defaultValue: 8000, placeholder: "8000" },
      { id: "zeroResultQueries", name: "Zero-Result Search Queries", type: "number", defaultValue: 400, placeholder: "400" },
      { id: "searchResultClicks", name: "Search Result Clicks", type: "number", defaultValue: 4800, placeholder: "4800" },
    ],
    outputs: [
      { id: "zeroResultRatePct", name: "Zero-Result Query Rate (%)", type: "number", formatter: "percentage" },
      { id: "searchCtrPct", name: "Search Click-Through Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const total = inputs.totalSearchQueries || 1;
      const zero = inputs.zeroResultQueries || 0;
      const clicks = inputs.searchResultClicks || 0;

      const zeroResultRatePct = (zero / total) * 100;
      const searchCtrPct = (clicks / total) * 100;

      return { zeroResultRatePct, searchCtrPct };
    },
    formulaExplanation: "Calculates on-site search performance metrics, highlighting catalog gaps and listing quality.",
    scientificFormula: "Zero\\ Result\\ Rate = \\frac{Zero\\ Queries}{Total\\ Queries} \\times 100\\%",
    faq: [
      { question: "Why is a high zero-result search rate problematic?", answer: "A high rate indicates customers are searching for products you don't carry or that your search engine is struggling to index existing items." },
      { question: "What is a healthy on-site search CTR?", answer: "An optimized on-site search click-through rate typically averages between 50% and 75%." }
    ]
  },
  {
    id: "product-launch-demand",
    name: "Product Launch Countdown Calculator",
    description: "Estimate initial day launch sales based on waitlist size and conversion rates.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "waitlistCount", name: "Total Waitlisted Users", type: "number", defaultValue: 2500, placeholder: "2500" },
      { id: "expectedLaunchConversion", name: "Expected Launch Conversion (%)", type: "number", defaultValue: 10, placeholder: "10" },
      { id: "unitLaunchPrice", name: "Launch Price per Unit ($)", type: "number", defaultValue: 49.99, placeholder: "49.99" },
    ],
    outputs: [
      { id: "estimatedFirstDaySalesUnits", name: "Estimated Launch Sales (Units)", type: "number", formatter: "number" },
      { id: "estimatedFirstDayRevenue", name: "Estimated Launch Revenue ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const waitlist = inputs.waitlistCount || 0;
      const rate = inputs.expectedLaunchConversion || 0;
      const price = inputs.unitLaunchPrice || 0;

      const units = Math.round(waitlist * (rate / 100));
      const revenue = units * price;

      return { estimatedFirstDaySalesUnits: units, estimatedFirstDayRevenue: revenue };
    },
    formulaExplanation: "Estimates initial launch sales by applying expected conversion rates to the size of your product waitlist.",
    scientificFormula: "Sales = Waitlist \\times \\frac{Conversion\\ Rate}{100}",
    faq: [
      { question: "How does pre-launch hype increase conversion?", answer: "Building a warm waitlist creates urgency and a strong customer baseline, leading to higher conversion rates compared to cold traffic." },
      { question: "What is a standard launch conversion rate?", answer: "A highly engaged waitlist typically converts at a rate of 5% to 15% on launch day." }
    ]
  },
  {
    id: "cart-recovery-performance",
    name: "Customer Cart Recovery Rate Calculator",
    description: "Measure cart recovery campaign effectiveness and average recovered cart values.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "abandonedCarts", name: "Total Abandoned Carts", type: "number", defaultValue: 1200, placeholder: "1200" },
      { id: "recoveredCarts", name: "Recovered Carts Count", type: "number", defaultValue: 180, placeholder: "180" },
      { id: "recoveredRevenue", name: "Total Recovered Revenue ($)", type: "number", defaultValue: 14400, placeholder: "14400" },
    ],
    outputs: [
      { id: "recoveryRatePct", name: "Cart Recovery Rate (%)", type: "number", formatter: "percentage" },
      { id: "avgRecoveredCartValue", name: "Avg Recovered Cart Value ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const abandoned = inputs.abandonedCarts || 1;
      const recovered = inputs.recoveredCarts || 0;
      const rev = inputs.recoveredRevenue || 0;

      const recoveryRatePct = (recovered / abandoned) * 100;
      const avgRecoveredCartValue = recovered > 0 ? rev / recovered : 0;

      return { recoveryRatePct, avgRecoveredCartValue };
    },
    formulaExplanation: "Calculates the percentage of abandoned carts recovered and evaluates average recovery order values.",
    scientificFormula: "Recovery\\ Rate = \\frac{Recovered\\ Carts}{Abandoned\\ Carts} \\times 100\\%",
    faq: [
      { question: "What is an average cart recovery rate?", answer: "An optimized automated email and SMS sequence typically recovers 8% to 15% of abandoned checkout sessions." },
      { question: "When is the best time to send recovery emails?", answer: "Send the first recovery email within 1 hour of abandonment, followed by a second reminder 24 hours later." }
    ]
  },
  {
    id: "ai-pricing-optimizer",
    name: "Ecommerce AI Pricing Calculator",
    description: "Determine optimized selling prices based on competitor pricing and demand elasticity parameters.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "competitorPrice", name: "Competitor Average Price ($)", type: "number", defaultValue: 59.99, placeholder: "59.99" },
      { id: "unitCogs", name: "Unit Cost (COGS) ($)", type: "number", defaultValue: 22.00, placeholder: "22.00" },
      { id: "priceElasticity", name: "Demand Elasticity (0.5 to 3.0)", type: "number", defaultValue: 1.5, placeholder: "1.5" },
      { id: "minMarginPct", name: "Minimum Target Margin (%)", type: "number", defaultValue: 30, placeholder: "30" },
    ],
    outputs: [
      { id: "optimizedPrice", name: "Optimized Selling Price ($)", type: "number", formatter: "currency" },
      { id: "marginUnderOptimizedPrice", name: "Calculated Profit Margin (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const comp = inputs.competitorPrice || 0;
      const cogs = inputs.unitCogs || 0;
      const elast = inputs.priceElasticity || 1;
      const margin = inputs.minMarginPct || 0;

      // Base formula: blend competitor price and cogs based on demand elasticity
      let optimizedPrice = (comp * (1 - 0.05 * elast)) + (cogs * (1 + (margin / 100)) * 0.2);
      optimizedPrice = Math.max(optimizedPrice, cogs / (1 - (margin / 100)));

      const profit = optimizedPrice - cogs;
      const calculatedMargin = optimizedPrice > 0 ? (profit / optimizedPrice) * 100 : 0;

      return { optimizedPrice, marginUnderOptimizedPrice: calculatedMargin };
    },
    formulaExplanation: "Balances competitor prices against unit costs and demand elasticity to recommend optimized price points.",
    scientificFormula: "Price = \\max\\left( Competitor\\ Blend, \\frac{COGS}{1 - Margin} \\right)",
    faq: [
      { question: "How does competitor pricing affect search performance?", answer: "Pricing your product within 5% of your competitors helps maintain search placement while protecting your margins." },
      { question: "What is demand elasticity?", answer: "It measures customer price sensitivity. A high elasticity rating indicates customers are highly sensitive to price changes." }
    ]
  },
  {
    id: "shipping-carrier-comparison",
    name: "Product Shipping Optimization Calculator",
    description: "Compare carrier quotes to identify the cheapest shipping rates.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "carrier1Rate", name: "USPS Ground Quote ($)", type: "number", defaultValue: 7.50, placeholder: "7.50" },
      { id: "carrier2Rate", name: "UPS Ground Quote ($)", type: "number", defaultValue: 8.90, placeholder: "8.90" },
      { id: "carrier3Rate", name: "FedEx Home Quote ($)", type: "number", defaultValue: 9.20, placeholder: "9.20" },
    ],
    outputs: [
      { id: "cheapestRate", name: "Cheapest Shipping Quote ($)", type: "number", formatter: "currency" },
      { id: "optimalCarrierIndex", name: "Optimal Carrier Index (1=USPS, 2=UPS, 3=FedEx)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const c1 = inputs.carrier1Rate || 999;
      const c2 = inputs.carrier2Rate || 999;
      const c3 = inputs.carrier3Rate || 999;

      const cheapestRate = Math.min(c1, c2, c3);
      const optimalCarrierIndex = cheapestRate === c1 ? 1 : cheapestRate === c2 ? 2 : 3;

      return { cheapestRate, optimalCarrierIndex };
    },
    formulaExplanation: "Compares quotes across active carrier API structures to recommend the most cost-effective shipping option.",
    scientificFormula: "Cheapest = \\min(Carrier_1, Carrier_2, Carrier_3)",
    faq: [
      { question: "How can I automate carrier selection?", answer: "Use shipping platforms (like ShipStation or Shippo) that automatically compare carrier rates on every order." },
      { question: "Does cheap shipping slow down transit?", answer: "Often, yes. Ground shipping is cheaper but takes longer compared to express services." }
    ]
  },
  {
    id: "repeat-customer-ratio",
    name: "Ecommerce Repeat Customer Calculator",
    description: "Track returning customers compared to first-time customer cohorts.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "firstTimeCustomersCount", name: "First-Time Customers Count", type: "number", defaultValue: 850, placeholder: "850" },
      { id: "repeatCustomersCount", name: "Repeat Customers Count", type: "number", defaultValue: 350, placeholder: "350" },
    ],
    outputs: [
      { id: "repeatCustomerSharePct", name: "Repeat Customer Share (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const first = inputs.firstTimeCustomersCount || 0;
      const repeat = inputs.repeatCustomersCount || 0;

      const total = first + repeat;
      const repeatCustomerSharePct = total > 0 ? (repeat / total) * 100 : 0;

      return { repeatCustomerSharePct };
    },
    formulaExplanation: "Calculates repeat customer share by dividing returning shoppers by the total active buyer pool.",
    scientificFormula: "Repeat\\ Share = \\frac{Repeat\\ Customers}{FirstTime + Repeat} \\times 100\\%",
    faq: [
      { question: "Why are repeat customers more profitable?", answer: "Repeat customers don't require acquisition costs, and they typically spend more per order compared to first-time buyers." },
      { question: "What is a healthy repeat customer share?", answer: "An established store should aim for a repeat customer share of 25% to 40%." }
    ]
  },
  {
    id: "online-store-scalability",
    name: "Online Store Scalability Calculator",
    description: "Measure site load stability and calculate concurrent user limits.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "serverCpuUsagePct", name: "Peak Server CPU Usage (%)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "concurrentUserCount", name: "Concurrent Active Users", type: "number", defaultValue: 850, placeholder: "850" },
      { id: "averageResponseTimeMs", name: "Average Response Time (ms)", type: "number", defaultValue: 350, placeholder: "350" },
    ],
    outputs: [
      { id: "scalabilityScore", name: "Scalability Score (0-100)", type: "number", formatter: "number" },
      { id: "maxSafeUsers", name: "Max Safe Concurrent Users", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const cpu = inputs.serverCpuUsagePct || 1;
      const users = inputs.concurrentUserCount || 0;
      const time = inputs.averageResponseTimeMs || 100;

      const loadFactor = (cpu * 0.6) + (Math.min(1000, time) * 0.04);
      const scalabilityScore = Math.max(0, 100 - loadFactor);

      // Estimate max users assuming 80% CPU limit
      const maxSafeUsers = Math.round(users * (80 / cpu));

      return { scalabilityScore: Math.round(scalabilityScore), maxSafeUsers };
    },
    formulaExplanation: "Evaluates store load stability by tracking active user volumes against CPU loads and server response times.",
    scientificFormula: "Scalability = 100 - (CPU \\times 0.6 + Response\\ Time \\times 0.04)",
    faq: [
      { question: "How does slow page loading affect sales?", answer: "Every 100ms of delay in page response times can lower overall conversion rates by up to 1%." },
      { question: "What is an ideal server response time?", answer: "Ideally, your server response time should remain under 200ms for standard pages." }
    ]
  },
  {
    id: "ecommerce-revenue-growth-predictor",
    name: "Ecommerce Revenue Growth Predictor Calculator",
    description: "Forecast expected revenue increases by tracking growth across traffic, conversion rate, and average order value.",
    category: "Ecommerce",
    subcategory: "Revenue & Growth",
    inputs: [
      { id: "startingMonthlyRevenue", name: "Starting Monthly Revenue ($)", type: "number", defaultValue: 25000, placeholder: "25000" },
      { id: "trafficIncreasePct", name: "Expected Traffic Increase (%)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "conversionRateIncreasePct", name: "Expected Conversion Rate Increase (%)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "aovIncreasePct", name: "Expected AOV Increase (%)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "predictedRevenue", name: "Predicted Monthly Revenue ($)", type: "number", formatter: "currency" },
      { id: "netRevenueIncrease", name: "Net Revenue Increase ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const starting = inputs.startingMonthlyRevenue || 0;
      const traffic = inputs.trafficIncreasePct || 0;
      const conversion = inputs.conversionRateIncreasePct || 0;
      const aov = inputs.aovIncreasePct || 0;

      const fTraffic = 1 + (traffic / 100);
      const fConversion = 1 + (conversion / 100);
      const fAov = 1 + (aov / 100);

      const predictedRevenue = starting * fTraffic * fConversion * fAov;
      const netRevenueIncrease = predictedRevenue - starting;

      return { predictedRevenue, netRevenueIncrease };
    },
    formulaExplanation: "Calculates cumulative growth by compounding expected increases across traffic, conversion rates, and AOV variables.",
    scientificFormula: "Revenue_{New} = Revenue_{Old} \\times (1 + \\%\\Delta Traffic) \\times (1 + \\%\\Delta CVR) \\times (1 + \\%\\Delta AOV)",
    faq: [
      { question: "How does compounding growth work in retail?", answer: "Simultaneous small improvements across traffic, conversion rates, and AOV compound together to drive significant revenue growth." },
      { question: "Which growth lever is easiest to scale?", answer: "Increasing Average Order Value (AOV) through bundle deals and cross-selling is often the most cost-effective lever to scale." }
    ]
  }
];
