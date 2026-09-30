import { NextRequest, NextResponse } from 'next/server';
import { generatePersonas } from '@/lib/personas';
import { AISimulationEngine } from '@/lib/ai-simulation';

export async function POST(request: NextRequest) {
  try {
    const { productIdea } = await request.json();

    if (!productIdea || typeof productIdea !== 'string') {
      return NextResponse.json(
        { error: 'Product idea is required' },
        { status: 400 }
      );
    }

    // Generate personas and run simulation
    const personas = generatePersonas(200);
    const simulationEngine = new AISimulationEngine(personas);
    const analysis = await simulationEngine.simulateMarketReaction(productIdea);

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Simulation error:', error);
    return NextResponse.json(
      { error: 'Failed to run simulation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Tunnel API is running' });
}