import { CalculatorConfig } from "./calculator-types";

export const ECOMMERCE_CALCULATORS_EXTENDED_C: CalculatorConfig[] = [
  {
    id: "product-return-eligibility",
    name: "Product Return Eligibility Calculator",
    description: "Determine whether a product purchase is still eligible for return under store policies.",
    category: "Ecommerce",
    subcategory: "Customer & Return Policies",
    inputs: [
      { id: "daysSincePurchase", name: "Days Since Purchase", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "policyLimit", name: "Policy Return Window (Days)", type: "number", defaultValue: 30, placeholder: "30" },
      { id: "isOpened", name: "Is Item Opened? (1 = Yes, 0 = No)", type: "number", defaultValue: 0, placeholder: "0" },
      { id: "hasReceipt", name: "Has Receipt? (1 = Yes, 0 = No)", type: "number", defaultValue: 1, placeholder: "1" },
    ],
    outputs: [
      { id: "isEligible", name: "Return Eligible (1 = Yes, 0 = No)", type: "number", formatter: "number" },
      { id: "daysRemaining", name: "Days Remaining to Return", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const days = inputs.daysSincePurchase || 0;
      const limit = inputs.policyLimit || 0;
      const opened = inputs.isOpened || 0;
      const receipt = inputs.hasReceipt || 0;

      const daysRemaining = Math.max(0, limit - days);
      const isEligible = (days <= limit && receipt === 1 && opened === 0) ? 1 : 0;

      return { isEligible, daysRemaining };
    },
    formulaExplanation: "Return eligibility is calculated based on whether the days elapsed since purchase are within the return policy limit, the receipt is present, and the product packaging remains unopened.",
    scientificFormula: "Eligibility = (Days \\le Policy\\ Limit) \\land (Receipt == 1) \\land (Opened == 0)",
    faq: [
      { question: "What factors affect return eligibility?", answer: "Normally, return window duration, original receipt presence, and item packaging status (opened vs unopened) are the primary determinants." },
      { question: "Can I return an item without a receipt?", answer: "Most ecommerce policies either deny return or offer store credit rather than a full refund when a receipt is missing." }
    ]
  },
  {
    id: "ecommerce-loyalty-points",
    name: "Ecommerce Loyalty Points Calculator",
    description: "Calculate points earned on a purchase and their monetary value based on customer loyalty tiers.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "purchaseAmount", name: "Purchase Amount ($)", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "pointsPerDollar", name: "Base Points per Dollar", type: "number", defaultValue: 5, placeholder: "5" },
      { id: "tierMultiplier", name: "Tier Multiplier (e.g. 1.5 for Gold)", type: "number", defaultValue: 1.5, placeholder: "1.5" },
    ],
    outputs: [
      { id: "pointsEarned", name: "Loyalty Points Earned", type: "number", formatter: "number" },
      { id: "monetaryValue", name: "Points Redemptive Value ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const spend = inputs.purchaseAmount || 0;
      const base = inputs.pointsPerDollar || 0;
      const mult = inputs.tierMultiplier || 1;

      const pointsEarned = Math.round(spend * base * mult);
      const monetaryValue = pointsEarned * 0.01; // Assume 1 point = $0.01

      return { pointsEarned, monetaryValue };
    },
    formulaExplanation: "Total loyalty points are earned by multiplying the purchase amount by the base rate and the member tier multiplier. Redemptive value is calculated assuming 100 points equals $1.00.",
    scientificFormula: "Points = Purchase\\ Amount \\times Base\\ Rate \\times Tier\\ Multiplier",
    faq: [
      { question: "How do loyalty tiers usually work?", answer: "Higher spending tiers (like Silver, Gold, or Platinum) grant a multiplier on points earned per dollar spent, accelerating rewards." },
      { question: "What is the typical value of a loyalty point?", answer: "Usually, loyalty points are worth 1 cent ($0.01) each, meaning 100 points can be redeemed for $1.00." }
    ]
  },
  {
    id: "flash-sale-countdown",
    name: "Flash Sale Countdown Calculator",
    description: "Calculate remaining minutes and seconds based on total duration and elapsed percentage.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "saleDurationHours", name: "Total Sale Duration (Hours)", type: "number", defaultValue: 4, placeholder: "4" },
      { id: "percentElapsed", name: "Percent Elapsed (%)", type: "number", defaultValue: 35, placeholder: "35" },
    ],
    outputs: [
      { id: "minutesRemaining", name: "Minutes Remaining", type: "number", formatter: "number" },
      { id: "secondsRemaining", name: "Seconds Remaining", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const totalHours = inputs.saleDurationHours || 0;
      const elapsedPct = inputs.percentElapsed || 0;

      const totalSeconds = totalHours * 3600;
      const elapsedSeconds = totalSeconds * (elapsedPct / 100);
      const remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);

      const minutesRemaining = Math.floor(remainingSeconds / 60);
      const secondsRemaining = Math.round(remainingSeconds % 60);

      return { minutesRemaining, secondsRemaining };
    },
    formulaExplanation: "Finds the remaining duration in minutes and seconds based on the portion of the countdown that has already elapsed.",
    scientificFormula: "Remaining\\ Seconds = (Duration \\times 3600) \\times (1 - \\frac{Percent\\ Elapsed}{100})",
    faq: [
      { question: "Why do flash sales use countdown timers?", answer: "Countdown timers leverage urgency and FOMO (Fear Of Missing Out) to prompt faster buying decisions from visitors." },
      { question: "What is an optimal flash sale duration?", answer: "Short windows like 2 to 6 hours create high conversion spikes and clear out inventory fast." }
    ]
  },
  {
    id: "marketplace-competition",
    name: "Marketplace Competition Calculator",
    description: "Calculate a competition density score and market saturation index.",
    category: "Ecommerce",
    subcategory: "Market Analysis",
    inputs: [
      { id: "competitorCount", name: "Active Competitors on Listing", type: "number", defaultValue: 12, placeholder: "12" },
      { id: "avgCompetitorRating", name: "Avg Competitor Rating (1-5 Stars)", type: "number", defaultValue: 4.2, placeholder: "4.2" },
      { id: "pricePremiumPct", name: "Your Price Premium vs Market (%)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "competitionIndex", name: "Competition Score (0-100)", type: "number", formatter: "number" },
      { id: "marketSaturated", name: "Market Saturated (1 = Yes, 0 = No)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const competitors = inputs.competitorCount || 0;
      const rating = inputs.avgCompetitorRating || 3;
      const premium = inputs.pricePremiumPct || 0;

      // Base formula for competition score
      const competitionIndex = Math.min(100, Math.max(0, (competitors * 4) + (rating * 8) + (premium * 1.5)));
      const marketSaturated = competitionIndex > 75 ? 1 : 0;

      return { competitionIndex: Math.round(competitionIndex), marketSaturated };
    },
    formulaExplanation: "The competition score evaluates density based on total rival listings, their average star reviews, and how much higher your price point is compared to the competitor base.",
    scientificFormula: "Competition\\ Index = \\min(100, (Competitors \\times 4) + (Rating \\times 8) + (Premium \\times 1.5))",
    faq: [
      { question: "What is a high competition index?", answer: "Any rating above 70 indicates a highly saturated listing page where securing the Buy Box will require low prices or exceptional seller metrics." },
      { question: "How can I compete in a saturated marketplace?", answer: "Focus on obtaining better reviews, optimizing product bullet points, and using strategic fulfillment methods like FBA." }
    ]
  },
  {
    id: "product-scarcity-index",
    name: "Product Scarcity Calculator",
    description: "Measure the scarcity value score to optimize pricing and leverage inventory warnings.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "stockLevel", name: "Current Stock Level (Units)", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "dailySales", name: "Average Daily Sales (Units)", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "highDemandMultiplier", name: "High Demand Factor (1-3)", type: "number", defaultValue: 1.5, placeholder: "1.5" },
    ],
    outputs: [
      { id: "scarcityIndex", name: "Scarcity Index (0-100)", type: "number", formatter: "number" },
      { id: "urgencyTrigger", name: "Show Urgency Banner? (1 = Yes, 0 = No)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const stock = inputs.stockLevel || 0;
      const sales = inputs.dailySales || 0.1;
      const mult = inputs.highDemandMultiplier || 1;

      const daysRemaining = stock / sales;
      const rawScarcity = (100 / Math.max(1, daysRemaining)) * mult;
      const scarcityIndex = Math.min(100, Math.max(0, rawScarcity));
      const urgencyTrigger = (scarcityIndex > 60 || stock <= 5) ? 1 : 0;

      return { scarcityIndex: Math.round(scarcityIndex), urgencyTrigger };
    },
    formulaExplanation: "Calculates scarcity by evaluating the days of remaining inventory under high-demand scenarios. Low stock with fast sales yields a maximum score.",
    scientificFormula: "Scarcity\\ Index = \\min\\left(100, \\frac{100}{\\text{Days of Stock}} \\times \\text{Demand\\ Multiplier}\\right)",
    faq: [
      { question: "How does scarcity increase conversion rate?", answer: "Indicating low stock levels (e.g. 'Only 3 left!') creates immediate purchase triggers, reducing cart abandonment." },
      { question: "What is an urgency banner threshold?", answer: "Commonly triggered when stock drops below 10 units or if there's less than 3 days of supply left." }
    ]
  },
  {
    id: "conversion-probability",
    name: "Ecommerce Conversion Probability Calculator",
    description: "Determine conversion probability based on visitor session funnels.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "visitCount", name: "Total Session Visits", type: "number", defaultValue: 1000, placeholder: "1000" },
      { id: "addtoCartCount", name: "Adds to Cart", type: "number", defaultValue: 80, placeholder: "80" },
      { id: "checkoutStartCount", name: "Checkouts Initiated", type: "number", defaultValue: 40, placeholder: "40" },
    ],
    outputs: [
      { id: "purchaseProbability", name: "Expected Conversion Probability (%)", type: "number", formatter: "percentage" },
      { id: "abandonmentRisk", name: "Overall Abandonment Risk (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const visits = inputs.visitCount || 1;
      const carts = inputs.addtoCartCount || 0;
      const checkouts = inputs.checkoutStartCount || 0;

      const cartRate = carts / visits;
      const checkoutRate = checkouts / Math.max(1, carts);
      const purchaseProb = (cartRate * checkoutRate * 0.8) * 100; // Expected final payout coefficient
      const abandonmentRisk = 100 - purchaseProb;

      return { purchaseProbability: Math.min(100, purchaseProb), abandonmentRisk: Math.max(0, abandonmentRisk) };
    },
    formulaExplanation: "Calculates overall conversion probability using compounding step rates along the standard add-to-cart and checkout checkout funnel.",
    scientificFormula: "Probability = \\frac{Carts}{Visits} \\times \\frac{Checkouts}{Carts} \\times 80\\%",
    faq: [
      { question: "Why is checkout initiation rate critical?", answer: "It reveals deep funnel conversion. High cart-adds with zero checkouts pointing to unexpected shipping fees or poor payments trust." },
      { question: "What is a healthy ecommerce conversion probability?", answer: "Typical site-wide conversion sits between 1.5% and 3% globally." }
    ]
  },
  {
    id: "dynamic-shipping-rate",
    name: "Dynamic Shipping Calculator",
    description: "Compute shipping charges dynamically adjusted for cart totals and distances.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "orderValue", name: "Order Total Amount ($)", type: "number", defaultValue: 75, placeholder: "75" },
      { id: "shippingDistance", name: "Shipping Distance (Miles)", type: "number", defaultValue: 450, placeholder: "450" },
      { id: "weight", name: "Weight of Package (lbs)", type: "number", defaultValue: 4.5, placeholder: "4.5" },
      { id: "isExpress", name: "Express Shipping? (1 = Yes, 0 = No)", type: "number", defaultValue: 0, placeholder: "0" },
    ],
    outputs: [
      { id: "shippingFee", name: "Dynamic Shipping Fee ($)", type: "number", formatter: "currency" },
      { id: "estimatedDays", name: "Fulfillment Transit (Days)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const total = inputs.orderValue || 0;
      const dist = inputs.shippingDistance || 0;
      const wt = inputs.weight || 0;
      const express = inputs.isExpress || 0;

      // Free shipping threshold
      if (total >= 100 && express === 0) {
        return { shippingFee: 0, estimatedDays: Math.max(1, Math.round(dist / 200)) };
      }

      const baseFee = 4.99;
      const distanceCost = dist * 0.01;
      const weightCost = wt * 0.50;
      const expressCost = express === 1 ? 15.00 : 0;

      const shippingFee = baseFee + distanceCost + weightCost + expressCost;
      const estimatedDays = express === 1 ? 1 : Math.max(2, Math.round(dist / 150));

      return { shippingFee, estimatedDays };
    },
    formulaExplanation: "Combines a flat handling fee, a distance multiplier, and weight-based surcharges, unless the cart exceeds $100 in value, which waives standard shipping costs.",
    scientificFormula: "Fee = Base\\ Fee + (Distance \\times 0.01) + (Weight \\times 0.50) + Express\\ Premium",
    faq: [
      { question: "Why do stores offer free shipping thresholds?", answer: "It significantly increases Average Order Value (AOV), as shoppers add extra items to their carts to meet the target." },
      { question: "How does distance affect shipping transit?", answer: "Typical domestic ground carriers cover around 150 to 250 miles per day of transit." }
    ]
  },
  {
    id: "product-shelf-life",
    name: "Product Shelf Life Calculator",
    description: "Determine remaining quality and expiration metrics based on storage temp and age.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "manufactureDaysAgo", name: "Days Since Manufacture", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "shelfLifeDays", name: "Standard Shelf Life (Days)", type: "number", defaultValue: 180, placeholder: "180" },
      { id: "storageTempFahrenheit", name: "Storage Temperature (°F)", type: "number", defaultValue: 72, placeholder: "72" },
    ],
    outputs: [
      { id: "remainingShelfLife", name: "Remaining Shelf Life (Days)", type: "number", formatter: "number" },
      { id: "qualityPercentage", name: "Retained Quality (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const age = inputs.manufactureDaysAgo || 0;
      const totalLife = inputs.shelfLifeDays || 1;
      const temp = inputs.storageTempFahrenheit || 68;

      // Quality degradation multiplier based on temp (Arrhenius approximation)
      const tempFactor = temp > 70 ? 1 + (temp - 70) * 0.03 : 1;
      const effectiveAge = age * tempFactor;

      const remainingShelfLife = Math.max(0, Math.round(totalLife - effectiveAge));
      const qualityPercentage = Math.max(0, Math.round(((totalLife - effectiveAge) / totalLife) * 100));

      return { remainingShelfLife, qualityPercentage };
    },
    formulaExplanation: "Calculates product degradation using temperature-sensitive multipliers. High warehouse storage temperatures increase quality decay rates exponentially.",
    scientificFormula: "Effective\\ Age = Age \\times (1 + \\max(0, Temp - 70) \\times 0.03)",
    faq: [
      { question: "How does temperature affect shelf life?", answer: "Storage above optimal baseline increases kinetic decay and microbial growth, decreasing overall consumable quality." },
      { question: "Why is shelf life tracking vital in ecommerce?", answer: "Selling expired products triggers severe customer disputes, high returns, and potential legal compliance issues." }
    ]
  },
  {
    id: "customer-repeat-order",
    name: "Customer Repeat Order Calculator",
    description: "Track loyalty index based on total orders vs unique customers count.",
    category: "Ecommerce",
    subcategory: "Customer & Retention",
    inputs: [
      { id: "totalOrders", name: "Total Orders Placed", type: "number", defaultValue: 2500, placeholder: "2500" },
      { id: "uniqueCustomers", name: "Unique Customers Count", type: "number", defaultValue: 1800, placeholder: "1800" },
    ],
    outputs: [
      { id: "repeatOrderRate", name: "Repeat Order Rate (%)", type: "number", formatter: "percentage" },
      { id: "averageOrders", name: "Avg Orders per Customer", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const orders = inputs.totalOrders || 0;
      const customers = inputs.uniqueCustomers || 1;

      const repeatRate = orders > customers ? ((orders - customers) / orders) * 100 : 0;
      const averageOrders = orders / customers;

      return { repeatOrderRate: repeatRate, averageOrders };
    },
    formulaExplanation: "Measures return customers count. A high rate denotes strong brand loyalty and solid products quality.",
    scientificFormula: "Repeat\\ Rate = \\frac{Orders - Customers}{Orders} \\times 100\\%",
    faq: [
      { question: "What is a strong repeat purchase rate?", answer: "A healthy repeat rate sits between 20% and 35% for average retail stores." },
      { question: "How do I increase repeat purchases?", answer: "Use loyalty programs, post-purchase email flows, coupons for future orders, and high customer support standards." }
    ]
  },
  {
    id: "ecommerce-fraud-detection",
    name: "Ecommerce Fraud Detection Calculator",
    description: "Determine order risk index before dispatching high-value items.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "failedAttempts", name: "Failed Checkout Attempts", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "orderAmount", name: "Order Payout Amount ($)", type: "number", defaultValue: 650, placeholder: "650" },
      { id: "isIpMatchesBilling", name: "IP Country Matches Billing? (1 = Yes, 0 = No)", type: "number", defaultValue: 0, placeholder: "0" },
      { id: "isNewCustomer", name: "Is First Time Customer? (1 = Yes, 0 = No)", type: "number", defaultValue: 1, placeholder: "1" },
    ],
    outputs: [
      { id: "riskScore", name: "Risk Score (0 - 100)", type: "number", formatter: "number" },
      { id: "isFlagged", name: "Flag for Manual Review? (1 = Yes, 0 = No)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const attempts = inputs.failedAttempts || 0;
      const amount = inputs.orderAmount || 0;
      const ipMatch = inputs.isIpMatchesBilling || 0;
      const newCust = inputs.isNewCustomer || 0;

      let risk = 0;
      risk += attempts * 15;
      risk += amount > 500 ? 20 : 5;
      risk += ipMatch === 0 ? 35 : 0;
      risk += newCust === 1 ? 15 : 0;

      const riskScore = Math.min(100, risk);
      const isFlagged = riskScore >= 50 ? 1 : 0;

      return { riskScore, isFlagged };
    },
    formulaExplanation: "Compiles a fraud threat matrix evaluating checkouts failed, location anomalies (IP billing mismatch), transaction sizes, and profile aging status.",
    scientificFormula: "Risk = (Attempts \\times 15) + Size\\ Penalty + IP\\ Mismatch\\ Surcharge + Profile\\ Factor",
    faq: [
      { question: "What factors trigger high-risk fraud flags?", answer: "Mismatching credit card countries vs shipping addresses, anonymous proxy IPs, and multiple rapid card declines are primary flags." },
      { question: "What should I do if an order is flagged?", answer: "Always contact the customer directly to confirm details or use third-party tools to verify billing authenticity." }
    ]
  },
  {
    id: "cashback-reward",
    name: "Cashback Reward Calculator",
    description: "Determine the exact cashback points and savings for promotional reward plans.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "spendAmount", name: "Total Spending ($)", type: "number", defaultValue: 250, placeholder: "250" },
      { id: "cashbackPct", name: "Cashback Rate (%)", type: "number", defaultValue: 5, placeholder: "5" },
    ],
    outputs: [
      { id: "cashbackEarned", name: "Cashback Amount Earned ($)", type: "number", formatter: "currency" },
      { id: "netCost", name: "Net Purchase Cost ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const spend = inputs.spendAmount || 0;
      const pct = inputs.cashbackPct || 0;

      const cashbackEarned = spend * (pct / 100);
      const netCost = spend - cashbackEarned;

      return { cashbackEarned, netCost };
    },
    formulaExplanation: "Calculates net purchase cost and points return after applying cashback percentages directly onto raw cart spending.",
    scientificFormula: "Cashback = Spend \\times \\frac{Rate}{100}",
    faq: [
      { question: "Does cashback boost store loyalty?", answer: "Yes, store-credit rewards encourage return sessions as buyers seek to spend their accrued reward balances." },
      { question: "How does store credit cashback compare to immediate discounts?", answer: "Immediate discounts lower transaction size directly, while cashback preserves original order margins and secures a second purchase session." }
    ]
  },
  {
    id: "variant-profit",
    name: "Product Variant Profit Calculator",
    description: "Compare net profit margin structures across different color/size variants.",
    category: "Ecommerce",
    subcategory: "Pricing & Profit",
    inputs: [
      { id: "sellingPrice", name: "Variant Selling Price ($)", type: "number", defaultValue: 45, placeholder: "45" },
      { id: "cogs", name: "Cost of Goods (COGS) ($)", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "shippingFee", name: "Variant Shipping Cost ($)", type: "number", defaultValue: 4.5, placeholder: "4.5" },
      { id: "marketingFee", name: "Acquisition Cost per Sale ($)", type: "number", defaultValue: 8, placeholder: "8" },
    ],
    outputs: [
      { id: "variantNetProfit", name: "Variant Net Profit ($)", type: "number", formatter: "currency" },
      { id: "marginPct", name: "Net Profit Margin (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const price = inputs.sellingPrice || 0;
      const cost = inputs.cogs || 0;
      const ship = inputs.shippingFee || 0;
      const promo = inputs.marketingFee || 0;

      const profit = price - cost - ship - promo;
      const margin = price > 0 ? (profit / price) * 100 : 0;

      return { variantNetProfit: profit, marginPct: margin };
    },
    formulaExplanation: "Deducts material cost, postage, and promotional costs from the retail price to output dynamic variant-level earnings.",
    scientificFormula: "Profit = Price - COGS - Shipping - Acquisition",
    faq: [
      { question: "Why do product variants have different margins?", answer: "Heavier items cost more to ship, and customized colors might cost extra to manufacture, despite selling for the same base price." },
      { question: "How can I improve variant profitability?", answer: "Implement size/weight-based dynamic surcharges or adjust price points of expensive variations accordingly." }
    ]
  },
  {
    id: "session-duration-analyzer",
    name: "Ecommerce Session Duration Calculator",
    description: "Analyze web session engagement statistics based on timing and total pageviews.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "totalTimeSeconds", name: "Total Session Time (Seconds)", type: "number", defaultValue: 240, placeholder: "240" },
      { id: "pageViews", name: "Total Page Views", type: "number", defaultValue: 6, placeholder: "6" },
    ],
    outputs: [
      { id: "avgTimePerPage", name: "Avg Time per Page (Seconds)", type: "number", formatter: "number" },
      { id: "bounceProbability", name: "Estimated Bounce Probability (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const time = inputs.totalTimeSeconds || 0;
      const views = inputs.pageViews || 1;

      const avgTime = time / views;
      const bounceProb = views === 1 ? 95 : Math.max(5, 100 - (views * 12) - (time * 0.05));

      return { avgTimePerPage: Math.round(avgTime), bounceProbability: Math.min(100, Math.max(0, bounceProb)) };
    },
    formulaExplanation: "Calculates average time spent per page. A high duration combined with multiple views points to an organic buying intent.",
    scientificFormula: "Avg\\ Time = \\frac{Total\\ Time}{Page\\ Views}",
    faq: [
      { question: "What is a good average session duration?", answer: "Anything above 2 minutes is considered high, representing structured reader interaction or catalog browsing." },
      { question: "How do I lower bounce probability?", answer: "Improve visual theme quality, speed up page loads, and offer clear conversion paths." }
    ]
  },
  {
    id: "wishlist-conversion",
    name: "Customer Wish List Calculator",
    description: "Forecast expected conversion and demand from wish list actions.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "wishListAdds", name: "Total Wish List Adds", type: "number", defaultValue: 450, placeholder: "450" },
      { id: "expectedConversionRate", name: "Expected Purchase Rate (%)", type: "number", defaultValue: 8, placeholder: "8" },
    ],
    outputs: [
      { id: "predictedSalesUnits", name: "Predicted Sales (Units)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const adds = inputs.wishListAdds || 0;
      const rate = inputs.expectedConversionRate || 0;

      const predictedSalesUnits = Math.round(adds * (rate / 100));

      return { predictedSalesUnits };
    },
    formulaExplanation: "Predicts future demand using wish list clickthrough metrics. Helps forecast purchase trends before coupon drops.",
    scientificFormula: "Sales = Adds \\times \\frac{Rate}{100}",
    faq: [
      { question: "Are wish lists a strong buy signal?", answer: "Yes, they denote high intent. Sending automated reminder emails when wish-listed items go on sale significantly increases conversion rates." },
      { question: "What is an average wish-list purchase rate?", answer: "Usually, around 5% to 15% of wish-listed products are eventually purchased." }
    ]
  },
  {
    id: "product-availability-ratio",
    name: "Product Availability Calculator",
    description: "Determine net sellable stock inventory after safety reservations.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "inStockUnits", name: "Total Physical Stock", type: "number", defaultValue: 150, placeholder: "150" },
      { id: "reservedUnits", name: "Reserved for Promotions", type: "number", defaultValue: 15, placeholder: "15" },
      { id: "pendingShipments", name: "Pending Shipments", type: "number", defaultValue: 25, placeholder: "25" },
    ],
    outputs: [
      { id: "availableUnits", name: "Available Sellable Stock", type: "number", formatter: "number" },
      { id: "safetyBufferPct", name: "Safety Buffer Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const stock = inputs.inStockUnits || 0;
      const res = inputs.reservedUnits || 0;
      const ship = inputs.pendingShipments || 0;

      const availableUnits = Math.max(0, stock - res - ship);
      const safetyBufferPct = stock > 0 ? ((res + ship) / stock) * 100 : 0;

      return { availableUnits, safetyBufferPct };
    },
    formulaExplanation: "Finds net sellable capacity by subtracting promotional buffer volumes and unfulfilled carrier shipments from raw inventory metrics.",
    scientificFormula: "Available = Physical - Reserved - Pending",
    faq: [
      { question: "Why is reserving stock important?", answer: "It prevents overselling during marketing events and safeguards fulfillment SLA timelines." },
      { question: "How does overselling impact ratings?", answer: "Overselling leads to delayed shipments or cancelled orders, which severely hurts store reputation and listing rankings." }
    ]
  },
  {
    id: "store-traffic-heatmap",
    name: "Store Traffic Heatmap Calculator",
    description: "Map conversion drops across key website page categories.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "totalLandingVisits", name: "Homepage/Landing Page Visits", type: "number", defaultValue: 10000, placeholder: "10000" },
      { id: "cartVisits", name: "Cart View Page Visits", type: "number", defaultValue: 2500, placeholder: "2500" },
      { id: "checkoutVisits", name: "Checkout Page Initiations", type: "number", defaultValue: 800, placeholder: "800" },
    ],
    outputs: [
      { id: "cartDropPct", name: "Landing-to-Cart Drop Rate (%)", type: "number", formatter: "percentage" },
      { id: "checkoutDropPct", name: "Cart-to-Checkout Drop Rate (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const landing = inputs.totalLandingVisits || 1;
      const cart = inputs.cartVisits || 0;
      const checkout = inputs.checkoutVisits || 0;

      const cartDropPct = ((landing - cart) / landing) * 100;
      const checkoutDropPct = cart > 0 ? ((cart - checkout) / cart) * 100 : 0;

      return { cartDropPct, checkoutDropPct };
    },
    formulaExplanation: "Analyzes step-by-step visitor dropping statistics. Helps merchants locate high-friction sections along the checkout funnel.",
    scientificFormula: "Drop\\ Rate = \\frac{PreStep - PostStep}{PreStep} \\times 100\\%",
    faq: [
      { question: "What is a normal Landing-to-Cart drop rate?", answer: "Typically, around 70% to 90% of landing page visitors drop before adding an item to the cart." },
      { question: "How do I fix a high cart-to-checkout drop rate?", answer: "Provide quick checkout options (Apple Pay, Shop Pay), display trust badges, and avoid mandatory account creations." }
    ]
  },
  {
    id: "checkout-speed",
    name: "Ecommerce Checkout Speed Calculator",
    description: "Analyze checkout speed and friction scores to limit abandoned carts.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "checkoutSteps", name: "Number of Checkout Steps", type: "number", defaultValue: 4, placeholder: "4" },
      { id: "avgSecondsPerStep", name: "Avg Time spent per Step (Seconds)", type: "number", defaultValue: 20, placeholder: "20" },
      { id: "isOneClickCheckout", name: "One-Click/Express Enabled? (1 = Yes, 0 = No)", type: "number", defaultValue: 0, placeholder: "0" },
    ],
    outputs: [
      { id: "totalCheckoutSeconds", name: "Total Checkout Time (Seconds)", type: "number", formatter: "number" },
      { id: "frictionScore", name: "Friction Index (0 - 100)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const steps = inputs.checkoutSteps || 1;
      const sec = inputs.avgSecondsPerStep || 0;
      const oneClick = inputs.isOneClickCheckout || 0;

      let total = steps * sec;
      if (oneClick === 1) total = Math.min(total, 5);

      const frictionScore = oneClick === 1 ? 5 : Math.min(100, (steps * 15) + (sec * 1.2));

      return { totalCheckoutSeconds: total, frictionScore: Math.round(frictionScore) };
    },
    formulaExplanation: "Evaluates conversion friction based on total checkout steps and field filling speeds. A faster speed is proven to raise conversion rates.",
    scientificFormula: "Friction = (Steps \\times 15) + (SecPerStep \\times 1.2)",
    faq: [
      { question: "How does checkout speed impact cart abandonment?", answer: "For every additional second a checkout takes, conversion drops by up to 7%. Streamlining forms is crucial." },
      { question: "What is an ideal checkout friction score?", answer: "Any score under 30 represents a highly optimized, low-friction purchasing experience." }
    ]
  },
  {
    id: "multi-store-revenue",
    name: "Multi-Store Revenue Calculator",
    description: "Aggregate sales volumes and channel share across multiple marketplace fronts.",
    category: "Ecommerce",
    subcategory: "Market Analysis",
    inputs: [
      { id: "shopifyRevenue", name: "Shopify Store Revenue ($)", type: "number", defaultValue: 15000, placeholder: "15000" },
      { id: "amazonRevenue", name: "Amazon Payouts ($)", type: "number", defaultValue: 28000, placeholder: "28000" },
      { id: "ebayRevenue", name: "eBay Payouts ($)", type: "number", defaultValue: 6500, placeholder: "6500" },
      { id: "otherRevenue", name: "Wholesale/Other Revenue ($)", type: "number", defaultValue: 4000, placeholder: "4000" },
    ],
    outputs: [
      { id: "totalRevenue", name: "Combined Brand Revenue ($)", type: "number", formatter: "currency" },
      { id: "shopifyShare", name: "Shopify Volume Share (%)", type: "number", formatter: "percentage" },
      { id: "amazonShare", name: "Amazon Volume Share (%)", type: "number", formatter: "percentage" },
    ],
    calculate: (inputs) => {
      const sh = inputs.shopifyRevenue || 0;
      const az = inputs.amazonRevenue || 0;
      const eb = inputs.ebayRevenue || 0;
      const ot = inputs.otherRevenue || 0;

      const total = sh + az + eb + ot;
      const shShare = total > 0 ? (sh / total) * 100 : 0;
      const azShare = total > 0 ? (az / total) * 100 : 0;

      return { totalRevenue: total, shopifyShare: shShare, amazonShare: azShare };
    },
    formulaExplanation: "Aggregates revenue across channels to calculate combined brand turnover and relative sales share per platform.",
    scientificFormula: "Total = Shopify + Amazon + eBay + Other",
    faq: [
      { question: "Why should brands track multi-store metrics?", answer: "Diversifying sales channels prevents platform reliance, and tracking channel shares helps optimize ad spending." },
      { question: "Which platform typically yields higher profit margins?", answer: "Self-hosted stores (like Shopify) usually yield higher margins than third-party marketplaces, which charge high referral fees." }
    ]
  },
  {
    id: "upsell-opportunity",
    name: "Product Upsell Opportunity Calculator",
    description: "Determine incremental revenue generated from upselling options during checkouts.",
    category: "Ecommerce",
    subcategory: "Sales & Promos",
    inputs: [
      { id: "baseProductPrice", name: "Base Product Price ($)", type: "number", defaultValue: 40, placeholder: "40" },
      { id: "upsellPrice", name: "Upsell Product Price ($)", type: "number", defaultValue: 65, placeholder: "65" },
      { id: "upsellConversionRate", name: "Upsell Acceptance Rate (%)", type: "number", defaultValue: 12, placeholder: "12" },
      { id: "visitorCount", name: "Total Monthly Buyers", type: "number", defaultValue: 1500, placeholder: "1500" },
    ],
    outputs: [
      { id: "incrementalRevenue", name: "Estimated Incremental Revenue ($)", type: "number", formatter: "currency" },
      { id: "newAov", name: "Expected New AOV ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const basePrice = inputs.baseProductPrice || 0;
      const upsellPrice = inputs.upsellPrice || 0;
      const rate = inputs.upsellConversionRate || 0;
      const buyers = inputs.visitorCount || 0;

      const priceDifference = upsellPrice - basePrice;
      const incrementalRevenue = buyers * (rate / 100) * priceDifference;
      const newAov = basePrice + ((rate / 100) * priceDifference);

      return { incrementalRevenue, newAov };
    },
    formulaExplanation: "Calculates the revenue increase from premium product upgrades by multiplying upgrade margins with buyer conversion percentages.",
    scientificFormula: "Incremental = Buyers \\times \\frac{Rate}{100} \\times (Upsell - Base)",
    faq: [
      { question: "What is checkout upselling?", answer: "Promoting an upgraded, premium, or bundled version of an item right before completing a purchase." },
      { question: "What are typical upsell conversion rates?", answer: "Optimized pre-purchase upsells typically capture 5% to 15% of checkout traffic." }
    ]
  },
  {
    id: "packaging-efficiency",
    name: "Ecommerce Packaging Efficiency Calculator",
    description: "Calculate packaging box space efficiency and dimensional weight factors.",
    category: "Ecommerce",
    subcategory: "Risk & Operations",
    inputs: [
      { id: "productVolume", name: "Product Cube Volume (cu in)", type: "number", defaultValue: 120, placeholder: "120" },
      { id: "boxVolume", name: "Box Cube Volume (cu in)", type: "number", defaultValue: 280, placeholder: "280" },
      { id: "actualWeight", name: "Actual Package Weight (lbs)", type: "number", defaultValue: 2.5, placeholder: "2.5" },
    ],
    outputs: [
      { id: "volumeEfficiency", name: "Package Volume Efficiency (%)", type: "number", formatter: "percentage" },
      { id: "dimensionalWeight", name: "Dimensional Weight (lbs)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const prodVol = inputs.productVolume || 1;
      const boxVol = inputs.boxVolume || 1;
      const wt = inputs.actualWeight || 0;

      const volumeEfficiency = (prodVol / boxVol) * 100;
      // Dim weight calculation (standard carrier divisor of 139)
      const dimensionalWeight = boxVol / 139;

      return { volumeEfficiency: Math.min(100, volumeEfficiency), dimensionalWeight };
    },
    formulaExplanation: "Measures package utilization percentages and calculates freight dimensional weight to prevent shipping volume penalties.",
    scientificFormula: "Efficiency = \\frac{Product\\ Volume}{Box\\ Volume} \\times 100\\%",
    faq: [
      { question: "What is dimensional weight?", answer: "Carriers charge based on spatial volume instead of physical weight if a package is exceptionally large relative to its mass." },
      { question: "How can I improve volume efficiency?", answer: "Switch to custom poly mailers for small non-fragile items and use correctly sized boxes to eliminate empty space." }
    ]
  },
  {
    id: "customer-cart-value",
    name: "Customer Cart Value Calculator",
    description: "Sum item counts and prices to generate real-time basket subtotals.",
    category: "Ecommerce",
    subcategory: "Cart & Orders",
    inputs: [
      { id: "item1Price", name: "Item 1 Unit Price ($)", type: "number", defaultValue: 12.99, placeholder: "12.99" },
      { id: "item1Qty", name: "Item 1 Quantity", type: "number", defaultValue: 2, placeholder: "2" },
      { id: "item2Price", name: "Item 2 Unit Price ($)", type: "number", defaultValue: 24.50, placeholder: "24.50" },
      { id: "item2Qty", name: "Item 2 Quantity", type: "number", defaultValue: 1, placeholder: "1" },
    ],
    outputs: [
      { id: "cartSubtotal", name: "Total Basket Subtotal ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const p1 = inputs.item1Price || 0;
      const q1 = inputs.item1Qty || 0;
      const p2 = inputs.item2Price || 0;
      const q2 = inputs.item2Qty || 0;

      const cartSubtotal = (p1 * q1) + (p2 * q2);

      return { cartSubtotal };
    },
    formulaExplanation: "Multiplies item quantities by their unit prices and sums the products to generate a baseline cart subtotal.",
    scientificFormula: "Subtotal = \\sum (Price_i \\times Quantity_i)",
    faq: [
      { question: "How does cart subtotal differ from total price?", answer: "Subtotals do not include shipping fees, local taxes, or coupon code deductions, which are calculated at checkout." },
      { question: "Can I increase cart value with tier discounts?", answer: "Yes, offering tiered incentives like 'Spend $50, save 10%' is highly effective at boosting cart sizes." }
    ]
  },
  {
    id: "product-restock-alert",
    name: "Product Restock Alert Calculator",
    description: "Determine safety triggers and target inventory reordering thresholds.",
    category: "Ecommerce",
    subcategory: "Inventory & Supply",
    inputs: [
      { id: "leadTimeDays", name: "Supplier Lead Time (Days)", type: "number", defaultValue: 14, placeholder: "14" },
      { id: "dailyDemand", name: "Avg Units Sold per Day", type: "number", defaultValue: 8, placeholder: "8" },
      { id: "safetyStock", name: "Safety Stock Buffer (Units)", type: "number", defaultValue: 30, placeholder: "30" },
      { id: "currentStock", name: "Current Stock Level (Units)", type: "number", defaultValue: 180, placeholder: "180" },
    ],
    outputs: [
      { id: "reorderTriggerPoint", name: "Reorder Trigger Point (Units)", type: "number", formatter: "number" },
      { id: "daysToRestock", name: "Days Remaining Until Restock Alert", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const lead = inputs.leadTimeDays || 0;
      const demand = inputs.dailyDemand || 0.1;
      const buffer = inputs.safetyStock || 0;
      const stock = inputs.currentStock || 0;

      const reorderTriggerPoint = (lead * demand) + buffer;
      const daysToRestock = Math.max(0, Math.round((stock - reorderTriggerPoint) / demand));

      return { reorderTriggerPoint, daysToRestock };
    },
    formulaExplanation: "Calculates the reorder point by combining lead-time sales demands with safety stocks. Triggers alert schedules before out-of-stock events occur.",
    scientificFormula: "Reorder\\ Point = (Lead\\ Time \\times Demand) + Buffer",
    faq: [
      { question: "What is safety stock?", answer: "Safety stock acts as an inventory cushion to protect against unexpected sales spikes or supplier delivery delays." },
      { question: "How does running out of stock affect SEO?", answer: "Products marked 'Out of Stock' lose organic ranking on Google and Amazon as algorithms prioritize buyable alternatives." }
    ]
  },
  {
    id: "ai-recommendation",
    name: "Ecommerce AI Recommendation Calculator",
    description: "Analyze clickthrough and sales metrics driven by automated product recommendation widgets.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "clicksOnRecs", name: "Widget Clicks", type: "number", defaultValue: 350, placeholder: "350" },
      { id: "totalRecImpressions", name: "Widget Impressions", type: "number", defaultValue: 8500, placeholder: "8500" },
      { id: "averageRecOrderValue", name: "Avg Basket Value of Clicks ($)", type: "number", defaultValue: 95, placeholder: "95" },
    ],
    outputs: [
      { id: "clickThroughRate", name: "Widget CTR (%)", type: "number", formatter: "percentage" },
      { id: "recAttributedRevenue", name: "Attributed Conversion Value ($)", type: "number", formatter: "currency" },
    ],
    calculate: (inputs) => {
      const clicks = inputs.clicksOnRecs || 0;
      const imp = inputs.totalRecImpressions || 1;
      const value = inputs.averageRecOrderValue || 0;

      const clickThroughRate = (clicks / imp) * 100;
      // Estimate that 15% of recommender clicks convert
      const recAttributedRevenue = clicks * 0.15 * value;

      return { clickThroughRate, recAttributedRevenue };
    },
    formulaExplanation: "Measures widgets interaction density and calculates estimated conversions based on standard buyer conversion coefficients.",
    scientificFormula: "CTR = \\frac{Clicks}{Impressions} \\times 100\\%",
    faq: [
      { question: "Where should recommendation widgets be placed?", answer: "Key locations include product pages ('Customers also bought'), cart drawers, and post-purchase confirmation overlays." },
      { question: "What is a healthy CTR for recommendation widgets?", answer: "Typical widget CTR averages between 2% and 6% depending on personalization quality." }
    ]
  },
  {
    id: "shopping-trend-tracker",
    name: "Shopping Trend Calculator",
    description: "Track monthly growth trajectories and parse purchasing trends.",
    category: "Ecommerce",
    subcategory: "Market Analysis",
    inputs: [
      { id: "thisMonthSales", name: "Current Month Sales ($)", type: "number", defaultValue: 24000, placeholder: "24000" },
      { id: "lastMonthSales", name: "Last Month Sales ($)", type: "number", defaultValue: 20000, placeholder: "20000" },
      { id: "twoMonthsAgoSales", name: "Two Months Ago Sales ($)", type: "number", defaultValue: 18000, placeholder: "18000" },
    ],
    outputs: [
      { id: "growthRate", name: "Month-over-Month Growth (%)", type: "number", formatter: "percentage" },
      { id: "growthIndex", name: "Trend Direction (1 = Up, -1 = Down)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const current = inputs.thisMonthSales || 0;
      const prev = inputs.lastMonthSales || 1;
      const older = inputs.twoMonthsAgoSales || 1;

      const growthRate = ((current - prev) / prev) * 100;
      const growthIndex = (current > prev && prev > older) ? 1 : (current < prev && prev < older) ? -1 : 0;

      return { growthRate, growthIndex };
    },
    formulaExplanation: "Analyzes multi-period sales trends to output growth direction indicators, helping identify momentum changes.",
    scientificFormula: "Growth = \\frac{Current - Previous}{Previous} \\times 100\\%",
    faq: [
      { question: "Why is tracking trend direction valuable?", answer: "It allows merchants to scale up stock levels ahead of demand spikes or liquidate inventory before down-trends harden." },
      { question: "What is MoM growth rate?", answer: "Month-over-Month growth measures immediate month-level revenue velocity, distinct from seasonal year-over-year comparisons." }
    ]
  },
  {
    id: "user-behavior-score",
    name: "Ecommerce User Behavior Calculator",
    description: "Map scroll depth and micro-events to evaluate user purchase readiness.",
    category: "Ecommerce",
    subcategory: "Traffic & Performance",
    inputs: [
      { id: "scrollDepthPct", name: "Average Scroll Depth (%)", type: "number", defaultValue: 65, placeholder: "65" },
      { id: "timeOnPageSeconds", name: "Time spent on Page (Seconds)", type: "number", defaultValue: 90, placeholder: "90" },
      { id: "clickCount", name: "Total Interactions (Clicks/Hovers)", type: "number", defaultValue: 15, placeholder: "15" },
    ],
    outputs: [
      { id: "engagementScore", name: "Engagement Score (0 - 100)", type: "number", formatter: "number" },
    ],
    calculate: (inputs) => {
      const scroll = inputs.scrollDepthPct || 0;
      const time = inputs.timeOnPageSeconds || 0;
      const clicks = inputs.clickCount || 0;

      const rawScore = (scroll * 0.4) + (Math.min(300, time) * 0.1) + (clicks * 2);
      const engagementScore = Math.min(100, Math.max(0, rawScore));

      return { engagementScore: Math.round(engagementScore) };
    },
    formulaExplanation: "Aggregates scrolling depth, page session duration, and click metrics to score user buying intent.",
    scientificFormula: "Score = (Scroll \\times 0.4) + (Time \\times 0.1) + (Clicks \\times 2)",
    faq: [
      { question: "What does an engagement score above 70 indicate?", answer: "It signals high intent. Shoppers with high scores are excellent targets for exit-intent popups with coupon triggers." },
      { question: "How can I improve scroll depth?", answer: "Reduce page header height, place compelling content above the fold, and maintain clean visual hierarchies." }
    ]
  }
];
