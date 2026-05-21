export type InputFieldType = 'number' | 'text' | 'select' | 'range' | 'date';

export interface UnitOption {
  label: string;
  value: string;
  factor: number; // Factor to convert to base unit (e.g., if base is meter, cm factor is 0.01)
  offset?: number; // For temperature (Celsius to Kelvin etc)
}

export interface InputField {
  id: string;
  label: string;
  type: InputFieldType;
  placeholder?: string;
  defaultValue?: any;
  options?: { label: string; value: any }[]; // For 'select' type
  unit?: string; // Default display unit
  unitOptions?: UnitOption[]; // Options for unit conversion
  validation?: {
    min?: number;
    max?: number;
    required?: boolean;
    pattern?: string;
  };
  helpText?: string;
}

export interface OutputField {
  id: string;
  label: string;
  formula: string; // MathJS formula
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
  formulaExplanation?: string;
  steps?: string[];
  scientificFormula?: string; // LaTeX or similar for display
  faq?: { question: string; answer: string }[];
  
  // Educational Content Extensions
  seoMeta?: { title: string; description: string; keywords: string };
  theory?: string;
  derivation?: string;
  applications?: string[];
  examples?: { problem: string; solution: string }[];
  commonMistakes?: string[];
  resultInterpretation?: string;
}
