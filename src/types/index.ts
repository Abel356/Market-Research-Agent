export interface Persona {
  id: string;
  name: string;
  age: number;
  location: {
    city: string;
    country: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
  demographics: {
    gender: 'male' | 'female' | 'non-binary';
    industry: string;
    jobTitle: string;
    income: string;
    education: string;
  };
  psychographics: {
    riskTolerance: 'low' | 'medium' | 'high';
    techAdoption: 'early' | 'mainstream' | 'late';
    personalityTraits: {
      openness: number; // 1-10
      conscientiousness: number;
      extraversion: number;
      agreeableness: number;
      neuroticism: number;
    };
  };
  interests: string[];
  avatar: string;
}

export interface PersonaReaction {
  personaId: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number; // 1-10
  feedback: string;
  reasoning: string;
  concerns: string[];
  suggestions: string[];
  likelihood: number; // 0-100% chance they'd use/buy
}

export interface MarketAnalysis {
  id: string;
  productIdea: string;
  timestamp: Date;
  personas: Persona[];
  reactions: PersonaReaction[];
  insights: {
    overallSentiment: 'positive' | 'neutral' | 'negative';
    averageScore: number;
    adoptionRate: number;
    topConcerns: string[];
    marketSegments: {
      segment: string;
      sentiment: 'positive' | 'neutral' | 'negative';
      size: number;
    }[];
    recommendations: string[];
  };
  focusGroup?: {
    selectedPersonas: string[];
    conversations: VoiceConversation[];
  };
}

export interface VoiceConversation {
  personaId: string;
  transcript: string;
  duration: number;
  insights: string[];
  timestamp: Date;
}

export interface SimulationSession {
  id: string;
  userId?: string;
  productIdea: string;
  analysis: MarketAnalysis;
  refinements: {
    iteration: number;
    refinedIdea: string;
    analysis: MarketAnalysis;
    timestamp: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}