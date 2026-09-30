import { NextRequest, NextResponse } from 'next/server';
import { generatePersonas } from '@/lib/personas';
import { AISimulationEngine } from '@/lib/ai-simulation';

export async function POST(request: NextRequest) {
  try {
    const { productIdea, count = 5 } = await request.json();

    if (!productIdea || typeof productIdea !== 'string') {
      return NextResponse.json(
        { error: 'Product idea is required' },
        { status: 400 }
      );
    }

    // Generate personas and select focus group
    const personas = generatePersonas(200);
    const simulationEngine = new AISimulationEngine(personas);
    const focusGroup = await simulationEngine.selectFocusGroup(productIdea, count);

    return NextResponse.json({ focusGroup });
  } catch (error) {
    console.error('Focus group selection error:', error);
    return NextResponse.json(
      { error: 'Failed to select focus group' },
      { status: 500 }
    );
  }
}