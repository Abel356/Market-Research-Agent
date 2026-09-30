// Demo data for testing without API keys
export const DEMO_ANALYSIS = {
  id: 'demo-analysis-1',
  productIdea: 'AI tool for lost cars',
  timestamp: new Date(),
  insights: {
    overallSentiment: 'positive' as const,
    averageScore: 7.2,
    adoptionRate: 68,
    topConcerns: [
      'Privacy and data security',
      'Cost and pricing model',
      'Integration with existing systems',
      'Reliability and accuracy',
      'Learning curve for users'
    ],
    marketSegments: [
      { segment: 'Early Adopters', sentiment: 'positive' as const, size: 68 },
      { segment: 'Mainstream Market', sentiment: 'neutral' as const, size: 89 },
      { segment: 'Skeptics', sentiment: 'negative' as const, size: 43 }
    ],
    recommendations: [
      'Strong market validation - consider moving to MVP development',
      'Address privacy concerns with transparent data policies',
      'Develop flexible pricing tiers for different market segments',
      'Create comprehensive onboarding to reduce learning curve'
    ]
  }
};

export const DEMO_REACTIONS = [
  {
    personaId: 'persona-1',
    sentiment: 'positive' as const,
    score: 8,
    feedback: 'This sounds like exactly what I\'ve been looking for! As a Software Engineer, I can see immediate value in having AI help locate vehicles.',
    reasoning: 'As a 32-year-old Senior Software Engineer in San Francisco, I evaluate this based on my high risk tolerance and early tech adoption style. My score of 8/10 reflects strong interest in this solution.',
    concerns: ['Privacy and data security'],
    suggestions: ['Add more customization options'],
    likelihood: 80
  },
  {
    personaId: 'persona-2',
    sentiment: 'neutral' as const,
    score: 6,
    feedback: 'Interesting concept, but I\'d need to see more details about implementation and cost structure.',
    reasoning: 'As a 45-year-old Chief Financial Officer in New York, I evaluate this based on my low risk tolerance and mainstream tech adoption style. My score of 6/10 reflects moderate interest in this solution.',
    concerns: ['Cost and pricing model', 'Return on investment'],
    suggestions: ['Provide better documentation', 'Offer multiple pricing tiers'],
    likelihood: 60
  }
];

export function isDemoMode(): boolean {
  return !process.env.COHERE_API_KEY || process.env.NODE_ENV === 'development';
}