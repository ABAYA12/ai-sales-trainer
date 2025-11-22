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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Practice Sales Calls with
            <span className="text-emerald-600"> AI Customers</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 px-2">
            Realistic role-play simulations that help you close more deals. Get instant feedback, improve your pitch, and build confidence before the real call.
          </p>
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Start Free Training
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500">No credit card required. 6 free simulations daily.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Realistic AI Role-Play</h3>
            <p className="text-sm sm:text-base text-slate-600">
              Train with AI customers that behave like real buyers. They give objections, ask questions, and react to your pitch dynamically.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Performance Scoring</h3>
            <p className="text-sm sm:text-base text-slate-600">
              Get instant feedback on clarity, confidence, objection handling, and closing ability. See exactly where to improve.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 sm:col-span-2 md:col-span-1">
            <div className="h-10 w-10 sm:h-12 sm:w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Track Improvement</h3>
            <p className="text-sm sm:text-base text-slate-600">
              View your progress over time. See score trends, save successful scripts, and build a winning sales playbook.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="border border-slate-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">$0<span className="text-base sm:text-lg font-normal text-slate-600">/month</span></p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">6 simulations per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">Basic scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">Performance scoring</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm sm:text-base"
              >
                Get Started Free
              </button>
            </div>

            <div className="border-2 border-emerald-600 rounded-xl p-6 sm:p-8 relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Pro</h3>
              <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">$9<span className="text-base sm:text-lg font-normal text-slate-600">/month</span></p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">Unlimited simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">All scenarios + custom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">Advanced scoring & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5 sm:mt-1">✓</span>
                  <span className="text-sm sm:text-base text-slate-600">Exportable scripts</span>
                </li>
              </ul>
              <button
                onClick={onGetStarted}
                className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-sm sm:text-base"
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
