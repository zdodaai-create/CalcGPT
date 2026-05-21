import * as math from 'mathjs';
import { STATISTICS_CALCULATORS_BASE } from './src/lib/statistics-calculators-base';
import { STATISTICS_CALCULATORS_ADVANCED } from './src/lib/statistics-calculators-advanced';

const allCalculators = [...STATISTICS_CALCULATORS_BASE, ...STATISTICS_CALCULATORS_ADVANCED];

let totalCount = 0;
let successCount = 0;
let failureCount = 0;

console.log(`Validating formulas for ${allCalculators.length} calculators...\n`);

allCalculators.forEach(calc => {
  calc.outputs.forEach(output => {
    if (output.formula) {
      totalCount++;
      const scope: Record<string, number> = {};
      
      // Setup default values in the scope
      calc.inputs.forEach(input => {
        let val = typeof input.defaultValue === 'number' ? input.defaultValue : 1;
        if (input.type === 'select') {
          // If it's a select, just use the first option value or a default numeric string parsed
          const optVal = input.options && input.options.length > 0 ? parseFloat(input.options[0].value) : 1;
          val = isNaN(optVal) ? 1 : optVal;
        }
        scope[input.id] = val;
      });

      try {
        const result = math.evaluate(output.formula, scope);
        if (typeof result !== 'number' || isNaN(result)) {
           console.error(`❌ [${calc.id}] Output '${output.id}': Formula returned invalid result ${result}. Formula: ${output.formula}`);
           failureCount++;
        } else {
           successCount++;
        }
      } catch (err: any) {
        console.error(`❌ [${calc.id}] Output '${output.id}': Evaluation error: ${err.message}. Formula: ${output.formula}`);
        failureCount++;
      }
    }
  });
});

console.log(`\nValidation complete. Tested ${totalCount} formulas.`);
console.log(`✅ Success: ${successCount}`);
console.log(`❌ Failures: ${failureCount}`);

if (failureCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
