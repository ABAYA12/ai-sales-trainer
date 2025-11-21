import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'features' | 'pricing') => void;
  onGetStarted: () => void;
}

export default function AboutPage({ onNavigate, onGetStarted }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar onNavigate={onNavigate} onAuthClick={onGetStarted} currentPage="about" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-emerald-600">PitchPilot</span>
          </h1>
          <p className="text-xl text-slate-600">
            We're on a mission to help sales professionals master their craft through realistic AI-powered practice simulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-14 w-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Every sales professional deserves access to high-quality training that doesn't require expensive coaches or time-consuming role-plays with colleagues. We built PitchPilot to democratize sales training, making expert-level practice accessible to everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="h-14 w-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why We Built This</h2>
            <p className="text-slate-600 leading-relaxed">
              Sales training is often theoretical and disconnected from real-world scenarios. We wanted to create a safe space where sales professionals could practice, fail, learn, and improve without the pressure of a real sales call.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">User-Focused</h3>
              <p className="text-slate-600">
                Every feature is designed with the sales professional in mind, ensuring practical value in real scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Continuous Improvement</h3>
              <p className="text-slate-600">
                We constantly refine our AI models and scenarios based on user feedback and real-world sales best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Results-Driven</h3>
              <p className="text-slate-600">
                Our platform is built to deliver measurable improvements in your sales performance and confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-emerald-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Sales Skills?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of sales professionals who are already practicing with PitchPilot.
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
