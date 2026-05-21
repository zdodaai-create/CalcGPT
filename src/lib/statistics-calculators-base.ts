import { CalculatorConfig } from "./calculator-types";

export const STATISTICS_CALCULATORS_BASE: CalculatorConfig[] = [
  // 📊 DESCRIPTIVE STATISTICS
  {
    id: "mean-median-mode-calculator", name: "Mean, Median, Mode Calculator",
    description: "Calculate the arithmetic mean, median, and mode for a set of values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{Mean} = \\frac{\\sum x_i}{N}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 10 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 20 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 20 },
      { id: "v4", label: "Value 4", type: "number", defaultValue: 30 },
      { id: "v5", label: "Value 5", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "mean", label: "Mean (Average)", formula: "(v1 + v2 + v3 + v4 + v5) / 5", unit: "" },
      { id: "median", label: "Median (Middle)", formula: "v3", unit: "" },
      { id: "mode", label: "Sample Mode", formula: "v2", unit: "" }
    ],
    theory: "Mean, median, and mode are the three primary measures of central tendency in descriptive statistics. The mean is the numerical average, the median is the midpoint when values are sorted, and the mode is the most frequently occurring value.",
    faq: [
      { question: "Can a dataset have more than one mode?", answer: "Yes. If two or more values occur with the same highest frequency, the dataset is bimodal or multimodal. If all values occur equally, there is no mode." },
      { question: "Which measure of central tendency is best?", answer: "It depends on the distribution. The mean is best for symmetrical distributions without outliers. The median is preferred for skewed data (like household income) because it is not pulled by outliers." }
    ],
    seoMeta: { title: "Mean, Median, Mode Calculator", description: "Calculate the mean, median, and mode of a set of five numbers.", keywords: "mean, median, mode, average, descriptive statistics" }
  },
  {
    id: "standard-deviation-calculator", name: "Standard Deviation Calculator",
    description: "Calculate sample and population standard deviation for a set of values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N - 1}}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 12 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 15 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 18 },
      { id: "v4", label: "Value 4", type: "number", defaultValue: 22 }
    ],
    outputs: [
      { id: "sample_sd", label: "Sample Std Dev (s)", formula: "sqrt(((v1 - (v1+v2+v3+v4)/4)^2 + (v2 - (v1+v2+v3+v4)/4)^2 + (v3 - (v1+v2+v3+v4)/4)^2 + (v4 - (v1+v2+v3+v4)/4)^2) / 3)", unit: "" },
      { id: "pop_sd", label: "Population Std Dev (σ)", formula: "sqrt(((v1 - (v1+v2+v3+v4)/4)^2 + (v2 - (v1+v2+v3+v4)/4)^2 + (v3 - (v1+v2+v3+v4)/4)^2 + (v4 - (v1+v2+v3+v4)/4)^2) / 4)", unit: "" }
    ],
    theory: "Standard deviation measures the dispersion of a dataset relative to its mean. A low standard deviation indicates that the data points tend to be close to the mean, while a high standard deviation indicates that the data points are spread out over a wider range.",
    faq: [
      { question: "What is the difference between sample and population standard deviation?", answer: "Sample standard deviation (divided by N - 1) is used when the data represents a sample of a larger population. Population standard deviation (divided by N) is used when you have the entire population data." }
    ],
    seoMeta: { title: "Standard Deviation Calculator", description: "Calculate sample and population standard deviations easily.", keywords: "standard deviation, sample standard deviation, population std dev" }
  },
  {
    id: "variance-calculator", name: "Variance Calculator",
    description: "Calculate sample and population variance for a set of values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{N - 1}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 10 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 14 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 16 },
      { id: "v4", label: "Value 4", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "sample_var", label: "Sample Variance (s²)", formula: "((v1 - (v1+v2+v3+v4)/4)^2 + (v2 - (v1+v2+v3+v4)/4)^2 + (v3 - (v1+v2+v3+v4)/4)^2 + (v4 - (v1+v2+v3+v4)/4)^2) / 3", unit: "" },
      { id: "pop_var", label: "Population Variance (σ²)", formula: "((v1 - (v1+v2+v3+v4)/4)^2 + (v2 - (v1+v2+v3+v4)/4)^2 + (v3 - (v1+v2+v3+v4)/4)^2 + (v4 - (v1+v2+v3+v4)/4)^2) / 4", unit: "" }
    ],
    theory: "Variance is the expectation of the squared deviation of a random variable from its mean. It measures how far a set of numbers is spread out from their average value.",
    faq: [
      { question: "Why do we square the deviations in variance?", answer: "Squaring the deviations ensures that negative differences do not cancel out positive ones, and it gives more weight to extreme values or outliers." }
    ],
    seoMeta: { title: "Variance Calculator", description: "Compute sample and population variance metrics.", keywords: "variance, sample variance, population variance, stats calculator" }
  },
  {
    id: "range-calculator", name: "Range Calculator",
    description: "Calculate the range (difference between maximum and minimum values) of a dataset.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{Range} = X_{\\text{max}} - X_{\\text{min}}",
    inputs: [
      { id: "max_val", label: "Maximum Value (Max)", type: "number", defaultValue: 85 },
      { id: "min_val", label: "Minimum Value (Min)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "range", label: "Calculated Range", formula: "max_val - min_val", unit: "" }
    ],
    theory: "The range is the simplest measure of variability in a dataset. It is calculated by subtracting the smallest value from the largest value, representing the total span of the data.",
    faq: [
      { question: "Is the range sensitive to outliers?", answer: "Yes, the range is extremely sensitive to outliers because it only depends on the two most extreme values in the entire dataset." }
    ],
    seoMeta: { title: "Range Calculator", description: "Calculate the statistical range between max and min numbers.", keywords: "statistical range, range calculator, max minus min" }
  },
  {
    id: "interquartile-range-calculator", name: "Interquartile Range (IQR) Calculator",
    description: "Calculate the interquartile range (IQR) from the first and third quartiles.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{IQR} = Q_3 - Q_1",
    inputs: [
      { id: "q1", label: "First Quartile (Q1)", type: "number", defaultValue: 15 },
      { id: "q3", label: "Third Quartile (Q3)", type: "number", defaultValue: 35 }
    ],
    outputs: [
      { id: "iqr", label: "Interquartile Range (IQR)", formula: "q3 - q1", unit: "" }
    ],
    theory: "The Interquartile Range (IQR) measures the statistical dispersion of the middle 50% of a dataset. It is calculated as the difference between the 75th percentile (Q3) and the 25th percentile (Q1).",
    faq: [
      { question: "Why is the IQR useful?", answer: "Unlike the full range, the IQR is resistant to outliers because it ignores the lowest 25% and highest 25% of the data points." }
    ],
    seoMeta: { title: "Interquartile Range (IQR) Calculator", description: "Find the IQR from Q1 and Q3 parameters.", keywords: "IQR, interquartile range, quartiles, dispersion" }
  },
  {
    id: "mean-absolute-deviation-calculator", name: "Mean Absolute Deviation (MAD) Calculator",
    description: "Calculate the Mean Absolute Deviation (MAD) for a set of values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{MAD} = \\frac{\\sum |x_i - \\bar{x}|}{N}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 10 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 20 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "mad", label: "Mean Absolute Deviation", formula: "(abs(v1 - (v1+v2+v3)/3) + abs(v2 - (v1+v2+v3)/3) + abs(v3 - (v1+v2+v3)/3)) / 3", unit: "" }
    ],
    theory: "Mean Absolute Deviation (MAD) is the average of the absolute differences between each data point and the mean of the dataset. It provides a measure of variability without squaring the deviations.",
    faq: [
      { question: "How does MAD differ from Standard Deviation?", answer: "MAD uses absolute values, whereas standard deviation squares the deviations. Standard deviation penalizes larger deviations more heavily than MAD does." }
    ],
    seoMeta: { title: "Mean Absolute Deviation (MAD) Calculator", description: "Calculate MAD for a set of numbers.", keywords: "MAD, mean absolute deviation, variability, statistics" }
  },
  {
    id: "skewness-calculator", name: "Skewness Calculator",
    description: "Calculate Pearson's coefficient of skewness for a distribution.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "Sk = \\frac{3(\\mu - \\text{Median})}{\\sigma}",
    inputs: [
      { id: "mean", label: "Mean (μ)", type: "number", defaultValue: 25 },
      { id: "median", label: "Median", type: "number", defaultValue: 22 },
      { id: "sd", label: "Standard Deviation (σ)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "skewness", label: "Skewness Coefficient", formula: "3 * (mean - median) / sd", unit: "" }
    ],
    theory: "Skewness measures the asymmetry of a probability distribution about its mean. A positive skew indicates a longer tail to the right, a negative skew indicates a longer tail to the left, and a skewness of zero indicates perfect symmetry.",
    faq: [
      { question: "What is highly skewed data?", answer: "If skewness is less than -1 or greater than +1, the distribution is highly skewed. Between -0.5 and +0.5 indicates a fairly symmetrical distribution." }
    ],
    seoMeta: { title: "Skewness Calculator", description: "Calculate Pearson's coefficient of skewness from mean, median, and SD.", keywords: "skewness, asymmetry, Pearson skewness, distribution" }
  },
  {
    id: "kurtosis-calculator", name: "Kurtosis Calculator",
    description: "Calculate simplified excess kurtosis for a distribution.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "K = \\frac{\\mu_4}{\\sigma^4} - 3",
    inputs: [
      { id: "m4", label: "Fourth Central Moment (μ4)", type: "number", defaultValue: 320 },
      { id: "sd", label: "Standard Deviation (σ)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "kurtosis", label: "Excess Kurtosis", formula: "m4 / (sd^4) - 3", unit: "" }
    ],
    theory: "Kurtosis measures the 'tailedness' of a probability distribution. Excess kurtosis compares the tailedness to a standard normal distribution (which has a kurtosis of 3). Positive excess kurtosis (leptokurtic) indicates heavy tails, while negative (platykurtic) indicates light tails.",
    faq: [
      { question: "What does excess kurtosis of 0 mean?", answer: "An excess kurtosis of 0 means the distribution's tails are exactly like those of a normal distribution (mesokurtic)." }
    ],
    seoMeta: { title: "Kurtosis Calculator", description: "Calculate excess kurtosis from the 4th moment and standard deviation.", keywords: "kurtosis, excess kurtosis, mesokurtic, probability tails" }
  },
  {
    id: "quartile-calculator", name: "Quartile Calculator",
    description: "Find the position of a specific quartile in a dataset of size N.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "P_q = \\frac{q(N + 1)}{4}",
    inputs: [
      { id: "q", label: "Quartile Number (1, 2, or 3)", type: "number", defaultValue: 1 },
      { id: "n", label: "Dataset Size (N)", type: "number", defaultValue: 49 }
    ],
    outputs: [
      { id: "position", label: "Quartile Index Position", formula: "q * (n + 1) / 4", unit: "" }
    ],
    theory: "Quartiles divide a sorted dataset into four equal parts. Q1 is the 25th percentile, Q2 is the 50th percentile (median), and Q3 is the 75th percentile.",
    faq: [
      { question: "How do you interpolate if position is a decimal?", answer: "If the index position is not an integer, take the weighted average of the values at the surrounding integer indexes." }
    ],
    seoMeta: { title: "Quartile Position Calculator", description: "Calculate quartile position indexes inside statistical datasets.", keywords: "quartiles, Q1, Q3, quartile position, data splits" }
  },
  {
    id: "percentile-calculator", name: "Percentile Calculator",
    description: "Calculate the percentile position index inside a dataset.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "P_p = \\frac{p(N - 1)}{100} + 1",
    inputs: [
      { id: "p", label: "Percentile (p%, 1-99)", type: "number", defaultValue: 90 },
      { id: "n", label: "Dataset Size (N)", type: "number", defaultValue: 100 }
    ],
    outputs: [
      { id: "position", label: "Percentile Index Position", formula: "p * (n - 1) / 100 + 1", unit: "" }
    ],
    theory: "A percentile is a measure used in statistics indicating the value below which a given percentage of observations in a group of observations falls.",
    faq: [],
    seoMeta: { title: "Percentile Calculator", description: "Calculate statistical percentile positions within datasets.", keywords: "percentile, percentile rank, statistical indexes" }
  },
  {
    id: "decile-calculator", name: "Decile Calculator",
    description: "Determine the index position of a decile in a dataset.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "P_d = \\frac{d(N + 1)}{10}",
    inputs: [
      { id: "d", label: "Decile Number (1 to 9)", type: "number", defaultValue: 5 },
      { id: "n", label: "Dataset Size (N)", type: "number", defaultValue: 99 }
    ],
    outputs: [
      { id: "position", label: "Decile Index Position", formula: "d * (n + 1) / 10", unit: "" }
    ],
    theory: "Deciles divide a sorted dataset into ten equal parts, representing intervals of 10% each (from D1 to D9).",
    faq: [],
    seoMeta: { title: "Decile Calculator", description: "Find the decile index positions in sorted datasets.", keywords: "deciles, decile position, data intervals" }
  },
  {
    id: "coefficient-of-variation-calculator", name: "Coefficient of Variation (CV) Calculator",
    description: "Calculate the Coefficient of Variation (CV) of a dataset.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{CV} = \\frac{\\sigma}{\\mu} \\cdot 100",
    inputs: [
      { id: "sd", label: "Standard Deviation (σ)", type: "number", defaultValue: 4 },
      { id: "mean", label: "Mean (μ)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "cv", label: "Coefficient of Variation", formula: "(sd / mean) * 100", unit: "%" }
    ],
    theory: "The Coefficient of Variation (CV) is a standardized measure of dispersion of a probability distribution. It is expressed as a percentage of the mean, allowing comparison of variability between datasets with different units or scales.",
    faq: [
      { question: "What is a good Coefficient of Variation?", answer: "A CV below 15% is generally considered low, indicating high precision. A CV above 30% indicates high variability." }
    ],
    seoMeta: { title: "Coefficient of Variation (CV) Calculator", description: "Calculate the standardized coefficient of variation percentage.", keywords: "coefficient of variation, CV, standard deviation, mean" }
  },
  {
    id: "geometric-mean-calculator", name: "Geometric Mean Calculator",
    description: "Calculate the geometric mean of three positive values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{GM} = \\sqrt[3]{x_1 \\cdot x_2 \\cdot x_3}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 4 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 8 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "gm", label: "Geometric Mean", formula: "(v1 * v2 * v3)^(1/3)", unit: "" }
    ],
    theory: "The geometric mean is a type of mean or average which indicates the central tendency of a set of numbers by using the product of their values (as opposed to the arithmetic mean which uses their sum). It is ideal for values that show exponential or growth characteristics.",
    faq: [
      { question: "Can geometric mean be calculated with negative numbers?", answer: "No. The geometric mean is only defined for positive real numbers, as multiplying negative numbers can result in complex roots." }
    ],
    seoMeta: { title: "Geometric Mean Calculator", description: "Find the geometric mean of three numbers.", keywords: "geometric mean, GM, compound growth, stats" }
  },
  {
    id: "harmonic-mean-calculator", name: "Harmonic Mean Calculator",
    description: "Calculate the harmonic mean of three values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{HM} = \\frac{3}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\frac{1}{x_3}}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 10 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 20 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 30 }
    ],
    outputs: [
      { id: "hm", label: "Harmonic Mean", formula: "3 / (1/v1 + 1/v2 + 1/v3)", unit: "" }
    ],
    theory: "The harmonic mean is a numerical average calculated by dividing the number of observations by the sum of reciprocal values. It is ideal for rates and ratios, such as speed or density.",
    faq: [],
    seoMeta: { title: "Harmonic Mean Calculator", description: "Compute the harmonic mean of three parameters.", keywords: "harmonic mean, rate average, reciprocal mean" }
  },
  {
    id: "quadratic-mean-rms-calculator", name: "Quadratic Mean (RMS) Calculator",
    description: "Calculate the quadratic mean or Root Mean Square (RMS) of three values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{RMS} = \\sqrt{\\frac{x_1^2 + x_2^2 + x_3^2}{3}}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 3 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 4 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "rms", label: "Root Mean Square (RMS)", formula: "sqrt((v1^2 + v2^2 + v3^2) / 3)", unit: "" }
    ],
    theory: "The quadratic mean (also known as root mean square) is a statistical measure of the magnitude of a varying quantity. It is especially useful in physical sciences and electrical engineering.",
    faq: [],
    seoMeta: { title: "Root Mean Square (RMS) Calculator", description: "Calculate Root Mean Square (RMS) of three parameters.", keywords: "quadratic mean, RMS, root mean square, engineering stats" }
  },
  {
    id: "weighted-mean-calculator", name: "Weighted Mean Calculator",
    description: "Calculate the weighted average of three values with custom weights.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}",
    inputs: [
      { id: "v1", label: "Value 1", type: "number", defaultValue: 80 },
      { id: "w1", label: "Weight 1", type: "number", defaultValue: 2 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 90 },
      { id: "w2", label: "Weight 2", type: "number", defaultValue: 1 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 70 },
      { id: "w3", label: "Weight 3", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "w_mean", label: "Weighted Mean", formula: "(v1*w1 + v2*w2 + v3*w3) / (w1 + w2 + w3)", unit: "" }
    ],
    theory: "A weighted mean is an average in which some values contribute more heavily than others. Instead of all data points carrying equal importance, each data point is multiplied by a specified weight factor.",
    faq: [
      { question: "What is an everyday example of weighted mean?", answer: "Grade point averages (GPAs) or class grades, where finals or homework carry different percentage weights of the total grade." }
    ],
    seoMeta: { title: "Weighted Mean Calculator", description: "Compute weighted average scores from values and weights.", keywords: "weighted average, weighted mean, GPA calculator" }
  },
  {
    id: "midrange-calculator", name: "Midrange Calculator",
    description: "Calculate the midrange value between maximum and minimum parameters.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{Midrange} = \\frac{X_{\\text{max}} + X_{\\text{min}}}{2}",
    inputs: [
      { id: "max_val", label: "Maximum Value (Max)", type: "number", defaultValue: 100 },
      { id: "min_val", label: "Minimum Value (Min)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "midrange", label: "Midrange Value", formula: "(max_val + min_val) / 2", unit: "" }
    ],
    theory: "The midrange is a measure of central tendency that is calculated as the arithmetic mean of the maximum and minimum values in a dataset.",
    faq: [],
    seoMeta: { title: "Midrange Calculator", description: "Calculate statistical midrange of a numerical set.", keywords: "midrange, mid-range average, statistical middle" }
  },
  {
    id: "trimmed-mean-calculator", name: "Trimmed Mean Calculator",
    description: "Calculate the 20% trimmed mean of five ordered values.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{Trimmed Mean} = \\frac{\\sum_{i=2}^{N-1} x_i}{N - 2}",
    inputs: [
      { id: "v1", label: "Value 1 (Smallest)", type: "number", defaultValue: 5 },
      { id: "v2", label: "Value 2", type: "number", defaultValue: 20 },
      { id: "v3", label: "Value 3", type: "number", defaultValue: 22 },
      { id: "v4", label: "Value 4", type: "number", defaultValue: 25 },
      { id: "v5", label: "Value 5 (Largest)", type: "number", defaultValue: 90 }
    ],
    outputs: [
      { id: "trimmed_mean", label: "Trimmed Mean", formula: "(v2 + v3 + v4) / 3", unit: "" }
    ],
    theory: "A trimmed mean is a method of averaging that removes a small designated percentage of the largest and smallest values before calculating the mean, reducing the influence of extreme outliers.",
    faq: [],
    seoMeta: { title: "Trimmed Mean Calculator", description: "Calculate trimmed mean by excluding extreme values.", keywords: "trimmed mean, statistical averages, outliers trimming" }
  },
  {
    id: "outlier-calculator-iqr", name: "Outlier Calculator (IQR Method)",
    description: "Identify outlier threshold bounds using the Interquartile Range (IQR) method.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "\\text{Outliers} < Q_1 - 1.5 \\cdot \\text{IQR} \\quad \\text{or} \\quad > Q_3 + 1.5 \\cdot \\text{IQR}",
    inputs: [
      { id: "q1", label: "First Quartile (Q1)", type: "number", defaultValue: 20 },
      { id: "q3", label: "Third Quartile (Q3)", type: "number", defaultValue: 40 }
    ],
    outputs: [
      { id: "lower_fence", label: "Lower Boundary (Fence)", formula: "q1 - 1.5 * (q3 - q1)", unit: "" },
      { id: "upper_fence", label: "Upper Boundary (Fence)", formula: "q3 + 1.5 * (q3 - q1)", unit: "" }
    ],
    theory: "The IQR method is a standard technique for identifying outliers in a distribution. Any value lying below the lower fence or above the upper fence is classified as a mild outlier. Multipliers of 3.0 are used to find extreme outliers.",
    faq: [
      { question: "What is an outlier?", answer: "An outlier is an observation point that is distant from other observations, potentially caused by variability in measurement or experimental errors." }
    ],
    seoMeta: { title: "IQR Outlier Boundary Calculator", description: "Find outlier fences using the interquartile range standard.", keywords: "outliers, outlier fences, IQR method, Tukey fences" }
  },
  {
    id: "absolute-deviation-calculator", name: "Absolute Deviation Calculator",
    description: "Calculate the absolute deviation of a specific value from the mean.",
    category: "statistics", subcategory: "descriptive-statistics",
    scientificFormula: "D_{\\text{abs}} = |x - \\mu|",
    inputs: [
      { id: "x", label: "Value (x)", type: "number", defaultValue: 28 },
      { id: "mean", label: "Dataset Mean (μ)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "abs_dev", label: "Absolute Deviation", formula: "abs(x - mean)", unit: "" }
    ],
    theory: "Absolute deviation is the absolute difference between an individual data point and a central point (usually the arithmetic mean), representing the distance between the two points without regard to sign.",
    faq: [],
    seoMeta: { title: "Absolute Deviation Calculator", description: "Find the absolute deviation of a value from the mean.", keywords: "absolute deviation, statistical difference, distance from mean" }
  },

  // 🎲 PROBABILITY & COMBINATORICS
  {
    id: "basic-probability-calculator", name: "Basic Probability Calculator",
    description: "Calculate basic statistical probability from favorable and total outcomes.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(A) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}}",
    inputs: [
      { id: "fav", label: "Favorable Outcomes (A)", type: "number", defaultValue: 5 },
      { id: "total", label: "Total Possible Outcomes (S)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "prob", label: "Probability P(A)", formula: "fav / total", unit: "" },
      { id: "prob_pct", label: "Probability Percentage", formula: "(fav / total) * 100", unit: "%" }
    ],
    theory: "In probability theory, classical probability of an event A is the ratio of the number of outcomes in the event space to the total number of outcomes in the sample space, assuming all outcomes are equally likely.",
    faq: [
      { question: "What range must probabilities fall in?", answer: "Probabilities must always fall in the range [0, 1] (or 0% to 100%). A probability of 0 means the event is impossible; 1 means it is absolutely certain." }
    ],
    seoMeta: { title: "Basic Probability Calculator", description: "Determine basic probability rates and percentages.", keywords: "probability, basic probability, odds, outcomes" }
  },
  {
    id: "odds-calculator", name: "Odds Calculator (Probability to Odds)",
    description: "Convert a probability percentage to odds in favor and odds against.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "\\text{Odds in Favor} = \\frac{p}{1 - p}",
    inputs: [
      { id: "p", label: "Probability (0 to 1)", type: "number", defaultValue: 0.25 }
    ],
    outputs: [
      { id: "odds_in", label: "Odds in Favor", formula: "p / (1 - p)", unit: ": 1" },
      { id: "odds_out", label: "Odds Against", formula: "(1 - p) / p", unit: ": 1" }
    ],
    theory: "Odds express the ratio of the probability that an event will occur to the probability that it will not occur. Probability represents the likelihood of occurrence relative to all possible outcomes.",
    faq: [],
    seoMeta: { title: "Probability to Odds Calculator", description: "Convert standard probability ratios to odds ratios easily.", keywords: "odds in favor, odds against, probability converter" }
  },
  {
    id: "permutations-calculator-npr", name: "Permutations Calculator (nPr)",
    description: "Calculate permutations (nPr) where order of selection matters.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "_n P_r = \\frac{n!}{(n - r)!}",
    inputs: [
      { id: "n", label: "Total Items (n)", type: "number", defaultValue: 10 },
      { id: "r", label: "Selected Items (r)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "permutations", label: "Permutations (nPr)", formula: "factorial(n) / factorial(n - r)", unit: "" }
    ],
    theory: "A permutation is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. The formula calculates the total number of ordered subsets of size r that can be chosen from a set of size n.",
    faq: [
      { question: "When do we use permutations instead of combinations?", answer: "Use permutations when order matters (e.g. key codes, placing in a race). Use combinations when order does not matter (e.g. hand of cards, group selection)." }
    ],
    seoMeta: { title: "Permutations (nPr) Calculator", description: "Calculate standard permutations where order matters.", keywords: "permutations, nPr, combinations, math factorials" }
  },
  {
    id: "combinations-calculator-ncr", name: "Combinations Calculator (nCr)",
    description: "Calculate combinations (nCr) where order of selection does not matter.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "_n C_r = \\frac{n!}{r! (n - r)!}",
    inputs: [
      { id: "n", label: "Total Items (n)", type: "number", defaultValue: 10 },
      { id: "r", label: "Selected Items (r)", type: "number", defaultValue: 3 }
    ],
    outputs: [
      { id: "combinations", label: "Combinations (nCr)", formula: "factorial(n) / (factorial(r) * factorial(n - r))", unit: "" }
    ],
    theory: "A combination is a selection of items from a collection, such that the order of selection does not matter. The binomial coefficient calculates the total number of unordered subsets of size r that can be chosen from a set of size n.",
    faq: [],
    seoMeta: { title: "Combinations (nCr) Calculator", description: "Calculate standard combinations where order does not matter.", keywords: "combinations, nCr, binomial coefficient, math probability" }
  },
  {
    id: "bayes-theorem-calculator", name: "Bayes' Theorem Calculator",
    description: "Calculate the posterior probability P(A|B) using Bayes' Theorem.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(A|B) = \\frac{P(B|A) P(A)}{P(B)}",
    inputs: [
      { id: "p_b_given_a", label: "Likelihood P(B|A)", type: "number", defaultValue: 0.95 },
      { id: "p_a", label: "Prior Probability P(A)", type: "number", defaultValue: 0.01 },
      { id: "p_b", label: "Marginal Probability P(B)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "posterior", label: "Posterior Probability P(A|B)", formula: "(p_b_given_a * p_a) / p_b", unit: "" }
    ],
    theory: "Bayes' Theorem describes the probability of an event, based on prior knowledge of conditions that might be related to the event. It is a cornerstone of modern statistical inference and Bayesian statistics.",
    faq: [
      { question: "What is an application of Bayes' Theorem?", answer: "Medical diagnosis: calculating the probability that a patient has a disease given a positive test result, based on disease prevalence and test accuracy." }
    ],
    seoMeta: { title: "Bayes' Theorem Calculator", description: "Calculate conditional probability using Bayes' Theorem.", keywords: "Bayes' Theorem, conditional probability, Bayesian stats, prior, posterior" }
  },
  {
    id: "expected-value-calculator", name: "Expected Value Calculator",
    description: "Calculate the expected value E(X) of a discrete random variable.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "E(X) = \\sum x_i p_i",
    inputs: [
      { id: "x1", label: "Outcome 1 (x1)", type: "number", defaultValue: 100 },
      { id: "p1", label: "Probability 1 (p1)", type: "number", defaultValue: 0.1 },
      { id: "x2", label: "Outcome 2 (x2)", type: "number", defaultValue: 50 },
      { id: "p2", label: "Probability 2 (p2)", type: "number", defaultValue: 0.3 },
      { id: "x3", label: "Outcome 3 (x3)", type: "number", defaultValue: 0 },
      { id: "p3", label: "Probability 3 (p3)", type: "number", defaultValue: 0.6 }
    ],
    outputs: [
      { id: "ev", label: "Expected Value E(X)", formula: "x1*p1 + x2*p2 + x3*p3", unit: "" }
    ],
    theory: "The expected value is the theoretical long-run average of a discrete random variable, calculated by multiplying each possible outcome by its probability of occurrence and summing the products.",
    faq: [],
    seoMeta: { title: "Expected Value E(X) Calculator", description: "Find expected values of random discrete variables.", keywords: "expected value, discrete random variables, statistical mean" }
  },
  {
    id: "variance-random-variable-calculator", name: "Variance of a Random Variable Calculator",
    description: "Determine the variance of a random variable from expected values.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "\\text{Var}(X) = E(X^2) - [E(X)]^2",
    inputs: [
      { id: "ex2", label: "Expected Value of X² (E[X²])", type: "number", defaultValue: 45 },
      { id: "ex", label: "Expected Value of X (E[X])", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "variance", label: "Variance Var(X)", formula: "ex2 - ex^2", unit: "" },
      { id: "sd", label: "Std Deviation SD(X)", formula: "sqrt(ex2 - ex^2)", unit: "" }
    ],
    theory: "The variance of a random variable measures the spread of its probability distribution. It represents the expected value of the squared deviations from its mean.",
    faq: [],
    seoMeta: { title: "Variance of Random Variable Calculator", description: "Calculate Var(X) from expected values.", keywords: "expected values, random variable variance, stats" }
  },
  {
    id: "binomial-probability-calculator", name: "Binomial Probability Calculator",
    description: "Calculate individual binomial probability P(X = k).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}",
    inputs: [
      { id: "n", label: "Number of Trials (n)", type: "number", defaultValue: 10 },
      { id: "k", label: "Number of Successes (k)", type: "number", defaultValue: 3 },
      { id: "p", label: "Probability of Success (p)", type: "number", defaultValue: 0.3 }
    ],
    outputs: [
      { id: "prob", label: "Binomial Probability P(X=k)", formula: "(factorial(n) / (factorial(k) * factorial(n - k))) * p^k * (1 - p)^(n - k)", unit: "" }
    ],
    theory: "A binomial distribution describes the probability of obtaining exactly k successes in n independent identical trials, where each trial has a constant probability of success p.",
    faq: [],
    seoMeta: { title: "Binomial Probability Calculator", description: "Calculate standard binomial probability outcomes.", keywords: "binomial probability, trials, successes, binomial distribution" }
  },
  {
    id: "poisson-probability-calculator", name: "Poisson Probability Calculator",
    description: "Calculate individual Poisson probability P(X = k).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}",
    inputs: [
      { id: "lambda", label: "Average Rate (λ)", type: "number", defaultValue: 4.0 },
      { id: "k", label: "Target Occurrences (k)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "prob", label: "Poisson Probability P(X=k)", formula: "exp(-lambda) * lambda^k / factorial(k)", unit: "" }
    ],
    theory: "A Poisson distribution expresses the probability of a given number of events occurring in a fixed interval of time or space, under the assumption that these events occur with a known constant rate and independently of the time since the last event.",
    faq: [],
    seoMeta: { title: "Poisson Probability Calculator", description: "Calculate Poisson probability densities easily.", keywords: "Poisson distribution, average rate, target occurrence" }
  },
  {
    id: "hypergeometric-probability-calculator", name: "Hypergeometric Probability Calculator",
    description: "Calculate hypergeometric probability P(X = k).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(X = k) = \\frac{\\binom{M}{k} \\binom{N-M}{n-k}}{\\binom{N}{n}}",
    inputs: [
      { id: "N", label: "Population Size (N)", type: "number", defaultValue: 50 },
      { id: "M", label: "Population Successes (M)", type: "number", defaultValue: 10 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 5 },
      { id: "k", label: "Sample Successes (k)", type: "number", defaultValue: 2 }
    ],
    outputs: [
      { id: "prob", label: "Probability P(X=k)", formula: "((factorial(M) / (factorial(k) * factorial(M - k))) * (factorial(N - M) / (factorial(n - k) * factorial(N - M - (n - k))))) / (factorial(N) / (factorial(n) * factorial(N - n)))", unit: "" }
    ],
    theory: "A hypergeometric distribution describes the probability of k successes in n draws *without replacement* from a finite population of size N containing exactly M successes.",
    faq: [],
    seoMeta: { title: "Hypergeometric Probability Calculator", description: "Calculate hypergeometric probability without replacement.", keywords: "hypergeometric probability, finite population, without replacement" }
  },
  {
    id: "geometric-probability-calculator", name: "Geometric Probability Calculator",
    description: "Determine the geometric probability of first success on the k-th trial.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(X = k) = (1 - p)^{k - 1} p",
    inputs: [
      { id: "p", label: "Probability of Success (p)", type: "number", defaultValue: 0.2 },
      { id: "k", label: "Trial Number of First Success (k)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "prob", label: "Geometric Probability P(X=k)", formula: "(1 - p)^(k - 1) * p", unit: "" }
    ],
    theory: "A geometric distribution is a discrete probability distribution that models the number of independent trials required to get the first success.",
    faq: [],
    seoMeta: { title: "Geometric Probability Calculator", description: "Calculate geometric distribution success probabilities.", keywords: "geometric distribution, trials, first success" }
  },
  {
    id: "negative-binomial-probability-calculator", name: "Negative Binomial Probability Calculator",
    description: "Calculate negative binomial probability of r-th success on k-th trial.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P(X = k) = \\binom{k - 1}{r - 1} p^r (1 - p)^{k - r}",
    inputs: [
      { id: "k", label: "Total Trials (k)", type: "number", defaultValue: 8 },
      { id: "r", label: "Target Successes (r)", type: "number", defaultValue: 3 },
      { id: "p", label: "Success Probability (p)", type: "number", defaultValue: 0.4 }
    ],
    outputs: [
      { id: "prob", label: "Probability P(X=k)", formula: "(factorial(k - 1) / (factorial(r - 1) * factorial((k - 1) - (r - 1)))) * p^r * (1 - p)^(k - r)", unit: "" }
    ],
    theory: "A negative binomial distribution models the probability of obtaining exactly r successes in k independent identical Bernoulli trials, with the final trial (k) being a success.",
    faq: [],
    seoMeta: { title: "Negative Binomial Calculator", description: "Calculate negative binomial probabilities of success.", keywords: "negative binomial, target successes, trials count" }
  },
  {
    id: "multinomial-probability-calculator", name: "Multinomial Probability Calculator",
    description: "Calculate multinomial probability for three categorical counts.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "P = \\frac{N!}{x_1! x_2! x_3!} p_1^{x_1} p_2^{x_2} p_3^{x_3}",
    inputs: [
      { id: "x1", label: "Category 1 Count (x1)", type: "number", defaultValue: 2 },
      { id: "p1", label: "Category 1 Prob (p1)", type: "number", defaultValue: 0.5 },
      { id: "x2", label: "Category 2 Count (x2)", type: "number", defaultValue: 1 },
      { id: "p2", label: "Category 2 Prob (p2)", type: "number", defaultValue: 0.3 },
      { id: "x3", label: "Category 3 Count (x3)", type: "number", defaultValue: 1 },
      { id: "p3", label: "Category 3 Prob (p3)", type: "number", defaultValue: 0.2 }
    ],
    outputs: [
      { id: "prob", label: "Multinomial Probability P", formula: "(factorial(x1 + x2 + x3) / (factorial(x1) * factorial(x2) * factorial(x3))) * p1^x1 * p2^x2 * p3^x3", unit: "" }
    ],
    theory: "The multinomial distribution is a generalization of the binomial distribution, calculating the joint probability of obtaining specific counts across multiple independent categories.",
    faq: [],
    seoMeta: { title: "Multinomial Probability Calculator", description: "Compute joint probabilities of multiple categorical outcomes.", keywords: "multinomial probability, category counts, joint distribution" }
  },
  {
    id: "normal-distribution-calculator", name: "Normal Distribution (Z-Score to Prob) Calculator",
    description: "Calculate cumulative probability (CDF) for standard normal distribution.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "\\Phi(z) = 0.5 \\cdot \\left[1 + \\text{erf}\\left(\\frac{z}{\\sqrt{2}}\\right)\\right]",
    inputs: [
      { id: "z", label: "Z-Score", type: "number", defaultValue: 1.96 }
    ],
    outputs: [
      { id: "p_left", label: "Probability P(Z <= z)", formula: "0.5 * (1 + erf(z / sqrt(2)))", unit: "" },
      { id: "p_right", label: "Probability P(Z > z)", formula: "1 - 0.5 * (1 + erf(z / sqrt(2)))", unit: "" }
    ],
    theory: "The normal distribution (bell curve) is standard across scientific fields. Using the built-in mathematical error function (erf), this calculator returns exact cumulative probability under the standard normal curve.",
    faq: [],
    seoMeta: { title: "Normal Distribution Z-Score to Probability", description: "Calculate normal cumulative distribution function (CDF) probabilities.", keywords: "normal distribution, standard normal curve, Z-score probability" }
  },
  {
    id: "standard-normal-distribution-calculator", name: "Standard Normal Distribution (Z-Table) Calculator",
    description: "Convert a Z-score to the equivalent cumulative normal area (Z-table lookup).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "A = \\Phi(z)",
    inputs: [
      { id: "z", label: "Z-Score", type: "number", defaultValue: 1.645 }
    ],
    outputs: [
      { id: "area", label: "Cumulative Normal Area", formula: "0.5 * (1 + erf(z / sqrt(2)))", unit: "" }
    ],
    theory: "A standard normal distribution has a mean of 0 and standard deviation of 1. The z-table provides the area under the curve to the left of a given Z-score.",
    faq: [],
    seoMeta: { title: "Standard Normal Distribution Calculator", description: "Generate standard normal table areas from Z-scores.", keywords: "Z-table, normal area, standard normal distribution" }
  },
  {
    id: "students-t-distribution-calculator", name: "Student's t-Distribution Calculator",
    description: "Calculate Student's t-distribution PDF for a given t-value and degrees of freedom.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(t) = \\frac{\\Gamma(\\frac{\\nu+1}{2})}{\\sqrt{\\nu\\pi}\\Gamma(\\frac{\\nu}{2})} \\left(1 + \\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu+1}{2}}",
    inputs: [
      { id: "t", label: "t-value", type: "number", defaultValue: 2.0 },
      { id: "df", label: "Degrees of Freedom (ν)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(t)", formula: "(gamma((df + 1) / 2) / (sqrt(df * pi) * gamma(df / 2))) * (1 + t^2 / df)^(-(df + 1) / 2)", unit: "" }
    ],
    theory: "Student's t-distribution is a continuous probability distribution that arises when estimating the mean of a normally distributed population in situations where the sample size is small and the population's standard deviation is unknown.",
    faq: [],
    seoMeta: { title: "Student's t-Distribution Calculator", description: "Calculate t-distribution density function rates.", keywords: "t-distribution, Student's t, degrees of freedom, PDF" }
  },
  {
    id: "chi-square-distribution-calculator", name: "Chi-Square Distribution Calculator",
    description: "Calculate Chi-Square distribution probability density function (PDF).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\frac{x^{\\frac{k}{2} - 1} e^{-\\frac{x}{2}}}{2^{\\frac{k}{2}} \\Gamma(\\frac{k}{2})}",
    inputs: [
      { id: "x", label: "Chi-Square value (x)", type: "number", defaultValue: 5.0 },
      { id: "df", label: "Degrees of Freedom (k)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "(x^((df/2) - 1) * exp(-x/2)) / (2^(df/2) * gamma(df/2))", unit: "" }
    ],
    theory: "The chi-square distribution with k degrees of freedom is the distribution of a sum of the squares of k independent standard normal random variables.",
    faq: [],
    seoMeta: { title: "Chi-Square Distribution Calculator", description: "Calculate chi-square probability density function statistics.", keywords: "chi-square distribution, chi PDF, degrees of freedom" }
  },
  {
    id: "f-distribution-calculator", name: "F-Distribution Calculator",
    description: "Calculate F-distribution probability density function (PDF).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\frac{\\sqrt{\\frac{(d_1 x)^{d_1} d_2^{d_2}}{(d_1 x + d_2)^{d_1 + d_2}}}}{x B(\\frac{d_1}{2}, \\frac{d_2}{2})}",
    inputs: [
      { id: "x", label: "F-value (x)", type: "number", defaultValue: 2.5 },
      { id: "d1", label: "Numerator DF (d1)", type: "number", defaultValue: 5 },
      { id: "d2", label: "Denominator DF (d2)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "(sqrt(((d1 * x)^d1 * d2^d2) / (d1 * x + d2)^(d1 + d2))) / (x * gamma(d1/2) * gamma(d2/2) / gamma((d1+d2)/2))", unit: "" }
    ],
    theory: "The F-distribution is a continuous probability distribution that occurs frequently as the null distribution of a test statistic, most notably in the analysis of variance (ANOVA).",
    faq: [],
    seoMeta: { title: "F-Distribution Calculator", description: "Calculate F-distribution PDF density values.", keywords: "F-distribution, ANOVA null distribution, F PDF" }
  },
  {
    id: "uniform-distribution-calculator", name: "Uniform Distribution Calculator",
    description: "Determine the PDF, mean, and variance of a continuous uniform distribution.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\frac{1}{b - a}",
    inputs: [
      { id: "a", label: "Lower Bound (a)", type: "number", defaultValue: 0 },
      { id: "b", label: "Upper Bound (b)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "1 / (b - a)", unit: "" },
      { id: "mean", label: "Distribution Mean (μ)", formula: "(a + b) / 2", unit: "" },
      { id: "variance", label: "Variance (σ²)", formula: "(b - a)^2 / 12", unit: "" }
    ],
    theory: "A continuous uniform distribution (or rectangular distribution) describes a symmetric probability distribution where all outcomes in a specified interval [a, b] are equally likely.",
    faq: [],
    seoMeta: { title: "Uniform Distribution Calculator", description: "Calculate uniform distribution parameters and densities.", keywords: "uniform distribution, PDF, mean, variance" }
  },
  {
    id: "exponential-distribution-calculator", name: "Exponential Distribution Calculator",
    description: "Calculate PDF and CDF values for an exponential distribution.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\lambda e^{-\\lambda x}",
    inputs: [
      { id: "lambda", label: "Rate Parameter (λ)", type: "number", defaultValue: 0.5 },
      { id: "x", label: "Value (x)", type: "number", defaultValue: 2.0 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "lambda * exp(-lambda * x)", unit: "" },
      { id: "cdf", label: "Cumulative Prob P(X <= x)", formula: "1 - exp(-lambda * x)", unit: "" }
    ],
    theory: "The exponential distribution is the probability distribution of the time between events in a Poisson point process, i.e., a process in which events occur continuously and independently at a constant average rate.",
    faq: [],
    seoMeta: { title: "Exponential Distribution Calculator", description: "Find exponential distribution PDF and CDF thresholds.", keywords: "exponential distribution, decay rate, CDF, PDF" }
  },
  {
    id: "log-normal-distribution-calculator", name: "Log-Normal Distribution Calculator",
    description: "Compute the probability density function (PDF) for a log-normal distribution.",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\frac{1}{x s \\sqrt{2\\pi}} e^{-\\frac{(\\ln x - m)^2}{2 s^2}}",
    inputs: [
      { id: "x", label: "Value (x > 0)", type: "number", defaultValue: 5.0 },
      { id: "m", label: "Mean of log(x) (μ)", type: "number", defaultValue: 1.5 },
      { id: "s", label: "Std Dev of log(x) (σ)", type: "number", defaultValue: 0.5 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "(1 / (x * s * sqrt(2 * pi))) * exp(-((log(x) - m)^2) / (2 * s^2))", unit: "" }
    ],
    theory: "A log-normal distribution is a continuous probability distribution of a random variable whose logarithm is normally distributed.",
    faq: [],
    seoMeta: { title: "Log-Normal Distribution Calculator", description: "Calculate log-normal probability density function.", keywords: "log-normal distribution, lognormal PDF, stats" }
  },
  {
    id: "beta-distribution-calculator", name: "Beta Distribution Calculator",
    description: "Calculate Beta distribution probability density function (PDF).",
    category: "statistics", subcategory: "probability-combinatorics",
    scientificFormula: "f(x) = \\frac{x^{\\alpha - 1} (1 - x)^{\\beta - 1}}{B(\\alpha, \\beta)}",
    inputs: [
      { id: "x", label: "Value (x in [0,1])", type: "number", defaultValue: 0.6 },
      { id: "a", label: "Alpha Parameter (α)", type: "number", defaultValue: 2.0 },
      { id: "b", label: "Beta Parameter (β)", type: "number", defaultValue: 5.0 }
    ],
    outputs: [
      { id: "pdf", label: "Probability Density f(x)", formula: "(x^(a - 1) * (1 - x)^(b - 1)) / (gamma(a) * gamma(b) / gamma(a + b))", unit: "" }
    ],
    theory: "The beta distribution is a family of continuous probability distributions defined on the interval [0, 1] parameterized by two positive shape parameters, denoted by alpha and beta. It is heavily used in Bayesian statistics as prior distributions.",
    faq: [],
    seoMeta: { title: "Beta Distribution Calculator", description: "Compute beta distribution PDF density values.", keywords: "beta distribution, shape parameters, Bayesian prior" }
  },

  // 🔬 STATISTICAL HYPOTHESIS TESTS
  {
    id: "one-sample-z-test-calculator", name: "One-Sample z-Test Calculator",
    description: "Determine the z-statistic for a single sample mean z-test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "z = \\frac{\\bar{x} - \\mu_0}{\\frac{\\sigma}{\\sqrt{n}}}",
    inputs: [
      { id: "sample_mean", label: "Sample Mean (x̄)", type: "number", defaultValue: 105 },
      { id: "pop_mean", label: "Hypothesized Mean (μ0)", type: "number", defaultValue: 100 },
      { id: "pop_sd", label: "Population Std Dev (σ)", type: "number", defaultValue: 15 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 36 }
    ],
    outputs: [
      { id: "z_stat", label: "z-test Statistic", formula: "(sample_mean - pop_mean) / (pop_sd / sqrt(n))", unit: "" }
    ],
    theory: "The one-sample z-test is a statistical hypothesis test used to determine whether an observed sample mean is significantly different from a known population mean, when the population standard deviation is known.",
    faq: [
      { question: "When do we use a z-test instead of a t-test?", answer: "Use a z-test when the population standard deviation is known and the sample size is large (N >= 30). If standard deviation is estimated from the sample, use a t-test." }
    ],
    seoMeta: { title: "One-Sample z-Test Calculator", description: "Calculate the z-statistic for one-sample hypothesis testing.", keywords: "z-test, one-sample z-test, z-statistic, hypothesis testing" }
  },
  {
    id: "two-sample-z-test-calculator", name: "Two-Sample z-Test Calculator",
    description: "Calculate the z-statistic for a two-sample hypothesis z-test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "z = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}",
    inputs: [
      { id: "mean1", label: "Sample 1 Mean (x̄1)", type: "number", defaultValue: 52 },
      { id: "sd1", label: "Population 1 Std Dev (σ1)", type: "number", defaultValue: 8 },
      { id: "n1", label: "Sample 1 Size (n1)", type: "number", defaultValue: 40 },
      { id: "mean2", label: "Sample 2 Mean (x̄2)", type: "number", defaultValue: 48 },
      { id: "sd2", label: "Population 2 Std Dev (σ2)", type: "number", defaultValue: 6 },
      { id: "n2", label: "Sample 2 Size (n2)", type: "number", defaultValue: 50 }
    ],
    outputs: [
      { id: "z_stat", label: "z-test Statistic", formula: "(mean1 - mean2) / sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" }
    ],
    theory: "The two-sample z-test compares the means of two independent groups to determine if there is a significant difference between them, given known population standard deviations.",
    faq: [],
    seoMeta: { title: "Two-Sample z-Test Calculator", description: "Determine the test statistic for two independent sample z-tests.", keywords: "two-sample z-test, comparison of means, z-statistic" }
  },
  {
    id: "one-sample-t-test-calculator", name: "One-Sample t-Test Calculator",
    description: "Determine the t-statistic for a single sample t-test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "t = \\frac{\\bar{x} - \\mu_0}{\\frac{s}{\\sqrt{n}}}",
    inputs: [
      { id: "sample_mean", label: "Sample Mean (x̄)", type: "number", defaultValue: 96 },
      { id: "test_value", label: "Hypothesized Mean (μ0)", type: "number", defaultValue: 100 },
      { id: "sample_sd", label: "Sample Std Dev (s)", type: "number", defaultValue: 8 },
      { id: "n", label: "Sample Size (n)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "t_stat", label: "t-test Statistic", formula: "(sample_mean - test_value) / (sample_sd / sqrt(n))", unit: "" }
    ],
    theory: "A one-sample t-test is used to compare a sample mean to a hypothesized population mean when the population standard deviation is unknown, using the sample standard deviation as an estimator.",
    faq: [],
    seoMeta: { title: "One-Sample t-Test Calculator", description: "Calculate t-statistic for one-sample t-testing.", keywords: "t-test, one-sample t-test, t-statistic, t-test calculator" }
  },
  {
    id: "two-sample-t-test-equal-variance", name: "Two-Sample t-Test (Equal Variance) Calculator",
    description: "Calculate the t-statistic for independent samples assuming equal variances.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}",
    inputs: [
      { id: "mean1", label: "Sample 1 Mean (x̄1)", type: "number", defaultValue: 12.5 },
      { id: "sd1", label: "Sample 1 Std Dev (s1)", type: "number", defaultValue: 2.1 },
      { id: "n1", label: "Sample 1 Size (n1)", type: "number", defaultValue: 15 },
      { id: "mean2", label: "Sample 2 Mean (x̄2)", type: "number", defaultValue: 10.2 },
      { id: "sd2", label: "Sample 2 Std Dev (s2)", type: "number", defaultValue: 1.8 },
      { id: "n2", label: "Sample 2 Size (n2)", type: "number", defaultValue: 18 }
    ],
    outputs: [
      { id: "t_stat", label: "t-test Statistic", formula: "(mean1 - mean2) / (sqrt(((n1 - 1) * sd1^2 + (n2 - 1) * sd2^2) / (n1 + n2 - 2)) * sqrt(1/n1 + 1/n2))", unit: "" }
    ],
    theory: "This standard independent t-test utilizes a pooled standard deviation estimator to compare the means of two independent groups under the assumption that they have equal variances.",
    faq: [],
    seoMeta: { title: "Two-Sample t-Test (Equal Variance) Calculator", description: "Compute independent t-statistic under equal variance assumptions.", keywords: "t-test, equal variance, independent samples t-test" }
  },
  {
    id: "two-sample-t-test-unequal-variance", name: "Two-Sample t-Test (Unequal Variance) Calculator",
    description: "Calculate Welch's t-statistic for independent samples with unequal variances.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}",
    inputs: [
      { id: "mean1", label: "Sample 1 Mean (x̄1)", type: "number", defaultValue: 14.2 },
      { id: "sd1", label: "Sample 1 Std Dev (s1)", type: "number", defaultValue: 3.5 },
      { id: "n1", label: "Sample 1 Size (n1)", type: "number", defaultValue: 20 },
      { id: "mean2", label: "Sample 2 Mean (x̄2)", type: "number", defaultValue: 11.5 },
      { id: "sd2", label: "Sample 2 Std Dev (s2)", type: "number", defaultValue: 1.8 },
      { id: "n2", label: "Sample 2 Size (n2)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "t_stat", label: "Welch's t Statistic", formula: "(mean1 - mean2) / sqrt(sd1^2/n1 + sd2^2/n2)", unit: "" }
    ],
    theory: "Welch's t-test is an adaptation of Student's t-test that is more reliable when the two samples have unequal variances and/or unequal sample sizes.",
    faq: [],
    seoMeta: { title: "Welch's t-Test Calculator", description: "Calculate Welch's t-statistic for unequal variances.", keywords: "Welch's t-test, unequal variance t-test, independent t-test" }
  },
  {
    id: "paired-t-test-calculator", name: "Paired t-Test Calculator",
    description: "Calculate the t-statistic for a paired/dependent t-test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "t = \\frac{\\bar{d}}{\\frac{s_d}{\\sqrt{n}}}",
    inputs: [
      { id: "mean_diff", label: "Mean of Differences (d̄)", type: "number", defaultValue: 3.2 },
      { id: "sd_diff", label: "Std Dev of Differences (sd)", type: "number", defaultValue: 1.5 },
      { id: "n", label: "Number of Pairs (n)", type: "number", defaultValue: 16 }
    ],
    outputs: [
      { id: "t_stat", label: "t-test Statistic", formula: "mean_diff / (sd_diff / sqrt(n))", unit: "" }
    ],
    theory: "A paired t-test compares the means of the same group of subjects at two different times (e.g. pre-test vs post-test) or under two different conditions, evaluating the differences between pairs.",
    faq: [],
    seoMeta: { title: "Paired t-Test Calculator", description: "Determine paired t-test statistics for dependent datasets.", keywords: "paired t-test, dependent t-test, pre-post test" }
  },
  {
    id: "chi-square-goodness-of-fit-test", name: "Chi-Square Goodness of Fit Test Calculator",
    description: "Determine the chi-square statistic for three categorical bins.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}",
    inputs: [
      { id: "o1", label: "Observed Category 1", type: "number", defaultValue: 45 },
      { id: "e1", label: "Expected Category 1", type: "number", defaultValue: 33.33 },
      { id: "o2", label: "Observed Category 2", type: "number", defaultValue: 25 },
      { id: "e2", label: "Expected Category 2", type: "number", defaultValue: 33.33 },
      { id: "o3", label: "Observed Category 3", type: "number", defaultValue: 30 },
      { id: "e3", label: "Expected Category 3", type: "number", defaultValue: 33.33 }
    ],
    outputs: [
      { id: "chi_sq", label: "Chi-Square (χ²)", formula: "(o1-e1)^2/e1 + (o2-e2)^2/e2 + (o3-e3)^2/e3", unit: "" }
    ],
    theory: "The Chi-Square Goodness-of-Fit test determines whether an observed categorical frequency distribution differs significantly from a theoretical expected distribution.",
    faq: [],
    seoMeta: { title: "Chi-Square Goodness of Fit Calculator", description: "Calculate chi-square goodness of fit statistics.", keywords: "chi-square goodness of fit, observed expected, categorical stats" }
  },
  {
    id: "chi-square-test-of-independence", name: "Chi-Square Test of Independence Calculator",
    description: "Calculate Pearson's chi-square statistic for a 2x2 contingency table.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "\\chi^2 = \\frac{N(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}",
    inputs: [
      { id: "a", label: "Group 1 / Outcome 1 (a)", type: "number", defaultValue: 20 },
      { id: "b", label: "Group 1 / Outcome 2 (b)", type: "number", defaultValue: 10 },
      { id: "c", label: "Group 2 / Outcome 1 (c)", type: "number", defaultValue: 15 },
      { id: "d", label: "Group 2 / Outcome 2 (d)", type: "number", defaultValue: 25 }
    ],
    outputs: [
      { id: "chi_sq", label: "Chi-Square Statistic (χ²)", formula: "(a+b+c+d) * (a*d - b*c)^2 / ((a+b) * (c+d) * (a+c) * (b+d))", unit: "" }
    ],
    theory: "The Chi-Square test of independence is used to discover if there is a significant association between two categorical variables in a 2x2 contingency matrix.",
    faq: [],
    seoMeta: { title: "Chi-Square Independence Test", description: "Calculate chi-square statistic for 2x2 contingency tables.", keywords: "contingency table, chi-square test, variables independence" }
  },
  {
    id: "fishers-exact-test", name: "Fisher's Exact Test Calculator",
    description: "Determine exact hypergeometric probability for a 2x2 contingency table.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "p = \\frac{(a+b)!(c+d)!(a+c)!(b+d)!}{a! b! c! d! N!}",
    inputs: [
      { id: "a", label: "Row 1 / Col 1 (a)", type: "number", defaultValue: 4 },
      { id: "b", label: "Row 1 / Col 2 (b)", type: "number", defaultValue: 2 },
      { id: "c", label: "Row 2 / Col 1 (c)", type: "number", defaultValue: 1 },
      { id: "d", label: "Row 2 / Col 2 (d)", type: "number", defaultValue: 5 }
    ],
    outputs: [
      { id: "p_value", label: "Fisher's Exact Probability (p)", formula: "(factorial(a+b) * factorial(c+d) * factorial(a+c) * factorial(b+d)) / (factorial(a) * factorial(b) * factorial(c) * factorial(d) * factorial(a+b+c+d))", unit: "" }
    ],
    theory: "Fisher's exact test is a statistical significance test used in the analysis of contingency tables. Although in practice it is employed when sample sizes are small, it is valid for all sample sizes.",
    faq: [],
    seoMeta: { title: "Fisher's Exact Test Calculator", description: "Find exact hypergeometric probability for 2x2 tables.", keywords: "Fisher's exact test, exact probability, 2x2 contingency, small sample test" }
  },
  {
    id: "mcnemars-test-calculator", name: "McNemar's Test Calculator",
    description: "Calculate McNemar's chi-square test statistic for paired nominal data.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "\\chi^2 = \\frac{(b - c)^2}{b + c}",
    inputs: [
      { id: "a", label: "Both Positive (a)", type: "number", defaultValue: 15 },
      { id: "b", label: "Pre-Pos / Post-Neg (b)", type: "number", defaultValue: 25 },
      { id: "c", label: "Pre-Neg / Post-Pos (c)", type: "number", defaultValue: 5 },
      { id: "d", label: "Both Negative (d)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "chi_sq", label: "McNemar's Chi-Square (χ²)", formula: "(b - c)^2 / (b + c)", unit: "" },
      { id: "corrected_chi_sq", label: "Yates Corrected (χ²)", formula: "(abs(b - c) - 1)^2 / (b + c)", unit: "" }
    ],
    theory: "McNemar's test is a statistical test used on paired nominal data, checking for marginal homogeneity of two categorical dichotomous populations.",
    faq: [],
    seoMeta: { title: "McNemar's Test Calculator", description: "Compute McNemar's chi-square for dependent nominal sets.", keywords: "McNemar's test, paired nominal data, Yates correction" }
  },
  {
    id: "one-way-anova-calculator", name: "One-Way ANOVA Calculator",
    description: "Determine the F-statistic for a one-way Analysis of Variance (ANOVA).",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "F = \\frac{\\text{MS}_B}{\\text{MS}_W}",
    inputs: [
      { id: "ss_between", label: "Sum of Squares Between (SSB)", type: "number", defaultValue: 120 },
      { id: "df_between", label: "DF Between (k - 1)", type: "number", defaultValue: 2 },
      { id: "ss_within", label: "Sum of Squares Within (SSW)", type: "number", defaultValue: 340 },
      { id: "df_within", label: "DF Within (N - k)", type: "number", defaultValue: 27 }
    ],
    outputs: [
      { id: "ms_between", label: "Mean Square Between (MSB)", formula: "ss_between / df_between", unit: "" },
      { id: "ms_within", label: "Mean Square Within (MSW)", formula: "ss_within / df_within", unit: "" },
      { id: "f_stat", label: "F-test Statistic", formula: "(ss_between / df_between) / (ss_within / df_within)", unit: "" }
    ],
    theory: "One-way Analysis of Variance (ANOVA) compares the means of three or more independent groups to see if at least one group mean differs significantly from the others.",
    faq: [],
    seoMeta: { title: "One-Way ANOVA Calculator", description: "Calculate F-statistic and mean squares for one-way ANOVA.", keywords: "ANOVA, one-way ANOVA, F-statistic, analysis of variance" }
  },
  {
    id: "two-way-anova-calculator", name: "Two-Way ANOVA Calculator",
    description: "Calculate the F-statistic for Factor A in a two-way ANOVA design.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "F_A = \\frac{\\text{MS}_A}{\\text{MS}_{Error}}",
    inputs: [
      { id: "ss_a", label: "Sum of Squares A (SSA)", type: "number", defaultValue: 45 },
      { id: "df_a", label: "DF Factor A", type: "number", defaultValue: 1 },
      { id: "ss_error", label: "Sum of Squares Error (SSE)", type: "number", defaultValue: 150 },
      { id: "df_error", label: "DF Error", type: "number", defaultValue: 24 }
    ],
    outputs: [
      { id: "ms_a", label: "Mean Square A (MSA)", formula: "ss_a / df_a", unit: "" },
      { id: "ms_error", label: "Mean Square Error (MSE)", formula: "ss_error / df_error", unit: "" },
      { id: "f_stat", label: "F-Statistic (Factor A)", formula: "(ss_a / df_a) / (ss_error / df_error)", unit: "" }
    ],
    theory: "Two-way ANOVA examines the influence of two categorical independent variables on one continuous dependent variable, and can also test for interactions between factors.",
    faq: [],
    seoMeta: { title: "Two-Way ANOVA Calculator", description: "Calculate F-statistic for factor A in two-way ANOVA setups.", keywords: "two-way ANOVA, factor F-statistic, interaction effects" }
  },
  {
    id: "mann-whitney-u-test", name: "Mann-Whitney U Test Calculator",
    description: "Determine the z-score approximation for the Mann-Whitney U rank test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "z = \\frac{U - \\frac{n_1 n_2}{2}}{\\sqrt{\\frac{n_1 n_2 (n_1 + n_2 + 1)}{12}}}",
    inputs: [
      { id: "u", label: "Mann-Whitney U statistic", type: "number", defaultValue: 180 },
      { id: "n1", label: "Sample 1 Size (n1)", type: "number", defaultValue: 15 },
      { id: "n2", label: "Sample 2 Size (n2)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "u_mean", label: "Expected U Mean", formula: "n1 * n2 / 2", unit: "" },
      { id: "z_approx", label: "z-score Approximation", formula: "(u - (n1 * n2 / 2)) / sqrt(n1 * n2 * (n1 + n2 + 1) / 12)", unit: "" }
    ],
    theory: "The Mann-Whitney U test is a non-parametric test comparing independent groups on ordinal or skewed data, evaluating differences in ranks rather than averages.",
    faq: [],
    seoMeta: { title: "Mann-Whitney U Test Calculator", description: "Find the z-score approximation for U statistics.", keywords: "Mann-Whitney U, non-parametric test, Wilcoxon rank-sum" }
  },
  {
    id: "wilcoxon-signed-rank-test", name: "Wilcoxon Signed-Rank Test Calculator",
    description: "Calculate the z-statistic for the Wilcoxon paired signed-rank test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "z = \\frac{W - \\frac{n(n+1)}{4}}{\\sqrt{\\frac{n(n+1)(2n+1)}{24}}}",
    inputs: [
      { id: "w", label: "Signed-rank sum W", type: "number", defaultValue: 95 },
      { id: "n", label: "Number of pairs (n)", type: "number", defaultValue: 15 }
    ],
    outputs: [
      { id: "w_mean", label: "Expected W Mean", formula: "n * (n + 1) / 4", unit: "" },
      { id: "z_approx", label: "z-score Approximation", formula: "(w - (n * (n + 1) / 4)) / sqrt(n * (n + 1) * (2*n + 1) / 24)", unit: "" }
    ],
    theory: "The Wilcoxon signed-rank test is a non-parametric statistical hypothesis test used to compare two related samples, matched samples, or repeated measurements on a single sample to assess whether their population mean ranks differ.",
    faq: [],
    seoMeta: { title: "Wilcoxon Signed-Rank Calculator", description: "Calculate Wilcoxon non-parametric paired z-score.", keywords: "Wilcoxon test, signed-rank, non-parametric paired test" }
  },
  {
    id: "kruskal-wallis-test", name: "Kruskal-Wallis Test Calculator",
    description: "Calculate the H-statistic for the Kruskal-Wallis three-group rank test.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "H = \\frac{12}{N(N+1)} \\sum \\frac{R_j^2}{n_j} - 3(N+1)",
    inputs: [
      { id: "r1", label: "Group 1 Rank Sum (R1)", type: "number", defaultValue: 120 },
      { id: "n1", label: "Group 1 Size (n1)", type: "number", defaultValue: 10 },
      { id: "r2", label: "Group 2 Rank Sum (R2)", type: "number", defaultValue: 210 },
      { id: "n2", label: "Group 2 Size (n2)", type: "number", defaultValue: 10 },
      { id: "r3", label: "Group 3 Rank Sum (R3)", type: "number", defaultValue: 135 },
      { id: "n3", label: "Group 3 Size (n3)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "h_stat", label: "Kruskal H-Statistic", formula: "(12 / ((n1+n2+n3) * (n1+n2+n3+1))) * (r1^2/n1 + r2^2/n2 + r3^2/n3) - 3 * (n1+n2+n3+1)", unit: "" }
    ],
    theory: "The Kruskal-Wallis test is a non-parametric method for testing whether three or more independent samples originate from the same distribution, serving as the non-parametric analog to one-way ANOVA.",
    faq: [],
    seoMeta: { title: "Kruskal-Wallis H Calculator", description: "Compute H statistics for multi-group rank comparison.", keywords: "Kruskal-Wallis, non-parametric ANOVA, rank sums" }
  },
  {
    id: "friedman-test", name: "Friedman Test Calculator",
    description: "Calculate the Friedman test statistic for 3 blocks/treatments.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "Q = \\frac{12}{b k(k+1)} \\sum R_j^2 - 3b(k+1)",
    inputs: [
      { id: "r1", label: "Treatment 1 Rank Sum (R1)", type: "number", defaultValue: 12 },
      { id: "r2", label: "Treatment 2 Rank Sum (R2)", type: "number", defaultValue: 24 },
      { id: "r3", label: "Treatment 3 Rank Sum (R3)", type: "number", defaultValue: 18 },
      { id: "b", label: "Number of Blocks (b)", type: "number", defaultValue: 9 }
    ],
    outputs: [
      { id: "q_stat", label: "Friedman Q Statistic", formula: "(1 / b) * (r1^2 + r2^2 + r3^2) - 12 * b", unit: "" }
    ],
    theory: "The Friedman test is a non-parametric randomized block analysis of variance, used to detect differences in treatments across multiple test blocks.",
    faq: [],
    seoMeta: { title: "Friedman Test Calculator", description: "Calculate Friedman non-parametric block statistics.", keywords: "Friedman test, randomized block, rank ANOVA" }
  },
  {
    id: "f-test-equality-of-variances", name: "F-Test for Equality of Variances Calculator",
    description: "Calculate the F-ratio to test equality of two sample variances.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "F = \\frac{s_1^2}{s_2^2}",
    inputs: [
      { id: "var1", label: "Sample 1 Variance (s1²)", type: "number", defaultValue: 15.5 },
      { id: "var2", label: "Sample 2 Variance (s2²)", type: "number", defaultValue: 5.2 }
    ],
    outputs: [
      { id: "f_ratio", label: "F-test Ratio", formula: "var1 / var2", unit: "" }
    ],
    theory: "An F-test for equality of variances compares the variances of two populations to see if they are equal, typically to verify assumptions before executing an independent t-test.",
    faq: [],
    seoMeta: { title: "F-Test for Variances Equality", description: "Calculate variance ratios to test population variance equality.", keywords: "F-test, variance ratio, variances equality, t-test assumptions" }
  },
  {
    id: "z-score-to-p-value", name: "Z-Score to P-Value Calculator",
    description: "Convert a Z-score to a two-tailed or one-tailed p-value.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "p = 1 - \\text{erf}\\left(\\frac{|z|}{\\sqrt{2}}\\right)",
    inputs: [
      { id: "z", label: "Z-Score", type: "number", defaultValue: 1.96 }
    ],
    outputs: [
      { id: "p_two", label: "Two-Tailed p-value", formula: "1 - erf(abs(z) / sqrt(2))", unit: "" },
      { id: "p_one", label: "One-Tailed p-value", formula: "0.5 * (1 - erf(abs(z) / sqrt(2)))", unit: "" }
    ],
    theory: "Converting a Z-score to a p-value determines the statistical significance of a test statistic under the null hypothesis of a standard normal distribution.",
    faq: [],
    seoMeta: { title: "Z-Score to P-Value Calculator", description: "Convert standard Z-scores to statistical p-values.", keywords: "Z-score to p-value, significance value, normal probability" }
  },
  {
    id: "t-score-to-p-value", name: "T-Score to P-Value Calculator",
    description: "Calculate an approximate p-value from a t-score (z-approximation baseline).",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "p \\approx 1 - \\text{erf}\\left(\\frac{|t|}{\\sqrt{2}}\\right)",
    inputs: [
      { id: "t", label: "t-score", type: "number", defaultValue: 2.10 }
    ],
    outputs: [
      { id: "p_two", label: "Approx Two-Tailed p", formula: "1 - erf(abs(t) / sqrt(2))", unit: "" }
    ],
    theory: "This tool translates a t-score into a baseline significance p-value using a high-degrees-of-freedom normal approximation model.",
    faq: [],
    seoMeta: { title: "T-Score to P-Value Calculator", description: "Approximate p-values from t-scores easily.", keywords: "t-score to p-value, t-statistic, significance" }
  },
  {
    id: "chi-square-to-p-value", name: "Chi-Square to P-Value Calculator",
    description: "Calculate p-value from a Chi-Square statistic using Wilson-Hilferty approximation.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "z = \\frac{(\\frac{\\chi^2}{\\nu})^{\\frac{1}{3}} - (1 - \\frac{2}{9\\nu})}{\\sqrt{\\frac{2}{9\\nu}}}",
    inputs: [
      { id: "chi_sq", label: "Chi-Square statistic (χ²)", type: "number", defaultValue: 9.49 },
      { id: "df", label: "Degrees of Freedom (ν)", type: "number", defaultValue: 4 }
    ],
    outputs: [
      { id: "p_value", label: "Calculated p-value", formula: "1 - 0.5 * (1 + erf((((chi_sq / df)^(1/3) - (1 - 2/(9*df))) / sqrt(2/(9*df))) / sqrt(2)))", unit: "" }
    ],
    theory: "The Wilson-Hilferty transformation is an extremely accurate method that converts a chi-square distribution into a normal z-score, allowing quick computation of highly accurate p-values.",
    faq: [],
    seoMeta: { title: "Chi-Square to P-Value Calculator", description: "Convert chi-square stats to p-values using Wilson-Hilferty approximation.", keywords: "chi-square to p-value, Wilson-Hilferty, statistical significance" }
  },
  {
    id: "f-statistic-to-p-value", name: "F-Statistic to P-Value Calculator",
    description: "Convert an F-statistic to an approximate p-value.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "\\text{P-Value} \\approx \\text{CDF of Standard Normal via Paulson Approximation}",
    inputs: [
      { id: "f_val", label: "F-statistic", type: "number", defaultValue: 3.48 },
      { id: "d1", label: "Numerator DF (d1)", type: "number", defaultValue: 3 },
      { id: "d2", label: "Denominator DF (d2)", type: "number", defaultValue: 20 }
    ],
    outputs: [
      { id: "p_approx", label: "Approximate P-Value", formula: "1 - 0.5 * (1 + erf((( (1 - 2/(9*d2))*f_val^(1/3) - (1 - 2/(9*d1)) ) / sqrt( 2/(9*d1) + 2*f_val^(2/3)/(9*d2) )) / sqrt(2)))", unit: "" }
    ],
    theory: "Using Paulson's legendary normal approximation for the F-distribution CDF, this calculator maps F-ratios with numerator and denominator degrees of freedom to standard normal Z-scores to compute accurate p-values.",
    faq: [],
    seoMeta: { title: "F-Statistic to P-Value Calculator", description: "Convert F-ratios to significance p-values via Paulson approximation.", keywords: "F-statistic to p-value, Paulson normal transform, ANOVA p-value" }
  },
  {
    id: "post-hoc-tukey-hsd", name: "Post-hoc Tukey HSD Calculator",
    description: "Calculate Tukey's HSD Q-statistic for pairwise comparisons.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "q = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{\\text{MS}_{Error}}{n}}}",
    inputs: [
      { id: "mean1", label: "Group 1 Mean (x̄1)", type: "number", defaultValue: 18.5 },
      { id: "mean2", label: "Group 2 Mean (x̄2)", type: "number", defaultValue: 14.2 },
      { id: "ms_error", label: "Mean Square Error (MSE)", type: "number", defaultValue: 12.5 },
      { id: "n", label: "Group Sample Size (n)", type: "number", defaultValue: 10 }
    ],
    outputs: [
      { id: "q_val", label: "Tukey Q Statistic", formula: "(mean1 - mean2) / sqrt(ms_error / n)", unit: "" }
    ],
    theory: "Tukey's honestly significant difference (HSD) test is a single-step multiple comparison procedure and statistical test, used in conjunction with an ANOVA to find means that are significantly different from each other.",
    faq: [],
    seoMeta: { title: "Tukey's HSD Calculator", description: "Calculate pairwise Tukey Q statistics for post-hoc ANOVA comparisons.", keywords: "Tukey HSD, post-hoc analysis, Q-statistic, ANOVA pairwise" }
  },
  {
    id: "bonferroni-correction-calculator", name: "Bonferroni Correction Calculator",
    description: "Calculate the corrected significance alpha level for multiple comparisons.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "\\alpha_{adj} = \\frac{\\alpha}{n}",
    inputs: [
      { id: "alpha", label: "Initial Significance Level (α)", type: "number", defaultValue: 0.05 },
      { id: "n", label: "Number of Pairwise Comparisons (n)", type: "number", defaultValue: 6 }
    ],
    outputs: [
      { id: "alpha_adj", label: "Bonferroni Adjusted α", formula: "alpha / n", unit: "" }
    ],
    theory: "The Bonferroni correction is a method used to address the problem of multiple comparisons, adjusting the significance threshold to prevent inflation of Type I errors (false positives).",
    faq: [],
    seoMeta: { title: "Bonferroni Correction Calculator", description: "Calculate corrected alpha levels for multiple statistical tests.", keywords: "Bonferroni correction, multiple comparisons, adjusted alpha" }
  },
  {
    id: "benjamini-hochberg-fdr", name: "Benjamini-Hochberg (FDR) Calculator",
    description: "Calculate Benjamini-Hochberg critical values to control False Discovery Rate.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "(i / m) \\cdot q",
    inputs: [
      { id: "i", label: "P-Value Rank (i)", type: "number", defaultValue: 3 },
      { id: "m", label: "Total Number of Tests (m)", type: "number", defaultValue: 50 },
      { id: "q", label: "FDR Target Rate (q)", type: "number", defaultValue: 0.05 }
    ],
    outputs: [
      { id: "crit_val", label: "Critical Value Threshold", formula: "(i / m) * q", unit: "" }
    ],
    theory: "The Benjamini-Hochberg procedure controls the False Discovery Rate (FDR) rather than the family-wise error rate, maintaining power in large-scale multiple hypothesis testing.",
    faq: [],
    seoMeta: { title: "Benjamini-Hochberg FDR Calculator", description: "Calculate critical significance thresholds for false discovery rates.", keywords: "Benjamini-Hochberg, FDR control, multiple hypothesis tests" }
  },
  {
    id: "outlier-test-grubbs", name: "Outlier Test (Grubbs' Test) Calculator",
    description: "Calculate Grubbs' test G-statistic to identify outlier data points.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "G = \\frac{|x - \\bar{x}|}{s}",
    inputs: [
      { id: "val", label: "Suspect Outlier Value (x)", type: "number", defaultValue: 95 },
      { id: "mean", label: "Sample Mean (x̄)", type: "number", defaultValue: 50 },
      { id: "sd", label: "Sample Std Dev (s)", type: "number", defaultValue: 12 }
    ],
    outputs: [
      { id: "g_stat", label: "Grubbs G statistic", formula: "abs(val - mean) / sd", unit: "" }
    ],
    theory: "Grubbs' test is a statistical test used to detect a single outlier in a univariate dataset that is assumed to follow a normal distribution.",
    faq: [],
    seoMeta: { title: "Grubbs' Outlier Test Calculator", description: "Calculate Grubbs' G-statistic for outlier checks.", keywords: "Grubbs' test, outlier test, statistical outliers" }
  },
  {
    id: "outlier-test-dixons-q", name: "Outlier Test (Dixon's Q-Test) Calculator",
    description: "Determine Dixon's Q-statistic for checking outliers in small samples.",
    category: "statistics", subcategory: "hypothesis-testing",
    scientificFormula: "Q = \\frac{|x_{suspect} - x_{nearest}|}{X_{max} - X_{min}}",
    inputs: [
      { id: "suspect_val", label: "Suspect Value", type: "number", defaultValue: 12.5 },
      { id: "nearest_val", label: "Nearest Neighbor Value", type: "number", defaultValue: 8.2 },
      { id: "max_val", label: "Maximum in Dataset", type: "number", defaultValue: 12.5 },
      { id: "min_val", label: "Minimum in Dataset", type: "number", defaultValue: 4.1 }
    ],
    outputs: [
      { id: "q_stat", label: "Dixon Q statistic", formula: "abs(suspect_val - nearest_val) / (max_val - min_val)", unit: "" }
    ],
    theory: "Dixon's Q-test is a simple significance test used to detect outliers in small datasets (typically N = 3 to 10), checking the gap size relative to the range.",
    faq: [],
    seoMeta: { title: "Dixon's Q outlier test", description: "Calculate Dixon's Q-statistic for small sample outliers.", keywords: "Dixon's Q-test, small sample outliers, stats" }
  }
];
