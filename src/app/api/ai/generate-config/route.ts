import { NextResponse } from 'next/server';
import { generateCalculatorConfig } from '@/lib/openai';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const config = await generateCalculatorConfig(prompt);
    
    // Add a slug based on name if not present
    if (config.name && !config.id) {
      config.id = config.name.toLowerCase().replace(/\s+/g, '-');
    }
    
    return NextResponse.json(config);
  } catch (error: any) {
    console.error('AI Generation Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
