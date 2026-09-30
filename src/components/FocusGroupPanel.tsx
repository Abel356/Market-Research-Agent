'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Users, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PersonaCard } from '@/components/PersonaCard';
import { Persona, PersonaReaction } from '@/types';

interface FocusGroupPanelProps {
  personas: Persona[];
  reactions: PersonaReaction[];
  productIdea: string;
}

export function FocusGroupPanel({ personas, reactions, productIdea }: FocusGroupPanelProps) {
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [conversationHistory, setConversationHistory] = useState<Record<string, any[]>>({});

  const getPersonaReaction = (personaId: string) => {
    return reactions.find(r => r.personaId === personaId);
  };

  const startConversation = (personaId: string) => {
    const persona = personas.find(p => p.id === personaId);
    if (!persona) return;

    // In production, this would integrate with Vapi
    alert(`Starting voice conversation with ${persona.name}...\n\nThis would use Vapi for real-time voice chat with contextual AI responses based on their persona profile and feedback.`);
    
    setActiveConversation(personaId);
    
    // Mock conversation for demo
    const mockConversation = [
      {
        speaker: 'user',
        message: `Hi ${persona.name.split(' ')[0]}, I'd like to discuss your feedback on my product idea.`,
        timestamp: new Date()
      },
      {
        speaker: 'persona',
        message: getPersonaReaction(personaId)?.feedback || "I'd be happy to discuss my thoughts with you.",
        timestamp: new Date()
      }
    ];
    
    setConversationHistory(prev => ({
      ...prev,
      [personaId]: mockConversation
    }));
  };

  const averageScore = personas.reduce((sum, persona) => {
    const reaction = getPersonaReaction(persona.id);
    return sum + (reaction?.score || 0);
  }, 0) / personas.length;

  const sentimentCounts = personas.reduce((counts, persona) => {
    const reaction = getPersonaReaction(persona.id);
    const sentiment = reaction?.sentiment || 'neutral';
    counts[sentiment] = (counts[sentiment] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      {/* Focus Group Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-6 h-6" />
              Focus Group Analysis
            </h2>
            <p className="text-gray-300 mt-1">
              Top 5 most relevant personas for: "{productIdea}"
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-400">{averageScore.toFixed(1)}/10</div>
            <div className="text-sm text-gray-300">Average Score</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{sentimentCounts.positive || 0}</div>
            <div className="text-sm text-gray-300">Positive</div>
          </div>
          <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="text-2xl font-bold text-yellow-400">{sentimentCounts.neutral || 0}</div>
            <div className="text-sm text-gray-300">Neutral</div>
          </div>
          <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="text-2xl font-bold text-red-400">{sentimentCounts.negative || 0}</div>
            <div className="text-sm text-gray-300">Negative</div>
          </div>
        </div>

        {/* Call All Button */}
        <div className="text-center">
          <Button
            onClick={() => {
              alert('Starting group conference call with all 5 personas...\n\nThis would create a multi-participant voice session using Vapi where you can discuss your idea with the entire focus group simultaneously.');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Phone className="w-5 h-5 mr-2" />
            Start Group Call
          </Button>
        </div>
      </motion.div>

      {/* Focus Group Members */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona, index) => {
          const reaction = getPersonaReaction(persona.id);
          if (!reaction) return null;

          return (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PersonaCard persona={persona} reaction={reaction} />
            </motion.div>
          );
        })}
      </div>

      {/* Conversation Interface */}
      {activeConversation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Conversation with {personas.find(p => p.id === activeConversation)?.name}
            </h3>
            <Button
              variant="outline"
              onClick={() => setActiveConversation(null)}
              className="text-white border-white/20 hover:bg-white/10"
            >
              Close
            </Button>
          </div>

          {/* Conversation History */}
          <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
            {conversationHistory[activeConversation]?.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.speaker === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <div className="flex items-center gap-1 mt-1 opacity-70">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Voice Call Simulation */}
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-green-400 mb-2">🎙️ Voice Call Active</div>
            <p className="text-sm text-gray-300 mb-4">
              In production, this would be a live voice conversation powered by Vapi
            </p>
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white/20 hover:bg-white/10"
              >
                Mute
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setActiveConversation(null)}
              >
                End Call
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Focus Group Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Focus Group Insights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Common Themes</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Strong interest from tech-forward professionals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Concerns about implementation complexity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Need for clear ROI demonstration
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Next Steps</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Schedule follow-up calls with positive personas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Address top concerns in product development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                Create targeted messaging for each segment
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}