import { useState, useEffect, useRef } from 'react';
import { Send, Square, MessageCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { supabase, Scenario } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { generateAIResponse } from '../lib/aiResponses';
import LiveCoachingPanel from '../components/LiveCoachingPanel';

interface SimulationPageProps {
  scenario: Scenario;
  onComplete: (simulationId: string) => void;
  onBack?: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export default function SimulationPage({ scenario, onComplete, onBack }: SimulationPageProps) {
  const { profile, refreshProfile } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [ending, setEnding] = useState(false);
  const [simulationId, setSimulationId] = useState<string>('');
  const [startTime] = useState(Date.now());
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSession();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initSession = async () => {
    if (!profile?.id) return;

    const today = new Date().toISOString().split('T')[0];
    const needsReset = profile.last_simulation_date !== today;

    if (needsReset) {
      await supabase
        .from('profiles')
        .update({
          simulations_today: 1,
          last_simulation_date: today,
        })
        .eq('id', profile.id);
    } else {
      await supabase
        .from('profiles')
        .update({
          simulations_today: (profile.simulations_today || 0) + 1,
        })
        .eq('id', profile.id);
    }
    await refreshProfile();

    const tempId = crypto.randomUUID();
    setSimulationId(tempId);

    const greeting = generateContextualGreeting();
    const aiMessage: Message = {
      role: 'assistant',
      content: greeting,
      timestamp: new Date().toISOString(),
    };
    setMessages([aiMessage]);
  };

  const generateContextualGreeting = () => {
    const scenarioLower = scenario.title.toLowerCase();

    if (scenarioLower.includes('cold call')) {
      const greetings = [
        "Hello? Who is this?",
        "Yeah, what can I do for you?",
        "This is Sarah. How did you get my number?",
        "I'm in a meeting. What's this about?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (scenarioLower.includes('discovery')) {
      const greetings = [
        "Thanks for taking the time. So what did you want to discuss?",
        "Hi, I've got about 20 minutes. What questions do you have?",
        "Good morning! I'm curious to learn more about what you're offering.",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (scenarioLower.includes('objection')) {
      const greetings = [
        "I'll be honest, I'm skeptical. Convince me why I should care.",
        "We've tried solutions like this before and they didn't work. What makes yours different?",
        "Before you start, you should know we have a very limited budget.",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (scenarioLower.includes('pricing') || scenarioLower.includes('negotiation')) {
      const greetings = [
        "Alright, let's talk numbers. What's your pricing?",
        "I like what I've seen so far, but I need to know if we can afford this.",
        "Our budget for this is pretty tight. What can you do for us?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    return "Hi there! What can I help you with today?";
  };


  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const aiResponse = generateAIResponse(input, updatedMessages, scenario.description);
      const aiMessage: Message = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString(),
      };

      setMessages([...updatedMessages, aiMessage]);
      setLoading(false);
    }, 1200 + Math.random() * 1800);
  };

  const saveSession = async (): Promise<string | null> => {
    if (!profile?.id) {
      return null;
    }

    const userMessageCount = messages.filter(m => m.role === 'user').length;
    if (userMessageCount === 0) {
      return null;
    }

    try {
      const transcript = messages.map(m => `${m.role === 'user' ? 'You' : 'Customer'}: ${m.content}`).join('\n\n');
      const messageCount = userMessageCount;

      const baseScore = Math.min(55 + (messageCount * 6), 95);
      const clarityScore = Math.floor(Math.random() * 25) + 65;
      const confidenceScore = Math.floor(Math.random() * 25) + 65;
      const objectionScore = Math.floor(Math.random() * 25) + 60;
      const closingScore = messageCount >= 4 ? Math.floor(Math.random() * 25) + 70 : Math.floor(Math.random() * 20) + 50;

      const feedback = messageCount >= 5
        ? "Excellent work! You maintained a professional conversation and handled objections skillfully."
        : messageCount >= 3
        ? "Good effort! Try to ask more probing questions to deeply understand customer needs."
        : "Keep practicing! Focus on building rapport and active listening.";

      const sessionData = {
        user_id: profile.id,
        scenario_id: scenario.id,
        transcript,
        score: baseScore,
        clarity_score: clarityScore,
        confidence_score: confidenceScore,
        objection_handling_score: objectionScore,
        closing_score: closingScore,
        feedback,
      };

      const { data, error } = await supabase
        .from('simulations')
        .insert(sessionData)
        .select()
        .maybeSingle();

      if (error) {
        console.error('Database error saving simulation:', error);
        console.error('Session data attempted:', { ...sessionData, transcript: '[truncated]' });
        return null;
      }

      if (!data) {
        console.error('No data returned after insert - possible RLS policy issue');
        return null;
      }

      console.log('Session saved successfully:', data.id);
      return data.id;
    } catch (err: any) {
      console.error('Exception during save:', err);
      return null;
    }
  };

  const handleEnd = async () => {
    if (ending) return;

    const userMessageCount = messages.filter(m => m.role === 'user').length;
    if (userMessageCount === 0) {
      alert('Please send at least one message before ending the session.');
      return;
    }

    setEnding(true);
    const sessionId = await saveSession();
    setEnding(false);

    if (sessionId) {
      onComplete(sessionId);
    } else {
      alert('Failed to save your session. Please check your connection and try again.');
    }
  };

  const handleBack = () => {
    if (!onBack) return;

    const userMessageCount = messages.filter(m => m.role === 'user').length;

    if (userMessageCount > 0) {
      setShowSaveDialog(true);
    } else {
      onBack();
    }
  };

  const handleSaveAndBack = async () => {
    setShowSaveDialog(false);
    setEnding(true);
    const sessionId = await saveSession();
    setEnding(false);

    if (!sessionId) {
      alert('Failed to save your session. Please check your connection.');
    }

    if (onBack) {
      onBack();
    }
  };

  const handleBackWithoutSave = () => {
    setShowSaveDialog(false);
    if (onBack) {
      onBack();
    }
  };

  const userMessages = messages.filter(m => m.role === 'user').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex flex-col">
      <nav className="border-b bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={handleBack}
                  disabled={ending}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {ending ? 'Saving...' : '← Back to Dashboard'}
                </button>
              )}
              <div>
                <h1 className="text-lg font-bold text-slate-900">{scenario.title}</h1>
                <p className="text-xs text-slate-600">{scenario.difficulty} • {userMessages} exchanges</p>
              </div>
            </div>
            <button
              onClick={handleEnd}
              disabled={ending}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-bold flex items-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {ending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Saving Your Score...
                </>
              ) : (
                <>
                  <Square className="h-5 w-5" />
                  End & View Score
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom duration-300`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-md ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-900 border border-slate-200'
                  }`}
                >
                  <p className="text-xs font-semibold mb-2 opacity-80">
                    {message.role === 'user' ? 'You' : 'AI Customer'}
                  </p>
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-slate-100 border border-slate-200 px-5 py-3 rounded-2xl shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-200 p-4 bg-slate-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder="Type your response..."
                className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 text-slate-900 placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-slate-500 text-xs mt-2 text-center">
              Press Enter to send • Be professional and persuasive
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {messages.length >= 2 && (
            <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Live AI Coaching
              </h3>
              <LiveCoachingPanel
                userMessage={messages[messages.length - 2]?.content || ''}
                aiResponse={messages[messages.length - 1]?.content || ''}
                messageCount={userMessages}
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              Scenario Details
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-600 text-sm mb-1 font-medium">Customer Type</p>
                <p className="text-slate-900">{scenario.customer_persona}</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-1 font-medium">Difficulty Level</p>
                <span className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-lg text-emerald-700 text-sm font-semibold capitalize">
                  {scenario.difficulty}
                </span>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-1 font-medium">Exchanges</p>
                <p className="text-slate-900 font-bold text-2xl">{userMessages}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-2xl p-6">
            <h4 className="font-bold text-amber-900 text-sm mb-3 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Common Objections
            </h4>
            <ul className="space-y-2">
              {scenario.objections.slice(0, 3).map((obj, idx) => (
                <li key={idx} className="text-amber-900 text-sm flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
            <h4 className="font-bold text-blue-900 text-sm mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Best Practices
            </h4>
            <ul className="space-y-2 text-blue-900 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Ask open-ended questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Listen actively to responses</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Address concerns confidently</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Always close with clear next steps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Save Dialog Modal */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Save Your Progress?
            </h3>
            <p className="text-slate-600 mb-6">
              You have <span className="font-bold text-emerald-600">{userMessages} exchange{userMessages > 1 ? 's' : ''}</span> in this session.
              Would you like to save your progress before going back to the dashboard?
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleSaveAndBack}
                disabled={ending}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {ending ? 'Saving...' : 'Save & Go Back'}
              </button>
              <button
                onClick={handleBackWithoutSave}
                disabled={ending}
                className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Don't Save
              </button>
            </div>
            <button
              onClick={() => setShowSaveDialog(false)}
              disabled={ending}
              className="w-full mt-3 px-4 py-2 text-slate-500 hover:text-slate-700 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
