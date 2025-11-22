import { useState, useEffect } from 'react';
import { Phone, Users, MonitorPlay, Shield, Handshake, Target } from 'lucide-react';
import { supabase, Scenario } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface ScenarioPageProps {
  onSelectScenario: (scenario: Scenario) => void;
  onDashboard: () => void;
  onLogout: () => void;
}

const getScenarioIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('cold call')) return Phone;
  if (titleLower.includes('discovery') || titleLower.includes('enterprise')) return Users;
  if (titleLower.includes('demo') || titleLower.includes('follow')) return MonitorPlay;
  if (titleLower.includes('objection') || titleLower.includes('price concern')) return Shield;
  if (titleLower.includes('negotiation') || titleLower.includes('deal push')) return Handshake;
  return Target;
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'medium':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'hard':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

const getDifficultyStars = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy': return '⭐';
    case 'medium': return '⭐⭐';
    case 'hard': return '⭐⭐⭐';
    default: return '⭐';
  }
};

export default function ScenarioPage({ onSelectScenario, onDashboard, onLogout }: ScenarioPageProps) {
  const { profile } = useAuth();
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchScenarios();
  }, []);

  const fetchScenarios = async () => {
    const { data, error } = await supabase
      .from('scenarios')
      .select('*')
      .order('created_at', { ascending: true });

    if (data && !error) {
      setScenarios(data);
    }
    setLoading(false);
  };

  const isPro = profile?.is_pro || false;
  const usageText = isPro ? 'Pro - Unlimited' : `${profile?.simulations_today || 0}/6 used today`;
  const canSimulate = isPro || (profile?.simulations_today || 0) < 6;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">Choose Scenario</span>
              <span className="text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100 rounded-full text-slate-600 w-fit">
                {usageText}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={onDashboard}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base text-slate-600 hover:text-slate-900 font-medium"
              >
                Dashboard
              </button>
              <button
                onClick={onLogout}
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base text-slate-600 hover:text-slate-900 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {!canSimulate && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-amber-800 font-medium text-sm sm:text-base">
              You've used all 6 free simulations today. Upgrade to Pro for unlimited access!
            </p>
            <button
              onClick={async () => {
                if (!profile?.id) return;
                const { error } = await supabase
                  .from('profiles')
                  .update({ is_pro: true, pro_upgraded_at: new Date().toISOString() })
                  .eq('id', profile.id);
                if (!error) {
                  setShowSuccessMessage(true);
                  setTimeout(() => window.location.reload(), 2000);
                }
              }}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold whitespace-nowrap text-sm sm:text-base"
            >
              Upgrade Now
            </button>
          </div>
        )}

        {loading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {scenarios.filter(s => !s.is_premium).map((scenario) => {
              const Icon = getScenarioIcon(scenario.title);
              const difficultyColor = getDifficultyColor(scenario.difficulty);
              const stars = getDifficultyStars(scenario.difficulty);

              return (
                <button
                  key={scenario.id}
                  onClick={() => canSimulate && onSelectScenario(scenario)}
                  disabled={!canSimulate}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 text-left disabled:opacity-50 disabled:cursor-not-allowed group sm:transform sm:hover:-translate-y-1"
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all shadow-md">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {scenario.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed min-h-[32px] sm:min-h-[40px]">
                    {scenario.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-base sm:text-lg">{stars}</span>
                      <span className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs font-semibold border ${difficultyColor}`}>
                        {scenario.difficulty}
                      </span>
                    </div>

                    <div className="text-emerald-600 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                      Start →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
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
              Refreshing your page...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
