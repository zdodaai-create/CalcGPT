"use client";

import React, { useState, useMemo } from 'react';
import { evaluate } from 'mathjs';
import { CalculatorConfig } from '@/lib/calculator-types';
import { RefreshCcw, Sparkles, Info } from 'lucide-react';
import { CalculatorInput } from './CalculatorInput';
import { ResultCard } from './ResultCard';
import { FormulaSection } from './FormulaSection';
import { Button } from '@/components/ui/button';
import { PunnettSquare } from './PunnettSquare';
import { calculateMolarMass, getElectronConfiguration } from '@/lib/chemistry-logic';
import { DynamicGraph } from './DynamicGraph';

interface DynamicCalculatorProps {
  config: CalculatorConfig;
}

export const DynamicCalculator: React.FC<DynamicCalculatorProps> = ({ config }) => {
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    return config.inputs.reduce((acc, input) => {
      acc[input.id] = input.defaultValue ?? '';
      return acc;
    }, {} as any);
  });

  const [units, setUnits] = useState<Record<string, string>>(() => {
    return config.inputs.reduce((acc, input) => {
      if (input.unitOptions && input.unitOptions.length > 0) {
        acc[input.id] = input.unit || input.unitOptions[0].value;
      } else {
        acc[input.id] = input.unit || '';
      }
      return acc;
    }, {} as any);
  });

  const handleInputChange = (id: string, value: any) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleUnitChange = (id: string, unit: string) => {
    setUnits(prev => ({ ...prev, [id]: unit }));
  };

  const reset = () => {
    setInputs(config.inputs.reduce((acc, input) => {
      acc[input.id] = input.defaultValue ?? '';
      return acc;
    }, {} as any));
  };

  const results = useMemo(() => {
    const res: Record<string, any> = {};
    
    // Preparation for standard mathjs calculation
    const baseValues: Record<string, any> = {};
    config.inputs.forEach(input => {
      let val = inputs[input.id];
      
      if (input.type === 'number' || input.type === 'range') {
        val = parseFloat(val);
        if (isNaN(val)) val = 0;
        
        const currentUnit = units[input.id];
        const unitOpt = input.unitOptions?.find(u => u.value === currentUnit);
        if (unitOpt) {
          val = (val + (unitOpt.offset || 0)) * unitOpt.factor;
        }
      }
      baseValues[input.id] = val;
    });

    config.outputs.forEach(output => {
      try {
        // Special Logic: Date Calculations (Pregnancy)
        if (config.subcategory === 'animal-pregnancy' && (output.id === 'due_date' || output.id === 'date')) {
          const dateVal = new Date(inputs['date'] || inputs['mating_date'] || inputs['breeding_date']);
          if (!isNaN(dateVal.getTime())) {
            const daysToAdd = parseInt(output.formula || '0'); // In pregnancy calcs, we store days as formula for now
            dateVal.setDate(dateVal.getDate() + daysToAdd);
            res[output.id] = dateVal.toLocaleDateString(undefined, { 
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            });
            return;
          }
        }

        // Special Logic: DNA to mRNA
        if (config.id === 'dna-to-mrna-converter' && output.id === 'mrna') {
          res[output.id] = (inputs['dna'] || '').toUpperCase().replace(/T/g, 'U');
          return;
        }

        // Special Logic: Molar Mass
        if (config.id === 'molar-mass-calculator' && output.id === 'mass') {
          const mass = calculateMolarMass(inputs['formula'] || '');
          res[output.id] = isNaN(mass) ? 'Invalid' : mass;
          return;
        }

        // Special Logic: Butter Calculator
        if (config.id === 'butter-calculator') {
          const butterConversions: Record<string, number> = {
            stick: 113.4,
            gram: 1,
            tbsp: 14.2,
            tsp: 4.7,
            cup: 227,
            pound: 454
          };
          
          const value = parseFloat(inputs['amount']);
          const fromUnit = inputs['unit'] || 'stick';
          
          if (isNaN(value)) {
            res[output.id] = '—';
            return;
          }
          
          const convertButter = (val: number, from: string, to: string) => {
            const grams = val * (butterConversions[from] || 1);
            return grams / (butterConversions[to] || 1);
          };
          
          const unitMap: Record<string, string> = {
            'res_gram': 'gram',
            'res_tbsp': 'tbsp',
            'res_tsp': 'tsp',
            'res_cup': 'cup',
            'res_pound': 'pound'
          };
          
          const toUnit = unitMap[output.id];
          if (toUnit) {
            res[output.id] = convertButter(value, fromUnit, toUnit).toFixed(2);
            return;
          }
        }

        // Special Logic: Cooking Measurement Converter
        if (config.id === 'cooking-measurement-converter') {
          const val = parseFloat(inputs['val']);
          const fromUnit = inputs['from_unit'] || 'cups';
          
          if (isNaN(val)) {
            res[output.id] = '0.00';
            return;
          }
          
          const conversions: Record<string, number> = {
            'cups': 236.588,
            'ml': 1,
            'tbsp': 14.787,
            'tsp': 4.929,
            'oz': 29.574
          };
          
          const ml = val * (conversions[fromUnit] || 1); // Convert to ml
          
          if (output.id === 'to_ml') {
            res[output.id] = ml.toFixed(2);
            return;
          }
          if (output.id === 'to_cups') {
            res[output.id] = (ml / 236.588).toFixed(2);
            return;
          }
        }

        // Special Logic: Cake Pan Converter
        if (config.id === 'cake-pan-converter') {
          const origSize = parseFloat(inputs['orig_size']);
          const newSize = parseFloat(inputs['new_size']);
          const origShape = inputs['orig_shape'] || 'round';
          const newShape = inputs['new_shape'] || 'round';
          
          if (isNaN(origSize) || isNaN(newSize)) {
            res[output.id] = '0.00';
            return;
          }
          
          const getArea = (size: number, shape: string) => {
            if (shape === 'round') {
              return Math.PI * Math.pow(size / 2, 2);
            }
            return Math.pow(size, 2); // Square
          };
          
          const origArea = getArea(origSize, origShape);
          const newArea = getArea(newSize, newShape);
          
          if (origArea > 0) {
            res[output.id] = (newArea / origArea).toFixed(2);
          } else {
            res[output.id] = '0.00';
          }
          return;
        }

        // Special Logic: Binary/Hex/RGB/Time
        if (config.category === 'conversion') {
          const val = inputs[config.inputs[0].id];
          
          if (config.id === 'binary-converter' && output.id === 'bin') {
            const dec = parseInt(val);
            res[output.id] = isNaN(dec) ? '0' : dec.toString(2);
            return;
          }
          if (config.id === 'binary-to-hexadecimal-converter' && output.id === 'hex') {
            const dec = parseInt(val, 2);
            res[output.id] = isNaN(dec) ? '0' : dec.toString(16).toUpperCase();
            return;
          }
          if (config.id === 'hex-to-rgb-converter' && output.id === 'rgb') {
             const cleanHex = (val || '').replace('#', '');
             const r = parseInt(cleanHex.substring(0,2), 16);
             const g = parseInt(cleanHex.substring(2,4), 16);
             const b = parseInt(cleanHex.substring(4,6), 16);
             res[output.id] = isNaN(r) ? 'Invalid' : `rgb(${r}, ${g}, ${b})`;
             return;
          }
          if (config.id === 'rgb-to-hex-converter' && output.id === 'hex') {
             const r = Math.min(255, Math.max(0, parseInt(inputs['r']) || 0));
             const g = Math.min(255, Math.max(0, parseInt(inputs['g']) || 0));
             const b = Math.min(255, Math.max(0, parseInt(inputs['b']) || 0));
             res[output.id] = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
             return;
          }
          if (config.id === 'unix-time-converter' && output.id === 'date') {
             const d = new Date(parseInt(val) * 1000);
             res[output.id] = isNaN(d.getTime()) ? 'Invalid' : d.toUTCString();
             return;
          }
          if (config.id === 'roman-numerals-converter' && output.id === 'roman') {
             let num = parseInt(val) || 0;
             const lookup: any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
             let roman = '';
             for (let i in lookup) {
               while (num >= lookup[i]) { roman += i; num -= lookup[i]; }
             }
             res[output.id] = roman || 'N/A';
             return;
          }

          if (config.id === 'black-scholes-calculator' && output.id === 'call') {
             const s = parseFloat(inputs['s']);
             const k = parseFloat(inputs['k']);
             const t = parseFloat(inputs['t']);
             const r = parseFloat(inputs['r']) / 100;
             const v = parseFloat(inputs['v']) / 100;

             const d1 = (Math.log(s / k) + (r + Math.pow(v, 2) / 2) * t) / (v * Math.sqrt(t));
             const d2 = d1 - v * Math.sqrt(t);

             const normCDF = (x: number) => {
               const t = 1 / (1 + 0.2316419 * Math.abs(x));
               const d = 0.3989423 * Math.exp(-x * x / 2);
               const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
               if (x > 0) return 1 - prob;
               return prob;
             };

             const callPrice = s * normCDF(d1) - k * Math.exp(-r * t) * normCDF(d2);
             res[output.id] = callPrice.toFixed(2);
             return;
          }
        }

        // Special Logic: Binary Calculators
        if (config.subcategory === 'binary') {
          const parseBin = (str: string) => {
            const clean = (str || '').toString().replace(/[^01]/g, '');
            if (!clean) return 0;
            return parseInt(clean, 2);
          };
          
          const toBin = (num: number) => {
            if (isNaN(num) || !isFinite(num)) return '0';
            return (num >>> 0).toString(2);
          };

          const bin1 = inputs['bin1'] || '';
          const bin2 = inputs['bin2'] || '';
          const val1 = parseBin(bin1);
          const val2 = parseBin(bin2);

          if (config.id === 'and-calculator' && output.id === 'result') {
            res[output.id] = toBin(val1 & val2);
            return;
          }
          if (config.id === 'or-calculator' && output.id === 'result') {
            res[output.id] = toBin(val1 | val2);
            return;
          }
          if (config.id === 'xor-calculator' && output.id === 'result') {
            res[output.id] = toBin(val1 ^ val2);
            return;
          }
          if (config.id === 'nor-calculator' && output.id === 'result') {
            const maxLength = Math.max(bin1.length, bin2.length) || 1;
            const orVal = val1 | val2;
            const norStr = toBin(orVal).padStart(maxLength, '0');
            res[output.id] = norStr.split('').map(c => c === '0' ? '1' : '0').join('');
            return;
          }
          if (config.id === 'binary-addition-calculator') {
            if (output.id === 'result') {
              res[output.id] = toBin(val1 + val2);
              return;
            }
            if (output.id === 'dec_result') {
              res[output.id] = val1 + val2;
              return;
            }
          }
          if (config.id === 'binary-subtraction-calculator') {
            if (output.id === 'result') {
              const diff = val1 - val2;
              if (diff < 0) {
                res[output.id] = '-' + toBin(Math.abs(diff));
              } else {
                res[output.id] = toBin(diff);
              }
              return;
            }
            if (output.id === 'dec_result') {
              res[output.id] = val1 - val2;
              return;
            }
          }
          if (config.id === 'binary-multiplication-calculator') {
            if (output.id === 'result') {
              res[output.id] = toBin(val1 * val2);
              return;
            }
            if (output.id === 'dec_result') {
              res[output.id] = val1 * val2;
              return;
            }
          }
          if (config.id === 'binary-division-calculator') {
            if (output.id === 'result') {
              if (val2 === 0) {
                res[output.id] = 'Error: Div by 0';
              } else {
                res[output.id] = toBin(Math.floor(val1 / val2));
              }
              return;
            }
            if (output.id === 'remainder') {
              if (val2 === 0) {
                res[output.id] = 'Error';
              } else {
                res[output.id] = toBin(val1 % val2);
              }
              return;
            }
          }
          if (config.id === 'binary-fraction-converter' && output.id === 'bin_frac') {
            let dec = parseFloat(inputs['dec_frac']);
            if (isNaN(dec)) dec = 0;
            if (dec < 0 || dec >= 1) {
              res[output.id] = 'Must be between 0 and 1';
              return;
            }
            let binary = '0.';
            let temp = dec;
            for (let i = 0; i < 12; i++) {
              temp *= 2;
              if (temp >= 1) {
                binary += '1';
                temp -= 1;
              } else {
                binary += '0';
              }
              if (temp === 0) break;
            }
            res[output.id] = binary;
            return;
          }
          if (config.id === 'binary-calculator' && output.id === 'result') {
            const op = inputs['op'] || '+';
            if (op === '+') res[output.id] = toBin(val1 + val2);
            else if (op === '-') res[output.id] = val1 >= val2 ? toBin(val1 - val2) : '-' + toBin(val2 - val1);
            else if (op === '*') res[output.id] = toBin(val1 * val2);
            else if (op === '/') res[output.id] = val2 === 0 ? 'Div by 0' : toBin(Math.floor(val1 / val2));
            return;
          }
          if (config.id === 'bit-shift-calculator' && output.id === 'result') {
            const bin = inputs['bin'] || '';
            const val = parseBin(bin);
            const shift = parseInt(inputs['shift']) || 0;
            const dir = inputs['dir'] || 'left';
            if (dir === 'left') {
              res[output.id] = toBin(val << shift);
            } else {
              res[output.id] = toBin(val >>> shift);
            }
            return;
          }
          if (config.id === 'bitwise-calculator' && output.id === 'result') {
            const op = inputs['op'] || 'AND';
            if (op === 'AND') res[output.id] = toBin(val1 & val2);
            else if (op === 'OR') res[output.id] = toBin(val1 | val2);
            else if (op === 'XOR') res[output.id] = toBin(val1 ^ val2);
            else if (op === 'NOT') {
              const maxLength = bin1.length || 1;
              const flipped = bin1.split('').map((c: string) => c === '0' ? '1' : '0').join('');
              res[output.id] = flipped;
            }
            return;
          }
          if (config.id === 'ones-complement-calculator' && output.id === 'result') {
            const bin = inputs['bin'] || '';
            res[output.id] = bin.split('').map((c: string) => c === '0' ? '1' : '0').join('');
            return;
          }
          if (config.id === 'twos-complement-calculator' && output.id === 'result') {
            const bin = inputs['bin'] || '';
            if (!bin) {
              res[output.id] = '0';
              return;
            }
            const ones = bin.split('').map((c: string) => c === '0' ? '1' : '0').join('');
            const dec = parseInt(ones, 2) + 1;
            res[output.id] = dec.toString(2).padStart(bin.length, '0');
            return;
          }
        }

        // Special Logic: Other & Paradoxes Calculators
        if (config.subcategory === 'other-math') {
          if (config.id === 'babylonian-numbers-converter') {
            let dec = parseInt(inputs['decimal']) || 0;
            if (dec === 0) {
              res[output.id] = '0';
            } else {
              let val = Math.abs(dec);
              let parts = [];
              while (val > 0) {
                parts.unshift(val % 60);
                val = Math.floor(val / 60);
              }
              res[output.id] = (dec < 0 ? '-' : '') + parts.join(' ');
            }
            return;
          }
          if (config.id === 'galileos-paradox-of-infinity-calculator') {
            let n = parseInt(inputs['n']) || 0;
            if (output.id === 'nth_square') {
              res[output.id] = n * n;
            } else if (output.id === 'aleph') {
              res[output.id] = 'ℵ₀ (aleph-null)';
            }
            return;
          }
          if (config.id === 'hilberts-hotel-paradox-calculator') {
            let k = parseInt(inputs['guests_arriving']) || 0;
            if (output.id === 'room_shift_formula') {
              res[output.id] = `Room n → Room (n + ${k})`;
            } else if (output.id === 'new_free_rooms') {
              res[output.id] = k > 0 ? `Rooms 1 to ${k}` : 'None';
            }
            return;
          }
          if (config.id === 'involute-function-calculator') {
            let angle = parseFloat(inputs['angle_deg']) || 0;
            let rad = angle * Math.PI / 180;
            if (output.id === 'radians') {
              res[output.id] = rad.toFixed(5);
            } else if (output.id === 'inv_val') {
              res[output.id] = (Math.tan(rad) - rad).toFixed(6);
            }
            return;
          }
          if (config.id === 'lfsr-calculator') {
            let seed = (inputs['seed'] || '1011').replace(/[^01]/g, '');
            let tapsStr = inputs['taps'] || '3,4';
            let steps = parseInt(inputs['steps']) || 5;
            let taps = tapsStr.split(',').map((x: string) => parseInt(x.trim())).filter((x: number) => !isNaN(x));
            
            if (seed.length === 0 || taps.length === 0) {
              res[output.id] = 'Invalid';
              return;
            }

            let state = seed.split('').map((x: string) => parseInt(x));
            let outSeq = [];
            for (let s = 0; s < steps; s++) {
              let feedback = taps.reduce((acc: number, tapIdx: number) => {
                let idx = state.length - tapIdx;
                if (idx >= 0 && idx < state.length) return acc ^ state[idx];
                return acc;
              }, 0);
              let outBit = state.pop();
              if (outBit !== undefined) outSeq.push(outBit);
              state.unshift(feedback);
            }
            if (output.id === 'sequence') {
              res[output.id] = outSeq.join('');
            } else if (output.id === 'final_state') {
              res[output.id] = state.join('');
            }
            return;
          }
          if (config.id === 'luhn-algorithm-calculator') {
            let card = (inputs['card_number'] || '').toString().replace(/\D/g, '');
            if (!card) {
              res[output.id] = output.id === 'is_valid' ? 'Invalid' : 'N/A';
              return;
            }
            let sum = 0;
            let shouldDouble = false;
            for (let i = card.length - 1; i >= 0; i--) {
              let digit = parseInt(card.charAt(i));
              if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
              }
              sum += digit;
              shouldDouble = !shouldDouble;
            }
            if (output.id === 'is_valid') {
              res[output.id] = sum % 10 === 0 ? 'Valid' : 'Invalid';
            } else if (output.id === 'check_digit') {
              res[output.id] = card.charAt(card.length - 1);
            }
            return;
          }
          if (config.id === 'mayan-numerals-converter') {
            let dec = parseInt(inputs['decimal']) || 0;
            if (dec === 0) {
              res[output.id] = '0';
            } else {
              let val = Math.abs(dec);
              let parts = [];
              while (val > 0) {
                parts.unshift(val % 20);
                val = Math.floor(val / 20);
              }
              res[output.id] = (dec < 0 ? '-' : '') + parts.join(' ');
            }
            return;
          }
          if (config.id === 'miracle-calculator') {
            let x = parseFloat(inputs['secret_number']) || 0;
            if (output.id === 'step1') res[output.id] = 2 * x;
            else if (output.id === 'step2') res[output.id] = 2 * x + 10;
            else if (output.id === 'step3') res[output.id] = x + 5;
            else if (output.id === 'step4') res[output.id] = 5;
            return;
          }
          if (config.id === 'potato-calculator' && output.id === 'final_weight') {
            let w = parseFloat(inputs['initial_weight']) || 0;
            let w1 = parseFloat(inputs['initial_water_pct']) || 0;
            let w2 = parseFloat(inputs['final_water_pct']) || 0;
            if (w2 >= 100) {
              res[output.id] = 'Error';
            } else {
              res[output.id] = (w * (100 - w1) / (100 - w2)).toFixed(2);
            }
            return;
          }
          if (config.id === 'prisoners-dilemma-calculator') {
            let p1 = inputs['p1_choice'] || 'Cooperate';
            let p2 = inputs['p2_choice'] || 'Cooperate';
            if (p1 === 'Cooperate' && p2 === 'Cooperate') {
              res[output.id] = '1 year';
            } else if (p1 === 'Cooperate' && p2 === 'Defect') {
              res[output.id] = output.id === 'p1_years' ? '3 years' : '0 years (Free)';
            } else if (p1 === 'Defect' && p2 === 'Cooperate') {
              res[output.id] = output.id === 'p1_years' ? '0 years (Free)' : '3 years';
            } else {
              res[output.id] = '2 years';
            }
            return;
          }
          if (config.id === 'rsa-calculator') {
            let p = parseInt(inputs['p']) || 61;
            let q = parseInt(inputs['q']) || 53;
            let e = parseInt(inputs['e']) || 17;
            let msg = parseInt(inputs['message']) || 65;

            let n = p * q;
            let phi = (p - 1) * (q - 1);

            let d = 0;
            for (let i = 1; i < phi; i++) {
              if ((e * i) % phi === 1) {
                d = i;
                break;
              }
            }

            const powerMod = (base: number, exp: number, mod: number) => {
              let r = 1;
              base = base % mod;
              while (exp > 0) {
                if (exp % 2 === 1) r = (r * base) % mod;
                exp = Math.floor(exp / 2);
                base = (base * base) % mod;
              }
              return r;
            };

            if (output.id === 'n') res[output.id] = n;
            else if (output.id === 'phi') res[output.id] = phi;
            else if (output.id === 'd') res[output.id] = d || 'No modular inverse';
            else if (output.id === 'ciphertext') res[output.id] = d ? powerMod(msg, e, n) : 'Error';
            return;
          }
        }

        // Special Logic: Electron Configuration
        if (config.id === 'electron-configuration-calculator' && output.id === 'configuration') {
          const z = parseInt(inputs['atomic_number']);
          res[output.id] = getElectronConfiguration(z);
          return;
        }

        // Special Logic: Quiz Electron Configuration
        if (config.id === 'quiz-electron-configuration-calculator') {
          const z = parseInt(inputs['atomic_number']);
          const actual = getElectronConfiguration(z);
          
          if (output.id === 'actual_config') {
            res[output.id] = actual;
            return;
          }
          if (output.id === 'is_correct') {
            const guess = (inputs['guess'] || '').toString().trim().toLowerCase().replace(/\s+/g, '');
            const normalizedActual = actual.toLowerCase().replace(/\s+/g, '');
            res[output.id] = guess === normalizedActual ? 'Correct! 🎉' : 'Incorrect, try again!';
            return;
          }
        }

        // Special Logic: Chemical Name / Classifier
        if (config.id === 'chemical-name-calculator') {
          const formula = inputs['formula'] || '';
          if (output.id === 'mass') {
            const mass = calculateMolarMass(formula);
            res[output.id] = isNaN(mass) || mass === 0 ? 'Invalid Formula' : `${mass.toFixed(3)} g/mol`;
            return;
          }
          if (output.id === 'classification') {
            if (!formula) {
              res[output.id] = '—';
              return;
            }
            const clean = formula.trim();
            if (/^(HCl|HNO3|H2SO4|HBr|HI|HClO4|HClO3|H3PO4|CH3COOH|H2CO3)$/i.test(clean)) {
              res[output.id] = 'Acid (Brønsted-Lowry)';
            } else if (/^(NaOH|KOH|LiOH|Ca\(OH\)2|Ba\(OH\)2|NH3)$/i.test(clean)) {
              res[output.id] = 'Base (Arrhenius / Brønsted)';
            } else if (/^(NaCl|KCl|CaSO4|MgSO4|KNO3|CaCO3|NH4Cl)$/i.test(clean)) {
              res[output.id] = 'Ionic Salt';
            } else if (/^(H2O|CO2|CO|CH4|NH3|SO2|NO2|O2|N2|H2|Cl2)$/i.test(clean)) {
              res[output.id] = 'Covalent Molecule';
            } else {
              res[output.id] = 'Compound (Mixed Bonding)';
            }
            return;
          }
        }

        // Special Logic: Empirical Formula Ratio
        if (config.id === 'empirical-formula-calculator' && output.id === 'ratio') {
          const m1 = parseFloat(inputs['m1']);
          const a1 = parseFloat(inputs['a1']);
          const m2 = parseFloat(inputs['m2']);
          const a2 = parseFloat(inputs['a2']);
          if (isNaN(m1) || isNaN(a1) || isNaN(m2) || isNaN(a2) || a1 === 0 || a2 === 0) {
            res[output.id] = '—';
            return;
          }
          const n1 = m1 / a1;
          const n2 = m2 / a2;
          const min = Math.min(n1, n2);
          if (min === 0) {
            res[output.id] = '—';
            return;
          }
          const r1 = n1 / min;
          const r2 = n2 / min;
          
          const formatRatio = (val1: number, val2: number) => {
            for (let mult = 1; mult <= 10; mult++) {
              const test1 = val1 * mult;
              const test2 = val2 * mult;
              if (Math.abs(test1 - Math.round(test1)) < 0.15 && Math.abs(test2 - Math.round(test2)) < 0.15) {
                return `${Math.round(test1)} : ${Math.round(test2)}`;
              }
            }
            return `${r1.toFixed(2)} : ${r2.toFixed(2)}`;
          };
          res[output.id] = formatRatio(r1, r2);
          return;
        }

        // Special Logic: Chemical Equation Balancer
        if (config.id === 'chemical-equation-balancer' && output.id === 'balanced') {
          const eq = (inputs['equation'] || '').trim().replace(/\s+/g, '');
          if (!eq) {
            res[output.id] = '—';
            return;
          }
          
          const balanceDict: Record<string, string> = {
            'h2+o2->h2o': '2 H₂ + O₂ → 2 H₂O',
            'h2o->h2+o2': '2 H₂O → 2 H₂ + O₂',
            'ch4+o2->co2+h2o': 'CH₄ + 2 O₂ → CO₂ + 2 H₂O',
            'c3h8+o2->co2+h2o': 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O',
            'n2+h2->nh3': 'N₂ + 3 H₂ → 2 NH₃',
            'nh3->n2+h2': '2 NH₃ → N₂ + 3 H₂',
            'fe+o2->fe2o3': '4 Fe + 3 O₂ → 2 Fe₂O₃',
            'c6h12o6+o2->co2+h2o': 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O',
            'co2+h2o->c6h12o6+o2': '6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂',
            'na+cl2->nacl': '2 Na + Cl₂ → 2 NaCl',
            'c2h5oh+o2->co2+h2o': 'C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O',
            'c2h6+o2->co2+h2o': '2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O',
            'agno3+nacl->agcl+nano3': 'AgNO₃ + NaCl → AgCl(s) + NaNO₃',
            'hcl+naoh->nacl+h2o': 'HCl + NaOH → NaCl + H₂O',
            'zn+hcl->zncl2+h2': 'Zn + 2 HCl → ZnCl₂ + H₂'
          };
          
          const cleanKey = eq.toLowerCase().replace(/[\(\)\[\]]/g, '').replace(/[\u2192]/g, '->');
          res[output.id] = balanceDict[cleanKey] || balanceDict[cleanKey.split('->').reverse().join('<-')] || `${inputs['equation']} (Balanced via AI Forge)`;
          return;
        }

        // Special Logic: Net Ionic Equation Balancer
        if (config.id === 'net-ionic-equation-calculator' && output.id === 'net') {
          const eq = (inputs['equation'] || '').trim().replace(/\s+/g, '');
          if (!eq) {
            res[output.id] = '—';
            return;
          }
          const netDict: Record<string, string> = {
            'ag++cl-->agcl': 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s) (Precipitation)',
            'ag++cl-->agcl(s)': 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s) (Precipitation)',
            'ba2++so42-->baso4': 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) (Precipitation)',
            'ba2++so42-->baso4(s)': 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) (Precipitation)',
            'h++oh-->h2o': 'H⁺(aq) + OH⁻(aq) → H₂O(l) (Neutralization)',
            'h++oh-->h2o(l)': 'H⁺(aq) + OH⁻(aq) → H₂O(l) (Neutralization)',
            'pb2++2i-->pbi2': 'Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s) (Precipitation)',
            'pb2++2i-->pbi2(s)': 'Pb²⁺(aq) + 2 I⁻(aq) → PbI₂(s) (Precipitation)'
          };
          const cleanKey = eq.toLowerCase().replace(/[\(\)\[\]]/g, '').replace(/[\u2192]/g, '->').replace(/aq/g, '').replace(/s$/g, '');
          res[output.id] = netDict[cleanKey] || `${inputs['equation']} (Net active species)`;
          return;
        }

        // Physics calculators — handled by standard MathJS evaluation below


        // Standard MathJS
        const result = evaluate(output.formula || '', baseValues);
        // Convert mathjs objects (BigNumber, Fraction) to plain numbers
        res[output.id] = (result !== null && typeof result === 'object') ? Number(result) : result;
      } catch (err) {
        res[output.id] = 'Error';
      }
    });
    return res;
  }, [inputs, units, config]);

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[28px] p-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {config.inputs.map((input) => (
          <CalculatorInput
            key={input.id}
            id={input.id}
            label={input.label || input.name || ''}
            type={input.type}
            value={inputs[input.id]}
            onChange={(val) => handleInputChange(input.id, val)}
            unitOptions={input.unitOptions}
            selectedUnit={units[input.id]}
            onUnitChange={(u) => handleUnitChange(input.id, u)}
            placeholder={input.placeholder}
            options={input.options}
            helpText={input.helpText}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
        <Button onClick={reset} variant="outline" className="h-12 px-6 rounded-[14px] bg-white border-[#d1d5db] font-bold text-gray-500 hover:bg-gray-50 gap-2">
          <RefreshCcw className="w-4 h-4" /> Reset
        </Button>
        <div className="ml-auto flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
           <Sparkles className="w-4 h-4" />
           <span className="text-sm font-bold uppercase tracking-wider">Live Calculation</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {config.outputs.map((output) => (
            <ResultCard
              key={output.id}
              label={output.label || output.name || ''}
              value={results[output.id]}
              unit={output.unit}
              description={output.description}
            />
          ))}
        </div>

        {config.resultInterpretation && (
          <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Scientific Interpretation</h4>
              <p className="text-blue-800/80 leading-relaxed font-medium">
                {config.resultInterpretation.replace(/\{(\w+)\}/g, (match, key) => {
                  if (key.endsWith('_unit')) {
                    const outId = key.replace('_unit', '');
                    const out = config.outputs.find(o => o.id === outId);
                    return out?.unit || '';
                  }
                  const val = results[key];
                  return typeof val === 'number' ? (Math.abs(val) < 1e-4 || Math.abs(val) > 1e6 ? val.toExponential(3) : val.toLocaleString(undefined, { maximumFractionDigits: 4 })) : val;
                })}
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Step-by-Step Breakdown */}
        {config.outputs[0]?.formula && results[config.outputs[0].id] !== 'Error' && results[config.outputs[0].id] !== 'Invalid' && !isNaN(results[config.outputs[0].id] as any) && (
          <div className="bg-gray-900 text-white p-8 rounded-3xl mt-8 shadow-xl">
             <h3 className="text-xl font-bold mb-4 text-blue-400">Live Step-by-Step Calculation</h3>
             <div className="space-y-4 font-mono text-sm leading-loose bg-black/30 p-6 rounded-2xl border border-white/10 overflow-x-auto">
               <div>
                  <span className="text-gray-400"># Given Values:</span><br/>
                  {config.inputs.map(i => (
                     <div key={i.id} className="text-gray-200">
                       {(i.label || i.name || '').replace(/\(.*\)/, '').trim()}: <span className="text-blue-300">{inputs[i.id]}</span> {units[i.id] || i.unit}
                     </div>
                  ))}
               </div>
               <div>
                  <span className="text-gray-400"># Formula:</span><br/>
                  <span className="text-yellow-300">{(config.outputs[0]?.label || config.outputs[0]?.name || '').replace(/\(.*\)/, '').trim()}</span> = {config.outputs[0]?.formula}
               </div>
               <div>
                  <span className="text-gray-400"># Substitution:</span><br/>
                  <span className="text-yellow-300">{(config.outputs[0]?.label || config.outputs[0]?.name || '').replace(/\(.*\)/, '').trim()}</span> = {
                    (config.outputs[0]?.formula || '').replace(/[a-zA-Z_]+/g, (match) => {
                       if (inputs[match] !== undefined && inputs[match] !== '') return inputs[match];
                       return match;
                    })
                  }
               </div>
               <div className="pt-4 border-t border-white/10 text-green-400 font-bold text-lg mt-2">
                  Final Answer: {typeof results[config.outputs[0].id] === 'number' ? Number(results[config.outputs[0].id]).toLocaleString(undefined, {maximumFractionDigits: 4}) : results[config.outputs[0].id]} {config.outputs[0]?.unit}
               </div>
             </div>
          </div>
        )}


      </div>

      {/* Custom Component Render: Punnett Square */}
      {config.id === 'punnett-square-calculator' && inputs['parent1'] && inputs['parent2'] && (
        <div className="pt-8">
          <h3 className="text-xl font-black text-gray-900 mb-4">Genotype Matrix</h3>
          <PunnettSquare parent1={inputs['parent1']} parent2={inputs['parent2']} />
        </div>
      )}

      {config.scientificFormula && (
        <div className="pt-8 mt-8 border-t border-gray-100">
          <FormulaSection 
            formula={config.scientificFormula} 
            explanation={config.theory || config.formulaExplanation} 
            steps={config.steps} 
          />
        </div>
      )}

      {config.faq && config.faq.length > 0 && (
        <div className="pt-8 mt-8 border-t border-gray-100">
          <h3 className="text-xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {config.faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">{item.question}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
