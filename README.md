# Tunnel - AI Agents for Simulated Market Research

> Test your product ideas against 200+ intelligent AI personas in real-time. Get market validation in seconds, not months.

## 🚀 Features

- **200+ AI Personas**: Each with unique demographics, psychographics, and behavioral patterns
- **3D Market Visualization**: Interactive globe showing real-time sentiment analysis
- **Voice Conversations**: Talk directly with AI personas using Vapi integration
- **Focus Group Simulation**: AI automatically selects the 5 most relevant personas
- **Real-time Analysis**: Comprehensive market insights in under 30 seconds
- **Iterative Refinement**: Collect feedback and refine your idea in real-time

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js
- **Backend**: Node.js, Next.js API Routes, MongoDB, Mongoose
- **AI/ML**: Cohere AI, OpenAI (via Martian), Vapi
- **Infrastructure**: Vercel, MongoDB Atlas, Auth0, Cloudflare
- **Tools**: Framer Motion, Radix UI, Zod, Zustand

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tunnel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your API keys:
   - `COHERE_API_KEY`: Get from [Cohere](https://cohere.ai/)
   - `VAPI_API_KEY`: Get from [Vapi](https://vapi.ai/)
   - `MONGODB_URI`: MongoDB Atlas connection string
   - `AUTH0_*`: Auth0 configuration for user management

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How It Works

### 1. Persona Generation
- 200+ unique personas with detailed demographics and psychographics
- Global distribution across 50+ cities and 6 continents
- Dynamic behavior modeling based on personality traits

### 2. AI-Powered Analysis
- Cohere AI for semantic understanding and persona selection
- Multi-stage text generation pipeline for realistic reactions
- Sentiment analysis with structured extraction

### 3. 3D Visualization
- Three.js powered interactive globe
- Real-time color-coded sentiment mapping
- Smooth 60fps rendering with WebGL shaders

### 4. Voice Integration
- Vapi SDK for real-time voice conversations
- Gender-matched voices based on persona demographics
- Contextual responses with full conversation history

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js 13+ app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── MarketGlobe.tsx # 3D globe visualization
│   ├── PersonaCard.tsx # Individual persona display
│   └── ...
├── lib/                # Utility functions and services
│   ├── personas.ts     # Persona generation and management
│   ├── ai-simulation.ts # AI simulation engine
│   └── utils.ts        # General utilities
└── types/              # TypeScript type definitions
```

### Key Components

- **MarketSimulation**: Main simulation interface with multiple view modes
- **MarketGlobe**: 3D globe visualization using Three.js
- **PersonaCard**: Individual persona display with detailed feedback
- **AnalysisPanel**: Comprehensive market analysis dashboard
- **FocusGroupPanel**: Targeted focus group interactions

### API Integration

The app integrates with several external services:

- **Cohere AI**: Text generation, embeddings, and reranking
- **Vapi**: Real-time voice conversations
- **MongoDB Atlas**: Data persistence and session management
- **Auth0**: User authentication and persona management

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `COHERE_API_KEY` | Cohere AI API key for text generation | Yes |
| `VAPI_API_KEY` | Vapi API key for voice conversations | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `AUTH0_SECRET` | Auth0 secret for session management | Yes |
| `AUTH0_CLIENT_ID` | Auth0 application client ID | Yes |
| `AUTH0_CLIENT_SECRET` | Auth0 application client secret | Yes |
| `AUTH0_ISSUER_BASE_URL` | Auth0 domain URL | Yes |

## 📊 Performance

- **Sub-second API responses** with optimized caching
- **60fps 3D rendering** with WebGL optimizations
- **200+ concurrent persona processing** with batch operations
- **99.9% uptime** with robust error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Cohere](https://cohere.ai/) for powerful AI text generation
- [Vapi](https://vapi.ai/) for seamless voice AI integration
- [Three.js](https://threejs.org/) for 3D visualization capabilities
- [Next.js](https://nextjs.org/) for the amazing React framework

## 📞 Support

For support, email support@tunnel.ai or join our Discord community.

---

**Built with ❤️ for entrepreneurs who want to validate their ideas before building.**