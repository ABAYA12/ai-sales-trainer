export interface ProductKnowledge {
  category: string;
  products: Array<{
    name: string;
    price: string;
    features: string[];
    benefits: string[];
    objections: Array<{
      concern: string;
      response: string;
    }>;
    competitors: Array<{
      name: string;
      comparison: string;
    }>;
  }>;
}

export interface SalesKnowledge {
  openingLines: string[];
  qualifyingQuestions: string[];
  valuePropositions: string[];
  closingTechniques: string[];
  objectionHandling: Array<{
    objection: string;
    responses: string[];
  }>;
  industryInsights: string[];
  negotiationTactics: string[];
  followUpStrategies: string[];
}

export interface CustomerPersonas {
  type: string;
  characteristics: string[];
  painPoints: string[];
  motivations: string[];
  communicationStyle: string;
  decisionFactors: string[];
  typicalObjections: string[];
  buyingSignals: string[];
}

export const productKnowledge: ProductKnowledge[] = [
  {
    category: "Enterprise Software",
    products: [
      {
        name: "CloudSync Pro",
        price: "$299-$999/month",
        features: [
          "Real-time data synchronization across 50+ platforms",
          "Enterprise-grade 256-bit encryption",
          "99.99% uptime SLA with automatic failover",
          "Custom API integrations and webhooks",
          "Advanced analytics dashboard with 100+ metrics",
          "Role-based access control for unlimited users",
          "24/7 premium support with 15-minute response time",
          "Automated backup and disaster recovery",
          "Compliance certifications: SOC 2, GDPR, HIPAA",
          "White-label options for enterprise clients"
        ],
        benefits: [
          "Reduce data entry time by 85% with automation",
          "Eliminate costly data silos across departments",
          "Scale from 10 to 10,000 users without performance loss",
          "Reduce IT overhead by 60% with managed infrastructure",
          "Increase team productivity by 3-5 hours per week per employee",
          "ROI typically achieved within 4-6 months",
          "Reduce human error in data handling by 95%",
          "Enable real-time decision making with live data",
          "Future-proof with quarterly feature updates",
          "Seamless migration from legacy systems in under 2 weeks"
        ],
        objections: [
          {
            concern: "Too expensive compared to competitors",
            response: "I understand budget is crucial. When you factor in our 99.99% uptime, unlimited users, and the 85% time savings our clients report, the ROI is clear. Our enterprise clients save an average of $50,000 annually in operational costs alone. Plus, we offer flexible payment plans. Would a quarterly payment structure work better for your budget cycle?"
          },
          {
            concern: "We already have a solution in place",
            response: "That's great that you have something working! Many of our best clients came from existing solutions. The question is: is your current system giving you real-time insights across all platforms? Our clients who switched reported 3x faster reporting and eliminated 15+ hours of manual work per week. We offer a side-by-side comparison - no commitment - to show you exactly what you're missing. Would next Tuesday work?"
          },
          {
            concern: "Implementation seems too complex",
            response: "I totally get that concern - nobody wants months of disruption. Here's the reality: our average implementation is 10 business days, and we handle 90% of the heavy lifting. Our dedicated onboarding team works around your schedule, and we've migrated companies 5x your size without a single hour of downtime. We also provide a dedicated success manager for 90 days. What if I could show you our implementation roadmap specific to your use case?"
          },
          {
            concern: "Security concerns with cloud storage",
            response: "Security is exactly why companies choose us. We use military-grade 256-bit encryption, have SOC 2 Type II certification, and our data centers are more secure than 99% of on-premise setups. We've never had a breach in 8 years. Plus, you maintain complete control - you can enable geo-fencing, set up custom access rules, and we never access your data without explicit permission. Would you like to speak with our security team directly?"
          },
          {
            concern: "Need to think about it",
            response: "Absolutely, this is an important decision. Let me ask - what specific aspects do you need to evaluate? Is it budget approval, technical feasibility, or comparing other options? I ask because I want to make sure you have all the information you need. Many clients found it helpful to run a 14-day pilot with their actual data - completely free, no credit card. That way, you're making a decision based on real results, not just a demo. Would that be valuable?"
          },
          {
            concern: "What if it doesn't work for our specific industry?",
            response: "Great question! We actually have 200+ clients in your exact industry, including three of your top competitors. In fact, we have pre-built templates and workflows specifically for your sector that can be deployed immediately. I'd love to share case studies from companies just like yours who saw 40% faster processing times. Would you like me to connect you with a reference client in your industry?"
          },
          {
            concern: "Our team won't adopt new software",
            response: "User adoption is critical, and it's exactly why we built our interface to be intuitive - most users are productive within 1 hour. We provide unlimited training, interactive tutorials, and our in-app help has a 4.9/5 rating. Plus, we assign a dedicated Customer Success Manager who works with your team for the first 90 days. In our latest survey, 94% of end-users rated us 'easy to use.' We can also run a small pilot with your most tech-savvy team members first. Sound good?"
          },
          {
            concern: "What about data migration from our current system?",
            response: "Migration is included at no extra cost, and we've done this hundreds of times. Our team handles the entire process - we extract, transform, and validate your data, typically within 3-5 days. You'll have full visibility throughout, and we run parallel systems during transition so there's zero risk. We also provide rollback capabilities if needed. Most importantly, we guarantee data integrity with checksums and validation reports. Would you like to see our migration methodology?"
          }
        ],
        competitors: [
          {
            name: "DataFlow Systems",
            comparison: "While DataFlow is solid for basic syncing, they charge per integration (we include unlimited), their uptime is 99.5% vs our 99.99%, and they don't offer white-labeling. Their support is also email-only while we provide 24/7 phone and chat."
          },
          {
            name: "SyncMaster",
            comparison: "SyncMaster is good for small teams but struggles at scale. They cap at 5,000 records per sync vs our unlimited capacity, and they don't have real-time syncing - it's batch-based with 15-minute delays. We also include advanced analytics which they charge $500 extra for."
          },
          {
            name: "BuildingYourOwnSolution",
            comparison: "Building in-house seems cost-effective initially, but the hidden costs add up fast. Our clients who tried this spent $200K+ in developer time over 18 months, and still had reliability issues. With us, you're productive in 2 weeks with guaranteed uptime and continuous improvements. Plus, your developers can focus on revenue-generating projects."
          }
        ]
      }
    ]
  }
];

