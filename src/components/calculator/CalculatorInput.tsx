"use client";

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { UnitOption } from '@/lib/calculator-types';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'number' | 'text' | 'select' | 'range' | 'date';
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  options?: { label: string; value: any }[];
  unitOptions?: UnitOption[];
  selectedUnit?: string;
  onUnitChange?: (unit: string) => void;
  helpText?: string;
}

export const CalculatorInput: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  options,
  unitOptions,
  selectedUnit,
  onUnitChange,
  helpText
}) => {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <Label htmlFor={id} className="text-[14px] font-bold tracking-[0.08em] uppercase text-[#4b5563] mb-[10px]">
          {label}
        </Label>
        {helpText && (
          <span className="text-[0.7rem] text-gray-400 font-medium uppercase tracking-wider">
            {helpText}
          </span>
        )}
      </div>
      
      <div className="relative flex">
        {type === 'select' ? (
          <Select value={value} onValueChange={(val) => val && onChange(val)}>
            <SelectTrigger className="w-full h-[60px] bg-white border-[#dbe1ea] border rounded-[16px] text-[18px] font-semibold text-[#111827] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/12 transition-all duration-200">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-gray-100 shadow-xl">
              {options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-base font-medium py-3">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <div className="relative flex-1 group">
            <Input
              id={id}
              type={type === 'range' ? 'range' : type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full h-[60px] bg-white border-[#dbe1ea] border rounded-[16px] text-[18px] font-semibold text-[#111827] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/12 transition-all duration-200 pl-5 pr-12"
            />
            {unitOptions && unitOptions.length > 0 && onUnitChange && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Select value={selectedUnit} onValueChange={(val) => val && onUnitChange(val)}>
                  <SelectTrigger className="h-10 min-w-[70px] bg-white border-0 shadow-sm rounded-xl text-sm font-black text-blue-600 hover:bg-blue-50 transition-colors px-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                    {unitOptions.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value} className="font-bold">
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {!unitOptions && selectedUnit && (
               <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-sm font-black text-gray-300 uppercase">
                  {selectedUnit}
               </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
