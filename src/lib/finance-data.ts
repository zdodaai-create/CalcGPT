import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Coins, 
  Home, 
  Wallet, 
  CreditCard, 
  PlaneTakeoff, 
  ShoppingBag, 
  Percent, 
  Globe,
  IndianRupee
} from 'lucide-react';

export const FINANCE_DATA = [
  {
    id: 'business-planning',
    name: 'Business Planning',
    description: 'Calculate break-even points, burn rates, and startup costs.',
    icon: Building2,
    color: 'bg-indigo-600',
    calculators: [
      { name: 'Break-even Calculator', slug: 'break-even-calculator' },
      { name: 'Burn Rate Calculator', slug: 'burn-rate-calculator' },
      { name: 'Business Loan Calculator', slug: 'business-loan-calculator' },
      { name: 'Contribution Margin Calculator', slug: 'contribution-margin-calculator' },
      { name: 'Customer Acquisition Cost Calculator', slug: 'customer-acquisition-cost-calculator' },
    ]
  },
  {
    id: 'general-investment',
    name: 'General Investment',
    description: 'Analyze ROI, CAGR, and compound interest for your portfolio.',
    icon: TrendingUp,
    color: 'bg-emerald-600',
    calculators: [
      { name: 'CAGR Calculator', slug: 'cagr-calculator' },
      { name: 'Compound Interest Calculator', slug: 'compound-interest-calculator' },
      { name: 'NPV Calculator', slug: 'npv-calculator' },
      { name: 'ROI Calculator', slug: 'roi-calculator' },
      { name: 'Sharpe Ratio Calculator', slug: 'sharpe-ratio-calculator' },
    ]
  },
  {
    id: 'equity-investment',
    name: 'Equity & Stocks',
    description: 'Stock valuation tools, including P/E ratios and Market Cap.',
    icon: BarChart3,
    color: 'bg-blue-600',
    calculators: [
      { name: 'CAPM Calculator', slug: 'capm-calculator' },
      { name: 'Dividend Yield Calculator', slug: 'dividend-yield-calculator' },
      { name: 'EPS Calculator', slug: 'eps-calculator' },
      { name: 'Market Capitalization Calculator', slug: 'market-capitalization-calculator' },
      { name: 'P/E Ratio Calculator', slug: 'p-e-ratio-calculator' },
    ]
  },
  {
    id: 'debt-investment',
    name: 'Debt & Bonds',
    description: 'Bond pricing, YTM, and debt-to-equity analysis.',
    icon: PieChart,
    color: 'bg-slate-600',
    calculators: [
      { name: 'Bond Price Calculator', slug: 'bond-price-calculator' },
      { name: 'Debt to Equity Calculator', slug: 'debt-to-equity-calculator' },
      { name: 'Yield to Maturity Calculator', slug: 'yield-to-maturity-calculator' },
    ]
  },
  {
    id: 'derivatives',
    name: 'Derivatives',
    description: 'Options pricing and futures contract valuation.',
    icon: Coins,
    color: 'bg-orange-600',
    calculators: [
      { name: 'Black-Scholes Calculator', slug: 'black-scholes-calculator' },
      { name: 'Futures Contracts Calculator', slug: 'futures-contracts-calculator' },
    ]
  },
  {
    id: 'tax-salary',
    name: 'Tax & Salary',
    description: 'Calculate take-home pay, FICA taxes, and VAT.',
    icon: Wallet,
    color: 'bg-pink-600',
    calculators: [
      { name: 'Annual Income Calculator', slug: 'annual-income-calculator' },
      { name: 'FICA Tax Calculator', slug: 'fica-tax-calculator' },
      { name: 'Gross to Net Calculator', slug: 'gross-to-net-calculator' },
      { name: 'Overtime Calculator', slug: 'overtime-calculator' },
      { name: 'VAT Calculator', slug: 'vat-calculator' },
    ]
  },
  {
    id: 'mortgage-real-estate',
    name: 'Mortgage & Real Estate',
    description: 'Property investment analysis and monthly mortgage payments.',
    icon: Home,
    color: 'bg-cyan-600',
    calculators: [
      { name: 'Mortgage Calculator', slug: 'mortgage-calculator' },
      { name: 'Cap Rate Calculator', slug: 'cap-rate-calculator' },
      { name: 'Down Payment Calculator', slug: 'down-payment-calculator' },
      { name: 'Rent vs Buy Calculator', slug: 'rent-vs-buy-calculator' },
    ]
  },
  {
    id: 'personal-finance',
    name: 'Personal Finance',
    description: 'Budgeting tools, net worth tracking, and FIRE planning.',
    icon: Wallet,
    color: 'bg-purple-600',
    calculators: [
      { name: 'Budget Calculator', slug: 'budget-calculator' },
      { name: 'Emergency Fund Calculator', slug: 'emergency-fund-calculator' },
      { name: 'FIRE Calculator', slug: 'fire-calculator' },
      { name: 'Net Worth Calculator', slug: 'net-worth-calculator' },
      { name: 'Savings Calculator', slug: 'savings-calculator' },
    ]
  },
  {
    id: 'debt-management',
    name: 'Debt Management',
    description: 'Credit card interest, DTI ratios, and loan amortization.',
    icon: CreditCard,
    color: 'bg-red-600',
    calculators: [
      { name: 'APR Calculator', slug: 'apr-calculator' },
      { name: 'Credit Card Interest Calculator', slug: 'credit-card-interest-calculator' },
      { name: 'Debt to Income Ratio Calculator', slug: 'debt-to-income-ratio-calculator' },
      { name: 'Loan Calculator', slug: 'loan-calculator' },
    ]
  },
  {
    id: 'retirement',
    name: 'Retirement',
    description: '401k projections and the Rule of 72.',
    icon: PlaneTakeoff,
    color: 'bg-amber-600',
    calculators: [
      { name: '401k Calculator', slug: '401k-calculator' },
      { name: 'Retirement Calculator', slug: 'retirement-calculator' },
      { name: 'Rule of 72 Calculator', slug: 'rule-of-72-calculator' },
    ]
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    description: 'Profit margins, markups, and discount pricing.',
    icon: ShoppingBag,
    color: 'bg-rose-600',
    calculators: [
      { name: 'Discount Calculator', slug: 'discount-calculator' },
      { name: 'Margin Calculator', slug: 'margin-calculator' },
      { name: 'Markup Calculator', slug: 'markup-calculator' },
    ]
  },
  {
    id: 'micro-macro',
    name: 'Economics',
    description: 'GDP, inflation, and unemployment rate analysis.',
    icon: Globe,
    color: 'bg-teal-600',
    calculators: [
      { name: 'Consumer Surplus Calculator', slug: 'consumer-surplus-calculator' },
      { name: 'EOQ Calculator', slug: 'eoq-calculator' },
      { name: 'Gross Margin Calculator', slug: 'gross-margin-calculator' },
      { name: 'GDP Calculator', slug: 'gdp-calculator' },
      { name: 'Inflation Calculator', slug: 'inflation-calculator' },
      { name: 'Unemployment Rate Calculator', slug: 'unemployment-rate-calculator' },
    ]
  },
  {
    id: 'indian-finance',
    name: 'Indian Finance',
    description: 'Specialized tools for SIP, PPF, and Indian tax laws.',
    icon: IndianRupee,
    color: 'bg-orange-500',
    calculators: [
      { name: 'EMI Calculator', slug: 'emi-calculator' },
      { name: 'SIP Calculator', slug: 'sip-calculator' },
      { name: 'PPF Calculator', slug: 'ppf-calculator' },
    ]
  }
];
