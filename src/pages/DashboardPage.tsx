import { useState, useEffect } from 'react';
import { TrendingUp, Award, Target, Play, BarChart3, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';
import { supabase, Simulation } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import AchievementsPanel from '../components/AchievementsPanel';
import { calculateAchievements } from '../lib/achievements';

interface DashboardPageProps {
  onStartNew: () => void;
  onLogout: () => void;
}

export default function DashboardPage({ onStartNew, onLogout }: DashboardPageProps) {
  const { profile } = useAuth();
  const [sessions, setSessions] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, [profile?.id]);

  const fetchSessions = async () => {
    if (!profile?.id) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('simulations')
      .select('*')
      .eq('user_id', profile.id)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching sessions:', error);
      setLoading(false);
      return;
    }

    if (data) {
      console.log(`Loaded ${data.length} simulation sessions for user`);
      setSessions(data);
      if (data.length > 0) setShowTutorial(false);
    }
    setLoading(false);
  };

  const avgScore = sessions.length > 0
    ? Math.round(sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length)
    : 0;

  const recentScores = sessions.slice(0, 5).map(s => s.score);
  const trend = recentScores.length >= 2
    ? recentScores[0] - recentScores[recentScores.length - 1]
    : 0;

  const totalSessions = sessions.length;
  const isPro = profile?.is_pro || false;
  const sessionsLeft = isPro ? 999 : Math.max(0, 6 - (profile?.simulations_today || 0));
  const achievements = calculateAchievements(sessions);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const handleUpgrade = () => {
    setShowUpgradeDialog(true);
  };

  const confirmUpgrade = async () => {
    if (!profile?.id) return;

    // Update profile to Pro status
    const { error } = await supabase
      .from('profiles')
      .update({
        is_pro: true,
        pro_upgraded_at: new Date().toISOString(),
      })
      .eq('id', profile.id);

    if (error) {
      console.error('Error upgrading to Pro:', error);
      return;
    }

    setShowUpgradeDialog(false);
    setShowSuccessMessage(true);

    // Reload after showing success message
    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                PitchPilot
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="text-sm text-slate-600">Welcome,</span>
                <span className="text-sm font-semibold text-emerald-700">{profile?.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showTutorial && totalSessions === 0 && (
          <div className="mb-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative">
              <button
                onClick={() => setShowTutorial(false)}
                className="absolute top-0 right-0 text-white/80 hover:text-white"
              >
                ✕
              </button>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Welcome to PitchPilot!</h3>
                  <p className="text-emerald-50 mb-4">
                    Ready to master your sales skills? Here's how it works:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="font-semibold mb-1">1. Choose Scenario</div>
                      <div className="text-sm text-emerald-100">Pick from cold calls, objection handling, pricing discussions & more</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="font-semibold mb-1">2. Practice with AI</div>
                      <div className="text-sm text-emerald-100">Have real conversations with AI customers that challenge you</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="font-semibold mb-1">3. Get Instant Feedback</div>
                      <div className="text-sm text-emerald-100">See your scores and track improvement over time</div>
                    </div>
                  </div>
                  <button
                    onClick={onStartNew}
                    className="px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold inline-flex items-center gap-2"
                  >
                    Start Your First Practice
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Performance Dashboard</h1>
          <p className="text-slate-600 text-lg">Track your progress and become a sales champion</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">Average Score</span>
              </div>
              <p className="text-4xl font-bold text-emerald-600">{avgScore}</p>
              <p className="text-sm text-slate-500 mt-1">out of 100</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">Trend</span>
              </div>
              <p className={`text-4xl font-bold ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {trend >= 0 ? '+' : ''}{trend}
              </p>
              <p className="text-sm text-slate-500 mt-1">last 5 sessions</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-violet-600" />
                </div>
                <span className="text-sm font-medium text-slate-600">Total Practice</span>
              </div>
              <p className="text-4xl font-bold text-violet-600">{totalSessions}</p>
              <p className="text-sm text-slate-500 mt-1">sessions completed</p>
            </div>
          </div>

          <button
            onClick={sessionsLeft > 0 ? onStartNew : handleUpgrade}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl shadow-xl p-8 transition-all duration-300 transform hover:scale-105 text-white"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="h-20 w-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Play className="h-10 w-10" />
              </div>
              <div className="text-center">
                <p className="font-bold text-xl mb-2">
                  {sessionsLeft > 0 ? 'Start Practice' : 'Daily Limit Reached'}
                </p>
                <p className="text-emerald-100 text-sm">
                  {sessionsLeft > 0 ? `${sessionsLeft} sessions left today` : 'Upgrade to Pro for unlimited access'}
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 p-6 bg-gradient-to-r from-emerald-50 to-white">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-emerald-600" />
                  Recent Practice Sessions
                </h2>
              </div>

              {loading ? (
                <div className="p-12 text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                </div>
              ) : sessions.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No practice sessions yet</h3>
                  <p className="text-slate-600 mb-6">Start your first AI role-play session to see your progress here</p>
                  <button
                    onClick={onStartNew}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-semibold shadow-lg"
                  >
                    Start Your First Practice
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-slate-200">
                  {sessions.map((session) => (
                    <div key={session.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <span className={`text-3xl font-bold px-4 py-2 rounded-xl border-2 ${getScoreColor(session.score)}`}>
                              {session.score}
                            </span>
                            <div>
                              <p className="font-semibold text-slate-900">Overall Performance</p>
                              <p className="text-slate-500 text-sm">{formatDate(session.created_at)}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                              <span className="text-emerald-600 text-xs font-medium block mb-1">Clarity</span>
                              <span className="font-bold text-emerald-700 text-lg">{session.clarity_score}</span>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                              <span className="text-blue-600 text-xs font-medium block mb-1">Confidence</span>
                              <span className="font-bold text-blue-700 text-lg">{session.confidence_score}</span>
                            </div>
                            <div className="bg-violet-50 rounded-lg p-3 border border-violet-100">
                              <span className="text-violet-600 text-xs font-medium block mb-1">Objections</span>
                              <span className="font-bold text-violet-700 text-lg">{session.objection_handling_score}</span>
                            </div>
                            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                              <span className="text-amber-600 text-xs font-medium block mb-1">Closing</span>
                              <span className="font-bold text-amber-700 text-lg">{session.closing_score}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 text-sm font-medium">Today's Progress</span>
                    <span className="text-slate-900 font-bold">
                      {isPro ? 'Pro - Unlimited' : `${profile?.simulations_today || 0}/6`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all"
                      style={{ width: `${Math.min(((profile?.simulations_today || 0) / 6) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600 font-medium">Total Sessions</span>
                  <span className="text-slate-900 font-bold text-lg">{totalSessions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Best Score</span>
                  <span className="text-emerald-600 font-bold text-lg">
                    {sessions.length > 0 ? Math.max(...sessions.map(s => s.score)) : 0}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-900 mb-2">Pro Tip</h4>
                  <p className="text-emerald-800 text-sm leading-relaxed">
                    Practice daily to build muscle memory! Top performers complete at least 10 role-plays per week.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Progress
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                {avgScore >= 80
                  ? "Outstanding! You're performing at an elite level. Keep it up!"
                  : avgScore >= 60
                  ? "Good progress! Focus on objection handling to reach the next level."
                  : totalSessions === 0
                  ? "Start your first practice session to begin tracking your improvement!"
                  : "Keep going! Every session makes you sharper."}
              </p>
              {recentScores.length >= 2 && (
                <div className="flex items-center gap-2 mt-3 text-sm font-semibold">
                  <TrendingUp className={`h-4 w-4 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`} />
                  <span className={trend >= 0 ? 'text-green-700' : 'text-red-700'}>
                    {trend >= 0 ? `+${trend} points improvement!` : `${trend} points - practice more!`}
                  </span>
                </div>
              )}
            </div>

            <AchievementsPanel achievements={achievements} />
          </div>
        </div>
      </div>

      {showUpgradeDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Upgrade to Pro</h2>
            <p className="text-slate-600 mb-6">
              Get unlimited practice sessions, advanced analytics, and access to all premium scenarios for just $9/month.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-emerald-900 mb-2">Pro Features:</h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Unlimited daily simulations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Access to all premium scenarios
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Advanced performance analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Exportable scripts & playbooks
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowUpgradeDialog(false)}
                className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmUpgrade}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-semibold shadow-lg"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-200">
            <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Upgrade Successful!</h2>
            <p className="text-slate-600 mb-4">
              You now have unlimited access to PitchPilot Pro.
            </p>
            <p className="text-sm text-emerald-600 font-medium">
              Refreshing your dashboard...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
