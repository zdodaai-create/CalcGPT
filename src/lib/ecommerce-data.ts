import { ShoppingCart, DollarSign, TrendingUp, Package, Users, BarChart2 } from 'lucide-react';

export const ECOMMERCE_DATA = [
  {
    id: 'pricing-profit',
    name: 'Pricing & Profit',
    description: 'Calculate margins, discounts, pricing, and product profitability.',
    icon: DollarSign,
    color: 'bg-green-500',
    calculators: [
      { name: 'Product Profit Calculator', slug: 'product-profit-calculator' },
      { name: 'Product Margin Calculator', slug: 'product-margin-calculator' },
      { name: 'Product Pricing Calculator', slug: 'product-pricing-calculator' },
      { name: 'Product Discount Calculator', slug: 'product-discount-calculator' },
      { name: 'Coupon Savings Calculator', slug: 'coupon-savings-calculator' },
      { name: 'Seller Profit Margin Calculator', slug: 'seller-profit-margin-calculator' },
      { name: 'Dropshipping Profit Calculator', slug: 'dropshipping-profit-calculator' },
      { name: 'Dynamic Pricing Calculator', slug: 'dynamic-pricing-calculator' },
      { name: 'Flash Sale Profit Calculator', slug: 'flash-sale-profit-calculator' },
      { name: 'Product Bundle Savings Calculator', slug: 'product-bundle-savings-calculator' },
    ]
  },
  {
    id: 'revenue-growth',
    name: 'Revenue & Growth',
    description: 'Track revenue, forecasts, ROI and growth metrics.',
    icon: TrendingUp,
    color: 'bg-blue-500',
    calculators: [
      { name: 'Ecommerce Revenue Calculator', slug: 'ecommerce-revenue-calculator' },
      { name: 'Ecommerce ROI Calculator', slug: 'ecommerce-roi-calculator' },
      { name: 'Sales Forecast Calculator', slug: 'ecommerce-sales-forecast-calculator' },
      { name: 'Ecommerce Growth Calculator', slug: 'ecommerce-growth-calculator' },
      { name: 'Subscription Revenue Calculator', slug: 'ecommerce-subscription-revenue-calculator' },
      { name: 'Cross-sell Revenue Calculator', slug: 'cross-sell-revenue-calculator' },
      { name: 'Upsell Revenue Calculator', slug: 'upsell-revenue-calculator' },
      { name: 'Marketplace ROI Calculator', slug: 'marketplace-roi-calculator' },
      { name: 'Affiliate Earnings Calculator', slug: 'ecommerce-affiliate-earnings-calculator' },
      { name: 'Ecommerce KPI Calculator', slug: 'ecommerce-kpi-calculator' },
    ]
  },
  {
    id: 'cart-orders',
    name: 'Cart & Orders',
    description: 'Analyze cart abandonment, order values, and fulfillment.',
    icon: ShoppingCart,
    color: 'bg-orange-500',
    calculators: [
      { name: 'Shopping Cart Abandonment Calculator', slug: 'shopping-cart-abandonment-calculator' },
      { name: 'Average Order Value Calculator', slug: 'ecommerce-aov-calculator' },
      { name: 'Order Fulfillment Calculator', slug: 'order-fulfillment-calculator' },
      { name: 'Ecommerce Break-even Calculator', slug: 'ecommerce-break-even-calculator' },
      { name: 'Cost Per Purchase Calculator', slug: 'cost-per-purchase-calculator' },
      { name: 'Ecommerce Tax Calculator', slug: 'ecommerce-tax-calculator' },
      { name: 'GST Ecommerce Calculator', slug: 'gst-ecommerce-calculator' },
      { name: 'COD Charges Calculator', slug: 'cod-charges-calculator' },
      { name: 'Shipping Cost Calculator', slug: 'ecommerce-shipping-cost-calculator' },
      { name: 'Shipping Profit Calculator', slug: 'shipping-profit-calculator' },
    ]
  },
  {
    id: 'inventory-supply',
    name: 'Inventory & Supply',
    description: 'Manage stock levels, warehouse costs and restocking.',
    icon: Package,
    color: 'bg-purple-500',
    calculators: [
      { name: 'Inventory Turnover Calculator', slug: 'ecommerce-inventory-turnover-calculator' },
      { name: 'Product Stock Calculator', slug: 'product-stock-calculator' },
      { name: 'Restock Prediction Calculator', slug: 'restock-prediction-calculator' },
      { name: 'Warehouse Cost Calculator', slug: 'warehouse-cost-calculator' },
      { name: 'Delivery Time Calculator', slug: 'delivery-time-calculator' },
      { name: 'Marketplace Fee Calculator', slug: 'marketplace-fee-calculator' },
      { name: 'Multi-Vendor Commission Calculator', slug: 'multi-vendor-commission-calculator' },
      { name: 'Ecommerce Commission Calculator', slug: 'ecommerce-commission-calculator' },
      { name: 'Return Rate Calculator', slug: 'ecommerce-return-rate-calculator' },
      { name: 'Refund Loss Calculator', slug: 'refund-loss-calculator' },
    ]
  },
  {
    id: 'customer-retention',
    name: 'Customer & Retention',
    description: 'Measure CLV, retention, loyalty and customer behavior.',
    icon: Users,
    color: 'bg-pink-500',
    calculators: [
      { name: 'Customer Lifetime Value Calculator', slug: 'ecommerce-clv-calculator' },
      { name: 'Customer Retention Calculator', slug: 'ecommerce-customer-retention-calculator' },
      { name: 'Visitor-to-Customer Calculator', slug: 'visitor-to-customer-calculator' },
      { name: 'Product Rating Calculator', slug: 'product-rating-calculator' },
      { name: 'Product Popularity Calculator', slug: 'ecommerce-product-popularity-calculator' },
    ]
  },
  {
    id: 'traffic-performance',
    name: 'Traffic & Performance',
    description: 'Analyze traffic, conversion rates, ad spend and engagement.',
    icon: BarChart2,
    color: 'bg-cyan-500',
    calculators: [
      { name: 'Ecommerce Conversion Rate Calculator', slug: 'ecommerce-conversion-rate-calculator' },
      { name: 'Ecommerce Traffic Calculator', slug: 'ecommerce-traffic-calculator' },
      { name: 'Ecommerce Ad Spend Calculator', slug: 'ecommerce-ad-spend-calculator' },
      { name: 'Product Demand Calculator', slug: 'ecommerce-product-demand-calculator' },
      { name: 'Ecommerce Engagement Calculator', slug: 'ecommerce-engagement-calculator' },
    ]
  },
];
