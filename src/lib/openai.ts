import OpenAI from 'openai';

function getOpenAI() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'missing-key',
  });
}

export async function getChatResponse(messages: any[]) {
  const response = await getOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are CalcVerse AI, a helpful and highly intelligent calculator assistant. 
        You help users find the right calculators, explain complex formulas in simple terms, 
        and provide insights into their calculations. 
        Be concise, professional, and helpful. 
        You can also suggest related calculators based on the user's query.`
      },
      ...messages,
    ],
  });

  return response.choices[0].message;
}

export async function explainResult(calculatorName: string, inputs: any, result: any) {
  const response = await getOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a math and science expert. Explain the result of a calculation to the user in a way that is easy to understand and provide practical insights.'
      },
      {
        role: 'user',
        content: `Calculator: ${calculatorName}\nInputs: ${JSON.stringify(inputs)}\nResult: ${JSON.stringify(result)}\nPlease explain what this means and if there are any recommendations.`
      }
    ],
  });

  return response.choices[0].message.content;
}

export async function generateCalculatorConfig(prompt: string) {
  const response = await getOpenAI().chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are a calculator configuration generator. Return ONLY a valid JSON object matching the following TypeScript type:
        
        type InputField = {
          id: string;
          label: string;
          type: 'number' | 'text' | 'select';
          unit?: string;
          placeholder?: string;
          defaultValue?: any;
          options?: { label: string; value: any }[];
        };

        type OutputField = {
          id: string;
          label: string;
          formula: string; // mathjs compatible formula
          unit?: string;
        };

        type CalculatorConfig = {
          id: string;
          name: string;
          description: string;
          inputs: InputField[];
          outputs: OutputField[];
          category: string;
        };`
      },
      {
        role: 'user',
        content: `Generate a calculator config for: ${prompt}`
      }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content || '{}');
}
