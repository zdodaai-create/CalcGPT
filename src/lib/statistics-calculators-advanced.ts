import { CalculatorConfig } from "./calculator-types";

export const STATISTICS_CALCULATORS_ADVANCED: CalculatorConfig[] = [
  // 📈 CORRELATION & REGRESSION (24 Calculators)
  {
    id: "pearson-correlation-coefficient", name: "Pearson Correlation Coefficient Calculator",
    description: "Calculate the Pearson product-moment correlation coefficient (r) between two variables.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "r = \\frac{\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y}",
    inputs: [
      { id: "cov", label: "Covariance Cov(X,Y)", type: "number", defaultValue: 12.5 },
      { id: "sdx", label: "Std Dev of X (σx)", type: "number", defaultValue: 4.2 },
      { id: "sdy", label: "Std Dev of Y (σy)", type: "number", defaultValue: 3.8 }
    ],
    outputs: [
      { id: "r", label: "Pearson Correlation Coefficient (r)", formula: "cov / (sdx * sdy)", unit: "" }
    ],
    theory: "Pearson's correlation coefficient (r) measures the linear correlation between two datasets X and Y. It takes values between -1 and +1, where +1 is total positive linear correlation, 0 is no linear correlation, and -1 is total negative linear correlation.",
    faq: [
      { question: "What does r = 0 mean?", answer: "An r of 0 indicates that there is no linear relationship between the two variables. However, a non-linear relationship may still exist." }
    ],
    seoMeta: { title: "Pearson Correlation Coefficient Calculator", description: "Calculate Pearson's r linear correlation index between two variables.", keywords: "pearson r, correlation coefficient, covariance, linear relationship" }
  },
  {
    id: "spearmans-rank-correlation", name: "Spearman's Rank Correlation Calculator",
    description: "Calculate Spearman's rank correlation coefficient (rho) for non-parametric rank data.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}",
    inputs: [
      { id: "d2", label: "Sum of Squared Differences in Ranks (Σd²)", type: "number", defaultValue: 15 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "rho", label: "Spearman's Rank Correlation (ρ)", formula: "1 - (6 * d2) / (n * (n^2 - 1))", unit: "" }
    ],
    theory: "Spearman's rank correlation coefficient is a non-parametric measure of rank correlation (statistical dependence between the rankings of two variables). It assesses how well the relationship between two variables can be described using a monotonic function.",
    faq: [
      { question: "When should I use Spearman instead of Pearson?", answer: "Use Spearman's correlation when your data is ordinal (ranked), non-normally distributed, or when the relationship is monotonic but not strictly linear." }
    ],
    seoMeta: { title: "Spearman's Rank Correlation Calculator", description: "Compute Spearman's rho rank correlation index from squared rank differences.", keywords: "spearman rho, rank correlation, non-parametric, monotonic relation" }
  },
  {
    id: "covariance-calculator", name: "Covariance Calculator",
    description: "Calculate sample and population covariance from variance-like sum of product deviations.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\text{Cov}(X, Y) = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{n - 1}",
    inputs: [
      { id: "sum_prod_diff", label: "Sum of Product Deviations [Σ(x-x̄)(y-ȳ)]", type: "number", defaultValue: 45.2 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "sample_cov", label: "Sample Covariance", formula: "sum_prod_diff / (n - 1)", unit: "" },
      { id: "pop_cov", label: "Population Covariance", formula: "sum_prod_diff / n", unit: "" }
    ],
    theory: "Covariance is a measure of the joint variability of two random variables. If the greater values of one variable mainly correspond with the greater values of the other, and the same holds for the lesser values, the covariance is positive.",
    faq: [],
    seoMeta: { title: "Covariance Calculator", description: "Find sample and population covariance values easily.", keywords: "covariance, sample covariance, population covariance, joint variance" }
  },
  {
    id: "simple-linear-regression", name: "Simple Linear Regression Calculator",
    description: "Calculate the predicted dependent variable y using simple linear regression equation.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\hat{y} = \\beta_0 + \\beta_1 x",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 5 },
      { id: "slope", label: "Slope (β1 or m)", type: "number", defaultValue: 1.5 },
      { id: "intercept", label: "Intercept (β0 or c)", type: "number", defaultValue: 10.0 }
    ],
    outputs: [
      { id: "y", label: "Predicted Dependent Value (ŷ)", formula: "intercept + slope * x", unit: "" }
    ],
    theory: "Simple linear regression models the relationship between a single independent variable x and a dependent variable y using a straight line equation, where β1 represents the slope and β0 is the y-intercept.",
    faq: [],
    seoMeta: { title: "Simple Linear Regression Calculator", description: "Predict variables using simple linear regression equations.", keywords: "linear regression, simple regression, slope, intercept, linear prediction" }
  },
  {
    id: "multiple-linear-regression", name: "Multiple Linear Regression Calculator",
    description: "Predict the dependent variable y using two independent variables x1 and x2.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\hat{y} = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2",
    inputs: [
      { id: "x1", label: "Independent Variable 1 (x1)", type: "number", defaultValue: 4 },
      { id: "x2", label: "Independent Variable 2 (x2)", type: "number", defaultValue: 8 },
      { id: "b0", label: "Intercept Coefficient (β0)", type: "number", defaultValue: 5.0 },
      { id: "b1", label: "x1 Coefficient (β1)", type: "number", defaultValue: 1.2 },
      { id: "b2", label: "x2 Coefficient (β2)", type: "number", defaultValue: -0.5 }
    ],
    outputs: [
      { id: "y", label: "Predicted Value (ŷ)", formula: "b0 + b1 * x1 + b2 * x2", unit: "" }
    ],
    theory: "Multiple linear regression generalizes simple linear regression by using two or more independent variables to predict the value of a dependent variable.",
    faq: [],
    seoMeta: { title: "Multiple Linear Regression Calculator", description: "Run predictions with two independent regression variables.", keywords: "multiple regression, coefficients, multi-variable linear model" }
  },
  {
    id: "r-squared-calculator", name: "R-Squared Calculator",
    description: "Calculate the Coefficient of Determination (R²) from residual and total sum of squares.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "R^2 = 1 - \\frac{RSS}{TSS}",
    inputs: [
      { id: "rss", label: "Residual Sum of Squares (RSS)", type: "number", defaultValue: 15.0 },
      { id: "tss", label: "Total Sum of Squares (TSS)", type: "number", defaultValue: 75.0 }
    ],
    outputs: [
      { id: "r2", label: "R-Squared (R²)", formula: "1 - rss / tss", unit: "" },
      { id: "r2_pct", label: "Explained Variance Percentage", formula: "(1 - rss / tss) * 100", unit: "%" }
    ],
    theory: "R-squared represents the proportion of the variance in the dependent variable that is predictable from the independent variables. It serves as a measure of how well observed outcomes are replicated by the model.",
    faq: [],
    seoMeta: { title: "R-Squared Calculator", description: "Compute R2 coefficient of determination from RSS and TSS.", keywords: "R-squared, coefficient of determination, model fit, variance explained" }
  },
  {
    id: "adjusted-r-squared-calculator", name: "Adjusted R-Squared Calculator",
    description: "Calculate adjusted R² to penalize model complexity in multiple regression.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\text{Adjusted } R^2 = 1 - \\left[\\frac{(1 - R^2)(n - 1)}{n - k - 1}\\right]",
    inputs: [
      { id: "r2", label: "R-Squared (R²)", type: "number", defaultValue: 0.85 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 50 },
      { id: "k", label: "Number of Predictors (k)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "adj_r2", label: "Adjusted R-Squared", formula: "1 - ((1 - r2) * (n - 1)) / (n - k - 1)", unit: "" }
    ],
    theory: "Adjusted R-squared is a modified version of R-squared that has been adjusted for the number of predictors in the model. It increases only if the new term improves the model more than would be expected by chance, and decreases when a predictor improves the model by less than expected by chance.",
    faq: [
      { question: "Why is Adjusted R-squared preferred in multiple regression?", answer: "Unlike standard R2, Adjusted R2 does not automatically increase when you add more variables, preventing overfitting models." }
    ],
    seoMeta: { title: "Adjusted R-Squared Calculator", description: "Calculate Adjusted R2 index for multiple linear regression models.", keywords: "adjusted r-squared, multiple regression, overfitting, predictors penalty" }
  },
  {
    id: "standard-error-estimate", name: "Standard Error of the Estimate Calculator",
    description: "Determine the standard error of the estimate (residual standard deviation) for a regression model.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "S_e = \\sqrt{\\frac{RSS}{n - k - 1}}",
    inputs: [
      { id: "rss", label: "Residual Sum of Squares (RSS)", type: "number", defaultValue: 35.4 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 30 },
      { id: "k", label: "Number of Predictors (k)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "se", label: "Standard Error of Estimate (Se)", formula: "sqrt(rss / (n - k - 1))", unit: "" }
    ],
    theory: "The standard error of the estimate measures the accuracy of predictions made with a regression line. It represents the standard deviation of the residuals or differences between actual and predicted values.",
    faq: [],
    seoMeta: { title: "Standard Error of the Estimate Calculator", description: "Calculate residual standard deviation for regression lines.", keywords: "standard error of estimate, regression error, residuals SD" }
  },
  {
    id: "residuals-calculator", name: "Residuals Calculator",
    description: "Determine the residual error (difference between observed and predicted values).",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "e = y - \\hat{y}",
    inputs: [
      { id: "actual", label: "Observed Value (y)", type: "number", defaultValue: 18.5 },
      { id: "pred", label: "Predicted Value (ŷ)", type: "number", defaultValue: 16.2 }
    ],
    outputs: [
      { id: "residual", label: "Residual Error (e)", formula: "actual - pred", unit: "" }
    ],
    theory: "A residual is the vertical distance between a data point and the regression line. It represents the portion of the dependent variable that the regression model could not explain.",
    faq: [],
    seoMeta: { title: "Residuals Calculator", description: "Compute residual errors (actual minus predicted values) in regression.", keywords: "residuals, regression errors, actual minus predicted" }
  },
  {
    id: "residual-sum-of-squares", name: "Residual Sum of Squares (RSS) Calculator",
    description: "Calculate Residual Sum of Squares (RSS) from three individual residual values.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\text{RSS} = \\sum e_i^2",
    inputs: [
      { id: "e1", label: "Residual 1 (e1)", type: "number", defaultValue: 1.2 },
      { id: "e2", label: "Residual 2 (e2)", type: "number", defaultValue: -0.8 },
      { id: "e3", label: "Residual 3 (e3)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "rss", label: "Residual Sum of Squares (RSS)", formula: "e1^2 + e2^2 + e3^2", unit: "" }
    ],
    theory: "The Residual Sum of Squares (RSS), also known as the sum of squared residuals (SSR), measures the level of variance in the error term of a regression model.",
    faq: [],
    seoMeta: { title: "Residual Sum of Squares (RSS) Calculator", description: "Sum the squares of residual error metrics.", keywords: "RSS, residual sum of squares, sum of squared errors" }
  },
  {
    id: "total-sum-of-squares", name: "Total Sum of Squares (TSS) Calculator",
    description: "Calculate Total Sum of Squares (TSS) by combining Explained and Residual sums of squares.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\text{TSS} = \\text{ESS} + \\text{RSS}",
    inputs: [
      { id: "ess", label: "Explained Sum of Squares (ESS)", type: "number", defaultValue: 80.0 },
      { id: "rss", label: "Residual Sum of Squares (RSS)", type: "number", defaultValue: 20.0 }
    ],
    outputs: [
      { id: "tss", label: "Total Sum of Squares (TSS)", formula: "ess + rss", unit: "" }
    ],
    theory: "Total Sum of Squares (TSS) measures the total variance in the dependent variable. It can be partitioned into explained variance (ESS) and unexplained variance (RSS).",
    faq: [],
    seoMeta: { title: "Total Sum of Squares (TSS) Calculator", description: "Compute total sum of squares from ESS and RSS.", keywords: "TSS, total sum of squares, ANOVA partitioning" }
  },
  {
    id: "explained-sum-of-squares", name: "Explained Sum of Squares (ESS) Calculator",
    description: "Calculate Explained Sum of Squares (ESS) for two prediction points from the grand mean.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\text{ESS} = \\sum (\\hat{y}_i - \\bar{y})^2",
    inputs: [
      { id: "y_hat1", label: "Predicted Value 1 (ŷ1)", type: "number", defaultValue: 15.0 },
      { id: "y_hat2", label: "Predicted Value 2 (ŷ2)", type: "number", defaultValue: 25.0 },
      { id: "mean_y", label: "Grand Mean (ȳ)", type: "number", defaultValue: 20.0 }
    ],
    outputs: [
      { id: "ess", label: "Explained Sum of Squares (ESS)", formula: "(y_hat1 - mean_y)^2 + (y_hat2 - mean_y)^2", unit: "" }
    ],
    theory: "Explained Sum of Squares (ESS), also known as Regression Sum of Squares, represents the portion of total variance that is successfully explained by the regression line model.",
    faq: [],
    seoMeta: { title: "Explained Sum of Squares (ESS) Calculator", description: "Calculate ESS from predictions and the mean.", keywords: "ESS, explained sum of squares, regression sum of squares" }
  },
  {
    id: "exponential-regression", name: "Exponential Regression Calculator",
    description: "Calculate predicted y using exponential regression formula y = a * b^x.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y = a \\cdot b^x",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 3.5 },
      { id: "a", label: "Scale Coefficient (a)", type: "number", defaultValue: 2.5 },
      { id: "b", label: "Base Growth Coefficient (b)", type: "number", defaultValue: 1.8 }
    ],
    outputs: [
      { id: "y", label: "Predicted Value (y)", formula: "a * b^x", unit: "" }
    ],
    theory: "Exponential regression is used to model relationships where growth or decay starts slowly and then rapidly accelerates, or vice-versa, conforming to the formula y = a * b^x.",
    faq: [],
    seoMeta: { title: "Exponential Regression Predictor", description: "Run exponential regressions conforming to y = a * b^x.", keywords: "exponential regression, exponential growth, growth predictor" }
  },
  {
    id: "logarithmic-regression", name: "Logarithmic Regression Calculator",
    description: "Compute predicted y using logarithmic regression formula y = a + b * ln(x).",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y = a + b \\ln(x)",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 10.0, validation: { min: 0.0001 } },
      { id: "a", label: "Constant Coefficient (a)", type: "number", defaultValue: 3.0 },
      { id: "b", label: "Slope Coefficient (b)", type: "number", defaultValue: 2.5 }
    ],
    outputs: [
      { id: "y", label: "Predicted Value (y)", formula: "a + b * log(x)", unit: "" }
    ],
    theory: "Logarithmic regression models growth curves that rise rapidly at first and then slow down over time, leveling off. It operates under the mathematical equation y = a + b * ln(x).",
    faq: [],
    seoMeta: { title: "Logarithmic Regression Predictor", description: "Predict scores using the logarithmic formula y = a + b * ln(x).", keywords: "logarithmic regression, natural log curve, logarithmic growth" }
  },
  {
    id: "power-regression", name: "Power Regression Calculator",
    description: "Find predicted y values conforming to power regression equation y = a * x^b.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y = a \\cdot x^b",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 4.0, validation: { min: 0 } },
      { id: "a", label: "Scale Coefficient (a)", type: "number", defaultValue: 1.5 },
      { id: "b", label: "Power Exponent Coefficient (b)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "y", label: "Predicted Value (y)", formula: "a * x^b", unit: "" }
    ],
    theory: "Power regression models relationships where the dependent variable is proportional to a power of the independent variable, satisfying the function y = a * x^b.",
    faq: [],
    seoMeta: { title: "Power Regression Calculator", description: "Solve power regression equations (y = a * x^b).", keywords: "power regression, power law, exponents relationship" }
  },
  {
    id: "quadratic-regression", name: "Quadratic Regression Calculator",
    description: "Solve the parabolic quadratic regression equation y = a * x^2 + b * x + c.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y = a x^2 + b x + c",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 3 },
      { id: "a", label: "x² Coefficient (a)", type: "number", defaultValue: 0.8 },
      { id: "b", label: "x Coefficient (b)", type: "number", defaultValue: -2.0 },
      { id: "c", label: "Constant Intercept (c)", type: "number", defaultValue: 5.0 }
    ],
    outputs: [
      { id: "y", label: "Predicted Value (y)", formula: "a * x^2 + b * x + c", unit: "" }
    ],
    theory: "Quadratic regression models curved relationships with a single inflection point (a parabola, forming a U or inverted U shape). It follows the polynomial equation y = a*x² + b*x + c.",
    faq: [],
    seoMeta: { title: "Quadratic Regression Calculator", description: "Predict parabolic values using polynomial quadratic regressions.", keywords: "quadratic regression, polynomial curve, parabolic regression, statistics" }
  },
  {
    id: "logistic-regression", name: "Logistic Regression Calculator",
    description: "Calculate probability output for a logistic sigmoid curve function.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y = \\frac{L}{1 + e^{-k(x - x_0)}}",
    inputs: [
      { id: "x", label: "Independent Variable (x)", type: "number", defaultValue: 2.5 },
      { id: "l", label: "Carrying Capacity (L)", type: "number", defaultValue: 1.0 },
      { id: "k", label: "Growth Rate (k)", type: "number", defaultValue: 1.5 },
      { id: "x0", label: "Sigmoid Midpoint (x0)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "y", label: "Predicted Probability (y)", formula: "l / (1 + exp(-k * (x - x0)))", unit: "" }
    ],
    theory: "The logistic function models sigmoid (S-shaped) curves where growth starts exponentially, slows down as it approaches a limit or carrying capacity (L). It is heavily used in binary classification.",
    faq: [],
    seoMeta: { title: "Logistic Regression Sigmoid Calculator", description: "Solve standard sigmoid logistic curves.", keywords: "logistic regression, sigmoid curve, carrying capacity, classification probability" }
  },
  {
    id: "trend-line-calculator", name: "Trend Line Calculator",
    description: "Determine the forecasted coordinate on a linear trend line over time.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "y_t = m t + c",
    inputs: [
      { id: "t", label: "Time Interval Period (t)", type: "number", defaultValue: 10 },
      { id: "slope", label: "Slope Coefficient (m)", type: "number", defaultValue: 3.2 },
      { id: "intercept", label: "Starting Intercept (c)", type: "number", defaultValue: 15.0 }
    ],
    outputs: [
      { id: "y", label: "Trend Forecast Value (y)", formula: "slope * t + intercept", unit: "" }
    ],
    theory: "A linear trend line represents the general direction of data over sequential time periods, letting analysts forecast future values based on a constant average growth slope.",
    faq: [],
    seoMeta: { title: "Trend Line Forecast Calculator", description: "Calculate future points on linear trend lines.", keywords: "trend line, forecasting, linear trend, time series slope" }
  },
  {
    id: "autocorrelation-calculator", name: "Autocorrelation Calculator",
    description: "Calculate the autocorrelation coefficient at lag k for a time series.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "R(k) = \\frac{\\text{Covariance}(X_t, X_{t-k})}{\\text{Variance}(X_t)}",
    inputs: [
      { id: "cov_k", label: "Lag k Covariance [Cov(Xt, Xt-k)]", type: "number", defaultValue: 4.8 },
      { id: "var", label: "Series Total Variance (σ²)", type: "number", defaultValue: 8.0 }
    ],
    outputs: [
      { id: "r_k", label: "Autocorrelation Coefficient (rk)", formula: "cov_k / var", unit: "" }
    ],
    theory: "Autocorrelation represents the degree of similarity between a given time series and a lagged version of itself over successive time intervals. It is used to find repeating patterns or seasonality.",
    faq: [],
    seoMeta: { title: "Autocorrelation Coefficient Calculator", description: "Determine autocorrelation coefficients at specified lags.", keywords: "autocorrelation, time series lag, covariance, seasonality patterns" }
  },
  {
    id: "durbin-watson-statistic", name: "Durbin-Watson Statistic Calculator",
    description: "Test for autocorrelation in regression residuals using the Durbin-Watson statistic.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "d = \\frac{\\sum_{t=2}^n (e_t - e_{t-1})^2}{\\sum_{t=1}^n e_t^2}",
    inputs: [
      { id: "sum_diff_sq", label: "Sum of Squared Residual Differences [Σ(et - et-1)²]", type: "number", defaultValue: 12.5 },
      { id: "rss", label: "Residual Sum of Squares [Σet²]", type: "number", defaultValue: 10.0 }
    ],
    outputs: [
      { id: "dw", label: "Durbin-Watson Statistic (d)", formula: "sum_diff_sq / rss", unit: "" }
    ],
    theory: "The Durbin-Watson statistic (d) tests for autocorrelation in the residuals from a regression analysis. The value of d always lies between 0 and 4. A value around 2 indicates no autocorrelation.",
    faq: [
      { question: "What do values of d close to 0 and 4 mean?", answer: "Values of d close to 0 indicate positive autocorrelation, whereas values close to 4 indicate negative autocorrelation." }
    ],
    seoMeta: { title: "Durbin-Watson Statistic Calculator", description: "Compute Durbin-Watson statistic to check residual autocorrelation.", keywords: "durbin-watson, residuals autocorrelation, regression diagnostics" }
  },
  {
    id: "partial-correlation-calculator", name: "Partial Correlation Calculator",
    description: "Calculate partial correlation coefficient between X and Y controlling for Z.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "r_{xy\\cdot z} = \\frac{r_{xy} - r_{xz} r_{yz}}{\\sqrt{(1 - r_{xz}^2)(1 - r_{yz}^2)}}",
    inputs: [
      { id: "r_xy", label: "Correlation between X and Y (r_xy)", type: "number", defaultValue: 0.6 },
      { id: "r_xz", label: "Correlation between X and Z (r_xz)", type: "number", defaultValue: 0.4 },
      { id: "r_yz", label: "Correlation between Y and Z (r_yz)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "r_xy_z", label: "Partial Correlation r(xy·z)", formula: "(r_xy - r_xz * r_yz) / (sqrt(1 - r_xz^2) * sqrt(1 - r_yz^2))", unit: "" }
    ],
    theory: "Partial correlation measures the strength and direction of a linear relationship between two continuous variables, after controlling for the influence of one or more other variables (confounders).",
    faq: [],
    seoMeta: { title: "Partial Correlation Calculator", description: "Calculate partial correlation controlling for third variables.", keywords: "partial correlation, confounding variable, control factor" }
  },
  {
    id: "semi-partial-correlation-calculator", name: "Semi-Partial Correlation Calculator",
    description: "Calculate the semi-partial (part) correlation coefficient.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "sr = \\frac{r_{xy} - r_{xz} r_{yz}}{\\sqrt{1 - r_{xz}^2}}",
    inputs: [
      { id: "r_xy", label: "Correlation between X and Y (r_xy)", type: "number", defaultValue: 0.6 },
      { id: "r_xz", label: "Correlation between X and Z (r_xz)", type: "number", defaultValue: 0.4 },
      { id: "r_yz", label: "Correlation between Y and Z (r_yz)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "sr", label: "Semi-Partial Correlation (sr)", formula: "(r_xy - r_xz * r_yz) / sqrt(1 - r_xz^2)", unit: "" }
    ],
    theory: "Semi-partial correlation (or part correlation) measures the relationship between two variables X and Y after controlling for the effects of a third variable Z on *only one* of the variables (usually X). It tells you how much unique variance X explains in Y.",
    faq: [],
    seoMeta: { title: "Semi-Partial Correlation Calculator", description: "Compute semi-partial part correlation coefficients.", keywords: "semi-partial correlation, part correlation, regression unique variance" }
  },
  {
    id: "standardized-beta-coefficient", name: "Standardized Beta Coefficient Calculator",
    description: "Convert an unstandardized regression coefficient (b) to a standardized Beta.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "\\beta = b \\cdot \\frac{s_x}{s_y}",
    inputs: [
      { id: "b", label: "Unstandardized Slope (b)", type: "number", defaultValue: 2.5 },
      { id: "sdx", label: "Std Dev of Independent X (sx)", type: "number", defaultValue: 1.2 },
      { id: "sdy", label: "Std Dev of Dependent Y (sy)", type: "number", defaultValue: 4.0 }
    ],
    outputs: [
      { id: "beta", label: "Standardized Beta Coefficient (β)", formula: "b * (sdx / sdy)", unit: "" }
    ],
    theory: "Standardized beta coefficients represent the slope in standard deviations. A beta of 2.5 means a change of one standard deviation in X results in a 2.5 standard deviation change in Y, allowing coefficient comparison.",
    faq: [],
    seoMeta: { title: "Standardized Beta Coefficient Calculator", description: "Convert unstandardized coefficients to standardized betas.", keywords: "standardized beta, regression coefficient, standard deviation slopes" }
  },
  {
    id: "path-coefficient-calculator", name: "Path Coefficient Calculator",
    description: "Determine total path coefficient by summing direct and indirect paths.",
    category: "statistics", subcategory: "correlation-regression",
    scientificFormula: "p_{\\text{total}} = \\beta_{\\text{direct}} + (r_{x_1 x_2} \\cdot \\beta_{\\text{indirect}})",
    inputs: [
      { id: "beta", label: "Direct Path Coefficient (β direct)", type: "number", defaultValue: 0.45 },
      { id: "r_x1_x2", label: "Correlation between Predictors (r)", type: "number", defaultValue: 0.30 },
      { id: "beta_indirect", label: "Indirect Path Coefficient (β indirect)", type: "number", defaultValue: 0.25 }
    ],
    outputs: [
      { id: "path_total", label: "Total Path Coefficient", formula: "beta + r_x1_x2 * beta_indirect", unit: "" }
    ],
    theory: "In path analysis (structural equation modeling), the total effect of a variable is the sum of its direct effect and all indirect effects mediated through other variables.",
    faq: [],
    seoMeta: { title: "Path Coefficient Calculator", description: "Compute total path effects inside structural equation models.", keywords: "path analysis, structural equation modeling, direct effect, indirect effect" }
  },

  // ⏱️ CONFIDENCE INTERVALS & ESTIMATION (20 Calculators)
  {
    id: "confidence-interval-mean-known-sd", name: "Confidence Interval for the Mean (Known SD) Calculator",
    description: "Calculate confidence interval bounds for the mean when population standard deviation is known.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = \\bar{x} \\pm z \\cdot \\frac{\\sigma}{\\sqrt{n}}",
    inputs: [
      { id: "mean", label: "Sample Mean (x̄)", type: "number", defaultValue: 50.0 },
      { id: "sd", label: "Population Standard Deviation (σ)", type: "number", defaultValue: 8.0 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 100 },
      { id: "z", label: "Z-Critical Value (e.g. 1.96 for 95%)", type: "number", defaultValue: 1.96 }
    ],
    outputs: [
      { id: "me", label: "Margin of Error (ME)", formula: "z * sd / sqrt(n)", unit: "" },
      { id: "lower", label: "Lower Confidence Bound", formula: "mean - z * sd / sqrt(n)", unit: "" },
      { id: "upper", label: "Upper Confidence Bound", formula: "mean + z * sd / sqrt(n)", unit: "" }
    ],
    theory: "When the population standard deviation (σ) is known, the Z-interval is used to estimate the true population mean. It assumes the sample is drawn from a normally distributed population or sample size is large (n >= 30).",
    faq: [],
    seoMeta: { title: "CI for Mean (Known SD) Calculator", description: "Construct Z-intervals for sample means with known SD.", keywords: "confidence interval, known standard deviation, Z-interval, sample mean" }
  },
  {
    id: "confidence-interval-mean-unknown-sd", name: "Confidence Interval for the Mean (Unknown SD) Calculator",
    description: "Calculate t-distribution confidence intervals for the mean with unknown standard deviation.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = \\bar{x} \\pm t \\cdot \\frac{s}{\\sqrt{n}}",
    inputs: [
      { id: "mean", label: "Sample Mean (x̄)", type: "number", defaultValue: 24.5 },
      { id: "s", label: "Sample Standard Deviation (s)", type: "number", defaultValue: 3.2 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 25 },
      { id: "t", label: "t-Critical Value (e.g., 2.064 for df=24, 95%)", type: "number", defaultValue: 2.064 }
    ],
    outputs: [
      { id: "me", label: "Margin of Error (ME)", formula: "t * s / sqrt(n)", unit: "" },
      { id: "lower", label: "Lower Confidence Bound", formula: "mean - t * s / sqrt(n)", unit: "" },
      { id: "upper", label: "Upper Confidence Bound", formula: "mean + t * s / sqrt(n)", unit: "" }
    ],
    theory: "When the population standard deviation is unknown, we substitute the sample standard deviation (s) and use the Student's t-distribution critical value. The degrees of freedom equal n - 1.",
    faq: [],
    seoMeta: { title: "CI for Mean (Unknown SD) Calculator", description: "Build t-distribution confidence intervals for sample means.", keywords: "t-interval, unknown standard deviation, student's t, sample mean" }
  },
  {
    id: "confidence-interval-proportion", name: "Confidence Interval for a Proportion Calculator",
    description: "Construct confidence interval bounds for a population proportion.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = p \\pm z \\sqrt{\\frac{p(1 - p)}{n}}",
    inputs: [
      { id: "p", label: "Sample Success Proportion (p)", type: "number", defaultValue: 0.62 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 400 },
      { id: "z", label: "Z-Critical Value (e.g., 1.96)", type: "number", defaultValue: 1.96 }
    ],
    outputs: [
      { id: "me", label: "Margin of Error (ME)", formula: "z * sqrt(p * (1 - p) / n)", unit: "" },
      { id: "lower", label: "Lower Bound", formula: "p - z * sqrt(p * (1 - p) / n)", unit: "" },
      { id: "upper", label: "Upper Bound", formula: "p + z * sqrt(p * (1 - p) / n)", unit: "" }
    ],
    theory: "A confidence interval for a proportion uses the normal approximation method (Wald interval) assuming np >= 10 and n(1-p) >= 10. It maps the sample success rate to a broader population probability range.",
    faq: [],
    seoMeta: { title: "Confidence Interval for Proportion Calculator", description: "Compute standard Wald confidence intervals for proportions.", keywords: "wald interval, proportion confidence, success rate margin" }
  },
  {
    id: "confidence-interval-two-means-independent", name: "Confidence Interval for Two Means (Independent) Calculator",
    description: "Construct confidence interval bounds for the difference between two independent means.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = (\\bar{x}_1 - \\bar{x}_2) \\pm t \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}",
    inputs: [
      { id: "mean1", label: "Mean of Sample 1 (x̄1)", type: "number", defaultValue: 15.2 },
      { id: "sd1", label: "SD of Sample 1 (s1)", type: "number", defaultValue: 2.5 },
      { id: "n1", label: "Size of Sample 1 (n1)", type: "number", defaultValue: 30 },
      { id: "mean2", label: "Mean of Sample 2 (x̄2)", type: "number", defaultValue: 12.8 },
      { id: "sd2", label: "SD of Sample 2 (s2)", type: "number", defaultValue: 3.0 },
      { id: "n2", label: "Size of Sample 2 (n2)", type: "number", defaultValue: 35 },
      { id: "t", label: "t-Critical Value", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "diff", label: "Difference of Means (x̄1 - x̄2)", formula: "mean1 - mean2", unit: "" },
      { id: "se", label: "Standard Error", formula: "sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" },
      { id: "me", label: "Margin of Error", formula: "t * sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" },
      { id: "lower", label: "Lower Bound", formula: "(mean1 - mean2) - t * sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" },
      { id: "upper", label: "Upper Bound", formula: "(mean1 - mean2) + t * sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" }
    ],
    theory: "Estimates the true difference between the means of two independent populations. It uses Welch's standard error formula which does not assume equal variances.",
    faq: [],
    seoMeta: { title: "CI for Two Independent Means Calculator", description: "Compute Welch confidence intervals for difference of means.", keywords: "independent means, difference of means, welch interval, standard error" }
  },
  {
    id: "confidence-interval-two-means-paired", name: "Confidence Interval for Two Means (Paired) Calculator",
    description: "Construct confidence interval bounds for paired dependent difference variables.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = \\bar{d} \\pm t \\cdot \\frac{s_d}{\\sqrt{n}}",
    inputs: [
      { id: "mean_d", label: "Mean of Differences (d̄)", type: "number", defaultValue: 3.5 },
      { id: "sd_d", label: "SD of Differences (sd)", type: "number", defaultValue: 1.8 },
      { id: "n", label: "Number of Pairs (n)", type: "number", defaultValue: 20 },
      { id: "t", label: "t-Critical Value (e.g. 2.093)", type: "number", defaultValue: 2.093 }
    ],
    outputs: [
      { id: "me", label: "Margin of Error (ME)", formula: "t * sd_d / sqrt(n)", unit: "" },
      { id: "lower", label: "Lower Bound", formula: "mean_d - t * sd_d / sqrt(n)", unit: "" },
      { id: "upper", label: "Upper Bound", formula: "mean_d + t * sd_d / sqrt(n)", unit: "" }
    ],
    theory: "For dependent paired samples (e.g., pre-test vs post-test), we analyze the single dataset of differences. The CI is constructed using the t-interval for the differences.",
    faq: [],
    seoMeta: { title: "CI for Paired Means Difference Calculator", description: "Calculate confidence intervals for dependent difference variables.", keywords: "paired t-interval, dependent samples, pre-test post-test" }
  },
  {
    id: "confidence-interval-two-proportions", name: "Confidence Interval for Two Proportions Calculator",
    description: "Calculate the confidence interval for the difference between two independent proportions.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI} = (p_1 - p_2) \\pm z \\sqrt{\\frac{p_1(1 - p_1)}{n_1} + \\frac{p_2(1 - p_2)}{n_2}}",
    inputs: [
      { id: "p1", label: "Proportion of Sample 1 (p1)", type: "number", defaultValue: 0.45 },
      { id: "n1", label: "Size of Sample 1 (n1)", type: "number", defaultValue: 200 },
      { id: "p2", label: "Proportion of Sample 2 (p2)", type: "number", defaultValue: 0.38 },
      { id: "n2", label: "Size of Sample 2 (n2)", type: "number", defaultValue: 250 },
      { id: "z", label: "Z-Critical Value (e.g. 1.96)", type: "number", defaultValue: 1.96 }
    ],
    outputs: [
      { id: "diff", label: "Difference (p1 - p2)", formula: "p1 - p2", unit: "" },
      { id: "me", label: "Margin of Error", formula: "z * sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2)", unit: "" },
      { id: "lower", label: "Lower Bound", formula: "(p1 - p2) - z * sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2)", unit: "" },
      { id: "upper", label: "Upper Bound", formula: "(p1 - p2) + z * sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2)", unit: "" }
    ],
    theory: "Constructs the interval representing the likely range of difference between two independent population proportions, based on normal distributions.",
    faq: [],
    seoMeta: { title: "CI for Two Proportions Calculator", description: "Compute confidence intervals for differences between two proportions.", keywords: "proportions difference, independent proportions, wald interval" }
  },
  {
    id: "confidence-interval-variance-sd", name: "Confidence Interval for Variance & SD Calculator",
    description: "Determine confidence intervals for variance and standard deviation using Chi-Square bounds.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{CI for } \\sigma^2 = \\left[ \\frac{(n-1)s^2}{\\chi^2_{\\alpha/2}}, \\frac{(n-1)s^2}{\\chi^2_{1-\\alpha/2}} \\right]",
    inputs: [
      { id: "s2", label: "Sample Variance (s²)", type: "number", defaultValue: 16.0 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 30 },
      { id: "chi_lower", label: "Chi-Square Lower Value (1-α/2)", type: "number", defaultValue: 16.05 },
      { id: "chi_upper", label: "Chi-Square Upper Value (α/2)", type: "number", defaultValue: 45.72 }
    ],
    outputs: [
      { id: "lower_var", label: "Variance Lower Bound", formula: "(n - 1) * s2 / chi_upper", unit: "" },
      { id: "upper_var", label: "Variance Upper Bound", formula: "(n - 1) * s2 / chi_lower", unit: "" },
      { id: "lower_sd", label: "Std Dev Lower Bound", formula: "sqrt((n - 1) * s2 / chi_upper)", unit: "" },
      { id: "upper_sd", label: "Std Dev Upper Bound", formula: "sqrt((n - 1) * s2 / chi_lower)", unit: "" }
    ],
    theory: "Confidence intervals for population variance and standard deviation are asymmetrical because they are based on the Chi-Square distribution, which is skewed right.",
    faq: [],
    seoMeta: { title: "CI for Variance and SD Calculator", description: "Find asymmetric Chi-Square confidence intervals for variance.", keywords: "variance interval, standard deviation interval, chi-square bounds" }
  },
  {
    id: "margin-of-error-calculator", name: "Margin of Error Calculator",
    description: "Determine the margin of error (ME) for a standard normal estimation.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{ME} = z \\cdot \\frac{\\sigma}{\\sqrt{n}}",
    inputs: [
      { id: "z", label: "Z-Critical Value (e.g. 1.96)", type: "number", defaultValue: 1.96 },
      { id: "sd", label: "Standard Deviation (σ or s)", type: "number", defaultValue: 15.0 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "me", label: "Margin of Error (ME)", formula: "z * sd / sqrt(n)", unit: "" }
    ],
    theory: "Margin of Error represents the radius of the confidence interval. It expresses the maximum expected difference between the true population parameter and the sample statistic.",
    faq: [],
    seoMeta: { title: "Margin of Error Calculator", description: "Compute standard margin of error rates for surveys.", keywords: "margin of error, confidence interval width, survey accuracy" }
  },
  {
    id: "sample-size-calculator-mean", name: "Sample Size Calculator (for Estimating Mean)",
    description: "Calculate the minimum required sample size to estimate a population mean.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "n = \\left( \\frac{z \\cdot \\sigma}{\\text{ME}} \\right)^2",
    inputs: [
      { id: "z", label: "Z-Critical Value (e.g. 1.96)", type: "number", defaultValue: 1.96 },
      { id: "sd", label: "Estimated Standard Deviation (σ)", type: "number", defaultValue: 10.0 },
      { id: "me", label: "Desired Margin of Error (ME)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "n", label: "Required Sample Size (n)", formula: "(z * sd / me)^2", unit: "subjects" }
    ],
    theory: "Determines the necessary sample size to estimate the true mean within a specified tolerance boundary. The resulting decimal is always rounded up to the nearest integer.",
    faq: [],
    seoMeta: { title: "Sample Size Calculator for Mean Estimation", description: "Calculate necessary sample sizes to estimate population means.", keywords: "sample size, mean estimation, standard deviation, survey width" }
  },
  {
    id: "sample-size-calculator-proportion", name: "Sample Size Calculator (for Estimating Proportion)",
    description: "Determine the required sample size to estimate a population proportion.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "n = \\frac{z^2 \\cdot p(1 - p)}{\\text{ME}^2}",
    inputs: [
      { id: "z", label: "Z-Critical Value (e.g. 1.96)", type: "number", defaultValue: 1.96 },
      { id: "p", label: "Estimated Proportion (p, default 0.5)", type: "number", defaultValue: 0.5 },
      { id: "me", label: "Desired Margin of Error (ME)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "n", label: "Required Sample Size (n)", formula: "z^2 * p * (1 - p) / me^2", unit: "subjects" }
    ],
    theory: "Calculates the sample size needed to estimate a population proportion. Setting p = 0.5 yields the most conservative (maximum possible) sample size estimate.",
    faq: [],
    seoMeta: { title: "Sample Size Calculator for Proportions", description: "Compute target sample sizes for polling and proportions.", keywords: "proportion sample size, survey polling size, conservative p value" }
  },
  {
    id: "sample-size-calculator-ab-testing", name: "Sample Size Calculator (for A/B Testing)",
    description: "Determine necessary sample size per group for statistical A/B tests.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "n = \\frac{(z_{\\alpha/2} + z_\\beta)^2 [p_1(1-p_1) + p_2(1-p_2)]}{(p_1 - p_2)^2}",
    inputs: [
      { id: "p1", label: "Baseline Conversion Rate (p1)", type: "number", defaultValue: 0.10 },
      { id: "p2", label: "Target Conversion Rate (p2)", type: "number", defaultValue: 0.12 },
      { id: "z_alpha", label: "Alpha Z-value (e.g. 1.96 for 5% sig)", type: "number", defaultValue: 1.96 },
      { id: "z_beta", label: "Beta Z-value (e.g. 0.84 for 80% power)", type: "number", defaultValue: 0.84 }
    ],
    outputs: [
      { id: "n", label: "Required Sample Size per Variant", formula: "((z_alpha + z_beta)^2 * (p1*(1 - p1) + p2*(1 - p2))) / (p1 - p2)^2", unit: "per group" }
    ],
    theory: "Used in digital marketing and product design. It tells how many users must view each page variant (A and B) to detect the desired absolute conversion rate difference with predefined statistical power.",
    faq: [],
    seoMeta: { title: "A/B Testing Sample Size Calculator", description: "Determine sample size counts per variant for conversion A/B tests.", keywords: "AB testing sample size, conversion tests, power analysis, marketing statistics" }
  },
  {
    id: "statistical-power-analysis", name: "Statistical Power Analysis Calculator",
    description: "Estimate statistical power using normal approximations for a specified sample size and effect.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{Power} \\approx \\Phi\\left( d \\sqrt{n} - z_{crit} \\right)",
    inputs: [
      { id: "d", label: "Cohen's d Effect Size (d)", type: "number", defaultValue: 0.5 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 40 },
      { id: "alpha", label: "Alpha Level (e.g. 0.05 yields z_crit=1.96)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "power", label: "Estimated Statistical Power", formula: "0.5 * (1 + erf((d * sqrt(n) - 1.96) / sqrt(2)))", unit: "" }
    ],
    theory: "Statistical power is the probability that a test correctly rejects a false null hypothesis (i.e. detects a true effect). 80% (0.80) is the standard threshold in scientific experiments.",
    faq: [],
    seoMeta: { title: "Statistical Power Calculator", description: "Estimate statistical power from sample size and effect size.", keywords: "statistical power, power analysis, type II error, cohen's d" }
  },
  {
    id: "standard-error-mean-calculator", name: "Standard Error of the Mean Calculator",
    description: "Calculate standard error of the mean (SEM) of a sample distribution.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{SEM} = \\frac{s}{\\sqrt{n}}",
    inputs: [
      { id: "sd", label: "Standard Deviation (s)", type: "number", defaultValue: 12.0 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 64 }
    ],
    outputs: [
      { id: "sem", label: "Standard Error of Mean (SEM)", formula: "sd / sqrt(n)", unit: "" }
    ],
    theory: "Standard Error of the Mean (SEM) represents the standard deviation of the sample mean's estimate. It decreases as the sample size increases, indicating growing estimate precision.",
    faq: [],
    seoMeta: { title: "Standard Error of the Mean (SEM) Calculator", description: "Calculate SEM values for standard normal averages.", keywords: "SEM, standard error of mean, sample mean precision" }
  },
  {
    id: "standard-error-proportion", name: "Standard Error of the Proportion Calculator",
    description: "Calculate the standard error of a sample proportion.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{SE}_p = \\sqrt{\\frac{p(1 - p)}{n}}",
    inputs: [
      { id: "p", label: "Sample Proportion (p)", type: "number", defaultValue: 0.45 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 250 }
    ],
    outputs: [
      { id: "sep", label: "Standard Error of Proportion", formula: "sqrt(p * (1 - p) / n)", unit: "" }
    ],
    theory: "Measures the dispersion of sample proportion estimates around the true population proportion value.",
    faq: [],
    seoMeta: { title: "Standard Error of Proportion Calculator", description: "Compute standard errors of binomial proportions.", keywords: "proportion error, standard error, binomial proportions" }
  },
  {
    id: "standard-error-two-means-difference", name: "Standard Error of Two Means Difference Calculator",
    description: "Calculate joint standard error for the difference between two sample means.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{SE}_{\\text{diff}} = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}",
    inputs: [
      { id: "sd1", label: "SD of Sample 1 (s1)", type: "number", defaultValue: 3.5 },
      { id: "n1", label: "Size of Sample 1 (n1)", type: "number", defaultValue: 45 },
      { id: "sd2", label: "SD of Sample 2 (s2)", type: "number", defaultValue: 4.2 },
      { id: "n2", label: "Size of Sample 2 (n2)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "se", label: "Standard Error of Difference", formula: "sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" }
    ],
    theory: "Represents the standard error used in Welch's t-test, assessing variance spread when comparing independent group averages.",
    faq: [],
    seoMeta: { title: "Standard Error of Two Means Difference", description: "Calculate Welch-type combined standard error of differences.", keywords: "welch standard error, mean differences, two-sample error" }
  },
  {
    id: "standard-error-two-proportions-difference", name: "Standard Error of Two Proportions Difference Calculator",
    description: "Calculate standard error for the difference between two independent proportions.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{SE}_{\\text{diff}} = \\sqrt{\\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}}",
    inputs: [
      { id: "p1", label: "Proportion 1 (p1)", type: "number", defaultValue: 0.35 },
      { id: "n1", label: "Size of Sample 1 (n1)", type: "number", defaultValue: 100 },
      { id: "p2", label: "Proportion 2 (p2)", type: "number", defaultValue: 0.28 },
      { id: "n2", label: "Size of Sample 2 (n2)", type: "number", defaultValue: 120 }
    ],
    outputs: [
      { id: "se", label: "Standard Error of Difference", formula: "sqrt(p1*(1-p1)/n1 + p2*(1-p2)/n2)", unit: "" }
    ],
    theory: "Measures the variance of difference estimates between two binary rate populations.",
    faq: [],
    seoMeta: { title: "Standard Error of Two Proportions Difference", description: "Calculate standard errors when comparing binary rates.", keywords: "proportions error difference, binomial differences, pooled error" }
  },
  {
    id: "pooled-variance-calculator", name: "Pooled Variance Calculator",
    description: "Calculate pooled variance (weighted average variance) of two samples.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}",
    inputs: [
      { id: "sd1", label: "SD of Sample 1 (s1)", type: "number", defaultValue: 4.0 },
      { id: "n1", label: "Size of Sample 1 (n1)", type: "number", defaultValue: 25 },
      { id: "sd2", label: "SD of Sample 2 (s2)", type: "number", defaultValue: 5.5 },
      { id: "n2", label: "Size of Sample 2 (n2)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "pooled_var", label: "Pooled Variance (sp²)", formula: "((n1-1)*sd1^2 + (n2-1)*sd2^2) / (n1+n2-2)", unit: "" },
      { id: "pooled_sd", label: "Pooled Standard Deviation (sp)", formula: "sqrt(((n1-1)*sd1^2 + (n2-1)*sd2^2) / (n1+n2-2))", unit: "" }
    ],
    theory: "Pooled variance combines variance estimates from two groups, weighting by sample size. It assumes that both samples originate from populations with equal variance.",
    faq: [],
    seoMeta: { title: "Pooled Variance Calculator", description: "Determine combined pooled variances for t-tests.", keywords: "pooled variance, combined variance, equal variance assumption" }
  },
  {
    id: "effect-size-cohens-d", name: "Effect Size (Cohen's d) Calculator",
    description: "Calculate Cohen's d effect size for two group means.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "d = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p}",
    inputs: [
      { id: "mean1", label: "Mean of Group 1 (x̄1)", type: "number", defaultValue: 82.0 },
      { id: "mean2", label: "Mean of Group 2 (x̄2)", type: "number", defaultValue: 75.0 },
      { id: "sd_pooled", label: "Pooled Standard Deviation (sp)", type: "number", defaultValue: 10.0 }
    ],
    outputs: [
      { id: "d", label: "Cohen's d Effect Size", formula: "(mean1 - mean2) / sd_pooled", unit: "" }
    ],
    theory: "Cohen's d is a standardized measure of effect size, representing the distance between two means in units of standard deviations. Standards: 0.2 is small, 0.5 is medium, 0.8 is large.",
    faq: [
      { question: "Why is effect size important?", answer: "Unlike p-values, which depend heavily on sample size, effect size tells you how large or meaningful the difference actually is in practical terms." }
    ],
    seoMeta: { title: "Cohen's d Effect Size Calculator", description: "Calculate standard Cohen's d effect size indices.", keywords: "cohen's d, effect size, standardized difference, statistical impact" }
  },
  {
    id: "effect-size-eta-squared", name: "Effect Size (Eta-Squared) Calculator",
    description: "Calculate Eta-Squared (η²) effect size indicator for ANOVA designs.",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\eta^2 = \\frac{SS_{\\text{between}}}{SS_{\\text{total}}}",
    inputs: [
      { id: "ss_between", label: "Sum of Squares Between (SSB)", type: "number", defaultValue: 45.0 },
      { id: "ss_total", label: "Sum of Squares Total (SST)", type: "number", defaultValue: 180.0 }
    ],
    outputs: [
      { id: "eta2", label: "Eta-Squared (η²)", formula: "ss_between / ss_total", unit: "" },
      { id: "eta2_pct", label: "Variance Explained Percentage", formula: "(ss_between / ss_total) * 100", unit: "%" }
    ],
    theory: "Eta-squared measures the proportion of variance in the dependent variable that is associated with membership in the ANOVA treatment groups.",
    faq: [],
    seoMeta: { title: "Eta-Squared (η²) Effect Size Calculator", description: "Compute Eta-squared variance indicators for ANOVA.", keywords: "eta squared, ANOVA effect size, treatment variance" }
  },
  {
    id: "expected-value-of-information", name: "Expected Value of Information Calculator",
    description: "Determine Expected Value of Perfect Information (EVPI).",
    category: "statistics", subcategory: "confidence-intervals",
    scientificFormula: "\\text{EVPI} = \\text{EV}_{\\text{with info}} - \\text{EV}_{\\text{without info}}",
    inputs: [
      { id: "ev_with_info", label: "EV with Perfect Information", type: "number", defaultValue: 25000 },
      { id: "ev_without_info", label: "EV with Current Information", type: "number", defaultValue: 18000 }
    ],
    outputs: [
      { id: "evpi", label: "EV of Perfect Information (EVPI)", formula: "ev_with_info - ev_without_info", unit: "" }
    ],
    theory: "EVPI represents the maximum amount a decision-maker should be willing to pay for additional information before making a choice, equivalent to the expected opportunity loss.",
    faq: [],
    seoMeta: { title: "Expected Value of Perfect Information (EVPI)", description: "Calculate EVPI decision analysis indices.", keywords: "EVPI, perfect information value, decision analysis, opportunity loss" }
  },

  // 🧠 ADVANCED DATA SCIENCE & ANALYTICS (22 Calculators)
  {
    id: "confusion-matrix-calculator", name: "Confusion Matrix Calculator",
    description: "Generate classifier performance metrics (Accuracy, Precision, Recall, F1) from raw confusion counts.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{F1} = \\frac{2 \\cdot \\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}",
    inputs: [
      { id: "tp", label: "True Positives (TP)", type: "number", defaultValue: 85 },
      { id: "tn", label: "True Negatives (TN)", type: "number", defaultValue: 90 },
      { id: "fp", label: "False Positives (FP)", type: "number", defaultValue: 10 },
      { id: "fn", label: "False Negatives (FN)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "accuracy", label: "Accuracy Rate", formula: "(tp + tn) / (tp + tn + fp + fn)", unit: "" },
      { id: "precision", label: "Precision (Positive Predictive Value)", formula: "tp / (tp + fp)", unit: "" },
      { id: "recall", label: "Recall (Sensitivity / TPR)", formula: "tp / (tp + fn)", unit: "" },
      { id: "f1", label: "F1 Score", formula: "2 * tp / (2 * tp + fp + fn)", unit: "" }
    ],
    theory: "A confusion matrix reports classification counts. Accuracy measures general correctness; Precision measures reliability of positive predictions; Recall measures capture rate of actual positives; F1 combines them harmonically.",
    faq: [],
    seoMeta: { title: "Confusion Matrix Metrics Calculator", description: "Compute accuracy, precision, recall, and F1 score from confusion grids.", keywords: "confusion matrix, precision, recall, F1 score, classifier metrics" }
  },
  {
    id: "sensitivity-specificity-calculator", name: "Sensitivity and Specificity Calculator",
    description: "Determine true positive rate (Sensitivity) and true negative rate (Specificity) of a test.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{Specificity} = \\frac{\\text{TN}}{\\text{TN} + \\text{FP}}",
    inputs: [
      { id: "tp", label: "True Positives (TP)", type: "number", defaultValue: 80 },
      { id: "tn", label: "True Negatives (TN)", type: "number", defaultValue: 95 },
      { id: "fp", label: "False Positives (FP)", type: "number", defaultValue: 5 },
      { id: "fn", label: "False Negatives (FN)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "sensitivity", label: "Sensitivity (TPR)", formula: "tp / (tp + fn)", unit: "" },
      { id: "specificity", label: "Specificity (TNR)", formula: "tn / (tn + fp)", unit: "" }
    ],
    theory: "Sensitivity is the test's ability to correctly identify positive cases. Specificity is the test's ability to correctly exclude negative cases. Both are essential in clinical diagnostic validation.",
    faq: [],
    seoMeta: { title: "Sensitivity and Specificity Calculator", description: "Calculate medical diagnosis test sensitivity and specificity rates.", keywords: "sensitivity, specificity, diagnostics, medical tests, true positive rate" }
  },
  {
    id: "precision-f1-score-calculator", name: "Precision and F1 Score Calculator",
    description: "Compute classification Precision and F1 score omitting True Negatives.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{Precision} = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}}",
    inputs: [
      { id: "tp", label: "True Positives (TP)", type: "number", defaultValue: 75 },
      { id: "fp", label: "False Positives (FP)", type: "number", defaultValue: 8 },
      { id: "fn", label: "False Negatives (FN)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "precision", label: "Precision", formula: "tp / (tp + fp)", unit: "" },
      { id: "f1", label: "F1 Score", formula: "2 * tp / (2 * tp + fp + fn)", unit: "" }
    ],
    theory: "When True Negatives are uninformative or massive, F1 score and Precision serve as robust metrics since they focus exclusively on actual positive predictions and occurrences.",
    faq: [],
    seoMeta: { title: "Precision and F1 Score Calculator", description: "Compute positive predictive precision and F1 statistics.", keywords: "precision, F1 score, classifier performance, binary classification" }
  },
  {
    id: "roc-curve-auc", name: "ROC Curve AUC Calculator",
    description: "Approximate Area Under ROC Curve (AUC) from two spatial coordinate points.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{AUC} \\approx 0.5 [x_1 y_1 + (x_2 - x_1)(y_1 + y_2) + (1 - x_2)(y_2 + 1)]",
    inputs: [
      { id: "fpr1", label: "FPR at Point 1 (1 - Spec1)", type: "number", defaultValue: 0.15 },
      { id: "tpr1", label: "TPR at Point 1 (Sensitivity1)", type: "number", defaultValue: 0.70 },
      { id: "fpr2", label: "FPR at Point 2 (1 - Spec2)", type: "number", defaultValue: 0.40 },
      { id: "tpr2", label: "TPR at Point 2 (Sensitivity2)", type: "number", defaultValue: 0.90 }
    ],
    outputs: [
      { id: "auc", label: "Approximate AUC Area", formula: "0.5 * (fpr1 * tpr1 + (fpr2 - fpr1) * (tpr1 + tpr2) + (1 - fpr2) * (tpr2 + 1))", unit: "" }
    ],
    theory: "AUC measures the entire two-dimensional area underneath the ROC curve from (0,0) to (1,1). It provides an aggregate measure of performance across all possible classification thresholds. An AUC of 0.5 indicates random guessing.",
    faq: [],
    seoMeta: { title: "ROC Curve AUC Area Calculator", description: "Approximate Area Under the Receiver Operating Curve (AUC).", keywords: "AUC, ROC curve, classification thresholds, trapezoidal rule" }
  },
  {
    id: "jaccard-similarity-calculator", name: "Jaccard Similarity Calculator",
    description: "Find the Jaccard similarity coefficient and distance between two sets.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "J(A, B) = \\frac{|A \\cap B|}{|A \\cup B|}",
    inputs: [
      { id: "intersection", label: "Size of Intersection (|A ∩ B|)", type: "number", defaultValue: 12 },
      { id: "union", label: "Size of Union (|A ∪ B|)", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "jaccard", label: "Jaccard Similarity Coefficient", formula: "intersection / union", unit: "" },
      { id: "distance", label: "Jaccard Distance", formula: "1 - intersection / union", unit: "" }
    ],
    theory: "Jaccard similarity measures similarity between finite sample sets. It is defined as the size of the intersection divided by the size of the union of the sample sets.",
    faq: [],
    seoMeta: { title: "Jaccard Similarity & Distance Calculator", description: "Compute Jaccard similarity coefficients from set sizes.", keywords: "jaccard index, similarity coefficient, set distance, overlap metric" }
  },
  {
    id: "cosine-similarity-calculator", name: "Cosine Similarity Calculator",
    description: "Calculate the cosine similarity between two non-zero vectors using their dot product and magnitudes.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\cos(\\theta) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}",
    inputs: [
      { id: "dot_product", label: "Vector Dot Product (A · B)", type: "number", defaultValue: 18.5 },
      { id: "norm_a", label: "Norm Magnitude of A (||A||)", type: "number", defaultValue: 4.5 },
      { id: "norm_b", label: "Norm Magnitude of B (||B||)", type: "number", defaultValue: 5.2 }
    ],
    outputs: [
      { id: "cosine", label: "Cosine Similarity", formula: "dot_product / (norm_a * norm_b)", unit: "" }
    ],
    theory: "Cosine similarity measures the cosine of the angle between two vectors projected in a multi-dimensional space, ignoring magnitude. Heavily used in document text mining and recommendation systems.",
    faq: [],
    seoMeta: { title: "Cosine Similarity Vector Calculator", description: "Calculate cosine similarity indices between vector mappings.", keywords: "cosine similarity, dot product, vector norms, angular similarity" }
  },
  {
    id: "euclidean-distance-calculator", name: "Euclidean Distance Calculator",
    description: "Find the straight-line Euclidean distance between two points in 2D space.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "d = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}",
    inputs: [
      { id: "x1", label: "x Coordinate of Point 1", type: "number", defaultValue: 2.0 },
      { id: "y1", label: "y Coordinate of Point 1", type: "number", defaultValue: 3.0 },
      { id: "x2", label: "x Coordinate of Point 2", type: "number", defaultValue: 6.0 },
      { id: "y2", label: "y Coordinate of Point 2", type: "number", defaultValue: 6.0 }
    ],
    outputs: [
      { id: "distance", label: "Euclidean Distance (d)", formula: "sqrt((x1 - x2)^2 + (y1 - y2)^2)", unit: "" }
    ],
    theory: "Euclidean distance is the straight-line distance between two points in Euclidean space, complying with the Pythagorean theorem.",
    faq: [],
    seoMeta: { title: "Euclidean Distance 2D Calculator", description: "Calculate straight line distances between coordinate pairs.", keywords: "euclidean distance, coordinate distance, pythagorean distance" }
  },
  {
    id: "manhattan-distance-calculator", name: "Manhattan Distance Calculator",
    description: "Calculate L1 norm taxicab Manhattan distance between two points.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "d = |x_1 - x_2| + |y_1 - y_2|",
    inputs: [
      { id: "x1", label: "x Coordinate of Point 1", type: "number", defaultValue: 2.0 },
      { id: "y1", label: "y Coordinate of Point 1", type: "number", defaultValue: 3.0 },
      { id: "x2", label: "x Coordinate of Point 2", type: "number", defaultValue: 6.0 },
      { id: "y2", label: "y Coordinate of Point 2", type: "number", defaultValue: 6.0 }
    ],
    outputs: [
      { id: "distance", label: "Manhattan Distance (d)", formula: "abs(x1 - x2) + abs(y1 - y2)", unit: "" }
    ],
    theory: "Manhattan distance (taxicab distance) represents the sum of absolute horizontal and vertical segments. Useful in grid-based paths or routing algorithms.",
    faq: [],
    seoMeta: { title: "Manhattan Taxicab Distance Calculator", description: "Compute L1 norm taxicab distance coordinates.", keywords: "manhattan distance, L1 norm, taxicab routing, grid paths" }
  },
  {
    id: "chebyshev-distance-calculator", name: "Chebyshev Distance Calculator",
    description: "Find Chebyshev chessboard distance between two coordinate points.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "d = \\max(|x_1 - x_2|, |y_1 - y_2|)",
    inputs: [
      { id: "x1", label: "x Coordinate of Point 1", type: "number", defaultValue: 2.0 },
      { id: "y1", label: "y Coordinate of Point 1", type: "number", defaultValue: 3.0 },
      { id: "x2", label: "x Coordinate of Point 2", type: "number", defaultValue: 7.0 },
      { id: "y2", label: "y Coordinate of Point 2", type: "number", defaultValue: 9.0 }
    ],
    outputs: [
      { id: "distance", label: "Chebyshev Distance", formula: "max(abs(x1 - x2), abs(y1 - y2))", unit: "" }
    ],
    theory: "Chebyshev distance measures the maximum coordinate difference, reflecting the minimum moves a King requires on a chessboard to travel between squares.",
    faq: [],
    seoMeta: { title: "Chebyshev Chessboard Distance Calculator", description: "Calculate chessboard distance values.", keywords: "chebyshev, chessboard distance, maximum coordinate delta" }
  },
  {
    id: "minkowski-distance-calculator", name: "Minkowski Distance Calculator",
    description: "Calculate Minkowski generalized distance metric for an exponent parameter p.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "d = \\left( |x_1 - x_2|^p + |y_1 - y_2|^p \\right)^{1/p}",
    inputs: [
      { id: "x1", label: "x Coordinate of Point 1", type: "number", defaultValue: 1.0 },
      { id: "y1", label: "y Coordinate of Point 1", type: "number", defaultValue: 2.0 },
      { id: "x2", label: "x Coordinate of Point 2", type: "number", defaultValue: 5.0 },
      { id: "y2", label: "y Coordinate of Point 2", type: "number", defaultValue: 7.0 },
      { id: "p", label: "Minkowski Order Exponent (p)", type: "number", defaultValue: 3, validation: { min: 1 } }
    ],
    outputs: [
      { id: "distance", label: "Minkowski Distance", formula: "(abs(x1 - x2)^p + abs(y1 - y2)^p)^(1/p)", unit: "" }
    ],
    theory: "Minkowski distance generalizes Euclidean (p=2) and Manhattan (p=1) metrics, parameterizing vector distance using custom numerical powers (p).",
    faq: [],
    seoMeta: { title: "Minkowski Distance Calculator", description: "Determine Minkowski metric distances for power p.", keywords: "minkowski distance, metric space, generalized distance norm" }
  },
  {
    id: "gini-index-coefficient", name: "Gini Index / Coefficient Calculator",
    description: "Compute the Gini Coefficient inequality index from inequality areas A and B.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "G = \\frac{A}{A + B}",
    inputs: [
      { id: "a", label: "Area of Inequality (A)", type: "number", defaultValue: 15.0 },
      { id: "b", label: "Area Under Lorenz Curve (B)", type: "number", defaultValue: 35.0 }
    ],
    outputs: [
      { id: "gini", label: "Gini Coefficient (G)", formula: "a / (a + b)", unit: "" },
      { id: "gini_index", label: "Gini Index", formula: "(a / (a + b)) * 100", unit: "" }
    ],
    theory: "The Gini coefficient measures income inequality within a population. A coefficient of 0 indicates perfect equality, while a coefficient of 1 (or 100) indicates perfect inequality.",
    faq: [],
    seoMeta: { title: "Gini Coefficient Calculator", description: "Compute Gini inequality coefficients from Lorenz areas.", keywords: "gini coefficient, gini index, lorenz curve, inequality measure" }
  },
  {
    id: "lorenz-curve-area-calculator", name: "Lorenz Curve Area Calculator",
    description: "Estimate the area under a Lorenz Curve using cumulative wealth percentiles.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{Area} \\approx 0.2 (y_1 + y_2 + y_3 + y_4 + 0.5)",
    inputs: [
      { id: "y1", label: "Cumulative Share at 20% (y1)", type: "number", defaultValue: 0.05 },
      { id: "y2", label: "Cumulative Share at 40% (y2)", type: "number", defaultValue: 0.15 },
      { id: "y3", label: "Cumulative Share at 60% (y3)", type: "number", defaultValue: 0.35 },
      { id: "y4", label: "Cumulative Share at 80% (y4)", type: "number", defaultValue: 0.60 }
    ],
    outputs: [
      { id: "area", label: "Estimated Lorenz Area", formula: "0.2 * (y1 + y2 + y3 + y4 + 0.5)", unit: "" }
    ],
    theory: "The Lorenz curve represents cumulative wealth distribution. Calculating the area underneath it via trapezoidal approximation aids in calculating indices like the Gini coefficient.",
    faq: [],
    seoMeta: { title: "Lorenz Curve Area Calculator", description: "Estimate Lorenz Curve areas using trapezoidal integrals.", keywords: "lorenz curve area, income distribution, trapezoidal integration" }
  },
  {
    id: "herfindahl-hirschman-index", name: "Herfindahl-Hirschman Index (HHI) Calculator",
    description: "Determine the Herfindahl-Hirschman Index (HHI) representing market concentration.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{HHI} = \\sum S_i^2",
    inputs: [
      { id: "s1", label: "Market Share Firm 1 (%)", type: "number", defaultValue: 40 },
      { id: "s2", label: "Market Share Firm 2 (%)", type: "number", defaultValue: 30 },
      { id: "s3", label: "Market Share Firm 3 (%)", type: "number", defaultValue: 20 },
      { id: "s4", label: "Market Share Firm 4 (%)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "hhi", label: "HHI Score", formula: "s1^2 + s2^2 + s3^2 + s4^2", unit: "" }
    ],
    theory: "HHI is a standard metric of market concentration. Scores below 1500 represent competitive markets; scores from 1500 to 2500 indicate moderate concentration; scores above 2500 reflect highly concentrated monopolies.",
    faq: [],
    seoMeta: { title: "Herfindahl-Hirschman Index (HHI) Calculator", description: "Compute HHI monopoly indicators from firm shares.", keywords: "HHI index, market concentration, anti-trust regulation, monopoly score" }
  },
  {
    id: "shannon-entropy-calculator", name: "Shannon Entropy Calculator",
    description: "Compute Shannon Information Entropy for a system with three discrete states.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "H(X) = - \\sum p_i \\log_2(p_i)",
    inputs: [
      { id: "p1", label: "Probability State 1 (p1)", type: "number", defaultValue: 0.50, validation: { min: 0.0001, max: 0.9999 } },
      { id: "p2", label: "Probability State 2 (p2)", type: "number", defaultValue: 0.35, validation: { min: 0.0001, max: 0.9999 } },
      { id: "p3", label: "Probability State 3 (p3)", type: "number", defaultValue: 0.15, validation: { min: 0.0001, max: 0.9999 } }
    ],
    outputs: [
      { id: "entropy", label: "Shannon Entropy (H)", formula: "-(p1 * log2(p1) + p2 * log2(p2) + p3 * log2(p3))", unit: "bits" }
    ],
    theory: "Shannon entropy measures information uncertainty or average surprise inside a probability distribution, serving as a pillar of information theory.",
    faq: [],
    seoMeta: { title: "Shannon Information Entropy Calculator", description: "Compute Shannon entropy values in bits.", keywords: "shannon entropy, information theory, uncertainty bits" }
  },
  {
    id: "kullback-leibler-kl-divergence", name: "Kullback-Leibler (KL) Divergence Calculator",
    description: "Calculate the relative entropy (KL Divergence) between two distributions P and Q.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "D_{\\text{KL}}(P \\parallel Q) = \\sum P(i) \\ln\\left( \\frac{P(i)}{Q(i)} \\right)",
    inputs: [
      { id: "p1", label: "P(1) Probability", type: "number", defaultValue: 0.60, validation: { min: 0.0001 } },
      { id: "q1", label: "Q(1) Probability", type: "number", defaultValue: 0.40, validation: { min: 0.0001 } },
      { id: "p2", label: "P(2) Probability", type: "number", defaultValue: 0.40, validation: { min: 0.0001 } },
      { id: "q2", label: "Q(2) Probability", type: "number", defaultValue: 0.60, validation: { min: 0.0001 } }
    ],
    outputs: [
      { id: "kl", label: "KL Divergence DKL(P || Q)", formula: "p1 * log(p1 / q1) + p2 * log(p2 / q2)", unit: "nats" }
    ],
    theory: "KL divergence is an asymmetric measure of the difference between two probability distributions P and Q, reflecting the extra information required to encode samples from P using Q.",
    faq: [],
    seoMeta: { title: "Kullback-Leibler Divergence Calculator", description: "Calculate relative entropy KL divergence rates.", keywords: "KL divergence, relative entropy, cross entropy, distributions drift" }
  },
  {
    id: "shannon-wiener-diversity-index", name: "Shannon-Wiener Diversity Index Calculator",
    description: "Compute Shannon-Wiener biological species diversity index H'.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "H' = - \\sum p_i \\ln(p_i)",
    inputs: [
      { id: "p1", label: "Species 1 Proportion (p1)", type: "number", defaultValue: 0.50, validation: { min: 0.0001 } },
      { id: "p2", label: "Species 2 Proportion (p2)", type: "number", defaultValue: 0.30, validation: { min: 0.0001 } },
      { id: "p3", label: "Species 3 Proportion (p3)", type: "number", defaultValue: 0.20, validation: { min: 0.0001 } }
    ],
    outputs: [
      { id: "index", label: "Shannon-Wiener Index (H')", formula: "-(p1 * log(p1) + p2 * log(p2) + p3 * log(p3))", unit: "" }
    ],
    theory: "The Shannon-Wiener index measures taxonomic diversity in ecology, accounting for species richness and evenness of individuals across species categories.",
    faq: [],
    seoMeta: { title: "Shannon-Wiener Diversity Index", description: "Determine ecological diversity indices.", keywords: "shannon-wiener index, species diversity, evenness, ecology" }
  },
  {
    id: "simpsons-diversity-index", name: "Simpson's Diversity Index Calculator",
    description: "Calculate Simpson's index (D), Index of Diversity (1-D), and Reciprocal Index (1/D).",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "D = \\frac{\\sum n_i(n_i - 1)}{N(N - 1)}",
    inputs: [
      { id: "n1", label: "Species 1 Count (n1)", type: "number", defaultValue: 10 },
      { id: "n2", label: "Species 2 Count (n2)", type: "number", defaultValue: 15 },
      { id: "n3", label: "Species 3 Count (n3)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "d", label: "Simpson's Index (D)", formula: "(n1*(n1-1) + n2*(n2-1) + n3*(n3-1)) / ((n1+n2+n3) * (n1+n2+n3-1))", unit: "" },
      { id: "index", label: "Index of Diversity (1 - D)", formula: "1 - (n1*(n1-1) + n2*(n2-1) + n3*(n3-1)) / ((n1+n2+n3) * (n1+n2+n3-1))", unit: "" },
      { id: "reciprocal", label: "Reciprocal Index (1 / D)", formula: "1 / ((n1*(n1-1) + n2*(n2-1) + n3*(n3-1)) / ((n1+n2+n3) * (n1+n2+n3-1)))", unit: "" }
    ],
    theory: "Simpson's index measures the probability that two randomly selected individuals from a sample belong to the same species category.",
    faq: [],
    seoMeta: { title: "Simpson's Diversity Index Calculator", description: "Compute Simpson indices of biological diversity.", keywords: "simpson index, ecological diversity, species richness" }
  },
  {
    id: "mae-calculator", name: "MAE (Mean Absolute Error) Calculator",
    description: "Calculate MAE representing average prediction magnitude errors.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{MAE} = \\frac{\\sum |y_i - \\hat{y}_i|}{N}",
    inputs: [
      { id: "y1", label: "Actual Value 1", type: "number", defaultValue: 10.0 },
      { id: "yhat1", label: "Predicted 1", type: "number", defaultValue: 9.2 },
      { id: "y2", label: "Actual Value 2", type: "number", defaultValue: 20.0 },
      { id: "yhat2", label: "Predicted 2", type: "number", defaultValue: 20.5 },
      { id: "y3", label: "Actual Value 3", type: "number", defaultValue: 30.0 },
      { id: "yhat3", label: "Predicted 3", type: "number", defaultValue: 28.5 }
    ],
    outputs: [
      { id: "mae", label: "Mean Absolute Error (MAE)", formula: "(abs(y1 - yhat1) + abs(y2 - yhat2) + abs(y3 - yhat3)) / 3", unit: "" }
    ],
    theory: "MAE measures the average magnitude of error in a set of predictions, without considering their direction. It is a linear score meaning all individual differences are weighted equally.",
    faq: [],
    seoMeta: { title: "Mean Absolute Error (MAE) Calculator", description: "Determine model MAE prediction accuracy stats.", keywords: "MAE, mean absolute error, model residual error" }
  },
  {
    id: "mse-calculator", name: "MSE (Mean Squared Error) Calculator",
    description: "Calculate MSE representing squared prediction errors.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{MSE} = \\frac{\\sum (y_i - \\hat{y}_i)^2}{N}",
    inputs: [
      { id: "y1", label: "Actual Value 1", type: "number", defaultValue: 10.0 },
      { id: "yhat1", label: "Predicted 1", type: "number", defaultValue: 9.2 },
      { id: "y2", label: "Actual Value 2", type: "number", defaultValue: 20.0 },
      { id: "yhat2", label: "Predicted 2", type: "number", defaultValue: 20.5 },
      { id: "y3", label: "Actual Value 3", type: "number", defaultValue: 30.0 },
      { id: "yhat3", label: "Predicted 3", type: "number", defaultValue: 28.5 }
    ],
    outputs: [
      { id: "mse", label: "Mean Squared Error (MSE)", formula: "((y1 - yhat1)^2 + (y2 - yhat2)^2 + (y3 - yhat3)^2) / 3", unit: "" }
    ],
    theory: "MSE penalizes larger errors disproportionately because differences are squared. It is heavily utilized as a loss function in training neural networks and regression models.",
    faq: [],
    seoMeta: { title: "Mean Squared Error (MSE) Calculator", description: "Determine MSE scores for model evaluations.", keywords: "MSE, mean squared error, prediction loss function" }
  },
  {
    id: "rmse-calculator", name: "RMSE (Root Mean Squared Error) Calculator",
    description: "Determine Root Mean Squared Error (RMSE) of regression models.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{RMSE} = \\sqrt{\\text{MSE}}",
    inputs: [
      { id: "mse", label: "Mean Squared Error (MSE)", type: "number", defaultValue: 1.04 }
    ],
    outputs: [
      { id: "rmse", label: "Root Mean Squared Error (RMSE)", formula: "sqrt(mse)", unit: "" }
    ],
    theory: "RMSE is the square root of Mean Squared Error. It maps the error scale back to the original units of the dependent variable, easing regression diagnosis interpretation.",
    faq: [],
    seoMeta: { title: "Root Mean Squared Error (RMSE) Calculator", description: "Compute standard RMSE values from MSE.", keywords: "RMSE, root mean squared error, scale-dependent residuals" }
  },
  {
    id: "mape-calculator", name: "MAPE (Mean Absolute Percentage Error) Calculator",
    description: "Determine percentage prediction errors using MAE relative to actual parameters.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{MAPE} = \\frac{100}{N} \\sum \\left| \\frac{y_i - \\hat{y}_i}{y_i} \\right|",
    inputs: [
      { id: "y1", label: "Actual Value 1", type: "number", defaultValue: 10.0, validation: { min: 0.0001 } },
      { id: "yhat1", label: "Predicted 1", type: "number", defaultValue: 9.5 },
      { id: "y2", label: "Actual Value 2", type: "number", defaultValue: 25.0, validation: { min: 0.0001 } },
      { id: "yhat2", label: "Predicted 2", type: "number", defaultValue: 23.8 }
    ],
    outputs: [
      { id: "mape", label: "MAPE Score", formula: "50 * (abs(y1 - yhat1)/y1 + abs(y2 - yhat2)/y2)", unit: "%" }
    ],
    theory: "MAPE expresses error as a percentage of actual values, allowing scale-independent comparison of model forecasts across different datasets.",
    faq: [],
    seoMeta: { title: "MAPE Forecasting Error Calculator", description: "Determine forecasting accuracy using MAPE metrics.", keywords: "MAPE, mean absolute percentage error, forecast scale" }
  },
  {
    id: "rouge-score-calculator", name: "ROUGE Score Calculator",
    description: "Calculate text summarization overlap metrics (Recall, Precision, F1) using ROUGE concepts.",
    category: "statistics", subcategory: "data-science",
    scientificFormula: "\\text{ROUGE-F1} = \\frac{2 \\cdot \\text{Recall} \\cdot \\text{Precision}}{\\text{Recall} + \\text{Precision}}",
    inputs: [
      { id: "overlapping_ngrams", label: "Overlapping n-grams", type: "number", defaultValue: 8 },
      { id: "reference_ngrams", label: "Total reference n-grams", type: "number", defaultValue: 10 },
      { id: "candidate_ngrams", label: "Total candidate summary n-grams", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "recall", label: "ROUGE-Recall", formula: "overlapping_ngrams / reference_ngrams", unit: "" },
      { id: "precision", label: "ROUGE-Precision", formula: "overlapping_ngrams / candidate_ngrams", unit: "" },
      { id: "f1", label: "ROUGE-F1 Score", formula: "2 * (overlapping_ngrams / reference_ngrams) * (overlapping_ngrams / candidate_ngrams) / ((overlapping_ngrams / reference_ngrams) + (overlapping_ngrams / candidate_ngrams))", unit: "" }
    ],
    theory: "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) is a set of metrics used for evaluating automatic summarization and translation software in natural language processing.",
    faq: [],
    seoMeta: { title: "ROUGE NLP Score Calculator", description: "Calculate NLP summaries ROUGE coefficients.", keywords: "ROUGE score, text summarization evaluation, recall precision NLP" }
  },

  // 📋 OTHER STATISTICAL MEASURES & INDEXING (22 Calculators)
  {
    id: "moving-average-calculator", name: "Moving Average Calculator",
    description: "Calculate standard arithmetic moving average for three consecutive values.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{MA} = \\frac{x_{t} + x_{t-1} + x_{t-2}}{3}",
    inputs: [
      { id: "v1", label: "Value 1 (Oldest)", type: "number", defaultValue: 10.0 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 12.0 },
      { id: "v3", label: "Value 3 (Newest)", type: "number", defaultValue: 14.0 }
    ],
    outputs: [
      { id: "ma", label: "Simple Moving Average", formula: "(v1 + v2 + v3) / 3", unit: "" }
    ],
    theory: "Moving averages smooth time-series data by filtering out short-term fluctuations to reveal underlying trends.",
    faq: [],
    seoMeta: { title: "Simple Moving Average Calculator", description: "Compute standard moving averages for trend smoothing.", keywords: "moving average, SMA, data smoothing, time series" }
  },
  {
    id: "weighted-moving-average", name: "Weighted Moving Average Calculator",
    description: "Smooth data using weighted moving average (WMA) giving linearly increasing weights to newer data.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{WMA} = \\frac{1 x_{t-2} + 2 x_{t-1} + 3 x_t}{6}",
    inputs: [
      { id: "v1", label: "Value 1 (Oldest)", type: "number", defaultValue: 10.0 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 11.5 },
      { id: "v3", label: "Value 3 (Newest)", type: "number", defaultValue: 15.0 }
    ],
    outputs: [
      { id: "wma", label: "Weighted Moving Average", formula: "(1*v1 + 2*v2 + 3*v3) / 6", unit: "" }
    ],
    theory: "WMA assigns heavier weight to recent data points, making it more responsive to fresh trend transitions than standard SMAs.",
    faq: [],
    seoMeta: { title: "Weighted Moving Average Calculator", description: "Compute linearly weighted moving averages.", keywords: "WMA, weighted average, trend responsiveness" }
  },
  {
    id: "exponential-moving-average", name: "Exponential Moving Average (EMA) Calculator",
    description: "Determine EMA smoothings by factoring previous EMA benchmarks.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{EMA}_t = (P_t \\cdot k) + (\\text{EMA}_{t-1} \\cdot (1 - k))",
    inputs: [
      { id: "current_price", label: "Current Period Price (Pt)", type: "number", defaultValue: 45.0 },
      { id: "prev_ema", label: "Previous Period EMA (EMA t-1)", type: "number", defaultValue: 42.0 },
      { id: "k", label: "Smoothing Constant (k, e.g. 0.5)", type: "number", defaultValue: 0.5, validation: { min: 0.0001, max: 1.0 } }
    ],
    outputs: [
      { id: "ema", label: "Calculated EMA", formula: "current_price * k + prev_ema * (1 - k)", unit: "" }
    ],
    theory: "EMA applies exponentially decreasing weights to older data. Unlike WMA, it retains a memory of all historical price signals within its decaying multiplier.",
    faq: [],
    seoMeta: { title: "Exponential Moving Average Calculator", description: "Determine EMA levels dynamically.", keywords: "EMA, exponential moving average, decaying multiplier" }
  },
  {
    id: "single-exponential-smoothing", name: "Single Exponential Smoothing Calculator",
    description: "Forecast next period values using simple single exponential smoothings.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "F_{t+1} = \\alpha Y_t + (1 - \\alpha) F_t",
    inputs: [
      { id: "actual", label: "Actual Current Value (Yt)", type: "number", defaultValue: 120.0 },
      { id: "prev_forecast", label: "Previous Forecast (Ft)", type: "number", defaultValue: 110.0 },
      { id: "alpha", label: "Alpha Smoothing (α)", type: "number", defaultValue: 0.3, validation: { min: 0, max: 1 } }
    ],
    outputs: [
      { id: "forecast", label: "Next Period Forecast (Ft+1)", formula: "alpha * actual + (1 - alpha) * prev_forecast", unit: "" }
    ],
    theory: "Single exponential smoothing is used for short-term forecasting when data exhibits no clear trend or seasonal patterns.",
    faq: [],
    seoMeta: { title: "Single Exponential Smoothing Calculator", description: "Forecast averages using single smoothing equations.", keywords: "exponential smoothing, forecast, alpha parameter" }
  },
  {
    id: "double-exponential-smoothing", name: "Double Exponential Smoothing Calculator",
    description: "Smooth time series displaying linear trends using Holt's double exponential smoothing.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "F_{t+1} = L_t + T_t",
    inputs: [
      { id: "actual", label: "Actual Value (Yt)", type: "number", defaultValue: 52.0 },
      { id: "prev_level", label: "Previous Level (Lt-1)", type: "number", defaultValue: 48.0 },
      { id: "prev_trend", label: "Previous Trend (Tt-1)", type: "number", defaultValue: 2.0 },
      { id: "alpha", label: "Level Factor (α)", type: "number", defaultValue: 0.2, validation: { min: 0, max: 1 } },
      { id: "beta", label: "Trend Factor (β)", type: "number", defaultValue: 0.1, validation: { min: 0, max: 1 } }
    ],
    outputs: [
      { id: "level", label: "Estimated Level (Lt)", formula: "alpha * actual + (1 - alpha) * (prev_level + prev_trend)", unit: "" },
      { id: "trend", label: "Estimated Trend (Tt)", formula: "beta * (alpha * actual + (1 - alpha) * (prev_level + prev_trend) - prev_level) + (1 - beta) * prev_trend", unit: "" },
      { id: "forecast", label: "Next Period Forecast (Ft+1)", formula: "(alpha * actual + (1 - alpha) * (prev_level + prev_trend)) + (beta * (alpha * actual + (1 - alpha) * (prev_level + prev_trend) - prev_level) + (1 - beta) * prev_trend)", unit: "" }
    ],
    theory: "Holt's double exponential smoothing accounts for linear growth tendencies by smoothing both the baseline level and the upward/downward trend component.",
    faq: [],
    seoMeta: { title: "Double Exponential Smoothing Calculator", description: "Apply Holt's linear trend double smoothing.", keywords: "double smoothing, holt's method, trend forecasting" }
  },
  {
    id: "cronbachs-alpha-calculator", name: "Cronbach's Alpha Calculator",
    description: "Determine psychometric questionnaire internal consistency reliability.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\alpha = \\frac{k}{k - 1} \\left( 1 - \\frac{\\sum s_i^2}{s_x^2} \\right)",
    inputs: [
      { id: "k", label: "Number of Items (k)", type: "number", defaultValue: 5 },
      { id: "sum_var", label: "Sum of Item Variances (Σsi²)", type: "number", defaultValue: 4.2 },
      { id: "total_var", label: "Variance of Total Test (sx²)", type: "number", defaultValue: 15.0 }
    ],
    outputs: [
      { id: "alpha", label: "Cronbach's Alpha (α)", formula: "(k / (k - 1)) * (1 - sum_var / total_var)", unit: "" }
    ],
    theory: "Cronbach's alpha assesses how closely related a set of items are as a group. A score above 0.70 reflects acceptable reliability, indicating that the items reliably measure the same latent construct.",
    faq: [],
    seoMeta: { title: "Cronbach's Alpha Calculator", description: "Compute psychometric test reliability coefficients.", keywords: "cronbach's alpha, internal consistency, psychometrics, survey reliability" }
  },
  {
    id: "cohens-kappa-calculator", name: "Cohen's Kappa Calculator",
    description: "Calculate Cohen's Kappa representing inter-rater agreement for categorical items.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\kappa = \\frac{p_o - p_e}{1 - p_e}",
    inputs: [
      { id: "po", label: "Observed Agreement Probability (po)", type: "number", defaultValue: 0.85 },
      { id: "pe", label: "Expected Agreement Probability (pe)", type: "number", defaultValue: 0.60 }
    ],
    outputs: [
      { id: "kappa", label: "Cohen's Kappa (κ)", formula: "(po - pe) / (1 - pe)", unit: "" }
    ],
    theory: "Cohen's kappa measures inter-rater agreement for qualitative (categorical) items, accounting for the agreement that could occur by chance.",
    faq: [],
    seoMeta: { title: "Cohen's Kappa Calculator", description: "Compute Cohen's kappa inter-rater agreement coefficient.", keywords: "cohen's kappa, inter-rater agreement, categorical reliability" }
  },
  {
    id: "fleiss-kappa-calculator", name: "Fleiss' Kappa Calculator",
    description: "Calculate Fleiss' Kappa for inter-rater agreement among multiple raters.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\kappa = \\frac{\\bar{P} - \\bar{P}_e}{1 - \\bar{P}_e}",
    inputs: [
      { id: "po", label: "Mean Observed Agreement (P̄)", type: "number", defaultValue: 0.78 },
      { id: "pe", label: "Mean Expected Agreement (P̄e)", type: "number", defaultValue: 0.45 }
    ],
    outputs: [
      { id: "kappa", label: "Fleiss' Kappa", formula: "(po - pe) / (1 - pe)", unit: "" }
    ],
    theory: "Fleiss' kappa extends Cohen's kappa to situations where a fixed number of raters (more than two) classify items into mutually exclusive categories.",
    faq: [],
    seoMeta: { title: "Fleiss' Kappa Calculator", description: "Calculate Fleiss' kappa for multiple judge agreements.", keywords: "fleiss kappa, multi-rater agreement, statistics" }
  },
  {
    id: "split-half-reliability", name: "Split-Half Reliability Calculator",
    description: "Estimate full test reliability from half-test correlation using Spearman-Brown formula.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\rho_{sb} = \\frac{2 r_{12}}{1 + r_{12}}",
    inputs: [
      { id: "r_half", label: "Correlation between halves (r12)", type: "number", defaultValue: 0.65 }
    ],
    outputs: [
      { id: "r_sb", label: "Spearman-Brown Reliability", formula: "2 * r_half / (1 + r_half)", unit: "" }
    ],
    theory: "Split-half reliability measures internal consistency by splitting a test in two, correlating the halves, and adjusting with the Spearman-Brown prophecy formula to reflect full test length.",
    faq: [],
    seoMeta: { title: "Split-Half Reliability Calculator", description: "Construct Spearman-Brown half-test reliability indicators.", keywords: "split-half, spearman-brown, prophecy formula, reliability" }
  },
  {
    id: "standard-error-measurement", name: "Standard Error of Measurement (SEM) Calculator",
    description: "Calculate Standard Error of Measurement (SEM) for score bands.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{SEM} = s \\sqrt{1 - r}",
    inputs: [
      { id: "sd", label: "Test Total SD (s)", type: "number", defaultValue: 15.0 },
      { id: "r", label: "Reliability Coefficient (r)", type: "number", defaultValue: 0.85 }
    ],
    outputs: [
      { id: "sem", label: "Standard Error of Measurement", formula: "sd * sqrt(1 - r)", unit: "score points" }
    ],
    theory: "SEM estimates how repeated testing scores spread around a student's 'true' score, based on test reliability.",
    faq: [],
    seoMeta: { title: "Standard Error of Measurement Calculator", description: "Compute test scoring SEM margins.", keywords: "SEM, standard error of measurement, score reliability" }
  },
  {
    id: "phi-coefficient-calculator", name: "phi Coefficient Calculator",
    description: "Calculate phi coefficient (correlation for two binary variables).",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\phi = \\frac{ad - bc}{\\sqrt{(a+b)(c+d)(a+c)(b+d)}}",
    inputs: [
      { id: "tp", label: "Cell a (Yes/Yes)", type: "number", defaultValue: 40 },
      { id: "fp", label: "Cell b (Yes/No)", type: "number", defaultValue: 10 },
      { id: "fn", label: "Cell c (No/Yes)", type: "number", defaultValue: 15 },
      { id: "tn", label: "Cell d (No/No)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "phi", label: "phi Coefficient (φ)", formula: "(tp * tn - fp * fn) / sqrt((tp + fp) * (fn + tn) * (tp + fn) * (fp + tn))", unit: "" }
    ],
    theory: "The phi coefficient is a measure of association for two binary variables, identical to the Pearson correlation coefficient calculated for binary datasets.",
    faq: [],
    seoMeta: { title: "Phi Coefficient Calculator", description: "Determine phi correlation coefficients for binary grids.", keywords: "phi coefficient, binary correlation, association measure" }
  },
  {
    id: "cramers-v-calculator", name: "Cramer's V Calculator",
    description: "Calculate Cramer's V representing association strength in nominal tables.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "V = \\sqrt{\\frac{\\chi^2}{n(k - 1)}}",
    inputs: [
      { id: "chi2", label: "Chi-Square Statistic (χ²)", type: "number", defaultValue: 18.5 },
      { id: "n", label: "Total Sample Size (n)", type: "number", defaultValue: 200 },
      { id: "k", label: "Minimum of Rows/Cols (k)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "v", label: "Cramer's V Coefficient", formula: "sqrt(chi2 / (n * (k - 1)))", unit: "" }
    ],
    theory: "Cramer's V measures association between nominal variables in contingency tables, scaling from 0 (no association) to 1 (perfect association).",
    faq: [],
    seoMeta: { title: "Cramer's V Calculator", description: "Compute Cramer's V nominal association indices.", keywords: "cramer's V, contingency tables, nominal correlation" }
  },
  {
    id: "contingency-coefficient-calculator", name: "Contingency Coefficient Calculator",
    description: "Determine Pearson's Contingency Coefficient (C) for nominal tables.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "C = \\sqrt{\\frac{\\chi^2}{\\chi^2 + n}}",
    inputs: [
      { id: "chi2", label: "Chi-Square Value (χ²)", type: "number", defaultValue: 14.2 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 150 }
    ],
    outputs: [
      { id: "c", label: "Contingency Coefficient (C)", formula: "sqrt(chi2 / (chi2 + n))", unit: "" }
    ],
    theory: "Pearson's contingency coefficient measures nominal association based on Chi-Square. It is bound below by 0, but its upper limit is always less than 1, depending on table size.",
    faq: [],
    seoMeta: { title: "Contingency Coefficient Calculator", description: "Compute contingency coefficients from Chi-Square values.", keywords: "contingency coefficient, nominal correlation, chi-square association" }
  },
  {
    id: "kendalls-tau-calculator", name: "Kendall's Tau Calculator",
    description: "Compute Kendall's Tau rank correlation coefficient.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\tau = \\frac{C - D}{\\frac{1}{2} N(N - 1)}",
    inputs: [
      { id: "c", label: "Concordant Pairs (C)", type: "number", defaultValue: 32 },
      { id: "d", label: "Discordant Pairs (D)", type: "number", defaultValue: 8 },
      { id: "n", label: "Sample Size (N)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "tau", label: "Kendall's Tau (τ)", formula: "(c - d) / (0.5 * n * (n - 1))", unit: "" }
    ],
    theory: "Kendall's tau is a non-parametric statistic used to measure ordinal association, analyzing concordant vs discordant pairs.",
    faq: [],
    seoMeta: { title: "Kendall's Tau Calculator", description: "Calculate Kendall's tau non-parametric correlation.", keywords: "kendall's tau, concordant pairs, rank correlation" }
  },
  {
    id: "goodman-kruskals-gamma", name: "Goodman and Kruskal's Gamma Calculator",
    description: "Determine Goodman and Kruskal's Gamma (G) for ranked data.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "G = \\frac{C - D}{C + D}",
    inputs: [
      { id: "c", label: "Concordant Pairs (C)", type: "number", defaultValue: 45 },
      { id: "d", label: "Discordant Pairs (D)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "gamma", label: "Gamma Coefficient (G)", formula: "(c - d) / (c + d)", unit: "" }
    ],
    theory: "Gamma is a symmetric measure of association between two ordinal variables, ignoring ties entirely.",
    faq: [],
    seoMeta: { title: "Goodman and Kruskal's Gamma", description: "Find Gamma association coefficients for ranked items.", keywords: "goodman kruskal gamma, ordinal association, rank ties" }
  },
  {
    id: "yules-q-calculator", name: "Yule's Q Calculator",
    description: "Compute Yule's Q association for 2x2 categorical matrices.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "Q = \\frac{ad - bc}{ad + bc}",
    inputs: [
      { id: "ad", label: "Diagonal Product (ad)", type: "number", defaultValue: 1400 },
      { id: "bc", label: "Off-Diagonal Product (bc)", type: "number", defaultValue: 350 }
    ],
    outputs: [
      { id: "q", label: "Yule's Q", formula: "(ad - bc) / (ad + bc)", unit: "" }
    ],
    theory: "Yule's Q is a symmetric measure of association for 2x2 tables, equivalent to Goodman and Kruskal's Gamma calculated for a 2x2 grid.",
    faq: [],
    seoMeta: { title: "Yule's Q Calculator", description: "Compute Yule's Q correlation coefficient.", keywords: "yule's Q, association coefficient, categorical correlation" }
  },
  {
    id: "odds-ratio-calculator-stats", name: "Odds Ratio Calculator",
    description: "Compute standard Odds Ratio (OR) in case-control clinical contexts.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{OR} = \\frac{a \\cdot d}{b \\cdot c}",
    inputs: [
      { id: "a", label: "Exposed Cases (a)", type: "number", defaultValue: 50 },
      { id: "b", label: "Exposed Controls (b)", type: "number", defaultValue: 30 },
      { id: "c", label: "Unexposed Cases (c)", type: "number", defaultValue: 20 },
      { id: "d", label: "Unexposed Controls (d)", type: "number", defaultValue: 80 }
    ],
    outputs: [
      { id: "or", label: "Odds Ratio (OR)", formula: "(a * d) / (b * c)", unit: "" }
    ],
    theory: "Odds Ratio represents the odds that an outcome will occur given a particular exposure, compared to odds in the absence of exposure. Bound heavily to retrospective studies.",
    faq: [],
    seoMeta: { title: "Odds Ratio (OR) Clinical Calculator", description: "Compute retrospective clinical odds ratios.", keywords: "odds ratio, clinical trials, case-control, exposure odds" }
  },
  {
    id: "relative-risk-calculator-stats", name: "Relative Risk Calculator",
    description: "Determine Relative Risk (RR) probability ratios in prospective cohort studies.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{RR} = \\frac{a / (a + b)}{c / (c + d)}",
    inputs: [
      { id: "a", label: "Exposed Cases (a)", type: "number", defaultValue: 45 },
      { id: "b", label: "Exposed Controls (b)", type: "number", defaultValue: 155 },
      { id: "c", label: "Unexposed Cases (c)", type: "number", defaultValue: 15 },
      { id: "d", label: "Unexposed Controls (d)", type: "number", defaultValue: 185 }
    ],
    outputs: [
      { id: "rr", label: "Relative Risk (RR)", formula: "(a / (a + b)) / (c / (c + d))", unit: "" }
    ],
    theory: "Relative Risk compares probability of events in exposed groups to unexposed groups. Used primarily in prospective cohort studies.",
    faq: [],
    seoMeta: { title: "Relative Risk (RR) Cohort Calculator", description: "Determine prospective relative risk event rates.", keywords: "relative risk, risk ratio, cohort studies, exposure risk" }
  },
  {
    id: "number-needed-to-treat", name: "Number Needed to Treat (NNT) Calculator",
    description: "Compute Absolute Risk Reduction (ARR) and Number Needed to Treat (NNT).",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{NNT} = \\frac{1}{\\text{ARR}}",
    inputs: [
      { id: "cer", label: "Control Event Rate (CER)", type: "number", defaultValue: 0.20 },
      { id: "eer", label: "Experimental Event Rate (EER)", type: "number", defaultValue: 0.12 }
    ],
    outputs: [
      { id: "arr", label: "Absolute Risk Reduction (ARR)", formula: "abs(cer - eer)", unit: "" },
      { id: "nnt", label: "Number Needed to Treat (NNT)", formula: "1 / abs(cer - eer)", unit: "patients" }
    ],
    theory: "NNT is the average number of patients who need to receive the experimental treatment to prevent one additional bad outcome.",
    faq: [],
    seoMeta: { title: "Number Needed to Treat (NNT) Calculator", description: "Find clinical NNT and absolute risk reduction.", keywords: "NNT, number needed to treat, risk reduction, clinical efficacy" }
  },
  {
    id: "likelihood-ratio-calculator", name: "Likelihood Ratio Calculator",
    description: "Calculate Positive and Negative Likelihood Ratios from Sensitivity and Specificity.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{LR}+ = \\frac{\\text{Sens}}{1 - \\text{Spec}}",
    inputs: [
      { id: "sensitivity", label: "Diagnostic Sensitivity (0 to 1)", type: "number", defaultValue: 0.85, validation: { min: 0, max: 1 } },
      { id: "specificity", label: "Diagnostic Specificity (0 to 1)", type: "number", defaultValue: 0.90, validation: { min: 0, max: 1 } }
    ],
    outputs: [
      { id: "lr_pos", label: "Positive Likelihood Ratio (LR+)", formula: "sensitivity / (1 - specificity)", unit: "" },
      { id: "lr_neg", label: "Negative Likelihood Ratio (LR-)", formula: "(1 - sensitivity) / specificity", unit: "" }
    ],
    theory: "Likelihood ratios combine sensitivity and specificity to evaluate how a positive or negative test result shifts pre-test disease probability.",
    faq: [],
    seoMeta: { title: "Likelihood Ratio Calculator", description: "Compute diagnostic positive and negative likelihood ratios.", keywords: "likelihood ratios, LR positive, LR negative, clinical diagnosis" }
  },
  {
    id: "diagnostic-odds-ratio", name: "Diagnostic Odds Ratio Calculator",
    description: "Determine the Diagnostic Odds Ratio (DOR) for diagnostic tests.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{DOR} = \\frac{\\text{LR}+}{\\text{LR}-}",
    inputs: [
      { id: "lr_pos", label: "Positive Likelihood Ratio (LR+)", type: "number", defaultValue: 8.5 },
      { id: "lr_neg", label: "Negative Likelihood Ratio (LR-)", type: "number", defaultValue: 0.17 }
    ],
    outputs: [
      { id: "dor", label: "Diagnostic Odds Ratio (DOR)", formula: "lr_pos / lr_neg", unit: "" }
    ],
    theory: "DOR measures diagnostic test effectiveness, reflecting the odds of a positive test in diseased individuals relative to the odds in non-diseased individuals.",
    faq: [],
    seoMeta: { title: "Diagnostic Odds Ratio (DOR) Calculator", description: "Compute DOR diagnostic quality benchmarks.", keywords: "DOR, diagnostic odds ratio, diagnostic precision" }
  },
  {
    id: "index-qualitative-variation", name: "Index of Qualitative Variation (IQV) Calculator",
    description: "Determine the Index of Qualitative Variation (IQV) for qualitative categorical spreads.",
    category: "statistics", subcategory: "indexing-other",
    scientificFormula: "\\text{IQV} = \\frac{k(N^2 - \\sum f_i^2)}{N^2(k - 1)}",
    inputs: [
      { id: "k", label: "Number of Categories (k)", type: "number", defaultValue: 3 },
      { id: "sum_f2", label: "Sum of Squared Frequencies (Σfi²)", type: "number", defaultValue: 1200 },
      { id: "n", label: "Total Observations (N)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "iqv", label: "IQV Index", formula: "(k * (n^2 - sum_f2)) / (n^2 * (k - 1))", unit: "" }
    ],
    theory: "IQV is a measure of statistical dispersion for nominal variables, ranging from 0 (all cases in one category) to 1 (cases distributed evenly).",
    faq: [],
    seoMeta: { title: "Index of Qualitative Variation (IQV) Calculator", description: "Compute IQV nominal dispersion indices.", keywords: "IQV, index of qualitative variation, nominal dispersion" }
  }
];
