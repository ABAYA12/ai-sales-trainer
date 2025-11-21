import { ArrowRight, TrendingUp, Award, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (page: 'home' | 'about' | 'features' | 'pricing') => void;
}

export default function LandingPage({ onGetStarted, onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar onNavigate={onNavigate} onAuthClick={onGetStarted} currentPage="home" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Practice Sales Calls with
            <span className="text-emerald-600"> AI Customers</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Realistic role-play simulations that help you close more deals. Get instant feedback, improve your pitch, and build confidence before the real call.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Start Free Training
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-slate-500">No credit card required. 6 free simulations daily.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Realistic AI Role-Play</h3>
            <p className="text-slate-600">
              Train with AI customers that behave like real buyers. They give objections, ask questions, and react to your pitch dynamically.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Scoring</h3>
            <p className="text-slate-600">
              Get instant feedback on clarity, confidence, objection handling, and closing ability. See exactly where to improve.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Track Improvement</h3>
            <p className="text-slate-600">
              View your progress over time. See score trends, save successful scripts, and build a winning sales playbook.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-4xl font-bold text-slate-900 mb-6">$0<span className="text-lg font-normal text-slate-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">6 simulations per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">Basic scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">Performance scoring</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
              >
                Get Started Free
              </button>
            </div>

            <div className="border-2 border-emerald-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
              <p className="text-4xl font-bold text-slate-900 mb-6">$9<span className="text-lg font-normal text-slate-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">Unlimited simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">All scenarios + custom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">Advanced scoring & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-600">Exportable scripts</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
