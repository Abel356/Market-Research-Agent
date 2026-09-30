'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { MarketAnalysis } from '@/types';

interface AnalysisPanelProps {
  analysis: MarketAnalysis;
}

export function AnalysisPanel({ analysis }: AnalysisPanelProps) {
  const { insights } = analysis;

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400';
      case 'neutral': return 'text-yellow-400';
      case 'negative': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <TrendingUp className="w-6 h-6" />;
      case 'negative': return <TrendingDown className="w-6 h-6" />;
      default: return <Users className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-xl p-6 text-center"
        >
          <div className={`flex justify-center mb-3 ${getSentimentColor(insights.overallSentiment)}`}>
            {getSentimentIcon(insights.overallSentiment)}
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">Overall Sentiment</h3>
          <p className={`text-2xl font-bold capitalize ${getSentimentColor(insights.overallSentiment)}`}>
            {insights.overallSentiment}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-6 text-center"
        >
          <div className="flex justify-center mb-3 text-blue-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">Average Score</h3>
          <p className="text-2xl font-bold text-blue-400">
            {insights.averageScore}/10
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-xl p-6 text-center"
        >
          <div className="flex justify-center mb-3 text-green-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">Adoption Rate</h3>
          <p className="text-2xl font-bold text-green-400">
            {insights.adoptionRate}%
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-xl p-6 text-center"
        >
          <div className="flex justify-center mb-3 text-purple-400">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">Total Personas</h3>
          <p className="text-2xl font-bold text-purple-400">
            {analysis.personas.length}
          </p>
        </motion.div>
      </div>

      {/* Market Segments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Market Segments
        </h3>
        <div className="space-y-4">
          {insights.marketSegments.map((segment, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${
                  segment.sentiment === 'positive' ? 'bg-green-400' :
                  segment.sentiment === 'neutral' ? 'bg-yellow-400' : 'bg-red-400'
                }`} />
                <span className="text-white font-medium">{segment.segment}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-300">{segment.size} personas</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      segment.sentiment === 'positive' ? 'bg-green-400' :
                      segment.sentiment === 'neutral' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${(segment.size / analysis.personas.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Concerns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Top Concerns
        </h3>
        <div className="space-y-3">
          {insights.topConcerns.map((concern, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-lg">{index + 1}.</span>
              <span className="text-gray-300">{concern}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Recommendations
        </h3>
        <div className="space-y-4">
          {insights.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-200">{recommendation}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Detailed Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-effect rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-white mb-6">Detailed Breakdown</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Sentiment Distribution</h4>
            <div className="space-y-2">
              {insights.marketSegments.map((segment, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 capitalize">{segment.sentiment}</span>
                  <span className="text-white font-semibold">
                    {Math.round((segment.size / analysis.personas.length) * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Market Readiness</span>
                <span className={`font-semibold ${
                  insights.adoptionRate >= 60 ? 'text-green-400' :
                  insights.adoptionRate >= 30 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {insights.adoptionRate >= 60 ? 'High' :
                   insights.adoptionRate >= 30 ? 'Medium' : 'Low'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Risk Level</span>
                <span className={`font-semibold ${
                  insights.averageScore >= 7 ? 'text-green-400' :
                  insights.averageScore >= 5 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {insights.averageScore >= 7 ? 'Low' :
                   insights.averageScore >= 5 ? 'Medium' : 'High'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Validation Status</span>
                <span className={`font-semibold ${
                  insights.overallSentiment === 'positive' ? 'text-green-400' :
                  insights.overallSentiment === 'neutral' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {insights.overallSentiment === 'positive' ? 'Validated' :
                   insights.overallSentiment === 'neutral' ? 'Needs Work' : 'Pivot Recommended'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}