export const salesKnowledge: SalesKnowledge = {
  openingLines: [
    "Hi! I noticed you're exploring solutions for [problem]. I'd love to understand what's driving your search today - what's the biggest challenge you're facing right now?",
    "Thanks for your time! Before I dive in, can you tell me a bit about your current process for [task]? I want to make sure I'm focusing on what matters most to you.",
    "Great to connect! I've worked with several companies in [industry], and they all mentioned [pain point] as a major frustration. Is that something you're experiencing too?",
    "I appreciate you taking this call. Quick question - if you could wave a magic wand and fix one thing about your current [system/process], what would it be?",
    "Thanks for meeting with me! I know your time is valuable, so let me start by asking: what would make this conversation most valuable for you today?",
    "Hi there! I've been doing some research on [company], and I'm curious - how are you currently handling [specific challenge]? Are you happy with your results?",
    "Great to speak with you! Before I tell you about us, I'd love to learn more about you. Walk me through a typical day - where does [problem area] create the most friction?",
    "Thanks for connecting! I've helped companies similar to yours save [specific benefit]. But first, help me understand: what does success look like for your team in the next 6-12 months?",
    "I appreciate your time today! I promise to keep this focused on your needs. Can you share what prompted you to start looking for a solution now versus six months ago?",
    "Thanks for joining! Quick context-setting question: on a scale of 1-10, how satisfied are you with your current approach to [problem area]? What would it take to make it a 10?"
  ],

  qualifyingQuestions: [
    "What does your current workflow look like from start to finish?",
    "How much time does your team spend on this task weekly?",
    "What's the cost of not solving this problem - both in time and money?",
    "Who else is involved in this decision besides yourself?",
    "What's your timeline for implementing a solution?",
    "What budget range are you working with for this initiative?",
    "Have you evaluated other solutions? What did you like or dislike about them?",
    "What would a successful outcome look like 90 days after implementation?",
    "What concerns do you have about changing your current process?",
    "If you don't move forward with a solution, what's plan B?",
    "Walk me through your decision-making process - what are the key steps?",
    "What metrics will you use to measure success?",
    "Are there any technical requirements or integrations that are must-haves?",
    "What's preventing you from solving this problem right now?",
    "How does this initiative fit into your overall strategic priorities?",
    "What's the cost of your current solution including time, tools, and personnel?",
    "Who will be the primary users, and what's their technical comfort level?",
    "Have you allocated budget for this, or would it need approval?",
    "What happened the last time you tried to solve this problem?",
    "If you could implement this tomorrow, what would change immediately?"
  ],

  valuePropositions: [
    "We help companies like yours reduce operational costs by 40-60% while improving accuracy and speed. Our clients typically see ROI within 4-6 months.",
    "Unlike other solutions that require extensive IT support, our platform is designed for business users to set up and manage independently - usually in under a week.",
    "We're the only solution that combines real-time syncing, advanced analytics, and enterprise security in one platform - meaning you don't need to juggle multiple vendors.",
    "Our clients report saving 15-20 hours per week in manual work, which they redirect to high-value strategic initiatives instead of data entry.",
    "We've processed over 10 billion transactions without a single data breach or loss - security and reliability you can actually trust.",
    "You'll have a dedicated Customer Success Manager who knows your business and proactively identifies opportunities for optimization.",
    "We offer the industry's only true money-back guarantee - if you don't see measurable improvement in 90 days, we refund 100% of your investment.",
    "Our platform scales with you - from startup to enterprise - without requiring costly re-implementations or migrations.",
    "We provide unlimited training and support at no extra cost, ensuring your entire team is productive from day one.",
    "With 200+ pre-built integrations and custom API access, you can connect your entire tech stack without writing a single line of code."
  ],

  closingTechniques: [
    "Based on everything we've discussed, it sounds like this could save your team 15+ hours per week and pay for itself in under 5 months. What questions do you still have before moving forward?",
    "I think we've covered a lot of ground today. On a scale of 1-10, where are you in terms of confidence that this will solve your problem? What would get you to a 10?",
    "Here's what I'd recommend: let's start with a 14-day pilot using your actual data. That way, you'll see real results, not just promises. I can have you set up by end of week. Does that work?",
    "Most of our best clients started exactly where you are - cautiously optimistic. The difference is they took action. What if we could get you live in the next 10 days? What would need to happen on your end?",
    "I know this is a big decision. Let me ask - if we can demonstrate a clear path to [their stated goal], is there any reason you wouldn't move forward today?",
    "You mentioned [pain point] is costing you $X per month. If we can eliminate that starting next month, what's holding us back from getting started?",
    "What I'm hearing is that this checks all your boxes - features, price, timeline. What's the next step to get this approved on your end?",
    "Let's be practical - you're spending [current cost] now with [current problems]. We can have you up and running for less, with better results, in 2 weeks. What do you say?",
    "I want to be respectful of your time and decision-making process. If we're not a good fit, that's totally fine. But if we are, what would you need to see to commit today?",
    "Here's my suggestion: let's schedule a 30-minute technical deep-dive with your team next week, and if everyone's aligned, we can start onboarding immediately after. Fair enough?"
  ],

  objectionHandling: [
    {
      objection: "I need to discuss with my team",
      responses: [
        "Absolutely - getting team buy-in is crucial. Who specifically needs to be involved, and what are their main concerns? I can prepare materials that address those directly.",
        "That makes sense. Would it help if I joined that conversation to answer technical questions in real-time? I find that speeds up decision-making significantly.",
        "Of course! While you're doing that, would you be open to us setting up a demo environment with your data? That way, your team can see exactly how it works for your use case."
      ]
    },
    {
      objection: "The timing isn't right",
      responses: [
        "I hear you on timing. Can I ask - is it that you're too busy to implement right now, or is there a better time in your fiscal cycle? Our quickest implementation was 3 days with minimal team involvement.",
        "I understand timing concerns. Here's the thing though - you're losing [X amount] every month you wait. If we start now, you'll be saving money by the time your 'better timing' comes around. Make sense?",
        "Fair enough. What if we could get you set up with minimal disruption - say 2 hours of your time total? Would that change the timing consideration?"
      ]
    },
    {
      objection: "Your competitor quoted us less",
      responses: [
        "I appreciate you being upfront about price. Can you share what their quote included? I want to make sure we're comparing apples to apples - often their pricing doesn't include [critical features we include].",
        "Lower price isn't always better value. Our clients who switched from [competitor] reported 3x better results despite paying 20% more. The question is: do you want cheap, or do you want effective?",
        "If they're cheaper, there's usually a reason - fewer features, limited support, or hidden costs. Let me show you our total cost of ownership analysis. I think you'll find we're actually less expensive over 12 months."
      ]
    },
    {
      objection: "We need more features",
      responses: [
        "Great question! What specific features are you looking for? We release new features quarterly based on client feedback, and I can check if what you need is on our roadmap.",
        "I'm curious - which features specifically? In my experience, 80% of users only use 20% of features. Let's focus on whether we solve your core problem first.",
        "Tell me more about these features. Often, our platform already does what you need, just in a different way. Can you walk me through your ideal workflow?"
      ]
    },
    {
      objection: "We're worried about the learning curve",
      responses: [
        "That's a valid concern! Here's how we address it: unlimited training, in-app tutorials, 24/7 support, and a dedicated Customer Success Manager for 90 days. Most users are productive within their first hour. Plus, we can train a power user on your team who becomes your internal expert.",
        "I totally get it. That's why we built our interface with simplicity in mind - our average user adoption rate is 94% within the first week. Want to see how intuitive it is? I can show you in 5 minutes.",
        "Learning curve is important. What if I told you we'd guarantee your team is fully trained and productive within 2 weeks, or we extend your trial period for free? Would that address your concern?"
      ]
    },
    {
      objection: "We had a bad experience with similar software before",
      responses: [
        "I'm sorry you had that experience - that's frustrating. What specifically went wrong? I want to make sure we don't repeat those mistakes and that our solution truly is different.",
        "That explains your caution, and I respect that. Here's what makes us different: [specific differentiators]. Plus, we offer a 60-day money-back guarantee - if you're not satisfied, you get a full refund. Zero risk.",
        "I hear you. What would need to be different this time for you to feel confident? Is it better support, easier implementation, more training? Let's address those concerns head-on."
      ]
    }
  ],

  industryInsights: [
    "According to recent research, 73% of companies that delay digital transformation end up spending 2-3x more when they finally implement - and they lose competitive advantage in the meantime.",
    "Industry leaders in your space are investing heavily in automation - companies that automate see 40-60% cost reduction and 3x faster growth rates.",
    "The average company wastes 25-30% of their workforce's time on manual, repetitive tasks that could be automated. That's literally throwing money away.",
    "Data silos cost enterprises an average of $12-15 million annually in lost productivity, duplicated efforts, and missed opportunities.",
    "Companies with real-time data analytics make decisions 5x faster than competitors, giving them massive competitive advantages in fast-moving markets.",
    "85% of digital transformation initiatives fail due to poor user adoption. That's why we focus obsessively on user experience and training.",
    "The ROI on workflow automation averages 230% within the first year, making it one of the highest-return investments a company can make.",
    "Security breaches cost companies an average of $4.35 million per incident. Enterprise-grade security isn't a luxury - it's a necessity.",
    "Companies that integrate their tech stack see 50% reduction in errors and 40% improvement in customer satisfaction.",
    "Remote work has made cloud-based solutions essential - companies still relying on on-premise systems are struggling with collaboration and accessibility."
  ],

  negotiationTactics: [
    "I understand budget is tight. What if we started with our core package and added premium features as you scale? That way, you get immediate value at a lower entry point.",
    "Let me see what I can do. If I can get approval for [discount/extra features], could you commit to a 2-year contract instead of 1 year? That helps us both.",
    "I appreciate you being straightforward about price. Rather than discount, what if I threw in [additional value] worth $X,XXX at no extra cost? Would that work?",
    "Here's an option: if you can sign by end of the week, I can honor our Q4 pricing which is 15% less than our new Q1 rates. Does that timeline work?",
    "I'm limited on how much I can discount, but what if we structured this as a pilot program with 3 months at 50% off, then normal pricing after you see results?",
    "Let me be transparent - our pricing is competitive because we don't compromise on quality or support. Instead of discounting, what if we extended your implementation support from 30 to 90 days?",
    "I can't go lower on price, but I can offer flexible payment terms. Would quarterly payments instead of annual upfront help your cash flow?",
    "What if we did a performance-based agreement? You pay a lower base rate, and we add a success fee once you hit [specific measurable outcome]. That way, we're aligned on results.",
    "I hear your budget concerns. Let's look at this differently - what's the cost of not solving this problem? Often, the cost of inaction is higher than our solution.",
    "Here's my best offer: I can include [premium features] and give you [X%] off if you can commit today and provide a testimonial case study after 90 days. Deal?"
  ],

  followUpStrategies: [
    "I'll send you a detailed proposal by EOD tomorrow with everything we discussed. Can we schedule 20 minutes on Friday to review and address any questions?",
    "Let me share a case study from [similar company] who had the same concerns you mentioned. I'll email it over today, and let's reconnect early next week to discuss. Does Tuesday at 10am work?",
    "I'm going to set up a demo environment with sample data that matches your use case. I'll have it ready by Thursday - want to do a quick 15-minute walkthrough then?",
    "Based on our conversation, I think you'd benefit from speaking with [colleague/technical expert]. I'll arrange an intro, and we can do a three-way call next week. Sound good?",
    "I'll send over ROI calculations specific to your situation. Once you review them, let's schedule a follow-up to discuss whether the numbers make sense for you.",
    "Let me connect you with one of our clients in [same industry] who can speak to their experience. Would you prefer to speak with them directly or have me join the call?",
    "I'm going to prepare a side-by-side comparison of us versus [competitor you mentioned]. I'll have it ready by tomorrow - can we review it together on Wednesday?",
    "I'll draft a proposal that addresses all the concerns you raised today. Before I send it, is there anything else you need to see or anyone else who needs to be involved?",
    "Let me check with my manager about [special request you made]. I'll get back to you by end of day tomorrow with an answer. If it's a yes, can we move forward?",
    "I'm going to send you a detailed implementation timeline so you can see exactly what the next 30 days would look like. Let's touch base on Thursday to discuss if it fits your schedule."
  ]
};

