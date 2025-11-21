# PitchPilot - AI Sales Training Platform

## Product Summary

PitchPilot is a production-ready AI-powered sales simulation platform where sales representatives practice calls with realistic AI customers and receive instant performance scores. Built for pitch presentations and investor demos.

## Core Features

### 1. Landing Page
- Professional hero section with clear value proposition
- Feature highlights with icons
- Pricing comparison (Free vs Pro)
- Call-to-action buttons throughout

### 2. Authentication & Onboarding
- Email/password authentication via Supabase
- Comprehensive onboarding form collecting:
  - Name and email
  - Sales role (SDR/AE/Founder/Other)
  - Industry selection
- Secure session management

### 3. Scenario Selection
- 5 pre-built realistic scenarios:
  - Cold Call - Tech Startup
  - Discovery Call - Enterprise
  - Objection Handling - Price
  - Pricing Discussion
  - Aggressive Negotiation
- Pro users can create custom scenarios
- Visual difficulty indicators
- Usage tracking (3 free simulations/day)

### 4. AI Simulation Interface
- Real-time chat interface with AI customer
- Live performance metrics:
  - Talk ratio (aim for 40-60%)
  - Filler word counter
  - Word count tracking
- AI responds contextually based on:
  - Conversation history
  - Scenario difficulty
  - User confidence level
- Smart greeting generation
- Natural conversation flow

### 5. Performance Scoring Engine
- Overall score (0-100) calculated from:
  - Message length appropriateness
  - Question asking behavior
  - Filler word usage
  - Conversation length
- 8 detailed metrics:
  - Clarity
  - Confidence
  - Objection handling
  - Listening ratio
  - Closing ability
  - Filler words
  - Professionalism
  - Empathy

### 6. Performance Report
- Visual score display with trophy icon
- Detailed metric breakdowns with progress bars
- Strengths highlighted in green
- Weaknesses identified in amber
- Practice suggestions provided
- AI-generated improved script template
- Phrases to avoid list

### 7. Dashboard & Analytics
- Average score tracking
- Recent trend analysis (improvement/decline)
- Total simulations counter
- Simulation history with:
  - Scores and timestamps
  - Duration tracking
  - Quick metric summaries
- Visual cards with icons

### 8. Freemium Model
- Free tier: 3 simulations per day
- Pro tier ($9/month):
  - Unlimited simulations
  - Custom scenario creation
  - Advanced analytics
  - Script export capabilities
- Daily usage counter with automatic reset
- Upgrade prompts for free users

## Technical Architecture

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling
- Client-side routing with state management

### Backend & Database
- Supabase for:
  - Authentication
  - PostgreSQL database
  - Row Level Security (RLS)
- 4 main tables:
  - profiles (user data)
  - scenarios (training scenarios)
  - simulations (session records)
  - performance_reports (AI feedback)

### Security
- Row Level Security on all tables
- Users can only access their own data
- System scenarios are publicly readable
- Secure authentication with Supabase Auth

## Design Philosophy

- Modern SaaS aesthetic
- Emerald green as primary brand color
- Clean, professional layouts
- Responsive design (mobile to desktop)
- Smooth transitions and hover states
- Clear visual hierarchy
- Accessible color contrasts

## Setup Instructions

### 1. Database Setup
Run the SQL from `DATABASE_SETUP.md` in your Supabase SQL Editor to create:
- All tables with proper relationships
- Row Level Security policies
- 5 system scenarios
- Performance indexes

### 2. Application Startup
The dev server starts automatically. The application is production-ready and has been built successfully.

## Key Differentiators

1. **Realistic AI Behavior** - AI customers respond dynamically based on conversation quality
2. **Instant Feedback** - No waiting for analysis, scores generated immediately
3. **Actionable Insights** - Specific suggestions and improved scripts provided
4. **Progress Tracking** - View improvement over time with trend analysis
5. **Freemium Model** - Low barrier to entry with clear upgrade path

## Pitch Points

- "Practice makes perfect, but real sales calls are expensive mistakes"
- "AI customers that react like real buyers - skeptical, busy, and demanding"
- "Get your pitch rejection-proof before the real call"
- "From cold call to close - train every scenario"
- "$9/month to never bomb another sales call"

## Target Market

- SDRs (Sales Development Representatives)
- Account Executives
- Startup founders doing founder-led sales
- Sales teams at SMBs
- Sales enablement departments

## Future Enhancement Opportunities

1. Voice-to-text for audio practice
2. Advanced analytics with industry benchmarks
3. Team features for sales managers
4. Integration with CRMs
5. Video recording of practice sessions
6. Collaborative scenario sharing
7. Leaderboards and gamification
8. Industry-specific scenarios
9. Multi-language support
10. Mobile app version

## Metrics to Track

- Daily/Monthly Active Users (DAU/MAU)
- Free to Pro conversion rate
- Average simulations per user
- Average score improvement over time
- Scenario completion rates
- User retention (Day 7, Day 30)
- Net Promoter Score (NPS)

## Business Model Validation

- **Problem**: Sales reps lack safe practice environments
- **Solution**: AI-powered realistic simulations
- **Market Size**: 6M+ sales professionals in US alone
- **Competitive Advantage**: Most realistic AI behavior + instant scoring
- **Revenue Model**: Proven freemium SaaS ($9/mo)
- **CAC Payback**: Low-cost acquisition via content marketing
- **Virality**: Built-in sharing of high scores

---

**Status**: Production-ready MVP
**Build Status**: ✅ Passing
**Type Safety**: ✅ All checks passing
**Database Schema**: Ready to deploy
**Authentication**: Fully functional
