'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Globe, Users, MessageCircle, BarChart3, RefreshCw, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MarketGlobe } from '@/components/MarketGlobe';
import { PersonaCard } from '@/components/PersonaCard';
import { AnalysisPanel } from '@/components/AnalysisPanel';
import { FocusGroupPanel } from '@/components/FocusGroupPanel';
import { generatePersonas } from '@/lib/personas';
import { AISimulationEngine } from '@/lib/ai-simulation';
import { MarketAnalysis, Persona } from '@/types';

interface MarketSimulationProps {
  productIdea: string;
  onBack: () => void;
}

type ViewMode = 'globe' | 'personas' | 'analysis' | 'focus-group';

export function MarketSimulation({ productIdea, onBack }: MarketSimulationProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('globe');
  const [analysis, setAnalysis] = useState<MarketAnalysis | null>(null);
  const [focusGroup, setFocusGroup] = useState<Persona[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefining, setIsRefining] = useState(false);
  const [refinedIdea, setRefinedIdea] = useState('');
  const [personas] = useState(() => generatePersonas(200));
  const [simulationEngine] = useState(() => new AISimulationEngine(personas));

  useEffect(() => {
    runSimulation(productIdea);
  }, [productIdea]);

  const runSimulation = async (idea: string) => {
    setIsLoading(true);
    try {
      const result = await simulationEngine.simulateMarketReaction(idea);
      setAnalysis(result);
      
      // Auto-select focus group
      const selectedPersonas = await simulationEngine.selectFocusGroup(idea, 5);
      setFocusGroup(selectedPersonas);
    } catch (error) {
      console.error('Simulation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefineIdea = async () => {
    if (!refinedIdea.trim() || !analysis) return;
    
    setIsRefining(true);
    try {
      await runSimulation(refinedIdea);
      setRefinedIdea('');
    } finally {
      setIsRefining(false);
    }
  };

  const getPositivePersonas = () => {
    if (!analysis) return [];
    return analysis.personas.filter(persona => {
      const reaction = analysis.reactions.find(r => r.personaId === persona.id);
      return reaction?.sentiment === 'positive';
    });
  };

  const getNeutralPersonas = () => {
    if (!analysis) return [];
    return analysis.personas.filter(persona => {
      const reaction = analysis.reactions.find(r => r.personaId === persona.id);
      return reaction?.sentiment === 'neutral';
    });
  };

  const getNegativePersonas = () => {
    if (!analysis) return [];
    return analysis.personas.filter(persona => {
      const reaction = analysis.reactions.find(r => r.personaId === persona.id);
      return reaction?.sentiment === 'negative';
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Simulating Market Response</h2>
          <p className="text-gray-300">Analyzing reactions from 200+ AI personas...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-bold text-white">Market Simulation</h1>
                <p className="text-sm text-gray-300 truncate max-w-md">{analysis?.productIdea}</p>
              </div>
            </div>

            {/* View Mode Tabs */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'globe' ? 'default' : 'ghost'}
                onClick={() => setViewMode('globe')}
                className="text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                Globe
              </Button>
              <Button
                variant={viewMode === 'personas' ? 'default' : 'ghost'}
                onClick={() => setViewMode('personas')}
                className="text-white"
              >
                <Users className="w-4 h-4 mr-2" />
                Personas
              </Button>
              <Button
                variant={viewMode === 'analysis' ? 'default' : 'ghost'}
                onClick={() => setViewMode('analysis')}
                className="text-white"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analysis
              </Button>
              <Button
                variant={viewMode === 'focus-group' ? 'default' : 'ghost'}
                onClick={() => setViewMode('focus-group')}
                className="text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Focus Group
              </Button>
            </div>
          </div>

          {/* Refinement Bar */}
          <div className="mt-4 flex gap-4">
            <Input
              placeholder="Refine your idea based on feedback..."
              value={refinedIdea}
              onChange={(e) => setRefinedIdea(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              onKeyPress={(e) => e.key === 'Enter' && handleRefineIdea()}
            />
            <Button
              onClick={handleRefineIdea}
              disabled={!refinedIdea.trim() || isRefining}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isRefining ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Refine
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {viewMode === 'globe' && analysis && (
            <motion.div
              key="globe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-[600px]"
            >
              <MarketGlobe
                personas={analysis.personas}
                reactions={analysis.reactions}
              />
            </motion.div>
          )}

          {viewMode === 'personas' && analysis && (
            <motion.div
              key="personas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="space-y-8">
                {/* Positive Reactions */}
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">
                    Positive Reactions ({getPositivePersonas().length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getPositivePersonas().slice(0, 6).map(persona => (
                      <PersonaCard
                        key={persona.id}
                        persona={persona}
                        reaction={analysis.reactions.find(r => r.personaId === persona.id)!}
                      />
                    ))}
                  </div>
                </div>

                {/* Neutral Reactions */}
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    Neutral Reactions ({getNeutralPersonas().length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getNeutralPersonas().slice(0, 6).map(persona => (
                      <PersonaCard
                        key={persona.id}
                        persona={persona}
                        reaction={analysis.reactions.find(r => r.personaId === persona.id)!}
                      />
                    ))}
                  </div>
                </div>

                {/* Negative Reactions */}
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">
                    Negative Reactions ({getNegativePersonas().length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getNegativePersonas().slice(0, 6).map(persona => (
                      <PersonaCard
                        key={persona.id}
                        persona={persona}
                        reaction={analysis.reactions.find(r => r.personaId === persona.id)!}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {viewMode === 'analysis' && analysis && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AnalysisPanel analysis={analysis} />
            </motion.div>
          )}

          {viewMode === 'focus-group' && (
            <motion.div
              key="focus-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FocusGroupPanel
                personas={focusGroup}
                reactions={analysis?.reactions || []}
                productIdea={analysis?.productIdea || productIdea}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}