export const customerPersonas: CustomerPersonas[] = [
  {
    type: "The Analytical Decision-Maker",
    characteristics: [
      "Data-driven and methodical",
      "Asks detailed technical questions",
      "Wants proof points and case studies",
      "Takes time to evaluate options thoroughly",
      "Risk-averse and cautious"
    ],
    painPoints: [
      "Needs to justify ROI to stakeholders",
      "Concerned about implementation complexity",
      "Worried about data security and compliance",
      "Fears making the wrong choice"
    ],
    motivations: [
      "Making the most informed decision possible",
      "Protecting their reputation",
      "Achieving measurable results",
      "Minimizing risk"
    ],
    communicationStyle: "Detailed, formal, prefers facts over emotions",
    decisionFactors: ["ROI", "Case studies", "Technical specifications", "Risk mitigation"],
    typicalObjections: [
      "I need more data",
      "Can you send me more documentation?",
      "What if it doesn't work as promised?",
      "I need to analyze this further"
    ],
    buyingSignals: [
      "Asks about implementation details",
      "Requests references",
      "Inquires about contract terms",
      "Discusses timeline specifics"
    ]
  },
  {
    type: "The Busy Executive",
    characteristics: [
      "Time-constrained and impatient",
      "Big-picture focused",
      "Delegates details to team",
      "Values efficiency and results",
      "Makes quick decisions"
    ],
    painPoints: [
      "Doesn't have time for lengthy demos",
      "Needs quick wins",
      "Frustrated with current inefficiencies",
      "Under pressure to show results"
    ],
    motivations: [
      "Improving bottom line quickly",
      "Looking like a hero to leadership",
      "Reducing personal workload",
      "Staying competitive"
    ],
    communicationStyle: "Direct, brief, bottom-line focused",
    decisionFactors: ["Speed of implementation", "Clear ROI", "Minimal involvement required", "Quick wins"],
    typicalObjections: [
      "I don't have time for this right now",
      "Just send me the pricing",
      "Can your team handle everything?",
      "This seems complicated"
    ],
    buyingSignals: [
      "Asks about fastest implementation",
      "Wants to delegate to team immediately",
      "Focuses on ROI and results",
      "Asks about pricing upfront"
    ]
  },
  {
    type: "The Budget-Conscious Buyer",
    characteristics: [
      "Extremely price-sensitive",
      "Compares multiple vendors",
      "Negotiates aggressively",
      "Questions every cost",
      "Looks for discounts and deals"
    ],
    painPoints: [
      "Limited budget",
      "Pressure to reduce costs",
      "Needs to justify every expense",
      "Fears overpaying"
    ],
    motivations: [
      "Getting the best deal possible",
      "Staying within budget",
      "Demonstrating fiscal responsibility",
      "Maximizing value"
    ],
    communicationStyle: "Focused on price, asks about competitors, skeptical",
    decisionFactors: ["Price", "Payment terms", "What's included", "Long-term costs"],
    typicalObjections: [
      "That's too expensive",
      "Your competitor is cheaper",
      "We don't have budget for this",
      "Can you do better on price?"
    ],
    buyingSignals: [
      "Asks about payment plans",
      "Inquires about what's included vs. extra",
      "Wants to see written proposal",
      "Discusses contract length for better pricing"
    ]
  },
  {
    type: "The Innovation Enthusiast",
    characteristics: [
      "Early adopter mindset",
      "Excited about new technology",
      "Willing to take risks",
      "Focuses on future potential",
      "Asks about roadmap and vision"
    ],
    painPoints: [
      "Stuck with outdated systems",
      "Wants to stay ahead of competitors",
      "Frustrated with lack of innovation",
      "Needs cutting-edge solutions"
    ],
    motivations: [
      "Being seen as innovative leader",
      "Competitive advantage",
      "Future-proofing their operations",
      "Excitement about new possibilities"
    ],
    communicationStyle: "Enthusiastic, forward-thinking, asks about future features",
    decisionFactors: ["Innovation", "Scalability", "Future roadmap", "Competitive edge"],
    typicalObjections: [
      "Do you have AI capabilities?",
      "What about mobile?",
      "Is this the latest technology?",
      "What's coming next?"
    ],
    buyingSignals: [
      "Gets excited about features",
      "Asks about beta programs",
      "Wants to see product roadmap",
      "Discusses long-term partnership"
    ]
  },
  {
    type: "The Skeptical Buyer",
    characteristics: [
      "Distrustful of sales pitches",
      "Has been burned before",
      "Questions everything",
      "Looks for catches and fine print",
      "Defensive and guarded"
    ],
    painPoints: [
      "Bad experiences with previous vendors",
      "Feels pressured by salespeople",
      "Worried about hidden costs",
      "Fears being taken advantage of"
    ],
    motivations: [
      "Avoiding past mistakes",
      "Protecting their organization",
      "Finding truly trustworthy vendor",
      "Getting genuine value"
    ],
    communicationStyle: "Critical, questioning, may seem hostile",
    decisionFactors: ["Trust", "Transparency", "Guarantees", "References"],
    typicalObjections: [
      "That sounds too good to be true",
      "What's the catch?",
      "I've heard this before",
      "How do I know you'll deliver?"
    ],
    buyingSignals: [
      "Starts asking constructive questions",
      "Tone softens",
      "Asks about guarantee or trial",
      "Requests customer references"
    ]
  }
];

