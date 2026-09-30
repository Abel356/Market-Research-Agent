---
inclusion: fileMatch
fileMatchPattern: '**/personas.ts|**/ai-simulation.ts|**/PersonaCard.tsx'
---

# AI Persona Development Guidelines

## Persona Generation Standards

### Demographic Diversity
- Ensure global representation across 6+ continents
- Include diverse age ranges (25-65) with realistic distributions
- Balance gender representation and include non-binary options
- Represent various income levels and education backgrounds
- Cover 10+ major industries with authentic job titles

### Psychographic Modeling
- Use Big Five personality traits (0-10 scale)
- Include realistic risk tolerance patterns by demographics
- Model tech adoption curves (early/mainstream/late adopters)
- Ensure personality traits influence decision-making patterns

### Behavioral Consistency
- Personas must react consistently based on their profiles
- Risk-averse CFOs should respond differently than innovative developers
- Age and industry should influence technology acceptance
- Cultural background should affect communication style

## AI Response Quality

### Feedback Generation
- Responses must feel authentic and human-like
- Include industry-specific jargon and concerns
- Vary response length and complexity by persona education level
- Ensure concerns align with persona's professional background

### Sentiment Analysis
- Use nuanced sentiment scoring (not just positive/negative/neutral)
- Consider persona's risk tolerance in sentiment calculation
- Factor in industry relevance when determining interest level
- Implement realistic adoption likelihood percentages

### Voice Conversation Simulation
- Match voice characteristics to persona demographics
- Use age-appropriate language and communication styles
- Include personality quirks and speech patterns
- Reference persona's background during conversations

## Data Validation

### Input Sanitization
- Validate all product ideas for appropriate content
- Sanitize user inputs to prevent injection attacks
- Implement content filtering for offensive language
- Ensure GDPR compliance for persona data handling

### Response Validation
- Use Zod schemas for all AI-generated content
- Validate sentiment scores are within expected ranges
- Ensure feedback text meets quality standards
- Verify persona reactions align with their profiles

## Performance Optimization

### Batch Processing
- Process persona reactions in parallel batches of 25
- Implement proper error handling for failed generations
- Use caching for repeated persona/idea combinations
- Optimize for sub-30-second total analysis time

### Fallback Strategies
- Provide realistic mock responses when AI services fail
- Implement graceful degradation for partial failures
- Cache successful responses for offline capability
- Ensure consistent user experience during outages