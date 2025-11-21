import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ScenarioPage from './pages/ScenarioPage';
import SimulationPage from './pages/SimulationPage';
import ScorePage from './pages/ScorePage';
import DashboardPage from './pages/DashboardPage';
import { Scenario } from './lib/supabase';

type Page = 'landing' | 'about' | 'features' | 'pricing' | 'onboarding' | 'scenarios' | 'simulation' | 'score' | 'dashboard';

function AppContent() {
  const { user, signOut, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [completedSimulationId, setCompletedSimulationId] = useState<string>('');

  const handleNavigate = (page: 'home' | 'about' | 'features' | 'pricing') => {
    const pageMap: Record<typeof page, Page> = {
      'home': 'landing',
      'about': 'about',
      'features': 'features',
      'pricing': 'pricing'
    };
    setCurrentPage(pageMap[page]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!user) {
    if (currentPage === 'about') {
      return <AboutPage onNavigate={handleNavigate} onGetStarted={() => setCurrentPage('onboarding')} />;
    }

    if (currentPage === 'features') {
      return <FeaturesPage onNavigate={handleNavigate} onGetStarted={() => setCurrentPage('onboarding')} />;
    }

    if (currentPage === 'pricing') {
      return <PricingPage onNavigate={handleNavigate} onGetStarted={() => setCurrentPage('onboarding')} />;
    }

    if (currentPage === 'onboarding') {
      return (
        <OnboardingPage
          onComplete={() => setCurrentPage('scenarios')}
          onNavigate={handleNavigate}
        />
      );
    }

    return <LandingPage onGetStarted={() => setCurrentPage('onboarding')} onNavigate={handleNavigate} />;
  }

  if (currentPage === 'simulation' && selectedScenario) {
    return (
      <SimulationPage
        scenario={selectedScenario}
        onComplete={(simulationId) => {
          setCompletedSimulationId(simulationId);
          setCurrentPage('score');
        }}
        onBack={() => setCurrentPage('dashboard')}
      />
    );
  }

  if (currentPage === 'score' && completedSimulationId) {
    return (
      <ScorePage
        simulationId={completedSimulationId}
        onDashboard={() => setCurrentPage('dashboard')}
        onTryAgain={() => setCurrentPage('scenarios')}
      />
    );
  }

  if (currentPage === 'scenarios') {
    return (
      <ScenarioPage
        onSelectScenario={(scenario) => {
          setSelectedScenario(scenario);
          setCurrentPage('simulation');
        }}
        onDashboard={() => setCurrentPage('dashboard')}
        onLogout={async () => {
          await signOut();
          setCurrentPage('landing');
        }}
      />
    );
  }

  return (
    <DashboardPage
      onStartNew={() => setCurrentPage('scenarios')}
      onLogout={async () => {
        await signOut();
        setCurrentPage('landing');
      }}
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
