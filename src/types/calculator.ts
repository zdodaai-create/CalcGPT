// Re-exports from the canonical calculator-types definition.
// All calculator files should ideally import from here (@/types/calculator)
// or from '../lib/calculator-types' - both resolve to the same types.
export type {
  InputFieldType,
  FormatterType,
  UnitOption,
  InputField,
  OutputField,
  CalculatorConfig,
} from '@/lib/calculator-types';
