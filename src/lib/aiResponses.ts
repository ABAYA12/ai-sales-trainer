import salesKnowledge from '../data/salesKnowledge.json';

function getScenarioType(scenarioContext: string): string {
  const lower = scenarioContext.toLowerCase();
  if (lower.includes('cold call')) return 'cold_call';
  if (lower.includes('discovery') || lower.includes('enterprise')) return 'discovery';
  if (lower.includes('demo') || lower.includes('follow')) return 'demo_followup';
  if (lower.includes('price') || lower.includes('objection handling')) return 'price_objection';
  if (lower.includes('negotiation') || lower.includes('deal push') || lower.includes('last-minute')) return 'negotiation';
  return 'general';
}

function selectRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateAIResponse(
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>,
  scenarioContext: string
): string {
  const messageCount = conversationHistory.filter(m => m.role === 'user').length;
  const lowerMessage = userMessage.toLowerCase();
  const scenarioType = getScenarioType(scenarioContext);

  // FIRST MESSAGE - Greeting
  if (messageCount === 1) {
    const greetingKey = scenarioType as keyof typeof salesKnowledge.greetings;
    const greetings = salesKnowledge.greetings[greetingKey] || salesKnowledge.greetings.general;
    return selectRandom(greetings);
  }

  // Detect user intent based on keywords
  const isGreeting = /^(hi|hello|hey|good morning|good afternoon|greetings)/i.test(userMessage.trim());
  const isIntroduction = lowerMessage.includes('my name') || lowerMessage.includes('i am') || lowerMessage.includes("i'm") || (lowerMessage.includes('from') && lowerMessage.includes('company'));
  const isAskingNeed = lowerMessage.includes('what') && (lowerMessage.includes('need') || lowerMessage.includes('looking for') || lowerMessage.includes('challenge') || lowerMessage.includes('problem'));
  const isExplainingSolution = lowerMessage.includes('help') || lowerMessage.includes('solution') || lowerMessage.includes('offer') || lowerMessage.includes('provide');
  const isDiscussingFeatures = lowerMessage.includes('feature') || lowerMessage.includes('capability') || lowerMessage.includes('function') || lowerMessage.includes('does it');
  const isPricing = lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('expensive') || lowerMessage.includes('budget') || lowerMessage.includes('$');
  const isValue = lowerMessage.includes('value') || lowerMessage.includes('roi') || lowerMessage.includes('save') || lowerMessage.includes('benefit');
  const isCompetitor = lowerMessage.includes('competitor') || lowerMessage.includes('alternative') || lowerMessage.includes('other option') || lowerMessage.includes('vs');
  const isTimeline = lowerMessage.includes('when') || lowerMessage.includes('how long') || lowerMessage.includes('timeline') || lowerMessage.includes('implement');
  const isSecurity = lowerMessage.includes('security') || lowerMessage.includes('secure') || lowerMessage.includes('compliance') || lowerMessage.includes('gdpr') || lowerMessage.includes('soc');
  const isSupport = lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('training') || lowerMessage.includes('onboarding');
  const isDiscount = lowerMessage.includes('discount') || lowerMessage.includes('lower') || lowerMessage.includes('reduce') || lowerMessage.includes('cheaper');
  const isPaymentTerms = lowerMessage.includes('payment') || lowerMessage.includes('terms') || lowerMessage.includes('monthly') || lowerMessage.includes('quarterly');
  const isSLA = lowerMessage.includes('sla') || lowerMessage.includes('uptime') || lowerMessage.includes('guarantee') || lowerMessage.includes('availability');
  const isTrial = lowerMessage.includes('trial') || lowerMessage.includes('test') || lowerMessage.includes('demo') || lowerMessage.includes('try');
  const isPositive = lowerMessage.includes('interested') || lowerMessage.includes('sounds good') || lowerMessage.includes('like') || lowerMessage.includes('let\'s');
  const isNegative = lowerMessage.includes('not interested') || lowerMessage.includes('too busy') || lowerMessage.includes('no thanks');

  // Handle based on intent
  if (isGreeting) {
    return selectRandom(salesKnowledge.responses.introduce_yourself);
  }

  if (isIntroduction) {
    return selectRandom(salesKnowledge.responses.introduce_yourself);
  }

  if (isAskingNeed) {
    return selectRandom(salesKnowledge.responses.ask_about_needs);
  }

  if (isExplainingSolution && !isPricing) {
    return selectRandom(salesKnowledge.responses.explain_solution);
  }

  if (isDiscussingFeatures) {
    return selectRandom(salesKnowledge.responses.discuss_features);
  }

  if (isDiscount || (isPricing && scenarioType === 'price_objection')) {
    return selectRandom(salesKnowledge.responses.pricing_pushback);
  }

  if (isValue) {
    return selectRandom(salesKnowledge.responses.value_discussion);
  }

  if (isCompetitor) {
    return selectRandom(salesKnowledge.responses.competitor_comparison);
  }

  if (isTimeline && scenarioType === 'negotiation') {
    return selectRandom(salesKnowledge.responses.negotiation_timeline);
  }

  if (isTimeline) {
    return selectRandom(salesKnowledge.responses.timeline_concerns);
  }

  if (isSecurity) {
    return selectRandom(salesKnowledge.responses.security_compliance);
  }

  if (isSupport) {
    return selectRandom(salesKnowledge.responses.support_training);
  }

  if (isPaymentTerms) {
    return selectRandom(salesKnowledge.responses.negotiation_payment_terms);
  }

  if (isSLA) {
    return selectRandom(salesKnowledge.responses.negotiation_sla);
  }

  if (isTrial) {
    return selectRandom(salesKnowledge.responses.trial_request);
  }

  if (isPositive && messageCount >= 4) {
    return selectRandom(salesKnowledge.responses.closing_signals);
  }

  if (isPositive) {
    return selectRandom(salesKnowledge.responses.positive_interest);
  }

  if (isNegative) {
    return selectRandom(salesKnowledge.responses.objection_too_busy);
  }

  if (isPricing) {
    return selectRandom(salesKnowledge.responses.pricing_pushback);
  }

  // Late in conversation - push for close
  if (messageCount >= 5) {
    if (scenarioType === 'price_objection') {
      const closingResponses = [
        "Alright, I appreciate your honesty. But here's where we are: I have authority to approve up to a certain amount. Can we structure something that works within reasonable limits?",
        "Look, you've made a strong case for the value. I'm willing to move forward, but I need some concessions. Can you include premium support and throw in additional licenses?",
        "I'll level with you - I want to work with you. What's your absolute best offer, including everything - price, terms, training, support?",
        "We've been going back and forth. If you can guarantee no hidden costs and put it in writing, I think we can make this work."
      ];
      return selectRandom(closingResponses);
    }

    if (scenarioType === 'negotiation') {
      const closingResponses = [
        "We're close. If you can agree on quarterly payment terms and include premium support, I'll get this through legal by end of week.",
        "I need confirmation from your leadership that you're committed to our success, and a clause allowing us to exit after year one if needed.",
        "Almost there. Include premium support at no cost and commit to the integration within 90 days. Do that and we have a deal.",
        "Give me your absolute best terms - pricing, payment schedule, support, everything. Let's close this out."
      ];
      return selectRandom(closingResponses);
    }

    return selectRandom(salesKnowledge.responses.positive_interest);
  }

  // Mid-conversation defaults
  if (messageCount >= 3) {
    const midConvoResponses = [
      "That's interesting. But how does that actually work in practice? Give me a real example.",
      "I hear what you're saying, but I need more specifics. What results have your clients actually seen?",
      "Okay, that sounds reasonable. But what about [specific concern]? That's been a problem with other solutions.",
      "I'm following you. What would the timeline look like from contract to actually using this?",
      "Alright, I'm starting to see the value. But let's talk about the investment required."
    ];
    return selectRandom(midConvoResponses);
  }

  // Early conversation defaults
  const earlyResponses = [
    "Okay, I'm listening. Tell me more about how this works.",
    "Interesting. What makes your approach different from others?",
    "I see. How long have you been doing this?",
    "That's a good point. What else should I know?",
    "Walk me through your process. How would this work for us?"
  ];
  return selectRandom(earlyResponses);
}
