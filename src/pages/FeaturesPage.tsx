import { Zap, Award, TrendingUp, MessageSquare, BarChart3, BookOpen, Shield, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FeaturesPageProps {
  onNavigate: (page: 'home' | 'about' | 'features' | 'pricing') => void;
  onGetStarted: () => void;
}

export default function FeaturesPage({ onNavigate, onGetStarted }: FeaturesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar onNavigate={onNavigate} onAuthClick={onGetStarted} currentPage="features" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Powerful <span className="text-emerald-600">Features</span>
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to master sales conversations and close more deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Realistic AI Role-Play</h3>
            <p className="text-slate-600">
              Practice with AI customers that behave like real buyers. They give objections, ask questions, and react to your pitch dynamically.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Scoring</h3>
            <p className="text-slate-600">
              Get instant feedback on clarity, confidence, objection handling, and closing ability. See exactly where to improve.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Track Improvement</h3>
            <p className="text-slate-600">
              View your progress over time. See score trends, save successful scripts, and build a winning sales playbook.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Diverse Scenarios</h3>
            <p className="text-slate-600">
              From cold calls to enterprise demos, practice the scenarios that matter most to your role and industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Analytics</h3>
            <p className="text-slate-600">
              Deep insights into your communication patterns, filler words, listening ratios, and more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Script Library</h3>
            <p className="text-slate-600">
              Save and refine your best-performing scripts. Export them for quick reference during real calls.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Practice Anytime</h3>
            <p className="text-slate-600">
              No scheduling required. Practice whenever you have a few minutes, from anywhere in the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Safe Learning Environment</h3>
            <p className="text-slate-600">
              Make mistakes without consequences. Build confidence in a risk-free environment before facing real prospects.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Start practicing today with 3 free simulations daily.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-slate-50 transition-colors font-semibold text-lg shadow-lg"
          >
            Start Free Training
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
