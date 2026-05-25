import { CalculatorEngine, CalculatorSchema } from "@/components/calculator/CalculatorEngine";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const bmiSchema: CalculatorSchema = {
  id: "bmi",
  name: "Body Mass Index (BMI) Calculator",
  description: "Calculate your BMI and determine your weight category based on your height and weight.",
  category: "health",
  inputs: [
    {
      id: "weight",
      label: "Weight",
      type: "number",
      unit: "kg",
      min: 1,
      max: 300,
      defaultValue: 70,
    },
    {
      id: "height",
      label: "Height",
      type: "slider",
      unit: "cm",
      min: 50,
      max: 250,
      defaultValue: 175,
    }
  ],
  outputs: [
    {
      id: "bmi",
      label: "Your BMI",
      formula: "weight / ((height/100)^2)",
      precision: 1,
      color: "text-blue-400"
    }
  ]
};

export default function BMICalculatorPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Home
      </Link>
      
      <CalculatorEngine schema={bmiSchema} />
      
      {/* Educational content below */}
      <div className="mt-16 prose prose-invert max-w-none">
        <h2>What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. 
          BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, 
          overweight, and obesity.
        </p>
        <h3>BMI Categories:</h3>
        <ul>
          <li>Underweight = {"<18.5"}</li>
          <li>Normal weight = 18.5–24.9</li>
          <li>Overweight = 25–29.9</li>
          <li>Obesity = BMI of 30 or greater</li>
        </ul>
      </div>
    </div>
  );
}
