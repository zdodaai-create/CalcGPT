"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as math from "mathjs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Calculator as CalculatorIcon, Info } from "lucide-react";
import { motion } from "framer-motion";

export type InputField = {
  id: string;
  label: string;
  type: "number" | "slider";
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number;
};

export type OutputField = {
  id: string;
  label: string;
  formula: string;
  unit?: string;
  precision?: number;
  color?: string;
};

export type CalculatorSchema = {
  id: string;
  name: string;
  description: string;
  inputs: InputField[];
  outputs: OutputField[];
};

export function CalculatorEngine({ schema }: { schema: CalculatorSchema }) {
  // Generate Zod schema dynamically based on inputs
  const formSchema = useMemo(() => {
    const shape: Record<string, z.ZodTypeAny> = {};
    schema.inputs.forEach((input) => {
      let fieldSchema = z.number({ message: `${input.label} is required` });
      if (input.min !== undefined) fieldSchema = fieldSchema.min(input.min, `Must be at least ${input.min}`);
      if (input.max !== undefined) fieldSchema = fieldSchema.max(input.max, `Must be at most ${input.max}`);
      shape[input.id] = fieldSchema;
    });
    return z.object(shape);
  }, [schema.inputs]);

  const defaultValues = useMemo(() => {
    const values: Record<string, number> = {};
    schema.inputs.forEach((input) => {
      values[input.id] = input.defaultValue;
    });
    return values;
  }, [schema.inputs]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const values = form.watch();

  // Calculate results directly from values
  const results = useMemo(() => {
    const newResults: Record<string, number | string> = {};
    try {
      schema.outputs.forEach((output) => {
        // Compile the formula and evaluate it with current form values
        const node = math.parse(output.formula);
        const compiled = node.compile();
        let result = compiled.evaluate(values);
        
        if (typeof result === 'number' && output.precision !== undefined) {
            // Round to precision
            const factor = Math.pow(10, output.precision);
            result = Math.round(result * factor) / factor;
        }
        
        newResults[output.id] = result;
      });
      return newResults;
    } catch (error) {
        console.error("Evaluation error:", error);
        return {};
    }
  }, [values, schema.outputs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Input Form */}
      <Card className="lg:col-span-7 glass border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <CalculatorIcon className="w-32 h-32" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            {schema.name}
          </CardTitle>
          <CardDescription className="text-lg">
            {schema.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {schema.inputs.map((input) => (
              <div key={input.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor={input.id} className="text-base font-medium">
                    {input.label}
                  </Label>
                  <span className="text-sm font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                    {(values as any)[input.id] ?? 0} {input.unit}
                  </span>
                </div>
                
                {input.type === "slider" ? (
                  <Slider
                    value={[(values as any)[input.id] ?? input.defaultValue]}
                    min={input.min ?? 0}
                    max={input.max ?? 100}
                    step={input.step ?? 1}
                    onValueChange={(vals: any) => form.setValue(input.id, vals[0] as any)}
                    className="py-4"
                  />
                ) : (
                  <div className="relative">
                    <Input
                      id={input.id}
                      type="number"
                      {...form.register(input.id, { valueAsNumber: true })}
                      className="text-lg bg-black/20 border-white/10 pr-12"
                    />
                    {input.unit && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {input.unit}
                      </span>
                    )}
                  </div>
                )}
                {form.formState.errors[input.id] && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors[input.id]?.message as string}
                  </p>
                )}
              </div>
            ))}
          </form>
        </CardContent>
      </Card>

      {/* Output Results */}
      <div className="lg:col-span-5 space-y-6">
        <Card className="glass-panel border-white/10 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
           <CardHeader>
             <CardTitle className="flex items-center gap-2">
               Results
               <Sparkles className="w-5 h-5 text-blue-400" />
             </CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
             {schema.outputs.map((output, index) => (
               <motion.div 
                 key={output.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
                 className="p-4 rounded-xl bg-white/5 border border-white/5"
               >
                 <div className="text-sm text-muted-foreground mb-1">{output.label}</div>
                 <div className={`text-4xl font-bold ${output.color || "text-foreground"}`}>
                   {results[output.id] !== undefined ? results[output.id] : "..."}
                   <span className="text-xl text-muted-foreground ml-2 font-normal">
                     {output.unit}
                   </span>
                 </div>
               </motion.div>
             ))}
           </CardContent>
        </Card>

        {/* AI Explainer Box */}
        <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Info className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-100 mb-2">AI Explainer</h4>
                <p className="text-sm text-blue-200/70 mb-4">
                  Want to understand how this result was calculated or need further analysis?
                </p>
                <Button variant="secondary" size="sm" className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border-0">
                  Explain using AI
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
