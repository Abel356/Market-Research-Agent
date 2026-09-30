---
inclusion: always
---

# Tunnel Development Standards

## Code Quality Standards

### TypeScript Best Practices
- Always use strict TypeScript with proper type definitions
- Prefer interfaces over types for object shapes
- Use proper generic constraints for reusable components
- All API responses must be typed with Zod schemas

### React/Next.js Patterns
- Use 'use client' directive only when necessary (client-side features)
- Prefer server components for data fetching and static content
- Use proper error boundaries for component error handling
- Implement proper loading states with Suspense boundaries

### AI/ML Integration Guidelines
- Mock AI responses during development for faster iteration
- Always implement fallback behavior when AI services are unavailable
- Use structured prompts with consistent formatting
- Implement proper rate limiting and error handling for AI APIs

## Performance Requirements

### 3D Visualization (Three.js)
- Target 60fps for globe rendering
- Implement LOD (Level of Detail) for large datasets
- Use instancing for repeated geometries (persona points)
- Implement frustum culling for off-screen objects

### Data Management
- Batch API calls when processing multiple personas
- Implement proper caching for persona data
- Use optimistic UI updates for better UX
- Debounce user inputs (2-second delay for auto-save)

## Security & Privacy

### Data Handling
- Never log sensitive user data or API keys
- Implement proper input sanitization for product ideas
- Use environment variables for all API configurations
- Ensure GDPR compliance for persona data storage

### API Security
- Validate all inputs with Zod schemas
- Implement proper CORS policies
- Use rate limiting for public endpoints
- Sanitize all user-generated content

## Testing Strategy

### Component Testing
- Test all persona interaction flows
- Verify 3D globe rendering with different data sets
- Test responsive design across device sizes
- Validate accessibility compliance (WCAG 2.1)

### Integration Testing
- Mock external AI services for consistent testing
- Test error scenarios (API failures, network issues)
- Verify data persistence and session management
- Test voice integration workflows

## Documentation Requirements

### Code Documentation
- Document all complex algorithms (persona selection, sentiment analysis)
- Include JSDoc comments for all public functions
- Maintain up-to-date API documentation
- Document all environment variables and their purposes

### User Experience
- Provide clear onboarding for new users
- Include helpful tooltips for complex features
- Implement proper error messages with actionable guidance
- Maintain accessibility documentation