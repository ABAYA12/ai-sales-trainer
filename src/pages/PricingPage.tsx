import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PricingPageProps {
  onNavigate: (page: 'home' | 'about' | 'features' | 'pricing') => void;
  onGetStarted: () => void;
}

export default function PricingPage({ onNavigate, onGetStarted }: PricingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar onNavigate={onNavigate} onAuthClick={onGetStarted} currentPage="pricing" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Simple, <span className="text-emerald-600">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-slate-600">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-10 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-xl text-slate-600">/month</span>
            </div>
            <p className="text-slate-600 mb-8">Perfect for getting started and trying out PitchPilot.</p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">6 simulations per day</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Access to basic scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Performance scoring</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Basic feedback reports</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Progress tracking</span>
              </li>
            </ul>

            <button
              onClick={onGetStarted}
              className="w-full px-6 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors font-semibold text-lg"
            >
              Get Started Free
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 border-2 border-emerald-600 rounded-2xl p-10 text-white relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-bold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">$9</span>
              <span className="text-xl text-emerald-100">/month</span>
            </div>
            <p className="text-emerald-50 mb-8">For serious sales professionals committed to improvement.</p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Unlimited simulations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">All scenarios + create custom ones</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Advanced scoring & analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Detailed performance reports</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Exportable scripts & playbooks</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">Historical trend analysis</span>
              </li>
            </ul>

            <button
              onClick={onGetStarted}
              className="w-full px-6 py-4 bg-white text-emerald-600 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-lg shadow-lg"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-slate-600">
                Yes! You can cancel your Pro subscription at any time. You'll continue to have access until the end of your billing period, then automatically revert to the free plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-slate-600">
                We accept all major credit cards including Visa, Mastercard, American Express, and Discover.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is there a free trial for Pro?</h3>
              <p className="text-slate-600">
                The free plan gives you a great taste of PitchPilot with 6 daily simulations. When you're ready for unlimited access and advanced features, you can upgrade to Pro anytime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer team or enterprise plans?</h3>
              <p className="text-slate-600">
                We're working on team and enterprise solutions. Contact us if you're interested in bringing PitchPilot to your sales organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
