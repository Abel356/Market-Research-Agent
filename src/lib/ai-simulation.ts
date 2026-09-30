import { Persona, PersonaReaction, MarketAnalysis } from '@/types';

// Mock AI simulation - in production this would use Cohere API
export class AISimulationEngine {
  private personas: Persona[];

  constructor(personas: Persona[]) {
    this.personas = personas;
  }

  async simulateMarketReaction(productIdea: string): Promise<MarketAnalysis> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const reactions = await this.generatePersonaReactions(productIdea);
    const insights = this.analyzeReactions(reactions);

    return {
      id: `analysis-${Date.now()}`,
      productIdea,
      timestamp: new Date(),
      personas: this.personas,
      reactions,
      insights
    };
  }

  private async generatePersonaReactions(productIdea: string): Promise<PersonaReaction[]> {
    const reactions: PersonaReaction[] = [];

    for (const persona of this.personas) {
      const reaction = await this.generatePersonaReaction(persona, productIdea);
      reactions.push(reaction);
    }

    return reactions;
  }

  private async generatePersonaReaction(persona: Persona, productIdea: string): Promise<PersonaReaction> {
    // Simulate individual persona analysis
    const relevanceScore = this.calculateRelevance(persona, productIdea);
    const personalityInfluence = this.calculatePersonalityInfluence(persona);
    
    const baseScore = relevanceScore * personalityInfluence;
    const score = Math.max(1, Math.min(10, Math.round(baseScore * 10)));
    
    let sentiment: 'positive' | 'neutral' | 'negative';
    if (score >= 7) sentiment = 'positive';
    else if (score >= 4) sentiment = 'neutral';
    else sentiment = 'negative';

    const feedback = this.generateFeedback(persona, productIdea, sentiment, score);
    const concerns = this.generateConcerns(persona, productIdea, sentiment);
    const suggestions = this.generateSuggestions(persona, productIdea, sentiment);

    return {
      personaId: persona.id,
      sentiment,
      score,
      feedback,
      reasoning: this.generateReasoning(persona, productIdea, sentiment, score),
      concerns,
      suggestions,
      likelihood: Math.round(score * 10)
    };
  }

  private calculateRelevance(persona: Persona, productIdea: string): number {
    const idea = productIdea.toLowerCase();
    let relevance = 0.5; // Base relevance

    // Industry relevance
    if (idea.includes('ai') || idea.includes('tech')) {
      if (persona.demographics.industry === 'Technology') relevance += 0.3;
    }
    if (idea.includes('car') || idea.includes('automotive')) {
      if (persona.demographics.industry === 'Automotive') relevance += 0.3;
    }
    if (idea.includes('health') || idea.includes('medical')) {
      if (persona.demographics.industry === 'Healthcare') relevance += 0.3;
    }

    // Interest relevance
    for (const interest of persona.interests) {
      if (idea.includes(interest.toLowerCase())) {
        relevance += 0.1;
      }
    }

    // Age relevance for tech products
    if (idea.includes('app') || idea.includes('digital')) {
      if (persona.age < 35) relevance += 0.1;
      else if (persona.age > 50) relevance -= 0.1;
    }

    return Math.max(0.1, Math.min(1, relevance));
  }

  private calculatePersonalityInfluence(persona: Persona): number {
    const traits = persona.psychographics.personalityTraits;
    const techAdoption = persona.psychographics.techAdoption;
    const riskTolerance = persona.psychographics.riskTolerance;

    let influence = 0.5;

    // Openness to new experiences
    influence += (traits.openness - 5) * 0.05;

    // Tech adoption pattern
    if (techAdoption === 'early') influence += 0.2;
    else if (techAdoption === 'late') influence -= 0.2;

    // Risk tolerance
    if (riskTolerance === 'high') influence += 0.1;
    else if (riskTolerance === 'low') influence -= 0.1;

    return Math.max(0.1, Math.min(1, influence));
  }

  private generateFeedback(persona: Persona, productIdea: string, sentiment: string, score: number): string {
    const templates = {
      positive: [
        `This sounds like exactly what I've been looking for! As a ${persona.demographics.jobTitle}, I can see immediate value.`,
        `Really innovative approach. I'd definitely be interested in trying this out.`,
        `This could solve a real problem in my industry. Count me in!`,
        `Love the concept! This aligns perfectly with my needs.`
      ],
      neutral: [
        `Interesting idea, but I'd need to see more details about implementation.`,
        `Could be useful, though I'm not entirely convinced yet.`,
        `It's okay, but I'm not sure if it's better than existing solutions.`,
        `Might work for some people, but I'm on the fence.`
      ],
      negative: [
        `I don't really see the value proposition here.`,
        `This doesn't address any problems I actually have.`,
        `Seems like a solution looking for a problem.`,
        `Not convinced this would be worth the investment.`
      ]
    };

    const sentimentTemplates = templates[sentiment as keyof typeof templates];
    return sentimentTemplates[Math.floor(Math.random() * sentimentTemplates.length)];
  }

  private generateConcerns(persona: Persona, productIdea: string, sentiment: string): string[] {
    const allConcerns = [
      'Privacy and data security',
      'Cost and pricing model',
      'Learning curve and usability',
      'Integration with existing tools',
      'Reliability and uptime',
      'Customer support quality',
      'Scalability for my needs',
      'Return on investment'
    ];

    const numConcerns = sentiment === 'negative' ? 3 : sentiment === 'neutral' ? 2 : 1;
    return allConcerns.slice(0, numConcerns);
  }

  private generateSuggestions(persona: Persona, productIdea: string, sentiment: string): string[] {
    const suggestions = [
      'Add more customization options',
      'Improve mobile experience',
      'Offer a free trial period',
      'Provide better documentation',
      'Add integration with popular tools',
      'Consider enterprise features',
      'Implement better security measures',
      'Offer multiple pricing tiers'
    ];

    const numSuggestions = sentiment === 'positive' ? 1 : 2;
    return suggestions.slice(0, numSuggestions);
  }

  private generateReasoning(persona: Persona, productIdea: string, sentiment: string, score: number): string {
    return `As a ${persona.age}-year-old ${persona.demographics.jobTitle} in ${persona.location.city}, ` +
           `I evaluate this based on my ${persona.psychographics.riskTolerance} risk tolerance and ` +
           `${persona.psychographics.techAdoption} tech adoption style. My score of ${score}/10 reflects ` +
           `${sentiment === 'positive' ? 'strong interest' : sentiment === 'neutral' ? 'moderate interest' : 'limited interest'} ` +
           `in this solution.`;
  }

  private analyzeReactions(reactions: PersonaReaction[]): MarketAnalysis['insights'] {
    const totalReactions = reactions.length;
    const positiveCount = reactions.filter(r => r.sentiment === 'positive').length;
    const neutralCount = reactions.filter(r => r.sentiment === 'neutral').length;
    const negativeCount = reactions.filter(r => r.sentiment === 'negative').length;

    const averageScore = reactions.reduce((sum, r) => sum + r.score, 0) / totalReactions;
    const adoptionRate = (positiveCount / totalReactions) * 100;

    let overallSentiment: 'positive' | 'neutral' | 'negative';
    if (positiveCount > negativeCount && positiveCount > neutralCount) {
      overallSentiment = 'positive';
    } else if (negativeCount > positiveCount && negativeCount > neutralCount) {
      overallSentiment = 'negative';
    } else {
      overallSentiment = 'neutral';
    }

    // Extract top concerns
    const concernCounts: Record<string, number> = {};
    reactions.forEach(r => {
      r.concerns.forEach(concern => {
        concernCounts[concern] = (concernCounts[concern] || 0) + 1;
      });
    });

    const topConcerns = Object.entries(concernCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([concern]) => concern);

    // Generate market segments (simplified)
    const marketSegments = [
      { segment: 'Early Adopters', sentiment: 'positive' as const, size: positiveCount },
      { segment: 'Mainstream Market', sentiment: 'neutral' as const, size: neutralCount },
      { segment: 'Skeptics', sentiment: 'negative' as const, size: negativeCount }
    ];

    const recommendations = this.generateRecommendations(overallSentiment, topConcerns, adoptionRate);

    return {
      overallSentiment,
      averageScore: Math.round(averageScore * 10) / 10,
      adoptionRate: Math.round(adoptionRate),
      topConcerns,
      marketSegments,
      recommendations
    };
  }

  private generateRecommendations(sentiment: string, concerns: string[], adoptionRate: number): string[] {
    const recommendations = [];

    if (adoptionRate < 30) {
      recommendations.push('Consider pivoting or refining the core value proposition');
    } else if (adoptionRate < 60) {
      recommendations.push('Focus on addressing top concerns to improve adoption');
    } else {
      recommendations.push('Strong market validation - consider moving to MVP development');
    }

    if (concerns.includes('Privacy and data security')) {
      recommendations.push('Implement robust security measures and transparent privacy policies');
    }

    if (concerns.includes('Cost and pricing model')) {
      recommendations.push('Develop flexible pricing tiers and consider freemium model');
    }

    if (sentiment === 'positive') {
      recommendations.push('Leverage early adopters for testimonials and case studies');
    }

    return recommendations;
  }

  async selectFocusGroup(productIdea: string, count: number = 5): Promise<Persona[]> {
    // Simulate Cohere reranking API
    await new Promise(resolve => setTimeout(resolve, 500));

    const scoredPersonas = this.personas.map(persona => ({
      persona,
      relevanceScore: this.calculateRelevance(persona, productIdea)
    }));

    return scoredPersonas
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, count)
      .map(item => item.persona);
  }
}