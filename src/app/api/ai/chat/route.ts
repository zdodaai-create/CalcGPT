import { NextResponse } from 'next/server';
import { getChatResponse } from '@/lib/openai';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const response = await getChatResponse(messages);
    return NextResponse.json(response);
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
