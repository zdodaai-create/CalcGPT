import { NextResponse } from 'next/server';
import { explainResult } from '@/lib/openai';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { calculatorName, inputs, result } = await req.json();
    const explanation = await explainResult(calculatorName, inputs, result);
    return NextResponse.json({ explanation });
  } catch (error: any) {
    console.error('AI Explanation Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
