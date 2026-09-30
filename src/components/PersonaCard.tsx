'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Phone, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Persona, PersonaReaction } from '@/types';

interface PersonaCardProps {
  persona: Persona;
  reaction: PersonaReaction;
}

export function PersonaCard({ persona, reaction }: PersonaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'neutral': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'negative': return 'text-red-400 border-red-400/30 bg-red-400/10';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '😊';
      case 'neutral': return '😐';
      case 'negative': return '😞';
      default: return '🤔';
    }
  };

  return (
    <motion.div
      layout
      className={`persona-card ${getSentimentColor(reaction.sentiment)} border-2`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
          {persona.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">{persona.name}</h3>
          <p className="text-sm text-gray-300">{persona.demographics.jobTitle}</p>
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
            <MapPin className="w-3 h-3" />
            {persona.location.city}, {persona.location.country}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl mb-1">{getSentimentIcon(reaction.sentiment)}</div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-white">{reaction.score}/10</span>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Briefcase className="w-4 h-4" />
          <span>{persona.demographics.industry}</span>
          <span className="text-gray-500">•</span>
          <span>Age {persona.age}</span>
        </div>
        <div className="text-sm text-gray-300">
          <span className="font-medium">Tech Adoption:</span> {persona.psychographics.techAdoption}
          <span className="text-gray-500 mx-2">•</span>
          <span className="font-medium">Risk:</span> {persona.psychographics.riskTolerance}
        </div>
      </div>

      {/* Feedback Preview */}
      <div className="mb-3">
        <p className="text-sm text-gray-200 line-clamp-2">
          "{reaction.feedback}"
        </p>
      </div>

      {/* Likelihood */}
      <div className="mb-3">
        <div className="flex justify-between items-center text-sm mb-1">
          <span className="text-gray-300">Likelihood to adopt</span>
          <span className="text-white font-semibold">{reaction.likelihood}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              reaction.likelihood >= 70 ? 'bg-green-400' :
              reaction.likelihood >= 40 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${reaction.likelihood}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 text-white border-white/20 hover:bg-white/10"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {isExpanded ? 'Less' : 'Details'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-white border-white/20 hover:bg-white/10"
          onClick={() => {
            // In production, this would initiate a Vapi call
            alert(`Calling ${persona.name}... (Voice feature would be implemented with Vapi)`);
          }}
        >
          <Phone className="w-4 h-4" />
        </Button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-white/10 space-y-3"
        >
          {/* Full Reasoning */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Reasoning</h4>
            <p className="text-sm text-gray-300">{reaction.reasoning}</p>
          </div>

          {/* Concerns */}
          {reaction.concerns.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Concerns</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {reaction.concerns.map((concern, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    {concern}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggestions */}
          {reaction.suggestions.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Suggestions</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {reaction.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interests */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Interests</h4>
            <div className="flex flex-wrap gap-1">
              {persona.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}