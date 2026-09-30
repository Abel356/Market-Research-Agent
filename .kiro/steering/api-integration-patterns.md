---
inclusion: fileMatch
fileMatchPattern: '**/api/**/*.ts|**/lib/**/*.ts'
---

# API Integration Patterns for Tunnel

## External Service Integration

### Cohere AI Integration
- Use structured prompts with consistent formatting
- Implement exponential backoff for rate limiting (1s, 2s, 4s, 8s)
- Cache responses for identical persona/idea combinations
- Validate responses with Zod schemas before processing
- Implement fallback to mock data when service unavailable

### Vapi Voice Integration
- Initialize WebRTC connections with proper error handling
- Pass complete persona context in system prompts
- Implement voice activity detection for natural conversations
- Handle connection drops gracefully with reconnection logic
- Store conversation transcripts for analysis

### MongoDB Atlas Patterns
- Use connection pooling to optimize database performance
- Implement proper indexing for user sessions and persona queries
- Use transactions for multi-document operations
- Implement soft deletes for user data compliance
- Cache frequently accessed persona data in memory

## Error Handling Strategies

### Network Resilience
- Implement circuit breaker pattern for external APIs
- Use timeout configurations (5s for AI, 30s for voice)
- Provide offline capability with cached data
- Show appropriate error messages for different failure types
- Log errors for monitoring without exposing sensitive data

### Rate Limiting Management
- Implement request queuing for Cohere API limits
- Use priority queuing (focus group > full analysis)
- Provide user feedback when requests are queued
- Implement graceful degradation when limits exceeded
- Cache successful responses to reduce API calls

## Data Validation & Security

### Input Validation
- Sanitize all user inputs before processing
- Validate product ideas for appropriate content length
- Use Zod schemas for all API request/response validation
- Implement CSRF protection for state-changing operations
- Rate limit user requests to prevent abuse

### Response Processing
- Validate AI responses match expected schema
- Sanitize generated content before displaying to users
- Implement content filtering for inappropriate responses
- Ensure persona reactions align with their profiles
- Log validation failures for model improvement

## Performance Optimization

### Caching Strategies
- Cache persona profiles in Redis/memory for quick access
- Implement response caching for identical analysis requests
- Use CDN for static assets and persona avatars
- Cache focus group selections for repeated queries
- Implement cache invalidation for updated personas

### Batch Processing
- Process persona reactions in parallel batches
- Implement proper concurrency limits to avoid overwhelming APIs
- Use Promise.allSettled for handling partial failures
- Provide progress updates for long-running operations
- Optimize database queries with proper aggregation

## Monitoring & Analytics

### Performance Metrics
- Track API response times and success rates
- Monitor 3D rendering performance (FPS, memory usage)
- Measure user engagement with different features
- Track conversion rates from analysis to action
- Monitor error rates and failure patterns

### Business Intelligence
- Track most popular product categories analyzed
- Monitor persona interaction patterns
- Measure accuracy of AI predictions vs real outcomes
- Analyze user retention and feature adoption
- Generate insights for product improvement

## Development & Testing

### Mock Services
- Provide realistic mock responses for development
- Implement feature flags for gradual rollouts
- Use dependency injection for easy service swapping
- Create test fixtures for consistent testing
- Implement contract testing for external APIs

### Environment Management
- Use different API keys/endpoints per environment
- Implement proper secrets management
- Use environment-specific configuration
- Implement health checks for all external services
- Provide development tools for API testing