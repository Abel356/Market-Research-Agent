'use client';

import { Persona, PersonaReaction } from '@/types';

interface MarketGlobeProps {
  personas: Persona[];
  reactions: PersonaReaction[];
}

export function MarketGlobe({ personas, reactions }: MarketGlobeProps) {
  // Simplified 2D visualization for now
  const sentimentCounts = reactions.reduce((counts, reaction) => {
    counts[reaction.sentiment] = (counts[reaction.sentiment] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-black rounded-lg overflow-hidden p-8">
      <div className="text-center text-white mb-8">
        <div className="text-6xl mb-4">🌍</div>
        <h2 className="text-2xl font-bold mb-2">Global Market Response</h2>
        <p className="text-gray-300">Analyzing {personas.length} personas worldwide</p>
      </div>

      {/* Sentiment Distribution */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="text-4xl font-bold text-green-400 mb-2">
            {sentimentCounts.positive || 0}
          </div>
          <div className="text-green-300">Positive</div>
          <div className="text-sm text-gray-400 mt-1">
            {Math.round(((sentimentCounts.positive || 0) / reactions.length) * 100)}%
          </div>
        </div>
        
        <div className="text-center p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
          <div className="text-4xl font-bold text-yellow-400 mb-2">
            {sentimentCounts.neutral || 0}
          </div>
          <div className="text-yellow-300">Neutral</div>
          <div className="text-sm text-gray-400 mt-1">
            {Math.round(((sentimentCounts.neutral || 0) / reactions.length) * 100)}%
          </div>
        </div>
        
        <div className="text-center p-6 bg-red-500/20 border border-red-500/30 rounded-lg">
          <div className="text-4xl font-bold text-red-400 mb-2">
            {sentimentCounts.negative || 0}
          </div>
          <div className="text-red-300">Negative</div>
          <div className="text-sm text-gray-400 mt-1">
            {Math.round(((sentimentCounts.negative || 0) / reactions.length) * 100)}%
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Geographic Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personas.slice(0, 8).map((persona, index) => (
            <div key={persona.id} className="text-center p-3 bg-white/10 rounded-lg">
              <div className="text-2xl mb-1">
                {reactions.find(r => r.personaId === persona.id)?.sentiment === 'positive' ? '🟢' :
                 reactions.find(r => r.personaId === persona.id)?.sentiment === 'neutral' ? '🟡' : '🔴'}
              </div>
              <div className="text-sm text-white font-medium">{persona.location.city}</div>
              <div className="text-xs text-gray-400">{persona.location.country}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-400">
          Showing 8 of {personas.length} global locations
        </div>
      </div>
    </div>
  );
}