export function generateAIResponse(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>,
  scenarioContext: string
): string {
  const messageCount = conversationHistory.filter(m => m.role === 'user').length;
  const lowerMessage = userMessage.toLowerCase();
  const lowerScenario = scenarioContext.toLowerCase();

  const isPricingScenario = lowerScenario.includes('price concern') || lowerScenario.includes('objection handling: price');
  const isNegotiationScenario = lowerScenario.includes('last-minute') || lowerScenario.includes('deal push');

  if (isPricingScenario) {
    if (messageCount === 0) {
      const pricingGreetings = [
        "Look, I'll be direct with you - I've seen your proposal and the pricing is way too high. We can't justify spending that much. Our budget for this is half of what you're asking.",
        "I appreciate the detailed proposal, but we have a serious problem: the price. I've gotten quotes from two competitors that are 30-40% less expensive. Why should I pay a premium for your solution?",
        "Thanks for sending that over. I'm interested in what you offer, but I have to be honest - we just don't have that kind of budget. Can you work with me here? What kind of discount can you offer?",
        "Let me stop you right there. Before we go any further, I need to know if you can be flexible on pricing. Your quote is significantly higher than what we budgeted for this quarter.",
      ];
      return pricingGreetings[Math.floor(Math.random() * pricingGreetings.length)];
    }

    if (lowerMessage.includes('value') || lowerMessage.includes('roi') || lowerMessage.includes('save')) {
      const valueResponses = [
        "Okay, I hear what you're saying about value, but I'm looking at my bottom line here. Our CFO is breathing down my neck about every expense. Show me concrete numbers - how much will we actually save in the first 6 months? Because your competitor guarantees savings within 90 days.",
        "Value is great in theory, but I need hard numbers. You're talking about productivity gains and time savings, but that's difficult to quantify. What I CAN quantify is that I'm being asked to spend 50% more than I budgeted. Help me understand how I justify this to finance.",
        "I've heard the value pitch before from every vendor. Here's my reality: we implemented a similar solution last year that promised 40% efficiency gains, and we saw maybe 10%. Why would yours be different? And why does it cost more?",
        "Look, I understand you believe in the value, but my job is to negotiate the best deal possible. If your product delivers all this value, why can't you offer better pricing? Sounds like you should be confident enough to put some skin in the game.",
      ];
      return valueResponses[Math.floor(Math.random() * valueResponses.length)];
    }

    if (lowerMessage.includes('discount') || lowerMessage.includes('lower') || lowerMessage.includes('reduce')) {
      const discountResponses = [
        "That's still not competitive enough. I need at least 25% off to even consider this. And honestly, your competitor just offered me 30% off their list price plus free implementation. Can you match that or beat it?",
        "I appreciate you trying to work with me, but that discount barely moves the needle. We're a large potential customer - this could lead to enterprise-wide adoption if it works out. Surely you can do better than that for a strategic account?",
        "Okay, so you came down a bit, but I'm still comparing apples to apples here. Your competitor is offering similar features at a lower base price, plus they threw in premium support for free. What else can you include to sweeten the deal?",
        "Let me be clear - I'm not just fishing for discounts. I genuinely like your product, but I have a fiduciary responsibility to get the best terms possible. If you can't move more on price, what about extended payment terms or additional licenses at no cost?",
      ];
      return discountResponses[Math.floor(Math.random() * discountResponses.length)];
    }

    if (lowerMessage.includes('competitor') || lowerMessage.includes('other') || lowerMessage.includes('alternative')) {
      const competitorResponses = [
        "I've been very transparent with you - your main competitor quoted us at $X, which is 35% less than your price. They also include implementation and training at no extra charge. Their references checked out too. So convince me why I should pay more for yours.",
        "Here's what I'm wrestling with: your competitor may not have every bell and whistle you have, but they have 90% of what we need at 60% of your cost. The last 10% of features just isn't worth that price premium to me. Change my mind.",
        "I've done my homework. I have three proposals on my desk right now. Two are cheaper than yours, and one has better payment terms. You're asking me to take a risk on the most expensive option. What's your compelling differentiator that justifies the premium?",
        "Let's be real - in a blind test, how different are these solutions really? You all claim to be the best, but at the end of the day, we need something that works at a price we can afford. Your competitor is hungry and offering aggressive pricing to win our business. What can you do?",
      ];
      return competitorResponses[Math.floor(Math.random() * competitorResponses.length)];
    }

    if (messageCount >= 4) {
      const closingResponses = [
        "Alright, I appreciate your honesty and the fact that you're not just automatically cutting price. But here's where we are: I have authority to approve up to $X. Anything above that requires CFO sign-off, which adds 2-3 months to the process. Can we structure something that works within my approval limits?",
        "Look, you've made a strong case for the value. I'm willing to move forward, but I need some concessions to make this fly internally. Can you include premium support for the first year and throw in additional user licenses? That would help me justify the investment to my team.",
        "I'll level with you - I want to work with you. Your product seems solid and I believe you can deliver. But I also need to show my leadership that I negotiated a fair deal. What's your absolute best offer, including everything - price, terms, training, support? Make it easy for me to say yes.",
        "We've been going back and forth, and I respect that you've been professional about it. Here's my final concern: implementation timeline and hidden costs. If I agree to move forward at close to your asking price, I need guarantees there won't be surprise charges down the line. Can you commit to that in writing?",
      ];
      return closingResponses[Math.floor(Math.random() * closingResponses.length)];
    }
  }

  if (isNegotiationScenario) {
    if (messageCount === 0) {
      const negotiationGreetings = [
        "Okay, we're close to signing, but I need to hash out a few final details. First, your payment terms don't work for our procurement cycle. We need net-60 at minimum, preferably net-90. Second, the timeline you proposed is too aggressive. Can we push implementation to next quarter?",
        "Before I get this signed off, my team has flagged several concerns. We need these three features included that you currently have listed as add-ons. We also need a 60-day pilot period before full commitment. And frankly, given the size of this deal, I expected better pricing.",
        "I'm ready to move forward, but my board has some conditions. They want a custom SLA with guaranteed uptime and penalties if you don't hit targets. They also want the option to exit the contract after year one with no penalty. Can you accommodate that?",
        "Look, I've been authorized to proceed, but there are strings attached. Legal wants a ton of changes to the contract, IT wants dedicated support resources, and finance is insisting on quarterly payments instead of annual. Where can you be flexible?",
      ];
      return negotiationGreetings[Math.floor(Math.random() * negotiationGreetings.length)];
    }

    if (lowerMessage.includes('timeline') || lowerMessage.includes('implement') || lowerMessage.includes('schedule')) {
      const timelineResponses = [
        "Your proposed timeline has us going live in 6 weeks. That's unrealistic given our Q4 workload. We need this pushed to Q1 at the earliest. I can't have my team pulled away from year-end priorities. And if we're pushing timeline, I expect you to hold pricing for an extended period.",
        "Implementing in Q4 is non-negotiable from my end - we simply don't have the resources. But here's the thing: if we're delaying, I want you to throw in some additional services. Maybe extra training sessions or dedicated support during our eventual rollout?",
        "I hear you saying the timeline is tight, but that doesn't work for us operationally. We need at least a 90-day implementation window, and we'd like to phase it in department by department rather than company-wide all at once. Can your team support that?",
        "Look, rushing implementation is how projects fail. I've seen it happen. We need this done right, not done fast. Give me a realistic timeline that doesn't burn out my people, and I'll be more flexible on other terms. But this aggressive schedule is a deal-breaker as it stands.",
      ];
      return timelineResponses[Math.floor(Math.random() * timelineResponses.length)];
    }

    if (lowerMessage.includes('payment') || lowerMessage.includes('terms') || lowerMessage.includes('monthly') || lowerMessage.includes('quarterly')) {
      const paymentResponses = [
        "Annual payment upfront is a non-starter. Our cash flow requires quarterly billing, and that's how we structure all our SaaS contracts. I'll need this changed to quarterly payments, and I want the flexibility to reduce licenses if we need to scale down mid-year.",
        "Finance has strict policies - we don't do annual prepayment for vendors we haven't worked with before. You're asking me to pay $X upfront for an unproven solution. Let's do monthly payments for year one, then we can revisit annual pricing if things go well.",
        "Here's the reality of our procurement process: anything over $50K needs to be spread across fiscal years for budget reasons. Can we structure this as a multi-year deal with payment milestones? That would actually increase your total contract value, just spread out differently.",
        "Payment terms matter to our CFO. Net-30 is standard for small vendors, but for strategic partnerships like this, we need net-60 minimum. Also, we'll need the option to hold back 10% until successful completion of implementation milestones. That's our policy with all enterprise software.",
      ];
      return paymentResponses[Math.floor(Math.random() * paymentResponses.length)];
    }

    if (lowerMessage.includes('feature') || lowerMessage.includes('include') || lowerMessage.includes('add') || lowerMessage.includes('throw in')) {
      const featureResponses = [
        "I see these three features are listed as premium add-ons. For the price point we're discussing, I expect those included. Your competitor includes them standard. If I'm paying a premium for your solution, I shouldn't have to pay extra for basic functionality our team needs.",
        "My IT team reviewed your platform and flagged a gap: you don't have native integration with our CRM. I need you to commit to building that integration within 90 days of contract signature, at no additional cost. Otherwise, we're looking at a lot of manual work-arounds.",
        "Let's talk about what's NOT included in your base price. Implementation, training, and premium support are all additional. For a deal this size, I need at least 50% of those costs waived. I'm not nickel-and-diming you - I'm asking for you to invest in making us successful.",
        "I've been reviewing the fine print, and there are a lot of caveats about what's included. API calls are capped, storage has limits, and priority support is extra. For our use case, we'll blow through those limits quickly. I need those caps raised significantly or removed entirely.",
      ];
      return featureResponses[Math.floor(Math.random() * featureResponses.length)];
    }

    if (lowerMessage.includes('sla') || lowerMessage.includes('guarantee') || lowerMessage.includes('uptime') || lowerMessage.includes('support')) {
      const slaResponses = [
        "Your standard SLA promises 99.9% uptime. That's not good enough for us - we're a 24/7 operation and downtime costs us real money. I need 99.99% uptime with financial penalties if you miss that target. And we need 1-hour response time for critical issues, not your standard 4-hour window.",
        "Let's talk about what happens when things go wrong. Your contract limits your liability to the amount we paid you that month. That's unacceptable - if your system goes down, we could lose hundreds of thousands in revenue. I need a more realistic liability cap in the contract.",
        "Support is make-or-break for us. Your standard plan offers email support with 24-hour response time. We need phone support with 30-minute response for priority issues, and we need a dedicated account team that knows our environment. This needs to be included, not an upsell.",
        "I'm concerned about your track record. I did some research and found complaints online about slow support and bugs. Before I commit, I need guarantees: a dedicated support engineer for our first 6 months, regular check-ins from your leadership team, and an escalation path if issues aren't resolved quickly.",
      ];
      return slaResponses[Math.floor(Math.random() * slaResponses.length)];
    }

    if (messageCount >= 4) {
      const closingResponses = [
        "Alright, we've covered a lot of ground. I'm willing to sign off if we can agree on these final points: quarterly payment terms, 99.99% uptime SLA, premium support included, and implementation pushed to Q1. If you can commit to all of that in the contract, I'll get this through legal by end of week. Deal?",
        "I appreciate your flexibility on some of these points. Here's what I need to get this across the finish line: confirmation from your CEO that you're committed to our success, a clause allowing us to exit after year one if things aren't working, and price protection for year two. Can you make that happen?",
        "We're close. Real close. But I need a couple more concessions before I present this to my board. Include premium support at no cost, commit to building the integration we discussed within 90 days, and give me a 5% discount for signing this quarter. Do that and we have a deal today.",
        "Look, I want to work with you. I believe in your product. But I've pushed back internally to champion your solution over cheaper alternatives. I need you to make this easy for me to justify. Give me your absolute best terms - pricing, payment schedule, support, everything - and let's close this out. What's it going to take?",
      ];
      return closingResponses[Math.floor(Math.random() * closingResponses.length)];
    }
  }

  if (messageCount === 0 || lowerMessage.includes('hello') || lowerMessage.includes('hi ')) {
    const greetings = [
      "Hi there! Thanks for taking the time to speak with me today. I understand you're looking into solutions for improving your workflow efficiency. What's the biggest challenge your team is facing right now?",
      "Hello! I appreciate you meeting with me. Before we dive in, I'd love to understand your current situation better. What prompted you to start looking for a solution like ours?",
      "Hi! Great to connect with you. I've been researching your company and I'm excited to learn more about your needs. Can you tell me what's working well with your current setup and what could be improved?",
      "Good to meet you! I know your time is valuable, so let me start by asking: what would make this conversation most valuable for you? What are you hoping to accomplish?",
      "Hello! Thanks for agreeing to this conversation. I'd love to hear about what you're currently doing for [the problem area] and what's driving you to explore alternatives now.",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('expensive') || lowerMessage.includes('budget')) {
    const priceResponses = [
      "Great question about pricing! Our plans range from $299 to $999 per month depending on your needs. But before we dive into numbers, let me ask: what does your current process cost you in time and resources? I want to make sure we're comparing apples to apples. Most clients find we actually save them money within 4-6 months. What's your timeline for making a decision?",
      "I appreciate you being upfront about budget concerns. Here's the thing - our pricing reflects the value we deliver. Our clients typically see 40-60% reduction in operational costs within the first year. When you factor in the time savings, reduced errors, and increased productivity, the ROI is clear. What if I could show you an ROI calculator specific to your situation? Would that help?",
      "Pricing is definitely important! We offer several tiers starting at $299/month. However, I've found it's more valuable to first understand what you're trying to achieve and what it's worth to you. For example, if we could save your team 20 hours per week, what would that be worth to your organization? Let's work backwards from there.",
      "I understand budget is a key factor. Our solution ranges from $299-$999/month depending on features and scale. Many clients initially thought we were pricey, but after seeing a 230% ROI in year one, their perspective changed quickly. What's your current monthly cost including staff time, other tools, and inefficiencies? I bet we can actually reduce your total cost.",
      "Let's talk numbers! We have flexible pricing from $299-$999/month. But here's what I tell all my clients: don't think about what it costs - think about what it earns you. If we can help you close 20% more deals or save $10,000/month in operational costs, would $500/month be a good investment? What metrics matter most to your business?",
    ];
    return priceResponses[Math.floor(Math.random() * priceResponses.length)];
  }

  if (lowerMessage.includes('competitor') || lowerMessage.includes('alternative') || lowerMessage.includes('other option') || lowerMessage.includes('compared to')) {
    const competitorResponses = [
      "Great question! You're probably looking at DataFlow or SyncMaster. Here's the key difference: they charge per integration while we include unlimited. Their uptime is 99.5% vs our 99.99%, which means they're down 44 hours per year vs our 1 hour. Plus, we include 24/7 phone support while they're email only. But honestly, the best comparison is seeing us in action. Want to do a side-by-side test with your actual data?",
      "I love that you're doing your research! Most clients compare us with 3-4 vendors before choosing us. The main differentiators? We're the only ones offering real-time syncing (others batch every 15 mins), we include unlimited users (others charge per seat), and our security certifications are more comprehensive. More importantly, our NPS score is 72 vs industry average of 45. What features are most important to you?",
      "Smart to evaluate options! Here's what our clients who switched from competitors tell us: better performance, more responsive support, and easier to use. But don't take my word for it - I can connect you with 3 clients who switched from [competitor]. They can give you the unfiltered truth. Would that be helpful?",
      "Absolutely worth comparing! The main things that set us apart: unlimited integrations included, 99.99% uptime SLA, white-label options, and our 24/7 premium support. But the real difference is our customer success approach - you get a dedicated manager who knows your business and proactively helps optimize. Most competitors treat you like a ticket number. Want to experience the difference with a trial?",
      "Great that you're being thorough! I could spend an hour telling you why we're better, but here's the bottom line: we cost about 15% more than basic competitors but deliver 3x better results according to our client surveys. The question is: do you want cheap or do you want effective? If saving money is priority #1, we might not be the right fit. If getting results matters more, let's talk.",
    ];
    return competitorResponses[Math.floor(Math.random() * competitorResponses.length)];
  }

  if (lowerMessage.includes('think about') || lowerMessage.includes('need time') || lowerMessage.includes('not sure') || lowerMessage.includes('maybe')) {
    const thinkingResponses = [
      "Absolutely, this is an important decision and I want you to feel confident. Let me ask though - what specific aspects do you need to evaluate? Is it getting budget approval, technical feasibility, or comparing other options? I ask because I want to make sure you have everything you need to make the right decision. What if we set up a pilot with your actual data so you're deciding based on real results, not just a conversation?",
      "I totally respect that - no pressure at all. Can I ask what you need to think about specifically? In my experience, when someone says they need to think about it, they usually have a concern we haven't fully addressed. Is it the price, implementation timeline, or something else? I'd rather tackle that head-on right now than leave you uncertain.",
      "That's fair, and I appreciate your honesty. Here's my concern though: every week you wait, you're losing the benefits we discussed - that's roughly $X per week based on your current costs. What if we could de-risk this decision? We offer a 30-day trial where you can test with real data, and if it doesn't deliver results, you walk away. Does that make the decision easier?",
      "I understand - this isn't a small decision. Let me ask: if you could see this working perfectly with your team and your data, would you move forward? Or is there something else holding you back? I want to make sure we address the real concern, not just give you time to postpone. What's the worst case scenario you're worried about?",
      "Taking time to decide is smart! Quick question though: what would be different if you had more time? Usually, more time doesn't actually change anything - it just delays results. Here's what I suggest: let's run a 14-day pilot starting Monday. That way, you're making a decision based on proof, not promises. If it works, great. If not, no hard feelings. Sound reasonable?",
    ];
    return thinkingResponses[Math.floor(Math.random() * thinkingResponses.length)];
  }

  if (lowerMessage.includes('feature') || lowerMessage.includes('does it') || lowerMessage.includes('can it') || lowerMessage.includes('integration')) {
    const featureResponses = [
      "Great question! Yes, we absolutely support that. In fact, we have 200+ pre-built integrations including all the major platforms you're likely using. Our system handles real-time syncing, so changes in one platform appear everywhere instantly. We also offer custom API access if you need something specific. What platforms are most critical for you to integrate with?",
      "I'm glad you asked! That feature is one of our most popular. We built it specifically because clients like you requested it. It includes [detailed feature explanation], automated workflows, and custom reporting. Most clients are up and running with it in under 2 hours. Would you like me to show you a quick demo of how it works with a use case similar to yours?",
      "Excellent question - that's actually one of our core strengths! We support that natively, meaning it's built-in and doesn't require any add-ons or extra costs. Our clients use it for everything from [use case 1] to [use case 2]. The setup is straightforward, and we provide templates to get you started quickly. What specific workflow are you trying to optimize?",
      "Yes! We not only support that, but we take it a step further with [advanced capability]. This is an area where we really shine compared to competitors. We've processed over 10 billion transactions using this feature without issues. Our customers tell us this alone justifies the investment. Want to see it in action with your type of data?",
      "That's a smart question to ask! We handle that through [explanation of approach]. The key advantage of our approach is [benefit]. It's also fully customizable, so if the out-of-box solution doesn't fit your exact need, we can configure it. In fact, we've set this up for companies much more complex than yours. What's your specific use case?",
    ];
    return featureResponses[Math.floor(Math.random() * featureResponses.length)];
  }

  if (lowerMessage.includes('implement') || lowerMessage.includes('setup') || lowerMessage.includes('how long') || lowerMessage.includes('timeline')) {
    const implementationResponses = [
      "Implementation is typically 10 business days from contract signature to go-live. Here's how it breaks down: Days 1-3 we handle data migration and system config, Days 4-6 we train your team, Days 7-9 we run parallel with your current system, Day 10 you're fully live. We handle 90% of the work, and you get a dedicated implementation manager. Our fastest client went live in 3 days. Does your team have any specific timing constraints?",
      "Great question about timeline! Most clients are fully operational within 2 weeks. We've refined our process to minimize disruption - you'll spend maybe 5-6 hours total in meetings and training. We do all the heavy lifting: data migration, configuration, testing, and validation. Plus, we can work around your schedule, including weekends if needed. When would you ideally want to be up and running?",
      "Implementation is much simpler than you'd expect! We've done this hundreds of times, so we have it down to a science. Average timeline is 10 days, but we've done implementations in as little as 48 hours for urgent needs. You get a dedicated project manager, step-by-step plan, and 24/7 support during rollout. We also guarantee zero downtime during transition. What's driving your timeline - is this urgent?",
      "Let me walk you through our proven process: Week 1 - Discovery and data mapping, Week 2 - Migration and configuration, Week 3 - Training and parallel testing, Week 4 - Full launch with white-glove support. That said, we can accelerate if needed. We once implemented for a 500-person company in 5 days because of a crisis. What's your ideal go-live date?",
      "Implementation averages 10 business days, but here's what really matters: you're productive from day one because we set you up with immediate wins. We focus on getting your core workflows running first, then optimize from there. You'll have a dedicated Customer Success Manager for 90 days post-launch to ensure everything runs smoothly. What aspects of implementation concern you most?",
    ];
    return implementationResponses[Math.floor(Math.random() * implementationResponses.length)];
  }

  if (lowerMessage.includes('security') || lowerMessage.includes('safe') || lowerMessage.includes('protect') || lowerMessage.includes('breach') || lowerMessage.includes('compliance')) {
    const securityResponses = [
      "Security is exactly why companies choose us. We use military-grade 256-bit encryption both in transit and at rest. We're SOC 2 Type II certified, GDPR compliant, and HIPAA ready. Our data centers have physical security that rivals Fort Knox, and we've never had a breach in 8 years. Plus, you maintain complete control - you can set geo-fencing, custom access rules, and MFA. Want to speak with our security team directly for a deep dive?",
      "I'm glad you brought that up - security is non-negotiable for us. Here's our approach: bank-level encryption, annual third-party security audits, 24/7 threat monitoring, and automatic security patches. We're certified for SOC 2, GDPR, HIPAA, and ISO 27001. More importantly, our data centers are more secure than 99% of on-premise setups. We can provide our full security documentation. What specific compliance requirements do you have?",
      "Security is our top priority! Every client gets: 256-bit encryption, SOC 2 Type II compliance, role-based access control, audit logs for everything, and automatic backups every 4 hours. We also have a $5 million cyber insurance policy and have passed security audits from Fortune 500 companies. Our penetration tests happen quarterly. Would you like our security white paper or a call with our Chief Security Officer?",
      "Excellent question! Here's our security posture: encrypted at all times, zero-knowledge architecture (we can't access your data even if we wanted to), multi-region redundancy, DDoS protection, and continuous monitoring. We're also compliant with every major framework: SOC 2, GDPR, CCPA, HIPAA. Fun fact: three of the world's largest banks use us. Does your organization have specific security requirements I should know about?",
      "Security is where we really shine! We've invested heavily: dedicated security team, bug bounty program, annual audits by Big 4 firms, and we're certified for SOC 2 Type II, ISO 27001, and GDPR. We also offer single sign-on, advanced MFA, and you can keep your data in specific geographic regions if required. Our track record speaks for itself - 8 years, zero breaches, and clients in heavily regulated industries trust us with their most sensitive data.",
    ];
    return securityResponses[Math.floor(Math.random() * securityResponses.length)];
  }

  if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('training') || lowerMessage.includes('learn')) {
    const supportResponses = [
      "Support is where we differentiate ourselves! You get 24/7 phone, chat, and email support with 15-minute response times. Plus, every client gets a dedicated Customer Success Manager who knows your business and proactively reaches out. We also provide unlimited training - live sessions, recorded videos, interactive tutorials, and in-app guidance. Our support NPS is 85, which is exceptional for software. When you need help, we're there immediately.",
      "We take support extremely seriously! Here's what you get: dedicated Customer Success Manager for 90 days, 24/7 technical support, unlimited training sessions, comprehensive knowledge base with 500+ articles, video tutorials, and quarterly business reviews. Our average response time is under 15 minutes, and our resolution rate on first contact is 87%. Unlike competitors who charge for support, everything is included. Sound good?",
      "Training and support are included at no extra cost! You'll get: personalized onboarding for your team, unlimited live training sessions, access to our customer community with 5,000+ users, monthly webinars on best practices, and a dedicated Slack channel with our team. We also have in-app contextual help, so guidance appears exactly when you need it. Most users are productive within 1 hour. What's your team's technical comfort level?",
      "Support is probably our strongest differentiator! Every client gets a dedicated Customer Success Manager (not shared across 100 companies - actually dedicated), 24/7 emergency support, proactive check-ins, and quarterly strategy sessions. We also monitor your usage and reach out if we see optimization opportunities. Think of us as an extension of your team. Our retention rate is 97% largely because of our support quality.",
      "We've designed our support to be exceptional! You get multiple channels: 24/7 phone/chat/email, dedicated Customer Success Manager, comprehensive documentation, video library with 200+ tutorials, user community forum, and quarterly training workshops. We also offer custom training for your specific workflows. Our support team has an average tenure of 4 years, so you're getting experienced people who actually know the product. Questions are answered in minutes, not days.",
    ];
    return supportResponses[Math.floor(Math.random() * supportResponses.length)];
  }

  if (lowerMessage.includes('roi') || lowerMessage.includes('return') || lowerMessage.includes('worth it') || lowerMessage.includes('justify')) {
    const roiResponses = [
      "ROI is the most important metric! Our clients typically see ROI in 4-6 months. Here's the math: if your team of 10 saves just 2 hours per week (conservative estimate), that's 1,040 hours annually. At $50/hour, that's $52,000 in savings. Our highest tier is $12,000/year. That's a 333% ROI, and I haven't even counted error reduction, faster processing, or better decision-making. Want me to run a custom ROI calculation for your specific situation?",
      "Let's talk numbers! Average client ROI is 230% in year one. They save 15-20 hours per week in manual work, reduce errors by 95%, and make decisions 3x faster. When you calculate the cost of your current process - staff time, tools, errors, missed opportunities - most clients find we actually cost less than what they're doing now. Plus, you see benefits immediately, not months later. Should we build a business case together?",
      "Great question! Here's how our clients think about ROI: Current process cost (time + tools + errors) vs. Our solution cost + time savings + error reduction + faster decisions. When you run those numbers, ROI is typically achieved in Quarter 2. We have clients who saved over $500,000 in year one. Obviously results vary, but every single client has achieved positive ROI within 12 months. What does your current process cost you monthly?",
      "ROI is exactly why companies buy from us! Let me give you real numbers: our average client saves 18 hours per week in manual work (valued at $45,000 annually), reduces errors saving another $30,000, and improves decision speed creating approximately $25,000 in opportunity value. That's $100,000 in annual value for a $15,000 investment. And those are conservative estimates. Want to see case studies with actual ROI numbers from companies in your industry?",
      "Justifying the investment is crucial, I get it! Here's our typical ROI story: Implementation month - see immediate time savings. Month 2-3 - see error reduction and productivity gains. Month 4-6 - achieve full ROI. By month 12 - 200-300% return. We also provide an ROI tracking dashboard so you can measure actual impact in real-time. Plus, if you don't see meaningful improvement in 90 days, we have a money-back guarantee. Interested in seeing our ROI calculator?",
    ];
    return roiResponses[Math.floor(Math.random() * roiResponses.length)];
  }

  const generalResponses = [
    "That's a great point! Let me ask you this: if we could guarantee that this solves your [problem] and delivers [benefit], what would prevent you from moving forward? I want to make sure we address any concerns head-on.",
    "I appreciate you sharing that. Based on what you've told me, it sounds like [pain point] is really impacting your [business area]. Our clients in similar situations typically see [specific result] within [timeframe]. Would that kind of outcome be valuable to you?",
    "That makes sense. Let me connect the dots here - you mentioned [earlier concern], and this directly addresses that by [solution]. We've helped [number] companies just like yours achieve [result]. What questions do you still have?",
    "I hear you on that. Here's what I'd recommend: let's set up a quick pilot with your actual data. That way, you'll see concrete results, not just promises. We can have you set up by end of week, and you'll know within 14 days if this is the right fit. Does that sound reasonable?",
    "Interesting - tell me more about that. What I'm hearing is [restate their point]. Is that accurate? If so, here's how we typically handle that situation: [solution approach]. Would that work for your team?",
    "That's exactly the kind of feedback I need! Let me address that directly: [relevant response to their concern]. We've actually built specific features around this because clients like you told us it was important. Want to see how it works in practice?",
    "I understand where you're coming from. Let me ask a different question: what would success look like for you 90 days from now? If we can help you get there, would this be a good fit? Let's work backwards from your ideal outcome.",
    "That's a valid concern, and I don't want to minimize it. Here's how we've addressed this for other clients: [solution]. Plus, we provide [support/guarantee] so you're not taking on all the risk. Would that address your concern?",
    "Good question! Let me share how a client similar to you handled this exact situation: [brief case study]. They were skeptical at first too, but after seeing [specific result], they expanded to [outcome]. Want me to connect you with them so you can hear it directly?",
    "I appreciate your honesty. It sounds like [summary of their position]. If I'm understanding correctly, the main things you need to see are [list requirements]. If we can demonstrate those, are you ready to move forward, or is there something else we need to address?",
  ];

  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}
