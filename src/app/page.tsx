'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Users, MessageCircle, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MarketSimulation } from '@/components/MarketSimulation';

export default function HomePage() {
  const [productIdea, setProductIdea] = useState('');
  const [showSimulation, setShowSimulation] = useState(false);

  const handleStartSimulation = () => {
    if (productIdea.trim()) {
      setShowSimulation(true);
    }
  };

  if (showSimulation) {
    return <MarketSimulation productIdea={productIdea} onBack={() => setShowSimulation(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tunnel
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">
            AI Agents for Simulated Market Research
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Test your product ideas against 200+ intelligent AI personas in real-time. 
            Get market validation in seconds, not months.
          </p>

          {/* Product Idea Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Describe your product idea... (e.g., AI tool for lost cars)"
                value={productIdea}
                onChange={(e) => setProductIdea(e.target.value)}
                className="flex-1 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && handleStartSimulation()}
              />
              <Button
                onClick={handleStartSimulation}
                disabled={!productIdea.trim()}
                className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Zap className="w-5 h-5 mr-2" />
                Simulate Market
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-400" />}
            title="200+ AI Personas"
            description="Each with unique demographics, psychographics, and behavioral patterns across 50+ cities globally."
          />
          
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-green-400" />}
            title="3D Market Visualization"
            description="Watch your idea spread across an interactive globe with real-time sentiment analysis."
          />
          
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8 text-purple-400" />}
            title="Voice Conversations"
            description="Talk directly with AI personas to understand their feedback and objections."
          />
          
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8 text-orange-400" />}
            title="Focus Group Simulation"
            description="AI automatically identifies the 5 most relevant personas for your specific idea."
          />
          
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title="Real-time Analysis"
            description="Get comprehensive market insights in under 30 seconds instead of months."
          />
          
          <FeatureCard
            icon={<Rocket className="w-8 h-8 text-red-400" />}
            title="Iterative Refinement"
            description="Collect feedback from skeptical personas and refine your idea in real-time."
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard number="90%" label="Startup Failure Rate" sublabel="35% cite 'no market need'" />
            <StatCard number="$50K+" label="Traditional Research Cost" sublabel="Takes 3-6 months" />
            <StatCard number="30s" label="Tunnel Analysis Time" sublabel="200+ persona reactions" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-xl p-6 text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function StatCard({ number, label, sublabel }: { number: string; label: string; sublabel: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-400 mb-2">{number}</div>
      <div className="text-xl font-semibold text-white mb-1">{label}</div>
      <div className="text-sm text-gray-400">{sublabel}</div>
    </div>
  );
}