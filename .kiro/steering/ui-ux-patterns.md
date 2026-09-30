---
inclusion: fileMatch
fileMatchPattern: '**/components/**/*.tsx|**/app/**/*.tsx'
---

# UI/UX Design Patterns for Tunnel

## Visual Design System

### Color Scheme
- Primary: Blue gradient (#667eea to #764ba2) for trust and innovation
- Success: Green (#10b981) for positive persona reactions
- Warning: Yellow (#f59e0b) for neutral reactions
- Error: Red (#ef4444) for negative reactions
- Background: Dark theme with gradient overlays for premium feel

### Typography
- Use Inter font family for clean, modern appearance
- Hierarchy: 6xl for hero titles, 3xl for section headers, xl for cards
- Ensure proper contrast ratios (4.5:1 minimum) for accessibility
- Use font weights strategically (400 regular, 600 semibold, 700 bold)

### Spacing & Layout
- Use Tailwind's spacing scale consistently (4, 6, 8, 12, 16, 24)
- Implement responsive grid layouts (1 col mobile, 2-3 cols desktop)
- Maintain consistent card padding (p-4 for small, p-6 for large)
- Use proper gap spacing in flex/grid layouts

## Animation Guidelines

### Framer Motion Patterns
- Use subtle entrance animations (fadeIn, slideUp) with 0.3s duration
- Implement staggered animations for lists (0.1s delay between items)
- Add hover animations for interactive elements (scale: 1.02)
- Use loading spinners for AI processing states

### Performance Considerations
- Limit simultaneous animations to prevent frame drops
- Use transform properties for better performance
- Implement reduced motion preferences for accessibility
- Optimize Three.js animations for 60fps target

## Interactive Elements

### Button States
- Primary: Blue gradient with white text
- Secondary: Transparent with border and hover fill
- Disabled: Reduced opacity with cursor-not-allowed
- Loading: Show spinner with disabled state

### Form Inputs
- Use glass-effect styling with backdrop blur
- Implement proper focus states with ring utilities
- Show validation errors inline with red text
- Debounce inputs for real-time search/filtering

### Cards & Panels
- Use glass-effect background with subtle borders
- Implement hover states with shadow elevation
- Show loading skeletons during data fetching
- Use proper semantic HTML for accessibility

## Responsive Design

### Breakpoint Strategy
- Mobile-first approach with min-width media queries
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Ensure 3D globe scales properly on mobile devices
- Stack navigation tabs vertically on small screens

### Touch Interactions
- Minimum 44px touch targets for mobile
- Implement swipe gestures for persona cards
- Use appropriate hover states for touch devices
- Ensure voice call buttons are easily accessible

## Accessibility Standards

### WCAG 2.1 Compliance
- Provide alt text for all images and icons
- Ensure keyboard navigation for all interactive elements
- Use proper ARIA labels for complex components
- Implement focus management for modal dialogs

### Screen Reader Support
- Use semantic HTML elements (nav, main, section, article)
- Provide descriptive text for data visualizations
- Announce dynamic content changes
- Include skip links for main navigation

## Error Handling

### User-Friendly Messages
- Avoid technical jargon in error messages
- Provide actionable steps for error resolution
- Use appropriate error icons and colors
- Implement retry mechanisms for failed operations

### Loading States
- Show skeleton screens during initial data loading
- Use progress indicators for multi-step processes
- Provide estimated completion times when possible
- Allow users to cancel long-running operations