# PitchPilot - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Setup Database (5 minutes)

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy the entire SQL script from `DATABASE_SETUP.md`
4. Paste and click **Run**
5. Verify in **Table Editor** that you see:
   - profiles
   - scenarios (should have 5 rows)
   - simulations
   - performance_reports

### Step 2: Verify Environment Variables

Your `.env` file should already contain:
```
VITE_SUPABASE_URL=https://[your-project].supabase.co
VITE_SUPABASE_ANON_KEY=[your-anon-key]
```

### Step 3: Start Using PitchPilot

The dev server is already running! Open your browser and:

1. **Landing Page** - Click "Start Free Training"
2. **Sign Up** - Create your account (name, email, password, role, industry)
3. **Choose Scenario** - Pick from 5 realistic sales scenarios
4. **Practice** - Chat with the AI customer in real-time
5. **Get Scored** - See your performance breakdown instantly
6. **Track Progress** - View your dashboard and improvement trends

## 🎯 What You Can Do

### Free Users
- 3 simulations per day
- Access to 5 system scenarios
- Full performance scoring
- Dashboard with history

### Pro Users ($9/month)
- Unlimited simulations
- Create custom scenarios
- Advanced analytics
- Export scripts

## 📊 Understanding Your Scores

- **80-100**: Excellent - You're pitch-perfect!
- **60-79**: Good - Solid performance with room to grow
- **0-59**: Needs Work - Focus on the improvement areas

### Key Metrics Explained

- **Talk Ratio**: Aim for 40-60% (listen more than you talk!)
- **Clarity**: How clear and concise is your communication
- **Confidence**: Your tone and delivery strength
- **Objection Handling**: How well you address concerns
- **Closing Ability**: Can you move the conversation forward

## 🎬 Try These Scenarios First

1. **Cold Call - Tech Startup** (Realistic)
   - Great for beginners
   - Practice breaking the ice
   - Handle initial skepticism

2. **Objection Handling - Price** (Hard)
   - More challenging
   - Focus on value, not price
   - Build ROI arguments

3. **Aggressive Negotiation** (Aggressive)
   - Advanced difficulty
   - Stay calm under pressure
   - Practice standing firm

## 💡 Pro Tips

1. **Ask Questions** - The AI rewards discovery over pitching
2. **Be Concise** - 15-50 words per message is optimal
3. **Avoid Filler Words** - "Um", "like", "you know" hurt your score
4. **Listen Actively** - Keep your talk ratio under 60%
5. **Practice Daily** - Consistency builds muscle memory

## 🐛 Troubleshooting

### Can't Sign Up?
- Verify database tables are created
- Check RLS policies are enabled
- Ensure Supabase connection is active

### Scenarios Not Loading?
- Confirm 5 system scenarios exist in database
- Check browser console for errors
- Verify `is_system = true` for scenarios

### Score Not Generating?
- Ensure simulation completed successfully
- Check `simulations` table has your record
- Verify user has completed at least 2 messages

## 📈 What Success Looks Like

After 1 week of daily practice:
- Average score: 70+
- Filler words: < 3 per conversation
- Talk ratio: 45-55%
- Confidence metric: 75+

After 1 month:
- Average score: 80+
- Objection handling: 80+
- Ready for real high-stakes calls!

## 🎪 Pitch Demo Flow

When showing to investors/users:

1. **Start on Landing** - Show value proposition
2. **Quick Signup** - Demonstrate ease of onboarding
3. **Pick "Cold Call"** - Most relatable scenario
4. **Do 3-4 Exchanges** - Show AI responding naturally
5. **End Session** - Reveal instant scoring
6. **Show Dashboard** - Highlight progress tracking
7. **Mention Pro** - Point out monetization

**Key talking points:**
- "Watch how the AI reacts to confidence vs hesitation"
- "This objection is realistic - happens in 80% of cold calls"
- "Instant feedback means rapid improvement"
- "Free tier gets them hooked, Pro is where revenue scales"

## 🔥 Next Steps

1. ✅ Run the database setup SQL
2. ✅ Create your first user account
3. ✅ Complete your first simulation
4. ✅ Review your score report
5. ✅ Try all 5 scenarios
6. 🎯 Share with your first 10 beta users!

---

**Need Help?** Check `DATABASE_SETUP.md` for detailed schema info or `PRODUCT_OVERVIEW.md` for comprehensive product details.

**Ready to Pitch?** You have a complete, production-ready MVP that demonstrates:
- Clear problem/solution fit
- Engaging user experience
- Proven business model (freemium SaaS)
- Scalable architecture
- Immediate value delivery

**Go close that deal!** 🚀
