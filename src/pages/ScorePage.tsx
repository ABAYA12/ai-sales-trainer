import { useState, useEffect } from 'react';
import { Trophy, AlertCircle, CheckCircle, ArrowRight, TrendingUp, Target } from 'lucide-react';
import { supabase, Simulation } from '../lib/supabase';

interface ScorePageProps {
  simulationId: string;
  onDashboard: () => void;
  onTryAgain: () => void;
}

export default function ScorePage({ simulationId, onDashboard, onTryAgain }: ScorePageProps) {
  const [session, setSession] = useState<Simulation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    const { data, error } = await supabase
      .from('simulations')
      .select('*')
      .eq('id', simulationId)
      .maybeSingle();

    if (data && !error) {
      setSession(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mb-4"></div>
          <p className="text-slate-600 text-lg font-medium">Analyzing your performance...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 max-w-md text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Session Not Found</h2>
          <p className="text-slate-600 mb-6">We couldn't find your practice session. Please try again.</p>
          <button
            onClick={onDashboard}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-50 border-emerald-200';
    if (score >= 60) return 'bg-amber-50 border-amber-200';
    return 'bg-red-50 border-red-200';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Exceptional';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Very Good';
    if (score >= 60) return 'Good';
    return 'Keep Practicing';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "Outstanding performance! You're closing deals like a pro.";
    if (score >= 80) return "Excellent work! You have strong sales fundamentals.";
    if (score >= 70) return "Very good! A few more sessions and you'll be closing consistently.";
    if (score >= 60) return "Good effort! Focus on objection handling and confidence.";
    return "Keep practicing! Every session makes you better.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <nav className="border-b bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Performance Report</h1>
            </div>
            <button
              onClick={onDashboard}
              className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className={`bg-white rounded-3xl shadow-2xl border-4 ${getScoreBg(session.score)} p-12 text-center`}>
          <Trophy className={`h-20 w-20 mx-auto mb-6 ${getScoreColor(session.score)}`} />
          <h2 className="text-5xl font-bold text-slate-900 mb-3">
            {session.score}<span className="text-3xl text-slate-500">/100</span>
          </h2>
          <p className={`text-2xl font-semibold mb-2 ${getScoreColor(session.score)}`}>
            {getScoreLabel(session.score)}
          </p>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            {getScoreMessage(session.score)}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
            Detailed Breakdown
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-slate-600 font-medium">Clarity</span>
                <span className="font-bold text-slate-900">{session.clarity_score}/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    session.clarity_score >= 75 ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                    session.clarity_score >= 60 ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                  style={{ width: `${session.clarity_score}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-slate-600 font-medium">Confidence</span>
                <span className="font-bold text-slate-900">{session.confidence_score}/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    session.confidence_score >= 75 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    session.confidence_score >= 60 ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                  style={{ width: `${session.confidence_score}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-slate-600 font-medium">Objection Handling</span>
                <span className="font-bold text-slate-900">{session.objection_handling_score}/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    session.objection_handling_score >= 75 ? 'bg-gradient-to-r from-violet-500 to-violet-600' :
                    session.objection_handling_score >= 60 ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                  style={{ width: `${session.objection_handling_score}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-slate-600 font-medium">Closing Ability</span>
                <span className="font-bold text-slate-900">{session.closing_score}/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    session.closing_score >= 75 ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                    session.closing_score >= 60 ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                    'bg-gradient-to-r from-red-500 to-red-600'
                  }`}
                  style={{ width: `${session.closing_score}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {session.score >= 70 ? (
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">What You Did Well</h3>
                <p className="text-emerald-800 leading-relaxed mb-4">
                  {session.feedback}
                </p>
                <ul className="space-y-2 text-emerald-800">
                  {session.clarity_score >= 75 && <li className="flex items-start gap-2"><span>✓</span><span>Clear and articulate communication</span></li>}
                  {session.confidence_score >= 75 && <li className="flex items-start gap-2"><span>✓</span><span>Confident and professional tone</span></li>}
                  {session.objection_handling_score >= 75 && <li className="flex items-start gap-2"><span>✓</span><span>Skillful objection handling</span></li>}
                  {session.closing_score >= 75 && <li className="flex items-start gap-2"><span>✓</span><span>Strong closing techniques</span></li>}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Areas for Improvement</h3>
                <p className="text-amber-800 leading-relaxed mb-4">
                  {session.feedback}
                </p>
                <ul className="space-y-2 text-amber-800">
                  {session.clarity_score < 70 && <li className="flex items-start gap-2"><span>→</span><span>Work on making your pitch more concise and structured</span></li>}
                  {session.confidence_score < 70 && <li className="flex items-start gap-2"><span>→</span><span>Practice to build confidence in your delivery</span></li>}
                  {session.objection_handling_score < 70 && <li className="flex items-start gap-2"><span>→</span><span>Prepare responses to common objections in advance</span></li>}
                  {session.closing_score < 70 && <li className="flex items-start gap-2"><span>→</span><span>Always end with a clear call-to-action or next step</span></li>}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Next Steps to Improve</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Practice this scenario again to reinforce your strengths and work on weak areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Review common objections before your next practice session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Try a different scenario to diversify your skills across various sales situations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">4.</span>
                  <span>Set a goal to improve your overall score by 10 points in your next practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onTryAgain}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-bold text-lg shadow-xl flex items-center justify-center gap-2 group"
          >
            Practice Again
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onDashboard}
            className="flex-1 px-8 py-4 border-2 border-emerald-600 text-emerald-700 bg-white rounded-xl hover:bg-emerald-50 transition-all font-bold text-lg shadow-lg"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
