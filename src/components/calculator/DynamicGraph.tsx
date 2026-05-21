"use client";

import React, { useMemo } from 'react';
import { evaluate } from 'mathjs';
import { CalculatorConfig } from '@/lib/calculator-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DynamicGraphProps {
  config: CalculatorConfig;
  currentInputs: Record<string, any>;
  currentUnits: Record<string, string>;
}

export const DynamicGraph: React.FC<DynamicGraphProps> = ({ config, currentInputs, currentUnits }) => {
  const data = useMemo(() => {
    // Only generate graph if we have at least one numeric input and one formula output
    const sweepInput = config.inputs.find(i => i.type === 'number');
    const targetOutput = config.outputs.find(o => !!o.formula);

    if (!sweepInput || !targetOutput) return null;

    const baseVal = parseFloat(currentInputs[sweepInput.id]) || sweepInput.defaultValue || 1;
    const sweepRange = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0]; // multipliers
    
    const plotData = [];

    for (const mult of sweepRange) {
      const testVal = baseVal * mult;
      
      const testInputs = { ...currentInputs };
      
      // Apply base conversion logic
      const baseValues: Record<string, any> = {};
      config.inputs.forEach(input => {
        let val = (input.id === sweepInput.id) ? testVal : testInputs[input.id];
        
        if (input.type === 'number' || input.type === 'range' || input.type === 'select') {
          val = parseFloat(val);
          if (isNaN(val)) val = 0;
          
          const currentUnit = currentUnits[input.id];
          const unitOpt = input.unitOptions?.find(u => u.value === currentUnit);
          if (unitOpt) {
            val = (val + (unitOpt.offset || 0)) * unitOpt.factor;
          }
        }
        baseValues[input.id] = val;
      });

      try {
        const result = evaluate(targetOutput.formula, baseValues);
        if (typeof result === 'number' && !isNaN(result) && result !== Infinity) {
          plotData.push({
            [sweepInput.label]: Number(testVal.toFixed(2)),
            [targetOutput.label]: Number(result.toFixed(4)),
            isCurrent: mult === 1.0
          });
        }
      } catch (err) {
        // Skip invalid points
      }
    }

    return {
      data: plotData,
      xKey: sweepInput.label,
      yKey: targetOutput.label,
      xUnit: currentUnits[sweepInput.id] || sweepInput.unit || '',
      yUnit: targetOutput.unit || ''
    };
  }, [config, currentInputs, currentUnits]);

  if (!data || data.data.length < 2) return null;

  return (
    <div className="bg-white p-8 rounded-3xl mt-8 shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold mb-2 text-gray-900">Relationship Analysis</h3>
      <p className="text-gray-500 mb-8 text-sm font-medium">
        This graph visualizes how <span className="text-blue-600 font-bold">{data.yKey}</span> changes as you vary <span className="text-blue-600 font-bold">{data.xKey}</span>.
      </p>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.data} margin={{ top: 5, right: 20, bottom: 25, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey={data.xKey} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              label={{ value: `${data.xKey} ${data.xUnit ? `(${data.xUnit})` : ''}`, position: 'bottom', fill: '#6b7280', fontSize: 12, fontWeight: 600, dy: 10 }}
            />
            <YAxis 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tickFormatter={(val) => val > 1000 ? val.toExponential(1) : val}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', padding: '12px 16px', fontWeight: 'bold' }}
              itemStyle={{ color: '#2563eb', fontWeight: 900 }}
              labelStyle={{ color: '#6b7280', marginBottom: '4px', fontSize: '13px' }}
            />
            <Line 
              type="monotone" 
              dataKey={data.yKey} 
              stroke="#2563eb" 
              strokeWidth={4}
              dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 8, strokeWidth: 0, fill: '#3b82f6' }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
