export type InputFieldType = 'number' | 'text' | 'select' | 'range' | 'date';
export type FormatterType = 'currency' | 'percentage' | 'number' | 'text';

export interface UnitOption {
  label: string;
  value: string;
  factor: number;
  offset?: number;
}

export interface InputField {
  id: string;
  /** Display name (used by batch/ecommerce/marketing calculators) */
  name?: string;
  /** Display label (used by older MathJS-based calculators) */
  label?: string;
  type: InputFieldType;
  placeholder?: string;
  defaultValue?: any;
  options?: { label: string; value: any }[];
  unit?: string;
  unitOptions?: UnitOption[];
  validation?: {
    min?: number;
    max?: number;
    required?: boolean;
    pattern?: string;
  };
  helpText?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface OutputField {
  id: string;
  /** Display name (used by batch/ecommerce/marketing calculators) */
  name?: string;
  /** Display label (used by older MathJS-based calculators) */
  label?: string;
  /** MathJS formula string (older calculators) */
  formula?: string;
  /** Formatter type (batch calculators) */
  formatter?: FormatterType;
  type?: string;
  unit?: string;
  unitOptions?: UnitOption[];
  description?: string;
  precision?: number;
}

export interface CalculatorConfig {
  id: string;
  name: string;
  description?: string;
  category: string;
  subcategory?: string;
  inputs: InputField[];
  outputs: OutputField[];

  /** Programmatic calculate function (batch/ecommerce/marketing calculators) */
  calculate?: (inputs: Record<string, number>) => Record<string, number>;

  formulaExplanation?: string;
  steps?: string[];
  scientificFormula?: string;
  faq?: { question: string; answer: string }[];

  // Educational Content Extensions
  seoMeta?: { title: string; description: string; keywords: string };
  theory?: string;
  derivation?: string;
  applications?: string[];
  examples?: { problem: string; solution: string }[];
  commonMistakes?: string[];
  resultInterpretation?: string;
  relatedCalculators?: string[];
}
